import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {ShareStyle, TestId} from '../util';

const {TEST_BUTTON} = TestId;
const {ButtonStyle} = ShareStyle;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  z-index: 1;
  position: ${props => (props.marginTop !== '' ? 'static' : 'fixed')};
  margin-top = ${props => (props.marginTop !== '' ? props.marginTop : '0')};
  bottom: ${props => props.marginBottom || '34px'};
`;

const StyledButton = styled.button`
  css=${ButtonStyle};
  height: 50px;
  width: 91.4%;
  border-radius: 8px;
  border: 0;
  background-color: ${props => props.bgColor};
  cursor: pointer;
`;

const Button = props => {
  const {onClick, bgColor, BtnText, marginBottom, marginTop} = props;
  return (
    <ButtonContainer marginBottom={marginBottom} marginTop={marginTop}>
      <StyledButton
        data-testid={TEST_BUTTON}
        onClick={onClick}
        bgColor={bgColor}>
        {BtnText}
      </StyledButton>
    </ButtonContainer>
  );
};

Button.defaultProps = {
  marginBottom: '',
  marginTop: '',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  BtnText: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
};

export {Button};
