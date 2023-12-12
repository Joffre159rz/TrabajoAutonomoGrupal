// import { IsNotEmpty, IsMongoId, IsString, IsBoolean } from 'class-validator';

// export class CreateDocumentoDto {
//   @IsNotEmpty({ message: 'El campo "principal" es requerido' })
//   @IsString({ message: 'El campo "persona_id" no es string' })
//   principal: string;
//   @IsNotEmpty({ message: 'El campo "recibido" es requerido' })
//   @IsBoolean({ message: 'El campo "recibido" no es un campo booleano' })
//   recibido: boolean;
//   @IsNotEmpty({ message: 'El campo "persona_id" es requerido' })
//   @IsMongoId({ message: 'El campo "persona_id" no es una mongo Id' })
//   persona_id: string;
//   @IsNotEmpty({ message: 'El campo "proceso_determinado_id" es requerido' })
//   @IsMongoId({
//     message: 'El campo "proceso_determinado_id" no es una mongo Id',
//   })
//   proceso_determinado_id: string;
// }
import { IsNotEmpty, IsString, IsMongoId, IsBoolean } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDocumentoInput {
  @IsNotEmpty({ message: 'El campo "principal" es requerido' })
  @IsString({
    message: 'El campo "principal" debe ser una cadena de caracteres',
  })
  @Field(() => String, { description: 'Principal campo' })
  principal: string;
  @IsNotEmpty({ message: 'El campo "recibido" es requerido' })
  @IsBoolean({
    message: 'El campo "recibido" debe ser un boolean',
  })
  @Field(() => String, { description: 'estado del recibido' })
  recibido: string;

  @IsNotEmpty({ message: 'El campo "persona_id" es requerido' })
  @IsMongoId({
    message: 'El campo "persona_id" debe ser una ID de MongoDB válida',
  })
  @Field(() => String, { description: 'ID de la persona' })
  persona_id: string;

  @IsNotEmpty({ message: 'El campo "proceso_determinado_id" es requerido' })
  @IsMongoId({
    message:
      'El campo "proceso_determinado_id" debe ser una ID de MongoDB válida',
  })
  @Field(() => String, { description: 'ID del proceso determinado' })
  proceso_determinado_id: string;
  @IsNotEmpty({ message: 'El campo "estado" es requerido' })
  @IsBoolean({
    message: 'El campo "estado" debe ser un boolean',
  })
  @Field(() => String, { description: 'estado del estado' })
  estado: string;
}
