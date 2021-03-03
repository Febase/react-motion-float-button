import { Direction, FloatMenuItemButton, FloatingGroup, Size } from './FloatButton';
import { Facebook, Instagram, Share } from '@emotion-icons/remix-fill';
import React, { ReactElement } from 'react';

import { Twitter } from '@emotion-icons/simple-icons';
import styled from '@emotion/styled';

function App(): ReactElement {
  const renderFloatButton = (direction: Direction) => (
    <FloatingGroup size={Size.REGULAR} direction={direction}>
      <FloatMenuItemButton icon={<Twitter size="50%" />} buttonColor="#00ACEE" />
      <FloatMenuItemButton icon={<Instagram size="50%" />} buttonColor="#4f5bd5" />
      <FloatMenuItemButton icon={<Facebook size="50%" />} buttonColor="#3B5998" />
      <FloatMenuItemButton icon={<Share size="50%" />} buttonColor="#16dbc2" />
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
        <HorizonWrapper>
          <ItemWrapper>
            Direction.LEFT
            {renderFloatButton(Direction.LEFT)}
          </ItemWrapper>
          <ItemWrapper>
            Direction.RIGHT
            {renderFloatButton(Direction.RIGHT)}
          </ItemWrapper>
        </HorizonWrapper>
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

const HorizonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export default App;
