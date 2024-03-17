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
  