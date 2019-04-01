# RethinkDBInit

A small RethinkDB Init Script. Creates all your needed databases, tables and indexes if they arent present.

Tested with RethinkDB Dash

Example:

```
const r = require("rethinkdbdash");
const creator = require("rdb-creator"),

const schema = {
    dbs: [
        {
            name: "myAwesomeDatabase",
            tables: [
                {
                    name: "myAwesomeTable",
                    options: {
                        id: "username",
                    },
                    indexes: [{
                        name: "myAwesomeIndex",
                        function: r.row("author")("name"),
                        options: {
                            geo: true,
                            multi: false
                        }
                    }]
                }
            ]
        }
    ]
};

(async function f() {
    await initialize(require('rethinkdbdash')(), schema);
})();

```
