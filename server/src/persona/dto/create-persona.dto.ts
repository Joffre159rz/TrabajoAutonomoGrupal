import { IsNotEmpty, IsString, isString } from "class-validator";

export class CreatePersonaDto {
    @IsNotEmpty({ message: 'El campo "name" es requerido' })
    @IsString({message: 'El campo "name" debe ser de tipo String' })
    name: string;
    @IsNotEmpty({ message: 'El campo "CI" es requerido' })
    @IsString({message: 'El campo "CI" debe ser de tipo String' })
    CI: string;
}
