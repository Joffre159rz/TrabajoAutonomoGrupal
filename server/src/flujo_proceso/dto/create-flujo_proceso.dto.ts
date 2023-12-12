import { IsNotEmpty, IsString, IsMongoId } from "class-validator";

export class CreateFlujoProcesoDto {

    @IsNotEmpty({ message: 'El campo "name" es requerido' })
    @IsString({ message: 'El campo "name" debe ser una cadena de caracteres' })
    name: string;
    
    @IsNotEmpty({ message: 'El campo "tipo_flujo_proceso_id" es requerido' })
    @IsMongoId({ message: 'El campo "tipo_flujo_proceso_id" debe ser una id de mongo válida' })
    tipo_flujo_proceso_id: string;

    @IsNotEmpty({ message: 'El campo "opciones_id" es requerido' })
    @IsMongoId({ message: 'El campo "opciones_id" debe ser una id de mongo válida' })
    opciones_id: string;

};
