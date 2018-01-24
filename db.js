/**
 * DAO for CouchDB
 */
let dbOptions = require('./config/db');
const nano = require('nano')(dbOptions.host);
let db;

//Setup the database
nano.db.create(dbOptions.dbName, function () {
  db = nano.use(dbOptions.dbName);
});

module.exports = {
  /**
   * Insert document into current database
   */
  addDocument: function(doc){
    db.insert(doc, function (err, body, header) {
      if (err) {
        console.error('ERROR INSERTING TO COUCHDB');
      }
      else{
        console.log('Added Document: ', body);
      }
    });
  }
}