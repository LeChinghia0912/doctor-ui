import React, { useState } from 'react';
import styles from './ButtonStyles.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ButtonTagProps {
    bgColor: string;
    textColor: string;
    title: string;
}

const ButtonTag: React.FC<ButtonTagProps> = ({ bgColor, textColor, title }) => {
    const [buttonColors, setButtonColors] = useState({
        bgColor,
        textColor,
    });

    const changeColor = () => {
        setButtonColors((prevColors) => ({
            bgColor: prevColors.bgColor === '#ebf9fd' ? '#00b5f1' : '#ebf9fd',
            textColor: prevColors.bgColor === '#ebf9fd' ? '#fff' : '#11a2f3',
        }));
    };

    return (
        <button
            onClick={changeColor}
            className={cx('btnAntd')}
            style={{ fontWeight: '550', backgroundColor: buttonColors.bgColor, color: buttonColors.textColor }}
        >
            <span>{title}</span>
        </button>
    );
};

export default ButtonTag;
