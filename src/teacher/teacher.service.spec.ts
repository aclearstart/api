import { Test, TestingModule } from '@nestjs/testing';
import { TeacherService } from './teacher.service';

describe('TeacherService', () => {
  let service: TeacherService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherService],
    }).compile();
    service = module.get<TeacherService>(TeacherService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
