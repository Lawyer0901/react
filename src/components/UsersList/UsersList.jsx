import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { usersSelector } from 'redux/users/users.selectors';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export const UsersList = () => {
  const [userId, setUsersId] = useState('');
  const users = useSelector(usersSelector);
  const closeModal = () => {
    setUsersId('');
  };
  return (
    <>
      <ul>
        {users.map(({ id, name, email }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{email}</p>
            <Button text="Delete Users" clickHandler={() => setUsersId(id)} />
          </li>
        ))}
      </ul>
      {userId && <Modal id={userId} closeModal={closeModal} />}
    </>
  );
};
