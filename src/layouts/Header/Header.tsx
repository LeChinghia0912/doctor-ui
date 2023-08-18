import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '../../components/Images/Logo';
import NetWork from '../../components/SocialNetwork/NetWork';
import ButtonHeader from '../../components/Button/ButtonHeader';
import Support from '../../components/Menu/Support/Support';
import Navbar from '../../components/Menu/Navbar/Navbar';

const cx = classNames.bind(styles);

const Header: React.FC = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Logo />
                </div>
                <div className={cx('menu')}>
                    <div className={cx('header')}>
                        <div className="network">
                            <div>
                                <NetWork />
                            </div>
                        </div>
                        <div>
                            <ButtonHeader />
                        </div>
                    </div>
                    <div className={cx('body')}>
                        <Support />
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
