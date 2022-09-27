import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {ArrowRightCircle} from 'react-feather';
import {ShareStyle, Theme, TestId} from '../util';
import {EN_LANG} from '../i18n';

const {TEST_HEADER, TEST_HEADER_LINK} = TestId;
const {Primary_600} = Theme;
const {Headline5, Body2} = ShareStyle;

const HeaderContainer = styled.div`
  height: 25vh;
  border: 1px solid transparent;
`;

const Title = styled.div`
  css=${Headline5};
  height: 24px;
  margin-top: 10.6vh;
  margin-bottom: 1.6vh;
`;

const Description = styled.div`
  css=${Body2}
  height: 20px;
  display: flex;
  justify-content: center;
  white-space: pre-wrap;
`;

const StyledLink = styled.span`
  color: ${Primary_600};
  cursor: pointer;
`;

const MailContainer = styled.div`
  css=${Body2}
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${LANG_SELECTOR === EN_LANG && '20px'};
`;

const Mail = styled.a`
  color: ${Primary_600};
  cursor: pointer;
`;

const IconContainer = styled.div`
  cursor: pointer;
  display: ${props => (props.hasIcon ? 'flex' : 'none')};
  align-items: center;
`;

const Header = props => {
  const {title, description, link, handleLink, hasIcon, hasMail} = props;
  return (
    <HeaderContainer data-testid={TEST_HEADER}>
      <Title>{title}</Title>
      <Description>
        {description}
        <StyledLink data-testid={TEST_HEADER_LINK} onClick={handleLink}>
          {link}
        </StyledLink>
        <IconContainer hasIcon={hasIcon} onClick={handleLink}>
          <ArrowRightCircle size={14} color={Primary_600} />
        </IconContainer>
      </Description>
      {hasMail && <MailContainer></MailContainer>}
    </HeaderContainer>
  );
};

Header.defaultTypes = {
  link: '',
  hasIcon: false,
  hasMail: false,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  handleLink: PropTypes.func,
  hasIcon: PropTypes.bool,
  hasMail: PropTypes.bool,
};

export {Header};
