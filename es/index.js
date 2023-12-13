var crypto = function crypto(password) {
  console.log('password');
  return password;
};

var checkPermission = function checkPermission(role) {
  console.log('role');
  return role;
};

var sso = function sso(username) {
  console.log('username');
  return username;
};

// index.js
var index = {
  crypto: crypto,
  checkPermission: checkPermission,
  sso: sso
};

export { index as default };
