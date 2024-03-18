import low, { LowdbSync } from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

// Define el nombre del archivo de la base de datos
const DB_FILE = 'db.json';

// Crea un adaptador que utiliza el archivo JSON como almacenamiento
const adapter = new FileSync<DatabaseSchema>(DB_FILE);

// Crea una instancia de Lowdb y carga los datos del archivo JSON
const db: LowdbSync<DatabaseSchema> = low(adapter);

/**
 * Define la estructura de la base de datos.
 */
interface DatabaseSchema {
    muebles: Mueble[];
    proveedores: Proveedor[];
    clientes: Cliente[];
}

/**
 * Define la estructura de un mueble.
 */
interface Mueble {
    id: string;
    nombre: string;
    descripcion: string;
    material: string;
    dimensiones: string;
    precio: number;
}

/**
 * Define la estructura de un proveedor.
 */
interface Proveedor {
    id: string;
    nombre: string;
    contacto: string;
    direccion: string;
}

/**
 * Define la estructura de un cliente.
 */
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
