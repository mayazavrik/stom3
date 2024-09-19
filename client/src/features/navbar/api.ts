import type { User } from '../logreg/type';

const fetchLogout = async (): Promise<User> => {
  const res = await fetch('/api/authLog/logout');
  const data: User = await res.json();
  return data;
};
export default fetchLogout;
