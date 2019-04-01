async function createTable(connection, dbname, options) {
    const currentTables = await connection.db(dbname).tableList().run();
    if(currentTables.includes(options.name)) return;

    return await connection.db(dbname).tableCreate(options.name).run();

}

module.exports = createTable;
