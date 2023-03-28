import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'babyshowerdb',
  connector: 'mssql',
  server: 'localhost',
  host: 'localhost',
  port: 1433,
  user: 'edwin',
  password: 'edwin',
  database: 'babyshowerdb',
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BabyshowerdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'babyshowerdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.babyshowerdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
