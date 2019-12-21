export const loadToken = () => {
  try {
    const seriallizedState = localStorage.getItem('token');
    if (seriallizedState === null) {
      return undefined;
    }
    return JSON.parse(seriallizedState);
  } catch (err) {
    return undefined;
  }
};

export const saveToken = (state) => {
  try {
    const seriallizedState = JSON.stringify(state);
    localStorage.setItem('token', seriallizedState);
  } catch (err) {
    console.error(err);
  }
};

export const saveUsername = (state) => {
  try {
    const seriallizedState = JSON.stringify(state);
    localStorage.setItem('username', seriallizedState);
  } catch (err) {
    console.error(err);
  }
};

export const loadUsername = () => {
  try {
    const seriallizedState = localStorage.getItem('username');
    if (seriallizedState === null) {
      return undefined;
    }
    return JSON.parse(seriallizedState);
  } catch (err) {
    return undefined;
  }
};

export const removeToken = (state) => {
  try {
    const seriallizedState = JSON.stringify(state);
    localStorage.removeItem('token', seriallizedState);
  } catch (err) {
    console.error(err);
  }
};

export const loadRole = () => {
  try {
    const seriallizedRole = localStorage.getItem('role');
    if (seriallizedRole === null) {
      return undefined;
    }
    return JSON.parse(seriallizedRole);
  } catch (err) {
    return undefined;
  }
};

export const saveRole = (role) => {
  try {
    const seriallizedRole = JSON.stringify(role);
    localStorage.setItem('role', seriallizedRole);
  } catch (err) {
    console.error(err);
  }
};

export const removeRole = (role) => {
  try {
    const seriallizedRole = JSON.stringify(role);
    localStorage.removeItem('token', seriallizedRole);
  } catch (err) {
    console.error(err);
  }
};