
import { Request, Response } from "express";
import { Equipos } from "../models/equipos";



export class EquiposController {
    public index(req: Request, res: Response) {
        
        Equipos.findAll({})   //para traer todos los registros que tengan usuarios 
        .then((Equipos: Array<Equipos>) => res.json(Equipos))
        .catch((err: Error) => res.status(500).json(err));
    }

    

    }
