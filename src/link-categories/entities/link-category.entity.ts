import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LinkCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Generated('increment')
  order: number;
}
