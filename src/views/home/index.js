import React, { useEffect } from 'react';
import { getRelativeTimeFromDate,formatDate } from '../../utils/date';
import Spinner from '../../components/spinner';
import Button from '../../components/button';
import {
  Container,
  Content,
  Heading,
  HeadingContainerSpaceBetween,
} from './components';

const Home = () => {

  return (
    <>
      <Container>
      
        <div className="section">
        <Heading>Reservation</Heading>
        </div>
      </Container>
      <Content>Input</Content>
    </>
  );
};

export default Home;
