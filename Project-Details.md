
  

# Project Details

  

  

This is to help track how this project has developed throughout creating my portfolio website. This will be a mostly informal document to help remind me of what I have done currently, especially since I will be recording this later on a project page for the website.

  

  

## Task 1: Setting Up Repository

  

  

To start this project, made a basic site using `create-react-app`. I have attempted creating a website a few times before but never got too far due to struggling to find the time to commit to it and general issues finding videos to help me. I wanted to make this in TypeScript over JavaScript because I have heard it will be a better language to develop for the more complex features along the way.

  

  

- To start, I made several pages and linked them within App.jsx. The plan is to develop the different static pages over a few weeks.

  

- Overall, implementing the routing was pretty simple and did not take too long. Will be looking into implementing some dynamic routing if possible...

  

  

## Task 2: Make the NavBar

  

  

The first object I wanted to make was the navigation bar that would always be on the top of the site. I wanted this to be the first great asset I developed so I was fine spending a lot of time working on this to both get experience in website development and making quality features. In particular, I wanted it to be dynamic and have a different mode for when the aspect ratio is like a mobile phone.

  

  

- Developing a navigation bar took a lot longer to get it operational than intended. Most of the issues stemmed from not having the CSS files working correctly and difficulties with finding the right attributes to modify

  

- I initially did not have every level as a flex object, which made them unresponsive when I needed them to dynamically react.

  

- Going through different CSS file videos on YouTube was more difficult than expected since the videos I was finding did not explain what the features meant so I had to switch between the videos and documentation.

  

- I struggled to get Tailwind CSS to work initially so I was originally coding in pure CSS. Getting the extensions working and reading the Tailwind CSS helped a lot.

  

  

## Task 3: Creating an Error 404 page

  

  

- I wanted to develop a simple static page to test the waters for the larger pages I need to implement (the About page, Contact page, and Projects List pages especially).

  

- For now, I will just be using a stock image, an error message, and a button to link back to the home page. I might have a second button later to go back to the prior page but that would need state tracking probably...

  

  

## Task 4: Porting to Vite and ShadCN

  

  

Working on the website for a while now when I found out that using the `create-react-app` function was a mistake for me as Vite offers a superior version. On top of that, I was spending a lot of time working on making a dynamic button to use for my code, but I was told about ShadCN. Considering that I want to implement other features on this site and this is a smaller feature, I decided to use their components as references and develop them later if needed.

  

  

- To start this, I just made a new website using Vite and then ported over the objects I made for this.

  

- I referenced the [vite setup](https://ui.shadcn.com/docs/installation/vite) to get ShadCN setup and change how I was using Tailwind CSS.

  

- I had to do several rounds of debugging as it seemed that the functionality was not porting. It ended up being an issue with some of the files from `create-react-app` leaking into the new version.

  

  

## Task 5: Making the Project List Object

  

  

Now I wanted to develop a simple webpage that displays all of the projects as cells within a JSON that contains the data for each project I have done or am currently working on. Also, I will need the Router in App.tsx to iterate through that JSON file to make sure that it catches all potential Routes as I add more projects to the JSON file.

  

  

- I started by creating the JSON and making the project list file iterate through each element in the JSON to create a custom Card for it (from ShadCN). Since it uses a Promise to do this (as I can't assume the database will be reached quickly enough), I added a "loading..." text that will take its place in the event it doesn't work as intended.

  

- Because I used a promise, I had to tinker around with different ways of implementing this because React would not take the component as long as it involved a promise directly.

  

- I wanted this to be a slug page system for the projects, so I made up a file structure for each of the project pages in the `project.json`and made a `content.md` file required for the page to appear so that I would notice if the page would have no content on the page.

  

- For the `content.md` to work as intended, I had to make several adjustments to how the default elements (p, h1, ul, li, etc) were styled because React Markdown- this is what I used to parse `content.md`- uses them.

  

- I also added a loading page feature for this page too, since this will be at the front of the page but may not load instantly for the user.

  

- I have features for each project to include the file folder for content, the location of images for the content (if applicable), the valid extension, and the tags for the project (like `C++` or `Javascript`) for future use.

  

- I then wrote up the basic page in markdown for each of the projects that I want to currently display on the site.

  

  

# Task 6: Polishing Before The First Launch

  

I wanted to have at least a framework for how the site would evolve before pushing it out for the first time. This meant that I wanted to test all of the features, have some family and friends look over the site to see their reactions, and do general bug testing.

  

  

- I had to iron out a lot with the ProjectList and ProjectPage system. There was a lot that was not neat code that I had to refactor so it would work better.

- For example, I used SonarCloud to parse through the repository and test for bad coding practices and general issues with the code and made periodic sweeps of SonarCloud to make sure I was on top of that.

  

- I had to fix the way the buttons worked, but even now I don't like how they work. I think I will be adding the ability to link them somewhere soon so I don't have to wrap them with the React Link object.

  

- I made several small changes to how the site looks and added new stylings for the site. I made it so the mode toggle does not show the current theme and added more CSS styling for different elements like `<h3/>`.

  

- To test the water with how the theme system works, I made a new theme for an upcoming holiday (it's called 'Xmas'). It was a fun little diversion.

  

- I ran the project pages I had created through a grammar editor and a markdown editor just in case.