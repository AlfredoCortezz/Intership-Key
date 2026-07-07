package com.keyinstitute.portal.repository;

import com.keyinstitute.portal.model.AcademicActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AcademicActivityRepository extends JpaRepository<AcademicActivity, Long> {

    List<AcademicActivity> findByStudentId(Long studentId);

    List<AcademicActivity> findByStudentIdAndCategoria(Long studentId, String categoria);
}
