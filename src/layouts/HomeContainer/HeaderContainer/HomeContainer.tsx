import React from 'react';
import styles from './Container.module.scss';
import classNames from 'classnames/bind';
import data from './ContainerData';
import WrapperContainer from '../WrapperContainer/WrapperContainer';

const cx = classNames.bind(styles);

const HomeContainer: React.FC = () => {
    const containerData = data[0];
    const { title, tag, desc } = containerData;

    return (
        <div className={cx('body')}>
            <div className={cx('homeContainer')}>
                <div className={cx('homeInfo')}>
                    <div className={cx('header')}>
                        <div className={cx('middle')}>
                            <div className={cx('title')}>
                                <p className={cx('text')}>{title}</p>
                                <p className={cx('tag')}>{tag}</p>
                            </div>

                            <div className={cx('desc')}>
                                <b>{title}</b>
                                {desc}
                            </div>
                        </div>
                    </div>
                    <WrapperContainer />
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
