import { IDocumento } from './documento.interface';
import { IProceso } from './proceso.interface';
export interface ISolicitudBaja extends Document {
  _id?: string;
  name: string;
  documento_id: IDocumento;
  proceso_id: IProceso;
}
