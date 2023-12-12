import { IsNotEmpty, IsString } from "class-validator";

export class CreateOpcioneDto {

    @IsNotEmpty({ message: 'El campo "type" es requerido' })
    @IsString({ message: 'El campo "type" debe ser una cadena de caracteres' })
    type: string;
    
    @IsNotEmpty({ message: 'El campo "content" es requerido' })
    @IsString({ message: 'El campo "content" debe ser una cadena de caracteres' })
    content: string;

};
