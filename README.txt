
PokePower

Project:
As the handout suggested, I decided to implement a list of pokemon rated by their strengths. I decided to allow filtering by type and generation and allow sorting by number or by base stat total.

The project is designed so that any casual or competitive pokemon player can easily find the exact pokemon that's relevant to what they need for their team.

To run the project, go to: https://bairnowl.github.io/pokepower/

Alternatively, you can run "npm install" then "npm start" at the root level.

==================================

Design Principles:
I tried to make the website as easy to use as possible. For the buttons, I added hover effects and changed the background color when the buttons were selected so the user could easily see the state of the buttons.

I also tried to give each element in the website sufficient whitespace so that the text is easy to read.

I decided to allow the user to make multiple selections for each filter (e.g. the user can select both fire and grass for type in the dropdown, which means that the union of these two sets are returned) because I think it will be more useful to both casual and competitive players.

==================================

Data:
I read in data from a JSON file in the outer FilteredList component. I also do the filtering in this component and then pass the filtered data down to the List component.

In the List component, I sort the data and then pass the relevant information over to the PokeItem component, which handles the rendering of each individual item in the list.

All data is passed between components through the props and stored in the component's state, which is updated with the componentWillReceiveProps function in the React life cycle.

==================================

User interactions:
A user selection in any of the two filter by dropdown menus will trigger a function that updates the state of both filters in FilteredList. Similarly, selecting between the two sort options updates the state of boolean value in FilteredList. 

These state changes are propagated down to the List and PokeItem child components through prop updates.

==================================

Challenges:
I decided to use around 730 items, so it was a challenge to handle the large amount of data and images that the project required. I ended up importing all images in a folder using webpack's require.context.

A small thing but I used Bootstrap's dropdown menus so I couldn't get rid of the comma before the user's selection after they select something in the dropdown.




