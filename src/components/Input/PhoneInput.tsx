import React from 'react';

interface PhoneInputProps {
    setPhone: (phone: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ setPhone }) => {
    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    return (
        <div className="input">
            <input className="form-control" placeholder="+84" onChange={handlePhone} id="phone" />
            <div className="flag-dropdown">
                <div className="selected-flag"></div>
            </div>
            <div style={{ height: '15px' }}></div>
        </div>
    );
};

export default PhoneInput;
