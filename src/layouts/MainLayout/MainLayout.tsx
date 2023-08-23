import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Main from '../../components/Main/Main';
import HomeContainer from '../HomeContainer/HeaderContainer/HomeContainer';
import Statistic from '../Statistic/Statistic';

const cx = classNames.bind(styles);

const MainLayout: React.FC = () => {
    return (
        <BrowserRouter>
            <header className={cx('wrapper')}>
                <Header />
            </header>

            <div className={cx('body')}>
                <Main />

                <HomeContainer />

                <Statistic />
            </div>
        </BrowserRouter>
    );
};

export default MainLayout;
