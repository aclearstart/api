import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';

describe('Student Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [StudentController],
    }).compile();
  });

  it('should be defined', () => {
    const controller: StudentController = module.get<StudentController>(StudentController);
    expect(controller).toBeDefined();
  });

  it('should have a get route', () => {
    const controller: StudentController = module.get<StudentController>(StudentController);
    expect(controller.getStudents).toBeDefined();
  })

  it ('should have a put route', () => {
    const controller: StudentController = module.get<StudentController>(StudentController);
    expect(controller.putStudents).toBeDefined();
  })

  it ('should have a post route', () => {
    const controller: StudentController = module.get<StudentController>(StudentController);
    expect(controller.postStudents).toBeDefined();
  })

  it ('should have a delete route', () => {
    const controller: StudentController = module.get<StudentController>(StudentController);
    expect(controller.deleteStudents).toBeDefined();
  })


});
