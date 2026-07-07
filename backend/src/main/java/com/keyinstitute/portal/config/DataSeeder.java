package com.keyinstitute.portal.config;

import com.keyinstitute.portal.model.*;
import com.keyinstitute.portal.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * DataSeeder — Carga los datos iniciales del expediente de "Rodrigo" únicamente
 * si la base de datos se encuentra vacía, evitando duplicaciones al reiniciar
 * el contenedor en Azure o en el entorno local con H2.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class DataSeeder implements ApplicationRunner {

    private final StudentRepository studentRepository;
    private final AcademicActivityRepository academicActivityRepository;
    private final PowerSkillRepository powerSkillRepository;
    private final ExtraActivityRepository extraActivityRepository;
    private final WellDimensionRepository wellDimensionRepository;

    @Override
    @Transactional
    public void run(ApplicationArguments args) {
        // ── Guardia: si ya existe al menos un estudiante, no hace nada ────────
        if (studentRepository.existsByEmail("rodrigo@keyinstitute.edu.mx")) {
            log.info("DataSeeder: datos ya presentes, omitiendo seed.");
            return;
        }

        log.info("DataSeeder: inicializando datos del expediente de Rodrigo...");

        // ── Estudiante ────────────────────────────────────────────────────────
        Student rodrigo = Student.builder()
                .nombre("Rodrigo")
                .email("rodrigo@keyinstitute.edu.mx")
                .carrera("Ingeniería Mecatrónica y Robótica")
                .ciclo("Ciclo 3 · 2026")
                .becaPorcentaje(80)
                .tipoBeca("Key Transform")
                // Horas Estudiante (porcentajes del Dashboard)
                .horasWellPorcentaje(45)
                .horasSocialesPorcentaje(35)
                .horasKeyPorcentaje(25)
                // Horas Key detalle
                .horasKeyCompletadas(57)
                .horasKeyTotal(81)
                // Servicio Social
                .servSocialCompletadas(350)
                .servSocialTotal(500)
                .build();

        rodrigo = studentRepository.save(rodrigo);
        final Student savedRodrigo = rodrigo;

        // ── Actividades Académicas ────────────────────────────────────────────
        List<AcademicActivity> activities = List.of(
                AcademicActivity.builder()
                        .titulo("Diseño de prótesis biónica")
                        .categoria("PBL")
                        .badge("PBL")
                        .materia("Diseño de sistemas biomecánicos")
                        .nota("9.5")
                        .checkmark(true)
                        .student(savedRodrigo)
                        .build(),
                AcademicActivity.builder()
                        .titulo("Automatización línea de producción")
                        .categoria("PBL")
                        .badge("PBL")
                        .materia("Automatización industrial")
                        .nota("9.0")
                        .checkmark(true)
                        .student(savedRodrigo)
                        .build(),
                AcademicActivity.builder()
                        .titulo("Reto Innovación Sostenible — TechHub")
                        .categoria("Retos")
                        .badge("Reto")
                        .materia("Innovación y emprendimiento")
                        .premio("Primer lugar")
                        .checkmark(true)
                        .student(savedRodrigo)
                        .build(),
                AcademicActivity.builder()
                        .titulo("Machine Learning Fundamentals")
                        .categoria("Cursos")
                        .badge("Cursos y certs")
                        .materia("Sistemas Inteligentes")
                        .certificadoUrl("CERT-ML-2024-001")
                        .checkmark(true)
                        .student(savedRodrigo)
                        .build(),
                AcademicActivity.builder()
                        .titulo("DE Alemania — TU München")
                        .categoria("Experiencias")
                        .badge("Exp. Internacionales")
                        .materia("Intercambio Académico")
                        .checkmark(true)
                        .takeaways("Diseño industrial avanzado||Manufactura de precisión||Trabajo interdisciplinario")
                        .student(savedRodrigo)
                        .build()
        );
        academicActivityRepository.saveAll(activities);

        // ── Power Skills ──────────────────────────────────────────────────────
        List<PowerSkill> skills = List.of(
                PowerSkill.builder().competencia("Comunicación").porcentaje(85).student(savedRodrigo).build(),
                PowerSkill.builder().competencia("Liderazgo").porcentaje(65).student(savedRodrigo).build(),
                PowerSkill.builder().competencia("Trabajo en Equipo").porcentaje(90).student(savedRodrigo).build(),
                PowerSkill.builder().competencia("Resolución de Problemas").porcentaje(80).student(savedRodrigo).build(),
                PowerSkill.builder().competencia("Creatividad").porcentaje(75).student(savedRodrigo).build(),
                PowerSkill.builder().competencia("Adaptabilidad").porcentaje(88).student(savedRodrigo).build()
        );
        powerSkillRepository.saveAll(skills);

        // ── Actividades Extra ─────────────────────────────────────────────────
        List<ExtraActivity> extras = List.of(
                ExtraActivity.builder()
                        .categoria("Teacher Assistant")
                        .titulo("Mecatrónica I · Básica")
                        .descripcion("Apoyo al Dr. Eduardo Torres en laboratorios")
                        .rol("Teacher Assistant")
                        .cicloAnio("Ciclo 2 · 2024")
                        .student(savedRodrigo).build(),
                ExtraActivity.builder()
                        .categoria("Internship")
                        .titulo("Bosch México · Manufactura")
                        .descripcion("Ingeniero de manufactura")
                        .horas(null).rol("Ingeniero de manufactura")
                        .cicloAnio("Ciclo 2 · 2024")
                        .student(savedRodrigo).build(),
                ExtraActivity.builder()
                        .categoria("Investigación científica")
                        .titulo("Lab. Robótica Cognitiva · Dr. Ramírez")
                        .descripcion("Análisis de marcha biopedométrica con sensores inerciales")
                        .horas(192)
                        .rol("Investigador Junior")
                        .cicloAnio("Ciclo 2 · 2024")
                        .student(savedRodrigo).build(),
                ExtraActivity.builder()
                        .categoria("Key Spark")
                        .titulo("Taller de Impresión 3D")
                        .descripcion("Diseño CAD y manufactura aditiva")
                        .horas(16)
                        .cicloAnio("Ciclo 2 · 2024")
                        .student(savedRodrigo).build(),
                ExtraActivity.builder()
                        .categoria("Proyectos Sociales")
                        .titulo("Innovación para Comunidades Rurales")
                        .descripcion("Electrificación solar · Dr. Herrera")
                        .cicloAnio("2024")
                        .student(savedRodrigo).build(),
                ExtraActivity.builder()
                        .categoria("Club")
                        .titulo("Club de Manufactura Avanzada")
                        .descripcion("Manufactura de piezas de alta precisión")
                        .rol("Vocal y operador CNC")
                        .cicloAnio("2024")
                        .student(savedRodrigo).build()
        );
        extraActivityRepository.saveAll(extras);

        // ── Dimensiones WELL ──────────────────────────────────────────────────
        List<WellDimension> wellDims = List.of(
                WellDimension.builder().nombre("Físico").porcentaje(95).color("#3B82F6").student(savedRodrigo).build(),
                WellDimension.builder().nombre("Espiritual").porcentaje(95).color("#8B5CF6").student(savedRodrigo).build(),
                WellDimension.builder().nombre("Social").porcentaje(78).color("#F97316").student(savedRodrigo).build(),
                WellDimension.builder().nombre("Emocional").porcentaje(65).color("#EAB308").student(savedRodrigo).build(),
                WellDimension.builder().nombre("Financiero").porcentaje(55).color("#06B6D4").student(savedRodrigo).build(),
                WellDimension.builder().nombre("Intelectual").porcentaje(40).color("#22C55E").student(savedRodrigo).build(),
                WellDimension.builder().nombre("Ambiental").porcentaje(30).color("#4ADE80").student(savedRodrigo).build()
        );
        wellDimensionRepository.saveAll(wellDims);

        log.info("DataSeeder: expediente de Rodrigo cargado exitosamente.");
    }
}
