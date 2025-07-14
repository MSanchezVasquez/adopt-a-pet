# 🐾 Adopt-a-Pet

**Adopt-a-Pet** is a web application built with **React** that allows users to browse animals available for adoption, search by type or name, and view detailed information for each pet.  
This project highlights the use of **React Router DOM** for dynamic routing, nested navigation, and custom error handling.

## 🚀 Live Demo

🔗 [app-adopt-a-pet.netlify.app](https://app-adopt-a-pet.netlify.app)

---

## 🧠 Key Features

- 🔁 Dynamic navigation by pet type (`/dog`, `/cat`, `/bird`, etc.)
- 🔍 Search pets by name via `/search`
- 🐾 Individual pet detail pages at `/dog/51322393` or similar
- ❌ Custom "not found" page for invalid pet IDs
- 🧭 Full routing setup using **React Router DOM v6.30.1**
- 🎨 Clean, responsive layout

---

## 🛠️ Tech Stack

- [React 18](https://reactjs.org/)
- [React Router DOM v6](https://reactrouter.com/)
- [Create React App](https://create-react-app.dev/)
- [Netlify](https://www.netlify.com/) for deployment

---

## 🔧 Route Structure

The routing is configured in `App.jsx` using `createBrowserRouter`:

```jsx
<Route path="/" element={<Root />}>
  <Route index element={<HomePage />} />
  <Route path=":type" element={<HomePage />} />
  <Route path=":type/:id" element={<PetDetailsPage />} />
  <Route path="search" element={<SearchPage />} />
  <Route path="pet-details-not-found" element={<PetDetailsNotFound />} />
</Route>
```
