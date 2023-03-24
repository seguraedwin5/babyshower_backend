import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Invitado} from './invitado.model';

@model()
export class Acompanantes extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'number',
    required: true,
  })
  Ninos: number;

  @property({
    type: 'number',
    required: true,
  })
  Adultos: number;

  @belongsTo(() => Invitado, {name: 'fk_Idinvitado'})
  IdInvitado: string;

  constructor(data?: Partial<Acompanantes>) {
    super(data);
  }
}

export interface AcompanantesRelations {
  // describe navigational properties here
}

export type AcompanantesWithRelations = Acompanantes & AcompanantesRelations;
