import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateAcademicActivityDto } from './dto/create-academic-activity.dto';

@Injectable()
export class AcademicActivitiesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const activities = await this.prisma.academicActivity.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    // Parsear el campo JSON de takeaways si existe
    return activities.map(act => ({
      ...act,
      takeaways: act.takeaways ? JSON.parse(act.takeaways) : undefined
    }));
  }

  async create(data: CreateAcademicActivityDto) {
    const takeawaysString = data.takeaways ? JSON.stringify(data.takeaways) : null;
    
    // Extraer y transformar los takeaways para la BDD
    const { takeaways, ...rest } = data;
    
    const newActivity = await this.prisma.academicActivity.create({
      data: {
        ...rest,
        takeaways: takeawaysString,
      },
    });

    return {
      ...newActivity,
      takeaways: newActivity.takeaways ? JSON.parse(newActivity.takeaways) : undefined
    };
  }

  async remove(id: string) {
    const activity = await this.prisma.academicActivity.findUnique({ where: { id } });
    if (!activity) throw new NotFoundException(`Actividad con ID ${id} no encontrada`);

    await this.prisma.academicActivity.delete({ where: { id } });
    return { message: 'Actividad eliminada exitosamente' };
  }
}
