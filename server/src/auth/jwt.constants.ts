import { ConfigModule, ConfigService } from '@nestjs/config';
export const jwtConstants = {
    secret: new ConfigService().get<string>('SECRET')
}