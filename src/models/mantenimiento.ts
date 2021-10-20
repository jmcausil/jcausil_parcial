const Sequelize = require('sequelize');

import { database } from "../database/db";

export class User extends Sequelize.Model {
    public id!: string;
    public fecha!: string;
    public descripcion!: string;
    public resultado!: string;
    
    

}

export interface UserI{

    id: string;
    fecha: string;
    descripcion: string;
    resultado: string;
    
}

User.init (
    {
        id: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },

        fecha: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        resultados: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        

    },

    {
            tableName: "mantenimientos",
            sequelize: database, 
            timestamps: true
    }


);

