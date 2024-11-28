import tseslint from 'typescript-eslint';

import { configReact } from './configs/config-react.js';
import configNode from './node.js';

export default tseslint.config({
  extends: [...configNode, ...configReact]
});
