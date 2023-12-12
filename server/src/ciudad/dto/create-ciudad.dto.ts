import { IsNotEmpty, IsString } from "class-validator";

export class CreateCiudadDto {

    @IsNotEmpty({ message: 'El campo "name" es requerido' })
    @IsString({ message: 'El campo "name" debe ser una cadena de caracteres' })
    name: string;

};
