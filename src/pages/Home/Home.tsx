import React from 'react';
import Main from '../../components/Main/Main';
import HomeContainer from '../../layouts/HomeContainer/HeaderContainer/HomeContainer';
import Statistic from '../../layouts/Statistic/Statistic';
import Hospital from '../../layouts/HospitalDeploy/Hospital';
import classNames from 'classnames';
import styles from './Home.module.scss';

const Home: React.FC = () => {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('body')}>
            <Main />

            <HomeContainer />

            <Statistic />

            <Hospital />
        </div>
    );
};

export default Home;
