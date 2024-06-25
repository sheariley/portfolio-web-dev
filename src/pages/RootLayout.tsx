import {
  faBars,
  faBusinessTime,
  faCertificate,
  faHome,
  faLayerGroup,
  faSquareCaretLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import Button from '@/components/ui/Button';
import Header from '@/components/ui/Header';

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
    <div className="drawer lg:drawer-open">
      <input
        id="nav-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={() => {}}
      />
      <div className="drawer-content flex flex-col items-center p-2 pt-4 lg:p-8">
        {!drawerOpen && (
          <div className="fixed left-0 top-0 z-50 flex w-full justify-start border-b-2 border-neutral/30 bg-neutral/30 p-1 shadow-2xl backdrop-blur-xl lg:hidden">
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
        <main className="w-full">
          <Outlet />
        </main>
      </div>
      <div className="drawer-side shadow-xl shadow-black">
        <label
          htmlFor="nav-drawer"
          aria-label="close sidebar"
          className="drawer-overlay lg:hidden"
          onClick={handleDrawerClose}
        ></label>
        <div className="relative flex min-h-full w-48 flex-col border-r-2 border-neutral/30 bg-neutral/30 p-1 pt-8 text-base-content backdrop-blur-xl">
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
          <ul className="menu flex-1 space-y-3">
            <li>
              <NavLink to="/" onClick={handleDrawerClose}>
                <FontAwesomeIcon icon={faHome} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/architecture" onClick={handleDrawerClose}>
                <FontAwesomeIcon icon={faLayerGroup} />
                Architecture
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" onClick={handleDrawerClose}>
                <FontAwesomeIcon icon={faBusinessTime} />
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/certifications" onClick={handleDrawerClose}>
                <FontAwesomeIcon icon={faCertificate} />
                Certifications
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
