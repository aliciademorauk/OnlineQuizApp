package com.example.quizonline.controller;

import com.example.quizonline.model.Question;
import com.example.quizonline.service.QuestionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping("/api/quizzes")
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionService questionService;

    @PostMapping("/create-question")
    public ResponseEntity<Question> createQuestion(@Valid @RequestBody Question question) {
        Question createdQuestion = questionService.createQuestion(question);
        return ResponseEntity.status(CREATED).body(createdQuestion);
    }

    @GetMapping("/all-questions")
    public ResponseEntity<List<Question>> getAllQuestions() {
        List<Question> questions = questionService.getAllQuestions();
        return ResponseEntity.ok(questions);
    }

    @GetMapping("/question/{id}")
    public ResponseEntity<Question> getQuestionById(@PathVariable Long id) throws ChangeSetPersister.NotFoundException {
        Optional<Question> question = questionService.getQuestionById(id);
        if (question.isPresent()) {
            return ResponseEntity.ok(question.get());
        } else {
            throw new ChangeSetPersister.NotFoundException();
        }
    }

    @PutMapping("/{id}/update")
    public ResponseEntity<Question> updateQuestion(
            @RequestBody Question question, @PathVariable Long id) throws ChangeSetPersister.NotFoundException {
        Question updatedQuestion = questionService.updateQuestion(id, question);
        return ResponseEntity.ok(updatedQuestion);
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Void> deleteQuestion(@PathVariable Long id) {
        questionService.deleteQuestion(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/subjects")
    public ResponseEntity<List<String>> getAllSubjects() {
        List<String> subjects = questionService.getAllSubjects();
        return ResponseEntity.ok(subjects);
    }

    @GetMapping("/{subject}-quiz")
    public ResponseEntity<List<Question>> getQuestionsForUser(
            @RequestParam int num, @PathVariable @RequestParam String subject) {
        List<Question> questions = questionService.getQuestionsForUser(num, subject);
        List<Question> mutableQuestions = new ArrayList<>(questions);
        Collections.shuffle(mutableQuestions);
        List<Question> quiz = mutableQuestions.subList(0, Math.min(num, mutableQuestions.size()));
        return ResponseEntity.ok(quiz);
    }
}
