import styled from 'styled-components';
import 'typeface-poppins';

export const Container = styled.div`
  // padding: 0 1rem;
  width: 100%;
  // margin: 0 auto;
  // text-align: center;
  .bold {
    font-weight: bold;
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
  }
`;

export const Heading = styled.div`
  font-family: Poppins;
  font-weight: Bold;
  width: 100%;
  font-size: 48px;
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

export const ReservationFeed = styled.ol`
  display: grid;

  height: 80vh;
  width: 80vw;
  list-style-type: none;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  align-items: stretch;
  padding: 32px 0 32px 32px;

  @media screen and (max-width: 900px) {
    width: 100vw;
    grid-template-columns: repeat(1, 1fr);
    padding: 10px;
  }
`;

export const ReservationFeedItem = styled.li`
  width: 250px;
  height: 200px;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 10px;
  // margin-bottom: 32px;
  padding: 2px 16px;

  cursor: pointer;
  :before {
    content: attr(data-date);
    display: flex;
    width: 120px;
    position: absolute;
    text-align: center;
    justify-content: center;
    align-items: center;
    left: -60px;
    top: -22px;
    font-size: 12px;
    color: #999;
  }

  section {
    background-color: transparent;
    padding: 30px;
  }
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .workspace {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 12px;
  }
  .description {
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 900px) {
    width: calc(100%);
    display: flex;
    flex-direction: column;
  }
`;

export const ReservationNotFound = styled.div`
  color: #888;
  font-size: 0.9rem;
  text-align: center;
  padding: 3rem 0;
`;
