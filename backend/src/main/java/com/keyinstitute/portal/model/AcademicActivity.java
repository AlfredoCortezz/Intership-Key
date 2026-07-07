package com.keyinstitute.portal.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "academic_activities")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class AcademicActivity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    /**
     * Categorías posibles: PBL, Retos, Cursos, Experiencias
     */
    @Column(nullable = false)
    private String categoria;

    @Column(nullable = false)
    private String materia;

    @Column(nullable = true)
    private String nota;

    @Column(nullable = true)
    private String premio;

    @Column(nullable = true, length = 500)
    private String certificadoUrl;

    /**
     * Aprendizajes clave (takeaways). Almacenados como texto delimitado por "||"
     * para simplicidad sin tabla extra; fácilmente parseables en el servicio.
     */
    @Column(nullable = true, columnDefinition = "TEXT")
    private String takeaways;

    @Column(nullable = true)
    private String badge;

    @Column(nullable = true)
    private Boolean checkmark;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;
}
