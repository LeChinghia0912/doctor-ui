import React from 'react';
import styles from './WrapperContainer.module.scss';
import classNames from 'classnames/bind';
import WrapperItem from '../../../components/ItemWrapper/WrapperItem';

const cx = classNames.bind(styles);

const WrapperContainer: React.FC = () => {
    return (
        <div className={cx('wrapperContainer')}>
            <WrapperItem />
        </div>
    );
};

export default WrapperContainer;
