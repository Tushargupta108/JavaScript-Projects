# Olympics Countdown Timer

A real-time countdown timer built using HTML, CSS, and JavaScript that displays the remaining time until the 2028 Olympics.

## Features

- Displays remaining Days
- Displays remaining Hours
- Displays remaining Minutes
- Displays remaining Seconds
- Displays remaining Milliseconds
- Updates automatically in real time
- Responsive and clean UI

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## Concepts Practiced

### JavaScript
- Date Object
- Date.now()
- new Date()
- getTime()
- setInterval()
- Math.floor()
- Modulus Operator (%)
- Template Literals
- DOM Manipulation

### CSS
- Flexbox
- Box Shadow
- Border Radius
- Center Alignment
- Responsive Design

## How It Works

1. The target Olympics date is converted into milliseconds using:

```javascript
new Date(2028, 6, 14).getTime()
```

2. The current time is obtained using:

```javascript
Date.now()
```

3. Remaining time is calculated:

```javascript
remainingTime = olympicTime - currentTime
```

4. Milliseconds are converted into:
- Days
- Hours
- Minutes
- Seconds
- Milliseconds

5. The countdown updates continuously using:

```javascript
setInterval()
```

## Project Structure

Olympics-Countdown-Timer/
├── index.html
├── style.css
├── script.js
├── screenshot.png
└── README.md

## Future Improvements

- Add Days, Hours, Minutes, and Seconds in separate cards
- Add Olympics logo and background image
- Add dark/light mode
- Add countdown animation
- Add support for custom event countdowns

## Author

Tushar Gupta
Computer Engineering Student
GitHub: https://github.com/Tushargupta108
