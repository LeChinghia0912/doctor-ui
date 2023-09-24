import React from 'react';
import styles from './ButtonHeader.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ButtonProps {
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <div style={{ width: '80%' }}>
            <button className={cx('style')} onClick={onClick}>
                <div style={{ color: '#fff' }}>Tiếp tục</div>
            </button>
        </div>
    );
};

export default Button;
