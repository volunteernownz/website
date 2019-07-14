export const state = () => ({
  username: '',
  name: '',
  surname: '',
  email: '',
})

export const mutations = {
  loginUser(state, {email}) {
    state.email = email;
  },
}
