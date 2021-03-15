import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  url: `postgresql://${config.username}:${config.password}@${config.host}/${config.database}`,
  // username: config.username,
  // password: config.password,
  // database: config.database,
  // host: config.host,
  //
  dialect: config.dialect,
  storage: ':memory:',
});
