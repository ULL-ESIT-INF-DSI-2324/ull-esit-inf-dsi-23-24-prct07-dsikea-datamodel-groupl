import { Furniture, FurnitureCollection } from './furniture.js';

/**
 * Clase que gestiona la colección de muebles.
 */
export class FurnitureManager {
    private furnitureCollection: FurnitureCollection;

    /**
     * Crea una instancia de FurnitureManager.
     */
    constructor() {
        this.furnitureCollection = new FurnitureCollection();
    }

    /**
     * Agrega un mueble a la colección.
     * @param furniture El mueble a agregar.
     */
    addFurniture(furniture: Furniture): void {
        this.furnitureCollection.addFurniture(furniture);
    }

    /**
     * Actualiza un mueble existente en la colección.
     * @param id El ID del mueble a actualizar.
     * @param updatedFurniture El mueble actualizado.
     * @returns True si se actualizó correctamente, False si no se encontró el mueble.
     */
    updateFurniture(id: string, updatedFurniture: Furniture): boolean {
        const index = this.findIndexById(id);
        if (index !== -1) {
            const furnitureList = this.furnitureCollection.getFurnitureList();
            furnitureList[index] = updatedFurniture;
            return true;
        }
        return false; // Mueble no encontrado
    }

    /**
     * Elimina un mueble de la colección.
     * @param id El ID del mueble a eliminar.
     * @returns True si se eliminó correctamente, False si no se encontró el mueble.
     */
    deleteFurniture(id: string): boolean {
        const index = this.findIndexById(id);
        if (index !== -1) {
            const furnitureList = this.furnitureCollection.getFurnitureList();
            furnitureList.splice(index, 1);
            return true;
        }
        return false; // Mueble no encontrado
    }

    /**
     * Busca un mueble por su ID.
     * @param id El ID del mueble a buscar.
     * @returns El mueble encontrado o null si no se encontró.
     */
    findFurnitureById(id: string): Furniture | null {
        const index = this.findIndexById(id);
        if (index !== -1) {
            const furnitureList = this.furnitureCollection.getFurnitureList();
            return furnitureList[index];
        }
        return null; // Mueble no encontrado
    }

    /**
     * Busca el índice de un mueble por su ID.
     * @param id El ID del mueble a buscar.
     * @returns El índice del mueble encontrado o -1 si no se encontró.
     */
    private findIndexById(id: string): number {
        return this.furnitureCollection.findIndexById(id);
    }

        /**
     * Obtiene una lista de todos los muebles.
     * @returns La lista de muebles.
     */
        getFurnitureList(): Furniture[] {
            return this.furnitureCollection.getFurnitureList();
        }
}
