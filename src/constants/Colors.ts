const brandColor = {
  // Grey
  grey100: "#d6d9dc",
  // Grey
  grey200: "#bbc0c5",
  // Grey
  grey300: "#9fa6ae",
  // Grey
  grey400: "#848c96",
  // Grey
  grey500: "#6a737d",
  // Grey
  grey600: "#535a61",
  // Grey
  grey700: "#3b4046",
  // Grey
  grey800: "#24272a",
  // Grey
  grey900: "#141618",
  // Grey
  grey1000: "#000000",
  // Grey
  grey050: "#f2f4f6",
  // Grey
  grey000: "#ffffff",
  // Grey
  grey025: "#fafbfc",
  // Blue
  blue100: "#a7d9fe",
  // Blue
  blue200: "#75c4fd",
  // Blue
  blue300: "#43aefc",
  // Blue
  blue400: "#1098fc",
  // Blue
  blue500: "#0376c9",
  // Blue
  blue600: "#0260a4",
  // Blue
  blue700: "#024272",
  // Blue
  blue800: "#01253f",
  // Blue
  blue900: "#00080d",
  // Blue
  blue050: "#eaf6ff",
  // Blue
  blue025: "#eaf6ff",
  // Green
  green100: "#afecbd",
  // Green
  green200: "#5dd879",
  // Green
  green300: "#28a745",
  // Green
  green400: "#28a745",
  // Green
  green500: "#1c8234",
  // Green
  green600: "#145523",
  // Green
  green700: "#145523",
  // Green
  green800: "#0a2c12",
  // Green
  green900: "#041007",
  // Green
  green050: "#d6ffdf",
  // Green
  green025: "#f3fcf5",
  // Red
  red100: "#f7d5d8",
  // Red
  red200: "#f1b9be",
  // Red
  red300: "#e88f97",
  // Red
  red400: "#e06470",
  // Red
  red500: "#d73847",
  // Red
  red600: "#8e1d28",
  // Red
  red700: "#64141c",
  // Red
  red800: "#3a0c10",
  // Red
  red900: "#3a0c10",
  // Red
  red050: "#fcf2f3",
  // Red
  red025: "#fcf2f3",
  // Yellow
  yellow100: "#ffdf70",
  // Yellow
  yellow200: "#ffc70a",
  // Yellow
  yellow300: "#f8883b",
  // Yellow
  yellow400: "#f66a0a",
  // Yellow
  yellow500: "#bf5208",
  // Yellow
  yellow600: "#954005",
  // Yellow
  yellow700: "#632b04",
  // Yellow
  yellow800: "#321602",
  // Yellow
  yellow900: "#321602",
  // Yellow
  yellow050: "#fff2c5",
  // Yellow
  yellow025: "#fefcde",
  // Orange
  orange100: "#fbc49d",
  // Orange
  orange200: "#faa66c",
  // Orange
  orange300: "#f8883b",
  // Orange
  orange400: "#f66a0a",
  // Orange
  orange500: "#bf5208",
  // Orange
  orange600: "#954005",
  // Orange
  orange700: "#632b04",
  // Orange
  orange800: "#321602",
  // Orange
  orange900: "#321602",
  // Orange
  orange050: "#fde2cf",
  // Orange
  orange025: "#fef5ef",
  // Purple
  purple100: "#efd2ff",
  // Purple
  purple200: "#cfb5f0",
  // Purple
  purple300: "#d27dff",
  // Purple
  purple400: "#b864f5",
  // Purple
  purple500: "#8b45b6",
  // Purple
  purple600: "#6c2ab2",
  // Purple
  purple700: "#4c1178",
  // Purple
  purple800: "#32054d",
  // Purple
  purple900: "#280a00",
  // Purple
  purple050: "#fbf2ff",
  // Purple
  purple025: "#fcf6ff",
  // Lime
  lime100: "#b8ef4a",
  // Lime
  lime200: "#95ca45",
  // Lime
  lime300: "#7ab040",
  // Lime
  lime400: "#64993d",
  // Lime
  lime500: "#457a39",
  // Lime
  lime600: "#275b35",
  // Lime
  lime700: "#093a31",
  // Lime
  lime800: "#022321",
  // Lime
  lime900: "#011515",
  // Lime
  lime025: "#effed9",
  // Lime
  lime050: "#e3febd",
  // White
  white: "#ffffff",
  // Black
  black: "#000000"
};

export default {
  light: {
    background: {
      default: brandColor.grey000,
      // For default neutral backgrounds
      alternative: brandColor.grey050,
      // For secondary neutral backgrounds.
      defaultHover: "#f5f5f5",
      // For "hover" states that use background-default.
      defaultPressed: "#ebebeb",
      // For "pressed" states that use background-alternative.
      alternativeHover: "#e7ebee",
      // For "hover" states that use background-alternative.
      alternativePressed: "#dbe0e6",
      // For "pressed" states that use background-alternative.
      hover: "#0000000a",
      // For "hover" state that use no background fill.
      pressed: "#00000014"
      // For "pressed" state that use no background fill.
    },
    text: {
      default: brandColor.grey900,
      // For default neutral text.
      alternative: brandColor.grey500,
      // For softer contrast neutral text
      muted: brandColor.grey300
      // For the softest contrast neutral text (not accessible)
    },
    icon: {
      default: brandColor.grey900,
      // For default neutral icons
      alternative: brandColor.grey500,
      // For softer neutral icons
      muted: brandColor.grey300
      // For the weakest contrast neutral icons (not accessible)
    },
    border: {
      default: brandColor.grey200,
      // For soft contrast neutral border
      muted: "#bbc0c566"
      // For the weakest  contrast neutral border
    },
    overlay: {
      default: "#00000099",
      // For the default shade of screen
      alternative: "#000000cc",
      // For a stronger shade of screen
      inverse: brandColor.grey000
      // For elements used on top of overlay/alternative. Used for text, icon or border
    },
    primary: {
      default: brandColor.blue500,
      // For interactive, active, and selected semantics. Used for text, background, icon or border
      alternative: brandColor.blue600,
      // For the stronger contrast primary semantic elements.
      muted: "#0376c91a",
      // For the weakest contrast primary semantic backgrounds.
      inverse: brandColor.grey000,
      // For elements used on top of primary/default. Used for text, icon or border
      defaultHover: "#036ab5",
      // For the "hover" state of primary-default elements
      defaultPressed: "#025ea1"
      // For the "pressed" state of primary-default elements
    },
    error: {
      default: brandColor.red500,
      // For the critical alert semantic elements. Used for text, background, icon or border
      alternative: brandColor.red600,
      // For the stronger contrast error semantic elements.
      muted: "#d738471a",
      // For the weakest contrast critical alert semantic backgrounds.
      inverse: brandColor.grey000,
      // For elements used on top of error/default. Used for text, icon or border
      defaultHover: "#d02a3a",
      // For the "hover" state of error-default elements.
      defaultPressed: "#bf2635"
      // For the "pressed" state of error-default elements.
    },
    warning: {
      default: brandColor.yellow500,
      // For the caution alert semantic elements. Used for text, background, icon or border
      muted: "#bf52081a",
      // For the weakest contrast caution alert semantic backgrounds.
      inverse: brandColor.grey000,
      // For elements used on top of warning/default. Used for text, icon or border
      defaultHover: "#ac4a07",
      // For the "hover" state of warning-default elements
      defaultPressed: "#984106"
      // For the "pressed" state of warning-default elements
    },
    success: {
      default: brandColor.green500,
      // For the positive semantic elements. Used for text, background, icon or border
      muted: "#1c82341a",
      // For the weakest contrast positive semantic backgrounds.
      inverse: brandColor.grey000,
      // For elements used on top of success/default. Used for text, icon or border
      defaultHover: "#18712d",
      // For the "hover" state of success-default elements
      defaultPressed: "#156127"
      // For the "pressed" state of success-default elements
    },
    info: {
      default: brandColor.blue500,
      // For informational read-only elements. Used for text, background, icon or border
      muted: "#0376c91a",
      // For the weakest contrast informational semantic backgrounds.
      inverse: brandColor.grey000
      // For elements used on top of info/default. Used for text, icon or border
    },
    flask: {
      default: brandColor.purple500,
      // For Flask primary accent color.
      inverse: brandColor.grey000
      // For elements used on top of flask/default. Used for text, icon or border
    },
    shadow: {
      default: "#0000001a",
      // For neutral drop shadow color.
      primary: "#0376c933",
      // For primary drop shadow color.
      error: "#ca354266"
      // For critical/danger drop shadow color.
    }
  },
  dark: {
    background: {
      default: brandColor.grey800,
      // For default neutral backgrounds
      alternative: brandColor.grey900,
      // For secondary neutral backgrounds.
      defaultHover: "#313235",
      // For "hover" states that use background-default.
      defaultPressed: "#3f4145",
      // For "pressed" states that use background-alternative.
      alternativeHover: "#1f2123",
      // For "hover" states that use background-alternative.
      alternativePressed: "#2e3033",
      // For "pressed" states that use background-alternative.
      hover: "#ffffff0a",
      // For "hover" state that use no background fill.
      pressed: "#ffffff14"
      // For "pressed" state that use no background fill.
    },
    text: {
      default: brandColor.grey000,
      // For default neutral text.
      alternative: brandColor.grey200,
      // For softer contrast neutral text
      muted: brandColor.grey400
      // For the softest contrast neutral text (not accessible)
    },
    icon: {
      default: brandColor.grey000,
      // For default neutral icons
      alternative: brandColor.grey200,
      // For softer neutral icons
      muted: brandColor.grey400
      // For the weakest contrast neutral icons (not accessible)
    },
    border: {
      default: brandColor.grey400,
      // For soft contrast neutral border
      muted: "#848c9629"
      // For the weakest  contrast neutral border
    },
    overlay: {
      default: "#00000099",
      // For the default shade of screen
      alternative: "#000000cc",
      // For a stronger shade of screen
      inverse: brandColor.grey000
      // For elements used on top of overlay/alternative. Used for text, icon or border
    },
    primary: {
      default: brandColor.blue300,
      // For interactive, active, and selected semantics. Used for text, background, icon or border
      alternative: brandColor.blue200,
      // For the stronger contrast primary semantic elements.
      muted: "#43aefc26",
      // For the weakest contrast primary semantic backgrounds.
      inverse: brandColor.grey900,
      // For elements used on top of primary/default. Used for text, icon or border
      defaultHover: "#26a2fc",
      // For the "hover" state of primary-default elements
      defaultPressed: "#3baafd"
      // For the "pressed" state of primary-default elements
    },
    error: {
      default: brandColor.red300,
      // For the critical alert semantic elements. Used for text, background, icon or border
      alternative: brandColor.red200,
      // For the stronger contrast error semantic elements.
      muted: "#e88f9726",
      // For the weakest contrast critical alert semantic backgrounds.
      inverse: brandColor.grey900,
      // For elements used on top of error/default. Used for text, icon or border
      defaultHover: "#e47782",
      // For the "hover" state of error-default elements.
      defaultPressed: "#e78891"
      // For the "pressed" state of error-default elements.
    },
    warning: {
      default: brandColor.yellow100,
      // For the caution alert semantic elements. Used for text, background, icon or border
      muted: "#ffdf7026",
      // For the weakest contrast caution alert semantic backgrounds.
      inverse: brandColor.grey900,
      // For elements used on top of warning/default. Used for text, icon or border
      defaultHover: "#ffe485",
      // For the "hover" state of warning-default elements
      defaultPressed: "#ffe899"
      // For the "pressed" state of warning-default elements
    },
    success: {
      default: brandColor.green300,
      // For the positive semantic elements. Used for text, background, icon or border
      muted: "#28a74526",
      // For the weakest contrast positive semantic backgrounds.
      inverse: brandColor.grey900,
      // For elements used on top of success/default. Used for text, icon or border
      defaultHover: "#2cb94c",
      // For the "hover" state of success-default elements
      defaultPressed: "#30ca53"
      // For the "pressed" state of success-default elements
    },
    info: {
      default: brandColor.blue300,
      // For informational read-only elements. Used for text, background, icon or border
      muted: "#43aefc26",
      // For the weakest contrast informational semantic backgrounds.
      inverse: brandColor.grey900
      // For elements used on top of info/default. Used for text, icon or border
    },
    flask: {
      default: brandColor.purple300,
      // For Flask primary accent color.
      inverse: brandColor.grey900
      // For elements used on top of flask/default. Used for text, icon or border
    },
    shadow: {
      default: "#00000066",
      // For neutral drop shadow color.
      primary: "#43aefc33",
      // For primary drop shadow color.
      error: "#ff758466"
      // For critical/danger drop shadow color.
    }
  },
};
