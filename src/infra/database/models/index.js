const { load } = require('src/infra/database/ModelsLoader');
const { db: config } = require('config');
const _ = require('lodash');

if(config) {

  const knex = require('knex')(config);

  if(_.has(config, 'options.logging'))
  {
    _.set(knex, 'logging', true);
  }
  else
  {
   _.set(knex, 'logging', false);
  }


  module.exports = load({
    knex,
    baseFolder: __dirname
  });
} else {
  /* eslint-disable no-console */
  console.error('Database configuration not found, disabling database.');
  /* eslint-enable no-console */
}
