(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/darkreader/darkreader.js
  var require_darkreader = __commonJS({
    "node_modules/darkreader/darkreader.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.DarkReader = {}));
      })(exports, function(exports2) {
        "use strict";
        var MessageTypeUItoBG;
        (function(MessageTypeUItoBG2) {
          MessageTypeUItoBG2["GET_DATA"] = "ui-bg-get-data";
          MessageTypeUItoBG2["GET_DEVTOOLS_DATA"] = "ui-bg-get-devtools-data";
          MessageTypeUItoBG2["SUBSCRIBE_TO_CHANGES"] = "ui-bg-subscribe-to-changes";
          MessageTypeUItoBG2["UNSUBSCRIBE_FROM_CHANGES"] = "ui-bg-unsubscribe-from-changes";
          MessageTypeUItoBG2["CHANGE_SETTINGS"] = "ui-bg-change-settings";
          MessageTypeUItoBG2["SET_THEME"] = "ui-bg-set-theme";
          MessageTypeUItoBG2["TOGGLE_ACTIVE_TAB"] = "ui-bg-toggle-active-tab";
          MessageTypeUItoBG2["MARK_NEWS_AS_READ"] = "ui-bg-mark-news-as-read";
          MessageTypeUItoBG2["MARK_NEWS_AS_DISPLAYED"] = "ui-bg-mark-news-as-displayed";
          MessageTypeUItoBG2["LOAD_CONFIG"] = "ui-bg-load-config";
          MessageTypeUItoBG2["APPLY_DEV_DYNAMIC_THEME_FIXES"] = "ui-bg-apply-dev-dynamic-theme-fixes";
          MessageTypeUItoBG2["RESET_DEV_DYNAMIC_THEME_FIXES"] = "ui-bg-reset-dev-dynamic-theme-fixes";
          MessageTypeUItoBG2["APPLY_DEV_INVERSION_FIXES"] = "ui-bg-apply-dev-inversion-fixes";
          MessageTypeUItoBG2["RESET_DEV_INVERSION_FIXES"] = "ui-bg-reset-dev-inversion-fixes";
          MessageTypeUItoBG2["APPLY_DEV_STATIC_THEMES"] = "ui-bg-apply-dev-static-themes";
          MessageTypeUItoBG2["RESET_DEV_STATIC_THEMES"] = "ui-bg-reset-dev-static-themes";
          MessageTypeUItoBG2["COLOR_SCHEME_CHANGE"] = "ui-bg-color-scheme-change";
          MessageTypeUItoBG2["HIDE_HIGHLIGHTS"] = "ui-bg-hide-highlights";
        })(MessageTypeUItoBG || (MessageTypeUItoBG = {}));
        var MessageTypeBGtoUI;
        (function(MessageTypeBGtoUI2) {
          MessageTypeBGtoUI2["CHANGES"] = "bg-ui-changes";
        })(MessageTypeBGtoUI || (MessageTypeBGtoUI = {}));
        var DebugMessageTypeBGtoUI;
        (function(DebugMessageTypeBGtoUI2) {
          DebugMessageTypeBGtoUI2["CSS_UPDATE"] = "debug-bg-ui-css-update";
          DebugMessageTypeBGtoUI2["UPDATE"] = "debug-bg-ui-update";
        })(DebugMessageTypeBGtoUI || (DebugMessageTypeBGtoUI = {}));
        var MessageTypeBGtoCS;
        (function(MessageTypeBGtoCS2) {
          MessageTypeBGtoCS2["ADD_CSS_FILTER"] = "bg-cs-add-css-filter";
          MessageTypeBGtoCS2["ADD_DYNAMIC_THEME"] = "bg-cs-add-dynamic-theme";
          MessageTypeBGtoCS2["ADD_STATIC_THEME"] = "bg-cs-add-static-theme";
          MessageTypeBGtoCS2["ADD_SVG_FILTER"] = "bg-cs-add-svg-filter";
          MessageTypeBGtoCS2["CLEAN_UP"] = "bg-cs-clean-up";
          MessageTypeBGtoCS2["FETCH_RESPONSE"] = "bg-cs-fetch-response";
          MessageTypeBGtoCS2["UNSUPPORTED_SENDER"] = "bg-cs-unsupported-sender";
        })(MessageTypeBGtoCS || (MessageTypeBGtoCS = {}));
        var DebugMessageTypeBGtoCS;
        (function(DebugMessageTypeBGtoCS2) {
          DebugMessageTypeBGtoCS2["RELOAD"] = "debug-bg-cs-reload";
        })(DebugMessageTypeBGtoCS || (DebugMessageTypeBGtoCS = {}));
        var MessageTypeCStoBG;
        (function(MessageTypeCStoBG2) {
          MessageTypeCStoBG2["COLOR_SCHEME_CHANGE"] = "cs-bg-color-scheme-change";
          MessageTypeCStoBG2["DARK_THEME_DETECTED"] = "cs-bg-dark-theme-detected";
          MessageTypeCStoBG2["DARK_THEME_NOT_DETECTED"] = "cs-bg-dark-theme-not-detected";
          MessageTypeCStoBG2["FETCH"] = "cs-bg-fetch";
          MessageTypeCStoBG2["DOCUMENT_CONNECT"] = "cs-bg-document-connect";
          MessageTypeCStoBG2["DOCUMENT_FORGET"] = "cs-bg-document-forget";
          MessageTypeCStoBG2["DOCUMENT_FREEZE"] = "cs-bg-document-freeze";
          MessageTypeCStoBG2["DOCUMENT_RESUME"] = "cs-bg-document-resume";
        })(MessageTypeCStoBG || (MessageTypeCStoBG = {}));
        var DebugMessageTypeCStoBG;
        (function(DebugMessageTypeCStoBG2) {
          DebugMessageTypeCStoBG2["LOG"] = "debug-cs-bg-log";
        })(DebugMessageTypeCStoBG || (DebugMessageTypeCStoBG = {}));
        var MessageTypeCStoUI;
        (function(MessageTypeCStoUI2) {
          MessageTypeCStoUI2["EXPORT_CSS_RESPONSE"] = "cs-ui-export-css-response";
        })(MessageTypeCStoUI || (MessageTypeCStoUI = {}));
        var MessageTypeUItoCS;
        (function(MessageTypeUItoCS2) {
          MessageTypeUItoCS2["EXPORT_CSS"] = "ui-cs-export-css";
        })(MessageTypeUItoCS || (MessageTypeUItoCS = {}));
        const isNavigatorDefined = typeof navigator !== "undefined";
        const userAgent = isNavigatorDefined ? navigator.userAgentData && Array.isArray(navigator.userAgentData.brands) ? navigator.userAgentData.brands.map(
          (brand) => "".concat(brand.brand.toLowerCase(), " ").concat(brand.version)
        ).join(" ") : navigator.userAgent.toLowerCase() : "some useragent";
        const platform = isNavigatorDefined ? navigator.userAgentData && typeof navigator.userAgentData.platform === "string" ? navigator.userAgentData.platform.toLowerCase() : navigator.platform.toLowerCase() : "some platform";
        const isChromium = userAgent.includes("chrome") || userAgent.includes("chromium");
        const isFirefox = userAgent.includes("firefox") || userAgent.includes("thunderbird") || userAgent.includes("librewolf");
        const isSafari = userAgent.includes("safari") && !isChromium;
        const isWindows = platform.startsWith("win");
        const isMacOS = platform.startsWith("mac");
        isNavigatorDefined && navigator.userAgentData ? navigator.userAgentData.mobile : userAgent.includes("mobile");
        const isShadowDomSupported = typeof ShadowRoot === "function";
        const isMatchMediaChangeEventListenerSupported = typeof MediaQueryList === "function" && typeof MediaQueryList.prototype.addEventListener === "function";
        const isLayerRuleSupported = typeof CSSLayerBlockRule === "function";
        (() => {
          const m = userAgent.match(/chrom(?:e|ium)(?:\/| )([^ ]+)/);
          if (m && m[1]) {
            return m[1];
          }
          return "";
        })();
        (() => {
          const m = userAgent.match(/(?:firefox|librewolf)(?:\/| )([^ ]+)/);
          if (m && m[1]) {
            return m[1];
          }
          return "";
        })();
        const isDefinedSelectorSupported = (() => {
          try {
            document.querySelector(":defined");
            return true;
          } catch (err) {
            return false;
          }
        })();
        const isCSSColorSchemePropSupported = (() => {
          try {
            if (typeof document === "undefined") {
              return false;
            }
            const el = document.createElement("div");
            if (!el || typeof el.style !== "object") {
              return false;
            }
            if (typeof el.style.colorScheme === "string") {
              return true;
            }
            el.setAttribute("style", "color-scheme: dark");
            return el.style.colorScheme === "dark";
          } catch (e) {
            return false;
          }
        })();
        async function getOKResponse(url, mimeType, origin) {
          const response = await fetch(url, {
            cache: "force-cache",
            credentials: "omit",
            referrer: origin
          });
          if (isFirefox && mimeType === "text/css" && url.startsWith("moz-extension://") && url.endsWith(".css")) {
            return response;
          }
          if (mimeType && !response.headers.get("Content-Type").startsWith(mimeType)) {
            throw new Error("Mime type mismatch when loading ".concat(url));
          }
          if (!response.ok) {
            throw new Error(
              "Unable to load ".concat(url, " ").concat(response.status, " ").concat(response.statusText)
            );
          }
          return response;
        }
        async function loadAsDataURL(url, mimeType) {
          const response = await getOKResponse(url, mimeType);
          return await readResponseAsDataURL(response);
        }
        async function loadAsBlob(url, mimeType) {
          const response = await getOKResponse(url, mimeType);
          return await response.blob();
        }
        async function readResponseAsDataURL(response) {
          const blob = await response.blob();
          const dataURL = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
          });
          return dataURL;
        }
        async function loadAsText(url, mimeType, origin) {
          const response = await getOKResponse(url, mimeType, origin);
          return await response.text();
        }
        const throwCORSError = async (url) => {
          return Promise.reject(
            new Error(
              [
                "Embedded Dark Reader cannot access a cross-origin resource",
                url,
                "Overview your URLs and CORS policies or use",
                "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.",
                "See if using `DarkReader.setFetchMethod(window.fetch)`",
                "before `DarkReader.enable()` works."
              ].join(" ")
            )
          );
        };
        let fetcher = throwCORSError;
        function setFetchMethod$1(fetch2) {
          if (fetch2) {
            fetcher = fetch2;
          } else {
            fetcher = throwCORSError;
          }
        }
        async function callFetchMethod(url) {
          return await fetcher(url);
        }
        if (!window.chrome) {
          window.chrome = {};
        }
        if (!chrome.runtime) {
          chrome.runtime = {};
        }
        const messageListeners = /* @__PURE__ */ new Set();
        async function sendMessage(...args) {
          if (args[0] && args[0].type === MessageTypeCStoBG.FETCH) {
            const { id } = args[0];
            try {
              const { url, responseType } = args[0].data;
              const response = await callFetchMethod(url);
              let text;
              if (responseType === "data-url") {
                text = await readResponseAsDataURL(response);
              } else {
                text = await response.text();
              }
              messageListeners.forEach(
                (cb) => cb({
                  type: MessageTypeBGtoCS.FETCH_RESPONSE,
                  data: text,
                  error: null,
                  id
                })
              );
            } catch (error) {
              console.error(error);
              messageListeners.forEach(
                (cb) => cb({
                  type: MessageTypeBGtoCS.FETCH_RESPONSE,
                  data: null,
                  error,
                  id
                })
              );
            }
          }
        }
        function addMessageListener(callback) {
          messageListeners.add(callback);
        }
        if (typeof chrome.runtime.sendMessage === "function") {
          const nativeSendMessage = chrome.runtime.sendMessage;
          chrome.runtime.sendMessage = (...args) => {
            sendMessage(...args);
            nativeSendMessage.apply(chrome.runtime, args);
          };
        } else {
          chrome.runtime.sendMessage = sendMessage;
        }
        if (!chrome.runtime.onMessage) {
          chrome.runtime.onMessage = {};
        }
        if (typeof chrome.runtime.onMessage.addListener === "function") {
          const nativeAddListener = chrome.runtime.onMessage.addListener;
          chrome.runtime.onMessage.addListener = (...args) => {
            addMessageListener(args[0]);
            nativeAddListener.apply(chrome.runtime.onMessage, args);
          };
        } else {
          chrome.runtime.onMessage.addListener = (...args) => addMessageListener(args[0]);
        }
        var ThemeEngine;
        (function(ThemeEngine2) {
          ThemeEngine2["cssFilter"] = "cssFilter";
          ThemeEngine2["svgFilter"] = "svgFilter";
          ThemeEngine2["staticTheme"] = "staticTheme";
          ThemeEngine2["dynamicTheme"] = "dynamicTheme";
        })(ThemeEngine || (ThemeEngine = {}));
        var AutomationMode;
        (function(AutomationMode2) {
          AutomationMode2["NONE"] = "";
          AutomationMode2["TIME"] = "time";
          AutomationMode2["SYSTEM"] = "system";
          AutomationMode2["LOCATION"] = "location";
        })(AutomationMode || (AutomationMode = {}));
        const DEFAULT_COLORS = {
          darkScheme: {
            background: "#181a1b",
            text: "#e8e6e3"
          },
          lightScheme: {
            background: "#dcdad7",
            text: "#181a1b"
          }
        };
        const DEFAULT_THEME = {
          mode: 1,
          brightness: 100,
          contrast: 100,
          grayscale: 0,
          sepia: 0,
          useFont: false,
          fontFamily: isMacOS ? "Helvetica Neue" : isWindows ? "Segoe UI" : "Open Sans",
          textStroke: 0,
          engine: ThemeEngine.dynamicTheme,
          stylesheet: "",
          darkSchemeBackgroundColor: DEFAULT_COLORS.darkScheme.background,
          darkSchemeTextColor: DEFAULT_COLORS.darkScheme.text,
          lightSchemeBackgroundColor: DEFAULT_COLORS.lightScheme.background,
          lightSchemeTextColor: DEFAULT_COLORS.lightScheme.text,
          scrollbarColor: "",
          selectionColor: "auto",
          styleSystemControls: !isCSSColorSchemePropSupported,
          lightColorScheme: "Default",
          darkColorScheme: "Default",
          immediateModify: false
        };
        const filterModeSites = [
          "*.officeapps.live.com",
          "*.sharepoint.com",
          "docs.google.com",
          "onedrive.live.com"
        ];
        ({
          schemeVersion: 0,
          enabled: true,
          fetchNews: true,
          theme: DEFAULT_THEME,
          presets: [],
          customThemes: filterModeSites.map((url) => {
            const engine = isChromium ? ThemeEngine.svgFilter : ThemeEngine.cssFilter;
            return {
              url: [url],
              theme: __spreadProps(__spreadValues({}, DEFAULT_THEME), { engine }),
              builtIn: true
            };
          }),
          enabledByDefault: true,
          enabledFor: [],
          disabledFor: [],
          changeBrowserTheme: false,
          syncSettings: true,
          syncSitesFixes: false,
          automation: {
            enabled: false,
            mode: AutomationMode.NONE,
            behavior: "OnOff"
          },
          time: {
            activation: "18:00",
            deactivation: "9:00"
          },
          location: {
            latitude: null,
            longitude: null
          },
          previewNewDesign: false,
          previewNewestDesign: false,
          enableForPDF: true,
          enableForProtectedPages: false,
          enableContextMenus: false,
          detectDarkTheme: true
        });
        function isArrayLike(items) {
          return items.length != null;
        }
        function forEach(items, iterator) {
          if (isArrayLike(items)) {
            for (let i = 0, len = items.length; i < len; i++) {
              iterator(items[i]);
            }
          } else {
            for (const item of items) {
              iterator(item);
            }
          }
        }
        function push(array, addition) {
          forEach(addition, (a) => array.push(a));
        }
        function toArray(items) {
          const results = [];
          for (let i = 0, len = items.length; i < len; i++) {
            results.push(items[i]);
          }
          return results;
        }
        function logInfo(...args) {
        }
        function logWarn(...args) {
        }
        function throttle(callback) {
          let pending = false;
          let frameId = null;
          let lastArgs;
          const throttled = (...args) => {
            lastArgs = args;
            if (frameId) {
              pending = true;
            } else {
              callback(...lastArgs);
              frameId = requestAnimationFrame(() => {
                frameId = null;
                if (pending) {
                  callback(...lastArgs);
                  pending = false;
                }
              });
            }
          };
          const cancel = () => {
            cancelAnimationFrame(frameId);
            pending = false;
            frameId = null;
          };
          return Object.assign(throttled, { cancel });
        }
        function createAsyncTasksQueue() {
          const tasks = [];
          let frameId = null;
          function runTasks() {
            let task;
            while (task = tasks.shift()) {
              task();
            }
            frameId = null;
          }
          function add(task) {
            tasks.push(task);
            if (!frameId) {
              frameId = requestAnimationFrame(runTasks);
            }
          }
          function cancel() {
            tasks.splice(0);
            cancelAnimationFrame(frameId);
            frameId = null;
          }
          return { add, cancel };
        }
        const delayTokens = /* @__PURE__ */ new Set();
        function requestAnimationFrameOnce(token, callback) {
          if (delayTokens.has(token)) {
            return;
          }
          delayTokens.add(token);
          requestAnimationFrame(() => {
            delayTokens.delete(token);
            callback();
          });
        }
        function getDuration(time) {
          let duration = 0;
          if (time.seconds) {
            duration += time.seconds * 1e3;
          }
          if (time.minutes) {
            duration += time.minutes * 60 * 1e3;
          }
          if (time.hours) {
            duration += time.hours * 60 * 60 * 1e3;
          }
          if (time.days) {
            duration += time.days * 24 * 60 * 60 * 1e3;
          }
          return duration;
        }
        function removeNode(node) {
          node && node.parentNode && node.parentNode.removeChild(node);
        }
        function watchForNodePosition(node, mode, onRestore = Function.prototype) {
          const MAX_ATTEMPTS_COUNT = 10;
          const RETRY_TIMEOUT = getDuration({ seconds: 2 });
          const ATTEMPTS_INTERVAL = getDuration({ seconds: 10 });
          const prevSibling = node.previousSibling;
          let parent = node.parentNode;
          if (!parent) {
            throw new Error(
              "Unable to watch for node position: parent element not found"
            );
          }
          if (mode === "prev-sibling" && !prevSibling) {
            throw new Error(
              "Unable to watch for node position: there is no previous sibling"
            );
          }
          let attempts = 0;
          let start = null;
          let timeoutId = null;
          const restore = throttle(() => {
            if (timeoutId) {
              return;
            }
            attempts++;
            const now = Date.now();
            if (start == null) {
              start = now;
            } else if (attempts >= MAX_ATTEMPTS_COUNT) {
              if (now - start < ATTEMPTS_INTERVAL) {
                timeoutId = setTimeout(() => {
                  start = null;
                  attempts = 0;
                  timeoutId = null;
                  restore();
                }, RETRY_TIMEOUT);
                return;
              }
              start = now;
              attempts = 1;
            }
            if (mode === "head") {
              if (prevSibling && prevSibling.parentNode !== parent) {
                stop();
                return;
              }
            }
            if (mode === "prev-sibling") {
              if (prevSibling.parentNode == null) {
                stop();
                return;
              }
              if (prevSibling.parentNode !== parent) {
                updateParent(prevSibling.parentNode);
              }
            }
            if (mode === "head" && !parent.isConnected) {
              parent = document.head;
            }
            parent.insertBefore(
              node,
              prevSibling && prevSibling.isConnected ? prevSibling.nextSibling : parent.firstChild
            );
            observer2.takeRecords();
            onRestore && onRestore();
          });
          const observer2 = new MutationObserver(() => {
            if (mode === "head" && (node.parentNode !== parent || !node.parentNode.isConnected) || mode === "prev-sibling" && node.previousSibling !== prevSibling) {
              restore();
            }
          });
          const run = () => {
            observer2.observe(parent, { childList: true });
          };
          const stop = () => {
            clearTimeout(timeoutId);
            observer2.disconnect();
            restore.cancel();
          };
          const skip = () => {
            observer2.takeRecords();
          };
          const updateParent = (parentNode) => {
            parent = parentNode;
            stop();
            run();
          };
          run();
          return { run, stop, skip };
        }
        function iterateShadowHosts(root, iterator) {
          if (root == null) {
            return;
          }
          const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_ELEMENT,
            {
              acceptNode(node) {
                return node.shadowRoot == null ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
              }
            }
          );
          for (let node = root.shadowRoot ? walker.currentNode : walker.nextNode(); node != null; node = walker.nextNode()) {
            if (node.classList.contains("surfingkeys_hints_host")) {
              continue;
            }
            iterator(node);
            iterateShadowHosts(node.shadowRoot, iterator);
          }
        }
        let isDOMReady = () => {
          return document.readyState === "complete" || document.readyState === "interactive";
        };
        function setIsDOMReady(newFunc) {
          isDOMReady = newFunc;
        }
        const readyStateListeners = /* @__PURE__ */ new Set();
        function addDOMReadyListener(listener) {
          isDOMReady() ? listener() : readyStateListeners.add(listener);
        }
        function removeDOMReadyListener(listener) {
          readyStateListeners.delete(listener);
        }
        function isReadyStateComplete() {
          return document.readyState === "complete";
        }
        const readyStateCompleteListeners = /* @__PURE__ */ new Set();
        function addReadyStateCompleteListener(listener) {
          isReadyStateComplete() ? listener() : readyStateCompleteListeners.add(listener);
        }
        function cleanReadyStateCompleteListeners() {
          readyStateCompleteListeners.clear();
        }
        if (!isDOMReady()) {
          const onReadyStateChange = () => {
            if (isDOMReady()) {
              readyStateListeners.forEach((listener) => listener());
              readyStateListeners.clear();
              if (isReadyStateComplete()) {
                document.removeEventListener(
                  "readystatechange",
                  onReadyStateChange
                );
                readyStateCompleteListeners.forEach(
                  (listener) => listener()
                );
                readyStateCompleteListeners.clear();
              }
            }
          };
          document.addEventListener("readystatechange", onReadyStateChange);
        }
        const HUGE_MUTATIONS_COUNT = 1e3;
        function isHugeMutation(mutations) {
          if (mutations.length > HUGE_MUTATIONS_COUNT) {
            return true;
          }
          let addedNodesCount = 0;
          for (let i = 0; i < mutations.length; i++) {
            addedNodesCount += mutations[i].addedNodes.length;
            if (addedNodesCount > HUGE_MUTATIONS_COUNT) {
              return true;
            }
          }
          return false;
        }
        function getElementsTreeOperations(mutations) {
          const additions = /* @__PURE__ */ new Set();
          const deletions = /* @__PURE__ */ new Set();
          const moves = /* @__PURE__ */ new Set();
          mutations.forEach((m) => {
            forEach(m.addedNodes, (n) => {
              if (n instanceof Element && n.isConnected) {
                additions.add(n);
              }
            });
            forEach(m.removedNodes, (n) => {
              if (n instanceof Element) {
                if (n.isConnected) {
                  moves.add(n);
                  additions.delete(n);
                } else {
                  deletions.add(n);
                }
              }
            });
          });
          const duplicateAdditions = [];
          const duplicateDeletions = [];
          additions.forEach((node) => {
            if (additions.has(node.parentElement)) {
              duplicateAdditions.push(node);
            }
          });
          deletions.forEach((node) => {
            if (deletions.has(node.parentElement)) {
              duplicateDeletions.push(node);
            }
          });
          duplicateAdditions.forEach((node) => additions.delete(node));
          duplicateDeletions.forEach((node) => deletions.delete(node));
          return { additions, moves, deletions };
        }
        const optimizedTreeObservers = /* @__PURE__ */ new Map();
        const optimizedTreeCallbacks = /* @__PURE__ */ new WeakMap();
        function createOptimizedTreeObserver(root, callbacks) {
          let observer2;
          let observerCallbacks;
          let domReadyListener;
          if (optimizedTreeObservers.has(root)) {
            observer2 = optimizedTreeObservers.get(root);
            observerCallbacks = optimizedTreeCallbacks.get(observer2);
          } else {
            let hadHugeMutationsBefore = false;
            let subscribedForReadyState = false;
            observer2 = new MutationObserver((mutations) => {
              if (isHugeMutation(mutations)) {
                if (!hadHugeMutationsBefore || isDOMReady()) {
                  observerCallbacks.forEach(
                    ({ onHugeMutations }) => onHugeMutations(root)
                  );
                } else if (!subscribedForReadyState) {
                  domReadyListener = () => observerCallbacks.forEach(
                    ({ onHugeMutations }) => onHugeMutations(root)
                  );
                  addDOMReadyListener(domReadyListener);
                  subscribedForReadyState = true;
                }
                hadHugeMutationsBefore = true;
              } else {
                const elementsOperations = getElementsTreeOperations(mutations);
                observerCallbacks.forEach(
                  ({ onMinorMutations }) => onMinorMutations(root, elementsOperations)
                );
              }
            });
            observer2.observe(root, { childList: true, subtree: true });
            optimizedTreeObservers.set(root, observer2);
            observerCallbacks = /* @__PURE__ */ new Set();
            optimizedTreeCallbacks.set(observer2, observerCallbacks);
          }
          observerCallbacks.add(callbacks);
          return {
            disconnect() {
              observerCallbacks.delete(callbacks);
              if (domReadyListener) {
                removeDOMReadyListener(domReadyListener);
              }
              if (observerCallbacks.size === 0) {
                observer2.disconnect();
                optimizedTreeCallbacks.delete(observer2);
                optimizedTreeObservers.delete(root);
              }
            }
          };
        }
        function getMatches(regex, input, group = 0) {
          const matches = [];
          let m;
          while (m = regex.exec(input)) {
            matches.push(m[group]);
          }
          return matches;
        }
        function getHashCode(text) {
          const len = text.length;
          let hash = 0;
          for (let i = 0; i < len; i++) {
            const c = text.charCodeAt(i);
            hash = (hash << 5) - hash + c & 4294967295;
          }
          return hash;
        }
        function escapeRegExpSpecialChars(input) {
          return input.replaceAll(/[\^$.*+?\(\)\[\]{}|\-\\]/g, "\\$&");
        }
        function getParenthesesRange(input, searchStartIndex = 0) {
          return getOpenCloseRange(input, searchStartIndex, "(", ")", []);
        }
        function getOpenCloseRange(input, searchStartIndex, openToken, closeToken, excludeRanges) {
          let indexOf;
          if (excludeRanges.length === 0) {
            indexOf = (token, pos) => input.indexOf(token, pos);
          } else {
            indexOf = (token, pos) => indexOfExcluding(input, token, pos, excludeRanges);
          }
          const { length } = input;
          let depth = 0;
          let firstOpenIndex = -1;
          for (let i = searchStartIndex; i < length; i++) {
            if (depth === 0) {
              const openIndex = indexOf(openToken, i);
              if (openIndex < 0) {
                break;
              }
              firstOpenIndex = openIndex;
              depth++;
              i = openIndex;
            } else {
              const closeIndex = indexOf(closeToken, i);
              if (closeIndex < 0) {
                break;
              }
              const openIndex = indexOf(openToken, i);
              if (openIndex < 0 || closeIndex <= openIndex) {
                depth--;
                if (depth === 0) {
                  return { start: firstOpenIndex, end: closeIndex + 1 };
                }
                i = closeIndex;
              } else {
                depth++;
                i = openIndex;
              }
            }
          }
          return null;
        }
        function indexOfExcluding(input, search, position, excludeRanges) {
          const i = input.indexOf(search, position);
          const exclusion = excludeRanges.find((r) => i >= r.start && i < r.end);
          if (exclusion) {
            return indexOfExcluding(
              input,
              search,
              exclusion.end,
              excludeRanges
            );
          }
          return i;
        }
        function splitExcluding(input, separator, excludeRanges) {
          const parts = [];
          let commaIndex = -1;
          let currIndex = 0;
          while ((commaIndex = indexOfExcluding(
            input,
            separator,
            currIndex,
            excludeRanges
          )) >= 0) {
            parts.push(input.substring(currIndex, commaIndex).trim());
            currIndex = commaIndex + 1;
          }
          parts.push(input.substring(currIndex).trim());
          return parts;
        }
        let anchor;
        const parsedURLCache = /* @__PURE__ */ new Map();
        function fixBaseURL($url) {
          if (!anchor) {
            anchor = document.createElement("a");
          }
          anchor.href = $url;
          return anchor.href;
        }
        function parseURL($url, $base = null) {
          const key = "".concat($url).concat($base ? ";".concat($base) : "");
          if (parsedURLCache.has(key)) {
            return parsedURLCache.get(key);
          }
          if ($base) {
            const parsedURL2 = new URL($url, fixBaseURL($base));
            parsedURLCache.set(key, parsedURL2);
            return parsedURL2;
          }
          const parsedURL = new URL(fixBaseURL($url));
          parsedURLCache.set($url, parsedURL);
          return parsedURL;
        }
        function getAbsoluteURL($base, $relative) {
          if ($relative.match(/^data\\?\:/)) {
            return $relative;
          }
          if (/^\/\//.test($relative)) {
            return "".concat(location.protocol).concat($relative);
          }
          const b = parseURL($base);
          const a = parseURL($relative, b.href);
          return a.href;
        }
        function isRelativeHrefOnAbsolutePath(href) {
          if (href.startsWith("data:")) {
            return true;
          }
          const url = parseURL(href);
          if (url.protocol !== location.protocol) {
            return false;
          }
          if (url.hostname !== location.hostname) {
            return false;
          }
          if (url.port !== location.port) {
            return false;
          }
          return url.pathname === location.pathname;
        }
        function iterateCSSRules(rules, iterate, onImportError) {
          forEach(rules, (rule) => {
            if (isStyleRule(rule)) {
              iterate(rule);
            } else if (isImportRule(rule)) {
              try {
                iterateCSSRules(
                  rule.styleSheet.cssRules,
                  iterate,
                  onImportError
                );
              } catch (err) {
                onImportError == null ? void 0 : onImportError();
              }
            } else if (isMediaRule(rule)) {
              const media = Array.from(rule.media);
              const isScreenOrAllOrQuery = media.some(
                (m) => m.startsWith("screen") || m.startsWith("all") || m.startsWith("(")
              );
              const isPrintOrSpeech = media.some(
                (m) => m.startsWith("print") || m.startsWith("speech")
              );
              if (isScreenOrAllOrQuery || !isPrintOrSpeech) {
                iterateCSSRules(rule.cssRules, iterate, onImportError);
              }
            } else if (isSupportsRule(rule)) {
              if (CSS.supports(rule.conditionText)) {
                iterateCSSRules(rule.cssRules, iterate, onImportError);
              }
            } else if (isLayerRule(rule)) {
              iterateCSSRules(rule.cssRules, iterate, onImportError);
            } else ;
          });
        }
        const shorthandVarDependantProperties = [
          "background",
          "border",
          "border-color",
          "border-bottom",
          "border-left",
          "border-right",
          "border-top",
          "outline",
          "outline-color"
        ];
        const shorthandVarDepPropRegexps = isSafari ? shorthandVarDependantProperties.map((prop) => {
          const regexp = new RegExp("".concat(prop, ":\\s*(.*?)\\s*;"));
          return [prop, regexp];
        }) : null;
        function iterateCSSDeclarations(style, iterate) {
          forEach(style, (property) => {
            const value = style.getPropertyValue(property).trim();
            if (!value) {
              return;
            }
            iterate(property, value);
          });
          const cssText = style.cssText;
          if (cssText.includes("var(")) {
            if (isSafari) {
              shorthandVarDepPropRegexps.forEach(([prop, regexp]) => {
                const match = cssText.match(regexp);
                if (match && match[1]) {
                  const val = match[1].trim();
                  iterate(prop, val);
                }
              });
            } else {
              shorthandVarDependantProperties.forEach((prop) => {
                const val = style.getPropertyValue(prop);
                if (val && val.includes("var(")) {
                  iterate(prop, val);
                }
              });
            }
          }
          if (cssText.includes("background-color: ;") && !style.getPropertyValue("background")) {
            handleEmptyShorthand("background", style, iterate);
          }
          if (cssText.includes("border-") && cssText.includes("-color: ;") && !style.getPropertyValue("border")) {
            handleEmptyShorthand("border", style, iterate);
          }
        }
        function handleEmptyShorthand(shorthand, style, iterate) {
          var _a, _b;
          const parentRule = style.parentRule;
          if (isStyleRule(parentRule)) {
            const sourceCSSText = (_b = (_a = parentRule.parentStyleSheet) == null ? void 0 : _a.ownerNode) == null ? void 0 : _b.textContent;
            if (sourceCSSText) {
              let escapedSelector = escapeRegExpSpecialChars(
                parentRule.selectorText
              );
              escapedSelector = escapedSelector.replaceAll(/\s+/g, "\\s*");
              escapedSelector = escapedSelector.replaceAll(/::/g, "::?");
              const regexp = new RegExp(
                "".concat(escapedSelector, "\\s*{[^}]*").concat(shorthand, ":\\s*([^;}]+)")
              );
              const match = sourceCSSText.match(regexp);
              if (match) {
                iterate(shorthand, match[1]);
              }
            } else if (shorthand === "background") {
              iterate("background-color", "#ffffff");
            }
          }
        }
        const cssURLRegex = /url\((('.*?')|(".*?")|([^\)]*?))\)/g;
        const cssImportRegex = /@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)? ?(screen)?;?/gi;
        function getCSSURLValue(cssURL) {
          return cssURL.trim().replace(/[\n\r\\]+/g, "").replace(/^url\((.*)\)$/, "$1").trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1").replace(/(?:\\(.))/g, "$1");
        }
        function getCSSBaseBath(url) {
          const cssURL = parseURL(url);
          return "".concat(cssURL.origin).concat(cssURL.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1"));
        }
        function replaceCSSRelativeURLsWithAbsolute($css, cssBasePath) {
          return $css.replace(cssURLRegex, (match) => {
            try {
              const url = getCSSURLValue(match);
              const absoluteURL = getAbsoluteURL(cssBasePath, url);
              const escapedURL = absoluteURL.replaceAll("'", "\\'");
              return "url('".concat(escapedURL, "')");
            } catch (err) {
              return match;
            }
          });
        }
        const fontFaceRegex = /@font-face\s*{[^}]*}/g;
        function replaceCSSFontFace($css) {
          return $css.replace(fontFaceRegex, "");
        }
        const styleRules = /* @__PURE__ */ new WeakSet();
        const importRules = /* @__PURE__ */ new WeakSet();
        const mediaRules = /* @__PURE__ */ new WeakSet();
        const supportsRules = /* @__PURE__ */ new WeakSet();
        const layerRules = /* @__PURE__ */ new WeakSet();
        function isStyleRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return true;
          }
          if (rule.selectorText) {
            styleRules.add(rule);
            return true;
          }
          return false;
        }
        function isImportRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return false;
          }
          if (importRules.has(rule)) {
            return true;
          }
          if (rule.href) {
            importRules.add(rule);
            return true;
          }
          return false;
        }
        function isMediaRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return false;
          }
          if (mediaRules.has(rule)) {
            return true;
          }
          if (rule.media) {
            mediaRules.add(rule);
            return true;
          }
          return false;
        }
        function isSupportsRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return false;
          }
          if (supportsRules.has(rule)) {
            return true;
          }
          if (rule instanceof CSSSupportsRule) {
            supportsRules.add(rule);
            return true;
          }
          return false;
        }
        function isLayerRule(rule) {
          if (!rule) {
            return false;
          }
          if (styleRules.has(rule)) {
            return false;
          }
          if (layerRules.has(rule)) {
            return true;
          }
          if (isLayerRuleSupported && rule instanceof CSSLayerBlockRule) {
            layerRules.add(rule);
            return true;
          }
          return false;
        }
        function evalMath(expression) {
          const rpnStack = [];
          const workingStack = [];
          let lastToken;
          for (let i = 0, len = expression.length; i < len; i++) {
            const token = expression[i];
            if (!token || token === " ") {
              continue;
            }
            if (operators.has(token)) {
              const op = operators.get(token);
              while (workingStack.length) {
                const currentOp = operators.get(workingStack[0]);
                if (!currentOp) {
                  break;
                }
                if (op.lessOrEqualThan(currentOp)) {
                  rpnStack.push(workingStack.shift());
                } else {
                  break;
                }
              }
              workingStack.unshift(token);
            } else if (!lastToken || operators.has(lastToken)) {
              rpnStack.push(token);
            } else {
              rpnStack[rpnStack.length - 1] += token;
            }
            lastToken = token;
          }
          rpnStack.push(...workingStack);
          const stack = [];
          for (let i = 0, len = rpnStack.length; i < len; i++) {
            const op = operators.get(rpnStack[i]);
            if (op) {
              const args = stack.splice(0, 2);
              stack.push(op.exec(args[1], args[0]));
            } else {
              stack.unshift(parseFloat(rpnStack[i]));
            }
          }
          return stack[0];
        }
        class Operator {
          constructor(precedence, method) {
            this.precendce = precedence;
            this.execMethod = method;
          }
          exec(left, right) {
            return this.execMethod(left, right);
          }
          lessOrEqualThan(op) {
            return this.precendce <= op.precendce;
          }
        }
        const operators = /* @__PURE__ */ new Map([
          ["+", new Operator(1, (left, right) => left + right)],
          ["-", new Operator(1, (left, right) => left - right)],
          ["*", new Operator(2, (left, right) => left * right)],
          ["/", new Operator(2, (left, right) => left / right)]
        ]);
        const isSystemDarkModeEnabled = () => matchMedia("(prefers-color-scheme: dark)").matches;
        const hslaParseCache = /* @__PURE__ */ new Map();
        const rgbaParseCache = /* @__PURE__ */ new Map();
        function parseColorWithCache($color) {
          $color = $color.trim();
          if (rgbaParseCache.has($color)) {
            return rgbaParseCache.get($color);
          }
          if ($color.includes("calc(")) {
            $color = lowerCalcExpression($color);
          }
          const color = parse($color);
          color && rgbaParseCache.set($color, color);
          return color;
        }
        function parseToHSLWithCache(color) {
          if (hslaParseCache.has(color)) {
            return hslaParseCache.get(color);
          }
          const rgb = parseColorWithCache(color);
          if (!rgb) {
            return null;
          }
          const hsl = rgbToHSL(rgb);
          hslaParseCache.set(color, hsl);
          return hsl;
        }
        function clearColorCache() {
          hslaParseCache.clear();
          rgbaParseCache.clear();
        }
        function hslToRGB({ h, s, l, a = 1 }) {
          if (s === 0) {
            const [r2, b2, g2] = [l, l, l].map((x2) => Math.round(x2 * 255));
            return { r: r2, g: g2, b: b2, a };
          }
          const c = (1 - Math.abs(2 * l - 1)) * s;
          const x = c * (1 - Math.abs(h / 60 % 2 - 1));
          const m = l - c / 2;
          const [r, g, b] = (h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x]).map((n) => Math.round((n + m) * 255));
          return { r, g, b, a };
        }
        function rgbToHSL({ r: r255, g: g255, b: b255, a = 1 }) {
          const r = r255 / 255;
          const g = g255 / 255;
          const b = b255 / 255;
          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const c = max - min;
          const l = (max + min) / 2;
          if (c === 0) {
            return { h: 0, s: 0, l, a };
          }
          let h = (max === r ? (g - b) / c % 6 : max === g ? (b - r) / c + 2 : (r - g) / c + 4) * 60;
          if (h < 0) {
            h += 360;
          }
          const s = c / (1 - Math.abs(2 * l - 1));
          return { h, s, l, a };
        }
        function toFixed(n, digits = 0) {
          const fixed = n.toFixed(digits);
          if (digits === 0) {
            return fixed;
          }
          const dot = fixed.indexOf(".");
          if (dot >= 0) {
            const zerosMatch = fixed.match(/0+$/);
            if (zerosMatch) {
              if (zerosMatch.index === dot + 1) {
                return fixed.substring(0, dot);
              }
              return fixed.substring(0, zerosMatch.index);
            }
          }
          return fixed;
        }
        function rgbToString(rgb) {
          const { r, g, b, a } = rgb;
          if (a != null && a < 1) {
            return "rgba(".concat(toFixed(r), ", ").concat(toFixed(g), ", ").concat(toFixed(b), ", ").concat(toFixed(a, 2), ")");
          }
          return "rgb(".concat(toFixed(r), ", ").concat(toFixed(g), ", ").concat(toFixed(b), ")");
        }
        function rgbToHexString({ r, g, b, a }) {
          return "#".concat((a != null && a < 1 ? [r, g, b, Math.round(a * 255)] : [r, g, b]).map((x) => {
            return "".concat(x < 16 ? "0" : "").concat(x.toString(16));
          }).join(""));
        }
        function hslToString(hsl) {
          const { h, s, l, a } = hsl;
          if (a != null && a < 1) {
            return "hsla(".concat(toFixed(h), ", ").concat(toFixed(s * 100), "%, ").concat(toFixed(l * 100), "%, ").concat(toFixed(a, 2), ")");
          }
          return "hsl(".concat(toFixed(h), ", ").concat(toFixed(s * 100), "%, ").concat(toFixed(l * 100), "%)");
        }
        const rgbMatch = /^rgba?\([^\(\)]+\)$/;
        const hslMatch = /^hsla?\([^\(\)]+\)$/;
        const hexMatch = /^#[0-9a-f]+$/i;
        function parse($color) {
          const c = $color.trim().toLowerCase();
          if (c.match(rgbMatch)) {
            return parseRGB(c);
          }
          if (c.match(hslMatch)) {
            return parseHSL(c);
          }
          if (c.match(hexMatch)) {
            return parseHex(c);
          }
          if (knownColors.has(c)) {
            return getColorByName(c);
          }
          if (systemColors.has(c)) {
            return getSystemColor(c);
          }
          if ($color === "transparent") {
            return { r: 0, g: 0, b: 0, a: 0 };
          }
          if ((c.startsWith("color(") || c.startsWith("color-mix(")) && c.endsWith(")")) {
            return domParseColor(c);
          }
          if (c.startsWith("light-dark(") && c.endsWith(")")) {
            const match = c.match(
              /^light-dark\(\s*([a-z]+(\(.*\))?),\s*([a-z]+(\(.*\))?)\s*\)$/
            );
            if (match) {
              const schemeColor = isSystemDarkModeEnabled() ? match[3] : match[1];
              return parse(schemeColor);
            }
          }
          return null;
        }
        function getNumbers($color) {
          const numbers = [];
          let prevPos = 0;
          let isMining = false;
          const startIndex = $color.indexOf("(");
          $color = $color.substring(startIndex + 1, $color.length - 1);
          for (let i = 0; i < $color.length; i++) {
            const c = $color[i];
            if (c >= "0" && c <= "9" || c === "." || c === "+" || c === "-") {
              isMining = true;
            } else if (isMining && (c === " " || c === "," || c === "/")) {
              numbers.push($color.substring(prevPos, i));
              isMining = false;
              prevPos = i + 1;
            } else if (!isMining) {
              prevPos = i + 1;
            }
          }
          if (isMining) {
            numbers.push($color.substring(prevPos, $color.length));
          }
          return numbers;
        }
        function getNumbersFromString(str, range, units) {
          const raw = getNumbers(str);
          const unitsList = Object.entries(units);
          const numbers = raw.map((r) => r.trim()).map((r, i) => {
            let n;
            const unit = unitsList.find(([u]) => r.endsWith(u));
            if (unit) {
              n = parseFloat(r.substring(0, r.length - unit[0].length)) / unit[1] * range[i];
            } else {
              n = parseFloat(r);
            }
            if (range[i] > 1) {
              return Math.round(n);
            }
            return n;
          });
          return numbers;
        }
        const rgbRange = [255, 255, 255, 1];
        const rgbUnits = { "%": 100 };
        function parseRGB($rgb) {
          const [r, g, b, a = 1] = getNumbersFromString($rgb, rgbRange, rgbUnits);
          return { r, g, b, a };
        }
        const hslRange = [360, 1, 1, 1];
        const hslUnits = { "%": 100, "deg": 360, "rad": 2 * Math.PI, "turn": 1 };
        function parseHSL($hsl) {
          const [h, s, l, a = 1] = getNumbersFromString($hsl, hslRange, hslUnits);
          return hslToRGB({ h, s, l, a });
        }
        function parseHex($hex) {
          const h = $hex.substring(1);
          switch (h.length) {
            case 3:
            case 4: {
              const [r, g, b] = [0, 1, 2].map(
                (i) => parseInt("".concat(h[i]).concat(h[i]), 16)
              );
              const a = h.length === 3 ? 1 : parseInt("".concat(h[3]).concat(h[3]), 16) / 255;
              return { r, g, b, a };
            }
            case 6:
            case 8: {
              const [r, g, b] = [0, 2, 4].map(
                (i) => parseInt(h.substring(i, i + 2), 16)
              );
              const a = h.length === 6 ? 1 : parseInt(h.substring(6, 8), 16) / 255;
              return { r, g, b, a };
            }
          }
          return null;
        }
        function getColorByName($color) {
          const n = knownColors.get($color);
          return {
            r: n >> 16 & 255,
            g: n >> 8 & 255,
            b: n >> 0 & 255,
            a: 1
          };
        }
        function getSystemColor($color) {
          const n = systemColors.get($color);
          return {
            r: n >> 16 & 255,
            g: n >> 8 & 255,
            b: n >> 0 & 255,
            a: 1
          };
        }
        function lowerCalcExpression(color) {
          let searchIndex = 0;
          const replaceBetweenIndices = (start, end, replacement) => {
            color = color.substring(0, start) + replacement + color.substring(end);
          };
          while ((searchIndex = color.indexOf("calc(")) !== -1) {
            const range = getParenthesesRange(color, searchIndex);
            if (!range) {
              break;
            }
            let slice = color.slice(range.start + 1, range.end - 1);
            const includesPercentage = slice.includes("%");
            slice = slice.split("%").join("");
            const output = Math.round(evalMath(slice));
            replaceBetweenIndices(
              range.start - 4,
              range.end,
              output + (includesPercentage ? "%" : "")
            );
          }
          return color;
        }
        const knownColors = new Map(
          Object.entries({
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgrey: 11119017,
            darkgreen: 25600,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            grey: 8421504,
            green: 32768,
            greenyellow: 11403055,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgrey: 13882323,
            lightgreen: 9498256,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
          })
        );
        const systemColors = new Map(
          Object.entries({
            "ActiveBorder": 3906044,
            "ActiveCaption": 0,
            "AppWorkspace": 11184810,
            "Background": 6513614,
            "ButtonFace": 16777215,
            "ButtonHighlight": 15329769,
            "ButtonShadow": 10461343,
            "ButtonText": 0,
            "CaptionText": 0,
            "GrayText": 8355711,
            "Highlight": 11720703,
            "HighlightText": 0,
            "InactiveBorder": 16777215,
            "InactiveCaption": 16777215,
            "InactiveCaptionText": 0,
            "InfoBackground": 16514245,
            "InfoText": 0,
            "Menu": 16185078,
            "MenuText": 16777215,
            "Scrollbar": 11184810,
            "ThreeDDarkShadow": 0,
            "ThreeDFace": 12632256,
            "ThreeDHighlight": 16777215,
            "ThreeDLightShadow": 16777215,
            "ThreeDShadow": 0,
            "Window": 15527148,
            "WindowFrame": 11184810,
            "WindowText": 0,
            "-webkit-focus-ring-color": 15046400
          }).map(([key, value]) => [key.toLowerCase(), value])
        );
        function getSRGBLightness(r, g, b) {
          return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        }
        let canvas$1;
        let context$1;
        function domParseColor($color) {
          if (!context$1) {
            canvas$1 = document.createElement("canvas");
            canvas$1.width = 1;
            canvas$1.height = 1;
            context$1 = canvas$1.getContext("2d", { willReadFrequently: true });
          }
          context$1.fillStyle = $color;
          context$1.fillRect(0, 0, 1, 1);
          const d = context$1.getImageData(0, 0, 1, 1).data;
          const color = "rgba(".concat(d[0], ", ").concat(d[1], ", ").concat(d[2], ", ").concat((d[3] / 255).toFixed(2), ")");
          return parseRGB(color);
        }
        function scale(x, inLow, inHigh, outLow, outHigh) {
          return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
        }
        function clamp(x, min, max) {
          return Math.min(max, Math.max(min, x));
        }
        function multiplyMatrices(m1, m2) {
          const result = [];
          for (let i = 0, len = m1.length; i < len; i++) {
            result[i] = [];
            for (let j = 0, len2 = m2[0].length; j < len2; j++) {
              let sum = 0;
              for (let k = 0, len3 = m1[0].length; k < len3; k++) {
                sum += m1[i][k] * m2[k][j];
              }
              result[i][j] = sum;
            }
          }
          return result;
        }
        function createFilterMatrix(config) {
          let m = Matrix.identity();
          if (config.sepia !== 0) {
            m = multiplyMatrices(m, Matrix.sepia(config.sepia / 100));
          }
          if (config.grayscale !== 0) {
            m = multiplyMatrices(m, Matrix.grayscale(config.grayscale / 100));
          }
          if (config.contrast !== 100) {
            m = multiplyMatrices(m, Matrix.contrast(config.contrast / 100));
          }
          if (config.brightness !== 100) {
            m = multiplyMatrices(m, Matrix.brightness(config.brightness / 100));
          }
          if (config.mode === 1) {
            m = multiplyMatrices(m, Matrix.invertNHue());
          }
          return m;
        }
        function applyColorMatrix([r, g, b], matrix) {
          const rgb = [[r / 255], [g / 255], [b / 255], [1], [1]];
          const result = multiplyMatrices(matrix, rgb);
          return [0, 1, 2].map(
            (i) => clamp(Math.round(result[i][0] * 255), 0, 255)
          );
        }
        const Matrix = {
          identity() {
            return [
              [1, 0, 0, 0, 0],
              [0, 1, 0, 0, 0],
              [0, 0, 1, 0, 0],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          invertNHue() {
            return [
              [0.333, -0.667, -0.667, 0, 1],
              [-0.667, 0.333, -0.667, 0, 1],
              [-0.667, -0.667, 0.333, 0, 1],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          brightness(v) {
            return [
              [v, 0, 0, 0, 0],
              [0, v, 0, 0, 0],
              [0, 0, v, 0, 0],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          contrast(v) {
            const t = (1 - v) / 2;
            return [
              [v, 0, 0, 0, t],
              [0, v, 0, 0, t],
              [0, 0, v, 0, t],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          sepia(v) {
            return [
              [
                0.393 + 0.607 * (1 - v),
                0.769 - 0.769 * (1 - v),
                0.189 - 0.189 * (1 - v),
                0,
                0
              ],
              [
                0.349 - 0.349 * (1 - v),
                0.686 + 0.314 * (1 - v),
                0.168 - 0.168 * (1 - v),
                0,
                0
              ],
              [
                0.272 - 0.272 * (1 - v),
                0.534 - 0.534 * (1 - v),
                0.131 + 0.869 * (1 - v),
                0,
                0
              ],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          },
          grayscale(v) {
            return [
              [
                0.2126 + 0.7874 * (1 - v),
                0.7152 - 0.7152 * (1 - v),
                0.0722 - 0.0722 * (1 - v),
                0,
                0
              ],
              [
                0.2126 - 0.2126 * (1 - v),
                0.7152 + 0.2848 * (1 - v),
                0.0722 - 0.0722 * (1 - v),
                0,
                0
              ],
              [
                0.2126 - 0.2126 * (1 - v),
                0.7152 - 0.7152 * (1 - v),
                0.0722 + 0.9278 * (1 - v),
                0,
                0
              ],
              [0, 0, 0, 1, 0],
              [0, 0, 0, 0, 1]
            ];
          }
        };
        function getBgPole(theme2) {
          const isDarkScheme = theme2.mode === 1;
          const prop = isDarkScheme ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor";
          return theme2[prop];
        }
        function getFgPole(theme2) {
          const isDarkScheme = theme2.mode === 1;
          const prop = isDarkScheme ? "darkSchemeTextColor" : "lightSchemeTextColor";
          return theme2[prop];
        }
        const colorModificationCache = /* @__PURE__ */ new Map();
        function clearColorModificationCache() {
          colorModificationCache.clear();
        }
        const rgbCacheKeys = ["r", "g", "b", "a"];
        const themeCacheKeys$1 = [
          "mode",
          "brightness",
          "contrast",
          "grayscale",
          "sepia",
          "darkSchemeBackgroundColor",
          "darkSchemeTextColor",
          "lightSchemeBackgroundColor",
          "lightSchemeTextColor"
        ];
        function getCacheId(rgb, theme2) {
          let resultId = "";
          rgbCacheKeys.forEach((key) => {
            resultId += "".concat(rgb[key], ";");
          });
          themeCacheKeys$1.forEach((key) => {
            resultId += "".concat(theme2[key], ";");
          });
          return resultId;
        }
        function modifyColorWithCache(rgb, theme2, modifyHSL, poleColor, anotherPoleColor) {
          let fnCache;
          if (colorModificationCache.has(modifyHSL)) {
            fnCache = colorModificationCache.get(modifyHSL);
          } else {
            fnCache = /* @__PURE__ */ new Map();
            colorModificationCache.set(modifyHSL, fnCache);
          }
          const id = getCacheId(rgb, theme2);
          if (fnCache.has(id)) {
            return fnCache.get(id);
          }
          const hsl = rgbToHSL(rgb);
          const pole = poleColor == null ? null : parseToHSLWithCache(poleColor);
          const anotherPole = anotherPoleColor == null ? null : parseToHSLWithCache(anotherPoleColor);
          const modified = modifyHSL(hsl, pole, anotherPole);
          const { r, g, b, a } = hslToRGB(modified);
          const matrix = createFilterMatrix(theme2);
          const [rf, gf, bf] = applyColorMatrix([r, g, b], matrix);
          const color = a === 1 ? rgbToHexString({ r: rf, g: gf, b: bf }) : rgbToString({ r: rf, g: gf, b: bf, a });
          fnCache.set(id, color);
          return color;
        }
        function modifyLightSchemeColor(rgb, theme2) {
          const poleBg = getBgPole(theme2);
          const poleFg = getFgPole(theme2);
          return modifyColorWithCache(
            rgb,
            theme2,
            modifyLightModeHSL,
            poleFg,
            poleBg
          );
        }
        function modifyLightModeHSL({ h, s, l, a }, poleFg, poleBg) {
          const isDark = l < 0.5;
          let isNeutral;
          if (isDark) {
            isNeutral = l < 0.2 || s < 0.12;
          } else {
            const isBlue = h > 200 && h < 280;
            isNeutral = s < 0.24 || l > 0.8 && isBlue;
          }
          let hx = h;
          let sx = l;
          if (isNeutral) {
            if (isDark) {
              hx = poleFg.h;
              sx = poleFg.s;
            } else {
              hx = poleBg.h;
              sx = poleBg.s;
            }
          }
          const lx = scale(l, 0, 1, poleFg.l, poleBg.l);
          return { h: hx, s: sx, l: lx, a };
        }
        const MAX_BG_LIGHTNESS = 0.4;
        function modifyBgHSL({ h, s, l, a }, pole) {
          const isDark = l < 0.5;
          const isBlue = h > 200 && h < 280;
          const isNeutral = s < 0.12 || l > 0.8 && isBlue;
          if (isDark) {
            const lx2 = scale(l, 0, 0.5, 0, MAX_BG_LIGHTNESS);
            if (isNeutral) {
              const hx2 = pole.h;
              const sx = pole.s;
              return { h: hx2, s: sx, l: lx2, a };
            }
            return { h, s, l: lx2, a };
          }
          let lx = scale(l, 0.5, 1, MAX_BG_LIGHTNESS, pole.l);
          if (isNeutral) {
            const hx2 = pole.h;
            const sx = pole.s;
            return { h: hx2, s: sx, l: lx, a };
          }
          let hx = h;
          const isYellow = h > 60 && h < 180;
          if (isYellow) {
            const isCloserToGreen = h > 120;
            if (isCloserToGreen) {
              hx = scale(h, 120, 180, 135, 180);
            } else {
              hx = scale(h, 60, 120, 60, 105);
            }
          }
          if (hx > 40 && hx < 80) {
            lx *= 0.75;
          }
          return { h: hx, s, l: lx, a };
        }
        function modifyBackgroundColor(rgb, theme2) {
          if (theme2.mode === 0) {
            return modifyLightSchemeColor(rgb, theme2);
          }
          const pole = getBgPole(theme2);
          return modifyColorWithCache(
            rgb,
            __spreadProps(__spreadValues({}, theme2), { mode: 0 }),
            modifyBgHSL,
            pole
          );
        }
        const MIN_FG_LIGHTNESS = 0.55;
        function modifyBlueFgHue(hue) {
          return scale(hue, 205, 245, 205, 220);
        }
        function modifyFgHSL({ h, s, l, a }, pole) {
          const isLight = l > 0.5;
          const isNeutral = l < 0.2 || s < 0.24;
          const isBlue = !isNeutral && h > 205 && h < 245;
          if (isLight) {
            const lx2 = scale(l, 0.5, 1, MIN_FG_LIGHTNESS, pole.l);
            if (isNeutral) {
              const hx3 = pole.h;
              const sx = pole.s;
              return { h: hx3, s: sx, l: lx2, a };
            }
            let hx2 = h;
            if (isBlue) {
              hx2 = modifyBlueFgHue(h);
            }
            return { h: hx2, s, l: lx2, a };
          }
          if (isNeutral) {
            const hx2 = pole.h;
            const sx = pole.s;
            const lx2 = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
            return { h: hx2, s: sx, l: lx2, a };
          }
          let hx = h;
          let lx;
          if (isBlue) {
            hx = modifyBlueFgHue(h);
            lx = scale(l, 0, 0.5, pole.l, Math.min(1, MIN_FG_LIGHTNESS + 0.05));
          } else {
            lx = scale(l, 0, 0.5, pole.l, MIN_FG_LIGHTNESS);
          }
          return { h: hx, s, l: lx, a };
        }
        function modifyForegroundColor(rgb, theme2) {
          if (theme2.mode === 0) {
            return modifyLightSchemeColor(rgb, theme2);
          }
          const pole = getFgPole(theme2);
          return modifyColorWithCache(
            rgb,
            __spreadProps(__spreadValues({}, theme2), { mode: 0 }),
            modifyFgHSL,
            pole
          );
        }
        function modifyBorderHSL({ h, s, l, a }, poleFg, poleBg) {
          const isDark = l < 0.5;
          const isNeutral = l < 0.2 || s < 0.24;
          let hx = h;
          let sx = s;
          if (isNeutral) {
            if (isDark) {
              hx = poleFg.h;
              sx = poleFg.s;
            } else {
              hx = poleBg.h;
              sx = poleBg.s;
            }
          }
          const lx = scale(l, 0, 1, 0.5, 0.2);
          return { h: hx, s: sx, l: lx, a };
        }
        function modifyBorderColor(rgb, theme2) {
          if (theme2.mode === 0) {
            return modifyLightSchemeColor(rgb, theme2);
          }
          const poleFg = getFgPole(theme2);
          const poleBg = getBgPole(theme2);
          return modifyColorWithCache(
            rgb,
            __spreadProps(__spreadValues({}, theme2), { mode: 0 }),
            modifyBorderHSL,
            poleFg,
            poleBg
          );
        }
        function modifyShadowColor(rgb, theme2) {
          return modifyBackgroundColor(rgb, theme2);
        }
        function modifyGradientColor(rgb, theme2) {
          return modifyBackgroundColor(rgb, theme2);
        }
        const excludedSelectors = [
          "pre",
          "pre *",
          "code",
          '[aria-hidden="true"]',
          '[class*="fa-"]',
          ".fa",
          ".fab",
          ".fad",
          ".fal",
          ".far",
          ".fas",
          ".fass",
          ".fasr",
          ".fat",
          ".icofont",
          '[style*="font-"]',
          '[class*="icon"i]',
          '[class*="symbol"i]',
          ".glyphicon",
          '[class*="material-symbol"]',
          '[class*="material-icon"]',
          "mu",
          '[class*="mu-"]',
          ".typcn",
          '[class*="vjs-"]'
        ];
        function createTextStyle(config) {
          const lines = [];
          lines.push("*:not(".concat(excludedSelectors.join(", "), ") {"));
          if (config.useFont && config.fontFamily) {
            lines.push("  font-family: ".concat(config.fontFamily, " !important;"));
          }
          if (config.textStroke > 0) {
            lines.push(
              "  -webkit-text-stroke: ".concat(config.textStroke, "px !important;")
            );
            lines.push("  text-stroke: ".concat(config.textStroke, "px !important;"));
          }
          lines.push("}");
          return lines.join("\n");
        }
        var FilterMode;
        (function(FilterMode2) {
          FilterMode2[FilterMode2["light"] = 0] = "light";
          FilterMode2[FilterMode2["dark"] = 1] = "dark";
        })(FilterMode || (FilterMode = {}));
        function getCSSFilterValue(config) {
          const filters = [];
          if (config.mode === FilterMode.dark) {
            filters.push("invert(100%) hue-rotate(180deg)");
          }
          if (config.brightness !== 100) {
            filters.push("brightness(".concat(config.brightness, "%)"));
          }
          if (config.contrast !== 100) {
            filters.push("contrast(".concat(config.contrast, "%)"));
          }
          if (config.grayscale !== 0) {
            filters.push("grayscale(".concat(config.grayscale, "%)"));
          }
          if (config.sepia !== 0) {
            filters.push("sepia(".concat(config.sepia, "%)"));
          }
          if (filters.length === 0) {
            return null;
          }
          return filters.join(" ");
        }
        function toSVGMatrix(matrix) {
          return matrix.slice(0, 4).map((m) => m.map((m2) => m2.toFixed(3)).join(" ")).join(" ");
        }
        function getSVGFilterMatrixValue(config) {
          return toSVGMatrix(createFilterMatrix(config));
        }
        function hexify(number) {
          return (number < 16 ? "0" : "") + number.toString(16);
        }
        function generateUID() {
          if ("randomUUID" in crypto) {
            const uuid = crypto.randomUUID();
            return uuid.substring(0, 8) + uuid.substring(9, 13) + uuid.substring(14, 18) + uuid.substring(19, 23) + uuid.substring(24);
          }
          if ("getRandomValues" in crypto) {
            return Array.from(crypto.getRandomValues(new Uint8Array(16))).map((x) => hexify(x)).join("");
          }
          return Math.floor(Math.random() * 2 ** 55).toString(36);
        }
        const resolvers$1 = /* @__PURE__ */ new Map();
        const rejectors = /* @__PURE__ */ new Map();
        async function bgFetch(request) {
          var _a, _b;
          if ((_b = (_a = window.DarkReader) == null ? void 0 : _a.Plugins) == null ? void 0 : _b.fetch) {
            return window.DarkReader.Plugins.fetch(request);
          }
          return new Promise((resolve, reject) => {
            const id = generateUID();
            resolvers$1.set(id, resolve);
            rejectors.set(id, reject);
            chrome.runtime.sendMessage({
              type: MessageTypeCStoBG.FETCH,
              data: request,
              id
            });
          });
        }
        chrome.runtime.onMessage.addListener(({ type, data, error, id }) => {
          if (type === MessageTypeBGtoCS.FETCH_RESPONSE) {
            const resolve = resolvers$1.get(id);
            const reject = rejectors.get(id);
            resolvers$1.delete(id);
            rejectors.delete(id);
            if (error) {
              reject && reject(error);
            } else {
              resolve && resolve(data);
            }
          }
        });
        const MAX_FRAME_DURATION = 1e3 / 60;
        class AsyncQueue {
          constructor() {
            this.queue = [];
            this.timerId = null;
          }
          addTask(task) {
            this.queue.push(task);
            this.scheduleFrame();
          }
          stop() {
            if (this.timerId !== null) {
              cancelAnimationFrame(this.timerId);
              this.timerId = null;
            }
            this.queue = [];
          }
          scheduleFrame() {
            if (this.timerId) {
              return;
            }
            this.timerId = requestAnimationFrame(() => {
              this.timerId = null;
              const start = Date.now();
              let cb;
              while (cb = this.queue.shift()) {
                cb();
                if (Date.now() - start >= MAX_FRAME_DURATION) {
                  this.scheduleFrame();
                  break;
                }
              }
            });
          }
        }
        const imageManager = new AsyncQueue();
        async function getImageDetails(url) {
          return new Promise(async (resolve, reject) => {
            var _a, _b;
            try {
              const dataURL = url.startsWith("data:") ? url : await getDataURL(url);
              const blob = (_a = tryConvertDataURLToBlobSync(dataURL)) != null ? _a : await loadAsBlob(url);
              let image;
              if (dataURL.startsWith("data:image/svg+xml")) {
                image = await loadImage(dataURL);
              } else {
                image = (_b = await tryCreateImageBitmap(blob)) != null ? _b : await loadImage(dataURL);
              }
              imageManager.addTask(() => {
                const analysis = analyzeImage(image);
                resolve(__spreadValues({
                  src: url,
                  dataURL: analysis.isLarge ? "" : dataURL,
                  width: image.width,
                  height: image.height
                }, analysis));
              });
            } catch (error) {
              reject(error);
            }
          });
        }
        async function getDataURL(url) {
          const parsedURL = new URL(url);
          if (parsedURL.origin === location.origin) {
            return await loadAsDataURL(url);
          }
          return await bgFetch({ url, responseType: "data-url" });
        }
        async function tryCreateImageBitmap(blob) {
          try {
            return await createImageBitmap(blob);
          } catch (err) {
            logWarn(
              "Unable to create image bitmap for type ".concat(blob.type, ": ").concat(String(err))
            );
            return null;
          }
        }
        const INCOMPLETE_DOC_LOADING_IMAGE_LIMIT = 256;
        let loadingImagesCount = 0;
        async function loadImage(url) {
          return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => reject("Unable to load image ".concat(url));
            if (++loadingImagesCount <= INCOMPLETE_DOC_LOADING_IMAGE_LIMIT || isReadyStateComplete()) {
              image.src = url;
            } else {
              addReadyStateCompleteListener(() => image.src = url);
            }
          });
        }
        const MAX_ANALYSIS_PIXELS_COUNT = 32 * 32;
        let canvas;
        let context;
        function createCanvas() {
          const maxWidth = MAX_ANALYSIS_PIXELS_COUNT;
          const maxHeight = MAX_ANALYSIS_PIXELS_COUNT;
          canvas = document.createElement("canvas");
          canvas.width = maxWidth;
          canvas.height = maxHeight;
          context = canvas.getContext("2d", { willReadFrequently: true });
          context.imageSmoothingEnabled = false;
        }
        function removeCanvas() {
          canvas = null;
          context = null;
        }
        const LARGE_IMAGE_PIXELS_COUNT = 512 * 512;
        function analyzeImage(image) {
          if (!canvas) {
            createCanvas();
          }
          let sw;
          let sh;
          if (image instanceof HTMLImageElement) {
            sw = image.naturalWidth;
            sh = image.naturalHeight;
          } else {
            sw = image.width;
            sh = image.height;
          }
          if (sw === 0 || sh === 0) {
            return {
              isDark: false,
              isLight: false,
              isTransparent: false,
              isLarge: false
            };
          }
          const isLarge = sw * sh > LARGE_IMAGE_PIXELS_COUNT;
          const sourcePixelsCount = sw * sh;
          const k = Math.min(
            1,
            Math.sqrt(MAX_ANALYSIS_PIXELS_COUNT / sourcePixelsCount)
          );
          const width = Math.ceil(sw * k);
          const height = Math.ceil(sh * k);
          context.clearRect(0, 0, width, height);
          context.drawImage(image, 0, 0, sw, sh, 0, 0, width, height);
          const imageData = context.getImageData(0, 0, width, height);
          const d = imageData.data;
          const TRANSPARENT_ALPHA_THRESHOLD = 0.05;
          const DARK_LIGHTNESS_THRESHOLD = 0.4;
          const LIGHT_LIGHTNESS_THRESHOLD = 0.7;
          let transparentPixelsCount = 0;
          let darkPixelsCount = 0;
          let lightPixelsCount = 0;
          let i, x, y;
          let r, g, b, a;
          let l;
          for (y = 0; y < height; y++) {
            for (x = 0; x < width; x++) {
              i = 4 * (y * width + x);
              r = d[i + 0];
              g = d[i + 1];
              b = d[i + 2];
              a = d[i + 3];
              if (a / 255 < TRANSPARENT_ALPHA_THRESHOLD) {
                transparentPixelsCount++;
              } else {
                l = getSRGBLightness(r, g, b);
                if (l < DARK_LIGHTNESS_THRESHOLD) {
                  darkPixelsCount++;
                }
                if (l > LIGHT_LIGHTNESS_THRESHOLD) {
                  lightPixelsCount++;
                }
              }
            }
          }
          const totalPixelsCount = width * height;
          const opaquePixelsCount = totalPixelsCount - transparentPixelsCount;
          const DARK_IMAGE_THRESHOLD = 0.7;
          const LIGHT_IMAGE_THRESHOLD = 0.7;
          const TRANSPARENT_IMAGE_THRESHOLD = 0.1;
          return {
            isDark: darkPixelsCount / opaquePixelsCount >= DARK_IMAGE_THRESHOLD,
            isLight: lightPixelsCount / opaquePixelsCount >= LIGHT_IMAGE_THRESHOLD,
            isTransparent: transparentPixelsCount / totalPixelsCount >= TRANSPARENT_IMAGE_THRESHOLD,
            isLarge
          };
        }
        let isBlobURLSupported = null;
        let canUseProxy = false;
        let blobURLCheckRequested = false;
        const blobURLCheckAwaiters = [];
        document.addEventListener(
          "__darkreader__inlineScriptsAllowed",
          () => canUseProxy = true,
          { once: true }
        );
        async function requestBlobURLCheck() {
          if (!canUseProxy) {
            return;
          }
          if (blobURLCheckRequested) {
            return await new Promise(
              (resolve) => blobURLCheckAwaiters.push(resolve)
            );
          }
          blobURLCheckRequested = true;
          await new Promise((resolve) => {
            document.addEventListener(
              "__darkreader__blobURLCheckResponse",
              (e) => {
                isBlobURLSupported = e.detail.blobURLAllowed;
                resolve();
                blobURLCheckAwaiters.forEach((r) => r());
                blobURLCheckAwaiters.splice(0);
              },
              { once: true }
            );
            document.dispatchEvent(
              new CustomEvent("__darkreader__blobURLCheckRequest")
            );
          });
        }
        function isBlobURLCheckResultReady() {
          return isBlobURLSupported != null || !canUseProxy;
        }
        function onCSPError(err) {
          if (err.blockedURI === "blob") {
            isBlobURLSupported = false;
            document.removeEventListener("securitypolicyviolation", onCSPError);
          }
        }
        document.addEventListener("securitypolicyviolation", onCSPError);
        const objectURLs = /* @__PURE__ */ new Set();
        function getFilteredImageURL({ dataURL, width, height }, theme2) {
          if (dataURL.startsWith("data:image/svg+xml")) {
            dataURL = escapeXML(dataURL);
          }
          const matrix = getSVGFilterMatrixValue(theme2);
          const svg = [
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.concat(width, '" height="').concat(height, '">'),
            "<defs>",
            '<filter id="darkreader-image-filter">',
            '<feColorMatrix type="matrix" values="'.concat(matrix, '" />'),
            "</filter>",
            "</defs>",
            '<image width="'.concat(width, '" height="').concat(height, '" filter="url(#darkreader-image-filter)" xlink:href="').concat(dataURL, '" />'),
            "</svg>"
          ].join("");
          if (!isBlobURLSupported) {
            return "data:image/svg+xml;base64,".concat(btoa(svg));
          }
          const bytes = new Uint8Array(svg.length);
          for (let i = 0; i < svg.length; i++) {
            bytes[i] = svg.charCodeAt(i);
          }
          const blob = new Blob([bytes], { type: "image/svg+xml" });
          const objectURL = URL.createObjectURL(blob);
          objectURLs.add(objectURL);
          return objectURL;
        }
        const xmlEscapeChars = {
          "<": "&lt;",
          ">": "&gt;",
          "&": "&amp;",
          "'": "&apos;",
          '"': "&quot;"
        };
        function escapeXML(str) {
          return str.replace(/[<>&'"]/g, (c) => {
            var _a;
            return (_a = xmlEscapeChars[c]) != null ? _a : c;
          });
        }
        const dataURLBlobURLs = /* @__PURE__ */ new Map();
        function tryConvertDataURLToBlobSync(dataURL) {
          const colonIndex = dataURL.indexOf(":");
          const semicolonIndex = dataURL.indexOf(";", colonIndex + 1);
          const commaIndex = dataURL.indexOf(",", semicolonIndex + 1);
          const encoding = dataURL.substring(semicolonIndex + 1, commaIndex).toLocaleLowerCase();
          const mediaType = dataURL.substring(colonIndex + 1, semicolonIndex);
          if (encoding !== "base64" || !mediaType) {
            return null;
          }
          const characters = atob(dataURL.substring(commaIndex + 1));
          const bytes = new Uint8Array(characters.length);
          for (let i = 0; i < characters.length; i++) {
            bytes[i] = characters.charCodeAt(i);
          }
          return new Blob([bytes], { type: mediaType });
        }
        async function tryConvertDataURLToBlobURL(dataURL) {
          if (!isBlobURLSupported) {
            return null;
          }
          const hash = getHashCode(dataURL);
          let blobURL = dataURLBlobURLs.get(hash);
          if (blobURL) {
            return blobURL;
          }
          let blob = tryConvertDataURLToBlobSync(dataURL);
          if (!blob) {
            const response = await fetch(dataURL);
            blob = await response.blob();
          }
          blobURL = URL.createObjectURL(blob);
          dataURLBlobURLs.set(hash, blobURL);
          return blobURL;
        }
        function cleanImageProcessingCache() {
          imageManager && imageManager.stop();
          removeCanvas();
          objectURLs.forEach((u) => URL.revokeObjectURL(u));
          objectURLs.clear();
          dataURLBlobURLs.forEach((u) => URL.revokeObjectURL(u));
          dataURLBlobURLs.clear();
        }
        const gradientLength = "gradient".length;
        const conicGradient = "conic-";
        const conicGradientLength = conicGradient.length;
        const radialGradient = "radial-";
        const linearGradient = "linear-";
        function parseGradient(value) {
          const result = [];
          let index = 0;
          let startIndex = conicGradient.length;
          while ((index = value.indexOf("gradient", startIndex)) !== -1) {
            let typeGradient;
            [linearGradient, radialGradient, conicGradient].find(
              (possibleType) => {
                if (index - possibleType.length >= 0) {
                  const possibleGradient = value.substring(
                    index - possibleType.length,
                    index
                  );
                  if (possibleGradient === possibleType) {
                    if (value.slice(
                      index - possibleType.length - 10,
                      index - possibleType.length - 1
                    ) === "repeating") {
                      typeGradient = "repeating-".concat(possibleType, "gradient");
                      return true;
                    }
                    if (value.slice(
                      index - possibleType.length - 8,
                      index - possibleType.length - 1
                    ) === "-webkit") {
                      typeGradient = "-webkit-".concat(possibleType, "gradient");
                      return true;
                    }
                    typeGradient = "".concat(possibleType, "gradient");
                    return true;
                  }
                }
              }
            );
            if (!typeGradient) {
              break;
            }
            const { start, end } = getParenthesesRange(
              value,
              index + gradientLength
            );
            const match = value.substring(start + 1, end - 1);
            startIndex = end + 1 + conicGradientLength;
            result.push({
              typeGradient,
              match,
              offset: typeGradient.length + 2,
              index: index - typeGradient.length + gradientLength,
              hasComma: true
            });
          }
          if (result.length) {
            result[result.length - 1].hasComma = false;
          }
          return result;
        }
        function getPriority(ruleStyle, property) {
          return Boolean(ruleStyle && ruleStyle.getPropertyPriority(property));
        }
        function getModifiableCSSDeclaration(property, value, rule, variablesStore2, ignoreImageSelectors, isCancelled) {
          let modifier = null;
          if (property.startsWith("--")) {
            modifier = getVariableModifier(
              variablesStore2,
              property,
              value,
              rule,
              ignoreImageSelectors,
              isCancelled
            );
          } else if (value.includes("var(")) {
            modifier = getVariableDependantModifier(
              variablesStore2,
              property,
              value
            );
          } else if (property === "color-scheme") {
            modifier = getColorSchemeModifier();
          } else if (property === "scrollbar-color") {
            modifier = getScrollbarColorModifier(value);
          } else if (property.includes("color") && property !== "-webkit-print-color-adjust" || property === "fill" || property === "stroke" || property === "stop-color") {
            if (property.startsWith("border") && property !== "border-color" && value === "initial") {
              const borderSideProp = property.substring(
                0,
                property.length - 6
              );
              const borderSideVal = rule.style.getPropertyValue(borderSideProp);
              if (borderSideVal.startsWith("0px") || borderSideVal === "none") {
                property = borderSideProp;
                modifier = borderSideVal;
              } else {
                modifier = value;
              }
            } else {
              modifier = getColorModifier(property, value, rule);
            }
          } else if (property === "background-image" || property === "list-style-image") {
            modifier = getBgImageModifier(
              value,
              rule,
              ignoreImageSelectors,
              isCancelled
            );
          } else if (property.includes("shadow")) {
            modifier = getShadowModifier(value);
          }
          if (!modifier) {
            return null;
          }
          return {
            property,
            value: modifier,
            important: getPriority(rule.style, property),
            sourceValue: value
          };
        }
        function joinSelectors(...selectors) {
          return selectors.filter(Boolean).join(", ");
        }
        const hostsWithOddScrollbars = ["calendar.google.com"];
        function getModifiedUserAgentStyle(theme2, isIFrame2, styleSystemControls) {
          const lines = [];
          if (!isIFrame2) {
            lines.push("html {");
            lines.push(
              "    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme2), " !important;")
            );
            lines.push("}");
          }
          if (isCSSColorSchemePropSupported && theme2.mode === 1) {
            lines.push("html {");
            lines.push("    color-scheme: dark !important;");
            lines.push("}");
            lines.push("iframe {");
            lines.push("    color-scheme: dark !important;");
            lines.push("}");
          }
          const bgSelectors = joinSelectors(
            isIFrame2 ? "" : "html, body",
            styleSystemControls ? "input, textarea, select, button, dialog" : ""
          );
          if (bgSelectors) {
            lines.push("".concat(bgSelectors, " {"));
            lines.push(
              "    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme2), ";")
            );
            lines.push("}");
          }
          lines.push(
            "".concat(joinSelectors("html, body", styleSystemControls ? "input, textarea, select, button" : ""), " {")
          );
          lines.push(
            "    border-color: ".concat(modifyBorderColor({ r: 76, g: 76, b: 76 }, theme2), ";")
          );
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme2), ";")
          );
          lines.push("}");
          lines.push("a {");
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 64, b: 255 }, theme2), ";")
          );
          lines.push("}");
          lines.push("table {");
          lines.push(
            "    border-color: ".concat(modifyBorderColor({ r: 128, g: 128, b: 128 }, theme2), ";")
          );
          lines.push("}");
          lines.push("mark {");
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme2), ";")
          );
          lines.push("}");
          lines.push("::placeholder {");
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 169, g: 169, b: 169 }, theme2), ";")
          );
          lines.push("}");
          lines.push("input:-webkit-autofill,");
          lines.push("textarea:-webkit-autofill,");
          lines.push("select:-webkit-autofill {");
          lines.push(
            "    background-color: ".concat(modifyBackgroundColor({ r: 250, g: 255, b: 189 }, theme2), " !important;")
          );
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme2), " !important;")
          );
          lines.push("}");
          if (theme2.scrollbarColor && !hostsWithOddScrollbars.includes(location.hostname)) {
            lines.push(getModifiedScrollbarStyle(theme2));
          }
          if (theme2.selectionColor) {
            lines.push(getModifiedSelectionStyle(theme2));
          }
          if (isLayerRuleSupported) {
            lines.unshift("@layer {");
            lines.push("}");
          }
          return lines.join("\n");
        }
        function getSelectionColor(theme2) {
          let backgroundColorSelection;
          let foregroundColorSelection;
          if (theme2.selectionColor === "auto") {
            backgroundColorSelection = modifyBackgroundColor(
              { r: 0, g: 96, b: 212 },
              __spreadProps(__spreadValues({}, theme2), { grayscale: 0 })
            );
            foregroundColorSelection = modifyForegroundColor(
              { r: 255, g: 255, b: 255 },
              __spreadProps(__spreadValues({}, theme2), { grayscale: 0 })
            );
          } else {
            const rgb = parseColorWithCache(theme2.selectionColor);
            const hsl = rgbToHSL(rgb);
            backgroundColorSelection = theme2.selectionColor;
            if (hsl.l < 0.5) {
              foregroundColorSelection = "#FFF";
            } else {
              foregroundColorSelection = "#000";
            }
          }
          return { backgroundColorSelection, foregroundColorSelection };
        }
        function getModifiedSelectionStyle(theme2) {
          const lines = [];
          const modifiedSelectionColor = getSelectionColor(theme2);
          const backgroundColorSelection = modifiedSelectionColor.backgroundColorSelection;
          const foregroundColorSelection = modifiedSelectionColor.foregroundColorSelection;
          ["::selection", "::-moz-selection"].forEach((selection) => {
            lines.push("".concat(selection, " {"));
            lines.push(
              "    background-color: ".concat(backgroundColorSelection, " !important;")
            );
            lines.push("    color: ".concat(foregroundColorSelection, " !important;"));
            lines.push("}");
          });
          return lines.join("\n");
        }
        function getModifiedScrollbarStyle(theme2) {
          let colorTrack;
          let colorThumb;
          if (theme2.scrollbarColor === "auto") {
            colorTrack = modifyBackgroundColor({ r: 241, g: 241, b: 241 }, theme2);
            colorThumb = modifyBackgroundColor({ r: 176, g: 176, b: 176 }, theme2);
          } else {
            const rgb = parseColorWithCache(theme2.scrollbarColor);
            const hsl = rgbToHSL(rgb);
            const darken = (darker) => __spreadProps(__spreadValues({}, hsl), {
              l: clamp(hsl.l - darker, 0, 1)
            });
            colorTrack = hslToString(darken(0.4));
            colorThumb = hslToString(hsl);
          }
          return [
            "* {",
            "    scrollbar-color: ".concat(colorThumb, " ").concat(colorTrack, ";"),
            "}"
          ].join("\n");
        }
        function getModifiedFallbackStyle(theme2, { strict }) {
          const factory = defaultFallbackFactory;
          return factory(theme2, { strict });
        }
        function defaultFallbackFactory(theme2, { strict }) {
          const lines = [];
          lines.push(
            "html, body, ".concat(strict ? "body :not(iframe)" : "body > :not(iframe)", " {")
          );
          lines.push(
            "    background-color: ".concat(modifyBackgroundColor({ r: 255, g: 255, b: 255 }, theme2), " !important;")
          );
          lines.push(
            "    border-color: ".concat(modifyBorderColor({ r: 64, g: 64, b: 64 }, theme2), " !important;")
          );
          lines.push(
            "    color: ".concat(modifyForegroundColor({ r: 0, g: 0, b: 0 }, theme2), " !important;")
          );
          lines.push("}");
          lines.push('div[style*="background-color: rgb(135, 135, 135)"] {');
          lines.push("    background-color: #878787 !important;");
          lines.push("}");
          return lines.join("\n");
        }
        const unparsableColors = /* @__PURE__ */ new Set([
          "inherit",
          "transparent",
          "initial",
          "currentcolor",
          "none",
          "unset",
          "auto"
        ]);
        function getColorModifier(prop, value, rule) {
          if (unparsableColors.has(value.toLowerCase())) {
            return value;
          }
          const rgb = parseColorWithCache(value);
          if (!rgb) {
            return null;
          }
          if (prop.includes("background")) {
            if (rule.style.webkitMaskImage && rule.style.webkitMaskImage !== "none" || rule.style.webkitMask && !rule.style.webkitMask.startsWith("none") || rule.style.mask && rule.style.mask !== "none" || rule.style.getPropertyValue("mask-image") && rule.style.getPropertyValue("mask-image") !== "none") {
              return (theme2) => modifyForegroundColor(rgb, theme2);
            }
            return (theme2) => modifyBackgroundColor(rgb, theme2);
          }
          if (prop.includes("border") || prop.includes("outline")) {
            return (theme2) => modifyBorderColor(rgb, theme2);
          }
          return (theme2) => modifyForegroundColor(rgb, theme2);
        }
        const imageDetailsCache = /* @__PURE__ */ new Map();
        const awaitingForImageLoading = /* @__PURE__ */ new Map();
        function shouldIgnoreImage(selectorText, selectors) {
          if (!selectorText || selectors.length === 0) {
            return false;
          }
          if (selectors.some((s) => s === "*")) {
            return true;
          }
          const ruleSelectors = selectorText.split(/,\s*/g);
          for (let i = 0; i < selectors.length; i++) {
            const ignoredSelector = selectors[i];
            if (ruleSelectors.some((s) => s === ignoredSelector)) {
              return true;
            }
          }
          return false;
        }
        function getBgImageModifier(value, rule, ignoreImageSelectors, isCancelled) {
          try {
            if (shouldIgnoreImage(rule.selectorText, ignoreImageSelectors)) {
              return value;
            }
            const gradients = parseGradient(value);
            const urls = getMatches(cssURLRegex, value);
            if (urls.length === 0 && gradients.length === 0) {
              return value;
            }
            const getIndices = (matches2) => {
              let index = 0;
              return matches2.map((match) => {
                const valueIndex = value.indexOf(match, index);
                index = valueIndex + match.length;
                return { match, index: valueIndex };
              });
            };
            const matches = gradients.map((i) => __spreadValues({ type: "gradient" }, i)).concat(
              getIndices(urls).map((i) => __spreadValues({
                type: "url",
                offset: 0
              }, i))
            ).sort((a, b) => a.index > b.index ? 1 : -1);
            const getGradientModifier = (gradient) => {
              const { typeGradient, match, hasComma } = gradient;
              const partsRegex = /([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?([^\(\), ]|( (?!calc)))*),?/g;
              const colorStopRegex = /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/;
              const parts = getMatches(partsRegex, match, 1).map((part) => {
                part = part.trim();
                let rgb = parseColorWithCache(part);
                if (rgb) {
                  return (theme2) => modifyGradientColor(rgb, theme2);
                }
                const space = part.lastIndexOf(" ");
                rgb = parseColorWithCache(part.substring(0, space));
                if (rgb) {
                  return (theme2) => "".concat(modifyGradientColor(rgb, theme2), " ").concat(part.substring(space + 1));
                }
                const colorStopMatch = part.match(colorStopRegex);
                if (colorStopMatch) {
                  rgb = parseColorWithCache(colorStopMatch[3]);
                  if (rgb) {
                    return (theme2) => "".concat(colorStopMatch[1], "(").concat(colorStopMatch[2] ? "".concat(colorStopMatch[2], ", ") : "").concat(modifyGradientColor(rgb, theme2), ")");
                  }
                }
                return () => part;
              });
              return (theme2) => {
                return "".concat(typeGradient, "(").concat(parts.map((modify) => modify(theme2)).join(", "), ")").concat(hasComma ? ", " : "");
              };
            };
            const getURLModifier = (urlValue) => {
              var _a;
              let url = getCSSURLValue(urlValue);
              const isURLEmpty = url.length === 0;
              const { parentStyleSheet } = rule;
              const baseURL = parentStyleSheet && parentStyleSheet.href ? getCSSBaseBath(parentStyleSheet.href) : ((_a = parentStyleSheet == null ? void 0 : parentStyleSheet.ownerNode) == null ? void 0 : _a.baseURI) || location.origin;
              url = getAbsoluteURL(baseURL, url);
              return async (theme2) => {
                if (isURLEmpty) {
                  return "url('')";
                }
                let imageDetails = null;
                if (imageDetailsCache.has(url)) {
                  imageDetails = imageDetailsCache.get(url);
                } else {
                  try {
                    if (!isBlobURLCheckResultReady()) {
                      await requestBlobURLCheck();
                    }
                    if (awaitingForImageLoading.has(url)) {
                      const awaiters = awaitingForImageLoading.get(url);
                      imageDetails = await new Promise(
                        (resolve) => awaiters.push(resolve)
                      );
                      if (!imageDetails) {
                        return null;
                      }
                    } else {
                      awaitingForImageLoading.set(url, []);
                      imageDetails = await getImageDetails(url);
                      imageDetailsCache.set(url, imageDetails);
                      awaitingForImageLoading.get(url).forEach(
                        (resolve) => resolve(imageDetails)
                      );
                      awaitingForImageLoading.delete(url);
                    }
                    if (isCancelled()) {
                      return null;
                    }
                  } catch (err) {
                    logWarn(err);
                    if (awaitingForImageLoading.has(url)) {
                      awaitingForImageLoading.get(url).forEach((resolve) => resolve(null));
                      awaitingForImageLoading.delete(url);
                    }
                  }
                }
                if (imageDetails) {
                  const bgImageValue = getBgImageValue(
                    imageDetails,
                    theme2
                  );
                  if (bgImageValue) {
                    return bgImageValue;
                  }
                }
                if (url.startsWith("data:")) {
                  const blobURL = await tryConvertDataURLToBlobURL(url);
                  if (blobURL) {
                    return 'url("'.concat(blobURL, '")');
                  }
                }
                return 'url("'.concat(url, '")');
              };
            };
            const getBgImageValue = (imageDetails, theme2) => {
              const { isDark, isLight, isTransparent, isLarge, width } = imageDetails;
              let result;
              const logSrc = imageDetails.src.startsWith("data:") ? "data:" : imageDetails.src;
              if (isLarge && isLight && !isTransparent && theme2.mode === 1) {
                logInfo("Hiding large light image ".concat(logSrc));
                result = "none";
              } else if (isDark && isTransparent && theme2.mode === 1 && width > 2) {
                logInfo("Inverting dark image ".concat(logSrc));
                const inverted = getFilteredImageURL(imageDetails, __spreadProps(__spreadValues({}, theme2), {
                  sepia: clamp(theme2.sepia + 10, 0, 100)
                }));
                result = 'url("'.concat(inverted, '")');
              } else if (isLight && !isTransparent && theme2.mode === 1) {
                logInfo("Dimming light image ".concat(logSrc));
                const dimmed = getFilteredImageURL(imageDetails, theme2);
                result = 'url("'.concat(dimmed, '")');
              } else if (theme2.mode === 0 && isLight) {
                logInfo("Applying filter to image ".concat(logSrc));
                const filtered = getFilteredImageURL(imageDetails, __spreadProps(__spreadValues({}, theme2), {
                  brightness: clamp(theme2.brightness - 10, 5, 200),
                  sepia: clamp(theme2.sepia + 10, 0, 100)
                }));
                result = 'url("'.concat(filtered, '")');
              } else {
                logInfo("Not modifying the image ".concat(logSrc));
                result = null;
              }
              return result;
            };
            const modifiers = [];
            let matchIndex = 0;
            let prevHasComma = false;
            matches.forEach(
              ({ type, match, index, typeGradient, hasComma, offset }, i) => {
                const matchStart = index;
                const prefixStart = matchIndex;
                const matchEnd = matchStart + match.length + offset;
                matchIndex = matchEnd;
                if (prefixStart !== matchStart) {
                  if (prevHasComma) {
                    modifiers.push(() => {
                      let betweenValue = value.substring(
                        prefixStart,
                        matchStart
                      );
                      if (betweenValue[0] === ",") {
                        betweenValue = betweenValue.substring(1);
                      }
                      return betweenValue;
                    });
                  } else {
                    modifiers.push(
                      () => value.substring(prefixStart, matchStart)
                    );
                  }
                }
                prevHasComma = hasComma || false;
                if (type === "url") {
                  modifiers.push(getURLModifier(match));
                } else if (type === "gradient") {
                  modifiers.push(
                    getGradientModifier({
                      match,
                      index,
                      typeGradient,
                      hasComma: hasComma || false,
                      offset
                    })
                  );
                }
                if (i === matches.length - 1) {
                  modifiers.push(() => value.substring(matchEnd));
                }
              }
            );
            return (theme2) => {
              const results = modifiers.filter(Boolean).map((modify) => modify(theme2));
              if (results.some((r) => r instanceof Promise)) {
                return Promise.all(results).then((asyncResults) => {
                  return asyncResults.filter(Boolean).join("");
                });
              }
              const combinedResult = results.join("");
              if (combinedResult.endsWith(", initial")) {
                return combinedResult.slice(0, -9);
              }
              return combinedResult;
            };
          } catch (err) {
            return null;
          }
        }
        function getShadowModifierWithInfo(value) {
          try {
            let index = 0;
            const colorMatches = getMatches(
              /(^|\s)(?!calc)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi,
              value,
              2
            );
            let notParsed = 0;
            const modifiers = colorMatches.map((match, i) => {
              const prefixIndex = index;
              const matchIndex = value.indexOf(match, index);
              const matchEnd = matchIndex + match.length;
              index = matchEnd;
              const rgb = parseColorWithCache(match);
              if (!rgb) {
                notParsed++;
                return () => value.substring(prefixIndex, matchEnd);
              }
              return (theme2) => "".concat(value.substring(prefixIndex, matchIndex)).concat(modifyShadowColor(rgb, theme2)).concat(i === colorMatches.length - 1 ? value.substring(matchEnd) : "");
            });
            return (theme2) => {
              const modified = modifiers.map((modify) => modify(theme2)).join("");
              return {
                matchesLength: colorMatches.length,
                unparseableMatchesLength: notParsed,
                result: modified
              };
            };
          } catch (err) {
            return null;
          }
        }
        function getShadowModifier(value) {
          const shadowModifier = getShadowModifierWithInfo(value);
          if (!shadowModifier) {
            return null;
          }
          return (theme2) => shadowModifier(theme2).result;
        }
        function getScrollbarColorModifier(value) {
          const colorsMatch = value.match(
            /^\s*([a-z]+(\(.*\))?)\s+([a-z]+(\(.*\))?)\s*$/
          );
          if (!colorsMatch) {
            return value;
          }
          const thumb = parseColorWithCache(colorsMatch[1]);
          const track = parseColorWithCache(colorsMatch[3]);
          if (!thumb || !track) {
            return null;
          }
          return (theme2) => "".concat(modifyForegroundColor(thumb, theme2), " ").concat(modifyBackgroundColor(thumb, theme2));
        }
        function getColorSchemeModifier() {
          return (theme2) => theme2.mode === 0 ? "dark light" : "dark";
        }
        function getVariableModifier(variablesStore2, prop, value, rule, ignoredImgSelectors, isCancelled) {
          return variablesStore2.getModifierForVariable({
            varName: prop,
            sourceValue: value,
            rule,
            ignoredImgSelectors,
            isCancelled
          });
        }
        function getVariableDependantModifier(variablesStore2, prop, value) {
          return variablesStore2.getModifierForVarDependant(prop, value);
        }
        function cleanModificationCache() {
          clearColorModificationCache();
          imageDetailsCache.clear();
          cleanImageProcessingCache();
          awaitingForImageLoading.clear();
        }
        const VAR_TYPE_BGCOLOR = 1 << 0;
        const VAR_TYPE_TEXTCOLOR = 1 << 1;
        const VAR_TYPE_BORDERCOLOR = 1 << 2;
        const VAR_TYPE_BGIMG = 1 << 3;
        class VariablesStore {
          constructor() {
            this.varTypes = /* @__PURE__ */ new Map();
            this.rulesQueue = /* @__PURE__ */ new Set();
            this.inlineStyleQueue = [];
            this.definedVars = /* @__PURE__ */ new Set();
            this.varRefs = /* @__PURE__ */ new Map();
            this.unknownColorVars = /* @__PURE__ */ new Set();
            this.unknownBgVars = /* @__PURE__ */ new Set();
            this.undefinedVars = /* @__PURE__ */ new Set();
            this.initialVarTypes = /* @__PURE__ */ new Map();
            this.changedTypeVars = /* @__PURE__ */ new Set();
            this.typeChangeSubscriptions = /* @__PURE__ */ new Map();
            this.unstableVarValues = /* @__PURE__ */ new Map();
          }
          clear() {
            this.varTypes.clear();
            this.rulesQueue.clear();
            this.inlineStyleQueue.splice(0);
            this.definedVars.clear();
            this.varRefs.clear();
            this.unknownColorVars.clear();
            this.unknownBgVars.clear();
            this.undefinedVars.clear();
            this.initialVarTypes.clear();
            this.changedTypeVars.clear();
            this.typeChangeSubscriptions.clear();
            this.unstableVarValues.clear();
          }
          isVarType(varName, typeNum) {
            return this.varTypes.has(varName) && (this.varTypes.get(varName) & typeNum) > 0;
          }
          addRulesForMatching(rules) {
            this.rulesQueue.add(rules);
          }
          addInlineStyleForMatching(style) {
            this.inlineStyleQueue.push(style);
          }
          matchVariablesAndDependents() {
            if (this.rulesQueue.size === 0 && this.inlineStyleQueue.length === 0) {
              return;
            }
            this.changedTypeVars.clear();
            this.initialVarTypes = new Map(this.varTypes);
            this.collectRootVariables();
            this.collectVariablesAndVarDep();
            this.collectRootVarDependents();
            this.varRefs.forEach((refs, v) => {
              refs.forEach((r) => {
                if (this.varTypes.has(v)) {
                  this.resolveVariableType(r, this.varTypes.get(v));
                }
              });
            });
            this.unknownColorVars.forEach((v) => {
              if (this.unknownBgVars.has(v)) {
                this.unknownColorVars.delete(v);
                this.unknownBgVars.delete(v);
                this.resolveVariableType(v, VAR_TYPE_BGCOLOR);
              } else if (this.isVarType(
                v,
                VAR_TYPE_BGCOLOR | VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR
              )) {
                this.unknownColorVars.delete(v);
              } else {
                this.undefinedVars.add(v);
              }
            });
            this.unknownBgVars.forEach((v) => {
              const hasColor = this.findVarRef(v, (ref) => {
                return this.unknownColorVars.has(ref) || this.isVarType(
                  ref,
                  VAR_TYPE_BGCOLOR | VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR
                );
              }) != null;
              if (hasColor) {
                this.iterateVarRefs(v, (ref) => {
                  this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
                });
              } else if (this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)) {
                this.unknownBgVars.delete(v);
              } else {
                this.undefinedVars.add(v);
              }
            });
            this.changedTypeVars.forEach((varName) => {
              if (this.typeChangeSubscriptions.has(varName)) {
                this.typeChangeSubscriptions.get(varName).forEach((callback) => {
                  callback();
                });
              }
            });
            this.changedTypeVars.clear();
          }
          getModifierForVariable(options) {
            return (theme2) => {
              const {
                varName,
                sourceValue,
                rule,
                ignoredImgSelectors,
                isCancelled
              } = options;
              const getDeclarations = () => {
                const declarations = [];
                const addModifiedValue = (typeNum, varNameWrapper, colorModifier) => {
                  if (!this.isVarType(varName, typeNum)) {
                    return;
                  }
                  const property = varNameWrapper(varName);
                  let modifiedValue;
                  if (isVarDependant(sourceValue)) {
                    if (isConstructedColorVar(sourceValue)) {
                      let value = insertVarValues(
                        sourceValue,
                        this.unstableVarValues
                      );
                      if (!value) {
                        value = typeNum === VAR_TYPE_BGCOLOR ? "#ffffff" : "#000000";
                      }
                      modifiedValue = colorModifier(value, theme2);
                    } else {
                      modifiedValue = replaceCSSVariablesNames(
                        sourceValue,
                        (v) => varNameWrapper(v),
                        (fallback) => colorModifier(fallback, theme2)
                      );
                    }
                  } else {
                    modifiedValue = colorModifier(sourceValue, theme2);
                  }
                  declarations.push({
                    property,
                    value: modifiedValue
                  });
                };
                addModifiedValue(
                  VAR_TYPE_BGCOLOR,
                  wrapBgColorVariableName,
                  tryModifyBgColor
                );
                addModifiedValue(
                  VAR_TYPE_TEXTCOLOR,
                  wrapTextColorVariableName,
                  tryModifyTextColor
                );
                addModifiedValue(
                  VAR_TYPE_BORDERCOLOR,
                  wrapBorderColorVariableName,
                  tryModifyBorderColor
                );
                if (this.isVarType(varName, VAR_TYPE_BGIMG)) {
                  const property = wrapBgImgVariableName(varName);
                  let modifiedValue = sourceValue;
                  if (isVarDependant(sourceValue)) {
                    modifiedValue = replaceCSSVariablesNames(
                      sourceValue,
                      (v) => wrapBgColorVariableName(v),
                      (fallback) => tryModifyBgColor(fallback, theme2)
                    );
                  }
                  const bgModifier = getBgImageModifier(
                    modifiedValue,
                    rule,
                    ignoredImgSelectors,
                    isCancelled
                  );
                  modifiedValue = typeof bgModifier === "function" ? bgModifier(theme2) : bgModifier;
                  declarations.push({
                    property,
                    value: modifiedValue
                  });
                }
                return declarations;
              };
              const callbacks = /* @__PURE__ */ new Set();
              const addListener = (onTypeChange) => {
                const callback = () => {
                  const decs = getDeclarations();
                  onTypeChange(decs);
                };
                callbacks.add(callback);
                this.subscribeForVarTypeChange(varName, callback);
              };
              const removeListeners = () => {
                callbacks.forEach((callback) => {
                  this.unsubscribeFromVariableTypeChanges(
                    varName,
                    callback
                  );
                });
              };
              return {
                declarations: getDeclarations(),
                onTypeChange: { addListener, removeListeners }
              };
            };
          }
          getModifierForVarDependant(property, sourceValue) {
            const isConstructedColor = sourceValue.match(/^\s*(rgb|hsl)a?\(/);
            const isSimpleConstructedColor = sourceValue.match(
              /^rgba?\(var\(--[\-_A-Za-z0-9]+\)(\s*,?\/?\s*0?\.\d+)?\)$/
            );
            if (isConstructedColor && !isSimpleConstructedColor) {
              const isBg = property.startsWith("background");
              const isText = isTextColorProperty(property);
              return (theme2) => {
                let value = insertVarValues(
                  sourceValue,
                  this.unstableVarValues
                );
                if (!value) {
                  value = isBg ? "#ffffff" : "#000000";
                }
                const modifier = isBg ? tryModifyBgColor : isText ? tryModifyTextColor : tryModifyBorderColor;
                return modifier(value, theme2);
              };
            }
            if (property === "background-color" || isSimpleConstructedColor && property === "background") {
              return (theme2) => {
                const defaultFallback = tryModifyBgColor(
                  isConstructedColor ? "255, 255, 255" : "#ffffff",
                  theme2
                );
                return replaceCSSVariablesNames(
                  sourceValue,
                  (v) => wrapBgColorVariableName(v),
                  (fallback) => tryModifyBgColor(fallback, theme2),
                  defaultFallback
                );
              };
            }
            if (isTextColorProperty(property)) {
              return (theme2) => {
                const defaultFallback = tryModifyTextColor(
                  isConstructedColor ? "0, 0, 0" : "#000000",
                  theme2
                );
                return replaceCSSVariablesNames(
                  sourceValue,
                  (v) => wrapTextColorVariableName(v),
                  (fallback) => tryModifyTextColor(fallback, theme2),
                  defaultFallback
                );
              };
            }
            if (property === "background" || property === "background-image" || property === "box-shadow") {
              return (theme2) => {
                const unknownVars = /* @__PURE__ */ new Set();
                const modify = () => {
                  const variableReplaced = replaceCSSVariablesNames(
                    sourceValue,
                    (v) => {
                      if (this.isVarType(v, VAR_TYPE_BGCOLOR)) {
                        return wrapBgColorVariableName(v);
                      }
                      if (this.isVarType(v, VAR_TYPE_BGIMG)) {
                        return wrapBgImgVariableName(v);
                      }
                      unknownVars.add(v);
                      return v;
                    },
                    (fallback) => tryModifyBgColor(fallback, theme2)
                  );
                  if (property === "box-shadow") {
                    const shadowModifier = getShadowModifierWithInfo(variableReplaced);
                    const modifiedShadow = shadowModifier(theme2);
                    if (modifiedShadow.unparseableMatchesLength !== modifiedShadow.matchesLength) {
                      return modifiedShadow.result;
                    }
                  }
                  return variableReplaced;
                };
                const modified = modify();
                if (unknownVars.size > 0) {
                  const isFallbackResolved = modified.match(
                    /^var\(.*?, (var\(--darkreader-bg--.*\))|(#[0-9A-Fa-f]+)|([a-z]+)|(rgba?\(.+\))|(hsla?\(.+\))\)$/
                  );
                  if (isFallbackResolved) {
                    return modified;
                  }
                  return new Promise((resolve) => {
                    for (const unknownVar of unknownVars.values()) {
                      const callback = () => {
                        this.unsubscribeFromVariableTypeChanges(
                          unknownVar,
                          callback
                        );
                        const newValue = modify();
                        resolve(newValue);
                      };
                      this.subscribeForVarTypeChange(
                        unknownVar,
                        callback
                      );
                    }
                  });
                }
                return modified;
              };
            }
            if (property.startsWith("border") || property.startsWith("outline")) {
              return (theme2) => {
                return replaceCSSVariablesNames(
                  sourceValue,
                  (v) => wrapBorderColorVariableName(v),
                  (fallback) => tryModifyBorderColor(fallback, theme2)
                );
              };
            }
            return null;
          }
          subscribeForVarTypeChange(varName, callback) {
            if (!this.typeChangeSubscriptions.has(varName)) {
              this.typeChangeSubscriptions.set(varName, /* @__PURE__ */ new Set());
            }
            const rootStore = this.typeChangeSubscriptions.get(varName);
            if (!rootStore.has(callback)) {
              rootStore.add(callback);
            }
          }
          unsubscribeFromVariableTypeChanges(varName, callback) {
            if (this.typeChangeSubscriptions.has(varName)) {
              this.typeChangeSubscriptions.get(varName).delete(callback);
            }
          }
          collectVariablesAndVarDep() {
            this.rulesQueue.forEach((rules) => {
              iterateCSSRules(rules, (rule) => {
                if (rule.style) {
                  this.collectVarsFromCSSDeclarations(rule.style);
                }
              });
            });
            this.inlineStyleQueue.forEach((style) => {
              this.collectVarsFromCSSDeclarations(style);
            });
            this.rulesQueue.clear();
            this.inlineStyleQueue.splice(0);
          }
          collectVarsFromCSSDeclarations(style) {
            iterateCSSDeclarations(style, (property, value) => {
              if (isVariable(property)) {
                this.inspectVariable(property, value);
              }
              if (isVarDependant(value)) {
                this.inspectVarDependant(property, value);
              }
            });
          }
          shouldProcessRootVariables() {
            var _a;
            return this.rulesQueue.size > 0 && ((_a = document.documentElement.getAttribute("style")) == null ? void 0 : _a.includes("--"));
          }
          collectRootVariables() {
            if (!this.shouldProcessRootVariables()) {
              return;
            }
            iterateCSSDeclarations(
              document.documentElement.style,
              (property, value) => {
                if (isVariable(property)) {
                  this.inspectVariable(property, value);
                }
              }
            );
          }
          inspectVariable(varName, value) {
            this.unstableVarValues.set(varName, value);
            if (isVarDependant(value) && isConstructedColorVar(value)) {
              this.unknownColorVars.add(varName);
              this.definedVars.add(varName);
            }
            if (this.definedVars.has(varName)) {
              return;
            }
            this.definedVars.add(varName);
            const isColor = Boolean(
              value.match(rawRGBSpaceRegex) || value.match(rawRGBCommaRegex) || parseColorWithCache(value)
            );
            if (isColor) {
              this.unknownColorVars.add(varName);
            } else if (value.includes("url(") || value.includes("linear-gradient(") || value.includes("radial-gradient(")) {
              this.resolveVariableType(varName, VAR_TYPE_BGIMG);
            }
          }
          resolveVariableType(varName, typeNum) {
            const initialType = this.initialVarTypes.get(varName) || 0;
            const currentType = this.varTypes.get(varName) || 0;
            const newType = currentType | typeNum;
            this.varTypes.set(varName, newType);
            if (newType !== initialType || this.undefinedVars.has(varName)) {
              this.changedTypeVars.add(varName);
              this.undefinedVars.delete(varName);
            }
            this.unknownColorVars.delete(varName);
            this.unknownBgVars.delete(varName);
          }
          collectRootVarDependents() {
            if (!this.shouldProcessRootVariables()) {
              return;
            }
            iterateCSSDeclarations(
              document.documentElement.style,
              (property, value) => {
                if (isVarDependant(value)) {
                  this.inspectVarDependant(property, value);
                }
              }
            );
          }
          inspectVarDependant(property, value) {
            if (isVariable(property)) {
              this.iterateVarDeps(value, (ref) => {
                if (!this.varRefs.has(property)) {
                  this.varRefs.set(property, /* @__PURE__ */ new Set());
                }
                this.varRefs.get(property).add(ref);
              });
            } else if (property === "background-color" || property === "box-shadow") {
              this.iterateVarDeps(
                value,
                (v) => this.resolveVariableType(v, VAR_TYPE_BGCOLOR)
              );
            } else if (isTextColorProperty(property)) {
              this.iterateVarDeps(
                value,
                (v) => this.resolveVariableType(v, VAR_TYPE_TEXTCOLOR)
              );
            } else if (property.startsWith("border") || property.startsWith("outline")) {
              this.iterateVarDeps(
                value,
                (v) => this.resolveVariableType(v, VAR_TYPE_BORDERCOLOR)
              );
            } else if (property === "background" || property === "background-image") {
              this.iterateVarDeps(value, (v) => {
                if (this.isVarType(v, VAR_TYPE_BGCOLOR | VAR_TYPE_BGIMG)) {
                  return;
                }
                const isBgColor = this.findVarRef(v, (ref) => {
                  return this.unknownColorVars.has(ref) || this.isVarType(
                    ref,
                    VAR_TYPE_BGCOLOR | VAR_TYPE_TEXTCOLOR | VAR_TYPE_BORDERCOLOR
                  );
                }) != null;
                this.iterateVarRefs(v, (ref) => {
                  if (isBgColor) {
                    this.resolveVariableType(ref, VAR_TYPE_BGCOLOR);
                  } else {
                    this.unknownBgVars.add(ref);
                  }
                });
              });
            }
          }
          iterateVarDeps(value, iterator) {
            const varDeps = /* @__PURE__ */ new Set();
            iterateVarDependencies(value, (v) => varDeps.add(v));
            varDeps.forEach((v) => iterator(v));
          }
          findVarRef(varName, iterator, stack = /* @__PURE__ */ new Set()) {
            if (stack.has(varName)) {
              return null;
            }
            stack.add(varName);
            const result = iterator(varName);
            if (result) {
              return varName;
            }
            const refs = this.varRefs.get(varName);
            if (!refs || refs.size === 0) {
              return null;
            }
            for (const ref of refs) {
              const found = this.findVarRef(ref, iterator, stack);
              if (found) {
                return found;
              }
            }
            return null;
          }
          iterateVarRefs(varName, iterator) {
            this.findVarRef(varName, (ref) => {
              iterator(ref);
              return false;
            });
          }
          setOnRootVariableChange(callback) {
            this.onRootVariableDefined = callback;
          }
          putRootVars(styleElement, theme2) {
            const sheet = styleElement.sheet;
            if (sheet.cssRules.length > 0) {
              sheet.deleteRule(0);
            }
            const declarations = /* @__PURE__ */ new Map();
            iterateCSSDeclarations(
              document.documentElement.style,
              (property, value) => {
                if (isVariable(property)) {
                  if (this.isVarType(property, VAR_TYPE_BGCOLOR)) {
                    declarations.set(
                      wrapBgColorVariableName(property),
                      tryModifyBgColor(value, theme2)
                    );
                  }
                  if (this.isVarType(property, VAR_TYPE_TEXTCOLOR)) {
                    declarations.set(
                      wrapTextColorVariableName(property),
                      tryModifyTextColor(value, theme2)
                    );
                  }
                  if (this.isVarType(property, VAR_TYPE_BORDERCOLOR)) {
                    declarations.set(
                      wrapBorderColorVariableName(property),
                      tryModifyBorderColor(value, theme2)
                    );
                  }
                  this.subscribeForVarTypeChange(
                    property,
                    this.onRootVariableDefined
                  );
                }
              }
            );
            const cssLines = [];
            cssLines.push(":root {");
            for (const [property, value] of declarations) {
              cssLines.push("    ".concat(property, ": ").concat(value, ";"));
            }
            cssLines.push("}");
            const cssText = cssLines.join("\n");
            sheet.insertRule(cssText);
          }
        }
        const variablesStore = new VariablesStore();
        function getVariableRange(input, searchStart = 0) {
          const start = input.indexOf("var(", searchStart);
          if (start >= 0) {
            const range = getParenthesesRange(input, start + 3);
            if (range) {
              return { start, end: range.end };
            }
          }
          return null;
        }
        function getVariablesMatches(input) {
          const ranges = [];
          let i = 0;
          let range;
          while (range = getVariableRange(input, i)) {
            const { start, end } = range;
            ranges.push({ start, end, value: input.substring(start, end) });
            i = range.end + 1;
          }
          return ranges;
        }
        function replaceVariablesMatches(input, replacer) {
          const matches = getVariablesMatches(input);
          const matchesCount = matches.length;
          if (matchesCount === 0) {
            return input;
          }
          const inputLength = input.length;
          const replacements = matches.map(
            (m) => replacer(m.value, matches.length)
          );
          const parts = [];
          parts.push(input.substring(0, matches[0].start));
          for (let i = 0; i < matchesCount; i++) {
            parts.push(replacements[i]);
            const start = matches[i].end;
            const end = i < matchesCount - 1 ? matches[i + 1].start : inputLength;
            parts.push(input.substring(start, end));
          }
          return parts.join("");
        }
        function getVariableNameAndFallback(match) {
          const commaIndex = match.indexOf(",");
          let name;
          let fallback;
          if (commaIndex >= 0) {
            name = match.substring(4, commaIndex).trim();
            fallback = match.substring(commaIndex + 1, match.length - 1).trim();
          } else {
            name = match.substring(4, match.length - 1).trim();
            fallback = "";
          }
          return { name, fallback };
        }
        function replaceCSSVariablesNames(value, nameReplacer, fallbackReplacer, finalFallback) {
          const matchReplacer = (match) => {
            const { name, fallback } = getVariableNameAndFallback(match);
            const newName = nameReplacer(name);
            if (!fallback) {
              if (finalFallback) {
                return "var(".concat(newName, ", ").concat(finalFallback, ")");
              }
              return "var(".concat(newName, ")");
            }
            let newFallback;
            if (isVarDependant(fallback)) {
              newFallback = replaceCSSVariablesNames(
                fallback,
                nameReplacer,
                fallbackReplacer
              );
            } else if (fallbackReplacer) {
              newFallback = fallbackReplacer(fallback);
            } else {
              newFallback = fallback;
            }
            return "var(".concat(newName, ", ").concat(newFallback, ")");
          };
          return replaceVariablesMatches(value, matchReplacer);
        }
        function iterateVarDependencies(value, iterator) {
          replaceCSSVariablesNames(value, (varName) => {
            iterator(varName);
            return varName;
          });
        }
        function wrapBgColorVariableName(name) {
          return "--darkreader-bg".concat(name);
        }
        function wrapTextColorVariableName(name) {
          return "--darkreader-text".concat(name);
        }
        function wrapBorderColorVariableName(name) {
          return "--darkreader-border".concat(name);
        }
        function wrapBgImgVariableName(name) {
          return "--darkreader-bgimg".concat(name);
        }
        function isVariable(property) {
          return property.startsWith("--");
        }
        function isVarDependant(value) {
          return value.includes("var(");
        }
        function isConstructedColorVar(value) {
          return value.match(/^\s*(rgb|hsl)a?\(/) || value.match(/^(((\d{1,3})|(var\([\-_A-Za-z0-9]+\))),?\s*?){3}$/);
        }
        function isTextColorProperty(property) {
          return property === "color" || property === "caret-color" || property === "-webkit-text-fill-color";
        }
        const rawRGBSpaceRegex = /^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})$/;
        const rawRGBCommaRegex = /^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/;
        function parseRawColorValue(input) {
          var _a;
          const match = (_a = input.match(rawRGBSpaceRegex)) != null ? _a : input.match(rawRGBCommaRegex);
          if (match) {
            const color = "rgb(".concat(match[1], ", ").concat(match[2], ", ").concat(match[3], ")");
            return { isRaw: true, color };
          }
          return { isRaw: false, color: input };
        }
        function handleRawColorValue(input, theme2, modifyFunction) {
          const { isRaw, color } = parseRawColorValue(input);
          const rgb = parseColorWithCache(color);
          if (rgb) {
            const outputColor = modifyFunction(rgb, theme2);
            if (isRaw) {
              const outputInRGB = parseColorWithCache(outputColor);
              return outputInRGB ? "".concat(outputInRGB.r, ", ").concat(outputInRGB.g, ", ").concat(outputInRGB.b) : outputColor;
            }
            return outputColor;
          }
          return color;
        }
        function tryModifyBgColor(color, theme2) {
          return handleRawColorValue(color, theme2, modifyBackgroundColor);
        }
        function tryModifyTextColor(color, theme2) {
          return handleRawColorValue(color, theme2, modifyForegroundColor);
        }
        function tryModifyBorderColor(color, theme2) {
          return handleRawColorValue(color, theme2, modifyBorderColor);
        }
        function insertVarValues(source, varValues, fullStack = /* @__PURE__ */ new Set()) {
          let containsUnresolvedVar = false;
          const matchReplacer = (match, count) => {
            const { name, fallback } = getVariableNameAndFallback(match);
            const stack = count > 1 ? new Set(fullStack) : fullStack;
            if (stack.has(name)) {
              containsUnresolvedVar = true;
              return null;
            }
            stack.add(name);
            const varValue = varValues.get(name) || fallback;
            let inserted = null;
            if (varValue) {
              if (isVarDependant(varValue)) {
                inserted = insertVarValues(varValue, varValues, stack);
              } else {
                inserted = varValue;
              }
            }
            if (!inserted) {
              containsUnresolvedVar = true;
              return null;
            }
            return inserted;
          };
          const replaced = replaceVariablesMatches(source, matchReplacer);
          if (containsUnresolvedVar) {
            return null;
          }
          return replaced;
        }
        const overrides$1 = {
          "background-color": {
            customProp: "--darkreader-inline-bgcolor",
            cssProp: "background-color",
            dataAttr: "data-darkreader-inline-bgcolor"
          },
          "background-image": {
            customProp: "--darkreader-inline-bgimage",
            cssProp: "background-image",
            dataAttr: "data-darkreader-inline-bgimage"
          },
          "border-color": {
            customProp: "--darkreader-inline-border",
            cssProp: "border-color",
            dataAttr: "data-darkreader-inline-border"
          },
          "border-bottom-color": {
            customProp: "--darkreader-inline-border-bottom",
            cssProp: "border-bottom-color",
            dataAttr: "data-darkreader-inline-border-bottom"
          },
          "border-left-color": {
            customProp: "--darkreader-inline-border-left",
            cssProp: "border-left-color",
            dataAttr: "data-darkreader-inline-border-left"
          },
          "border-right-color": {
            customProp: "--darkreader-inline-border-right",
            cssProp: "border-right-color",
            dataAttr: "data-darkreader-inline-border-right"
          },
          "border-top-color": {
            customProp: "--darkreader-inline-border-top",
            cssProp: "border-top-color",
            dataAttr: "data-darkreader-inline-border-top"
          },
          "box-shadow": {
            customProp: "--darkreader-inline-boxshadow",
            cssProp: "box-shadow",
            dataAttr: "data-darkreader-inline-boxshadow"
          },
          "color": {
            customProp: "--darkreader-inline-color",
            cssProp: "color",
            dataAttr: "data-darkreader-inline-color"
          },
          "fill": {
            customProp: "--darkreader-inline-fill",
            cssProp: "fill",
            dataAttr: "data-darkreader-inline-fill"
          },
          "stroke": {
            customProp: "--darkreader-inline-stroke",
            cssProp: "stroke",
            dataAttr: "data-darkreader-inline-stroke"
          },
          "outline-color": {
            customProp: "--darkreader-inline-outline",
            cssProp: "outline-color",
            dataAttr: "data-darkreader-inline-outline"
          },
          "stop-color": {
            customProp: "--darkreader-inline-stopcolor",
            cssProp: "stop-color",
            dataAttr: "data-darkreader-inline-stopcolor"
          }
        };
        const shorthandOverrides = {
          background: {
            customProp: "--darkreader-inline-bg",
            cssProp: "background",
            dataAttr: "data-darkreader-inline-bg"
          }
        };
        const overridesList = Object.values(overrides$1);
        const normalizedPropList = {};
        overridesList.forEach(
          ({ cssProp, customProp }) => normalizedPropList[customProp] = cssProp
        );
        const INLINE_STYLE_ATTRS = [
          "style",
          "fill",
          "stop-color",
          "stroke",
          "bgcolor",
          "color",
          "background"
        ];
        const INLINE_STYLE_SELECTOR = INLINE_STYLE_ATTRS.map(
          (attr) => "[".concat(attr, "]")
        ).join(", ");
        function getInlineOverrideStyle() {
          const allOverrides = overridesList.concat(
            Object.values(shorthandOverrides)
          );
          return allOverrides.map(({ dataAttr, customProp, cssProp }) => {
            return [
              "[".concat(dataAttr, "] {"),
              "  ".concat(cssProp, ": var(").concat(customProp, ") !important;"),
              "}"
            ].join("\n");
          }).concat([
            "[data-darkreader-inline-invert] {",
            "    filter: invert(100%) hue-rotate(180deg);",
            "}"
          ]).join("\n");
        }
        function getInlineStyleElements(root) {
          const results = [];
          if (root instanceof Element && root.matches(INLINE_STYLE_SELECTOR)) {
            results.push(root);
          }
          if (root instanceof Element || isShadowDomSupported && root instanceof ShadowRoot || root instanceof Document) {
            push(results, root.querySelectorAll(INLINE_STYLE_SELECTOR));
          }
          return results;
        }
        const treeObservers = /* @__PURE__ */ new Map();
        const attrObservers = /* @__PURE__ */ new Map();
        function watchForInlineStyles(elementStyleDidChange, shadowRootDiscovered) {
          deepWatchForInlineStyles(
            document,
            elementStyleDidChange,
            shadowRootDiscovered
          );
          iterateShadowHosts(document.documentElement, (host) => {
            deepWatchForInlineStyles(
              host.shadowRoot,
              elementStyleDidChange,
              shadowRootDiscovered
            );
          });
        }
        function deepWatchForInlineStyles(root, elementStyleDidChange, shadowRootDiscovered) {
          if (treeObservers.has(root)) {
            treeObservers.get(root).disconnect();
            attrObservers.get(root).disconnect();
          }
          const discoveredNodes = /* @__PURE__ */ new WeakSet();
          function discoverNodes(node) {
            getInlineStyleElements(node).forEach((el) => {
              if (discoveredNodes.has(el)) {
                return;
              }
              discoveredNodes.add(el);
              elementStyleDidChange(el);
            });
            iterateShadowHosts(node, (n) => {
              if (discoveredNodes.has(node)) {
                return;
              }
              discoveredNodes.add(node);
              shadowRootDiscovered(n.shadowRoot);
              deepWatchForInlineStyles(
                n.shadowRoot,
                elementStyleDidChange,
                shadowRootDiscovered
              );
            });
            variablesStore.matchVariablesAndDependents();
          }
          const treeObserver = createOptimizedTreeObserver(root, {
            onMinorMutations: (_root, { additions }) => {
              additions.forEach((added) => discoverNodes(added));
            },
            onHugeMutations: () => {
              discoverNodes(root);
            }
          });
          treeObservers.set(root, treeObserver);
          let attemptCount = 0;
          let start = null;
          const ATTEMPTS_INTERVAL = getDuration({ seconds: 10 });
          const RETRY_TIMEOUT = getDuration({ seconds: 2 });
          const MAX_ATTEMPTS_COUNT = 50;
          let cache = [];
          let timeoutId = null;
          const handleAttributeMutations = throttle((mutations) => {
            const handledTargets = /* @__PURE__ */ new Set();
            mutations.forEach((m) => {
              const target = m.target;
              if (handledTargets.has(target)) {
                return;
              }
              if (INLINE_STYLE_ATTRS.includes(m.attributeName)) {
                handledTargets.add(target);
                elementStyleDidChange(target);
              }
            });
            variablesStore.matchVariablesAndDependents();
          });
          const attrObserver = new MutationObserver((mutations) => {
            if (timeoutId) {
              cache.push(...mutations);
              return;
            }
            attemptCount++;
            const now = Date.now();
            if (start == null) {
              start = now;
            } else if (attemptCount >= MAX_ATTEMPTS_COUNT) {
              if (now - start < ATTEMPTS_INTERVAL) {
                timeoutId = setTimeout(() => {
                  start = null;
                  attemptCount = 0;
                  timeoutId = null;
                  const attributeCache = cache;
                  cache = [];
                  handleAttributeMutations(attributeCache);
                }, RETRY_TIMEOUT);
                cache.push(...mutations);
                return;
              }
              start = now;
              attemptCount = 1;
            }
            handleAttributeMutations(mutations);
          });
          attrObserver.observe(root, {
            attributes: true,
            attributeFilter: INLINE_STYLE_ATTRS.concat(
              overridesList.map(({ dataAttr }) => dataAttr)
            ),
            subtree: true
          });
          attrObservers.set(root, attrObserver);
        }
        function stopWatchingForInlineStyles() {
          treeObservers.forEach((o) => o.disconnect());
          attrObservers.forEach((o) => o.disconnect());
          treeObservers.clear();
          attrObservers.clear();
        }
        const inlineStyleCache = /* @__PURE__ */ new WeakMap();
        const svgInversionCache = /* @__PURE__ */ new WeakSet();
        const svgAnalysisConditionCache = /* @__PURE__ */ new WeakMap();
        const themeProps = ["brightness", "contrast", "grayscale", "sepia", "mode"];
        function shouldAnalyzeSVGAsImage(svg) {
          var _a, _b, _c;
          if (svgAnalysisConditionCache.has(svg)) {
            return svgAnalysisConditionCache.get(svg);
          }
          const shouldAnalyze = Boolean(
            svg && (((_a = svg.getAttribute("class")) == null ? void 0 : _a.includes("logo")) || ((_c = (_b = svg.parentElement) == null ? void 0 : _b.getAttribute("class")) == null ? void 0 : _c.includes("logo")))
          );
          svgAnalysisConditionCache.set(svg, shouldAnalyze);
          return shouldAnalyze;
        }
        function getInlineStyleCacheKey(el, theme2) {
          return INLINE_STYLE_ATTRS.map(
            (attr) => "".concat(attr, '="').concat(el.getAttribute(attr), '"')
          ).concat(themeProps.map((prop) => "".concat(prop, '="').concat(theme2[prop], '"'))).join(" ");
        }
        function shouldIgnoreInlineStyle(element, selectors) {
          for (let i = 0, len = selectors.length; i < len; i++) {
            const ingnoredSelector = selectors[i];
            if (element.matches(ingnoredSelector)) {
              return true;
            }
          }
          return false;
        }
        function overrideInlineStyle(element, theme2, ignoreInlineSelectors, ignoreImageSelectors) {
          var _a, _b, _c;
          const cacheKey = getInlineStyleCacheKey(element, theme2);
          if (cacheKey === inlineStyleCache.get(element)) {
            return;
          }
          const unsetProps = new Set(Object.keys(overrides$1));
          function setCustomProp(targetCSSProp, modifierCSSProp, cssVal) {
            const mod = getModifiableCSSDeclaration(
              modifierCSSProp,
              cssVal,
              { style: element.style },
              variablesStore,
              ignoreImageSelectors,
              null
            );
            if (!mod) {
              return;
            }
            function setStaticValue(value2) {
              var _a2;
              const { customProp, dataAttr } = (_a2 = overrides$1[targetCSSProp]) != null ? _a2 : shorthandOverrides[targetCSSProp];
              element.style.setProperty(customProp, value2);
              if (!element.hasAttribute(dataAttr)) {
                element.setAttribute(dataAttr, "");
              }
              unsetProps.delete(targetCSSProp);
            }
            function setVarDeclaration(mod2) {
              let prevDeclarations = [];
              function setProps(declarations) {
                prevDeclarations.forEach(({ property }) => {
                  element.style.removeProperty(property);
                });
                declarations.forEach(({ property, value: value2 }) => {
                  if (!(value2 instanceof Promise)) {
                    element.style.setProperty(property, value2);
                  }
                });
                prevDeclarations = declarations;
              }
              setProps(mod2.declarations);
              mod2.onTypeChange.addListener(setProps);
            }
            function setAsyncValue(promise, sourceValue) {
              promise.then((value2) => {
                if (value2 && targetCSSProp === "background" && value2.startsWith("var(--darkreader-bg--")) {
                  setStaticValue(value2);
                }
                if (value2 && targetCSSProp === "background-image") {
                  if ((element === document.documentElement || element === document.body) && value2 === sourceValue) {
                    value2 = "none";
                  }
                  setStaticValue(value2);
                }
                inlineStyleCache.set(
                  element,
                  getInlineStyleCacheKey(element, theme2)
                );
              });
            }
            const value = typeof mod.value === "function" ? mod.value(theme2) : mod.value;
            if (typeof value === "string") {
              setStaticValue(value);
            } else if (value instanceof Promise) {
              setAsyncValue(value, cssVal);
            } else if (typeof value === "object") {
              setVarDeclaration(value);
            }
          }
          if (ignoreInlineSelectors.length > 0) {
            if (shouldIgnoreInlineStyle(element, ignoreInlineSelectors)) {
              unsetProps.forEach((cssProp) => {
                element.removeAttribute(overrides$1[cssProp].dataAttr);
              });
              return;
            }
          }
          const isSVGElement = element instanceof SVGElement;
          const svg = isSVGElement ? (_a = element.ownerSVGElement) != null ? _a : element instanceof SVGSVGElement ? element : null : null;
          if (isSVGElement && theme2.mode === 1 && svg) {
            if (svgInversionCache.has(svg)) {
              return;
            }
            if (shouldAnalyzeSVGAsImage(svg)) {
              svgInversionCache.add(svg);
              const analyzeSVGAsImage = () => {
                let svgString = svg.outerHTML;
                svgString = svgString.replaceAll(
                  '<style class="darkreader darkreader--sync" media="screen"></style>',
                  ""
                );
                const dataURL = "data:image/svg+xml;base64,".concat(btoa(svgString));
                getImageDetails(dataURL).then((details) => {
                  if (details.isDark && details.isTransparent || details.isLarge && details.isLight && !details.isTransparent) {
                    svg.setAttribute(
                      "data-darkreader-inline-invert",
                      ""
                    );
                  } else {
                    svg.removeAttribute(
                      "data-darkreader-inline-invert"
                    );
                  }
                });
              };
              analyzeSVGAsImage();
              if (!isDOMReady()) {
                addDOMReadyListener(analyzeSVGAsImage);
              }
              return;
            }
          }
          if (element.hasAttribute("bgcolor")) {
            let value = element.getAttribute("bgcolor");
            if (value.match(/^[0-9a-f]{3}$/i) || value.match(/^[0-9a-f]{6}$/i)) {
              value = "#".concat(value);
            }
            setCustomProp("background-color", "background-color", value);
          }
          if ((element === document.documentElement || element === document.body) && element.hasAttribute("background")) {
            const url = getAbsoluteURL(
              location.href,
              (_b = element.getAttribute("background")) != null ? _b : ""
            );
            const value = 'url("'.concat(url, '")');
            setCustomProp("background-image", "background-image", value);
          }
          if (element.hasAttribute("color") && element.rel !== "mask-icon") {
            let value = element.getAttribute("color");
            if (value.match(/^[0-9a-f]{3}$/i) || value.match(/^[0-9a-f]{6}$/i)) {
              value = "#".concat(value);
            }
            setCustomProp("color", "color", value);
          }
          if (isSVGElement) {
            if (element.hasAttribute("fill")) {
              const SMALL_SVG_LIMIT = 32;
              const value = element.getAttribute("fill");
              if (value !== "none") {
                if (!(element instanceof SVGTextElement)) {
                  const handleSVGElement = () => {
                    const { width, height } = element.getBoundingClientRect();
                    const isBg = width > SMALL_SVG_LIMIT || height > SMALL_SVG_LIMIT;
                    setCustomProp(
                      "fill",
                      isBg ? "background-color" : "color",
                      value
                    );
                  };
                  if (isReadyStateComplete()) {
                    handleSVGElement();
                  } else {
                    addReadyStateCompleteListener(handleSVGElement);
                  }
                } else {
                  setCustomProp("fill", "color", value);
                }
              }
            }
            if (element.hasAttribute("stop-color")) {
              setCustomProp(
                "stop-color",
                "background-color",
                element.getAttribute("stop-color")
              );
            }
          }
          if (element.hasAttribute("stroke")) {
            const value = element.getAttribute("stroke");
            setCustomProp(
              "stroke",
              element instanceof SVGLineElement || element instanceof SVGTextElement ? "border-color" : "color",
              value
            );
          }
          element.style && iterateCSSDeclarations(element.style, (property, value) => {
            if (property === "background-image" && value.includes("url")) {
              if (element === document.documentElement || element === document.body) {
                setCustomProp(property, property, value);
              }
              return;
            }
            if (overrides$1.hasOwnProperty(property) || property.startsWith("--") && !normalizedPropList[property]) {
              setCustomProp(property, property, value);
            } else if (property === "background" && value.includes("var(")) {
              setCustomProp("background", "background", value);
            } else {
              const overriddenProp = normalizedPropList[property];
              if (overriddenProp && !element.style.getPropertyValue(overriddenProp) && !element.hasAttribute(overriddenProp)) {
                if (overriddenProp === "background-color" && element.hasAttribute("bgcolor")) {
                  return;
                }
                element.style.setProperty(property, "");
              }
            }
          });
          if (element.style && element instanceof SVGTextElement && element.style.fill) {
            setCustomProp(
              "fill",
              "color",
              element.style.getPropertyValue("fill")
            );
          }
          if ((_c = element.getAttribute("style")) == null ? void 0 : _c.includes("--")) {
            variablesStore.addInlineStyleForMatching(element.style);
          }
          forEach(unsetProps, (cssProp) => {
            element.removeAttribute(overrides$1[cssProp].dataAttr);
          });
          inlineStyleCache.set(element, getInlineStyleCacheKey(element, theme2));
        }
        const metaThemeColorName = "theme-color";
        const metaThemeColorSelector = 'meta[name="'.concat(metaThemeColorName, '"]');
        let srcMetaThemeColor = null;
        let observer = null;
        function changeMetaThemeColor(meta, theme2) {
          srcMetaThemeColor = srcMetaThemeColor || meta.content;
          const color = parseColorWithCache(srcMetaThemeColor);
          if (!color) {
            return;
          }
          meta.content = modifyBackgroundColor(color, theme2);
        }
        function changeMetaThemeColorWhenAvailable(theme2) {
          const meta = document.querySelector(metaThemeColorSelector);
          if (meta) {
            changeMetaThemeColor(meta, theme2);
          } else {
            if (observer) {
              observer.disconnect();
            }
            observer = new MutationObserver((mutations) => {
              loop: for (let i = 0; i < mutations.length; i++) {
                const { addedNodes } = mutations[i];
                for (let j = 0; j < addedNodes.length; j++) {
                  const node = addedNodes[j];
                  if (node instanceof HTMLMetaElement && node.name === metaThemeColorName) {
                    observer.disconnect();
                    observer = null;
                    changeMetaThemeColor(node, theme2);
                    break loop;
                  }
                }
              }
            });
            observer.observe(document.head, { childList: true });
          }
        }
        function restoreMetaThemeColor() {
          if (observer) {
            observer.disconnect();
            observer = null;
          }
          const meta = document.querySelector(metaThemeColorSelector);
          if (meta && srcMetaThemeColor) {
            meta.content = srcMetaThemeColor;
          }
        }
        const cssCommentsRegex = /\/\*[\s\S]*?\*\//g;
        function removeCSSComments(cssText) {
          return cssText.replace(cssCommentsRegex, "");
        }
        const themeCacheKeys = [
          "mode",
          "brightness",
          "contrast",
          "grayscale",
          "sepia",
          "darkSchemeBackgroundColor",
          "darkSchemeTextColor",
          "lightSchemeBackgroundColor",
          "lightSchemeTextColor"
        ];
        function getThemeKey(theme2) {
          let resultKey = "";
          themeCacheKeys.forEach((key) => {
            resultKey += "".concat(key, ":").concat(theme2[key], ";");
          });
          return resultKey;
        }
        const asyncQueue = createAsyncTasksQueue();
        function createStyleSheetModifier() {
          let renderId = 0;
          function getStyleRuleHash(rule) {
            let cssText = rule.cssText;
            if (isMediaRule(rule.parentRule)) {
              cssText = "".concat(rule.parentRule.media.mediaText, " { ").concat(cssText, " }");
            }
            return getHashCode(cssText);
          }
          const rulesTextCache = /* @__PURE__ */ new Set();
          const rulesModCache = /* @__PURE__ */ new Map();
          const varTypeChangeCleaners = /* @__PURE__ */ new Set();
          let prevFilterKey = null;
          let hasNonLoadedLink = false;
          let wasRebuilt = false;
          function shouldRebuildStyle() {
            return hasNonLoadedLink && !wasRebuilt;
          }
          function modifySheet(options) {
            const rules = options.sourceCSSRules;
            const {
              theme: theme2,
              ignoreImageAnalysis,
              force,
              prepareSheet,
              isAsyncCancelled
            } = options;
            let rulesChanged = rulesModCache.size === 0;
            const notFoundCacheKeys = new Set(rulesModCache.keys());
            const themeKey = getThemeKey(theme2);
            const themeChanged = themeKey !== prevFilterKey;
            if (hasNonLoadedLink) {
              wasRebuilt = true;
            }
            const modRules = [];
            iterateCSSRules(
              rules,
              (rule) => {
                const hash = getStyleRuleHash(rule);
                let textDiffersFromPrev = false;
                notFoundCacheKeys.delete(hash);
                if (!rulesTextCache.has(hash)) {
                  rulesTextCache.add(hash);
                  textDiffersFromPrev = true;
                }
                if (textDiffersFromPrev) {
                  rulesChanged = true;
                } else {
                  modRules.push(rulesModCache.get(hash));
                  return;
                }
                if (rule.style.all === "revert") {
                  return;
                }
                const modDecs = [];
                rule.style && iterateCSSDeclarations(
                  rule.style,
                  (property, value) => {
                    const mod = getModifiableCSSDeclaration(
                      property,
                      value,
                      rule,
                      variablesStore,
                      ignoreImageAnalysis,
                      isAsyncCancelled
                    );
                    if (mod) {
                      modDecs.push(mod);
                    }
                  }
                );
                let modRule = null;
                if (modDecs.length > 0) {
                  const parentRule = rule.parentRule;
                  modRule = {
                    selector: rule.selectorText,
                    declarations: modDecs,
                    parentRule
                  };
                  modRules.push(modRule);
                }
                rulesModCache.set(hash, modRule);
              },
              () => {
                hasNonLoadedLink = true;
              }
            );
            notFoundCacheKeys.forEach((key) => {
              rulesTextCache.delete(key);
              rulesModCache.delete(key);
            });
            prevFilterKey = themeKey;
            if (!force && !rulesChanged && !themeChanged) {
              return;
            }
            renderId++;
            function setRule(target, index, rule) {
              const { selector, declarations } = rule;
              let selectorText = selector;
              const emptyIsWhereSelector = isChromium && selector.startsWith(":is(") && (selector.includes(":is()") || selector.includes(":where()") || selector.includes(":where(") && selector.includes(":-moz"));
              const viewTransitionSelector = selector.includes("::view-transition-");
              if (emptyIsWhereSelector || viewTransitionSelector) {
                selectorText = ".darkreader-unsupported-selector";
              }
              let ruleText = "".concat(selectorText, " {");
              for (const dec of declarations) {
                const { property, value, important } = dec;
                if (value) {
                  ruleText += " ".concat(property, ": ").concat(value).concat(important ? " !important" : "", ";");
                }
              }
              ruleText += " }";
              target.insertRule(ruleText, index);
            }
            const asyncDeclarations = /* @__PURE__ */ new Map();
            const varDeclarations = /* @__PURE__ */ new Map();
            let asyncDeclarationCounter = 0;
            let varDeclarationCounter = 0;
            const rootReadyGroup = { rule: null, rules: [], isGroup: true };
            const groupRefs = /* @__PURE__ */ new WeakMap();
            function getGroup(rule) {
              if (rule == null) {
                return rootReadyGroup;
              }
              if (groupRefs.has(rule)) {
                return groupRefs.get(rule);
              }
              const group = { rule, rules: [], isGroup: true };
              groupRefs.set(rule, group);
              const parentGroup = getGroup(rule.parentRule);
              parentGroup.rules.push(group);
              return group;
            }
            varTypeChangeCleaners.forEach((clear) => clear());
            varTypeChangeCleaners.clear();
            modRules.filter((r) => r).forEach(({ selector, declarations, parentRule }) => {
              const group = getGroup(parentRule);
              const readyStyleRule = {
                selector,
                declarations: [],
                isGroup: false
              };
              const readyDeclarations = readyStyleRule.declarations;
              group.rules.push(readyStyleRule);
              function handleAsyncDeclaration(property, modified, important, sourceValue) {
                const asyncKey = ++asyncDeclarationCounter;
                const asyncDeclaration = {
                  property,
                  value: null,
                  important,
                  asyncKey,
                  sourceValue
                };
                readyDeclarations.push(asyncDeclaration);
                const currentRenderId = renderId;
                modified.then((asyncValue) => {
                  if (!asyncValue || isAsyncCancelled() || currentRenderId !== renderId) {
                    return;
                  }
                  asyncDeclaration.value = asyncValue;
                  asyncQueue.add(() => {
                    if (isAsyncCancelled() || currentRenderId !== renderId) {
                      return;
                    }
                    rebuildAsyncRule(asyncKey);
                  });
                });
              }
              function handleVarDeclarations(property, modified, important, sourceValue) {
                const { declarations: varDecs, onTypeChange } = modified;
                const varKey = ++varDeclarationCounter;
                const currentRenderId = renderId;
                const initialIndex = readyDeclarations.length;
                let oldDecs = [];
                if (varDecs.length === 0) {
                  const tempDec = {
                    property,
                    value: sourceValue,
                    important,
                    sourceValue,
                    varKey
                  };
                  readyDeclarations.push(tempDec);
                  oldDecs = [tempDec];
                }
                varDecs.forEach((mod) => {
                  if (mod.value instanceof Promise) {
                    handleAsyncDeclaration(
                      mod.property,
                      mod.value,
                      important,
                      sourceValue
                    );
                  } else {
                    const readyDec = {
                      property: mod.property,
                      value: mod.value,
                      important,
                      sourceValue,
                      varKey
                    };
                    readyDeclarations.push(readyDec);
                    oldDecs.push(readyDec);
                  }
                });
                onTypeChange.addListener((newDecs) => {
                  if (isAsyncCancelled() || currentRenderId !== renderId) {
                    return;
                  }
                  const readyVarDecs = newDecs.map((mod) => {
                    return {
                      property: mod.property,
                      value: mod.value,
                      important,
                      sourceValue,
                      varKey
                    };
                  });
                  const index = readyDeclarations.indexOf(
                    oldDecs[0],
                    initialIndex
                  );
                  readyDeclarations.splice(
                    index,
                    oldDecs.length,
                    ...readyVarDecs
                  );
                  oldDecs = readyVarDecs;
                  rebuildVarRule(varKey);
                });
                varTypeChangeCleaners.add(
                  () => onTypeChange.removeListeners()
                );
              }
              declarations.forEach(
                ({ property, value, important, sourceValue }) => {
                  if (typeof value === "function") {
                    const modified = value(theme2);
                    if (modified instanceof Promise) {
                      handleAsyncDeclaration(
                        property,
                        modified,
                        important,
                        sourceValue
                      );
                    } else if (property.startsWith("--")) {
                      handleVarDeclarations(
                        property,
                        modified,
                        important,
                        sourceValue
                      );
                    } else {
                      readyDeclarations.push({
                        property,
                        value: modified,
                        important,
                        sourceValue
                      });
                    }
                  } else {
                    readyDeclarations.push({
                      property,
                      value,
                      important,
                      sourceValue
                    });
                  }
                }
              );
            });
            const sheet = prepareSheet();
            function buildStyleSheet() {
              function createTarget(group, parent) {
                const { rule } = group;
                if (isMediaRule(rule)) {
                  const { media } = rule;
                  const index = parent.cssRules.length;
                  parent.insertRule(
                    "@media ".concat(media.mediaText, " {}"),
                    index
                  );
                  return parent.cssRules[index];
                }
                if (isLayerRule(rule)) {
                  const { name } = rule;
                  const index = parent.cssRules.length;
                  parent.insertRule("@layer ".concat(name, " {}"), index);
                  return parent.cssRules[index];
                }
                return parent;
              }
              function iterateReadyRules(group, target, styleIterator) {
                group.rules.forEach((r) => {
                  if (r.isGroup) {
                    const t = createTarget(r, target);
                    iterateReadyRules(r, t, styleIterator);
                  } else {
                    styleIterator(r, target);
                  }
                });
              }
              iterateReadyRules(rootReadyGroup, sheet, (rule, target) => {
                const index = target.cssRules.length;
                rule.declarations.forEach(({ asyncKey, varKey }) => {
                  if (asyncKey != null) {
                    asyncDeclarations.set(asyncKey, {
                      rule,
                      target,
                      index
                    });
                  }
                  if (varKey != null) {
                    varDeclarations.set(varKey, { rule, target, index });
                  }
                });
                setRule(target, index, rule);
              });
            }
            function rebuildAsyncRule(key) {
              const { rule, target, index } = asyncDeclarations.get(key);
              target.deleteRule(index);
              setRule(target, index, rule);
              asyncDeclarations.delete(key);
            }
            function rebuildVarRule(key) {
              const { rule, target, index } = varDeclarations.get(key);
              target.deleteRule(index);
              setRule(target, index, rule);
            }
            buildStyleSheet();
          }
          return { modifySheet, shouldRebuildStyle };
        }
        let canUseSheetProxy$1 = false;
        document.addEventListener(
          "__darkreader__inlineScriptsAllowed",
          () => canUseSheetProxy$1 = true,
          { once: true }
        );
        function createSheetWatcher(element, safeGetSheetRules, callback, isCancelled) {
          let rafSheetWatcher = null;
          function watchForSheetChanges() {
            watchForSheetChangesUsingProxy();
            if (!(canUseSheetProxy$1 && element.sheet)) {
              rafSheetWatcher = createRAFSheetWatcher(
                element,
                safeGetSheetRules,
                callback,
                isCancelled
              );
              rafSheetWatcher.start();
            }
          }
          let areSheetChangesPending = false;
          function onSheetChange() {
            canUseSheetProxy$1 = true;
            rafSheetWatcher == null ? void 0 : rafSheetWatcher.stop();
            if (areSheetChangesPending) {
              return;
            }
            function handleSheetChanges() {
              areSheetChangesPending = false;
              if (isCancelled()) {
                return;
              }
              callback();
            }
            areSheetChangesPending = true;
            queueMicrotask(handleSheetChanges);
          }
          function watchForSheetChangesUsingProxy() {
            element.addEventListener(
              "__darkreader__updateSheet",
              onSheetChange
            );
          }
          function stopWatchingForSheetChangesUsingProxy() {
            element.removeEventListener(
              "__darkreader__updateSheet",
              onSheetChange
            );
          }
          function stopWatchingForSheetChanges() {
            stopWatchingForSheetChangesUsingProxy();
            rafSheetWatcher == null ? void 0 : rafSheetWatcher.stop();
          }
          return {
            start: watchForSheetChanges,
            stop: stopWatchingForSheetChanges
          };
        }
        function createRAFSheetWatcher(element, safeGetSheetRules, callback, isCancelled) {
          let rulesChangeKey = null;
          let rulesCheckFrameId = null;
          function getRulesChangeKey() {
            const rules = safeGetSheetRules();
            return rules ? rules.length : null;
          }
          function didRulesKeyChange() {
            return getRulesChangeKey() !== rulesChangeKey;
          }
          function watchForSheetChangesUsingRAF() {
            rulesChangeKey = getRulesChangeKey();
            stopWatchingForSheetChangesUsingRAF();
            const checkForUpdate = () => {
              const cancelled = isCancelled();
              if (!cancelled && didRulesKeyChange()) {
                rulesChangeKey = getRulesChangeKey();
                callback();
              }
              if (cancelled || canUseSheetProxy$1 && element.sheet) {
                stopWatchingForSheetChangesUsingRAF();
                return;
              }
              rulesCheckFrameId = requestAnimationFrame(checkForUpdate);
            };
            checkForUpdate();
          }
          function stopWatchingForSheetChangesUsingRAF() {
            rulesCheckFrameId && cancelAnimationFrame(rulesCheckFrameId);
          }
          return {
            start: watchForSheetChangesUsingRAF,
            stop: stopWatchingForSheetChangesUsingRAF
          };
        }
        const STYLE_SELECTOR = 'style, link[rel*="stylesheet" i]:not([disabled])';
        function isFontsGoogleApiStyle(element) {
          if (!element.href) {
            return false;
          }
          try {
            const elementURL = new URL(element.href);
            return elementURL.hostname === "fonts.googleapis.com";
          } catch (err) {
            logInfo("Couldn't construct ".concat(element.href, " as URL"));
            return false;
          }
        }
        const hostsBreakingOnSVGStyleOverride = ["www.onet.pl"];
        function shouldManageStyle(element) {
          return (element instanceof HTMLStyleElement || element instanceof SVGStyleElement && !hostsBreakingOnSVGStyleOverride.includes(
            location.hostname
          ) || element instanceof HTMLLinkElement && Boolean(element.rel) && element.rel.toLowerCase().includes("stylesheet") && Boolean(element.href) && !element.disabled && (isFirefox ? !element.href.startsWith("moz-extension://") : true) && !isFontsGoogleApiStyle(element)) && !element.classList.contains("darkreader") && element.media.toLowerCase() !== "print" && !element.classList.contains("stylus");
        }
        function getManageableStyles(node, results = [], deep = true) {
          if (shouldManageStyle(node)) {
            results.push(node);
          } else if (node instanceof Element || isShadowDomSupported && node instanceof ShadowRoot || node === document) {
            forEach(
              node.querySelectorAll(STYLE_SELECTOR),
              (style) => getManageableStyles(style, results, false)
            );
            if (deep) {
              iterateShadowHosts(
                node,
                (host) => getManageableStyles(host.shadowRoot, results, false)
              );
            }
          }
          return results;
        }
        const syncStyleSet = /* @__PURE__ */ new WeakSet();
        const corsStyleSet = /* @__PURE__ */ new WeakSet();
        let loadingLinkCounter = 0;
        const rejectorsForLoadingLinks = /* @__PURE__ */ new Map();
        function cleanLoadingLinks() {
          rejectorsForLoadingLinks.clear();
        }
        function manageStyle(element, { update, loadingStart, loadingEnd }) {
          const prevStyles = [];
          let next = element;
          while ((next = next.nextElementSibling) && next.matches(".darkreader")) {
            prevStyles.push(next);
          }
          let corsCopy = prevStyles.find(
            (el) => el.matches(".darkreader--cors") && !corsStyleSet.has(el)
          ) || null;
          let syncStyle = prevStyles.find(
            (el) => el.matches(".darkreader--sync") && !syncStyleSet.has(el)
          ) || null;
          let corsCopyPositionWatcher = null;
          let syncStylePositionWatcher = null;
          let cancelAsyncOperations = false;
          let isOverrideEmpty = true;
          const isAsyncCancelled = () => cancelAsyncOperations;
          const sheetModifier = createStyleSheetModifier();
          const observer2 = new MutationObserver((mutations) => {
            var _a;
            if (mutations.some((m) => m.type === "characterData") && containsCSSImport()) {
              const cssText = ((_a = element.textContent) != null ? _a : "").trim();
              createOrUpdateCORSCopy(cssText, location.href).then(update);
            } else {
              update();
            }
          });
          const observerOptions = {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
          };
          function containsCSSImport() {
            var _a;
            if (!(element instanceof HTMLStyleElement)) {
              return false;
            }
            const cssText = removeCSSComments((_a = element.textContent) != null ? _a : "").trim();
            return cssText.match(cssImportRegex);
          }
          function hasImports(cssRules, checkCrossOrigin) {
            let result = false;
            if (cssRules) {
              let rule;
              cssRulesLoop: for (let i = 0, len = cssRules.length; i < len; i++) {
                rule = cssRules[i];
                if (rule.href) {
                  if (checkCrossOrigin) {
                    if (!rule.href.startsWith(
                      "https://fonts.googleapis.com/"
                    ) && rule.href.startsWith("http") && !rule.href.startsWith(location.origin)) {
                      result = true;
                      break cssRulesLoop;
                    }
                  } else {
                    result = true;
                    break cssRulesLoop;
                  }
                }
              }
            }
            return result;
          }
          function getRulesSync() {
            if (corsCopy) {
              return corsCopy.sheet.cssRules;
            }
            if (containsCSSImport()) {
              return null;
            }
            const cssRules = safeGetSheetRules();
            if (element instanceof HTMLLinkElement && !isRelativeHrefOnAbsolutePath(element.href) && hasImports(cssRules, false)) {
              return null;
            }
            if (hasImports(cssRules, true)) {
              return null;
            }
            return cssRules;
          }
          function insertStyle() {
            if (corsCopy) {
              if (element.nextSibling !== corsCopy) {
                element.parentNode.insertBefore(
                  corsCopy,
                  element.nextSibling
                );
              }
              if (corsCopy.nextSibling !== syncStyle) {
                element.parentNode.insertBefore(
                  syncStyle,
                  corsCopy.nextSibling
                );
              }
            } else if (element.nextSibling !== syncStyle) {
              element.parentNode.insertBefore(syncStyle, element.nextSibling);
            }
          }
          function createSyncStyle() {
            syncStyle = element instanceof SVGStyleElement ? document.createElementNS(
              "http://www.w3.org/2000/svg",
              "style"
            ) : document.createElement("style");
            syncStyle.classList.add("darkreader");
            syncStyle.classList.add("darkreader--sync");
            syncStyle.media = "screen";
            if (element.title) {
              syncStyle.title = element.title;
            }
            syncStyleSet.add(syncStyle);
          }
          let isLoadingRules = false;
          let wasLoadingError = false;
          const loadingLinkId = ++loadingLinkCounter;
          async function getRulesAsync() {
            let cssText;
            let cssBasePath;
            if (element instanceof HTMLLinkElement) {
              let [cssRules, accessError] = getRulesOrError();
              if (isSafari && !element.sheet || !isSafari && !cssRules && !accessError || isStillLoadingError(accessError)) {
                try {
                  logInfo(
                    "Linkelement ".concat(loadingLinkId, " is not loaded yet and thus will be await for"),
                    element
                  );
                  await linkLoading(element, loadingLinkId);
                } catch (err) {
                  wasLoadingError = true;
                }
                if (cancelAsyncOperations) {
                  return null;
                }
                [cssRules, accessError] = getRulesOrError();
              }
              if (cssRules) {
                if (!hasImports(cssRules, false)) {
                  return cssRules;
                }
              }
              cssText = await loadText(element.href);
              cssBasePath = getCSSBaseBath(element.href);
              if (cancelAsyncOperations) {
                return null;
              }
            } else if (containsCSSImport()) {
              cssText = element.textContent.trim();
              cssBasePath = getCSSBaseBath(location.href);
            } else {
              return null;
            }
            await createOrUpdateCORSCopy(cssText, cssBasePath);
            if (corsCopy) {
              return corsCopy.sheet.cssRules;
            }
            return null;
          }
          async function createOrUpdateCORSCopy(cssText, cssBasePath) {
            var _a, _b;
            if (cssText) {
              try {
                const fullCSSText = await replaceCSSImports(
                  cssText,
                  cssBasePath
                );
                if (corsCopy) {
                  if (((_b = (_a = corsCopy.textContent) == null ? void 0 : _a.length) != null ? _b : 0) < fullCSSText.length) {
                    corsCopy.textContent = fullCSSText;
                  }
                } else {
                  corsCopy = createCORSCopy(element, fullCSSText);
                }
              } catch (err) {
              }
              if (corsCopy) {
                corsCopyPositionWatcher = watchForNodePosition(
                  corsCopy,
                  "prev-sibling"
                );
              }
            }
          }
          function details(options) {
            const rules = getRulesSync();
            if (!rules) {
              if (options.secondRound) {
                return null;
              }
              if (isLoadingRules || wasLoadingError) {
                return null;
              }
              isLoadingRules = true;
              loadingStart();
              getRulesAsync().then((results) => {
                isLoadingRules = false;
                loadingEnd();
                if (results) {
                  update();
                }
              }).catch((err) => {
                isLoadingRules = false;
                loadingEnd();
              });
              return null;
            }
            return { rules };
          }
          let forceRenderStyle = false;
          function render(theme2, ignoreImageAnalysis) {
            const rules = getRulesSync();
            if (!rules) {
              return;
            }
            cancelAsyncOperations = false;
            function removeCSSRulesFromSheet(sheet) {
              if (!sheet) {
                return;
              }
              for (let i = sheet.cssRules.length - 1; i >= 0; i--) {
                sheet.deleteRule(i);
              }
            }
            function prepareOverridesSheet() {
              if (!syncStyle) {
                createSyncStyle();
              }
              syncStylePositionWatcher && syncStylePositionWatcher.stop();
              insertStyle();
              if (syncStyle.sheet == null) {
                syncStyle.textContent = "";
              }
              const sheet = syncStyle.sheet;
              removeCSSRulesFromSheet(sheet);
              if (syncStylePositionWatcher) {
                syncStylePositionWatcher.run();
              } else {
                syncStylePositionWatcher = watchForNodePosition(
                  syncStyle,
                  "prev-sibling",
                  () => {
                    forceRenderStyle = true;
                    buildOverrides();
                  }
                );
              }
              return syncStyle.sheet;
            }
            function buildOverrides() {
              const force = forceRenderStyle;
              forceRenderStyle = false;
              sheetModifier.modifySheet({
                prepareSheet: prepareOverridesSheet,
                sourceCSSRules: rules,
                theme: theme2,
                ignoreImageAnalysis,
                force,
                isAsyncCancelled
              });
              isOverrideEmpty = syncStyle.sheet.cssRules.length === 0;
              if (sheetModifier.shouldRebuildStyle()) {
                addReadyStateCompleteListener(() => update());
              }
            }
            buildOverrides();
          }
          function getRulesOrError() {
            try {
              if (element.sheet == null) {
                return [null, null];
              }
              return [element.sheet.cssRules, null];
            } catch (err) {
              return [null, err];
            }
          }
          function isStillLoadingError(error) {
            return error && error.message && error.message.includes("loading");
          }
          function safeGetSheetRules() {
            const [cssRules, err] = getRulesOrError();
            if (err) {
              return null;
            }
            return cssRules;
          }
          const sheetChangeWatcher = createSheetWatcher(
            element,
            safeGetSheetRules,
            update,
            isAsyncCancelled
          );
          function pause() {
            observer2.disconnect();
            cancelAsyncOperations = true;
            corsCopyPositionWatcher && corsCopyPositionWatcher.stop();
            syncStylePositionWatcher && syncStylePositionWatcher.stop();
            sheetChangeWatcher.stop();
          }
          function destroy() {
            pause();
            removeNode(corsCopy);
            removeNode(syncStyle);
            loadingEnd();
            if (rejectorsForLoadingLinks.has(loadingLinkId)) {
              const reject = rejectorsForLoadingLinks.get(loadingLinkId);
              rejectorsForLoadingLinks.delete(loadingLinkId);
              reject && reject();
            }
          }
          function watch() {
            observer2.observe(element, observerOptions);
            if (element instanceof HTMLStyleElement) {
              sheetChangeWatcher.start();
            }
          }
          const maxMoveCount = 10;
          let moveCount = 0;
          function restore() {
            if (!syncStyle) {
              return;
            }
            moveCount++;
            if (moveCount > maxMoveCount) {
              return;
            }
            insertStyle();
            corsCopyPositionWatcher && corsCopyPositionWatcher.skip();
            syncStylePositionWatcher && syncStylePositionWatcher.skip();
            if (!isOverrideEmpty) {
              forceRenderStyle = true;
              update();
            }
          }
          return {
            details,
            render,
            pause,
            destroy,
            watch,
            restore
          };
        }
        async function linkLoading(link, loadingId) {
          return new Promise((resolve, reject) => {
            const cleanUp = () => {
              link.removeEventListener("load", onLoad);
              link.removeEventListener("error", onError);
              rejectorsForLoadingLinks.delete(loadingId);
            };
            const onLoad = () => {
              cleanUp();
              resolve();
            };
            const onError = () => {
              cleanUp();
              reject(
                "Linkelement ".concat(loadingId, " couldn't be loaded. ").concat(link.href)
              );
            };
            rejectorsForLoadingLinks.set(loadingId, () => {
              cleanUp();
              reject();
            });
            link.addEventListener("load", onLoad, { passive: true });
            link.addEventListener("error", onError, { passive: true });
            if (!link.href) {
              onError();
            }
          });
        }
        function getCSSImportURL(importDeclaration) {
          return getCSSURLValue(
            importDeclaration.substring(7).trim().replace(/;$/, "").replace(/screen$/, "")
          );
        }
        async function loadText(url) {
          if (url.startsWith("data:")) {
            return await (await fetch(url)).text();
          }
          const parsedURL = new URL(url);
          if (parsedURL.origin === location.origin) {
            return await loadAsText(url, "text/css", location.origin);
          }
          return await bgFetch({
            url,
            responseType: "text",
            mimeType: "text/css",
            origin: location.origin
          });
        }
        async function replaceCSSImports(cssText, basePath, cache = /* @__PURE__ */ new Map()) {
          cssText = removeCSSComments(cssText);
          cssText = replaceCSSFontFace(cssText);
          cssText = replaceCSSRelativeURLsWithAbsolute(cssText, basePath);
          const importMatches = getMatches(cssImportRegex, cssText);
          for (const match of importMatches) {
            const importURL = getCSSImportURL(match);
            const absoluteURL = getAbsoluteURL(basePath, importURL);
            let importedCSS;
            if (cache.has(absoluteURL)) {
              importedCSS = cache.get(absoluteURL);
            } else {
              try {
                importedCSS = await loadText(absoluteURL);
                cache.set(absoluteURL, importedCSS);
                importedCSS = await replaceCSSImports(
                  importedCSS,
                  getCSSBaseBath(absoluteURL),
                  cache
                );
              } catch (err) {
                importedCSS = "";
              }
            }
            cssText = cssText.split(match).join(importedCSS);
          }
          cssText = cssText.trim();
          return cssText;
        }
        function createCORSCopy(srcElement, cssText) {
          if (!cssText) {
            return null;
          }
          const cors = document.createElement("style");
          cors.classList.add("darkreader");
          cors.classList.add("darkreader--cors");
          cors.media = "screen";
          cors.textContent = cssText;
          srcElement.parentNode.insertBefore(cors, srcElement.nextSibling);
          cors.sheet.disabled = true;
          corsStyleSet.add(cors);
          return cors;
        }
        const definedCustomElements = /* @__PURE__ */ new Set();
        const undefinedGroups = /* @__PURE__ */ new Map();
        let elementsDefinitionCallback;
        function isCustomElement(element) {
          if (element.tagName.includes("-") || element.getAttribute("is")) {
            return true;
          }
          return false;
        }
        function recordUndefinedElement(element) {
          let tag = element.tagName.toLowerCase();
          if (!tag.includes("-")) {
            const extendedTag = element.getAttribute("is");
            if (extendedTag) {
              tag = extendedTag;
            } else {
              return;
            }
          }
          if (!undefinedGroups.has(tag)) {
            undefinedGroups.set(tag, /* @__PURE__ */ new Set());
            customElementsWhenDefined(tag).then(() => {
              if (elementsDefinitionCallback) {
                const elements = undefinedGroups.get(tag);
                undefinedGroups.delete(tag);
                elementsDefinitionCallback(Array.from(elements));
              }
            });
          }
          undefinedGroups.get(tag).add(element);
        }
        function collectUndefinedElements(root) {
          if (!isDefinedSelectorSupported) {
            return;
          }
          forEach(
            root.querySelectorAll(":not(:defined)"),
            recordUndefinedElement
          );
        }
        let canOptimizeUsingProxy = false;
        document.addEventListener(
          "__darkreader__inlineScriptsAllowed",
          () => {
            canOptimizeUsingProxy = true;
          },
          { once: true, passive: true }
        );
        const resolvers = /* @__PURE__ */ new Map();
        function handleIsDefined(e) {
          canOptimizeUsingProxy = true;
          const tag = e.detail.tag;
          definedCustomElements.add(tag);
          if (resolvers.has(tag)) {
            const r = resolvers.get(tag);
            resolvers.delete(tag);
            r.forEach((r2) => r2());
          }
        }
        async function customElementsWhenDefined(tag) {
          if (definedCustomElements.has(tag)) {
            return;
          }
          return new Promise((resolve) => {
            if (window.customElements && typeof customElements.whenDefined === "function") {
              customElements.whenDefined(tag).then(() => resolve());
            } else if (canOptimizeUsingProxy) {
              if (resolvers.has(tag)) {
                resolvers.get(tag).push(resolve);
              } else {
                resolvers.set(tag, [resolve]);
              }
              document.dispatchEvent(
                new CustomEvent("__darkreader__addUndefinedResolver", {
                  detail: { tag }
                })
              );
            } else {
              const checkIfDefined = () => {
                const elements = undefinedGroups.get(tag);
                if (elements && elements.size > 0) {
                  if (elements.values().next().value.matches(":defined")) {
                    resolve();
                  } else {
                    requestAnimationFrame(checkIfDefined);
                  }
                }
              };
              requestAnimationFrame(checkIfDefined);
            }
          });
        }
        function watchWhenCustomElementsDefined(callback) {
          elementsDefinitionCallback = callback;
        }
        function unsubscribeFromDefineCustomElements() {
          elementsDefinitionCallback = null;
          undefinedGroups.clear();
          document.removeEventListener(
            "__darkreader__isDefined",
            handleIsDefined
          );
        }
        const observers = [];
        let observedRoots;
        function watchForStylePositions(currentStyles, update, shadowRootDiscovered) {
          stopWatchingForStylePositions();
          const prevStylesByRoot = /* @__PURE__ */ new WeakMap();
          const getPrevStyles = (root) => {
            if (!prevStylesByRoot.has(root)) {
              prevStylesByRoot.set(root, /* @__PURE__ */ new Set());
            }
            return prevStylesByRoot.get(root);
          };
          currentStyles.forEach((node) => {
            let root = node;
            while (root = root.parentNode) {
              if (root === document || root.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                const prevStyles = getPrevStyles(root);
                prevStyles.add(node);
                break;
              }
            }
          });
          const prevStyleSiblings = /* @__PURE__ */ new WeakMap();
          const nextStyleSiblings = /* @__PURE__ */ new WeakMap();
          function saveStylePosition(style) {
            prevStyleSiblings.set(style, style.previousElementSibling);
            nextStyleSiblings.set(style, style.nextElementSibling);
          }
          function forgetStylePosition(style) {
            prevStyleSiblings.delete(style);
            nextStyleSiblings.delete(style);
          }
          function didStylePositionChange(style) {
            return style.previousElementSibling !== prevStyleSiblings.get(style) || style.nextElementSibling !== nextStyleSiblings.get(style);
          }
          currentStyles.forEach(saveStylePosition);
          function handleStyleOperations(root, operations) {
            const { createdStyles, removedStyles, movedStyles } = operations;
            createdStyles.forEach((s) => saveStylePosition(s));
            movedStyles.forEach((s) => saveStylePosition(s));
            removedStyles.forEach((s) => forgetStylePosition(s));
            const prevStyles = getPrevStyles(root);
            createdStyles.forEach((s) => prevStyles.add(s));
            removedStyles.forEach((s) => prevStyles.delete(s));
            if (createdStyles.size + removedStyles.size + movedStyles.size > 0) {
              update({
                created: Array.from(createdStyles),
                removed: Array.from(removedStyles),
                moved: Array.from(movedStyles),
                updated: []
              });
            }
          }
          function handleMinorTreeMutations(root, { additions, moves, deletions }) {
            const createdStyles = /* @__PURE__ */ new Set();
            const removedStyles = /* @__PURE__ */ new Set();
            const movedStyles = /* @__PURE__ */ new Set();
            additions.forEach(
              (node) => getManageableStyles(node).forEach(
                (style) => createdStyles.add(style)
              )
            );
            deletions.forEach(
              (node) => getManageableStyles(node).forEach(
                (style) => removedStyles.add(style)
              )
            );
            moves.forEach(
              (node) => getManageableStyles(node).forEach(
                (style) => movedStyles.add(style)
              )
            );
            handleStyleOperations(root, {
              createdStyles,
              removedStyles,
              movedStyles
            });
            additions.forEach((n) => {
              deepObserve(n);
              collectUndefinedElements(n);
            });
            additions.forEach(
              (node) => isCustomElement(node) && recordUndefinedElement(node)
            );
          }
          function handleHugeTreeMutations(root) {
            const styles = new Set(getManageableStyles(root));
            const createdStyles = /* @__PURE__ */ new Set();
            const removedStyles = /* @__PURE__ */ new Set();
            const movedStyles = /* @__PURE__ */ new Set();
            const prevStyles = getPrevStyles(root);
            styles.forEach((s) => {
              if (!prevStyles.has(s)) {
                createdStyles.add(s);
              }
            });
            prevStyles.forEach((s) => {
              if (!styles.has(s)) {
                removedStyles.add(s);
              }
            });
            styles.forEach((s) => {
              if (!createdStyles.has(s) && !removedStyles.has(s) && didStylePositionChange(s)) {
                movedStyles.add(s);
              }
            });
            handleStyleOperations(root, {
              createdStyles,
              removedStyles,
              movedStyles
            });
            deepObserve(root);
            collectUndefinedElements(root);
          }
          function handleAttributeMutations(mutations) {
            const updatedStyles = /* @__PURE__ */ new Set();
            const removedStyles = /* @__PURE__ */ new Set();
            mutations.forEach((m) => {
              const { target } = m;
              if (target.isConnected) {
                if (shouldManageStyle(target)) {
                  updatedStyles.add(target);
                } else if (target instanceof HTMLLinkElement && target.disabled) {
                  removedStyles.add(target);
                }
              }
            });
            if (updatedStyles.size + removedStyles.size > 0) {
              update({
                updated: Array.from(updatedStyles),
                created: [],
                removed: Array.from(removedStyles),
                moved: []
              });
            }
          }
          function observe(root) {
            if (observedRoots.has(root)) {
              return;
            }
            const treeObserver = createOptimizedTreeObserver(root, {
              onMinorMutations: handleMinorTreeMutations,
              onHugeMutations: handleHugeTreeMutations
            });
            const attrObserver = new MutationObserver(handleAttributeMutations);
            attrObserver.observe(root, {
              attributeFilter: ["rel", "disabled", "media", "href"],
              subtree: true
            });
            observers.push(treeObserver, attrObserver);
            observedRoots.add(root);
          }
          function subscribeForShadowRootChanges(node) {
            const { shadowRoot } = node;
            if (shadowRoot == null || observedRoots.has(shadowRoot)) {
              return;
            }
            observe(shadowRoot);
            shadowRootDiscovered(shadowRoot);
          }
          function deepObserve(node) {
            iterateShadowHosts(node, subscribeForShadowRootChanges);
          }
          observe(document);
          deepObserve(document.documentElement);
          watchWhenCustomElementsDefined((hosts) => {
            const newStyles = [];
            hosts.forEach(
              (host) => push(newStyles, getManageableStyles(host.shadowRoot))
            );
            update({ created: newStyles, updated: [], removed: [], moved: [] });
            hosts.forEach((host) => {
              const { shadowRoot } = host;
              if (shadowRoot == null) {
                return;
              }
              subscribeForShadowRootChanges(host);
              deepObserve(shadowRoot);
              collectUndefinedElements(shadowRoot);
            });
          });
          document.addEventListener("__darkreader__isDefined", handleIsDefined);
          collectUndefinedElements(document);
        }
        function resetObservers() {
          observers.forEach((o) => o.disconnect());
          observers.splice(0, observers.length);
          observedRoots = /* @__PURE__ */ new WeakSet();
        }
        function stopWatchingForStylePositions() {
          resetObservers();
          unsubscribeFromDefineCustomElements();
        }
        function watchForStyleChanges(currentStyles, update, shadowRootDiscovered) {
          watchForStylePositions(currentStyles, update, shadowRootDiscovered);
        }
        function stopWatchingForStyleChanges() {
          stopWatchingForStylePositions();
        }
        let canUseSheetProxy = false;
        document.addEventListener(
          "__darkreader__inlineScriptsAllowed",
          () => canUseSheetProxy = true,
          { once: true }
        );
        const overrides = /* @__PURE__ */ new WeakSet();
        const overridesBySource = /* @__PURE__ */ new WeakMap();
        function canHaveAdoptedStyleSheets(node) {
          return Array.isArray(node.adoptedStyleSheets);
        }
        function createAdoptedStyleSheetOverride(node) {
          let cancelAsyncOperations = false;
          function iterateSourceSheets(iterator) {
            node.adoptedStyleSheets.forEach((sheet) => {
              if (!overrides.has(sheet)) {
                iterator(sheet);
              }
            });
          }
          function injectSheet(sheet, override) {
            const newSheets = [...node.adoptedStyleSheets];
            const sheetIndex = newSheets.indexOf(sheet);
            const overrideIndex = newSheets.indexOf(override);
            if (overrideIndex >= 0) {
              newSheets.splice(overrideIndex, 1);
            }
            newSheets.splice(sheetIndex + 1, 0, override);
            node.adoptedStyleSheets = newSheets;
          }
          function clear() {
            const newSheets = [...node.adoptedStyleSheets];
            for (let i = newSheets.length - 1; i >= 0; i--) {
              const sheet = newSheets[i];
              if (overrides.has(sheet)) {
                newSheets.splice(i, 1);
              }
            }
            if (node.adoptedStyleSheets.length !== newSheets.length) {
              node.adoptedStyleSheets = newSheets;
            }
            sourceSheets = /* @__PURE__ */ new WeakSet();
            sourceDeclarations = /* @__PURE__ */ new WeakSet();
          }
          const cleaners2 = [];
          function destroy() {
            cleaners2.forEach((c) => c());
            cleaners2.splice(0);
            cancelAsyncOperations = true;
            clear();
            if (frameId) {
              cancelAnimationFrame(frameId);
              frameId = null;
            }
          }
          let rulesChangeKey = 0;
          function getRulesChangeKey() {
            let count = 0;
            iterateSourceSheets((sheet) => {
              count += sheet.cssRules.length;
            });
            if (count === 1) {
              const rule = node.adoptedStyleSheets[0].cssRules[0];
              return rule instanceof CSSStyleRule ? rule.style.length : count;
            }
            return count;
          }
          let sourceSheets = /* @__PURE__ */ new WeakSet();
          let sourceDeclarations = /* @__PURE__ */ new WeakSet();
          function render(theme2, ignoreImageAnalysis) {
            clear();
            for (let i = node.adoptedStyleSheets.length - 1; i >= 0; i--) {
              const sheet = node.adoptedStyleSheets[i];
              if (overrides.has(sheet)) {
                continue;
              }
              sourceSheets.add(sheet);
              const readyOverride = overridesBySource.get(sheet);
              if (readyOverride) {
                rulesChangeKey = getRulesChangeKey();
                injectSheet(sheet, readyOverride);
                continue;
              }
              const rules = sheet.cssRules;
              const override = new CSSStyleSheet();
              overridesBySource.set(sheet, override);
              iterateCSSRules(
                rules,
                (rule) => sourceDeclarations.add(rule.style)
              );
              const prepareSheet = () => {
                for (let i2 = override.cssRules.length - 1; i2 >= 0; i2--) {
                  override.deleteRule(i2);
                }
                override.insertRule("#__darkreader__adoptedOverride {}");
                injectSheet(sheet, override);
                overrides.add(override);
                return override;
              };
              const sheetModifier = createStyleSheetModifier();
              sheetModifier.modifySheet({
                prepareSheet,
                sourceCSSRules: rules,
                theme: theme2,
                ignoreImageAnalysis,
                force: false,
                isAsyncCancelled: () => cancelAsyncOperations
              });
            }
            rulesChangeKey = getRulesChangeKey();
          }
          let callbackRequested = false;
          function handleArrayChange(callback) {
            if (callbackRequested) {
              return;
            }
            callbackRequested = true;
            queueMicrotask(() => {
              callbackRequested = false;
              const sheets = node.adoptedStyleSheets.filter(
                (s) => !overrides.has(s)
              );
              sheets.forEach((sheet) => overridesBySource.delete(sheet));
              callback(sheets);
            });
          }
          function checkForUpdates() {
            return getRulesChangeKey() !== rulesChangeKey;
          }
          let frameId = null;
          function watchUsingRAF(callback) {
            frameId = requestAnimationFrame(() => {
              if (canUseSheetProxy) {
                return;
              }
              if (checkForUpdates()) {
                handleArrayChange(callback);
              }
              watchUsingRAF(callback);
            });
          }
          function addSheetChangeEventListener(type, listener) {
            node.addEventListener(type, listener);
            cleaners2.push(() => node.removeEventListener(type, listener));
          }
          function watch(callback) {
            const onAdoptedSheetsChange = () => {
              canUseSheetProxy = true;
              handleArrayChange(callback);
            };
            addSheetChangeEventListener(
              "__darkreader__adoptedStyleSheetsChange",
              onAdoptedSheetsChange
            );
            addSheetChangeEventListener(
              "__darkreader__adoptedStyleSheetChange",
              onAdoptedSheetsChange
            );
            addSheetChangeEventListener(
              "__darkreader__adoptedStyleDeclarationChange",
              onAdoptedSheetsChange
            );
            if (canUseSheetProxy) {
              return;
            }
            watchUsingRAF(callback);
          }
          return {
            render,
            destroy,
            watch
          };
        }
        class StyleSheetCommandBuilder {
          constructor(onChange) {
            this.cssRules = [];
            this.commands = [];
            this.onChange = onChange;
          }
          insertRule(cssText, index = 0) {
            this.commands.push({ type: "insert", index, cssText });
            this.cssRules.splice(
              index,
              0,
              new StyleSheetCommandBuilder(this.onChange)
            );
            this.onChange();
            return index;
          }
          deleteRule(index) {
            this.commands.push({ type: "delete", index });
            this.cssRules.splice(index, 1);
            this.onChange();
          }
          replaceSync(cssText) {
            this.commands.splice(0);
            this.commands.push({ type: "replace", cssText });
            if (cssText === "") {
              this.cssRules.splice(0);
            } else {
              throw new Error(
                "StyleSheetCommandBuilder.replaceSync() is not fully supported"
              );
            }
            this.onChange();
          }
          getDeepCSSCommands() {
            const deep = [];
            this.commands.forEach((command) => {
              deep.push({
                type: command.type,
                cssText: command.type !== "delete" ? command.cssText : "",
                path: command.type === "replace" ? [] : [command.index]
              });
            });
            this.cssRules.forEach((rule, i) => {
              const childCommands = rule.getDeepCSSCommands();
              childCommands.forEach((c) => c.path.unshift(i));
            });
            return deep;
          }
          clearDeepCSSCommands() {
            this.commands.splice(0);
            this.cssRules.forEach((rule) => rule.clearDeepCSSCommands());
          }
        }
        function createAdoptedStyleSheetFallback(onChange) {
          let cancelAsyncOperations = false;
          let sourceCSSRules = [];
          let lastTheme;
          let lastIgnoreImageAnalysis;
          function updateCSS(cssRules) {
            sourceCSSRules = cssRules;
            if (lastTheme && lastIgnoreImageAnalysis) {
              render(lastTheme, lastIgnoreImageAnalysis);
            }
          }
          const builder = new StyleSheetCommandBuilder(onChange);
          function render(theme2, ignoreImageAnalysis) {
            lastTheme = theme2;
            lastIgnoreImageAnalysis = ignoreImageAnalysis;
            const prepareSheet = () => {
              builder.replaceSync("");
              return builder;
            };
            const sheetModifier = createStyleSheetModifier();
            sheetModifier.modifySheet({
              prepareSheet,
              sourceCSSRules,
              theme: theme2,
              ignoreImageAnalysis,
              force: false,
              isAsyncCancelled: () => cancelAsyncOperations
            });
          }
          function commands() {
            const commands2 = builder.getDeepCSSCommands();
            builder.clearDeepCSSCommands();
            return commands2;
          }
          function destroy() {
            cancelAsyncOperations = true;
          }
          return { render, destroy, updateCSS, commands };
        }
        function injectProxy(enableStyleSheetsProxy, enableCustomElementRegistryProxy) {
          document.dispatchEvent(
            new CustomEvent("__darkreader__inlineScriptsAllowed")
          );
          const cleaners2 = [];
          function cleanUp() {
            cleaners2.forEach((clean) => clean());
            cleaners2.splice(0);
          }
          function documentEventListener(type, listener, options) {
            document.addEventListener(type, listener, options);
            cleaners2.push(() => document.removeEventListener(type, listener));
          }
          function disableConflictingPlugins2() {
            const disableWPDarkMode = () => {
              var _a;
              if ((_a = window == null ? void 0 : window.WPDarkMode) == null ? void 0 : _a.deactivate) {
                window.WPDarkMode.deactivate();
              }
            };
            disableWPDarkMode();
          }
          documentEventListener("__darkreader__cleanUp", cleanUp);
          documentEventListener(
            "__darkreader__disableConflictingPlugins",
            disableConflictingPlugins2
          );
          function overrideProperty(cls, prop, overrides2) {
            const proto = cls.prototype;
            const oldDescriptor = Object.getOwnPropertyDescriptor(proto, prop);
            const newDescriptor = oldDescriptor ? __spreadValues({}, oldDescriptor) : {};
            Object.keys(overrides2).forEach((key) => {
              const factory = overrides2[key];
              newDescriptor[key] = factory(oldDescriptor[key]);
            });
            Object.defineProperty(proto, prop, newDescriptor);
            cleaners2.push(
              () => Object.defineProperty(proto, prop, oldDescriptor)
            );
          }
          function override(cls, prop, factory) {
            overrideProperty(cls, prop, { value: factory });
          }
          function isDRElement(element) {
            var _a;
            return (_a = element == null ? void 0 : element.classList) == null ? void 0 : _a.contains("darkreader");
          }
          function isDRSheet(sheet) {
            return isDRElement(sheet.ownerNode);
          }
          const updateSheetEvent = new CustomEvent("__darkreader__updateSheet");
          const adoptedSheetChangeEvent = new CustomEvent(
            "__darkreader__adoptedStyleSheetChange"
          );
          const adoptedSheetOwners = /* @__PURE__ */ new WeakMap();
          const adoptedDeclarationSheets = /* @__PURE__ */ new WeakMap();
          function onAdoptedSheetChange(sheet) {
            const owners = adoptedSheetOwners.get(sheet);
            owners == null ? void 0 : owners.forEach((node) => {
              if (node.isConnected) {
                node.dispatchEvent(adoptedSheetChangeEvent);
              } else {
                owners.delete(node);
              }
            });
          }
          function reportSheetChange(sheet) {
            if (sheet.ownerNode && !isDRSheet(sheet)) {
              sheet.ownerNode.dispatchEvent(updateSheetEvent);
            }
            if (adoptedSheetOwners.has(sheet)) {
              onAdoptedSheetChange(sheet);
            }
          }
          function reportSheetChangeAsync(sheet, promise) {
            const { ownerNode } = sheet;
            if (ownerNode && !isDRSheet(sheet) && promise && promise instanceof Promise) {
              promise.then(() => ownerNode.dispatchEvent(updateSheetEvent));
            }
            if (adoptedSheetOwners.has(sheet)) {
              if (promise && promise instanceof Promise) {
                promise.then(() => onAdoptedSheetChange(sheet));
              }
            }
          }
          override(
            CSSStyleSheet,
            "addRule",
            (native) => function(selector, style, index) {
              native.call(this, selector, style, index);
              reportSheetChange(this);
              return -1;
            }
          );
          override(
            CSSStyleSheet,
            "insertRule",
            (native) => function(rule, index) {
              const returnValue = native.call(this, rule, index);
              reportSheetChange(this);
              return returnValue;
            }
          );
          override(
            CSSStyleSheet,
            "deleteRule",
            (native) => function(index) {
              native.call(this, index);
              reportSheetChange(this);
            }
          );
          override(
            CSSStyleSheet,
            "removeRule",
            (native) => function(index) {
              native.call(this, index);
              reportSheetChange(this);
            }
          );
          override(
            CSSStyleSheet,
            "replace",
            (native) => function(cssText) {
              const returnValue = native.call(this, cssText);
              reportSheetChangeAsync(this, returnValue);
              return returnValue;
            }
          );
          override(
            CSSStyleSheet,
            "replaceSync",
            (native) => function(cssText) {
              native.call(this, cssText);
              reportSheetChange(this);
            }
          );
          const shouldWrapHTMLElement = location.hostname === "baidu.com" || location.hostname.endsWith(".baidu.com");
          if (shouldWrapHTMLElement) {
            override(
              Element,
              "getElementsByTagName",
              (native) => function(tagName) {
                if (tagName !== "style") {
                  return native.call(this, tagName);
                }
                const getCurrentElementValue = () => {
                  const elements2 = native.call(this, tagName);
                  return Object.setPrototypeOf(
                    [...elements2].filter(
                      (element) => element && !isDRElement(element)
                    ),
                    NodeList.prototype
                  );
                };
                let elements = getCurrentElementValue();
                const nodeListBehavior = {
                  get: function(_, property) {
                    return getCurrentElementValue()[Number(property) || property];
                  }
                };
                elements = new Proxy(elements, nodeListBehavior);
                return elements;
              }
            );
          }
          const shouldProxyChildNodes = ["brilliant.org", "www.vy.no"].includes(
            location.hostname
          );
          if (shouldProxyChildNodes) {
            overrideProperty(Node, "childNodes", {
              get: (native) => function() {
                const childNodes = native.call(this);
                return Object.setPrototypeOf(
                  [...childNodes].filter((element) => {
                    return !isDRElement(element);
                  }),
                  NodeList.prototype
                );
              }
            });
          }
          function resolveCustomElement(tag) {
            customElements.whenDefined(tag).then(() => {
              document.dispatchEvent(
                new CustomEvent("__darkreader__isDefined", { detail: { tag } })
              );
            });
          }
          documentEventListener(
            "__darkreader__addUndefinedResolver",
            (e) => resolveCustomElement(e.detail.tag)
          );
          if (enableCustomElementRegistryProxy) {
            override(
              CustomElementRegistry,
              "define",
              (native) => function(name, constructor, options) {
                resolveCustomElement(name);
                native.call(this, name, constructor, options);
              }
            );
          }
          async function checkBlobURLSupport() {
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect width="1" height="1" fill="transparent"/></svg>';
            const bytes = new Uint8Array(svg.length);
            for (let i = 0; i < svg.length; i++) {
              bytes[i] = svg.charCodeAt(i);
            }
            const blob = new Blob([bytes], { type: "image/svg+xml" });
            const objectURL = URL.createObjectURL(blob);
            let blobURLAllowed;
            try {
              const image = new Image();
              await new Promise((resolve, reject) => {
                image.onload = () => resolve();
                image.onerror = () => reject();
                image.src = objectURL;
              });
              blobURLAllowed = true;
            } catch (err) {
              blobURLAllowed = false;
            }
            document.dispatchEvent(
              new CustomEvent("__darkreader__blobURLCheckResponse", {
                detail: { blobURLAllowed }
              })
            );
          }
          documentEventListener(
            "__darkreader__blobURLCheckRequest",
            checkBlobURLSupport,
            { once: true }
          );
          if (enableStyleSheetsProxy) {
            overrideProperty(Document, "styleSheets", {
              get: (native) => function() {
                const getCurrentValue = () => {
                  const docSheets = native.call(this);
                  const filteredSheets = [...docSheets].filter(
                    (styleSheet) => styleSheet.ownerNode && !isDRSheet(styleSheet)
                  );
                  filteredSheets.item = (item) => filteredSheets[item];
                  return Object.setPrototypeOf(
                    filteredSheets,
                    StyleSheetList.prototype
                  );
                };
                let elements = getCurrentValue();
                const styleSheetListBehavior = {
                  get: function(_, property) {
                    return getCurrentValue()[property];
                  }
                };
                elements = new Proxy(elements, styleSheetListBehavior);
                return elements;
              }
            });
          }
          {
            const adoptedSheetsSourceProxies = /* @__PURE__ */ new WeakMap();
            const adoptedSheetsProxySources = /* @__PURE__ */ new WeakMap();
            const adoptedSheetsChangeEvent = new CustomEvent(
              "__darkreader__adoptedStyleSheetsChange"
            );
            const adoptedSheetOverrideCache = /* @__PURE__ */ new WeakSet();
            const adoptedSheetsSnapshots = /* @__PURE__ */ new WeakMap();
            const isDRAdoptedSheetOverride = (sheet) => {
              if (!sheet || !sheet.cssRules) {
                return false;
              }
              if (adoptedSheetOverrideCache.has(sheet)) {
                return true;
              }
              if (sheet.cssRules.length > 0 && sheet.cssRules[0].cssText.startsWith(
                "#__darkreader__adoptedOverride"
              )) {
                adoptedSheetOverrideCache.add(sheet);
                return true;
              }
              return false;
            };
            const areArraysEqual = (a, b) => {
              return a.length === b.length && a.every((x, i) => x === b[i]);
            };
            const onAdoptedSheetsChange = (node) => {
              const prev = adoptedSheetsSnapshots.get(node);
              const curr = (node.adoptedStyleSheets || []).filter(
                (s) => !isDRAdoptedSheetOverride(s)
              );
              adoptedSheetsSnapshots.set(node, curr);
              if (!prev || !areArraysEqual(prev, curr)) {
                curr.forEach((sheet) => {
                  if (!adoptedSheetOwners.has(sheet)) {
                    adoptedSheetOwners.set(sheet, /* @__PURE__ */ new Set());
                  }
                  adoptedSheetOwners.get(sheet).add(node);
                  for (const rule of sheet.cssRules) {
                    const declaration = rule.style;
                    if (declaration) {
                      adoptedDeclarationSheets.set(
                        declaration,
                        sheet
                      );
                    }
                  }
                });
                node.dispatchEvent(adoptedSheetsChangeEvent);
              }
            };
            const proxyAdoptedSheetsArray = (node, source) => {
              if (adoptedSheetsProxySources.has(source)) {
                return source;
              }
              if (adoptedSheetsSourceProxies.has(source)) {
                return adoptedSheetsSourceProxies.get(source);
              }
              const proxy = new Proxy(source, {
                deleteProperty(target, property) {
                  delete target[property];
                  return true;
                },
                set(target, property, value) {
                  target[property] = value;
                  if (property === "length") {
                    onAdoptedSheetsChange(node);
                  }
                  return true;
                }
              });
              adoptedSheetsSourceProxies.set(source, proxy);
              adoptedSheetsProxySources.set(proxy, source);
              return proxy;
            };
            [Document, ShadowRoot].forEach((ctor) => {
              overrideProperty(ctor, "adoptedStyleSheets", {
                get: (native) => function() {
                  const source = native.call(this);
                  return proxyAdoptedSheetsArray(this, source);
                },
                set: (native) => function(source) {
                  if (adoptedSheetsProxySources.has(source)) {
                    source = adoptedSheetsProxySources.get(source);
                  }
                  native.call(this, source);
                  onAdoptedSheetsChange(this);
                }
              });
            });
            const adoptedDeclarationChangeEvent = new CustomEvent(
              "__darkreader__adoptedStyleDeclarationChange"
            );
            ["setProperty", "removeProperty"].forEach((key) => {
              override(CSSStyleDeclaration, key, (native) => {
                return function(...args) {
                  const returnValue = native.apply(this, args);
                  const sheet = adoptedDeclarationSheets.get(this);
                  if (sheet) {
                    const owners = adoptedSheetOwners.get(sheet);
                    if (owners) {
                      owners.forEach((node) => {
                        node.dispatchEvent(
                          adoptedDeclarationChangeEvent
                        );
                      });
                    }
                  }
                  return returnValue;
                };
              });
            });
          }
        }
        let documentVisibilityListener = null;
        let documentIsVisible_ = !document.hidden;
        const listenerOptions = {
          capture: true,
          passive: true
        };
        function watchForDocumentVisibility() {
          document.addEventListener(
            "visibilitychange",
            documentVisibilityListener,
            listenerOptions
          );
          window.addEventListener(
            "pageshow",
            documentVisibilityListener,
            listenerOptions
          );
          window.addEventListener(
            "focus",
            documentVisibilityListener,
            listenerOptions
          );
        }
        function stopWatchingForDocumentVisibility() {
          document.removeEventListener(
            "visibilitychange",
            documentVisibilityListener,
            listenerOptions
          );
          window.removeEventListener(
            "pageshow",
            documentVisibilityListener,
            listenerOptions
          );
          window.removeEventListener(
            "focus",
            documentVisibilityListener,
            listenerOptions
          );
        }
        function setDocumentVisibilityListener(callback) {
          const alreadyWatching = Boolean(documentVisibilityListener);
          documentVisibilityListener = () => {
            if (!document.hidden) {
              removeDocumentVisibilityListener();
              callback();
              documentIsVisible_ = true;
            }
          };
          if (!alreadyWatching) {
            watchForDocumentVisibility();
          }
        }
        function removeDocumentVisibilityListener() {
          stopWatchingForDocumentVisibility();
          documentVisibilityListener = null;
        }
        function documentIsVisible() {
          return documentIsVisible_;
        }
        const INSTANCE_ID = generateUID();
        const styleManagers = /* @__PURE__ */ new Map();
        const adoptedStyleManagers = [];
        const adoptedStyleFallbacks = /* @__PURE__ */ new Map();
        const adoptedStyleNodeIds = /* @__PURE__ */ new WeakMap();
        const adoptedStyleChangeTokens = /* @__PURE__ */ new WeakMap();
        let theme = null;
        let fixes = null;
        let isIFrame$1 = null;
        let ignoredImageAnalysisSelectors = [];
        let ignoredInlineSelectors = [];
        function createOrUpdateStyle(className, root = document.head || document) {
          let element = root.querySelector(".".concat(className));
          if (!element) {
            element = document.createElement("style");
            element.classList.add("darkreader");
            element.classList.add(className);
            element.media = "screen";
            element.textContent = "";
          }
          return element;
        }
        function createOrUpdateScript(className, root = document.head || document) {
          let element = root.querySelector(".".concat(className));
          if (!element) {
            element = document.createElement("script");
            element.classList.add("darkreader");
            element.classList.add(className);
          }
          return element;
        }
        const nodePositionWatchers = /* @__PURE__ */ new Map();
        function setupNodePositionWatcher(node, alias) {
          nodePositionWatchers.has(alias) && nodePositionWatchers.get(alias).stop();
          nodePositionWatchers.set(alias, watchForNodePosition(node, "head"));
        }
        function stopStylePositionWatchers() {
          forEach(nodePositionWatchers.values(), (watcher) => watcher.stop());
          nodePositionWatchers.clear();
        }
        function createStaticStyleOverrides() {
          var _a, _b;
          const fallbackStyle = createOrUpdateStyle(
            "darkreader--fallback",
            document
          );
          fallbackStyle.textContent = getModifiedFallbackStyle(theme, {
            strict: true
          });
          document.head.insertBefore(fallbackStyle, document.head.firstChild);
          setupNodePositionWatcher(fallbackStyle, "fallback");
          const userAgentStyle = createOrUpdateStyle("darkreader--user-agent");
          userAgentStyle.textContent = getModifiedUserAgentStyle(
            theme,
            isIFrame$1,
            theme.styleSystemControls
          );
          document.head.insertBefore(userAgentStyle, fallbackStyle.nextSibling);
          setupNodePositionWatcher(userAgentStyle, "user-agent");
          const textStyle = createOrUpdateStyle("darkreader--text");
          if (theme.useFont || theme.textStroke > 0) {
            textStyle.textContent = createTextStyle(theme);
          } else {
            textStyle.textContent = "";
          }
          document.head.insertBefore(textStyle, fallbackStyle.nextSibling);
          setupNodePositionWatcher(textStyle, "text");
          const invertStyle = createOrUpdateStyle("darkreader--invert");
          if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
              "".concat(fixes.invert.join(", "), " {"),
              "    filter: ".concat(getCSSFilterValue(__spreadProps(__spreadValues({}, theme), {
                contrast: theme.mode === 0 ? theme.contrast : clamp(theme.contrast - 10, 0, 100)
              })), " !important;"),
              "}"
            ].join("\n");
          } else {
            invertStyle.textContent = "";
          }
          document.head.insertBefore(invertStyle, textStyle.nextSibling);
          setupNodePositionWatcher(invertStyle, "invert");
          const inlineStyle = createOrUpdateStyle("darkreader--inline");
          inlineStyle.textContent = getInlineOverrideStyle();
          document.head.insertBefore(inlineStyle, invertStyle.nextSibling);
          setupNodePositionWatcher(inlineStyle, "inline");
          const overrideStyle = createOrUpdateStyle("darkreader--override");
          overrideStyle.textContent = fixes && fixes.css ? replaceCSSTemplates(fixes.css) : "";
          document.head.appendChild(overrideStyle);
          setupNodePositionWatcher(overrideStyle, "override");
          const variableStyle = createOrUpdateStyle("darkreader--variables");
          const selectionColors = (theme == null ? void 0 : theme.selectionColor) ? getSelectionColor(theme) : null;
          const neutralBackgroundColor = modifyBackgroundColor(
            parseColorWithCache("#ffffff"),
            theme
          );
          const neutralTextColor = modifyForegroundColor(
            parseColorWithCache("#000000"),
            theme
          );
          variableStyle.textContent = [
            ":root {",
            "   --darkreader-neutral-background: ".concat(neutralBackgroundColor, ";"),
            "   --darkreader-neutral-text: ".concat(neutralTextColor, ";"),
            "   --darkreader-selection-background: ".concat((_a = selectionColors == null ? void 0 : selectionColors.backgroundColorSelection) != null ? _a : "initial", ";"),
            "   --darkreader-selection-text: ".concat((_b = selectionColors == null ? void 0 : selectionColors.foregroundColorSelection) != null ? _b : "initial", ";"),
            "}"
          ].join("\n");
          document.head.insertBefore(variableStyle, inlineStyle.nextSibling);
          setupNodePositionWatcher(variableStyle, "variables");
          const rootVarsStyle = createOrUpdateStyle("darkreader--root-vars");
          document.head.insertBefore(rootVarsStyle, variableStyle.nextSibling);
          const enableStyleSheetsProxy = !(fixes && fixes.disableStyleSheetsProxy);
          const enableCustomElementRegistryProxy = !(fixes && fixes.disableCustomElementRegistryProxy);
          document.dispatchEvent(new CustomEvent("__darkreader__cleanUp"));
          {
            const proxyScript = createOrUpdateScript("darkreader--proxy");
            proxyScript.append(
              "(".concat(injectProxy, ")(").concat(enableStyleSheetsProxy, ", ").concat(enableCustomElementRegistryProxy, ")")
            );
            document.head.insertBefore(proxyScript, rootVarsStyle.nextSibling);
            proxyScript.remove();
          }
        }
        const shadowRootsWithOverrides = /* @__PURE__ */ new Set();
        function createShadowStaticStyleOverridesInner(root) {
          const inlineStyle = createOrUpdateStyle("darkreader--inline", root);
          inlineStyle.textContent = getInlineOverrideStyle();
          root.insertBefore(inlineStyle, root.firstChild);
          const overrideStyle = createOrUpdateStyle("darkreader--override", root);
          overrideStyle.textContent = fixes && fixes.css ? replaceCSSTemplates(fixes.css) : "";
          root.insertBefore(overrideStyle, inlineStyle.nextSibling);
          const invertStyle = createOrUpdateStyle("darkreader--invert", root);
          if (fixes && Array.isArray(fixes.invert) && fixes.invert.length > 0) {
            invertStyle.textContent = [
              "".concat(fixes.invert.join(", "), " {"),
              "    filter: ".concat(getCSSFilterValue(__spreadProps(__spreadValues({}, theme), {
                contrast: theme.mode === 0 ? theme.contrast : clamp(theme.contrast - 10, 0, 100)
              })), " !important;"),
              "}"
            ].join("\n");
          } else {
            invertStyle.textContent = "";
          }
          root.insertBefore(invertStyle, overrideStyle.nextSibling);
          shadowRootsWithOverrides.add(root);
        }
        function delayedCreateShadowStaticStyleOverrides(root) {
          const observer2 = new MutationObserver((mutations, observer3) => {
            observer3.disconnect();
            for (const { type, removedNodes } of mutations) {
              if (type === "childList") {
                for (const { nodeName, className } of removedNodes) {
                  if (nodeName === "STYLE" && [
                    "darkreader darkreader--inline",
                    "darkreader darkreader--override",
                    "darkreader darkreader--invert"
                  ].includes(className)) {
                    createShadowStaticStyleOverridesInner(root);
                    return;
                  }
                }
              }
            }
          });
          observer2.observe(root, { childList: true });
        }
        function createShadowStaticStyleOverrides(root) {
          const delayed = root.firstChild === null;
          createShadowStaticStyleOverridesInner(root);
          if (delayed) {
            delayedCreateShadowStaticStyleOverrides(root);
          }
        }
        function replaceCSSTemplates($cssText) {
          return $cssText.replace(/\${(.+?)}/g, (_, $color) => {
            const color = parseColorWithCache($color);
            if (color) {
              const lightness = getSRGBLightness(color.r, color.g, color.b);
              if (lightness > 0.5) {
                return modifyBackgroundColor(color, theme);
              }
              return modifyForegroundColor(color, theme);
            }
            return $color;
          });
        }
        function cleanFallbackStyle() {
          const fallback = document.querySelector(".darkreader--fallback");
          if (fallback) {
            fallback.textContent = "";
          }
        }
        function createDynamicStyleOverrides() {
          cancelRendering();
          const allStyles = getManageableStyles(document);
          const newManagers = allStyles.filter((style) => !styleManagers.has(style)).map((style) => createManager(style));
          newManagers.map((manager) => manager.details({ secondRound: false })).filter((detail) => detail && detail.rules.length > 0).forEach((detail) => {
            variablesStore.addRulesForMatching(detail.rules);
          });
          variablesStore.matchVariablesAndDependents();
          variablesStore.setOnRootVariableChange(() => {
            const rootVarsStyle2 = createOrUpdateStyle("darkreader--root-vars");
            variablesStore.putRootVars(rootVarsStyle2, theme);
          });
          const rootVarsStyle = createOrUpdateStyle("darkreader--root-vars");
          variablesStore.putRootVars(rootVarsStyle, theme);
          styleManagers.forEach(
            (manager) => manager.render(theme, ignoredImageAnalysisSelectors)
          );
          if (loadingStyles.size === 0) {
            cleanFallbackStyle();
          }
          newManagers.forEach((manager) => manager.watch());
          const inlineStyleElements = toArray(
            document.querySelectorAll(INLINE_STYLE_SELECTOR)
          );
          iterateShadowHosts(document.documentElement, (host) => {
            createShadowStaticStyleOverrides(host.shadowRoot);
            const elements = host.shadowRoot.querySelectorAll(
              INLINE_STYLE_SELECTOR
            );
            if (elements.length > 0) {
              push(inlineStyleElements, elements);
            }
          });
          inlineStyleElements.forEach(
            (el) => overrideInlineStyle(
              el,
              theme,
              ignoredInlineSelectors,
              ignoredImageAnalysisSelectors
            )
          );
          handleAdoptedStyleSheets(document);
          variablesStore.matchVariablesAndDependents();
          if (isFirefox) {
            const MATCH_VAR = Symbol();
            const onAdoptedCSSChange = (e) => {
              const { node, id, cssRules, entries } = e.detail;
              if (Array.isArray(entries)) {
                entries.forEach((e2) => {
                  const cssRules2 = e2[2];
                  variablesStore.addRulesForMatching(cssRules2);
                });
                variablesStore.matchVariablesAndDependents();
              } else if (cssRules) {
                variablesStore.addRulesForMatching(cssRules);
                requestAnimationFrameOnce(
                  MATCH_VAR,
                  () => variablesStore.matchVariablesAndDependents()
                );
              }
              const tuples = Array.isArray(entries) ? entries : node && cssRules ? [[node, id, cssRules]] : [];
              tuples.forEach(([node2, id2, cssRules2]) => {
                adoptedStyleNodeIds.set(node2, id2);
                const fallback = getAdoptedStyleSheetFallback(node2);
                fallback.updateCSS(cssRules2);
              });
            };
            document.addEventListener(
              "__darkreader__adoptedStyleSheetsChange",
              onAdoptedCSSChange
            );
            cleaners.push(
              () => document.removeEventListener(
                "__darkreader__adoptedStyleSheetsChange",
                onAdoptedCSSChange
              )
            );
            document.dispatchEvent(
              new CustomEvent("__darkreader__startAdoptedStyleSheetsWatcher")
            );
          }
        }
        let loadingStylesCounter = 0;
        const loadingStyles = /* @__PURE__ */ new Set();
        function createManager(element) {
          const loadingStyleId = ++loadingStylesCounter;
          function loadingStart() {
            if (!isDOMReady() || !documentIsVisible()) {
              loadingStyles.add(loadingStyleId);
              logInfo(
                "Current amount of styles loading: ".concat(loadingStyles.size)
              );
              const fallbackStyle = document.querySelector(
                ".darkreader--fallback"
              );
              if (!fallbackStyle.textContent) {
                fallbackStyle.textContent = getModifiedFallbackStyle(
                  theme,
                  { strict: false }
                );
              }
            }
          }
          function loadingEnd() {
            loadingStyles.delete(loadingStyleId);
            logInfo(
              "Removed loadingStyle ".concat(loadingStyleId, ", now awaiting: ").concat(loadingStyles.size)
            );
            if (loadingStyles.size === 0 && isDOMReady()) {
              cleanFallbackStyle();
            }
          }
          function update() {
            const details = manager.details({ secondRound: true });
            if (!details) {
              return;
            }
            variablesStore.addRulesForMatching(details.rules);
            variablesStore.matchVariablesAndDependents();
            manager.render(theme, ignoredImageAnalysisSelectors);
          }
          const manager = manageStyle(element, {
            update,
            loadingStart,
            loadingEnd
          });
          styleManagers.set(element, manager);
          return manager;
        }
        function removeManager(element) {
          const manager = styleManagers.get(element);
          if (manager) {
            manager.destroy();
            styleManagers.delete(element);
          }
        }
        const throttledRenderAllStyles = throttle((callback) => {
          styleManagers.forEach(
            (manager) => manager.render(theme, ignoredImageAnalysisSelectors)
          );
          adoptedStyleManagers.forEach(
            (manager) => manager.render(theme, ignoredImageAnalysisSelectors)
          );
          callback && callback();
        });
        const cancelRendering = function() {
          throttledRenderAllStyles.cancel();
        };
        function onDOMReady() {
          if (loadingStyles.size === 0) {
            cleanFallbackStyle();
            return;
          }
        }
        function runDynamicStyle() {
          createDynamicStyleOverrides();
          watchForUpdates();
        }
        function createThemeAndWatchForUpdates() {
          createStaticStyleOverrides();
          if (!documentIsVisible() && !theme.immediateModify) {
            setDocumentVisibilityListener(runDynamicStyle);
          } else {
            runDynamicStyle();
          }
          changeMetaThemeColorWhenAvailable(theme);
        }
        function handleAdoptedStyleSheets(node) {
          if (isFirefox) {
            const fallback = getAdoptedStyleSheetFallback(node);
            fallback.render(theme, ignoredImageAnalysisSelectors);
            return;
          }
          if (canHaveAdoptedStyleSheets(node)) {
            node.adoptedStyleSheets.forEach((s) => {
              variablesStore.addRulesForMatching(s.cssRules);
            });
            const newManger = createAdoptedStyleSheetOverride(node);
            adoptedStyleManagers.push(newManger);
            newManger.render(theme, ignoredImageAnalysisSelectors);
            newManger.watch((sheets) => {
              sheets.forEach((s) => {
                variablesStore.addRulesForMatching(s.cssRules);
              });
              variablesStore.matchVariablesAndDependents();
              newManger.render(theme, ignoredImageAnalysisSelectors);
            });
          }
        }
        function getAdoptedStyleChangeToken(node) {
          if (adoptedStyleChangeTokens.has(node)) {
            return adoptedStyleChangeTokens.get(node);
          }
          const token = Symbol();
          adoptedStyleChangeTokens.set(node, token);
          return token;
        }
        function getAdoptedStyleSheetFallback(node) {
          let fallback = adoptedStyleFallbacks.get(node);
          if (!fallback) {
            fallback = createAdoptedStyleSheetFallback(() => {
              const token = getAdoptedStyleChangeToken(node);
              requestAnimationFrameOnce(token, () => {
                const id = adoptedStyleNodeIds.get(node);
                const commands = fallback == null ? void 0 : fallback.commands();
                if (!id || !commands) {
                  return;
                }
                const data = { id, commands };
                document.dispatchEvent(
                  new CustomEvent(
                    "__darkreader__adoptedStyleSheetCommands",
                    { detail: JSON.stringify(data) }
                  )
                );
              });
            });
            adoptedStyleFallbacks.set(node, fallback);
          }
          return fallback;
        }
        function watchForUpdates() {
          const managedStyles = Array.from(styleManagers.keys());
          watchForStyleChanges(
            managedStyles,
            ({ created, updated, removed, moved }) => {
              const stylesToRemove = removed;
              const stylesToManage = created.concat(updated).concat(moved).filter((style) => !styleManagers.has(style));
              const stylesToRestore = moved.filter(
                (style) => styleManagers.has(style)
              );
              stylesToRemove.forEach((style) => removeManager(style));
              const newManagers = stylesToManage.map(
                (style) => createManager(style)
              );
              newManagers.map((manager) => manager.details({ secondRound: false })).filter((detail) => detail && detail.rules.length > 0).forEach((detail) => {
                variablesStore.addRulesForMatching(detail.rules);
              });
              variablesStore.matchVariablesAndDependents();
              newManagers.forEach(
                (manager) => manager.render(theme, ignoredImageAnalysisSelectors)
              );
              newManagers.forEach((manager) => manager.watch());
              stylesToRestore.forEach(
                (style) => styleManagers.get(style).restore()
              );
            },
            (shadowRoot) => {
              createShadowStaticStyleOverrides(shadowRoot);
              handleAdoptedStyleSheets(shadowRoot);
            }
          );
          watchForInlineStyles(
            (element) => {
              overrideInlineStyle(
                element,
                theme,
                ignoredInlineSelectors,
                ignoredImageAnalysisSelectors
              );
              if (element === document.documentElement) {
                const styleAttr = element.getAttribute("style") || "";
                if (styleAttr.includes("--")) {
                  variablesStore.matchVariablesAndDependents();
                  const rootVarsStyle = createOrUpdateStyle(
                    "darkreader--root-vars"
                  );
                  variablesStore.putRootVars(rootVarsStyle, theme);
                }
              }
            },
            (root) => {
              createShadowStaticStyleOverrides(root);
              const inlineStyleElements = root.querySelectorAll(
                INLINE_STYLE_SELECTOR
              );
              if (inlineStyleElements.length > 0) {
                forEach(
                  inlineStyleElements,
                  (el) => overrideInlineStyle(
                    el,
                    theme,
                    ignoredInlineSelectors,
                    ignoredImageAnalysisSelectors
                  )
                );
              }
            }
          );
          addDOMReadyListener(onDOMReady);
        }
        function stopWatchingForUpdates() {
          styleManagers.forEach((manager) => manager.pause());
          stopStylePositionWatchers();
          stopWatchingForStyleChanges();
          stopWatchingForInlineStyles();
          removeDOMReadyListener(onDOMReady);
          cleanReadyStateCompleteListeners();
        }
        let metaObserver;
        function addMetaListener() {
          metaObserver = new MutationObserver(() => {
            if (document.querySelector('meta[name="darkreader-lock"]')) {
              metaObserver.disconnect();
              removeDynamicTheme();
            }
          });
          metaObserver.observe(document.head, { childList: true, subtree: true });
        }
        function createDarkReaderInstanceMarker() {
          const metaElement = document.createElement("meta");
          metaElement.name = "darkreader";
          metaElement.content = INSTANCE_ID;
          document.head.appendChild(metaElement);
        }
        function isDRLocked() {
          return document.querySelector('meta[name="darkreader-lock"]') != null;
        }
        function isAnotherDarkReaderInstanceActive() {
          const meta = document.querySelector('meta[name="darkreader"]');
          if (meta) {
            if (meta.content !== INSTANCE_ID) {
              return true;
            }
            return false;
          }
          createDarkReaderInstanceMarker();
          addMetaListener();
          return false;
        }
        let interceptorAttempts = 2;
        function interceptOldScript({ success, failure }) {
          if (--interceptorAttempts <= 0) {
            failure();
            return;
          }
          const oldMeta = document.head.querySelector('meta[name="darkreader"]');
          if (!oldMeta || oldMeta.content === INSTANCE_ID) {
            return;
          }
          const lock = document.createElement("meta");
          lock.name = "darkreader-lock";
          document.head.append(lock);
          queueMicrotask(() => {
            lock.remove();
            success();
          });
        }
        function disableConflictingPlugins() {
          if (document.documentElement.hasAttribute("data-wp-dark-mode-preset")) {
            const disableWPDarkMode = () => {
              document.dispatchEvent(
                new CustomEvent("__darkreader__disableConflictingPlugins")
              );
              document.documentElement.classList.remove(
                "wp-dark-mode-active"
              );
              document.documentElement.removeAttribute(
                "data-wp-dark-mode-active"
              );
            };
            disableWPDarkMode();
            const observer2 = new MutationObserver(() => {
              if (document.documentElement.classList.contains(
                "wp-dark-mode-active"
              ) || document.documentElement.hasAttribute(
                "data-wp-dark-mode-active"
              )) {
                disableWPDarkMode();
              }
            });
            observer2.observe(document.documentElement, {
              attributes: true,
              attributeFilter: ["class", "data-wp-dark-mode-active"]
            });
          }
        }
        function createOrUpdateDynamicThemeInternal(themeConfig, dynamicThemeFixes, iframe) {
          theme = themeConfig;
          fixes = dynamicThemeFixes;
          if (fixes) {
            ignoredImageAnalysisSelectors = Array.isArray(
              fixes.ignoreImageAnalysis
            ) ? fixes.ignoreImageAnalysis : [];
            ignoredInlineSelectors = Array.isArray(fixes.ignoreInlineStyle) ? fixes.ignoreInlineStyle : [];
          } else {
            ignoredImageAnalysisSelectors = [];
            ignoredInlineSelectors = [];
          }
          if (theme.immediateModify) {
            setIsDOMReady(() => {
              return true;
            });
          }
          isIFrame$1 = iframe;
          const ready = () => {
            const success = () => {
              disableConflictingPlugins();
              document.documentElement.setAttribute(
                "data-darkreader-mode",
                "dynamic"
              );
              document.documentElement.setAttribute(
                "data-darkreader-scheme",
                theme.mode ? "dark" : "dimmed"
              );
              createThemeAndWatchForUpdates();
            };
            const failure = () => {
              removeDynamicTheme();
            };
            if (isDRLocked()) {
              removeNode(document.querySelector(".darkreader--fallback"));
            } else if (isAnotherDarkReaderInstanceActive()) {
              interceptOldScript({
                success,
                failure
              });
            } else {
              success();
            }
          };
          if (document.head) {
            ready();
          } else {
            if (!isFirefox) {
              const fallbackStyle = createOrUpdateStyle(
                "darkreader--fallback"
              );
              document.documentElement.appendChild(fallbackStyle);
              fallbackStyle.textContent = getModifiedFallbackStyle(theme, {
                strict: true
              });
            }
            const headObserver = new MutationObserver(() => {
              if (document.head) {
                headObserver.disconnect();
                ready();
              }
            });
            headObserver.observe(document, { childList: true, subtree: true });
          }
        }
        function removeProxy() {
          document.dispatchEvent(new CustomEvent("__darkreader__cleanUp"));
          removeNode(document.head.querySelector(".darkreader--proxy"));
        }
        const cleaners = [];
        function removeDynamicTheme() {
          document.documentElement.removeAttribute("data-darkreader-mode");
          document.documentElement.removeAttribute("data-darkreader-scheme");
          cleanDynamicThemeCache();
          removeNode(document.querySelector(".darkreader--fallback"));
          if (document.head) {
            restoreMetaThemeColor();
            removeNode(document.head.querySelector(".darkreader--user-agent"));
            removeNode(document.head.querySelector(".darkreader--text"));
            removeNode(document.head.querySelector(".darkreader--invert"));
            removeNode(document.head.querySelector(".darkreader--inline"));
            removeNode(document.head.querySelector(".darkreader--override"));
            removeNode(document.head.querySelector(".darkreader--variables"));
            removeNode(document.head.querySelector(".darkreader--root-vars"));
            removeNode(document.head.querySelector('meta[name="darkreader"]'));
            removeProxy();
          }
          shadowRootsWithOverrides.forEach((root) => {
            removeNode(root.querySelector(".darkreader--inline"));
            removeNode(root.querySelector(".darkreader--override"));
          });
          shadowRootsWithOverrides.clear();
          forEach(styleManagers.keys(), (el) => removeManager(el));
          loadingStyles.clear();
          cleanLoadingLinks();
          forEach(document.querySelectorAll(".darkreader"), removeNode);
          adoptedStyleManagers.forEach((manager) => manager.destroy());
          adoptedStyleManagers.splice(0);
          adoptedStyleFallbacks.forEach((fallback) => fallback.destroy());
          adoptedStyleFallbacks.clear();
          metaObserver && metaObserver.disconnect();
          cleaners.forEach((clean) => clean());
          cleaners.splice(0);
        }
        function cleanDynamicThemeCache() {
          variablesStore.clear();
          parsedURLCache.clear();
          removeDocumentVisibilityListener();
          cancelRendering();
          stopWatchingForUpdates();
          cleanModificationCache();
          clearColorCache();
        }
        function parseCSS(cssText) {
          cssText = removeCSSComments(cssText);
          cssText = cssText.trim();
          if (!cssText) {
            return [];
          }
          const rules = [];
          const excludeRanges = getTokenExclusionRanges(cssText);
          const bracketRanges = getAllOpenCloseRanges(
            cssText,
            "{",
            "}",
            excludeRanges
          );
          let ruleStart = 0;
          bracketRanges.forEach((brackets) => {
            const key = cssText.substring(ruleStart, brackets.start).trim();
            const content = cssText.substring(
              brackets.start + 1,
              brackets.end - 1
            );
            if (key.startsWith("@")) {
              const typeEndIndex = key.search(/[\s\(]/);
              const rule = {
                type: typeEndIndex < 0 ? key : key.substring(0, typeEndIndex),
                query: typeEndIndex < 0 ? "" : key.substring(typeEndIndex).trim(),
                rules: parseCSS(content)
              };
              rules.push(rule);
            } else {
              const rule = {
                selectors: parseSelectors(key),
                declarations: parseDeclarations(content)
              };
              rules.push(rule);
            }
            ruleStart = brackets.end;
          });
          return rules;
        }
        function getAllOpenCloseRanges(input, openToken, closeToken, excludeRanges = []) {
          const ranges = [];
          let i = 0;
          let range;
          while (range = getOpenCloseRange(
            input,
            i,
            openToken,
            closeToken,
            excludeRanges
          )) {
            ranges.push(range);
            i = range.end;
          }
          return ranges;
        }
        function getTokenExclusionRanges(cssText) {
          const singleQuoteGoesFirst = cssText.indexOf("'") < cssText.indexOf('"');
          const firstQuote = singleQuoteGoesFirst ? "'" : '"';
          const secondQuote = singleQuoteGoesFirst ? '"' : "'";
          const excludeRanges = getAllOpenCloseRanges(
            cssText,
            firstQuote,
            firstQuote
          );
          excludeRanges.push(
            ...getAllOpenCloseRanges(
              cssText,
              secondQuote,
              secondQuote,
              excludeRanges
            )
          );
          excludeRanges.push(
            ...getAllOpenCloseRanges(cssText, "[", "]", excludeRanges)
          );
          excludeRanges.push(
            ...getAllOpenCloseRanges(cssText, "(", ")", excludeRanges)
          );
          return excludeRanges;
        }
        function parseSelectors(selectorText) {
          const excludeRanges = getTokenExclusionRanges(selectorText);
          return splitExcluding(selectorText, ",", excludeRanges);
        }
        function parseDeclarations(cssDeclarationsText) {
          const declarations = [];
          const excludeRanges = getTokenExclusionRanges(cssDeclarationsText);
          splitExcluding(cssDeclarationsText, ";", excludeRanges).forEach(
            (part) => {
              const colonIndex = part.indexOf(":");
              if (colonIndex > 0) {
                const importantIndex = part.indexOf("!important");
                declarations.push({
                  property: part.substring(0, colonIndex).trim(),
                  value: part.substring(
                    colonIndex + 1,
                    importantIndex > 0 ? importantIndex : part.length
                  ).trim(),
                  important: importantIndex > 0
                });
              }
            }
          );
          return declarations;
        }
        function isParsedStyleRule(rule) {
          return "selectors" in rule;
        }
        function formatCSS(cssText) {
          const parsed = parseCSS(cssText);
          return formatParsedCSS(parsed);
        }
        function formatParsedCSS(parsed) {
          const lines = [];
          const tab = "    ";
          function formatRule(rule, indent) {
            if (isParsedStyleRule(rule)) {
              formatStyleRule(rule, indent);
            } else {
              formatAtRule(rule, indent);
            }
          }
          function formatAtRule({ type, query, rules }, indent) {
            lines.push("".concat(indent).concat(type, " ").concat(query, " {"));
            rules.forEach((child) => formatRule(child, "".concat(indent).concat(tab)));
            lines.push("".concat(indent, "}"));
          }
          function formatStyleRule({ selectors, declarations }, indent) {
            const lastSelectorIndex = selectors.length - 1;
            selectors.forEach((selector, i) => {
              lines.push(
                "".concat(indent).concat(selector).concat(i < lastSelectorIndex ? "," : " {")
              );
            });
            const sorted = sortDeclarations(declarations);
            sorted.forEach(({ property, value, important }) => {
              lines.push(
                "".concat(indent).concat(tab).concat(property, ": ").concat(value).concat(important ? " !important" : "", ";")
              );
            });
            lines.push("".concat(indent, "}"));
          }
          clearEmptyRules(parsed);
          parsed.forEach((rule) => formatRule(rule, ""));
          return lines.join("\n");
        }
        function sortDeclarations(declarations) {
          const prefixRegex = /^-[a-z]-/;
          return [...declarations].sort((a, b) => {
            var _a, _b, _c, _d;
            const aProp = a.property;
            const bProp = b.property;
            const aPrefix = (_b = (_a = aProp.match(prefixRegex)) == null ? void 0 : _a[0]) != null ? _b : "";
            const bPrefix = (_d = (_c = bProp.match(prefixRegex)) == null ? void 0 : _c[0]) != null ? _d : "";
            const aNorm = aPrefix ? aProp.replace(prefixRegex, "") : aProp;
            const bNorm = bPrefix ? bProp.replace(prefixRegex, "") : bProp;
            if (aNorm === bNorm) {
              return aPrefix.localeCompare(bPrefix);
            }
            return aNorm.localeCompare(bNorm);
          });
        }
        function clearEmptyRules(rules) {
          for (let i = rules.length - 1; i >= 0; i--) {
            const rule = rules[i];
            if (isParsedStyleRule(rule)) {
              if (rule.declarations.length === 0) {
                rules.splice(i, 1);
              }
            } else {
              clearEmptyRules(rule.rules);
              if (rule.rules.length === 0) {
                rules.splice(i, 1);
              }
            }
          }
        }
        const blobRegex = /url\(\"(blob\:.*?)\"\)/g;
        async function replaceBlobs(text) {
          const promises = [];
          getMatches(blobRegex, text, 1).forEach((url) => {
            const promise = loadAsDataURL(url);
            promises.push(promise);
          });
          const data = await Promise.all(promises);
          return text.replace(blobRegex, () => 'url("'.concat(data.shift(), '")'));
        }
        const banner = '/*\n                        _______\n                       /       \\\n                      .==.    .==.\n                     ((  ))==((  ))\n                    / "=="    "=="\\\n                   /____|| || ||___\\\n       ________     ____    ________  ___    ___\n       |  ___  \\   /    \\   |  ___  \\ |  |  /  /\n       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /\n       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\\n       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\\n_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____\n|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\\n|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\\n|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /\n|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\\n|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\\n                https://darkreader.org\n*/\n\n/*! Dark reader generated CSS | Licensed under MIT https://github.com/darkreader/darkreader/blob/main/LICENSE */\n';
        async function collectCSS() {
          const css = [banner];
          function addStaticCSS(selector, comment) {
            const staticStyle = document.querySelector(selector);
            if (staticStyle && staticStyle.textContent) {
              css.push("/* ".concat(comment, " */"));
              css.push(staticStyle.textContent);
              css.push("");
            }
          }
          addStaticCSS(".darkreader--fallback", "Fallback Style");
          addStaticCSS(".darkreader--user-agent", "User-Agent Style");
          addStaticCSS(".darkreader--text", "Text Style");
          addStaticCSS(".darkreader--invert", "Invert Style");
          addStaticCSS(".darkreader--variables", "Variables Style");
          const modifiedCSS = [];
          document.querySelectorAll(".darkreader--sync").forEach((element) => {
            forEach(element.sheet.cssRules, (rule) => {
              rule && rule.cssText && modifiedCSS.push(rule.cssText);
            });
          });
          if (modifiedCSS.length) {
            const formattedCSS = formatCSS(modifiedCSS.join("\n"));
            css.push("/* Modified CSS */");
            css.push(await replaceBlobs(formattedCSS));
            css.push("");
          }
          addStaticCSS(".darkreader--override", "Override Style");
          return css.join("\n");
        }
        let isDarkReaderEnabled = false;
        const isIFrame = (() => {
          try {
            return window.self !== window.top;
          } catch (err) {
            console.warn(err);
            return true;
          }
        })();
        function enable(themeOptions = {}, fixes2 = null) {
          const theme2 = __spreadValues(__spreadValues({}, DEFAULT_THEME), themeOptions);
          if (theme2.engine !== ThemeEngine.dynamicTheme) {
            throw new Error("Theme engine is not supported.");
          }
          createOrUpdateDynamicThemeInternal(theme2, fixes2, isIFrame);
          isDarkReaderEnabled = true;
        }
        function isEnabled() {
          return isDarkReaderEnabled;
        }
        function disable() {
          removeDynamicTheme();
          isDarkReaderEnabled = false;
        }
        const darkScheme = matchMedia("(prefers-color-scheme: dark)");
        let store = {
          themeOptions: null,
          fixes: null
        };
        function handleColorScheme() {
          if (darkScheme.matches) {
            enable(store.themeOptions, store.fixes);
          } else {
            disable();
          }
        }
        function auto(themeOptions = {}, fixes2 = null) {
          if (themeOptions) {
            store = { themeOptions, fixes: fixes2 };
            handleColorScheme();
            if (isMatchMediaChangeEventListenerSupported) {
              darkScheme.addEventListener("change", handleColorScheme);
            } else {
              darkScheme.addListener(handleColorScheme);
            }
          } else {
            if (isMatchMediaChangeEventListenerSupported) {
              darkScheme.removeEventListener("change", handleColorScheme);
            } else {
              darkScheme.removeListener(handleColorScheme);
            }
            disable();
          }
        }
        async function exportGeneratedCSS() {
          return await collectCSS();
        }
        const setFetchMethod = setFetchMethod$1;
        exports2.auto = auto;
        exports2.disable = disable;
        exports2.enable = enable;
        exports2.exportGeneratedCSS = exportGeneratedCSS;
        exports2.isEnabled = isEnabled;
        exports2.setFetchMethod = setFetchMethod;
        Object.defineProperty(exports2, "__esModule", { value: true });
      });
    }
  });

  // public/javascripts/login.js
  var DarkReader = require_darkreader();
  DarkReader.auto({
    brightness: 100,
    contrast: 100,
    darkSchemeTextColor: "white"
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2RhcmtyZWFkZXIvZGFya3JlYWRlci5qcyIsICIuLi9wdWJsaWMvamF2YXNjcmlwdHMvbG9naW4uanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxyXG4gKiBEYXJrIFJlYWRlciB2NC45Ljk1XHJcbiAqIGh0dHBzOi8vZGFya3JlYWRlci5vcmcvXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcclxuICAgIHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCJcclxuICAgICAgICA/IGZhY3RvcnkoZXhwb3J0cylcclxuICAgICAgICA6IHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kXHJcbiAgICAgICAgICA/IGRlZmluZShbXCJleHBvcnRzXCJdLCBmYWN0b3J5KVxyXG4gICAgICAgICAgOiAoKGdsb2JhbCA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID8gZ2xvYmFsVGhpc1xyXG4gICAgICAgICAgICAgICAgICAgIDogZ2xvYmFsIHx8IHNlbGYpLFxyXG4gICAgICAgICAgICBmYWN0b3J5KChnbG9iYWwuRGFya1JlYWRlciA9IHt9KSkpO1xyXG59KSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgdmFyIE1lc3NhZ2VUeXBlVUl0b0JHO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZVVJdG9CRykge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiR0VUX0RBVEFcIl0gPSBcInVpLWJnLWdldC1kYXRhXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJHRVRfREVWVE9PTFNfREFUQVwiXSA9IFwidWktYmctZ2V0LWRldnRvb2xzLWRhdGFcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIlNVQlNDUklCRV9UT19DSEFOR0VTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1zdWJzY3JpYmUtdG8tY2hhbmdlc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiVU5TVUJTQ1JJQkVfRlJPTV9DSEFOR0VTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy11bnN1YnNjcmliZS1mcm9tLWNoYW5nZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkNIQU5HRV9TRVRUSU5HU1wiXSA9IFwidWktYmctY2hhbmdlLXNldHRpbmdzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJTRVRfVEhFTUVcIl0gPSBcInVpLWJnLXNldC10aGVtZVwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiVE9HR0xFX0FDVElWRV9UQUJcIl0gPSBcInVpLWJnLXRvZ2dsZS1hY3RpdmUtdGFiXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJNQVJLX05FV1NfQVNfUkVBRFwiXSA9IFwidWktYmctbWFyay1uZXdzLWFzLXJlYWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIk1BUktfTkVXU19BU19ESVNQTEFZRURcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLW1hcmstbmV3cy1hcy1kaXNwbGF5ZWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkxPQURfQ09ORklHXCJdID0gXCJ1aS1iZy1sb2FkLWNvbmZpZ1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiQVBQTFlfREVWX0RZTkFNSUNfVEhFTUVfRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLWFwcGx5LWRldi1keW5hbWljLXRoZW1lLWZpeGVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJSRVNFVF9ERVZfRFlOQU1JQ19USEVNRV9GSVhFU1wiXSA9XHJcbiAgICAgICAgICAgIFwidWktYmctcmVzZXQtZGV2LWR5bmFtaWMtdGhlbWUtZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkFQUExZX0RFVl9JTlZFUlNJT05fRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLWFwcGx5LWRldi1pbnZlcnNpb24tZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIlJFU0VUX0RFVl9JTlZFUlNJT05fRklYRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLXJlc2V0LWRldi1pbnZlcnNpb24tZml4ZXNcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9CR1tcIkFQUExZX0RFVl9TVEFUSUNfVEhFTUVTXCJdID1cclxuICAgICAgICAgICAgXCJ1aS1iZy1hcHBseS1kZXYtc3RhdGljLXRoZW1lc1wiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlVUl0b0JHW1wiUkVTRVRfREVWX1NUQVRJQ19USEVNRVNcIl0gPVxyXG4gICAgICAgICAgICBcInVpLWJnLXJlc2V0LWRldi1zdGF0aWMtdGhlbWVzXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJDT0xPUl9TQ0hFTUVfQ0hBTkdFXCJdID0gXCJ1aS1iZy1jb2xvci1zY2hlbWUtY2hhbmdlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVVSXRvQkdbXCJISURFX0hJR0hMSUdIVFNcIl0gPSBcInVpLWJnLWhpZGUtaGlnaGxpZ2h0c1wiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGVVSXRvQkcgfHwgKE1lc3NhZ2VUeXBlVUl0b0JHID0ge30pKTtcclxuICAgIHZhciBNZXNzYWdlVHlwZUJHdG9VSTtcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVCR3RvVUkpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9VSVtcIkNIQU5HRVNcIl0gPSBcImJnLXVpLWNoYW5nZXNcIjtcclxuICAgIH0pKE1lc3NhZ2VUeXBlQkd0b1VJIHx8IChNZXNzYWdlVHlwZUJHdG9VSSA9IHt9KSk7XHJcbiAgICB2YXIgRGVidWdNZXNzYWdlVHlwZUJHdG9VSTtcclxuICAgIChmdW5jdGlvbiAoRGVidWdNZXNzYWdlVHlwZUJHdG9VSSkge1xyXG4gICAgICAgIERlYnVnTWVzc2FnZVR5cGVCR3RvVUlbXCJDU1NfVVBEQVRFXCJdID0gXCJkZWJ1Zy1iZy11aS1jc3MtdXBkYXRlXCI7XHJcbiAgICAgICAgRGVidWdNZXNzYWdlVHlwZUJHdG9VSVtcIlVQREFURVwiXSA9IFwiZGVidWctYmctdWktdXBkYXRlXCI7XHJcbiAgICB9KShEZWJ1Z01lc3NhZ2VUeXBlQkd0b1VJIHx8IChEZWJ1Z01lc3NhZ2VUeXBlQkd0b1VJID0ge30pKTtcclxuICAgIHZhciBNZXNzYWdlVHlwZUJHdG9DUztcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVCR3RvQ1MpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9DU1tcIkFERF9DU1NfRklMVEVSXCJdID0gXCJiZy1jcy1hZGQtY3NzLWZpbHRlclwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b0NTW1wiQUREX0RZTkFNSUNfVEhFTUVcIl0gPSBcImJnLWNzLWFkZC1keW5hbWljLXRoZW1lXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJBRERfU1RBVElDX1RIRU1FXCJdID0gXCJiZy1jcy1hZGQtc3RhdGljLXRoZW1lXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJBRERfU1ZHX0ZJTFRFUlwiXSA9IFwiYmctY3MtYWRkLXN2Zy1maWx0ZXJcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUJHdG9DU1tcIkNMRUFOX1VQXCJdID0gXCJiZy1jcy1jbGVhbi11cFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQkd0b0NTW1wiRkVUQ0hfUkVTUE9OU0VcIl0gPSBcImJnLWNzLWZldGNoLXJlc3BvbnNlXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVCR3RvQ1NbXCJVTlNVUFBPUlRFRF9TRU5ERVJcIl0gPSBcImJnLWNzLXVuc3VwcG9ydGVkLXNlbmRlclwiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGVCR3RvQ1MgfHwgKE1lc3NhZ2VUeXBlQkd0b0NTID0ge30pKTtcclxuICAgIHZhciBEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTO1xyXG4gICAgKGZ1bmN0aW9uIChEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTKSB7XHJcbiAgICAgICAgRGVidWdNZXNzYWdlVHlwZUJHdG9DU1tcIlJFTE9BRFwiXSA9IFwiZGVidWctYmctY3MtcmVsb2FkXCI7XHJcbiAgICB9KShEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTIHx8IChEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTID0ge30pKTtcclxuICAgIHZhciBNZXNzYWdlVHlwZUNTdG9CRztcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVDU3RvQkcpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkNPTE9SX1NDSEVNRV9DSEFOR0VcIl0gPSBcImNzLWJnLWNvbG9yLXNjaGVtZS1jaGFuZ2VcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkRBUktfVEhFTUVfREVURUNURURcIl0gPSBcImNzLWJnLWRhcmstdGhlbWUtZGV0ZWN0ZWRcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkRBUktfVEhFTUVfTk9UX0RFVEVDVEVEXCJdID1cclxuICAgICAgICAgICAgXCJjcy1iZy1kYXJrLXRoZW1lLW5vdC1kZXRlY3RlZFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiRkVUQ0hcIl0gPSBcImNzLWJnLWZldGNoXCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJET0NVTUVOVF9DT05ORUNUXCJdID0gXCJjcy1iZy1kb2N1bWVudC1jb25uZWN0XCI7XHJcbiAgICAgICAgTWVzc2FnZVR5cGVDU3RvQkdbXCJET0NVTUVOVF9GT1JHRVRcIl0gPSBcImNzLWJnLWRvY3VtZW50LWZvcmdldFwiO1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b0JHW1wiRE9DVU1FTlRfRlJFRVpFXCJdID0gXCJjcy1iZy1kb2N1bWVudC1mcmVlemVcIjtcclxuICAgICAgICBNZXNzYWdlVHlwZUNTdG9CR1tcIkRPQ1VNRU5UX1JFU1VNRVwiXSA9IFwiY3MtYmctZG9jdW1lbnQtcmVzdW1lXCI7XHJcbiAgICB9KShNZXNzYWdlVHlwZUNTdG9CRyB8fCAoTWVzc2FnZVR5cGVDU3RvQkcgPSB7fSkpO1xyXG4gICAgdmFyIERlYnVnTWVzc2FnZVR5cGVDU3RvQkc7XHJcbiAgICAoZnVuY3Rpb24gKERlYnVnTWVzc2FnZVR5cGVDU3RvQkcpIHtcclxuICAgICAgICBEZWJ1Z01lc3NhZ2VUeXBlQ1N0b0JHW1wiTE9HXCJdID0gXCJkZWJ1Zy1jcy1iZy1sb2dcIjtcclxuICAgIH0pKERlYnVnTWVzc2FnZVR5cGVDU3RvQkcgfHwgKERlYnVnTWVzc2FnZVR5cGVDU3RvQkcgPSB7fSkpO1xyXG4gICAgdmFyIE1lc3NhZ2VUeXBlQ1N0b1VJO1xyXG4gICAgKGZ1bmN0aW9uIChNZXNzYWdlVHlwZUNTdG9VSSkge1xyXG4gICAgICAgIE1lc3NhZ2VUeXBlQ1N0b1VJW1wiRVhQT1JUX0NTU19SRVNQT05TRVwiXSA9IFwiY3MtdWktZXhwb3J0LWNzcy1yZXNwb25zZVwiO1xyXG4gICAgfSkoTWVzc2FnZVR5cGVDU3RvVUkgfHwgKE1lc3NhZ2VUeXBlQ1N0b1VJID0ge30pKTtcclxuICAgIHZhciBNZXNzYWdlVHlwZVVJdG9DUztcclxuICAgIChmdW5jdGlvbiAoTWVzc2FnZVR5cGVVSXRvQ1MpIHtcclxuICAgICAgICBNZXNzYWdlVHlwZVVJdG9DU1tcIkVYUE9SVF9DU1NcIl0gPSBcInVpLWNzLWV4cG9ydC1jc3NcIjtcclxuICAgIH0pKE1lc3NhZ2VUeXBlVUl0b0NTIHx8IChNZXNzYWdlVHlwZVVJdG9DUyA9IHt9KSk7XHJcblxyXG4gICAgY29uc3QgaXNOYXZpZ2F0b3JEZWZpbmVkID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgIGNvbnN0IHVzZXJBZ2VudCA9IGlzTmF2aWdhdG9yRGVmaW5lZFxyXG4gICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEgJiZcclxuICAgICAgICAgIEFycmF5LmlzQXJyYXkobmF2aWdhdG9yLnVzZXJBZ2VudERhdGEuYnJhbmRzKVxyXG4gICAgICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhLmJyYW5kc1xyXG4gICAgICAgICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKGJyYW5kKSA9PiBgJHticmFuZC5icmFuZC50b0xvd2VyQ2FzZSgpfSAke2JyYW5kLnZlcnNpb259YFxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIC5qb2luKFwiIFwiKVxyXG4gICAgICAgICAgICA6IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgIDogXCJzb21lIHVzZXJhZ2VudFwiO1xyXG4gICAgY29uc3QgcGxhdGZvcm0gPSBpc05hdmlnYXRvckRlZmluZWRcclxuICAgICAgICA/IG5hdmlnYXRvci51c2VyQWdlbnREYXRhICYmXHJcbiAgICAgICAgICB0eXBlb2YgbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEucGxhdGZvcm0gPT09IFwic3RyaW5nXCJcclxuICAgICAgICAgICAgPyBuYXZpZ2F0b3IudXNlckFnZW50RGF0YS5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIDogbmF2aWdhdG9yLnBsYXRmb3JtLnRvTG93ZXJDYXNlKClcclxuICAgICAgICA6IFwic29tZSBwbGF0Zm9ybVwiO1xyXG4gICAgY29uc3QgaXNDaHJvbWl1bSA9XHJcbiAgICAgICAgdXNlckFnZW50LmluY2x1ZGVzKFwiY2hyb21lXCIpIHx8IHVzZXJBZ2VudC5pbmNsdWRlcyhcImNocm9taXVtXCIpO1xyXG4gICAgY29uc3QgaXNGaXJlZm94ID1cclxuICAgICAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJmaXJlZm94XCIpIHx8XHJcbiAgICAgICAgdXNlckFnZW50LmluY2x1ZGVzKFwidGh1bmRlcmJpcmRcIikgfHxcclxuICAgICAgICB1c2VyQWdlbnQuaW5jbHVkZXMoXCJsaWJyZXdvbGZcIik7XHJcbiAgICBjb25zdCBpc1NhZmFyaSA9IHVzZXJBZ2VudC5pbmNsdWRlcyhcInNhZmFyaVwiKSAmJiAhaXNDaHJvbWl1bTtcclxuICAgIGNvbnN0IGlzV2luZG93cyA9IHBsYXRmb3JtLnN0YXJ0c1dpdGgoXCJ3aW5cIik7XHJcbiAgICBjb25zdCBpc01hY09TID0gcGxhdGZvcm0uc3RhcnRzV2l0aChcIm1hY1wiKTtcclxuICAgIGlzTmF2aWdhdG9yRGVmaW5lZCAmJiBuYXZpZ2F0b3IudXNlckFnZW50RGF0YVxyXG4gICAgICAgID8gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGEubW9iaWxlXHJcbiAgICAgICAgOiB1c2VyQWdlbnQuaW5jbHVkZXMoXCJtb2JpbGVcIik7XHJcbiAgICBjb25zdCBpc1NoYWRvd0RvbVN1cHBvcnRlZCA9IHR5cGVvZiBTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICBjb25zdCBpc01hdGNoTWVkaWFDaGFuZ2VFdmVudExpc3RlbmVyU3VwcG9ydGVkID1cclxuICAgICAgICB0eXBlb2YgTWVkaWFRdWVyeUxpc3QgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgICAgIHR5cGVvZiBNZWRpYVF1ZXJ5TGlzdC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgY29uc3QgaXNMYXllclJ1bGVTdXBwb3J0ZWQgPSB0eXBlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUgPT09IFwiZnVuY3Rpb25cIjtcclxuICAgICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbSA9IHVzZXJBZ2VudC5tYXRjaCgvY2hyb20oPzplfGl1bSkoPzpcXC98ICkoW14gXSspLyk7XHJcbiAgICAgICAgaWYgKG0gJiYgbVsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9KSgpO1xyXG4gICAgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBtID0gdXNlckFnZW50Lm1hdGNoKC8oPzpmaXJlZm94fGxpYnJld29sZikoPzpcXC98ICkoW14gXSspLyk7XHJcbiAgICAgICAgaWYgKG0gJiYgbVsxXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbVsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9KSgpO1xyXG4gICAgY29uc3QgaXNEZWZpbmVkU2VsZWN0b3JTdXBwb3J0ZWQgPSAoKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6ZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgY29uc3QgaXNDU1NDb2xvclNjaGVtZVByb3BTdXBwb3J0ZWQgPSAoKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGlmICghZWwgfHwgdHlwZW9mIGVsLnN0eWxlICE9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbC5zdHlsZS5jb2xvclNjaGVtZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJjb2xvci1zY2hlbWU6IGRhcmtcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBlbC5zdHlsZS5jb2xvclNjaGVtZSA9PT0gXCJkYXJrXCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSkoKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRPS1Jlc3BvbnNlKHVybCwgbWltZVR5cGUsIG9yaWdpbikge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgICAgIGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcIm9taXRcIixcclxuICAgICAgICAgICAgcmVmZXJyZXI6IG9yaWdpblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgaXNGaXJlZm94ICYmXHJcbiAgICAgICAgICAgIG1pbWVUeXBlID09PSBcInRleHQvY3NzXCIgJiZcclxuICAgICAgICAgICAgdXJsLnN0YXJ0c1dpdGgoXCJtb3otZXh0ZW5zaW9uOi8vXCIpICYmXHJcbiAgICAgICAgICAgIHVybC5lbmRzV2l0aChcIi5jc3NcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIG1pbWVUeXBlICYmXHJcbiAgICAgICAgICAgICFyZXNwb25zZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKS5zdGFydHNXaXRoKG1pbWVUeXBlKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pbWUgdHlwZSBtaXNtYXRjaCB3aGVuIGxvYWRpbmcgJHt1cmx9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgICAgICAgYFVuYWJsZSB0byBsb2FkICR7dXJsfSAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEFzRGF0YVVSTCh1cmwsIG1pbWVUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRPS1Jlc3BvbnNlKHVybCwgbWltZVR5cGUpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEFzQmxvYih1cmwsIG1pbWVUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRPS1Jlc3BvbnNlKHVybCwgbWltZVR5cGUpO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiByZWFkUmVzcG9uc2VBc0RhdGFVUkwocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFVUkwgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFVUkw7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkQXNUZXh0KHVybCwgbWltZVR5cGUsIG9yaWdpbikge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0T0tSZXNwb25zZSh1cmwsIG1pbWVUeXBlLCBvcmlnaW4pO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGhyb3dDT1JTRXJyb3IgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxyXG4gICAgICAgICAgICBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFbWJlZGRlZCBEYXJrIFJlYWRlciBjYW5ub3QgYWNjZXNzIGEgY3Jvc3Mtb3JpZ2luIHJlc291cmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiT3ZlcnZpZXcgeW91ciBVUkxzIGFuZCBDT1JTIHBvbGljaWVzIG9yIHVzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYERhcmtSZWFkZXIuc2V0RmV0Y2hNZXRob2QoZmV0Y2g6ICh1cmwpID0+IFByb21pc2U8UmVzcG9uc2U+KSlgLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2VlIGlmIHVzaW5nIGBEYXJrUmVhZGVyLnNldEZldGNoTWV0aG9kKHdpbmRvdy5mZXRjaClgXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJiZWZvcmUgYERhcmtSZWFkZXIuZW5hYmxlKClgIHdvcmtzLlwiXHJcbiAgICAgICAgICAgICAgICBdLmpvaW4oXCIgXCIpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuICAgIGxldCBmZXRjaGVyID0gdGhyb3dDT1JTRXJyb3I7XHJcbiAgICBmdW5jdGlvbiBzZXRGZXRjaE1ldGhvZCQxKGZldGNoKSB7XHJcbiAgICAgICAgaWYgKGZldGNoKSB7XHJcbiAgICAgICAgICAgIGZldGNoZXIgPSBmZXRjaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmZXRjaGVyID0gdGhyb3dDT1JTRXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY2FsbEZldGNoTWV0aG9kKHVybCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaGVyKHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3aW5kb3cuY2hyb21lKSB7XHJcbiAgICAgICAgd2luZG93LmNocm9tZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFjaHJvbWUucnVudGltZSkge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lID0ge307XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXNzYWdlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoLi4uYXJncykge1xyXG4gICAgICAgIGlmIChhcmdzWzBdICYmIGFyZ3NbMF0udHlwZSA9PT0gTWVzc2FnZVR5cGVDU3RvQkcuRkVUQ0gpIHtcclxuICAgICAgICAgICAgY29uc3Qge2lkfSA9IGFyZ3NbMF07XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7dXJsLCByZXNwb25zZVR5cGV9ID0gYXJnc1swXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWxsRmV0Y2hNZXRob2QodXJsKTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVHlwZSA9PT0gXCJkYXRhLXVybFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGF3YWl0IHJlYWRSZXNwb25zZUFzRGF0YVVSTChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXJzLmZvckVhY2goKGNiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGVCR3RvQ1MuRkVUQ0hfUkVTUE9OU0UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdGVuZXJzLmZvckVhY2goKGNiKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGVCR3RvQ1MuRkVUQ0hfUkVTUE9OU0UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkTWVzc2FnZUxpc3RlbmVyKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbWVzc2FnZUxpc3RlbmVycy5hZGQoY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgY29uc3QgbmF0aXZlU2VuZE1lc3NhZ2UgPSBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZTtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICBuYXRpdmVTZW5kTWVzc2FnZS5hcHBseShjaHJvbWUucnVudGltZSwgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UgPSBzZW5kTWVzc2FnZTtcclxuICAgIH1cclxuICAgIGlmICghY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlKSB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlID0ge307XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgY29uc3QgbmF0aXZlQWRkTGlzdGVuZXIgPSBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXI7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyKGFyZ3NbMF0pO1xyXG4gICAgICAgICAgICBuYXRpdmVBZGRMaXN0ZW5lci5hcHBseShjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lciA9ICguLi5hcmdzKSA9PlxyXG4gICAgICAgICAgICBhZGRNZXNzYWdlTGlzdGVuZXIoYXJnc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIFRoZW1lRW5naW5lO1xyXG4gICAgKGZ1bmN0aW9uIChUaGVtZUVuZ2luZSkge1xyXG4gICAgICAgIFRoZW1lRW5naW5lW1wiY3NzRmlsdGVyXCJdID0gXCJjc3NGaWx0ZXJcIjtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcInN2Z0ZpbHRlclwiXSA9IFwic3ZnRmlsdGVyXCI7XHJcbiAgICAgICAgVGhlbWVFbmdpbmVbXCJzdGF0aWNUaGVtZVwiXSA9IFwic3RhdGljVGhlbWVcIjtcclxuICAgICAgICBUaGVtZUVuZ2luZVtcImR5bmFtaWNUaGVtZVwiXSA9IFwiZHluYW1pY1RoZW1lXCI7XHJcbiAgICB9KShUaGVtZUVuZ2luZSB8fCAoVGhlbWVFbmdpbmUgPSB7fSkpO1xyXG5cclxuICAgIHZhciBBdXRvbWF0aW9uTW9kZTtcclxuICAgIChmdW5jdGlvbiAoQXV0b21hdGlvbk1vZGUpIHtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIk5PTkVcIl0gPSBcIlwiO1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiVElNRVwiXSA9IFwidGltZVwiO1xyXG4gICAgICAgIEF1dG9tYXRpb25Nb2RlW1wiU1lTVEVNXCJdID0gXCJzeXN0ZW1cIjtcclxuICAgICAgICBBdXRvbWF0aW9uTW9kZVtcIkxPQ0FUSU9OXCJdID0gXCJsb2NhdGlvblwiO1xyXG4gICAgfSkoQXV0b21hdGlvbk1vZGUgfHwgKEF1dG9tYXRpb25Nb2RlID0ge30pKTtcclxuXHJcbiAgICBjb25zdCBERUZBVUxUX0NPTE9SUyA9IHtcclxuICAgICAgICBkYXJrU2NoZW1lOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzE4MWExYlwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIiNlOGU2ZTNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlnaHRTY2hlbWU6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZGNkYWQ3XCIsXHJcbiAgICAgICAgICAgIHRleHQ6IFwiIzE4MWExYlwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IERFRkFVTFRfVEhFTUUgPSB7XHJcbiAgICAgICAgbW9kZTogMSxcclxuICAgICAgICBicmlnaHRuZXNzOiAxMDAsXHJcbiAgICAgICAgY29udHJhc3Q6IDEwMCxcclxuICAgICAgICBncmF5c2NhbGU6IDAsXHJcbiAgICAgICAgc2VwaWE6IDAsXHJcbiAgICAgICAgdXNlRm9udDogZmFsc2UsXHJcbiAgICAgICAgZm9udEZhbWlseTogaXNNYWNPU1xyXG4gICAgICAgICAgICA/IFwiSGVsdmV0aWNhIE5ldWVcIlxyXG4gICAgICAgICAgICA6IGlzV2luZG93c1xyXG4gICAgICAgICAgICAgID8gXCJTZWdvZSBVSVwiXHJcbiAgICAgICAgICAgICAgOiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgIHRleHRTdHJva2U6IDAsXHJcbiAgICAgICAgZW5naW5lOiBUaGVtZUVuZ2luZS5keW5hbWljVGhlbWUsXHJcbiAgICAgICAgc3R5bGVzaGVldDogXCJcIixcclxuICAgICAgICBkYXJrU2NoZW1lQmFja2dyb3VuZENvbG9yOiBERUZBVUxUX0NPTE9SUy5kYXJrU2NoZW1lLmJhY2tncm91bmQsXHJcbiAgICAgICAgZGFya1NjaGVtZVRleHRDb2xvcjogREVGQVVMVF9DT0xPUlMuZGFya1NjaGVtZS50ZXh0LFxyXG4gICAgICAgIGxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yOiBERUZBVUxUX0NPTE9SUy5saWdodFNjaGVtZS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIGxpZ2h0U2NoZW1lVGV4dENvbG9yOiBERUZBVUxUX0NPTE9SUy5saWdodFNjaGVtZS50ZXh0LFxyXG4gICAgICAgIHNjcm9sbGJhckNvbG9yOiBcIlwiLFxyXG4gICAgICAgIHNlbGVjdGlvbkNvbG9yOiBcImF1dG9cIixcclxuICAgICAgICBzdHlsZVN5c3RlbUNvbnRyb2xzOiAhaXNDU1NDb2xvclNjaGVtZVByb3BTdXBwb3J0ZWQsXHJcbiAgICAgICAgbGlnaHRDb2xvclNjaGVtZTogXCJEZWZhdWx0XCIsXHJcbiAgICAgICAgZGFya0NvbG9yU2NoZW1lOiBcIkRlZmF1bHRcIixcclxuICAgICAgICBpbW1lZGlhdGVNb2RpZnk6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgY29uc3QgZmlsdGVyTW9kZVNpdGVzID0gW1xyXG4gICAgICAgIFwiKi5vZmZpY2VhcHBzLmxpdmUuY29tXCIsXHJcbiAgICAgICAgXCIqLnNoYXJlcG9pbnQuY29tXCIsXHJcbiAgICAgICAgXCJkb2NzLmdvb2dsZS5jb21cIixcclxuICAgICAgICBcIm9uZWRyaXZlLmxpdmUuY29tXCJcclxuICAgIF07XHJcbiAgICAoe1xyXG4gICAgICAgIHNjaGVtZVZlcnNpb246IDAsXHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBmZXRjaE5ld3M6IHRydWUsXHJcbiAgICAgICAgdGhlbWU6IERFRkFVTFRfVEhFTUUsXHJcbiAgICAgICAgcHJlc2V0czogW10sXHJcbiAgICAgICAgY3VzdG9tVGhlbWVzOiBmaWx0ZXJNb2RlU2l0ZXMubWFwKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZW5naW5lID0gaXNDaHJvbWl1bVxyXG4gICAgICAgICAgICAgICAgPyBUaGVtZUVuZ2luZS5zdmdGaWx0ZXJcclxuICAgICAgICAgICAgICAgIDogVGhlbWVFbmdpbmUuY3NzRmlsdGVyO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBbdXJsXSxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiB7Li4uREVGQVVMVF9USEVNRSwgZW5naW5lfSxcclxuICAgICAgICAgICAgICAgIGJ1aWx0SW46IHRydWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBlbmFibGVkQnlEZWZhdWx0OiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZWRGb3I6IFtdLFxyXG4gICAgICAgIGRpc2FibGVkRm9yOiBbXSxcclxuICAgICAgICBjaGFuZ2VCcm93c2VyVGhlbWU6IGZhbHNlLFxyXG4gICAgICAgIHN5bmNTZXR0aW5nczogdHJ1ZSxcclxuICAgICAgICBzeW5jU2l0ZXNGaXhlczogZmFsc2UsXHJcbiAgICAgICAgYXV0b21hdGlvbjoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgbW9kZTogQXV0b21hdGlvbk1vZGUuTk9ORSxcclxuICAgICAgICAgICAgYmVoYXZpb3I6IFwiT25PZmZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgICBhY3RpdmF0aW9uOiBcIjE4OjAwXCIsXHJcbiAgICAgICAgICAgIGRlYWN0aXZhdGlvbjogXCI5OjAwXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICAgIGxhdGl0dWRlOiBudWxsLFxyXG4gICAgICAgICAgICBsb25naXR1ZGU6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXZpZXdOZXdEZXNpZ246IGZhbHNlLFxyXG4gICAgICAgIHByZXZpZXdOZXdlc3REZXNpZ246IGZhbHNlLFxyXG4gICAgICAgIGVuYWJsZUZvclBERjogdHJ1ZSxcclxuICAgICAgICBlbmFibGVGb3JQcm90ZWN0ZWRQYWdlczogZmFsc2UsXHJcbiAgICAgICAgZW5hYmxlQ29udGV4dE1lbnVzOiBmYWxzZSxcclxuICAgICAgICBkZXRlY3REYXJrVGhlbWU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzQXJyYXlMaWtlKGl0ZW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmxlbmd0aCAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9yRWFjaChpdGVtcywgaXRlcmF0b3IpIHtcclxuICAgICAgICBpZiAoaXNBcnJheUxpa2UoaXRlbXMpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IoaXRlbXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRvcihpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHB1c2goYXJyYXksIGFkZGl0aW9uKSB7XHJcbiAgICAgICAgZm9yRWFjaChhZGRpdGlvbiwgKGEpID0+IGFycmF5LnB1c2goYSkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9BcnJheShpdGVtcykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW1zW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nSW5mbyguLi5hcmdzKSB7fVxyXG4gICAgZnVuY3Rpb24gbG9nV2FybiguLi5hcmdzKSB7fVxyXG5cclxuICAgIGZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGxhc3RBcmdzO1xyXG4gICAgICAgIGNvbnN0IHRocm90dGxlZCA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGxhc3RBcmdzID0gYXJncztcclxuICAgICAgICAgICAgaWYgKGZyYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soLi4ubGFzdEFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBlbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soLi4ubGFzdEFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWVJZCk7XHJcbiAgICAgICAgICAgIHBlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0aHJvdHRsZWQsIHtjYW5jZWx9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFzeW5jVGFza3NRdWV1ZSgpIHtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IFtdO1xyXG4gICAgICAgIGxldCBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBydW5UYXNrcygpIHtcclxuICAgICAgICAgICAgbGV0IHRhc2s7XHJcbiAgICAgICAgICAgIHdoaWxlICgodGFzayA9IHRhc2tzLnNoaWZ0KCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnJhbWVJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZCh0YXNrKSB7XHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIGlmICghZnJhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShydW5UYXNrcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY2FuY2VsKCkge1xyXG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xyXG4gICAgICAgICAgICBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHthZGQsIGNhbmNlbH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBkZWxheVRva2VucyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZU9uY2UodG9rZW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKGRlbGF5VG9rZW5zLmhhcyh0b2tlbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheVRva2Vucy5hZGQodG9rZW4pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGF5VG9rZW5zLmRlbGV0ZSh0b2tlbik7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RHVyYXRpb24odGltZSkge1xyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgaWYgKHRpbWUuc2Vjb25kcykge1xyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSB0aW1lLnNlY29uZHMgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZS5taW51dGVzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUubWludXRlcyAqIDYwICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWUuaG91cnMpIHtcclxuICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZS5ob3VycyAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZS5kYXlzKSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uICs9IHRpbWUuZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcclxuICAgICAgICBub2RlICYmIG5vZGUucGFyZW50Tm9kZSAmJiBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXRjaEZvck5vZGVQb3NpdGlvbihub2RlLCBtb2RlLCBvblJlc3RvcmUgPSBGdW5jdGlvbi5wcm90b3R5cGUpIHtcclxuICAgICAgICBjb25zdCBNQVhfQVRURU1QVFNfQ09VTlQgPSAxMDtcclxuICAgICAgICBjb25zdCBSRVRSWV9USU1FT1VUID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDJ9KTtcclxuICAgICAgICBjb25zdCBBVFRFTVBUU19JTlRFUlZBTCA9IGdldER1cmF0aW9uKHtzZWNvbmRzOiAxMH0pO1xyXG4gICAgICAgIGNvbnN0IHByZXZTaWJsaW5nID0gbm9kZS5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICBcIlVuYWJsZSB0byB3YXRjaCBmb3Igbm9kZSBwb3NpdGlvbjogcGFyZW50IGVsZW1lbnQgbm90IGZvdW5kXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwicHJldi1zaWJsaW5nXCIgJiYgIXByZXZTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgIFwiVW5hYmxlIHRvIHdhdGNoIGZvciBub2RlIHBvc2l0aW9uOiB0aGVyZSBpcyBubyBwcmV2aW91cyBzaWJsaW5nXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcclxuICAgICAgICBsZXQgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IHJlc3RvcmUgPSB0aHJvdHRsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHRlbXB0cysrO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ZW1wdHMgPj0gTUFYX0FUVEVNUFRTX0NPVU5UKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm93IC0gc3RhcnQgPCBBVFRFTVBUU19JTlRFUlZBTCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFJFVFJZX1RJTUVPVVQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbm93O1xyXG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMgPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSBcImhlYWRcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nICYmIHByZXZTaWJsaW5nLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09IFwicHJldi1zaWJsaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2libGluZy5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHByZXZTaWJsaW5nLnBhcmVudE5vZGUgIT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcmVudChwcmV2U2libGluZy5wYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gXCJoZWFkXCIgJiYgIXBhcmVudC5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gZG9jdW1lbnQuaGVhZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgICAgICAgICAgbm9kZSxcclxuICAgICAgICAgICAgICAgIHByZXZTaWJsaW5nICYmIHByZXZTaWJsaW5nLmlzQ29ubmVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwcmV2U2libGluZy5uZXh0U2libGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIDogcGFyZW50LmZpcnN0Q2hpbGRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICAgICAgb25SZXN0b3JlICYmIG9uUmVzdG9yZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAobW9kZSA9PT0gXCJoZWFkXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAobm9kZS5wYXJlbnROb2RlICE9PSBwYXJlbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW5vZGUucGFyZW50Tm9kZS5pc0Nvbm5lY3RlZCkpIHx8XHJcbiAgICAgICAgICAgICAgICAobW9kZSA9PT0gXCJwcmV2LXNpYmxpbmdcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucHJldmlvdXNTaWJsaW5nICE9PSBwcmV2U2libGluZylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0b3JlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBydW4gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocGFyZW50LCB7Y2hpbGRMaXN0OiB0cnVlfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzdG9wID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZXN0b3JlLmNhbmNlbCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc2tpcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVBhcmVudCA9IChwYXJlbnROb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgcnVuKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBydW4oKTtcclxuICAgICAgICByZXR1cm4ge3J1biwgc3RvcCwgc2tpcH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpdGVyYXRlU2hhZG93SG9zdHMocm9vdCwgaXRlcmF0b3IpIHtcclxuICAgICAgICBpZiAocm9vdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcclxuICAgICAgICAgICAgcm9vdCxcclxuICAgICAgICAgICAgTm9kZUZpbHRlci5TSE9XX0VMRU1FTlQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFjY2VwdE5vZGUobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlLnNoYWRvd1Jvb3QgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IE5vZGVGaWx0ZXIuRklMVEVSX1NLSVBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgIGxldCBub2RlID0gcm9vdC5zaGFkb3dSb290ID8gd2Fsa2VyLmN1cnJlbnROb2RlIDogd2Fsa2VyLm5leHROb2RlKCk7XHJcbiAgICAgICAgICAgIG5vZGUgIT0gbnVsbDtcclxuICAgICAgICAgICAgbm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucyhcInN1cmZpbmdrZXlzX2hpbnRzX2hvc3RcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZXJhdG9yKG5vZGUpO1xyXG4gICAgICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMobm9kZS5zaGFkb3dSb290LCBpdGVyYXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGlzRE9NUmVhZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gc2V0SXNET01SZWFkeShuZXdGdW5jKSB7XHJcbiAgICAgICAgaXNET01SZWFkeSA9IG5ld0Z1bmM7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWFkeVN0YXRlTGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gYWRkRE9NUmVhZHlMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIGlzRE9NUmVhZHkoKSA/IGxpc3RlbmVyKCkgOiByZWFkeVN0YXRlTGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVET01SZWFkeUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNSZWFkeVN0YXRlQ29tcGxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaXNSZWFkeVN0YXRlQ29tcGxldGUoKVxyXG4gICAgICAgICAgICA/IGxpc3RlbmVyKClcclxuICAgICAgICAgICAgOiByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICBjb25zdCBvblJlYWR5U3RhdGVDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc0RPTVJlYWR5KCkpIHtcclxuICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVhZHlTdGF0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVhZHlTdGF0ZUNvbXBsZXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlYWR5c3RhdGVjaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25SZWFkeVN0YXRlQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBvblJlYWR5U3RhdGVDaGFuZ2UpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgSFVHRV9NVVRBVElPTlNfQ09VTlQgPSAxMDAwO1xyXG4gICAgZnVuY3Rpb24gaXNIdWdlTXV0YXRpb24obXV0YXRpb25zKSB7XHJcbiAgICAgICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPiBIVUdFX01VVEFUSU9OU19DT1VOVCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFkZGVkTm9kZXNDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtdXRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWRkZWROb2Rlc0NvdW50ICs9IG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGFkZGVkTm9kZXNDb3VudCA+IEhVR0VfTVVUQVRJT05TX0NPVU5UKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRFbGVtZW50c1RyZWVPcGVyYXRpb25zKG11dGF0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9ucyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBjb25zdCBkZWxldGlvbnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgY29uc3QgbW92ZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG0pID0+IHtcclxuICAgICAgICAgICAgZm9yRWFjaChtLmFkZGVkTm9kZXMsIChuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5hZGQobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3JFYWNoKG0ucmVtb3ZlZE5vZGVzLCAobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4uaXNDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZXMuYWRkKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbnMuZGVsZXRlKG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0aW9ucy5hZGQobik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkdXBsaWNhdGVBZGRpdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBkdXBsaWNhdGVEZWxldGlvbnMgPSBbXTtcclxuICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaCgobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWRkaXRpb25zLmhhcyhub2RlLnBhcmVudEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVBZGRpdGlvbnMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkZWxldGlvbnMuaGFzKG5vZGUucGFyZW50RWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZURlbGV0aW9ucy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZHVwbGljYXRlQWRkaXRpb25zLmZvckVhY2goKG5vZGUpID0+IGFkZGl0aW9ucy5kZWxldGUobm9kZSkpO1xyXG4gICAgICAgIGR1cGxpY2F0ZURlbGV0aW9ucy5mb3JFYWNoKChub2RlKSA9PiBkZWxldGlvbnMuZGVsZXRlKG5vZGUpKTtcclxuICAgICAgICByZXR1cm4ge2FkZGl0aW9ucywgbW92ZXMsIGRlbGV0aW9uc307XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3Qgb3B0aW1pemVkVHJlZUNhbGxiYWNrcyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPcHRpbWl6ZWRUcmVlT2JzZXJ2ZXIocm9vdCwgY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgbGV0IG9ic2VydmVyO1xyXG4gICAgICAgIGxldCBvYnNlcnZlckNhbGxiYWNrcztcclxuICAgICAgICBsZXQgZG9tUmVhZHlMaXN0ZW5lcjtcclxuICAgICAgICBpZiAob3B0aW1pemVkVHJlZU9ic2VydmVycy5oYXMocm9vdCkpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBvcHRpbWl6ZWRUcmVlT2JzZXJ2ZXJzLmdldChyb290KTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MgPSBvcHRpbWl6ZWRUcmVlQ2FsbGJhY2tzLmdldChvYnNlcnZlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGhhZEh1Z2VNdXRhdGlvbnNCZWZvcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHN1YnNjcmliZWRGb3JSZWFkeVN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzSHVnZU11dGF0aW9uKG11dGF0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhZEh1Z2VNdXRhdGlvbnNCZWZvcmUgfHwgaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmZvckVhY2goKHtvbkh1Z2VNdXRhdGlvbnN9KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IdWdlTXV0YXRpb25zKHJvb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc3Vic2NyaWJlZEZvclJlYWR5U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUmVhZHlMaXN0ZW5lciA9ICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKCh7b25IdWdlTXV0YXRpb25zfSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkh1Z2VNdXRhdGlvbnMocm9vdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZERPTVJlYWR5TGlzdGVuZXIoZG9tUmVhZHlMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZWRGb3JSZWFkeVN0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGFkSHVnZU11dGF0aW9uc0JlZm9yZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzT3BlcmF0aW9ucyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEVsZW1lbnRzVHJlZU9wZXJhdGlvbnMobXV0YXRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5mb3JFYWNoKCh7b25NaW5vck11dGF0aW9uc30pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTWlub3JNdXRhdGlvbnMocm9vdCwgZWxlbWVudHNPcGVyYXRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgICAgICAgICAgb3B0aW1pemVkVHJlZU9ic2VydmVycy5zZXQocm9vdCwgb2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5zZXQob2JzZXJ2ZXIsIG9ic2VydmVyQ2FsbGJhY2tzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MuYWRkKGNhbGxiYWNrcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyQ2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbVJlYWR5TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVET01SZWFkeUxpc3RlbmVyKGRvbVJlYWR5TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyQ2FsbGJhY2tzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW1pemVkVHJlZUNhbGxiYWNrcy5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGltaXplZFRyZWVPYnNlcnZlcnMuZGVsZXRlKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNYXRjaGVzKHJlZ2V4LCBpbnB1dCwgZ3JvdXAgPSAwKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgIGxldCBtO1xyXG4gICAgICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMoaW5wdXQpKSkge1xyXG4gICAgICAgICAgICBtYXRjaGVzLnB1c2gobVtncm91cF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0Y2hlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEhhc2hDb2RlKHRleHQpIHtcclxuICAgICAgICBjb25zdCBsZW4gPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICBsZXQgaGFzaCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjID0gdGV4dC5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCArIGMpICYgNDI5NDk2NzI5NTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhc2g7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHBTcGVjaWFsQ2hhcnMoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZUFsbCgvW1xcXiQuKis/XFwoXFwpXFxbXFxde318XFwtXFxcXF0vZywgXCJcXFxcJCZcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRoZXNlc1JhbmdlKGlucHV0LCBzZWFyY2hTdGFydEluZGV4ID0gMCkge1xyXG4gICAgICAgIHJldHVybiBnZXRPcGVuQ2xvc2VSYW5nZShpbnB1dCwgc2VhcmNoU3RhcnRJbmRleCwgXCIoXCIsIFwiKVwiLCBbXSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRPcGVuQ2xvc2VSYW5nZShcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBzZWFyY2hTdGFydEluZGV4LFxyXG4gICAgICAgIG9wZW5Ub2tlbixcclxuICAgICAgICBjbG9zZVRva2VuLFxyXG4gICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICkge1xyXG4gICAgICAgIGxldCBpbmRleE9mO1xyXG4gICAgICAgIGlmIChleGNsdWRlUmFuZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpbmRleE9mID0gKHRva2VuLCBwb3MpID0+IGlucHV0LmluZGV4T2YodG9rZW4sIHBvcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5kZXhPZiA9ICh0b2tlbiwgcG9zKSA9PlxyXG4gICAgICAgICAgICAgICAgaW5kZXhPZkV4Y2x1ZGluZyhpbnB1dCwgdG9rZW4sIHBvcywgZXhjbHVkZVJhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHtsZW5ndGh9ID0gaW5wdXQ7XHJcbiAgICAgICAgbGV0IGRlcHRoID0gMDtcclxuICAgICAgICBsZXQgZmlyc3RPcGVuSW5kZXggPSAtMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc2VhcmNoU3RhcnRJbmRleDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlbkluZGV4ID0gaW5kZXhPZihvcGVuVG9rZW4sIGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5JbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpcnN0T3BlbkluZGV4ID0gb3BlbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgZGVwdGgrKztcclxuICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZUluZGV4ID0gaW5kZXhPZihjbG9zZVRva2VuLCBpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9zZUluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlbkluZGV4ID0gaW5kZXhPZihvcGVuVG9rZW4sIGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wZW5JbmRleCA8IDAgfHwgY2xvc2VJbmRleCA8PSBvcGVuSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge3N0YXJ0OiBmaXJzdE9wZW5JbmRleCwgZW5kOiBjbG9zZUluZGV4ICsgMX07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBjbG9zZUluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXB0aCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGkgPSBvcGVuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpbmRleE9mRXhjbHVkaW5nKGlucHV0LCBzZWFyY2gsIHBvc2l0aW9uLCBleGNsdWRlUmFuZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgaSA9IGlucHV0LmluZGV4T2Yoc2VhcmNoLCBwb3NpdGlvbik7XHJcbiAgICAgICAgY29uc3QgZXhjbHVzaW9uID0gZXhjbHVkZVJhbmdlcy5maW5kKChyKSA9PiBpID49IHIuc3RhcnQgJiYgaSA8IHIuZW5kKTtcclxuICAgICAgICBpZiAoZXhjbHVzaW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleE9mRXhjbHVkaW5nKFxyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICBleGNsdXNpb24uZW5kLFxyXG4gICAgICAgICAgICAgICAgZXhjbHVkZVJhbmdlc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNwbGl0RXhjbHVkaW5nKGlucHV0LCBzZXBhcmF0b3IsIGV4Y2x1ZGVSYW5nZXMpIHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IFtdO1xyXG4gICAgICAgIGxldCBjb21tYUluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IGN1cnJJbmRleCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAoY29tbWFJbmRleCA9IGluZGV4T2ZFeGNsdWRpbmcoXHJcbiAgICAgICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcixcclxuICAgICAgICAgICAgICAgIGN1cnJJbmRleCxcclxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICAgICAgICAgKSkgPj0gMFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJySW5kZXgsIGNvbW1hSW5kZXgpLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGN1cnJJbmRleCA9IGNvbW1hSW5kZXggKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJ0cy5wdXNoKGlucHV0LnN1YnN0cmluZyhjdXJySW5kZXgpLnRyaW0oKSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnRzO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBhbmNob3I7XHJcbiAgICBjb25zdCBwYXJzZWRVUkxDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIGZpeEJhc2VVUkwoJHVybCkge1xyXG4gICAgICAgIGlmICghYW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbmNob3IuaHJlZiA9ICR1cmw7XHJcbiAgICAgICAgcmV0dXJuIGFuY2hvci5ocmVmO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VVUkwoJHVybCwgJGJhc2UgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7JHVybH0keyRiYXNlID8gYDskeyRiYXNlfWAgOiBcIlwifWA7XHJcbiAgICAgICAgaWYgKHBhcnNlZFVSTENhY2hlLmhhcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRVUkxDYWNoZS5nZXQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCRiYXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IG5ldyBVUkwoJHVybCwgZml4QmFzZVVSTCgkYmFzZSkpO1xyXG4gICAgICAgICAgICBwYXJzZWRVUkxDYWNoZS5zZXQoa2V5LCBwYXJzZWRVUkwpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkVVJMO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJzZWRVUkwgPSBuZXcgVVJMKGZpeEJhc2VVUkwoJHVybCkpO1xyXG4gICAgICAgIHBhcnNlZFVSTENhY2hlLnNldCgkdXJsLCBwYXJzZWRVUkwpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZWRVUkw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRBYnNvbHV0ZVVSTCgkYmFzZSwgJHJlbGF0aXZlKSB7XHJcbiAgICAgICAgaWYgKCRyZWxhdGl2ZS5tYXRjaCgvXmRhdGFcXFxcP1xcOi8pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAkcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgvXlxcL1xcLy8udGVzdCgkcmVsYXRpdmUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtsb2NhdGlvbi5wcm90b2NvbH0keyRyZWxhdGl2ZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBiID0gcGFyc2VVUkwoJGJhc2UpO1xyXG4gICAgICAgIGNvbnN0IGEgPSBwYXJzZVVSTCgkcmVsYXRpdmUsIGIuaHJlZik7XHJcbiAgICAgICAgcmV0dXJuIGEuaHJlZjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzUmVsYXRpdmVIcmVmT25BYnNvbHV0ZVBhdGgoaHJlZikge1xyXG4gICAgICAgIGlmIChocmVmLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdXJsID0gcGFyc2VVUkwoaHJlZik7XHJcbiAgICAgICAgaWYgKHVybC5wcm90b2NvbCAhPT0gbG9jYXRpb24ucHJvdG9jb2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXJsLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cmwucG9ydCAhPT0gbG9jYXRpb24ucG9ydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVDU1NSdWxlcyhydWxlcywgaXRlcmF0ZSwgb25JbXBvcnRFcnJvcikge1xyXG4gICAgICAgIGZvckVhY2gocnVsZXMsIChydWxlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1N0eWxlUnVsZShydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZShydWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0ltcG9ydFJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlLnN0eWxlU2hlZXQuY3NzUnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW1wb3J0RXJyb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbXBvcnRFcnJvcj8uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNNZWRpYVJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gQXJyYXkuZnJvbShydWxlLm1lZGlhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2NyZWVuT3JBbGxPclF1ZXJ5ID0gbWVkaWEuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAobSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5zdGFydHNXaXRoKFwic2NyZWVuXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc3RhcnRzV2l0aChcImFsbFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLnN0YXJ0c1dpdGgoXCIoXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNQcmludE9yU3BlZWNoID0gbWVkaWEuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAobSkgPT4gbS5zdGFydHNXaXRoKFwicHJpbnRcIikgfHwgbS5zdGFydHNXaXRoKFwic3BlZWNoXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2NyZWVuT3JBbGxPclF1ZXJ5IHx8ICFpc1ByaW50T3JTcGVlY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZS5jc3NSdWxlcywgaXRlcmF0ZSwgb25JbXBvcnRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNTdXBwb3J0c1J1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChDU1Muc3VwcG9ydHMocnVsZS5jb25kaXRpb25UZXh0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVDU1NSdWxlcyhydWxlLmNzc1J1bGVzLCBpdGVyYXRlLCBvbkltcG9ydEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0xheWVyUnVsZShydWxlKSkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZUNTU1J1bGVzKHJ1bGUuY3NzUnVsZXMsIGl0ZXJhdGUsIG9uSW1wb3J0RXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG9ydGhhbmRWYXJEZXBlbmRhbnRQcm9wZXJ0aWVzID0gW1xyXG4gICAgICAgIFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgIFwiYm9yZGVyXCIsXHJcbiAgICAgICAgXCJib3JkZXItY29sb3JcIixcclxuICAgICAgICBcImJvcmRlci1ib3R0b21cIixcclxuICAgICAgICBcImJvcmRlci1sZWZ0XCIsXHJcbiAgICAgICAgXCJib3JkZXItcmlnaHRcIixcclxuICAgICAgICBcImJvcmRlci10b3BcIixcclxuICAgICAgICBcIm91dGxpbmVcIixcclxuICAgICAgICBcIm91dGxpbmUtY29sb3JcIlxyXG4gICAgXTtcclxuICAgIGNvbnN0IHNob3J0aGFuZFZhckRlcFByb3BSZWdleHBzID0gaXNTYWZhcmlcclxuICAgICAgICA/IHNob3J0aGFuZFZhckRlcGVuZGFudFByb3BlcnRpZXMubWFwKChwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChgJHtwcm9wfTpcXFxccyooLio/KVxcXFxzKjtgKTtcclxuICAgICAgICAgICAgICByZXR1cm4gW3Byb3AsIHJlZ2V4cF07XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoc3R5bGUsIGl0ZXJhdGUpIHtcclxuICAgICAgICBmb3JFYWNoKHN0eWxlLCAocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5KS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVyYXRlKHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY3NzVGV4dCA9IHN0eWxlLmNzc1RleHQ7XHJcbiAgICAgICAgaWYgKGNzc1RleHQuaW5jbHVkZXMoXCJ2YXIoXCIpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1NhZmFyaSkge1xyXG4gICAgICAgICAgICAgICAgc2hvcnRoYW5kVmFyRGVwUHJvcFJlZ2V4cHMuZm9yRWFjaCgoW3Byb3AsIHJlZ2V4cF0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGNzc1RleHQubWF0Y2gocmVnZXhwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gbWF0Y2hbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKHByb3AsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG9ydGhhbmRWYXJEZXBlbmRhbnRQcm9wZXJ0aWVzLmZvckVhY2goKHByb3ApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgJiYgdmFsLmluY2x1ZGVzKFwidmFyKFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlKHByb3AsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjc3NUZXh0LmluY2x1ZGVzKFwiYmFja2dyb3VuZC1jb2xvcjogO1wiKSAmJlxyXG4gICAgICAgICAgICAhc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcImJhY2tncm91bmRcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaGFuZGxlRW1wdHlTaG9ydGhhbmQoXCJiYWNrZ3JvdW5kXCIsIHN0eWxlLCBpdGVyYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICBjc3NUZXh0LmluY2x1ZGVzKFwiYm9yZGVyLVwiKSAmJlxyXG4gICAgICAgICAgICBjc3NUZXh0LmluY2x1ZGVzKFwiLWNvbG9yOiA7XCIpICYmXHJcbiAgICAgICAgICAgICFzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiYm9yZGVyXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUVtcHR5U2hvcnRoYW5kKFwiYm9yZGVyXCIsIHN0eWxlLCBpdGVyYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVFbXB0eVNob3J0aGFuZChzaG9ydGhhbmQsIHN0eWxlLCBpdGVyYXRlKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50UnVsZSA9IHN0eWxlLnBhcmVudFJ1bGU7XHJcbiAgICAgICAgaWYgKGlzU3R5bGVSdWxlKHBhcmVudFJ1bGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUNTU1RleHQgPVxyXG4gICAgICAgICAgICAgICAgcGFyZW50UnVsZS5wYXJlbnRTdHlsZVNoZWV0Py5vd25lck5vZGU/LnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBpZiAoc291cmNlQ1NTVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGVzY2FwZWRTZWxlY3RvciA9IGVzY2FwZVJlZ0V4cFNwZWNpYWxDaGFycyhcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRSdWxlLnNlbGVjdG9yVGV4dFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGVzY2FwZWRTZWxlY3RvciA9IGVzY2FwZWRTZWxlY3Rvci5yZXBsYWNlQWxsKC9cXHMrL2csIFwiXFxcXHMqXCIpO1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlZFNlbGVjdG9yID0gZXNjYXBlZFNlbGVjdG9yLnJlcGxhY2VBbGwoLzo6L2csIFwiOjo/XCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChcclxuICAgICAgICAgICAgICAgICAgICBgJHtlc2NhcGVkU2VsZWN0b3J9XFxcXHMqe1tefV0qJHtzaG9ydGhhbmR9OlxcXFxzKihbXjt9XSspYFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gc291cmNlQ1NTVGV4dC5tYXRjaChyZWdleHApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0ZShzaG9ydGhhbmQsIG1hdGNoWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG9ydGhhbmQgPT09IFwiYmFja2dyb3VuZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIiNmZmZmZmZcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjc3NVUkxSZWdleCA9IC91cmxcXCgoKCcuKj8nKXwoXCIuKj9cIil8KFteXFwpXSo/KSlcXCkvZztcclxuICAgIGNvbnN0IGNzc0ltcG9ydFJlZ2V4ID1cclxuICAgICAgICAvQGltcG9ydFxccyoodXJsXFwoKT8oKCcuKz8nKXwoXCIuKz9cIil8KFteXFwpXSo/KSlcXCk/ID8oc2NyZWVuKT87Py9naTtcclxuICAgIGZ1bmN0aW9uIGdldENTU1VSTFZhbHVlKGNzc1VSTCkge1xyXG4gICAgICAgIHJldHVybiBjc3NVUkxcclxuICAgICAgICAgICAgLnRyaW0oKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvW1xcblxcclxcXFxdKy9nLCBcIlwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXnVybFxcKCguKilcXCkkLywgXCIkMVwiKVxyXG4gICAgICAgICAgICAudHJpbSgpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXCIoLiopXCIkLywgXCIkMVwiKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvXicoLiopJyQvLCBcIiQxXCIpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oPzpcXFxcKC4pKS9nLCBcIiQxXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q1NTQmFzZUJhdGgodXJsKSB7XHJcbiAgICAgICAgY29uc3QgY3NzVVJMID0gcGFyc2VVUkwodXJsKTtcclxuICAgICAgICByZXR1cm4gYCR7Y3NzVVJMLm9yaWdpbn0ke2Nzc1VSTC5wYXRobmFtZS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC8oXFwvKShbXlxcL10rKSQvaSwgXCIkMVwiKX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU1JlbGF0aXZlVVJMc1dpdGhBYnNvbHV0ZSgkY3NzLCBjc3NCYXNlUGF0aCkge1xyXG4gICAgICAgIHJldHVybiAkY3NzLnJlcGxhY2UoY3NzVVJMUmVnZXgsIChtYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gZ2V0Q1NTVVJMVmFsdWUobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVVUkwgPSBnZXRBYnNvbHV0ZVVSTChjc3NCYXNlUGF0aCwgdXJsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVzY2FwZWRVUkwgPSBhYnNvbHV0ZVVSTC5yZXBsYWNlQWxsKFwiJ1wiLCBcIlxcXFwnXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGB1cmwoJyR7ZXNjYXBlZFVSTH0nKWA7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmb250RmFjZVJlZ2V4ID0gL0Bmb250LWZhY2VcXHMqe1tefV0qfS9nO1xyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU0ZvbnRGYWNlKCRjc3MpIHtcclxuICAgICAgICByZXR1cm4gJGNzcy5yZXBsYWNlKGZvbnRGYWNlUmVnZXgsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3R5bGVSdWxlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCBpbXBvcnRSdWxlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCBtZWRpYVJ1bGVzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IHN1cHBvcnRzUnVsZXMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3QgbGF5ZXJSdWxlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBmdW5jdGlvbiBpc1N0eWxlUnVsZShydWxlKSB7XHJcbiAgICAgICAgaWYgKCFydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0eWxlUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocnVsZS5zZWxlY3RvclRleHQpIHtcclxuICAgICAgICAgICAgc3R5bGVSdWxlcy5hZGQocnVsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0ltcG9ydFJ1bGUocnVsZSkge1xyXG4gICAgICAgIGlmICghcnVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHlsZVJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbXBvcnRSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChydWxlLmhyZWYpIHtcclxuICAgICAgICAgICAgaW1wb3J0UnVsZXMuYWRkKHJ1bGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNNZWRpYVJ1bGUocnVsZSkge1xyXG4gICAgICAgIGlmICghcnVsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdHlsZVJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZWRpYVJ1bGVzLmhhcyhydWxlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJ1bGUubWVkaWEpIHtcclxuICAgICAgICAgICAgbWVkaWFSdWxlcy5hZGQocnVsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1N1cHBvcnRzUnVsZShydWxlKSB7XHJcbiAgICAgICAgaWYgKCFydWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0eWxlUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1cHBvcnRzUnVsZXMuaGFzKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N1cHBvcnRzUnVsZSkge1xyXG4gICAgICAgICAgICBzdXBwb3J0c1J1bGVzLmFkZChydWxlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzTGF5ZXJSdWxlKHJ1bGUpIHtcclxuICAgICAgICBpZiAoIXJ1bGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3R5bGVSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGF5ZXJSdWxlcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0xheWVyUnVsZVN1cHBvcnRlZCAmJiBydWxlIGluc3RhbmNlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUpIHtcclxuICAgICAgICAgICAgbGF5ZXJSdWxlcy5hZGQocnVsZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZXZhbE1hdGgoZXhwcmVzc2lvbikge1xyXG4gICAgICAgIGNvbnN0IHJwblN0YWNrID0gW107XHJcbiAgICAgICAgY29uc3Qgd29ya2luZ1N0YWNrID0gW107XHJcbiAgICAgICAgbGV0IGxhc3RUb2tlbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZXhwcmVzc2lvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IGV4cHJlc3Npb25baV07XHJcbiAgICAgICAgICAgIGlmICghdG9rZW4gfHwgdG9rZW4gPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3BlcmF0b3JzLmhhcyh0b2tlbikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wID0gb3BlcmF0b3JzLmdldCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAod29ya2luZ1N0YWNrLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRPcCA9IG9wZXJhdG9ycy5nZXQod29ya2luZ1N0YWNrWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRPcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wLmxlc3NPckVxdWFsVGhhbihjdXJyZW50T3ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJwblN0YWNrLnB1c2god29ya2luZ1N0YWNrLnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHdvcmtpbmdTdGFjay51bnNoaWZ0KHRva2VuKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghbGFzdFRva2VuIHx8IG9wZXJhdG9ycy5oYXMobGFzdFRva2VuKSkge1xyXG4gICAgICAgICAgICAgICAgcnBuU3RhY2sucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBycG5TdGFja1tycG5TdGFjay5sZW5ndGggLSAxXSArPSB0b2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcnBuU3RhY2sucHVzaCguLi53b3JraW5nU3RhY2spO1xyXG4gICAgICAgIGNvbnN0IHN0YWNrID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJwblN0YWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wID0gb3BlcmF0b3JzLmdldChycG5TdGFja1tpXSk7XHJcbiAgICAgICAgICAgIGlmIChvcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IHN0YWNrLnNwbGljZSgwLCAyKTtcclxuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gob3AuZXhlYyhhcmdzWzFdLCBhcmdzWzBdKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay51bnNoaWZ0KHBhcnNlRmxvYXQocnBuU3RhY2tbaV0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhY2tbMF07XHJcbiAgICB9XHJcbiAgICBjbGFzcyBPcGVyYXRvciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlY2VkZW5jZSwgbWV0aG9kKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlY2VuZGNlID0gcHJlY2VkZW5jZTtcclxuICAgICAgICAgICAgdGhpcy5leGVjTWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleGVjKGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4ZWNNZXRob2QobGVmdCwgcmlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXNzT3JFcXVhbFRoYW4ob3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlY2VuZGNlIDw9IG9wLnByZWNlbmRjZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcGVyYXRvcnMgPSBuZXcgTWFwKFtcclxuICAgICAgICBbXCIrXCIsIG5ldyBPcGVyYXRvcigxLCAobGVmdCwgcmlnaHQpID0+IGxlZnQgKyByaWdodCldLFxyXG4gICAgICAgIFtcIi1cIiwgbmV3IE9wZXJhdG9yKDEsIChsZWZ0LCByaWdodCkgPT4gbGVmdCAtIHJpZ2h0KV0sXHJcbiAgICAgICAgW1wiKlwiLCBuZXcgT3BlcmF0b3IoMiwgKGxlZnQsIHJpZ2h0KSA9PiBsZWZ0ICogcmlnaHQpXSxcclxuICAgICAgICBbXCIvXCIsIG5ldyBPcGVyYXRvcigyLCAobGVmdCwgcmlnaHQpID0+IGxlZnQgLyByaWdodCldXHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCBpc1N5c3RlbURhcmtNb2RlRW5hYmxlZCA9ICgpID0+XHJcbiAgICAgICAgbWF0Y2hNZWRpYShcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIikubWF0Y2hlcztcclxuXHJcbiAgICBjb25zdCBoc2xhUGFyc2VDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IHJnYmFQYXJzZUNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gcGFyc2VDb2xvcldpdGhDYWNoZSgkY29sb3IpIHtcclxuICAgICAgICAkY29sb3IgPSAkY29sb3IudHJpbSgpO1xyXG4gICAgICAgIGlmIChyZ2JhUGFyc2VDYWNoZS5oYXMoJGNvbG9yKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmdiYVBhcnNlQ2FjaGUuZ2V0KCRjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgkY29sb3IuaW5jbHVkZXMoXCJjYWxjKFwiKSkge1xyXG4gICAgICAgICAgICAkY29sb3IgPSBsb3dlckNhbGNFeHByZXNzaW9uKCRjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gcGFyc2UoJGNvbG9yKTtcclxuICAgICAgICBjb2xvciAmJiByZ2JhUGFyc2VDYWNoZS5zZXQoJGNvbG9yLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VUb0hTTFdpdGhDYWNoZShjb2xvcikge1xyXG4gICAgICAgIGlmIChoc2xhUGFyc2VDYWNoZS5oYXMoY29sb3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoc2xhUGFyc2VDYWNoZS5nZXQoY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yKTtcclxuICAgICAgICBpZiAoIXJnYikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaHNsID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICBoc2xhUGFyc2VDYWNoZS5zZXQoY29sb3IsIGhzbCk7XHJcbiAgICAgICAgcmV0dXJuIGhzbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyQ29sb3JDYWNoZSgpIHtcclxuICAgICAgICBoc2xhUGFyc2VDYWNoZS5jbGVhcigpO1xyXG4gICAgICAgIHJnYmFQYXJzZUNhY2hlLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoc2xUb1JHQih7aCwgcywgbCwgYSA9IDF9KSB7XHJcbiAgICAgICAgaWYgKHMgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgW3IsIGIsIGddID0gW2wsIGwsIGxdLm1hcCgoeCkgPT4gTWF0aC5yb3VuZCh4ICogMjU1KSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7ciwgZywgYiwgYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGMgPSAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpICogcztcclxuICAgICAgICBjb25zdCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSk7XHJcbiAgICAgICAgY29uc3QgbSA9IGwgLSBjIC8gMjtcclxuICAgICAgICBjb25zdCBbciwgZywgYl0gPSAoXHJcbiAgICAgICAgICAgIGggPCA2MFxyXG4gICAgICAgICAgICAgICAgPyBbYywgeCwgMF1cclxuICAgICAgICAgICAgICAgIDogaCA8IDEyMFxyXG4gICAgICAgICAgICAgICAgICA/IFt4LCBjLCAwXVxyXG4gICAgICAgICAgICAgICAgICA6IGggPCAxODBcclxuICAgICAgICAgICAgICAgICAgICA/IFswLCBjLCB4XVxyXG4gICAgICAgICAgICAgICAgICAgIDogaCA8IDI0MFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBbMCwgeCwgY11cclxuICAgICAgICAgICAgICAgICAgICAgIDogaCA8IDMwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFt4LCAwLCBjXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFtjLCAwLCB4XVxyXG4gICAgICAgICkubWFwKChuKSA9PiBNYXRoLnJvdW5kKChuICsgbSkgKiAyNTUpKTtcclxuICAgICAgICByZXR1cm4ge3IsIGcsIGIsIGF9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmdiVG9IU0woe3I6IHIyNTUsIGc6IGcyNTUsIGI6IGIyNTUsIGEgPSAxfSkge1xyXG4gICAgICAgIGNvbnN0IHIgPSByMjU1IC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IGcgPSBnMjU1IC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IGIgPSBiMjU1IC8gMjU1O1xyXG4gICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xyXG4gICAgICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xyXG4gICAgICAgIGNvbnN0IGMgPSBtYXggLSBtaW47XHJcbiAgICAgICAgY29uc3QgbCA9IChtYXggKyBtaW4pIC8gMjtcclxuICAgICAgICBpZiAoYyA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge2g6IDAsIHM6IDAsIGwsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaCA9XHJcbiAgICAgICAgICAgIChtYXggPT09IHJcclxuICAgICAgICAgICAgICAgID8gKChnIC0gYikgLyBjKSAlIDZcclxuICAgICAgICAgICAgICAgIDogbWF4ID09PSBnXHJcbiAgICAgICAgICAgICAgICAgID8gKGIgLSByKSAvIGMgKyAyXHJcbiAgICAgICAgICAgICAgICAgIDogKHIgLSBnKSAvIGMgKyA0KSAqIDYwO1xyXG4gICAgICAgIGlmIChoIDwgMCkge1xyXG4gICAgICAgICAgICBoICs9IDM2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcyA9IGMgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xyXG4gICAgICAgIHJldHVybiB7aCwgcywgbCwgYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0b0ZpeGVkKG4sIGRpZ2l0cyA9IDApIHtcclxuICAgICAgICBjb25zdCBmaXhlZCA9IG4udG9GaXhlZChkaWdpdHMpO1xyXG4gICAgICAgIGlmIChkaWdpdHMgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpeGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkb3QgPSBmaXhlZC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICBpZiAoZG90ID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgemVyb3NNYXRjaCA9IGZpeGVkLm1hdGNoKC8wKyQvKTtcclxuICAgICAgICAgICAgaWYgKHplcm9zTWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGlmICh6ZXJvc01hdGNoLmluZGV4ID09PSBkb3QgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVkLnN1YnN0cmluZygwLCBkb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpeGVkLnN1YnN0cmluZygwLCB6ZXJvc01hdGNoLmluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZml4ZWQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZ2JUb1N0cmluZyhyZ2IpIHtcclxuICAgICAgICBjb25zdCB7ciwgZywgYiwgYX0gPSByZ2I7XHJcbiAgICAgICAgaWYgKGEgIT0gbnVsbCAmJiBhIDwgMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYHJnYmEoJHt0b0ZpeGVkKHIpfSwgJHt0b0ZpeGVkKGcpfSwgJHt0b0ZpeGVkKGIpfSwgJHt0b0ZpeGVkKGEsIDIpfSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYHJnYigke3RvRml4ZWQocil9LCAke3RvRml4ZWQoZyl9LCAke3RvRml4ZWQoYil9KWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZ2JUb0hleFN0cmluZyh7ciwgZywgYiwgYX0pIHtcclxuICAgICAgICByZXR1cm4gYCMkeyhhICE9IG51bGwgJiYgYSA8IDFcclxuICAgICAgICAgICAgPyBbciwgZywgYiwgTWF0aC5yb3VuZChhICogMjU1KV1cclxuICAgICAgICAgICAgOiBbciwgZywgYl1cclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAoKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt4IDwgMTYgPyBcIjBcIiA6IFwiXCJ9JHt4LnRvU3RyaW5nKDE2KX1gO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbihcIlwiKX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaHNsVG9TdHJpbmcoaHNsKSB7XHJcbiAgICAgICAgY29uc3Qge2gsIHMsIGwsIGF9ID0gaHNsO1xyXG4gICAgICAgIGlmIChhICE9IG51bGwgJiYgYSA8IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBoc2xhKCR7dG9GaXhlZChoKX0sICR7dG9GaXhlZChzICogMTAwKX0lLCAke3RvRml4ZWQobCAqIDEwMCl9JSwgJHt0b0ZpeGVkKGEsIDIpfSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYGhzbCgke3RvRml4ZWQoaCl9LCAke3RvRml4ZWQocyAqIDEwMCl9JSwgJHt0b0ZpeGVkKGwgKiAxMDApfSUpYDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJnYk1hdGNoID0gL15yZ2JhP1xcKFteXFwoXFwpXStcXCkkLztcclxuICAgIGNvbnN0IGhzbE1hdGNoID0gL15oc2xhP1xcKFteXFwoXFwpXStcXCkkLztcclxuICAgIGNvbnN0IGhleE1hdGNoID0gL14jWzAtOWEtZl0rJC9pO1xyXG4gICAgZnVuY3Rpb24gcGFyc2UoJGNvbG9yKSB7XHJcbiAgICAgICAgY29uc3QgYyA9ICRjb2xvci50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoYy5tYXRjaChyZ2JNYXRjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlUkdCKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5tYXRjaChoc2xNYXRjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSFNMKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5tYXRjaChoZXhNYXRjaCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSGV4KGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa25vd25Db2xvcnMuaGFzKGMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDb2xvckJ5TmFtZShjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN5c3RlbUNvbG9ycy5oYXMoYykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFN5c3RlbUNvbG9yKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoJGNvbG9yID09PSBcInRyYW5zcGFyZW50XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtyOiAwLCBnOiAwLCBiOiAwLCBhOiAwfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoYy5zdGFydHNXaXRoKFwiY29sb3IoXCIpIHx8IGMuc3RhcnRzV2l0aChcImNvbG9yLW1peChcIikpICYmXHJcbiAgICAgICAgICAgIGMuZW5kc1dpdGgoXCIpXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb21QYXJzZUNvbG9yKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYy5zdGFydHNXaXRoKFwibGlnaHQtZGFyayhcIikgJiYgYy5lbmRzV2l0aChcIilcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgL15saWdodC1kYXJrXFwoXFxzKihbYS16XSsoXFwoLipcXCkpPyksXFxzKihbYS16XSsoXFwoLipcXCkpPylcXHMqXFwpJC9cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2hlbWVDb2xvciA9IGlzU3lzdGVtRGFya01vZGVFbmFibGVkKClcclxuICAgICAgICAgICAgICAgICAgICA/IG1hdGNoWzNdXHJcbiAgICAgICAgICAgICAgICAgICAgOiBtYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZShzY2hlbWVDb2xvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXROdW1iZXJzKCRjb2xvcikge1xyXG4gICAgICAgIGNvbnN0IG51bWJlcnMgPSBbXTtcclxuICAgICAgICBsZXQgcHJldlBvcyA9IDA7XHJcbiAgICAgICAgbGV0IGlzTWluaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9ICRjb2xvci5pbmRleE9mKFwiKFwiKTtcclxuICAgICAgICAkY29sb3IgPSAkY29sb3Iuc3Vic3RyaW5nKHN0YXJ0SW5kZXggKyAxLCAkY29sb3IubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkY29sb3IubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYyA9ICRjb2xvcltpXTtcclxuICAgICAgICAgICAgaWYgKChjID49IFwiMFwiICYmIGMgPD0gXCI5XCIpIHx8IGMgPT09IFwiLlwiIHx8IGMgPT09IFwiK1wiIHx8IGMgPT09IFwiLVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpc01pbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNNaW5pbmcgJiYgKGMgPT09IFwiIFwiIHx8IGMgPT09IFwiLFwiIHx8IGMgPT09IFwiL1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVycy5wdXNoKCRjb2xvci5zdWJzdHJpbmcocHJldlBvcywgaSkpO1xyXG4gICAgICAgICAgICAgICAgaXNNaW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXNNaW5pbmcpIHtcclxuICAgICAgICAgICAgICAgIHByZXZQb3MgPSBpICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNNaW5pbmcpIHtcclxuICAgICAgICAgICAgbnVtYmVycy5wdXNoKCRjb2xvci5zdWJzdHJpbmcocHJldlBvcywgJGNvbG9yLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtYmVycztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE51bWJlcnNGcm9tU3RyaW5nKHN0ciwgcmFuZ2UsIHVuaXRzKSB7XHJcbiAgICAgICAgY29uc3QgcmF3ID0gZ2V0TnVtYmVycyhzdHIpO1xyXG4gICAgICAgIGNvbnN0IHVuaXRzTGlzdCA9IE9iamVjdC5lbnRyaWVzKHVuaXRzKTtcclxuICAgICAgICBjb25zdCBudW1iZXJzID0gcmF3XHJcbiAgICAgICAgICAgIC5tYXAoKHIpID0+IHIudHJpbSgpKVxyXG4gICAgICAgICAgICAubWFwKChyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXQgPSB1bml0c0xpc3QuZmluZCgoW3VdKSA9PiByLmVuZHNXaXRoKHUpKTtcclxuICAgICAgICAgICAgICAgIGlmICh1bml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChwYXJzZUZsb2F0KHIuc3Vic3RyaW5nKDAsIHIubGVuZ3RoIC0gdW5pdFswXS5sZW5ndGgpKSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml0WzFdKSAqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlW2ldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuID0gcGFyc2VGbG9hdChyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyYW5nZVtpXSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbnVtYmVycztcclxuICAgIH1cclxuICAgIGNvbnN0IHJnYlJhbmdlID0gWzI1NSwgMjU1LCAyNTUsIDFdO1xyXG4gICAgY29uc3QgcmdiVW5pdHMgPSB7XCIlXCI6IDEwMH07XHJcbiAgICBmdW5jdGlvbiBwYXJzZVJHQigkcmdiKSB7XHJcbiAgICAgICAgY29uc3QgW3IsIGcsIGIsIGEgPSAxXSA9IGdldE51bWJlcnNGcm9tU3RyaW5nKCRyZ2IsIHJnYlJhbmdlLCByZ2JVbml0cyk7XHJcbiAgICAgICAgcmV0dXJuIHtyLCBnLCBiLCBhfTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhzbFJhbmdlID0gWzM2MCwgMSwgMSwgMV07XHJcbiAgICBjb25zdCBoc2xVbml0cyA9IHtcIiVcIjogMTAwLCBcImRlZ1wiOiAzNjAsIFwicmFkXCI6IDIgKiBNYXRoLlBJLCBcInR1cm5cIjogMX07XHJcbiAgICBmdW5jdGlvbiBwYXJzZUhTTCgkaHNsKSB7XHJcbiAgICAgICAgY29uc3QgW2gsIHMsIGwsIGEgPSAxXSA9IGdldE51bWJlcnNGcm9tU3RyaW5nKCRoc2wsIGhzbFJhbmdlLCBoc2xVbml0cyk7XHJcbiAgICAgICAgcmV0dXJuIGhzbFRvUkdCKHtoLCBzLCBsLCBhfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZUhleCgkaGV4KSB7XHJcbiAgICAgICAgY29uc3QgaCA9ICRoZXguc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIHN3aXRjaCAoaC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBjYXNlIDQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtyLCBnLCBiXSA9IFswLCAxLCAyXS5tYXAoKGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYCR7aFtpXX0ke2hbaV19YCwgMTYpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYSA9XHJcbiAgICAgICAgICAgICAgICAgICAgaC5sZW5ndGggPT09IDMgPyAxIDogcGFyc2VJbnQoYCR7aFszXX0ke2hbM119YCwgMTYpIC8gMjU1O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtyLCBnLCBiLCBhfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIGNhc2UgODoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gWzAsIDIsIDRdLm1hcCgoaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChoLnN1YnN0cmluZyhpLCBpICsgMiksIDE2KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGEgPVxyXG4gICAgICAgICAgICAgICAgICAgIGgubGVuZ3RoID09PSA2ID8gMSA6IHBhcnNlSW50KGguc3Vic3RyaW5nKDYsIDgpLCAxNikgLyAyNTU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3IsIGcsIGIsIGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JCeU5hbWUoJGNvbG9yKSB7XHJcbiAgICAgICAgY29uc3QgbiA9IGtub3duQ29sb3JzLmdldCgkY29sb3IpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHI6IChuID4+IDE2KSAmIDI1NSxcclxuICAgICAgICAgICAgZzogKG4gPj4gOCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGI6IChuID4+IDApICYgMjU1LFxyXG4gICAgICAgICAgICBhOiAxXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFN5c3RlbUNvbG9yKCRjb2xvcikge1xyXG4gICAgICAgIGNvbnN0IG4gPSBzeXN0ZW1Db2xvcnMuZ2V0KCRjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcjogKG4gPj4gMTYpICYgMjU1LFxyXG4gICAgICAgICAgICBnOiAobiA+PiA4KSAmIDI1NSxcclxuICAgICAgICAgICAgYjogKG4gPj4gMCkgJiAyNTUsXHJcbiAgICAgICAgICAgIGE6IDFcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbG93ZXJDYWxjRXhwcmVzc2lvbihjb2xvcikge1xyXG4gICAgICAgIGxldCBzZWFyY2hJbmRleCA9IDA7XHJcbiAgICAgICAgY29uc3QgcmVwbGFjZUJldHdlZW5JbmRpY2VzID0gKHN0YXJ0LCBlbmQsIHJlcGxhY2VtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbG9yID1cclxuICAgICAgICAgICAgICAgIGNvbG9yLnN1YnN0cmluZygwLCBzdGFydCkgKyByZXBsYWNlbWVudCArIGNvbG9yLnN1YnN0cmluZyhlbmQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2hpbGUgKChzZWFyY2hJbmRleCA9IGNvbG9yLmluZGV4T2YoXCJjYWxjKFwiKSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZ2V0UGFyZW50aGVzZXNSYW5nZShjb2xvciwgc2VhcmNoSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoIXJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc2xpY2UgPSBjb2xvci5zbGljZShyYW5nZS5zdGFydCArIDEsIHJhbmdlLmVuZCAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmNsdWRlc1BlcmNlbnRhZ2UgPSBzbGljZS5pbmNsdWRlcyhcIiVcIik7XHJcbiAgICAgICAgICAgIHNsaWNlID0gc2xpY2Uuc3BsaXQoXCIlXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IE1hdGgucm91bmQoZXZhbE1hdGgoc2xpY2UpKTtcclxuICAgICAgICAgICAgcmVwbGFjZUJldHdlZW5JbmRpY2VzKFxyXG4gICAgICAgICAgICAgICAgcmFuZ2Uuc3RhcnQgLSA0LFxyXG4gICAgICAgICAgICAgICAgcmFuZ2UuZW5kLFxyXG4gICAgICAgICAgICAgICAgb3V0cHV0ICsgKGluY2x1ZGVzUGVyY2VudGFnZSA/IFwiJVwiIDogXCJcIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga25vd25Db2xvcnMgPSBuZXcgTWFwKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgYWxpY2VibHVlOiAweGYwZjhmZixcclxuICAgICAgICAgICAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcclxuICAgICAgICAgICAgYXF1YTogMHgwMGZmZmYsXHJcbiAgICAgICAgICAgIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxyXG4gICAgICAgICAgICBhenVyZTogMHhmMGZmZmYsXHJcbiAgICAgICAgICAgIGJlaWdlOiAweGY1ZjVkYyxcclxuICAgICAgICAgICAgYmlzcXVlOiAweGZmZTRjNCxcclxuICAgICAgICAgICAgYmxhY2s6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXHJcbiAgICAgICAgICAgIGJsdWU6IDB4MDAwMGZmLFxyXG4gICAgICAgICAgICBibHVldmlvbGV0OiAweDhhMmJlMixcclxuICAgICAgICAgICAgYnJvd246IDB4YTUyYTJhLFxyXG4gICAgICAgICAgICBidXJseXdvb2Q6IDB4ZGViODg3LFxyXG4gICAgICAgICAgICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxyXG4gICAgICAgICAgICBjaGFydHJldXNlOiAweDdmZmYwMCxcclxuICAgICAgICAgICAgY2hvY29sYXRlOiAweGQyNjkxZSxcclxuICAgICAgICAgICAgY29yYWw6IDB4ZmY3ZjUwLFxyXG4gICAgICAgICAgICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXHJcbiAgICAgICAgICAgIGNvcm5zaWxrOiAweGZmZjhkYyxcclxuICAgICAgICAgICAgY3JpbXNvbjogMHhkYzE0M2MsXHJcbiAgICAgICAgICAgIGN5YW46IDB4MDBmZmZmLFxyXG4gICAgICAgICAgICBkYXJrYmx1ZTogMHgwMDAwOGIsXHJcbiAgICAgICAgICAgIGRhcmtjeWFuOiAweDAwOGI4YixcclxuICAgICAgICAgICAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXHJcbiAgICAgICAgICAgIGRhcmtncmF5OiAweGE5YTlhOSxcclxuICAgICAgICAgICAgZGFya2dyZXk6IDB4YTlhOWE5LFxyXG4gICAgICAgICAgICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxyXG4gICAgICAgICAgICBkYXJra2hha2k6IDB4YmRiNzZiLFxyXG4gICAgICAgICAgICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXHJcbiAgICAgICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcclxuICAgICAgICAgICAgZGFya29yYW5nZTogMHhmZjhjMDAsXHJcbiAgICAgICAgICAgIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxyXG4gICAgICAgICAgICBkYXJrcmVkOiAweDhiMDAwMCxcclxuICAgICAgICAgICAgZGFya3NhbG1vbjogMHhlOTk2N2EsXHJcbiAgICAgICAgICAgIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXHJcbiAgICAgICAgICAgIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxyXG4gICAgICAgICAgICBkYXJrc2xhdGVncmF5OiAweDJmNGY0ZixcclxuICAgICAgICAgICAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXHJcbiAgICAgICAgICAgIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxyXG4gICAgICAgICAgICBkYXJrdmlvbGV0OiAweDk0MDBkMyxcclxuICAgICAgICAgICAgZGVlcHBpbms6IDB4ZmYxNDkzLFxyXG4gICAgICAgICAgICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXHJcbiAgICAgICAgICAgIGRpbWdyYXk6IDB4Njk2OTY5LFxyXG4gICAgICAgICAgICBkaW1ncmV5OiAweDY5Njk2OSxcclxuICAgICAgICAgICAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXHJcbiAgICAgICAgICAgIGZpcmVicmljazogMHhiMjIyMjIsXHJcbiAgICAgICAgICAgIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcclxuICAgICAgICAgICAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxyXG4gICAgICAgICAgICBmdWNoc2lhOiAweGZmMDBmZixcclxuICAgICAgICAgICAgZ2FpbnNib3JvOiAweGRjZGNkYyxcclxuICAgICAgICAgICAgZ2hvc3R3aGl0ZTogMHhmOGY4ZmYsXHJcbiAgICAgICAgICAgIGdvbGQ6IDB4ZmZkNzAwLFxyXG4gICAgICAgICAgICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxyXG4gICAgICAgICAgICBncmF5OiAweDgwODA4MCxcclxuICAgICAgICAgICAgZ3JleTogMHg4MDgwODAsXHJcbiAgICAgICAgICAgIGdyZWVuOiAweDAwODAwMCxcclxuICAgICAgICAgICAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxyXG4gICAgICAgICAgICBob25leWRldzogMHhmMGZmZjAsXHJcbiAgICAgICAgICAgIGhvdHBpbms6IDB4ZmY2OWI0LFxyXG4gICAgICAgICAgICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxyXG4gICAgICAgICAgICBpbmRpZ286IDB4NGIwMDgyLFxyXG4gICAgICAgICAgICBpdm9yeTogMHhmZmZmZjAsXHJcbiAgICAgICAgICAgIGtoYWtpOiAweGYwZTY4YyxcclxuICAgICAgICAgICAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxyXG4gICAgICAgICAgICBsYXZlbmRlcmJsdXNoOiAweGZmZjBmNSxcclxuICAgICAgICAgICAgbGF3bmdyZWVuOiAweDdjZmMwMCxcclxuICAgICAgICAgICAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcclxuICAgICAgICAgICAgbGlnaHRibHVlOiAweGFkZDhlNixcclxuICAgICAgICAgICAgbGlnaHRjb3JhbDogMHhmMDgwODAsXHJcbiAgICAgICAgICAgIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXHJcbiAgICAgICAgICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAweGZhZmFkMixcclxuICAgICAgICAgICAgbGlnaHRncmF5OiAweGQzZDNkMyxcclxuICAgICAgICAgICAgbGlnaHRncmV5OiAweGQzZDNkMyxcclxuICAgICAgICAgICAgbGlnaHRncmVlbjogMHg5MGVlOTAsXHJcbiAgICAgICAgICAgIGxpZ2h0cGluazogMHhmZmI2YzEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcclxuICAgICAgICAgICAgbGlnaHRzZWFncmVlbjogMHgyMGIyYWEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXHJcbiAgICAgICAgICAgIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcclxuICAgICAgICAgICAgbGlnaHRzbGF0ZWdyZXk6IDB4Nzc4ODk5LFxyXG4gICAgICAgICAgICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXHJcbiAgICAgICAgICAgIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcclxuICAgICAgICAgICAgbGltZTogMHgwMGZmMDAsXHJcbiAgICAgICAgICAgIGxpbWVncmVlbjogMHgzMmNkMzIsXHJcbiAgICAgICAgICAgIGxpbmVuOiAweGZhZjBlNixcclxuICAgICAgICAgICAgbWFnZW50YTogMHhmZjAwZmYsXHJcbiAgICAgICAgICAgIG1hcm9vbjogMHg4MDAwMDAsXHJcbiAgICAgICAgICAgIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxyXG4gICAgICAgICAgICBtZWRpdW1ibHVlOiAweDAwMDBjZCxcclxuICAgICAgICAgICAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcclxuICAgICAgICAgICAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcclxuICAgICAgICAgICAgbWVkaXVtc2VhZ3JlZW46IDB4M2NiMzcxLFxyXG4gICAgICAgICAgICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxyXG4gICAgICAgICAgICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXHJcbiAgICAgICAgICAgIG1lZGl1bXR1cnF1b2lzZTogMHg0OGQxY2MsXHJcbiAgICAgICAgICAgIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXHJcbiAgICAgICAgICAgIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXHJcbiAgICAgICAgICAgIG1pbnRjcmVhbTogMHhmNWZmZmEsXHJcbiAgICAgICAgICAgIG1pc3R5cm9zZTogMHhmZmU0ZTEsXHJcbiAgICAgICAgICAgIG1vY2Nhc2luOiAweGZmZTRiNSxcclxuICAgICAgICAgICAgbmF2YWpvd2hpdGU6IDB4ZmZkZWFkLFxyXG4gICAgICAgICAgICBuYXZ5OiAweDAwMDA4MCxcclxuICAgICAgICAgICAgb2xkbGFjZTogMHhmZGY1ZTYsXHJcbiAgICAgICAgICAgIG9saXZlOiAweDgwODAwMCxcclxuICAgICAgICAgICAgb2xpdmVkcmFiOiAweDZiOGUyMyxcclxuICAgICAgICAgICAgb3JhbmdlOiAweGZmYTUwMCxcclxuICAgICAgICAgICAgb3JhbmdlcmVkOiAweGZmNDUwMCxcclxuICAgICAgICAgICAgb3JjaGlkOiAweGRhNzBkNixcclxuICAgICAgICAgICAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXHJcbiAgICAgICAgICAgIHBhbGVncmVlbjogMHg5OGZiOTgsXHJcbiAgICAgICAgICAgIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxyXG4gICAgICAgICAgICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcclxuICAgICAgICAgICAgcGFwYXlhd2hpcDogMHhmZmVmZDUsXHJcbiAgICAgICAgICAgIHBlYWNocHVmZjogMHhmZmRhYjksXHJcbiAgICAgICAgICAgIHBlcnU6IDB4Y2Q4NTNmLFxyXG4gICAgICAgICAgICBwaW5rOiAweGZmYzBjYixcclxuICAgICAgICAgICAgcGx1bTogMHhkZGEwZGQsXHJcbiAgICAgICAgICAgIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxyXG4gICAgICAgICAgICBwdXJwbGU6IDB4ODAwMDgwLFxyXG4gICAgICAgICAgICByZWJlY2NhcHVycGxlOiAweDY2MzM5OSxcclxuICAgICAgICAgICAgcmVkOiAweGZmMDAwMCxcclxuICAgICAgICAgICAgcm9zeWJyb3duOiAweGJjOGY4ZixcclxuICAgICAgICAgICAgcm95YWxibHVlOiAweDQxNjllMSxcclxuICAgICAgICAgICAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxyXG4gICAgICAgICAgICBzYWxtb246IDB4ZmE4MDcyLFxyXG4gICAgICAgICAgICBzYW5keWJyb3duOiAweGY0YTQ2MCxcclxuICAgICAgICAgICAgc2VhZ3JlZW46IDB4MmU4YjU3LFxyXG4gICAgICAgICAgICBzZWFzaGVsbDogMHhmZmY1ZWUsXHJcbiAgICAgICAgICAgIHNpZW5uYTogMHhhMDUyMmQsXHJcbiAgICAgICAgICAgIHNpbHZlcjogMHhjMGMwYzAsXHJcbiAgICAgICAgICAgIHNreWJsdWU6IDB4ODdjZWViLFxyXG4gICAgICAgICAgICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxyXG4gICAgICAgICAgICBzbGF0ZWdyYXk6IDB4NzA4MDkwLFxyXG4gICAgICAgICAgICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxyXG4gICAgICAgICAgICBzbm93OiAweGZmZmFmYSxcclxuICAgICAgICAgICAgc3ByaW5nZ3JlZW46IDB4MDBmZjdmLFxyXG4gICAgICAgICAgICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxyXG4gICAgICAgICAgICB0YW46IDB4ZDJiNDhjLFxyXG4gICAgICAgICAgICB0ZWFsOiAweDAwODA4MCxcclxuICAgICAgICAgICAgdGhpc3RsZTogMHhkOGJmZDgsXHJcbiAgICAgICAgICAgIHRvbWF0bzogMHhmZjYzNDcsXHJcbiAgICAgICAgICAgIHR1cnF1b2lzZTogMHg0MGUwZDAsXHJcbiAgICAgICAgICAgIHZpb2xldDogMHhlZTgyZWUsXHJcbiAgICAgICAgICAgIHdoZWF0OiAweGY1ZGViMyxcclxuICAgICAgICAgICAgd2hpdGU6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcclxuICAgICAgICAgICAgeWVsbG93OiAweGZmZmYwMCxcclxuICAgICAgICAgICAgeWVsbG93Z3JlZW46IDB4OWFjZDMyXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgICBjb25zdCBzeXN0ZW1Db2xvcnMgPSBuZXcgTWFwKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHtcclxuICAgICAgICAgICAgXCJBY3RpdmVCb3JkZXJcIjogMHgzYjk5ZmMsXHJcbiAgICAgICAgICAgIFwiQWN0aXZlQ2FwdGlvblwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJBcHBXb3Jrc3BhY2VcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiQmFja2dyb3VuZFwiOiAweDYzNjNjZSxcclxuICAgICAgICAgICAgXCJCdXR0b25GYWNlXCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIkJ1dHRvbkhpZ2hsaWdodFwiOiAweGU5ZTllOSxcclxuICAgICAgICAgICAgXCJCdXR0b25TaGFkb3dcIjogMHg5ZmEwOWYsXHJcbiAgICAgICAgICAgIFwiQnV0dG9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJDYXB0aW9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJHcmF5VGV4dFwiOiAweDdmN2Y3ZixcclxuICAgICAgICAgICAgXCJIaWdobGlnaHRcIjogMHhiMmQ3ZmYsXHJcbiAgICAgICAgICAgIFwiSGlnaGxpZ2h0VGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJJbmFjdGl2ZUJvcmRlclwiOiAweGZmZmZmZixcclxuICAgICAgICAgICAgXCJJbmFjdGl2ZUNhcHRpb25cIjogMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIFwiSW5hY3RpdmVDYXB0aW9uVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJJbmZvQmFja2dyb3VuZFwiOiAweGZiZmNjNSxcclxuICAgICAgICAgICAgXCJJbmZvVGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJNZW51XCI6IDB4ZjZmNmY2LFxyXG4gICAgICAgICAgICBcIk1lbnVUZXh0XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlNjcm9sbGJhclwiOiAweGFhYWFhYSxcclxuICAgICAgICAgICAgXCJUaHJlZUREYXJrU2hhZG93XCI6IDB4MDAwMDAwLFxyXG4gICAgICAgICAgICBcIlRocmVlREZhY2VcIjogMHhjMGMwYzAsXHJcbiAgICAgICAgICAgIFwiVGhyZWVESGlnaGxpZ2h0XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlRocmVlRExpZ2h0U2hhZG93XCI6IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICBcIlRocmVlRFNoYWRvd1wiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCJXaW5kb3dcIjogMHhlY2VjZWMsXHJcbiAgICAgICAgICAgIFwiV2luZG93RnJhbWVcIjogMHhhYWFhYWEsXHJcbiAgICAgICAgICAgIFwiV2luZG93VGV4dFwiOiAweDAwMDAwMCxcclxuICAgICAgICAgICAgXCItd2Via2l0LWZvY3VzLXJpbmctY29sb3JcIjogMHhlNTk3MDBcclxuICAgICAgICB9KS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleS50b0xvd2VyQ2FzZSgpLCB2YWx1ZV0pXHJcbiAgICApO1xyXG4gICAgZnVuY3Rpb24gZ2V0U1JHQkxpZ2h0bmVzcyhyLCBnLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuICgwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpIC8gMjU1O1xyXG4gICAgfVxyXG4gICAgbGV0IGNhbnZhcyQxO1xyXG4gICAgbGV0IGNvbnRleHQkMTtcclxuICAgIGZ1bmN0aW9uIGRvbVBhcnNlQ29sb3IoJGNvbG9yKSB7XHJcbiAgICAgICAgaWYgKCFjb250ZXh0JDEpIHtcclxuICAgICAgICAgICAgY2FudmFzJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICAgICAgICBjYW52YXMkMS53aWR0aCA9IDE7XHJcbiAgICAgICAgICAgIGNhbnZhcyQxLmhlaWdodCA9IDE7XHJcbiAgICAgICAgICAgIGNvbnRleHQkMSA9IGNhbnZhcyQxLmdldENvbnRleHQoXCIyZFwiLCB7d2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQkMS5maWxsU3R5bGUgPSAkY29sb3I7XHJcbiAgICAgICAgY29udGV4dCQxLmZpbGxSZWN0KDAsIDAsIDEsIDEpO1xyXG4gICAgICAgIGNvbnN0IGQgPSBjb250ZXh0JDEuZ2V0SW1hZ2VEYXRhKDAsIDAsIDEsIDEpLmRhdGE7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBgcmdiYSgke2RbMF19LCAke2RbMV19LCAke2RbMl19LCAkeyhkWzNdIC8gMjU1KS50b0ZpeGVkKDIpfSlgO1xyXG4gICAgICAgIHJldHVybiBwYXJzZVJHQihjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2NhbGUoeCwgaW5Mb3csIGluSGlnaCwgb3V0TG93LCBvdXRIaWdoKSB7XHJcbiAgICAgICAgcmV0dXJuICgoeCAtIGluTG93KSAqIChvdXRIaWdoIC0gb3V0TG93KSkgLyAoaW5IaWdoIC0gaW5Mb3cpICsgb3V0TG93O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xhbXAoeCwgbWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHgpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG11bHRpcGx5TWF0cmljZXMobTEsIG0yKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG0xLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgbGVuMiA9IG0yWzBdLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMCwgbGVuMyA9IG0xWzBdLmxlbmd0aDsgayA8IGxlbjM7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBtMVtpXVtrXSAqIG0yW2tdW2pdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldW2pdID0gc3VtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRmlsdGVyTWF0cml4KGNvbmZpZykge1xyXG4gICAgICAgIGxldCBtID0gTWF0cml4LmlkZW50aXR5KCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5zZXBpYSAhPT0gMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguc2VwaWEoY29uZmlnLnNlcGlhIC8gMTAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuZ3JheXNjYWxlICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG0gPSBtdWx0aXBseU1hdHJpY2VzKG0sIE1hdHJpeC5ncmF5c2NhbGUoY29uZmlnLmdyYXlzY2FsZSAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmNvbnRyYXN0ICE9PSAxMDApIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmNvbnRyYXN0KGNvbmZpZy5jb250cmFzdCAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLmJyaWdodG5lc3MgIT09IDEwMCkge1xyXG4gICAgICAgICAgICBtID0gbXVsdGlwbHlNYXRyaWNlcyhtLCBNYXRyaXguYnJpZ2h0bmVzcyhjb25maWcuYnJpZ2h0bmVzcyAvIDEwMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLm1vZGUgPT09IDEpIHtcclxuICAgICAgICAgICAgbSA9IG11bHRpcGx5TWF0cmljZXMobSwgTWF0cml4LmludmVydE5IdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXBwbHlDb2xvck1hdHJpeChbciwgZywgYl0sIG1hdHJpeCkge1xyXG4gICAgICAgIGNvbnN0IHJnYiA9IFtbciAvIDI1NV0sIFtnIC8gMjU1XSwgW2IgLyAyNTVdLCBbMV0sIFsxXV07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbXVsdGlwbHlNYXRyaWNlcyhtYXRyaXgsIHJnYik7XHJcbiAgICAgICAgcmV0dXJuIFswLCAxLCAyXS5tYXAoKGkpID0+XHJcbiAgICAgICAgICAgIGNsYW1wKE1hdGgucm91bmQocmVzdWx0W2ldWzBdICogMjU1KSwgMCwgMjU1KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBNYXRyaXggPSB7XHJcbiAgICAgICAgaWRlbnRpdHkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludmVydE5IdWUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICBbMC4zMzMsIC0wLjY2NywgLTAuNjY3LCAwLCAxXSxcclxuICAgICAgICAgICAgICAgIFstMC42NjcsIDAuMzMzLCAtMC42NjcsIDAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWy0wLjY2NywgLTAuNjY3LCAwLjMzMywgMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMV1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJyaWdodG5lc3Modikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW3YsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIHYsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIHYsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250cmFzdCh2KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSAoMSAtIHYpIC8gMjtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIFt2LCAwLCAwLCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCB2LCAwLCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCB2LCAwLCB0XSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAxXVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VwaWEodikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMzkzICsgMC42MDcgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzY5IC0gMC43NjkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMTg5IC0gMC4xODkgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjM0OSAtIDAuMzQ5ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjY4NiArIDAuMzE0ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjE2OCAtIDAuMTY4ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yNzIgLSAwLjI3MiAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC41MzQgLSAwLjUzNCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4xMzEgKyAwLjg2OSAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmF5c2NhbGUodikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIDAuMjEyNiArIDAuNzg3NCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC43MTUyIC0gMC43MTUyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjA3MjIgLSAwLjA3MjIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAwLjIxMjYgLSAwLjIxMjYgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuNzE1MiArIDAuMjg0OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMC4wNzIyIC0gMC4wNzIyICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgMC4yMTI2IC0gMC4yMTI2ICogKDEgLSB2KSxcclxuICAgICAgICAgICAgICAgICAgICAwLjcxNTIgLSAwLjcxNTIgKiAoMSAtIHYpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAuMDcyMiArIDAuOTI3OCAqICgxIC0gdiksXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDFdXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCZ1BvbGUodGhlbWUpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmtTY2hlbWUgPSB0aGVtZS5tb2RlID09PSAxO1xyXG4gICAgICAgIGNvbnN0IHByb3AgPSBpc0RhcmtTY2hlbWVcclxuICAgICAgICAgICAgPyBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIlxyXG4gICAgICAgICAgICA6IFwibGlnaHRTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIjtcclxuICAgICAgICByZXR1cm4gdGhlbWVbcHJvcF07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRGZ1BvbGUodGhlbWUpIHtcclxuICAgICAgICBjb25zdCBpc0RhcmtTY2hlbWUgPSB0aGVtZS5tb2RlID09PSAxO1xyXG4gICAgICAgIGNvbnN0IHByb3AgPSBpc0RhcmtTY2hlbWVcclxuICAgICAgICAgICAgPyBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIlxyXG4gICAgICAgICAgICA6IFwibGlnaHRTY2hlbWVUZXh0Q29sb3JcIjtcclxuICAgICAgICByZXR1cm4gdGhlbWVbcHJvcF07XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2xvck1vZGlmaWNhdGlvbkNhY2hlID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gY2xlYXJDb2xvck1vZGlmaWNhdGlvbkNhY2hlKCkge1xyXG4gICAgICAgIGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJnYkNhY2hlS2V5cyA9IFtcInJcIiwgXCJnXCIsIFwiYlwiLCBcImFcIl07XHJcbiAgICBjb25zdCB0aGVtZUNhY2hlS2V5cyQxID0gW1xyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwiYnJpZ2h0bmVzc1wiLFxyXG4gICAgICAgIFwiY29udHJhc3RcIixcclxuICAgICAgICBcImdyYXlzY2FsZVwiLFxyXG4gICAgICAgIFwic2VwaWFcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZVRleHRDb2xvclwiXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2FjaGVJZChyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdElkID0gXCJcIjtcclxuICAgICAgICByZ2JDYWNoZUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdElkICs9IGAke3JnYltrZXldfTtgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoZW1lQ2FjaGVLZXlzJDEuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdElkICs9IGAke3RoZW1lW2tleV19O2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdElkO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgcmdiLFxyXG4gICAgICAgIHRoZW1lLFxyXG4gICAgICAgIG1vZGlmeUhTTCxcclxuICAgICAgICBwb2xlQ29sb3IsXHJcbiAgICAgICAgYW5vdGhlclBvbGVDb2xvclxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGZuQ2FjaGU7XHJcbiAgICAgICAgaWYgKGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuaGFzKG1vZGlmeUhTTCkpIHtcclxuICAgICAgICAgICAgZm5DYWNoZSA9IGNvbG9yTW9kaWZpY2F0aW9uQ2FjaGUuZ2V0KG1vZGlmeUhTTCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm5DYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgY29sb3JNb2RpZmljYXRpb25DYWNoZS5zZXQobW9kaWZ5SFNMLCBmbkNhY2hlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSBnZXRDYWNoZUlkKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIGlmIChmbkNhY2hlLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZuQ2FjaGUuZ2V0KGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaHNsID0gcmdiVG9IU0wocmdiKTtcclxuICAgICAgICBjb25zdCBwb2xlID0gcG9sZUNvbG9yID09IG51bGwgPyBudWxsIDogcGFyc2VUb0hTTFdpdGhDYWNoZShwb2xlQ29sb3IpO1xyXG4gICAgICAgIGNvbnN0IGFub3RoZXJQb2xlID1cclxuICAgICAgICAgICAgYW5vdGhlclBvbGVDb2xvciA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICA/IG51bGxcclxuICAgICAgICAgICAgICAgIDogcGFyc2VUb0hTTFdpdGhDYWNoZShhbm90aGVyUG9sZUNvbG9yKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZCA9IG1vZGlmeUhTTChoc2wsIHBvbGUsIGFub3RoZXJQb2xlKTtcclxuICAgICAgICBjb25zdCB7ciwgZywgYiwgYX0gPSBoc2xUb1JHQihtb2RpZmllZCk7XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gY3JlYXRlRmlsdGVyTWF0cml4KHRoZW1lKTtcclxuICAgICAgICBjb25zdCBbcmYsIGdmLCBiZl0gPSBhcHBseUNvbG9yTWF0cml4KFtyLCBnLCBiXSwgbWF0cml4KTtcclxuICAgICAgICBjb25zdCBjb2xvciA9XHJcbiAgICAgICAgICAgIGEgPT09IDFcclxuICAgICAgICAgICAgICAgID8gcmdiVG9IZXhTdHJpbmcoe3I6IHJmLCBnOiBnZiwgYjogYmZ9KVxyXG4gICAgICAgICAgICAgICAgOiByZ2JUb1N0cmluZyh7cjogcmYsIGc6IGdmLCBiOiBiZiwgYX0pO1xyXG4gICAgICAgIGZuQ2FjaGUuc2V0KGlkLCBjb2xvcik7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5TGlnaHRTY2hlbWVDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgcG9sZUJnID0gZ2V0QmdQb2xlKHRoZW1lKTtcclxuICAgICAgICBjb25zdCBwb2xlRmcgPSBnZXRGZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgbW9kaWZ5TGlnaHRNb2RlSFNMLFxyXG4gICAgICAgICAgICBwb2xlRmcsXHJcbiAgICAgICAgICAgIHBvbGVCZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlMaWdodE1vZGVIU0woe2gsIHMsIGwsIGF9LCBwb2xlRmcsIHBvbGVCZykge1xyXG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGwgPCAwLjU7XHJcbiAgICAgICAgbGV0IGlzTmV1dHJhbDtcclxuICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgIGlzTmV1dHJhbCA9IGwgPCAwLjIgfHwgcyA8IDAuMTI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaXNCbHVlID0gaCA+IDIwMCAmJiBoIDwgMjgwO1xyXG4gICAgICAgICAgICBpc05ldXRyYWwgPSBzIDwgMC4yNCB8fCAobCA+IDAuOCAmJiBpc0JsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaHggPSBoO1xyXG4gICAgICAgIGxldCBzeCA9IGw7XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVGZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlRmcucztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gcG9sZUJnLmg7XHJcbiAgICAgICAgICAgICAgICBzeCA9IHBvbGVCZy5zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGx4ID0gc2NhbGUobCwgMCwgMSwgcG9sZUZnLmwsIHBvbGVCZy5sKTtcclxuICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGF9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgTUFYX0JHX0xJR0hUTkVTUyA9IDAuNDtcclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJnSFNMKHtoLCBzLCBsLCBhfSwgcG9sZSkge1xyXG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGwgPCAwLjU7XHJcbiAgICAgICAgY29uc3QgaXNCbHVlID0gaCA+IDIwMCAmJiBoIDwgMjgwO1xyXG4gICAgICAgIGNvbnN0IGlzTmV1dHJhbCA9IHMgPCAwLjEyIHx8IChsID4gMC44ICYmIGlzQmx1ZSk7XHJcbiAgICAgICAgaWYgKGlzRGFyaykge1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IHNjYWxlKGwsIDAsIDAuNSwgMCwgTUFYX0JHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgICAgIGlmIChpc05ldXRyYWwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGh4ID0gcG9sZS5oO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2g6IGh4LCBzOiBzeCwgbDogbHgsIGF9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7aCwgcywgbDogbHgsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbHggPSBzY2FsZShsLCAwLjUsIDEsIE1BWF9CR19MSUdIVE5FU1MsIHBvbGUubCk7XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICBjb25zdCBoeCA9IHBvbGUuaDtcclxuICAgICAgICAgICAgY29uc3Qgc3ggPSBwb2xlLnM7XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoeCA9IGg7XHJcbiAgICAgICAgY29uc3QgaXNZZWxsb3cgPSBoID4gNjAgJiYgaCA8IDE4MDtcclxuICAgICAgICBpZiAoaXNZZWxsb3cpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNDbG9zZXJUb0dyZWVuID0gaCA+IDEyMDtcclxuICAgICAgICAgICAgaWYgKGlzQ2xvc2VyVG9HcmVlbikge1xyXG4gICAgICAgICAgICAgICAgaHggPSBzY2FsZShoLCAxMjAsIDE4MCwgMTM1LCAxODApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaHggPSBzY2FsZShoLCA2MCwgMTIwLCA2MCwgMTA1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaHggPiA0MCAmJiBoeCA8IDgwKSB7XHJcbiAgICAgICAgICAgIGx4ICo9IDAuNzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHMsIGw6IGx4LCBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbGUgPSBnZXRCZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICB7Li4udGhlbWUsIG1vZGU6IDB9LFxyXG4gICAgICAgICAgICBtb2RpZnlCZ0hTTCxcclxuICAgICAgICAgICAgcG9sZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBNSU5fRkdfTElHSFRORVNTID0gMC41NTtcclxuICAgIGZ1bmN0aW9uIG1vZGlmeUJsdWVGZ0h1ZShodWUpIHtcclxuICAgICAgICByZXR1cm4gc2NhbGUoaHVlLCAyMDUsIDI0NSwgMjA1LCAyMjApO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbW9kaWZ5RmdIU0woe2gsIHMsIGwsIGF9LCBwb2xlKSB7XHJcbiAgICAgICAgY29uc3QgaXNMaWdodCA9IGwgPiAwLjU7XHJcbiAgICAgICAgY29uc3QgaXNOZXV0cmFsID0gbCA8IDAuMiB8fCBzIDwgMC4yNDtcclxuICAgICAgICBjb25zdCBpc0JsdWUgPSAhaXNOZXV0cmFsICYmIGggPiAyMDUgJiYgaCA8IDI0NTtcclxuICAgICAgICBpZiAoaXNMaWdodCkge1xyXG4gICAgICAgICAgICBjb25zdCBseCA9IHNjYWxlKGwsIDAuNSwgMSwgTUlOX0ZHX0xJR0hUTkVTUywgcG9sZS5sKTtcclxuICAgICAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaHggPSBwb2xlLmg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGh4ID0gaDtcclxuICAgICAgICAgICAgaWYgKGlzQmx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaHggPSBtb2RpZnlCbHVlRmdIdWUoaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtoOiBoeCwgcywgbDogbHgsIGF9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNOZXV0cmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh4ID0gcG9sZS5oO1xyXG4gICAgICAgICAgICBjb25zdCBzeCA9IHBvbGUucztcclxuICAgICAgICAgICAgY29uc3QgbHggPSBzY2FsZShsLCAwLCAwLjUsIHBvbGUubCwgTUlOX0ZHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBoeCA9IGg7XHJcbiAgICAgICAgbGV0IGx4O1xyXG4gICAgICAgIGlmIChpc0JsdWUpIHtcclxuICAgICAgICAgICAgaHggPSBtb2RpZnlCbHVlRmdIdWUoaCk7XHJcbiAgICAgICAgICAgIGx4ID0gc2NhbGUobCwgMCwgMC41LCBwb2xlLmwsIE1hdGgubWluKDEsIE1JTl9GR19MSUdIVE5FU1MgKyAwLjA1KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbHggPSBzY2FsZShsLCAwLCAwLjUsIHBvbGUubCwgTUlOX0ZHX0xJR0hUTkVTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHMsIGw6IGx4LCBhfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUZvcmVncm91bmRDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbGUgPSBnZXRGZ1BvbGUodGhlbWUpO1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlDb2xvcldpdGhDYWNoZShcclxuICAgICAgICAgICAgcmdiLFxyXG4gICAgICAgICAgICB7Li4udGhlbWUsIG1vZGU6IDB9LFxyXG4gICAgICAgICAgICBtb2RpZnlGZ0hTTCxcclxuICAgICAgICAgICAgcG9sZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCb3JkZXJIU0woe2gsIHMsIGwsIGF9LCBwb2xlRmcsIHBvbGVCZykge1xyXG4gICAgICAgIGNvbnN0IGlzRGFyayA9IGwgPCAwLjU7XHJcbiAgICAgICAgY29uc3QgaXNOZXV0cmFsID0gbCA8IDAuMiB8fCBzIDwgMC4yNDtcclxuICAgICAgICBsZXQgaHggPSBoO1xyXG4gICAgICAgIGxldCBzeCA9IHM7XHJcbiAgICAgICAgaWYgKGlzTmV1dHJhbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNEYXJrKSB7XHJcbiAgICAgICAgICAgICAgICBoeCA9IHBvbGVGZy5oO1xyXG4gICAgICAgICAgICAgICAgc3ggPSBwb2xlRmcucztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGh4ID0gcG9sZUJnLmg7XHJcbiAgICAgICAgICAgICAgICBzeCA9IHBvbGVCZy5zO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGx4ID0gc2NhbGUobCwgMCwgMSwgMC41LCAwLjIpO1xyXG4gICAgICAgIHJldHVybiB7aDogaHgsIHM6IHN4LCBsOiBseCwgYX07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlCb3JkZXJDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgaWYgKHRoZW1lLm1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGlmeUxpZ2h0U2NoZW1lQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbGVGZyA9IGdldEZnUG9sZSh0aGVtZSk7XHJcbiAgICAgICAgY29uc3QgcG9sZUJnID0gZ2V0QmdQb2xlKHRoZW1lKTtcclxuICAgICAgICByZXR1cm4gbW9kaWZ5Q29sb3JXaXRoQ2FjaGUoXHJcbiAgICAgICAgICAgIHJnYixcclxuICAgICAgICAgICAgey4uLnRoZW1lLCBtb2RlOiAwfSxcclxuICAgICAgICAgICAgbW9kaWZ5Qm9yZGVySFNMLFxyXG4gICAgICAgICAgICBwb2xlRmcsXHJcbiAgICAgICAgICAgIHBvbGVCZ1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtb2RpZnlTaGFkb3dDb2xvcihyZ2IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vZGlmeUJhY2tncm91bmRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1vZGlmeUdyYWRpZW50Q29sb3IocmdiLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhjbHVkZWRTZWxlY3RvcnMgPSBbXHJcbiAgICAgICAgXCJwcmVcIixcclxuICAgICAgICBcInByZSAqXCIsXHJcbiAgICAgICAgXCJjb2RlXCIsXHJcbiAgICAgICAgJ1thcmlhLWhpZGRlbj1cInRydWVcIl0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwiZmEtXCJdJyxcclxuICAgICAgICBcIi5mYVwiLFxyXG4gICAgICAgIFwiLmZhYlwiLFxyXG4gICAgICAgIFwiLmZhZFwiLFxyXG4gICAgICAgIFwiLmZhbFwiLFxyXG4gICAgICAgIFwiLmZhclwiLFxyXG4gICAgICAgIFwiLmZhc1wiLFxyXG4gICAgICAgIFwiLmZhc3NcIixcclxuICAgICAgICBcIi5mYXNyXCIsXHJcbiAgICAgICAgXCIuZmF0XCIsXHJcbiAgICAgICAgXCIuaWNvZm9udFwiLFxyXG4gICAgICAgICdbc3R5bGUqPVwiZm9udC1cIl0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwiaWNvblwiaV0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwic3ltYm9sXCJpXScsXHJcbiAgICAgICAgXCIuZ2x5cGhpY29uXCIsXHJcbiAgICAgICAgJ1tjbGFzcyo9XCJtYXRlcmlhbC1zeW1ib2xcIl0nLFxyXG4gICAgICAgICdbY2xhc3MqPVwibWF0ZXJpYWwtaWNvblwiXScsXHJcbiAgICAgICAgXCJtdVwiLFxyXG4gICAgICAgICdbY2xhc3MqPVwibXUtXCJdJyxcclxuICAgICAgICBcIi50eXBjblwiLFxyXG4gICAgICAgICdbY2xhc3MqPVwidmpzLVwiXSdcclxuICAgIF07XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUZXh0U3R5bGUoY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBsaW5lcy5wdXNoKGAqOm5vdCgke2V4Y2x1ZGVkU2VsZWN0b3JzLmpvaW4oXCIsIFwiKX0pIHtgKTtcclxuICAgICAgICBpZiAoY29uZmlnLnVzZUZvbnQgJiYgY29uZmlnLmZvbnRGYW1pbHkpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgICBmb250LWZhbWlseTogJHtjb25maWcuZm9udEZhbWlseX0gIWltcG9ydGFudDtgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy50ZXh0U3Ryb2tlID4gMCkge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgYCAgLXdlYmtpdC10ZXh0LXN0cm9rZTogJHtjb25maWcudGV4dFN0cm9rZX1weCAhaW1wb3J0YW50O2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgICB0ZXh0LXN0cm9rZTogJHtjb25maWcudGV4dFN0cm9rZX1weCAhaW1wb3J0YW50O2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgRmlsdGVyTW9kZTtcclxuICAgIChmdW5jdGlvbiAoRmlsdGVyTW9kZSkge1xyXG4gICAgICAgIEZpbHRlck1vZGVbKEZpbHRlck1vZGVbXCJsaWdodFwiXSA9IDApXSA9IFwibGlnaHRcIjtcclxuICAgICAgICBGaWx0ZXJNb2RlWyhGaWx0ZXJNb2RlW1wiZGFya1wiXSA9IDEpXSA9IFwiZGFya1wiO1xyXG4gICAgfSkoRmlsdGVyTW9kZSB8fCAoRmlsdGVyTW9kZSA9IHt9KSk7XHJcbiAgICBmdW5jdGlvbiBnZXRDU1NGaWx0ZXJWYWx1ZShjb25maWcpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJzID0gW107XHJcbiAgICAgICAgaWYgKGNvbmZpZy5tb2RlID09PSBGaWx0ZXJNb2RlLmRhcmspIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKFwiaW52ZXJ0KDEwMCUpIGh1ZS1yb3RhdGUoMTgwZGVnKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5icmlnaHRuZXNzICE9PSAxMDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKGBicmlnaHRuZXNzKCR7Y29uZmlnLmJyaWdodG5lc3N9JSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5jb250cmFzdCAhPT0gMTAwKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaChgY29udHJhc3QoJHtjb25maWcuY29udHJhc3R9JSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy5ncmF5c2NhbGUgIT09IDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKGBncmF5c2NhbGUoJHtjb25maWcuZ3JheXNjYWxlfSUpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcuc2VwaWEgIT09IDApIHtcclxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKGBzZXBpYSgke2NvbmZpZy5zZXBpYX0lKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWx0ZXJzLmpvaW4oXCIgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvU1ZHTWF0cml4KG1hdHJpeCkge1xyXG4gICAgICAgIHJldHVybiBtYXRyaXhcclxuICAgICAgICAgICAgLnNsaWNlKDAsIDQpXHJcbiAgICAgICAgICAgIC5tYXAoKG0pID0+IG0ubWFwKChtKSA9PiBtLnRvRml4ZWQoMykpLmpvaW4oXCIgXCIpKVxyXG4gICAgICAgICAgICAuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTVkdGaWx0ZXJNYXRyaXhWYWx1ZShjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdG9TVkdNYXRyaXgoY3JlYXRlRmlsdGVyTWF0cml4KGNvbmZpZykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhleGlmeShudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKG51bWJlciA8IDE2ID8gXCIwXCIgOiBcIlwiKSArIG51bWJlci50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVVJRCgpIHtcclxuICAgICAgICBpZiAoXCJyYW5kb21VVUlEXCIgaW4gY3J5cHRvKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHV1aWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoMCwgOCkgK1xyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoOSwgMTMpICtcclxuICAgICAgICAgICAgICAgIHV1aWQuc3Vic3RyaW5nKDE0LCAxOCkgK1xyXG4gICAgICAgICAgICAgICAgdXVpZC5zdWJzdHJpbmcoMTksIDIzKSArXHJcbiAgICAgICAgICAgICAgICB1dWlkLnN1YnN0cmluZygyNClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFwiZ2V0UmFuZG9tVmFsdWVzXCIgaW4gY3J5cHRvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTYpKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKHgpID0+IGhleGlmeSh4KSlcclxuICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMiAqKiA1NSkudG9TdHJpbmcoMzYpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlc29sdmVycyQxID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgcmVqZWN0b3JzID0gbmV3IE1hcCgpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gYmdGZXRjaChyZXF1ZXN0KSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5EYXJrUmVhZGVyPy5QbHVnaW5zPy5mZXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LkRhcmtSZWFkZXIuUGx1Z2lucy5mZXRjaChyZXF1ZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBnZW5lcmF0ZVVJRCgpO1xyXG4gICAgICAgICAgICByZXNvbHZlcnMkMS5zZXQoaWQsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICByZWplY3RvcnMuc2V0KGlkLCByZWplY3QpO1xyXG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBNZXNzYWdlVHlwZUNTdG9CRy5GRVRDSCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigoe3R5cGUsIGRhdGEsIGVycm9yLCBpZH0pID0+IHtcclxuICAgICAgICBpZiAodHlwZSA9PT0gTWVzc2FnZVR5cGVCR3RvQ1MuRkVUQ0hfUkVTUE9OU0UpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZSA9IHJlc29sdmVycyQxLmdldChpZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlamVjdCA9IHJlamVjdG9ycy5nZXQoaWQpO1xyXG4gICAgICAgICAgICByZXNvbHZlcnMkMS5kZWxldGUoaWQpO1xyXG4gICAgICAgICAgICByZWplY3RvcnMuZGVsZXRlKGlkKTtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QgJiYgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUgJiYgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IE1BWF9GUkFNRV9EVVJBVElPTiA9IDEwMDAgLyA2MDtcclxuICAgIGNsYXNzIEFzeW5jUXVldWUge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJJZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZFRhc2sodGFzaykge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnB1c2godGFzayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVGcmFtZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9wKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcklkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXVlID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjaGVkdWxlRnJhbWUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVySWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVySWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcklkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGxldCBjYjtcclxuICAgICAgICAgICAgICAgIHdoaWxlICgoY2IgPSB0aGlzLnF1ZXVlLnNoaWZ0KCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID49IE1BWF9GUkFNRV9EVVJBVElPTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlRnJhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VNYW5hZ2VyID0gbmV3IEFzeW5jUXVldWUoKTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlRGV0YWlscyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVVSTCA9IHVybC5zdGFydHNXaXRoKFwiZGF0YTpcIilcclxuICAgICAgICAgICAgICAgICAgICA/IHVybFxyXG4gICAgICAgICAgICAgICAgICAgIDogYXdhaXQgZ2V0RGF0YVVSTCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5Q29udmVydERhdGFVUkxUb0Jsb2JTeW5jKGRhdGFVUkwpID8/XHJcbiAgICAgICAgICAgICAgICAgICAgKGF3YWl0IGxvYWRBc0Jsb2IodXJsKSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVVSTC5zdGFydHNXaXRoKFwiZGF0YTppbWFnZS9zdmcreG1sXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoZGF0YVVSTCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKGF3YWl0IHRyeUNyZWF0ZUltYWdlQml0bWFwKGJsb2IpKSA/P1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXdhaXQgbG9hZEltYWdlKGRhdGFVUkwpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltYWdlTWFuYWdlci5hZGRUYXNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmFseXNpcyA9IGFuYWx5emVJbWFnZShpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVVJMOiBhbmFseXNpcy5pc0xhcmdlID8gXCJcIiA6IGRhdGFVUkwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmFuYWx5c2lzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGFVUkwodXJsKSB7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkVVJMID0gbmV3IFVSTCh1cmwpO1xyXG4gICAgICAgIGlmIChwYXJzZWRVUkwub3JpZ2luID09PSBsb2NhdGlvbi5vcmlnaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGxvYWRBc0RhdGFVUkwodXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGJnRmV0Y2goe3VybCwgcmVzcG9uc2VUeXBlOiBcImRhdGEtdXJsXCJ9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyeUNyZWF0ZUltYWdlQml0bWFwKGJsb2IpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGxvZ1dhcm4oXHJcbiAgICAgICAgICAgICAgICBgVW5hYmxlIHRvIGNyZWF0ZSBpbWFnZSBiaXRtYXAgZm9yIHR5cGUgJHtibG9iLnR5cGV9OiAke1N0cmluZyhlcnIpfWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgSU5DT01QTEVURV9ET0NfTE9BRElOR19JTUFHRV9MSU1JVCA9IDI1NjtcclxuICAgIGxldCBsb2FkaW5nSW1hZ2VzQ291bnQgPSAwO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEltYWdlKHVybCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmVycm9yID0gKCkgPT4gcmVqZWN0KGBVbmFibGUgdG8gbG9hZCBpbWFnZSAke3VybH1gKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKytsb2FkaW5nSW1hZ2VzQ291bnQgPD0gSU5DT01QTEVURV9ET0NfTE9BRElOR19JTUFHRV9MSU1JVCB8fFxyXG4gICAgICAgICAgICAgICAgaXNSZWFkeVN0YXRlQ29tcGxldGUoKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFkZFJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVyKCgpID0+IChpbWFnZS5zcmMgPSB1cmwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgTUFYX0FOQUxZU0lTX1BJWEVMU19DT1VOVCA9IDMyICogMzI7XHJcbiAgICBsZXQgY2FudmFzO1xyXG4gICAgbGV0IGNvbnRleHQ7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDYW52YXMoKSB7XHJcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSBNQVhfQU5BTFlTSVNfUElYRUxTX0NPVU5UO1xyXG4gICAgICAgIGNvbnN0IG1heEhlaWdodCA9IE1BWF9BTkFMWVNJU19QSVhFTFNfQ09VTlQ7XHJcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBtYXhXaWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIsIHt3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWV9KTtcclxuICAgICAgICBjb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2FudmFzKCkge1xyXG4gICAgICAgIGNhbnZhcyA9IG51bGw7XHJcbiAgICAgICAgY29udGV4dCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBMQVJHRV9JTUFHRV9QSVhFTFNfQ09VTlQgPSA1MTIgKiA1MTI7XHJcbiAgICBmdW5jdGlvbiBhbmFseXplSW1hZ2UoaW1hZ2UpIHtcclxuICAgICAgICBpZiAoIWNhbnZhcykge1xyXG4gICAgICAgICAgICBjcmVhdGVDYW52YXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHN3O1xyXG4gICAgICAgIGxldCBzaDtcclxuICAgICAgICBpZiAoaW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHN3ID0gaW1hZ2UubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICBzaCA9IGltYWdlLm5hdHVyYWxIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3cgPSBpbWFnZS53aWR0aDtcclxuICAgICAgICAgICAgc2ggPSBpbWFnZS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdyA9PT0gMCB8fCBzaCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNEYXJrOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTGlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNUcmFuc3BhcmVudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xhcmdlOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpc0xhcmdlID0gc3cgKiBzaCA+IExBUkdFX0lNQUdFX1BJWEVMU19DT1VOVDtcclxuICAgICAgICBjb25zdCBzb3VyY2VQaXhlbHNDb3VudCA9IHN3ICogc2g7XHJcbiAgICAgICAgY29uc3QgayA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICBNYXRoLnNxcnQoTUFYX0FOQUxZU0lTX1BJWEVMU19DT1VOVCAvIHNvdXJjZVBpeGVsc0NvdW50KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLmNlaWwoc3cgKiBrKTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmNlaWwoc2ggKiBrKTtcclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgc3csIHNoLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBkID0gaW1hZ2VEYXRhLmRhdGE7XHJcbiAgICAgICAgY29uc3QgVFJBTlNQQVJFTlRfQUxQSEFfVEhSRVNIT0xEID0gMC4wNTtcclxuICAgICAgICBjb25zdCBEQVJLX0xJR0hUTkVTU19USFJFU0hPTEQgPSAwLjQ7XHJcbiAgICAgICAgY29uc3QgTElHSFRfTElHSFRORVNTX1RIUkVTSE9MRCA9IDAuNztcclxuICAgICAgICBsZXQgdHJhbnNwYXJlbnRQaXhlbHNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGRhcmtQaXhlbHNDb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IGxpZ2h0UGl4ZWxzQ291bnQgPSAwO1xyXG4gICAgICAgIGxldCBpLCB4LCB5O1xyXG4gICAgICAgIGxldCByLCBnLCBiLCBhO1xyXG4gICAgICAgIGxldCBsO1xyXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgaSA9IDQgKiAoeSAqIHdpZHRoICsgeCk7XHJcbiAgICAgICAgICAgICAgICByID0gZFtpICsgMF07XHJcbiAgICAgICAgICAgICAgICBnID0gZFtpICsgMV07XHJcbiAgICAgICAgICAgICAgICBiID0gZFtpICsgMl07XHJcbiAgICAgICAgICAgICAgICBhID0gZFtpICsgM107XHJcbiAgICAgICAgICAgICAgICBpZiAoYSAvIDI1NSA8IFRSQU5TUEFSRU5UX0FMUEhBX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50UGl4ZWxzQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbCA9IGdldFNSR0JMaWdodG5lc3MociwgZywgYik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwgPCBEQVJLX0xJR0hUTkVTU19USFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFya1BpeGVsc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsID4gTElHSFRfTElHSFRORVNTX1RIUkVTSE9MRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWdodFBpeGVsc0NvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvdGFsUGl4ZWxzQ291bnQgPSB3aWR0aCAqIGhlaWdodDtcclxuICAgICAgICBjb25zdCBvcGFxdWVQaXhlbHNDb3VudCA9IHRvdGFsUGl4ZWxzQ291bnQgLSB0cmFuc3BhcmVudFBpeGVsc0NvdW50O1xyXG4gICAgICAgIGNvbnN0IERBUktfSU1BR0VfVEhSRVNIT0xEID0gMC43O1xyXG4gICAgICAgIGNvbnN0IExJR0hUX0lNQUdFX1RIUkVTSE9MRCA9IDAuNztcclxuICAgICAgICBjb25zdCBUUkFOU1BBUkVOVF9JTUFHRV9USFJFU0hPTEQgPSAwLjE7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaXNEYXJrOiBkYXJrUGl4ZWxzQ291bnQgLyBvcGFxdWVQaXhlbHNDb3VudCA+PSBEQVJLX0lNQUdFX1RIUkVTSE9MRCxcclxuICAgICAgICAgICAgaXNMaWdodDpcclxuICAgICAgICAgICAgICAgIGxpZ2h0UGl4ZWxzQ291bnQgLyBvcGFxdWVQaXhlbHNDb3VudCA+PSBMSUdIVF9JTUFHRV9USFJFU0hPTEQsXHJcbiAgICAgICAgICAgIGlzVHJhbnNwYXJlbnQ6XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudFBpeGVsc0NvdW50IC8gdG90YWxQaXhlbHNDb3VudCA+PVxyXG4gICAgICAgICAgICAgICAgVFJBTlNQQVJFTlRfSU1BR0VfVEhSRVNIT0xELFxyXG4gICAgICAgICAgICBpc0xhcmdlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGxldCBpc0Jsb2JVUkxTdXBwb3J0ZWQgPSBudWxsO1xyXG4gICAgbGV0IGNhblVzZVByb3h5ID0gZmFsc2U7XHJcbiAgICBsZXQgYmxvYlVSTENoZWNrUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCBibG9iVVJMQ2hlY2tBd2FpdGVycyA9IFtdO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIixcclxuICAgICAgICAoKSA9PiAoY2FuVXNlUHJveHkgPSB0cnVlKSxcclxuICAgICAgICB7b25jZTogdHJ1ZX1cclxuICAgICk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiByZXF1ZXN0QmxvYlVSTENoZWNrKCkge1xyXG4gICAgICAgIGlmICghY2FuVXNlUHJveHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmxvYlVSTENoZWNrUmVxdWVzdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGJsb2JVUkxDaGVja0F3YWl0ZXJzLnB1c2gocmVzb2x2ZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmxvYlVSTENoZWNrUmVxdWVzdGVkID0gdHJ1ZTtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Jsb2JVUkxDaGVja1Jlc3BvbnNlXCIsXHJcbiAgICAgICAgICAgICAgICAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQmxvYlVSTFN1cHBvcnRlZCA9IGUuZGV0YWlsLmJsb2JVUkxBbGxvd2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBibG9iVVJMQ2hlY2tBd2FpdGVycy5mb3JFYWNoKChyKSA9PiByKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2JVUkxDaGVja0F3YWl0ZXJzLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7b25jZTogdHJ1ZX1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fYmxvYlVSTENoZWNrUmVxdWVzdFwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNCbG9iVVJMQ2hlY2tSZXN1bHRSZWFkeSgpIHtcclxuICAgICAgICByZXR1cm4gaXNCbG9iVVJMU3VwcG9ydGVkICE9IG51bGwgfHwgIWNhblVzZVByb3h5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25DU1BFcnJvcihlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLmJsb2NrZWRVUkkgPT09IFwiYmxvYlwiKSB7XHJcbiAgICAgICAgICAgIGlzQmxvYlVSTFN1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2VjdXJpdHlwb2xpY3l2aW9sYXRpb25cIiwgb25DU1BFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlY3VyaXR5cG9saWN5dmlvbGF0aW9uXCIsIG9uQ1NQRXJyb3IpO1xyXG4gICAgY29uc3Qgb2JqZWN0VVJMcyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGdldEZpbHRlcmVkSW1hZ2VVUkwoe2RhdGFVUkwsIHdpZHRoLCBoZWlnaHR9LCB0aGVtZSkge1xyXG4gICAgICAgIGlmIChkYXRhVVJMLnN0YXJ0c1dpdGgoXCJkYXRhOmltYWdlL3N2Zyt4bWxcIikpIHtcclxuICAgICAgICAgICAgZGF0YVVSTCA9IGVzY2FwZVhNTChkYXRhVVJMKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWF0cml4ID0gZ2V0U1ZHRmlsdGVyTWF0cml4VmFsdWUodGhlbWUpO1xyXG4gICAgICAgIGNvbnN0IHN2ZyA9IFtcclxuICAgICAgICAgICAgYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIj5gLFxyXG4gICAgICAgICAgICBcIjxkZWZzPlwiLFxyXG4gICAgICAgICAgICAnPGZpbHRlciBpZD1cImRhcmtyZWFkZXItaW1hZ2UtZmlsdGVyXCI+JyxcclxuICAgICAgICAgICAgYDxmZUNvbG9yTWF0cml4IHR5cGU9XCJtYXRyaXhcIiB2YWx1ZXM9XCIke21hdHJpeH1cIiAvPmAsXHJcbiAgICAgICAgICAgIFwiPC9maWx0ZXI+XCIsXHJcbiAgICAgICAgICAgIFwiPC9kZWZzPlwiLFxyXG4gICAgICAgICAgICBgPGltYWdlIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiBmaWx0ZXI9XCJ1cmwoI2RhcmtyZWFkZXItaW1hZ2UtZmlsdGVyKVwiIHhsaW5rOmhyZWY9XCIke2RhdGFVUkx9XCIgLz5gLFxyXG4gICAgICAgICAgICBcIjwvc3ZnPlwiXHJcbiAgICAgICAgXS5qb2luKFwiXCIpO1xyXG4gICAgICAgIGlmICghaXNCbG9iVVJMU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke2J0b2Eoc3ZnKX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHN2Zy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ZnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJ5dGVzW2ldID0gc3ZnLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnl0ZXNdLCB7dHlwZTogXCJpbWFnZS9zdmcreG1sXCJ9KTtcclxuICAgICAgICBjb25zdCBvYmplY3RVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIG9iamVjdFVSTHMuYWRkKG9iamVjdFVSTCk7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdFVSTDtcclxuICAgIH1cclxuICAgIGNvbnN0IHhtbEVzY2FwZUNoYXJzID0ge1xyXG4gICAgICAgIFwiPFwiOiBcIiZsdDtcIixcclxuICAgICAgICBcIj5cIjogXCImZ3Q7XCIsXHJcbiAgICAgICAgXCImXCI6IFwiJmFtcDtcIixcclxuICAgICAgICBcIidcIjogXCImYXBvcztcIixcclxuICAgICAgICAnXCInOiBcIiZxdW90O1wiXHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gZXNjYXBlWE1MKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvWzw+JidcIl0vZywgKGMpID0+IHhtbEVzY2FwZUNoYXJzW2NdID8/IGMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YVVSTEJsb2JVUkxzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gdHJ5Q29udmVydERhdGFVUkxUb0Jsb2JTeW5jKGRhdGFVUkwpIHtcclxuICAgICAgICBjb25zdCBjb2xvbkluZGV4ID0gZGF0YVVSTC5pbmRleE9mKFwiOlwiKTtcclxuICAgICAgICBjb25zdCBzZW1pY29sb25JbmRleCA9IGRhdGFVUkwuaW5kZXhPZihcIjtcIiwgY29sb25JbmRleCArIDEpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1hSW5kZXggPSBkYXRhVVJMLmluZGV4T2YoXCIsXCIsIHNlbWljb2xvbkluZGV4ICsgMSk7XHJcbiAgICAgICAgY29uc3QgZW5jb2RpbmcgPSBkYXRhVVJMXHJcbiAgICAgICAgICAgIC5zdWJzdHJpbmcoc2VtaWNvbG9uSW5kZXggKyAxLCBjb21tYUluZGV4KVxyXG4gICAgICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBtZWRpYVR5cGUgPSBkYXRhVVJMLnN1YnN0cmluZyhjb2xvbkluZGV4ICsgMSwgc2VtaWNvbG9uSW5kZXgpO1xyXG4gICAgICAgIGlmIChlbmNvZGluZyAhPT0gXCJiYXNlNjRcIiB8fCAhbWVkaWFUeXBlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gYXRvYihkYXRhVVJMLnN1YnN0cmluZyhjb21tYUluZGV4ICsgMSkpO1xyXG4gICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoY2hhcmFjdGVycy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBieXRlc1tpXSA9IGNoYXJhY3RlcnMuY2hhckNvZGVBdChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKFtieXRlc10sIHt0eXBlOiBtZWRpYVR5cGV9KTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHRyeUNvbnZlcnREYXRhVVJMVG9CbG9iVVJMKGRhdGFVUkwpIHtcclxuICAgICAgICBpZiAoIWlzQmxvYlVSTFN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaGFzaCA9IGdldEhhc2hDb2RlKGRhdGFVUkwpO1xyXG4gICAgICAgIGxldCBibG9iVVJMID0gZGF0YVVSTEJsb2JVUkxzLmdldChoYXNoKTtcclxuICAgICAgICBpZiAoYmxvYlVSTCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYmxvYlVSTDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJsb2IgPSB0cnlDb252ZXJ0RGF0YVVSTFRvQmxvYlN5bmMoZGF0YVVSTCk7XHJcbiAgICAgICAgaWYgKCFibG9iKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVVSTCk7XHJcbiAgICAgICAgICAgIGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJsb2JVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIGRhdGFVUkxCbG9iVVJMcy5zZXQoaGFzaCwgYmxvYlVSTCk7XHJcbiAgICAgICAgcmV0dXJuIGJsb2JVUkw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbkltYWdlUHJvY2Vzc2luZ0NhY2hlKCkge1xyXG4gICAgICAgIGltYWdlTWFuYWdlciAmJiBpbWFnZU1hbmFnZXIuc3RvcCgpO1xyXG4gICAgICAgIHJlbW92ZUNhbnZhcygpO1xyXG4gICAgICAgIG9iamVjdFVSTHMuZm9yRWFjaCgodSkgPT4gVVJMLnJldm9rZU9iamVjdFVSTCh1KSk7XHJcbiAgICAgICAgb2JqZWN0VVJMcy5jbGVhcigpO1xyXG4gICAgICAgIGRhdGFVUkxCbG9iVVJMcy5mb3JFYWNoKCh1KSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKHUpKTtcclxuICAgICAgICBkYXRhVVJMQmxvYlVSTHMuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBncmFkaWVudExlbmd0aCA9IFwiZ3JhZGllbnRcIi5sZW5ndGg7XHJcbiAgICBjb25zdCBjb25pY0dyYWRpZW50ID0gXCJjb25pYy1cIjtcclxuICAgIGNvbnN0IGNvbmljR3JhZGllbnRMZW5ndGggPSBjb25pY0dyYWRpZW50Lmxlbmd0aDtcclxuICAgIGNvbnN0IHJhZGlhbEdyYWRpZW50ID0gXCJyYWRpYWwtXCI7XHJcbiAgICBjb25zdCBsaW5lYXJHcmFkaWVudCA9IFwibGluZWFyLVwiO1xyXG4gICAgZnVuY3Rpb24gcGFyc2VHcmFkaWVudCh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBjb25pY0dyYWRpZW50Lmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoKGluZGV4ID0gdmFsdWUuaW5kZXhPZihcImdyYWRpZW50XCIsIHN0YXJ0SW5kZXgpKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IHR5cGVHcmFkaWVudDtcclxuICAgICAgICAgICAgW2xpbmVhckdyYWRpZW50LCByYWRpYWxHcmFkaWVudCwgY29uaWNHcmFkaWVudF0uZmluZChcclxuICAgICAgICAgICAgICAgIChwb3NzaWJsZVR5cGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zc2libGVHcmFkaWVudCA9IHZhbHVlLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZUdyYWRpZW50ID09PSBwb3NzaWJsZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4IC0gcG9zc2libGVUeXBlLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApID09PSBcInJlcGVhdGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQgPSBgcmVwZWF0aW5nLSR7cG9zc2libGVUeXBlfWdyYWRpZW50YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSBwb3NzaWJsZVR5cGUubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgPT09IFwiLXdlYmtpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQgPSBgLXdlYmtpdC0ke3Bvc3NpYmxlVHlwZX1ncmFkaWVudGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlR3JhZGllbnQgPSBgJHtwb3NzaWJsZVR5cGV9Z3JhZGllbnRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICghdHlwZUdyYWRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB7c3RhcnQsIGVuZH0gPSBnZXRQYXJlbnRoZXNlc1JhbmdlKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBpbmRleCArIGdyYWRpZW50TGVuZ3RoXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdmFsdWUuc3Vic3RyaW5nKHN0YXJ0ICsgMSwgZW5kIC0gMSk7XHJcbiAgICAgICAgICAgIHN0YXJ0SW5kZXggPSBlbmQgKyAxICsgY29uaWNHcmFkaWVudExlbmd0aDtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50LFxyXG4gICAgICAgICAgICAgICAgbWF0Y2gsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IHR5cGVHcmFkaWVudC5sZW5ndGggKyAyLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4IC0gdHlwZUdyYWRpZW50Lmxlbmd0aCArIGdyYWRpZW50TGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgaGFzQ29tbWE6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0uaGFzQ29tbWEgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQcmlvcml0eShydWxlU3R5bGUsIHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVsZVN0eWxlICYmIHJ1bGVTdHlsZS5nZXRQcm9wZXJ0eVByaW9yaXR5KHByb3BlcnR5KSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmlhYmxlQ1NTRGVjbGFyYXRpb24oXHJcbiAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgcnVsZSxcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IG1vZGlmaWVyID0gbnVsbDtcclxuICAgICAgICBpZiAocHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0VmFyaWFibGVNb2RpZmllcihcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcyhcInZhcihcIikpIHtcclxuICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRWYXJpYWJsZURlcGVuZGFudE1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gXCJjb2xvci1zY2hlbWVcIikge1xyXG4gICAgICAgICAgICBtb2RpZmllciA9IGdldENvbG9yU2NoZW1lTW9kaWZpZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5ID09PSBcInNjcm9sbGJhci1jb2xvclwiKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0U2Nyb2xsYmFyQ29sb3JNb2RpZmllcih2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgKHByb3BlcnR5LmluY2x1ZGVzKFwiY29sb3JcIikgJiZcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9PSBcIi13ZWJraXQtcHJpbnQtY29sb3ItYWRqdXN0XCIpIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImZpbGxcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJzdHJva2VcIiB8fFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJzdG9wLWNvbG9yXCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcImJvcmRlclwiKSAmJlxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgIT09IFwiYm9yZGVyLWNvbG9yXCIgJiZcclxuICAgICAgICAgICAgICAgIHZhbHVlID09PSBcImluaXRpYWxcIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlclNpZGVQcm9wID0gcHJvcGVydHkuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkubGVuZ3RoIC0gNlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJvcmRlclNpZGVWYWwgPVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShib3JkZXJTaWRlUHJvcCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyU2lkZVZhbC5zdGFydHNXaXRoKFwiMHB4XCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyU2lkZVZhbCA9PT0gXCJub25lXCJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gYm9yZGVyU2lkZVByb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXIgPSBib3JkZXJTaWRlVmFsO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRDb2xvck1vZGlmaWVyKHByb3BlcnR5LCB2YWx1ZSwgcnVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwibGlzdC1zdHlsZS1pbWFnZVwiXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIG1vZGlmaWVyID0gZ2V0QmdJbWFnZU1vZGlmaWVyKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkuaW5jbHVkZXMoXCJzaGFkb3dcIikpIHtcclxuICAgICAgICAgICAgbW9kaWZpZXIgPSBnZXRTaGFkb3dNb2RpZmllcih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbW9kaWZpZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICB2YWx1ZTogbW9kaWZpZXIsXHJcbiAgICAgICAgICAgIGltcG9ydGFudDogZ2V0UHJpb3JpdHkocnVsZS5zdHlsZSwgcHJvcGVydHkpLFxyXG4gICAgICAgICAgICBzb3VyY2VWYWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gam9pblNlbGVjdG9ycyguLi5zZWxlY3RvcnMpIHtcclxuICAgICAgICByZXR1cm4gc2VsZWN0b3JzLmZpbHRlcihCb29sZWFuKS5qb2luKFwiLCBcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBob3N0c1dpdGhPZGRTY3JvbGxiYXJzID0gW1wiY2FsZW5kYXIuZ29vZ2xlLmNvbVwiXTtcclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkVXNlckFnZW50U3R5bGUodGhlbWUsIGlzSUZyYW1lLCBzdHlsZVN5c3RlbUNvbnRyb2xzKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBpZiAoIWlzSUZyYW1lKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJodG1sIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBgICAgIGJhY2tncm91bmQtY29sb3I6ICR7bW9kaWZ5QmFja2dyb3VuZENvbG9yKHtyOiAyNTUsIGc6IDI1NSwgYjogMjU1fSwgdGhlbWUpfSAhaW1wb3J0YW50O2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NTU0NvbG9yU2NoZW1lUHJvcFN1cHBvcnRlZCAmJiB0aGVtZS5tb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJodG1sIHtcIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCAgICBjb2xvci1zY2hlbWU6IGRhcmsgIWltcG9ydGFudDtgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goXCJpZnJhbWUge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgICAgIGNvbG9yLXNjaGVtZTogZGFyayAhaW1wb3J0YW50O2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmdTZWxlY3RvcnMgPSBqb2luU2VsZWN0b3JzKFxyXG4gICAgICAgICAgICBpc0lGcmFtZSA/IFwiXCIgOiBcImh0bWwsIGJvZHlcIixcclxuICAgICAgICAgICAgc3R5bGVTeXN0ZW1Db250cm9scyA/IFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbiwgZGlhbG9nXCIgOiBcIlwiXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoYmdTZWxlY3RvcnMpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtiZ1NlbGVjdG9yc30ge2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgYCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke21vZGlmeUJhY2tncm91bmRDb2xvcih7cjogMjU1LCBnOiAyNTUsIGI6IDI1NX0sIHRoZW1lKX07YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCR7am9pblNlbGVjdG9ycyhcImh0bWwsIGJvZHlcIiwgc3R5bGVTeXN0ZW1Db250cm9scyA/IFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvblwiIDogXCJcIil9IHtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgICAgIGJvcmRlci1jb2xvcjogJHttb2RpZnlCb3JkZXJDb2xvcih7cjogNzYsIGc6IDc2LCBiOiA3Nn0sIHRoZW1lKX07YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSl9O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJhIHtcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDY0LCBiOiAyNTV9LCB0aGVtZSl9O2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJ0YWJsZSB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgYm9yZGVyLWNvbG9yOiAke21vZGlmeUJvcmRlckNvbG9yKHtyOiAxMjgsIGc6IDEyOCwgYjogMTI4fSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwibWFyayB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAwLCBnOiAwLCBiOiAwfSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiOjpwbGFjZWhvbGRlciB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgY29sb3I6ICR7bW9kaWZ5Rm9yZWdyb3VuZENvbG9yKHtyOiAxNjksIGc6IDE2OSwgYjogMTY5fSwgdGhlbWUpfTtgXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwiaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcIik7XHJcbiAgICAgICAgbGluZXMucHVzaChcInRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsXCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXCJzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCB7XCIpO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1MCwgZzogMjU1LCBiOiAxODl9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0aGVtZS5zY3JvbGxiYXJDb2xvciAmJlxyXG4gICAgICAgICAgICAhaG9zdHNXaXRoT2RkU2Nyb2xsYmFycy5pbmNsdWRlcyhsb2NhdGlvbi5ob3N0bmFtZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChnZXRNb2RpZmllZFNjcm9sbGJhclN0eWxlKHRoZW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGVtZS5zZWxlY3Rpb25Db2xvcikge1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGdldE1vZGlmaWVkU2VsZWN0aW9uU3R5bGUodGhlbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTGF5ZXJSdWxlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIGxpbmVzLnVuc2hpZnQoXCJAbGF5ZXIge1wiKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0aW9uQ29sb3IodGhlbWUpIHtcclxuICAgICAgICBsZXQgYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIGxldCBmb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb247XHJcbiAgICAgICAgaWYgKHRoZW1lLnNlbGVjdGlvbkNvbG9yID09PSBcImF1dG9cIikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgICAgICB7cjogMCwgZzogOTYsIGI6IDIxMn0sXHJcbiAgICAgICAgICAgICAgICB7Li4udGhlbWUsIGdyYXlzY2FsZTogMH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID0gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKFxyXG4gICAgICAgICAgICAgICAge3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LFxyXG4gICAgICAgICAgICAgICAgey4uLnRoZW1lLCBncmF5c2NhbGU6IDB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh0aGVtZS5zZWxlY3Rpb25Db2xvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiA9IHRoZW1lLnNlbGVjdGlvbkNvbG9yO1xyXG4gICAgICAgICAgICBpZiAoaHNsLmwgPCAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9IFwiI0ZGRlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uID0gXCIjMDAwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24sIGZvcmVncm91bmRDb2xvclNlbGVjdGlvbn07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZFNlbGVjdGlvblN0eWxlKHRoZW1lKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFNlbGVjdGlvbkNvbG9yID0gZ2V0U2VsZWN0aW9uQ29sb3IodGhlbWUpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvclNlbGVjdGlvbiA9XHJcbiAgICAgICAgICAgIG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IuYmFja2dyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIGNvbnN0IGZvcmVncm91bmRDb2xvclNlbGVjdGlvbiA9XHJcbiAgICAgICAgICAgIG1vZGlmaWVkU2VsZWN0aW9uQ29sb3IuZm9yZWdyb3VuZENvbG9yU2VsZWN0aW9uO1xyXG4gICAgICAgIFtcIjo6c2VsZWN0aW9uXCIsIFwiOjotbW96LXNlbGVjdGlvblwiXS5mb3JFYWNoKChzZWxlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtzZWxlY3Rpb259IHtgKTtcclxuICAgICAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgICAgIGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtiYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb259ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAgICAgY29sb3I6ICR7Zm9yZWdyb3VuZENvbG9yU2VsZWN0aW9ufSAhaW1wb3J0YW50O2ApO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1vZGlmaWVkU2Nyb2xsYmFyU3R5bGUodGhlbWUpIHtcclxuICAgICAgICBsZXQgY29sb3JUcmFjaztcclxuICAgICAgICBsZXQgY29sb3JUaHVtYjtcclxuICAgICAgICBpZiAodGhlbWUuc2Nyb2xsYmFyQ29sb3IgPT09IFwiYXV0b1wiKSB7XHJcbiAgICAgICAgICAgIGNvbG9yVHJhY2sgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI0MSwgZzogMjQxLCBiOiAyNDF9LCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWIgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDE3NiwgZzogMTc2LCBiOiAxNzZ9LCB0aGVtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZSh0aGVtZS5zY3JvbGxiYXJDb2xvcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhzbCA9IHJnYlRvSFNMKHJnYik7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhcmtlbiA9IChkYXJrZXIpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAuLi5oc2wsXHJcbiAgICAgICAgICAgICAgICBsOiBjbGFtcChoc2wubCAtIGRhcmtlciwgMCwgMSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbG9yVHJhY2sgPSBoc2xUb1N0cmluZyhkYXJrZW4oMC40KSk7XHJcbiAgICAgICAgICAgIGNvbG9yVGh1bWIgPSBoc2xUb1N0cmluZyhoc2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBgKiB7YCxcclxuICAgICAgICAgICAgYCAgICBzY3JvbGxiYXItY29sb3I6ICR7Y29sb3JUaHVtYn0gJHtjb2xvclRyYWNrfTtgLFxyXG4gICAgICAgICAgICBgfWBcclxuICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUodGhlbWUsIHtzdHJpY3R9KSB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IGRlZmF1bHRGYWxsYmFja0ZhY3Rvcnk7XHJcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkodGhlbWUsIHtzdHJpY3R9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlZmF1bHRGYWxsYmFja0ZhY3RvcnkodGhlbWUsIHtzdHJpY3R9KSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICBgaHRtbCwgYm9keSwgJHtzdHJpY3QgPyBcImJvZHkgOm5vdChpZnJhbWUpXCIgOiBcImJvZHkgPiA6bm90KGlmcmFtZSlcIn0ge2BcclxuICAgICAgICApO1xyXG4gICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgIGAgICAgYmFja2dyb3VuZC1jb2xvcjogJHttb2RpZnlCYWNrZ3JvdW5kQ29sb3Ioe3I6IDI1NSwgZzogMjU1LCBiOiAyNTV9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBib3JkZXItY29sb3I6ICR7bW9kaWZ5Qm9yZGVyQ29sb3Ioe3I6IDY0LCBnOiA2NCwgYjogNjR9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcclxuICAgICAgICAgICAgYCAgICBjb2xvcjogJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3Ioe3I6IDAsIGc6IDAsIGI6IDB9LCB0aGVtZSl9ICFpbXBvcnRhbnQ7YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGluZXMucHVzaChcIn1cIik7XHJcbiAgICAgICAgbGluZXMucHVzaChgZGl2W3N0eWxlKj1cImJhY2tncm91bmQtY29sb3I6IHJnYigxMzUsIDEzNSwgMTM1KVwiXSB7YCk7XHJcbiAgICAgICAgbGluZXMucHVzaChgICAgIGJhY2tncm91bmQtY29sb3I6ICM4Nzg3ODcgIWltcG9ydGFudDtgKTtcclxuICAgICAgICBsaW5lcy5wdXNoKFwifVwiKTtcclxuICAgICAgICByZXR1cm4gbGluZXMuam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHVucGFyc2FibGVDb2xvcnMgPSBuZXcgU2V0KFtcclxuICAgICAgICBcImluaGVyaXRcIixcclxuICAgICAgICBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgXCJpbml0aWFsXCIsXHJcbiAgICAgICAgXCJjdXJyZW50Y29sb3JcIixcclxuICAgICAgICBcIm5vbmVcIixcclxuICAgICAgICBcInVuc2V0XCIsXHJcbiAgICAgICAgXCJhdXRvXCJcclxuICAgIF0pO1xyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JNb2RpZmllcihwcm9wLCB2YWx1ZSwgcnVsZSkge1xyXG4gICAgICAgIGlmICh1bnBhcnNhYmxlQ29sb3JzLmhhcyh2YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJnYiA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUodmFsdWUpO1xyXG4gICAgICAgIGlmICghcmdiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcC5pbmNsdWRlcyhcImJhY2tncm91bmRcIikpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUud2Via2l0TWFza0ltYWdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZS53ZWJraXRNYXNrSW1hZ2UgIT09IFwibm9uZVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgKHJ1bGUuc3R5bGUud2Via2l0TWFzayAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFydWxlLnN0eWxlLndlYmtpdE1hc2suc3RhcnRzV2l0aChcIm5vbmVcIikpIHx8XHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS5tYXNrICYmIHJ1bGUuc3R5bGUubWFzayAhPT0gXCJub25lXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAocnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwibWFzay1pbWFnZVwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIm1hc2staW1hZ2VcIikgIT09IFwibm9uZVwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IG1vZGlmeUZvcmVncm91bmRDb2xvcihyZ2IsIHRoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9wLmluY2x1ZGVzKFwiYm9yZGVyXCIpIHx8IHByb3AuaW5jbHVkZXMoXCJvdXRsaW5lXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IG1vZGlmeUJvcmRlckNvbG9yKHJnYiwgdGhlbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiBtb2RpZnlGb3JlZ3JvdW5kQ29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbWFnZURldGFpbHNDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gc2hvdWxkSWdub3JlSW1hZ2Uoc2VsZWN0b3JUZXh0LCBzZWxlY3RvcnMpIHtcclxuICAgICAgICBpZiAoIXNlbGVjdG9yVGV4dCB8fCBzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdG9ycy5zb21lKChzKSA9PiBzID09PSBcIipcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJ1bGVTZWxlY3RvcnMgPSBzZWxlY3RvclRleHQuc3BsaXQoLyxcXHMqL2cpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlnbm9yZWRTZWxlY3RvciA9IHNlbGVjdG9yc1tpXTtcclxuICAgICAgICAgICAgaWYgKHJ1bGVTZWxlY3RvcnMuc29tZSgocykgPT4gcyA9PT0gaWdub3JlZFNlbGVjdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0QmdJbWFnZU1vZGlmaWVyKFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHJ1bGUsXHJcbiAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnMsXHJcbiAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmVJbWFnZShydWxlLnNlbGVjdG9yVGV4dCwgaWdub3JlSW1hZ2VTZWxlY3RvcnMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnRzID0gcGFyc2VHcmFkaWVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybHMgPSBnZXRNYXRjaGVzKGNzc1VSTFJlZ2V4LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh1cmxzLmxlbmd0aCA9PT0gMCAmJiBncmFkaWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZ2V0SW5kaWNlcyA9IChtYXRjaGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXMubWFwKChtYXRjaCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSB2YWx1ZS5pbmRleE9mKG1hdGNoLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB2YWx1ZUluZGV4ICsgbWF0Y2gubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7bWF0Y2gsIGluZGV4OiB2YWx1ZUluZGV4fTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gZ3JhZGllbnRzXHJcbiAgICAgICAgICAgICAgICAubWFwKChpKSA9PiAoe3R5cGU6IFwiZ3JhZGllbnRcIiwgLi4uaX0pKVxyXG4gICAgICAgICAgICAgICAgLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBnZXRJbmRpY2VzKHVybHMpLm1hcCgoaSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cmxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gKGEuaW5kZXggPiBiLmluZGV4ID8gMSA6IC0xKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldEdyYWRpZW50TW9kaWZpZXIgPSAoZ3JhZGllbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt0eXBlR3JhZGllbnQsIG1hdGNoLCBoYXNDb21tYX0gPSBncmFkaWVudDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzUmVnZXggPVxyXG4gICAgICAgICAgICAgICAgICAgIC8oW15cXChcXCksXSsoXFwoW15cXChcXCldKihcXChbXlxcKFxcKV0qXFwpKlteXFwoXFwpXSopP1xcKSk/KFteXFwoXFwpLCBdfCggKD8hY2FsYykpKSopLD8vZztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yU3RvcFJlZ2V4ID1cclxuICAgICAgICAgICAgICAgICAgICAvXihmcm9tfGNvbG9yLXN0b3B8dG8pXFwoKFteXFwoXFwpXSo/LFxccyopPyguKj8pXFwpJC87XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGdldE1hdGNoZXMocGFydHNSZWdleCwgbWF0Y2gsIDEpLm1hcCgocGFydCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnQgPSBwYXJ0LnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShwYXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IG1vZGlmeUdyYWRpZW50Q29sb3IocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gcGFydC5sYXN0SW5kZXhPZihcIiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShwYXJ0LnN1YnN0cmluZygwLCBzcGFjZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZ2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke21vZGlmeUdyYWRpZW50Q29sb3IocmdiLCB0aGVtZSl9ICR7cGFydC5zdWJzdHJpbmcoc3BhY2UgKyAxKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvclN0b3BNYXRjaCA9IHBhcnQubWF0Y2goY29sb3JTdG9wUmVnZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvclN0b3BNYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yU3RvcE1hdGNoWzNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJnYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjb2xvclN0b3BNYXRjaFsxXX0oJHtjb2xvclN0b3BNYXRjaFsyXSA/IGAke2NvbG9yU3RvcE1hdGNoWzJdfSwgYCA6IFwiXCJ9JHttb2RpZnlHcmFkaWVudENvbG9yKHJnYiwgdGhlbWUpfSlgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiBwYXJ0O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3R5cGVHcmFkaWVudH0oJHtwYXJ0cy5tYXAoKG1vZGlmeSkgPT4gbW9kaWZ5KHRoZW1lKSkuam9pbihcIiwgXCIpfSkke2hhc0NvbW1hID8gXCIsIFwiIDogXCJcIn1gO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0VVJMTW9kaWZpZXIgPSAodXJsVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBnZXRDU1NVUkxWYWx1ZSh1cmxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1VSTEVtcHR5ID0gdXJsLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtwYXJlbnRTdHlsZVNoZWV0fSA9IHJ1bGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiYXNlVVJMID1cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRTdHlsZVNoZWV0ICYmIHBhcmVudFN0eWxlU2hlZXQuaHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGdldENTU0Jhc2VCYXRoKHBhcmVudFN0eWxlU2hlZXQuaHJlZilcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJlbnRTdHlsZVNoZWV0Py5vd25lck5vZGU/LmJhc2VVUkkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5vcmlnaW47XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBnZXRBYnNvbHV0ZVVSTChiYXNlVVJMLCB1cmwpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1VSTEVtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInVybCgnJylcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlRGV0YWlscyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlRGV0YWlsc0NhY2hlLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyA9IGltYWdlRGV0YWlsc0NhY2hlLmdldCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQmxvYlVSTENoZWNrUmVzdWx0UmVhZHkoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHJlcXVlc3RCbG9iVVJMQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5oYXModXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF3YWl0ZXJzID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuZ2V0KHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEZXRhaWxzID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0ZXJzLnB1c2gocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1hZ2VEZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuc2V0KHVybCwgW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlscyA9IGF3YWl0IGdldEltYWdlRGV0YWlscyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGV0YWlsc0NhY2hlLnNldCh1cmwsIGltYWdlRGV0YWlscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldCh1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKChyZXNvbHZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbWFnZURldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuZGVsZXRlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNDYW5jZWxsZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ1dhcm4oZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhd2FpdGluZ0ZvckltYWdlTG9hZGluZy5oYXModXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCgocmVzb2x2ZSkgPT4gcmVzb2x2ZShudWxsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXRpbmdGb3JJbWFnZUxvYWRpbmcuZGVsZXRlKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiZ0ltYWdlVmFsdWUgPSBnZXRCZ0ltYWdlVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmdJbWFnZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmdJbWFnZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2JVUkwgPSBhd2FpdCB0cnlDb252ZXJ0RGF0YVVSTFRvQmxvYlVSTCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmxvYlVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB1cmwoXCIke2Jsb2JVUkx9XCIpYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHVybChcIiR7dXJsfVwiKWA7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBnZXRCZ0ltYWdlVmFsdWUgPSAoaW1hZ2VEZXRhaWxzLCB0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2lzRGFyaywgaXNMaWdodCwgaXNUcmFuc3BhcmVudCwgaXNMYXJnZSwgd2lkdGh9ID1cclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURldGFpbHM7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9nU3JjID0gaW1hZ2VEZXRhaWxzLnNyYy5zdGFydHNXaXRoKFwiZGF0YTpcIilcclxuICAgICAgICAgICAgICAgICAgICA/IFwiZGF0YTpcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogaW1hZ2VEZXRhaWxzLnNyYztcclxuICAgICAgICAgICAgICAgIGlmIChpc0xhcmdlICYmIGlzTGlnaHQgJiYgIWlzVHJhbnNwYXJlbnQgJiYgdGhlbWUubW9kZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oYEhpZGluZyBsYXJnZSBsaWdodCBpbWFnZSAke2xvZ1NyY31gKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgaXNEYXJrICYmXHJcbiAgICAgICAgICAgICAgICAgICAgaXNUcmFuc3BhcmVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLm1vZGUgPT09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCA+IDJcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oYEludmVydGluZyBkYXJrIGltYWdlICR7bG9nU3JjfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGludmVydGVkID0gZ2V0RmlsdGVyZWRJbWFnZVVSTChpbWFnZURldGFpbHMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGlhOiBjbGFtcCh0aGVtZS5zZXBpYSArIDEwLCAwLCAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gYHVybChcIiR7aW52ZXJ0ZWR9XCIpYDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNMaWdodCAmJiAhaXNUcmFuc3BhcmVudCAmJiB0aGVtZS5tb2RlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhgRGltbWluZyBsaWdodCBpbWFnZSAke2xvZ1NyY31gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaW1tZWQgPSBnZXRGaWx0ZXJlZEltYWdlVVJMKGltYWdlRGV0YWlscywgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGB1cmwoXCIke2RpbW1lZH1cIilgO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGVtZS5tb2RlID09PSAwICYmIGlzTGlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dJbmZvKGBBcHBseWluZyBmaWx0ZXIgdG8gaW1hZ2UgJHtsb2dTcmN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBnZXRGaWx0ZXJlZEltYWdlVVJMKGltYWdlRGV0YWlscywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZ2h0bmVzczogY2xhbXAodGhlbWUuYnJpZ2h0bmVzcyAtIDEwLCA1LCAyMDApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBpYTogY2xhbXAodGhlbWUuc2VwaWEgKyAxMCwgMCwgMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGB1cmwoXCIke2ZpbHRlcmVkfVwiKWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ0luZm8oYE5vdCBtb2RpZnlpbmcgdGhlIGltYWdlICR7bG9nU3JjfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBtb2RpZmllcnMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IG1hdGNoSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBsZXQgcHJldkhhc0NvbW1hID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG1hdGNoZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgICh7dHlwZSwgbWF0Y2gsIGluZGV4LCB0eXBlR3JhZGllbnQsIGhhc0NvbW1hLCBvZmZzZXR9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hTdGFydCA9IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWZpeFN0YXJ0ID0gbWF0Y2hJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyBtYXRjaC5sZW5ndGggKyBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleCA9IG1hdGNoRW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmaXhTdGFydCAhPT0gbWF0Y2hTdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldkhhc0NvbW1hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJldHdlZW5WYWx1ZSA9IHZhbHVlLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4U3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoU3RhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiZXR3ZWVuVmFsdWVbMF0gPT09IFwiLFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJldHdlZW5WYWx1ZSA9IGJldHdlZW5WYWx1ZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBiZXR3ZWVuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc3Vic3RyaW5nKHByZWZpeFN0YXJ0LCBtYXRjaFN0YXJ0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwcmV2SGFzQ29tbWEgPSBoYXNDb21tYSB8fCBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJ1cmxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaChnZXRVUkxNb2RpZmllcihtYXRjaCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJncmFkaWVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0R3JhZGllbnRNb2RpZmllcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUdyYWRpZW50OiB0eXBlR3JhZGllbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ29tbWE6IGhhc0NvbW1hIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IG1hdGNoZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgoKSA9PiB2YWx1ZS5zdWJzdHJpbmcobWF0Y2hFbmQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBtb2RpZmllcnNcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgobW9kaWZ5KSA9PiBtb2RpZnkodGhlbWUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLnNvbWUoKHIpID0+IHIgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZXN1bHRzKS50aGVuKChhc3luY1Jlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jUmVzdWx0cy5maWx0ZXIoQm9vbGVhbikuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkUmVzdWx0ID0gcmVzdWx0cy5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbWJpbmVkUmVzdWx0LmVuZHNXaXRoKFwiLCBpbml0aWFsXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVzdWx0LnNsaWNlKDAsIC05KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2hhZG93TW9kaWZpZXJXaXRoSW5mbyh2YWx1ZSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yTWF0Y2hlcyA9IGdldE1hdGNoZXMoXHJcbiAgICAgICAgICAgICAgICAvKF58XFxzKSg/IWNhbGMpKFthLXpdK1xcKC4rP1xcKXwjWzAtOWEtZl0rfFthLXpdKykoLio/KGluc2V0fG91dHNldCk/KCR8LCkpL2dpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGxldCBub3RQYXJzZWQgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBtb2RpZmllcnMgPSBjb2xvck1hdGNoZXMubWFwKChtYXRjaCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZml4SW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoSW5kZXggPSB2YWx1ZS5pbmRleE9mKG1hdGNoLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaEVuZCA9IG1hdGNoSW5kZXggKyBtYXRjaC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IG1hdGNoRW5kO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmdiID0gcGFyc2VDb2xvcldpdGhDYWNoZShtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJnYikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdFBhcnNlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB2YWx1ZS5zdWJzdHJpbmcocHJlZml4SW5kZXgsIG1hdGNoRW5kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgYCR7dmFsdWUuc3Vic3RyaW5nKHByZWZpeEluZGV4LCBtYXRjaEluZGV4KX0ke21vZGlmeVNoYWRvd0NvbG9yKHJnYiwgdGhlbWUpfSR7aSA9PT0gY29sb3JNYXRjaGVzLmxlbmd0aCAtIDEgPyB2YWx1ZS5zdWJzdHJpbmcobWF0Y2hFbmQpIDogXCJcIn1gO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZWQgPSBtb2RpZmllcnNcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChtb2RpZnkpID0+IG1vZGlmeSh0aGVtZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXNMZW5ndGg6IGNvbG9yTWF0Y2hlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdW5wYXJzZWFibGVNYXRjaGVzTGVuZ3RoOiBub3RQYXJzZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBtb2RpZmllZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U2hhZG93TW9kaWZpZXIodmFsdWUpIHtcclxuICAgICAgICBjb25zdCBzaGFkb3dNb2RpZmllciA9IGdldFNoYWRvd01vZGlmaWVyV2l0aEluZm8odmFsdWUpO1xyXG4gICAgICAgIGlmICghc2hhZG93TW9kaWZpZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAodGhlbWUpID0+IHNoYWRvd01vZGlmaWVyKHRoZW1lKS5yZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxiYXJDb2xvck1vZGlmaWVyKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3JzTWF0Y2ggPSB2YWx1ZS5tYXRjaChcclxuICAgICAgICAgICAgL15cXHMqKFthLXpdKyhcXCguKlxcKSk/KVxccysoW2Etel0rKFxcKC4qXFwpKT8pXFxzKiQvXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoIWNvbG9yc01hdGNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGh1bWIgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yc01hdGNoWzFdKTtcclxuICAgICAgICBjb25zdCB0cmFjayA9IHBhcnNlQ29sb3JXaXRoQ2FjaGUoY29sb3JzTWF0Y2hbM10pO1xyXG4gICAgICAgIGlmICghdGh1bWIgfHwgIXRyYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICBgJHttb2RpZnlGb3JlZ3JvdW5kQ29sb3IodGh1bWIsIHRoZW1lKX0gJHttb2RpZnlCYWNrZ3JvdW5kQ29sb3IodGh1bWIsIHRoZW1lKX1gO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0Q29sb3JTY2hlbWVNb2RpZmllcigpIHtcclxuICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiAodGhlbWUubW9kZSA9PT0gMCA/IFwiZGFyayBsaWdodFwiIDogXCJkYXJrXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVNb2RpZmllcihcclxuICAgICAgICB2YXJpYWJsZXNTdG9yZSxcclxuICAgICAgICBwcm9wLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHJ1bGUsXHJcbiAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICBpc0NhbmNlbGxlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlc1N0b3JlLmdldE1vZGlmaWVyRm9yVmFyaWFibGUoe1xyXG4gICAgICAgICAgICB2YXJOYW1lOiBwcm9wLFxyXG4gICAgICAgICAgICBzb3VyY2VWYWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgIHJ1bGUsXHJcbiAgICAgICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRWYXJpYWJsZURlcGVuZGFudE1vZGlmaWVyKHZhcmlhYmxlc1N0b3JlLCBwcm9wLCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YXJpYWJsZXNTdG9yZS5nZXRNb2RpZmllckZvclZhckRlcGVuZGFudChwcm9wLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbk1vZGlmaWNhdGlvbkNhY2hlKCkge1xyXG4gICAgICAgIGNsZWFyQ29sb3JNb2RpZmljYXRpb25DYWNoZSgpO1xyXG4gICAgICAgIGltYWdlRGV0YWlsc0NhY2hlLmNsZWFyKCk7XHJcbiAgICAgICAgY2xlYW5JbWFnZVByb2Nlc3NpbmdDYWNoZSgpO1xyXG4gICAgICAgIGF3YWl0aW5nRm9ySW1hZ2VMb2FkaW5nLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgVkFSX1RZUEVfQkdDT0xPUiA9IDEgPDwgMDtcclxuICAgIGNvbnN0IFZBUl9UWVBFX1RFWFRDT0xPUiA9IDEgPDwgMTtcclxuICAgIGNvbnN0IFZBUl9UWVBFX0JPUkRFUkNPTE9SID0gMSA8PCAyO1xyXG4gICAgY29uc3QgVkFSX1RZUEVfQkdJTUcgPSAxIDw8IDM7XHJcbiAgICBjbGFzcyBWYXJpYWJsZXNTdG9yZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZSA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmVTdHlsZVF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFyUmVmcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5kZWZpbmVkVmFycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFyVHlwZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhcigpIHtcclxuICAgICAgICAgICAgdGhpcy52YXJUeXBlcy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGVzUXVldWUuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmVTdHlsZVF1ZXVlLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5kZWZpbmVkVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnZhclJlZnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVuZGVmaW5lZFZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFyVHlwZXMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzVmFyVHlwZSh2YXJOYW1lLCB0eXBlTnVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhclR5cGVzLmhhcyh2YXJOYW1lKSAmJlxyXG4gICAgICAgICAgICAgICAgKHRoaXMudmFyVHlwZXMuZ2V0KHZhck5hbWUpICYgdHlwZU51bSkgPiAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZFJ1bGVzRm9yTWF0Y2hpbmcocnVsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLmFkZChydWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZElubGluZVN0eWxlRm9yTWF0Y2hpbmcoc3R5bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmVTdHlsZVF1ZXVlLnB1c2goc3R5bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5zaXplID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlubGluZVN0eWxlUXVldWUubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhclR5cGVzID0gbmV3IE1hcCh0aGlzLnZhclR5cGVzKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0Um9vdFZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3RWYXJpYWJsZXNBbmRWYXJEZXAoKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0Um9vdFZhckRlcGVuZGVudHMoKTtcclxuICAgICAgICAgICAgdGhpcy52YXJSZWZzLmZvckVhY2goKHJlZnMsIHYpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlZnMuZm9yRWFjaCgocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhclR5cGVzLmhhcyh2KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUociwgdGhpcy52YXJUeXBlcy5nZXQodikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmZvckVhY2goKHYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVua25vd25CZ1ZhcnMuaGFzKHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhclR5cGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JHQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfVEVYVENPTE9SIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JPUkRFUkNPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmRlbGV0ZSh2KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmFkZCh2KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNDb2xvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5kVmFyUmVmKHYsIChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkNvbG9yVmFycy5oYXMocmVmKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhclR5cGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX0JHQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CT1JERVJDT0xPUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pICE9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzQ29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJSZWZzKHYsIChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlVmFyaWFibGVUeXBlKHJlZiwgVkFSX1RZUEVfQkdDT0xPUik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWYXJUeXBlKHYsIFZBUl9UWVBFX0JHQ09MT1IgfCBWQVJfVFlQRV9CR0lNRylcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycy5kZWxldGUodik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5kZWZpbmVkVmFycy5hZGQodik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRUeXBlVmFycy5mb3JFYWNoKCh2YXJOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5nZXQodmFyTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFR5cGVWYXJzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE1vZGlmaWVyRm9yVmFyaWFibGUob3B0aW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWdTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICAgICAgICAgIH0gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0RGVjbGFyYXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZE1vZGlmaWVkVmFsdWUgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVOdW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhck5hbWVXcmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvck1vZGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1ZhclR5cGUodmFyTmFtZSwgdHlwZU51bSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHZhck5hbWVXcmFwcGVyKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kaWZpZWRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHNvdXJjZVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29uc3RydWN0ZWRDb2xvclZhcihzb3VyY2VWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBpbnNlcnRWYXJWYWx1ZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVOdW0gPT09IFZBUl9UWVBFX0JHQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiMwMDAwMDBcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IGNvbG9yTW9kaWZpZXIodmFsdWUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2KSA9PiB2YXJOYW1lV3JhcHBlcih2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZhbGxiYWNrKSA9PiBjb2xvck1vZGlmaWVyKGZhbGxiYWNrLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IGNvbG9yTW9kaWZpZXIoc291cmNlVmFsdWUsIHRoZW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBtb2RpZmllZFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkTW9kaWZpZWRWYWx1ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdDT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeUJnQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZE1vZGlmaWVkVmFsdWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBUl9UWVBFX1RFWFRDT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcFRleHRDb2xvclZhcmlhYmxlTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5VGV4dENvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBhZGRNb2RpZmllZFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9CT1JERVJDT0xPUixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcEJvcmRlckNvbG9yVmFyaWFibGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlCb3JkZXJDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHZhck5hbWUsIFZBUl9UWVBFX0JHSU1HKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHdyYXBCZ0ltZ1ZhcmlhYmxlTmFtZSh2YXJOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGlmaWVkVmFsdWUgPSBzb3VyY2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmFyRGVwZW5kYW50KHNvdXJjZVZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodikgPT4gd3JhcEJnQ29sb3JWYXJpYWJsZU5hbWUodiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZhbGxiYWNrKSA9PiB0cnlNb2RpZnlCZ0NvbG9yKGZhbGxiYWNrLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmdNb2RpZmllciA9IGdldEJnSW1hZ2VNb2RpZmllcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltZ1NlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkVmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGJnTW9kaWZpZXIgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYmdNb2RpZmllcih0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGJnTW9kaWZpZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZGlmaWVkVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRkTGlzdGVuZXIgPSAob25UeXBlQ2hhbmdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY3MgPSBnZXREZWNsYXJhdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlKGRlY3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKHZhck5hbWUsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tVmFyaWFibGVUeXBlQ2hhbmdlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBnZXREZWNsYXJhdGlvbnMoKSxcclxuICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2U6IHthZGRMaXN0ZW5lciwgcmVtb3ZlTGlzdGVuZXJzfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TW9kaWZpZXJGb3JWYXJEZXBlbmRhbnQocHJvcGVydHksIHNvdXJjZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzQ29uc3RydWN0ZWRDb2xvciA9IHNvdXJjZVZhbHVlLm1hdGNoKC9eXFxzKihyZ2J8aHNsKWE/XFwoLyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzU2ltcGxlQ29uc3RydWN0ZWRDb2xvciA9IHNvdXJjZVZhbHVlLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgL15yZ2JhP1xcKHZhclxcKC0tW1xcLV9BLVphLXowLTldK1xcKShcXHMqLD9cXC8/XFxzKjA/XFwuXFxkKyk/XFwpJC9cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGlzQ29uc3RydWN0ZWRDb2xvciAmJiAhaXNTaW1wbGVDb25zdHJ1Y3RlZENvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0JnID0gcHJvcGVydHkuc3RhcnRzV2l0aChcImJhY2tncm91bmRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1RleHQgPSBpc1RleHRDb2xvclByb3BlcnR5KHByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBpbnNlcnRWYXJWYWx1ZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaXNCZyA/IFwiI2ZmZmZmZlwiIDogXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVyID0gaXNCZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRyeU1vZGlmeUJnQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpc1RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRyeU1vZGlmeVRleHRDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ5TW9kaWZ5Qm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVyKHZhbHVlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtY29sb3JcIiB8fFxyXG4gICAgICAgICAgICAgICAgKGlzU2ltcGxlQ29uc3RydWN0ZWRDb2xvciAmJiBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kXCIpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRGYWxsYmFjayA9IHRyeU1vZGlmeUJnQ29sb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29uc3RydWN0ZWRDb2xvciA/IFwiMjU1LCAyNTUsIDI1NVwiIDogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHYpID0+IHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmFsbGJhY2spID0+IHRyeU1vZGlmeUJnQ29sb3IoZmFsbGJhY2ssIHRoZW1lKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEZhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzVGV4dENvbG9yUHJvcGVydHkocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoZW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEZhbGxiYWNrID0gdHJ5TW9kaWZ5VGV4dENvbG9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbnN0cnVjdGVkQ29sb3IgPyBcIjAsIDAsIDBcIiA6IFwiIzAwMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh2KSA9PiB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKHYpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZmFsbGJhY2spID0+IHRyeU1vZGlmeVRleHRDb2xvcihmYWxsYmFjaywgdGhlbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RmFsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kXCIgfHxcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtaW1hZ2VcIiB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYm94LXNoYWRvd1wiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGVtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVua25vd25WYXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGlmeSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVSZXBsYWNlZCA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBCZ0NvbG9yVmFyaWFibGVOYW1lKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhclR5cGUodiwgVkFSX1RZUEVfQkdJTUcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwQmdJbWdWYXJpYWJsZU5hbWUodik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVua25vd25WYXJzLmFkZCh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmFsbGJhY2spID0+IHRyeU1vZGlmeUJnQ29sb3IoZmFsbGJhY2ssIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwiYm94LXNoYWRvd1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFkb3dNb2RpZmllciA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2hhZG93TW9kaWZpZXJXaXRoSW5mbyh2YXJpYWJsZVJlcGxhY2VkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkU2hhZG93ID0gc2hhZG93TW9kaWZpZXIodGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkU2hhZG93LnVucGFyc2VhYmxlTWF0Y2hlc0xlbmd0aCAhPT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFNoYWRvdy5tYXRjaGVzTGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZpZWRTaGFkb3cucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZVJlcGxhY2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kaWZpZWQgPSBtb2RpZnkoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodW5rbm93blZhcnMuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNGYWxsYmFja1Jlc29sdmVkID0gbW9kaWZpZWQubWF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvXnZhclxcKC4qPywgKHZhclxcKC0tZGFya3JlYWRlci1iZy0tLipcXCkpfCgjWzAtOUEtRmEtZl0rKXwoW2Etel0rKXwocmdiYT9cXCguK1xcKSl8KGhzbGE/XFwoLitcXCkpXFwpJC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRmFsbGJhY2tSZXNvbHZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB1bmtub3duVmFyIG9mIHVua25vd25WYXJzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tVmFyaWFibGVUeXBlQ2hhbmdlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVua25vd25WYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IG1vZGlmeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlRm9yVmFyVHlwZUNoYW5nZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5rbm93blZhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGlmaWVkO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwiYm9yZGVyXCIpIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eS5zdGFydHNXaXRoKFwib3V0bGluZVwiKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodGhlbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHYpID0+IHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZSh2KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGZhbGxiYWNrKSA9PiB0cnlNb2RpZnlCb3JkZXJDb2xvcihmYWxsYmFjaywgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1YnNjcmliZUZvclZhclR5cGVDaGFuZ2UodmFyTmFtZSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5zZXQodmFyTmFtZSwgbmV3IFNldCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByb290U3RvcmUgPSB0aGlzLnR5cGVDaGFuZ2VTdWJzY3JpcHRpb25zLmdldCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFyb290U3RvcmUuaGFzKGNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICAgICAgcm9vdFN0b3JlLmFkZChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdW5zdWJzY3JpYmVGcm9tVmFyaWFibGVUeXBlQ2hhbmdlcyh2YXJOYW1lLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlQ2hhbmdlU3Vic2NyaXB0aW9ucy5oYXModmFyTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZUNoYW5nZVN1YnNjcmlwdGlvbnMuZ2V0KHZhck5hbWUpLmRlbGV0ZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29sbGVjdFZhcmlhYmxlc0FuZFZhckRlcCgpIHtcclxuICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLmZvckVhY2goKHJ1bGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZXMsIChydWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bGUuc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xsZWN0VmFyc0Zyb21DU1NEZWNsYXJhdGlvbnMocnVsZS5zdHlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZVN0eWxlUXVldWUuZm9yRWFjaCgoc3R5bGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdFZhcnNGcm9tQ1NTRGVjbGFyYXRpb25zKHN0eWxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucnVsZXNRdWV1ZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZVN0eWxlUXVldWUuc3BsaWNlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsZWN0VmFyc0Zyb21DU1NEZWNsYXJhdGlvbnMoc3R5bGUpIHtcclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhzdHlsZSwgKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNwZWN0VmFyaWFibGUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3BlY3RWYXJEZXBlbmRhbnQocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3VsZFByb2Nlc3NSb290VmFyaWFibGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ydWxlc1F1ZXVlLnNpemUgPiAwICYmXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIik/LmluY2x1ZGVzKFwiLS1cIilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29sbGVjdFJvb3RWYXJpYWJsZXMoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRQcm9jZXNzUm9vdFZhcmlhYmxlcygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcclxuICAgICAgICAgICAgICAgIChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNwZWN0VmFyaWFibGUocHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3BlY3RWYXJpYWJsZSh2YXJOYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVuc3RhYmxlVmFyVmFsdWVzLnNldCh2YXJOYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhckRlcGVuZGFudCh2YWx1ZSkgJiYgaXNDb25zdHJ1Y3RlZENvbG9yVmFyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmluZWRWYXJzLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVmaW5lZFZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0NvbG9yID0gQm9vbGVhbihcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKHJhd1JHQlNwYWNlUmVnZXgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUubWF0Y2gocmF3UkdCQ29tbWFSZWdleCkgfHxcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZUNvbG9yV2l0aENhY2hlKHZhbHVlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoaXNDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmFkZCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgIHZhbHVlLmluY2x1ZGVzKFwidXJsKFwiKSB8fFxyXG4gICAgICAgICAgICAgICAgdmFsdWUuaW5jbHVkZXMoXCJsaW5lYXItZ3JhZGllbnQoXCIpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5pbmNsdWRlcyhcInJhZGlhbC1ncmFkaWVudChcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodmFyTmFtZSwgVkFSX1RZUEVfQkdJTUcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmVWYXJpYWJsZVR5cGUodmFyTmFtZSwgdHlwZU51bSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsVHlwZSA9IHRoaXMuaW5pdGlhbFZhclR5cGVzLmdldCh2YXJOYW1lKSB8fCAwO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VHlwZSA9IHRoaXMudmFyVHlwZXMuZ2V0KHZhck5hbWUpIHx8IDA7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1R5cGUgPSBjdXJyZW50VHlwZSB8IHR5cGVOdW07XHJcbiAgICAgICAgICAgIHRoaXMudmFyVHlwZXMuc2V0KHZhck5hbWUsIG5ld1R5cGUpO1xyXG4gICAgICAgICAgICBpZiAobmV3VHlwZSAhPT0gaW5pdGlhbFR5cGUgfHwgdGhpcy51bmRlZmluZWRWYXJzLmhhcyh2YXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkVHlwZVZhcnMuYWRkKHZhck5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmRlZmluZWRWYXJzLmRlbGV0ZSh2YXJOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVua25vd25Db2xvclZhcnMuZGVsZXRlKHZhck5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVua25vd25CZ1ZhcnMuZGVsZXRlKHZhck5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2xsZWN0Um9vdFZhckRlcGVuZGVudHMoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRQcm9jZXNzUm9vdFZhcmlhYmxlcygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcclxuICAgICAgICAgICAgICAgIChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zcGVjdFZhckRlcGVuZGFudChwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zcGVjdFZhckRlcGVuZGFudChwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGlzVmFyaWFibGUocHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCAocmVmKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhclJlZnMuaGFzKHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhclJlZnMuc2V0KHByb3BlcnR5LCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhclJlZnMuZ2V0KHByb3BlcnR5KS5hZGQocmVmKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZC1jb2xvclwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJib3gtc2hhZG93XCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCAodikgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfQkdDT0xPUilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNUZXh0Q29sb3JQcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhckRlcHModmFsdWUsICh2KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZVZhcmlhYmxlVHlwZSh2LCBWQVJfVFlQRV9URVhUQ09MT1IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcImJvcmRlclwiKSB8fFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc3RhcnRzV2l0aChcIm91dGxpbmVcIilcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCAodikgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUodiwgVkFSX1RZUEVfQk9SREVSQ09MT1IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiYmFja2dyb3VuZFwiIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kLWltYWdlXCJcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZXJhdGVWYXJEZXBzKHZhbHVlLCAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFyVHlwZSh2LCBWQVJfVFlQRV9CR0NPTE9SIHwgVkFSX1RZUEVfQkdJTUcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNCZ0NvbG9yID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5kVmFyUmVmKHYsIChyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bmtub3duQ29sb3JWYXJzLmhhcyhyZWYpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhclR5cGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQkdDT0xPUiB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVJfVFlQRV9URVhUQ09MT1IgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVkFSX1RZUEVfQk9SREVSQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAhPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlcmF0ZVZhclJlZnModiwgKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNCZ0NvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVWYXJpYWJsZVR5cGUocmVmLCBWQVJfVFlQRV9CR0NPTE9SKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5rbm93bkJnVmFycy5hZGQocmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlcmF0ZVZhckRlcHModmFsdWUsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhckRlcHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVWYXJEZXBlbmRlbmNpZXModmFsdWUsICh2KSA9PiB2YXJEZXBzLmFkZCh2KSk7XHJcbiAgICAgICAgICAgIHZhckRlcHMuZm9yRWFjaCgodikgPT4gaXRlcmF0b3IodikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5kVmFyUmVmKHZhck5hbWUsIGl0ZXJhdG9yLCBzdGFjayA9IG5ldyBTZXQoKSkge1xyXG4gICAgICAgICAgICBpZiAoc3RhY2suaGFzKHZhck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGFjay5hZGQodmFyTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGl0ZXJhdG9yKHZhck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFyTmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZWZzID0gdGhpcy52YXJSZWZzLmdldCh2YXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFyZWZzIHx8IHJlZnMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChjb25zdCByZWYgb2YgcmVmcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm91bmQgPSB0aGlzLmZpbmRWYXJSZWYocmVmLCBpdGVyYXRvciwgc3RhY2spO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVyYXRlVmFyUmVmcyh2YXJOYW1lLCBpdGVyYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmRWYXJSZWYodmFyTmFtZSwgKHJlZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0b3IocmVmKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldE9uUm9vdFZhcmlhYmxlQ2hhbmdlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Sb290VmFyaWFibGVEZWZpbmVkID0gY2FsbGJhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1dFJvb3RWYXJzKHN0eWxlRWxlbWVudCwgdGhlbWUpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBzdHlsZUVsZW1lbnQuc2hlZXQ7XHJcbiAgICAgICAgICAgIGlmIChzaGVldC5jc3NSdWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzaGVldC5kZWxldGVSdWxlKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAgICAgaXRlcmF0ZUNTU0RlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcclxuICAgICAgICAgICAgICAgIChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYXJpYWJsZShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYXJUeXBlKHByb3BlcnR5LCBWQVJfVFlQRV9CR0NPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZShwcm9wZXJ0eSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5TW9kaWZ5QmdDb2xvcih2YWx1ZSwgdGhlbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFyVHlwZShwcm9wZXJ0eSwgVkFSX1RZUEVfVEVYVENPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwVGV4dENvbG9yVmFyaWFibGVOYW1lKHByb3BlcnR5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlNb2RpZnlUZXh0Q29sb3IodmFsdWUsIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZhclR5cGUocHJvcGVydHksIFZBUl9UWVBFX0JPUkRFUkNPTE9SKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwQm9yZGVyQ29sb3JWYXJpYWJsZU5hbWUocHJvcGVydHkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeU1vZGlmeUJvcmRlckNvbG9yKHZhbHVlLCB0aGVtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVGb3JWYXJUeXBlQ2hhbmdlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uUm9vdFZhcmlhYmxlRGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgY3NzTGluZXMgPSBbXTtcclxuICAgICAgICAgICAgY3NzTGluZXMucHVzaChcIjpyb290IHtcIik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgZGVjbGFyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBjc3NMaW5lcy5wdXNoKGAgICAgJHtwcm9wZXJ0eX06ICR7dmFsdWV9O2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNzc0xpbmVzLnB1c2goXCJ9XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NUZXh0ID0gY3NzTGluZXMuam9pbihcIlxcblwiKTtcclxuICAgICAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShjc3NUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YXJpYWJsZXNTdG9yZSA9IG5ldyBWYXJpYWJsZXNTdG9yZSgpO1xyXG4gICAgZnVuY3Rpb24gZ2V0VmFyaWFibGVSYW5nZShpbnB1dCwgc2VhcmNoU3RhcnQgPSAwKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBpbnB1dC5pbmRleE9mKFwidmFyKFwiLCBzZWFyY2hTdGFydCk7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBnZXRQYXJlbnRoZXNlc1JhbmdlKGlucHV0LCBzdGFydCArIDMpO1xyXG4gICAgICAgICAgICBpZiAocmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7c3RhcnQsIGVuZDogcmFuZ2UuZW5kfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlc01hdGNoZXMoaW5wdXQpIHtcclxuICAgICAgICBjb25zdCByYW5nZXMgPSBbXTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgbGV0IHJhbmdlO1xyXG4gICAgICAgIHdoaWxlICgocmFuZ2UgPSBnZXRWYXJpYWJsZVJhbmdlKGlucHV0LCBpKSkpIHtcclxuICAgICAgICAgICAgY29uc3Qge3N0YXJ0LCBlbmR9ID0gcmFuZ2U7XHJcbiAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtzdGFydCwgZW5kLCB2YWx1ZTogaW5wdXQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpfSk7XHJcbiAgICAgICAgICAgIGkgPSByYW5nZS5lbmQgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmFuZ2VzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZVZhcmlhYmxlc01hdGNoZXMoaW5wdXQsIHJlcGxhY2VyKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGdldFZhcmlhYmxlc01hdGNoZXMoaW5wdXQpO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXNDb3VudCA9IG1hdGNoZXMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChtYXRjaGVzQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICBjb25zdCByZXBsYWNlbWVudHMgPSBtYXRjaGVzLm1hcCgobSkgPT5cclxuICAgICAgICAgICAgcmVwbGFjZXIobS52YWx1ZSwgbWF0Y2hlcy5sZW5ndGgpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IFtdO1xyXG4gICAgICAgIHBhcnRzLnB1c2goaW5wdXQuc3Vic3RyaW5nKDAsIG1hdGNoZXNbMF0uc3RhcnQpKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdGNoZXNDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcnRzLnB1c2gocmVwbGFjZW1lbnRzW2ldKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBtYXRjaGVzW2ldLmVuZDtcclxuICAgICAgICAgICAgY29uc3QgZW5kID1cclxuICAgICAgICAgICAgICAgIGkgPCBtYXRjaGVzQ291bnQgLSAxID8gbWF0Y2hlc1tpICsgMV0uc3RhcnQgOiBpbnB1dExlbmd0aDtcclxuICAgICAgICAgICAgcGFydHMucHVzaChpbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIlwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhcmlhYmxlTmFtZUFuZEZhbGxiYWNrKG1hdGNoKSB7XHJcbiAgICAgICAgY29uc3QgY29tbWFJbmRleCA9IG1hdGNoLmluZGV4T2YoXCIsXCIpO1xyXG4gICAgICAgIGxldCBuYW1lO1xyXG4gICAgICAgIGxldCBmYWxsYmFjaztcclxuICAgICAgICBpZiAoY29tbWFJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBtYXRjaC5zdWJzdHJpbmcoNCwgY29tbWFJbmRleCkudHJpbSgpO1xyXG4gICAgICAgICAgICBmYWxsYmFjayA9IG1hdGNoLnN1YnN0cmluZyhjb21tYUluZGV4ICsgMSwgbWF0Y2gubGVuZ3RoIC0gMSkudHJpbSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSBtYXRjaC5zdWJzdHJpbmcoNCwgbWF0Y2gubGVuZ3RoIC0gMSkudHJpbSgpO1xyXG4gICAgICAgICAgICBmYWxsYmFjayA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7bmFtZSwgZmFsbGJhY2t9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIG5hbWVSZXBsYWNlcixcclxuICAgICAgICBmYWxsYmFja1JlcGxhY2VyLFxyXG4gICAgICAgIGZpbmFsRmFsbGJhY2tcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoUmVwbGFjZXIgPSAobWF0Y2gpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge25hbWUsIGZhbGxiYWNrfSA9IGdldFZhcmlhYmxlTmFtZUFuZEZhbGxiYWNrKG1hdGNoKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IG5hbWVSZXBsYWNlcihuYW1lKTtcclxuICAgICAgICAgICAgaWYgKCFmYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpbmFsRmFsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYHZhcigke25ld05hbWV9LCAke2ZpbmFsRmFsbGJhY2t9KWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHZhcigke25ld05hbWV9KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5ld0ZhbGxiYWNrO1xyXG4gICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQoZmFsbGJhY2spKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGYWxsYmFjayA9IHJlcGxhY2VDU1NWYXJpYWJsZXNOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgICBmYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lUmVwbGFjZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tSZXBsYWNlclxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmYWxsYmFja1JlcGxhY2VyKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdGYWxsYmFjayA9IGZhbGxiYWNrUmVwbGFjZXIoZmFsbGJhY2spO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RmFsbGJhY2sgPSBmYWxsYmFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYHZhcigke25ld05hbWV9LCAke25ld0ZhbGxiYWNrfSlgO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VWYXJpYWJsZXNNYXRjaGVzKHZhbHVlLCBtYXRjaFJlcGxhY2VyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGl0ZXJhdGVWYXJEZXBlbmRlbmNpZXModmFsdWUsIGl0ZXJhdG9yKSB7XHJcbiAgICAgICAgcmVwbGFjZUNTU1ZhcmlhYmxlc05hbWVzKHZhbHVlLCAodmFyTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVyYXRvcih2YXJOYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhck5hbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwQmdDb2xvclZhcmlhYmxlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGAtLWRhcmtyZWFkZXItYmcke25hbWV9YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyYXBUZXh0Q29sb3JWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBgLS1kYXJrcmVhZGVyLXRleHQke25hbWV9YDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyYXBCb3JkZXJDb2xvclZhcmlhYmxlTmFtZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGAtLWRhcmtyZWFkZXItYm9yZGVyJHtuYW1lfWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3cmFwQmdJbWdWYXJpYWJsZU5hbWUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBgLS1kYXJrcmVhZGVyLWJnaW1nJHtuYW1lfWA7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc1ZhcmlhYmxlKHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5LnN0YXJ0c1dpdGgoXCItLVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzVmFyRGVwZW5kYW50KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLmluY2x1ZGVzKFwidmFyKFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzQ29uc3RydWN0ZWRDb2xvclZhcih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eXFxzKihyZ2J8aHNsKWE/XFwoLykgfHxcclxuICAgICAgICAgICAgdmFsdWUubWF0Y2goL14oKChcXGR7MSwzfSl8KHZhclxcKFtcXC1fQS1aYS16MC05XStcXCkpKSw/XFxzKj8pezN9JC8pXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzVGV4dENvbG9yUHJvcGVydHkocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJjb2xvclwiIHx8XHJcbiAgICAgICAgICAgIHByb3BlcnR5ID09PSBcImNhcmV0LWNvbG9yXCIgfHxcclxuICAgICAgICAgICAgcHJvcGVydHkgPT09IFwiLXdlYmtpdC10ZXh0LWZpbGwtY29sb3JcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByYXdSR0JTcGFjZVJlZ2V4ID0gL14oXFxkezEsM30pXFxzKyhcXGR7MSwzfSlcXHMrKFxcZHsxLDN9KSQvO1xyXG4gICAgY29uc3QgcmF3UkdCQ29tbWFSZWdleCA9IC9eKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSQvO1xyXG4gICAgZnVuY3Rpb24gcGFyc2VSYXdDb2xvclZhbHVlKGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPVxyXG4gICAgICAgICAgICBpbnB1dC5tYXRjaChyYXdSR0JTcGFjZVJlZ2V4KSA/PyBpbnB1dC5tYXRjaChyYXdSR0JDb21tYVJlZ2V4KTtcclxuICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBgcmdiKCR7bWF0Y2hbMV19LCAke21hdGNoWzJdfSwgJHttYXRjaFszXX0pYDtcclxuICAgICAgICAgICAgcmV0dXJuIHtpc1JhdzogdHJ1ZSwgY29sb3J9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge2lzUmF3OiBmYWxzZSwgY29sb3I6IGlucHV0fTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJhd0NvbG9yVmFsdWUoaW5wdXQsIHRoZW1lLCBtb2RpZnlGdW5jdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHtpc1JhdywgY29sb3J9ID0gcGFyc2VSYXdDb2xvclZhbHVlKGlucHV0KTtcclxuICAgICAgICBjb25zdCByZ2IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKGNvbG9yKTtcclxuICAgICAgICBpZiAocmdiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dENvbG9yID0gbW9kaWZ5RnVuY3Rpb24ocmdiLCB0aGVtZSk7XHJcbiAgICAgICAgICAgIGlmIChpc1Jhdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0SW5SR0IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKG91dHB1dENvbG9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdXRwdXRJblJHQlxyXG4gICAgICAgICAgICAgICAgICAgID8gYCR7b3V0cHV0SW5SR0Iucn0sICR7b3V0cHV0SW5SR0IuZ30sICR7b3V0cHV0SW5SR0IuYn1gXHJcbiAgICAgICAgICAgICAgICAgICAgOiBvdXRwdXRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0Q29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xvcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyeU1vZGlmeUJnQ29sb3IoY29sb3IsIHRoZW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJhd0NvbG9yVmFsdWUoY29sb3IsIHRoZW1lLCBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJ5TW9kaWZ5VGV4dENvbG9yKGNvbG9yLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBoYW5kbGVSYXdDb2xvclZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyeU1vZGlmeUJvcmRlckNvbG9yKGNvbG9yLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBoYW5kbGVSYXdDb2xvclZhbHVlKGNvbG9yLCB0aGVtZSwgbW9kaWZ5Qm9yZGVyQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5zZXJ0VmFyVmFsdWVzKHNvdXJjZSwgdmFyVmFsdWVzLCBmdWxsU3RhY2sgPSBuZXcgU2V0KCkpIHtcclxuICAgICAgICBsZXQgY29udGFpbnNVbnJlc29sdmVkVmFyID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hSZXBsYWNlciA9IChtYXRjaCwgY291bnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge25hbWUsIGZhbGxiYWNrfSA9IGdldFZhcmlhYmxlTmFtZUFuZEZhbGxiYWNrKG1hdGNoKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhY2sgPSBjb3VudCA+IDEgPyBuZXcgU2V0KGZ1bGxTdGFjaykgOiBmdWxsU3RhY2s7XHJcbiAgICAgICAgICAgIGlmIChzdGFjay5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zVW5yZXNvbHZlZFZhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdGFjay5hZGQobmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhclZhbHVlID0gdmFyVmFsdWVzLmdldChuYW1lKSB8fCBmYWxsYmFjaztcclxuICAgICAgICAgICAgbGV0IGluc2VydGVkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHZhclZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWYXJEZXBlbmRhbnQodmFyVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0ZWQgPSBpbnNlcnRWYXJWYWx1ZXModmFyVmFsdWUsIHZhclZhbHVlcywgc3RhY2spO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRlZCA9IHZhclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaW5zZXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zVW5yZXNvbHZlZFZhciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaW5zZXJ0ZWQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXBsYWNlZCA9IHJlcGxhY2VWYXJpYWJsZXNNYXRjaGVzKHNvdXJjZSwgbWF0Y2hSZXBsYWNlcik7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5zVW5yZXNvbHZlZFZhcikge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG92ZXJyaWRlcyQxID0ge1xyXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1iZ2NvbG9yXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYmFja2dyb3VuZC1jb2xvclwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJnY29sb3JcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJnaW1hZ2VcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJiYWNrZ3JvdW5kLWltYWdlXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYmdpbWFnZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXJcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItYm90dG9tLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1ib3R0b21cIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItYm90dG9tLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLWJvdHRvbVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci1sZWZ0LWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci1sZWZ0XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm9yZGVyLWxlZnQtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItbGVmdFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJvcmRlci1yaWdodC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItcmlnaHRcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItcmlnaHQtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1ib3JkZXItcmlnaHRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJib3JkZXItdG9wLWNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJvcmRlci10b3BcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJib3JkZXItdG9wLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtYm9yZGVyLXRvcFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJveC1zaGFkb3dcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtYm94c2hhZG93XCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYm94LXNoYWRvd1wiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJveHNoYWRvd1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1jb2xvclwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZpbGxcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtZmlsbFwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcImZpbGxcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1maWxsXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3Ryb2tlXCI6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLXN0cm9rZVwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcInN0cm9rZVwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLXN0cm9rZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm91dGxpbmUtY29sb3JcIjoge1xyXG4gICAgICAgICAgICBjdXN0b21Qcm9wOiBcIi0tZGFya3JlYWRlci1pbmxpbmUtb3V0bGluZVwiLFxyXG4gICAgICAgICAgICBjc3NQcm9wOiBcIm91dGxpbmUtY29sb3JcIixcclxuICAgICAgICAgICAgZGF0YUF0dHI6IFwiZGF0YS1kYXJrcmVhZGVyLWlubGluZS1vdXRsaW5lXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3RvcC1jb2xvclwiOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbVByb3A6IFwiLS1kYXJrcmVhZGVyLWlubGluZS1zdG9wY29sb3JcIixcclxuICAgICAgICAgICAgY3NzUHJvcDogXCJzdG9wLWNvbG9yXCIsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyOiBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtc3RvcGNvbG9yXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2hvcnRoYW5kT3ZlcnJpZGVzID0ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgY3VzdG9tUHJvcDogXCItLWRhcmtyZWFkZXItaW5saW5lLWJnXCIsXHJcbiAgICAgICAgICAgIGNzc1Byb3A6IFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgICAgICBkYXRhQXR0cjogXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWJnXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgb3ZlcnJpZGVzTGlzdCA9IE9iamVjdC52YWx1ZXMob3ZlcnJpZGVzJDEpO1xyXG4gICAgY29uc3Qgbm9ybWFsaXplZFByb3BMaXN0ID0ge307XHJcbiAgICBvdmVycmlkZXNMaXN0LmZvckVhY2goXHJcbiAgICAgICAgKHtjc3NQcm9wLCBjdXN0b21Qcm9wfSkgPT4gKG5vcm1hbGl6ZWRQcm9wTGlzdFtjdXN0b21Qcm9wXSA9IGNzc1Byb3ApXHJcbiAgICApO1xyXG4gICAgY29uc3QgSU5MSU5FX1NUWUxFX0FUVFJTID0gW1xyXG4gICAgICAgIFwic3R5bGVcIixcclxuICAgICAgICBcImZpbGxcIixcclxuICAgICAgICBcInN0b3AtY29sb3JcIixcclxuICAgICAgICBcInN0cm9rZVwiLFxyXG4gICAgICAgIFwiYmdjb2xvclwiLFxyXG4gICAgICAgIFwiY29sb3JcIixcclxuICAgICAgICBcImJhY2tncm91bmRcIlxyXG4gICAgXTtcclxuICAgIGNvbnN0IElOTElORV9TVFlMRV9TRUxFQ1RPUiA9IElOTElORV9TVFlMRV9BVFRSUy5tYXAoXHJcbiAgICAgICAgKGF0dHIpID0+IGBbJHthdHRyfV1gXHJcbiAgICApLmpvaW4oXCIsIFwiKTtcclxuICAgIGZ1bmN0aW9uIGdldElubGluZU92ZXJyaWRlU3R5bGUoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsT3ZlcnJpZGVzID0gb3ZlcnJpZGVzTGlzdC5jb25jYXQoXHJcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoc2hvcnRoYW5kT3ZlcnJpZGVzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGFsbE92ZXJyaWRlc1xyXG4gICAgICAgICAgICAubWFwKCh7ZGF0YUF0dHIsIGN1c3RvbVByb3AsIGNzc1Byb3B9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgIGBbJHtkYXRhQXR0cn1dIHtgLFxyXG4gICAgICAgICAgICAgICAgICAgIGAgICR7Y3NzUHJvcH06IHZhcigke2N1c3RvbVByb3B9KSAhaW1wb3J0YW50O2AsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNvbmNhdChbXHJcbiAgICAgICAgICAgICAgICBcIltkYXRhLWRhcmtyZWFkZXItaW5saW5lLWludmVydF0ge1wiLFxyXG4gICAgICAgICAgICAgICAgXCIgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgaHVlLXJvdGF0ZSgxODBkZWcpO1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcXG5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRJbmxpbmVTdHlsZUVsZW1lbnRzKHJvb3QpIHtcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICAgICAgaWYgKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50ICYmIHJvb3QubWF0Y2hlcyhJTkxJTkVfU1RZTEVfU0VMRUNUT1IpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICByb290IGluc3RhbmNlb2YgRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAoaXNTaGFkb3dEb21TdXBwb3J0ZWQgJiYgcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHx8XHJcbiAgICAgICAgICAgIHJvb3QgaW5zdGFuY2VvZiBEb2N1bWVudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBwdXNoKHJlc3VsdHMsIHJvb3QucXVlcnlTZWxlY3RvckFsbChJTkxJTkVfU1RZTEVfU0VMRUNUT1IpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0cmVlT2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3QgYXR0ck9ic2VydmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9ySW5saW5lU3R5bGVzKGVsZW1lbnRTdHlsZURpZENoYW5nZSwgc2hhZG93Um9vdERpc2NvdmVyZWQpIHtcclxuICAgICAgICBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LFxyXG4gICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpdGVyYXRlU2hhZG93SG9zdHMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAoaG9zdCkgPT4ge1xyXG4gICAgICAgICAgICBkZWVwV2F0Y2hGb3JJbmxpbmVTdHlsZXMoXHJcbiAgICAgICAgICAgICAgICBob3N0LnNoYWRvd1Jvb3QsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVlcFdhdGNoRm9ySW5saW5lU3R5bGVzKFxyXG4gICAgICAgIHJvb3QsXHJcbiAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICApIHtcclxuICAgICAgICBpZiAodHJlZU9ic2VydmVycy5oYXMocm9vdCkpIHtcclxuICAgICAgICAgICAgdHJlZU9ic2VydmVycy5nZXQocm9vdCkuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBhdHRyT2JzZXJ2ZXJzLmdldChyb290KS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpc2NvdmVyZWROb2RlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICAgICAgZnVuY3Rpb24gZGlzY292ZXJOb2Rlcyhub2RlKSB7XHJcbiAgICAgICAgICAgIGdldElubGluZVN0eWxlRWxlbWVudHMobm9kZSkuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkaXNjb3ZlcmVkTm9kZXMuaGFzKGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc2NvdmVyZWROb2Rlcy5hZGQoZWwpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlKGVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhub2RlLCAobikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc2NvdmVyZWROb2Rlcy5oYXMobm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkaXNjb3ZlcmVkTm9kZXMuYWRkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgc2hhZG93Um9vdERpc2NvdmVyZWQobi5zaGFkb3dSb290KTtcclxuICAgICAgICAgICAgICAgIGRlZXBXYXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICAgICAgICAgICAgICBuLnNoYWRvd1Jvb3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFN0eWxlRGlkQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRyZWVPYnNlcnZlciA9IGNyZWF0ZU9wdGltaXplZFRyZWVPYnNlcnZlcihyb290LCB7XHJcbiAgICAgICAgICAgIG9uTWlub3JNdXRhdGlvbnM6IChfcm9vdCwge2FkZGl0aW9uc30pID0+IHtcclxuICAgICAgICAgICAgICAgIGFkZGl0aW9ucy5mb3JFYWNoKChhZGRlZCkgPT4gZGlzY292ZXJOb2RlcyhhZGRlZCkpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkh1Z2VNdXRhdGlvbnM6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc2NvdmVyTm9kZXMocm9vdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0cmVlT2JzZXJ2ZXJzLnNldChyb290LCB0cmVlT2JzZXJ2ZXIpO1xyXG4gICAgICAgIGxldCBhdHRlbXB0Q291bnQgPSAwO1xyXG4gICAgICAgIGxldCBzdGFydCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgQVRURU1QVFNfSU5URVJWQUwgPSBnZXREdXJhdGlvbih7c2Vjb25kczogMTB9KTtcclxuICAgICAgICBjb25zdCBSRVRSWV9USU1FT1VUID0gZ2V0RHVyYXRpb24oe3NlY29uZHM6IDJ9KTtcclxuICAgICAgICBjb25zdCBNQVhfQVRURU1QVFNfQ09VTlQgPSA1MDtcclxuICAgICAgICBsZXQgY2FjaGUgPSBbXTtcclxuICAgICAgICBsZXQgdGltZW91dElkID0gbnVsbDtcclxuICAgICAgICBjb25zdCBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMgPSB0aHJvdHRsZSgobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZWRUYXJnZXRzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gbS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZFRhcmdldHMuaGFzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoSU5MSU5FX1NUWUxFX0FUVFJTLmluY2x1ZGVzKG0uYXR0cmlidXRlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVkVGFyZ2V0cy5hZGQodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVEaWRDaGFuZ2UodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGF0dHJPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRpbWVvdXRJZCkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGUucHVzaCguLi5tdXRhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF0dGVtcHRDb3VudCsrO1xyXG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICBpZiAoc3RhcnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBub3c7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ZW1wdENvdW50ID49IE1BWF9BVFRFTVBUU19DT1VOVCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vdyAtIHN0YXJ0IDwgQVRURU1QVFNfSU5URVJWQUwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRlbXB0Q291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVDYWNoZSA9IGNhY2hlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBdHRyaWJ1dGVNdXRhdGlvbnMoYXR0cmlidXRlQ2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFJFVFJZX1RJTUVPVVQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnB1c2goLi4ubXV0YXRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG5vdztcclxuICAgICAgICAgICAgICAgIGF0dGVtcHRDb3VudCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zKG11dGF0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXR0ck9ic2VydmVyLm9ic2VydmUocm9vdCwge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IElOTElORV9TVFlMRV9BVFRSUy5jb25jYXQoXHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZXNMaXN0Lm1hcCgoe2RhdGFBdHRyfSkgPT4gZGF0YUF0dHIpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXJzLnNldChyb290LCBhdHRyT2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9ySW5saW5lU3R5bGVzKCkge1xyXG4gICAgICAgIHRyZWVPYnNlcnZlcnMuZm9yRWFjaCgobykgPT4gby5kaXNjb25uZWN0KCkpO1xyXG4gICAgICAgIGF0dHJPYnNlcnZlcnMuZm9yRWFjaCgobykgPT4gby5kaXNjb25uZWN0KCkpO1xyXG4gICAgICAgIHRyZWVPYnNlcnZlcnMuY2xlYXIoKTtcclxuICAgICAgICBhdHRyT2JzZXJ2ZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbmxpbmVTdHlsZUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGNvbnN0IHN2Z0ludmVyc2lvbkNhY2hlID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGNvbnN0IHN2Z0FuYWx5c2lzQ29uZGl0aW9uQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgY29uc3QgdGhlbWVQcm9wcyA9IFtcImJyaWdodG5lc3NcIiwgXCJjb250cmFzdFwiLCBcImdyYXlzY2FsZVwiLCBcInNlcGlhXCIsIFwibW9kZVwiXTtcclxuICAgIGZ1bmN0aW9uIHNob3VsZEFuYWx5emVTVkdBc0ltYWdlKHN2Zykge1xyXG4gICAgICAgIGlmIChzdmdBbmFseXNpc0NvbmRpdGlvbkNhY2hlLmhhcyhzdmcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdmdBbmFseXNpc0NvbmRpdGlvbkNhY2hlLmdldChzdmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaG91bGRBbmFseXplID0gQm9vbGVhbihcclxuICAgICAgICAgICAgc3ZnICYmXHJcbiAgICAgICAgICAgICAgICAoc3ZnLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpPy5pbmNsdWRlcyhcImxvZ29cIikgfHxcclxuICAgICAgICAgICAgICAgICAgICBzdmcucGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik/LmluY2x1ZGVzKFwibG9nb1wiKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHN2Z0FuYWx5c2lzQ29uZGl0aW9uQ2FjaGUuc2V0KHN2Zywgc2hvdWxkQW5hbHl6ZSk7XHJcbiAgICAgICAgcmV0dXJuIHNob3VsZEFuYWx5emU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRJbmxpbmVTdHlsZUNhY2hlS2V5KGVsLCB0aGVtZSkge1xyXG4gICAgICAgIHJldHVybiBJTkxJTkVfU1RZTEVfQVRUUlMubWFwKFxyXG4gICAgICAgICAgICAoYXR0cikgPT4gYCR7YXR0cn09XCIke2VsLmdldEF0dHJpYnV0ZShhdHRyKX1cImBcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5jb25jYXQodGhlbWVQcm9wcy5tYXAoKHByb3ApID0+IGAke3Byb3B9PVwiJHt0aGVtZVtwcm9wXX1cImApKVxyXG4gICAgICAgICAgICAuam9pbihcIiBcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG91bGRJZ25vcmVJbmxpbmVTdHlsZShlbGVtZW50LCBzZWxlY3RvcnMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2VsZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZ25vcmVkU2VsZWN0b3IgPSBzZWxlY3RvcnNbaV07XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoaW5nbm9yZWRTZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG92ZXJyaWRlSW5saW5lU3R5bGUoXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB0aGVtZSxcclxuICAgICAgICBpZ25vcmVJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgaWdub3JlSW1hZ2VTZWxlY3RvcnNcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gZ2V0SW5saW5lU3R5bGVDYWNoZUtleShlbGVtZW50LCB0aGVtZSk7XHJcbiAgICAgICAgaWYgKGNhY2hlS2V5ID09PSBpbmxpbmVTdHlsZUNhY2hlLmdldChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVuc2V0UHJvcHMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKG92ZXJyaWRlcyQxKSk7XHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Q3VzdG9tUHJvcCh0YXJnZXRDU1NQcm9wLCBtb2RpZmllckNTU1Byb3AsIGNzc1ZhbCkge1xyXG4gICAgICAgICAgICBjb25zdCBtb2QgPSBnZXRNb2RpZmlhYmxlQ1NTRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICBtb2RpZmllckNTU1Byb3AsXHJcbiAgICAgICAgICAgICAgICBjc3NWYWwsXHJcbiAgICAgICAgICAgICAgICB7c3R5bGU6IGVsZW1lbnQuc3R5bGV9LFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZVNlbGVjdG9ycyxcclxuICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKCFtb2QpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRTdGF0aWNWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2N1c3RvbVByb3AsIGRhdGFBdHRyfSA9XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVzJDFbdGFyZ2V0Q1NTUHJvcF0gPz9cclxuICAgICAgICAgICAgICAgICAgICBzaG9ydGhhbmRPdmVycmlkZXNbdGFyZ2V0Q1NTUHJvcF07XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGN1c3RvbVByb3AsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoZGF0YUF0dHIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZGF0YUF0dHIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdW5zZXRQcm9wcy5kZWxldGUodGFyZ2V0Q1NTUHJvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0VmFyRGVjbGFyYXRpb24obW9kKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJldkRlY2xhcmF0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0UHJvcHMoZGVjbGFyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkRlY2xhcmF0aW9ucy5mb3JFYWNoKCh7cHJvcGVydHl9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5mb3JFYWNoKCh7cHJvcGVydHksIHZhbHVlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2RGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0UHJvcHMobW9kLmRlY2xhcmF0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBtb2Qub25UeXBlQ2hhbmdlLmFkZExpc3RlbmVyKHNldFByb3BzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRBc3luY1ZhbHVlKHByb21pc2UsIHNvdXJjZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRDU1NQcm9wID09PSBcImJhY2tncm91bmRcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zdGFydHNXaXRoKFwidmFyKC0tZGFya3JlYWRlci1iZy0tXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRpY1ZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHRhcmdldENTU1Byb3AgPT09IFwiYmFja2dyb3VuZC1pbWFnZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlbGVtZW50ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT09IHNvdXJjZVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0aWNWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVN0eWxlQ2FjaGUuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRJbmxpbmVTdHlsZUNhY2hlS2V5KGVsZW1lbnQsIHRoZW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgbW9kLnZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBtb2QudmFsdWUodGhlbWUpIDogbW9kLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGF0aWNWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBc3luY1ZhbHVlKHZhbHVlLCBjc3NWYWwpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgc2V0VmFyRGVjbGFyYXRpb24odmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpZ25vcmVJbmxpbmVTZWxlY3RvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlSW5saW5lU3R5bGUoZWxlbWVudCwgaWdub3JlSW5saW5lU2VsZWN0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgdW5zZXRQcm9wcy5mb3JFYWNoKChjc3NQcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVzJDFbY3NzUHJvcF0uZGF0YUF0dHIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNTVkdFbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgc3ZnID0gaXNTVkdFbGVtZW50XHJcbiAgICAgICAgICAgID8gKGVsZW1lbnQub3duZXJTVkdFbGVtZW50ID8/XHJcbiAgICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50ID8gZWxlbWVudCA6IG51bGwpKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgaWYgKGlzU1ZHRWxlbWVudCAmJiB0aGVtZS5tb2RlID09PSAxICYmIHN2Zykge1xyXG4gICAgICAgICAgICBpZiAoc3ZnSW52ZXJzaW9uQ2FjaGUuaGFzKHN2ZykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkQW5hbHl6ZVNWR0FzSW1hZ2Uoc3ZnKSkge1xyXG4gICAgICAgICAgICAgICAgc3ZnSW52ZXJzaW9uQ2FjaGUuYWRkKHN2Zyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmFseXplU1ZHQXNJbWFnZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3ZnU3RyaW5nID0gc3ZnLm91dGVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICBzdmdTdHJpbmcgPSBzdmdTdHJpbmcucmVwbGFjZUFsbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxzdHlsZSBjbGFzcz1cImRhcmtyZWFkZXIgZGFya3JlYWRlci0tc3luY1wiIG1lZGlhPVwic2NyZWVuXCI+PC9zdHlsZT4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhVVJMID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHtidG9hKHN2Z1N0cmluZyl9YDtcclxuICAgICAgICAgICAgICAgICAgICBnZXRJbWFnZURldGFpbHMoZGF0YVVSTCkudGhlbigoZGV0YWlscykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGV0YWlscy5pc0RhcmsgJiYgZGV0YWlscy5pc1RyYW5zcGFyZW50KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRldGFpbHMuaXNMYXJnZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHMuaXNMaWdodCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkZXRhaWxzLmlzVHJhbnNwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtZGFya3JlYWRlci1pbmxpbmUtaW52ZXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zy5yZW1vdmVBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWRhcmtyZWFkZXItaW5saW5lLWludmVydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYW5hbHl6ZVNWR0FzSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRE9NUmVhZHlMaXN0ZW5lcihhbmFseXplU1ZHQXNJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiYmdjb2xvclwiKSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImJnY29sb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17M30kL2kpIHx8XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS5tYXRjaCgvXlswLTlhLWZdezZ9JC9pKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gYCMke3ZhbHVlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImJhY2tncm91bmQtY29sb3JcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoZWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5KSAmJlxyXG4gICAgICAgICAgICBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImJhY2tncm91bmRcIilcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gZ2V0QWJzb2x1dGVVUkwoXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJiYWNrZ3JvdW5kXCIpID8/IFwiXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBgdXJsKFwiJHt1cmx9XCIpYDtcclxuICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcImJhY2tncm91bmQtaW1hZ2VcIiwgXCJiYWNrZ3JvdW5kLWltYWdlXCIsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiY29sb3JcIikgJiYgZWxlbWVudC5yZWwgIT09IFwibWFzay1pY29uXCIpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb2xvclwiKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsdWUubWF0Y2goL15bMC05YS1mXXszfSQvaSkgfHxcclxuICAgICAgICAgICAgICAgIHZhbHVlLm1hdGNoKC9eWzAtOWEtZl17Nn0kL2kpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBgIyR7dmFsdWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiY29sb3JcIiwgXCJjb2xvclwiLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1NWR0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZmlsbFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgU01BTExfU1ZHX0xJTUlUID0gMzI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZmlsbFwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgU1ZHVGV4dEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZVNWR0VsZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0JnID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA+IFNNQUxMX1NWR19MSU1JVCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA+IFNNQUxMX1NWR19MSU1JVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNCZyA/IFwiYmFja2dyb3VuZC1jb2xvclwiIDogXCJjb2xvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZWFkeVN0YXRlQ29tcGxldGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU1ZHRWxlbWVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkUmVhZHlTdGF0ZUNvbXBsZXRlTGlzdGVuZXIoaGFuZGxlU1ZHRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFwiZmlsbFwiLCBcImNvbG9yXCIsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwic3RvcC1jb2xvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChcclxuICAgICAgICAgICAgICAgICAgICBcInN0b3AtY29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIixcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0b3AtY29sb3JcIilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwic3Ryb2tlXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHJva2VcIik7XHJcbiAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXHJcbiAgICAgICAgICAgICAgICBcInN0cm9rZVwiLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR0xpbmVFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1jb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LnN0eWxlICYmXHJcbiAgICAgICAgICAgIGl0ZXJhdGVDU1NEZWNsYXJhdGlvbnMoZWxlbWVudC5zdHlsZSwgKHByb3BlcnR5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImJhY2tncm91bmQtaW1hZ2VcIiAmJiB2YWx1ZS5pbmNsdWRlcyhcInVybFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHlcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VzdG9tUHJvcChwcm9wZXJ0eSwgcHJvcGVydHksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlcyQxLmhhc093blByb3BlcnR5KHByb3BlcnR5KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChwcm9wZXJ0eS5zdGFydHNXaXRoKFwiLS1cIikgJiYgIW5vcm1hbGl6ZWRQcm9wTGlzdFtwcm9wZXJ0eV0pXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXN0b21Qcm9wKHByb3BlcnR5LCBwcm9wZXJ0eSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PT0gXCJiYWNrZ3JvdW5kXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5pbmNsdWRlcyhcInZhcihcIilcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1c3RvbVByb3AoXCJiYWNrZ3JvdW5kXCIsIFwiYmFja2dyb3VuZFwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJyaWRkZW5Qcm9wID0gbm9ybWFsaXplZFByb3BMaXN0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRkZW5Qcm9wICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUob3ZlcnJpZGRlblByb3ApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFlbGVtZW50Lmhhc0F0dHJpYnV0ZShvdmVycmlkZGVuUHJvcClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGRlblByb3AgPT09IFwiYmFja2dyb3VuZC1jb2xvclwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImJnY29sb3JcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eSwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUgJiZcclxuICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1RleHRFbGVtZW50ICYmXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZmlsbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBzZXRDdXN0b21Qcm9wKFxyXG4gICAgICAgICAgICAgICAgXCJmaWxsXCIsXHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCIsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJmaWxsXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShcInN0eWxlXCIpPy5pbmNsdWRlcyhcIi0tXCIpKSB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZElubGluZVN0eWxlRm9yTWF0Y2hpbmcoZWxlbWVudC5zdHlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvckVhY2godW5zZXRQcm9wcywgKGNzc1Byb3ApID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUob3ZlcnJpZGVzJDFbY3NzUHJvcF0uZGF0YUF0dHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlubGluZVN0eWxlQ2FjaGUuc2V0KGVsZW1lbnQsIGdldElubGluZVN0eWxlQ2FjaGVLZXkoZWxlbWVudCwgdGhlbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBtZXRhVGhlbWVDb2xvck5hbWUgPSBcInRoZW1lLWNvbG9yXCI7XHJcbiAgICBjb25zdCBtZXRhVGhlbWVDb2xvclNlbGVjdG9yID0gYG1ldGFbbmFtZT1cIiR7bWV0YVRoZW1lQ29sb3JOYW1lfVwiXWA7XHJcbiAgICBsZXQgc3JjTWV0YVRoZW1lQ29sb3IgPSBudWxsO1xyXG4gICAgbGV0IG9ic2VydmVyID0gbnVsbDtcclxuICAgIGZ1bmN0aW9uIGNoYW5nZU1ldGFUaGVtZUNvbG9yKG1ldGEsIHRoZW1lKSB7XHJcbiAgICAgICAgc3JjTWV0YVRoZW1lQ29sb3IgPSBzcmNNZXRhVGhlbWVDb2xvciB8fCBtZXRhLmNvbnRlbnQ7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKHNyY01ldGFUaGVtZUNvbG9yKTtcclxuICAgICAgICBpZiAoIWNvbG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0YS5jb250ZW50ID0gbW9kaWZ5QmFja2dyb3VuZENvbG9yKGNvbG9yLCB0aGVtZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VNZXRhVGhlbWVDb2xvcldoZW5BdmFpbGFibGUodGhlbWUpIHtcclxuICAgICAgICBjb25zdCBtZXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZXRhVGhlbWVDb2xvclNlbGVjdG9yKTtcclxuICAgICAgICBpZiAobWV0YSkge1xyXG4gICAgICAgICAgICBjaGFuZ2VNZXRhVGhlbWVDb2xvcihtZXRhLCB0aGVtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb29wOiBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHthZGRlZE5vZGVzfSA9IG11dGF0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFkZGVkTm9kZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGFkZGVkTm9kZXNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgaW5zdGFuY2VvZiBIVE1MTWV0YUVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubmFtZSA9PT0gbWV0YVRoZW1lQ29sb3JOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTWV0YVRoZW1lQ29sb3Iobm9kZSwgdGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgbG9vcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc3RvcmVNZXRhVGhlbWVDb2xvcigpIHtcclxuICAgICAgICBpZiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1ldGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1ldGFUaGVtZUNvbG9yU2VsZWN0b3IpO1xyXG4gICAgICAgIGlmIChtZXRhICYmIHNyY01ldGFUaGVtZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIG1ldGEuY29udGVudCA9IHNyY01ldGFUaGVtZUNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3NDb21tZW50c1JlZ2V4ID0gL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vZztcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNTU0NvbW1lbnRzKGNzc1RleHQpIHtcclxuICAgICAgICByZXR1cm4gY3NzVGV4dC5yZXBsYWNlKGNzc0NvbW1lbnRzUmVnZXgsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRoZW1lQ2FjaGVLZXlzID0gW1xyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwiYnJpZ2h0bmVzc1wiLFxyXG4gICAgICAgIFwiY29udHJhc3RcIixcclxuICAgICAgICBcImdyYXlzY2FsZVwiLFxyXG4gICAgICAgIFwic2VwaWFcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVCYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgICAgICBcImRhcmtTY2hlbWVUZXh0Q29sb3JcIixcclxuICAgICAgICBcImxpZ2h0U2NoZW1lQmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICAgICAgXCJsaWdodFNjaGVtZVRleHRDb2xvclwiXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gZ2V0VGhlbWVLZXkodGhlbWUpIHtcclxuICAgICAgICBsZXQgcmVzdWx0S2V5ID0gXCJcIjtcclxuICAgICAgICB0aGVtZUNhY2hlS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0S2V5ICs9IGAke2tleX06JHt0aGVtZVtrZXldfTtgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRLZXk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhc3luY1F1ZXVlID0gY3JlYXRlQXN5bmNUYXNrc1F1ZXVlKCk7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0TW9kaWZpZXIoKSB7XHJcbiAgICAgICAgbGV0IHJlbmRlcklkID0gMDtcclxuICAgICAgICBmdW5jdGlvbiBnZXRTdHlsZVJ1bGVIYXNoKHJ1bGUpIHtcclxuICAgICAgICAgICAgbGV0IGNzc1RleHQgPSBydWxlLmNzc1RleHQ7XHJcbiAgICAgICAgICAgIGlmIChpc01lZGlhUnVsZShydWxlLnBhcmVudFJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjc3NUZXh0ID0gYCR7cnVsZS5wYXJlbnRSdWxlLm1lZGlhLm1lZGlhVGV4dH0geyAke2Nzc1RleHR9IH1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRIYXNoQ29kZShjc3NUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcnVsZXNUZXh0Q2FjaGUgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgY29uc3QgcnVsZXNNb2RDYWNoZSA9IG5ldyBNYXAoKTtcclxuICAgICAgICBjb25zdCB2YXJUeXBlQ2hhbmdlQ2xlYW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbGV0IHByZXZGaWx0ZXJLZXkgPSBudWxsO1xyXG4gICAgICAgIGxldCBoYXNOb25Mb2FkZWRMaW5rID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHdhc1JlYnVpbHQgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiBzaG91bGRSZWJ1aWxkU3R5bGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNOb25Mb2FkZWRMaW5rICYmICF3YXNSZWJ1aWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBtb2RpZnlTaGVldChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gb3B0aW9ucy5zb3VyY2VDU1NSdWxlcztcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzLFxyXG4gICAgICAgICAgICAgICAgZm9yY2UsXHJcbiAgICAgICAgICAgICAgICBwcmVwYXJlU2hlZXQsXHJcbiAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkXHJcbiAgICAgICAgICAgIH0gPSBvcHRpb25zO1xyXG4gICAgICAgICAgICBsZXQgcnVsZXNDaGFuZ2VkID0gcnVsZXNNb2RDYWNoZS5zaXplID09PSAwO1xyXG4gICAgICAgICAgICBjb25zdCBub3RGb3VuZENhY2hlS2V5cyA9IG5ldyBTZXQocnVsZXNNb2RDYWNoZS5rZXlzKCkpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGVtZUtleSA9IGdldFRoZW1lS2V5KHRoZW1lKTtcclxuICAgICAgICAgICAgY29uc3QgdGhlbWVDaGFuZ2VkID0gdGhlbWVLZXkgIT09IHByZXZGaWx0ZXJLZXk7XHJcbiAgICAgICAgICAgIGlmIChoYXNOb25Mb2FkZWRMaW5rKSB7XHJcbiAgICAgICAgICAgICAgICB3YXNSZWJ1aWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtb2RSdWxlcyA9IFtdO1xyXG4gICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMoXHJcbiAgICAgICAgICAgICAgICBydWxlcyxcclxuICAgICAgICAgICAgICAgIChydWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzaCA9IGdldFN0eWxlUnVsZUhhc2gocnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHREaWZmZXJzRnJvbVByZXYgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBub3RGb3VuZENhY2hlS2V5cy5kZWxldGUoaGFzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFydWxlc1RleHRDYWNoZS5oYXMoaGFzaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXNUZXh0Q2FjaGUuYWRkKGhhc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGlmZmVyc0Zyb21QcmV2ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHREaWZmZXJzRnJvbVByZXYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXNDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RSdWxlcy5wdXNoKHJ1bGVzTW9kQ2FjaGUuZ2V0KGhhc2gpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocnVsZS5zdHlsZS5hbGwgPT09IFwicmV2ZXJ0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2REZWNzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTRGVjbGFyYXRpb25zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZS5zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wZXJ0eSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2QgPSBnZXRNb2RpZmlhYmxlQ1NTRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kRGVjcy5wdXNoKG1vZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RSdWxlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kRGVjcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFJ1bGUgPSBydWxlLnBhcmVudFJ1bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZFJ1bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogcnVsZS5zZWxlY3RvclRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IG1vZERlY3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRSdWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZFJ1bGVzLnB1c2gobW9kUnVsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzTW9kQ2FjaGUuc2V0KGhhc2gsIG1vZFJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNOb25Mb2FkZWRMaW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbm90Rm91bmRDYWNoZUtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBydWxlc1RleHRDYWNoZS5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIHJ1bGVzTW9kQ2FjaGUuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcmV2RmlsdGVyS2V5ID0gdGhlbWVLZXk7XHJcbiAgICAgICAgICAgIGlmICghZm9yY2UgJiYgIXJ1bGVzQ2hhbmdlZCAmJiAhdGhlbWVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVuZGVySWQrKztcclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0UnVsZSh0YXJnZXQsIGluZGV4LCBydWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7c2VsZWN0b3IsIGRlY2xhcmF0aW9uc30gPSBydWxlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yVGV4dCA9IHNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1wdHlJc1doZXJlU2VsZWN0b3IgPVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hyb21pdW0gJiZcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvci5zdGFydHNXaXRoKFwiOmlzKFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3Rvci5pbmNsdWRlcyhcIjppcygpXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLmluY2x1ZGVzKFwiOndoZXJlKClcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdG9yLmluY2x1ZGVzKFwiOndoZXJlKFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IuaW5jbHVkZXMoXCI6LW1velwiKSkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgdmlld1RyYW5zaXRpb25TZWxlY3RvciA9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IuaW5jbHVkZXMoXCI6OnZpZXctdHJhbnNpdGlvbi1cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW1wdHlJc1doZXJlU2VsZWN0b3IgfHwgdmlld1RyYW5zaXRpb25TZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yVGV4dCA9IFwiLmRhcmtyZWFkZXItdW5zdXBwb3J0ZWQtc2VsZWN0b3JcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBydWxlVGV4dCA9IGAke3NlbGVjdG9yVGV4dH0ge2A7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRlYyBvZiBkZWNsYXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7cHJvcGVydHksIHZhbHVlLCBpbXBvcnRhbnR9ID0gZGVjO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlVGV4dCArPSBgICR7cHJvcGVydHl9OiAke3ZhbHVlfSR7aW1wb3J0YW50ID8gXCIgIWltcG9ydGFudFwiIDogXCJcIn07YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBydWxlVGV4dCArPSBcIiB9XCI7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuaW5zZXJ0UnVsZShydWxlVGV4dCwgaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGFzeW5jRGVjbGFyYXRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgICAgICBjb25zdCB2YXJEZWNsYXJhdGlvbnMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgICAgIGxldCBhc3luY0RlY2xhcmF0aW9uQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIGxldCB2YXJEZWNsYXJhdGlvbkNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCByb290UmVhZHlHcm91cCA9IHtydWxlOiBudWxsLCBydWxlczogW10sIGlzR3JvdXA6IHRydWV9O1xyXG4gICAgICAgICAgICBjb25zdCBncm91cFJlZnMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRHcm91cChydWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3RSZWFkeUdyb3VwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwUmVmcy5oYXMocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBSZWZzLmdldChydWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0ge3J1bGUsIHJ1bGVzOiBbXSwgaXNHcm91cDogdHJ1ZX07XHJcbiAgICAgICAgICAgICAgICBncm91cFJlZnMuc2V0KHJ1bGUsIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEdyb3VwID0gZ2V0R3JvdXAocnVsZS5wYXJlbnRSdWxlKTtcclxuICAgICAgICAgICAgICAgIHBhcmVudEdyb3VwLnJ1bGVzLnB1c2goZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhclR5cGVDaGFuZ2VDbGVhbmVycy5mb3JFYWNoKChjbGVhcikgPT4gY2xlYXIoKSk7XHJcbiAgICAgICAgICAgIHZhclR5cGVDaGFuZ2VDbGVhbmVycy5jbGVhcigpO1xyXG4gICAgICAgICAgICBtb2RSdWxlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigocikgPT4gcilcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh7c2VsZWN0b3IsIGRlY2xhcmF0aW9ucywgcGFyZW50UnVsZX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGdldEdyb3VwKHBhcmVudFJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5U3R5bGVSdWxlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNHcm91cDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5RGVjbGFyYXRpb25zID0gcmVhZHlTdHlsZVJ1bGUuZGVjbGFyYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnJ1bGVzLnB1c2gocmVhZHlTdHlsZVJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUFzeW5jRGVjbGFyYXRpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhc3luY0tleSA9ICsrYXN5bmNEZWNsYXJhdGlvbkNvdW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzeW5jRGVjbGFyYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKGFzeW5jRGVjbGFyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVuZGVySWQgPSByZW5kZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQudGhlbigoYXN5bmNWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhc3luY1ZhbHVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZCgpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlbmRlcklkICE9PSByZW5kZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmNEZWNsYXJhdGlvbi52YWx1ZSA9IGFzeW5jVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY1F1ZXVlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlbmRlcklkICE9PSByZW5kZXJJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYnVpbGRBc3luY1J1bGUoYXN5bmNLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVWYXJEZWNsYXJhdGlvbnMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7ZGVjbGFyYXRpb25zOiB2YXJEZWNzLCBvblR5cGVDaGFuZ2V9ID0gbW9kaWZpZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcktleSA9ICsrdmFyRGVjbGFyYXRpb25Db3VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVuZGVySWQgPSByZW5kZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5pdGlhbEluZGV4ID0gcmVhZHlEZWNsYXJhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2xkRGVjcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFyRGVjcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBEZWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeURlY2xhcmF0aW9ucy5wdXNoKHRlbXBEZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkRGVjcyA9IFt0ZW1wRGVjXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJEZWNzLmZvckVhY2goKG1vZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZC52YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVBc3luY0RlY2xhcmF0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2QucHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5RGVjID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbW9kLnByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJLZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2gocmVhZHlEZWMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3MucHVzaChyZWFkeURlYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblR5cGVDaGFuZ2UuYWRkTGlzdGVuZXIoKG5ld0RlY3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkKCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVuZGVySWQgIT09IHJlbmRlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkeVZhckRlY3MgPSBuZXdEZWNzLm1hcCgobW9kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IG1vZC5wcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1vZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSByZWFkeURlY2xhcmF0aW9ucy5pbmRleE9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3NbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZHlEZWNsYXJhdGlvbnMuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3MubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlYWR5VmFyRGVjc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZERlY3MgPSByZWFkeVZhckRlY3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWJ1aWxkVmFyUnVsZSh2YXJLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyVHlwZUNoYW5nZUNsZWFuZXJzLmFkZCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UeXBlQ2hhbmdlLnJlbW92ZUxpc3RlbmVycygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9ucy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoe3Byb3BlcnR5LCB2YWx1ZSwgaW1wb3J0YW50LCBzb3VyY2VWYWx1ZX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZGlmaWVkID0gdmFsdWUodGhlbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZCBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQXN5bmNEZWNsYXJhdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHkuc3RhcnRzV2l0aChcIi0tXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVZhckRlY2xhcmF0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWR5RGVjbGFyYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGFudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qgc2hlZXQgPSBwcmVwYXJlU2hlZXQoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gYnVpbGRTdHlsZVNoZWV0KCkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFyZ2V0KGdyb3VwLCBwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7cnVsZX0gPSBncm91cDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNZWRpYVJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge21lZGlhfSA9IHJ1bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydFJ1bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQG1lZGlhICR7bWVkaWEubWVkaWFUZXh0fSB7fWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGF5ZXJSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHtuYW1lfSA9IHJ1bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydFJ1bGUoYEBsYXllciAke25hbWV9IHt9YCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGl0ZXJhdGVSZWFkeVJ1bGVzKGdyb3VwLCB0YXJnZXQsIHN0eWxlSXRlcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cC5ydWxlcy5mb3JFYWNoKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmlzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBjcmVhdGVUYXJnZXQociwgdGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZXJhdGVSZWFkeVJ1bGVzKHIsIHQsIHN0eWxlSXRlcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVJdGVyYXRvcihyLCB0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlUmVhZHlSdWxlcyhyb290UmVhZHlHcm91cCwgc2hlZXQsIChydWxlLCB0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRhcmdldC5jc3NSdWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZS5kZWNsYXJhdGlvbnMuZm9yRWFjaCgoe2FzeW5jS2V5LCB2YXJLZXl9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhc3luY0tleSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luY0RlY2xhcmF0aW9ucy5zZXQoYXN5bmNLZXksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhcktleSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJEZWNsYXJhdGlvbnMuc2V0KHZhcktleSwge3J1bGUsIHRhcmdldCwgaW5kZXh9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJ1bGUodGFyZ2V0LCBpbmRleCwgcnVsZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZWJ1aWxkQXN5bmNSdWxlKGtleSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3J1bGUsIHRhcmdldCwgaW5kZXh9ID0gYXN5bmNEZWNsYXJhdGlvbnMuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGVsZXRlUnVsZShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpO1xyXG4gICAgICAgICAgICAgICAgYXN5bmNEZWNsYXJhdGlvbnMuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVidWlsZFZhclJ1bGUoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7cnVsZSwgdGFyZ2V0LCBpbmRleH0gPSB2YXJEZWNsYXJhdGlvbnMuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuZGVsZXRlUnVsZShpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBzZXRSdWxlKHRhcmdldCwgaW5kZXgsIHJ1bGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1aWxkU3R5bGVTaGVldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge21vZGlmeVNoZWV0LCBzaG91bGRSZWJ1aWxkU3R5bGV9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjYW5Vc2VTaGVldFByb3h5JDEgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIsXHJcbiAgICAgICAgKCkgPT4gKGNhblVzZVNoZWV0UHJveHkkMSA9IHRydWUpLFxyXG4gICAgICAgIHtvbmNlOiB0cnVlfVxyXG4gICAgKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoZWV0V2F0Y2hlcihcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIHNhZmVHZXRTaGVldFJ1bGVzLFxyXG4gICAgICAgIGNhbGxiYWNrLFxyXG4gICAgICAgIGlzQ2FuY2VsbGVkXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgcmFmU2hlZXRXYXRjaGVyID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEZvclNoZWV0Q2hhbmdlcygpIHtcclxuICAgICAgICAgICAgd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCk7XHJcbiAgICAgICAgICAgIGlmICghKGNhblVzZVNoZWV0UHJveHkkMSAmJiBlbGVtZW50LnNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgcmFmU2hlZXRXYXRjaGVyID0gY3JlYXRlUkFGU2hlZXRXYXRjaGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2FmZUdldFNoZWV0UnVsZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByYWZTaGVldFdhdGNoZXIuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYXJlU2hlZXRDaGFuZ2VzUGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2hlZXRDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIGNhblVzZVNoZWV0UHJveHkkMSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJhZlNoZWV0V2F0Y2hlcj8uc3RvcCgpO1xyXG4gICAgICAgICAgICBpZiAoYXJlU2hlZXRDaGFuZ2VzUGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNoZWV0Q2hhbmdlcygpIHtcclxuICAgICAgICAgICAgICAgIGFyZVNoZWV0Q2hhbmdlc1BlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0NhbmNlbGxlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVTaGVldENoYW5nZXNQZW5kaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgcXVldWVNaWNyb3Rhc2soaGFuZGxlU2hlZXRDaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1Byb3h5KCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fdXBkYXRlU2hlZXRcIixcclxuICAgICAgICAgICAgICAgIG9uU2hlZXRDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0XCIsXHJcbiAgICAgICAgICAgICAgICBvblNoZWV0Q2hhbmdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlcygpIHtcclxuICAgICAgICAgICAgc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdQcm94eSgpO1xyXG4gICAgICAgICAgICByYWZTaGVldFdhdGNoZXI/LnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RhcnQ6IHdhdGNoRm9yU2hlZXRDaGFuZ2VzLFxyXG4gICAgICAgICAgICBzdG9wOiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUkFGU2hlZXRXYXRjaGVyKFxyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgc2FmZUdldFNoZWV0UnVsZXMsXHJcbiAgICAgICAgY2FsbGJhY2ssXHJcbiAgICAgICAgaXNDYW5jZWxsZWRcclxuICAgICkge1xyXG4gICAgICAgIGxldCBydWxlc0NoYW5nZUtleSA9IG51bGw7XHJcbiAgICAgICAgbGV0IHJ1bGVzQ2hlY2tGcmFtZUlkID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiBnZXRSdWxlc0NoYW5nZUtleSgpIHtcclxuICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBzYWZlR2V0U2hlZXRSdWxlcygpO1xyXG4gICAgICAgICAgICByZXR1cm4gcnVsZXMgPyBydWxlcy5sZW5ndGggOiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaWRSdWxlc0tleUNoYW5nZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFJ1bGVzQ2hhbmdlS2V5KCkgIT09IHJ1bGVzQ2hhbmdlS2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCkge1xyXG4gICAgICAgICAgICBydWxlc0NoYW5nZUtleSA9IGdldFJ1bGVzQ2hhbmdlS2V5KCk7XHJcbiAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrRm9yVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsbGVkID0gaXNDYW5jZWxsZWQoKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkICYmIGRpZFJ1bGVzS2V5Q2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlc0NoYW5nZUtleSA9IGdldFJ1bGVzQ2hhbmdlS2V5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxsZWQgfHwgKGNhblVzZVNoZWV0UHJveHkkMSAmJiBlbGVtZW50LnNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3BXYXRjaGluZ0ZvclNoZWV0Q2hhbmdlc1VzaW5nUkFGKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcnVsZXNDaGVja0ZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tGb3JVcGRhdGUpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjaGVja0ZvclVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTaGVldENoYW5nZXNVc2luZ1JBRigpIHtcclxuICAgICAgICAgICAgcnVsZXNDaGVja0ZyYW1lSWQgJiYgY2FuY2VsQW5pbWF0aW9uRnJhbWUocnVsZXNDaGVja0ZyYW1lSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdGFydDogd2F0Y2hGb3JTaGVldENoYW5nZXNVc2luZ1JBRixcclxuICAgICAgICAgICAgc3RvcDogc3RvcFdhdGNoaW5nRm9yU2hlZXRDaGFuZ2VzVXNpbmdSQUZcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFNUWUxFX1NFTEVDVE9SID0gJ3N0eWxlLCBsaW5rW3JlbCo9XCJzdHlsZXNoZWV0XCIgaV06bm90KFtkaXNhYmxlZF0pJztcclxuICAgIGZ1bmN0aW9uIGlzRm9udHNHb29nbGVBcGlTdHlsZShlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50LmhyZWYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50VVJMID0gbmV3IFVSTChlbGVtZW50LmhyZWYpO1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFVSTC5ob3N0bmFtZSA9PT0gXCJmb250cy5nb29nbGVhcGlzLmNvbVwiO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBsb2dJbmZvKGBDb3VsZG4ndCBjb25zdHJ1Y3QgJHtlbGVtZW50LmhyZWZ9IGFzIFVSTGApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaG9zdHNCcmVha2luZ09uU1ZHU3R5bGVPdmVycmlkZSA9IFtcInd3dy5vbmV0LnBsXCJdO1xyXG4gICAgZnVuY3Rpb24gc2hvdWxkTWFuYWdlU3R5bGUoZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFN0eWxlRWxlbWVudCB8fFxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdTdHlsZUVsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhaG9zdHNCcmVha2luZ09uU1ZHU3R5bGVPdmVycmlkZS5pbmNsdWRlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaG9zdG5hbWVcclxuICAgICAgICAgICAgICAgICAgICApKSB8fFxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICBCb29sZWFuKGVsZW1lbnQucmVsKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoXCJzdHlsZXNoZWV0XCIpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgQm9vbGVhbihlbGVtZW50LmhyZWYpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWVsZW1lbnQuZGlzYWJsZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAoaXNGaXJlZm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gIWVsZW1lbnQuaHJlZi5zdGFydHNXaXRoKFwibW96LWV4dGVuc2lvbjovL1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRydWUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgIWlzRm9udHNHb29nbGVBcGlTdHlsZShlbGVtZW50KSkpICYmXHJcbiAgICAgICAgICAgICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtyZWFkZXJcIikgJiZcclxuICAgICAgICAgICAgZWxlbWVudC5tZWRpYS50b0xvd2VyQ2FzZSgpICE9PSBcInByaW50XCIgJiZcclxuICAgICAgICAgICAgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3R5bHVzXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSwgcmVzdWx0cyA9IFtdLCBkZWVwID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChzaG91bGRNYW5hZ2VTdHlsZShub2RlKSkge1xyXG4gICAgICAgICAgICByZXN1bHRzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQgfHxcclxuICAgICAgICAgICAgKGlzU2hhZG93RG9tU3VwcG9ydGVkICYmIG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB8fFxyXG4gICAgICAgICAgICBub2RlID09PSBkb2N1bWVudFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBmb3JFYWNoKG5vZGUucXVlcnlTZWxlY3RvckFsbChTVFlMRV9TRUxFQ1RPUiksIChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgIGdldE1hbmFnZWFibGVTdHlsZXMoc3R5bGUsIHJlc3VsdHMsIGZhbHNlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKG5vZGUsIChob3N0KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGdldE1hbmFnZWFibGVTdHlsZXMoaG9zdC5zaGFkb3dSb290LCByZXN1bHRzLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzeW5jU3R5bGVTZXQgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgY29uc3QgY29yc1N0eWxlU2V0ID0gbmV3IFdlYWtTZXQoKTtcclxuICAgIGxldCBsb2FkaW5nTGlua0NvdW50ZXIgPSAwO1xyXG4gICAgY29uc3QgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gY2xlYW5Mb2FkaW5nTGlua3MoKSB7XHJcbiAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtYW5hZ2VTdHlsZShlbGVtZW50LCB7dXBkYXRlLCBsb2FkaW5nU3RhcnQsIGxvYWRpbmdFbmR9KSB7XHJcbiAgICAgICAgY29uc3QgcHJldlN0eWxlcyA9IFtdO1xyXG4gICAgICAgIGxldCBuZXh0ID0gZWxlbWVudDtcclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgIChuZXh0ID0gbmV4dC5uZXh0RWxlbWVudFNpYmxpbmcpICYmXHJcbiAgICAgICAgICAgIG5leHQubWF0Y2hlcyhcIi5kYXJrcmVhZGVyXCIpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHByZXZTdHlsZXMucHVzaChuZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvcnNDb3B5ID1cclxuICAgICAgICAgICAgcHJldlN0eWxlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVsKSA9PiBlbC5tYXRjaGVzKFwiLmRhcmtyZWFkZXItLWNvcnNcIikgJiYgIWNvcnNTdHlsZVNldC5oYXMoZWwpXHJcbiAgICAgICAgICAgICkgfHwgbnVsbDtcclxuICAgICAgICBsZXQgc3luY1N0eWxlID1cclxuICAgICAgICAgICAgcHJldlN0eWxlcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgKGVsKSA9PiBlbC5tYXRjaGVzKFwiLmRhcmtyZWFkZXItLXN5bmNcIikgJiYgIXN5bmNTdHlsZVNldC5oYXMoZWwpXHJcbiAgICAgICAgICAgICkgfHwgbnVsbDtcclxuICAgICAgICBsZXQgY29yc0NvcHlQb3NpdGlvbldhdGNoZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNPdmVycmlkZUVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBpc0FzeW5jQ2FuY2VsbGVkID0gKCkgPT4gY2FuY2VsQXN5bmNPcGVyYXRpb25zO1xyXG4gICAgICAgIGNvbnN0IHNoZWV0TW9kaWZpZXIgPSBjcmVhdGVTdHlsZVNoZWV0TW9kaWZpZXIoKTtcclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgbXV0YXRpb25zLnNvbWUoKG0pID0+IG0udHlwZSA9PT0gXCJjaGFyYWN0ZXJEYXRhXCIpICYmXHJcbiAgICAgICAgICAgICAgICBjb250YWluc0NTU0ltcG9ydCgpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3NzVGV4dCA9IChlbGVtZW50LnRleHRDb250ZW50ID8/IFwiXCIpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZU9yVXBkYXRlQ09SU0NvcHkoY3NzVGV4dCwgbG9jYXRpb24uaHJlZikudGhlbih1cGRhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBvYnNlcnZlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZnVuY3Rpb24gY29udGFpbnNDU1NJbXBvcnQoKSB7XHJcbiAgICAgICAgICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU3R5bGVFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1RleHQgPSByZW1vdmVDU1NDb21tZW50cyhlbGVtZW50LnRleHRDb250ZW50ID8/IFwiXCIpLnRyaW0oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNzc1RleHQubWF0Y2goY3NzSW1wb3J0UmVnZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBoYXNJbXBvcnRzKGNzc1J1bGVzLCBjaGVja0Nyb3NzT3JpZ2luKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcnVsZTtcclxuICAgICAgICAgICAgICAgIGNzc1J1bGVzTG9vcDogZm9yIChcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDAsIGxlbiA9IGNzc1J1bGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBpIDwgbGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGkrK1xyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcnVsZSA9IGNzc1J1bGVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChydWxlLmhyZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ3Jvc3NPcmlnaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcnVsZS5ocmVmLnN0YXJ0c1dpdGgoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlLmhyZWYuc3RhcnRzV2l0aChcImh0dHBcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhcnVsZS5ocmVmLnN0YXJ0c1dpdGgobG9jYXRpb24ub3JpZ2luKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBjc3NSdWxlc0xvb3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgY3NzUnVsZXNMb29wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFJ1bGVzU3luYygpIHtcclxuICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29yc0NvcHkuc2hlZXQuY3NzUnVsZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zQ1NTSW1wb3J0KCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNzc1J1bGVzID0gc2FmZUdldFNoZWV0UnVsZXMoKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgIWlzUmVsYXRpdmVIcmVmT25BYnNvbHV0ZVBhdGgoZWxlbWVudC5ocmVmKSAmJlxyXG4gICAgICAgICAgICAgICAgaGFzSW1wb3J0cyhjc3NSdWxlcywgZmFsc2UpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGhhc0ltcG9ydHMoY3NzUnVsZXMsIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY3NzUnVsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGluc2VydFN0eWxlKCkge1xyXG4gICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5leHRTaWJsaW5nICE9PSBjb3JzQ29weSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm5leHRTaWJsaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb3JzQ29weS5uZXh0U2libGluZyAhPT0gc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3luY1N0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weS5uZXh0U2libGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5uZXh0U2libGluZyAhPT0gc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN5bmNTdHlsZSwgZWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3luY1N0eWxlKCkge1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUgPVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudCBpbnN0YW5jZW9mIFNWR1N0eWxlRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICAgICAgICAgICAgc3luY1N0eWxlLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgICAgICBzeW5jU3R5bGUuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXItLXN5bmNcIik7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZS5tZWRpYSA9IFwic2NyZWVuXCI7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICBzeW5jU3R5bGUudGl0bGUgPSBlbGVtZW50LnRpdGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZVNldC5hZGQoc3luY1N0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHdhc0xvYWRpbmdFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGxvYWRpbmdMaW5rSWQgPSArK2xvYWRpbmdMaW5rQ291bnRlcjtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRSdWxlc0FzeW5jKCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzVGV4dDtcclxuICAgICAgICAgICAgbGV0IGNzc0Jhc2VQYXRoO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFtjc3NSdWxlcywgYWNjZXNzRXJyb3JdID0gZ2V0UnVsZXNPckVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGlzU2FmYXJpICYmICFlbGVtZW50LnNoZWV0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICghaXNTYWZhcmkgJiYgIWNzc1J1bGVzICYmICFhY2Nlc3NFcnJvcikgfHxcclxuICAgICAgICAgICAgICAgICAgICBpc1N0aWxsTG9hZGluZ0Vycm9yKGFjY2Vzc0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nSW5mbyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBMaW5rZWxlbWVudCAke2xvYWRpbmdMaW5rSWR9IGlzIG5vdCBsb2FkZWQgeWV0IGFuZCB0aHVzIHdpbGwgYmUgYXdhaXQgZm9yYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgbGlua0xvYWRpbmcoZWxlbWVudCwgbG9hZGluZ0xpbmtJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhc0xvYWRpbmdFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5jZWxBc3luY09wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFtjc3NSdWxlcywgYWNjZXNzRXJyb3JdID0gZ2V0UnVsZXNPckVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0ltcG9ydHMoY3NzUnVsZXMsIGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3NzUnVsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3NzVGV4dCA9IGF3YWl0IGxvYWRUZXh0KGVsZW1lbnQuaHJlZik7XHJcbiAgICAgICAgICAgICAgICBjc3NCYXNlUGF0aCA9IGdldENTU0Jhc2VCYXRoKGVsZW1lbnQuaHJlZik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsQXN5bmNPcGVyYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbnNDU1NJbXBvcnQoKSkge1xyXG4gICAgICAgICAgICAgICAgY3NzVGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgY3NzQmFzZVBhdGggPSBnZXRDU1NCYXNlQmF0aChsb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZU9yVXBkYXRlQ09SU0NvcHkoY3NzVGV4dCwgY3NzQmFzZVBhdGgpO1xyXG4gICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3JzQ29weS5zaGVldC5jc3NSdWxlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVDT1JTQ29weShjc3NUZXh0LCBjc3NCYXNlUGF0aCkge1xyXG4gICAgICAgICAgICBpZiAoY3NzVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmdWxsQ1NTVGV4dCA9IGF3YWl0IHJlcGxhY2VDU1NJbXBvcnRzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NCYXNlUGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcnNDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb3JzQ29weS50ZXh0Q29udGVudD8ubGVuZ3RoID8/IDApIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxDU1NUZXh0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnNDb3B5LnRleHRDb250ZW50ID0gZnVsbENTU1RleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weSA9IGNyZWF0ZUNPUlNDb3B5KGVsZW1lbnQsIGZ1bGxDU1NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29yc0NvcHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciA9IHdhdGNoRm9yTm9kZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JzQ29weSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmV2LXNpYmxpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGV0YWlscyhvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gZ2V0UnVsZXNTeW5jKCk7XHJcbiAgICAgICAgICAgIGlmICghcnVsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnNlY29uZFJvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nUnVsZXMgfHwgd2FzTG9hZGluZ0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdSdWxlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nU3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIGdldFJ1bGVzQXN5bmMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZ1J1bGVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdFbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmdSdWxlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge3J1bGVzfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZvcmNlUmVuZGVyU3R5bGUgPSBmYWxzZTtcclxuICAgICAgICBmdW5jdGlvbiByZW5kZXIodGhlbWUsIGlnbm9yZUltYWdlQW5hbHlzaXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcnVsZXMgPSBnZXRSdWxlc1N5bmMoKTtcclxuICAgICAgICAgICAgaWYgKCFydWxlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVDU1NSdWxlc0Zyb21TaGVldChzaGVldCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzaGVldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzaGVldC5jc3NSdWxlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcHJlcGFyZU92ZXJyaWRlc1NoZWV0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzeW5jU3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTeW5jU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciAmJiBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgaW5zZXJ0U3R5bGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzeW5jU3R5bGUuc2hlZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IHN5bmNTdHlsZS5zaGVldDtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNTU1J1bGVzRnJvbVNoZWV0KHNoZWV0KTtcclxuICAgICAgICAgICAgICAgIGlmIChzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIucnVuKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciA9IHdhdGNoRm9yTm9kZVBvc2l0aW9uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW5jU3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJldi1zaWJsaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyU3R5bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbGRPdmVycmlkZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3luY1N0eWxlLnNoZWV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGJ1aWxkT3ZlcnJpZGVzKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9yY2UgPSBmb3JjZVJlbmRlclN0eWxlO1xyXG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXJTdHlsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2hlZXRNb2RpZmllci5tb2RpZnlTaGVldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZVNoZWV0OiBwcmVwYXJlT3ZlcnJpZGVzU2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlQ1NTUnVsZXM6IHJ1bGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUltYWdlQW5hbHlzaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBc3luY0NhbmNlbGxlZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpc092ZXJyaWRlRW1wdHkgPSBzeW5jU3R5bGUuc2hlZXQuY3NzUnVsZXMubGVuZ3RoID09PSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoZWV0TW9kaWZpZXIuc2hvdWxkUmVidWlsZFN0eWxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRSZWFkeVN0YXRlQ29tcGxldGVMaXN0ZW5lcigoKSA9PiB1cGRhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVpbGRPdmVycmlkZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXNPckVycm9yKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc2hlZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbnVsbCwgbnVsbF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW2VsZW1lbnQuc2hlZXQuY3NzUnVsZXMsIG51bGxdO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZXJyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpc1N0aWxsTG9hZGluZ0Vycm9yKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvciAmJiBlcnJvci5tZXNzYWdlICYmIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJsb2FkaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBzYWZlR2V0U2hlZXRSdWxlcygpIHtcclxuICAgICAgICAgICAgY29uc3QgW2Nzc1J1bGVzLCBlcnJdID0gZ2V0UnVsZXNPckVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjc3NSdWxlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2hlZXRDaGFuZ2VXYXRjaGVyID0gY3JlYXRlU2hlZXRXYXRjaGVyKFxyXG4gICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICBzYWZlR2V0U2hlZXRSdWxlcyxcclxuICAgICAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkXHJcbiAgICAgICAgKTtcclxuICAgICAgICBmdW5jdGlvbiBwYXVzZSgpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICBjYW5jZWxBc3luY09wZXJhdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciAmJiBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlci5zdG9wKCk7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciAmJiBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICBzaGVldENoYW5nZVdhdGNoZXIuc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgICAgICAgICBwYXVzZSgpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGNvcnNDb3B5KTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShzeW5jU3R5bGUpO1xyXG4gICAgICAgICAgICBsb2FkaW5nRW5kKCk7XHJcbiAgICAgICAgICAgIGlmIChyZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuaGFzKGxvYWRpbmdMaW5rSWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWplY3QgPSByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZ2V0KGxvYWRpbmdMaW5rSWQpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLmRlbGV0ZShsb2FkaW5nTGlua0lkKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCAmJiByZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaCgpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCBvYnNlcnZlck9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHNoZWV0Q2hhbmdlV2F0Y2hlci5zdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG1heE1vdmVDb3VudCA9IDEwO1xyXG4gICAgICAgIGxldCBtb3ZlQ291bnQgPSAwO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlc3RvcmUoKSB7XHJcbiAgICAgICAgICAgIGlmICghc3luY1N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW92ZUNvdW50Kys7XHJcbiAgICAgICAgICAgIGlmIChtb3ZlQ291bnQgPiBtYXhNb3ZlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnNlcnRTdHlsZSgpO1xyXG4gICAgICAgICAgICBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlciAmJiBjb3JzQ29weVBvc2l0aW9uV2F0Y2hlci5za2lwKCk7XHJcbiAgICAgICAgICAgIHN5bmNTdHlsZVBvc2l0aW9uV2F0Y2hlciAmJiBzeW5jU3R5bGVQb3NpdGlvbldhdGNoZXIuc2tpcCgpO1xyXG4gICAgICAgICAgICBpZiAoIWlzT3ZlcnJpZGVFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXJTdHlsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkZXRhaWxzLFxyXG4gICAgICAgICAgICByZW5kZXIsXHJcbiAgICAgICAgICAgIHBhdXNlLFxyXG4gICAgICAgICAgICBkZXN0cm95LFxyXG4gICAgICAgICAgICB3YXRjaCxcclxuICAgICAgICAgICAgcmVzdG9yZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsaW5rTG9hZGluZyhsaW5rLCBsb2FkaW5nSWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbGVhblVwID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluay5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgbGluay5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZWplY3RvcnNGb3JMb2FkaW5nTGlua3MuZGVsZXRlKGxvYWRpbmdJZCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IG9uTG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChcclxuICAgICAgICAgICAgICAgICAgICBgTGlua2VsZW1lbnQgJHtsb2FkaW5nSWR9IGNvdWxkbid0IGJlIGxvYWRlZC4gJHtsaW5rLmhyZWZ9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVqZWN0b3JzRm9yTG9hZGluZ0xpbmtzLnNldChsb2FkaW5nSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBvbkxvYWQsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIG9uRXJyb3IsIHtwYXNzaXZlOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGlmICghbGluay5ocmVmKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldENTU0ltcG9ydFVSTChpbXBvcnREZWNsYXJhdGlvbikge1xyXG4gICAgICAgIHJldHVybiBnZXRDU1NVUkxWYWx1ZShcclxuICAgICAgICAgICAgaW1wb3J0RGVjbGFyYXRpb25cclxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoNylcclxuICAgICAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC87JC8sIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvc2NyZWVuJC8sIFwiXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRUZXh0KHVybCkge1xyXG4gICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCAoYXdhaXQgZmV0Y2godXJsKSkudGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXJzZWRVUkwgPSBuZXcgVVJMKHVybCk7XHJcbiAgICAgICAgaWYgKHBhcnNlZFVSTC5vcmlnaW4gPT09IGxvY2F0aW9uLm9yaWdpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgbG9hZEFzVGV4dCh1cmwsIFwidGV4dC9jc3NcIiwgbG9jYXRpb24ub3JpZ2luKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IGJnRmV0Y2goe1xyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIG1pbWVUeXBlOiBcInRleHQvY3NzXCIsXHJcbiAgICAgICAgICAgIG9yaWdpbjogbG9jYXRpb24ub3JpZ2luXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiByZXBsYWNlQ1NTSW1wb3J0cyhjc3NUZXh0LCBiYXNlUGF0aCwgY2FjaGUgPSBuZXcgTWFwKCkpIHtcclxuICAgICAgICBjc3NUZXh0ID0gcmVtb3ZlQ1NTQ29tbWVudHMoY3NzVGV4dCk7XHJcbiAgICAgICAgY3NzVGV4dCA9IHJlcGxhY2VDU1NGb250RmFjZShjc3NUZXh0KTtcclxuICAgICAgICBjc3NUZXh0ID0gcmVwbGFjZUNTU1JlbGF0aXZlVVJMc1dpdGhBYnNvbHV0ZShjc3NUZXh0LCBiYXNlUGF0aCk7XHJcbiAgICAgICAgY29uc3QgaW1wb3J0TWF0Y2hlcyA9IGdldE1hdGNoZXMoY3NzSW1wb3J0UmVnZXgsIGNzc1RleHQpO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgaW1wb3J0TWF0Y2hlcykge1xyXG4gICAgICAgICAgICBjb25zdCBpbXBvcnRVUkwgPSBnZXRDU1NJbXBvcnRVUkwobWF0Y2gpO1xyXG4gICAgICAgICAgICBjb25zdCBhYnNvbHV0ZVVSTCA9IGdldEFic29sdXRlVVJMKGJhc2VQYXRoLCBpbXBvcnRVUkwpO1xyXG4gICAgICAgICAgICBsZXQgaW1wb3J0ZWRDU1M7XHJcbiAgICAgICAgICAgIGlmIChjYWNoZS5oYXMoYWJzb2x1dGVVUkwpKSB7XHJcbiAgICAgICAgICAgICAgICBpbXBvcnRlZENTUyA9IGNhY2hlLmdldChhYnNvbHV0ZVVSTCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gYXdhaXQgbG9hZFRleHQoYWJzb2x1dGVVUkwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChhYnNvbHV0ZVVSTCwgaW1wb3J0ZWRDU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gYXdhaXQgcmVwbGFjZUNTU0ltcG9ydHMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRDU1NCYXNlQmF0aChhYnNvbHV0ZVVSTCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydGVkQ1NTID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5zcGxpdChtYXRjaCkuam9pbihpbXBvcnRlZENTUyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNzc1RleHQgPSBjc3NUZXh0LnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gY3NzVGV4dDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNPUlNDb3B5KHNyY0VsZW1lbnQsIGNzc1RleHQpIHtcclxuICAgICAgICBpZiAoIWNzc1RleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgY29ycy5jbGFzc0xpc3QuYWRkKFwiZGFya3JlYWRlclwiKTtcclxuICAgICAgICBjb3JzLmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyLS1jb3JzXCIpO1xyXG4gICAgICAgIGNvcnMubWVkaWEgPSBcInNjcmVlblwiO1xyXG4gICAgICAgIGNvcnMudGV4dENvbnRlbnQgPSBjc3NUZXh0O1xyXG4gICAgICAgIHNyY0VsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29ycywgc3JjRWxlbWVudC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgY29ycy5zaGVldC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY29yc1N0eWxlU2V0LmFkZChjb3JzKTtcclxuICAgICAgICByZXR1cm4gY29ycztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWZpbmVkQ3VzdG9tRWxlbWVudHMgPSBuZXcgU2V0KCk7XHJcbiAgICBjb25zdCB1bmRlZmluZWRHcm91cHMgPSBuZXcgTWFwKCk7XHJcbiAgICBsZXQgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2s7XHJcbiAgICBmdW5jdGlvbiBpc0N1c3RvbUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUuaW5jbHVkZXMoXCItXCIpIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaXNcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlY29yZFVuZGVmaW5lZEVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgICAgIGxldCB0YWcgPSBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoIXRhZy5pbmNsdWRlcyhcIi1cIikpIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW5kZWRUYWcgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImlzXCIpO1xyXG4gICAgICAgICAgICBpZiAoZXh0ZW5kZWRUYWcpIHtcclxuICAgICAgICAgICAgICAgIHRhZyA9IGV4dGVuZGVkVGFnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdW5kZWZpbmVkR3JvdXBzLmhhcyh0YWcpKSB7XHJcbiAgICAgICAgICAgIHVuZGVmaW5lZEdyb3Vwcy5zZXQodGFnLCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICBjdXN0b21FbGVtZW50c1doZW5EZWZpbmVkKHRhZykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHVuZGVmaW5lZEdyb3Vwcy5nZXQodGFnKTtcclxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWRHcm91cHMuZGVsZXRlKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2soQXJyYXkuZnJvbShlbGVtZW50cykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdW5kZWZpbmVkR3JvdXBzLmdldCh0YWcpLmFkZChlbGVtZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhyb290KSB7XHJcbiAgICAgICAgaWYgKCFpc0RlZmluZWRTZWxlY3RvclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvckVhY2goXHJcbiAgICAgICAgICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbChcIjpub3QoOmRlZmluZWQpXCIpLFxyXG4gICAgICAgICAgICByZWNvcmRVbmRlZmluZWRFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGxldCBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSBmYWxzZTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge29uY2U6IHRydWUsIHBhc3NpdmU6IHRydWV9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzb2x2ZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlSXNEZWZpbmVkKGUpIHtcclxuICAgICAgICBjYW5PcHRpbWl6ZVVzaW5nUHJveHkgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHRhZyA9IGUuZGV0YWlsLnRhZztcclxuICAgICAgICBkZWZpbmVkQ3VzdG9tRWxlbWVudHMuYWRkKHRhZyk7XHJcbiAgICAgICAgaWYgKHJlc29sdmVycy5oYXModGFnKSkge1xyXG4gICAgICAgICAgICBjb25zdCByID0gcmVzb2x2ZXJzLmdldCh0YWcpO1xyXG4gICAgICAgICAgICByZXNvbHZlcnMuZGVsZXRlKHRhZyk7XHJcbiAgICAgICAgICAgIHIuZm9yRWFjaCgocikgPT4gcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBjdXN0b21FbGVtZW50c1doZW5EZWZpbmVkKHRhZykge1xyXG4gICAgICAgIGlmIChkZWZpbmVkQ3VzdG9tRWxlbWVudHMuaGFzKHRhZykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmN1c3RvbUVsZW1lbnRzICYmXHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQgPT09IFwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKHRhZykudGhlbigoKSA9PiByZXNvbHZlKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNhbk9wdGltaXplVXNpbmdQcm94eSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVycy5oYXModGFnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVycy5nZXQodGFnKS5wdXNoKHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlcnMuc2V0KHRhZywgW3Jlc29sdmVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19hZGRVbmRlZmluZWRSZXNvbHZlclwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbDoge3RhZ31cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrSWZEZWZpbmVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdW5kZWZpbmVkR3JvdXBzLmdldCh0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy52YWx1ZXMoKS5uZXh0KCkudmFsdWUubWF0Y2hlcyhcIjpkZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrSWZEZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tJZkRlZmluZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3YXRjaFdoZW5DdXN0b21FbGVtZW50c0RlZmluZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBlbGVtZW50c0RlZmluaXRpb25DYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmVGcm9tRGVmaW5lQ3VzdG9tRWxlbWVudHMoKSB7XHJcbiAgICAgICAgZWxlbWVudHNEZWZpbml0aW9uQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHVuZGVmaW5lZEdyb3Vwcy5jbGVhcigpO1xyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19pc0RlZmluZWRcIixcclxuICAgICAgICAgICAgaGFuZGxlSXNEZWZpbmVkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYnNlcnZlcnMgPSBbXTtcclxuICAgIGxldCBvYnNlcnZlZFJvb3RzO1xyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JTdHlsZVBvc2l0aW9ucyhcclxuICAgICAgICBjdXJyZW50U3R5bGVzLFxyXG4gICAgICAgIHVwZGF0ZSxcclxuICAgICAgICBzaGFkb3dSb290RGlzY292ZXJlZFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yU3R5bGVQb3NpdGlvbnMoKTtcclxuICAgICAgICBjb25zdCBwcmV2U3R5bGVzQnlSb290ID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICBjb25zdCBnZXRQcmV2U3R5bGVzID0gKHJvb3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwcmV2U3R5bGVzQnlSb290Lmhhcyhyb290KSkge1xyXG4gICAgICAgICAgICAgICAgcHJldlN0eWxlc0J5Um9vdC5zZXQocm9vdCwgbmV3IFNldCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcHJldlN0eWxlc0J5Um9vdC5nZXQocm9vdCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjdXJyZW50U3R5bGVzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJvb3QgPSBub2RlO1xyXG4gICAgICAgICAgICB3aGlsZSAoKHJvb3QgPSByb290LnBhcmVudE5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdCA9PT0gZG9jdW1lbnQgfHxcclxuICAgICAgICAgICAgICAgICAgICByb290Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZTdHlsZXMgPSBnZXRQcmV2U3R5bGVzKHJvb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZTdHlsZXMuYWRkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcHJldlN0eWxlU2libGluZ3MgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRTdHlsZVNpYmxpbmdzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICBmdW5jdGlvbiBzYXZlU3R5bGVQb3NpdGlvbihzdHlsZSkge1xyXG4gICAgICAgICAgICBwcmV2U3R5bGVTaWJsaW5ncy5zZXQoc3R5bGUsIHN0eWxlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgICAgICBuZXh0U3R5bGVTaWJsaW5ncy5zZXQoc3R5bGUsIHN0eWxlLm5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGZvcmdldFN0eWxlUG9zaXRpb24oc3R5bGUpIHtcclxuICAgICAgICAgICAgcHJldlN0eWxlU2libGluZ3MuZGVsZXRlKHN0eWxlKTtcclxuICAgICAgICAgICAgbmV4dFN0eWxlU2libGluZ3MuZGVsZXRlKHN0eWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZGlkU3R5bGVQb3NpdGlvbkNoYW5nZShzdHlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgc3R5bGUucHJldmlvdXNFbGVtZW50U2libGluZyAhPT0gcHJldlN0eWxlU2libGluZ3MuZ2V0KHN0eWxlKSB8fFxyXG4gICAgICAgICAgICAgICAgc3R5bGUubmV4dEVsZW1lbnRTaWJsaW5nICE9PSBuZXh0U3R5bGVTaWJsaW5ncy5nZXQoc3R5bGUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1cnJlbnRTdHlsZXMuZm9yRWFjaChzYXZlU3R5bGVQb3NpdGlvbik7XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3R5bGVPcGVyYXRpb25zKHJvb3QsIG9wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc3Qge2NyZWF0ZWRTdHlsZXMsIHJlbW92ZWRTdHlsZXMsIG1vdmVkU3R5bGVzfSA9IG9wZXJhdGlvbnM7XHJcbiAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuZm9yRWFjaCgocykgPT4gc2F2ZVN0eWxlUG9zaXRpb24ocykpO1xyXG4gICAgICAgICAgICBtb3ZlZFN0eWxlcy5mb3JFYWNoKChzKSA9PiBzYXZlU3R5bGVQb3NpdGlvbihzKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuZm9yRWFjaCgocykgPT4gZm9yZ2V0U3R5bGVQb3NpdGlvbihzKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZTdHlsZXMgPSBnZXRQcmV2U3R5bGVzKHJvb3QpO1xyXG4gICAgICAgICAgICBjcmVhdGVkU3R5bGVzLmZvckVhY2goKHMpID0+IHByZXZTdHlsZXMuYWRkKHMpKTtcclxuICAgICAgICAgICAgcmVtb3ZlZFN0eWxlcy5mb3JFYWNoKChzKSA9PiBwcmV2U3R5bGVzLmRlbGV0ZShzKSk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRTdHlsZXMuc2l6ZSArIHJlbW92ZWRTdHlsZXMuc2l6ZSArIG1vdmVkU3R5bGVzLnNpemUgPlxyXG4gICAgICAgICAgICAgICAgMFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogQXJyYXkuZnJvbShjcmVhdGVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkOiBBcnJheS5mcm9tKHJlbW92ZWRTdHlsZXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVkOiBBcnJheS5mcm9tKG1vdmVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkOiBbXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTWlub3JUcmVlTXV0YXRpb25zKHJvb3QsIHthZGRpdGlvbnMsIG1vdmVzLCBkZWxldGlvbnN9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZWRTdHlsZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBhZGRpdGlvbnMuZm9yRWFjaCgobm9kZSkgPT5cclxuICAgICAgICAgICAgICAgIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSkuZm9yRWFjaCgoc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5hZGQoc3R5bGUpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRlbGV0aW9ucy5mb3JFYWNoKChub2RlKSA9PlxyXG4gICAgICAgICAgICAgICAgZ2V0TWFuYWdlYWJsZVN0eWxlcyhub2RlKS5mb3JFYWNoKChzdHlsZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLmFkZChzdHlsZSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbW92ZXMuZm9yRWFjaCgobm9kZSkgPT5cclxuICAgICAgICAgICAgICAgIGdldE1hbmFnZWFibGVTdHlsZXMobm9kZSkuZm9yRWFjaCgoc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZWRTdHlsZXMuYWRkKHN0eWxlKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBoYW5kbGVTdHlsZU9wZXJhdGlvbnMocm9vdCwge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZFN0eWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWRkaXRpb25zLmZvckVhY2goKG4pID0+IHtcclxuICAgICAgICAgICAgICAgIGRlZXBPYnNlcnZlKG4pO1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdFVuZGVmaW5lZEVsZW1lbnRzKG4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWRkaXRpb25zLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICAobm9kZSkgPT4gaXNDdXN0b21FbGVtZW50KG5vZGUpICYmIHJlY29yZFVuZGVmaW5lZEVsZW1lbnQobm9kZSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlSHVnZVRyZWVNdXRhdGlvbnMocm9vdCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSBuZXcgU2V0KGdldE1hbmFnZWFibGVTdHlsZXMocm9vdCkpO1xyXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBjb25zdCBtb3ZlZFN0eWxlcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldlN0eWxlcyA9IGdldFByZXZTdHlsZXMocm9vdCk7XHJcbiAgICAgICAgICAgIHN0eWxlcy5mb3JFYWNoKChzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByZXZTdHlsZXMuaGFzKHMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlcy5hZGQocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcmV2U3R5bGVzLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghc3R5bGVzLmhhcyhzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMuYWRkKHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3R5bGVzLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAhY3JlYXRlZFN0eWxlcy5oYXMocykgJiZcclxuICAgICAgICAgICAgICAgICAgICAhcmVtb3ZlZFN0eWxlcy5oYXMocykgJiZcclxuICAgICAgICAgICAgICAgICAgICBkaWRTdHlsZVBvc2l0aW9uQ2hhbmdlKHMpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZFN0eWxlcy5hZGQocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBoYW5kbGVTdHlsZU9wZXJhdGlvbnMocm9vdCwge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlZFN0eWxlcyxcclxuICAgICAgICAgICAgICAgIHJlbW92ZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICAgICBtb3ZlZFN0eWxlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGVlcE9ic2VydmUocm9vdCk7XHJcbiAgICAgICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhyb290KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zKG11dGF0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVkU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3RhcmdldH0gPSBtO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRNYW5hZ2VTdHlsZSh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRTdHlsZXMuYWRkKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkU3R5bGVzLmFkZCh0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVkU3R5bGVzLnNpemUgKyByZW1vdmVkU3R5bGVzLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IEFycmF5LmZyb20odXBkYXRlZFN0eWxlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlZDogQXJyYXkuZnJvbShyZW1vdmVkU3R5bGVzKSxcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlZDogW11cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmUocm9vdCkge1xyXG4gICAgICAgICAgICBpZiAob2JzZXJ2ZWRSb290cy5oYXMocm9vdCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0cmVlT2JzZXJ2ZXIgPSBjcmVhdGVPcHRpbWl6ZWRUcmVlT2JzZXJ2ZXIocm9vdCwge1xyXG4gICAgICAgICAgICAgICAgb25NaW5vck11dGF0aW9uczogaGFuZGxlTWlub3JUcmVlTXV0YXRpb25zLFxyXG4gICAgICAgICAgICAgICAgb25IdWdlTXV0YXRpb25zOiBoYW5kbGVIdWdlVHJlZU11dGF0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgYXR0ck9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaGFuZGxlQXR0cmlidXRlTXV0YXRpb25zKTtcclxuICAgICAgICAgICAgYXR0ck9ic2VydmVyLm9ic2VydmUocm9vdCwge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJyZWxcIiwgXCJkaXNhYmxlZFwiLCBcIm1lZGlhXCIsIFwiaHJlZlwiXSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5wdXNoKHRyZWVPYnNlcnZlciwgYXR0ck9ic2VydmVyKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZWRSb290cy5hZGQocm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKG5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3Qge3NoYWRvd1Jvb3R9ID0gbm9kZTtcclxuICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3QgPT0gbnVsbCB8fCBvYnNlcnZlZFJvb3RzLmhhcyhzaGFkb3dSb290KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9ic2VydmUoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIHNoYWRvd1Jvb3REaXNjb3ZlcmVkKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkZWVwT2JzZXJ2ZShub2RlKSB7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVTaGFkb3dIb3N0cyhub2RlLCBzdWJzY3JpYmVGb3JTaGFkb3dSb290Q2hhbmdlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmUoZG9jdW1lbnQpO1xyXG4gICAgICAgIGRlZXBPYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XHJcbiAgICAgICAgd2F0Y2hXaGVuQ3VzdG9tRWxlbWVudHNEZWZpbmVkKChob3N0cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTdHlsZXMgPSBbXTtcclxuICAgICAgICAgICAgaG9zdHMuZm9yRWFjaCgoaG9zdCkgPT5cclxuICAgICAgICAgICAgICAgIHB1c2gobmV3U3R5bGVzLCBnZXRNYW5hZ2VhYmxlU3R5bGVzKGhvc3Quc2hhZG93Um9vdCkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHVwZGF0ZSh7Y3JlYXRlZDogbmV3U3R5bGVzLCB1cGRhdGVkOiBbXSwgcmVtb3ZlZDogW10sIG1vdmVkOiBbXX0pO1xyXG4gICAgICAgICAgICBob3N0cy5mb3JFYWNoKChob3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7c2hhZG93Um9vdH0gPSBob3N0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN1YnNjcmliZUZvclNoYWRvd1Jvb3RDaGFuZ2VzKGhvc3QpO1xyXG4gICAgICAgICAgICAgICAgZGVlcE9ic2VydmUoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0VW5kZWZpbmVkRWxlbWVudHMoc2hhZG93Um9vdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJfX2RhcmtyZWFkZXJfX2lzRGVmaW5lZFwiLCBoYW5kbGVJc0RlZmluZWQpO1xyXG4gICAgICAgIGNvbGxlY3RVbmRlZmluZWRFbGVtZW50cyhkb2N1bWVudCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNldE9ic2VydmVycygpIHtcclxuICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaCgobykgPT4gby5kaXNjb25uZWN0KCkpO1xyXG4gICAgICAgIG9ic2VydmVycy5zcGxpY2UoMCwgb2JzZXJ2ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgb2JzZXJ2ZWRSb290cyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTdHlsZVBvc2l0aW9ucygpIHtcclxuICAgICAgICByZXNldE9ic2VydmVycygpO1xyXG4gICAgICAgIHVuc3Vic2NyaWJlRnJvbURlZmluZUN1c3RvbUVsZW1lbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd2F0Y2hGb3JTdHlsZUNoYW5nZXMoY3VycmVudFN0eWxlcywgdXBkYXRlLCBzaGFkb3dSb290RGlzY292ZXJlZCkge1xyXG4gICAgICAgIHdhdGNoRm9yU3R5bGVQb3NpdGlvbnMoY3VycmVudFN0eWxlcywgdXBkYXRlLCBzaGFkb3dSb290RGlzY292ZXJlZCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JTdHlsZUNoYW5nZXMoKSB7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yU3R5bGVQb3NpdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2FuVXNlU2hlZXRQcm94eSA9IGZhbHNlO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcIl9fZGFya3JlYWRlcl9faW5saW5lU2NyaXB0c0FsbG93ZWRcIixcclxuICAgICAgICAoKSA9PiAoY2FuVXNlU2hlZXRQcm94eSA9IHRydWUpLFxyXG4gICAgICAgIHtvbmNlOiB0cnVlfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG92ZXJyaWRlcyA9IG5ldyBXZWFrU2V0KCk7XHJcbiAgICBjb25zdCBvdmVycmlkZXNCeVNvdXJjZSA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBjYW5IYXZlQWRvcHRlZFN0eWxlU2hlZXRzKG5vZGUpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldE92ZXJyaWRlKG5vZGUpIHtcclxuICAgICAgICBsZXQgY2FuY2VsQXN5bmNPcGVyYXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZVNvdXJjZVNoZWV0cyhpdGVyYXRvcikge1xyXG4gICAgICAgICAgICBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5mb3JFYWNoKChzaGVldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvdmVycmlkZXMuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZXJhdG9yKHNoZWV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGluamVjdFNoZWV0KHNoZWV0LCBvdmVycmlkZSkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTaGVldHMgPSBbLi4ubm9kZS5hZG9wdGVkU3R5bGVTaGVldHNdO1xyXG4gICAgICAgICAgICBjb25zdCBzaGVldEluZGV4ID0gbmV3U2hlZXRzLmluZGV4T2Yoc2hlZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBvdmVycmlkZUluZGV4ID0gbmV3U2hlZXRzLmluZGV4T2Yob3ZlcnJpZGUpO1xyXG4gICAgICAgICAgICBpZiAob3ZlcnJpZGVJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTaGVldHMuc3BsaWNlKG92ZXJyaWRlSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld1NoZWV0cy5zcGxpY2Uoc2hlZXRJbmRleCArIDEsIDAsIG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBuZXdTaGVldHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyKCkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTaGVldHMgPSBbLi4ubm9kZS5hZG9wdGVkU3R5bGVTaGVldHNdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbmV3U2hlZXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IG5ld1NoZWV0c1tpXTtcclxuICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZXMuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NoZWV0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmxlbmd0aCAhPT0gbmV3U2hlZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBuZXdTaGVldHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc291cmNlU2hlZXRzID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICAgICAgc291cmNlRGVjbGFyYXRpb25zID0gbmV3IFdlYWtTZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2xlYW5lcnMgPSBbXTtcclxuICAgICAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgICAgICAgICBjbGVhbmVycy5mb3JFYWNoKChjKSA9PiBjKCkpO1xyXG4gICAgICAgICAgICBjbGVhbmVycy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNsZWFyKCk7XHJcbiAgICAgICAgICAgIGlmIChmcmFtZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lSWQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBydWxlc0NoYW5nZUtleSA9IDA7XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0UnVsZXNDaGFuZ2VLZXkoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGl0ZXJhdGVTb3VyY2VTaGVldHMoKHNoZWV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb3VudCArPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBub2RlLmFkb3B0ZWRTdHlsZVNoZWV0c1swXS5jc3NSdWxlc1swXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlID8gcnVsZS5zdHlsZS5sZW5ndGggOiBjb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzb3VyY2VTaGVldHMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgICAgIGxldCBzb3VyY2VEZWNsYXJhdGlvbnMgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcih0aGVtZSwgaWdub3JlSW1hZ2VBbmFseXNpcykge1xyXG4gICAgICAgICAgICBjbGVhcigpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoZWV0ID0gbm9kZS5hZG9wdGVkU3R5bGVTaGVldHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNvdXJjZVNoZWV0cy5hZGQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZHlPdmVycmlkZSA9IG92ZXJyaWRlc0J5U291cmNlLmdldChzaGVldCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVhZHlPdmVycmlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzQ2hhbmdlS2V5ID0gZ2V0UnVsZXNDaGFuZ2VLZXkoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmplY3RTaGVldChzaGVldCwgcmVhZHlPdmVycmlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlcyA9IHNoZWV0LmNzc1J1bGVzO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnJpZGUgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzQnlTb3VyY2Uuc2V0KHNoZWV0LCBvdmVycmlkZSk7XHJcbiAgICAgICAgICAgICAgICBpdGVyYXRlQ1NTUnVsZXMocnVsZXMsIChydWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZURlY2xhcmF0aW9ucy5hZGQocnVsZS5zdHlsZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVwYXJlU2hlZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IG92ZXJyaWRlLmNzc1J1bGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlLmRlbGV0ZVJ1bGUoaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJyaWRlLmluc2VydFJ1bGUoXCIjX19kYXJrcmVhZGVyX19hZG9wdGVkT3ZlcnJpZGUge31cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5qZWN0U2hlZXQoc2hlZXQsIG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZXMuYWRkKG92ZXJyaWRlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3ZlcnJpZGU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXRNb2RpZmllciA9IGNyZWF0ZVN0eWxlU2hlZXRNb2RpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgc2hlZXRNb2RpZmllci5tb2RpZnlTaGVldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZVNoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUNTU1J1bGVzOiBydWxlcyxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVJbWFnZUFuYWx5c2lzLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0FzeW5jQ2FuY2VsbGVkOiAoKSA9PiBjYW5jZWxBc3luY09wZXJhdGlvbnNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJ1bGVzQ2hhbmdlS2V5ID0gZ2V0UnVsZXNDaGFuZ2VLZXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNhbGxiYWNrUmVxdWVzdGVkID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQXJyYXlDaGFuZ2UoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrUmVxdWVzdGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2tSZXF1ZXN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja1JlcXVlc3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hlZXRzID0gbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChzKSA9PiAhb3ZlcnJpZGVzLmhhcyhzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHNoZWV0cy5mb3JFYWNoKChzaGVldCkgPT4gb3ZlcnJpZGVzQnlTb3VyY2UuZGVsZXRlKHNoZWV0KSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzaGVldHMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UnVsZXNDaGFuZ2VLZXkoKSAhPT0gcnVsZXNDaGFuZ2VLZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmcmFtZUlkID0gbnVsbDtcclxuICAgICAgICBmdW5jdGlvbiB3YXRjaFVzaW5nUkFGKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhblVzZVNoZWV0UHJveHkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tGb3JVcGRhdGVzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBcnJheUNoYW5nZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3YXRjaFVzaW5nUkFGKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZFNoZWV0Q2hhbmdlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgICAgICAgICBjbGVhbmVycy5wdXNoKCgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjb25zdCBvbkFkb3B0ZWRTaGVldHNDaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYW5Vc2VTaGVldFByb3h5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUFycmF5Q2hhbmdlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYWRkU2hlZXRDaGFuZ2VFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZVNoZWV0c0NoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgb25BZG9wdGVkU2hlZXRzQ2hhbmdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGFkZFNoZWV0Q2hhbmdlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVTaGVldENoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgb25BZG9wdGVkU2hlZXRzQ2hhbmdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGFkZFNoZWV0Q2hhbmdlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19hZG9wdGVkU3R5bGVEZWNsYXJhdGlvbkNoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgb25BZG9wdGVkU2hlZXRzQ2hhbmdlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChjYW5Vc2VTaGVldFByb3h5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2F0Y2hVc2luZ1JBRihjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlbmRlcixcclxuICAgICAgICAgICAgZGVzdHJveSxcclxuICAgICAgICAgICAgd2F0Y2hcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2xhc3MgU3R5bGVTaGVldENvbW1hbmRCdWlsZGVyIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihvbkNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNzc1J1bGVzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnNlcnRSdWxlKGNzc1RleHQsIGluZGV4ID0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goe3R5cGU6IFwiaW5zZXJ0XCIsIGluZGV4LCBjc3NUZXh0fSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgbmV3IFN0eWxlU2hlZXRDb21tYW5kQnVpbGRlcih0aGlzLm9uQ2hhbmdlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlUnVsZShpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goe3R5cGU6IFwiZGVsZXRlXCIsIGluZGV4fSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXBsYWNlU3luYyhjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMuc3BsaWNlKDApO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goe3R5cGU6IFwicmVwbGFjZVwiLCBjc3NUZXh0fSk7XHJcbiAgICAgICAgICAgIGlmIChjc3NUZXh0ID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNzc1J1bGVzLnNwbGljZSgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgICAgICAgICAgICBcIlN0eWxlU2hlZXRDb21tYW5kQnVpbGRlci5yZXBsYWNlU3luYygpIGlzIG5vdCBmdWxseSBzdXBwb3J0ZWRcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldERlZXBDU1NDb21tYW5kcygpIHtcclxuICAgICAgICAgICAgY29uc3QgZGVlcCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLmZvckVhY2goKGNvbW1hbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlZXAucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogY29tbWFuZC50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc1RleHQ6IGNvbW1hbmQudHlwZSAhPT0gXCJkZWxldGVcIiA/IGNvbW1hbmQuY3NzVGV4dCA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogY29tbWFuZC50eXBlID09PSBcInJlcGxhY2VcIiA/IFtdIDogW2NvbW1hbmQuaW5kZXhdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMuZm9yRWFjaCgocnVsZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRDb21tYW5kcyA9IHJ1bGUuZ2V0RGVlcENTU0NvbW1hbmRzKCk7XHJcbiAgICAgICAgICAgICAgICBjaGlsZENvbW1hbmRzLmZvckVhY2goKGMpID0+IGMucGF0aC51bnNoaWZ0KGkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWVwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhckRlZXBDU1NDb21tYW5kcygpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tYW5kcy5zcGxpY2UoMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzUnVsZXMuZm9yRWFjaCgocnVsZSkgPT4gcnVsZS5jbGVhckRlZXBDU1NDb21tYW5kcygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBZG9wdGVkU3R5bGVTaGVldEZhbGxiYWNrKG9uQ2hhbmdlKSB7XHJcbiAgICAgICAgbGV0IGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBzb3VyY2VDU1NSdWxlcyA9IFtdO1xyXG4gICAgICAgIGxldCBsYXN0VGhlbWU7XHJcbiAgICAgICAgbGV0IGxhc3RJZ25vcmVJbWFnZUFuYWx5c2lzO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNTUyhjc3NSdWxlcykge1xyXG4gICAgICAgICAgICBzb3VyY2VDU1NSdWxlcyA9IGNzc1J1bGVzO1xyXG4gICAgICAgICAgICBpZiAobGFzdFRoZW1lICYmIGxhc3RJZ25vcmVJbWFnZUFuYWx5c2lzKSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXIobGFzdFRoZW1lLCBsYXN0SWdub3JlSW1hZ2VBbmFseXNpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnVpbGRlciA9IG5ldyBTdHlsZVNoZWV0Q29tbWFuZEJ1aWxkZXIob25DaGFuZ2UpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlcih0aGVtZSwgaWdub3JlSW1hZ2VBbmFseXNpcykge1xyXG4gICAgICAgICAgICBsYXN0VGhlbWUgPSB0aGVtZTtcclxuICAgICAgICAgICAgbGFzdElnbm9yZUltYWdlQW5hbHlzaXMgPSBpZ25vcmVJbWFnZUFuYWx5c2lzO1xyXG4gICAgICAgICAgICBjb25zdCBwcmVwYXJlU2hlZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLnJlcGxhY2VTeW5jKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHNoZWV0TW9kaWZpZXIgPSBjcmVhdGVTdHlsZVNoZWV0TW9kaWZpZXIoKTtcclxuICAgICAgICAgICAgc2hlZXRNb2RpZmllci5tb2RpZnlTaGVldCh7XHJcbiAgICAgICAgICAgICAgICBwcmVwYXJlU2hlZXQsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VDU1NSdWxlcyxcclxuICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgaWdub3JlSW1hZ2VBbmFseXNpcyxcclxuICAgICAgICAgICAgICAgIGZvcmNlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzQXN5bmNDYW5jZWxsZWQ6ICgpID0+IGNhbmNlbEFzeW5jT3BlcmF0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gY29tbWFuZHMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hbmRzID0gYnVpbGRlci5nZXREZWVwQ1NTQ29tbWFuZHMoKTtcclxuICAgICAgICAgICAgYnVpbGRlci5jbGVhckRlZXBDU1NDb21tYW5kcygpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tbWFuZHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEFzeW5jT3BlcmF0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7cmVuZGVyLCBkZXN0cm95LCB1cGRhdGVDU1MsIGNvbW1hbmRzfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbmplY3RQcm94eShcclxuICAgICAgICBlbmFibGVTdHlsZVNoZWV0c1Byb3h5LFxyXG4gICAgICAgIGVuYWJsZUN1c3RvbUVsZW1lbnRSZWdpc3RyeVByb3h5XHJcbiAgICApIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2lubGluZVNjcmlwdHNBbGxvd2VkXCIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjbGVhbmVycyA9IFtdO1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFuVXAoKSB7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLmZvckVhY2goKGNsZWFuKSA9PiBjbGVhbigpKTtcclxuICAgICAgICAgICAgY2xlYW5lcnMuc3BsaWNlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkb2N1bWVudEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIGNsZWFuZXJzLnB1c2goKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBkaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkaXNhYmxlV1BEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3c/LldQRGFya01vZGU/LmRlYWN0aXZhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuV1BEYXJrTW9kZS5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRpc2FibGVXUERhcmtNb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50RXZlbnRMaXN0ZW5lcihcIl9fZGFya3JlYWRlcl9fY2xlYW5VcFwiLCBjbGVhblVwKTtcclxuICAgICAgICBkb2N1bWVudEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiX19kYXJrcmVhZGVyX19kaXNhYmxlQ29uZmxpY3RpbmdQbHVnaW5zXCIsXHJcbiAgICAgICAgICAgIGRpc2FibGVDb25mbGljdGluZ1BsdWdpbnNcclxuICAgICAgICApO1xyXG4gICAgICAgIGZ1bmN0aW9uIG92ZXJyaWRlUHJvcGVydHkoY2xzLCBwcm9wLCBvdmVycmlkZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvdG8gPSBjbHMucHJvdG90eXBlO1xyXG4gICAgICAgICAgICBjb25zdCBvbGREZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgcHJvcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0b3IgPSBvbGREZXNjcmlwdG9yID8gey4uLm9sZERlc2NyaXB0b3J9IDoge307XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG92ZXJyaWRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gb3ZlcnJpZGVzW2tleV07XHJcbiAgICAgICAgICAgICAgICBuZXdEZXNjcmlwdG9yW2tleV0gPSBmYWN0b3J5KG9sZERlc2NyaXB0b3Jba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIHByb3AsIG5ld0Rlc2NyaXB0b3IpO1xyXG4gICAgICAgICAgICBjbGVhbmVycy5wdXNoKCgpID0+XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIHByb3AsIG9sZERlc2NyaXB0b3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIG92ZXJyaWRlKGNscywgcHJvcCwgZmFjdG9yeSkge1xyXG4gICAgICAgICAgICBvdmVycmlkZVByb3BlcnR5KGNscywgcHJvcCwge3ZhbHVlOiBmYWN0b3J5fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGlzRFJFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBpc0RSU2hlZXQoc2hlZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRFJFbGVtZW50KHNoZWV0Lm93bmVyTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVNoZWV0RXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX3VwZGF0ZVNoZWV0XCIpO1xyXG4gICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldENoYW5nZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRDaGFuZ2VcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYWRvcHRlZFNoZWV0T3duZXJzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICBjb25zdCBhZG9wdGVkRGVjbGFyYXRpb25TaGVldHMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uQWRvcHRlZFNoZWV0Q2hhbmdlKHNoZWV0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG93bmVycyA9IGFkb3B0ZWRTaGVldE93bmVycy5nZXQoc2hlZXQpO1xyXG4gICAgICAgICAgICBvd25lcnM/LmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KGFkb3B0ZWRTaGVldENoYW5nZUV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXJzLmRlbGV0ZShub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlcG9ydFNoZWV0Q2hhbmdlKHNoZWV0KSB7XHJcbiAgICAgICAgICAgIGlmIChzaGVldC5vd25lck5vZGUgJiYgIWlzRFJTaGVldChzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgIHNoZWV0Lm93bmVyTm9kZS5kaXNwYXRjaEV2ZW50KHVwZGF0ZVNoZWV0RXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhZG9wdGVkU2hlZXRPd25lcnMuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgb25BZG9wdGVkU2hlZXRDaGFuZ2Uoc2hlZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlcG9ydFNoZWV0Q2hhbmdlQXN5bmMoc2hlZXQsIHByb21pc2UpIHtcclxuICAgICAgICAgICAgY29uc3Qge293bmVyTm9kZX0gPSBzaGVldDtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgb3duZXJOb2RlICYmXHJcbiAgICAgICAgICAgICAgICAhaXNEUlNoZWV0KHNoZWV0KSAmJlxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZSAmJlxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2VcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4gb3duZXJOb2RlLmRpc3BhdGNoRXZlbnQodXBkYXRlU2hlZXRFdmVudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhZG9wdGVkU2hlZXRPd25lcnMuaGFzKHNoZWV0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UgJiYgcHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4gb25BZG9wdGVkU2hlZXRDaGFuZ2Uoc2hlZXQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvdmVycmlkZShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldCxcclxuICAgICAgICAgICAgXCJhZGRSdWxlXCIsXHJcbiAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoc2VsZWN0b3IsIHN0eWxlLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZS5jYWxsKHRoaXMsIHNlbGVjdG9yLCBzdHlsZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LFxyXG4gICAgICAgICAgICBcImluc2VydFJ1bGVcIixcclxuICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChydWxlLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gbmF0aXZlLmNhbGwodGhpcywgcnVsZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydFNoZWV0Q2hhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LFxyXG4gICAgICAgICAgICBcImRlbGV0ZVJ1bGVcIixcclxuICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZS5jYWxsKHRoaXMsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRTaGVldENoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LFxyXG4gICAgICAgICAgICBcInJlbW92ZVJ1bGVcIixcclxuICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZS5jYWxsKHRoaXMsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRTaGVldENoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICBDU1NTdHlsZVNoZWV0LFxyXG4gICAgICAgICAgICBcInJlcGxhY2VcIixcclxuICAgICAgICAgICAgKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0dXJuVmFsdWUgPSBuYXRpdmUuY2FsbCh0aGlzLCBjc3NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRTaGVldENoYW5nZUFzeW5jKHRoaXMsIHJldHVyblZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBvdmVycmlkZShcclxuICAgICAgICAgICAgQ1NTU3R5bGVTaGVldCxcclxuICAgICAgICAgICAgXCJyZXBsYWNlU3luY1wiLFxyXG4gICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGNzc1RleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXRpdmUuY2FsbCh0aGlzLCBjc3NUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXBvcnRTaGVldENoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHNob3VsZFdyYXBIVE1MRWxlbWVudCA9XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lID09PSBcImJhaWR1LmNvbVwiIHx8XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lLmVuZHNXaXRoKFwiLmJhaWR1LmNvbVwiKTtcclxuICAgICAgICBpZiAoc2hvdWxkV3JhcEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIG92ZXJyaWRlKFxyXG4gICAgICAgICAgICAgICAgRWxlbWVudCxcclxuICAgICAgICAgICAgICAgIFwiZ2V0RWxlbWVudHNCeVRhZ05hbWVcIixcclxuICAgICAgICAgICAgICAgIChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHRhZ05hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ05hbWUgIT09IFwic3R5bGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZS5jYWxsKHRoaXMsIHRhZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldEN1cnJlbnRFbGVtZW50VmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IG5hdGl2ZS5jYWxsKHRoaXMsIHRhZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbLi4uZWxlbWVudHNdLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVsZW1lbnQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ICYmICFpc0RSRWxlbWVudChlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9kZUxpc3QucHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudHMgPSBnZXRDdXJyZW50RWxlbWVudFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVMaXN0QmVoYXZpb3IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChfLCBwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50RWxlbWVudFZhbHVlKClbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihwcm9wZXJ0eSkgfHwgcHJvcGVydHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cyA9IG5ldyBQcm94eShlbGVtZW50cywgbm9kZUxpc3RCZWhhdmlvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNob3VsZFByb3h5Q2hpbGROb2RlcyA9IFtcImJyaWxsaWFudC5vcmdcIiwgXCJ3d3cudnkubm9cIl0uaW5jbHVkZXMoXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhvc3RuYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoc2hvdWxkUHJveHlDaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIG92ZXJyaWRlUHJvcGVydHkoTm9kZSwgXCJjaGlsZE5vZGVzXCIsIHtcclxuICAgICAgICAgICAgICAgIGdldDogKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBuYXRpdmUuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsuLi5jaGlsZE5vZGVzXS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlzRFJFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb2RlTGlzdC5wcm90b3R5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlQ3VzdG9tRWxlbWVudCh0YWcpIHtcclxuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQodGFnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19pc0RlZmluZWRcIiwge2RldGFpbDoge3RhZ319KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50RXZlbnRMaXN0ZW5lcihcIl9fZGFya3JlYWRlcl9fYWRkVW5kZWZpbmVkUmVzb2x2ZXJcIiwgKGUpID0+XHJcbiAgICAgICAgICAgIHJlc29sdmVDdXN0b21FbGVtZW50KGUuZGV0YWlsLnRhZylcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChlbmFibGVDdXN0b21FbGVtZW50UmVnaXN0cnlQcm94eSkge1xyXG4gICAgICAgICAgICBvdmVycmlkZShcclxuICAgICAgICAgICAgICAgIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSxcclxuICAgICAgICAgICAgICAgIFwiZGVmaW5lXCIsXHJcbiAgICAgICAgICAgICAgICAobmF0aXZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChuYW1lLCBjb25zdHJ1Y3Rvciwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlQ3VzdG9tRWxlbWVudChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlLmNhbGwodGhpcywgbmFtZSwgY29uc3RydWN0b3IsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tCbG9iVVJMU3VwcG9ydCgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ZnID1cclxuICAgICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCI+PHJlY3Qgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIGZpbGw9XCJ0cmFuc3BhcmVudFwiLz48L3N2Zz4nO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KHN2Zy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN2Zy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYnl0ZXNbaV0gPSBzdmcuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2J5dGVzXSwge3R5cGU6IFwiaW1hZ2Uvc3ZnK3htbFwifSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdFVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIGxldCBibG9iVVJMQWxsb3dlZDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBvYmplY3RVUkw7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJsb2JVUkxBbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBibG9iVVJMQWxsb3dlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX2Jsb2JVUkxDaGVja1Jlc3BvbnNlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IHtibG9iVVJMQWxsb3dlZH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50RXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Jsb2JVUkxDaGVja1JlcXVlc3RcIixcclxuICAgICAgICAgICAgY2hlY2tCbG9iVVJMU3VwcG9ydCxcclxuICAgICAgICAgICAge29uY2U6IHRydWV9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZW5hYmxlU3R5bGVTaGVldHNQcm94eSkge1xyXG4gICAgICAgICAgICBvdmVycmlkZVByb3BlcnR5KERvY3VtZW50LCBcInN0eWxlU2hlZXRzXCIsIHtcclxuICAgICAgICAgICAgICAgIGdldDogKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldEN1cnJlbnRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY1NoZWV0cyA9IG5hdGl2ZS5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRTaGVldHMgPSBbLi4uZG9jU2hlZXRzXS5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0eWxlU2hlZXQpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQub3duZXJOb2RlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0RSU2hlZXQoc3R5bGVTaGVldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFNoZWV0cy5pdGVtID0gKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRTaGVldHNbaXRlbV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkU2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0eWxlU2hlZXRMaXN0LnByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRzID0gZ2V0Q3VycmVudFZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlU2hlZXRMaXN0QmVoYXZpb3IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChfLCBwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRDdXJyZW50VmFsdWUoKVtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gbmV3IFByb3h5KGVsZW1lbnRzLCBzdHlsZVNoZWV0TGlzdEJlaGF2aW9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgYWRvcHRlZFNoZWV0c1NvdXJjZVByb3hpZXMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgICAgICAgICBjb25zdCBhZG9wdGVkU2hlZXRzUHJveHlTb3VyY2VzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICAgICAgY29uc3QgYWRvcHRlZFNoZWV0c0NoYW5nZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZVNoZWV0c0NoYW5nZVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkb3B0ZWRTaGVldE92ZXJyaWRlQ2FjaGUgPSBuZXcgV2Vha1NldCgpO1xyXG4gICAgICAgICAgICBjb25zdCBhZG9wdGVkU2hlZXRzU25hcHNob3RzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgICAgICAgICAgY29uc3QgaXNEUkFkb3B0ZWRTaGVldE92ZXJyaWRlID0gKHNoZWV0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNoZWV0IHx8ICFzaGVldC5jc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhZG9wdGVkU2hlZXRPdmVycmlkZUNhY2hlLmhhcyhzaGVldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzaGVldC5jc3NSdWxlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXQuY3NzUnVsZXNbMF0uY3NzVGV4dC5zdGFydHNXaXRoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiNfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRPdmVycmlkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRvcHRlZFNoZWV0T3ZlcnJpZGVDYWNoZS5hZGQoc2hlZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBhcmVBcnJheXNFcXVhbCA9IChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuZXZlcnkoKHgsIGkpID0+IHggPT09IGJbaV0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBvbkFkb3B0ZWRTaGVldHNDaGFuZ2UgPSAobm9kZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IGFkb3B0ZWRTaGVldHNTbmFwc2hvdHMuZ2V0KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyciA9IChub2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyB8fCBbXSkuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIChzKSA9PiAhaXNEUkFkb3B0ZWRTaGVldE92ZXJyaWRlKHMpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYWRvcHRlZFNoZWV0c1NuYXBzaG90cy5zZXQobm9kZSwgY3Vycik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByZXYgfHwgIWFyZUFycmF5c0VxdWFsKHByZXYsIGN1cnIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyci5mb3JFYWNoKChzaGVldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFkb3B0ZWRTaGVldE93bmVycy5oYXMoc2hlZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU2hlZXRPd25lcnMuc2V0KHNoZWV0LCBuZXcgU2V0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkb3B0ZWRTaGVldE93bmVycy5nZXQoc2hlZXQpLmFkZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIHNoZWV0LmNzc1J1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHJ1bGUuc3R5bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVjbGFyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZG9wdGVkRGVjbGFyYXRpb25TaGVldHMuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hlZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KGFkb3B0ZWRTaGVldHNDaGFuZ2VFdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3h5QWRvcHRlZFNoZWV0c0FycmF5ID0gKG5vZGUsIHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkb3B0ZWRTaGVldHNQcm94eVNvdXJjZXMuaGFzKHNvdXJjZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFkb3B0ZWRTaGVldHNTb3VyY2VQcm94aWVzLmhhcyhzb3VyY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkb3B0ZWRTaGVldHNTb3VyY2VQcm94aWVzLmdldChzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkoc291cmNlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwibGVuZ3RoXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRvcHRlZFNoZWV0c0NoYW5nZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGFkb3B0ZWRTaGVldHNTb3VyY2VQcm94aWVzLnNldChzb3VyY2UsIHByb3h5KTtcclxuICAgICAgICAgICAgICAgIGFkb3B0ZWRTaGVldHNQcm94eVNvdXJjZXMuc2V0KHByb3h5LCBzb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBbRG9jdW1lbnQsIFNoYWRvd1Jvb3RdLmZvckVhY2goKGN0b3IpID0+IHtcclxuICAgICAgICAgICAgICAgIG92ZXJyaWRlUHJvcGVydHkoY3RvciwgXCJhZG9wdGVkU3R5bGVTaGVldHNcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldDogKG5hdGl2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc291cmNlID0gbmF0aXZlLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJveHlBZG9wdGVkU2hlZXRzQXJyYXkodGhpcywgc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZXQ6IChuYXRpdmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZG9wdGVkU2hlZXRzUHJveHlTb3VyY2VzLmhhcyhzb3VyY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlID0gYWRvcHRlZFNoZWV0c1Byb3h5U291cmNlcy5nZXQoc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZS5jYWxsKHRoaXMsIHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFkb3B0ZWRTaGVldHNDaGFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgYWRvcHRlZERlY2xhcmF0aW9uQ2hhbmdlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlRGVjbGFyYXRpb25DaGFuZ2VcIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBbXCJzZXRQcm9wZXJ0eVwiLCBcInJlbW92ZVByb3BlcnR5XCJdLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGUoQ1NTU3R5bGVEZWNsYXJhdGlvbiwga2V5LCAobmF0aXZlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldHVyblZhbHVlID0gbmF0aXZlLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGVldCA9IGFkb3B0ZWREZWNsYXJhdGlvblNoZWV0cy5nZXQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGVldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3duZXJzID0gYWRvcHRlZFNoZWV0T3duZXJzLmdldChzaGVldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3duZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJzLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRvcHRlZERlY2xhcmF0aW9uQ2hhbmdlRXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyID0gbnVsbDtcclxuICAgIGxldCBkb2N1bWVudElzVmlzaWJsZV8gPSAhZG9jdW1lbnQuaGlkZGVuO1xyXG4gICAgY29uc3QgbGlzdGVuZXJPcHRpb25zID0ge1xyXG4gICAgICAgIGNhcHR1cmU6IHRydWUsXHJcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yRG9jdW1lbnRWaXNpYmlsaXR5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwidmlzaWJpbGl0eWNoYW5nZVwiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJwYWdlc2hvd1wiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgXCJmb2N1c1wiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcixcclxuICAgICAgICAgICAgbGlzdGVuZXJPcHRpb25zXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0b3BXYXRjaGluZ0ZvckRvY3VtZW50VmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICBcInZpc2liaWxpdHljaGFuZ2VcIixcclxuICAgICAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwicGFnZXNob3dcIixcclxuICAgICAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFwiZm9jdXNcIixcclxuICAgICAgICAgICAgZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVyT3B0aW9uc1xyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXREb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcihjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGFscmVhZHlXYXRjaGluZyA9IEJvb2xlYW4oZG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIpO1xyXG4gICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRG9jdW1lbnRWaXNpYmlsaXR5TGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudElzVmlzaWJsZV8gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoIWFscmVhZHlXYXRjaGluZykge1xyXG4gICAgICAgICAgICB3YXRjaEZvckRvY3VtZW50VmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyKCkge1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvckRvY3VtZW50VmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIGRvY3VtZW50VmlzaWJpbGl0eUxpc3RlbmVyID0gbnVsbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRvY3VtZW50SXNWaXNpYmxlKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudElzVmlzaWJsZV87XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgSU5TVEFOQ0VfSUQgPSBnZW5lcmF0ZVVJRCgpO1xyXG4gICAgY29uc3Qgc3R5bGVNYW5hZ2VycyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IGFkb3B0ZWRTdHlsZU1hbmFnZXJzID0gW107XHJcbiAgICBjb25zdCBhZG9wdGVkU3R5bGVGYWxsYmFja3MgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBhZG9wdGVkU3R5bGVOb2RlSWRzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIGNvbnN0IGFkb3B0ZWRTdHlsZUNoYW5nZVRva2VucyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICBsZXQgdGhlbWUgPSBudWxsO1xyXG4gICAgbGV0IGZpeGVzID0gbnVsbDtcclxuICAgIGxldCBpc0lGcmFtZSQxID0gbnVsbDtcclxuICAgIGxldCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyA9IFtdO1xyXG4gICAgbGV0IGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU9yVXBkYXRlU3R5bGUoY2xhc3NOYW1lLCByb290ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudCkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gcm9vdC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtyZWFkZXJcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm1lZGlhID0gXCJzY3JlZW5cIjtcclxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlT3JVcGRhdGVTY3JpcHQoY2xhc3NOYW1lLCByb290ID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudCkge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gcm9vdC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrcmVhZGVyXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBub2RlUG9zaXRpb25XYXRjaGVycyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihub2RlLCBhbGlhcykge1xyXG4gICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLmhhcyhhbGlhcykgJiZcclxuICAgICAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuZ2V0KGFsaWFzKS5zdG9wKCk7XHJcbiAgICAgICAgbm9kZVBvc2l0aW9uV2F0Y2hlcnMuc2V0KGFsaWFzLCB3YXRjaEZvck5vZGVQb3NpdGlvbihub2RlLCBcImhlYWRcIikpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RvcFN0eWxlUG9zaXRpb25XYXRjaGVycygpIHtcclxuICAgICAgICBmb3JFYWNoKG5vZGVQb3NpdGlvbldhdGNoZXJzLnZhbHVlcygpLCAod2F0Y2hlcikgPT4gd2F0Y2hlci5zdG9wKCkpO1xyXG4gICAgICAgIG5vZGVQb3NpdGlvbldhdGNoZXJzLmNsZWFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdGF0aWNTdHlsZU92ZXJyaWRlcygpIHtcclxuICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcclxuICAgICAgICAgICAgXCJkYXJrcmVhZGVyLS1mYWxsYmFja1wiLFxyXG4gICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCA9IGdldE1vZGlmaWVkRmFsbGJhY2tTdHlsZSh0aGVtZSwge1xyXG4gICAgICAgICAgICBzdHJpY3Q6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShmYWxsYmFja1N0eWxlLCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcihmYWxsYmFja1N0eWxlLCBcImZhbGxiYWNrXCIpO1xyXG4gICAgICAgIGNvbnN0IHVzZXJBZ2VudFN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXVzZXItYWdlbnRcIik7XHJcbiAgICAgICAgdXNlckFnZW50U3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZFVzZXJBZ2VudFN0eWxlKFxyXG4gICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgaXNJRnJhbWUkMSxcclxuICAgICAgICAgICAgdGhlbWUuc3R5bGVTeXN0ZW1Db250cm9sc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUodXNlckFnZW50U3R5bGUsIGZhbGxiYWNrU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIHNldHVwTm9kZVBvc2l0aW9uV2F0Y2hlcih1c2VyQWdlbnRTdHlsZSwgXCJ1c2VyLWFnZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS10ZXh0XCIpO1xyXG4gICAgICAgIGlmICh0aGVtZS51c2VGb250IHx8IHRoZW1lLnRleHRTdHJva2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHRleHRTdHlsZS50ZXh0Q29udGVudCA9IGNyZWF0ZVRleHRTdHlsZSh0aGVtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dFN0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUodGV4dFN0eWxlLCBmYWxsYmFja1N0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIodGV4dFN0eWxlLCBcInRleHRcIik7XHJcbiAgICAgICAgY29uc3QgaW52ZXJ0U3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0taW52ZXJ0XCIpO1xyXG4gICAgICAgIGlmIChmaXhlcyAmJiBBcnJheS5pc0FycmF5KGZpeGVzLmludmVydCkgJiYgZml4ZXMuaW52ZXJ0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBbXHJcbiAgICAgICAgICAgICAgICBgJHtmaXhlcy5pbnZlcnQuam9pbihcIiwgXCIpfSB7YCxcclxuICAgICAgICAgICAgICAgIGAgICAgZmlsdGVyOiAke2dldENTU0ZpbHRlclZhbHVlKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb250cmFzdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUubW9kZSA9PT0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGVtZS5jb250cmFzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjbGFtcCh0aGVtZS5jb250cmFzdCAtIDEwLCAwLCAxMDApXHJcbiAgICAgICAgICAgICAgICB9KX0gIWltcG9ydGFudDtgLFxyXG4gICAgICAgICAgICAgICAgXCJ9XCJcclxuICAgICAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludmVydFN0eWxlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoaW52ZXJ0U3R5bGUsIHRleHRTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKGludmVydFN0eWxlLCBcImludmVydFwiKTtcclxuICAgICAgICBjb25zdCBpbmxpbmVTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1pbmxpbmVcIik7XHJcbiAgICAgICAgaW5saW5lU3R5bGUudGV4dENvbnRlbnQgPSBnZXRJbmxpbmVPdmVycmlkZVN0eWxlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoaW5saW5lU3R5bGUsIGludmVydFN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIoaW5saW5lU3R5bGUsIFwiaW5saW5lXCIpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJyaWRlU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tb3ZlcnJpZGVcIik7XHJcbiAgICAgICAgb3ZlcnJpZGVTdHlsZS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIGZpeGVzICYmIGZpeGVzLmNzcyA/IHJlcGxhY2VDU1NUZW1wbGF0ZXMoZml4ZXMuY3NzKSA6IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChvdmVycmlkZVN0eWxlKTtcclxuICAgICAgICBzZXR1cE5vZGVQb3NpdGlvbldhdGNoZXIob3ZlcnJpZGVTdHlsZSwgXCJvdmVycmlkZVwiKTtcclxuICAgICAgICBjb25zdCB2YXJpYWJsZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXZhcmlhYmxlc1wiKTtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25Db2xvcnMgPSB0aGVtZT8uc2VsZWN0aW9uQ29sb3JcclxuICAgICAgICAgICAgPyBnZXRTZWxlY3Rpb25Db2xvcih0aGVtZSlcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IG5ldXRyYWxCYWNrZ3JvdW5kQ29sb3IgPSBtb2RpZnlCYWNrZ3JvdW5kQ29sb3IoXHJcbiAgICAgICAgICAgIHBhcnNlQ29sb3JXaXRoQ2FjaGUoXCIjZmZmZmZmXCIpLFxyXG4gICAgICAgICAgICB0aGVtZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbmV1dHJhbFRleHRDb2xvciA9IG1vZGlmeUZvcmVncm91bmRDb2xvcihcclxuICAgICAgICAgICAgcGFyc2VDb2xvcldpdGhDYWNoZShcIiMwMDAwMDBcIiksXHJcbiAgICAgICAgICAgIHRoZW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICB2YXJpYWJsZVN0eWxlLnRleHRDb250ZW50ID0gW1xyXG4gICAgICAgICAgICBgOnJvb3Qge2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItbmV1dHJhbC1iYWNrZ3JvdW5kOiAke25ldXRyYWxCYWNrZ3JvdW5kQ29sb3J9O2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItbmV1dHJhbC10ZXh0OiAke25ldXRyYWxUZXh0Q29sb3J9O2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItc2VsZWN0aW9uLWJhY2tncm91bmQ6ICR7c2VsZWN0aW9uQ29sb3JzPy5iYWNrZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPz8gXCJpbml0aWFsXCJ9O2AsXHJcbiAgICAgICAgICAgIGAgICAtLWRhcmtyZWFkZXItc2VsZWN0aW9uLXRleHQ6ICR7c2VsZWN0aW9uQ29sb3JzPy5mb3JlZ3JvdW5kQ29sb3JTZWxlY3Rpb24gPz8gXCJpbml0aWFsXCJ9O2AsXHJcbiAgICAgICAgICAgIGB9YFxyXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSh2YXJpYWJsZVN0eWxlLCBpbmxpbmVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2V0dXBOb2RlUG9zaXRpb25XYXRjaGVyKHZhcmlhYmxlU3R5bGUsIFwidmFyaWFibGVzXCIpO1xyXG4gICAgICAgIGNvbnN0IHJvb3RWYXJzU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tcm9vdC12YXJzXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKHJvb3RWYXJzU3R5bGUsIHZhcmlhYmxlU3R5bGUubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIGNvbnN0IGVuYWJsZVN0eWxlU2hlZXRzUHJveHkgPSAhKFxyXG4gICAgICAgICAgICBmaXhlcyAmJiBmaXhlcy5kaXNhYmxlU3R5bGVTaGVldHNQcm94eVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZW5hYmxlQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5UHJveHkgPSAhKFxyXG4gICAgICAgICAgICBmaXhlcyAmJiBmaXhlcy5kaXNhYmxlQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5UHJveHlcclxuICAgICAgICApO1xyXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiX19kYXJrcmVhZGVyX19jbGVhblVwXCIpKTtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3h5U2NyaXB0ID0gY3JlYXRlT3JVcGRhdGVTY3JpcHQoXCJkYXJrcmVhZGVyLS1wcm94eVwiKTtcclxuICAgICAgICAgICAgcHJveHlTY3JpcHQuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgYCgke2luamVjdFByb3h5fSkoJHtlbmFibGVTdHlsZVNoZWV0c1Byb3h5fSwgJHtlbmFibGVDdXN0b21FbGVtZW50UmVnaXN0cnlQcm94eX0pYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShwcm94eVNjcmlwdCwgcm9vdFZhcnNTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgIHByb3h5U2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNoYWRvd1Jvb3RzV2l0aE92ZXJyaWRlcyA9IG5ldyBTZXQoKTtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzSW5uZXIocm9vdCkge1xyXG4gICAgICAgIGNvbnN0IGlubGluZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLWlubGluZVwiLCByb290KTtcclxuICAgICAgICBpbmxpbmVTdHlsZS50ZXh0Q29udGVudCA9IGdldElubGluZU92ZXJyaWRlU3R5bGUoKTtcclxuICAgICAgICByb290Lmluc2VydEJlZm9yZShpbmxpbmVTdHlsZSwgcm9vdC5maXJzdENoaWxkKTtcclxuICAgICAgICBjb25zdCBvdmVycmlkZVN0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLW92ZXJyaWRlXCIsIHJvb3QpO1xyXG4gICAgICAgIG92ZXJyaWRlU3R5bGUudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBmaXhlcyAmJiBmaXhlcy5jc3MgPyByZXBsYWNlQ1NTVGVtcGxhdGVzKGZpeGVzLmNzcykgOiBcIlwiO1xyXG4gICAgICAgIHJvb3QuaW5zZXJ0QmVmb3JlKG92ZXJyaWRlU3R5bGUsIGlubGluZVN0eWxlLm5leHRTaWJsaW5nKTtcclxuICAgICAgICBjb25zdCBpbnZlcnRTdHlsZSA9IGNyZWF0ZU9yVXBkYXRlU3R5bGUoXCJkYXJrcmVhZGVyLS1pbnZlcnRcIiwgcm9vdCk7XHJcbiAgICAgICAgaWYgKGZpeGVzICYmIEFycmF5LmlzQXJyYXkoZml4ZXMuaW52ZXJ0KSAmJiBmaXhlcy5pbnZlcnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpbnZlcnRTdHlsZS50ZXh0Q29udGVudCA9IFtcclxuICAgICAgICAgICAgICAgIGAke2ZpeGVzLmludmVydC5qb2luKFwiLCBcIil9IHtgLFxyXG4gICAgICAgICAgICAgICAgYCAgICBmaWx0ZXI6ICR7Z2V0Q1NTRmlsdGVyVmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZS5tb2RlID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoZW1lLmNvbnRyYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsYW1wKHRoZW1lLmNvbnRyYXN0IC0gMTAsIDAsIDEwMClcclxuICAgICAgICAgICAgICAgIH0pfSAhaW1wb3J0YW50O2AsXHJcbiAgICAgICAgICAgICAgICBcIn1cIlxyXG4gICAgICAgICAgICBdLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW52ZXJ0U3R5bGUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb290Lmluc2VydEJlZm9yZShpbnZlcnRTdHlsZSwgb3ZlcnJpZGVTdHlsZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzLmFkZChyb290KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGF5ZWRDcmVhdGVTaGFkb3dTdGF0aWNTdHlsZU92ZXJyaWRlcyhyb290KSB7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qge3R5cGUsIHJlbW92ZWROb2Rlc30gb2YgbXV0YXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJjaGlsZExpc3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qge25vZGVOYW1lLCBjbGFzc05hbWV9IG9mIHJlbW92ZWROb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlTmFtZSA9PT0gXCJTVFlMRVwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrcmVhZGVyIGRhcmtyZWFkZXItLWlubGluZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFya3JlYWRlciBkYXJrcmVhZGVyLS1vdmVycmlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFya3JlYWRlciBkYXJrcmVhZGVyLS1pbnZlcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5pbmNsdWRlcyhjbGFzc05hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXNJbm5lcihyb290KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUocm9vdCwge2NoaWxkTGlzdDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMocm9vdCkge1xyXG4gICAgICAgIGNvbnN0IGRlbGF5ZWQgPSByb290LmZpcnN0Q2hpbGQgPT09IG51bGw7XHJcbiAgICAgICAgY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXNJbm5lcihyb290KTtcclxuICAgICAgICBpZiAoZGVsYXllZCkge1xyXG4gICAgICAgICAgICBkZWxheWVkQ3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMocm9vdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVwbGFjZUNTU1RlbXBsYXRlcygkY3NzVGV4dCkge1xyXG4gICAgICAgIHJldHVybiAkY3NzVGV4dC5yZXBsYWNlKC9cXCR7KC4rPyl9L2csIChfLCAkY29sb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBwYXJzZUNvbG9yV2l0aENhY2hlKCRjb2xvcik7XHJcbiAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlnaHRuZXNzID0gZ2V0U1JHQkxpZ2h0bmVzcyhjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iKTtcclxuICAgICAgICAgICAgICAgIGlmIChsaWdodG5lc3MgPiAwLjUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5QmFja2dyb3VuZENvbG9yKGNvbG9yLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kaWZ5Rm9yZWdyb3VuZENvbG9yKGNvbG9yLCB0aGVtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICRjb2xvcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFuRmFsbGJhY2tTdHlsZSgpIHtcclxuICAgICAgICBjb25zdCBmYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIik7XHJcbiAgICAgICAgaWYgKGZhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGZhbGxiYWNrLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEeW5hbWljU3R5bGVPdmVycmlkZXMoKSB7XHJcbiAgICAgICAgY2FuY2VsUmVuZGVyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgYWxsU3R5bGVzID0gZ2V0TWFuYWdlYWJsZVN0eWxlcyhkb2N1bWVudCk7XHJcbiAgICAgICAgY29uc3QgbmV3TWFuYWdlcnMgPSBhbGxTdHlsZXNcclxuICAgICAgICAgICAgLmZpbHRlcigoc3R5bGUpID0+ICFzdHlsZU1hbmFnZXJzLmhhcyhzdHlsZSkpXHJcbiAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiBjcmVhdGVNYW5hZ2VyKHN0eWxlKSk7XHJcbiAgICAgICAgbmV3TWFuYWdlcnNcclxuICAgICAgICAgICAgLm1hcCgobWFuYWdlcikgPT4gbWFuYWdlci5kZXRhaWxzKHtzZWNvbmRSb3VuZDogZmFsc2V9KSlcclxuICAgICAgICAgICAgLmZpbHRlcigoZGV0YWlsKSA9PiBkZXRhaWwgJiYgZGV0YWlsLnJ1bGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChkZXRhaWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoZGV0YWlsLnJ1bGVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgdmFyaWFibGVzU3RvcmUuc2V0T25Sb290VmFyaWFibGVDaGFuZ2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByb290VmFyc1N0eWxlID0gY3JlYXRlT3JVcGRhdGVTdHlsZShcImRhcmtyZWFkZXItLXJvb3QtdmFyc1wiKTtcclxuICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUucHV0Um9vdFZhcnMocm9vdFZhcnNTdHlsZSwgdGhlbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJvb3RWYXJzU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFwiZGFya3JlYWRlci0tcm9vdC12YXJzXCIpO1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLnB1dFJvb3RWYXJzKHJvb3RWYXJzU3R5bGUsIHRoZW1lKTtcclxuICAgICAgICBzdHlsZU1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+XHJcbiAgICAgICAgICAgIG1hbmFnZXIucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycylcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChsb2FkaW5nU3R5bGVzLnNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgY2xlYW5GYWxsYmFja1N0eWxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld01hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG1hbmFnZXIud2F0Y2goKSk7XHJcbiAgICAgICAgY29uc3QgaW5saW5lU3R5bGVFbGVtZW50cyA9IHRvQXJyYXkoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoSU5MSU5FX1NUWUxFX1NFTEVDVE9SKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaXRlcmF0ZVNoYWRvd0hvc3RzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgKGhvc3QpID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMoaG9zdC5zaGFkb3dSb290KTtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBob3N0LnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgIElOTElORV9TVFlMRV9TRUxFQ1RPUlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcHVzaChpbmxpbmVTdHlsZUVsZW1lbnRzLCBlbGVtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpbmxpbmVTdHlsZUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PlxyXG4gICAgICAgICAgICBvdmVycmlkZUlubGluZVN0eWxlKFxyXG4gICAgICAgICAgICAgICAgZWwsXHJcbiAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMsXHJcbiAgICAgICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9yc1xyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgICBoYW5kbGVBZG9wdGVkU3R5bGVTaGVldHMoZG9jdW1lbnQpO1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgIGlmIChpc0ZpcmVmb3gpIHtcclxuICAgICAgICAgICAgY29uc3QgTUFUQ0hfVkFSID0gU3ltYm9sKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9uQWRvcHRlZENTU0NoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7bm9kZSwgaWQsIGNzc1J1bGVzLCBlbnRyaWVzfSA9IGUuZGV0YWlsO1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZW50cmllcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3NzUnVsZXMgPSBlWzJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGNzc1J1bGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3NzUnVsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGNzc1J1bGVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVPbmNlKE1BVENIX1ZBUiwgKCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdHVwbGVzID0gQXJyYXkuaXNBcnJheShlbnRyaWVzKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZW50cmllc1xyXG4gICAgICAgICAgICAgICAgICAgIDogbm9kZSAmJiBjc3NSdWxlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPyBbW25vZGUsIGlkLCBjc3NSdWxlc11dXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFtdO1xyXG4gICAgICAgICAgICAgICAgdHVwbGVzLmZvckVhY2goKFtub2RlLCBpZCwgY3NzUnVsZXNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRvcHRlZFN0eWxlTm9kZUlkcy5zZXQobm9kZSwgaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrID0gZ2V0QWRvcHRlZFN0eWxlU2hlZXRGYWxsYmFjayhub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBmYWxsYmFjay51cGRhdGVDU1MoY3NzUnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRzQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICBvbkFkb3B0ZWRDU1NDaGFuZ2VcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY2xlYW5lcnMucHVzaCgoKSA9PlxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgICAgICBcIl9fZGFya3JlYWRlcl9fYWRvcHRlZFN0eWxlU2hlZXRzQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb25BZG9wdGVkQ1NTQ2hhbmdlXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXHJcbiAgICAgICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJfX2RhcmtyZWFkZXJfX3N0YXJ0QWRvcHRlZFN0eWxlU2hlZXRzV2F0Y2hlclwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBsb2FkaW5nU3R5bGVzQ291bnRlciA9IDA7XHJcbiAgICBjb25zdCBsb2FkaW5nU3R5bGVzID0gbmV3IFNldCgpO1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFuYWdlcihlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGluZ1N0eWxlSWQgPSArK2xvYWRpbmdTdHlsZXNDb3VudGVyO1xyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRpbmdTdGFydCgpIHtcclxuICAgICAgICAgICAgaWYgKCFpc0RPTVJlYWR5KCkgfHwgIWRvY3VtZW50SXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdTdHlsZXMuYWRkKGxvYWRpbmdTdHlsZUlkKTtcclxuICAgICAgICAgICAgICAgIGxvZ0luZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgYEN1cnJlbnQgYW1vdW50IG9mIHN0eWxlcyBsb2FkaW5nOiAke2xvYWRpbmdTdHlsZXMuc2l6ZX1gXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmICghZmFsbGJhY2tTdHlsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyaWN0OiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRpbmdFbmQoKSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmdTdHlsZXMuZGVsZXRlKGxvYWRpbmdTdHlsZUlkKTtcclxuICAgICAgICAgICAgbG9nSW5mbyhcclxuICAgICAgICAgICAgICAgIGBSZW1vdmVkIGxvYWRpbmdTdHlsZSAke2xvYWRpbmdTdHlsZUlkfSwgbm93IGF3YWl0aW5nOiAke2xvYWRpbmdTdHlsZXMuc2l6ZX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChsb2FkaW5nU3R5bGVzLnNpemUgPT09IDAgJiYgaXNET01SZWFkeSgpKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhbkZhbGxiYWNrU3R5bGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBtYW5hZ2VyLmRldGFpbHMoe3NlY29uZFJvdW5kOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIGlmICghZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLmFkZFJ1bGVzRm9yTWF0Y2hpbmcoZGV0YWlscy5ydWxlcyk7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlc1N0b3JlLm1hdGNoVmFyaWFibGVzQW5kRGVwZW5kZW50cygpO1xyXG4gICAgICAgICAgICBtYW5hZ2VyLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtYW5hZ2VyID0gbWFuYWdlU3R5bGUoZWxlbWVudCwge1xyXG4gICAgICAgICAgICB1cGRhdGUsXHJcbiAgICAgICAgICAgIGxvYWRpbmdTdGFydCxcclxuICAgICAgICAgICAgbG9hZGluZ0VuZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0eWxlTWFuYWdlcnMuc2V0KGVsZW1lbnQsIG1hbmFnZXIpO1xyXG4gICAgICAgIHJldHVybiBtYW5hZ2VyO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFuYWdlcihlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgbWFuYWdlciA9IHN0eWxlTWFuYWdlcnMuZ2V0KGVsZW1lbnQpO1xyXG4gICAgICAgIGlmIChtYW5hZ2VyKSB7XHJcbiAgICAgICAgICAgIG1hbmFnZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBzdHlsZU1hbmFnZXJzLmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aHJvdHRsZWRSZW5kZXJBbGxTdHlsZXMgPSB0aHJvdHRsZSgoY2FsbGJhY2spID0+IHtcclxuICAgICAgICBzdHlsZU1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+XHJcbiAgICAgICAgICAgIG1hbmFnZXIucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycylcclxuICAgICAgICApO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+XHJcbiAgICAgICAgICAgIG1hbmFnZXIucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycylcclxuICAgICAgICApO1xyXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNhbmNlbFJlbmRlcmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aHJvdHRsZWRSZW5kZXJBbGxTdHlsZXMuY2FuY2VsKCk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gb25ET01SZWFkeSgpIHtcclxuICAgICAgICBpZiAobG9hZGluZ1N0eWxlcy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFuRmFsbGJhY2tTdHlsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcnVuRHluYW1pY1N0eWxlKCkge1xyXG4gICAgICAgIGNyZWF0ZUR5bmFtaWNTdHlsZU92ZXJyaWRlcygpO1xyXG4gICAgICAgIHdhdGNoRm9yVXBkYXRlcygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGhlbWVBbmRXYXRjaEZvclVwZGF0ZXMoKSB7XHJcbiAgICAgICAgY3JlYXRlU3RhdGljU3R5bGVPdmVycmlkZXMoKTtcclxuICAgICAgICBpZiAoIWRvY3VtZW50SXNWaXNpYmxlKCkgJiYgIXRoZW1lLmltbWVkaWF0ZU1vZGlmeSkge1xyXG4gICAgICAgICAgICBzZXREb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcihydW5EeW5hbWljU3R5bGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJ1bkR5bmFtaWNTdHlsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGFuZ2VNZXRhVGhlbWVDb2xvcldoZW5BdmFpbGFibGUodGhlbWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRvcHRlZFN0eWxlU2hlZXRzKG5vZGUpIHtcclxuICAgICAgICBpZiAoaXNGaXJlZm94KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrID0gZ2V0QWRvcHRlZFN0eWxlU2hlZXRGYWxsYmFjayhub2RlKTtcclxuICAgICAgICAgICAgZmFsbGJhY2sucmVuZGVyKHRoZW1lLCBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbkhhdmVBZG9wdGVkU3R5bGVTaGVldHMobm9kZSkpIHtcclxuICAgICAgICAgICAgbm9kZS5hZG9wdGVkU3R5bGVTaGVldHMuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUuYWRkUnVsZXNGb3JNYXRjaGluZyhzLmNzc1J1bGVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01hbmdlciA9IGNyZWF0ZUFkb3B0ZWRTdHlsZVNoZWV0T3ZlcnJpZGUobm9kZSk7XHJcbiAgICAgICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLnB1c2gobmV3TWFuZ2VyKTtcclxuICAgICAgICAgICAgbmV3TWFuZ2VyLnJlbmRlcih0aGVtZSwgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnMpO1xyXG4gICAgICAgICAgICBuZXdNYW5nZXIud2F0Y2goKHNoZWV0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2hlZXRzLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKHMuY3NzUnVsZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICAgICAgICAgIG5ld01hbmdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0QWRvcHRlZFN0eWxlQ2hhbmdlVG9rZW4obm9kZSkge1xyXG4gICAgICAgIGlmIChhZG9wdGVkU3R5bGVDaGFuZ2VUb2tlbnMuaGFzKG5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhZG9wdGVkU3R5bGVDaGFuZ2VUb2tlbnMuZ2V0KG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b2tlbiA9IFN5bWJvbCgpO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZUNoYW5nZVRva2Vucy5zZXQobm9kZSwgdG9rZW4pO1xyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEFkb3B0ZWRTdHlsZVNoZWV0RmFsbGJhY2sobm9kZSkge1xyXG4gICAgICAgIGxldCBmYWxsYmFjayA9IGFkb3B0ZWRTdHlsZUZhbGxiYWNrcy5nZXQobm9kZSk7XHJcbiAgICAgICAgaWYgKCFmYWxsYmFjaykge1xyXG4gICAgICAgICAgICBmYWxsYmFjayA9IGNyZWF0ZUFkb3B0ZWRTdHlsZVNoZWV0RmFsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBnZXRBZG9wdGVkU3R5bGVDaGFuZ2VUb2tlbihub2RlKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZU9uY2UodG9rZW4sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGFkb3B0ZWRTdHlsZU5vZGVJZHMuZ2V0KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmRzID0gZmFsbGJhY2s/LmNvbW1hbmRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpZCB8fCAhY29tbWFuZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge2lkLCBjb21tYW5kc307XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfX2RhcmtyZWFkZXJfX2Fkb3B0ZWRTdHlsZVNoZWV0Q29tbWFuZHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXRhaWw6IEpTT04uc3RyaW5naWZ5KGRhdGEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWRvcHRlZFN0eWxlRmFsbGJhY2tzLnNldChub2RlLCBmYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxsYmFjaztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhdGNoRm9yVXBkYXRlcygpIHtcclxuICAgICAgICBjb25zdCBtYW5hZ2VkU3R5bGVzID0gQXJyYXkuZnJvbShzdHlsZU1hbmFnZXJzLmtleXMoKSk7XHJcbiAgICAgICAgd2F0Y2hGb3JTdHlsZUNoYW5nZXMoXHJcbiAgICAgICAgICAgIG1hbmFnZWRTdHlsZXMsXHJcbiAgICAgICAgICAgICh7Y3JlYXRlZCwgdXBkYXRlZCwgcmVtb3ZlZCwgbW92ZWR9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZXNUb1JlbW92ZSA9IHJlbW92ZWQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZXNUb01hbmFnZSA9IGNyZWF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAuY29uY2F0KHVwZGF0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChtb3ZlZClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChzdHlsZSkgPT4gIXN0eWxlTWFuYWdlcnMuaGFzKHN0eWxlKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZXNUb1Jlc3RvcmUgPSBtb3ZlZC5maWx0ZXIoKHN0eWxlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlTWFuYWdlcnMuaGFzKHN0eWxlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlc1RvUmVtb3ZlLmZvckVhY2goKHN0eWxlKSA9PiByZW1vdmVNYW5hZ2VyKHN0eWxlKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdNYW5hZ2VycyA9IHN0eWxlc1RvTWFuYWdlLm1hcCgoc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTWFuYWdlcihzdHlsZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBuZXdNYW5hZ2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKG1hbmFnZXIpID0+IG1hbmFnZXIuZGV0YWlscyh7c2Vjb25kUm91bmQ6IGZhbHNlfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoZGV0YWlsKSA9PiBkZXRhaWwgJiYgZGV0YWlsLnJ1bGVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGRldGFpbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5hZGRSdWxlc0Zvck1hdGNoaW5nKGRldGFpbC5ydWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5tYXRjaFZhcmlhYmxlc0FuZERlcGVuZGVudHMoKTtcclxuICAgICAgICAgICAgICAgIG5ld01hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlci5yZW5kZXIodGhlbWUsIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIG5ld01hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG1hbmFnZXIud2F0Y2goKSk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZXNUb1Jlc3RvcmUuZm9yRWFjaCgoc3R5bGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVNYW5hZ2Vycy5nZXQoc3R5bGUpLnJlc3RvcmUoKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKHNoYWRvd1Jvb3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNoYWRvd1N0YXRpY1N0eWxlT3ZlcnJpZGVzKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQWRvcHRlZFN0eWxlU2hlZXRzKHNoYWRvd1Jvb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB3YXRjaEZvcklubGluZVN0eWxlcyhcclxuICAgICAgICAgICAgKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIG92ZXJyaWRlSW5saW5lU3R5bGUoXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3R5bGVcIikgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVBdHRyLmluY2x1ZGVzKFwiLS1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzU3RvcmUubWF0Y2hWYXJpYWJsZXNBbmREZXBlbmRlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RWYXJzU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrcmVhZGVyLS1yb290LXZhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXNTdG9yZS5wdXRSb290VmFycyhyb290VmFyc1N0eWxlLCB0aGVtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAocm9vdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlU2hhZG93U3RhdGljU3R5bGVPdmVycmlkZXMocm9vdCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmxpbmVTdHlsZUVsZW1lbnRzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgICAgIElOTElORV9TVFlMRV9TRUxFQ1RPUlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmxpbmVTdHlsZUVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JFYWNoKGlubGluZVN0eWxlRWxlbWVudHMsIChlbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVJbmxpbmVTdHlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZ25vcmVkSW5saW5lU2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWdub3JlZEltYWdlQW5hbHlzaXNTZWxlY3RvcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICAgIGFkZERPTVJlYWR5TGlzdGVuZXIob25ET01SZWFkeSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdG9wV2F0Y2hpbmdGb3JVcGRhdGVzKCkge1xyXG4gICAgICAgIHN0eWxlTWFuYWdlcnMuZm9yRWFjaCgobWFuYWdlcikgPT4gbWFuYWdlci5wYXVzZSgpKTtcclxuICAgICAgICBzdG9wU3R5bGVQb3NpdGlvbldhdGNoZXJzKCk7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9yU3R5bGVDaGFuZ2VzKCk7XHJcbiAgICAgICAgc3RvcFdhdGNoaW5nRm9ySW5saW5lU3R5bGVzKCk7XHJcbiAgICAgICAgcmVtb3ZlRE9NUmVhZHlMaXN0ZW5lcihvbkRPTVJlYWR5KTtcclxuICAgICAgICBjbGVhblJlYWR5U3RhdGVDb21wbGV0ZUxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgbGV0IG1ldGFPYnNlcnZlcjtcclxuICAgIGZ1bmN0aW9uIGFkZE1ldGFMaXN0ZW5lcigpIHtcclxuICAgICAgICBtZXRhT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyLWxvY2tcIl0nKSkge1xyXG4gICAgICAgICAgICAgICAgbWV0YU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUR5bmFtaWNUaGVtZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWV0YU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuaGVhZCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRGFya1JlYWRlckluc3RhbmNlTWFya2VyKCkge1xyXG4gICAgICAgIGNvbnN0IG1ldGFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XHJcbiAgICAgICAgbWV0YUVsZW1lbnQubmFtZSA9IFwiZGFya3JlYWRlclwiO1xyXG4gICAgICAgIG1ldGFFbGVtZW50LmNvbnRlbnQgPSBJTlNUQU5DRV9JRDtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFFbGVtZW50KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzRFJMb2NrZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRhcmtyZWFkZXItbG9ja1wiXScpICE9IG51bGw7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0Fub3RoZXJEYXJrUmVhZGVySW5zdGFuY2VBY3RpdmUoKSB7XHJcbiAgICAgICAgY29uc3QgbWV0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImRhcmtyZWFkZXJcIl0nKTtcclxuICAgICAgICBpZiAobWV0YSkge1xyXG4gICAgICAgICAgICBpZiAobWV0YS5jb250ZW50ICE9PSBJTlNUQU5DRV9JRCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjcmVhdGVEYXJrUmVhZGVySW5zdGFuY2VNYXJrZXIoKTtcclxuICAgICAgICBhZGRNZXRhTGlzdGVuZXIoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsZXQgaW50ZXJjZXB0b3JBdHRlbXB0cyA9IDI7XHJcbiAgICBmdW5jdGlvbiBpbnRlcmNlcHRPbGRTY3JpcHQoe3N1Y2Nlc3MsIGZhaWx1cmV9KSB7XHJcbiAgICAgICAgaWYgKC0taW50ZXJjZXB0b3JBdHRlbXB0cyA8PSAwKSB7XHJcbiAgICAgICAgICAgIGZhaWx1cmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbGRNZXRhID0gZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyXCJdJyk7XHJcbiAgICAgICAgaWYgKCFvbGRNZXRhIHx8IG9sZE1ldGEuY29udGVudCA9PT0gSU5TVEFOQ0VfSUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XHJcbiAgICAgICAgbG9jay5uYW1lID0gXCJkYXJrcmVhZGVyLWxvY2tcIjtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChsb2NrKTtcclxuICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvY2sucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRpc2FibGVDb25mbGljdGluZ1BsdWdpbnMoKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXdwLWRhcmstbW9kZS1wcmVzZXRcIikpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlzYWJsZVdQRGFya01vZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fZGlzYWJsZUNvbmZsaWN0aW5nUGx1Z2luc1wiKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwid3AtZGFyay1tb2RlLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtd3AtZGFyay1tb2RlLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkaXNhYmxlV1BEYXJrTW9kZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndwLWRhcmstbW9kZS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICkgfHxcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaGFzQXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtd3AtZGFyay1tb2RlLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVdQRGFya01vZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJjbGFzc1wiLCBcImRhdGEtd3AtZGFyay1tb2RlLWFjdGl2ZVwiXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPclVwZGF0ZUR5bmFtaWNUaGVtZUludGVybmFsKFxyXG4gICAgICAgIHRoZW1lQ29uZmlnLFxyXG4gICAgICAgIGR5bmFtaWNUaGVtZUZpeGVzLFxyXG4gICAgICAgIGlmcmFtZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhlbWUgPSB0aGVtZUNvbmZpZztcclxuICAgICAgICBmaXhlcyA9IGR5bmFtaWNUaGVtZUZpeGVzO1xyXG4gICAgICAgIGlmIChmaXhlcykge1xyXG4gICAgICAgICAgICBpZ25vcmVkSW1hZ2VBbmFseXNpc1NlbGVjdG9ycyA9IEFycmF5LmlzQXJyYXkoXHJcbiAgICAgICAgICAgICAgICBmaXhlcy5pZ25vcmVJbWFnZUFuYWx5c2lzXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgID8gZml4ZXMuaWdub3JlSW1hZ2VBbmFseXNpc1xyXG4gICAgICAgICAgICAgICAgOiBbXTtcclxuICAgICAgICAgICAgaWdub3JlZElubGluZVNlbGVjdG9ycyA9IEFycmF5LmlzQXJyYXkoZml4ZXMuaWdub3JlSW5saW5lU3R5bGUpXHJcbiAgICAgICAgICAgICAgICA/IGZpeGVzLmlnbm9yZUlubGluZVN0eWxlXHJcbiAgICAgICAgICAgICAgICA6IFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlnbm9yZWRJbWFnZUFuYWx5c2lzU2VsZWN0b3JzID0gW107XHJcbiAgICAgICAgICAgIGlnbm9yZWRJbmxpbmVTZWxlY3RvcnMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoZW1lLmltbWVkaWF0ZU1vZGlmeSkge1xyXG4gICAgICAgICAgICBzZXRJc0RPTVJlYWR5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXNJRnJhbWUkMSA9IGlmcmFtZTtcclxuICAgICAgICBjb25zdCByZWFkeSA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc2FibGVDb25mbGljdGluZ1BsdWdpbnMoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWRhcmtyZWFkZXItbW9kZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZHluYW1pY1wiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgICAgICBcImRhdGEtZGFya3JlYWRlci1zY2hlbWVcIixcclxuICAgICAgICAgICAgICAgICAgICB0aGVtZS5tb2RlID8gXCJkYXJrXCIgOiBcImRpbW1lZFwiXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlVGhlbWVBbmRXYXRjaEZvclVwZGF0ZXMoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZmFpbHVyZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUR5bmFtaWNUaGVtZSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoaXNEUkxvY2tlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tZmFsbGJhY2tcIikpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5vdGhlckRhcmtSZWFkZXJJbnN0YW5jZUFjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcmNlcHRPbGRTY3JpcHQoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbHVyZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5oZWFkKSB7XHJcbiAgICAgICAgICAgIHJlYWR5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFpc0ZpcmVmb3gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhbGxiYWNrU3R5bGUgPSBjcmVhdGVPclVwZGF0ZVN0eWxlKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiZGFya3JlYWRlci0tZmFsbGJhY2tcIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChmYWxsYmFja1N0eWxlKTtcclxuICAgICAgICAgICAgICAgIGZhbGxiYWNrU3R5bGUudGV4dENvbnRlbnQgPSBnZXRNb2RpZmllZEZhbGxiYWNrU3R5bGUodGhlbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpY3Q6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5oZWFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkeSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaGVhZE9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVQcm94eSgpIHtcclxuICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcIl9fZGFya3JlYWRlcl9fY2xlYW5VcFwiKSk7XHJcbiAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tcHJveHlcIikpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYW5lcnMgPSBbXTtcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUR5bmFtaWNUaGVtZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGBkYXRhLWRhcmtyZWFkZXItbW9kZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtZGFya3JlYWRlci1zY2hlbWVgKTtcclxuICAgICAgICBjbGVhbkR5bmFtaWNUaGVtZUNhY2hlKCk7XHJcbiAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLWZhbGxiYWNrXCIpKTtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuaGVhZCkge1xyXG4gICAgICAgICAgICByZXN0b3JlTWV0YVRoZW1lQ29sb3IoKTtcclxuICAgICAgICAgICAgcmVtb3ZlTm9kZShkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoXCIuZGFya3JlYWRlci0tdXNlci1hZ2VudFwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXRleHRcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1pbnZlcnRcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1pbmxpbmVcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1vdmVycmlkZVwiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXZhcmlhYmxlc1wiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKFwiLmRhcmtyZWFkZXItLXJvb3QtdmFyc1wiKSk7XHJcbiAgICAgICAgICAgIHJlbW92ZU5vZGUoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJkYXJrcmVhZGVyXCJdJykpO1xyXG4gICAgICAgICAgICByZW1vdmVQcm94eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaGFkb3dSb290c1dpdGhPdmVycmlkZXMuZm9yRWFjaCgocm9vdCkgPT4ge1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKHJvb3QucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1pbmxpbmVcIikpO1xyXG4gICAgICAgICAgICByZW1vdmVOb2RlKHJvb3QucXVlcnlTZWxlY3RvcihcIi5kYXJrcmVhZGVyLS1vdmVycmlkZVwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2hhZG93Um9vdHNXaXRoT3ZlcnJpZGVzLmNsZWFyKCk7XHJcbiAgICAgICAgZm9yRWFjaChzdHlsZU1hbmFnZXJzLmtleXMoKSwgKGVsKSA9PiByZW1vdmVNYW5hZ2VyKGVsKSk7XHJcbiAgICAgICAgbG9hZGluZ1N0eWxlcy5jbGVhcigpO1xyXG4gICAgICAgIGNsZWFuTG9hZGluZ0xpbmtzKCk7XHJcbiAgICAgICAgZm9yRWFjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmtyZWFkZXJcIiksIHJlbW92ZU5vZGUpO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZU1hbmFnZXJzLmZvckVhY2goKG1hbmFnZXIpID0+IG1hbmFnZXIuZGVzdHJveSgpKTtcclxuICAgICAgICBhZG9wdGVkU3R5bGVNYW5hZ2Vycy5zcGxpY2UoMCk7XHJcbiAgICAgICAgYWRvcHRlZFN0eWxlRmFsbGJhY2tzLmZvckVhY2goKGZhbGxiYWNrKSA9PiBmYWxsYmFjay5kZXN0cm95KCkpO1xyXG4gICAgICAgIGFkb3B0ZWRTdHlsZUZhbGxiYWNrcy5jbGVhcigpO1xyXG4gICAgICAgIG1ldGFPYnNlcnZlciAmJiBtZXRhT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIGNsZWFuZXJzLmZvckVhY2goKGNsZWFuKSA9PiBjbGVhbigpKTtcclxuICAgICAgICBjbGVhbmVycy5zcGxpY2UoMCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhbkR5bmFtaWNUaGVtZUNhY2hlKCkge1xyXG4gICAgICAgIHZhcmlhYmxlc1N0b3JlLmNsZWFyKCk7XHJcbiAgICAgICAgcGFyc2VkVVJMQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICByZW1vdmVEb2N1bWVudFZpc2liaWxpdHlMaXN0ZW5lcigpO1xyXG4gICAgICAgIGNhbmNlbFJlbmRlcmluZygpO1xyXG4gICAgICAgIHN0b3BXYXRjaGluZ0ZvclVwZGF0ZXMoKTtcclxuICAgICAgICBjbGVhbk1vZGlmaWNhdGlvbkNhY2hlKCk7XHJcbiAgICAgICAgY2xlYXJDb2xvckNhY2hlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VDU1MoY3NzVGV4dCkge1xyXG4gICAgICAgIGNzc1RleHQgPSByZW1vdmVDU1NDb21tZW50cyhjc3NUZXh0KTtcclxuICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC50cmltKCk7XHJcbiAgICAgICAgaWYgKCFjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcnVsZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBleGNsdWRlUmFuZ2VzID0gZ2V0VG9rZW5FeGNsdXNpb25SYW5nZXMoY3NzVGV4dCk7XHJcbiAgICAgICAgY29uc3QgYnJhY2tldFJhbmdlcyA9IGdldEFsbE9wZW5DbG9zZVJhbmdlcyhcclxuICAgICAgICAgICAgY3NzVGV4dCxcclxuICAgICAgICAgICAgXCJ7XCIsXHJcbiAgICAgICAgICAgIFwifVwiLFxyXG4gICAgICAgICAgICBleGNsdWRlUmFuZ2VzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgcnVsZVN0YXJ0ID0gMDtcclxuICAgICAgICBicmFja2V0UmFuZ2VzLmZvckVhY2goKGJyYWNrZXRzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGNzc1RleHQuc3Vic3RyaW5nKHJ1bGVTdGFydCwgYnJhY2tldHMuc3RhcnQpLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNzc1RleHQuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgYnJhY2tldHMuc3RhcnQgKyAxLFxyXG4gICAgICAgICAgICAgICAgYnJhY2tldHMuZW5kIC0gMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCJAXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlRW5kSW5kZXggPSBrZXkuc2VhcmNoKC9bXFxzXFwoXS8pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlRW5kSW5kZXggPCAwID8ga2V5IDoga2V5LnN1YnN0cmluZygwLCB0eXBlRW5kSW5kZXgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlRW5kSW5kZXggPCAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoga2V5LnN1YnN0cmluZyh0eXBlRW5kSW5kZXgpLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICBydWxlczogcGFyc2VDU1MoY29udGVudClcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcnVsZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcnM6IHBhcnNlU2VsZWN0b3JzKGtleSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBwYXJzZURlY2xhcmF0aW9ucyhjb250ZW50KVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2gocnVsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcnVsZVN0YXJ0ID0gYnJhY2tldHMuZW5kO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBydWxlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldEFsbE9wZW5DbG9zZVJhbmdlcyhcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBvcGVuVG9rZW4sXHJcbiAgICAgICAgY2xvc2VUb2tlbixcclxuICAgICAgICBleGNsdWRlUmFuZ2VzID0gW11cclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IHJhbmdlcyA9IFtdO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgcmFuZ2U7XHJcbiAgICAgICAgd2hpbGUgKFxyXG4gICAgICAgICAgICAocmFuZ2UgPSBnZXRPcGVuQ2xvc2VSYW5nZShcclxuICAgICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgIG9wZW5Ub2tlbixcclxuICAgICAgICAgICAgICAgIGNsb3NlVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBleGNsdWRlUmFuZ2VzXHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJhbmdlcy5wdXNoKHJhbmdlKTtcclxuICAgICAgICAgICAgaSA9IHJhbmdlLmVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJhbmdlcztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFRva2VuRXhjbHVzaW9uUmFuZ2VzKGNzc1RleHQpIHtcclxuICAgICAgICBjb25zdCBzaW5nbGVRdW90ZUdvZXNGaXJzdCA9XHJcbiAgICAgICAgICAgIGNzc1RleHQuaW5kZXhPZihcIidcIikgPCBjc3NUZXh0LmluZGV4T2YoJ1wiJyk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RRdW90ZSA9IHNpbmdsZVF1b3RlR29lc0ZpcnN0ID8gXCInXCIgOiAnXCInO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZFF1b3RlID0gc2luZ2xlUXVvdGVHb2VzRmlyc3QgPyAnXCInIDogXCInXCI7XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZVJhbmdlcyA9IGdldEFsbE9wZW5DbG9zZVJhbmdlcyhcclxuICAgICAgICAgICAgY3NzVGV4dCxcclxuICAgICAgICAgICAgZmlyc3RRdW90ZSxcclxuICAgICAgICAgICAgZmlyc3RRdW90ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZXhjbHVkZVJhbmdlcy5wdXNoKFxyXG4gICAgICAgICAgICAuLi5nZXRBbGxPcGVuQ2xvc2VSYW5nZXMoXHJcbiAgICAgICAgICAgICAgICBjc3NUZXh0LFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kUXVvdGUsXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRRdW90ZSxcclxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVSYW5nZXNcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZXhjbHVkZVJhbmdlcy5wdXNoKFxyXG4gICAgICAgICAgICAuLi5nZXRBbGxPcGVuQ2xvc2VSYW5nZXMoY3NzVGV4dCwgXCJbXCIsIFwiXVwiLCBleGNsdWRlUmFuZ2VzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZXhjbHVkZVJhbmdlcy5wdXNoKFxyXG4gICAgICAgICAgICAuLi5nZXRBbGxPcGVuQ2xvc2VSYW5nZXMoY3NzVGV4dCwgXCIoXCIsIFwiKVwiLCBleGNsdWRlUmFuZ2VzKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGV4Y2x1ZGVSYW5nZXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZVNlbGVjdG9ycyhzZWxlY3RvclRleHQpIHtcclxuICAgICAgICBjb25zdCBleGNsdWRlUmFuZ2VzID0gZ2V0VG9rZW5FeGNsdXNpb25SYW5nZXMoc2VsZWN0b3JUZXh0KTtcclxuICAgICAgICByZXR1cm4gc3BsaXRFeGNsdWRpbmcoc2VsZWN0b3JUZXh0LCBcIixcIiwgZXhjbHVkZVJhbmdlcyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZURlY2xhcmF0aW9ucyhjc3NEZWNsYXJhdGlvbnNUZXh0KSB7XHJcbiAgICAgICAgY29uc3QgZGVjbGFyYXRpb25zID0gW107XHJcbiAgICAgICAgY29uc3QgZXhjbHVkZVJhbmdlcyA9IGdldFRva2VuRXhjbHVzaW9uUmFuZ2VzKGNzc0RlY2xhcmF0aW9uc1RleHQpO1xyXG4gICAgICAgIHNwbGl0RXhjbHVkaW5nKGNzc0RlY2xhcmF0aW9uc1RleHQsIFwiO1wiLCBleGNsdWRlUmFuZ2VzKS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAocGFydCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb25JbmRleCA9IHBhcnQuaW5kZXhPZihcIjpcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sb25JbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbXBvcnRhbnRJbmRleCA9IHBhcnQuaW5kZXhPZihcIiFpbXBvcnRhbnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogcGFydC5zdWJzdHJpbmcoMCwgY29sb25JbmRleCkudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvbkluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnRJbmRleCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpbXBvcnRhbnRJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBhcnQubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbnQ6IGltcG9ydGFudEluZGV4ID4gMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNQYXJzZWRTdHlsZVJ1bGUocnVsZSkge1xyXG4gICAgICAgIHJldHVybiBcInNlbGVjdG9yc1wiIGluIHJ1bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0Q1NTKGNzc1RleHQpIHtcclxuICAgICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUNTUyhjc3NUZXh0KTtcclxuICAgICAgICByZXR1cm4gZm9ybWF0UGFyc2VkQ1NTKHBhcnNlZCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtYXRQYXJzZWRDU1MocGFyc2VkKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXTtcclxuICAgICAgICBjb25zdCB0YWIgPSBcIiAgICBcIjtcclxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRSdWxlKHJ1bGUsIGluZGVudCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQYXJzZWRTdHlsZVJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdFN0eWxlUnVsZShydWxlLCBpbmRlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0QXRSdWxlKHJ1bGUsIGluZGVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0QXRSdWxlKHt0eXBlLCBxdWVyeSwgcnVsZXN9LCBpbmRlbnQpIHtcclxuICAgICAgICAgICAgbGluZXMucHVzaChgJHtpbmRlbnR9JHt0eXBlfSAke3F1ZXJ5fSB7YCk7XHJcbiAgICAgICAgICAgIHJ1bGVzLmZvckVhY2goKGNoaWxkKSA9PiBmb3JtYXRSdWxlKGNoaWxkLCBgJHtpbmRlbnR9JHt0YWJ9YCkpO1xyXG4gICAgICAgICAgICBsaW5lcy5wdXNoKGAke2luZGVudH19YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdFN0eWxlUnVsZSh7c2VsZWN0b3JzLCBkZWNsYXJhdGlvbnN9LCBpbmRlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFzdFNlbGVjdG9ySW5kZXggPSBzZWxlY3RvcnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgc2VsZWN0b3JzLmZvckVhY2goKHNlbGVjdG9yLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3NlbGVjdG9yfSR7aSA8IGxhc3RTZWxlY3RvckluZGV4ID8gXCIsXCIgOiBcIiB7XCJ9YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IHNvcnREZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKTtcclxuICAgICAgICAgICAgc29ydGVkLmZvckVhY2goKHtwcm9wZXJ0eSwgdmFsdWUsIGltcG9ydGFudH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGFifSR7cHJvcGVydHl9OiAke3ZhbHVlfSR7aW1wb3J0YW50ID8gXCIgIWltcG9ydGFudFwiIDogXCJcIn07YFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxpbmVzLnB1c2goYCR7aW5kZW50fX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYXJFbXB0eVJ1bGVzKHBhcnNlZCk7XHJcbiAgICAgICAgcGFyc2VkLmZvckVhY2goKHJ1bGUpID0+IGZvcm1hdFJ1bGUocnVsZSwgXCJcIikpO1xyXG4gICAgICAgIHJldHVybiBsaW5lcy5qb2luKFwiXFxuXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc29ydERlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBwcmVmaXhSZWdleCA9IC9eLVthLXpdLS87XHJcbiAgICAgICAgcmV0dXJuIFsuLi5kZWNsYXJhdGlvbnNdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYVByb3AgPSBhLnByb3BlcnR5O1xyXG4gICAgICAgICAgICBjb25zdCBiUHJvcCA9IGIucHJvcGVydHk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFQcmVmaXggPSBhUHJvcC5tYXRjaChwcmVmaXhSZWdleCk/LlswXSA/PyBcIlwiO1xyXG4gICAgICAgICAgICBjb25zdCBiUHJlZml4ID0gYlByb3AubWF0Y2gocHJlZml4UmVnZXgpPy5bMF0gPz8gXCJcIjtcclxuICAgICAgICAgICAgY29uc3QgYU5vcm0gPSBhUHJlZml4ID8gYVByb3AucmVwbGFjZShwcmVmaXhSZWdleCwgXCJcIikgOiBhUHJvcDtcclxuICAgICAgICAgICAgY29uc3QgYk5vcm0gPSBiUHJlZml4ID8gYlByb3AucmVwbGFjZShwcmVmaXhSZWdleCwgXCJcIikgOiBiUHJvcDtcclxuICAgICAgICAgICAgaWYgKGFOb3JtID09PSBiTm9ybSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFQcmVmaXgubG9jYWxlQ29tcGFyZShiUHJlZml4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYU5vcm0ubG9jYWxlQ29tcGFyZShiTm9ybSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhckVtcHR5UnVsZXMocnVsZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gcnVsZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHJ1bGVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoaXNQYXJzZWRTdHlsZVJ1bGUocnVsZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlLmRlY2xhcmF0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckVtcHR5UnVsZXMocnVsZS5ydWxlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5ydWxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBydWxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvYlJlZ2V4ID0gL3VybFxcKFxcXCIoYmxvYlxcOi4qPylcXFwiXFwpL2c7XHJcbiAgICBhc3luYyBmdW5jdGlvbiByZXBsYWNlQmxvYnModGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgZ2V0TWF0Y2hlcyhibG9iUmVnZXgsIHRleHQsIDEpLmZvckVhY2goKHVybCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbG9hZEFzRGF0YVVSTCh1cmwpO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShibG9iUmVnZXgsICgpID0+IGB1cmwoXCIke2RhdGEuc2hpZnQoKX1cIilgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJhbm5lciA9IGAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfX19fX19fXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLyAgICAgICBcXFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAuPT0uICAgIC49PS5cclxuICAgICAgICAgICAgICAgICAgICAgKCggICkpPT0oKCAgKSlcclxuICAgICAgICAgICAgICAgICAgICAvIFwiPT1cIiAgICBcIj09XCJcXFxcXHJcbiAgICAgICAgICAgICAgICAgICAvX19fX3x8IHx8IHx8X19fXFxcXFxyXG4gICAgICAgX19fX19fX18gICAgIF9fX18gICAgX19fX19fX18gIF9fXyAgICBfX19cclxuICAgICAgIHwgIF9fXyAgXFxcXCAgIC8gICAgXFxcXCAgIHwgIF9fXyAgXFxcXCB8ICB8ICAvICAvXHJcbiAgICAgICB8ICB8ICBcXFxcICBcXFxcIC8gIC9cXFxcICBcXFxcICB8ICB8ICBcXFxcICBcXFxcfCAgfF8vICAvXHJcbiAgICAgICB8ICB8ICAgKSAgLyAgL19fXFxcXCAgXFxcXCB8ICB8X18vICAvfCAgX19fICBcXFxcXHJcbiAgICAgICB8ICB8X18vICAvICBfX19fX18gIFxcXFx8ICBfX19fICBcXFxcfCAgfCAgXFxcXCAgXFxcXFxyXG5fX19fX19ffF9fX19fX18vX18vIF9fX18gXFxcXF9fXFxcXF9ffF9fX1xcXFxfX1xcXFxfX3xfX19cXFxcX19cXFxcX19fX1xyXG58ICBfX18gIFxcXFwgfCAgX19fXy8gLyAgICBcXFxcICAgfCAgX19fICBcXFxcIHwgIF9fX198ICBfX18gIFxcXFxcclxufCAgfCAgXFxcXCAgXFxcXHwgIHxfX18gLyAgL1xcXFwgIFxcXFwgIHwgIHwgIFxcXFwgIFxcXFx8ICB8X19ffCAgfCAgXFxcXCAgXFxcXFxyXG58ICB8X18vICAvfCAgX19fXy8gIC9fX1xcXFwgIFxcXFwgfCAgfCAgICkgIHwgIF9fX198ICB8X18vICAvXHJcbnwgIF9fX18gIFxcXFx8ICB8X18vICBfX19fX18gIFxcXFx8ICB8X18vICAvfCAgfF9fX3wgIF9fX18gIFxcXFxcclxufF9ffCAgIFxcXFxfX1xcXFxfX19fL19fLyAgICAgIFxcXFxfX1xcXFxfX19fX19fLyB8X19fX19ffF9ffCAgIFxcXFxfX1xcXFxcclxuICAgICAgICAgICAgICAgIGh0dHBzOi8vZGFya3JlYWRlci5vcmdcclxuKi9cclxuXHJcbi8qISBEYXJrIHJlYWRlciBnZW5lcmF0ZWQgQ1NTIHwgTGljZW5zZWQgdW5kZXIgTUlUIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJrcmVhZGVyL2RhcmtyZWFkZXIvYmxvYi9tYWluL0xJQ0VOU0UgKi9cclxuYDtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbGxlY3RDU1MoKSB7XHJcbiAgICAgICAgY29uc3QgY3NzID0gW2Jhbm5lcl07XHJcbiAgICAgICAgZnVuY3Rpb24gYWRkU3RhdGljQ1NTKHNlbGVjdG9yLCBjb21tZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1N0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIGlmIChzdGF0aWNTdHlsZSAmJiBzdGF0aWNTdHlsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgY3NzLnB1c2goYC8qICR7Y29tbWVudH0gKi9gKTtcclxuICAgICAgICAgICAgICAgIGNzcy5wdXNoKHN0YXRpY1N0eWxlLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGNzcy5wdXNoKFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS1mYWxsYmFja1wiLCBcIkZhbGxiYWNrIFN0eWxlXCIpO1xyXG4gICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS11c2VyLWFnZW50XCIsIFwiVXNlci1BZ2VudCBTdHlsZVwiKTtcclxuICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tdGV4dFwiLCBcIlRleHQgU3R5bGVcIik7XHJcbiAgICAgICAgYWRkU3RhdGljQ1NTKFwiLmRhcmtyZWFkZXItLWludmVydFwiLCBcIkludmVydCBTdHlsZVwiKTtcclxuICAgICAgICBhZGRTdGF0aWNDU1MoXCIuZGFya3JlYWRlci0tdmFyaWFibGVzXCIsIFwiVmFyaWFibGVzIFN0eWxlXCIpO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkQ1NTID0gW107XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXJrcmVhZGVyLS1zeW5jXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgZm9yRWFjaChlbGVtZW50LnNoZWV0LmNzc1J1bGVzLCAocnVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcnVsZSAmJiBydWxlLmNzc1RleHQgJiYgbW9kaWZpZWRDU1MucHVzaChydWxlLmNzc1RleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAobW9kaWZpZWRDU1MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZENTUyA9IGZvcm1hdENTUyhtb2RpZmllZENTUy5qb2luKFwiXFxuXCIpKTtcclxuICAgICAgICAgICAgY3NzLnB1c2goXCIvKiBNb2RpZmllZCBDU1MgKi9cIik7XHJcbiAgICAgICAgICAgIGNzcy5wdXNoKGF3YWl0IHJlcGxhY2VCbG9icyhmb3JtYXR0ZWRDU1MpKTtcclxuICAgICAgICAgICAgY3NzLnB1c2goXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFkZFN0YXRpY0NTUyhcIi5kYXJrcmVhZGVyLS1vdmVycmlkZVwiLCBcIk92ZXJyaWRlIFN0eWxlXCIpO1xyXG4gICAgICAgIHJldHVybiBjc3Muam9pbihcIlxcblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaXNEYXJrUmVhZGVyRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaXNJRnJhbWUgPSAoKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgICBmdW5jdGlvbiBlbmFibGUodGhlbWVPcHRpb25zID0ge30sIGZpeGVzID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHRoZW1lID0gey4uLkRFRkFVTFRfVEhFTUUsIC4uLnRoZW1lT3B0aW9uc307XHJcbiAgICAgICAgaWYgKHRoZW1lLmVuZ2luZSAhPT0gVGhlbWVFbmdpbmUuZHluYW1pY1RoZW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZW1lIGVuZ2luZSBpcyBub3Qgc3VwcG9ydGVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3JlYXRlT3JVcGRhdGVEeW5hbWljVGhlbWVJbnRlcm5hbCh0aGVtZSwgZml4ZXMsIGlzSUZyYW1lKTtcclxuICAgICAgICBpc0RhcmtSZWFkZXJFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZCgpIHtcclxuICAgICAgICByZXR1cm4gaXNEYXJrUmVhZGVyRW5hYmxlZDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRpc2FibGUoKSB7XHJcbiAgICAgICAgcmVtb3ZlRHluYW1pY1RoZW1lKCk7XHJcbiAgICAgICAgaXNEYXJrUmVhZGVyRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGFya1NjaGVtZSA9IG1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpO1xyXG4gICAgbGV0IHN0b3JlID0ge1xyXG4gICAgICAgIHRoZW1lT3B0aW9uczogbnVsbCxcclxuICAgICAgICBmaXhlczogbnVsbFxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbG9yU2NoZW1lKCkge1xyXG4gICAgICAgIGlmIChkYXJrU2NoZW1lLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgZW5hYmxlKHN0b3JlLnRoZW1lT3B0aW9ucywgc3RvcmUuZml4ZXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdXRvKHRoZW1lT3B0aW9ucyA9IHt9LCBmaXhlcyA9IG51bGwpIHtcclxuICAgICAgICBpZiAodGhlbWVPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN0b3JlID0ge3RoZW1lT3B0aW9ucywgZml4ZXN9O1xyXG4gICAgICAgICAgICBoYW5kbGVDb2xvclNjaGVtZSgpO1xyXG4gICAgICAgICAgICBpZiAoaXNNYXRjaE1lZGlhQ2hhbmdlRXZlbnRMaXN0ZW5lclN1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgZGFya1NjaGVtZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUuYWRkTGlzdGVuZXIoaGFuZGxlQ29sb3JTY2hlbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzTWF0Y2hNZWRpYUNoYW5nZUV2ZW50TGlzdGVuZXJTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGRhcmtTY2hlbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVDb2xvclNjaGVtZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXJrU2NoZW1lLnJlbW92ZUxpc3RlbmVyKGhhbmRsZUNvbG9yU2NoZW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNhYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZXhwb3J0R2VuZXJhdGVkQ1NTKCkge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBjb2xsZWN0Q1NTKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRGZXRjaE1ldGhvZCA9IHNldEZldGNoTWV0aG9kJDE7XHJcblxyXG4gICAgZXhwb3J0cy5hdXRvID0gYXV0bztcclxuICAgIGV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XHJcbiAgICBleHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcclxuICAgIGV4cG9ydHMuZXhwb3J0R2VuZXJhdGVkQ1NTID0gZXhwb3J0R2VuZXJhdGVkQ1NTO1xyXG4gICAgZXhwb3J0cy5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XHJcbiAgICBleHBvcnRzLnNldEZldGNoTWV0aG9kID0gc2V0RmV0Y2hNZXRob2Q7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7dmFsdWU6IHRydWV9KTtcclxufSk7XHJcbiIsICJjb25zdCBEYXJrUmVhZGVyID0gcmVxdWlyZSgnZGFya3JlYWRlcicpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5QWRtaW4odXNlcm5hbWUsIG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgaWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo1MDAxL3JkLXllYXItcHJvamVjdC0xZjQxZC9ldXJvcGUtd2VzdDIvdmVyaWZ5QWRtaW4nLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGlkXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB1c2VyRGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Q2xpZW50KHVzZXJuYW1lLCBuYW1lLCBpZCwgbWFuYWdlcklELCBjb250YWN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMS9yZC15ZWFyLXByb2plY3QtMWY0MWQvZXVyb3BlLXdlc3QyL3ZlcmlmeUNsaWVudCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VySUQ6IG1hbmFnZXJJRCxcclxuICAgICAgICAgICAgICAgIGNvbnRhY3Q6IGNvbnRhY3RcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJEYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlNYW5hZ2VyKHVzZXJuYW1lLCBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGNvbnRhY3QsIGlkLCBjbGllbnRzTGlzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjUwMDEvcmQteWVhci1wcm9qZWN0LTFmNDFkL2V1cm9wZS13ZXN0Mi92ZXJpZnlNYW5hZ2VyJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIGNvbnRhY3Q6IGNvbnRhY3QsXHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRzTGlzdDogY2xpZW50c0xpc3RcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJEYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5EYXJrUmVhZGVyLmF1dG8oe1xyXG4gICAgYnJpZ2h0bmVzczogMTAwLFxyXG4gICAgY29udHJhc3Q6IDEwMCxcclxuICAgIGRhcmtTY2hlbWVUZXh0Q29sb3I6ICd3aGl0ZScsXHJcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUtBLE9BQUMsU0FBVSxRQUFRLFNBQVM7QUFDeEIsZUFBTyxZQUFZLFlBQVksT0FBTyxXQUFXLGNBQzNDLFFBQVEsT0FBTyxJQUNmLE9BQU8sV0FBVyxjQUFjLE9BQU8sTUFDckMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLEtBQ3pCLFNBQ0UsT0FBTyxlQUFlLGNBQ2hCLGFBQ0EsVUFBVSxNQUNwQixRQUFTLE9BQU8sYUFBYSxDQUFDLENBQUU7QUFBQSxNQUM1QyxHQUFHLFNBQU0sU0FBVUEsVUFBUztBQUN4QjtBQUVBLFlBQUk7QUFDSixTQUFDLFNBQVVDLG9CQUFtQjtBQUMxQixVQUFBQSxtQkFBa0IsVUFBVSxJQUFJO0FBQ2hDLFVBQUFBLG1CQUFrQixtQkFBbUIsSUFBSTtBQUN6QyxVQUFBQSxtQkFBa0Isc0JBQXNCLElBQ3BDO0FBQ0osVUFBQUEsbUJBQWtCLDBCQUEwQixJQUN4QztBQUNKLFVBQUFBLG1CQUFrQixpQkFBaUIsSUFBSTtBQUN2QyxVQUFBQSxtQkFBa0IsV0FBVyxJQUFJO0FBQ2pDLFVBQUFBLG1CQUFrQixtQkFBbUIsSUFBSTtBQUN6QyxVQUFBQSxtQkFBa0IsbUJBQW1CLElBQUk7QUFDekMsVUFBQUEsbUJBQWtCLHdCQUF3QixJQUN0QztBQUNKLFVBQUFBLG1CQUFrQixhQUFhLElBQUk7QUFDbkMsVUFBQUEsbUJBQWtCLCtCQUErQixJQUM3QztBQUNKLFVBQUFBLG1CQUFrQiwrQkFBK0IsSUFDN0M7QUFDSixVQUFBQSxtQkFBa0IsMkJBQTJCLElBQ3pDO0FBQ0osVUFBQUEsbUJBQWtCLDJCQUEyQixJQUN6QztBQUNKLFVBQUFBLG1CQUFrQix5QkFBeUIsSUFDdkM7QUFDSixVQUFBQSxtQkFBa0IseUJBQXlCLElBQ3ZDO0FBQ0os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QVk7QUFBQSxZQUNaLE9BQU87QUFBQSxZQUNQLFdBQVc7QUFBQSxZQUNYLFdBQVc7QUFBQSxZQUNYLFlBQVk7QUFBQSxZQUNaLFdBQVc7QUFBQSxZQUNYLE9BQU87QUFBQSxZQUNQLGdCQUFnQjtBQUFBLFlBQ2hCLFVBQVU7QUFBQSxZQUNWLFNBQVM7QUFBQSxZQUNULE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQSxZQUNWLFVBQVU7QUFBQSxZQUNWLGVBQWU7QUFBQSxZQUNmLFVBQVU7QUFBQSxZQUNWLFVBQVU7QUFBQSxZQUNWLFdBQVc7QUFBQSxZQUNYLFdBQVc7QUFBQSxZQUNYLGFBQWE7QUFBQSxZQUNiLGdCQUFnQjtBQUFBLFlBQ2hCLFlBQVk7QUFBQSxZQUNaLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFlBQVk7QUFBQSxZQUNaLGNBQWM7QUFBQSxZQUNkLGVBQWU7QUFBQSxZQUNmLGVBQWU7QUFBQSxZQUNmLGVBQWU7QUFBQSxZQUNmLGVBQWU7QUFBQSxZQUNmLFlBQVk7QUFBQSxZQUNaLFVBQVU7QUFBQSxZQUNWLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxZQUNULFlBQVk7QUFBQSxZQUNaLFdBQVc7QUFBQSxZQUNYLGFBQWE7QUFBQSxZQUNiLGFBQWE7QUFBQSxZQUNiLFNBQVM7QUFBQSxZQUNULFdBQVc7QUFBQSxZQUNYLFlBQVk7QUFBQSxZQUNaLE1BQU07QUFBQSxZQUNOLFdBQVc7QUFBQSxZQUNYLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxZQUNQLGFBQWE7QUFBQSxZQUNiLFVBQVU7QUFBQSxZQUNWLFNBQVM7QUFBQSxZQUNULFdBQVc7QUFBQSxZQUNYLFFBQVE7QUFBQSxZQUNSLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLFVBQVU7QUFBQSxZQUNWLGVBQWU7QUFBQSxZQUNmLFdBQVc7QUFBQSxZQUNYLGNBQWM7QUFBQSxZQUNkLFdBQVc7QUFBQSxZQUNYLFlBQVk7QUFBQSxZQUNaLFdBQVc7QUFBQSxZ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YyxNQUFNLEtBQUs7QUFBQSxVQUMxQyxPQUFPO0FBQ0gsb0JBQVE7QUFBQSxVQUNaO0FBQUEsUUFDSjtBQUNBLGlCQUFTLEtBQUssZUFBZSxDQUFDLEdBQUdBLFNBQVEsTUFBTTtBQUMzQyxjQUFJLGNBQWM7QUFDZCxvQkFBUSxFQUFDLGNBQWMsT0FBQUEsT0FBSztBQUM1Qiw4QkFBa0I7QUFDbEIsZ0JBQUksMENBQTBDO0FBQzFDLHlCQUFXLGlCQUFpQixVQUFVLGlCQUFpQjtBQUFBLFlBQzNELE9BQU87QUFDSCx5QkFBVyxZQUFZLGlCQUFpQjtBQUFBLFlBQzVDO0FBQUEsVUFDSixPQUFPO0FBQ0gsZ0JBQUksMENBQTBDO0FBQzFDLHlCQUFXLG9CQUFvQixVQUFVLGlCQUFpQjtBQUFBLFlBQzlELE9BQU87QUFDSCx5QkFBVyxlQUFlLGlCQUFpQjtBQUFBLFlBQy9DO0FBQ0Esb0JBQVE7QUFBQSxVQUNaO0FBQUEsUUFDSjtBQUNBLHVCQUFlLHFCQUFxQjtBQUNoQyxpQkFBTyxNQUFNLFdBQVc7QUFBQSxRQUM1QjtBQUNBLGNBQU0saUJBQWlCO0FBRXZCLFFBQUF6QyxTQUFRLE9BQU87QUFDZixRQUFBQSxTQUFRLFVBQVU7QUFDbEIsUUFBQUEsU0FBUSxTQUFTO0FBQ2pCLFFBQUFBLFNBQVEscUJBQXFCO0FBQzdCLFFBQUFBLFNBQVEsWUFBWTtBQUNwQixRQUFBQSxTQUFRLGlCQUFpQjtBQUV6QixlQUFPLGVBQWVBLFVBQVMsY0FBYyxFQUFDLE9BQU8sS0FBSSxDQUFDO0FBQUEsTUFDOUQsQ0FBQztBQUFBO0FBQUE7OztBQ3ZvUEQsTUFBTSxhQUFhO0FBcUZuQixhQUFXLEtBQUs7QUFBQSxJQUNaLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxJQUNWLHFCQUFxQjtBQUFBLEVBQ3pCLENBQUM7IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAiTWVzc2FnZVR5cGVVSXRvQkciLCAiTWVzc2FnZVR5cGVCR3RvVUkiLCAiRGVidWdNZXNzYWdlVHlwZUJHdG9VSSIsICJNZXNzYWdlVHlwZUJHdG9DUyIsICJEZWJ1Z01lc3NhZ2VUeXBlQkd0b0NTIiwgIk1lc3NhZ2VUeXBlQ1N0b0JHIiwgIkRlYnVnTWVzc2FnZVR5cGVDU3RvQkciLCAiTWVzc2FnZVR5cGVDU3RvVUkiLCAiTWVzc2FnZVR5cGVVSXRvQ1MiLCAiZmV0Y2giLCAiVGhlbWVFbmdpbmUiLCAiQXV0b21hdGlvbk1vZGUiLCAib2JzZXJ2ZXIiLCAicGFyc2VkVVJMIiwgInIiLCAiYiIsICJnIiwgIngiLCAidGhlbWUiLCAibHgiLCAiaHgiLCAiRmlsdGVyTW9kZSIsICJtIiwgInZhcmlhYmxlc1N0b3JlIiwgImlzSUZyYW1lIiwgIm1hdGNoZXMiLCAidmFsdWUiLCAiX2EiLCAibW9kIiwgImNsZWFuZXJzIiwgImkiLCAiY29tbWFuZHMiLCAiZGlzYWJsZUNvbmZsaWN0aW5nUGx1Z2lucyIsICJvdmVycmlkZXMiLCAiZWxlbWVudHMiLCAicm9vdFZhcnNTdHlsZSIsICJlIiwgImNzc1J1bGVzIiwgIm5vZGUiLCAiaWQiLCAiZml4ZXMiXQp9Cg==
