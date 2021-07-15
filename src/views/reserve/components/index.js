import styled from 'styled-components';

import 'typeface-poppins';

export const Container = styled.div`
background-color: red;
  // padding: 0 1rem;
  width: 90%;

  // .section {
  //   margin: 1rem 0;
  // }

`;

export const Heading = styled.div`
background-color: green;
  font-family: Poppins;
  font-weight: Semi Bold;
  width: 100%;
  font-size: 48px;
  margin-bottom: 3px;
`;

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
