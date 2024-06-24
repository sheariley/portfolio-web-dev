import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import ArchitecturePage from '@/pages/ArchitecturePage';
import CertificationsPage from '@/pages/CertificationsPage';
import ExperiencePage from '@/pages/ExperiencePage';
import RootLayout from '@/pages/RootLayout';

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
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
