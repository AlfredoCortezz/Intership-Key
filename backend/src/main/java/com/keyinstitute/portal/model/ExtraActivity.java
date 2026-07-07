package com.keyinstitute.portal.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "extra_activities")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class ExtraActivity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Categorías: Teacher Assistant, Internship, Investigación científica,
     *             Key Spark, Servicio Social, Proyectos Sociales, Club
     */
    @Column(nullable = false)
    private String categoria;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = true, length = 1000)
    private String descripcion;

    @Column(nullable = true)
    private Integer horas;

    @Column(nullable = true)
    private String rol;

    @Column(nullable = true)
    private String cicloAnio;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;
}
