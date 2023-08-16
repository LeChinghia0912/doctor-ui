import React, { createContext, useState } from 'react';

interface MyContextType {
  data: string;
  toggleData: () => void;
}

interface MyProviderProps {
  children: React.ReactNode;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [data, setData] = useState<string>('Initial data');

  const toggleData = () => {
    setData(data === 'Initial data' ? 'New data' : 'Initial data');
  };

  return (
    <MyContext.Provider value={{ data, toggleData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
