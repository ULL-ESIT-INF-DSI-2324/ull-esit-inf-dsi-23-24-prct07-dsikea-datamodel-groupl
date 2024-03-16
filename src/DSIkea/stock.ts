import { Furniture, FurnitureCollection } from './furniture.js';
import { Supplier, SupplierCollection } from './supplier.js';
import { Customer, CustomerCollection } from './customer.js';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

export interface Transaccion {
    fecha: Date;
    tipo: 'compra' | 'venta' | 'devolucion';
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

    // Agregar un nuevo mueble a la coleccion
    agregarMueble(mueble: Furniture): void {
        this.coleccionMuebles.addFurniture(mueble);
    }

    // Agregar un nuevo proveedor a la coleccion
    agregarProveedor(proveedor: Supplier): void {
        this.coleccionProveedores.addSupplier(proveedor);
    }

    // Agregar un nuevo cliente a la coleccion
    agregarCliente(cliente: Customer): void {
        this.coleccionClientes.addCustomer(cliente);
    }

    // Registrar una transaccion de compra
    registrarCompra(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'compra', items });
    }

    // Registrar una transaccion de venta
    registrarVenta(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'venta', items });
    }

    // Obtener el stock disponible de un mueble específico
    obtenerStock(mueble: Furniture): number {
        // Calcular stock basado en transacciones
    }

    // Obtener el total de ventas dentro de un rango de fechas
    obtenerInformeVentas(informe: Informe): number {
        // Calcular total de ventas dentro del rango de fechas especificado
    }

    // Obtener el total de compras dentro de un rango de fechas
    obtenerInformeCompras(informe: Informe): number {
        // Calcular total de compras dentro del rango de fechas especificado
    }

    // Obtener el informe de stock para un mueble específico o categoría
    obtenerInformeStock(mueble?: Furniture, categoría?: string): number {
        // Generar informe de stock para el mueble o categoría especificados
    }

    // Otros métodos para generar informes, gestionar stock, etc.
}
