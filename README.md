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
Para instalar Inquirer realizamos el comando `npm install --save-dev inquirer` y para instalar lowdb `npm install --save-dev lowdb`
. Además deberemos tener la última version de Node.js instalada 

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

## `index.ts`
```
import inquirer from 'inquirer';
import { FurnitureManager } from './furnitureManager.js';
import { SupplierManager } from './supplierManager.js';
import { CustomerManager } from './customerManager.js';
import { Stock } from './stock.js';

// Crear instancias de los managers
const furnitureManager = new FurnitureManager();
const supplierManager = new SupplierManager();
const customerManager = new CustomerManager();
const stock = new Stock();
// Función principal para mostrar el menú y manejar las opciones
function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Seleccione una opción:',
        choices: ['Gestionar muebles', 'Gestionar proveedores', 'Gestionar clientes', 'Salir']
    }).then((answers) => {
        const { option } = answers;

        switch (option) {
            case 'Gestionar muebles':
                manageFurniture();
                break;
            case 'Gestionar proveedores':
                manageSuppliers();
                break;
            case 'Gestionar clientes':
                manageCustomers();
                break;
            case 'Salir':
                console.log('¡Hasta luego!');
                return;
        }
    });
}

function manageFurniture() {
    inquirer.prompt({
        type: 'list',
        name: 'furnitureOption',
        message: 'Seleccione una opción para gestionar muebles:',
        choices: ['Agregar mueble', 'Actualizar mueble', 'Eliminar mueble', 'Buscar mueble', 'Listar muebles', 'Volver']
    }).then((answers) => {
        const { furnitureOption } = answers;

        switch (furnitureOption) {
            case 'Agregar mueble':
                // Lógica para agregar un mueble
                inquirer.prompt([
                    { type: 'input', name: 'name', message: 'Nombre del mueble:' },
                    { type: 'input', name: 'description', message: 'Descripción del mueble:' },
                    { type: 'input', name: 'material', message: 'Material del mueble:' },
                    { type: 'input', name: 'dimensions', message: 'Dimensiones del mueble:' },
                    { type: 'input', name: 'price', message: 'Precio del mueble:' }
                ]).then((newFurniture) => {
                    furnitureManager.addFurniture(newFurniture);
                    manageFurniture(); // Volver al menú de muebles
                });
                break;
            case 'Actualizar mueble':
                // Lógica para actualizar un mueble
                inquirer.prompt([
                    { type: 'input', name: 'id', message: 'ID del mueble a actualizar:' },
                    { type: 'input', name: 'name', message: 'Nuevo nombre del mueble:' },
                    { type: 'input', name: 'description', message: 'Nueva descripción del mueble:' },
                    { type: 'input', name: 'material', message: 'Nuevo material del mueble:' },
                    { type: 'input', name: 'dimensions', message: 'Nuevas dimensiones del mueble:' },
                    { type: 'input', name: 'price', message: 'Nuevo precio del mueble:' }
                ]).then((updatedFurniture) => {
                    furnitureManager.updateFurniture(updatedFurniture.id, updatedFurniture);
                    manageFurniture(); // Volver al menú de muebles
                });
                break;
            case 'Eliminar mueble':
                // Lógica para eliminar un mueble
                inquirer.prompt({ type: 'input', name: 'id', message: 'ID del mueble a eliminar:' }).then((answer) => {
                    furnitureManager.deleteFurniture(answer.id);
                    manageFurniture(); // Volver al menú de muebles
                });
                break;
            case 'Buscar mueble':
                // Lógica para buscar un mueble
                inquirer.prompt({ type: 'input', name: 'id', message: 'ID del mueble a buscar:' }).then((answer) => {
                    furnitureManager.findFurnitureById(answer.id);
                    manageFurniture(); // Volver al menú de muebles
                });
                break;
            case 'Listar muebles':
                // Lógica para listar todos los muebles
                furnitureManager.getFurnitureList();
                manageFurniture(); // Volver al menú de muebles
                break;
            case 'Volver':
                mainMenu(); // Volver al menú principal
                break;
        }
    });
}

function manageSuppliers() {
    inquirer.prompt({
        type: 'list',
        name: 'supplierOption',
        message: 'Seleccione una opción para gestionar proveedores:',
        choices: ['Agregar proveedor', 'Actualizar proveedor', 'Eliminar proveedor', 'Buscar proveedor', 'Volver']
    }).then((answers) => {
        const { supplierOption } = answers;

        switch (supplierOption) {
            case 'Agregar proveedor':
                // Lógica para agregar un proveedor
                inquirer.prompt([
                    { type: 'input', name: 'name', message: 'Nombre del proveedor:' },
                    { type: 'input', name: 'contact', message: 'Contacto del proveedor:' }
                ]).then((newSupplier) => {
                    supplierManager.addSupplier(newSupplier);
                    manageSuppliers(); // Volver al menú de proveedores
                });
                break;
            case 'Actualizar proveedor':
                // Lógica para actualizar un proveedor
                inquirer.prompt([
                    { type: 'input', name: 'id', message: 'ID del proveedor a actualizar:' },
                    { type: 'input', name: 'name', message: 'Nuevo nombre del proveedor:' },
                    { type: 'input', name: 'contact', message: 'Nuevo contacto del proveedor:' }
                ]).then((updatedSupplier) => {
                    supplierManager.updateSupplier(updatedSupplier.id, updatedSupplier);
                    manageSuppliers(); // Volver al menú de proveedores
                });
                break;
            case 'Eliminar proveedor':
                // Lógica para eliminar un proveedor
                inquirer.prompt({ type: 'input', name: 'id', message: 'ID del proveedor a eliminar:' }).then((answer) => {
                    supplierManager.deleteSupplier(answer.id);
                    manageSuppliers(); // Volver al menú de proveedores
                });
                break;
            case 'Buscar proveedor':
                // Lógica para buscar un proveedor
                inquirer.prompt({ type: 'input', name: 'id', message: 'ID del proveedor a buscar:' }).then((answer) => {
                    supplierManager.findSupplierById(answer.id);
                    manageSuppliers(); // Volver al menú de proveedores
                });
                break;
            case 'Volver':
                mainMenu(); // Volver al menú principal
                break;
        }
    });
}

function manageCustomers() {
    inquirer.prompt({
        type: 'list',
        name: 'customerOption',
        message: 'Seleccione una opción para gestionar clientes:',
        choices: ['Agregar cliente', 'Actualizar cliente', 'Eliminar cliente', 'Buscar cliente', 'Listar clientes', 'Volver']
    }).then((answers) => {
        const { customerOption } = answers;

        switch (customerOption) {
            case 'Agregar cliente':
                // Lógica para agregar un cliente
                inquirer.prompt([
                    { type: 'input', name: 'name', message: 'Nombre del cliente:' },
                    { type: 'input', name: 'email', message: 'Correo electrónico del cliente:' }
                ]).then((answers) => {
                    customerManager.addCustomer(answers); // Llamar a la función addCustomer con la nueva instancia de Customer
                    manageCustomers(); // Volver al menú de clientes
                });
                break;
            case 'Actualizar cliente':
                // Lógica para actualizar un cliente
                inquirer.prompt([
                    { type: 'input', name: 'id', message: 'ID del cliente a actualizar:' },
                    { type: 'input', name: 'name', message: 'Nuevo nombre del cliente:' },
                    { type: 'input', name: 'email', message: 'Nuevo correo electrónico del cliente:' }
                ]).then((updatedCustomer) => {
                    customerManager.updateCustomer(updatedCustomer.id, updatedCustomer);
                    manageCustomers(); // Volver al menú de clientes
                });
                break;
            case 'Eliminar cliente':
                // Lógica para eliminar un cliente
                inquirer.prompt({ type: 'input', name: 'id', message: 'ID del cliente a eliminar:' }).then((answer) => {
                    customerManager.deleteCustomer(answer.id);
                    manageCustomers(); // Volver al menú de clientes
                });
                break;
            case 'Listar clientes':
                //customerManager.listCustomers();
                stock.listarClientes();
                manageCustomers();
                break;
            case 'Buscar cliente':
                // Lógica para buscar un cliente
                inquirer.prompt({ type: 'input', name: 'id', message: 'ID del cliente a buscar:' }).then((answer) => {
                    customerManager.findCustomer(answer.id);
                    manageCustomers(); // Volver al menú de clientes
                });
                break;
            case 'Volver':
                mainMenu(); // Volver al menú principal
                break;
        }
    });
}

// Llamar a la función principal para iniciar la aplicación
mainMenu();

```
## Importación de Módulos
Se importan los módulos necesarios para el funcionamiento de la aplicación. Estos incluyen:
- `inquirer`: Un módulo que permite interactuar con el usuario a través de la línea de comandos, mostrando mensajes y opciones para que el usuario seleccione.
- Los diferentes managers y modelos que se encargan de la gestión de los datos relacionados con muebles, proveedores y clientes.

## Creación de Instancias de Managers
Se instancian los managers y modelos necesarios para gestionar los datos de la aplicación. Estos incluyen el `FurnitureManager`, el `SupplierManager`, el `CustomerManager`, y el modelo `Stock`.

## Función Principal `mainMenu()`
Esta función es el punto de entrada de la aplicación. Presenta al usuario un menú principal con diferentes opciones, como gestionar muebles, proveedores, clientes o salir de la aplicación.
Utiliza `inquirer.prompt()` para solicitar al usuario que elija una opción y ejecuta las acciones correspondientes según la opción seleccionada.

## Funciones de Gestión Específicas
Se definen funciones separadas para manejar las acciones específicas de cada tipo de entidad:
- `manageFurniture()`: Gestiona las operaciones relacionadas con los muebles, como agregar, actualizar, eliminar, buscar y listar.
- `manageSuppliers()`: Gestiona las operaciones relacionadas con los proveedores, con las mismas operaciones que en `manageFurniture()`.
- `manageCustomers()`: Gestiona las operaciones relacionadas con los clientes, incluyendo agregar, actualizar, eliminar, buscar y listar.
Estas funciones utilizan `inquirer.prompt()` para obtener información adicional del usuario y luego llaman a los métodos correspondientes en los managers para realizar las operaciones sobre los datos.

## Lógica de Ejecución
La lógica de ejecución se basa en la interacción con el usuario a través de los menús y la ejecución de las acciones seleccionadas. La aplicación continúa ejecutándose hasta que el usuario elige salir del programa.

## Inicio de la Aplicación
Finalmente, se llama a la función `mainMenu()` para iniciar la aplicación y presentar el menú principal al usuario, desde donde puede comenzar a interactuar con la aplicación.

# `stock.ts`
```
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
        const adaptador = new FileSync('stock.json');
        const db = low(adaptador);

        this.coleccionMuebles = new FurnitureCollection();
        this.coleccionProveedores = new SupplierCollection();
        this.coleccionClientes = new CustomerCollection();
        this.transacciones = db.get('transacciones').value() || [];

        this.iniciarBaseDatos();
    }

    private iniciarBaseDatos() {
    // Cargar datos iniciales de la base de datos desde el archivo JSON
    const adaptador = new FileSync('stock.json');
    const db = low(adaptador);

    // Obtener datos de muebles, proveedores y clientes del archivo JSON
    const muebles = db.get('muebles').value() || [];
    const proveedores = db.get('proveedores').value() || [];
    const clientes = db.get('clientes').value() || [];

    // Cargar muebles
    muebles.forEach((mueble: any) => {
        const nuevoMueble = new Furniture(mueble.id, mueble.name, mueble.description, mueble.material, mueble.dimensions, mueble.price);
        this.agregarMueble(nuevoMueble);
    });

    // Cargar proveedores
    proveedores.forEach((proveedor: any) => {
        const nuevoProveedor = new Supplier(proveedor.id, proveedor.name, proveedor.contact, proveedor.address);
        this.agregarProveedor(nuevoProveedor);
    });

    // Cargar clientes
    clientes.forEach((cliente: any) => {
        const nuevoCliente = new Customer(cliente.id, cliente.name, cliente.email, cliente.address);
        this.agregarCliente(nuevoCliente);
    });
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

    getColeccionClientes(){
        return this.coleccionClientes;
    }

    registrarCompra(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'compra', items });
    }

    registrarVenta(fecha: Date, items: { mueble: Furniture; cantidad: number }[]): void {
        this.transacciones.push({ fecha, tipo: 'venta', items });
    }

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

```
## Importación de Módulos
Se importan los módulos necesarios para el funcionamiento de la aplicación. Estos incluyen:
- `Furniture` y `FurnitureCollection` del archivo `furniture.js`.
- `Supplier` y `SupplierCollection` del archivo `supplier.js`.
- `Customer` y `CustomerCollection` del archivo `customer.js`.
- `low` y `FileSync` de la biblioteca `lowdb` para la gestión de una base de datos en formato JSON.

## Definición de Interfaces
Se define la interfaz `Transaccion` para representar una transacción, que incluye la fecha, el tipo y los items involucrados. Además, se define la interfaz `Informe` para representar un informe, que incluye un rango de fechas y el tipo de informe.

## Clase `Stock`
La clase `Stock` se encarga de gestionar el inventario y las transacciones de la tienda. Algunas de sus características y métodos más importantes son:
- Propiedades privadas que almacenan colecciones de muebles, proveedores, clientes y transacciones.
- Constructor que inicializa las colecciones de datos y carga datos iniciales desde un archivo JSON.
- Métodos para agregar muebles, proveedores y clientes a las respectivas colecciones.
- Métodos para registrar compras, ventas, devoluciones y actualizaciones manuales de stock.
- Métodos para generar informes sobre ventas, compras, stock y transacciones por tipo.
- Métodos auxiliares para obtener información sobre el stock y generar informes de stock mínimo.
- Métodos para listar clientes y muebles.

## Inicio de la Aplicación
La clase `Stock` se utiliza como punto de entrada para la aplicación. Al instanciar esta clase, se carga la base de datos y se inicializan las colecciones de datos. Luego, se pueden llamar a los métodos de esta clase para realizar operaciones de gestión de inventario y obtener informes.

Esta descripción proporciona una visión general del código y explica cómo funciona cada parte de la clase `Stock`.

# `dataManager.ts`
```
import low, { LowdbSync } from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

const DB_FILE = 'db.json';
const adapter = new FileSync<DatabaseSchema>(DB_FILE);
const db: LowdbSync<DatabaseSchema> = low(adapter);

// Define la estructura de la base de datos
interface DatabaseSchema {
    muebles: Mueble[];
    proveedores: Proveedor[];
    clientes: Cliente[];
}

// Define las interfaces para los diferentes tipos de datos
interface Mueble {
    id: string;
    nombre: string;
    descripcion: string;
    material: string;
    dimensiones: string;
    precio: number;
}

interface Proveedor {
    id: string;
    nombre: string;
    contacto: string;
    direccion: string;
}

interface Cliente {
    id: string;
    nombre: string;
    contacto: string;
    direccion: string;
}

// Inicializa la base de datos con una estructura inicial si el archivo no existe
const defaultValue: DatabaseSchema = {
    muebles: [],
    proveedores: [],
    clientes: []
};
await db.defaults(defaultValue).write();

// Exporta la instancia de la base de datos para usarla en otros módulos
export default db;

```
## Importación de Módulos
Se importan los módulos necesarios para la gestión de la base de datos utilizando `lowdb`. Estos incluyen:
- `low` y `LowdbSync` de la biblioteca `lowdb` para la gestión de la base de datos.
- `FileSync` de `lowdb/adapters/FileSync.js` para la sincronización de archivos.

## Configuración de la Base de Datos
Se define la constante `DB_FILE` que contiene la ruta del archivo de la base de datos. Luego, se crea una instancia del adaptador `FileSync` para el archivo de la base de datos especificado.

## Definición de la Estructura de la Base de Datos
Se define la interfaz `DatabaseSchema` que especifica la estructura de la base de datos, incluyendo las colecciones de `muebles`, `proveedores` y `clientes`. Además, se definen las interfaces para los diferentes tipos de datos que estarán almacenados en la base de datos, como `Mueble`, `Proveedor` y `Cliente`.

## Inicialización de la Base de Datos
Se inicializa la base de datos utilizando el adaptador y la estructura de la base de datos definida anteriormente. Si el archivo de la base de datos no existe, se crea con una estructura inicial definida por `defaultValue`, que contiene colecciones vacías de `muebles`, `proveedores` y `clientes`.

## Exportación de la Instancia de la Base de Datos
Finalmente, se exporta la instancia de la base de datos para que pueda ser utilizada en otros módulos de la aplicación.

Esta descripción proporciona una visión general del código y explica cómo se configura y utiliza la base de datos utilizando `lowdb`.

# Conclusion

- Aprendizaje Práctico:
La simulación de la gestión de una tienda de muebles proporciona una experiencia práctica invaluable en el desarrollo de software. Al interactuar con los códigos proporcionados, se adquieren habilidades en la implementación de sistemas de gestión de inventario, clientes y proveedores.

- Conocimiento de Herramientas:
El uso de herramientas como lowdb para la gestión de bases de datos permite familiarizarse con tecnologías modernas y ampliamente utilizadas en el desarrollo de aplicaciones web y sistemas de información.

- Entendimiento del Proceso Comercial:
Al simular la gestión de una tienda de muebles, se obtiene una comprensión más profunda del proceso comercial involucrado, incluyendo la interacción con proveedores, la gestión de inventario y la atención al cliente.

# Bibliografía 
> npm: lowdb. (n.d.). Npm. https://www.npmjs.com/package/lowdb

> npm: inquirer. (n.d.). Npm. https://www.npmjs.com/package/inquirer

> Nodejs + TS CommonJS vs Module issue for Inquirer package. (n.d.). Stack Overflow. https://stackoverflow.com/questions/73537195/nodejs-ts-commonjs-vs-module-issue-for-inquirer-package
