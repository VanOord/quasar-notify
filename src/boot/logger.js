import Logger from 'src/utils/logger';
import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  // eslint-disable-next-line
  app.config.globalProperties.$logger = Logger;

});
