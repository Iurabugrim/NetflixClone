import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Movies')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  title: string;

  @Column({ nullable: true, default: '' })
  desc: string;

  @Column({ nullable: false, unique: true })
  img: string;

  @Column({ nullable: false, unique: true })
  imgTitle: string;

  @Column({ nullable: false, unique: true })
  imgSm: string;

  @Column({ nullable: false, unique: true })
  trailer: string;

  @Column({ nullable: false, unique: true })
  video: string;

  @Column()
  year: string;

  @Column()
  limit: number;

  @Column()
  genre: string;
}
