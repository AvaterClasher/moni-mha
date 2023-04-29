import React from 'react';
import { useThemeContext } from '../../context/theme';
import useCursorStyle from '../../hooks/useCursorStyle';
import useStyledTheme from '../../hooks/useStyledTheme';

const Logo = props => {
  const { buttonProps = {}, ...rootProps } = props;

  const theme = useStyledTheme();
  const [, dispatch] = useThemeContext();
  const {
    addCursorBorder,
    removeCursorBorder,
    addCursorColor,
    resetCursorColor,
  } = useCursorStyle();

  const handleToggleTheme = React.useCallback(
    event => {
      event.preventDefault();
      dispatch({ type: 'TOGGLE_THEME' });

      // reset the cursor color so that it uses the theme text color as default
      addCursorColor(null);
    },
    [dispatch, addCursorColor],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 131 21"
      fill={theme.text}
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
      {...rootProps}
    >
      {/* <path d="M0 .158v22.399h5.695V14.64h8.992V9.68H5.695V5.23h9.78V.158z" />
      <path d="M18.117 13.4V.159h5.732V12.89c0 3.173 1.47 4.815 3.869 4.815 2.365 0 3.833-1.642 3.833-4.815V.158h5.732v13.279c0 6.128-3.761 9.484-9.565 9.484-5.803 0-9.6-3.356-9.6-9.52" />
      <path d="M45.858 10.482h3.582c2.042 0 2.973-1.058 2.973-2.7 0-1.641-.931-2.699-2.973-2.699h-3.582v5.4zm0 4.67v7.405h-5.696V.158h9.887c4.729 0 7.989 2.737 7.989 7.625 0 3.392-1.684 5.727-4.371 6.748l5.158 8.026h-6.376l-4.585-7.405h-2.006z" />
      <path d="M66.366 10.482h3.582c2.042 0 2.973-1.058 2.973-2.7 0-1.641-.931-2.699-2.973-2.699h-3.582v5.4zm0 4.67v7.405H60.67V.158h9.887c4.729 0 7.989 2.737 7.989 7.625 0 3.392-1.684 5.727-4.371 6.748l5.158 8.026h-6.376l-4.584-7.405h-2.007z" /> */}
      <path d="M 20 22 L 16 22 L 18 0 L 24.3 0 L 28 11 L 32 0 L 38 0 L 39 22 L 35 22 L 34 3 L 28 17 L 27 15 L 22 3 L 20 22 Z" />
      <path d="M 71 0 l 3 13 l 3.046 -13.17 h 5.802 l -5.802 22.399 h -5.267 l -3.403 -13.133 l -3.439 13.133 h -5.266 L 65 0 h 5.875 l 3.082 13.17 z" />
      <path d="M 92 3 l 0 7 h 0 l 0 16 h -6 l 0 -26 L 92 0 h 0 z" />
      <path
        role="button"
        d="M 58.045 11.358 c 0 4.162 -3.313 7.536 -7.4 7.536 c -4.088 0 -7.4 -3.374 -7.4 -7.536 c 0 -4.162 3.312 -7.536 7.4 -7.536 c 4.087 0 7.4 3.374 7.4 7.536"
        fill={theme.colors.red}
        onMouseEnter={() => addCursorColor(theme.text)}
        onMouseLeave={resetCursorColor}
        onClick={handleToggleTheme}
        {...buttonProps}
      />
    </svg>
  );
};

export default Logo;
