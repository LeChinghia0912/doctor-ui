import React from 'react';
import styles from './ButtonBack.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateBack } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const ButtonBack: React.FC = () => {
    return (
        <div>
            <button className={cx('btnBack')}>
                <span>Quay lại</span>
                <FontAwesomeIcon icon={faArrowRotateBack} />
            </button>
        </div>
    );
};

export default ButtonBack;
