import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./jwt.constants";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){

    constructor() {
      super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: new ConfigService().get<string>('SECRET'),
        });
      }
    
      async validate(payload: any) {
        return { userId: payload.id, name: payload.name };
      }

}