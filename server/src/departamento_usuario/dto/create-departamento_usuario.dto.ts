import { IsMongoId, IsNotEmpty } from "class-validator";

export class CreateDepartamentoUsuarioDto {
    @IsNotEmpty({ message: 'El campo "usuario_id" es requerido' })
    @IsMongoId({ message: 'El campo "usuario_id" no es una mongo Id' })
    usuario_id: string
    @IsNotEmpty({ message: 'El campo "departamento_id" es requerido' })
    @IsMongoId({ message: 'El campo "departamento_id" no es una mongo Id' })
    departamento_id: string
}
