import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipoFlujoProcesoDto {
    @IsNotEmpty({ message: 'El campo "name" es requerido' })
    @IsString({message: 'El campo "name" debe ser de tipo String' })
    name: string;
}
