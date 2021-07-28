import React from 'react';
import styled from 'styled-components';
import map from '../assets/images/18th-floorplan.png';

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  width: calc(100vw - 100px);
  margin-top: 20px;
  text-align: center;
  padding: 30px 0 0 0;
  @media screen and (max-width: 900px) {
    width: 100vw;
    border-radius: 0px;
  }
`;

export const Heading = styled.h5`
  text-align: left;
  font-family: Poppins;
  margin: 0 0 0 40px;
  width: 100%;
  font-size: 1.5rem;
  @media screen and (max-width: 900px) {
    width: 100vw;
    border-radius: 0px;
  }
`;

const Map = props => {
  return (
    <Container>
      <Heading>Map</Heading>
      <img style={{ width: `calc(100vw - 160px)`, margin: '20px 30px' }} src={map} alt="map" />
    </Container>
  );
};

export default Map;
