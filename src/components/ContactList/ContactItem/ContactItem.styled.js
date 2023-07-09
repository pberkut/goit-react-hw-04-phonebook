import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  margin-top: 1px;
  :hover {
    color: blue;
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ButtonBlock = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Button = styled.button`
  /* border: none; */
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  line-height: 0;
  float: right;

  /* background: transparent; */
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const Input = styled.input`
  width: 140px;
  font-size: 15px;
`;
