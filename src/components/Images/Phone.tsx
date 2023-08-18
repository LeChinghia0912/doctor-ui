import React from 'react';
import icon from '../../assets/Icons/index';

const Phone: React.FC = () => {
    return (
        <div>
            <img
                src={icon.phone.default}
                alt="phoneSupport"
                style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                }}
            />
        </div>
    );
};

export default Phone;
