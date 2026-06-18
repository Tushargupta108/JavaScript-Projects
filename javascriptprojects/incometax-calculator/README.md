# Income Tax Calculator

A simple web application that calculates the income tax payable based on annual income entered by the user. The project is built using HTML, CSS, and JavaScript and demonstrates form handling, DOM manipulation, and conditional logic.

## Features

* Accepts annual income as user input
* Calculates tax according to predefined income slabs
* Displays the calculated tax instantly on the page
* Prevents page reload during form submission
* Clears the input field after calculation

## Tech Stack

* HTML5
* CSS3
* JavaScript (ES6)

## Concepts Practiced

* Forms and Input Elements
* Event Listeners
* `submit` Event
* `e.preventDefault()`
* DOM Manipulation
* Conditional Statements (`if-else`)
* Template Literals
* `parseInt()`
* Form Reset

## Project Structure

```text
income-tax-calculator/
├── index.html
├── income.css
├── income.js
├── README.md
└── assets/
    └── preview.png
```

## How It Works

1. User enters their annual income.
2. The form's `submit` event is triggered.
3. `e.preventDefault()` stops the page from refreshing.
4. JavaScript reads the entered income and converts it into a number.
5. Tax is calculated according to income slabs.
6. The result is displayed on the page.
7. The input field is cleared for the next calculation.

## Tax Slabs Used

| Annual Income           | Tax Rate |
| ----------------------- | -------- |
| Up to ₹12,00,000        | No Tax   |
| ₹12,00,001 - ₹16,00,000 | 15%      |
| ₹16,00,001 - ₹20,00,000 | 20%      |
| ₹20,00,001 - ₹24,00,000 | 25%      |
| Above ₹24,00,000        | 30%      |

## Learning Outcome

This project helped me understand:

* How form submission works in JavaScript
* Why `e.preventDefault()` is used
* How to access and update DOM elements dynamically
* How to take user input and perform calculations
* How conditional logic can be used to implement real-world problems

## Run Locally

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Open the project folder.

3. Open `index.html` in your browser.

4. Enter an annual income and click **Calculate Income Tax**.

## Future Improvements

* Add input validation and error messages
* Display tax slab breakdown
* Format currency values using Indian numbering format
* Improve UI and responsiveness
* Add support for different tax regimes

## Author

**Tushar Gupta**

Built while learning JavaScript form handling, DOM manipulation, and conditional programming.
