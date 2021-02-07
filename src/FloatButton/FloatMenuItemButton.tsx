import React, {ReactElement} from 'react';
import styled, {CSSProperties} from 'styled-components';

interface Props {
  containerStyle?: CSSProperties;
  buttonColor?: string;
  icon?: JSX.Element | string;
  onClick?: () => void;
}

function FloatMenuItemButton(props: Props): ReactElement {
  const { 
    containerStyle,
    icon = 'icon', 
    buttonColor = '#000', 
    onClick = () => console.log('Clicked!')
  } = props;
  
  return (
    <Container style={containerStyle} onClick={onClick} buttonColor={buttonColor}>
      {icon}
    </Container>
  );
}

interface Container {
  buttonColor: string;
}

const Container = styled.button<Container>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border: none;
  background-color: ${({buttonColor}) => buttonColor};
  color: #fff;
  border-radius: 30px;
`;

export default FloatMenuItemButton;