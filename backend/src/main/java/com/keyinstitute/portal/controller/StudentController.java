package com.keyinstitute.portal.controller;

import com.keyinstitute.portal.dto.AcademicActivityDTO;
import com.keyinstitute.portal.dto.StudentProfileDTO;
import com.keyinstitute.portal.service.AcademicActivityService;
import com.keyinstitute.portal.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/v1/student")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;
    private final AcademicActivityService academicActivityService;

    /**
     * GET /api/v1/student/{id}
     * Retorna el perfil completo del estudiante (datos + power skills + dimensiones WELL).
     */
    @GetMapping("/{id}")
    public ResponseEntity<?> getStudentProfile(@PathVariable Long id) {
        try {
            StudentProfileDTO profile = studentService.getStudentProfile(id);
            return ResponseEntity.ok(profile);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * GET /api/v1/student/{id}/academic-activities
     * Lista todas las actividades académicas formativas del estudiante.
     */
    @GetMapping("/{id}/academic-activities")
    public ResponseEntity<?> getAcademicActivities(@PathVariable Long id) {
        try {
            List<AcademicActivityDTO> activities = academicActivityService.getActivitiesByStudent(id);
            return ResponseEntity.ok(activities);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
