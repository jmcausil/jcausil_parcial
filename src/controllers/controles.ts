import { Request, Response } from "express";
import { Mantenimientos } from "../models/mantenimiento";



export class MantenimientosrController {
    public index(req: Request, res: Response) {
        
        Mantenimientos.findAll({})   
        .then((Mantenimientos: Array<Mantenimientos>) => res.json(Mantenimientos))
        .catch((err: Error) => res.status(500).json(err));
    }

    

    }