import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Redirect, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { userDTO } from 'src/DTO`s/user.dto';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService,
    ){}

    @Get('alluser')
    @HttpCode(200)
    // @Redirect('https://www.google.com/')
    getAllUser() {
        return this.userService.getAllUser()
    }
    
    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUser(id)
    }
    
    @Post('create')
    createUser(@Body() user: userDTO) {
        return this.userService.createUser(user)
    }
}
