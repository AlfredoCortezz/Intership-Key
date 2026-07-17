import { Test, TestingModule } from '@nestjs/testing';
import { AcademicActivitiesController } from './academic-activities.controller';

describe('AcademicActivitiesController', () => {
  let controller: AcademicActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicActivitiesController],
    }).compile();

    controller = module.get<AcademicActivitiesController>(AcademicActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
