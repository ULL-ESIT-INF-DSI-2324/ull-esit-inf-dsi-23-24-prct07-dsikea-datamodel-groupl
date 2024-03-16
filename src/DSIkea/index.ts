import inquirer from 'inquirer';
import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

// Crear una instancia de FileSync para especificar el archivo de la base de datos JSON
const adapter = new FileSync('db.json');
// Crear una instancia de lowdb y pasar el adaptador
const db = lowdb(adapter);

// Inicializar la base de datos con las colecciones vacías si no existen
db.defaults({ furniture: [], suppliers: [], customers: [] }).write();

// Función principal para mostrar el menú y manejar las opciones
async function mainMenu() {
    const { option } = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Seleccione una opción:',
        choices: ['Gestionar muebles', 'Gestionar proveedores', 'Gestionar clientes', 'Salir']
    });

    switch (option) {
        case 'Gestionar muebles':
            // Lógica para gestionar muebles
            break;
        case 'Gestionar proveedores':
            // Lógica para gestionar proveedores
            break;
        case 'Gestionar clientes':
            // Lógica para gestionar clientes
            break;
        case 'Salir':
            console.log('¡Hasta luego!');
            return;
    }

    // Llamada recursiva para mostrar el menú nuevamente
    mainMenu();
}

// Llamar a la función principal para iniciar la aplicación
mainMenu();
