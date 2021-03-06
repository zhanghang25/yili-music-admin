import { removeToken, setToken } from '../../utils/auth.js'
import { login } from '../../api/user.js'

const state = () => ({
  nickname: '伊力',
  username: '',
  token: '',
  roles: []
})

const getters = {
  nicknameFirstWord: (state) => {
    return state.nickname.slice(0, 1)
  }
}

const actions = {
  // user login
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((response) => {
          // console.log(response)
          let authorization = response.headers['authorization']

          resolve(response)
          // const { data } = response
          commit('SET_TOKEN', authorization)
          setToken(authorization)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  logout({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
  }
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
