const isSessionStorageWorking = () => {
  try {
    sessionStorage["test"] = "test";
  } catch (e) {
    return false;
  }
  return true;
};

const getSessionStorage = () => {
  const real = isSessionStorageWorking();
  const store = real ? sessionStorage : {};
  return { real, store };
};

export const { real, store } = getSessionStorage();
