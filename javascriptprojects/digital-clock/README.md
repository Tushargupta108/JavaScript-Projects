# Digital Clock

A simple digital clock built using HTML, CSS, and JavaScript that displays the current local time and updates every second.

## Features

- Displays the current time in real-time
- Updates automatically every second
- Clean and responsive UI
- Uses JavaScript Date object

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Concepts Practiced

- DOM Manipulation
- Date Object
- setInterval()
- toLocaleTimeString()
- CSS Flexbox
- Event-driven updates

## Project Structure

Digital-Clock/
├── index.html
├── clock.css
├── clock.js
├── screenshot.png
└── README.md

## How It Works

1. JavaScript creates a new `Date` object every second.
2. `toLocaleTimeString()` extracts the current local time.
3. The time is displayed inside the `#time` div using `textContent`.
4. `setInterval()` updates the clock every 1000 milliseconds.

## Future Improvements

- Add date and day display
- Add 12-hour and 24-hour format toggle
- Add multiple time zones
- Add light and dark themes

## Author

Tushar Gupta