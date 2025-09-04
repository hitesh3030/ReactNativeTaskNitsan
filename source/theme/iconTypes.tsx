import type {ForwardRefExoticComponent} from 'react';
import type Svg from 'react-native-svg';
import type {NumberProp} from 'react-native-svg';

export type IconProps = React.ComponentProps<typeof Svg> & {
  height?: NumberProp;
  width?: NumberProp;
  color?: string;
  fill?: string;
};

export type Icon = ForwardRefExoticComponent<IconProps>;
