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

export const Heading = styled.div`
background-color: red;
  font-family: Poppins;
  font-weight: Bold;
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

export const ReservationFeed = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 32px 0 32px 32px;
`;

export const ReservationFeedIcon = styled.img`
  position: absolute;
  width: 22px;
  left: -12px;
  top: 8px;
  z-index: 1;
`;

export const ReservationFeedItem = styled.li`
  position: relative;
  background-color: white;
  // margin-bottom: 32px;
  padding: 4px 10px;
  border: .5px solid gray;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  :first-child {
    border-top: transparent;
  }
  :last-child {
    border-bottom: transparent;
  }
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
    background-color: white;
    padding: 30px ;
    border-radius: 4px;
    cursor: pointer;
  }
  :hover {
    border-left: 2px solid blue;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
`;

export const ReservationNotFound = styled.div
`color:#888;
font-size: 0.9rem;
text-align: center;
padding: 3rem 0;
`
;