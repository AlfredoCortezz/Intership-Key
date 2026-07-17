"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
require("dotenv/config");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('Seeding data...');
    const INITIAL_CARDS = [
        {
            badge: 'PBL',
            badgeType: 'PBL',
            section: 'PBL',
            title: 'Diseño de prótesis biónica',
            subtitle: 'Proyecto para paciente real · Diseño biomecánico',
            info: 'Rol: Líder de proyecto · 2024 · Ciclo 2',
            materia: 'Diseño de sistemas biomecánicos',
            nota: '9.5',
            hasActions: true,
        },
        {
            badge: 'PBL',
            badgeType: 'PBL',
            section: 'PBL',
            title: 'Automatización línea de producción',
            subtitle: 'Industria manufacturera local · Sistemas de control',
            info: 'Rol: Ingeniero de sistemas · 2025 · Ciclo 1',
            materia: 'Automatización industrial',
            nota: '9.0',
            checkmark: true,
        },
        {
            badge: 'Reto',
            badgeType: 'Retos',
            section: 'Retos',
            title: 'Reto Innovación Sostenible — TechHub',
            subtitle: 'Desarrollo de solución de energía renovable',
            info: 'Rol: Co-creador · 2024 · Ciclo 1',
            materia: 'Innovación y emprendimiento',
            trophy: true,
            checkmark: true,
            customTrophyText: 'Primer lugar'
        },
        {
            badge: 'Cursos y certs',
            badgeType: 'Cursos',
            section: 'Cursos Libres y certs',
            title: 'Machine Learning Fundamentals',
            subtitle: 'Coursera · Google · Obligatorio',
            info: 'Año y ciclo: 2024 · Ciclo 2 | Código: CERT-ML-2024-001',
            materia: 'Sistemas Inteligentes',
            checkmark: true,
            hasCert: true
        },
        {
            badge: 'Exp. Internacionales',
            badgeType: 'Experiencias',
            section: 'Experiencias Internacionales',
            title: 'DE Alemania',
            subtitle: 'Institución: TU München · Ingeniería de Sistemas',
            info: 'Cursos tomados: 3 · 2024 · Ciclo 1',
            materia: 'Intercambio Académico',
            checkmark: true,
            takeaways: JSON.stringify([
                'Diseño industrial avanzado',
                'Manufactura de precisión',
                'Trabajo interdisciplinario',
                'Mejor amigo del viaje: Carlos M.'
            ])
        }
    ];
    for (const item of INITIAL_CARDS) {
        await prisma.academicActivity.create({
            data: item
        });
    }
    console.log('Seed completed successfully!');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map