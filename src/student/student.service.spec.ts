import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentService],
    }).compile();
    service = module.get<StudentService>(StudentService);
  });
  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have a get id method', () => {
    expect(service.getStudent).toBeDefined();
  })
});
