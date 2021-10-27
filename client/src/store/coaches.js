export default {
  namespaced: true,
  state() {
    return {
      coachList: [],
      coachFields: [],
    };
  },
  getters: {
    coachList(state) {
      return state.coachList;
    },
    coachFields(state) {
      return state.coachFields;
    },
  },
  mutations: {
    fetchCoaches(state, coachList) {
      const coachFields = [];
      for (let coach of coachList) {
        for (let field of coach.fields) {
          if (!coachFields.includes(field)) {
            coachFields.push(field);
          }
        }
      }
      state.coachList = coachList;
      state.coachFields = coachFields.map((field) => {
        return {
          id: field,
          label: `${field.slice(0, 1).toUpperCase()}${field.slice(1)}`,
        };
      });
    },
  },
  actions: {
    async fetchCoaches(context) {
      try {
        const response = await fetch("http://localhost:3000/coaches");
        const coaches = await response.json();
        context.commit("fetchCoaches", coaches);
        return;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
