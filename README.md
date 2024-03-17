# Práctica 7 - DSIkea

## Información de grupo

Mariam Laaroussi Ramos
alu0101441764@ull.edu.es

Lorenzo Román Luca De Tena
alu0101314990@ull.edu.es

Idaira Reina González
alu0101398495@ull.edu.es

(introducir cuando se hagan las pruebas aqui coveralls passing y test passing)

## Indice
- [1. Introducción](#introduccion)
- [2. Configuración del entorno](#config)
- [3. Desarrollo de la práctica](#desarrollo)
- [4. Conclusión](#conclusion)
- [5. Webgrafía](#webgrafia)

## 1. Introducción<a name="introduccion"></a>
En esta práctica grupal se pretente crear un diseño orientado a objetos del modelo de datos de un sistema de información destinado a gestionar una tienda de muebles. Para ello usaremos los módulos *Inquirer Lowdb, los cuales nos permitirán gestionar la línea de comandos de forma intercativa y tener información almacenada de forma persistente.

## Configuración del entorno


## `Furniture.ts`
```
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

  findIndexById(id: string): number {
      return this.furnitures.findIndex(furniture => furniture.getId() === id);
  }

  addFurniture(furniture: Furniture): void {
      this.furnitures.push(furniture);
  }

  getFurnitureList(): Furniture[] {
      return this.furnitures;
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

```

### Clase `Furniture`

- Esta clase sirve como una plantilla base para representar los atributos comunes de todos los muebles, como su ID único, nombre, descripción, material, dimensiones y precio. Estos atributos se inicializan en el constructor de la clase.

- Los métodos `getId`, `getName`, `getDescription`, `getMaterial`, `getDimensions` y `getPrice` permiten acceder a los atributos de un mueble de manera segura y controlada desde el exterior de la clase. Los métodos `setId`, `setName`, `setDescription`, `setMaterial`, `setDimensions` y `setPrice` permiten actualizar estos atributos de forma controlada.

### Clase `FurnitureCollection`

- Esta clase se encarga de manejar una colección de muebles. Utiliza un array privado `furnitures` para almacenar los muebles.

- El método `findIndexById` busca un mueble por su ID en la colección y devuelve su índice en el array `furnitures`.

- El método `addFurniture` agrega un nuevo mueble a la colección.

- El método `getFurnitureList` devuelve la lista completa de muebles almacenados en la colección.

### Clases de Muebles Específicos

- Estas clases heredan de la clase base `Furniture` y extienden su funcionalidad para representar muebles específicos con características adicionales.

- Cada clase de mueble específico tiene su propio constructor para inicializar los atributos adicionales necesarios.

- Algunas clases, como `Comoda`, `Escritorio`, `LamparaMesa` y `ArmarioRopero`, tienen atributos adicionales (`_numCajones`, `_tipoLuz` y `_numPuertas`) específicos que se inicializan en sus constructores. Estos atributos adicionales tienen sus propios métodos `get` para acceder a ellos.

- Al heredar de `Furniture`, estas clases también tienen acceso a los métodos para obtener y establecer los atributos comunes de los muebles.

Este código proporciona una estructura modular para representar diferentes tipos de muebles y manejar una colección de ellos. Cada clase tiene una responsabilidad clara y se diseñó pensando en la extensibilidad y la facilidad de mantenimiento. Los principios SOLID se aplican para garantizar un diseño sólido y flexible.


## `FurnitureManager.ts`

```
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
}
```

- Esta clase gestiona la colección de muebles y proporciona métodos para agregar, actualizar, eliminar y buscar muebles en la colección.

- En su constructor, instancia un objeto `FurnitureCollection` para almacenar los muebles.

- El método `addFurniture` agrega un nuevo mueble a la colección utilizando el método correspondiente de `FurnitureCollection`.

- El método `updateFurniture` actualiza un mueble existente en la colección. Busca el mueble por su ID utilizando el método privado `findIndexById`, y si lo encuentra, actualiza el mueble en la lista.

- El método `deleteFurniture` elimina un mueble de la colección. También utiliza el método privado `findIndexById` para encontrar el índice del mueble por su ID y, si lo encuentra, lo elimina de la lista.

- El método `findFurnitureById` busca un mueble por su ID en la colección y devuelve el mueble encontrado o null si no se encuentra.

- El método privado `findIndexById` busca el índice de un mueble por su ID utilizando el método correspondiente de `FurnitureCollection`.

### Relación con los Principios SOLID

- **Principio de Responsabilidad Única (SRP):** La clase `FurnitureManager` tiene una única responsabilidad: gestionar la colección de muebles y proporcionar operaciones relacionadas con ella.

- **Principio de Abierto/Cerrado (OCP):** La clase `FurnitureManager` es abierta para la extensión, ya que se pueden agregar más métodos para operaciones adicionales en la colección de muebles sin modificar el código existente.

- **Principio de Sustitución de Liskov (LSP):** La clase `FurnitureManager` utiliza abstracciones como `Furniture` y `FurnitureCollection`, lo que permite la sustitución de objetos concretos sin afectar el comportamiento del programa.

- **Principio de Segregación de Interfaces (ISP):** Aunque no se implementan explícitamente interfaces en este código, la clase `FurnitureManager` proporciona métodos cohesivos y específicos que no obligan a las clases cliente a depender de funcionalidades que no necesitan.

- **Principio de Inversión de Dependencia (DIP):** La clase `FurnitureManager` depende de la abstracción `FurnitureCollection` en lugar de depender de una implementación concreta. Esto permite la flexibilidad y la facilidad de cambio en el futuro.

La clase `FurnitureManager` proporciona una interfaz cohesiva y modular para gestionar una colección de muebles, siguiendo los principios SOLID para un diseño robusto y flexible.

## `Supplier.ts`

```
/**
 * Clase para representar un proveedor.
 */
export class Supplier {
    /**
     * Crea una instancia de Supplier.
     * @param id El ID único del proveedor.
     * @param name El nombre del proveedor.
     * @param contact La información de contacto del proveedor.
     * @param address La dirección del proveedor.
     */
    constructor(
      private id: string,
      private name: string,
      private contact: string,
      private address: string
    ) {}
  
    /**
     * Obtiene el ID del proveedor.
     * @returns El ID del proveedor.
     */
    getId(): string {
      return this.id;
    }
  
    /**
     * Establece el ID del proveedor.
     * @param id El nuevo ID del proveedor.
     */
    setId(id: string): void {
      this.id = id;
    }
  
    /**
     * Obtiene el nombre del proveedor.
     * @returns El nombre del proveedor.
     */
    getName(): string {
      return this.name;
    }
  
    /**
     * Establece el nombre del proveedor.
     * @param name El nuevo nombre del proveedor.
     */
    setName(name: string): void {
      this.name = name;
    }
  
    /**
     * Obtiene la información de contacto del proveedor.
     * @returns La información de contacto del proveedor.
     */
    getContact(): string {
      return this.contact;
    }
  
    /**
     * Establece la información de contacto del proveedor.
     * @param contact La nueva información de contacto del proveedor.
     */
    setContact(contact: string): void {
      this.contact = contact;
    }
  
    /**
     * Obtiene la dirección del proveedor.
     * @returns La dirección del proveedor.
     */
    getAddress(): string {
      return this.address;
    }
  
    /**
     * Establece la dirección del proveedor.
     * @param address La nueva dirección del proveedor.
     */
    setAddress(address: string): void {
      this.address = address;
    }
}
  
/**
* Clase para manejar la colección de proveedores.
*/
export class SupplierCollection {
    private suppliers: Supplier[] = [];
  
    /**
     * Agrega un proveedor a la colección.
     * @param supplier El proveedor a agregar.
     */
    addSupplier(supplier: Supplier): void {
      this.suppliers.push(supplier);
    }

}
```
Supplier y SupplierCollection, se utilizan para representar proveedores y manejar una colección de proveedores, respectivamente.

Clase Supplier:
Esta clase representa un proveedor y tiene las siguientes propiedades y métodos:

Propiedades:
```
id: ID único del proveedor (privado).
name: Nombre del proveedor (privado).
contact: Información de contacto del proveedor (privado).
address: Dirección del proveedor (privado).
```
Constructor:

Recibe como parámetros el ID, nombre, información de contacto y dirección del proveedor para inicializar las propiedades correspondientes al crear una instancia de Supplier.
Métodos:
```
getId(): Obtiene el ID del proveedor.
setId(id: string): Establece el ID del proveedor.
getName(): Obtiene el nombre del proveedor.
setName(name: string): Establece el nombre del proveedor.
getContact(): Obtiene la información de contacto del proveedor.
setContact(contact: string): Establece la información de contacto del proveedor.
getAddress(): Obtiene la dirección del proveedor.
setAddress(address: string): Establece la dirección del proveedor.
Clase SupplierCollection:
Esta clase se encarga de manejar una colección de proveedores y tiene la siguiente propiedad y método:
```
Propiedad:
```
suppliers: Arreglo de objetos Supplier que representa la colección de proveedores (privado).
Método:

addSupplier(supplier: Supplier): Agrega un proveedor a la colección suppliers.
```
## `supplierManager.ts`
Importación de clases:
```
import { Supplier, SupplierCollection } from './supplier.js';
```
En esta línea, se importan las clases Supplier y SupplierCollection desde el archivo supplier.js. Estas clases representan un proveedor individual y la colección de proveedores, respectivamente.
Clase SupplierManager:
```
export class SupplierManager {
    private supplierCollection: SupplierCollection;

    constructor() {
        this.supplierCollection = new SupplierCollection();
    }

    // Métodos para agregar, actualizar, eliminar y buscar proveedores
}
```
Esta clase representa un gestor de proveedores y tiene una propiedad privada supplierCollection que es una instancia de SupplierCollection. El constructor inicializa esta propiedad al crear una nueva instancia de SupplierCollection.
Método addSupplier(supplier: Supplier): void:
```
addSupplier(supplier: Supplier): void {
    this.supplierCollection.addSupplier(supplier);
}

```
Este método recibe un objeto Supplier como parámetro y lo agrega a la colección de proveedores a través del método addSupplier de la propiedad supplierCollection.
Método updateSupplier(id: string, updatedSupplier: Supplier): boolean:
```
    updateSupplier(id: string, updatedSupplier: Supplier): boolean {
        const index = this.findIndexById(id);
        if (index !== -1) {
            const supplierList = this.supplierCollection['suppliers']; // Acceder directamente al array
            supplierList[index] = updatedSupplier;
            return true;
        }
        return false; // Proveedor no encontrado
    }
```
Este método recibe el ID del proveedor a actualizar y un objeto Supplier actualizado. Busca el proveedor en la colección, lo actualiza si se encuentra y devuelve true, o devuelve false si no se encuentra el proveedor.
Método deleteSupplier(id: string): boolean:
```
    deleteSupplier(id: string): boolean {
        const index = this.findIndexById(id);
        if (index !== -1) {
            const supplierList = this.supplierCollection['suppliers']; // Acceder directamente al array
            supplierList.splice(index, 1);
            return true;
        }
        return false; // Proveedor no encontrado
    }
```
Este método recibe el ID del proveedor a eliminar, busca el proveedor en la colección y lo elimina si se encuentra, devolviendo true. Devuelve false si no se encuentra el proveedor.
Método findSupplierById(id: string): Supplier | null:
```
    findSupplierById(id: string): Supplier | null {
        const index = this.findIndexById(id);
        if (index !== -1) {
            const supplierList = this.supplierCollection['suppliers']; // Acceder directamente al array
            return supplierList[index];
        }
        return null; // Proveedor no encontrado
    }
```
Este método recibe el ID del proveedor a buscar, busca el proveedor en la colección y lo devuelve si se encuentra. Devuelve null si no se encuentra el proveedor.
Método findIndexById(id: string): number:
```
    private findIndexById(id: string): number {
        const supplierList = this.supplierCollection['suppliers']; // Acceder directamente al array
        return supplierList.findIndex(supplier => supplier.getId() === id);
    }
```
Este método recibe el ID del proveedor a buscar, busca su índice en la colección y lo devuelve. Devuelve -1 si no se encuentra el proveedor.

## `customer.ts`
```
/**
 * Clase para representar un cliente.
 */
export class Customer {
    /**
     * Crea una instancia de Customer.
     * @param id El ID único del cliente.
     * @param name El nombre del cliente.
     * @param contact La información de contacto del cliente.
     * @param address La dirección del cliente.
     */
    constructor(
      private id: string,
      private name: string,
      private contact: string,
      private address: string
    ) {}
  
    /**
     * Obtiene el ID del cliente.
     * @returns El ID del cliente.
     */
    getId(): string {
      return this.id;
    }
  
    /**
     * Establece el ID del cliente.
     * @param id El nuevo ID del cliente.
     */
    setId(id: string): void {
      this.id = id;
    }
  
    /**
     * Obtiene el nombre del cliente.
     * @returns El nombre del cliente.
     */
    getName(): string {
      return this.name;
    }
  
    /**
     * Establece el nombre del cliente.
     * @param name El nuevo nombre del cliente.
     */
    setName(name: string): void {
      this.name = name;
    }
  
    /**
     * Obtiene la información de contacto del cliente.
     * @returns La información de contacto del cliente.
     */
    getContact(): string {
      return this.contact;
    }
  
    /**
     * Establece la información de contacto del cliente.
     * @param contact La nueva información de contacto del cliente.
     */
    setContact(contact: string): void {
      this.contact = contact;
    }
  
    /**
     * Obtiene la dirección del cliente.
     * @returns La dirección del cliente.
     */
    getAddress(): string {
      return this.address;
    }
  
    /**
     * Establece la dirección del cliente.
     * @param address La nueva dirección del cliente.
     */
    setAddress(address: string): void {
      this.address = address;
    }
}
  
/**
* Clase para manejar la colección de clientes.
*/
export class CustomerCollection {
    private customers: Customer[] = [];
  
    /**
     * Agrega un cliente a la colección.
     * @param customer El cliente a agregar.
     */
    addCustomer(customer: Customer): void {
      this.customers.push(customer);
    }

    findIndexById(id: string): number {
      return this.customers.findIndex(customer => customer.getId() === id);
  }

  /**
   * Obtiene la lista de clientes.
   * @returns La lista de clientes.
   */
  getCustomers(): Customer[] {
      return this.customers;
  }
}
```
Customer y CustomerCollection, que se utilizan para representar clientes individuales y gestionar una colección de clientes, respectivamente.
Clase Customer:
Esta clase representa un cliente y tiene las siguientes propiedades y métodos:

Propiedades:

id: ID único del cliente (privado).
name: Nombre del cliente (privado).
contact: Información de contacto del cliente (privado).
address: Dirección del cliente (privado).
Constructor:

Recibe como parámetros el ID, nombre, información de contacto y dirección del cliente para inicializar las propiedades correspondientes al crear una instancia de Customer.
Métodos:

getId(): Obtiene el ID del cliente.
setId(id: string): Establece el ID del cliente.
getName(): Obtiene el nombre del cliente.
setName(name: string): Establece el nombre del cliente.
getContact(): Obtiene la información de contacto del cliente.
setContact(contact: string): Establece la información de contacto del cliente.
getAddress(): Obtiene la dirección del cliente.
setAddress(address: string): Establece la dirección del cliente.
Clase CustomerCollection:
Esta clase se encarga de manejar una colección de clientes y tiene la siguiente propiedad y método:

Propiedad:

customers: Arreglo de objetos Customer que representa la colección de clientes (privado).
Métodos:

addCustomer(customer: Customer): void: Agrega un cliente a la colección customers.
findIndexById(id: string): number: Busca el índice de un cliente por su ID en la colección.
getCustomers(): Customer[]: Obtiene la lista de todos los clientes en la colección.

## `customerManager.ts`
Esto se encarga de gestionar la colección de clientes a través de métodos para agregar, actualizar, eliminar, buscar y listar clientes.
Importación de clases:
```
import { Customer, CustomerCollection } from './customer.js';
```
En esta línea, se importan las clases Customer y CustomerCollection desde el archivo customer.js, las cuales representan un cliente individual y la colección de clientes, respectivamente.
Clase CustomerManager:
```
export class CustomerManager {
    private customerCollection: CustomerCollection;

    constructor() {
        this.customerCollection = new CustomerCollection();
    }

    // Métodos para agregar, actualizar, eliminar, buscar y listar clientes
}
```
Esta clase representa un gestor de clientes y tiene una propiedad privada customerCollection que es una instancia de CustomerCollection. El constructor inicializa esta propiedad al crear una nueva instancia de CustomerCollection.
Método generateUniqueId(): string:
```
    generateUniqueId(): string{
        // Generar un timestamp para asegurar que los IDs sean únicos
        const timestamp = new Date().getTime();

        // Generar un número aleatorio entre 0 y 99999
        const random = Math.floor(Math.random() * 100000);

        // Concatenar el timestamp y el número aleatorio para formar el ID
        return `${timestamp}${random}`;
    }
```
Este método genera un ID único combinando un timestamp (marca de tiempo) y un número aleatorio. Esto asegura que los IDs sean únicos para cada cliente.
Método findCustomer(id: string): Customer | null:
```
    findCustomer(id: string): Customer | null {
        const index = this.customerCollection.findIndexById(id);
        if (index !== -1) {
            const customerList = this.customerCollection.getCustomers();
            return customerList[index];
        }
        return null; // Cliente no encontrado
    }
```
Este método recibe el ID del cliente a buscar, busca el cliente en la colección y lo devuelve si se encuentra. Devuelve null si no se encuentra el cliente.
Método deleteCustomer(id: string): boolean:
```
        deleteCustomer(id: string): boolean {
            const index = this.customerCollection.findIndexById(id);
            if (index !== -1) {
                const customerList = this.customerCollection.getCustomers();
                customerList.splice(index, 1);
                return true;
            }
            return false; // Cliente no encontrado
        }
```
Este método recibe el ID del cliente a eliminar, busca el cliente en la colección y lo elimina si se encuentra, devolviendo true. Devuelve false si no se encuentra el cliente.
Método updateCustomer(id: string, updatedCustomer: Customer): boolean:
```
    updateCustomer(id: string, updatedCustomer: Customer): boolean {
        const index = this.customerCollection.findIndexById(id);
        if (index !== -1) {
            const customerList = this.customerCollection.getCustomers();
            customerList[index] = updatedCustomer;
            return true;
        }
        return false; // Cliente no encontrado
    }
```
Este método recibe el ID del cliente a actualizar y un objeto Customer actualizado. Busca el cliente en la colección, lo actualiza si se encuentra y devuelve true, o devuelve false si no se encuentra el cliente.
Método addCustomer(customerData: { name: string, email: string }): void:
```
    addCustomer(customerData: { name: string, email: string }): void {
        const id = this.generateUniqueId();
        const newCustomer = new Customer(id, customerData.name, customerData.email, ''); // Crear una instancia de Customer con ID generado, nombre, correo electrónico y dirección vacía
        console.log(id);
        this.customerCollection.addCustomer(newCustomer); // Agregar la nueva instancia de Customer a la colección
    }
```
Este método recibe los datos del cliente (nombre y correo electrónico), genera un ID único usando generateUniqueId(), crea una nueva instancia de Customer con esos datos y el ID generado, y luego agrega el cliente a la colección.
Método listCustomers(): void:
```
    listCustomers(): void {
        const customers = this.customerCollection.getCustomers();
        if (customers.length === 0) {
            console.log('No hay clientes registrados.');
        } else {
            console.log('Lista de clientes:');
            customers.forEach(customer => {
                console.log(`ID: ${customer.getId()}, Nombre: ${customer.getName()}, Correo electrónico: ${customer.getContact()}, Dirección: ${customer.getAddress()}`);
            });
        }
```
Este método obtiene la lista de todos los clientes en la colección y muestra su información por consola, incluyendo ID, nombre, correo electrónico y dirección.



