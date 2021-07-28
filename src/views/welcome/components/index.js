import styled from 'styled-components';
import 'typeface-poppins';

import theme from "../../../components/theme";


export const Container = styled.div`
display: flex;
flex-direction: column;
  width: 90%;
  .section {
    margin: 1rem 0;
  }
  .bold {
    font-weight: bold;
  }
`;

export const BigText = styled.div`
  font-family: poppins;
  font-weight: Light;
  font-size: 80px;
  text-align:center;
  margin 200px 0 10px 0;  
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

// export const Login = styled.button`
//   font-family: Poppins;
//   background-color: ${theme.colors.primary};
//   transition: all 0.3s ease;
//   margin: 1px;
//   font-weight: 300;
//   padding: 9px 13px;
//   margin: 1px;
//   width: fit-content;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.7;
//   }
// `;
export const HeadingContainerSpaceBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  background-color: white;
  height: 80vh;
  width: 80vw;

  padding: 20px;
  margin: 10px;
  box-sizing: border-box;
  border-radius: 8px;
`;
