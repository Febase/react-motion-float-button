import { Direction, Size } from '../types';
import React, {CSSProperties, ReactElement, useEffect, useState} from 'react';

import { Add } from '@emotion-icons/remix-line';
import styled from '@emotion/styled';

interface Props {
  children: JSX.Element[];
  containerStyle?: CSSProperties;
  size?: Size | number;
  direction?: Direction;
  rootButtonElement?: JSX.Element | string;
  rootButtonContainerStyle?: CSSProperties;
  spacing?: number;
}

function FloatingGroup(props: Props): ReactElement {
  const {
    containerStyle,
    size = Size.REGULAR,
    children,
    direction = Direction.LEFT,
    rootButtonElement,
    rootButtonContainerStyle,
    spacing = 20,
  } = props;
  const [isSpread, toggleSpread] = useState(false);

  const renderChildren = children.map((child, index) => (
    <ItemButton key={index} size={size} spacing={spacing / 2} direction={direction} order={index+1} isSpread={isSpread}>
      {child}
    </ItemButton>
  ));

  const renderRootButtonElement = rootButtonElement || (
    <Add size="70%" color="#397CCA" />
  );

  const closeButtonHandler = (isSpread: boolean) => {
    if(isSpread) toggleSpread(false);
    return null;
  }

  return (
    <Container style={containerStyle} direction={direction}>
      <RootButton style={rootButtonContainerStyle} size={size} spacing={spacing / 2}>
        <RootButtonWrapper onMouseEnter={() => toggleSpread(true)} onClick={() => closeButtonHandler(isSpread)} isSpread={isSpread}>{renderRootButtonElement}</RootButtonWrapper>
      </RootButton>
      {renderChildren}
    </Container>
  );
}

interface ContainerStyledType {
  direction: Direction;
}

interface ButtonContainer {
  size: Size;
  spacing: number;
  direction: Direction;
  order: number;
  isSpread: boolean;
}

interface ButtonWrapperContainer {
  isSpread: boolean;
}

const Container = styled.ul<ContainerStyledType>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  list-style: none;
  padding: 0;
  position: relative;
`;

// @ts-ignore
const RootButton = styled((props) => (
  <li style={{zIndex: 100}}>
    <button {...props}></button>
  </li>
))<ButtonContainer>`
  border: none;
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  margin: ${({ spacing }) => spacing}px;

  &:focus {
    outline: none;
  }
`;

const RootButtonWrapper = styled.div<ButtonWrapperContainer>`
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    -ms-transition: -ms-transform 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    position: relative;
    transform: ${({isSpread}) => (isSpread ? 'rotate(135deg)' : 'none')};
    -ms-transform: ${({isSpread}) => (isSpread ? 'rotate(135deg)' : 'none')};
    -webkit-transform: ${({isSpread}) => (isSpread ? 'rotate(135deg)' : 'none')};
`;

const ItemButton = styled.li<ButtonContainer>`
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
  margin: ${({ spacing }) => spacing}px;
  border-radius: 50%;
  display: flex;
  position: absolute;
  z-index: ${({order}) => 100 - order};
  top: ${({direction, isSpread, order}) => (((direction === Direction.BOTTOM) && isSpread) ? order * 80 : ((direction === Direction.TOP) && isSpread ? order * (-80) : 0))}px;
  right: ${({direction, isSpread, order}) => (((direction === Direction.LEFT) && isSpread) ? order * 80 : (((direction === Direction.RIGHT) && isSpread) ? order * (-80) : 0))}px;
  transition: all 1s ease 0s;
`;

export default FloatingGroup;
