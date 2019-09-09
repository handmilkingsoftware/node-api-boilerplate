const production = {
  client: 'mysql',
  connection: process.env.DATABASE_URL,
  pool: { min: 0, max: 10 }
};

const development = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'andres',
    password : 'andres',
    database : 'cr-people'
  },
  pool: { min: 0, max: 2 }
};

const test = {
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  },
  options: {
    logging: true
  }
};

module.exports = { test, development: test, production };
