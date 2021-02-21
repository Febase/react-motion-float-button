import { Direction, Size } from '../types';
import React, { CSSProperties, ReactElement } from 'react';
import styled from '@emotion/styled';
import { Add } from '@emotion-icons/remix-line';

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
    <ItemButton key={index} size={size} spacing={spacing / 2}>
      {child}
    </ItemButton>
  ));

  return (
    <Container style={containerStyle} direction={direction}>
      <RootButton style={rootButtonContainerStyle} size={size} spacing={spacing / 2}>
        <Add size="70%" color="#397CCA" />
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
  flex-direction: ${({ direction }) => direction};
  list-style: none;
  padding: 0;
`;

// @ts-ignore
const RootButton = styled((props) => (
  <li>
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
  margin: ${({ spacing }) => spacing}px;

  &:focus {
    outline: none;
  }
`;

const ItemButton = styled.li<ButtonContainer>`
  width: ${({ size }) => `${size}`}px;
  height: ${({ size }) => `${size}`}px;
  margin: ${({ spacing }) => spacing}px;
  border-radius: 50%;
  display: flex;
`;

export default FloatingGroup;
