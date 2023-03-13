import React, { createContext, useState } from 'react';

const initialState = {
  open: false,
  src: null
};
export const IFrameSiderContext = createContext(null);

export const IFrameSiderProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const onOpen = (values) => {
    setState({ ...values, open: true });
  };

  const onClose = () => {
    setState({ ...initialState });
  };

  return (
    <IFrameSiderContext.Provider
      value={{
        ...state,
        onOpen,
        onClose
      }}
    >
      {children}
    </IFrameSiderContext.Provider>
  );
};

export const IFrameSiderConsumer = IFrameSiderContext.Consumer;
