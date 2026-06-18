# 🎨 Background Color Changer using Event Delegation

A beginner-friendly JavaScript project that dynamically changes the webpage background color when a user clicks on a colored button. This project demonstrates **DOM Manipulation**, **Event Handling**, **Event Bubbling**, and **Event Delegation** concepts in JavaScript.

---

## 📸 Preview

Clicking a button changes the background color of the entire webpage to the selected color.

Example:

🟤 Brown Button → Brown Background
🟡 Beige Button → Beige Background
🔵 Blue Button → Blue Background
🔴 Dark Red Button → Dark Red Background
🩷 Pink Button → Pink Background

---

## 🚀 Features

* Dynamic background color switching
* Single event listener for multiple buttons
* Uses Event Delegation for better performance
* Beginner-friendly project structure
* Clean and maintainable code

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* DOM Manipulation
* Event Handling

---

## 📂 Project Structure

```text
Background-Color-Changer/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📄 HTML Structure

The webpage contains:

* A parent `<div>` container
* Five colored buttons
* Each button has:

  * A unique `id`
  * A background color
  * Button text

Example:

```html
<button id="blue" style="background-color: blue;">
    Button 3
</button>
```

The button's `id` stores the color name.

---

## ⚙️ JavaScript Logic

### Step 1: Select Parent Container

```javascript
const parent = document.getElementById("parent");
```

The parent div is selected as a JavaScript object.

---

### Step 2: Add Event Listener

```javascript
parent.addEventListener("click", (e) => {
});
```

A single click listener is attached to the parent container.

---

### Step 3: Identify the Clicked Button

```javascript
const child = e.target;
```

`e.target` returns the element that actually triggered the click event.

Example:

```javascript
e.target
// <button id="blue">
```

---

### Step 4: Select Body

```javascript
const body = document.querySelector("body");
```

The body element is selected.

---

### Step 5: Change Background Color

```javascript
body.style.backgroundColor = child.id;
```

If the clicked button is:

```html
<button id="pink">
```

Then:

```javascript
child.id;
// "pink"

body.style.backgroundColor = "pink";
```

The webpage background changes to pink.

---

## 🔄 Project Workflow

```text
User clicks a button
        ↓
Click event occurs
        ↓
Event bubbles to parent div
        ↓
Parent listener executes
        ↓
e.target identifies clicked button
        ↓
Button id is extracted
        ↓
Body background color is updated
        ↓
Background changes instantly
```

---

## 🧠 Concepts Learned

### DOM Selection

* `getElementById()`
* `querySelector()`

### Event Handling

* `addEventListener()`

### Event Object

* `e`
* `e.target`

### Event Bubbling

The click event moves from the clicked button to its parent container.

### Event Delegation

Using one parent listener to handle events of multiple child elements.

---

## ❓ Why Use Event Delegation?

Without Event Delegation:

```javascript
button1.addEventListener(...);
button2.addEventListener(...);
button3.addEventListener(...);
button4.addEventListener(...);
button5.addEventListener(...);
```

With Event Delegation:

```javascript
parent.addEventListener(...);
```

### Benefits

* Less code
* Better performance
* Easier maintenance
* Scales well for dynamically added elements

---

## 📚 Key Takeaways

✔ DOM Manipulation
✔ Event Listeners
✔ Event Object (`e`)
✔ Event Bubbling
✔ Event Delegation
✔ Dynamic Styling with JavaScript

---

## 🏃‍♂️ How to Run

1. Clone the repository

```bash
git clone <repository-url>
```

2. Open the project folder.

3. Open `index.html` in your browser.

4. Click on any color button and watch the background change.

---

## ⭐ Future Improvements

* Add more color buttons dynamically
* Display the selected color name on the screen
* Add smooth animations and transitions
* Allow users to enter custom colors
* Save the last selected color using Local Storage

---

## 👨‍💻 Author

**Tushar Gupta**

A beginner JavaScript project built while learning DOM Manipulation, Event Bubbling, and Event Delegation.
