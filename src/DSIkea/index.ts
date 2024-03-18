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

/**
 * Función principal que muestra el menú principal y maneja las opciones.
 */
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

/**
 * Función para gestionar las opciones relacionadas con los muebles.
 */
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

/**
 * Función para gestionar las opciones relacionadas con los proveedores.
 */
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

/**
 * Función para gestionar las opciones relacionadas con los clientes.
 */
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
