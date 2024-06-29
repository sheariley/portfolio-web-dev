import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';

type NavMenuItemBase = {
  label: string;
  icon: IconDefinition;
  onClick?(event: MouseEvent<HTMLAnchorElement>): void;
};

type NavMenuRouteItem = NavMenuItemBase & {
  path: string;
};

type NavMenuDownloadItem = NavMenuItemBase & {
  downloadUrl: string;
};

type NavMenuItem = NavMenuRouteItem | NavMenuDownloadItem;

type NavMenuProps = {
  menuItems: NavMenuItem[];
  onItemClick?(event: MouseEvent<HTMLAnchorElement>): void;
};

function isNavMenuDownloadItem(item: NavMenuItem): item is NavMenuDownloadItem {
  return 'downloadUrl' in item;
}

function NavMenuItemIcon({ icon }: { icon: IconDefinition }) {
  return (
    <span className="min-w-[20px] text-center">
      <FontAwesomeIcon icon={icon} />
    </span>
  );
}

export default function NavMenu({ menuItems, onItemClick }: NavMenuProps) {
  function handleItemClick(
    item: NavMenuItem,
    event: MouseEvent<HTMLAnchorElement>
  ) {
    if (onItemClick) onItemClick(event);
    if (item.onClick) item.onClick(event);
  }

  return (
    <ul className="menu flex-1 space-y-3">
      {menuItems.map((item) => {
        if (isNavMenuDownloadItem(item)) {
          return (
            <li key={item.downloadUrl}>
              <a
                href={item.downloadUrl}
                download
                onClick={handleItemClick.bind(null, item)}
              >
                <NavMenuItemIcon icon={item.icon} />
                {item.label}
              </a>
            </li>
          );
        }

        return (
          <li key={item.path}>
            <NavLink to={item.path} onClick={handleItemClick.bind(null, item)}>
              <NavMenuItemIcon icon={item.icon} />
              {item.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
