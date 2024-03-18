import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';
import { Furniture, FurnitureCollection } from './furniture.js';
import { Supplier, SupplierCollection } from './supplier.js';
import { Customer, CustomerCollection } from './customer.js';

/**
 * Interfaz para representar una transacción en la base de datos.
 */
export interface Transaccion {
    fecha: Date;
    tipo: 'compra' | 'venta' | 'devolucion' | 'manual';
    items: {
        mueble: Furniture;
        cantidad: number;
    }[];
}

/**
 * Interfaz para representar un informe de ventas, compras o stock.
 */
interface Informe {
    rangoFechas: { inicio: Date; fin: Date };
    tipo: 'stock' | 'ventas' | 'compras';
}

/**
 * Interfaz para representar los datos de un mueble en la base de datos.
 */
interface MuebleData {
    id: string;
    name: string;
    description: string;
    material: string;
    dimensions: string;
    price: number;
}

/**
 * Interfaz para representar los datos de un proveedor en la base de datos.
 */
interface ProveedorData {
    id: string;
    name: string;
    contact: string;
    address: string;
}

/**
 * Interfaz para representar los datos de un cliente en la base de datos.
 */
interface ClienteData {
    id: string;
    name: string;
    email: string;
    address: string;
}

/**
 * Interfaz para representar la estructura de la base de datos.
 */
interface DatabaseSchema {
    muebles: MuebleData[];
    proveedores: ProveedorData[];
    clientes: ClienteData[];
}

/**
 * Clase que representa el stock de muebles en la tienda.
 */
export class Stock {
    private coleccionMuebles: FurnitureCollection;
    private coleccionProveedores: SupplierCollection;
    private coleccionClientes: CustomerCollection;
    private transacciones: Transaccion[];

    /**
     * Crea una instancia de la clase Stock.
     */
    constructor() {
        const adaptador = new FileSync('stock.json');
        const db = low(adaptador);

        this.coleccionMuebles = new FurnitureCollection();
        this.coleccionProveedores = new SupplierCollection();
        this.coleccionClientes = new CustomerCollection();
        this.transacciones = db.get('transacciones').value() || [];

        this.iniciarBaseDatos(db);
    }

    /**
     * Inicializa la base de datos con los datos existentes.
     * @param db Instancia de la base de datos.
     */
    private iniciarBaseDatos(db: low.LowdbSync<DatabaseSchema>) {
        const muebles: MuebleData[] = db.get('muebles').value() || [];
        const proveedores: ProveedorData[] = db.get('proveedores').value() || [];
        const clientes: ClienteData[] = db.get('clientes').value() || [];

        muebles.forEach((mueble: MuebleData) => {
            const nuevoMueble = new Furniture(mueble.id, mueble.name, mueble.description, mueble.material, mueble.dimensions, mueble.price);
            this.agregarMueble(nuevoMueble);
        });

        proveedores.forEach((proveedor: ProveedorData) => {
            const nuevoProveedor = new Supplier(proveedor.id, proveedor.name, proveedor.contact, proveedor.address);
            this.agregarProveedor(nuevoProveedor);
        });

        clientes.forEach((cliente: ClienteData) => {
            const nuevoCliente = new Customer(cliente.id, cliente.name, cliente.email, cliente.address);
            this.agregarCliente(nuevoCliente);
        });
    }

    /**
     * Agrega un mueble a la colección de muebles.
     * @param mueble Mueble a agregar.
     */
    agregarMueble(mueble: Furniture): void {
        this.coleccionMuebles.addFurniture(mueble);
    }

    /**
     * Agrega un proveedor a la colección de proveedores.
     * @param proveedor Proveedor a agregar.
     */
    agregarProveedor(proveedor: Supplier): void {
        this.coleccionProveedores.addSupplier(proveedor);
    }

    /**
     * Agrega un cliente a la colección de clientes.
     * @param cliente Cliente a agregar.
     */
    agregarCliente(cliente: Customer): void {
        this.coleccionClientes.addCustomer(cliente);
    }

    /**
     * Registra una compra en las transacciones.
     * @param fecha Fecha de la compra.
     * @param items Lista de ítems comprados.
     */
    registrarCompra(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'compra', items });
    }

    /**
     * Registra una venta en las transacciones.
     * @param fecha Fecha de la venta.
     * @param items Lista de ítems vendidos.
     */
    registrarVenta(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'venta', items });
    }

    /**
     * Lista todos los clientes registrados.
     */
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

    /**
     * Lista todos los muebles registrados.
     */
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

    /**
     * Obtiene el stock actual de un mueble.
     * @param mueble Mueble del cual se desea obtener el stock.
     * @returns El stock actual del mueble.
     */
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


    /**
     * Obtiene el total de ventas dentro de un rango de fechas especificado en el informe.
     * @param informe Informe con el rango de fechas para calcular las ventas.
     * @returns El total de ventas dentro del rango de fechas.
     */
    obtenerInformeVentas(informe: Informe): number {
        const ventas = this.transacciones.filter(
            transaccion => transaccion.tipo === 'venta' && transaccion.fecha >= informe.rangoFechas.inicio && transaccion.fecha <= informe.rangoFechas.fin
        );
        const totalVentas = ventas.reduce((total, venta) => {
            return total + venta.items.reduce((subtotal, item) => subtotal + item.cantidad, 0);
        }, 0);
        return totalVentas;
    }

    /**
     * Obtiene el total de compras dentro de un rango de fechas especificado en el informe.
     * @param informe Informe con el rango de fechas para calcular las compras.
     * @returns El total de compras dentro del rango de fechas.
     */
    obtenerInformeCompras(informe: Informe): number {
        const compras = this.transacciones.filter(
            transaccion => transaccion.tipo === 'compra' && transaccion.fecha >= informe.rangoFechas.inicio && transaccion.fecha <= informe.rangoFechas.fin
        );
        const totalCompras = compras.reduce((total, compra) => {
            return total + compra.items.reduce((subtotal, item) => subtotal + item.cantidad, 0);
        }, 0);
        return totalCompras;
    }

    /**
     * Obtiene el stock actual de un mueble específico o el stock total si no se especifica un mueble.
     * @param mueble (Opcional) Mueble del cual se desea obtener el stock.
     * @returns El stock actual del mueble o el stock total si no se especifica un mueble.
     */
    obtenerInformeStock(mueble?: Furniture): number {
        let stockTotal = 0;
        if (mueble) {
            stockTotal = this.obtenerStock(mueble);
        }
        // Puedes implementar lógica para obtener stock por categoría aquí si es necesario
        return stockTotal;
    }
    
    /**
     * Genera un informe de muebles cuyo stock está por debajo del mínimo especificado.
     * @param stockMinimo El stock mínimo deseado.
     * @returns Una lista de muebles con stock por debajo del mínimo especificado.
     */
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
    
    /**
     * Registra una devolución de muebles en las transacciones.
     * @param fecha Fecha de la devolución.
     * @param items Lista de ítems devueltos.
     */
    registrarDevolucion(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'devolucion', items });
    }

    /**
     * Obtiene todas las transacciones de un tipo específico (compra, venta, devolución).
     * @param tipo Tipo de transacción a filtrar.
     * @returns Una lista de transacciones del tipo especificado.
     */
    obtenerInformeTransaccionesPorTipo(tipo: 'compra' | 'venta' | 'devolucion'): Transaccion[] {
        return this.transacciones.filter(transaccion => transaccion.tipo === tipo);
    }

    /**
     * Actualiza manualmente el stock de un mueble en las transacciones.
     * Si no existe una transacción manual para ese mueble, crea una nueva transacción.
     * @param mueble Mueble al cual se actualizará el stock.
     * @param cantidad Cantidad de stock a agregar o quitar.
     */
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
