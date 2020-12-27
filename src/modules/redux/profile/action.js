import actionType from './actionType';

const setProfile = (value) => ({
  type: actionType.SET_PROFILE,
  value,
});

export { setProfile };
