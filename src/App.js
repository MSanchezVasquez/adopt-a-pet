import React, { Suspense, lazy } from "react";
import Root from "./components/root";

// Add react-router-dom imports
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// 1. Importaciones Dinámicas (Lazy Loading)
// En lugar de cargar todo al principio, le decimos a React:
// "Solo carga este archivo cuando el usuario intente verlo".
const HomePage = lazy(() => import("./pages/home"));
const SearchPage = lazy(() => import("./pages/search"));
const PetDetailsPage = lazy(() => import("./pages/detail"));
const PetDetailsNotFound = lazy(() => import("./pages/petDetailsNotFound"));

// 2. Definir un componente de carga (Fallback)
// Esto se muestra mientras llega el javascript del componente.
const Loading = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>Cargando...</div>
);

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* 3. Envolver las rutas en Suspense */}
      <Route
        index
        element={
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        }
      />

      <Route
        path=":type"
        element={
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        }
      />

      <Route
        path=":type/:id"
        element={
          <Suspense fallback={<Loading />}>
            <PetDetailsPage />
          </Suspense>
        }
      />

      <Route
        path="search"
        element={
          <Suspense fallback={<Loading />}>
            <SearchPage />
          </Suspense>
        }
      />

      <Route
        path="pet-details-not-found"
        element={
          <Suspense fallback={<Loading />}>
            <PetDetailsNotFound />
          </Suspense>
        }
      />
    </Route>
  ),
  {
    basename: "/",
  }
);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
