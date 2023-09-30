import { Table, Column, Model, DataType } from 'sequelize-typescript';
import {sequelize} from '../db/database';
// @Table
export class Task extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.TEXT,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  completed!: string;
}
