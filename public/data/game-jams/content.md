
# [Hopshot](https://mckoleman.itch.io/hopshot)

## Theme: Use a Scoreboard

**Game Description:** The idea for this game was to create an infinite runner that awards points for each of the rooms completed by the user in one run. To create end conditions, we made the screen naturally close in on the player. If the left side of the screen collides with the player (or they hit a hazard element), the player will die and the game ends. There are only a few different types of puzzles in rotation, that will appear at different rates according to how we rate them as difficulty. To solve the puzzles, the user will have a tool that propels objects forward, and, depending on the level, there will be buttons and weighted cubes to solve the levels.

**Deliverables Completed:**
- Created several puzzle levels with difficulty ratings
- Develop a tutorial puzzle level that starts off the user so they can interact with the basic elements of the game to warm up
- Procedural generation of the developed puzzle levels
- Developed a weapon for the user that launches non-static objects in front of it.
- Created a wall to block off levels that can be opened by buttons
- Made a jump pad that will launch an object in the air when they collide. Any non-static object can be bounced by that.
- Levels can contain hazards that are randomly generated. Could be:
	- *Spikes:* Direct collisions will kill the user; They protrude from the floor.
	- *Lava:* Direct collisions will kill the user; They are level with the floor.
	- *Turrets:* Fires deadly projectiles straight from the barrel of the turret and only if the turret detects the player after a delay.
- Made two types of buttons to clear a level, press and hold buttons
	- *Press buttons:* Only require a collider to interact with the button
	- *Hold Buttons:* Requires a collider on it for the user to be able to escape the level


# [Bars, Barns, and Bartering](https://studiokoleman.itch.io/bbb)

## Theme: Pick One

**Game Description:** The goal of this game is to run a shop for 7 days. After the first day, the user needs to pick an order and then "pay" with the resources required in the order at the end of the next day. Over the course of a day, the user will be able to trade with several merchants that offer different trades for different resources. Each merchant can be haggled for one trade, which is simulated via a hand of blackjack; winning blackjack makes the trade more favorable, losing means it is less so, and a tie changes nothing. There is a karma variable, where "unfavorable practices" will cause the karma to lower. The idea of karma is that lower karma means the trades offered will be less favorable to start overall.

**Deliverables Completed:**
- The game has 7 days that the player can go through
- At the end of each day the user can either pay the challenge they chose (if they have the resources) or accept the fail condition
- The challenges progressively get harder as the days continue
- The traders offer unique trades that if taken exchange the shown values on the cards
- When the user barters, the effects of the deal apply to the correct card with the correct outcome
- The different resources have different values and trade for different ratios but are roughly equal
- The karma system is called correctly when the value should be changed
	- There is a bar that fills up as karma becomes worse for the player (I will call  this decreasing or lowering)
	- Failing a trade lowers the user's karma
	- Refusing to trade with a vendor decreases karma
	- Accepting trades raises karma
- Different events cue the soundtrack to change. These events are the menu, main game loop, and blackjack
- Resources are shown at the bottom of the bar and the challenge shows too. The value for the challenge are grayed out if the is not enough of the resource and green if there is
- Trading cards show if the user has enough of the resource for the giving part of the trade (the top section)