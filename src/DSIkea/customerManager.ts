import { Customer, CustomerCollection } from './customer.js';

/**
 * Clase para gestionar clientes.
 */
export class CustomerManager {
    private customerCollection: CustomerCollection;

    /**
     * Crea una instancia de CustomerManager.
     */
    constructor() {
        this.customerCollection = new CustomerCollection();
    }

    /**
     * Genera un ID único para clientes basado en un timestamp y un número aleatorio.
     * @returns El ID único generado.
     */
    generateUniqueId(): string {
        // Generar un timestamp para asegurar que los IDs sean únicos
        const timestamp = new Date().getTime();

        // Generar un número aleatorio entre 0 y 99999
        const random = Math.floor(Math.random() * 100000);

        // Concatenar el timestamp y el número aleatorio para formar el ID
        return `${timestamp}${random}`;
    }

    /**
     * Busca un cliente por su ID.
     * @param id El ID del cliente a buscar.
     * @returns El cliente encontrado o null si no se encuentra.
     */
    findCustomer(id: string): Customer | null {
        const index = this.customerCollection.findIndexById(id);
        if (index !== -1) {
            const customerList = this.customerCollection.getCustomers();
            return customerList[index];
        }
        return null; // Cliente no encontrado
    }

    /**
     * Elimina un cliente de la colección.
     * @param id El ID del cliente a eliminar.
     * @returns True si se eliminó correctamente, False si no se encontró el cliente.
     */
    deleteCustomer(id: string): boolean {
        const index = this.customerCollection.findIndexById(id);
        if (index !== -1) {
            const customerList = this.customerCollection.getCustomers();
            customerList.splice(index, 1);
            return true;
        }
        return false; // Cliente no encontrado
    }

    /**
     * Actualiza un cliente existente en la colección.
     * @param id El ID del cliente a actualizar.
     * @param updatedCustomer El cliente actualizado.
     * @returns True si se actualizó correctamente, False si no se encontró el cliente.
     */
    updateCustomer(id: string, updatedCustomer: Customer): boolean {
        const index = this.customerCollection.findIndexById(id);
        if (index !== -1) {
            const customerList = this.customerCollection.getCustomers();
            customerList[index] = updatedCustomer;
            return true;
        }
        return false; // Cliente no encontrado
    }

    /**
     * Agrega un nuevo cliente a la colección.
     * @param customerData La información del cliente a agregar (nombre y correo electrónico).
     */
    addCustomer(customerData: { name: string; email: string }): void {
        const id = this.generateUniqueId();
        const newCustomer = new Customer(id, customerData.name, customerData.email, ''); // Crear una instancia de Customer con ID generado, nombre, correo electrónico y dirección vacía
        this.customerCollection.addCustomer(newCustomer); // Agregar la nueva instancia de Customer a la colección
    }

    /**
     * Lista todos los clientes registrados.
     */
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
    }
}
