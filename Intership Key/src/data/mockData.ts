export const mockStudentProfile = {
  name: 'Alfredo Martínez',
  role: 'Estudiante',
  program: 'Desarrollo de Software',
  cohort: '2026',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
};

export const mockDashboardData = {
  horasEstudiante: [
    { name: 'Lun', horas: 4 },
    { name: 'Mar', horas: 6 },
    { name: 'Mie', horas: 5 },
    { name: 'Jue', horas: 7 },
    { name: 'Vie', horas: 3 },
  ],
  insignias: [
    { id: 1, title: 'Líder de Proyecto', icon: 'Award', date: 'Oct 2025' },
    { id: 2, title: 'Top Coder', icon: 'Code', date: 'Nov 2025' }
  ],
  recomendaciones: [
    'Mejorar la asistencia a tutorías WELL.',
    'Completar el módulo de Power Skills avanzado.'
  ],
  estado: {
    honores: 2,
    amonestaciones: 0
  }
};

export const mockPowerSkills = [
  { subject: 'Comunicación', A: 85, fullMark: 100 },
  { subject: 'Liderazgo', A: 65, fullMark: 100 },
  { subject: 'Trabajo en Equipo', A: 90, fullMark: 100 },
  { subject: 'Resolución', A: 80, fullMark: 100 },
  { subject: 'Creatividad', A: 75, fullMark: 100 },
  { subject: 'Adaptabilidad', A: 88, fullMark: 100 },
];
