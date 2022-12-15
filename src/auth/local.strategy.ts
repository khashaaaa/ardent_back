import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrat extends PassportStrategy(Strategy) {

    constructor(private authServ: AuthService) {
        super()
    }

    async checkCreds(email: string, pass: string): Promise<any> {
        const consumer = await this.authServ.checkCredentials(email, pass)

        if(!consumer) {
            throw new UnauthorizedException()
        }

        return consumer
    }
}