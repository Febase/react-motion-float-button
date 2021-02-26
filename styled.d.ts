import '@emotion/react';

import {Theme as defaultTheme} from './src/utils/theme';

declare module '@emotion/react' {
  export interface Theme extends defaultTheme {}
}
