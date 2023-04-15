import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: var(--secondary);
`;

export const Input = styled.input`
  margin-top: 10px;
  padding: 5px 10px;
  width: 100%;
  font-size: 24px;
  color: var(--primary);
  background-color: transparent;
  border: 1px solid var(--accent);
  border-radius: 5px;
  box-shadow: var(--inset-shadow);
`;
