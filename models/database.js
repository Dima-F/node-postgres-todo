const { Client } = require('pg')
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo'
const client = new Client(connectionString)

client.connect()

client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)', (err, res) => {
  console.log(err ? err.stack : 'OK') // Hello World!
  client.end()
})
//checking ssh
