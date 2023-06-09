import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.light,
    brandImage: 'https://hamishw.com/icon.svg',
    brandTitle: 'Carlos Jair Components',
    brandUrl: 'https://hamishw.com',
  },
});
