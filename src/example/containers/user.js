import React, {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {ShareStyle, Constants, Theme, TestId} from '../../util';
//import { } from '../actions';
import {translates} from '../../i18n';
import config from '../../config';

const {SCAN_DEVICES_TIMEOUT} = Constants;
const {Caption} = ShareStyle;
const {Primary_500} = Theme;
const CaptionContainer = styled.div`
  css=${Caption}
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return <CaptionContainer>Test 456</CaptionContainer>;
};

export {User};
