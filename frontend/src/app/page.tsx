'use client'
import React, { useState } from 'react';
import Tabbar from "./components/tabbar";
import PageLayout from "./components/PageLayout";
import PageContext from './context/PageContext';  // Adjust the import path

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Events");

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <PageLayout title={currentPage}>
        {//Child pages}
      </PageLayout>
    </PageContext.Provider>
  );
}
