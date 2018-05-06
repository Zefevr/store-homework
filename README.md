My Surf Store assigment with React:

First I created the react app and added all dependencies, also modified the eslintrc file as we did it in class. I cleaned up a little the code and started to work on it.

Inside the App.js I declared the products, I added the property quantity (set to 0) because I thought it would make it easier for later.

From the instruction it was said to create 2 components (CartItem and CheckOutButton) so I did, but then I remember from classes that it was a better practice to create a container and from there the components, so I created my container (List) where I imported my CartItem component.

I did the same for the PlusOneButton.. I created another component with its props and import it into my CartItem and here I added its functionality, so every time it is clicked it will sum one to the quantity of the product selected.

Right after I implement the incrementQuantity method in App, so the product array will get updated each time the button is clicked.

Installed and added the react clock and gave the format i liked the most.

Made the last component for CheckOutButton and import it directly in the App. Implemented its functionality so everytime it is clicked it will sum the chosen products and calculate the totalValue.

To finsih I try adding the icon of a surfer in the title-tab but it did not work out as expected. I need to figure this out.

In conclusion I learned a lot and it was super nice to recap many things from last week :))
