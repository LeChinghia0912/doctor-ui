import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import menuItems, { MenuItem } from './menuItems';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Navbar: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);

    const handleMouseEnter = (item: MenuItem) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <div className={cx('navbar')}>
            <div className={cx('menu')}>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <div
                            className={cx('item')}
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to={item.link}>
                                {item.title} {item.submenus && <FontAwesomeIcon icon={faCaretDown} />}
                            </Link>
                            {hoveredItem === item && item.submenus && (
                                <div className={cx('submenu')}>
                                    <ul>
                                        {item.submenus.map((submenu, subIndex) => (
                                            <li key={subIndex}>
                                                <Link className={cx('link-prop')} to={submenu.link}>
                                                    {submenu.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
