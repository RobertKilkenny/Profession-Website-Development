# Codebase notes and tips
This is just a list of different features and methodologies I used when creating this site to help keep it organized in my own way. Maintaining this principles would be best when iterating off of this branch, so it would be smart to take the time to understand what goes where!

## Getting started with Codebase
- To get all dependencies for the code to run, download [Node](https://nodejs.org/en/), use `npm install` in "/" to get all dependences.
- Use `npm start` to run the React App in the [local host](http://localhost:3000/)
- All color variables will be stored in `App.css` within "/src/components/web-components"
- All webpages (besides error pages and redirection pages) are stored in "/src/components/web-components"
- All utilities like the NavBar and the unique Button classes are in "/src/components/utilities"

## Ground Rules for the Codebase
- All unique page layouts should be stored in the same file as the .tsx file
- Generic .css files for different parts can be found in "/src/components/web-components" for quick implementation.