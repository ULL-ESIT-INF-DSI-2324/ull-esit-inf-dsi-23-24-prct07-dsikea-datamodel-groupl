import { Furniture, FurnitureCollection } from './furniture.js';
import { Supplier, SupplierCollection } from './supplier.js';
import { Customer, CustomerCollection } from './customer.js';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

export interface Transaccion {
    fecha: Date;
    tipo: 'compra' | 'venta' | 'devolucion' | 'manual'; // Agrega 'manual' a la unión de tipos
    items: {
        mueble: Furniture;
        cantidad: number;
    }[];
}

interface Informe {
    rangoFechas: { inicio: Date; fin: Date };
    tipo: 'stock' | 'ventas' | 'compras';
}

export class Stock {
    private coleccionMuebles: FurnitureCollection;
    private coleccionProveedores: SupplierCollection;
    private coleccionClientes: CustomerCollection;
    private transacciones: Transaccion[];

    constructor() {
        const adaptador = new FileSync('stock.json');
        const db = low(adaptador);

        this.coleccionMuebles = new FurnitureCollection();
        this.coleccionProveedores = new SupplierCollection();
        this.coleccionClientes = new CustomerCollection();
        this.transacciones = db.get('transacciones').value() || [];

        this.iniciarBaseDatos();
    }

    private iniciarBaseDatos() {
    // Cargar datos iniciales de la base de datos desde el archivo JSON
    const adaptador = new FileSync('stock.json');
    const db = low(adaptador);

    // Obtener datos de muebles, proveedores y clientes del archivo JSON
    const muebles = db.get('muebles').value() || [];
    const proveedores = db.get('proveedores').value() || [];
    const clientes = db.get('clientes').value() || [];

    // Cargar muebles
    muebles.forEach((mueble: any) => {
        const nuevoMueble = new Furniture(mueble.id, mueble.name, mueble.description, mueble.material, mueble.dimensions, mueble.price);
        this.agregarMueble(nuevoMueble);
    });

    // Cargar proveedores
    proveedores.forEach((proveedor: any) => {
        const nuevoProveedor = new Supplier(proveedor.id, proveedor.name, proveedor.contact, proveedor.address);
        this.agregarProveedor(nuevoProveedor);
    });

    // Cargar clientes
    clientes.forEach((cliente: any) => {
        const nuevoCliente = new Customer(cliente.id, cliente.name, cliente.email, cliente.address);
        this.agregarCliente(nuevoCliente);
    });
    }

    agregarMueble(mueble: Furniture): void {
        this.coleccionMuebles.addFurniture(mueble);
    }

    agregarProveedor(proveedor: Supplier): void {
        this.coleccionProveedores.addSupplier(proveedor);
    }

    agregarCliente(cliente: Customer): void {
        this.coleccionClientes.addCustomer(cliente);
    }

    getColeccionClientes(){
        return this.coleccionClientes;
    }

    registrarCompra(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'compra', items });
    }

    registrarVenta(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'venta', items });
    }

    listarClientes(): void {
        const clientes = this.coleccionClientes.getCustomers();
        if (clientes.length === 0) {
            console.log('No hay clientes registrados.');
        } else {
            console.log('Lista de clientes:');
            clientes.forEach(cliente => {
                console.log(`ID: ${cliente.getId()}, Nombre: ${cliente.getName()}, Correo electrónico: ${cliente.getContact()}, Dirección: ${cliente.getAddress()}`);
            });
        }
    }

    listarMuebles(): void {
        const muebles = this.coleccionMuebles.getFurnitureList();
        if (muebles.length === 0) {
            console.log('No hay muebles registrados.');
        } else {
            console.log('Lista de muebles:');
            muebles.forEach(mueble => {
                console.log(`ID: ${mueble.getId()}, Nombre: ${mueble.getName()}, Descripción: ${mueble.getDescription()}, Material: ${mueble.getMaterial()}, Dimensiones: ${mueble.getDimensions()}, Precio: ${mueble.getPrice()}`);
            });
        }
    }


    obtenerStock(mueble: Furniture): number {
        const compras = this.transacciones.filter(
            transaccion => transaccion.tipo === 'compra' && transaccion.items.some(item => item.mueble === mueble)
        );
        const ventas = this.transacciones.filter(
            transaccion => transaccion.tipo === 'venta' && transaccion.items.some(item => item.mueble === mueble)
        );
        const stockCompras = compras.reduce((total, compra) => {
            return total + compra.items.filter(item => item.mueble === mueble).reduce((subTotal, item) => subTotal + item.cantidad, 0);
        }, 0);
        const stockVentas = ventas.reduce((total, venta) => {
            return total + venta.items.filter(item => item.mueble === mueble).reduce((subTotal, item) => subTotal + item.cantidad, 0);
        }, 0);
        return stockCompras - stockVentas;
    }

    obtenerInformeVentas(informe: Informe): number {
        const ventas = this.transacciones.filter(
            transaccion => transaccion.tipo === 'venta' && transaccion.fecha >= informe.rangoFechas.inicio && transaccion.fecha <= informe.rangoFechas.fin
        );
        const totalVentas = ventas.reduce((total, venta) => {
            return total + venta.items.reduce((subtotal, item) => subtotal + item.cantidad, 0);
        }, 0);
        return totalVentas;
    }

    obtenerInformeCompras(informe: Informe): number {
        const compras = this.transacciones.filter(
            transaccion => transaccion.tipo === 'compra' && transaccion.fecha >= informe.rangoFechas.inicio && transaccion.fecha <= informe.rangoFechas.fin
        );
        const totalCompras = compras.reduce((total, compra) => {
            return total + compra.items.reduce((subtotal, item) => subtotal + item.cantidad, 0);
        }, 0);
        return totalCompras;
    }

    obtenerInformeStock(mueble?: Furniture): number {
        let stockTotal = 0;
        if (mueble) {
            stockTotal = this.obtenerStock(mueble);
        }
        // Puedes implementar lógica para obtener stock por categoría aquí si es necesario
        return stockTotal;
    }
    

    generarInformeStockMinimo(stockMinimo: number): Furniture[] {
        const mueblesBajosStock: Furniture[] = [];
        // Obtener la lista de muebles de la colección
        const muebles = this.coleccionMuebles.getFurnitureList();
        // Recorrer los muebles para verificar el stock
        muebles.forEach(mueble => {
            if (this.obtenerStock(mueble) <= stockMinimo) {
                mueblesBajosStock.push(mueble);
            }
        });
        return mueblesBajosStock;
    }
    

    registrarDevolucion(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'devolucion', items });
    }

    obtenerInformeTransaccionesPorTipo(tipo: 'compra' | 'venta' | 'devolucion'): Transaccion[] {
        return this.transacciones.filter(transaccion => transaccion.tipo === tipo);
    }

    actualizarStockManual(mueble: Furniture, cantidad: number): void {
        const index = this.transacciones.findIndex(
            transaccion => transaccion.tipo === 'manual' && transaccion.items.some(item => item.mueble === mueble)
        );
        if (index !== -1) {
            this.transacciones[index].items.forEach(item => {
                if (item.mueble === mueble) {
                    item.cantidad += cantidad;
                }
            });
        } else {
            // Crear una nueva transacción de tipo 'manual' si no existe
            const nuevaTransaccion: Transaccion = {
                fecha: new Date(),
                tipo: 'manual',
                items: [{ mueble, cantidad }],
            };
            this.transacciones.push(nuevaTransaccion);
        }
    }
}
