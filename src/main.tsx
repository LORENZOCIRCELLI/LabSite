import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import PostPage from "./pages/Post";
import UnderConstruction from "./pages/UnderConstruction";
import NewsArticlePage from "./pages/NewsArticlePage";
import NewsPage from "./pages/NewsPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route
          path="/noticias/:slug"
          element={<NewsArticlePage />} />
          <Route
  path="/noticias"
  element={<NewsPage />}
/>
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);