import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademicActivitiesModule } from './academic-activities/academic-activities.module';

@Module({
  imports: [AcademicActivitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
