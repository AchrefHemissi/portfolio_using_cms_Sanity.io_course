import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SinglePostPage from "./pages/SinglePostPage";
import PostPage from "./pages/PostPage";
import ProjectPage from "./pages/ProjectPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/:slug" element={<SinglePostPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
