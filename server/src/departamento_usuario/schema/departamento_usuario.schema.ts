import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Departamento } from 'src/departamento/schema/departamento.schema';
import { User } from 'src/user/schema/user.schema';


export type DepartamentoUsuarioDocument = DepartamentoUsuario & Document;

@Schema()
export class DepartamentoUsuario {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'User'})
    usuario_id: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'Departamento'})
    departamento_id: Departamento
}

export const DepartamentoUsuarioSchema = SchemaFactory.createForClass(DepartamentoUsuario);