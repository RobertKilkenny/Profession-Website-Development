
# Background

  

I was having a discussion with a friend of mine that wanted to have a wheel to randomly choose an opinion for his Twitch stream and it got me thinking about how easy it would be to make something for him. As such, I decided to make a web app over a lull in my schedule to warm up my web development skills to get ready for my senior project coming up. I thought that since I would be doing more web development soon, it would be a nice small project that I could focus on

  

# Project Specifics

  

I obviously have made a website before and the scope of the project is rather small by design. I just want a website that can have the elements preloaded so that the user does not need to enter them in. This is mostly because the app is intended for use on Twitch.tv, where the streamer would just load the asset as an element for the stream. Having it cooked into the URL makes it so they could just press a button and it would be good to go.

  

## Features I Completed For This Project:

  

- Create a single page website that can hold the wheel element

- Make a wheel element that can...

	- Generate a dynamic amount of slices
	
		- Allows between number of choices between 4 and 12 (inclusive)
		
		- Lets the user specify colors (if they want to) and is by a per element basis (you can only specify 1 color if you want to) 

	- Have the wheel spin automatically

	- Read user input from the URL
	
- Allow for custom routing through my professional site for a shorter link
	- Check it out at: https://kilkenny.dev/#/WheelSpin/
	- Default Option so you can see it spin: https://kilkenny.dev/#/WheelSpin/?elements=eenie,meenie,miney,moe


# Final Notes

In the end, the application works but it isn't perfect so I might go back and fix it up later. It seems to be a bit weird with OBS and how it hosts the site, so even though the page itself can handle a lot of weird aspect ratios, it is limited. Also, due to how the wheel options are made and the fact that I needed to hardcode a value for each number of elements chosen, I needed to limit the supported number of choices between 4 and 12 inclusive. This definitely would be the first feature I would want to fix as it is just weird to not allow 2 or 3 choices, but for the time being I will keep it how it is. I still have a few active projects I want to complete (like the Course Tracker), so I have made peace with the fact that the app is not perfect (although according to my client, it works just like he needs it to).