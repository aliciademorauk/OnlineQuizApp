package com.example.quizonline.repository;

import com.example.quizonline.model.Question;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query("SELECT DISTINCT question.subject FROM Question question")
    List<String> findDistinctSubjects();
    Page<Question> findBySubject(String subject, Pageable pageable);
}
