function  lock () {

const user = {

"username" : "admin",

"password" : "12345",

};
delete user.password;

return user;
}



console.log(lock());
