import React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

interface AppsIconProps {
  size?: number;
  color?: string;
}

const AppsIcon: React.FC<AppsIconProps> = ({ size = 24, color = '#fafcff' }) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <G clipPath="url(#apps_tab_active_svg__a)">
        <Path
          fill={color}
          d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24m2.377-8.76-6.765 2.6c-.909.352-1.804-.543-1.453-1.453l2.602-6.764c.155-.398.464-.707.862-.862l6.765-2.602c.909-.351 1.804.544 1.453 1.454l-2.602 6.764a1.5 1.5 0 0 1-.862.862M13.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
        />
      </G>
      <Defs>
        <ClipPath id="apps_tab_active_svg__a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default AppsIcon;
