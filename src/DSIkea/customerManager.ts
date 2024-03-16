import { Customer, CustomerCollection } from './customer.js';

export class CustomerManager {
    private customerCollection: CustomerCollection;

    constructor() {
        this.customerCollection = new CustomerCollection();
    }

    addCustomer(customer: Customer): void {
        this.customerCollection.addCustomer(customer);
    }

    // Implementa otras funciones para modificar, eliminar y buscar clientes
}
