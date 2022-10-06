import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";
import MealDetails from "./components/MealDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        { path: "/about", element: <About></About> },
        {
          path: "/products",
          element: <Products></Products>,
          loader: () =>
            fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
        },
        {
          path: "meal/:strMeal",
          element: <MealDetails></MealDetails>,
          loader: ({ params }) =>
            fetch(
              `www.themealdb.com/api/json/v1/1/search.php?s=${params.strMeal}`
            ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
