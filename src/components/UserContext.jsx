import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  // const [userAge, setUserAge] = useState(null)

  useEffect(() => {
    // Récupérez les informations de l'utilisateur à partir du sessionStorage (s'il en existe)
    const userInfoFromStorage = sessionStorage.getItem('user_info');
    // const userAgeFromStorage = sessionStorage.getItem('user_age')
    if (userInfoFromStorage) {
      setUserInfo(JSON.parse(userInfoFromStorage));
      // setUserAge(JSON.parse(userInfoFromStorage));
    }
  }, []);
console.log(userInfo)


  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
