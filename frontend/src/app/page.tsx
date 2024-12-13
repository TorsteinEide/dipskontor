
'use client';
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import PageContext from './context/PageContext'; // Adjust the import path
import Events from './pages/events';
import Ideabank from './pages/ideabank';
import Kakefredag from './pages/kakefredag';
import { Idea } from './types/dataTypes';

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Events");
  const mockdata: Idea[] = [
    {
      title: "Sukkerfri sjokomelk i kjøleskapet",
      description: "Jeg ønsker veldig gjerne at det er sukkerfri sjokomelk i kjøleskapet på jobben. Det er så godt!",
      createdBy: {
        name: "Eirin",
      },
      likes: [
        {
          createdBy: {
            name: "Frank",
          },
        },
        {
          createdBy: {
            name: "Magnus",
          },
        },
      ],
    },
    {
      title: "Havet arena på neste lønningstreff!!",
      description: "Det er på tide å vise MOT!!! kom igjen da folkens! hopp i havet!",
      createdBy: {
        name: "Bob White",
        picture: "https://randomuser.me/api/portraits/men/41.jpg",
      },
      likes: [
        {
          createdBy: {
            name: "Torstein",
          },
        },
      ],
    },
    {
      title: "Kjøpe wii og just dance på kontoret",
      description: "Viktig med fysisk aktivitet!!",
      createdBy: {
        name: "Rasmus",
      },
      likes: [
        {
          createdBy: {
            name: "Eirin",
          },
        },
        {
          createdBy: {
            name: "Stig Rune",
          },
        },
      ],
    },
    {
      title: "Lisens på Spotify",
      description: "Vi trenger musikk på jobben!",
      createdBy: {
        name: "Marius",
      },
      likes: [
        {
          createdBy: {
            name: "Eirin",
          },
        },
      ],
    },
    {
      title: "Innkjøp av flere bøker",
      description: "The more you know!!",
      createdBy: {
        name: "Lalita",
      },
      likes: [
        {
          createdBy: {
            name: "Joachim",
          },
        },
        {
          createdBy: {
            name: "Torstein",
          },
        },
      ],
    },
  ];

  return (
    <HashRouter>
      <PageContext.Provider value={{ currentPage, setCurrentPage }}>
        <PageLayout title={currentPage}>
          <Routes>
            <Route index element={<Events />} />
            <Route path="ideabank" element={<Ideabank ideas={mockdata} />} />
            <Route path="kakefredag" element={<Kakefredag />} />
          </Routes>
        </PageLayout>
      </PageContext.Provider>
    </HashRouter>
  );
}

