import React from 'react';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

export const BuySellIcon = ({ size = 20, color = '#fafcff' }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
    <G fill={color} clipPath="url(#coin-diagonal_svg__a)">
      <Path d="m12.322 1.23-.017-.018C11.183.09 9.754-.24 8.19.167 6.664.564 5.02 1.657 3.338 3.338 1.657 5.02.564 6.664.168 8.191Q.002 8.82 0 9.418c-.005 1.081.392 2.066 1.212 2.887 1.121 1.12 2.55 1.45 4.114 1.044 1.526-.397 3.17-1.49 4.852-3.17 1.682-1.682 2.774-3.327 3.171-4.853.405-1.555.08-2.978-1.027-4.096M14.607 3.514l.181.181c1.121 1.122 1.451 2.551 1.045 4.114a6.6 6.6 0 0 1-.321.93L13.874 7.1q.364-.746.56-1.492a5.9 5.9 0 0 0 .173-2.094M14.974 9.786c-.482.808-1.128 1.637-1.924 2.477l-1.69-1.691c.768-.809 1.425-1.63 1.946-2.455zM12.258 13.055c-.84.796-1.67 1.441-2.479 1.923L8.111 13.31c.826-.52 1.647-1.177 2.456-1.945zM8.732 15.515l-1.638-1.638q-.744.362-1.486.556a5.9 5.9 0 0 1-2.094.174l.181.181c1.122 1.121 2.551 1.451 4.114 1.045q.455-.12.923-.318" />
    </G>
    <Defs>
      <ClipPath id="coin-diagonal_svg__a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const ReceiveIcon = ({ size = 20, color = '#fafcff' }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
    <G clipPath="url(#qr-code_svg__a)">
      <Path fill={color} stroke="#000" strokeWidth="0.6" d="M5.091 14.546h-2.91a.727.727 0 0 1-.726-.728V10.91a.727.727 0 1 0-1.455 0v2.91A2.18 2.18 0 0 0 2.182 16H5.09a.727.727 0 1 0 0-1.454Zm10.182-4.364a.727.727 0 0 0-.727.727v2.91a.727.727 0 0 1-.728.726H10.91a.727.727 0 0 0 0 1.455h2.91A2.18 2.18 0 0 0 16 13.818V10.91a.727.727 0 0 0-.727-.727ZM13.818 0H10.91a.727.727 0 0 0 0 1.455h2.91a.727.727 0 0 1 .726.727V5.09a.727.727 0 1 0 1.455 0V2.18A2.18 2.18 0 0 0 13.818 0ZM.728 5.818a.727.727 0 0 0 .727-.727V2.18a.727.727 0 0 1 .727-.726H5.09a.727.727 0 0 0 0-1.455h-2.91A2.18 2.18 0 0 0 0 2.182V5.09a.727.727 0 0 0 .727.727ZM6.545 2.91h-2.91a.727.727 0 0 0-.727.727v2.91a.727.727 0 0 0 .727.727h2.91a.727.727 0 0 0 .727-.728V3.636a.727.727 0 0 0-.727-.727Zm-.728 2.91H4.364V4.363h1.454zm3.637 1.454h2.909a.727.727 0 0 0 .727-.728V3.636a.727.727 0 0 0-.727-.727h-2.91a.727.727 0 0 0-.727.727v2.91a.727.727 0 0 0 .728.727Zm.727-2.91h1.454v1.455h-1.454zM6.545 8.728H3.637a.727.727 0 0 0-.727.728v2.909a.727.727 0 0 0 .727.727h2.91a.727.727 0 0 0 .727-.727v-2.91a.727.727 0 0 0-.727-.727Zm-.727 2.91H4.364v-1.455h1.454zm3.637-.728a.727.727 0 0 0 .727-.727.727.727 0 0 0 0-1.455h-.727a.727.727 0 0 0-.728.728v.727a.727.727 0 0 0 .728.727Zm2.909-2.182a.727.727 0 0 0-.728.728v2.181a.727.727 0 1 0 0 1.455h.728a.727.727 0 0 0 .727-.727v-2.91a.727.727 0 0 0-.727-.727Zm-2.91 2.91a.727.727 0 1 0 0 1.454.727.727 0 0 0 0-1.455Z" />
    </G>
    <Defs>
      <ClipPath id="qr-code_svg__a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const SendIcon = ({ size = 20, color = '#fafcff' }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
    <G clipPath="url(#send_svg__a)">
      <Path fill={color} fillRule="evenodd" d="M13.51.112a1.85 1.85 0 0 1 2.373 2.373l-4.085 12.242a1.85 1.85 0 0 1-1.334 1.221 1.83 1.83 0 0 1-1.738-.495L6.535 13.27l-2.302 1.19a.57.57 0 0 1-.834-.522l.095-3.638 8.051-5.849a.714.714 0 1 0-.84-1.156L2.519 9.244.54 7.267a1.83 1.83 0 0 1-.5-1.655 1.85 1.85 0 0 1 1.221-1.414l.004-.001z" clipRule="evenodd" />
    </G>
    <Defs>
      <ClipPath id="send_svg__a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const SwapIcon = ({ size = 20, color = '#fafcff' }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
    <G clipPath="url(#triangle-arrow-transfer-diagonal_svg__a)">
      <Path fill={color} fillRule="evenodd" d="M2.944.706A1.14 1.14 0 0 1 4 0h5.143c.631 0 1.143.512 1.143 1.143v5.143a1.143 1.143 0 0 1-1.951.808l-1.36-1.36-4.049 4.05A1.714 1.714 0 1 1 .502 7.359l4.05-4.049-1.36-1.359A1.14 1.14 0 0 1 2.944.706M15.498 8.64a1.714 1.714 0 0 0-2.424-2.425l-4.05 4.05-1.359-1.36a1.143 1.143 0 0 0-1.95.808v5.143c0 .631.511 1.143 1.142 1.143H12a1.143 1.143 0 0 0 .808-1.951l-1.36-1.36z" clipRule="evenodd" />
    </G>
    <Defs>
      <ClipPath id="triangle-arrow-transfer-diagonal_svg__a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const SearchIcon = ({ size = 16, color = '#fafcff' }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={color}
      d="m15.75 15.75 4.5 4.5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CoinIcon = ({ size = 40, color = '#fafcff' }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      fill={color}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    />
  </Svg>
); 