import styled from 'styled-components';
import theme from '../theme';

const ErrorText = styled.span`
  text-align: center;
  position: relative;
  font-weight: 500;
  margin: 1rem 0;
  font-size: 0.8rem;
  max-width: 250px;
  // line-height: 1.5;
  color: ${theme.forms.errorColor};
`;

export default ErrorText;
