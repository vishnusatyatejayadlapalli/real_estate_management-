export const login = async (credentials) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Logging in with", credentials);
        resolve({ username: credentials.username });
      }, 1000);
    });
  };
  
  export const register = async (userInfo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Registering user", userInfo);
        resolve({ username: userInfo.username });
      }, 1000);
    });
  };
  