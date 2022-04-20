import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: false, unique: true })
  @IsEmail()
  email: string;

  @Column({ nullable: false, unique: true })
  password: string;

  @Column({ nullable: false, unique: true })
  PictureColor: 'Red' | 'Green' | 'Blue' | 'Yellow' | 'Purple' | 'Orange';

  @Column({ nullable: false, unique: true })
  Role: 'ADMIN' | 'USER';
}
