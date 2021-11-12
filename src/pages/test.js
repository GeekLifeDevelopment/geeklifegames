import React from "react";
import styled from "styled-components";

const StyledBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 20px;
  .boxes {
    background-color: green;
    text-align: center;
  }
`;

const TestPage = () => {
  return (
    <StyledBoxes>
      <div className='boxes'>something</div>
      <div className='boxes'>something</div>
      <div className='boxes'>something</div>
      <div className='boxes'>something</div>
      <div className='boxes'>something</div>
      <div className='boxes'>something</div>
      <div className='boxes'>something</div>
      <div className='boxes'>something</div>
      <div className='boxes'>something</div>
    </StyledBoxes>
  );
};

export default TestPage;
