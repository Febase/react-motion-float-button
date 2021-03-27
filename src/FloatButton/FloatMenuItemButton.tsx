import React, { CSSProperties, ReactElement } from 'react';

import styled from '@emotion/styled';
interface Props {
  containerStyle?: CSSProperties;
  buttonColor?: string;
  icon?: JSX.Element | React.ReactElement;
  onClick?: () => void;
}

function FloatMenuItemButton(props: Props): ReactElement {
  const { containerStyle, icon = 'icon', buttonColor = '#ffffff', onClick } = props;

  return (
    <Container style={containerStyle} onClick={onClick} buttonColor={buttonColor}>
      {icon}
    </Container>
  );
}

interface ContainerStyledType {
  buttonColor: string;
}

const Container = styled.button<ContainerStyledType>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: none;
  background-color: ${({ buttonColor }) => buttonColor};
  color: #fff;
  border-radius: 50%;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
`;

export default FloatMenuItemButton;
