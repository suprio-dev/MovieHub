# 🎬 MovieHub

### A movie discovery web app built with JavaScript.

Search for movies, explore posters and release years, and discover your next favourite film using the OMDb API.

**Live Demo:** [MovieHub](https://suprio-dev.github.io/MovieHub/)

---

## ✨ Features

- Search movies by title
- Display movie posters and release years
- View individual movie details
- Navigate between movie search results and details pages
- Fetch movie data dynamically using the OMDb API
- Loading indicator while fetching results
- Error handling for unsuccessful searches
- Responsive movie grid layout
- Dark cinematic UI with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Tailwind CSS | Styling & responsive UI |
| JavaScript | Application logic & DOM manipulation |
| OMDb API | Movie data and information |
| Fetch API | Asynchronous API requests |

---

## 🔄 How It Works

```text
Enter Movie Title
       ↓
Submit Search Form
       ↓
Fetch API Request
       ↓
    OMDb API
       ↓
Receive Movie Data
       ↓
Display Movie Cards
       ↓
 Select a Movie
       ↓
Movie Details Page
```

MovieHub fetches movie information from the OMDb API and dynamically displays the search results. Selecting a movie opens its dedicated details page using its IMDb ID.

---

## 🌐 API Integration

MovieHub uses the **OMDb API (The Open Movie Database)** to search for movies.

```js
const response = await fetch(
  `https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${encodeURIComponent(movieName)}`
);

const data = await response.json();
```

The application checks the API response before displaying the results and shows an error message when a search is unsuccessful.

---

## 🎯 Why I Built It

This project was built to practice working with:

- DOM manipulation
- Event listeners and form submission
- User input and validation
- Fetch API and asynchronous JavaScript
- `async/await`
- Working with JSON data
- Dynamic DOM element creation
- Event delegation using `closest()`
- URL query parameters
- API response handling
- Responsive UI design

---

## 🚀 Run Locally

```bash
git clone https://github.com/suprio-dev/MovieHub.git
cd MovieHub
```

Open `index.html` using VS Code Live Server.

Configure a valid OMDb API key in the JavaScript files before running the application.

---

## 📌 Project Status

**Completed — v1.0**

Built as a hands-on project to strengthen my JavaScript fundamentals and explore API integration, dynamic rendering, and responsive web design.

More features may be added as the project evolves.
