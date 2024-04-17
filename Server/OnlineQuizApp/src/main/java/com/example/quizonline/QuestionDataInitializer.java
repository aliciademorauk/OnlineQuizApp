package com.example.quizonline;

import com.example.quizonline.model.Question;
import com.example.quizonline.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SampleDataInit implements ApplicationRunner {
    private QuestionRepository questionRepository;

    List<Question> sampleQuestions = new ArrayList<>(Arrays.asList(
            new Question(
                    "Which wine is typically paired with Camembert cheese?",
                    "Chardonnay",
                    "single",
                    Arrays.asList("Merlot", "Chardonnay", "Champagne", "Bordeaux"),
                    Arrays.asList("Chardonnay")
            )
    ));


    @Autowired
    public SampleDataInit(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }
    public void run(ApplicationArguments args) {
        questionRepository.save(sampleQuestions);
    }
}
