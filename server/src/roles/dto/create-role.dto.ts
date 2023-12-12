import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty({ message: 'El campo "name" es requerido' })
    @IsString({message: 'El campo "name" debe ser de tipo String' })
    name: string;
}
