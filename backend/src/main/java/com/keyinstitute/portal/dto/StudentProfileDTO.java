package com.keyinstitute.portal.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class StudentProfileDTO {
    private Long id;
    private String nombre;
    private String email;
    private String carrera;
    private String ciclo;
    private Integer becaPorcentaje;
    private String tipoBeca;

    // Horas Estudiante
    private Integer horasWellPorcentaje;
    private Integer horasSocialesPorcentaje;
    private Integer horasKeyPorcentaje;

    // Horas Key detalle
    private Integer horasKeyCompletadas;
    private Integer horasKeyTotal;

    // Servicio Social
    private Integer servSocialCompletadas;
    private Integer servSocialTotal;

    // Listas relacionadas
    private List<PowerSkillDTO> powerSkills;
    private List<WellDimensionDTO> wellDimensions;

    @Data
    @Builder
    public static class PowerSkillDTO {
        private Long id;
        private String competencia;
        private Integer porcentaje;
    }

    @Data
    @Builder
    public static class WellDimensionDTO {
        private Long id;
        private String nombre;
        private Integer porcentaje;
        private String color;
    }
}
