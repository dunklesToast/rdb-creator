async function createIndex(connection, options, dbName, tableName) {
    const currentIndexes = await connection.db(dbName).table(tableName).indexList().run();
    if(currentIndexes.includes(options.name)) return;
    return await connection.db(dbName).table(tableName).indexCreate(options.name, options.function, options.options).run();
}

module.exports = createIndex;
