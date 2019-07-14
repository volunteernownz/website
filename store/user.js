export const state = () => ({
  uid: '',
  username: '',
  name: '',
  email: '',
  is_org: false,
});

export const mutations = {

  loginUser(state, {email, uid, is_org, name}) {
    state.email = email;
    state.uid = uid;
    state.is_org = is_org;
    state.name = name;
  },

  logout(state) {
    state.email = '';
    state.uid = '';
    state.is_org = '';
  },

};
