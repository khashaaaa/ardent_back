import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConsumerService } from '../consumer/consumer.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private consumerServ: ConsumerService, private jwtServ: JwtService) {}

    async checkCredentials(email: string, pass: string): Promise<any> {
        const consumer = await this.consumerServ.checkOne(email)

        if(consumer && consumer.pass === pass) {
            const { pass, ...rez } = consumer
            return rez
        }

        return null
    }

    async login(consumer: any): Promise<any> {

        const { email, pass } = consumer.body
        const found = await this.consumerServ.checkOne(email)
        const match = await bcrypt.compare(pass, found.pass);

        if(match === true) {
            const tuken = await this.jwtServ.signAsync({ username: email, sub: found.mark })
            return {
                access_token: tuken
            }
        }
    }
}
