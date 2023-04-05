import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mssql',
  host: 'srvbabyshower.database.windows.net',// better stored in an app setting such as process.env.DB_SERVER
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  user: 'egsf', // better stored in an app setting such as process.env.DB_USER
  password: 'Skyfire.94', // better stored in an app setting such as process.env.DB_PASSWORD
  database: 'babyshowerdb', // better stored in an app setting such as process.env.DB_NAME
  encrypt: true
}

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BabyshowerdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.name', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
