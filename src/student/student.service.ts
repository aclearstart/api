import { Injectable } from '@nestjs/common';
import { IStudent } from './student.interface';
import { STUDENTS } from './student.mockdata';

@Injectable()
export class StudentService {
  students: IStudent[] = STUDENTS;

  async getStudent(id: string): Promise<IStudent> {
    return this.students.find((student) => {
      return student.id === id;
    })
  }
}
