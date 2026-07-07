package com.keyinstitute.portal.repository;

import com.keyinstitute.portal.model.ExtraActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExtraActivityRepository extends JpaRepository<ExtraActivity, Long> {
    List<ExtraActivity> findByStudentId(Long studentId);
    List<ExtraActivity> findByStudentIdAndCategoria(Long studentId, String categoria);
}
