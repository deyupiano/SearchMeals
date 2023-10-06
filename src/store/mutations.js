
export function setSearchedMeals(state, meals) {
  debugger
  state.searchedMeals = meals || []
}
export function setMealsByLetter(state, meals) {
  debugger
  state.mealsByLetter = meals || []
}
export function setMealsByIngredients(state, meals) {
  debugger
  state.mealsByIngredient = meals || []
}
export function setIngredient(state, ingredient) {
  state.ingredient = ingredient
}
export function toggleEditPost(state, payload) {
  state.editPost = payload
}

export function setProfileInfo(state, data) {
  debugger
  state.userToken = data.token;
  state.profileId = data.profileId;
  state.profileFirstName = data.firstName;
  state.profileLastName = data.lastName;
  state.profileEmail = data.email;
  state.profileUsername = data.firstName + " " + data.lastName;
}
export function setProfileInitials(state, doc) {
  var init = state.profileFirstName.match(/(\b\S)?/g).join("") +
  state.profileLastName.match(/(\b\S)?/g).join("");
    //var init =  state.profileFirstName.substring(0, 1) + "" +  state.profileLastName.substring(0, 1);
    state.profileInitials = init.toUpperCase();
}

export function updateUser(state, payload) {
   state.user = payload;
}

export function changeFirstName(state, payload) {
  state.profileFirstName = payload;
}
export function changeLastName(state, payload) {
  state.profileLastName = payload;
}
export function changeUsername(state, payload) {
  state.profileUsername = payload;
}