import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.guard';

@Controller('auth')
export class AuthController {

    constructor(private authServ: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post()
    async login(@Request() paramz: any) {
        return this.authServ.login(paramz)
    }
}
