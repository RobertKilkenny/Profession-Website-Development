# Codebase notes and tips

This is just a list of different features and methodologies I used when creating this site to help keep it organized in my own way. Maintaining this principles would be best when iterating off of this branch, so it would be smart to take the time to understand what goes where! Go to the [main read me file](../README.md) for the project details and different acknowledgements.

## Getting started with Codebase

- To get all dependencies for the code to run, download [Node](https://nodejs.org/en/), use `npm install` in "/" to get all dependences.
- Use `npm run dev` to run the React App in the [local host](http://localhost:3000/)
- All color variables will be stored in `index.css` within "/src/components/web-components"
- All webpages (besides error pages and redirection pages) are stored in "/src/components"
- All utilities like the NavBar and the unique Button classes are in "/src/components/utils"
- Any feature that you want to implement using a Shadcn UI Element should be imported using `npx shadcn-ui@latest add [element name]`
- For the Project List feature
  - Make sure that the folder name is unique or it invalids both addresses!!
  - Folder references should go "/data/[folder_name]/" whatever because it is in the public folder
- Use `rfc` to create a very basic return function for a new class!

## Ground Rules for the Codebase

- All unique page layouts should be stored in the same file as the .tsx file
- Most webpages should use the relevant generic .css file for formatting so that each of their special .css files (if there are any), are cut down to just the parts that are unique for that object.
- Keeping a labeling system for attributes used in web object that is not part of the should be done for easy debugging!
- At the minimum, having a comment block at the top of all other .css files used will help a lot
- Remember to only **import a .css once** for performance. Generic .css files can be imported in `App.tsx` to avoid duplicate references.

### Formatting and Naming

- All React Object files should be PascalCase (ex. "ReactObject.tsx")
- Other Typescript files should be kebab-case (ex. "web-logic.tsx")
- CSS files should share the **exact name** for the file they are made for (ex. "ReactObject.css")
- Global Variables, when unavoidable, should be UPPER_SNAKE_CASE (ex. "MEANING_OF_LIFE = 42")
- Local Typescript Variables should always be camelCase (ex. "sodaCalled:string = "pop")
- Local CSS Variables should always be kebab-case (ex. "--best-color = "#ff80ed" [according to [them](https://www.color-hex.com/popular-colors.php)])
- Any confusion should be resolved with the [Google Typescript Style Guide](https://google.github.io/styleguide/tsguide.html#local-variable-declarations)
  - All these given rules should not confilt with this guide besides the file naming rules, but that makes developing better (in my opinion)

-Imports should be:
  1. Core libraries (ex. React, React Router Dom)
  2. Complementary Libraries (ex. ShadCN [think "not essential but nice to have"])
  3. Personal React Object imports (ex. App, Home, NavBar)
  4. CSS Files [Should only be imported once!!!] (ex. App.css, Home.css, NavBar.css)