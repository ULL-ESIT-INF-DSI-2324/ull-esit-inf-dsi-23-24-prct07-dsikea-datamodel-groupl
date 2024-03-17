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
        const adaptador = new FileSync('base_datos.json');
        const db = low(adaptador);

        this.coleccionMuebles = new FurnitureCollection();
        this.coleccionProveedores = new SupplierCollection();
        this.coleccionClientes = new CustomerCollection();
        this.transacciones = db.get('transacciones').value() || [];

        this.iniciarBaseDatos();
    }

    private iniciarBaseDatos() {
        // Cargar datos iniciales de la base de datos o crear nuevos datos si no existen
        // Cargar muebles, proveedores, clientes y transacciones
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

    registrarCompra(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'compra', items });
    }

    registrarVenta(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'venta', items });
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
