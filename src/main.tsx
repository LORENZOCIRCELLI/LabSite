import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import PostPage from "./pages/Post";
import UnderConstruction from "./pages/UnderConstruction";
import NewsArticlePage from "./pages/NewsArticlePage";
import NewsPage from "./pages/NewsPage";
import ProfessorsPage from "./pages/ProfessorsPage";
import StudentsPage from "./pages/StudentsPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/noticias/:slug" element={<NewsArticlePage />} />
        <Route path="/noticias" element={<NewsPage />}/>
        <Route path="*" element={<UnderConstruction />} />
        <Route path="/membros/professores" element={<ProfessorsPage />} />
        <Route path="/membros/estudantes" element={<StudentsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);