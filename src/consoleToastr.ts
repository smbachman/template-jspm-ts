import * as toastr from 'toastr';

toastr.options.newestOnTop = false;

function registerConsoleToast(consoleMethod, toastrMethod) {
  let originalMethod = console[consoleMethod];
  console[consoleMethod] = (...args) => {
    let options = {};
    if (toastrMethod === 'error') {
      options = {
        timeOut: 0,
        extendedTimeOut: 0,
        closeButton: true
      };
    }
    let pretty = args
      .map((it) => typeof it === 'string' ? it : JSON.stringify(it, null, 2))
      .join('\n');
    toastr[toastrMethod]("<pre>"+pretty+"</pre>", '', options);
    return originalMethod.apply(console, args);
  }
}

registerConsoleToast('log', 'info');
registerConsoleToast('debug', 'info');
registerConsoleToast('info', 'success');
registerConsoleToast('error', 'error');
registerConsoleToast('warn', 'warning');