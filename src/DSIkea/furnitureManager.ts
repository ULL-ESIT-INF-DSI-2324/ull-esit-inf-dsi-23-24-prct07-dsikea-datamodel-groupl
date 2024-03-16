import { Furniture, FurnitureCollection } from './furniture.js';

export class FurnitureManager {
    private furnitureCollection: FurnitureCollection;

    constructor() {
        this.furnitureCollection = new FurnitureCollection();
    }

    addFurniture(furniture: Furniture): void {
        this.furnitureCollection.addFurniture(furniture);
    }

    // Implementa otras funciones para modificar, eliminar y buscar muebles
}
