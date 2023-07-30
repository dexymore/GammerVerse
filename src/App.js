import { useState } from "react";
import "./App.css";
import Register from "./register/Register";
import Login from "./login/Login";
import Home from "./home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Category from "./category/Category";
import Sort from "./sorting/Sort";
import Plat from "./PLATFORMS/Plat";
import All from "./allGames/All";
import ItemDetalis from "./itemDetails/ItemDetalis";
import jwtDecode from "jwt-decode";
import ProtectedRoute from "./protectedroute/ProtectedRoute";
import { useEffect } from "react";
import Notfound from "./notfound/Notfound";
import Landing from "./landing/landing";
import ParticlesBackground from "./particesBackground/particesBackground";

function App() {
  const [userdata, setuserdata] = useState(null);
  function saveUserData() {
    let uncodedToken = localStorage.getItem("userToken");
    let decodedToken = jwtDecode(uncodedToken);

    setuserdata(decodedToken);
  }

  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) saveUserData();
  }, []);

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout setuserdata={setuserdata} userdata={userdata}></Layout>,
      errorElement: <Notfound></Notfound>,
      children: [
        { index: true, element: <Landing></Landing>  },
        { path:"login", element: <Login></Login> },
        { path: "Register", element: <Register></Register> },
        {
          path: "Home",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Home userdata={userdata}></Home>
            </ProtectedRoute>
          ),
        },
        { path: "Login", element: <Login saveData={saveUserData}></Login> },
        {
          path: "browser",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Plat platform={"browser"}></Plat>
            </ProtectedRoute>
          ),
        },
        {
          path: "pc",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Plat platform={"pc"}></Plat>
            </ProtectedRoute>
          ),
        },
        {
          path: "shooter",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"shooter"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "racing",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"racing"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "sports",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"sports"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "social",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"social"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "open-world",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"open-world"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "fantasy",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"fantasy"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "zombie",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"zombie"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "action-rpg",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"action-rpg"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "action",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"action"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "fight",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"fight"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "battle-royale",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Category category={"battle-royale"}></Category>
            </ProtectedRoute>
          ),
        },
        {
          path: "relevance",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Sort sortBy={"relevance"}></Sort>
            </ProtectedRoute>
          ),
        },
        {
          path: "alphabetical",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Sort sortBy={"alphabetical"}></Sort>
            </ProtectedRoute>
          ),
        },
        {
          path: "popularity",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Sort sortBy={"popularity"}></Sort>
            </ProtectedRoute>
          ),
        },
        {
          path: "release-date",
          element: (
            <ProtectedRoute userdata={userdata}>
              <Sort sortBy={"release-date"}></Sort>
            </ProtectedRoute>
          ),
        },

        {
          path: "All",
          element: (
            <ProtectedRoute userdata={userdata}>
              <All></All>
            </ProtectedRoute>
          ),
        },

        {
          path: "ItemDetails/:id",
          element: (
            <ProtectedRoute userdata={userdata}>
              <ItemDetalis></ItemDetalis>
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
