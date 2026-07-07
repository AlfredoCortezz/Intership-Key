package com.keyinstitute.portal.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "students")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String carrera;

    @Column(nullable = false)
    private String ciclo;

    @Column(nullable = false)
    private Integer becaPorcentaje;

    @Column(nullable = false)
    private String tipoBeca;

    // Horas Estudiante (porcentajes de progreso)
    @Column
    private Integer horasWellPorcentaje;

    @Column
    private Integer horasSocialesPorcentaje;

    @Column
    private Integer horasKeyPorcentaje;

    // Horas Key detalle
    @Column
    private Integer horasKeyCompletadas;

    @Column
    private Integer horasKeyTotal;

    // Servicio Social
    @Column
    private Integer servSocialCompletadas;

    @Column
    private Integer servSocialTotal;

    // Relaciones
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    private List<AcademicActivity> academicActivities = new ArrayList<>();

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    private List<PowerSkill> powerSkills = new ArrayList<>();

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    private List<ExtraActivity> extraActivities = new ArrayList<>();

    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    private List<WellDimension> wellDimensions = new ArrayList<>();
}
