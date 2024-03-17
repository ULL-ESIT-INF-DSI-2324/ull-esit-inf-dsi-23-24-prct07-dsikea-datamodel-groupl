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
