import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.73 18.136s.032.016.08.065c1 .815 1.58 2.07 1.58 3.375v4.484c0 .244.194.44.435.44h1.709a.436.436 0 00.435-.44v-4.5c0-1.305.58-2.544 1.58-3.375.048-.033.08-.065.08-.065m-5.9.016s-1.837-.424-2.595-2.69c-.16-.457-.225-.93-.257-1.402-.097-2.006 0-8.544 5.802-8.544 5.803 0 5.9 6.538 5.803 8.543a5.967 5.967 0 01-.258 1.403c-.757 2.266-2.595 2.69-2.595 2.69h-5.9zm-5.02 2.62c1.403.335 2.271 1.757 1.94 3.175-.331 1.419-1.736 2.297-3.139 1.962-1.402-.335-2.27-1.756-1.94-3.175.332-1.418 1.737-2.297 3.14-1.962z"
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportTableTennis =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default SportTableTennis;
