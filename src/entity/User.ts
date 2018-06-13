import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "integer" })
  public id: number;

  @Column({ type: "varchar", length: 100 })
  public firstName: string;

  @Column({ type: "varchar", length: 100 })
  public lastName: string;

  @Column({ type: "smallint" })
  public age: number;
}
