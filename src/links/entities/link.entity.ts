import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  // directory: number; // directoryId

  // @Column()
  // order: number;
}
