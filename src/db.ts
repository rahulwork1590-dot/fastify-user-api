import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'localhost', // or 127.0.0.1
    user: 'root',
    password: '',
    database: 'test001',
    port: 3306,
});