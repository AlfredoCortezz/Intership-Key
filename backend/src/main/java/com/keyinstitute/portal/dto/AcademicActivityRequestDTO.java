package com.keyinstitute.portal.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

/**
 * DTO de request para crear o actualizar una AcademicActivity.
 */
@Data
public class AcademicActivityRequestDTO {

    @NotBlank(message = "El título es obligatorio")
    private String titulo;

    @NotBlank(message = "La categoría es obligatoria (PBL, Retos, Cursos, Experiencias)")
    private String categoria;

    @NotBlank(message = "La materia es obligatoria")
    private String materia;

    private String badge;
    private String nota;
    private String premio;
    private String certificadoUrl;
    private List<String> takeaways;
    private Boolean checkmark;

    @NotNull(message = "El ID del estudiante es obligatorio")
    private Long studentId;
}
