const Sequelize = require('sequelize');

import { database } from "../database/db";

export class User extends Sequelize.Model {
    public id!: string;
    public marca!: string;
    public modelo!: string;
    

}

export interface UserI{

    id: string;
    marca: string;
    modelo: string;
    
}

User.init (
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

