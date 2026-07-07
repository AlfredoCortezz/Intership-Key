package com.keyinstitute.portal.repository;

import com.keyinstitute.portal.model.WellDimension;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WellDimensionRepository extends JpaRepository<WellDimension, Long> {
    List<WellDimension> findByStudentId(Long studentId);
}
