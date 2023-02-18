import { Button } from 'components/Button/Button';

import { useDispatch } from 'react-redux';
import { getUsers } from 'redux/users/users.operations';

const UsersPage = () => {
  const dispatch = useDispatch();
  const showUsers = () => {
    dispatch(getUsers());
  };
  return <Button text="Show users list" clickHandler={showUsers} />;
};

export default UsersPage;
