# FLW2 U2L8 Code Solo: Import/Export

## Coin Flipper

In this app:
- The user clicks a button and the coin lands on either heads or tails.
- It keeps track of how many times the coin has landed on each.

### Instructions

USE COMMENTS AS CLUES!
- You'll find lots of comments in the `Flip` component, where you'll want to write specific parts of your code.
- Feel free to delete the comments when you're finished, keep them up, or change them. Remember, leaving comments is another great practice!

---

1. In the return statement of the `Flip` component, there is an image of a coin that changes from heads to tails depending on the state of the coinSide variable.
   - The syntax may be unfamiliar, but it's using what's called a "ternary" expression.
   - Essentially, it's an if/else statement but written a little differently.
   - These are easier to use in React when it comes to conditionally returning elements.

---

2. You won't be passing any functions as props in this assignment! Since we're building out everything our `Flip` component, we'll have everything we need.

---

Bonus Challenge!
- Add a button that resets the heads & tails count back to 0 and changes the coin image back to heads.
- You'll need to build a function and add it as an event handler to the button.
- Look back to the `Counter` app for syntax help!