import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HomePage from './pages/HomePage';

// Placeholder components for routing completeness
const ProjectsPage = () => <div className="min-h-screen flex items-center justify-center text-center"><h1 className="text-4xl font-bold text-white tracking-tight">Projects Matrix</h1></div>;
const EventsPage = () => <div className="min-h-screen flex items-center justify-center text-center"><h1 className="text-4xl font-bold text-white tracking-tight">Live Events</h1></div>;
const ResourcesPage = () => <div className="min-h-screen flex items-center justify-center text-center"><h1 className="text-4xl font-bold text-white tracking-tight">System Resources</h1></div>;
const TeamPage = () => <div className="min-h-screen flex items-center justify-center text-center"><h1 className="text-4xl font-bold text-white tracking-tight">Core Team</h1></div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      },
      {
        path: "/events",
        element: <EventsPage />
      },
      {
        path: "/resources",
        element: <ResourcesPage />
      },
      {
        path: "/team",
        element: <TeamPage />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
