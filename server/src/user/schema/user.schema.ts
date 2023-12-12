import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Ciudad } from 'src/ciudad/schema/ciudad.schema';
import { Roles } from 'src/roles/schema/roles.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'Ciudad'})
    ciudadId: Ciudad

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref:  'Roles'})
    roleId: Roles
}

export const UserSchema = SchemaFactory.createForClass(User);