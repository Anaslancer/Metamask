// Third party dependencies.
import { StyleSheet, ViewStyle } from 'react-native';

// External dependencies.
import { Theme } from '@/src/util/theme/models';

// Internal dependencies.
import { AvatarIconStyleSheetVars } from './AvatarIcon.types';

/**
 * Style sheet function for AvatarIcon component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: {
  theme: Theme;
  vars: AvatarIconStyleSheetVars;
}) => {
  const { theme, vars } = params;
  const { colors } = theme;
  const { style, backgroundColor } = vars;
  return StyleSheet.create({
    base: Object.assign(
      {
        backgroundColor: backgroundColor || colors.primary.muted,
        alignItems: 'center',
        justifyContent: 'center',
      } as ViewStyle,
      style,
    ) as ViewStyle,
    icon: {
      color: colors.primary.default,
    },
  });
};

export default styleSheet;
