# Robert Kilkenny's Professional Website

This is my coding project to develop a personal website for myself. The idea is to have a dynamic website to show my considerations for users while centralizing several project information in one place. This project will be coded by myself using many different resources found on the internet to help me get familiar with React, Vite, CSS, Firebase, and other features required to develop a useful website. Any resources from which a significant amount of code is used will be cited below in "Resources Used and Citations."

Website created using create-react-app to display projects I've made pursuing a career in Software Engineering. I have made some development notes that could be useful for iterating on this code [here](./src/README.md)

## Current Features

- Basic metadata set up to help describe what the website is and make it look more professional.
- Navigation Bar that changes the link for different pages
- A main App Object that changes the page based on the link
- Able to switch between Page Objects using React Router to use the link.
- Developed buttons with default and dynamic coloring with defaults for sizing. Also offers a specialized button (outline) and could have more later.

## Planned Features

- Change site icon to be customized for me
- Develop a Home/ Landing page that helps guide users
- Develop a Project List page
  - Create a Project Object to display a project's details and link to a page
  - Display Project Objects on the page to display an overview of all projects
  - Parse a Projects.json file that will contain project names, descriptions, and images (optional)
  - Search function using the names of the projects
- Develop a template Project page
  - Allow for quick generation of project pages for smaller projects
  - Have a list passed in so there can be images without needing a specific file creation
  - Use the details from the parsed JSON file above for information
- Develop the About Me page
  - Write and display a simple message about my software development journey.
  - Link to the contact page.
- Develop the Contact Me
  - Have contact information for professional contact
  - Link to external media (LinkedIn, Github, etc.)
- Launch site with Firebase

## Non-Essential Backlog

- Create functionality for sending me a message from the site
  - Require a valid email (regex) and message
  - Optional Subject and name line
- Use Website to create a custom email and have routing

# Resources Used and Citations

- This project was bootstrapped with React and using [Vite's instructions](https://vitejs.dev/guide/).
- This project uses [Lucide React Icons](https://lucide.dev/guide/packages/lucide-react) for many of the basic icons.
- For many of the basic website objects, I used [Shadcn UI elements](https://ui.shadcn.com/).
- When starting this project, I used Brian Design's YouTube video [React Website Tutorial - Beginner React JS Project Fully Responsive](https://www.youtube.com/watch?v=I2UBjN5ER4s&t=2456s) to help learn the basics for this project.
- Some projects shown were not developed by myself. See each project for the full credits and details!
