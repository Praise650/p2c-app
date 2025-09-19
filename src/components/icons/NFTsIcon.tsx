import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface NFTsIconProps {
  size?: number;
  color?: string;
}

const NFTsIcon: React.FC<NFTsIconProps> = ({ size = 24, color = '#fafcff' }) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M7.233 13.467a1.833 1.833 0 1 0 0-3.667 1.833 1.833 0 0 0 0 3.667M18.151 12.563c-1.522-1.524-4.181-1.524-5.704 0l-8.911 8.913c.44.263.949.424 1.497.424h13.933a2.933 2.933 0 0 0 2.934-2.933V16.31zM18.233 3.2H5.767a1.1 1.1 0 0 1 0-2.2h12.466a1.1 1.1 0 0 1 0 2.2"
      />
      <Path
        fill={color}
        d="M18.967 23H5.033A4.037 4.037 0 0 1 1 18.967V9.433A4.037 4.037 0 0 1 5.033 5.4h13.934A4.037 4.037 0 0 1 23 9.433v9.534A4.037 4.037 0 0 1 18.967 23M5.033 7.6c-1.01 0-1.833.823-1.833 1.833v9.534c0 1.01.823 1.833 1.833 1.833h13.934c1.01 0 1.833-.823 1.833-1.833V9.433c0-1.01-.823-1.833-1.833-1.833z"
      />
    </Svg>
  );
};

export default NFTsIcon;
