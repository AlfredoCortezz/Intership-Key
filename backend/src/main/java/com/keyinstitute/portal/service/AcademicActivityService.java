package com.keyinstitute.portal.service;

import com.keyinstitute.portal.dto.AcademicActivityDTO;
import com.keyinstitute.portal.dto.AcademicActivityRequestDTO;
import com.keyinstitute.portal.model.AcademicActivity;
import com.keyinstitute.portal.model.Student;
import com.keyinstitute.portal.repository.AcademicActivityRepository;
import com.keyinstitute.portal.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AcademicActivityService {

    private static final String TAKEAWAY_DELIMITER = "||";

    private final AcademicActivityRepository activityRepository;
    private final StudentRepository studentRepository;

    // ── READ ──────────────────────────────────────────────────────────────────

    public List<AcademicActivityDTO> getActivitiesByStudent(Long studentId) {
        validateStudentExists(studentId);
        return activityRepository.findByStudentId(studentId)
                .stream()
                .map(this::toDTO)
                .toList();
    }

    // ── CREATE ────────────────────────────────────────────────────────────────

    @Transactional
    public AcademicActivityDTO create(AcademicActivityRequestDTO request) {
        Student student = studentRepository.findById(request.getStudentId())
                .orElseThrow(() -> new NoSuchElementException(
                        "Estudiante no encontrado con id: " + request.getStudentId()));

        AcademicActivity entity = AcademicActivity.builder()
                .titulo(request.getTitulo())
                .categoria(request.getCategoria())
                .materia(request.getMateria())
                .badge(request.getBadge())
                .nota(request.getNota())
                .premio(request.getPremio())
                .certificadoUrl(request.getCertificadoUrl())
                .takeaways(joinTakeaways(request.getTakeaways()))
                .checkmark(request.getCheckmark())
                .student(student)
                .build();

        AcademicActivity saved = activityRepository.save(entity);
        return toDTO(saved);
    }

    // ── DELETE ────────────────────────────────────────────────────────────────

    @Transactional
    public void delete(Long activityId) {
        AcademicActivity activity = activityRepository.findById(activityId)
                .orElseThrow(() -> new NoSuchElementException(
                        "Actividad académica no encontrada con id: " + activityId));
        activityRepository.delete(activity);
    }

    // ── HELPERS ───────────────────────────────────────────────────────────────

    private AcademicActivityDTO toDTO(AcademicActivity entity) {
        return AcademicActivityDTO.builder()
                .id(entity.getId())
                .titulo(entity.getTitulo())
                .categoria(entity.getCategoria())
                .badge(entity.getBadge())
                .materia(entity.getMateria())
                .nota(entity.getNota())
                .premio(entity.getPremio())
                .certificadoUrl(entity.getCertificadoUrl())
                .takeaways(splitTakeaways(entity.getTakeaways()))
                .checkmark(entity.getCheckmark())
                .studentId(entity.getStudent().getId())
                .build();
    }

    private String joinTakeaways(List<String> takeaways) {
        if (takeaways == null || takeaways.isEmpty()) return null;
        return String.join(TAKEAWAY_DELIMITER, takeaways);
    }

    private List<String> splitTakeaways(String raw) {
        if (raw == null || raw.isBlank()) return List.of();
        return Arrays.stream(raw.split("\\|\\|"))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toList());
    }

    private void validateStudentExists(Long studentId) {
        if (!studentRepository.existsById(studentId)) {
            throw new NoSuchElementException("Estudiante no encontrado con id: " + studentId);
        }
    }
}
