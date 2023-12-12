import { IsBoolean, IsMongoId, IsNotEmpty, IsString } from "class-validator"

export class CreateSolicitudBajaDto {
    @IsNotEmpty({ message: 'El campo "name" es requerido' })
    @IsString({ message: 'El campo "name" no es string' })
    name: string
    @IsNotEmpty({ message: 'El campo "documento_id" es requerido' })
    @IsMongoId({ message: 'El campo "documento_id" no es una mongo Id' })
    documento_id: string
    @IsNotEmpty({ message: 'El campo "proceso_id" es requerido' })
    @IsMongoId({ message: 'El campo "proceso_id" no es una mongo Id' })
    proceso_id: string
}
