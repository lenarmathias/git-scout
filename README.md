# GitScout

![GitScout Logo](public/images/GSLogoReadme.png)

A React-based app for effortless searching of GitHub users.

---

## Overview

GitScout is an app inspired by GitHub that uses the GitHub REST API to search for GitHub users. Due to the lack of an API token, GitScout is customized to return a limited number of search results. This is my personal project that I created for my own exercise and learning purposes, allowing me to explore and implement various web development techniques and work with the GitHub REST API.

### Features

- Simple and intuitive user interface
- Real-time search results based on GitHub's database
- Quick access to user profile details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

## Demo

You can find the live version of my To-Do List project on GitHub Pages [here](https://lenarmathias.github.io/git-scout/).

---

## Usage Instruction

![Initial Page View](public/images/initialView.jpeg)

The image above shows the initial view that the user will see upon opening the app.

The **logo** at the top is a link that will always bring the user back to the main page of the app.

On the right side is the **Project Info** section, which contains a link to a page with more details about the project and me.

The user can enter a username in the **Search GitHub User** section, and the results will be displayed in the bottom section.

After finding a matching username, the user can select a GitHub user by **clicking on their username or avatar** to navigate to the **details page**. Additionally, a white button located at the bottom right corner enables quick scrolling to the top of the page.

![Details Page View](public/images/detailsView.jpeg)

The image above displays the **details page** that users will see after clicking on a user from the list.

The details page contains public information provided by the user. On the right side, there are links to the **user's GitHub page**, **X (Twitter) profile** page, and **user blog**. If any of these links are not included by the user, they will be greyed out and disabled.

**Each of these links will open in a new window.**

At the bottom, there will be a list of the **user's public repositories**. Due to the lack of an API token, if the user has more than 30 public repositories, only the first 30 repositories will be shown. Each tile represents a repository and contains general information along with links to the **GitHub repository** page and, if available, a **demo page**. These links also open in a new window.

That's it for the usage instructions. Enjoy using **GitScout**!

---

## Tools & Technologies

- **Visual Studio Code**: A popular text editor that was used to write and edit the application's code.
- **Google Fonts**: A free online library of fonts that was used to enhance the application's typography and overall design.
- **Git/GitHub**: A version control system and online repository that was used to track changes to the application's code.
- **HTML**: The application's user interface is built using HTML, which allows for the creation of structured, well-formatted content.
- **CSS**: The application's styling is done using CSS, which allows for the creation of visually appealing and responsive designs.
- **JavaScript**: The application's logic is written in JavaScript, which enables dynamic and interactive functionality, such as real-time updates and user input validation.
- **React.js**: [![library: React.js](https://img.shields.io/badge/library-⚛️%20React.js-61DAFB.svg)](https://reactjs.org/)
 The application uses React.js, a popular JavaScript library for building interactive user interfaces with efficiency and code reusability.
- **Styled Components**: [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) Styled Components is a popular library for styling React components with a CSS-in-JS approach. It allows you to write CSS code directly within your JavaScript components, making it easier to manage and reuse styles in a component-based architecture.
- **styled-normalize**: [![style: styled-normalize](https://img.shields.io/badge/style-%F0%9F%93%8C%20styled--normalize-yellow.svg)](https://github.com/sergeysova/styled-normalize) Styled Normalize is a modern, normalized CSS reset built with styled-components. It ensures consistent rendering across different browsers by resetting default styles to a consistent baseline.
- **react-router-dom**: [![library: react-router-dom](https://img.shields.io/badge/library-%F0%9F%8C%8E%20react--router--dom-green.svg)](https://github.com/ReactTraining/react-router) React Router Dom provides declarative routing for React apps. It enables easy creation of multi-page apps with client-side navigation, dynamically updating content based on the URL.
- **react-icons**: [![library: react-icons](https://img.shields.io/badge/library-%E2%9D%A4%EF%B8%8F%20react--icons-%239f4686)](https://react-icons.github.io/react-icons/) React Icons is a popular library that provides a collection of customizable icons for React applications. It offers a wide range of icons from various icon packs, allowing you to easily incorporate visually appealing icons into your UI.
- **Axios**: [![library: Axios](https://img.shields.io/badge/library-%F0%9F%94%97%20axios-purple.svg)](https://github.com/axios/axios) Axios is a popular JavaScript library used for making HTTP requests from the browser. It was used in this application to fetch data from external sources.
- **gh-pages**: [![library: gh-pages](https://img.shields.io/badge/library-%F0%9F%93%84%20gh--pages-orange.svg)](https://github.com/tschaub/gh-pages) Gh-pages is a tool to publish files to a GitHub Pages branch on GitHub. It's often used to deploy single-page applications (SPAs) and other static content directly from a GitHub repository.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Contact

If you have any questions or feedback regarding this project, please feel free to contact me:

- [email](lenarmathias@gmail.com)
- [GitHub](https://github.com/lenarmathias)
