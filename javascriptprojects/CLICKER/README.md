# Clicker Project 🎈

An interactive JavaScript project that creates colorful animated circles wherever the user clicks on the screen. Each click generates a new bubble that appears at the clicked position, grows in size, and gradually fades away, creating a fun visual effect.

## 🚀 Features

* Creates a new circle on every mouse click.
* Displays circles at the exact click position.
* Randomly assigns colors to each circle.
* Smooth grow and fade animation using CSS keyframes.
* Dynamically generates and appends elements using JavaScript and DOM manipulation.

## 🛠️ Technologies Used

* **HTML5** – Structure of the webpage
* **CSS3** – Styling and animations
* **JavaScript (ES6)** – Event handling and DOM manipulation

## 📂 Project Structure

```
Clicker/
│── index.html
│── clicker.css
│── clicker.js
└── README.md
```

## 📖 How It Works

1. The application listens for click events on the webpage.
2. When the user clicks:

   * The x and y coordinates of the click are captured.
   * A new `<div>` element is created dynamically.
   * The `circle` class is assigned to the element.
   * A random background color is selected.
   * The circle is positioned at the clicked coordinates.
   * The circle is appended to the document and animated.

## ▶️ How to Run

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:

   ```bash
   cd Clicker
   ```

3. Open `index.html` in your browser or run it using VS Code Live Server.

## 🎯 Learning Outcomes

This project helps in understanding:

* DOM manipulation (`createElement`, `appendChild`, `classList`)
* Event handling (`addEventListener`)
* Mouse event properties (`clientX`, `clientY`)
* Dynamic styling with JavaScript
* CSS animations and keyframes
* Creating interactive user interfaces

## 📸 Preview

Click anywhere on the screen to create colorful animated bubbles that expand and fade away.

---

Made with ❤️ using HTML, CSS, and JavaScript.
