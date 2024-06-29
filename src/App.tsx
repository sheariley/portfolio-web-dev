import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ArchitecturePage from '@/pages/ArchitecturePage';
import CertificationsPage from '@/pages/CertificationsPage';
import ExperiencePage from '@/pages/ExperiencePage';
import HomePage from '@/pages/HomePage';
import RootLayout from '@/pages/RootLayout';
import LinksPage from './pages/LinksPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'architecture',
        element: <ArchitecturePage />
      },
      {
        path: 'experience',
        element: <ExperiencePage />
      },
      {
        path: 'certifications',
        element: <CertificationsPage />
      },
      {
        path: 'links',
        element: <LinksPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
