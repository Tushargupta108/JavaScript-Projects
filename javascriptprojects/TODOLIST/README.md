# 📝 To-Do List Application

A beginner-friendly and interactive To-Do List application built using **HTML, CSS, and JavaScript**. This project demonstrates how to create, manipulate, and remove HTML elements dynamically using the DOM and how to handle user events efficiently.

The application allows users to:

* Add new tasks.
* Mark tasks as completed.
* Delete tasks.
* Manage tasks without reloading the webpage.

---

# 📌 Project Objective

The main goal of this project is to understand and practice:

* DOM Manipulation
* Event Handling
* Dynamic Element Creation
* Form Submission Handling
* Styling Elements using JavaScript
* Working with User Input
* Updating the UI without refreshing the page

This project is an excellent introduction to building interactive web applications using vanilla JavaScript.

---

# 🛠️ Technologies Used

* **HTML5** – Creates the structure of the webpage.
* **CSS3** – Provides styling and improves user experience.
* **JavaScript (ES6)** – Handles functionality and dynamic interactions.

---

# 📂 Project Structure

```text
To-Do-List/
│
├── index.html
├── todo.css
├── todo.js
└── README.md
```

---

# 🏗️ Project Flow

```text
User enters a task
        ↓
Clicks ADD button
        ↓
Form submit event occurs
        ↓
preventDefault() stops page refresh
        ↓
JavaScript creates new elements
        ↓
Task + Done button + Delete button
are added inside a parent div
        ↓
Parent div is appended to the DOM
        ↓
User can mark task completed or delete it
```

---

# 📄 HTML Structure

The HTML contains:

### 1. Heading

```html
<h1>TO DO LIST</h1>
```

Displays the title of the application.

---

### 2. Form

```html
<form>
    <input type="text" required>
    <button type="submit">ADD</button>
</form>
```

The form contains:

* Input field for entering tasks.
* Submit button for adding tasks.

---

### 3. Task Container

```html
<div id="alltask"></div>
```

This div stores all dynamically created tasks.

---

# ⚠️ Common Mistake

Avoid doing this:

```html
<div id="alltask"></div>

<div id="alltask"></div>
```

IDs must be unique.

`document.querySelector('#alltask')`
returns only the first element, which can lead to unexpected behavior.

---

# 📄 JavaScript Explanation

## Step 1: Selecting Elements

```javascript
const form = document.querySelector('form');
const alltask = document.querySelector('#alltask');
const input = document.querySelector('input');
```

### Purpose

* `form` → Selects the form.
* `alltask` → Selects the container where tasks will be displayed.
* `input` → Selects the input field.

---

## Step 2: Listening for Form Submission

```javascript
form.addEventListener('submit', (e) => {
```

Whenever the user clicks the ADD button, the submit event occurs.

---

## Step 3: Preventing Page Refresh

```javascript
e.preventDefault();
```

### Why?

By default:

```text
Click Submit
      ↓
Form submits
      ↓
Page refreshes
      ↓
Everything disappears
```

`preventDefault()` stops this default behavior.

---

## Step 4: Reading User Input

```javascript
const text = input.value.trim();
```

### Example

Input:

```text
      Buy Milk
```

After `.trim()`:

```text
Buy Milk
```

Leading and trailing spaces are removed.

---

## Step 5: Creating Parent Container

```javascript
const parent = document.createElement('div');
```

Every task is stored inside its own div.

Example:

```html
<div>
    Task
    Done
    Delete
</div>
```

---

## Step 6: Creating Task Text

```javascript
const task = document.createElement('span');
task.textContent = text;
```

Example:

```html
<span>Buy Milk</span>
```

---

## Step 7: Creating Buttons

### Delete Button

```javascript
const deletebutton = document.createElement('button');
deletebutton.textContent = "DELETE";
```

### Done Button

```javascript
const donebutton = document.createElement('button');
donebutton.textContent = "Done";
```

---

## Step 8: Combining Everything

```javascript
parent.append(
    task,
    donebutton,
    deletebutton
);
```

Result:

```html
<div>
    <span>Buy Milk</span>
    <button>Done</button>
    <button>DELETE</button>
</div>
```

---

## Step 9: Adding Task to Webpage

```javascript
alltask.append(parent);
```

Before:

```html
<div id="alltask"></div>
```

After:

```html
<div id="alltask">

    <div>
        <span>Buy Milk</span>
        <button>Done</button>
        <button>DELETE</button>
    </div>

</div>
```

The newly created task becomes visible because it is attached to the DOM.

---

## Step 10: Delete Functionality

```javascript
deletebutton.addEventListener('click', () => {
    parent.remove();
});
```

### Flow

```text
Click DELETE
        ↓
Parent task div selected
        ↓
.remove() executes
        ↓
Task disappears from webpage
```

---

## Step 11: Mark Task as Completed

```javascript
donebutton.addEventListener('click', () => {
    task.style.textDecoration = 'line-through';
    task.style.color = 'pink';
});
```

### Before

```text
Buy Milk
```

### After

```text
~~Buy Milk~~
```

The task gets:

* Strike-through effect
* Different color

indicating completion.

---

# 🔥 DOM Methods Used

## querySelector()

Selects an element.

```javascript
document.querySelector('#alltask');
```

---

## createElement()

Creates a new HTML element in memory.

```javascript
document.createElement('div');
```

---

## append()

Adds elements inside another element.

```javascript
parent.append(task);
```

---

## remove()

Deletes an element from the DOM.

```javascript
parent.remove();
```

---

## textContent

Adds text inside an element.

```javascript
task.textContent = text;
```

---

# 🧠 Concepts Learned

After completing this project, you should understand:

✅ Forms and Submit Events

✅ preventDefault()

✅ Event Listeners

✅ DOM Selection

✅ Dynamic Element Creation

✅ Appending Elements

✅ Removing Elements

✅ Modifying CSS using JavaScript

✅ Handling User Input

✅ Building Interactive Applications

---

# 🚀 Future Improvements

Possible features to add:

* Edit Task
* Save tasks in Local Storage
* Clear All button
* Task Counter
* Due Date and Time
* Dark/Light Theme Toggle
* Drag and Drop Tasks
* Search Tasks
* Completed Tasks Section

---

# 🎓 Final Learning Outcome

This project teaches one of the most important concepts in frontend development:

> **JavaScript can create, modify, style, and remove HTML elements dynamically, allowing us to build interactive applications without reloading the webpage.**

This To-Do List project is a foundational step toward building larger applications such as Notes Apps, Trello Boards, Expense Trackers, and Project Management Tools.

---

Made with ❤️ using HTML, CSS, and JavaScript.
