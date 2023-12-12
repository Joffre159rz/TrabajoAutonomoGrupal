import { IsEmail, IsMongoId, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsMongoId()
    ciudadId: string

    @IsNotEmpty()
    @IsMongoId()
    roleId: string

}
