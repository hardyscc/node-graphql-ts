import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  BaseEntity
} from "typeorm";
import * as uuidv4 from "uuid/v4";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn("uuid") public id: string;

  @Column("varchar", { length: 255 })
  public email: string;

  @Column("text") public password: string;

  @BeforeInsert()
  protected addId() {
    this.id = uuidv4();
  }
}
