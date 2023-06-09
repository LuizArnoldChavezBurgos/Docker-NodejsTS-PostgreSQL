import { Pool } from 'pg';

const pool = new Pool({
    host: process.env["PGHOST"],
    user: process.env["PGUSER"],
    password: process.env["PGPASSWORD"],
    database: process.env["PGDATABASE"],
    port: Number(process.env["PGPORT"]),
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})

export default pool;