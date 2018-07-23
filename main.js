const StaticServer = require('static-server');

const server = new StaticServer({
  rootPath: '.',
  port: 80,
  templates: {
    index: 'index.html',
  },
});

server.start(function () {
  console.log('Server listening to', server.port);
});
