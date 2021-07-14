import styled from 'styled-components';

import 'typeface-poppins';

export const Container = styled.div`

  // padding: 0 1rem;
  width: 90%;
  .section {
    margin: 1rem 0;
  }
  .bold {
    font-weight: bold;
  }
`;

export const BigText = styled.div`
  font-family: Poppins;
  font-weight: Light;
  font-size: 80px;
  margin 200px 200px;  
  white-space: nowrap;
  
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
