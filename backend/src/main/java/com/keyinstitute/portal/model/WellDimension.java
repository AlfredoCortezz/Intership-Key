package com.keyinstitute.portal.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "well_dimensions")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class WellDimension {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Dimensiones WELL: Físico, Espiritual, Social, Emocional,
     *                   Financiero, Intelectual, Ambiental
     */
    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private Integer porcentaje;

    /**
     * Color hex para la gráfica del frontend, ej: "#3B82F6"
     */
    @Column(nullable = false)
    private String color;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;
}
