import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ProjectsPage from './pages/ProjectsPage';

// Placeholder component
const TeamPage = () => (
  <div className="min-h-screen flex items-center justify-center text-center">
    <h1 className="text-4xl font-bold text-white tracking-tight">
      Core Team
    </h1>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/events',
        element: <EventsPage />,
      },
      {
        path: '/resources',
        element: <ResourcesPage />,
      },
      {
        path: '/team',
        element: <TeamPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);