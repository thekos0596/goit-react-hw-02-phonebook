import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 0px auto 20px;
  padding: 20px;
  max-width: 50%;
`;
export const InputWrapper = styled.div`
  margin-bottom: 30px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  color: var(--primary);
`;

export const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  font-size: 24px;
  color: var(--primary);
  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: 5px;
`;

export const Btn = styled.button`
  padding: 10px 25px;
  font-size: 24px;

  color: var(--accent);
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--accent);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: var(--bg);
    background-color: var(--accent);
  }
`;
