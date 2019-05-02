import { css } from "styled-components";

export const colors = p => css`
  :root {
    --black       : ${p.theme && p.theme.black || `#000`};
    --near-black  : ${p.theme && p.theme.nearBack || `#111`};
    --dark-gray   : ${p.theme && p.theme.darkGray || `#333`};
    --mid-gray    : ${p.theme && p.theme.midGray || `#555`};
    --gray        : ${p.theme && p.theme.gray || `#777`};
    --silver      : ${p.theme && p.theme.silver || `#999`};
    --light-silver: ${p.theme && p.theme.lightSilver || `#aaa`};
    --moon-gray   : ${p.theme && p.theme.moonGray || `#ccc`};
    --light-gray  : ${p.theme && p.theme.lightGray || `#eee`};
    --near-white  : ${p.theme && p.theme.nearWhite || `#f4f4f4`};
    --white       : ${p.theme && p.theme.white || `#fff`};

    --transparent: ${p.theme && p.theme.transparent || `transparent`};

    --black-90: ${p.theme && p.theme.black90 || `rgba (0, 0, 0, 0.9)`};
    --black-80: ${p.theme && p.theme.black80 || `rgba (0, 0, 0, 0.8)`};
    --black-70: ${p.theme && p.theme.black70 || `rgba (0, 0, 0, 0.7)`};
    --black-60: ${p.theme && p.theme.black60 || `rgba (0, 0, 0, 0.6)`};
    --black-50: ${p.theme && p.theme.black50 || `rgba (0, 0, 0, 0.5)`};
    --black-40: ${p.theme && p.theme.black40 || `rgba (0, 0, 0, 0.4)`};
    --black-30: ${p.theme && p.theme.black30 || `rgba (0, 0, 0, 0.3)`};
    --black-20: ${p.theme && p.theme.black20 || `rgba (0, 0, 0, 0.2)`};
    --black-10: ${p.theme && p.theme.black10 || `rgba (0, 0, 0, 0.1)`};
    --black-05: ${p.theme && p.theme.black05 || `rgba (0, 0, 0, 0.05)`};
    --black-025: ${p.theme && p.theme.black025 || `rgba (0, 0, 0, 0.025)`};
    --black-0125: ${p.theme && p.theme.black0125 || `rgba (0, 0, 0, 0.0125)`};

    --white-90: ${p.theme && p.theme.white90 || `rgba (255, 255, 255, 0.9)`};
    --white-80: ${p.theme && p.theme.white80 || `rgba (255, 255, 255, 0.8)`};
    --white-70: ${p.theme && p.theme.white70 || `rgba (255, 255, 255, 0.7)`};
    --white-60: ${p.theme && p.theme.white60 || `rgba (255, 255, 255, 0.6)`};
    --white-50: ${p.theme && p.theme.white50 || `rgba (255, 255, 255, 0.5)`};
    --white-40: ${p.theme && p.theme.white40 || `rgba (255, 255, 255, 0.4)`};
    --white-30: ${p.theme && p.theme.white30 || `rgba (255, 255, 255, 0.3)`};
    --white-20: ${p.theme && p.theme.white20 || `rgba (255, 255, 255, 0.2)`};
    --white-10: ${p.theme && p.theme.white10 || `rgba (255, 255, 255, 0.1)`};
    --white-05: ${p => p.theme && p.theme.white05 || `rgba (255, 255, 255, 0.05)`};
    --white-025: ${p => p.theme && p.theme.white025 || `rgba (255, 255, 255, 0.025)`};
    --white-0125: ${p => p.theme && p.theme.white0125 || `rgba (255, 255, 255, 0.0125)`};

    --dark-red     : ${p.theme && p.theme.darkRed || `#e7040f`};
    --red          : ${p.theme && p.theme.red || `#ff4136`};
    --light-red    : ${p.theme && p.theme.lightRed || `#ff725c`};
    --orange       : ${p.theme && p.theme.orange || `#ff6300`};
    --gold         : ${p.theme && p.theme.gold || `#ffb700`};
    --yellow       : ${p.theme && p.theme.yellow || `#ffd700`};
    --light-yellow : ${p.theme && p.theme.lightYellow || `#fbf1a9`};
    --purple       : ${p.theme && p.theme.purple || `#5e2ca5`};
    --light-purple : ${p.theme && p.theme.lightPurple || `#a463f2`};
    --dark-pink    : ${p.theme && p.theme.darkPink || `#d5008f`};
    --hot-pink     : ${p.theme && p.theme.hotPink || `#ff41b4`};
    --pink         : ${p.theme && p.theme.pink || `#ff80cc`};
    --light-pink   : ${p.theme && p.theme.lightPink || `#ffa3d7`};
    --dark-green   : ${p.theme && p.theme.darkGreen || `#137752`};
    --green        : ${p.theme && p.theme.green || `#19a974`};
    --light-green  : ${p.theme && p.theme.lightGreen || `#9eebcf`};
    --navy         : ${p.theme && p.theme.navy || `#001b44`};
    --dark-blue    : ${p.theme && p.theme.darkBlue || `#00449e`};
    --blue         : ${p.theme && p.theme.blue || `#357edd`};
    --light-blue   : ${p.theme && p.theme.lightBlue || `#96ccff`};
    --lightest-blue: ${p.theme && p.theme.lightestBlue || `#cdecff`};
    --washed-blue  : ${p.theme && p.theme.washedBlue || `#f6fffe`};
    --washed-green : ${p.theme && p.theme.washedGreen || `#e8fdf5`};
    --washed-yellow: ${p.theme && p.theme.washedYellow || `#fffceb`};
    --washed-red   : ${p.theme && p.theme.washedRed || `#ffdfdf`};
  }
`;
