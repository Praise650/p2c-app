import React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

interface SettingsIconProps {
  size?: number;
  color?: string;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({ size = 24, color = '#fafcff' }) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <G fill={color} clipPath="url(#a)">
        <Path d="M12 14.25A4.125 4.125 0 1 0 12 6a4.125 4.125 0 0 0 0 8.25m0 1.5c-3.04 0-5.742 1.97-6.714 4.794A10.82 10.82 0 0 0 12 22.875c2.537 0 4.863-.875 6.713-2.33-.986-2.836-3.68-4.795-6.713-4.795" />
        <Path d="M12 24C5.384 24 0 18.616 0 12S5.384 0 12 0s12 5.384 12 12-5.384 12-12 12m0-21.75c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SettingsIcon;
