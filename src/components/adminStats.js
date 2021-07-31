import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  margin-top: 20px;
  width: calc(100vw - 100px);
  list-style-type: none;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  align-items: stretch;
  // padding: 32px 0 32px 32px;

  @media screen and (max-width: 900px) {
    width: 100vw;
    // grid-template-columns: repeat(1, 1fr);
    // padding: 10px;
  }
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  height: 150px;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 900px) {
  }
`;

const CardTitle = styled.span`
  font-family: Poppins;

  margin: 5px 0 0 10px;
  width: 100%;
  font-size: 0.9rem;

  @media screen and (max-width: 900px) {
    // width: 100vw;
    border-radius: 0px;
  }
`;

const CardStat = styled.span`
  font-family: Poppins;
  font-size: 60px;
`;
const AdminStats = props => {
  const { numNewBookings, numUsersToday, numTotalBookings, avgWeeklyBookings } = props;

  return (
    <Container>
      <StatCard>
        <CardStat>{numNewBookings}</CardStat>
        <CardTitle>New Bookings</CardTitle>
      </StatCard>
      <StatCard>
        <CardStat>{numUsersToday}</CardStat>
        <CardTitle>Employees today</CardTitle>
      </StatCard>
      <StatCard>
        <CardStat>{numTotalBookings}</CardStat>
        <CardTitle>Upcoming bookings</CardTitle>
      </StatCard>
      <StatCard>
        <CardStat>{avgWeeklyBookings}</CardStat>
        <CardTitle>Bookings this week</CardTitle>
      </StatCard>
    </Container>
  );
};

export default AdminStats;
