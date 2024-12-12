
'use client';
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Tabbar from './components/tabbar';
import PageLayout from './components/PageLayout';
import PageContext from './context/PageContext'; // Adjust the import path
import Events from './pages/events';
import Ideabank from './pages/ideabank';
import Kakefredag from './pages/kakefredag';

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Events");

  return (
    <HashRouter>
      <PageContext.Provider value={{ currentPage, setCurrentPage }}>
        <PageLayout title={currentPage}>
          <Routes>
            <Route index element={<Events />} />
            <Route path="ideabank" element={<Ideabank />} />
            <Route path="kakefredag" element={<Kakefredag />} />
          </Routes>
        </PageLayout>
      </PageContext.Provider>
    </HashRouter>
  );
}

