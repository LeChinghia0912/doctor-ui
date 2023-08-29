import React, { useState, ChangeEvent } from 'react';
import styles from './input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InputForm: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputNumber = event.target.value.replace(/\D/g, '');
        setPhoneNumber(inputNumber);
    };

    return (
        <div className={cx('input')}>
            <input
                className={cx('form-control')}
                placeholder="+84"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
            />
            <div className={cx('flag-dropdown')}>
                <div className={cx('selected-flag')}></div>
            </div>
            <div style={{ height: '15px' }}></div>
        </div>
    );
};

export default InputForm;
