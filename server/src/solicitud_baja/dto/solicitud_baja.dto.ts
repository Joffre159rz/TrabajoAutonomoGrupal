import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SolicitudBajaDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  documento_id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  proceso_id: string;
}
