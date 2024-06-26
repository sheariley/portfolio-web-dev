import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';

type NavMenuItem = {
  label: string;
  path: string;
  icon: IconDefinition;
  onClick?(event: MouseEvent<HTMLAnchorElement>): void;
};

type NavMenuProps = {
  menuItems: NavMenuItem[];
  onItemClick?(event: MouseEvent<HTMLAnchorElement>): void;
};

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
      {menuItems.map((item) => (
        <li key={item.path}>
          <NavLink to={item.path} onClick={handleItemClick.bind(null, item)}>
            <span className="min-w-[20px]">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
