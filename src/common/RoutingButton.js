import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {Theme, ShareStyle} from '../util';
import {translates} from '../i18n';

const {Primary_500} = Theme;
const {ButtonStyle} = ShareStyle;

const ButtonsContainer = styled.div`
  position: ${props => (props.marginTop !== '' ? 'static' : 'fixed')};
  bottom: 0;
  width: 91.46%;
  height: 15.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4.27%;
  margin-top = ${props => (props.marginTop !== '' ? props.marginTop : '0')}
`;

const PrevPageButton = styled.button`
  css=${ButtonStyle};
  height: 46px;
  width: 25.9%;
  border: 0;
  background-color: transparent;
  color: ${Primary_500};
  cursor: pointer;
`;

const NextPageButton = styled.button`
  css=${ButtonStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 23.7%;
  border-radius: 8px;
  border: 0;
  color: white;
  cursor: pointer;
  background-color: ${props => props.color};
`;

const RoutingButton = props => {
  const {
    handleGoBack,
    handleGoNext,
    BtnText,
    PrevBtnText,
    color,
    marginTop,
  } = props;
  return (
    <ButtonsContainer marginTop={marginTop}>
      <PrevPageButton onClick={handleGoBack}>
        {PrevBtnText || translates('addDevices.common.goBackBtnText')}
      </PrevPageButton>
      <NextPageButton onClick={handleGoNext} color={color}>
        {BtnText}
      </NextPageButton>
    </ButtonsContainer>
  );
};

RoutingButton.defaultProps = {
  PrevBtnText: '',
  marginTop: '',
};

RoutingButton.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
  handleGoNext: PropTypes.func.isRequired,
  BtnText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  color: PropTypes.string.isRequired,
  PrevBtnText: PropTypes.string,
  marginTop: PropTypes.string,
};

export {RoutingButton};
