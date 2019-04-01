/**
 *
 * @param connection - A rethinkdb connection
 * @param data - options for the Database creation
 * @returns {Promise<void>}
 */
async function createDB(connection, data) {
    const currentDatabases = await connection.dbList().run();
    if(currentDatabases.includes(data.name)) return;
    return await connection.dbCreate(data.name).run();
}

module.exports = createDB;
