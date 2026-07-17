import { PrismaService } from '../prisma.service';
import { CreateAcademicActivityDto } from './dto/create-academic-activity.dto';
export declare class AcademicActivitiesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        takeaways: any;
        info: string;
        checkmark: boolean;
        hasCert: boolean;
        trophy: boolean;
        nota: string | null;
        hasActions: boolean;
        id: string;
        badge: string;
        badgeType: string;
        section: string;
        title: string;
        subtitle: string;
        materia: string;
        customTrophyText: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(data: CreateAcademicActivityDto): Promise<{
        takeaways: any;
        info: string;
        checkmark: boolean;
        hasCert: boolean;
        trophy: boolean;
        nota: string | null;
        hasActions: boolean;
        id: string;
        badge: string;
        badgeType: string;
        section: string;
        title: string;
        subtitle: string;
        materia: string;
        customTrophyText: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
