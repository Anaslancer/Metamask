declare module 'react-native-fast-crypto';

declare module 'images/image-icons' {
  const content: { [key: string]: ImageSourcePropType };
  export default content;
}

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}