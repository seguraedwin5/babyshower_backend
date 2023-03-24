import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Invitado} from '../models';
import {InvitadoRepository} from '../repositories';

export class InivitadoControllerController {
  constructor(
    @repository(InvitadoRepository)
    public invitadoRepository : InvitadoRepository,
  ) {}

  @post('/invitados')
  @response(200, {
    description: 'Invitado model instance',
    content: {'application/json': {schema: getModelSchemaRef(Invitado)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Invitado, {
            title: 'NewInvitado',
            exclude: ['Id'],
          }),
        },
      },
    })
    invitado: Omit<Invitado, 'Id'>,
  ): Promise<Invitado> {
    return this.invitadoRepository.create(invitado);
  }

  @get('/invitados/count')
  @response(200, {
    description: 'Invitado model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Invitado) where?: Where<Invitado>,
  ): Promise<Count> {
    return this.invitadoRepository.count(where);
  }

  @get('/invitados')
  @response(200, {
    description: 'Array of Invitado model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Invitado, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Invitado) filter?: Filter<Invitado>,
  ): Promise<Invitado[]> {
    return this.invitadoRepository.find(filter);
  }

  @patch('/invitados')
  @response(200, {
    description: 'Invitado PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Invitado, {partial: true}),
        },
      },
    })
    invitado: Invitado,
    @param.where(Invitado) where?: Where<Invitado>,
  ): Promise<Count> {
    return this.invitadoRepository.updateAll(invitado, where);
  }

  @get('/invitados/{id}')
  @response(200, {
    description: 'Invitado model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Invitado, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Invitado, {exclude: 'where'}) filter?: FilterExcludingWhere<Invitado>
  ): Promise<Invitado> {
    return this.invitadoRepository.findById(id, filter);
  }

  @patch('/invitados/{id}')
  @response(204, {
    description: 'Invitado PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Invitado, {partial: true}),
        },
      },
    })
    invitado: Invitado,
  ): Promise<void> {
    await this.invitadoRepository.updateById(id, invitado);
  }

  @put('/invitados/{id}')
  @response(204, {
    description: 'Invitado PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() invitado: Invitado,
  ): Promise<void> {
    await this.invitadoRepository.replaceById(id, invitado);
  }

  @del('/invitados/{id}')
  @response(204, {
    description: 'Invitado DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.invitadoRepository.deleteById(id);
  }
}
