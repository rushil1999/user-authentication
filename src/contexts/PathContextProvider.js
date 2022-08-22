import React, {createContext, useState} from 'react';

export const PathContext = createContext(null);

const PathContextProvider = ({children}) => {
  const [publicPathList, setPublicPathList] = useState([]);
  const [privatePathList, setPrivatePathList] = useState([]);

  
  return(
    <PathContext.Provider value={[publicPathList, privatePathList, setPublicPathList, setPrivatePathList]}>
      {children}
    </PathContext.Provider>
  )
}

export default PathContextProvider;