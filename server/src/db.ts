import "reflect-metadata";
import {createConnection} from "typeorm";

import { ClimbCount } from './models/climbCountModel';

export async function getConnection() {
  return createConnection({
    type: 'sqlite',
    database: './db.sql'
  });
};
