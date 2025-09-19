import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ActivityIconProps {
  size?: number;
  color?: string;
}

const ActivityIcon: React.FC<ActivityIconProps> = ({ size = 24, color = '#fafcff' }) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M21.574 18.636a1.5 1.5 0 0 0 .926-1.386V10.5A1.5 1.5 0 0 0 21 9h-6.75a1.5 1.5 0 0 0-1.06 2.56l1.783 1.785-5.314 5.314a2.25 2.25 0 0 0 3.182 3.182l5.314-5.314 1.784 1.784a1.5 1.5 0 0 0 1.635.325M11.159 2.159a2.25 2.25 0 0 1 3.182 3.182l-5.314 5.314 1.784 1.784A1.5 1.5 0 0 1 9.75 15H3a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 2.56-1.06l1.785 1.783z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ActivityIcon;
