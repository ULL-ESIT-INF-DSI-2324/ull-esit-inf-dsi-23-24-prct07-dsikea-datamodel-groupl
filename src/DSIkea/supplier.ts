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