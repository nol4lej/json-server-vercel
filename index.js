const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

// No es necesario definir el puerto aquí, Vercel asignará uno automáticamente
// const port = process.env.PORT || 8000;

server.use(middleware);
server.use(router);

// No necesitas definir el puerto aquí, Vercel se encargará de esto automáticamente
// server.listen(port);

// En lugar de usar server.listen, utilizaremos module.exports para que Vercel pueda manejar el servidor
module.exports = server;
