import { Supplier, SupplierCollection } from './supplier.js';

/**
 * Clase que gestiona la colección de proveedores.
 */
export class SupplierManager {
    private supplierCollection: SupplierCollection;

    /**
     * Crea una instancia de SupplierManager.
     */
    constructor() {
        this.supplierCollection = new SupplierCollection();
    }

    /**
     * Agrega un proveedor a la colección.
     * @param supplier El proveedor a agregar.
     */
    addSupplier(supplier: Supplier): void {
        this.supplierCollection.addSupplier(supplier);
    }

    /**
     * Actualiza un proveedor existente en la colección.
     * @param id El ID del proveedor a actualizar.
     * @param updatedSupplier El proveedor actualizado.
     * @returns True si se actualizó correctamente, False si no se encontró el proveedor.
     */
    updateSupplier(id: string, updatedSupplier: Supplier): boolean {
        const index = this.findIndexById(id);
        if (index !== -1) {
            const supplierList = this.supplierCollection['suppliers']; // Acceder directamente al array
            supplierList[index] = updatedSupplier;
            return true;
        }
        return false; // Proveedor no encontrado
    }

    /**
     * Elimina un proveedor de la colección.
     * @param id El ID del proveedor a eliminar.
     * @returns True si se eliminó correctamente, False si no se encontró el proveedor.
     */
    deleteSupplier(id: string): boolean {
        const index = this.findIndexById(id);
        if (index !== -1) {
            const supplierList = this.supplierCollection['suppliers']; // Acceder directamente al array
            supplierList.splice(index, 1);
            return true;
        }
        return false; // Proveedor no encontrado
    }

    /**
     * Busca un proveedor por su ID.
     * @param id El ID del proveedor a buscar.
     * @returns El proveedor encontrado o null si no se encontró.
     */
    findSupplierById(id: string): Supplier | null {
        const index = this.findIndexById(id);
        if (index !== -1) {
            const supplierList = this.supplierCollection['suppliers']; // Acceder directamente al array
            return supplierList[index];
        }
        return null; // Proveedor no encontrado
    }

    /**
     * Busca el índice de un proveedor por su ID.
     * @param id El ID del proveedor a buscar.
     * @returns El índice del proveedor encontrado o -1 si no se encontró.
     */
    private findIndexById(id: string): number {
        const supplierList = this.supplierCollection['suppliers']; // Acceder directamente al array
        return supplierList.findIndex(supplier => supplier.getId() === id);
    }
}
