import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';

const V_SCALE = ['V0', 'V1','V2','V3','V4','V5','V6','V7','V8','V9','V10','V11','V12','V13', 'V14']
const YDS_SCALE = ['5.7', '5.8', '5,9', '5.10a', '510b'];

@Entity()
export class ClimbCount extends BaseEntity {

  @PrimaryColumn()
  id: string;

  @Column()
  userId: string;
}

export function getDefaultClimbs() {
  return
}