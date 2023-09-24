import React, { useState, ChangeEvent } from 'react';
import styles from './input.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

interface PasswordInputProps {
    setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ setPassword }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    };

    return (
        <div className={cx('input')}>
            <div className={cx('input-icon')}>
                <input
                    className={cx('form-control')}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu....."
                    onChange={handlePasswordChange}
                />
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    style={{
                        position: 'absolute',
                        top: '17px',
                        right: '20px',
                        fontSize: '20px',
                        cursor: 'pointer',
                    }}
                    onClick={togglePasswordVisibility}
                />
            </div>
            <div className={cx('flag-dropdown')}>
                <div className={cx('selected-flag')}></div>
            </div>
            Quên mật khẩu
            <div style={{ height: '15px' }}></div>
        </div>
    );
};

export default PasswordInput;
