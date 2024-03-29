import { Body, Controller, Get, Post, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { TokenDTO } from './dto/token.dto';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDTO } from './dto/register.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    /**
     * LOGIN EN POSTMAN
     * {
    "email": "pp_nvj@algo.com",
    "password": "1234"
        }
     */
    @Post('login')
    async login(@Body() login: LoginDTO): Promise<TokenDTO> {
        console.log(login);
        return this.authService.login(login);
    }
    /**
     * 
     * FUNCION register 
     * {
        "fullName": "user1",
        "email": "user1@gmail.com",
        "password": "1234"
    }
     */
    @Post('register')
    async register(@Body() register: RegisterDTO): Promise<TokenDTO> {
        return this.authService.register(register);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() request) {
        console.log('getProfile');
        console.log(request.user);

        return request.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('refresh')
    async refreshToken(@Request() request): Promise<TokenDTO> {
        if (!request.user) throw new UnauthorizedException();

        return this.authService.refreshToken(request.user);
    }
}
