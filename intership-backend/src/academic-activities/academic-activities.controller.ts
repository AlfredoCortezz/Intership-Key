import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AcademicActivitiesService } from './academic-activities.service';
import { CreateAcademicActivityDto } from './dto/create-academic-activity.dto';

@Controller('academic-activities')
export class AcademicActivitiesController {
  constructor(private readonly academicActivitiesService: AcademicActivitiesService) {}

  @Get()
  findAll() {
    return this.academicActivitiesService.findAll();
  }

  @Post()
  create(@Body() createDto: CreateAcademicActivityDto) {
    return this.academicActivitiesService.create(createDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicActivitiesService.remove(id);
  }
}
