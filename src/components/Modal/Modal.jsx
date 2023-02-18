import { Button } from 'components/Button/Button';
import { ModalMain, ModalContent } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/users/users.operations';

export const Modal = ({ id, closeModal }) => {
  const dispatch = useDispatch();

  const yesButton = id => {
    dispatch(deleteUser(id));
    closeModal();
  };
  // const noButton = () => {

  // }

  return (
    <ModalMain>
      <ModalContent>
        <p>Are you Sure to Delete User?</p>
        <ul>
          <li>
            <Button text="YES" clickHandler={() => yesButton(id)} />
          </li>
          <li>
            <Button text="NO" clickHandler={closeModal} />
          </li>
        </ul>
      </ModalContent>
    </ModalMain>
  );
};
