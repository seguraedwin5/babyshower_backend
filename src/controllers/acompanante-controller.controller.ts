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
import {Acompanantes} from '../models';
import {AcompanantesRepository} from '../repositories';

export class AcompananteControllerController {
  constructor(
    @repository(AcompanantesRepository)
    public acompanantesRepository : AcompanantesRepository,
  ) {}

  @post('/acompanantes')
  @response(200, {
    description: 'Acompanantes model instance',
    content: {'application/json': {schema: getModelSchemaRef(Acompanantes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acompanantes, {
            title: 'NewAcompanantes',
            exclude: ['Id'],
          }),
        },
      },
    })
    acompanantes: Omit<Acompanantes, 'Id'>,
  ): Promise<Acompanantes> {
    return this.acompanantesRepository.create(acompanantes);
  }

  @get('/acompanantes/count')
  @response(200, {
    description: 'Acompanantes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Acompanantes) where?: Where<Acompanantes>,
  ): Promise<Count> {
    return this.acompanantesRepository.count(where);
  }

  @get('/acompanantes')
  @response(200, {
    description: 'Array of Acompanantes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Acompanantes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Acompanantes) filter?: Filter<Acompanantes>,
  ): Promise<Acompanantes[]> {
    return this.acompanantesRepository.find(filter);
  }

  @patch('/acompanantes')
  @response(200, {
    description: 'Acompanantes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acompanantes, {partial: true}),
        },
      },
    })
    acompanantes: Acompanantes,
    @param.where(Acompanantes) where?: Where<Acompanantes>,
  ): Promise<Count> {
    return this.acompanantesRepository.updateAll(acompanantes, where);
  }

  @get('/acompanantes/{id}')
  @response(200, {
    description: 'Acompanantes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Acompanantes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Acompanantes, {exclude: 'where'}) filter?: FilterExcludingWhere<Acompanantes>
  ): Promise<Acompanantes> {
    return this.acompanantesRepository.findById(id, filter);
  }

  @patch('/acompanantes/{id}')
  @response(204, {
    description: 'Acompanantes PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acompanantes, {partial: true}),
        },
      },
    })
    acompanantes: Acompanantes,
  ): Promise<void> {
    await this.acompanantesRepository.updateById(id, acompanantes);
  }

  @put('/acompanantes/{id}')
  @response(204, {
    description: 'Acompanantes PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() acompanantes: Acompanantes,
  ): Promise<void> {
    await this.acompanantesRepository.replaceById(id, acompanantes);
  }

  @del('/acompanantes/{id}')
  @response(204, {
    description: 'Acompanantes DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.acompanantesRepository.deleteById(id);
  }
}
