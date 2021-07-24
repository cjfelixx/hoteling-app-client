import styled from 'styled-components';
import 'typeface-poppins';

export const Container = styled.div`
  padding: 0 1rem;
  width: 100%;

  .bold {
    font-weight: bold;
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
  }
`;

export const Heading = styled.h5`
  font-family: Poppins;
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 3px;
`;

export const Content = styled.div`
  height: 80vh;
  width: 80vw;
  padding: 20px;
  margin: 10px;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const ReservationNotFound = styled.div`
  color: #888;
  font-size: 0.9rem;
  text-align: center;
  padding: 3rem 0;
`;

export const ProfileContainer = styled.div`
background-color: white;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;
height: calc(300px);
margin 30px 0;

`;