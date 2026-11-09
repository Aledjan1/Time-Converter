## Time Converter 

A simple and interactive time conversion application built with HTML, CSS, and vanilla JavaScript.

This project allows users to convert time between seconds, minutes, hours and days.

## Features

- Convert between four time units: seconds, minutes,    hours and days.
- Select the original and target times units.
- Automatically calculate the converted value when clicking the Convert button.
- Validate user input before performing calculations.
- Display error message for empty fields and negative numbers.
- Highlight invalid input fields with a red border. 
- Automatically remove validation errors when the input is corrected.
- Round conversion results to five decimal places and remove unnessary trailing zeros.

## Technologies Used

- HTML5 — Application structure and input elements.
- CSS3 — Layout, styling, and validation feedback.
- JavaScript (ES6) — DOM manipulation, event handling, input validation, and time calculations.

## How It Works

1. Enter a time value.
2. Select the original time unit (From).
3. Select the target time unit (To).
4. Click the Convert button.
5. View the converted result.

The application first converts the entered value into seconds and then converts those seconds into the selected target unit.

For example:
2 hours → 7,200 seconds → 120 minutes

## Challenges & Solutions

1. Building the Conversion Logic

One of the main challenges was understanding how to convert between different time units without writing a separate calculation for every possible combination.
I solved this by dividing the conversion process into two steps:
- Convert the original time value into seconds.
- Convert the seconds into the selected target unit.
I used if / else if statements to handle the different time units.

2. Understanding Variable Scope

While developing the application, I learned why variables should be declared in the correct scope.
For example, the seconds variable needs to be reset each time the user clicks the Convert button.
I declared it inside the event listener to prevent previous calculations from affecting new results.

3. Implementing Input Validation

Another challenge was validating user input.
Initially, I needed to understand why Number("") returns 0 and why checking a converted number against an empty string does not work.
I solved this by checking the original input value before performing calculations.
I also implemented separate error messages for empty fields and negative numbers, using a Boolean variable (isValid) to prevent invalid calculations.

4. Clearing Validation Errors

I wanted error messages and red input borders to disappear automatically when users corrected their input.
I used the input event listener to detect changes and classList.remove() to remove error styling.

5. Formatting Decimal Results

Some time conversions produced long decimal numbers.
I used toFixed(5) to round the results and Number() to remove unnecessary trailing zeros.
This made the results easier to read.

## What I Learned

Through this project, I improved my understanding of:

- Selecting HTML elements using querySelector().
- Working with click and input event listeners.
- Reading values from input and select elements.
- Converting strings into numbers with Number().
- Using if / else if / else statements.
- Understanding variable scope.
- Working with comparison and logical operators.
- Using Boolean variables for validation.
- Stopping function execution with return.
- Manipulating HTML content with textContent.
- Adding and removing CSS classes with classList.
- Formatting numbers using toFixed().

## Future Improvements

Possible future improvements include:

- Adding more time units, such as milliseconds and weeks.
- Allowing users to swap the From and To units.
- Adding a Reset button.
- Supporting higher precision for very small time values.

My project link: https://aledjan1.github.io/Time-Converter/
