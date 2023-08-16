import React, { useContext } from 'react';
import MyContext from './MyContext';

const MyComponent: React.FC = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("MyComponent must be used within a MyProvider");
  }

  const { data, toggleData } = context;

  return (
    <div>
      <p>{data}</p>
      <button onClick={toggleData}>Thay đổi</button>
    </div>
  );
};

export default MyComponent;
