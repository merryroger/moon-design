import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.7007 14.4192C20.3649 19.7764 14.9384 23.0367 9.58001 21.7008C4.22382 20.3652 0.963159 14.9389 2.29955 9.58206C3.63469 4.22425 9.06121 0.963624 14.418 2.29925C19.7761 3.63487 23.0364 9.06175 21.7007 14.4192Z"
      fill="#F7931A"
    />
    <path
      d="M16.4098 10.5754C16.6089 9.24478 15.5957 8.52947 14.2102 8.05228L14.6596 6.24978L13.5623 5.97634L13.1248 7.73134C12.8363 7.65947 12.54 7.59166 12.2456 7.52447L12.6863 5.7579L11.5896 5.48447L11.1399 7.28634C10.9011 7.23196 10.6667 7.17822 10.4392 7.12166L10.4404 7.11603L8.92717 6.73821L8.63526 7.91009C8.63526 7.91009 9.44941 8.09665 9.43222 8.10822C9.87664 8.21915 9.95696 8.51321 9.94352 8.74634L9.43159 10.7998C9.46222 10.8076 9.50191 10.8188 9.54567 10.8363C9.5091 10.8273 9.47004 10.8173 9.42972 10.8076L8.71214 13.6842C8.65776 13.8192 8.51994 14.0217 8.20928 13.9448C8.22022 13.9607 7.41169 13.7457 7.41169 13.7457L6.86694 15.0017L8.29491 15.3576C8.56056 15.4242 8.8209 15.4938 9.07717 15.5595L8.62307 17.3826L9.71912 17.656L10.1689 15.8523C10.4683 15.9335 10.7589 16.0085 11.0433 16.0792L10.5952 17.8745L11.6925 18.1479L12.1466 16.3282C14.0177 16.6823 15.4247 16.5395 16.017 14.8473C16.4942 13.4848 15.9932 12.6988 15.0087 12.1863C15.7257 12.021 16.2658 11.5495 16.4098 10.5754ZM13.9027 14.0907C13.5636 15.4532 11.2693 14.7167 10.5255 14.532L11.128 12.1167C11.8719 12.3023 14.2571 12.6698 13.9027 14.0907ZM14.2421 10.5557C13.9327 11.7951 12.0231 11.1654 11.4037 11.011L11.95 8.82041C12.5694 8.97478 14.5643 9.2629 14.2421 10.5557Z"
      fill="white"
    />
    <circle cx={12} cy={12} r={12} fill="#274DD4" />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <circle cx={12} cy={12} r={12} fill="#274DD4" />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M4.89973 9.44031L5.37347 10.8983H6.90653L5.66626 11.7995L6.14 13.2575L4.89973 12.3564L3.65945 13.2575L4.13319 11.7995L2.89292 10.8983H4.42598L4.89973 9.44031Z"
        fill="#FF3E44"
      />
      <path
        d="M19.1511 9.44031L19.6249 10.8983H21.1579L19.9177 11.7995L20.3914 13.2575L19.1511 12.3564L17.9109 13.2575L18.3846 11.7995L17.1443 10.8983H18.6774L19.1511 9.44031Z"
        fill="#FF3E44"
      />
      <path
        d="M4.89973 14.1605L5.37347 15.6185H6.90653L5.66626 16.5196L6.14 17.9776L4.89973 17.0765L3.65945 17.9776L4.13319 16.5196L2.89292 15.6185H4.42598L4.89973 14.1605Z"
        fill="#FF3E44"
      />
      <path
        d="M19.1511 14.1605L19.6249 15.6185H21.1579L19.9177 16.5196L20.3914 17.9776L19.1511 17.0765L17.9109 17.9776L18.3846 16.5196L17.1443 15.6185H18.6774L19.1511 14.1605Z"
        fill="#FF3E44"
      />
      <path
        d="M4.89973 18.8806L5.37347 20.3386H6.90653L5.66626 21.2398L6.14 22.6978L4.89973 21.7967L3.65945 22.6978L4.13319 21.2398L2.89292 20.3386H4.42598L4.89973 18.8806Z"
        fill="#FF3E44"
      />
      <path
        d="M19.1511 18.8806L19.6249 20.3386H21.1579L19.9177 21.2398L20.3914 22.6978L19.1511 21.7967L17.9109 22.6978L18.3846 21.2398L17.1443 20.3386H18.6774L19.1511 18.8806Z"
        fill="#FF3E44"
      />
      <path
        d="M4.90006 4.72015L5.3738 6.17819H6.90687L5.66659 7.0793L6.14034 8.53733L4.90006 7.63622L3.65979 8.53733L4.13353 7.0793L2.89325 6.17819H4.42632L4.90006 4.72015Z"
        fill="#FF3E44"
      />
      <path
        d="M19.1515 4.72015L19.6252 6.17819H21.1583L19.918 7.0793L20.3917 8.53733L19.1515 7.63622L17.9112 8.53733L18.3849 7.0793L17.1447 6.17819H18.6777L19.1515 4.72015Z"
        fill="#FF3E44"
      />
      <path
        d="M4.90006 0L5.3738 1.45803H6.90687L5.66659 2.35914L6.14034 3.81718L4.90006 2.91606L3.65979 3.81718L4.13353 2.35914L2.89325 1.45803H4.42632L4.90006 0Z"
        fill="#FF3E44"
      />
      <path
        d="M19.1515 0L19.6252 1.45803H21.1583L19.918 2.35914L20.3917 3.81718L19.1515 2.91606L17.9112 3.81718L18.3849 2.35914L17.1447 1.45803H18.6777L19.1515 0Z"
        fill="#FF3E44"
      />
    </g>
    <path
      d="M16.2627 14.2003C16.2627 11.9578 14.7938 11.3509 12.447 10.6427C11.3327 10.3055 10.9781 10.0189 10.9781 9.6142C10.9781 9.19268 11.3158 8.93977 12.0249 8.93977C12.7171 8.93977 13.5275 9.17582 14.4899 9.85025L16.0601 7.8944C15.2497 7.23683 14.1016 6.68043 12.9873 6.46124V4.42108H11.1638V6.39379C9.17154 6.66356 8.02344 8.01243 8.02344 9.79967C8.02344 11.9916 9.7287 12.6829 11.6534 13.2561C12.9535 13.6439 13.2743 13.9306 13.2743 14.4195C13.2743 14.8579 12.886 15.1783 12.2275 15.1783C11.4171 15.1783 10.3027 14.8073 9.35726 13.9137L7.73642 15.8864C8.73256 16.8812 9.89754 17.4376 11.1469 17.6399V19.5789H12.9535V17.6568C14.9627 17.387 16.2627 16.1225 16.2627 14.2003Z"
      fill="white"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const IconUsaDollar = styled(Svg)<SvgProps>(
  ({
    color, height, width, fontSize, verticalAlign, theme,
  }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  }),
);
IconUsaDollar.defaultProps = {
  verticalAlign: 'middle',
};
export default IconUsaDollar;
