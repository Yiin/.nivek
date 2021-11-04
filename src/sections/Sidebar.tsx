// import Logo from ''

import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as PictureIcon } from '../assets/icons/picture.svg';
import { ReactComponent as HeartIcon } from '../assets/icons/heart.svg';
import styles from './Sidebar.module.scss';

interface Props {
    className?: string;
}

const Sidebar = ({ className }: Props) => (
    <div className={classnames(styles.container, className)}>
        <Link to="/" className={styles.logo}>
            <Logo />
        </Link>
        <div className={styles.links}>
            {[
                {
                    to: '/',
                    label: <PictureIcon />,
                },
                {
                    to: '/liked',
                    label: <HeartIcon />,
                },
            ].map(({ to, label }) => (
                <NavLink
                    className={({ isActive }) =>
                        classnames(styles.link, isActive && styles.activeLink)
                    }
                    to={to}
                >
                    {label}
                </NavLink>
            ))}
        </div>
    </div>
);

export default Sidebar;
