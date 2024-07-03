import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ArchitecturePage from '@/pages/ArchitecturePage';
import CertificationsPage from '@/pages/CertificationsPage';
import ExperiencePage from '@/pages/ExperiencePage';
import HomePage from '@/pages/HomePage';
import RootLayout from '@/pages/RootLayout';
import LinksPage from './pages/LinksPage';
import RedirectPage from './pages/RedirectPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/linked-in',
    element: <RedirectPage />,
    handle: {
      to: 'https://www.linkedin.com/in/shea-riley-8bb19336/'
    }
  },
  {
    path: '/github',
    element: <RedirectPage />,
    handle: {
      to: 'https://github.com/sheariley'
    }
  },
  {
    path: '/source',
    element: <RedirectPage />,
    handle: {
      to: 'https://github.com/sheariley/portfolio-web-dev'
    }
  },
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
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
