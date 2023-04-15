import styled from '@emotion/styled';

export const Name = styled.span`
  text-align: left;
  font-size: 22px;
  color: var(--primary);
  flex-basis: 33.333%;
`;

export const Number = styled.span`
  text-align: right;
  font-weight: 500;
  font-size: 22px;
  color: var(--accent);
  flex-basis: 33.333%;
`;

export const Btn = styled.button`
  padding: 5px 15px;
  flex-basis: 15%;
  font-size: 18px;
  font-weight: 500;
  color: var(--red);
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--red);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    color: var(--bcg);
    background-color: var(--red);
    border-color: var(--accent);
  }
`;
