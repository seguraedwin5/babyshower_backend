import {Entity, model, property} from '@loopback/repository';

@model()
export class Invitado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Nombre: string;

  @property({
    type: 'string',
  })
  Correo?: string;


  constructor(data?: Partial<Invitado>) {
    super(data);
  }
}

export interface InvitadoRelations {
  // describe navigational properties here
}

export type InvitadoWithRelations = Invitado & InvitadoRelations;
