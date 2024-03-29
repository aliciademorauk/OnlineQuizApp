package com.example.quizonline.repository;

import com.example.quizonline.model.Question;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<String> findDistinctSubjects();

    Page<Question> findBySubject(String subject, Pageable pageable);
}
