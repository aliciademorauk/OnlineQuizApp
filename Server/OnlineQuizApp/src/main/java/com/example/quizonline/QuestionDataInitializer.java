package com.example.quizonline;

import com.example.quizonline.model.Question;
import com.example.quizonline.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class QuestionDataInitializer implements ApplicationRunner {
    private final QuestionRepository questionRepository;

    List<Question> sampleQuestions = new ArrayList<>(List.of(
            new Question(
                    null,
                    "Which wine is typically paired with Camembert cheese?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Merlot", "Chardonnay", "Champagne", "Bordeaux"),
                    List.of("Chardonnay")
            ),
            new Question(
                    null,
                    "Which cheese is known as the \"King of Cheeses\"?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Brie", "Camembert", "Parmesan", "Gorgonzola"),
                    List.of("Parmesan")
            ),
            new Question(
                    null,
                    "Which grape variety is used to make Bordeaux wines?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Pinot Grigio", "Sauvignon Blanc", "Merlot", "Chardonnay"),
                    List.of("Merlot")
            ),
            new Question(
                    null,
                    "Which region in France is known for its production of Roquefort cheese?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Occitanie", "Burgundy", "Alsace", "Loire Valley"),
                    List.of("Occitanie")
            ),
            new Question(
                    null,
                    "Which cheese is traditionally used in the Swiss dish fondue?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Gruyère", "Brie", "Feta", "Emmental"),
                    List.of("Gruyère")
            ),
            new Question(
                    null,
                    "Which cheese is made from sheep's milk?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Brie", "Camembert", "Roquefort", "Cheddar"),
                    List.of("Roquefort")
            ),
            new Question(
                    null,
                    "Which grape variety is known for producing red wines in Burgundy?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Pinot Noir", "Cabernet Sauvignon", "Merlot", "Syrah"),
                    List.of("Pinot Noir")
            ),
            new Question(
                    null,
                    "Which wine is known for its sweet taste and is often paired with foie gras?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Sauternes", "Chianti", "Rioja", "Shiraz"),
                    List.of("Sauternes")
            ),
            new Question(
                    null,
                    "Which cheese is typically used in French onion soup?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Gruyère", "Brie", "Feta", "Emmental"),
                    List.of("Gruyère")
            ),
            new Question(
                    null,
                    "Which wine is produced in the Champagne region of France?",
                    "French Wine and Cheese",
                    "single",
                    List.of("Merlot", "Chardonnay", "Champagne", "Bordeaux"),
                    List.of("Chardonnay")
            )
    ));
    @Autowired
    public QuestionDataInitializer(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }
    public void run(ApplicationArguments args) {
        questionRepository.saveAll(sampleQuestions);
    }
}
