import { createStore } from 'vuex';
import EventService from '@/services/EventService.js';

export default createStore({
  state: {
    user: 'Irtaza Mubarik',
    events: [],
    event: {},
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, event) {
      state.events = event;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchEvents({ commit }) {
      EventService.getEvents()
        .then((response) => {
          commit('SET_EVENTS', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fetchEvent({ commit }, id) {
      EventService.getEvent(id)
        .then((response) => {
          commit('SET_EVENT', response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
