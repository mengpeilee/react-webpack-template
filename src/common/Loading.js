import React from 'react';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import PropTypes from 'prop-types';
import {Theme, ShareStyle, TestId} from '../util';
import {Spinner} from '../images';

const {TEST_LOADING} = TestId;
const {MEDIUM_EMPHASIS} = Theme;
const {Fonts} = ShareStyle;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  align-self: center;
  margin: ${props => !props.isDeleteLoading && '6px 6px'};
  animation: ${rotate} 0.9s linear infinite;
`;

const LoadingContainer = styled.div`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  width: 135px;
  height: 53px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${MEDIUM_EMPHASIS};
  position: ${props => (props.hasBackground ? 'absolute' : 'static')};
  left: calc(50vw - 135px / 2);
  top: ${props => props.hasBackground && '40vh'};
  margin-top: ${props => !props.hasBackground && '-80px'};
  margin-left: ${props => !props.hasBackground && 'calc(50vw - 135px / 2)'};
  background: ${props =>
    props.hasBackground ? 'rgba(0, 0, 0, 0.12)' : 'transparent'};
`;

const Loading = props => {
  const {loadingText, hasBackground} = props;
  return (
    <>
      <LoadingContainer
        hasBackground={hasBackground}
        data-testid={TEST_LOADING}>
        <SpinnerContainer size="20px">
          <Spinner />
        </SpinnerContainer>
        {loadingText}
      </LoadingContainer>
    </>
  );
};

Loading.propTypes = {
  loadingText: PropTypes.string.isRequired,
  hasBackground: PropTypes.bool.isRequired,
};

export {Loading, SpinnerContainer};
