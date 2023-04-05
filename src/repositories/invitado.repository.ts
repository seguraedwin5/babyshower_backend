import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BabyshowerdbDataSource} from '../datasources';
import {Invitado, InvitadoRelations} from '../models';

export class InvitadoRepository extends DefaultCrudRepository<
  Invitado,
  typeof Invitado.prototype.Id,
  InvitadoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: BabyshowerdbDataSource,
  ) {
    super(Invitado, dataSource);
  }
}
