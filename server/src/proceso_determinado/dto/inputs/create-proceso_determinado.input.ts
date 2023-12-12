// import { IsNotEmpty, IsString, IsMongoId } from "class-validator";

// export class CreateProcesoDeterminadoDto {

//     @IsNotEmpty({ message: 'El campo "name" es requerido' })
//     @IsString({ message: 'El campo "name" debe ser una cadena de caracteres' })
//     name: string;
    
//     @IsNotEmpty({ message: 'El campo "proceso_id" es requerido' })
//     @IsMongoId({ message: 'El campo "proceso_id" debe ser una id de mongo válida' })
//     proceso_id: string;

//     @IsNotEmpty({ message: 'El campo "flujo_proceso_id" es requerido' })
//     @IsMongoId({ message: 'El campo "flujo_proceso_id" debe ser una id de mongo válida' })
//     flujo_proceso_id: string;

// };

import { IsNotEmpty, IsString, IsMongoId } from "class-validator";
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProcesoDeterminadoInput {

    @IsNotEmpty({ message: 'El campo "name" es requerido' })
    @IsString({ message: 'El campo "name" debe ser una cadena de caracteres' })
    @Field(() => String, { description: 'Nombre del proceso determinado' })
    name: string;

    @IsNotEmpty({ message: 'El campo "proceso_id" es requerido' })
    @IsMongoId({ message: 'El campo "proceso_id" debe ser una ID de MongoDB válida' })
    @Field(() => String, { description: 'ID del proceso' })
    proceso_id: string;

    @IsNotEmpty({ message: 'El campo "flujo_proceso_id" es requerido' })
    @IsMongoId({ message: 'El campo "flujo_proceso_id" debe ser una ID de MongoDB válida' })
    @Field(() => String, { description: 'ID del flujo del proceso' })
    flujo_proceso_id: string;
    
}
