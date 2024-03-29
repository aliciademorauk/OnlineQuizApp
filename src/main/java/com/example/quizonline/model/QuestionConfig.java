//package com.example.quizonline.model;
//
//import com.example.quizonline.repository.QuestionRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import java.util.Arrays;
//
//@Configuration
//public class QuestionConfig {
//    @Bean
//    CommandLineRunner commandLineRunner (QuestionRepository questionRepository) {
//        return args -> {
//            Question question = new Question();
//            question.setQuestion("What's your favorite color?");
//            question.setSubject("General");
//            question.setQuestionType("Open-ended");
//            question.setChoices(Arrays.asList("1", "2", "3"));
//            question.setCorrectAnswers(Arrays.asList("1"));
//
//            questionRepository.save(question);
//        };
//    }
//}
