function verifyUser(user) {
  if (user.role === 'admin') {
    return true;
  }
  return false;
}

function greetUser(user) {
  console.log(`Hello ${user.name}`);
  if (verifyUser(user)) {
    console.log('You have admin privileges');
  }
  return `Hello ${user.name}`;
}

module.exports = greetUser;
