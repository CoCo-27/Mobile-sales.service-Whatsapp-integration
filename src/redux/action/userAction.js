export const Login = function (userInfo) {
  return {
    type: "user/login",
    payload: { ...userInfo },
  };
};
export const Loginadmin = function (userInfo) {
  return {
    type: "admin/login",
    payload: { ...userInfo },
  };
};
