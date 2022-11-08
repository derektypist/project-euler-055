# Project Euler 055 - Lychrel Numbers

If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.

Not all numbers produce palindromes so quickly, for example:

    349 + 943 = 1292, 1292 + 2921 = 4213, 4213 + 3124 = 7337

That is, 349 took three iterations to arrive at a palindrome.

Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome.  A number that never forms a palindrome through the reverse and add process is called a Lychrel number.  Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise.  In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than 50 iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome.  In fact, 10677 is the first number to be shown to require over 50 iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28 digits).

Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.

How many Lychrel numbers are below `num`?

Information at [Project Euler 055](https://projecteuler.net/problem=55)

## UX

**Getting Started**

Enter a whole number between 100 and 10000 (without leading zeros such as 0100) in the input field and select the Submit button.  You will see the number of Lychrel numbers below that limit, unless you have made an invalid input.  For example, if you selected 1000, you would expect the result to return 13.  Select the Reset button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 100 or greater than 10000
- Entering leading zeros (e.g. 0100)
- Entering a number but it is not an integer

As a user, I expect the function `countLychrelNumbers(1000)` to return a number.

As a user, I expect the function `countLychrelNumbers(1000)` to return 13.

As a user, I expect the function `countLychrelNumbers(3243)` to return 39.

As a user, I expect the function `countLychrelNumbers(5000)` to return 76.

As a user, I expect the function `countLychrelNumbers(7654)` to return 140.

As a user, I expect the function `countLychrelNumbers(10000)` to return 249.

User Stories on function `countLychrelNumbers(num)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 055](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-55-lychrel-numbers)

**Information Architecture**

The function `countLychrelNumbers(num)` returns a number, where `num` is a number between 100 and 10000.

## Features

Allows the user to enter the limit (as a number) in order to count the Lychrel Numbers below that limit.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.2 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-055) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)


