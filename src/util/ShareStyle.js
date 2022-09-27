import {css} from '@emotion/core';
import {Theme} from '../util';

const {HIGH_EMPHASIS, MEDIUM_EMPHASIS, DISABLED_TEXT_COLOR} = Theme;

const Fonts = css`
  /* Noto Sans */
  @font-face {
    font-family: 'Custom Noto Sans';
    src: local('Noto Sans'), local('NotoSans'),
      url('https://fonts.gstatic.com/s/notosans/v9/o-0IIpQlx3QUlC5A4PNr6zRA.woff2')
        format('woff2'),
      url('https://fonts.gstatic.com/s/notosans/v9/o-0IIpQlx3QUlC5A4PNr6zRG.woff')
        format('woff');
    unicode-range: U+00-024F;
  }
  @font-face {
    font-family: 'Custom Noto Sans';
    font-weight: bold;
    src: local('Noto Sans Bold'), local('NotoSans-Bold'),
      url('https://fonts.gstatic.com/s/notosans/v9/o-0NIpQlx3QUlC5A4PNjXhFVZNyB.woff2')
        format('woff2'),
      url('https://fonts.gstatic.com/s/notosans/v9/o-0NIpQlx3QUlC5A4PNjXhFVZNyH.woff')
        format('woff');
    unicode-range: U+00-024F;
  }
  /* Noto Sans TC */
  @font-face {
    font-family: 'Custom Noto Sans';
    src: local('Noto Sans TC Regular'), local('NotoSansTC-Regular'),
      url('https://fonts.gstatic.com/s/notosanstc/v10/-nF7OG829Oofr2wohFbTp9i1OCEK.woff2')
        format('woff2'),
      url('https://fonts.gstatic.com/s/notosanstc/v10/-nF7OG829Oofr2wohFbTp9i1OCEM.woff')
        format('woff');
    unicode-range: U+4E00-9FFF;
  }
  @font-face {
    font-family: 'Custom Noto Sans';
    font-weight: bold;
    src: local('Noto Sans TC Bold'), local('NotoSansTC-Bold'),
      url('https://fonts.gstatic.com/s/notosanstc/v10/-nFkOG829Oofr2wohFbTp9i9gwQfDNdU.woff2')
        format('woff2'),
      url('https://fonts.gstatic.com/s/notosanstc/v10/-nFkOG829Oofr2wohFbTp9i9gwQfDNdS.woff')
        format('woff');
    unicode-range: U+4E00-9FFF;
  }
  /* Ubuntu */
  @font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Regular'), local('Ubuntu-Regular'), 
    url('https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKcQ7w.woff) format('woff'), 
    url('https://fonts.gstatic.com/s/ubuntu/v14/4iCs6KVjbNBYlgoKcQ72.woff2') format('woff2);
  }
  /* Montserrat */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
        url('https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.woff2') format('woff2'), 
        url('https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD-A.woff') format('woff'); 
  }
`;

const Headline5 = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.18px;
  color: ${HIGH_EMPHASIS};
`;

const Headline6 = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.15px;
  color: ${HIGH_EMPHASIS};
`;

const Subtitle1 = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${HIGH_EMPHASIS};
`;

const Subtitle1_EN = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${HIGH_EMPHASIS};
`;

const Subtitle2 = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: ${MEDIUM_EMPHASIS};
`;

const Body2 = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.25px;
  color: ${MEDIUM_EMPHASIS};
`;

const Body2_EN = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.25px;
  color: ${MEDIUM_EMPHASIS};
`;

const Caption = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${MEDIUM_EMPHASIS};
  margin-left: 16px;
  margin-bottom: 1vh;
`;

const Caption_EN = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.4px;
  color: ${DISABLED_TEXT_COLOR};
`;

const Body1 = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${MEDIUM_EMPHASIS};
`;

const ButtonStyle = () => css`
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  letter-spacing: 0.41px;
  :focus {
    outline: 0;
  }
`;

const Android_TW_Button = () => css`
  /* Android-TW/Button - 14sp */
  ${Fonts};
  font-family: 'Custom Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;

export {
  Fonts,
  Headline5,
  Headline6,
  Subtitle1,
  Subtitle1_EN,
  Subtitle2,
  Body2,
  Body2_EN,
  Caption,
  Caption_EN,
  Body1,
  ButtonStyle,
  Android_TW_Button,
};
