import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { TodoInterface } from './types/TodoInterface';
import { TodoService } from './todo.service';
import { tasks } from './entities/todo.entity';

@Controller('todo')
export class TodoController {
constructor(private todoService:TodoService){}

    @Get()
    async findAll(): Promise<TodoInterface[]> {
        return this.todoService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<TodoInterface> {
        return this.todoService.findOne(+id);
    }
    @Post()
    async create(@Body() todo:Omit<TodoInterface,'id'>):Promise<TodoInterface>{
        return this.todoService.create(todo);
    }
    @Delete(':id')
    async delete(@Param('id') id: string): Promise<tasks[]> {
        return this.todoService.delete(+id);
    }
}