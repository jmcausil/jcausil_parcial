
import { Request, Response } from "express";
import { User } from "../models/equipos";



export class UserController {
    public index(req: Request, res: Response) {
        
        User.findAll({})   //para traer todos los registros que tengan usuarios 
        .then((users: Array<User>) => res.json(users))
        .catch((err: Error) => res.status(500).json(err));
    }

    

    }
