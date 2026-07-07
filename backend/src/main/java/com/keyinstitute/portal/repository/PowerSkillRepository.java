package com.keyinstitute.portal.repository;

import com.keyinstitute.portal.model.PowerSkill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PowerSkillRepository extends JpaRepository<PowerSkill, Long> {
    List<PowerSkill> findByStudentId(Long studentId);
}
