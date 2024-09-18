(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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

  // node_modules/@firebase/util/dist/index.esm2017.js
  var stringToByteArray$1 = function(str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if (c < 128) {
        out[p++] = c;
      } else if (c < 2048) {
        out[p++] = c >> 6 | 192;
        out[p++] = c & 63 | 128;
      } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
        c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
        out[p++] = c >> 18 | 240;
        out[p++] = c >> 12 & 63 | 128;
        out[p++] = c >> 6 & 63 | 128;
        out[p++] = c & 63 | 128;
      } else {
        out[p++] = c >> 12 | 224;
        out[p++] = c >> 6 & 63 | 128;
        out[p++] = c & 63 | 128;
      }
    }
    return out;
  };
  var byteArrayToString = function(bytes) {
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
      const c1 = bytes[pos++];
      if (c1 < 128) {
        out[c++] = String.fromCharCode(c1);
      } else if (c1 > 191 && c1 < 224) {
        const c2 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
      } else if (c1 > 239 && c1 < 365) {
        const c2 = bytes[pos++];
        const c3 = bytes[pos++];
        const c4 = bytes[pos++];
        const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
        out[c++] = String.fromCharCode(55296 + (u >> 10));
        out[c++] = String.fromCharCode(56320 + (u & 1023));
      } else {
        const c2 = bytes[pos++];
        const c3 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      }
    }
    return out.join("");
  };
  var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === "function",
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
      if (!Array.isArray(input)) {
        throw Error("encodeByteArray takes an array as a parameter");
      }
      this.init_();
      const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
      const output = [];
      for (let i = 0; i < input.length; i += 3) {
        const byte1 = input[i];
        const haveByte2 = i + 1 < input.length;
        const byte2 = haveByte2 ? input[i + 1] : 0;
        const haveByte3 = i + 2 < input.length;
        const byte3 = haveByte3 ? input[i + 2] : 0;
        const outByte1 = byte1 >> 2;
        const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
        let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
        let outByte4 = byte3 & 63;
        if (!haveByte3) {
          outByte4 = 64;
          if (!haveByte2) {
            outByte3 = 64;
          }
        }
        output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
      }
      return output.join("");
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return btoa(input);
      }
      return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return atob(input);
      }
      return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
      this.init_();
      const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
      const output = [];
      for (let i = 0; i < input.length; ) {
        const byte1 = charToByteMap[input.charAt(i++)];
        const haveByte2 = i < input.length;
        const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
        ++i;
        const haveByte3 = i < input.length;
        const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
        ++i;
        const haveByte4 = i < input.length;
        const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
        ++i;
        if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
          throw new DecodeBase64StringError();
        }
        const outByte1 = byte1 << 2 | byte2 >> 4;
        output.push(outByte1);
        if (byte3 !== 64) {
          const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
          output.push(outByte2);
          if (byte4 !== 64) {
            const outByte3 = byte3 << 6 & 192 | byte4;
            output.push(outByte3);
          }
        }
      }
      return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
      if (!this.byteToCharMap_) {
        this.byteToCharMap_ = {};
        this.charToByteMap_ = {};
        this.byteToCharMapWebSafe_ = {};
        this.charToByteMapWebSafe_ = {};
        for (let i = 0; i < this.ENCODED_VALS.length; i++) {
          this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
          this.charToByteMap_[this.byteToCharMap_[i]] = i;
          this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
          this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
          if (i >= this.ENCODED_VALS_BASE.length) {
            this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
          }
        }
      }
    }
  };
  var DecodeBase64StringError = class extends Error {
    constructor() {
      super(...arguments);
      this.name = "DecodeBase64StringError";
    }
  };
  var base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
  };
  var base64urlEncodeWithoutPadding = function(str) {
    return base64Encode(str).replace(/\./g, "");
  };
  var base64Decode = function(str) {
    try {
      return base64.decodeString(str, true);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
  function getGlobal() {
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    throw new Error("Unable to locate global object.");
  }
  var getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
  var getDefaultsFromEnvVariable = () => {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
      return;
    }
    const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
      return JSON.parse(defaultsJsonString);
    }
  };
  var getDefaultsFromCookie = () => {
    if (typeof document === "undefined") {
      return;
    }
    let match;
    try {
      match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch (e) {
      return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
  };
  var getDefaults = () => {
    try {
      return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
    } catch (e) {
      console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e));
      return;
    }
  };
  var getDefaultEmulatorHost = (productName) => {
    var _a, _b;
    return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
  };
  var getDefaultEmulatorHostnameAndPort = (productName) => {
    const host = getDefaultEmulatorHost(productName);
    if (!host) {
      return void 0;
    }
    const separatorIndex = host.lastIndexOf(":");
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
      throw new Error("Invalid host ".concat(host, " with no separate hostname and port!"));
    }
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === "[") {
      return [host.substring(1, separatorIndex - 1), port];
    } else {
      return [host.substring(0, separatorIndex), port];
    }
  };
  var getDefaultAppConfig = () => {
    var _a;
    return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
  };
  var Deferred = class {
    constructor() {
      this.reject = () => {
      };
      this.resolve = () => {
      };
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
      return (error, value) => {
        if (error) {
          this.reject(error);
        } else {
          this.resolve(value);
        }
        if (typeof callback === "function") {
          this.promise.catch(() => {
          });
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  };
  function createMockUserToken(token, projectId) {
    if (token.uid) {
      throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    const header = {
      alg: "none",
      type: "JWT"
    };
    const project = projectId || "demo-project";
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
      throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({
      // Set all required fields to decent defaults
      iss: "https://securetoken.google.com/".concat(project),
      aud: project,
      iat,
      exp: iat + 3600,
      auth_time: iat,
      sub,
      user_id: sub,
      firebase: {
        sign_in_provider: "custom",
        identities: {}
      }
    }, token);
    const signature = "";
    return [
      base64urlEncodeWithoutPadding(JSON.stringify(header)),
      base64urlEncodeWithoutPadding(JSON.stringify(payload)),
      signature
    ].join(".");
  }
  function isIndexedDBAvailable() {
    try {
      return typeof indexedDB === "object";
    } catch (e) {
      return false;
    }
  }
  function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
      try {
        let preExist = true;
        const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
        const request = self.indexedDB.open(DB_CHECK_NAME);
        request.onsuccess = () => {
          request.result.close();
          if (!preExist) {
            self.indexedDB.deleteDatabase(DB_CHECK_NAME);
          }
          resolve(true);
        };
        request.onupgradeneeded = () => {
          preExist = false;
        };
        request.onerror = () => {
          var _a;
          reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
        };
      } catch (error) {
        reject(error);
      }
    });
  }
  var ERROR_NAME = "FirebaseError";
  var FirebaseError = class _FirebaseError extends Error {
    constructor(code, message, customData) {
      super(message);
      this.code = code;
      this.customData = customData;
      this.name = ERROR_NAME;
      Object.setPrototypeOf(this, _FirebaseError.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ErrorFactory.prototype.create);
      }
    }
  };
  var ErrorFactory = class {
    constructor(service, serviceName, errors) {
      this.service = service;
      this.serviceName = serviceName;
      this.errors = errors;
    }
    create(code, ...data) {
      const customData = data[0] || {};
      const fullCode = "".concat(this.service, "/").concat(code);
      const template = this.errors[code];
      const message = template ? replaceTemplate(template, customData) : "Error";
      const fullMessage = "".concat(this.serviceName, ": ").concat(message, " (").concat(fullCode, ").");
      const error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  };
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
      const value = data[key];
      return value != null ? String(value) : "<".concat(key, "?>");
    });
  }
  var PATTERN = /\{\$([^}]+)}/g;
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
      if (!bKeys.includes(k)) {
        return false;
      }
      const aProp = a[k];
      const bProp = b[k];
      if (isObject(aProp) && isObject(bProp)) {
        if (!deepEqual(aProp, bProp)) {
          return false;
        }
      } else if (aProp !== bProp) {
        return false;
      }
    }
    for (const k of bKeys) {
      if (!aKeys.includes(k)) {
        return false;
      }
    }
    return true;
  }
  function isObject(thing) {
    return thing !== null && typeof thing === "object";
  }
  var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
  function getModularInstance(service) {
    if (service && service._delegate) {
      return service._delegate;
    } else {
      return service;
    }
  }

  // node_modules/@firebase/component/dist/esm/index.esm2017.js
  var Component = class {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name4, instanceFactory, type) {
      this.name = name4;
      this.instanceFactory = instanceFactory;
      this.type = type;
      this.multipleInstances = false;
      this.serviceProps = {};
      this.instantiationMode = "LAZY";
      this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
      this.instantiationMode = mode;
      return this;
    }
    setMultipleInstances(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    }
    setServiceProps(props) {
      this.serviceProps = props;
      return this;
    }
    setInstanceCreatedCallback(callback) {
      this.onInstanceCreated = callback;
      return this;
    }
  };
  var DEFAULT_ENTRY_NAME = "[DEFAULT]";
  var Provider = class {
    constructor(name4, container) {
      this.name = name4;
      this.container = container;
      this.component = null;
      this.instances = /* @__PURE__ */ new Map();
      this.instancesDeferred = /* @__PURE__ */ new Map();
      this.instancesOptions = /* @__PURE__ */ new Map();
      this.onInitCallbacks = /* @__PURE__ */ new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        const deferred = new Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          try {
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e) {
          }
        }
      }
      return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
      var _a;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
      const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          return this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
        } catch (e) {
          if (optional) {
            return null;
          } else {
            throw e;
          }
        }
      } else {
        if (optional) {
          return null;
        } else {
          throw Error("Service ".concat(this.name, " is not available"));
        }
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(component) {
      if (component.name !== this.name) {
        throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
      }
      if (this.component) {
        throw Error("Component for ".concat(this.name, " has already been provided"));
      }
      this.component = component;
      if (!this.shouldAutoInitialize()) {
        return;
      }
      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
        } catch (e) {
        }
      }
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e) {
        }
      }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
      this.instancesDeferred.delete(identifier);
      this.instancesOptions.delete(identifier);
      this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
      const services = Array.from(this.instances.values());
      await Promise.all([
        ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
        ...services.filter((service) => "_delete" in service).map((service) => service._delete())
      ]);
    }
    isComponentSet() {
      return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
      return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
      return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
      const { options = {} } = opts;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
      if (this.isInitialized(normalizedIdentifier)) {
        throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
      }
      if (!this.isComponentSet()) {
        throw Error("Component ".concat(this.name, " has not been registered yet"));
      }
      const instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier,
        options
      });
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        if (normalizedIdentifier === normalizedDeferredIdentifier) {
          instanceDeferred.resolve(instance);
        }
      }
      return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
      var _a;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
      existingCallbacks.add(callback);
      this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
      const existingInstance = this.instances.get(normalizedIdentifier);
      if (existingInstance) {
        callback(existingInstance, normalizedIdentifier);
      }
      return () => {
        existingCallbacks.delete(callback);
      };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
      const callbacks = this.onInitCallbacks.get(identifier);
      if (!callbacks) {
        return;
      }
      for (const callback of callbacks) {
        try {
          callback(instance, identifier);
        } catch (_a) {
        }
      }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
      let instance = this.instances.get(instanceIdentifier);
      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, {
          instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
          options
        });
        this.instances.set(instanceIdentifier, instance);
        this.instancesOptions.set(instanceIdentifier, options);
        this.invokeOnInitCallbacks(instance, instanceIdentifier);
        if (this.component.onInstanceCreated) {
          try {
            this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
          } catch (_a) {
          }
        }
      }
      return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
      } else {
        return identifier;
      }
    }
    shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT";
    }
  };
  function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
  }
  function isComponentEager(component) {
    return component.instantiationMode === "EAGER";
  }
  var ComponentContainer = class {
    constructor(name4) {
      this.name = name4;
      this.providers = /* @__PURE__ */ new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
      const provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
      }
      provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
      const provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        this.providers.delete(component.name);
      }
      this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name4) {
      if (this.providers.has(name4)) {
        return this.providers.get(name4);
      }
      const provider = new Provider(name4, this);
      this.providers.set(name4, provider);
      return provider;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  };

  // node_modules/@firebase/logger/dist/esm/index.esm2017.js
  var instances = [];
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
    LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
    LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
    LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
    LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
    LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
  })(LogLevel || (LogLevel = {}));
  var levelStringToEnum = {
    "debug": LogLevel.DEBUG,
    "verbose": LogLevel.VERBOSE,
    "info": LogLevel.INFO,
    "warn": LogLevel.WARN,
    "error": LogLevel.ERROR,
    "silent": LogLevel.SILENT
  };
  var defaultLogLevel = LogLevel.INFO;
  var ConsoleMethod = {
    [LogLevel.DEBUG]: "log",
    [LogLevel.VERBOSE]: "log",
    [LogLevel.INFO]: "info",
    [LogLevel.WARN]: "warn",
    [LogLevel.ERROR]: "error"
  };
  var defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
      return;
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
      console[method]("[".concat(now, "]  ").concat(instance.name, ":"), ...args);
    } else {
      throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
    }
  };
  var Logger = class {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name4) {
      this.name = name4;
      this._logLevel = defaultLogLevel;
      this._logHandler = defaultLogHandler;
      this._userLogHandler = null;
      instances.push(this);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(val) {
      if (!(val in LogLevel)) {
        throw new TypeError('Invalid value "'.concat(val, '" assigned to `logLevel`'));
      }
      this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
      this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(val) {
      if (typeof val !== "function") {
        throw new TypeError("Value assigned to `logHandler` must be a function");
      }
      this._logHandler = val;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(val) {
      this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
      this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
      this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
      this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
      this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
      this._logHandler(this, LogLevel.ERROR, ...args);
    }
  };

  // node_modules/idb/build/wrap-idb-value.js
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var cursorRequestMap = /* @__PURE__ */ new WeakMap();
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "objectStoreNames") {
          return target.objectStoreNames || transactionStoreNamesMap.get(target);
        }
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);

  // node_modules/idb/build/index.js
  function openDB(name4, version4, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name4, version4);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db) => {
      if (terminated)
        db.addEventListener("close", () => terminated());
      if (blocking) {
        db.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => __spreadProps(__spreadValues({}, oldTraps), {
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));

  // node_modules/@firebase/app/dist/esm/index.esm2017.js
  var PlatformLoggerServiceImpl = class {
    constructor(container) {
      this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
      const providers = this.container.getProviders();
      return providers.map((provider) => {
        if (isVersionServiceProvider(provider)) {
          const service = provider.getImmediate();
          return "".concat(service.library, "/").concat(service.version);
        } else {
          return null;
        }
      }).filter((logString) => logString).join(" ");
    }
  };
  function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
  }
  var name$p = "@firebase/app";
  var version$1 = "0.10.10";
  var logger = new Logger("@firebase/app");
  var name$o = "@firebase/app-compat";
  var name$n = "@firebase/analytics-compat";
  var name$m = "@firebase/analytics";
  var name$l = "@firebase/app-check-compat";
  var name$k = "@firebase/app-check";
  var name$j = "@firebase/auth";
  var name$i = "@firebase/auth-compat";
  var name$h = "@firebase/database";
  var name$g = "@firebase/database-compat";
  var name$f = "@firebase/functions";
  var name$e = "@firebase/functions-compat";
  var name$d = "@firebase/installations";
  var name$c = "@firebase/installations-compat";
  var name$b = "@firebase/messaging";
  var name$a = "@firebase/messaging-compat";
  var name$9 = "@firebase/performance";
  var name$8 = "@firebase/performance-compat";
  var name$7 = "@firebase/remote-config";
  var name$6 = "@firebase/remote-config-compat";
  var name$5 = "@firebase/storage";
  var name$4 = "@firebase/storage-compat";
  var name$3 = "@firebase/firestore";
  var name$2 = "@firebase/vertexai-preview";
  var name$1 = "@firebase/firestore-compat";
  var name = "firebase";
  var version = "10.13.1";
  var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
  var PLATFORM_LOG_STRING = {
    [name$p]: "fire-core",
    [name$o]: "fire-core-compat",
    [name$m]: "fire-analytics",
    [name$n]: "fire-analytics-compat",
    [name$k]: "fire-app-check",
    [name$l]: "fire-app-check-compat",
    [name$j]: "fire-auth",
    [name$i]: "fire-auth-compat",
    [name$h]: "fire-rtdb",
    [name$g]: "fire-rtdb-compat",
    [name$f]: "fire-fn",
    [name$e]: "fire-fn-compat",
    [name$d]: "fire-iid",
    [name$c]: "fire-iid-compat",
    [name$b]: "fire-fcm",
    [name$a]: "fire-fcm-compat",
    [name$9]: "fire-perf",
    [name$8]: "fire-perf-compat",
    [name$7]: "fire-rc",
    [name$6]: "fire-rc-compat",
    [name$5]: "fire-gcs",
    [name$4]: "fire-gcs-compat",
    [name$3]: "fire-fst",
    [name$1]: "fire-fst-compat",
    [name$2]: "fire-vertex",
    "fire-js": "fire-js",
    [name]: "fire-js-all"
  };
  var _apps = /* @__PURE__ */ new Map();
  var _serverApps = /* @__PURE__ */ new Map();
  var _components = /* @__PURE__ */ new Map();
  function _addComponent(app, component) {
    try {
      app.container.addComponent(component);
    } catch (e) {
      logger.debug("Component ".concat(component.name, " failed to register with FirebaseApp ").concat(app.name), e);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug("There were multiple attempts to register component ".concat(componentName, "."));
      return false;
    }
    _components.set(componentName, component);
    for (const app of _apps.values()) {
      _addComponent(app, component);
    }
    for (const serverApp of _serverApps.values()) {
      _addComponent(serverApp, component);
    }
    return true;
  }
  function _getProvider(app, name4) {
    const heartbeatController = app.container.getProvider("heartbeat").getImmediate({ optional: true });
    if (heartbeatController) {
      void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name4);
  }
  var ERRORS = {
    [
      "no-app"
      /* AppError.NO_APP */
    ]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
    [
      "bad-app-name"
      /* AppError.BAD_APP_NAME */
    ]: "Illegal App name: '{$appName}'",
    [
      "duplicate-app"
      /* AppError.DUPLICATE_APP */
    ]: "Firebase App named '{$appName}' already exists with different options or config",
    [
      "app-deleted"
      /* AppError.APP_DELETED */
    ]: "Firebase App named '{$appName}' already deleted",
    [
      "server-app-deleted"
      /* AppError.SERVER_APP_DELETED */
    ]: "Firebase Server App has been deleted",
    [
      "no-options"
      /* AppError.NO_OPTIONS */
    ]: "Need to provide options, when not being deployed to hosting via source.",
    [
      "invalid-app-argument"
      /* AppError.INVALID_APP_ARGUMENT */
    ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    [
      "invalid-log-argument"
      /* AppError.INVALID_LOG_ARGUMENT */
    ]: "First argument to `onLog` must be null or a function.",
    [
      "idb-open"
      /* AppError.IDB_OPEN */
    ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-get"
      /* AppError.IDB_GET */
    ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-set"
      /* AppError.IDB_WRITE */
    ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-delete"
      /* AppError.IDB_DELETE */
    ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "finalization-registry-not-supported"
      /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */
    ]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    [
      "invalid-server-app-environment"
      /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
    ]: "FirebaseServerApp is not for use in browser environments."
  };
  var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
  var FirebaseAppImpl = class {
    constructor(options, config, container) {
      this._isDeleted = false;
      this._options = Object.assign({}, options);
      this._config = Object.assign({}, config);
      this._name = config.name;
      this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
      this._container = container;
      this.container.addComponent(new Component(
        "app",
        () => this,
        "PUBLIC"
        /* ComponentType.PUBLIC */
      ));
    }
    get automaticDataCollectionEnabled() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
    get name() {
      this.checkDestroyed();
      return this._name;
    }
    get options() {
      this.checkDestroyed();
      return this._options;
    }
    get config() {
      this.checkDestroyed();
      return this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(val) {
      this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
      if (this.isDeleted) {
        throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
      }
    }
  };
  var SDK_VERSION = version;
  function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== "object") {
      const name5 = rawConfig;
      rawConfig = { name: name5 };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
    const name4 = config.name;
    if (typeof name4 !== "string" || !name4) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name4)
      });
    }
    options || (options = getDefaultAppConfig());
    if (!options) {
      throw ERROR_FACTORY.create(
        "no-options"
        /* AppError.NO_OPTIONS */
      );
    }
    const existingApp = _apps.get(name4);
    if (existingApp) {
      if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
        return existingApp;
      } else {
        throw ERROR_FACTORY.create("duplicate-app", { appName: name4 });
      }
    }
    const container = new ComponentContainer(name4);
    for (const component of _components.values()) {
      container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name4, newApp);
    return newApp;
  }
  function getApp(name4 = DEFAULT_ENTRY_NAME2) {
    const app = _apps.get(name4);
    if (!app && name4 === DEFAULT_ENTRY_NAME2 && getDefaultAppConfig()) {
      return initializeApp();
    }
    if (!app) {
      throw ERROR_FACTORY.create("no-app", { appName: name4 });
    }
    return app;
  }
  function registerVersion(libraryKeyOrName, version4, variant) {
    var _a;
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
      library += "-".concat(variant);
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version4.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        'Unable to register library "'.concat(library, '" with version "').concat(version4, '":')
      ];
      if (libraryMismatch) {
        warning.push('library name "'.concat(library, '" contains illegal characters (whitespace or "/")'));
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push('version name "'.concat(version4, '" contains illegal characters (whitespace or "/")'));
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(
      "".concat(library, "-version"),
      () => ({ library, version: version4 }),
      "VERSION"
      /* ComponentType.VERSION */
    ));
  }
  var DB_NAME = "firebase-heartbeat-database";
  var DB_VERSION = 1;
  var STORE_NAME = "firebase-heartbeat-store";
  var dbPromise = null;
  function getDbPromise() {
    if (!dbPromise) {
      dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade: (db, oldVersion) => {
          switch (oldVersion) {
            case 0:
              try {
                db.createObjectStore(STORE_NAME);
              } catch (e) {
                console.warn(e);
              }
          }
        }
      }).catch((e) => {
        throw ERROR_FACTORY.create("idb-open", {
          originalErrorMessage: e.message
        });
      });
    }
    return dbPromise;
  }
  async function readHeartbeatsFromIndexedDB(app) {
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME);
      const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
      await tx.done;
      return result;
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-get", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
      const db = await getDbPromise();
      const tx = db.transaction(STORE_NAME, "readwrite");
      const objectStore = tx.objectStore(STORE_NAME);
      await objectStore.put(heartbeatObject, computeKey(app));
      await tx.done;
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-set", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  function computeKey(app) {
    return "".concat(app.name, "!").concat(app.options.appId);
  }
  var MAX_HEADER_BYTES = 1024;
  var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
  var HeartbeatServiceImpl = class {
    constructor(container) {
      this.container = container;
      this._heartbeatsCache = null;
      const app = this.container.getProvider("app").getImmediate();
      this._storage = new HeartbeatStorageImpl(app);
      this._heartbeatsCachePromise = this._storage.read().then((result) => {
        this._heartbeatsCache = result;
        return result;
      });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    async triggerHeartbeat() {
      var _a, _b;
      try {
        const platformLogger = this.container.getProvider("platform-logger").getImmediate();
        const agent = platformLogger.getPlatformInfoString();
        const date = getUTCDateString();
        if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
          this._heartbeatsCache = await this._heartbeatsCachePromise;
          if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
            return;
          }
        }
        if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
          return;
        } else {
          this._heartbeatsCache.heartbeats.push({ date, agent });
        }
        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
          const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
          const now = Date.now();
          return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
        });
        return this._storage.overwrite(this._heartbeatsCache);
      } catch (e) {
        logger.warn(e);
      }
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    async getHeartbeatsHeader() {
      var _a;
      try {
        if (this._heartbeatsCache === null) {
          await this._heartbeatsCachePromise;
        }
        if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
          return "";
        }
        const date = getUTCDateString();
        const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
        const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
        this._heartbeatsCache.lastSentHeartbeatDate = date;
        if (unsentEntries.length > 0) {
          this._heartbeatsCache.heartbeats = unsentEntries;
          await this._storage.overwrite(this._heartbeatsCache);
        } else {
          this._heartbeatsCache.heartbeats = [];
          void this._storage.overwrite(this._heartbeatsCache);
        }
        return headerString;
      } catch (e) {
        logger.warn(e);
        return "";
      }
    }
  };
  function getUTCDateString() {
    const today = /* @__PURE__ */ new Date();
    return today.toISOString().substring(0, 10);
  }
  function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    const heartbeatsToSend = [];
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
      const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
      if (!heartbeatEntry) {
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatsToSend.pop();
          break;
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date);
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          break;
        }
      }
      unsentEntries = unsentEntries.slice(1);
    }
    return {
      heartbeatsToSend,
      unsentEntries
    };
  }
  var HeartbeatStorageImpl = class {
    constructor(app) {
      this.app = app;
      this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
      if (!isIndexedDBAvailable()) {
        return false;
      } else {
        return validateIndexedDBOpenable().then(() => true).catch(() => false);
      }
    }
    /**
     * Read all heartbeats.
     */
    async read() {
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return { heartbeats: [] };
      } else {
        const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
        if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
          return idbHeartbeatObject;
        } else {
          return { heartbeats: [] };
        }
      }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
      var _a;
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: heartbeatsObject.heartbeats
        });
      }
    }
    // add heartbeats
    async add(heartbeatsObject) {
      var _a;
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: [
            ...existingHeartbeatsObject.heartbeats,
            ...heartbeatsObject.heartbeats
          ]
        });
      }
    }
  };
  function countBytes(heartbeatsCache) {
    return base64urlEncodeWithoutPadding(
      // heartbeatsCache wrapper properties
      JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
    ).length;
  }
  function registerCoreComponents(variant) {
    _registerComponent(new Component(
      "platform-logger",
      (container) => new PlatformLoggerServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    _registerComponent(new Component(
      "heartbeat",
      (container) => new HeartbeatServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    registerVersion(name$p, version$1, variant);
    registerVersion(name$p, version$1, "esm2017");
    registerVersion("fire-js", "");
  }
  registerCoreComponents("");

  // node_modules/firebase/app/dist/esm/index.esm.js
  var name2 = "firebase";
  var version2 = "10.13.1";
  registerVersion(name2, version2, "app");

  // node_modules/@firebase/storage/dist/index.esm2017.js
  var DEFAULT_HOST = "firebasestorage.googleapis.com";
  var CONFIG_STORAGE_BUCKET_KEY = "storageBucket";
  var DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1e3;
  var DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1e3;
  var StorageError = class _StorageError extends FirebaseError {
    /**
     * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
     *  added to the end of the message.
     * @param message  - Error message.
     * @param status_ - Corresponding HTTP Status Code
     */
    constructor(code, message, status_ = 0) {
      super(prependCode(code), "Firebase Storage: ".concat(message, " (").concat(prependCode(code), ")"));
      this.status_ = status_;
      this.customData = { serverResponse: null };
      this._baseMessage = this.message;
      Object.setPrototypeOf(this, _StorageError.prototype);
    }
    get status() {
      return this.status_;
    }
    set status(status2) {
      this.status_ = status2;
    }
    /**
     * Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
     */
    _codeEquals(code) {
      return prependCode(code) === this.code;
    }
    /**
     * Optional response message that was added by the server.
     */
    get serverResponse() {
      return this.customData.serverResponse;
    }
    set serverResponse(serverResponse) {
      this.customData.serverResponse = serverResponse;
      if (this.customData.serverResponse) {
        this.message = "".concat(this._baseMessage, "\n").concat(this.customData.serverResponse);
      } else {
        this.message = this._baseMessage;
      }
    }
  };
  var StorageErrorCode;
  (function(StorageErrorCode2) {
    StorageErrorCode2["UNKNOWN"] = "unknown";
    StorageErrorCode2["OBJECT_NOT_FOUND"] = "object-not-found";
    StorageErrorCode2["BUCKET_NOT_FOUND"] = "bucket-not-found";
    StorageErrorCode2["PROJECT_NOT_FOUND"] = "project-not-found";
    StorageErrorCode2["QUOTA_EXCEEDED"] = "quota-exceeded";
    StorageErrorCode2["UNAUTHENTICATED"] = "unauthenticated";
    StorageErrorCode2["UNAUTHORIZED"] = "unauthorized";
    StorageErrorCode2["UNAUTHORIZED_APP"] = "unauthorized-app";
    StorageErrorCode2["RETRY_LIMIT_EXCEEDED"] = "retry-limit-exceeded";
    StorageErrorCode2["INVALID_CHECKSUM"] = "invalid-checksum";
    StorageErrorCode2["CANCELED"] = "canceled";
    StorageErrorCode2["INVALID_EVENT_NAME"] = "invalid-event-name";
    StorageErrorCode2["INVALID_URL"] = "invalid-url";
    StorageErrorCode2["INVALID_DEFAULT_BUCKET"] = "invalid-default-bucket";
    StorageErrorCode2["NO_DEFAULT_BUCKET"] = "no-default-bucket";
    StorageErrorCode2["CANNOT_SLICE_BLOB"] = "cannot-slice-blob";
    StorageErrorCode2["SERVER_FILE_WRONG_SIZE"] = "server-file-wrong-size";
    StorageErrorCode2["NO_DOWNLOAD_URL"] = "no-download-url";
    StorageErrorCode2["INVALID_ARGUMENT"] = "invalid-argument";
    StorageErrorCode2["INVALID_ARGUMENT_COUNT"] = "invalid-argument-count";
    StorageErrorCode2["APP_DELETED"] = "app-deleted";
    StorageErrorCode2["INVALID_ROOT_OPERATION"] = "invalid-root-operation";
    StorageErrorCode2["INVALID_FORMAT"] = "invalid-format";
    StorageErrorCode2["INTERNAL_ERROR"] = "internal-error";
    StorageErrorCode2["UNSUPPORTED_ENVIRONMENT"] = "unsupported-environment";
  })(StorageErrorCode || (StorageErrorCode = {}));
  function prependCode(code) {
    return "storage/" + code;
  }
  function unknown() {
    const message = "An unknown error occurred, please check the error payload for server response.";
    return new StorageError(StorageErrorCode.UNKNOWN, message);
  }
  function objectNotFound(path) {
    return new StorageError(StorageErrorCode.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
  }
  function quotaExceeded(bucket) {
    return new StorageError(StorageErrorCode.QUOTA_EXCEEDED, "Quota for bucket '" + bucket + "' exceeded, please view quota on https://firebase.google.com/pricing/.");
  }
  function unauthenticated() {
    const message = "User is not authenticated, please authenticate using Firebase Authentication and try again.";
    return new StorageError(StorageErrorCode.UNAUTHENTICATED, message);
  }
  function unauthorizedApp() {
    return new StorageError(StorageErrorCode.UNAUTHORIZED_APP, "This app does not have permission to access Firebase Storage on this project.");
  }
  function unauthorized(path) {
    return new StorageError(StorageErrorCode.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
  }
  function retryLimitExceeded() {
    return new StorageError(StorageErrorCode.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.");
  }
  function canceled() {
    return new StorageError(StorageErrorCode.CANCELED, "User canceled the upload/download.");
  }
  function invalidUrl(url) {
    return new StorageError(StorageErrorCode.INVALID_URL, "Invalid URL '" + url + "'.");
  }
  function invalidDefaultBucket(bucket) {
    return new StorageError(StorageErrorCode.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
  }
  function noDefaultBucket() {
    return new StorageError(StorageErrorCode.NO_DEFAULT_BUCKET, "No default bucket found. Did you set the '" + CONFIG_STORAGE_BUCKET_KEY + "' property when initializing the app?");
  }
  function cannotSliceBlob() {
    return new StorageError(StorageErrorCode.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.");
  }
  function noDownloadURL() {
    return new StorageError(StorageErrorCode.NO_DOWNLOAD_URL, "The given file does not have any download URLs.");
  }
  function missingPolyFill(polyFill) {
    return new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, "".concat(polyFill, " is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information."));
  }
  function invalidArgument(message) {
    return new StorageError(StorageErrorCode.INVALID_ARGUMENT, message);
  }
  function appDeleted() {
    return new StorageError(StorageErrorCode.APP_DELETED, "The Firebase app was deleted.");
  }
  function invalidRootOperation(name4) {
    return new StorageError(StorageErrorCode.INVALID_ROOT_OPERATION, "The operation '" + name4 + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");
  }
  function invalidFormat(format, message) {
    return new StorageError(StorageErrorCode.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
  }
  function internalError(message) {
    throw new StorageError(StorageErrorCode.INTERNAL_ERROR, "Internal error: " + message);
  }
  var Location = class _Location {
    constructor(bucket, path) {
      this.bucket = bucket;
      this.path_ = path;
    }
    get path() {
      return this.path_;
    }
    get isRoot() {
      return this.path.length === 0;
    }
    fullServerUrl() {
      const encode = encodeURIComponent;
      return "/b/" + encode(this.bucket) + "/o/" + encode(this.path);
    }
    bucketOnlyServerUrl() {
      const encode = encodeURIComponent;
      return "/b/" + encode(this.bucket) + "/o";
    }
    static makeFromBucketSpec(bucketString, host) {
      let bucketLocation;
      try {
        bucketLocation = _Location.makeFromUrl(bucketString, host);
      } catch (e) {
        return new _Location(bucketString, "");
      }
      if (bucketLocation.path === "") {
        return bucketLocation;
      } else {
        throw invalidDefaultBucket(bucketString);
      }
    }
    static makeFromUrl(url, host) {
      let location = null;
      const bucketDomain = "([A-Za-z0-9.\\-_]+)";
      function gsModify(loc) {
        if (loc.path.charAt(loc.path.length - 1) === "/") {
          loc.path_ = loc.path_.slice(0, -1);
        }
      }
      const gsPath = "(/(.*))?$";
      const gsRegex = new RegExp("^gs://" + bucketDomain + gsPath, "i");
      const gsIndices = { bucket: 1, path: 3 };
      function httpModify(loc) {
        loc.path_ = decodeURIComponent(loc.path);
      }
      const version4 = "v[A-Za-z0-9_]+";
      const firebaseStorageHost = host.replace(/[.]/g, "\\.");
      const firebaseStoragePath = "(/([^?#]*).*)?$";
      const firebaseStorageRegExp = new RegExp("^https?://".concat(firebaseStorageHost, "/").concat(version4, "/b/").concat(bucketDomain, "/o").concat(firebaseStoragePath), "i");
      const firebaseStorageIndices = { bucket: 1, path: 3 };
      const cloudStorageHost = host === DEFAULT_HOST ? "(?:storage.googleapis.com|storage.cloud.google.com)" : host;
      const cloudStoragePath = "([^?#]*)";
      const cloudStorageRegExp = new RegExp("^https?://".concat(cloudStorageHost, "/").concat(bucketDomain, "/").concat(cloudStoragePath), "i");
      const cloudStorageIndices = { bucket: 1, path: 2 };
      const groups = [
        { regex: gsRegex, indices: gsIndices, postModify: gsModify },
        {
          regex: firebaseStorageRegExp,
          indices: firebaseStorageIndices,
          postModify: httpModify
        },
        {
          regex: cloudStorageRegExp,
          indices: cloudStorageIndices,
          postModify: httpModify
        }
      ];
      for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        const captures = group.regex.exec(url);
        if (captures) {
          const bucketValue = captures[group.indices.bucket];
          let pathValue = captures[group.indices.path];
          if (!pathValue) {
            pathValue = "";
          }
          location = new _Location(bucketValue, pathValue);
          group.postModify(location);
          break;
        }
      }
      if (location == null) {
        throw invalidUrl(url);
      }
      return location;
    }
  };
  var FailRequest = class {
    constructor(error) {
      this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */
    getPromise() {
      return this.promise_;
    }
    /** @inheritDoc */
    cancel(_appDelete = false) {
    }
  };
  function start(doRequest, backoffCompleteCb, timeout) {
    let waitSeconds = 1;
    let retryTimeoutId = null;
    let globalTimeoutId = null;
    let hitTimeout = false;
    let cancelState = 0;
    function canceled2() {
      return cancelState === 2;
    }
    let triggeredCallback = false;
    function triggerCallback(...args) {
      if (!triggeredCallback) {
        triggeredCallback = true;
        backoffCompleteCb.apply(null, args);
      }
    }
    function callWithDelay(millis) {
      retryTimeoutId = setTimeout(() => {
        retryTimeoutId = null;
        doRequest(responseHandler, canceled2());
      }, millis);
    }
    function clearGlobalTimeout() {
      if (globalTimeoutId) {
        clearTimeout(globalTimeoutId);
      }
    }
    function responseHandler(success, ...args) {
      if (triggeredCallback) {
        clearGlobalTimeout();
        return;
      }
      if (success) {
        clearGlobalTimeout();
        triggerCallback.call(null, success, ...args);
        return;
      }
      const mustStop = canceled2() || hitTimeout;
      if (mustStop) {
        clearGlobalTimeout();
        triggerCallback.call(null, success, ...args);
        return;
      }
      if (waitSeconds < 64) {
        waitSeconds *= 2;
      }
      let waitMillis;
      if (cancelState === 1) {
        cancelState = 2;
        waitMillis = 0;
      } else {
        waitMillis = (waitSeconds + Math.random()) * 1e3;
      }
      callWithDelay(waitMillis);
    }
    let stopped = false;
    function stop2(wasTimeout) {
      if (stopped) {
        return;
      }
      stopped = true;
      clearGlobalTimeout();
      if (triggeredCallback) {
        return;
      }
      if (retryTimeoutId !== null) {
        if (!wasTimeout) {
          cancelState = 2;
        }
        clearTimeout(retryTimeoutId);
        callWithDelay(0);
      } else {
        if (!wasTimeout) {
          cancelState = 1;
        }
      }
    }
    callWithDelay(0);
    globalTimeoutId = setTimeout(() => {
      hitTimeout = true;
      stop2(true);
    }, timeout);
    return stop2;
  }
  function stop(id) {
    id(false);
  }
  function isJustDef(p) {
    return p !== void 0;
  }
  function isNonArrayObject(p) {
    return typeof p === "object" && !Array.isArray(p);
  }
  function isString(p) {
    return typeof p === "string" || p instanceof String;
  }
  function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
  }
  function isNativeBlobDefined() {
    return typeof Blob !== "undefined";
  }
  function validateNumber(argument, minValue, maxValue, value) {
    if (value < minValue) {
      throw invalidArgument("Invalid value for '".concat(argument, "'. Expected ").concat(minValue, " or greater."));
    }
    if (value > maxValue) {
      throw invalidArgument("Invalid value for '".concat(argument, "'. Expected ").concat(maxValue, " or less."));
    }
  }
  function makeUrl(urlPart, host, protocol) {
    let origin = host;
    if (protocol == null) {
      origin = "https://".concat(host);
    }
    return "".concat(protocol, "://").concat(origin, "/v0").concat(urlPart);
  }
  function makeQueryString(params) {
    const encode = encodeURIComponent;
    let queryPart = "?";
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const nextPart = encode(key) + "=" + encode(params[key]);
        queryPart = queryPart + nextPart + "&";
      }
    }
    queryPart = queryPart.slice(0, -1);
    return queryPart;
  }
  var ErrorCode;
  (function(ErrorCode2) {
    ErrorCode2[ErrorCode2["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode2[ErrorCode2["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode2[ErrorCode2["ABORT"] = 2] = "ABORT";
  })(ErrorCode || (ErrorCode = {}));
  function isRetryStatusCode(status2, additionalRetryCodes) {
    const isFiveHundredCode = status2 >= 500 && status2 < 600;
    const extraRetryCodes = [
      // Request Timeout: web server didn't receive full request in time.
      408,
      // Too Many Requests: you're getting rate-limited, basically.
      429
    ];
    const isExtraRetryCode = extraRetryCodes.indexOf(status2) !== -1;
    const isAdditionalRetryCode = additionalRetryCodes.indexOf(status2) !== -1;
    return isFiveHundredCode || isExtraRetryCode || isAdditionalRetryCode;
  }
  var NetworkRequest = class {
    constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_, retry = true) {
      this.url_ = url_;
      this.method_ = method_;
      this.headers_ = headers_;
      this.body_ = body_;
      this.successCodes_ = successCodes_;
      this.additionalRetryCodes_ = additionalRetryCodes_;
      this.callback_ = callback_;
      this.errorCallback_ = errorCallback_;
      this.timeout_ = timeout_;
      this.progressCallback_ = progressCallback_;
      this.connectionFactory_ = connectionFactory_;
      this.retry = retry;
      this.pendingConnection_ = null;
      this.backoffId_ = null;
      this.canceled_ = false;
      this.appDelete_ = false;
      this.promise_ = new Promise((resolve, reject) => {
        this.resolve_ = resolve;
        this.reject_ = reject;
        this.start_();
      });
    }
    /**
     * Actually starts the retry loop.
     */
    start_() {
      const doTheRequest = (backoffCallback, canceled2) => {
        if (canceled2) {
          backoffCallback(false, new RequestEndStatus(false, null, true));
          return;
        }
        const connection = this.connectionFactory_();
        this.pendingConnection_ = connection;
        const progressListener = (progressEvent) => {
          const loaded = progressEvent.loaded;
          const total = progressEvent.lengthComputable ? progressEvent.total : -1;
          if (this.progressCallback_ !== null) {
            this.progressCallback_(loaded, total);
          }
        };
        if (this.progressCallback_ !== null) {
          connection.addUploadProgressListener(progressListener);
        }
        connection.send(this.url_, this.method_, this.body_, this.headers_).then(() => {
          if (this.progressCallback_ !== null) {
            connection.removeUploadProgressListener(progressListener);
          }
          this.pendingConnection_ = null;
          const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
          const status2 = connection.getStatus();
          if (!hitServer || isRetryStatusCode(status2, this.additionalRetryCodes_) && this.retry) {
            const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
            backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
            return;
          }
          const successCode = this.successCodes_.indexOf(status2) !== -1;
          backoffCallback(true, new RequestEndStatus(successCode, connection));
        });
      };
      const backoffDone = (requestWentThrough, status2) => {
        const resolve = this.resolve_;
        const reject = this.reject_;
        const connection = status2.connection;
        if (status2.wasSuccessCode) {
          try {
            const result = this.callback_(connection, connection.getResponse());
            if (isJustDef(result)) {
              resolve(result);
            } else {
              resolve();
            }
          } catch (e) {
            reject(e);
          }
        } else {
          if (connection !== null) {
            const err = unknown();
            err.serverResponse = connection.getErrorText();
            if (this.errorCallback_) {
              reject(this.errorCallback_(connection, err));
            } else {
              reject(err);
            }
          } else {
            if (status2.canceled) {
              const err = this.appDelete_ ? appDeleted() : canceled();
              reject(err);
            } else {
              const err = retryLimitExceeded();
              reject(err);
            }
          }
        }
      };
      if (this.canceled_) {
        backoffDone(false, new RequestEndStatus(false, null, true));
      } else {
        this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
      }
    }
    /** @inheritDoc */
    getPromise() {
      return this.promise_;
    }
    /** @inheritDoc */
    cancel(appDelete) {
      this.canceled_ = true;
      this.appDelete_ = appDelete || false;
      if (this.backoffId_ !== null) {
        stop(this.backoffId_);
      }
      if (this.pendingConnection_ !== null) {
        this.pendingConnection_.abort();
      }
    }
  };
  var RequestEndStatus = class {
    constructor(wasSuccessCode, connection, canceled2) {
      this.wasSuccessCode = wasSuccessCode;
      this.connection = connection;
      this.canceled = !!canceled2;
    }
  };
  function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
      headers["Authorization"] = "Firebase " + authToken;
    }
  }
  function addVersionHeader_(headers, firebaseVersion) {
    headers["X-Firebase-Storage-Version"] = "webjs/" + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : "AppManager");
  }
  function addGmpidHeader_(headers, appId) {
    if (appId) {
      headers["X-Firebase-GMPID"] = appId;
    }
  }
  function addAppCheckHeader_(headers, appCheckToken) {
    if (appCheckToken !== null) {
      headers["X-Firebase-AppCheck"] = appCheckToken;
    }
  }
  function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion, retry = true) {
    const queryPart = makeQueryString(requestInfo.urlParams);
    const url = requestInfo.url + queryPart;
    const headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers, firebaseVersion);
    addAppCheckHeader_(headers, appCheckToken);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory, retry);
  }
  function getBlobBuilder() {
    if (typeof BlobBuilder !== "undefined") {
      return BlobBuilder;
    } else if (typeof WebKitBlobBuilder !== "undefined") {
      return WebKitBlobBuilder;
    } else {
      return void 0;
    }
  }
  function getBlob$1(...args) {
    const BlobBuilder2 = getBlobBuilder();
    if (BlobBuilder2 !== void 0) {
      const bb = new BlobBuilder2();
      for (let i = 0; i < args.length; i++) {
        bb.append(args[i]);
      }
      return bb.getBlob();
    } else {
      if (isNativeBlobDefined()) {
        return new Blob(args);
      } else {
        throw new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
      }
    }
  }
  function sliceBlob(blob, start2, end) {
    if (blob.webkitSlice) {
      return blob.webkitSlice(start2, end);
    } else if (blob.mozSlice) {
      return blob.mozSlice(start2, end);
    } else if (blob.slice) {
      return blob.slice(start2, end);
    }
    return null;
  }
  function decodeBase64(encoded) {
    if (typeof atob === "undefined") {
      throw missingPolyFill("base-64");
    }
    return atob(encoded);
  }
  var StringFormat = {
    /**
     * Indicates the string should be interpreted "raw", that is, as normal text.
     * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
     * sequence.
     * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
     * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
     */
    RAW: "raw",
    /**
     * Indicates the string should be interpreted as base64-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */
    BASE64: "base64",
    /**
     * Indicates the string should be interpreted as base64url-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */
    BASE64URL: "base64url",
    /**
     * Indicates the string is a data URL, such as one obtained from
     * canvas.toDataURL().
     * Example: the string 'data:application/octet-stream;base64,aaaa'
     * becomes the byte sequence
     * 69 a6 9a
     * (the content-type "application/octet-stream" is also applied, but can
     * be overridden in the metadata object).
     */
    DATA_URL: "data_url"
  };
  var StringData = class {
    constructor(data, contentType) {
      this.data = data;
      this.contentType = contentType || null;
    }
  };
  function dataFromString(format, stringData) {
    switch (format) {
      case StringFormat.RAW:
        return new StringData(utf8Bytes_(stringData));
      case StringFormat.BASE64:
      case StringFormat.BASE64URL:
        return new StringData(base64Bytes_(format, stringData));
      case StringFormat.DATA_URL:
        return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
    }
    throw unknown();
  }
  function utf8Bytes_(value) {
    const b = [];
    for (let i = 0; i < value.length; i++) {
      let c = value.charCodeAt(i);
      if (c <= 127) {
        b.push(c);
      } else {
        if (c <= 2047) {
          b.push(192 | c >> 6, 128 | c & 63);
        } else {
          if ((c & 64512) === 55296) {
            const valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
            if (!valid) {
              b.push(239, 191, 189);
            } else {
              const hi = c;
              const lo = value.charCodeAt(++i);
              c = 65536 | (hi & 1023) << 10 | lo & 1023;
              b.push(240 | c >> 18, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | c & 63);
            }
          } else {
            if ((c & 64512) === 56320) {
              b.push(239, 191, 189);
            } else {
              b.push(224 | c >> 12, 128 | c >> 6 & 63, 128 | c & 63);
            }
          }
        }
      }
    }
    return new Uint8Array(b);
  }
  function percentEncodedBytes_(value) {
    let decoded;
    try {
      decoded = decodeURIComponent(value);
    } catch (e) {
      throw invalidFormat(StringFormat.DATA_URL, "Malformed data URL.");
    }
    return utf8Bytes_(decoded);
  }
  function base64Bytes_(format, value) {
    switch (format) {
      case StringFormat.BASE64: {
        const hasMinus = value.indexOf("-") !== -1;
        const hasUnder = value.indexOf("_") !== -1;
        if (hasMinus || hasUnder) {
          const invalidChar = hasMinus ? "-" : "_";
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64url encoded?");
        }
        break;
      }
      case StringFormat.BASE64URL: {
        const hasPlus = value.indexOf("+") !== -1;
        const hasSlash = value.indexOf("/") !== -1;
        if (hasPlus || hasSlash) {
          const invalidChar = hasPlus ? "+" : "/";
          throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
        }
        value = value.replace(/-/g, "+").replace(/_/g, "/");
        break;
      }
    }
    let bytes;
    try {
      bytes = decodeBase64(value);
    } catch (e) {
      if (e.message.includes("polyfill")) {
        throw e;
      }
      throw invalidFormat(format, "Invalid character found");
    }
    const array = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      array[i] = bytes.charCodeAt(i);
    }
    return array;
  }
  var DataURLParts = class {
    constructor(dataURL) {
      this.base64 = false;
      this.contentType = null;
      const matches = dataURL.match(/^data:([^,]+)?,/);
      if (matches === null) {
        throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
      }
      const middle = matches[1] || null;
      if (middle != null) {
        this.base64 = endsWith(middle, ";base64");
        this.contentType = this.base64 ? middle.substring(0, middle.length - ";base64".length) : middle;
      }
      this.rest = dataURL.substring(dataURL.indexOf(",") + 1);
    }
  };
  function dataURLBytes_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    if (parts.base64) {
      return base64Bytes_(StringFormat.BASE64, parts.rest);
    } else {
      return percentEncodedBytes_(parts.rest);
    }
  }
  function dataURLContentType_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    return parts.contentType;
  }
  function endsWith(s, end) {
    const longEnough = s.length >= end.length;
    if (!longEnough) {
      return false;
    }
    return s.substring(s.length - end.length) === end;
  }
  var FbsBlob = class _FbsBlob {
    constructor(data, elideCopy) {
      let size = 0;
      let blobType = "";
      if (isNativeBlob(data)) {
        this.data_ = data;
        size = data.size;
        blobType = data.type;
      } else if (data instanceof ArrayBuffer) {
        if (elideCopy) {
          this.data_ = new Uint8Array(data);
        } else {
          this.data_ = new Uint8Array(data.byteLength);
          this.data_.set(new Uint8Array(data));
        }
        size = this.data_.length;
      } else if (data instanceof Uint8Array) {
        if (elideCopy) {
          this.data_ = data;
        } else {
          this.data_ = new Uint8Array(data.length);
          this.data_.set(data);
        }
        size = data.length;
      }
      this.size_ = size;
      this.type_ = blobType;
    }
    size() {
      return this.size_;
    }
    type() {
      return this.type_;
    }
    slice(startByte, endByte) {
      if (isNativeBlob(this.data_)) {
        const realBlob = this.data_;
        const sliced = sliceBlob(realBlob, startByte, endByte);
        if (sliced === null) {
          return null;
        }
        return new _FbsBlob(sliced);
      } else {
        const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
        return new _FbsBlob(slice, true);
      }
    }
    static getBlob(...args) {
      if (isNativeBlobDefined()) {
        const blobby = args.map((val) => {
          if (val instanceof _FbsBlob) {
            return val.data_;
          } else {
            return val;
          }
        });
        return new _FbsBlob(getBlob$1.apply(null, blobby));
      } else {
        const uint8Arrays = args.map((val) => {
          if (isString(val)) {
            return dataFromString(StringFormat.RAW, val).data;
          } else {
            return val.data_;
          }
        });
        let finalLength = 0;
        uint8Arrays.forEach((array) => {
          finalLength += array.byteLength;
        });
        const merged = new Uint8Array(finalLength);
        let index = 0;
        uint8Arrays.forEach((array) => {
          for (let i = 0; i < array.length; i++) {
            merged[index++] = array[i];
          }
        });
        return new _FbsBlob(merged, true);
      }
    }
    uploadData() {
      return this.data_;
    }
  };
  function jsonObjectOrNull(s) {
    let obj;
    try {
      obj = JSON.parse(s);
    } catch (e) {
      return null;
    }
    if (isNonArrayObject(obj)) {
      return obj;
    } else {
      return null;
    }
  }
  function parent(path) {
    if (path.length === 0) {
      return null;
    }
    const index = path.lastIndexOf("/");
    if (index === -1) {
      return "";
    }
    const newPath = path.slice(0, index);
    return newPath;
  }
  function child(path, childPath) {
    const canonicalChildPath = childPath.split("/").filter((component) => component.length > 0).join("/");
    if (path.length === 0) {
      return canonicalChildPath;
    } else {
      return path + "/" + canonicalChildPath;
    }
  }
  function lastComponent(path) {
    const index = path.lastIndexOf("/", path.length - 2);
    if (index === -1) {
      return path;
    } else {
      return path.slice(index + 1);
    }
  }
  function noXform_(metadata, value) {
    return value;
  }
  var Mapping = class {
    constructor(server, local, writable, xform) {
      this.server = server;
      this.local = local || server;
      this.writable = !!writable;
      this.xform = xform || noXform_;
    }
  };
  var mappings_ = null;
  function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) {
      return fullPath;
    } else {
      return lastComponent(fullPath);
    }
  }
  function getMappings() {
    if (mappings_) {
      return mappings_;
    }
    const mappings = [];
    mappings.push(new Mapping("bucket"));
    mappings.push(new Mapping("generation"));
    mappings.push(new Mapping("metageneration"));
    mappings.push(new Mapping("name", "fullPath", true));
    function mappingsXformPath(_metadata, fullPath) {
      return xformPath(fullPath);
    }
    const nameMapping = new Mapping("name");
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    function xformSize(_metadata, size) {
      if (size !== void 0) {
        return Number(size);
      } else {
        return size;
      }
    }
    const sizeMapping = new Mapping("size");
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping("timeCreated"));
    mappings.push(new Mapping("updated"));
    mappings.push(new Mapping("md5Hash", null, true));
    mappings.push(new Mapping("cacheControl", null, true));
    mappings.push(new Mapping("contentDisposition", null, true));
    mappings.push(new Mapping("contentEncoding", null, true));
    mappings.push(new Mapping("contentLanguage", null, true));
    mappings.push(new Mapping("contentType", null, true));
    mappings.push(new Mapping("metadata", "customMetadata", true));
    mappings_ = mappings;
    return mappings_;
  }
  function addRef(metadata, service) {
    function generateRef() {
      const bucket = metadata["bucket"];
      const path = metadata["fullPath"];
      const loc = new Location(bucket, path);
      return service._makeStorageReference(loc);
    }
    Object.defineProperty(metadata, "ref", { get: generateRef });
  }
  function fromResource(service, resource, mappings) {
    const metadata = {};
    metadata["type"] = "file";
    const len = mappings.length;
    for (let i = 0; i < len; i++) {
      const mapping = mappings[i];
      metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
  }
  function fromResourceString(service, resourceString, mappings) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
      return null;
    }
    const resource = obj;
    return fromResource(service, resource, mappings);
  }
  function downloadUrlFromResourceString(metadata, resourceString, host, protocol) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
      return null;
    }
    if (!isString(obj["downloadTokens"])) {
      return null;
    }
    const tokens = obj["downloadTokens"];
    if (tokens.length === 0) {
      return null;
    }
    const encode = encodeURIComponent;
    const tokensList = tokens.split(",");
    const urls = tokensList.map((token) => {
      const bucket = metadata["bucket"];
      const path = metadata["fullPath"];
      const urlPart = "/b/" + encode(bucket) + "/o/" + encode(path);
      const base = makeUrl(urlPart, host, protocol);
      const queryString = makeQueryString({
        alt: "media",
        token
      });
      return base + queryString;
    });
    return urls[0];
  }
  function toResourceString(metadata, mappings) {
    const resource = {};
    const len = mappings.length;
    for (let i = 0; i < len; i++) {
      const mapping = mappings[i];
      if (mapping.writable) {
        resource[mapping.server] = metadata[mapping.local];
      }
    }
    return JSON.stringify(resource);
  }
  var RequestInfo = class {
    constructor(url, method, handler, timeout) {
      this.url = url;
      this.method = method;
      this.handler = handler;
      this.timeout = timeout;
      this.urlParams = {};
      this.headers = {};
      this.body = null;
      this.errorHandler = null;
      this.progressCallback = null;
      this.successCodes = [200];
      this.additionalRetryCodes = [];
    }
  };
  function handlerCheck(cndn) {
    if (!cndn) {
      throw unknown();
    }
  }
  function metadataHandler(service, mappings) {
    function handler(xhr, text) {
      const metadata = fromResourceString(service, text, mappings);
      handlerCheck(metadata !== null);
      return metadata;
    }
    return handler;
  }
  function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
      const metadata = fromResourceString(service, text, mappings);
      handlerCheck(metadata !== null);
      return downloadUrlFromResourceString(metadata, text, service.host, service._protocol);
    }
    return handler;
  }
  function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
      let newErr;
      if (xhr.getStatus() === 401) {
        if (
          // This exact message string is the only consistent part of the
          // server's error response that identifies it as an App Check error.
          xhr.getErrorText().includes("Firebase App Check token is invalid")
        ) {
          newErr = unauthorizedApp();
        } else {
          newErr = unauthenticated();
        }
      } else {
        if (xhr.getStatus() === 402) {
          newErr = quotaExceeded(location.bucket);
        } else {
          if (xhr.getStatus() === 403) {
            newErr = unauthorized(location.path);
          } else {
            newErr = err;
          }
        }
      }
      newErr.status = xhr.getStatus();
      newErr.serverResponse = err.serverResponse;
      return newErr;
    }
    return errorHandler;
  }
  function objectErrorHandler(location) {
    const shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
      let newErr = shared(xhr, err);
      if (xhr.getStatus() === 404) {
        newErr = objectNotFound(location.path);
      }
      newErr.serverResponse = err.serverResponse;
      return newErr;
    }
    return errorHandler;
  }
  function getDownloadUrl(service, location, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "GET";
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
  }
  function determineContentType_(metadata, blob) {
    return metadata && metadata["contentType"] || blob && blob.type() || "application/octet-stream";
  }
  function metadataForUpload_(location, blob, metadata) {
    const metadataClone = Object.assign({}, metadata);
    metadataClone["fullPath"] = location.path;
    metadataClone["size"] = blob.size();
    if (!metadataClone["contentType"]) {
      metadataClone["contentType"] = determineContentType_(null, blob);
    }
    return metadataClone;
  }
  function multipartUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const headers = {
      "X-Goog-Upload-Protocol": "multipart"
    };
    function genBoundary() {
      let str = "";
      for (let i = 0; i < 2; i++) {
        str = str + Math.random().toString().slice(2);
      }
      return str;
    }
    const boundary = genBoundary();
    headers["Content-Type"] = "multipart/related; boundary=" + boundary;
    const metadata_ = metadataForUpload_(location, blob, metadata);
    const metadataString = toResourceString(metadata_, mappings);
    const preBlobPart = "--" + boundary + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + metadataString + "\r\n--" + boundary + "\r\nContent-Type: " + metadata_["contentType"] + "\r\n\r\n";
    const postBlobPart = "\r\n--" + boundary + "--";
    const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
      throw cannotSliceBlob();
    }
    const urlParams = { name: metadata_["fullPath"] };
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = "POST";
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
  }
  var RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
  var textFactoryOverride = null;
  var XhrConnection = class {
    constructor() {
      this.sent_ = false;
      this.xhr_ = new XMLHttpRequest();
      this.initXhr();
      this.errorCode_ = ErrorCode.NO_ERROR;
      this.sendPromise_ = new Promise((resolve) => {
        this.xhr_.addEventListener("abort", () => {
          this.errorCode_ = ErrorCode.ABORT;
          resolve();
        });
        this.xhr_.addEventListener("error", () => {
          this.errorCode_ = ErrorCode.NETWORK_ERROR;
          resolve();
        });
        this.xhr_.addEventListener("load", () => {
          resolve();
        });
      });
    }
    send(url, method, body, headers) {
      if (this.sent_) {
        throw internalError("cannot .send() more than once");
      }
      this.sent_ = true;
      this.xhr_.open(method, url, true);
      if (headers !== void 0) {
        for (const key in headers) {
          if (headers.hasOwnProperty(key)) {
            this.xhr_.setRequestHeader(key, headers[key].toString());
          }
        }
      }
      if (body !== void 0) {
        this.xhr_.send(body);
      } else {
        this.xhr_.send();
      }
      return this.sendPromise_;
    }
    getErrorCode() {
      if (!this.sent_) {
        throw internalError("cannot .getErrorCode() before sending");
      }
      return this.errorCode_;
    }
    getStatus() {
      if (!this.sent_) {
        throw internalError("cannot .getStatus() before sending");
      }
      try {
        return this.xhr_.status;
      } catch (e) {
        return -1;
      }
    }
    getResponse() {
      if (!this.sent_) {
        throw internalError("cannot .getResponse() before sending");
      }
      return this.xhr_.response;
    }
    getErrorText() {
      if (!this.sent_) {
        throw internalError("cannot .getErrorText() before sending");
      }
      return this.xhr_.statusText;
    }
    /** Aborts the request. */
    abort() {
      this.xhr_.abort();
    }
    getResponseHeader(header) {
      return this.xhr_.getResponseHeader(header);
    }
    addUploadProgressListener(listener) {
      if (this.xhr_.upload != null) {
        this.xhr_.upload.addEventListener("progress", listener);
      }
    }
    removeUploadProgressListener(listener) {
      if (this.xhr_.upload != null) {
        this.xhr_.upload.removeEventListener("progress", listener);
      }
    }
  };
  var XhrTextConnection = class extends XhrConnection {
    initXhr() {
      this.xhr_.responseType = "text";
    }
  };
  function newTextConnection() {
    return textFactoryOverride ? textFactoryOverride() : new XhrTextConnection();
  }
  var Reference = class _Reference {
    constructor(_service, location) {
      this._service = _service;
      if (location instanceof Location) {
        this._location = location;
      } else {
        this._location = Location.makeFromUrl(location, _service.host);
      }
    }
    /**
     * Returns the URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    toString() {
      return "gs://" + this._location.bucket + "/" + this._location.path;
    }
    _newRef(service, location) {
      return new _Reference(service, location);
    }
    /**
     * A reference to the root of this object's bucket.
     */
    get root() {
      const location = new Location(this._location.bucket, "");
      return this._newRef(this._service, location);
    }
    /**
     * The name of the bucket containing this reference's object.
     */
    get bucket() {
      return this._location.bucket;
    }
    /**
     * The full path of this object.
     */
    get fullPath() {
      return this._location.path;
    }
    /**
     * The short name of this object, which is the last component of the full path.
     * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
     */
    get name() {
      return lastComponent(this._location.path);
    }
    /**
     * The `StorageService` instance this `StorageReference` is associated with.
     */
    get storage() {
      return this._service;
    }
    /**
     * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
     * this reference is the root.
     */
    get parent() {
      const newPath = parent(this._location.path);
      if (newPath === null) {
        return null;
      }
      const location = new Location(this._location.bucket, newPath);
      return new _Reference(this._service, location);
    }
    /**
     * Utility function to throw an error in methods that do not accept a root reference.
     */
    _throwIfRoot(name4) {
      if (this._location.path === "") {
        throw invalidRootOperation(name4);
      }
    }
  };
  function uploadBytes$1(ref2, data, metadata) {
    ref2._throwIfRoot("uploadBytes");
    const requestInfo = multipartUpload(ref2.storage, ref2._location, getMappings(), new FbsBlob(data, true), metadata);
    return ref2.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((finalMetadata) => {
      return {
        metadata: finalMetadata,
        ref: ref2
      };
    });
  }
  function uploadString$1(ref2, value, format = StringFormat.RAW, metadata) {
    ref2._throwIfRoot("uploadString");
    const data = dataFromString(format, value);
    const metadataClone = Object.assign({}, metadata);
    if (metadataClone["contentType"] == null && data.contentType != null) {
      metadataClone["contentType"] = data.contentType;
    }
    return uploadBytes$1(ref2, data.data, metadataClone);
  }
  function getDownloadURL$1(ref2) {
    ref2._throwIfRoot("getDownloadURL");
    const requestInfo = getDownloadUrl(ref2.storage, ref2._location, getMappings());
    return ref2.storage.makeRequestWithTokens(requestInfo, newTextConnection).then((url) => {
      if (url === null) {
        throw noDownloadURL();
      }
      return url;
    });
  }
  function _getChild$1(ref2, childPath) {
    const newPath = child(ref2._location.path, childPath);
    const location = new Location(ref2._location.bucket, newPath);
    return new Reference(ref2.storage, location);
  }
  function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
  }
  function refFromURL(service, url) {
    return new Reference(service, url);
  }
  function refFromPath(ref2, path) {
    if (ref2 instanceof FirebaseStorageImpl) {
      const service = ref2;
      if (service._bucket == null) {
        throw noDefaultBucket();
      }
      const reference = new Reference(service, service._bucket);
      if (path != null) {
        return refFromPath(reference, path);
      } else {
        return reference;
      }
    } else {
      if (path !== void 0) {
        return _getChild$1(ref2, path);
      } else {
        return ref2;
      }
    }
  }
  function ref$1(serviceOrRef, pathOrUrl) {
    if (pathOrUrl && isUrl(pathOrUrl)) {
      if (serviceOrRef instanceof FirebaseStorageImpl) {
        return refFromURL(serviceOrRef, pathOrUrl);
      } else {
        throw invalidArgument("To use ref(service, url), the first argument must be a Storage instance.");
      }
    } else {
      return refFromPath(serviceOrRef, pathOrUrl);
    }
  }
  function extractBucket(host, config) {
    const bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
    if (bucketString == null) {
      return null;
    }
    return Location.makeFromBucketSpec(bucketString, host);
  }
  function connectStorageEmulator$1(storage2, host, port, options = {}) {
    storage2.host = "".concat(host, ":").concat(port);
    storage2._protocol = "http";
    const { mockUserToken } = options;
    if (mockUserToken) {
      storage2._overrideAuthToken = typeof mockUserToken === "string" ? mockUserToken : createMockUserToken(mockUserToken, storage2.app.options.projectId);
    }
  }
  var FirebaseStorageImpl = class {
    constructor(app, _authProvider, _appCheckProvider, _url, _firebaseVersion) {
      this.app = app;
      this._authProvider = _authProvider;
      this._appCheckProvider = _appCheckProvider;
      this._url = _url;
      this._firebaseVersion = _firebaseVersion;
      this._bucket = null;
      this._host = DEFAULT_HOST;
      this._protocol = "https";
      this._appId = null;
      this._deleted = false;
      this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
      this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
      this._requests = /* @__PURE__ */ new Set();
      if (_url != null) {
        this._bucket = Location.makeFromBucketSpec(_url, this._host);
      } else {
        this._bucket = extractBucket(this._host, this.app.options);
      }
    }
    /**
     * The host string for this service, in the form of `host` or
     * `host:port`.
     */
    get host() {
      return this._host;
    }
    set host(host) {
      this._host = host;
      if (this._url != null) {
        this._bucket = Location.makeFromBucketSpec(this._url, host);
      } else {
        this._bucket = extractBucket(host, this.app.options);
      }
    }
    /**
     * The maximum time to retry uploads in milliseconds.
     */
    get maxUploadRetryTime() {
      return this._maxUploadRetryTime;
    }
    set maxUploadRetryTime(time) {
      validateNumber(
        "time",
        /* minValue=*/
        0,
        /* maxValue= */
        Number.POSITIVE_INFINITY,
        time
      );
      this._maxUploadRetryTime = time;
    }
    /**
     * The maximum time to retry operations other than uploads or downloads in
     * milliseconds.
     */
    get maxOperationRetryTime() {
      return this._maxOperationRetryTime;
    }
    set maxOperationRetryTime(time) {
      validateNumber(
        "time",
        /* minValue=*/
        0,
        /* maxValue= */
        Number.POSITIVE_INFINITY,
        time
      );
      this._maxOperationRetryTime = time;
    }
    async _getAuthToken() {
      if (this._overrideAuthToken) {
        return this._overrideAuthToken;
      }
      const auth = this._authProvider.getImmediate({ optional: true });
      if (auth) {
        const tokenData = await auth.getToken();
        if (tokenData !== null) {
          return tokenData.accessToken;
        }
      }
      return null;
    }
    async _getAppCheckToken() {
      const appCheck = this._appCheckProvider.getImmediate({ optional: true });
      if (appCheck) {
        const result = await appCheck.getToken();
        return result.token;
      }
      return null;
    }
    /**
     * Stop running requests and prevent more from being created.
     */
    _delete() {
      if (!this._deleted) {
        this._deleted = true;
        this._requests.forEach((request) => request.cancel());
        this._requests.clear();
      }
      return Promise.resolve();
    }
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     */
    _makeStorageReference(loc) {
      return new Reference(this, loc);
    }
    /**
     * @param requestInfo - HTTP RequestInfo object
     * @param authToken - Firebase auth token
     */
    _makeRequest(requestInfo, requestFactory, authToken, appCheckToken, retry = true) {
      if (!this._deleted) {
        const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion, retry);
        this._requests.add(request);
        request.getPromise().then(() => this._requests.delete(request), () => this._requests.delete(request));
        return request;
      } else {
        return new FailRequest(appDeleted());
      }
    }
    async makeRequestWithTokens(requestInfo, requestFactory) {
      const [authToken, appCheckToken] = await Promise.all([
        this._getAuthToken(),
        this._getAppCheckToken()
      ]);
      return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
    }
  };
  var name3 = "@firebase/storage";
  var version3 = "0.13.1";
  var STORAGE_TYPE = "storage";
  function uploadString(ref2, value, format, metadata) {
    ref2 = getModularInstance(ref2);
    return uploadString$1(ref2, value, format, metadata);
  }
  function getDownloadURL(ref2) {
    ref2 = getModularInstance(ref2);
    return getDownloadURL$1(ref2);
  }
  function ref(serviceOrRef, pathOrUrl) {
    serviceOrRef = getModularInstance(serviceOrRef);
    return ref$1(serviceOrRef, pathOrUrl);
  }
  function getStorage(app = getApp(), bucketUrl) {
    app = getModularInstance(app);
    const storageProvider = _getProvider(app, STORAGE_TYPE);
    const storageInstance = storageProvider.getImmediate({
      identifier: bucketUrl
    });
    const emulator = getDefaultEmulatorHostnameAndPort("storage");
    if (emulator) {
      connectStorageEmulator(storageInstance, ...emulator);
    }
    return storageInstance;
  }
  function connectStorageEmulator(storage2, host, port, options = {}) {
    connectStorageEmulator$1(storage2, host, port, options);
  }
  function factory(container, { instanceIdentifier: url }) {
    const app = container.getProvider("app").getImmediate();
    const authProvider = container.getProvider("auth-internal");
    const appCheckProvider = container.getProvider("app-check-internal");
    return new FirebaseStorageImpl(app, authProvider, appCheckProvider, url, SDK_VERSION);
  }
  function registerStorage() {
    _registerComponent(new Component(
      STORAGE_TYPE,
      factory,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ).setMultipleInstances(true));
    registerVersion(name3, version3, "");
    registerVersion(name3, version3, "esm2017");
  }
  registerStorage();

  // public/home.js
  var firebaseConfig = {
    apiKey: "AIzaSyAFayRb90ywbg82EcLOnH5iBDm3qnZx9TU",
    authDomain: "rd-year-project-1f41d.firebaseapp.com",
    projectId: "rd-year-project-1f41d",
    storageBucket: "rd-year-project-1f41d.appspot.com",
    messagingSenderId: "823208675027",
    appId: "1:823208675027:web:040ff96eac0fc89b0e3626",
    measurementId: "G-86DQSH17PT"
  };
  initializeApp(firebaseConfig);
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var emailtext;
  var passwordtext;
  var username;
  var status = "";
  var userCrds;
  async function getRef_json(refItem) {
    const url = await getDownloadURL(refItem);
    const response = await fetch(url, { mode: "cors" });
    let data = await response.text();
    data = JSON.parse(data);
    return data;
  }
  function getUsername(email2) {
    return email2.split("@gmail.com")[0];
  }
  function isUser(email2) {
    let username2 = getUsername(email2);
    return credsArr[username2] != void 0;
  }
  function removeErrorBorder(elementsArr) {
    for (let i = 0; i < elementsArr.length; i++) {
      document.getElementById(elementsArr[i]).classList.remove("errorBorder");
    }
  }
  function errorInput(elementsArr) {
    for (let i = 0; i < elementsArr.length; i++) {
      document.getElementById(elementsArr[i]).classList.add("errorBorder");
    }
    setTimeout(() => {
      removeErrorBorder(elementsArr);
    }, 3e3);
  }
  var storage = getStorage();
  var userCreds = ref(storage, "userCreds.json");
  var credsArr;
  async function loadInfo() {
    credsArr = await Promise.resolve(getRef_json(userCreds));
    console.log(credsArr);
    console.log("READ FROM THE DATABASE");
  }
  loadInfo();
  var signInButton = document.getElementById("SignInButton");
  email.addEventListener("click", () => {
    removeErrorBorder(["email"]);
  });
  password.addEventListener("click", () => {
    removeErrorBorder(["password"]);
  });
  function displayStatus(status2) {
    document.getElementById("statusText").innerHTML = status2;
  }
  function inputValidation(emailtext2, passwordtext2) {
    if (emailtext2 == "" && passwordtext2 == "") {
      status = "Please enter email and password";
    } else if (emailtext2 != "" && passwordtext2 == "") {
      status = "Please enter password";
    } else if (emailtext2 == "" && passwordtext2 != "") {
      status = "Please enter email";
    } else if (isUser(emailtext2) == false) {
      status = "no account associated with ".concat(emailtext2);
    }
    if (status != "") {
      errorInput(["email", "password"]);
      var errorContainer = document.getElementById("errorContainer");
      errorContainer.style.display = "block";
      displayStatus(status);
    }
  }
  signInButton.addEventListener("click", () => {
    emailtext = email.value;
    passwordtext = password.value;
    console.log("email: ", emailtext);
    username = getUsername(emailtext);
    userCrds = credsArr[username];
    if (userCrds == void 0) {
      inputValidation(emailtext, passwordtext);
    } else {
      if (emailtext != userCrds.email || passwordtext != userCrds.password) {
        status = "incorrect username or password";
      }
      if (emailtext == userCrds.email && passwordtext == userCrds.password) {
        status = "".concat(username, " has logged in successfully");
      }
    }
  });
  var createAccount = document.getElementById("createAccount");
  createAccount.addEventListener("click", () => {
    signInButton.innerHTML = "<h3>Create Account<h3>";
    createAccount.style.display = "none";
    emailtext = email.value;
    passwordtext = password.value;
    let newUser = {
      "email": emailtext,
      "password": passwordtext
    };
    credsArr["".concat(username)] = newUser;
    inputValidation(emailtext, passwordtext);
    status = "New user created";
    displayStatus(status);
    console.log(userCrds);
    uploadString(userCreds, JSON.stringify(credsArr)).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  });
  function testInput() {
    email.value = "user4@gmail.com";
    password.value = "user4_password!";
    console.log("inputs set");
  }
  testInput();
})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/storage/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9jb25zdGFudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9hc3NlcnQudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9jcnlwdC50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2RlZXBDb3B5LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvZ2xvYmFsLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvZGVmYXVsdHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9kZWZlcnJlZC50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2VtdWxhdG9yLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvZW52aXJvbm1lbnQudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9lcnJvcnMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9qc29uLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvand0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvb2JqLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvcHJvbWlzZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3F1ZXJ5LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvc2hhMS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3N1YnNjcmliZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL3ZhbGlkYXRpb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy91dGY4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvdXVpZC50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvc3JjL2V4cG9uZW50aWFsX2JhY2tvZmYudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS91dGlsL3NyYy9mb3JtYXR0ZXJzLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9zcmMvY29tcGF0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvY29tcG9uZW50L3NyYy9jb21wb25lbnQudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbnN0YW50cy50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9zcmMvcHJvdmlkZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvc3JjL2NvbXBvbmVudF9jb250YWluZXIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9sb2dnZXIvc3JjL2xvZ2dlci50cyIsICIuLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL3dyYXAtaWRiLXZhbHVlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3BsYXRmb3JtTG9nZ2VyU2VydmljZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvbG9nZ2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9jb25zdGFudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ludGVybmFsLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9lcnJvcnMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2ZpcmViYXNlQXBwLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9maXJlYmFzZVNlcnZlckFwcC50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9zcmMvYXBpLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvYXBwL3NyYy9pbmRleGVkZGIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2hlYXJ0YmVhdFNlcnZpY2UudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL3JlZ2lzdGVyQ29yZUNvbXBvbmVudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hcHAvc3JjL2luZGV4LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hcHAvaW5kZXgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy9pbXBsZW1lbnRhdGlvbi9jb25zdGFudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy9pbXBsZW1lbnRhdGlvbi9lcnJvci50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2ltcGxlbWVudGF0aW9uL2xvY2F0aW9uLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvaW1wbGVtZW50YXRpb24vZmFpbHJlcXVlc3QudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy9pbXBsZW1lbnRhdGlvbi9iYWNrb2ZmLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvaW1wbGVtZW50YXRpb24vdHlwZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2ltcGxlbWVudGF0aW9uL3VybC50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2ltcGxlbWVudGF0aW9uL2Nvbm5lY3Rpb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy9pbXBsZW1lbnRhdGlvbi91dGlscy50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2ltcGxlbWVudGF0aW9uL3JlcXVlc3QudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy9pbXBsZW1lbnRhdGlvbi9mcy50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL3BsYXRmb3JtL2Jyb3dzZXIvYmFzZTY0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvaW1wbGVtZW50YXRpb24vc3RyaW5nLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvaW1wbGVtZW50YXRpb24vYmxvYi50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2ltcGxlbWVudGF0aW9uL2pzb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy9pbXBsZW1lbnRhdGlvbi9wYXRoLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvaW1wbGVtZW50YXRpb24vbWV0YWRhdGEudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy9pbXBsZW1lbnRhdGlvbi9saXN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvaW1wbGVtZW50YXRpb24vcmVxdWVzdGluZm8udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy9pbXBsZW1lbnRhdGlvbi9yZXF1ZXN0cy50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2ltcGxlbWVudGF0aW9uL3Rhc2tlbnVtcy50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2ltcGxlbWVudGF0aW9uL29ic2VydmVyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvaW1wbGVtZW50YXRpb24vYXN5bmMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy9wbGF0Zm9ybS9icm93c2VyL2Nvbm5lY3Rpb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9zdG9yYWdlL3NyYy90YXNrLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvcmVmZXJlbmNlLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvc2VydmljZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2NvbnN0YW50cy50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2FwaS50cyIsICIuLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3N0b3JhZ2Uvc3JjL2FwaS5icm93c2VyLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9zcmMvaW5kZXgudHMiLCAiaG9tZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEZpcmViYXNlIGNvbnN0YW50cy4gIFNvbWUgb2YgdGhlc2UgKEBkZWZpbmVzKSBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBjb21waWxlLXRpbWUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IENPTlNUQU5UUyA9IHtcbiAgLyoqXG4gICAqIEBkZWZpbmUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBpcyB0aGUgY2xpZW50IE5vZGUuanMgU0RLLlxuICAgKi9cbiAgTk9ERV9DTElFTlQ6IGZhbHNlLFxuICAvKipcbiAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBBZG1pbiBOb2RlLmpzIFNESy5cbiAgICovXG4gIE5PREVfQURNSU46IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBGaXJlYmFzZSBTREsgVmVyc2lvblxuICAgKi9cbiAgU0RLX1ZFUlNJT046ICcke0pTQ09SRV9WRVJTSU9OfSdcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIFRocm93cyBhbiBlcnJvciBpZiB0aGUgcHJvdmlkZWQgYXNzZXJ0aW9uIGlzIGZhbHN5XG4gKi9cbmV4cG9ydCBjb25zdCBhc3NlcnQgPSBmdW5jdGlvbiAoYXNzZXJ0aW9uOiB1bmtub3duLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKCFhc3NlcnRpb24pIHtcbiAgICB0aHJvdyBhc3NlcnRpb25FcnJvcihtZXNzYWdlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIEVycm9yIG9iamVjdCBzdWl0YWJsZSBmb3IgdGhyb3dpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlOiBzdHJpbmcpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgRXJyb3IoXG4gICAgJ0ZpcmViYXNlIERhdGFiYXNlICgnICtcbiAgICAgIENPTlNUQU5UUy5TREtfVkVSU0lPTiArXG4gICAgICAnKSBJTlRFUk5BTCBBU1NFUlQgRkFJTEVEOiAnICtcbiAgICAgIG1lc3NhZ2VcbiAgKTtcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuY29uc3Qgc3RyaW5nVG9CeXRlQXJyYXkgPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXG4gIGNvbnN0IG91dDogbnVtYmVyW10gPSBbXTtcbiAgbGV0IHAgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgIG91dFtwKytdID0gYztcbiAgICB9IGVsc2UgaWYgKGMgPCAyMDQ4KSB7XG4gICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xuICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiZcbiAgICAgIGkgKyAxIDwgc3RyLmxlbmd0aCAmJlxuICAgICAgKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmMwMCkgPT09IDB4ZGMwMFxuICAgICkge1xuICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcbiAgICAgIGMgPSAweDEwMDAwICsgKChjICYgMHgwM2ZmKSA8PCAxMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4MDNmZik7XG4gICAgICBvdXRbcCsrXSA9IChjID4+IDE4KSB8IDI0MDtcbiAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcbiAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xuICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XG4gICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIFR1cm5zIGFuIGFycmF5IG9mIG51bWJlcnMgaW50byB0aGUgc3RyaW5nIGdpdmVuIGJ5IHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZVxuICogY2hhcmFjdGVycyB0byB3aGljaCB0aGUgbnVtYmVycyBjb3JyZXNwb25kLlxuICogQHBhcmFtIGJ5dGVzIEFycmF5IG9mIG51bWJlcnMgcmVwcmVzZW50aW5nIGNoYXJhY3RlcnMuXG4gKiBAcmV0dXJuIFN0cmluZ2lmaWNhdGlvbiBvZiB0aGUgYXJyYXkuXG4gKi9cbmNvbnN0IGJ5dGVBcnJheVRvU3RyaW5nID0gZnVuY3Rpb24gKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXG4gIGNvbnN0IG91dDogc3RyaW5nW10gPSBbXTtcbiAgbGV0IHBvcyA9IDAsXG4gICAgYyA9IDA7XG4gIHdoaWxlIChwb3MgPCBieXRlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBjMSA9IGJ5dGVzW3BvcysrXTtcbiAgICBpZiAoYzEgPCAxMjgpIHtcbiAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZShjMSk7XG4gICAgfSBlbHNlIGlmIChjMSA+IDE5MSAmJiBjMSA8IDIyNCkge1xuICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XG4gICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjMSAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XG4gICAgfSBlbHNlIGlmIChjMSA+IDIzOSAmJiBjMSA8IDM2NSkge1xuICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcbiAgICAgIGNvbnN0IGMyID0gYnl0ZXNbcG9zKytdO1xuICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XG4gICAgICBjb25zdCBjNCA9IGJ5dGVzW3BvcysrXTtcbiAgICAgIGNvbnN0IHUgPVxuICAgICAgICAoKChjMSAmIDcpIDw8IDE4KSB8ICgoYzIgJiA2MykgPDwgMTIpIHwgKChjMyAmIDYzKSA8PCA2KSB8IChjNCAmIDYzKSkgLVxuICAgICAgICAweDEwMDAwO1xuICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCArICh1ID4+IDEwKSk7XG4gICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkYzAwICsgKHUgJiAxMDIzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGMyID0gYnl0ZXNbcG9zKytdO1xuICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XG4gICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICgoYzEgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dC5qb2luKCcnKTtcbn07XG5cbmludGVyZmFjZSBCYXNlNjQge1xuICBieXRlVG9DaGFyTWFwXzogeyBba2V5OiBudW1iZXJdOiBzdHJpbmcgfSB8IG51bGw7XG4gIGNoYXJUb0J5dGVNYXBfOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9IHwgbnVsbDtcbiAgYnl0ZVRvQ2hhck1hcFdlYlNhZmVfOiB7IFtrZXk6IG51bWJlcl06IHN0cmluZyB9IHwgbnVsbDtcbiAgY2hhclRvQnl0ZU1hcFdlYlNhZmVfOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9IHwgbnVsbDtcbiAgRU5DT0RFRF9WQUxTX0JBU0U6IHN0cmluZztcbiAgcmVhZG9ubHkgRU5DT0RFRF9WQUxTOiBzdHJpbmc7XG4gIHJlYWRvbmx5IEVOQ09ERURfVkFMU19XRUJTQUZFOiBzdHJpbmc7XG4gIEhBU19OQVRJVkVfU1VQUE9SVDogYm9vbGVhbjtcbiAgZW5jb2RlQnl0ZUFycmF5KGlucHV0OiBudW1iZXJbXSB8IFVpbnQ4QXJyYXksIHdlYlNhZmU/OiBib29sZWFuKTogc3RyaW5nO1xuICBlbmNvZGVTdHJpbmcoaW5wdXQ6IHN0cmluZywgd2ViU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XG4gIGRlY29kZVN0cmluZyhpbnB1dDogc3RyaW5nLCB3ZWJTYWZlOiBib29sZWFuKTogc3RyaW5nO1xuICBkZWNvZGVTdHJpbmdUb0J5dGVBcnJheShpbnB1dDogc3RyaW5nLCB3ZWJTYWZlOiBib29sZWFuKTogbnVtYmVyW107XG4gIGluaXRfKCk6IHZvaWQ7XG59XG5cbi8vIFdlIGRlZmluZSBpdCBhcyBhbiBvYmplY3QgbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY2xhc3MgYmVjYXVzZSBhIGNsYXNzIGNvbXBpbGVkIGRvd24gdG8gZXM1IGNhbid0XG4vLyBiZSB0cmVlc2hha2VkLiBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTY5MVxuLy8gU3RhdGljIGxvb2t1cCBtYXBzLCBsYXppbHkgcG9wdWxhdGVkIGJ5IGluaXRfKClcbmV4cG9ydCBjb25zdCBiYXNlNjQ6IEJhc2U2NCA9IHtcbiAgLyoqXG4gICAqIE1hcHMgYnl0ZXMgdG8gY2hhcmFjdGVycy5cbiAgICovXG4gIGJ5dGVUb0NoYXJNYXBfOiBudWxsLFxuXG4gIC8qKlxuICAgKiBNYXBzIGNoYXJhY3RlcnMgdG8gYnl0ZXMuXG4gICAqL1xuICBjaGFyVG9CeXRlTWFwXzogbnVsbCxcblxuICAvKipcbiAgICogTWFwcyBieXRlcyB0byB3ZWJzYWZlIGNoYXJhY3RlcnMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBieXRlVG9DaGFyTWFwV2ViU2FmZV86IG51bGwsXG5cbiAgLyoqXG4gICAqIE1hcHMgd2Vic2FmZSBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2hhclRvQnl0ZU1hcFdlYlNhZmVfOiBudWxsLFxuXG4gIC8qKlxuICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldCwgc2hhcmVkIGJldHdlZW5cbiAgICogRU5DT0RFRF9WQUxTIGFuZCBFTkNPREVEX1ZBTFNfV0VCU0FGRVxuICAgKi9cbiAgRU5DT0RFRF9WQUxTX0JBU0U6XG4gICAgJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJyArICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicgKyAnMDEyMzQ1Njc4OScsXG5cbiAgLyoqXG4gICAqIE91ciBkZWZhdWx0IGFscGhhYmV0LiBWYWx1ZSA2NCAoPSkgaXMgc3BlY2lhbDsgaXQgbWVhbnMgXCJub3RoaW5nLlwiXG4gICAqL1xuICBnZXQgRU5DT0RFRF9WQUxTKCkge1xuICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJysvPSc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE91ciB3ZWJzYWZlIGFscGhhYmV0LlxuICAgKi9cbiAgZ2V0IEVOQ09ERURfVkFMU19XRUJTQUZFKCkge1xuICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJy1fLic7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHRoZSBhdG9iIGFuZCBidG9hIGZ1bmN0aW9ucy4gVGhpcyBleHRlbnNpb25cbiAgICogc3RhcnRlZCBhdCBNb3ppbGxhIGJ1dCBpcyBub3cgaW1wbGVtZW50ZWQgYnkgbWFueSBicm93c2Vycy4gV2UgdXNlIHRoZVxuICAgKiBBU1NVTUVfKiB2YXJpYWJsZXMgdG8gYXZvaWQgcHVsbGluZyBpbiB0aGUgZnVsbCB1c2VyYWdlbnQgZGV0ZWN0aW9uIGxpYnJhcnlcbiAgICogYnV0IHN0aWxsIGFsbG93aW5nIHRoZSBzdGFuZGFyZCBwZXItYnJvd3NlciBjb21waWxhdGlvbnMuXG4gICAqXG4gICAqL1xuICBIQVNfTkFUSVZFX1NVUFBPUlQ6IHR5cGVvZiBhdG9iID09PSAnZnVuY3Rpb24nLFxuXG4gIC8qKlxuICAgKiBCYXNlNjQtZW5jb2RlIGFuIGFycmF5IG9mIGJ5dGVzLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXQgQW4gYXJyYXkgb2YgYnl0ZXMgKG51bWJlcnMgd2l0aFxuICAgKiAgICAgdmFsdWUgaW4gWzAsIDI1NV0pIHRvIGVuY29kZS5cbiAgICogQHBhcmFtIHdlYlNhZmUgQm9vbGVhbiBpbmRpY2F0aW5nIHdlIHNob3VsZCB1c2UgdGhlXG4gICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cbiAgICogQHJldHVybiBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nLlxuICAgKi9cbiAgZW5jb2RlQnl0ZUFycmF5KGlucHV0OiBudW1iZXJbXSB8IFVpbnQ4QXJyYXksIHdlYlNhZmU/OiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICB0aHJvdyBFcnJvcignZW5jb2RlQnl0ZUFycmF5IHRha2VzIGFuIGFycmF5IGFzIGEgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0XygpO1xuXG4gICAgY29uc3QgYnl0ZVRvQ2hhck1hcCA9IHdlYlNhZmVcbiAgICAgID8gdGhpcy5ieXRlVG9DaGFyTWFwV2ViU2FmZV8hXG4gICAgICA6IHRoaXMuYnl0ZVRvQ2hhck1hcF8hO1xuXG4gICAgY29uc3Qgb3V0cHV0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICBjb25zdCBieXRlMSA9IGlucHV0W2ldO1xuICAgICAgY29uc3QgaGF2ZUJ5dGUyID0gaSArIDEgPCBpbnB1dC5sZW5ndGg7XG4gICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGlucHV0W2kgKyAxXSA6IDA7XG4gICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpICsgMiA8IGlucHV0Lmxlbmd0aDtcbiAgICAgIGNvbnN0IGJ5dGUzID0gaGF2ZUJ5dGUzID8gaW5wdXRbaSArIDJdIDogMDtcblxuICAgICAgY29uc3Qgb3V0Qnl0ZTEgPSBieXRlMSA+PiAyO1xuICAgICAgY29uc3Qgb3V0Qnl0ZTIgPSAoKGJ5dGUxICYgMHgwMykgPDwgNCkgfCAoYnl0ZTIgPj4gNCk7XG4gICAgICBsZXQgb3V0Qnl0ZTMgPSAoKGJ5dGUyICYgMHgwZikgPDwgMikgfCAoYnl0ZTMgPj4gNik7XG4gICAgICBsZXQgb3V0Qnl0ZTQgPSBieXRlMyAmIDB4M2Y7XG5cbiAgICAgIGlmICghaGF2ZUJ5dGUzKSB7XG4gICAgICAgIG91dEJ5dGU0ID0gNjQ7XG5cbiAgICAgICAgaWYgKCFoYXZlQnl0ZTIpIHtcbiAgICAgICAgICBvdXRCeXRlMyA9IDY0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG91dHB1dC5wdXNoKFxuICAgICAgICBieXRlVG9DaGFyTWFwW291dEJ5dGUxXSxcbiAgICAgICAgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMl0sXG4gICAgICAgIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTNdLFxuICAgICAgICBieXRlVG9DaGFyTWFwW291dEJ5dGU0XVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBCYXNlNjQtZW5jb2RlIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXQgQSBzdHJpbmcgdG8gZW5jb2RlLlxuICAgKiBAcGFyYW0gd2ViU2FmZSBJZiB0cnVlLCB3ZSBzaG91bGQgdXNlIHRoZVxuICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXG4gICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cbiAgICovXG4gIGVuY29kZVN0cmluZyhpbnB1dDogc3RyaW5nLCB3ZWJTYWZlPzogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgLy8gU2hvcnRjdXQgZm9yIE1vemlsbGEgYnJvd3NlcnMgdGhhdCBpbXBsZW1lbnRcbiAgICAvLyBhIG5hdGl2ZSBiYXNlNjQgZW5jb2RlciBpbiB0aGUgZm9ybSBvZiBcImJ0b2EvYXRvYlwiXG4gICAgaWYgKHRoaXMuSEFTX05BVElWRV9TVVBQT1JUICYmICF3ZWJTYWZlKSB7XG4gICAgICByZXR1cm4gYnRvYShpbnB1dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVuY29kZUJ5dGVBcnJheShzdHJpbmdUb0J5dGVBcnJheShpbnB1dCksIHdlYlNhZmUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBCYXNlNjQtZGVjb2RlIGEgc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gaW5wdXQgdG8gZGVjb2RlLlxuICAgKiBAcGFyYW0gd2ViU2FmZSBUcnVlIGlmIHdlIHNob3VsZCB1c2UgdGhlXG4gICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cbiAgICogQHJldHVybiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxuICAgKi9cbiAgZGVjb2RlU3RyaW5nKGlucHV0OiBzdHJpbmcsIHdlYlNhZmU6IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgIC8vIFNob3J0Y3V0IGZvciBNb3ppbGxhIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50XG4gICAgLy8gYSBuYXRpdmUgYmFzZTY0IGVuY29kZXIgaW4gdGhlIGZvcm0gb2YgXCJidG9hL2F0b2JcIlxuICAgIGlmICh0aGlzLkhBU19OQVRJVkVfU1VQUE9SVCAmJiAhd2ViU2FmZSkge1xuICAgICAgcmV0dXJuIGF0b2IoaW5wdXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZUFycmF5VG9TdHJpbmcodGhpcy5kZWNvZGVTdHJpbmdUb0J5dGVBcnJheShpbnB1dCwgd2ViU2FmZSkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBCYXNlNjQtZGVjb2RlIGEgc3RyaW5nLlxuICAgKlxuICAgKiBJbiBiYXNlLTY0IGRlY29kaW5nLCBncm91cHMgb2YgZm91ciBjaGFyYWN0ZXJzIGFyZSBjb252ZXJ0ZWQgaW50byB0aHJlZVxuICAgKiBieXRlcy4gIElmIHRoZSBlbmNvZGVyIGRpZCBub3QgYXBwbHkgcGFkZGluZywgdGhlIGlucHV0IGxlbmd0aCBtYXkgbm90XG4gICAqIGJlIGEgbXVsdGlwbGUgb2YgNC5cbiAgICpcbiAgICogSW4gdGhpcyBjYXNlLCB0aGUgbGFzdCBncm91cCB3aWxsIGhhdmUgZmV3ZXIgdGhhbiA0IGNoYXJhY3RlcnMsIGFuZFxuICAgKiBwYWRkaW5nIHdpbGwgYmUgaW5mZXJyZWQuICBJZiB0aGUgZ3JvdXAgaGFzIG9uZSBvciB0d28gY2hhcmFjdGVycywgaXQgZGVjb2Rlc1xuICAgKiB0byBvbmUgYnl0ZS4gIElmIHRoZSBncm91cCBoYXMgdGhyZWUgY2hhcmFjdGVycywgaXQgZGVjb2RlcyB0byB0d28gYnl0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBpbnB1dCBJbnB1dCB0byBkZWNvZGUuXG4gICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGUgd2ViLXNhZmUgYWxwaGFiZXQuXG4gICAqIEByZXR1cm4gYnl0ZXMgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxuICAgKi9cbiAgZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQ6IHN0cmluZywgd2ViU2FmZTogYm9vbGVhbik6IG51bWJlcltdIHtcbiAgICB0aGlzLmluaXRfKCk7XG5cbiAgICBjb25zdCBjaGFyVG9CeXRlTWFwID0gd2ViU2FmZVxuICAgICAgPyB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlXyFcbiAgICAgIDogdGhpcy5jaGFyVG9CeXRlTWFwXyE7XG5cbiAgICBjb25zdCBvdXRwdXQ6IG51bWJlcltdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgKSB7XG4gICAgICBjb25zdCBieXRlMSA9IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkrKyldO1xuXG4gICAgICBjb25zdCBoYXZlQnl0ZTIgPSBpIDwgaW5wdXQubGVuZ3RoO1xuICAgICAgY29uc3QgYnl0ZTIgPSBoYXZlQnl0ZTIgPyBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKV0gOiAwO1xuICAgICAgKytpO1xuXG4gICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpIDwgaW5wdXQubGVuZ3RoO1xuICAgICAgY29uc3QgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKV0gOiA2NDtcbiAgICAgICsraTtcblxuICAgICAgY29uc3QgaGF2ZUJ5dGU0ID0gaSA8IGlucHV0Lmxlbmd0aDtcbiAgICAgIGNvbnN0IGJ5dGU0ID0gaGF2ZUJ5dGU0ID8gY2hhclRvQnl0ZU1hcFtpbnB1dC5jaGFyQXQoaSldIDogNjQ7XG4gICAgICArK2k7XG5cbiAgICAgIGlmIChieXRlMSA9PSBudWxsIHx8IGJ5dGUyID09IG51bGwgfHwgYnl0ZTMgPT0gbnVsbCB8fCBieXRlNCA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvcigpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvdXRCeXRlMSA9IChieXRlMSA8PCAyKSB8IChieXRlMiA+PiA0KTtcbiAgICAgIG91dHB1dC5wdXNoKG91dEJ5dGUxKTtcblxuICAgICAgaWYgKGJ5dGUzICE9PSA2NCkge1xuICAgICAgICBjb25zdCBvdXRCeXRlMiA9ICgoYnl0ZTIgPDwgNCkgJiAweGYwKSB8IChieXRlMyA+PiAyKTtcbiAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTIpO1xuXG4gICAgICAgIGlmIChieXRlNCAhPT0gNjQpIHtcbiAgICAgICAgICBjb25zdCBvdXRCeXRlMyA9ICgoYnl0ZTMgPDwgNikgJiAweGMwKSB8IGJ5dGU0O1xuICAgICAgICAgIG91dHB1dC5wdXNoKG91dEJ5dGUzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIExhenkgc3RhdGljIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uLiBDYWxsZWQgYmVmb3JlXG4gICAqIGFjY2Vzc2luZyBhbnkgb2YgdGhlIHN0YXRpYyBtYXAgdmFyaWFibGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgaW5pdF8oKSB7XG4gICAgaWYgKCF0aGlzLmJ5dGVUb0NoYXJNYXBfKSB7XG4gICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBfID0ge307XG4gICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfID0ge307XG4gICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlXyA9IHt9O1xuICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV8gPSB7fTtcblxuICAgICAgLy8gV2Ugd2FudCBxdWljayBtYXBwaW5ncyBiYWNrIGFuZCBmb3J0aCwgc28gd2UgcHJlY29tcHV0ZSB0d28gbWFwcy5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTkNPREVEX1ZBTFMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwX1tpXSA9IHRoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKTtcbiAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwX1t0aGlzLmJ5dGVUb0NoYXJNYXBfW2ldXSA9IGk7XG4gICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldID0gdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSk7XG4gICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldXSA9IGk7XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nIHdoZW4gZGVjb2RpbmcgYW5kIGNvcnJlY3RseSBkZWNvZGUgYm90aCBlbmNvZGluZ3MuXG4gICAgICAgIGlmIChpID49IHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwX1t0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKV0gPSBpO1xuICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKV0gPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEFuIGVycm9yIGVuY291bnRlcmVkIHdoaWxlIGRlY29kaW5nIGJhc2U2NCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgcmVhZG9ubHkgbmFtZSA9ICdEZWNvZGVCYXNlNjRTdHJpbmdFcnJvcic7XG59XG5cbi8qKlxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBiYXNlNjRFbmNvZGUgPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB1dGY4Qnl0ZXMgPSBzdHJpbmdUb0J5dGVBcnJheShzdHIpO1xuICByZXR1cm4gYmFzZTY0LmVuY29kZUJ5dGVBcnJheSh1dGY4Qnl0ZXMsIHRydWUpO1xufTtcblxuLyoqXG4gKiBVUkwtc2FmZSBiYXNlNjQgZW5jb2RpbmcgKHdpdGhvdXQgXCIuXCIgcGFkZGluZyBpbiB0aGUgZW5kKS5cbiAqIGUuZy4gVXNlZCBpbiBKU09OIFdlYiBUb2tlbiAoSldUKSBwYXJ0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nID0gZnVuY3Rpb24gKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gVXNlIGJhc2U2NHVybCBlbmNvZGluZyBhbmQgcmVtb3ZlIHBhZGRpbmcgaW4gdGhlIGVuZCAoZG90IGNoYXJhY3RlcnMpLlxuICByZXR1cm4gYmFzZTY0RW5jb2RlKHN0cikucmVwbGFjZSgvXFwuL2csICcnKTtcbn07XG5cbi8qKlxuICogVVJMLXNhZmUgYmFzZTY0IGRlY29kaW5nXG4gKlxuICogTk9URTogRE8gTk9UIHVzZSB0aGUgZ2xvYmFsIGF0b2IoKSBmdW5jdGlvbiAtIGl0IGRvZXMgTk9UIHN1cHBvcnQgdGhlXG4gKiBiYXNlNjRVcmwgdmFyaWFudCBlbmNvZGluZy5cbiAqXG4gKiBAcGFyYW0gc3RyIFRvIGJlIGRlY29kZWRcbiAqIEByZXR1cm4gRGVjb2RlZCByZXN1bHQsIGlmIHBvc3NpYmxlXG4gKi9cbmV4cG9ydCBjb25zdCBiYXNlNjREZWNvZGUgPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYmFzZTY0LmRlY29kZVN0cmluZyhzdHIsIHRydWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignYmFzZTY0RGVjb2RlIGZhaWxlZDogJywgZSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogRG8gYSBkZWVwLWNvcHkgb2YgYmFzaWMgSmF2YVNjcmlwdCBPYmplY3RzIG9yIEFycmF5cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZXBDb3B5PFQ+KHZhbHVlOiBUKTogVCB7XG4gIHJldHVybiBkZWVwRXh0ZW5kKHVuZGVmaW5lZCwgdmFsdWUpIGFzIFQ7XG59XG5cbi8qKlxuICogQ29weSBwcm9wZXJ0aWVzIGZyb20gc291cmNlIHRvIHRhcmdldCAocmVjdXJzaXZlbHkgYWxsb3dzIGV4dGVuc2lvblxuICogb2YgT2JqZWN0cyBhbmQgQXJyYXlzKS4gIFNjYWxhciB2YWx1ZXMgaW4gdGhlIHRhcmdldCBhcmUgb3Zlci13cml0dGVuLlxuICogSWYgdGFyZ2V0IGlzIHVuZGVmaW5lZCwgYW4gb2JqZWN0IG9mIHRoZSBhcHByb3ByaWF0ZSB0eXBlIHdpbGwgYmUgY3JlYXRlZFxuICogKGFuZCByZXR1cm5lZCkuXG4gKlxuICogV2UgcmVjdXJzaXZlbHkgY29weSBhbGwgY2hpbGQgcHJvcGVydGllcyBvZiBwbGFpbiBPYmplY3RzIGluIHRoZSBzb3VyY2UtIHNvXG4gKiB0aGF0IG5hbWVzcGFjZS0gbGlrZSBkaWN0aW9uYXJpZXMgYXJlIG1lcmdlZC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIHRhcmdldCBjYW4gYmUgYSBmdW5jdGlvbiwgaW4gd2hpY2ggY2FzZSB0aGUgcHJvcGVydGllcyBpblxuICogdGhlIHNvdXJjZSBPYmplY3QgYXJlIGNvcGllZCBvbnRvIGl0IGFzIHN0YXRpYyBwcm9wZXJ0aWVzIG9mIHRoZSBGdW5jdGlvbi5cbiAqXG4gKiBOb3RlOiB3ZSBkb24ndCBtZXJnZSBfX3Byb3RvX18gdG8gcHJldmVudCBwcm90b3R5cGUgcG9sbHV0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwRXh0ZW5kKHRhcmdldDogdW5rbm93biwgc291cmNlOiB1bmtub3duKTogdW5rbm93biB7XG4gIGlmICghKHNvdXJjZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgc3dpdGNoIChzb3VyY2UuY29uc3RydWN0b3IpIHtcbiAgICBjYXNlIERhdGU6XG4gICAgICAvLyBUcmVhdCBEYXRlcyBsaWtlIHNjYWxhcnM7IGlmIHRoZSB0YXJnZXQgZGF0ZSBvYmplY3QgaGFkIGFueSBjaGlsZFxuICAgICAgLy8gcHJvcGVydGllcyAtIHRoZXkgd2lsbCBiZSBsb3N0IVxuICAgICAgY29uc3QgZGF0ZVZhbHVlID0gc291cmNlIGFzIERhdGU7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVZhbHVlLmdldFRpbWUoKSk7XG5cbiAgICBjYXNlIE9iamVjdDpcbiAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YXJnZXQgPSB7fTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQXJyYXk6XG4gICAgICAvLyBBbHdheXMgY29weSB0aGUgYXJyYXkgc291cmNlIGFuZCBvdmVyd3JpdGUgdGhlIHRhcmdldC5cbiAgICAgIHRhcmdldCA9IFtdO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gTm90IGEgcGxhaW4gT2JqZWN0IC0gdHJlYXQgaXQgYXMgYSBzY2FsYXIuXG4gICAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZm9yIChjb25zdCBwcm9wIGluIHNvdXJjZSkge1xuICAgIC8vIHVzZSBpc1ZhbGlkS2V5IHRvIGd1YXJkIGFnYWluc3QgcHJvdG90eXBlIHBvbGx1dGlvbi4gU2VlIGh0dHBzOi8vc255ay5pby92dWxuL1NOWUstSlMtTE9EQVNILTQ1MDIwMlxuICAgIGlmICghc291cmNlLmhhc093blByb3BlcnR5KHByb3ApIHx8ICFpc1ZhbGlkS2V5KHByb3ApKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgKHRhcmdldCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbcHJvcF0gPSBkZWVwRXh0ZW5kKFxuICAgICAgKHRhcmdldCBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilbcHJvcF0sXG4gICAgICAoc291cmNlIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KVtwcm9wXVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBrZXkgIT09ICdfX3Byb3RvX18nO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogUG9seWZpbGwgZm9yIGBnbG9iYWxUaGlzYCBvYmplY3QuXG4gKiBAcmV0dXJucyB0aGUgYGdsb2JhbFRoaXNgIG9iamVjdCBmb3IgdGhlIGdpdmVuIGVudmlyb25tZW50LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsKCk6IHR5cGVvZiBnbG9iYWxUaGlzIHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGdsb2JhbDtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdC4nKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMiBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBiYXNlNjREZWNvZGUgfSBmcm9tICcuL2NyeXB0JztcbmltcG9ydCB7IGdldEdsb2JhbCB9IGZyb20gJy4vZ2xvYmFsJztcblxuLyoqXG4gKiBLZXlzIGZvciBleHBlcmltZW50YWwgcHJvcGVydGllcyBvbiB0aGUgYEZpcmViYXNlRGVmYXVsdHNgIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IHR5cGUgRXhwZXJpbWVudGFsS2V5ID0gJ2F1dGhUb2tlblN5bmNVUkwnIHwgJ2F1dGhJZFRva2VuTWF4QWdlJztcblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCBjYW4gYmUgaW5qZWN0ZWQgaW50byB0aGUgZW52aXJvbm1lbnQgYXMgX19GSVJFQkFTRV9ERUZBVUxUU19fLFxuICogZWl0aGVyIGFzIGEgcHJvcGVydHkgb2YgZ2xvYmFsVGhpcywgYSBzaGVsbCBlbnZpcm9ubWVudCB2YXJpYWJsZSwgb3IgYVxuICogY29va2llLlxuICpcbiAqIFRoaXMgb2JqZWN0IGNhbiBiZSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgY29uZmlndXJlIGFuZCBpbml0aWFsaXplXG4gKiBhIEZpcmViYXNlIGFwcCBhcyB3ZWxsIGFzIGFueSBlbXVsYXRvcnMuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEZpcmViYXNlRGVmYXVsdHMge1xuICBjb25maWc/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBlbXVsYXRvckhvc3RzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgX2F1dGhUb2tlblN5bmNVUkw/OiBzdHJpbmc7XG4gIF9hdXRoSWRUb2tlbk1heEFnZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIEZpcmViYXNlJ3MgcnVudGltZSBlbnZpcm9ubWVudCBkZXRlY3Rpb24gYW5kXG4gICAqIGZvcmNlIHRoZSBTREsgdG8gYWN0IGFzIGlmIGl0IHdlcmUgaW4gdGhlIHNwZWNpZmllZCBlbnZpcm9ubWVudC5cbiAgICovXG4gIGZvcmNlRW52aXJvbm1lbnQ/OiAnYnJvd3NlcicgfCAnbm9kZSc7XG4gIFtrZXk6IHN0cmluZ106IHVua25vd247XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gTmVlZCBgdmFyYCBmb3IgdGhpcyB0byB3b3JrLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gIHZhciBfX0ZJUkVCQVNFX0RFRkFVTFRTX186IEZpcmViYXNlRGVmYXVsdHMgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IGdldERlZmF1bHRzRnJvbUdsb2JhbCA9ICgpOiBGaXJlYmFzZURlZmF1bHRzIHwgdW5kZWZpbmVkID0+XG4gIGdldEdsb2JhbCgpLl9fRklSRUJBU0VfREVGQVVMVFNfXztcblxuLyoqXG4gKiBBdHRlbXB0IHRvIHJlYWQgZGVmYXVsdHMgZnJvbSBhIEpTT04gc3RyaW5nIHByb3ZpZGVkIHRvXG4gKiBwcm9jZXNzKC4pZW52KC4pX19GSVJFQkFTRV9ERUZBVUxUU19fIG9yIGEgSlNPTiBmaWxlIHdob3NlIHBhdGggaXMgaW5cbiAqIHByb2Nlc3MoLillbnYoLilfX0ZJUkVCQVNFX0RFRkFVTFRTX1BBVEhfX1xuICogVGhlIGRvdHMgYXJlIGluIHBhcmVucyBiZWNhdXNlIGNlcnRhaW4gY29tcGlsZXJzIChWaXRlPykgY2Fubm90XG4gKiBoYW5kbGUgc2VlaW5nIHRoYXQgdmFyaWFibGUgaW4gY29tbWVudHMuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZpcmViYXNlL2ZpcmViYXNlLWpzLXNkay9pc3N1ZXMvNjgzOFxuICovXG5jb25zdCBnZXREZWZhdWx0c0Zyb21FbnZWYXJpYWJsZSA9ICgpOiBGaXJlYmFzZURlZmF1bHRzIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgcHJvY2Vzcy5lbnYgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRlZmF1bHRzSnNvblN0cmluZyA9IHByb2Nlc3MuZW52Ll9fRklSRUJBU0VfREVGQVVMVFNfXztcbiAgaWYgKGRlZmF1bHRzSnNvblN0cmluZykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlZmF1bHRzSnNvblN0cmluZyk7XG4gIH1cbn07XG5cbmNvbnN0IGdldERlZmF1bHRzRnJvbUNvb2tpZSA9ICgpOiBGaXJlYmFzZURlZmF1bHRzIHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IG1hdGNoO1xuICB0cnkge1xuICAgIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKC9fX0ZJUkVCQVNFX0RFRkFVTFRTX189KFteO10rKS8pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gU29tZSBlbnZpcm9ubWVudHMgc3VjaCBhcyBBbmd1bGFyIFVuaXZlcnNhbCBTU1IgaGF2ZSBhXG4gICAgLy8gYGRvY3VtZW50YCBvYmplY3QgYnV0IGVycm9yIG9uIGFjY2Vzc2luZyBgZG9jdW1lbnQuY29va2llYC5cbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGVjb2RlZCA9IG1hdGNoICYmIGJhc2U2NERlY29kZShtYXRjaFsxXSk7XG4gIHJldHVybiBkZWNvZGVkICYmIEpTT04ucGFyc2UoZGVjb2RlZCk7XG59O1xuXG4vKipcbiAqIEdldCB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdC4gSXQgY2hlY2tzIGluIG9yZGVyOlxuICogKDEpIGlmIHN1Y2ggYW4gb2JqZWN0IGV4aXN0cyBhcyBhIHByb3BlcnR5IG9mIGBnbG9iYWxUaGlzYFxuICogKDIpIGlmIHN1Y2ggYW4gb2JqZWN0IHdhcyBwcm92aWRlZCBvbiBhIHNoZWxsIGVudmlyb25tZW50IHZhcmlhYmxlXG4gKiAoMykgaWYgc3VjaCBhbiBvYmplY3QgZXhpc3RzIGluIGEgY29va2llXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0cyA9ICgpOiBGaXJlYmFzZURlZmF1bHRzIHwgdW5kZWZpbmVkID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgZ2V0RGVmYXVsdHNGcm9tR2xvYmFsKCkgfHxcbiAgICAgIGdldERlZmF1bHRzRnJvbUVudlZhcmlhYmxlKCkgfHxcbiAgICAgIGdldERlZmF1bHRzRnJvbUNvb2tpZSgpXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8qKlxuICAgICAqIENhdGNoLWFsbCBmb3IgYmVpbmcgdW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlXG4gICAgICogdG8gYW55IGVudmlyb25tZW50IGNhc2Ugd2UgaGF2ZSBub3QgYWNjb3VudGVkIGZvci4gTG9nIHRvXG4gICAgICogaW5mbyBpbnN0ZWFkIG9mIHN3YWxsb3dpbmcgc28gd2UgY2FuIGZpbmQgdGhlc2UgdW5rbm93biBjYXNlc1xuICAgICAqIGFuZCBhZGQgcGF0aHMgZm9yIHRoZW0gaWYgbmVlZGVkLlxuICAgICAqL1xuICAgIGNvbnNvbGUuaW5mbyhgVW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlIHRvOiAke2V9YCk7XG4gICAgcmV0dXJuO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgZW11bGF0b3IgaG9zdCBzdG9yZWQgaW4gdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3RcbiAqIGZvciB0aGUgZ2l2ZW4gcHJvZHVjdC5cbiAqIEByZXR1cm5zIGEgVVJMIGhvc3QgZm9ybWF0dGVkIGxpa2UgYDEyNy4wLjAuMTo5OTk5YCBvciBgWzo6MV06NDAwMGAgaWYgYXZhaWxhYmxlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0RW11bGF0b3JIb3N0ID0gKFxuICBwcm9kdWN0TmFtZTogc3RyaW5nXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4gZ2V0RGVmYXVsdHMoKT8uZW11bGF0b3JIb3N0cz8uW3Byb2R1Y3ROYW1lXTtcblxuLyoqXG4gKiBSZXR1cm5zIGVtdWxhdG9yIGhvc3RuYW1lIGFuZCBwb3J0IHN0b3JlZCBpbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdFxuICogZm9yIHRoZSBnaXZlbiBwcm9kdWN0LlxuICogQHJldHVybnMgYSBwYWlyIG9mIGhvc3RuYW1lIGFuZCBwb3J0IGxpa2UgYFtcIjo6MVwiLCA0MDAwXWAgaWYgYXZhaWxhYmxlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREZWZhdWx0RW11bGF0b3JIb3N0bmFtZUFuZFBvcnQgPSAoXG4gIHByb2R1Y3ROYW1lOiBzdHJpbmdcbik6IFtob3N0bmFtZTogc3RyaW5nLCBwb3J0OiBudW1iZXJdIHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgaG9zdCA9IGdldERlZmF1bHRFbXVsYXRvckhvc3QocHJvZHVjdE5hbWUpO1xuICBpZiAoIWhvc3QpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIGNvbnN0IHNlcGFyYXRvckluZGV4ID0gaG9zdC5sYXN0SW5kZXhPZignOicpOyAvLyBGaW5kaW5nIHRoZSBsYXN0IHNpbmNlIElQdjYgYWRkciBhbHNvIGhhcyBjb2xvbnMuXG4gIGlmIChzZXBhcmF0b3JJbmRleCA8PSAwIHx8IHNlcGFyYXRvckluZGV4ICsgMSA9PT0gaG9zdC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaG9zdCAke2hvc3R9IHdpdGggbm8gc2VwYXJhdGUgaG9zdG5hbWUgYW5kIHBvcnQhYCk7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICBjb25zdCBwb3J0ID0gcGFyc2VJbnQoaG9zdC5zdWJzdHJpbmcoc2VwYXJhdG9ySW5kZXggKyAxKSwgMTApO1xuICBpZiAoaG9zdFswXSA9PT0gJ1snKSB7XG4gICAgLy8gQnJhY2tldC1xdW90ZWQgYFtpcHY2YWRkcl06cG9ydGAgPT4gcmV0dXJuIFwiaXB2NmFkZHJcIiAod2l0aG91dCBicmFja2V0cykuXG4gICAgcmV0dXJuIFtob3N0LnN1YnN0cmluZygxLCBzZXBhcmF0b3JJbmRleCAtIDEpLCBwb3J0XTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW2hvc3Quc3Vic3RyaW5nKDAsIHNlcGFyYXRvckluZGV4KSwgcG9ydF07XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBGaXJlYmFzZSBhcHAgY29uZmlnIHN0b3JlZCBpbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRBcHBDb25maWcgPSAoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZCA9PlxuICBnZXREZWZhdWx0cygpPy5jb25maWc7XG5cbi8qKlxuICogUmV0dXJucyBhbiBleHBlcmltZW50YWwgc2V0dGluZyBvbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdCAocHJvcGVydGllc1xuICogcHJlZml4ZWQgYnkgXCJfXCIpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRFeHBlcmltZW50YWxTZXR0aW5nID0gPFQgZXh0ZW5kcyBFeHBlcmltZW50YWxLZXk+KFxuICBuYW1lOiBUXG4pOiBGaXJlYmFzZURlZmF1bHRzW2BfJHtUfWBdID0+XG4gIGdldERlZmF1bHRzKCk/LltgXyR7bmFtZX1gXSBhcyBGaXJlYmFzZURlZmF1bHRzW2BfJHtUfWBdO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBjbGFzcyBEZWZlcnJlZDxSPiB7XG4gIHByb21pc2U6IFByb21pc2U8Uj47XG4gIHJlamVjdDogKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCA9ICgpID0+IHt9O1xuICByZXNvbHZlOiAodmFsdWU/OiB1bmtub3duKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmUgYXMgKHZhbHVlPzogdW5rbm93bikgPT4gdm9pZDtcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0IGFzICh2YWx1ZT86IHVua25vd24pID0+IHZvaWQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogT3VyIEFQSSBpbnRlcm5hbHMgYXJlIG5vdCBwcm9taXNlaWZpZWQgYW5kIGNhbm5vdCBiZWNhdXNlIG91ciBjYWxsYmFjayBBUElzIGhhdmUgc3VidGxlIGV4cGVjdGF0aW9ucyBhcm91bmRcbiAgICogaW52b2tpbmcgcHJvbWlzZXMgaW5saW5lLCB3aGljaCBQcm9taXNlcyBhcmUgZm9yYmlkZGVuIHRvIGRvLiBUaGlzIG1ldGhvZCBhY2NlcHRzIGFuIG9wdGlvbmFsIG5vZGUtc3R5bGUgY2FsbGJhY2tcbiAgICogYW5kIHJldHVybnMgYSBub2RlLXN0eWxlIGNhbGxiYWNrIHdoaWNoIHdpbGwgcmVzb2x2ZSBvciByZWplY3QgdGhlIERlZmVycmVkJ3MgcHJvbWlzZS5cbiAgICovXG4gIHdyYXBDYWxsYmFjayhcbiAgICBjYWxsYmFjaz86IChlcnJvcj86IHVua25vd24sIHZhbHVlPzogdW5rbm93bikgPT4gdm9pZFxuICApOiAoZXJyb3I6IHVua25vd24sIHZhbHVlPzogdW5rbm93bikgPT4gdm9pZCB7XG4gICAgcmV0dXJuIChlcnJvciwgdmFsdWU/KSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5yZWplY3QoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gQXR0YWNoaW5nIG5vb3AgaGFuZGxlciBqdXN0IGluIGNhc2UgZGV2ZWxvcGVyIHdhc24ndCBleHBlY3RpbmdcbiAgICAgICAgLy8gcHJvbWlzZXNcbiAgICAgICAgdGhpcy5wcm9taXNlLmNhdGNoKCgpID0+IHt9KTtcblxuICAgICAgICAvLyBTb21lIG9mIG91ciBjYWxsYmFja3MgZG9uJ3QgZXhwZWN0IGEgdmFsdWUgYW5kIG91ciBvd24gdGVzdHNcbiAgICAgICAgLy8gYXNzZXJ0IHRoYXQgdGhlIHBhcmFtZXRlciBsZW5ndGggaXMgMVxuICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcgfSBmcm9tICcuL2NyeXB0JztcblxuLy8gRmlyZWJhc2UgQXV0aCB0b2tlbnMgY29udGFpbiBzbmFrZV9jYXNlIGNsYWltcyBmb2xsb3dpbmcgdGhlIEpXVCBzdGFuZGFyZCAvIGNvbnZlbnRpb24uXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cblxuZXhwb3J0IHR5cGUgRmlyZWJhc2VTaWduSW5Qcm92aWRlciA9XG4gIHwgJ2N1c3RvbSdcbiAgfCAnZW1haWwnXG4gIHwgJ3Bhc3N3b3JkJ1xuICB8ICdwaG9uZSdcbiAgfCAnYW5vbnltb3VzJ1xuICB8ICdnb29nbGUuY29tJ1xuICB8ICdmYWNlYm9vay5jb20nXG4gIHwgJ2dpdGh1Yi5jb20nXG4gIHwgJ3R3aXR0ZXIuY29tJ1xuICB8ICdtaWNyb3NvZnQuY29tJ1xuICB8ICdhcHBsZS5jb20nO1xuXG5pbnRlcmZhY2UgRmlyZWJhc2VJZFRva2VuIHtcbiAgLy8gQWx3YXlzIHNldCB0byBodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vUFJPSkVDVF9JRFxuICBpc3M6IHN0cmluZztcblxuICAvLyBBbHdheXMgc2V0IHRvIFBST0pFQ1RfSURcbiAgYXVkOiBzdHJpbmc7XG5cbiAgLy8gVGhlIHVzZXIncyB1bmlxdWUgSURcbiAgc3ViOiBzdHJpbmc7XG5cbiAgLy8gVGhlIHRva2VuIGlzc3VlIHRpbWUsIGluIHNlY29uZHMgc2luY2UgZXBvY2hcbiAgaWF0OiBudW1iZXI7XG5cbiAgLy8gVGhlIHRva2VuIGV4cGlyeSB0aW1lLCBub3JtYWxseSAnaWF0JyArIDM2MDBcbiAgZXhwOiBudW1iZXI7XG5cbiAgLy8gVGhlIHVzZXIncyB1bmlxdWUgSUQuIE11c3QgYmUgZXF1YWwgdG8gJ3N1YidcbiAgdXNlcl9pZDogc3RyaW5nO1xuXG4gIC8vIFRoZSB0aW1lIHRoZSB1c2VyIGF1dGhlbnRpY2F0ZWQsIG5vcm1hbGx5ICdpYXQnXG4gIGF1dGhfdGltZTogbnVtYmVyO1xuXG4gIC8vIFRoZSBzaWduIGluIHByb3ZpZGVyLCBvbmx5IHNldCB3aGVuIHRoZSBwcm92aWRlciBpcyAnYW5vbnltb3VzJ1xuICBwcm92aWRlcl9pZD86ICdhbm9ueW1vdXMnO1xuXG4gIC8vIFRoZSB1c2VyJ3MgcHJpbWFyeSBlbWFpbFxuICBlbWFpbD86IHN0cmluZztcblxuICAvLyBUaGUgdXNlcidzIGVtYWlsIHZlcmlmaWNhdGlvbiBzdGF0dXNcbiAgZW1haWxfdmVyaWZpZWQ/OiBib29sZWFuO1xuXG4gIC8vIFRoZSB1c2VyJ3MgcHJpbWFyeSBwaG9uZSBudW1iZXJcbiAgcGhvbmVfbnVtYmVyPzogc3RyaW5nO1xuXG4gIC8vIFRoZSB1c2VyJ3MgZGlzcGxheSBuYW1lXG4gIG5hbWU/OiBzdHJpbmc7XG5cbiAgLy8gVGhlIHVzZXIncyBwcm9maWxlIHBob3RvIFVSTFxuICBwaWN0dXJlPzogc3RyaW5nO1xuXG4gIC8vIEluZm9ybWF0aW9uIG9uIGFsbCBpZGVudGl0aWVzIGxpbmtlZCB0byB0aGlzIHVzZXJcbiAgZmlyZWJhc2U6IHtcbiAgICAvLyBUaGUgcHJpbWFyeSBzaWduLWluIHByb3ZpZGVyXG4gICAgc2lnbl9pbl9wcm92aWRlcjogRmlyZWJhc2VTaWduSW5Qcm92aWRlcjtcblxuICAgIC8vIEEgbWFwIG9mIHByb3ZpZGVycyB0byB0aGUgdXNlcidzIGxpc3Qgb2YgdW5pcXVlIGlkZW50aWZpZXJzIGZyb21cbiAgICAvLyBlYWNoIHByb3ZpZGVyXG4gICAgaWRlbnRpdGllcz86IHsgW3Byb3ZpZGVyIGluIEZpcmViYXNlU2lnbkluUHJvdmlkZXJdPzogc3RyaW5nW10gfTtcbiAgfTtcblxuICAvLyBDdXN0b20gY2xhaW1zIHNldCBieSB0aGUgZGV2ZWxvcGVyXG4gIFtjbGFpbTogc3RyaW5nXTogdW5rbm93bjtcblxuICB1aWQ/OiBuZXZlcjsgLy8gVHJ5IHRvIGNhdGNoIGEgY29tbW9uIG1pc3Rha2Ugb2YgXCJ1aWRcIiAoc2hvdWxkIGJlIFwic3ViXCIgaW5zdGVhZCkuXG59XG5cbmV4cG9ydCB0eXBlIEVtdWxhdG9yTW9ja1Rva2VuT3B0aW9ucyA9ICh7IHVzZXJfaWQ6IHN0cmluZyB9IHwgeyBzdWI6IHN0cmluZyB9KSAmXG4gIFBhcnRpYWw8RmlyZWJhc2VJZFRva2VuPjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vY2tVc2VyVG9rZW4oXG4gIHRva2VuOiBFbXVsYXRvck1vY2tUb2tlbk9wdGlvbnMsXG4gIHByb2plY3RJZD86IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgaWYgKHRva2VuLnVpZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdUaGUgXCJ1aWRcIiBmaWVsZCBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGJ5IG1vY2tVc2VyVG9rZW4uIFBsZWFzZSB1c2UgXCJzdWJcIiBpbnN0ZWFkIGZvciBGaXJlYmFzZSBBdXRoIFVzZXIgSUQuJ1xuICAgICk7XG4gIH1cbiAgLy8gVW5zZWN1cmVkIEpXVHMgdXNlIFwibm9uZVwiIGFzIHRoZSBhbGdvcml0aG0uXG4gIGNvbnN0IGhlYWRlciA9IHtcbiAgICBhbGc6ICdub25lJyxcbiAgICB0eXBlOiAnSldUJ1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SWQgfHwgJ2RlbW8tcHJvamVjdCc7XG4gIGNvbnN0IGlhdCA9IHRva2VuLmlhdCB8fCAwO1xuICBjb25zdCBzdWIgPSB0b2tlbi5zdWIgfHwgdG9rZW4udXNlcl9pZDtcbiAgaWYgKCFzdWIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2NrVXNlclRva2VuIG11c3QgY29udGFpbiAnc3ViJyBvciAndXNlcl9pZCcgZmllbGQhXCIpO1xuICB9XG5cbiAgY29uc3QgcGF5bG9hZDogRmlyZWJhc2VJZFRva2VuID0ge1xuICAgIC8vIFNldCBhbGwgcmVxdWlyZWQgZmllbGRzIHRvIGRlY2VudCBkZWZhdWx0c1xuICAgIGlzczogYGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS8ke3Byb2plY3R9YCxcbiAgICBhdWQ6IHByb2plY3QsXG4gICAgaWF0LFxuICAgIGV4cDogaWF0ICsgMzYwMCxcbiAgICBhdXRoX3RpbWU6IGlhdCxcbiAgICBzdWIsXG4gICAgdXNlcl9pZDogc3ViLFxuICAgIGZpcmViYXNlOiB7XG4gICAgICBzaWduX2luX3Byb3ZpZGVyOiAnY3VzdG9tJyxcbiAgICAgIGlkZW50aXRpZXM6IHt9XG4gICAgfSxcblxuICAgIC8vIE92ZXJyaWRlIHdpdGggdXNlciBvcHRpb25zXG4gICAgLi4udG9rZW5cbiAgfTtcblxuICAvLyBVbnNlY3VyZWQgSldUcyB1c2UgdGhlIGVtcHR5IHN0cmluZyBhcyBhIHNpZ25hdHVyZS5cbiAgY29uc3Qgc2lnbmF0dXJlID0gJyc7XG4gIHJldHVybiBbXG4gICAgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoSlNPTi5zdHJpbmdpZnkoaGVhZGVyKSksXG4gICAgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpLFxuICAgIHNpZ25hdHVyZVxuICBdLmpvaW4oJy4nKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBDT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuXG4vKipcbiAqIFR5cGUgcGxhY2Vob2xkZXIgZm9yIGBXb3JrZXJHbG9iYWxTY29wZWAgZnJvbSBgd2Vid29ya2VyYFxuICovXG5kZWNsYXJlIGNsYXNzIFdvcmtlckdsb2JhbFNjb3BlIHt9XG5cbi8qKlxuICogUmV0dXJucyBuYXZpZ2F0b3IudXNlckFnZW50IHN0cmluZyBvciAnJyBpZiBpdCdzIG5vdCBkZWZpbmVkLlxuICogQHJldHVybiB1c2VyIGFnZW50IHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VUEoKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIG5hdmlnYXRvclsndXNlckFnZW50J10gPT09ICdzdHJpbmcnXG4gICkge1xuICAgIHJldHVybiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG4vKipcbiAqIERldGVjdCBDb3Jkb3ZhIC8gUGhvbmVHYXAgLyBJb25pYyBmcmFtZXdvcmtzIG9uIGEgbW9iaWxlIGRldmljZS5cbiAqXG4gKiBEZWxpYmVyYXRlbHkgZG9lcyBub3QgcmVseSBvbiBjaGVja2luZyBgZmlsZTovL2AgVVJMcyAoYXMgdGhpcyBmYWlscyBQaG9uZUdhcFxuICogaW4gdGhlIFJpcHBsZSBlbXVsYXRvcikgbm9yIENvcmRvdmEgYG9uRGV2aWNlUmVhZHlgLCB3aGljaCB3b3VsZCBub3JtYWxseVxuICogd2FpdCBmb3IgYSBjYWxsYmFjay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlQ29yZG92YSgpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC8vIEB0cy1pZ25vcmUgU2V0dGluZyB1cCBhbiBicm9hZGx5IGFwcGxpY2FibGUgaW5kZXggc2lnbmF0dXJlIGZvciBXaW5kb3dcbiAgICAvLyBqdXN0IHRvIGRlYWwgd2l0aCB0aGlzIGNhc2Ugd291bGQgcHJvYmFibHkgYmUgYSBiYWQgaWRlYS5cbiAgICAhISh3aW5kb3dbJ2NvcmRvdmEnXSB8fCB3aW5kb3dbJ3Bob25lZ2FwJ10gfHwgd2luZG93WydQaG9uZUdhcCddKSAmJlxuICAgIC9pb3N8aXBob25lfGlwb2R8aXBhZHxhbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGUvaS50ZXN0KGdldFVBKCkpXG4gICk7XG59XG5cbi8qKlxuICogRGV0ZWN0IE5vZGUuanMuXG4gKlxuICogQHJldHVybiB0cnVlIGlmIE5vZGUuanMgZW52aXJvbm1lbnQgaXMgZGV0ZWN0ZWQgb3Igc3BlY2lmaWVkLlxuICovXG4vLyBOb2RlIGRldGVjdGlvbiBsb2dpYyBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vaWxpYWthbi9kZXRlY3Qtbm9kZS9cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUoKTogYm9vbGVhbiB7XG4gIGNvbnN0IGZvcmNlRW52aXJvbm1lbnQgPSBnZXREZWZhdWx0cygpPy5mb3JjZUVudmlyb25tZW50O1xuICBpZiAoZm9yY2VFbnZpcm9ubWVudCA9PT0gJ25vZGUnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoZm9yY2VFbnZpcm9ubWVudCA9PT0gJ2Jyb3dzZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nXG4gICAgKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIERldGVjdCBCcm93c2VyIEVudmlyb25tZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXIoKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyB8fCBpc1dlYldvcmtlcigpO1xufVxuXG4vKipcbiAqIERldGVjdCBXZWIgV29ya2VyIGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzV2ViV29ya2VyKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGVcbiAgKTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYnJvd3NlciBleHRlbnNpb25zIChDaHJvbWUgYW5kIEZpcmVmb3ggYXQgbGVhc3QpLlxuICovXG5pbnRlcmZhY2UgQnJvd3NlclJ1bnRpbWUge1xuICBpZD86IHVua25vd247XG59XG5kZWNsYXJlIGNvbnN0IGNocm9tZTogeyBydW50aW1lPzogQnJvd3NlclJ1bnRpbWUgfTtcbmRlY2xhcmUgY29uc3QgYnJvd3NlcjogeyBydW50aW1lPzogQnJvd3NlclJ1bnRpbWUgfTtcbmV4cG9ydCBmdW5jdGlvbiBpc0Jyb3dzZXJFeHRlbnNpb24oKTogYm9vbGVhbiB7XG4gIGNvbnN0IHJ1bnRpbWUgPVxuICAgIHR5cGVvZiBjaHJvbWUgPT09ICdvYmplY3QnXG4gICAgICA/IGNocm9tZS5ydW50aW1lXG4gICAgICA6IHR5cGVvZiBicm93c2VyID09PSAnb2JqZWN0J1xuICAgICAgPyBicm93c2VyLnJ1bnRpbWVcbiAgICAgIDogdW5kZWZpbmVkO1xuICByZXR1cm4gdHlwZW9mIHJ1bnRpbWUgPT09ICdvYmplY3QnICYmIHJ1bnRpbWUuaWQgIT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBEZXRlY3QgUmVhY3QgTmF0aXZlLlxuICpcbiAqIEByZXR1cm4gdHJ1ZSBpZiBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yWydwcm9kdWN0J10gPT09ICdSZWFjdE5hdGl2ZSdcbiAgKTtcbn1cblxuLyoqIERldGVjdHMgRWxlY3Ryb24gYXBwcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VsZWN0cm9uKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdFbGVjdHJvbi8nKSA+PSAwO1xufVxuXG4vKiogRGV0ZWN0cyBJbnRlcm5ldCBFeHBsb3Jlci4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0lFKCk6IGJvb2xlYW4ge1xuICBjb25zdCB1YSA9IGdldFVBKCk7XG4gIHJldHVybiB1YS5pbmRleE9mKCdNU0lFICcpID49IDAgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSA+PSAwO1xufVxuXG4vKiogRGV0ZWN0cyBVbml2ZXJzYWwgV2luZG93cyBQbGF0Zm9ybSBhcHBzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVVdQKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdNU0FwcEhvc3QvJykgPj0gMDtcbn1cblxuLyoqXG4gKiBEZXRlY3Qgd2hldGhlciB0aGUgY3VycmVudCBTREsgYnVpbGQgaXMgdGhlIE5vZGUgdmVyc2lvbi5cbiAqXG4gKiBAcmV0dXJuIHRydWUgaWYgaXQncyB0aGUgTm9kZSBTREsgYnVpbGQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVTZGsoKTogYm9vbGVhbiB7XG4gIHJldHVybiBDT05TVEFOVFMuTk9ERV9DTElFTlQgPT09IHRydWUgfHwgQ09OU1RBTlRTLk5PREVfQURNSU4gPT09IHRydWU7XG59XG5cbi8qKiBSZXR1cm5zIHRydWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gU2FmYXJpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FmYXJpKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgICFpc05vZGUoKSAmJlxuICAgICEhbmF2aWdhdG9yLnVzZXJBZ2VudCAmJlxuICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1NhZmFyaScpICYmXG4gICAgIW5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ0Nocm9tZScpXG4gICk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY2hlY2tzIGlmIGluZGV4ZWREQiBpcyBzdXBwb3J0ZWQgYnkgY3VycmVudCBicm93c2VyL3NlcnZpY2Ugd29ya2VyIGNvbnRleHRcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0luZGV4ZWREQkF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gdHlwZW9mIGluZGV4ZWREQiA9PT0gJ29iamVjdCc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB2YWxpZGF0ZXMgYnJvd3Nlci9zdyBjb250ZXh0IGZvciBpbmRleGVkREIgYnkgb3BlbmluZyBhIGR1bW15IGluZGV4ZWREQiBkYXRhYmFzZSBhbmQgcmVqZWN0XG4gKiBpZiBlcnJvcnMgb2NjdXIgZHVyaW5nIHRoZSBkYXRhYmFzZSBvcGVuIG9wZXJhdGlvbi5cbiAqXG4gKiBAdGhyb3dzIGV4Y2VwdGlvbiBpZiBjdXJyZW50IGJyb3dzZXIvc3cgY29udGV4dCBjYW4ndCBydW4gaWRiLm9wZW4gKGV4OiBTYWZhcmkgaWZyYW1lLCBGaXJlZm94XG4gKiBwcml2YXRlIGJyb3dzaW5nKVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHByZUV4aXN0OiBib29sZWFuID0gdHJ1ZTtcbiAgICAgIGNvbnN0IERCX0NIRUNLX05BTUUgPVxuICAgICAgICAndmFsaWRhdGUtYnJvd3Nlci1jb250ZXh0LWZvci1pbmRleGVkZGItYW5hbHl0aWNzLW1vZHVsZSc7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gc2VsZi5pbmRleGVkREIub3BlbihEQl9DSEVDS19OQU1FKTtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICByZXF1ZXN0LnJlc3VsdC5jbG9zZSgpO1xuICAgICAgICAvLyBkZWxldGUgZGF0YWJhc2Ugb25seSB3aGVuIGl0IGRvZXNuJ3QgcHJlLWV4aXN0XG4gICAgICAgIGlmICghcHJlRXhpc3QpIHtcbiAgICAgICAgICBzZWxmLmluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShEQl9DSEVDS19OQU1FKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgICBwcmVFeGlzdCA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcj8ubWVzc2FnZSB8fCAnJyk7XG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICpcbiAqIFRoaXMgbWV0aG9kIGNoZWNrcyB3aGV0aGVyIGNvb2tpZSBpcyBlbmFibGVkIHdpdGhpbiBjdXJyZW50IGJyb3dzZXJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBjb29raWUgaXMgZW5hYmxlZCB3aXRoaW4gY3VycmVudCBicm93c2VyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcmVDb29raWVzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8ICFuYXZpZ2F0b3IuY29va2llRW5hYmxlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFN0YW5kYXJkaXplZCBGaXJlYmFzZSBFcnJvci5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIC8vIFR5cGVzY3JpcHQgc3RyaW5nIGxpdGVyYWxzIGZvciB0eXBlLXNhZmUgY29kZXNcbiAqICAgdHlwZSBFcnIgPVxuICogICAgICd1bmtub3duJyB8XG4gKiAgICAgJ29iamVjdC1ub3QtZm91bmQnXG4gKiAgICAgO1xuICpcbiAqICAgLy8gQ2xvc3VyZSBlbnVtIGZvciB0eXBlLXNhZmUgZXJyb3IgY29kZXNcbiAqICAgLy8gYXQtZW51bSB7c3RyaW5nfVxuICogICB2YXIgRXJyID0ge1xuICogICAgIFVOS05PV046ICd1bmtub3duJyxcbiAqICAgICBPQkpFQ1RfTk9UX0ZPVU5EOiAnb2JqZWN0LW5vdC1mb3VuZCcsXG4gKiAgIH1cbiAqXG4gKiAgIGxldCBlcnJvcnM6IE1hcDxFcnIsIHN0cmluZz4gPSB7XG4gKiAgICAgJ2dlbmVyaWMtZXJyb3InOiBcIlVua25vd24gZXJyb3JcIixcbiAqICAgICAnZmlsZS1ub3QtZm91bmQnOiBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IHskZmlsZX1cIixcbiAqICAgfTtcbiAqXG4gKiAgIC8vIFR5cGUtc2FmZSBmdW5jdGlvbiAtIG11c3QgcGFzcyBhIHZhbGlkIGVycm9yIGNvZGUgYXMgcGFyYW0uXG4gKiAgIGxldCBlcnJvciA9IG5ldyBFcnJvckZhY3Rvcnk8RXJyPignc2VydmljZScsICdTZXJ2aWNlJywgZXJyb3JzKTtcbiAqXG4gKiAgIC4uLlxuICogICB0aHJvdyBlcnJvci5jcmVhdGUoRXJyLkdFTkVSSUMpO1xuICogICAuLi5cbiAqICAgdGhyb3cgZXJyb3IuY3JlYXRlKEVyci5GSUxFX05PVF9GT1VORCwgeydmaWxlJzogZmlsZU5hbWV9KTtcbiAqICAgLi4uXG4gKiAgIC8vIFNlcnZpY2U6IENvdWxkIG5vdCBmaWxlIGZpbGU6IGZvby50eHQgKHNlcnZpY2UvZmlsZS1ub3QtZm91bmQpLlxuICpcbiAqICAgY2F0Y2ggKGUpIHtcbiAqICAgICBhc3NlcnQoZS5tZXNzYWdlID09PSBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IGZvby50eHQuXCIpO1xuICogICAgIGlmICgoZSBhcyBGaXJlYmFzZUVycm9yKT8uY29kZSA9PT0gJ3NlcnZpY2UvZmlsZS1ub3QtZm91bmQnKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCByZWFkIGZpbGU6IFwiICsgZVsnZmlsZSddKTtcbiAqICAgICB9XG4gKiAgIH1cbiAqL1xuXG5leHBvcnQgdHlwZSBFcnJvck1hcDxFcnJvckNvZGUgZXh0ZW5kcyBzdHJpbmc+ID0ge1xuICByZWFkb25seSBbSyBpbiBFcnJvckNvZGVdOiBzdHJpbmc7XG59O1xuXG5jb25zdCBFUlJPUl9OQU1FID0gJ0ZpcmViYXNlRXJyb3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ0xpa2Uge1xuICB0b1N0cmluZygpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JEYXRhIHtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbn1cblxuLy8gQmFzZWQgb24gY29kZSBmcm9tOlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRXJyb3IjQ3VzdG9tX0Vycm9yX1R5cGVzXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyoqIFRoZSBjdXN0b20gbmFtZSBmb3IgYWxsIEZpcmViYXNlRXJyb3JzLiAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmcgPSBFUlJPUl9OQU1FO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8qKiBUaGUgZXJyb3IgY29kZSBmb3IgdGhpcyBlcnJvci4gKi9cbiAgICByZWFkb25seSBjb2RlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIC8qKiBDdXN0b20gZGF0YSBmb3IgdGhpcyBlcnJvci4gKi9cbiAgICBwdWJsaWMgY3VzdG9tRGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuXG4gICAgLy8gRml4IEZvciBFUzVcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBGaXJlYmFzZUVycm9yLnByb3RvdHlwZSk7XG5cbiAgICAvLyBNYWludGFpbnMgcHJvcGVyIHN0YWNrIHRyYWNlIGZvciB3aGVyZSBvdXIgZXJyb3Igd2FzIHRocm93bi5cbiAgICAvLyBPbmx5IGF2YWlsYWJsZSBvbiBWOC5cbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEVycm9yRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVycm9yRmFjdG9yeTxcbiAgRXJyb3JDb2RlIGV4dGVuZHMgc3RyaW5nLFxuICBFcnJvclBhcmFtcyBleHRlbmRzIHsgcmVhZG9ubHkgW0sgaW4gRXJyb3JDb2RlXT86IEVycm9yRGF0YSB9ID0ge31cbj4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2U6IHN0cmluZyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2VOYW1lOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSByZWFkb25seSBlcnJvcnM6IEVycm9yTWFwPEVycm9yQ29kZT5cbiAgKSB7fVxuXG4gIGNyZWF0ZTxLIGV4dGVuZHMgRXJyb3JDb2RlPihcbiAgICBjb2RlOiBLLFxuICAgIC4uLmRhdGE6IEsgZXh0ZW5kcyBrZXlvZiBFcnJvclBhcmFtcyA/IFtFcnJvclBhcmFtc1tLXV0gOiBbXVxuICApOiBGaXJlYmFzZUVycm9yIHtcbiAgICBjb25zdCBjdXN0b21EYXRhID0gKGRhdGFbMF0gYXMgRXJyb3JEYXRhKSB8fCB7fTtcbiAgICBjb25zdCBmdWxsQ29kZSA9IGAke3RoaXMuc2VydmljZX0vJHtjb2RlfWA7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmVycm9yc1tjb2RlXTtcblxuICAgIGNvbnN0IG1lc3NhZ2UgPSB0ZW1wbGF0ZSA/IHJlcGxhY2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgY3VzdG9tRGF0YSkgOiAnRXJyb3InO1xuICAgIC8vIFNlcnZpY2UgTmFtZTogRXJyb3IgbWVzc2FnZSAoc2VydmljZS9jb2RlKS5cbiAgICBjb25zdCBmdWxsTWVzc2FnZSA9IGAke3RoaXMuc2VydmljZU5hbWV9OiAke21lc3NhZ2V9ICgke2Z1bGxDb2RlfSkuYDtcblxuICAgIGNvbnN0IGVycm9yID0gbmV3IEZpcmViYXNlRXJyb3IoZnVsbENvZGUsIGZ1bGxNZXNzYWdlLCBjdXN0b21EYXRhKTtcblxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlVGVtcGxhdGUodGVtcGxhdGU6IHN0cmluZywgZGF0YTogRXJyb3JEYXRhKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoUEFUVEVSTiwgKF8sIGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0YVtrZXldO1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsID8gU3RyaW5nKHZhbHVlKSA6IGA8JHtrZXl9Pz5gO1xuICB9KTtcbn1cblxuY29uc3QgUEFUVEVSTiA9IC9cXHtcXCQoW159XSspfS9nO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogRXZhbHVhdGVzIGEgSlNPTiBzdHJpbmcgaW50byBhIGphdmFzY3JpcHQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQSBzdHJpbmcgY29udGFpbmluZyBKU09OLlxuICogQHJldHVybiB7Kn0gVGhlIGphdmFzY3JpcHQgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIEpTT04uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBqc29uRXZhbChzdHI6IHN0cmluZyk6IHVua25vd24ge1xuICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgSlNPTiByZXByZXNlbnRpbmcgYSBqYXZhc2NyaXB0IG9iamVjdC5cbiAqIEBwYXJhbSB7Kn0gZGF0YSBKYXZhc2NyaXB0IG9iamVjdCB0byBiZSBzdHJpbmdpZmllZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEpTT04gY29udGVudHMgb2YgdGhlIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeShkYXRhOiB1bmtub3duKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGJhc2U2NERlY29kZSB9IGZyb20gJy4vY3J5cHQnO1xuaW1wb3J0IHsganNvbkV2YWwgfSBmcm9tICcuL2pzb24nO1xuXG5pbnRlcmZhY2UgQ2xhaW1zIHtcbiAgW2tleTogc3RyaW5nXToge307XG59XG5cbmludGVyZmFjZSBEZWNvZGVkVG9rZW4ge1xuICBoZWFkZXI6IG9iamVjdDtcbiAgY2xhaW1zOiBDbGFpbXM7XG4gIGRhdGE6IG9iamVjdDtcbiAgc2lnbmF0dXJlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGludG8gY29uc3RpdHVlbnQgcGFydHMuXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gd2l0aCBpbnZhbGlkIC8gaW5jb21wbGV0ZSBjbGFpbXMgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5leHBvcnQgY29uc3QgZGVjb2RlID0gZnVuY3Rpb24gKHRva2VuOiBzdHJpbmcpOiBEZWNvZGVkVG9rZW4ge1xuICBsZXQgaGVhZGVyID0ge30sXG4gICAgY2xhaW1zOiBDbGFpbXMgPSB7fSxcbiAgICBkYXRhID0ge30sXG4gICAgc2lnbmF0dXJlID0gJyc7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XG4gICAgaGVhZGVyID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzBdKSB8fCAnJykgYXMgb2JqZWN0O1xuICAgIGNsYWltcyA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1sxXSkgfHwgJycpIGFzIENsYWltcztcbiAgICBzaWduYXR1cmUgPSBwYXJ0c1syXTtcbiAgICBkYXRhID0gY2xhaW1zWydkJ10gfHwge307XG4gICAgZGVsZXRlIGNsYWltc1snZCddO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyLFxuICAgIGNsYWltcyxcbiAgICBkYXRhLFxuICAgIHNpZ25hdHVyZVxuICB9O1xufTtcblxuaW50ZXJmYWNlIERlY29kZWRUb2tlbiB7XG4gIGhlYWRlcjogb2JqZWN0O1xuICBjbGFpbXM6IENsYWltcztcbiAgZGF0YTogb2JqZWN0O1xuICBzaWduYXR1cmU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIHRpbWUtYmFzZWQgY2xhaW1zLiBXaWxsIHJldHVybiB0cnVlIGlmIHRoZVxuICogdG9rZW4gaXMgd2l0aGluIHRoZSB0aW1lIHdpbmRvdyBhdXRob3JpemVkIGJ5IHRoZSAnbmJmJyAobm90LWJlZm9yZSkgYW5kICdpYXQnIChpc3N1ZWQtYXQpIGNsYWltcy5cbiAqXG4gKiBOb3RlczpcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRUaW1lc3RhbXAgPSBmdW5jdGlvbiAodG9rZW46IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBjbGFpbXM6IENsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xuICBjb25zdCBub3c6IG51bWJlciA9IE1hdGguZmxvb3IobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgbGV0IHZhbGlkU2luY2U6IG51bWJlciA9IDAsXG4gICAgdmFsaWRVbnRpbDogbnVtYmVyID0gMDtcblxuICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCduYmYnKSkge1xuICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snbmJmJ10gYXMgbnVtYmVyO1xuICAgIH0gZWxzZSBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xuICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snaWF0J10gYXMgbnVtYmVyO1xuICAgIH1cblxuICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSB7XG4gICAgICB2YWxpZFVudGlsID0gY2xhaW1zWydleHAnXSBhcyBudW1iZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRva2VuIHdpbGwgZXhwaXJlIGFmdGVyIDI0aCBieSBkZWZhdWx0XG4gICAgICB2YWxpZFVudGlsID0gdmFsaWRTaW5jZSArIDg2NDAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgISFub3cgJiZcbiAgICAhIXZhbGlkU2luY2UgJiZcbiAgICAhIXZhbGlkVW50aWwgJiZcbiAgICBub3cgPj0gdmFsaWRTaW5jZSAmJlxuICAgIG5vdyA8PSB2YWxpZFVudGlsXG4gICk7XG59O1xuXG4vKipcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgcmV0dXJucyBpdHMgaXNzdWVkIGF0IHRpbWUgaWYgdmFsaWQsIG51bGwgb3RoZXJ3aXNlLlxuICpcbiAqIE5vdGVzOlxuICogLSBNYXkgcmV0dXJuIG51bGwgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5leHBvcnQgY29uc3QgaXNzdWVkQXRUaW1lID0gZnVuY3Rpb24gKHRva2VuOiBzdHJpbmcpOiBudW1iZXIgfCBudWxsIHtcbiAgY29uc3QgY2xhaW1zOiBDbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcbiAgaWYgKHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0JykpIHtcbiAgICByZXR1cm4gY2xhaW1zWydpYXQnXSBhcyBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgZm9ybWF0LiBFeHBlY3RzIGEgdmFsaWQgaXNzdWVkLWF0IHRpbWUuXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRm9ybWF0ID0gZnVuY3Rpb24gKHRva2VuOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgZGVjb2RlZCA9IGRlY29kZSh0b2tlbiksXG4gICAgY2xhaW1zID0gZGVjb2RlZC5jbGFpbXM7XG5cbiAgcmV0dXJuICEhY2xhaW1zICYmIHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0Jyk7XG59O1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIHBlZXIgaW50byBhbiBhdXRoIHRva2VuIGFuZCBkZXRlcm1pbmUgaWYgaXQncyBhbiBhZG1pbiBhdXRoIHRva2VuIGJ5IGxvb2tpbmcgYXQgdGhlIGNsYWltcyBwb3J0aW9uLlxuICpcbiAqIE5vdGVzOlxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5leHBvcnQgY29uc3QgaXNBZG1pbiA9IGZ1bmN0aW9uICh0b2tlbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGNsYWltczogQ2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XG4gIHJldHVybiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXNbJ2FkbWluJ10gPT09IHRydWU7XG59O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb250YWluczxUIGV4dGVuZHMgb2JqZWN0PihvYmo6IFQsIGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FmZUdldDxUIGV4dGVuZHMgb2JqZWN0LCBLIGV4dGVuZHMga2V5b2YgVD4oXG4gIG9iajogVCxcbiAga2V5OiBLXG4pOiBUW0tdIHwgdW5kZWZpbmVkIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmo6IG9iamVjdCk6IG9iaiBpcyB7fSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwPEsgZXh0ZW5kcyBzdHJpbmcsIFYsIFU+KFxuICBvYmo6IHsgW2tleSBpbiBLXTogViB9LFxuICBmbjogKHZhbHVlOiBWLCBrZXk6IEssIG9iajogeyBba2V5IGluIEtdOiBWIH0pID0+IFUsXG4gIGNvbnRleHRPYmo/OiB1bmtub3duXG4pOiB7IFtrZXkgaW4gS106IFUgfSB7XG4gIGNvbnN0IHJlczogUGFydGlhbDx7IFtrZXkgaW4gS106IFUgfT4gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gZm4uY2FsbChjb250ZXh0T2JqLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzIGFzIHsgW2tleSBpbiBLXTogVSB9O1xufVxuXG4vKipcbiAqIERlZXAgZXF1YWwgdHdvIG9iamVjdHMuIFN1cHBvcnQgQXJyYXlzIGFuZCBPYmplY3RzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsKGE6IG9iamVjdCwgYjogb2JqZWN0KTogYm9vbGVhbiB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICBjb25zdCBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICBmb3IgKGNvbnN0IGsgb2YgYUtleXMpIHtcbiAgICBpZiAoIWJLZXlzLmluY2x1ZGVzKGspKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYVByb3AgPSAoYSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgY29uc3QgYlByb3AgPSAoYiBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPilba107XG4gICAgaWYgKGlzT2JqZWN0KGFQcm9wKSAmJiBpc09iamVjdChiUHJvcCkpIHtcbiAgICAgIGlmICghZGVlcEVxdWFsKGFQcm9wLCBiUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYVByb3AgIT09IGJQcm9wKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChjb25zdCBrIG9mIGJLZXlzKSB7XG4gICAgaWYgKCFhS2V5cy5pbmNsdWRlcyhrKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodGhpbmc6IHVua25vd24pOiB0aGluZyBpcyBvYmplY3Qge1xuICByZXR1cm4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jztcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMiBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJy4vZGVmZXJyZWQnO1xuXG4vKipcbiAqIFJlamVjdHMgaWYgdGhlIGdpdmVuIHByb21pc2UgZG9lc24ndCByZXNvbHZlIGluIHRpbWVJbk1TIG1pbGxpc2Vjb25kcy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwcm9taXNlOiBQcm9taXNlPFQ+LFxuICB0aW1lSW5NUyA9IDIwMDBcbik6IFByb21pc2U8VD4ge1xuICBjb25zdCBkZWZlcnJlZFByb21pc2UgPSBuZXcgRGVmZXJyZWQ8VD4oKTtcbiAgc2V0VGltZW91dCgoKSA9PiBkZWZlcnJlZFByb21pc2UucmVqZWN0KCd0aW1lb3V0IScpLCB0aW1lSW5NUyk7XG4gIHByb21pc2UudGhlbihkZWZlcnJlZFByb21pc2UucmVzb2x2ZSwgZGVmZXJyZWRQcm9taXNlLnJlamVjdCk7XG4gIHJldHVybiBkZWZlcnJlZFByb21pc2UucHJvbWlzZTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYSBxdWVyeXN0cmluZy1mb3JtYXR0ZWQgc3RyaW5nIChlLmcuICZhcmc9dmFsJmFyZzI9dmFsMikgZnJvbSBhXG4gKiBwYXJhbXMgb2JqZWN0IChlLmcuIHthcmc6ICd2YWwnLCBhcmcyOiAndmFsMid9KVxuICogTm90ZTogWW91IG11c3QgcHJlcGVuZCBpdCB3aXRoID8gd2hlbiBhZGRpbmcgaXQgdG8gYSBVUkwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeXN0cmluZyhxdWVyeXN0cmluZ1BhcmFtczoge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7XG59KTogc3RyaW5nIHtcbiAgY29uc3QgcGFyYW1zID0gW107XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHF1ZXJ5c3RyaW5nUGFyYW1zKSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaChhcnJheVZhbCA9PiB7XG4gICAgICAgIHBhcmFtcy5wdXNoKFxuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGFycmF5VmFsKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJhbXMubGVuZ3RoID8gJyYnICsgcGFyYW1zLmpvaW4oJyYnKSA6ICcnO1xufVxuXG4vKipcbiAqIERlY29kZXMgYSBxdWVyeXN0cmluZyAoZS5nLiA/YXJnPXZhbCZhcmcyPXZhbDIpIGludG8gYSBwYXJhbXMgb2JqZWN0XG4gKiAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5c3RyaW5nRGVjb2RlKHF1ZXJ5c3RyaW5nOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgY29uc3Qgb2JqOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gIGNvbnN0IHRva2VucyA9IHF1ZXJ5c3RyaW5nLnJlcGxhY2UoL15cXD8vLCAnJykuc3BsaXQoJyYnKTtcblxuICB0b2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSB0b2tlbi5zcGxpdCgnPScpO1xuICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBFeHRyYWN0IHRoZSBxdWVyeSBzdHJpbmcgcGFydCBvZiBhIFVSTCwgaW5jbHVkaW5nIHRoZSBsZWFkaW5nIHF1ZXN0aW9uIG1hcmsgKGlmIHByZXNlbnQpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFF1ZXJ5c3RyaW5nKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgcXVlcnlTdGFydCA9IHVybC5pbmRleE9mKCc/Jyk7XG4gIGlmICghcXVlcnlTdGFydCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBmcmFnbWVudFN0YXJ0ID0gdXJsLmluZGV4T2YoJyMnLCBxdWVyeVN0YXJ0KTtcbiAgcmV0dXJuIHVybC5zdWJzdHJpbmcoXG4gICAgcXVlcnlTdGFydCxcbiAgICBmcmFnbWVudFN0YXJ0ID4gMCA/IGZyYWdtZW50U3RhcnQgOiB1bmRlZmluZWRcbiAgKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoLlxuICogVmFyaWFibGUgbmFtZXMgZm9sbG93IHRoZSBub3RhdGlvbiBpbiBGSVBTIFBVQiAxODAtMzpcbiAqIGh0dHA6Ly9jc3JjLm5pc3QuZ292L3B1YmxpY2F0aW9ucy9maXBzL2ZpcHMxODAtMy9maXBzMTgwLTNfZmluYWwucGRmLlxuICpcbiAqIFVzYWdlOlxuICogICB2YXIgc2hhMSA9IG5ldyBzaGExKCk7XG4gKiAgIHNoYTEudXBkYXRlKGJ5dGVzKTtcbiAqICAgdmFyIGhhc2ggPSBzaGExLmRpZ2VzdCgpO1xuICpcbiAqIFBlcmZvcm1hbmNlOlxuICogICBDaHJvbWUgMjM6ICAgfjQwMCBNYml0L3NcbiAqICAgRmlyZWZveCAxNjogIH4yNTAgTWJpdC9zXG4gKlxuICovXG5cbi8qKlxuICogU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoIGNvbnN0cnVjdG9yLlxuICpcbiAqIFRoZSBwcm9wZXJ0aWVzIGRlY2xhcmVkIGhlcmUgYXJlIGRpc2N1c3NlZCBpbiB0aGUgYWJvdmUgYWxnb3JpdGhtIGRvY3VtZW50LlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZmluYWxcbiAqIEBzdHJ1Y3RcbiAqL1xuZXhwb3J0IGNsYXNzIFNoYTEge1xuICAvKipcbiAgICogSG9sZHMgdGhlIHByZXZpb3VzIHZhbHVlcyBvZiBhY2N1bXVsYXRlZCB2YXJpYWJsZXMgYS1lIGluIHRoZSBjb21wcmVzc19cbiAgICogZnVuY3Rpb24uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIGNoYWluXzogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQSBidWZmZXIgaG9sZGluZyB0aGUgcGFydGlhbGx5IGNvbXB1dGVkIGhhc2ggcmVzdWx0LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBidWZfOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiA4MCBieXRlcywgZWFjaCBhIHBhcnQgb2YgdGhlIG1lc3NhZ2UgdG8gYmUgaGFzaGVkLiAgUmVmZXJyZWQgdG9cbiAgICogYXMgdGhlIG1lc3NhZ2Ugc2NoZWR1bGUgaW4gdGhlIGRvY3MuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcml2YXRlIFdfOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBDb250YWlucyBkYXRhIG5lZWRlZCB0byBwYWQgbWVzc2FnZXMgbGVzcyB0aGFuIDY0IGJ5dGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBwYWRfOiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgKi9cbiAgcHJpdmF0ZSBpbmJ1Zl86IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlIHtudW1iZXJ9XG4gICAqL1xuICBwcml2YXRlIHRvdGFsXzogbnVtYmVyID0gMDtcblxuICBibG9ja1NpemU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJsb2NrU2l6ZSA9IDUxMiAvIDg7XG5cbiAgICB0aGlzLnBhZF9bMF0gPSAxMjg7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJsb2NrU2l6ZTsgKytpKSB7XG4gICAgICB0aGlzLnBhZF9baV0gPSAwO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhaW5fWzBdID0gMHg2NzQ1MjMwMTtcbiAgICB0aGlzLmNoYWluX1sxXSA9IDB4ZWZjZGFiODk7XG4gICAgdGhpcy5jaGFpbl9bMl0gPSAweDk4YmFkY2ZlO1xuICAgIHRoaXMuY2hhaW5fWzNdID0gMHgxMDMyNTQ3NjtcbiAgICB0aGlzLmNoYWluX1s0XSA9IDB4YzNkMmUxZjA7XG5cbiAgICB0aGlzLmluYnVmXyA9IDA7XG4gICAgdGhpcy50b3RhbF8gPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIGNvbXByZXNzIGhlbHBlciBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGJ1ZiBCbG9jayB0byBjb21wcmVzcy5cbiAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgb2YgdGhlIGJsb2NrIGluIHRoZSBidWZmZXIuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb21wcmVzc18oYnVmOiBudW1iZXJbXSB8IFVpbnQ4QXJyYXkgfCBzdHJpbmcsIG9mZnNldD86IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGNvbnN0IFcgPSB0aGlzLldfO1xuXG4gICAgLy8gZ2V0IDE2IGJpZyBlbmRpYW4gd29yZHNcbiAgICBpZiAodHlwZW9mIGJ1ZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICAvLyBUT0RPKHVzZXIpOiBbYnVnIDgxNDAxMjJdIFJlY2VudCB2ZXJzaW9ucyBvZiBTYWZhcmkgZm9yIE1hYyBPUyBhbmQgaU9TXG4gICAgICAgIC8vIGhhdmUgYSBidWcgdGhhdCB0dXJucyB0aGUgcG9zdC1pbmNyZW1lbnQgKysgb3BlcmF0b3IgaW50byBwcmUtaW5jcmVtZW50XG4gICAgICAgIC8vIGR1cmluZyBKSVQgY29tcGlsYXRpb24uICBXZSBoYXZlIGNvZGUgdGhhdCBkZXBlbmRzIGhlYXZpbHkgb24gU0hBLTEgZm9yXG4gICAgICAgIC8vIGNvcnJlY3RuZXNzIGFuZCB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIGJ1Zywgc28gSSd2ZSByZW1vdmVkIGFsbCB1c2VzXG4gICAgICAgIC8vIG9mIHBvc3QtaW5jcmVtZW50ICsrIGluIHdoaWNoIHRoZSByZXN1bHQgdmFsdWUgaXMgdXNlZC4gIFdlIGNhbiByZXZlcnRcbiAgICAgICAgLy8gdGhpcyBjaGFuZ2Ugb25jZSB0aGUgU2FmYXJpIGJ1Z1xuICAgICAgICAvLyAoaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEwOTAzNikgaGFzIGJlZW4gZml4ZWQgYW5kXG4gICAgICAgIC8vIG1vc3QgY2xpZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cbiAgICAgICAgV1tpXSA9XG4gICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCkgPDwgMjQpIHxcbiAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMSkgPDwgMTYpIHxcbiAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMikgPDwgOCkgfFxuICAgICAgICAgIGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDMpO1xuICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgIFdbaV0gPVxuICAgICAgICAgIChidWZbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICAgICAgIChidWZbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICAgICAoYnVmW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgICAgICBidWZbb2Zmc2V0ICsgM107XG4gICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV4cGFuZCB0byA4MCB3b3Jkc1xuICAgIGZvciAobGV0IGkgPSAxNjsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xuICAgICAgV1tpXSA9ICgodCA8PCAxKSB8ICh0ID4+PiAzMSkpICYgMHhmZmZmZmZmZjtcbiAgICB9XG5cbiAgICBsZXQgYSA9IHRoaXMuY2hhaW5fWzBdO1xuICAgIGxldCBiID0gdGhpcy5jaGFpbl9bMV07XG4gICAgbGV0IGMgPSB0aGlzLmNoYWluX1syXTtcbiAgICBsZXQgZCA9IHRoaXMuY2hhaW5fWzNdO1xuICAgIGxldCBlID0gdGhpcy5jaGFpbl9bNF07XG4gICAgbGV0IGYsIGs7XG5cbiAgICAvLyBUT0RPKHVzZXIpOiBUcnkgdG8gdW5yb2xsIHRoaXMgbG9vcCB0byBzcGVlZCB1cCB0aGUgY29tcHV0YXRpb24uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBpZiAoaSA8IDQwKSB7XG4gICAgICAgIGlmIChpIDwgMjApIHtcbiAgICAgICAgICBmID0gZCBeIChiICYgKGMgXiBkKSk7XG4gICAgICAgICAgayA9IDB4NWE4Mjc5OTk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZiA9IGIgXiBjIF4gZDtcbiAgICAgICAgICBrID0gMHg2ZWQ5ZWJhMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGkgPCA2MCkge1xuICAgICAgICAgIGYgPSAoYiAmIGMpIHwgKGQgJiAoYiB8IGMpKTtcbiAgICAgICAgICBrID0gMHg4ZjFiYmNkYztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmID0gYiBeIGMgXiBkO1xuICAgICAgICAgIGsgPSAweGNhNjJjMWQ2O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHQgPSAoKChhIDw8IDUpIHwgKGEgPj4+IDI3KSkgKyBmICsgZSArIGsgKyBXW2ldKSAmIDB4ZmZmZmZmZmY7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9ICgoYiA8PCAzMCkgfCAoYiA+Pj4gMikpICYgMHhmZmZmZmZmZjtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IHQ7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFpbl9bMF0gPSAodGhpcy5jaGFpbl9bMF0gKyBhKSAmIDB4ZmZmZmZmZmY7XG4gICAgdGhpcy5jaGFpbl9bMV0gPSAodGhpcy5jaGFpbl9bMV0gKyBiKSAmIDB4ZmZmZmZmZmY7XG4gICAgdGhpcy5jaGFpbl9bMl0gPSAodGhpcy5jaGFpbl9bMl0gKyBjKSAmIDB4ZmZmZmZmZmY7XG4gICAgdGhpcy5jaGFpbl9bM10gPSAodGhpcy5jaGFpbl9bM10gKyBkKSAmIDB4ZmZmZmZmZmY7XG4gICAgdGhpcy5jaGFpbl9bNF0gPSAodGhpcy5jaGFpbl9bNF0gKyBlKSAmIDB4ZmZmZmZmZmY7XG4gIH1cblxuICB1cGRhdGUoYnl0ZXM/OiBudW1iZXJbXSB8IFVpbnQ4QXJyYXkgfCBzdHJpbmcsIGxlbmd0aD86IG51bWJlcik6IHZvaWQge1xuICAgIC8vIFRPRE8oam9obmxlbnopOiB0aWdodGVuIHRoZSBmdW5jdGlvbiBzaWduYXR1cmUgYW5kIHJlbW92ZSB0aGlzIGNoZWNrXG4gICAgaWYgKGJ5dGVzID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxlbmd0aCA9IGJ5dGVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCBsZW5ndGhNaW51c0Jsb2NrID0gbGVuZ3RoIC0gdGhpcy5ibG9ja1NpemU7XG4gICAgbGV0IG4gPSAwO1xuICAgIC8vIFVzaW5nIGxvY2FsIGluc3RlYWQgb2YgbWVtYmVyIHZhcmlhYmxlcyBnaXZlcyB+NSUgc3BlZWR1cCBvbiBGaXJlZm94IDE2LlxuICAgIGNvbnN0IGJ1ZiA9IHRoaXMuYnVmXztcbiAgICBsZXQgaW5idWYgPSB0aGlzLmluYnVmXztcblxuICAgIC8vIFRoZSBvdXRlciB3aGlsZSBsb29wIHNob3VsZCBleGVjdXRlIGF0IG1vc3QgdHdpY2UuXG4gICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcbiAgICAgIC8vIFdoZW4gd2UgaGF2ZSBubyBkYXRhIGluIHRoZSBibG9jayB0byB0b3AgdXAsIHdlIGNhbiBkaXJlY3RseSBwcm9jZXNzIHRoZVxuICAgICAgLy8gaW5wdXQgYnVmZmVyIChhc3N1bWluZyBpdCBjb250YWlucyBzdWZmaWNpZW50IGRhdGEpLiBUaGlzIGdpdmVzIH4yNSVcbiAgICAgIC8vIHNwZWVkdXAgb24gQ2hyb21lIDIzIGFuZCB+MTUlIHNwZWVkdXAgb24gRmlyZWZveCAxNiwgYnV0IHJlcXVpcmVzIHRoYXRcbiAgICAgIC8vIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGluIGxhcmdlIGNodW5rcyAob3IgaW4gbXVsdGlwbGVzIG9mIDY0IGJ5dGVzKS5cbiAgICAgIGlmIChpbmJ1ZiA9PT0gMCkge1xuICAgICAgICB3aGlsZSAobiA8PSBsZW5ndGhNaW51c0Jsb2NrKSB7XG4gICAgICAgICAgdGhpcy5jb21wcmVzc18oYnl0ZXMsIG4pO1xuICAgICAgICAgIG4gKz0gdGhpcy5ibG9ja1NpemU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcbiAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXMuY2hhckNvZGVBdChuKTtcbiAgICAgICAgICArK2luYnVmO1xuICAgICAgICAgICsrbjtcbiAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xuICAgICAgICAgICAgaW5idWYgPSAwO1xuICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xuICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlc1tuXTtcbiAgICAgICAgICArK2luYnVmO1xuICAgICAgICAgICsrbjtcbiAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xuICAgICAgICAgICAgaW5idWYgPSAwO1xuICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbmJ1Zl8gPSBpbmJ1ZjtcbiAgICB0aGlzLnRvdGFsXyArPSBsZW5ndGg7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICovXG4gIGRpZ2VzdCgpOiBudW1iZXJbXSB7XG4gICAgY29uc3QgZGlnZXN0OiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCB0b3RhbEJpdHMgPSB0aGlzLnRvdGFsXyAqIDg7XG5cbiAgICAvLyBBZGQgcGFkIDB4ODAgMHgwMCouXG4gICAgaWYgKHRoaXMuaW5idWZfIDwgNTYpIHtcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgNTYgLSB0aGlzLmluYnVmXyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgdGhpcy5ibG9ja1NpemUgLSAodGhpcy5pbmJ1Zl8gLSA1NikpO1xuICAgIH1cblxuICAgIC8vIEFkZCAjIGJpdHMuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuYmxvY2tTaXplIC0gMTsgaSA+PSA1NjsgaS0tKSB7XG4gICAgICB0aGlzLmJ1Zl9baV0gPSB0b3RhbEJpdHMgJiAyNTU7XG4gICAgICB0b3RhbEJpdHMgLz0gMjU2OyAvLyBEb24ndCB1c2UgYml0LXNoaWZ0aW5nIGhlcmUhXG4gICAgfVxuXG4gICAgdGhpcy5jb21wcmVzc18odGhpcy5idWZfKTtcblxuICAgIGxldCBuID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDI0OyBqID49IDA7IGogLT0gOCkge1xuICAgICAgICBkaWdlc3Rbbl0gPSAodGhpcy5jaGFpbl9baV0gPj4gaikgJiAyNTU7XG4gICAgICAgICsrbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRpZ2VzdDtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgdHlwZSBOZXh0Rm48VD4gPSAodmFsdWU6IFQpID0+IHZvaWQ7XG5leHBvcnQgdHlwZSBFcnJvckZuID0gKGVycm9yOiBFcnJvcikgPT4gdm9pZDtcbmV4cG9ydCB0eXBlIENvbXBsZXRlRm4gPSAoKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9ic2VydmVyPFQ+IHtcbiAgLy8gQ2FsbGVkIG9uY2UgZm9yIGVhY2ggdmFsdWUgaW4gYSBzdHJlYW0gb2YgdmFsdWVzLlxuICBuZXh0OiBOZXh0Rm48VD47XG5cbiAgLy8gQSBzdHJlYW0gdGVybWluYXRlcyBieSBhIHNpbmdsZSBjYWxsIHRvIEVJVEhFUiBlcnJvcigpIG9yIGNvbXBsZXRlKCkuXG4gIGVycm9yOiBFcnJvckZuO1xuXG4gIC8vIE5vIGV2ZW50cyB3aWxsIGJlIHNlbnQgdG8gbmV4dCgpIG9uY2UgY29tcGxldGUoKSBpcyBjYWxsZWQuXG4gIGNvbXBsZXRlOiBDb21wbGV0ZUZuO1xufVxuXG5leHBvcnQgdHlwZSBQYXJ0aWFsT2JzZXJ2ZXI8VD4gPSBQYXJ0aWFsPE9ic2VydmVyPFQ+PjtcblxuLy8gVE9ETzogU3VwcG9ydCBhbHNvIFVuc3Vic2NyaWJlLnVuc3Vic2NyaWJlP1xuZXhwb3J0IHR5cGUgVW5zdWJzY3JpYmUgPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIFRoZSBTdWJzY3JpYmUgaW50ZXJmYWNlIGhhcyB0d28gZm9ybXMgLSBwYXNzaW5nIHRoZSBpbmxpbmUgZnVuY3Rpb25cbiAqIGNhbGxiYWNrcywgb3IgYSBvYmplY3QgaW50ZXJmYWNlIHdpdGggY2FsbGJhY2sgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdWJzY3JpYmU8VD4ge1xuICAobmV4dD86IE5leHRGbjxUPiwgZXJyb3I/OiBFcnJvckZuLCBjb21wbGV0ZT86IENvbXBsZXRlRm4pOiBVbnN1YnNjcmliZTtcbiAgKG9ic2VydmVyOiBQYXJ0aWFsT2JzZXJ2ZXI8VD4pOiBVbnN1YnNjcmliZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYnNlcnZhYmxlPFQ+IHtcbiAgLy8gU3Vic2NyaWJlIG1ldGhvZFxuICBzdWJzY3JpYmU6IFN1YnNjcmliZTxUPjtcbn1cblxuZXhwb3J0IHR5cGUgRXhlY3V0b3I8VD4gPSAob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB2b2lkO1xuXG4vKipcbiAqIEhlbHBlciB0byBtYWtlIGEgU3Vic2NyaWJlIGZ1bmN0aW9uIChqdXN0IGxpa2UgUHJvbWlzZSBoZWxwcyBtYWtlIGFcbiAqIFRoZW5hYmxlKS5cbiAqXG4gKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcbiAqICAgICBhcyBhIHByb3h5LlxuICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3Vic2NyaWJlPFQ+KFxuICBleGVjdXRvcjogRXhlY3V0b3I8VD4sXG4gIG9uTm9PYnNlcnZlcnM/OiBFeGVjdXRvcjxUPlxuKTogU3Vic2NyaWJlPFQ+IHtcbiAgY29uc3QgcHJveHkgPSBuZXcgT2JzZXJ2ZXJQcm94eTxUPihleGVjdXRvciwgb25Ob09ic2VydmVycyk7XG4gIHJldHVybiBwcm94eS5zdWJzY3JpYmUuYmluZChwcm94eSk7XG59XG5cbi8qKlxuICogSW1wbGVtZW50IGZhbi1vdXQgZm9yIGFueSBudW1iZXIgb2YgT2JzZXJ2ZXJzIGF0dGFjaGVkIHZpYSBhIHN1YnNjcmliZVxuICogZnVuY3Rpb24uXG4gKi9cbmNsYXNzIE9ic2VydmVyUHJveHk8VD4gaW1wbGVtZW50cyBPYnNlcnZlcjxUPiB7XG4gIHByaXZhdGUgb2JzZXJ2ZXJzOiBBcnJheTxPYnNlcnZlcjxUPj4gfCB1bmRlZmluZWQgPSBbXTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZXM6IFVuc3Vic2NyaWJlW10gPSBbXTtcbiAgcHJpdmF0ZSBvbk5vT2JzZXJ2ZXJzOiBFeGVjdXRvcjxUPiB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBvYnNlcnZlckNvdW50ID0gMDtcbiAgLy8gTWljcm8tdGFzayBzY2hlZHVsaW5nIGJ5IGNhbGxpbmcgdGFzay50aGVuKCkuXG4gIHByaXZhdGUgdGFzayA9IFByb21pc2UucmVzb2x2ZSgpO1xuICBwcml2YXRlIGZpbmFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGZpbmFsRXJyb3I/OiBFcnJvcjtcblxuICAvKipcbiAgICogQHBhcmFtIGV4ZWN1dG9yIEZ1bmN0aW9uIHdoaWNoIGNhbiBtYWtlIGNhbGxzIHRvIGEgc2luZ2xlIE9ic2VydmVyXG4gICAqICAgICBhcyBhIHByb3h5LlxuICAgKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXG4gICAqL1xuICBjb25zdHJ1Y3RvcihleGVjdXRvcjogRXhlY3V0b3I8VD4sIG9uTm9PYnNlcnZlcnM/OiBFeGVjdXRvcjxUPikge1xuICAgIHRoaXMub25Ob09ic2VydmVycyA9IG9uTm9PYnNlcnZlcnM7XG4gICAgLy8gQ2FsbCB0aGUgZXhlY3V0b3IgYXN5bmNocm9ub3VzbHkgc28gc3Vic2NyaWJlcnMgdGhhdCBhcmUgY2FsbGVkXG4gICAgLy8gc3luY2hyb25vdXNseSBhZnRlciB0aGUgY3JlYXRpb24gb2YgdGhlIHN1YnNjcmliZSBmdW5jdGlvblxuICAgIC8vIGNhbiBzdGlsbCByZWNlaXZlIHRoZSB2ZXJ5IGZpcnN0IHZhbHVlIGdlbmVyYXRlZCBpbiB0aGUgZXhlY3V0b3IuXG4gICAgdGhpcy50YXNrXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGV4ZWN1dG9yKHRoaXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgdGhpcy5lcnJvcihlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmV4dCh2YWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHtcbiAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZXJyb3IoZXJyb3I6IEVycm9yKTogdm9pZCB7XG4gICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xuICAgIHRoaXMuY2xvc2UoZXJyb3IpO1xuICB9XG5cbiAgY29tcGxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyOiBPYnNlcnZlcjxUPikgPT4ge1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gYWRkIGFuIE9ic2VydmVyIHRvIHRoZSBmYW4tb3V0IGxpc3QuXG4gICAqXG4gICAqIC0gV2UgcmVxdWlyZSB0aGF0IG5vIGV2ZW50IGlzIHNlbnQgdG8gYSBzdWJzY3JpYmVyIHN5Y2hyb25vdXNseSB0byB0aGVpclxuICAgKiAgIGNhbGwgdG8gc3Vic2NyaWJlKCkuXG4gICAqL1xuICBzdWJzY3JpYmUoXG4gICAgbmV4dE9yT2JzZXJ2ZXI/OiBOZXh0Rm48VD4gfCBQYXJ0aWFsT2JzZXJ2ZXI8VD4sXG4gICAgZXJyb3I/OiBFcnJvckZuLFxuICAgIGNvbXBsZXRlPzogQ29tcGxldGVGblxuICApOiBVbnN1YnNjcmliZSB7XG4gICAgbGV0IG9ic2VydmVyOiBPYnNlcnZlcjxUPjtcblxuICAgIGlmIChcbiAgICAgIG5leHRPck9ic2VydmVyID09PSB1bmRlZmluZWQgJiZcbiAgICAgIGVycm9yID09PSB1bmRlZmluZWQgJiZcbiAgICAgIGNvbXBsZXRlID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBPYnNlcnZlci4nKTtcbiAgICB9XG5cbiAgICAvLyBBc3NlbWJsZSBhbiBPYnNlcnZlciBvYmplY3Qgd2hlbiBwYXNzZWQgYXMgY2FsbGJhY2sgZnVuY3Rpb25zLlxuICAgIGlmIChcbiAgICAgIGltcGxlbWVudHNBbnlNZXRob2RzKG5leHRPck9ic2VydmVyIGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LCBbXG4gICAgICAgICduZXh0JyxcbiAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgJ2NvbXBsZXRlJ1xuICAgICAgXSlcbiAgICApIHtcbiAgICAgIG9ic2VydmVyID0gbmV4dE9yT2JzZXJ2ZXIgYXMgT2JzZXJ2ZXI8VD47XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ic2VydmVyID0ge1xuICAgICAgICBuZXh0OiBuZXh0T3JPYnNlcnZlciBhcyBOZXh0Rm48VD4sXG4gICAgICAgIGVycm9yLFxuICAgICAgICBjb21wbGV0ZVxuICAgICAgfSBhcyBPYnNlcnZlcjxUPjtcbiAgICB9XG5cbiAgICBpZiAob2JzZXJ2ZXIubmV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYnNlcnZlci5uZXh0ID0gbm9vcCBhcyBOZXh0Rm48VD47XG4gICAgfVxuICAgIGlmIChvYnNlcnZlci5lcnJvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYnNlcnZlci5lcnJvciA9IG5vb3AgYXMgRXJyb3JGbjtcbiAgICB9XG4gICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlID0gbm9vcCBhcyBDb21wbGV0ZUZuO1xuICAgIH1cblxuICAgIGNvbnN0IHVuc3ViID0gdGhpcy51bnN1YnNjcmliZU9uZS5iaW5kKHRoaXMsIHRoaXMub2JzZXJ2ZXJzIS5sZW5ndGgpO1xuXG4gICAgLy8gQXR0ZW1wdCB0byBzdWJzY3JpYmUgdG8gYSB0ZXJtaW5hdGVkIE9ic2VydmFibGUgLSB3ZVxuICAgIC8vIGp1c3QgcmVzcG9uZCB0byB0aGUgT2JzZXJ2ZXIgd2l0aCB0aGUgZmluYWwgZXJyb3Igb3IgY29tcGxldGVcbiAgICAvLyBldmVudC5cbiAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodGhpcy5maW5hbEVycm9yKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcih0aGlzLmZpbmFsRXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIG5vdGhpbmdcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm9ic2VydmVycyEucHVzaChvYnNlcnZlciBhcyBPYnNlcnZlcjxUPik7XG5cbiAgICByZXR1cm4gdW5zdWI7XG4gIH1cblxuICAvLyBVbnN1YnNjcmliZSBpcyBzeW5jaHJvbm91cyAtIHdlIGd1YXJhbnRlZSB0aGF0IG5vIGV2ZW50cyBhcmUgc2VudCB0b1xuICAvLyBhbnkgdW5zdWJzY3JpYmVkIE9ic2VydmVyLlxuICBwcml2YXRlIHVuc3Vic2NyaWJlT25lKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLm9ic2VydmVycyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub2JzZXJ2ZXJzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWxldGUgdGhpcy5vYnNlcnZlcnNbaV07XG5cbiAgICB0aGlzLm9ic2VydmVyQ291bnQgLT0gMTtcbiAgICBpZiAodGhpcy5vYnNlcnZlckNvdW50ID09PSAwICYmIHRoaXMub25Ob09ic2VydmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLm9uTm9PYnNlcnZlcnModGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JFYWNoT2JzZXJ2ZXIoZm46IChvYnNlcnZlcjogT2JzZXJ2ZXI8VD4pID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgIC8vIEFscmVhZHkgY2xvc2VkIGJ5IHByZXZpb3VzIGV2ZW50Li4uLmp1c3QgZWF0IHRoZSBhZGRpdGlvbmFsIHZhbHVlcy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSBzZW5kT25lIGNhbGxzIGFzeW5jaHJvbm91c2x5IC0gdGhlcmUgaXMgbm8gY2hhbmNlIHRoYXRcbiAgICAvLyB0aGlzLm9ic2VydmVycyB3aWxsIGJlY29tZSB1bmRlZmluZWQuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9ic2VydmVycyEubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc2VuZE9uZShpLCBmbik7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsbCB0aGUgT2JzZXJ2ZXIgdmlhIG9uZSBvZiBpdCdzIGNhbGxiYWNrIGZ1bmN0aW9uLiBXZSBhcmUgY2FyZWZ1bCB0b1xuICAvLyBjb25maXJtIHRoYXQgdGhlIG9ic2VydmUgaGFzIG5vdCBiZWVuIHVuc3Vic2NyaWJlZCBzaW5jZSB0aGlzIGFzeW5jaHJvbm91c1xuICAvLyBmdW5jdGlvbiBoYWQgYmVlbiBxdWV1ZWQuXG4gIHByaXZhdGUgc2VuZE9uZShpOiBudW1iZXIsIGZuOiAob2JzZXJ2ZXI6IE9ic2VydmVyPFQ+KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgLy8gRXhlY3V0ZSB0aGUgY2FsbGJhY2sgYXN5bmNocm9ub3VzbHlcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vYnNlcnZlcnNbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGZuKHRoaXMub2JzZXJ2ZXJzW2ldKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIElnbm9yZSBleGNlcHRpb25zIHJhaXNlZCBpbiBPYnNlcnZlcnMgb3IgbWlzc2luZyBtZXRob2RzIG9mIGFuXG4gICAgICAgICAgLy8gT2JzZXJ2ZXIuXG4gICAgICAgICAgLy8gTG9nIGVycm9yIHRvIGNvbnNvbGUuIGIvMzE0MDQ4MDZcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlKGVycj86IEVycm9yKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcbiAgICBpZiAoZXJyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZmluYWxFcnJvciA9IGVycjtcbiAgICB9XG4gICAgLy8gUHJveHkgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIGdhcmJhZ2UgY29sbGVjdCByZWZlcmVuY2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKiBUdXJuIHN5bmNocm9ub3VzIGZ1bmN0aW9uIGludG8gb25lIGNhbGxlZCBhc3luY2hyb25vdXNseS4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5leHBvcnQgZnVuY3Rpb24gYXN5bmMoZm46IEZ1bmN0aW9uLCBvbkVycm9yPzogRXJyb3JGbik6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuICguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZm4oLi4uYXJncyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgdGhlIG9iamVjdCBwYXNzZWQgaW4gaW1wbGVtZW50cyBhbnkgb2YgdGhlIG5hbWVkIG1ldGhvZHMuXG4gKi9cbmZ1bmN0aW9uIGltcGxlbWVudHNBbnlNZXRob2RzKFxuICBvYmo6IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9LFxuICBtZXRob2RzOiBzdHJpbmdbXVxuKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XG4gICAgaWYgKG1ldGhvZCBpbiBvYmogJiYgdHlwZW9mIG9ialttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKTogdm9pZCB7XG4gIC8vIGRvIG5vdGhpbmdcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcHJvdmlkZWQgZm9yIGEgcHVibGljIGZ1bmN0aW9uLlxuICogVGhyb3dzIGFuIGVycm9yIGlmIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcbiAqIEBwYXJhbSBtaW5Db3VudCBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxuICogQHBhcmFtIG1heENvdW50IFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudCB0byBhbGxvdyBmb3IgdGhlIGZ1bmN0aW9uIGNhbGxcbiAqIEBwYXJhbSBhcmdDb3VudCBUaGUgYWN0dWFsIG51bWJlciBvZiBhcmd1bWVudHMgcHJvdmlkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUFyZ0NvdW50ID0gZnVuY3Rpb24gKFxuICBmbk5hbWU6IHN0cmluZyxcbiAgbWluQ291bnQ6IG51bWJlcixcbiAgbWF4Q291bnQ6IG51bWJlcixcbiAgYXJnQ291bnQ6IG51bWJlclxuKTogdm9pZCB7XG4gIGxldCBhcmdFcnJvcjtcbiAgaWYgKGFyZ0NvdW50IDwgbWluQ291bnQpIHtcbiAgICBhcmdFcnJvciA9ICdhdCBsZWFzdCAnICsgbWluQ291bnQ7XG4gIH0gZWxzZSBpZiAoYXJnQ291bnQgPiBtYXhDb3VudCkge1xuICAgIGFyZ0Vycm9yID0gbWF4Q291bnQgPT09IDAgPyAnbm9uZScgOiAnbm8gbW9yZSB0aGFuICcgKyBtYXhDb3VudDtcbiAgfVxuICBpZiAoYXJnRXJyb3IpIHtcbiAgICBjb25zdCBlcnJvciA9XG4gICAgICBmbk5hbWUgK1xuICAgICAgJyBmYWlsZWQ6IFdhcyBjYWxsZWQgd2l0aCAnICtcbiAgICAgIGFyZ0NvdW50ICtcbiAgICAgIChhcmdDb3VudCA9PT0gMSA/ICcgYXJndW1lbnQuJyA6ICcgYXJndW1lbnRzLicpICtcbiAgICAgICcgRXhwZWN0cyAnICtcbiAgICAgIGFyZ0Vycm9yICtcbiAgICAgICcuJztcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyB0byBwcmVmaXggYW4gZXJyb3IgbWVzc2FnZSBhYm91dCBmYWlsZWQgYXJndW1lbnQgdmFsaWRhdGlvblxuICpcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcbiAqIEBwYXJhbSBhcmdOYW1lIFRoZSBuYW1lIG9mIHRoZSBhcmd1bWVudFxuICogQHJldHVybiBUaGUgcHJlZml4IHRvIGFkZCB0byB0aGUgZXJyb3IgdGhyb3duIGZvciB2YWxpZGF0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JQcmVmaXgoZm5OYW1lOiBzdHJpbmcsIGFyZ05hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtmbk5hbWV9IGZhaWxlZDogJHthcmdOYW1lfSBhcmd1bWVudCBgO1xufVxuXG4vKipcbiAqIEBwYXJhbSBmbk5hbWVcbiAqIEBwYXJhbSBhcmd1bWVudE51bWJlclxuICogQHBhcmFtIG5hbWVzcGFjZVxuICogQHBhcmFtIG9wdGlvbmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU5hbWVzcGFjZShcbiAgZm5OYW1lOiBzdHJpbmcsXG4gIG5hbWVzcGFjZTogc3RyaW5nLFxuICBvcHRpb25hbDogYm9vbGVhblxuKTogdm9pZCB7XG4gIGlmIChvcHRpb25hbCAmJiAhbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgbmFtZXNwYWNlICE9PSAnc3RyaW5nJykge1xuICAgIC8vVE9ETzogSSBzaG91bGQgZG8gbW9yZSB2YWxpZGF0aW9uIGhlcmUuIFdlIG9ubHkgYWxsb3cgY2VydGFpbiBjaGFycyBpbiBuYW1lc3BhY2VzLlxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGVycm9yUHJlZml4KGZuTmFtZSwgJ25hbWVzcGFjZScpICsgJ211c3QgYmUgYSB2YWxpZCBmaXJlYmFzZSBuYW1lc3BhY2UuJ1xuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ2FsbGJhY2soXG4gIGZuTmFtZTogc3RyaW5nLFxuICBhcmd1bWVudE5hbWU6IHN0cmluZyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxuICBvcHRpb25hbDogYm9vbGVhblxuKTogdm9pZCB7XG4gIGlmIChvcHRpb25hbCAmJiAhY2FsbGJhY2spIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uJ1xuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlQ29udGV4dE9iamVjdChcbiAgZm5OYW1lOiBzdHJpbmcsXG4gIGFyZ3VtZW50TmFtZTogc3RyaW5nLFxuICBjb250ZXh0OiB1bmtub3duLFxuICBvcHRpb25hbDogYm9vbGVhblxuKTogdm9pZCB7XG4gIGlmIChvcHRpb25hbCAmJiAhY29udGV4dCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIGNvbnRleHQgIT09ICdvYmplY3QnIHx8IGNvbnRleHQgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBlcnJvclByZWZpeChmbk5hbWUsIGFyZ3VtZW50TmFtZSkgKyAnbXVzdCBiZSBhIHZhbGlkIGNvbnRleHQgb2JqZWN0LidcbiAgICApO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9hc3NlcnQnO1xuXG4vLyBDb2RlIG9yaWdpbmFsbHkgY2FtZSBmcm9tIGdvb2cuY3J5cHQuc3RyaW5nVG9VdGY4Qnl0ZUFycmF5LCBidXQgZm9yIHNvbWUgcmVhc29uIHRoZXlcbi8vIGF1dG9tYXRpY2FsbHkgcmVwbGFjZWQgJ1xcclxcbicgd2l0aCAnXFxuJywgYW5kIHRoZXkgZGlkbid0IGhhbmRsZSBzdXJyb2dhdGUgcGFpcnMsXG4vLyBzbyBpdCdzIGJlZW4gbW9kaWZpZWQuXG5cbi8vIE5vdGUgdGhhdCBub3QgYWxsIFVuaWNvZGUgY2hhcmFjdGVycyBhcHBlYXIgYXMgc2luZ2xlIGNoYXJhY3RlcnMgaW4gSmF2YVNjcmlwdCBzdHJpbmdzLlxuLy8gZnJvbUNoYXJDb2RlIHJldHVybnMgdGhlIFVURi0xNiBlbmNvZGluZyBvZiBhIGNoYXJhY3RlciAtIHNvIHNvbWUgVW5pY29kZSBjaGFyYWN0ZXJzXG4vLyB1c2UgMiBjaGFyYWN0ZXJzIGluIEphdmFzY3JpcHQuICBBbGwgNC1ieXRlIFVURi04IGNoYXJhY3RlcnMgYmVnaW4gd2l0aCBhIGZpcnN0XG4vLyBjaGFyYWN0ZXIgaW4gdGhlIHJhbmdlIDB4RDgwMCAtIDB4REJGRiAodGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHNvLWNhbGxlZCBzdXJyb2dhdGVcbi8vIHBhaXIpLlxuLy8gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy0xNS4xLjNcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ1RvQnl0ZUFycmF5ID0gZnVuY3Rpb24gKHN0cjogc3RyaW5nKTogbnVtYmVyW10ge1xuICBjb25zdCBvdXQ6IG51bWJlcltdID0gW107XG4gIGxldCBwID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXG4gICAgLy8gSXMgdGhpcyB0aGUgbGVhZCBzdXJyb2dhdGUgaW4gYSBzdXJyb2dhdGUgcGFpcj9cbiAgICBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcbiAgICAgIGNvbnN0IGhpZ2ggPSBjIC0gMHhkODAwOyAvLyB0aGUgaGlnaCAxMCBiaXRzLlxuICAgICAgaSsrO1xuICAgICAgYXNzZXJ0KGkgPCBzdHIubGVuZ3RoLCAnU3Vycm9nYXRlIHBhaXIgbWlzc2luZyB0cmFpbCBzdXJyb2dhdGUuJyk7XG4gICAgICBjb25zdCBsb3cgPSBzdHIuY2hhckNvZGVBdChpKSAtIDB4ZGMwMDsgLy8gdGhlIGxvdyAxMCBiaXRzLlxuICAgICAgYyA9IDB4MTAwMDAgKyAoaGlnaCA8PCAxMCkgKyBsb3c7XG4gICAgfVxuXG4gICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgIG91dFtwKytdID0gYztcbiAgICB9IGVsc2UgaWYgKGMgPCAyMDQ4KSB7XG4gICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xuICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICB9IGVsc2UgaWYgKGMgPCA2NTUzNikge1xuICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XG4gICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dFtwKytdID0gKGMgPj4gMTgpIHwgMjQwO1xuICAgICAgb3V0W3ArK10gPSAoKGMgPj4gMTIpICYgNjMpIHwgMTI4O1xuICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XG4gICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGUgbGVuZ3RoIHdpdGhvdXQgYWN0dWFsbHkgY29udmVydGluZzsgdXNlZnVsIGZvciBkb2luZyBjaGVhcGVyIHZhbGlkYXRpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdMZW5ndGggPSBmdW5jdGlvbiAoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xuICBsZXQgcCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICBwKys7XG4gICAgfSBlbHNlIGlmIChjIDwgMjA0OCkge1xuICAgICAgcCArPSAyO1xuICAgIH0gZWxzZSBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcbiAgICAgIC8vIExlYWQgc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXIuICBUaGUgcGFpciB0b2dldGhlciB3aWxsIHRha2UgNCBieXRlcyB0byByZXByZXNlbnQuXG4gICAgICBwICs9IDQ7XG4gICAgICBpKys7IC8vIHNraXAgdHJhaWwgc3Vycm9nYXRlLlxuICAgIH0gZWxzZSB7XG4gICAgICBwICs9IDM7XG4gICAgfVxuICB9XG4gIHJldHVybiBwO1xufTtcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMiBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIENvcGllZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTE3NTIzXG4gKiBHZW5lcmF0ZXMgYSBuZXcgdXVpZC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHV1aWR2NCA9IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xuICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBjID0+IHtcbiAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNikgfCAwLFxuICAgICAgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MykgfCAweDg7XG4gICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICB9KTtcbn07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUaGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBleHBvbmVudGlhbGx5IGluY3JlYXNlLlxuICovXG5jb25zdCBERUZBVUxUX0lOVEVSVkFMX01JTExJUyA9IDEwMDA7XG5cbi8qKlxuICogVGhlIGZhY3RvciB0byBiYWNrb2ZmIGJ5LlxuICogU2hvdWxkIGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAxLlxuICovXG5jb25zdCBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SID0gMjtcblxuLyoqXG4gKiBUaGUgbWF4aW11bSBtaWxsaXNlY29uZHMgdG8gaW5jcmVhc2UgdG8uXG4gKlxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xuICovXG5leHBvcnQgY29uc3QgTUFYX1ZBTFVFX01JTExJUyA9IDQgKiA2MCAqIDYwICogMTAwMDsgLy8gRm91ciBob3VycywgbGlrZSBpT1MgYW5kIEFuZHJvaWQuXG5cbi8qKlxuICogVGhlIHBlcmNlbnRhZ2Ugb2YgYmFja29mZiB0aW1lIHRvIHJhbmRvbWl6ZSBieS5cbiAqIFNlZVxuICogaHR0cDovL2dvL3NhZmUtY2xpZW50LWJlaGF2aW9yI3N0ZXAtMS1kZXRlcm1pbmUtdGhlLWFwcHJvcHJpYXRlLXJldHJ5LWludGVydmFsLXRvLWhhbmRsZS1zcGlrZS10cmFmZmljXG4gKiBmb3IgY29udGV4dC5cbiAqXG4gKiA8cD5WaXNpYmxlIGZvciB0ZXN0aW5nXG4gKi9cbmV4cG9ydCBjb25zdCBSQU5ET01fRkFDVE9SID0gMC41O1xuXG4vKipcbiAqIEJhc2VkIG9uIHRoZSBiYWNrb2ZmIG1ldGhvZCBmcm9tXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2Nsb3N1cmUtbGlicmFyeS9ibG9iL21hc3Rlci9jbG9zdXJlL2dvb2cvbWF0aC9leHBvbmVudGlhbGJhY2tvZmYuanMuXG4gKiBFeHRyYWN0ZWQgaGVyZSBzbyB3ZSBkb24ndCBuZWVkIHRvIHBhc3MgbWV0YWRhdGEgYW5kIGEgc3RhdGVmdWwgRXhwb25lbnRpYWxCYWNrb2ZmIG9iamVjdCBhcm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVCYWNrb2ZmTWlsbGlzKFxuICBiYWNrb2ZmQ291bnQ6IG51bWJlcixcbiAgaW50ZXJ2YWxNaWxsaXM6IG51bWJlciA9IERFRkFVTFRfSU5URVJWQUxfTUlMTElTLFxuICBiYWNrb2ZmRmFjdG9yOiBudW1iZXIgPSBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SXG4pOiBudW1iZXIge1xuICAvLyBDYWxjdWxhdGVzIGFuIGV4cG9uZW50aWFsbHkgaW5jcmVhc2luZyB2YWx1ZS5cbiAgLy8gRGV2aWF0aW9uOiBjYWxjdWxhdGVzIHZhbHVlIGZyb20gY291bnQgYW5kIGEgY29uc3RhbnQgaW50ZXJ2YWwsIHNvIHdlIG9ubHkgbmVlZCB0byBzYXZlIHZhbHVlXG4gIC8vIGFuZCBjb3VudCB0byByZXN0b3JlIHN0YXRlLlxuICBjb25zdCBjdXJyQmFzZVZhbHVlID0gaW50ZXJ2YWxNaWxsaXMgKiBNYXRoLnBvdyhiYWNrb2ZmRmFjdG9yLCBiYWNrb2ZmQ291bnQpO1xuXG4gIC8vIEEgcmFuZG9tIFwiZnV6elwiIHRvIGF2b2lkIHdhdmVzIG9mIHJldHJpZXMuXG4gIC8vIERldmlhdGlvbjogcmFuZG9tRmFjdG9yIGlzIHJlcXVpcmVkLlxuICBjb25zdCByYW5kb21XYWl0ID0gTWF0aC5yb3VuZChcbiAgICAvLyBBIGZyYWN0aW9uIG9mIHRoZSBiYWNrb2ZmIHZhbHVlIHRvIGFkZC9zdWJ0cmFjdC5cbiAgICAvLyBEZXZpYXRpb246IGNoYW5nZXMgbXVsdGlwbGljYXRpb24gb3JkZXIgdG8gaW1wcm92ZSByZWFkYWJpbGl0eS5cbiAgICBSQU5ET01fRkFDVE9SICpcbiAgICAgIGN1cnJCYXNlVmFsdWUgKlxuICAgICAgLy8gQSByYW5kb20gZmxvYXQgKHJvdW5kZWQgdG8gaW50IGJ5IE1hdGgucm91bmQgYWJvdmUpIGluIHRoZSByYW5nZSBbLTEsIDFdLiBEZXRlcm1pbmVzXG4gICAgICAvLyBpZiB3ZSBhZGQgb3Igc3VidHJhY3QuXG4gICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKlxuICAgICAgMlxuICApO1xuXG4gIC8vIExpbWl0cyBiYWNrb2ZmIHRvIG1heCB0byBhdm9pZCBlZmZlY3RpdmVseSBwZXJtYW5lbnQgYmFja29mZi5cbiAgcmV0dXJuIE1hdGgubWluKE1BWF9WQUxVRV9NSUxMSVMsIGN1cnJCYXNlVmFsdWUgKyByYW5kb21XYWl0KTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIFByb3ZpZGUgRW5nbGlzaCBvcmRpbmFsIGxldHRlcnMgYWZ0ZXIgYSBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9yZGluYWwoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaSkpIHtcbiAgICByZXR1cm4gYCR7aX1gO1xuICB9XG4gIHJldHVybiBpICsgaW5kaWNhdG9yKGkpO1xufVxuXG5mdW5jdGlvbiBpbmRpY2F0b3IoaTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaSA9IE1hdGguYWJzKGkpO1xuICBjb25zdCBjZW50ID0gaSAlIDEwMDtcbiAgaWYgKGNlbnQgPj0gMTAgJiYgY2VudCA8PSAyMCkge1xuICAgIHJldHVybiAndGgnO1xuICB9XG4gIGNvbnN0IGRlYyA9IGkgJSAxMDtcbiAgaWYgKGRlYyA9PT0gMSkge1xuICAgIHJldHVybiAnc3QnO1xuICB9XG4gIGlmIChkZWMgPT09IDIpIHtcbiAgICByZXR1cm4gJ25kJztcbiAgfVxuICBpZiAoZGVjID09PSAzKSB7XG4gICAgcmV0dXJuICdyZCc7XG4gIH1cbiAgcmV0dXJuICd0aCc7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBDb21wYXQ8VD4ge1xuICBfZGVsZWdhdGU6IFQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2R1bGFySW5zdGFuY2U8RXhwU2VydmljZT4oXG4gIHNlcnZpY2U6IENvbXBhdDxFeHBTZXJ2aWNlPiB8IEV4cFNlcnZpY2Vcbik6IEV4cFNlcnZpY2Uge1xuICBpZiAoc2VydmljZSAmJiAoc2VydmljZSBhcyBDb21wYXQ8RXhwU2VydmljZT4pLl9kZWxlZ2F0ZSkge1xuICAgIHJldHVybiAoc2VydmljZSBhcyBDb21wYXQ8RXhwU2VydmljZT4pLl9kZWxlZ2F0ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2VydmljZSBhcyBFeHBTZXJ2aWNlO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7XG4gIEluc3RhbnRpYXRpb25Nb2RlLFxuICBJbnN0YW5jZUZhY3RvcnksXG4gIENvbXBvbmVudFR5cGUsXG4gIERpY3Rpb25hcnksXG4gIE5hbWUsXG4gIG9uSW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2tcbn0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQ29tcG9uZW50IGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50PFQgZXh0ZW5kcyBOYW1lID0gTmFtZT4ge1xuICBtdWx0aXBsZUluc3RhbmNlcyA9IGZhbHNlO1xuICAvKipcbiAgICogUHJvcGVydGllcyB0byBiZSBhZGRlZCB0byB0aGUgc2VydmljZSBuYW1lc3BhY2VcbiAgICovXG4gIHNlcnZpY2VQcm9wczogRGljdGlvbmFyeSA9IHt9O1xuXG4gIGluc3RhbnRpYXRpb25Nb2RlID0gSW5zdGFudGlhdGlvbk1vZGUuTEFaWTtcblxuICBvbkluc3RhbmNlQ3JlYXRlZDogb25JbnN0YW5jZUNyZWF0ZWRDYWxsYmFjazxUPiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgcHVibGljIHNlcnZpY2UgbmFtZSwgZS5nLiBhcHAsIGF1dGgsIGZpcmVzdG9yZSwgZGF0YWJhc2VcbiAgICogQHBhcmFtIGluc3RhbmNlRmFjdG9yeSBTZXJ2aWNlIGZhY3RvcnkgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoZSBwdWJsaWMgaW50ZXJmYWNlXG4gICAqIEBwYXJhbSB0eXBlIHdoZXRoZXIgdGhlIHNlcnZpY2UgcHJvdmlkZWQgYnkgdGhlIGNvbXBvbmVudCBpcyBwdWJsaWMgb3IgcHJpdmF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcmVhZG9ubHkgbmFtZTogVCxcbiAgICByZWFkb25seSBpbnN0YW5jZUZhY3Rvcnk6IEluc3RhbmNlRmFjdG9yeTxUPixcbiAgICByZWFkb25seSB0eXBlOiBDb21wb25lbnRUeXBlXG4gICkge31cblxuICBzZXRJbnN0YW50aWF0aW9uTW9kZShtb2RlOiBJbnN0YW50aWF0aW9uTW9kZSk6IHRoaXMge1xuICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBtb2RlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0TXVsdGlwbGVJbnN0YW5jZXMobXVsdGlwbGVJbnN0YW5jZXM6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gbXVsdGlwbGVJbnN0YW5jZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRTZXJ2aWNlUHJvcHMocHJvcHM6IERpY3Rpb25hcnkpOiB0aGlzIHtcbiAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHByb3BzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2soY2FsbGJhY2s6IG9uSW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2s8VD4pOiB0aGlzIHtcbiAgICB0aGlzLm9uSW5zdGFuY2VDcmVhdGVkID0gY2FsbGJhY2s7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBDb21wb25lbnRDb250YWluZXIgfSBmcm9tICcuL2NvbXBvbmVudF9jb250YWluZXInO1xuaW1wb3J0IHsgREVGQVVMVF9FTlRSWV9OQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgSW5pdGlhbGl6ZU9wdGlvbnMsXG4gIEluc3RhbnRpYXRpb25Nb2RlLFxuICBOYW1lLFxuICBOYW1lU2VydmljZU1hcHBpbmcsXG4gIE9uSW5pdENhbGxCYWNrXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIFByb3ZpZGVyIGZvciBpbnN0YW5jZSBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gJ2F1dGgnLCAnYXV0aC1pbnRlcm5hbCdcbiAqIE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSBpcyBhbiBhbGlhcyBmb3IgdGhlIHR5cGUgb2YgdGhlIGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBQcm92aWRlcjxUIGV4dGVuZHMgTmFtZT4ge1xuICBwcml2YXRlIGNvbXBvbmVudDogQ29tcG9uZW50PFQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5zdGFuY2VzOiBNYXA8c3RyaW5nLCBOYW1lU2VydmljZU1hcHBpbmdbVF0+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IGluc3RhbmNlc0RlZmVycmVkOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIERlZmVycmVkPE5hbWVTZXJ2aWNlTWFwcGluZ1tUXT5cbiAgPiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBpbnN0YW5jZXNPcHRpb25zOiBNYXA8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4gPVxuICAgIG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBvbkluaXRDYWxsYmFja3M6IE1hcDxzdHJpbmcsIFNldDxPbkluaXRDYWxsQmFjazxUPj4+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogVCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyXG4gICkge31cblxuICAvKipcbiAgICogQHBhcmFtIGlkZW50aWZpZXIgQSBwcm92aWRlciBjYW4gcHJvdmlkZSBtdWxpdHBsZSBpbnN0YW5jZXMgb2YgYSBzZXJ2aWNlXG4gICAqIGlmIHRoaXMuY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzIGlzIHRydWUuXG4gICAqL1xuICBnZXQoaWRlbnRpZmllcj86IHN0cmluZyk6IFByb21pc2U8TmFtZVNlcnZpY2VNYXBwaW5nW1RdPiB7XG4gICAgLy8gaWYgbXVsdGlwbGVJbnN0YW5jZXMgaXMgbm90IHN1cHBvcnRlZCwgdXNlIHRoZSBkZWZhdWx0IG5hbWVcbiAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlc0RlZmVycmVkLmhhcyhub3JtYWxpemVkSWRlbnRpZmllcikpIHtcbiAgICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkPE5hbWVTZXJ2aWNlTWFwcGluZ1tUXT4oKTtcbiAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBkZWZlcnJlZCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxuICAgICAgICB0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKClcbiAgICAgICkge1xuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBzZXJ2aWNlIGlmIGl0IGNhbiBiZSBhdXRvLWluaXRpYWxpemVkXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xuICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uIGR1cmluZyBnZXQoKSwgaXQgc2hvdWxkIG5vdCBjYXVzZVxuICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IuIFdlIGp1c3QgcmV0dXJuIHRoZSB1bnJlc29sdmVkIHByb21pc2UgaW4gdGhpcyBjYXNlLlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKSEucHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucy5pZGVudGlmaWVyIEEgcHJvdmlkZXIgY2FuIHByb3ZpZGUgbXVsaXRwbGUgaW5zdGFuY2VzIG9mIGEgc2VydmljZVxuICAgKiBpZiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyBpcyB0cnVlLlxuICAgKiBAcGFyYW0gb3B0aW9ucy5vcHRpb25hbCBJZiBvcHRpb25hbCBpcyBmYWxzZSBvciBub3QgcHJvdmlkZWQsIHRoZSBtZXRob2QgdGhyb3dzIGFuIGVycm9yIHdoZW5cbiAgICogdGhlIHNlcnZpY2UgaXMgbm90IGltbWVkaWF0ZWx5IGF2YWlsYWJsZS5cbiAgICogSWYgb3B0aW9uYWwgaXMgdHJ1ZSwgdGhlIG1ldGhvZCByZXR1cm5zIG51bGwgaWYgdGhlIHNlcnZpY2UgaXMgbm90IGltbWVkaWF0ZWx5IGF2YWlsYWJsZS5cbiAgICovXG4gIGdldEltbWVkaWF0ZShvcHRpb25zOiB7XG4gICAgaWRlbnRpZmllcj86IHN0cmluZztcbiAgICBvcHRpb25hbDogdHJ1ZTtcbiAgfSk6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSB8IG51bGw7XG4gIGdldEltbWVkaWF0ZShvcHRpb25zPzoge1xuICAgIGlkZW50aWZpZXI/OiBzdHJpbmc7XG4gICAgb3B0aW9uYWw/OiBmYWxzZTtcbiAgfSk6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXTtcbiAgZ2V0SW1tZWRpYXRlKG9wdGlvbnM/OiB7XG4gICAgaWRlbnRpZmllcj86IHN0cmluZztcbiAgICBvcHRpb25hbD86IGJvb2xlYW47XG4gIH0pOiBOYW1lU2VydmljZU1hcHBpbmdbVF0gfCBudWxsIHtcbiAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxuICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoXG4gICAgICBvcHRpb25zPy5pZGVudGlmaWVyXG4gICAgKTtcbiAgICBjb25zdCBvcHRpb25hbCA9IG9wdGlvbnM/Lm9wdGlvbmFsID8/IGZhbHNlO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxuICAgICAgdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpXG4gICAgKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcbiAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEluIGNhc2UgYSBjb21wb25lbnQgaXMgbm90IGluaXRpYWxpemVkIGFuZCBzaG91bGQvY2FuIG5vdCBiZSBhdXRvLWluaXRpYWxpemVkIGF0IHRoZSBtb21lbnQsIHJldHVybiBudWxsIGlmIHRoZSBvcHRpb25hbCBmbGFnIGlzIHNldCwgb3IgdGhyb3dcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IEVycm9yKGBTZXJ2aWNlICR7dGhpcy5uYW1lfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29tcG9uZW50KCk6IENvbXBvbmVudDxUPiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgfVxuXG4gIHNldENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudDxUPik6IHZvaWQge1xuICAgIGlmIChjb21wb25lbnQubmFtZSAhPT0gdGhpcy5uYW1lKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgYE1pc21hdGNoaW5nIENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBmb3IgUHJvdmlkZXIgJHt0aGlzLm5hbWV9LmBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBFcnJvcihgQ29tcG9uZW50IGZvciAke3RoaXMubmFtZX0gaGFzIGFscmVhZHkgYmVlbiBwcm92aWRlZGApO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG4gICAgLy8gcmV0dXJuIGVhcmx5IHdpdGhvdXQgYXR0ZW1wdGluZyB0byBpbml0aWFsaXplIHRoZSBjb21wb25lbnQgaWYgdGhlIGNvbXBvbmVudCByZXF1aXJlcyBleHBsaWNpdCBpbml0aWFsaXphdGlvbiAoY2FsbGluZyBgUHJvdmlkZXIuaW5pdGlhbGl6ZSgpYClcbiAgICBpZiAoIXRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBzZXJ2aWNlIGlzIGVhZ2VyLCBpbml0aWFsaXplIHRoZSBkZWZhdWx0IGluc3RhbmNlXG4gICAgaWYgKGlzQ29tcG9uZW50RWFnZXIoY29tcG9uZW50KSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHsgaW5zdGFuY2VJZGVudGlmaWVyOiBERUZBVUxUX0VOVFJZX05BTUUgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgZm9yIGFuIGVhZ2VyIENvbXBvbmVudCB0aHJvd3MgYW4gZXhjZXB0aW9uIGR1cmluZyB0aGUgZWFnZXJcbiAgICAgICAgLy8gaW5pdGlhbGl6YXRpb24sIGl0IHNob3VsZCBub3QgY2F1c2UgYSBmYXRhbCBlcnJvci5cbiAgICAgICAgLy8gVE9ETzogSW52ZXN0aWdhdGUgaWYgd2UgbmVlZCB0byBtYWtlIGl0IGNvbmZpZ3VyYWJsZSwgYmVjYXVzZSBzb21lIGNvbXBvbmVudCBtYXkgd2FudCB0byBjYXVzZVxuICAgICAgICAvLyBhIGZhdGFsIGVycm9yIGluIHRoaXMgY2FzZT9cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc2VydmljZSBpbnN0YW5jZXMgZm9yIHRoZSBwZW5kaW5nIHByb21pc2VzIGFuZCByZXNvbHZlIHRoZW1cbiAgICAvLyBOT1RFOiBpZiB0aGlzLm11bHRpcGxlSW5zdGFuY2VzIGlzIGZhbHNlLCBvbmx5IHRoZSBkZWZhdWx0IGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZFxuICAgIC8vIGFuZCBhbGwgcHJvbWlzZXMgd2l0aCByZXNvbHZlIHdpdGggaXQgcmVnYXJkbGVzcyBvZiB0aGUgaWRlbnRpZmllci5cbiAgICBmb3IgKGNvbnN0IFtcbiAgICAgIGluc3RhbmNlSWRlbnRpZmllcixcbiAgICAgIGluc3RhbmNlRGVmZXJyZWRcbiAgICBdIG9mIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9XG4gICAgICAgIHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGluc3RhbmNlSWRlbnRpZmllcik7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIGBnZXRPckluaXRpYWxpemVTZXJ2aWNlKClgIHNob3VsZCBhbHdheXMgcmV0dXJuIGEgdmFsaWQgaW5zdGFuY2Ugc2luY2UgYSBjb21wb25lbnQgaXMgZ3VhcmFudGVlZC4gdXNlICEgdG8gbWFrZSB0eXBlc2NyaXB0IGhhcHB5LlxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XG4gICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxuICAgICAgICB9KSE7XG4gICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZVxuICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IGxlYXZlIHRoZSBwcm9taXNlIHVucmVzb2x2ZWQuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnN0YW5jZShpZGVudGlmaWVyOiBzdHJpbmcgPSBERUZBVUxUX0VOVFJZX05BTUUpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmRlbGV0ZShpZGVudGlmaWVyKTtcbiAgICB0aGlzLmluc3RhbmNlc09wdGlvbnMuZGVsZXRlKGlkZW50aWZpZXIpO1xuICAgIHRoaXMuaW5zdGFuY2VzLmRlbGV0ZShpZGVudGlmaWVyKTtcbiAgfVxuXG4gIC8vIGFwcC5kZWxldGUoKSB3aWxsIGNhbGwgdGhpcyBtZXRob2Qgb24gZXZlcnkgcHJvdmlkZXIgdG8gZGVsZXRlIHRoZSBzZXJ2aWNlc1xuICAvLyBUT0RPOiBzaG91bGQgd2UgbWFyayB0aGUgcHJvdmlkZXIgYXMgZGVsZXRlZD9cbiAgYXN5bmMgZGVsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAuLi5zZXJ2aWNlc1xuICAgICAgICAuZmlsdGVyKHNlcnZpY2UgPT4gJ0lOVEVSTkFMJyBpbiBzZXJ2aWNlKSAvLyBsZWdhY3kgc2VydmljZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgLm1hcChzZXJ2aWNlID0+IChzZXJ2aWNlIGFzIGFueSkuSU5URVJOQUwhLmRlbGV0ZSgpKSxcbiAgICAgIC4uLnNlcnZpY2VzXG4gICAgICAgIC5maWx0ZXIoc2VydmljZSA9PiAnX2RlbGV0ZScgaW4gc2VydmljZSkgLy8gbW9kdWxhcml6ZWQgc2VydmljZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgLm1hcChzZXJ2aWNlID0+IChzZXJ2aWNlIGFzIGFueSkuX2RlbGV0ZSgpKVxuICAgIF0pO1xuICB9XG5cbiAgaXNDb21wb25lbnRTZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50ICE9IG51bGw7XG4gIH1cblxuICBpc0luaXRpYWxpemVkKGlkZW50aWZpZXI6IHN0cmluZyA9IERFRkFVTFRfRU5UUllfTkFNRSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5oYXMoaWRlbnRpZmllcik7XG4gIH1cblxuICBnZXRPcHRpb25zKGlkZW50aWZpZXI6IHN0cmluZyA9IERFRkFVTFRfRU5UUllfTkFNRSk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNPcHRpb25zLmdldChpZGVudGlmaWVyKSB8fCB7fTtcbiAgfVxuXG4gIGluaXRpYWxpemUob3B0czogSW5pdGlhbGl6ZU9wdGlvbnMgPSB7fSk6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSB7XG4gICAgY29uc3QgeyBvcHRpb25zID0ge30gfSA9IG9wdHM7XG4gICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihcbiAgICAgIG9wdHMuaW5zdGFuY2VJZGVudGlmaWVyXG4gICAgKTtcbiAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xuICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgIGAke3RoaXMubmFtZX0oJHtub3JtYWxpemVkSWRlbnRpZmllcn0pIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWRgXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0NvbXBvbmVudFNldCgpKSB7XG4gICAgICB0aHJvdyBFcnJvcihgQ29tcG9uZW50ICR7dGhpcy5uYW1lfSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB5ZXRgKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XG4gICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyLFxuICAgICAgb3B0aW9uc1xuICAgIH0pITtcblxuICAgIC8vIHJlc29sdmUgYW55IHBlbmRpbmcgcHJvbWlzZSB3YWl0aW5nIGZvciB0aGUgc2VydmljZSBpbnN0YW5jZVxuICAgIGZvciAoY29uc3QgW1xuICAgICAgaW5zdGFuY2VJZGVudGlmaWVyLFxuICAgICAgaW5zdGFuY2VEZWZlcnJlZFxuICAgIF0gb2YgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIgPVxuICAgICAgICB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpbnN0YW5jZUlkZW50aWZpZXIpO1xuICAgICAgaWYgKG5vcm1hbGl6ZWRJZGVudGlmaWVyID09PSBub3JtYWxpemVkRGVmZXJyZWRJZGVudGlmaWVyKSB7XG4gICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFjayAtIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgIGFmdGVyIHRoZSBwcm92aWRlciBoYXMgYmVlbiBpbml0aWFsaXplZCBieSBjYWxsaW5nIHByb3ZpZGVyLmluaXRpYWxpemUoKS5cbiAgICogVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgU1lOQ0hST05PVVNMWSwgc28gaXQgc2hvdWxkIG5vdCBleGVjdXRlIGFueSBsb25ncnVubmluZyB0YXNrcyBpbiBvcmRlciB0byBub3QgYmxvY2sgdGhlIHByb2dyYW0uXG4gICAqXG4gICAqIEBwYXJhbSBpZGVudGlmaWVyIEFuIG9wdGlvbmFsIGluc3RhbmNlIGlkZW50aWZpZXJcbiAgICogQHJldHVybnMgYSBmdW5jdGlvbiB0byB1bnJlZ2lzdGVyIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgb25Jbml0KGNhbGxiYWNrOiBPbkluaXRDYWxsQmFjazxUPiwgaWRlbnRpZmllcj86IHN0cmluZyk6ICgpID0+IHZvaWQge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgY29uc3QgZXhpc3RpbmdDYWxsYmFja3MgPVxuICAgICAgdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyKSA/P1xuICAgICAgbmV3IFNldDxPbkluaXRDYWxsQmFjazxUPj4oKTtcbiAgICBleGlzdGluZ0NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgIHRoaXMub25Jbml0Q2FsbGJhY2tzLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZXhpc3RpbmdDYWxsYmFja3MpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChub3JtYWxpemVkSWRlbnRpZmllcik7XG4gICAgaWYgKGV4aXN0aW5nSW5zdGFuY2UpIHtcbiAgICAgIGNhbGxiYWNrKGV4aXN0aW5nSW5zdGFuY2UsIG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZXhpc3RpbmdDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBvbkluaXQgY2FsbGJhY2tzIHN5bmNocm9ub3VzbHlcbiAgICogQHBhcmFtIGluc3RhbmNlIHRoZSBzZXJ2aWNlIGluc3RhbmNlYFxuICAgKi9cbiAgcHJpdmF0ZSBpbnZva2VPbkluaXRDYWxsYmFja3MoXG4gICAgaW5zdGFuY2U6IE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSxcbiAgICBpZGVudGlmaWVyOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KGlkZW50aWZpZXIpO1xuICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYWxsYmFjayhpbnN0YW5jZSwgaWRlbnRpZmllcik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gaWdub3JlIGVycm9ycyBpbiB0aGUgb25Jbml0IGNhbGxiYWNrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcbiAgICBpbnN0YW5jZUlkZW50aWZpZXIsXG4gICAgb3B0aW9ucyA9IHt9XG4gIH06IHtcbiAgICBpbnN0YW5jZUlkZW50aWZpZXI6IHN0cmluZztcbiAgICBvcHRpb25zPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIH0pOiBOYW1lU2VydmljZU1hcHBpbmdbVF0gfCBudWxsIHtcbiAgICBsZXQgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQoaW5zdGFuY2VJZGVudGlmaWVyKTtcbiAgICBpZiAoIWluc3RhbmNlICYmIHRoaXMuY29tcG9uZW50KSB7XG4gICAgICBpbnN0YW5jZSA9IHRoaXMuY29tcG9uZW50Lmluc3RhbmNlRmFjdG9yeSh0aGlzLmNvbnRhaW5lciwge1xuICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZUlkZW50aWZpZXJGb3JGYWN0b3J5KGluc3RhbmNlSWRlbnRpZmllciksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpO1xuICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIG9wdGlvbnMpO1xuXG4gICAgICAvKipcbiAgICAgICAqIEludm9rZSBvbkluaXQgbGlzdGVuZXJzLlxuICAgICAgICogTm90ZSB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCBpcyBkaWZmZXJlbnQsIHdoaWNoIGlzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBjcmVhdG9yLFxuICAgICAgICogd2hpbGUgb25Jbml0IGxpc3RlbmVycyBhcmUgcmVnaXN0ZXJlZCBieSBjb25zdW1lcnMgb2YgdGhlIHByb3ZpZGVyLlxuICAgICAgICovXG4gICAgICB0aGlzLmludm9rZU9uSW5pdENhbGxiYWNrcyhpbnN0YW5jZSwgaW5zdGFuY2VJZGVudGlmaWVyKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcmRlciBpcyBpbXBvcnRhbnRcbiAgICAgICAqIG9uSW5zdGFuY2VDcmVhdGVkKCkgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciB0aGlzLmluc3RhbmNlcy5zZXQoaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7IHdoaWNoXG4gICAgICAgKiBtYWtlcyBgaXNJbml0aWFsaXplZCgpYCByZXR1cm4gdHJ1ZS5cbiAgICAgICAqL1xuICAgICAgaWYgKHRoaXMuY29tcG9uZW50Lm9uSW5zdGFuY2VDcmVhdGVkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnQub25JbnN0YW5jZUNyZWF0ZWQoXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcixcbiAgICAgICAgICAgIGluc3RhbmNlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLy8gaWdub3JlIGVycm9ycyBpbiB0aGUgb25JbnN0YW5jZUNyZWF0ZWRDYWxsYmFja1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlIHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihcbiAgICBpZGVudGlmaWVyOiBzdHJpbmcgPSBERUZBVUxUX0VOVFJZX05BTUVcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyA/IGlkZW50aWZpZXIgOiBERUZBVUxUX0VOVFJZX05BTUU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpZGVudGlmaWVyOyAvLyBhc3N1bWUgbXVsdGlwbGUgaW5zdGFuY2VzIGFyZSBzdXBwb3J0ZWQgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcHJvdmlkZWQuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRBdXRvSW5pdGlhbGl6ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgISF0aGlzLmNvbXBvbmVudCAmJlxuICAgICAgdGhpcy5jb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgIT09IEluc3RhbnRpYXRpb25Nb2RlLkVYUExJQ0lUXG4gICAgKTtcbiAgfVxufVxuXG4vLyB1bmRlZmluZWQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgc2VydmljZSBmYWN0b3J5IGZvciB0aGUgZGVmYXVsdCBpbnN0YW5jZVxuZnVuY3Rpb24gbm9ybWFsaXplSWRlbnRpZmllckZvckZhY3RvcnkoaWRlbnRpZmllcjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIgPT09IERFRkFVTFRfRU5UUllfTkFNRSA/IHVuZGVmaW5lZCA6IGlkZW50aWZpZXI7XG59XG5cbmZ1bmN0aW9uIGlzQ29tcG9uZW50RWFnZXI8VCBleHRlbmRzIE5hbWU+KGNvbXBvbmVudDogQ29tcG9uZW50PFQ+KTogYm9vbGVhbiB7XG4gIHJldHVybiBjb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgPT09IEluc3RhbnRpYXRpb25Nb2RlLkVBR0VSO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOYW1lIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogQ29tcG9uZW50Q29udGFpbmVyIHRoYXQgcHJvdmlkZXMgUHJvdmlkZXJzIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q29udGFpbmVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwcm92aWRlcnMgPSBuZXcgTWFwPHN0cmluZywgUHJvdmlkZXI8TmFtZT4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmcpIHt9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGJlaW5nIGFkZGVkXG4gICAqIEBwYXJhbSBvdmVyd3JpdGUgV2hlbiBhIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIG5hbWUgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkLFxuICAgKiBpZiBvdmVyd3JpdGUgaXMgdHJ1ZTogb3ZlcndyaXRlIHRoZSBleGlzdGluZyBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGNvbXBvbmVudCBhbmQgY3JlYXRlIGEgbmV3XG4gICAqIHByb3ZpZGVyIHdpdGggdGhlIG5ldyBjb21wb25lbnQuIEl0IGNhbiBiZSB1c2VmdWwgaW4gdGVzdHMgd2hlcmUgeW91IHdhbnQgdG8gdXNlIGRpZmZlcmVudCBtb2Nrc1xuICAgKiBmb3IgZGlmZmVyZW50IHRlc3RzLlxuICAgKiBpZiBvdmVyd3JpdGUgaXMgZmFsc2U6IHRocm93IGFuIGV4Y2VwdGlvblxuICAgKi9cbiAgYWRkQ29tcG9uZW50PFQgZXh0ZW5kcyBOYW1lPihjb21wb25lbnQ6IENvbXBvbmVudDxUPik6IHZvaWQge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5nZXRQcm92aWRlcihjb21wb25lbnQubmFtZSk7XG4gICAgaWYgKHByb3ZpZGVyLmlzQ29tcG9uZW50U2V0KCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQgd2l0aCAke3RoaXMubmFtZX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHByb3ZpZGVyLnNldENvbXBvbmVudChjb21wb25lbnQpO1xuICB9XG5cbiAgYWRkT3JPdmVyd3JpdGVDb21wb25lbnQ8VCBleHRlbmRzIE5hbWU+KGNvbXBvbmVudDogQ29tcG9uZW50PFQ+KTogdm9pZCB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcbiAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xuICAgICAgLy8gZGVsZXRlIHRoZSBleGlzdGluZyBwcm92aWRlciBmcm9tIHRoZSBjb250YWluZXIsIHNvIHdlIGNhbiByZWdpc3RlciB0aGUgbmV3IGNvbXBvbmVudFxuICAgICAgdGhpcy5wcm92aWRlcnMuZGVsZXRlKGNvbXBvbmVudC5uYW1lKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldFByb3ZpZGVyIHByb3ZpZGVzIGEgdHlwZSBzYWZlIGludGVyZmFjZSB3aGVyZSBpdCBjYW4gb25seSBiZSBjYWxsZWQgd2l0aCBhIGZpZWxkIG5hbWVcbiAgICogcHJlc2VudCBpbiBOYW1lU2VydmljZU1hcHBpbmcgaW50ZXJmYWNlLlxuICAgKlxuICAgKiBGaXJlYmFzZSBTREtzIHByb3ZpZGluZyBzZXJ2aWNlcyBzaG91bGQgZXh0ZW5kIE5hbWVTZXJ2aWNlTWFwcGluZyBpbnRlcmZhY2UgdG8gcmVnaXN0ZXJcbiAgICogdGhlbXNlbHZlcy5cbiAgICovXG4gIGdldFByb3ZpZGVyPFQgZXh0ZW5kcyBOYW1lPihuYW1lOiBUKTogUHJvdmlkZXI8VD4ge1xuICAgIGlmICh0aGlzLnByb3ZpZGVycy5oYXMobmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVycy5nZXQobmFtZSkgYXMgdW5rbm93biBhcyBQcm92aWRlcjxUPjtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgYSBQcm92aWRlciBmb3IgYSBzZXJ2aWNlIHRoYXQgaGFzbid0IHJlZ2lzdGVyZWQgd2l0aCBGaXJlYmFzZVxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFByb3ZpZGVyPFQ+KG5hbWUsIHRoaXMpO1xuICAgIHRoaXMucHJvdmlkZXJzLnNldChuYW1lLCBwcm92aWRlciBhcyB1bmtub3duIGFzIFByb3ZpZGVyPE5hbWU+KTtcblxuICAgIHJldHVybiBwcm92aWRlciBhcyBQcm92aWRlcjxUPjtcbiAgfVxuXG4gIGdldFByb3ZpZGVycygpOiBBcnJheTxQcm92aWRlcjxOYW1lPj4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucHJvdmlkZXJzLnZhbHVlcygpKTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCB0eXBlIExvZ0xldmVsU3RyaW5nID1cbiAgfCAnZGVidWcnXG4gIHwgJ3ZlcmJvc2UnXG4gIHwgJ2luZm8nXG4gIHwgJ3dhcm4nXG4gIHwgJ2Vycm9yJ1xuICB8ICdzaWxlbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExvZ09wdGlvbnMge1xuICBsZXZlbDogTG9nTGV2ZWxTdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIExvZ0NhbGxiYWNrID0gKGNhbGxiYWNrUGFyYW1zOiBMb2dDYWxsYmFja1BhcmFtcykgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBMb2dDYWxsYmFja1BhcmFtcyB7XG4gIGxldmVsOiBMb2dMZXZlbFN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBhcmdzOiB1bmtub3duW107XG4gIHR5cGU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBMb2dnZXIgaW5zdGFuY2VzXG4gKi9cbmV4cG9ydCBjb25zdCBpbnN0YW5jZXM6IExvZ2dlcltdID0gW107XG5cbi8qKlxuICogVGhlIEpTIFNESyBzdXBwb3J0cyA1IGxvZyBsZXZlbHMgYW5kIGFsc28gYWxsb3dzIGEgdXNlciB0aGUgYWJpbGl0eSB0b1xuICogc2lsZW5jZSB0aGUgbG9ncyBhbHRvZ2V0aGVyLlxuICpcbiAqIFRoZSBvcmRlciBpcyBhIGZvbGxvd3M6XG4gKiBERUJVRyA8IFZFUkJPU0UgPCBJTkZPIDwgV0FSTiA8IEVSUk9SXG4gKlxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIHdpbGwgYmUgY2FwdHVyZWQgKGkuZS4gaWZcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgSU5GT2AsIGVycm9ycyB3aWxsIHN0aWxsIGJlIGxvZ2dlZCwgYnV0IGBERUJVR2AgYW5kXG4gKiBgVkVSQk9TRWAgbG9ncyB3aWxsIG5vdClcbiAqL1xuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBERUJVRyxcbiAgVkVSQk9TRSxcbiAgSU5GTyxcbiAgV0FSTixcbiAgRVJST1IsXG4gIFNJTEVOVFxufVxuXG5jb25zdCBsZXZlbFN0cmluZ1RvRW51bTogeyBba2V5IGluIExvZ0xldmVsU3RyaW5nXTogTG9nTGV2ZWwgfSA9IHtcbiAgJ2RlYnVnJzogTG9nTGV2ZWwuREVCVUcsXG4gICd2ZXJib3NlJzogTG9nTGV2ZWwuVkVSQk9TRSxcbiAgJ2luZm8nOiBMb2dMZXZlbC5JTkZPLFxuICAnd2Fybic6IExvZ0xldmVsLldBUk4sXG4gICdlcnJvcic6IExvZ0xldmVsLkVSUk9SLFxuICAnc2lsZW50JzogTG9nTGV2ZWwuU0lMRU5UXG59O1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGxvZyBsZXZlbFxuICovXG5jb25zdCBkZWZhdWx0TG9nTGV2ZWw6IExvZ0xldmVsID0gTG9nTGV2ZWwuSU5GTztcblxuLyoqXG4gKiBXZSBhbGxvdyB1c2VycyB0aGUgYWJpbGl0eSB0byBwYXNzIHRoZWlyIG93biBsb2cgaGFuZGxlci4gV2Ugd2lsbCBwYXNzIHRoZVxuICogdHlwZSBvZiBsb2csIHRoZSBjdXJyZW50IGxvZyBsZXZlbCwgYW5kIGFueSBvdGhlciBhcmd1bWVudHMgcGFzc2VkIChpLmUuIHRoZVxuICogbWVzc2FnZXMgdGhhdCB0aGUgdXNlciB3YW50cyB0byBsb2cpIHRvIHRoaXMgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCB0eXBlIExvZ0hhbmRsZXIgPSAoXG4gIGxvZ2dlckluc3RhbmNlOiBMb2dnZXIsXG4gIGxvZ1R5cGU6IExvZ0xldmVsLFxuICAuLi5hcmdzOiB1bmtub3duW11cbikgPT4gdm9pZDtcblxuLyoqXG4gKiBCeSBkZWZhdWx0LCBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGRpc3BsYXllZCBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgKGluXG4gKiBjaHJvbWUpLiBUbyBhdm9pZCBmb3JjaW5nIHVzZXJzIHRvIGhhdmUgdG8gb3B0LWluIHRvIHRoZXNlIGxvZ3MgdHdpY2VcbiAqIChpLmUuIG9uY2UgZm9yIGZpcmViYXNlLCBhbmQgb25jZSBpbiB0aGUgY29uc29sZSksIHdlIGFyZSBzZW5kaW5nIGBERUJVR2BcbiAqIGxvZ3MgdG8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24uXG4gKi9cbmNvbnN0IENvbnNvbGVNZXRob2QgPSB7XG4gIFtMb2dMZXZlbC5ERUJVR106ICdsb2cnLFxuICBbTG9nTGV2ZWwuVkVSQk9TRV06ICdsb2cnLFxuICBbTG9nTGV2ZWwuSU5GT106ICdpbmZvJyxcbiAgW0xvZ0xldmVsLldBUk5dOiAnd2FybicsXG4gIFtMb2dMZXZlbC5FUlJPUl06ICdlcnJvcidcbn07XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgbG9nIGhhbmRsZXIgd2lsbCBmb3J3YXJkIERFQlVHLCBWRVJCT1NFLCBJTkZPLCBXQVJOLCBhbmQgRVJST1JcbiAqIG1lc3NhZ2VzIG9uIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29uc29sZSBjb3VudGVycGFydHMgKGlmIHRoZSBsb2cgbWV0aG9kXG4gKiBpcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgbG9nIGxldmVsKVxuICovXG5jb25zdCBkZWZhdWx0TG9nSGFuZGxlcjogTG9nSGFuZGxlciA9IChpbnN0YW5jZSwgbG9nVHlwZSwgLi4uYXJncyk6IHZvaWQgPT4ge1xuICBpZiAobG9nVHlwZSA8IGluc3RhbmNlLmxvZ0xldmVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgY29uc3QgbWV0aG9kID0gQ29uc29sZU1ldGhvZFtsb2dUeXBlIGFzIGtleW9mIHR5cGVvZiBDb25zb2xlTWV0aG9kXTtcbiAgaWYgKG1ldGhvZCkge1xuICAgIGNvbnNvbGVbbWV0aG9kIGFzICdsb2cnIHwgJ2luZm8nIHwgJ3dhcm4nIHwgJ2Vycm9yJ10oXG4gICAgICBgWyR7bm93fV0gICR7aW5zdGFuY2UubmFtZX06YCxcbiAgICAgIC4uLmFyZ3NcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBBdHRlbXB0ZWQgdG8gbG9nIGEgbWVzc2FnZSB3aXRoIGFuIGludmFsaWQgbG9nVHlwZSAodmFsdWU6ICR7bG9nVHlwZX0pYFxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAvKipcbiAgICogR2l2ZXMgeW91IGFuIGluc3RhbmNlIG9mIGEgTG9nZ2VyIHRvIGNhcHR1cmUgbWVzc2FnZXMgYWNjb3JkaW5nIHRvXG4gICAqIEZpcmViYXNlJ3MgbG9nZ2luZyBzY2hlbWUuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIHRoYXQgdGhlIGxvZ3Mgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGhcbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcpIHtcbiAgICAvKipcbiAgICAgKiBDYXB0dXJlIHRoZSBjdXJyZW50IGluc3RhbmNlIGZvciBsYXRlciB1c2VcbiAgICAgKi9cbiAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbG9nIGxldmVsIG9mIHRoZSBnaXZlbiBMb2dnZXIgaW5zdGFuY2UuXG4gICAqL1xuICBwcml2YXRlIF9sb2dMZXZlbCA9IGRlZmF1bHRMb2dMZXZlbDtcblxuICBnZXQgbG9nTGV2ZWwoKTogTG9nTGV2ZWwge1xuICAgIHJldHVybiB0aGlzLl9sb2dMZXZlbDtcbiAgfVxuXG4gIHNldCBsb2dMZXZlbCh2YWw6IExvZ0xldmVsKSB7XG4gICAgaWYgKCEodmFsIGluIExvZ0xldmVsKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBcIiR7dmFsfVwiIGFzc2lnbmVkIHRvIFxcYGxvZ0xldmVsXFxgYCk7XG4gICAgfVxuICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3Igc2V0dGVyL2dldHRlciBoYXZpbmcgdG8gYmUgdGhlIHNhbWUgdHlwZS5cbiAgc2V0TG9nTGV2ZWwodmFsOiBMb2dMZXZlbCB8IExvZ0xldmVsU3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nTGV2ZWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IGxldmVsU3RyaW5nVG9FbnVtW3ZhbF0gOiB2YWw7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1haW4gKGludGVybmFsKSBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cbiAgICogQ2FuIGJlIHNldCB0byBhIG5ldyBmdW5jdGlvbiBpbiBpbnRlcm5hbCBwYWNrYWdlIGNvZGUgYnV0IG5vdCBieSB1c2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBfbG9nSGFuZGxlcjogTG9nSGFuZGxlciA9IGRlZmF1bHRMb2dIYW5kbGVyO1xuICBnZXQgbG9nSGFuZGxlcigpOiBMb2dIYW5kbGVyIHtcbiAgICByZXR1cm4gdGhpcy5fbG9nSGFuZGxlcjtcbiAgfVxuICBzZXQgbG9nSGFuZGxlcih2YWw6IExvZ0hhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgYXNzaWduZWQgdG8gYGxvZ0hhbmRsZXJgIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLl9sb2dIYW5kbGVyID0gdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb25hbCwgYWRkaXRpb25hbCwgdXNlci1kZWZpbmVkIGxvZyBoYW5kbGVyIGZvciB0aGUgTG9nZ2VyIGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBfdXNlckxvZ0hhbmRsZXI6IExvZ0hhbmRsZXIgfCBudWxsID0gbnVsbDtcbiAgZ2V0IHVzZXJMb2dIYW5kbGVyKCk6IExvZ0hhbmRsZXIgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckxvZ0hhbmRsZXI7XG4gIH1cbiAgc2V0IHVzZXJMb2dIYW5kbGVyKHZhbDogTG9nSGFuZGxlciB8IG51bGwpIHtcbiAgICB0aGlzLl91c2VyTG9nSGFuZGxlciA9IHZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb25zIGJlbG93IGFyZSBhbGwgYmFzZWQgb24gdGhlIGBjb25zb2xlYCBpbnRlcmZhY2VcbiAgICovXG5cbiAgZGVidWcoLi4uYXJnczogdW5rbm93bltdKTogdm9pZCB7XG4gICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xuICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xuICB9XG4gIGxvZyguLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJlxuICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuVkVSQk9TRSwgLi4uYXJncyk7XG4gICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcbiAgfVxuICBpbmZvKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLklORk8sIC4uLmFyZ3MpO1xuICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuSU5GTywgLi4uYXJncyk7XG4gIH1cbiAgd2FybiguLi5hcmdzOiB1bmtub3duW10pOiB2b2lkIHtcbiAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5XQVJOLCAuLi5hcmdzKTtcbiAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLldBUk4sIC4uLmFyZ3MpO1xuICB9XG4gIGVycm9yKC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQge1xuICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkVSUk9SLCAuLi5hcmdzKTtcbiAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkVSUk9SLCAuLi5hcmdzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWw6IExvZ0xldmVsU3RyaW5nIHwgTG9nTGV2ZWwpOiB2b2lkIHtcbiAgaW5zdGFuY2VzLmZvckVhY2goaW5zdCA9PiB7XG4gICAgaW5zdC5zZXRMb2dMZXZlbChsZXZlbCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlckxvZ0hhbmRsZXIoXG4gIGxvZ0NhbGxiYWNrOiBMb2dDYWxsYmFjayB8IG51bGwsXG4gIG9wdGlvbnM/OiBMb2dPcHRpb25zXG4pOiB2b2lkIHtcbiAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiBpbnN0YW5jZXMpIHtcbiAgICBsZXQgY3VzdG9tTG9nTGV2ZWw6IExvZ0xldmVsIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZXZlbCkge1xuICAgICAgY3VzdG9tTG9nTGV2ZWwgPSBsZXZlbFN0cmluZ1RvRW51bVtvcHRpb25zLmxldmVsXTtcbiAgICB9XG4gICAgaWYgKGxvZ0NhbGxiYWNrID09PSBudWxsKSB7XG4gICAgICBpbnN0YW5jZS51c2VyTG9nSGFuZGxlciA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gKFxuICAgICAgICBpbnN0YW5jZTogTG9nZ2VyLFxuICAgICAgICBsZXZlbDogTG9nTGV2ZWwsXG4gICAgICAgIC4uLmFyZ3M6IHVua25vd25bXVxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhcmdzXG4gICAgICAgICAgLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgaWYgKGFyZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICByZXR1cm4gYXJnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGFyZy50b1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4gYXJnLm1lc3NhZ2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmcpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChpZ25vcmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoYXJnID0+IGFyZylcbiAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICBpZiAobGV2ZWwgPj0gKGN1c3RvbUxvZ0xldmVsID8/IGluc3RhbmNlLmxvZ0xldmVsKSkge1xuICAgICAgICAgIGxvZ0NhbGxiYWNrKHtcbiAgICAgICAgICAgIGxldmVsOiBMb2dMZXZlbFtsZXZlbF0udG9Mb3dlckNhc2UoKSBhcyBMb2dMZXZlbFN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhcmdzLFxuICAgICAgICAgICAgdHlwZTogaW5zdGFuY2UubmFtZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIiwgImNvbnN0IGluc3RhbmNlT2ZBbnkgPSAob2JqZWN0LCBjb25zdHJ1Y3RvcnMpID0+IGNvbnN0cnVjdG9ycy5zb21lKChjKSA9PiBvYmplY3QgaW5zdGFuY2VvZiBjKTtcblxubGV0IGlkYlByb3h5YWJsZVR5cGVzO1xubGV0IGN1cnNvckFkdmFuY2VNZXRob2RzO1xuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRJZGJQcm94eWFibGVUeXBlcygpIHtcbiAgICByZXR1cm4gKGlkYlByb3h5YWJsZVR5cGVzIHx8XG4gICAgICAgIChpZGJQcm94eWFibGVUeXBlcyA9IFtcbiAgICAgICAgICAgIElEQkRhdGFiYXNlLFxuICAgICAgICAgICAgSURCT2JqZWN0U3RvcmUsXG4gICAgICAgICAgICBJREJJbmRleCxcbiAgICAgICAgICAgIElEQkN1cnNvcixcbiAgICAgICAgICAgIElEQlRyYW5zYWN0aW9uLFxuICAgICAgICBdKSk7XG59XG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gcHJldmVudCBpdCB0aHJvd2luZyB1cCBpbiBub2RlIGVudmlyb25tZW50cy5cbmZ1bmN0aW9uIGdldEN1cnNvckFkdmFuY2VNZXRob2RzKCkge1xuICAgIHJldHVybiAoY3Vyc29yQWR2YW5jZU1ldGhvZHMgfHxcbiAgICAgICAgKGN1cnNvckFkdmFuY2VNZXRob2RzID0gW1xuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5hZHZhbmNlLFxuICAgICAgICAgICAgSURCQ3Vyc29yLnByb3RvdHlwZS5jb250aW51ZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWVQcmltYXJ5S2V5LFxuICAgICAgICBdKSk7XG59XG5jb25zdCBjdXJzb3JSZXF1ZXN0TWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zYWN0aW9uRG9uZU1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNmb3JtQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmZ1bmN0aW9uIHByb21pc2lmeVJlcXVlc3QocmVxdWVzdCkge1xuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHVubGlzdGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWNjZXNzJywgc3VjY2Vzcyk7XG4gICAgICAgICAgICByZXF1ZXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh3cmFwKHJlcXVlc3QucmVzdWx0KSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChyZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgIH0pO1xuICAgIHByb21pc2VcbiAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgIC8vIFNpbmNlIGN1cnNvcmluZyByZXVzZXMgdGhlIElEQlJlcXVlc3QgKCpzaWdoKiksIHdlIGNhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWxcbiAgICAgICAgLy8gKHNlZSB3cmFwRnVuY3Rpb24pLlxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJDdXJzb3IpIHtcbiAgICAgICAgICAgIGN1cnNvclJlcXVlc3RNYXAuc2V0KHZhbHVlLCByZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXRjaGluZyB0byBhdm9pZCBcIlVuY2F1Z2h0IFByb21pc2UgZXhjZXB0aW9uc1wiXG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgLy8gVGhpcyBtYXBwaW5nIGV4aXN0cyBpbiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYnV0IGRvZXNuJ3QgZG9lc24ndCBleGlzdCBpbiB0cmFuc2Zvcm1DYWNoZS4gVGhpc1xuICAgIC8vIGlzIGJlY2F1c2Ugd2UgY3JlYXRlIG1hbnkgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0LlxuICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQocHJvbWlzZSwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5mdW5jdGlvbiBjYWNoZURvbmVQcm9taXNlRm9yVHJhbnNhY3Rpb24odHgpIHtcbiAgICAvLyBFYXJseSBiYWlsIGlmIHdlJ3ZlIGFscmVhZHkgY3JlYXRlZCBhIGRvbmUgcHJvbWlzZSBmb3IgdGhpcyB0cmFuc2FjdGlvbi5cbiAgICBpZiAodHJhbnNhY3Rpb25Eb25lTWFwLmhhcyh0eCkpXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBkb25lID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgY29tcGxldGUpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBlcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCh0eC5lcnJvciB8fCBuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydEVycm9yJywgJ0Fib3J0RXJyb3InKSk7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvcik7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgZXJyb3IpO1xuICAgIH0pO1xuICAgIC8vIENhY2hlIGl0IGZvciBsYXRlciByZXRyaWV2YWwuXG4gICAgdHJhbnNhY3Rpb25Eb25lTWFwLnNldCh0eCwgZG9uZSk7XG59XG5sZXQgaWRiUHJveHlUcmFwcyA9IHtcbiAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyYW5zYWN0aW9uLmRvbmUuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ2RvbmUnKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkRvbmVNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICAvLyBQb2x5ZmlsbCBmb3Igb2JqZWN0U3RvcmVOYW1lcyBiZWNhdXNlIG9mIEVkZ2UuXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gJ29iamVjdFN0b3JlTmFtZXMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5vYmplY3RTdG9yZU5hbWVzIHx8IHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgdHguc3RvcmUgcmV0dXJuIHRoZSBvbmx5IHN0b3JlIGluIHRoZSB0cmFuc2FjdGlvbiwgb3IgdW5kZWZpbmVkIGlmIHRoZXJlIGFyZSBtYW55LlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdzdG9yZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjZWl2ZXIub2JqZWN0U3RvcmVOYW1lc1sxXVxuICAgICAgICAgICAgICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA6IHJlY2VpdmVyLm9iamVjdFN0b3JlKHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEVsc2UgdHJhbnNmb3JtIHdoYXRldmVyIHdlIGdldCBiYWNrLlxuICAgICAgICByZXR1cm4gd3JhcCh0YXJnZXRbcHJvcF0pO1xuICAgIH0sXG4gICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24gJiZcbiAgICAgICAgICAgIChwcm9wID09PSAnZG9uZScgfHwgcHJvcCA9PT0gJ3N0b3JlJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wIGluIHRhcmdldDtcbiAgICB9LFxufTtcbmZ1bmN0aW9uIHJlcGxhY2VUcmFwcyhjYWxsYmFjaykge1xuICAgIGlkYlByb3h5VHJhcHMgPSBjYWxsYmFjayhpZGJQcm94eVRyYXBzKTtcbn1cbmZ1bmN0aW9uIHdyYXBGdW5jdGlvbihmdW5jKSB7XG4gICAgLy8gRHVlIHRvIGV4cGVjdGVkIG9iamVjdCBlcXVhbGl0eSAod2hpY2ggaXMgZW5mb3JjZWQgYnkgdGhlIGNhY2hpbmcgaW4gYHdyYXBgKSwgd2VcbiAgICAvLyBvbmx5IGNyZWF0ZSBvbmUgbmV3IGZ1bmMgcGVyIGZ1bmMuXG4gICAgLy8gRWRnZSBkb2Vzbid0IHN1cHBvcnQgb2JqZWN0U3RvcmVOYW1lcyAoYm9vbyksIHNvIHdlIHBvbHlmaWxsIGl0IGhlcmUuXG4gICAgaWYgKGZ1bmMgPT09IElEQkRhdGFiYXNlLnByb3RvdHlwZS50cmFuc2FjdGlvbiAmJlxuICAgICAgICAhKCdvYmplY3RTdG9yZU5hbWVzJyBpbiBJREJUcmFuc2FjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc3RvcmVOYW1lcywgLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3QgdHggPSBmdW5jLmNhbGwodW53cmFwKHRoaXMpLCBzdG9yZU5hbWVzLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uU3RvcmVOYW1lc01hcC5zZXQodHgsIHN0b3JlTmFtZXMuc29ydCA/IHN0b3JlTmFtZXMuc29ydCgpIDogW3N0b3JlTmFtZXNdKTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwKHR4KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gQ3Vyc29yIG1ldGhvZHMgYXJlIHNwZWNpYWwsIGFzIHRoZSBiZWhhdmlvdXIgaXMgYSBsaXR0bGUgbW9yZSBkaWZmZXJlbnQgdG8gc3RhbmRhcmQgSURCLiBJblxuICAgIC8vIElEQiwgeW91IGFkdmFuY2UgdGhlIGN1cnNvciBhbmQgd2FpdCBmb3IgYSBuZXcgJ3N1Y2Nlc3MnIG9uIHRoZSBJREJSZXF1ZXN0IHRoYXQgZ2F2ZSB5b3UgdGhlXG4gICAgLy8gY3Vyc29yLiBJdCdzIGtpbmRhIGxpa2UgYSBwcm9taXNlIHRoYXQgY2FuIHJlc29sdmUgd2l0aCBtYW55IHZhbHVlcy4gVGhhdCBkb2Vzbid0IG1ha2Ugc2Vuc2VcbiAgICAvLyB3aXRoIHJlYWwgcHJvbWlzZXMsIHNvIGVhY2ggYWR2YW5jZSBtZXRob2RzIHJldHVybnMgYSBuZXcgcHJvbWlzZSBmb3IgdGhlIGN1cnNvciBvYmplY3QsIG9yXG4gICAgLy8gdW5kZWZpbmVkIGlmIHRoZSBlbmQgb2YgdGhlIGN1cnNvciBoYXMgYmVlbiByZWFjaGVkLlxuICAgIGlmIChnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpLmluY2x1ZGVzKGZ1bmMpKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgLy8gQ2FsbGluZyB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gd2l0aCB0aGUgcHJveHkgYXMgJ3RoaXMnIGNhdXNlcyBJTExFR0FMIElOVk9DQVRJT04sIHNvIHdlIHVzZVxuICAgICAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgICAgIGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwKGN1cnNvclJlcXVlc3RNYXAuZ2V0KHRoaXMpKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgLy8gdGhlIG9yaWdpbmFsIG9iamVjdC5cbiAgICAgICAgcmV0dXJuIHdyYXAoZnVuYy5hcHBseSh1bndyYXAodGhpcyksIGFyZ3MpKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiB3cmFwRnVuY3Rpb24odmFsdWUpO1xuICAgIC8vIFRoaXMgZG9lc24ndCByZXR1cm4sIGl0IGp1c3QgY3JlYXRlcyBhICdkb25lJyBwcm9taXNlIGZvciB0aGUgdHJhbnNhY3Rpb24sXG4gICAgLy8gd2hpY2ggaXMgbGF0ZXIgcmV0dXJuZWQgZm9yIHRyYW5zYWN0aW9uLmRvbmUgKHNlZSBpZGJPYmplY3RIYW5kbGVyKS5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJUcmFuc2FjdGlvbilcbiAgICAgICAgY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHZhbHVlKTtcbiAgICBpZiAoaW5zdGFuY2VPZkFueSh2YWx1ZSwgZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSkpXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGlkYlByb3h5VHJhcHMpO1xuICAgIC8vIFJldHVybiB0aGUgc2FtZSB2YWx1ZSBiYWNrIGlmIHdlJ3JlIG5vdCBnb2luZyB0byB0cmFuc2Zvcm0gaXQuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gd3JhcCh2YWx1ZSkge1xuICAgIC8vIFdlIHNvbWV0aW1lcyBnZW5lcmF0ZSBtdWx0aXBsZSBwcm9taXNlcyBmcm9tIGEgc2luZ2xlIElEQlJlcXVlc3QgKGVnIHdoZW4gY3Vyc29yaW5nKSwgYmVjYXVzZVxuICAgIC8vIElEQiBpcyB3ZWlyZCBhbmQgYSBzaW5nbGUgSURCUmVxdWVzdCBjYW4geWllbGQgbWFueSByZXNwb25zZXMsIHNvIHRoZXNlIGNhbid0IGJlIGNhY2hlZC5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBJREJSZXF1ZXN0KVxuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5UmVxdWVzdCh2YWx1ZSk7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSB0cmFuc2Zvcm1lZCB0aGlzIHZhbHVlIGJlZm9yZSwgcmV1c2UgdGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICAgIC8vIFRoaXMgaXMgZmFzdGVyLCBidXQgaXQgYWxzbyBwcm92aWRlcyBvYmplY3QgZXF1YWxpdHkuXG4gICAgaWYgKHRyYW5zZm9ybUNhY2hlLmhhcyh2YWx1ZSkpXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdHJhbnNmb3JtQ2FjaGFibGVWYWx1ZSh2YWx1ZSk7XG4gICAgLy8gTm90IGFsbCB0eXBlcyBhcmUgdHJhbnNmb3JtZWQuXG4gICAgLy8gVGhlc2UgbWF5IGJlIHByaW1pdGl2ZSB0eXBlcywgc28gdGhleSBjYW4ndCBiZSBXZWFrTWFwIGtleXMuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0cmFuc2Zvcm1DYWNoZS5zZXQodmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlLnNldChuZXdWYWx1ZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59XG5jb25zdCB1bndyYXAgPSAodmFsdWUpID0+IHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5nZXQodmFsdWUpO1xuXG5leHBvcnQgeyByZXZlcnNlVHJhbnNmb3JtQ2FjaGUgYXMgYSwgaW5zdGFuY2VPZkFueSBhcyBpLCByZXBsYWNlVHJhcHMgYXMgciwgdW53cmFwIGFzIHUsIHdyYXAgYXMgdyB9O1xuIiwgImltcG9ydCB7IHcgYXMgd3JhcCwgciBhcyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmV4cG9ydCB7IHUgYXMgdW53cmFwLCB3IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIG9wZW5EQihuYW1lLCB2ZXJzaW9uLCB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCk7XG4gICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpIHtcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoZXZlbnQpID0+IGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gb3BlblByb21pc2U7XG59XG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5mdW5jdGlvbiBkZWxldGVEQihuYW1lLCB7IGJsb2NrZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH07XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50Q29udGFpbmVyLFxuICBDb21wb25lbnRUeXBlLFxuICBQcm92aWRlcixcbiAgTmFtZVxufSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IFBsYXRmb3JtTG9nZ2VyU2VydmljZSwgVmVyc2lvblNlcnZpY2UgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwgaW1wbGVtZW50cyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyKSB7fVxuICAvLyBJbiBpbml0aWFsIGltcGxlbWVudGF0aW9uLCB0aGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGluc3RhbGxhdGlvbnMgb25cbiAgLy8gYXV0aCB0b2tlbiByZWZyZXNoLCBhbmQgaW5zdGFsbGF0aW9ucyB3aWxsIHNlbmQgdGhpcyBzdHJpbmcuXG4gIGdldFBsYXRmb3JtSW5mb1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHByb3ZpZGVycyA9IHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVycygpO1xuICAgIC8vIExvb3AgdGhyb3VnaCBwcm92aWRlcnMgYW5kIGdldCBsaWJyYXJ5L3ZlcnNpb24gcGFpcnMgZnJvbSBhbnkgdGhhdCBhcmVcbiAgICAvLyB2ZXJzaW9uIGNvbXBvbmVudHMuXG4gICAgcmV0dXJuIHByb3ZpZGVyc1xuICAgICAgLm1hcChwcm92aWRlciA9PiB7XG4gICAgICAgIGlmIChpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXIpKSB7XG4gICAgICAgICAgY29uc3Qgc2VydmljZSA9IHByb3ZpZGVyLmdldEltbWVkaWF0ZSgpIGFzIFZlcnNpb25TZXJ2aWNlO1xuICAgICAgICAgIHJldHVybiBgJHtzZXJ2aWNlLmxpYnJhcnl9LyR7c2VydmljZS52ZXJzaW9ufWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKGxvZ1N0cmluZyA9PiBsb2dTdHJpbmcpXG4gICAgICAuam9pbignICcpO1xuICB9XG59XG4vKipcbiAqXG4gKiBAcGFyYW0gcHJvdmlkZXIgY2hlY2sgaWYgdGhpcyBwcm92aWRlciBwcm92aWRlcyBhIFZlcnNpb25TZXJ2aWNlXG4gKlxuICogTk9URTogVXNpbmcgUHJvdmlkZXI8J2FwcC12ZXJzaW9uJz4gaXMgYSBoYWNrIHRvIGluZGljYXRlIHRoYXQgdGhlIHByb3ZpZGVyXG4gKiBwcm92aWRlcyBWZXJzaW9uU2VydmljZS4gVGhlIHByb3ZpZGVyIGlzIG5vdCBuZWNlc3NhcmlseSBhICdhcHAtdmVyc2lvbidcbiAqIHByb3ZpZGVyLlxuICovXG5mdW5jdGlvbiBpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXI6IFByb3ZpZGVyPE5hbWU+KTogYm9vbGVhbiB7XG4gIGNvbnN0IGNvbXBvbmVudCA9IHByb3ZpZGVyLmdldENvbXBvbmVudCgpO1xuICByZXR1cm4gY29tcG9uZW50Py50eXBlID09PSBDb21wb25lbnRUeXBlLlZFUlNJT047XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQGZpcmViYXNlL2xvZ2dlcic7XG5cbmV4cG9ydCBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdAZmlyZWJhc2UvYXBwJyk7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgbmFtZSBhcyBhcHBOYW1lIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYXBwQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uL2FwcC1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYW5hbHl0aWNzQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2FuYWx5dGljcy1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYW5hbHl0aWNzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2FuYWx5dGljcy9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBhcHBDaGVja0NvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9hcHAtY2hlY2stY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIGFwcENoZWNrTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2FwcC1jaGVjay9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBhdXRoTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgYXV0aENvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9hdXRoLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBkYXRhYmFzZU5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9kYXRhYmFzZS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBkYXRhYmFzZUNvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9kYXRhYmFzZS1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgZnVuY3Rpb25zTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2Z1bmN0aW9ucy9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBmdW5jdGlvbnNDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvZnVuY3Rpb25zLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBpbnN0YWxsYXRpb25zTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2luc3RhbGxhdGlvbnMvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgaW5zdGFsbGF0aW9uc0NvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9pbnN0YWxsYXRpb25zLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyBtZXNzYWdpbmdOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvbWVzc2FnaW5nL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIG1lc3NhZ2luZ0NvbXBhdE5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9tZXNzYWdpbmctY29tcGF0L3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHBlcmZvcm1hbmNlTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL3BlcmZvcm1hbmNlL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHBlcmZvcm1hbmNlQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL3BlcmZvcm1hbmNlLWNvbXBhdC9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyByZW1vdGVDb25maWdOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvcmVtb3RlLWNvbmZpZy9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyByZW1vdGVDb25maWdDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvcmVtb3RlLWNvbmZpZy1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgc3RvcmFnZU5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9zdG9yYWdlL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBuYW1lIGFzIHN0b3JhZ2VDb21wYXROYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvc3RvcmFnZS1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgZmlyZXN0b3JlTmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2ZpcmVzdG9yZS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgbmFtZSBhcyB2ZXJ0ZXhOYW1lIH0gZnJvbSAnLi4vLi4vLi4vcGFja2FnZXMvdmVydGV4YWkvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgZmlyZXN0b3JlQ29tcGF0TmFtZSB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2VzL2ZpcmVzdG9yZS1jb21wYXQvcGFja2FnZS5qc29uJztcbmltcG9ydCB7IG5hbWUgYXMgcGFja2FnZU5hbWUgfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlcy9maXJlYmFzZS9wYWNrYWdlLmpzb24nO1xuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGFwcCBuYW1lXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcblxuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0xPR19TVFJJTkcgPSB7XG4gIFthcHBOYW1lXTogJ2ZpcmUtY29yZScsXG4gIFthcHBDb21wYXROYW1lXTogJ2ZpcmUtY29yZS1jb21wYXQnLFxuICBbYW5hbHl0aWNzTmFtZV06ICdmaXJlLWFuYWx5dGljcycsXG4gIFthbmFseXRpY3NDb21wYXROYW1lXTogJ2ZpcmUtYW5hbHl0aWNzLWNvbXBhdCcsXG4gIFthcHBDaGVja05hbWVdOiAnZmlyZS1hcHAtY2hlY2snLFxuICBbYXBwQ2hlY2tDb21wYXROYW1lXTogJ2ZpcmUtYXBwLWNoZWNrLWNvbXBhdCcsXG4gIFthdXRoTmFtZV06ICdmaXJlLWF1dGgnLFxuICBbYXV0aENvbXBhdE5hbWVdOiAnZmlyZS1hdXRoLWNvbXBhdCcsXG4gIFtkYXRhYmFzZU5hbWVdOiAnZmlyZS1ydGRiJyxcbiAgW2RhdGFiYXNlQ29tcGF0TmFtZV06ICdmaXJlLXJ0ZGItY29tcGF0JyxcbiAgW2Z1bmN0aW9uc05hbWVdOiAnZmlyZS1mbicsXG4gIFtmdW5jdGlvbnNDb21wYXROYW1lXTogJ2ZpcmUtZm4tY29tcGF0JyxcbiAgW2luc3RhbGxhdGlvbnNOYW1lXTogJ2ZpcmUtaWlkJyxcbiAgW2luc3RhbGxhdGlvbnNDb21wYXROYW1lXTogJ2ZpcmUtaWlkLWNvbXBhdCcsXG4gIFttZXNzYWdpbmdOYW1lXTogJ2ZpcmUtZmNtJyxcbiAgW21lc3NhZ2luZ0NvbXBhdE5hbWVdOiAnZmlyZS1mY20tY29tcGF0JyxcbiAgW3BlcmZvcm1hbmNlTmFtZV06ICdmaXJlLXBlcmYnLFxuICBbcGVyZm9ybWFuY2VDb21wYXROYW1lXTogJ2ZpcmUtcGVyZi1jb21wYXQnLFxuICBbcmVtb3RlQ29uZmlnTmFtZV06ICdmaXJlLXJjJyxcbiAgW3JlbW90ZUNvbmZpZ0NvbXBhdE5hbWVdOiAnZmlyZS1yYy1jb21wYXQnLFxuICBbc3RvcmFnZU5hbWVdOiAnZmlyZS1nY3MnLFxuICBbc3RvcmFnZUNvbXBhdE5hbWVdOiAnZmlyZS1nY3MtY29tcGF0JyxcbiAgW2ZpcmVzdG9yZU5hbWVdOiAnZmlyZS1mc3QnLFxuICBbZmlyZXN0b3JlQ29tcGF0TmFtZV06ICdmaXJlLWZzdC1jb21wYXQnLFxuICBbdmVydGV4TmFtZV06ICdmaXJlLXZlcnRleCcsXG4gICdmaXJlLWpzJzogJ2ZpcmUtanMnLCAvLyBQbGF0Zm9ybSBpZGVudGlmaWVyIGZvciBKUyBTREsuXG4gIFtwYWNrYWdlTmFtZV06ICdmaXJlLWpzLWFsbCdcbn0gYXMgY29uc3Q7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgRmlyZWJhc2VBcHAsXG4gIEZpcmViYXNlT3B0aW9ucyxcbiAgRmlyZWJhc2VTZXJ2ZXJBcHBcbn0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBQcm92aWRlciwgTmFtZSB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuaW1wb3J0IHsgREVGQVVMVF9FTlRSWV9OQU1FIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBJbXBsIH0gZnJvbSAnLi9maXJlYmFzZUFwcCc7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZlckFwcEltcGwgfSBmcm9tICcuL2ZpcmViYXNlU2VydmVyQXBwJztcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IF9hcHBzID0gbmV3IE1hcDxzdHJpbmcsIEZpcmViYXNlQXBwPigpO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgX3NlcnZlckFwcHMgPSBuZXcgTWFwPHN0cmluZywgRmlyZWJhc2VTZXJ2ZXJBcHA+KCk7XG5cbi8qKlxuICogUmVnaXN0ZXJlZCBjb21wb25lbnRzLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IGNvbnN0IF9jb21wb25lbnRzID0gbmV3IE1hcDxzdHJpbmcsIENvbXBvbmVudDxhbnk+PigpO1xuXG4vKipcbiAqIEBwYXJhbSBjb21wb25lbnQgLSB0aGUgY29tcG9uZW50IGJlaW5nIGFkZGVkIHRvIHRoaXMgYXBwJ3MgY29udGFpbmVyXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfYWRkQ29tcG9uZW50PFQgZXh0ZW5kcyBOYW1lPihcbiAgYXBwOiBGaXJlYmFzZUFwcCxcbiAgY29tcG9uZW50OiBDb21wb25lbnQ8VD5cbik6IHZvaWQge1xuICB0cnkge1xuICAgIChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsKS5jb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBsb2dnZXIuZGVidWcoXG4gICAgICBgQ29tcG9uZW50ICR7Y29tcG9uZW50Lm5hbWV9IGZhaWxlZCB0byByZWdpc3RlciB3aXRoIEZpcmViYXNlQXBwICR7YXBwLm5hbWV9YCxcbiAgICAgIGVcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50KFxuICBhcHA6IEZpcmViYXNlQXBwLFxuICBjb21wb25lbnQ6IENvbXBvbmVudFxuKTogdm9pZCB7XG4gIChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsKS5jb250YWluZXIuYWRkT3JPdmVyd3JpdGVDb21wb25lbnQoY29tcG9uZW50KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudCAtIHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXJcbiAqIEByZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaXMgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9yZWdpc3RlckNvbXBvbmVudDxUIGV4dGVuZHMgTmFtZT4oXG4gIGNvbXBvbmVudDogQ29tcG9uZW50PFQ+XG4pOiBib29sZWFuIHtcbiAgY29uc3QgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5uYW1lO1xuICBpZiAoX2NvbXBvbmVudHMuaGFzKGNvbXBvbmVudE5hbWUpKSB7XG4gICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgYFRoZXJlIHdlcmUgbXVsdGlwbGUgYXR0ZW1wdHMgdG8gcmVnaXN0ZXIgY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX0uYFxuICAgICk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfY29tcG9uZW50cy5zZXQoY29tcG9uZW50TmFtZSwgY29tcG9uZW50KTtcblxuICAvLyBhZGQgdGhlIGNvbXBvbmVudCB0byBleGlzdGluZyBhcHAgaW5zdGFuY2VzXG4gIGZvciAoY29uc3QgYXBwIG9mIF9hcHBzLnZhbHVlcygpKSB7XG4gICAgX2FkZENvbXBvbmVudChhcHAgYXMgRmlyZWJhc2VBcHBJbXBsLCBjb21wb25lbnQpO1xuICB9XG5cbiAgZm9yIChjb25zdCBzZXJ2ZXJBcHAgb2YgX3NlcnZlckFwcHMudmFsdWVzKCkpIHtcbiAgICBfYWRkQ29tcG9uZW50KHNlcnZlckFwcCBhcyBGaXJlYmFzZVNlcnZlckFwcEltcGwsIGNvbXBvbmVudCk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXG4gKiBAcGFyYW0gbmFtZSAtIHNlcnZpY2UgbmFtZVxuICpcbiAqIEByZXR1cm5zIHRoZSBwcm92aWRlciBmb3IgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldFByb3ZpZGVyPFQgZXh0ZW5kcyBOYW1lPihcbiAgYXBwOiBGaXJlYmFzZUFwcCxcbiAgbmFtZTogVFxuKTogUHJvdmlkZXI8VD4ge1xuICBjb25zdCBoZWFydGJlYXRDb250cm9sbGVyID0gKGFwcCBhcyBGaXJlYmFzZUFwcEltcGwpLmNvbnRhaW5lclxuICAgIC5nZXRQcm92aWRlcignaGVhcnRiZWF0JylcbiAgICAuZ2V0SW1tZWRpYXRlKHsgb3B0aW9uYWw6IHRydWUgfSk7XG4gIGlmIChoZWFydGJlYXRDb250cm9sbGVyKSB7XG4gICAgdm9pZCBoZWFydGJlYXRDb250cm9sbGVyLnRyaWdnZXJIZWFydGJlYXQoKTtcbiAgfVxuICByZXR1cm4gKGFwcCBhcyBGaXJlYmFzZUFwcEltcGwpLmNvbnRhaW5lci5nZXRQcm92aWRlcihuYW1lKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXG4gKiBAcGFyYW0gbmFtZSAtIHNlcnZpY2UgbmFtZVxuICogQHBhcmFtIGluc3RhbmNlSWRlbnRpZmllciAtIHNlcnZpY2UgaW5zdGFuY2UgaWRlbnRpZmllciBpbiBjYXNlIHRoZSBzZXJ2aWNlIHN1cHBvcnRzIG11bHRpcGxlIGluc3RhbmNlc1xuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX3JlbW92ZVNlcnZpY2VJbnN0YW5jZTxUIGV4dGVuZHMgTmFtZT4oXG4gIGFwcDogRmlyZWJhc2VBcHAsXG4gIG5hbWU6IFQsXG4gIGluc3RhbmNlSWRlbnRpZmllcjogc3RyaW5nID0gREVGQVVMVF9FTlRSWV9OQU1FXG4pOiB2b2lkIHtcbiAgX2dldFByb3ZpZGVyKGFwcCwgbmFtZSkuY2xlYXJJbnN0YW5jZShpbnN0YW5jZUlkZW50aWZpZXIpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gb2JqIC0gYW4gb2JqZWN0IG9mIHR5cGUgRmlyZWJhc2VBcHAgb3IgRmlyZWJhc2VPcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGUgb2JqZWN0IGlzIG9mIHR5cGUgRmlyZWJhc2VBcHAuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfaXNGaXJlYmFzZUFwcChcbiAgb2JqOiBGaXJlYmFzZUFwcCB8IEZpcmViYXNlT3B0aW9uc1xuKTogb2JqIGlzIEZpcmViYXNlQXBwIHtcbiAgcmV0dXJuIChvYmogYXMgRmlyZWJhc2VBcHApLm9wdGlvbnMgIT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIG9iaiAtIGFuIG9iamVjdCBvZiB0eXBlIEZpcmViYXNlQXBwLlxuICpcbiAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIG9iamVjdCBpcyBvZiB0eXBlIEZpcmViYXNlU2VydmVyQXBwSW1wbC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9pc0ZpcmViYXNlU2VydmVyQXBwKFxuICBvYmo6IEZpcmViYXNlQXBwIHwgRmlyZWJhc2VTZXJ2ZXJBcHBcbik6IG9iaiBpcyBGaXJlYmFzZVNlcnZlckFwcCB7XG4gIHJldHVybiAob2JqIGFzIEZpcmViYXNlU2VydmVyQXBwKS5zZXR0aW5ncyAhPT0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRlc3Qgb25seVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2NsZWFyQ29tcG9uZW50cygpOiB2b2lkIHtcbiAgX2NvbXBvbmVudHMuY2xlYXIoKTtcbn1cblxuLyoqXG4gKiBFeHBvcnRlZCBpbiBvcmRlciB0byBiZSB1c2VkIGluIGFwcC1jb21wYXQgcGFja2FnZVxuICovXG5leHBvcnQgeyBERUZBVUxUX0VOVFJZX05BTUUgYXMgX0RFRkFVTFRfRU5UUllfTkFNRSB9O1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgRXJyb3JNYXAgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEFwcEVycm9yIHtcbiAgTk9fQVBQID0gJ25vLWFwcCcsXG4gIEJBRF9BUFBfTkFNRSA9ICdiYWQtYXBwLW5hbWUnLFxuICBEVVBMSUNBVEVfQVBQID0gJ2R1cGxpY2F0ZS1hcHAnLFxuICBBUFBfREVMRVRFRCA9ICdhcHAtZGVsZXRlZCcsXG4gIFNFUlZFUl9BUFBfREVMRVRFRCA9ICdzZXJ2ZXItYXBwLWRlbGV0ZWQnLFxuICBOT19PUFRJT05TID0gJ25vLW9wdGlvbnMnLFxuICBJTlZBTElEX0FQUF9BUkdVTUVOVCA9ICdpbnZhbGlkLWFwcC1hcmd1bWVudCcsXG4gIElOVkFMSURfTE9HX0FSR1VNRU5UID0gJ2ludmFsaWQtbG9nLWFyZ3VtZW50JyxcbiAgSURCX09QRU4gPSAnaWRiLW9wZW4nLFxuICBJREJfR0VUID0gJ2lkYi1nZXQnLFxuICBJREJfV1JJVEUgPSAnaWRiLXNldCcsXG4gIElEQl9ERUxFVEUgPSAnaWRiLWRlbGV0ZScsXG4gIEZJTkFMSVpBVElPTl9SRUdJU1RSWV9OT1RfU1VQUE9SVEVEID0gJ2ZpbmFsaXphdGlvbi1yZWdpc3RyeS1ub3Qtc3VwcG9ydGVkJyxcbiAgSU5WQUxJRF9TRVJWRVJfQVBQX0VOVklST05NRU5UID0gJ2ludmFsaWQtc2VydmVyLWFwcC1lbnZpcm9ubWVudCdcbn1cblxuY29uc3QgRVJST1JTOiBFcnJvck1hcDxBcHBFcnJvcj4gPSB7XG4gIFtBcHBFcnJvci5OT19BUFBdOlxuICAgIFwiTm8gRmlyZWJhc2UgQXBwICd7JGFwcE5hbWV9JyBoYXMgYmVlbiBjcmVhdGVkIC0gXCIgK1xuICAgICdjYWxsIGluaXRpYWxpemVBcHAoKSBmaXJzdCcsXG4gIFtBcHBFcnJvci5CQURfQVBQX05BTUVdOiBcIklsbGVnYWwgQXBwIG5hbWU6ICd7JGFwcE5hbWV9J1wiLFxuICBbQXBwRXJyb3IuRFVQTElDQVRFX0FQUF06XG4gICAgXCJGaXJlYmFzZSBBcHAgbmFtZWQgJ3skYXBwTmFtZX0nIGFscmVhZHkgZXhpc3RzIHdpdGggZGlmZmVyZW50IG9wdGlvbnMgb3IgY29uZmlnXCIsXG4gIFtBcHBFcnJvci5BUFBfREVMRVRFRF06IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGRlbGV0ZWRcIixcbiAgW0FwcEVycm9yLlNFUlZFUl9BUFBfREVMRVRFRF06ICdGaXJlYmFzZSBTZXJ2ZXIgQXBwIGhhcyBiZWVuIGRlbGV0ZWQnLFxuICBbQXBwRXJyb3IuTk9fT1BUSU9OU106XG4gICAgJ05lZWQgdG8gcHJvdmlkZSBvcHRpb25zLCB3aGVuIG5vdCBiZWluZyBkZXBsb3llZCB0byBob3N0aW5nIHZpYSBzb3VyY2UuJyxcbiAgW0FwcEVycm9yLklOVkFMSURfQVBQX0FSR1VNRU5UXTpcbiAgICAnZmlyZWJhc2UueyRhcHBOYW1lfSgpIHRha2VzIGVpdGhlciBubyBhcmd1bWVudCBvciBhICcgK1xuICAgICdGaXJlYmFzZSBBcHAgaW5zdGFuY2UuJyxcbiAgW0FwcEVycm9yLklOVkFMSURfTE9HX0FSR1VNRU5UXTpcbiAgICAnRmlyc3QgYXJndW1lbnQgdG8gYG9uTG9nYCBtdXN0IGJlIG51bGwgb3IgYSBmdW5jdGlvbi4nLFxuICBbQXBwRXJyb3IuSURCX09QRU5dOlxuICAgICdFcnJvciB0aHJvd24gd2hlbiBvcGVuaW5nIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXG4gIFtBcHBFcnJvci5JREJfR0VUXTpcbiAgICAnRXJyb3IgdGhyb3duIHdoZW4gcmVhZGluZyBmcm9tIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXG4gIFtBcHBFcnJvci5JREJfV1JJVEVdOlxuICAgICdFcnJvciB0aHJvd24gd2hlbiB3cml0aW5nIHRvIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXG4gIFtBcHBFcnJvci5JREJfREVMRVRFXTpcbiAgICAnRXJyb3IgdGhyb3duIHdoZW4gZGVsZXRpbmcgZnJvbSBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxuICBbQXBwRXJyb3IuRklOQUxJWkFUSU9OX1JFR0lTVFJZX05PVF9TVVBQT1JURURdOlxuICAgICdGaXJlYmFzZVNlcnZlckFwcCBkZWxldGVPbkRlcmVmIGZpZWxkIGRlZmluZWQgYnV0IHRoZSBKUyBydW50aW1lIGRvZXMgbm90IHN1cHBvcnQgRmluYWxpemF0aW9uUmVnaXN0cnkuJyxcbiAgW0FwcEVycm9yLklOVkFMSURfU0VSVkVSX0FQUF9FTlZJUk9OTUVOVF06XG4gICAgJ0ZpcmViYXNlU2VydmVyQXBwIGlzIG5vdCBmb3IgdXNlIGluIGJyb3dzZXIgZW52aXJvbm1lbnRzLidcbn07XG5cbmludGVyZmFjZSBFcnJvclBhcmFtcyB7XG4gIFtBcHBFcnJvci5OT19BUFBdOiB7IGFwcE5hbWU6IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuQkFEX0FQUF9OQU1FXTogeyBhcHBOYW1lOiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLkRVUExJQ0FURV9BUFBdOiB7IGFwcE5hbWU6IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuQVBQX0RFTEVURURdOiB7IGFwcE5hbWU6IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuSU5WQUxJRF9BUFBfQVJHVU1FTlRdOiB7IGFwcE5hbWU6IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuSURCX09QRU5dOiB7IG9yaWdpbmFsRXJyb3JNZXNzYWdlPzogc3RyaW5nIH07XG4gIFtBcHBFcnJvci5JREJfR0VUXTogeyBvcmlnaW5hbEVycm9yTWVzc2FnZT86IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuSURCX1dSSVRFXTogeyBvcmlnaW5hbEVycm9yTWVzc2FnZT86IHN0cmluZyB9O1xuICBbQXBwRXJyb3IuSURCX0RFTEVURV06IHsgb3JpZ2luYWxFcnJvck1lc3NhZ2U/OiBzdHJpbmcgfTtcbiAgW0FwcEVycm9yLkZJTkFMSVpBVElPTl9SRUdJU1RSWV9OT1RfU1VQUE9SVEVEXTogeyBhcHBOYW1lPzogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeTxBcHBFcnJvciwgRXJyb3JQYXJhbXM+KFxuICAnYXBwJyxcbiAgJ0ZpcmViYXNlJyxcbiAgRVJST1JTXG4pO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIEZpcmViYXNlQXBwLFxuICBGaXJlYmFzZU9wdGlvbnMsXG4gIEZpcmViYXNlQXBwU2V0dGluZ3Ncbn0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50Q29udGFpbmVyLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudFR5cGVcbn0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBFUlJPUl9GQUNUT1JZLCBBcHBFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQXBwSW1wbCBpbXBsZW1lbnRzIEZpcmViYXNlQXBwIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9vcHRpb25zOiBGaXJlYmFzZU9wdGlvbnM7XG4gIHByb3RlY3RlZCByZWFkb25seSBfbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogT3JpZ2luYWwgY29uZmlnIHZhbHVlcyBwYXNzZWQgaW4gYXMgYSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIuXG4gICAqIEl0IGlzIG9ubHkgdXNlZCB0byBjb21wYXJlIHdpdGggYW5vdGhlciBjb25maWcgb2JqZWN0IHRvIHN1cHBvcnQgaWRlbXBvdGVudCBpbml0aWFsaXplQXBwKCkuXG4gICAqXG4gICAqIFVwZGF0aW5nIGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCBvbiB0aGUgQXBwIGluc3RhbmNlIHdpbGwgbm90IGNoYW5nZSBpdHMgdmFsdWUgaW4gX2NvbmZpZy5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2NvbmZpZzogUmVxdWlyZWQ8RmlyZWJhc2VBcHBTZXR0aW5ncz47XG4gIHByaXZhdGUgX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDogYm9vbGVhbjtcbiAgcHJvdGVjdGVkIF9pc0RlbGV0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWFkb25seSBfY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb3B0aW9uczogRmlyZWJhc2VPcHRpb25zLFxuICAgIGNvbmZpZzogUmVxdWlyZWQ8RmlyZWJhc2VBcHBTZXR0aW5ncz4sXG4gICAgY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXJcbiAgKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHsgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMuX2NvbmZpZyA9IHsgLi4uY29uZmlnIH07XG4gICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9XG4gICAgICBjb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRDb21wb25lbnQoXG4gICAgICBuZXcgQ29tcG9uZW50KCdhcHAnLCAoKSA9PiB0aGlzLCBDb21wb25lbnRUeXBlLlBVQkxJQylcbiAgICApO1xuICB9XG5cbiAgZ2V0IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDtcbiAgfVxuXG4gIHNldCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQodmFsOiBib29sZWFuKSB7XG4gICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xuICAgIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IHZhbDtcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKTogRmlyZWJhc2VPcHRpb25zIHtcbiAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBnZXQgY29uZmlnKCk6IFJlcXVpcmVkPEZpcmViYXNlQXBwU2V0dGluZ3M+IHtcbiAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIGdldCBjb250YWluZXIoKTogQ29tcG9uZW50Q29udGFpbmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICB9XG5cbiAgZ2V0IGlzRGVsZXRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNEZWxldGVkO1xuICB9XG5cbiAgc2V0IGlzRGVsZXRlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0RlbGV0ZWQgPSB2YWw7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGFuIEVycm9yIGlmIHRoZSBBcHAgaGFzIGFscmVhZHkgYmVlbiBkZWxldGVkIC1cbiAgICogdXNlIGJlZm9yZSBwZXJmb3JtaW5nIEFQSSBhY3Rpb25zIG9uIHRoZSBBcHAuXG4gICAqL1xuICBwcm90ZWN0ZWQgY2hlY2tEZXN0cm95ZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5BUFBfREVMRVRFRCwgeyBhcHBOYW1lOiB0aGlzLl9uYW1lIH0pO1xuICAgIH1cbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIzIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIEZpcmViYXNlQXBwU2V0dGluZ3MsXG4gIEZpcmViYXNlU2VydmVyQXBwLFxuICBGaXJlYmFzZVNlcnZlckFwcFNldHRpbmdzLFxuICBGaXJlYmFzZU9wdGlvbnNcbn0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgZGVsZXRlQXBwLCByZWdpc3RlclZlcnNpb24gfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBDb21wb25lbnRDb250YWluZXIgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IEZpcmViYXNlQXBwSW1wbCB9IGZyb20gJy4vZmlyZWJhc2VBcHAnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgQXBwRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBuYW1lIGFzIHBhY2thZ2VOYW1lLCB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlU2VydmVyQXBwSW1wbFxuICBleHRlbmRzIEZpcmViYXNlQXBwSW1wbFxuICBpbXBsZW1lbnRzIEZpcmViYXNlU2VydmVyQXBwXG57XG4gIHByaXZhdGUgcmVhZG9ubHkgX3NlcnZlckNvbmZpZzogRmlyZWJhc2VTZXJ2ZXJBcHBTZXR0aW5ncztcbiAgcHJpdmF0ZSBfZmluYWxpemF0aW9uUmVnaXN0cnk6IEZpbmFsaXphdGlvblJlZ2lzdHJ5PG9iamVjdD4gfCBudWxsO1xuICBwcml2YXRlIF9yZWZDb3VudDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9wdGlvbnM6IEZpcmViYXNlT3B0aW9ucyB8IEZpcmViYXNlQXBwSW1wbCxcbiAgICBzZXJ2ZXJDb25maWc6IEZpcmViYXNlU2VydmVyQXBwU2V0dGluZ3MsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyXG4gICkge1xuICAgIC8vIEJ1aWxkIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBmb3IgdGhlIEZpcmViYXNlQXBwSW1wbCBiYXNlIGNsYXNzLlxuICAgIGNvbnN0IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9XG4gICAgICBzZXJ2ZXJDb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBzZXJ2ZXJDb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkXG4gICAgICAgIDogZmFsc2U7XG5cbiAgICAvLyBDcmVhdGUgdGhlIEZpcmViYXNlQXBwU2V0dGluZ3Mgb2JqZWN0IGZvciB0aGUgRmlyZWJhc2VBcHBJbXAgY29uc3RydWN0b3IuXG4gICAgY29uc3QgY29uZmlnOiBSZXF1aXJlZDxGaXJlYmFzZUFwcFNldHRpbmdzPiA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRcbiAgICB9O1xuXG4gICAgaWYgKChvcHRpb25zIGFzIEZpcmViYXNlT3B0aW9ucykuYXBpS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIENvbnN0cnVjdCB0aGUgcGFyZW50IEZpcmViYXNlQXBwSW1wIG9iamVjdC5cbiAgICAgIHN1cGVyKG9wdGlvbnMgYXMgRmlyZWJhc2VPcHRpb25zLCBjb25maWcsIGNvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFwcEltcGw6IEZpcmViYXNlQXBwSW1wbCA9IG9wdGlvbnMgYXMgRmlyZWJhc2VBcHBJbXBsO1xuICAgICAgc3VwZXIoYXBwSW1wbC5vcHRpb25zLCBjb25maWcsIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gTm93IGNvbnN0cnVjdCB0aGUgZGF0YSBmb3IgdGhlIEZpcmViYXNlU2VydmVyQXBwSW1wbC5cbiAgICB0aGlzLl9zZXJ2ZXJDb25maWcgPSB7XG4gICAgICBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQsXG4gICAgICAuLi5zZXJ2ZXJDb25maWdcbiAgICB9O1xuXG4gICAgdGhpcy5fZmluYWxpemF0aW9uUmVnaXN0cnkgPSBudWxsO1xuICAgIGlmICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9maW5hbGl6YXRpb25SZWdpc3RyeSA9IG5ldyBGaW5hbGl6YXRpb25SZWdpc3RyeSgoKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0b21hdGljQ2xlYW51cCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVmQ291bnQgPSAwO1xuICAgIHRoaXMuaW5jUmVmQ291bnQodGhpcy5fc2VydmVyQ29uZmlnLnJlbGVhc2VPbkRlcmVmKTtcblxuICAgIC8vIERvIG5vdCByZXRhaW4gYSBoYXJkIHJlZmVyZW5jZSB0byB0aGUgZHJlZiBvYmplY3QsIG90aGVyd2lzZSB0aGUgRmluYWxpemF0aW9uUmVnaXN0cnlcbiAgICAvLyB3aWxsIG5ldmVyIHRyaWdnZXIuXG4gICAgdGhpcy5fc2VydmVyQ29uZmlnLnJlbGVhc2VPbkRlcmVmID0gdW5kZWZpbmVkO1xuICAgIHNlcnZlckNvbmZpZy5yZWxlYXNlT25EZXJlZiA9IHVuZGVmaW5lZDtcblxuICAgIHJlZ2lzdGVyVmVyc2lvbihwYWNrYWdlTmFtZSwgdmVyc2lvbiwgJ3NlcnZlcmFwcCcpO1xuICB9XG5cbiAgdG9KU09OKCk6IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCByZWZDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yZWZDb3VudDtcbiAgfVxuXG4gIC8vIEluY3JlbWVudCB0aGUgcmVmZXJlbmNlIGNvdW50IG9mIHRoaXMgc2VydmVyIGFwcC4gSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkLCByZWdpc3RlciBpdFxuICAvLyB3aXRoIHRoZSBmaW5hbGl6YXRpb24gcmVnaXN0cnkuXG4gIGluY1JlZkNvdW50KG9iajogb2JqZWN0IHwgdW5kZWZpbmVkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3JlZkNvdW50Kys7XG4gICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX2ZpbmFsaXphdGlvblJlZ2lzdHJ5ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9maW5hbGl6YXRpb25SZWdpc3RyeS5yZWdpc3RlcihvYmosIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlY3JlbWVudCB0aGUgcmVmZXJlbmNlIGNvdW50LlxuICBkZWNSZWZDb3VudCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLmlzRGVsZXRlZCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiAtLXRoaXMuX3JlZkNvdW50O1xuICB9XG5cbiAgLy8gSW52b2tlZCBieSB0aGUgRmluYWxpemF0aW9uUmVnaXN0cnkgY2FsbGJhY2sgdG8gbm90ZSB0aGF0IHRoaXMgYXBwIHNob3VsZCBnbyB0aHJvdWdoIGl0c1xuICAvLyByZWZlcmVuY2UgY291bnRzIGFuZCBkZWxldGUgaXRzZWxmIGlmIG5vIHJlZmVyZW5jZSBjb3VudCByZW1haW4uIFRoZSBjb29yZGluYXRpbmcgbG9naWMgdGhhdFxuICAvLyBoYW5kbGVzIHRoaXMgaXMgaW4gZGVsZXRlQXBwKC4uLikuXG4gIHByaXZhdGUgYXV0b21hdGljQ2xlYW51cCgpOiB2b2lkIHtcbiAgICB2b2lkIGRlbGV0ZUFwcCh0aGlzKTtcbiAgfVxuXG4gIGdldCBzZXR0aW5ncygpOiBGaXJlYmFzZVNlcnZlckFwcFNldHRpbmdzIHtcbiAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgcmV0dXJuIHRoaXMuX3NlcnZlckNvbmZpZztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gRXJyb3IgaWYgdGhlIEFwcCBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQgLVxuICAgKiB1c2UgYmVmb3JlIHBlcmZvcm1pbmcgQVBJIGFjdGlvbnMgb24gdGhlIEFwcC5cbiAgICovXG4gIHByb3RlY3RlZCBjaGVja0Rlc3Ryb3llZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0RlbGV0ZWQpIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLlNFUlZFUl9BUFBfREVMRVRFRCk7XG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtcbiAgRmlyZWJhc2VBcHAsXG4gIEZpcmViYXNlU2VydmVyQXBwLFxuICBGaXJlYmFzZU9wdGlvbnMsXG4gIEZpcmViYXNlQXBwU2V0dGluZ3MsXG4gIEZpcmViYXNlU2VydmVyQXBwU2V0dGluZ3Ncbn0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgREVGQVVMVF9FTlRSWV9OQU1FLCBQTEFURk9STV9MT0dfU1RSSU5HIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgRVJST1JfRkFDVE9SWSwgQXBwRXJyb3IgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQge1xuICBDb21wb25lbnRDb250YWluZXIsXG4gIENvbXBvbmVudCxcbiAgTmFtZSxcbiAgQ29tcG9uZW50VHlwZVxufSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi9maXJlYmFzZS9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgRmlyZWJhc2VBcHBJbXBsIH0gZnJvbSAnLi9maXJlYmFzZUFwcCc7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZlckFwcEltcGwgfSBmcm9tICcuL2ZpcmViYXNlU2VydmVyQXBwJztcbmltcG9ydCB7XG4gIF9hcHBzLFxuICBfY29tcG9uZW50cyxcbiAgX2lzRmlyZWJhc2VBcHAsXG4gIF9yZWdpc3RlckNvbXBvbmVudCxcbiAgX3NlcnZlckFwcHNcbn0gZnJvbSAnLi9pbnRlcm5hbCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQge1xuICBMb2dMZXZlbFN0cmluZyxcbiAgc2V0TG9nTGV2ZWwgYXMgc2V0TG9nTGV2ZWxJbXBsLFxuICBMb2dDYWxsYmFjayxcbiAgTG9nT3B0aW9ucyxcbiAgc2V0VXNlckxvZ0hhbmRsZXJcbn0gZnJvbSAnQGZpcmViYXNlL2xvZ2dlcic7XG5pbXBvcnQge1xuICBkZWVwRXF1YWwsXG4gIGdldERlZmF1bHRBcHBDb25maWcsXG4gIGlzQnJvd3NlcixcbiAgaXNXZWJXb3JrZXJcbn0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuXG5leHBvcnQgeyBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50IFNESyB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IFNES19WRVJTSU9OID0gdmVyc2lvbjtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBpbml0aWFsaXplcyBhIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cbiAqXG4gKiBTZWVcbiAqIHtAbGlua1xuICogICBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYWRkX2ZpcmViYXNlX3RvX3lvdXJfYXBwXG4gKiAgIHwgQWRkIEZpcmViYXNlIHRvIHlvdXIgYXBwfSBhbmRcbiAqIHtAbGlua1xuICogICBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjbXVsdGlwbGUtcHJvamVjdHNcbiAqICAgfCBJbml0aWFsaXplIG11bHRpcGxlIHByb2plY3RzfSBmb3IgZGV0YWlsZWQgZG9jdW1lbnRhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgamF2YXNjcmlwdFxuICpcbiAqIC8vIEluaXRpYWxpemUgZGVmYXVsdCBhcHBcbiAqIC8vIFJldHJpZXZlIHlvdXIgb3duIG9wdGlvbnMgdmFsdWVzIGJ5IGFkZGluZyBhIHdlYiBhcHAgb25cbiAqIC8vIGh0dHBzOi8vY29uc29sZS5maXJlYmFzZS5nb29nbGUuY29tXG4gKiBpbml0aWFsaXplQXBwKHtcbiAqICAgYXBpS2V5OiBcIkFJemEuLi4uXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRoIC8gR2VuZXJhbCBVc2VcbiAqICAgYXV0aERvbWFpbjogXCJZT1VSX0FQUC5maXJlYmFzZWFwcC5jb21cIiwgICAgICAgICAvLyBBdXRoIHdpdGggcG9wdXAvcmVkaXJlY3RcbiAqICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9ZT1VSX0FQUC5maXJlYmFzZWlvLmNvbVwiLCAvLyBSZWFsdGltZSBEYXRhYmFzZVxuICogICBzdG9yYWdlQnVja2V0OiBcIllPVVJfQVBQLmFwcHNwb3QuY29tXCIsICAgICAgICAgIC8vIFN0b3JhZ2VcbiAqICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTIzNDU2Nzg5XCIgICAgICAgICAgICAgICAgICAvLyBDbG91ZCBNZXNzYWdpbmdcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGphdmFzY3JpcHRcbiAqXG4gKiAvLyBJbml0aWFsaXplIGFub3RoZXIgYXBwXG4gKiBjb25zdCBvdGhlckFwcCA9IGluaXRpYWxpemVBcHAoe1xuICogICBkYXRhYmFzZVVSTDogXCJodHRwczovLzxPVEhFUl9EQVRBQkFTRV9OQU1FPi5maXJlYmFzZWlvLmNvbVwiLFxuICogICBzdG9yYWdlQnVja2V0OiBcIjxPVEhFUl9TVE9SQUdFX0JVQ0tFVD4uYXBwc3BvdC5jb21cIlxuICogfSwgXCJvdGhlckFwcFwiKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyB0byBjb25maWd1cmUgdGhlIGFwcCdzIHNlcnZpY2VzLlxuICogQHBhcmFtIG5hbWUgLSBPcHRpb25hbCBuYW1lIG9mIHRoZSBhcHAgdG8gaW5pdGlhbGl6ZS4gSWYgbm8gbmFtZVxuICogICBpcyBwcm92aWRlZCwgdGhlIGRlZmF1bHQgaXMgYFwiW0RFRkFVTFRdXCJgLlxuICpcbiAqIEByZXR1cm5zIFRoZSBpbml0aWFsaXplZCBhcHAuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChcbiAgb3B0aW9uczogRmlyZWJhc2VPcHRpb25zLFxuICBuYW1lPzogc3RyaW5nXG4pOiBGaXJlYmFzZUFwcDtcbi8qKlxuICogQ3JlYXRlcyBhbmQgaW5pdGlhbGl6ZXMgYSBGaXJlYmFzZUFwcCBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgdG8gY29uZmlndXJlIHRoZSBhcHAncyBzZXJ2aWNlcy5cbiAqIEBwYXJhbSBjb25maWcgLSBGaXJlYmFzZUFwcCBDb25maWd1cmF0aW9uXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChcbiAgb3B0aW9uczogRmlyZWJhc2VPcHRpb25zLFxuICBjb25maWc/OiBGaXJlYmFzZUFwcFNldHRpbmdzXG4pOiBGaXJlYmFzZUFwcDtcbi8qKlxuICogQ3JlYXRlcyBhbmQgaW5pdGlhbGl6ZXMgYSBGaXJlYmFzZUFwcCBpbnN0YW5jZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKCk6IEZpcmViYXNlQXBwO1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoXG4gIF9vcHRpb25zPzogRmlyZWJhc2VPcHRpb25zLFxuICByYXdDb25maWcgPSB7fVxuKTogRmlyZWJhc2VBcHAge1xuICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zO1xuXG4gIGlmICh0eXBlb2YgcmF3Q29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IG5hbWUgPSByYXdDb25maWc7XG4gICAgcmF3Q29uZmlnID0geyBuYW1lIH07XG4gIH1cblxuICBjb25zdCBjb25maWc6IFJlcXVpcmVkPEZpcmViYXNlQXBwU2V0dGluZ3M+ID0ge1xuICAgIG5hbWU6IERFRkFVTFRfRU5UUllfTkFNRSxcbiAgICBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ6IGZhbHNlLFxuICAgIC4uLnJhd0NvbmZpZ1xuICB9O1xuICBjb25zdCBuYW1lID0gY29uZmlnLm5hbWU7XG5cbiAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCAhbmFtZSkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLkJBRF9BUFBfTkFNRSwge1xuICAgICAgYXBwTmFtZTogU3RyaW5nKG5hbWUpXG4gICAgfSk7XG4gIH1cblxuICBvcHRpb25zIHx8PSBnZXREZWZhdWx0QXBwQ29uZmlnKCk7XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuTk9fT1BUSU9OUyk7XG4gIH1cblxuICBjb25zdCBleGlzdGluZ0FwcCA9IF9hcHBzLmdldChuYW1lKSBhcyBGaXJlYmFzZUFwcEltcGw7XG4gIGlmIChleGlzdGluZ0FwcCkge1xuICAgIC8vIHJldHVybiB0aGUgZXhpc3RpbmcgYXBwIGlmIG9wdGlvbnMgYW5kIGNvbmZpZyBkZWVwIGVxdWFsIHRoZSBvbmVzIGluIHRoZSBleGlzdGluZyBhcHAuXG4gICAgaWYgKFxuICAgICAgZGVlcEVxdWFsKG9wdGlvbnMsIGV4aXN0aW5nQXBwLm9wdGlvbnMpICYmXG4gICAgICBkZWVwRXF1YWwoY29uZmlnLCBleGlzdGluZ0FwcC5jb25maWcpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZXhpc3RpbmdBcHA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLkRVUExJQ0FURV9BUFAsIHsgYXBwTmFtZTogbmFtZSB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBuZXcgQ29tcG9uZW50Q29udGFpbmVyKG5hbWUpO1xuICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBfY29tcG9uZW50cy52YWx1ZXMoKSkge1xuICAgIGNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcbiAgfVxuXG4gIGNvbnN0IG5ld0FwcCA9IG5ldyBGaXJlYmFzZUFwcEltcGwob3B0aW9ucywgY29uZmlnLCBjb250YWluZXIpO1xuXG4gIF9hcHBzLnNldChuYW1lLCBuZXdBcHApO1xuXG4gIHJldHVybiBuZXdBcHA7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgaW5pdGlhbGl6ZXMgYSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZVNlcnZlckFwcH0gaW5zdGFuY2UuXG4gKlxuICogVGhlIGBGaXJlYmFzZVNlcnZlckFwcGAgaXMgc2ltaWxhciB0byBgRmlyZWJhc2VBcHBgLCBidXQgaXMgaW50ZW5kZWQgZm9yIGV4ZWN1dGlvbiBpblxuICogc2VydmVyIHNpZGUgcmVuZGVyaW5nIGVudmlyb25tZW50cyBvbmx5LiBJbml0aWFsaXphdGlvbiB3aWxsIGZhaWwgaWYgaW52b2tlZCBmcm9tIGFcbiAqIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gKlxuICogU2VlXG4gKiB7QGxpbmtcbiAqICAgaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2FkZF9maXJlYmFzZV90b195b3VyX2FwcFxuICogICB8IEFkZCBGaXJlYmFzZSB0byB5b3VyIGFwcH0gYW5kXG4gKiB7QGxpbmtcbiAqICAgaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI211bHRpcGxlLXByb2plY3RzXG4gKiAgIHwgSW5pdGlhbGl6ZSBtdWx0aXBsZSBwcm9qZWN0c30gZm9yIGRldGFpbGVkIGRvY3VtZW50YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGphdmFzY3JpcHRcbiAqXG4gKiAvLyBJbml0aWFsaXplIGFuIGluc3RhbmNlIG9mIGBGaXJlYmFzZVNlcnZlckFwcGAuXG4gKiAvLyBSZXRyaWV2ZSB5b3VyIG93biBvcHRpb25zIHZhbHVlcyBieSBhZGRpbmcgYSB3ZWIgYXBwIG9uXG4gKiAvLyBodHRwczovL2NvbnNvbGUuZmlyZWJhc2UuZ29vZ2xlLmNvbVxuICogaW5pdGlhbGl6ZVNlcnZlckFwcCh7XG4gKiAgICAgYXBpS2V5OiBcIkFJemEuLi4uXCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRoIC8gR2VuZXJhbCBVc2VcbiAqICAgICBhdXRoRG9tYWluOiBcIllPVVJfQVBQLmZpcmViYXNlYXBwLmNvbVwiLCAgICAgICAgIC8vIEF1dGggd2l0aCBwb3B1cC9yZWRpcmVjdFxuICogICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vWU9VUl9BUFAuZmlyZWJhc2Vpby5jb21cIiwgLy8gUmVhbHRpbWUgRGF0YWJhc2VcbiAqICAgICBzdG9yYWdlQnVja2V0OiBcIllPVVJfQVBQLmFwcHNwb3QuY29tXCIsICAgICAgICAgIC8vIFN0b3JhZ2VcbiAqICAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMjM0NTY3ODlcIiAgICAgICAgICAgICAgICAgIC8vIENsb3VkIE1lc3NhZ2luZ1xuICogICB9LFxuICogICB7XG4gKiAgICBhdXRoSWRUb2tlbjogXCJZb3VyIEF1dGggSUQgVG9rZW5cIlxuICogICB9KTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBvcHRpb25zIC0gYEZpcmViYXNlLkFwcE9wdGlvbnNgIHRvIGNvbmZpZ3VyZSB0aGUgYXBwJ3Mgc2VydmljZXMsIG9yIGFcbiAqICAgYSBgRmlyZWJhc2VBcHBgIGluc3RhbmNlIHdoaWNoIGNvbnRhaW5zIHRoZSBgQXBwT3B0aW9uc2Agd2l0aGluLlxuICogQHBhcmFtIGNvbmZpZyAtIGBGaXJlYmFzZVNlcnZlckFwcGAgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJucyBUaGUgaW5pdGlhbGl6ZWQgYEZpcmViYXNlU2VydmVyQXBwYC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU2VydmVyQXBwKFxuICBvcHRpb25zOiBGaXJlYmFzZU9wdGlvbnMgfCBGaXJlYmFzZUFwcCxcbiAgY29uZmlnOiBGaXJlYmFzZVNlcnZlckFwcFNldHRpbmdzXG4pOiBGaXJlYmFzZVNlcnZlckFwcDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVTZXJ2ZXJBcHAoXG4gIF9vcHRpb25zOiBGaXJlYmFzZU9wdGlvbnMgfCBGaXJlYmFzZUFwcCxcbiAgX3NlcnZlckFwcENvbmZpZzogRmlyZWJhc2VTZXJ2ZXJBcHBTZXR0aW5nc1xuKTogRmlyZWJhc2VTZXJ2ZXJBcHAge1xuICBpZiAoaXNCcm93c2VyKCkgJiYgIWlzV2ViV29ya2VyKCkpIHtcbiAgICAvLyBGaXJlYmFzZVNlcnZlckFwcCBpc24ndCBkZXNpZ25lZCB0byBiZSBydW4gaW4gYnJvd3NlcnMuXG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuSU5WQUxJRF9TRVJWRVJfQVBQX0VOVklST05NRU5UKTtcbiAgfVxuXG4gIGlmIChfc2VydmVyQXBwQ29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgX3NlcnZlckFwcENvbmZpZy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBhcHBPcHRpb25zOiBGaXJlYmFzZU9wdGlvbnM7XG4gIGlmIChfaXNGaXJlYmFzZUFwcChfb3B0aW9ucykpIHtcbiAgICBhcHBPcHRpb25zID0gX29wdGlvbnMub3B0aW9ucztcbiAgfSBlbHNlIHtcbiAgICBhcHBPcHRpb25zID0gX29wdGlvbnM7XG4gIH1cblxuICAvLyBCdWlsZCBhbiBhcHAgbmFtZSBiYXNlZCBvbiBhIGhhc2ggb2YgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgY29uc3QgbmFtZU9iaiA9IHtcbiAgICAuLi5fc2VydmVyQXBwQ29uZmlnLFxuICAgIC4uLmFwcE9wdGlvbnNcbiAgfTtcblxuICAvLyBIb3dldmVyLCBEbyBub3QgbWFuZ2xlIHRoZSBuYW1lIGJhc2VkIG9uIHJlbGVhc2VPbkRlcmVmLCBzaW5jZSBpdCB3aWxsIHZhcnkgYmV0d2VlbiB0aGVcbiAgLy8gY29uc3RydWN0aW9uIG9mIEZpcmViYXNlU2VydmVyQXBwIGluc3RhbmNlcy4gRm9yIGV4YW1wbGUsIGlmIHRoZSBvYmplY3QgaXMgdGhlIHJlcXVlc3QgaGVhZGVycy5cbiAgaWYgKG5hbWVPYmoucmVsZWFzZU9uRGVyZWYgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlbGV0ZSBuYW1lT2JqLnJlbGVhc2VPbkRlcmVmO1xuICB9XG5cbiAgY29uc3QgaGFzaENvZGUgPSAoczogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gWy4uLnNdLnJlZHVjZShcbiAgICAgIChoYXNoLCBjKSA9PiAoTWF0aC5pbXVsKDMxLCBoYXNoKSArIGMuY2hhckNvZGVBdCgwKSkgfCAwLFxuICAgICAgMFxuICAgICk7XG4gIH07XG5cbiAgaWYgKF9zZXJ2ZXJBcHBDb25maWcucmVsZWFzZU9uRGVyZWYgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgRmluYWxpemF0aW9uUmVnaXN0cnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcbiAgICAgICAgQXBwRXJyb3IuRklOQUxJWkFUSU9OX1JFR0lTVFJZX05PVF9TVVBQT1JURUQsXG4gICAgICAgIHt9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5hbWVTdHJpbmcgPSAnJyArIGhhc2hDb2RlKEpTT04uc3RyaW5naWZ5KG5hbWVPYmopKTtcbiAgY29uc3QgZXhpc3RpbmdBcHAgPSBfc2VydmVyQXBwcy5nZXQobmFtZVN0cmluZykgYXMgRmlyZWJhc2VTZXJ2ZXJBcHA7XG4gIGlmIChleGlzdGluZ0FwcCkge1xuICAgIChleGlzdGluZ0FwcCBhcyBGaXJlYmFzZVNlcnZlckFwcEltcGwpLmluY1JlZkNvdW50KFxuICAgICAgX3NlcnZlckFwcENvbmZpZy5yZWxlYXNlT25EZXJlZlxuICAgICk7XG4gICAgcmV0dXJuIGV4aXN0aW5nQXBwO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gbmV3IENvbXBvbmVudENvbnRhaW5lcihuYW1lU3RyaW5nKTtcbiAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgX2NvbXBvbmVudHMudmFsdWVzKCkpIHtcbiAgICBjb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gIH1cblxuICBjb25zdCBuZXdBcHAgPSBuZXcgRmlyZWJhc2VTZXJ2ZXJBcHBJbXBsKFxuICAgIGFwcE9wdGlvbnMsXG4gICAgX3NlcnZlckFwcENvbmZpZyxcbiAgICBuYW1lU3RyaW5nLFxuICAgIGNvbnRhaW5lclxuICApO1xuXG4gIF9zZXJ2ZXJBcHBzLnNldChuYW1lU3RyaW5nLCBuZXdBcHApO1xuXG4gIHJldHVybiBuZXdBcHA7XG59XG5cbi8qKlxuICogUmV0cmlldmVzIGEge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IGluc3RhbmNlLlxuICpcbiAqIFdoZW4gY2FsbGVkIHdpdGggbm8gYXJndW1lbnRzLCB0aGUgZGVmYXVsdCBhcHAgaXMgcmV0dXJuZWQuIFdoZW4gYW4gYXBwIG5hbWVcbiAqIGlzIHByb3ZpZGVkLCB0aGUgYXBwIGNvcnJlc3BvbmRpbmcgdG8gdGhhdCBuYW1lIGlzIHJldHVybmVkLlxuICpcbiAqIEFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaWYgdGhlIGFwcCBiZWluZyByZXRyaWV2ZWQgaGFzIG5vdCB5ZXQgYmVlblxuICogaW5pdGlhbGl6ZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIFJldHVybiB0aGUgZGVmYXVsdCBhcHBcbiAqIGNvbnN0IGFwcCA9IGdldEFwcCgpO1xuICogYGBgXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGphdmFzY3JpcHRcbiAqIC8vIFJldHVybiBhIG5hbWVkIGFwcFxuICogY29uc3Qgb3RoZXJBcHAgPSBnZXRBcHAoXCJvdGhlckFwcFwiKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSBuYW1lIC0gT3B0aW9uYWwgbmFtZSBvZiB0aGUgYXBwIHRvIHJldHVybi4gSWYgbm8gbmFtZSBpc1xuICogICBwcm92aWRlZCwgdGhlIGRlZmF1bHQgaXMgYFwiW0RFRkFVTFRdXCJgLlxuICpcbiAqIEByZXR1cm5zIFRoZSBhcHAgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvdmlkZWQgYXBwIG5hbWUuXG4gKiAgIElmIG5vIGFwcCBuYW1lIGlzIHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBhcHAgaXMgcmV0dXJuZWQuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwKG5hbWU6IHN0cmluZyA9IERFRkFVTFRfRU5UUllfTkFNRSk6IEZpcmViYXNlQXBwIHtcbiAgY29uc3QgYXBwID0gX2FwcHMuZ2V0KG5hbWUpO1xuICBpZiAoIWFwcCAmJiBuYW1lID09PSBERUZBVUxUX0VOVFJZX05BTUUgJiYgZ2V0RGVmYXVsdEFwcENvbmZpZygpKSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVBcHAoKTtcbiAgfVxuICBpZiAoIWFwcCkge1xuICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLk5PX0FQUCwgeyBhcHBOYW1lOiBuYW1lIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFwcDtcbn1cblxuLyoqXG4gKiBBIChyZWFkLW9ubHkpIGFycmF5IG9mIGFsbCBpbml0aWFsaXplZCBhcHBzLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwcygpOiBGaXJlYmFzZUFwcFtdIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oX2FwcHMudmFsdWVzKCkpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhpcyBhcHAgdW51c2FibGUgYW5kIGZyZWVzIHRoZSByZXNvdXJjZXMgb2YgYWxsIGFzc29jaWF0ZWRcbiAqIHNlcnZpY2VzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBkZWxldGVBcHAoYXBwKVxuICogICAudGhlbihmdW5jdGlvbigpIHtcbiAqICAgICBjb25zb2xlLmxvZyhcIkFwcCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAqICAgfSlcbiAqICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gKiAgICAgY29uc29sZS5sb2coXCJFcnJvciBkZWxldGluZyBhcHA6XCIsIGVycm9yKTtcbiAqICAgfSk7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBcHAoYXBwOiBGaXJlYmFzZUFwcCk6IFByb21pc2U8dm9pZD4ge1xuICBsZXQgY2xlYW51cFByb3ZpZGVycyA9IGZhbHNlO1xuICBjb25zdCBuYW1lID0gYXBwLm5hbWU7XG4gIGlmIChfYXBwcy5oYXMobmFtZSkpIHtcbiAgICBjbGVhbnVwUHJvdmlkZXJzID0gdHJ1ZTtcbiAgICBfYXBwcy5kZWxldGUobmFtZSk7XG4gIH0gZWxzZSBpZiAoX3NlcnZlckFwcHMuaGFzKG5hbWUpKSB7XG4gICAgY29uc3QgZmlyZWJhc2VTZXJ2ZXJBcHAgPSBhcHAgYXMgRmlyZWJhc2VTZXJ2ZXJBcHBJbXBsO1xuICAgIGlmIChmaXJlYmFzZVNlcnZlckFwcC5kZWNSZWZDb3VudCgpIDw9IDApIHtcbiAgICAgIF9zZXJ2ZXJBcHBzLmRlbGV0ZShuYW1lKTtcbiAgICAgIGNsZWFudXBQcm92aWRlcnMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjbGVhbnVwUHJvdmlkZXJzKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAoYXBwIGFzIEZpcmViYXNlQXBwSW1wbCkuY29udGFpbmVyXG4gICAgICAgIC5nZXRQcm92aWRlcnMoKVxuICAgICAgICAubWFwKHByb3ZpZGVyID0+IHByb3ZpZGVyLmRlbGV0ZSgpKVxuICAgICk7XG4gICAgKGFwcCBhcyBGaXJlYmFzZUFwcEltcGwpLmlzRGVsZXRlZCA9IHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBSZWdpc3RlcnMgYSBsaWJyYXJ5J3MgbmFtZSBhbmQgdmVyc2lvbiBmb3IgcGxhdGZvcm0gbG9nZ2luZyBwdXJwb3Nlcy5cbiAqIEBwYXJhbSBsaWJyYXJ5IC0gTmFtZSBvZiAxcCBvciAzcCBsaWJyYXJ5IChlLmcuIGZpcmVzdG9yZSwgYW5ndWxhcmZpcmUpXG4gKiBAcGFyYW0gdmVyc2lvbiAtIEN1cnJlbnQgdmVyc2lvbiBvZiB0aGF0IGxpYnJhcnkuXG4gKiBAcGFyYW0gdmFyaWFudCAtIEJ1bmRsZSB2YXJpYW50LCBlLmcuLCBub2RlLCBybiwgZXRjLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyVmVyc2lvbihcbiAgbGlicmFyeUtleU9yTmFtZTogc3RyaW5nLFxuICB2ZXJzaW9uOiBzdHJpbmcsXG4gIHZhcmlhbnQ/OiBzdHJpbmdcbik6IHZvaWQge1xuICAvLyBUT0RPOiBXZSBjYW4gdXNlIHRoaXMgY2hlY2sgdG8gd2hpdGVsaXN0IHN0cmluZ3Mgd2hlbi9pZiB3ZSBzZXQgdXBcbiAgLy8gYSBnb29kIHdoaXRlbGlzdCBzeXN0ZW0uXG4gIGxldCBsaWJyYXJ5ID0gUExBVEZPUk1fTE9HX1NUUklOR1tsaWJyYXJ5S2V5T3JOYW1lXSA/PyBsaWJyYXJ5S2V5T3JOYW1lO1xuICBpZiAodmFyaWFudCkge1xuICAgIGxpYnJhcnkgKz0gYC0ke3ZhcmlhbnR9YDtcbiAgfVxuICBjb25zdCBsaWJyYXJ5TWlzbWF0Y2ggPSBsaWJyYXJ5Lm1hdGNoKC9cXHN8XFwvLyk7XG4gIGNvbnN0IHZlcnNpb25NaXNtYXRjaCA9IHZlcnNpb24ubWF0Y2goL1xcc3xcXC8vKTtcbiAgaWYgKGxpYnJhcnlNaXNtYXRjaCB8fCB2ZXJzaW9uTWlzbWF0Y2gpIHtcbiAgICBjb25zdCB3YXJuaW5nID0gW1xuICAgICAgYFVuYWJsZSB0byByZWdpc3RlciBsaWJyYXJ5IFwiJHtsaWJyYXJ5fVwiIHdpdGggdmVyc2lvbiBcIiR7dmVyc2lvbn1cIjpgXG4gICAgXTtcbiAgICBpZiAobGlicmFyeU1pc21hdGNoKSB7XG4gICAgICB3YXJuaW5nLnB1c2goXG4gICAgICAgIGBsaWJyYXJ5IG5hbWUgXCIke2xpYnJhcnl9XCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFwiL1wiKWBcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2ggJiYgdmVyc2lvbk1pc21hdGNoKSB7XG4gICAgICB3YXJuaW5nLnB1c2goJ2FuZCcpO1xuICAgIH1cbiAgICBpZiAodmVyc2lvbk1pc21hdGNoKSB7XG4gICAgICB3YXJuaW5nLnB1c2goXG4gICAgICAgIGB2ZXJzaW9uIG5hbWUgXCIke3ZlcnNpb259XCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFwiL1wiKWBcbiAgICAgICk7XG4gICAgfVxuICAgIGxvZ2dlci53YXJuKHdhcm5pbmcuam9pbignICcpKTtcbiAgICByZXR1cm47XG4gIH1cbiAgX3JlZ2lzdGVyQ29tcG9uZW50KFxuICAgIG5ldyBDb21wb25lbnQoXG4gICAgICBgJHtsaWJyYXJ5fS12ZXJzaW9uYCBhcyBOYW1lLFxuICAgICAgKCkgPT4gKHsgbGlicmFyeSwgdmVyc2lvbiB9KSxcbiAgICAgIENvbXBvbmVudFR5cGUuVkVSU0lPTlxuICAgIClcbiAgKTtcbn1cblxuLyoqXG4gKiBTZXRzIGxvZyBoYW5kbGVyIGZvciBhbGwgRmlyZWJhc2UgU0RLcy5cbiAqIEBwYXJhbSBsb2dDYWxsYmFjayAtIEFuIG9wdGlvbmFsIGN1c3RvbSBsb2cgaGFuZGxlciB0aGF0IGV4ZWN1dGVzIHVzZXIgY29kZSB3aGVuZXZlclxuICogdGhlIEZpcmViYXNlIFNESyBtYWtlcyBhIGxvZ2dpbmcgY2FsbC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkxvZyhcbiAgbG9nQ2FsbGJhY2s6IExvZ0NhbGxiYWNrIHwgbnVsbCxcbiAgb3B0aW9ucz86IExvZ09wdGlvbnNcbik6IHZvaWQge1xuICBpZiAobG9nQ2FsbGJhY2sgIT09IG51bGwgJiYgdHlwZW9mIGxvZ0NhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoQXBwRXJyb3IuSU5WQUxJRF9MT0dfQVJHVU1FTlQpO1xuICB9XG4gIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBTZXRzIGxvZyBsZXZlbCBmb3IgYWxsIEZpcmViYXNlIFNES3MuXG4gKlxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIGFyZSBjYXB0dXJlZCAoaS5lLiBpZlxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBpbmZvYCwgZXJyb3JzIGFyZSBsb2dnZWQsIGJ1dCBgZGVidWdgIGFuZFxuICogYHZlcmJvc2VgIGxvZ3MgYXJlIG5vdCkuXG4gKlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9nTGV2ZWwobG9nTGV2ZWw6IExvZ0xldmVsU3RyaW5nKTogdm9pZCB7XG4gIHNldExvZ0xldmVsSW1wbChsb2dMZXZlbCk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IERCU2NoZW1hLCBvcGVuREIsIElEQlBEYXRhYmFzZSB9IGZyb20gJ2lkYic7XG5pbXBvcnQgeyBBcHBFcnJvciwgRVJST1JfRkFDVE9SWSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IEZpcmViYXNlQXBwIH0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgSGVhcnRiZWF0c0luSW5kZXhlZERCIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5cbmNvbnN0IERCX05BTUUgPSAnZmlyZWJhc2UtaGVhcnRiZWF0LWRhdGFiYXNlJztcbmNvbnN0IERCX1ZFUlNJT04gPSAxO1xuY29uc3QgU1RPUkVfTkFNRSA9ICdmaXJlYmFzZS1oZWFydGJlYXQtc3RvcmUnO1xuXG5pbnRlcmZhY2UgQXBwREIgZXh0ZW5kcyBEQlNjaGVtYSB7XG4gICdmaXJlYmFzZS1oZWFydGJlYXQtc3RvcmUnOiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgdmFsdWU6IEhlYXJ0YmVhdHNJbkluZGV4ZWREQjtcbiAgfTtcbn1cblxubGV0IGRiUHJvbWlzZTogUHJvbWlzZTxJREJQRGF0YWJhc2U8QXBwREI+PiB8IG51bGwgPSBudWxsO1xuZnVuY3Rpb24gZ2V0RGJQcm9taXNlKCk6IFByb21pc2U8SURCUERhdGFiYXNlPEFwcERCPj4ge1xuICBpZiAoIWRiUHJvbWlzZSkge1xuICAgIGRiUHJvbWlzZSA9IG9wZW5EQjxBcHBEQj4oREJfTkFNRSwgREJfVkVSU0lPTiwge1xuICAgICAgdXBncmFkZTogKGRiLCBvbGRWZXJzaW9uKSA9PiB7XG4gICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxuICAgICAgICAvLyBiZWhhdmlvciBpcyB3aGF0IHdlIHdhbnQsIGJlY2F1c2UgaWYgdGhlcmUgYXJlIG11bHRpcGxlIHZlcnNpb25zIGJldHdlZW5cbiAgICAgICAgLy8gdGhlIG9sZCB2ZXJzaW9uIGFuZCB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZSB3YW50IEFMTCB0aGUgbWlncmF0aW9uc1xuICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICAgICAgc3dpdGNoIChvbGRWZXJzaW9uKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZGIuY3JlYXRlT2JqZWN0U3RvcmUoU1RPUkVfTkFNRSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgIC8vIFNhZmFyaS9pT1MgYnJvd3NlcnMgdGhyb3cgb2NjYXNpb25hbCBleGNlcHRpb25zIG9uXG4gICAgICAgICAgICAgIC8vIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCkgdGhhdCBtYXkgYmUgYSBidWcuIEF2b2lkIGJsb2NraW5nXG4gICAgICAgICAgICAgIC8vIHRoZSByZXN0IG9mIHRoZSBhcHAgZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5JREJfT1BFTiwge1xuICAgICAgICBvcmlnaW5hbEVycm9yTWVzc2FnZTogZS5tZXNzYWdlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZGJQcm9taXNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCKFxuICBhcHA6IEZpcmViYXNlQXBwXG4pOiBQcm9taXNlPEhlYXJ0YmVhdHNJbkluZGV4ZWREQiB8IHVuZGVmaW5lZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihTVE9SRV9OQU1FKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0eC5vYmplY3RTdG9yZShTVE9SRV9OQU1FKS5nZXQoY29tcHV0ZUtleShhcHApKTtcbiAgICAvLyBXZSBhbHJlYWR5IGhhdmUgdGhlIHZhbHVlIGJ1dCB0eC5kb25lIGNhbiB0aHJvdyxcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGF3YWl0IGl0IGhlcmUgdG8gY2F0Y2ggZXJyb3JzXG4gICAgYXdhaXQgdHguZG9uZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUgaW5zdGFuY2VvZiBGaXJlYmFzZUVycm9yKSB7XG4gICAgICBsb2dnZXIud2FybihlLm1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZGJHZXRFcnJvciA9IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKEFwcEVycm9yLklEQl9HRVQsIHtcbiAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IChlIGFzIEVycm9yKT8ubWVzc2FnZVxuICAgICAgfSk7XG4gICAgICBsb2dnZXIud2FybihpZGJHZXRFcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKFxuICBhcHA6IEZpcmViYXNlQXBwLFxuICBoZWFydGJlYXRPYmplY3Q6IEhlYXJ0YmVhdHNJbkluZGV4ZWREQlxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFNUT1JFX05BTUUpO1xuICAgIGF3YWl0IG9iamVjdFN0b3JlLnB1dChoZWFydGJlYXRPYmplY3QsIGNvbXB1dGVLZXkoYXBwKSk7XG4gICAgYXdhaXQgdHguZG9uZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlIGluc3RhbmNlb2YgRmlyZWJhc2VFcnJvcikge1xuICAgICAgbG9nZ2VyLndhcm4oZS5tZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaWRiR2V0RXJyb3IgPSBFUlJPUl9GQUNUT1JZLmNyZWF0ZShBcHBFcnJvci5JREJfV1JJVEUsIHtcbiAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IChlIGFzIEVycm9yKT8ubWVzc2FnZVxuICAgICAgfSk7XG4gICAgICBsb2dnZXIud2FybihpZGJHZXRFcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZUtleShhcHA6IEZpcmViYXNlQXBwKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2FwcC5uYW1lfSEke2FwcC5vcHRpb25zLmFwcElkfWA7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50Q29udGFpbmVyIH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQge1xuICBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyxcbiAgaXNJbmRleGVkREJBdmFpbGFibGUsXG4gIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGVcbn0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHtcbiAgcmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCLFxuICB3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQlxufSBmcm9tICcuL2luZGV4ZWRkYic7XG5pbXBvcnQgeyBGaXJlYmFzZUFwcCB9IGZyb20gJy4vcHVibGljLXR5cGVzJztcbmltcG9ydCB7XG4gIEhlYXJ0YmVhdHNCeVVzZXJBZ2VudCxcbiAgSGVhcnRiZWF0U2VydmljZSxcbiAgSGVhcnRiZWF0c0luSW5kZXhlZERCLFxuICBIZWFydGJlYXRTdG9yYWdlLFxuICBTaW5nbGVEYXRlSGVhcnRiZWF0XG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuXG5jb25zdCBNQVhfSEVBREVSX0JZVEVTID0gMTAyNDtcbi8vIDMwIGRheXNcbmNvbnN0IFNUT1JFRF9IRUFSVEJFQVRfUkVURU5USU9OX01BWF9NSUxMSVMgPSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbmV4cG9ydCBjbGFzcyBIZWFydGJlYXRTZXJ2aWNlSW1wbCBpbXBsZW1lbnRzIEhlYXJ0YmVhdFNlcnZpY2Uge1xuICAvKipcbiAgICogVGhlIHBlcnNpc3RlbmNlIGxheWVyIGZvciBoZWFydGJlYXRzXG4gICAqIExlYXZlIHB1YmxpYyBmb3IgZWFzaWVyIHRlc3RpbmcuXG4gICAqL1xuICBfc3RvcmFnZTogSGVhcnRiZWF0U3RvcmFnZUltcGw7XG5cbiAgLyoqXG4gICAqIEluLW1lbW9yeSBjYWNoZSBmb3IgaGVhcnRiZWF0cywgdXNlZCBieSBnZXRIZWFydGJlYXRzSGVhZGVyKCkgdG8gZ2VuZXJhdGVcbiAgICogdGhlIGhlYWRlciBzdHJpbmcuXG4gICAqIFN0b3JlcyBvbmUgcmVjb3JkIHBlciBkYXRlLiBUaGlzIHdpbGwgYmUgY29uc29saWRhdGVkIGludG8gdGhlIHN0YW5kYXJkXG4gICAqIGZvcm1hdCBvZiBvbmUgcmVjb3JkIHBlciB1c2VyIGFnZW50IHN0cmluZyBiZWZvcmUgYmVpbmcgc2VudCBhcyBhIGhlYWRlci5cbiAgICogUG9wdWxhdGVkIGZyb20gaW5kZXhlZERCIHdoZW4gdGhlIGNvbnRyb2xsZXIgaXMgaW5zdGFudGlhdGVkIGFuZCBzaG91bGRcbiAgICogYmUga2VwdCBpbiBzeW5jIHdpdGggaW5kZXhlZERCLlxuICAgKiBMZWF2ZSBwdWJsaWMgZm9yIGVhc2llciB0ZXN0aW5nLlxuICAgKi9cbiAgX2hlYXJ0YmVhdHNDYWNoZTogSGVhcnRiZWF0c0luSW5kZXhlZERCIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqXG4gICAqIHRoZSBpbml0aWFsaXphdGlvbiBwcm9taXNlIGZvciBwb3B1bGF0aW5nIGhlYXJ0YmVhdENhY2hlLlxuICAgKiBJZiBnZXRIZWFydGJlYXRzSGVhZGVyKCkgaXMgY2FsbGVkIGJlZm9yZSB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgKiAoaGVhcnRiZWF0c0NhY2hlID09IG51bGwpLCBpdCBzaG91bGQgd2FpdCBmb3IgdGhpcyBwcm9taXNlXG4gICAqIExlYXZlIHB1YmxpYyBmb3IgZWFzaWVyIHRlc3RpbmcuXG4gICAqL1xuICBfaGVhcnRiZWF0c0NhY2hlUHJvbWlzZTogUHJvbWlzZTxIZWFydGJlYXRzSW5JbmRleGVkREI+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29tcG9uZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3QgYXBwID0gdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xuICAgIHRoaXMuX3N0b3JhZ2UgPSBuZXcgSGVhcnRiZWF0U3RvcmFnZUltcGwoYXBwKTtcbiAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlID0gdGhpcy5fc3RvcmFnZS5yZWFkKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlID0gcmVzdWx0O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgdG8gcmVwb3J0IGEgaGVhcnRiZWF0LiBUaGUgZnVuY3Rpb24gd2lsbCBnZW5lcmF0ZVxuICAgKiBhIEhlYXJ0YmVhdHNCeVVzZXJBZ2VudCBvYmplY3QsIHVwZGF0ZSBoZWFydGJlYXRzQ2FjaGUsIGFuZCBwZXJzaXN0IGl0XG4gICAqIHRvIEluZGV4ZWREQi5cbiAgICogTm90ZSB0aGF0IHdlIG9ubHkgc3RvcmUgb25lIGhlYXJ0YmVhdCBwZXIgZGF5LiBTbyBpZiBhIGhlYXJ0YmVhdCBmb3IgdG9kYXkgaXNcbiAgICogYWxyZWFkeSBsb2dnZWQsIHN1YnNlcXVlbnQgY2FsbHMgdG8gdGhpcyBmdW5jdGlvbiBpbiB0aGUgc2FtZSBkYXkgd2lsbCBiZSBpZ25vcmVkLlxuICAgKi9cbiAgYXN5bmMgdHJpZ2dlckhlYXJ0YmVhdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGxhdGZvcm1Mb2dnZXIgPSB0aGlzLmNvbnRhaW5lclxuICAgICAgICAuZ2V0UHJvdmlkZXIoJ3BsYXRmb3JtLWxvZ2dlcicpXG4gICAgICAgIC5nZXRJbW1lZGlhdGUoKTtcblxuICAgICAgLy8gVGhpcyBpcyB0aGUgXCJGaXJlYmFzZSB1c2VyIGFnZW50XCIgc3RyaW5nIGZyb20gdGhlIHBsYXRmb3JtIGxvZ2dlclxuICAgICAgLy8gc2VydmljZSwgbm90IHRoZSBicm93c2VyIHVzZXIgYWdlbnQuXG4gICAgICBjb25zdCBhZ2VudCA9IHBsYXRmb3JtTG9nZ2VyLmdldFBsYXRmb3JtSW5mb1N0cmluZygpO1xuICAgICAgY29uc3QgZGF0ZSA9IGdldFVUQ0RhdGVTdHJpbmcoKTtcbiAgICAgIGlmICh0aGlzLl9oZWFydGJlYXRzQ2FjaGU/LmhlYXJ0YmVhdHMgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPSBhd2FpdCB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlO1xuICAgICAgICAvLyBJZiB3ZSBmYWlsZWQgdG8gY29uc3RydWN0IGEgaGVhcnRiZWF0cyBjYWNoZSwgdGhlbiByZXR1cm4gaW1tZWRpYXRlbHkuXG4gICAgICAgIGlmICh0aGlzLl9oZWFydGJlYXRzQ2FjaGU/LmhlYXJ0YmVhdHMgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRG8gbm90IHN0b3JlIGEgaGVhcnRiZWF0IGlmIG9uZSBpcyBhbHJlYWR5IHN0b3JlZCBmb3IgdGhpcyBkYXlcbiAgICAgIC8vIG9yIGlmIGEgaGVhZGVyIGhhcyBhbHJlYWR5IGJlZW4gc2VudCB0b2RheS5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmxhc3RTZW50SGVhcnRiZWF0RGF0ZSA9PT0gZGF0ZSB8fFxuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5zb21lKFxuICAgICAgICAgIHNpbmdsZURhdGVIZWFydGJlYXQgPT4gc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlID09PSBkYXRlXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGVyZSBpcyBubyBlbnRyeSBmb3IgdGhpcyBkYXRlLiBDcmVhdGUgb25lLlxuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5wdXNoKHsgZGF0ZSwgYWdlbnQgfSk7XG4gICAgICB9XG4gICAgICAvLyBSZW1vdmUgZW50cmllcyBvbGRlciB0aGFuIDMwIGRheXMuXG4gICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cyA9XG4gICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzLmZpbHRlcihzaW5nbGVEYXRlSGVhcnRiZWF0ID0+IHtcbiAgICAgICAgICBjb25zdCBoYlRpbWVzdGFtcCA9IG5ldyBEYXRlKHNpbmdsZURhdGVIZWFydGJlYXQuZGF0ZSkudmFsdWVPZigpO1xuICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgcmV0dXJuIG5vdyAtIGhiVGltZXN0YW1wIDw9IFNUT1JFRF9IRUFSVEJFQVRfUkVURU5USU9OX01BWF9NSUxMSVM7XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2Uub3ZlcndyaXRlKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nZ2VyLndhcm4oZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgd2hpY2ggY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBoZWFydGJlYXQtc3BlY2lmaWMgaGVhZGVyIGRpcmVjdGx5LlxuICAgKiBJdCBhbHNvIGNsZWFycyBhbGwgaGVhcnRiZWF0cyBmcm9tIG1lbW9yeSBhcyB3ZWxsIGFzIGluIEluZGV4ZWREQi5cbiAgICpcbiAgICogTk9URTogQ29uc3VtaW5nIHByb2R1Y3QgU0RLcyBzaG91bGQgbm90IHNlbmQgdGhlIGhlYWRlciBpZiB0aGlzIG1ldGhvZFxuICAgKiByZXR1cm5zIGFuIGVtcHR5IHN0cmluZy5cbiAgICovXG4gIGFzeW5jIGdldEhlYXJ0YmVhdHNIZWFkZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9PT0gbnVsbCkge1xuICAgICAgICBhd2FpdCB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlO1xuICAgICAgfVxuICAgICAgLy8gSWYgaXQncyBzdGlsbCBudWxsIG9yIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlcmUgaXMgbm8gZGF0YSB0byBzZW5kLlxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGU/LmhlYXJ0YmVhdHMgPT0gbnVsbCB8fFxuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlID0gZ2V0VVRDRGF0ZVN0cmluZygpO1xuICAgICAgLy8gRXh0cmFjdCBhcyBtYW55IGhlYXJ0YmVhdHMgZnJvbSB0aGUgY2FjaGUgYXMgd2lsbCBmaXQgdW5kZXIgdGhlIHNpemUgbGltaXQuXG4gICAgICBjb25zdCB7IGhlYXJ0YmVhdHNUb1NlbmQsIHVuc2VudEVudHJpZXMgfSA9IGV4dHJhY3RIZWFydGJlYXRzRm9ySGVhZGVyKFxuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0c1xuICAgICAgKTtcbiAgICAgIGNvbnN0IGhlYWRlclN0cmluZyA9IGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKFxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHZlcnNpb246IDIsIGhlYXJ0YmVhdHM6IGhlYXJ0YmVhdHNUb1NlbmQgfSlcbiAgICAgICk7XG4gICAgICAvLyBTdG9yZSBsYXN0IHNlbnQgZGF0ZSB0byBwcmV2ZW50IGFub3RoZXIgYmVpbmcgbG9nZ2VkL3NlbnQgZm9yIHRoZSBzYW1lIGRheS5cbiAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5sYXN0U2VudEhlYXJ0YmVhdERhdGUgPSBkYXRlO1xuICAgICAgaWYgKHVuc2VudEVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBTdG9yZSBhbnkgdW5zZW50IGVudHJpZXMgaWYgdGhleSBleGlzdC5cbiAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSB1bnNlbnRFbnRyaWVzO1xuICAgICAgICAvLyBUaGlzIHNlZW1zIG1vcmUgbGlrZWx5IHRoYW4gZW1wdHlpbmcgdGhlIGFycmF5IChiZWxvdykgdG8gbGVhZCB0byBzb21lIG9kZCBzdGF0ZVxuICAgICAgICAvLyBzaW5jZSB0aGUgY2FjaGUgaXNuJ3QgZW1wdHkgYW5kIHRoaXMgd2lsbCBiZSBjYWxsZWQgYWdhaW4gb24gdGhlIG5leHQgcmVxdWVzdCxcbiAgICAgICAgLy8gYW5kIGlzIHByb2JhYmx5IHNhZmVzdCBpZiB3ZSBhd2FpdCBpdC5cbiAgICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZS5vdmVyd3JpdGUodGhpcy5faGVhcnRiZWF0c0NhY2hlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzID0gW107XG4gICAgICAgIC8vIERvIG5vdCB3YWl0IGZvciB0aGlzLCB0byByZWR1Y2UgbGF0ZW5jeS5cbiAgICAgICAgdm9pZCB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhlYWRlclN0cmluZztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dnZXIud2FybihlKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VVRDRGF0ZVN0cmluZygpOiBzdHJpbmcge1xuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIC8vIFJldHVybnMgZGF0ZSBmb3JtYXQgJ1lZWVktTU0tREQnXG4gIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SGVhcnRiZWF0c0ZvckhlYWRlcihcbiAgaGVhcnRiZWF0c0NhY2hlOiBTaW5nbGVEYXRlSGVhcnRiZWF0W10sXG4gIG1heFNpemUgPSBNQVhfSEVBREVSX0JZVEVTXG4pOiB7XG4gIGhlYXJ0YmVhdHNUb1NlbmQ6IEhlYXJ0YmVhdHNCeVVzZXJBZ2VudFtdO1xuICB1bnNlbnRFbnRyaWVzOiBTaW5nbGVEYXRlSGVhcnRiZWF0W107XG59IHtcbiAgLy8gSGVhcnRiZWF0cyBncm91cGVkIGJ5IHVzZXIgYWdlbnQgaW4gdGhlIHN0YW5kYXJkIGZvcm1hdCB0byBiZSBzZW50IGluXG4gIC8vIHRoZSBoZWFkZXIuXG4gIGNvbnN0IGhlYXJ0YmVhdHNUb1NlbmQ6IEhlYXJ0YmVhdHNCeVVzZXJBZ2VudFtdID0gW107XG4gIC8vIFNpbmdsZSBkYXRlIGZvcm1hdCBoZWFydGJlYXRzIHRoYXQgYXJlIG5vdCBzZW50LlxuICBsZXQgdW5zZW50RW50cmllcyA9IGhlYXJ0YmVhdHNDYWNoZS5zbGljZSgpO1xuICBmb3IgKGNvbnN0IHNpbmdsZURhdGVIZWFydGJlYXQgb2YgaGVhcnRiZWF0c0NhY2hlKSB7XG4gICAgLy8gTG9vayBmb3IgYW4gZXhpc3RpbmcgZW50cnkgd2l0aCB0aGUgc2FtZSB1c2VyIGFnZW50LlxuICAgIGNvbnN0IGhlYXJ0YmVhdEVudHJ5ID0gaGVhcnRiZWF0c1RvU2VuZC5maW5kKFxuICAgICAgaGIgPT4gaGIuYWdlbnQgPT09IHNpbmdsZURhdGVIZWFydGJlYXQuYWdlbnRcbiAgICApO1xuICAgIGlmICghaGVhcnRiZWF0RW50cnkpIHtcbiAgICAgIC8vIElmIG5vIGVudHJ5IGZvciB0aGlzIHVzZXIgYWdlbnQgZXhpc3RzLCBjcmVhdGUgb25lLlxuICAgICAgaGVhcnRiZWF0c1RvU2VuZC5wdXNoKHtcbiAgICAgICAgYWdlbnQ6IHNpbmdsZURhdGVIZWFydGJlYXQuYWdlbnQsXG4gICAgICAgIGRhdGVzOiBbc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlXVxuICAgICAgfSk7XG4gICAgICBpZiAoY291bnRCeXRlcyhoZWFydGJlYXRzVG9TZW5kKSA+IG1heFNpemUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGhlYWRlciB3b3VsZCBleGNlZWQgbWF4IHNpemUsIHJlbW92ZSB0aGUgYWRkZWQgaGVhcnRiZWF0XG4gICAgICAgIC8vIGVudHJ5IGFuZCBzdG9wIGFkZGluZyB0byB0aGUgaGVhZGVyLlxuICAgICAgICBoZWFydGJlYXRzVG9TZW5kLnBvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaGVhcnRiZWF0RW50cnkuZGF0ZXMucHVzaChzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGUpO1xuICAgICAgLy8gSWYgdGhlIGhlYWRlciB3b3VsZCBleGNlZWQgbWF4IHNpemUsIHJlbW92ZSB0aGUgYWRkZWQgZGF0ZVxuICAgICAgLy8gYW5kIHN0b3AgYWRkaW5nIHRvIHRoZSBoZWFkZXIuXG4gICAgICBpZiAoY291bnRCeXRlcyhoZWFydGJlYXRzVG9TZW5kKSA+IG1heFNpemUpIHtcbiAgICAgICAgaGVhcnRiZWF0RW50cnkuZGF0ZXMucG9wKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBQb3AgdW5zZW50IGVudHJ5IGZyb20gcXVldWUuIChTa2lwcGVkIGlmIGFkZGluZyB0aGUgZW50cnkgZXhjZWVkZWRcbiAgICAvLyBxdW90YSBhbmQgdGhlIGxvb3AgYnJlYWtzIGVhcmx5LilcbiAgICB1bnNlbnRFbnRyaWVzID0gdW5zZW50RW50cmllcy5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlYXJ0YmVhdHNUb1NlbmQsXG4gICAgdW5zZW50RW50cmllc1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgSGVhcnRiZWF0U3RvcmFnZUltcGwgaW1wbGVtZW50cyBIZWFydGJlYXRTdG9yYWdlIHtcbiAgcHJpdmF0ZSBfY2FuVXNlSW5kZXhlZERCUHJvbWlzZTogUHJvbWlzZTxib29sZWFuPjtcbiAgY29uc3RydWN0b3IocHVibGljIGFwcDogRmlyZWJhc2VBcHApIHtcbiAgICB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlID0gdGhpcy5ydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrKCk7XG4gIH1cbiAgYXN5bmMgcnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjaygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzSW5kZXhlZERCQXZhaWxhYmxlKCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKVxuICAgICAgICAudGhlbigoKSA9PiB0cnVlKVxuICAgICAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZCBhbGwgaGVhcnRiZWF0cy5cbiAgICovXG4gIGFzeW5jIHJlYWQoKTogUHJvbWlzZTxIZWFydGJlYXRzSW5JbmRleGVkREI+IHtcbiAgICBjb25zdCBjYW5Vc2VJbmRleGVkREIgPSBhd2FpdCB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlO1xuICAgIGlmICghY2FuVXNlSW5kZXhlZERCKSB7XG4gICAgICByZXR1cm4geyBoZWFydGJlYXRzOiBbXSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpZGJIZWFydGJlYXRPYmplY3QgPSBhd2FpdCByZWFkSGVhcnRiZWF0c0Zyb21JbmRleGVkREIodGhpcy5hcHApO1xuICAgICAgaWYgKGlkYkhlYXJ0YmVhdE9iamVjdD8uaGVhcnRiZWF0cykge1xuICAgICAgICByZXR1cm4gaWRiSGVhcnRiZWF0T2JqZWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgaGVhcnRiZWF0czogW10gfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gb3ZlcndyaXRlIHRoZSBzdG9yYWdlIHdpdGggdGhlIHByb3ZpZGVkIGhlYXJ0YmVhdHNcbiAgYXN5bmMgb3ZlcndyaXRlKGhlYXJ0YmVhdHNPYmplY3Q6IEhlYXJ0YmVhdHNJbkluZGV4ZWREQik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNhblVzZUluZGV4ZWREQiA9IGF3YWl0IHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2U7XG4gICAgaWYgKCFjYW5Vc2VJbmRleGVkREIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0ID0gYXdhaXQgdGhpcy5yZWFkKCk7XG4gICAgICByZXR1cm4gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIodGhpcy5hcHAsIHtcbiAgICAgICAgbGFzdFNlbnRIZWFydGJlYXREYXRlOlxuICAgICAgICAgIGhlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlID8/XG4gICAgICAgICAgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSxcbiAgICAgICAgaGVhcnRiZWF0czogaGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gYWRkIGhlYXJ0YmVhdHNcbiAgYXN5bmMgYWRkKGhlYXJ0YmVhdHNPYmplY3Q6IEhlYXJ0YmVhdHNJbkluZGV4ZWREQik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNhblVzZUluZGV4ZWREQiA9IGF3YWl0IHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2U7XG4gICAgaWYgKCFjYW5Vc2VJbmRleGVkREIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0ID0gYXdhaXQgdGhpcy5yZWFkKCk7XG4gICAgICByZXR1cm4gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIodGhpcy5hcHAsIHtcbiAgICAgICAgbGFzdFNlbnRIZWFydGJlYXREYXRlOlxuICAgICAgICAgIGhlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlID8/XG4gICAgICAgICAgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSxcbiAgICAgICAgaGVhcnRiZWF0czogW1xuICAgICAgICAgIC4uLmV4aXN0aW5nSGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzLFxuICAgICAgICAgIC4uLmhlYXJ0YmVhdHNPYmplY3QuaGVhcnRiZWF0c1xuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgYnl0ZXMgb2YgYSBIZWFydGJlYXRzQnlVc2VyQWdlbnQgYXJyYXkgYWZ0ZXIgYmVpbmcgd3JhcHBlZFxuICogaW4gYSBwbGF0Zm9ybSBsb2dnaW5nIGhlYWRlciBKU09OIG9iamVjdCwgc3RyaW5naWZpZWQsIGFuZCBjb252ZXJ0ZWRcbiAqIHRvIGJhc2UgNjQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3VudEJ5dGVzKGhlYXJ0YmVhdHNDYWNoZTogSGVhcnRiZWF0c0J5VXNlckFnZW50W10pOiBudW1iZXIge1xuICAvLyBiYXNlNjQgaGFzIGEgcmVzdHJpY3RlZCBzZXQgb2YgY2hhcmFjdGVycywgYWxsIG9mIHdoaWNoIHNob3VsZCBiZSAxIGJ5dGUuXG4gIHJldHVybiBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhcbiAgICAvLyBoZWFydGJlYXRzQ2FjaGUgd3JhcHBlciBwcm9wZXJ0aWVzXG4gICAgSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiAyLCBoZWFydGJlYXRzOiBoZWFydGJlYXRzQ2FjaGUgfSlcbiAgKS5sZW5ndGg7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRUeXBlIH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsIH0gZnJvbSAnLi9wbGF0Zm9ybUxvZ2dlclNlcnZpY2UnO1xuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBfcmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ludGVybmFsJztcbmltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IEhlYXJ0YmVhdFNlcnZpY2VJbXBsIH0gZnJvbSAnLi9oZWFydGJlYXRTZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ29yZUNvbXBvbmVudHModmFyaWFudD86IHN0cmluZyk6IHZvaWQge1xuICBfcmVnaXN0ZXJDb21wb25lbnQoXG4gICAgbmV3IENvbXBvbmVudChcbiAgICAgICdwbGF0Zm9ybS1sb2dnZXInLFxuICAgICAgY29udGFpbmVyID0+IG5ldyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsKGNvbnRhaW5lciksXG4gICAgICBDb21wb25lbnRUeXBlLlBSSVZBVEVcbiAgICApXG4gICk7XG4gIF9yZWdpc3RlckNvbXBvbmVudChcbiAgICBuZXcgQ29tcG9uZW50KFxuICAgICAgJ2hlYXJ0YmVhdCcsXG4gICAgICBjb250YWluZXIgPT4gbmV3IEhlYXJ0YmVhdFNlcnZpY2VJbXBsKGNvbnRhaW5lciksXG4gICAgICBDb21wb25lbnRUeXBlLlBSSVZBVEVcbiAgICApXG4gICk7XG5cbiAgLy8gUmVnaXN0ZXIgYGFwcGAgcGFja2FnZS5cbiAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sIHZhcmlhbnQpO1xuICAvLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc201LCBlc20yMDE3LCBjanM1LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxuICByZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ19fQlVJTERfVEFSR0VUX18nKTtcbiAgLy8gUmVnaXN0ZXIgcGxhdGZvcm0gU0RLIGlkZW50aWZpZXIgKG5vIHZlcnNpb24pLlxuICByZWdpc3RlclZlcnNpb24oJ2ZpcmUtanMnLCAnJyk7XG59XG4iLCAiLyoqXG4gKiBGaXJlYmFzZSBBcHBcbiAqXG4gKiBAcmVtYXJrcyBUaGlzIHBhY2thZ2UgY29vcmRpbmF0ZXMgdGhlIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgZGlmZmVyZW50IEZpcmViYXNlIGNvbXBvbmVudHNcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHJlZ2lzdGVyQ29yZUNvbXBvbmVudHMgfSBmcm9tICcuL3JlZ2lzdGVyQ29yZUNvbXBvbmVudHMnO1xuXG5leHBvcnQgKiBmcm9tICcuL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVybmFsJztcbmV4cG9ydCAqIGZyb20gJy4vcHVibGljLXR5cGVzJztcblxucmVnaXN0ZXJDb3JlQ29tcG9uZW50cygnX19SVU5USU1FX0VOVl9fJyk7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgbmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5cbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnYXBwJyk7XG5leHBvcnQgKiBmcm9tICdAZmlyZWJhc2UvYXBwJztcbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENvbnN0YW50cyB1c2VkIGluIHRoZSBGaXJlYmFzZSBTdG9yYWdlIGxpYnJhcnkuXG4gKi9cblxuLyoqXG4gKiBEb21haW4gbmFtZSBmb3IgZmlyZWJhc2Ugc3RvcmFnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSE9TVCA9ICdmaXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20nO1xuXG4vKipcbiAqIFRoZSBrZXkgaW4gRmlyZWJhc2UgY29uZmlnIGpzb24gZm9yIHRoZSBzdG9yYWdlIGJ1Y2tldC5cbiAqL1xuZXhwb3J0IGNvbnN0IENPTkZJR19TVE9SQUdFX0JVQ0tFVF9LRVkgPSAnc3RvcmFnZUJ1Y2tldCc7XG5cbi8qKlxuICogMiBtaW51dGVzXG4gKlxuICogVGhlIHRpbWVvdXQgZm9yIGFsbCBvcGVyYXRpb25zIGV4Y2VwdCB1cGxvYWQuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BWF9PUEVSQVRJT05fUkVUUllfVElNRSA9IDIgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogMTAgbWludXRlc1xuICpcbiAqIFRoZSB0aW1lb3V0IGZvciB1cGxvYWQuXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BWF9VUExPQURfUkVUUllfVElNRSA9IDEwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX01JTl9TTEVFUF9USU1FX01JTExJUyA9IDEwMDA7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgdmFsdWUgb2YgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsIHdoaWNoIGlzIG5vdCB3ZWxsIHN1cHBvcnRlZFxuICogZW5vdWdoIGZvciB1cyB0byB1c2UgaXQgZGlyZWN0bHkuXG4gKi9cbmV4cG9ydCBjb25zdCBNSU5fU0FGRV9JTlRFR0VSID0gLTkwMDcxOTkyNTQ3NDA5OTE7XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuaW1wb3J0IHsgQ09ORklHX1NUT1JBR0VfQlVDS0VUX0tFWSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBBbiBlcnJvciByZXR1cm5lZCBieSB0aGUgRmlyZWJhc2UgU3RvcmFnZSBTREsuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlRXJyb3IgZXh0ZW5kcyBGaXJlYmFzZUVycm9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfYmFzZU1lc3NhZ2U6IHN0cmluZztcbiAgLyoqXG4gICAqIFN0b3JlcyBjdXN0b20gZXJyb3IgZGF0YSB1bmlxdWUgdG8gdGhlIGBTdG9yYWdlRXJyb3JgLlxuICAgKi9cbiAgY3VzdG9tRGF0YTogeyBzZXJ2ZXJSZXNwb25zZTogc3RyaW5nIHwgbnVsbCB9ID0geyBzZXJ2ZXJSZXNwb25zZTogbnVsbCB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gY29kZSAtIEEgYFN0b3JhZ2VFcnJvckNvZGVgIHN0cmluZyB0byBiZSBwcmVmaXhlZCB3aXRoICdzdG9yYWdlLycgYW5kXG4gICAqICBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBtZXNzYWdlLlxuICAgKiBAcGFyYW0gbWVzc2FnZSAgLSBFcnJvciBtZXNzYWdlLlxuICAgKiBAcGFyYW0gc3RhdHVzXyAtIENvcnJlc3BvbmRpbmcgSFRUUCBTdGF0dXMgQ29kZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29kZTogU3RvcmFnZUVycm9yQ29kZSwgbWVzc2FnZTogc3RyaW5nLCBwcml2YXRlIHN0YXR1c18gPSAwKSB7XG4gICAgc3VwZXIoXG4gICAgICBwcmVwZW5kQ29kZShjb2RlKSxcbiAgICAgIGBGaXJlYmFzZSBTdG9yYWdlOiAke21lc3NhZ2V9ICgke3ByZXBlbmRDb2RlKGNvZGUpfSlgXG4gICAgKTtcbiAgICB0aGlzLl9iYXNlTWVzc2FnZSA9IHRoaXMubWVzc2FnZTtcbiAgICAvLyBXaXRob3V0IHRoaXMsIGBpbnN0YW5jZW9mIFN0b3JhZ2VFcnJvcmAsIGluIHRlc3RzIGZvciBleGFtcGxlLFxuICAgIC8vIHJldHVybnMgZmFsc2UuXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIFN0b3JhZ2VFcnJvci5wcm90b3R5cGUpO1xuICB9XG5cbiAgZ2V0IHN0YXR1cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0YXR1c187XG4gIH1cblxuICBzZXQgc3RhdHVzKHN0YXR1czogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0dXNfID0gc3RhdHVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBhcmVzIGEgYFN0b3JhZ2VFcnJvckNvZGVgIGFnYWluc3QgdGhpcyBlcnJvcidzIGNvZGUsIGZpbHRlcmluZyBvdXQgdGhlIHByZWZpeC5cbiAgICovXG4gIF9jb2RlRXF1YWxzKGNvZGU6IFN0b3JhZ2VFcnJvckNvZGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJlcGVuZENvZGUoY29kZSkgPT09IHRoaXMuY29kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCByZXNwb25zZSBtZXNzYWdlIHRoYXQgd2FzIGFkZGVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBnZXQgc2VydmVyUmVzcG9uc2UoKTogbnVsbCB8IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tRGF0YS5zZXJ2ZXJSZXNwb25zZTtcbiAgfVxuXG4gIHNldCBzZXJ2ZXJSZXNwb25zZShzZXJ2ZXJSZXNwb25zZTogc3RyaW5nIHwgbnVsbCkge1xuICAgIHRoaXMuY3VzdG9tRGF0YS5zZXJ2ZXJSZXNwb25zZSA9IHNlcnZlclJlc3BvbnNlO1xuICAgIGlmICh0aGlzLmN1c3RvbURhdGEuc2VydmVyUmVzcG9uc2UpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IGAke3RoaXMuX2Jhc2VNZXNzYWdlfVxcbiR7dGhpcy5jdXN0b21EYXRhLnNlcnZlclJlc3BvbnNlfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuX2Jhc2VNZXNzYWdlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXJyb3JzID0ge307XG5cbi8qKlxuICogQHB1YmxpY1xuICogRXJyb3IgY29kZXMgdGhhdCBjYW4gYmUgYXR0YWNoZWQgdG8gYFN0b3JhZ2VFcnJvcmAgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGVudW0gU3RvcmFnZUVycm9yQ29kZSB7XG4gIC8vIFNoYXJlZCBiZXR3ZWVuIGFsbCBwbGF0Zm9ybXNcbiAgVU5LTk9XTiA9ICd1bmtub3duJyxcbiAgT0JKRUNUX05PVF9GT1VORCA9ICdvYmplY3Qtbm90LWZvdW5kJyxcbiAgQlVDS0VUX05PVF9GT1VORCA9ICdidWNrZXQtbm90LWZvdW5kJyxcbiAgUFJPSkVDVF9OT1RfRk9VTkQgPSAncHJvamVjdC1ub3QtZm91bmQnLFxuICBRVU9UQV9FWENFRURFRCA9ICdxdW90YS1leGNlZWRlZCcsXG4gIFVOQVVUSEVOVElDQVRFRCA9ICd1bmF1dGhlbnRpY2F0ZWQnLFxuICBVTkFVVEhPUklaRUQgPSAndW5hdXRob3JpemVkJyxcbiAgVU5BVVRIT1JJWkVEX0FQUCA9ICd1bmF1dGhvcml6ZWQtYXBwJyxcbiAgUkVUUllfTElNSVRfRVhDRUVERUQgPSAncmV0cnktbGltaXQtZXhjZWVkZWQnLFxuICBJTlZBTElEX0NIRUNLU1VNID0gJ2ludmFsaWQtY2hlY2tzdW0nLFxuICBDQU5DRUxFRCA9ICdjYW5jZWxlZCcsXG4gIC8vIEpTIHNwZWNpZmljXG4gIElOVkFMSURfRVZFTlRfTkFNRSA9ICdpbnZhbGlkLWV2ZW50LW5hbWUnLFxuICBJTlZBTElEX1VSTCA9ICdpbnZhbGlkLXVybCcsXG4gIElOVkFMSURfREVGQVVMVF9CVUNLRVQgPSAnaW52YWxpZC1kZWZhdWx0LWJ1Y2tldCcsXG4gIE5PX0RFRkFVTFRfQlVDS0VUID0gJ25vLWRlZmF1bHQtYnVja2V0JyxcbiAgQ0FOTk9UX1NMSUNFX0JMT0IgPSAnY2Fubm90LXNsaWNlLWJsb2InLFxuICBTRVJWRVJfRklMRV9XUk9OR19TSVpFID0gJ3NlcnZlci1maWxlLXdyb25nLXNpemUnLFxuICBOT19ET1dOTE9BRF9VUkwgPSAnbm8tZG93bmxvYWQtdXJsJyxcbiAgSU5WQUxJRF9BUkdVTUVOVCA9ICdpbnZhbGlkLWFyZ3VtZW50JyxcbiAgSU5WQUxJRF9BUkdVTUVOVF9DT1VOVCA9ICdpbnZhbGlkLWFyZ3VtZW50LWNvdW50JyxcbiAgQVBQX0RFTEVURUQgPSAnYXBwLWRlbGV0ZWQnLFxuICBJTlZBTElEX1JPT1RfT1BFUkFUSU9OID0gJ2ludmFsaWQtcm9vdC1vcGVyYXRpb24nLFxuICBJTlZBTElEX0ZPUk1BVCA9ICdpbnZhbGlkLWZvcm1hdCcsXG4gIElOVEVSTkFMX0VSUk9SID0gJ2ludGVybmFsLWVycm9yJyxcbiAgVU5TVVBQT1JURURfRU5WSVJPTk1FTlQgPSAndW5zdXBwb3J0ZWQtZW52aXJvbm1lbnQnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwZW5kQ29kZShjb2RlOiBTdG9yYWdlRXJyb3JDb2RlKTogc3RyaW5nIHtcbiAgcmV0dXJuICdzdG9yYWdlLycgKyBjb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5rbm93bigpOiBTdG9yYWdlRXJyb3Ige1xuICBjb25zdCBtZXNzYWdlID1cbiAgICAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCwgcGxlYXNlIGNoZWNrIHRoZSBlcnJvciBwYXlsb2FkIGZvciAnICtcbiAgICAnc2VydmVyIHJlc3BvbnNlLic7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuVU5LTk9XTiwgbWVzc2FnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3ROb3RGb3VuZChwYXRoOiBzdHJpbmcpOiBTdG9yYWdlRXJyb3Ige1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcbiAgICBTdG9yYWdlRXJyb3JDb2RlLk9CSkVDVF9OT1RfRk9VTkQsXG4gICAgXCJPYmplY3QgJ1wiICsgcGF0aCArIFwiJyBkb2VzIG5vdCBleGlzdC5cIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVja2V0Tm90Rm91bmQoYnVja2V0OiBzdHJpbmcpOiBTdG9yYWdlRXJyb3Ige1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcbiAgICBTdG9yYWdlRXJyb3JDb2RlLkJVQ0tFVF9OT1RfRk9VTkQsXG4gICAgXCJCdWNrZXQgJ1wiICsgYnVja2V0ICsgXCInIGRvZXMgbm90IGV4aXN0LlwiXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0Tm90Rm91bmQocHJvamVjdDogc3RyaW5nKTogU3RvcmFnZUVycm9yIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXG4gICAgU3RvcmFnZUVycm9yQ29kZS5QUk9KRUNUX05PVF9GT1VORCxcbiAgICBcIlByb2plY3QgJ1wiICsgcHJvamVjdCArIFwiJyBkb2VzIG5vdCBleGlzdC5cIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVvdGFFeGNlZWRlZChidWNrZXQ6IHN0cmluZyk6IFN0b3JhZ2VFcnJvciB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFxuICAgIFN0b3JhZ2VFcnJvckNvZGUuUVVPVEFfRVhDRUVERUQsXG4gICAgXCJRdW90YSBmb3IgYnVja2V0ICdcIiArXG4gICAgICBidWNrZXQgK1xuICAgICAgXCInIGV4Y2VlZGVkLCBwbGVhc2UgdmlldyBxdW90YSBvbiBcIiArXG4gICAgICAnaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL3ByaWNpbmcvLidcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuYXV0aGVudGljYXRlZCgpOiBTdG9yYWdlRXJyb3Ige1xuICBjb25zdCBtZXNzYWdlID1cbiAgICAnVXNlciBpcyBub3QgYXV0aGVudGljYXRlZCwgcGxlYXNlIGF1dGhlbnRpY2F0ZSB1c2luZyBGaXJlYmFzZSAnICtcbiAgICAnQXV0aGVudGljYXRpb24gYW5kIHRyeSBhZ2Fpbi4nO1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLlVOQVVUSEVOVElDQVRFRCwgbWVzc2FnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmF1dGhvcml6ZWRBcHAoKTogU3RvcmFnZUVycm9yIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXG4gICAgU3RvcmFnZUVycm9yQ29kZS5VTkFVVEhPUklaRURfQVBQLFxuICAgICdUaGlzIGFwcCBkb2VzIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzIEZpcmViYXNlIFN0b3JhZ2Ugb24gdGhpcyBwcm9qZWN0LidcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuYXV0aG9yaXplZChwYXRoOiBzdHJpbmcpOiBTdG9yYWdlRXJyb3Ige1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcbiAgICBTdG9yYWdlRXJyb3JDb2RlLlVOQVVUSE9SSVpFRCxcbiAgICBcIlVzZXIgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyAnXCIgKyBwYXRoICsgXCInLlwiXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyeUxpbWl0RXhjZWVkZWQoKTogU3RvcmFnZUVycm9yIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXG4gICAgU3RvcmFnZUVycm9yQ29kZS5SRVRSWV9MSU1JVF9FWENFRURFRCxcbiAgICAnTWF4IHJldHJ5IHRpbWUgZm9yIG9wZXJhdGlvbiBleGNlZWRlZCwgcGxlYXNlIHRyeSBhZ2Fpbi4nXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkQ2hlY2tzdW0oXG4gIHBhdGg6IHN0cmluZyxcbiAgY2hlY2tzdW06IHN0cmluZyxcbiAgY2FsY3VsYXRlZDogc3RyaW5nXG4pOiBTdG9yYWdlRXJyb3Ige1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcbiAgICBTdG9yYWdlRXJyb3JDb2RlLklOVkFMSURfQ0hFQ0tTVU0sXG4gICAgXCJVcGxvYWRlZC9kb3dubG9hZGVkIG9iamVjdCAnXCIgK1xuICAgICAgcGF0aCArXG4gICAgICBcIicgaGFzIGNoZWNrc3VtICdcIiArXG4gICAgICBjaGVja3N1bSArXG4gICAgICBcIicgd2hpY2ggZG9lcyBub3QgbWF0Y2ggJ1wiICtcbiAgICAgIGNhbGN1bGF0ZWQgK1xuICAgICAgXCInLiBQbGVhc2UgcmV0cnkgdGhlIHVwbG9hZC9kb3dubG9hZC5cIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsZWQoKTogU3RvcmFnZUVycm9yIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXG4gICAgU3RvcmFnZUVycm9yQ29kZS5DQU5DRUxFRCxcbiAgICAnVXNlciBjYW5jZWxlZCB0aGUgdXBsb2FkL2Rvd25sb2FkLidcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRFdmVudE5hbWUobmFtZTogc3RyaW5nKTogU3RvcmFnZUVycm9yIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXG4gICAgU3RvcmFnZUVycm9yQ29kZS5JTlZBTElEX0VWRU5UX05BTUUsXG4gICAgXCJJbnZhbGlkIGV2ZW50IG5hbWUgJ1wiICsgbmFtZSArIFwiJy5cIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZFVybCh1cmw6IHN0cmluZyk6IFN0b3JhZ2VFcnJvciB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFxuICAgIFN0b3JhZ2VFcnJvckNvZGUuSU5WQUxJRF9VUkwsXG4gICAgXCJJbnZhbGlkIFVSTCAnXCIgKyB1cmwgKyBcIicuXCJcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWREZWZhdWx0QnVja2V0KGJ1Y2tldDogc3RyaW5nKTogU3RvcmFnZUVycm9yIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXG4gICAgU3RvcmFnZUVycm9yQ29kZS5JTlZBTElEX0RFRkFVTFRfQlVDS0VULFxuICAgIFwiSW52YWxpZCBkZWZhdWx0IGJ1Y2tldCAnXCIgKyBidWNrZXQgKyBcIicuXCJcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vRGVmYXVsdEJ1Y2tldCgpOiBTdG9yYWdlRXJyb3Ige1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcbiAgICBTdG9yYWdlRXJyb3JDb2RlLk5PX0RFRkFVTFRfQlVDS0VULFxuICAgICdObyBkZWZhdWx0IGJ1Y2tldCAnICtcbiAgICAgIFwiZm91bmQuIERpZCB5b3Ugc2V0IHRoZSAnXCIgK1xuICAgICAgQ09ORklHX1NUT1JBR0VfQlVDS0VUX0tFWSArXG4gICAgICBcIicgcHJvcGVydHkgd2hlbiBpbml0aWFsaXppbmcgdGhlIGFwcD9cIlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2Fubm90U2xpY2VCbG9iKCk6IFN0b3JhZ2VFcnJvciB7XG4gIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFxuICAgIFN0b3JhZ2VFcnJvckNvZGUuQ0FOTk9UX1NMSUNFX0JMT0IsXG4gICAgJ0Nhbm5vdCBzbGljZSBibG9iIGZvciB1cGxvYWQuIFBsZWFzZSByZXRyeSB0aGUgdXBsb2FkLidcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZlckZpbGVXcm9uZ1NpemUoKTogU3RvcmFnZUVycm9yIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXG4gICAgU3RvcmFnZUVycm9yQ29kZS5TRVJWRVJfRklMRV9XUk9OR19TSVpFLFxuICAgICdTZXJ2ZXIgcmVjb3JkZWQgaW5jb3JyZWN0IHVwbG9hZCBmaWxlIHNpemUsIHBsZWFzZSByZXRyeSB0aGUgdXBsb2FkLidcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vRG93bmxvYWRVUkwoKTogU3RvcmFnZUVycm9yIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXG4gICAgU3RvcmFnZUVycm9yQ29kZS5OT19ET1dOTE9BRF9VUkwsXG4gICAgJ1RoZSBnaXZlbiBmaWxlIGRvZXMgbm90IGhhdmUgYW55IGRvd25sb2FkIFVSTHMuJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWlzc2luZ1BvbHlGaWxsKHBvbHlGaWxsOiBzdHJpbmcpOiBTdG9yYWdlRXJyb3Ige1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcbiAgICBTdG9yYWdlRXJyb3JDb2RlLlVOU1VQUE9SVEVEX0VOVklST05NRU5ULFxuICAgIGAke3BvbHlGaWxsfSBpcyBtaXNzaW5nLiBNYWtlIHN1cmUgdG8gaW5zdGFsbCB0aGUgcmVxdWlyZWQgcG9seWZpbGxzLiBTZWUgaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL2Vudmlyb25tZW50cy1qcy1zZGsjcG9seWZpbGxzIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgKTtcbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRBcmd1bWVudChtZXNzYWdlOiBzdHJpbmcpOiBTdG9yYWdlRXJyb3Ige1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihTdG9yYWdlRXJyb3JDb2RlLklOVkFMSURfQVJHVU1FTlQsIG1lc3NhZ2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZEFyZ3VtZW50Q291bnQoXG4gIGFyZ01pbjogbnVtYmVyLFxuICBhcmdNYXg6IG51bWJlcixcbiAgZm5OYW1lOiBzdHJpbmcsXG4gIHJlYWw6IG51bWJlclxuKTogU3RvcmFnZUVycm9yIHtcbiAgbGV0IGNvdW50UGFydDtcbiAgbGV0IHBsdXJhbDtcbiAgaWYgKGFyZ01pbiA9PT0gYXJnTWF4KSB7XG4gICAgY291bnRQYXJ0ID0gYXJnTWluO1xuICAgIHBsdXJhbCA9IGFyZ01pbiA9PT0gMSA/ICdhcmd1bWVudCcgOiAnYXJndW1lbnRzJztcbiAgfSBlbHNlIHtcbiAgICBjb3VudFBhcnQgPSAnYmV0d2VlbiAnICsgYXJnTWluICsgJyBhbmQgJyArIGFyZ01heDtcbiAgICBwbHVyYWwgPSAnYXJndW1lbnRzJztcbiAgfVxuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcbiAgICBTdG9yYWdlRXJyb3JDb2RlLklOVkFMSURfQVJHVU1FTlRfQ09VTlQsXG4gICAgJ0ludmFsaWQgYXJndW1lbnQgY291bnQgaW4gYCcgK1xuICAgICAgZm5OYW1lICtcbiAgICAgICdgOiBFeHBlY3RlZCAnICtcbiAgICAgIGNvdW50UGFydCArXG4gICAgICAnICcgK1xuICAgICAgcGx1cmFsICtcbiAgICAgICcsIHJlY2VpdmVkICcgK1xuICAgICAgcmVhbCArXG4gICAgICAnLidcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcERlbGV0ZWQoKTogU3RvcmFnZUVycm9yIHtcbiAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXG4gICAgU3RvcmFnZUVycm9yQ29kZS5BUFBfREVMRVRFRCxcbiAgICAnVGhlIEZpcmViYXNlIGFwcCB3YXMgZGVsZXRlZC4nXG4gICk7XG59XG5cbi8qKlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgd2FzIGludmFsaWQuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkUm9vdE9wZXJhdGlvbihuYW1lOiBzdHJpbmcpOiBTdG9yYWdlRXJyb3Ige1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcbiAgICBTdG9yYWdlRXJyb3JDb2RlLklOVkFMSURfUk9PVF9PUEVSQVRJT04sXG4gICAgXCJUaGUgb3BlcmF0aW9uICdcIiArXG4gICAgICBuYW1lICtcbiAgICAgIFwiJyBjYW5ub3QgYmUgcGVyZm9ybWVkIG9uIGEgcm9vdCByZWZlcmVuY2UsIGNyZWF0ZSBhIG5vbi1yb290IFwiICtcbiAgICAgIFwicmVmZXJlbmNlIHVzaW5nIGNoaWxkLCBzdWNoIGFzIC5jaGlsZCgnZmlsZS5wbmcnKS5cIlxuICApO1xufVxuXG4vKipcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgZm9ybWF0IHRoYXQgd2FzIG5vdCB2YWxpZC5cbiAqIEBwYXJhbSBtZXNzYWdlIC0gQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGZvcm1hdCB2aW9sYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkRm9ybWF0KGZvcm1hdDogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBTdG9yYWdlRXJyb3Ige1xuICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcbiAgICBTdG9yYWdlRXJyb3JDb2RlLklOVkFMSURfRk9STUFULFxuICAgIFwiU3RyaW5nIGRvZXMgbm90IG1hdGNoIGZvcm1hdCAnXCIgKyBmb3JtYXQgKyBcIic6IFwiICsgbWVzc2FnZVxuICApO1xufVxuXG4vKipcbiAqIEBwYXJhbSBtZXNzYWdlIC0gQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGludGVybmFsIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5zdXBwb3J0ZWRFbnZpcm9ubWVudChtZXNzYWdlOiBzdHJpbmcpOiBTdG9yYWdlRXJyb3Ige1xuICB0aHJvdyBuZXcgU3RvcmFnZUVycm9yKFN0b3JhZ2VFcnJvckNvZGUuVU5TVVBQT1JURURfRU5WSVJPTk1FTlQsIG1lc3NhZ2UpO1xufVxuXG4vKipcbiAqIEBwYXJhbSBtZXNzYWdlIC0gQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGludGVybmFsIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJuYWxFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBTdG9yYWdlRXJyb3Ige1xuICB0aHJvdyBuZXcgU3RvcmFnZUVycm9yKFxuICAgIFN0b3JhZ2VFcnJvckNvZGUuSU5URVJOQUxfRVJST1IsXG4gICAgJ0ludGVybmFsIGVycm9yOiAnICsgbWVzc2FnZVxuICApO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBGdW5jdGlvbmFsaXR5IHJlbGF0ZWQgdG8gdGhlIHBhcnNpbmcvY29tcG9zaXRpb24gb2YgYnVja2V0L1xuICogb2JqZWN0IGxvY2F0aW9uLlxuICovXG5cbmltcG9ydCB7IGludmFsaWREZWZhdWx0QnVja2V0LCBpbnZhbGlkVXJsIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBERUZBVUxUX0hPU1QgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbi8qKlxuICogRmlyZWJhc2UgU3RvcmFnZSBsb2NhdGlvbiBkYXRhLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgTG9jYXRpb24ge1xuICBwcml2YXRlIHBhdGhfOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGJ1Y2tldDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhdGhfID0gcGF0aDtcbiAgfVxuXG4gIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGF0aF87XG4gIH1cblxuICBnZXQgaXNSb290KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhdGgubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgZnVsbFNlcnZlclVybCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcbiAgICByZXR1cm4gJy9iLycgKyBlbmNvZGUodGhpcy5idWNrZXQpICsgJy9vLycgKyBlbmNvZGUodGhpcy5wYXRoKTtcbiAgfVxuXG4gIGJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG4gICAgcmV0dXJuICcvYi8nICsgZW5jb2RlKHRoaXMuYnVja2V0KSArICcvbyc7XG4gIH1cblxuICBzdGF0aWMgbWFrZUZyb21CdWNrZXRTcGVjKGJ1Y2tldFN0cmluZzogc3RyaW5nLCBob3N0OiBzdHJpbmcpOiBMb2NhdGlvbiB7XG4gICAgbGV0IGJ1Y2tldExvY2F0aW9uO1xuICAgIHRyeSB7XG4gICAgICBidWNrZXRMb2NhdGlvbiA9IExvY2F0aW9uLm1ha2VGcm9tVXJsKGJ1Y2tldFN0cmluZywgaG9zdCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gTm90IHZhbGlkIFVSTCwgdXNlIGFzLWlzLiBUaGlzIGxldHMgeW91IHB1dCBiYXJlIGJ1Y2tldCBuYW1lcyBpblxuICAgICAgLy8gY29uZmlnLlxuICAgICAgcmV0dXJuIG5ldyBMb2NhdGlvbihidWNrZXRTdHJpbmcsICcnKTtcbiAgICB9XG4gICAgaWYgKGJ1Y2tldExvY2F0aW9uLnBhdGggPT09ICcnKSB7XG4gICAgICByZXR1cm4gYnVja2V0TG9jYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGludmFsaWREZWZhdWx0QnVja2V0KGJ1Y2tldFN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG1ha2VGcm9tVXJsKHVybDogc3RyaW5nLCBob3N0OiBzdHJpbmcpOiBMb2NhdGlvbiB7XG4gICAgbGV0IGxvY2F0aW9uOiBMb2NhdGlvbiB8IG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGJ1Y2tldERvbWFpbiA9ICcoW0EtWmEtejAtOS5cXFxcLV9dKyknO1xuXG4gICAgZnVuY3Rpb24gZ3NNb2RpZnkobG9jOiBMb2NhdGlvbik6IHZvaWQge1xuICAgICAgaWYgKGxvYy5wYXRoLmNoYXJBdChsb2MucGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nKSB7XG4gICAgICAgIGxvYy5wYXRoXyA9IGxvYy5wYXRoXy5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdzUGF0aCA9ICcoLyguKikpPyQnO1xuICAgIGNvbnN0IGdzUmVnZXggPSBuZXcgUmVnRXhwKCdeZ3M6Ly8nICsgYnVja2V0RG9tYWluICsgZ3NQYXRoLCAnaScpO1xuICAgIGNvbnN0IGdzSW5kaWNlcyA9IHsgYnVja2V0OiAxLCBwYXRoOiAzIH07XG5cbiAgICBmdW5jdGlvbiBodHRwTW9kaWZ5KGxvYzogTG9jYXRpb24pOiB2b2lkIHtcbiAgICAgIGxvYy5wYXRoXyA9IGRlY29kZVVSSUNvbXBvbmVudChsb2MucGF0aCk7XG4gICAgfVxuICAgIGNvbnN0IHZlcnNpb24gPSAndltBLVphLXowLTlfXSsnO1xuICAgIGNvbnN0IGZpcmViYXNlU3RvcmFnZUhvc3QgPSBob3N0LnJlcGxhY2UoL1suXS9nLCAnXFxcXC4nKTtcbiAgICBjb25zdCBmaXJlYmFzZVN0b3JhZ2VQYXRoID0gJygvKFtePyNdKikuKik/JCc7XG4gICAgY29uc3QgZmlyZWJhc2VTdG9yYWdlUmVnRXhwID0gbmV3IFJlZ0V4cChcbiAgICAgIGBeaHR0cHM/Oi8vJHtmaXJlYmFzZVN0b3JhZ2VIb3N0fS8ke3ZlcnNpb259L2IvJHtidWNrZXREb21haW59L28ke2ZpcmViYXNlU3RvcmFnZVBhdGh9YCxcbiAgICAgICdpJ1xuICAgICk7XG4gICAgY29uc3QgZmlyZWJhc2VTdG9yYWdlSW5kaWNlcyA9IHsgYnVja2V0OiAxLCBwYXRoOiAzIH07XG5cbiAgICBjb25zdCBjbG91ZFN0b3JhZ2VIb3N0ID1cbiAgICAgIGhvc3QgPT09IERFRkFVTFRfSE9TVFxuICAgICAgICA/ICcoPzpzdG9yYWdlLmdvb2dsZWFwaXMuY29tfHN0b3JhZ2UuY2xvdWQuZ29vZ2xlLmNvbSknXG4gICAgICAgIDogaG9zdDtcbiAgICBjb25zdCBjbG91ZFN0b3JhZ2VQYXRoID0gJyhbXj8jXSopJztcbiAgICBjb25zdCBjbG91ZFN0b3JhZ2VSZWdFeHAgPSBuZXcgUmVnRXhwKFxuICAgICAgYF5odHRwcz86Ly8ke2Nsb3VkU3RvcmFnZUhvc3R9LyR7YnVja2V0RG9tYWlufS8ke2Nsb3VkU3RvcmFnZVBhdGh9YCxcbiAgICAgICdpJ1xuICAgICk7XG4gICAgY29uc3QgY2xvdWRTdG9yYWdlSW5kaWNlcyA9IHsgYnVja2V0OiAxLCBwYXRoOiAyIH07XG5cbiAgICBjb25zdCBncm91cHMgPSBbXG4gICAgICB7IHJlZ2V4OiBnc1JlZ2V4LCBpbmRpY2VzOiBnc0luZGljZXMsIHBvc3RNb2RpZnk6IGdzTW9kaWZ5IH0sXG4gICAgICB7XG4gICAgICAgIHJlZ2V4OiBmaXJlYmFzZVN0b3JhZ2VSZWdFeHAsXG4gICAgICAgIGluZGljZXM6IGZpcmViYXNlU3RvcmFnZUluZGljZXMsXG4gICAgICAgIHBvc3RNb2RpZnk6IGh0dHBNb2RpZnlcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJlZ2V4OiBjbG91ZFN0b3JhZ2VSZWdFeHAsXG4gICAgICAgIGluZGljZXM6IGNsb3VkU3RvcmFnZUluZGljZXMsXG4gICAgICAgIHBvc3RNb2RpZnk6IGh0dHBNb2RpZnlcbiAgICAgIH1cbiAgICBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tpXTtcbiAgICAgIGNvbnN0IGNhcHR1cmVzID0gZ3JvdXAucmVnZXguZXhlYyh1cmwpO1xuICAgICAgaWYgKGNhcHR1cmVzKSB7XG4gICAgICAgIGNvbnN0IGJ1Y2tldFZhbHVlID0gY2FwdHVyZXNbZ3JvdXAuaW5kaWNlcy5idWNrZXRdO1xuICAgICAgICBsZXQgcGF0aFZhbHVlID0gY2FwdHVyZXNbZ3JvdXAuaW5kaWNlcy5wYXRoXTtcbiAgICAgICAgaWYgKCFwYXRoVmFsdWUpIHtcbiAgICAgICAgICBwYXRoVmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihidWNrZXRWYWx1ZSwgcGF0aFZhbHVlKTtcbiAgICAgICAgZ3JvdXAucG9zdE1vZGlmeShsb2NhdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgaW52YWxpZFVybCh1cmwpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgU3RvcmFnZUVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnLi9yZXF1ZXN0JztcblxuLyoqXG4gKiBBIHJlcXVlc3Qgd2hvc2UgcHJvbWlzZSBhbHdheXMgZmFpbHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBGYWlsUmVxdWVzdDxUPiBpbXBsZW1lbnRzIFJlcXVlc3Q8VD4ge1xuICBwcm9taXNlXzogUHJvbWlzZTxUPjtcblxuICBjb25zdHJ1Y3RvcihlcnJvcjogU3RvcmFnZUVycm9yKSB7XG4gICAgdGhpcy5wcm9taXNlXyA9IFByb21pc2UucmVqZWN0PFQ+KGVycm9yKTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdERvYyAqL1xuICBnZXRQcm9taXNlKCk6IFByb21pc2U8VD4ge1xuICAgIHJldHVybiB0aGlzLnByb21pc2VfO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0RG9jICovXG4gIGNhbmNlbChfYXBwRGVsZXRlID0gZmFsc2UpOiB2b2lkIHt9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFByb3ZpZGVzIGEgbWV0aG9kIGZvciBydW5uaW5nIGEgZnVuY3Rpb24gd2l0aCBleHBvbmVudGlhbFxuICogYmFja29mZi5cbiAqL1xudHlwZSBpZCA9IChwMTogYm9vbGVhbikgPT4gdm9pZDtcblxuZXhwb3J0IHsgaWQgfTtcblxuLyoqXG4gKiBBY2NlcHRzIGEgY2FsbGJhY2sgZm9yIGFuIGFjdGlvbiB0byBwZXJmb3JtIChgZG9SZXF1ZXN0YCksXG4gKiBhbmQgdGhlbiBhIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBiYWNrb2ZmIGhhcyBjb21wbGV0ZWQgKGBiYWNrb2ZmQ29tcGxldGVDYmApLlxuICogVGhlIGNhbGxiYWNrIHNlbnQgdG8gc3RhcnQgcmVxdWlyZXMgYW4gYXJndW1lbnQgdG8gY2FsbCAoYG9uUmVxdWVzdENvbXBsZXRlYCkuXG4gKiBXaGVuIGBzdGFydGAgY2FsbHMgYGRvUmVxdWVzdGAsIGl0IHBhc3NlcyBhIGNhbGxiYWNrIGZvciB3aGVuIHRoZSByZXF1ZXN0IGhhc1xuICogY29tcGxldGVkLCBgb25SZXF1ZXN0Q29tcGxldGVgLiBCYXNlZCBvbiB0aGlzLCB0aGUgYmFja29mZiBjb250aW51ZXMsIHdpdGhcbiAqIGFub3RoZXIgY2FsbCB0byBgZG9SZXF1ZXN0YCBhbmQgdGhlIGFib3ZlIGxvb3AgY29udGludWVzIHVudGlsIHRoZSB0aW1lb3V0XG4gKiBpcyBoaXQsIG9yIGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBvY2N1cnMuXG4gKiBAZGVzY3JpcHRpb25cbiAqIEBwYXJhbSBkb1JlcXVlc3QgQ2FsbGJhY2sgdG8gcGVyZm9ybSByZXF1ZXN0XG4gKiBAcGFyYW0gYmFja29mZkNvbXBsZXRlQ2IgQ2FsbGJhY2sgdG8gY2FsbCB3aGVuIGJhY2tvZmYgaGFzIGJlZW4gY29tcGxldGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydChcbiAgZG9SZXF1ZXN0OiAoXG4gICAgb25SZXF1ZXN0Q29tcGxldGU6IChzdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkLFxuICAgIGNhbmNlbGVkOiBib29sZWFuXG4gICkgPT4gdm9pZCxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgYmFja29mZkNvbXBsZXRlQ2I6ICguLi5hcmdzOiBhbnlbXSkgPT4gdW5rbm93bixcbiAgdGltZW91dDogbnVtYmVyXG4pOiBpZCB7XG4gIC8vIFRPRE8oYW5keXNvdG8pOiBtYWtlIHRoaXMgY29kZSBjbGVhbmVyIChwcm9iYWJseSByZWZhY3RvciBpbnRvIGFuIGFjdHVhbFxuICAvLyB0eXBlIGluc3RlYWQgb2YgYSBidW5jaCBvZiBmdW5jdGlvbnMgd2l0aCBzdGF0ZSBzaGFyZWQgaW4gdGhlIGNsb3N1cmUpXG4gIGxldCB3YWl0U2Vjb25kcyA9IDE7XG4gIC8vIFdvdWxkIHR5cGUgdGhpcyBhcyBcIm51bWJlclwiIGJ1dCB0aGF0IGRvZXNuJ3Qgd29yayBmb3IgTm9kZSBzbyDCr1xcXyjjg4QpXy/Cr1xuICAvLyBUT0RPOiBmaW5kIGEgd2F5IHRvIGV4Y2x1ZGUgTm9kZSB0eXBlIGRlZmluaXRpb24gZm9yIHN0b3JhZ2UgYmVjYXVzZSBzdG9yYWdlIG9ubHkgd29ya3MgaW4gYnJvd3NlclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBsZXQgcmV0cnlUaW1lb3V0SWQ6IGFueSA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIGxldCBnbG9iYWxUaW1lb3V0SWQ6IGFueSA9IG51bGw7XG4gIGxldCBoaXRUaW1lb3V0ID0gZmFsc2U7XG4gIGxldCBjYW5jZWxTdGF0ZSA9IDA7XG5cbiAgZnVuY3Rpb24gY2FuY2VsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGNhbmNlbFN0YXRlID09PSAyO1xuICB9XG4gIGxldCB0cmlnZ2VyZWRDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHRyaWdnZXJDYWxsYmFjayguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICghdHJpZ2dlcmVkQ2FsbGJhY2spIHtcbiAgICAgIHRyaWdnZXJlZENhbGxiYWNrID0gdHJ1ZTtcbiAgICAgIGJhY2tvZmZDb21wbGV0ZUNiLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGxXaXRoRGVsYXkobWlsbGlzOiBudW1iZXIpOiB2b2lkIHtcbiAgICByZXRyeVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmV0cnlUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgZG9SZXF1ZXN0KHJlc3BvbnNlSGFuZGxlciwgY2FuY2VsZWQoKSk7XG4gICAgfSwgbWlsbGlzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyR2xvYmFsVGltZW91dCgpOiB2b2lkIHtcbiAgICBpZiAoZ2xvYmFsVGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZ2xvYmFsVGltZW91dElkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNwb25zZUhhbmRsZXIoc3VjY2VzczogYm9vbGVhbiwgLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodHJpZ2dlcmVkQ2FsbGJhY2spIHtcbiAgICAgIGNsZWFyR2xvYmFsVGltZW91dCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgY2xlYXJHbG9iYWxUaW1lb3V0KCk7XG4gICAgICB0cmlnZ2VyQ2FsbGJhY2suY2FsbChudWxsLCBzdWNjZXNzLCAuLi5hcmdzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbXVzdFN0b3AgPSBjYW5jZWxlZCgpIHx8IGhpdFRpbWVvdXQ7XG4gICAgaWYgKG11c3RTdG9wKSB7XG4gICAgICBjbGVhckdsb2JhbFRpbWVvdXQoKTtcbiAgICAgIHRyaWdnZXJDYWxsYmFjay5jYWxsKG51bGwsIHN1Y2Nlc3MsIC4uLmFyZ3MpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2FpdFNlY29uZHMgPCA2NCkge1xuICAgICAgLyogVE9ETyhhbmR5c290byk6IGRvbid0IGJhY2sgb2ZmIHNvIHF1aWNrbHkgaWYgd2Uga25vdyB3ZSdyZSBvZmZsaW5lLiAqL1xuICAgICAgd2FpdFNlY29uZHMgKj0gMjtcbiAgICB9XG4gICAgbGV0IHdhaXRNaWxsaXM7XG4gICAgaWYgKGNhbmNlbFN0YXRlID09PSAxKSB7XG4gICAgICBjYW5jZWxTdGF0ZSA9IDI7XG4gICAgICB3YWl0TWlsbGlzID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgd2FpdE1pbGxpcyA9ICh3YWl0U2Vjb25kcyArIE1hdGgucmFuZG9tKCkpICogMTAwMDtcbiAgICB9XG4gICAgY2FsbFdpdGhEZWxheSh3YWl0TWlsbGlzKTtcbiAgfVxuICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHN0b3Aod2FzVGltZW91dDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChzdG9wcGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgIGNsZWFyR2xvYmFsVGltZW91dCgpO1xuICAgIGlmICh0cmlnZ2VyZWRDYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmV0cnlUaW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgIGlmICghd2FzVGltZW91dCkge1xuICAgICAgICBjYW5jZWxTdGF0ZSA9IDI7XG4gICAgICB9XG4gICAgICBjbGVhclRpbWVvdXQocmV0cnlUaW1lb3V0SWQpO1xuICAgICAgY2FsbFdpdGhEZWxheSgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF3YXNUaW1lb3V0KSB7XG4gICAgICAgIGNhbmNlbFN0YXRlID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2FsbFdpdGhEZWxheSgwKTtcbiAgZ2xvYmFsVGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaGl0VGltZW91dCA9IHRydWU7XG4gICAgc3RvcCh0cnVlKTtcbiAgfSwgdGltZW91dCk7XG4gIHJldHVybiBzdG9wO1xufVxuXG4vKipcbiAqIFN0b3BzIHRoZSByZXRyeSBsb29wIGZyb20gcmVwZWF0aW5nLlxuICogSWYgdGhlIGZ1bmN0aW9uIGlzIGN1cnJlbnRseSBcImluIGJldHdlZW5cIiByZXRyaWVzLCBpdCBpcyBpbnZva2VkIGltbWVkaWF0ZWx5XG4gKiB3aXRoIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGFzIFwidHJ1ZVwiLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaW52b2tlZCBvbmNlIG1vcmVcbiAqIGFmdGVyIHRoZSBjdXJyZW50IGludm9jYXRpb24gZmluaXNoZXMgaWZmIHRoZSBjdXJyZW50IGludm9jYXRpb24gd291bGQgaGF2ZVxuICogdHJpZ2dlcmVkIGFub3RoZXIgcmV0cnkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdG9wKGlkOiBpZCk6IHZvaWQge1xuICBpZChmYWxzZSk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgaW52YWxpZEFyZ3VtZW50IH0gZnJvbSAnLi9lcnJvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0p1c3REZWY8VD4ocDogVCB8IG51bGwgfCB1bmRlZmluZWQpOiBwIGlzIFQgfCBudWxsIHtcbiAgcmV0dXJuIHAgIT09IHZvaWQgMDtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHA6IHVua25vd24pOiBwIGlzIEZ1bmN0aW9uIHtcbiAgcmV0dXJuIHR5cGVvZiBwID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb25BcnJheU9iamVjdChwOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgcCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhwOiB1bmtub3duKTogcCBpcyBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIHAgPT09ICdzdHJpbmcnIHx8IHAgaW5zdGFuY2VvZiBTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05hdGl2ZUJsb2IocDogdW5rbm93bik6IHAgaXMgQmxvYiB7XG4gIHJldHVybiBpc05hdGl2ZUJsb2JEZWZpbmVkKCkgJiYgcCBpbnN0YW5jZW9mIEJsb2I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05hdGl2ZUJsb2JEZWZpbmVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIoXG4gIGFyZ3VtZW50OiBzdHJpbmcsXG4gIG1pblZhbHVlOiBudW1iZXIsXG4gIG1heFZhbHVlOiBudW1iZXIsXG4gIHZhbHVlOiBudW1iZXJcbik6IHZvaWQge1xuICBpZiAodmFsdWUgPCBtaW5WYWx1ZSkge1xuICAgIHRocm93IGludmFsaWRBcmd1bWVudChcbiAgICAgIGBJbnZhbGlkIHZhbHVlIGZvciAnJHthcmd1bWVudH0nLiBFeHBlY3RlZCAke21pblZhbHVlfSBvciBncmVhdGVyLmBcbiAgICApO1xuICB9XG4gIGlmICh2YWx1ZSA+IG1heFZhbHVlKSB7XG4gICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50KFxuICAgICAgYEludmFsaWQgdmFsdWUgZm9yICcke2FyZ3VtZW50fScuIEV4cGVjdGVkICR7bWF4VmFsdWV9IG9yIGxlc3MuYFxuICAgICk7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgRnVuY3Rpb25zIHRvIGNyZWF0ZSBhbmQgbWFuaXB1bGF0ZSBVUkxzIGZvciB0aGUgc2VydmVyIEFQSS5cbiAqL1xuaW1wb3J0IHsgVXJsUGFyYW1zIH0gZnJvbSAnLi9yZXF1ZXN0aW5mbyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVXJsKFxuICB1cmxQYXJ0OiBzdHJpbmcsXG4gIGhvc3Q6IHN0cmluZyxcbiAgcHJvdG9jb2w6IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgbGV0IG9yaWdpbiA9IGhvc3Q7XG4gIGlmIChwcm90b2NvbCA9PSBudWxsKSB7XG4gICAgb3JpZ2luID0gYGh0dHBzOi8vJHtob3N0fWA7XG4gIH1cbiAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7b3JpZ2lufS92MCR7dXJsUGFydH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVF1ZXJ5U3RyaW5nKHBhcmFtczogVXJsUGFyYW1zKTogc3RyaW5nIHtcbiAgY29uc3QgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuICBsZXQgcXVlcnlQYXJ0ID0gJz8nO1xuICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IG5leHRQYXJ0ID0gZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUocGFyYW1zW2tleV0pO1xuICAgICAgcXVlcnlQYXJ0ID0gcXVlcnlQYXJ0ICsgbmV4dFBhcnQgKyAnJic7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hvcCBvZmYgdGhlIGV4dHJhICcmJyBvciAnPycgb24gdGhlIGVuZFxuICBxdWVyeVBhcnQgPSBxdWVyeVBhcnQuc2xpY2UoMCwgLTEpO1xuICByZXR1cm4gcXVlcnlQYXJ0O1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKiogTmV0d29yayBoZWFkZXJzICovXG5leHBvcnQgdHlwZSBIZWFkZXJzID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuLyoqIFJlc3BvbnNlIHR5cGUgZXhwb3NlZCBieSB0aGUgbmV0d29ya2luZyBBUElzLiAqL1xuZXhwb3J0IHR5cGUgQ29ubmVjdGlvblR5cGUgPVxuICB8IHN0cmluZ1xuICB8IEFycmF5QnVmZmVyXG4gIHwgQmxvYlxuICB8IFJlYWRhYmxlU3RyZWFtPFVpbnQ4QXJyYXk+O1xuXG4vKipcbiAqIEEgbGlnaHR3ZWlnaHQgd3JhcHBlciBhcm91bmQgWE1MSHR0cFJlcXVlc3Qgd2l0aCBhXG4gKiBnb29nLm5ldC5YaHJJby1saWtlIGludGVyZmFjZS5cbiAqXG4gKiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIGJ5IGludm9raW5nIGBuZXdUZXh0Q29ubmVjdGlvbigpYCxcbiAqIGBuZXdCeXRlc0Nvbm5lY3Rpb24oKWAgb3IgYG5ld1N0cmVhbUNvbm5lY3Rpb24oKWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29ubmVjdGlvbjxUIGV4dGVuZHMgQ29ubmVjdGlvblR5cGU+IHtcbiAgLyoqXG4gICAqIFNlbmRzIGEgcmVxdWVzdCB0byB0aGUgcHJvdmlkZWQgVVJMLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBuZXZlciByZWplY3RzIGl0cyBwcm9taXNlLiBJbiBjYXNlIG9mIGVuY291bnRlcmluZyBhbiBlcnJvcixcbiAgICogaXQgc2V0cyBhbiBlcnJvciBjb2RlIGludGVybmFsbHkgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIGJ5IGNhbGxpbmdcbiAgICogZ2V0RXJyb3JDb2RlKCkgYnkgY2FsbGVycy5cbiAgICovXG4gIHNlbmQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgYm9keT86IEFycmF5QnVmZmVyVmlldyB8IEJsb2IgfCBzdHJpbmcgfCBudWxsLFxuICAgIGhlYWRlcnM/OiBIZWFkZXJzXG4gICk6IFByb21pc2U8dm9pZD47XG5cbiAgZ2V0RXJyb3JDb2RlKCk6IEVycm9yQ29kZTtcblxuICBnZXRTdGF0dXMoKTogbnVtYmVyO1xuXG4gIGdldFJlc3BvbnNlKCk6IFQ7XG5cbiAgZ2V0RXJyb3JUZXh0KCk6IHN0cmluZztcblxuICAvKipcbiAgICogQWJvcnQgdGhlIHJlcXVlc3QuXG4gICAqL1xuICBhYm9ydCgpOiB2b2lkO1xuXG4gIGdldFJlc3BvbnNlSGVhZGVyKGhlYWRlcjogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcblxuICBhZGRVcGxvYWRQcm9ncmVzc0xpc3RlbmVyKGxpc3RlbmVyOiAocDE6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQpOiB2b2lkO1xuXG4gIHJlbW92ZVVwbG9hZFByb2dyZXNzTGlzdGVuZXIobGlzdGVuZXI6IChwMTogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCk6IHZvaWQ7XG59XG5cbi8qKlxuICogRXJyb3IgY29kZXMgZm9yIHJlcXVlc3RzIG1hZGUgYnkgdGhlIFhocklvIHdyYXBwZXIuXG4gKi9cbmV4cG9ydCBlbnVtIEVycm9yQ29kZSB7XG4gIE5PX0VSUk9SID0gMCxcbiAgTkVUV09SS19FUlJPUiA9IDEsXG4gIEFCT1JUID0gMlxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQ2hlY2tzIHRoZSBzdGF0dXMgY29kZSB0byBzZWUgaWYgdGhlIGFjdGlvbiBzaG91bGQgYmUgcmV0cmllZC5cbiAqXG4gKiBAcGFyYW0gc3RhdHVzIEN1cnJlbnQgSFRUUCBzdGF0dXMgY29kZSByZXR1cm5lZCBieSBzZXJ2ZXIuXG4gKiBAcGFyYW0gYWRkaXRpb25hbFJldHJ5Q29kZXMgYWRkaXRpb25hbCByZXRyeSBjb2RlcyB0byBjaGVjayBhZ2FpbnN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JldHJ5U3RhdHVzQ29kZShcbiAgc3RhdHVzOiBudW1iZXIsXG4gIGFkZGl0aW9uYWxSZXRyeUNvZGVzOiBudW1iZXJbXVxuKTogYm9vbGVhbiB7XG4gIC8vIFRoZSBjb2RlcyBmb3Igd2hpY2ggdG8gcmV0cnkgY2FtZSBmcm9tIHRoaXMgcGFnZTpcbiAgLy8gaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL3N0b3JhZ2UvZG9jcy9leHBvbmVudGlhbC1iYWNrb2ZmXG4gIGNvbnN0IGlzRml2ZUh1bmRyZWRDb2RlID0gc3RhdHVzID49IDUwMCAmJiBzdGF0dXMgPCA2MDA7XG4gIGNvbnN0IGV4dHJhUmV0cnlDb2RlcyA9IFtcbiAgICAvLyBSZXF1ZXN0IFRpbWVvdXQ6IHdlYiBzZXJ2ZXIgZGlkbid0IHJlY2VpdmUgZnVsbCByZXF1ZXN0IGluIHRpbWUuXG4gICAgNDA4LFxuICAgIC8vIFRvbyBNYW55IFJlcXVlc3RzOiB5b3UncmUgZ2V0dGluZyByYXRlLWxpbWl0ZWQsIGJhc2ljYWxseS5cbiAgICA0MjlcbiAgXTtcbiAgY29uc3QgaXNFeHRyYVJldHJ5Q29kZSA9IGV4dHJhUmV0cnlDb2Rlcy5pbmRleE9mKHN0YXR1cykgIT09IC0xO1xuICBjb25zdCBpc0FkZGl0aW9uYWxSZXRyeUNvZGUgPSBhZGRpdGlvbmFsUmV0cnlDb2Rlcy5pbmRleE9mKHN0YXR1cykgIT09IC0xO1xuICByZXR1cm4gaXNGaXZlSHVuZHJlZENvZGUgfHwgaXNFeHRyYVJldHJ5Q29kZSB8fCBpc0FkZGl0aW9uYWxSZXRyeUNvZGU7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IERlZmluZXMgbWV0aG9kcyB1c2VkIHRvIGFjdHVhbGx5IHNlbmQgSFRUUCByZXF1ZXN0cyBmcm9tXG4gKiBhYnN0cmFjdCByZXByZXNlbnRhdGlvbnMuXG4gKi9cblxuaW1wb3J0IHsgaWQgYXMgYmFja29mZklkLCBzdGFydCwgc3RvcCB9IGZyb20gJy4vYmFja29mZic7XG5pbXBvcnQgeyBhcHBEZWxldGVkLCBjYW5jZWxlZCwgcmV0cnlMaW1pdEV4Y2VlZGVkLCB1bmtub3duIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBFcnJvckhhbmRsZXIsIFJlcXVlc3RIYW5kbGVyLCBSZXF1ZXN0SW5mbyB9IGZyb20gJy4vcmVxdWVzdGluZm8nO1xuaW1wb3J0IHsgaXNKdXN0RGVmIH0gZnJvbSAnLi90eXBlJztcbmltcG9ydCB7IG1ha2VRdWVyeVN0cmluZyB9IGZyb20gJy4vdXJsJztcbmltcG9ydCB7IENvbm5lY3Rpb24sIEVycm9yQ29kZSwgSGVhZGVycywgQ29ubmVjdGlvblR5cGUgfSBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuaW1wb3J0IHsgaXNSZXRyeVN0YXR1c0NvZGUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0PFQ+IHtcbiAgZ2V0UHJvbWlzZSgpOiBQcm9taXNlPFQ+O1xuXG4gIC8qKlxuICAgKiBDYW5jZWxzIHRoZSByZXF1ZXN0LiBJTVBPUlRBTlQ6IHRoZSBwcm9taXNlIG1heSBzdGlsbCBiZSByZXNvbHZlZCB3aXRoIGFuXG4gICAqIGFwcHJvcHJpYXRlIHZhbHVlIChpZiB0aGUgcmVxdWVzdCBpcyBmaW5pc2hlZCBiZWZvcmUgeW91IGNhbGwgdGhpcyBtZXRob2QsXG4gICAqIGJ1dCB0aGUgcHJvbWlzZSBoYXMgbm90IHlldCBiZWVuIHJlc29sdmVkKSwgc28gZG9uJ3QganVzdCBhc3N1bWUgaXQgd2lsbCBiZVxuICAgKiByZWplY3RlZCBpZiB5b3UgY2FsbCB0aGlzIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gYXBwRGVsZXRlIC0gVHJ1ZSBpZiB0aGUgY2FuY2VsYXRpb24gY2FtZSBmcm9tIHRoZSBhcHAgYmVpbmcgZGVsZXRlZC5cbiAgICovXG4gIGNhbmNlbChhcHBEZWxldGU/OiBib29sZWFuKTogdm9pZDtcbn1cblxuLyoqXG4gKiBIYW5kbGVzIG5ldHdvcmsgbG9naWMgZm9yIGFsbCBTdG9yYWdlIFJlcXVlc3RzLCBpbmNsdWRpbmcgZXJyb3IgcmVwb3J0aW5nIGFuZFxuICogcmV0cmllcyB3aXRoIGJhY2tvZmYuXG4gKlxuICogQHBhcmFtIEkgLSB0aGUgdHlwZSBvZiB0aGUgYmFja2VuZCdzIG5ldHdvcmsgcmVzcG9uc2UuXG4gKiBAcGFyYW0gLSBPIHRoZSBvdXRwdXQgdHlwZSB1c2VkIGJ5IHRoZSByZXN0IG9mIHRoZSBTREsuIFRoZSBjb252ZXJzaW9uXG4gKiBoYXBwZW5zIGluIHRoZSBzcGVjaWZpZWQgYGNhbGxiYWNrX2AuXG4gKi9cbmNsYXNzIE5ldHdvcmtSZXF1ZXN0PEkgZXh0ZW5kcyBDb25uZWN0aW9uVHlwZSwgTz4gaW1wbGVtZW50cyBSZXF1ZXN0PE8+IHtcbiAgcHJpdmF0ZSBwZW5kaW5nQ29ubmVjdGlvbl86IENvbm5lY3Rpb248ST4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBiYWNrb2ZmSWRfOiBiYWNrb2ZmSWQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByZXNvbHZlXyE6ICh2YWx1ZT86IE8gfCBQcm9taXNlTGlrZTxPPikgPT4gdm9pZDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgcHJpdmF0ZSByZWplY3RfITogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBjYW5jZWxlZF86IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBhcHBEZWxldGVfOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvbWlzZV86IFByb21pc2U8Tz47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1cmxfOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBtZXRob2RfOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBoZWFkZXJzXzogSGVhZGVycyxcbiAgICBwcml2YXRlIGJvZHlfOiBzdHJpbmcgfCBCbG9iIHwgVWludDhBcnJheSB8IG51bGwsXG4gICAgcHJpdmF0ZSBzdWNjZXNzQ29kZXNfOiBudW1iZXJbXSxcbiAgICBwcml2YXRlIGFkZGl0aW9uYWxSZXRyeUNvZGVzXzogbnVtYmVyW10sXG4gICAgcHJpdmF0ZSBjYWxsYmFja186IFJlcXVlc3RIYW5kbGVyPEksIE8+LFxuICAgIHByaXZhdGUgZXJyb3JDYWxsYmFja186IEVycm9ySGFuZGxlciB8IG51bGwsXG4gICAgcHJpdmF0ZSB0aW1lb3V0XzogbnVtYmVyLFxuICAgIHByaXZhdGUgcHJvZ3Jlc3NDYWxsYmFja186ICgocDE6IG51bWJlciwgcDI6IG51bWJlcikgPT4gdm9pZCkgfCBudWxsLFxuICAgIHByaXZhdGUgY29ubmVjdGlvbkZhY3RvcnlfOiAoKSA9PiBDb25uZWN0aW9uPEk+LFxuICAgIHByaXZhdGUgcmV0cnkgPSB0cnVlXG4gICkge1xuICAgIHRoaXMucHJvbWlzZV8gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmVfID0gcmVzb2x2ZSBhcyAodmFsdWU/OiBPIHwgUHJvbWlzZUxpa2U8Tz4pID0+IHZvaWQ7XG4gICAgICB0aGlzLnJlamVjdF8gPSByZWplY3Q7XG4gICAgICB0aGlzLnN0YXJ0XygpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbGx5IHN0YXJ0cyB0aGUgcmV0cnkgbG9vcC5cbiAgICovXG4gIHByaXZhdGUgc3RhcnRfKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvVGhlUmVxdWVzdDogKFxuICAgICAgYmFja29mZkNhbGxiYWNrOiAoc3VjY2VzczogYm9vbGVhbiwgLi4ucDI6IHVua25vd25bXSkgPT4gdm9pZCxcbiAgICAgIGNhbmNlbGVkOiBib29sZWFuXG4gICAgKSA9PiB2b2lkID0gKGJhY2tvZmZDYWxsYmFjaywgY2FuY2VsZWQpID0+IHtcbiAgICAgIGlmIChjYW5jZWxlZCkge1xuICAgICAgICBiYWNrb2ZmQ2FsbGJhY2soZmFsc2UsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKGZhbHNlLCBudWxsLCB0cnVlKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSB0aGlzLmNvbm5lY3Rpb25GYWN0b3J5XygpO1xuICAgICAgdGhpcy5wZW5kaW5nQ29ubmVjdGlvbl8gPSBjb25uZWN0aW9uO1xuXG4gICAgICBjb25zdCBwcm9ncmVzc0xpc3RlbmVyOiAoXG4gICAgICAgIHByb2dyZXNzRXZlbnQ6IFByb2dyZXNzRXZlbnRcbiAgICAgICkgPT4gdm9pZCA9IHByb2dyZXNzRXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBsb2FkZWQgPSBwcm9ncmVzc0V2ZW50LmxvYWRlZDtcbiAgICAgICAgY29uc3QgdG90YWwgPSBwcm9ncmVzc0V2ZW50Lmxlbmd0aENvbXB1dGFibGUgPyBwcm9ncmVzc0V2ZW50LnRvdGFsIDogLTE7XG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzQ2FsbGJhY2tfICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrXyhsb2FkZWQsIHRvdGFsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzQ2FsbGJhY2tfICE9PSBudWxsKSB7XG4gICAgICAgIGNvbm5lY3Rpb24uYWRkVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lcihwcm9ncmVzc0xpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgLy8gY29ubmVjdGlvbi5zZW5kKCkgbmV2ZXIgcmVqZWN0cywgc28gd2UgZG9uJ3QgbmVlZCB0byBoYXZlIGEgZXJyb3IgaGFuZGxlciBvciB1c2UgY2F0Y2ggb24gdGhlIHJldHVybmVkIHByb21pc2UuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgICBjb25uZWN0aW9uXG4gICAgICAgIC5zZW5kKHRoaXMudXJsXywgdGhpcy5tZXRob2RfLCB0aGlzLmJvZHlfLCB0aGlzLmhlYWRlcnNfKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NDYWxsYmFja18gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVtb3ZlVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lcihwcm9ncmVzc0xpc3RlbmVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wZW5kaW5nQ29ubmVjdGlvbl8gPSBudWxsO1xuICAgICAgICAgIGNvbnN0IGhpdFNlcnZlciA9IGNvbm5lY3Rpb24uZ2V0RXJyb3JDb2RlKCkgPT09IEVycm9yQ29kZS5OT19FUlJPUjtcbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBjb25uZWN0aW9uLmdldFN0YXR1cygpO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFoaXRTZXJ2ZXIgfHxcbiAgICAgICAgICAgIChpc1JldHJ5U3RhdHVzQ29kZShzdGF0dXMsIHRoaXMuYWRkaXRpb25hbFJldHJ5Q29kZXNfKSAmJlxuICAgICAgICAgICAgICB0aGlzLnJldHJ5KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3Qgd2FzQ2FuY2VsZWQgPSBjb25uZWN0aW9uLmdldEVycm9yQ29kZSgpID09PSBFcnJvckNvZGUuQUJPUlQ7XG4gICAgICAgICAgICBiYWNrb2ZmQ2FsbGJhY2soXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICBuZXcgUmVxdWVzdEVuZFN0YXR1cyhmYWxzZSwgbnVsbCwgd2FzQ2FuY2VsZWQpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzdWNjZXNzQ29kZSA9IHRoaXMuc3VjY2Vzc0NvZGVzXy5pbmRleE9mKHN0YXR1cykgIT09IC0xO1xuICAgICAgICAgIGJhY2tvZmZDYWxsYmFjayh0cnVlLCBuZXcgUmVxdWVzdEVuZFN0YXR1cyhzdWNjZXNzQ29kZSwgY29ubmVjdGlvbikpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHJlcXVlc3RXZW50VGhyb3VnaCAtIFRydWUgaWYgdGhlIHJlcXVlc3QgZXZlbnR1YWxseSB3ZW50XG4gICAgICogICAgIHRocm91Z2gsIGZhbHNlIGlmIGl0IGhpdCB0aGUgcmV0cnkgbGltaXQgb3Igd2FzIGNhbmNlbGVkLlxuICAgICAqL1xuICAgIGNvbnN0IGJhY2tvZmZEb25lOiAoXG4gICAgICByZXF1ZXN0V2VudFRocm91Z2g6IGJvb2xlYW4sXG4gICAgICBzdGF0dXM6IFJlcXVlc3RFbmRTdGF0dXM8ST5cbiAgICApID0+IHZvaWQgPSAocmVxdWVzdFdlbnRUaHJvdWdoLCBzdGF0dXMpID0+IHtcbiAgICAgIGNvbnN0IHJlc29sdmUgPSB0aGlzLnJlc29sdmVfO1xuICAgICAgY29uc3QgcmVqZWN0ID0gdGhpcy5yZWplY3RfO1xuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHN0YXR1cy5jb25uZWN0aW9uIGFzIENvbm5lY3Rpb248ST47XG4gICAgICBpZiAoc3RhdHVzLndhc1N1Y2Nlc3NDb2RlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jYWxsYmFja18oY29ubmVjdGlvbiwgY29ubmVjdGlvbi5nZXRSZXNwb25zZSgpKTtcbiAgICAgICAgICBpZiAoaXNKdXN0RGVmKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbm5lY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBlcnIgPSB1bmtub3duKCk7XG4gICAgICAgICAgZXJyLnNlcnZlclJlc3BvbnNlID0gY29ubmVjdGlvbi5nZXRFcnJvclRleHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5lcnJvckNhbGxiYWNrXykge1xuICAgICAgICAgICAgcmVqZWN0KHRoaXMuZXJyb3JDYWxsYmFja18oY29ubmVjdGlvbiwgZXJyKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc3RhdHVzLmNhbmNlbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnIgPSB0aGlzLmFwcERlbGV0ZV8gPyBhcHBEZWxldGVkKCkgOiBjYW5jZWxlZCgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVyciA9IHJldHJ5TGltaXRFeGNlZWRlZCgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAodGhpcy5jYW5jZWxlZF8pIHtcbiAgICAgIGJhY2tvZmZEb25lKGZhbHNlLCBuZXcgUmVxdWVzdEVuZFN0YXR1cyhmYWxzZSwgbnVsbCwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJhY2tvZmZJZF8gPSBzdGFydChkb1RoZVJlcXVlc3QsIGJhY2tvZmZEb25lLCB0aGlzLnRpbWVvdXRfKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGluaGVyaXREb2MgKi9cbiAgZ2V0UHJvbWlzZSgpOiBQcm9taXNlPE8+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlXztcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdERvYyAqL1xuICBjYW5jZWwoYXBwRGVsZXRlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsZWRfID0gdHJ1ZTtcbiAgICB0aGlzLmFwcERlbGV0ZV8gPSBhcHBEZWxldGUgfHwgZmFsc2U7XG4gICAgaWYgKHRoaXMuYmFja29mZklkXyAhPT0gbnVsbCkge1xuICAgICAgc3RvcCh0aGlzLmJhY2tvZmZJZF8pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wZW5kaW5nQ29ubmVjdGlvbl8gIT09IG51bGwpIHtcbiAgICAgIHRoaXMucGVuZGluZ0Nvbm5lY3Rpb25fLmFib3J0KCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXN1bHQgb2YgYSBuZXR3b3JrIHJlcXVlc3QuXG4gKiBAcGFyYW0gb3B0X2NhbmNlbGVkIC0gRGVmYXVsdHMgdG8gZmFsc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0RW5kU3RhdHVzPEkgZXh0ZW5kcyBDb25uZWN0aW9uVHlwZT4ge1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgcmVxdWVzdCB3YXMgY2FuY2VsZWQuXG4gICAqL1xuICBjYW5jZWxlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgd2FzU3VjY2Vzc0NvZGU6IGJvb2xlYW4sXG4gICAgcHVibGljIGNvbm5lY3Rpb246IENvbm5lY3Rpb248ST4gfCBudWxsLFxuICAgIGNhbmNlbGVkPzogYm9vbGVhblxuICApIHtcbiAgICB0aGlzLmNhbmNlbGVkID0gISFjYW5jZWxlZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXV0aEhlYWRlcl8oXG4gIGhlYWRlcnM6IEhlYWRlcnMsXG4gIGF1dGhUb2tlbjogc3RyaW5nIHwgbnVsbFxuKTogdm9pZCB7XG4gIGlmIChhdXRoVG9rZW4gIT09IG51bGwgJiYgYXV0aFRva2VuLmxlbmd0aCA+IDApIHtcbiAgICBoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnRmlyZWJhc2UgJyArIGF1dGhUb2tlbjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVmVyc2lvbkhlYWRlcl8oXG4gIGhlYWRlcnM6IEhlYWRlcnMsXG4gIGZpcmViYXNlVmVyc2lvbj86IHN0cmluZ1xuKTogdm9pZCB7XG4gIGhlYWRlcnNbJ1gtRmlyZWJhc2UtU3RvcmFnZS1WZXJzaW9uJ10gPVxuICAgICd3ZWJqcy8nICsgKGZpcmViYXNlVmVyc2lvbiA/PyAnQXBwTWFuYWdlcicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkR21waWRIZWFkZXJfKGhlYWRlcnM6IEhlYWRlcnMsIGFwcElkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gIGlmIChhcHBJZCkge1xuICAgIGhlYWRlcnNbJ1gtRmlyZWJhc2UtR01QSUQnXSA9IGFwcElkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBcHBDaGVja0hlYWRlcl8oXG4gIGhlYWRlcnM6IEhlYWRlcnMsXG4gIGFwcENoZWNrVG9rZW46IHN0cmluZyB8IG51bGxcbik6IHZvaWQge1xuICBpZiAoYXBwQ2hlY2tUb2tlbiAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnNbJ1gtRmlyZWJhc2UtQXBwQ2hlY2snXSA9IGFwcENoZWNrVG9rZW47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VSZXF1ZXN0PEkgZXh0ZW5kcyBDb25uZWN0aW9uVHlwZSwgTz4oXG4gIHJlcXVlc3RJbmZvOiBSZXF1ZXN0SW5mbzxJLCBPPixcbiAgYXBwSWQ6IHN0cmluZyB8IG51bGwsXG4gIGF1dGhUb2tlbjogc3RyaW5nIHwgbnVsbCxcbiAgYXBwQ2hlY2tUb2tlbjogc3RyaW5nIHwgbnVsbCxcbiAgcmVxdWVzdEZhY3Rvcnk6ICgpID0+IENvbm5lY3Rpb248ST4sXG4gIGZpcmViYXNlVmVyc2lvbj86IHN0cmluZyxcbiAgcmV0cnkgPSB0cnVlXG4pOiBSZXF1ZXN0PE8+IHtcbiAgY29uc3QgcXVlcnlQYXJ0ID0gbWFrZVF1ZXJ5U3RyaW5nKHJlcXVlc3RJbmZvLnVybFBhcmFtcyk7XG4gIGNvbnN0IHVybCA9IHJlcXVlc3RJbmZvLnVybCArIHF1ZXJ5UGFydDtcbiAgY29uc3QgaGVhZGVycyA9IE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3RJbmZvLmhlYWRlcnMpO1xuICBhZGRHbXBpZEhlYWRlcl8oaGVhZGVycywgYXBwSWQpO1xuICBhZGRBdXRoSGVhZGVyXyhoZWFkZXJzLCBhdXRoVG9rZW4pO1xuICBhZGRWZXJzaW9uSGVhZGVyXyhoZWFkZXJzLCBmaXJlYmFzZVZlcnNpb24pO1xuICBhZGRBcHBDaGVja0hlYWRlcl8oaGVhZGVycywgYXBwQ2hlY2tUb2tlbik7XG4gIHJldHVybiBuZXcgTmV0d29ya1JlcXVlc3Q8SSwgTz4oXG4gICAgdXJsLFxuICAgIHJlcXVlc3RJbmZvLm1ldGhvZCxcbiAgICBoZWFkZXJzLFxuICAgIHJlcXVlc3RJbmZvLmJvZHksXG4gICAgcmVxdWVzdEluZm8uc3VjY2Vzc0NvZGVzLFxuICAgIHJlcXVlc3RJbmZvLmFkZGl0aW9uYWxSZXRyeUNvZGVzLFxuICAgIHJlcXVlc3RJbmZvLmhhbmRsZXIsXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyLFxuICAgIHJlcXVlc3RJbmZvLnRpbWVvdXQsXG4gICAgcmVxdWVzdEluZm8ucHJvZ3Jlc3NDYWxsYmFjayxcbiAgICByZXF1ZXN0RmFjdG9yeSxcbiAgICByZXRyeVxuICApO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgU29tZSBtZXRob2RzIGNvcGllZCBmcm9tIGdvb2cuZnMuXG4gKiBXZSBkb24ndCBpbmNsdWRlIGdvb2cuZnMgYmVjYXVzZSBpdCBwdWxscyBpbiBhIGJ1bmNoIG9mIERlZmVycmVkIGNvZGUgdGhhdFxuICogYmxvYXRzIHRoZSBzaXplIG9mIHRoZSByZWxlYXNlZCBiaW5hcnkuXG4gKi9cbmltcG9ydCB7IGlzTmF0aXZlQmxvYkRlZmluZWQgfSBmcm9tICcuL3R5cGUnO1xuaW1wb3J0IHsgU3RvcmFnZUVycm9yQ29kZSwgU3RvcmFnZUVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5cbmZ1bmN0aW9uIGdldEJsb2JCdWlsZGVyKCk6IHR5cGVvZiBJQmxvYkJ1aWxkZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBCbG9iQnVpbGRlcjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgV2ViS2l0QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIFdlYktpdEJsb2JCdWlsZGVyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDb25jYXRlbmF0ZXMgb25lIG9yIG1vcmUgdmFsdWVzIHRvZ2V0aGVyIGFuZCBjb252ZXJ0cyB0aGVtIHRvIGEgQmxvYi5cbiAqXG4gKiBAcGFyYW0gYXJncyBUaGUgdmFsdWVzIHRoYXQgd2lsbCBtYWtlIHVwIHRoZSByZXN1bHRpbmcgYmxvYi5cbiAqIEByZXR1cm4gVGhlIGJsb2IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCbG9iKC4uLmFyZ3M6IEFycmF5PHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcj4pOiBCbG9iIHtcbiAgY29uc3QgQmxvYkJ1aWxkZXIgPSBnZXRCbG9iQnVpbGRlcigpO1xuICBpZiAoQmxvYkJ1aWxkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGJiID0gbmV3IEJsb2JCdWlsZGVyKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBiYi5hcHBlbmQoYXJnc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBiYi5nZXRCbG9iKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSkge1xuICAgICAgcmV0dXJuIG5ldyBCbG9iKGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgU3RvcmFnZUVycm9yKFxuICAgICAgICBTdG9yYWdlRXJyb3JDb2RlLlVOU1VQUE9SVEVEX0VOVklST05NRU5ULFxuICAgICAgICBcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHNlZW0gdG8gc3VwcG9ydCBjcmVhdGluZyBCbG9ic1wiXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFNsaWNlcyB0aGUgYmxvYi4gVGhlIHJldHVybmVkIGJsb2IgY29udGFpbnMgZGF0YSBmcm9tIHRoZSBzdGFydCBieXRlXG4gKiAoaW5jbHVzaXZlKSB0aWxsIHRoZSBlbmQgYnl0ZSAoZXhjbHVzaXZlKS4gTmVnYXRpdmUgaW5kaWNlcyBjYW5ub3QgYmUgdXNlZC5cbiAqXG4gKiBAcGFyYW0gYmxvYiBUaGUgYmxvYiB0byBiZSBzbGljZWQuXG4gKiBAcGFyYW0gc3RhcnQgSW5kZXggb2YgdGhlIHN0YXJ0aW5nIGJ5dGUuXG4gKiBAcGFyYW0gZW5kIEluZGV4IG9mIHRoZSBlbmRpbmcgYnl0ZS5cbiAqIEByZXR1cm4gVGhlIGJsb2Igc2xpY2Ugb3IgbnVsbCBpZiBub3Qgc3VwcG9ydGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2xpY2VCbG9iKGJsb2I6IEJsb2IsIHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQmxvYiB8IG51bGwge1xuICBpZiAoYmxvYi53ZWJraXRTbGljZSkge1xuICAgIHJldHVybiBibG9iLndlYmtpdFNsaWNlKHN0YXJ0LCBlbmQpO1xuICB9IGVsc2UgaWYgKGJsb2IubW96U2xpY2UpIHtcbiAgICByZXR1cm4gYmxvYi5tb3pTbGljZShzdGFydCwgZW5kKTtcbiAgfSBlbHNlIGlmIChibG9iLnNsaWNlKSB7XG4gICAgcmV0dXJuIGJsb2Iuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgbWlzc2luZ1BvbHlGaWxsIH0gZnJvbSAnLi4vLi4vaW1wbGVtZW50YXRpb24vZXJyb3InO1xuXG4vKiogQ29udmVydHMgYSBCYXNlNjQgZW5jb2RlZCBzdHJpbmcgdG8gYSBiaW5hcnkgc3RyaW5nLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZUJhc2U2NChlbmNvZGVkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAodHlwZW9mIGF0b2IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbWlzc2luZ1BvbHlGaWxsKCdiYXNlLTY0Jyk7XG4gIH1cbiAgcmV0dXJuIGF0b2IoZW5jb2RlZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVVaW50OEFycmF5KGRhdGE6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICByZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGRhdGEpO1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IHVua25vd24sIGludmFsaWRGb3JtYXQgfSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCB7IGRlY29kZUJhc2U2NCB9IGZyb20gJy4uL3BsYXRmb3JtL2Jhc2U2NCc7XG5cbi8qKlxuICogQW4gZW51bWVyYXRpb24gb2YgdGhlIHBvc3NpYmxlIHN0cmluZyBmb3JtYXRzIGZvciB1cGxvYWQuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCB0eXBlIFN0cmluZ0Zvcm1hdCA9ICh0eXBlb2YgU3RyaW5nRm9ybWF0KVtrZXlvZiB0eXBlb2YgU3RyaW5nRm9ybWF0XTtcbi8qKlxuICogQW4gZW51bWVyYXRpb24gb2YgdGhlIHBvc3NpYmxlIHN0cmluZyBmb3JtYXRzIGZvciB1cGxvYWQuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBTdHJpbmdGb3JtYXQgPSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIHN0cmluZyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgXCJyYXdcIiwgdGhhdCBpcywgYXMgbm9ybWFsIHRleHQuXG4gICAqIFRoZSBzdHJpbmcgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyBVVEYtMTYsIHRoZW4gdXBsb2FkZWQgYXMgYSBVVEYtOCBieXRlXG4gICAqIHNlcXVlbmNlLlxuICAgKiBFeGFtcGxlOiBUaGUgc3RyaW5nICdIZWxsbyEgXFxcXHVkODNkXFxcXHVkZTBhJyBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXG4gICAqIDQ4IDY1IDZjIDZjIDZmIDIxIDIwIGYwIDlmIDk4IDhhXG4gICAqL1xuICBSQVc6ICdyYXcnLFxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBzdHJpbmcgc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2U2NC1lbmNvZGVkIGRhdGEuXG4gICAqIFBhZGRpbmcgY2hhcmFjdGVycyAodHJhaWxpbmcgJz0ncykgYXJlIG9wdGlvbmFsLlxuICAgKiBFeGFtcGxlOiBUaGUgc3RyaW5nICdyV21PKytFNnQ3L3Jsdz09JyBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXG4gICAqIGFkIDY5IDhlIGZiIGUxIDNhIGI3IGJmIGViIDk3XG4gICAqL1xuICBCQVNFNjQ6ICdiYXNlNjQnLFxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBzdHJpbmcgc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2U2NHVybC1lbmNvZGVkIGRhdGEuXG4gICAqIFBhZGRpbmcgY2hhcmFjdGVycyAodHJhaWxpbmcgJz0ncykgYXJlIG9wdGlvbmFsLlxuICAgKiBFeGFtcGxlOiBUaGUgc3RyaW5nICdyV21PLS1FNnQ3X3Jsdz09JyBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXG4gICAqIGFkIDY5IDhlIGZiIGUxIDNhIGI3IGJmIGViIDk3XG4gICAqL1xuICBCQVNFNjRVUkw6ICdiYXNlNjR1cmwnLFxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBzdHJpbmcgaXMgYSBkYXRhIFVSTCwgc3VjaCBhcyBvbmUgb2J0YWluZWQgZnJvbVxuICAgKiBjYW52YXMudG9EYXRhVVJMKCkuXG4gICAqIEV4YW1wbGU6IHRoZSBzdHJpbmcgJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxhYWFhJ1xuICAgKiBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXG4gICAqIDY5IGE2IDlhXG4gICAqICh0aGUgY29udGVudC10eXBlIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgaXMgYWxzbyBhcHBsaWVkLCBidXQgY2FuXG4gICAqIGJlIG92ZXJyaWRkZW4gaW4gdGhlIG1ldGFkYXRhIG9iamVjdCkuXG4gICAqL1xuICBEQVRBX1VSTDogJ2RhdGFfdXJsJ1xufSBhcyBjb25zdDtcblxuZXhwb3J0IGNsYXNzIFN0cmluZ0RhdGEge1xuICBjb250ZW50VHlwZTogc3RyaW5nIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogVWludDhBcnJheSwgY29udGVudFR5cGU/OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8IG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhdGFGcm9tU3RyaW5nKFxuICBmb3JtYXQ6IFN0cmluZ0Zvcm1hdCxcbiAgc3RyaW5nRGF0YTogc3RyaW5nXG4pOiBTdHJpbmdEYXRhIHtcbiAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICBjYXNlIFN0cmluZ0Zvcm1hdC5SQVc6XG4gICAgICByZXR1cm4gbmV3IFN0cmluZ0RhdGEodXRmOEJ5dGVzXyhzdHJpbmdEYXRhKSk7XG4gICAgY2FzZSBTdHJpbmdGb3JtYXQuQkFTRTY0OlxuICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NFVSTDpcbiAgICAgIHJldHVybiBuZXcgU3RyaW5nRGF0YShiYXNlNjRCeXRlc18oZm9ybWF0LCBzdHJpbmdEYXRhKSk7XG4gICAgY2FzZSBTdHJpbmdGb3JtYXQuREFUQV9VUkw6XG4gICAgICByZXR1cm4gbmV3IFN0cmluZ0RhdGEoXG4gICAgICAgIGRhdGFVUkxCeXRlc18oc3RyaW5nRGF0YSksXG4gICAgICAgIGRhdGFVUkxDb250ZW50VHlwZV8oc3RyaW5nRGF0YSlcbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cblxuICAvLyBhc3NlcnQoZmFsc2UpO1xuICB0aHJvdyB1bmtub3duKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1dGY4Qnl0ZXNfKHZhbHVlOiBzdHJpbmcpOiBVaW50OEFycmF5IHtcbiAgY29uc3QgYjogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjID0gdmFsdWUuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoYyA8PSAxMjcpIHtcbiAgICAgIGIucHVzaChjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGMgPD0gMjA0Nykge1xuICAgICAgICBiLnB1c2goMTkyIHwgKGMgPj4gNiksIDEyOCB8IChjICYgNjMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgoYyAmIDY0NTEyKSA9PT0gNTUyOTYpIHtcbiAgICAgICAgICAvLyBUaGUgc3RhcnQgb2YgYSBzdXJyb2dhdGUgcGFpci5cbiAgICAgICAgICBjb25zdCB2YWxpZCA9XG4gICAgICAgICAgICBpIDwgdmFsdWUubGVuZ3RoIC0gMSAmJiAodmFsdWUuY2hhckNvZGVBdChpICsgMSkgJiA2NDUxMikgPT09IDU2MzIwO1xuICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIC8vIFRoZSBzZWNvbmQgc3Vycm9nYXRlIHdhc24ndCB0aGVyZS5cbiAgICAgICAgICAgIGIucHVzaCgyMzksIDE5MSwgMTg5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaGkgPSBjO1xuICAgICAgICAgICAgY29uc3QgbG8gPSB2YWx1ZS5jaGFyQ29kZUF0KCsraSk7XG4gICAgICAgICAgICBjID0gNjU1MzYgfCAoKGhpICYgMTAyMykgPDwgMTApIHwgKGxvICYgMTAyMyk7XG4gICAgICAgICAgICBiLnB1c2goXG4gICAgICAgICAgICAgIDI0MCB8IChjID4+IDE4KSxcbiAgICAgICAgICAgICAgMTI4IHwgKChjID4+IDEyKSAmIDYzKSxcbiAgICAgICAgICAgICAgMTI4IHwgKChjID4+IDYpICYgNjMpLFxuICAgICAgICAgICAgICAxMjggfCAoYyAmIDYzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKChjICYgNjQ1MTIpID09PSA1NjMyMCkge1xuICAgICAgICAgICAgLy8gSW52YWxpZCBsb3cgc3Vycm9nYXRlLlxuICAgICAgICAgICAgYi5wdXNoKDIzOSwgMTkxLCAxODkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiLnB1c2goMjI0IHwgKGMgPj4gMTIpLCAxMjggfCAoKGMgPj4gNikgJiA2MyksIDEyOCB8IChjICYgNjMpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudEVuY29kZWRCeXRlc18odmFsdWU6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICBsZXQgZGVjb2RlZDtcbiAgdHJ5IHtcbiAgICBkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IGludmFsaWRGb3JtYXQoU3RyaW5nRm9ybWF0LkRBVEFfVVJMLCAnTWFsZm9ybWVkIGRhdGEgVVJMLicpO1xuICB9XG4gIHJldHVybiB1dGY4Qnl0ZXNfKGRlY29kZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0Qnl0ZXNfKGZvcm1hdDogU3RyaW5nRm9ybWF0LCB2YWx1ZTogc3RyaW5nKTogVWludDhBcnJheSB7XG4gIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgY2FzZSBTdHJpbmdGb3JtYXQuQkFTRTY0OiB7XG4gICAgICBjb25zdCBoYXNNaW51cyA9IHZhbHVlLmluZGV4T2YoJy0nKSAhPT0gLTE7XG4gICAgICBjb25zdCBoYXNVbmRlciA9IHZhbHVlLmluZGV4T2YoJ18nKSAhPT0gLTE7XG4gICAgICBpZiAoaGFzTWludXMgfHwgaGFzVW5kZXIpIHtcbiAgICAgICAgY29uc3QgaW52YWxpZENoYXIgPSBoYXNNaW51cyA/ICctJyA6ICdfJztcbiAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChcbiAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgXCJJbnZhbGlkIGNoYXJhY3RlciAnXCIgK1xuICAgICAgICAgICAgaW52YWxpZENoYXIgK1xuICAgICAgICAgICAgXCInIGZvdW5kOiBpcyBpdCBiYXNlNjR1cmwgZW5jb2RlZD9cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NFVSTDoge1xuICAgICAgY29uc3QgaGFzUGx1cyA9IHZhbHVlLmluZGV4T2YoJysnKSAhPT0gLTE7XG4gICAgICBjb25zdCBoYXNTbGFzaCA9IHZhbHVlLmluZGV4T2YoJy8nKSAhPT0gLTE7XG4gICAgICBpZiAoaGFzUGx1cyB8fCBoYXNTbGFzaCkge1xuICAgICAgICBjb25zdCBpbnZhbGlkQ2hhciA9IGhhc1BsdXMgPyAnKycgOiAnLyc7XG4gICAgICAgIHRocm93IGludmFsaWRGb3JtYXQoXG4gICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgIFwiSW52YWxpZCBjaGFyYWN0ZXIgJ1wiICsgaW52YWxpZENoYXIgKyBcIicgZm91bmQ6IGlzIGl0IGJhc2U2NCBlbmNvZGVkP1wiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgJysnKS5yZXBsYWNlKC9fL2csICcvJyk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAvLyBkbyBub3RoaW5nXG4gIH1cbiAgbGV0IGJ5dGVzO1xuICB0cnkge1xuICAgIGJ5dGVzID0gZGVjb2RlQmFzZTY0KHZhbHVlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICgoZSBhcyBFcnJvcikubWVzc2FnZS5pbmNsdWRlcygncG9seWZpbGwnKSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgdGhyb3cgaW52YWxpZEZvcm1hdChmb3JtYXQsICdJbnZhbGlkIGNoYXJhY3RlciBmb3VuZCcpO1xuICB9XG4gIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMubGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xuICAgIGFycmF5W2ldID0gYnl0ZXMuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmNsYXNzIERhdGFVUkxQYXJ0cyB7XG4gIGJhc2U2NDogYm9vbGVhbiA9IGZhbHNlO1xuICBjb250ZW50VHlwZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHJlc3Q6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihkYXRhVVJMOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGF0YVVSTC5tYXRjaCgvXmRhdGE6KFteLF0rKT8sLyk7XG4gICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IGludmFsaWRGb3JtYXQoXG4gICAgICAgIFN0cmluZ0Zvcm1hdC5EQVRBX1VSTCxcbiAgICAgICAgXCJNdXN0IGJlIGZvcm1hdHRlZCAnZGF0YTpbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlwiXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBtaWRkbGUgPSBtYXRjaGVzWzFdIHx8IG51bGw7XG4gICAgaWYgKG1pZGRsZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmJhc2U2NCA9IGVuZHNXaXRoKG1pZGRsZSwgJztiYXNlNjQnKTtcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSB0aGlzLmJhc2U2NFxuICAgICAgICA/IG1pZGRsZS5zdWJzdHJpbmcoMCwgbWlkZGxlLmxlbmd0aCAtICc7YmFzZTY0Jy5sZW5ndGgpXG4gICAgICAgIDogbWlkZGxlO1xuICAgIH1cbiAgICB0aGlzLnJlc3QgPSBkYXRhVVJMLnN1YnN0cmluZyhkYXRhVVJMLmluZGV4T2YoJywnKSArIDEpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXRhVVJMQnl0ZXNfKGRhdGFVcmw6IHN0cmluZyk6IFVpbnQ4QXJyYXkge1xuICBjb25zdCBwYXJ0cyA9IG5ldyBEYXRhVVJMUGFydHMoZGF0YVVybCk7XG4gIGlmIChwYXJ0cy5iYXNlNjQpIHtcbiAgICByZXR1cm4gYmFzZTY0Qnl0ZXNfKFN0cmluZ0Zvcm1hdC5CQVNFNjQsIHBhcnRzLnJlc3QpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwZXJjZW50RW5jb2RlZEJ5dGVzXyhwYXJ0cy5yZXN0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF0YVVSTENvbnRlbnRUeXBlXyhkYXRhVXJsOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3QgcGFydHMgPSBuZXcgRGF0YVVSTFBhcnRzKGRhdGFVcmwpO1xuICByZXR1cm4gcGFydHMuY29udGVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIGVuZHNXaXRoKHM6IHN0cmluZywgZW5kOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgbG9uZ0Vub3VnaCA9IHMubGVuZ3RoID49IGVuZC5sZW5ndGg7XG4gIGlmICghbG9uZ0Vub3VnaCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBzLnN1YnN0cmluZyhzLmxlbmd0aCAtIGVuZC5sZW5ndGgpID09PSBlbmQ7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZSBQcm92aWRlcyBhIEJsb2ItbGlrZSB3cmFwcGVyIGZvciB2YXJpb3VzIGJpbmFyeSB0eXBlcyAoaW5jbHVkaW5nIHRoZVxuICogbmF0aXZlIEJsb2IgdHlwZSkuIFRoaXMgbWFrZXMgaXQgcG9zc2libGUgdG8gdXBsb2FkIHR5cGVzIGxpa2UgQXJyYXlCdWZmZXJzLFxuICogbWFraW5nIHVwbG9hZHMgcG9zc2libGUgaW4gZW52aXJvbm1lbnRzIHdpdGhvdXQgdGhlIG5hdGl2ZSBCbG9iIHR5cGUuXG4gKi9cbmltcG9ydCB7IHNsaWNlQmxvYiwgZ2V0QmxvYiB9IGZyb20gJy4vZnMnO1xuaW1wb3J0IHsgU3RyaW5nRm9ybWF0LCBkYXRhRnJvbVN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7IGlzTmF0aXZlQmxvYiwgaXNOYXRpdmVCbG9iRGVmaW5lZCwgaXNTdHJpbmcgfSBmcm9tICcuL3R5cGUnO1xuXG4vKipcbiAqIEBwYXJhbSBvcHRfZWxpZGVDb3B5IC0gSWYgdHJ1ZSwgZG9lc24ndCBjb3B5IG11dGFibGUgaW5wdXQgZGF0YVxuICogICAgIChlLmcuIFVpbnQ4QXJyYXlzKS4gUGFzcyB0cnVlIG9ubHkgaWYgeW91IGtub3cgdGhlIG9iamVjdHMgd2lsbCBub3QgYmVcbiAqICAgICBtb2RpZmllZCBhZnRlciB0aGlzIGJsb2IncyBjb25zdHJ1Y3Rpb24uXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBGYnNCbG9iIHtcbiAgcHJpdmF0ZSBkYXRhXyE6IEJsb2IgfCBVaW50OEFycmF5O1xuICBwcml2YXRlIHNpemVfOiBudW1iZXI7XG4gIHByaXZhdGUgdHlwZV86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iIHwgVWludDhBcnJheSB8IEFycmF5QnVmZmVyLCBlbGlkZUNvcHk/OiBib29sZWFuKSB7XG4gICAgbGV0IHNpemU6IG51bWJlciA9IDA7XG4gICAgbGV0IGJsb2JUeXBlOiBzdHJpbmcgPSAnJztcbiAgICBpZiAoaXNOYXRpdmVCbG9iKGRhdGEpKSB7XG4gICAgICB0aGlzLmRhdGFfID0gZGF0YSBhcyBCbG9iO1xuICAgICAgc2l6ZSA9IChkYXRhIGFzIEJsb2IpLnNpemU7XG4gICAgICBibG9iVHlwZSA9IChkYXRhIGFzIEJsb2IpLnR5cGU7XG4gICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIGlmIChlbGlkZUNvcHkpIHtcbiAgICAgICAgdGhpcy5kYXRhXyA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kYXRhXyA9IG5ldyBVaW50OEFycmF5KGRhdGEuYnl0ZUxlbmd0aCk7XG4gICAgICAgIHRoaXMuZGF0YV8uc2V0KG5ldyBVaW50OEFycmF5KGRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHNpemUgPSB0aGlzLmRhdGFfLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICBpZiAoZWxpZGVDb3B5KSB7XG4gICAgICAgIHRoaXMuZGF0YV8gPSBkYXRhIGFzIFVpbnQ4QXJyYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhdGFfID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgICAgICB0aGlzLmRhdGFfLnNldChkYXRhIGFzIFVpbnQ4QXJyYXkpO1xuICAgICAgfVxuICAgICAgc2l6ZSA9IGRhdGEubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLnNpemVfID0gc2l6ZTtcbiAgICB0aGlzLnR5cGVfID0gYmxvYlR5cGU7XG4gIH1cblxuICBzaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZV87XG4gIH1cblxuICB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudHlwZV87XG4gIH1cblxuICBzbGljZShzdGFydEJ5dGU6IG51bWJlciwgZW5kQnl0ZTogbnVtYmVyKTogRmJzQmxvYiB8IG51bGwge1xuICAgIGlmIChpc05hdGl2ZUJsb2IodGhpcy5kYXRhXykpIHtcbiAgICAgIGNvbnN0IHJlYWxCbG9iID0gdGhpcy5kYXRhXyBhcyBCbG9iO1xuICAgICAgY29uc3Qgc2xpY2VkID0gc2xpY2VCbG9iKHJlYWxCbG9iLCBzdGFydEJ5dGUsIGVuZEJ5dGUpO1xuICAgICAgaWYgKHNsaWNlZCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgRmJzQmxvYihzbGljZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzbGljZSA9IG5ldyBVaW50OEFycmF5KFxuICAgICAgICAodGhpcy5kYXRhXyBhcyBVaW50OEFycmF5KS5idWZmZXIsXG4gICAgICAgIHN0YXJ0Qnl0ZSxcbiAgICAgICAgZW5kQnl0ZSAtIHN0YXJ0Qnl0ZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBuZXcgRmJzQmxvYihzbGljZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEJsb2IoLi4uYXJnczogQXJyYXk8c3RyaW5nIHwgRmJzQmxvYj4pOiBGYnNCbG9iIHwgbnVsbCB7XG4gICAgaWYgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSkge1xuICAgICAgY29uc3QgYmxvYmJ5OiBBcnJheTxCbG9iIHwgVWludDhBcnJheSB8IHN0cmluZz4gPSBhcmdzLm1hcChcbiAgICAgICAgKHZhbDogc3RyaW5nIHwgRmJzQmxvYik6IEJsb2IgfCBVaW50OEFycmF5IHwgc3RyaW5nID0+IHtcbiAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmJzQmxvYikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5kYXRhXztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gbmV3IEZic0Jsb2IoZ2V0QmxvYi5hcHBseShudWxsLCBibG9iYnkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdWludDhBcnJheXM6IFVpbnQ4QXJyYXlbXSA9IGFyZ3MubWFwKFxuICAgICAgICAodmFsOiBzdHJpbmcgfCBGYnNCbG9iKTogVWludDhBcnJheSA9PiB7XG4gICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhRnJvbVN0cmluZyhTdHJpbmdGb3JtYXQuUkFXLCB2YWwgYXMgc3RyaW5nKS5kYXRhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBCbG9icyBkb24ndCBleGlzdCwgc28gdGhpcyBoYXMgdG8gYmUgYSBVaW50OEFycmF5LlxuICAgICAgICAgICAgcmV0dXJuICh2YWwgYXMgRmJzQmxvYikuZGF0YV8gYXMgVWludDhBcnJheTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBsZXQgZmluYWxMZW5ndGggPSAwO1xuICAgICAgdWludDhBcnJheXMuZm9yRWFjaCgoYXJyYXk6IFVpbnQ4QXJyYXkpOiB2b2lkID0+IHtcbiAgICAgICAgZmluYWxMZW5ndGggKz0gYXJyYXkuYnl0ZUxlbmd0aDtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgbWVyZ2VkID0gbmV3IFVpbnQ4QXJyYXkoZmluYWxMZW5ndGgpO1xuICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgIHVpbnQ4QXJyYXlzLmZvckVhY2goKGFycmF5OiBVaW50OEFycmF5KSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBtZXJnZWRbaW5kZXgrK10gPSBhcnJheVtpXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IEZic0Jsb2IobWVyZ2VkLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWREYXRhKCk6IEJsb2IgfCBVaW50OEFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhXztcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBpc05vbkFycmF5T2JqZWN0IH0gZnJvbSAnLi90eXBlJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBPYmplY3QgcmVzdWx0aW5nIGZyb20gcGFyc2luZyB0aGUgZ2l2ZW4gSlNPTiwgb3IgbnVsbCBpZiB0aGVcbiAqIGdpdmVuIHN0cmluZyBkb2VzIG5vdCByZXByZXNlbnQgYSBKU09OIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzb25PYmplY3RPck51bGwoXG4gIHM6IHN0cmluZ1xuKTogeyBbbmFtZTogc3RyaW5nXTogdW5rbm93biB9IHwgbnVsbCB7XG4gIGxldCBvYmo7XG4gIHRyeSB7XG4gICAgb2JqID0gSlNPTi5wYXJzZShzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChpc05vbkFycmF5T2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IENvbnRhaW5zIGhlbHBlciBtZXRob2RzIGZvciBtYW5pcHVsYXRpbmcgcGF0aHMuXG4gKi9cblxuLyoqXG4gKiBAcmV0dXJuIE51bGwgaWYgdGhlIHBhdGggaXMgYWxyZWFkeSBhdCB0aGUgcm9vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcmVudChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3QgbmV3UGF0aCA9IHBhdGguc2xpY2UoMCwgaW5kZXgpO1xuICByZXR1cm4gbmV3UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkKHBhdGg6IHN0cmluZywgY2hpbGRQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjYW5vbmljYWxDaGlsZFBhdGggPSBjaGlsZFBhdGhcbiAgICAuc3BsaXQoJy8nKVxuICAgIC5maWx0ZXIoY29tcG9uZW50ID0+IGNvbXBvbmVudC5sZW5ndGggPiAwKVxuICAgIC5qb2luKCcvJyk7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjYW5vbmljYWxDaGlsZFBhdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhdGggKyAnLycgKyBjYW5vbmljYWxDaGlsZFBhdGg7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXN0IGNvbXBvbmVudCBvZiBhIHBhdGguXG4gKiAnL2Zvby9iYXInIC0+ICdiYXInXG4gKiAnL2Zvby9iYXIvYmF6LycgLT4gJ2Jhei8nXG4gKiAnL2EnIC0+ICdhJ1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGFzdENvbXBvbmVudChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBpbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy8nLCBwYXRoLmxlbmd0aCAtIDIpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhdGguc2xpY2UoaW5kZXggKyAxKTtcbiAgfVxufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBEb2N1bWVudGF0aW9uIGZvciB0aGUgbWV0YWRhdGEgZm9ybWF0XG4gKi9cbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi4vbWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBqc29uT2JqZWN0T3JOdWxsIH0gZnJvbSAnLi9qc29uJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnLi9sb2NhdGlvbic7XG5pbXBvcnQgeyBsYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYXRoJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi90eXBlJztcbmltcG9ydCB7IG1ha2VVcmwsIG1ha2VRdWVyeVN0cmluZyB9IGZyb20gJy4vdXJsJztcbmltcG9ydCB7IFJlZmVyZW5jZSB9IGZyb20gJy4uL3JlZmVyZW5jZSc7XG5pbXBvcnQgeyBGaXJlYmFzZVN0b3JhZ2VJbXBsIH0gZnJvbSAnLi4vc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBub1hmb3JtXzxUPihtZXRhZGF0YTogTWV0YWRhdGEsIHZhbHVlOiBUKTogVCB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuY2xhc3MgTWFwcGluZzxUPiB7XG4gIGxvY2FsOiBzdHJpbmc7XG4gIHdyaXRhYmxlOiBib29sZWFuO1xuICB4Zm9ybTogKHAxOiBNZXRhZGF0YSwgcDI/OiBUKSA9PiBUIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2ZXI6IHN0cmluZyxcbiAgICBsb2NhbD86IHN0cmluZyB8IG51bGwsXG4gICAgd3JpdGFibGU/OiBib29sZWFuLFxuICAgIHhmb3JtPzogKChwMTogTWV0YWRhdGEsIHAyPzogVCkgPT4gVCB8IHVuZGVmaW5lZCkgfCBudWxsXG4gICkge1xuICAgIHRoaXMubG9jYWwgPSBsb2NhbCB8fCBzZXJ2ZXI7XG4gICAgdGhpcy53cml0YWJsZSA9ICEhd3JpdGFibGU7XG4gICAgdGhpcy54Zm9ybSA9IHhmb3JtIHx8IG5vWGZvcm1fO1xuICB9XG59XG50eXBlIE1hcHBpbmdzID0gQXJyYXk8TWFwcGluZzxzdHJpbmc+IHwgTWFwcGluZzxudW1iZXI+PjtcblxuZXhwb3J0IHsgTWFwcGluZ3MgfTtcblxubGV0IG1hcHBpbmdzXzogTWFwcGluZ3MgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHhmb3JtUGF0aChmdWxsUGF0aDogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFpc1N0cmluZyhmdWxsUGF0aCkgfHwgZnVsbFBhdGgubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBmdWxsUGF0aDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGFzdENvbXBvbmVudChmdWxsUGF0aCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcHBpbmdzKCk6IE1hcHBpbmdzIHtcbiAgaWYgKG1hcHBpbmdzXykge1xuICAgIHJldHVybiBtYXBwaW5nc187XG4gIH1cbiAgY29uc3QgbWFwcGluZ3M6IE1hcHBpbmdzID0gW107XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmc8c3RyaW5nPignYnVja2V0JykpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nPHN0cmluZz4oJ2dlbmVyYXRpb24nKSk7XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmc8c3RyaW5nPignbWV0YWdlbmVyYXRpb24nKSk7XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmc8c3RyaW5nPignbmFtZScsICdmdWxsUGF0aCcsIHRydWUpKTtcblxuICBmdW5jdGlvbiBtYXBwaW5nc1hmb3JtUGF0aChcbiAgICBfbWV0YWRhdGE6IE1ldGFkYXRhLFxuICAgIGZ1bGxQYXRoOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4geGZvcm1QYXRoKGZ1bGxQYXRoKTtcbiAgfVxuICBjb25zdCBuYW1lTWFwcGluZyA9IG5ldyBNYXBwaW5nPHN0cmluZz4oJ25hbWUnKTtcbiAgbmFtZU1hcHBpbmcueGZvcm0gPSBtYXBwaW5nc1hmb3JtUGF0aDtcbiAgbWFwcGluZ3MucHVzaChuYW1lTWFwcGluZyk7XG5cbiAgLyoqXG4gICAqIENvZXJjZXMgdGhlIHNlY29uZCBwYXJhbSB0byBhIG51bWJlciwgaWYgaXQgaXMgZGVmaW5lZC5cbiAgICovXG4gIGZ1bmN0aW9uIHhmb3JtU2l6ZShcbiAgICBfbWV0YWRhdGE6IE1ldGFkYXRhLFxuICAgIHNpemU/OiBudW1iZXIgfCBzdHJpbmdcbiAgKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2l6ZU1hcHBpbmcgPSBuZXcgTWFwcGluZzxudW1iZXI+KCdzaXplJyk7XG4gIHNpemVNYXBwaW5nLnhmb3JtID0geGZvcm1TaXplO1xuICBtYXBwaW5ncy5wdXNoKHNpemVNYXBwaW5nKTtcbiAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZzxudW1iZXI+KCd0aW1lQ3JlYXRlZCcpKTtcbiAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZzxzdHJpbmc+KCd1cGRhdGVkJykpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nPHN0cmluZz4oJ21kNUhhc2gnLCBudWxsLCB0cnVlKSk7XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmc8c3RyaW5nPignY2FjaGVDb250cm9sJywgbnVsbCwgdHJ1ZSkpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nPHN0cmluZz4oJ2NvbnRlbnREaXNwb3NpdGlvbicsIG51bGwsIHRydWUpKTtcbiAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZzxzdHJpbmc+KCdjb250ZW50RW5jb2RpbmcnLCBudWxsLCB0cnVlKSk7XG4gIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmc8c3RyaW5nPignY29udGVudExhbmd1YWdlJywgbnVsbCwgdHJ1ZSkpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nPHN0cmluZz4oJ2NvbnRlbnRUeXBlJywgbnVsbCwgdHJ1ZSkpO1xuICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nPHN0cmluZz4oJ21ldGFkYXRhJywgJ2N1c3RvbU1ldGFkYXRhJywgdHJ1ZSkpO1xuICBtYXBwaW5nc18gPSBtYXBwaW5ncztcbiAgcmV0dXJuIG1hcHBpbmdzXztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlZihtZXRhZGF0YTogTWV0YWRhdGEsIHNlcnZpY2U6IEZpcmViYXNlU3RvcmFnZUltcGwpOiB2b2lkIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVSZWYoKTogUmVmZXJlbmNlIHtcbiAgICBjb25zdCBidWNrZXQ6IHN0cmluZyA9IG1ldGFkYXRhWydidWNrZXQnXSBhcyBzdHJpbmc7XG4gICAgY29uc3QgcGF0aDogc3RyaW5nID0gbWV0YWRhdGFbJ2Z1bGxQYXRoJ10gYXMgc3RyaW5nO1xuICAgIGNvbnN0IGxvYyA9IG5ldyBMb2NhdGlvbihidWNrZXQsIHBhdGgpO1xuICAgIHJldHVybiBzZXJ2aWNlLl9tYWtlU3RvcmFnZVJlZmVyZW5jZShsb2MpO1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXRhZGF0YSwgJ3JlZicsIHsgZ2V0OiBnZW5lcmF0ZVJlZiB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21SZXNvdXJjZShcbiAgc2VydmljZTogRmlyZWJhc2VTdG9yYWdlSW1wbCxcbiAgcmVzb3VyY2U6IHsgW25hbWU6IHN0cmluZ106IHVua25vd24gfSxcbiAgbWFwcGluZ3M6IE1hcHBpbmdzXG4pOiBNZXRhZGF0YSB7XG4gIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHt9IGFzIE1ldGFkYXRhO1xuICBtZXRhZGF0YVsndHlwZSddID0gJ2ZpbGUnO1xuICBjb25zdCBsZW4gPSBtYXBwaW5ncy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBtYXBwaW5nID0gbWFwcGluZ3NbaV07XG4gICAgbWV0YWRhdGFbbWFwcGluZy5sb2NhbF0gPSAobWFwcGluZyBhcyBNYXBwaW5nPHVua25vd24+KS54Zm9ybShcbiAgICAgIG1ldGFkYXRhLFxuICAgICAgcmVzb3VyY2VbbWFwcGluZy5zZXJ2ZXJdXG4gICAgKTtcbiAgfVxuICBhZGRSZWYobWV0YWRhdGEsIHNlcnZpY2UpO1xuICByZXR1cm4gbWV0YWRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUmVzb3VyY2VTdHJpbmcoXG4gIHNlcnZpY2U6IEZpcmViYXNlU3RvcmFnZUltcGwsXG4gIHJlc291cmNlU3RyaW5nOiBzdHJpbmcsXG4gIG1hcHBpbmdzOiBNYXBwaW5nc1xuKTogTWV0YWRhdGEgfCBudWxsIHtcbiAgY29uc3Qgb2JqID0ganNvbk9iamVjdE9yTnVsbChyZXNvdXJjZVN0cmluZyk7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCByZXNvdXJjZSA9IG9iaiBhcyBNZXRhZGF0YTtcbiAgcmV0dXJuIGZyb21SZXNvdXJjZShzZXJ2aWNlLCByZXNvdXJjZSwgbWFwcGluZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG93bmxvYWRVcmxGcm9tUmVzb3VyY2VTdHJpbmcoXG4gIG1ldGFkYXRhOiBNZXRhZGF0YSxcbiAgcmVzb3VyY2VTdHJpbmc6IHN0cmluZyxcbiAgaG9zdDogc3RyaW5nLFxuICBwcm90b2NvbDogc3RyaW5nXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgY29uc3Qgb2JqID0ganNvbk9iamVjdE9yTnVsbChyZXNvdXJjZVN0cmluZyk7XG4gIGlmIChvYmogPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoIWlzU3RyaW5nKG9ialsnZG93bmxvYWRUb2tlbnMnXSkpIHtcbiAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgb2JqZWN0cyBhcmUgdXBsb2FkZWQgdGhyb3VnaCBHQ1MgYW5kIHJldHJpZXZlZFxuICAgIC8vIHRocm91Z2ggbGlzdCwgc28gd2UgZG9uJ3Qgd2FudCB0byB0aHJvdyBhbiBFcnJvci5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB0b2tlbnM6IHN0cmluZyA9IG9ialsnZG93bmxvYWRUb2tlbnMnXSBhcyBzdHJpbmc7XG4gIGlmICh0b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuICBjb25zdCB0b2tlbnNMaXN0ID0gdG9rZW5zLnNwbGl0KCcsJyk7XG4gIGNvbnN0IHVybHMgPSB0b2tlbnNMaXN0Lm1hcCgodG9rZW46IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgYnVja2V0OiBzdHJpbmcgPSBtZXRhZGF0YVsnYnVja2V0J10gYXMgc3RyaW5nO1xuICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IG1ldGFkYXRhWydmdWxsUGF0aCddIGFzIHN0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0ID0gJy9iLycgKyBlbmNvZGUoYnVja2V0KSArICcvby8nICsgZW5jb2RlKHBhdGgpO1xuICAgIGNvbnN0IGJhc2UgPSBtYWtlVXJsKHVybFBhcnQsIGhvc3QsIHByb3RvY29sKTtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IG1ha2VRdWVyeVN0cmluZyh7XG4gICAgICBhbHQ6ICdtZWRpYScsXG4gICAgICB0b2tlblxuICAgIH0pO1xuICAgIHJldHVybiBiYXNlICsgcXVlcnlTdHJpbmc7XG4gIH0pO1xuICByZXR1cm4gdXJsc1swXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmVzb3VyY2VTdHJpbmcoXG4gIG1ldGFkYXRhOiBQYXJ0aWFsPE1ldGFkYXRhPixcbiAgbWFwcGluZ3M6IE1hcHBpbmdzXG4pOiBzdHJpbmcge1xuICBjb25zdCByZXNvdXJjZToge1xuICAgIFtwcm9wOiBzdHJpbmddOiB1bmtub3duO1xuICB9ID0ge307XG4gIGNvbnN0IGxlbiA9IG1hcHBpbmdzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5nc1tpXTtcbiAgICBpZiAobWFwcGluZy53cml0YWJsZSkge1xuICAgICAgcmVzb3VyY2VbbWFwcGluZy5zZXJ2ZXJdID0gbWV0YWRhdGFbbWFwcGluZy5sb2NhbF07XG4gICAgfVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXNvdXJjZSk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IERvY3VtZW50YXRpb24gZm9yIHRoZSBsaXN0T3B0aW9ucyBhbmQgbGlzdFJlc3VsdCBmb3JtYXRcbiAqL1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuL2xvY2F0aW9uJztcbmltcG9ydCB7IGpzb25PYmplY3RPck51bGwgfSBmcm9tICcuL2pzb24nO1xuaW1wb3J0IHsgTGlzdFJlc3VsdCB9IGZyb20gJy4uL2xpc3QnO1xuaW1wb3J0IHsgRmlyZWJhc2VTdG9yYWdlSW1wbCB9IGZyb20gJy4uL3NlcnZpY2UnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIHNpbXBsaWZpZWQgb2JqZWN0IG1ldGFkYXRhIHJldHVybmVkIGJ5IExpc3QgQVBJLlxuICogT3RoZXIgZmllbGRzIGFyZSBmaWx0ZXJlZCBiZWNhdXNlIGxpc3QgaW4gRmlyZWJhc2UgUnVsZXMgZG9lcyBub3QgZ3JhbnRcbiAqIHRoZSBwZXJtaXNzaW9uIHRvIHJlYWQgdGhlIG1ldGFkYXRhLlxuICovXG5pbnRlcmZhY2UgTGlzdE1ldGFkYXRhUmVzcG9uc2Uge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJ1Y2tldDogc3RyaW5nO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIEpTT04gcmVzcG9uc2Ugb2YgTGlzdCBBUEkuXG4gKi9cbmludGVyZmFjZSBMaXN0UmVzdWx0UmVzcG9uc2Uge1xuICBwcmVmaXhlczogc3RyaW5nW107XG4gIGl0ZW1zOiBMaXN0TWV0YWRhdGFSZXNwb25zZVtdO1xuICBuZXh0UGFnZVRva2VuPzogc3RyaW5nO1xufVxuXG5jb25zdCBQUkVGSVhFU19LRVkgPSAncHJlZml4ZXMnO1xuY29uc3QgSVRFTVNfS0VZID0gJ2l0ZW1zJztcblxuZnVuY3Rpb24gZnJvbUJhY2tlbmRSZXNwb25zZShcbiAgc2VydmljZTogRmlyZWJhc2VTdG9yYWdlSW1wbCxcbiAgYnVja2V0OiBzdHJpbmcsXG4gIHJlc291cmNlOiBMaXN0UmVzdWx0UmVzcG9uc2Vcbik6IExpc3RSZXN1bHQge1xuICBjb25zdCBsaXN0UmVzdWx0OiBMaXN0UmVzdWx0ID0ge1xuICAgIHByZWZpeGVzOiBbXSxcbiAgICBpdGVtczogW10sXG4gICAgbmV4dFBhZ2VUb2tlbjogcmVzb3VyY2VbJ25leHRQYWdlVG9rZW4nXVxuICB9O1xuICBpZiAocmVzb3VyY2VbUFJFRklYRVNfS0VZXSkge1xuICAgIGZvciAoY29uc3QgcGF0aCBvZiByZXNvdXJjZVtQUkVGSVhFU19LRVldKSB7XG4gICAgICBjb25zdCBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2ggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSBzZXJ2aWNlLl9tYWtlU3RvcmFnZVJlZmVyZW5jZShcbiAgICAgICAgbmV3IExvY2F0aW9uKGJ1Y2tldCwgcGF0aFdpdGhvdXRUcmFpbGluZ1NsYXNoKVxuICAgICAgKTtcbiAgICAgIGxpc3RSZXN1bHQucHJlZml4ZXMucHVzaChyZWZlcmVuY2UpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZXNvdXJjZVtJVEVNU19LRVldKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHJlc291cmNlW0lURU1TX0tFWV0pIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNlcnZpY2UuX21ha2VTdG9yYWdlUmVmZXJlbmNlKFxuICAgICAgICBuZXcgTG9jYXRpb24oYnVja2V0LCBpdGVtWyduYW1lJ10pXG4gICAgICApO1xuICAgICAgbGlzdFJlc3VsdC5pdGVtcy5wdXNoKHJlZmVyZW5jZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsaXN0UmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJlc3BvbnNlU3RyaW5nKFxuICBzZXJ2aWNlOiBGaXJlYmFzZVN0b3JhZ2VJbXBsLFxuICBidWNrZXQ6IHN0cmluZyxcbiAgcmVzb3VyY2VTdHJpbmc6IHN0cmluZ1xuKTogTGlzdFJlc3VsdCB8IG51bGwge1xuICBjb25zdCBvYmogPSBqc29uT2JqZWN0T3JOdWxsKHJlc291cmNlU3RyaW5nKTtcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHJlc291cmNlID0gb2JqIGFzIHVua25vd24gYXMgTGlzdFJlc3VsdFJlc3BvbnNlO1xuICByZXR1cm4gZnJvbUJhY2tlbmRSZXNwb25zZShzZXJ2aWNlLCBidWNrZXQsIHJlc291cmNlKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgU3RvcmFnZUVycm9yIH0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBIZWFkZXJzLCBDb25uZWN0aW9uLCBDb25uZWN0aW9uVHlwZSB9IGZyb20gJy4vY29ubmVjdGlvbic7XG5cbi8qKlxuICogVHlwZSBmb3IgdXJsIHBhcmFtcyBzdG9yZWQgaW4gUmVxdWVzdEluZm8uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXJsUGFyYW1zIHtcbiAgW25hbWU6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBzZXJ2ZXIgcmVzcG9uc2UgdG8gdGhlIEFQSSB0eXBlIGV4cGVjdGVkIGJ5IHRoZVxuICogU0RLLlxuICpcbiAqIEBwYXJhbSBJIC0gdGhlIHR5cGUgb2YgdGhlIGJhY2tlbmQncyBuZXR3b3JrIHJlc3BvbnNlXG4gKiBAcGFyYW0gTyAtIHRoZSBvdXRwdXQgcmVzcG9uc2UgdHlwZSB1c2VkIGJ5IHRoZSByZXN0IG9mIHRoZSBTREsuXG4gKi9cbmV4cG9ydCB0eXBlIFJlcXVlc3RIYW5kbGVyPEkgZXh0ZW5kcyBDb25uZWN0aW9uVHlwZSwgTz4gPSAoXG4gIGNvbm5lY3Rpb246IENvbm5lY3Rpb248ST4sXG4gIHJlc3BvbnNlOiBJXG4pID0+IE87XG5cbi8qKiBBIGZ1bmN0aW9uIHRvIGhhbmRsZSBhbiBlcnJvci4gKi9cbmV4cG9ydCB0eXBlIEVycm9ySGFuZGxlciA9IChcbiAgY29ubmVjdGlvbjogQ29ubmVjdGlvbjxDb25uZWN0aW9uVHlwZT4sXG4gIHJlc3BvbnNlOiBTdG9yYWdlRXJyb3JcbikgPT4gU3RvcmFnZUVycm9yO1xuXG4vKipcbiAqIENvbnRhaW5zIGEgZnVsbHkgc3BlY2lmaWVkIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIEkgLSB0aGUgdHlwZSBvZiB0aGUgYmFja2VuZCdzIG5ldHdvcmsgcmVzcG9uc2UuXG4gKiBAcGFyYW0gTyAtIHRoZSBvdXRwdXQgcmVzcG9uc2UgdHlwZSB1c2VkIGJ5IHRoZSByZXN0IG9mIHRoZSBTREsuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXF1ZXN0SW5mbzxJIGV4dGVuZHMgQ29ubmVjdGlvblR5cGUsIE8+IHtcbiAgdXJsUGFyYW1zOiBVcmxQYXJhbXMgPSB7fTtcbiAgaGVhZGVyczogSGVhZGVycyA9IHt9O1xuICBib2R5OiBCbG9iIHwgc3RyaW5nIHwgVWludDhBcnJheSB8IG51bGwgPSBudWxsO1xuICBlcnJvckhhbmRsZXI6IEVycm9ySGFuZGxlciB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2l0aCB0aGUgY3VycmVudCBudW1iZXIgb2YgYnl0ZXMgdXBsb2FkZWQgYW5kIHRvdGFsIHNpemUgKC0xIGlmIG5vdFxuICAgKiBjb21wdXRhYmxlKSBvZiB0aGUgcmVxdWVzdCBib2R5IChpLmUuIHVzZWQgdG8gcmVwb3J0IHVwbG9hZCBwcm9ncmVzcykuXG4gICAqL1xuICBwcm9ncmVzc0NhbGxiYWNrOiAoKHAxOiBudW1iZXIsIHAyOiBudW1iZXIpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gIHN1Y2Nlc3NDb2RlczogbnVtYmVyW10gPSBbMjAwXTtcbiAgYWRkaXRpb25hbFJldHJ5Q29kZXM6IG51bWJlcltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHVybDogc3RyaW5nLFxuICAgIHB1YmxpYyBtZXRob2Q6IHN0cmluZyxcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB3aXRoIHdoaWNoIHRvIHJlc29sdmUgdGhlIHJlcXVlc3QncyBwcm9taXNlLiBPbmx5IGNhbGxlZFxuICAgICAqIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWwuIFRocm93IGZyb20gdGhpcyBmdW5jdGlvbiB0byByZWplY3QgdGhlXG4gICAgICogcmV0dXJuZWQgUmVxdWVzdCdzIHByb21pc2Ugd2l0aCB0aGUgdGhyb3duIGVycm9yLlxuICAgICAqIE5vdGU6IFRoZSBYaHJJbyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBtYXkgYmUgcmV1c2VkIGFmdGVyIHRoaXMgY2FsbGJhY2tcbiAgICAgKiByZXR1cm5zLiBEbyBub3Qga2VlcCBhIHJlZmVyZW5jZSB0byBpdCBpbiBhbnkgd2F5LlxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGVyOiBSZXF1ZXN0SGFuZGxlcjxJLCBPPixcbiAgICBwdWJsaWMgdGltZW91dDogbnVtYmVyXG4gICkge31cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgRGVmaW5lcyBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBuZXR3b3JrLlxuICovXG5cbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi4vbWV0YWRhdGEnO1xuaW1wb3J0IHsgTGlzdFJlc3VsdCB9IGZyb20gJy4uL2xpc3QnO1xuaW1wb3J0IHsgRmJzQmxvYiB9IGZyb20gJy4vYmxvYic7XG5pbXBvcnQge1xuICBTdG9yYWdlRXJyb3IsXG4gIGNhbm5vdFNsaWNlQmxvYixcbiAgdW5hdXRoZW50aWNhdGVkLFxuICBxdW90YUV4Y2VlZGVkLFxuICB1bmF1dGhvcml6ZWQsXG4gIG9iamVjdE5vdEZvdW5kLFxuICBzZXJ2ZXJGaWxlV3JvbmdTaXplLFxuICB1bmtub3duLFxuICB1bmF1dGhvcml6ZWRBcHBcbn0gZnJvbSAnLi9lcnJvcic7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJy4vbG9jYXRpb24nO1xuaW1wb3J0IHtcbiAgTWFwcGluZ3MsXG4gIGZyb21SZXNvdXJjZVN0cmluZyxcbiAgZG93bmxvYWRVcmxGcm9tUmVzb3VyY2VTdHJpbmcsXG4gIHRvUmVzb3VyY2VTdHJpbmdcbn0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBmcm9tUmVzcG9uc2VTdHJpbmcgfSBmcm9tICcuL2xpc3QnO1xuaW1wb3J0IHsgUmVxdWVzdEluZm8sIFVybFBhcmFtcyB9IGZyb20gJy4vcmVxdWVzdGluZm8nO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuL3R5cGUnO1xuaW1wb3J0IHsgbWFrZVVybCB9IGZyb20gJy4vdXJsJztcbmltcG9ydCB7IENvbm5lY3Rpb24sIENvbm5lY3Rpb25UeXBlIH0gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCB7IEZpcmViYXNlU3RvcmFnZUltcGwgfSBmcm9tICcuLi9zZXJ2aWNlJztcblxuLyoqXG4gKiBUaHJvd3MgdGhlIFVOS05PV04gU3RvcmFnZUVycm9yIGlmIGNuZG4gaXMgZmFsc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyQ2hlY2soY25kbjogYm9vbGVhbik6IHZvaWQge1xuICBpZiAoIWNuZG4pIHtcbiAgICB0aHJvdyB1bmtub3duKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGFkYXRhSGFuZGxlcihcbiAgc2VydmljZTogRmlyZWJhc2VTdG9yYWdlSW1wbCxcbiAgbWFwcGluZ3M6IE1hcHBpbmdzXG4pOiAocDE6IENvbm5lY3Rpb248c3RyaW5nPiwgcDI6IHN0cmluZykgPT4gTWV0YWRhdGEge1xuICBmdW5jdGlvbiBoYW5kbGVyKHhocjogQ29ubmVjdGlvbjxzdHJpbmc+LCB0ZXh0OiBzdHJpbmcpOiBNZXRhZGF0YSB7XG4gICAgY29uc3QgbWV0YWRhdGEgPSBmcm9tUmVzb3VyY2VTdHJpbmcoc2VydmljZSwgdGV4dCwgbWFwcGluZ3MpO1xuICAgIGhhbmRsZXJDaGVjayhtZXRhZGF0YSAhPT0gbnVsbCk7XG4gICAgcmV0dXJuIG1ldGFkYXRhIGFzIE1ldGFkYXRhO1xuICB9XG4gIHJldHVybiBoYW5kbGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlzdEhhbmRsZXIoXG4gIHNlcnZpY2U6IEZpcmViYXNlU3RvcmFnZUltcGwsXG4gIGJ1Y2tldDogc3RyaW5nXG4pOiAocDE6IENvbm5lY3Rpb248c3RyaW5nPiwgcDI6IHN0cmluZykgPT4gTGlzdFJlc3VsdCB7XG4gIGZ1bmN0aW9uIGhhbmRsZXIoeGhyOiBDb25uZWN0aW9uPHN0cmluZz4sIHRleHQ6IHN0cmluZyk6IExpc3RSZXN1bHQge1xuICAgIGNvbnN0IGxpc3RSZXN1bHQgPSBmcm9tUmVzcG9uc2VTdHJpbmcoc2VydmljZSwgYnVja2V0LCB0ZXh0KTtcbiAgICBoYW5kbGVyQ2hlY2sobGlzdFJlc3VsdCAhPT0gbnVsbCk7XG4gICAgcmV0dXJuIGxpc3RSZXN1bHQgYXMgTGlzdFJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFuZGxlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvd25sb2FkVXJsSGFuZGxlcihcbiAgc2VydmljZTogRmlyZWJhc2VTdG9yYWdlSW1wbCxcbiAgbWFwcGluZ3M6IE1hcHBpbmdzXG4pOiAocDE6IENvbm5lY3Rpb248c3RyaW5nPiwgcDI6IHN0cmluZykgPT4gc3RyaW5nIHwgbnVsbCB7XG4gIGZ1bmN0aW9uIGhhbmRsZXIoeGhyOiBDb25uZWN0aW9uPHN0cmluZz4sIHRleHQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IG1ldGFkYXRhID0gZnJvbVJlc291cmNlU3RyaW5nKHNlcnZpY2UsIHRleHQsIG1hcHBpbmdzKTtcbiAgICBoYW5kbGVyQ2hlY2sobWV0YWRhdGEgIT09IG51bGwpO1xuICAgIHJldHVybiBkb3dubG9hZFVybEZyb21SZXNvdXJjZVN0cmluZyhcbiAgICAgIG1ldGFkYXRhIGFzIE1ldGFkYXRhLFxuICAgICAgdGV4dCxcbiAgICAgIHNlcnZpY2UuaG9zdCxcbiAgICAgIHNlcnZpY2UuX3Byb3RvY29sXG4gICAgKTtcbiAgfVxuICByZXR1cm4gaGFuZGxlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYXJlZEVycm9ySGFuZGxlcihcbiAgbG9jYXRpb246IExvY2F0aW9uXG4pOiAocDE6IENvbm5lY3Rpb248Q29ubmVjdGlvblR5cGU+LCBwMjogU3RvcmFnZUVycm9yKSA9PiBTdG9yYWdlRXJyb3Ige1xuICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoXG4gICAgeGhyOiBDb25uZWN0aW9uPENvbm5lY3Rpb25UeXBlPixcbiAgICBlcnI6IFN0b3JhZ2VFcnJvclxuICApOiBTdG9yYWdlRXJyb3Ige1xuICAgIGxldCBuZXdFcnI6IFN0b3JhZ2VFcnJvcjtcbiAgICBpZiAoeGhyLmdldFN0YXR1cygpID09PSA0MDEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gVGhpcyBleGFjdCBtZXNzYWdlIHN0cmluZyBpcyB0aGUgb25seSBjb25zaXN0ZW50IHBhcnQgb2YgdGhlXG4gICAgICAgIC8vIHNlcnZlcidzIGVycm9yIHJlc3BvbnNlIHRoYXQgaWRlbnRpZmllcyBpdCBhcyBhbiBBcHAgQ2hlY2sgZXJyb3IuXG4gICAgICAgIHhoci5nZXRFcnJvclRleHQoKS5pbmNsdWRlcygnRmlyZWJhc2UgQXBwIENoZWNrIHRva2VuIGlzIGludmFsaWQnKVxuICAgICAgKSB7XG4gICAgICAgIG5ld0VyciA9IHVuYXV0aG9yaXplZEFwcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RXJyID0gdW5hdXRoZW50aWNhdGVkKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4aHIuZ2V0U3RhdHVzKCkgPT09IDQwMikge1xuICAgICAgICBuZXdFcnIgPSBxdW90YUV4Y2VlZGVkKGxvY2F0aW9uLmJ1Y2tldCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoeGhyLmdldFN0YXR1cygpID09PSA0MDMpIHtcbiAgICAgICAgICBuZXdFcnIgPSB1bmF1dGhvcml6ZWQobG9jYXRpb24ucGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3RXJyID0gZXJyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG5ld0Vyci5zdGF0dXMgPSB4aHIuZ2V0U3RhdHVzKCk7XG4gICAgbmV3RXJyLnNlcnZlclJlc3BvbnNlID0gZXJyLnNlcnZlclJlc3BvbnNlO1xuICAgIHJldHVybiBuZXdFcnI7XG4gIH1cbiAgcmV0dXJuIGVycm9ySGFuZGxlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdEVycm9ySGFuZGxlcihcbiAgbG9jYXRpb246IExvY2F0aW9uXG4pOiAocDE6IENvbm5lY3Rpb248Q29ubmVjdGlvblR5cGU+LCBwMjogU3RvcmFnZUVycm9yKSA9PiBTdG9yYWdlRXJyb3Ige1xuICBjb25zdCBzaGFyZWQgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuXG4gIGZ1bmN0aW9uIGVycm9ySGFuZGxlcihcbiAgICB4aHI6IENvbm5lY3Rpb248Q29ubmVjdGlvblR5cGU+LFxuICAgIGVycjogU3RvcmFnZUVycm9yXG4gICk6IFN0b3JhZ2VFcnJvciB7XG4gICAgbGV0IG5ld0VyciA9IHNoYXJlZCh4aHIsIGVycik7XG4gICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDA0KSB7XG4gICAgICBuZXdFcnIgPSBvYmplY3ROb3RGb3VuZChsb2NhdGlvbi5wYXRoKTtcbiAgICB9XG4gICAgbmV3RXJyLnNlcnZlclJlc3BvbnNlID0gZXJyLnNlcnZlclJlc3BvbnNlO1xuICAgIHJldHVybiBuZXdFcnI7XG4gIH1cbiAgcmV0dXJuIGVycm9ySGFuZGxlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGFkYXRhKFxuICBzZXJ2aWNlOiBGaXJlYmFzZVN0b3JhZ2VJbXBsLFxuICBsb2NhdGlvbjogTG9jYXRpb24sXG4gIG1hcHBpbmdzOiBNYXBwaW5nc1xuKTogUmVxdWVzdEluZm88c3RyaW5nLCBNZXRhZGF0YT4ge1xuICBjb25zdCB1cmxQYXJ0ID0gbG9jYXRpb24uZnVsbFNlcnZlclVybCgpO1xuICBjb25zdCB1cmwgPSBtYWtlVXJsKHVybFBhcnQsIHNlcnZpY2UuaG9zdCwgc2VydmljZS5fcHJvdG9jb2wpO1xuICBjb25zdCBtZXRob2QgPSAnR0VUJztcbiAgY29uc3QgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyhcbiAgICB1cmwsXG4gICAgbWV0aG9kLFxuICAgIG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncyksXG4gICAgdGltZW91dFxuICApO1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICByZXR1cm4gcmVxdWVzdEluZm87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaXN0KFxuICBzZXJ2aWNlOiBGaXJlYmFzZVN0b3JhZ2VJbXBsLFxuICBsb2NhdGlvbjogTG9jYXRpb24sXG4gIGRlbGltaXRlcj86IHN0cmluZyxcbiAgcGFnZVRva2VuPzogc3RyaW5nIHwgbnVsbCxcbiAgbWF4UmVzdWx0cz86IG51bWJlciB8IG51bGxcbik6IFJlcXVlc3RJbmZvPHN0cmluZywgTGlzdFJlc3VsdD4ge1xuICBjb25zdCB1cmxQYXJhbXM6IFVybFBhcmFtcyA9IHt9O1xuICBpZiAobG9jYXRpb24uaXNSb290KSB7XG4gICAgdXJsUGFyYW1zWydwcmVmaXgnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIHVybFBhcmFtc1sncHJlZml4J10gPSBsb2NhdGlvbi5wYXRoICsgJy8nO1xuICB9XG4gIGlmIChkZWxpbWl0ZXIgJiYgZGVsaW1pdGVyLmxlbmd0aCA+IDApIHtcbiAgICB1cmxQYXJhbXNbJ2RlbGltaXRlciddID0gZGVsaW1pdGVyO1xuICB9XG4gIGlmIChwYWdlVG9rZW4pIHtcbiAgICB1cmxQYXJhbXNbJ3BhZ2VUb2tlbiddID0gcGFnZVRva2VuO1xuICB9XG4gIGlmIChtYXhSZXN1bHRzKSB7XG4gICAgdXJsUGFyYW1zWydtYXhSZXN1bHRzJ10gPSBtYXhSZXN1bHRzO1xuICB9XG4gIGNvbnN0IHVybFBhcnQgPSBsb2NhdGlvbi5idWNrZXRPbmx5U2VydmVyVXJsKCk7XG4gIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XG4gIGNvbnN0IG1ldGhvZCA9ICdHRVQnO1xuICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKFxuICAgIHVybCxcbiAgICBtZXRob2QsXG4gICAgbGlzdEhhbmRsZXIoc2VydmljZSwgbG9jYXRpb24uYnVja2V0KSxcbiAgICB0aW1lb3V0XG4gICk7XG4gIHJlcXVlc3RJbmZvLnVybFBhcmFtcyA9IHVybFBhcmFtcztcbiAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcbiAgcmV0dXJuIHJlcXVlc3RJbmZvO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qnl0ZXM8SSBleHRlbmRzIENvbm5lY3Rpb25UeXBlPihcbiAgc2VydmljZTogRmlyZWJhc2VTdG9yYWdlSW1wbCxcbiAgbG9jYXRpb246IExvY2F0aW9uLFxuICBtYXhEb3dubG9hZFNpemVCeXRlcz86IG51bWJlclxuKTogUmVxdWVzdEluZm88SSwgST4ge1xuICBjb25zdCB1cmxQYXJ0ID0gbG9jYXRpb24uZnVsbFNlcnZlclVybCgpO1xuICBjb25zdCB1cmwgPSBtYWtlVXJsKHVybFBhcnQsIHNlcnZpY2UuaG9zdCwgc2VydmljZS5fcHJvdG9jb2wpICsgJz9hbHQ9bWVkaWEnO1xuICBjb25zdCBtZXRob2QgPSAnR0VUJztcbiAgY29uc3QgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyhcbiAgICB1cmwsXG4gICAgbWV0aG9kLFxuICAgIChfOiBDb25uZWN0aW9uPEk+LCBkYXRhOiBJKSA9PiBkYXRhLFxuICAgIHRpbWVvdXRcbiAgKTtcbiAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gb2JqZWN0RXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcbiAgaWYgKG1heERvd25sb2FkU2l6ZUJ5dGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzWydSYW5nZSddID0gYGJ5dGVzPTAtJHttYXhEb3dubG9hZFNpemVCeXRlc31gO1xuICAgIHJlcXVlc3RJbmZvLnN1Y2Nlc3NDb2RlcyA9IFsyMDAgLyogT0sgKi8sIDIwNiAvKiBQYXJ0aWFsIENvbnRlbnQgKi9dO1xuICB9XG4gIHJldHVybiByZXF1ZXN0SW5mbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvd25sb2FkVXJsKFxuICBzZXJ2aWNlOiBGaXJlYmFzZVN0b3JhZ2VJbXBsLFxuICBsb2NhdGlvbjogTG9jYXRpb24sXG4gIG1hcHBpbmdzOiBNYXBwaW5nc1xuKTogUmVxdWVzdEluZm88c3RyaW5nLCBzdHJpbmcgfCBudWxsPiB7XG4gIGNvbnN0IHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XG4gIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XG4gIGNvbnN0IG1ldGhvZCA9ICdHRVQnO1xuICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKFxuICAgIHVybCxcbiAgICBtZXRob2QsXG4gICAgZG93bmxvYWRVcmxIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSxcbiAgICB0aW1lb3V0XG4gICk7XG4gIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XG4gIHJldHVybiByZXF1ZXN0SW5mbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1ldGFkYXRhKFxuICBzZXJ2aWNlOiBGaXJlYmFzZVN0b3JhZ2VJbXBsLFxuICBsb2NhdGlvbjogTG9jYXRpb24sXG4gIG1ldGFkYXRhOiBQYXJ0aWFsPE1ldGFkYXRhPixcbiAgbWFwcGluZ3M6IE1hcHBpbmdzXG4pOiBSZXF1ZXN0SW5mbzxzdHJpbmcsIE1ldGFkYXRhPiB7XG4gIGNvbnN0IHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XG4gIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XG4gIGNvbnN0IG1ldGhvZCA9ICdQQVRDSCc7XG4gIGNvbnN0IGJvZHkgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhLCBtYXBwaW5ncyk7XG4gIGNvbnN0IGhlYWRlcnMgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcgfTtcbiAgY29uc3QgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyhcbiAgICB1cmwsXG4gICAgbWV0aG9kLFxuICAgIG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncyksXG4gICAgdGltZW91dFxuICApO1xuICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcbiAgcmVxdWVzdEluZm8uYm9keSA9IGJvZHk7XG4gIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XG4gIHJldHVybiByZXF1ZXN0SW5mbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU9iamVjdChcbiAgc2VydmljZTogRmlyZWJhc2VTdG9yYWdlSW1wbCxcbiAgbG9jYXRpb246IExvY2F0aW9uXG4pOiBSZXF1ZXN0SW5mbzxzdHJpbmcsIHZvaWQ+IHtcbiAgY29uc3QgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcbiAgY29uc3QgdXJsID0gbWFrZVVybCh1cmxQYXJ0LCBzZXJ2aWNlLmhvc3QsIHNlcnZpY2UuX3Byb3RvY29sKTtcbiAgY29uc3QgbWV0aG9kID0gJ0RFTEVURSc7XG4gIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcblxuICBmdW5jdGlvbiBoYW5kbGVyKF94aHI6IENvbm5lY3Rpb248c3RyaW5nPiwgX3RleHQ6IHN0cmluZyk6IHZvaWQge31cbiAgY29uc3QgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIGhhbmRsZXIsIHRpbWVvdXQpO1xuICByZXF1ZXN0SW5mby5zdWNjZXNzQ29kZXMgPSBbMjAwLCAyMDRdO1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICByZXR1cm4gcmVxdWVzdEluZm87XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVDb250ZW50VHlwZV8oXG4gIG1ldGFkYXRhOiBNZXRhZGF0YSB8IG51bGwsXG4gIGJsb2I6IEZic0Jsb2IgfCBudWxsXG4pOiBzdHJpbmcge1xuICByZXR1cm4gKFxuICAgIChtZXRhZGF0YSAmJiBtZXRhZGF0YVsnY29udGVudFR5cGUnXSkgfHxcbiAgICAoYmxvYiAmJiBibG9iLnR5cGUoKSkgfHxcbiAgICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ1xuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWV0YWRhdGFGb3JVcGxvYWRfKFxuICBsb2NhdGlvbjogTG9jYXRpb24sXG4gIGJsb2I6IEZic0Jsb2IsXG4gIG1ldGFkYXRhPzogTWV0YWRhdGEgfCBudWxsXG4pOiBNZXRhZGF0YSB7XG4gIGNvbnN0IG1ldGFkYXRhQ2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCBtZXRhZGF0YSk7XG4gIG1ldGFkYXRhQ2xvbmVbJ2Z1bGxQYXRoJ10gPSBsb2NhdGlvbi5wYXRoO1xuICBtZXRhZGF0YUNsb25lWydzaXplJ10gPSBibG9iLnNpemUoKTtcbiAgaWYgKCFtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddKSB7XG4gICAgbWV0YWRhdGFDbG9uZVsnY29udGVudFR5cGUnXSA9IGRldGVybWluZUNvbnRlbnRUeXBlXyhudWxsLCBibG9iKTtcbiAgfVxuICByZXR1cm4gbWV0YWRhdGFDbG9uZTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIFJlcXVlc3RJbmZvIGZvciB1cGxvYWRzIGFzIENvbnRlbnQtVHlwZTogbXVsdGlwYXJ0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwYXJ0VXBsb2FkKFxuICBzZXJ2aWNlOiBGaXJlYmFzZVN0b3JhZ2VJbXBsLFxuICBsb2NhdGlvbjogTG9jYXRpb24sXG4gIG1hcHBpbmdzOiBNYXBwaW5ncyxcbiAgYmxvYjogRmJzQmxvYixcbiAgbWV0YWRhdGE/OiBNZXRhZGF0YSB8IG51bGxcbik6IFJlcXVlc3RJbmZvPHN0cmluZywgTWV0YWRhdGE+IHtcbiAgY29uc3QgdXJsUGFydCA9IGxvY2F0aW9uLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTtcbiAgY29uc3QgaGVhZGVyczogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgJ1gtR29vZy1VcGxvYWQtUHJvdG9jb2wnOiAnbXVsdGlwYXJ0J1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdlbkJvdW5kYXJ5KCk6IHN0cmluZyB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBzdHIgPSBzdHIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbiAgY29uc3QgYm91bmRhcnkgPSBnZW5Cb3VuZGFyeSgpO1xuICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9ICdtdWx0aXBhcnQvcmVsYXRlZDsgYm91bmRhcnk9JyArIGJvdW5kYXJ5O1xuICBjb25zdCBtZXRhZGF0YV8gPSBtZXRhZGF0YUZvclVwbG9hZF8obG9jYXRpb24sIGJsb2IsIG1ldGFkYXRhKTtcbiAgY29uc3QgbWV0YWRhdGFTdHJpbmcgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhXywgbWFwcGluZ3MpO1xuICBjb25zdCBwcmVCbG9iUGFydCA9XG4gICAgJy0tJyArXG4gICAgYm91bmRhcnkgK1xuICAgICdcXHJcXG4nICtcbiAgICAnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XFxyXFxuXFxyXFxuJyArXG4gICAgbWV0YWRhdGFTdHJpbmcgK1xuICAgICdcXHJcXG4tLScgK1xuICAgIGJvdW5kYXJ5ICtcbiAgICAnXFxyXFxuJyArXG4gICAgJ0NvbnRlbnQtVHlwZTogJyArXG4gICAgbWV0YWRhdGFfWydjb250ZW50VHlwZSddICtcbiAgICAnXFxyXFxuXFxyXFxuJztcbiAgY29uc3QgcG9zdEJsb2JQYXJ0ID0gJ1xcclxcbi0tJyArIGJvdW5kYXJ5ICsgJy0tJztcbiAgY29uc3QgYm9keSA9IEZic0Jsb2IuZ2V0QmxvYihwcmVCbG9iUGFydCwgYmxvYiwgcG9zdEJsb2JQYXJ0KTtcbiAgaWYgKGJvZHkgPT09IG51bGwpIHtcbiAgICB0aHJvdyBjYW5ub3RTbGljZUJsb2IoKTtcbiAgfVxuICBjb25zdCB1cmxQYXJhbXM6IFVybFBhcmFtcyA9IHsgbmFtZTogbWV0YWRhdGFfWydmdWxsUGF0aCddISB9O1xuICBjb25zdCB1cmwgPSBtYWtlVXJsKHVybFBhcnQsIHNlcnZpY2UuaG9zdCwgc2VydmljZS5fcHJvdG9jb2wpO1xuICBjb25zdCBtZXRob2QgPSAnUE9TVCc7XG4gIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcbiAgY29uc3QgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8oXG4gICAgdXJsLFxuICAgIG1ldGhvZCxcbiAgICBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLFxuICAgIHRpbWVvdXRcbiAgKTtcbiAgcmVxdWVzdEluZm8udXJsUGFyYW1zID0gdXJsUGFyYW1zO1xuICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcbiAgcmVxdWVzdEluZm8uYm9keSA9IGJvZHkudXBsb2FkRGF0YSgpO1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICByZXR1cm4gcmVxdWVzdEluZm87XG59XG5cbi8qKlxuICogQHBhcmFtIGN1cnJlbnQgVGhlIG51bWJlciBvZiBieXRlcyB0aGF0IGhhdmUgYmVlbiB1cGxvYWRlZCBzbyBmYXIuXG4gKiBAcGFyYW0gdG90YWwgVGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyBpbiB0aGUgdXBsb2FkLlxuICogQHBhcmFtIG9wdF9maW5hbGl6ZWQgVHJ1ZSBpZiB0aGUgc2VydmVyIGhhcyBmaW5pc2hlZCB0aGUgdXBsb2FkLlxuICogQHBhcmFtIG9wdF9tZXRhZGF0YSBUaGUgdXBsb2FkIG1ldGFkYXRhLCBzaG91bGRcbiAqICAgICBvbmx5IGJlIHBhc3NlZCBpZiBvcHRfZmluYWxpemVkIGlzIHRydWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXN1bWFibGVVcGxvYWRTdGF0dXMge1xuICBmaW5hbGl6ZWQ6IGJvb2xlYW47XG4gIG1ldGFkYXRhOiBNZXRhZGF0YSB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGN1cnJlbnQ6IG51bWJlcixcbiAgICBwdWJsaWMgdG90YWw6IG51bWJlcixcbiAgICBmaW5hbGl6ZWQ/OiBib29sZWFuLFxuICAgIG1ldGFkYXRhPzogTWV0YWRhdGEgfCBudWxsXG4gICkge1xuICAgIHRoaXMuZmluYWxpemVkID0gISFmaW5hbGl6ZWQ7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhIHx8IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmVzdW1lSGVhZGVyXyhcbiAgeGhyOiBDb25uZWN0aW9uPHN0cmluZz4sXG4gIGFsbG93ZWQ/OiBzdHJpbmdbXVxuKTogc3RyaW5nIHtcbiAgbGV0IHN0YXR1czogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIHRyeSB7XG4gICAgc3RhdHVzID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVN0YXR1cycpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcbiAgfVxuICBjb25zdCBhbGxvd2VkU3RhdHVzID0gYWxsb3dlZCB8fCBbJ2FjdGl2ZSddO1xuICBoYW5kbGVyQ2hlY2soISFzdGF0dXMgJiYgYWxsb3dlZFN0YXR1cy5pbmRleE9mKHN0YXR1cykgIT09IC0xKTtcbiAgcmV0dXJuIHN0YXR1cyBhcyBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZXN1bWFibGVVcGxvYWQoXG4gIHNlcnZpY2U6IEZpcmViYXNlU3RvcmFnZUltcGwsXG4gIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgbWFwcGluZ3M6IE1hcHBpbmdzLFxuICBibG9iOiBGYnNCbG9iLFxuICBtZXRhZGF0YT86IE1ldGFkYXRhIHwgbnVsbFxuKTogUmVxdWVzdEluZm88c3RyaW5nLCBzdHJpbmc+IHtcbiAgY29uc3QgdXJsUGFydCA9IGxvY2F0aW9uLmJ1Y2tldE9ubHlTZXJ2ZXJVcmwoKTtcbiAgY29uc3QgbWV0YWRhdGFGb3JVcGxvYWQgPSBtZXRhZGF0YUZvclVwbG9hZF8obG9jYXRpb24sIGJsb2IsIG1ldGFkYXRhKTtcbiAgY29uc3QgdXJsUGFyYW1zOiBVcmxQYXJhbXMgPSB7IG5hbWU6IG1ldGFkYXRhRm9yVXBsb2FkWydmdWxsUGF0aCddISB9O1xuICBjb25zdCB1cmwgPSBtYWtlVXJsKHVybFBhcnQsIHNlcnZpY2UuaG9zdCwgc2VydmljZS5fcHJvdG9jb2wpO1xuICBjb25zdCBtZXRob2QgPSAnUE9TVCc7XG4gIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgJ1gtR29vZy1VcGxvYWQtUHJvdG9jb2wnOiAncmVzdW1hYmxlJyxcbiAgICAnWC1Hb29nLVVwbG9hZC1Db21tYW5kJzogJ3N0YXJ0JyxcbiAgICAnWC1Hb29nLVVwbG9hZC1IZWFkZXItQ29udGVudC1MZW5ndGgnOiBgJHtibG9iLnNpemUoKX1gLFxuICAgICdYLUdvb2ctVXBsb2FkLUhlYWRlci1Db250ZW50LVR5cGUnOiBtZXRhZGF0YUZvclVwbG9hZFsnY29udGVudFR5cGUnXSEsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xuICB9O1xuICBjb25zdCBib2R5ID0gdG9SZXNvdXJjZVN0cmluZyhtZXRhZGF0YUZvclVwbG9hZCwgbWFwcGluZ3MpO1xuICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XG5cbiAgZnVuY3Rpb24gaGFuZGxlcih4aHI6IENvbm5lY3Rpb248c3RyaW5nPik6IHN0cmluZyB7XG4gICAgY2hlY2tSZXN1bWVIZWFkZXJfKHhocik7XG4gICAgbGV0IHVybDtcbiAgICB0cnkge1xuICAgICAgdXJsID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVVSTCcpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZXJDaGVjayhmYWxzZSk7XG4gICAgfVxuICAgIGhhbmRsZXJDaGVjayhpc1N0cmluZyh1cmwpKTtcbiAgICByZXR1cm4gdXJsIGFzIHN0cmluZztcbiAgfVxuICBjb25zdCByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XG4gIHJlcXVlc3RJbmZvLnVybFBhcmFtcyA9IHVybFBhcmFtcztcbiAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XG4gIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5O1xuICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xuICByZXR1cm4gcmVxdWVzdEluZm87XG59XG5cbi8qKlxuICogQHBhcmFtIHVybCBGcm9tIGEgY2FsbCB0byBmYnMucmVxdWVzdHMuY3JlYXRlUmVzdW1hYmxlVXBsb2FkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVzdW1hYmxlVXBsb2FkU3RhdHVzKFxuICBzZXJ2aWNlOiBGaXJlYmFzZVN0b3JhZ2VJbXBsLFxuICBsb2NhdGlvbjogTG9jYXRpb24sXG4gIHVybDogc3RyaW5nLFxuICBibG9iOiBGYnNCbG9iXG4pOiBSZXF1ZXN0SW5mbzxzdHJpbmcsIFJlc3VtYWJsZVVwbG9hZFN0YXR1cz4ge1xuICBjb25zdCBoZWFkZXJzID0geyAnWC1Hb29nLVVwbG9hZC1Db21tYW5kJzogJ3F1ZXJ5JyB9O1xuXG4gIGZ1bmN0aW9uIGhhbmRsZXIoeGhyOiBDb25uZWN0aW9uPHN0cmluZz4pOiBSZXN1bWFibGVVcGxvYWRTdGF0dXMge1xuICAgIGNvbnN0IHN0YXR1cyA9IGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIsIFsnYWN0aXZlJywgJ2ZpbmFsJ10pO1xuICAgIGxldCBzaXplU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgc2l6ZVN0cmluZyA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1Hb29nLVVwbG9hZC1TaXplLVJlY2VpdmVkJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoIXNpemVTdHJpbmcpIHtcbiAgICAgIC8vIG51bGwgb3IgZW1wdHkgc3RyaW5nXG4gICAgICBoYW5kbGVyQ2hlY2soZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSBOdW1iZXIoc2l6ZVN0cmluZyk7XG4gICAgaGFuZGxlckNoZWNrKCFpc05hTihzaXplKSk7XG4gICAgcmV0dXJuIG5ldyBSZXN1bWFibGVVcGxvYWRTdGF0dXMoc2l6ZSwgYmxvYi5zaXplKCksIHN0YXR1cyA9PT0gJ2ZpbmFsJyk7XG4gIH1cbiAgY29uc3QgbWV0aG9kID0gJ1BPU1QnO1xuICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XG4gIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XG4gIHJldHVybiByZXF1ZXN0SW5mbztcbn1cblxuLyoqXG4gKiBBbnkgdXBsb2FkcyB2aWEgdGhlIHJlc3VtYWJsZSB1cGxvYWQgQVBJIG11c3QgdHJhbnNmZXIgYSBudW1iZXIgb2YgYnl0ZXNcbiAqIHRoYXQgaXMgYSBtdWx0aXBsZSBvZiB0aGlzIG51bWJlci5cbiAqL1xuZXhwb3J0IGNvbnN0IFJFU1VNQUJMRV9VUExPQURfQ0hVTktfU0laRTogbnVtYmVyID0gMjU2ICogMTAyNDtcblxuLyoqXG4gKiBAcGFyYW0gdXJsIEZyb20gYSBjYWxsIHRvIGZicy5yZXF1ZXN0cy5jcmVhdGVSZXN1bWFibGVVcGxvYWQuXG4gKiBAcGFyYW0gY2h1bmtTaXplIE51bWJlciBvZiBieXRlcyB0byB1cGxvYWQuXG4gKiBAcGFyYW0gc3RhdHVzIFRoZSBwcmV2aW91cyBzdGF0dXMuXG4gKiAgICAgSWYgbm90IHBhc3NlZCBvciBudWxsLCB3ZSBzdGFydCBmcm9tIHRoZSBiZWdpbm5pbmcuXG4gKiBAdGhyb3dzIGZicy5FcnJvciBJZiB0aGUgdXBsb2FkIGlzIGFscmVhZHkgY29tcGxldGUsIHRoZSBwYXNzZWQgaW4gc3RhdHVzXG4gKiAgICAgaGFzIGEgZmluYWwgc2l6ZSBpbmNvbnNpc3RlbnQgd2l0aCB0aGUgYmxvYiwgb3IgdGhlIGJsb2IgY2Fubm90IGJlIHNsaWNlZFxuICogICAgIGZvciB1cGxvYWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250aW51ZVJlc3VtYWJsZVVwbG9hZChcbiAgbG9jYXRpb246IExvY2F0aW9uLFxuICBzZXJ2aWNlOiBGaXJlYmFzZVN0b3JhZ2VJbXBsLFxuICB1cmw6IHN0cmluZyxcbiAgYmxvYjogRmJzQmxvYixcbiAgY2h1bmtTaXplOiBudW1iZXIsXG4gIG1hcHBpbmdzOiBNYXBwaW5ncyxcbiAgc3RhdHVzPzogUmVzdW1hYmxlVXBsb2FkU3RhdHVzIHwgbnVsbCxcbiAgcHJvZ3Jlc3NDYWxsYmFjaz86ICgocDE6IG51bWJlciwgcDI6IG51bWJlcikgPT4gdm9pZCkgfCBudWxsXG4pOiBSZXF1ZXN0SW5mbzxzdHJpbmcsIFJlc3VtYWJsZVVwbG9hZFN0YXR1cz4ge1xuICAvLyBUT0RPKGFuZHlzb3RvKTogc3RhbmRhcmRpemUgb24gaW50ZXJuYWwgYXNzZXJ0c1xuICAvLyBhc3NlcnQoIShvcHRfc3RhdHVzICYmIG9wdF9zdGF0dXMuZmluYWxpemVkKSk7XG4gIGNvbnN0IHN0YXR1c18gPSBuZXcgUmVzdW1hYmxlVXBsb2FkU3RhdHVzKDAsIDApO1xuICBpZiAoc3RhdHVzKSB7XG4gICAgc3RhdHVzXy5jdXJyZW50ID0gc3RhdHVzLmN1cnJlbnQ7XG4gICAgc3RhdHVzXy50b3RhbCA9IHN0YXR1cy50b3RhbDtcbiAgfSBlbHNlIHtcbiAgICBzdGF0dXNfLmN1cnJlbnQgPSAwO1xuICAgIHN0YXR1c18udG90YWwgPSBibG9iLnNpemUoKTtcbiAgfVxuICBpZiAoYmxvYi5zaXplKCkgIT09IHN0YXR1c18udG90YWwpIHtcbiAgICB0aHJvdyBzZXJ2ZXJGaWxlV3JvbmdTaXplKCk7XG4gIH1cbiAgY29uc3QgYnl0ZXNMZWZ0ID0gc3RhdHVzXy50b3RhbCAtIHN0YXR1c18uY3VycmVudDtcbiAgbGV0IGJ5dGVzVG9VcGxvYWQgPSBieXRlc0xlZnQ7XG4gIGlmIChjaHVua1NpemUgPiAwKSB7XG4gICAgYnl0ZXNUb1VwbG9hZCA9IE1hdGgubWluKGJ5dGVzVG9VcGxvYWQsIGNodW5rU2l6ZSk7XG4gIH1cbiAgY29uc3Qgc3RhcnRCeXRlID0gc3RhdHVzXy5jdXJyZW50O1xuICBjb25zdCBlbmRCeXRlID0gc3RhcnRCeXRlICsgYnl0ZXNUb1VwbG9hZDtcbiAgbGV0IHVwbG9hZENvbW1hbmQgPSAnJztcbiAgaWYgKGJ5dGVzVG9VcGxvYWQgPT09IDApIHtcbiAgICB1cGxvYWRDb21tYW5kID0gJ2ZpbmFsaXplJztcbiAgfSBlbHNlIGlmIChieXRlc0xlZnQgPT09IGJ5dGVzVG9VcGxvYWQpIHtcbiAgICB1cGxvYWRDb21tYW5kID0gJ3VwbG9hZCwgZmluYWxpemUnO1xuICB9IGVsc2Uge1xuICAgIHVwbG9hZENvbW1hbmQgPSAndXBsb2FkJztcbiAgfVxuICBjb25zdCBoZWFkZXJzID0ge1xuICAgICdYLUdvb2ctVXBsb2FkLUNvbW1hbmQnOiB1cGxvYWRDb21tYW5kLFxuICAgICdYLUdvb2ctVXBsb2FkLU9mZnNldCc6IGAke3N0YXR1c18uY3VycmVudH1gXG4gIH07XG4gIGNvbnN0IGJvZHkgPSBibG9iLnNsaWNlKHN0YXJ0Qnl0ZSwgZW5kQnl0ZSk7XG4gIGlmIChib2R5ID09PSBudWxsKSB7XG4gICAgdGhyb3cgY2Fubm90U2xpY2VCbG9iKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHhocjogQ29ubmVjdGlvbjxzdHJpbmc+LFxuICAgIHRleHQ6IHN0cmluZ1xuICApOiBSZXN1bWFibGVVcGxvYWRTdGF0dXMge1xuICAgIC8vIFRPRE8oYW5keXNvdG8pOiBWZXJpZnkgdGhlIE1ENSBvZiBlYWNoIHVwbG9hZGVkIHJhbmdlOlxuICAgIC8vIHRoZSAneC1yYW5nZS1tZDUnIGhlYWRlciBjb21lcyBiYWNrIHdpdGggc3RhdHVzIGNvZGUgMzA4IHJlc3BvbnNlcy5cbiAgICAvLyBXZSdsbCBvbmx5IGJlIGFibGUgdG8gYmFpbCBvdXQgdGhvdWdoLCBiZWNhdXNlIHlvdSBjYW4ndCByZS11cGxvYWQgYVxuICAgIC8vIHJhbmdlIHRoYXQgeW91IHByZXZpb3VzbHkgdXBsb2FkZWQuXG4gICAgY29uc3QgdXBsb2FkU3RhdHVzID0gY2hlY2tSZXN1bWVIZWFkZXJfKHhociwgWydhY3RpdmUnLCAnZmluYWwnXSk7XG4gICAgY29uc3QgbmV3Q3VycmVudCA9IHN0YXR1c18uY3VycmVudCArIGJ5dGVzVG9VcGxvYWQ7XG4gICAgY29uc3Qgc2l6ZSA9IGJsb2Iuc2l6ZSgpO1xuICAgIGxldCBtZXRhZGF0YTtcbiAgICBpZiAodXBsb2FkU3RhdHVzID09PSAnZmluYWwnKSB7XG4gICAgICBtZXRhZGF0YSA9IG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncykoeGhyLCB0ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YWRhdGEgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlc3VtYWJsZVVwbG9hZFN0YXR1cyhcbiAgICAgIG5ld0N1cnJlbnQsXG4gICAgICBzaXplLFxuICAgICAgdXBsb2FkU3RhdHVzID09PSAnZmluYWwnLFxuICAgICAgbWV0YWRhdGFcbiAgICApO1xuICB9XG4gIGNvbnN0IG1ldGhvZCA9ICdQT1NUJztcbiAgY29uc3QgdGltZW91dCA9IHNlcnZpY2UubWF4VXBsb2FkUmV0cnlUaW1lO1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgaGFuZGxlciwgdGltZW91dCk7XG4gIHJlcXVlc3RJbmZvLmhlYWRlcnMgPSBoZWFkZXJzO1xuICByZXF1ZXN0SW5mby5ib2R5ID0gYm9keS51cGxvYWREYXRhKCk7XG4gIHJlcXVlc3RJbmZvLnByb2dyZXNzQ2FsbGJhY2sgPSBwcm9ncmVzc0NhbGxiYWNrIHx8IG51bGw7XG4gIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XG4gIHJldHVybiByZXF1ZXN0SW5mbztcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgRW51bWVyYXRpb25zIHVzZWQgZm9yIHVwbG9hZCB0YXNrcy5cbiAqL1xuXG4vKipcbiAqIEFuIGV2ZW50IHRoYXQgaXMgdHJpZ2dlcmVkIG9uIGEgdGFzay5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgdHlwZSBUYXNrRXZlbnQgPSBzdHJpbmc7XG5cbi8qKlxuICogQW4gZXZlbnQgdGhhdCBpcyB0cmlnZ2VyZWQgb24gYSB0YXNrLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjb25zdCBUYXNrRXZlbnQgPSB7XG4gIC8qKlxuICAgKiBGb3IgdGhpcyBldmVudCxcbiAgICogPHVsPlxuICAgKiAgIDxsaT5UaGUgYG5leHRgIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZCBvbiBwcm9ncmVzcyB1cGRhdGVzIGFuZCB3aGVuIHRoZVxuICAgKiAgICAgICB0YXNrIGlzIHBhdXNlZC9yZXN1bWVkIHdpdGggYW4gYFVwbG9hZFRhc2tTbmFwc2hvdGAgYXMgdGhlIGZpcnN0XG4gICAqICAgICAgIGFyZ3VtZW50LjwvbGk+XG4gICAqICAgPGxpPlRoZSBgZXJyb3JgIGZ1bmN0aW9uIGlzIHRyaWdnZXJlZCBpZiB0aGUgdXBsb2FkIGlzIGNhbmNlbGVkIG9yIGZhaWxzXG4gICAqICAgICAgIGZvciBhbm90aGVyIHJlYXNvbi48L2xpPlxuICAgKiAgIDxsaT5UaGUgYGNvbXBsZXRlYCBmdW5jdGlvbiBpcyB0cmlnZ2VyZWQgaWYgdGhlIHVwbG9hZCBjb21wbGV0ZXNcbiAgICogICAgICAgc3VjY2Vzc2Z1bGx5LjwvbGk+XG4gICAqIDwvdWw+XG4gICAqL1xuICBTVEFURV9DSEFOR0VEOiAnc3RhdGVfY2hhbmdlZCdcbn07XG5cbi8qKlxuICogSW50ZXJuYWwgZW51bSBmb3IgdGFzayBzdGF0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gSW50ZXJuYWxUYXNrU3RhdGUge1xuICBSVU5OSU5HID0gJ3J1bm5pbmcnLFxuICBQQVVTSU5HID0gJ3BhdXNpbmcnLFxuICBQQVVTRUQgPSAncGF1c2VkJyxcbiAgU1VDQ0VTUyA9ICdzdWNjZXNzJyxcbiAgQ0FOQ0VMSU5HID0gJ2NhbmNlbGluZycsXG4gIENBTkNFTEVEID0gJ2NhbmNlbGVkJyxcbiAgRVJST1IgPSAnZXJyb3InXG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiBhIHJ1bm5pbmcgdXBsb2FkLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCB0eXBlIFRhc2tTdGF0ZSA9ICh0eXBlb2YgVGFza1N0YXRlKVtrZXlvZiB0eXBlb2YgVGFza1N0YXRlXTtcblxuLy8gdHlwZSBrZXlzID0ga2V5b2YgVGFza1N0YXRlXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBydW5uaW5nIHVwbG9hZC5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgVGFza1N0YXRlID0ge1xuICAvKiogVGhlIHRhc2sgaXMgY3VycmVudGx5IHRyYW5zZmVycmluZyBkYXRhLiAqL1xuICBSVU5OSU5HOiAncnVubmluZycsXG5cbiAgLyoqIFRoZSB0YXNrIHdhcyBwYXVzZWQgYnkgdGhlIHVzZXIuICovXG4gIFBBVVNFRDogJ3BhdXNlZCcsXG5cbiAgLyoqIFRoZSB0YXNrIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuICovXG4gIFNVQ0NFU1M6ICdzdWNjZXNzJyxcblxuICAvKiogVGhlIHRhc2sgd2FzIGNhbmNlbGVkLiAqL1xuICBDQU5DRUxFRDogJ2NhbmNlbGVkJyxcblxuICAvKiogVGhlIHRhc2sgZmFpbGVkIHdpdGggYW4gZXJyb3IuICovXG4gIEVSUk9SOiAnZXJyb3InXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgZnVuY3Rpb24gdGFza1N0YXRlRnJvbUludGVybmFsVGFza1N0YXRlKFxuICBzdGF0ZTogSW50ZXJuYWxUYXNrU3RhdGVcbik6IFRhc2tTdGF0ZSB7XG4gIHN3aXRjaCAoc3RhdGUpIHtcbiAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlJVTk5JTkc6XG4gICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HOlxuICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HOlxuICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5SVU5OSU5HO1xuICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEOlxuICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5QQVVTRUQ7XG4gICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTOlxuICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5TVUNDRVNTO1xuICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMRUQ6XG4gICAgICByZXR1cm4gVGFza1N0YXRlLkNBTkNFTEVEO1xuICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuRVJST1I6XG4gICAgICByZXR1cm4gVGFza1N0YXRlLkVSUk9SO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KGZhbHNlKTtcbiAgICAgIHJldHVybiBUYXNrU3RhdGUuRVJST1I7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdHlwZSc7XG5pbXBvcnQgeyBTdG9yYWdlRXJyb3IgfSBmcm9tICcuL2Vycm9yJztcblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbmNlIGZvciBlYWNoIHZhbHVlIGluIGEgc3RyZWFtIG9mIHZhbHVlcy5cbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEZuPFQ+ID0gKHZhbHVlOiBUKSA9PiB2b2lkO1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCBhIGBTdG9yYWdlRXJyb3JgXG4gKiBpZiB0aGUgZXZlbnQgc3RyZWFtIGVuZHMgZHVlIHRvIGFuIGVycm9yLlxuICovXG5leHBvcnQgdHlwZSBFcnJvckZuID0gKGVycm9yOiBTdG9yYWdlRXJyb3IpID0+IHZvaWQ7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpZiB0aGUgZXZlbnQgc3RyZWFtIGVuZHMgbm9ybWFsbHkuXG4gKi9cbmV4cG9ydCB0eXBlIENvbXBsZXRlRm4gPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIFVuc3Vic2NyaWJlcyBmcm9tIGEgc3RyZWFtLlxuICovXG5leHBvcnQgdHlwZSBVbnN1YnNjcmliZSA9ICgpID0+IHZvaWQ7XG5cbi8qKlxuICogQW4gb2JzZXJ2ZXIgaWRlbnRpY2FsIHRvIHRoZSBgT2JzZXJ2ZXJgIGRlZmluZWQgaW4gcGFja2FnZXMvdXRpbCBleGNlcHQgdGhlXG4gKiBlcnJvciBwYXNzZWQgaW50byB0aGUgRXJyb3JGbiBpcyBzcGVjaWZpY2FsbHkgYSBgU3RvcmFnZUVycm9yYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdG9yYWdlT2JzZXJ2ZXI8VD4ge1xuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgb25jZSBmb3IgZWFjaCB2YWx1ZSBpbiB0aGUgZXZlbnQgc3RyZWFtLlxuICAgKi9cbiAgbmV4dD86IE5leHRGbjxUPjtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCBhIGBTdG9yYWdlRXJyb3JgXG4gICAqIGlmIHRoZSBldmVudCBzdHJlYW0gZW5kcyBkdWUgdG8gYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvcj86IEVycm9yRm47XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBldmVudCBzdHJlYW0gZW5kcyBub3JtYWxseS5cbiAgICovXG4gIGNvbXBsZXRlPzogQ29tcGxldGVGbjtcbn1cblxuLyoqXG4gKiBTdWJzY3JpYmVzIHRvIGFuIGV2ZW50IHN0cmVhbS5cbiAqL1xuZXhwb3J0IHR5cGUgU3Vic2NyaWJlPFQ+ID0gKFxuICBuZXh0PzogTmV4dEZuPFQ+IHwgU3RvcmFnZU9ic2VydmVyPFQ+LFxuICBlcnJvcj86IEVycm9yRm4sXG4gIGNvbXBsZXRlPzogQ29tcGxldGVGblxuKSA9PiBVbnN1YnNjcmliZTtcblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyPFQ+IGltcGxlbWVudHMgU3RvcmFnZU9ic2VydmVyPFQ+IHtcbiAgbmV4dD86IE5leHRGbjxUPjtcbiAgZXJyb3I/OiBFcnJvckZuO1xuICBjb21wbGV0ZT86IENvbXBsZXRlRm47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbmV4dE9yT2JzZXJ2ZXI/OiBOZXh0Rm48VD4gfCBTdG9yYWdlT2JzZXJ2ZXI8VD4sXG4gICAgZXJyb3I/OiBFcnJvckZuLFxuICAgIGNvbXBsZXRlPzogQ29tcGxldGVGblxuICApIHtcbiAgICBjb25zdCBhc0Z1bmN0aW9ucyA9XG4gICAgICBpc0Z1bmN0aW9uKG5leHRPck9ic2VydmVyKSB8fCBlcnJvciAhPSBudWxsIHx8IGNvbXBsZXRlICE9IG51bGw7XG4gICAgaWYgKGFzRnVuY3Rpb25zKSB7XG4gICAgICB0aGlzLm5leHQgPSBuZXh0T3JPYnNlcnZlciBhcyBOZXh0Rm48VD47XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3IgPz8gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlID8/IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXh0T3JPYnNlcnZlciBhcyB7XG4gICAgICAgIG5leHQ/OiBOZXh0Rm48VD47XG4gICAgICAgIGVycm9yPzogRXJyb3JGbjtcbiAgICAgICAgY29tcGxldGU/OiBDb21wbGV0ZUZuO1xuICAgICAgfTtcbiAgICAgIHRoaXMubmV4dCA9IG9ic2VydmVyLm5leHQ7XG4gICAgICB0aGlzLmVycm9yID0gb2JzZXJ2ZXIuZXJyb3I7XG4gICAgICB0aGlzLmNvbXBsZXRlID0gb2JzZXJ2ZXIuY29tcGxldGU7XG4gICAgfVxuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGYgd2l0aCBpdHMgYXJndW1lbnRzIGFzeW5jaHJvbm91c2x5IGFzIGFcbiAqIG1pY3JvdGFzaywgaS5lLiBhcyBzb29uIGFzIHBvc3NpYmxlIGFmdGVyIHRoZSBjdXJyZW50IHNjcmlwdCByZXR1cm5zIGJhY2tcbiAqIGludG8gYnJvd3NlciBjb2RlLlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jKGY6IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xuICByZXR1cm4gKC4uLmFyZ3NUb0ZvcndhcmQ6IHVua25vd25bXSkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IGYoLi4uYXJnc1RvRm9yd2FyZCkpO1xuICB9O1xufVxuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7XG4gIENvbm5lY3Rpb24sXG4gIENvbm5lY3Rpb25UeXBlLFxuICBFcnJvckNvZGUsXG4gIEhlYWRlcnNcbn0gZnJvbSAnLi4vLi4vaW1wbGVtZW50YXRpb24vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBpbnRlcm5hbEVycm9yIH0gZnJvbSAnLi4vLi4vaW1wbGVtZW50YXRpb24vZXJyb3InO1xuXG4vKiogQW4gb3ZlcnJpZGUgZm9yIHRoZSB0ZXh0LWJhc2VkIENvbm5lY3Rpb24uIFVzZWQgaW4gdGVzdHMuICovXG5sZXQgdGV4dEZhY3RvcnlPdmVycmlkZTogKCgpID0+IENvbm5lY3Rpb248c3RyaW5nPikgfCBudWxsID0gbnVsbDtcblxuLyoqXG4gKiBOZXR3b3JrIGxheWVyIGZvciBicm93c2Vycy4gV2UgdXNlIHRoaXMgaW5zdGVhZCBvZiBnb29nLm5ldC5YaHJJbyBiZWNhdXNlXG4gKiBnb29nLm5ldC5YaHJJbyBpcyBoeXV1dXVnZSBhbmQgZG9lc24ndCB3b3JrIGluIFJlYWN0IE5hdGl2ZSBvbiBBbmRyb2lkLlxuICovXG5hYnN0cmFjdCBjbGFzcyBYaHJDb25uZWN0aW9uPFQgZXh0ZW5kcyBDb25uZWN0aW9uVHlwZT5cbiAgaW1wbGVtZW50cyBDb25uZWN0aW9uPFQ+XG57XG4gIHByb3RlY3RlZCB4aHJfOiBYTUxIdHRwUmVxdWVzdDtcbiAgcHJpdmF0ZSBlcnJvckNvZGVfOiBFcnJvckNvZGU7XG4gIHByaXZhdGUgc2VuZFByb21pc2VfOiBQcm9taXNlPHZvaWQ+O1xuICBwcm90ZWN0ZWQgc2VudF86IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnhocl8gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB0aGlzLmluaXRYaHIoKTtcbiAgICB0aGlzLmVycm9yQ29kZV8gPSBFcnJvckNvZGUuTk9fRVJST1I7XG4gICAgdGhpcy5zZW5kUHJvbWlzZV8gPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMueGhyXy5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLkFCT1JUO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMueGhyXy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLk5FVFdPUktfRVJST1I7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy54aHJfLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWJzdHJhY3QgaW5pdFhocigpOiB2b2lkO1xuXG4gIHNlbmQoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgYm9keT86IEFycmF5QnVmZmVyVmlldyB8IEJsb2IgfCBzdHJpbmcsXG4gICAgaGVhZGVycz86IEhlYWRlcnNcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuc2VudF8pIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuc2VuZCgpIG1vcmUgdGhhbiBvbmNlJyk7XG4gICAgfVxuICAgIHRoaXMuc2VudF8gPSB0cnVlO1xuICAgIHRoaXMueGhyXy5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICBpZiAoaGVhZGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0aGlzLnhocl8uc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnhocl8uc2VuZChib2R5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy54aHJfLnNlbmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VuZFByb21pc2VfO1xuICB9XG5cbiAgZ2V0RXJyb3JDb2RlKCk6IEVycm9yQ29kZSB7XG4gICAgaWYgKCF0aGlzLnNlbnRfKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycm9yKCdjYW5ub3QgLmdldEVycm9yQ29kZSgpIGJlZm9yZSBzZW5kaW5nJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVycm9yQ29kZV87XG4gIH1cblxuICBnZXRTdGF0dXMoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuc2VudF8pIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0U3RhdHVzKCkgYmVmb3JlIHNlbmRpbmcnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLnhocl8uc3RhdHVzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cblxuICBnZXRSZXNwb25zZSgpOiBUIHtcbiAgICBpZiAoIXRoaXMuc2VudF8pIHtcbiAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0UmVzcG9uc2UoKSBiZWZvcmUgc2VuZGluZycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy54aHJfLnJlc3BvbnNlO1xuICB9XG5cbiAgZ2V0RXJyb3JUZXh0KCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLnNlbnRfKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycm9yKCdjYW5ub3QgLmdldEVycm9yVGV4dCgpIGJlZm9yZSBzZW5kaW5nJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnhocl8uc3RhdHVzVGV4dDtcbiAgfVxuXG4gIC8qKiBBYm9ydHMgdGhlIHJlcXVlc3QuICovXG4gIGFib3J0KCk6IHZvaWQge1xuICAgIHRoaXMueGhyXy5hYm9ydCgpO1xuICB9XG5cbiAgZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy54aHJfLmdldFJlc3BvbnNlSGVhZGVyKGhlYWRlcik7XG4gIH1cblxuICBhZGRVcGxvYWRQcm9ncmVzc0xpc3RlbmVyKGxpc3RlbmVyOiAocDE6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy54aHJfLnVwbG9hZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnhocl8udXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgbGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVVwbG9hZFByb2dyZXNzTGlzdGVuZXIobGlzdGVuZXI6IChwMTogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnhocl8udXBsb2FkICE9IG51bGwpIHtcbiAgICAgIHRoaXMueGhyXy51cGxvYWQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBYaHJUZXh0Q29ubmVjdGlvbiBleHRlbmRzIFhockNvbm5lY3Rpb248c3RyaW5nPiB7XG4gIGluaXRYaHIoKTogdm9pZCB7XG4gICAgdGhpcy54aHJfLnJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3VGV4dENvbm5lY3Rpb24oKTogQ29ubmVjdGlvbjxzdHJpbmc+IHtcbiAgcmV0dXJuIHRleHRGYWN0b3J5T3ZlcnJpZGUgPyB0ZXh0RmFjdG9yeU92ZXJyaWRlKCkgOiBuZXcgWGhyVGV4dENvbm5lY3Rpb24oKTtcbn1cblxuZXhwb3J0IGNsYXNzIFhockJ5dGVzQ29ubmVjdGlvbiBleHRlbmRzIFhockNvbm5lY3Rpb248QXJyYXlCdWZmZXI+IHtcbiAgcHJpdmF0ZSBkYXRhXz86IEFycmF5QnVmZmVyO1xuXG4gIGluaXRYaHIoKTogdm9pZCB7XG4gICAgdGhpcy54aHJfLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0J5dGVzQ29ubmVjdGlvbigpOiBDb25uZWN0aW9uPEFycmF5QnVmZmVyPiB7XG4gIHJldHVybiBuZXcgWGhyQnl0ZXNDb25uZWN0aW9uKCk7XG59XG5cbmV4cG9ydCBjbGFzcyBYaHJCbG9iQ29ubmVjdGlvbiBleHRlbmRzIFhockNvbm5lY3Rpb248QmxvYj4ge1xuICBpbml0WGhyKCk6IHZvaWQge1xuICAgIHRoaXMueGhyXy5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0Jsb2JDb25uZWN0aW9uKCk6IENvbm5lY3Rpb248QmxvYj4ge1xuICByZXR1cm4gbmV3IFhockJsb2JDb25uZWN0aW9uKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdTdHJlYW1Db25uZWN0aW9uKCk6IENvbm5lY3Rpb248UmVhZGFibGVTdHJlYW0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKCdTdHJlYW1zIGFyZSBvbmx5IHN1cHBvcnRlZCBvbiBOb2RlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RUZXN0Q29ubmVjdGlvbihcbiAgZmFjdG9yeTogKCgpID0+IENvbm5lY3Rpb248c3RyaW5nPikgfCBudWxsXG4pOiB2b2lkIHtcbiAgdGV4dEZhY3RvcnlPdmVycmlkZSA9IGZhY3Rvcnk7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBEZWZpbmVzIHR5cGVzIGZvciBpbnRlcmFjdGluZyB3aXRoIGJsb2IgdHJhbnNmZXIgdGFza3MuXG4gKi9cblxuaW1wb3J0IHsgRmJzQmxvYiB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24vYmxvYic7XG5pbXBvcnQge1xuICBjYW5jZWxlZCxcbiAgU3RvcmFnZUVycm9yQ29kZSxcbiAgU3RvcmFnZUVycm9yLFxuICByZXRyeUxpbWl0RXhjZWVkZWRcbn0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9lcnJvcic7XG5pbXBvcnQge1xuICBJbnRlcm5hbFRhc2tTdGF0ZSxcbiAgVGFza0V2ZW50LFxuICBUYXNrU3RhdGUsXG4gIHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZVxufSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL3Rhc2tlbnVtcyc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHtcbiAgT2JzZXJ2ZXIsXG4gIFN1YnNjcmliZSxcbiAgVW5zdWJzY3JpYmUsXG4gIFN0b3JhZ2VPYnNlcnZlciBhcyBTdG9yYWdlT2JzZXJ2ZXJJbnRlcm5hbCxcbiAgTmV4dEZuXG59IGZyb20gJy4vaW1wbGVtZW50YXRpb24vb2JzZXJ2ZXInO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24vcmVxdWVzdCc7XG5pbXBvcnQgeyBVcGxvYWRUYXNrU25hcHNob3QsIFN0b3JhZ2VPYnNlcnZlciB9IGZyb20gJy4vcHVibGljLXR5cGVzJztcbmltcG9ydCB7IGFzeW5jIGFzIGZic0FzeW5jIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9hc3luYyc7XG5pbXBvcnQgeyBNYXBwaW5ncywgZ2V0TWFwcGluZ3MgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL21ldGFkYXRhJztcbmltcG9ydCB7XG4gIGNyZWF0ZVJlc3VtYWJsZVVwbG9hZCxcbiAgZ2V0UmVzdW1hYmxlVXBsb2FkU3RhdHVzLFxuICBSRVNVTUFCTEVfVVBMT0FEX0NIVU5LX1NJWkUsXG4gIFJlc3VtYWJsZVVwbG9hZFN0YXR1cyxcbiAgY29udGludWVSZXN1bWFibGVVcGxvYWQsXG4gIGdldE1ldGFkYXRhLFxuICBtdWx0aXBhcnRVcGxvYWRcbn0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9yZXF1ZXN0cyc7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tICcuL3JlZmVyZW5jZSc7XG5pbXBvcnQgeyBuZXdUZXh0Q29ubmVjdGlvbiB9IGZyb20gJy4vcGxhdGZvcm0vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBpc1JldHJ5U3RhdHVzQ29kZSB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24vdXRpbHMnO1xuaW1wb3J0IHsgQ29tcGxldGVGbiB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IERFRkFVTFRfTUlOX1NMRUVQX1RJTUVfTUlMTElTIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9jb25zdGFudHMnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBibG9iIGJlaW5nIHVwbG9hZGVkLiBDYW4gYmUgdXNlZCB0byBwYXVzZS9yZXN1bWUvY2FuY2VsIHRoZVxuICogdXBsb2FkIGFuZCBtYW5hZ2UgY2FsbGJhY2tzIGZvciB2YXJpb3VzIGV2ZW50cy5cbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY2xhc3MgVXBsb2FkVGFzayB7XG4gIHByaXZhdGUgX3JlZjogUmVmZXJlbmNlO1xuICAvKipcbiAgICogVGhlIGRhdGEgdG8gYmUgdXBsb2FkZWQuXG4gICAqL1xuICBfYmxvYjogRmJzQmxvYjtcbiAgLyoqXG4gICAqIE1ldGFkYXRhIHJlbGF0ZWQgdG8gdGhlIHVwbG9hZC5cbiAgICovXG4gIF9tZXRhZGF0YTogTWV0YWRhdGEgfCBudWxsO1xuICBwcml2YXRlIF9tYXBwaW5nczogTWFwcGluZ3M7XG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgYnl0ZXMgdHJhbnNmZXJyZWQgc28gZmFyLlxuICAgKi9cbiAgX3RyYW5zZmVycmVkOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9uZWVkVG9GZXRjaFN0YXR1czogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9uZWVkVG9GZXRjaE1ldGFkYXRhOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX29ic2VydmVyczogQXJyYXk8U3RvcmFnZU9ic2VydmVySW50ZXJuYWw8VXBsb2FkVGFza1NuYXBzaG90Pj4gPSBbXTtcbiAgcHJpdmF0ZSBfcmVzdW1hYmxlOiBib29sZWFuO1xuICAvKipcbiAgICogVXBsb2FkIHN0YXRlLlxuICAgKi9cbiAgX3N0YXRlOiBJbnRlcm5hbFRhc2tTdGF0ZTtcbiAgcHJpdmF0ZSBfZXJyb3I/OiBTdG9yYWdlRXJyb3IgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3VwbG9hZFVybD86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfcmVxdWVzdD86IFJlcXVlc3Q8dW5rbm93bj4gPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2NodW5rTXVsdGlwbGllcjogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfZXJyb3JIYW5kbGVyOiAocDE6IFN0b3JhZ2VFcnJvcikgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfbWV0YWRhdGFFcnJvckhhbmRsZXI6IChwMTogU3RvcmFnZUVycm9yKSA9PiB2b2lkO1xuICBwcml2YXRlIF9yZXNvbHZlPzogKHAxOiBVcGxvYWRUYXNrU25hcHNob3QpID0+IHZvaWQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3JlamVjdD86IChwMTogU3RvcmFnZUVycm9yKSA9PiB2b2lkID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIHBlbmRpbmdUaW1lb3V0PzogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gIHByaXZhdGUgX3Byb21pc2U6IFByb21pc2U8VXBsb2FkVGFza1NuYXBzaG90PjtcblxuICBwcml2YXRlIHNsZWVwVGltZTogbnVtYmVyO1xuXG4gIHByaXZhdGUgbWF4U2xlZXBUaW1lOiBudW1iZXI7XG5cbiAgaXNFeHBvbmVudGlhbEJhY2tvZmZFeHBpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNsZWVwVGltZSA+IHRoaXMubWF4U2xlZXBUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSByZWYgLSBUaGUgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBvYmplY3QgdGhpcyB0YXNrIGNhbWVcbiAgICogICAgIGZyb20sIHVudHlwZWQgdG8gYXZvaWQgY3ljbGljIGRlcGVuZGVuY2llcy5cbiAgICogQHBhcmFtIGJsb2IgLSBUaGUgYmxvYiB0byB1cGxvYWQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWY6IFJlZmVyZW5jZSwgYmxvYjogRmJzQmxvYiwgbWV0YWRhdGE6IE1ldGFkYXRhIHwgbnVsbCA9IG51bGwpIHtcbiAgICB0aGlzLl9yZWYgPSByZWY7XG4gICAgdGhpcy5fYmxvYiA9IGJsb2I7XG4gICAgdGhpcy5fbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICB0aGlzLl9tYXBwaW5ncyA9IGdldE1hcHBpbmdzKCk7XG4gICAgdGhpcy5fcmVzdW1hYmxlID0gdGhpcy5fc2hvdWxkRG9SZXN1bWFibGUodGhpcy5fYmxvYik7XG4gICAgdGhpcy5fc3RhdGUgPSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HO1xuICAgIHRoaXMuX2Vycm9ySGFuZGxlciA9IGVycm9yID0+IHtcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jaHVua011bHRpcGxpZXIgPSAxO1xuICAgICAgaWYgKGVycm9yLl9jb2RlRXF1YWxzKFN0b3JhZ2VFcnJvckNvZGUuQ0FOQ0VMRUQpKSB7XG4gICAgICAgIHRoaXMuX25lZWRUb0ZldGNoU3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYmFja29mZkV4cGlyZWQgPSB0aGlzLmlzRXhwb25lbnRpYWxCYWNrb2ZmRXhwaXJlZCgpO1xuICAgICAgICBpZiAoaXNSZXRyeVN0YXR1c0NvZGUoZXJyb3Iuc3RhdHVzLCBbXSkpIHtcbiAgICAgICAgICBpZiAoYmFja29mZkV4cGlyZWQpIHtcbiAgICAgICAgICAgIGVycm9yID0gcmV0cnlMaW1pdEV4Y2VlZGVkKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2xlZXBUaW1lID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgIHRoaXMuc2xlZXBUaW1lICogMixcbiAgICAgICAgICAgICAgREVGQVVMVF9NSU5fU0xFRVBfVElNRV9NSUxMSVNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLl9uZWVkVG9GZXRjaFN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24oSW50ZXJuYWxUYXNrU3RhdGUuRVJST1IpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5fbWV0YWRhdGFFcnJvckhhbmRsZXIgPSBlcnJvciA9PiB7XG4gICAgICB0aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGVycm9yLl9jb2RlRXF1YWxzKFN0b3JhZ2VFcnJvckNvZGUuQ0FOQ0VMRUQpKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24oSW50ZXJuYWxUYXNrU3RhdGUuRVJST1IpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zbGVlcFRpbWUgPSAwO1xuICAgIHRoaXMubWF4U2xlZXBUaW1lID0gdGhpcy5fcmVmLnN0b3JhZ2UubWF4VXBsb2FkUmV0cnlUaW1lO1xuICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuX3JlamVjdCA9IHJlamVjdDtcbiAgICAgIHRoaXMuX3N0YXJ0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBQcmV2ZW50IHVuY2F1Z2h0IHJlamVjdGlvbnMgb24gdGhlIGludGVybmFsIHByb21pc2UgZnJvbSBidWJibGluZyBvdXRcbiAgICAvLyB0byB0aGUgdG9wIGxldmVsIHdpdGggYSBkdW1teSBoYW5kbGVyLlxuICAgIHRoaXMuX3Byb21pc2UudGhlbihudWxsLCAoKSA9PiB7fSk7XG4gIH1cblxuICBwcml2YXRlIF9tYWtlUHJvZ3Jlc3NDYWxsYmFjaygpOiAocDE6IG51bWJlciwgcDI6IG51bWJlcikgPT4gdm9pZCB7XG4gICAgY29uc3Qgc2l6ZUJlZm9yZSA9IHRoaXMuX3RyYW5zZmVycmVkO1xuICAgIHJldHVybiBsb2FkZWQgPT4gdGhpcy5fdXBkYXRlUHJvZ3Jlc3Moc2l6ZUJlZm9yZSArIGxvYWRlZCk7XG4gIH1cblxuICBwcml2YXRlIF9zaG91bGREb1Jlc3VtYWJsZShibG9iOiBGYnNCbG9iKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGJsb2Iuc2l6ZSgpID4gMjU2ICogMTAyNDtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXJ0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdGF0ZSAhPT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORykge1xuICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHNvbWVvbmUgcGF1c2VzIHVzIGluIGEgcmVzdW1lIGNhbGxiYWNrLCBmb3IgZXhhbXBsZS5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcmVzdW1hYmxlKSB7XG4gICAgICBpZiAodGhpcy5fdXBsb2FkVXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlUmVzdW1hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5fbmVlZFRvRmV0Y2hTdGF0dXMpIHtcbiAgICAgICAgICB0aGlzLl9mZXRjaFN0YXR1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLl9uZWVkVG9GZXRjaE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAvLyBIYXBwZW5zIGlmIHdlIG1pc3MgdGhlIG1ldGFkYXRhIG9uIHVwbG9hZCBjb21wbGV0aW9uLlxuICAgICAgICAgICAgdGhpcy5fZmV0Y2hNZXRhZGF0YSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGVuZGluZ1RpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIHRoaXMuX2NvbnRpbnVlVXBsb2FkKCk7XG4gICAgICAgICAgICB9LCB0aGlzLnNsZWVwVGltZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uZVNob3RVcGxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNvbHZlVG9rZW4oXG4gICAgY2FsbGJhY2s6IChhdXRoVG9rZW46IHN0cmluZyB8IG51bGwsIGFwcENoZWNrVG9rZW46IHN0cmluZyB8IG51bGwpID0+IHZvaWRcbiAgKTogdm9pZCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgIFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuX3JlZi5zdG9yYWdlLl9nZXRBdXRoVG9rZW4oKSxcbiAgICAgIHRoaXMuX3JlZi5zdG9yYWdlLl9nZXRBcHBDaGVja1Rva2VuKClcbiAgICBdKS50aGVuKChbYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuXSkgPT4ge1xuICAgICAgc3dpdGNoICh0aGlzLl9zdGF0ZSkge1xuICAgICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlJVTk5JTkc6XG4gICAgICAgICAgY2FsbGJhY2soYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkc6XG4gICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxFRCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORzpcbiAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKEludGVybmFsVGFza1N0YXRlLlBBVVNFRCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0IGZhbHNlXG5cbiAgcHJpdmF0ZSBfY3JlYXRlUmVzdW1hYmxlKCk6IHZvaWQge1xuICAgIHRoaXMuX3Jlc29sdmVUb2tlbigoYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0SW5mbyA9IGNyZWF0ZVJlc3VtYWJsZVVwbG9hZChcbiAgICAgICAgdGhpcy5fcmVmLnN0b3JhZ2UsXG4gICAgICAgIHRoaXMuX3JlZi5fbG9jYXRpb24sXG4gICAgICAgIHRoaXMuX21hcHBpbmdzLFxuICAgICAgICB0aGlzLl9ibG9iLFxuICAgICAgICB0aGlzLl9tZXRhZGF0YVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNyZWF0ZVJlcXVlc3QgPSB0aGlzLl9yZWYuc3RvcmFnZS5fbWFrZVJlcXVlc3QoXG4gICAgICAgIHJlcXVlc3RJbmZvLFxuICAgICAgICBuZXdUZXh0Q29ubmVjdGlvbixcbiAgICAgICAgYXV0aFRva2VuLFxuICAgICAgICBhcHBDaGVja1Rva2VuXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVxdWVzdCA9IGNyZWF0ZVJlcXVlc3Q7XG4gICAgICBjcmVhdGVSZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKCh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl91cGxvYWRVcmwgPSB1cmw7XG4gICAgICAgIHRoaXMuX25lZWRUb0ZldGNoU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcbiAgICAgIH0sIHRoaXMuX2Vycm9ySGFuZGxlcik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9mZXRjaFN0YXR1cygpOiB2b2lkIHtcbiAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KHRoaXMudXBsb2FkVXJsXyAhPT0gbnVsbCk7XG4gICAgY29uc3QgdXJsID0gdGhpcy5fdXBsb2FkVXJsIGFzIHN0cmluZztcbiAgICB0aGlzLl9yZXNvbHZlVG9rZW4oKGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbikgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdEluZm8gPSBnZXRSZXN1bWFibGVVcGxvYWRTdGF0dXMoXG4gICAgICAgIHRoaXMuX3JlZi5zdG9yYWdlLFxuICAgICAgICB0aGlzLl9yZWYuX2xvY2F0aW9uLFxuICAgICAgICB1cmwsXG4gICAgICAgIHRoaXMuX2Jsb2JcbiAgICAgICk7XG4gICAgICBjb25zdCBzdGF0dXNSZXF1ZXN0ID0gdGhpcy5fcmVmLnN0b3JhZ2UuX21ha2VSZXF1ZXN0KFxuICAgICAgICByZXF1ZXN0SW5mbyxcbiAgICAgICAgbmV3VGV4dENvbm5lY3Rpb24sXG4gICAgICAgIGF1dGhUb2tlbixcbiAgICAgICAgYXBwQ2hlY2tUb2tlblxuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSBzdGF0dXNSZXF1ZXN0O1xuICAgICAgc3RhdHVzUmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihzdGF0dXMgPT4ge1xuICAgICAgICBzdGF0dXMgPSBzdGF0dXMgYXMgUmVzdW1hYmxlVXBsb2FkU3RhdHVzO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzcyhzdGF0dXMuY3VycmVudCk7XG4gICAgICAgIHRoaXMuX25lZWRUb0ZldGNoU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIGlmIChzdGF0dXMuZmluYWxpemVkKSB7XG4gICAgICAgICAgdGhpcy5fbmVlZFRvRmV0Y2hNZXRhZGF0YSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wbGV0ZVRyYW5zaXRpb25zXygpO1xuICAgICAgfSwgdGhpcy5fZXJyb3JIYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnRpbnVlVXBsb2FkKCk6IHZvaWQge1xuICAgIGNvbnN0IGNodW5rU2l6ZSA9IFJFU1VNQUJMRV9VUExPQURfQ0hVTktfU0laRSAqIHRoaXMuX2NodW5rTXVsdGlwbGllcjtcbiAgICBjb25zdCBzdGF0dXMgPSBuZXcgUmVzdW1hYmxlVXBsb2FkU3RhdHVzKFxuICAgICAgdGhpcy5fdHJhbnNmZXJyZWQsXG4gICAgICB0aGlzLl9ibG9iLnNpemUoKVxuICAgICk7XG5cbiAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KHRoaXMudXBsb2FkVXJsXyAhPT0gbnVsbCk7XG4gICAgY29uc3QgdXJsID0gdGhpcy5fdXBsb2FkVXJsIGFzIHN0cmluZztcbiAgICB0aGlzLl9yZXNvbHZlVG9rZW4oKGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbikgPT4ge1xuICAgICAgbGV0IHJlcXVlc3RJbmZvO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdEluZm8gPSBjb250aW51ZVJlc3VtYWJsZVVwbG9hZChcbiAgICAgICAgICB0aGlzLl9yZWYuX2xvY2F0aW9uLFxuICAgICAgICAgIHRoaXMuX3JlZi5zdG9yYWdlLFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICB0aGlzLl9ibG9iLFxuICAgICAgICAgIGNodW5rU2l6ZSxcbiAgICAgICAgICB0aGlzLl9tYXBwaW5ncyxcbiAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgdGhpcy5fbWFrZVByb2dyZXNzQ2FsbGJhY2soKVxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGUgYXMgU3RvcmFnZUVycm9yO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uKEludGVybmFsVGFza1N0YXRlLkVSUk9SKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdXBsb2FkUmVxdWVzdCA9IHRoaXMuX3JlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChcbiAgICAgICAgcmVxdWVzdEluZm8sXG4gICAgICAgIG5ld1RleHRDb25uZWN0aW9uLFxuICAgICAgICBhdXRoVG9rZW4sXG4gICAgICAgIGFwcENoZWNrVG9rZW4sXG4gICAgICAgIC8qcmV0cnk9Ki8gZmFsc2UgLy8gVXBsb2FkIHJlcXVlc3RzIHNob3VsZCBub3QgYmUgcmV0cmllZCBhcyBlYWNoIHJldHJ5IHNob3VsZCBiZSBwcmVjZWRlZCBieSBhbm90aGVyIHF1ZXJ5IHJlcXVlc3QuIFdoaWNoIGlzIGhhbmRsZWQgaW4gdGhpcyBmaWxlLlxuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSB1cGxvYWRSZXF1ZXN0O1xuICAgICAgdXBsb2FkUmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbigobmV3U3RhdHVzOiBSZXN1bWFibGVVcGxvYWRTdGF0dXMpID0+IHtcbiAgICAgICAgdGhpcy5faW5jcmVhc2VNdWx0aXBsaWVyKCk7XG4gICAgICAgIHRoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzKG5ld1N0YXR1cy5jdXJyZW50KTtcbiAgICAgICAgaWYgKG5ld1N0YXR1cy5maW5hbGl6ZWQpIHtcbiAgICAgICAgICB0aGlzLl9tZXRhZGF0YSA9IG5ld1N0YXR1cy5tZXRhZGF0YTtcbiAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKEludGVybmFsVGFza1N0YXRlLlNVQ0NFU1MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5fZXJyb3JIYW5kbGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2luY3JlYXNlTXVsdGlwbGllcigpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50U2l6ZSA9IFJFU1VNQUJMRV9VUExPQURfQ0hVTktfU0laRSAqIHRoaXMuX2NodW5rTXVsdGlwbGllcjtcblxuICAgIC8vIE1heCBjaHVuayBzaXplIGlzIDMyTS5cbiAgICBpZiAoY3VycmVudFNpemUgKiAyIDwgMzIgKiAxMDI0ICogMTAyNCkge1xuICAgICAgdGhpcy5fY2h1bmtNdWx0aXBsaWVyICo9IDI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmV0Y2hNZXRhZGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNvbHZlVG9rZW4oKGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbikgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdEluZm8gPSBnZXRNZXRhZGF0YShcbiAgICAgICAgdGhpcy5fcmVmLnN0b3JhZ2UsXG4gICAgICAgIHRoaXMuX3JlZi5fbG9jYXRpb24sXG4gICAgICAgIHRoaXMuX21hcHBpbmdzXG4gICAgICApO1xuICAgICAgY29uc3QgbWV0YWRhdGFSZXF1ZXN0ID0gdGhpcy5fcmVmLnN0b3JhZ2UuX21ha2VSZXF1ZXN0KFxuICAgICAgICByZXF1ZXN0SW5mbyxcbiAgICAgICAgbmV3VGV4dENvbm5lY3Rpb24sXG4gICAgICAgIGF1dGhUb2tlbixcbiAgICAgICAgYXBwQ2hlY2tUb2tlblxuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSBtZXRhZGF0YVJlcXVlc3Q7XG4gICAgICBtZXRhZGF0YVJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4obWV0YWRhdGEgPT4ge1xuICAgICAgICB0aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uKEludGVybmFsVGFza1N0YXRlLlNVQ0NFU1MpO1xuICAgICAgfSwgdGhpcy5fbWV0YWRhdGFFcnJvckhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25lU2hvdFVwbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNvbHZlVG9rZW4oKGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbikgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdEluZm8gPSBtdWx0aXBhcnRVcGxvYWQoXG4gICAgICAgIHRoaXMuX3JlZi5zdG9yYWdlLFxuICAgICAgICB0aGlzLl9yZWYuX2xvY2F0aW9uLFxuICAgICAgICB0aGlzLl9tYXBwaW5ncyxcbiAgICAgICAgdGhpcy5fYmxvYixcbiAgICAgICAgdGhpcy5fbWV0YWRhdGFcbiAgICAgICk7XG4gICAgICBjb25zdCBtdWx0aXBhcnRSZXF1ZXN0ID0gdGhpcy5fcmVmLnN0b3JhZ2UuX21ha2VSZXF1ZXN0KFxuICAgICAgICByZXF1ZXN0SW5mbyxcbiAgICAgICAgbmV3VGV4dENvbm5lY3Rpb24sXG4gICAgICAgIGF1dGhUb2tlbixcbiAgICAgICAgYXBwQ2hlY2tUb2tlblxuICAgICAgKTtcbiAgICAgIHRoaXMuX3JlcXVlc3QgPSBtdWx0aXBhcnRSZXF1ZXN0O1xuICAgICAgbXVsdGlwYXJ0UmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihtZXRhZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzKHRoaXMuX2Jsb2Iuc2l6ZSgpKTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTKTtcbiAgICAgIH0sIHRoaXMuX2Vycm9ySGFuZGxlcik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVQcm9ncmVzcyh0cmFuc2ZlcnJlZDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgb2xkID0gdGhpcy5fdHJhbnNmZXJyZWQ7XG4gICAgdGhpcy5fdHJhbnNmZXJyZWQgPSB0cmFuc2ZlcnJlZDtcblxuICAgIC8vIEEgcHJvZ3Jlc3MgdXBkYXRlIGNhbiBtYWtlIHRoZSBcInRyYW5zZmVycmVkXCIgdmFsdWUgc21hbGxlciAoZS5nLiBhXG4gICAgLy8gcGFydGlhbCB1cGxvYWQgbm90IGNvbXBsZXRlZCBieSBzZXJ2ZXIsIGFmdGVyIHdoaWNoIHRoZSBcInRyYW5zZmVycmVkXCJcbiAgICAvLyB2YWx1ZSBtYXkgcmVzZXQgdG8gdGhlIHZhbHVlIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHJlcXVlc3QpLlxuICAgIGlmICh0aGlzLl90cmFuc2ZlcnJlZCAhPT0gb2xkKSB7XG4gICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cmFuc2l0aW9uKHN0YXRlOiBJbnRlcm5hbFRhc2tTdGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gc3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkc6XG4gICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLlBBVVNJTkc6XG4gICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxuICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgfHxcbiAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgaWYgKHRoaXMuX3JlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuX3JlcXVlc3QuY2FuY2VsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZW5kaW5nVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnBlbmRpbmdUaW1lb3V0KTtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORzpcbiAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XG4gICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEIHx8XG4gICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyk7XG4gICAgICAgIGNvbnN0IHdhc1BhdXNlZCA9IHRoaXMuX3N0YXRlID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQ7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgIGlmICh3YXNQYXVzZWQpIHtcbiAgICAgICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcnMoKTtcbiAgICAgICAgICB0aGlzLl9zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQ6XG4gICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxuICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcnMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEludGVybmFsVGFza1N0YXRlLkNBTkNFTEVEOlxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcbiAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTRUQgfHxcbiAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xuICAgICAgICB0aGlzLl9lcnJvciA9IGNhbmNlbGVkKCk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuRVJST1I6XG4gICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxuICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgfHxcbiAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HIHx8XG4gICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HKTtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXJzKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5TVUNDRVNTOlxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcbiAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XG4gICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyB8fFxuICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLkNBTkNFTElORyk7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6IC8vIElnbm9yZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29tcGxldGVUcmFuc2l0aW9uc18oKTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLl9zdGF0ZSkge1xuICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HOlxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uKEludGVybmFsVGFza1N0YXRlLlBBVVNFRCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkc6XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24oSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMRUQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORzpcbiAgICAgICAgdGhpcy5fc3RhcnQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEEgc25hcHNob3Qgb2YgdGhlIGN1cnJlbnQgdGFzayBzdGF0ZS5cbiAgICovXG4gIGdldCBzbmFwc2hvdCgpOiBVcGxvYWRUYXNrU25hcHNob3Qge1xuICAgIGNvbnN0IGV4dGVybmFsU3RhdGUgPSB0YXNrU3RhdGVGcm9tSW50ZXJuYWxUYXNrU3RhdGUodGhpcy5fc3RhdGUpO1xuICAgIHJldHVybiB7XG4gICAgICBieXRlc1RyYW5zZmVycmVkOiB0aGlzLl90cmFuc2ZlcnJlZCxcbiAgICAgIHRvdGFsQnl0ZXM6IHRoaXMuX2Jsb2Iuc2l6ZSgpLFxuICAgICAgc3RhdGU6IGV4dGVybmFsU3RhdGUsXG4gICAgICBtZXRhZGF0YTogdGhpcy5fbWV0YWRhdGEhLFxuICAgICAgdGFzazogdGhpcyxcbiAgICAgIHJlZjogdGhpcy5fcmVmXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2FsbGJhY2sgZm9yIGFuIGV2ZW50LlxuICAgKiBAcGFyYW0gdHlwZSAtIFRoZSB0eXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IuXG4gICAqIEBwYXJhbSBuZXh0T3JPYnNlcnZlciAtXG4gICAqICAgICBUaGUgYG5leHRgIGZ1bmN0aW9uLCB3aGljaCBnZXRzIGNhbGxlZCBmb3IgZWFjaCBpdGVtIGluXG4gICAqICAgICB0aGUgZXZlbnQgc3RyZWFtLCBvciBhbiBvYnNlcnZlciBvYmplY3Qgd2l0aCBzb21lIG9yIGFsbCBvZiB0aGVzZSB0aHJlZVxuICAgKiAgICAgcHJvcGVydGllcyAoYG5leHRgLCBgZXJyb3JgLCBgY29tcGxldGVgKS5cbiAgICogQHBhcmFtIGVycm9yIC0gQSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdpdGggYSBgU3RvcmFnZUVycm9yYFxuICAgKiAgICAgaWYgdGhlIGV2ZW50IHN0cmVhbSBlbmRzIGR1ZSB0byBhbiBlcnJvci5cbiAgICogQHBhcmFtIGNvbXBsZXRlZCAtIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBpZiB0aGVcbiAgICogICAgIGV2ZW50IHN0cmVhbSBlbmRzIG5vcm1hbGx5LlxuICAgKiBAcmV0dXJuc1xuICAgKiAgICAgSWYgb25seSB0aGUgZXZlbnQgYXJndW1lbnQgaXMgcGFzc2VkLCByZXR1cm5zIGEgZnVuY3Rpb24geW91IGNhbiB1c2UgdG9cbiAgICogICAgIGFkZCBjYWxsYmFja3MgKHNlZSB0aGUgZXhhbXBsZXMgYWJvdmUpLiBJZiBtb3JlIHRoYW4ganVzdCB0aGUgZXZlbnRcbiAgICogICAgIGFyZ3VtZW50IGlzIHBhc3NlZCwgcmV0dXJucyBhIGZ1bmN0aW9uIHlvdSBjYW4gY2FsbCB0byB1bnJlZ2lzdGVyIHRoZVxuICAgKiAgICAgY2FsbGJhY2tzLlxuICAgKi9cbiAgb24oXG4gICAgdHlwZTogVGFza0V2ZW50LFxuICAgIG5leHRPck9ic2VydmVyPzpcbiAgICAgIHwgU3RvcmFnZU9ic2VydmVyPFVwbG9hZFRhc2tTbmFwc2hvdD5cbiAgICAgIHwgbnVsbFxuICAgICAgfCAoKHNuYXBzaG90OiBVcGxvYWRUYXNrU25hcHNob3QpID0+IHVua25vd24pLFxuICAgIGVycm9yPzogKChhOiBTdG9yYWdlRXJyb3IpID0+IHVua25vd24pIHwgbnVsbCxcbiAgICBjb21wbGV0ZWQ/OiBDb21wbGV0ZUZuIHwgbnVsbFxuICApOiBVbnN1YnNjcmliZSB8IFN1YnNjcmliZTxVcGxvYWRUYXNrU25hcHNob3Q+IHtcbiAgICAvLyBOb3RlOiBgdHlwZWAgaXNuJ3QgYmVpbmcgdXNlZC4gSXRzIHR5cGUgaXMgYWxzbyBpbmNvcnJlY3QuIFRhc2tFdmVudCBzaG91bGQgbm90IGJlIGEgc3RyaW5nLlxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE9ic2VydmVyKFxuICAgICAgKG5leHRPck9ic2VydmVyIGFzXG4gICAgICAgIHwgU3RvcmFnZU9ic2VydmVySW50ZXJuYWw8VXBsb2FkVGFza1NuYXBzaG90PlxuICAgICAgICB8IE5leHRGbjxVcGxvYWRUYXNrU25hcHNob3Q+KSB8fCB1bmRlZmluZWQsXG4gICAgICBlcnJvciB8fCB1bmRlZmluZWQsXG4gICAgICBjb21wbGV0ZWQgfHwgdW5kZWZpbmVkXG4gICAgKTtcbiAgICB0aGlzLl9hZGRPYnNlcnZlcihvYnNlcnZlcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX3JlbW92ZU9ic2VydmVyKG9ic2VydmVyKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgb2JqZWN0IGJlaGF2ZXMgbGlrZSBhIFByb21pc2UsIGFuZCByZXNvbHZlcyB3aXRoIGl0cyBzbmFwc2hvdCBkYXRhXG4gICAqIHdoZW4gdGhlIHVwbG9hZCBjb21wbGV0ZXMuXG4gICAqIEBwYXJhbSBvbkZ1bGZpbGxlZCAtIFRoZSBmdWxmaWxsbWVudCBjYWxsYmFjay4gUHJvbWlzZSBjaGFpbmluZyB3b3JrcyBhcyBub3JtYWwuXG4gICAqIEBwYXJhbSBvblJlamVjdGVkIC0gVGhlIHJlamVjdGlvbiBjYWxsYmFjay5cbiAgICovXG4gIHRoZW48VT4oXG4gICAgb25GdWxmaWxsZWQ/OiAoKHZhbHVlOiBVcGxvYWRUYXNrU25hcHNob3QpID0+IFUgfCBQcm9taXNlPFU+KSB8IG51bGwsXG4gICAgb25SZWplY3RlZD86ICgoZXJyb3I6IFN0b3JhZ2VFcnJvcikgPT4gVSB8IFByb21pc2U8VT4pIHwgbnVsbFxuICApOiBQcm9taXNlPFU+IHtcbiAgICAvLyBUaGVzZSBjYXN0cyBhcmUgbmVlZGVkIHNvIHRoYXQgVHlwZVNjcmlwdCBjYW4gaW5mZXIgdGhlIHR5cGVzIG9mIHRoZVxuICAgIC8vIHJlc3VsdGluZyBQcm9taXNlLlxuICAgIHJldHVybiB0aGlzLl9wcm9taXNlLnRoZW48VT4oXG4gICAgICBvbkZ1bGZpbGxlZCBhcyAodmFsdWU6IFVwbG9hZFRhc2tTbmFwc2hvdCkgPT4gVSB8IFByb21pc2U8VT4sXG4gICAgICBvblJlamVjdGVkIGFzICgoZXJyb3I6IHVua25vd24pID0+IFByb21pc2U8bmV2ZXI+KSB8IG51bGxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEVxdWl2YWxlbnQgdG8gY2FsbGluZyBgdGhlbihudWxsLCBvblJlamVjdGVkKWAuXG4gICAqL1xuICBjYXRjaDxUPihvblJlamVjdGVkOiAocDE6IFN0b3JhZ2VFcnJvcikgPT4gVCB8IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGdpdmVuIG9ic2VydmVyLlxuICAgKi9cbiAgcHJpdmF0ZSBfYWRkT2JzZXJ2ZXIob2JzZXJ2ZXI6IE9ic2VydmVyPFVwbG9hZFRhc2tTbmFwc2hvdD4pOiB2b2lkIHtcbiAgICB0aGlzLl9vYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXIob2JzZXJ2ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGdpdmVuIG9ic2VydmVyLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXI6IE9ic2VydmVyPFVwbG9hZFRhc2tTbmFwc2hvdD4pOiB2b2lkIHtcbiAgICBjb25zdCBpID0gdGhpcy5fb2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9ub3RpZnlPYnNlcnZlcnMoKTogdm9pZCB7XG4gICAgdGhpcy5fZmluaXNoUHJvbWlzZSgpO1xuICAgIGNvbnN0IG9ic2VydmVycyA9IHRoaXMuX29ic2VydmVycy5zbGljZSgpO1xuICAgIG9ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHtcbiAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVyKG9ic2VydmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbmlzaFByb21pc2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jlc29sdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHRyaWdnZXJlZCA9IHRydWU7XG4gICAgICBzd2l0Y2ggKHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLl9zdGF0ZSkpIHtcbiAgICAgICAgY2FzZSBUYXNrU3RhdGUuU1VDQ0VTUzpcbiAgICAgICAgICBmYnNBc3luYyh0aGlzLl9yZXNvbHZlLmJpbmQobnVsbCwgdGhpcy5zbmFwc2hvdCkpKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVGFza1N0YXRlLkNBTkNFTEVEOlxuICAgICAgICBjYXNlIFRhc2tTdGF0ZS5FUlJPUjpcbiAgICAgICAgICBjb25zdCB0b0NhbGwgPSB0aGlzLl9yZWplY3QgYXMgKHAxOiBTdG9yYWdlRXJyb3IpID0+IHZvaWQ7XG4gICAgICAgICAgZmJzQXN5bmModG9DYWxsLmJpbmQobnVsbCwgdGhpcy5fZXJyb3IgYXMgU3RvcmFnZUVycm9yKSkoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0cmlnZ2VyZWQpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fcmVqZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vdGlmeU9ic2VydmVyKG9ic2VydmVyOiBPYnNlcnZlcjxVcGxvYWRUYXNrU25hcHNob3Q+KTogdm9pZCB7XG4gICAgY29uc3QgZXh0ZXJuYWxTdGF0ZSA9IHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLl9zdGF0ZSk7XG4gICAgc3dpdGNoIChleHRlcm5hbFN0YXRlKSB7XG4gICAgICBjYXNlIFRhc2tTdGF0ZS5SVU5OSU5HOlxuICAgICAgY2FzZSBUYXNrU3RhdGUuUEFVU0VEOlxuICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgIGZic0FzeW5jKG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciwgdGhpcy5zbmFwc2hvdCkpKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFRhc2tTdGF0ZS5TVUNDRVNTOlxuICAgICAgICBpZiAob2JzZXJ2ZXIuY29tcGxldGUpIHtcbiAgICAgICAgICBmYnNBc3luYyhvYnNlcnZlci5jb21wbGV0ZS5iaW5kKG9ic2VydmVyKSkoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVGFza1N0YXRlLkNBTkNFTEVEOlxuICAgICAgY2FzZSBUYXNrU3RhdGUuRVJST1I6XG4gICAgICAgIGlmIChvYnNlcnZlci5lcnJvcikge1xuICAgICAgICAgIGZic0FzeW5jKFxuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciwgdGhpcy5fZXJyb3IgYXMgU3RvcmFnZUVycm9yKVxuICAgICAgICAgICkoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOiBhc3NlcnQoZmFsc2UpO1xuICAgICAgICBpZiAob2JzZXJ2ZXIuZXJyb3IpIHtcbiAgICAgICAgICBmYnNBc3luYyhcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIsIHRoaXMuX2Vycm9yIGFzIFN0b3JhZ2VFcnJvcilcbiAgICAgICAgICApKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzdW1lcyBhIHBhdXNlZCB0YXNrLiBIYXMgbm8gZWZmZWN0IG9uIGEgY3VycmVudGx5IHJ1bm5pbmcgb3IgZmFpbGVkIHRhc2suXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cbiAgICovXG4gIHJlc3VtZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWxpZCA9XG4gICAgICB0aGlzLl9zdGF0ZSA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0VEIHx8XG4gICAgICB0aGlzLl9zdGF0ZSA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORztcbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIHRoaXMuX3RyYW5zaXRpb24oSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyk7XG4gICAgfVxuICAgIHJldHVybiB2YWxpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXVzZXMgYSBjdXJyZW50bHkgcnVubmluZyB0YXNrLiBIYXMgbm8gZWZmZWN0IG9uIGEgcGF1c2VkIG9yIGZhaWxlZCB0YXNrLlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvcGVyYXRpb24gdG9vayBlZmZlY3QsIGZhbHNlIGlmIGlnbm9yZWQuXG4gICAqL1xuICBwYXVzZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB2YWxpZCA9IHRoaXMuX3N0YXRlID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HO1xuICAgIGlmICh2YWxpZCkge1xuICAgICAgdGhpcy5fdHJhbnNpdGlvbihJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbHMgYSBjdXJyZW50bHkgcnVubmluZyBvciBwYXVzZWQgdGFzay4gSGFzIG5vIGVmZmVjdCBvbiBhIGNvbXBsZXRlIG9yXG4gICAqIGZhaWxlZCB0YXNrLlxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvcGVyYXRpb24gdG9vayBlZmZlY3QsIGZhbHNlIGlmIGlnbm9yZWQuXG4gICAqL1xuICBjYW5jZWwoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdmFsaWQgPVxuICAgICAgdGhpcy5fc3RhdGUgPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgfHxcbiAgICAgIHRoaXMuX3N0YXRlID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HO1xuICAgIGlmICh2YWxpZCkge1xuICAgICAgdGhpcy5fdHJhbnNpdGlvbihJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgRGVmaW5lcyB0aGUgRmlyZWJhc2UgU3RvcmFnZVJlZmVyZW5jZSBjbGFzcy5cbiAqL1xuXG5pbXBvcnQgeyBGYnNCbG9iIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9ibG9iJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9sb2NhdGlvbic7XG5pbXBvcnQgeyBnZXRNYXBwaW5ncyB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24vbWV0YWRhdGEnO1xuaW1wb3J0IHsgY2hpbGQsIGxhc3RDb21wb25lbnQsIHBhcmVudCB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24vcGF0aCc7XG5pbXBvcnQge1xuICBkZWxldGVPYmplY3QgYXMgcmVxdWVzdHNEZWxldGVPYmplY3QsXG4gIGdldEJ5dGVzLFxuICBnZXREb3dubG9hZFVybCBhcyByZXF1ZXN0c0dldERvd25sb2FkVXJsLFxuICBnZXRNZXRhZGF0YSBhcyByZXF1ZXN0c0dldE1ldGFkYXRhLFxuICBsaXN0IGFzIHJlcXVlc3RzTGlzdCxcbiAgbXVsdGlwYXJ0VXBsb2FkLFxuICB1cGRhdGVNZXRhZGF0YSBhcyByZXF1ZXN0c1VwZGF0ZU1ldGFkYXRhXG59IGZyb20gJy4vaW1wbGVtZW50YXRpb24vcmVxdWVzdHMnO1xuaW1wb3J0IHsgTGlzdE9wdGlvbnMsIFVwbG9hZFJlc3VsdCB9IGZyb20gJy4vcHVibGljLXR5cGVzJztcbmltcG9ydCB7IGRhdGFGcm9tU3RyaW5nLCBTdHJpbmdGb3JtYXQgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL3N0cmluZyc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHsgRmlyZWJhc2VTdG9yYWdlSW1wbCB9IGZyb20gJy4vc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0UmVzdWx0IH0gZnJvbSAnLi9saXN0JztcbmltcG9ydCB7IFVwbG9hZFRhc2sgfSBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgaW52YWxpZFJvb3RPcGVyYXRpb24sIG5vRG93bmxvYWRVUkwgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL2Vycm9yJztcbmltcG9ydCB7IHZhbGlkYXRlTnVtYmVyIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi90eXBlJztcbmltcG9ydCB7XG4gIG5ld0Jsb2JDb25uZWN0aW9uLFxuICBuZXdCeXRlc0Nvbm5lY3Rpb24sXG4gIG5ld1N0cmVhbUNvbm5lY3Rpb24sXG4gIG5ld1RleHRDb25uZWN0aW9uXG59IGZyb20gJy4vcGxhdGZvcm0vY29ubmVjdGlvbic7XG5pbXBvcnQgeyBSZXF1ZXN0SW5mbyB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24vcmVxdWVzdGluZm8nO1xuXG4vKipcbiAqIFByb3ZpZGVzIG1ldGhvZHMgdG8gaW50ZXJhY3Qgd2l0aCBhIGJ1Y2tldCBpbiB0aGUgRmlyZWJhc2UgU3RvcmFnZSBzZXJ2aWNlLlxuICogQGludGVybmFsXG4gKiBAcGFyYW0gX2xvY2F0aW9uIC0gQW4gZmJzLmxvY2F0aW9uLCBvciB0aGUgVVJMIGF0XG4gKiAgICAgd2hpY2ggdG8gYmFzZSB0aGlzIG9iamVjdCwgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybXM6XG4gKiAgICAgICAgIGdzOi8vPGJ1Y2tldD4vPG9iamVjdC1wYXRoPlxuICogICAgICAgICBodHRwW3NdOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL1xuICogICAgICAgICAgICAgICAgICAgICA8YXBpLXZlcnNpb24+L2IvPGJ1Y2tldD4vby88b2JqZWN0LXBhdGg+XG4gKiAgICAgQW55IHF1ZXJ5IG9yIGZyYWdtZW50IHN0cmluZ3Mgd2lsbCBiZSBpZ25vcmVkIGluIHRoZSBodHRwW3NdXG4gKiAgICAgZm9ybWF0LiBJZiBubyB2YWx1ZSBpcyBwYXNzZWQsIHRoZSBzdG9yYWdlIG9iamVjdCB3aWxsIHVzZSBhIFVSTCBiYXNlZCBvblxuICogICAgIHRoZSBwcm9qZWN0IElEIG9mIHRoZSBiYXNlIGZpcmViYXNlLkFwcCBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZmVyZW5jZSB7XG4gIF9sb2NhdGlvbjogTG9jYXRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfc2VydmljZTogRmlyZWJhc2VTdG9yYWdlSW1wbCxcbiAgICBsb2NhdGlvbjogc3RyaW5nIHwgTG9jYXRpb25cbiAgKSB7XG4gICAgaWYgKGxvY2F0aW9uIGluc3RhbmNlb2YgTG9jYXRpb24pIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uID0gTG9jYXRpb24ubWFrZUZyb21VcmwobG9jYXRpb24sIF9zZXJ2aWNlLmhvc3QpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBVUkwgZm9yIHRoZSBidWNrZXQgYW5kIHBhdGggdGhpcyBvYmplY3QgcmVmZXJlbmNlcyxcbiAgICogICAgIGluIHRoZSBmb3JtIGdzOi8vPGJ1Y2tldD4vPG9iamVjdC1wYXRoPlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdnczovLycgKyB0aGlzLl9sb2NhdGlvbi5idWNrZXQgKyAnLycgKyB0aGlzLl9sb2NhdGlvbi5wYXRoO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9uZXdSZWYoXG4gICAgc2VydmljZTogRmlyZWJhc2VTdG9yYWdlSW1wbCxcbiAgICBsb2NhdGlvbjogTG9jYXRpb25cbiAgKTogUmVmZXJlbmNlIHtcbiAgICByZXR1cm4gbmV3IFJlZmVyZW5jZShzZXJ2aWNlLCBsb2NhdGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIHJvb3Qgb2YgdGhpcyBvYmplY3QncyBidWNrZXQuXG4gICAqL1xuICBnZXQgcm9vdCgpOiBSZWZlcmVuY2Uge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMuX2xvY2F0aW9uLmJ1Y2tldCwgJycpO1xuICAgIHJldHVybiB0aGlzLl9uZXdSZWYodGhpcy5fc2VydmljZSwgbG9jYXRpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBidWNrZXQgY29udGFpbmluZyB0aGlzIHJlZmVyZW5jZSdzIG9iamVjdC5cbiAgICovXG4gIGdldCBidWNrZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb24uYnVja2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmdWxsIHBhdGggb2YgdGhpcyBvYmplY3QuXG4gICAqL1xuICBnZXQgZnVsbFBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb24ucGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgbmFtZSBvZiB0aGlzIG9iamVjdCwgd2hpY2ggaXMgdGhlIGxhc3QgY29tcG9uZW50IG9mIHRoZSBmdWxsIHBhdGguXG4gICAqIEZvciBleGFtcGxlLCBpZiBmdWxsUGF0aCBpcyAnZnVsbC9wYXRoL2ltYWdlLnBuZycsIG5hbWUgaXMgJ2ltYWdlLnBuZycuXG4gICAqL1xuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBsYXN0Q29tcG9uZW50KHRoaXMuX2xvY2F0aW9uLnBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBgU3RvcmFnZVNlcnZpY2VgIGluc3RhbmNlIHRoaXMgYFN0b3JhZ2VSZWZlcmVuY2VgIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAgICovXG4gIGdldCBzdG9yYWdlKCk6IEZpcmViYXNlU3RvcmFnZUltcGwge1xuICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgYFN0b3JhZ2VSZWZlcmVuY2VgIHBvaW50aW5nIHRvIHRoZSBwYXJlbnQgbG9jYXRpb24gb2YgdGhpcyBgU3RvcmFnZVJlZmVyZW5jZWAsIG9yIG51bGwgaWZcbiAgICogdGhpcyByZWZlcmVuY2UgaXMgdGhlIHJvb3QuXG4gICAqL1xuICBnZXQgcGFyZW50KCk6IFJlZmVyZW5jZSB8IG51bGwge1xuICAgIGNvbnN0IG5ld1BhdGggPSBwYXJlbnQodGhpcy5fbG9jYXRpb24ucGF0aCk7XG4gICAgaWYgKG5ld1BhdGggPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbih0aGlzLl9sb2NhdGlvbi5idWNrZXQsIG5ld1BhdGgpO1xuICAgIHJldHVybiBuZXcgUmVmZXJlbmNlKHRoaXMuX3NlcnZpY2UsIGxvY2F0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIHRocm93IGFuIGVycm9yIGluIG1ldGhvZHMgdGhhdCBkbyBub3QgYWNjZXB0IGEgcm9vdCByZWZlcmVuY2UuXG4gICAqL1xuICBfdGhyb3dJZlJvb3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvY2F0aW9uLnBhdGggPT09ICcnKSB7XG4gICAgICB0aHJvdyBpbnZhbGlkUm9vdE9wZXJhdGlvbihuYW1lKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBEb3dubG9hZCB0aGUgYnl0ZXMgYXQgdGhlIG9iamVjdCdzIGxvY2F0aW9uLlxuICogQHJldHVybnMgQSBQcm9taXNlIGNvbnRhaW5pbmcgdGhlIGRvd25sb2FkZWQgYnl0ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeXRlc0ludGVybmFsKFxuICByZWY6IFJlZmVyZW5jZSxcbiAgbWF4RG93bmxvYWRTaXplQnl0ZXM/OiBudW1iZXJcbik6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgcmVmLl90aHJvd0lmUm9vdCgnZ2V0Qnl0ZXMnKTtcbiAgY29uc3QgcmVxdWVzdEluZm8gPSBnZXRCeXRlcyhcbiAgICByZWYuc3RvcmFnZSxcbiAgICByZWYuX2xvY2F0aW9uLFxuICAgIG1heERvd25sb2FkU2l6ZUJ5dGVzXG4gICk7XG4gIHJldHVybiByZWYuc3RvcmFnZVxuICAgIC5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld0J5dGVzQ29ubmVjdGlvbilcbiAgICAudGhlbihieXRlcyA9PlxuICAgICAgbWF4RG93bmxvYWRTaXplQnl0ZXMgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IC8vIEdDUyBtYXkgbm90IGhvbm9yIHRoZSBSYW5nZSBoZWFkZXIgZm9yIHNtYWxsIGZpbGVzXG4gICAgICAgICAgKGJ5dGVzIGFzIEFycmF5QnVmZmVyKS5zbGljZSgwLCBtYXhEb3dubG9hZFNpemVCeXRlcylcbiAgICAgICAgOiAoYnl0ZXMgYXMgQXJyYXlCdWZmZXIpXG4gICAgKTtcbn1cblxuLyoqXG4gKiBEb3dubG9hZCB0aGUgYnl0ZXMgYXQgdGhlIG9iamVjdCdzIGxvY2F0aW9uLlxuICogQHJldHVybnMgQSBQcm9taXNlIGNvbnRhaW5pbmcgdGhlIGRvd25sb2FkZWQgYmxvYi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJsb2JJbnRlcm5hbChcbiAgcmVmOiBSZWZlcmVuY2UsXG4gIG1heERvd25sb2FkU2l6ZUJ5dGVzPzogbnVtYmVyXG4pOiBQcm9taXNlPEJsb2I+IHtcbiAgcmVmLl90aHJvd0lmUm9vdCgnZ2V0QmxvYicpO1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IGdldEJ5dGVzKFxuICAgIHJlZi5zdG9yYWdlLFxuICAgIHJlZi5fbG9jYXRpb24sXG4gICAgbWF4RG93bmxvYWRTaXplQnl0ZXNcbiAgKTtcbiAgcmV0dXJuIHJlZi5zdG9yYWdlXG4gICAgLm1ha2VSZXF1ZXN0V2l0aFRva2VucyhyZXF1ZXN0SW5mbywgbmV3QmxvYkNvbm5lY3Rpb24pXG4gICAgLnRoZW4oYmxvYiA9PlxuICAgICAgbWF4RG93bmxvYWRTaXplQnl0ZXMgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IC8vIEdDUyBtYXkgbm90IGhvbm9yIHRoZSBSYW5nZSBoZWFkZXIgZm9yIHNtYWxsIGZpbGVzXG4gICAgICAgICAgKGJsb2IgYXMgQmxvYikuc2xpY2UoMCwgbWF4RG93bmxvYWRTaXplQnl0ZXMpXG4gICAgICAgIDogKGJsb2IgYXMgQmxvYilcbiAgICApO1xufVxuXG4vKiogU3RyZWFtIHRoZSBieXRlcyBhdCB0aGUgb2JqZWN0J3MgbG9jYXRpb24uICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyZWFtSW50ZXJuYWwoXG4gIHJlZjogUmVmZXJlbmNlLFxuICBtYXhEb3dubG9hZFNpemVCeXRlcz86IG51bWJlclxuKTogUmVhZGFibGVTdHJlYW0ge1xuICByZWYuX3Rocm93SWZSb290KCdnZXRTdHJlYW0nKTtcbiAgY29uc3QgcmVxdWVzdEluZm86IFJlcXVlc3RJbmZvPFJlYWRhYmxlU3RyZWFtLCBSZWFkYWJsZVN0cmVhbT4gPSBnZXRCeXRlcyhcbiAgICByZWYuc3RvcmFnZSxcbiAgICByZWYuX2xvY2F0aW9uLFxuICAgIG1heERvd25sb2FkU2l6ZUJ5dGVzXG4gICk7XG5cbiAgLy8gVHJhbnNmb3JtcyB0aGUgc3RyZWFtIHNvIHRoYXQgb25seSBgbWF4RG93bmxvYWRTaXplQnl0ZXNgIGJ5dGVzIGFyZSBwaXBlZCB0byB0aGUgcmVzdWx0XG4gIGNvbnN0IG5ld01heFNpemVUcmFuc2Zvcm0gPSAobjogbnVtYmVyKTogVHJhbnNmb3JtZXIgPT4ge1xuICAgIGxldCBtaXNzaW5nQnl0ZXMgPSBuO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm0oY2h1bmssIGNvbnRyb2xsZXI6IFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKSB7XG4gICAgICAgIC8vIEdDUyBtYXkgbm90IGhvbm9yIHRoZSBSYW5nZSBoZWFkZXIgZm9yIHNtYWxsIGZpbGVzXG4gICAgICAgIGlmIChjaHVuay5sZW5ndGggPCBtaXNzaW5nQnl0ZXMpIHtcbiAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUoY2h1bmspO1xuICAgICAgICAgIG1pc3NpbmdCeXRlcyAtPSBjaHVuay5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udHJvbGxlci5lbnF1ZXVlKGNodW5rLnNsaWNlKDAsIG1pc3NpbmdCeXRlcykpO1xuICAgICAgICAgIGNvbnRyb2xsZXIudGVybWluYXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9XG4gICAgbWF4RG93bmxvYWRTaXplQnl0ZXMgIT09IHVuZGVmaW5lZFxuICAgICAgPyBuZXcgVHJhbnNmb3JtU3RyZWFtKG5ld01heFNpemVUcmFuc2Zvcm0obWF4RG93bmxvYWRTaXplQnl0ZXMpKVxuICAgICAgOiBuZXcgVHJhbnNmb3JtU3RyZWFtKCk7IC8vIFRoZSBkZWZhdWx0IHRyYW5zZm9ybWVyIGZvcndhcmRzIGFsbCBjaHVua3MgdG8gaXRzIHJlYWRhYmxlIHNpZGVcblxuICByZWYuc3RvcmFnZVxuICAgIC5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld1N0cmVhbUNvbm5lY3Rpb24pXG4gICAgLnRoZW4ocmVhZGFibGVTdHJlYW0gPT4gcmVhZGFibGVTdHJlYW0ucGlwZVRocm91Z2gocmVzdWx0KSlcbiAgICAuY2F0Y2goZXJyID0+IHJlc3VsdC53cml0YWJsZS5hYm9ydChlcnIpKTtcblxuICByZXR1cm4gcmVzdWx0LnJlYWRhYmxlO1xufVxuXG4vKipcbiAqIFVwbG9hZHMgZGF0YSB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxuICogVGhlIHVwbG9hZCBpcyBub3QgcmVzdW1hYmxlLlxuICpcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHdoZXJlIGRhdGEgc2hvdWxkIGJlIHVwbG9hZGVkLlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byB1cGxvYWQuXG4gKiBAcGFyYW0gbWV0YWRhdGEgLSBNZXRhZGF0YSBmb3IgdGhlIG5ld2x5IHVwbG9hZGVkIGRhdGEuXG4gKiBAcmV0dXJucyBBIFByb21pc2UgY29udGFpbmluZyBhbiBVcGxvYWRSZXN1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEJ5dGVzKFxuICByZWY6IFJlZmVyZW5jZSxcbiAgZGF0YTogQmxvYiB8IFVpbnQ4QXJyYXkgfCBBcnJheUJ1ZmZlcixcbiAgbWV0YWRhdGE/OiBNZXRhZGF0YVxuKTogUHJvbWlzZTxVcGxvYWRSZXN1bHQ+IHtcbiAgcmVmLl90aHJvd0lmUm9vdCgndXBsb2FkQnl0ZXMnKTtcbiAgY29uc3QgcmVxdWVzdEluZm8gPSBtdWx0aXBhcnRVcGxvYWQoXG4gICAgcmVmLnN0b3JhZ2UsXG4gICAgcmVmLl9sb2NhdGlvbixcbiAgICBnZXRNYXBwaW5ncygpLFxuICAgIG5ldyBGYnNCbG9iKGRhdGEsIHRydWUpLFxuICAgIG1ldGFkYXRhXG4gICk7XG4gIHJldHVybiByZWYuc3RvcmFnZVxuICAgIC5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld1RleHRDb25uZWN0aW9uKVxuICAgIC50aGVuKGZpbmFsTWV0YWRhdGEgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWV0YWRhdGE6IGZpbmFsTWV0YWRhdGEsXG4gICAgICAgIHJlZlxuICAgICAgfTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBVcGxvYWRzIGRhdGEgdG8gdGhpcyBvYmplY3QncyBsb2NhdGlvbi5cbiAqIFRoZSB1cGxvYWQgY2FuIGJlIHBhdXNlZCBhbmQgcmVzdW1lZCwgYW5kIGV4cG9zZXMgcHJvZ3Jlc3MgdXBkYXRlcy5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHdoZXJlIGRhdGEgc2hvdWxkIGJlIHVwbG9hZGVkLlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byB1cGxvYWQuXG4gKiBAcGFyYW0gbWV0YWRhdGEgLSBNZXRhZGF0YSBmb3IgdGhlIG5ld2x5IHVwbG9hZGVkIGRhdGEuXG4gKiBAcmV0dXJucyBBbiBVcGxvYWRUYXNrXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRCeXRlc1Jlc3VtYWJsZShcbiAgcmVmOiBSZWZlcmVuY2UsXG4gIGRhdGE6IEJsb2IgfCBVaW50OEFycmF5IHwgQXJyYXlCdWZmZXIsXG4gIG1ldGFkYXRhPzogTWV0YWRhdGFcbik6IFVwbG9hZFRhc2sge1xuICByZWYuX3Rocm93SWZSb290KCd1cGxvYWRCeXRlc1Jlc3VtYWJsZScpO1xuICByZXR1cm4gbmV3IFVwbG9hZFRhc2socmVmLCBuZXcgRmJzQmxvYihkYXRhKSwgbWV0YWRhdGEpO1xufVxuXG4vKipcbiAqIFVwbG9hZHMgYSBzdHJpbmcgdG8gdGhpcyBvYmplY3QncyBsb2NhdGlvbi5cbiAqIFRoZSB1cGxvYWQgaXMgbm90IHJlc3VtYWJsZS5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHdoZXJlIHN0cmluZyBzaG91bGQgYmUgdXBsb2FkZWQuXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgc3RyaW5nIHRvIHVwbG9hZC5cbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgZm9ybWF0IG9mIHRoZSBzdHJpbmcgdG8gdXBsb2FkLlxuICogQHBhcmFtIG1ldGFkYXRhIC0gTWV0YWRhdGEgZm9yIHRoZSBuZXdseSB1cGxvYWRlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyBBIFByb21pc2UgY29udGFpbmluZyBhbiBVcGxvYWRSZXN1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZFN0cmluZyhcbiAgcmVmOiBSZWZlcmVuY2UsXG4gIHZhbHVlOiBzdHJpbmcsXG4gIGZvcm1hdDogU3RyaW5nRm9ybWF0ID0gU3RyaW5nRm9ybWF0LlJBVyxcbiAgbWV0YWRhdGE/OiBNZXRhZGF0YVxuKTogUHJvbWlzZTxVcGxvYWRSZXN1bHQ+IHtcbiAgcmVmLl90aHJvd0lmUm9vdCgndXBsb2FkU3RyaW5nJyk7XG4gIGNvbnN0IGRhdGEgPSBkYXRhRnJvbVN0cmluZyhmb3JtYXQsIHZhbHVlKTtcbiAgY29uc3QgbWV0YWRhdGFDbG9uZSA9IHsgLi4ubWV0YWRhdGEgfSBhcyBNZXRhZGF0YTtcbiAgaWYgKG1ldGFkYXRhQ2xvbmVbJ2NvbnRlbnRUeXBlJ10gPT0gbnVsbCAmJiBkYXRhLmNvbnRlbnRUeXBlICE9IG51bGwpIHtcbiAgICBtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddID0gZGF0YS5jb250ZW50VHlwZSE7XG4gIH1cbiAgcmV0dXJuIHVwbG9hZEJ5dGVzKHJlZiwgZGF0YS5kYXRhLCBtZXRhZGF0YUNsb25lKTtcbn1cblxuLyoqXG4gKiBMaXN0IGFsbCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cbiAqXG4gKiBUaGlzIGlzIGEgaGVscGVyIG1ldGhvZCBmb3IgY2FsbGluZyBsaXN0KCkgcmVwZWF0ZWRseSB1bnRpbCB0aGVyZSBhcmVcbiAqIG5vIG1vcmUgcmVzdWx0cy4gVGhlIGRlZmF1bHQgcGFnaW5hdGlvbiBzaXplIGlzIDEwMDAuXG4gKlxuICogTm90ZTogVGhlIHJlc3VsdHMgbWF5IG5vdCBiZSBjb25zaXN0ZW50IGlmIG9iamVjdHMgYXJlIGNoYW5nZWQgd2hpbGUgdGhpc1xuICogb3BlcmF0aW9uIGlzIHJ1bm5pbmcuXG4gKlxuICogV2FybmluZzogbGlzdEFsbCBtYXkgcG90ZW50aWFsbHkgY29uc3VtZSB0b28gbWFueSByZXNvdXJjZXMgaWYgdGhlcmUgYXJlXG4gKiB0b28gbWFueSByZXN1bHRzLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2UgdG8gZ2V0IGxpc3QgZnJvbS5cbiAqXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGFsbCB0aGUgaXRlbXMgYW5kIHByZWZpeGVzIHVuZGVyXG4gKiAgICAgIHRoZSBjdXJyZW50IHN0b3JhZ2UgcmVmZXJlbmNlLiBgcHJlZml4ZXNgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG9cbiAqICAgICAgc3ViLWRpcmVjdG9yaWVzIGFuZCBgaXRlbXNgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiB0aGlzXG4gKiAgICAgIGZvbGRlci4gYG5leHRQYWdlVG9rZW5gIGlzIG5ldmVyIHJldHVybmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbGlzdEFsbChyZWY6IFJlZmVyZW5jZSk6IFByb21pc2U8TGlzdFJlc3VsdD4ge1xuICBjb25zdCBhY2N1bXVsYXRvcjogTGlzdFJlc3VsdCA9IHtcbiAgICBwcmVmaXhlczogW10sXG4gICAgaXRlbXM6IFtdXG4gIH07XG4gIHJldHVybiBsaXN0QWxsSGVscGVyKHJlZiwgYWNjdW11bGF0b3IpLnRoZW4oKCkgPT4gYWNjdW11bGF0b3IpO1xufVxuXG4vKipcbiAqIFNlcGFyYXRlZCBmcm9tIGxpc3RBbGwgYmVjYXVzZSBhc3luYyBmdW5jdGlvbnMgY2FuJ3QgdXNlIFwiYXJndW1lbnRzXCIuXG4gKiBAcGFyYW0gcmVmXG4gKiBAcGFyYW0gYWNjdW11bGF0b3JcbiAqIEBwYXJhbSBwYWdlVG9rZW5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbGlzdEFsbEhlbHBlcihcbiAgcmVmOiBSZWZlcmVuY2UsXG4gIGFjY3VtdWxhdG9yOiBMaXN0UmVzdWx0LFxuICBwYWdlVG9rZW4/OiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBvcHQ6IExpc3RPcHRpb25zID0ge1xuICAgIC8vIG1heFJlc3VsdHMgaXMgMTAwMCBieSBkZWZhdWx0LlxuICAgIHBhZ2VUb2tlblxuICB9O1xuICBjb25zdCBuZXh0UGFnZSA9IGF3YWl0IGxpc3QocmVmLCBvcHQpO1xuICBhY2N1bXVsYXRvci5wcmVmaXhlcy5wdXNoKC4uLm5leHRQYWdlLnByZWZpeGVzKTtcbiAgYWNjdW11bGF0b3IuaXRlbXMucHVzaCguLi5uZXh0UGFnZS5pdGVtcyk7XG4gIGlmIChuZXh0UGFnZS5uZXh0UGFnZVRva2VuICE9IG51bGwpIHtcbiAgICBhd2FpdCBsaXN0QWxsSGVscGVyKHJlZiwgYWNjdW11bGF0b3IsIG5leHRQYWdlLm5leHRQYWdlVG9rZW4pO1xuICB9XG59XG5cbi8qKlxuICogTGlzdCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cbiAqXG4gKiBMaXN0IEFQSSBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgRmlyZWJhc2UgUnVsZXMgVmVyc2lvbiAyLlxuICpcbiAqIEdDUyBpcyBhIGtleS1ibG9iIHN0b3JlLiBGaXJlYmFzZSBTdG9yYWdlIGltcG9zZXMgdGhlIHNlbWFudGljIG9mICcvJ1xuICogZGVsaW1pdGVkIGZvbGRlciBzdHJ1Y3R1cmUuXG4gKiBSZWZlciB0byBHQ1MncyBMaXN0IEFQSSBpZiB5b3Ugd2FudCB0byBsZWFybiBtb3JlLlxuICpcbiAqIFRvIGFkaGVyZSB0byBGaXJlYmFzZSBSdWxlcydzIFNlbWFudGljcywgRmlyZWJhc2UgU3RvcmFnZSBkb2VzIG5vdFxuICogc3VwcG9ydCBvYmplY3RzIHdob3NlIHBhdGhzIGVuZCB3aXRoIFwiL1wiIG9yIGNvbnRhaW4gdHdvIGNvbnNlY3V0aXZlXG4gKiBcIi9cInMuIEZpcmViYXNlIFN0b3JhZ2UgTGlzdCBBUEkgd2lsbCBmaWx0ZXIgdGhlc2UgdW5zdXBwb3J0ZWQgb2JqZWN0cy5cbiAqIGxpc3QoKSBtYXkgZmFpbCBpZiB0aGVyZSBhcmUgdG9vIG1hbnkgdW5zdXBwb3J0ZWQgb2JqZWN0cyBpbiB0aGUgYnVja2V0LlxuICogQHB1YmxpY1xuICpcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHRvIGdldCBsaXN0IGZyb20uXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFNlZSBMaXN0T3B0aW9ucyBmb3IgZGV0YWlscy5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcy5cbiAqICAgICAgYHByZWZpeGVzYCBjb250YWlucyByZWZlcmVuY2VzIHRvIHN1Yi1mb2xkZXJzIGFuZCBgaXRlbXNgXG4gKiAgICAgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiB0aGlzIGZvbGRlci4gYG5leHRQYWdlVG9rZW5gXG4gKiAgICAgIGNhbiBiZSB1c2VkIHRvIGdldCB0aGUgcmVzdCBvZiB0aGUgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3QoXG4gIHJlZjogUmVmZXJlbmNlLFxuICBvcHRpb25zPzogTGlzdE9wdGlvbnMgfCBudWxsXG4pOiBQcm9taXNlPExpc3RSZXN1bHQ+IHtcbiAgaWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5tYXhSZXN1bHRzID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsaWRhdGVOdW1iZXIoXG4gICAgICAgICdvcHRpb25zLm1heFJlc3VsdHMnLFxuICAgICAgICAvKiBtaW5WYWx1ZT0gKi8gMSxcbiAgICAgICAgLyogbWF4VmFsdWU9ICovIDEwMDAsXG4gICAgICAgIG9wdGlvbnMubWF4UmVzdWx0c1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgb3AgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IHJlcXVlc3RzTGlzdChcbiAgICByZWYuc3RvcmFnZSxcbiAgICByZWYuX2xvY2F0aW9uLFxuICAgIC8qZGVsaW1pdGVyPSAqLyAnLycsXG4gICAgb3AucGFnZVRva2VuLFxuICAgIG9wLm1heFJlc3VsdHNcbiAgKTtcbiAgcmV0dXJuIHJlZi5zdG9yYWdlLm1ha2VSZXF1ZXN0V2l0aFRva2VucyhyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24pO1xufVxuXG4vKipcbiAqIEEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LiBJZiB0aGlzXG4gKiBvYmplY3QgZG9lc24ndCBleGlzdCBvciBtZXRhZGF0YSBjYW5ub3QgYmUgcmV0cmlldmVkLCB0aGUgcHJvbWlzZSBpc1xuICogcmVqZWN0ZWQuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB0byBnZXQgbWV0YWRhdGEgZnJvbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1ldGFkYXRhKHJlZjogUmVmZXJlbmNlKTogUHJvbWlzZTxNZXRhZGF0YT4ge1xuICByZWYuX3Rocm93SWZSb290KCdnZXRNZXRhZGF0YScpO1xuICBjb25zdCByZXF1ZXN0SW5mbyA9IHJlcXVlc3RzR2V0TWV0YWRhdGEoXG4gICAgcmVmLnN0b3JhZ2UsXG4gICAgcmVmLl9sb2NhdGlvbixcbiAgICBnZXRNYXBwaW5ncygpXG4gICk7XG4gIHJldHVybiByZWYuc3RvcmFnZS5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld1RleHRDb25uZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB0byB1cGRhdGUgbWV0YWRhdGEgZm9yLlxuICogQHBhcmFtIG1ldGFkYXRhIC0gVGhlIG5ldyBtZXRhZGF0YSBmb3IgdGhlIG9iamVjdC5cbiAqICAgICBPbmx5IHZhbHVlcyB0aGF0IGhhdmUgYmVlbiBleHBsaWNpdGx5IHNldCB3aWxsIGJlIGNoYW5nZWQuIEV4cGxpY2l0bHlcbiAqICAgICBzZXR0aW5nIGEgdmFsdWUgdG8gbnVsbCB3aWxsIHJlbW92ZSB0aGUgbWV0YWRhdGEuXG4gKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzXG4gKiAgICAgd2l0aCB0aGUgbmV3IG1ldGFkYXRhIGZvciB0aGlzIG9iamVjdC5cbiAqICAgICBTZWUgYGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UucHJvdG90eXBlLmdldE1ldGFkYXRhYFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTWV0YWRhdGEoXG4gIHJlZjogUmVmZXJlbmNlLFxuICBtZXRhZGF0YTogUGFydGlhbDxNZXRhZGF0YT5cbik6IFByb21pc2U8TWV0YWRhdGE+IHtcbiAgcmVmLl90aHJvd0lmUm9vdCgndXBkYXRlTWV0YWRhdGEnKTtcbiAgY29uc3QgcmVxdWVzdEluZm8gPSByZXF1ZXN0c1VwZGF0ZU1ldGFkYXRhKFxuICAgIHJlZi5zdG9yYWdlLFxuICAgIHJlZi5fbG9jYXRpb24sXG4gICAgbWV0YWRhdGEsXG4gICAgZ2V0TWFwcGluZ3MoKVxuICApO1xuICByZXR1cm4gcmVmLnN0b3JhZ2UubWFrZVJlcXVlc3RXaXRoVG9rZW5zKHJlcXVlc3RJbmZvLCBuZXdUZXh0Q29ubmVjdGlvbik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZG93bmxvYWQgVVJMIGZvciB0aGUgZ2l2ZW4gUmVmZXJlbmNlLlxuICogQHB1YmxpY1xuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkb3dubG9hZFxuICogICAgIFVSTCBmb3IgdGhpcyBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb3dubG9hZFVSTChyZWY6IFJlZmVyZW5jZSk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJlZi5fdGhyb3dJZlJvb3QoJ2dldERvd25sb2FkVVJMJyk7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gcmVxdWVzdHNHZXREb3dubG9hZFVybChcbiAgICByZWYuc3RvcmFnZSxcbiAgICByZWYuX2xvY2F0aW9uLFxuICAgIGdldE1hcHBpbmdzKClcbiAgKTtcbiAgcmV0dXJuIHJlZi5zdG9yYWdlXG4gICAgLm1ha2VSZXF1ZXN0V2l0aFRva2VucyhyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24pXG4gICAgLnRoZW4odXJsID0+IHtcbiAgICAgIGlmICh1cmwgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbm9Eb3dubG9hZFVSTCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVybDtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBEZWxldGVzIHRoZSBvYmplY3QgYXQgdGhpcyBsb2NhdGlvbi5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIGZvciBvYmplY3QgdG8gZGVsZXRlLlxuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyBpZiB0aGUgZGVsZXRpb24gc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVPYmplY3QocmVmOiBSZWZlcmVuY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmVmLl90aHJvd0lmUm9vdCgnZGVsZXRlT2JqZWN0Jyk7XG4gIGNvbnN0IHJlcXVlc3RJbmZvID0gcmVxdWVzdHNEZWxldGVPYmplY3QocmVmLnN0b3JhZ2UsIHJlZi5fbG9jYXRpb24pO1xuICByZXR1cm4gcmVmLnN0b3JhZ2UubWFrZVJlcXVlc3RXaXRoVG9rZW5zKHJlcXVlc3RJbmZvLCBuZXdUZXh0Q29ubmVjdGlvbik7XG59XG5cbi8qKlxuICogUmV0dXJucyByZWZlcmVuY2UgZm9yIG9iamVjdCBvYnRhaW5lZCBieSBhcHBlbmRpbmcgYGNoaWxkUGF0aGAgdG8gYHJlZmAuXG4gKlxuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2UgdG8gZ2V0IGNoaWxkIG9mLlxuICogQHBhcmFtIGNoaWxkUGF0aCAtIENoaWxkIHBhdGggZnJvbSBwcm92aWRlZCByZWYuXG4gKiBAcmV0dXJucyBBIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IG9idGFpbmVkIGJ5XG4gKiBhcHBlbmRpbmcgY2hpbGRQYXRoLCByZW1vdmluZyBhbnkgZHVwbGljYXRlLCBiZWdpbm5pbmcsIG9yIHRyYWlsaW5nXG4gKiBzbGFzaGVzLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9nZXRDaGlsZChyZWY6IFJlZmVyZW5jZSwgY2hpbGRQYXRoOiBzdHJpbmcpOiBSZWZlcmVuY2Uge1xuICBjb25zdCBuZXdQYXRoID0gY2hpbGQocmVmLl9sb2NhdGlvbi5wYXRoLCBjaGlsZFBhdGgpO1xuICBjb25zdCBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihyZWYuX2xvY2F0aW9uLmJ1Y2tldCwgbmV3UGF0aCk7XG4gIHJldHVybiBuZXcgUmVmZXJlbmNlKHJlZi5zdG9yYWdlLCBsb2NhdGlvbik7XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL2xvY2F0aW9uJztcbmltcG9ydCB7IEZhaWxSZXF1ZXN0IH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9mYWlscmVxdWVzdCc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBtYWtlUmVxdWVzdCB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24vcmVxdWVzdCc7XG5pbXBvcnQgeyBSZXF1ZXN0SW5mbyB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24vcmVxdWVzdGluZm8nO1xuaW1wb3J0IHsgUmVmZXJlbmNlLCBfZ2V0Q2hpbGQgfSBmcm9tICcuL3JlZmVyZW5jZSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlyZWJhc2VBdXRoSW50ZXJuYWxOYW1lIH0gZnJvbSAnQGZpcmViYXNlL2F1dGgtaW50ZXJvcC10eXBlcyc7XG5pbXBvcnQgeyBBcHBDaGVja0ludGVybmFsQ29tcG9uZW50TmFtZSB9IGZyb20gJ0BmaXJlYmFzZS9hcHAtY2hlY2staW50ZXJvcC10eXBlcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgeyBGaXJlYmFzZUFwcCwgRmlyZWJhc2VPcHRpb25zIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQge1xuICBDT05GSUdfU1RPUkFHRV9CVUNLRVRfS0VZLFxuICBERUZBVUxUX0hPU1QsXG4gIERFRkFVTFRfTUFYX09QRVJBVElPTl9SRVRSWV9USU1FLFxuICBERUZBVUxUX01BWF9VUExPQURfUkVUUllfVElNRVxufSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBpbnZhbGlkQXJndW1lbnQsXG4gIGFwcERlbGV0ZWQsXG4gIG5vRGVmYXVsdEJ1Y2tldFxufSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL2Vycm9yJztcbmltcG9ydCB7IHZhbGlkYXRlTnVtYmVyIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi90eXBlJztcbmltcG9ydCB7IEZpcmViYXNlU3RvcmFnZSB9IGZyb20gJy4vcHVibGljLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZU1vY2tVc2VyVG9rZW4sIEVtdWxhdG9yTW9ja1Rva2VuT3B0aW9ucyB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IENvbm5lY3Rpb24sIENvbm5lY3Rpb25UeXBlIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9jb25uZWN0aW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVXJsKHBhdGg/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIC9eW0EtWmEtel0rOlxcL1xcLy8udGVzdChwYXRoIGFzIHN0cmluZyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZpcmViYXNlU3RvcmFnZS5SZWZlcmVuY2UgZm9yIHRoZSBnaXZlbiB1cmwuXG4gKi9cbmZ1bmN0aW9uIHJlZkZyb21VUkwoc2VydmljZTogRmlyZWJhc2VTdG9yYWdlSW1wbCwgdXJsOiBzdHJpbmcpOiBSZWZlcmVuY2Uge1xuICByZXR1cm4gbmV3IFJlZmVyZW5jZShzZXJ2aWNlLCB1cmwpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIGZvciB0aGUgZ2l2ZW4gcGF0aCBpbiB0aGUgZGVmYXVsdFxuICogYnVja2V0LlxuICovXG5mdW5jdGlvbiByZWZGcm9tUGF0aChcbiAgcmVmOiBGaXJlYmFzZVN0b3JhZ2VJbXBsIHwgUmVmZXJlbmNlLFxuICBwYXRoPzogc3RyaW5nXG4pOiBSZWZlcmVuY2Uge1xuICBpZiAocmVmIGluc3RhbmNlb2YgRmlyZWJhc2VTdG9yYWdlSW1wbCkge1xuICAgIGNvbnN0IHNlcnZpY2UgPSByZWY7XG4gICAgaWYgKHNlcnZpY2UuX2J1Y2tldCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBub0RlZmF1bHRCdWNrZXQoKTtcbiAgICB9XG4gICAgY29uc3QgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZShzZXJ2aWNlLCBzZXJ2aWNlLl9idWNrZXQhKTtcbiAgICBpZiAocGF0aCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gcmVmRnJvbVBhdGgocmVmZXJlbmNlLCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gcmVmIGlzIGEgUmVmZXJlbmNlXG4gICAgaWYgKHBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIF9nZXRDaGlsZChyZWYsIHBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVmO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdG9yYWdlIFJlZmVyZW5jZSBmb3IgdGhlIGdpdmVuIHVybC5cbiAqIEBwYXJhbSBzdG9yYWdlIC0gYFN0b3JhZ2VgIGluc3RhbmNlLlxuICogQHBhcmFtIHVybCAtIFVSTC4gSWYgZW1wdHksIHJldHVybnMgcm9vdCByZWZlcmVuY2UuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWYoc3RvcmFnZTogRmlyZWJhc2VTdG9yYWdlSW1wbCwgdXJsPzogc3RyaW5nKTogUmVmZXJlbmNlO1xuLyoqXG4gKiBSZXR1cm5zIGEgc3RvcmFnZSBSZWZlcmVuY2UgZm9yIHRoZSBnaXZlbiBwYXRoIGluIHRoZVxuICogZGVmYXVsdCBidWNrZXQuXG4gKiBAcGFyYW0gc3RvcmFnZU9yUmVmIC0gYFN0b3JhZ2VgIHNlcnZpY2Ugb3Igc3RvcmFnZSBgUmVmZXJlbmNlYC5cbiAqIEBwYXJhbSBwYXRoT3JVcmxTdG9yYWdlIC0gcGF0aC4gSWYgZW1wdHksIHJldHVybnMgcm9vdCByZWZlcmVuY2UgKGlmIFN0b3JhZ2VcbiAqIGluc3RhbmNlIHByb3ZpZGVkKSBvciByZXR1cm5zIHNhbWUgcmVmZXJlbmNlIChpZiBSZWZlcmVuY2UgcHJvdmlkZWQpLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmKFxuICBzdG9yYWdlT3JSZWY6IEZpcmViYXNlU3RvcmFnZUltcGwgfCBSZWZlcmVuY2UsXG4gIHBhdGg/OiBzdHJpbmdcbik6IFJlZmVyZW5jZTtcbmV4cG9ydCBmdW5jdGlvbiByZWYoXG4gIHNlcnZpY2VPclJlZjogRmlyZWJhc2VTdG9yYWdlSW1wbCB8IFJlZmVyZW5jZSxcbiAgcGF0aE9yVXJsPzogc3RyaW5nXG4pOiBSZWZlcmVuY2UgfCBudWxsIHtcbiAgaWYgKHBhdGhPclVybCAmJiBpc1VybChwYXRoT3JVcmwpKSB7XG4gICAgaWYgKHNlcnZpY2VPclJlZiBpbnN0YW5jZW9mIEZpcmViYXNlU3RvcmFnZUltcGwpIHtcbiAgICAgIHJldHVybiByZWZGcm9tVVJMKHNlcnZpY2VPclJlZiwgcGF0aE9yVXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50KFxuICAgICAgICAnVG8gdXNlIHJlZihzZXJ2aWNlLCB1cmwpLCB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0b3JhZ2UgaW5zdGFuY2UuJ1xuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlZkZyb21QYXRoKHNlcnZpY2VPclJlZiwgcGF0aE9yVXJsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0QnVja2V0KFxuICBob3N0OiBzdHJpbmcsXG4gIGNvbmZpZz86IEZpcmViYXNlT3B0aW9uc1xuKTogTG9jYXRpb24gfCBudWxsIHtcbiAgY29uc3QgYnVja2V0U3RyaW5nID0gY29uZmlnPy5bQ09ORklHX1NUT1JBR0VfQlVDS0VUX0tFWV07XG4gIGlmIChidWNrZXRTdHJpbmcgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBMb2NhdGlvbi5tYWtlRnJvbUJ1Y2tldFNwZWMoYnVja2V0U3RyaW5nLCBob3N0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3RTdG9yYWdlRW11bGF0b3IoXG4gIHN0b3JhZ2U6IEZpcmViYXNlU3RvcmFnZUltcGwsXG4gIGhvc3Q6IHN0cmluZyxcbiAgcG9ydDogbnVtYmVyLFxuICBvcHRpb25zOiB7XG4gICAgbW9ja1VzZXJUb2tlbj86IEVtdWxhdG9yTW9ja1Rva2VuT3B0aW9ucyB8IHN0cmluZztcbiAgfSA9IHt9XG4pOiB2b2lkIHtcbiAgc3RvcmFnZS5ob3N0ID0gYCR7aG9zdH06JHtwb3J0fWA7XG4gIHN0b3JhZ2UuX3Byb3RvY29sID0gJ2h0dHAnO1xuICBjb25zdCB7IG1vY2tVc2VyVG9rZW4gfSA9IG9wdGlvbnM7XG4gIGlmIChtb2NrVXNlclRva2VuKSB7XG4gICAgc3RvcmFnZS5fb3ZlcnJpZGVBdXRoVG9rZW4gPVxuICAgICAgdHlwZW9mIG1vY2tVc2VyVG9rZW4gPT09ICdzdHJpbmcnXG4gICAgICAgID8gbW9ja1VzZXJUb2tlblxuICAgICAgICA6IGNyZWF0ZU1vY2tVc2VyVG9rZW4obW9ja1VzZXJUb2tlbiwgc3RvcmFnZS5hcHAub3B0aW9ucy5wcm9qZWN0SWQpO1xuICB9XG59XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgRmlyZWJhc2UgU3RvcmFnZSBSZWZlcmVuY2UgaW5zdGFuY2VzLlxuICogQHBhcmFtIG9wdF91cmwgLSBnczovLyB1cmwgdG8gYSBjdXN0b20gU3RvcmFnZSBCdWNrZXRcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNsYXNzIEZpcmViYXNlU3RvcmFnZUltcGwgaW1wbGVtZW50cyBGaXJlYmFzZVN0b3JhZ2Uge1xuICBfYnVja2V0OiBMb2NhdGlvbiB8IG51bGwgPSBudWxsO1xuICAvKipcbiAgICogVGhpcyBzdHJpbmcgY2FuIGJlIGluIHRoZSBmb3JtYXRzOlxuICAgKiAtIGhvc3RcbiAgICogLSBob3N0OnBvcnRcbiAgICovXG4gIHByaXZhdGUgX2hvc3Q6IHN0cmluZyA9IERFRkFVTFRfSE9TVDtcbiAgX3Byb3RvY29sOiBzdHJpbmcgPSAnaHR0cHMnO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2FwcElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVxdWVzdHM6IFNldDxSZXF1ZXN0PHVua25vd24+PjtcbiAgcHJpdmF0ZSBfZGVsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9tYXhPcGVyYXRpb25SZXRyeVRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWF4VXBsb2FkUmV0cnlUaW1lOiBudW1iZXI7XG4gIF9vdmVycmlkZUF1dGhUb2tlbj86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvKipcbiAgICAgKiBGaXJlYmFzZUFwcCBhc3NvY2lhdGVkIHdpdGggdGhpcyBTdG9yYWdlU2VydmljZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhcHA6IEZpcmViYXNlQXBwLFxuICAgIHJlYWRvbmx5IF9hdXRoUHJvdmlkZXI6IFByb3ZpZGVyPEZpcmViYXNlQXV0aEludGVybmFsTmFtZT4sXG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcmVhZG9ubHkgX2FwcENoZWNrUHJvdmlkZXI6IFByb3ZpZGVyPEFwcENoZWNrSW50ZXJuYWxDb21wb25lbnROYW1lPixcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICByZWFkb25seSBfdXJsPzogc3RyaW5nLFxuICAgIHJlYWRvbmx5IF9maXJlYmFzZVZlcnNpb24/OiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5fbWF4T3BlcmF0aW9uUmV0cnlUaW1lID0gREVGQVVMVF9NQVhfT1BFUkFUSU9OX1JFVFJZX1RJTUU7XG4gICAgdGhpcy5fbWF4VXBsb2FkUmV0cnlUaW1lID0gREVGQVVMVF9NQVhfVVBMT0FEX1JFVFJZX1RJTUU7XG4gICAgdGhpcy5fcmVxdWVzdHMgPSBuZXcgU2V0KCk7XG4gICAgaWYgKF91cmwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fYnVja2V0ID0gTG9jYXRpb24ubWFrZUZyb21CdWNrZXRTcGVjKF91cmwsIHRoaXMuX2hvc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9idWNrZXQgPSBleHRyYWN0QnVja2V0KHRoaXMuX2hvc3QsIHRoaXMuYXBwLm9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgaG9zdCBzdHJpbmcgZm9yIHRoaXMgc2VydmljZSwgaW4gdGhlIGZvcm0gb2YgYGhvc3RgIG9yXG4gICAqIGBob3N0OnBvcnRgLlxuICAgKi9cbiAgZ2V0IGhvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdDtcbiAgfVxuXG4gIHNldCBob3N0KGhvc3Q6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSBob3N0O1xuICAgIGlmICh0aGlzLl91cmwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fYnVja2V0ID0gTG9jYXRpb24ubWFrZUZyb21CdWNrZXRTcGVjKHRoaXMuX3VybCwgaG9zdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2J1Y2tldCA9IGV4dHJhY3RCdWNrZXQoaG9zdCwgdGhpcy5hcHAub3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIHRpbWUgdG8gcmV0cnkgdXBsb2FkcyBpbiBtaWxsaXNlY29uZHMuXG4gICAqL1xuICBnZXQgbWF4VXBsb2FkUmV0cnlUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heFVwbG9hZFJldHJ5VGltZTtcbiAgfVxuXG4gIHNldCBtYXhVcGxvYWRSZXRyeVRpbWUodGltZTogbnVtYmVyKSB7XG4gICAgdmFsaWRhdGVOdW1iZXIoXG4gICAgICAndGltZScsXG4gICAgICAvKiBtaW5WYWx1ZT0qLyAwLFxuICAgICAgLyogbWF4VmFsdWU9ICovIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICAgIHRpbWVcbiAgICApO1xuICAgIHRoaXMuX21heFVwbG9hZFJldHJ5VGltZSA9IHRpbWU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1heGltdW0gdGltZSB0byByZXRyeSBvcGVyYXRpb25zIG90aGVyIHRoYW4gdXBsb2FkcyBvciBkb3dubG9hZHMgaW5cbiAgICogbWlsbGlzZWNvbmRzLlxuICAgKi9cbiAgZ2V0IG1heE9wZXJhdGlvblJldHJ5VGltZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXhPcGVyYXRpb25SZXRyeVRpbWU7XG4gIH1cblxuICBzZXQgbWF4T3BlcmF0aW9uUmV0cnlUaW1lKHRpbWU6IG51bWJlcikge1xuICAgIHZhbGlkYXRlTnVtYmVyKFxuICAgICAgJ3RpbWUnLFxuICAgICAgLyogbWluVmFsdWU9Ki8gMCxcbiAgICAgIC8qIG1heFZhbHVlPSAqLyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgICB0aW1lXG4gICAgKTtcbiAgICB0aGlzLl9tYXhPcGVyYXRpb25SZXRyeVRpbWUgPSB0aW1lO1xuICB9XG5cbiAgYXN5bmMgX2dldEF1dGhUb2tlbigpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICBpZiAodGhpcy5fb3ZlcnJpZGVBdXRoVG9rZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLl9vdmVycmlkZUF1dGhUb2tlbjtcbiAgICB9XG4gICAgY29uc3QgYXV0aCA9IHRoaXMuX2F1dGhQcm92aWRlci5nZXRJbW1lZGlhdGUoeyBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgICBpZiAoYXV0aCkge1xuICAgICAgY29uc3QgdG9rZW5EYXRhID0gYXdhaXQgYXV0aC5nZXRUb2tlbigpO1xuICAgICAgaWYgKHRva2VuRGF0YSAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdG9rZW5EYXRhLmFjY2Vzc1Rva2VuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIF9nZXRBcHBDaGVja1Rva2VuKCk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIGNvbnN0IGFwcENoZWNrID0gdGhpcy5fYXBwQ2hlY2tQcm92aWRlci5nZXRJbW1lZGlhdGUoeyBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgICBpZiAoYXBwQ2hlY2spIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcENoZWNrLmdldFRva2VuKCk7XG4gICAgICAvLyBUT0RPOiBXaGF0IGRvIHdlIHdhbnQgdG8gZG8gaWYgdGhlcmUgaXMgYW4gZXJyb3IgZ2V0dGluZyB0aGUgdG9rZW4/XG4gICAgICAvLyBDb250ZXh0OiBhcHBDaGVjay5nZXRUb2tlbigpIHdpbGwgbmV2ZXIgdGhyb3cgZXZlbiBpZiBhbiBlcnJvciBoYXBwZW5lZC4gSW4gdGhlIGVycm9yIGNhc2UsIGEgZHVtbXkgdG9rZW4gd2lsbCBiZVxuICAgICAgLy8gcmV0dXJuZWQgYWxvbmcgd2l0aCBhbiBlcnJvciBmaWVsZCBkZXNjcmliaW5nIHRoZSBlcnJvci4gSW4gZ2VuZXJhbCwgd2Ugc2hvdWxkbid0IGNhcmUgYWJvdXQgdGhlIGVycm9yIGNvbmRpdGlvbiBhbmQganVzdCB1c2VcbiAgICAgIC8vIHRoZSB0b2tlbiAoYWN0dWFsIG9yIGR1bW15KSB0byBzZW5kIHJlcXVlc3RzLlxuICAgICAgcmV0dXJuIHJlc3VsdC50b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCBydW5uaW5nIHJlcXVlc3RzIGFuZCBwcmV2ZW50IG1vcmUgZnJvbSBiZWluZyBjcmVhdGVkLlxuICAgKi9cbiAgX2RlbGV0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuX2RlbGV0ZWQpIHtcbiAgICAgIHRoaXMuX2RlbGV0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fcmVxdWVzdHMuZm9yRWFjaChyZXF1ZXN0ID0+IHJlcXVlc3QuY2FuY2VsKCkpO1xuICAgICAgdGhpcy5fcmVxdWVzdHMuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgZmlyZWJhc2VTdG9yYWdlLlJlZmVyZW5jZSBvYmplY3QgcmVmZXJlbmNpbmcgdGhpcyBTdG9yYWdlU2VydmljZVxuICAgKiBhdCB0aGUgZ2l2ZW4gTG9jYXRpb24uXG4gICAqL1xuICBfbWFrZVN0b3JhZ2VSZWZlcmVuY2UobG9jOiBMb2NhdGlvbik6IFJlZmVyZW5jZSB7XG4gICAgcmV0dXJuIG5ldyBSZWZlcmVuY2UodGhpcywgbG9jKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gcmVxdWVzdEluZm8gLSBIVFRQIFJlcXVlc3RJbmZvIG9iamVjdFxuICAgKiBAcGFyYW0gYXV0aFRva2VuIC0gRmlyZWJhc2UgYXV0aCB0b2tlblxuICAgKi9cbiAgX21ha2VSZXF1ZXN0PEkgZXh0ZW5kcyBDb25uZWN0aW9uVHlwZSwgTz4oXG4gICAgcmVxdWVzdEluZm86IFJlcXVlc3RJbmZvPEksIE8+LFxuICAgIHJlcXVlc3RGYWN0b3J5OiAoKSA9PiBDb25uZWN0aW9uPEk+LFxuICAgIGF1dGhUb2tlbjogc3RyaW5nIHwgbnVsbCxcbiAgICBhcHBDaGVja1Rva2VuOiBzdHJpbmcgfCBudWxsLFxuICAgIHJldHJ5ID0gdHJ1ZVxuICApOiBSZXF1ZXN0PE8+IHtcbiAgICBpZiAoIXRoaXMuX2RlbGV0ZWQpIHtcbiAgICAgIGNvbnN0IHJlcXVlc3QgPSBtYWtlUmVxdWVzdChcbiAgICAgICAgcmVxdWVzdEluZm8sXG4gICAgICAgIHRoaXMuX2FwcElkLFxuICAgICAgICBhdXRoVG9rZW4sXG4gICAgICAgIGFwcENoZWNrVG9rZW4sXG4gICAgICAgIHJlcXVlc3RGYWN0b3J5LFxuICAgICAgICB0aGlzLl9maXJlYmFzZVZlcnNpb24sXG4gICAgICAgIHJldHJ5XG4gICAgICApO1xuICAgICAgdGhpcy5fcmVxdWVzdHMuYWRkKHJlcXVlc3QpO1xuICAgICAgLy8gUmVxdWVzdCByZW1vdmVzIGl0c2VsZiBmcm9tIHNldCB3aGVuIGNvbXBsZXRlLlxuICAgICAgcmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihcbiAgICAgICAgKCkgPT4gdGhpcy5fcmVxdWVzdHMuZGVsZXRlKHJlcXVlc3QpLFxuICAgICAgICAoKSA9PiB0aGlzLl9yZXF1ZXN0cy5kZWxldGUocmVxdWVzdClcbiAgICAgICk7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBGYWlsUmVxdWVzdChhcHBEZWxldGVkKCkpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG1ha2VSZXF1ZXN0V2l0aFRva2VuczxJIGV4dGVuZHMgQ29ubmVjdGlvblR5cGUsIE8+KFxuICAgIHJlcXVlc3RJbmZvOiBSZXF1ZXN0SW5mbzxJLCBPPixcbiAgICByZXF1ZXN0RmFjdG9yeTogKCkgPT4gQ29ubmVjdGlvbjxJPlxuICApOiBQcm9taXNlPE8+IHtcbiAgICBjb25zdCBbYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuX2dldEF1dGhUb2tlbigpLFxuICAgICAgdGhpcy5fZ2V0QXBwQ2hlY2tUb2tlbigpXG4gICAgXSk7XG5cbiAgICByZXR1cm4gdGhpcy5fbWFrZVJlcXVlc3QoXG4gICAgICByZXF1ZXN0SW5mbyxcbiAgICAgIHJlcXVlc3RGYWN0b3J5LFxuICAgICAgYXV0aFRva2VuLFxuICAgICAgYXBwQ2hlY2tUb2tlblxuICAgICkuZ2V0UHJvbWlzZSgpO1xuICB9XG59XG4iLCAiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBUeXBlIGNvbnN0YW50IGZvciBGaXJlYmFzZSBTdG9yYWdlLlxuICovXG5leHBvcnQgY29uc3QgU1RPUkFHRV9UWVBFID0gJ3N0b3JhZ2UnO1xuIiwgIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBfZ2V0UHJvdmlkZXIsIEZpcmViYXNlQXBwLCBnZXRBcHAgfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcblxuaW1wb3J0IHtcbiAgcmVmIGFzIHJlZkludGVybmFsLFxuICBGaXJlYmFzZVN0b3JhZ2VJbXBsLFxuICBjb25uZWN0U3RvcmFnZUVtdWxhdG9yIGFzIGNvbm5lY3RFbXVsYXRvckludGVybmFsXG59IGZyb20gJy4vc2VydmljZSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQge1xuICBTdG9yYWdlUmVmZXJlbmNlLFxuICBGaXJlYmFzZVN0b3JhZ2UsXG4gIFVwbG9hZFJlc3VsdCxcbiAgTGlzdE9wdGlvbnMsXG4gIExpc3RSZXN1bHQsXG4gIFVwbG9hZFRhc2ssXG4gIFNldHRhYmxlTWV0YWRhdGEsXG4gIFVwbG9hZE1ldGFkYXRhLFxuICBGdWxsTWV0YWRhdGFcbn0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgTWV0YWRhdGEgYXMgTWV0YWRhdGFJbnRlcm5hbCB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHtcbiAgdXBsb2FkQnl0ZXMgYXMgdXBsb2FkQnl0ZXNJbnRlcm5hbCxcbiAgdXBsb2FkQnl0ZXNSZXN1bWFibGUgYXMgdXBsb2FkQnl0ZXNSZXN1bWFibGVJbnRlcm5hbCxcbiAgdXBsb2FkU3RyaW5nIGFzIHVwbG9hZFN0cmluZ0ludGVybmFsLFxuICBnZXRNZXRhZGF0YSBhcyBnZXRNZXRhZGF0YUludGVybmFsLFxuICB1cGRhdGVNZXRhZGF0YSBhcyB1cGRhdGVNZXRhZGF0YUludGVybmFsLFxuICBsaXN0IGFzIGxpc3RJbnRlcm5hbCxcbiAgbGlzdEFsbCBhcyBsaXN0QWxsSW50ZXJuYWwsXG4gIGdldERvd25sb2FkVVJMIGFzIGdldERvd25sb2FkVVJMSW50ZXJuYWwsXG4gIGRlbGV0ZU9iamVjdCBhcyBkZWxldGVPYmplY3RJbnRlcm5hbCxcbiAgUmVmZXJlbmNlLFxuICBfZ2V0Q2hpbGQgYXMgX2dldENoaWxkSW50ZXJuYWwsXG4gIGdldEJ5dGVzSW50ZXJuYWxcbn0gZnJvbSAnLi9yZWZlcmVuY2UnO1xuaW1wb3J0IHsgU1RPUkFHRV9UWVBFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgRW11bGF0b3JNb2NrVG9rZW5PcHRpb25zLFxuICBnZXRNb2R1bGFySW5zdGFuY2UsXG4gIGdldERlZmF1bHRFbXVsYXRvckhvc3RuYW1lQW5kUG9ydFxufSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBTdHJpbmdGb3JtYXQgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL3N0cmluZyc7XG5cbmV4cG9ydCB7IEVtdWxhdG9yTW9ja1Rva2VuT3B0aW9ucyB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuZXhwb3J0IHsgU3RvcmFnZUVycm9yLCBTdG9yYWdlRXJyb3JDb2RlIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9lcnJvcic7XG5cbi8qKlxuICogUHVibGljIHR5cGVzLlxuICovXG5leHBvcnQgKiBmcm9tICcuL3B1YmxpYy10eXBlcyc7XG5cbmV4cG9ydCB7IExvY2F0aW9uIGFzIF9Mb2NhdGlvbiB9IGZyb20gJy4vaW1wbGVtZW50YXRpb24vbG9jYXRpb24nO1xuZXhwb3J0IHsgVXBsb2FkVGFzayBhcyBfVXBsb2FkVGFzayB9IGZyb20gJy4vdGFzayc7XG5leHBvcnQgdHlwZSB7IFJlZmVyZW5jZSBhcyBfUmVmZXJlbmNlIH0gZnJvbSAnLi9yZWZlcmVuY2UnO1xuZXhwb3J0IHR5cGUgeyBGaXJlYmFzZVN0b3JhZ2VJbXBsIGFzIF9GaXJlYmFzZVN0b3JhZ2VJbXBsIH0gZnJvbSAnLi9zZXJ2aWNlJztcbmV4cG9ydCB7IEZic0Jsb2IgYXMgX0Zic0Jsb2IgfSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL2Jsb2InO1xuZXhwb3J0IHsgZGF0YUZyb21TdHJpbmcgYXMgX2RhdGFGcm9tU3RyaW5nIH0gZnJvbSAnLi9pbXBsZW1lbnRhdGlvbi9zdHJpbmcnO1xuZXhwb3J0IHtcbiAgaW52YWxpZFJvb3RPcGVyYXRpb24gYXMgX2ludmFsaWRSb290T3BlcmF0aW9uLFxuICBpbnZhbGlkQXJndW1lbnQgYXMgX2ludmFsaWRBcmd1bWVudFxufSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL2Vycm9yJztcbmV4cG9ydCB7XG4gIFRhc2tFdmVudCBhcyBfVGFza0V2ZW50LFxuICBUYXNrU3RhdGUgYXMgX1Rhc2tTdGF0ZVxufSBmcm9tICcuL2ltcGxlbWVudGF0aW9uL3Rhc2tlbnVtcyc7XG5leHBvcnQgeyBTdHJpbmdGb3JtYXQgfTtcblxuLyoqXG4gKiBEb3dubG9hZHMgdGhlIGRhdGEgYXQgdGhlIG9iamVjdCdzIGxvY2F0aW9uLiBSZXR1cm5zIGFuIGVycm9yIGlmIHRoZSBvYmplY3RcbiAqIGlzIG5vdCBmb3VuZC5cbiAqXG4gKiBUbyB1c2UgdGhpcyBmdW5jdGlvbmFsaXR5LCB5b3UgaGF2ZSB0byB3aGl0ZWxpc3QgeW91ciBhcHAncyBvcmlnaW4gaW4geW91clxuICogQ2xvdWQgU3RvcmFnZSBidWNrZXQuIFNlZSBhbHNvXG4gKiBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vc3RvcmFnZS9kb2NzL2NvbmZpZ3VyaW5nLWNvcnNcbiAqXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB3aGVyZSBkYXRhIHNob3VsZCBiZSBkb3dubG9hZGVkLlxuICogQHBhcmFtIG1heERvd25sb2FkU2l6ZUJ5dGVzIC0gSWYgc2V0LCB0aGUgbWF4aW11bSBhbGxvd2VkIHNpemUgaW4gYnl0ZXMgdG9cbiAqIHJldHJpZXZlLlxuICogQHJldHVybnMgQSBQcm9taXNlIGNvbnRhaW5pbmcgdGhlIG9iamVjdCdzIGJ5dGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCeXRlcyhcbiAgcmVmOiBTdG9yYWdlUmVmZXJlbmNlLFxuICBtYXhEb3dubG9hZFNpemVCeXRlcz86IG51bWJlclxuKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICByZWYgPSBnZXRNb2R1bGFySW5zdGFuY2UocmVmKTtcbiAgcmV0dXJuIGdldEJ5dGVzSW50ZXJuYWwocmVmIGFzIFJlZmVyZW5jZSwgbWF4RG93bmxvYWRTaXplQnl0ZXMpO1xufVxuXG4vKipcbiAqIFVwbG9hZHMgZGF0YSB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxuICogVGhlIHVwbG9hZCBpcyBub3QgcmVzdW1hYmxlLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSB3aGVyZSBkYXRhIHNob3VsZCBiZSB1cGxvYWRlZC5cbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gdXBsb2FkLlxuICogQHBhcmFtIG1ldGFkYXRhIC0gTWV0YWRhdGEgZm9yIHRoZSBkYXRhIHRvIHVwbG9hZC5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSBjb250YWluaW5nIGFuIFVwbG9hZFJlc3VsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkQnl0ZXMoXG4gIHJlZjogU3RvcmFnZVJlZmVyZW5jZSxcbiAgZGF0YTogQmxvYiB8IFVpbnQ4QXJyYXkgfCBBcnJheUJ1ZmZlcixcbiAgbWV0YWRhdGE/OiBVcGxvYWRNZXRhZGF0YVxuKTogUHJvbWlzZTxVcGxvYWRSZXN1bHQ+IHtcbiAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XG4gIHJldHVybiB1cGxvYWRCeXRlc0ludGVybmFsKFxuICAgIHJlZiBhcyBSZWZlcmVuY2UsXG4gICAgZGF0YSxcbiAgICBtZXRhZGF0YSBhcyBNZXRhZGF0YUludGVybmFsXG4gICk7XG59XG5cbi8qKlxuICogVXBsb2FkcyBhIHN0cmluZyB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxuICogVGhlIHVwbG9hZCBpcyBub3QgcmVzdW1hYmxlLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSB3aGVyZSBzdHJpbmcgc2hvdWxkIGJlIHVwbG9hZGVkLlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHN0cmluZyB0byB1cGxvYWQuXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIGZvcm1hdCBvZiB0aGUgc3RyaW5nIHRvIHVwbG9hZC5cbiAqIEBwYXJhbSBtZXRhZGF0YSAtIE1ldGFkYXRhIGZvciB0aGUgc3RyaW5nIHRvIHVwbG9hZC5cbiAqIEByZXR1cm5zIEEgUHJvbWlzZSBjb250YWluaW5nIGFuIFVwbG9hZFJlc3VsdFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkU3RyaW5nKFxuICByZWY6IFN0b3JhZ2VSZWZlcmVuY2UsXG4gIHZhbHVlOiBzdHJpbmcsXG4gIGZvcm1hdD86IFN0cmluZ0Zvcm1hdCxcbiAgbWV0YWRhdGE/OiBVcGxvYWRNZXRhZGF0YVxuKTogUHJvbWlzZTxVcGxvYWRSZXN1bHQ+IHtcbiAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XG4gIHJldHVybiB1cGxvYWRTdHJpbmdJbnRlcm5hbChcbiAgICByZWYgYXMgUmVmZXJlbmNlLFxuICAgIHZhbHVlLFxuICAgIGZvcm1hdCxcbiAgICBtZXRhZGF0YSBhcyBNZXRhZGF0YUludGVybmFsXG4gICk7XG59XG5cbi8qKlxuICogVXBsb2FkcyBkYXRhIHRvIHRoaXMgb2JqZWN0J3MgbG9jYXRpb24uXG4gKiBUaGUgdXBsb2FkIGNhbiBiZSBwYXVzZWQgYW5kIHJlc3VtZWQsIGFuZCBleHBvc2VzIHByb2dyZXNzIHVwZGF0ZXMuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0ge0BsaW5rIFN0b3JhZ2VSZWZlcmVuY2V9IHdoZXJlIGRhdGEgc2hvdWxkIGJlIHVwbG9hZGVkLlxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byB1cGxvYWQuXG4gKiBAcGFyYW0gbWV0YWRhdGEgLSBNZXRhZGF0YSBmb3IgdGhlIGRhdGEgdG8gdXBsb2FkLlxuICogQHJldHVybnMgQW4gVXBsb2FkVGFza1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkQnl0ZXNSZXN1bWFibGUoXG4gIHJlZjogU3RvcmFnZVJlZmVyZW5jZSxcbiAgZGF0YTogQmxvYiB8IFVpbnQ4QXJyYXkgfCBBcnJheUJ1ZmZlcixcbiAgbWV0YWRhdGE/OiBVcGxvYWRNZXRhZGF0YVxuKTogVXBsb2FkVGFzayB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gdXBsb2FkQnl0ZXNSZXN1bWFibGVJbnRlcm5hbChcbiAgICByZWYgYXMgUmVmZXJlbmNlLFxuICAgIGRhdGEsXG4gICAgbWV0YWRhdGEgYXMgTWV0YWRhdGFJbnRlcm5hbFxuICApIGFzIFVwbG9hZFRhc2s7XG59XG5cbi8qKlxuICogQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuIElmIHRoaXNcbiAqIG9iamVjdCBkb2Vzbid0IGV4aXN0IG9yIG1ldGFkYXRhIGNhbm5vdCBiZSByZXRyaWV2ZWQsIHRoZSBwcm9taXNlIGlzXG4gKiByZWplY3RlZC5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gZ2V0IG1ldGFkYXRhIGZyb20uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXRhZGF0YShyZWY6IFN0b3JhZ2VSZWZlcmVuY2UpOiBQcm9taXNlPEZ1bGxNZXRhZGF0YT4ge1xuICByZWYgPSBnZXRNb2R1bGFySW5zdGFuY2UocmVmKTtcbiAgcmV0dXJuIGdldE1ldGFkYXRhSW50ZXJuYWwocmVmIGFzIFJlZmVyZW5jZSkgYXMgUHJvbWlzZTxGdWxsTWV0YWRhdGE+O1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIG1ldGFkYXRhIGZvciB0aGlzIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gdXBkYXRlIG1ldGFkYXRhIGZvci5cbiAqIEBwYXJhbSBtZXRhZGF0YSAtIFRoZSBuZXcgbWV0YWRhdGEgZm9yIHRoZSBvYmplY3QuXG4gKiAgICAgT25seSB2YWx1ZXMgdGhhdCBoYXZlIGJlZW4gZXhwbGljaXRseSBzZXQgd2lsbCBiZSBjaGFuZ2VkLiBFeHBsaWNpdGx5XG4gKiAgICAgc2V0dGluZyBhIHZhbHVlIHRvIG51bGwgd2lsbCByZW1vdmUgdGhlIG1ldGFkYXRhLlxuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBuZXcgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTWV0YWRhdGEoXG4gIHJlZjogU3RvcmFnZVJlZmVyZW5jZSxcbiAgbWV0YWRhdGE6IFNldHRhYmxlTWV0YWRhdGFcbik6IFByb21pc2U8RnVsbE1ldGFkYXRhPiB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gdXBkYXRlTWV0YWRhdGFJbnRlcm5hbChcbiAgICByZWYgYXMgUmVmZXJlbmNlLFxuICAgIG1ldGFkYXRhIGFzIFBhcnRpYWw8TWV0YWRhdGFJbnRlcm5hbD5cbiAgKSBhcyBQcm9taXNlPEZ1bGxNZXRhZGF0YT47XG59XG5cbi8qKlxuICogTGlzdCBpdGVtcyAoZmlsZXMpIGFuZCBwcmVmaXhlcyAoZm9sZGVycykgdW5kZXIgdGhpcyBzdG9yYWdlIHJlZmVyZW5jZS5cbiAqXG4gKiBMaXN0IEFQSSBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgRmlyZWJhc2UgUnVsZXMgVmVyc2lvbiAyLlxuICpcbiAqIEdDUyBpcyBhIGtleS1ibG9iIHN0b3JlLiBGaXJlYmFzZSBTdG9yYWdlIGltcG9zZXMgdGhlIHNlbWFudGljIG9mICcvJ1xuICogZGVsaW1pdGVkIGZvbGRlciBzdHJ1Y3R1cmUuXG4gKiBSZWZlciB0byBHQ1MncyBMaXN0IEFQSSBpZiB5b3Ugd2FudCB0byBsZWFybiBtb3JlLlxuICpcbiAqIFRvIGFkaGVyZSB0byBGaXJlYmFzZSBSdWxlcydzIFNlbWFudGljcywgRmlyZWJhc2UgU3RvcmFnZSBkb2VzIG5vdFxuICogc3VwcG9ydCBvYmplY3RzIHdob3NlIHBhdGhzIGVuZCB3aXRoIFwiL1wiIG9yIGNvbnRhaW4gdHdvIGNvbnNlY3V0aXZlXG4gKiBcIi9cInMuIEZpcmViYXNlIFN0b3JhZ2UgTGlzdCBBUEkgd2lsbCBmaWx0ZXIgdGhlc2UgdW5zdXBwb3J0ZWQgb2JqZWN0cy5cbiAqIGxpc3QoKSBtYXkgZmFpbCBpZiB0aGVyZSBhcmUgdG9vIG1hbnkgdW5zdXBwb3J0ZWQgb2JqZWN0cyBpbiB0aGUgYnVja2V0LlxuICogQHB1YmxpY1xuICpcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gZ2V0IGxpc3QgZnJvbS5cbiAqIEBwYXJhbSBvcHRpb25zIC0gU2VlIHtAbGluayBMaXN0T3B0aW9uc30gZm9yIGRldGFpbHMuXG4gKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcy5cbiAqICAgICAgYHByZWZpeGVzYCBjb250YWlucyByZWZlcmVuY2VzIHRvIHN1Yi1mb2xkZXJzIGFuZCBgaXRlbXNgXG4gKiAgICAgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gb2JqZWN0cyBpbiB0aGlzIGZvbGRlci4gYG5leHRQYWdlVG9rZW5gXG4gKiAgICAgIGNhbiBiZSB1c2VkIHRvIGdldCB0aGUgcmVzdCBvZiB0aGUgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3QoXG4gIHJlZjogU3RvcmFnZVJlZmVyZW5jZSxcbiAgb3B0aW9ucz86IExpc3RPcHRpb25zXG4pOiBQcm9taXNlPExpc3RSZXN1bHQ+IHtcbiAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XG4gIHJldHVybiBsaXN0SW50ZXJuYWwocmVmIGFzIFJlZmVyZW5jZSwgb3B0aW9ucyk7XG59XG5cbi8qKlxuICogTGlzdCBhbGwgaXRlbXMgKGZpbGVzKSBhbmQgcHJlZml4ZXMgKGZvbGRlcnMpIHVuZGVyIHRoaXMgc3RvcmFnZSByZWZlcmVuY2UuXG4gKlxuICogVGhpcyBpcyBhIGhlbHBlciBtZXRob2QgZm9yIGNhbGxpbmcgbGlzdCgpIHJlcGVhdGVkbHkgdW50aWwgdGhlcmUgYXJlXG4gKiBubyBtb3JlIHJlc3VsdHMuIFRoZSBkZWZhdWx0IHBhZ2luYXRpb24gc2l6ZSBpcyAxMDAwLlxuICpcbiAqIE5vdGU6IFRoZSByZXN1bHRzIG1heSBub3QgYmUgY29uc2lzdGVudCBpZiBvYmplY3RzIGFyZSBjaGFuZ2VkIHdoaWxlIHRoaXNcbiAqIG9wZXJhdGlvbiBpcyBydW5uaW5nLlxuICpcbiAqIFdhcm5pbmc6IGBsaXN0QWxsYCBtYXkgcG90ZW50aWFsbHkgY29uc3VtZSB0b28gbWFueSByZXNvdXJjZXMgaWYgdGhlcmUgYXJlXG4gKiB0b28gbWFueSByZXN1bHRzLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSB0byBnZXQgbGlzdCBmcm9tLlxuICpcbiAqIEByZXR1cm5zIEEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbGwgdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcyB1bmRlclxuICogICAgICB0aGUgY3VycmVudCBzdG9yYWdlIHJlZmVyZW5jZS4gYHByZWZpeGVzYCBjb250YWlucyByZWZlcmVuY2VzIHRvXG4gKiAgICAgIHN1Yi1kaXJlY3RvcmllcyBhbmQgYGl0ZW1zYCBjb250YWlucyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gdGhpc1xuICogICAgICBmb2xkZXIuIGBuZXh0UGFnZVRva2VuYCBpcyBuZXZlciByZXR1cm5lZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpc3RBbGwocmVmOiBTdG9yYWdlUmVmZXJlbmNlKTogUHJvbWlzZTxMaXN0UmVzdWx0PiB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gbGlzdEFsbEludGVybmFsKHJlZiBhcyBSZWZlcmVuY2UpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGRvd25sb2FkIFVSTCBmb3IgdGhlIGdpdmVuIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfS5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gZ2V0IHRoZSBkb3dubG9hZCBVUkwgZm9yLlxuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkb3dubG9hZFxuICogICAgIFVSTCBmb3IgdGhpcyBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb3dubG9hZFVSTChyZWY6IFN0b3JhZ2VSZWZlcmVuY2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZWYgPSBnZXRNb2R1bGFySW5zdGFuY2UocmVmKTtcbiAgcmV0dXJuIGdldERvd25sb2FkVVJMSW50ZXJuYWwocmVmIGFzIFJlZmVyZW5jZSk7XG59XG5cbi8qKlxuICogRGVsZXRlcyB0aGUgb2JqZWN0IGF0IHRoaXMgbG9jYXRpb24uXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gcmVmIC0ge0BsaW5rIFN0b3JhZ2VSZWZlcmVuY2V9IGZvciBvYmplY3QgdG8gZGVsZXRlLlxuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyBpZiB0aGUgZGVsZXRpb24gc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVPYmplY3QocmVmOiBTdG9yYWdlUmVmZXJlbmNlKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gZGVsZXRlT2JqZWN0SW50ZXJuYWwocmVmIGFzIFJlZmVyZW5jZSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSBmb3IgdGhlIGdpdmVuIHVybC5cbiAqIEBwYXJhbSBzdG9yYWdlIC0ge0BsaW5rIEZpcmViYXNlU3RvcmFnZX0gaW5zdGFuY2UuXG4gKiBAcGFyYW0gdXJsIC0gVVJMLiBJZiBlbXB0eSwgcmV0dXJucyByb290IHJlZmVyZW5jZS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZihzdG9yYWdlOiBGaXJlYmFzZVN0b3JhZ2UsIHVybD86IHN0cmluZyk6IFN0b3JhZ2VSZWZlcmVuY2U7XG4vKipcbiAqIFJldHVybnMgYSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gZm9yIHRoZSBnaXZlbiBwYXRoIGluIHRoZVxuICogZGVmYXVsdCBidWNrZXQuXG4gKiBAcGFyYW0gc3RvcmFnZU9yUmVmIC0ge0BsaW5rIEZpcmViYXNlU3RvcmFnZX0gb3Ige0BsaW5rIFN0b3JhZ2VSZWZlcmVuY2V9LlxuICogQHBhcmFtIHBhdGhPclVybFN0b3JhZ2UgLSBwYXRoLiBJZiBlbXB0eSwgcmV0dXJucyByb290IHJlZmVyZW5jZSAoaWYge0BsaW5rIEZpcmViYXNlU3RvcmFnZX1cbiAqIGluc3RhbmNlIHByb3ZpZGVkKSBvciByZXR1cm5zIHNhbWUgcmVmZXJlbmNlIChpZiB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gcHJvdmlkZWQpLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVmKFxuICBzdG9yYWdlT3JSZWY6IEZpcmViYXNlU3RvcmFnZSB8IFN0b3JhZ2VSZWZlcmVuY2UsXG4gIHBhdGg/OiBzdHJpbmdcbik6IFN0b3JhZ2VSZWZlcmVuY2U7XG5leHBvcnQgZnVuY3Rpb24gcmVmKFxuICBzZXJ2aWNlT3JSZWY6IEZpcmViYXNlU3RvcmFnZSB8IFN0b3JhZ2VSZWZlcmVuY2UsXG4gIHBhdGhPclVybD86IHN0cmluZ1xuKTogU3RvcmFnZVJlZmVyZW5jZSB8IG51bGwge1xuICBzZXJ2aWNlT3JSZWYgPSBnZXRNb2R1bGFySW5zdGFuY2Uoc2VydmljZU9yUmVmKTtcbiAgcmV0dXJuIHJlZkludGVybmFsKFxuICAgIHNlcnZpY2VPclJlZiBhcyBGaXJlYmFzZVN0b3JhZ2VJbXBsIHwgUmVmZXJlbmNlLFxuICAgIHBhdGhPclVybFxuICApO1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldENoaWxkKHJlZjogU3RvcmFnZVJlZmVyZW5jZSwgY2hpbGRQYXRoOiBzdHJpbmcpOiBSZWZlcmVuY2Uge1xuICByZXR1cm4gX2dldENoaWxkSW50ZXJuYWwocmVmIGFzIFJlZmVyZW5jZSwgY2hpbGRQYXRoKTtcbn1cblxuLyoqXG4gKiBHZXRzIGEge0BsaW5rIEZpcmViYXNlU3RvcmFnZX0gaW5zdGFuY2UgZm9yIHRoZSBnaXZlbiBGaXJlYmFzZSBhcHAuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gYXBwIC0gRmlyZWJhc2UgYXBwIHRvIGdldCB7QGxpbmsgRmlyZWJhc2VTdG9yYWdlfSBpbnN0YW5jZSBmb3IuXG4gKiBAcGFyYW0gYnVja2V0VXJsIC0gVGhlIGdzOi8vIHVybCB0byB5b3VyIEZpcmViYXNlIFN0b3JhZ2UgQnVja2V0LlxuICogSWYgbm90IHBhc3NlZCwgdXNlcyB0aGUgYXBwJ3MgZGVmYXVsdCBTdG9yYWdlIEJ1Y2tldC5cbiAqIEByZXR1cm5zIEEge0BsaW5rIEZpcmViYXNlU3RvcmFnZX0gaW5zdGFuY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yYWdlKFxuICBhcHA6IEZpcmViYXNlQXBwID0gZ2V0QXBwKCksXG4gIGJ1Y2tldFVybD86IHN0cmluZ1xuKTogRmlyZWJhc2VTdG9yYWdlIHtcbiAgYXBwID0gZ2V0TW9kdWxhckluc3RhbmNlKGFwcCk7XG4gIGNvbnN0IHN0b3JhZ2VQcm92aWRlcjogUHJvdmlkZXI8J3N0b3JhZ2UnPiA9IF9nZXRQcm92aWRlcihhcHAsIFNUT1JBR0VfVFlQRSk7XG4gIGNvbnN0IHN0b3JhZ2VJbnN0YW5jZSA9IHN0b3JhZ2VQcm92aWRlci5nZXRJbW1lZGlhdGUoe1xuICAgIGlkZW50aWZpZXI6IGJ1Y2tldFVybFxuICB9KTtcbiAgY29uc3QgZW11bGF0b3IgPSBnZXREZWZhdWx0RW11bGF0b3JIb3N0bmFtZUFuZFBvcnQoJ3N0b3JhZ2UnKTtcbiAgaWYgKGVtdWxhdG9yKSB7XG4gICAgY29ubmVjdFN0b3JhZ2VFbXVsYXRvcihzdG9yYWdlSW5zdGFuY2UsIC4uLmVtdWxhdG9yKTtcbiAgfVxuICByZXR1cm4gc3RvcmFnZUluc3RhbmNlO1xufVxuXG4vKipcbiAqIE1vZGlmeSB0aGlzIHtAbGluayBGaXJlYmFzZVN0b3JhZ2V9IGluc3RhbmNlIHRvIGNvbW11bmljYXRlIHdpdGggdGhlIENsb3VkIFN0b3JhZ2UgZW11bGF0b3IuXG4gKlxuICogQHBhcmFtIHN0b3JhZ2UgLSBUaGUge0BsaW5rIEZpcmViYXNlU3RvcmFnZX0gaW5zdGFuY2VcbiAqIEBwYXJhbSBob3N0IC0gVGhlIGVtdWxhdG9yIGhvc3QgKGV4OiBsb2NhbGhvc3QpXG4gKiBAcGFyYW0gcG9ydCAtIFRoZSBlbXVsYXRvciBwb3J0IChleDogNTAwMSlcbiAqIEBwYXJhbSBvcHRpb25zIC0gRW11bGF0b3Igb3B0aW9ucy4gYG9wdGlvbnMubW9ja1VzZXJUb2tlbmAgaXMgdGhlIG1vY2sgYXV0aFxuICogdG9rZW4gdG8gdXNlIGZvciB1bml0IHRlc3RpbmcgU2VjdXJpdHkgUnVsZXMuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25uZWN0U3RvcmFnZUVtdWxhdG9yKFxuICBzdG9yYWdlOiBGaXJlYmFzZVN0b3JhZ2UsXG4gIGhvc3Q6IHN0cmluZyxcbiAgcG9ydDogbnVtYmVyLFxuICBvcHRpb25zOiB7XG4gICAgbW9ja1VzZXJUb2tlbj86IEVtdWxhdG9yTW9ja1Rva2VuT3B0aW9ucyB8IHN0cmluZztcbiAgfSA9IHt9XG4pOiB2b2lkIHtcbiAgY29ubmVjdEVtdWxhdG9ySW50ZXJuYWwoc3RvcmFnZSBhcyBGaXJlYmFzZVN0b3JhZ2VJbXBsLCBob3N0LCBwb3J0LCBvcHRpb25zKTtcbn1cbiIsICIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgeyBTdG9yYWdlUmVmZXJlbmNlIH0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgUmVmZXJlbmNlLCBnZXRCbG9iSW50ZXJuYWwgfSBmcm9tICcuL3JlZmVyZW5jZSc7XG5pbXBvcnQgeyBnZXRNb2R1bGFySW5zdGFuY2UgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5cbi8qKlxuICogRG93bmxvYWRzIHRoZSBkYXRhIGF0IHRoZSBvYmplY3QncyBsb2NhdGlvbi4gUmV0dXJucyBhbiBlcnJvciBpZiB0aGUgb2JqZWN0XG4gKiBpcyBub3QgZm91bmQuXG4gKlxuICogVG8gdXNlIHRoaXMgZnVuY3Rpb25hbGl0eSwgeW91IGhhdmUgdG8gd2hpdGVsaXN0IHlvdXIgYXBwJ3Mgb3JpZ2luIGluIHlvdXJcbiAqIENsb3VkIFN0b3JhZ2UgYnVja2V0LiBTZWUgYWxzb1xuICogaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL3N0b3JhZ2UvZG9jcy9jb25maWd1cmluZy1jb3JzXG4gKlxuICogVGhpcyBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiBOb2RlLlxuICpcbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHdoZXJlIGRhdGEgc2hvdWxkIGJlIGRvd25sb2FkZWQuXG4gKiBAcGFyYW0gbWF4RG93bmxvYWRTaXplQnl0ZXMgLSBJZiBzZXQsIHRoZSBtYXhpbXVtIGFsbG93ZWQgc2l6ZSBpbiBieXRlcyB0b1xuICogcmV0cmlldmUuXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgQmxvYiBjb250YWluaW5nIHRoZSBvYmplY3QncyBieXRlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmxvYihcbiAgcmVmOiBTdG9yYWdlUmVmZXJlbmNlLFxuICBtYXhEb3dubG9hZFNpemVCeXRlcz86IG51bWJlclxuKTogUHJvbWlzZTxCbG9iPiB7XG4gIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xuICByZXR1cm4gZ2V0QmxvYkludGVybmFsKHJlZiBhcyBSZWZlcmVuY2UsIG1heERvd25sb2FkU2l6ZUJ5dGVzKTtcbn1cblxuLyoqXG4gKiBEb3dubG9hZHMgdGhlIGRhdGEgYXQgdGhlIG9iamVjdCdzIGxvY2F0aW9uLiBSYWlzZXMgYW4gZXJyb3IgZXZlbnQgaWYgdGhlXG4gKiBvYmplY3QgaXMgbm90IGZvdW5kLlxuICpcbiAqIFRoaXMgQVBJIGlzIG9ubHkgYXZhaWxhYmxlIGluIE5vZGUuXG4gKlxuICogQHB1YmxpY1xuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2Ugd2hlcmUgZGF0YSBzaG91bGQgYmUgZG93bmxvYWRlZC5cbiAqIEBwYXJhbSBtYXhEb3dubG9hZFNpemVCeXRlcyAtIElmIHNldCwgdGhlIG1heGltdW0gYWxsb3dlZCBzaXplIGluIGJ5dGVzIHRvXG4gKiByZXRyaWV2ZS5cbiAqIEByZXR1cm5zIEEgc3RyZWFtIHdpdGggdGhlIG9iamVjdCdzIGRhdGEgYXMgYnl0ZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmVhbShcbiAgcmVmOiBTdG9yYWdlUmVmZXJlbmNlLFxuICBtYXhEb3dubG9hZFNpemVCeXRlcz86IG51bWJlclxuKTogUmVhZGFibGVTdHJlYW0ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ2dldFN0cmVhbSgpIGlzIG9ubHkgc3VwcG9ydGVkIGJ5IE5vZGVKUyBidWlsZHMnKTtcbn1cbiIsICIvKipcbiAqIENsb3VkIFN0b3JhZ2UgZm9yIEZpcmViYXNlXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7XG4gIF9yZWdpc3RlckNvbXBvbmVudCxcbiAgcmVnaXN0ZXJWZXJzaW9uLFxuICBTREtfVkVSU0lPTlxufSBmcm9tICdAZmlyZWJhc2UvYXBwJztcblxuaW1wb3J0IHsgRmlyZWJhc2VTdG9yYWdlSW1wbCB9IGZyb20gJy4uL3NyYy9zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50VHlwZSxcbiAgQ29tcG9uZW50Q29udGFpbmVyLFxuICBJbnN0YW5jZUZhY3RvcnlPcHRpb25zXG59IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBuYW1lLCB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcblxuaW1wb3J0IHsgRmlyZWJhc2VTdG9yYWdlIH0gZnJvbSAnLi9wdWJsaWMtdHlwZXMnO1xuaW1wb3J0IHsgU1RPUkFHRV9UWVBFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgKiBmcm9tICcuL2FwaSc7XG5leHBvcnQgKiBmcm9tICcuL2FwaS5icm93c2VyJztcblxuZnVuY3Rpb24gZmFjdG9yeShcbiAgY29udGFpbmVyOiBDb21wb25lbnRDb250YWluZXIsXG4gIHsgaW5zdGFuY2VJZGVudGlmaWVyOiB1cmwgfTogSW5zdGFuY2VGYWN0b3J5T3B0aW9uc1xuKTogRmlyZWJhc2VTdG9yYWdlIHtcbiAgY29uc3QgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgY29uc3QgYXV0aFByb3ZpZGVyID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhdXRoLWludGVybmFsJyk7XG4gIGNvbnN0IGFwcENoZWNrUHJvdmlkZXIgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcC1jaGVjay1pbnRlcm5hbCcpO1xuXG4gIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlSW1wbChcbiAgICBhcHAsXG4gICAgYXV0aFByb3ZpZGVyLFxuICAgIGFwcENoZWNrUHJvdmlkZXIsXG4gICAgdXJsLFxuICAgIFNES19WRVJTSU9OXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyU3RvcmFnZSgpOiB2b2lkIHtcbiAgX3JlZ2lzdGVyQ29tcG9uZW50KFxuICAgIG5ldyBDb21wb25lbnQoXG4gICAgICBTVE9SQUdFX1RZUEUsXG4gICAgICBmYWN0b3J5LFxuICAgICAgQ29tcG9uZW50VHlwZS5QVUJMSUNcbiAgICApLnNldE11bHRpcGxlSW5zdGFuY2VzKHRydWUpXG4gICk7XG4gIC8vUlVOVElNRV9FTlYgd2lsbCBiZSByZXBsYWNlZCBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uIHRvIFwibm9kZVwiIGZvciBub2RlanMgYW5kIGFuIGVtcHR5IHN0cmluZyBmb3IgYnJvd3NlclxuICByZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ19fUlVOVElNRV9FTlZfXycpO1xuICAvLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc201LCBlc20yMDE3LCBjanM1LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxuICByZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ19fQlVJTERfVEFSR0VUX18nKTtcbn1cblxucmVnaXN0ZXJTdG9yYWdlKCk7XG4iLCAiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSwgcmVmLCBnZXREb3dubG9hZFVSTCwgdXBsb2FkU3RyaW5nIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUFGYXlSYjkweXdiZzgyRWNMT25INWlCRG0zcW5aeDlUVVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJyZC15ZWFyLXByb2plY3QtMWY0MWQuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBwcm9qZWN0SWQ6IFwicmQteWVhci1wcm9qZWN0LTFmNDFkXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInJkLXllYXItcHJvamVjdC0xZjQxZC5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiODIzMjA4Njc1MDI3XCIsXHJcbiAgICBhcHBJZDogXCIxOjgyMzIwODY3NTAyNzp3ZWI6MDQwZmY5NmVhYzBmYzg5YjBlMzYyNlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTg2RFFTSDE3UFRcIlxyXG59O1xyXG5cclxuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcblxyXG4vLyAhIEdMT0JBTFxyXG52YXIgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKTtcclxudmFyIHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XHJcbnZhciBlbWFpbHRleHRcclxudmFyIHBhc3N3b3JkdGV4dFxyXG52YXIgdXNlcm5hbWVcclxudmFyIHN0YXR1cyA9IFwiXCI7XHJcbnZhciB1c2VyQ3Jkc1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVmX2pzb24ocmVmSXRlbSkge1xyXG4gICAgY29uc3QgdXJsID0gYXdhaXQgZ2V0RG93bmxvYWRVUkwocmVmSXRlbSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8vID8gbWF5IG5lZWQgdGhpcyBsYXRlclxyXG5hc3luYyBmdW5jdGlvbiBnZXRSZWZfdGV4dChyZWZJdGVtKSB7XHJcbiAgICBjb25zdCB1cmwgPSBhd2FpdCBnZXREb3dubG9hZFVSTChyZWZJdGVtKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJuYW1lKGVtYWlsKSB7XHJcbiAgICAvLyB0b2RvIHZhbGlkYXRlIGVtYWlsIGlucHV0c1xyXG4gICAgcmV0dXJuIGVtYWlsLnNwbGl0KCdAZ21haWwuY29tJylbMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVXNlcihlbWFpbCkge1xyXG4gICAgbGV0IHVzZXJuYW1lID0gZ2V0VXNlcm5hbWUoZW1haWwpO1xyXG4gICAgcmV0dXJuIGNyZWRzQXJyW3VzZXJuYW1lXSAhPSB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUVycm9yQm9yZGVyKGVsZW1lbnRzQXJyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudHNBcnJbaV0pLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yQm9yZGVyJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVycm9ySW5wdXQoZWxlbWVudHNBcnIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHNBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50c0FycltpXSkuY2xhc3NMaXN0LmFkZCgnZXJyb3JCb3JkZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZW1vdmVFcnJvckJvcmRlcihlbGVtZW50c0Fycik7XHJcbiAgICB9LCAzMDAwKTtcclxufVxyXG5cclxuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTsgLy8gISBnbG9iYWxcclxuY29uc3QgdXNlckNyZWRzID0gcmVmKHN0b3JhZ2UsICd1c2VyQ3JlZHMuanNvbicpO1xyXG52YXIgY3JlZHNBcnI7IC8vICEgZ2xvYmFsXHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkSW5mbygpIHtcclxuXHJcbiAgICBjcmVkc0FyciA9IGF3YWl0IFByb21pc2UucmVzb2x2ZShnZXRSZWZfanNvbih1c2VyQ3JlZHMpKTtcclxuICAgIGNvbnNvbGUubG9nKGNyZWRzQXJyKTtcclxuICAgIGNvbnNvbGUubG9nKCdSRUFEIEZST00gVEhFIERBVEFCQVNFJyk7XHJcbn1cclxuXHJcbmxvYWRJbmZvKCk7XHJcblxyXG52YXIgc2lnbkluQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1NpZ25JbkJ1dHRvbicpO1xyXG5cclxuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZW1vdmVFcnJvckJvcmRlcihbJ2VtYWlsJ10pO1xyXG59KTtcclxuXHJcbnBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVtb3ZlRXJyb3JCb3JkZXIoWydwYXNzd29yZCddKTtcclxufSk7XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVN0YXR1cyhzdGF0dXMpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXNUZXh0JykuaW5uZXJIVE1MID0gc3RhdHVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnB1dFZhbGlkYXRpb24oZW1haWx0ZXh0LCBwYXNzd29yZHRleHQpIHtcclxuICAgIGlmIChlbWFpbHRleHQgPT0gXCJcIiAmJiBwYXNzd29yZHRleHQgPT0gXCJcIikge1xyXG4gICAgICAgIHN0YXR1cyA9ICdQbGVhc2UgZW50ZXIgZW1haWwgYW5kIHBhc3N3b3JkJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZW1haWx0ZXh0ICE9IFwiXCIgJiYgcGFzc3dvcmR0ZXh0ID09IFwiXCIpIHtcclxuICAgICAgICBzdGF0dXMgPSAnUGxlYXNlIGVudGVyIHBhc3N3b3JkJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZW1haWx0ZXh0ID09IFwiXCIgJiYgcGFzc3dvcmR0ZXh0ICE9IFwiXCIpIHtcclxuICAgICAgICBzdGF0dXMgPSAnUGxlYXNlIGVudGVyIGVtYWlsJ1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNVc2VyKGVtYWlsdGV4dCkgPT0gZmFsc2UpIHtcclxuICAgICAgICBzdGF0dXMgPSBgbm8gYWNjb3VudCBhc3NvY2lhdGVkIHdpdGggJHtlbWFpbHRleHR9YDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhdHVzICE9ICcnKSB7XHJcbiAgICAgICAgZXJyb3JJbnB1dChbJ2VtYWlsJywgJ3Bhc3N3b3JkJ10pO1xyXG4gICAgICAgIHZhciBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvckNvbnRhaW5lcicpO1xyXG4gICAgICAgIGVycm9yQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgICAgIGRpc3BsYXlTdGF0dXMoc3RhdHVzKTtcclxuICAgIH1cclxufVxyXG5cclxuc2lnbkluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZW1haWx0ZXh0ID0gZW1haWwudmFsdWU7XHJcbiAgICBwYXNzd29yZHRleHQgPSBwYXNzd29yZC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKCdlbWFpbDogJywgZW1haWx0ZXh0KVxyXG5cclxuICAgIHVzZXJuYW1lID0gZ2V0VXNlcm5hbWUoZW1haWx0ZXh0KTtcclxuICAgIHVzZXJDcmRzID0gY3JlZHNBcnJbdXNlcm5hbWVdO1xyXG5cclxuICAgIGlmICh1c2VyQ3JkcyA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpbnB1dFZhbGlkYXRpb24oZW1haWx0ZXh0LCBwYXNzd29yZHRleHQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGVtYWlsdGV4dCAhPSB1c2VyQ3Jkcy5lbWFpbCB8fCBwYXNzd29yZHRleHQgIT0gdXNlckNyZHMucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gJ2luY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZCdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbWFpbHRleHQgPT0gdXNlckNyZHMuZW1haWwgJiYgcGFzc3dvcmR0ZXh0ID09IHVzZXJDcmRzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IGAke3VzZXJuYW1lfSBoYXMgbG9nZ2VkIGluIHN1Y2Nlc3NmdWxseWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbnZhciBjcmVhdGVBY2NvdW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZUFjY291bnQnKTtcclxuY3JlYXRlQWNjb3VudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNpZ25JbkJ1dHRvbi5pbm5lckhUTUwgPSAnPGgzPkNyZWF0ZSBBY2NvdW50PGgzPic7XHJcbiAgICBjcmVhdGVBY2NvdW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgZW1haWx0ZXh0ID0gZW1haWwudmFsdWU7XHJcbiAgICBwYXNzd29yZHRleHQgPSBwYXNzd29yZC52YWx1ZTtcclxuXHJcblxyXG4gICAgbGV0IG5ld1VzZXIgPSB7XHJcbiAgICAgICAgJ2VtYWlsJzogZW1haWx0ZXh0LFxyXG4gICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkdGV4dFxyXG4gICAgfVxyXG5cclxuICAgIGNyZWRzQXJyW2Ake3VzZXJuYW1lfWBdID0gbmV3VXNlcjtcclxuICAgIGlucHV0VmFsaWRhdGlvbihlbWFpbHRleHQsIHBhc3N3b3JkdGV4dCk7XHJcblxyXG4gICAgc3RhdHVzID0gJ05ldyB1c2VyIGNyZWF0ZWQnO1xyXG4gICAgZGlzcGxheVN0YXR1cyhzdGF0dXMpO1xyXG4gICAgY29uc29sZS5sb2codXNlckNyZHMpXHJcblxyXG4gICAgLy8gdG9kbyB1cGxvYWQgdXBkYXRlZCBKU09OIHRvIGZpcmViYXNlXHJcbiAgICB1cGxvYWRTdHJpbmcodXNlckNyZWRzLCBKU09OLnN0cmluZ2lmeShjcmVkc0FycikpLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VwbG9hZGVkIGEgYmxvYiBvciBmaWxlIScpO1xyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiB0ZXN0SW5wdXQoKSB7XHJcbiAgICBlbWFpbC52YWx1ZSA9ICd1c2VyNEBnbWFpbC5jb20nXHJcbiAgICBwYXNzd29yZC52YWx1ZSA9ICd1c2VyNF9wYXNzd29yZCEnXHJcbiAgICBjb25zb2xlLmxvZygnaW5wdXRzIHNldCcpXHJcbn1cclxuXHJcbnRlc3RJbnB1dCgpOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVpQkEsTUFBTUEsc0JBQW9CLFNBQVUsS0FBVztBQUU3QyxVQUFNLE1BQWdCLENBQUE7QUFDdEIsUUFBSSxJQUFJO0FBQ1IsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLFFBQVEsS0FBSztBQUNuQyxVQUFJLElBQUksSUFBSSxXQUFXLENBQUM7QUFDeEIsVUFBSSxJQUFJLEtBQUs7QUFDWCxZQUFJLEdBQUcsSUFBSTtNQUNaLFdBQVUsSUFBSSxNQUFNO0FBQ25CLFlBQUksR0FBRyxJQUFLLEtBQUssSUFBSztBQUN0QixZQUFJLEdBQUcsSUFBSyxJQUFJLEtBQU07TUFDdkIsWUFDRSxJQUFJLFdBQVksU0FDakIsSUFBSSxJQUFJLElBQUksV0FDWCxJQUFJLFdBQVcsSUFBSSxDQUFDLElBQUksV0FBWSxPQUNyQztBQUVBLFlBQUksVUFBWSxJQUFJLFNBQVcsT0FBTyxJQUFJLFdBQVcsRUFBRSxDQUFDLElBQUk7QUFDNUQsWUFBSSxHQUFHLElBQUssS0FBSyxLQUFNO0FBQ3ZCLFlBQUksR0FBRyxJQUFNLEtBQUssS0FBTSxLQUFNO0FBQzlCLFlBQUksR0FBRyxJQUFNLEtBQUssSUFBSyxLQUFNO0FBQzdCLFlBQUksR0FBRyxJQUFLLElBQUksS0FBTTtNQUN2QixPQUFNO0FBQ0wsWUFBSSxHQUFHLElBQUssS0FBSyxLQUFNO0FBQ3ZCLFlBQUksR0FBRyxJQUFNLEtBQUssSUFBSyxLQUFNO0FBQzdCLFlBQUksR0FBRyxJQUFLLElBQUksS0FBTTtNQUN2QjtJQUNGO0FBQ0QsV0FBTztFQUNUO0FBUUEsTUFBTSxvQkFBb0IsU0FBVSxPQUFlO0FBRWpELFVBQU0sTUFBZ0IsQ0FBQTtBQUN0QixRQUFJLE1BQU0sR0FDUixJQUFJO0FB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QVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxhQUFhO0FBQ2pFLGNBQVEsSUFBSSwwQkFBMEI7QUFBQSxJQUMxQyxDQUFDO0FBQUEsRUFDTCxDQUFDO0FBRUQsV0FBUyxZQUFZO0FBQ2pCLFVBQU0sUUFBUTtBQUNkLGFBQVMsUUFBUTtBQUNqQixZQUFRLElBQUksWUFBWTtBQUFBLEVBQzVCO0FBRUEsWUFBVTsiLAogICJuYW1lcyI6IFsic3RyaW5nVG9CeXRlQXJyYXkiLCAibmFtZSIsICJMb2dMZXZlbCIsICJuYW1lIiwgIm5hbWUiLCAidmVyc2lvbiIsICJ0YXJnZXQiLCAiREVGQVVMVF9FTlRSWV9OQU1FIiwgImFwcE5hbWUiLCAiYXBwQ29tcGF0TmFtZSIsICJhbmFseXRpY3NOYW1lIiwgImFuYWx5dGljc0NvbXBhdE5hbWUiLCAiYXBwQ2hlY2tOYW1lIiwgImFwcENoZWNrQ29tcGF0TmFtZSIsICJhdXRoTmFtZSIsICJhdXRoQ29tcGF0TmFtZSIsICJkYXRhYmFzZU5hbWUiLCAiZGF0YWJhc2VDb21wYXROYW1lIiwgImZ1bmN0aW9uc05hbWUiLCAiZnVuY3Rpb25zQ29tcGF0TmFtZSIsICJpbnN0YWxsYXRpb25zTmFtZSIsICJpbnN0YWxsYXRpb25zQ29tcGF0TmFtZSIsICJtZXNzYWdpbmdOYW1lIiwgIm1lc3NhZ2luZ0NvbXBhdE5hbWUiLCAicGVyZm9ybWFuY2VOYW1lIiwgInBlcmZvcm1hbmNlQ29tcGF0TmFtZSIsICJyZW1vdGVDb25maWdOYW1lIiwgInJlbW90ZUNvbmZpZ0NvbXBhdE5hbWUiLCAic3RvcmFnZU5hbWUiLCAic3RvcmFnZUNvbXBhdE5hbWUiLCAiZmlyZXN0b3JlTmFtZSIsICJmaXJlc3RvcmVDb21wYXROYW1lIiwgInZlcnRleE5hbWUiLCAicGFja2FnZU5hbWUiLCAibmFtZSIsICJuYW1lIiwgIkRFRkFVTFRfRU5UUllfTkFNRSIsICJuYW1lIiwgIkRFRkFVTFRfRU5UUllfTkFNRSIsICJ2ZXJzaW9uIiwgIm5hbWUiLCAidmVyc2lvbiIsICJuYW1lIiwgInZlcnNpb24iLCAic3RhdHVzIiwgIlN0b3JhZ2VFcnJvckNvZGUiLCAibmFtZSIsICJ2ZXJzaW9uIiwgImNhbmNlbGVkIiwgInN0b3AiLCAiRXJyb3JDb2RlIiwgInN0YXR1cyIsICJjYW5jZWxlZCIsICJnZXRCbG9iIiwgIkJsb2JCdWlsZGVyIiwgInN0YXJ0IiwgIm5hbWUiLCAidXBsb2FkQnl0ZXMiLCAicmVmIiwgInVwbG9hZFN0cmluZyIsICJyZWYiLCAidXBsb2FkQnl0ZXMiLCAiZ2V0RG93bmxvYWRVUkwiLCAicmVmIiwgInJlcXVlc3RzR2V0RG93bmxvYWRVcmwiLCAiX2dldENoaWxkIiwgInJlZiIsICJjb25uZWN0U3RvcmFnZUVtdWxhdG9yIiwgInN0b3JhZ2UiLCAicmVmIiwgInVwbG9hZFN0cmluZ0ludGVybmFsIiwgInJlZiIsICJnZXREb3dubG9hZFVSTEludGVybmFsIiwgInJlZkludGVybmFsIiwgInN0b3JhZ2UiLCAiY29ubmVjdEVtdWxhdG9ySW50ZXJuYWwiLCAibmFtZSIsICJ2ZXJzaW9uIiwgImVtYWlsIiwgInVzZXJuYW1lIiwgInN0YXR1cyIsICJlbWFpbHRleHQiLCAicGFzc3dvcmR0ZXh0Il0KfQo=
