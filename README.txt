
PokePower

Project:
As the handout suggested, I decided to implement a list of pokemon rated by their strengths. I decided to allow filtering by type and generation and allow sorting by number or by base stat total.

To run the project, go to: https://bairnowl.github.io/pokepower/

Alternatively, you can run "npm start" at the root level.

==================================

Design Principles:

==================================

Data:
I read in data from a JSON file in the outer FilteredList component. I also do the filtering in this component and then pass the filtered data down to the List component.

In the List component, I sort the data and then pass the relevant information over to the PokeItem component, which handles the rendering of each individual item in the list.

All data is passed between components through the props and stored in the component's state, which is updated with the componentWillReceiveProps function in the React life cycle.

==================================

User interactions:

==================================

Challenges:
I decided to use around 730 items, so it was a challenge to handle the large amount of data and images that the project required. 



