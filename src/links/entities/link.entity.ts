import { Column, Entity, Generated, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LinkCategory } from './link-category.entity';

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ default: null })
  title: string;

  @Column({ default: null })
  description: string;

  @Column({ default: null })
  thumbnail: string;

  @Column()
  @Generated('increment')
  order: number;

  @ManyToOne((type) => LinkCategory, (category) => category.links, { eager: true })
  category: LinkCategory;
}
