export interface IDocumento extends Document {
  _id?: string;
  principal: string;
  recibido: boolean;
  persona_id: string;
  proceso_determinado_id: string;
}
