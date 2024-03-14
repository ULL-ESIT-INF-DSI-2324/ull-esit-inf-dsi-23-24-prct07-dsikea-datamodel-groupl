/**
 * Clase para representar un mueble.
 */
export class Furniture {
    /**
     * Crea una instancia de Furniture.
     * @param id El ID único del mueble.
     * @param name El nombre del mueble.
     * @param description La descripción del mueble.
     * @param material El material del que está hecho el mueble.
     * @param dimensions Las dimensiones del mueble.
     * @param price El precio del mueble.
     */
    constructor(
      private id: string,
      private name: string,
      private description: string,
      private material: string,
      private dimensions: string,
      private price: number
    ) {}
  
    /**
     * Obtiene el ID del mueble.
     * @returns El ID del mueble.
     */
    getId(): string {
      return this.id;
    }
  
    /**
     * Establece el ID del mueble.
     * @param id El nuevo ID del mueble.
     */
    setId(id: string): void {
      this.id = id;
    }
  
    /**
     * Obtiene el nombre del mueble.
     * @returns El nombre del mueble.
     */
    getName(): string {
      return this.name;
    }
  
    /**
     * Establece el nombre del mueble.
     * @param name El nuevo nombre del mueble.
     */
    setName(name: string): void {
      this.name = name;
    }
  
    /**
     * Obtiene la descripción del mueble.
     * @returns La descripción del mueble.
     */
    getDescription(): string {
      return this.description;
    }
  
    /**
     * Establece la descripción del mueble.
     * @param description La nueva descripción del mueble.
     */
    setDescription(description: string): void {
      this.description = description;
    }
  
    /**
     * Obtiene el material del mueble.
     * @returns El material del mueble.
     */
    getMaterial(): string {
      return this.material;
    }
  
    /**
     * Establece el material del mueble.
     * @param material El nuevo material del mueble.
     */
    setMaterial(material: string): void {
      this.material = material;
    }
  
    /**
     * Obtiene las dimensiones del mueble.
     * @returns Las dimensiones del mueble.
     */
    getDimensions(): string {
      return this.dimensions;
    }
  
    /**
     * Establece las dimensiones del mueble.
     * @param dimensions Las nuevas dimensiones del mueble.
     */
    setDimensions(dimensions: string): void {
      this.dimensions = dimensions;
    }
  
    /**
     * Obtiene el precio del mueble.
     * @returns El precio del mueble.
     */
    getPrice(): number {
      return this.price;
    }
  
    /**
     * Establece el precio del mueble.
     * @param price El nuevo precio del mueble.
     */
    setPrice(price: number): void {
      this.price = price;
    }
}
  
/**
* Clase para manejar la colección de muebles.
*/
export class FurnitureCollection {
    private furnitures: Furniture[] = [];
  
    /**
     * Agrega un mueble a la colección.
     * @param furniture El mueble a agregar.
     */
    addFurniture(furniture: Furniture): void {
      this.furnitures.push(furniture);
    }
  
}
  
  