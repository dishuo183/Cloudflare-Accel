var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
__name(notImplemented, "notImplemented");

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
if (!("__unenv__" in performance)) {
  const proto = Performance.prototype;
  for (const key of Object.getOwnPropertyNames(proto)) {
    if (key !== "constructor" && !(key in performance)) {
      const desc = Object.getOwnPropertyDescriptor(proto, key);
      if (desc) {
        Object.defineProperty(performance, key, desc);
      }
    }
  }
}
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
  const now = Date.now();
  const seconds = Math.trunc(now / 1e3);
  const nanos = now % 1e3 * 1e6;
  if (startTime) {
    let diffSeconds = seconds - startTime[0];
    let diffNanos = nanos - startTime[0];
    if (diffNanos < 0) {
      diffSeconds = diffSeconds - 1;
      diffNanos = 1e9 + diffNanos;
    }
    return [diffSeconds, diffNanos];
  }
  return [seconds, nanos];
}, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
  return BigInt(Date.now() * 1e6);
}, "bigint") });

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream = class {
  static {
    __name(this, "ReadStream");
  }
  fd;
  isRaw = false;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  setRawMode(mode) {
    this.isRaw = mode;
    return this;
  }
};

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream = class {
  static {
    __name(this, "WriteStream");
  }
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(fd) {
    this.fd = fd;
  }
  clearLine(dir, callback) {
    callback && callback();
    return false;
  }
  clearScreenDown(callback) {
    callback && callback();
    return false;
  }
  cursorTo(x, y, callback) {
    callback && typeof callback === "function" && callback();
    return false;
  }
  moveCursor(dx, dy, callback) {
    callback && callback();
    return false;
  }
  getColorDepth(env2) {
    return 1;
  }
  hasColors(count, env2) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(str, encoding, cb) {
    if (str instanceof Uint8Array) {
      str = new TextDecoder().decode(str);
    }
    try {
      console.log(str);
    } catch {
    }
    cb && typeof cb === "function" && cb();
    return false;
  }
};

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION = "22.14.0";

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
var Process = class _Process extends EventEmitter {
  static {
    __name(this, "Process");
  }
  env;
  hrtime;
  nextTick;
  constructor(impl) {
    super();
    this.env = impl.env;
    this.hrtime = impl.hrtime;
    this.nextTick = impl.nextTick;
    for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
      const value = this[prop];
      if (typeof value === "function") {
        this[prop] = value.bind(this);
      }
    }
  }
  // --- event emitter ---
  emitWarning(warning, type, code) {
    console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
  }
  emit(...args) {
    return super.emit(...args);
  }
  listeners(eventName) {
    return super.listeners(eventName);
  }
  // --- stdio (lazy initializers) ---
  #stdin;
  #stdout;
  #stderr;
  get stdin() {
    return this.#stdin ??= new ReadStream(0);
  }
  get stdout() {
    return this.#stdout ??= new WriteStream(1);
  }
  get stderr() {
    return this.#stderr ??= new WriteStream(2);
  }
  // --- cwd ---
  #cwd = "/";
  chdir(cwd2) {
    this.#cwd = cwd2;
  }
  cwd() {
    return this.#cwd;
  }
  // --- dummy props and getters ---
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${NODE_VERSION}`;
  }
  get versions() {
    return { node: NODE_VERSION };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  // --- noop methods ---
  ref() {
  }
  unref() {
  }
  // --- unimplemented methods ---
  umask() {
    throw createNotImplementedError("process.umask");
  }
  getBuiltinModule() {
    return void 0;
  }
  getActiveResourcesInfo() {
    throw createNotImplementedError("process.getActiveResourcesInfo");
  }
  exit() {
    throw createNotImplementedError("process.exit");
  }
  reallyExit() {
    throw createNotImplementedError("process.reallyExit");
  }
  kill() {
    throw createNotImplementedError("process.kill");
  }
  abort() {
    throw createNotImplementedError("process.abort");
  }
  dlopen() {
    throw createNotImplementedError("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw createNotImplementedError("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw createNotImplementedError("process.loadEnvFile");
  }
  disconnect() {
    throw createNotImplementedError("process.disconnect");
  }
  cpuUsage() {
    throw createNotImplementedError("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw createNotImplementedError("process.initgroups");
  }
  openStdin() {
    throw createNotImplementedError("process.openStdin");
  }
  assert() {
    throw createNotImplementedError("process.assert");
  }
  binding() {
    throw createNotImplementedError("process.binding");
  }
  // --- attached interfaces ---
  permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
  report = {
    directory: "",
    filename: "",
    signal: "SIGUSR2",
    compact: false,
    reportOnFatalError: false,
    reportOnSignal: false,
    reportOnUncaughtException: false,
    getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
    writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
  };
  finalization = {
    register: /* @__PURE__ */ notImplemented("process.finalization.register"),
    unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
    registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
  };
  memoryUsage = Object.assign(() => ({
    arrayBuffers: 0,
    rss: 0,
    external: 0,
    heapTotal: 0,
    heapUsed: 0
  }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
  // --- undefined props ---
  mainModule = void 0;
  domain = void 0;
  // optional
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  // internals
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess = globalThis["process"];
var getBuiltinModule = globalProcess.getBuiltinModule;
var workerdProcess = getBuiltinModule("node:process");
var unenvProcess = new Process({
  env: globalProcess.env,
  hrtime,
  // `nextTick` is available from workerd process v1
  nextTick: workerdProcess.nextTick
});
var { exit, features, platform } = workerdProcess;
var {
  _channel,
  _debugEnd,
  _debugProcess,
  _disconnect,
  _events,
  _eventsCount,
  _exiting,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _handleQueue,
  _kill,
  _linkedBinding,
  _maxListeners,
  _pendingMessage,
  _preload_modules,
  _rawDebug,
  _send,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  arch,
  argv,
  argv0,
  assert,
  availableMemory,
  binding,
  channel,
  chdir,
  config,
  connected,
  constrainedMemory,
  cpuUsage,
  cwd,
  debugPort,
  disconnect,
  dlopen,
  domain,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exitCode,
  finalization,
  getActiveResourcesInfo,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getMaxListeners,
  getuid,
  hasUncaughtExceptionCaptureCallback,
  hrtime: hrtime3,
  initgroups,
  kill,
  listenerCount,
  listeners,
  loadEnvFile,
  mainModule,
  memoryUsage,
  moduleLoadList,
  nextTick,
  off,
  on,
  once,
  openStdin,
  permission,
  pid,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  reallyExit,
  ref,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  send,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setMaxListeners,
  setSourceMapsEnabled,
  setuid,
  setUncaughtExceptionCaptureCallback,
  sourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  throwDeprecation,
  title,
  traceDeprecation,
  umask,
  unref,
  uptime,
  version,
  versions
} = unenvProcess;
var _process = {
  abort,
  addListener,
  allowedNodeEnvironmentFlags,
  hasUncaughtExceptionCaptureCallback,
  setUncaughtExceptionCaptureCallback,
  loadEnvFile,
  sourceMapsEnabled,
  arch,
  argv,
  argv0,
  chdir,
  config,
  connected,
  constrainedMemory,
  availableMemory,
  cpuUsage,
  cwd,
  debugPort,
  dlopen,
  disconnect,
  emit,
  emitWarning,
  env,
  eventNames,
  execArgv,
  execPath,
  exit,
  finalization,
  features,
  getBuiltinModule,
  getActiveResourcesInfo,
  getMaxListeners,
  hrtime: hrtime3,
  kill,
  listeners,
  listenerCount,
  memoryUsage,
  nextTick,
  on,
  off,
  once,
  pid,
  platform,
  ppid,
  prependListener,
  prependOnceListener,
  rawListeners,
  release,
  removeAllListeners,
  removeListener,
  report,
  resourceUsage,
  setMaxListeners,
  setSourceMapsEnabled,
  stderr,
  stdin,
  stdout,
  title,
  throwDeprecation,
  traceDeprecation,
  umask,
  uptime,
  version,
  versions,
  // @ts-expect-error old API
  domain,
  initgroups,
  moduleLoadList,
  reallyExit,
  openStdin,
  assert,
  binding,
  send,
  exitCode,
  channel,
  getegid,
  geteuid,
  getgid,
  getgroups,
  getuid,
  setegid,
  seteuid,
  setgid,
  setgroups,
  setuid,
  permission,
  mainModule,
  _events,
  _eventsCount,
  _exiting,
  _maxListeners,
  _debugEnd,
  _debugProcess,
  _fatalException,
  _getActiveHandles,
  _getActiveRequests,
  _kill,
  _preload_modules,
  _rawDebug,
  _startProfilerIdleNotifier,
  _stopProfilerIdleNotifier,
  _tickCallback,
  _disconnect,
  _handleQueue,
  _pendingMessage,
  _channel,
  _send,
  _linkedBinding
};
var process_default = _process;

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
globalThis.process = process_default;

// _worker.js
var ALLOWED_HOSTS = [
  "quay.io",
  "gcr.io",
  "k8s.gcr.io",
  "registry.k8s.io",
  "ghcr.io",
  "docker.cloudsmith.io",
  "registry-1.docker.io",
  "github.com",
  "api.github.com",
  "raw.githubusercontent.com",
  "gist.github.com",
  "gist.githubusercontent.com",
  "gitlab.com",
  "gitlab.freedesktop.org",
  "gitlab.gnome.org",
  "gitlab.kitware.com",
  "gitlab.archlinux.org",
  "gitlab.postmarketos.org"
];
var RESTRICT_PATHS = false;
var ALLOWED_PATHS = [
  "library",
  // Docker Hub 官方镜像仓库的命名空间
  "user-id-1",
  "user-id-2"
];
var LIGHTNING_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>`;
var HOMEPAGE_HTML = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cloudflare \u52A0\u901F</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${encodeURIComponent(LIGHTNING_SVG)}">
  <script>
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        var theme = stored || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    })();
  <\/script>
  <style>
    :root {
      color-scheme: light dark;
      --accent: #0071e3;
      --accent-active: #0059b3;
      --accent-soft: rgba(0, 113, 227, 0.15);
      --text-primary: #1d1d1f;
      --text-secondary: #6e6e73;
      --surface-glass: rgba(255, 255, 255, 0.72);
      --panel-bg: rgba(255, 255, 255, 0.86);
      --panel-border: rgba(0, 0, 0, 0.06);
      --border-soft: rgba(0, 0, 0, 0.08);
      --border-bright: rgba(255, 255, 255, 0.8);
      --shadow-color: rgba(15, 23, 42, 0.14);
      --chip-bg: rgba(0, 0, 0, 0.05);
      --chip-bg-hover: rgba(0, 0, 0, 0.08);
      --input-bg: #ffffff;
      --code-bg: rgba(0, 0, 0, 0.04);
      --success: #1fa557;
      --error: #e0342a;
    }

    html[data-theme="dark"] {
      --text-primary: #f5f5f7;
      --text-secondary: #a1a1a6;
      --surface-glass: rgba(28, 28, 32, 0.68);
      --panel-bg: rgba(255, 255, 255, 0.06);
      --panel-border: rgba(255, 255, 255, 0.08);
      --border-soft: rgba(255, 255, 255, 0.1);
      --border-bright: rgba(255, 255, 255, 0.16);
      --shadow-color: rgba(0, 0, 0, 0.55);
      --chip-bg: rgba(255, 255, 255, 0.08);
      --chip-bg-hover: rgba(255, 255, 255, 0.14);
      --input-bg: rgba(255, 255, 255, 0.08);
      --code-bg: rgba(255, 255, 255, 0.06);
      --success: #32d74b;
      --error: #ff453a;
    }

    * {
      box-sizing: border-box;
    }

    html {
      background:
        radial-gradient(1100px 760px at 12% -12%, rgba(10, 132, 255, 0.16), transparent 60%),
        radial-gradient(900px 680px at 108% 8%, rgba(175, 82, 222, 0.12), transparent 55%),
        linear-gradient(180deg, #eef1f6, #e3e7ee);
      min-height: 100%;
    }

    html[data-theme="dark"] {
      background:
        radial-gradient(1100px 760px at 12% -12%, rgba(10, 132, 255, 0.22), transparent 60%),
        radial-gradient(900px 680px at 108% 8%, rgba(94, 92, 230, 0.18), transparent 55%),
        linear-gradient(180deg, #000000, #1c1c1e);
    }

    body {
      min-height: 100vh;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", "Helvetica Neue", "Microsoft YaHei", Arial, sans-serif;
      color: var(--text-primary);
      -webkit-font-smoothing: antialiased;
    }

    .theme-toggle {
      position: fixed;
      top: 1.25rem;
      right: 1.25rem;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      border: 1px solid var(--border-soft);
      background: var(--surface-glass);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      font-size: 1.1rem;
      cursor: pointer;
      box-shadow: 0 4px 14px var(--shadow-color);
      transition: transform 100ms ease-out;
    }
    .theme-toggle:active {
      transform: scale(0.92);
    }

    @keyframes shell-in {
      from {
        opacity: 0;
        transform: translateY(10px) scale(0.98);
        backdrop-filter: blur(0px) saturate(100%);
        -webkit-backdrop-filter: blur(0px) saturate(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
        backdrop-filter: blur(28px) saturate(180%);
        -webkit-backdrop-filter: blur(28px) saturate(180%);
      }
    }

    .shell {
      width: 100%;
      max-width: 720px;
      padding: 2.25rem;
      border-radius: 28px;
      background: var(--surface-glass);
      backdrop-filter: blur(28px) saturate(180%);
      -webkit-backdrop-filter: blur(28px) saturate(180%);
      border: 1px solid var(--border-soft);
      border-top-color: var(--border-bright);
      box-shadow: 0 24px 70px var(--shadow-color);
      animation: shell-in 520ms cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    h1 {
      font-size: clamp(1.6rem, 4vw, 2.1rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.15;
      text-align: center;
      margin: 0 0 2rem;
    }

    .panel {
      background: var(--panel-bg);
      border: 1px solid var(--panel-border);
      border-radius: 18px;
      padding: 1.5rem;
      transition: transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 200ms ease, border-color 200ms ease;
    }
    .panel + .panel {
      margin-top: 1.25rem;
    }
    @media (hover: hover) {
      .panel:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 26px var(--shadow-color);
        border-color: var(--border-bright);
      }
    }

    h2 {
      font-size: 1.05rem;
      font-weight: 600;
      letter-spacing: -0.01em;
      margin: 0 0 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .panel p {
      margin: 0 0 1rem;
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--text-secondary);
    }

    .row {
      display: flex;
      gap: 0.6rem;
    }

    input[type="text"] {
      flex: 1;
      min-width: 0;
      font: inherit;
      font-size: 0.92rem;
      padding: 0.7rem 0.9rem;
      border-radius: 12px;
      border: 1px solid var(--border-soft);
      background: var(--input-bg);
      color: var(--text-primary);
      outline: none;
      transition: border-color 150ms ease, box-shadow 150ms ease;
    }
    input[type="text"]::placeholder {
      color: var(--text-secondary);
    }
    input[type="text"]:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 4px var(--accent-soft);
    }

    button {
      font: inherit;
      border: none;
      cursor: pointer;
      border-radius: 12px;
    }
    button:focus-visible {
      outline: none;
      box-shadow: 0 0 0 4px var(--accent-soft);
    }
    .theme-toggle:focus-visible {
      box-shadow: 0 4px 14px var(--shadow-color), 0 0 0 4px var(--accent-soft);
    }

    .btn-primary {
      flex-shrink: 0;
      background: var(--accent);
      color: #ffffff;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.7rem 1.25rem;
      transition: transform 100ms ease-out, background-color 150ms ease;
    }
    @media (hover: hover) {
      .btn-primary:hover {
        background: var(--accent-active);
      }
    }
    .btn-primary:active {
      transform: scale(0.97);
      background: var(--accent-active);
    }

    .btn-chip {
      flex: 1;
      background: var(--chip-bg);
      color: var(--text-primary);
      font-size: 0.85rem;
      font-weight: 500;
      padding: 0.55rem 0.9rem;
      transition: transform 100ms ease-out, background-color 150ms ease;
    }
    @media (hover: hover) {
      .btn-chip:hover {
        background: var(--chip-bg-hover);
      }
    }
    .btn-chip:active {
      transform: scale(0.96);
      background: var(--chip-bg-hover);
    }

    .result-text {
      margin: 0.9rem 0 0;
      padding: 0.75rem 0.9rem;
      border-radius: 10px;
      background: var(--code-bg);
      color: var(--success);
      font: 0.85rem/1.5 ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      word-break: break-all;
      overflow-wrap: break-word;
    }

    .btn-row {
      display: flex;
      gap: 0.6rem;
      margin-top: 0.75rem;
    }

    .hidden {
      display: none !important;
    }

    footer {
      margin-top: 1.75rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.65rem;
      text-align: center;
      font-size: 0.8rem;
      color: var(--text-secondary);
    }

    .toast {
      position: fixed;
      bottom: 1.75rem;
      left: 50%;
      transform: translateX(-50%) translateY(12px) scale(0.96);
      background: var(--success);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      box-shadow: 0 12px 30px var(--shadow-color);
      opacity: 0;
      font-size: 0.9rem;
      max-width: 90%;
      text-align: center;
      pointer-events: none;
      transition: transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 200ms ease;
    }
    .toast.error {
      background: var(--error);
    }
    .toast.show {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
    }

    @media (max-width: 640px) {
      body { padding: 1rem; }
      .shell { padding: 1.25rem; border-radius: 22px; }
      .panel { padding: 1.1rem; }
      h1 { font-size: 1.4rem; margin-bottom: 1.25rem; }
      h2 { font-size: 1rem; }
      .row { flex-direction: column; }
      .btn-primary { width: 100%; }
      .result-text { font-size: 0.8rem; }
      footer { font-size: 0.75rem; }
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
      }
      .toast {
        transform: translateX(-50%) !important;
      }
      .theme-toggle:active,
      .btn-primary:active,
      .btn-chip:active {
        transform: none !important;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      .shell, .theme-toggle, .toast {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
      }
      .shell {
        background: var(--panel-bg);
      }
    }

    @media (prefers-contrast: more) {
      .shell, .theme-toggle, .toast {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
      }
      .shell {
        background: Canvas;
        border: 1px solid currentColor;
      }
    }
  </style>
</head>
<body>
  <button onclick="toggleTheme()" class="theme-toggle" aria-label="\u5207\u6362\u4E3B\u9898">
    <span class="sun">\u2600\uFE0F</span>
    <span class="moon hidden">\u{1F319}</span>
  </button>
  <div class="shell">
    <h1>Cloudflare \u52A0\u901F\u4E0B\u8F7D</h1>

    <!-- GitHub \u94FE\u63A5\u8F6C\u6362 -->
    <div class="panel">
      <h2>\u26A1 GitHub \u6587\u4EF6\u52A0\u901F / Git Clone</h2>
      <p>\u8F93\u5165 GitHub \u6587\u4EF6\u94FE\u63A5\u83B7\u53D6\u52A0\u901F\u94FE\u63A5\uFF1B\u8F93\u5165\u4EE5 .git \u7ED3\u5C3E\u7684\u4ED3\u5E93\u5730\u5740\u5219\u81EA\u52A8\u751F\u6210 git clone \u52A0\u901F\u547D\u4EE4\u3002</p>
      <div class="row">
        <input
          id="github-url"
          type="text"
          placeholder="\u8BF7\u8F93\u5165 GitHub \u6587\u4EF6\u94FE\u63A5\u6216 .git \u4ED3\u5E93\u5730\u5740\uFF0C\u4F8B\u5982\uFF1Ahttps://github.com/user/repo/releases/..."
        >
        <button id="github-submit-btn" class="btn-primary" onclick="convertGithubUrl()">\u83B7\u53D6\u52A0\u901F\u94FE\u63A5</button>
      </div>
      <p id="github-result" class="result-text hidden"></p>
      <div id="github-buttons" class="btn-row hidden">
        <button class="btn-chip" onclick="copyGithubUrl()">\u{1F4CB} \u590D\u5236</button>
        <button class="btn-chip" onclick="openGithubUrl()">\u{1F517} \u6253\u5F00\u94FE\u63A5</button>
      </div>
    </div>

    <!-- Docker \u955C\u50CF\u52A0\u901F -->
    <div class="panel">
      <h2>\u{1F433} Docker \u955C\u50CF\u52A0\u901F</h2>
      <p>\u8F93\u5165\u539F\u955C\u50CF\u5730\u5740\uFF08\u5982 hello-world \u6216 ghcr.io/user/repo\uFF09\uFF0C\u83B7\u53D6\u52A0\u901F\u62C9\u53D6\u547D\u4EE4\u3002</p>
      <div class="row">
        <input
          id="docker-image"
          type="text"
          placeholder="\u8BF7\u8F93\u5165\u955C\u50CF\u5730\u5740\uFF0C\u4F8B\u5982\uFF1Ahello-world \u6216 ghcr.io/user/repo"
        >
        <button class="btn-primary" onclick="convertDockerImage()">\u83B7\u53D6\u52A0\u901F\u547D\u4EE4</button>
      </div>
      <p id="docker-result" class="result-text hidden"></p>
      <div id="docker-buttons" class="btn-row hidden">
        <button class="btn-chip" onclick="copyDockerCommand()">\u{1F4CB} \u590D\u5236\u547D\u4EE4</button>
      </div>
    </div>

    <footer>
      <span>Powered by Cloudflare Workers</span>
    </footer>
  </div>

  <div id="toast" class="toast"></div>

  <script>
    // \u52A8\u6001\u83B7\u53D6\u5F53\u524D\u57DF\u540D
    const currentOrigin = window.location.origin;
    const currentHost = window.location.host;

    // \u4E3B\u9898\u5207\u6362
    function applyThemeIcon(theme) {
      const sun = document.querySelector('.sun');
      const moon = document.querySelector('.moon');
      if (theme === 'dark') {
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
      } else {
        moon.classList.add('hidden');
        sun.classList.remove('hidden');
      }
    }

    function toggleTheme() {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
      applyThemeIcon(next);
    }

    // \u521D\u59CB\u5316\u4E3B\u9898\u56FE\u6807\uFF08data-theme \u5DF2\u7531 head \u5185\u8054\u811A\u672C\u5728\u9996\u6B21\u6E32\u67D3\u524D\u8BBE\u7F6E\uFF0C\u907F\u514D\u95EA\u70C1\uFF09
    applyThemeIcon(document.documentElement.getAttribute('data-theme'));

    // \u663E\u793A\u5F39\u7A97\u63D0\u793A
    let toastTimer = null;
    function showToast(message, isError = false) {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.classList.toggle('error', isError);
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }

    // \u590D\u5236\u6587\u672C\u7684\u901A\u7528\u51FD\u6570
    function copyToClipboard(text) {
      // \u5C1D\u8BD5\u4F7F\u7528 navigator.clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text).catch(err => {
          console.error('Clipboard API failed:', err);
          return false;
        });
      }
      // \u540E\u5907\u65B9\u6848\uFF1A\u4F7F\u7528 document.execCommand
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        return successful ? Promise.resolve() : Promise.reject(new Error('Copy command failed'));
      } catch (err) {
        document.body.removeChild(textarea);
        return Promise.reject(err);
      }
    }

    // GitHub \u94FE\u63A5\u8F6C\u6362
    let githubAcceleratedUrl = '';
    let githubIsGitMode = false;
    function convertGithubUrl() {
      const input = document.getElementById('github-url').value.trim();
      const result = document.getElementById('github-result');
      const buttons = document.getElementById('github-buttons');
      const submitBtn = document.getElementById('github-submit-btn');
      const copyBtn = buttons.children[0];
      const openBtn = buttons.children[1];
      if (!input) {
        showToast('\u8BF7\u8F93\u5165\u6709\u6548\u7684\u94FE\u63A5', true);
        result.classList.add('hidden');
        buttons.classList.add('hidden');
        return;
      }
      if (!input.startsWith('https://')) {
        showToast('\u94FE\u63A5\u5FC5\u987B\u4EE5 https:// \u5F00\u5934', true);
        result.classList.add('hidden');
        buttons.classList.add('hidden');
        return;
      }

      // \u68C0\u6D4B\u662F\u5426\u4EE5 .git \u7ED3\u5C3E\uFF0C\u5982\u679C\u662F\u5219\u8F93\u51FA git clone \u6307\u4EE4
      if (input.endsWith('.git')) {
        githubIsGitMode = true;
        submitBtn.textContent = '\u83B7\u53D6\u52A0\u901F\u547D\u4EE4';
        const domainPath = input.substring(8); // \u53BB\u6389 https://
        const proxyUrl =  currentOrigin + '/https://' + domainPath;
        githubAcceleratedUrl = 'git clone ' + proxyUrl;
        result.textContent = '\u52A0\u901F\u547D\u4EE4: ' + githubAcceleratedUrl;
        result.classList.remove('hidden');
        buttons.classList.remove('hidden');
        copyBtn.textContent = '\u{1F4CB} \u590D\u5236\u547D\u4EE4';
        // .git \u6A21\u5F0F\u9690\u85CF"\u6253\u5F00\u94FE\u63A5"\u6309\u94AE
        if (openBtn) openBtn.classList.add('hidden');
        copyToClipboard(githubAcceleratedUrl).then(() => {
          showToast('\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');
        }).catch(err => {
          showToast('\u590D\u5236\u5931\u8D25: ' + err.message, true);
        });
        return;
      }

      githubIsGitMode = false;
      submitBtn.textContent = '\u83B7\u53D6\u52A0\u901F\u94FE\u63A5';
      // \u4FDD\u6301\u73B0\u6709\u683C\u5F0F\uFF1A\u57DF\u540D/https://\u539F\u59CB\u94FE\u63A5
      githubAcceleratedUrl = currentOrigin + '/https://' + input.substring(8);
      result.textContent = '\u52A0\u901F\u94FE\u63A5: ' + githubAcceleratedUrl;
      result.classList.remove('hidden');
      buttons.classList.remove('hidden');
      copyBtn.textContent = '\u{1F4CB} \u590D\u5236\u94FE\u63A5';
      // \u6B63\u5E38\u6A21\u5F0F\u663E\u793A"\u6253\u5F00\u94FE\u63A5"\u6309\u94AE
      if (openBtn) openBtn.classList.remove('hidden');
      copyToClipboard(githubAcceleratedUrl).then(() => {
        showToast('\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');
      }).catch(err => {
        showToast('\u590D\u5236\u5931\u8D25: ' + err.message, true);
      });
    }

    function copyGithubUrl() {
      copyToClipboard(githubAcceleratedUrl).then(() => {
        showToast('\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');
      }).catch(err => {
        showToast('\u590D\u5236\u5931\u8D25: ' + err.message, true);
      });
    }

    function openGithubUrl() {
      if (!githubIsGitMode) {
        window.open(githubAcceleratedUrl, '_blank');
      }
    }

    // Docker \u955C\u50CF\u8F6C\u6362
    let dockerCommand = '';
    function convertDockerImage() {
      const input = document.getElementById('docker-image').value.trim();
      const result = document.getElementById('docker-result');
      const buttons = document.getElementById('docker-buttons');
      if (!input) {
        showToast('\u8BF7\u8F93\u5165\u6709\u6548\u7684\u955C\u50CF\u5730\u5740', true);
        result.classList.add('hidden');
        buttons.classList.add('hidden');
        return;
      }
      dockerCommand = 'docker pull ' + currentHost + '/' + input;
      result.textContent = '\u52A0\u901F\u547D\u4EE4: ' + dockerCommand;
      result.classList.remove('hidden');
      buttons.classList.remove('hidden');
      copyToClipboard(dockerCommand).then(() => {
        showToast('\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');
      }).catch(err => {
        showToast('\u590D\u5236\u5931\u8D25: ' + err.message, true);
      });
    }

    function copyDockerCommand() {
      copyToClipboard(dockerCommand).then(() => {
        showToast('\u5DF2\u624B\u52A8\u590D\u5236\u5230\u526A\u8D34\u677F');
      }).catch(err => {
        showToast('\u624B\u52A8\u590D\u5236\u5931\u8D25: ' + err.message, true);
      });
    }
  <\/script>
</body>
</html>
`;
async function handleToken(realm, service, scope) {
  const tokenUrl = `${realm}?service=${service}&scope=${scope}`;
  console.log(`Fetching token from: ${tokenUrl}`);
  try {
    const tokenResponse = await fetch(tokenUrl, {
      method: "GET",
      headers: { "Accept": "application/json" }
    });
    if (!tokenResponse.ok) {
      console.log(`Token request failed: ${tokenResponse.status} ${tokenResponse.statusText}`);
      return null;
    }
    const tokenData = await tokenResponse.json();
    const token = tokenData.token || tokenData.access_token;
    if (!token) {
      console.log("No token found in response");
      return null;
    }
    console.log("Token acquired successfully");
    return token;
  } catch (error) {
    console.log(`Error fetching token: ${error.message}`);
    return null;
  }
}
__name(handleToken, "handleToken");
function isAmazonS3(url) {
  try {
    return new URL(url).hostname.includes("amazonaws.com");
  } catch {
    return false;
  }
}
__name(isAmazonS3, "isAmazonS3");
function getEmptyBodySHA256() {
  return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
}
__name(getEmptyBodySHA256, "getEmptyBodySHA256");
function isGitRequest(request, targetDomain) {
  const ua = request.headers.get("User-Agent") || "";
  if (ua.toLowerCase().includes("git/")) {
    return true;
  }
  const gitDomains = ["github.com", "api.github.com", "raw.githubusercontent.com", "gist.github.com", "gist.githubusercontent.com", "gitlab.com", "gitlab.freedesktop.org", "gitlab.gnome.org", "gitlab.kitware.com", "gitlab.archlinux.org", "gitlab.postmarketos.org"];
  if (gitDomains.includes(targetDomain)) {
    const url = new URL(request.url);
    const path = url.pathname;
    if (path.includes("/info/refs") || path.includes("/git-upload-pack") || path.includes("/git-receive-pack")) {
      return true;
    }
    if (path.includes(".git")) {
      return true;
    }
  }
  return false;
}
__name(isGitRequest, "isGitRequest");
function buildGitHeaders(request, targetDomain) {
  const headers = new Headers(request.headers);
  headers.set("Host", targetDomain);
  headers.delete("CF-Connecting-IP");
  headers.delete("CF-IPCountry");
  headers.delete("CF-Ray");
  headers.delete("CF-Visitor");
  headers.delete("CF-Worker");
  headers.delete("X-Forwarded-For");
  headers.delete("X-Real-IP");
  headers.delete("X-Forwarded-Proto");
  headers.delete("X-Forwarded-Host");
  headers.delete("x-amz-content-sha256");
  headers.delete("x-amz-date");
  headers.delete("x-amz-security-token");
  headers.delete("x-amz-user-agent");
  return headers;
}
__name(buildGitHeaders, "buildGitHeaders");
function createErrorResponse(request, status, code, message, extraHeaders = {}) {
  const acceptsJson = request.headers.get("Accept")?.includes("application/json");
  const body = acceptsJson ? JSON.stringify({ error: { code, message } }) : `${code}: ${message}
`;
  return new Response(body, {
    status,
    headers: {
      "Content-Type": acceptsJson ? "application/json; charset=utf-8" : "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
      ...extraHeaders
    }
  });
}
__name(createErrorResponse, "createErrorResponse");
function applyCachePolicy(response, request, targetDomain, targetPath, isDockerRequest, isV2Request, v2RequestType, v2RequestTag) {
  if (request.method !== "GET" || request.headers.has("Authorization") || request.headers.has("Range") || response.status !== 200) {
    return;
  }
  let ttl = 0;
  if (isDockerRequest && isV2Request && v2RequestType === "manifests") {
    ttl = v2RequestTag?.startsWith("sha256:") ? 3600 : 300;
  }
  if (ttl) {
    response.headers.set("Cache-Control", `public, max-age=${ttl}, s-maxage=${ttl}, stale-while-revalidate=60`);
    response.headers.set("CDN-Cache-Control", `max-age=${ttl}, stale-while-revalidate=60`);
  }
}
__name(applyCachePolicy, "applyCachePolicy");
async function handleRequest(request, redirectCount = 0) {
  const MAX_REDIRECTS = 5;
  const url = new URL(request.url);
  let path = url.pathname;
  console.log(`Request: ${request.method} ${path}`);
  if (path === "/" || path === "") {
    return new Response(HOMEPAGE_HTML, {
      status: 200,
      // 首页可被浏览器缓存，减少重复访问带来的 Worker 请求消耗
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=300"
      }
    });
  }
  let isV2Request = false;
  let v2RequestType = null;
  let v2RequestTag = null;
  if (path.startsWith("/v2/")) {
    isV2Request = true;
    path = path.replace("/v2/", "");
    const pathSegments = path.split("/").filter((part) => part);
    if (pathSegments.length >= 3) {
      v2RequestType = pathSegments[pathSegments.length - 2];
      v2RequestTag = pathSegments[pathSegments.length - 1];
      path = pathSegments.slice(0, pathSegments.length - 2).join("/");
    }
  }
  const pathParts = path.split("/").filter((part) => part);
  if (pathParts.length < 1) {
    return createErrorResponse(request, 400, "INVALID_REQUEST", "Target domain or path is required.");
  }
  let targetDomain, targetPath, isDockerRequest = false;
  const fullPath = (path.startsWith("/") ? path.substring(1) : path) + url.search;
  if (fullPath.startsWith("https://") || fullPath.startsWith("http://")) {
    const urlObj = new URL(fullPath);
    targetDomain = urlObj.hostname;
    targetPath = urlObj.pathname.substring(1) + urlObj.search;
    isDockerRequest = ["quay.io", "gcr.io", "k8s.gcr.io", "registry.k8s.io", "ghcr.io", "docker.cloudsmith.io", "registry-1.docker.io", "docker.io"].includes(targetDomain);
    if (targetDomain === "docker.io") {
      targetDomain = "registry-1.docker.io";
    }
  } else {
    if (pathParts[0] === "docker.io") {
      isDockerRequest = true;
      targetDomain = "registry-1.docker.io";
      if (pathParts.length === 2) {
        targetPath = `library/${pathParts[1]}`;
      } else {
        targetPath = pathParts.slice(1).join("/");
      }
    } else if (ALLOWED_HOSTS.includes(pathParts[0])) {
      targetDomain = pathParts[0];
      targetPath = pathParts.slice(1).join("/") + url.search;
      isDockerRequest = ["quay.io", "gcr.io", "k8s.gcr.io", "registry.k8s.io", "ghcr.io", "docker.cloudsmith.io", "registry-1.docker.io"].includes(targetDomain);
    } else if (pathParts.length >= 1 && pathParts[0] === "library") {
      isDockerRequest = true;
      targetDomain = "registry-1.docker.io";
      targetPath = pathParts.join("/");
    } else if (pathParts.length >= 2) {
      isDockerRequest = true;
      targetDomain = "registry-1.docker.io";
      targetPath = pathParts.join("/");
    } else {
      isDockerRequest = true;
      targetDomain = "registry-1.docker.io";
      targetPath = `library/${pathParts.join("/")}`;
    }
  }
  if (!ALLOWED_HOSTS.includes(targetDomain)) {
    console.log(`Blocked: Domain ${targetDomain} not in allowed list`);
    return createErrorResponse(request, 400, "INVALID_TARGET_DOMAIN", "The target domain is not allowed.");
  }
  if (RESTRICT_PATHS) {
    const checkPath = isDockerRequest ? targetPath : path;
    console.log(`Checking whitelist against path: ${checkPath}`);
    const isPathAllowed = ALLOWED_PATHS.some(
      (pathString) => checkPath.toLowerCase().includes(pathString.toLowerCase())
    );
    if (!isPathAllowed) {
      console.log(`Blocked: Path ${checkPath} not in allowed paths`);
      return createErrorResponse(request, 403, "PATH_NOT_ALLOWED", "The target path is not allowed.");
    }
  }
  let targetUrl;
  if (isDockerRequest) {
    if (isV2Request && v2RequestType && v2RequestTag) {
      targetUrl = `https://${targetDomain}/v2/${targetPath}/${v2RequestType}/${v2RequestTag}`;
    } else {
      targetUrl = `https://${targetDomain}/${isV2Request ? "v2/" : ""}${targetPath}`;
    }
  } else {
    targetUrl = `https://${targetDomain}/${targetPath}`;
  }
  const isGit = isGitRequest(request, targetDomain);
  let newRequestHeaders;
  if (isGit) {
    newRequestHeaders = buildGitHeaders(request, targetDomain);
  } else {
    newRequestHeaders = new Headers(request.headers);
    newRequestHeaders.set("Host", targetDomain);
    newRequestHeaders.delete("x-amz-content-sha256");
    newRequestHeaders.delete("x-amz-date");
    newRequestHeaders.delete("x-amz-security-token");
    newRequestHeaders.delete("x-amz-user-agent");
    if (isAmazonS3(targetUrl)) {
      newRequestHeaders.set("x-amz-content-sha256", getEmptyBodySHA256());
      newRequestHeaders.set("x-amz-date", (/* @__PURE__ */ new Date()).toISOString().replace(/[-:T]/g, "").slice(0, -5) + "Z");
    }
  }
  try {
    const redirectMode = isDockerRequest ? "manual" : "follow";
    let response = await fetch(targetUrl, {
      method: request.method,
      headers: newRequestHeaders,
      body: request.body,
      redirect: redirectMode
    });
    console.log(`Initial response: ${response.status} ${response.statusText} [git=${isGit}]`);
    if (isDockerRequest && response.status === 401) {
      const wwwAuth = response.headers.get("WWW-Authenticate");
      if (wwwAuth) {
        const authMatch = wwwAuth.match(/Bearer realm="([^"]+)",service="([^"]*)",scope="([^"]*)"/);
        if (authMatch) {
          const [, realm, service, scope] = authMatch;
          console.log(`Auth challenge: realm=${realm}, service=${service || targetDomain}, scope=${scope}`);
          const token = await handleToken(realm, service || targetDomain, scope);
          if (token) {
            const authHeaders = new Headers(request.headers);
            authHeaders.set("Authorization", `Bearer ${token}`);
            authHeaders.set("Host", targetDomain);
            if (isAmazonS3(targetUrl)) {
              authHeaders.set("x-amz-content-sha256", getEmptyBodySHA256());
              authHeaders.set("x-amz-date", (/* @__PURE__ */ new Date()).toISOString().replace(/[-:T]/g, "").slice(0, -5) + "Z");
            } else {
              authHeaders.delete("x-amz-content-sha256");
              authHeaders.delete("x-amz-date");
              authHeaders.delete("x-amz-security-token");
              authHeaders.delete("x-amz-user-agent");
            }
            const authRequest = new Request(targetUrl, {
              method: request.method,
              headers: authHeaders,
              body: request.body,
              redirect: "manual"
            });
            console.log("Retrying with token");
            response = await fetch(authRequest);
            console.log(`Token response: ${response.status} ${response.statusText}`);
          } else {
            console.log("No token acquired, falling back to anonymous request");
            const anonHeaders = new Headers(request.headers);
            anonHeaders.delete("Authorization");
            anonHeaders.set("Host", targetDomain);
            if (isAmazonS3(targetUrl)) {
              anonHeaders.set("x-amz-content-sha256", getEmptyBodySHA256());
              anonHeaders.set("x-amz-date", (/* @__PURE__ */ new Date()).toISOString().replace(/[-:T]/g, "").slice(0, -5) + "Z");
            } else {
              anonHeaders.delete("x-amz-content-sha256");
              anonHeaders.delete("x-amz-date");
              anonHeaders.delete("x-amz-security-token");
              anonHeaders.delete("x-amz-user-agent");
            }
            const anonRequest = new Request(targetUrl, {
              method: request.method,
              headers: anonHeaders,
              body: request.body,
              redirect: "manual"
            });
            response = await fetch(anonRequest);
            console.log(`Anonymous response: ${response.status} ${response.statusText}`);
          }
        } else {
          console.log("Invalid WWW-Authenticate header");
        }
      } else {
        console.log("No WWW-Authenticate header in 401 response");
      }
    }
    if (isDockerRequest && (response.status === 307 || response.status === 302)) {
      const redirectUrl = response.headers.get("Location");
      if (redirectUrl) {
        console.log(`Redirect detected: ${redirectUrl}`);
        const redirectHeaders = new Headers(request.headers);
        redirectHeaders.set("Host", new URL(redirectUrl).hostname);
        if (isAmazonS3(redirectUrl)) {
          const EMPTY_BODY_SHA256 = getEmptyBodySHA256();
          redirectHeaders.set("x-amz-content-sha256", EMPTY_BODY_SHA256);
          redirectHeaders.set("x-amz-date", (/* @__PURE__ */ new Date()).toISOString().replace(/[-:T]/g, "").slice(0, -5) + "Z");
        }
        if (response.headers.get("Authorization")) {
          redirectHeaders.set("Authorization", response.headers.get("Authorization"));
        }
        const redirectRequest = new Request(redirectUrl, {
          method: request.method,
          headers: redirectHeaders,
          body: request.body,
          redirect: "manual"
        });
        response = await fetch(redirectRequest);
        console.log(`Redirect response: ${response.status} ${response.statusText}`);
        if (!response.ok) {
          console.log("Redirect request failed, returning original redirect response");
          return new Response(response.body, {
            status: response.status,
            headers: response.headers
          });
        }
      }
    }
    const newResponse = new Response(response.body, response);
    newResponse.headers.set("Access-Control-Allow-Origin", "*");
    newResponse.headers.set("Access-Control-Allow-Methods", "GET, HEAD, POST, OPTIONS");
    if (isDockerRequest) {
      newResponse.headers.set("Docker-Distribution-API-Version", "registry/2.0");
      newResponse.headers.delete("Location");
    }
    applyCachePolicy(newResponse, request, targetDomain, targetPath, isDockerRequest, isV2Request, v2RequestType, v2RequestTag);
    if (isGit) {
      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("x-git-")) {
        console.log(`Git smart-http response: ${response.status} ${contentType}`);
      }
    }
    return newResponse;
  } catch (error) {
    console.log(`Fetch error: ${error.message}`);
    return createErrorResponse(request, 502, "UPSTREAM_REQUEST_FAILED", "The upstream request failed.");
  }
}
__name(handleRequest, "handleRequest");
var worker_default = {
  async fetch(request, env2, ctx) {
    const url = new URL(request.url);
    if (url.pathname !== "/" && url.pathname !== "") {
      const clientIp = request.headers.get("CF-Connecting-IP") || "unknown";
      let allowed = true;
      try {
        const { success } = await env2.RATE_LIMITER.limit({ key: clientIp });
        allowed = success;
      } catch (error) {
        console.log(`Rate limiter unavailable: ${error.message}`);
      }
      if (!allowed) {
        return createErrorResponse(request, 429, "RATE_LIMITED", "Too many requests. Please try again later.", {
          "Retry-After": "60"
        });
      }
    }
    return handleRequest(request);
  }
};

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-CW2Qv8/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// C:/Users/dishuo/AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-CW2Qv8/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=_worker.js.map
