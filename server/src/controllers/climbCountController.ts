import * as uuid from 'uuid';

import { getConnection } from '../db';
import { ClimbCount } from '../models/climbCountModel';

async function getClimbsByUser(userId: string) {
  const conn = await getConnection();
  const climbs = await ClimbCount.find({ userId });
  console.log(climbs);
  return climbs;
}

async function writeClimbsByUser(userId: string, climbs: ClimbCount[]) {
  const userClimbs = new ClimbCount();
  userClimbs.id = uuid.v4();
  userClimbs.userId = userId;
  return userClimbs.save();
}