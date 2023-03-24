import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Acompanantes,
  Invitado,
} from '../models';
import {AcompanantesRepository} from '../repositories';

export class AcompanantesInvitadoController {
  constructor(
    @repository(AcompanantesRepository)
    public acompanantesRepository: AcompanantesRepository,
  ) { }

  @get('/acompanantes/{id}/invitado', {
    responses: {
      '200': {
        description: 'Invitado belonging to Acompanantes',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Invitado)},
          },
        },
      },
    },
  })
  async getInvitado(
    @param.path.string('id') id: typeof Acompanantes.prototype.Id,
  ): Promise<Invitado> {
    return this.acompanantesRepository.fk_Idinvitado(id);
  }
}
