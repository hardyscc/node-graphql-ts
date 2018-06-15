import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") public id: string;

  @Column("varchar", { length: 255 })
  public email: string;

  @Column("text") public password: string;
}
