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
      d="M23.226 9.833l.38-.324-.38.324zm-1.06 13.393l-.324-.38.325.38zm-13.392-1.06l.38-.324-.38.325zm1.06-13.392l-.325-.38.324.38zm8.451 5.961a.5.5 0 00.309.951l-.309-.951zm2.151.353a.5.5 0 10-.308-.95l.308.95zM19.34 17.12a.5.5 0 10.59.808l-.59-.808zm2.146-.327a.5.5 0 10-.588-.808l.588.808zm-.424 2.323a.5.5 0 00.811.585l-.811-.585zm1.96-1.01a.5.5 0 10-.812-.585l.812.585zm-4.447-8.547a.5.5 0 10-.3.955l.3-.955zm1.556 1.537a.5.5 0 10.3-.954l-.3.954zm-2.093 1.01a.5.5 0 10-.002 1l.002-1zm1.925 1.004a.5.5 0 00.002-1l-.002 1zm-6.253 4.161a.5.5 0 00-.308-.951l.308.951zm-2.218-.332a.5.5 0 00.309.952l-.309-.951zm2.484 3.03a.5.5 0 10.008-1l-.008 1zm-1.996-1.015a.5.5 0 10-.008 1l.008-1zm1.419 3.68a.5.5 0 00.317-.948l-.317.948zm-1.594-1.587a.5.5 0 10-.317.948l.317-.948zm-.995-8.297a.5.5 0 00-.805-.593l.805.593zm-1.987 1.012a.5.5 0 00.805.593l-.805-.593zm3.79.99a.5.5 0 10-.593-.805l.594.804zm-2.206.385a.5.5 0 00.593.804l-.593-.804zm12.44-4.98a9 9 0 01-1.004 12.689l.65.76c4.2-3.585 4.7-9.897 1.114-14.097l-.76.649zm-1.004 12.689a9 9 0 01-12.688-1.004l-.76.65c3.585 4.2 9.897 4.7 14.097 1.114l-.649-.76zM9.154 21.842a9 9 0 011.004-12.688l-.65-.76c-4.2 3.585-4.7 9.897-1.114 14.097l.76-.649zm1.004-12.688a9 9 0 0112.688 1.004l.76-.65c-3.585-4.2-9.897-4.7-14.097-1.114l.649.76zm8.436 6.532l1.842-.598-.308-.95-1.843.597.309.951zm1.334 2.242l1.557-1.135-.588-.808-1.558 1.135.59.808zm1.944 1.773l1.149-1.595-.812-.585-1.148 1.595.811.585zm-3.597-9.188l1.855.583.3-.954-1.856-.583-.3.955zm-.24 2.593l1.927.004.002-1-1.927-.004-.002 1zM13.4 16.32l-1.91.62.309.95 1.91-.619-.31-.951zm.582 2.65l-2.005-.016-.008 1 2.005.016.008-1zm-.268 2.716l-1.91-.64-.318.949 1.91.639.318-.948zm-3.711-9.529l-1.182 1.605.805.593 1.182-1.605-.805-.593zm2.015 1.79l-1.613 1.19.593.804 1.614-1.19-.594-.804z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const SportBaseball =
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
export default SportBaseball;
