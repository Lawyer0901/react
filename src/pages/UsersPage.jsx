import { Button } from 'components/Button/Button';
import { UsersList } from 'components/UsersList/UsersList';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'redux/users/users.operations';
import { usersSelector } from 'redux/users/users.selectors';

const UsersPage = () => {
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();
  const showUsers = () => {
    dispatch(getUsers());
  };
  return (
    <>
      <Button text="Show users list" clickHandler={showUsers} />
      {users.length > 0 && <UsersList />}
    </>
  );
};

export default UsersPage;
