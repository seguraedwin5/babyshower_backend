import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {BabyshowerdbDataSource} from '../datasources';
import {Acompanantes, AcompanantesRelations, Invitado} from '../models';
import {InvitadoRepository} from './invitado.repository';

export class AcompanantesRepository extends DefaultCrudRepository<
  Acompanantes,
  typeof Acompanantes.prototype.Id,
  AcompanantesRelations
> {

  public readonly fk_Idinvitado: BelongsToAccessor<Invitado, typeof Acompanantes.prototype.Id>;

  constructor(
    @inject('datasources.db') dataSource: BabyshowerdbDataSource, @repository.getter('InvitadoRepository') protected invitadoRepositoryGetter: Getter<InvitadoRepository>,
  ) {
    super(Acompanantes, dataSource);
    this.fk_Idinvitado = this.createBelongsToAccessorFor('fk_Idinvitado', invitadoRepositoryGetter,);
    this.registerInclusionResolver('fk_Idinvitado', this.fk_Idinvitado.inclusionResolver);
  }
}
