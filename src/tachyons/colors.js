import {css} from "styled-components";

export const colors = css`
  :root {
    --black       : ${p => p.theme.black || `#000`};
    --near-black  : ${p => p.theme.nearBack || `#111`};
    --dark-gray   : ${p => p.theme.darkGray || `#333`};
    --mid-gray    : ${p => p.theme.midGray || `#555`};
    --gray        : ${p => p.theme.gray || `#777`};
    --silver      : ${p => p.theme.silver || `#999`};
    --light-silver: ${p => p.theme.lightSilver || `#aaa`};
    --moon-gray   : ${p => p.theme.moonGray || `#ccc`};
    --light-gray  : ${p => p.theme.lightGray || `#eee`};
    --near-white  : ${p => p.theme.nearWhite || `#f4f4f4`};
    --white       : ${p => p.theme.white || `#fff`};

    --transparent: ${p => p.theme.transparent || `transparent`};

    --black-90  : ${p => p.theme.black90 || `rgba (0, 0, 0, 0.9)`};
    --black-80  : ${p => p.theme.black80 || `rgba (0, 0, 0, 0.8)`};
    --black-70  : ${p => p.theme.black70 || `rgba (0, 0, 0, 0.7)`};
    --black-60  : ${p => p.theme.black60 || `rgba (0, 0, 0, 0.6)`};
    --black-50  : ${p => p.theme.black50 || `rgba (0, 0, 0, 0.5)`};
    --black-40  : ${p => p.theme.black40 || `rgba (0, 0, 0, 0.4)`};
    --black-30  : ${p => p.theme.black30 || `rgba (0, 0, 0, 0.3)`};
    --black-20  : ${p => p.theme.black20 || `rgba (0, 0, 0, 0.2)`};
    --black-10  : ${p => p.theme.black10 || `rgba (0, 0, 0, 0.1)`};
    --black-05  : ${p => p.theme.black05 || `rgba (0, 0, 0, 0.05)`};
    --black-025 : ${p => p.theme.black025 || `rgba (0, 0, 0, 0.025)`};
    --black-0125: ${p => p.theme.black0125 || `rgba (0, 0, 0, 0.0125)`};

    --white-90  : ${p => p.theme.white90 || `rgba (255, 255, 255, 0.9)`};
    --white-80  : ${p => p.theme.white80 || `rgba (255, 255, 255, 0.8)`};
    --white-70  : ${p => p.theme.white70 || `rgba (255, 255, 255, 0.7)`};
    --white-60  : ${p => p.theme.white60 || `rgba (255, 255, 255, 0.6)`};
    --white-50  : ${p => p.theme.white50 || `rgba (255, 255, 255, 0.5)`};
    --white-40  : ${p => p.theme.white40 || `rgba (255, 255, 255, 0.4)`};
    --white-30  : ${p => p.theme.white30 || `rgba (255, 255, 255, 0.3)`};
    --white-20  : ${p => p.theme.white20 || `rgba (255, 255, 255, 0.2)`};
    --white-10  : ${p => p.theme.white10 || `rgba (255, 255, 255, 0.1)`};
    --white-05  : ${p => p.theme.white05 || `rgba (255, 255, 255, 0.05)`};
    --white-025 : ${p => p.theme.white025 || `rgba (255, 255, 255, 0.025)`};
    --white-0125: ${p => p.theme.white0125 || `rgba (255, 255, 255, 0.0125)`};

    --dark-red     : ${p => p.theme.darkRed || `#e7040f`};
    --red          : ${p => p.theme.red || `#ff4136`};
    --light-red    : ${p => p.theme.lightRed || `#ff725c`};
    --orange       : ${p => p.theme.orange || `#ff6300`};
    --gold         : ${p => p.theme.gold || `#ffb700`};
    --yellow       : ${p => p.theme.yellow || `#ffd700`};
    --light-yellow : ${p => p.theme.lightYellow || `#fbf1a9`};
    --purple       : ${p => p.theme.purple || `#5e2ca5`};
    --light-purple : ${p => p.theme.lightPurple || `#a463f2`};
    --dark-pink    : ${p => p.theme.darkPink || `#d5008f`};
    --hot-pink     : ${p => p.theme.hotPink || `#ff41b4`};
    --pink         : ${p => p.theme.pink || `#ff80cc`};
    --light-pink   : ${p => p.theme.lightPink || `#ffa3d7`};
    --dark-green   : ${p => p.theme.darkGreen || `#137752`};
    --green        : ${p => p.theme.green || `#19a974`};
    --light-green  : ${p => p.theme.lightGreen || `#9eebcf`};
    --navy         : ${p => p.theme.navy || `#001b44`};
    --dark-blue    : ${p => p.theme.darkBlue || `#00449e`};
    --blue         : ${p => p.theme.blue || `#357edd`};
    --light-blue   : ${p => p.theme.lightBlue || `#96ccff`};
    --lightest-blue: ${p => p.theme.lightestBlue || `#cdecff`};
    --washed-blue  : ${p => p.theme.washedBlue || `#f6fffe`};
    --washed-green : ${p => p.theme.washedGreen || `#e8fdf5`};
    --washed-yellow: ${p => p.theme.washedYellow || `#fffceb`};
    --washed-red   : ${p => p.theme.washedRed || `#ffdfdf`};
  }
`;
