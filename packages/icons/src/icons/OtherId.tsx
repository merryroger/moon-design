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
      d="M22.648 20.125l.402.297-.402-.297zm1.129-2.351l.483.127-.483-.127zM7.527 23a.5.5 0 001 0h-1zm1-9.76a.5.5 0 00-1 0h1zM7.5 10.085a.5.5 0 001 0h-1zM8.5 9a.5.5 0 00-1 0h1zm8.409.564c3.648 0 6.591 2.904 6.591 6.468h1c0-4.133-3.407-7.468-7.591-7.468v1zm0-1h-2.847v1h2.847v-1zm-4.672 1.86V21.64h1V10.424h-1zM14.062 23.5h2.847v-1h-2.847v1zm8.184-3.672A6.622 6.622 0 0116.91 22.5v1a7.622 7.622 0 006.141-3.078l-.804-.594zm1.254-3.796c0 .558-.072 1.1-.207 1.615l.967.254a7.37 7.37 0 00.24-1.869h-1zm-.207 1.615a6.384 6.384 0 01-1.047 2.18l.804.595c.553-.747.969-1.6 1.21-2.521l-.967-.254zM12.237 21.64c0 1.015.805 1.86 1.825 1.86v-1c-.444 0-.825-.373-.825-.86h-1zm1.825-13.076c-1.02 0-1.825.845-1.825 1.86h1c0-.487.381-.86.825-.86v-1zM8.527 23v-9.76h-1V23h1zM8.5 10.084V9h-1v1.084h1z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const OtherId =
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
export default OtherId;
