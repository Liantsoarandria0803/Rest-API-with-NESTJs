import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class tasks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    completed: boolean;
}