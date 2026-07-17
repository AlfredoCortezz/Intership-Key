import { Test, TestingModule } from '@nestjs/testing';
import { AcademicActivitiesService } from './academic-activities.service';

describe('AcademicActivitiesService', () => {
  let service: AcademicActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademicActivitiesService],
    }).compile();

    service = module.get<AcademicActivitiesService>(AcademicActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
