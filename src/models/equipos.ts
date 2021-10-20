const Sequelize = require('sequelize');

import { database } from "../database/db";

export class Equipos extends Sequelize.Model {
    public id!: string;
    public marca!: string;
    public modelo!: string;
    

}

export interface EquiposI{

    id: string;
    marca: string;
    modelo: string;
    
}

Equipos.init (
    {
        id: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },

        marca: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        modelo: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        

    },

    {
            tableName: "equipos",
            sequelize: database, 
            timestamps: true
    }


);

