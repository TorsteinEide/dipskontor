
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
            name: "John Doe",
            picture: "https://randomuser.me/api/portraits/men/32.jpg",
          },
        },
        {
          createdBy: {
            name: "Jane Smith",
            picture: "https://randomuser.me/api/portraits/women/50.jpg",
          },
        },
      ],
    },
    {
      title: "AI-Powered Tutoring App",
      description: "An app that uses AI to provide personalized tutoring for high school students in math and science.",
      createdBy: {
        name: "Bob White",
        picture: "https://randomuser.me/api/portraits/men/41.jpg",
      },
      likes: [
        {
          createdBy: {
            name: "Alice Green",
            picture: "https://randomuser.me/api/portraits/women/45.jpg",
          },
        },
      ],
    },
    {
      title: "Community Gardening Initiative",
      description: "Organize a series of community gardens to promote sustainable food sources.",
      createdBy: {
        name: "Chloe Brown",
        picture: "https://randomuser.me/api/portraits/women/30.jpg",
      },
      likes: [
        {
          createdBy: {
            name: "Ethan Grey",
            picture: "https://randomuser.me/api/portraits/men/38.jpg",
          },
        },
        {
          createdBy: {
            name: "Sophia Black",
            picture: "https://randomuser.me/api/portraits/women/24.jpg",
          },
        },
      ],
    },
    {
      title: "Renewable Energy Course",
      description: "Develop an online course on building and managing small-scale renewable energy systems.",
      createdBy: {
        name: "Daniel Green",
        picture: "https://randomuser.me/api/portraits/men/28.jpg",
      },
      likes: [
        {
          createdBy: {
            name: "Emma Blue",
            picture: "https://randomuser.me/api/portraits/women/35.jpg",
          },
        },
      ],
    },
    {
      title: "Mental Health Support Platform",
      description: "Create a platform to connect people with counselors and support groups for mental health assistance.",
      createdBy: {
        name: "Ella Violet",
        picture: "https://randomuser.me/api/portraits/women/20.jpg",
      },
      likes: [
        {
          createdBy: {
            name: "Daniel Green",
            picture: "https://randomuser.me/api/portraits/men/28.jpg",
          },
        },
        {
          createdBy: {
            name: "Chloe Brown",
            picture: "https://randomuser.me/api/portraits/women/30.jpg",
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

