import { Direction, Size } from '../types'
import React, { ReactElement } from 'react';
import styled, { CSSProperties } from 'styled-components';

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
    rootButtonElement = <li>main</li>,
    rootButtonContainerStyle,
    spacing = 20,
  } = props;

  const renderChildren = children.map((child, index) => (
    <ItemButton key={index} size={size} spacing={spacing/2}>
      {child}
    </ItemButton>
  ));

  return (
    <Container style={containerStyle} direction={direction}>
      <RootButton 
        style={rootButtonContainerStyle} 
        size={size} 
        spacing={spacing/2}
      >
        {rootButtonElement}
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
}

const Container = styled.ul<ContainerStyledType>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({direction}) => direction};
  list-style: none;
`;

const RootButton = styled((props) => <li><button {...props}></button></li>)<ButtonContainer>`
  border: none;
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  border-radius: 30px;
  margin: ${({ spacing }) => spacing}px;

  &:focus {
    outline: none;
  }
`;

const ItemButton = styled.li<ButtonContainer>`
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
  margin: ${({ spacing }) => spacing}px;
  border-radius: 30px;
  display: flex;
`;

export default FloatingGroup;