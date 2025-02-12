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
      d="M23.5 25.5v.5-.5zm-15 0v.5-.5zm17-12.667h.5a.5.5 0 00-.223-.416l-.277.416zm0 10.667h.5-.5zm-19-10.666l-.277-.417a.5.5 0 00-.223.417h.5zm0 10.666H7h-.5zm8.39-16.26l-.277-.416.278.416zm2.22 0l.277-.416-.278.416zm-3.566 11.072l.307-.394-.307.394zm4.912 0l-.307-.394.307.394zM23.5 25h-15v1h15v-1zM25 12.833V23.5h1V12.833h-1zm-19 0V23.5h1V12.834H6zM8.5 25A1.5 1.5 0 017 23.5H6A2.5 2.5 0 008.5 26v-1zm15 1a2.5 2.5 0 002.5-2.5h-1a1.5 1.5 0 01-1.5 1.5v1zM6.777 13.25l8.391-5.594-.555-.832-8.39 5.593.554.832zm10.055-5.594l8.39 5.593.555-.832-8.39-5.593-.555.832zm-1.664 0a1.5 1.5 0 011.664 0l.555-.832a2.5 2.5 0 00-2.774 0l.555.832zm-1.317 10.262l-7.044-5.48-.614.79 7.044 5.479.614-.79zm4.912.789l7.044-5.479-.614-.79-7.044 5.48.614.789zm-5.526 0a4.5 4.5 0 005.526 0l-.614-.79a3.5 3.5 0 01-4.298 0l-.614.79z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const MailEmailStats =
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
export default MailEmailStats;
