import React from 'react';
import styles from './Introduce.module.scss';
import classNames from 'classnames/bind';
import IntroduceDataList from './introduceData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Introduce: React.FC = () => {
    return (
        <>
            <div className={cx('header')}>
                {IntroduceDataList.map((data) => (
                    <div key={data.id} className={cx('hospital')}>
                        <div className={cx('logo')}>
                            <img src={data.image} alt={data.title} />
                        </div>
                        <div className={cx('title')}>{data.title}</div>
                        <div className={cx('time')}>
                            <FontAwesomeIcon icon={faClock} style={{ color: 'rgb(255, 181, 74)' }} />
                            {data.time}
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx('subject')}>
                {IntroduceDataList.map((data) => (
                    <div key={data.id} className={cx('subjectItem')}>
                        <div className={cx('updating')}>
                            <p>{data.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Introduce;
