const createAccountVal = () => {
  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var password = document.getElementById('password')
  var confirm = document.getElementById('confirmPassword')
  var validateEmail = function(email) {
      var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
      return re.test(email)
  };
  var mail = validateEmail(email.value)

  if(name.value.length < 3 || name.value.length > 32){
    console.log('name must be more than 2 or less than 33')
    document.getElementById('span-name').style.display = 'block';
  }
  if(mail === false){
    console.log('Please input your email correctly')
    document.getElementById('span-email').innerHTML = 'Please input your email correctly';
    document.getElementById('span-email').style.display = 'block';
    document.getElementById('span-email').style.display = 'block';
  }
  if(password.value < 8){
    console.log('Password must be more than 7')
    document.getElementById('span-password').style.display = 'block';
  }
  if(password.value !== confirm.value){
    console.log('Please re-type your password correctly')
    document.getElementById('span-confirm').style.display = 'block';
  }
}

const loginAccountVal = () => {
  var email = document.getElementById('login-email')
  var password = document.getElementById('login-password')
  var validateEmail = function(email) {
      var re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
      return re.test(email)
  };
  var mail = validateEmail(email.value)

  if(mail === false){
    console.log('Please input your email correctly')
    document.getElementById('span-login-email').innerHTML = 'Please input your email correctly';
    document.getElementById('span-login-email').style.display = 'block';
  }

  if(password.value < 1){
    console.log('Please input your password')
    document.getElementById('span-login-password').style.display = 'block';
  }
}

module.exports = {
  createAccountVal,
  loginAccountVal
}
