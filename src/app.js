import express from 'express';
import routes from './routes';
import './database';
import path from 'path';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', '..', 'temp', 'uploads'))
    );
  }
}
export default new App().server;
