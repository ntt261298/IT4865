
export const createUser = async (user) =>{
  const res = await fetch('http://178.128.217.110:8302/user', {
    method: 'POST',
    body: JSON.stringify(user)
  });
  return res;
}