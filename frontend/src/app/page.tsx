
'use client';
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import PageContext from './context/PageContext'; // Adjust the import path
import Events from './pages/events';
import Ideabank from './pages/ideabank';
import Kakefredag from './pages/kakefredag';
import { Idea, IEvent } from './types/dataTypes';

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Events");
  const mockdata: Idea[] = [
    {
      title: "Sukkerfri sjokomelk i kjøleskapet",
      description: "Jeg ønsker at det er sukkerfri sjokomelk. Det er så godt!",
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
        name: "Bob",
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

  const mockEvents : IEvent[] = [
    {
      id: 1,
      title: "Nyttårsfest",
      description: "Nytt av nyåret - vi skal ha nyttårsfest!",
      createdBy: {
        name: "Magnus",
      },
      location: 'Clarion Hotel',
      createdAt: new Date(2024,12,12)
    },
    {
      id: 2,
      title: "Cageball på Sluppen",
      description: "Vi forsetter hver onsdag i 2025 også.",
      createdBy: {
        name: "Stig Rune",
      },
      location: '3T-Sluppen,Sluppenvegen 12H, 7037 Trondheim',
      createdAt: new Date(2024,12,5)
    },
    {
      id: 3,
      title: "Lønningstreff - Bowling",
      description: "Bowling på Centrum Bowling 23.01.2025 ",
      createdBy: {
        name: "Hilde",
      },
      location: 'Trondheim Torg, Tinghusplassen 1, 7013 Trondheim',
      createdAt: new Date(2024, 12, 1),
    }

  ]
  return (
    <HashRouter>
      <PageContext.Provider value={{ currentPage, setCurrentPage }}>
        <PageLayout title={currentPage}>
          <Routes>
            <Route index element={<Events events={mockEvents} />} />
            <Route path="ideabank" element={<Ideabank ideas={mockdata} />} />
            <Route path="kakefredag" element={<Kakefredag />} />
          </Routes>
        </PageLayout>
      </PageContext.Provider>
    </HashRouter>
  );
}

