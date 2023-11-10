# Project Details

This is to help track how this project has developed over the course of creating my portfolio website. This will be a mostly informal document to help remind me of what I have done currently, especially since I will be recording this later on a project page for the website.

## Task 1: Setting Up Repository

To start this project, made a basic site using `create-react-app`. I have attempted creating a website a few times before but never got too far due to struggling to find the time to commit to it and general issues finding videos to help me. I wanted to make this in TypeScript over JavaScript because I have heard it will be a better language to develop for the more complex features along the way.

- To start, I made several pages and linked them within App.jsx. The plan is to develop the different static pages over the course of a few weeks.
- Overall, implementing the routing was pretty simple and did not take too long. Will be looking into implementing some dynamic routing if possible...

## Task 2: Make the NavBar

The first object I wanted to make was the navigation bar that would always be on the top of the site. I wanted this to be the first great asset I develop so I was fine spending a lot of time working on this to both get experience in website development and making quality features. In particular, I wanted it to be dynamic and have a different mode for when the aspect ratio is like a mobile phone.

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
