import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import SkillsPage from '@/pages/SkillsPage';
import CertificationsPage from '@/pages/CertificationsPage';
import ExperiencePage from '@/pages/ExperiencePage';
import HomePage from '@/pages/HomePage';
import RootLayout from '@/pages/RootLayout';
import LinksPage from './pages/LinksPage';
import NotFoundPage from './pages/NotFoundPage';
import RedirectPage from './pages/RedirectPage';
import { ExternalLinkUrls } from './utils';

const router = createBrowserRouter([
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
        path: 'skills',
        element: <SkillsPage />
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
  },
  {
    path: '/linked-in',
    element: <RedirectPage />,
    handle: {
      to: ExternalLinkUrls.LinkedIn
    }
  },
  {
    path: '/github',
    element: <RedirectPage />,
    handle: {
      to: ExternalLinkUrls.GitHub
    }
  },
  {
    path: '/source',
    element: <RedirectPage />,
    handle: {
      to: ExternalLinkUrls.Source
    }
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
