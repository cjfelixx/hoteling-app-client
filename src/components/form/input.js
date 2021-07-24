import styled from 'styled-components';
import theme from '../theme';

const Input = styled.input`
  margin: 10px 5px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  padding: 7px;
  box-sizing: border-box;
  width: 100%;
  height: 2.5rem;
  :focus {
    outline-color: ${theme.colors.primary};
  }
`;

export default Input;
