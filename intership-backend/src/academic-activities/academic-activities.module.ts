import { Module } from '@nestjs/common';
import { AcademicActivitiesService } from './academic-activities.service';
import { AcademicActivitiesController } from './academic-activities.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [AcademicActivitiesController],
  providers: [AcademicActivitiesService, PrismaService],
})
export class AcademicActivitiesModule {}
