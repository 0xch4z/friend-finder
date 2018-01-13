'use strict';

process.on('uncaughtException', e => {
  error(`Fatal error: ${e}`);
  exit(1);
});
//# sourceMappingURL=process.js.map