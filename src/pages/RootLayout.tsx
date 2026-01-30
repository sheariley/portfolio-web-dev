import {
  faBars,
  faBook,
  faBusinessTime,
  faCertificate,
  faCode,
  faFileText,
  faHome,
  faLink,
  faSquareCaretLeft
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Outlet } from 'react-router';

import Button from '@/components/ui/Button';
import Header from '@/components/ui/Header';
import NavMenu from '@/components/ui/NavMenu';
import { ExternalLinkUrls } from '@/utils';
import { ScrollRestoration } from 'react-router';

export default function RootLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleDrawerClose() {
    setDrawerOpen(false);
    document.body.scrollIntoView();
  }

  function handleDrawerOpen() {
    setDrawerOpen(true);
  }

  return (
    <>
      <ScrollRestoration getKey={(location) => location.pathname} />
      <div className="drawer lg:drawer-open">
        <input
          id="nav-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={() => {}}
        />
        <div className="drawer-content flex flex-col items-center p-2 pt-4 md:px-6 lg:p-8">
          {!drawerOpen && (
            <div className="fixed left-0 top-0 z-50 flex w-full justify-start border-b border-base-300 bg-base-100 p-1 lg:hidden">
              <Button
                aria-label="open sidebar"
                widthType="square"
                size="sm"
                themeColor="ghost"
                icon={faBars}
                iconSize="2x"
                onClick={handleDrawerOpen}
              />
            </div>
          )}
          <Header />
          <main className="container container-main mx-auto px-4 pb-16 md:px-6 lg:px-8">
            <div className="layout-content">
              <Outlet />
            </div>
          </main>
        </div>
        <div className="drawer-side shadow-xl shadow-black">
          <label
            htmlFor="nav-drawer"
            aria-label="close sidebar"
            className="drawer-overlay lg:hidden"
            onClick={handleDrawerClose}
          ></label>
          <div className="relative flex min-h-full w-48 flex-col border-r-2 border-base-100/30 bg-base-100 p-1 text-base-content backdrop-blur-xl max-lg:pt-8">
            <Button
              aria-label="close sidebar"
              className="absolute right-2 top-2 lg:hidden"
              widthType="square"
              size="sm"
              themeColor="ghost"
              icon={faSquareCaretLeft}
              iconSize="2x"
              onClick={handleDrawerClose}
            />
            <NavMenu
              onItemClick={handleDrawerClose}
              menuItems={[
                {
                  label: 'Home',
                  path: '/',
                  icon: faHome
                },
                {
                  label: 'Skills',
                  path: '/skills',
                  icon: faBook
                },
                {
                  label: 'Experience',
                  path: '/experience',
                  icon: faBusinessTime
                },
                {
                  label: 'Certifications',
                  path: '/certifications',
                  icon: faCertificate
                },
                {
                  label: 'Links',
                  path: '/links',
                  icon: faLink
                },
                {
                  label: 'Resume',
                  href: '/resume.pdf',
                  download: true,
                  icon: faFileText
                },
                {
                  label: 'Site Source',
                  href: ExternalLinkUrls.Source,
                  target: '_blank',
                  icon: faCode
                }
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
