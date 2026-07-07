package com.keyinstitute.portal.service;

import com.keyinstitute.portal.dto.StudentProfileDTO;
import com.keyinstitute.portal.model.Student;
import com.keyinstitute.portal.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class StudentService {

    private final StudentRepository studentRepository;

    public StudentProfileDTO getStudentProfile(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new NoSuchElementException("Estudiante no encontrado con id: " + studentId));

        List<StudentProfileDTO.PowerSkillDTO> powerSkillDTOs = student.getPowerSkills().stream()
                .map(ps -> StudentProfileDTO.PowerSkillDTO.builder()
                        .id(ps.getId())
                        .competencia(ps.getCompetencia())
                        .porcentaje(ps.getPorcentaje())
                        .build())
                .toList();

        List<StudentProfileDTO.WellDimensionDTO> wellDimensionDTOs = student.getWellDimensions().stream()
                .map(wd -> StudentProfileDTO.WellDimensionDTO.builder()
                        .id(wd.getId())
                        .nombre(wd.getNombre())
                        .porcentaje(wd.getPorcentaje())
                        .color(wd.getColor())
                        .build())
                .toList();

        return StudentProfileDTO.builder()
                .id(student.getId())
                .nombre(student.getNombre())
                .email(student.getEmail())
                .carrera(student.getCarrera())
                .ciclo(student.getCiclo())
                .becaPorcentaje(student.getBecaPorcentaje())
                .tipoBeca(student.getTipoBeca())
                .horasWellPorcentaje(student.getHorasWellPorcentaje())
                .horasSocialesPorcentaje(student.getHorasSocialesPorcentaje())
                .horasKeyPorcentaje(student.getHorasKeyPorcentaje())
                .horasKeyCompletadas(student.getHorasKeyCompletadas())
                .horasKeyTotal(student.getHorasKeyTotal())
                .servSocialCompletadas(student.getServSocialCompletadas())
                .servSocialTotal(student.getServSocialTotal())
                .powerSkills(powerSkillDTOs)
                .wellDimensions(wellDimensionDTOs)
                .build();
    }
}
