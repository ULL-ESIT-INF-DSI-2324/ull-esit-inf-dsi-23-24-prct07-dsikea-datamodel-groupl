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

/**
 * Clase para representar un sofá.
 * @extends Furniture
 */
export class Sofa extends Furniture {
  /**
   * Crea una instancia de Sofa.
   * @param id El ID único del sofá.
   * @param name El nombre del sofá.
   * @param description La descripción del sofá.
   * @param material El material del sofá.
   * @param dimensions Las dimensiones del sofá.
   * @param price El precio del sofá.
   */
  constructor(id: string, name: string, description: string, material: string, dimensions: string, price: number) {
      super(id, name, description, material, dimensions, price);
  }
}

/**
 * Clase para representar una cómoda.
 * @extends Furniture
 */
export class Comoda extends Furniture {
  private _numCajones: number;

  /**
   * Crea una instancia de Comoda.
   * @param id El ID único de la cómoda.
   * @param name El nombre de la cómoda.
   * @param description La descripción de la cómoda.
   * @param material El material de la cómoda.
   * @param dimensions Las dimensiones de la cómoda.
   * @param price El precio de la cómoda.
   * @param numCajones El número de cajones de la cómoda.
   */
  constructor(id: string, name: string, description: string, material: string, dimensions: string, price: number, numCajones: number) {
      super(id, name, description, material, dimensions, price);
      this._numCajones = numCajones;
  }

  /**
   * Obtiene el número de cajones de la cómoda.
   * @returns El número de cajones.
   */
  get numCajones(): number {
      return this._numCajones;
  }
}

/**
* Clase para representar una mesa.
* @extends Furniture
*/
export class Mesa extends Furniture {
  /**
   * Crea una instancia de Mesa.
   * @param id El ID único de la mesa.
   * @param name El nombre de la mesa.
   * @param description La descripción de la mesa.
   * @param material El material de la mesa.
   * @param dimensions Las dimensiones de la mesa.
   * @param price El precio de la mesa.
   */
  constructor(id: string, name: string, description: string, material: string, dimensions: string, price: number) {
      super(id, name, description, material, dimensions, price);
  }
}

/**
* Clase para representar una cama.
* @extends Furniture
*/
export class Cama extends Furniture {
  /**
   * Crea una instancia de Cama.
   * @param id El ID único de la cama.
   * @param name El nombre de la cama.
   * @param description La descripción de la cama.
   * @param material El material de la cama.
   * @param dimensions Las dimensiones de la cama.
   * @param price El precio de la cama.
   */
  constructor(id: string, name: string, description: string, material: string, dimensions: string, price: number) {
      super(id, name, description, material, dimensions, price);
  }
}

/**
 * Clase para representar un escritorio.
 * @extends Furniture
 */
export class Escritorio extends Furniture {
  private _numCajones: number;

  /**
   * Crea una instancia de Escritorio.
   * @param id El ID único del escritorio.
   * @param name El nombre del escritorio.
   * @param description La descripción del escritorio.
   * @param material El material del escritorio.
   * @param dimensions Las dimensiones del escritorio.
   * @param price El precio del escritorio.
   * @param numCajones El número de cajones del escritorio.
   */
  constructor(id: string, name: string, description: string, material: string, dimensions: string, price: number, numCajones: number) {
      super(id, name, description, material, dimensions, price);
      this._numCajones = numCajones;
  }

  /**
   * Obtiene el número de cajones del escritorio.
   * @returns El número de cajones.
   */
  get numCajones(): number {
      return this._numCajones;
  }
}

/**
* Clase para representar una lámpara de mesa.
* @extends Furniture
*/
export class LamparaMesa extends Furniture {
  private _tipoLuz: string;

  /**
   * Crea una instancia de LamparaMesa.
   * @param id El ID único de la lámpara.
   * @param name El nombre de la lámpara.
   * @param description La descripción de la lámpara.
   * @param material El material de la lámpara.
   * @param dimensions Las dimensiones de la lámpara.
   * @param price El precio de la lámpara.
   * @param tipoLuz El tipo de luz de la lámpara.
   */
  constructor(id: string, name: string, description: string, material: string, dimensions: string, price: number, tipoLuz: string) {
      super(id, name, description, material, dimensions, price);
      this._tipoLuz = tipoLuz;
  }

  /**
   * Obtiene el tipo de luz de la lámpara de mesa.
   * @returns El tipo de luz.
   */
  get tipoLuz(): string {
      return this._tipoLuz;
  }
}

/**
 * Clase para representar un armario ropero.
 * @extends Furniture
 */
export class ArmarioRopero extends Furniture {
  private _numPuertas: number;

  /**
   * Crea una instancia de ArmarioRopero.
   * @param id El ID único del armario ropero.
   * @param name El nombre del armario ropero.
   * @param description La descripción del armario ropero.
   * @param material El material del armario ropero.
   * @param dimensions Las dimensiones del armario ropero.
   * @param price El precio del armario ropero.
   * @param numPuertas El número de puertas del armario ropero.
   */
  constructor(id: string, name: string, description: string, material: string, dimensions: string, price: number, numPuertas: number) {
      super(id, name, description, material, dimensions, price);
      this._numPuertas = numPuertas;
  }

  /**
   * Obtiene el número de puertas del armario ropero.
   * @returns El número de puertas.
   */
  get numPuertas(): number {
      return this._numPuertas;
  }
}