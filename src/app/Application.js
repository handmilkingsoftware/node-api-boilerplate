const _ = require('lodash');
const { default: knexTinyLogger } = require('knex-tiny-logger');

class Application {
  constructor({ server, database, logger }) {
    this.server = server;
    this.database = database;
    this.logger = logger;

    if(_.get(database, 'logging', false)) {
      knexTinyLogger(database, { logger: logger.logger })
    }
  }

  async start() {
    if(this.database) {
      await this.database.raw(`select 'Reachable database'`);
    }

    await this.server.start();
  }
}

module.exports = Application;
