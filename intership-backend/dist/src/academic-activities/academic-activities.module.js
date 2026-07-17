"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicActivitiesModule = void 0;
const common_1 = require("@nestjs/common");
const academic_activities_service_1 = require("./academic-activities.service");
const academic_activities_controller_1 = require("./academic-activities.controller");
const prisma_service_1 = require("../prisma.service");
let AcademicActivitiesModule = class AcademicActivitiesModule {
};
exports.AcademicActivitiesModule = AcademicActivitiesModule;
exports.AcademicActivitiesModule = AcademicActivitiesModule = __decorate([
    (0, common_1.Module)({
        controllers: [academic_activities_controller_1.AcademicActivitiesController],
        providers: [academic_activities_service_1.AcademicActivitiesService, prisma_service_1.PrismaService],
    })
], AcademicActivitiesModule);
//# sourceMappingURL=academic-activities.module.js.map