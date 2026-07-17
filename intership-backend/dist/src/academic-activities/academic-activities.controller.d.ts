import { AcademicActivitiesService } from './academic-activities.service';
import { CreateAcademicActivityDto } from './dto/create-academic-activity.dto';
export declare class AcademicActivitiesController {
    private readonly academicActivitiesService;
    constructor(academicActivitiesService: AcademicActivitiesService);
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
    create(createDto: CreateAcademicActivityDto): Promise<{
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
