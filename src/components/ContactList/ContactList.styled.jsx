import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const ContactsItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border-radius: 5px;
  box-shadow: var(--main-shadow);
`;
