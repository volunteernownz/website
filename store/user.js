function getFromLS(key, defaultData = null) {
  if (!process.browser) return defaultData;
  const json = window.localStorage.getItem(key);
  if (!json) { return defaultData; }
  try {
    return JSON.parse(json);
  } catch(e) {
    return defaultData;
  }
};

function saveObjToLS(key, obj) {
  if (!process.browser) { return false; }
  try {
    if (obj) {
      window.localStorage.setItem(key, JSON.stringify(obj));
    } else {
      window.localStorage.removeItem(key);
    }
    return true;
  } catch(e) { return false; }
}

export const state = () => ({
  username: '',
  name: '',
  surname: '',
  email: '',
});

export const mutations = {
  rehydrate(state) {
    const presistedState = getFromLS('user', {});
    Object.entries(presistedState).forEach(([key, value]) => {
      state[key] = value;
    });
    state = { ...getFromLS('user', {}) };
  },

  loginUser(state, {email}) {
    state.email = email;
    saveObjToLS('user', {email});
  },

  logout(state) {
    state.email = '';
    saveObjToLS('user', null);
  },
}
