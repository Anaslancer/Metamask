// Third party dependencies.
import { StyleSheet, ViewStyle } from 'react-native';

// External dependencies.
import { Theme } from '@/src/util/theme/models';
import { BORDERWIDTH_BY_AVATARSIZE } from '../../Avatar.constants';

// Internal dependencies.
import { AvatarBaseStyleSheetVars } from './AvatarBase.types';

/**
 * Style sheet function for AvatarBase component.
 *
 * @param params Style sheet params.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: {
  theme: Theme;
  vars: AvatarBaseStyleSheetVars;
}) => {
  const {
    theme,
    vars: { style, size, includesBorder },
  } = params;
  const sizeAsNum = Number(size);

  return StyleSheet.create({
    container: Object.assign(
      {
        height: sizeAsNum,
        width: sizeAsNum,
        borderRadius: sizeAsNum / 2,
        overflow: 'hidden',
        backgroundColor: theme.colors.background.default,
        ...(includesBorder && {
          borderWidth: BORDERWIDTH_BY_AVATARSIZE[size],
          borderColor: theme.colors.background.default,
        }),
      } as ViewStyle,
      style,
    ) as ViewStyle,
  });
};

export default styleSheet;
