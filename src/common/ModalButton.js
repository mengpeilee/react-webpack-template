import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {ShareStyle} from '../util';

const {ButtonStyle} = ShareStyle;

const StyledButton = styled.button`
  css=${ButtonStyle};
  height: 36px;
  width: 74px;
  border-radius: 4px;
  border: 0;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`;

const ModalButton = props => {
  const {onClick, bgColor, BtnText, color} = props;
  return (
    <StyledButton onClick={onClick} bgColor={bgColor} color={color}>
      {BtnText}
    </StyledButton>
  );
};

ModalButton.defaultProps = {
  marginBottom: '',
  marginTop: '',
};

ModalButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  BtnText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  color: PropTypes.string.isRequired,
};

export {ModalButton};
