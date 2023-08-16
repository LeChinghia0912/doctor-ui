import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '../../components/Images/Logo';
import NetWork from '../../components/SocialNetwork/NetWork';
import ButtonHeader from '../../components/Button/ButtonHeader';

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
            <div className='network'>
              <div> 
                <NetWork />
              </div>
            </div>
                <ButtonHeader />
          </div>
          <div className={cx('body')}>
            Menu
            
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;
