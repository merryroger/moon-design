import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <g clipPath="url(#clip1)">
        <path
          opacity={0.1}
          d="M70.7628 75.5072C70.7508 74.6873 70.5351 73.8833 70.1351 73.1675C83.4126 60.6508 89.4046 44.1775 91.3069 25.4977H38.0446C39.9468 44.1775 45.8627 60.6508 59.1402 73.1675C58.6737 73.9766 58.459 74.9064 58.5233 75.8381C58.5877 76.7699 58.9283 77.6613 59.5017 78.3986H50.6753V87.4341H78.5429V78.3986H69.7737C70.4027 77.5646 70.7492 76.5517 70.7628 75.5072V75.5072Z"
          fill="currentColor"
        />
        <path
          d="M53.2624 63.6563C68.1568 50.8924 74.6624 33.6582 76.6217 13.9512H23.3594C25.2616 33.6582 31.8243 50.8924 46.6997 63.6563"
          stroke="white"
          strokeWidth={1.90223}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <path
          d="M42.6289 73.2434C42.6289 69.7433 57.3521 69.7433 57.3521 73.2434"
          stroke="white"
          strokeWidth={1.90223}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <path
          d="M33.4602 83.6674H66.3877"
          stroke="white"
          strokeWidth={1.90223}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <path
          d="M19.6881 54.4302C20.4197 55.1617 21.4118 55.5727 22.4464 55.5727C23.4809 55.5727 24.4731 55.1617 25.2046 54.4302C25.9361 53.6987 26.3471 52.7065 26.3471 51.672C26.3471 50.6374 25.9361 49.6453 25.2046 48.9137C25.2046 48.9137 0.39956 36.0737 0.951205 24.299"
          stroke="white"
          strokeWidth={1.90223}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <path
          d="M6.67699 30.0248C9.83921 30.0248 12.4027 27.4613 12.4027 24.2991C12.4027 21.1368 9.83921 18.5734 6.67699 18.5734C3.51478 18.5734 0.951294 21.1368 0.951294 24.2991C0.951294 27.4613 3.51478 30.0248 6.67699 30.0248Z"
          stroke="currentColor"
          strokeWidth={1.90223}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <path
          d="M80.3311 54.4302C79.5995 55.1617 78.6074 55.5727 77.5728 55.5727C76.5383 55.5727 75.5461 55.1617 74.8146 54.4302C74.0831 53.6987 73.6721 52.7065 73.6721 51.672C73.6721 50.6374 74.0831 49.6453 74.8146 48.9137C74.8146 48.9137 99.5435 36.0737 99.049 24.299"
          stroke="white"
          strokeWidth={1.90223}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
        <path
          d="M93.3231 30.0248C96.4853 30.0248 99.0488 27.4613 99.0488 24.2991C99.0488 21.1368 96.4853 18.5734 93.3231 18.5734C90.1609 18.5734 87.5974 21.1368 87.5974 24.2991C87.5974 27.4613 90.1609 30.0248 93.3231 30.0248Z"
          stroke="currentColor"
          strokeWidth={1.90223}
          strokeMiterlimit={10}
          strokeLinecap="round"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width={100} height={100} fill="white" />
      </clipPath>
      <clipPath id="clip1">
        <rect y={13} width={100} height={74.4341} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const LoyaltyRewardIc = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
LoyaltyRewardIc.defaultProps = {
  verticalAlign: 'middle',
};
export default LoyaltyRewardIc;