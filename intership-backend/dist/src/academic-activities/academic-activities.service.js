"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let AcademicActivitiesService = class AcademicActivitiesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        const activities = await this.prisma.academicActivity.findMany({
            orderBy: { createdAt: 'desc' }
        });
        return activities.map(act => ({
            ...act,
            takeaways: act.takeaways ? JSON.parse(act.takeaways) : undefined
        }));
    }
    async create(data) {
        const takeawaysString = data.takeaways ? JSON.stringify(data.takeaways) : null;
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
    async remove(id) {
        const activity = await this.prisma.academicActivity.findUnique({ where: { id } });
        if (!activity)
            throw new common_1.NotFoundException(`Actividad con ID ${id} no encontrada`);
        await this.prisma.academicActivity.delete({ where: { id } });
        return { message: 'Actividad eliminada exitosamente' };
    }
};
exports.AcademicActivitiesService = AcademicActivitiesService;
exports.AcademicActivitiesService = AcademicActivitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AcademicActivitiesService);
//# sourceMappingURL=academic-activities.service.js.map