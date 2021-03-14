import { Direction, Size } from '../types';
import React, {CSSProperties, ReactElement, useState} from 'react';

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

  const handleSpread = () => {
    toggleSpread(prev => !prev);
  }

  return (
    <Container style={containerStyle} direction={direction}>
      <RootButton onClick={handleSpread} style={rootButtonContainerStyle} size={size} spacing={spacing / 2}>
        <RootButtonWrapper 
          isSpread={isSpread}
        >
          {renderRootButtonElement}
        </RootButtonWrapper>
      </RootButton>
      {renderChildren}
    </Container>
  );
}

type ContainerStyleProps = {
  direction: Direction;
}

const Container = styled.ul<ContainerStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  list-style: none;
  padding: 0;
  position: relative;
`;

interface ButtonContainer {
  size: Size;
  spacing: number;
}

const RootButton = styled.button<ButtonContainer>`
  z-index: 100;
  margin: ${({ spacing }) => spacing}px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    opacity: 0.6;
  }
`;

interface ButtonWrapperContainer {
  isSpread: boolean;
}

const RootButtonWrapper = styled.div<ButtonWrapperContainer>`
    z-index: 100;
    position: relative;
    
    transition: transform 0.3s ease-in-out;
    -ms-transition: -ms-transform 0.3s ease-in-out;
    -webkit-transition: -webkit-transform 0.3s ease-in-out;
    transform: ${({isSpread}) => (isSpread ? 'rotate(135deg)' : 'none')};
    -ms-transform: ${({isSpread}) => (isSpread ? 'rotate(135deg)' : 'none')};
    -webkit-transform: ${({isSpread}) => (isSpread ? 'rotate(135deg)' : 'none')};
`;

type ItemButtonStyleProps = {
  direction: Direction;
  order: number;
  isSpread: boolean;
} & ButtonContainer;

const ItemButton = styled.li<ItemButtonStyleProps>`
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
  margin: ${({ spacing }) => spacing}px;
  border-radius: 50%;
  display: flex;
  position: absolute;
  z-index: ${({order}) => 100 - order};
  top: ${({direction, isSpread, order}) => (((direction === Direction.BOTTOM) && isSpread) ? order * 80 : ((direction === Direction.TOP) && isSpread ? order * (-80) : 0))}px;
  right: ${({direction, isSpread, order}) => (((direction === Direction.LEFT) && isSpread) ? order * 80 : (((direction === Direction.RIGHT) && isSpread) ? order * (-80) : 0))}px;
  transition: all 0.4s ease 0s;
  opacity: ${({isSpread}) => isSpread ? 1 : 0};
`;

export default FloatingGroup;
