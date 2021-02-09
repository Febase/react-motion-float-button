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
        <ItemWrapper>
          Direction.BOTTOM
          {renderFloatButton(Direction.BOTTOM)}
        </ItemWrapper>
        <ItemWrapper>
          Direction.TOP
          {renderFloatButton(Direction.TOP)}
        </ItemWrapper>
        <ItemWrapper>
          Direction.LEFT
          {renderFloatButton(Direction.LEFT)}
        </ItemWrapper>
        <ItemWrapper>
          Direction.RIGHT
          {renderFloatButton(Direction.RIGHT)}
        </ItemWrapper>
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

const ItemWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export default App;
