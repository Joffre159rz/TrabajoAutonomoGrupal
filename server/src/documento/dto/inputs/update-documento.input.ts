import { PartialType } from '@nestjs/swagger';
import { CreateDocumentoInput } from './create-documento.input';

export class UpdateDocumentoInput extends PartialType(CreateDocumentoInput) {}
