import axiosClient from '../axiosClient';

export function searchMeals({ commit }, keyword) {
  axiosClient.get(`meals/searchmealsbyletter/${keyword}`)
    .then(({ data }) => {    
      commit('setSearchedMeals', data)
    })
}

export function searchMealsByLetter({ commit }, letter) {
  axiosClient.get(`meals/searchMealByLetter/${letter}`)
    .then(({ data }) => {
      debugger
      commit('setMealsByLetter', data)
    })
}

export function searchMealsByIngredient({ commit }, ing) {
  debugger
  axiosClient.get(`meals/searchMealByIngredient/${ing}`)
    .then(({ data }) => {
      commit('setMealsByIngredients', data)
    })
}

export async function updateState(context, params) {
  context.state[params.key] = params.value;
};
export async function  setRequestToken(context) {
  if (context.state.accessToken) {
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${context.state.accessToken}`;
  }
}

export async function  getCurrentUser({commit}) {
  debugger
  const dbResults = await axiosClient.get(`identity/currentuser`);
  commit("setProfileInfo", dbResults);
  commit("setProfileInitials");
}
export async function updateUserSettings({commit, state}) {
    var data = {
      firstName: state.profileFirstName,
      lastName: state.profileLastName,
      username: state.profileUsername,
    }
    let result = await axiosClient.post('UserProfiles/'+ state.profileId +'', data)
    //let result = await axiosClient.post(`UserProfiles/${state.profileId}, data)
    if(result.status === 200 ||result.status === 201){
      debugger
      store.commit('setProfileInfo', data)
      commit("setProfileInitials");
    }else{

    }

}

    