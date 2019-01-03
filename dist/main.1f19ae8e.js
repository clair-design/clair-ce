// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function(modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire
  var nodeRequire = typeof require === 'function' && require

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire
        if (!jumped && currentRequire) {
          return currentRequire(name, true)
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true)
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name)
        }

        var err = new Error("Cannot find module '" + name + "'")
        err.code = 'MODULE_NOT_FOUND'
        throw err
      }

      localRequire.resolve = resolve
      localRequire.cache = {}

      var module = (cache[name] = new newRequire.Module(name))

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      )
    }

    return cache[name].exports

    function localRequire(x) {
      return newRequire(localRequire.resolve(x))
    }

    function resolve(x) {
      return modules[name][1][x] || x
    }
  }

  function Module(moduleName) {
    this.id = moduleName
    this.bundle = newRequire
    this.exports = {}
  }

  newRequire.isParcelRequire = true
  newRequire.Module = Module
  newRequire.modules = modules
  newRequire.cache = cache
  newRequire.parent = previousRequire
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports
      },
      {}
    ]
  }

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i])
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1])

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports
      })

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports
    }
  }

  // Override the current require with this new one
  return newRequire
})(
  {
    '../node_modules/vue/dist/vue.runtime.esm.js': [
      function(require, module, exports) {
        var global = arguments[3]
        ;('use strict')

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = void 0

        /*!
         * Vue.js v2.5.21
         * (c) 2014-2018 Evan You
         * Released under the MIT License.
         */

        /*  */
        var emptyObject = Object.freeze({}) // These helpers produce better VM code in JS engines due to their
        // explicitness and function inlining.

        function isUndef(v) {
          return v === undefined || v === null
        }

        function isDef(v) {
          return v !== undefined && v !== null
        }

        function isTrue(v) {
          return v === true
        }

        function isFalse(v) {
          return v === false
        }
        /**
         * Check if value is primitive.
         */

        function isPrimitive(value) {
          return (
            typeof value === 'string' ||
            typeof value === 'number' || // $flow-disable-line
            typeof value === 'symbol' ||
            typeof value === 'boolean'
          )
        }
        /**
         * Quick object check - this is primarily used to tell
         * Objects from primitive values when we know the value
         * is a JSON-compliant type.
         */

        function isObject(obj) {
          return obj !== null && typeof obj === 'object'
        }
        /**
         * Get the raw type string of a value, e.g., [object Object].
         */

        var _toString = Object.prototype.toString

        function toRawType(value) {
          return _toString.call(value).slice(8, -1)
        }
        /**
         * Strict object type check. Only returns true
         * for plain JavaScript objects.
         */

        function isPlainObject(obj) {
          return _toString.call(obj) === '[object Object]'
        }

        function isRegExp(v) {
          return _toString.call(v) === '[object RegExp]'
        }
        /**
         * Check if val is a valid array index.
         */

        function isValidArrayIndex(val) {
          var n = parseFloat(String(val))
          return n >= 0 && Math.floor(n) === n && isFinite(val)
        }
        /**
         * Convert a value to a string that is actually rendered.
         */

        function toString(val) {
          return val == null
            ? ''
            : typeof val === 'object'
            ? JSON.stringify(val, null, 2)
            : String(val)
        }
        /**
         * Convert an input value to a number for persistence.
         * If the conversion fails, return original string.
         */

        function toNumber(val) {
          var n = parseFloat(val)
          return isNaN(n) ? val : n
        }
        /**
         * Make a map and return a function for checking if a key
         * is in that map.
         */

        function makeMap(str, expectsLowerCase) {
          var map = Object.create(null)
          var list = str.split(',')

          for (var i = 0; i < list.length; i++) {
            map[list[i]] = true
          }

          return expectsLowerCase
            ? function(val) {
                return map[val.toLowerCase()]
              }
            : function(val) {
                return map[val]
              }
        }
        /**
         * Check if a tag is a built-in tag.
         */

        var isBuiltInTag = makeMap('slot,component', true)
        /**
         * Check if an attribute is a reserved attribute.
         */

        var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is')
        /**
         * Remove an item from an array.
         */

        function remove(arr, item) {
          if (arr.length) {
            var index = arr.indexOf(item)

            if (index > -1) {
              return arr.splice(index, 1)
            }
          }
        }
        /**
         * Check whether an object has the property.
         */

        var hasOwnProperty = Object.prototype.hasOwnProperty

        function hasOwn(obj, key) {
          return hasOwnProperty.call(obj, key)
        }
        /**
         * Create a cached version of a pure function.
         */

        function cached(fn) {
          var cache = Object.create(null)
          return function cachedFn(str) {
            var hit = cache[str]
            return hit || (cache[str] = fn(str))
          }
        }
        /**
         * Camelize a hyphen-delimited string.
         */

        var camelizeRE = /-(\w)/g
        var camelize = cached(function(str) {
          return str.replace(camelizeRE, function(_, c) {
            return c ? c.toUpperCase() : ''
          })
        })
        /**
         * Capitalize a string.
         */

        var capitalize = cached(function(str) {
          return str.charAt(0).toUpperCase() + str.slice(1)
        })
        /**
         * Hyphenate a camelCase string.
         */

        var hyphenateRE = /\B([A-Z])/g
        var hyphenate = cached(function(str) {
          return str.replace(hyphenateRE, '-$1').toLowerCase()
        })
        /**
         * Simple bind polyfill for environments that do not support it,
         * e.g., PhantomJS 1.x. Technically, we don't need this anymore
         * since native bind is now performant enough in most browsers.
         * But removing it would mean breaking code that was able to run in
         * PhantomJS 1.x, so this must be kept for backward compatibility.
         */

        /* istanbul ignore next */

        function polyfillBind(fn, ctx) {
          function boundFn(a) {
            var l = arguments.length
            return l
              ? l > 1
                ? fn.apply(ctx, arguments)
                : fn.call(ctx, a)
              : fn.call(ctx)
          }

          boundFn._length = fn.length
          return boundFn
        }

        function nativeBind(fn, ctx) {
          return fn.bind(ctx)
        }

        var bind = Function.prototype.bind ? nativeBind : polyfillBind
        /**
         * Convert an Array-like object to a real Array.
         */

        function toArray(list, start) {
          start = start || 0
          var i = list.length - start
          var ret = new Array(i)

          while (i--) {
            ret[i] = list[i + start]
          }

          return ret
        }
        /**
         * Mix properties into target object.
         */

        function extend(to, _from) {
          for (var key in _from) {
            to[key] = _from[key]
          }

          return to
        }
        /**
         * Merge an Array of Objects into a single Object.
         */

        function toObject(arr) {
          var res = {}

          for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
              extend(res, arr[i])
            }
          }

          return res
        }
        /* eslint-disable no-unused-vars */

        /**
         * Perform no operation.
         * Stubbing args to make Flow happy without leaving useless transpiled code
         * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
         */

        function noop(a, b, c) {}
        /**
         * Always return false.
         */

        var no = function(a, b, c) {
          return false
        }
        /* eslint-enable no-unused-vars */

        /**
         * Return the same value.
         */

        var identity = function(_) {
          return _
        }
        /**
         * Check if two values are loosely equal - that is,
         * if they are plain objects, do they have the same shape?
         */

        function looseEqual(a, b) {
          if (a === b) {
            return true
          }

          var isObjectA = isObject(a)
          var isObjectB = isObject(b)

          if (isObjectA && isObjectB) {
            try {
              var isArrayA = Array.isArray(a)
              var isArrayB = Array.isArray(b)

              if (isArrayA && isArrayB) {
                return (
                  a.length === b.length &&
                  a.every(function(e, i) {
                    return looseEqual(e, b[i])
                  })
                )
              } else if (a instanceof Date && b instanceof Date) {
                return a.getTime() === b.getTime()
              } else if (!isArrayA && !isArrayB) {
                var keysA = Object.keys(a)
                var keysB = Object.keys(b)
                return (
                  keysA.length === keysB.length &&
                  keysA.every(function(key) {
                    return looseEqual(a[key], b[key])
                  })
                )
              } else {
                /* istanbul ignore next */
                return false
              }
            } catch (e) {
              /* istanbul ignore next */
              return false
            }
          } else if (!isObjectA && !isObjectB) {
            return String(a) === String(b)
          } else {
            return false
          }
        }
        /**
         * Return the first index at which a loosely equal value can be
         * found in the array (if value is a plain object, the array must
         * contain an object of the same shape), or -1 if it is not present.
         */

        function looseIndexOf(arr, val) {
          for (var i = 0; i < arr.length; i++) {
            if (looseEqual(arr[i], val)) {
              return i
            }
          }

          return -1
        }
        /**
         * Ensure a function is called only once.
         */

        function once(fn) {
          var called = false
          return function() {
            if (!called) {
              called = true
              fn.apply(this, arguments)
            }
          }
        }

        var SSR_ATTR = 'data-server-rendered'
        var ASSET_TYPES = ['component', 'directive', 'filter']
        var LIFECYCLE_HOOKS = [
          'beforeCreate',
          'created',
          'beforeMount',
          'mounted',
          'beforeUpdate',
          'updated',
          'beforeDestroy',
          'destroyed',
          'activated',
          'deactivated',
          'errorCaptured'
        ]
        /*  */

        var config = {
          /**
           * Option merge strategies (used in core/util/options)
           */
          // $flow-disable-line
          optionMergeStrategies: Object.create(null),

          /**
           * Whether to suppress warnings.
           */
          silent: false,

          /**
           * Show production mode tip message on boot?
           */
          productionTip: 'development' !== 'production',

          /**
           * Whether to enable devtools
           */
          devtools: 'development' !== 'production',

          /**
           * Whether to record perf
           */
          performance: false,

          /**
           * Error handler for watcher errors
           */
          errorHandler: null,

          /**
           * Warn handler for watcher warns
           */
          warnHandler: null,

          /**
           * Ignore certain custom elements
           */
          ignoredElements: [],

          /**
           * Custom user key aliases for v-on
           */
          // $flow-disable-line
          keyCodes: Object.create(null),

          /**
           * Check if a tag is reserved so that it cannot be registered as a
           * component. This is platform-dependent and may be overwritten.
           */
          isReservedTag: no,

          /**
           * Check if an attribute is reserved so that it cannot be used as a component
           * prop. This is platform-dependent and may be overwritten.
           */
          isReservedAttr: no,

          /**
           * Check if a tag is an unknown element.
           * Platform-dependent.
           */
          isUnknownElement: no,

          /**
           * Get the namespace of an element
           */
          getTagNamespace: noop,

          /**
           * Parse the real tag name for the specific platform.
           */
          parsePlatformTagName: identity,

          /**
           * Check if an attribute must be bound using property, e.g. value
           * Platform-dependent.
           */
          mustUseProp: no,

          /**
           * Perform updates asynchronously. Intended to be used by Vue Test Utils
           * This will significantly reduce performance if set to false.
           */
          async: true,

          /**
           * Exposed for legacy reasons
           */
          _lifecycleHooks: LIFECYCLE_HOOKS
        }
        /*  */

        /**
         * Check if a string starts with $ or _
         */

        function isReserved(str) {
          var c = (str + '').charCodeAt(0)
          return c === 0x24 || c === 0x5f
        }
        /**
         * Define a property.
         */

        function def(obj, key, val, enumerable) {
          Object.defineProperty(obj, key, {
            value: val,
            enumerable: !!enumerable,
            writable: true,
            configurable: true
          })
        }
        /**
         * Parse simple path.
         */

        var bailRE = /[^\w.$]/

        function parsePath(path) {
          if (bailRE.test(path)) {
            return
          }

          var segments = path.split('.')
          return function(obj) {
            for (var i = 0; i < segments.length; i++) {
              if (!obj) {
                return
              }

              obj = obj[segments[i]]
            }

            return obj
          }
        }
        /*  */
        // can we use __proto__?

        var hasProto = '__proto__' in {} // Browser environment sniffing

        var inBrowser = typeof window !== 'undefined'
        var inWeex =
          typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
        var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
        var UA = inBrowser && window.navigator.userAgent.toLowerCase()
        var isIE = UA && /msie|trident/.test(UA)
        var isIE9 = UA && UA.indexOf('msie 9.0') > 0
        var isEdge = UA && UA.indexOf('edge/') > 0
        var isAndroid =
          (UA && UA.indexOf('android') > 0) || weexPlatform === 'android'
        var isIOS =
          (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios'
        var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge // Firefox has a "watch" function on Object.prototype...

        var nativeWatch = {}.watch
        var supportsPassive = false

        if (inBrowser) {
          try {
            var opts = {}
            Object.defineProperty(opts, 'passive', {
              get: function get() {
                /* istanbul ignore next */
                supportsPassive = true
              }
            }) // https://github.com/facebook/flow/issues/285

            window.addEventListener('test-passive', null, opts)
          } catch (e) {}
        } // this needs to be lazy-evaled because vue may be required before
        // vue-server-renderer can set VUE_ENV

        var _isServer

        var isServerRendering = function() {
          if (_isServer === undefined) {
            /* istanbul ignore if */
            if (!inBrowser && !inWeex && typeof global !== 'undefined') {
              // detect presence of vue-server-renderer and avoid
              // Webpack shimming the process
              _isServer =
                global['process'] && global['process'].env.VUE_ENV === 'server'
            } else {
              _isServer = false
            }
          }

          return _isServer
        } // detect devtools

        var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
        /* istanbul ignore next */

        function isNative(Ctor) {
          return (
            typeof Ctor === 'function' && /native code/.test(Ctor.toString())
          )
        }

        var hasSymbol =
          typeof Symbol !== 'undefined' &&
          isNative(Symbol) &&
          typeof Reflect !== 'undefined' &&
          isNative(Reflect.ownKeys)

        var _Set
        /* istanbul ignore if */
        // $flow-disable-line

        if (typeof Set !== 'undefined' && isNative(Set)) {
          // use native Set when available.
          _Set = Set
        } else {
          // a non-standard Set polyfill that only works with primitive keys.
          _Set =
            /*@__PURE__*/
            (function() {
              function Set() {
                this.set = Object.create(null)
              }

              Set.prototype.has = function has(key) {
                return this.set[key] === true
              }

              Set.prototype.add = function add(key) {
                this.set[key] = true
              }

              Set.prototype.clear = function clear() {
                this.set = Object.create(null)
              }

              return Set
            })()
        }
        /*  */

        var warn = noop
        var tip = noop
        var generateComponentTrace = noop // work around flow check

        var formatComponentName = noop

        if ('development' !== 'production') {
          var hasConsole = typeof console !== 'undefined'
          var classifyRE = /(?:^|[-_])(\w)/g

          var classify = function(str) {
            return str
              .replace(classifyRE, function(c) {
                return c.toUpperCase()
              })
              .replace(/[-_]/g, '')
          }

          warn = function(msg, vm) {
            var trace = vm ? generateComponentTrace(vm) : ''

            if (config.warnHandler) {
              config.warnHandler.call(null, msg, vm, trace)
            } else if (hasConsole && !config.silent) {
              console.error('[Vue warn]: ' + msg + trace)
            }
          }

          tip = function(msg, vm) {
            if (hasConsole && !config.silent) {
              console.warn(
                '[Vue tip]: ' + msg + (vm ? generateComponentTrace(vm) : '')
              )
            }
          }

          formatComponentName = function(vm, includeFile) {
            if (vm.$root === vm) {
              return '<Root>'
            }

            var options =
              typeof vm === 'function' && vm.cid != null
                ? vm.options
                : vm._isVue
                ? vm.$options || vm.constructor.options
                : vm || {}
            var name = options.name || options._componentTag
            var file = options.__file

            if (!name && file) {
              var match = file.match(/([^/\\]+)\.vue$/)
              name = match && match[1]
            }

            return (
              (name ? '<' + classify(name) + '>' : '<Anonymous>') +
              (file && includeFile !== false ? ' at ' + file : '')
            )
          }

          var repeat = function(str, n) {
            var res = ''

            while (n) {
              if (n % 2 === 1) {
                res += str
              }

              if (n > 1) {
                str += str
              }

              n >>= 1
            }

            return res
          }

          generateComponentTrace = function(vm) {
            if (vm._isVue && vm.$parent) {
              var tree = []
              var currentRecursiveSequence = 0

              while (vm) {
                if (tree.length > 0) {
                  var last = tree[tree.length - 1]

                  if (last.constructor === vm.constructor) {
                    currentRecursiveSequence++
                    vm = vm.$parent
                    continue
                  } else if (currentRecursiveSequence > 0) {
                    tree[tree.length - 1] = [last, currentRecursiveSequence]
                    currentRecursiveSequence = 0
                  }
                }

                tree.push(vm)
                vm = vm.$parent
              }

              return (
                '\n\nfound in\n\n' +
                tree
                  .map(function(vm, i) {
                    return (
                      '' +
                      (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) +
                      (Array.isArray(vm)
                        ? formatComponentName(vm[0]) +
                          '... (' +
                          vm[1] +
                          ' recursive calls)'
                        : formatComponentName(vm))
                    )
                  })
                  .join('\n')
              )
            } else {
              return '\n\n(found in ' + formatComponentName(vm) + ')'
            }
          }
        }
        /*  */

        var uid = 0
        /**
         * A dep is an observable that can have multiple
         * directives subscribing to it.
         */

        var Dep = function Dep() {
          this.id = uid++
          this.subs = []
        }

        Dep.prototype.addSub = function addSub(sub) {
          this.subs.push(sub)
        }

        Dep.prototype.removeSub = function removeSub(sub) {
          remove(this.subs, sub)
        }

        Dep.prototype.depend = function depend() {
          if (Dep.target) {
            Dep.target.addDep(this)
          }
        }

        Dep.prototype.notify = function notify() {
          // stabilize the subscriber list first
          var subs = this.subs.slice()

          if ('development' !== 'production' && !config.async) {
            // subs aren't sorted in scheduler if not running async
            // we need to sort them now to make sure they fire in correct
            // order
            subs.sort(function(a, b) {
              return a.id - b.id
            })
          }

          for (var i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
          }
        } // the current target watcher being evaluated.
        // this is globally unique because there could be only one
        // watcher being evaluated at any time.

        Dep.target = null
        var targetStack = []

        function pushTarget(target) {
          targetStack.push(target)
          Dep.target = target
        }

        function popTarget() {
          targetStack.pop()
          Dep.target = targetStack[targetStack.length - 1]
        }
        /*  */

        var VNode = function VNode(
          tag,
          data,
          children,
          text,
          elm,
          context,
          componentOptions,
          asyncFactory
        ) {
          this.tag = tag
          this.data = data
          this.children = children
          this.text = text
          this.elm = elm
          this.ns = undefined
          this.context = context
          this.fnContext = undefined
          this.fnOptions = undefined
          this.fnScopeId = undefined
          this.key = data && data.key
          this.componentOptions = componentOptions
          this.componentInstance = undefined
          this.parent = undefined
          this.raw = false
          this.isStatic = false
          this.isRootInsert = true
          this.isComment = false
          this.isCloned = false
          this.isOnce = false
          this.asyncFactory = asyncFactory
          this.asyncMeta = undefined
          this.isAsyncPlaceholder = false
        }

        var prototypeAccessors = {
          child: {
            configurable: true
          }
        } // DEPRECATED: alias for componentInstance for backwards compat.

        /* istanbul ignore next */

        prototypeAccessors.child.get = function() {
          return this.componentInstance
        }

        Object.defineProperties(VNode.prototype, prototypeAccessors)

        var createEmptyVNode = function(text) {
          if (text === void 0) text = ''
          var node = new VNode()
          node.text = text
          node.isComment = true
          return node
        }

        function createTextVNode(val) {
          return new VNode(undefined, undefined, undefined, String(val))
        } // optimized shallow clone
        // used for static nodes and slot nodes because they may be reused across
        // multiple renders, cloning them avoids errors when DOM manipulations rely
        // on their elm reference.

        function cloneVNode(vnode) {
          var cloned = new VNode(
            vnode.tag,
            vnode.data, // #7975
            // clone children array to avoid mutating original in case of cloning
            // a child.
            vnode.children && vnode.children.slice(),
            vnode.text,
            vnode.elm,
            vnode.context,
            vnode.componentOptions,
            vnode.asyncFactory
          )
          cloned.ns = vnode.ns
          cloned.isStatic = vnode.isStatic
          cloned.key = vnode.key
          cloned.isComment = vnode.isComment
          cloned.fnContext = vnode.fnContext
          cloned.fnOptions = vnode.fnOptions
          cloned.fnScopeId = vnode.fnScopeId
          cloned.asyncMeta = vnode.asyncMeta
          cloned.isCloned = true
          return cloned
        }
        /*
         * not type checking this file because flow doesn't play well with
         * dynamically accessing methods on Array prototype
         */

        var arrayProto = Array.prototype
        var arrayMethods = Object.create(arrayProto)
        var methodsToPatch = [
          'push',
          'pop',
          'shift',
          'unshift',
          'splice',
          'sort',
          'reverse'
        ]
        /**
         * Intercept mutating methods and emit events
         */

        methodsToPatch.forEach(function(method) {
          // cache original method
          var original = arrayProto[method]
          def(arrayMethods, method, function mutator() {
            var args = [],
              len = arguments.length

            while (len--) args[len] = arguments[len]

            var result = original.apply(this, args)
            var ob = this.__ob__
            var inserted

            switch (method) {
              case 'push':
              case 'unshift':
                inserted = args
                break

              case 'splice':
                inserted = args.slice(2)
                break
            }

            if (inserted) {
              ob.observeArray(inserted)
            } // notify change

            ob.dep.notify()
            return result
          })
        })
        /*  */

        var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
        /**
         * In some cases we may want to disable observation inside a component's
         * update computation.
         */

        var shouldObserve = true

        function toggleObserving(value) {
          shouldObserve = value
        }
        /**
         * Observer class that is attached to each observed
         * object. Once attached, the observer converts the target
         * object's property keys into getter/setters that
         * collect dependencies and dispatch updates.
         */

        var Observer = function Observer(value) {
          this.value = value
          this.dep = new Dep()
          this.vmCount = 0
          def(value, '__ob__', this)

          if (Array.isArray(value)) {
            if (hasProto) {
              protoAugment(value, arrayMethods)
            } else {
              copyAugment(value, arrayMethods, arrayKeys)
            }

            this.observeArray(value)
          } else {
            this.walk(value)
          }
        }
        /**
         * Walk through all properties and convert them into
         * getter/setters. This method should only be called when
         * value type is Object.
         */

        Observer.prototype.walk = function walk(obj) {
          var keys = Object.keys(obj)

          for (var i = 0; i < keys.length; i++) {
            defineReactive$$1(obj, keys[i])
          }
        }
        /**
         * Observe a list of Array items.
         */

        Observer.prototype.observeArray = function observeArray(items) {
          for (var i = 0, l = items.length; i < l; i++) {
            observe(items[i])
          }
        } // helpers

        /**
         * Augment a target Object or Array by intercepting
         * the prototype chain using __proto__
         */

        function protoAugment(target, src) {
          /* eslint-disable no-proto */
          target.__proto__ = src
          /* eslint-enable no-proto */
        }
        /**
         * Augment a target Object or Array by defining
         * hidden properties.
         */

        /* istanbul ignore next */

        function copyAugment(target, src, keys) {
          for (var i = 0, l = keys.length; i < l; i++) {
            var key = keys[i]
            def(target, key, src[key])
          }
        }
        /**
         * Attempt to create an observer instance for a value,
         * returns the new observer if successfully observed,
         * or the existing observer if the value already has one.
         */

        function observe(value, asRootData) {
          if (!isObject(value) || value instanceof VNode) {
            return
          }

          var ob

          if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
            ob = value.__ob__
          } else if (
            shouldObserve &&
            !isServerRendering() &&
            (Array.isArray(value) || isPlainObject(value)) &&
            Object.isExtensible(value) &&
            !value._isVue
          ) {
            ob = new Observer(value)
          }

          if (asRootData && ob) {
            ob.vmCount++
          }

          return ob
        }
        /**
         * Define a reactive property on an Object.
         */

        function defineReactive$$1(obj, key, val, customSetter, shallow) {
          var dep = new Dep()
          var property = Object.getOwnPropertyDescriptor(obj, key)

          if (property && property.configurable === false) {
            return
          } // cater for pre-defined getter/setters

          var getter = property && property.get
          var setter = property && property.set

          if ((!getter || setter) && arguments.length === 2) {
            val = obj[key]
          }

          var childOb = !shallow && observe(val)
          Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get: function reactiveGetter() {
              var value = getter ? getter.call(obj) : val

              if (Dep.target) {
                dep.depend()

                if (childOb) {
                  childOb.dep.depend()

                  if (Array.isArray(value)) {
                    dependArray(value)
                  }
                }
              }

              return value
            },
            set: function reactiveSetter(newVal) {
              var value = getter ? getter.call(obj) : val
              /* eslint-disable no-self-compare */

              if (newVal === value || (newVal !== newVal && value !== value)) {
                return
              }
              /* eslint-enable no-self-compare */

              if ('development' !== 'production' && customSetter) {
                customSetter()
              } // #7981: for accessor properties without setter

              if (getter && !setter) {
                return
              }

              if (setter) {
                setter.call(obj, newVal)
              } else {
                val = newVal
              }

              childOb = !shallow && observe(newVal)
              dep.notify()
            }
          })
        }
        /**
         * Set a property on an object. Adds the new property and
         * triggers change notification if the property doesn't
         * already exist.
         */

        function set(target, key, val) {
          if (
            'development' !== 'production' &&
            (isUndef(target) || isPrimitive(target))
          ) {
            warn(
              'Cannot set reactive property on undefined, null, or primitive value: ' +
                target
            )
          }

          if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key)
            target.splice(key, 1, val)
            return val
          }

          if (key in target && !(key in Object.prototype)) {
            target[key] = val
            return val
          }

          var ob = target.__ob__

          if (target._isVue || (ob && ob.vmCount)) {
            'development' !== 'production' &&
              warn(
                'Avoid adding reactive properties to a Vue instance or its root $data ' +
                  'at runtime - declare it upfront in the data option.'
              )
            return val
          }

          if (!ob) {
            target[key] = val
            return val
          }

          defineReactive$$1(ob.value, key, val)
          ob.dep.notify()
          return val
        }
        /**
         * Delete a property and trigger change if necessary.
         */

        function del(target, key) {
          if (
            'development' !== 'production' &&
            (isUndef(target) || isPrimitive(target))
          ) {
            warn(
              'Cannot delete reactive property on undefined, null, or primitive value: ' +
                target
            )
          }

          if (Array.isArray(target) && isValidArrayIndex(key)) {
            target.splice(key, 1)
            return
          }

          var ob = target.__ob__

          if (target._isVue || (ob && ob.vmCount)) {
            'development' !== 'production' &&
              warn(
                'Avoid deleting properties on a Vue instance or its root $data ' +
                  '- just set it to null.'
              )
            return
          }

          if (!hasOwn(target, key)) {
            return
          }

          delete target[key]

          if (!ob) {
            return
          }

          ob.dep.notify()
        }
        /**
         * Collect dependencies on array elements when the array is touched, since
         * we cannot intercept array element access like property getters.
         */

        function dependArray(value) {
          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i]
            e && e.__ob__ && e.__ob__.dep.depend()

            if (Array.isArray(e)) {
              dependArray(e)
            }
          }
        }
        /*  */

        /**
         * Option overwriting strategies are functions that handle
         * how to merge a parent option value and a child option
         * value into the final value.
         */

        var strats = config.optionMergeStrategies
        /**
         * Options with restrictions
         */

        if ('development' !== 'production') {
          strats.el = strats.propsData = function(parent, child, vm, key) {
            if (!vm) {
              warn(
                'option "' +
                  key +
                  '" can only be used during instance ' +
                  'creation with the `new` keyword.'
              )
            }

            return defaultStrat(parent, child)
          }
        }
        /**
         * Helper that recursively merges two data objects together.
         */

        function mergeData(to, from) {
          if (!from) {
            return to
          }

          var key, toVal, fromVal
          var keys = Object.keys(from)

          for (var i = 0; i < keys.length; i++) {
            key = keys[i]
            toVal = to[key]
            fromVal = from[key]

            if (!hasOwn(to, key)) {
              set(to, key, fromVal)
            } else if (
              toVal !== fromVal &&
              isPlainObject(toVal) &&
              isPlainObject(fromVal)
            ) {
              mergeData(toVal, fromVal)
            }
          }

          return to
        }
        /**
         * Data
         */

        function mergeDataOrFn(parentVal, childVal, vm) {
          if (!vm) {
            // in a Vue.extend merge, both should be functions
            if (!childVal) {
              return parentVal
            }

            if (!parentVal) {
              return childVal
            } // when parentVal & childVal are both present,
            // we need to return a function that returns the
            // merged result of both functions... no need to
            // check if parentVal is a function here because
            // it has to be a function to pass previous merges.

            return function mergedDataFn() {
              return mergeData(
                typeof childVal === 'function'
                  ? childVal.call(this, this)
                  : childVal,
                typeof parentVal === 'function'
                  ? parentVal.call(this, this)
                  : parentVal
              )
            }
          } else {
            return function mergedInstanceDataFn() {
              // instance merge
              var instanceData =
                typeof childVal === 'function'
                  ? childVal.call(vm, vm)
                  : childVal
              var defaultData =
                typeof parentVal === 'function'
                  ? parentVal.call(vm, vm)
                  : parentVal

              if (instanceData) {
                return mergeData(instanceData, defaultData)
              } else {
                return defaultData
              }
            }
          }
        }

        strats.data = function(parentVal, childVal, vm) {
          if (!vm) {
            if (childVal && typeof childVal !== 'function') {
              'development' !== 'production' &&
                warn(
                  'The "data" option should be a function ' +
                    'that returns a per-instance value in component ' +
                    'definitions.',
                  vm
                )
              return parentVal
            }

            return mergeDataOrFn(parentVal, childVal)
          }

          return mergeDataOrFn(parentVal, childVal, vm)
        }
        /**
         * Hooks and props are merged as arrays.
         */

        function mergeHook(parentVal, childVal) {
          return childVal
            ? parentVal
              ? parentVal.concat(childVal)
              : Array.isArray(childVal)
              ? childVal
              : [childVal]
            : parentVal
        }

        LIFECYCLE_HOOKS.forEach(function(hook) {
          strats[hook] = mergeHook
        })
        /**
         * Assets
         *
         * When a vm is present (instance creation), we need to do
         * a three-way merge between constructor options, instance
         * options and parent options.
         */

        function mergeAssets(parentVal, childVal, vm, key) {
          var res = Object.create(parentVal || null)

          if (childVal) {
            'development' !== 'production' &&
              assertObjectType(key, childVal, vm)
            return extend(res, childVal)
          } else {
            return res
          }
        }

        ASSET_TYPES.forEach(function(type) {
          strats[type + 's'] = mergeAssets
        })
        /**
         * Watchers.
         *
         * Watchers hashes should not overwrite one
         * another, so we merge them as arrays.
         */

        strats.watch = function(parentVal, childVal, vm, key) {
          // work around Firefox's Object.prototype.watch...
          if (parentVal === nativeWatch) {
            parentVal = undefined
          }

          if (childVal === nativeWatch) {
            childVal = undefined
          }
          /* istanbul ignore if */

          if (!childVal) {
            return Object.create(parentVal || null)
          }

          if ('development' !== 'production') {
            assertObjectType(key, childVal, vm)
          }

          if (!parentVal) {
            return childVal
          }

          var ret = {}
          extend(ret, parentVal)

          for (var key$1 in childVal) {
            var parent = ret[key$1]
            var child = childVal[key$1]

            if (parent && !Array.isArray(parent)) {
              parent = [parent]
            }

            ret[key$1] = parent
              ? parent.concat(child)
              : Array.isArray(child)
              ? child
              : [child]
          }

          return ret
        }
        /**
         * Other object hashes.
         */

        strats.props = strats.methods = strats.inject = strats.computed = function(
          parentVal,
          childVal,
          vm,
          key
        ) {
          if (childVal && 'development' !== 'production') {
            assertObjectType(key, childVal, vm)
          }

          if (!parentVal) {
            return childVal
          }

          var ret = Object.create(null)
          extend(ret, parentVal)

          if (childVal) {
            extend(ret, childVal)
          }

          return ret
        }

        strats.provide = mergeDataOrFn
        /**
         * Default strategy.
         */

        var defaultStrat = function(parentVal, childVal) {
          return childVal === undefined ? parentVal : childVal
        }
        /**
         * Validate component names
         */

        function checkComponents(options) {
          for (var key in options.components) {
            validateComponentName(key)
          }
        }

        function validateComponentName(name) {
          if (!/^[a-zA-Z][\w-]*$/.test(name)) {
            warn(
              'Invalid component name: "' +
                name +
                '". Component names ' +
                'can only contain alphanumeric characters and the hyphen, ' +
                'and must start with a letter.'
            )
          }

          if (isBuiltInTag(name) || config.isReservedTag(name)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
                'id: ' +
                name
            )
          }
        }
        /**
         * Ensure all props option syntax are normalized into the
         * Object-based format.
         */

        function normalizeProps(options, vm) {
          var props = options.props

          if (!props) {
            return
          }

          var res = {}
          var i, val, name

          if (Array.isArray(props)) {
            i = props.length

            while (i--) {
              val = props[i]

              if (typeof val === 'string') {
                name = camelize(val)
                res[name] = {
                  type: null
                }
              } else if ('development' !== 'production') {
                warn('props must be strings when using array syntax.')
              }
            }
          } else if (isPlainObject(props)) {
            for (var key in props) {
              val = props[key]
              name = camelize(key)
              res[name] = isPlainObject(val)
                ? val
                : {
                    type: val
                  }
            }
          } else if ('development' !== 'production') {
            warn(
              'Invalid value for option "props": expected an Array or an Object, ' +
                'but got ' +
                toRawType(props) +
                '.',
              vm
            )
          }

          options.props = res
        }
        /**
         * Normalize all injections into Object-based format
         */

        function normalizeInject(options, vm) {
          var inject = options.inject

          if (!inject) {
            return
          }

          var normalized = (options.inject = {})

          if (Array.isArray(inject)) {
            for (var i = 0; i < inject.length; i++) {
              normalized[inject[i]] = {
                from: inject[i]
              }
            }
          } else if (isPlainObject(inject)) {
            for (var key in inject) {
              var val = inject[key]
              normalized[key] = isPlainObject(val)
                ? extend(
                    {
                      from: key
                    },
                    val
                  )
                : {
                    from: val
                  }
            }
          } else if ('development' !== 'production') {
            warn(
              'Invalid value for option "inject": expected an Array or an Object, ' +
                'but got ' +
                toRawType(inject) +
                '.',
              vm
            )
          }
        }
        /**
         * Normalize raw function directives into object format.
         */

        function normalizeDirectives(options) {
          var dirs = options.directives

          if (dirs) {
            for (var key in dirs) {
              var def = dirs[key]

              if (typeof def === 'function') {
                dirs[key] = {
                  bind: def,
                  update: def
                }
              }
            }
          }
        }

        function assertObjectType(name, value, vm) {
          if (!isPlainObject(value)) {
            warn(
              'Invalid value for option "' +
                name +
                '": expected an Object, ' +
                'but got ' +
                toRawType(value) +
                '.',
              vm
            )
          }
        }
        /**
         * Merge two option objects into a new one.
         * Core utility used in both instantiation and inheritance.
         */

        function mergeOptions(parent, child, vm) {
          if ('development' !== 'production') {
            checkComponents(child)
          }

          if (typeof child === 'function') {
            child = child.options
          }

          normalizeProps(child, vm)
          normalizeInject(child, vm)
          normalizeDirectives(child) // Apply extends and mixins on the child options,
          // but only if it is a raw options object that isn't
          // the result of another mergeOptions call.
          // Only merged options has the _base property.

          if (!child._base) {
            if (child.extends) {
              parent = mergeOptions(parent, child.extends, vm)
            }

            if (child.mixins) {
              for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm)
              }
            }
          }

          var options = {}
          var key

          for (key in parent) {
            mergeField(key)
          }

          for (key in child) {
            if (!hasOwn(parent, key)) {
              mergeField(key)
            }
          }

          function mergeField(key) {
            var strat = strats[key] || defaultStrat
            options[key] = strat(parent[key], child[key], vm, key)
          }

          return options
        }
        /**
         * Resolve an asset.
         * This function is used because child instances need access
         * to assets defined in its ancestor chain.
         */

        function resolveAsset(options, type, id, warnMissing) {
          /* istanbul ignore if */
          if (typeof id !== 'string') {
            return
          }

          var assets = options[type] // check local registration variations first

          if (hasOwn(assets, id)) {
            return assets[id]
          }

          var camelizedId = camelize(id)

          if (hasOwn(assets, camelizedId)) {
            return assets[camelizedId]
          }

          var PascalCaseId = capitalize(camelizedId)

          if (hasOwn(assets, PascalCaseId)) {
            return assets[PascalCaseId]
          } // fallback to prototype chain

          var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]

          if ('development' !== 'production' && warnMissing && !res) {
            warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options)
          }

          return res
        }
        /*  */

        function validateProp(key, propOptions, propsData, vm) {
          var prop = propOptions[key]
          var absent = !hasOwn(propsData, key)
          var value = propsData[key] // boolean casting

          var booleanIndex = getTypeIndex(Boolean, prop.type)

          if (booleanIndex > -1) {
            if (absent && !hasOwn(prop, 'default')) {
              value = false
            } else if (value === '' || value === hyphenate(key)) {
              // only cast empty string / same name to boolean if
              // boolean has higher priority
              var stringIndex = getTypeIndex(String, prop.type)

              if (stringIndex < 0 || booleanIndex < stringIndex) {
                value = true
              }
            }
          } // check default value

          if (value === undefined) {
            value = getPropDefaultValue(vm, prop, key) // since the default value is a fresh copy,
            // make sure to observe it.

            var prevShouldObserve = shouldObserve
            toggleObserving(true)
            observe(value)
            toggleObserving(prevShouldObserve)
          }

          if (
            'development' !== 'production' && // skip validation for weex recycle-list child component props
            !false
          ) {
            assertProp(prop, key, value, vm, absent)
          }

          return value
        }
        /**
         * Get the default value of a prop.
         */

        function getPropDefaultValue(vm, prop, key) {
          // no default, return undefined
          if (!hasOwn(prop, 'default')) {
            return undefined
          }

          var def = prop.default // warn against non-factory defaults for Object & Array

          if ('development' !== 'production' && isObject(def)) {
            warn(
              'Invalid default value for prop "' +
                key +
                '": ' +
                'Props with type Object/Array must use a factory function ' +
                'to return the default value.',
              vm
            )
          } // the raw prop value was also undefined from previous render,
          // return previous default value to avoid unnecessary watcher trigger

          if (
            vm &&
            vm.$options.propsData &&
            vm.$options.propsData[key] === undefined &&
            vm._props[key] !== undefined
          ) {
            return vm._props[key]
          } // call factory function for non-Function types
          // a value is Function if its prototype is function even across different execution context

          return typeof def === 'function' && getType(prop.type) !== 'Function'
            ? def.call(vm)
            : def
        }
        /**
         * Assert whether a prop is valid.
         */

        function assertProp(prop, name, value, vm, absent) {
          if (prop.required && absent) {
            warn('Missing required prop: "' + name + '"', vm)
            return
          }

          if (value == null && !prop.required) {
            return
          }

          var type = prop.type
          var valid = !type || type === true
          var expectedTypes = []

          if (type) {
            if (!Array.isArray(type)) {
              type = [type]
            }

            for (var i = 0; i < type.length && !valid; i++) {
              var assertedType = assertType(value, type[i])
              expectedTypes.push(assertedType.expectedType || '')
              valid = assertedType.valid
            }
          }

          if (!valid) {
            warn(getInvalidTypeMessage(name, value, expectedTypes), vm)
            return
          }

          var validator = prop.validator

          if (validator) {
            if (!validator(value)) {
              warn(
                'Invalid prop: custom validator check failed for prop "' +
                  name +
                  '".',
                vm
              )
            }
          }
        }

        var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/

        function assertType(value, type) {
          var valid
          var expectedType = getType(type)

          if (simpleCheckRE.test(expectedType)) {
            var t = typeof value
            valid = t === expectedType.toLowerCase() // for primitive wrapper objects

            if (!valid && t === 'object') {
              valid = value instanceof type
            }
          } else if (expectedType === 'Object') {
            valid = isPlainObject(value)
          } else if (expectedType === 'Array') {
            valid = Array.isArray(value)
          } else {
            valid = value instanceof type
          }

          return {
            valid: valid,
            expectedType: expectedType
          }
        }
        /**
         * Use function string name to check built-in types,
         * because a simple equality check will fail when running
         * across different vms / iframes.
         */

        function getType(fn) {
          var match = fn && fn.toString().match(/^\s*function (\w+)/)
          return match ? match[1] : ''
        }

        function isSameType(a, b) {
          return getType(a) === getType(b)
        }

        function getTypeIndex(type, expectedTypes) {
          if (!Array.isArray(expectedTypes)) {
            return isSameType(expectedTypes, type) ? 0 : -1
          }

          for (var i = 0, len = expectedTypes.length; i < len; i++) {
            if (isSameType(expectedTypes[i], type)) {
              return i
            }
          }

          return -1
        }

        function getInvalidTypeMessage(name, value, expectedTypes) {
          var message =
            'Invalid prop: type check failed for prop "' +
            name +
            '".' +
            ' Expected ' +
            expectedTypes.map(capitalize).join(', ')
          var expectedType = expectedTypes[0]
          var receivedType = toRawType(value)
          var expectedValue = styleValue(value, expectedType)
          var receivedValue = styleValue(value, receivedType) // check if we need to specify expected value

          if (
            expectedTypes.length === 1 &&
            isExplicable(expectedType) &&
            !isBoolean(expectedType, receivedType)
          ) {
            message += ' with value ' + expectedValue
          }

          message += ', got ' + receivedType + ' ' // check if we need to specify received value

          if (isExplicable(receivedType)) {
            message += 'with value ' + receivedValue + '.'
          }

          return message
        }

        function styleValue(value, type) {
          if (type === 'String') {
            return '"' + value + '"'
          } else if (type === 'Number') {
            return '' + Number(value)
          } else {
            return '' + value
          }
        }

        function isExplicable(value) {
          var explicitTypes = ['string', 'number', 'boolean']
          return explicitTypes.some(function(elem) {
            return value.toLowerCase() === elem
          })
        }

        function isBoolean() {
          var args = [],
            len = arguments.length

          while (len--) args[len] = arguments[len]

          return args.some(function(elem) {
            return elem.toLowerCase() === 'boolean'
          })
        }
        /*  */

        function handleError(err, vm, info) {
          if (vm) {
            var cur = vm

            while ((cur = cur.$parent)) {
              var hooks = cur.$options.errorCaptured

              if (hooks) {
                for (var i = 0; i < hooks.length; i++) {
                  try {
                    var capture = hooks[i].call(cur, err, vm, info) === false

                    if (capture) {
                      return
                    }
                  } catch (e) {
                    globalHandleError(e, cur, 'errorCaptured hook')
                  }
                }
              }
            }
          }

          globalHandleError(err, vm, info)
        }

        function globalHandleError(err, vm, info) {
          if (config.errorHandler) {
            try {
              return config.errorHandler.call(null, err, vm, info)
            } catch (e) {
              logError(e, null, 'config.errorHandler')
            }
          }

          logError(err, vm, info)
        }

        function logError(err, vm, info) {
          if ('development' !== 'production') {
            warn('Error in ' + info + ': "' + err.toString() + '"', vm)
          }
          /* istanbul ignore else */

          if ((inBrowser || inWeex) && typeof console !== 'undefined') {
            console.error(err)
          } else {
            throw err
          }
        }
        /*  */

        var callbacks = []
        var pending = false

        function flushCallbacks() {
          pending = false
          var copies = callbacks.slice(0)
          callbacks.length = 0

          for (var i = 0; i < copies.length; i++) {
            copies[i]()
          }
        } // Here we have async deferring wrappers using both microtasks and (macro) tasks.
        // In < 2.4 we used microtasks everywhere, but there are some scenarios where
        // microtasks have too high a priority and fire in between supposedly
        // sequential events (e.g. #4521, #6690) or even between bubbling of the same
        // event (#6566). However, using (macro) tasks everywhere also has subtle problems
        // when state is changed right before repaint (e.g. #6813, out-in transitions).
        // Here we use microtask by default, but expose a way to force (macro) task when
        // needed (e.g. in event handlers attached by v-on).

        var microTimerFunc
        var macroTimerFunc
        var useMacroTask = false // Determine (macro) task defer implementation.
        // Technically setImmediate should be the ideal choice, but it's only available
        // in IE. The only polyfill that consistently queues the callback after all DOM
        // events triggered in the same loop is by using MessageChannel.

        /* istanbul ignore if */

        if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
          macroTimerFunc = function() {
            setImmediate(flushCallbacks)
          }
        } else if (
          typeof MessageChannel !== 'undefined' &&
          (isNative(MessageChannel) || // PhantomJS
            MessageChannel.toString() === '[object MessageChannelConstructor]')
        ) {
          var channel = new MessageChannel()
          var port = channel.port2
          channel.port1.onmessage = flushCallbacks

          macroTimerFunc = function() {
            port.postMessage(1)
          }
        } else {
          /* istanbul ignore next */
          macroTimerFunc = function() {
            setTimeout(flushCallbacks, 0)
          }
        } // Determine microtask defer implementation.

        /* istanbul ignore next, $flow-disable-line */

        if (typeof Promise !== 'undefined' && isNative(Promise)) {
          var p = Promise.resolve()

          microTimerFunc = function() {
            p.then(flushCallbacks) // in problematic UIWebViews, Promise.then doesn't completely break, but
            // it can get stuck in a weird state where callbacks are pushed into the
            // microtask queue but the queue isn't being flushed, until the browser
            // needs to do some other work, e.g. handle a timer. Therefore we can
            // "force" the microtask queue to be flushed by adding an empty timer.

            if (isIOS) {
              setTimeout(noop)
            }
          }
        } else {
          // fallback to macro
          microTimerFunc = macroTimerFunc
        }
        /**
         * Wrap a function so that if any code inside triggers state change,
         * the changes are queued using a (macro) task instead of a microtask.
         */

        function withMacroTask(fn) {
          return (
            fn._withTask ||
            (fn._withTask = function() {
              useMacroTask = true

              try {
                return fn.apply(null, arguments)
              } finally {
                useMacroTask = false
              }
            })
          )
        }

        function nextTick(cb, ctx) {
          var _resolve

          callbacks.push(function() {
            if (cb) {
              try {
                cb.call(ctx)
              } catch (e) {
                handleError(e, ctx, 'nextTick')
              }
            } else if (_resolve) {
              _resolve(ctx)
            }
          })

          if (!pending) {
            pending = true

            if (useMacroTask) {
              macroTimerFunc()
            } else {
              microTimerFunc()
            }
          } // $flow-disable-line

          if (!cb && typeof Promise !== 'undefined') {
            return new Promise(function(resolve) {
              _resolve = resolve
            })
          }
        }
        /*  */

        /* not type checking this file because flow doesn't play well with Proxy */

        var initProxy

        if ('development' !== 'production') {
          var allowedGlobals = makeMap(
            'Infinity,undefined,NaN,isFinite,isNaN,' +
              'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
              'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
              'require' // for Webpack/Browserify
          )

          var warnNonPresent = function(target, key) {
            warn(
              'Property or method "' +
                key +
                '" is not defined on the instance but ' +
                'referenced during render. Make sure that this property is reactive, ' +
                'either in the data option, or for class-based components, by ' +
                'initializing the property. ' +
                'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
              target
            )
          }

          var warnReservedPrefix = function(target, key) {
            warn(
              'Property "' +
                key +
                '" must be accessed with "$data.' +
                key +
                '" because ' +
                'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
                'prevent conflicts with Vue internals' +
                'See: https://vuejs.org/v2/api/#data',
              target
            )
          }

          var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy)

          if (hasProxy) {
            var isBuiltInModifier = makeMap(
              'stop,prevent,self,ctrl,shift,alt,meta,exact'
            )
            config.keyCodes = new Proxy(config.keyCodes, {
              set: function set(target, key, value) {
                if (isBuiltInModifier(key)) {
                  warn(
                    'Avoid overwriting built-in modifier in config.keyCodes: .' +
                      key
                  )
                  return false
                } else {
                  target[key] = value
                  return true
                }
              }
            })
          }

          var hasHandler = {
            has: function has(target, key) {
              var has = key in target
              var isAllowed =
                allowedGlobals(key) ||
                (typeof key === 'string' &&
                  key.charAt(0) === '_' &&
                  !(key in target.$data))

              if (!has && !isAllowed) {
                if (key in target.$data) {
                  warnReservedPrefix(target, key)
                } else {
                  warnNonPresent(target, key)
                }
              }

              return has || !isAllowed
            }
          }
          var getHandler = {
            get: function get(target, key) {
              if (typeof key === 'string' && !(key in target)) {
                if (key in target.$data) {
                  warnReservedPrefix(target, key)
                } else {
                  warnNonPresent(target, key)
                }
              }

              return target[key]
            }
          }

          initProxy = function initProxy(vm) {
            if (hasProxy) {
              // determine which proxy handler to use
              var options = vm.$options
              var handlers =
                options.render && options.render._withStripped
                  ? getHandler
                  : hasHandler
              vm._renderProxy = new Proxy(vm, handlers)
            } else {
              vm._renderProxy = vm
            }
          }
        }
        /*  */

        var seenObjects = new _Set()
        /**
         * Recursively traverse an object to evoke all converted
         * getters, so that every nested property inside the object
         * is collected as a "deep" dependency.
         */

        function traverse(val) {
          _traverse(val, seenObjects)

          seenObjects.clear()
        }

        function _traverse(val, seen) {
          var i, keys
          var isA = Array.isArray(val)

          if (
            (!isA && !isObject(val)) ||
            Object.isFrozen(val) ||
            val instanceof VNode
          ) {
            return
          }

          if (val.__ob__) {
            var depId = val.__ob__.dep.id

            if (seen.has(depId)) {
              return
            }

            seen.add(depId)
          }

          if (isA) {
            i = val.length

            while (i--) {
              _traverse(val[i], seen)
            }
          } else {
            keys = Object.keys(val)
            i = keys.length

            while (i--) {
              _traverse(val[keys[i]], seen)
            }
          }
        }

        var mark
        var measure

        if ('development' !== 'production') {
          var perf = inBrowser && window.performance
          /* istanbul ignore if */

          if (
            perf &&
            perf.mark &&
            perf.measure &&
            perf.clearMarks &&
            perf.clearMeasures
          ) {
            mark = function(tag) {
              return perf.mark(tag)
            }

            measure = function(name, startTag, endTag) {
              perf.measure(name, startTag, endTag)
              perf.clearMarks(startTag)
              perf.clearMarks(endTag)
              perf.clearMeasures(name)
            }
          }
        }
        /*  */

        var normalizeEvent = cached(function(name) {
          var passive = name.charAt(0) === '&'
          name = passive ? name.slice(1) : name
          var once$$1 = name.charAt(0) === '~' // Prefixed last, checked first

          name = once$$1 ? name.slice(1) : name
          var capture = name.charAt(0) === '!'
          name = capture ? name.slice(1) : name
          return {
            name: name,
            once: once$$1,
            capture: capture,
            passive: passive
          }
        })

        function createFnInvoker(fns) {
          function invoker() {
            var arguments$1 = arguments
            var fns = invoker.fns

            if (Array.isArray(fns)) {
              var cloned = fns.slice()

              for (var i = 0; i < cloned.length; i++) {
                cloned[i].apply(null, arguments$1)
              }
            } else {
              // return handler return value for single handlers
              return fns.apply(null, arguments)
            }
          }

          invoker.fns = fns
          return invoker
        }

        function updateListeners(
          on,
          oldOn,
          add,
          remove$$1,
          createOnceHandler,
          vm
        ) {
          var name, def$$1, cur, old, event

          for (name in on) {
            def$$1 = cur = on[name]
            old = oldOn[name]
            event = normalizeEvent(name)

            if (isUndef(cur)) {
              'development' !== 'production' &&
                warn(
                  'Invalid handler for event "' +
                    event.name +
                    '": got ' +
                    String(cur),
                  vm
                )
            } else if (isUndef(old)) {
              if (isUndef(cur.fns)) {
                cur = on[name] = createFnInvoker(cur)
              }

              if (isTrue(event.once)) {
                cur = on[name] = createOnceHandler(
                  event.name,
                  cur,
                  event.capture
                )
              }

              add(event.name, cur, event.capture, event.passive, event.params)
            } else if (cur !== old) {
              old.fns = cur
              on[name] = old
            }
          }

          for (name in oldOn) {
            if (isUndef(on[name])) {
              event = normalizeEvent(name)
              remove$$1(event.name, oldOn[name], event.capture)
            }
          }
        }
        /*  */

        function mergeVNodeHook(def, hookKey, hook) {
          if (def instanceof VNode) {
            def = def.data.hook || (def.data.hook = {})
          }

          var invoker
          var oldHook = def[hookKey]

          function wrappedHook() {
            hook.apply(this, arguments) // important: remove merged hook to ensure it's called only once
            // and prevent memory leak

            remove(invoker.fns, wrappedHook)
          }

          if (isUndef(oldHook)) {
            // no existing hook
            invoker = createFnInvoker([wrappedHook])
          } else {
            /* istanbul ignore if */
            if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
              // already a merged invoker
              invoker = oldHook
              invoker.fns.push(wrappedHook)
            } else {
              // existing plain hook
              invoker = createFnInvoker([oldHook, wrappedHook])
            }
          }

          invoker.merged = true
          def[hookKey] = invoker
        }
        /*  */

        function extractPropsFromVNodeData(data, Ctor, tag) {
          // we are only extracting raw values here.
          // validation and default values are handled in the child
          // component itself.
          var propOptions = Ctor.options.props

          if (isUndef(propOptions)) {
            return
          }

          var res = {}
          var attrs = data.attrs
          var props = data.props

          if (isDef(attrs) || isDef(props)) {
            for (var key in propOptions) {
              var altKey = hyphenate(key)

              if ('development' !== 'production') {
                var keyInLowerCase = key.toLowerCase()

                if (
                  key !== keyInLowerCase &&
                  attrs &&
                  hasOwn(attrs, keyInLowerCase)
                ) {
                  tip(
                    'Prop "' +
                      keyInLowerCase +
                      '" is passed to component ' +
                      formatComponentName(tag || Ctor) +
                      ', but the declared prop name is' +
                      ' "' +
                      key +
                      '". ' +
                      'Note that HTML attributes are case-insensitive and camelCased ' +
                      'props need to use their kebab-case equivalents when using in-DOM ' +
                      'templates. You should probably use "' +
                      altKey +
                      '" instead of "' +
                      key +
                      '".'
                  )
                }
              }

              checkProp(res, props, key, altKey, true) ||
                checkProp(res, attrs, key, altKey, false)
            }
          }

          return res
        }

        function checkProp(res, hash, key, altKey, preserve) {
          if (isDef(hash)) {
            if (hasOwn(hash, key)) {
              res[key] = hash[key]

              if (!preserve) {
                delete hash[key]
              }

              return true
            } else if (hasOwn(hash, altKey)) {
              res[key] = hash[altKey]

              if (!preserve) {
                delete hash[altKey]
              }

              return true
            }
          }

          return false
        }
        /*  */
        // The template compiler attempts to minimize the need for normalization by
        // statically analyzing the template at compile time.
        //
        // For plain HTML markup, normalization can be completely skipped because the
        // generated render function is guaranteed to return Array<VNode>. There are
        // two cases where extra normalization is needed:
        // 1. When the children contains components - because a functional component
        // may return an Array instead of a single root. In this case, just a simple
        // normalization is needed - if any child is an Array, we flatten the whole
        // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
        // because functional components already normalize their own children.

        function simpleNormalizeChildren(children) {
          for (var i = 0; i < children.length; i++) {
            if (Array.isArray(children[i])) {
              return Array.prototype.concat.apply([], children)
            }
          }

          return children
        } // 2. When the children contains constructs that always generated nested Arrays,
        // e.g. <template>, <slot>, v-for, or when the children is provided by user
        // with hand-written render functions / JSX. In such cases a full normalization
        // is needed to cater to all possible types of children values.

        function normalizeChildren(children) {
          return isPrimitive(children)
            ? [createTextVNode(children)]
            : Array.isArray(children)
            ? normalizeArrayChildren(children)
            : undefined
        }

        function isTextNode(node) {
          return isDef(node) && isDef(node.text) && isFalse(node.isComment)
        }

        function normalizeArrayChildren(children, nestedIndex) {
          var res = []
          var i, c, lastIndex, last

          for (i = 0; i < children.length; i++) {
            c = children[i]

            if (isUndef(c) || typeof c === 'boolean') {
              continue
            }

            lastIndex = res.length - 1
            last = res[lastIndex] //  nested

            if (Array.isArray(c)) {
              if (c.length > 0) {
                c = normalizeArrayChildren(c, (nestedIndex || '') + '_' + i) // merge adjacent text nodes

                if (isTextNode(c[0]) && isTextNode(last)) {
                  res[lastIndex] = createTextVNode(last.text + c[0].text)
                  c.shift()
                }

                res.push.apply(res, c)
              }
            } else if (isPrimitive(c)) {
              if (isTextNode(last)) {
                // merge adjacent text nodes
                // this is necessary for SSR hydration because text nodes are
                // essentially merged when rendered to HTML strings
                res[lastIndex] = createTextVNode(last.text + c)
              } else if (c !== '') {
                // convert primitive to vnode
                res.push(createTextVNode(c))
              }
            } else {
              if (isTextNode(c) && isTextNode(last)) {
                // merge adjacent text nodes
                res[lastIndex] = createTextVNode(last.text + c.text)
              } else {
                // default key for nested array children (likely generated by v-for)
                if (
                  isTrue(children._isVList) &&
                  isDef(c.tag) &&
                  isUndef(c.key) &&
                  isDef(nestedIndex)
                ) {
                  c.key = '__vlist' + nestedIndex + '_' + i + '__'
                }

                res.push(c)
              }
            }
          }

          return res
        }
        /*  */

        function ensureCtor(comp, base) {
          if (
            comp.__esModule ||
            (hasSymbol && comp[Symbol.toStringTag] === 'Module')
          ) {
            comp = comp.default
          }

          return isObject(comp) ? base.extend(comp) : comp
        }

        function createAsyncPlaceholder(factory, data, context, children, tag) {
          var node = createEmptyVNode()
          node.asyncFactory = factory
          node.asyncMeta = {
            data: data,
            context: context,
            children: children,
            tag: tag
          }
          return node
        }

        function resolveAsyncComponent(factory, baseCtor, context) {
          if (isTrue(factory.error) && isDef(factory.errorComp)) {
            return factory.errorComp
          }

          if (isDef(factory.resolved)) {
            return factory.resolved
          }

          if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
            return factory.loadingComp
          }

          if (isDef(factory.contexts)) {
            // already pending
            factory.contexts.push(context)
          } else {
            var contexts = (factory.contexts = [context])
            var sync = true

            var forceRender = function(renderCompleted) {
              for (var i = 0, l = contexts.length; i < l; i++) {
                contexts[i].$forceUpdate()
              }

              if (renderCompleted) {
                contexts.length = 0
              }
            }

            var resolve = once(function(res) {
              // cache resolved
              factory.resolved = ensureCtor(res, baseCtor) // invoke callbacks only if this is not a synchronous resolve
              // (async resolves are shimmed as synchronous during SSR)

              if (!sync) {
                forceRender(true)
              }
            })
            var reject = once(function(reason) {
              'development' !== 'production' &&
                warn(
                  'Failed to resolve async component: ' +
                    String(factory) +
                    (reason ? '\nReason: ' + reason : '')
                )

              if (isDef(factory.errorComp)) {
                factory.error = true
                forceRender(true)
              }
            })
            var res = factory(resolve, reject)

            if (isObject(res)) {
              if (typeof res.then === 'function') {
                // () => Promise
                if (isUndef(factory.resolved)) {
                  res.then(resolve, reject)
                }
              } else if (
                isDef(res.component) &&
                typeof res.component.then === 'function'
              ) {
                res.component.then(resolve, reject)

                if (isDef(res.error)) {
                  factory.errorComp = ensureCtor(res.error, baseCtor)
                }

                if (isDef(res.loading)) {
                  factory.loadingComp = ensureCtor(res.loading, baseCtor)

                  if (res.delay === 0) {
                    factory.loading = true
                  } else {
                    setTimeout(function() {
                      if (isUndef(factory.resolved) && isUndef(factory.error)) {
                        factory.loading = true
                        forceRender(false)
                      }
                    }, res.delay || 200)
                  }
                }

                if (isDef(res.timeout)) {
                  setTimeout(function() {
                    if (isUndef(factory.resolved)) {
                      reject(
                        'development' !== 'production'
                          ? 'timeout (' + res.timeout + 'ms)'
                          : null
                      )
                    }
                  }, res.timeout)
                }
              }
            }

            sync = false // return in case resolved synchronously

            return factory.loading ? factory.loadingComp : factory.resolved
          }
        }
        /*  */

        function isAsyncPlaceholder(node) {
          return node.isComment && node.asyncFactory
        }
        /*  */

        function getFirstComponentChild(children) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              var c = children[i]

              if (
                isDef(c) &&
                (isDef(c.componentOptions) || isAsyncPlaceholder(c))
              ) {
                return c
              }
            }
          }
        }
        /*  */

        /*  */

        function initEvents(vm) {
          vm._events = Object.create(null)
          vm._hasHookEvent = false // init parent attached events

          var listeners = vm.$options._parentListeners

          if (listeners) {
            updateComponentListeners(vm, listeners)
          }
        }

        var target

        function add(event, fn) {
          target.$on(event, fn)
        }

        function remove$1(event, fn) {
          target.$off(event, fn)
        }

        function createOnceHandler(event, fn) {
          var _target = target
          return function onceHandler() {
            var res = fn.apply(null, arguments)

            if (res !== null) {
              _target.$off(event, onceHandler)
            }
          }
        }

        function updateComponentListeners(vm, listeners, oldListeners) {
          target = vm
          updateListeners(
            listeners,
            oldListeners || {},
            add,
            remove$1,
            createOnceHandler,
            vm
          )
          target = undefined
        }

        function eventsMixin(Vue) {
          var hookRE = /^hook:/

          Vue.prototype.$on = function(event, fn) {
            var vm = this

            if (Array.isArray(event)) {
              for (var i = 0, l = event.length; i < l; i++) {
                vm.$on(event[i], fn)
              }
            } else {
              ;(vm._events[event] || (vm._events[event] = [])).push(fn) // optimize hook:event cost by using a boolean flag marked at registration
              // instead of a hash lookup

              if (hookRE.test(event)) {
                vm._hasHookEvent = true
              }
            }

            return vm
          }

          Vue.prototype.$once = function(event, fn) {
            var vm = this

            function on() {
              vm.$off(event, on)
              fn.apply(vm, arguments)
            }

            on.fn = fn
            vm.$on(event, on)
            return vm
          }

          Vue.prototype.$off = function(event, fn) {
            var vm = this // all

            if (!arguments.length) {
              vm._events = Object.create(null)
              return vm
            } // array of events

            if (Array.isArray(event)) {
              for (var i = 0, l = event.length; i < l; i++) {
                vm.$off(event[i], fn)
              }

              return vm
            } // specific event

            var cbs = vm._events[event]

            if (!cbs) {
              return vm
            }

            if (!fn) {
              vm._events[event] = null
              return vm
            }

            if (fn) {
              // specific handler
              var cb
              var i$1 = cbs.length

              while (i$1--) {
                cb = cbs[i$1]

                if (cb === fn || cb.fn === fn) {
                  cbs.splice(i$1, 1)
                  break
                }
              }
            }

            return vm
          }

          Vue.prototype.$emit = function(event) {
            var vm = this

            if ('development' !== 'production') {
              var lowerCaseEvent = event.toLowerCase()

              if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                tip(
                  'Event "' +
                    lowerCaseEvent +
                    '" is emitted in component ' +
                    formatComponentName(vm) +
                    ' but the handler is registered for "' +
                    event +
                    '". ' +
                    'Note that HTML attributes are case-insensitive and you cannot use ' +
                    'v-on to listen to camelCase events when using in-DOM templates. ' +
                    'You should probably use "' +
                    hyphenate(event) +
                    '" instead of "' +
                    event +
                    '".'
                )
              }
            }

            var cbs = vm._events[event]

            if (cbs) {
              cbs = cbs.length > 1 ? toArray(cbs) : cbs
              var args = toArray(arguments, 1)

              for (var i = 0, l = cbs.length; i < l; i++) {
                try {
                  cbs[i].apply(vm, args)
                } catch (e) {
                  handleError(e, vm, 'event handler for "' + event + '"')
                }
              }
            }

            return vm
          }
        }
        /*  */

        /**
         * Runtime helper for resolving raw children VNodes into a slot object.
         */

        function resolveSlots(children, context) {
          var slots = {}

          if (!children) {
            return slots
          }

          for (var i = 0, l = children.length; i < l; i++) {
            var child = children[i]
            var data = child.data // remove slot attribute if the node is resolved as a Vue slot node

            if (data && data.attrs && data.attrs.slot) {
              delete data.attrs.slot
            } // named slots should only be respected if the vnode was rendered in the
            // same context.

            if (
              (child.context === context || child.fnContext === context) &&
              data &&
              data.slot != null
            ) {
              var name = data.slot
              var slot = slots[name] || (slots[name] = [])

              if (child.tag === 'template') {
                slot.push.apply(slot, child.children || [])
              } else {
                slot.push(child)
              }
            } else {
              ;(slots.default || (slots.default = [])).push(child)
            }
          } // ignore slots that contains only whitespace

          for (var name$1 in slots) {
            if (slots[name$1].every(isWhitespace)) {
              delete slots[name$1]
            }
          }

          return slots
        }

        function isWhitespace(node) {
          return (node.isComment && !node.asyncFactory) || node.text === ' '
        }

        function resolveScopedSlots(
          fns, // see flow/vnode
          res
        ) {
          res = res || {}

          for (var i = 0; i < fns.length; i++) {
            if (Array.isArray(fns[i])) {
              resolveScopedSlots(fns[i], res)
            } else {
              res[fns[i].key] = fns[i].fn
            }
          }

          return res
        }
        /*  */

        var activeInstance = null
        var isUpdatingChildComponent = false

        function setActiveInstance(vm) {
          var prevActiveInstance = activeInstance
          activeInstance = vm
          return function() {
            activeInstance = prevActiveInstance
          }
        }

        function initLifecycle(vm) {
          var options = vm.$options // locate first non-abstract parent

          var parent = options.parent

          if (parent && !options.abstract) {
            while (parent.$options.abstract && parent.$parent) {
              parent = parent.$parent
            }

            parent.$children.push(vm)
          }

          vm.$parent = parent
          vm.$root = parent ? parent.$root : vm
          vm.$children = []
          vm.$refs = {}
          vm._watcher = null
          vm._inactive = null
          vm._directInactive = false
          vm._isMounted = false
          vm._isDestroyed = false
          vm._isBeingDestroyed = false
        }

        function lifecycleMixin(Vue) {
          Vue.prototype._update = function(vnode, hydrating) {
            var vm = this
            var prevEl = vm.$el
            var prevVnode = vm._vnode
            var restoreActiveInstance = setActiveInstance(vm)
            vm._vnode = vnode // Vue.prototype.__patch__ is injected in entry points
            // based on the rendering backend used.

            if (!prevVnode) {
              // initial render
              vm.$el = vm.__patch__(
                vm.$el,
                vnode,
                hydrating,
                false
                /* removeOnly */
              )
            } else {
              // updates
              vm.$el = vm.__patch__(prevVnode, vnode)
            }

            restoreActiveInstance() // update __vue__ reference

            if (prevEl) {
              prevEl.__vue__ = null
            }

            if (vm.$el) {
              vm.$el.__vue__ = vm
            } // if parent is an HOC, update its $el as well

            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
              vm.$parent.$el = vm.$el
            } // updated hook is called by the scheduler to ensure that children are
            // updated in a parent's updated hook.
          }

          Vue.prototype.$forceUpdate = function() {
            var vm = this

            if (vm._watcher) {
              vm._watcher.update()
            }
          }

          Vue.prototype.$destroy = function() {
            var vm = this

            if (vm._isBeingDestroyed) {
              return
            }

            callHook(vm, 'beforeDestroy')
            vm._isBeingDestroyed = true // remove self from parent

            var parent = vm.$parent

            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
              remove(parent.$children, vm)
            } // teardown watchers

            if (vm._watcher) {
              vm._watcher.teardown()
            }

            var i = vm._watchers.length

            while (i--) {
              vm._watchers[i].teardown()
            } // remove reference from data ob
            // frozen object may not have observer.

            if (vm._data.__ob__) {
              vm._data.__ob__.vmCount--
            } // call the last hook...

            vm._isDestroyed = true // invoke destroy hooks on current rendered tree

            vm.__patch__(vm._vnode, null) // fire destroyed hook

            callHook(vm, 'destroyed') // turn off all instance listeners.

            vm.$off() // remove __vue__ reference

            if (vm.$el) {
              vm.$el.__vue__ = null
            } // release circular reference (#6759)

            if (vm.$vnode) {
              vm.$vnode.parent = null
            }
          }
        }

        function mountComponent(vm, el, hydrating) {
          vm.$el = el

          if (!vm.$options.render) {
            vm.$options.render = createEmptyVNode

            if ('development' !== 'production') {
              /* istanbul ignore if */
              if (
                (vm.$options.template &&
                  vm.$options.template.charAt(0) !== '#') ||
                vm.$options.el ||
                el
              ) {
                warn(
                  'You are using the runtime-only build of Vue where the template ' +
                    'compiler is not available. Either pre-compile the templates into ' +
                    'render functions, or use the compiler-included build.',
                  vm
                )
              } else {
                warn(
                  'Failed to mount component: template or render function not defined.',
                  vm
                )
              }
            }
          }

          callHook(vm, 'beforeMount')
          var updateComponent
          /* istanbul ignore if */

          if ('development' !== 'production' && config.performance && mark) {
            updateComponent = function() {
              var name = vm._name
              var id = vm._uid
              var startTag = 'vue-perf-start:' + id
              var endTag = 'vue-perf-end:' + id
              mark(startTag)

              var vnode = vm._render()

              mark(endTag)
              measure('vue ' + name + ' render', startTag, endTag)
              mark(startTag)

              vm._update(vnode, hydrating)

              mark(endTag)
              measure('vue ' + name + ' patch', startTag, endTag)
            }
          } else {
            updateComponent = function() {
              vm._update(vm._render(), hydrating)
            }
          } // we set this to vm._watcher inside the watcher's constructor
          // since the watcher's initial patch may call $forceUpdate (e.g. inside child
          // component's mounted hook), which relies on vm._watcher being already defined

          new Watcher(
            vm,
            updateComponent,
            noop,
            {
              before: function before() {
                if (vm._isMounted && !vm._isDestroyed) {
                  callHook(vm, 'beforeUpdate')
                }
              }
            },
            true
            /* isRenderWatcher */
          )
          hydrating = false // manually mounted instance, call mounted on self
          // mounted is called for render-created child components in its inserted hook

          if (vm.$vnode == null) {
            vm._isMounted = true
            callHook(vm, 'mounted')
          }

          return vm
        }

        function updateChildComponent(
          vm,
          propsData,
          listeners,
          parentVnode,
          renderChildren
        ) {
          if ('development' !== 'production') {
            isUpdatingChildComponent = true
          } // determine whether component has slot children
          // we need to do this before overwriting $options._renderChildren

          var hasChildren = !!(
            renderChildren || // has new static slots
            vm.$options._renderChildren || // has old static slots
            parentVnode.data.scopedSlots || // has new scoped slots
            vm.$scopedSlots !== emptyObject
          ) // has old scoped slots
          vm.$options._parentVnode = parentVnode
          vm.$vnode = parentVnode // update vm's placeholder node without re-render

          if (vm._vnode) {
            // update child tree's parent
            vm._vnode.parent = parentVnode
          }

          vm.$options._renderChildren = renderChildren // update $attrs and $listeners hash
          // these are also reactive so they may trigger child update if the child
          // used them during render

          vm.$attrs = parentVnode.data.attrs || emptyObject
          vm.$listeners = listeners || emptyObject // update props

          if (propsData && vm.$options.props) {
            toggleObserving(false)
            var props = vm._props
            var propKeys = vm.$options._propKeys || []

            for (var i = 0; i < propKeys.length; i++) {
              var key = propKeys[i]
              var propOptions = vm.$options.props // wtf flow?

              props[key] = validateProp(key, propOptions, propsData, vm)
            }

            toggleObserving(true) // keep a copy of raw propsData

            vm.$options.propsData = propsData
          } // update listeners

          listeners = listeners || emptyObject
          var oldListeners = vm.$options._parentListeners
          vm.$options._parentListeners = listeners
          updateComponentListeners(vm, listeners, oldListeners) // resolve slots + force update if has children

          if (hasChildren) {
            vm.$slots = resolveSlots(renderChildren, parentVnode.context)
            vm.$forceUpdate()
          }

          if ('development' !== 'production') {
            isUpdatingChildComponent = false
          }
        }

        function isInInactiveTree(vm) {
          while (vm && (vm = vm.$parent)) {
            if (vm._inactive) {
              return true
            }
          }

          return false
        }

        function activateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = false

            if (isInInactiveTree(vm)) {
              return
            }
          } else if (vm._directInactive) {
            return
          }

          if (vm._inactive || vm._inactive === null) {
            vm._inactive = false

            for (var i = 0; i < vm.$children.length; i++) {
              activateChildComponent(vm.$children[i])
            }

            callHook(vm, 'activated')
          }
        }

        function deactivateChildComponent(vm, direct) {
          if (direct) {
            vm._directInactive = true

            if (isInInactiveTree(vm)) {
              return
            }
          }

          if (!vm._inactive) {
            vm._inactive = true

            for (var i = 0; i < vm.$children.length; i++) {
              deactivateChildComponent(vm.$children[i])
            }

            callHook(vm, 'deactivated')
          }
        }

        function callHook(vm, hook) {
          // #7573 disable dep collection when invoking lifecycle hooks
          pushTarget()
          var handlers = vm.$options[hook]

          if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
              try {
                handlers[i].call(vm)
              } catch (e) {
                handleError(e, vm, hook + ' hook')
              }
            }
          }

          if (vm._hasHookEvent) {
            vm.$emit('hook:' + hook)
          }

          popTarget()
        }
        /*  */

        var MAX_UPDATE_COUNT = 100
        var queue = []
        var activatedChildren = []
        var has = {}
        var circular = {}
        var waiting = false
        var flushing = false
        var index = 0
        /**
         * Reset the scheduler's state.
         */

        function resetSchedulerState() {
          index = queue.length = activatedChildren.length = 0
          has = {}

          if ('development' !== 'production') {
            circular = {}
          }

          waiting = flushing = false
        }
        /**
         * Flush both queues and run the watchers.
         */

        function flushSchedulerQueue() {
          flushing = true
          var watcher, id // Sort queue before flush.
          // This ensures that:
          // 1. Components are updated from parent to child. (because parent is always
          //    created before the child)
          // 2. A component's user watchers are run before its render watcher (because
          //    user watchers are created before the render watcher)
          // 3. If a component is destroyed during a parent component's watcher run,
          //    its watchers can be skipped.

          queue.sort(function(a, b) {
            return a.id - b.id
          }) // do not cache length because more watchers might be pushed
          // as we run existing watchers

          for (index = 0; index < queue.length; index++) {
            watcher = queue[index]

            if (watcher.before) {
              watcher.before()
            }

            id = watcher.id
            has[id] = null
            watcher.run() // in dev build, check and stop circular updates.

            if ('development' !== 'production' && has[id] != null) {
              circular[id] = (circular[id] || 0) + 1

              if (circular[id] > MAX_UPDATE_COUNT) {
                warn(
                  'You may have an infinite update loop ' +
                    (watcher.user
                      ? 'in watcher with expression "' +
                        watcher.expression +
                        '"'
                      : 'in a component render function.'),
                  watcher.vm
                )
                break
              }
            }
          } // keep copies of post queues before resetting state

          var activatedQueue = activatedChildren.slice()
          var updatedQueue = queue.slice()
          resetSchedulerState() // call component updated and activated hooks

          callActivatedHooks(activatedQueue)
          callUpdatedHooks(updatedQueue) // devtool hook

          /* istanbul ignore if */

          if (devtools && config.devtools) {
            devtools.emit('flush')
          }
        }

        function callUpdatedHooks(queue) {
          var i = queue.length

          while (i--) {
            var watcher = queue[i]
            var vm = watcher.vm

            if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
              callHook(vm, 'updated')
            }
          }
        }
        /**
         * Queue a kept-alive component that was activated during patch.
         * The queue will be processed after the entire tree has been patched.
         */

        function queueActivatedComponent(vm) {
          // setting _inactive to false here so that a render function can
          // rely on checking whether it's in an inactive tree (e.g. router-view)
          vm._inactive = false
          activatedChildren.push(vm)
        }

        function callActivatedHooks(queue) {
          for (var i = 0; i < queue.length; i++) {
            queue[i]._inactive = true
            activateChildComponent(
              queue[i],
              true
              /* true */
            )
          }
        }
        /**
         * Push a watcher into the watcher queue.
         * Jobs with duplicate IDs will be skipped unless it's
         * pushed when the queue is being flushed.
         */

        function queueWatcher(watcher) {
          var id = watcher.id

          if (has[id] == null) {
            has[id] = true

            if (!flushing) {
              queue.push(watcher)
            } else {
              // if already flushing, splice the watcher based on its id
              // if already past its id, it will be run next immediately.
              var i = queue.length - 1

              while (i > index && queue[i].id > watcher.id) {
                i--
              }

              queue.splice(i + 1, 0, watcher)
            } // queue the flush

            if (!waiting) {
              waiting = true

              if ('development' !== 'production' && !config.async) {
                flushSchedulerQueue()
                return
              }

              nextTick(flushSchedulerQueue)
            }
          }
        }
        /*  */

        var uid$1 = 0
        /**
         * A watcher parses an expression, collects dependencies,
         * and fires callback when the expression value changes.
         * This is used for both the $watch() api and directives.
         */

        var Watcher = function Watcher(
          vm,
          expOrFn,
          cb,
          options,
          isRenderWatcher
        ) {
          this.vm = vm

          if (isRenderWatcher) {
            vm._watcher = this
          }

          vm._watchers.push(this) // options

          if (options) {
            this.deep = !!options.deep
            this.user = !!options.user
            this.lazy = !!options.lazy
            this.sync = !!options.sync
            this.before = options.before
          } else {
            this.deep = this.user = this.lazy = this.sync = false
          }

          this.cb = cb
          this.id = ++uid$1 // uid for batching

          this.active = true
          this.dirty = this.lazy // for lazy watchers

          this.deps = []
          this.newDeps = []
          this.depIds = new _Set()
          this.newDepIds = new _Set()
          this.expression =
            'development' !== 'production' ? expOrFn.toString() : '' // parse expression for getter

          if (typeof expOrFn === 'function') {
            this.getter = expOrFn
          } else {
            this.getter = parsePath(expOrFn)

            if (!this.getter) {
              this.getter = noop
              'development' !== 'production' &&
                warn(
                  'Failed watching path: "' +
                    expOrFn +
                    '" ' +
                    'Watcher only accepts simple dot-delimited paths. ' +
                    'For full control, use a function instead.',
                  vm
                )
            }
          }

          this.value = this.lazy ? undefined : this.get()
        }
        /**
         * Evaluate the getter, and re-collect dependencies.
         */

        Watcher.prototype.get = function get() {
          pushTarget(this)
          var value
          var vm = this.vm

          try {
            value = this.getter.call(vm, vm)
          } catch (e) {
            if (this.user) {
              handleError(e, vm, 'getter for watcher "' + this.expression + '"')
            } else {
              throw e
            }
          } finally {
            // "touch" every property so they are all tracked as
            // dependencies for deep watching
            if (this.deep) {
              traverse(value)
            }

            popTarget()
            this.cleanupDeps()
          }

          return value
        }
        /**
         * Add a dependency to this directive.
         */

        Watcher.prototype.addDep = function addDep(dep) {
          var id = dep.id

          if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id)
            this.newDeps.push(dep)

            if (!this.depIds.has(id)) {
              dep.addSub(this)
            }
          }
        }
        /**
         * Clean up for dependency collection.
         */

        Watcher.prototype.cleanupDeps = function cleanupDeps() {
          var i = this.deps.length

          while (i--) {
            var dep = this.deps[i]

            if (!this.newDepIds.has(dep.id)) {
              dep.removeSub(this)
            }
          }

          var tmp = this.depIds
          this.depIds = this.newDepIds
          this.newDepIds = tmp
          this.newDepIds.clear()
          tmp = this.deps
          this.deps = this.newDeps
          this.newDeps = tmp
          this.newDeps.length = 0
        }
        /**
         * Subscriber interface.
         * Will be called when a dependency changes.
         */

        Watcher.prototype.update = function update() {
          /* istanbul ignore else */
          if (this.lazy) {
            this.dirty = true
          } else if (this.sync) {
            this.run()
          } else {
            queueWatcher(this)
          }
        }
        /**
         * Scheduler job interface.
         * Will be called by the scheduler.
         */

        Watcher.prototype.run = function run() {
          if (this.active) {
            var value = this.get()

            if (
              value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
              // when the value is the same, because the value may
              // have mutated.
              isObject(value) ||
              this.deep
            ) {
              // set new value
              var oldValue = this.value
              this.value = value

              if (this.user) {
                try {
                  this.cb.call(this.vm, value, oldValue)
                } catch (e) {
                  handleError(
                    e,
                    this.vm,
                    'callback for watcher "' + this.expression + '"'
                  )
                }
              } else {
                this.cb.call(this.vm, value, oldValue)
              }
            }
          }
        }
        /**
         * Evaluate the value of the watcher.
         * This only gets called for lazy watchers.
         */

        Watcher.prototype.evaluate = function evaluate() {
          this.value = this.get()
          this.dirty = false
        }
        /**
         * Depend on all deps collected by this watcher.
         */

        Watcher.prototype.depend = function depend() {
          var i = this.deps.length

          while (i--) {
            this.deps[i].depend()
          }
        }
        /**
         * Remove self from all dependencies' subscriber list.
         */

        Watcher.prototype.teardown = function teardown() {
          if (this.active) {
            // remove self from vm's watcher list
            // this is a somewhat expensive operation so we skip it
            // if the vm is being destroyed.
            if (!this.vm._isBeingDestroyed) {
              remove(this.vm._watchers, this)
            }

            var i = this.deps.length

            while (i--) {
              this.deps[i].removeSub(this)
            }

            this.active = false
          }
        }
        /*  */

        var sharedPropertyDefinition = {
          enumerable: true,
          configurable: true,
          get: noop,
          set: noop
        }

        function proxy(target, sourceKey, key) {
          sharedPropertyDefinition.get = function proxyGetter() {
            return this[sourceKey][key]
          }

          sharedPropertyDefinition.set = function proxySetter(val) {
            this[sourceKey][key] = val
          }

          Object.defineProperty(target, key, sharedPropertyDefinition)
        }

        function initState(vm) {
          vm._watchers = []
          var opts = vm.$options

          if (opts.props) {
            initProps(vm, opts.props)
          }

          if (opts.methods) {
            initMethods(vm, opts.methods)
          }

          if (opts.data) {
            initData(vm)
          } else {
            observe(
              (vm._data = {}),
              true
              /* asRootData */
            )
          }

          if (opts.computed) {
            initComputed(vm, opts.computed)
          }

          if (opts.watch && opts.watch !== nativeWatch) {
            initWatch(vm, opts.watch)
          }
        }

        function initProps(vm, propsOptions) {
          var propsData = vm.$options.propsData || {}
          var props = (vm._props = {}) // cache prop keys so that future props updates can iterate using Array
          // instead of dynamic object key enumeration.

          var keys = (vm.$options._propKeys = [])
          var isRoot = !vm.$parent // root instance props should be converted

          if (!isRoot) {
            toggleObserving(false)
          }

          var loop = function(key) {
            keys.push(key)
            var value = validateProp(key, propsOptions, propsData, vm)
            /* istanbul ignore else */

            if ('development' !== 'production') {
              var hyphenatedKey = hyphenate(key)

              if (
                isReservedAttribute(hyphenatedKey) ||
                config.isReservedAttr(hyphenatedKey)
              ) {
                warn(
                  '"' +
                    hyphenatedKey +
                    '" is a reserved attribute and cannot be used as component prop.',
                  vm
                )
              }

              defineReactive$$1(props, key, value, function() {
                if (!isRoot && !isUpdatingChildComponent) {
                  warn(
                    'Avoid mutating a prop directly since the value will be ' +
                      'overwritten whenever the parent component re-renders. ' +
                      "Instead, use a data or computed property based on the prop's " +
                      'value. Prop being mutated: "' +
                      key +
                      '"',
                    vm
                  )
                }
              })
            } else {
              defineReactive$$1(props, key, value)
            } // static props are already proxied on the component's prototype
            // during Vue.extend(). We only need to proxy props defined at
            // instantiation here.

            if (!(key in vm)) {
              proxy(vm, '_props', key)
            }
          }

          for (var key in propsOptions) loop(key)

          toggleObserving(true)
        }

        function initData(vm) {
          var data = vm.$options.data
          data = vm._data =
            typeof data === 'function' ? getData(data, vm) : data || {}

          if (!isPlainObject(data)) {
            data = {}
            'development' !== 'production' &&
              warn(
                'data functions should return an object:\n' +
                  'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
                vm
              )
          } // proxy data on instance

          var keys = Object.keys(data)
          var props = vm.$options.props
          var methods = vm.$options.methods
          var i = keys.length

          while (i--) {
            var key = keys[i]

            if ('development' !== 'production') {
              if (methods && hasOwn(methods, key)) {
                warn(
                  'Method "' +
                    key +
                    '" has already been defined as a data property.',
                  vm
                )
              }
            }

            if (props && hasOwn(props, key)) {
              'development' !== 'production' &&
                warn(
                  'The data property "' +
                    key +
                    '" is already declared as a prop. ' +
                    'Use prop default value instead.',
                  vm
                )
            } else if (!isReserved(key)) {
              proxy(vm, '_data', key)
            }
          } // observe data

          observe(
            data,
            true
            /* asRootData */
          )
        }

        function getData(data, vm) {
          // #7573 disable dep collection when invoking data getters
          pushTarget()

          try {
            return data.call(vm, vm)
          } catch (e) {
            handleError(e, vm, 'data()')
            return {}
          } finally {
            popTarget()
          }
        }

        var computedWatcherOptions = {
          lazy: true
        }

        function initComputed(vm, computed) {
          // $flow-disable-line
          var watchers = (vm._computedWatchers = Object.create(null)) // computed properties are just getters during SSR

          var isSSR = isServerRendering()

          for (var key in computed) {
            var userDef = computed[key]
            var getter = typeof userDef === 'function' ? userDef : userDef.get

            if ('development' !== 'production' && getter == null) {
              warn('Getter is missing for computed property "' + key + '".', vm)
            }

            if (!isSSR) {
              // create internal watcher for the computed property.
              watchers[key] = new Watcher(
                vm,
                getter || noop,
                noop,
                computedWatcherOptions
              )
            } // component-defined computed properties are already defined on the
            // component prototype. We only need to define computed properties defined
            // at instantiation here.

            if (!(key in vm)) {
              defineComputed(vm, key, userDef)
            } else if ('development' !== 'production') {
              if (key in vm.$data) {
                warn(
                  'The computed property "' +
                    key +
                    '" is already defined in data.',
                  vm
                )
              } else if (vm.$options.props && key in vm.$options.props) {
                warn(
                  'The computed property "' +
                    key +
                    '" is already defined as a prop.',
                  vm
                )
              }
            }
          }
        }

        function defineComputed(target, key, userDef) {
          var shouldCache = !isServerRendering()

          if (typeof userDef === 'function') {
            sharedPropertyDefinition.get = shouldCache
              ? createComputedGetter(key)
              : createGetterInvoker(userDef)
            sharedPropertyDefinition.set = noop
          } else {
            sharedPropertyDefinition.get = userDef.get
              ? shouldCache && userDef.cache !== false
                ? createComputedGetter(key)
                : createGetterInvoker(userDef.get)
              : noop
            sharedPropertyDefinition.set = userDef.set || noop
          }

          if (
            'development' !== 'production' &&
            sharedPropertyDefinition.set === noop
          ) {
            sharedPropertyDefinition.set = function() {
              warn(
                'Computed property "' +
                  key +
                  '" was assigned to but it has no setter.',
                this
              )
            }
          }

          Object.defineProperty(target, key, sharedPropertyDefinition)
        }

        function createComputedGetter(key) {
          return function computedGetter() {
            var watcher = this._computedWatchers && this._computedWatchers[key]

            if (watcher) {
              if (watcher.dirty) {
                watcher.evaluate()
              }

              if (Dep.target) {
                watcher.depend()
              }

              return watcher.value
            }
          }
        }

        function createGetterInvoker(fn) {
          return function computedGetter() {
            return fn.call(this, this)
          }
        }

        function initMethods(vm, methods) {
          var props = vm.$options.props

          for (var key in methods) {
            if ('development' !== 'production') {
              if (typeof methods[key] !== 'function') {
                warn(
                  'Method "' +
                    key +
                    '" has type "' +
                    typeof methods[key] +
                    '" in the component definition. ' +
                    'Did you reference the function correctly?',
                  vm
                )
              }

              if (props && hasOwn(props, key)) {
                warn(
                  'Method "' + key + '" has already been defined as a prop.',
                  vm
                )
              }

              if (key in vm && isReserved(key)) {
                warn(
                  'Method "' +
                    key +
                    '" conflicts with an existing Vue instance method. ' +
                    'Avoid defining component methods that start with _ or $.'
                )
              }
            }

            vm[key] =
              typeof methods[key] !== 'function' ? noop : bind(methods[key], vm)
          }
        }

        function initWatch(vm, watch) {
          for (var key in watch) {
            var handler = watch[key]

            if (Array.isArray(handler)) {
              for (var i = 0; i < handler.length; i++) {
                createWatcher(vm, key, handler[i])
              }
            } else {
              createWatcher(vm, key, handler)
            }
          }
        }

        function createWatcher(vm, expOrFn, handler, options) {
          if (isPlainObject(handler)) {
            options = handler
            handler = handler.handler
          }

          if (typeof handler === 'string') {
            handler = vm[handler]
          }

          return vm.$watch(expOrFn, handler, options)
        }

        function stateMixin(Vue) {
          // flow somehow has problems with directly declared definition object
          // when using Object.defineProperty, so we have to procedurally build up
          // the object here.
          var dataDef = {}

          dataDef.get = function() {
            return this._data
          }

          var propsDef = {}

          propsDef.get = function() {
            return this._props
          }

          if ('development' !== 'production') {
            dataDef.set = function() {
              warn(
                'Avoid replacing instance root $data. ' +
                  'Use nested data properties instead.',
                this
              )
            }

            propsDef.set = function() {
              warn('$props is readonly.', this)
            }
          }

          Object.defineProperty(Vue.prototype, '$data', dataDef)
          Object.defineProperty(Vue.prototype, '$props', propsDef)
          Vue.prototype.$set = set
          Vue.prototype.$delete = del

          Vue.prototype.$watch = function(expOrFn, cb, options) {
            var vm = this

            if (isPlainObject(cb)) {
              return createWatcher(vm, expOrFn, cb, options)
            }

            options = options || {}
            options.user = true
            var watcher = new Watcher(vm, expOrFn, cb, options)

            if (options.immediate) {
              try {
                cb.call(vm, watcher.value)
              } catch (error) {
                handleError(
                  error,
                  vm,
                  'callback for immediate watcher "' + watcher.expression + '"'
                )
              }
            }

            return function unwatchFn() {
              watcher.teardown()
            }
          }
        }
        /*  */

        function initProvide(vm) {
          var provide = vm.$options.provide

          if (provide) {
            vm._provided =
              typeof provide === 'function' ? provide.call(vm) : provide
          }
        }

        function initInjections(vm) {
          var result = resolveInject(vm.$options.inject, vm)

          if (result) {
            toggleObserving(false)
            Object.keys(result).forEach(function(key) {
              /* istanbul ignore else */
              if ('development' !== 'production') {
                defineReactive$$1(vm, key, result[key], function() {
                  warn(
                    'Avoid mutating an injected value directly since the changes will be ' +
                      'overwritten whenever the provided component re-renders. ' +
                      'injection being mutated: "' +
                      key +
                      '"',
                    vm
                  )
                })
              } else {
                defineReactive$$1(vm, key, result[key])
              }
            })
            toggleObserving(true)
          }
        }

        function resolveInject(inject, vm) {
          if (inject) {
            // inject is :any because flow is not smart enough to figure out cached
            var result = Object.create(null)
            var keys = hasSymbol
              ? Reflect.ownKeys(inject).filter(function(key) {
                  /* istanbul ignore next */
                  return Object.getOwnPropertyDescriptor(inject, key).enumerable
                })
              : Object.keys(inject)

            for (var i = 0; i < keys.length; i++) {
              var key = keys[i]
              var provideKey = inject[key].from
              var source = vm

              while (source) {
                if (source._provided && hasOwn(source._provided, provideKey)) {
                  result[key] = source._provided[provideKey]
                  break
                }

                source = source.$parent
              }

              if (!source) {
                if ('default' in inject[key]) {
                  var provideDefault = inject[key].default
                  result[key] =
                    typeof provideDefault === 'function'
                      ? provideDefault.call(vm)
                      : provideDefault
                } else if ('development' !== 'production') {
                  warn('Injection "' + key + '" not found', vm)
                }
              }
            }

            return result
          }
        }
        /*  */

        /**
         * Runtime helper for rendering v-for lists.
         */

        function renderList(val, render) {
          var ret, i, l, keys, key

          if (Array.isArray(val) || typeof val === 'string') {
            ret = new Array(val.length)

            for (i = 0, l = val.length; i < l; i++) {
              ret[i] = render(val[i], i)
            }
          } else if (typeof val === 'number') {
            ret = new Array(val)

            for (i = 0; i < val; i++) {
              ret[i] = render(i + 1, i)
            }
          } else if (isObject(val)) {
            keys = Object.keys(val)
            ret = new Array(keys.length)

            for (i = 0, l = keys.length; i < l; i++) {
              key = keys[i]
              ret[i] = render(val[key], key, i)
            }
          }

          if (!isDef(ret)) {
            ret = []
          }

          ret._isVList = true
          return ret
        }
        /*  */

        /**
         * Runtime helper for rendering <slot>
         */

        function renderSlot(name, fallback, props, bindObject) {
          var scopedSlotFn = this.$scopedSlots[name]
          var nodes

          if (scopedSlotFn) {
            // scoped slot
            props = props || {}

            if (bindObject) {
              if ('development' !== 'production' && !isObject(bindObject)) {
                warn('slot v-bind without argument expects an Object', this)
              }

              props = extend(extend({}, bindObject), props)
            }

            nodes = scopedSlotFn(props) || fallback
          } else {
            nodes = this.$slots[name] || fallback
          }

          var target = props && props.slot

          if (target) {
            return this.$createElement(
              'template',
              {
                slot: target
              },
              nodes
            )
          } else {
            return nodes
          }
        }
        /*  */

        /**
         * Runtime helper for resolving filters
         */

        function resolveFilter(id) {
          return resolveAsset(this.$options, 'filters', id, true) || identity
        }
        /*  */

        function isKeyNotMatch(expect, actual) {
          if (Array.isArray(expect)) {
            return expect.indexOf(actual) === -1
          } else {
            return expect !== actual
          }
        }
        /**
         * Runtime helper for checking keyCodes from config.
         * exposed as Vue.prototype._k
         * passing in eventKeyName as last argument separately for backwards compat
         */

        function checkKeyCodes(
          eventKeyCode,
          key,
          builtInKeyCode,
          eventKeyName,
          builtInKeyName
        ) {
          var mappedKeyCode = config.keyCodes[key] || builtInKeyCode

          if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
            return isKeyNotMatch(builtInKeyName, eventKeyName)
          } else if (mappedKeyCode) {
            return isKeyNotMatch(mappedKeyCode, eventKeyCode)
          } else if (eventKeyName) {
            return hyphenate(eventKeyName) !== key
          }
        }
        /*  */

        /**
         * Runtime helper for merging v-bind="object" into a VNode's data.
         */

        function bindObjectProps(data, tag, value, asProp, isSync) {
          if (value) {
            if (!isObject(value)) {
              'development' !== 'production' &&
                warn(
                  'v-bind without argument expects an Object or Array value',
                  this
                )
            } else {
              if (Array.isArray(value)) {
                value = toObject(value)
              }

              var hash

              var loop = function(key) {
                if (
                  key === 'class' ||
                  key === 'style' ||
                  isReservedAttribute(key)
                ) {
                  hash = data
                } else {
                  var type = data.attrs && data.attrs.type
                  hash =
                    asProp || config.mustUseProp(tag, type, key)
                      ? data.domProps || (data.domProps = {})
                      : data.attrs || (data.attrs = {})
                }

                var camelizedKey = camelize(key)

                if (!(key in hash) && !(camelizedKey in hash)) {
                  hash[key] = value[key]

                  if (isSync) {
                    var on = data.on || (data.on = {})

                    on['update:' + camelizedKey] = function($event) {
                      value[key] = $event
                    }
                  }
                }
              }

              for (var key in value) loop(key)
            }
          }

          return data
        }
        /*  */

        /**
         * Runtime helper for rendering static trees.
         */

        function renderStatic(index, isInFor) {
          var cached = this._staticTrees || (this._staticTrees = [])
          var tree = cached[index] // if has already-rendered static tree and not inside v-for,
          // we can reuse the same tree.

          if (tree && !isInFor) {
            return tree
          } // otherwise, render a fresh tree.

          tree = cached[index] = this.$options.staticRenderFns[index].call(
            this._renderProxy,
            null,
            this // for render fns generated for functional component templates
          )
          markStatic(tree, '__static__' + index, false)
          return tree
        }
        /**
         * Runtime helper for v-once.
         * Effectively it means marking the node as static with a unique key.
         */

        function markOnce(tree, index, key) {
          markStatic(tree, '__once__' + index + (key ? '_' + key : ''), true)
          return tree
        }

        function markStatic(tree, key, isOnce) {
          if (Array.isArray(tree)) {
            for (var i = 0; i < tree.length; i++) {
              if (tree[i] && typeof tree[i] !== 'string') {
                markStaticNode(tree[i], key + '_' + i, isOnce)
              }
            }
          } else {
            markStaticNode(tree, key, isOnce)
          }
        }

        function markStaticNode(node, key, isOnce) {
          node.isStatic = true
          node.key = key
          node.isOnce = isOnce
        }
        /*  */

        function bindObjectListeners(data, value) {
          if (value) {
            if (!isPlainObject(value)) {
              'development' !== 'production' &&
                warn('v-on without argument expects an Object value', this)
            } else {
              var on = (data.on = data.on ? extend({}, data.on) : {})

              for (var key in value) {
                var existing = on[key]
                var ours = value[key]
                on[key] = existing ? [].concat(existing, ours) : ours
              }
            }
          }

          return data
        }
        /*  */

        function installRenderHelpers(target) {
          target._o = markOnce
          target._n = toNumber
          target._s = toString
          target._l = renderList
          target._t = renderSlot
          target._q = looseEqual
          target._i = looseIndexOf
          target._m = renderStatic
          target._f = resolveFilter
          target._k = checkKeyCodes
          target._b = bindObjectProps
          target._v = createTextVNode
          target._e = createEmptyVNode
          target._u = resolveScopedSlots
          target._g = bindObjectListeners
        }
        /*  */

        function FunctionalRenderContext(data, props, children, parent, Ctor) {
          var options = Ctor.options // ensure the createElement function in functional components
          // gets a unique context - this is necessary for correct named slot check

          var contextVm

          if (hasOwn(parent, '_uid')) {
            contextVm = Object.create(parent) // $flow-disable-line

            contextVm._original = parent
          } else {
            // the context vm passed in is a functional context as well.
            // in this case we want to make sure we are able to get a hold to the
            // real context instance.
            contextVm = parent // $flow-disable-line

            parent = parent._original
          }

          var isCompiled = isTrue(options._compiled)
          var needNormalization = !isCompiled
          this.data = data
          this.props = props
          this.children = children
          this.parent = parent
          this.listeners = data.on || emptyObject
          this.injections = resolveInject(options.inject, parent)

          this.slots = function() {
            return resolveSlots(children, parent)
          } // support for compiled functional template

          if (isCompiled) {
            // exposing $options for renderStatic()
            this.$options = options // pre-resolve slots for renderSlot()

            this.$slots = this.slots()
            this.$scopedSlots = data.scopedSlots || emptyObject
          }

          if (options._scopeId) {
            this._c = function(a, b, c, d) {
              var vnode = createElement(
                contextVm,
                a,
                b,
                c,
                d,
                needNormalization
              )

              if (vnode && !Array.isArray(vnode)) {
                vnode.fnScopeId = options._scopeId
                vnode.fnContext = parent
              }

              return vnode
            }
          } else {
            this._c = function(a, b, c, d) {
              return createElement(contextVm, a, b, c, d, needNormalization)
            }
          }
        }

        installRenderHelpers(FunctionalRenderContext.prototype)

        function createFunctionalComponent(
          Ctor,
          propsData,
          data,
          contextVm,
          children
        ) {
          var options = Ctor.options
          var props = {}
          var propOptions = options.props

          if (isDef(propOptions)) {
            for (var key in propOptions) {
              props[key] = validateProp(
                key,
                propOptions,
                propsData || emptyObject
              )
            }
          } else {
            if (isDef(data.attrs)) {
              mergeProps(props, data.attrs)
            }

            if (isDef(data.props)) {
              mergeProps(props, data.props)
            }
          }

          var renderContext = new FunctionalRenderContext(
            data,
            props,
            children,
            contextVm,
            Ctor
          )
          var vnode = options.render.call(null, renderContext._c, renderContext)

          if (vnode instanceof VNode) {
            return cloneAndMarkFunctionalResult(
              vnode,
              data,
              renderContext.parent,
              options,
              renderContext
            )
          } else if (Array.isArray(vnode)) {
            var vnodes = normalizeChildren(vnode) || []
            var res = new Array(vnodes.length)

            for (var i = 0; i < vnodes.length; i++) {
              res[i] = cloneAndMarkFunctionalResult(
                vnodes[i],
                data,
                renderContext.parent,
                options,
                renderContext
              )
            }

            return res
          }
        }

        function cloneAndMarkFunctionalResult(
          vnode,
          data,
          contextVm,
          options,
          renderContext
        ) {
          // #7817 clone node before setting fnContext, otherwise if the node is reused
          // (e.g. it was from a cached normal slot) the fnContext causes named slots
          // that should not be matched to match.
          var clone = cloneVNode(vnode)
          clone.fnContext = contextVm
          clone.fnOptions = options

          if ('development' !== 'production') {
            ;(clone.devtoolsMeta =
              clone.devtoolsMeta || {}).renderContext = renderContext
          }

          if (data.slot) {
            ;(clone.data || (clone.data = {})).slot = data.slot
          }

          return clone
        }

        function mergeProps(to, from) {
          for (var key in from) {
            to[camelize(key)] = from[key]
          }
        }
        /*  */

        /*  */

        /*  */

        /*  */
        // inline hooks to be invoked on component VNodes during patch

        var componentVNodeHooks = {
          init: function init(vnode, hydrating) {
            if (
              vnode.componentInstance &&
              !vnode.componentInstance._isDestroyed &&
              vnode.data.keepAlive
            ) {
              // kept-alive components, treat as a patch
              var mountedNode = vnode // work around flow

              componentVNodeHooks.prepatch(mountedNode, mountedNode)
            } else {
              var child = (vnode.componentInstance = createComponentInstanceForVnode(
                vnode,
                activeInstance
              ))
              child.$mount(hydrating ? vnode.elm : undefined, hydrating)
            }
          },
          prepatch: function prepatch(oldVnode, vnode) {
            var options = vnode.componentOptions
            var child = (vnode.componentInstance = oldVnode.componentInstance)
            updateChildComponent(
              child,
              options.propsData, // updated props
              options.listeners, // updated listeners
              vnode, // new parent vnode
              options.children // new children
            )
          },
          insert: function insert(vnode) {
            var context = vnode.context
            var componentInstance = vnode.componentInstance

            if (!componentInstance._isMounted) {
              componentInstance._isMounted = true
              callHook(componentInstance, 'mounted')
            }

            if (vnode.data.keepAlive) {
              if (context._isMounted) {
                // vue-router#1212
                // During updates, a kept-alive component's child components may
                // change, so directly walking the tree here may call activated hooks
                // on incorrect children. Instead we push them into a queue which will
                // be processed after the whole patch process ended.
                queueActivatedComponent(componentInstance)
              } else {
                activateChildComponent(
                  componentInstance,
                  true
                  /* direct */
                )
              }
            }
          },
          destroy: function destroy(vnode) {
            var componentInstance = vnode.componentInstance

            if (!componentInstance._isDestroyed) {
              if (!vnode.data.keepAlive) {
                componentInstance.$destroy()
              } else {
                deactivateChildComponent(
                  componentInstance,
                  true
                  /* direct */
                )
              }
            }
          }
        }
        var hooksToMerge = Object.keys(componentVNodeHooks)

        function createComponent(Ctor, data, context, children, tag) {
          if (isUndef(Ctor)) {
            return
          }

          var baseCtor = context.$options._base // plain options object: turn it into a constructor

          if (isObject(Ctor)) {
            Ctor = baseCtor.extend(Ctor)
          } // if at this stage it's not a constructor or an async component factory,
          // reject.

          if (typeof Ctor !== 'function') {
            if ('development' !== 'production') {
              warn('Invalid Component definition: ' + String(Ctor), context)
            }

            return
          } // async component

          var asyncFactory

          if (isUndef(Ctor.cid)) {
            asyncFactory = Ctor
            Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)

            if (Ctor === undefined) {
              // return a placeholder node for async component, which is rendered
              // as a comment node but preserves all the raw information for the node.
              // the information will be used for async server-rendering and hydration.
              return createAsyncPlaceholder(
                asyncFactory,
                data,
                context,
                children,
                tag
              )
            }
          }

          data = data || {} // resolve constructor options in case global mixins are applied after
          // component constructor creation

          resolveConstructorOptions(Ctor) // transform component v-model data into props & events

          if (isDef(data.model)) {
            transformModel(Ctor.options, data)
          } // extract props

          var propsData = extractPropsFromVNodeData(data, Ctor, tag) // functional component

          if (isTrue(Ctor.options.functional)) {
            return createFunctionalComponent(
              Ctor,
              propsData,
              data,
              context,
              children
            )
          } // extract listeners, since these needs to be treated as
          // child component listeners instead of DOM listeners

          var listeners = data.on // replace with listeners with .native modifier
          // so it gets processed during parent component patch.

          data.on = data.nativeOn

          if (isTrue(Ctor.options.abstract)) {
            // abstract components do not keep anything
            // other than props & listeners & slot
            // work around flow
            var slot = data.slot
            data = {}

            if (slot) {
              data.slot = slot
            }
          } // install component management hooks onto the placeholder node

          installComponentHooks(data) // return a placeholder vnode

          var name = Ctor.options.name || tag
          var vnode = new VNode(
            'vue-component-' + Ctor.cid + (name ? '-' + name : ''),
            data,
            undefined,
            undefined,
            undefined,
            context,
            {
              Ctor: Ctor,
              propsData: propsData,
              listeners: listeners,
              tag: tag,
              children: children
            },
            asyncFactory
          )
          return vnode
        }

        function createComponentInstanceForVnode(
          vnode, // we know it's MountedComponentVNode but flow doesn't
          parent // activeInstance in lifecycle state
        ) {
          var options = {
            _isComponent: true,
            _parentVnode: vnode,
            parent: parent
          } // check inline-template render functions

          var inlineTemplate = vnode.data.inlineTemplate

          if (isDef(inlineTemplate)) {
            options.render = inlineTemplate.render
            options.staticRenderFns = inlineTemplate.staticRenderFns
          }

          return new vnode.componentOptions.Ctor(options)
        }

        function installComponentHooks(data) {
          var hooks = data.hook || (data.hook = {})

          for (var i = 0; i < hooksToMerge.length; i++) {
            var key = hooksToMerge[i]
            var existing = hooks[key]
            var toMerge = componentVNodeHooks[key]

            if (existing !== toMerge && !(existing && existing._merged)) {
              hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge
            }
          }
        }

        function mergeHook$1(f1, f2) {
          var merged = function(a, b) {
            // flow complains about extra args which is why we use any
            f1(a, b)
            f2(a, b)
          }

          merged._merged = true
          return merged
        } // transform component v-model info (value and callback) into
        // prop and event handler respectively.

        function transformModel(options, data) {
          var prop = (options.model && options.model.prop) || 'value'
          var event = (options.model && options.model.event) || 'input'
          ;(data.props || (data.props = {}))[prop] = data.model.value
          var on = data.on || (data.on = {})
          var existing = on[event]
          var callback = data.model.callback

          if (isDef(existing)) {
            if (
              Array.isArray(existing)
                ? existing.indexOf(callback) === -1
                : existing !== callback
            ) {
              on[event] = [callback].concat(existing)
            }
          } else {
            on[event] = callback
          }
        }
        /*  */

        var SIMPLE_NORMALIZE = 1
        var ALWAYS_NORMALIZE = 2 // wrapper function for providing a more flexible interface
        // without getting yelled at by flow

        function createElement(
          context,
          tag,
          data,
          children,
          normalizationType,
          alwaysNormalize
        ) {
          if (Array.isArray(data) || isPrimitive(data)) {
            normalizationType = children
            children = data
            data = undefined
          }

          if (isTrue(alwaysNormalize)) {
            normalizationType = ALWAYS_NORMALIZE
          }

          return _createElement(context, tag, data, children, normalizationType)
        }

        function _createElement(
          context,
          tag,
          data,
          children,
          normalizationType
        ) {
          if (isDef(data) && isDef(data.__ob__)) {
            'development' !== 'production' &&
              warn(
                'Avoid using observed data object as vnode data: ' +
                  JSON.stringify(data) +
                  '\n' +
                  'Always create fresh vnode data objects in each render!',
                context
              )
            return createEmptyVNode()
          } // object syntax in v-bind

          if (isDef(data) && isDef(data.is)) {
            tag = data.is
          }

          if (!tag) {
            // in case of component :is set to falsy value
            return createEmptyVNode()
          } // warn against non-primitive key

          if (
            'development' !== 'production' &&
            isDef(data) &&
            isDef(data.key) &&
            !isPrimitive(data.key)
          ) {
            {
              warn(
                'Avoid using non-primitive value as key, ' +
                  'use string/number value instead.',
                context
              )
            }
          } // support single function children as default scoped slot

          if (Array.isArray(children) && typeof children[0] === 'function') {
            data = data || {}
            data.scopedSlots = {
              default: children[0]
            }
            children.length = 0
          }

          if (normalizationType === ALWAYS_NORMALIZE) {
            children = normalizeChildren(children)
          } else if (normalizationType === SIMPLE_NORMALIZE) {
            children = simpleNormalizeChildren(children)
          }

          var vnode, ns

          if (typeof tag === 'string') {
            var Ctor
            ns =
              (context.$vnode && context.$vnode.ns) ||
              config.getTagNamespace(tag)

            if (config.isReservedTag(tag)) {
              // platform built-in elements
              vnode = new VNode(
                config.parsePlatformTagName(tag),
                data,
                children,
                undefined,
                undefined,
                context
              )
            } else if (
              (!data || !data.pre) &&
              isDef((Ctor = resolveAsset(context.$options, 'components', tag)))
            ) {
              // component
              vnode = createComponent(Ctor, data, context, children, tag)
            } else {
              // unknown or unlisted namespaced elements
              // check at runtime because it may get assigned a namespace when its
              // parent normalizes children
              vnode = new VNode(
                tag,
                data,
                children,
                undefined,
                undefined,
                context
              )
            }
          } else {
            // direct component options / constructor
            vnode = createComponent(tag, data, context, children)
          }

          if (Array.isArray(vnode)) {
            return vnode
          } else if (isDef(vnode)) {
            if (isDef(ns)) {
              applyNS(vnode, ns)
            }

            if (isDef(data)) {
              registerDeepBindings(data)
            }

            return vnode
          } else {
            return createEmptyVNode()
          }
        }

        function applyNS(vnode, ns, force) {
          vnode.ns = ns

          if (vnode.tag === 'foreignObject') {
            // use default namespace inside foreignObject
            ns = undefined
            force = true
          }

          if (isDef(vnode.children)) {
            for (var i = 0, l = vnode.children.length; i < l; i++) {
              var child = vnode.children[i]

              if (
                isDef(child.tag) &&
                (isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))
              ) {
                applyNS(child, ns, force)
              }
            }
          }
        } // ref #5318
        // necessary to ensure parent re-render when deep bindings like :style and
        // :class are used on slot nodes

        function registerDeepBindings(data) {
          if (isObject(data.style)) {
            traverse(data.style)
          }

          if (isObject(data.class)) {
            traverse(data.class)
          }
        }
        /*  */

        function initRender(vm) {
          vm._vnode = null // the root of the child tree

          vm._staticTrees = null // v-once cached trees

          var options = vm.$options
          var parentVnode = (vm.$vnode = options._parentVnode) // the placeholder node in parent tree

          var renderContext = parentVnode && parentVnode.context
          vm.$slots = resolveSlots(options._renderChildren, renderContext)
          vm.$scopedSlots = emptyObject // bind the createElement fn to this instance
          // so that we get proper render context inside it.
          // args order: tag, data, children, normalizationType, alwaysNormalize
          // internal version is used by render functions compiled from templates

          vm._c = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, false)
          } // normalization is always applied for the public version, used in
          // user-written render functions.

          vm.$createElement = function(a, b, c, d) {
            return createElement(vm, a, b, c, d, true)
          } // $attrs & $listeners are exposed for easier HOC creation.
          // they need to be reactive so that HOCs using them are always updated

          var parentData = parentVnode && parentVnode.data
          /* istanbul ignore else */

          if ('development' !== 'production') {
            defineReactive$$1(
              vm,
              '$attrs',
              (parentData && parentData.attrs) || emptyObject,
              function() {
                !isUpdatingChildComponent && warn('$attrs is readonly.', vm)
              },
              true
            )
            defineReactive$$1(
              vm,
              '$listeners',
              options._parentListeners || emptyObject,
              function() {
                !isUpdatingChildComponent && warn('$listeners is readonly.', vm)
              },
              true
            )
          } else {
            defineReactive$$1(
              vm,
              '$attrs',
              (parentData && parentData.attrs) || emptyObject,
              null,
              true
            )
            defineReactive$$1(
              vm,
              '$listeners',
              options._parentListeners || emptyObject,
              null,
              true
            )
          }
        }

        function renderMixin(Vue) {
          // install runtime convenience helpers
          installRenderHelpers(Vue.prototype)

          Vue.prototype.$nextTick = function(fn) {
            return nextTick(fn, this)
          }

          Vue.prototype._render = function() {
            var vm = this
            var ref = vm.$options
            var render = ref.render
            var _parentVnode = ref._parentVnode

            if (_parentVnode) {
              vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject
            } // set parent vnode. this allows render functions to have access
            // to the data on the placeholder node.

            vm.$vnode = _parentVnode // render self

            var vnode

            try {
              vnode = render.call(vm._renderProxy, vm.$createElement)
            } catch (e) {
              handleError(e, vm, 'render') // return error render result,
              // or previous vnode to prevent render error causing blank component

              /* istanbul ignore else */

              if ('development' !== 'production' && vm.$options.renderError) {
                try {
                  vnode = vm.$options.renderError.call(
                    vm._renderProxy,
                    vm.$createElement,
                    e
                  )
                } catch (e) {
                  handleError(e, vm, 'renderError')
                  vnode = vm._vnode
                }
              } else {
                vnode = vm._vnode
              }
            } // return empty vnode in case the render function errored out

            if (!(vnode instanceof VNode)) {
              if ('development' !== 'production' && Array.isArray(vnode)) {
                warn(
                  'Multiple root nodes returned from render function. Render function ' +
                    'should return a single root node.',
                  vm
                )
              }

              vnode = createEmptyVNode()
            } // set parent

            vnode.parent = _parentVnode
            return vnode
          }
        }
        /*  */

        var uid$3 = 0

        function initMixin(Vue) {
          Vue.prototype._init = function(options) {
            var vm = this // a uid

            vm._uid = uid$3++
            var startTag, endTag
            /* istanbul ignore if */

            if ('development' !== 'production' && config.performance && mark) {
              startTag = 'vue-perf-start:' + vm._uid
              endTag = 'vue-perf-end:' + vm._uid
              mark(startTag)
            } // a flag to avoid this being observed

            vm._isVue = true // merge options

            if (options && options._isComponent) {
              // optimize internal component instantiation
              // since dynamic options merging is pretty slow, and none of the
              // internal component options needs special treatment.
              initInternalComponent(vm, options)
            } else {
              vm.$options = mergeOptions(
                resolveConstructorOptions(vm.constructor),
                options || {},
                vm
              )
            }
            /* istanbul ignore else */

            if ('development' !== 'production') {
              initProxy(vm)
            } else {
              vm._renderProxy = vm
            } // expose real self

            vm._self = vm
            initLifecycle(vm)
            initEvents(vm)
            initRender(vm)
            callHook(vm, 'beforeCreate')
            initInjections(vm) // resolve injections before data/props

            initState(vm)
            initProvide(vm) // resolve provide after data/props

            callHook(vm, 'created')
            /* istanbul ignore if */

            if ('development' !== 'production' && config.performance && mark) {
              vm._name = formatComponentName(vm, false)
              mark(endTag)
              measure('vue ' + vm._name + ' init', startTag, endTag)
            }

            if (vm.$options.el) {
              vm.$mount(vm.$options.el)
            }
          }
        }

        function initInternalComponent(vm, options) {
          var opts = (vm.$options = Object.create(vm.constructor.options)) // doing this because it's faster than dynamic enumeration.

          var parentVnode = options._parentVnode
          opts.parent = options.parent
          opts._parentVnode = parentVnode
          var vnodeComponentOptions = parentVnode.componentOptions
          opts.propsData = vnodeComponentOptions.propsData
          opts._parentListeners = vnodeComponentOptions.listeners
          opts._renderChildren = vnodeComponentOptions.children
          opts._componentTag = vnodeComponentOptions.tag

          if (options.render) {
            opts.render = options.render
            opts.staticRenderFns = options.staticRenderFns
          }
        }

        function resolveConstructorOptions(Ctor) {
          var options = Ctor.options

          if (Ctor.super) {
            var superOptions = resolveConstructorOptions(Ctor.super)
            var cachedSuperOptions = Ctor.superOptions

            if (superOptions !== cachedSuperOptions) {
              // super option changed,
              // need to resolve new options.
              Ctor.superOptions = superOptions // check if there are any late-modified/attached options (#4976)

              var modifiedOptions = resolveModifiedOptions(Ctor) // update base extend options

              if (modifiedOptions) {
                extend(Ctor.extendOptions, modifiedOptions)
              }

              options = Ctor.options = mergeOptions(
                superOptions,
                Ctor.extendOptions
              )

              if (options.name) {
                options.components[options.name] = Ctor
              }
            }
          }

          return options
        }

        function resolveModifiedOptions(Ctor) {
          var modified
          var latest = Ctor.options
          var extended = Ctor.extendOptions
          var sealed = Ctor.sealedOptions

          for (var key in latest) {
            if (latest[key] !== sealed[key]) {
              if (!modified) {
                modified = {}
              }

              modified[key] = dedupe(latest[key], extended[key], sealed[key])
            }
          }

          return modified
        }

        function dedupe(latest, extended, sealed) {
          // compare latest and sealed to ensure lifecycle hooks won't be duplicated
          // between merges
          if (Array.isArray(latest)) {
            var res = []
            sealed = Array.isArray(sealed) ? sealed : [sealed]
            extended = Array.isArray(extended) ? extended : [extended]

            for (var i = 0; i < latest.length; i++) {
              // push original options and not sealed options to exclude duplicated options
              if (
                extended.indexOf(latest[i]) >= 0 ||
                sealed.indexOf(latest[i]) < 0
              ) {
                res.push(latest[i])
              }
            }

            return res
          } else {
            return latest
          }
        }

        function Vue(options) {
          if ('development' !== 'production' && !(this instanceof Vue)) {
            warn(
              'Vue is a constructor and should be called with the `new` keyword'
            )
          }

          this._init(options)
        }

        initMixin(Vue)
        stateMixin(Vue)
        eventsMixin(Vue)
        lifecycleMixin(Vue)
        renderMixin(Vue)
        /*  */

        function initUse(Vue) {
          Vue.use = function(plugin) {
            var installedPlugins =
              this._installedPlugins || (this._installedPlugins = [])

            if (installedPlugins.indexOf(plugin) > -1) {
              return this
            } // additional parameters

            var args = toArray(arguments, 1)
            args.unshift(this)

            if (typeof plugin.install === 'function') {
              plugin.install.apply(plugin, args)
            } else if (typeof plugin === 'function') {
              plugin.apply(null, args)
            }

            installedPlugins.push(plugin)
            return this
          }
        }
        /*  */

        function initMixin$1(Vue) {
          Vue.mixin = function(mixin) {
            this.options = mergeOptions(this.options, mixin)
            return this
          }
        }
        /*  */

        function initExtend(Vue) {
          /**
           * Each instance constructor, including Vue, has a unique
           * cid. This enables us to create wrapped "child
           * constructors" for prototypal inheritance and cache them.
           */
          Vue.cid = 0
          var cid = 1
          /**
           * Class inheritance
           */

          Vue.extend = function(extendOptions) {
            extendOptions = extendOptions || {}
            var Super = this
            var SuperId = Super.cid
            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})

            if (cachedCtors[SuperId]) {
              return cachedCtors[SuperId]
            }

            var name = extendOptions.name || Super.options.name

            if ('development' !== 'production' && name) {
              validateComponentName(name)
            }

            var Sub = function VueComponent(options) {
              this._init(options)
            }

            Sub.prototype = Object.create(Super.prototype)
            Sub.prototype.constructor = Sub
            Sub.cid = cid++
            Sub.options = mergeOptions(Super.options, extendOptions)
            Sub['super'] = Super // For props and computed properties, we define the proxy getters on
            // the Vue instances at extension time, on the extended prototype. This
            // avoids Object.defineProperty calls for each instance created.

            if (Sub.options.props) {
              initProps$1(Sub)
            }

            if (Sub.options.computed) {
              initComputed$1(Sub)
            } // allow further extension/mixin/plugin usage

            Sub.extend = Super.extend
            Sub.mixin = Super.mixin
            Sub.use = Super.use // create asset registers, so extended classes
            // can have their private assets too.

            ASSET_TYPES.forEach(function(type) {
              Sub[type] = Super[type]
            }) // enable recursive self-lookup

            if (name) {
              Sub.options.components[name] = Sub
            } // keep a reference to the super options at extension time.
            // later at instantiation we can check if Super's options have
            // been updated.

            Sub.superOptions = Super.options
            Sub.extendOptions = extendOptions
            Sub.sealedOptions = extend({}, Sub.options) // cache constructor

            cachedCtors[SuperId] = Sub
            return Sub
          }
        }

        function initProps$1(Comp) {
          var props = Comp.options.props

          for (var key in props) {
            proxy(Comp.prototype, '_props', key)
          }
        }

        function initComputed$1(Comp) {
          var computed = Comp.options.computed

          for (var key in computed) {
            defineComputed(Comp.prototype, key, computed[key])
          }
        }
        /*  */

        function initAssetRegisters(Vue) {
          /**
           * Create asset registration methods.
           */
          ASSET_TYPES.forEach(function(type) {
            Vue[type] = function(id, definition) {
              if (!definition) {
                return this.options[type + 's'][id]
              } else {
                /* istanbul ignore if */
                if ('development' !== 'production' && type === 'component') {
                  validateComponentName(id)
                }

                if (type === 'component' && isPlainObject(definition)) {
                  definition.name = definition.name || id
                  definition = this.options._base.extend(definition)
                }

                if (type === 'directive' && typeof definition === 'function') {
                  definition = {
                    bind: definition,
                    update: definition
                  }
                }

                this.options[type + 's'][id] = definition
                return definition
              }
            }
          })
        }
        /*  */

        function getComponentName(opts) {
          return opts && (opts.Ctor.options.name || opts.tag)
        }

        function matches(pattern, name) {
          if (Array.isArray(pattern)) {
            return pattern.indexOf(name) > -1
          } else if (typeof pattern === 'string') {
            return pattern.split(',').indexOf(name) > -1
          } else if (isRegExp(pattern)) {
            return pattern.test(name)
          }
          /* istanbul ignore next */

          return false
        }

        function pruneCache(keepAliveInstance, filter) {
          var cache = keepAliveInstance.cache
          var keys = keepAliveInstance.keys
          var _vnode = keepAliveInstance._vnode

          for (var key in cache) {
            var cachedNode = cache[key]

            if (cachedNode) {
              var name = getComponentName(cachedNode.componentOptions)

              if (name && !filter(name)) {
                pruneCacheEntry(cache, key, keys, _vnode)
              }
            }
          }
        }

        function pruneCacheEntry(cache, key, keys, current) {
          var cached$$1 = cache[key]

          if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
            cached$$1.componentInstance.$destroy()
          }

          cache[key] = null
          remove(keys, key)
        }

        var patternTypes = [String, RegExp, Array]
        var KeepAlive = {
          name: 'keep-alive',
          abstract: true,
          props: {
            include: patternTypes,
            exclude: patternTypes,
            max: [String, Number]
          },
          created: function created() {
            this.cache = Object.create(null)
            this.keys = []
          },
          destroyed: function destroyed() {
            for (var key in this.cache) {
              pruneCacheEntry(this.cache, key, this.keys)
            }
          },
          mounted: function mounted() {
            var this$1 = this
            this.$watch('include', function(val) {
              pruneCache(this$1, function(name) {
                return matches(val, name)
              })
            })
            this.$watch('exclude', function(val) {
              pruneCache(this$1, function(name) {
                return !matches(val, name)
              })
            })
          },
          render: function render() {
            var slot = this.$slots.default
            var vnode = getFirstComponentChild(slot)
            var componentOptions = vnode && vnode.componentOptions

            if (componentOptions) {
              // check pattern
              var name = getComponentName(componentOptions)
              var ref = this
              var include = ref.include
              var exclude = ref.exclude

              if (
                // not included
                (include && (!name || !matches(include, name))) || // excluded
                (exclude && name && matches(exclude, name))
              ) {
                return vnode
              }

              var ref$1 = this
              var cache = ref$1.cache
              var keys = ref$1.keys
              var key =
                vnode.key == null // same constructor may get registered as different local components
                  ? // so cid alone is not enough (#3269)
                    componentOptions.Ctor.cid +
                    (componentOptions.tag ? '::' + componentOptions.tag : '')
                  : vnode.key

              if (cache[key]) {
                vnode.componentInstance = cache[key].componentInstance // make current key freshest

                remove(keys, key)
                keys.push(key)
              } else {
                cache[key] = vnode
                keys.push(key) // prune oldest entry

                if (this.max && keys.length > parseInt(this.max)) {
                  pruneCacheEntry(cache, keys[0], keys, this._vnode)
                }
              }

              vnode.data.keepAlive = true
            }

            return vnode || (slot && slot[0])
          }
        }
        var builtInComponents = {
          KeepAlive: KeepAlive
        }
        /*  */

        function initGlobalAPI(Vue) {
          // config
          var configDef = {}

          configDef.get = function() {
            return config
          }

          if ('development' !== 'production') {
            configDef.set = function() {
              warn(
                'Do not replace the Vue.config object, set individual fields instead.'
              )
            }
          }

          Object.defineProperty(Vue, 'config', configDef) // exposed util methods.
          // NOTE: these are not considered part of the public API - avoid relying on
          // them unless you are aware of the risk.

          Vue.util = {
            warn: warn,
            extend: extend,
            mergeOptions: mergeOptions,
            defineReactive: defineReactive$$1
          }
          Vue.set = set
          Vue.delete = del
          Vue.nextTick = nextTick
          Vue.options = Object.create(null)
          ASSET_TYPES.forEach(function(type) {
            Vue.options[type + 's'] = Object.create(null)
          }) // this is used to identify the "base" constructor to extend all plain-object
          // components with in Weex's multi-instance scenarios.

          Vue.options._base = Vue
          extend(Vue.options.components, builtInComponents)
          initUse(Vue)
          initMixin$1(Vue)
          initExtend(Vue)
          initAssetRegisters(Vue)
        }

        initGlobalAPI(Vue)
        Object.defineProperty(Vue.prototype, '$isServer', {
          get: isServerRendering
        })
        Object.defineProperty(Vue.prototype, '$ssrContext', {
          get: function get() {
            /* istanbul ignore next */
            return this.$vnode && this.$vnode.ssrContext
          }
        }) // expose FunctionalRenderContext for ssr runtime helper installation

        Object.defineProperty(Vue, 'FunctionalRenderContext', {
          value: FunctionalRenderContext
        })
        Vue.version = '2.5.21'
        /*  */
        // these are reserved for web because they are directly compiled away
        // during template compilation

        var isReservedAttr = makeMap('style,class') // attributes that should be using props for binding

        var acceptValue = makeMap('input,textarea,option,select,progress')

        var mustUseProp = function(tag, type, attr) {
          return (
            (attr === 'value' && acceptValue(tag) && type !== 'button') ||
            (attr === 'selected' && tag === 'option') ||
            (attr === 'checked' && tag === 'input') ||
            (attr === 'muted' && tag === 'video')
          )
        }

        var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck')
        var isBooleanAttr = makeMap(
          'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
            'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
            'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
            'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
            'required,reversed,scoped,seamless,selected,sortable,translate,' +
            'truespeed,typemustmatch,visible'
        )
        var xlinkNS = 'http://www.w3.org/1999/xlink'

        var isXlink = function(name) {
          return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
        }

        var getXlinkProp = function(name) {
          return isXlink(name) ? name.slice(6, name.length) : ''
        }

        var isFalsyAttrValue = function(val) {
          return val == null || val === false
        }
        /*  */

        function genClassForVnode(vnode) {
          var data = vnode.data
          var parentNode = vnode
          var childNode = vnode

          while (isDef(childNode.componentInstance)) {
            childNode = childNode.componentInstance._vnode

            if (childNode && childNode.data) {
              data = mergeClassData(childNode.data, data)
            }
          }

          while (isDef((parentNode = parentNode.parent))) {
            if (parentNode && parentNode.data) {
              data = mergeClassData(data, parentNode.data)
            }
          }

          return renderClass(data.staticClass, data.class)
        }

        function mergeClassData(child, parent) {
          return {
            staticClass: concat(child.staticClass, parent.staticClass),
            class: isDef(child.class)
              ? [child.class, parent.class]
              : parent.class
          }
        }

        function renderClass(staticClass, dynamicClass) {
          if (isDef(staticClass) || isDef(dynamicClass)) {
            return concat(staticClass, stringifyClass(dynamicClass))
          }
          /* istanbul ignore next */

          return ''
        }

        function concat(a, b) {
          return a ? (b ? a + ' ' + b : a) : b || ''
        }

        function stringifyClass(value) {
          if (Array.isArray(value)) {
            return stringifyArray(value)
          }

          if (isObject(value)) {
            return stringifyObject(value)
          }

          if (typeof value === 'string') {
            return value
          }
          /* istanbul ignore next */

          return ''
        }

        function stringifyArray(value) {
          var res = ''
          var stringified

          for (var i = 0, l = value.length; i < l; i++) {
            if (
              isDef((stringified = stringifyClass(value[i]))) &&
              stringified !== ''
            ) {
              if (res) {
                res += ' '
              }

              res += stringified
            }
          }

          return res
        }

        function stringifyObject(value) {
          var res = ''

          for (var key in value) {
            if (value[key]) {
              if (res) {
                res += ' '
              }

              res += key
            }
          }

          return res
        }
        /*  */

        var namespaceMap = {
          svg: 'http://www.w3.org/2000/svg',
          math: 'http://www.w3.org/1998/Math/MathML'
        }
        var isHTMLTag = makeMap(
          'html,body,base,head,link,meta,style,title,' +
            'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
            'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
            'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
            's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
            'embed,object,param,source,canvas,script,noscript,del,ins,' +
            'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
            'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
            'output,progress,select,textarea,' +
            'details,dialog,menu,menuitem,summary,' +
            'content,element,shadow,template,blockquote,iframe,tfoot'
        ) // this map is intentionally selective, only covering SVG elements that may
        // contain child elements.

        var isSVG = makeMap(
          'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
            'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
            'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
          true
        )

        var isReservedTag = function(tag) {
          return isHTMLTag(tag) || isSVG(tag)
        }

        function getTagNamespace(tag) {
          if (isSVG(tag)) {
            return 'svg'
          } // basic support for MathML
          // note it doesn't support other MathML elements being component roots

          if (tag === 'math') {
            return 'math'
          }
        }

        var unknownElementCache = Object.create(null)

        function isUnknownElement(tag) {
          /* istanbul ignore if */
          if (!inBrowser) {
            return true
          }

          if (isReservedTag(tag)) {
            return false
          }

          tag = tag.toLowerCase()
          /* istanbul ignore if */

          if (unknownElementCache[tag] != null) {
            return unknownElementCache[tag]
          }

          var el = document.createElement(tag)

          if (tag.indexOf('-') > -1) {
            // http://stackoverflow.com/a/28210364/1070244
            return (unknownElementCache[tag] =
              el.constructor === window.HTMLUnknownElement ||
              el.constructor === window.HTMLElement)
          } else {
            return (unknownElementCache[tag] = /HTMLUnknownElement/.test(
              el.toString()
            ))
          }
        }

        var isTextInputType = makeMap(
          'text,number,password,search,email,tel,url'
        )
        /*  */

        /**
         * Query an element selector if it's not an element already.
         */

        function query(el) {
          if (typeof el === 'string') {
            var selected = document.querySelector(el)

            if (!selected) {
              'development' !== 'production' &&
                warn('Cannot find element: ' + el)
              return document.createElement('div')
            }

            return selected
          } else {
            return el
          }
        }
        /*  */

        function createElement$1(tagName, vnode) {
          var elm = document.createElement(tagName)

          if (tagName !== 'select') {
            return elm
          } // false or null will remove the attribute but undefined will not

          if (
            vnode.data &&
            vnode.data.attrs &&
            vnode.data.attrs.multiple !== undefined
          ) {
            elm.setAttribute('multiple', 'multiple')
          }

          return elm
        }

        function createElementNS(namespace, tagName) {
          return document.createElementNS(namespaceMap[namespace], tagName)
        }

        function createTextNode(text) {
          return document.createTextNode(text)
        }

        function createComment(text) {
          return document.createComment(text)
        }

        function insertBefore(parentNode, newNode, referenceNode) {
          parentNode.insertBefore(newNode, referenceNode)
        }

        function removeChild(node, child) {
          node.removeChild(child)
        }

        function appendChild(node, child) {
          node.appendChild(child)
        }

        function parentNode(node) {
          return node.parentNode
        }

        function nextSibling(node) {
          return node.nextSibling
        }

        function tagName(node) {
          return node.tagName
        }

        function setTextContent(node, text) {
          node.textContent = text
        }

        function setStyleScope(node, scopeId) {
          node.setAttribute(scopeId, '')
        }

        var nodeOps =
          /*#__PURE__*/
          Object.freeze({
            createElement: createElement$1,
            createElementNS: createElementNS,
            createTextNode: createTextNode,
            createComment: createComment,
            insertBefore: insertBefore,
            removeChild: removeChild,
            appendChild: appendChild,
            parentNode: parentNode,
            nextSibling: nextSibling,
            tagName: tagName,
            setTextContent: setTextContent,
            setStyleScope: setStyleScope
          })
        /*  */

        var ref = {
          create: function create(_, vnode) {
            registerRef(vnode)
          },
          update: function update(oldVnode, vnode) {
            if (oldVnode.data.ref !== vnode.data.ref) {
              registerRef(oldVnode, true)
              registerRef(vnode)
            }
          },
          destroy: function destroy(vnode) {
            registerRef(vnode, true)
          }
        }

        function registerRef(vnode, isRemoval) {
          var key = vnode.data.ref

          if (!isDef(key)) {
            return
          }

          var vm = vnode.context
          var ref = vnode.componentInstance || vnode.elm
          var refs = vm.$refs

          if (isRemoval) {
            if (Array.isArray(refs[key])) {
              remove(refs[key], ref)
            } else if (refs[key] === ref) {
              refs[key] = undefined
            }
          } else {
            if (vnode.data.refInFor) {
              if (!Array.isArray(refs[key])) {
                refs[key] = [ref]
              } else if (refs[key].indexOf(ref) < 0) {
                // $flow-disable-line
                refs[key].push(ref)
              }
            } else {
              refs[key] = ref
            }
          }
        }
        /**
         * Virtual DOM patching algorithm based on Snabbdom by
         * Simon Friis Vindum (@paldepind)
         * Licensed under the MIT License
         * https://github.com/paldepind/snabbdom/blob/master/LICENSE
         *
         * modified by Evan You (@yyx990803)
         *
         * Not type-checking this because this file is perf-critical and the cost
         * of making flow understand it is not worth it.
         */

        var emptyNode = new VNode('', {}, [])
        var hooks = ['create', 'activate', 'update', 'remove', 'destroy']

        function sameVnode(a, b) {
          return (
            a.key === b.key &&
            ((a.tag === b.tag &&
              a.isComment === b.isComment &&
              isDef(a.data) === isDef(b.data) &&
              sameInputType(a, b)) ||
              (isTrue(a.isAsyncPlaceholder) &&
                a.asyncFactory === b.asyncFactory &&
                isUndef(b.asyncFactory.error)))
          )
        }

        function sameInputType(a, b) {
          if (a.tag !== 'input') {
            return true
          }

          var i
          var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type
          var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type
          return (
            typeA === typeB ||
            (isTextInputType(typeA) && isTextInputType(typeB))
          )
        }

        function createKeyToOldIdx(children, beginIdx, endIdx) {
          var i, key
          var map = {}

          for (i = beginIdx; i <= endIdx; ++i) {
            key = children[i].key

            if (isDef(key)) {
              map[key] = i
            }
          }

          return map
        }

        function createPatchFunction(backend) {
          var i, j
          var cbs = {}
          var modules = backend.modules
          var nodeOps = backend.nodeOps

          for (i = 0; i < hooks.length; ++i) {
            cbs[hooks[i]] = []

            for (j = 0; j < modules.length; ++j) {
              if (isDef(modules[j][hooks[i]])) {
                cbs[hooks[i]].push(modules[j][hooks[i]])
              }
            }
          }

          function emptyNodeAt(elm) {
            return new VNode(
              nodeOps.tagName(elm).toLowerCase(),
              {},
              [],
              undefined,
              elm
            )
          }

          function createRmCb(childElm, listeners) {
            function remove$$1() {
              if (--remove$$1.listeners === 0) {
                removeNode(childElm)
              }
            }

            remove$$1.listeners = listeners
            return remove$$1
          }

          function removeNode(el) {
            var parent = nodeOps.parentNode(el) // element may have already been removed due to v-html / v-text

            if (isDef(parent)) {
              nodeOps.removeChild(parent, el)
            }
          }

          function isUnknownElement$$1(vnode, inVPre) {
            return (
              !inVPre &&
              !vnode.ns &&
              !(
                config.ignoredElements.length &&
                config.ignoredElements.some(function(ignore) {
                  return isRegExp(ignore)
                    ? ignore.test(vnode.tag)
                    : ignore === vnode.tag
                })
              ) &&
              config.isUnknownElement(vnode.tag)
            )
          }

          var creatingElmInVPre = 0

          function createElm(
            vnode,
            insertedVnodeQueue,
            parentElm,
            refElm,
            nested,
            ownerArray,
            index
          ) {
            if (isDef(vnode.elm) && isDef(ownerArray)) {
              // This vnode was used in a previous render!
              // now it's used as a new node, overwriting its elm would cause
              // potential patch errors down the road when it's used as an insertion
              // reference node. Instead, we clone the node on-demand before creating
              // associated DOM element for it.
              vnode = ownerArray[index] = cloneVNode(vnode)
            }

            vnode.isRootInsert = !nested // for transition enter check

            if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
              return
            }

            var data = vnode.data
            var children = vnode.children
            var tag = vnode.tag

            if (isDef(tag)) {
              if ('development' !== 'production') {
                if (data && data.pre) {
                  creatingElmInVPre++
                }

                if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
                  warn(
                    'Unknown custom element: <' +
                      tag +
                      '> - did you ' +
                      'register the component correctly? For recursive components, ' +
                      'make sure to provide the "name" option.',
                    vnode.context
                  )
                }
              }

              vnode.elm = vnode.ns
                ? nodeOps.createElementNS(vnode.ns, tag)
                : nodeOps.createElement(tag, vnode)
              setScope(vnode)
              /* istanbul ignore if */

              {
                createChildren(vnode, children, insertedVnodeQueue)

                if (isDef(data)) {
                  invokeCreateHooks(vnode, insertedVnodeQueue)
                }

                insert(parentElm, vnode.elm, refElm)
              }

              if ('development' !== 'production' && data && data.pre) {
                creatingElmInVPre--
              }
            } else if (isTrue(vnode.isComment)) {
              vnode.elm = nodeOps.createComment(vnode.text)
              insert(parentElm, vnode.elm, refElm)
            } else {
              vnode.elm = nodeOps.createTextNode(vnode.text)
              insert(parentElm, vnode.elm, refElm)
            }
          }

          function createComponent(
            vnode,
            insertedVnodeQueue,
            parentElm,
            refElm
          ) {
            var i = vnode.data

            if (isDef(i)) {
              var isReactivated = isDef(vnode.componentInstance) && i.keepAlive

              if (isDef((i = i.hook)) && isDef((i = i.init))) {
                i(
                  vnode,
                  false
                  /* hydrating */
                )
              } // after calling the init hook, if the vnode is a child component
              // it should've created a child instance and mounted it. the child
              // component also has set the placeholder vnode's elm.
              // in that case we can just return the element and be done.

              if (isDef(vnode.componentInstance)) {
                initComponent(vnode, insertedVnodeQueue)
                insert(parentElm, vnode.elm, refElm)

                if (isTrue(isReactivated)) {
                  reactivateComponent(
                    vnode,
                    insertedVnodeQueue,
                    parentElm,
                    refElm
                  )
                }

                return true
              }
            }
          }

          function initComponent(vnode, insertedVnodeQueue) {
            if (isDef(vnode.data.pendingInsert)) {
              insertedVnodeQueue.push.apply(
                insertedVnodeQueue,
                vnode.data.pendingInsert
              )
              vnode.data.pendingInsert = null
            }

            vnode.elm = vnode.componentInstance.$el

            if (isPatchable(vnode)) {
              invokeCreateHooks(vnode, insertedVnodeQueue)
              setScope(vnode)
            } else {
              // empty component root.
              // skip all element-related modules except for ref (#3455)
              registerRef(vnode) // make sure to invoke the insert hook

              insertedVnodeQueue.push(vnode)
            }
          }

          function reactivateComponent(
            vnode,
            insertedVnodeQueue,
            parentElm,
            refElm
          ) {
            var i // hack for #4339: a reactivated component with inner transition
            // does not trigger because the inner node's created hooks are not called
            // again. It's not ideal to involve module-specific logic in here but
            // there doesn't seem to be a better way to do it.

            var innerNode = vnode

            while (innerNode.componentInstance) {
              innerNode = innerNode.componentInstance._vnode

              if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {
                for (i = 0; i < cbs.activate.length; ++i) {
                  cbs.activate[i](emptyNode, innerNode)
                }

                insertedVnodeQueue.push(innerNode)
                break
              }
            } // unlike a newly created component,
            // a reactivated keep-alive component doesn't insert itself

            insert(parentElm, vnode.elm, refElm)
          }

          function insert(parent, elm, ref$$1) {
            if (isDef(parent)) {
              if (isDef(ref$$1)) {
                if (nodeOps.parentNode(ref$$1) === parent) {
                  nodeOps.insertBefore(parent, elm, ref$$1)
                }
              } else {
                nodeOps.appendChild(parent, elm)
              }
            }
          }

          function createChildren(vnode, children, insertedVnodeQueue) {
            if (Array.isArray(children)) {
              if ('development' !== 'production') {
                checkDuplicateKeys(children)
              }

              for (var i = 0; i < children.length; ++i) {
                createElm(
                  children[i],
                  insertedVnodeQueue,
                  vnode.elm,
                  null,
                  true,
                  children,
                  i
                )
              }
            } else if (isPrimitive(vnode.text)) {
              nodeOps.appendChild(
                vnode.elm,
                nodeOps.createTextNode(String(vnode.text))
              )
            }
          }

          function isPatchable(vnode) {
            while (vnode.componentInstance) {
              vnode = vnode.componentInstance._vnode
            }

            return isDef(vnode.tag)
          }

          function invokeCreateHooks(vnode, insertedVnodeQueue) {
            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
              cbs.create[i$1](emptyNode, vnode)
            }

            i = vnode.data.hook // Reuse variable

            if (isDef(i)) {
              if (isDef(i.create)) {
                i.create(emptyNode, vnode)
              }

              if (isDef(i.insert)) {
                insertedVnodeQueue.push(vnode)
              }
            }
          } // set scope id attribute for scoped CSS.
          // this is implemented as a special case to avoid the overhead
          // of going through the normal attribute patching process.

          function setScope(vnode) {
            var i

            if (isDef((i = vnode.fnScopeId))) {
              nodeOps.setStyleScope(vnode.elm, i)
            } else {
              var ancestor = vnode

              while (ancestor) {
                if (
                  isDef((i = ancestor.context)) &&
                  isDef((i = i.$options._scopeId))
                ) {
                  nodeOps.setStyleScope(vnode.elm, i)
                }

                ancestor = ancestor.parent
              }
            } // for slot content they should also get the scopeId from the host instance.

            if (
              isDef((i = activeInstance)) &&
              i !== vnode.context &&
              i !== vnode.fnContext &&
              isDef((i = i.$options._scopeId))
            ) {
              nodeOps.setStyleScope(vnode.elm, i)
            }
          }

          function addVnodes(
            parentElm,
            refElm,
            vnodes,
            startIdx,
            endIdx,
            insertedVnodeQueue
          ) {
            for (; startIdx <= endIdx; ++startIdx) {
              createElm(
                vnodes[startIdx],
                insertedVnodeQueue,
                parentElm,
                refElm,
                false,
                vnodes,
                startIdx
              )
            }
          }

          function invokeDestroyHook(vnode) {
            var i, j
            var data = vnode.data

            if (isDef(data)) {
              if (isDef((i = data.hook)) && isDef((i = i.destroy))) {
                i(vnode)
              }

              for (i = 0; i < cbs.destroy.length; ++i) {
                cbs.destroy[i](vnode)
              }
            }

            if (isDef((i = vnode.children))) {
              for (j = 0; j < vnode.children.length; ++j) {
                invokeDestroyHook(vnode.children[j])
              }
            }
          }

          function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
            for (; startIdx <= endIdx; ++startIdx) {
              var ch = vnodes[startIdx]

              if (isDef(ch)) {
                if (isDef(ch.tag)) {
                  removeAndInvokeRemoveHook(ch)
                  invokeDestroyHook(ch)
                } else {
                  // Text node
                  removeNode(ch.elm)
                }
              }
            }
          }

          function removeAndInvokeRemoveHook(vnode, rm) {
            if (isDef(rm) || isDef(vnode.data)) {
              var i
              var listeners = cbs.remove.length + 1

              if (isDef(rm)) {
                // we have a recursively passed down rm callback
                // increase the listeners count
                rm.listeners += listeners
              } else {
                // directly removing
                rm = createRmCb(vnode.elm, listeners)
              } // recursively invoke hooks on child component root node

              if (
                isDef((i = vnode.componentInstance)) &&
                isDef((i = i._vnode)) &&
                isDef(i.data)
              ) {
                removeAndInvokeRemoveHook(i, rm)
              }

              for (i = 0; i < cbs.remove.length; ++i) {
                cbs.remove[i](vnode, rm)
              }

              if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {
                i(vnode, rm)
              } else {
                rm()
              }
            } else {
              removeNode(vnode.elm)
            }
          }

          function updateChildren(
            parentElm,
            oldCh,
            newCh,
            insertedVnodeQueue,
            removeOnly
          ) {
            var oldStartIdx = 0
            var newStartIdx = 0
            var oldEndIdx = oldCh.length - 1
            var oldStartVnode = oldCh[0]
            var oldEndVnode = oldCh[oldEndIdx]
            var newEndIdx = newCh.length - 1
            var newStartVnode = newCh[0]
            var newEndVnode = newCh[newEndIdx]
            var oldKeyToIdx, idxInOld, vnodeToMove, refElm // removeOnly is a special flag used only by <transition-group>
            // to ensure removed elements stay in correct relative positions
            // during leaving transitions

            var canMove = !removeOnly

            if ('development' !== 'production') {
              checkDuplicateKeys(newCh)
            }

            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
              if (isUndef(oldStartVnode)) {
                oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
              } else if (isUndef(oldEndVnode)) {
                oldEndVnode = oldCh[--oldEndIdx]
              } else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(
                  oldStartVnode,
                  newStartVnode,
                  insertedVnodeQueue,
                  newCh,
                  newStartIdx
                )
                oldStartVnode = oldCh[++oldStartIdx]
                newStartVnode = newCh[++newStartIdx]
              } else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(
                  oldEndVnode,
                  newEndVnode,
                  insertedVnodeQueue,
                  newCh,
                  newEndIdx
                )
                oldEndVnode = oldCh[--oldEndIdx]
                newEndVnode = newCh[--newEndIdx]
              } else if (sameVnode(oldStartVnode, newEndVnode)) {
                // Vnode moved right
                patchVnode(
                  oldStartVnode,
                  newEndVnode,
                  insertedVnodeQueue,
                  newCh,
                  newEndIdx
                )
                canMove &&
                  nodeOps.insertBefore(
                    parentElm,
                    oldStartVnode.elm,
                    nodeOps.nextSibling(oldEndVnode.elm)
                  )
                oldStartVnode = oldCh[++oldStartIdx]
                newEndVnode = newCh[--newEndIdx]
              } else if (sameVnode(oldEndVnode, newStartVnode)) {
                // Vnode moved left
                patchVnode(
                  oldEndVnode,
                  newStartVnode,
                  insertedVnodeQueue,
                  newCh,
                  newStartIdx
                )
                canMove &&
                  nodeOps.insertBefore(
                    parentElm,
                    oldEndVnode.elm,
                    oldStartVnode.elm
                  )
                oldEndVnode = oldCh[--oldEndIdx]
                newStartVnode = newCh[++newStartIdx]
              } else {
                if (isUndef(oldKeyToIdx)) {
                  oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
                }

                idxInOld = isDef(newStartVnode.key)
                  ? oldKeyToIdx[newStartVnode.key]
                  : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)

                if (isUndef(idxInOld)) {
                  // New element
                  createElm(
                    newStartVnode,
                    insertedVnodeQueue,
                    parentElm,
                    oldStartVnode.elm,
                    false,
                    newCh,
                    newStartIdx
                  )
                } else {
                  vnodeToMove = oldCh[idxInOld]

                  if (sameVnode(vnodeToMove, newStartVnode)) {
                    patchVnode(
                      vnodeToMove,
                      newStartVnode,
                      insertedVnodeQueue,
                      newCh,
                      newStartIdx
                    )
                    oldCh[idxInOld] = undefined
                    canMove &&
                      nodeOps.insertBefore(
                        parentElm,
                        vnodeToMove.elm,
                        oldStartVnode.elm
                      )
                  } else {
                    // same key but different element. treat as new element
                    createElm(
                      newStartVnode,
                      insertedVnodeQueue,
                      parentElm,
                      oldStartVnode.elm,
                      false,
                      newCh,
                      newStartIdx
                    )
                  }
                }

                newStartVnode = newCh[++newStartIdx]
              }
            }

            if (oldStartIdx > oldEndIdx) {
              refElm = isUndef(newCh[newEndIdx + 1])
                ? null
                : newCh[newEndIdx + 1].elm
              addVnodes(
                parentElm,
                refElm,
                newCh,
                newStartIdx,
                newEndIdx,
                insertedVnodeQueue
              )
            } else if (newStartIdx > newEndIdx) {
              removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
            }
          }

          function checkDuplicateKeys(children) {
            var seenKeys = {}

            for (var i = 0; i < children.length; i++) {
              var vnode = children[i]
              var key = vnode.key

              if (isDef(key)) {
                if (seenKeys[key]) {
                  warn(
                    "Duplicate keys detected: '" +
                      key +
                      "'. This may cause an update error.",
                    vnode.context
                  )
                } else {
                  seenKeys[key] = true
                }
              }
            }
          }

          function findIdxInOld(node, oldCh, start, end) {
            for (var i = start; i < end; i++) {
              var c = oldCh[i]

              if (isDef(c) && sameVnode(node, c)) {
                return i
              }
            }
          }

          function patchVnode(
            oldVnode,
            vnode,
            insertedVnodeQueue,
            ownerArray,
            index,
            removeOnly
          ) {
            if (oldVnode === vnode) {
              return
            }

            if (isDef(vnode.elm) && isDef(ownerArray)) {
              // clone reused vnode
              vnode = ownerArray[index] = cloneVNode(vnode)
            }

            var elm = (vnode.elm = oldVnode.elm)

            if (isTrue(oldVnode.isAsyncPlaceholder)) {
              if (isDef(vnode.asyncFactory.resolved)) {
                hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
              } else {
                vnode.isAsyncPlaceholder = true
              }

              return
            } // reuse element for static trees.
            // note we only do this if the vnode is cloned -
            // if the new node is not cloned it means the render functions have been
            // reset by the hot-reload-api and we need to do a proper re-render.

            if (
              isTrue(vnode.isStatic) &&
              isTrue(oldVnode.isStatic) &&
              vnode.key === oldVnode.key &&
              (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
            ) {
              vnode.componentInstance = oldVnode.componentInstance
              return
            }

            var i
            var data = vnode.data

            if (
              isDef(data) &&
              isDef((i = data.hook)) &&
              isDef((i = i.prepatch))
            ) {
              i(oldVnode, vnode)
            }

            var oldCh = oldVnode.children
            var ch = vnode.children

            if (isDef(data) && isPatchable(vnode)) {
              for (i = 0; i < cbs.update.length; ++i) {
                cbs.update[i](oldVnode, vnode)
              }

              if (isDef((i = data.hook)) && isDef((i = i.update))) {
                i(oldVnode, vnode)
              }
            }

            if (isUndef(vnode.text)) {
              if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch) {
                  updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)
                }
              } else if (isDef(ch)) {
                if ('development' !== 'production') {
                  checkDuplicateKeys(ch)
                }

                if (isDef(oldVnode.text)) {
                  nodeOps.setTextContent(elm, '')
                }

                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
              } else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1)
              } else if (isDef(oldVnode.text)) {
                nodeOps.setTextContent(elm, '')
              }
            } else if (oldVnode.text !== vnode.text) {
              nodeOps.setTextContent(elm, vnode.text)
            }

            if (isDef(data)) {
              if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {
                i(oldVnode, vnode)
              }
            }
          }

          function invokeInsertHook(vnode, queue, initial) {
            // delay insert hooks for component root nodes, invoke them after the
            // element is really inserted
            if (isTrue(initial) && isDef(vnode.parent)) {
              vnode.parent.data.pendingInsert = queue
            } else {
              for (var i = 0; i < queue.length; ++i) {
                queue[i].data.hook.insert(queue[i])
              }
            }
          }

          var hydrationBailed = false // list of modules that can skip create hook during hydration because they
          // are already rendered on the client or has no need for initialization
          // Note: style is excluded because it relies on initial clone for future
          // deep updates (#7063).

          var isRenderedModule = makeMap(
            'attrs,class,staticClass,staticStyle,key'
          ) // Note: this is a browser-only function so we can assume elms are DOM nodes.

          function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
            var i
            var tag = vnode.tag
            var data = vnode.data
            var children = vnode.children
            inVPre = inVPre || (data && data.pre)
            vnode.elm = elm

            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
              vnode.isAsyncPlaceholder = true
              return true
            } // assert node match

            if ('development' !== 'production') {
              if (!assertNodeMatch(elm, vnode, inVPre)) {
                return false
              }
            }

            if (isDef(data)) {
              if (isDef((i = data.hook)) && isDef((i = i.init))) {
                i(
                  vnode,
                  true
                  /* hydrating */
                )
              }

              if (isDef((i = vnode.componentInstance))) {
                // child component. it should have hydrated its own tree.
                initComponent(vnode, insertedVnodeQueue)
                return true
              }
            }

            if (isDef(tag)) {
              if (isDef(children)) {
                // empty element, allow client to pick up and populate children
                if (!elm.hasChildNodes()) {
                  createChildren(vnode, children, insertedVnodeQueue)
                } else {
                  // v-html and domProps: innerHTML
                  if (
                    isDef((i = data)) &&
                    isDef((i = i.domProps)) &&
                    isDef((i = i.innerHTML))
                  ) {
                    if (i !== elm.innerHTML) {
                      /* istanbul ignore if */
                      if (
                        'development' !== 'production' &&
                        typeof console !== 'undefined' &&
                        !hydrationBailed
                      ) {
                        hydrationBailed = true
                        console.warn('Parent: ', elm)
                        console.warn('server innerHTML: ', i)
                        console.warn('client innerHTML: ', elm.innerHTML)
                      }

                      return false
                    }
                  } else {
                    // iterate and compare children lists
                    var childrenMatch = true
                    var childNode = elm.firstChild

                    for (var i$1 = 0; i$1 < children.length; i$1++) {
                      if (
                        !childNode ||
                        !hydrate(
                          childNode,
                          children[i$1],
                          insertedVnodeQueue,
                          inVPre
                        )
                      ) {
                        childrenMatch = false
                        break
                      }

                      childNode = childNode.nextSibling
                    } // if childNode is not null, it means the actual childNodes list is
                    // longer than the virtual children list.

                    if (!childrenMatch || childNode) {
                      /* istanbul ignore if */
                      if (
                        'development' !== 'production' &&
                        typeof console !== 'undefined' &&
                        !hydrationBailed
                      ) {
                        hydrationBailed = true
                        console.warn('Parent: ', elm)
                        console.warn(
                          'Mismatching childNodes vs. VNodes: ',
                          elm.childNodes,
                          children
                        )
                      }

                      return false
                    }
                  }
                }
              }

              if (isDef(data)) {
                var fullInvoke = false

                for (var key in data) {
                  if (!isRenderedModule(key)) {
                    fullInvoke = true
                    invokeCreateHooks(vnode, insertedVnodeQueue)
                    break
                  }
                }

                if (!fullInvoke && data['class']) {
                  // ensure collecting deps for deep class bindings for future updates
                  traverse(data['class'])
                }
              }
            } else if (elm.data !== vnode.text) {
              elm.data = vnode.text
            }

            return true
          }

          function assertNodeMatch(node, vnode, inVPre) {
            if (isDef(vnode.tag)) {
              return (
                vnode.tag.indexOf('vue-component') === 0 ||
                (!isUnknownElement$$1(vnode, inVPre) &&
                  vnode.tag.toLowerCase() ===
                    (node.tagName && node.tagName.toLowerCase()))
              )
            } else {
              return node.nodeType === (vnode.isComment ? 8 : 3)
            }
          }

          return function patch(oldVnode, vnode, hydrating, removeOnly) {
            if (isUndef(vnode)) {
              if (isDef(oldVnode)) {
                invokeDestroyHook(oldVnode)
              }

              return
            }

            var isInitialPatch = false
            var insertedVnodeQueue = []

            if (isUndef(oldVnode)) {
              // empty mount (likely as component), create new root element
              isInitialPatch = true
              createElm(vnode, insertedVnodeQueue)
            } else {
              var isRealElement = isDef(oldVnode.nodeType)

              if (!isRealElement && sameVnode(oldVnode, vnode)) {
                // patch existing root node
                patchVnode(
                  oldVnode,
                  vnode,
                  insertedVnodeQueue,
                  null,
                  null,
                  removeOnly
                )
              } else {
                if (isRealElement) {
                  // mounting to a real element
                  // check if this is server-rendered content and if we can perform
                  // a successful hydration.
                  if (
                    oldVnode.nodeType === 1 &&
                    oldVnode.hasAttribute(SSR_ATTR)
                  ) {
                    oldVnode.removeAttribute(SSR_ATTR)
                    hydrating = true
                  }

                  if (isTrue(hydrating)) {
                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                      invokeInsertHook(vnode, insertedVnodeQueue, true)
                      return oldVnode
                    } else if ('development' !== 'production') {
                      warn(
                        'The client-side rendered virtual DOM tree is not matching ' +
                          'server-rendered content. This is likely caused by incorrect ' +
                          'HTML markup, for example nesting block-level elements inside ' +
                          '<p>, or missing <tbody>. Bailing hydration and performing ' +
                          'full client-side render.'
                      )
                    }
                  } // either not server-rendered, or hydration failed.
                  // create an empty node and replace it

                  oldVnode = emptyNodeAt(oldVnode)
                } // replacing existing element

                var oldElm = oldVnode.elm
                var parentElm = nodeOps.parentNode(oldElm) // create new node

                createElm(
                  vnode,
                  insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
                  // leaving transition. Only happens when combining transition +
                  // keep-alive + HOCs. (#4590)
                  oldElm._leaveCb ? null : parentElm,
                  nodeOps.nextSibling(oldElm)
                ) // update parent placeholder node element, recursively

                if (isDef(vnode.parent)) {
                  var ancestor = vnode.parent
                  var patchable = isPatchable(vnode)

                  while (ancestor) {
                    for (var i = 0; i < cbs.destroy.length; ++i) {
                      cbs.destroy[i](ancestor)
                    }

                    ancestor.elm = vnode.elm

                    if (patchable) {
                      for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                        cbs.create[i$1](emptyNode, ancestor)
                      } // #6513
                      // invoke insert hooks that may have been merged by create hooks.
                      // e.g. for directives that uses the "inserted" hook.

                      var insert = ancestor.data.hook.insert

                      if (insert.merged) {
                        // start at index 1 to avoid re-invoking component mounted hook
                        for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                          insert.fns[i$2]()
                        }
                      }
                    } else {
                      registerRef(ancestor)
                    }

                    ancestor = ancestor.parent
                  }
                } // destroy old node

                if (isDef(parentElm)) {
                  removeVnodes(parentElm, [oldVnode], 0, 0)
                } else if (isDef(oldVnode.tag)) {
                  invokeDestroyHook(oldVnode)
                }
              }
            }

            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
            return vnode.elm
          }
        }
        /*  */

        var directives = {
          create: updateDirectives,
          update: updateDirectives,
          destroy: function unbindDirectives(vnode) {
            updateDirectives(vnode, emptyNode)
          }
        }

        function updateDirectives(oldVnode, vnode) {
          if (oldVnode.data.directives || vnode.data.directives) {
            _update(oldVnode, vnode)
          }
        }

        function _update(oldVnode, vnode) {
          var isCreate = oldVnode === emptyNode
          var isDestroy = vnode === emptyNode
          var oldDirs = normalizeDirectives$1(
            oldVnode.data.directives,
            oldVnode.context
          )
          var newDirs = normalizeDirectives$1(
            vnode.data.directives,
            vnode.context
          )
          var dirsWithInsert = []
          var dirsWithPostpatch = []
          var key, oldDir, dir

          for (key in newDirs) {
            oldDir = oldDirs[key]
            dir = newDirs[key]

            if (!oldDir) {
              // new directive, bind
              callHook$1(dir, 'bind', vnode, oldVnode)

              if (dir.def && dir.def.inserted) {
                dirsWithInsert.push(dir)
              }
            } else {
              // existing directive, update
              dir.oldValue = oldDir.value
              callHook$1(dir, 'update', vnode, oldVnode)

              if (dir.def && dir.def.componentUpdated) {
                dirsWithPostpatch.push(dir)
              }
            }
          }

          if (dirsWithInsert.length) {
            var callInsert = function() {
              for (var i = 0; i < dirsWithInsert.length; i++) {
                callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode)
              }
            }

            if (isCreate) {
              mergeVNodeHook(vnode, 'insert', callInsert)
            } else {
              callInsert()
            }
          }

          if (dirsWithPostpatch.length) {
            mergeVNodeHook(vnode, 'postpatch', function() {
              for (var i = 0; i < dirsWithPostpatch.length; i++) {
                callHook$1(
                  dirsWithPostpatch[i],
                  'componentUpdated',
                  vnode,
                  oldVnode
                )
              }
            })
          }

          if (!isCreate) {
            for (key in oldDirs) {
              if (!newDirs[key]) {
                // no longer present, unbind
                callHook$1(
                  oldDirs[key],
                  'unbind',
                  oldVnode,
                  oldVnode,
                  isDestroy
                )
              }
            }
          }
        }

        var emptyModifiers = Object.create(null)

        function normalizeDirectives$1(dirs, vm) {
          var res = Object.create(null)

          if (!dirs) {
            // $flow-disable-line
            return res
          }

          var i, dir

          for (i = 0; i < dirs.length; i++) {
            dir = dirs[i]

            if (!dir.modifiers) {
              // $flow-disable-line
              dir.modifiers = emptyModifiers
            }

            res[getRawDirName(dir)] = dir
            dir.def = resolveAsset(vm.$options, 'directives', dir.name, true)
          } // $flow-disable-line

          return res
        }

        function getRawDirName(dir) {
          return (
            dir.rawName ||
            dir.name + '.' + Object.keys(dir.modifiers || {}).join('.')
          )
        }

        function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
          var fn = dir.def && dir.def[hook]

          if (fn) {
            try {
              fn(vnode.elm, dir, vnode, oldVnode, isDestroy)
            } catch (e) {
              handleError(
                e,
                vnode.context,
                'directive ' + dir.name + ' ' + hook + ' hook'
              )
            }
          }
        }

        var baseModules = [ref, directives]
        /*  */

        function updateAttrs(oldVnode, vnode) {
          var opts = vnode.componentOptions

          if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
            return
          }

          if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
            return
          }

          var key, cur, old
          var elm = vnode.elm
          var oldAttrs = oldVnode.data.attrs || {}
          var attrs = vnode.data.attrs || {} // clone observed objects, as the user probably wants to mutate it

          if (isDef(attrs.__ob__)) {
            attrs = vnode.data.attrs = extend({}, attrs)
          }

          for (key in attrs) {
            cur = attrs[key]
            old = oldAttrs[key]

            if (old !== cur) {
              setAttr(elm, key, cur)
            }
          } // #4391: in IE9, setting type can reset value for input[type=radio]
          // #6666: IE/Edge forces progress value down to 1 before setting a max

          /* istanbul ignore if */

          if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
            setAttr(elm, 'value', attrs.value)
          }

          for (key in oldAttrs) {
            if (isUndef(attrs[key])) {
              if (isXlink(key)) {
                elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
              } else if (!isEnumeratedAttr(key)) {
                elm.removeAttribute(key)
              }
            }
          }
        }

        function setAttr(el, key, value) {
          if (el.tagName.indexOf('-') > -1) {
            baseSetAttr(el, key, value)
          } else if (isBooleanAttr(key)) {
            // set attribute for blank value
            // e.g. <option disabled>Select one</option>
            if (isFalsyAttrValue(value)) {
              el.removeAttribute(key)
            } else {
              // technically allowfullscreen is a boolean attribute for <iframe>,
              // but Flash expects a value of "true" when used on <embed> tag
              value =
                key === 'allowfullscreen' && el.tagName === 'EMBED'
                  ? 'true'
                  : key
              el.setAttribute(key, value)
            }
          } else if (isEnumeratedAttr(key)) {
            el.setAttribute(
              key,
              isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true'
            )
          } else if (isXlink(key)) {
            if (isFalsyAttrValue(value)) {
              el.removeAttributeNS(xlinkNS, getXlinkProp(key))
            } else {
              el.setAttributeNS(xlinkNS, key, value)
            }
          } else {
            baseSetAttr(el, key, value)
          }
        }

        function baseSetAttr(el, key, value) {
          if (isFalsyAttrValue(value)) {
            el.removeAttribute(key)
          } else {
            // #7138: IE10 & 11 fires input event when setting placeholder on
            // <textarea>... block the first input event and remove the blocker
            // immediately.

            /* istanbul ignore if */
            if (
              isIE &&
              !isIE9 &&
              (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
              key === 'placeholder' &&
              !el.__ieph
            ) {
              var blocker = function(e) {
                e.stopImmediatePropagation()
                el.removeEventListener('input', blocker)
              }

              el.addEventListener('input', blocker) // $flow-disable-line

              el.__ieph = true
              /* IE placeholder patched */
            }

            el.setAttribute(key, value)
          }
        }

        var attrs = {
          create: updateAttrs,
          update: updateAttrs
        }
        /*  */

        function updateClass(oldVnode, vnode) {
          var el = vnode.elm
          var data = vnode.data
          var oldData = oldVnode.data

          if (
            isUndef(data.staticClass) &&
            isUndef(data.class) &&
            (isUndef(oldData) ||
              (isUndef(oldData.staticClass) && isUndef(oldData.class)))
          ) {
            return
          }

          var cls = genClassForVnode(vnode) // handle transition classes

          var transitionClass = el._transitionClasses

          if (isDef(transitionClass)) {
            cls = concat(cls, stringifyClass(transitionClass))
          } // set the class

          if (cls !== el._prevClass) {
            el.setAttribute('class', cls)
            el._prevClass = cls
          }
        }

        var klass = {
          create: updateClass,
          update: updateClass
        }
        /*  */

        /*  */

        /*  */

        /*  */
        // in some cases, the event used has to be determined at runtime
        // so we used some reserved tokens during compile.

        var RANGE_TOKEN = '__r'
        var CHECKBOX_RADIO_TOKEN = '__c'
        /*  */
        // normalize v-model event tokens that can only be determined at runtime.
        // it's important to place the event as the first in the array because
        // the whole point is ensuring the v-model callback gets called before
        // user-attached handlers.

        function normalizeEvents(on) {
          /* istanbul ignore if */
          if (isDef(on[RANGE_TOKEN])) {
            // IE input[type=range] only supports `change` event
            var event = isIE ? 'change' : 'input'
            on[event] = [].concat(on[RANGE_TOKEN], on[event] || [])
            delete on[RANGE_TOKEN]
          } // This was originally intended to fix #4521 but no longer necessary
          // after 2.5. Keeping it for backwards compat with generated code from < 2.4

          /* istanbul ignore if */

          if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
            on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || [])
            delete on[CHECKBOX_RADIO_TOKEN]
          }
        }

        var target$1

        function createOnceHandler$1(event, handler, capture) {
          var _target = target$1 // save current target element in closure

          return function onceHandler() {
            var res = handler.apply(null, arguments)

            if (res !== null) {
              remove$2(event, onceHandler, capture, _target)
            }
          }
        }

        function add$1(event, handler, capture, passive) {
          handler = withMacroTask(handler)
          target$1.addEventListener(
            event,
            handler,
            supportsPassive
              ? {
                  capture: capture,
                  passive: passive
                }
              : capture
          )
        }

        function remove$2(event, handler, capture, _target) {
          ;(_target || target$1).removeEventListener(
            event,
            handler._withTask || handler,
            capture
          )
        }

        function updateDOMListeners(oldVnode, vnode) {
          if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
            return
          }

          var on = vnode.data.on || {}
          var oldOn = oldVnode.data.on || {}
          target$1 = vnode.elm
          normalizeEvents(on)
          updateListeners(
            on,
            oldOn,
            add$1,
            remove$2,
            createOnceHandler$1,
            vnode.context
          )
          target$1 = undefined
        }

        var events = {
          create: updateDOMListeners,
          update: updateDOMListeners
        }
        /*  */

        function updateDOMProps(oldVnode, vnode) {
          if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
            return
          }

          var key, cur
          var elm = vnode.elm
          var oldProps = oldVnode.data.domProps || {}
          var props = vnode.data.domProps || {} // clone observed objects, as the user probably wants to mutate it

          if (isDef(props.__ob__)) {
            props = vnode.data.domProps = extend({}, props)
          }

          for (key in oldProps) {
            if (isUndef(props[key])) {
              elm[key] = ''
            }
          }

          for (key in props) {
            cur = props[key] // ignore children if the node has textContent or innerHTML,
            // as these will throw away existing DOM nodes and cause removal errors
            // on subsequent patches (#3360)

            if (key === 'textContent' || key === 'innerHTML') {
              if (vnode.children) {
                vnode.children.length = 0
              }

              if (cur === oldProps[key]) {
                continue
              } // #6601 work around Chrome version <= 55 bug where single textNode
              // replaced by innerHTML/textContent retains its parentNode property

              if (elm.childNodes.length === 1) {
                elm.removeChild(elm.childNodes[0])
              }
            }

            if (key === 'value') {
              // store value as _value as well since
              // non-string values will be stringified
              elm._value = cur // avoid resetting cursor position when value is the same

              var strCur = isUndef(cur) ? '' : String(cur)

              if (shouldUpdateValue(elm, strCur)) {
                elm.value = strCur
              }
            } else {
              elm[key] = cur
            }
          }
        } // check platforms/web/util/attrs.js acceptValue

        function shouldUpdateValue(elm, checkVal) {
          return (
            !elm.composing &&
            (elm.tagName === 'OPTION' ||
              isNotInFocusAndDirty(elm, checkVal) ||
              isDirtyWithModifiers(elm, checkVal))
          )
        }

        function isNotInFocusAndDirty(elm, checkVal) {
          // return true when textbox (.number and .trim) loses focus and its value is
          // not equal to the updated value
          var notInFocus = true // #6157
          // work around IE bug when accessing document.activeElement in an iframe

          try {
            notInFocus = document.activeElement !== elm
          } catch (e) {}

          return notInFocus && elm.value !== checkVal
        }

        function isDirtyWithModifiers(elm, newVal) {
          var value = elm.value
          var modifiers = elm._vModifiers // injected by v-model runtime

          if (isDef(modifiers)) {
            if (modifiers.lazy) {
              // inputs with lazy should only be updated when not in focus
              return false
            }

            if (modifiers.number) {
              return toNumber(value) !== toNumber(newVal)
            }

            if (modifiers.trim) {
              return value.trim() !== newVal.trim()
            }
          }

          return value !== newVal
        }

        var domProps = {
          create: updateDOMProps,
          update: updateDOMProps
        }
        /*  */

        var parseStyleText = cached(function(cssText) {
          var res = {}
          var listDelimiter = /;(?![^(]*\))/g
          var propertyDelimiter = /:(.+)/
          cssText.split(listDelimiter).forEach(function(item) {
            if (item) {
              var tmp = item.split(propertyDelimiter)
              tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim())
            }
          })
          return res
        }) // merge static and dynamic style data on the same vnode

        function normalizeStyleData(data) {
          var style = normalizeStyleBinding(data.style) // static style is pre-processed into an object during compilation
          // and is always a fresh object, so it's safe to merge into it

          return data.staticStyle ? extend(data.staticStyle, style) : style
        } // normalize possible array / string values into Object

        function normalizeStyleBinding(bindingStyle) {
          if (Array.isArray(bindingStyle)) {
            return toObject(bindingStyle)
          }

          if (typeof bindingStyle === 'string') {
            return parseStyleText(bindingStyle)
          }

          return bindingStyle
        }
        /**
         * parent component style should be after child's
         * so that parent component's style could override it
         */

        function getStyle(vnode, checkChild) {
          var res = {}
          var styleData

          if (checkChild) {
            var childNode = vnode

            while (childNode.componentInstance) {
              childNode = childNode.componentInstance._vnode

              if (
                childNode &&
                childNode.data &&
                (styleData = normalizeStyleData(childNode.data))
              ) {
                extend(res, styleData)
              }
            }
          }

          if ((styleData = normalizeStyleData(vnode.data))) {
            extend(res, styleData)
          }

          var parentNode = vnode

          while ((parentNode = parentNode.parent)) {
            if (
              parentNode.data &&
              (styleData = normalizeStyleData(parentNode.data))
            ) {
              extend(res, styleData)
            }
          }

          return res
        }
        /*  */

        var cssVarRE = /^--/
        var importantRE = /\s*!important$/

        var setProp = function(el, name, val) {
          /* istanbul ignore if */
          if (cssVarRE.test(name)) {
            el.style.setProperty(name, val)
          } else if (importantRE.test(val)) {
            el.style.setProperty(
              name,
              val.replace(importantRE, ''),
              'important'
            )
          } else {
            var normalizedName = normalize(name)

            if (Array.isArray(val)) {
              // Support values array created by autoprefixer, e.g.
              // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
              // Set them one by one, and the browser will only set those it can recognize
              for (var i = 0, len = val.length; i < len; i++) {
                el.style[normalizedName] = val[i]
              }
            } else {
              el.style[normalizedName] = val
            }
          }
        }

        var vendorNames = ['Webkit', 'Moz', 'ms']
        var emptyStyle
        var normalize = cached(function(prop) {
          emptyStyle = emptyStyle || document.createElement('div').style
          prop = camelize(prop)

          if (prop !== 'filter' && prop in emptyStyle) {
            return prop
          }

          var capName = prop.charAt(0).toUpperCase() + prop.slice(1)

          for (var i = 0; i < vendorNames.length; i++) {
            var name = vendorNames[i] + capName

            if (name in emptyStyle) {
              return name
            }
          }
        })

        function updateStyle(oldVnode, vnode) {
          var data = vnode.data
          var oldData = oldVnode.data

          if (
            isUndef(data.staticStyle) &&
            isUndef(data.style) &&
            isUndef(oldData.staticStyle) &&
            isUndef(oldData.style)
          ) {
            return
          }

          var cur, name
          var el = vnode.elm
          var oldStaticStyle = oldData.staticStyle
          var oldStyleBinding = oldData.normalizedStyle || oldData.style || {} // if static style exists, stylebinding already merged into it when doing normalizeStyleData

          var oldStyle = oldStaticStyle || oldStyleBinding
          var style = normalizeStyleBinding(vnode.data.style) || {} // store normalized style under a different key for next diff
          // make sure to clone it if it's reactive, since the user likely wants
          // to mutate it.

          vnode.data.normalizedStyle = isDef(style.__ob__)
            ? extend({}, style)
            : style
          var newStyle = getStyle(vnode, true)

          for (name in oldStyle) {
            if (isUndef(newStyle[name])) {
              setProp(el, name, '')
            }
          }

          for (name in newStyle) {
            cur = newStyle[name]

            if (cur !== oldStyle[name]) {
              // ie9 setting to null has no effect, must use empty string
              setProp(el, name, cur == null ? '' : cur)
            }
          }
        }

        var style = {
          create: updateStyle,
          update: updateStyle
        }
        /*  */

        var whitespaceRE = /\s+/
        /**
         * Add class with compatibility for SVG since classList is not supported on
         * SVG elements in IE
         */

        function addClass(el, cls) {
          /* istanbul ignore if */
          if (!cls || !(cls = cls.trim())) {
            return
          }
          /* istanbul ignore else */

          if (el.classList) {
            if (cls.indexOf(' ') > -1) {
              cls.split(whitespaceRE).forEach(function(c) {
                return el.classList.add(c)
              })
            } else {
              el.classList.add(cls)
            }
          } else {
            var cur = ' ' + (el.getAttribute('class') || '') + ' '

            if (cur.indexOf(' ' + cls + ' ') < 0) {
              el.setAttribute('class', (cur + cls).trim())
            }
          }
        }
        /**
         * Remove class with compatibility for SVG since classList is not supported on
         * SVG elements in IE
         */

        function removeClass(el, cls) {
          /* istanbul ignore if */
          if (!cls || !(cls = cls.trim())) {
            return
          }
          /* istanbul ignore else */

          if (el.classList) {
            if (cls.indexOf(' ') > -1) {
              cls.split(whitespaceRE).forEach(function(c) {
                return el.classList.remove(c)
              })
            } else {
              el.classList.remove(cls)
            }

            if (!el.classList.length) {
              el.removeAttribute('class')
            }
          } else {
            var cur = ' ' + (el.getAttribute('class') || '') + ' '
            var tar = ' ' + cls + ' '

            while (cur.indexOf(tar) >= 0) {
              cur = cur.replace(tar, ' ')
            }

            cur = cur.trim()

            if (cur) {
              el.setAttribute('class', cur)
            } else {
              el.removeAttribute('class')
            }
          }
        }
        /*  */

        function resolveTransition(def$$1) {
          if (!def$$1) {
            return
          }
          /* istanbul ignore else */

          if (typeof def$$1 === 'object') {
            var res = {}

            if (def$$1.css !== false) {
              extend(res, autoCssTransition(def$$1.name || 'v'))
            }

            extend(res, def$$1)
            return res
          } else if (typeof def$$1 === 'string') {
            return autoCssTransition(def$$1)
          }
        }

        var autoCssTransition = cached(function(name) {
          return {
            enterClass: name + '-enter',
            enterToClass: name + '-enter-to',
            enterActiveClass: name + '-enter-active',
            leaveClass: name + '-leave',
            leaveToClass: name + '-leave-to',
            leaveActiveClass: name + '-leave-active'
          }
        })
        var hasTransition = inBrowser && !isIE9
        var TRANSITION = 'transition'
        var ANIMATION = 'animation' // Transition property/event sniffing

        var transitionProp = 'transition'
        var transitionEndEvent = 'transitionend'
        var animationProp = 'animation'
        var animationEndEvent = 'animationend'

        if (hasTransition) {
          /* istanbul ignore if */
          if (
            window.ontransitionend === undefined &&
            window.onwebkittransitionend !== undefined
          ) {
            transitionProp = 'WebkitTransition'
            transitionEndEvent = 'webkitTransitionEnd'
          }

          if (
            window.onanimationend === undefined &&
            window.onwebkitanimationend !== undefined
          ) {
            animationProp = 'WebkitAnimation'
            animationEndEvent = 'webkitAnimationEnd'
          }
        } // binding to window is necessary to make hot reload work in IE in strict mode

        var raf = inBrowser
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : /* istanbul ignore next */
            function(fn) {
              return fn()
            }

        function nextFrame(fn) {
          raf(function() {
            raf(fn)
          })
        }

        function addTransitionClass(el, cls) {
          var transitionClasses =
            el._transitionClasses || (el._transitionClasses = [])

          if (transitionClasses.indexOf(cls) < 0) {
            transitionClasses.push(cls)
            addClass(el, cls)
          }
        }

        function removeTransitionClass(el, cls) {
          if (el._transitionClasses) {
            remove(el._transitionClasses, cls)
          }

          removeClass(el, cls)
        }

        function whenTransitionEnds(el, expectedType, cb) {
          var ref = getTransitionInfo(el, expectedType)
          var type = ref.type
          var timeout = ref.timeout
          var propCount = ref.propCount

          if (!type) {
            return cb()
          }

          var event =
            type === TRANSITION ? transitionEndEvent : animationEndEvent
          var ended = 0

          var end = function() {
            el.removeEventListener(event, onEnd)
            cb()
          }

          var onEnd = function(e) {
            if (e.target === el) {
              if (++ended >= propCount) {
                end()
              }
            }
          }

          setTimeout(function() {
            if (ended < propCount) {
              end()
            }
          }, timeout + 1)
          el.addEventListener(event, onEnd)
        }

        var transformRE = /\b(transform|all)(,|$)/

        function getTransitionInfo(el, expectedType) {
          var styles = window.getComputedStyle(el) // JSDOM may return undefined for transition properties

          var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(
            ', '
          )
          var transitionDurations = (
            styles[transitionProp + 'Duration'] || ''
          ).split(', ')
          var transitionTimeout = getTimeout(
            transitionDelays,
            transitionDurations
          )
          var animationDelays = (styles[animationProp + 'Delay'] || '').split(
            ', '
          )
          var animationDurations = (
            styles[animationProp + 'Duration'] || ''
          ).split(', ')
          var animationTimeout = getTimeout(animationDelays, animationDurations)
          var type
          var timeout = 0
          var propCount = 0
          /* istanbul ignore if */

          if (expectedType === TRANSITION) {
            if (transitionTimeout > 0) {
              type = TRANSITION
              timeout = transitionTimeout
              propCount = transitionDurations.length
            }
          } else if (expectedType === ANIMATION) {
            if (animationTimeout > 0) {
              type = ANIMATION
              timeout = animationTimeout
              propCount = animationDurations.length
            }
          } else {
            timeout = Math.max(transitionTimeout, animationTimeout)
            type =
              timeout > 0
                ? transitionTimeout > animationTimeout
                  ? TRANSITION
                  : ANIMATION
                : null
            propCount = type
              ? type === TRANSITION
                ? transitionDurations.length
                : animationDurations.length
              : 0
          }

          var hasTransform =
            type === TRANSITION &&
            transformRE.test(styles[transitionProp + 'Property'])
          return {
            type: type,
            timeout: timeout,
            propCount: propCount,
            hasTransform: hasTransform
          }
        }

        function getTimeout(delays, durations) {
          /* istanbul ignore next */
          while (delays.length < durations.length) {
            delays = delays.concat(delays)
          }

          return Math.max.apply(
            null,
            durations.map(function(d, i) {
              return toMs(d) + toMs(delays[i])
            })
          )
        } // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
        // in a locale-dependent way, using a comma instead of a dot.
        // If comma is not replaced with a dot, the input will be rounded down (i.e. acting
        // as a floor function) causing unexpected behaviors

        function toMs(s) {
          return Number(s.slice(0, -1).replace(',', '.')) * 1000
        }
        /*  */

        function enter(vnode, toggleDisplay) {
          var el = vnode.elm // call leave callback now

          if (isDef(el._leaveCb)) {
            el._leaveCb.cancelled = true

            el._leaveCb()
          }

          var data = resolveTransition(vnode.data.transition)

          if (isUndef(data)) {
            return
          }
          /* istanbul ignore if */

          if (isDef(el._enterCb) || el.nodeType !== 1) {
            return
          }

          var css = data.css
          var type = data.type
          var enterClass = data.enterClass
          var enterToClass = data.enterToClass
          var enterActiveClass = data.enterActiveClass
          var appearClass = data.appearClass
          var appearToClass = data.appearToClass
          var appearActiveClass = data.appearActiveClass
          var beforeEnter = data.beforeEnter
          var enter = data.enter
          var afterEnter = data.afterEnter
          var enterCancelled = data.enterCancelled
          var beforeAppear = data.beforeAppear
          var appear = data.appear
          var afterAppear = data.afterAppear
          var appearCancelled = data.appearCancelled
          var duration = data.duration // activeInstance will always be the <transition> component managing this
          // transition. One edge case to check is when the <transition> is placed
          // as the root node of a child component. In that case we need to check
          // <transition>'s parent for appear check.

          var context = activeInstance
          var transitionNode = activeInstance.$vnode

          while (transitionNode && transitionNode.parent) {
            transitionNode = transitionNode.parent
            context = transitionNode.context
          }

          var isAppear = !context._isMounted || !vnode.isRootInsert

          if (isAppear && !appear && appear !== '') {
            return
          }

          var startClass = isAppear && appearClass ? appearClass : enterClass
          var activeClass =
            isAppear && appearActiveClass ? appearActiveClass : enterActiveClass
          var toClass = isAppear && appearToClass ? appearToClass : enterToClass
          var beforeEnterHook = isAppear
            ? beforeAppear || beforeEnter
            : beforeEnter
          var enterHook = isAppear
            ? typeof appear === 'function'
              ? appear
              : enter
            : enter
          var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter
          var enterCancelledHook = isAppear
            ? appearCancelled || enterCancelled
            : enterCancelled
          var explicitEnterDuration = toNumber(
            isObject(duration) ? duration.enter : duration
          )

          if ('development' !== 'production' && explicitEnterDuration != null) {
            checkDuration(explicitEnterDuration, 'enter', vnode)
          }

          var expectsCSS = css !== false && !isIE9
          var userWantsControl = getHookArgumentsLength(enterHook)
          var cb = (el._enterCb = once(function() {
            if (expectsCSS) {
              removeTransitionClass(el, toClass)
              removeTransitionClass(el, activeClass)
            }

            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, startClass)
              }

              enterCancelledHook && enterCancelledHook(el)
            } else {
              afterEnterHook && afterEnterHook(el)
            }

            el._enterCb = null
          }))

          if (!vnode.data.show) {
            // remove pending leave element on enter by injecting an insert hook
            mergeVNodeHook(vnode, 'insert', function() {
              var parent = el.parentNode
              var pendingNode =
                parent && parent._pending && parent._pending[vnode.key]

              if (
                pendingNode &&
                pendingNode.tag === vnode.tag &&
                pendingNode.elm._leaveCb
              ) {
                pendingNode.elm._leaveCb()
              }

              enterHook && enterHook(el, cb)
            })
          } // start enter transition

          beforeEnterHook && beforeEnterHook(el)

          if (expectsCSS) {
            addTransitionClass(el, startClass)
            addTransitionClass(el, activeClass)
            nextFrame(function() {
              removeTransitionClass(el, startClass)

              if (!cb.cancelled) {
                addTransitionClass(el, toClass)

                if (!userWantsControl) {
                  if (isValidDuration(explicitEnterDuration)) {
                    setTimeout(cb, explicitEnterDuration)
                  } else {
                    whenTransitionEnds(el, type, cb)
                  }
                }
              }
            })
          }

          if (vnode.data.show) {
            toggleDisplay && toggleDisplay()
            enterHook && enterHook(el, cb)
          }

          if (!expectsCSS && !userWantsControl) {
            cb()
          }
        }

        function leave(vnode, rm) {
          var el = vnode.elm // call enter callback now

          if (isDef(el._enterCb)) {
            el._enterCb.cancelled = true

            el._enterCb()
          }

          var data = resolveTransition(vnode.data.transition)

          if (isUndef(data) || el.nodeType !== 1) {
            return rm()
          }
          /* istanbul ignore if */

          if (isDef(el._leaveCb)) {
            return
          }

          var css = data.css
          var type = data.type
          var leaveClass = data.leaveClass
          var leaveToClass = data.leaveToClass
          var leaveActiveClass = data.leaveActiveClass
          var beforeLeave = data.beforeLeave
          var leave = data.leave
          var afterLeave = data.afterLeave
          var leaveCancelled = data.leaveCancelled
          var delayLeave = data.delayLeave
          var duration = data.duration
          var expectsCSS = css !== false && !isIE9
          var userWantsControl = getHookArgumentsLength(leave)
          var explicitLeaveDuration = toNumber(
            isObject(duration) ? duration.leave : duration
          )

          if ('development' !== 'production' && isDef(explicitLeaveDuration)) {
            checkDuration(explicitLeaveDuration, 'leave', vnode)
          }

          var cb = (el._leaveCb = once(function() {
            if (el.parentNode && el.parentNode._pending) {
              el.parentNode._pending[vnode.key] = null
            }

            if (expectsCSS) {
              removeTransitionClass(el, leaveToClass)
              removeTransitionClass(el, leaveActiveClass)
            }

            if (cb.cancelled) {
              if (expectsCSS) {
                removeTransitionClass(el, leaveClass)
              }

              leaveCancelled && leaveCancelled(el)
            } else {
              rm()
              afterLeave && afterLeave(el)
            }

            el._leaveCb = null
          }))

          if (delayLeave) {
            delayLeave(performLeave)
          } else {
            performLeave()
          }

          function performLeave() {
            // the delayed leave may have already been cancelled
            if (cb.cancelled) {
              return
            } // record leaving element

            if (!vnode.data.show && el.parentNode) {
              ;(el.parentNode._pending || (el.parentNode._pending = {}))[
                vnode.key
              ] = vnode
            }

            beforeLeave && beforeLeave(el)

            if (expectsCSS) {
              addTransitionClass(el, leaveClass)
              addTransitionClass(el, leaveActiveClass)
              nextFrame(function() {
                removeTransitionClass(el, leaveClass)

                if (!cb.cancelled) {
                  addTransitionClass(el, leaveToClass)

                  if (!userWantsControl) {
                    if (isValidDuration(explicitLeaveDuration)) {
                      setTimeout(cb, explicitLeaveDuration)
                    } else {
                      whenTransitionEnds(el, type, cb)
                    }
                  }
                }
              })
            }

            leave && leave(el, cb)

            if (!expectsCSS && !userWantsControl) {
              cb()
            }
          }
        } // only used in dev mode

        function checkDuration(val, name, vnode) {
          if (typeof val !== 'number') {
            warn(
              '<transition> explicit ' +
                name +
                ' duration is not a valid number - ' +
                'got ' +
                JSON.stringify(val) +
                '.',
              vnode.context
            )
          } else if (isNaN(val)) {
            warn(
              '<transition> explicit ' +
                name +
                ' duration is NaN - ' +
                'the duration expression might be incorrect.',
              vnode.context
            )
          }
        }

        function isValidDuration(val) {
          return typeof val === 'number' && !isNaN(val)
        }
        /**
         * Normalize a transition hook's argument length. The hook may be:
         * - a merged hook (invoker) with the original in .fns
         * - a wrapped component method (check ._length)
         * - a plain function (.length)
         */

        function getHookArgumentsLength(fn) {
          if (isUndef(fn)) {
            return false
          }

          var invokerFns = fn.fns

          if (isDef(invokerFns)) {
            // invoker
            return getHookArgumentsLength(
              Array.isArray(invokerFns) ? invokerFns[0] : invokerFns
            )
          } else {
            return (fn._length || fn.length) > 1
          }
        }

        function _enter(_, vnode) {
          if (vnode.data.show !== true) {
            enter(vnode)
          }
        }

        var transition = inBrowser
          ? {
              create: _enter,
              activate: _enter,
              remove: function remove$$1(vnode, rm) {
                /* istanbul ignore else */
                if (vnode.data.show !== true) {
                  leave(vnode, rm)
                } else {
                  rm()
                }
              }
            }
          : {}
        var platformModules = [
          attrs,
          klass,
          events,
          domProps,
          style,
          transition
        ]
        /*  */
        // the directive module should be applied last, after all
        // built-in modules have been applied.

        var modules = platformModules.concat(baseModules)
        var patch = createPatchFunction({
          nodeOps: nodeOps,
          modules: modules
        })
        /**
         * Not type checking this file because flow doesn't like attaching
         * properties to Elements.
         */

        /* istanbul ignore if */

        if (isIE9) {
          // http://www.matts411.com/post/internet-explorer-9-oninput/
          document.addEventListener('selectionchange', function() {
            var el = document.activeElement

            if (el && el.vmodel) {
              trigger(el, 'input')
            }
          })
        }

        var directive = {
          inserted: function inserted(el, binding, vnode, oldVnode) {
            if (vnode.tag === 'select') {
              // #6903
              if (oldVnode.elm && !oldVnode.elm._vOptions) {
                mergeVNodeHook(vnode, 'postpatch', function() {
                  directive.componentUpdated(el, binding, vnode)
                })
              } else {
                setSelected(el, binding, vnode.context)
              }

              el._vOptions = [].map.call(el.options, getValue)
            } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
              el._vModifiers = binding.modifiers

              if (!binding.modifiers.lazy) {
                el.addEventListener('compositionstart', onCompositionStart)
                el.addEventListener('compositionend', onCompositionEnd) // Safari < 10.2 & UIWebView doesn't fire compositionend when
                // switching focus before confirming composition choice
                // this also fixes the issue where some browsers e.g. iOS Chrome
                // fires "change" instead of "input" on autocomplete.

                el.addEventListener('change', onCompositionEnd)
                /* istanbul ignore if */

                if (isIE9) {
                  el.vmodel = true
                }
              }
            }
          },
          componentUpdated: function componentUpdated(el, binding, vnode) {
            if (vnode.tag === 'select') {
              setSelected(el, binding, vnode.context) // in case the options rendered by v-for have changed,
              // it's possible that the value is out-of-sync with the rendered options.
              // detect such cases and filter out values that no longer has a matching
              // option in the DOM.

              var prevOptions = el._vOptions
              var curOptions = (el._vOptions = [].map.call(
                el.options,
                getValue
              ))

              if (
                curOptions.some(function(o, i) {
                  return !looseEqual(o, prevOptions[i])
                })
              ) {
                // trigger change event if
                // no matching option found for at least one value
                var needReset = el.multiple
                  ? binding.value.some(function(v) {
                      return hasNoMatchingOption(v, curOptions)
                    })
                  : binding.value !== binding.oldValue &&
                    hasNoMatchingOption(binding.value, curOptions)

                if (needReset) {
                  trigger(el, 'change')
                }
              }
            }
          }
        }

        function setSelected(el, binding, vm) {
          actuallySetSelected(el, binding, vm)
          /* istanbul ignore if */

          if (isIE || isEdge) {
            setTimeout(function() {
              actuallySetSelected(el, binding, vm)
            }, 0)
          }
        }

        function actuallySetSelected(el, binding, vm) {
          var value = binding.value
          var isMultiple = el.multiple

          if (isMultiple && !Array.isArray(value)) {
            'development' !== 'production' &&
              warn(
                '<select multiple v-model="' +
                  binding.expression +
                  '"> ' +
                  'expects an Array value for its binding, but got ' +
                  Object.prototype.toString.call(value).slice(8, -1),
                vm
              )
            return
          }

          var selected, option

          for (var i = 0, l = el.options.length; i < l; i++) {
            option = el.options[i]

            if (isMultiple) {
              selected = looseIndexOf(value, getValue(option)) > -1

              if (option.selected !== selected) {
                option.selected = selected
              }
            } else {
              if (looseEqual(getValue(option), value)) {
                if (el.selectedIndex !== i) {
                  el.selectedIndex = i
                }

                return
              }
            }
          }

          if (!isMultiple) {
            el.selectedIndex = -1
          }
        }

        function hasNoMatchingOption(value, options) {
          return options.every(function(o) {
            return !looseEqual(o, value)
          })
        }

        function getValue(option) {
          return '_value' in option ? option._value : option.value
        }

        function onCompositionStart(e) {
          e.target.composing = true
        }

        function onCompositionEnd(e) {
          // prevent triggering an input event for no reason
          if (!e.target.composing) {
            return
          }

          e.target.composing = false
          trigger(e.target, 'input')
        }

        function trigger(el, type) {
          var e = document.createEvent('HTMLEvents')
          e.initEvent(type, true, true)
          el.dispatchEvent(e)
        }
        /*  */
        // recursively search for possible transition defined inside the component root

        function locateNode(vnode) {
          return vnode.componentInstance &&
            (!vnode.data || !vnode.data.transition)
            ? locateNode(vnode.componentInstance._vnode)
            : vnode
        }

        var show = {
          bind: function bind(el, ref, vnode) {
            var value = ref.value
            vnode = locateNode(vnode)
            var transition$$1 = vnode.data && vnode.data.transition
            var originalDisplay = (el.__vOriginalDisplay =
              el.style.display === 'none' ? '' : el.style.display)

            if (value && transition$$1) {
              vnode.data.show = true
              enter(vnode, function() {
                el.style.display = originalDisplay
              })
            } else {
              el.style.display = value ? originalDisplay : 'none'
            }
          },
          update: function update(el, ref, vnode) {
            var value = ref.value
            var oldValue = ref.oldValue
            /* istanbul ignore if */

            if (!value === !oldValue) {
              return
            }

            vnode = locateNode(vnode)
            var transition$$1 = vnode.data && vnode.data.transition

            if (transition$$1) {
              vnode.data.show = true

              if (value) {
                enter(vnode, function() {
                  el.style.display = el.__vOriginalDisplay
                })
              } else {
                leave(vnode, function() {
                  el.style.display = 'none'
                })
              }
            } else {
              el.style.display = value ? el.__vOriginalDisplay : 'none'
            }
          },
          unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
            if (!isDestroy) {
              el.style.display = el.__vOriginalDisplay
            }
          }
        }
        var platformDirectives = {
          model: directive,
          show: show
        }
        /*  */

        var transitionProps = {
          name: String,
          appear: Boolean,
          css: Boolean,
          mode: String,
          type: String,
          enterClass: String,
          leaveClass: String,
          enterToClass: String,
          leaveToClass: String,
          enterActiveClass: String,
          leaveActiveClass: String,
          appearClass: String,
          appearActiveClass: String,
          appearToClass: String,
          duration: [Number, String, Object]
        } // in case the child is also an abstract component, e.g. <keep-alive>
        // we want to recursively retrieve the real component to be rendered

        function getRealChild(vnode) {
          var compOptions = vnode && vnode.componentOptions

          if (compOptions && compOptions.Ctor.options.abstract) {
            return getRealChild(getFirstComponentChild(compOptions.children))
          } else {
            return vnode
          }
        }

        function extractTransitionData(comp) {
          var data = {}
          var options = comp.$options // props

          for (var key in options.propsData) {
            data[key] = comp[key]
          } // events.
          // extract listeners and pass them directly to the transition methods

          var listeners = options._parentListeners

          for (var key$1 in listeners) {
            data[camelize(key$1)] = listeners[key$1]
          }

          return data
        }

        function placeholder(h, rawChild) {
          if (/\d-keep-alive$/.test(rawChild.tag)) {
            return h('keep-alive', {
              props: rawChild.componentOptions.propsData
            })
          }
        }

        function hasParentTransition(vnode) {
          while ((vnode = vnode.parent)) {
            if (vnode.data.transition) {
              return true
            }
          }
        }

        function isSameChild(child, oldChild) {
          return oldChild.key === child.key && oldChild.tag === child.tag
        }

        var isNotTextNode = function(c) {
          return c.tag || isAsyncPlaceholder(c)
        }

        var isVShowDirective = function(d) {
          return d.name === 'show'
        }

        var Transition = {
          name: 'transition',
          props: transitionProps,
          abstract: true,
          render: function render(h) {
            var this$1 = this
            var children = this.$slots.default

            if (!children) {
              return
            } // filter out text nodes (possible whitespaces)

            children = children.filter(isNotTextNode)
            /* istanbul ignore if */

            if (!children.length) {
              return
            } // warn multiple elements

            if ('development' !== 'production' && children.length > 1) {
              warn(
                '<transition> can only be used on a single element. Use ' +
                  '<transition-group> for lists.',
                this.$parent
              )
            }

            var mode = this.mode // warn invalid mode

            if (
              'development' !== 'production' &&
              mode &&
              mode !== 'in-out' &&
              mode !== 'out-in'
            ) {
              warn('invalid <transition> mode: ' + mode, this.$parent)
            }

            var rawChild = children[0] // if this is a component root node and the component's
            // parent container node also has transition, skip.

            if (hasParentTransition(this.$vnode)) {
              return rawChild
            } // apply transition data to child
            // use getRealChild() to ignore abstract components e.g. keep-alive

            var child = getRealChild(rawChild)
            /* istanbul ignore if */

            if (!child) {
              return rawChild
            }

            if (this._leaving) {
              return placeholder(h, rawChild)
            } // ensure a key that is unique to the vnode type and to this transition
            // component instance. This key will be used to remove pending leaving nodes
            // during entering.

            var id = '__transition-' + this._uid + '-'
            child.key =
              child.key == null
                ? child.isComment
                  ? id + 'comment'
                  : id + child.tag
                : isPrimitive(child.key)
                ? String(child.key).indexOf(id) === 0
                  ? child.key
                  : id + child.key
                : child.key
            var data = ((
              child.data || (child.data = {})
            ).transition = extractTransitionData(this))
            var oldRawChild = this._vnode
            var oldChild = getRealChild(oldRawChild) // mark v-show
            // so that the transition module can hand over the control to the directive

            if (
              child.data.directives &&
              child.data.directives.some(isVShowDirective)
            ) {
              child.data.show = true
            }

            if (
              oldChild &&
              oldChild.data &&
              !isSameChild(child, oldChild) &&
              !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
              !(
                oldChild.componentInstance &&
                oldChild.componentInstance._vnode.isComment
              )
            ) {
              // replace old child transition data with fresh one
              // important for dynamic transitions!
              var oldData = (oldChild.data.transition = extend({}, data)) // handle transition mode

              if (mode === 'out-in') {
                // return placeholder node and queue update when leave finishes
                this._leaving = true
                mergeVNodeHook(oldData, 'afterLeave', function() {
                  this$1._leaving = false
                  this$1.$forceUpdate()
                })
                return placeholder(h, rawChild)
              } else if (mode === 'in-out') {
                if (isAsyncPlaceholder(child)) {
                  return oldRawChild
                }

                var delayedLeave

                var performLeave = function() {
                  delayedLeave()
                }

                mergeVNodeHook(data, 'afterEnter', performLeave)
                mergeVNodeHook(data, 'enterCancelled', performLeave)
                mergeVNodeHook(oldData, 'delayLeave', function(leave) {
                  delayedLeave = leave
                })
              }
            }

            return rawChild
          }
        }
        /*  */

        var props = extend(
          {
            tag: String,
            moveClass: String
          },
          transitionProps
        )
        delete props.mode
        var TransitionGroup = {
          props: props,
          beforeMount: function beforeMount() {
            var this$1 = this
            var update = this._update

            this._update = function(vnode, hydrating) {
              var restoreActiveInstance = setActiveInstance(this$1) // force removing pass

              this$1.__patch__(
                this$1._vnode,
                this$1.kept,
                false, // hydrating
                true // removeOnly (!important, avoids unnecessary moves)
              )

              this$1._vnode = this$1.kept
              restoreActiveInstance()
              update.call(this$1, vnode, hydrating)
            }
          },
          render: function render(h) {
            var tag = this.tag || this.$vnode.data.tag || 'span'
            var map = Object.create(null)
            var prevChildren = (this.prevChildren = this.children)
            var rawChildren = this.$slots.default || []
            var children = (this.children = [])
            var transitionData = extractTransitionData(this)

            for (var i = 0; i < rawChildren.length; i++) {
              var c = rawChildren[i]

              if (c.tag) {
                if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                  children.push(c)
                  map[c.key] = c
                  ;(c.data || (c.data = {})).transition = transitionData
                } else if ('development' !== 'production') {
                  var opts = c.componentOptions
                  var name = opts
                    ? opts.Ctor.options.name || opts.tag || ''
                    : c.tag
                  warn(
                    '<transition-group> children must be keyed: <' + name + '>'
                  )
                }
              }
            }

            if (prevChildren) {
              var kept = []
              var removed = []

              for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                var c$1 = prevChildren[i$1]
                c$1.data.transition = transitionData
                c$1.data.pos = c$1.elm.getBoundingClientRect()

                if (map[c$1.key]) {
                  kept.push(c$1)
                } else {
                  removed.push(c$1)
                }
              }

              this.kept = h(tag, null, kept)
              this.removed = removed
            }

            return h(tag, null, children)
          },
          updated: function updated() {
            var children = this.prevChildren
            var moveClass = this.moveClass || (this.name || 'v') + '-move'

            if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
              return
            } // we divide the work into three loops to avoid mixing DOM reads and writes
            // in each iteration - which helps prevent layout thrashing.

            children.forEach(callPendingCbs)
            children.forEach(recordPosition)
            children.forEach(applyTranslation) // force reflow to put everything in position
            // assign to this to avoid being removed in tree-shaking
            // $flow-disable-line

            this._reflow = document.body.offsetHeight
            children.forEach(function(c) {
              if (c.data.moved) {
                var el = c.elm
                var s = el.style
                addTransitionClass(el, moveClass)
                s.transform = s.WebkitTransform = s.transitionDuration = ''
                el.addEventListener(
                  transitionEndEvent,
                  (el._moveCb = function cb(e) {
                    if (e && e.target !== el) {
                      return
                    }

                    if (!e || /transform$/.test(e.propertyName)) {
                      el.removeEventListener(transitionEndEvent, cb)
                      el._moveCb = null
                      removeTransitionClass(el, moveClass)
                    }
                  })
                )
              }
            })
          },
          methods: {
            hasMove: function hasMove(el, moveClass) {
              /* istanbul ignore if */
              if (!hasTransition) {
                return false
              }
              /* istanbul ignore if */

              if (this._hasMove) {
                return this._hasMove
              } // Detect whether an element with the move class applied has
              // CSS transitions. Since the element may be inside an entering
              // transition at this very moment, we make a clone of it and remove
              // all other transition classes applied to ensure only the move class
              // is applied.

              var clone = el.cloneNode()

              if (el._transitionClasses) {
                el._transitionClasses.forEach(function(cls) {
                  removeClass(clone, cls)
                })
              }

              addClass(clone, moveClass)
              clone.style.display = 'none'
              this.$el.appendChild(clone)
              var info = getTransitionInfo(clone)
              this.$el.removeChild(clone)
              return (this._hasMove = info.hasTransform)
            }
          }
        }

        function callPendingCbs(c) {
          /* istanbul ignore if */
          if (c.elm._moveCb) {
            c.elm._moveCb()
          }
          /* istanbul ignore if */

          if (c.elm._enterCb) {
            c.elm._enterCb()
          }
        }

        function recordPosition(c) {
          c.data.newPos = c.elm.getBoundingClientRect()
        }

        function applyTranslation(c) {
          var oldPos = c.data.pos
          var newPos = c.data.newPos
          var dx = oldPos.left - newPos.left
          var dy = oldPos.top - newPos.top

          if (dx || dy) {
            c.data.moved = true
            var s = c.elm.style
            s.transform = s.WebkitTransform =
              'translate(' + dx + 'px,' + dy + 'px)'
            s.transitionDuration = '0s'
          }
        }

        var platformComponents = {
          Transition: Transition,
          TransitionGroup: TransitionGroup
        }
        /*  */
        // install platform specific utils

        Vue.config.mustUseProp = mustUseProp
        Vue.config.isReservedTag = isReservedTag
        Vue.config.isReservedAttr = isReservedAttr
        Vue.config.getTagNamespace = getTagNamespace
        Vue.config.isUnknownElement = isUnknownElement // install platform runtime directives & components

        extend(Vue.options.directives, platformDirectives)
        extend(Vue.options.components, platformComponents) // install platform patch function

        Vue.prototype.__patch__ = inBrowser ? patch : noop // public mount method

        Vue.prototype.$mount = function(el, hydrating) {
          el = el && inBrowser ? query(el) : undefined
          return mountComponent(this, el, hydrating)
        } // devtools global hook

        /* istanbul ignore next */

        if (inBrowser) {
          setTimeout(function() {
            if (config.devtools) {
              if (devtools) {
                devtools.emit('init', Vue)
              } else if (
                'development' !== 'production' &&
                'development' !== 'test' &&
                isChrome
              ) {
                console[console.info ? 'info' : 'log'](
                  'Download the Vue Devtools extension for a better development experience:\n' +
                    'https://github.com/vuejs/vue-devtools'
                )
              }
            }

            if (
              'development' !== 'production' &&
              'development' !== 'test' &&
              config.productionTip !== false &&
              typeof console !== 'undefined'
            ) {
              console[console.info ? 'info' : 'log'](
                'You are running Vue in development mode.\n' +
                  'Make sure to turn on production mode when deploying for production.\n' +
                  'See more tips at https://vuejs.org/guide/deployment.html'
              )
            }
          }, 0)
        }
        /*  */

        var _default = Vue
        exports.default = _default
      },
      {}
    ],
    '../node_modules/vue-hot-reload-api/dist/index.js': [
      function(require, module, exports) {
        var Vue // late bind
        var version
        var map = Object.create(null)
        if (typeof window !== 'undefined') {
          window.__VUE_HOT_MAP__ = map
        }
        var installed = false
        var isBrowserify = false
        var initHookName = 'beforeCreate'

        exports.install = function(vue, browserify) {
          if (installed) {
            return
          }
          installed = true

          Vue = vue.__esModule ? vue.default : vue
          version = Vue.version.split('.').map(Number)
          isBrowserify = browserify

          // compat with < 2.0.0-alpha.7
          if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
            initHookName = 'init'
          }

          exports.compatible = version[0] >= 2
          if (!exports.compatible) {
            console.warn(
              '[HMR] You are using a version of vue-hot-reload-api that is ' +
                'only compatible with Vue.js core ^2.0.0.'
            )
            return
          }
        }

        /**
         * Create a record for a hot module, which keeps track of its constructor
         * and instances
         *
         * @param {String} id
         * @param {Object} options
         */

        exports.createRecord = function(id, options) {
          if (map[id]) {
            return
          }

          var Ctor = null
          if (typeof options === 'function') {
            Ctor = options
            options = Ctor.options
          }
          makeOptionsHot(id, options)
          map[id] = {
            Ctor: Ctor,
            options: options,
            instances: []
          }
        }

        /**
         * Check if module is recorded
         *
         * @param {String} id
         */

        exports.isRecorded = function(id) {
          return typeof map[id] !== 'undefined'
        }

        /**
         * Make a Component options object hot.
         *
         * @param {String} id
         * @param {Object} options
         */

        function makeOptionsHot(id, options) {
          if (options.functional) {
            var render = options.render
            options.render = function(h, ctx) {
              var instances = map[id].instances
              if (ctx && instances.indexOf(ctx.parent) < 0) {
                instances.push(ctx.parent)
              }
              return render(h, ctx)
            }
          } else {
            injectHook(options, initHookName, function() {
              var record = map[id]
              if (!record.Ctor) {
                record.Ctor = this.constructor
              }
              record.instances.push(this)
            })
            injectHook(options, 'beforeDestroy', function() {
              var instances = map[id].instances
              instances.splice(instances.indexOf(this), 1)
            })
          }
        }

        /**
         * Inject a hook to a hot reloadable component so that
         * we can keep track of it.
         *
         * @param {Object} options
         * @param {String} name
         * @param {Function} hook
         */

        function injectHook(options, name, hook) {
          var existing = options[name]
          options[name] = existing
            ? Array.isArray(existing)
              ? existing.concat(hook)
              : [existing, hook]
            : [hook]
        }

        function tryWrap(fn) {
          return function(id, arg) {
            try {
              fn(id, arg)
            } catch (e) {
              console.error(e)
              console.warn(
                'Something went wrong during Vue component hot-reload. Full reload required.'
              )
            }
          }
        }

        function updateOptions(oldOptions, newOptions) {
          for (var key in oldOptions) {
            if (!(key in newOptions)) {
              delete oldOptions[key]
            }
          }
          for (var key$1 in newOptions) {
            oldOptions[key$1] = newOptions[key$1]
          }
        }

        exports.rerender = tryWrap(function(id, options) {
          var record = map[id]
          if (!options) {
            record.instances.slice().forEach(function(instance) {
              instance.$forceUpdate()
            })
            return
          }
          if (typeof options === 'function') {
            options = options.options
          }
          if (record.Ctor) {
            record.Ctor.options.render = options.render
            record.Ctor.options.staticRenderFns = options.staticRenderFns
            record.instances.slice().forEach(function(instance) {
              instance.$options.render = options.render
              instance.$options.staticRenderFns = options.staticRenderFns
              // reset static trees
              // pre 2.5, all static trees are cached together on the instance
              if (instance._staticTrees) {
                instance._staticTrees = []
              }
              // 2.5.0
              if (Array.isArray(record.Ctor.options.cached)) {
                record.Ctor.options.cached = []
              }
              // 2.5.3
              if (Array.isArray(instance.$options.cached)) {
                instance.$options.cached = []
              }
              // post 2.5.4: v-once trees are cached on instance._staticTrees.
              // Pure static trees are cached on the staticRenderFns array
              // (both already reset above)
              instance.$forceUpdate()
            })
          } else {
            // functional or no instance created yet
            record.options.render = options.render
            record.options.staticRenderFns = options.staticRenderFns

            // handle functional component re-render
            if (record.options.functional) {
              // rerender with full options
              if (Object.keys(options).length > 2) {
                updateOptions(record.options, options)
              } else {
                // template-only rerender.
                // need to inject the style injection code for CSS modules
                // to work properly.
                var injectStyles = record.options._injectStyles
                if (injectStyles) {
                  var render = options.render
                  record.options.render = function(h, ctx) {
                    injectStyles.call(ctx)
                    return render(h, ctx)
                  }
                }
              }
              record.options._Ctor = null
              // 2.5.3
              if (Array.isArray(record.options.cached)) {
                record.options.cached = []
              }
              record.instances.slice().forEach(function(instance) {
                instance.$forceUpdate()
              })
            }
          }
        })

        exports.reload = tryWrap(function(id, options) {
          var record = map[id]
          if (options) {
            if (typeof options === 'function') {
              options = options.options
            }
            makeOptionsHot(id, options)
            if (record.Ctor) {
              if (version[1] < 2) {
                // preserve pre 2.2 behavior for global mixin handling
                record.Ctor.extendOptions = options
              }
              var newCtor = record.Ctor.super.extend(options)
              record.Ctor.options = newCtor.options
              record.Ctor.cid = newCtor.cid
              record.Ctor.prototype = newCtor.prototype
              if (newCtor.release) {
                // temporary global mixin strategy used in < 2.0.0-alpha.6
                newCtor.release()
              }
            } else {
              updateOptions(record.options, options)
            }
          }
          record.instances.slice().forEach(function(instance) {
            if (instance.$vnode && instance.$vnode.context) {
              instance.$vnode.context.$forceUpdate()
            } else {
              console.warn(
                'Root or manually mounted instance modified. Full reload required.'
              )
            }
          })
        })
      },
      {}
    ],
    'App.vue': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = void 0
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        var _default = {
          data: function data() {
            return {
              showClosableChip: true
            }
          },
          methods: {
            closeChip: function closeChip(e) {
              console.log(e)
              this.showClosableChip = false
            }
          }
        }
        exports.default = _default
        var $f57236 = exports.default || module.exports

        if (typeof $f57236 === 'function') {
          $f57236 = $f57236.options
        }

        /* template */
        Object.assign(
          $f57236,
          (function() {
            var render = function() {
              var _vm = this
              var _h = _vm.$createElement
              var _c = _vm._self._c || _h
              return _c(
                'section',
                { staticClass: 'app-demo', attrs: { id: 'app' } },
                [
                  _c('c-chip', { attrs: { label: 'red', color: 'red' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'orange', color: 'orange' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'yellow', color: 'yellow' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'green', color: 'green' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'cyan', color: 'cyan' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'blue', color: 'blue' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'indigo', color: 'indigo' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'purple', color: 'purple' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'pink', color: 'pink' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'default' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'dark', color: 'dark' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: 'black', color: 'black' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { color: '#336774' } }, [
                    _c('div', { attrs: { slot: 'content' }, slot: 'content' }, [
                      _vm._v('#336774')
                    ])
                  ]),
                  _vm._v(' '),
                  _c('c-chip', {
                    attrs: { label: '#724832', color: '#724832' }
                  }),
                  _vm._v(' '),
                  _c('c-chip', {
                    attrs: { label: '#516E41', color: '#516E41' }
                  }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { size: 'xs', label: '超小号' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { size: 'sm', label: '小号' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { label: '正常' } }),
                  _vm._v(' '),
                  _c('c-chip', { attrs: { size: 'lg', label: '大号' } }),
                  _vm._v(' '),
                  _vm.showClosableChip
                    ? _c(
                        'c-chip',
                        {
                          attrs: { size: 'xl', closable: '' },
                          on: {
                            close: function($event) {
                              _vm.closeChip($event)
                            }
                          }
                        },
                        [
                          _c(
                            'span',
                            { attrs: { slot: 'content' }, slot: 'content' },
                            [
                              _vm._v('github\n      '),
                              _c('c-icon', {
                                attrs: {
                                  type: 'fa',
                                  name: 'github',
                                  color: '#fff',
                                  size: '2em',
                                  valign: 'middle'
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(' '),
                  _c('c-icon', {
                    attrs: {
                      type: 'feather',
                      name: 'github',
                      color: '#498ff2',
                      size: '36',
                      valign: 'middle'
                    }
                  })
                ],
                1
              )
            }
            var staticRenderFns = []
            render._withStripped = true

            return {
              render: render,
              staticRenderFns: staticRenderFns,
              _compiled: true,
              _scopeId: null,
              functional: undefined
            }
          })()
        )

        /* hot reload */
        ;(function() {
          if (module.hot) {
            var api = require('vue-hot-reload-api')
            api.install(require('vue'))
            if (api.compatible) {
              module.hot.accept()
              if (!module.hot.data) {
                api.createRecord('$f57236', $f57236)
              } else {
                api.reload('$f57236', $f57236)
              }
            }
          }
        })()
      },
      {
        'vue-hot-reload-api':
          '../node_modules/vue-hot-reload-api/dist/index.js',
        vue: '../node_modules/vue/dist/vue.runtime.esm.js'
      }
    ],
    '../node_modules/core-js/modules/_global.js': [
      function(require, module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = (module.exports =
          typeof window != 'undefined' && window.Math == Math
            ? window
            : typeof self != 'undefined' && self.Math == Math
            ? self
            : // eslint-disable-next-line no-new-func
              Function('return this')())
        if (typeof __g == 'number') __g = global // eslint-disable-line no-undef
      },
      {}
    ],
    '../node_modules/core-js/modules/_core.js': [
      function(require, module, exports) {
        var core = (module.exports = { version: '2.6.1' })
        if (typeof __e == 'number') __e = core // eslint-disable-line no-undef
      },
      {}
    ],
    '../node_modules/core-js/modules/_is-object.js': [
      function(require, module, exports) {
        module.exports = function(it) {
          return typeof it === 'object' ? it !== null : typeof it === 'function'
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_an-object.js': [
      function(require, module, exports) {
        var isObject = require('./_is-object')
        module.exports = function(it) {
          if (!isObject(it)) throw TypeError(it + ' is not an object!')
          return it
        }
      },
      { './_is-object': '../node_modules/core-js/modules/_is-object.js' }
    ],
    '../node_modules/core-js/modules/_fails.js': [
      function(require, module, exports) {
        module.exports = function(exec) {
          try {
            return !!exec()
          } catch (e) {
            return true
          }
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_descriptors.js': [
      function(require, module, exports) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !require('./_fails')(function() {
          return (
            Object.defineProperty({}, 'a', {
              get: function() {
                return 7
              }
            }).a != 7
          )
        })
      },
      { './_fails': '../node_modules/core-js/modules/_fails.js' }
    ],
    '../node_modules/core-js/modules/_dom-create.js': [
      function(require, module, exports) {
        var isObject = require('./_is-object')
        var document = require('./_global').document
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement)
        module.exports = function(it) {
          return is ? document.createElement(it) : {}
        }
      },
      {
        './_is-object': '../node_modules/core-js/modules/_is-object.js',
        './_global': '../node_modules/core-js/modules/_global.js'
      }
    ],
    '../node_modules/core-js/modules/_ie8-dom-define.js': [
      function(require, module, exports) {
        module.exports =
          !require('./_descriptors') &&
          !require('./_fails')(function() {
            return (
              Object.defineProperty(require('./_dom-create')('div'), 'a', {
                get: function() {
                  return 7
                }
              }).a != 7
            )
          })
      },
      {
        './_descriptors': '../node_modules/core-js/modules/_descriptors.js',
        './_fails': '../node_modules/core-js/modules/_fails.js',
        './_dom-create': '../node_modules/core-js/modules/_dom-create.js'
      }
    ],
    '../node_modules/core-js/modules/_to-primitive.js': [
      function(require, module, exports) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = require('./_is-object')
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
          if (!isObject(it)) return it
          var fn, val
          if (
            S &&
            typeof (fn = it.toString) == 'function' &&
            !isObject((val = fn.call(it)))
          )
            return val
          if (
            typeof (fn = it.valueOf) == 'function' &&
            !isObject((val = fn.call(it)))
          )
            return val
          if (
            !S &&
            typeof (fn = it.toString) == 'function' &&
            !isObject((val = fn.call(it)))
          )
            return val
          throw TypeError("Can't convert object to primitive value")
        }
      },
      { './_is-object': '../node_modules/core-js/modules/_is-object.js' }
    ],
    '../node_modules/core-js/modules/_object-dp.js': [
      function(require, module, exports) {
        var anObject = require('./_an-object')
        var IE8_DOM_DEFINE = require('./_ie8-dom-define')
        var toPrimitive = require('./_to-primitive')
        var dP = Object.defineProperty

        exports.f = require('./_descriptors')
          ? Object.defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O)
              P = toPrimitive(P, true)
              anObject(Attributes)
              if (IE8_DOM_DEFINE)
                try {
                  return dP(O, P, Attributes)
                } catch (e) {
                  /* empty */
                }
              if ('get' in Attributes || 'set' in Attributes)
                throw TypeError('Accessors not supported!')
              if ('value' in Attributes) O[P] = Attributes.value
              return O
            }
      },
      {
        './_an-object': '../node_modules/core-js/modules/_an-object.js',
        './_ie8-dom-define':
          '../node_modules/core-js/modules/_ie8-dom-define.js',
        './_to-primitive': '../node_modules/core-js/modules/_to-primitive.js',
        './_descriptors': '../node_modules/core-js/modules/_descriptors.js'
      }
    ],
    '../node_modules/core-js/modules/_property-desc.js': [
      function(require, module, exports) {
        module.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          }
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_hide.js': [
      function(require, module, exports) {
        var dP = require('./_object-dp')
        var createDesc = require('./_property-desc')
        module.exports = require('./_descriptors')
          ? function(object, key, value) {
              return dP.f(object, key, createDesc(1, value))
            }
          : function(object, key, value) {
              object[key] = value
              return object
            }
      },
      {
        './_object-dp': '../node_modules/core-js/modules/_object-dp.js',
        './_property-desc': '../node_modules/core-js/modules/_property-desc.js',
        './_descriptors': '../node_modules/core-js/modules/_descriptors.js'
      }
    ],
    '../node_modules/core-js/modules/_has.js': [
      function(require, module, exports) {
        var hasOwnProperty = {}.hasOwnProperty
        module.exports = function(it, key) {
          return hasOwnProperty.call(it, key)
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_uid.js': [
      function(require, module, exports) {
        var id = 0
        var px = Math.random()
        module.exports = function(key) {
          return 'Symbol('.concat(
            key === undefined ? '' : key,
            ')_',
            (++id + px).toString(36)
          )
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_redefine.js': [
      function(require, module, exports) {
        var global = require('./_global')
        var hide = require('./_hide')
        var has = require('./_has')
        var SRC = require('./_uid')('src')
        var TO_STRING = 'toString'
        var $toString = Function[TO_STRING]
        var TPL = ('' + $toString).split(TO_STRING)

        require('./_core').inspectSource = function(it) {
          return $toString.call(it)
        }

        ;(module.exports = function(O, key, val, safe) {
          var isFunction = typeof val == 'function'
          if (isFunction) has(val, 'name') || hide(val, 'name', key)
          if (O[key] === val) return
          if (isFunction)
            has(val, SRC) ||
              hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)))
          if (O === global) {
            O[key] = val
          } else if (!safe) {
            delete O[key]
            hide(O, key, val)
          } else if (O[key]) {
            O[key] = val
          } else {
            hide(O, key, val)
          }
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
          return (
            (typeof this == 'function' && this[SRC]) || $toString.call(this)
          )
        })
      },
      {
        './_global': '../node_modules/core-js/modules/_global.js',
        './_hide': '../node_modules/core-js/modules/_hide.js',
        './_has': '../node_modules/core-js/modules/_has.js',
        './_uid': '../node_modules/core-js/modules/_uid.js',
        './_core': '../node_modules/core-js/modules/_core.js'
      }
    ],
    '../node_modules/core-js/modules/_a-function.js': [
      function(require, module, exports) {
        module.exports = function(it) {
          if (typeof it != 'function')
            throw TypeError(it + ' is not a function!')
          return it
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_ctx.js': [
      function(require, module, exports) {
        // optional / simple context binding
        var aFunction = require('./_a-function')
        module.exports = function(fn, that, length) {
          aFunction(fn)
          if (that === undefined) return fn
          switch (length) {
            case 1:
              return function(a) {
                return fn.call(that, a)
              }
            case 2:
              return function(a, b) {
                return fn.call(that, a, b)
              }
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c)
              }
          }
          return function(/* ...args */) {
            return fn.apply(that, arguments)
          }
        }
      },
      { './_a-function': '../node_modules/core-js/modules/_a-function.js' }
    ],
    '../node_modules/core-js/modules/_export.js': [
      function(require, module, exports) {
        var global = require('./_global')
        var core = require('./_core')
        var hide = require('./_hide')
        var redefine = require('./_redefine')
        var ctx = require('./_ctx')
        var PROTOTYPE = 'prototype'

        var $export = function(type, name, source) {
          var IS_FORCED = type & $export.F
          var IS_GLOBAL = type & $export.G
          var IS_STATIC = type & $export.S
          var IS_PROTO = type & $export.P
          var IS_BIND = type & $export.B
          var target = IS_GLOBAL
            ? global
            : IS_STATIC
            ? global[name] || (global[name] = {})
            : (global[name] || {})[PROTOTYPE]
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {})
          var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
          var key, own, out, exp
          if (IS_GLOBAL) source = name
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined
            // export native or passed
            out = (own ? target : source)[key]
            // bind timers to global for call from export context
            exp =
              IS_BIND && own
                ? ctx(out, global)
                : IS_PROTO && typeof out == 'function'
                ? ctx(Function.call, out)
                : out
            // extend global
            if (target) redefine(target, key, out, type & $export.U)
            // export
            if (exports[key] != out) hide(exports, key, exp)
            if (IS_PROTO && expProto[key] != out) expProto[key] = out
          }
        }
        global.core = core
        // type bitmap
        $export.F = 1 // forced
        $export.G = 2 // global
        $export.S = 4 // static
        $export.P = 8 // proto
        $export.B = 16 // bind
        $export.W = 32 // wrap
        $export.U = 64 // safe
        $export.R = 128 // real proto method for `library`
        module.exports = $export
      },
      {
        './_global': '../node_modules/core-js/modules/_global.js',
        './_core': '../node_modules/core-js/modules/_core.js',
        './_hide': '../node_modules/core-js/modules/_hide.js',
        './_redefine': '../node_modules/core-js/modules/_redefine.js',
        './_ctx': '../node_modules/core-js/modules/_ctx.js'
      }
    ],
    '../node_modules/core-js/modules/_cof.js': [
      function(require, module, exports) {
        var toString = {}.toString

        module.exports = function(it) {
          return toString.call(it).slice(8, -1)
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_iobject.js': [
      function(require, module, exports) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = require('./_cof')
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function(it) {
              return cof(it) == 'String' ? it.split('') : Object(it)
            }
      },
      { './_cof': '../node_modules/core-js/modules/_cof.js' }
    ],
    '../node_modules/core-js/modules/_defined.js': [
      function(require, module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it)
          return it
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_to-object.js': [
      function(require, module, exports) {
        // 7.1.13 ToObject(argument)
        var defined = require('./_defined')
        module.exports = function(it) {
          return Object(defined(it))
        }
      },
      { './_defined': '../node_modules/core-js/modules/_defined.js' }
    ],
    '../node_modules/core-js/modules/_to-integer.js': [
      function(require, module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil
        var floor = Math.floor
        module.exports = function(it) {
          return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it)
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_to-length.js': [
      function(require, module, exports) {
        // 7.1.15 ToLength
        var toInteger = require('./_to-integer')
        var min = Math.min
        module.exports = function(it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
        }
      },
      { './_to-integer': '../node_modules/core-js/modules/_to-integer.js' }
    ],
    '../node_modules/core-js/modules/_is-array.js': [
      function(require, module, exports) {
        // 7.2.2 IsArray(argument)
        var cof = require('./_cof')
        module.exports =
          Array.isArray ||
          function isArray(arg) {
            return cof(arg) == 'Array'
          }
      },
      { './_cof': '../node_modules/core-js/modules/_cof.js' }
    ],
    '../node_modules/core-js/modules/_library.js': [
      function(require, module, exports) {
        module.exports = false
      },
      {}
    ],
    '../node_modules/core-js/modules/_shared.js': [
      function(require, module, exports) {
        var core = require('./_core')
        var global = require('./_global')
        var SHARED = '__core-js_shared__'
        var store = global[SHARED] || (global[SHARED] = {})

        ;(module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {})
        })('versions', []).push({
          version: core.version,
          mode: require('./_library') ? 'pure' : 'global',
          copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
        })
      },
      {
        './_core': '../node_modules/core-js/modules/_core.js',
        './_global': '../node_modules/core-js/modules/_global.js',
        './_library': '../node_modules/core-js/modules/_library.js'
      }
    ],
    '../node_modules/core-js/modules/_wks.js': [
      function(require, module, exports) {
        var store = require('./_shared')('wks')
        var uid = require('./_uid')
        var Symbol = require('./_global').Symbol
        var USE_SYMBOL = typeof Symbol == 'function'

        var $exports = (module.exports = function(name) {
          return (
            store[name] ||
            (store[name] =
              (USE_SYMBOL && Symbol[name]) ||
              (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
          )
        })

        $exports.store = store
      },
      {
        './_shared': '../node_modules/core-js/modules/_shared.js',
        './_uid': '../node_modules/core-js/modules/_uid.js',
        './_global': '../node_modules/core-js/modules/_global.js'
      }
    ],
    '../node_modules/core-js/modules/_array-species-constructor.js': [
      function(require, module, exports) {
        var isObject = require('./_is-object')
        var isArray = require('./_is-array')
        var SPECIES = require('./_wks')('species')

        module.exports = function(original) {
          var C
          if (isArray(original)) {
            C = original.constructor
            // cross-realm fallback
            if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
              C = undefined
            if (isObject(C)) {
              C = C[SPECIES]
              if (C === null) C = undefined
            }
          }
          return C === undefined ? Array : C
        }
      },
      {
        './_is-object': '../node_modules/core-js/modules/_is-object.js',
        './_is-array': '../node_modules/core-js/modules/_is-array.js',
        './_wks': '../node_modules/core-js/modules/_wks.js'
      }
    ],
    '../node_modules/core-js/modules/_array-species-create.js': [
      function(require, module, exports) {
        // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
        var speciesConstructor = require('./_array-species-constructor')

        module.exports = function(original, length) {
          return new (speciesConstructor(original))(length)
        }
      },
      {
        './_array-species-constructor':
          '../node_modules/core-js/modules/_array-species-constructor.js'
      }
    ],
    '../node_modules/core-js/modules/_array-methods.js': [
      function(require, module, exports) {
        // 0 -> Array#forEach
        // 1 -> Array#map
        // 2 -> Array#filter
        // 3 -> Array#some
        // 4 -> Array#every
        // 5 -> Array#find
        // 6 -> Array#findIndex
        var ctx = require('./_ctx')
        var IObject = require('./_iobject')
        var toObject = require('./_to-object')
        var toLength = require('./_to-length')
        var asc = require('./_array-species-create')
        module.exports = function(TYPE, $create) {
          var IS_MAP = TYPE == 1
          var IS_FILTER = TYPE == 2
          var IS_SOME = TYPE == 3
          var IS_EVERY = TYPE == 4
          var IS_FIND_INDEX = TYPE == 6
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX
          var create = $create || asc
          return function($this, callbackfn, that) {
            var O = toObject($this)
            var self = IObject(O)
            var f = ctx(callbackfn, that, 3)
            var length = toLength(self.length)
            var index = 0
            var result = IS_MAP
              ? create($this, length)
              : IS_FILTER
              ? create($this, 0)
              : undefined
            var val, res
            for (; length > index; index++)
              if (NO_HOLES || index in self) {
                val = self[index]
                res = f(val, index, O)
                if (TYPE) {
                  if (IS_MAP) result[index] = res
                  // map
                  else if (res)
                    switch (TYPE) {
                      case 3:
                        return true // some
                      case 5:
                        return val // find
                      case 6:
                        return index // findIndex
                      case 2:
                        result.push(val) // filter
                    }
                  else if (IS_EVERY) return false // every
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result
          }
        }
      },
      {
        './_ctx': '../node_modules/core-js/modules/_ctx.js',
        './_iobject': '../node_modules/core-js/modules/_iobject.js',
        './_to-object': '../node_modules/core-js/modules/_to-object.js',
        './_to-length': '../node_modules/core-js/modules/_to-length.js',
        './_array-species-create':
          '../node_modules/core-js/modules/_array-species-create.js'
      }
    ],
    '../node_modules/core-js/modules/_add-to-unscopables.js': [
      function(require, module, exports) {
        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = require('./_wks')('unscopables')
        var ArrayProto = Array.prototype
        if (ArrayProto[UNSCOPABLES] == undefined)
          require('./_hide')(ArrayProto, UNSCOPABLES, {})
        module.exports = function(key) {
          ArrayProto[UNSCOPABLES][key] = true
        }
      },
      {
        './_wks': '../node_modules/core-js/modules/_wks.js',
        './_hide': '../node_modules/core-js/modules/_hide.js'
      }
    ],
    '../node_modules/core-js/modules/es6.array.find.js': [
      function(require, module, exports) {
        'use strict'
        // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
        var $export = require('./_export')
        var $find = require('./_array-methods')(5)
        var KEY = 'find'
        var forced = true
        // Shouldn't skip holes
        if (KEY in [])
          Array(1)[KEY](function() {
            forced = false
          })
        $export($export.P + $export.F * forced, 'Array', {
          find: function find(callbackfn /* , that = undefined */) {
            return $find(
              this,
              callbackfn,
              arguments.length > 1 ? arguments[1] : undefined
            )
          }
        })
        require('./_add-to-unscopables')(KEY)
      },
      {
        './_export': '../node_modules/core-js/modules/_export.js',
        './_array-methods': '../node_modules/core-js/modules/_array-methods.js',
        './_add-to-unscopables':
          '../node_modules/core-js/modules/_add-to-unscopables.js'
      }
    ],
    '../node_modules/core-js/fn/array/find.js': [
      function(require, module, exports) {
        require('../../modules/es6.array.find')
        module.exports = require('../../modules/_core').Array.find
      },
      {
        '../../modules/es6.array.find':
          '../node_modules/core-js/modules/es6.array.find.js',
        '../../modules/_core': '../node_modules/core-js/modules/_core.js'
      }
    ],
    '../node_modules/core-js/modules/_classof.js': [
      function(require, module, exports) {
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = require('./_cof')
        var TAG = require('./_wks')('toStringTag')
        // ES3 wrong here
        var ARG =
          cof(
            (function() {
              return arguments
            })()
          ) == 'Arguments'

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
          try {
            return it[key]
          } catch (e) {
            /* empty */
          }
        }

        module.exports = function(it) {
          var O, T, B
          return it === undefined
            ? 'Undefined'
            : it === null
            ? 'Null'
            : // @@toStringTag case
            typeof (T = tryGet((O = Object(it)), TAG)) == 'string'
            ? T
            : // builtinTag case
            ARG
            ? cof(O)
            : // ES3 arguments fallback
            (B = cof(O)) == 'Object' && typeof O.callee == 'function'
            ? 'Arguments'
            : B
        }
      },
      {
        './_cof': '../node_modules/core-js/modules/_cof.js',
        './_wks': '../node_modules/core-js/modules/_wks.js'
      }
    ],
    '../node_modules/core-js/modules/es6.object.to-string.js': [
      function(require, module, exports) {
        'use strict'
        // 19.1.3.6 Object.prototype.toString()
        var classof = require('./_classof')
        var test = {}
        test[require('./_wks')('toStringTag')] = 'z'
        if (test + '' != '[object z]') {
          require('./_redefine')(
            Object.prototype,
            'toString',
            function toString() {
              return '[object ' + classof(this) + ']'
            },
            true
          )
        }
      },
      {
        './_classof': '../node_modules/core-js/modules/_classof.js',
        './_wks': '../node_modules/core-js/modules/_wks.js',
        './_redefine': '../node_modules/core-js/modules/_redefine.js'
      }
    ],
    '../node_modules/core-js/modules/_string-at.js': [
      function(require, module, exports) {
        var toInteger = require('./_to-integer')
        var defined = require('./_defined')
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function(TO_STRING) {
          return function(that, pos) {
            var s = String(defined(that))
            var i = toInteger(pos)
            var l = s.length
            var a, b
            if (i < 0 || i >= l) return TO_STRING ? '' : undefined
            a = s.charCodeAt(i)
            return a < 0xd800 ||
              a > 0xdbff ||
              i + 1 === l ||
              (b = s.charCodeAt(i + 1)) < 0xdc00 ||
              b > 0xdfff
              ? TO_STRING
                ? s.charAt(i)
                : a
              : TO_STRING
              ? s.slice(i, i + 2)
              : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000
          }
        }
      },
      {
        './_to-integer': '../node_modules/core-js/modules/_to-integer.js',
        './_defined': '../node_modules/core-js/modules/_defined.js'
      }
    ],
    '../node_modules/core-js/modules/_iterators.js': [
      function(require, module, exports) {
        module.exports = {}
      },
      {}
    ],
    '../node_modules/core-js/modules/_to-iobject.js': [
      function(require, module, exports) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = require('./_iobject')
        var defined = require('./_defined')
        module.exports = function(it) {
          return IObject(defined(it))
        }
      },
      {
        './_iobject': '../node_modules/core-js/modules/_iobject.js',
        './_defined': '../node_modules/core-js/modules/_defined.js'
      }
    ],
    '../node_modules/core-js/modules/_to-absolute-index.js': [
      function(require, module, exports) {
        var toInteger = require('./_to-integer')
        var max = Math.max
        var min = Math.min
        module.exports = function(index, length) {
          index = toInteger(index)
          return index < 0 ? max(index + length, 0) : min(index, length)
        }
      },
      { './_to-integer': '../node_modules/core-js/modules/_to-integer.js' }
    ],
    '../node_modules/core-js/modules/_array-includes.js': [
      function(require, module, exports) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = require('./_to-iobject')
        var toLength = require('./_to-length')
        var toAbsoluteIndex = require('./_to-absolute-index')
        module.exports = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIObject($this)
            var length = toLength(O.length)
            var index = toAbsoluteIndex(fromIndex, length)
            var value
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++]
                // eslint-disable-next-line no-self-compare
                if (value != value) return true
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++)
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el) return IS_INCLUDES || index || 0
                }
            return !IS_INCLUDES && -1
          }
        }
      },
      {
        './_to-iobject': '../node_modules/core-js/modules/_to-iobject.js',
        './_to-length': '../node_modules/core-js/modules/_to-length.js',
        './_to-absolute-index':
          '../node_modules/core-js/modules/_to-absolute-index.js'
      }
    ],
    '../node_modules/core-js/modules/_shared-key.js': [
      function(require, module, exports) {
        var shared = require('./_shared')('keys')
        var uid = require('./_uid')
        module.exports = function(key) {
          return shared[key] || (shared[key] = uid(key))
        }
      },
      {
        './_shared': '../node_modules/core-js/modules/_shared.js',
        './_uid': '../node_modules/core-js/modules/_uid.js'
      }
    ],
    '../node_modules/core-js/modules/_object-keys-internal.js': [
      function(require, module, exports) {
        var has = require('./_has')
        var toIObject = require('./_to-iobject')
        var arrayIndexOf = require('./_array-includes')(false)
        var IE_PROTO = require('./_shared-key')('IE_PROTO')

        module.exports = function(object, names) {
          var O = toIObject(object)
          var i = 0
          var result = []
          var key
          for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key)
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~arrayIndexOf(result, key) || result.push(key)
            }
          return result
        }
      },
      {
        './_has': '../node_modules/core-js/modules/_has.js',
        './_to-iobject': '../node_modules/core-js/modules/_to-iobject.js',
        './_array-includes':
          '../node_modules/core-js/modules/_array-includes.js',
        './_shared-key': '../node_modules/core-js/modules/_shared-key.js'
      }
    ],
    '../node_modules/core-js/modules/_enum-bug-keys.js': [
      function(require, module, exports) {
        // IE 8- don't enum bug keys
        module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
          ','
        )
      },
      {}
    ],
    '../node_modules/core-js/modules/_object-keys.js': [
      function(require, module, exports) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = require('./_object-keys-internal')
        var enumBugKeys = require('./_enum-bug-keys')

        module.exports =
          Object.keys ||
          function keys(O) {
            return $keys(O, enumBugKeys)
          }
      },
      {
        './_object-keys-internal':
          '../node_modules/core-js/modules/_object-keys-internal.js',
        './_enum-bug-keys': '../node_modules/core-js/modules/_enum-bug-keys.js'
      }
    ],
    '../node_modules/core-js/modules/_object-dps.js': [
      function(require, module, exports) {
        var dP = require('./_object-dp')
        var anObject = require('./_an-object')
        var getKeys = require('./_object-keys')

        module.exports = require('./_descriptors')
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O)
              var keys = getKeys(Properties)
              var length = keys.length
              var i = 0
              var P
              while (length > i) dP.f(O, (P = keys[i++]), Properties[P])
              return O
            }
      },
      {
        './_object-dp': '../node_modules/core-js/modules/_object-dp.js',
        './_an-object': '../node_modules/core-js/modules/_an-object.js',
        './_object-keys': '../node_modules/core-js/modules/_object-keys.js',
        './_descriptors': '../node_modules/core-js/modules/_descriptors.js'
      }
    ],
    '../node_modules/core-js/modules/_html.js': [
      function(require, module, exports) {
        var document = require('./_global').document
        module.exports = document && document.documentElement
      },
      { './_global': '../node_modules/core-js/modules/_global.js' }
    ],
    '../node_modules/core-js/modules/_object-create.js': [
      function(require, module, exports) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = require('./_an-object')
        var dPs = require('./_object-dps')
        var enumBugKeys = require('./_enum-bug-keys')
        var IE_PROTO = require('./_shared-key')('IE_PROTO')
        var Empty = function() {
          /* empty */
        }
        var PROTOTYPE = 'prototype'

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = require('./_dom-create')('iframe')
          var i = enumBugKeys.length
          var lt = '<'
          var gt = '>'
          var iframeDocument
          iframe.style.display = 'none'
          require('./_html').appendChild(iframe)
          iframe.src = 'javascript:' // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);
          iframeDocument = iframe.contentWindow.document
          iframeDocument.open()
          iframeDocument.write(
            lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt
          )
          iframeDocument.close()
          createDict = iframeDocument.F
          while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]]
          return createDict()
        }

        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result
            if (O !== null) {
              Empty[PROTOTYPE] = anObject(O)
              result = new Empty()
              Empty[PROTOTYPE] = null
              // add "__proto__" for Object.getPrototypeOf polyfill
              result[IE_PROTO] = O
            } else result = createDict()
            return Properties === undefined ? result : dPs(result, Properties)
          }
      },
      {
        './_an-object': '../node_modules/core-js/modules/_an-object.js',
        './_object-dps': '../node_modules/core-js/modules/_object-dps.js',
        './_enum-bug-keys': '../node_modules/core-js/modules/_enum-bug-keys.js',
        './_shared-key': '../node_modules/core-js/modules/_shared-key.js',
        './_dom-create': '../node_modules/core-js/modules/_dom-create.js',
        './_html': '../node_modules/core-js/modules/_html.js'
      }
    ],
    '../node_modules/core-js/modules/_set-to-string-tag.js': [
      function(require, module, exports) {
        var def = require('./_object-dp').f
        var has = require('./_has')
        var TAG = require('./_wks')('toStringTag')

        module.exports = function(it, tag, stat) {
          if (it && !has((it = stat ? it : it.prototype), TAG))
            def(it, TAG, { configurable: true, value: tag })
        }
      },
      {
        './_object-dp': '../node_modules/core-js/modules/_object-dp.js',
        './_has': '../node_modules/core-js/modules/_has.js',
        './_wks': '../node_modules/core-js/modules/_wks.js'
      }
    ],
    '../node_modules/core-js/modules/_iter-create.js': [
      function(require, module, exports) {
        'use strict'
        var create = require('./_object-create')
        var descriptor = require('./_property-desc')
        var setToStringTag = require('./_set-to-string-tag')
        var IteratorPrototype = {}

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        require('./_hide')(
          IteratorPrototype,
          require('./_wks')('iterator'),
          function() {
            return this
          }
        )

        module.exports = function(Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, {
            next: descriptor(1, next)
          })
          setToStringTag(Constructor, NAME + ' Iterator')
        }
      },
      {
        './_object-create': '../node_modules/core-js/modules/_object-create.js',
        './_property-desc': '../node_modules/core-js/modules/_property-desc.js',
        './_set-to-string-tag':
          '../node_modules/core-js/modules/_set-to-string-tag.js',
        './_hide': '../node_modules/core-js/modules/_hide.js',
        './_wks': '../node_modules/core-js/modules/_wks.js'
      }
    ],
    '../node_modules/core-js/modules/_object-gpo.js': [
      function(require, module, exports) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = require('./_has')
        var toObject = require('./_to-object')
        var IE_PROTO = require('./_shared-key')('IE_PROTO')
        var ObjectProto = Object.prototype

        module.exports =
          Object.getPrototypeOf ||
          function(O) {
            O = toObject(O)
            if (has(O, IE_PROTO)) return O[IE_PROTO]
            if (
              typeof O.constructor == 'function' &&
              O instanceof O.constructor
            ) {
              return O.constructor.prototype
            }
            return O instanceof Object ? ObjectProto : null
          }
      },
      {
        './_has': '../node_modules/core-js/modules/_has.js',
        './_to-object': '../node_modules/core-js/modules/_to-object.js',
        './_shared-key': '../node_modules/core-js/modules/_shared-key.js'
      }
    ],
    '../node_modules/core-js/modules/_iter-define.js': [
      function(require, module, exports) {
        'use strict'
        var LIBRARY = require('./_library')
        var $export = require('./_export')
        var redefine = require('./_redefine')
        var hide = require('./_hide')
        var Iterators = require('./_iterators')
        var $iterCreate = require('./_iter-create')
        var setToStringTag = require('./_set-to-string-tag')
        var getPrototypeOf = require('./_object-gpo')
        var ITERATOR = require('./_wks')('iterator')
        var BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = '@@iterator'
        var KEYS = 'keys'
        var VALUES = 'values'

        var returnThis = function() {
          return this
        }

        module.exports = function(
          Base,
          NAME,
          Constructor,
          next,
          DEFAULT,
          IS_SET,
          FORCED
        ) {
          $iterCreate(Constructor, NAME, next)
          var getMethod = function(kind) {
            if (!BUGGY && kind in proto) return proto[kind]
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind)
                }
              case VALUES:
                return function values() {
                  return new Constructor(this, kind)
                }
            }
            return function entries() {
              return new Constructor(this, kind)
            }
          }
          var TAG = NAME + ' Iterator'
          var DEF_VALUES = DEFAULT == VALUES
          var VALUES_BUG = false
          var proto = Base.prototype
          var $native =
            proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT])
          var $default = $native || getMethod(DEFAULT)
          var $entries = DEFAULT
            ? !DEF_VALUES
              ? $default
              : getMethod('entries')
            : undefined
          var $anyNative = NAME == 'Array' ? proto.entries || $native : $native
          var methods, key, IteratorPrototype
          // Fix native
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()))
            if (
              IteratorPrototype !== Object.prototype &&
              IteratorPrototype.next
            ) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true)
              // fix for some old engines
              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function')
                hide(IteratorPrototype, ITERATOR, returnThis)
            }
          }
          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true
            $default = function values() {
              return $native.call(this)
            }
          }
          // Define iterator
          if (
            (!LIBRARY || FORCED) &&
            (BUGGY || VALUES_BUG || !proto[ITERATOR])
          ) {
            hide(proto, ITERATOR, $default)
          }
          // Plug for library
          Iterators[NAME] = $default
          Iterators[TAG] = returnThis
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            }
            if (FORCED)
              for (key in methods) {
                if (!(key in proto)) redefine(proto, key, methods[key])
              }
            else
              $export(
                $export.P + $export.F * (BUGGY || VALUES_BUG),
                NAME,
                methods
              )
          }
          return methods
        }
      },
      {
        './_library': '../node_modules/core-js/modules/_library.js',
        './_export': '../node_modules/core-js/modules/_export.js',
        './_redefine': '../node_modules/core-js/modules/_redefine.js',
        './_hide': '../node_modules/core-js/modules/_hide.js',
        './_iterators': '../node_modules/core-js/modules/_iterators.js',
        './_iter-create': '../node_modules/core-js/modules/_iter-create.js',
        './_set-to-string-tag':
          '../node_modules/core-js/modules/_set-to-string-tag.js',
        './_object-gpo': '../node_modules/core-js/modules/_object-gpo.js',
        './_wks': '../node_modules/core-js/modules/_wks.js'
      }
    ],
    '../node_modules/core-js/modules/es6.string.iterator.js': [
      function(require, module, exports) {
        'use strict'
        var $at = require('./_string-at')(true)

        // 21.1.3.27 String.prototype[@@iterator]()
        require('./_iter-define')(
          String,
          'String',
          function(iterated) {
            this._t = String(iterated) // target
            this._i = 0 // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
          },
          function() {
            var O = this._t
            var index = this._i
            var point
            if (index >= O.length) return { value: undefined, done: true }
            point = $at(O, index)
            this._i += point.length
            return { value: point, done: false }
          }
        )
      },
      {
        './_string-at': '../node_modules/core-js/modules/_string-at.js',
        './_iter-define': '../node_modules/core-js/modules/_iter-define.js'
      }
    ],
    '../node_modules/core-js/modules/_iter-step.js': [
      function(require, module, exports) {
        module.exports = function(done, value) {
          return { value: value, done: !!done }
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/es6.array.iterator.js': [
      function(require, module, exports) {
        'use strict'
        var addToUnscopables = require('./_add-to-unscopables')
        var step = require('./_iter-step')
        var Iterators = require('./_iterators')
        var toIObject = require('./_to-iobject')

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = require('./_iter-define')(
          Array,
          'Array',
          function(iterated, kind) {
            this._t = toIObject(iterated) // target
            this._i = 0 // next index
            this._k = kind // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
          },
          function() {
            var O = this._t
            var kind = this._k
            var index = this._i++
            if (!O || index >= O.length) {
              this._t = undefined
              return step(1)
            }
            if (kind == 'keys') return step(0, index)
            if (kind == 'values') return step(0, O[index])
            return step(0, [index, O[index]])
          },
          'values'
        )

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array

        addToUnscopables('keys')
        addToUnscopables('values')
        addToUnscopables('entries')
      },
      {
        './_add-to-unscopables':
          '../node_modules/core-js/modules/_add-to-unscopables.js',
        './_iter-step': '../node_modules/core-js/modules/_iter-step.js',
        './_iterators': '../node_modules/core-js/modules/_iterators.js',
        './_to-iobject': '../node_modules/core-js/modules/_to-iobject.js',
        './_iter-define': '../node_modules/core-js/modules/_iter-define.js'
      }
    ],
    '../node_modules/core-js/modules/web.dom.iterable.js': [
      function(require, module, exports) {
        var $iterators = require('./es6.array.iterator')
        var getKeys = require('./_object-keys')
        var redefine = require('./_redefine')
        var global = require('./_global')
        var hide = require('./_hide')
        var Iterators = require('./_iterators')
        var wks = require('./_wks')
        var ITERATOR = wks('iterator')
        var TO_STRING_TAG = wks('toStringTag')
        var ArrayValues = Iterators.Array

        var DOMIterables = {
          CSSRuleList: true, // TODO: Not spec compliant, should be false.
          CSSStyleDeclaration: false,
          CSSValueList: false,
          ClientRectList: false,
          DOMRectList: false,
          DOMStringList: false,
          DOMTokenList: true,
          DataTransferItemList: false,
          FileList: false,
          HTMLAllCollection: false,
          HTMLCollection: false,
          HTMLFormElement: false,
          HTMLSelectElement: false,
          MediaList: true, // TODO: Not spec compliant, should be false.
          MimeTypeArray: false,
          NamedNodeMap: false,
          NodeList: true,
          PaintRequestList: false,
          Plugin: false,
          PluginArray: false,
          SVGLengthList: false,
          SVGNumberList: false,
          SVGPathSegList: false,
          SVGPointList: false,
          SVGStringList: false,
          SVGTransformList: false,
          SourceBufferList: false,
          StyleSheetList: true, // TODO: Not spec compliant, should be false.
          TextTrackCueList: false,
          TextTrackList: false,
          TouchList: false
        }

        for (
          var collections = getKeys(DOMIterables), i = 0;
          i < collections.length;
          i++
        ) {
          var NAME = collections[i]
          var explicit = DOMIterables[NAME]
          var Collection = global[NAME]
          var proto = Collection && Collection.prototype
          var key
          if (proto) {
            if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues)
            if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME)
            Iterators[NAME] = ArrayValues
            if (explicit)
              for (key in $iterators)
                if (!proto[key]) redefine(proto, key, $iterators[key], true)
          }
        }
      },
      {
        './es6.array.iterator':
          '../node_modules/core-js/modules/es6.array.iterator.js',
        './_object-keys': '../node_modules/core-js/modules/_object-keys.js',
        './_redefine': '../node_modules/core-js/modules/_redefine.js',
        './_global': '../node_modules/core-js/modules/_global.js',
        './_hide': '../node_modules/core-js/modules/_hide.js',
        './_iterators': '../node_modules/core-js/modules/_iterators.js',
        './_wks': '../node_modules/core-js/modules/_wks.js'
      }
    ],
    '../node_modules/core-js/modules/_an-instance.js': [
      function(require, module, exports) {
        module.exports = function(it, Constructor, name, forbiddenField) {
          if (
            !(it instanceof Constructor) ||
            (forbiddenField !== undefined && forbiddenField in it)
          ) {
            throw TypeError(name + ': incorrect invocation!')
          }
          return it
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_iter-call.js': [
      function(require, module, exports) {
        // call something on iterator step with safe closing on error
        var anObject = require('./_an-object')
        module.exports = function(iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value)
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (e) {
            var ret = iterator['return']
            if (ret !== undefined) anObject(ret.call(iterator))
            throw e
          }
        }
      },
      { './_an-object': '../node_modules/core-js/modules/_an-object.js' }
    ],
    '../node_modules/core-js/modules/_is-array-iter.js': [
      function(require, module, exports) {
        // check on default Array iterator
        var Iterators = require('./_iterators')
        var ITERATOR = require('./_wks')('iterator')
        var ArrayProto = Array.prototype

        module.exports = function(it) {
          return (
            it !== undefined &&
            (Iterators.Array === it || ArrayProto[ITERATOR] === it)
          )
        }
      },
      {
        './_iterators': '../node_modules/core-js/modules/_iterators.js',
        './_wks': '../node_modules/core-js/modules/_wks.js'
      }
    ],
    '../node_modules/core-js/modules/core.get-iterator-method.js': [
      function(require, module, exports) {
        var classof = require('./_classof')
        var ITERATOR = require('./_wks')('iterator')
        var Iterators = require('./_iterators')
        module.exports = require('./_core').getIteratorMethod = function(it) {
          if (it != undefined)
            return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)]
        }
      },
      {
        './_classof': '../node_modules/core-js/modules/_classof.js',
        './_wks': '../node_modules/core-js/modules/_wks.js',
        './_iterators': '../node_modules/core-js/modules/_iterators.js',
        './_core': '../node_modules/core-js/modules/_core.js'
      }
    ],
    '../node_modules/core-js/modules/_for-of.js': [
      function(require, module, exports) {
        var ctx = require('./_ctx')
        var call = require('./_iter-call')
        var isArrayIter = require('./_is-array-iter')
        var anObject = require('./_an-object')
        var toLength = require('./_to-length')
        var getIterFn = require('./core.get-iterator-method')
        var BREAK = {}
        var RETURN = {}
        var exports = (module.exports = function(
          iterable,
          entries,
          fn,
          that,
          ITERATOR
        ) {
          var iterFn = ITERATOR
            ? function() {
                return iterable
              }
            : getIterFn(iterable)
          var f = ctx(fn, that, entries ? 2 : 1)
          var index = 0
          var length, step, iterator, result
          if (typeof iterFn != 'function')
            throw TypeError(iterable + ' is not iterable!')
          // fast case for arrays with default iterator
          if (isArrayIter(iterFn))
            for (length = toLength(iterable.length); length > index; index++) {
              result = entries
                ? f(anObject((step = iterable[index]))[0], step[1])
                : f(iterable[index])
              if (result === BREAK || result === RETURN) return result
            }
          else
            for (
              iterator = iterFn.call(iterable);
              !(step = iterator.next()).done;

            ) {
              result = call(iterator, f, step.value, entries)
              if (result === BREAK || result === RETURN) return result
            }
        })
        exports.BREAK = BREAK
        exports.RETURN = RETURN
      },
      {
        './_ctx': '../node_modules/core-js/modules/_ctx.js',
        './_iter-call': '../node_modules/core-js/modules/_iter-call.js',
        './_is-array-iter': '../node_modules/core-js/modules/_is-array-iter.js',
        './_an-object': '../node_modules/core-js/modules/_an-object.js',
        './_to-length': '../node_modules/core-js/modules/_to-length.js',
        './core.get-iterator-method':
          '../node_modules/core-js/modules/core.get-iterator-method.js'
      }
    ],
    '../node_modules/core-js/modules/_species-constructor.js': [
      function(require, module, exports) {
        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = require('./_an-object')
        var aFunction = require('./_a-function')
        var SPECIES = require('./_wks')('species')
        module.exports = function(O, D) {
          var C = anObject(O).constructor
          var S
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined
            ? D
            : aFunction(S)
        }
      },
      {
        './_an-object': '../node_modules/core-js/modules/_an-object.js',
        './_a-function': '../node_modules/core-js/modules/_a-function.js',
        './_wks': '../node_modules/core-js/modules/_wks.js'
      }
    ],
    '../node_modules/core-js/modules/_invoke.js': [
      function(require, module, exports) {
        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function(fn, args, that) {
          var un = that === undefined
          switch (args.length) {
            case 0:
              return un ? fn() : fn.call(that)
            case 1:
              return un ? fn(args[0]) : fn.call(that, args[0])
            case 2:
              return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1])
            case 3:
              return un
                ? fn(args[0], args[1], args[2])
                : fn.call(that, args[0], args[1], args[2])
            case 4:
              return un
                ? fn(args[0], args[1], args[2], args[3])
                : fn.call(that, args[0], args[1], args[2], args[3])
          }
          return fn.apply(that, args)
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_task.js': [
      function(require, module, exports) {
        var ctx = require('./_ctx')
        var invoke = require('./_invoke')
        var html = require('./_html')
        var cel = require('./_dom-create')
        var global = require('./_global')
        var process = global.process
        var setTask = global.setImmediate
        var clearTask = global.clearImmediate
        var MessageChannel = global.MessageChannel
        var Dispatch = global.Dispatch
        var counter = 0
        var queue = {}
        var ONREADYSTATECHANGE = 'onreadystatechange'
        var defer, channel, port
        var run = function() {
          var id = +this
          // eslint-disable-next-line no-prototype-builtins
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id]
            delete queue[id]
            fn()
          }
        }
        var listener = function(event) {
          run.call(event.data)
        }
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            var args = []
            var i = 1
            while (arguments.length > i) args.push(arguments[i++])
            queue[++counter] = function() {
              // eslint-disable-next-line no-new-func
              invoke(typeof fn == 'function' ? fn : Function(fn), args)
            }
            defer(counter)
            return counter
          }
          clearTask = function clearImmediate(id) {
            delete queue[id]
          }
          // Node.js 0.8-
          if (require('./_cof')(process) == 'process') {
            defer = function(id) {
              process.nextTick(ctx(run, id, 1))
            }
            // Sphere (JS game engine) Dispatch API
          } else if (Dispatch && Dispatch.now) {
            defer = function(id) {
              Dispatch.now(ctx(run, id, 1))
            }
            // Browsers with MessageChannel, includes WebWorkers
          } else if (MessageChannel) {
            channel = new MessageChannel()
            port = channel.port2
            channel.port1.onmessage = listener
            defer = ctx(port.postMessage, port, 1)
            // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (
            global.addEventListener &&
            typeof postMessage == 'function' &&
            !global.importScripts
          ) {
            defer = function(id) {
              global.postMessage(id + '', '*')
            }
            global.addEventListener('message', listener, false)
            // IE8-
          } else if (ONREADYSTATECHANGE in cel('script')) {
            defer = function(id) {
              html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
                html.removeChild(this)
                run.call(id)
              }
            }
            // Rest old browsers
          } else {
            defer = function(id) {
              setTimeout(ctx(run, id, 1), 0)
            }
          }
        }
        module.exports = {
          set: setTask,
          clear: clearTask
        }
      },
      {
        './_ctx': '../node_modules/core-js/modules/_ctx.js',
        './_invoke': '../node_modules/core-js/modules/_invoke.js',
        './_html': '../node_modules/core-js/modules/_html.js',
        './_dom-create': '../node_modules/core-js/modules/_dom-create.js',
        './_global': '../node_modules/core-js/modules/_global.js',
        './_cof': '../node_modules/core-js/modules/_cof.js'
      }
    ],
    '../node_modules/core-js/modules/_microtask.js': [
      function(require, module, exports) {
        var global = require('./_global')
        var macrotask = require('./_task').set
        var Observer = global.MutationObserver || global.WebKitMutationObserver
        var process = global.process
        var Promise = global.Promise
        var isNode = require('./_cof')(process) == 'process'

        module.exports = function() {
          var head, last, notify

          var flush = function() {
            var parent, fn
            if (isNode && (parent = process.domain)) parent.exit()
            while (head) {
              fn = head.fn
              head = head.next
              try {
                fn()
              } catch (e) {
                if (head) notify()
                else last = undefined
                throw e
              }
            }
            last = undefined
            if (parent) parent.enter()
          }

          // Node.js
          if (isNode) {
            notify = function() {
              process.nextTick(flush)
            }
            // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
          } else if (
            Observer &&
            !(global.navigator && global.navigator.standalone)
          ) {
            var toggle = true
            var node = document.createTextNode('')
            new Observer(flush).observe(node, { characterData: true }) // eslint-disable-line no-new
            notify = function() {
              node.data = toggle = !toggle
            }
            // environments with maybe non-completely correct, but existent Promise
          } else if (Promise && Promise.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            var promise = Promise.resolve(undefined)
            notify = function() {
              promise.then(flush)
            }
            // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessag
            // - onreadystatechange
            // - setTimeout
          } else {
            notify = function() {
              // strange IE + webpack dev server bug - use .call(global)
              macrotask.call(global, flush)
            }
          }

          return function(fn) {
            var task = { fn: fn, next: undefined }
            if (last) last.next = task
            if (!head) {
              head = task
              notify()
            }
            last = task
          }
        }
      },
      {
        './_global': '../node_modules/core-js/modules/_global.js',
        './_task': '../node_modules/core-js/modules/_task.js',
        './_cof': '../node_modules/core-js/modules/_cof.js'
      }
    ],
    '../node_modules/core-js/modules/_new-promise-capability.js': [
      function(require, module, exports) {
        'use strict'
        // 25.4.1.5 NewPromiseCapability(C)
        var aFunction = require('./_a-function')

        function PromiseCapability(C) {
          var resolve, reject
          this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined)
              throw TypeError('Bad Promise constructor')
            resolve = $$resolve
            reject = $$reject
          })
          this.resolve = aFunction(resolve)
          this.reject = aFunction(reject)
        }

        module.exports.f = function(C) {
          return new PromiseCapability(C)
        }
      },
      { './_a-function': '../node_modules/core-js/modules/_a-function.js' }
    ],
    '../node_modules/core-js/modules/_perform.js': [
      function(require, module, exports) {
        module.exports = function(exec) {
          try {
            return { e: false, v: exec() }
          } catch (e) {
            return { e: true, v: e }
          }
        }
      },
      {}
    ],
    '../node_modules/core-js/modules/_user-agent.js': [
      function(require, module, exports) {
        var global = require('./_global')
        var navigator = global.navigator

        module.exports = (navigator && navigator.userAgent) || ''
      },
      { './_global': '../node_modules/core-js/modules/_global.js' }
    ],
    '../node_modules/core-js/modules/_promise-resolve.js': [
      function(require, module, exports) {
        var anObject = require('./_an-object')
        var isObject = require('./_is-object')
        var newPromiseCapability = require('./_new-promise-capability')

        module.exports = function(C, x) {
          anObject(C)
          if (isObject(x) && x.constructor === C) return x
          var promiseCapability = newPromiseCapability.f(C)
          var resolve = promiseCapability.resolve
          resolve(x)
          return promiseCapability.promise
        }
      },
      {
        './_an-object': '../node_modules/core-js/modules/_an-object.js',
        './_is-object': '../node_modules/core-js/modules/_is-object.js',
        './_new-promise-capability':
          '../node_modules/core-js/modules/_new-promise-capability.js'
      }
    ],
    '../node_modules/core-js/modules/_redefine-all.js': [
      function(require, module, exports) {
        var redefine = require('./_redefine')
        module.exports = function(target, src, safe) {
          for (var key in src) redefine(target, key, src[key], safe)
          return target
        }
      },
      { './_redefine': '../node_modules/core-js/modules/_redefine.js' }
    ],
    '../node_modules/core-js/modules/_set-species.js': [
      function(require, module, exports) {
        'use strict'
        var global = require('./_global')
        var dP = require('./_object-dp')
        var DESCRIPTORS = require('./_descriptors')
        var SPECIES = require('./_wks')('species')

        module.exports = function(KEY) {
          var C = global[KEY]
          if (DESCRIPTORS && C && !C[SPECIES])
            dP.f(C, SPECIES, {
              configurable: true,
              get: function() {
                return this
              }
            })
        }
      },
      {
        './_global': '../node_modules/core-js/modules/_global.js',
        './_object-dp': '../node_modules/core-js/modules/_object-dp.js',
        './_descriptors': '../node_modules/core-js/modules/_descriptors.js',
        './_wks': '../node_modules/core-js/modules/_wks.js'
      }
    ],
    '../node_modules/core-js/modules/_iter-detect.js': [
      function(require, module, exports) {
        var ITERATOR = require('./_wks')('iterator')
        var SAFE_CLOSING = false

        try {
          var riter = [7][ITERATOR]()
          riter['return'] = function() {
            SAFE_CLOSING = true
          }
          // eslint-disable-next-line no-throw-literal
          Array.from(riter, function() {
            throw 2
          })
        } catch (e) {
          /* empty */
        }

        module.exports = function(exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) return false
          var safe = false
          try {
            var arr = [7]
            var iter = arr[ITERATOR]()
            iter.next = function() {
              return { done: (safe = true) }
            }
            arr[ITERATOR] = function() {
              return iter
            }
            exec(arr)
          } catch (e) {
            /* empty */
          }
          return safe
        }
      },
      { './_wks': '../node_modules/core-js/modules/_wks.js' }
    ],
    '../node_modules/core-js/modules/es6.promise.js': [
      function(require, module, exports) {
        'use strict'
        var LIBRARY = require('./_library')
        var global = require('./_global')
        var ctx = require('./_ctx')
        var classof = require('./_classof')
        var $export = require('./_export')
        var isObject = require('./_is-object')
        var aFunction = require('./_a-function')
        var anInstance = require('./_an-instance')
        var forOf = require('./_for-of')
        var speciesConstructor = require('./_species-constructor')
        var task = require('./_task').set
        var microtask = require('./_microtask')()
        var newPromiseCapabilityModule = require('./_new-promise-capability')
        var perform = require('./_perform')
        var userAgent = require('./_user-agent')
        var promiseResolve = require('./_promise-resolve')
        var PROMISE = 'Promise'
        var TypeError = global.TypeError
        var process = global.process
        var versions = process && process.versions
        var v8 = (versions && versions.v8) || ''
        var $Promise = global[PROMISE]
        var isNode = classof(process) == 'process'
        var empty = function() {
          /* empty */
        }
        var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper
        var newPromiseCapability = (newGenericPromiseCapability =
          newPromiseCapabilityModule.f)

        var USE_NATIVE = !!(function() {
          try {
            // correct subclassing with @@species support
            var promise = $Promise.resolve(1)
            var FakePromise = ((promise.constructor = {})[
              require('./_wks')('species')
            ] = function(exec) {
              exec(empty, empty)
            })
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (
              (isNode || typeof PromiseRejectionEvent == 'function') &&
              promise.then(empty) instanceof FakePromise &&
              // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
              // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
              // we can't detect it synchronously, so just check versions
              v8.indexOf('6.6') !== 0 &&
              userAgent.indexOf('Chrome/66') === -1
            )
          } catch (e) {
            /* empty */
          }
        })()

        // helpers
        var isThenable = function(it) {
          var then
          return isObject(it) && typeof (then = it.then) == 'function'
            ? then
            : false
        }
        var notify = function(promise, isReject) {
          if (promise._n) return
          promise._n = true
          var chain = promise._c
          microtask(function() {
            var value = promise._v
            var ok = promise._s == 1
            var i = 0
            var run = function(reaction) {
              var handler = ok ? reaction.ok : reaction.fail
              var resolve = reaction.resolve
              var reject = reaction.reject
              var domain = reaction.domain
              var result, then, exited
              try {
                if (handler) {
                  if (!ok) {
                    if (promise._h == 2) onHandleUnhandled(promise)
                    promise._h = 1
                  }
                  if (handler === true) result = value
                  else {
                    if (domain) domain.enter()
                    result = handler(value) // may throw
                    if (domain) {
                      domain.exit()
                      exited = true
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError('Promise-chain cycle'))
                  } else if ((then = isThenable(result))) {
                    then.call(result, resolve, reject)
                  } else resolve(result)
                } else reject(value)
              } catch (e) {
                if (domain && !exited) domain.exit()
                reject(e)
              }
            }
            while (chain.length > i) run(chain[i++]) // variable length - can't use forEach
            promise._c = []
            promise._n = false
            if (isReject && !promise._h) onUnhandled(promise)
          })
        }
        var onUnhandled = function(promise) {
          task.call(global, function() {
            var value = promise._v
            var unhandled = isUnhandled(promise)
            var result, handler, console
            if (unhandled) {
              result = perform(function() {
                if (isNode) {
                  process.emit('unhandledRejection', value, promise)
                } else if ((handler = global.onunhandledrejection)) {
                  handler({ promise: promise, reason: value })
                } else if ((console = global.console) && console.error) {
                  console.error('Unhandled promise rejection', value)
                }
              })
              // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
              promise._h = isNode || isUnhandled(promise) ? 2 : 1
            }
            promise._a = undefined
            if (unhandled && result.e) throw result.v
          })
        }
        var isUnhandled = function(promise) {
          return promise._h !== 1 && (promise._a || promise._c).length === 0
        }
        var onHandleUnhandled = function(promise) {
          task.call(global, function() {
            var handler
            if (isNode) {
              process.emit('rejectionHandled', promise)
            } else if ((handler = global.onrejectionhandled)) {
              handler({ promise: promise, reason: promise._v })
            }
          })
        }
        var $reject = function(value) {
          var promise = this
          if (promise._d) return
          promise._d = true
          promise = promise._w || promise // unwrap
          promise._v = value
          promise._s = 2
          if (!promise._a) promise._a = promise._c.slice()
          notify(promise, true)
        }
        var $resolve = function(value) {
          var promise = this
          var then
          if (promise._d) return
          promise._d = true
          promise = promise._w || promise // unwrap
          try {
            if (promise === value)
              throw TypeError("Promise can't be resolved itself")
            if ((then = isThenable(value))) {
              microtask(function() {
                var wrapper = { _w: promise, _d: false } // wrap
                try {
                  then.call(
                    value,
                    ctx($resolve, wrapper, 1),
                    ctx($reject, wrapper, 1)
                  )
                } catch (e) {
                  $reject.call(wrapper, e)
                }
              })
            } else {
              promise._v = value
              promise._s = 1
              notify(promise, false)
            }
          } catch (e) {
            $reject.call({ _w: promise, _d: false }, e) // wrap
          }
        }

        // constructor polyfill
        if (!USE_NATIVE) {
          // 25.4.3.1 Promise(executor)
          $Promise = function Promise(executor) {
            anInstance(this, $Promise, PROMISE, '_h')
            aFunction(executor)
            Internal.call(this)
            try {
              executor(ctx($resolve, this, 1), ctx($reject, this, 1))
            } catch (err) {
              $reject.call(this, err)
            }
          }
          // eslint-disable-next-line no-unused-vars
          Internal = function Promise(executor) {
            this._c = [] // <- awaiting reactions
            this._a = undefined // <- checked in isUnhandled reactions
            this._s = 0 // <- state
            this._d = false // <- done
            this._v = undefined // <- value
            this._h = 0 // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
            this._n = false // <- notify
          }
          Internal.prototype = require('./_redefine-all')($Promise.prototype, {
            // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
            then: function then(onFulfilled, onRejected) {
              var reaction = newPromiseCapability(
                speciesConstructor(this, $Promise)
              )
              reaction.ok =
                typeof onFulfilled == 'function' ? onFulfilled : true
              reaction.fail = typeof onRejected == 'function' && onRejected
              reaction.domain = isNode ? process.domain : undefined
              this._c.push(reaction)
              if (this._a) this._a.push(reaction)
              if (this._s) notify(this, false)
              return reaction.promise
            },
            // 25.4.5.1 Promise.prototype.catch(onRejected)
            catch: function(onRejected) {
              return this.then(undefined, onRejected)
            }
          })
          OwnPromiseCapability = function() {
            var promise = new Internal()
            this.promise = promise
            this.resolve = ctx($resolve, promise, 1)
            this.reject = ctx($reject, promise, 1)
          }
          newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
            return C === $Promise || C === Wrapper
              ? new OwnPromiseCapability(C)
              : newGenericPromiseCapability(C)
          }
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
          Promise: $Promise
        })
        require('./_set-to-string-tag')($Promise, PROMISE)
        require('./_set-species')(PROMISE)
        Wrapper = require('./_core')[PROMISE]

        // statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
          // 25.4.4.5 Promise.reject(r)
          reject: function reject(r) {
            var capability = newPromiseCapability(this)
            var $$reject = capability.reject
            $$reject(r)
            return capability.promise
          }
        })
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
          // 25.4.4.6 Promise.resolve(x)
          resolve: function resolve(x) {
            return promiseResolve(
              LIBRARY && this === Wrapper ? $Promise : this,
              x
            )
          }
        })
        $export(
          $export.S +
            $export.F *
              !(
                USE_NATIVE &&
                require('./_iter-detect')(function(iter) {
                  $Promise.all(iter)['catch'](empty)
                })
              ),
          PROMISE,
          {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
              var C = this
              var capability = newPromiseCapability(C)
              var resolve = capability.resolve
              var reject = capability.reject
              var result = perform(function() {
                var values = []
                var index = 0
                var remaining = 1
                forOf(iterable, false, function(promise) {
                  var $index = index++
                  var alreadyCalled = false
                  values.push(undefined)
                  remaining++
                  C.resolve(promise).then(function(value) {
                    if (alreadyCalled) return
                    alreadyCalled = true
                    values[$index] = value
                    --remaining || resolve(values)
                  }, reject)
                })
                --remaining || resolve(values)
              })
              if (result.e) reject(result.v)
              return capability.promise
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
              var C = this
              var capability = newPromiseCapability(C)
              var reject = capability.reject
              var result = perform(function() {
                forOf(iterable, false, function(promise) {
                  C.resolve(promise).then(capability.resolve, reject)
                })
              })
              if (result.e) reject(result.v)
              return capability.promise
            }
          }
        )
      },
      {
        './_library': '../node_modules/core-js/modules/_library.js',
        './_global': '../node_modules/core-js/modules/_global.js',
        './_ctx': '../node_modules/core-js/modules/_ctx.js',
        './_classof': '../node_modules/core-js/modules/_classof.js',
        './_export': '../node_modules/core-js/modules/_export.js',
        './_is-object': '../node_modules/core-js/modules/_is-object.js',
        './_a-function': '../node_modules/core-js/modules/_a-function.js',
        './_an-instance': '../node_modules/core-js/modules/_an-instance.js',
        './_for-of': '../node_modules/core-js/modules/_for-of.js',
        './_species-constructor':
          '../node_modules/core-js/modules/_species-constructor.js',
        './_task': '../node_modules/core-js/modules/_task.js',
        './_microtask': '../node_modules/core-js/modules/_microtask.js',
        './_new-promise-capability':
          '../node_modules/core-js/modules/_new-promise-capability.js',
        './_perform': '../node_modules/core-js/modules/_perform.js',
        './_user-agent': '../node_modules/core-js/modules/_user-agent.js',
        './_promise-resolve':
          '../node_modules/core-js/modules/_promise-resolve.js',
        './_wks': '../node_modules/core-js/modules/_wks.js',
        './_redefine-all': '../node_modules/core-js/modules/_redefine-all.js',
        './_set-to-string-tag':
          '../node_modules/core-js/modules/_set-to-string-tag.js',
        './_set-species': '../node_modules/core-js/modules/_set-species.js',
        './_core': '../node_modules/core-js/modules/_core.js',
        './_iter-detect': '../node_modules/core-js/modules/_iter-detect.js'
      }
    ],
    '../node_modules/core-js/es6/promise.js': [
      function(require, module, exports) {
        require('../modules/es6.object.to-string')
        require('../modules/es6.string.iterator')
        require('../modules/web.dom.iterable')
        require('../modules/es6.promise')
        module.exports = require('../modules/_core').Promise
      },
      {
        '../modules/es6.object.to-string':
          '../node_modules/core-js/modules/es6.object.to-string.js',
        '../modules/es6.string.iterator':
          '../node_modules/core-js/modules/es6.string.iterator.js',
        '../modules/web.dom.iterable':
          '../node_modules/core-js/modules/web.dom.iterable.js',
        '../modules/es6.promise':
          '../node_modules/core-js/modules/es6.promise.js',
        '../modules/_core': '../node_modules/core-js/modules/_core.js'
      }
    ],
    '../node_modules/@webcomponents/webcomponents-platform/webcomponents-platform.js': [
      function(require, module, exports) {
        /**
         * @license
         * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
         * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
         * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
         * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
         * Code distributed by Google as part of the polymer project is also
         * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
         */

        ;(function(scope) {
          'use strict'

          // defaultPrevented is broken in IE.
          // https://connect.microsoft.com/IE/feedback/details/790389/event-defaultprevented-returns-false-after-preventdefault-was-called
          var workingDefaultPrevented = (function() {
            var e = document.createEvent('Event')
            e.initEvent('foo', true, true)
            e.preventDefault()
            return e.defaultPrevented
          })()

          if (!workingDefaultPrevented) {
            var origPreventDefault = Event.prototype.preventDefault
            Event.prototype.preventDefault = function() {
              if (!this.cancelable) {
                return
              }

              origPreventDefault.call(this)

              Object.defineProperty(this, 'defaultPrevented', {
                get: function() {
                  return true
                },
                configurable: true
              })
            }
          }

          var isIE = /Trident/.test(navigator.userAgent)

          // CustomEvent constructor shim
          if (
            !window.CustomEvent ||
            (isIE && typeof window.CustomEvent !== 'function')
          ) {
            window.CustomEvent = function(inType, params) {
              params = params || {}
              var e = document.createEvent('CustomEvent')
              e.initCustomEvent(
                inType,
                Boolean(params.bubbles),
                Boolean(params.cancelable),
                params.detail
              )
              return e
            }
            window.CustomEvent.prototype = window.Event.prototype
          }

          // Event constructor shim
          if (!window.Event || (isIE && typeof window.Event !== 'function')) {
            var origEvent = window.Event
            window.Event = function(inType, params) {
              params = params || {}
              var e = document.createEvent('Event')
              e.initEvent(
                inType,
                Boolean(params.bubbles),
                Boolean(params.cancelable)
              )
              return e
            }
            if (origEvent) {
              for (var i in origEvent) {
                window.Event[i] = origEvent[i]
              }
            }
            window.Event.prototype = origEvent.prototype
          }

          if (
            !window.MouseEvent ||
            (isIE && typeof window.MouseEvent !== 'function')
          ) {
            var origMouseEvent = window.MouseEvent
            window.MouseEvent = function(inType, params) {
              params = params || {}
              var e = document.createEvent('MouseEvent')
              e.initMouseEvent(
                inType,
                Boolean(params.bubbles),
                Boolean(params.cancelable),
                params.view || window,
                params.detail,
                params.screenX,
                params.screenY,
                params.clientX,
                params.clientY,
                params.ctrlKey,
                params.altKey,
                params.shiftKey,
                params.metaKey,
                params.button,
                params.relatedTarget
              )
              return e
            }
            if (origMouseEvent) {
              for (var i in origMouseEvent) {
                window.MouseEvent[i] = origMouseEvent[i]
              }
            }
            window.MouseEvent.prototype = origMouseEvent.prototype
          }

          // ES6 stuff
          if (!Array.from) {
            Array.from = function(object) {
              return [].slice.call(object)
            }
          }

          if (!Object.assign) {
            var assign = function(target, source) {
              var n$ = Object.getOwnPropertyNames(source)
              for (var i = 0, p; i < n$.length; i++) {
                p = n$[i]
                target[p] = source[p]
              }
            }

            Object.assign = function(target, sources) {
              var args = [].slice.call(arguments, 1)
              for (var i = 0, s; i < args.length; i++) {
                s = args[i]
                if (s) {
                  assign(target, s)
                }
              }
              return target
            }
          }
        })(window.WebComponents)
      },
      {}
    ],
    '../node_modules/@webcomponents/template/template.js': [
      function(require, module, exports) {
        /**
         * @license
         * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
         * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
         * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
         * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
         * Code distributed by Google as part of the polymer project is also
         * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
         */

        // minimal template polyfill
        ;(function() {
          'use strict'

          var needsTemplate = typeof HTMLTemplateElement === 'undefined'
          var brokenDocFragment = !(
            document.createDocumentFragment().cloneNode() instanceof
            DocumentFragment
          )
          var needsDocFrag = false

          // NOTE: Replace DocumentFragment to work around IE11 bug that
          // causes children of a document fragment modified while
          // there is a mutation observer to not have a parentNode, or
          // have a broken parentNode (!?!)
          if (/Trident/.test(navigator.userAgent)) {
            ;(function() {
              needsDocFrag = true

              var origCloneNode = Node.prototype.cloneNode
              Node.prototype.cloneNode = function cloneNode(deep) {
                var newDom = origCloneNode.call(this, deep)
                if (this instanceof DocumentFragment) {
                  newDom.__proto__ = DocumentFragment.prototype
                }
                return newDom
              }

              // IE's DocumentFragment querySelector code doesn't work when
              // called on an element instance
              DocumentFragment.prototype.querySelectorAll =
                HTMLElement.prototype.querySelectorAll
              DocumentFragment.prototype.querySelector =
                HTMLElement.prototype.querySelector

              Object.defineProperties(DocumentFragment.prototype, {
                nodeType: {
                  get: function() {
                    return Node.DOCUMENT_FRAGMENT_NODE
                  },
                  configurable: true
                },

                localName: {
                  get: function() {
                    return undefined
                  },
                  configurable: true
                },

                nodeName: {
                  get: function() {
                    return '#document-fragment'
                  },
                  configurable: true
                }
              })

              var origInsertBefore = Node.prototype.insertBefore
              function insertBefore(newNode, refNode) {
                if (newNode instanceof DocumentFragment) {
                  var child
                  while ((child = newNode.firstChild)) {
                    origInsertBefore.call(this, child, refNode)
                  }
                } else {
                  origInsertBefore.call(this, newNode, refNode)
                }
                return newNode
              }
              Node.prototype.insertBefore = insertBefore

              var origAppendChild = Node.prototype.appendChild
              Node.prototype.appendChild = function appendChild(child) {
                if (child instanceof DocumentFragment) {
                  insertBefore.call(this, child, null)
                } else {
                  origAppendChild.call(this, child)
                }
                return child
              }

              var origRemoveChild = Node.prototype.removeChild
              var origReplaceChild = Node.prototype.replaceChild
              Node.prototype.replaceChild = function replaceChild(
                newChild,
                oldChild
              ) {
                if (newChild instanceof DocumentFragment) {
                  insertBefore.call(this, newChild, oldChild)
                  origRemoveChild.call(this, oldChild)
                } else {
                  origReplaceChild.call(this, newChild, oldChild)
                }
                return oldChild
              }

              Document.prototype.createDocumentFragment = function createDocumentFragment() {
                var frag = this.createElement('df')
                frag.__proto__ = DocumentFragment.prototype
                return frag
              }

              var origImportNode = Document.prototype.importNode
              Document.prototype.importNode = function importNode(
                impNode,
                deep
              ) {
                deep = deep || false
                var newNode = origImportNode.call(this, impNode, deep)
                if (impNode instanceof DocumentFragment) {
                  newNode.__proto__ = DocumentFragment.prototype
                }
                return newNode
              }
            })()
          }

          // NOTE: we rely on this cloneNode not causing element upgrade.
          // This means this polyfill must load before the CE polyfill and
          // this would need to be re-worked if a browser supports native CE
          // but not <template>.
          var capturedCloneNode = Node.prototype.cloneNode
          var capturedCreateElement = Document.prototype.createElement
          var capturedImportNode = Document.prototype.importNode
          var capturedRemoveChild = Node.prototype.removeChild
          var capturedAppendChild = Node.prototype.appendChild
          var capturedReplaceChild = Node.prototype.replaceChild
          var capturedParseFromString = DOMParser.prototype.parseFromString
          var capturedHTMLElementInnerHTML = Object.getOwnPropertyDescriptor(
            window.HTMLElement.prototype,
            'innerHTML'
          ) || {
            /**
             * @this {!HTMLElement}
             * @return {string}
             */
            get: function() {
              return this.innerHTML
            },
            /**
             * @this {!HTMLElement}
             * @param {string}
             */
            set: function(text) {
              this.innerHTML = text
            }
          }
          var capturedChildNodes = Object.getOwnPropertyDescriptor(
            window.Node.prototype,
            'childNodes'
          ) || {
            /**
             * @this {!Node}
             * @return {!NodeList}
             */
            get: function() {
              return this.childNodes
            }
          }

          var elementQuerySelectorAll = Element.prototype.querySelectorAll
          var docQuerySelectorAll = Document.prototype.querySelectorAll
          var fragQuerySelectorAll = DocumentFragment.prototype.querySelectorAll

          var scriptSelector =
            'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'

          function QSA(node, selector) {
            // IE 11 throws a SyntaxError with `scriptSelector` if the node has no children due to the `:not([type])` syntax
            if (!node.childNodes.length) {
              return []
            }
            switch (node.nodeType) {
              case Node.DOCUMENT_NODE:
                return docQuerySelectorAll.call(node, selector)
              case Node.DOCUMENT_FRAGMENT_NODE:
                return fragQuerySelectorAll.call(node, selector)
              default:
                return elementQuerySelectorAll.call(node, selector)
            }
          }

          // returns true if nested templates cannot be cloned (they cannot be on
          // some impl's like Safari 8 and Edge)
          // OR if cloning a document fragment does not result in a document fragment
          var needsCloning = (function() {
            if (!needsTemplate) {
              var t = document.createElement('template')
              var t2 = document.createElement('template')
              t2.content.appendChild(document.createElement('div'))
              t.content.appendChild(t2)
              var clone = t.cloneNode(true)
              return (
                clone.content.childNodes.length === 0 ||
                clone.content.firstChild.content.childNodes.length === 0 ||
                brokenDocFragment
              )
            }
          })()

          var TEMPLATE_TAG = 'template'
          var PolyfilledHTMLTemplateElement = function() {}

          if (needsTemplate) {
            var contentDoc = document.implementation.createHTMLDocument(
              'template'
            )
            var canDecorate = true

            var templateStyle = document.createElement('style')
            templateStyle.textContent = TEMPLATE_TAG + '{display:none;}'

            var head = document.head
            head.insertBefore(templateStyle, head.firstElementChild)

            /**
      Provides a minimal shim for the <template> element.
    */
            PolyfilledHTMLTemplateElement.prototype = Object.create(
              HTMLElement.prototype
            )

            // if elements do not have `innerHTML` on instances, then
            // templates can be patched by swizzling their prototypes.
            var canProtoPatch = !document
              .createElement('div')
              .hasOwnProperty('innerHTML')

            /**
      The `decorate` method moves element children to the template's `content`.
      NOTE: there is no support for dynamically adding elements to templates.
    */
            PolyfilledHTMLTemplateElement.decorate = function(template) {
              // if the template is decorated or not in HTML namespace, return fast
              if (
                template.content ||
                template.namespaceURI !== document.documentElement.namespaceURI
              ) {
                return
              }
              template.content = contentDoc.createDocumentFragment()
              var child
              while ((child = template.firstChild)) {
                capturedAppendChild.call(template.content, child)
              }
              // NOTE: prefer prototype patching for performance and
              // because on some browsers (IE11), re-defining `innerHTML`
              // can result in intermittent errors.
              if (canProtoPatch) {
                template.__proto__ = PolyfilledHTMLTemplateElement.prototype
              } else {
                template.cloneNode = function(deep) {
                  return PolyfilledHTMLTemplateElement._cloneNode(this, deep)
                }
                // add innerHTML to template, if possible
                // Note: this throws on Safari 7
                if (canDecorate) {
                  try {
                    defineInnerHTML(template)
                    defineOuterHTML(template)
                  } catch (err) {
                    canDecorate = false
                  }
                }
              }
              // bootstrap recursively
              PolyfilledHTMLTemplateElement.bootstrap(template.content)
            }

            // Taken from https://github.com/jquery/jquery/blob/73d7e6259c63ac45f42c6593da8c2796c6ce9281/src/manipulation/wrapMap.js
            var topLevelWrappingMap = {
              option: ['select'],
              thead: ['table'],
              col: ['colgroup', 'table'],
              tr: ['tbody', 'table'],
              th: ['tr', 'tbody', 'table'],
              td: ['tr', 'tbody', 'table']
            }

            var getTagName = function(text) {
              // Taken from https://github.com/jquery/jquery/blob/73d7e6259c63ac45f42c6593da8c2796c6ce9281/src/manipulation/var/rtagName.js
              return (/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(text) || [
                '',
                ''
              ])[1].toLowerCase()
            }

            var defineInnerHTML = function defineInnerHTML(obj) {
              Object.defineProperty(obj, 'innerHTML', {
                get: function() {
                  return getInnerHTML(this)
                },
                set: function(text) {
                  // For IE11, wrap the text in the correct (table) context
                  var wrap = topLevelWrappingMap[getTagName(text)]
                  if (wrap) {
                    for (var i = 0; i < wrap.length; i++) {
                      text = '<' + wrap[i] + '>' + text + '</' + wrap[i] + '>'
                    }
                  }
                  contentDoc.body.innerHTML = text
                  PolyfilledHTMLTemplateElement.bootstrap(contentDoc)
                  while (this.content.firstChild) {
                    capturedRemoveChild.call(
                      this.content,
                      this.content.firstChild
                    )
                  }
                  var body = contentDoc.body
                  // If we had wrapped, get back to the original node
                  if (wrap) {
                    for (var j = 0; j < wrap.length; j++) {
                      body = body.lastChild
                    }
                  }
                  while (body.firstChild) {
                    capturedAppendChild.call(this.content, body.firstChild)
                  }
                },
                configurable: true
              })
            }

            var defineOuterHTML = function defineOuterHTML(obj) {
              Object.defineProperty(obj, 'outerHTML', {
                get: function() {
                  return (
                    '<' +
                    TEMPLATE_TAG +
                    '>' +
                    this.innerHTML +
                    '</' +
                    TEMPLATE_TAG +
                    '>'
                  )
                },
                set: function(innerHTML) {
                  if (this.parentNode) {
                    contentDoc.body.innerHTML = innerHTML
                    var docFrag = this.ownerDocument.createDocumentFragment()
                    while (contentDoc.body.firstChild) {
                      capturedAppendChild.call(
                        docFrag,
                        contentDoc.body.firstChild
                      )
                    }
                    capturedReplaceChild.call(this.parentNode, docFrag, this)
                  } else {
                    throw new Error(
                      "Failed to set the 'outerHTML' property on 'Element': This element has no parent node."
                    )
                  }
                },
                configurable: true
              })
            }

            defineInnerHTML(PolyfilledHTMLTemplateElement.prototype)
            defineOuterHTML(PolyfilledHTMLTemplateElement.prototype)

            /**
      The `bootstrap` method is called automatically and "fixes" all
      <template> elements in the document referenced by the `doc` argument.
    */
            PolyfilledHTMLTemplateElement.bootstrap = function bootstrap(doc) {
              var templates = QSA(doc, TEMPLATE_TAG)
              for (
                var i = 0, l = templates.length, t;
                i < l && (t = templates[i]);
                i++
              ) {
                PolyfilledHTMLTemplateElement.decorate(t)
              }
            }

            // auto-bootstrapping for main document
            document.addEventListener('DOMContentLoaded', function() {
              PolyfilledHTMLTemplateElement.bootstrap(document)
            })

            // Patch document.createElement to ensure newly created templates have content
            Document.prototype.createElement = function createElement() {
              var el = capturedCreateElement.apply(this, arguments)
              if (el.localName === 'template') {
                PolyfilledHTMLTemplateElement.decorate(el)
              }
              return el
            }

            DOMParser.prototype.parseFromString = function() {
              var el = capturedParseFromString.apply(this, arguments)
              PolyfilledHTMLTemplateElement.bootstrap(el)
              return el
            }

            Object.defineProperty(HTMLElement.prototype, 'innerHTML', {
              get: function() {
                return getInnerHTML(this)
              },
              set: function(text) {
                capturedHTMLElementInnerHTML.set.call(this, text)
                PolyfilledHTMLTemplateElement.bootstrap(this)
              },
              configurable: true,
              enumerable: true
            })

            // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#escapingString
            var escapeAttrRegExp = /[&\u00A0"]/g
            var escapeDataRegExp = /[&\u00A0<>]/g

            var escapeReplace = function(c) {
              switch (c) {
                case '&':
                  return '&amp;'
                case '<':
                  return '&lt;'
                case '>':
                  return '&gt;'
                case '"':
                  return '&quot;'
                case '\u00A0':
                  return '&nbsp;'
              }
            }

            var escapeAttr = function(s) {
              return s.replace(escapeAttrRegExp, escapeReplace)
            }

            var escapeData = function(s) {
              return s.replace(escapeDataRegExp, escapeReplace)
            }

            var makeSet = function(arr) {
              var set = {}
              for (var i = 0; i < arr.length; i++) {
                set[arr[i]] = true
              }
              return set
            }

            // http://www.whatwg.org/specs/web-apps/current-work/#void-elements
            var voidElements = makeSet([
              'area',
              'base',
              'br',
              'col',
              'command',
              'embed',
              'hr',
              'img',
              'input',
              'keygen',
              'link',
              'meta',
              'param',
              'source',
              'track',
              'wbr'
            ])

            var plaintextParents = makeSet([
              'style',
              'script',
              'xmp',
              'iframe',
              'noembed',
              'noframes',
              'plaintext',
              'noscript'
            ])

            /**
             * @param {Node} node
             * @param {Node} parentNode
             * @param {Function=} callback
             */
            var getOuterHTML = function(node, parentNode, callback) {
              switch (node.nodeType) {
                case Node.ELEMENT_NODE: {
                  var tagName = node.localName
                  var s = '<' + tagName
                  var attrs = node.attributes
                  for (var i = 0, attr; (attr = attrs[i]); i++) {
                    s += ' ' + attr.name + '="' + escapeAttr(attr.value) + '"'
                  }
                  s += '>'
                  if (voidElements[tagName]) {
                    return s
                  }
                  return s + getInnerHTML(node, callback) + '</' + tagName + '>'
                }
                case Node.TEXT_NODE: {
                  var data = /** @type {Text} */ (node).data
                  if (parentNode && plaintextParents[parentNode.localName]) {
                    return data
                  }
                  return escapeData(data)
                }
                case Node.COMMENT_NODE: {
                  return '<!--' + /** @type {Comment} */ (node).data + '-->'
                }
                default: {
                  window.console.error(node)
                  throw new Error('not implemented')
                }
              }
            }

            /**
             * @param {Node} node
             * @param {Function=} callback
             */
            var getInnerHTML = function(node, callback) {
              if (node.localName === 'template') {
                node = /** @type {HTMLTemplateElement} */ (node).content
              }
              var s = ''
              var c$ = callback
                ? callback(node)
                : capturedChildNodes.get.call(node)
              for (
                var i = 0, l = c$.length, child;
                i < l && (child = c$[i]);
                i++
              ) {
                s += getOuterHTML(child, node, callback)
              }
              return s
            }
          }

          // make cloning/importing work!
          if (needsTemplate || needsCloning) {
            PolyfilledHTMLTemplateElement._cloneNode = function _cloneNode(
              template,
              deep
            ) {
              var clone = capturedCloneNode.call(template, false)
              // NOTE: decorate doesn't auto-fix children because they are already
              // decorated so they need special clone fixup.
              if (this.decorate) {
                this.decorate(clone)
              }
              if (deep) {
                // NOTE: use native clone node to make sure CE's wrapped
                // cloneNode does not cause elements to upgrade.
                capturedAppendChild.call(
                  clone.content,
                  capturedCloneNode.call(template.content, true)
                )
                // now ensure nested templates are cloned correctly.
                fixClonedDom(clone.content, template.content)
              }
              return clone
            }

            // Given a source and cloned subtree, find <template>'s in the cloned
            // subtree and replace them with cloned <template>'s from source.
            // We must do this because only the source templates have proper .content.
            var fixClonedDom = function fixClonedDom(clone, source) {
              // do nothing if cloned node is not an element
              if (!source.querySelectorAll) return
              // these two lists should be coincident
              var s$ = QSA(source, TEMPLATE_TAG)
              if (s$.length === 0) {
                return
              }
              var t$ = QSA(clone, TEMPLATE_TAG)
              for (var i = 0, l = t$.length, t, s; i < l; i++) {
                s = s$[i]
                t = t$[i]
                if (
                  PolyfilledHTMLTemplateElement &&
                  PolyfilledHTMLTemplateElement.decorate
                ) {
                  PolyfilledHTMLTemplateElement.decorate(s)
                }
                capturedReplaceChild.call(
                  t.parentNode,
                  cloneNode.call(s, true),
                  t
                )
              }
            }

            // make sure scripts inside of a cloned template are executable
            var fixClonedScripts = function fixClonedScripts(fragment) {
              var scripts = QSA(fragment, scriptSelector)
              for (var ns, s, i = 0; i < scripts.length; i++) {
                s = scripts[i]
                ns = capturedCreateElement.call(document, 'script')
                ns.textContent = s.textContent
                var attrs = s.attributes
                for (var ai = 0, a; ai < attrs.length; ai++) {
                  a = attrs[ai]
                  ns.setAttribute(a.name, a.value)
                }
                capturedReplaceChild.call(s.parentNode, ns, s)
              }
            }

            // override all cloning to fix the cloned subtree to contain properly
            // cloned templates.
            var cloneNode = (Node.prototype.cloneNode = function cloneNode(
              deep
            ) {
              var dom
              // workaround for Edge bug cloning documentFragments
              // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8619646/
              if (
                !needsDocFrag &&
                brokenDocFragment &&
                this instanceof DocumentFragment
              ) {
                if (!deep) {
                  return this.ownerDocument.createDocumentFragment()
                } else {
                  dom = importNode.call(this.ownerDocument, this, true)
                }
              } else if (
                this.nodeType === Node.ELEMENT_NODE &&
                this.localName === TEMPLATE_TAG &&
                this.namespaceURI == document.documentElement.namespaceURI
              ) {
                dom = PolyfilledHTMLTemplateElement._cloneNode(this, deep)
              } else {
                dom = capturedCloneNode.call(this, deep)
              }
              // template.content is cloned iff `deep`.
              if (deep) {
                fixClonedDom(dom, this)
              }
              return dom
            })

            // NOTE: we are cloning instead of importing <template>'s.
            // However, the ownerDocument of the cloned template will be correct!
            // This is because the native import node creates the right document owned
            // subtree and `fixClonedDom` inserts cloned templates into this subtree,
            // thus updating the owner doc.
            var importNode = (Document.prototype.importNode = function importNode(
              element,
              deep
            ) {
              deep = deep || false
              if (element.localName === TEMPLATE_TAG) {
                return PolyfilledHTMLTemplateElement._cloneNode(element, deep)
              } else {
                var dom = capturedImportNode.call(this, element, deep)
                if (deep) {
                  fixClonedDom(dom, element)
                  fixClonedScripts(dom)
                }
                return dom
              }
            })
          }

          if (needsTemplate) {
            window.HTMLTemplateElement = PolyfilledHTMLTemplateElement
          }
        })()
      },
      {}
    ],
    '../node_modules/@webcomponents/shadydom/shadydom.min.js': [
      function(require, module, exports) {
        var global = arguments[3]
        ;(function() {
          /*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
          'use strict'
          var aa =
              'function' == typeof Object.defineProperties
                ? Object.defineProperty
                : function(a, b, c) {
                    a != Array.prototype &&
                      a != Object.prototype &&
                      (a[b] = c.value)
                  },
            m =
              'undefined' != typeof window && window === this
                ? this
                : 'undefined' != typeof global && null != global
                ? global
                : this
          function ba() {
            ba = function() {}
            m.Symbol || (m.Symbol = ca)
          }
          var ca = (function() {
            var a = 0
            return function(b) {
              return 'jscomp_symbol_' + (b || '') + a++
            }
          })()
          function p() {
            ba()
            var a = m.Symbol.iterator
            a || (a = m.Symbol.iterator = m.Symbol('iterator'))
            'function' != typeof Array.prototype[a] &&
              aa(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                  return da(this)
                }
              })
            p = function() {}
          }
          function da(a) {
            var b = 0
            return ea(function() {
              return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
            })
          }
          function ea(a) {
            p()
            a = { next: a }
            a[m.Symbol.iterator] = function() {
              return this
            }
            return a
          }
          function q(a) {
            p()
            ba()
            p()
            var b = a[Symbol.iterator]
            return b ? b.call(a) : da(a)
          }
          function fa(a) {
            for (var b, c = []; !(b = a.next()).done; ) c.push(b.value)
            return c
          }
          function t(a, b) {
            return { index: a, m: [], v: b }
          }
          function ha(a, b, c, d) {
            var e = 0,
              f = 0,
              h = 0,
              g = 0,
              k = Math.min(b - e, d - f)
            if (0 == e && 0 == f)
              a: {
                for (h = 0; h < k; h++) if (a[h] !== c[h]) break a
                h = k
              }
            if (b == a.length && d == c.length) {
              g = a.length
              for (var l = c.length, n = 0; n < k - h && ia(a[--g], c[--l]); )
                n++
              g = n
            }
            e += h
            f += h
            b -= g
            d -= g
            if (0 == b - e && 0 == d - f) return []
            if (e == b) {
              for (b = t(e, 0); f < d; ) b.m.push(c[f++])
              return [b]
            }
            if (f == d) return [t(e, b - e)]
            k = e
            h = f
            d = d - h + 1
            g = b - k + 1
            b = Array(d)
            for (l = 0; l < d; l++) (b[l] = Array(g)), (b[l][0] = l)
            for (l = 0; l < g; l++) b[0][l] = l
            for (l = 1; l < d; l++)
              for (n = 1; n < g; n++)
                if (a[k + n - 1] === c[h + l - 1]) b[l][n] = b[l - 1][n - 1]
                else {
                  var r = b[l - 1][n] + 1,
                    S = b[l][n - 1] + 1
                  b[l][n] = r < S ? r : S
                }
            k = b.length - 1
            h = b[0].length - 1
            d = b[k][h]
            for (a = []; 0 < k || 0 < h; )
              0 == k
                ? (a.push(2), h--)
                : 0 == h
                ? (a.push(3), k--)
                : ((g = b[k - 1][h - 1]),
                  (l = b[k - 1][h]),
                  (n = b[k][h - 1]),
                  (r = l < n ? (l < g ? l : g) : n < g ? n : g),
                  r == g
                    ? (g == d ? a.push(0) : (a.push(1), (d = g)), k--, h--)
                    : r == l
                    ? (a.push(3), k--, (d = l))
                    : (a.push(2), h--, (d = n)))
            a.reverse()
            b = void 0
            k = []
            for (h = 0; h < a.length; h++)
              switch (a[h]) {
                case 0:
                  b && (k.push(b), (b = void 0))
                  e++
                  f++
                  break
                case 1:
                  b || (b = t(e, 0))
                  b.v++
                  e++
                  b.m.push(c[f])
                  f++
                  break
                case 2:
                  b || (b = t(e, 0))
                  b.v++
                  e++
                  break
                case 3:
                  b || (b = t(e, 0)), b.m.push(c[f]), f++
              }
            b && k.push(b)
            return k
          }
          function ia(a, b) {
            return a === b
          }
          function ja() {
            this.M = this.root = null
            this.A = !1
            this.h = this.u = this.F = this.assignedSlot = this.assignedNodes = this.i = null
            this.childNodes = this.nextSibling = this.previousSibling = this.lastChild = this.firstChild = this.parentNode = this.l = void 0
            this.P = this.I = !1
            this.s = {}
          }
          ja.prototype.toJSON = function() {
            return {}
          }
          function u(a) {
            a.__shady || (a.__shady = new ja())
            return a.__shady
          }
          function v(a) {
            return a && a.__shady
          }
          var w = window.ShadyDOM || {}
          w.Z = !(
            !Element.prototype.attachShadow || !Node.prototype.getRootNode
          )
          var ka = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild')
          w.g = !!(ka && ka.configurable && ka.get)
          w.G = w.force || !w.Z
          var la = navigator.userAgent.match('Trident'),
            ma = navigator.userAgent.match('Edge')
          void 0 === w.N && (w.N = w.g && (la || ma))
          function x(a) {
            return (a = v(a)) && void 0 !== a.firstChild
          }
          function y(a) {
            return 'ShadyRoot' === a.V
          }
          function z(a) {
            a = a.getRootNode()
            if (y(a)) return a
          }
          var A = Element.prototype,
            na =
              A.matches ||
              A.matchesSelector ||
              A.mozMatchesSelector ||
              A.msMatchesSelector ||
              A.oMatchesSelector ||
              A.webkitMatchesSelector
          function oa(a, b) {
            if (a && b)
              for (
                var c = Object.getOwnPropertyNames(b), d = 0, e;
                d < c.length && (e = c[d]);
                d++
              ) {
                var f = e,
                  h = a,
                  g = Object.getOwnPropertyDescriptor(b, f)
                g && Object.defineProperty(h, f, g)
              }
          }
          function B(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d)
              c[d - 1] = arguments[d]
            for (d = 0; d < c.length; d++) oa(a, c[d])
            return a
          }
          function pa(a, b) {
            for (var c in b) a[c] = b[c]
          }
          var qa = document.createTextNode(''),
            ra = 0,
            sa = []
          new MutationObserver(function() {
            for (; sa.length; )
              try {
                sa.shift()()
              } catch (a) {
                throw ((qa.textContent = ra++), a)
              }
          }).observe(qa, { characterData: !0 })
          function ta(a) {
            sa.push(a)
            qa.textContent = ra++
          }
          var ua = !!document.contains
          function va(a, b) {
            for (; b; ) {
              if (b == a) return !0
              b = b.parentNode
            }
            return !1
          }
          function wa(a) {
            for (var b = a.length - 1; 0 <= b; b--) {
              var c = a[b],
                d = c.getAttribute('id') || c.getAttribute('name')
              d && 'length' !== d && isNaN(d) && (a[d] = c)
            }
            a.item = function(b) {
              return a[b]
            }
            a.namedItem = function(b) {
              if ('length' !== b && isNaN(b) && a[b]) return a[b]
              for (var c = q(a), d = c.next(); !d.done; d = c.next())
                if (
                  ((d = d.value),
                  (d.getAttribute('id') || d.getAttribute('name')) == b)
                )
                  return d
              return null
            }
            return a
          }
          var C = [],
            xa
          function ya(a) {
            xa || ((xa = !0), ta(D))
            C.push(a)
          }
          function D() {
            xa = !1
            for (var a = !!C.length; C.length; ) C.shift()()
            return a
          }
          D.list = C
          var za = /[&\u00A0"]/g,
            Aa = /[&\u00A0<>]/g
          function Ba(a) {
            switch (a) {
              case '&':
                return '&amp;'
              case '<':
                return '&lt;'
              case '>':
                return '&gt;'
              case '"':
                return '&quot;'
              case '\u00a0':
                return '&nbsp;'
            }
          }
          function Ca(a) {
            for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0
            return b
          }
          var Da = Ca(
              'area base br col command embed hr img input keygen link meta param source track wbr'.split(
                ' '
              )
            ),
            Ea = Ca(
              'style script xmp iframe noembed noframes plaintext noscript'.split(
                ' '
              )
            )
          function Fa(a, b) {
            'template' === a.localName && (a = a.content)
            for (
              var c = '', d = b ? b(a) : a.childNodes, e = 0, f = d.length, h;
              e < f && (h = d[e]);
              e++
            ) {
              a: {
                var g = h
                var k = a
                var l = b
                switch (g.nodeType) {
                  case Node.ELEMENT_NODE:
                    for (
                      var n = g.localName,
                        r = '<' + n,
                        S = g.attributes,
                        Xa = 0;
                      (k = S[Xa]);
                      Xa++
                    )
                      r += ' ' + k.name + '="' + k.value.replace(za, Ba) + '"'
                    r += '>'
                    g = Da[n] ? r : r + Fa(g, l) + '</' + n + '>'
                    break a
                  case Node.TEXT_NODE:
                    g = g.data
                    g = k && Ea[k.localName] ? g : g.replace(Aa, Ba)
                    break a
                  case Node.COMMENT_NODE:
                    g = '\x3c!--' + g.data + '--\x3e'
                    break a
                  default:
                    throw (window.console.error(g), Error('not implemented'))
                }
              }
              c += g
            }
            return c
          }
          var E = document.createTreeWalker(
              document,
              NodeFilter.SHOW_ALL,
              null,
              !1
            ),
            F = document.createTreeWalker(
              document,
              NodeFilter.SHOW_ELEMENT,
              null,
              !1
            )
          function Ga(a) {
            var b = []
            E.currentNode = a
            for (a = E.firstChild(); a; ) b.push(a), (a = E.nextSibling())
            return b
          }
          var G = {
            parentNode: function(a) {
              E.currentNode = a
              return E.parentNode()
            },
            firstChild: function(a) {
              E.currentNode = a
              return E.firstChild()
            },
            lastChild: function(a) {
              E.currentNode = a
              return E.lastChild()
            },
            previousSibling: function(a) {
              E.currentNode = a
              return E.previousSibling()
            },
            nextSibling: function(a) {
              E.currentNode = a
              return E.nextSibling()
            }
          }
          G.childNodes = Ga
          G.parentElement = function(a) {
            F.currentNode = a
            return F.parentNode()
          }
          G.firstElementChild = function(a) {
            F.currentNode = a
            return F.firstChild()
          }
          G.lastElementChild = function(a) {
            F.currentNode = a
            return F.lastChild()
          }
          G.previousElementSibling = function(a) {
            F.currentNode = a
            return F.previousSibling()
          }
          G.nextElementSibling = function(a) {
            F.currentNode = a
            return F.nextSibling()
          }
          G.children = function(a) {
            var b = []
            F.currentNode = a
            for (a = F.firstChild(); a; ) b.push(a), (a = F.nextSibling())
            return wa(b)
          }
          G.innerHTML = function(a) {
            return Fa(a, function(a) {
              return Ga(a)
            })
          }
          G.textContent = function(a) {
            switch (a.nodeType) {
              case Node.ELEMENT_NODE:
              case Node.DOCUMENT_FRAGMENT_NODE:
                a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1)
                for (var b = '', c; (c = a.nextNode()); ) b += c.nodeValue
                return b
              default:
                return a.nodeValue
            }
          }
          var Ha = w.g,
            Ia = [Node.prototype, Element.prototype, HTMLElement.prototype]
          function H(a) {
            var b
            a: {
              for (b = 0; b < Ia.length; b++) {
                var c = Ia[b]
                if (c.hasOwnProperty(a)) {
                  b = c
                  break a
                }
              }
              b = void 0
            }
            if (!b) throw Error('Could not find descriptor for ' + a)
            return Object.getOwnPropertyDescriptor(b, a)
          }
          var I = Ha
              ? {
                  parentNode: H('parentNode'),
                  firstChild: H('firstChild'),
                  lastChild: H('lastChild'),
                  previousSibling: H('previousSibling'),
                  nextSibling: H('nextSibling'),
                  childNodes: H('childNodes'),
                  parentElement: H('parentElement'),
                  previousElementSibling: H('previousElementSibling'),
                  nextElementSibling: H('nextElementSibling'),
                  innerHTML: H('innerHTML'),
                  textContent: H('textContent'),
                  firstElementChild: H('firstElementChild'),
                  lastElementChild: H('lastElementChild'),
                  children: H('children')
                }
              : {},
            J = Ha
              ? {
                  firstElementChild: Object.getOwnPropertyDescriptor(
                    DocumentFragment.prototype,
                    'firstElementChild'
                  ),
                  lastElementChild: Object.getOwnPropertyDescriptor(
                    DocumentFragment.prototype,
                    'lastElementChild'
                  ),
                  children: Object.getOwnPropertyDescriptor(
                    DocumentFragment.prototype,
                    'children'
                  )
                }
              : {},
            K = Ha
              ? {
                  firstElementChild: Object.getOwnPropertyDescriptor(
                    Document.prototype,
                    'firstElementChild'
                  ),
                  lastElementChild: Object.getOwnPropertyDescriptor(
                    Document.prototype,
                    'lastElementChild'
                  ),
                  children: Object.getOwnPropertyDescriptor(
                    Document.prototype,
                    'children'
                  )
                }
              : {},
            Ja = {
              L: I,
              ia: J,
              da: K,
              parentNode: function(a) {
                return I.parentNode.get.call(a)
              },
              firstChild: function(a) {
                return I.firstChild.get.call(a)
              },
              lastChild: function(a) {
                return I.lastChild.get.call(a)
              },
              previousSibling: function(a) {
                return I.previousSibling.get.call(a)
              },
              nextSibling: function(a) {
                return I.nextSibling.get.call(a)
              },
              childNodes: function(a) {
                return Array.prototype.slice.call(I.childNodes.get.call(a))
              },
              parentElement: function(a) {
                return I.parentElement.get.call(a)
              },
              previousElementSibling: function(a) {
                return I.previousElementSibling.get.call(a)
              },
              nextElementSibling: function(a) {
                return I.nextElementSibling.get.call(a)
              },
              innerHTML: function(a) {
                return I.innerHTML.get.call(a)
              },
              textContent: function(a) {
                return I.textContent.get.call(a)
              },
              children: function(a) {
                switch (a.nodeType) {
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    return J.children.get.call(a)
                  case Node.DOCUMENT_NODE:
                    return K.children.get.call(a)
                  default:
                    return I.children.get.call(a)
                }
              },
              firstElementChild: function(a) {
                switch (a.nodeType) {
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    return J.firstElementChild.get.call(a)
                  case Node.DOCUMENT_NODE:
                    return K.firstElementChild.get.call(a)
                  default:
                    return I.firstElementChild.get.call(a)
                }
              },
              lastElementChild: function(a) {
                switch (a.nodeType) {
                  case Node.DOCUMENT_FRAGMENT_NODE:
                    return J.lastElementChild.get.call(a)
                  case Node.DOCUMENT_NODE:
                    return K.lastElementChild.get.call(a)
                  default:
                    return I.lastElementChild.get.call(a)
                }
              }
            }
          var L = w.N ? Ja : G
          var Ka = Element.prototype.insertBefore,
            La = Element.prototype.replaceChild,
            Ma = Element.prototype.removeChild,
            Na = Element.prototype.setAttribute,
            Oa = Element.prototype.removeAttribute,
            Pa = Element.prototype.cloneNode,
            Qa = Document.prototype.importNode,
            Ra = Element.prototype.addEventListener,
            Sa = Element.prototype.removeEventListener,
            Ta = Window.prototype.addEventListener,
            Ua = Window.prototype.removeEventListener,
            Va = Element.prototype.dispatchEvent,
            Wa = Node.prototype.contains || HTMLElement.prototype.contains,
            Ya = Document.prototype.getElementById,
            Za = Element.prototype.querySelector,
            $a = DocumentFragment.prototype.querySelector,
            ab = Document.prototype.querySelector,
            bb = Element.prototype.querySelectorAll,
            cb = DocumentFragment.prototype.querySelectorAll,
            db = Document.prototype.querySelectorAll,
            M = {}
          M.appendChild = Element.prototype.appendChild
          M.insertBefore = Ka
          M.replaceChild = La
          M.removeChild = Ma
          M.setAttribute = Na
          M.removeAttribute = Oa
          M.cloneNode = Pa
          M.importNode = Qa
          M.addEventListener = Ra
          M.removeEventListener = Sa
          M.$ = Ta
          M.aa = Ua
          M.dispatchEvent = Va
          M.contains = Wa
          M.getElementById = Ya
          M.ga = Za
          M.ja = $a
          M.ea = ab
          M.querySelector = function(a) {
            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
                return Za.call(this, a)
              case Node.DOCUMENT_NODE:
                return ab.call(this, a)
              default:
                return $a.call(this, a)
            }
          }
          M.ha = bb
          M.ka = cb
          M.fa = db
          M.querySelectorAll = function(a) {
            switch (this.nodeType) {
              case Node.ELEMENT_NODE:
                return bb.call(this, a)
              case Node.DOCUMENT_NODE:
                return db.call(this, a)
              default:
                return cb.call(this, a)
            }
          }
          function eb(a) {
            for (; a.firstChild; ) a.removeChild(a.firstChild)
          }
          var fb = w.g,
            gb = document.implementation.createHTMLDocument('inert'),
            hb = Object.getOwnPropertyDescriptor(Node.prototype, 'isConnected'),
            ib = hb && hb.get,
            jb = Object.getOwnPropertyDescriptor(
              Document.prototype,
              'activeElement'
            ),
            kb = {
              parentElement: {
                get: function() {
                  var a = v(this)
                  ;(a = a && a.parentNode) &&
                    a.nodeType !== Node.ELEMENT_NODE &&
                    (a = null)
                  return void 0 !== a ? a : L.parentElement(this)
                },
                configurable: !0
              },
              parentNode: {
                get: function() {
                  var a = v(this)
                  a = a && a.parentNode
                  return void 0 !== a ? a : L.parentNode(this)
                },
                configurable: !0
              },
              nextSibling: {
                get: function() {
                  var a = v(this)
                  a = a && a.nextSibling
                  return void 0 !== a ? a : L.nextSibling(this)
                },
                configurable: !0
              },
              previousSibling: {
                get: function() {
                  var a = v(this)
                  a = a && a.previousSibling
                  return void 0 !== a ? a : L.previousSibling(this)
                },
                configurable: !0
              },
              nextElementSibling: {
                get: function() {
                  var a = v(this)
                  if (a && void 0 !== a.nextSibling) {
                    for (
                      a = this.nextSibling;
                      a && a.nodeType !== Node.ELEMENT_NODE;

                    )
                      a = a.nextSibling
                    return a
                  }
                  return L.nextElementSibling(this)
                },
                configurable: !0
              },
              previousElementSibling: {
                get: function() {
                  var a = v(this)
                  if (a && void 0 !== a.previousSibling) {
                    for (
                      a = this.previousSibling;
                      a && a.nodeType !== Node.ELEMENT_NODE;

                    )
                      a = a.previousSibling
                    return a
                  }
                  return L.previousElementSibling(this)
                },
                configurable: !0
              }
            },
            lb = {
              className: {
                get: function() {
                  return this.getAttribute('class') || ''
                },
                set: function(a) {
                  this.setAttribute('class', a)
                },
                configurable: !0
              }
            },
            mb = {
              childNodes: {
                get: function() {
                  if (x(this)) {
                    var a = v(this)
                    if (!a.childNodes) {
                      a.childNodes = []
                      for (var b = this.firstChild; b; b = b.nextSibling)
                        a.childNodes.push(b)
                    }
                    var c = a.childNodes
                  } else c = L.childNodes(this)
                  c.item = function(a) {
                    return c[a]
                  }
                  return c
                },
                configurable: !0
              },
              childElementCount: {
                get: function() {
                  return this.children.length
                },
                configurable: !0
              },
              firstChild: {
                get: function() {
                  var a = v(this)
                  a = a && a.firstChild
                  return void 0 !== a ? a : L.firstChild(this)
                },
                configurable: !0
              },
              lastChild: {
                get: function() {
                  var a = v(this)
                  a = a && a.lastChild
                  return void 0 !== a ? a : L.lastChild(this)
                },
                configurable: !0
              },
              textContent: {
                get: function() {
                  if (x(this)) {
                    for (
                      var a = [], b = 0, c = this.childNodes, d;
                      (d = c[b]);
                      b++
                    )
                      d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent)
                    return a.join('')
                  }
                  return L.textContent(this)
                },
                set: function(a) {
                  if ('undefined' === typeof a || null === a) a = ''
                  switch (this.nodeType) {
                    case Node.ELEMENT_NODE:
                    case Node.DOCUMENT_FRAGMENT_NODE:
                      if (!x(this) && fb) {
                        var b = this.firstChild
                        ;(b != this.lastChild ||
                          (b && b.nodeType != Node.TEXT_NODE)) &&
                          eb(this)
                        Ja.L.textContent.set.call(this, a)
                      } else
                        eb(this),
                          (0 < a.length ||
                            this.nodeType === Node.ELEMENT_NODE) &&
                            this.appendChild(document.createTextNode(a))
                      break
                    default:
                      this.nodeValue = a
                  }
                },
                configurable: !0
              },
              firstElementChild: {
                get: function() {
                  var a = v(this)
                  if (a && void 0 !== a.firstChild) {
                    for (
                      a = this.firstChild;
                      a && a.nodeType !== Node.ELEMENT_NODE;

                    )
                      a = a.nextSibling
                    return a
                  }
                  return L.firstElementChild(this)
                },
                configurable: !0
              },
              lastElementChild: {
                get: function() {
                  var a = v(this)
                  if (a && void 0 !== a.lastChild) {
                    for (
                      a = this.lastChild;
                      a && a.nodeType !== Node.ELEMENT_NODE;

                    )
                      a = a.previousSibling
                    return a
                  }
                  return L.lastElementChild(this)
                },
                configurable: !0
              },
              children: {
                get: function() {
                  return x(this)
                    ? wa(
                        Array.prototype.filter.call(this.childNodes, function(
                          a
                        ) {
                          return a.nodeType === Node.ELEMENT_NODE
                        })
                      )
                    : L.children(this)
                },
                configurable: !0
              },
              innerHTML: {
                get: function() {
                  return x(this)
                    ? Fa('template' === this.localName ? this.content : this)
                    : L.innerHTML(this)
                },
                set: function(a) {
                  var b = 'template' === this.localName ? this.content : this
                  eb(b)
                  var c = this.localName || 'div'
                  c =
                    this.namespaceURI && this.namespaceURI !== gb.namespaceURI
                      ? gb.createElementNS(this.namespaceURI, c)
                      : gb.createElement(c)
                  fb ? Ja.L.innerHTML.set.call(c, a) : (c.innerHTML = a)
                  for (
                    a = 'template' === this.localName ? c.content : c;
                    a.firstChild;

                  )
                    b.appendChild(a.firstChild)
                },
                configurable: !0
              }
            },
            nb = {
              shadowRoot: {
                get: function() {
                  var a = v(this)
                  return (a && a.M) || null
                },
                configurable: !0
              }
            },
            ob = {
              activeElement: {
                get: function() {
                  var a =
                    jb && jb.get
                      ? jb.get.call(document)
                      : w.g
                      ? void 0
                      : document.activeElement
                  if (a && a.nodeType) {
                    var b = !!y(this)
                    if (
                      this === document ||
                      (b && this.host !== a && M.contains.call(this.host, a))
                    ) {
                      for (b = z(a); b && b !== this; ) (a = b.host), (b = z(a))
                      a =
                        this === document
                          ? b
                            ? null
                            : a
                          : b === this
                          ? a
                          : null
                    } else a = null
                  } else a = null
                  return a
                },
                set: function() {},
                configurable: !0
              }
            }
          function N(a, b, c) {
            for (var d in b) {
              var e = Object.getOwnPropertyDescriptor(a, d)
              ;(e && e.configurable) || (!e && c)
                ? Object.defineProperty(a, d, b[d])
                : c && console.warn('Could not define', d, 'on', a)
            }
          }
          function O(a) {
            N(a, kb)
            N(a, lb)
            N(a, mb)
            N(a, ob)
          }
          function pb() {
            var a = P.prototype
            a.__proto__ = DocumentFragment.prototype
            N(a, kb, !0)
            N(a, mb, !0)
            N(a, ob, !0)
            Object.defineProperties(a, {
              nodeType: {
                value: Node.DOCUMENT_FRAGMENT_NODE,
                configurable: !0
              },
              nodeName: { value: '#document-fragment', configurable: !0 },
              nodeValue: { value: null, configurable: !0 }
            })
            ;['localName', 'namespaceURI', 'prefix'].forEach(function(b) {
              Object.defineProperty(a, b, { value: void 0, configurable: !0 })
            })
            ;['ownerDocument', 'baseURI', 'isConnected'].forEach(function(b) {
              Object.defineProperty(a, b, {
                get: function() {
                  return this.host[b]
                },
                configurable: !0
              })
            })
          }
          var qb = w.g
              ? function() {}
              : function(a) {
                  var b = u(a)
                  b.I || ((b.I = !0), N(a, kb, !0), N(a, lb, !0))
                },
            rb = w.g
              ? function() {}
              : function(a) {
                  u(a).P || (N(a, mb, !0), N(a, nb, !0))
                }
          var sb = L.childNodes
          function tb(a, b, c) {
            rb(b)
            var d = u(b)
            void 0 !== d.firstChild && (d.childNodes = null)
            if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              d = a.childNodes
              for (var e = 0; e < d.length; e++) ub(d[e], b, c)
              a = u(a)
              b = void 0 !== a.firstChild ? null : void 0
              a.firstChild = a.lastChild = b
              a.childNodes = b
            } else ub(a, b, c)
          }
          function ub(a, b, c) {
            qb(a)
            c = c || null
            var d = u(a),
              e = u(b),
              f = c ? u(c) : null
            d.previousSibling = c ? f.previousSibling : b.lastChild
            if ((f = v(d.previousSibling))) f.nextSibling = a
            if ((f = v((d.nextSibling = c)))) f.previousSibling = a
            d.parentNode = b
            c
              ? c === e.firstChild && (e.firstChild = a)
              : ((e.lastChild = a), e.firstChild || (e.firstChild = a))
            e.childNodes = null
          }
          function vb(a, b) {
            var c = u(a)
            b = u(b)
            a === b.firstChild && (b.firstChild = c.nextSibling)
            a === b.lastChild && (b.lastChild = c.previousSibling)
            a = c.previousSibling
            var d = c.nextSibling
            a && (u(a).nextSibling = d)
            d && (u(d).previousSibling = a)
            c.parentNode = c.previousSibling = c.nextSibling = void 0
            void 0 !== b.childNodes && (b.childNodes = null)
          }
          function wb(a, b) {
            var c = u(a)
            if (void 0 === c.firstChild)
              for (
                c.childNodes = null,
                  b = b || sb(a),
                  c.firstChild = b[0] || null,
                  c.lastChild = b[b.length - 1] || null,
                  rb(a),
                  c = 0;
                c < b.length;
                c++
              ) {
                var d = b[c],
                  e = u(d)
                e.parentNode = a
                e.nextSibling = b[c + 1] || null
                e.previousSibling = b[c - 1] || null
                qb(d)
              }
          }
          var xb = L.parentNode,
            yb = L.childNodes,
            zb = {},
            Q = w.deferConnectionCallbacks && 'loading' === document.readyState,
            R
          function Ab(a) {
            var b = []
            do b.unshift(a)
            while ((a = a.parentNode))
            return b
          }
          function P(a, b, c) {
            if (a !== zb) throw new TypeError('Illegal constructor')
            this.V = 'ShadyRoot'
            this.host = b
            this.Y = c && c.mode
            a = yb(b)
            wb(b, a)
            c = u(b)
            c.root = this
            c.M = 'closed' !== this.Y ? this : null
            c = u(this)
            c.firstChild = c.lastChild = c.parentNode = c.nextSibling = c.previousSibling = null
            c.childNodes = []
            this.K = this.j = !1
            this.c = this.b = this.a = null
            if (w.preferPerformance) {
              c = 0
              for (var d = a.length; c < d; c++) M.removeChild.call(b, a[c])
            } else T(this)
          }
          function T(a) {
            a.j ||
              ((a.j = !0),
              ya(function() {
                return Bb(a)
              }))
          }
          function Bb(a) {
            for (var b; a; ) {
              a.j && (b = a)
              a: {
                var c = a
                a = c.host.getRootNode()
                if (y(a))
                  for (var d = c.host.childNodes, e = 0; e < d.length; e++)
                    if (((c = d[e]), 'slot' == c.localName)) break a
                a = void 0
              }
            }
            b && b._renderRoot()
          }
          P.prototype._renderRoot = function() {
            var a = Q
            Q = !0
            this.j = !1
            if (this.a) {
              U(this)
              for (var b = 0, c; b < this.a.length; b++) {
                c = this.a[b]
                var d = v(c),
                  e = d.assignedNodes
                d.assignedNodes = []
                d.h = []
                if ((d.F = e))
                  for (d = 0; d < e.length; d++) {
                    var f = v(e[d])
                    f.u = f.assignedSlot
                    f.assignedSlot === c && (f.assignedSlot = null)
                  }
              }
              for (c = this.host.firstChild; c; c = c.nextSibling) Cb(this, c)
              for (b = 0; b < this.a.length; b++) {
                c = this.a[b]
                e = v(c)
                if (!e.assignedNodes.length)
                  for (d = c.firstChild; d; d = d.nextSibling) Cb(this, d, c)
                ;(d = (d = v(c.parentNode)) && d.root) &&
                  (Db(d) || d.j) &&
                  d._renderRoot()
                Eb(this, e.h, e.assignedNodes)
                if ((d = e.F)) {
                  for (f = 0; f < d.length; f++) v(d[f]).u = null
                  e.F = null
                  d.length > e.assignedNodes.length && (e.A = !0)
                }
                e.A && ((e.A = !1), Fb(this, c))
              }
              b = this.a
              c = []
              for (e = 0; e < b.length; e++)
                (d = b[e].parentNode),
                  ((f = v(d)) && f.root) || !(0 > c.indexOf(d)) || c.push(d)
              for (b = 0; b < c.length; b++) {
                e = c[b]
                d = e === this ? this.host : e
                f = []
                e = e.childNodes
                for (var h = 0; h < e.length; h++) {
                  var g = e[h]
                  if ('slot' == g.localName) {
                    g = v(g).h
                    for (var k = 0; k < g.length; k++) f.push(g[k])
                  } else f.push(g)
                }
                e = void 0
                h = yb(d)
                g = ha(f, f.length, h, h.length)
                for (var l = (k = 0); k < g.length && (e = g[k]); k++) {
                  for (var n = 0, r; n < e.m.length && (r = e.m[n]); n++)
                    xb(r) === d && M.removeChild.call(d, r),
                      h.splice(e.index + l, 1)
                  l -= e.v
                }
                for (l = 0; l < g.length && (e = g[l]); l++)
                  for (k = h[e.index], n = e.index; n < e.index + e.v; n++)
                    (r = f[n]), M.insertBefore.call(d, r, k), h.splice(n, 0, r)
              }
            }
            if (!w.preferPerformance && !this.K)
              for (r = this.host.childNodes, c = 0, b = r.length; c < b; c++)
                (e = r[c]),
                  (d = v(e)),
                  xb(e) !== this.host ||
                    ('slot' !== e.localName && d.assignedSlot) ||
                    M.removeChild.call(this.host, e)
            this.K = !0
            Q = a
            R && R()
          }
          function Cb(a, b, c) {
            var d = u(b),
              e = d.u
            d.u = null
            c || (c = (a = a.b[b.slot || '__catchall']) && a[0])
            c
              ? (u(c).assignedNodes.push(b), (d.assignedSlot = c))
              : (d.assignedSlot = void 0)
            e !== d.assignedSlot && d.assignedSlot && (u(d.assignedSlot).A = !0)
          }
          function Eb(a, b, c) {
            for (var d = 0, e; d < c.length && (e = c[d]); d++)
              if ('slot' == e.localName) {
                var f = v(e).assignedNodes
                f && f.length && Eb(a, b, f)
              } else b.push(c[d])
          }
          function Fb(a, b) {
            M.dispatchEvent.call(b, new Event('slotchange'))
            b = v(b)
            b.assignedSlot && Fb(a, b.assignedSlot)
          }
          function Gb(a, b) {
            a.c = a.c || []
            a.a = a.a || []
            a.b = a.b || {}
            a.c.push.apply(a.c, b instanceof Array ? b : fa(q(b)))
          }
          function U(a) {
            if (a.c && a.c.length) {
              for (var b = a.c, c, d = 0; d < b.length; d++) {
                var e = b[d]
                wb(e)
                wb(e.parentNode)
                var f = Hb(e)
                a.b[f]
                  ? ((c = c || {}), (c[f] = !0), a.b[f].push(e))
                  : (a.b[f] = [e])
                a.a.push(e)
              }
              if (c) for (var h in c) a.b[h] = Ib(a.b[h])
              a.c = []
            }
          }
          function Hb(a) {
            var b = a.name || a.getAttribute('name') || '__catchall'
            return (a.T = b)
          }
          function Ib(a) {
            return a.sort(function(a, c) {
              a = Ab(a)
              for (var b = Ab(c), e = 0; e < a.length; e++) {
                c = a[e]
                var f = b[e]
                if (c !== f)
                  return (
                    (a = Array.from(c.parentNode.childNodes)),
                    a.indexOf(c) - a.indexOf(f)
                  )
              }
            })
          }
          function Jb(a, b) {
            if (a.a) {
              U(a)
              var c = a.b,
                d
              for (d in c)
                for (var e = c[d], f = 0; f < e.length; f++) {
                  var h = e[f]
                  if (va(b, h)) {
                    e.splice(f, 1)
                    var g = a.a.indexOf(h)
                    0 <= g && a.a.splice(g, 1)
                    f--
                    h = v(h)
                    if ((g = h.h))
                      for (var k = 0; k < g.length; k++) {
                        var l = g[k],
                          n = xb(l)
                        n && M.removeChild.call(n, l)
                      }
                    h.h = []
                    h.assignedNodes = []
                    g = !0
                  }
                }
              return g
            }
          }
          function Db(a) {
            U(a)
            return !(!a.a || !a.a.length)
          }
          if (window.customElements && w.G && !w.preferPerformance) {
            var V = new Map()
            R = function() {
              var a = Array.from(V)
              V.clear()
              a = q(a)
              for (var b = a.next(); !b.done; b = a.next()) {
                b = q(b.value)
                var c = b.next().value
                b.next().value ? c.R() : c.S()
              }
            }
            Q &&
              document.addEventListener(
                'readystatechange',
                function() {
                  Q = !1
                  R()
                },
                { once: !0 }
              )
            var Kb = function(a, b, c) {
                var d = 0,
                  e = '__isConnected' + d++
                if (b || c)
                  (a.prototype.connectedCallback = a.prototype.R = function() {
                    Q
                      ? V.set(this, !0)
                      : this[e] || ((this[e] = !0), b && b.call(this))
                  }),
                    (a.prototype.disconnectedCallback = a.prototype.S = function() {
                      Q
                        ? this.isConnected || V.set(this, !1)
                        : this[e] && ((this[e] = !1), c && c.call(this))
                    })
                return a
              },
              Lb = window.customElements.define
            Object.defineProperty(
              window.CustomElementRegistry.prototype,
              'define',
              {
                value: function(a, b) {
                  var c = b.prototype.connectedCallback,
                    d = b.prototype.disconnectedCallback
                  Lb.call(window.customElements, a, Kb(b, c, d))
                  b.prototype.connectedCallback = c
                  b.prototype.disconnectedCallback = d
                }
              }
            )
          }
          var Mb = L.parentNode,
            Nb = window.document,
            Ob = w.la
          function Pb(a, b, c) {
            if (a.ownerDocument !== Nb && b.ownerDocument !== Nb)
              return M.insertBefore.call(a, b, c)
            if (b === a)
              throw Error(
                "Failed to execute 'appendChild' on 'Node': The new child element contains the parent."
              )
            if (c) {
              var d = v(c)
              d = d && d.parentNode
              if ((void 0 !== d && d !== a) || (void 0 === d && Mb(c) !== a))
                throw Error(
                  "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node."
                )
            }
            if (c === b) return b
            var e = [],
              f = Qb,
              h = z(a),
              g
            h ? (g = h.host.localName) : (g = Rb(a))
            if (b.parentNode) {
              var k = Rb(b)
              Sb(
                b.parentNode,
                b,
                !!h || !(b.getRootNode() instanceof ShadowRoot)
              )
              f = function(a, b) {
                W() && (Tb(a, k), Qb(a, b))
              }
            }
            d = !0
            var l = (!Ob || void 0 === b.__noInsertionPoint) && !Ub(b, g)
            if (h)
              (b.__noInsertionPoint && !l) ||
                Vb(b, function(a) {
                  'slot' === a.localName && e.push(a)
                  l && f(a, g)
                })
            else if (l) {
              var n = Rb(b)
              Vb(b, function(a) {
                var b = g
                W() && (Tb(a, n), Qb(a, b))
              })
            }
            e.length && Gb(h, e)
            ;('slot' === a.localName || e.length) && h && T(h)
            x(a) &&
              (tb(b, a, c),
              (h = v(a)),
              Wb(a) ? (T(h.root), (d = !1)) : h.root && (d = !1))
            d
              ? ((d = y(a) ? a.host : a),
                c
                  ? ((c = Xb(c)), M.insertBefore.call(d, b, c))
                  : M.appendChild.call(d, b))
              : b.ownerDocument !== a.ownerDocument &&
                a.ownerDocument.adoptNode(b)
            Yb(a, b)
            return b
          }
          function Sb(a, b, c) {
            c = void 0 === c ? !1 : c
            if (a.ownerDocument !== Nb) return M.removeChild.call(a, b)
            if (b.parentNode !== a)
              throw Error(
                'The node to be removed is not a child of this node: ' + b
              )
            var d = z(b),
              e = v(a)
            if (x(a) && (vb(b, a), Wb(a))) {
              T(e.root)
              var f = !0
            }
            if (W() && !c && d) {
              var h = Rb(b)
              Vb(b, function(a) {
                Tb(a, h)
              })
            }
            Zb(b)
            if (d) {
              var g = a && 'slot' === a.localName
              g && (f = !0)
              ;((c = Jb(d, b)) || g) && T(d)
            }
            f ||
              ((f = y(a) ? a.host : a),
              ((!e.root && 'slot' !== b.localName) || f === Mb(b)) &&
                M.removeChild.call(f, b))
            Yb(a, null, b)
            return b
          }
          function Zb(a) {
            var b = v(a)
            if (b && void 0 !== b.l) {
              b = a.childNodes
              for (var c = 0, d = b.length, e; c < d && (e = b[c]); c++) Zb(e)
            }
            if ((a = v(a))) a.l = void 0
          }
          function Xb(a) {
            var b = a
            a &&
              'slot' === a.localName &&
              (b =
                (b = (b = v(a)) && b.h) && b.length ? b[0] : Xb(a.nextSibling))
            return b
          }
          function Wb(a) {
            return (a = (a = v(a)) && a.root) && Db(a)
          }
          function $b(a, b) {
            if ('slot' === b) (a = a.parentNode), Wb(a) && T(v(a).root)
            else if ('slot' === a.localName && 'name' === b && (b = z(a))) {
              if (b.a) {
                U(b)
                var c = a.T,
                  d = Hb(a)
                if (d !== c) {
                  c = b.b[c]
                  var e = c.indexOf(a)
                  0 <= e && c.splice(e, 1)
                  c = b.b[d] || (b.b[d] = [])
                  c.push(a)
                  1 < c.length && (b.b[d] = Ib(c))
                }
              }
              T(b)
            }
          }
          function Yb(a, b, c) {
            if ((a = (a = v(a)) && a.i))
              b && a.addedNodes.push(b), c && a.removedNodes.push(c), ac(a)
          }
          function bc(a) {
            if (a && a.nodeType) {
              var b = u(a),
                c = b.l
              void 0 === c &&
                (y(a)
                  ? ((c = a), (b.l = c))
                  : ((c = (c = a.parentNode) ? bc(c) : a),
                    M.contains.call(document.documentElement, a) && (b.l = c)))
              return c
            }
          }
          function cc(a, b, c) {
            var d = []
            dc(a.childNodes, b, c, d)
            return d
          }
          function dc(a, b, c, d) {
            for (var e = 0, f = a.length, h; e < f && (h = a[e]); e++) {
              var g
              if ((g = h.nodeType === Node.ELEMENT_NODE)) {
                g = h
                var k = b,
                  l = c,
                  n = d,
                  r = k(g)
                r && n.push(g)
                l && l(r) ? (g = r) : (dc(g.childNodes, k, l, n), (g = void 0))
              }
              if (g) break
            }
          }
          var ec = null
          function W() {
            ec || (ec = window.ShadyCSS && window.ShadyCSS.ScopingShim)
            return ec || null
          }
          function fc(a, b, c) {
            if (a.ownerDocument !== Nb) M.setAttribute.call(a, b, c)
            else {
              var d = W()
              d && 'class' === b
                ? d.setElementClass(a, c)
                : (M.setAttribute.call(a, b, c), $b(a, b))
            }
          }
          function gc(a, b) {
            if (a.ownerDocument !== document || 'template' === a.localName)
              return M.importNode.call(document, a, b)
            var c = M.importNode.call(document, a, !1)
            if (b) {
              a = a.childNodes
              b = 0
              for (var d; b < a.length; b++)
                (d = gc(a[b], !0)), c.appendChild(d)
            }
            return c
          }
          function Qb(a, b) {
            var c = W()
            c && c.scopeNode(a, b)
          }
          function Tb(a, b) {
            var c = W()
            c && c.unscopeNode(a, b)
          }
          function Ub(a, b) {
            var c = W()
            if (!c) return !0
            if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              c = !0
              for (var d = 0; c && d < a.childNodes.length; d++)
                c = c && Ub(a.childNodes[d], b)
              return c
            }
            return a.nodeType !== Node.ELEMENT_NODE
              ? !0
              : c.currentScopeForNode(a) === b
          }
          function Rb(a) {
            if (a.nodeType !== Node.ELEMENT_NODE) return ''
            var b = W()
            return b ? b.currentScopeForNode(a) : ''
          }
          function Vb(a, b) {
            if (a) {
              a.nodeType === Node.ELEMENT_NODE && b(a)
              for (var c = 0, d; c < a.childNodes.length; c++)
                (d = a.childNodes[c]),
                  d.nodeType === Node.ELEMENT_NODE && Vb(d, b)
            }
          }
          function hc() {
            this.c = !1
            this.addedNodes = []
            this.removedNodes = []
            this.w = new Set()
          }
          function ac(a) {
            a.c ||
              ((a.c = !0),
              ta(function() {
                a.flush()
              }))
          }
          hc.prototype.flush = function() {
            if (this.c) {
              this.c = !1
              var a = this.takeRecords()
              a.length &&
                this.w.forEach(function(b) {
                  b(a)
                })
            }
          }
          hc.prototype.takeRecords = function() {
            if (this.addedNodes.length || this.removedNodes.length) {
              var a = [
                { addedNodes: this.addedNodes, removedNodes: this.removedNodes }
              ]
              this.addedNodes = []
              this.removedNodes = []
              return a
            }
            return []
          }
          function ic(a, b) {
            var c = u(a)
            c.i || (c.i = new hc())
            c.i.w.add(b)
            var d = c.i
            return {
              U: b,
              X: d,
              W: a,
              takeRecords: function() {
                return d.takeRecords()
              }
            }
          }
          function jc(a) {
            var b = a && a.X
            b && (b.w.delete(a.U), b.w.size || (u(a.W).i = null))
          }
          function kc(a, b) {
            var c = b.getRootNode()
            return a
              .map(function(a) {
                var b = c === a.target.getRootNode()
                if (b && a.addedNodes) {
                  if (
                    ((b = Array.from(a.addedNodes).filter(function(a) {
                      return c === a.getRootNode()
                    })),
                    b.length)
                  )
                    return (
                      (a = Object.create(a)),
                      Object.defineProperty(a, 'addedNodes', {
                        value: b,
                        configurable: !0
                      }),
                      a
                    )
                } else if (b) return a
              })
              .filter(function(a) {
                return a
              })
          }
          var X = '__eventWrappers' + Date.now(),
            lc = (function() {
              var a = Object.getOwnPropertyDescriptor(
                Event.prototype,
                'composed'
              )
              return a
                ? function(b) {
                    return a.get.call(b)
                  }
                : null
            })(),
            mc = {
              blur: !0,
              focus: !0,
              focusin: !0,
              focusout: !0,
              click: !0,
              dblclick: !0,
              mousedown: !0,
              mouseenter: !0,
              mouseleave: !0,
              mousemove: !0,
              mouseout: !0,
              mouseover: !0,
              mouseup: !0,
              wheel: !0,
              beforeinput: !0,
              input: !0,
              keydown: !0,
              keyup: !0,
              compositionstart: !0,
              compositionupdate: !0,
              compositionend: !0,
              touchstart: !0,
              touchend: !0,
              touchmove: !0,
              touchcancel: !0,
              pointerover: !0,
              pointerenter: !0,
              pointerdown: !0,
              pointermove: !0,
              pointerup: !0,
              pointercancel: !0,
              pointerout: !0,
              pointerleave: !0,
              gotpointercapture: !0,
              lostpointercapture: !0,
              dragstart: !0,
              drag: !0,
              dragenter: !0,
              dragleave: !0,
              dragover: !0,
              drop: !0,
              dragend: !0,
              DOMActivate: !0,
              DOMFocusIn: !0,
              DOMFocusOut: !0,
              keypress: !0
            },
            nc = {
              DOMAttrModified: !0,
              DOMAttributeNameChanged: !0,
              DOMCharacterDataModified: !0,
              DOMElementNameChanged: !0,
              DOMNodeInserted: !0,
              DOMNodeInsertedIntoDocument: !0,
              DOMNodeRemoved: !0,
              DOMNodeRemovedFromDocument: !0,
              DOMSubtreeModified: !0
            }
          function oc(a, b) {
            var c = [],
              d = a
            for (a = a === window ? window : a.getRootNode(); d; )
              c.push(d),
                (d = d.assignedSlot
                  ? d.assignedSlot
                  : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
                    d.host &&
                    (b || d !== a)
                  ? d.host
                  : d.parentNode)
            c[c.length - 1] === document && c.push(window)
            return c
          }
          function pc(a, b) {
            if (!y) return a
            a = oc(a, !0)
            for (var c = 0, d, e, f, h; c < b.length; c++)
              if (
                ((d = b[c]),
                (f = d === window ? window : d.getRootNode()),
                f !== e && ((h = a.indexOf(f)), (e = f)),
                !y(f) || -1 < h)
              )
                return d
          }
          var qc = {
            get composed() {
              void 0 === this.o &&
                (lc
                  ? (this.o =
                      'focusin' === this.type ||
                      'focusout' === this.type ||
                      lc(this))
                  : !1 !== this.isTrusted && (this.o = mc[this.type]))
              return this.o || !1
            },
            composedPath: function() {
              this.H || (this.H = oc(this.__target, this.composed))
              return this.H
            },
            get target() {
              return pc(
                this.currentTarget || this.__previousCurrentTarget,
                this.composedPath()
              )
            },
            get relatedTarget() {
              if (!this.C) return null
              this.J || (this.J = oc(this.C, !0))
              return pc(
                this.currentTarget || this.__previousCurrentTarget,
                this.J
              )
            },
            stopPropagation: function() {
              Event.prototype.stopPropagation.call(this)
              this.B = !0
            },
            stopImmediatePropagation: function() {
              Event.prototype.stopImmediatePropagation.call(this)
              this.B = this.O = !0
            }
          }
          function rc(a) {
            function b(b, d) {
              b = new a(b, d)
              b.o = d && !!d.composed
              return b
            }
            pa(b, a)
            b.prototype = a.prototype
            return b
          }
          var sc = { focus: !0, blur: !0 }
          function tc(a) {
            return a.__target !== a.target || a.C !== a.relatedTarget
          }
          function uc(a, b, c) {
            if (
              (c =
                b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c])
            )
              for (
                var d = 0, e;
                (e = c[d]) &&
                (!tc(a) || a.target !== a.relatedTarget) &&
                (e.call(b, a), !a.O);
                d++
              );
          }
          function vc(a) {
            var b = a.composedPath()
            Object.defineProperty(a, 'currentTarget', {
              get: function() {
                return d
              },
              configurable: !0
            })
            for (var c = b.length - 1; 0 <= c; c--) {
              var d = b[c]
              uc(a, d, 'capture')
              if (a.B) return
            }
            Object.defineProperty(a, 'eventPhase', {
              get: function() {
                return Event.AT_TARGET
              }
            })
            var e
            for (c = 0; c < b.length; c++) {
              d = b[c]
              var f = v(d)
              f = f && f.root
              if (0 === c || (f && f === e))
                if (
                  (uc(a, d, 'bubble'),
                  d !== window && (e = d.getRootNode()),
                  a.B)
                )
                  break
            }
          }
          function wc(a, b, c, d, e, f) {
            for (var h = 0; h < a.length; h++) {
              var g = a[h],
                k = g.type,
                l = g.capture,
                n = g.once,
                r = g.passive
              if (b === g.node && c === k && d === l && e === n && f === r)
                return h
            }
            return -1
          }
          function xc(a, b, c) {
            if (b) {
              var d = typeof b
              if ('function' === d || 'object' === d)
                if (
                  'object' !== d ||
                  (b.handleEvent && 'function' === typeof b.handleEvent)
                ) {
                  var e = this instanceof Window ? M.$ : M.addEventListener
                  if (nc[a]) return e.call(this, a, b, c)
                  if (c && 'object' === typeof c) {
                    var f = !!c.capture
                    var h = !!c.once
                    var g = !!c.passive
                  } else (f = !!c), (g = h = !1)
                  var k = (c && c.D) || this,
                    l = b[X]
                  if (l) {
                    if (-1 < wc(l, k, a, f, h, g)) return
                  } else b[X] = []
                  l = function(e) {
                    h && this.removeEventListener(a, b, c)
                    e.__target || yc(e)
                    if (k !== this) {
                      var f = Object.getOwnPropertyDescriptor(
                        e,
                        'currentTarget'
                      )
                      Object.defineProperty(e, 'currentTarget', {
                        get: function() {
                          return k
                        },
                        configurable: !0
                      })
                    }
                    e.__previousCurrentTarget = e.currentTarget
                    if (!y(k) || -1 != e.composedPath().indexOf(k))
                      if (e.composed || -1 < e.composedPath().indexOf(k))
                        if (tc(e) && e.target === e.relatedTarget)
                          e.eventPhase === Event.BUBBLING_PHASE &&
                            e.stopImmediatePropagation()
                        else if (
                          e.eventPhase === Event.CAPTURING_PHASE ||
                          e.bubbles ||
                          e.target === k ||
                          k instanceof Window
                        ) {
                          var g =
                            'function' === d
                              ? b.call(k, e)
                              : b.handleEvent && b.handleEvent(e)
                          k !== this &&
                            (f
                              ? (Object.defineProperty(e, 'currentTarget', f),
                                (f = null))
                              : delete e.currentTarget)
                          return g
                        }
                  }
                  b[X].push({
                    node: k,
                    type: a,
                    capture: f,
                    once: h,
                    passive: g,
                    ba: l
                  })
                  sc[a]
                    ? ((this.__handlers = this.__handlers || {}),
                      (this.__handlers[a] = this.__handlers[a] || {
                        capture: [],
                        bubble: []
                      }),
                      this.__handlers[a][f ? 'capture' : 'bubble'].push(l))
                    : e.call(this, a, l, c)
                }
            }
          }
          function zc(a, b, c) {
            if (b) {
              var d = this instanceof Window ? M.aa : M.removeEventListener
              if (nc[a]) return d.call(this, a, b, c)
              if (c && 'object' === typeof c) {
                var e = !!c.capture
                var f = !!c.once
                var h = !!c.passive
              } else (e = !!c), (h = f = !1)
              var g = (c && c.D) || this,
                k = void 0
              var l = null
              try {
                l = b[X]
              } catch (n) {}
              l &&
                ((f = wc(l, g, a, e, f, h)),
                -1 < f &&
                  ((k = l.splice(f, 1)[0].ba), l.length || (b[X] = void 0)))
              d.call(this, a, k || b, c)
              k &&
                sc[a] &&
                this.__handlers &&
                this.__handlers[a] &&
                ((a = this.__handlers[a][e ? 'capture' : 'bubble']),
                (k = a.indexOf(k)),
                -1 < k && a.splice(k, 1))
            }
          }
          function Ac() {
            for (var a in sc)
              window.addEventListener(
                a,
                function(a) {
                  a.__target || (yc(a), vc(a))
                },
                !0
              )
          }
          function yc(a) {
            a.__target = a.target
            a.C = a.relatedTarget
            if (w.g) {
              var b = Object.getPrototypeOf(a)
              if (!b.hasOwnProperty('__patchProto')) {
                var c = Object.create(b)
                c.ca = b
                oa(c, qc)
                b.__patchProto = c
              }
              a.__proto__ = b.__patchProto
            } else oa(a, qc)
          }
          var Bc = rc(window.Event),
            Cc = rc(window.CustomEvent),
            Dc = rc(window.MouseEvent)
          function Ec() {
            window.Event = Bc
            window.CustomEvent = Cc
            window.MouseEvent = Dc
            Ac()
            if (
              !lc &&
              Object.getOwnPropertyDescriptor(Event.prototype, 'isTrusted')
            ) {
              var a = function() {
                var a = new MouseEvent('click', {
                  bubbles: !0,
                  cancelable: !0,
                  composed: !0
                })
                this.dispatchEvent(a)
              }
              Element.prototype.click
                ? (Element.prototype.click = a)
                : HTMLElement.prototype.click &&
                  (HTMLElement.prototype.click = a)
            }
          }
          function Fc(a) {
            var b = a.getRootNode()
            y(b) && Bb(b)
            return ((a = v(a)) && a.assignedSlot) || null
          }
          var Gc = {
              addEventListener: xc.bind(window),
              removeEventListener: zc.bind(window)
            },
            Hc = {
              addEventListener: xc,
              removeEventListener: zc,
              appendChild: function(a) {
                return Pb(this, a)
              },
              insertBefore: function(a, b) {
                return Pb(this, a, b)
              },
              removeChild: function(a) {
                return Sb(this, a)
              },
              replaceChild: function(a, b) {
                Pb(this, a, b)
                Sb(this, b)
                return a
              },
              cloneNode: function(a) {
                if ('template' == this.localName)
                  var b = M.cloneNode.call(this, a)
                else if (
                  ((b = M.cloneNode.call(this, !1)),
                  a && b.nodeType !== Node.ATTRIBUTE_NODE)
                ) {
                  a = this.childNodes
                  for (var c = 0, d; c < a.length; c++)
                    (d = a[c].cloneNode(!0)), b.appendChild(d)
                }
                return b
              },
              getRootNode: function() {
                return bc(this)
              },
              contains: function(a) {
                return va(this, a)
              },
              dispatchEvent: function(a) {
                D()
                return M.dispatchEvent.call(this, a)
              }
            }
          Object.defineProperties(Hc, {
            isConnected: {
              get: function() {
                if (ib && ib.call(this)) return !0
                if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1
                var a = this.ownerDocument
                if (ua) {
                  if (M.contains.call(a, this)) return !0
                } else if (
                  a.documentElement &&
                  M.contains.call(a.documentElement, this)
                )
                  return !0
                for (a = this; a && !(a instanceof Document); )
                  a = a.parentNode || (y(a) ? a.host : void 0)
                return !!(a && a instanceof Document)
              },
              configurable: !0
            }
          })
          var Ic = {
              get assignedSlot() {
                return Fc(this)
              }
            },
            Jc = {
              querySelector: function(a) {
                return (
                  cc(
                    this,
                    function(b) {
                      return na.call(b, a)
                    },
                    function(a) {
                      return !!a
                    }
                  )[0] || null
                )
              },
              querySelectorAll: function(a, b) {
                if (b) {
                  b = Array.prototype.slice.call(
                    M.querySelectorAll.call(this, a)
                  )
                  var c = this.getRootNode()
                  return b.filter(function(a) {
                    return a.getRootNode() == c
                  })
                }
                return cc(this, function(b) {
                  return na.call(b, a)
                })
              }
            },
            Kc = {},
            Lc = {
              assignedNodes: function(a) {
                if ('slot' === this.localName) {
                  var b = this.getRootNode()
                  y(b) && Bb(b)
                  return (b = v(this))
                    ? (a && a.flatten ? b.h : b.assignedNodes) || []
                    : []
                }
              }
            },
            Mc = B(
              {
                setAttribute: function(a, b) {
                  fc(this, a, b)
                },
                removeAttribute: function(a) {
                  M.removeAttribute.call(this, a)
                  $b(this, a)
                },
                attachShadow: function(a) {
                  if (!this) throw 'Must provide a host.'
                  if (!a) throw 'Not enough arguments.'
                  return new P(zb, this, a)
                },
                get slot() {
                  return this.getAttribute('slot')
                },
                set slot(a) {
                  fc(this, 'slot', a)
                },
                get assignedSlot() {
                  return Fc(this)
                }
              },
              Jc,
              Lc
            )
          Object.defineProperties(Mc, nb)
          var Nc = {
            importNode: function(a, b) {
              return gc(a, b)
            },
            getElementById: function(a) {
              return (
                cc(
                  this,
                  function(b) {
                    return b.id == a
                  },
                  function(a) {
                    return !!a
                  }
                )[0] || null
              )
            }
          }
          Object.defineProperties(Nc, { _activeElement: ob.activeElement })
          for (
            var Oc = HTMLElement.prototype.blur,
              Pc = {
                blur: function() {
                  var a = v(this)
                  ;(a = (a = a && a.root) && a.activeElement)
                    ? a.blur()
                    : Oc.call(this)
                }
              },
              Y = {},
              Qc = q(Object.getOwnPropertyNames(Document.prototype)),
              Rc = Qc.next();
            !Rc.done;
            Y = { f: Y.f }, Rc = Qc.next()
          )
            (Y.f = Rc.value),
              'on' === Y.f.substring(0, 2) &&
                Object.defineProperty(Pc, Y.f, {
                  set: (function(a) {
                    return function(b) {
                      var c = u(this),
                        d = a.f.substring(2)
                      c.s[a.f] && this.removeEventListener(d, c.s[a.f])
                      this.addEventListener(d, b, {})
                      c.s[a.f] = b
                    }
                  })(Y),
                  get: (function(a) {
                    return function() {
                      var b = v(this)
                      return b && b.s[a.f]
                    }
                  })(Y),
                  configurable: !0
                })
          var Sc = B(
            {
              addEventListener: function(a, b, c) {
                'object' !== typeof c && (c = { capture: !!c })
                c.D = this
                this.host.addEventListener(a, b, c)
              },
              removeEventListener: function(a, b, c) {
                'object' !== typeof c && (c = { capture: !!c })
                c.D = this
                this.host.removeEventListener(a, b, c)
              },
              getElementById: function(a) {
                return (
                  cc(
                    this,
                    function(b) {
                      return b.id == a
                    },
                    function(a) {
                      return !!a
                    }
                  )[0] || null
                )
              }
            },
            Jc
          )
          w.preferPerformance || (B(Nc, Jc), B(Kc, Jc))
          function Z(a, b) {
            for (
              var c = Object.getOwnPropertyNames(b), d = 0;
              d < c.length;
              d++
            ) {
              var e = c[d],
                f = Object.getOwnPropertyDescriptor(b, e)
              f.value ? (a[e] = f.value) : Object.defineProperty(a, e, f)
            }
          }
          if (w.G) {
            window.ShadyDOM = {
              inUse: w.G,
              patch: function(a) {
                rb(a)
                qb(a)
                return a
              },
              isShadyRoot: y,
              enqueue: ya,
              flush: D,
              settings: w,
              filterMutations: kc,
              observeChildren: ic,
              unobserveChildren: jc,
              nativeMethods: M,
              nativeTree: L,
              deferConnectionCallbacks: w.deferConnectionCallbacks,
              preferPerformance: w.preferPerformance,
              handlesDynamicScoping: !0
            }
            Ec()
            var Tc =
              (window.customElements &&
                window.customElements.nativeHTMLElement) ||
              HTMLElement
            Z(P.prototype, Sc)
            Z(window.Node.prototype, Hc)
            Z(window.Window.prototype, Gc)
            Z(window.Text.prototype, Ic)
            Z(window.Element.prototype, Mc)
            Z(window.DocumentFragment.prototype, Kc)
            Z(window.Document.prototype, Nc)
            window.HTMLSlotElement && Z(window.HTMLSlotElement.prototype, Lc)
            Z(Tc.prototype, Pc)
            w.g &&
              (O(window.Node.prototype),
              O(window.Text.prototype),
              O(window.DocumentFragment.prototype),
              O(window.Element.prototype),
              O(Tc.prototype),
              O(window.Document.prototype),
              window.HTMLSlotElement && O(window.HTMLSlotElement.prototype))
            pb()
            window.ShadowRoot = P
          }
        }.call(this))
      },
      {}
    ],
    '../node_modules/@webcomponents/shadycss/scoping-shim.min.js': [
      function(require, module, exports) {
        var global = arguments[3]
        ;(function() {
          /*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
          'use strict'
          var k,
            aa =
              'undefined' != typeof window && window === this
                ? this
                : 'undefined' != typeof global && null != global
                ? global
                : this
          function n() {
            this.end = this.start = 0
            this.rules = this.parent = this.previous = null
            this.cssText = this.parsedCssText = ''
            this.atRule = !1
            this.type = 0
            this.parsedSelector = this.selector = this.keyframesName = ''
          }
          function p(a) {
            a = a.replace(ba, '').replace(ca, '')
            var b = da,
              c = a,
              e = new n()
            e.start = 0
            e.end = c.length
            for (var d = e, f = 0, g = c.length; f < g; f++)
              if ('{' === c[f]) {
                d.rules || (d.rules = [])
                var h = d,
                  l = h.rules[h.rules.length - 1] || null
                d = new n()
                d.start = f + 1
                d.parent = h
                d.previous = l
                h.rules.push(d)
              } else '}' === c[f] && ((d.end = f + 1), (d = d.parent || e))
            return b(e, a)
          }
          function da(a, b) {
            var c = b.substring(a.start, a.end - 1)
            a.parsedCssText = a.cssText = c.trim()
            a.parent &&
              ((c = b.substring(
                a.previous ? a.previous.end : a.parent.start,
                a.start - 1
              )),
              (c = ea(c)),
              (c = c.replace(fa, ' ')),
              (c = c.substring(c.lastIndexOf(';') + 1)),
              (c = a.parsedSelector = a.selector = c.trim()),
              (a.atRule = 0 === c.indexOf('@')),
              a.atRule
                ? 0 === c.indexOf('@media')
                  ? (a.type = ha)
                  : c.match(ia) &&
                    ((a.type = q),
                    (a.keyframesName = a.selector.split(fa).pop()))
                : (a.type = 0 === c.indexOf('--') ? ja : ka))
            if ((c = a.rules))
              for (
                var e = 0, d = c.length, f = void 0;
                e < d && (f = c[e]);
                e++
              )
                da(f, b)
            return a
          }
          function ea(a) {
            return a.replace(/\\([0-9a-f]{1,6})\s/gi, function(a, c) {
              a = c
              for (c = 6 - a.length; c--; ) a = '0' + a
              return '\\' + a
            })
          }
          function la(a, b, c) {
            c = void 0 === c ? '' : c
            var e = ''
            if (a.cssText || a.rules) {
              var d = a.rules,
                f
              if ((f = d))
                (f = d[0]),
                  (f = !(f && f.selector && 0 === f.selector.indexOf('--')))
              if (f) {
                f = 0
                for (var g = d.length, h = void 0; f < g && (h = d[f]); f++)
                  e = la(h, b, e)
              } else
                b
                  ? (b = a.cssText)
                  : ((b = a.cssText),
                    (b = b.replace(ma, '').replace(na, '')),
                    (b = b.replace(oa, '').replace(pa, ''))),
                  (e = b.trim()) && (e = '  ' + e + '\n')
            }
            e &&
              (a.selector && (c += a.selector + ' {\n'),
              (c += e),
              a.selector && (c += '}\n\n'))
            return c
          }
          var ka = 1,
            q = 7,
            ha = 4,
            ja = 1e3,
            ba = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
            ca = /@import[^;]*;/gim,
            ma = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
            na = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
            oa = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
            pa = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
            ia = /^@[^\s]*keyframes/,
            fa = /\s+/g
          var r = !(window.ShadyDOM && window.ShadyDOM.inUse),
            t
          function qa(a) {
            t =
              a && a.shimcssproperties
                ? !1
                : r ||
                  !(
                    navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) ||
                    !window.CSS ||
                    !CSS.supports ||
                    !CSS.supports('box-shadow', '0 0 0 var(--foo)')
                  )
          }
          var ra
          window.ShadyCSS &&
            void 0 !== window.ShadyCSS.cssBuild &&
            (ra = window.ShadyCSS.cssBuild)
          window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
            ? (t = window.ShadyCSS.nativeCss)
            : window.ShadyCSS
            ? (qa(window.ShadyCSS), (window.ShadyCSS = void 0))
            : qa(window.WebComponents && window.WebComponents.flags)
          var u = t,
            v = ra
          var w = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
            x = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
            sa = /(--[\w-]+)\s*([:,;)]|$)/gi,
            ta = /(animation\s*:)|(animation-name\s*:)/,
            ua = /@media\s(.*)/,
            va = /\{[^}]*\}/g
          var wa = new Set()
          function y(a, b) {
            if (!a) return ''
            'string' === typeof a && (a = p(a))
            b && z(a, b)
            return la(a, u)
          }
          function A(a) {
            !a.__cssRules && a.textContent && (a.__cssRules = p(a.textContent))
            return a.__cssRules || null
          }
          function xa(a) {
            return !!a.parent && a.parent.type === q
          }
          function z(a, b, c, e) {
            if (a) {
              var d = !1,
                f = a.type
              if (e && f === ha) {
                var g = a.selector.match(ua)
                g && (window.matchMedia(g[1]).matches || (d = !0))
              }
              f === ka ? b(a) : c && f === q ? c(a) : f === ja && (d = !0)
              if ((a = a.rules) && !d)
                for (d = 0, f = a.length, g = void 0; d < f && (g = a[d]); d++)
                  z(g, b, c, e)
            }
          }
          function B(a, b, c, e) {
            var d = document.createElement('style')
            b && d.setAttribute('scope', b)
            d.textContent = a
            ya(d, c, e)
            return d
          }
          var C = null
          function za(a) {
            a = document.createComment(' Shady DOM styles for ' + a + ' ')
            var b = document.head
            b.insertBefore(a, (C ? C.nextSibling : null) || b.firstChild)
            return (C = a)
          }
          function ya(a, b, c) {
            b = b || document.head
            b.insertBefore(a, (c && c.nextSibling) || b.firstChild)
            C
              ? a.compareDocumentPosition(C) ===
                  Node.DOCUMENT_POSITION_PRECEDING && (C = a)
              : (C = a)
          }
          function D(a, b) {
            for (var c = 0, e = a.length; b < e; b++)
              if ('(' === a[b]) c++
              else if (')' === a[b] && 0 === --c) return b
            return -1
          }
          function Aa(a, b) {
            var c = a.indexOf('var(')
            if (-1 === c) return b(a, '', '', '')
            var e = D(a, c + 3),
              d = a.substring(c + 4, e)
            c = a.substring(0, c)
            a = Aa(a.substring(e + 1), b)
            e = d.indexOf(',')
            return -1 === e
              ? b(c, d.trim(), '', a)
              : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a)
          }
          function E(a, b) {
            r
              ? a.setAttribute('class', b)
              : window.ShadyDOM.nativeMethods.setAttribute.call(a, 'class', b)
          }
          var F =
            (window.ShadyDOM && window.ShadyDOM.wrap) ||
            function(a) {
              return a
            }
          function G(a) {
            var b = a.localName,
              c = ''
            b
              ? -1 < b.indexOf('-') ||
                ((c = b), (b = (a.getAttribute && a.getAttribute('is')) || ''))
              : ((b = a.is), (c = a.extends))
            return { is: b, s: c }
          }
          function Ba(a) {
            for (var b = [], c = '', e = 0; 0 <= e && e < a.length; e++)
              if ('(' === a[e]) {
                var d = D(a, e)
                c += a.slice(e, d + 1)
                e = d
              } else ',' === a[e] ? (b.push(c), (c = '')) : (c += a[e])
            c && b.push(c)
            return b
          }
          function H(a) {
            if (void 0 !== v) return v
            if (void 0 === a.__cssBuild) {
              var b = a.getAttribute('css-build')
              if (b) a.__cssBuild = b
              else {
                a: {
                  b =
                    'template' === a.localName
                      ? a.content.firstChild
                      : a.firstChild
                  if (
                    b instanceof Comment &&
                    ((b = b.textContent.trim().split(':')),
                    'css-build' === b[0])
                  ) {
                    b = b[1]
                    break a
                  }
                  b = ''
                }
                if ('' !== b) {
                  var c =
                    'template' === a.localName
                      ? a.content.firstChild
                      : a.firstChild
                  c.parentNode.removeChild(c)
                }
                a.__cssBuild = b
              }
            }
            return a.__cssBuild || ''
          }
          function Ca(a) {
            a = void 0 === a ? '' : a
            return '' !== a && u ? (r ? 'shadow' === a : 'shady' === a) : !1
          }
          function I() {}
          function Da(a, b) {
            J(K, a, function(a) {
              L(a, b || '')
            })
          }
          function J(a, b, c) {
            b.nodeType === Node.ELEMENT_NODE && c(b)
            var e
            'template' === b.localName
              ? (e = (b.content || b._content || b).childNodes)
              : (e = b.children || b.childNodes)
            if (e) for (b = 0; b < e.length; b++) J(a, e[b], c)
          }
          function L(a, b, c) {
            if (b)
              if (a.classList)
                c
                  ? (a.classList.remove('style-scope'), a.classList.remove(b))
                  : (a.classList.add('style-scope'), a.classList.add(b))
              else if (a.getAttribute) {
                var e = a.getAttribute('class')
                c
                  ? e &&
                    ((b = e.replace('style-scope', '').replace(b, '')), E(a, b))
                  : E(a, (e ? e + ' ' : '') + 'style-scope ' + b)
              }
          }
          function Ea(a, b, c) {
            J(K, a, function(a) {
              L(a, b, !0)
              L(a, c)
            })
          }
          function Fa(a, b) {
            J(K, a, function(a) {
              L(a, b || '', !0)
            })
          }
          function M(a, b, c, e, d) {
            var f = K
            d = void 0 === d ? '' : d
            '' === d &&
              (r || 'shady' === (void 0 === e ? '' : e)
                ? (d = y(b, c))
                : ((a = G(a)), (d = Ga(f, b, a.is, a.s, c) + '\n\n')))
            return d.trim()
          }
          function Ga(a, b, c, e, d) {
            var f = Ha(c, e)
            c = c ? '.' + c : ''
            return y(b, function(b) {
              b.c || ((b.selector = b.g = Ia(a, b, a.b, c, f)), (b.c = !0))
              d && d(b, c, f)
            })
          }
          function Ha(a, b) {
            return b ? '[is=' + a + ']' : a
          }
          function Ia(a, b, c, e, d) {
            var f = Ba(b.selector)
            if (!xa(b)) {
              b = 0
              for (var g = f.length, h = void 0; b < g && (h = f[b]); b++)
                f[b] = c.call(a, h, e, d)
            }
            return f
              .filter(function(a) {
                return !!a
              })
              .join(',')
          }
          function Ja(a) {
            return a.replace(Ka, function(a, c, e) {
              ;-1 < e.indexOf('+')
                ? (e = e.replace(/\+/g, '___'))
                : -1 < e.indexOf('___') && (e = e.replace(/___/g, '+'))
              return ':' + c + '(' + e + ')'
            })
          }
          function La(a) {
            for (var b = [], c; (c = a.match(Ma)); ) {
              var e = c.index,
                d = D(a, e)
              if (-1 === d) throw Error(c.input + " selector missing ')'")
              c = a.slice(e, d + 1)
              a = a.replace(c, '\ue000')
              b.push(c)
            }
            return { A: a, matches: b }
          }
          function Na(a, b) {
            var c = a.split('\ue000')
            return b.reduce(function(a, b, f) {
              return a + b + c[f + 1]
            }, c[0])
          }
          I.prototype.b = function(a, b, c) {
            var e = !1
            a = a.trim()
            var d = Ka.test(a)
            d &&
              ((a = a.replace(Ka, function(a, b, c) {
                return ':' + b + '(' + c.replace(/\s/g, '') + ')'
              })),
              (a = Ja(a)))
            var f = Ma.test(a)
            if (f) {
              var g = La(a)
              a = g.A
              g = g.matches
            }
            a = a.replace(Oa, ':host $1')
            a = a.replace(Pa, function(a, d, f) {
              e ||
                ((a = Qa(f, d, b, c)),
                (e = e || a.stop),
                (d = a.G),
                (f = a.value))
              return d + f
            })
            f && (a = Na(a, g))
            d && (a = Ja(a))
            return a
          }
          function Qa(a, b, c, e) {
            var d = a.indexOf('::slotted')
            0 <= a.indexOf(':host')
              ? (a = Ra(a, e))
              : 0 !== d && (a = c ? Sa(a, c) : a)
            c = !1
            0 <= d && ((b = ''), (c = !0))
            if (c) {
              var f = !0
              c &&
                (a = a.replace(Ta, function(a, b) {
                  return ' > ' + b
                }))
            }
            a = a.replace(Ua, function(a, b, c) {
              return '[dir="' + c + '"] ' + b + ', ' + b + '[dir="' + c + '"]'
            })
            return { value: a, G: b, stop: f }
          }
          function Sa(a, b) {
            a = a.split(/(\[.+?\])/)
            for (var c = [], e = 0; e < a.length; e++)
              if (1 === e % 2) c.push(a[e])
              else {
                var d = a[e]
                if ('' !== d || e !== a.length - 1)
                  (d = d.split(':')), (d[0] += b), c.push(d.join(':'))
              }
            return c.join('')
          }
          function Ra(a, b) {
            var c = a.match(Va)
            return (c = (c && c[2].trim()) || '')
              ? c[0].match(Wa)
                ? a.replace(Va, function(a, c, f) {
                    return b + f
                  })
                : c.split(Wa)[0] === b
                ? c
                : 'should_not_match'
              : a.replace(':host', b)
          }
          function Xa(a) {
            ':root' === a.selector && (a.selector = 'html')
          }
          I.prototype.c = function(a) {
            return a.match(':host')
              ? ''
              : a.match('::slotted')
              ? this.b(a, ':not(.style-scope)')
              : Sa(a.trim(), ':not(.style-scope)')
          }
          aa.Object.defineProperties(I.prototype, {
            a: {
              configurable: !0,
              enumerable: !0,
              get: function() {
                return 'style-scope'
              }
            }
          })
          var Ka = /:(nth[-\w]+)\(([^)]+)\)/,
            Pa = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
            Wa = /[[.:#*]/,
            Oa = /^(::slotted)/,
            Va = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
            Ta = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
            Ua = /(.*):dir\((?:(ltr|rtl))\)/,
            Ma = /:(?:matches|any|-(?:webkit|moz)-any)/,
            K = new I()
          function N(a, b, c, e, d) {
            this.m = a || null
            this.b = b || null
            this.w = c || []
            this.o = null
            this.cssBuild = d || ''
            this.s = e || ''
            this.a = this.i = this.l = null
          }
          function P(a) {
            return a ? a.__styleInfo : null
          }
          function Ya(a, b) {
            return (a.__styleInfo = b)
          }
          N.prototype.c = function() {
            return this.m
          }
          N.prototype._getStyleRules = N.prototype.c
          function Za(a) {
            var b =
              this.matches ||
              this.matchesSelector ||
              this.mozMatchesSelector ||
              this.msMatchesSelector ||
              this.oMatchesSelector ||
              this.webkitMatchesSelector
            return b && b.call(this, a)
          }
          var $a = navigator.userAgent.match('Trident')
          function ab() {}
          function bb(a) {
            var b = {},
              c = [],
              e = 0
            z(
              a,
              function(a) {
                Q(a)
                a.index = e++
                a = a.f.cssText
                for (var c; (c = sa.exec(a)); ) {
                  var d = c[1]
                  ':' !== c[2] && (b[d] = !0)
                }
              },
              function(a) {
                c.push(a)
              }
            )
            a.b = c
            a = []
            for (var d in b) a.push(d)
            return a
          }
          function Q(a) {
            if (!a.f) {
              var b = {},
                c = {}
              R(a, c) && ((b.j = c), (a.rules = null))
              b.cssText = a.parsedCssText.replace(va, '').replace(w, '')
              a.f = b
            }
          }
          function R(a, b) {
            var c = a.f
            if (c) {
              if (c.j) return Object.assign(b, c.j), !0
            } else {
              c = a.parsedCssText
              for (var e; (a = w.exec(c)); ) {
                e = (a[2] || a[3]).trim()
                if ('inherit' !== e || 'unset' !== e) b[a[1].trim()] = e
                e = !0
              }
              return e
            }
          }
          function S(a, b, c) {
            b &&
              (b =
                0 <= b.indexOf(';')
                  ? cb(a, b, c)
                  : Aa(b, function(b, d, f, g) {
                      if (!d) return b + g
                      ;(d = S(a, c[d], c)) && 'initial' !== d
                        ? 'apply-shim-inherit' === d && (d = 'inherit')
                        : (d = S(a, c[f] || f, c) || f)
                      return b + (d || '') + g
                    }))
            return (b && b.trim()) || ''
          }
          function cb(a, b, c) {
            b = b.split(';')
            for (var e = 0, d, f; e < b.length; e++)
              if ((d = b[e])) {
                x.lastIndex = 0
                if ((f = x.exec(d))) d = S(a, c[f[1]], c)
                else if (((f = d.indexOf(':')), -1 !== f)) {
                  var g = d.substring(f)
                  g = g.trim()
                  g = S(a, g, c) || g
                  d = d.substring(0, f) + g
                }
                b[e] =
                  d && d.lastIndexOf(';') === d.length - 1
                    ? d.slice(0, -1)
                    : d || ''
              }
            return b.join(';')
          }
          function db(a, b) {
            var c = {},
              e = []
            z(
              a,
              function(a) {
                a.f || Q(a)
                var d = a.g || a.parsedSelector
                b &&
                  a.f.j &&
                  d &&
                  Za.call(b, d) &&
                  (R(a, c),
                  (a = a.index),
                  (d = parseInt(a / 32, 10)),
                  (e[d] = (e[d] || 0) | (1 << a % 32)))
              },
              null,
              !0
            )
            return { j: c, key: e }
          }
          function eb(a, b, c, e) {
            b.f || Q(b)
            if (b.f.j) {
              var d = G(a)
              a = d.is
              d = d.s
              d = a ? Ha(a, d) : 'html'
              var f = b.parsedSelector,
                g = ':host > *' === f || 'html' === f,
                h = 0 === f.indexOf(':host') && !g
              'shady' === c &&
                ((g = f === d + ' > *.' + d || -1 !== f.indexOf('html')),
                (h = !g && 0 === f.indexOf(d)))
              if (g || h)
                (c = d),
                  h &&
                    (b.g || (b.g = Ia(K, b, K.b, a ? '.' + a : '', d)),
                    (c = b.g || d)),
                  e({ A: c, K: h, S: g })
            }
          }
          function fb(a, b, c) {
            var e = {},
              d = {}
            z(
              b,
              function(b) {
                eb(a, b, c, function(c) {
                  Za.call(a._element || a, c.A) && (c.K ? R(b, e) : R(b, d))
                })
              },
              null,
              !0
            )
            return { L: d, J: e }
          }
          function gb(a, b, c, e) {
            var d = G(b),
              f = Ha(d.is, d.s),
              g = new RegExp(
                '(?:^|[^.#[:])' +
                  (b.extends ? '\\' + f.slice(0, -1) + '\\]' : f) +
                  '($|[.:[\\s>+~])'
              ),
              h = P(b)
            d = h.m
            h = h.cssBuild
            var l = hb(d, e)
            return M(
              b,
              d,
              function(b) {
                var d = ''
                b.f || Q(b)
                b.f.cssText && (d = cb(a, b.f.cssText, c))
                b.cssText = d
                if (!r && !xa(b) && b.cssText) {
                  var h = (d = b.cssText)
                  null == b.C && (b.C = ta.test(d))
                  if (b.C)
                    if (null == b.u) {
                      b.u = []
                      for (var m in l)
                        (h = l[m]),
                          (h = h(d)),
                          d !== h && ((d = h), b.u.push(m))
                    } else {
                      for (m = 0; m < b.u.length; ++m)
                        (h = l[b.u[m]]), (d = h(d))
                      h = d
                    }
                  b.cssText = h
                  b.g = b.g || b.selector
                  d = '.' + e
                  m = Ba(b.g)
                  h = 0
                  for (var xb = m.length, O = void 0; h < xb && (O = m[h]); h++)
                    m[h] = O.match(g) ? O.replace(f, d) : d + ' ' + O
                  b.selector = m.join(',')
                }
              },
              h
            )
          }
          function hb(a, b) {
            a = a.b
            var c = {}
            if (!r && a)
              for (var e = 0, d = a[e]; e < a.length; d = a[++e]) {
                var f = d,
                  g = b
                f.h = new RegExp('\\b' + f.keyframesName + '(?!\\B|-)', 'g')
                f.a = f.keyframesName + '-' + g
                f.g = f.g || f.selector
                f.selector = f.g.replace(f.keyframesName, f.a)
                c[d.keyframesName] = ib(d)
              }
            return c
          }
          function ib(a) {
            return function(b) {
              return b.replace(a.h, a.a)
            }
          }
          function jb(a, b) {
            var c = T,
              e = A(a)
            a.textContent = y(e, function(a) {
              var d = (a.cssText = a.parsedCssText)
              a.f &&
                a.f.cssText &&
                ((d = d.replace(ma, '').replace(na, '')),
                (a.cssText = cb(c, d, b)))
            })
          }
          aa.Object.defineProperties(ab.prototype, {
            a: {
              configurable: !0,
              enumerable: !0,
              get: function() {
                return 'x-scope'
              }
            }
          })
          var T = new ab()
          var U = {},
            V = window.customElements
          if (V && !r) {
            var kb = V.define
            V.define = function(a, b, c) {
              U[a] || (U[a] = za(a))
              kb.call(V, a, b, c)
            }
          }
          function lb() {
            this.cache = {}
          }
          lb.prototype.store = function(a, b, c, e) {
            var d = this.cache[a] || []
            d.push({ j: b, styleElement: c, i: e })
            100 < d.length && d.shift()
            this.cache[a] = d
          }
          function mb() {}
          var nb = new RegExp(K.a + '\\s*([^\\s]*)')
          function ob(a) {
            return (a = (a.classList && a.classList.value
              ? a.classList.value
              : a.getAttribute('class') || ''
            ).match(nb))
              ? a[1]
              : ''
          }
          function pb(a) {
            var b = F(a).getRootNode()
            return b === a || b === a.ownerDocument
              ? ''
              : (a = b.host)
              ? G(a).is
              : ''
          }
          function qb(a) {
            for (var b = 0; b < a.length; b++) {
              var c = a[b]
              if (
                c.target !== document.documentElement &&
                c.target !== document.head
              )
                for (var e = 0; e < c.addedNodes.length; e++) {
                  var d = c.addedNodes[e]
                  if (d.nodeType === Node.ELEMENT_NODE) {
                    var f = d.getRootNode(),
                      g = ob(d)
                    if (
                      g &&
                      f === d.ownerDocument &&
                      (('style' !== d.localName &&
                        'template' !== d.localName) ||
                        '' === H(d))
                    )
                      Fa(d, g)
                    else if (f instanceof ShadowRoot)
                      for (
                        f = pb(d),
                          f !== g && Ea(d, g, f),
                          d = window.ShadyDOM.nativeMethods.querySelectorAll.call(
                            d,
                            ':not(.' + K.a + ')'
                          ),
                          g = 0;
                        g < d.length;
                        g++
                      ) {
                        f = d[g]
                        var h = pb(f)
                        h && L(f, h)
                      }
                  }
                }
            }
          }
          if (
            !(r || (window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping))
          ) {
            var rb = new MutationObserver(qb),
              sb = function(a) {
                rb.observe(a, { childList: !0, subtree: !0 })
              }
            if (
              window.customElements &&
              !window.customElements.polyfillWrapFlushCallback
            )
              sb(document)
            else {
              var tb = function() {
                sb(document.body)
              }
              window.HTMLImports
                ? window.HTMLImports.whenReady(tb)
                : requestAnimationFrame(function() {
                    if ('loading' === document.readyState) {
                      var a = function() {
                        tb()
                        document.removeEventListener('readystatechange', a)
                      }
                      document.addEventListener('readystatechange', a)
                    } else tb()
                  })
            }
            mb = function() {
              qb(rb.takeRecords())
            }
          }
          var ub = mb
          var W = {}
          var vb = Promise.resolve()
          function wb(a) {
            if ((a = W[a]))
              (a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0),
                (a._applyShimValidatingVersion =
                  a._applyShimValidatingVersion || 0),
                (a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1)
          }
          function yb(a) {
            return a._applyShimCurrentVersion === a._applyShimNextVersion
          }
          function zb(a) {
            a._applyShimValidatingVersion = a._applyShimNextVersion
            a._validating ||
              ((a._validating = !0),
              vb.then(function() {
                a._applyShimCurrentVersion = a._applyShimNextVersion
                a._validating = !1
              }))
          }
          var Ab = new lb()
          function X() {
            this.B = {}
            this.c = document.documentElement
            var a = new n()
            a.rules = []
            this.h = Ya(this.c, new N(a))
            this.v = !1
            this.b = this.a = null
          }
          k = X.prototype
          k.flush = function() {
            ub()
          }
          k.I = function(a) {
            return A(a)
          }
          k.P = function(a) {
            return y(a)
          }
          k.prepareTemplate = function(a, b, c) {
            this.prepareTemplateDom(a, b)
            this.prepareTemplateStyles(a, b, c)
          }
          k.prepareTemplateStyles = function(a, b, c) {
            if (!a._prepared) {
              r || U[b] || (U[b] = za(b))
              a._prepared = !0
              a.name = b
              a.extends = c
              W[b] = a
              var e = H(a),
                d = Ca(e)
              c = { is: b, extends: c }
              var f = []
              for (
                var g = a.content.querySelectorAll('style'), h = 0;
                h < g.length;
                h++
              ) {
                var l = g[h]
                if (l.hasAttribute('shady-unscoped')) {
                  if (!r) {
                    var m = l.textContent
                    wa.has(m) ||
                      (wa.add(m),
                      (m = l.cloneNode(!0)),
                      document.head.appendChild(m))
                    l.parentNode.removeChild(l)
                  }
                } else f.push(l.textContent), l.parentNode.removeChild(l)
              }
              f = f.join('').trim()
              Y(this)
              if (!d) {
                if ((g = !e))
                  (g = x.test(f) || w.test(f)),
                    (x.lastIndex = 0),
                    (w.lastIndex = 0)
                h = p(f)
                g && u && this.a && this.a.transformRules(h, b)
                a._styleAst = h
              }
              g = []
              u || (g = bb(a._styleAst))
              if (!g.length || u)
                (h = r ? a.content : null),
                  (b = U[b] || null),
                  (e = M(c, a._styleAst, null, e, d ? f : '')),
                  (e = e.length ? B(e, c.is, h, b) : null),
                  (a._style = e)
              a.a = g
            }
          }
          k.prepareTemplateDom = function(a, b) {
            var c = H(a)
            r ||
              'shady' === c ||
              a._domPrepared ||
              ((a._domPrepared = !0), Da(a.content, b))
          }
          function Bb(a) {
            var b = G(a),
              c = b.is
            b = b.s
            var e = U[c] || null,
              d = W[c]
            if (d) {
              c = d._styleAst
              var f = d.a
              d = H(d)
              b = new N(c, e, f, b, d)
              Ya(a, b)
              return b
            }
          }
          function Cb(a) {
            !a.b &&
              window.ShadyCSS &&
              window.ShadyCSS.CustomStyleInterface &&
              ((a.b = window.ShadyCSS.CustomStyleInterface),
              (a.b.transformCallback = function(b) {
                a.D(b)
              }),
              (a.b.validateCallback = function() {
                requestAnimationFrame(function() {
                  ;(a.b.enqueued || a.v) && a.flushCustomStyles()
                })
              }))
          }
          function Y(a) {
            !a.a &&
              window.ShadyCSS &&
              window.ShadyCSS.ApplyShim &&
              ((a.a = window.ShadyCSS.ApplyShim), (a.a.invalidCallback = wb))
            Cb(a)
          }
          k.flushCustomStyles = function() {
            Y(this)
            if (this.b) {
              var a = this.b.processStyles()
              if (this.b.enqueued && !Ca(this.h.cssBuild)) {
                if (u) {
                  if (!this.h.cssBuild)
                    for (var b = 0; b < a.length; b++) {
                      var c = this.b.getStyleForCustomStyle(a[b])
                      if (c && u && this.a) {
                        var e = A(c)
                        Y(this)
                        this.a.transformRules(e)
                        c.textContent = y(e)
                      }
                    }
                } else {
                  Db(this, this.c, this.h)
                  for (b = 0; b < a.length; b++)
                    (c = this.b.getStyleForCustomStyle(a[b])) && jb(c, this.h.l)
                  this.v && this.styleDocument()
                }
                this.b.enqueued = !1
              }
            }
          }
          k.styleElement = function(a, b) {
            var c = P(a) || Bb(a)
            if (c)
              if (
                (a !== this.c && (this.v = !0),
                b && ((c.o = c.o || {}), Object.assign(c.o, b)),
                u)
              ) {
                b = G(a).is
                if (c.o) {
                  var e = c.o,
                    d
                  for (d in e)
                    null === d
                      ? a.style.removeProperty(d)
                      : a.style.setProperty(d, e[d])
                }
                if (
                  !((!(d = W[b]) && a !== this.c) || (d && '' !== H(d))) &&
                  d &&
                  d._style &&
                  !yb(d)
                ) {
                  if (
                    yb(d) ||
                    d._applyShimValidatingVersion !== d._applyShimNextVersion
                  )
                    Y(this),
                      this.a && this.a.transformRules(d._styleAst, b),
                      (d._style.textContent = M(a, c.m)),
                      zb(d)
                  r &&
                    (b = a.shadowRoot) &&
                    (b = b.querySelector('style')) &&
                    (b.textContent = M(a, c.m))
                  c.m = d._styleAst
                }
              } else if ((this.flush(), Db(this, a, c), c.w && c.w.length)) {
                b = G(a).is
                a: {
                  if ((d = Ab.cache[b]))
                    for (e = d.length - 1; 0 <= e; e--) {
                      var f = d[e]
                      b: {
                        var g = c.w
                        for (var h = 0; h < g.length; h++) {
                          var l = g[h]
                          if (f.j[l] !== c.l[l]) {
                            g = !1
                            break b
                          }
                        }
                        g = !0
                      }
                      if (g) {
                        d = f
                        break a
                      }
                    }
                  d = void 0
                }
                g = d ? d.styleElement : null
                e = c.i
                ;(f = d && d.i) ||
                  ((f = this.B[b] = (this.B[b] || 0) + 1), (f = b + '-' + f))
                c.i = f
                f = c.i
                h = T
                h = g ? g.textContent || '' : gb(h, a, c.l, f)
                l = P(a)
                var m = l.a
                m &&
                  !r &&
                  m !== g &&
                  (m._useCount--,
                  0 >= m._useCount &&
                    m.parentNode &&
                    m.parentNode.removeChild(m))
                r
                  ? l.a
                    ? ((l.a.textContent = h), (g = l.a))
                    : h && (g = B(h, f, a.shadowRoot, l.b))
                  : g
                  ? g.parentNode ||
                    ($a && -1 < h.indexOf('@media') && (g.textContent = h),
                    ya(g, null, l.b))
                  : h && (g = B(h, f, null, l.b))
                g &&
                  ((g._useCount = g._useCount || 0),
                  l.a != g && g._useCount++,
                  (l.a = g))
                f = g
                r ||
                  ((g = c.i),
                  (l = h = a.getAttribute('class') || ''),
                  e &&
                    (l = h.replace(
                      new RegExp('\\s*x-scope\\s*' + e + '\\s*', 'g'),
                      ' '
                    )),
                  (l += (l ? ' ' : '') + 'x-scope ' + g),
                  h !== l && E(a, l))
                d || Ab.store(b, c.l, f, c.i)
              }
          }
          function Eb(a, b) {
            return (b = F(b).getRootNode().host)
              ? P(b) || Bb(b)
                ? b
                : Eb(a, b)
              : a.c
          }
          function Db(a, b, c) {
            var e = Eb(a, b),
              d = P(e),
              f = d.l
            e === a.c || f || (Db(a, e, d), (f = d.l))
            a = Object.create(f || null)
            e = fb(b, c.m, c.cssBuild)
            b = db(d.m, b).j
            Object.assign(a, e.J, b, e.L)
            b = c.o
            for (var g in b) if ((d = b[g]) || 0 === d) a[g] = d
            g = T
            b = Object.getOwnPropertyNames(a)
            for (d = 0; d < b.length; d++) (e = b[d]), (a[e] = S(g, a[e], a))
            c.l = a
          }
          k.styleDocument = function(a) {
            this.styleSubtree(this.c, a)
          }
          k.styleSubtree = function(a, b) {
            var c = a.shadowRoot
            ;(c || a === this.c) && this.styleElement(a, b)
            if ((b = c && (c.children || c.childNodes)))
              for (a = 0; a < b.length; a++) this.styleSubtree(b[a])
            else if ((a = a.children || a.childNodes))
              for (b = 0; b < a.length; b++) this.styleSubtree(a[b])
          }
          k.D = function(a) {
            var b = this,
              c = H(a)
            c !== this.h.cssBuild && (this.h.cssBuild = c)
            if (!Ca(c)) {
              var e = A(a)
              z(e, function(a) {
                if (r) Xa(a)
                else {
                  var d = K
                  a.selector = a.parsedSelector
                  Xa(a)
                  a.selector = a.g = Ia(d, a, d.c, void 0, void 0)
                }
                u && '' === c && (Y(b), b.a && b.a.transformRule(a))
              })
              u ? (a.textContent = y(e)) : this.h.m.rules.push(e)
            }
          }
          k.getComputedStyleValue = function(a, b) {
            var c
            u || (c = (P(a) || P(Eb(this, a))).l[b])
            return (c = c || window.getComputedStyle(a).getPropertyValue(b))
              ? c.trim()
              : ''
          }
          k.O = function(a, b) {
            var c = F(a).getRootNode()
            b = b ? b.split(/\s/) : []
            c = c.host && c.host.localName
            if (!c) {
              var e = a.getAttribute('class')
              if (e) {
                e = e.split(/\s/)
                for (var d = 0; d < e.length; d++)
                  if (e[d] === K.a) {
                    c = e[d + 1]
                    break
                  }
              }
            }
            c && b.push(K.a, c)
            u || ((c = P(a)) && c.i && b.push(T.a, c.i))
            E(a, b.join(' '))
          }
          k.F = function(a) {
            return P(a)
          }
          k.N = function(a, b) {
            L(a, b)
          }
          k.R = function(a, b) {
            L(a, b, !0)
          }
          k.M = function(a) {
            return pb(a)
          }
          k.H = function(a) {
            return ob(a)
          }
          X.prototype.flush = X.prototype.flush
          X.prototype.prepareTemplate = X.prototype.prepareTemplate
          X.prototype.styleElement = X.prototype.styleElement
          X.prototype.styleDocument = X.prototype.styleDocument
          X.prototype.styleSubtree = X.prototype.styleSubtree
          X.prototype.getComputedStyleValue = X.prototype.getComputedStyleValue
          X.prototype.setElementClass = X.prototype.O
          X.prototype._styleInfoForNode = X.prototype.F
          X.prototype.transformCustomStyleForDocument = X.prototype.D
          X.prototype.getStyleAst = X.prototype.I
          X.prototype.styleAstToString = X.prototype.P
          X.prototype.flushCustomStyles = X.prototype.flushCustomStyles
          X.prototype.scopeNode = X.prototype.N
          X.prototype.unscopeNode = X.prototype.R
          X.prototype.scopeForNode = X.prototype.M
          X.prototype.currentScopeForNode = X.prototype.H
          Object.defineProperties(X.prototype, {
            nativeShadow: {
              get: function() {
                return r
              }
            },
            nativeCss: {
              get: function() {
                return u
              }
            }
          })
          var Z = new X(),
            Fb,
            Gb
          window.ShadyCSS &&
            ((Fb = window.ShadyCSS.ApplyShim),
            (Gb = window.ShadyCSS.CustomStyleInterface))
          window.ShadyCSS = {
            ScopingShim: Z,
            prepareTemplate: function(a, b, c) {
              Z.flushCustomStyles()
              Z.prepareTemplate(a, b, c)
            },
            prepareTemplateDom: function(a, b) {
              Z.prepareTemplateDom(a, b)
            },
            prepareTemplateStyles: function(a, b, c) {
              Z.flushCustomStyles()
              Z.prepareTemplateStyles(a, b, c)
            },
            styleSubtree: function(a, b) {
              Z.flushCustomStyles()
              Z.styleSubtree(a, b)
            },
            styleElement: function(a) {
              Z.flushCustomStyles()
              Z.styleElement(a)
            },
            styleDocument: function(a) {
              Z.flushCustomStyles()
              Z.styleDocument(a)
            },
            flushCustomStyles: function() {
              Z.flushCustomStyles()
            },
            getComputedStyleValue: function(a, b) {
              return Z.getComputedStyleValue(a, b)
            },
            nativeCss: u,
            nativeShadow: r,
            cssBuild: v
          }
          Fb && (window.ShadyCSS.ApplyShim = Fb)
          Gb && (window.ShadyCSS.CustomStyleInterface = Gb)
        }.call(this))
      },
      {}
    ],
    '../node_modules/@webcomponents/custom-elements/custom-elements.min.js': [
      function(require, module, exports) {
        ;(function() {
          'use strict'
          var aa = new Set(
            'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'.split(
              ' '
            )
          )
          function g(b) {
            var a = aa.has(b)
            b = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b)
            return !a && b
          }
          function l(b) {
            var a = b.isConnected
            if (void 0 !== a) return a
            for (; b && !(b.__CE_isImportDocument || b instanceof Document); )
              b =
                b.parentNode ||
                (window.ShadowRoot && b instanceof ShadowRoot ? b.host : void 0)
            return !(!b || !(b.__CE_isImportDocument || b instanceof Document))
          }
          function p(b, a) {
            for (; a && a !== b && !a.nextSibling; ) a = a.parentNode
            return a && a !== b ? a.nextSibling : null
          }
          function q(b, a, d) {
            d = void 0 === d ? new Set() : d
            for (var c = b; c; ) {
              if (c.nodeType === Node.ELEMENT_NODE) {
                var e = c
                a(e)
                var f = e.localName
                if ('link' === f && 'import' === e.getAttribute('rel')) {
                  c = e.import
                  if (c instanceof Node && !d.has(c))
                    for (d.add(c), c = c.firstChild; c; c = c.nextSibling)
                      q(c, a, d)
                  c = p(b, e)
                  continue
                } else if ('template' === f) {
                  c = p(b, e)
                  continue
                }
                if ((e = e.__CE_shadowRoot))
                  for (e = e.firstChild; e; e = e.nextSibling) q(e, a, d)
              }
              c = c.firstChild ? c.firstChild : p(b, c)
            }
          }
          function t(b, a, d) {
            b[a] = d
          }
          function u() {
            this.a = new Map()
            this.f = new Map()
            this.c = []
            this.b = !1
          }
          function ba(b, a, d) {
            b.a.set(a, d)
            b.f.set(d.constructorFunction, d)
          }
          function v(b, a) {
            b.b = !0
            b.c.push(a)
          }
          function w(b, a) {
            b.b &&
              q(a, function(a) {
                return x(b, a)
              })
          }
          function x(b, a) {
            if (b.b && !a.__CE_patched) {
              a.__CE_patched = !0
              for (var d = 0; d < b.c.length; d++) b.c[d](a)
            }
          }
          function y(b, a) {
            var d = []
            q(a, function(a) {
              return d.push(a)
            })
            for (a = 0; a < d.length; a++) {
              var c = d[a]
              1 === c.__CE_state ? b.connectedCallback(c) : z(b, c)
            }
          }
          function A(b, a) {
            var d = []
            q(a, function(a) {
              return d.push(a)
            })
            for (a = 0; a < d.length; a++) {
              var c = d[a]
              1 === c.__CE_state && b.disconnectedCallback(c)
            }
          }
          function B(b, a, d) {
            d = void 0 === d ? {} : d
            var c = d.u || new Set(),
              e =
                d.h ||
                function(a) {
                  return z(b, a)
                },
              f = []
            q(
              a,
              function(a) {
                if (
                  'link' === a.localName &&
                  'import' === a.getAttribute('rel')
                ) {
                  var d = a.import
                  d instanceof Node &&
                    ((d.__CE_isImportDocument = !0), (d.__CE_hasRegistry = !0))
                  d && 'complete' === d.readyState
                    ? (d.__CE_documentLoadHandled = !0)
                    : a.addEventListener('load', function() {
                        var d = a.import
                        if (!d.__CE_documentLoadHandled) {
                          d.__CE_documentLoadHandled = !0
                          var f = new Set(c)
                          f.delete(d)
                          B(b, d, { u: f, h: e })
                        }
                      })
                } else f.push(a)
              },
              c
            )
            if (b.b) for (a = 0; a < f.length; a++) x(b, f[a])
            for (a = 0; a < f.length; a++) e(f[a])
          }
          function z(b, a) {
            if (void 0 === a.__CE_state) {
              var d = a.ownerDocument
              if (
                d.defaultView ||
                (d.__CE_isImportDocument && d.__CE_hasRegistry)
              )
                if ((d = b.a.get(a.localName))) {
                  d.constructionStack.push(a)
                  var c = d.constructorFunction
                  try {
                    try {
                      if (new c() !== a)
                        throw Error(
                          'The custom element constructor did not produce the element being upgraded.'
                        )
                    } finally {
                      d.constructionStack.pop()
                    }
                  } catch (m) {
                    throw ((a.__CE_state = 2), m)
                  }
                  a.__CE_state = 1
                  a.__CE_definition = d
                  if (d.attributeChangedCallback)
                    for (d = d.observedAttributes, c = 0; c < d.length; c++) {
                      var e = d[c],
                        f = a.getAttribute(e)
                      null !== f &&
                        b.attributeChangedCallback(a, e, null, f, null)
                    }
                  l(a) && b.connectedCallback(a)
                }
            }
          }
          u.prototype.connectedCallback = function(b) {
            var a = b.__CE_definition
            a.connectedCallback && a.connectedCallback.call(b)
          }
          u.prototype.disconnectedCallback = function(b) {
            var a = b.__CE_definition
            a.disconnectedCallback && a.disconnectedCallback.call(b)
          }
          u.prototype.attributeChangedCallback = function(b, a, d, c, e) {
            var f = b.__CE_definition
            f.attributeChangedCallback &&
              -1 < f.observedAttributes.indexOf(a) &&
              f.attributeChangedCallback.call(b, a, d, c, e)
          }
          function C(b) {
            var a = document
            this.c = b
            this.a = a
            this.b = void 0
            B(this.c, this.a)
            'loading' === this.a.readyState &&
              ((this.b = new MutationObserver(this.f.bind(this))),
              this.b.observe(this.a, { childList: !0, subtree: !0 }))
          }
          function D(b) {
            b.b && b.b.disconnect()
          }
          C.prototype.f = function(b) {
            var a = this.a.readyState
            ;('interactive' !== a && 'complete' !== a) || D(this)
            for (a = 0; a < b.length; a++)
              for (var d = b[a].addedNodes, c = 0; c < d.length; c++)
                B(this.c, d[c])
          }
          function ca() {
            var b = this
            this.b = this.a = void 0
            this.c = new Promise(function(a) {
              b.b = a
              b.a && a(b.a)
            })
          }
          function E(b) {
            if (b.a) throw Error('Already resolved.')
            b.a = void 0
            b.b && b.b(void 0)
          }
          function F(b) {
            this.c = !1
            this.a = b
            this.j = new Map()
            this.f = function(a) {
              return a()
            }
            this.b = !1
            this.i = []
            this.o = new C(b)
          }
          F.prototype.l = function(b, a) {
            var d = this
            if (!(a instanceof Function))
              throw new TypeError(
                'Custom element constructors must be functions.'
              )
            if (!g(b))
              throw new SyntaxError(
                "The element name '" + b + "' is not valid."
              )
            if (this.a.a.get(b))
              throw Error(
                "A custom element with name '" +
                  b +
                  "' has already been defined."
              )
            if (this.c)
              throw Error('A custom element is already being defined.')
            this.c = !0
            try {
              var c = function(a) {
                  var b = e[a]
                  if (void 0 !== b && !(b instanceof Function))
                    throw Error("The '" + a + "' callback must be a function.")
                  return b
                },
                e = a.prototype
              if (!(e instanceof Object))
                throw new TypeError(
                  "The custom element constructor's prototype is not an object."
                )
              var f = c('connectedCallback')
              var m = c('disconnectedCallback')
              var k = c('adoptedCallback')
              var h = c('attributeChangedCallback')
              var n = a.observedAttributes || []
            } catch (r) {
              return
            } finally {
              this.c = !1
            }
            a = {
              localName: b,
              constructorFunction: a,
              connectedCallback: f,
              disconnectedCallback: m,
              adoptedCallback: k,
              attributeChangedCallback: h,
              observedAttributes: n,
              constructionStack: []
            }
            ba(this.a, b, a)
            this.i.push(a)
            this.b ||
              ((this.b = !0),
              this.f(function() {
                return da(d)
              }))
          }
          F.prototype.h = function(b) {
            B(this.a, b)
          }
          function da(b) {
            if (!1 !== b.b) {
              b.b = !1
              for (var a = b.i, d = [], c = new Map(), e = 0; e < a.length; e++)
                c.set(a[e].localName, [])
              B(b.a, document, {
                h: function(a) {
                  if (void 0 === a.__CE_state) {
                    var e = a.localName,
                      f = c.get(e)
                    f ? f.push(a) : b.a.a.get(e) && d.push(a)
                  }
                }
              })
              for (e = 0; e < d.length; e++) z(b.a, d[e])
              for (; 0 < a.length; ) {
                var f = a.shift()
                e = f.localName
                f = c.get(f.localName)
                for (var m = 0; m < f.length; m++) z(b.a, f[m])
                ;(e = b.j.get(e)) && E(e)
              }
            }
          }
          F.prototype.get = function(b) {
            if ((b = this.a.a.get(b))) return b.constructorFunction
          }
          F.prototype.m = function(b) {
            if (!g(b))
              return Promise.reject(
                new SyntaxError(
                  "'" + b + "' is not a valid custom element name."
                )
              )
            var a = this.j.get(b)
            if (a) return a.c
            a = new ca()
            this.j.set(b, a)
            this.a.a.get(b) &&
              !this.i.some(function(a) {
                return a.localName === b
              }) &&
              E(a)
            return a.c
          }
          F.prototype.s = function(b) {
            D(this.o)
            var a = this.f
            this.f = function(d) {
              return b(function() {
                return a(d)
              })
            }
          }
          window.CustomElementRegistry = F
          F.prototype.define = F.prototype.l
          F.prototype.upgrade = F.prototype.h
          F.prototype.get = F.prototype.get
          F.prototype.whenDefined = F.prototype.m
          F.prototype.polyfillWrapFlushCallback = F.prototype.s
          var G = window.Document.prototype.createElement,
            H = window.Document.prototype.createElementNS,
            ea = window.Document.prototype.importNode,
            fa = window.Document.prototype.prepend,
            ha = window.Document.prototype.append,
            ia = window.DocumentFragment.prototype.prepend,
            ja = window.DocumentFragment.prototype.append,
            I = window.Node.prototype.cloneNode,
            J = window.Node.prototype.appendChild,
            K = window.Node.prototype.insertBefore,
            L = window.Node.prototype.removeChild,
            M = window.Node.prototype.replaceChild,
            N = Object.getOwnPropertyDescriptor(
              window.Node.prototype,
              'textContent'
            ),
            O = window.Element.prototype.attachShadow,
            P = Object.getOwnPropertyDescriptor(
              window.Element.prototype,
              'innerHTML'
            ),
            Q = window.Element.prototype.getAttribute,
            R = window.Element.prototype.setAttribute,
            S = window.Element.prototype.removeAttribute,
            T = window.Element.prototype.getAttributeNS,
            U = window.Element.prototype.setAttributeNS,
            ka = window.Element.prototype.removeAttributeNS,
            la = window.Element.prototype.insertAdjacentElement,
            ma = window.Element.prototype.insertAdjacentHTML,
            na = window.Element.prototype.prepend,
            oa = window.Element.prototype.append,
            V = window.Element.prototype.before,
            pa = window.Element.prototype.after,
            qa = window.Element.prototype.replaceWith,
            ra = window.Element.prototype.remove,
            sa = window.HTMLElement,
            W = Object.getOwnPropertyDescriptor(
              window.HTMLElement.prototype,
              'innerHTML'
            ),
            ta = window.HTMLElement.prototype.insertAdjacentElement,
            ua = window.HTMLElement.prototype.insertAdjacentHTML
          var va = new function() {}()
          function wa() {
            var b = X
            window.HTMLElement = (function() {
              function a() {
                var a = this.constructor,
                  c = b.f.get(a)
                if (!c)
                  throw Error(
                    'The custom element being constructed was not registered with `customElements`.'
                  )
                var e = c.constructionStack
                if (0 === e.length)
                  return (
                    (e = G.call(document, c.localName)),
                    Object.setPrototypeOf(e, a.prototype),
                    (e.__CE_state = 1),
                    (e.__CE_definition = c),
                    x(b, e),
                    e
                  )
                c = e.length - 1
                var f = e[c]
                if (f === va)
                  throw Error(
                    'The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.'
                  )
                e[c] = va
                Object.setPrototypeOf(f, a.prototype)
                x(b, f)
                return f
              }
              a.prototype = sa.prototype
              Object.defineProperty(a.prototype, 'constructor', {
                writable: !0,
                configurable: !0,
                enumerable: !1,
                value: a
              })
              return a
            })()
          }
          function Y(b, a, d) {
            function c(a) {
              return function(d) {
                for (var e = [], c = 0; c < arguments.length; ++c)
                  e[c] = arguments[c]
                c = []
                for (var f = [], n = 0; n < e.length; n++) {
                  var r = e[n]
                  r instanceof Element && l(r) && f.push(r)
                  if (r instanceof DocumentFragment)
                    for (r = r.firstChild; r; r = r.nextSibling) c.push(r)
                  else c.push(r)
                }
                a.apply(this, e)
                for (e = 0; e < f.length; e++) A(b, f[e])
                if (l(this))
                  for (e = 0; e < c.length; e++)
                    (f = c[e]), f instanceof Element && y(b, f)
              }
            }
            void 0 !== d.g && (a.prepend = c(d.g))
            void 0 !== d.append && (a.append = c(d.append))
          }
          function xa() {
            var b = X
            t(Document.prototype, 'createElement', function(a) {
              if (this.__CE_hasRegistry) {
                var d = b.a.get(a)
                if (d) return new d.constructorFunction()
              }
              a = G.call(this, a)
              x(b, a)
              return a
            })
            t(Document.prototype, 'importNode', function(a, d) {
              a = ea.call(this, a, !!d)
              this.__CE_hasRegistry ? B(b, a) : w(b, a)
              return a
            })
            t(Document.prototype, 'createElementNS', function(a, d) {
              if (
                this.__CE_hasRegistry &&
                (null === a || 'http://www.w3.org/1999/xhtml' === a)
              ) {
                var c = b.a.get(d)
                if (c) return new c.constructorFunction()
              }
              a = H.call(this, a, d)
              x(b, a)
              return a
            })
            Y(b, Document.prototype, { g: fa, append: ha })
          }
          function ya() {
            function b(b, c) {
              Object.defineProperty(b, 'textContent', {
                enumerable: c.enumerable,
                configurable: !0,
                get: c.get,
                set: function(b) {
                  if (this.nodeType === Node.TEXT_NODE) c.set.call(this, b)
                  else {
                    var d = void 0
                    if (this.firstChild) {
                      var e = this.childNodes,
                        k = e.length
                      if (0 < k && l(this)) {
                        d = Array(k)
                        for (var h = 0; h < k; h++) d[h] = e[h]
                      }
                    }
                    c.set.call(this, b)
                    if (d) for (b = 0; b < d.length; b++) A(a, d[b])
                  }
                }
              })
            }
            var a = X
            t(Node.prototype, 'insertBefore', function(b, c) {
              if (b instanceof DocumentFragment) {
                var e = Array.prototype.slice.apply(b.childNodes)
                b = K.call(this, b, c)
                if (l(this)) for (c = 0; c < e.length; c++) y(a, e[c])
                return b
              }
              e = l(b)
              c = K.call(this, b, c)
              e && A(a, b)
              l(this) && y(a, b)
              return c
            })
            t(Node.prototype, 'appendChild', function(b) {
              if (b instanceof DocumentFragment) {
                var c = Array.prototype.slice.apply(b.childNodes)
                b = J.call(this, b)
                if (l(this)) for (var e = 0; e < c.length; e++) y(a, c[e])
                return b
              }
              c = l(b)
              e = J.call(this, b)
              c && A(a, b)
              l(this) && y(a, b)
              return e
            })
            t(Node.prototype, 'cloneNode', function(b) {
              b = I.call(this, !!b)
              this.ownerDocument.__CE_hasRegistry ? B(a, b) : w(a, b)
              return b
            })
            t(Node.prototype, 'removeChild', function(b) {
              var c = l(b),
                e = L.call(this, b)
              c && A(a, b)
              return e
            })
            t(Node.prototype, 'replaceChild', function(b, c) {
              if (b instanceof DocumentFragment) {
                var e = Array.prototype.slice.apply(b.childNodes)
                b = M.call(this, b, c)
                if (l(this)) for (A(a, c), c = 0; c < e.length; c++) y(a, e[c])
                return b
              }
              e = l(b)
              var f = M.call(this, b, c),
                d = l(this)
              d && A(a, c)
              e && A(a, b)
              d && y(a, b)
              return f
            })
            N && N.get
              ? b(Node.prototype, N)
              : v(a, function(a) {
                  b(a, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                      for (var b = [], a = 0; a < this.childNodes.length; a++)
                        b.push(this.childNodes[a].textContent)
                      return b.join('')
                    },
                    set: function(b) {
                      for (; this.firstChild; ) L.call(this, this.firstChild)
                      J.call(this, document.createTextNode(b))
                    }
                  })
                })
          }
          function za(b) {
            function a(a) {
              return function(e) {
                for (var c = [], d = 0; d < arguments.length; ++d)
                  c[d] = arguments[d]
                d = []
                for (var k = [], h = 0; h < c.length; h++) {
                  var n = c[h]
                  n instanceof Element && l(n) && k.push(n)
                  if (n instanceof DocumentFragment)
                    for (n = n.firstChild; n; n = n.nextSibling) d.push(n)
                  else d.push(n)
                }
                a.apply(this, c)
                for (c = 0; c < k.length; c++) A(b, k[c])
                if (l(this))
                  for (c = 0; c < d.length; c++)
                    (k = d[c]), k instanceof Element && y(b, k)
              }
            }
            var d = Element.prototype
            void 0 !== V && (d.before = a(V))
            void 0 !== V && (d.after = a(pa))
            void 0 !== qa &&
              t(d, 'replaceWith', function(a) {
                for (var c = [], d = 0; d < arguments.length; ++d)
                  c[d] = arguments[d]
                d = []
                for (var m = [], k = 0; k < c.length; k++) {
                  var h = c[k]
                  h instanceof Element && l(h) && m.push(h)
                  if (h instanceof DocumentFragment)
                    for (h = h.firstChild; h; h = h.nextSibling) d.push(h)
                  else d.push(h)
                }
                k = l(this)
                qa.apply(this, c)
                for (c = 0; c < m.length; c++) A(b, m[c])
                if (k)
                  for (A(b, this), c = 0; c < d.length; c++)
                    (m = d[c]), m instanceof Element && y(b, m)
              })
            void 0 !== ra &&
              t(d, 'remove', function() {
                var a = l(this)
                ra.call(this)
                a && A(b, this)
              })
          }
          function Aa() {
            function b(a, b) {
              Object.defineProperty(a, 'innerHTML', {
                enumerable: b.enumerable,
                configurable: !0,
                get: b.get,
                set: function(a) {
                  var d = this,
                    e = void 0
                  l(this) &&
                    ((e = []),
                    q(this, function(a) {
                      a !== d && e.push(a)
                    }))
                  b.set.call(this, a)
                  if (e)
                    for (var f = 0; f < e.length; f++) {
                      var m = e[f]
                      1 === m.__CE_state && c.disconnectedCallback(m)
                    }
                  this.ownerDocument.__CE_hasRegistry ? B(c, this) : w(c, this)
                  return a
                }
              })
            }
            function a(a, b) {
              t(a, 'insertAdjacentElement', function(a, d) {
                var e = l(d)
                a = b.call(this, a, d)
                e && A(c, d)
                l(a) && y(c, d)
                return a
              })
            }
            function d(a, b) {
              function d(a, b) {
                for (var d = []; a !== b; a = a.nextSibling) d.push(a)
                for (b = 0; b < d.length; b++) B(c, d[b])
              }
              t(a, 'insertAdjacentHTML', function(a, c) {
                a = a.toLowerCase()
                if ('beforebegin' === a) {
                  var e = this.previousSibling
                  b.call(this, a, c)
                  d(e || this.parentNode.firstChild, this)
                } else if ('afterbegin' === a)
                  (e = this.firstChild),
                    b.call(this, a, c),
                    d(this.firstChild, e)
                else if ('beforeend' === a)
                  (e = this.lastChild),
                    b.call(this, a, c),
                    d(e || this.firstChild, null)
                else if ('afterend' === a)
                  (e = this.nextSibling),
                    b.call(this, a, c),
                    d(this.nextSibling, e)
                else
                  throw new SyntaxError(
                    'The value provided (' +
                      String(a) +
                      ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
                  )
              })
            }
            var c = X
            O &&
              t(Element.prototype, 'attachShadow', function(a) {
                return (this.__CE_shadowRoot = a = O.call(this, a))
              })
            P && P.get
              ? b(Element.prototype, P)
              : W && W.get
              ? b(HTMLElement.prototype, W)
              : v(c, function(a) {
                  b(a, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                      return I.call(this, !0).innerHTML
                    },
                    set: function(a) {
                      var b = 'template' === this.localName,
                        c = b ? this.content : this,
                        d = H.call(document, this.namespaceURI, this.localName)
                      for (d.innerHTML = a; 0 < c.childNodes.length; )
                        L.call(c, c.childNodes[0])
                      for (a = b ? d.content : d; 0 < a.childNodes.length; )
                        J.call(c, a.childNodes[0])
                    }
                  })
                })
            t(Element.prototype, 'setAttribute', function(a, b) {
              if (1 !== this.__CE_state) return R.call(this, a, b)
              var d = Q.call(this, a)
              R.call(this, a, b)
              b = Q.call(this, a)
              c.attributeChangedCallback(this, a, d, b, null)
            })
            t(Element.prototype, 'setAttributeNS', function(a, b, d) {
              if (1 !== this.__CE_state) return U.call(this, a, b, d)
              var e = T.call(this, a, b)
              U.call(this, a, b, d)
              d = T.call(this, a, b)
              c.attributeChangedCallback(this, b, e, d, a)
            })
            t(Element.prototype, 'removeAttribute', function(a) {
              if (1 !== this.__CE_state) return S.call(this, a)
              var b = Q.call(this, a)
              S.call(this, a)
              null !== b && c.attributeChangedCallback(this, a, b, null, null)
            })
            t(Element.prototype, 'removeAttributeNS', function(a, b) {
              if (1 !== this.__CE_state) return ka.call(this, a, b)
              var d = T.call(this, a, b)
              ka.call(this, a, b)
              var e = T.call(this, a, b)
              d !== e && c.attributeChangedCallback(this, b, d, e, a)
            })
            ta
              ? a(HTMLElement.prototype, ta)
              : la
              ? a(Element.prototype, la)
              : console.warn(
                  'Custom Elements: `Element#insertAdjacentElement` was not patched.'
                )
            ua
              ? d(HTMLElement.prototype, ua)
              : ma
              ? d(Element.prototype, ma)
              : console.warn(
                  'Custom Elements: `Element#insertAdjacentHTML` was not patched.'
                )
            Y(c, Element.prototype, { g: na, append: oa })
            za(c)
          } /*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
          var Z = window.customElements
          if (
            !Z ||
            Z.forcePolyfill ||
            'function' != typeof Z.define ||
            'function' != typeof Z.get
          ) {
            var X = new u()
            wa()
            xa()
            Y(X, DocumentFragment.prototype, { g: ia, append: ja })
            ya()
            Aa()
            document.__CE_hasRegistry = !0
            var customElements = new F(X)
            Object.defineProperty(window, 'customElements', {
              configurable: !0,
              enumerable: !0,
              value: customElements
            })
          }
        }.call(self))
      },
      {}
    ],
    '../node_modules/hybrids/shim.js': [
      function(require, module, exports) {
        /* eslint-disable global-require */

        // Web APIs polyfills for IE11
        if ('ActiveXObject' in window) {
          require('core-js/fn/array/find')
          require('core-js/es6/promise')
        }

        require('@webcomponents/webcomponents-platform')
        require('@webcomponents/template')

        if (!document.createElement('div').attachShadow) {
          require('@webcomponents/shadydom')
          require('@webcomponents/shadycss/scoping-shim.min')
        }

        if (typeof customElements !== 'object') {
          require('@webcomponents/custom-elements')
        }
      },
      {
        'core-js/fn/array/find': '../node_modules/core-js/fn/array/find.js',
        'core-js/es6/promise': '../node_modules/core-js/es6/promise.js',
        '@webcomponents/webcomponents-platform':
          '../node_modules/@webcomponents/webcomponents-platform/webcomponents-platform.js',
        '@webcomponents/template':
          '../node_modules/@webcomponents/template/template.js',
        '@webcomponents/shadydom':
          '../node_modules/@webcomponents/shadydom/shadydom.min.js',
        '@webcomponents/shadycss/scoping-shim.min':
          '../node_modules/@webcomponents/shadycss/scoping-shim.min.js',
        '@webcomponents/custom-elements':
          '../node_modules/@webcomponents/custom-elements/custom-elements.min.js'
      }
    ],
    '../node_modules/hybrids/esm/utils.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.camelToDash = camelToDash
        exports.pascalToDash = pascalToDash
        exports.dispatch = dispatch
        exports.shadyCSS = shadyCSS
        exports.stringifyElement = stringifyElement
        exports.IS_IE = void 0

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            var ownKeys = Object.keys(source)

            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable
                })
              )
            }

            ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key])
            })
          }

          return target
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            })
          } else {
            obj[key] = value
          }

          return obj
        }

        function camelToDash(str) {
          return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
        }

        function pascalToDash(str) {
          str = str[0].toLowerCase() + str.slice(1)
          return camelToDash(str)
        }

        function dispatch(host, eventType) {
          var options =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {}
          return host.dispatchEvent(
            new CustomEvent(
              eventType,
              _objectSpread(
                {
                  bubbles: false
                },
                options
              )
            )
          )
        }

        function shadyCSS(fn, fallback) {
          var shady = window.ShadyCSS
          /* istanbul ignore next */

          if (shady && !shady.nativeShadow) {
            return fn(shady)
          }

          return fallback
        }

        function stringifyElement(element) {
          var tagName = String(element.tagName).toLowerCase()
          return '<'.concat(tagName, '>')
        }

        var IS_IE = 'ActiveXObject' in window
        exports.IS_IE = IS_IE
      },
      {}
    ],
    '../node_modules/hybrids/esm/property.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = property

        var _utils = require('./utils')

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }

          return _typeof(obj)
        }

        var defaultTransform = function defaultTransform(v) {
          return v
        }

        var objectTransform = function objectTransform(value) {
          if (_typeof(value) !== 'object') {
            throw TypeError(
              '[property] Argument is not an object: '.concat(
                typeof v === 'undefined' ? 'undefined' : _typeof(v)
              )
            )
          }

          return value && Object.freeze(value)
        }

        function property(value, connect) {
          var type = _typeof(value)

          var transform = defaultTransform

          switch (type) {
            case 'string':
              transform = String
              break

            case 'number':
              transform = Number
              break

            case 'boolean':
              transform = Boolean
              break

            case 'function':
              transform = value
              value = transform()
              break

            case 'object':
              if (value) Object.freeze(value)
              transform = objectTransform
              break

            default:
              break
          }

          return {
            get: function get(host) {
              var val =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : value
              return val
            },
            set: function set(host, val, oldValue) {
              return transform(val, oldValue)
            },
            connect:
              type !== 'object' && type !== 'undefined'
                ? function(host, key, invalidate) {
                    if (host[key] === value) {
                      var attrName = (0, _utils.camelToDash)(key)

                      if (host.hasAttribute(attrName)) {
                        var attrValue = host.getAttribute(attrName)
                        host[key] = attrValue !== '' ? attrValue : true
                      }
                    }

                    return (
                      connect &&
                      connect(
                        host,
                        key,
                        invalidate
                      )
                    )
                  }
                : connect
          }
        }
      },
      { './utils': '../node_modules/hybrids/esm/utils.js' }
    ],
    '../node_modules/hybrids/esm/render.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.update = update
        exports.default = render

        var _utils = require('./utils')

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            var ownKeys = Object.keys(source)

            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable
                })
              )
            }

            ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key])
            })
          }

          return target
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            })
          } else {
            obj[key] = value
          }

          return obj
        }

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }

          return _typeof(obj)
        }

        var map = new WeakMap()
        var cache = new WeakMap()
        var FPS_THRESHOLD = 1000 / 60 // 60 FPS ~ 16,67ms time window

        var queue = []

        function update() {
          var index =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0
          var startTime =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 0

          if (startTime && performance.now() - startTime > FPS_THRESHOLD) {
            requestAnimationFrame(function() {
              return update(index)
            })
          } else {
            var target = queue[index]
            var nextTime = performance.now()

            if (!target) {
              ;(0, _utils.shadyCSS)(function(shady) {
                return queue.forEach(function(t) {
                  return shady.styleSubtree(t)
                })
              })
              queue = []
            } else {
              if (map.has(target)) {
                var key = map.get(target)
                var prevUpdate = cache.get(target)

                try {
                  var nextUpdate = target[key]

                  if (nextUpdate !== prevUpdate) {
                    cache.set(target, nextUpdate)
                    nextUpdate()
                    if (!prevUpdate)
                      (0, _utils.shadyCSS)(function(shady) {
                        return shady.styleElement(target)
                      })
                  }
                } catch (e) {
                  update(index + 1, nextTime)
                  throw e
                }
              }

              update(index + 1, nextTime)
            }
          }
        }

        function addToQueue(event) {
          var target = event.composedPath()[0]

          if (target === event.currentTarget) {
            if (!queue[0]) {
              requestAnimationFrame(function() {
                return update()
              })
            }

            if (queue.indexOf(target) === -1) {
              queue.push(target)
            }
          }
        }

        function render(_get) {
          var customOptions =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {}

          if (typeof _get !== 'function') {
            throw TypeError(
              '[render] The first argument must be a function: '.concat(
                _typeof(_get)
              )
            )
          }

          var options = _objectSpread(
            {
              shadowRoot: true
            },
            customOptions
          )

          return {
            get: function get(host) {
              var fn = _get(host)

              return function() {
                return fn(host, options.shadowRoot ? host.shadowRoot : host)
              }
            },
            connect: function connect(host, key) {
              if (map.has(host)) {
                throw Error(
                  "[render] Render factory already used in '".concat(
                    map.get(host),
                    "' key"
                  )
                )
              }

              if (options.shadowRoot && !host.shadowRoot) {
                var shadowRootInit = {
                  mode: 'open'
                }

                if (_typeof(options.shadowRoot) === 'object') {
                  Object.assign(shadowRootInit, options.shadowRoot)
                }

                host.attachShadow(shadowRootInit)
              }

              host.addEventListener('@invalidate', addToQueue)
              map.set(host, key)
              return function() {
                host.removeEventListener('@invalidate', addToQueue)
                map.delete(host)
              }
            }
          }
        }
      },
      { './utils': '../node_modules/hybrids/esm/utils.js' }
    ],
    '../node_modules/hybrids/esm/cache.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.getEntry = getEntry
        exports.get = get
        exports.set = set
        exports.invalidate = invalidate

        var _utils = require('./utils')

        var entries = new WeakMap()

        function getEntry(target, key) {
          var targetMap = entries.get(target)

          if (!targetMap) {
            targetMap = new Map()
            entries.set(target, targetMap)
          }

          var entry = targetMap.get(key)

          if (!entry) {
            entry = {
              target: target,
              key: key,
              value: undefined,
              deps: new Set(),
              state: 1,
              checksum: 0
            }
            targetMap.set(key, entry)
          }

          return entry
        }

        function calculateChecksum(_ref) {
          var state = _ref.state,
            deps = _ref.deps
          var checksum = state
          deps.forEach(function(entry) {
            // eslint-disable-next-line no-unused-expressions
            entry.target[entry.key]
            checksum += entry.state
          })
          return checksum
        }

        var context = null

        function get(target, key, getter) {
          var entry = getEntry(target, key)

          if (context === entry) {
            context = null
            throw Error(
              "[cache] Circular '"
                .concat(key, "' get invocation in '")
                .concat((0, _utils.stringifyElement)(target), "'")
            )
          }

          if (context) {
            context.deps.add(entry)
          }

          var parentContext = context
          context = entry

          if (entry.checksum && entry.checksum === calculateChecksum(entry)) {
            context = parentContext
            return entry.value
          }

          entry.deps.clear()

          try {
            var nextValue = getter(target, entry.value)

            if (nextValue !== entry.value) {
              entry.state += 1
              entry.value = nextValue
            }

            entry.checksum = calculateChecksum(entry)
            context = parentContext
          } catch (e) {
            context = null
            throw e
          }

          return entry.value
        }

        function set(target, key, setter, value, callback) {
          if (context) {
            context = null
            throw Error(
              "[cache] Try to set '"
                .concat(key, "' of '")
                .concat((0, _utils.stringifyElement)(target), "' in get call")
            )
          }

          var entry = getEntry(target, key)
          var newValue = setter(target, value, entry.value)

          if (newValue !== entry.value) {
            entry.state += 1
            entry.value = newValue
            callback()
          }
        }

        function invalidate(target, key, clearValue) {
          if (context) {
            context = null
            throw Error(
              "[cache] Try to invalidate '"
                .concat(key, "' in '")
                .concat((0, _utils.stringifyElement)(target), "' get call")
            )
          }

          var entry = getEntry(target, key)
          entry.checksum = 0

          if (clearValue) {
            entry.value = undefined
          }
        }
      },
      { './utils': '../node_modules/hybrids/esm/utils.js' }
    ],
    '../node_modules/hybrids/esm/define.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = define

        var _property = _interopRequireDefault(require('./property'))

        var _render = _interopRequireDefault(require('./render'))

        var cache = _interopRequireWildcard(require('./cache'))

        var _utils = require('./utils')

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj
          } else {
            var newObj = {}
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                  var desc =
                    Object.defineProperty && Object.getOwnPropertyDescriptor
                      ? Object.getOwnPropertyDescriptor(obj, key)
                      : {}
                  if (desc.get || desc.set) {
                    Object.defineProperty(newObj, key, desc)
                  } else {
                    newObj[key] = obj[key]
                  }
                }
              }
            }
            newObj.default = obj
            return newObj
          }
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === 'object' || typeof call === 'function')
          ) {
            return call
          }

          return _assertThisInitialized(self)
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            )
          }

          return self
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function'
            )
          }

          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }
          )
          if (superClass) _setPrototypeOf(subClass, superClass)
        }

        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === 'function' ? new Map() : undefined

          _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class

            if (typeof Class !== 'function') {
              throw new TypeError(
                'Super expression must either be null or a function'
              )
            }

            if (typeof _cache !== 'undefined') {
              if (_cache.has(Class)) return _cache.get(Class)

              _cache.set(Class, Wrapper)
            }

            function Wrapper() {
              return _construct(
                Class,
                arguments,
                _getPrototypeOf(this).constructor
              )
            }

            Wrapper.prototype = Object.create(Class.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
              }
            })
            return _setPrototypeOf(Wrapper, Class)
          }

          return _wrapNativeSuper(Class)
        }

        function isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return false
          if (Reflect.construct.sham) return false
          if (typeof Proxy === 'function') return true

          try {
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            )
            return true
          } catch (e) {
            return false
          }
        }

        function _construct(Parent, args, Class) {
          if (isNativeReflectConstruct()) {
            _construct = Reflect.construct
          } else {
            _construct = function _construct(Parent, args, Class) {
              var a = [null]
              a.push.apply(a, args)
              var Constructor = Function.bind.apply(Parent, a)
              var instance = new Constructor()
              if (Class) _setPrototypeOf(instance, Class.prototype)
              return instance
            }
          }

          return _construct.apply(null, arguments)
        }

        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf('[native code]') !== -1
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(o, p) {
              o.__proto__ = p
              return o
            }

          return _setPrototypeOf(o, p)
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o)
              }
          return _getPrototypeOf(o)
        }

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }

          return _typeof(obj)
        }

        function dispatchInvalidate(host) {
          ;(0, _utils.dispatch)(host, '@invalidate', {
            bubbles: true,
            composed: true
          })
        }

        var defaultGet = function defaultGet(host, value) {
          return value
        }

        function compile(Hybrid, hybrids) {
          Hybrid.hybrids = hybrids
          Hybrid.connects = []
          Object.keys(hybrids).forEach(function(key) {
            var config = hybrids[key]

            var type = _typeof(config)

            if (type === 'function') {
              config =
                key === 'render'
                  ? (0, _render.default)(config)
                  : {
                      get: config
                    }
            } else if (
              config === null ||
              type !== 'object' ||
              (type === 'object' && !config.get && !config.set)
            ) {
              config = (0, _property.default)(config)
            }

            config.get = config.get || defaultGet
            Object.defineProperty(Hybrid.prototype, key, {
              get: function get() {
                return cache.get(this, key, config.get)
              },
              set:
                config.set &&
                function set(newValue) {
                  var _this = this

                  cache.set(this, key, config.set, newValue, function() {
                    return dispatchInvalidate(_this)
                  })
                },
              enumerable: true,
              configurable: 'development' !== 'production'
            })

            if (config.connect) {
              Hybrid.connects.push(function(host) {
                return config.connect(
                  host,
                  key,
                  function() {
                    var clearCache =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : true
                    if (clearCache) cache.invalidate(host, key)
                    dispatchInvalidate(host)
                  }
                )
              })
            }
          })
        }

        var update
        /* istanbul ignore else */

        if ('development' !== 'production') {
          var walkInShadow = function walkInShadow(node, fn) {
            fn(node)
            Array.from(node.children).forEach(function(el) {
              return walkInShadow(el, fn)
            })

            if (node.shadowRoot) {
              Array.from(node.shadowRoot.children).forEach(function(el) {
                return walkInShadow(el, fn)
              })
            }
          }

          var updateQueue = new Map()

          update = function update(Hybrid, lastHybrids) {
            if (!updateQueue.size) {
              Promise.resolve().then(function() {
                walkInShadow(document.body, function(node) {
                  if (updateQueue.has(node.constructor)) {
                    var hybrids = updateQueue.get(node.constructor)
                    node.disconnectedCallback()
                    Object.keys(node.constructor.hybrids).forEach(function(
                      key
                    ) {
                      cache.invalidate(node, key, node[key] === hybrids[key])
                    })
                    node.connectedCallback()
                    dispatchInvalidate(node)
                  }
                })
                updateQueue.clear()
              })
            }

            updateQueue.set(Hybrid, lastHybrids)
          }
        }

        var connects = new WeakMap()

        function defineElement(tagName, hybridsOrConstructor) {
          var type = _typeof(hybridsOrConstructor)

          if (type !== 'object' && type !== 'function') {
            throw TypeError(
              '[define] Invalid second argument. It must be an object or a function'
            )
          }

          var CustomElement = window.customElements.get(tagName)

          if (type === 'function') {
            if (CustomElement !== hybridsOrConstructor) {
              return window.customElements.define(tagName, hybridsOrConstructor)
            }

            return CustomElement
          }

          if (CustomElement) {
            if (CustomElement.hybrids === hybridsOrConstructor) {
              return CustomElement
            }

            if ('development' !== 'production' && CustomElement.hybrids) {
              Object.keys(CustomElement.hybrids).forEach(function(key) {
                delete CustomElement.prototype[key]
              })
              var lastHybrids = CustomElement.hybrids
              compile(CustomElement, hybridsOrConstructor)
              update(CustomElement, lastHybrids)
              return CustomElement
            }

            throw Error(
              "[define] Element '".concat(tagName, "' already defined")
            )
          }

          var Hybrid =
            /*#__PURE__*/
            (function(_HTMLElement) {
              _inherits(Hybrid, _HTMLElement)

              function Hybrid() {
                _classCallCheck(this, Hybrid)

                return _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(Hybrid).apply(this, arguments)
                )
              }

              _createClass(
                Hybrid,
                [
                  {
                    key: 'connectedCallback',
                    value: function connectedCallback() {
                      var _this2 = this

                      var list = this.constructor.connects.reduce(function(
                        acc,
                        fn
                      ) {
                        var result = fn(_this2)
                        if (result) acc.add(result)
                        return acc
                      },
                      new Set())
                      connects.set(this, list)
                      dispatchInvalidate(this)
                    }
                  },
                  {
                    key: 'disconnectedCallback',
                    value: function disconnectedCallback() {
                      var list = connects.get(this)
                      list.forEach(function(fn) {
                        return fn()
                      })
                    }
                  }
                ],
                [
                  {
                    key: 'name',
                    get: function get() {
                      return tagName
                    }
                  }
                ]
              )

              return Hybrid
            })(_wrapNativeSuper(HTMLElement))

          compile(Hybrid, hybridsOrConstructor)
          customElements.define(tagName, Hybrid)
          return Hybrid
        }

        function defineMap(elements) {
          return Object.keys(elements).reduce(function(acc, key) {
            var tagName = (0, _utils.pascalToDash)(key)
            acc[key] = defineElement(tagName, elements[key])
            return acc
          }, {})
        }

        function define() {
          if (
            _typeof(arguments.length <= 0 ? undefined : arguments[0]) ===
            'object'
          ) {
            return defineMap(arguments.length <= 0 ? undefined : arguments[0])
          }

          return defineElement.apply(void 0, arguments)
        }
      },
      {
        './property': '../node_modules/hybrids/esm/property.js',
        './render': '../node_modules/hybrids/esm/render.js',
        './cache': '../node_modules/hybrids/esm/cache.js',
        './utils': '../node_modules/hybrids/esm/utils.js'
      }
    ],
    '../node_modules/hybrids/esm/parent.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = parent
        var map = new WeakMap()
        document.addEventListener('@invalidate', function(event) {
          var set = map.get(event.composedPath()[0])
          if (set)
            set.forEach(function(fn) {
              return fn()
            })
        })

        function walk(node, fn) {
          var parentElement = node.parentElement || node.parentNode.host

          while (parentElement) {
            var hybrids = parentElement.constructor.hybrids

            if (hybrids && fn(hybrids)) {
              return parentElement
            }

            parentElement =
              parentElement.parentElement ||
              (parentElement.parentNode && parentElement.parentNode.host)
          }

          return parentElement || null
        }

        function parent(hybridsOrFn) {
          var fn =
            typeof hybridsOrFn === 'function'
              ? hybridsOrFn
              : function(hybrids) {
                  return hybrids === hybridsOrFn
                }
          return {
            get: function get(host) {
              return walk(host, fn)
            },
            connect: function connect(host, key, invalidate) {
              var target = host[key]

              if (target) {
                var set = map.get(target)

                if (!set) {
                  set = new Set()
                  map.set(target, set)
                }

                set.add(invalidate)
                return function() {
                  set.delete(invalidate)
                  invalidate()
                }
              }

              return false
            }
          }
        }
      },
      {}
    ],
    '../node_modules/hybrids/esm/children.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = children

        function walk(node, fn, options) {
          var items =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : []
          Array.from(node.children).forEach(function(child) {
            var hybrids = child.constructor.hybrids

            if (hybrids && fn(hybrids)) {
              items.push(child)

              if (options.deep && options.nested) {
                walk(child, fn, options, items)
              }
            } else if (options.deep) {
              walk(child, fn, options, items)
            }
          })
          return items
        }

        function children(hybridsOrFn) {
          var options =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                  deep: false,
                  nested: false
                }
          var fn =
            typeof hybridsOrFn === 'function'
              ? hybridsOrFn
              : function(hybrids) {
                  return hybrids === hybridsOrFn
                }
          return {
            get: function get(host) {
              return walk(host, fn, options)
            },
            connect: function connect(host, key, invalidate) {
              var observer = new MutationObserver(invalidate)
              var set = new Set()

              var childEventListener = function childEventListener(_ref) {
                var target = _ref.target

                if (!set.size) {
                  Promise.resolve().then(function() {
                    var list = host[key]

                    for (var i = 0; i < list.length; i += 1) {
                      if (set.has(list[i])) {
                        invalidate(false)
                        break
                      }
                    }

                    set.clear()
                  })
                }

                set.add(target)
              }

              observer.observe(host, {
                childList: true,
                subtree: !!options.deep
              })
              host.addEventListener('@invalidate', childEventListener)
              return function() {
                observer.disconnect()
                host.removeEventListener('@invalidate', childEventListener)
              }
            }
          }
        }
      },
      {}
    ],
    '../node_modules/hybrids/esm/template/utils.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.getTemplateEnd = getTemplateEnd
        exports.removeTemplate = removeTemplate
        exports.dataMap = void 0
        var map = new WeakMap()
        var dataMap = {
          get: function get(key, defaultValue) {
            if (map.has(key)) {
              return map.get(key)
            }

            if (defaultValue !== undefined) {
              map.set(key, defaultValue)
            }

            return defaultValue
          },
          set: function set(key, value) {
            map.set(key, value)
            return value
          }
        }
        exports.dataMap = dataMap

        function getTemplateEnd(node) {
          var data // eslint-disable-next-line no-cond-assign

          while (node && (data = dataMap.get(node)) && data.endNode) {
            node = data.endNode
          }

          return node
        }

        function removeTemplate(target) {
          var data = dataMap.get(target)
          var startNode = data.startNode

          if (startNode) {
            var endNode = getTemplateEnd(data.endNode)
            var node = startNode
            var lastNextSibling = endNode.nextSibling

            while (node) {
              var nextSibling = node.nextSibling
              node.parentNode.removeChild(node)
              node = nextSibling !== lastNextSibling && nextSibling
            }
          }
        }
      },
      {}
    ],
    '../node_modules/hybrids/esm/template/resolvers/array.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = resolveArray

        var _utils = require('../utils')

        var _value = _interopRequireDefault(require('./value'))

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        // eslint-disable-next-line import/no-cycle
        var arrayMap = new WeakMap()

        function movePlaceholder(target, previousSibling) {
          var data = _utils.dataMap.get(target)

          var startNode = data.startNode
          var endNode = (0, _utils.getTemplateEnd)(data.endNode)
          previousSibling.parentNode.insertBefore(
            target,
            previousSibling.nextSibling
          )
          var prevNode = target
          var node = startNode

          while (node) {
            var nextNode = node.nextSibling
            prevNode.parentNode.insertBefore(node, prevNode.nextSibling)
            prevNode = node
            node = nextNode !== endNode.nextSibling && nextNode
          }
        }

        function resolveArray(host, target, value) {
          var lastEntries = arrayMap.get(target)
          var entries = value.map(function(item, index) {
            return {
              id: Object.prototype.hasOwnProperty.call(item, 'id')
                ? item.id
                : index,
              value: item,
              placeholder: null,
              available: true
            }
          })
          arrayMap.set(target, entries)

          if (lastEntries) {
            var ids = new Set()
            entries.forEach(function(entry) {
              return ids.add(entry.id)
            })
            lastEntries = lastEntries.filter(function(entry) {
              if (!ids.has(entry.id)) {
                ;(0, _utils.removeTemplate)(entry.placeholder)
                entry.placeholder.parentNode.removeChild(entry.placeholder)
                return false
              }

              return true
            })
          }

          var previousSibling = target
          var lastIndex = value.length - 1

          var data = _utils.dataMap.get(target)

          entries.forEach(function(entry, index) {
            var matchedEntry =
              lastEntries &&
              lastEntries.find(function(item) {
                return item.available && item.id === entry.id
              })
            var placeholder

            if (matchedEntry) {
              matchedEntry.available = false
              placeholder = matchedEntry.placeholder

              if (placeholder.previousSibling !== previousSibling) {
                movePlaceholder(placeholder, previousSibling)
              }

              if (matchedEntry.value !== entry.value) {
                ;(0, _value.default)(host, placeholder, entry.value)
              }
            } else {
              placeholder = document.createTextNode('')
              previousSibling.parentNode.insertBefore(
                placeholder,
                previousSibling.nextSibling
              )
              ;(0, _value.default)(host, placeholder, entry.value)
            }

            previousSibling = (0, _utils.getTemplateEnd)(
              _utils.dataMap.get(placeholder).endNode || placeholder
            )
            if (index === 0) data.startNode = placeholder
            if (index === lastIndex) data.endNode = previousSibling
            entry.placeholder = placeholder
          })

          if (lastEntries) {
            lastEntries.forEach(function(entry) {
              if (entry.available) {
                ;(0, _utils.removeTemplate)(entry.placeholder)
                entry.placeholder.parentNode.removeChild(entry.placeholder)
              }
            })
          }
        }
      },
      {
        '../utils': '../node_modules/hybrids/esm/template/utils.js',
        './value': '../node_modules/hybrids/esm/template/resolvers/value.js'
      }
    ],
    '../node_modules/hybrids/esm/template/resolvers/value.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = resolveValue

        var _utils = require('../utils')

        var _array = _interopRequireDefault(require('./array'))

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }

          return _typeof(obj)
        }

        function resolveValue(host, target, value) {
          var type = Array.isArray(value) ? 'array' : _typeof(value)

          var data = _utils.dataMap.get(target, {})

          if (data.type !== type) {
            ;(0, _utils.removeTemplate)(target)
            data = _utils.dataMap.set(target, {
              type: type
            })

            if (target.textContent !== '') {
              target.textContent = ''
            }
          }

          switch (type) {
            case 'function':
              value(host, target)
              break

            case 'array':
              ;(0, _array.default)(host, target, value)
              break

            default:
              target.textContent = type === 'number' || value ? value : ''
          }
        }
      },
      {
        '../utils': '../node_modules/hybrids/esm/template/utils.js',
        './array': '../node_modules/hybrids/esm/template/resolvers/array.js'
      }
    ],
    '../node_modules/hybrids/esm/template/resolvers/event.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = resolveEventListener

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }

          return _typeof(obj)
        }

        var eventMap = new WeakMap()

        function resolveEventListener(eventType) {
          return function(host, target, value, lastValue) {
            if (lastValue) {
              target.removeEventListener(
                eventType,
                eventMap.get(lastValue),
                lastValue.options !== undefined ? lastValue.options : false
              )
            }

            if (value) {
              if (typeof value !== 'function') {
                throw Error(
                  'Event listener must be a function: '.concat(_typeof(value))
                )
              }

              eventMap.set(value, value.bind(null, host))
              target.addEventListener(
                eventType,
                eventMap.get(value),
                value.options !== undefined ? value.options : false
              )
            }
          }
        }
      },
      {}
    ],
    '../node_modules/hybrids/esm/template/resolvers/class.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = resolveClassList

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }

          return _typeof(obj)
        }

        function normalizeValue(value) {
          var set =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : new Set()

          if (Array.isArray(value)) {
            value.forEach(function(className) {
              return set.add(className)
            })
          } else if (value !== null && _typeof(value) === 'object') {
            Object.keys(value).forEach(function(key) {
              return value[key] && set.add(key)
            })
          } else {
            set.add(value)
          }

          return set
        }

        var classMap = new WeakMap()

        function resolveClassList(host, target, value) {
          var previousList = classMap.get(target) || new Set()
          var list = normalizeValue(value)
          classMap.set(target, list)
          list.forEach(function(className) {
            target.classList.add(className)
            previousList.delete(className)
          })
          previousList.forEach(function(className) {
            target.classList.remove(className)
          })
        }
      },
      {}
    ],
    '../node_modules/hybrids/esm/template/resolvers/style.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = resolveStyle

        var _utils = require('../../utils')

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }

          return _typeof(obj)
        }

        var styleMap = new WeakMap()

        function resolveStyle(host, target, value) {
          if (value === null || _typeof(value) !== 'object') {
            throw TypeError(
              'Style value must be an object instance in '.concat(
                (0, _utils.stringifyElement)(target),
                ':'
              ),
              value
            )
          }

          var previousMap = styleMap.get(target) || new Map()
          var nextMap = Object.keys(value).reduce(function(map, key) {
            var dashKey = (0, _utils.camelToDash)(key)
            var styleValue = value[key]

            if (!styleValue && styleValue !== 0) {
              target.style.removeProperty(dashKey)
            } else {
              target.style.setProperty(dashKey, styleValue)
            }

            map.set(dashKey, styleValue)
            previousMap.delete(dashKey)
            return map
          }, new Map())
          previousMap.forEach(function(styleValue, key) {
            target.style[key] = ''
          })
          styleMap.set(target, nextMap)
        }
      },
      { '../../utils': '../node_modules/hybrids/esm/utils.js' }
    ],
    '../node_modules/hybrids/esm/template/resolvers/property.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = resolveProperty

        var _event = _interopRequireDefault(require('./event'))

        var _class = _interopRequireDefault(require('./class'))

        var _style = _interopRequireDefault(require('./style'))

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function resolveProperty(attrName, propertyName, isSVG) {
          if (propertyName.substr(0, 2) === 'on') {
            var eventType = propertyName.substr(2)
            return (0, _event.default)(eventType)
          }

          switch (attrName) {
            case 'class':
              return _class.default

            case 'style':
              return _style.default

            default:
              return function(host, target, value) {
                if (
                  !isSVG &&
                  !(target instanceof SVGElement) &&
                  propertyName in target
                ) {
                  if (target[propertyName] !== value) {
                    target[propertyName] = value
                  }
                } else if (
                  value === false ||
                  value === undefined ||
                  value === null
                ) {
                  target.removeAttribute(attrName)
                } else {
                  var attrValue = value === true ? '' : String(value)
                  target.setAttribute(attrName, attrValue)
                }
              }
          }
        }
      },
      {
        './event': '../node_modules/hybrids/esm/template/resolvers/event.js',
        './class': '../node_modules/hybrids/esm/template/resolvers/class.js',
        './style': '../node_modules/hybrids/esm/template/resolvers/style.js'
      }
    ],
    '../node_modules/hybrids/esm/template/core.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.createId = createId
        exports.createInternalWalker = createInternalWalker
        exports.compile = compile

        var _utils = require('../utils')

        var _utils2 = require('./utils')

        var _value = _interopRequireDefault(require('./resolvers/value'))

        var _property = _interopRequireDefault(require('./resolvers/property'))

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function _slicedToArray(arr, i) {
          return (
            _arrayWithHoles(arr) ||
            _iterableToArrayLimit(arr, i) ||
            _nonIterableRest()
          )
        }

        function _nonIterableRest() {
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          )
        }

        function _iterableToArrayLimit(arr, i) {
          var _arr = []
          var _n = true
          var _d = false
          var _e = undefined

          try {
            for (
              var _i = arr[Symbol.iterator](), _s;
              !(_n = (_s = _i.next()).done);
              _n = true
            ) {
              _arr.push(_s.value)

              if (i && _arr.length === i) break
            }
          } catch (err) {
            _d = true
            _e = err
          } finally {
            try {
              if (!_n && _i['return'] != null) _i['return']()
            } finally {
              if (_d) throw _e
            }
          }

          return _arr
        }

        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr
        }

        function _typeof(obj) {
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }

          return _typeof(obj)
        }

        var TIMESTAMP = Date.now()

        var getPlaceholder = function getPlaceholder() {
          var id =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : 0
          return '{{h-'.concat(TIMESTAMP, '-').concat(id, '}}')
        }

        var PLACEHOLDER_REGEXP_TEXT = getPlaceholder('(\\d+)')
        var PLACEHOLDER_REGEXP_EQUAL = new RegExp(
          '^'.concat(PLACEHOLDER_REGEXP_TEXT, '$')
        )
        var PLACEHOLDER_REGEXP_ALL = new RegExp(PLACEHOLDER_REGEXP_TEXT, 'g')
        var ATTR_PREFIX = '--'.concat(TIMESTAMP, '--')
        var ATTR_REGEXP = new RegExp(ATTR_PREFIX, 'g')
        var preparedTemplates = new WeakMap()
        /* istanbul ignore next */

        function applyShadyCSS(template, tagName) {
          if (!tagName) return template
          return (0, _utils.shadyCSS)(function(shady) {
            var map = preparedTemplates.get(template)

            if (!map) {
              map = new Map()
              preparedTemplates.set(template, map)
            }

            var clone = map.get(tagName)

            if (!clone) {
              clone = document.createElement('template')
              clone.content.appendChild(template.content.cloneNode(true))
              map.set(tagName, clone)
              var styles = clone.content.querySelectorAll('style')
              Array.from(styles).forEach(function(style) {
                var count = style.childNodes.length + 1

                for (var i = 0; i < count; i += 1) {
                  style.parentNode.insertBefore(
                    document.createTextNode(getPlaceholder()),
                    style
                  )
                }
              })
              shady.prepareTemplate(clone, tagName.toLowerCase())
            }

            return clone
          }, template)
        }

        function createId(parts, isSVG) {
          return ''
            .concat(isSVG ? 'svg:' : '')
            .concat(parts.join(getPlaceholder()))
        }

        function createSignature(parts) {
          var signature = parts.reduce(function(acc, part, index) {
            if (index === 0) {
              return part
            }

            if (
              parts
                .slice(index)
                .join('')
                .match(/\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)
            ) {
              return ''
                .concat(acc, '<!--')
                .concat(getPlaceholder(index - 1), '-->')
                .concat(part)
            }

            return acc + getPlaceholder(index - 1) + part
          }, '')
          /* istanbul ignore if */

          if (_utils.IS_IE) {
            return signature.replace(
              /style\s*=\s*(["][^"]+["]|['][^']+[']|[^\s"'<>/]+)/g,
              function(match) {
                return ''.concat(ATTR_PREFIX).concat(match)
              }
            )
          }

          return signature
        }

        function getPropertyName(string) {
          return string
            .replace(/\s*=\s*['"]*$/g, '')
            .split(' ')
            .pop()
        }

        function replaceComments(fragment) {
          var iterator = document.createNodeIterator(
            fragment,
            NodeFilter.SHOW_COMMENT,
            null,
            false
          )
          var node // eslint-disable-next-line no-cond-assign

          while ((node = iterator.nextNode())) {
            if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
              node.parentNode.insertBefore(
                document.createTextNode(node.textContent),
                node
              )
              node.parentNode.removeChild(node)
            }
          }
        }

        function createInternalWalker(context) {
          var node
          return {
            get currentNode() {
              return node
            },

            nextNode: function nextNode() {
              if (node === undefined) {
                node = context.childNodes[0]
              } else if (node.childNodes.length) {
                node = node.childNodes[0]
              } else if (node.nextSibling) {
                node = node.nextSibling
              } else {
                node = node.parentNode.nextSibling
              }

              return !!node
            }
          }
        }

        function createExternalWalker(context) {
          return document.createTreeWalker(
            context, // eslint-disable-next-line no-bitwise
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
            null,
            false
          )
        }
        /* istanbul ignore next */

        var createWalker =
          _typeof(window.ShadyDOM) === 'object' && window.ShadyDOM.inUse
            ? createInternalWalker
            : createExternalWalker
        var container = document.createElement('div')

        function compile(rawParts, isSVG) {
          var template = document.createElement('template')
          var parts = []
          var signature = createSignature(rawParts)
          if (isSVG) signature = '<svg>'.concat(signature, '</svg>')
          /* istanbul ignore if */

          if (_utils.IS_IE) {
            template.innerHTML = signature
          } else {
            container.innerHTML = '<template>'.concat(signature, '</template>')
            template.content.appendChild(container.children[0].content)
          }

          if (isSVG) {
            var svgRoot = template.content.firstChild
            template.content.removeChild(svgRoot)
            Array.from(svgRoot.childNodes).forEach(function(node) {
              return template.content.appendChild(node)
            })
          }

          replaceComments(template.content)
          var compileWalker = createWalker(template.content)
          var compileIndex = 0

          var _loop = function _loop() {
            var node = compileWalker.currentNode

            if (node.nodeType === Node.TEXT_NODE) {
              var text = node.textContent

              if (!text.match(PLACEHOLDER_REGEXP_EQUAL)) {
                var results = text.match(PLACEHOLDER_REGEXP_ALL)

                if (results) {
                  var currentNode = node
                  results
                    .reduce(
                      function(acc, placeholder) {
                        var _acc$pop$split = acc.pop().split(placeholder),
                          _acc$pop$split2 = _slicedToArray(_acc$pop$split, 2),
                          before = _acc$pop$split2[0],
                          next = _acc$pop$split2[1]

                        if (before) acc.push(before)
                        acc.push(placeholder)
                        if (next) acc.push(next)
                        return acc
                      },
                      [text]
                    )
                    .forEach(function(part, index) {
                      if (index === 0) {
                        currentNode.textContent = part
                      } else {
                        currentNode = currentNode.parentNode.insertBefore(
                          document.createTextNode(part),
                          currentNode.nextSibling
                        )
                      }
                    })
                }
              }

              var equal = node.textContent.match(PLACEHOLDER_REGEXP_EQUAL)

              if (equal) {
                /* istanbul ignore else */
                if (!_utils.IS_IE) node.textContent = ''
                parts[equal[1]] = [compileIndex, _value.default]
              }
            } else {
              /* istanbul ignore else */
              // eslint-disable-next-line no-lonely-if
              if (node.nodeType === Node.ELEMENT_NODE) {
                Array.from(node.attributes).forEach(function(attr) {
                  var value = attr.value.trim()
                  /* istanbul ignore next */

                  var name = _utils.IS_IE
                    ? attr.name.replace(ATTR_PREFIX, '')
                    : attr.name
                  var equal = value.match(PLACEHOLDER_REGEXP_EQUAL)

                  if (equal) {
                    var propertyName = getPropertyName(rawParts[equal[1]])
                    parts[equal[1]] = [
                      compileIndex,
                      (0, _property.default)(name, propertyName, isSVG)
                    ]
                    node.removeAttribute(attr.name)
                  } else {
                    var _results = value.match(PLACEHOLDER_REGEXP_ALL)

                    if (_results) {
                      var partialName = 'attr__'.concat(name)

                      _results.forEach(function(placeholder, index) {
                        var _placeholder$match = placeholder.match(
                            PLACEHOLDER_REGEXP_EQUAL
                          ),
                          _placeholder$match2 = _slicedToArray(
                            _placeholder$match,
                            2
                          ),
                          id = _placeholder$match2[1]

                        parts[id] = [
                          compileIndex,
                          function(host, target, attrValue) {
                            var data = _utils2.dataMap.get(target, {})

                            data[partialName] = (
                              data[partialName] || value
                            ).replace(
                              placeholder,
                              attrValue == null ? '' : attrValue
                            )

                            if (
                              _results.length === 1 ||
                              index + 1 === _results.length
                            ) {
                              target.setAttribute(name, data[partialName])
                              data[partialName] = undefined
                            }
                          }
                        ]
                      })

                      attr.value = ''
                      /* istanbul ignore next */

                      if (_utils.IS_IE && name !== attr.name) {
                        node.removeAttribute(attr.name)
                        node.setAttribute(name, '')
                      }
                    }
                  }
                })
              }
            }

            compileIndex += 1
          }

          while (compileWalker.nextNode()) {
            _loop()
          }

          return function(host, target, args) {
            var data = _utils2.dataMap.get(target, {
              type: 'function'
            })

            if (template !== data.template) {
              if (data.template) (0, _utils2.removeTemplate)(target)
              var fragment = document.importNode(
                applyShadyCSS(template, host.tagName).content,
                true
              )
              var renderWalker = createWalker(fragment)
              var clonedParts = parts.slice(0)
              var renderIndex = 0
              var currentPart = clonedParts.shift()
              var markers = []
              Object.assign(data, {
                template: template,
                markers: markers
              })

              while (renderWalker.nextNode()) {
                var node = renderWalker.currentNode

                if (node.nodeType === Node.TEXT_NODE) {
                  /* istanbul ignore next */
                  if (PLACEHOLDER_REGEXP_EQUAL.test(node.textContent)) {
                    node.textContent = ''
                  } else if (_utils.IS_IE) {
                    node.textContent = node.textContent.replace(ATTR_REGEXP, '')
                  }
                } else if (
                  'development' !== 'production' &&
                  node.nodeType === Node.ELEMENT_NODE
                ) {
                  if (
                    node.tagName.indexOf('-') > -1 &&
                    !customElements.get(node.tagName.toLowerCase())
                  ) {
                    throw Error(
                      "Missing '"
                        .concat(
                          (0, _utils.stringifyElement)(node),
                          "' element definition in '"
                        )
                        .concat((0, _utils.stringifyElement)(host), "'")
                    )
                  }
                }

                while (currentPart && currentPart[0] === renderIndex) {
                  markers.push([node, currentPart[1]])
                  currentPart = clonedParts.shift()
                }

                renderIndex += 1
              }

              var childList = Array.from(fragment.childNodes)
              data.startNode = childList[0]
              data.endNode = childList[childList.length - 1]

              if (target.nodeType === Node.TEXT_NODE) {
                var previousChild = target
                childList.forEach(function(child) {
                  target.parentNode.insertBefore(
                    child,
                    previousChild.nextSibling
                  )
                  previousChild = child
                })
              } else {
                target.appendChild(fragment)
              }
            }

            data.markers.forEach(function(_ref, index) {
              var _ref2 = _slicedToArray(_ref, 2),
                node = _ref2[0],
                fn = _ref2[1]

              if (data.lastArgs && data.lastArgs[index] === args[index]) return
              fn(
                host,
                node,
                args[index],
                data.lastArgs ? data.lastArgs[index] : undefined
              )
            })
            data.lastArgs = args
          }
        }
      },
      {
        '../utils': '../node_modules/hybrids/esm/utils.js',
        './utils': '../node_modules/hybrids/esm/template/utils.js',
        './resolvers/value':
          '../node_modules/hybrids/esm/template/resolvers/value.js',
        './resolvers/property':
          '../node_modules/hybrids/esm/template/resolvers/property.js'
      }
    ],
    '../node_modules/hybrids/esm/template/resolve.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = resolve
        var promiseMap = new WeakMap()

        function resolve(promise, placeholder) {
          var delay =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : 200
          return function(host, target) {
            var timeout

            if (placeholder) {
              timeout = setTimeout(function() {
                timeout = undefined
                requestAnimationFrame(function() {
                  placeholder(host, target)
                })
              }, delay)
            }

            promiseMap.set(target, promise)
            promise.then(function(template) {
              if (timeout) clearTimeout(timeout)

              if (promiseMap.get(target) === promise) {
                template(host, target)
                promiseMap.set(target, null)
              }
            })
          }
        }
      },
      {}
    ],
    '../node_modules/hybrids/esm/template/index.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.html = html
        exports.svg = svg

        var _define = _interopRequireDefault(require('../define'))

        var _core = require('./core')

        var _resolve = _interopRequireDefault(require('./resolve'))

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function defineElements(elements) {
          ;(0, _define.default)(elements)
          return this
        }

        function key(id) {
          this.id = id
          return this
        }

        var updates = new Map()

        function create(parts, args, isSVG) {
          var update = function update(host) {
            var target =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : host
            var id = (0, _core.createId)(parts, isSVG)
            var render = updates.get(id)

            if (!render) {
              render = (0, _core.compile)(parts, isSVG)
              updates.set(id, render)
            }

            render(host, target, args)
          }

          return Object.assign(update, {
            define: defineElements,
            key: key
          })
        }

        function html(parts) {
          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          ) {
            args[_key - 1] = arguments[_key]
          }

          return create(parts, args)
        }

        function svg(parts) {
          for (
            var _len2 = arguments.length,
              args = new Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2 - 1] = arguments[_key2]
          }

          return create(parts, args, true)
        }

        Object.assign(html, {
          resolve: _resolve.default
        })
        Object.assign(svg, {
          resolve: _resolve.default
        })
      },
      {
        '../define': '../node_modules/hybrids/esm/define.js',
        './core': '../node_modules/hybrids/esm/template/core.js',
        './resolve': '../node_modules/hybrids/esm/template/resolve.js'
      }
    ],
    '../node_modules/hybrids/esm/index.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        Object.defineProperty(exports, 'define', {
          enumerable: true,
          get: function() {
            return _define.default
          }
        })
        Object.defineProperty(exports, 'property', {
          enumerable: true,
          get: function() {
            return _property.default
          }
        })
        Object.defineProperty(exports, 'parent', {
          enumerable: true,
          get: function() {
            return _parent.default
          }
        })
        Object.defineProperty(exports, 'children', {
          enumerable: true,
          get: function() {
            return _children.default
          }
        })
        Object.defineProperty(exports, 'render', {
          enumerable: true,
          get: function() {
            return _render.default
          }
        })
        Object.defineProperty(exports, 'dispatch', {
          enumerable: true,
          get: function() {
            return _utils.dispatch
          }
        })
        Object.defineProperty(exports, 'html', {
          enumerable: true,
          get: function() {
            return _template.html
          }
        })
        Object.defineProperty(exports, 'svg', {
          enumerable: true,
          get: function() {
            return _template.svg
          }
        })

        var _define = _interopRequireDefault(require('./define'))

        var _property = _interopRequireDefault(require('./property'))

        var _parent = _interopRequireDefault(require('./parent'))

        var _children = _interopRequireDefault(require('./children'))

        var _render = _interopRequireDefault(require('./render'))

        var _utils = require('./utils')

        var _template = require('./template')

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }
      },
      {
        './define': '../node_modules/hybrids/esm/define.js',
        './property': '../node_modules/hybrids/esm/property.js',
        './parent': '../node_modules/hybrids/esm/parent.js',
        './children': '../node_modules/hybrids/esm/children.js',
        './render': '../node_modules/hybrids/esm/render.js',
        './utils': '../node_modules/hybrids/esm/utils.js',
        './template': '../node_modules/hybrids/esm/template/index.js'
      }
    ],
    'components/chip.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = void 0

        var _hybrids = require('hybrids')

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n                <span onclick="',
            '"> <i>x</i> </span>\n              '
          ])

          _templateObject2 = function _templateObject2() {
            return data
          }

          return data
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n      <link rel="stylesheet" href="https://unpkg.com/clair/dist/clair.css" />\n      <div class="',
            '" style="',
            '">\n        <slot name="content">\n          <span class="c-chip__label">',
            '</span>\n        </slot>\n        ',
            '\n      </div>\n    '
          ])

          _templateObject = function _templateObject() {
            return data
          }

          return data
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0)
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) }
            })
          )
        }

        var colorPresets = [
          'red',
          'orange',
          'yellow',
          'green',
          'cyan',
          'blue',
          'indigo',
          'purple',
          'pink',
          'dark',
          'black'
        ]

        function handleClick(host) {
          var event = new CustomEvent('close')
          host.dispatchEvent(event)
        } // capture mode
        // handleClick.options = true;

        var _default = {
          size: 'md',
          label: '',
          color: '',
          closable: false,
          classNames: function classNames(host) {
            var color = host.color,
              size = host.size,
              closable = host.closable
            var isPresetColor = color && colorPresets.indexOf(color) > -1
            return [
              'c-chip__wrapper',
              size ? 'is-'.concat(size) : '_',
              closable ? 'c-chip--closable' : '_',
              isPresetColor ? 'c-chip--'.concat(color) : '_'
            ]
          },
          styleObj: function styleObj(_ref) {
            var color = _ref.color

            if (color && colorPresets.indexOf(color) === -1) {
              return {
                backgroundColor: color
              }
            }

            return {}
          },
          render: function render(host) {
            var classNames = host.classNames,
              styleObj = host.styleObj,
              label = host.label,
              closable = host.closable
            return (0, _hybrids.html)(
              _templateObject(),
              classNames,
              styleObj,
              label,
              closable
                ? (0, _hybrids.html)(_templateObject2(), handleClick)
                : ''
            )
          }
        }
        exports.default = _default
      },
      { hybrids: '../node_modules/hybrids/esm/index.js' }
    ],
    '../node_modules/feather-icons/dist/feather.js': [
      function(require, module, exports) {
        var define
        var global = arguments[3]
        ;(function webpackUniversalModuleDefinition(root, factory) {
          if (typeof exports === 'object' && typeof module === 'object')
            module.exports = factory()
          else if (typeof define === 'function' && define.amd)
            define([], factory)
          else if (typeof exports === 'object') exports['feather'] = factory()
          else root['feather'] = factory()
        })(typeof self !== 'undefined' ? self : this, function() {
          return /******/ (function(modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/ var installedModules = {} // The require function
            /******/
            /******/ /******/ function __webpack_require__(moduleId) {
              /******/
              /******/ // Check if module is in cache
              /******/ if (installedModules[moduleId]) {
                /******/ return installedModules[moduleId].exports
                /******/
              } // Create a new module (and put it into the cache)
              /******/ /******/ var module = (installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
                /******/
              }) // Execute the module function
              /******/
              /******/ /******/ modules[moduleId].call(
                module.exports,
                module,
                module.exports,
                __webpack_require__
              ) // Flag the module as loaded
              /******/
              /******/ /******/ module.l = true // Return the exports of the module
              /******/
              /******/ /******/ return module.exports
              /******/
            } // expose the modules object (__webpack_modules__)
            /******/
            /******/
            /******/ /******/ __webpack_require__.m = modules // expose the module cache
            /******/
            /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
            /******/
            /******/ /******/ __webpack_require__.d = function(
              exports,
              name,
              getter
            ) {
              /******/ if (!__webpack_require__.o(exports, name)) {
                /******/ Object.defineProperty(exports, name, {
                  /******/ configurable: false,
                  /******/ enumerable: true,
                  /******/ get: getter
                  /******/
                })
                /******/
              }
              /******/
            } // define __esModule on exports
            /******/
            /******/ /******/ __webpack_require__.r = function(exports) {
              /******/ Object.defineProperty(exports, '__esModule', {
                value: true
              })
              /******/
            } // getDefaultExport function for compatibility with non-harmony modules
            /******/
            /******/ /******/ __webpack_require__.n = function(module) {
              /******/ var getter =
                module && module.__esModule
                  ? /******/ function getDefault() {
                      return module['default']
                    }
                  : /******/ function getModuleExports() {
                      return module
                    }
              /******/ __webpack_require__.d(getter, 'a', getter)
              /******/ return getter
              /******/
            } // Object.prototype.hasOwnProperty.call
            /******/
            /******/ /******/ __webpack_require__.o = function(
              object,
              property
            ) {
              return Object.prototype.hasOwnProperty.call(object, property)
            } // __webpack_public_path__
            /******/
            /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
            /******/
            /******/
            /******/ /******/ return __webpack_require__(
              (__webpack_require__.s = 0)
            )
            /******/
          })(
            /************************************************************************/
            /******/ {
              /***/ './dist/icons.json':
                /*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
                /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, coffee, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, download-cloud, download, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, home, image, inbox, info, instagram, italic, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
                /***/ function(module) {
                  module.exports = {
                    activity:
                      '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                    airplay:
                      '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                    'alert-circle':
                      '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
                    'alert-octagon':
                      '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
                    'alert-triangle':
                      '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>',
                    'align-center':
                      '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                    'align-justify':
                      '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                    'align-left':
                      '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                    'align-right':
                      '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                    anchor:
                      '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                    aperture:
                      '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                    archive:
                      '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                    'arrow-down-circle':
                      '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                    'arrow-down-left':
                      '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                    'arrow-down-right':
                      '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                    'arrow-down':
                      '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                    'arrow-left-circle':
                      '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                    'arrow-left':
                      '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                    'arrow-right-circle':
                      '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                    'arrow-right':
                      '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                    'arrow-up-circle':
                      '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                    'arrow-up-left':
                      '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                    'arrow-up-right':
                      '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                    'arrow-up':
                      '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                    'at-sign':
                      '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                    award:
                      '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                    'bar-chart-2':
                      '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                    'bar-chart':
                      '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                    'battery-charging':
                      '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                    battery:
                      '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                    'bell-off':
                      '<path d="M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    bell:
                      '<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>',
                    bluetooth:
                      '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                    bold:
                      '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                    'book-open':
                      '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                    book:
                      '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                    bookmark:
                      '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                    box:
                      '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line>',
                    briefcase:
                      '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                    calendar:
                      '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                    'camera-off':
                      '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                    camera:
                      '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                    cast:
                      '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line>',
                    'check-circle':
                      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                    'check-square':
                      '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                    check: '<polyline points="20 6 9 17 4 12"></polyline>',
                    'chevron-down':
                      '<polyline points="6 9 12 15 18 9"></polyline>',
                    'chevron-left':
                      '<polyline points="15 18 9 12 15 6"></polyline>',
                    'chevron-right':
                      '<polyline points="9 18 15 12 9 6"></polyline>',
                    'chevron-up':
                      '<polyline points="18 15 12 9 6 15"></polyline>',
                    'chevrons-down':
                      '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                    'chevrons-left':
                      '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                    'chevrons-right':
                      '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                    'chevrons-up':
                      '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                    chrome:
                      '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                    circle: '<circle cx="12" cy="12" r="10"></circle>',
                    clipboard:
                      '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                    clock:
                      '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                    'cloud-drizzle':
                      '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                    'cloud-lightning':
                      '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                    'cloud-off':
                      '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    'cloud-rain':
                      '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                    'cloud-snow':
                      '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line>',
                    cloud:
                      '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                    code:
                      '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                    codepen:
                      '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                    coffee:
                      '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                    command:
                      '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                    compass:
                      '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                    copy:
                      '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                    'corner-down-left':
                      '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                    'corner-down-right':
                      '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                    'corner-left-down':
                      '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                    'corner-left-up':
                      '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                    'corner-right-down':
                      '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                    'corner-right-up':
                      '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                    'corner-up-left':
                      '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                    'corner-up-right':
                      '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                    cpu:
                      '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                    'credit-card':
                      '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                    crop:
                      '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                    crosshair:
                      '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                    database:
                      '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                    delete:
                      '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                    disc:
                      '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                    'dollar-sign':
                      '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                    'download-cloud':
                      '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                    download:
                      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                    droplet:
                      '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                    'edit-2':
                      '<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>',
                    'edit-3':
                      '<polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line>',
                    edit:
                      '<path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>',
                    'external-link':
                      '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                    'eye-off':
                      '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    eye:
                      '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                    facebook:
                      '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                    'fast-forward':
                      '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                    feather:
                      '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                    'file-minus':
                      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                    'file-plus':
                      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                    'file-text':
                      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                    file:
                      '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                    film:
                      '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                    filter:
                      '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                    flag:
                      '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                    'folder-minus':
                      '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                    'folder-plus':
                      '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                    folder:
                      '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                    frown:
                      '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                    gift:
                      '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                    'git-branch':
                      '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                    'git-commit':
                      '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                    'git-merge':
                      '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                    'git-pull-request':
                      '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                    github:
                      '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                    gitlab:
                      '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                    globe:
                      '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                    grid:
                      '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                    'hard-drive':
                      '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line>',
                    hash:
                      '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                    headphones:
                      '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                    heart:
                      '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                    'help-circle':
                      '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line>',
                    home:
                      '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                    image:
                      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                    inbox:
                      '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                    info:
                      '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                    instagram:
                      '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>',
                    italic:
                      '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                    layers:
                      '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                    layout:
                      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                    'life-buoy':
                      '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                    'link-2':
                      '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                    link:
                      '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                    linkedin:
                      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                    list:
                      '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',
                    loader:
                      '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                    lock:
                      '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                    'log-in':
                      '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                    'log-out':
                      '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                    mail:
                      '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                    'map-pin':
                      '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                    map:
                      '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                    'maximize-2':
                      '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                    maximize:
                      '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                    meh:
                      '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                    menu:
                      '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                    'message-circle':
                      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                    'message-square':
                      '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                    'mic-off':
                      '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                    mic:
                      '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                    'minimize-2':
                      '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                    minimize:
                      '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                    'minus-circle':
                      '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                    'minus-square':
                      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                    minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                    monitor:
                      '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                    moon:
                      '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                    'more-horizontal':
                      '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                    'more-vertical':
                      '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                    move:
                      '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                    music:
                      '<path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path><polyline points="9 17 9 5 21 3 21 15"></polyline>',
                    'navigation-2':
                      '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                    navigation:
                      '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                    octagon:
                      '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                    package:
                      '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line>',
                    paperclip:
                      '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                    'pause-circle':
                      '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                    pause:
                      '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                    percent:
                      '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                    'phone-call':
                      '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'phone-forwarded':
                      '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'phone-incoming':
                      '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'phone-missed':
                      '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'phone-off':
                      '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                    'phone-outgoing':
                      '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    phone:
                      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'pie-chart':
                      '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                    'play-circle':
                      '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                    play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                    'plus-circle':
                      '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                    'plus-square':
                      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                    plus:
                      '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                    pocket:
                      '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                    power:
                      '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                    printer:
                      '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                    radio:
                      '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                    'refresh-ccw':
                      '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                    'refresh-cw':
                      '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                    repeat:
                      '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                    rewind:
                      '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                    'rotate-ccw':
                      '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                    'rotate-cw':
                      '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                    rss:
                      '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                    save:
                      '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                    scissors:
                      '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                    search:
                      '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                    send:
                      '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                    server:
                      '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line>',
                    settings:
                      '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                    'share-2':
                      '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                    share:
                      '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                    'shield-off':
                      '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    shield:
                      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                    'shopping-bag':
                      '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                    'shopping-cart':
                      '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                    shuffle:
                      '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                    sidebar:
                      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                    'skip-back':
                      '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                    'skip-forward':
                      '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                    slack:
                      '<path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z"></path><line x1="12.57" y1="5.99" x2="16.15" y2="16.39"></line><line x1="7.85" y1="7.61" x2="11.43" y2="18.01"></line><line x1="16.39" y1="7.85" x2="5.99" y2="11.43"></line><line x1="18.01" y1="12.57" x2="7.61" y2="16.15"></line>',
                    slash:
                      '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                    sliders:
                      '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                    smartphone:
                      '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
                    smile:
                      '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                    speaker:
                      '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>',
                    square:
                      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                    star:
                      '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                    'stop-circle':
                      '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                    sun:
                      '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                    sunrise:
                      '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                    sunset:
                      '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                    tablet:
                      '<rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
                    tag:
                      '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line>',
                    target:
                      '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                    terminal:
                      '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                    thermometer:
                      '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                    'thumbs-down':
                      '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                    'thumbs-up':
                      '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                    'toggle-left':
                      '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                    'toggle-right':
                      '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                    'trash-2':
                      '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                    trash:
                      '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                    trello:
                      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                    'trending-down':
                      '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                    'trending-up':
                      '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                    triangle:
                      '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                    truck:
                      '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                    tv:
                      '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                    twitter:
                      '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                    type:
                      '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                    umbrella:
                      '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                    underline:
                      '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                    unlock:
                      '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                    'upload-cloud':
                      '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                    upload:
                      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                    'user-check':
                      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                    'user-minus':
                      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                    'user-plus':
                      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                    'user-x':
                      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                    user:
                      '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                    users:
                      '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                    'video-off':
                      '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    video:
                      '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                    voicemail:
                      '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                    'volume-1':
                      '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                    'volume-2':
                      '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                    'volume-x':
                      '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                    volume:
                      '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                    watch:
                      '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                    'wifi-off':
                      '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
                    wifi:
                      '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
                    wind:
                      '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                    'x-circle':
                      '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                    'x-square':
                      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                    x:
                      '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                    youtube:
                      '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                    'zap-off':
                      '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                    zap:
                      '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                    'zoom-in':
                      '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                    'zoom-out':
                      '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
                  }

                  /***/
                },

              /***/ './node_modules/classnames/dedupe.js':
                /*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var __WEBPACK_AMD_DEFINE_ARRAY__,
                    __WEBPACK_AMD_DEFINE_RESULT__ /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
                  /* global define */

                  ;(function() {
                    'use strict'

                    var classNames = (function() {
                      // don't inherit from Object so we can skip hasOwnProperty check later
                      // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
                      function StorageObject() {}
                      StorageObject.prototype = Object.create(null)

                      function _parseArray(resultSet, array) {
                        var length = array.length

                        for (var i = 0; i < length; ++i) {
                          _parse(resultSet, array[i])
                        }
                      }

                      var hasOwn = {}.hasOwnProperty

                      function _parseNumber(resultSet, num) {
                        resultSet[num] = true
                      }

                      function _parseObject(resultSet, object) {
                        for (var k in object) {
                          if (hasOwn.call(object, k)) {
                            // set value to false instead of deleting it to avoid changing object structure
                            // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
                            resultSet[k] = !!object[k]
                          }
                        }
                      }

                      var SPACE = /\s+/
                      function _parseString(resultSet, str) {
                        var array = str.split(SPACE)
                        var length = array.length

                        for (var i = 0; i < length; ++i) {
                          resultSet[array[i]] = true
                        }
                      }

                      function _parse(resultSet, arg) {
                        if (!arg) return
                        var argType = typeof arg

                        // 'foo bar'
                        if (argType === 'string') {
                          _parseString(resultSet, arg)

                          // ['foo', 'bar', ...]
                        } else if (Array.isArray(arg)) {
                          _parseArray(resultSet, arg)

                          // { 'foo': true, ... }
                        } else if (argType === 'object') {
                          _parseObject(resultSet, arg)

                          // '130'
                        } else if (argType === 'number') {
                          _parseNumber(resultSet, arg)
                        }
                      }

                      function _classNames() {
                        // don't leak arguments
                        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
                        var len = arguments.length
                        var args = Array(len)
                        for (var i = 0; i < len; i++) {
                          args[i] = arguments[i]
                        }

                        var classSet = new StorageObject()
                        _parseArray(classSet, args)

                        var list = []

                        for (var k in classSet) {
                          if (classSet[k]) {
                            list.push(k)
                          }
                        }

                        return list.join(' ')
                      }

                      return _classNames
                    })()

                    if (typeof module !== 'undefined' && module.exports) {
                      module.exports = classNames
                    } else if (true) {
                      // register as 'classnames', consistent with npm package name
                      !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
                      (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return classNames
                      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
                      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                        (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
                    } else {
                    }
                  })()

                  /***/
                },

              /***/ './node_modules/core-js/fn/array/from.js':
                /*!***********************************************!*\
  !*** ./node_modules/core-js/fn/array/from.js ***!
  \***********************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  __webpack_require__(
                    /*! ../../modules/es6.string.iterator */ './node_modules/core-js/modules/es6.string.iterator.js'
                  )
                  __webpack_require__(
                    /*! ../../modules/es6.array.from */ './node_modules/core-js/modules/es6.array.from.js'
                  )
                  module.exports = __webpack_require__(
                    /*! ../../modules/_core */ './node_modules/core-js/modules/_core.js'
                  ).Array.from

                  /***/
                },

              /***/ './node_modules/core-js/modules/_a-function.js':
                /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  module.exports = function(it) {
                    if (typeof it != 'function')
                      throw TypeError(it + ' is not a function!')
                    return it
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_an-object.js':
                /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var isObject = __webpack_require__(
                    /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
                  )
                  module.exports = function(it) {
                    if (!isObject(it))
                      throw TypeError(it + ' is not an object!')
                    return it
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_array-includes.js':
                /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // false -> Array#indexOf
                  // true  -> Array#includes
                  var toIObject = __webpack_require__(
                    /*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js'
                  )
                  var toLength = __webpack_require__(
                    /*! ./_to-length */ './node_modules/core-js/modules/_to-length.js'
                  )
                  var toAbsoluteIndex = __webpack_require__(
                    /*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js'
                  )
                  module.exports = function(IS_INCLUDES) {
                    return function($this, el, fromIndex) {
                      var O = toIObject($this)
                      var length = toLength(O.length)
                      var index = toAbsoluteIndex(fromIndex, length)
                      var value
                      // Array#includes uses SameValueZero equality algorithm
                      // eslint-disable-next-line no-self-compare
                      if (IS_INCLUDES && el != el)
                        while (length > index) {
                          value = O[index++]
                          // eslint-disable-next-line no-self-compare
                          if (value != value) return true
                          // Array#indexOf ignores holes, Array#includes - not
                        }
                      else
                        for (; length > index; index++)
                          if (IS_INCLUDES || index in O) {
                            if (O[index] === el)
                              return IS_INCLUDES || index || 0
                          }
                      return !IS_INCLUDES && -1
                    }
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_classof.js':
                /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // getting tag from 19.1.3.6 Object.prototype.toString()
                  var cof = __webpack_require__(
                    /*! ./_cof */ './node_modules/core-js/modules/_cof.js'
                  )
                  var TAG = __webpack_require__(
                    /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
                  )('toStringTag')
                  // ES3 wrong here
                  var ARG =
                    cof(
                      (function() {
                        return arguments
                      })()
                    ) == 'Arguments'

                  // fallback for IE11 Script Access Denied error
                  var tryGet = function(it, key) {
                    try {
                      return it[key]
                    } catch (e) {
                      /* empty */
                    }
                  }

                  module.exports = function(it) {
                    var O, T, B
                    return it === undefined
                      ? 'Undefined'
                      : it === null
                      ? 'Null'
                      : // @@toStringTag case
                      typeof (T = tryGet((O = Object(it)), TAG)) == 'string'
                      ? T
                      : // builtinTag case
                      ARG
                      ? cof(O)
                      : // ES3 arguments fallback
                      (B = cof(O)) == 'Object' && typeof O.callee == 'function'
                      ? 'Arguments'
                      : B
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_cof.js':
                /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  var toString = {}.toString

                  module.exports = function(it) {
                    return toString.call(it).slice(8, -1)
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_core.js':
                /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  var core = (module.exports = { version: '2.5.6' })
                  if (typeof __e == 'number') __e = core // eslint-disable-line no-undef

                  /***/
                },

              /***/ './node_modules/core-js/modules/_create-property.js':
                /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  var $defineProperty = __webpack_require__(
                    /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
                  )
                  var createDesc = __webpack_require__(
                    /*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js'
                  )

                  module.exports = function(object, index, value) {
                    if (index in object)
                      $defineProperty.f(object, index, createDesc(0, value))
                    else object[index] = value
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_ctx.js':
                /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // optional / simple context binding
                  var aFunction = __webpack_require__(
                    /*! ./_a-function */ './node_modules/core-js/modules/_a-function.js'
                  )
                  module.exports = function(fn, that, length) {
                    aFunction(fn)
                    if (that === undefined) return fn
                    switch (length) {
                      case 1:
                        return function(a) {
                          return fn.call(that, a)
                        }
                      case 2:
                        return function(a, b) {
                          return fn.call(that, a, b)
                        }
                      case 3:
                        return function(a, b, c) {
                          return fn.call(that, a, b, c)
                        }
                    }
                    return function(/* ...args */) {
                      return fn.apply(that, arguments)
                    }
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_defined.js':
                /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  // 7.2.1 RequireObjectCoercible(argument)
                  module.exports = function(it) {
                    if (it == undefined)
                      throw TypeError("Can't call method on  " + it)
                    return it
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_descriptors.js':
                /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // Thank's IE8 for his funny defineProperty
                  module.exports = !__webpack_require__(
                    /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
                  )(function() {
                    return (
                      Object.defineProperty({}, 'a', {
                        get: function() {
                          return 7
                        }
                      }).a != 7
                    )
                  })

                  /***/
                },

              /***/ './node_modules/core-js/modules/_dom-create.js':
                /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var isObject = __webpack_require__(
                    /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
                  )
                  var document = __webpack_require__(
                    /*! ./_global */ './node_modules/core-js/modules/_global.js'
                  ).document
                  // typeof document.createElement is 'object' in old IE
                  var is =
                    isObject(document) && isObject(document.createElement)
                  module.exports = function(it) {
                    return is ? document.createElement(it) : {}
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_enum-bug-keys.js':
                /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  // IE 8- don't enum bug keys
                  module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
                    ','
                  )

                  /***/
                },

              /***/ './node_modules/core-js/modules/_export.js':
                /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var global = __webpack_require__(
                    /*! ./_global */ './node_modules/core-js/modules/_global.js'
                  )
                  var core = __webpack_require__(
                    /*! ./_core */ './node_modules/core-js/modules/_core.js'
                  )
                  var hide = __webpack_require__(
                    /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
                  )
                  var redefine = __webpack_require__(
                    /*! ./_redefine */ './node_modules/core-js/modules/_redefine.js'
                  )
                  var ctx = __webpack_require__(
                    /*! ./_ctx */ './node_modules/core-js/modules/_ctx.js'
                  )
                  var PROTOTYPE = 'prototype'

                  var $export = function(type, name, source) {
                    var IS_FORCED = type & $export.F
                    var IS_GLOBAL = type & $export.G
                    var IS_STATIC = type & $export.S
                    var IS_PROTO = type & $export.P
                    var IS_BIND = type & $export.B
                    var target = IS_GLOBAL
                      ? global
                      : IS_STATIC
                      ? global[name] || (global[name] = {})
                      : (global[name] || {})[PROTOTYPE]
                    var exports = IS_GLOBAL
                      ? core
                      : core[name] || (core[name] = {})
                    var expProto =
                      exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
                    var key, own, out, exp
                    if (IS_GLOBAL) source = name
                    for (key in source) {
                      // contains in native
                      own = !IS_FORCED && target && target[key] !== undefined
                      // export native or passed
                      out = (own ? target : source)[key]
                      // bind timers to global for call from export context
                      exp =
                        IS_BIND && own
                          ? ctx(out, global)
                          : IS_PROTO && typeof out == 'function'
                          ? ctx(Function.call, out)
                          : out
                      // extend global
                      if (target) redefine(target, key, out, type & $export.U)
                      // export
                      if (exports[key] != out) hide(exports, key, exp)
                      if (IS_PROTO && expProto[key] != out) expProto[key] = out
                    }
                  }
                  global.core = core
                  // type bitmap
                  $export.F = 1 // forced
                  $export.G = 2 // global
                  $export.S = 4 // static
                  $export.P = 8 // proto
                  $export.B = 16 // bind
                  $export.W = 32 // wrap
                  $export.U = 64 // safe
                  $export.R = 128 // real proto method for `library`
                  module.exports = $export

                  /***/
                },

              /***/ './node_modules/core-js/modules/_fails.js':
                /*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  module.exports = function(exec) {
                    try {
                      return !!exec()
                    } catch (e) {
                      return true
                    }
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_global.js':
                /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                  var global = (module.exports =
                    typeof window != 'undefined' && window.Math == Math
                      ? window
                      : typeof self != 'undefined' && self.Math == Math
                      ? self
                      : // eslint-disable-next-line no-new-func
                        Function('return this')())
                  if (typeof __g == 'number') __g = global // eslint-disable-line no-undef

                  /***/
                },

              /***/ './node_modules/core-js/modules/_has.js':
                /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  var hasOwnProperty = {}.hasOwnProperty
                  module.exports = function(it, key) {
                    return hasOwnProperty.call(it, key)
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_hide.js':
                /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var dP = __webpack_require__(
                    /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
                  )
                  var createDesc = __webpack_require__(
                    /*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js'
                  )
                  module.exports = __webpack_require__(
                    /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
                  )
                    ? function(object, key, value) {
                        return dP.f(object, key, createDesc(1, value))
                      }
                    : function(object, key, value) {
                        object[key] = value
                        return object
                      }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_html.js':
                /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var document = __webpack_require__(
                    /*! ./_global */ './node_modules/core-js/modules/_global.js'
                  ).document
                  module.exports = document && document.documentElement

                  /***/
                },

              /***/ './node_modules/core-js/modules/_ie8-dom-define.js':
                /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  module.exports =
                    !__webpack_require__(
                      /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
                    ) &&
                    !__webpack_require__(
                      /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
                    )(function() {
                      return (
                        Object.defineProperty(
                          __webpack_require__(
                            /*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js'
                          )('div'),
                          'a',
                          {
                            get: function() {
                              return 7
                            }
                          }
                        ).a != 7
                      )
                    })

                  /***/
                },

              /***/ './node_modules/core-js/modules/_iobject.js':
                /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // fallback for non-array-like ES3 and non-enumerable old V8 strings
                  var cof = __webpack_require__(
                    /*! ./_cof */ './node_modules/core-js/modules/_cof.js'
                  )
                  // eslint-disable-next-line no-prototype-builtins
                  module.exports = Object('z').propertyIsEnumerable(0)
                    ? Object
                    : function(it) {
                        return cof(it) == 'String' ? it.split('') : Object(it)
                      }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_is-array-iter.js':
                /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // check on default Array iterator
                  var Iterators = __webpack_require__(
                    /*! ./_iterators */ './node_modules/core-js/modules/_iterators.js'
                  )
                  var ITERATOR = __webpack_require__(
                    /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
                  )('iterator')
                  var ArrayProto = Array.prototype

                  module.exports = function(it) {
                    return (
                      it !== undefined &&
                      (Iterators.Array === it || ArrayProto[ITERATOR] === it)
                    )
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_is-object.js':
                /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  module.exports = function(it) {
                    return typeof it === 'object'
                      ? it !== null
                      : typeof it === 'function'
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_iter-call.js':
                /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // call something on iterator step with safe closing on error
                  var anObject = __webpack_require__(
                    /*! ./_an-object */ './node_modules/core-js/modules/_an-object.js'
                  )
                  module.exports = function(iterator, fn, value, entries) {
                    try {
                      return entries
                        ? fn(anObject(value)[0], value[1])
                        : fn(value)
                      // 7.4.6 IteratorClose(iterator, completion)
                    } catch (e) {
                      var ret = iterator['return']
                      if (ret !== undefined) anObject(ret.call(iterator))
                      throw e
                    }
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_iter-create.js':
                /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  var create = __webpack_require__(
                    /*! ./_object-create */ './node_modules/core-js/modules/_object-create.js'
                  )
                  var descriptor = __webpack_require__(
                    /*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js'
                  )
                  var setToStringTag = __webpack_require__(
                    /*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js'
                  )
                  var IteratorPrototype = {}

                  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                  __webpack_require__(
                    /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
                  )(
                    IteratorPrototype,
                    __webpack_require__(
                      /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
                    )('iterator'),
                    function() {
                      return this
                    }
                  )

                  module.exports = function(Constructor, NAME, next) {
                    Constructor.prototype = create(IteratorPrototype, {
                      next: descriptor(1, next)
                    })
                    setToStringTag(Constructor, NAME + ' Iterator')
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_iter-define.js':
                /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  var LIBRARY = __webpack_require__(
                    /*! ./_library */ './node_modules/core-js/modules/_library.js'
                  )
                  var $export = __webpack_require__(
                    /*! ./_export */ './node_modules/core-js/modules/_export.js'
                  )
                  var redefine = __webpack_require__(
                    /*! ./_redefine */ './node_modules/core-js/modules/_redefine.js'
                  )
                  var hide = __webpack_require__(
                    /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
                  )
                  var Iterators = __webpack_require__(
                    /*! ./_iterators */ './node_modules/core-js/modules/_iterators.js'
                  )
                  var $iterCreate = __webpack_require__(
                    /*! ./_iter-create */ './node_modules/core-js/modules/_iter-create.js'
                  )
                  var setToStringTag = __webpack_require__(
                    /*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js'
                  )
                  var getPrototypeOf = __webpack_require__(
                    /*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js'
                  )
                  var ITERATOR = __webpack_require__(
                    /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
                  )('iterator')
                  var BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
                  var FF_ITERATOR = '@@iterator'
                  var KEYS = 'keys'
                  var VALUES = 'values'

                  var returnThis = function() {
                    return this
                  }

                  module.exports = function(
                    Base,
                    NAME,
                    Constructor,
                    next,
                    DEFAULT,
                    IS_SET,
                    FORCED
                  ) {
                    $iterCreate(Constructor, NAME, next)
                    var getMethod = function(kind) {
                      if (!BUGGY && kind in proto) return proto[kind]
                      switch (kind) {
                        case KEYS:
                          return function keys() {
                            return new Constructor(this, kind)
                          }
                        case VALUES:
                          return function values() {
                            return new Constructor(this, kind)
                          }
                      }
                      return function entries() {
                        return new Constructor(this, kind)
                      }
                    }
                    var TAG = NAME + ' Iterator'
                    var DEF_VALUES = DEFAULT == VALUES
                    var VALUES_BUG = false
                    var proto = Base.prototype
                    var $native =
                      proto[ITERATOR] ||
                      proto[FF_ITERATOR] ||
                      (DEFAULT && proto[DEFAULT])
                    var $default = $native || getMethod(DEFAULT)
                    var $entries = DEFAULT
                      ? !DEF_VALUES
                        ? $default
                        : getMethod('entries')
                      : undefined
                    var $anyNative =
                      NAME == 'Array' ? proto.entries || $native : $native
                    var methods, key, IteratorPrototype
                    // Fix native
                    if ($anyNative) {
                      IteratorPrototype = getPrototypeOf(
                        $anyNative.call(new Base())
                      )
                      if (
                        IteratorPrototype !== Object.prototype &&
                        IteratorPrototype.next
                      ) {
                        // Set @@toStringTag to native iterators
                        setToStringTag(IteratorPrototype, TAG, true)
                        // fix for some old engines
                        if (
                          !LIBRARY &&
                          typeof IteratorPrototype[ITERATOR] != 'function'
                        )
                          hide(IteratorPrototype, ITERATOR, returnThis)
                      }
                    }
                    // fix Array#{values, @@iterator}.name in V8 / FF
                    if (DEF_VALUES && $native && $native.name !== VALUES) {
                      VALUES_BUG = true
                      $default = function values() {
                        return $native.call(this)
                      }
                    }
                    // Define iterator
                    if (
                      (!LIBRARY || FORCED) &&
                      (BUGGY || VALUES_BUG || !proto[ITERATOR])
                    ) {
                      hide(proto, ITERATOR, $default)
                    }
                    // Plug for library
                    Iterators[NAME] = $default
                    Iterators[TAG] = returnThis
                    if (DEFAULT) {
                      methods = {
                        values: DEF_VALUES ? $default : getMethod(VALUES),
                        keys: IS_SET ? $default : getMethod(KEYS),
                        entries: $entries
                      }
                      if (FORCED)
                        for (key in methods) {
                          if (!(key in proto))
                            redefine(proto, key, methods[key])
                        }
                      else
                        $export(
                          $export.P + $export.F * (BUGGY || VALUES_BUG),
                          NAME,
                          methods
                        )
                    }
                    return methods
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_iter-detect.js':
                /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var ITERATOR = __webpack_require__(
                    /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
                  )('iterator')
                  var SAFE_CLOSING = false

                  try {
                    var riter = [7][ITERATOR]()
                    riter['return'] = function() {
                      SAFE_CLOSING = true
                    }
                    // eslint-disable-next-line no-throw-literal
                    Array.from(riter, function() {
                      throw 2
                    })
                  } catch (e) {
                    /* empty */
                  }

                  module.exports = function(exec, skipClosing) {
                    if (!skipClosing && !SAFE_CLOSING) return false
                    var safe = false
                    try {
                      var arr = [7]
                      var iter = arr[ITERATOR]()
                      iter.next = function() {
                        return { done: (safe = true) }
                      }
                      arr[ITERATOR] = function() {
                        return iter
                      }
                      exec(arr)
                    } catch (e) {
                      /* empty */
                    }
                    return safe
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_iterators.js':
                /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  module.exports = {}

                  /***/
                },

              /***/ './node_modules/core-js/modules/_library.js':
                /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  module.exports = false

                  /***/
                },

              /***/ './node_modules/core-js/modules/_object-create.js':
                /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                  var anObject = __webpack_require__(
                    /*! ./_an-object */ './node_modules/core-js/modules/_an-object.js'
                  )
                  var dPs = __webpack_require__(
                    /*! ./_object-dps */ './node_modules/core-js/modules/_object-dps.js'
                  )
                  var enumBugKeys = __webpack_require__(
                    /*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js'
                  )
                  var IE_PROTO = __webpack_require__(
                    /*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js'
                  )('IE_PROTO')
                  var Empty = function() {
                    /* empty */
                  }
                  var PROTOTYPE = 'prototype'

                  // Create object with fake `null` prototype: use iframe Object with cleared prototype
                  var createDict = function() {
                    // Thrash, waste and sodomy: IE GC bug
                    var iframe = __webpack_require__(
                      /*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js'
                    )('iframe')
                    var i = enumBugKeys.length
                    var lt = '<'
                    var gt = '>'
                    var iframeDocument
                    iframe.style.display = 'none'
                    __webpack_require__(
                      /*! ./_html */ './node_modules/core-js/modules/_html.js'
                    ).appendChild(iframe)
                    iframe.src = 'javascript:' // eslint-disable-line no-script-url
                    // createDict = iframe.contentWindow.Object;
                    // html.removeChild(iframe);
                    iframeDocument = iframe.contentWindow.document
                    iframeDocument.open()
                    iframeDocument.write(
                      lt +
                        'script' +
                        gt +
                        'document.F=Object' +
                        lt +
                        '/script' +
                        gt
                    )
                    iframeDocument.close()
                    createDict = iframeDocument.F
                    while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]]
                    return createDict()
                  }

                  module.exports =
                    Object.create ||
                    function create(O, Properties) {
                      var result
                      if (O !== null) {
                        Empty[PROTOTYPE] = anObject(O)
                        result = new Empty()
                        Empty[PROTOTYPE] = null
                        // add "__proto__" for Object.getPrototypeOf polyfill
                        result[IE_PROTO] = O
                      } else result = createDict()
                      return Properties === undefined
                        ? result
                        : dPs(result, Properties)
                    }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_object-dp.js':
                /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var anObject = __webpack_require__(
                    /*! ./_an-object */ './node_modules/core-js/modules/_an-object.js'
                  )
                  var IE8_DOM_DEFINE = __webpack_require__(
                    /*! ./_ie8-dom-define */ './node_modules/core-js/modules/_ie8-dom-define.js'
                  )
                  var toPrimitive = __webpack_require__(
                    /*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js'
                  )
                  var dP = Object.defineProperty

                  exports.f = __webpack_require__(
                    /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
                  )
                    ? Object.defineProperty
                    : function defineProperty(O, P, Attributes) {
                        anObject(O)
                        P = toPrimitive(P, true)
                        anObject(Attributes)
                        if (IE8_DOM_DEFINE)
                          try {
                            return dP(O, P, Attributes)
                          } catch (e) {
                            /* empty */
                          }
                        if ('get' in Attributes || 'set' in Attributes)
                          throw TypeError('Accessors not supported!')
                        if ('value' in Attributes) O[P] = Attributes.value
                        return O
                      }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_object-dps.js':
                /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var dP = __webpack_require__(
                    /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
                  )
                  var anObject = __webpack_require__(
                    /*! ./_an-object */ './node_modules/core-js/modules/_an-object.js'
                  )
                  var getKeys = __webpack_require__(
                    /*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js'
                  )

                  module.exports = __webpack_require__(
                    /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
                  )
                    ? Object.defineProperties
                    : function defineProperties(O, Properties) {
                        anObject(O)
                        var keys = getKeys(Properties)
                        var length = keys.length
                        var i = 0
                        var P
                        while (length > i)
                          dP.f(O, (P = keys[i++]), Properties[P])
                        return O
                      }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_object-gpo.js':
                /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                  var has = __webpack_require__(
                    /*! ./_has */ './node_modules/core-js/modules/_has.js'
                  )
                  var toObject = __webpack_require__(
                    /*! ./_to-object */ './node_modules/core-js/modules/_to-object.js'
                  )
                  var IE_PROTO = __webpack_require__(
                    /*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js'
                  )('IE_PROTO')
                  var ObjectProto = Object.prototype

                  module.exports =
                    Object.getPrototypeOf ||
                    function(O) {
                      O = toObject(O)
                      if (has(O, IE_PROTO)) return O[IE_PROTO]
                      if (
                        typeof O.constructor == 'function' &&
                        O instanceof O.constructor
                      ) {
                        return O.constructor.prototype
                      }
                      return O instanceof Object ? ObjectProto : null
                    }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_object-keys-internal.js':
                /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var has = __webpack_require__(
                    /*! ./_has */ './node_modules/core-js/modules/_has.js'
                  )
                  var toIObject = __webpack_require__(
                    /*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js'
                  )
                  var arrayIndexOf = __webpack_require__(
                    /*! ./_array-includes */ './node_modules/core-js/modules/_array-includes.js'
                  )(false)
                  var IE_PROTO = __webpack_require__(
                    /*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js'
                  )('IE_PROTO')

                  module.exports = function(object, names) {
                    var O = toIObject(object)
                    var i = 0
                    var result = []
                    var key
                    for (key in O)
                      if (key != IE_PROTO) has(O, key) && result.push(key)
                    // Don't enum bug & hidden keys
                    while (names.length > i)
                      if (has(O, (key = names[i++]))) {
                        ~arrayIndexOf(result, key) || result.push(key)
                      }
                    return result
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_object-keys.js':
                /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                  var $keys = __webpack_require__(
                    /*! ./_object-keys-internal */ './node_modules/core-js/modules/_object-keys-internal.js'
                  )
                  var enumBugKeys = __webpack_require__(
                    /*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js'
                  )

                  module.exports =
                    Object.keys ||
                    function keys(O) {
                      return $keys(O, enumBugKeys)
                    }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_property-desc.js':
                /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  module.exports = function(bitmap, value) {
                    return {
                      enumerable: !(bitmap & 1),
                      configurable: !(bitmap & 2),
                      writable: !(bitmap & 4),
                      value: value
                    }
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_redefine.js':
                /*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var global = __webpack_require__(
                    /*! ./_global */ './node_modules/core-js/modules/_global.js'
                  )
                  var hide = __webpack_require__(
                    /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
                  )
                  var has = __webpack_require__(
                    /*! ./_has */ './node_modules/core-js/modules/_has.js'
                  )
                  var SRC = __webpack_require__(
                    /*! ./_uid */ './node_modules/core-js/modules/_uid.js'
                  )('src')
                  var TO_STRING = 'toString'
                  var $toString = Function[TO_STRING]
                  var TPL = ('' + $toString).split(TO_STRING)

                  __webpack_require__(
                    /*! ./_core */ './node_modules/core-js/modules/_core.js'
                  ).inspectSource = function(it) {
                    return $toString.call(it)
                  }

                  ;(module.exports = function(O, key, val, safe) {
                    var isFunction = typeof val == 'function'
                    if (isFunction) has(val, 'name') || hide(val, 'name', key)
                    if (O[key] === val) return
                    if (isFunction)
                      has(val, SRC) ||
                        hide(
                          val,
                          SRC,
                          O[key] ? '' + O[key] : TPL.join(String(key))
                        )
                    if (O === global) {
                      O[key] = val
                    } else if (!safe) {
                      delete O[key]
                      hide(O, key, val)
                    } else if (O[key]) {
                      O[key] = val
                    } else {
                      hide(O, key, val)
                    }
                    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
                  })(Function.prototype, TO_STRING, function toString() {
                    return (
                      (typeof this == 'function' && this[SRC]) ||
                      $toString.call(this)
                    )
                  })

                  /***/
                },

              /***/ './node_modules/core-js/modules/_set-to-string-tag.js':
                /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var def = __webpack_require__(
                    /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
                  ).f
                  var has = __webpack_require__(
                    /*! ./_has */ './node_modules/core-js/modules/_has.js'
                  )
                  var TAG = __webpack_require__(
                    /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
                  )('toStringTag')

                  module.exports = function(it, tag, stat) {
                    if (it && !has((it = stat ? it : it.prototype), TAG))
                      def(it, TAG, { configurable: true, value: tag })
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_shared-key.js':
                /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var shared = __webpack_require__(
                    /*! ./_shared */ './node_modules/core-js/modules/_shared.js'
                  )('keys')
                  var uid = __webpack_require__(
                    /*! ./_uid */ './node_modules/core-js/modules/_uid.js'
                  )
                  module.exports = function(key) {
                    return shared[key] || (shared[key] = uid(key))
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_shared.js':
                /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var core = __webpack_require__(
                    /*! ./_core */ './node_modules/core-js/modules/_core.js'
                  )
                  var global = __webpack_require__(
                    /*! ./_global */ './node_modules/core-js/modules/_global.js'
                  )
                  var SHARED = '__core-js_shared__'
                  var store = global[SHARED] || (global[SHARED] = {})

                  ;(module.exports = function(key, value) {
                    return (
                      store[key] ||
                      (store[key] = value !== undefined ? value : {})
                    )
                  })('versions', []).push({
                    version: core.version,
                    mode: __webpack_require__(
                      /*! ./_library */ './node_modules/core-js/modules/_library.js'
                    )
                      ? 'pure'
                      : 'global',
                    copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
                  })

                  /***/
                },

              /***/ './node_modules/core-js/modules/_string-at.js':
                /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var toInteger = __webpack_require__(
                    /*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js'
                  )
                  var defined = __webpack_require__(
                    /*! ./_defined */ './node_modules/core-js/modules/_defined.js'
                  )
                  // true  -> String#at
                  // false -> String#codePointAt
                  module.exports = function(TO_STRING) {
                    return function(that, pos) {
                      var s = String(defined(that))
                      var i = toInteger(pos)
                      var l = s.length
                      var a, b
                      if (i < 0 || i >= l) return TO_STRING ? '' : undefined
                      a = s.charCodeAt(i)
                      return a < 0xd800 ||
                        a > 0xdbff ||
                        i + 1 === l ||
                        (b = s.charCodeAt(i + 1)) < 0xdc00 ||
                        b > 0xdfff
                        ? TO_STRING
                          ? s.charAt(i)
                          : a
                        : TO_STRING
                        ? s.slice(i, i + 2)
                        : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000
                    }
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_to-absolute-index.js':
                /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var toInteger = __webpack_require__(
                    /*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js'
                  )
                  var max = Math.max
                  var min = Math.min
                  module.exports = function(index, length) {
                    index = toInteger(index)
                    return index < 0
                      ? max(index + length, 0)
                      : min(index, length)
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_to-integer.js':
                /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  // 7.1.4 ToInteger
                  var ceil = Math.ceil
                  var floor = Math.floor
                  module.exports = function(it) {
                    return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it)
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_to-iobject.js':
                /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // to indexed object, toObject with fallback for non-array-like ES3 strings
                  var IObject = __webpack_require__(
                    /*! ./_iobject */ './node_modules/core-js/modules/_iobject.js'
                  )
                  var defined = __webpack_require__(
                    /*! ./_defined */ './node_modules/core-js/modules/_defined.js'
                  )
                  module.exports = function(it) {
                    return IObject(defined(it))
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_to-length.js':
                /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // 7.1.15 ToLength
                  var toInteger = __webpack_require__(
                    /*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js'
                  )
                  var min = Math.min
                  module.exports = function(it) {
                    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0 // pow(2, 53) - 1 == 9007199254740991
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_to-object.js':
                /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // 7.1.13 ToObject(argument)
                  var defined = __webpack_require__(
                    /*! ./_defined */ './node_modules/core-js/modules/_defined.js'
                  )
                  module.exports = function(it) {
                    return Object(defined(it))
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_to-primitive.js':
                /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  // 7.1.1 ToPrimitive(input [, PreferredType])
                  var isObject = __webpack_require__(
                    /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
                  )
                  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                  // and the second argument - flag - preferred type is a string
                  module.exports = function(it, S) {
                    if (!isObject(it)) return it
                    var fn, val
                    if (
                      S &&
                      typeof (fn = it.toString) == 'function' &&
                      !isObject((val = fn.call(it)))
                    )
                      return val
                    if (
                      typeof (fn = it.valueOf) == 'function' &&
                      !isObject((val = fn.call(it)))
                    )
                      return val
                    if (
                      !S &&
                      typeof (fn = it.toString) == 'function' &&
                      !isObject((val = fn.call(it)))
                    )
                      return val
                    throw TypeError("Can't convert object to primitive value")
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_uid.js':
                /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
                /*! no static exports found */
                /***/ function(module, exports) {
                  var id = 0
                  var px = Math.random()
                  module.exports = function(key) {
                    return 'Symbol('.concat(
                      key === undefined ? '' : key,
                      ')_',
                      (++id + px).toString(36)
                    )
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/_wks.js':
                /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var store = __webpack_require__(
                    /*! ./_shared */ './node_modules/core-js/modules/_shared.js'
                  )('wks')
                  var uid = __webpack_require__(
                    /*! ./_uid */ './node_modules/core-js/modules/_uid.js'
                  )
                  var Symbol = __webpack_require__(
                    /*! ./_global */ './node_modules/core-js/modules/_global.js'
                  ).Symbol
                  var USE_SYMBOL = typeof Symbol == 'function'

                  var $exports = (module.exports = function(name) {
                    return (
                      store[name] ||
                      (store[name] =
                        (USE_SYMBOL && Symbol[name]) ||
                        (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
                    )
                  })

                  $exports.store = store

                  /***/
                },

              /***/ './node_modules/core-js/modules/core.get-iterator-method.js':
                /*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  var classof = __webpack_require__(
                    /*! ./_classof */ './node_modules/core-js/modules/_classof.js'
                  )
                  var ITERATOR = __webpack_require__(
                    /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
                  )('iterator')
                  var Iterators = __webpack_require__(
                    /*! ./_iterators */ './node_modules/core-js/modules/_iterators.js'
                  )
                  module.exports = __webpack_require__(
                    /*! ./_core */ './node_modules/core-js/modules/_core.js'
                  ).getIteratorMethod = function(it) {
                    if (it != undefined)
                      return (
                        it[ITERATOR] ||
                        it['@@iterator'] ||
                        Iterators[classof(it)]
                      )
                  }

                  /***/
                },

              /***/ './node_modules/core-js/modules/es6.array.from.js':
                /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  var ctx = __webpack_require__(
                    /*! ./_ctx */ './node_modules/core-js/modules/_ctx.js'
                  )
                  var $export = __webpack_require__(
                    /*! ./_export */ './node_modules/core-js/modules/_export.js'
                  )
                  var toObject = __webpack_require__(
                    /*! ./_to-object */ './node_modules/core-js/modules/_to-object.js'
                  )
                  var call = __webpack_require__(
                    /*! ./_iter-call */ './node_modules/core-js/modules/_iter-call.js'
                  )
                  var isArrayIter = __webpack_require__(
                    /*! ./_is-array-iter */ './node_modules/core-js/modules/_is-array-iter.js'
                  )
                  var toLength = __webpack_require__(
                    /*! ./_to-length */ './node_modules/core-js/modules/_to-length.js'
                  )
                  var createProperty = __webpack_require__(
                    /*! ./_create-property */ './node_modules/core-js/modules/_create-property.js'
                  )
                  var getIterFn = __webpack_require__(
                    /*! ./core.get-iterator-method */ './node_modules/core-js/modules/core.get-iterator-method.js'
                  )

                  $export(
                    $export.S +
                      $export.F *
                        !__webpack_require__(
                          /*! ./_iter-detect */ './node_modules/core-js/modules/_iter-detect.js'
                        )(function(iter) {
                          Array.from(iter)
                        }),
                    'Array',
                    {
                      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                      from: function from(
                        arrayLike /* , mapfn = undefined, thisArg = undefined */
                      ) {
                        var O = toObject(arrayLike)
                        var C = typeof this == 'function' ? this : Array
                        var aLen = arguments.length
                        var mapfn = aLen > 1 ? arguments[1] : undefined
                        var mapping = mapfn !== undefined
                        var index = 0
                        var iterFn = getIterFn(O)
                        var length, result, step, iterator
                        if (mapping)
                          mapfn = ctx(
                            mapfn,
                            aLen > 2 ? arguments[2] : undefined,
                            2
                          )
                        // if object isn't iterable or it's array with default iterator - use simple case
                        if (
                          iterFn != undefined &&
                          !(C == Array && isArrayIter(iterFn))
                        ) {
                          for (
                            iterator = iterFn.call(O), result = new C();
                            !(step = iterator.next()).done;
                            index++
                          ) {
                            createProperty(
                              result,
                              index,
                              mapping
                                ? call(
                                    iterator,
                                    mapfn,
                                    [step.value, index],
                                    true
                                  )
                                : step.value
                            )
                          }
                        } else {
                          length = toLength(O.length)
                          for (
                            result = new C(length);
                            length > index;
                            index++
                          ) {
                            createProperty(
                              result,
                              index,
                              mapping ? mapfn(O[index], index) : O[index]
                            )
                          }
                        }
                        result.length = index
                        return result
                      }
                    }
                  )

                  /***/
                },

              /***/ './node_modules/core-js/modules/es6.string.iterator.js':
                /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  var $at = __webpack_require__(
                    /*! ./_string-at */ './node_modules/core-js/modules/_string-at.js'
                  )(true)

                  // 21.1.3.27 String.prototype[@@iterator]()
                  __webpack_require__(
                    /*! ./_iter-define */ './node_modules/core-js/modules/_iter-define.js'
                  )(
                    String,
                    'String',
                    function(iterated) {
                      this._t = String(iterated) // target
                      this._i = 0 // next index
                      // 21.1.5.2.1 %StringIteratorPrototype%.next()
                    },
                    function() {
                      var O = this._t
                      var index = this._i
                      var point
                      if (index >= O.length)
                        return { value: undefined, done: true }
                      point = $at(O, index)
                      this._i += point.length
                      return { value: point, done: false }
                    }
                  )

                  /***/
                },

              /***/ './src/default-attrs.json':
                /*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
                /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
                /***/ function(module) {
                  module.exports = {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    stroke: 'currentColor',
                    'stroke-width': 2,
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round'
                  }

                  /***/
                },

              /***/ './src/icon.js':
                /*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  Object.defineProperty(exports, '__esModule', {
                    value: true
                  })

                  var _extends =
                    Object.assign ||
                    function(target) {
                      for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i]
                        for (var key in source) {
                          if (
                            Object.prototype.hasOwnProperty.call(source, key)
                          ) {
                            target[key] = source[key]
                          }
                        }
                      }
                      return target
                    }

                  var _createClass = (function() {
                    function defineProperties(target, props) {
                      for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i]
                        descriptor.enumerable = descriptor.enumerable || false
                        descriptor.configurable = true
                        if ('value' in descriptor) descriptor.writable = true
                        Object.defineProperty(
                          target,
                          descriptor.key,
                          descriptor
                        )
                      }
                    }
                    return function(Constructor, protoProps, staticProps) {
                      if (protoProps)
                        defineProperties(Constructor.prototype, protoProps)
                      if (staticProps)
                        defineProperties(Constructor, staticProps)
                      return Constructor
                    }
                  })()

                  var _dedupe = __webpack_require__(
                    /*! classnames/dedupe */ './node_modules/classnames/dedupe.js'
                  )

                  var _dedupe2 = _interopRequireDefault(_dedupe)

                  var _defaultAttrs = __webpack_require__(
                    /*! ./default-attrs.json */ './src/default-attrs.json'
                  )

                  var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs)

                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                  }

                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError('Cannot call a class as a function')
                    }
                  }

                  var Icon = (function() {
                    function Icon(name, contents) {
                      var tags =
                        arguments.length > 2 && arguments[2] !== undefined
                          ? arguments[2]
                          : []

                      _classCallCheck(this, Icon)

                      this.name = name
                      this.contents = contents
                      this.tags = tags
                      this.attrs = _extends({}, _defaultAttrs2.default, {
                        class: 'feather feather-' + name
                      })
                    }

                    /**
                     * Create an SVG string.
                     * @param {Object} attrs
                     * @returns {string}
                     */

                    _createClass(Icon, [
                      {
                        key: 'toSvg',
                        value: function toSvg() {
                          var attrs =
                            arguments.length > 0 && arguments[0] !== undefined
                              ? arguments[0]
                              : {}

                          var combinedAttrs = _extends({}, this.attrs, attrs, {
                            class: (0, _dedupe2.default)(
                              this.attrs.class,
                              attrs.class
                            )
                          })

                          return (
                            '<svg ' +
                            attrsToString(combinedAttrs) +
                            '>' +
                            this.contents +
                            '</svg>'
                          )
                        }

                        /**
                         * Return string representation of an `Icon`.
                         *
                         * Added for backward compatibility. If old code expects `feather.icons.<name>`
                         * to be a string, `toString()` will get implicitly called.
                         *
                         * @returns {string}
                         */
                      },
                      {
                        key: 'toString',
                        value: function toString() {
                          return this.contents
                        }
                      }
                    ])

                    return Icon
                  })()

                  /**
                   * Convert attributes object to string of HTML attributes.
                   * @param {Object} attrs
                   * @returns {string}
                   */

                  function attrsToString(attrs) {
                    return Object.keys(attrs)
                      .map(function(key) {
                        return key + '="' + attrs[key] + '"'
                      })
                      .join(' ')
                  }

                  exports.default = Icon

                  /***/
                },

              /***/ './src/icons.js':
                /*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  Object.defineProperty(exports, '__esModule', {
                    value: true
                  })

                  var _icon = __webpack_require__(/*! ./icon */ './src/icon.js')

                  var _icon2 = _interopRequireDefault(_icon)

                  var _icons = __webpack_require__(
                    /*! ../dist/icons.json */ './dist/icons.json'
                  )

                  var _icons2 = _interopRequireDefault(_icons)

                  var _tags = __webpack_require__(
                    /*! ./tags.json */ './src/tags.json'
                  )

                  var _tags2 = _interopRequireDefault(_tags)

                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                  }

                  exports.default = Object.keys(_icons2.default)
                    .map(function(key) {
                      return new _icon2.default(
                        key,
                        _icons2.default[key],
                        _tags2.default[key]
                      )
                    })
                    .reduce(function(object, icon) {
                      object[icon.name] = icon
                      return object
                    }, {})

                  /***/
                },

              /***/ './src/index.js':
                /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  var _icons = __webpack_require__(
                    /*! ./icons */ './src/icons.js'
                  )

                  var _icons2 = _interopRequireDefault(_icons)

                  var _toSvg = __webpack_require__(
                    /*! ./to-svg */ './src/to-svg.js'
                  )

                  var _toSvg2 = _interopRequireDefault(_toSvg)

                  var _replace = __webpack_require__(
                    /*! ./replace */ './src/replace.js'
                  )

                  var _replace2 = _interopRequireDefault(_replace)

                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                  }

                  module.exports = {
                    icons: _icons2.default,
                    toSvg: _toSvg2.default,
                    replace: _replace2.default
                  }

                  /***/
                },

              /***/ './src/replace.js':
                /*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  Object.defineProperty(exports, '__esModule', {
                    value: true
                  })

                  var _extends =
                    Object.assign ||
                    function(target) {
                      for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i]
                        for (var key in source) {
                          if (
                            Object.prototype.hasOwnProperty.call(source, key)
                          ) {
                            target[key] = source[key]
                          }
                        }
                      }
                      return target
                    } /* eslint-env browser */

                  var _dedupe = __webpack_require__(
                    /*! classnames/dedupe */ './node_modules/classnames/dedupe.js'
                  )

                  var _dedupe2 = _interopRequireDefault(_dedupe)

                  var _icons = __webpack_require__(
                    /*! ./icons */ './src/icons.js'
                  )

                  var _icons2 = _interopRequireDefault(_icons)

                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                  }

                  /**
                   * Replace all HTML elements that have a `data-feather` attribute with SVG markup
                   * corresponding to the element's `data-feather` attribute value.
                   * @param {Object} attrs
                   */
                  function replace() {
                    var attrs =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : {}

                    if (typeof document === 'undefined') {
                      throw new Error(
                        '`feather.replace()` only works in a browser environment.'
                      )
                    }

                    var elementsToReplace = document.querySelectorAll(
                      '[data-feather]'
                    )

                    Array.from(elementsToReplace).forEach(function(element) {
                      return replaceElement(element, attrs)
                    })
                  }

                  /**
                   * Replace a single HTML element with SVG markup
                   * corresponding to the element's `data-feather` attribute value.
                   * @param {HTMLElement} element
                   * @param {Object} attrs
                   */
                  function replaceElement(element) {
                    var attrs =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {}

                    var elementAttrs = getAttrs(element)
                    var name = elementAttrs['data-feather']
                    delete elementAttrs['data-feather']

                    var svgString = _icons2.default[name].toSvg(
                      _extends({}, attrs, elementAttrs, {
                        class: (0, _dedupe2.default)(
                          attrs.class,
                          elementAttrs.class
                        )
                      })
                    )
                    var svgDocument = new DOMParser().parseFromString(
                      svgString,
                      'image/svg+xml'
                    )
                    var svgElement = svgDocument.querySelector('svg')

                    element.parentNode.replaceChild(svgElement, element)
                  }

                  /**
                   * Get the attributes of an HTML element.
                   * @param {HTMLElement} element
                   * @returns {Object}
                   */
                  function getAttrs(element) {
                    return Array.from(element.attributes).reduce(function(
                      attrs,
                      attr
                    ) {
                      attrs[attr.name] = attr.value
                      return attrs
                    },
                    {})
                  }

                  exports.default = replace

                  /***/
                },

              /***/ './src/tags.json':
                /*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
                /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, at-sign, award, aperture, bell, bell-off, bluetooth, book-open, book, bookmark, briefcase, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, coffee, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, film, folder-minus, folder-plus, folder, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, global, hard-drive, hash, headphones, heart, help-circle, home, image, inbox, instagram, life-bouy, linkedin, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, monitor, moon, more-horizontal, more-vertical, move, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, play, play-circle, plus, plus-circle, plus-square, pocket, power, radio, rewind, rss, save, send, settings, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slash, sliders, smile, speaker, star, sun, sunrise, sunset, tag, target, terminal, thumbs-down, thumbs-up, toggle-left, toggle-right, trash, trash-2, triangle, truck, twitter, umbrella, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wind, x-circle, x-square, x, youtube, zap-off, zap, default */
                /***/ function(module) {
                  module.exports = {
                    activity: ['pulse', 'health', 'action', 'motion'],
                    airplay: ['stream', 'cast', 'mirroring'],
                    'alert-circle': ['warning'],
                    'alert-octagon': ['warning'],
                    'alert-triangle': ['warning'],
                    'at-sign': ['mention'],
                    award: ['achievement', 'badge'],
                    aperture: ['camera', 'photo'],
                    bell: ['alarm', 'notification'],
                    'bell-off': ['alarm', 'notification', 'silent'],
                    bluetooth: ['wireless'],
                    'book-open': ['read'],
                    book: ['read', 'dictionary', 'booklet', 'magazine'],
                    bookmark: ['read', 'clip', 'marker', 'tag'],
                    briefcase: ['work', 'bag', 'baggage', 'folder'],
                    clipboard: ['copy'],
                    clock: ['time', 'watch', 'alarm'],
                    'cloud-drizzle': ['weather', 'shower'],
                    'cloud-lightning': ['weather', 'bolt'],
                    'cloud-rain': ['weather'],
                    'cloud-snow': ['weather', 'blizzard'],
                    cloud: ['weather'],
                    codepen: ['logo'],
                    coffee: [
                      'drink',
                      'cup',
                      'mug',
                      'tea',
                      'cafe',
                      'hot',
                      'beverage'
                    ],
                    command: ['keyboard', 'cmd'],
                    compass: ['navigation', 'safari', 'travel'],
                    copy: ['clone', 'duplicate'],
                    'corner-down-left': ['arrow'],
                    'corner-down-right': ['arrow'],
                    'corner-left-down': ['arrow'],
                    'corner-left-up': ['arrow'],
                    'corner-right-down': ['arrow'],
                    'corner-right-up': ['arrow'],
                    'corner-up-left': ['arrow'],
                    'corner-up-right': ['arrow'],
                    'credit-card': ['purchase', 'payment', 'cc'],
                    crop: ['photo', 'image'],
                    crosshair: ['aim', 'target'],
                    database: ['storage'],
                    delete: ['remove'],
                    disc: ['album', 'cd', 'dvd', 'music'],
                    'dollar-sign': ['currency', 'money', 'payment'],
                    droplet: ['water'],
                    edit: ['pencil', 'change'],
                    'edit-2': ['pencil', 'change'],
                    'edit-3': ['pencil', 'change'],
                    eye: ['view', 'watch'],
                    'eye-off': ['view', 'watch'],
                    'external-link': ['outbound'],
                    facebook: ['logo'],
                    'fast-forward': ['music'],
                    film: ['movie', 'video'],
                    'folder-minus': ['directory'],
                    'folder-plus': ['directory'],
                    folder: ['directory'],
                    frown: ['emoji', 'face', 'bad', 'sad', 'emotion'],
                    gift: ['present', 'box', 'birthday', 'party'],
                    'git-branch': ['code', 'version control'],
                    'git-commit': ['code', 'version control'],
                    'git-merge': ['code', 'version control'],
                    'git-pull-request': ['code', 'version control'],
                    github: ['logo', 'version control'],
                    gitlab: ['logo', 'version control'],
                    global: ['world', 'browser', 'language', 'translate'],
                    'hard-drive': ['computer', 'server'],
                    hash: ['hashtag', 'number', 'pound'],
                    headphones: ['music', 'audio'],
                    heart: ['like', 'love'],
                    'help-circle': ['question mark'],
                    home: ['house'],
                    image: ['picture'],
                    inbox: ['email'],
                    instagram: ['logo', 'camera'],
                    'life-bouy': ['help', 'life ring', 'support'],
                    linkedin: ['logo'],
                    lock: ['security', 'password'],
                    'log-in': ['sign in', 'arrow'],
                    'log-out': ['sign out', 'arrow'],
                    mail: ['email'],
                    'map-pin': ['location', 'navigation', 'travel', 'marker'],
                    map: ['location', 'navigation', 'travel'],
                    maximize: ['fullscreen'],
                    'maximize-2': ['fullscreen', 'arrows'],
                    meh: ['emoji', 'face', 'neutral', 'emotion'],
                    menu: ['bars', 'navigation', 'hamburger'],
                    'message-circle': ['comment', 'chat'],
                    'message-square': ['comment', 'chat'],
                    'mic-off': ['record'],
                    mic: ['record'],
                    minimize: ['exit fullscreen'],
                    'minimize-2': ['exit fullscreen', 'arrows'],
                    monitor: ['tv'],
                    moon: ['dark', 'night'],
                    'more-horizontal': ['ellipsis'],
                    'more-vertical': ['ellipsis'],
                    move: ['arrows'],
                    navigation: ['location', 'travel'],
                    'navigation-2': ['location', 'travel'],
                    octagon: ['stop'],
                    package: ['box'],
                    paperclip: ['attachment'],
                    pause: ['music', 'stop'],
                    'pause-circle': ['music', 'stop'],
                    play: ['music', 'start'],
                    'play-circle': ['music', 'start'],
                    plus: ['add', 'new'],
                    'plus-circle': ['add', 'new'],
                    'plus-square': ['add', 'new'],
                    pocket: ['logo', 'save'],
                    power: ['on', 'off'],
                    radio: ['signal'],
                    rewind: ['music'],
                    rss: ['feed', 'subscribe'],
                    save: ['floppy disk'],
                    send: ['message', 'mail', 'paper airplane'],
                    settings: ['cog', 'edit', 'gear', 'preferences'],
                    shield: ['security'],
                    'shield-off': ['security'],
                    'shopping-bag': ['ecommerce', 'cart', 'purchase', 'store'],
                    'shopping-cart': ['ecommerce', 'cart', 'purchase', 'store'],
                    shuffle: ['music'],
                    'skip-back': ['music'],
                    'skip-forward': ['music'],
                    slash: ['ban', 'no'],
                    sliders: ['settings', 'controls'],
                    smile: ['emoji', 'face', 'happy', 'good', 'emotion'],
                    speaker: ['music'],
                    star: ['bookmark', 'favorite', 'like'],
                    sun: ['brightness', 'weather', 'light'],
                    sunrise: ['weather'],
                    sunset: ['weather'],
                    tag: ['label'],
                    target: ['bullseye'],
                    terminal: ['code', 'command line'],
                    'thumbs-down': ['dislike', 'bad'],
                    'thumbs-up': ['like', 'good'],
                    'toggle-left': ['on', 'off', 'switch'],
                    'toggle-right': ['on', 'off', 'switch'],
                    trash: ['garbage', 'delete', 'remove'],
                    'trash-2': ['garbage', 'delete', 'remove'],
                    triangle: ['delta'],
                    truck: ['delivery', 'van', 'shipping'],
                    twitter: ['logo'],
                    umbrella: ['rain', 'weather'],
                    'video-off': ['camera', 'movie', 'film'],
                    video: ['camera', 'movie', 'film'],
                    voicemail: ['phone'],
                    volume: ['music', 'sound', 'mute'],
                    'volume-1': ['music', 'sound'],
                    'volume-2': ['music', 'sound'],
                    'volume-x': ['music', 'sound', 'mute'],
                    watch: ['clock', 'time'],
                    wind: ['weather', 'air'],
                    'x-circle': [
                      'cancel',
                      'close',
                      'delete',
                      'remove',
                      'times'
                    ],
                    'x-square': [
                      'cancel',
                      'close',
                      'delete',
                      'remove',
                      'times'
                    ],
                    x: ['cancel', 'close', 'delete', 'remove', 'times'],
                    youtube: ['logo', 'video', 'play'],
                    'zap-off': ['flash', 'camera', 'lightning'],
                    zap: ['flash', 'camera', 'lightning']
                  }

                  /***/
                },

              /***/ './src/to-svg.js':
                /*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  'use strict'

                  Object.defineProperty(exports, '__esModule', {
                    value: true
                  })

                  var _icons = __webpack_require__(
                    /*! ./icons */ './src/icons.js'
                  )

                  var _icons2 = _interopRequireDefault(_icons)

                  function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                  }

                  /**
                   * Create an SVG string.
                   * @deprecated
                   * @param {string} name
                   * @param {Object} attrs
                   * @returns {string}
                   */
                  function toSvg(name) {
                    var attrs =
                      arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {}

                    console.warn(
                      'feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.'
                    )

                    if (!name) {
                      throw new Error(
                        'The required `key` (icon name) parameter is missing.'
                      )
                    }

                    if (!_icons2.default[name]) {
                      throw new Error(
                        "No icon matching '" +
                          name +
                          "'. See the complete list of icons at https://feathericons.com"
                      )
                    }

                    return _icons2.default[name].toSvg(attrs)
                  }

                  exports.default = toSvg

                  /***/
                },

              /***/ 0:
                /*!**************************************************!*\
  !*** multi core-js/fn/array/from ./src/index.js ***!
  \**************************************************/
                /*! no static exports found */
                /***/ function(module, exports, __webpack_require__) {
                  __webpack_require__(
                    /*! core-js/fn/array/from */ './node_modules/core-js/fn/array/from.js'
                  )
                  module.exports = __webpack_require__(
                    /*! /home/travis/build/feathericons/feather/src/index.js */ './src/index.js'
                  )

                  /***/
                }

              /******/
            }
          )
        })
      },
      {}
    ],
    'components/icon.js': [
      function(require, module, exports) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.default = void 0

        var _hybrids = require('hybrids')

        var _featherIcons = _interopRequireDefault(require('feather-icons'))

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        function _templateObject3() {
          var data = _taggedTemplateLiteral([
            '\n      <link\n        href="https://lib.baomitu.com/font-awesome/4.7.0/css/font-awesome.min.css"\n        rel="stylesheet"\n      />\n      <i class="',
            '" style="',
            '"></i>\n    '
          ])

          _templateObject3 = function _templateObject3() {
            return data
          }

          return data
        }

        function _templateObject2() {
          var data = _taggedTemplateLiteral([
            '\n        <span class="c-icon" innerHTML="',
            '"> </span>\n      '
          ])

          _templateObject2 = function _templateObject2() {
            return data
          }

          return data
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {}
            var ownKeys = Object.keys(source)
            if (typeof Object.getOwnPropertySymbols === 'function') {
              ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable
                })
              )
            }
            ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key])
            })
          }
          return target
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            })
          } else {
            obj[key] = value
          }
          return obj
        }

        function _templateObject() {
          var data = _taggedTemplateLiteral([
            '\n        <i class="',
            '" style="',
            '"> ',
            ' </i>\n      '
          ])

          _templateObject = function _templateObject() {
            return data
          }

          return data
        }

        function _taggedTemplateLiteral(strings, raw) {
          if (!raw) {
            raw = strings.slice(0)
          }
          return Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) }
            })
          )
        }

        var _default = {
          type: '',
          name: '',
          color: '',
          size: '1em',
          valign: 'baseline',
          ligature: false,
          iconType: function iconType(host) {
            return host.type || 'feather'
          },
          isSvg: function isSvg(host) {
            return host.iconType === 'feather'
          },
          classNames: function classNames(host) {
            var prefix =
              host.iconType !== '' ? ''.concat(host.iconType, '-') : ''
            return ['c-icon', host.iconType, prefix + host.name]
          },
          svgName: function svgName(host) {
            return host.isSvg ? 'feather-'.concat(host.name) : ''
          },
          iconColor: function iconColor(host) {
            if (!host.color) {
              return host.isSvg ? 'currentColor' : 'inherit'
            }

            return host.color
          },
          render: function render(host) {
            var ligature = host.ligature,
              isSvg = host.isSvg,
              svgName = host.svgName,
              name = host.name,
              iconType = host.iconType,
              classNames = host.classNames,
              iconColor = host.iconColor,
              size = host.size,
              valign = host.valign
            var style = {
              color: iconColor,
              fontSize: size,
              verticalAlign: valign
            }

            if (ligature) {
              return (0, _hybrids.html)(
                _templateObject(),
                iconType,
                style,
                name
              )
            }

            if (isSvg) {
              var icon = _featherIcons.default.icons[name]
              var origAttrs = icon.attrs
              icon.attrs = _objectSpread({}, icon.attrs, {
                width: size,
                height: size,
                stroke: iconColor,
                style: 'vertical-align: '.concat(valign)
              })
              var svg = icon.toSvg()
              icon.attrs = origAttrs
              return (0, _hybrids.html)(_templateObject2(), svg)
            }

            return (0, _hybrids.html)(_templateObject3(), classNames, style)
          }
        }
        exports.default = _default
      },
      {
        hybrids: '../node_modules/hybrids/esm/index.js',
        'feather-icons': '../node_modules/feather-icons/dist/feather.js'
      }
    ],
    'main.js': [
      function(require, module, exports) {
        'use strict'

        var _vue = _interopRequireDefault(require('vue'))

        var _App = _interopRequireDefault(require('./App.vue'))

        require('hybrids/shim')

        var _hybrids = require('hybrids')

        var _chip = _interopRequireDefault(require('./components/chip'))

        var _icon = _interopRequireDefault(require('./components/icon'))

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        // Add shims and polyfills
        ;(0, _hybrids.define)('c-chip', _chip.default)
        ;(0, _hybrids.define)('c-icon', _icon.default)
        _vue.default.config.productionTip = false
        _vue.default.config.ignoredElements = [/c-\w*/]
        new _vue.default({
          render: function render(h) {
            return h(_App.default)
          }
        }).$mount('#app')
      },
      {
        vue: '../node_modules/vue/dist/vue.runtime.esm.js',
        './App.vue': 'App.vue',
        'hybrids/shim': '../node_modules/hybrids/shim.js',
        hybrids: '../node_modules/hybrids/esm/index.js',
        './components/chip': 'components/chip.js',
        './components/icon': 'components/icon.js'
      }
    ],
    '../node_modules/parcel-bundler/src/builtins/hmr-runtime.js': [
      function(require, module, exports) {
        var global = arguments[3]
        var OVERLAY_ID = '__parcel__error__overlay__'
        var OldModule = module.bundle.Module

        function Module(moduleName) {
          OldModule.call(this, moduleName)
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function(fn) {
              this._acceptCallbacks.push(fn || function() {})
            },
            dispose: function(fn) {
              this._disposeCallbacks.push(fn)
            }
          }
          module.bundle.hotData = null
        }

        module.bundle.Module = Module
        var parent = module.bundle.parent

        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== 'undefined'
        ) {
          var hostname = '' || location.hostname
          var protocol = location.protocol === 'https:' ? 'wss' : 'ws'
          var ws = new WebSocket(
            protocol + '://' + hostname + ':' + '62075' + '/'
          )

          ws.onmessage = function(event) {
            var data = JSON.parse(event.data)

            if (data.type === 'update') {
              console.clear()
              data.assets.forEach(function(asset) {
                hmrApply(global.parcelRequire, asset)
              })
              data.assets.forEach(function(asset) {
                if (!asset.isNew) {
                  hmrAccept(global.parcelRequire, asset.id)
                }
              })
            }

            if (data.type === 'reload') {
              ws.close()

              ws.onclose = function() {
                location.reload()
              }
            }

            if (data.type === 'error-resolved') {
              console.log('[parcel] ✨ Error resolved')
              removeErrorOverlay()
            }

            if (data.type === 'error') {
              console.error(
                '[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack
              )
              removeErrorOverlay()
              var overlay = createErrorOverlay(data)
              document.body.appendChild(overlay)
            }
          }
        }

        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID)

          if (overlay) {
            overlay.remove()
          }
        }

        function createErrorOverlay(data) {
          var overlay = document.createElement('div')
          overlay.id = OVERLAY_ID // html encode message and stack trace

          var message = document.createElement('div')
          var stackTrace = document.createElement('pre')
          message.innerText = data.error.message
          stackTrace.innerText = data.error.stack
          overlay.innerHTML =
            '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
            '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
            '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' +
            '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' +
            message.innerHTML +
            '</div>' +
            '<pre>' +
            stackTrace.innerHTML +
            '</pre>' +
            '</div>'
          return overlay
        }

        function getParents(bundle, id) {
          var modules = bundle.modules

          if (!modules) {
            return []
          }

          var parents = []
          var k, d, dep

          for (k in modules) {
            for (d in modules[k][1]) {
              dep = modules[k][1][d]

              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              ) {
                parents.push(k)
              }
            }
          }

          if (bundle.parent) {
            parents = parents.concat(getParents(bundle.parent, id))
          }

          return parents
        }

        function hmrApply(bundle, asset) {
          var modules = bundle.modules

          if (!modules) {
            return
          }

          if (modules[asset.id] || !bundle.parent) {
            var fn = new Function(
              'require',
              'module',
              'exports',
              asset.generated.js
            )
            asset.isNew = !modules[asset.id]
            modules[asset.id] = [fn, asset.deps]
          } else if (bundle.parent) {
            hmrApply(bundle.parent, asset)
          }
        }

        function hmrAccept(bundle, id) {
          var modules = bundle.modules

          if (!modules) {
            return
          }

          if (!modules[id] && bundle.parent) {
            return hmrAccept(bundle.parent, id)
          }

          var cached = bundle.cache[id]
          bundle.hotData = {}

          if (cached) {
            cached.hot.data = bundle.hotData
          }

          if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
            cached.hot._disposeCallbacks.forEach(function(cb) {
              cb(bundle.hotData)
            })
          }

          delete bundle.cache[id]
          bundle(id)
          cached = bundle.cache[id]

          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            cached.hot._acceptCallbacks.forEach(function(cb) {
              cb()
            })

            return true
          }

          return getParents(global.parcelRequire, id).some(function(id) {
            return hmrAccept(global.parcelRequire, id)
          })
        }
      },
      {}
    ]
  },
  {},
  ['../node_modules/parcel-bundler/src/builtins/hmr-runtime.js', 'main.js'],
  null
)
//# sourceMappingURL=/main.1f19ae8e.map
