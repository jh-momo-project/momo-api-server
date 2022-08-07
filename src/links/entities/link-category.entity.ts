import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Link } from './link.entity';

@Entity()
export class LinkCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  @Generated('increment')
  order: number;

  @OneToMany((type) => Link, (link) => link.category)
  links: Link[];
}
