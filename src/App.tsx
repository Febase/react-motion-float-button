import { Direction, FloatMenuItemButton, FloatingGroup, Size } from './FloatButton'
import React, { ReactElement } from 'react';

import styled from 'styled-components';

function App(): ReactElement {
  const renderFloatButton = (direction: Direction) => (
    <FloatingGroup 
      size={Size.REGULAR} 
      direction={direction}
      rootButtonElement="Root"
    >
      <FloatMenuItemButton icon="1" />
      <FloatMenuItemButton icon="2" />
      <FloatMenuItemButton icon="3" />
      <FloatMenuItemButton icon="4" />
    </FloatingGroup>
  );
  return (
    <Container>
      <Wrapper>
        {renderFloatButton(Direction.BOTTOM)}
        {renderFloatButton(Direction.TOP)}
        {renderFloatButton(Direction.LEFT)}
        {renderFloatButton(Direction.RIGHT)}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #f2f2f2;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

export default App;
