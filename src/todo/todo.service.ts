import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tasks } from './entities/todo.entity';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(tasks) private todoRepository: Repository<tasks>) {}

    async findAll(): Promise<tasks[]> {
        return this.todoRepository.find();
    }

    async findOne(id: number): Promise<tasks> {
        return this.todoRepository.findOne({ where: { id } });
    }

    async create(todo: Omit<tasks, 'id'>): Promise<tasks> {
        return this.todoRepository.save(todo);
    }

    async delete(id: number): Promise<tasks[]> {
        await this.todoRepository.delete(id);
        return this.todoRepository.find();
    }
}

