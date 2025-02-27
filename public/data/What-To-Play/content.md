# A website to help answer the follow up question: "Well, what games can we play?"

## Description
This idea came about because I have several games that I like to play with friends but depending on the friend, I need to go through my whole game catelog just so I can figure out what game we will play. The main idea is that there is an account systems that allows users to input the games they currently have so that when they make a link-up, they have a dedicated page that gives them a list of all the games they **could** play together.

## Deliverables
**1. User Authentication:**
 - Implement user sign-up, login, and logout functionality.
 - Allow users to update account information.
 - Implement session management to maintain user login state.

**2. Game Catalog System:**
 - Develop a form for users to add, edit, and remove games from their catalog.
 - Implement validation to ensure game information is correct.
 - Store game data in PostgreSQL, ensuring each user’s catalog is linked to their account.

**3. Friendship System:**
 - Implement a system where users can search for and add friends by username or email.
 - Allow users to view their friends list and remove friends.

**4. Game Sharing:**
 - Develop a feature where users can see which games they share with their friends.
 - Create a list of potential games to play based on shared ownership.
 - Provide an option to filter games based on categories or genres.

**5. UI/UX Design:**
 - Create a responsive and intuitive user interface.
 - Design clear and simple navigation for adding games, managing friends, and viewing playable games.
 - Implement a dashboard or landing page showing the user’s game catalog and friends list.

**6. Database Setup:**
 - Set up PostgreSQL with the appropriate tables for users, games, and friendships.
 - Ensure efficient queries for retrieving shared games between users.

**7. API Integration (Drizzle ORM):**
 - Use Drizzle ORM to interact with the PostgreSQL database.
 - Create API endpoints to fetch and update game catalogs, friends, and shared games.

**8. Link-Up System:**
 - Implement a system for users to create and share game link-ups.
 - Provide a dedicated page that displays a list of games both users can play together.

**9. Deployment:**
 - Set up hosting for the website with Cloudflare.
 - Set up hosting for the database with Neon.
 - Deploy the project and ensure it runs smoothly in production.