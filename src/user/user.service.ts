import { Injectable } from '@nestjs/common';
import { json } from 'express';
import { userDTO } from 'src/shared/DTO`s/user.dto';


@Injectable() 
export class UserService {
    userList = [
        {
            name: "ali barkook",
            phoneNumber: "09373740272",
            id: '1'
        },
        {
            name: "alireza asefi",
            phoneNumber: "09128111856",
            id: '2'
        },
    ]

    getAllUser() {
        return this.userList
    }
    
    getUser(id: string) {
        let res;
        
        for(let user of this.userList) {
            if (user.id == id)  {
                res = user;
                break
            }
            else
                res = 'user not found';

        }
        return res
        
    }

    createUser(user: userDTO) {
        this.userList.push(user)
        user.id = JSON.stringify(this.userList.length + 1) ;
        const res = `user ${user.name} added sussecfuly`
        return {
            "message": res
        }
    }
}
