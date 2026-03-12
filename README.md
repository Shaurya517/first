# ⏱ React Watch & Stopwatch App

A simple **React application** that displays a **real-time digital clock** and a **stopwatch** with start, stop, and reset functionality.
This project demonstrates the usage of **React Hooks (`useState`, `useEffect`)** and interval timers.

---

## 🚀 Features

* 🕒 **Live Digital Clock**

  * Displays the current system time
  * Updates every second
  * Updates the browser tab title with the current time

* ⏱ **Stopwatch**

  * Start the stopwatch
  * Stop/pause the stopwatch
  * Reset the stopwatch
  * Displays elapsed time in seconds

* ⚡ **React Hooks Usage**

  * `useState` for managing state
  * `useEffect` for side effects like timers and updating the document title

---

## 🛠 Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **CSS**
* **Vite / React Environment**

---

## 📂 Project Structure

```
project-folder
│
├── src
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public
└── package.json
```

---

## 📜 How It Works

### 1️⃣ Digital Clock

The clock updates every second using `setInterval` inside `useEffect`.

```javascript
useEffect(() => {
  document.title = date;
  const timerID = setInterval(() => tick(), 1000);
  return () => clearInterval(timerID);
}, []);
```

The `tick()` function updates the current time:

```javascript
const tick = () => {
  setDate(new Date().toLocaleTimeString());
};
```

---

### 2️⃣ Stopwatch Logic

The stopwatch runs only when the `on` state is `true`.

```javascript
useEffect(() => {
  let interval;
  if (on) {
    interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }
  return () => clearInterval(interval);
}, [on]);
```

---

### 3️⃣ Reset Function

Resets the stopwatch and stops the timer.

```javascript
const onReset = () => {
  setOn(false);
  setTimer(0);
};
```

---

## 🎮 Controls

| Button | Function              |
| ------ | --------------------- |
| Start  | Starts the stopwatch  |
| Stop   | Pauses the stopwatch  |
| Reset  | Resets stopwatch to 0 |

---

## ▶️ Running the Project

1. Clone the repository

```bash
git clone https://github.com/yourusername/repository-name.git
```

2. Navigate to the project folder

```bash
cd repository-name
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

---

## 📸 Output

The application shows:

* Current **live time**
* A **stopwatch timer**
* Buttons to control the stopwatch

---

## 📚 Learning Concepts

This project helps understand:

* React Hooks (`useState`, `useEffect`)
* Handling intervals in React
* Component lifecycle
* State management
* Conditional rendering

---

## 👨‍💻 Author

**Shaurya Pathak**

🔗 LinkedIn:
https://www.linkedin.com/in/shaurya-cse-ai/

---

⭐ If you like this project, feel free to **star the repository**!
