package com.keyinstitute.portal.controller;

import com.keyinstitute.portal.dto.AcademicActivityDTO;
import com.keyinstitute.portal.dto.AcademicActivityRequestDTO;
import com.keyinstitute.portal.service.AcademicActivityService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/v1/academic-activities")
@RequiredArgsConstructor
public class AcademicActivityController {

    private final AcademicActivityService activityService;

    /**
     * POST /api/v1/academic-activities
     * Crea una nueva actividad académica para el estudiante indicado en el body.
     * HTTP 201 Created al éxito.
     */
    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody AcademicActivityRequestDTO request) {
        try {
            AcademicActivityDTO created = activityService.create(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (NoSuchElementException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new ErrorResponse(e.getMessage()));
        }
    }

    /**
     * DELETE /api/v1/academic-activities/{id}
     * Elimina la actividad académica con el id dado.
     * HTTP 204 No Content al éxito.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        try {
            activityService.delete(id);
            return ResponseEntity.noContent().build();
        } catch (NoSuchElementException e) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new ErrorResponse(e.getMessage()));
        }
    }

    // ── Error response record ────────────────────────────────────────────────
    record ErrorResponse(String message) {}
}
