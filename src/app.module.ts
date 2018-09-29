import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [StudentModule, TeacherModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
