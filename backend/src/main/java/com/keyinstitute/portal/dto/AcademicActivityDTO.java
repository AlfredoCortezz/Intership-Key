package com.keyinstitute.portal.dto;

import lombok.Builder;
import lombok.Data;

import java.util.List;

/**
 * DTO de respuesta para AcademicActivity.
 * Los takeaways se devuelven como lista parseando el delimitador "||".
 */
@Data
@Builder
public class AcademicActivityDTO {
    private Long id;
    private String titulo;
    private String categoria;
    private String badge;
    private String materia;
    private String nota;
    private String premio;
    private String certificadoUrl;
    private List<String> takeaways;
    private Boolean checkmark;
    private Long studentId;
}
