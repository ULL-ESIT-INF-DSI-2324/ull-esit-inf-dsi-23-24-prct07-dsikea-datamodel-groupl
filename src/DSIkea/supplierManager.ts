import { Supplier, SupplierCollection } from './supplier.js';

export class SupplierManager {
    private supplierCollection: SupplierCollection;

    constructor() {
        this.supplierCollection = new SupplierCollection();
    }

    addSupplier(supplier: Supplier): void {
        this.supplierCollection.addSupplier(supplier);
    }

    // Implementa otras funciones para modificar, eliminar y buscar proveedores
}
