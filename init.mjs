import { Central } from '@lionrockjs/central';

await Central.initConfig(new Map([
  ['form', await import('./config/form.mjs')],
]));
