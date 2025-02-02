// Third party dependencies.
import { StyleSheet, ViewStyle } from 'react-native';

// External dependencies.
import { Theme } from '@/src/util/theme/models';

// Internal dependencies
import { TabBarItemStyleSheetVars } from './TabBarItem.types';

/**
 * Style sheet function for TabBarItem component.
 *
 * @param params Style sheet params.
 * @param params.theme App theme from ThemeContext.
 * @param params.vars Inputs that the style sheet depends on.
 * @returns StyleSheet object.
 */
const styleSheet = (params: {
  theme: Theme;
  vars: TabBarItemStyleSheetVars;
}) => {
  const { vars } = params;
  const { style } = vars;
  return StyleSheet.create({
    base: Object.assign(
      { flex: 1, alignItems: 'center' } as ViewStyle,
      style,
    ) as ViewStyle,
  });
};

export default styleSheet;
