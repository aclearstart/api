import { Controller, Get, Put, Delete, Post, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

  constructor(private service: StudentService) {}

  @Get(':id')
  getStudents(@Param('id') id) {
    return this.service.getStudent(id);
  }

  @Put()
  putStudents() {
    return "wrong";
  }

  @Post()
  postStudents() {
    return "wrong";
  }

  @Delete()
  deleteStudents() {
    return "wrong";
  }
}
