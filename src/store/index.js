import Vue from 'vue';
import Vuex from 'vuex';
import { userprofiledata } from '../data/userprofile-data-service';

Vue.use(Vuex)

const state = {
  users: [{
    "userid":"A123456",
    "isActive": "true",
    "environment": "dev",
    "role": "processor",
    "profile": "csr",
    "mode": "internal"
},
{
    "userid":"A999999",
    "isActive": "true",
    "environment": "qa",
    "role": "manager",
    "profile": "csr",
    "mode": "internal"
},
{
    "userid":"A888888",
    "isActive": "true",
    "environment": "qa",
    "role": "processor",
    "profile": "ca",
    "mode": "internal"
},
{
    "userid":"A777777",
    "isActive": "true",
    "environment": "dev",
    "role": "callTaker",
    "profile": "sales",
    "mode": "internal"
}],
  currentUser: "A777777",

};


const mutations = {
  getusers(state, users) {
    state.users = users;
  },
  setuser(state, currentUser) {
    state.currentUser = currentUser;
  }
  
};


const actions = {
  async getusersaction({commit}) {
    const users = await userprofiledata.getusers();
    commit('getusers', users);
  },
  setcurrentuseraction({commit}, userid) {
    commit('setuser', userid);
  }
};


const getters = {
  getuserbyid: state => id => state.users.find(u => u.userid === id),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
