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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicActivitiesController = void 0;
const common_1 = require("@nestjs/common");
const academic_activities_service_1 = require("./academic-activities.service");
const create_academic_activity_dto_1 = require("./dto/create-academic-activity.dto");
let AcademicActivitiesController = class AcademicActivitiesController {
    academicActivitiesService;
    constructor(academicActivitiesService) {
        this.academicActivitiesService = academicActivitiesService;
    }
    findAll() {
        return this.academicActivitiesService.findAll();
    }
    create(createDto) {
        return this.academicActivitiesService.create(createDto);
    }
    remove(id) {
        return this.academicActivitiesService.remove(id);
    }
};
exports.AcademicActivitiesController = AcademicActivitiesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AcademicActivitiesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_academic_activity_dto_1.CreateAcademicActivityDto]),
    __metadata("design:returntype", void 0)
], AcademicActivitiesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AcademicActivitiesController.prototype, "remove", null);
exports.AcademicActivitiesController = AcademicActivitiesController = __decorate([
    (0, common_1.Controller)('academic-activities'),
    __metadata("design:paramtypes", [academic_activities_service_1.AcademicActivitiesService])
], AcademicActivitiesController);
//# sourceMappingURL=academic-activities.controller.js.map