import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{

  constructor(private router: Router,private httpClient: HttpClient) { }
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  selectedOptionIndex: number | null = null;
  optionSelected:boolean=false;
  disableOption:boolean=false

    ngOnInit(): void {
      this.questions = [
        {
          "questionText": "What does JVM stand for?",
          "options": [
            {
              "text": "Java Virtual Machine",
              "correct": true
            },
            {
              "text": "Java Visual Machine"
            },
            {
              "text": "Java Variable Machine"
            },
            {
              "text": "Java Virtual Memory"
            }
          ],
          
        },
        {
          "questionText": "Which keyword is used for creating an instance of a class in Java?",
          "options": [
            {
              "text": "create"
            },
            {
              "text": "instantiate"
            },
            {
              "text": "instance"
            },
            {
              "text": "new",
              "correct": true
            }
          ],
         
        },
        {
          "questionText": "In Java, which data type is used for representing single characters?",
          "options": [
            {
              "text": "string"
            },
            {
              "text": "char",
              "correct": true
            },
            {
              "text": "character"
            },
            {
              "text": "chr"
            }
          ],
          
        },
        {
          "questionText": "What is the access modifier for a method that can be accessed from anywhere in the same package?",
          "options": [
            {
              "text": "private"
            },
            {
              "text": "public",
              "correct": true
            },
            {
              "text": "protected"
            },
            {
              "text": "default"
            }
          ],
          
        },
        {
          "questionText": "What does OOP stand for in the context of Java programming?",
          "options": [
            {
              "text": "Object-Oriented Programming",
              "correct": true
            },
            {
              "text": "Operator Overloading Principles"
            },
            {
              "text": "Object Optimization Protocol"
            },
            {
              "text": "Object Ownership Process"
            }
          ],
          
        }
       
      ];
    
    }
    
    selectOption(optionIndex: number): void {
      this.selectedOptionIndex = optionIndex;
      this.disableOption=false
      this.optionSelected=true;
    
      // Add a delay of 1 second before proceeding to the next question
      setTimeout(() => {
        this.advanceToNextQuestion();
      }, 500);
    
      // Check if the selected option is correct and update the score
      if (this.questions[this.currentQuestionIndex].options[optionIndex].correct) {
        this.score += 10;
      }
      
      
    }
    
    
    
    
    
    advanceToNextQuestion(): void {
      this.disableOption=false
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedOptionIndex = null; // Reset the selected option
      } else {
        this.router.navigate(['/result'], { queryParams: { score: this.score } });
      }
    }
    

}
