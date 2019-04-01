/**
 * by: tom
 * created on: 2019-04-01
 */

const database = require('./functions/cDB');
const ctable = require('./functions/cTable');
const cindex = require('./functions/cSI');

module.exports = {
    /**
     *
     * @param connection - Your RethinkDBDash Connection Object (r)
     * @param options - The JSON with Info about the Databases
     * @returns {Promise<void>}
     */
    initialize: async function (connection, options) {
        options = options.dbs;
        for (let db in options) {
            if (!options.hasOwnProperty(db)) continue;
            await database(connection, options[db]);
            for (let table in options[db].tables) {
                if (!options[db].tables.hasOwnProperty(table)) continue;
                await ctable(connection, options[db].name, options[db].tables[table]);
                for (let index in options[db].tables[table].indexes) {
                    if (!options[db].tables[table].indexes.hasOwnProperty(index)) continue;
                    await cindex(connection, options[db].tables[table].indexes[index], options[db].name, options[db].tables[table].name);
                }
            }

        }
    }
};
