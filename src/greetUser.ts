import User from "./types/user";

function verifyUser(user: User):boolean {
  if (user.role === 'admin') {
    return true;
  }
  return false;
}

function greetUser(user: User): string {
  console.log(`Hello ${user.name}`);
  if (verifyUser(user)) {
    console.log('You have admin privileges');
  }
  return `Hello ${user.name}`;
}

export {verifyUser, greetUser};
