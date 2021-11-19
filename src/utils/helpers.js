export function validateName(name) {
  if(name) {
    return true;
  }
  return false;
}

export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(String(email).toLowerCase())) {
   return true;
  }
  else{
    return false;
  }
}

export function validateMessage(message) {
  if(message) {
    return true;
  }
  return false;
}

