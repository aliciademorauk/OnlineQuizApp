:warning: <em> All of my projects are a WIP! They are experiments and are not a final version (and probably will never be!). </em>

<br />
<div align="center">
  
  <a href="https://github.com/aliciademorauk/OnlineQuizApp/blob/main/Client/online-quiz-app/img/question-mark.png">
    <img src="https://github.com/aliciademorauk/OnlineQuizApp/raw/main/Client/online-quiz-app/img/question-mark.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">QuizWizz App!</h3>

  <p align="center">
     ·
    <!-- LINK TO SECTION ON THE PAGE WITH SCREENSHOTS OF HOW IT WORKS -->
    <a href="https://github.com/othneildrew/Best-README-Template">Show me how it works!</a>
    ·
  </p>
  
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
     <ul>
        <li><a href="#functionality">Functionality</a></li>
        <li><a href="#architecture">Architecture</a></li>
        <li><a href="#built-with">Built With</a></li>
     </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#how-it-works">How It Works</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
### Functionality
* Full stack web application that allows users to submit multiple choice questions with single or multiple correct answers. Questions are mapped to a specific subject.
* The user can then generate a quiz on any subject for which a bank of questions has been added by specifying the subject and the number of questions.

### Architecture
* The project is currently hosted in a monorepo, where the Server and Client directories separate backend and frontend logic, respectively.
* The database layer uses **PostGreSQL**, the backend layer is a **SpringBoot RestFUL API** service which is consumed by the frontend, in turn a **React** application styled with **Bootstrap**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

| Database      | Backend       | Frontend    |
| ------------- |:-------------:|:---------:  |
| ![PostGreSQL] |    ![Java]    |![JavaScript]|
|               | ![SpringBoot] |  ![React]   |
|               |               |![Bootstrap] |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps:

### Prerequisites

  * Make sure you have the following installed:
    * [MySQL](https://dev.mysql.com/downloads/mysql/) server for the database layer.
    * Java and [Maven](https://maven.apache.org/install.html) build tool for the backend.
    * [Node.js](https://nodejs.org/en) and npm for the frontend.


### Installation

  * Create a MySQL database in your chosen IDE (e.g. MySQLWorkbench) or via the command line. In `application.properties` fill in the database properties:
    * `spring.datasource.url`;
    * `spring.datasource.username`;
    * `spring.datasource.password`;
    * `spring.jpa.hibernate.ddl-auto` -> set this property to `update` to avoid data being deleted from the database when you re-run the app.

  * Clone this repository: `git clone https://github.com/aliciademorauk/QuizWizz`.
    
  * Navigate to the backend: `cd QuizWizz/Server/OnlineQuizApp`.
    
  * Run `mvn install` to install the project's specific dependencies.

  * Navigate to the frontend: `cd QuizWizz/Client/online-quiz-app`.

  * Run `npm install` to install the project's specific dependencies.
    

### Execution

  * Navigate to the backend: `cd QuizWizz/Server/OnlineQuizApp`.

  * Run the SpringBoot project on your IDE or run `mvn spring-boot:run`. This will also automatically create the database schema if it doesn't yet exist.
    
  * Run the React app to consume the endpoints using `npm run dev`.
    
  * Follow the link to the default port where the development server has been started.

  * Start adding questions! 😄

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Implement user registration and login with user authentication through JWTs (WIP)
- [ ] Use OpenAI's Chat Completions API for user to leverage text generation model to create questions more easily
- [ ] Create React error handling layer

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best README.md Template](https://github.com/othneildrew/Best-README-Template)

## How It Works

1. The user starts up the application.
   <br />
   <img width="500" alt="Screenshot 2024-04-22 at 21 52 31" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/5fe5bba7-0697-4650-8808-0a86dc7e4894">
   <br />
   
2. The user can see the full bank of questions.
   <br />
   <img width="500" alt="Screenshot 2024-04-22 at 21 59 33" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/2baa2e9a-a5f0-48c7-b5fd-478911663fcb">
   <br />
   
3. The user can add a question, select the subject the question belongs to and whether it has a single or multiple correct answer(s).
   <br />
   <img width="500" alt="Screenshot 2024-04-22 at 21 59 43" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/47b819d5-99c1-4c32-a6e2-546d167552ad">
   <img width="500" alt="Screenshot 2024-04-22 at 22 00 04" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/0a651f57-ba1b-47d1-88c2-bf91b1659f89">
   <br />
   
4. The user can delete questions from the existing pool.
   <br />
   <img width="500" alt="Screenshot 2024-04-22 at 22 00 35" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/aa3e573e-8d81-4f05-8177-ce925f84124f">
   <br />

5. The user can set up the quiz.
   <br />
   <img width="500" alt="Screenshot 2024-04-22 at 22 00 43" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/213d3a27-a0d3-4e76-af24-5ca1aa40730b">
   <img width="500" alt="Screenshot 2024-04-22 at 22 00 50" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/c26d6bee-3e74-47ec-9cf2-10f3b91c53cb">
   <img width="500" alt="Screenshot 2024-04-22 at 22 00 56" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/24b4a66f-46c8-4410-937a-1d4ec18c1a9d">
   <br />
   
6. The user plays and gets a final score.
   <br />
   <img width="500" alt="Screenshot 2024-04-22 at 22 01 04" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/812ac814-635b-4fba-817b-6533ed54785a">
   <img width="500" alt="Screenshot 2024-04-22 at 22 03 25" src="https://github.com/aliciademorauk/BlogPost-WebApp/assets/81619741/b0b9fe6b-f21c-416b-8dc5-f9ed07c2928c">
   <br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[SpringBoot]: https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot
[Java]: https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white
[PostGreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white

