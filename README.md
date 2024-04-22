<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/aliciademorauk/OnlineQuizApp/blob/main/Client/online-quiz-app/img/question-mark.png">
    <img src="https://github.com/aliciademorauk/OnlineQuizApp/raw/main/Client/online-quiz-app/img/question-mark.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">QuizWiz App!</h3>

  <p align="center">
    <br />
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
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
### Functionality
* Full stack web application that allows users to submit multiple choice questions with single or multiple correct answers. Questions are mapped to a specific subject. The user can then generate a quiz on any subject for which a bank of questions has been added by specifying the subject and the number of questions.

### Architecture
* The project is currently hosted in a monorepo, where the Server and Client directories separate backend and frontend logic, respectively. The database layer uses **PostGreSQL**, the backend layer is a **SpringBoot RestFUL API** service which is consumed by the frontend, in turn a **React** application styled with **Bootstrap**.

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

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Implement user registration and login with user authentication through JWTs (WIP)
- [ ] Use OpenAI's Chat Completions API for user to leverage text generation models to create questions more easily
- [ ] Create React error handling layer

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/aliciademorauk/OnlineQuizApp](https://github.com/aliciademorauk/OnlineQuizApp)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[JavaScript]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[Bootstrap]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[SpringBoot]: https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot
[Java]: https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white
[PostGreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white

