import { Test, TestingModule } from '@nestjs/testing';
import { TeacherController } from './teacher.controller';

describe('Teacher Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [TeacherController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: TeacherController = module.get<TeacherController>(TeacherController);
    expect(controller).toBeDefined();
  });
});
