package com.keyinstitute.portal.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "power_skills")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class PowerSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String competencia;

    @Column(nullable = false)
    private Integer porcentaje;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;
}
