import styled from 'styled-components';

export const ModalMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: grey;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  width: 50%;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 15;
`;
