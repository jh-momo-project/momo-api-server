import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LinkCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Generated('increment')
  order: number;
}
