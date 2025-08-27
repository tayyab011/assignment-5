1/
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:

 *getElementById("idName")  =finds only one element by its ID

 *getElementsByClassName("className") =finds all elements tht have that class. It gives a list

 *querySelector("selector")  = Finds the first element that matches the CSS selector

 *querySelectorAll("selector") = Finds all elements that match the CSS selector


 2/
 How do you create and insert a new element into the DOM?

 ans:

*first make the element with document.createElement()

*add text or attributes to it

*put it inside another element with appendChild() 


3/
What is Event Bubbling and how does it work?

ans:

when you click something inside the click first happens on that thing, then it goes up step by step to its parent , then its parent,s parent and so on, until it reaches the whole page


4/What is Event Delegation in JavaScript? Why is it useful?

ans:

*Event Delegation means  instead of putting an event listener on every small element, you put one listener on the parent.

*That parent will “catch” the event when its children are clicked.

*It,s useful because it saves memory and works even if new child elements are added later



5/What is the difference between preventDefault() and stopPropagation() methods?

ans:

*preventDefault()= Stops the default action of an element.
*stopPropagation()= Stops the event from bubbling up to parent elements.