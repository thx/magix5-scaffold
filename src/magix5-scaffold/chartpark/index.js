//#norequires=true;
function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(interopRequireDefault);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule$1(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule$1(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule$1(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var _ = {};
var breaker = {};
var ArrayProto = Array.prototype,
    ObjProto = Object.prototype;
 // Create quick reference variables for speed access to core prototypes.

var push = ArrayProto.push,
    slice = ArrayProto.slice,
    concat = ArrayProto.concat,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty; // All **ECMAScript 5** native function implementations that we hope to use
// are declared here.

var nativeForEach = ArrayProto.forEach,
    nativeMap = ArrayProto.map,
    nativeFilter = ArrayProto.filter,
    nativeEvery = ArrayProto.every,
    nativeSome = ArrayProto.some,
    nativeIndexOf = ArrayProto.indexOf,
    nativeIsArray = Array.isArray,
    nativeKeys = Object.keys;

var shallowProperty = function shallowProperty(key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key];
  };
};

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var getLength = shallowProperty('length');

var isArrayLike = function isArrayLike(collection) {
  var length = getLength(collection);
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

_.values = function (obj) {
  var keys = _.keys(obj);

  var length = keys.length;
  var values = new Array(length);

  for (var i = 0; i < length; i++) {
    values[i] = obj[keys[i]];
  }

  return values;
};

_.keys = nativeKeys || function (obj) {
  if (obj !== Object(obj)) throw new TypeError('Invalid object');
  var keys = [];

  for (var key in obj) {
    if (_.has(obj, key)) keys.push(key);
  }

  return keys;
};

_.has = function (obj, key) {
  return hasOwnProperty.call(obj, key);
};

var each = _.each = _.forEach = function (obj, iterator, context) {
  if (obj == null) return;

  if (nativeForEach && obj.forEach === nativeForEach) {
    obj.forEach(iterator, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, length = obj.length; i < length; i++) {
      if (iterator.call(context, obj[i], i, obj) === breaker) return;
    }
  } else {
    var keys = _.keys(obj);

    for (var i = 0, length = keys.length; i < length; i++) {
      if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
    }
  }
};

_.compact = function (array) {
  return _.filter(array, _.identity);
};

_.filter = _.select = function (obj, iterator, context) {
  var results = [];
  if (obj == null) return results;
  if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
  each(obj, function (value, index, list) {
    if (iterator.call(context, value, index, list)) results.push(value);
  });
  return results;
};

each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (name) {
  _['is' + name] = function (obj) {
    return toString.call(obj) == '[object ' + name + ']';
  };
}); //if (!_.isArguments(arguments)) {

_.isArguments = function (obj) {
  return !!(obj && _.has(obj, 'callee'));
}; //}


{
  _.isFunction = function (obj) {
    return typeof obj === 'function';
  };
}

_.isFinite = function (obj) {
  return isFinite(obj) && !isNaN(parseFloat(obj));
};

_.isNaN = function (obj) {
  return _.isNumber(obj) && obj != +obj;
};

_.isBoolean = function (obj) {
  return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
};

_.isNull = function (obj) {
  return obj === null;
};

_.isEmpty = function (obj) {
  if (obj == null) return true;
  if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;

  for (var key in obj) {
    if (_.has(obj, key)) return false;
  }

  return true;
};

_.isElement = function (obj) {
  return !!(obj && obj.nodeType === 1);
};

_.isArray = nativeIsArray || function (obj) {
  return toString.call(obj) == '[object Array]';
};

_.isObject = function (obj) {
  return obj === Object(obj);
};

_.identity = function (value) {
  return value;
};

_.indexOf = function (array, item, isSorted) {
  if (array == null) return -1;
  var i = 0,
      length = array.length;

  if (isSorted) {
    if (typeof isSorted == 'number') {
      i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
    } else {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
  }

  if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item, isSorted);

  for (; i < length; i++) {
    if (array[i] === item) return i;
  }

  return -1;
};

_.isWindow = function (obj) {
  return obj != null && obj == obj.window;
}; // Internal implementation of a recursive `flatten` function.


var flatten = function flatten(input, shallow, output) {
  if (shallow && _.every(input, _.isArray)) {
    return concat.apply(output, input);
  }

  each(input, function (value) {
    if (_.isArray(value) || _.isArguments(value)) {
      shallow ? push.apply(output, value) : flatten(value, shallow, output);
    } else {
      output.push(value);
    }
  });
  return output;
}; // Flatten out an array, either recursively (by default), or just one level.


_.flatten = function (array, shallow) {
  return flatten(array, shallow, []);
};

_.every = _.all = function (obj, iterator, context) {
  iterator || (iterator = _.identity);
  var result = true;
  if (obj == null) return result;
  if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
  each(obj, function (value, index, list) {
    if (!(result = result && iterator.call(context, value, index, list))) return breaker;
  });
  return !!result;
}; // Return the minimum element (or element-based computation).


_.min = function (obj, iterator, context) {
  if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
    return Math.min.apply(Math, obj);
  }

  if (!iterator && _.isEmpty(obj)) return Infinity;
  var result = {
    computed: Infinity,
    value: Infinity
  };
  each(obj, function (value, index, list) {
    var computed = iterator ? iterator.call(context, value, index, list) : value;
    computed < result.computed && (result = {
      value: value,
      computed: computed
    });
  });
  return result.value;
}; // Return the maximum element or (element-based computation).
// Can't optimize arrays of integers longer than 65,535 elements.
// See [WebKit Bug 80797](https://bugs.webkit.org/show_bug.cgi?id=80797)


_.max = function (obj, iterator, context) {
  if (!iterator && _.isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
    return Math.max.apply(Math, obj);
  }

  if (!iterator && _.isEmpty(obj)) return -Infinity;
  var result = {
    computed: -Infinity,
    value: -Infinity
  };
  each(obj, function (value, index, list) {
    var computed = iterator ? iterator.call(context, value, index, list) : value;
    computed > result.computed && (result = {
      value: value,
      computed: computed
    });
  });
  return result.value;
}; // Return the first value which passes a truth test. Aliased as `detect`.


_.find = _.detect = function (obj, iterator, context) {
  var result;
  any(obj, function (value, index, list) {
    if (iterator.call(context, value, index, list)) {
      result = value;
      return true;
    }
  });
  return result;
}; // Determine if at least one element in the object matches a truth test.
// Delegates to **ECMAScript 5**'s native `some` if available.
// Aliased as `any`.


var any = _.some = _.any = function (obj, iterator, context) {
  iterator || (iterator = _.identity);
  var result = false;
  if (obj == null) return result;
  if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
  each(obj, function (value, index, list) {
    if (result || (result = iterator.call(context, value, index, list))) return breaker;
  });
  return !!result;
}; // Return a version of the array that does not contain the specified value(s).


_.without = function (array) {
  return _.difference(array, slice.call(arguments, 1));
}; // Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.


_.difference = function (array) {
  var rest = concat.apply(ArrayProto, slice.call(arguments, 1));
  return _.filter(array, function (value) {
    return !_.contains(rest, value);
  });
}; // Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// Aliased as `unique`.


_.uniq = _.unique = function (array, isSorted, iterator, context) {
  if (_.isFunction(isSorted)) {
    context = iterator;
    iterator = isSorted;
    isSorted = false;
  }

  var initial = iterator ? _.map(array, iterator, context) : array;
  var results = [];
  var seen = [];
  each(initial, function (value, index) {
    if (isSorted ? !index || seen[seen.length - 1] !== value : !_.contains(seen, value)) {
      seen.push(value);
      results.push(array[index]);
    }
  });
  return results;
}; // Return the results of applying the iterator to each element.
// Delegates to **ECMAScript 5**'s native `map` if available.


_.map = _.collect = function (obj, iterator, context) {
  var results = [];
  if (obj == null) return results;
  if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
  each(obj, function (value, index, list) {
    results.push(iterator.call(context, value, index, list));
  });
  return results;
}; // Determine if the array or object contains a given value (using `===`).
// Aliased as `include`.


_.contains = _.include = function (obj, target) {
  if (obj == null) return false;
  if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
  return any(obj, function (value) {
    return value === target;
  });
}; // Convenience version of a common use case of `map`: fetching a property.


_.pluck = function (obj, key) {
  return _.map(obj, function (value) {
    return value[key];
  });
}; // Return a random integer between min and max (inclusive).


_.random = function (min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }

  return min + Math.floor(Math.random() * (max - min + 1));
}; // Shuffle a collection.


_.shuffle = function (obj) {
  return _.sample(obj, Infinity);
};

_.sample = function (obj, n, guard) {
  if (n == null || guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    return obj[_.random(obj.length - 1)];
  }

  var sample = isArrayLike(obj) ? _.clone(obj) : _.values(obj);
  var length = getLength(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;

  for (var index = 0; index < n; index++) {
    var rand = _.random(index, last);

    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }

  return sample.slice(0, n);
};
/**
*
*???????????????extend??????????????????????????????true
*/


_.extend = function () {
  var options,
      name,
      src,
      copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }

  if (_typeof_1(target) !== "object" && !_.isFunction(target)) {
    target = {};
  }

  if (length === i) {
    target = this;
    --i;
  }

  for (; i < length; i++) {
    if ((options = arguments[i]) != null) {
      for (name in options) {
        src = target[name];
        copy = options[name];

        if (target === copy || copy === undefined) {
          continue;
        }

        if (deep && copy && _.isObject(copy) && copy.constructor === Object) {
          target[name] = _.extend(deep, src, copy);
        } else {
          target[name] = copy;
        }
      }
    }
  }

  return target;
};

_.clone = function (obj) {
  if (!_.isObject(obj)) return obj;
  return _.isArray(obj) ? obj.slice() : _.extend(true, {}, obj);
}; //********??????????????????????????????,????????????????????????,????????????????????????????????????  */
// compute euclidian modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation


_.euclideanModulo = function (n, m) {
  return (n % m + m) % m;
};

_.DEG2RAD = Math.PI / 180;
_.RAD2DEG = 180 / Math.PI;

_.degToRad = function (degrees) {
  return degrees * _.DEG2RAD;
};

_.radToDeg = function (radians) {
  return radians * _.RAD2DEG;
};

var RESOLUTION = typeof window !== 'undefined' ? window.devicePixelRatio : 1;

var addOrRmoveEventHand = function addOrRmoveEventHand(domHand, ieHand) {
  if (document[domHand]) {
    var eventDomFn = function eventDomFn(el, type, fn) {
      if (el.length) {
        for (var i = 0; i < el.length; i++) {
          eventDomFn(el[i], type, fn);
        }
      } else {
        el[domHand](type, fn, false);
      }
    };
    return eventDomFn;
  } else {
    var eventFn = function eventFn(el, type, fn) {
      if (el.length) {
        for (var i = 0; i < el.length; i++) {
          eventFn(el[i], type, fn);
        }
      } else {
        el[ieHand]("on" + type, function () {
          return fn.call(el, window.event);
        });
      }
    };
    return eventFn;
  }
};

var $ = {
  // dom??????????????????
  query: function query(el) {
    if (_.isString(el)) {
      return document.getElementById(el);
    }

    if (el.nodeType == 1) {
      //????????????element??????
      return el;
    }

    if (el.length) {
      return el[0];
    }

    return null;
  },
  offset: function offset(el) {
    var box = el.getBoundingClientRect(),
        doc = el.ownerDocument,
        body = doc.body,
        docElem = doc.documentElement,
        // for ie  
    clientTop = docElem.clientTop || body.clientTop || 0,
        clientLeft = docElem.clientLeft || body.clientLeft || 0,
        // In Internet Explorer 7 getBoundingClientRect property is treated as physical, 
    // while others are logical. Make all logical, like in IE8. 
    zoom = 1;

    if (body.getBoundingClientRect) {
      var bound = body.getBoundingClientRect();
      zoom = (bound.right - bound.left) / body.clientWidth;
    }

    if (zoom > 1) {
      clientTop = 0;
      clientLeft = 0;
    }

    var top = box.top / zoom + (window.pageYOffset || docElem && docElem.scrollTop / zoom || body.scrollTop / zoom) - clientTop,
        left = box.left / zoom + (window.pageXOffset || docElem && docElem.scrollLeft / zoom || body.scrollLeft / zoom) - clientLeft;
    return {
      top: top,
      left: left
    };
  },
  addEvent: addOrRmoveEventHand("addEventListener", "attachEvent"),
  removeEvent: addOrRmoveEventHand("removeEventListener", "detachEvent"),
  pageX: function pageX(e) {
    if (e.pageX) return e.pageX;else if (e.clientX) return e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);else return null;
  },
  pageY: function pageY(e) {
    if (e.pageY) return e.pageY;else if (e.clientY) return e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);else return null;
  },

  /**
   * ??????dom
   * @param {string} id dom id ??????
   * @param {string} type : dom type??? such as canvas, div etc.
   */
  createCanvas: function createCanvas(_width, _height, id) {
    var canvas = document.createElement("canvas");
    canvas.style.position = 'absolute';
    canvas.style.width = _width + 'px';
    canvas.style.height = _height + 'px';
    canvas.style.left = 0;
    canvas.style.top = 0;
    canvas.setAttribute('width', _width * RESOLUTION);
    canvas.setAttribute('height', _height * RESOLUTION);
    canvas.setAttribute('id', id);
    return canvas;
  },
  createView: function createView(_width, _height, id) {
    var view = document.createElement("div");
    view.className = "canvax-view";
    view.style.cssText += "position:relative;width:100%;height:100%;";
    var stageView = document.createElement("div");
    stageView.style.cssText += "position:absolute;width:" + _width + "px;height:" + _height + "px;"; //??????????????????dom??????

    var domView = document.createElement("div");
    domView.style.cssText += "position:absolute;width:" + _width + "px;height:" + _height + "px;";
    view.appendChild(stageView);
    view.appendChild(domView);
    return {
      view: view,
      stageView: stageView,
      domView: domView
    };
  } //dom??????????????????

};

/**
 * Canvax
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com 
*/
var Utils = {
  mainFrameRate: 60,
  //???????????????
  now: 0,

  /*???????????????????????????*/
  _pixelCtx: null,
  __emptyFunc: function __emptyFunc() {},
  //retina ????????????
  _devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
  _UID: 0,
  //????????????????????????????????????
  getUID: function getUID() {
    return this._UID++;
  },
  createId: function createId(name) {
    //if end with a digit, then append an undersBase before appending
    var charCode = name.charCodeAt(name.length - 1);
    if (charCode >= 48 && charCode <= 57) name += "_";
    return name + Utils.getUID();
  },
  canvasSupport: function canvasSupport() {
    return !!document.createElement('canvas').getContext;
  },
  initElement: function initElement(canvas) {
    if (window.FlashCanvas && FlashCanvas.initElement) {
      FlashCanvas.initElement(canvas);
    }
    return canvas;
  },

  /**
   * ??????css????????????????????????[???,???,???,???]
   */
  getCssOrderArr: function getCssOrderArr(r) {
    var r1;
    var r2;
    var r3;
    var r4;

    if (typeof r === 'number') {
      r1 = r2 = r3 = r4 = r;
    } else if (r instanceof Array) {
      if (r.length === 1) {
        r1 = r2 = r3 = r4 = r[0];
      } else if (r.length === 2) {
        r1 = r3 = r[0];
        r2 = r4 = r[1];
      } else if (r.length === 3) {
        r1 = r[0];
        r2 = r4 = r[1];
        r3 = r[2];
      } else {
        r1 = r[0];
        r2 = r[1];
        r3 = r[2];
        r4 = r[3];
      }
    } else {
      r1 = r2 = r3 = r4 = 0;
    }

    return [r1, r2, r3, r4];
  },
  isWebGLSupported: function isWebGLSupported() {
    var contextOptions = {
      stencil: true
    };

    try {
      if (!window.WebGLRenderingContext) //???????????????return
        {
          return false;
        }

      var canvas = document.createElement('canvas'),
          gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);
      return !!(gl && gl.getContextAttributes().stencil); //??????????????????????????????webGL??????
    } catch (e) {
      return false;
    }
  },
  checkOpt: function checkOpt(opt) {
    if (!opt) {
      opt = {
        context: {}
      };
    } else {
      if (!opt.context) {
        opt.context = {};
      }
    }

    return opt;
  }
};
Utils._pixelCtx = Utils.initElement($.createCanvas(1, 1, "_pixelCanvas")).getContext('2d');

/**
 * Canvax
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com)
 *
 * canvas ????????????????????????
 */

var Event = function Event(evt) {
  var eventType = "CanvaxEvent";

  if (_.isString(evt)) {
    eventType = evt;
  }

  if (_.isObject(evt) && evt.type) {
    eventType = evt.type;

    _.extend(this, evt);
  }
  this.target = null;
  this.currentTarget = null;
  this.type = eventType;
  this.point = null;
  var me = this;
  this._stopPropagation = false; //???????????????????????????

  this.stopPropagation = function () {
    me._stopPropagation = true;

    if (_.isObject(evt)) {
      evt._stopPropagation = true;
    }
  };

  this._preventDefault = false; //????????????????????????

  this.preventDefault = function () {
    me._preventDefault = true;

    if (_.isObject(evt)) {
      evt._preventDefault = true;
    }
  };
};

/**
 * Canvax
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com)
 *
 * canvas ????????????????????????
 */
var _mouseEvents = 'mousedown mouseup mouseover mousemove mouseout click dblclick wheel keydown keypress keyup';
var types = {
  _types: _mouseEvents.split(/,| /),
  register: function register(evts) {
    if (!evts) {
      return;
    }

    if (_.isString(evts)) {
      evts = evts.split(/,| /);
    }
    this._types = _mouseEvents.split(/,| /).concat(evts);
  },
  get: function get() {
    return this._types;
  }
};

/**
 * Canvax
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com)
 *
 * ???????????????
 */
/**
 * ????????????.
 * @name EventDispatcher
 * @class EventDispatcher?????????????????????????????????????????????????????????????????????????????????????????????????????????
 */

var Manager = function Manager() {
  //??????????????????????????????{type1:[listener1, listener2], type2:[listener3, listener4]}
  this._eventMap = {};
};

Manager.prototype = {
  /**
   * ??????events?????????????????????????????????
   */
  _setEventEnable: function _setEventEnable() {
    if (this.children) return; //?????????_eventEnabled???????????????????????????????????????

    var hasInteractionEvent = false;

    for (var t in this._eventMap) {
      if (_.indexOf(types.get(), t) > -1) {
        hasInteractionEvent = true;
      }
    }
    this._eventEnabled = hasInteractionEvent;
  },

  /*
   * ????????????????????????????????????????????????????????????????????????
   */
  _addEventListener: function _addEventListener(_type, listener) {
    if (typeof listener != "function") {
      //listener????????????function??????
      return false;
    }

    var addResult = true;
    var self = this;
    var types = _type;

    if (_.isString(_type)) {
      types = _type.split(/,| /);
    }

    _.each(types, function (type) {
      var map = self._eventMap[type];

      if (!map) {
        map = self._eventMap[type] = [];
        map.push(listener); //self._eventEnabled = true;

        self._setEventEnable();

        return true;
      }

      if (_.indexOf(map, listener) == -1) {
        map.push(listener); //self._eventEnabled = true;

        self._setEventEnable();

        return true;
      }

      addResult = false;
    });

    return addResult;
  },

  /**
   * ????????????????????????
   */
  _removeEventListener: function _removeEventListener(type, listener) {
    if (arguments.length == 1) return this.removeEventListenerByType(type);
    var map = this._eventMap[type];

    if (!map) {
      return false;
    }

    for (var i = 0; i < map.length; i++) {
      var li = map[i];

      if (li === listener) {
        map.splice(i, 1);

        if (map.length == 0) {
          delete this._eventMap[type];

          this._setEventEnable(); //??????????????????????????????child????????????????????????

          /*
          if(_.isEmpty(this._eventMap)){
              //??????????????????????????????????????????
              this._eventEnabled = false;
          }
          */

        }

        return true;
      }
    }

    return false;
  },

  /**
   * ?????????????????????????????????????????????
   */
  _removeEventListenerByType: function _removeEventListenerByType(type) {
    var map = this._eventMap[type];

    if (!map) {
      delete this._eventMap[type];

      this._setEventEnable(); //??????????????????????????????child????????????????????????

      /*
      if(_.isEmpty(this._eventMap)){
          //??????????????????????????????????????????
          this._eventEnabled = false;
      }
      */


      return true;
    }

    return false;
  },

  /**
   * ??????????????????????????????
   */
  _removeAllEventListeners: function _removeAllEventListeners() {
    this._eventMap = {};
    this._eventEnabled = false;
  },

  /**
  * ???????????????????????????????????????
  */
  _dispatchEvent: function _dispatchEvent(e) {
    var map = this._eventMap[e.type];

    if (map) {
      if (!e.target) e.target = this;
      if (!e.currentTarget) e.currentTarget = this;
      map = map.slice();

      for (var i = 0; i < map.length; i++) {
        var listener = map[i];

        if (typeof listener == "function") {
          listener.call(this, e);
        }
      }
    }

    if (!e._stopPropagation) {
      //????????????
      if (this.parent) {
        e.currentTarget = this.parent;

        this.parent._dispatchEvent(e);
      }
    }

    return true;
  },

  /**
     * ????????????????????????????????????????????????????????????
     */
  _hasEventListener: function _hasEventListener(type) {
    var map = this._eventMap[type];
    return map != null && map.length > 0;
  }
};

var Dispatcher =
/*#__PURE__*/
function (_Manager) {
  inherits(Dispatcher, _Manager);

  function Dispatcher() {
    classCallCheck(this, Dispatcher);

    return possibleConstructorReturn(this, getPrototypeOf(Dispatcher).call(this));
  }

  createClass(Dispatcher, [{
    key: "on",
    value: function on(type, listener) {
      this._addEventListener(type, listener);

      return this;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      this._addEventListener(type, listener);

      return this;
    }
  }, {
    key: "un",
    value: function un(type, listener) {
      this._removeEventListener(type, listener);

      return this;
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      this._removeEventListener(type, listener);

      return this;
    }
  }, {
    key: "removeEventListenerByType",
    value: function removeEventListenerByType(type) {
      this._removeEventListenerByType(type);

      return this;
    }
  }, {
    key: "removeAllEventListeners",
    value: function removeAllEventListeners() {
      this._removeAllEventListeners();

      return this;
    } //params ?????????evt???eventhandler??????????????????????????????merge???Canvax event???

  }, {
    key: "fire",
    value: function fire(eventType, params) {
      //{currentTarget,point,target,type,_stopPropagation}
      var e = new Event(eventType);

      if (params) {
        for (var p in params) {
          if (p != "type") {
            e[p] = params[p];
          }
        }
      }
      var me = this;

      _.each(eventType.split(" "), function (eType) {
        //?????????currentTarget??????????????????
        e.currentTarget = me;
        me.dispatchEvent(e);
      });

      return this;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(evt) {
      //this instanceof DisplayObjectContainer ==> this.children
      //TODO: ??????import DisplayObjectContainer ????????????displayObject?????????import EventDispatcher from "../event/EventDispatcher";
      //???????????????undefined????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????children
      if (this.children && evt.point) {
        var target = this.getObjectsUnderPoint(evt.point, 1)[0];

        if (target) {
          target.dispatchEvent(evt);
        }

        return;
      }

      if (this.context && evt.type == "mouseover") {
        //??????dispatchEvent???????????????
        var preHeartBeat = this._heartBeatNum;
        var pregAlpha = this.context.$model.globalAlpha;

        this._dispatchEvent(evt);

        if (preHeartBeat != this._heartBeatNum) {
          this._hoverClass = true;

          if (this.hoverClone) {
            var canvax = this.getStage().parent; //??????clone??????obj????????????_bufferStage ???

            var activShape = this.clone(true);
            activShape._transform = this.getConcatenatedMatrix();

            canvax._bufferStage.addChildAt(activShape, 0); //????????????????????????
            //?????????????????????_globalAlpha ????????????????????????alpha


            this._globalAlpha = pregAlpha;
            this.context.globalAlpha = 0;
          }
        }

        return;
      }

      this._dispatchEvent(evt);

      if (this.context && evt.type == "mouseout") {
        if (this._hoverClass && this.hoverClone) {
          //????????????over????????????????????????
          var canvax = this.getStage().parent;
          this._hoverClass = false;

          canvax._bufferStage.removeChildById(this.id);

          if (this._globalAlpha) {
            this.context.globalAlpha = this._globalAlpha;
            delete this._globalAlpha;
          }
        }
      }

      return this;
    }
  }, {
    key: "hasEvent",
    value: function hasEvent(type) {
      return this._hasEventListener(type);
    }
  }, {
    key: "hasEventListener",
    value: function hasEventListener(type) {
      return this._hasEventListener(type);
    }
  }, {
    key: "hover",
    value: function hover(overFun, outFun) {
      this.on("mouseover", overFun);
      this.on("mouseout", outFun);
      return this;
    }
  }, {
    key: "once",
    value: function once(type, listener) {
      var me = this;

      var onceHandle = function onceHandle() {
        listener.apply(me, arguments);
        this.un(type, onceHandle);
      };

      this.on(type, onceHandle);
      return this;
    }
  }]);

  return Dispatcher;
}(Manager);

/**
 * Canvax
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com)
 *
 */
var _hammerEventTypes = ["pan", "panstart", "panmove", "panend", "pancancel", "panleft", "panright", "panup", "pandown", "press", "pressup", "swipe", "swipeleft", "swiperight", "swipeup", "swipedown", "tap"];

var Handler = function Handler(canvax, opt) {
  this.canvax = canvax;
  this.curPoints = [{
    x: 0,
    y: 0
  }]; //X,Y ??? point ??????, ???touch???????????? touch????????????????????????touch?????????????????????x???y
  //???????????????????????????obj??????touch?????????????????????,???????????? curPoints ??????

  this.curPointsTarget = [];
  this._touching = false; //????????????????????????_touching=true

  this._draging = false; //?????????????????????

  this._cursor = "default";
  this.target = this.canvax.view; //mouse????????????????????????drag,touch????????????????????????touch????????????????????????????????????????????????
  //???????????????????????????????????????hammerjs???,????????????????????????????????????hammerjs http://hammerjs.github.io/

  this.drag = {
    start: "panstart",
    move: "panmove",
    end: "panend"
  };

  _.extend(true, this, opt);
}; //??????????????????document.compareDocumentPosition???????????????????????????????????????


var contains = document && document.compareDocumentPosition ? function (parent, child) {
  if (!child) {
    return false;
  }
  return !!(parent.compareDocumentPosition(child) & 16);
} : function (parent, child) {
  if (!child) {
    return false;
  }

  return child !== child && (parent.contains ? parent.contains(child) : true);
};
Handler.prototype = {
  init: function init() {
    //?????????????????????????????????????????????
    var me = this;

    if (me.target.nodeType == undefined) {
      //??????target.nodeType??????????????? ?????????target?????????jQuery?????? or kissy ??????or hammer??????
      //?????????????????????????????????????????????????????????????????????????????????hammer????????????????????????
      types.register(_hammerEventTypes);
    }

    $.addEvent(me.target, "contextmenu", function (e) {
      if (e && e.preventDefault) {
        e.preventDefault();
      } else {
        window.event.returnValue = false;
      }
    });

    _.each(types.get(), function (type) {
      //????????????????????????????????? 'ontouchstart' in window 
      //??????????????????????????????????????????????????????dom?????? jq?????? or hammer?????????
      if (me.target.nodeType == 1) {
        $.addEvent(me.target, type, function (e) {
          me.__mouseHandler(e);
        });
      } else {
        me.target.on(type, function (e) {
          me.__libHandler(e);
        });
      }
    });
  },

  /*
  * ??????????????????------------------------------------------------begin
  * ????????????????????????
  **/
  __mouseHandler: function __mouseHandler(e) {
    var me = this;
    var root = me.canvax;
    root.updateViewOffset();
    me.curPoints = [{
      x: $.pageX(e) - root.viewOffset.left,
      y: $.pageY(e) - root.viewOffset.top
    }]; //??????????????????????????????point???????????????????????????point?????????target???push???curPointsTarget??????
    //???????????????drag??????????????????????????????????????????target??????
    //????????????????????????me.__getcurPointsTarget( e , curMousePoint );??????mousemove?????????

    var curMousePoint = me.curPoints[0];
    var curMouseTarget = me.curPointsTarget[0];

    if ( //??????????????????????????????????????????????????? curMouseTarget ???
    _.indexOf(['mousedown', 'mouseover', 'click'], e.type) > -1 && !curMouseTarget) {
      if (!curMouseTarget) {
        var obj = root.getObjectsUnderPoint(curMousePoint, 1)[0];

        if (obj) {
          me.curPointsTarget = [obj];
        }
      }
      curMouseTarget = me.curPointsTarget[0];
    }
    //mousedown????????? ?????? curMouseTarget.dragEnabled ???true?????????????????????drag???

    if (e.type == "mousedown") {
      //??????curTarget ?????????????????????????????????false ?????????
      if (curMouseTarget && curMouseTarget.dragEnabled) {
        //?????????????????????????????????
        me._touching = true;
      }
    }

    if (e.type == "mouseup" || e.type == "mouseout" && !contains(root.view, e.toElement || e.relatedTarget)) {
      if (me._draging == true) {
        //?????????????????????
        me._dragEnd(e, curMouseTarget, 0);

        curMouseTarget.fire("dragend");
      }
      me._draging = false;
      me._touching = false;
    }

    if (e.type == "mouseout") {
      if (!contains(root.view, e.toElement || e.relatedTarget)) {
        me.__getcurPointsTarget(e, curMousePoint, true);
      }
    } else if (e.type == "mousemove") {
      //|| e.type == "mousedown" ){
      //????????????????????????????????????mouseover?????????drag??????
      if (me._touching && e.type == "mousemove" && curMouseTarget) {
        //?????????????????????
        if (!me._draging) {
          //begin drag
          curMouseTarget.fire("dragstart"); //????????????child??????hover style

          if (!curMouseTarget._globalAlpha) {
            curMouseTarget._globalAlpha = curMouseTarget.context.$model.globalAlpha;
          }

          curMouseTarget.context.globalAlpha = 0; //???????????????????????????activeStage

          var cloneObject = me._clone2hoverStage(curMouseTarget, 0);

          cloneObject.context.globalAlpha = curMouseTarget._globalAlpha;
        } else {
          //drag move ing
          me._dragIngHander(e, curMouseTarget, 0);
        }
        me._draging = true;
      } else {
        //??????mousemove??????
        //move?????????????????????????????????target????????????????????????
        //?????????????????????????????????????????????????????????
        me.__getcurPointsTarget(e, curMousePoint);
      }
    } else {
      //???????????????????????????target??????????????????
      var child = curMouseTarget;

      if (!child) {
        child = root;
      }

      me.__dispatchEventInChilds(e, [child]);

      me._cursorHander(child);
    }

    if (root.preventDefault || e._preventDefault) {
      //???????????????????????????(W3C) 
      if (e && e.preventDefault) {
        e.preventDefault();
      } else {
        window.event.returnValue = false;
      }
    }
  },
  //notInRootView ?????????mouseout,???????????????????????????????????????
  __getcurPointsTarget: function __getcurPointsTarget(e, point, notInRootView) {
    var me = this;
    var root = me.canvax;
    var oldObj = me.curPointsTarget[0];

    if (oldObj && !oldObj.context) {
      oldObj = null;
    }
    var e = new Event(e);

    if (e.type == "mousemove" && oldObj && oldObj._hoverClass && oldObj.hoverClone && oldObj.pointChkPriority && oldObj.getChildInPoint(point)) {
      //?????????,??????move??????????????????????????????????????????????????????
      //?????????target?????????????????????????????????hoverStage??????????????????????????????target???,???????????????????????????displayList???
      //??????????????????mousemove??????
      e.target = e.currentTarget = oldObj;
      e.point = oldObj.globalToLocal(point);
      oldObj.dispatchEvent(e);
      return;
    }
    var obj = notInRootView ? null : root.getObjectsUnderPoint(point, 1)[0];

    if (oldObj && oldObj != obj || e.type == "mouseout") {
      if (oldObj && oldObj.context) {
        me.curPointsTarget[0] = null;
        e.type = "mouseout";
        e.toTarget = obj;
        e.target = e.currentTarget = oldObj;
        e.point = oldObj.globalToLocal(point);
        oldObj.dispatchEvent(e);
      }
    }

    if (obj && oldObj != obj) {
      me.curPointsTarget[0] = obj;
      e.type = "mouseover";
      e.fromTarget = oldObj;
      e.target = e.currentTarget = obj;
      e.point = obj.globalToLocal(point);
      obj.dispatchEvent(e);
    }

    if (e.type == "mousemove" && obj) {
      e.target = e.currentTarget = oldObj;
      e.point = oldObj.globalToLocal(point);
      oldObj.dispatchEvent(e);
    }

    me._cursorHander(obj, oldObj);
  },
  _cursorHander: function _cursorHander(obj, oldObj) {
    if (!obj && !oldObj) {
      this._setCursor("default");
    }

    if (obj && oldObj != obj && obj.context) {
      this._setCursor(obj.context.$model.cursor);
    }
  },
  _setCursor: function _setCursor(cursor) {
    if (this._cursor == cursor) {
      //????????????????????????????????????????????????
      return;
    }
    this.canvax.view.style.cursor = cursor;
    this._cursor = cursor;
  },

  /*
  * ??????????????????------------------------------------------------end
  */

  /*
   *???????????????????????????------------------------------------------------begin
   *????????????????????????
   * */
  __libHandler: function __libHandler(e) {
    var me = this;
    var root = me.canvax;
    root.updateViewOffset(); // touch ?????? curPointsTarget ???touches??????
    //??????canvax???????????????????????????

    me.curPoints = me.__getCanvaxPointInTouchs(e);

    if (!me._draging) {
      //?????????draging?????????target???????????????????????????????????? ?????????
      me.curPointsTarget = me.__getChildInTouchs(me.curPoints);
    }

    if (me.curPointsTarget.length > 0) {
      //drag??????
      if (e.type == me.drag.start) {
        //dragstart?????????touch??????????????????target??? curPointsTarget ?????????????????????????????????
        //?????????drags??????
        _.each(me.curPointsTarget, function (child, i) {
          if (child && child.dragEnabled) {
            //??????????????????????????????????????????drag???
            me._draging = true; //????????????child??????hover style

            if (!child._globalAlpha) {
              child._globalAlpha = child.context.$model.globalAlpha;
            }

            me._clone2hoverStage(child, i); //????????????????????????


            child.context.globalAlpha = 0;
            child.fire("dragstart");
            return false;
          }
        });
      }

      if (e.type == me.drag.move) {
        if (me._draging) {
          _.each(me.curPointsTarget, function (child, i) {
            if (child && child.dragEnabled) {
              me._dragIngHander(e, child, i);
            }
          });
        }
      }

      if (e.type == me.drag.end) {
        if (me._draging) {
          _.each(me.curPointsTarget, function (child, i) {
            if (child && child.dragEnabled) {
              me._dragEnd(e, child, 0);

              child.fire("dragend");
            }
          });

          me._draging = false;
        }
      }

      me.__dispatchEventInChilds(e, me.curPointsTarget);
    } else {
      //????????????????????????target????????????????????????canvax??????
      me.__dispatchEventInChilds(e, [root]);
    }
  },
  //???touchs??????????????????touch , ??????????????????canvax???????????????x???y
  __getCanvaxPointInTouchs: function __getCanvaxPointInTouchs(e) {
    var me = this;
    var root = me.canvax;
    var curTouchs = [];

    _.each(e.point, function (touch) {
      curTouchs.push({
        x: $.pageX(touch) - root.viewOffset.left,
        y: $.pageY(touch) - root.viewOffset.top
      });
    });

    return curTouchs;
  },
  __getChildInTouchs: function __getChildInTouchs(touchs) {
    var me = this;
    var root = me.canvax;
    var touchesTarget = [];

    _.each(touchs, function (touch) {
      touchesTarget.push(root.getObjectsUnderPoint(touch, 1)[0]);
    });

    return touchesTarget;
  },

  /*
  *???????????????????????????------------------------------------------------end
  */

  /*
   *@param {array} childs 
   * */
  __dispatchEventInChilds: function __dispatchEventInChilds(e, childs) {
    if (!childs && !("length" in childs)) {
      return false;
    }

    var me = this;

    _.each(childs, function (child, i) {
      if (child) {
        var ce = new Event(e); //ce.target = ce.currentTarget = child || this;

        ce.stagePoint = me.curPoints[i];
        ce.point = child.globalToLocal(ce.stagePoint);
        child.dispatchEvent(ce);
      }
    });
  },
  //?????????????????????hover stage??????
  _clone2hoverStage: function _clone2hoverStage(target, i) {
    var me = this;
    var root = me.canvax;

    var _dragDuplicate = root._bufferStage.getChildById(target.id);

    if (!_dragDuplicate) {
      _dragDuplicate = target.clone(true);
      _dragDuplicate._transform = target.getConcatenatedMatrix();
      /**
       *TODO: ??????????????????????????????????????? ?????????_bufferStage ?????????
       *??????tips
       *???????????????????????????????????????????????????????????????????????????hover???????????????
       *?????????????????????hover????????????????????????_bufferStage????????????
       **/

      root._bufferStage.addChildAt(_dragDuplicate, 0);
    }

    _dragDuplicate.context.globalAlpha = target._globalAlpha;
    target._dragPoint = target.globalToLocal(me.curPoints[i]);
    return _dragDuplicate;
  },
  //drag ??? ???????????????
  _dragIngHander: function _dragIngHander(e, target, i) {
    var me = this;
    var root = me.canvax;

    var _point = target.globalToLocal(me.curPoints[i]); //???????????????????????????????????????????????????????????????watch?????????????????????


    target._noHeart = true;
    var _moveStage = target.moveing;
    target.moveing = true;
    target.context.x += _point.x - target._dragPoint.x;
    target.context.y += _point.y - target._dragPoint.y;
    target.fire("draging");
    target.moveing = _moveStage;
    target._noHeart = false; //???????????????????????????
    //????????????????????????_transform ??? ????????????????????????x???y????????????

    var _dragDuplicate = root._bufferStage.getChildById(target.id);

    _dragDuplicate._transform = target.getConcatenatedMatrix(); //worldTransform???renderer???????????????

    _dragDuplicate.worldTransform = null; //setWorldTransform????????????render???????????????????????????
    //_dragDuplicate.setWorldTransform();
    //???????????????_transform??????????????????????????? ???????????????????????????stage???????????????
    //??????????????????????????????

    _dragDuplicate.heartBeat();
  },
  //drag?????????????????????
  //TODO: dragend??????????????????end??????????????????????????????????????????hover??????
  _dragEnd: function _dragEnd(e, target, i) {
    var me = this;
    var root = me.canvax; //_dragDuplicate ?????????_bufferStage ????????????

    var _dragDuplicate = root._bufferStage.getChildById(target.id);

    _dragDuplicate && _dragDuplicate.destroy();
    target.context.globalAlpha = target._globalAlpha;
  }
};

var event = {
  Event: Event,
  Dispatcher: Dispatcher,
  Handler: Handler,
  Manager: Manager,
  types: types
};

/**
 * Canvax
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com)
 *
 * | a | c | tx|
 * | b | d | ty|
 * | 0 | 0 | 1 |
 *
 * @class
 * @memberof PIXI
 *
 *
 * Matrix ????????? ???????????????????????????????????????
 */
var Matrix = function Matrix(a, b, c, d, tx, ty) {
  this.a = a != undefined ? a : 1;
  this.b = b != undefined ? b : 0;
  this.c = c != undefined ? c : 0;
  this.d = d != undefined ? d : 1;
  this.tx = tx != undefined ? tx : 0;
  this.ty = ty != undefined ? ty : 0;
  this.array = null;
};

Matrix.prototype = {
  concat: function concat(mtx) {
    var a = this.a;
    var c = this.c;
    var tx = this.tx;
    this.a = a * mtx.a + this.b * mtx.c;
    this.b = a * mtx.b + this.b * mtx.d;
    this.c = c * mtx.a + this.d * mtx.c;
    this.d = c * mtx.b + this.d * mtx.d;
    this.tx = tx * mtx.a + this.ty * mtx.c + mtx.tx;
    this.ty = tx * mtx.b + this.ty * mtx.d + mtx.ty;
    return this;
  },
  concatTransform: function concatTransform(x, y, scaleX, scaleY, rotation) {
    var cos = 1;
    var sin = 0;

    if (rotation % 360) {
      var r = rotation * Math.PI / 180;
      cos = Math.cos(r);
      sin = Math.sin(r);
    }

    this.concat(new Matrix(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y));
    return this;
  },
  rotate: function rotate(angle) {
    //??????????????????????????????????????????????????????????????????
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var a = this.a;
    var c = this.c;
    var tx = this.tx;

    if (angle > 0) {
      this.a = a * cos - this.b * sin;
      this.b = a * sin + this.b * cos;
      this.c = c * cos - this.d * sin;
      this.d = c * sin + this.d * cos;
      this.tx = tx * cos - this.ty * sin;
      this.ty = tx * sin + this.ty * cos;
    } else {
      var st = Math.sin(Math.abs(angle));
      var ct = Math.cos(Math.abs(angle));
      this.a = a * ct + this.b * st;
      this.b = -a * st + this.b * ct;
      this.c = c * ct + this.d * st;
      this.d = -c * st + ct * this.d;
      this.tx = ct * tx + st * this.ty;
      this.ty = ct * this.ty - st * tx;
    }

    return this;
  },
  scale: function scale(sx, sy) {
    this.a *= sx;
    this.d *= sy;
    this.tx *= sx;
    this.ty *= sy;
    return this;
  },
  translate: function translate(dx, dy) {
    this.tx += dx;
    this.ty += dy;
    return this;
  },
  identity: function identity() {
    //?????????
    this.a = this.d = 1;
    this.b = this.c = this.tx = this.ty = 0;
    return this;
  },
  invert: function invert() {
    //????????????
    var a = this.a;
    var b = this.b;
    var c = this.c;
    var d = this.d;
    var tx = this.tx;
    var i = a * d - b * c;
    this.a = d / i;
    this.b = -b / i;
    this.c = -c / i;
    this.d = a / i;
    this.tx = (c * this.ty - d * tx) / i;
    this.ty = -(a * this.ty - b * tx) / i;
    return this;
  },
  clone: function clone() {
    return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
  },
  toArray: function toArray(transpose, out) {
    if (arguments.length == 0) {
      //canvas2d ?????????????????????????????????
      if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c) || isNaN(this.d) || isNaN(this.tx) || isNaN(this.ty)) {
        //???????????????????????????
        return null;
      }
      return [this.a, this.b, this.c, this.d, this.tx, this.ty];
    } //webgl???glsl?????????????????????????????????transpose ??????????????????3*3????????????


    if (!this.array) {
      this.array = new Float32Array(9);
    }

    var array = out || this.array;

    if (transpose) {
      array[0] = this.a;
      array[1] = this.b;
      array[2] = 0;
      array[3] = this.c;
      array[4] = this.d;
      array[5] = 0;
      array[6] = this.tx;
      array[7] = this.ty;
      array[8] = 1;
    } else {
      array[0] = this.a;
      array[1] = this.c;
      array[2] = this.tx;
      array[3] = this.b;
      array[4] = this.d;
      array[5] = this.ty;
      array[6] = 0;
      array[7] = 0;
      array[8] = 1;
    }

    return array;
  },

  /**
   * ??????????????????
   */
  mulVector: function mulVector(v) {
    var aa = this.a,
        ac = this.c,
        atx = this.tx;
    var ab = this.b,
        ad = this.d,
        aty = this.ty;
    var out = [0, 0];
    out[0] = v[0] * aa + v[1] * ac + atx;
    out[1] = v[0] * ab + v[1] * ad + aty;
    return out;
  }
};

/**
 * Point
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com)
 */
var Point =
/*#__PURE__*/
function () {
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    classCallCheck(this, Point);

    if (arguments.length == 1 && _typeof_1(arguments[0]) == 'object') {
      var arg = arguments[0];

      if ("x" in arg && "y" in arg) {
        this.x = arg.x * 1;
        this.y = arg.y * 1;
      } else {
        var i = 0;

        for (var p in arg) {
          if (i == 0) {
            this.x = arg[p] * 1;
          } else {
            this.y = arg[p] * 1;
            break;
          }

          i++;
        }
      }
    } else {
      this.x = x * 1;
      this.y = y * 1;
    }
  }

  createClass(Point, [{
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Point;
}();

var Tween = createCommonjsModule$1(function (module, exports) {
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */


var _Group = function () {
	this._tweens = {};
	this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
	getAll: function () {

		return Object.keys(this._tweens).map(function (tweenId) {
			return this._tweens[tweenId];
		}.bind(this));

	},

	removeAll: function () {

		this._tweens = {};

	},

	add: function (tween) {

		this._tweens[tween.getId()] = tween;
		this._tweensAddedDuringUpdate[tween.getId()] = tween;

	},

	remove: function (tween) {

		delete this._tweens[tween.getId()];
		delete this._tweensAddedDuringUpdate[tween.getId()];

	},

	update: function (time, preserve) {

		var tweenIds = Object.keys(this._tweens);

		if (tweenIds.length === 0) {
			return false;
		}

		time = time !== undefined ? time : TWEEN.now();

		// Tweens are updated in "batches". If you add a new tween during an update, then the
		// new tween will be updated in the next batch.
		// If you remove a tween during an update, it may or may not be updated. However,
		// if the removed tween was added during the current batch, then it will not be updated.
		while (tweenIds.length > 0) {
			this._tweensAddedDuringUpdate = {};

			for (var i = 0; i < tweenIds.length; i++) {

				var tween = this._tweens[tweenIds[i]];

				if (tween && tween.update(time) === false) {
					tween._isPlaying = false;

					if (!preserve) {
						delete this._tweens[tweenIds[i]];
					}
				}
			}

			tweenIds = Object.keys(this._tweensAddedDuringUpdate);
		}

		return true;

	}
};

var TWEEN = new _Group();

TWEEN.Group = _Group;
TWEEN._nextId = 0;
TWEEN.nextId = function () {
	return TWEEN._nextId++;
};


// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof (window) === 'undefined' && typeof (process) !== 'undefined') {
	TWEEN.now = function () {
		var time = process.hrtime();

		// Convert [seconds, nanoseconds] to milliseconds.
		return time[0] * 1000 + time[1] / 1000000;
	};
}
// In a browser, use window.performance.now if it is available.
else if (typeof (window) !== 'undefined' &&
         window.performance !== undefined &&
		 window.performance.now !== undefined) {
	// This must be bound, because directly assigning this function
	// leads to an invocation exception in Chrome.
	TWEEN.now = window.performance.now.bind(window.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
	TWEEN.now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
	TWEEN.now = function () {
		return new Date().getTime();
	};
}


TWEEN.Tween = function (object, group) {
	this._object = object;
	this._valuesStart = {};
	this._valuesEnd = {};
	this._valuesStartRepeat = {};
	this._duration = 1000;
	this._repeat = 0;
	this._repeatDelayTime = undefined;
	this._yoyo = false;
	this._isPlaying = false;
	this._reversed = false;
	this._delayTime = 0;
	this._startTime = null;
	this._easingFunction = TWEEN.Easing.Linear.None;
	this._interpolationFunction = TWEEN.Interpolation.Linear;
	this._chainedTweens = [];
	this._onStartCallback = null;
	this._onStartCallbackFired = false;
	this._onUpdateCallback = null;
	this._onCompleteCallback = null;
	this._onStopCallback = null;
	this._group = group || TWEEN;
	this._id = TWEEN.nextId();

};

TWEEN.Tween.prototype = {
	getId: function getId() {
		return this._id;
	},

	isPlaying: function isPlaying() {
		return this._isPlaying;
	},

	to: function to(properties, duration) {

		this._valuesEnd = properties;

		if (duration !== undefined) {
			this._duration = duration;
		}

		return this;

	},

	start: function start(time) {

		this._group.add(this);

		this._isPlaying = true;

		this._onStartCallbackFired = false;

		this._startTime = time !== undefined ? typeof time === 'string' ? TWEEN.now() + parseFloat(time) : time : TWEEN.now();
		this._startTime += this._delayTime;

		for (var property in this._valuesEnd) {

			// Check if an Array was provided as property value
			if (this._valuesEnd[property] instanceof Array) {

				if (this._valuesEnd[property].length === 0) {
					continue;
				}

				// Create a local copy of the Array with the start value at the front
				this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);

			}

			// If `to()` specifies a property that doesn't exist in the source object,
			// we should not set that property in the object
			if (this._object[property] === undefined) {
				continue;
			}

			// Save the starting value.
			this._valuesStart[property] = this._object[property];

			if ((this._valuesStart[property] instanceof Array) === false) {
				this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
			}

			this._valuesStartRepeat[property] = this._valuesStart[property] || 0;

		}

		return this;

	},

	stop: function stop() {

		if (!this._isPlaying) {
			return this;
		}

		this._group.remove(this);
		this._isPlaying = false;

		if (this._onStopCallback !== null) {
			this._onStopCallback(this._object);
		}

		this.stopChainedTweens();
		return this;

	},

	end: function end() {

		this.update(this._startTime + this._duration);
		return this;

	},

	stopChainedTweens: function stopChainedTweens() {

		for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
			this._chainedTweens[i].stop();
		}

	},

	group: function group(group) {
		this._group = group;
		return this;
	},

	delay: function delay(amount) {

		this._delayTime = amount;
		return this;

	},

	repeat: function repeat(times) {

		this._repeat = times;
		return this;

	},

	repeatDelay: function repeatDelay(amount) {

		this._repeatDelayTime = amount;
		return this;

	},

	yoyo: function yoyo(yy) {

		this._yoyo = yy;
		return this;

	},

	easing: function easing(eas) {

		this._easingFunction = eas;
		return this;

	},

	interpolation: function interpolation(inter) {

		this._interpolationFunction = inter;
		return this;

	},

	chain: function chain() {

		this._chainedTweens = arguments;
		return this;

	},

	onStart: function onStart(callback) {

		this._onStartCallback = callback;
		return this;

	},

	onUpdate: function onUpdate(callback) {

		this._onUpdateCallback = callback;
		return this;

	},

	onComplete: function onComplete(callback) {

		this._onCompleteCallback = callback;
		return this;

	},

	onStop: function onStop(callback) {

		this._onStopCallback = callback;
		return this;

	},

	update: function update(time) {

		var property;
		var elapsed;
		var value;

		if (time < this._startTime) {
			return true;
		}

		if (this._onStartCallbackFired === false) {

			if (this._onStartCallback !== null) {
				this._onStartCallback(this._object);
			}

			this._onStartCallbackFired = true;
		}

		elapsed = (time - this._startTime) / this._duration;
		elapsed = (this._duration === 0 || elapsed > 1) ? 1 : elapsed;

		value = this._easingFunction(elapsed);

		for (property in this._valuesEnd) {

			// Don't update properties that do not exist in the source object
			if (this._valuesStart[property] === undefined) {
				continue;
			}

			var start = this._valuesStart[property] || 0;
			var end = this._valuesEnd[property];

			if (end instanceof Array) {

				this._object[property] = this._interpolationFunction(end, value);

			} else {

				// Parses relative end values with start as base (e.g.: +10, -3)
				if (typeof (end) === 'string') {

					if (end.charAt(0) === '+' || end.charAt(0) === '-') {
						end = start + parseFloat(end);
					} else {
						end = parseFloat(end);
					}
				}

				// Protect against non numeric properties.
				if (typeof (end) === 'number') {
					this._object[property] = start + (end - start) * value;
				}

			}

		}

		if (this._onUpdateCallback !== null) {
			this._onUpdateCallback(this._object);
		}

		if (elapsed === 1) {

			if (this._repeat > 0) {

				if (isFinite(this._repeat)) {
					this._repeat--;
				}

				// Reassign starting values, restart by making startTime = now
				for (property in this._valuesStartRepeat) {

					if (typeof (this._valuesEnd[property]) === 'string') {
						this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
					}

					if (this._yoyo) {
						var tmp = this._valuesStartRepeat[property];

						this._valuesStartRepeat[property] = this._valuesEnd[property];
						this._valuesEnd[property] = tmp;
					}

					this._valuesStart[property] = this._valuesStartRepeat[property];

				}

				if (this._yoyo) {
					this._reversed = !this._reversed;
				}

				if (this._repeatDelayTime !== undefined) {
					this._startTime = time + this._repeatDelayTime;
				} else {
					this._startTime = time + this._delayTime;
				}

				return true;

			} else {

				if (this._onCompleteCallback !== null) {

					this._onCompleteCallback(this._object);
				}

				for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
					// Make the chained tweens start exactly at the time they should,
					// even if the `update()` method was called way past the duration of the tween
					this._chainedTweens[i].start(this._startTime + this._duration);
				}

				return false;

			}

		}

		return true;

	}
};


TWEEN.Easing = {

	Linear: {

		None: function (k) {

			return k;

		}

	},

	Quadratic: {

		In: function (k) {

			return k * k;

		},

		Out: function (k) {

			return k * (2 - k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return - 0.5 * (--k * (k - 2) - 1);

		}

	},

	Cubic: {

		In: function (k) {

			return k * k * k;

		},

		Out: function (k) {

			return --k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k + 2);

		}

	},

	Quartic: {

		In: function (k) {

			return k * k * k * k;

		},

		Out: function (k) {

			return 1 - (--k * k * k * k);

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return - 0.5 * ((k -= 2) * k * k * k - 2);

		}

	},

	Quintic: {

		In: function (k) {

			return k * k * k * k * k;

		},

		Out: function (k) {

			return --k * k * k * k * k + 1;

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);

		}

	},

	Sinusoidal: {

		In: function (k) {

			return 1 - Math.cos(k * Math.PI / 2);

		},

		Out: function (k) {

			return Math.sin(k * Math.PI / 2);

		},

		InOut: function (k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));

		}

	},

	Exponential: {

		In: function (k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);

		},

		Out: function (k) {

			return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

		}

	},

	Circular: {

		In: function (k) {

			return 1 - Math.sqrt(1 - k * k);

		},

		Out: function (k) {

			return Math.sqrt(1 - (--k * k));

		},

		InOut: function (k) {

			if ((k *= 2) < 1) {
				return - 0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

		}

	},

	Elastic: {

		In: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);

		},

		Out: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;

		},

		InOut: function (k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			k *= 2;

			if (k < 1) {
				return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
			}

			return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;

		}

	},

	Back: {

		In: function (k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);

		},

		Out: function (k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;

		},

		InOut: function (k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

		}

	},

	Bounce: {

		In: function (k) {

			return 1 - TWEEN.Easing.Bounce.Out(1 - k);

		},

		Out: function (k) {

			if (k < (1 / 2.75)) {
				return 7.5625 * k * k;
			} else if (k < (2 / 2.75)) {
				return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
			} else if (k < (2.5 / 2.75)) {
				return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
			} else {
				return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
			}

		},

		InOut: function (k) {

			if (k < 0.5) {
				return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
			}

			return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;

		}

	}

};

TWEEN.Interpolation = {

	Linear: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.Linear;

		if (k < 0) {
			return fn(v[0], v[1], f);
		}

		if (k > 1) {
			return fn(v[m], v[m - 1], m - f);
		}

		return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);

	},

	Bezier: function (v, k) {

		var b = 0;
		var n = v.length - 1;
		var pw = Math.pow;
		var bn = TWEEN.Interpolation.Utils.Bernstein;

		for (var i = 0; i <= n; i++) {
			b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
		}

		return b;

	},

	CatmullRom: function (v, k) {

		var m = v.length - 1;
		var f = m * k;
		var i = Math.floor(f);
		var fn = TWEEN.Interpolation.Utils.CatmullRom;

		if (v[0] === v[m]) {

			if (k < 0) {
				i = Math.floor(f = m * (1 + k));
			}

			return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);

		} else {

			if (k < 0) {
				return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
			}

			if (k > 1) {
				return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
			}

			return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);

		}

	},

	Utils: {

		Linear: function (p0, p1, t) {

			return (p1 - p0) * t + p0;

		},

		Bernstein: function (n, i) {

			var fc = TWEEN.Interpolation.Utils.Factorial;

			return fc(n) / fc(i) / fc(n - i);

		},

		Factorial: (function () {

			var a = [1];

			return function (n) {

				var s = 1;

				if (a[n]) {
					return a[n];
				}

				for (var i = n; i > 1; i--) {
					s *= i;
				}

				a[n] = s;
				return s;

			};

		})(),

		CatmullRom: function (p0, p1, p2, p3, t) {

			var v0 = (p2 - p0) * 0.5;
			var v1 = (p3 - p1) * 0.5;
			var t2 = t * t;
			var t3 = t * t2;

			return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (- 3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;

		}

	}

};

// UMD (Universal Module Definition)
(function (root) {

	{

		// Node.js
		module.exports = TWEEN;

	}

})();
});

/**
 * ?????? AnimationFrame begin
 */

var lastTime = 0;
var _globalAnimationEnabled = true;
var requestAnimationFrame, cancelAnimationFrame;

if (typeof window !== 'undefined') {
  requestAnimationFrame = window.requestAnimationFrame;
  cancelAnimationFrame = window.cancelAnimationFrame;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    requestAnimationFrame = window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    cancelAnimationFrame = window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
}

if (!requestAnimationFrame) {
  requestAnimationFrame = function requestAnimationFrame(callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

if (!cancelAnimationFrame) {
  cancelAnimationFrame = function cancelAnimationFrame(id) {
    clearTimeout(id);
  };
}

var _taskList = []; //[{ id : task: }...]

var _requestAid = null;

function enabledAnimationFrame() {
  if (!_requestAid) {
    _requestAid = requestAnimationFrame(function () {
      //console.log("frame__" + _taskList.length);
      //if ( Tween.getAll().length ) {
      Tween.update(); //tween????????????length??????
      //};

      var currTaskList = _taskList;
      _taskList = [];
      _requestAid = null;

      while (currTaskList.length > 0) {
        currTaskList.shift().task();
      }
    });
  }
  return _requestAid;
}
/*
 * @param task ???????????????????????????????????????
 * @result frameid
 */

function registFrame($frame) {
  if (!$frame) {
    return;
  }

  _taskList.push($frame);

  return enabledAnimationFrame();
}
/*
 *  @param task ???????????????????????????????????????
 */

function destroyFrame($frame) {
  var d_result = false;

  for (var i = 0, l = _taskList.length; i < l; i++) {
    if (_taskList[i].id === $frame.id) {
      d_result = true;

      _taskList.splice(i, 1);

      i--;
      l--;
    }
  }

  if (_taskList.length == 0) {
    cancelAnimationFrame(_requestAid);
    _requestAid = null;
  }
  return d_result;
}
/* 
 * @param opt {from , to , onUpdate , onComplete , ......}
 * @result tween
 */

function registTween(options) {
  var opt = _.extend({
    from: null,
    to: null,
    duration: 500,
    onStart: function onStart() {},
    onUpdate: function onUpdate() {},
    onComplete: function onComplete() {},
    onStop: function onStop() {},
    repeat: 0,
    delay: 0,
    easing: 'Linear.None',
    desc: '' //???????????????????????????bug

  }, options);

  if (!getAnimationEnabled()) {
    //???????????????????????????????????????????????????????????????0
    //TODO:???????????????????????????????????????
    opt.duration = 0;
    opt.delay = 0;
  }
  var tween = {};
  var tid = "tween_" + Utils.getUID();
  opt.id && (tid = tid + "_" + opt.id);

  if (opt.from && opt.to) {
    var animate = function animate() {
      if (tween._isCompleteed || tween._isStoped) {
        tween = null;
        return;
      }
      registFrame({
        id: tid,
        task: animate,
        desc: opt.desc,
        tween: tween
      });
    };

    tween = new Tween.Tween(opt.from).to(opt.to, opt.duration).onStart(function () {
      //opt.onStart.apply( this )
      opt.onStart(opt.from);
    }).onUpdate(function () {
      //opt.onUpdate.apply( this );
      opt.onUpdate(opt.from);
    }).onComplete(function () {
      destroyFrame({
        id: tid
      });
      tween._isCompleteed = true; //opt.onComplete.apply( this , [this] ); //???????????????conComplete

      opt.onComplete(opt.from);
    }).onStop(function () {
      destroyFrame({
        id: tid
      });
      tween._isStoped = true; //opt.onStop.apply( this , [this] );

      opt.onStop(opt.from);
    }).repeat(opt.repeat).delay(opt.delay).easing(Tween.Easing[opt.easing.split(".")[0]][opt.easing.split(".")[1]]);
    tween.id = tid;
    tween.start();
    animate();
  }
  return tween;
}
/*
 * @param tween
 * @result void(0)
 */

function destroyTween(tween, msg) {
  tween.stop();
}

function setAnimationEnabled(bool) {
  _globalAnimationEnabled = bool;
}

function getAnimationEnabled() {
  return _globalAnimationEnabled;
}

var AnimationFrame = {
  setAnimationEnabled: setAnimationEnabled,
  getAnimationEnabled: getAnimationEnabled,
  registFrame: registFrame,
  destroyFrame: destroyFrame,
  registTween: registTween,
  destroyTween: destroyTween,
  Tween: Tween,
  taskList: _taskList
};

function Observe(scope) {
  var stopRepeatAssign = true;
  var pmodel = {},
      //??????????????????
  accessores = {},
      //???????????????????????????
  _Publics = ["$watch", "$model"],
      //????????????????????????get set ??????
  model = {}; //??????pmodel??????$model??????

  var Publics = _Publics;

  function loop(name, val) {
    if (_.indexOf(_Publics, name) === -1) {
      //??? _Publics ???????????????????????????????????????val???model???
      model[name] = val;
    }

    var valueType = _typeof_1(val);

    if (_.indexOf(Publics, name) > -1) {
      return;
    }

    if (valueType === "function") {
      Publics.push(name); //?????????????????????????????????????????????????????????
    } else {
      var accessor = function accessor(neo) {
        //??????????????????????????????????????????????????????????????????
        var value = model[name],
            preValue = value,
            complexValue;

        if (arguments.length) {
          //?????????
          //set ??? ?????? ??????
          var neoType = _typeof_1(neo);

          if (stopRepeatAssign) {
            return; //??????????????????
          }

          if (value !== neo) {
            if (neo && neoType === "object" && !(neo instanceof Array) && !neo.addColorStop // neo instanceof CanvasGradient
            ) {
                value = neo.$model ? neo : Observe(neo);
                complexValue = value.$model;
              } else {
              //???????????????????????????
              value = neo;
            }

            model[name] = complexValue ? complexValue : value; //??????$model?????????

            if (valueType != neoType) {
              //??????set???????????????????????????
              //????????????????????????valueType??????????????????neoType
              valueType = neoType;
            }

            if (pmodel.$watch) {
              pmodel.$watch.call(pmodel, name, value, preValue);
            }
          }
        } else {
          //?????????
          //?????????????????????value??????obj??????????????????defineProperty
          //???????????????defineProperty??????
          if (value && valueType === "object" && !(value instanceof Array) && !value.$model && !value.addColorStop) {
            value = Observe(value);
            value.$watch = pmodel.$watch; //accessor.value = value;

            model[name] = value;
          }
          return value;
        }
      }; //accessor.value = val;


      accessores[name] = {
        set: accessor,
        get: accessor,
        enumerable: true
      };
    }
  }

  for (var i in scope) {
    loop(i, scope[i]);
  }
  pmodel = defineProperties(pmodel, accessores, Publics); //??????????????????ViewModel

  _.forEach(Publics, function (name) {
    if (scope[name]) {
      //?????????????????????????????????????????????
      if (typeof scope[name] == "function") {
        pmodel[name] = function () {
          scope[name].apply(this, arguments);
        };
      } else {
        pmodel[name] = scope[name];
      }
    }
  });

  pmodel.$model = model;

  pmodel.hasOwnProperty = function (name) {
    return name in pmodel.$model;
  };

  stopRepeatAssign = false;
  return pmodel;
}
var defineProperty = Object.defineProperty; //????????????????????????ecma262v5???Object.defineProperties????????????BUG?????????IE8
//?????????????????????__defineGetter__, __defineSetter__??????

try {
  defineProperty({}, "_", {
    value: "x"
  });
  var defineProperties = Object.defineProperties;
} catch (e) {
  if ("__defineGetter__" in Object) {
    defineProperty = function defineProperty(obj, prop, desc) {
      if ('value' in desc) {
        obj[prop] = desc.value;
      }

      if ('get' in desc) {
        obj.__defineGetter__(prop, desc.get);
      }

      if ('set' in desc) {
        obj.__defineSetter__(prop, desc.set);
      }

      return obj;
    };

    defineProperties = function defineProperties(obj, descs) {
      for (var prop in descs) {
        if (descs.hasOwnProperty(prop)) {
          defineProperty(obj, prop, descs[prop]);
        }
      }

      return obj;
    };
  }
}

var RENDERER_TYPE = {
  UNKNOWN: 0,
  WEBGL: 1,
  CANVAS: 2
};
var SHAPES = {
  POLY: 0,
  RECT: 1,
  CIRC: 2,
  ELIP: 3
};

var TRANSFORM_PROPS = ["x", "y", "scaleX", "scaleY", "rotation", "scaleOrigin", "rotateOrigin"]; //??????????????????????????????
//appha ??? ????????? ????????????

var STYLE_PROPS = ["lineWidth", "strokeAlpha", "strokeStyle", "fillStyle", "fillAlpha", "globalAlpha", "shadowOffsetX", "shadowOffsetY", "shadowColor", "shadowBlur"];

/**
 * ??????????????????
 * @points [0,0,0,0]
 */
var _isInsideLine = function _isInsideLine(points, x, y, lineWidth) {
  var x0 = points[0];
  var y0 = points[1];
  var x1 = points[2];
  var y1 = points[3];

  var _l = Math.max(lineWidth, 3);

  var _a = 0;
  var _b = x0;

  if (y > y0 + _l && y > y1 + _l || y < y0 - _l && y < y1 - _l || x > x0 + _l && x > x1 + _l || x < x0 - _l && x < x1 - _l) {
    return false;
  }

  if (x0 !== x1) {
    _a = (y0 - y1) / (x0 - x1);
    _b = (x0 * y1 - x1 * y0) / (x0 - x1);
  } else {
    return Math.abs(x - x0) <= _l / 2;
  }

  var _s = (_a * x - y + _b) * (_a * x - y + _b) / (_a * _a + 1);

  return _s <= _l / 2 * _l / 2;
};

function insideLine(data, x, y, line) {
  var points = data.shape.points;
  var lineWidth = data.lineWidth;
  var insideCatch = false;

  for (var i = 0; i < points.length; ++i) {
    insideCatch = _isInsideLine(points.slice(i, i + 4), x, y, lineWidth);

    if (insideCatch) {
      break;
    }
    i += 1;
  }
  return insideCatch;
}

var settings = {
  //???????????????
  RESOLUTION: typeof window !== 'undefined' ? window.devicePixelRatio : 1,

  /**
   * Target frames per millisecond.
   */
  TARGET_FPMS: 0.06,

  /**
   * If set to true WebGL will attempt make textures mimpaped by default.
   * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
   */
  MIPMAP_TEXTURES: true,

  /**
   * Default filter resolution.
   */
  FILTER_RESOLUTION: 1,
  // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
  // TODO: maybe add PARTICLE.BATCH_SIZE: 15000

  /**
   * The default sprite batch size.
   *
   * The default aims to balance desktop and mobile devices.
   */
  SPRITE_BATCH_SIZE: 4096,

  /**
   * The prefix that denotes a URL is for a retina asset.
   */
  RETINA_PREFIX: /@(.+)x/,
  RENDER_OPTIONS: {
    view: null,
    antialias: true,
    forceFXAA: false,
    autoResize: false,
    transparent: true,
    backgroundColor: 0x000000,
    clearBeforeRender: true,
    preserveDrawingBuffer: false,
    roundPixels: false
  },
  TRANSFORM_MODE: 0,
  GC_MODE: 0,
  GC_MAX_IDLE: 60 * 60,
  GC_MAX_CHECK_COUNT: 60 * 10,
  WRAP_MODE: 0,
  SCALE_MODE: 0,
  PRECISION: 'mediump'
};

var DisplayObject =
/*#__PURE__*/
function (_event$Dispatcher) {
  inherits(DisplayObject, _event$Dispatcher);

  function DisplayObject(opt) {
    var _this;

    classCallCheck(this, DisplayObject);

    _this = possibleConstructorReturn(this, getPrototypeOf(DisplayObject).call(this, opt)); //???????????????????????????

    _this._transform = null;
    _this.worldTransform = null; //_transform?????????????????????_transformChange???true???renderer?????????worldTransform

    _this._transformChange = false; //????????????

    _this._heartBeatNum = 0; //???????????????stage??????

    _this.stage = null; //??????????????????

    _this.parent = null;
    _this.xyToInt = "xyToInt" in opt ? opt.xyToInt : true; //?????????xy????????????int??????????????????true???????????????????????????????????????????????????????????????????????????int????????????????????????????????????????????????????????????????????????sector???????????????????????????????????????????????????????????????circle??????int??????????????????sector???????????????

    _this.moveing = false; //?????????????????????????????????????????????????????????????????????true??????????????????????????????????????????????????????xyToInt????????????????????????

    _this.clip = null; //?????????????????????
    //?????????context

    _this.context = _this._createContext(opt);
    _this.type = opt.type || "DisplayObject";
    _this.id = opt.id || Utils.createId(_this.type);
    _this._trackList = []; //?????????????????????????????????????????????

    _this.init.apply(assertThisInitialized(_this), arguments); //????????????????????????????????????????????????this._updateTransform()??????_tansform


    _this._updateTransform();

    _this._tweens = [];

    var me = assertThisInitialized(_this);

    _this.on("destroy", function () {
      me.cleanAnimates();
    });

    return _this;
  }

  createClass(DisplayObject, [{
    key: "init",
    value: function init() {}
  }, {
    key: "clipTo",
    value: function clipTo(node) {
      this.clip = node;
      node.isClip = true;
    }
  }, {
    key: "_createContext",
    value: function _createContext(opt) {
      var self = this;
      var optCtx = opt.context || {};
      var _contextATTRS = {
        width: optCtx.width || 0,
        height: optCtx.height || 0,
        x: optCtx.x || 0,
        y: optCtx.y || 0,
        scaleX: optCtx.scaleX || 1,
        scaleY: optCtx.scaleY || 1,
        scaleOrigin: optCtx.scaleOrigin || {
          x: 0,
          y: 0
        },
        rotation: optCtx.rotation || 0,
        rotateOrigin: optCtx.rotateOrigin || {
          x: 0,
          y: 0
        },
        visible: optCtx.visible || true,
        globalAlpha: optCtx.globalAlpha || 1 //?????????????????????shape???

      }; //?????????clone????????????????????????????????????????????????
      //var _contextATTRS = _.extend( true , _.clone(CONTEXT_DEFAULT), opt.context );

      _.extend(true, _contextATTRS, opt.context); //????????????????????????context????????????????????????????????????????????????????????????????????????


      self._notWatch = false; //????????????????????????

      self._noHeart = false; //_contextATTRS.$owner = self;

      _contextATTRS.$watch = function (name, value, preValue) {
        //?????????????????????????????????????????????????????????????????? _transform 
        var obj = self; //this.$owner;

        if (!obj.context) {
          //????????????obj???context???????????????????????????????????????????????????
          //TODO:????????????????????????destroy ??????????????? ????????????????????????????????????
          return;
        }

        if (name == "globalGalpha") {
          obj._globalAlphaChange = true;
        }

        if (_.indexOf(TRANSFORM_PROPS, name) > -1) {
          obj._updateTransform();

          obj._transformChange = true;
        }

        if (obj._notWatch) {
          return;
        }

        if (obj.$watch) {
          //???????????????$watch??????????????????_notWatch ?????????true???????????????????????????
          obj._notWatch = true;
          obj.$watch(name, value, preValue);
          obj._notWatch = false;
        }

        if (obj._noHeart) {
          return;
        }
        obj.heartBeat({
          convertType: "context",
          shape: obj,
          name: name,
          value: value,
          preValue: preValue
        });
      }; //??????init????????????????????????????????????context????????????


      return Observe(_contextATTRS);
    } //TODO:track?????????????????????,????????????????????????

  }, {
    key: "track",
    value: function track(el) {
      if (_.indexOf(this._trackList, el) == -1) {
        this._trackList.push(el);
      }
    }
  }, {
    key: "untrack",
    value: function untrack(el) {
      var ind = _.indexOf(this._trackList, el);

      if (ind > -1) {
        this._trackList.splice(ind, 1);
      }
    }
    /* @myself ??????????????????????????? 
     * ?????????????????????????????????????????????????????????????????????????????????
     * ???????????????????????????????????????????????????id????????????
     * ???????????????????????????????????????  ?????????id?????? ????????????????????????????????????stage???????????????
     * mouseover???mouseout???????????????*/

  }, {
    key: "clone",
    value: function clone(myself) {
      var conf = {
        id: this.id,
        context: _.clone(this.context.$model),
        isClone: true
      };
      var newObj;

      if (this.type == 'text') {
        newObj = new this.constructor(this.text, conf);
      } else {
        newObj = new this.constructor(conf);
      }

      newObj.id = conf.id;

      if (this.children) {
        newObj.children = this.children;
      }

      if (this.graphics) {
        newObj.graphics = this.graphics.clone();
      }

      if (!myself) {
        newObj.id = Utils.createId(newObj.type);
      }
      return newObj;
    }
  }, {
    key: "heartBeat",
    value: function heartBeat(opt) {
      //stage???????????????self?????????display?????????????????????displayList??????????????????????????????????????????
      //??????????????????????????????stage.displayAttrHasChange
      var stage = this.getStage();

      if (stage) {
        this._heartBeatNum++;
        stage.heartBeat && stage.heartBeat(opt);
      }
    }
  }, {
    key: "getCurrentWidth",
    value: function getCurrentWidth() {
      return Math.abs(this.context.$model.width * this.context.$model.scaleX);
    }
  }, {
    key: "getCurrentHeight",
    value: function getCurrentHeight() {
      return Math.abs(this.context.$model.height * this.context.$model.scaleY);
    }
  }, {
    key: "getStage",
    value: function getStage() {
      if (this.stage) {
        return this.stage;
      }
      var p = this;

      if (p.type != "stage") {
        while (p.parent) {
          p = p.parent;

          if (p.type == "stage") {
            break;
          }
        }

        if (p.type !== "stage") {
          //?????????????????????display ???type??????Stage,??????????????????stage??????
          //????????????????????????p??????????????????display ??????????????????displayList?????????????????????????????????
          //stage?????????childen???????????????????????????????????????
          return false;
        }
      } //?????????????????????object??? ??????stage??? stage???parent???null


      this.stage = p;
      return p;
    }
  }, {
    key: "localToGlobal",
    value: function localToGlobal(point, container) {
      !point && (point = new Point(0, 0));
      var cm = this.getConcatenatedMatrix(container);
      if (cm == null) return Point(0, 0);
      var m = new Matrix(1, 0, 0, 1, point.x, point.y);
      m.concat(cm);
      return new Point(m.tx, m.ty); //{x:m.tx, y:m.ty};
    }
  }, {
    key: "globalToLocal",
    value: function globalToLocal(point, container) {
      !point && (point = new Point(0, 0));

      if (this.type == "stage") {
        return point;
      }

      var cm = this.getConcatenatedMatrix(container);
      if (cm == null) return new Point(0, 0); //{x:0, y:0};

      cm.invert(); //let originPos = cm.mulVector( [ point.x, point.y ] );
      //return new Point( originPos[0], originPos[1] );

      var m = new Matrix(1, 0, 0, 1, point.x, point.y);
      m.concat(cm);
      return new Point(m.tx, m.ty); //{x:m.tx, y:m.ty};
    }
  }, {
    key: "localToTarget",
    value: function localToTarget(point, target) {
      var p = localToGlobal(point);
      return target.globalToLocal(p);
    }
  }, {
    key: "getConcatenatedMatrix",
    value: function getConcatenatedMatrix(container) {
      var cm = new Matrix();

      for (var o = this; o != null; o = o.parent) {
        cm.concat(o._transform);

        if (!o.parent || container && o.parent && o.parent == container || o.parent && o.parent.type == "stage") {
          //if( o.type == "stage" || (o.parent && container && o.parent.type == container.type ) ) {
          return cm; //break;
        }
      }

      return cm;
    }
    /*
     *???????????????????????????????????????
     *@bool  Boolean ??????
     */

  }, {
    key: "setEventEnable",
    value: function setEventEnable(bool) {
      if (_.isBoolean(bool)) {
        this._eventEnabled = bool;
        return true;
      }
      return false;
    }
    /*
     *???????????????parent?????????????????????
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      if (!this.parent) {
        return;
      }
      return _.indexOf(this.parent.children, this);
    }
    /*
     *?????????z?????????????????????
     *@num ???????????????
     */

  }, {
    key: "toBack",
    value: function toBack(num) {
      if (!this.parent) {
        return;
      }

      var fromIndex = this.getIndex();
      var toIndex = 0;

      if (_.isNumber(num)) {
        if (num == 0) {
          //????????????
          return;
        }
        toIndex = fromIndex - num;
      }

      var me = this.parent.children.splice(fromIndex, 1)[0];

      if (toIndex < 0) {
        toIndex = 0;
      }
      this.parent.addChildAt(me, toIndex);
    }
    /*
     *?????????z?????????????????????
     *@num ?????????????????? ???????????????
     */

  }, {
    key: "toFront",
    value: function toFront(num) {
      if (!this.parent) {
        return;
      }

      var fromIndex = this.getIndex();
      var pcl = this.parent.children.length;
      var toIndex = pcl;

      if (_.isNumber(num)) {
        if (num == 0) {
          //????????????
          return;
        }

        toIndex = fromIndex + num + 1;
      }

      var me = this.parent.children.splice(fromIndex, 1)[0];

      if (toIndex > pcl) {
        toIndex = pcl;
      }

      this.parent.addChildAt(me, toIndex - 1);
    }
  }, {
    key: "_updateTransform",
    value: function _updateTransform() {
      var _transform = new Matrix();

      _transform.identity();

      var context = this.context; //????????????scale

      if (context.scaleX !== 1 || context.scaleY !== 1) {
        //???????????????
        //?????????????????????
        var origin = new Point(context.scaleOrigin);

        _transform.translate(-origin.x, -origin.y);

        _transform.scale(context.scaleX, context.scaleY);

        _transform.translate(origin.x, origin.y);
      }
      var rotation = context.rotation;

      if (rotation) {
        //???????????????
        //?????????????????????
        var origin = new Point(context.rotateOrigin);

        _transform.translate(-origin.x, -origin.y);

        _transform.rotate(rotation % 360 * Math.PI / 180);

        _transform.translate(origin.x, origin.y);
      }

      var x, y;

      if (this.xyToInt && !this.moveing) {
        //???????????????????????????????????????????????????drag???animation???????????????????????????x ??? y
        //?????????????????????????????????????????????????????????????????????????????????
        var x = parseInt(context.x);
        var y = parseInt(context.y);

        if (parseInt(context.lineWidth, 10) % 2 == 1 && context.strokeStyle) {
          x += 0.5;
          y += 0.5;
        }
      } else {
        x = context.x;
        y = context.y;
      }

      if (x != 0 || y != 0) {
        _transform.translate(x, y);
      }
      this._transform = _transform;
      return _transform;
    } //??????????????????????????????????????????
    //????????????????????????????????????????????????parent??????????????????????????????

  }, {
    key: "setWorldTransform",
    value: function setWorldTransform() {
      var cm = new Matrix();
      cm.concat(this._transform);
      this.parent && cm.concat(this.parent.worldTransform);
      this.worldTransform = cm;
      return this.worldTransform;
    } //???????????????????????????????????????

  }, {
    key: "getChildInPoint",
    value: function getChildInPoint(point) {
      var result = false; //???????????????
      //???????????????glob???point??????????????????obj???????????????????????????
      //if( this.type != "stage" && this.parent && this.parent.type != "stage" ) {
      //    point = this.parent.globalToLocal( point );
      //};
      //var m = new Matrix( Settings.RESOLUTION, 0, 0, Settings.RESOLUTION, point.x , point.y);
      //m.concat( this.worldTransform );

      var x = point.x;
      var y = point.y; //???????????????????????????????????????

      if (this.worldTransform) {
        var inverseMatrix = this.worldTransform.clone().invert();
        var originPos = [x * settings.RESOLUTION, y * settings.RESOLUTION];
        originPos = inverseMatrix.mulVector(originPos);
        x = originPos[0];
        y = originPos[1];
      }

      if (this.graphics) {
        result = this.containsPoint({
          x: x,
          y: y
        });
      }

      if (this.type == "text") {
        //???????????????????????????
        var _rect = this.getRect();

        if (!_rect.width || !_rect.height) {
          return false;
        }

        if (x >= _rect.x && x <= _rect.x + _rect.width && (_rect.height >= 0 && y >= _rect.y && y <= _rect.y + _rect.height || _rect.height < 0 && y <= _rect.y && y >= _rect.y + _rect.height)) {
          //??????????????????????????????????????????
          result = true;
        } else {
          //???????????????????????????????????????????????????????????????????????????shap
          result = false;
        }
        return result;
      }
      return result;
    }
  }, {
    key: "containsPoint",
    value: function containsPoint(point) {
      var inside = false;

      for (var i = 0; i < this.graphics.graphicsData.length; ++i) {
        var data = this.graphics.graphicsData[i];

        if (data.shape) {
          //?????????fill??? fill????????????????????????
          //???circle,ellipse?????????shape ????????????lineWidth??????fill?????????????????????????????????????????????insideLine???
          if (data.hasFill() && data.shape.contains(point.x, point.y)) {
            inside = true;

            if (inside) {
              break;
            }
          } //circle,ellipse????????????points


          if (data.hasLine() && data.shape.points) {
            //?????????????????????????????????
            inside = insideLine(data, point.x, point.y);

            if (inside) {
              break;
            }
          }
        }
      }

      return inside;
    }
    /*
    * animate
    * @param toContent ?????????????????????????????????
    * @param options tween ????????????
    */

  }, {
    key: "animate",
    value: function animate(toContent, options, context) {
      if (!context) {
        context = this.context;
      }

      if (!context) {
        //?????????????????????????????????context???????????? el ?????????destroy???
        return;
      }
      var to = toContent;
      var from = null;

      for (var p in to) {
        if (_.isObject(to[p])) {
          //options??????????????????copy???????????????????????????animate
          this.animate(to[p], _.extend({}, options), context[p]); //????????????object

          continue;
        }

        if (isNaN(to[p]) && to[p] !== '' && to[p] !== null) {
          //undefined?????????isNaN?????????
          //??????number???????????????????????????tween?????????number????????????????????????
          //TODO:?????????_.isNumber ?????? '1212' ???????????????????????????
          context[p] = to[p];
          delete to[p];
          continue;
        }

        if (!from) {
          from = {};
        }
        from[p] = context[p];
      }

      if (!from) {
        //????????????????????????????????? 
        //??????line.animate({start:{x:0,y:0}} , {duration:500});
        //???????????????start?????????  from ???????????????null
        //?????????????????????????????????????????????????????????bug
        //line.context.start ??? ???????????? line????????????????????????????????????bug
        return;
      }
      !options && (options = {});
      options.from = from;
      options.to = to;
      var self = this;

      var upFun = function upFun() {};

      if (options.onUpdate) {
        upFun = options.onUpdate;
      }
      var tween;

      options.onUpdate = function (status) {
        //??????context??????????????????obj?????????destroy????????????????????????tween???destroy
        if (!context && tween) {
          AnimationFrame.destroyTween(tween);
          tween = null;
          return;
        }

        for (var p in status) {
          context[p] = status[p];
        }
        upFun.apply(self, [status]);
      };

      var compFun = function compFun() {};

      if (options.onComplete) {
        compFun = options.onComplete;
      }

      options.onComplete = function (status) {
        compFun.apply(self, arguments);

        self._removeTween(tween);
      };

      options.onStop = function () {
        self._removeTween(tween);
      };

      options.desc = "tweenType:DisplayObject.animate__id:" + this.id + "__objectType:" + this.type;
      tween = AnimationFrame.registTween(options);

      this._tweens.push(tween);

      return tween;
    }
  }, {
    key: "_removeTween",
    value: function _removeTween(tween) {
      for (var i = 0; i < this._tweens.length; i++) {
        if (tween == this._tweens[i]) {
          this._tweens.splice(i, 1);

          break;
        }
      }
    }
  }, {
    key: "removeAnimate",
    value: function removeAnimate(animate) {
      animate.stop();

      this._removeTween(animate);
    } //?????????????????????

  }, {
    key: "cleanAnimates",
    value: function cleanAnimates() {
      this._cleanAnimates();
    } //?????????????????????

  }, {
    key: "_cleanAnimates",
    value: function _cleanAnimates() {
      while (this._tweens.length) {
        this._tweens.shift().stop();
      }
    } //???????????????

  }, {
    key: "remove",
    value: function remove() {
      if (this.parent) {
        this.parent.removeChild(this);
        this.parent = null;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this._destroy();
    } //?????????????????????

  }, {
    key: "_destroy",
    value: function _destroy() {
      this.remove();
      this.fire("destroy"); //??????????????????????????????????????????????????????????????????

      this.context = null;
      delete this.context;
    }
  }]);

  return DisplayObject;
}(event.Dispatcher);

var DisplayObjectContainer =
/*#__PURE__*/
function (_DisplayObject) {
  inherits(DisplayObjectContainer, _DisplayObject);

  function DisplayObjectContainer(opt) {
    var _this;

    classCallCheck(this, DisplayObjectContainer);

    _this = possibleConstructorReturn(this, getPrototypeOf(DisplayObjectContainer).call(this, opt));
    _this.children = [];
    _this.mouseChildren = []; //???????????????????????????event ??????????????? ??????????????????shape???eventEnable???true???
    //???????????????????????????????????????????????????????????? ???????????????????????????
    //DisplayObjectContainer??? setEventEnable() ??????

    _this._eventEnabled = true;
    return _this;
  }

  createClass(DisplayObjectContainer, [{
    key: "addChild",
    value: function addChild(child, index) {
      if (!child) {
        return;
      }

      if (this.getChildIndex(child) != -1) {
        child.parent = this;
        return child;
      }

      if (child.parent) {
        child.parent.removeChild(child);
      }

      if (index === undefined) {
        index = this.children.length;
      }
      this.children.splice(index, 0, child);
      child.parent = this;

      if (this.heartBeat) {
        this.heartBeat({
          convertType: "children",
          target: child,
          src: this
        });
      }

      if (this._afterAddChild) {
        this._afterAddChild(child);
      }
      return child;
    }
  }, {
    key: "addChildAt",
    value: function addChildAt(child, index) {
      return this.addChild(child, index);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      return this.removeChildAt(_.indexOf(this.children, child));
    }
  }, {
    key: "removeChildAt",
    value: function removeChildAt(index) {
      if (index < 0 || index > this.children.length - 1) {
        return false;
      }
      var child = this.children[index];

      if (child != null) {
        child.parent = null;
      }
      this.children.splice(index, 1);

      if (this.heartBeat) {
        this.heartBeat({
          convertType: "children",
          target: child,
          src: this
        });
      }

      if (this._afterDelChild) {
        this._afterDelChild(child, index);
      }

      return child;
    }
  }, {
    key: "removeChildById",
    value: function removeChildById(id) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i].id == id) {
          return this.removeChildAt(i);
        }
      }

      return false;
    }
  }, {
    key: "removeAllChildren",
    value: function removeAllChildren() {
      while (this.children.length > 0) {
        this.removeChildAt(0);
      }
    } //????????????????????????

  }, {
    key: "destroy",
    value: function destroy() {
      /*
      if( this.parent ){
          this.parent.removeChild(this);
          this.parent = null;
      };
      this.fire("destroy");
      */
      //???????????????????????????
      for (var i = 0, l = this.children.length; i < l; i++) {
        this.getChildAt(i).destroy();
        i--;
        l--;
      }

      this._destroy();
    } //????????????????????????

  }, {
    key: "cleanAnimates",
    value: function cleanAnimates() {
      //???????????????????????????
      for (var i = 0, l = this.children.length; i < l; i++) {
        this.getChildAt(i).cleanAnimates();
      }

      this._cleanAnimates();
    }
    /*
     *@id ?????????id
     *@boolen ????????????????????????????????????????????????????????????
     **/

  }, {
    key: "getChildById",
    value: function getChildById(id, boolen) {
      if (!boolen) {
        for (var i = 0, len = this.children.length; i < len; i++) {
          if (this.children[i].id == id) {
            return this.children[i];
          }
        }
      } else {
        //????????????
        //TODO:???????????????
        return null;
      }

      return null;
    }
  }, {
    key: "getChildAt",
    value: function getChildAt(index) {
      if (index < 0 || index > this.children.length - 1) return null;
      return this.children[index];
    }
  }, {
    key: "getChildIndex",
    value: function getChildIndex(child) {
      return _.indexOf(this.children, child);
    }
  }, {
    key: "setChildIndex",
    value: function setChildIndex(child, index) {
      if (child.parent != this) return;

      var oldIndex = _.indexOf(this.children, child);

      if (index == oldIndex) return;
      this.children.splice(oldIndex, 1);
      this.children.splice(index, 0, child);
    }
  }, {
    key: "getNumChildren",
    value: function getNumChildren() {
      return this.children.length;
    } //??????x,y???????????????object  num ???????????????obj??????

  }, {
    key: "getObjectsUnderPoint",
    value: function getObjectsUnderPoint(point, num) {
      var result = [];

      for (var i = this.children.length - 1; i >= 0; i--) {
        var child = this.children[i];

        if (child == null || !child.context.$model.visible) {
          //???????????????????????????????????????????????????????????????????????????
          continue;
        }

        if (child instanceof DisplayObjectContainer) {
          if (!child._eventEnabled) {
            //?????????????????? _eventEnabled == true; ???????????????????????????false
            //????????????????????????????????????????????????????????????????????????????????????????????????
            continue;
          }

          if (child.mouseChildren && child.getNumChildren() > 0) {
            var objs = child.getObjectsUnderPoint(point);

            if (objs.length > 0) {
              result = result.concat(objs);
            }
          }
        } else {
          if (!child._eventEnabled && !child.dragEnabled) {
            continue;
          }

          if (child.getChildInPoint(point)) {
            result.push(child);

            if (num != undefined && !isNaN(num)) {
              if (result.length == num) {
                return result;
              }
            }
          }
        }
      }

      return result;
    }
  }]);

  return DisplayObjectContainer;
}(DisplayObject);

var Stage =
/*#__PURE__*/
function (_DisplayObjectContain) {
  inherits(Stage, _DisplayObjectContain);

  function Stage(opt) {
    var _this;

    classCallCheck(this, Stage);

    opt.type = "stage";
    _this = possibleConstructorReturn(this, getPrototypeOf(Stage).call(this, opt));
    _this.canvas = null;
    _this.ctx = null; //??????????????????renderer??????,?????????????????????
    //stage???????????????

    _this.stageRending = false;
    _this._isReady = false;
    return _this;
  } //???canvax???afterAddChild ??????


  createClass(Stage, [{
    key: "initStage",
    value: function initStage(canvas, width, height) {
      var self = this;
      self.canvas = canvas;
      var model = self.context;
      model.width = width;
      model.height = height;
      model.scaleX = Utils._devicePixelRatio;
      model.scaleY = Utils._devicePixelRatio;
      self._isReady = true;
    }
  }, {
    key: "heartBeat",
    value: function heartBeat(opt) {
      //shape , name , value , preValue 
      //displayList????????????????????????
      if (!this._isReady) {
        //???stage?????????????????????????????????????????????????????????
        return;
      }
      opt || (opt = {}); //??????opt????????????????????????????????????

      opt.stage = this; //TODO?????????????????????

      this.parent && this.parent.heartBeat(opt);
    }
  }]);

  return Stage;
}(DisplayObjectContainer);

var SystemRenderer =
/*#__PURE__*/
function () {
  function SystemRenderer() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RENDERER_TYPE.UNKNOWN;
    var app = arguments.length > 1 ? arguments[1] : undefined;
    var options = arguments.length > 2 ? arguments[2] : undefined;

    classCallCheck(this, SystemRenderer);

    this.type = type; //2canvas,1webgl

    this.app = app;

    if (options) {
      for (var i in settings.RENDER_OPTIONS) {
        if (typeof options[i] === 'undefined') {
          options[i] = settings.RENDER_OPTIONS[i];
        }
      }
    } else {
      options = settings.RENDER_OPTIONS;
    }

    this.options = options;
    this.requestAid = null;
    this._heartBeat = false; //??????????????????false??????false????????????????????????????????? true???????????????

    this._preRenderTime = 0;
  } //???????????????????????????????????????????????????


  createClass(SystemRenderer, [{
    key: "startEnter",
    value: function startEnter() {
      var self = this;

      if (!self.requestAid) {
        self.requestAid = AnimationFrame.registFrame({
          id: "enterFrame",
          //????????????????????????enterFrame???task
          task: function task() {
            self.enterFrame.apply(self);
          }
        });
      }
    }
  }, {
    key: "enterFrame",
    value: function enterFrame() {
      var self = this; //??????????????????enterFrame??????????????????
      //requestAid null ???

      self.requestAid = null;
      Utils.now = new Date().getTime();

      if (self._heartBeat) {
        //var _begin = new Date().getTime();
        this.app.children.length && self.render(this.app); //var _end = new Date().getTime();
        //$(document.body).append( "<br />render???"+ (_end - _begin) );

        self._heartBeat = false; //????????????????????????????????????

        self._preRenderTime = new Date().getTime();
      }
    }
  }, {
    key: "_convertCanvax",
    value: function _convertCanvax(opt) {
      var me = this;

      _.each(me.app.children, function (stage) {
        stage.context[opt.name] = opt.value;
      });
    }
  }, {
    key: "heartBeat",
    value: function heartBeat(opt) {
      //displayList????????????????????????
      var self = this;

      if (opt) {
        //???????????????????????????????????????????????????????????????????????????children?????????
        //????????????convertType  ??? context  and children
        if (opt.convertType == "context") {
          var stage = opt.stage;
          var shape = opt.shape;
          var name = opt.name;
          var value = opt.value;
          var preValue = opt.preValue;

          if (shape.type == "canvax") {
            self._convertCanvax(opt);
          } else {
            if (!self.app.convertStages[stage.id]) {
              self.app.convertStages[stage.id] = {
                stage: stage,
                convertShapes: {}
              };
            }

            if (shape) {
              if (!self.app.convertStages[stage.id].convertShapes[shape.id]) {
                self.app.convertStages[stage.id].convertShapes[shape.id] = {
                  shape: shape,
                  convertType: opt.convertType
                };
              } else {
                //???????????????????????? shape ????????????
                return;
              }
            }
          }
        }

        if (opt.convertType == "children") {
          //???????????????????????????addchild removeChild???
          var target = opt.target;
          var stage = opt.src.getStage();

          if (stage || target.type == "stage") {
            //??????????????????????????????Stage
            stage = stage || target;

            if (!self.app.convertStages[stage.id]) {
              self.app.convertStages[stage.id] = {
                stage: stage,
                convertShapes: {}
              };
            }
          }
        }

        if (!opt.convertType) {
          //?????????????????????
          var stage = opt.stage;

          if (!self.app.convertStages[stage.id]) {
            self.app.convertStages[stage.id] = {
              stage: stage,
              convertShapes: {}
            };
          }
        }
      } else {
        //??????????????????????????????????????????resize??????
        _.each(self.app.children, function (stage, i) {
          self.app.convertStages[stage.id] = {
            stage: stage,
            convertShapes: {}
          };
        });
      }

      if (!self._heartBeat) {
        //?????????????????????????????????????????????????????????
        self._heartBeat = true;
        self.startEnter();
      } else {
        //??????????????????????????????
        self._heartBeat = true;
      }
    }
  }]);

  return SystemRenderer;
}();

var CanvasGraphicsRenderer =
/*#__PURE__*/
function () {
  function CanvasGraphicsRenderer(renderer) {
    classCallCheck(this, CanvasGraphicsRenderer);

    this.renderer = renderer;
  }
  /**
  * @param displayObject
  * @stage ?????????displayObject.getStage()?????????
  */


  createClass(CanvasGraphicsRenderer, [{
    key: "render",
    value: function render(displayObject, stage, globalAlpha, isClip) {
      var renderer = this.renderer;
      var graphicsData = displayObject.graphics.graphicsData;
      var ctx = stage.ctx;

      for (var i = 0; i < graphicsData.length; i++) {
        var data = graphicsData[i];
        var shape = data.shape;
        var fillStyle = data.fillStyle;
        var strokeStyle = data.strokeStyle;
        var fill = data.hasFill() && data.fillAlpha && !isClip;
        var line = data.hasLine() && data.strokeAlpha && !isClip;
        ctx.lineWidth = data.lineWidth;
        ctx.shadowColor = data.shadowColor;
        ctx.shadowBlur = data.shadowBlur;
        ctx.shadowOffsetX = data.shadowOffsetX;
        ctx.shadowOffsetY = data.shadowOffsetY;

        if (data.type === SHAPES.POLY) {
          //??????????????????beginPath()
          ctx.beginPath();
          this.renderPolygon(shape.points, shape.closed, ctx, isClip);

          if (fill) {
            ctx.globalAlpha = data.fillAlpha * globalAlpha;
            ctx.fillStyle = fillStyle;
            ctx.fill();
          }

          if (line) {
            ctx.globalAlpha = data.strokeAlpha * globalAlpha;
            ctx.strokeStyle = strokeStyle;

            if (fill && data.shadowBlur) {
              //?????????fill???????????????shadow??? ???????????????????????????????????????
              //??????fill????????????????????????
              ctx.shadowBlur = 0;
            }
            ctx.stroke();
          }
        } else if (data.type === SHAPES.RECT) {
          if (isClip) {
            //ctx.beginPath();
            //rect??????????????????close???path
            ctx.rect(shape.x, shape.y, shape.width, shape.height); //ctx.closePath();
          }

          if (fill) {
            ctx.globalAlpha = data.fillAlpha * globalAlpha;
            ctx.fillStyle = fillStyle;
            ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
          }

          if (line) {
            ctx.globalAlpha = data.strokeAlpha * globalAlpha;
            ctx.strokeStyle = strokeStyle;

            if (fill && data.shadowBlur) {
              //?????????fill???????????????shadow??? ???????????????????????????????????????
              //??????fill????????????????????????
              ctx.shadowBlur = 0;
            }
            ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
          }
        } else if (data.type === SHAPES.CIRC) {
          // TODO - ??????????????????????????????graphics?????????????????????radius
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
          ctx.closePath();

          if (fill) {
            ctx.globalAlpha = data.fillAlpha * globalAlpha;
            ctx.fillStyle = fillStyle;
            ctx.fill();
          }

          if (line) {
            ctx.globalAlpha = data.strokeAlpha * globalAlpha;
            ctx.strokeStyle = strokeStyle;

            if (fill && data.shadowBlur) {
              //?????????fill???????????????shadow??? ???????????????????????????????????????
              //??????fill????????????????????????
              ctx.shadowBlur = 0;
            }
            ctx.stroke();
          }
        } else if (data.type === SHAPES.ELIP) {
          var w = shape.width * 2;
          var h = shape.height * 2;
          var x = shape.x - w / 2;
          var y = shape.y - h / 2;
          ctx.beginPath();
          var kappa = 0.5522848;
          var ox = w / 2 * kappa; // control point offset horizontal

          var oy = h / 2 * kappa; // control point offset vertical

          var xe = x + w; // x-end

          var ye = y + h; // y-end

          var xm = x + w / 2; // x-middle

          var ym = y + h / 2; // y-middle

          ctx.moveTo(x, ym);
          ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
          ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
          ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
          ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
          ctx.closePath();

          if (fill) {
            ctx.globalAlpha = data.fillAlpha * globalAlpha;
            ctx.fillStyle = fillStyle;
            ctx.fill();
          }

          if (line) {
            ctx.globalAlpha = data.strokeAlpha * globalAlpha;
            ctx.strokeStyle = strokeStyle;

            if (fill && data.shadowBlur) {
              //?????????fill???????????????shadow??? ???????????????????????????????????????
              //??????fill????????????????????????
              ctx.shadowBlur = 0;
            }
            ctx.stroke();
          }
        }
      }
    }
  }, {
    key: "renderPolygon",
    value: function renderPolygon(points, close, ctx, isClip) {
      ctx.moveTo(points[0], points[1]);

      for (var j = 1; j < points.length / 2; ++j) {
        ctx.lineTo(points[j * 2], points[j * 2 + 1]);
      }

      if (close || isClip) {
        ctx.closePath();
      }
    }
  }]);

  return CanvasGraphicsRenderer;
}();

var CanvasRenderer =
/*#__PURE__*/
function (_SystemRenderer) {
  inherits(CanvasRenderer, _SystemRenderer);

  function CanvasRenderer(app) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    classCallCheck(this, CanvasRenderer);

    _this = possibleConstructorReturn(this, getPrototypeOf(CanvasRenderer).call(this, RENDERER_TYPE.CANVAS, app, options));
    _this.CGR = new CanvasGraphicsRenderer(assertThisInitialized(_this));
    return _this;
  }

  createClass(CanvasRenderer, [{
    key: "render",
    value: function render(app) {
      var me = this;
      me.app = app;

      _.each(_.values(app.convertStages), function (convertStage) {
        me.renderStage(convertStage.stage);
      });

      app.convertStages = {};
    }
  }, {
    key: "renderStage",
    value: function renderStage(stage) {
      if (!stage.ctx) {
        stage.ctx = stage.canvas.getContext("2d");
      }

      stage.stageRending = true;
      stage.setWorldTransform();

      this._clear(stage);

      this._render(stage, stage, stage.context.globalAlpha);

      stage.stageRending = false;
    }
  }, {
    key: "_render",
    value: function _render(stage, displayObject, globalAlpha) {
      var ctx = stage.ctx;

      if (!ctx) {
        return;
      }
      var $MC = displayObject.context.$model;

      if (!displayObject.worldTransform) {
        //???????????????????????????
        displayObject.fire("render");
      }

      if (!displayObject.worldTransform || displayObject._transformChange || displayObject.parent && displayObject.parent._transformChange) {
        displayObject.setWorldTransform();
        displayObject.fire("transform");
        displayObject._transformChange = true;
      }
      globalAlpha *= $MC.globalAlpha;

      if (!$MC.visible || displayObject.isClip) {
        return;
      }
      var worldMatrixArr = displayObject.worldTransform.toArray();

      if (worldMatrixArr) {
        ctx.setTransform.apply(ctx, worldMatrixArr);
      } else {
        //????????????displayObject????????????????????????????????????????????????
        return;
      }
      var isClipSave = false;

      if (displayObject.clip && displayObject.clip.graphics) {
        //?????????????????????????????????????????????????????????????????????????????????
        var _clip = displayObject.clip;
        ctx.save();
        isClipSave = true;

        if (!_clip.worldTransform || _clip._transformChange || _clip.parent._transformChange) {
          _clip.setWorldTransform();

          _clip._transformChange = true;
        }
        ctx.setTransform.apply(ctx, _clip.worldTransform.toArray()); //?????? graphicsData.length==0 ???????????????????????????_draw?????????graphics??????

        if (!_clip.graphics.graphicsData.length) {
          //????????????????????????app????????????app???????????????displayObject??????????????????????????????????????????
          _clip._draw(_clip.graphics); //_draw???????????????????????? graphicsData

        }
        this.CGR.render(_clip, stage, globalAlpha, isClipSave);
        _clip._transformChange = false;
        ctx.clip();
      }

      if (displayObject.graphics) {
        //?????? graphicsData.length==0 ???????????????????????????_draw????????? graphics ??????
        if (!displayObject.graphics.graphicsData.length) {
          //????????????????????????app????????????app???????????????displayObject??????????????????????????????????????????
          displayObject._draw(displayObject.graphics); //_draw???????????????????????? graphicsData

        }
        //?????????????????????????????????graphics.graphicsData

        if (!!globalAlpha) {
          //????????????????????????
          ctx.setLineDash([]); //??????????????????????????????????????????????????????????????????

          if ($MC.lineType && $MC.lineType != 'solid') {
            ctx.setLineDash($MC.lineDash);
          }
          this.CGR.render(displayObject, stage, globalAlpha);
        }
      }

      if (displayObject.type == "text") {
        //???????????????
        displayObject.render(ctx, globalAlpha);
      }

      if (displayObject.children) {
        for (var i = 0, len = displayObject.children.length; i < len; i++) {
          this._render(stage, displayObject.children[i], globalAlpha);
        }
      }
      displayObject._transformChange = false;

      if (isClipSave) {
        //???????????????????????????????????? ????????????????????????????????????
        ctx.restore();
      }
    }
  }, {
    key: "_clear",
    value: function _clear(stage) {
      var ctx = stage.ctx;
      ctx.setTransform.apply(ctx, stage.worldTransform.toArray());
      ctx.clearRect(0, 0, this.app.width, this.app.height);
    }
  }]);

  return CanvasRenderer;
}(SystemRenderer);

function autoRenderer(app, options) {
  return new CanvasRenderer(app, options);
  /*
     if (app.webGL && utils.isWebGLSupported())
     {
         return new WebGLRenderer( app , options);
     };
     return new CanvasRenderer( app , options);
     */
}

var Application =
/*#__PURE__*/
function (_DisplayObjectContain) {
  inherits(Application, _DisplayObjectContain);

  function Application(opt) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    classCallCheck(this, Application);

    opt.type = "canvax";
    _this = possibleConstructorReturn(this, getPrototypeOf(Application).call(this, opt));
    _this._cid = new Date().getTime() + "_" + Math.floor(Math.random() * 100);
    _this.el = $.query(opt.el);
    _this.width = parseInt("width" in opt || _this.el.offsetWidth, 10);
    _this.height = parseInt("height" in opt || _this.el.offsetHeight, 10);
    var viewObj = $.createView(_this.width, _this.height, _this._cid);
    _this.view = viewObj.view;
    _this.stageView = viewObj.stageView;
    _this.domView = viewObj.domView;
    _this.el.innerHTML = "";

    _this.el.appendChild(_this.view);

    _this.viewOffset = $.offset(_this.view);
    _this.lastGetRO = 0; //?????????????????? viewOffset ?????????

    _this.webGL = opt.webGL;
    _this.renderer = autoRenderer(assertThisInitialized(_this), options);
    _this.event = null; //????????????systenRender??????????????????????????????????????? ???????????????stages ??????

    _this.convertStages = {};
    _this.context.$model.width = _this.width;
    _this.context.$model.height = _this.height; //???????????????????????????????????? shape ??? stage ???activation

    _this._bufferStage = null;

    _this._creatHoverStage(); //?????????????????????matrix??????app????????????????????????


    _this.worldTransform = new Matrix().identity();
    return _this;
  }

  createClass(Application, [{
    key: "registEvent",
    value: function registEvent(opt) {
      //????????????????????????root????????????
      this.event = new event.Handler(this, opt);
      this.event.init();
      return this.event;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var i = 0, l = this.children.length; i < l; i++) {
        var stage = this.children[i];
        stage.destroy();
        stage.canvas = null;
        stage.ctx = null;
        stage = null;
        i--, l--;
      }

      try {
        this.view.removeChild(this.stageView);
        this.view.removeChild(this.domView);
        this.el.removeChild(this.view);
      } catch (e) {}
      this.el.innerHTML = "";
      this.event = null;
      this._bufferStage = null;
    }
  }, {
    key: "resize",
    value: function resize(opt) {
      //???????????????????????? ?????? ??????
      this.width = parseInt(opt && "width" in opt || this.el.offsetWidth, 10);
      this.height = parseInt(opt && "height" in opt || this.el.offsetHeight, 10); //this.view  width height??????????????????100%
      //this.view.style.width  = this.width +"px";
      //this.view.style.height = this.height+"px";

      this.viewOffset = $.offset(this.view);
      this.context.$model.width = this.width;
      this.context.$model.height = this.height;
      var me = this;

      var reSizeCanvas = function reSizeCanvas(canvas) {
        canvas.style.width = me.width + "px";
        canvas.style.height = me.height + "px";
        canvas.setAttribute("width", me.width * Utils._devicePixelRatio);
        canvas.setAttribute("height", me.height * Utils._devicePixelRatio);
      };

      _.each(this.children, function (s, i) {
        s.context.$model.width = me.width;
        s.context.$model.height = me.height;
        reSizeCanvas(s.canvas);
      });

      this.stageView.style.width = this.width + "px";
      this.stageView.style.height = this.height + "px";
      this.domView.style.width = this.width + "px";
      this.domView.style.height = this.height + "px";
      this.heartBeat();
    }
  }, {
    key: "getHoverStage",
    value: function getHoverStage() {
      return this._bufferStage;
    }
  }, {
    key: "_creatHoverStage",
    value: function _creatHoverStage() {
      //TODO:??????stage????????????????????????width height  ????????????
      this._bufferStage = new Stage({
        id: "activCanvas" + new Date().getTime(),
        context: {
          width: this.context.$model.width,
          height: this.context.$model.height
        }
      }); //???stage?????????????????????

      this._bufferStage._eventEnabled = false;
      this.addChild(this._bufferStage);
    }
  }, {
    key: "updateViewOffset",
    value: function updateViewOffset() {
      var now = new Date().getTime();

      if (now - this.lastGetRO > 1000) {
        this.viewOffset = $.offset(this.view);
        this.lastGetRO = now;
      }
    }
  }, {
    key: "_afterAddChild",
    value: function _afterAddChild(stage, index) {
      var canvas;

      if (!stage.canvas) {
        canvas = $.createCanvas(this.context.$model.width, this.context.$model.height, stage.id);
      } else {
        canvas = stage.canvas;
      }

      if (this.children.length == 1) {
        this.stageView.appendChild(canvas);
      } else if (this.children.length > 1) {
        if (index === undefined) {
          //?????????????????????????????????????????? _bufferStage ????????????
          this.stageView.insertBefore(canvas, this._bufferStage.canvas);
        } else {
          //??????????????????????????????????????????????????????
          if (index >= this.children.length - 1) {
            this.stageView.appendChild(canvas);
          } else {
            this.stageView.insertBefore(canvas, this.children[index].canvas);
          }
        }
      }
      Utils.initElement(canvas);
      stage.initStage(canvas, this.context.$model.width, this.context.$model.height);
    }
  }, {
    key: "_afterDelChild",
    value: function _afterDelChild(stage) {
      try {
        this.stageView.removeChild(stage.canvas);
      } catch (error) {}
    }
  }, {
    key: "heartBeat",
    value: function heartBeat(opt) {
      if (this.children.length > 0) {
        this.renderer.heartBeat(opt);
      }
    }
  }, {
    key: "toDataURL",
    value: function toDataURL() {
      var canvas = $.createCanvas(this.width, this.height, "curr_base64_canvas");
      var ctx = canvas.getContext("2d");

      _.each(this.children, function (stage) {
        ctx.drawImage(stage.canvas, 0, 0);
      });

      return canvas.toDataURL();
    }
  }]);

  return Application;
}(DisplayObjectContainer);

var Sprite =
/*#__PURE__*/
function (_DisplayObjectContain) {
  inherits(Sprite, _DisplayObjectContain);

  function Sprite(opt) {
    classCallCheck(this, Sprite);

    opt = Utils.checkOpt(opt);
    opt.type = "sprite";
    return possibleConstructorReturn(this, getPrototypeOf(Sprite).call(this, opt));
  }

  return Sprite;
}(DisplayObjectContainer);

var GraphicsData =
/*#__PURE__*/
function () {
  function GraphicsData(lineWidth, strokeStyle, strokeAlpha, fillStyle, fillAlpha, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, shape) {
    classCallCheck(this, GraphicsData);

    this.lineWidth = lineWidth;
    this.strokeStyle = strokeStyle;
    this.strokeAlpha = strokeAlpha;
    this.fillStyle = fillStyle;
    this.fillAlpha = fillAlpha;
    this.shadowOffsetX = shadowOffsetX;
    this.shadowOffsetY = shadowOffsetY;
    this.shadowBlur = shadowBlur;
    this.shadowColor = shadowColor;
    this.shape = shape;
    this.type = shape.type;
    this.holes = []; //????????????????????????????????? ?????????????????????
    //??????polygon??? ????????????????????????fill???poly????????????line???false

    this.fill = true;
    this.line = true;
  }

  createClass(GraphicsData, [{
    key: "clone",
    value: function clone() {
      var cloneGraphicsData = new GraphicsData(this.lineWidth, this.strokeStyle, this.strokeAlpha, this.fillStyle, this.fillAlpha, this.shadowOffsetX, this.shadowOffsetY, this.shadowBlur, this.shadowColor, this.shape);
      cloneGraphicsData.fill = this.fill;
      cloneGraphicsData.line = this.line;
      return cloneGraphicsData;
    }
  }, {
    key: "addHole",
    value: function addHole(shape) {
      this.holes.push(shape);
    } //?????????graphics??????????????????style??????

  }, {
    key: "synsStyle",
    value: function synsStyle(style) {
      //console.log("line:"+this.line+"__fill:"+this.fill)
      //???shape?????????????????????style??????????????????
      if (this.line) {
        this.lineWidth = style.lineWidth;
        this.strokeStyle = style.strokeStyle;
        this.strokeAlpha = style.strokeAlpha;
      }

      if (this.fill) {
        this.fillStyle = style.fillStyle;
        this.fillAlpha = style.fillAlpha;
      }

      this.shadowOffsetX = style.shadowOffsetX; //?????????????????????

      this.shadowOffsetY = style.shadowOffsetY; //?????????????????????

      this.shadowBlur = style.shadowBlur; //??????????????????

      this.shadowColor = style.shadowColor; //????????????
    }
  }, {
    key: "hasFill",
    value: function hasFill() {
      return this.fillStyle && this.fill && this.shape.closed !== undefined && this.shape.closed;
    }
  }, {
    key: "hasLine",
    value: function hasLine() {
      return this.strokeStyle && this.lineWidth && this.line;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.shape = null;
      this.holes = null;
    }
  }]);

  return GraphicsData;
}();

var arcToSegmentsCache = {},
    segmentToBezierCache = {},
    boundsOfCurveCache = {},
    _join = Array.prototype.join;
/* Adapted from http://dxr.mozilla.org/mozilla-central/source/content/svg/content/src/nsSVGPathDataParser.cpp
 * by Andrea Bogazzi code is under MPL. if you don't have a copy of the license you can take it here
 * http://mozilla.org/MPL/2.0/
 */

function arcToSegments(toX, toY, rx, ry, large, sweep, rotateX) {
  var argsString = _join.call(arguments);

  if (arcToSegmentsCache[argsString]) {
    return arcToSegmentsCache[argsString];
  }

  var PI = Math.PI,
      th = rotateX * PI / 180,
      sinTh = Math.sin(th),
      cosTh = Math.cos(th),
      fromX = 0,
      fromY = 0;
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  var px = -cosTh * toX * 0.5 - sinTh * toY * 0.5,
      py = -cosTh * toY * 0.5 + sinTh * toX * 0.5,
      rx2 = rx * rx,
      ry2 = ry * ry,
      py2 = py * py,
      px2 = px * px,
      pl = rx2 * ry2 - rx2 * py2 - ry2 * px2,
      root = 0;

  if (pl < 0) {
    var s = Math.sqrt(1 - pl / (rx2 * ry2));
    rx *= s;
    ry *= s;
  } else {
    root = (large === sweep ? -1.0 : 1.0) * Math.sqrt(pl / (rx2 * py2 + ry2 * px2));
  }

  var cx = root * rx * py / ry,
      cy = -root * ry * px / rx,
      cx1 = cosTh * cx - sinTh * cy + toX * 0.5,
      cy1 = sinTh * cx + cosTh * cy + toY * 0.5,
      mTheta = calcVectorAngle(1, 0, (px - cx) / rx, (py - cy) / ry),
      dtheta = calcVectorAngle((px - cx) / rx, (py - cy) / ry, (-px - cx) / rx, (-py - cy) / ry);

  if (sweep === 0 && dtheta > 0) {
    dtheta -= 2 * PI;
  } else if (sweep === 1 && dtheta < 0) {
    dtheta += 2 * PI;
  } // Convert into cubic bezier segments <= 90deg


  var segments = Math.ceil(Math.abs(dtheta / PI * 2)),
      result = [],
      mDelta = dtheta / segments,
      mT = 8 / 3 * Math.sin(mDelta / 4) * Math.sin(mDelta / 4) / Math.sin(mDelta / 2),
      th3 = mTheta + mDelta;

  for (var i = 0; i < segments; i++) {
    result[i] = segmentToBezier(mTheta, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY);
    fromX = result[i][4];
    fromY = result[i][5];
    mTheta = th3;
    th3 += mDelta;
  }

  arcToSegmentsCache[argsString] = result;
  return result;
}

function segmentToBezier(th2, th3, cosTh, sinTh, rx, ry, cx1, cy1, mT, fromX, fromY) {
  var argsString2 = _join.call(arguments);

  if (segmentToBezierCache[argsString2]) {
    return segmentToBezierCache[argsString2];
  }

  var costh2 = Math.cos(th2),
      sinth2 = Math.sin(th2),
      costh3 = Math.cos(th3),
      sinth3 = Math.sin(th3),
      toX = cosTh * rx * costh3 - sinTh * ry * sinth3 + cx1,
      toY = sinTh * rx * costh3 + cosTh * ry * sinth3 + cy1,
      cp1X = fromX + mT * (-cosTh * rx * sinth2 - sinTh * ry * costh2),
      cp1Y = fromY + mT * (-sinTh * rx * sinth2 + cosTh * ry * costh2),
      cp2X = toX + mT * (cosTh * rx * sinth3 + sinTh * ry * costh3),
      cp2Y = toY + mT * (sinTh * rx * sinth3 - cosTh * ry * costh3);
  segmentToBezierCache[argsString2] = [cp1X, cp1Y, cp2X, cp2Y, toX, toY];
  return segmentToBezierCache[argsString2];
}
/*
 * Private
 */


function calcVectorAngle(ux, uy, vx, vy) {
  var ta = Math.atan2(uy, ux),
      tb = Math.atan2(vy, vx);

  if (tb >= ta) {
    return tb - ta;
  } else {
    return 2 * Math.PI - (ta - tb);
  }
}
/**
 * Draws arc
 * @param {graphics} graphics
 * @param {Number} fx
 * @param {Number} fy
 * @param {Array} coords
 */


var drawArc = function drawArc(graphics, fx, fy, coords) {
  var rx = coords[0],
      ry = coords[1],
      rot = coords[2],
      large = coords[3],
      sweep = coords[4],
      tx = coords[5],
      ty = coords[6],
      segs = [[], [], [], []],
      segsNorm = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);

  for (var i = 0, len = segsNorm.length; i < len; i++) {
    segs[i][0] = segsNorm[i][0] + fx;
    segs[i][1] = segsNorm[i][1] + fy;
    segs[i][2] = segsNorm[i][2] + fx;
    segs[i][3] = segsNorm[i][3] + fy;
    segs[i][4] = segsNorm[i][4] + fx;
    segs[i][5] = segsNorm[i][5] + fy;
    graphics.bezierCurveTo.apply(graphics, segs[i]);
  }
};
/**
 * Calculate bounding box of a elliptic-arc
 * @param {Number} fx start point of arc
 * @param {Number} fy
 * @param {Number} rx horizontal radius
 * @param {Number} ry vertical radius
 * @param {Number} rot angle of horizontal axe
 * @param {Number} large 1 or 0, whatever the arc is the big or the small on the 2 points
 * @param {Number} sweep 1 or 0, 1 clockwise or counterclockwise direction
 * @param {Number} tx end point of arc
 * @param {Number} ty
 */


var getBoundsOfArc = function getBoundsOfArc(fx, fy, rx, ry, rot, large, sweep, tx, ty) {
  var fromX = 0,
      fromY = 0,
      bound,
      bounds = [],
      segs = arcToSegments(tx - fx, ty - fy, rx, ry, large, sweep, rot);

  for (var i = 0, len = segs.length; i < len; i++) {
    bound = getBoundsOfCurve(fromX, fromY, segs[i][0], segs[i][1], segs[i][2], segs[i][3], segs[i][4], segs[i][5]);
    bounds.push({
      x: bound[0].x + fx,
      y: bound[0].y + fy
    });
    bounds.push({
      x: bound[1].x + fx,
      y: bound[1].y + fy
    });
    fromX = segs[i][4];
    fromY = segs[i][5];
  }

  return bounds;
};
/**
 * Calculate bounding box of a beziercurve
 * @param {Number} x0 starting point
 * @param {Number} y0
 * @param {Number} x1 first control point
 * @param {Number} y1
 * @param {Number} x2 secondo control point
 * @param {Number} y2
 * @param {Number} x3 end of beizer
 * @param {Number} y3
 */
// taken from http://jsbin.com/ivomiq/56/edit  no credits available for that.


function getBoundsOfCurve(x0, y0, x1, y1, x2, y2, x3, y3) {
  var argsString = _join.call(arguments);

  if (boundsOfCurveCache[argsString]) {
    return boundsOfCurveCache[argsString];
  }

  var sqrt = Math.sqrt,
      min = Math.min,
      max = Math.max,
      abs = Math.abs,
      tvalues = [],
      bounds = [[], []],
      a,
      b,
      c,
      t,
      t1,
      t2,
      b2ac,
      sqrtb2ac;
  b = 6 * x0 - 12 * x1 + 6 * x2;
  a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
  c = 3 * x1 - 3 * x0;

  for (var i = 0; i < 2; ++i) {
    if (i > 0) {
      b = 6 * y0 - 12 * y1 + 6 * y2;
      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
      c = 3 * y1 - 3 * y0;
    }

    if (abs(a) < 1e-12) {
      if (abs(b) < 1e-12) {
        continue;
      }

      t = -c / b;

      if (0 < t && t < 1) {
        tvalues.push(t);
      }

      continue;
    }

    b2ac = b * b - 4 * c * a;

    if (b2ac < 0) {
      continue;
    }

    sqrtb2ac = sqrt(b2ac);
    t1 = (-b + sqrtb2ac) / (2 * a);

    if (0 < t1 && t1 < 1) {
      tvalues.push(t1);
    }

    t2 = (-b - sqrtb2ac) / (2 * a);

    if (0 < t2 && t2 < 1) {
      tvalues.push(t2);
    }
  }

  var x,
      y,
      j = tvalues.length,
      jlen = j,
      mt;

  while (j--) {
    t = tvalues[j];
    mt = 1 - t;
    x = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
    bounds[0][j] = x;
    y = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
    bounds[1][j] = y;
  }

  bounds[0][jlen] = x0;
  bounds[1][jlen] = y0;
  bounds[0][jlen + 1] = x3;
  bounds[1][jlen + 1] = y3;
  var result = [{
    x: min.apply(null, bounds[0]),
    y: min.apply(null, bounds[1])
  }, {
    x: max.apply(null, bounds[0]),
    y: max.apply(null, bounds[1])
  }];
  boundsOfCurveCache[argsString] = result;
  return result;
}

var Arc = {
  drawArc: drawArc,
  getBoundsOfCurve: getBoundsOfCurve,
  getBoundsOfArc: getBoundsOfArc
};

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    classCallCheck(this, Rectangle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = SHAPES.RECT;
    this.closed = true;
  }

  createClass(Rectangle, [{
    key: "clone",
    value: function clone() {
      return new Rectangle(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "copy",
    value: function copy(rectangle) {
      this.x = rectangle.x;
      this.y = rectangle.y;
      this.width = rectangle.width;
      this.height = rectangle.height;
      return this;
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      /*
      if (this.width <= 0 || this.height <= 0)
      {
          return false;
      }
      */
      if (this.height * y < 0 || this.width * x < 0) {
        return false;
      }

      if (x >= this.x && x <= this.x + this.width && (this.height >= 0 && y >= this.y && y <= this.y + this.height || this.height < 0 && y <= this.y && y >= this.y + this.height)) {
        return true;
      }

      return false; //???x??? width , y???height??? ????????????????????????????????????????????????????????????
    }
  }]);

  return Rectangle;
}();

var Circle =
/*#__PURE__*/
function () {
  function Circle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.type = SHAPES.CIRC;
    this.closed = true;
  }

  createClass(Circle, [{
    key: "clone",
    value: function clone() {
      return new Circle(this.x, this.y, this.radius);
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      if (this.radius <= 0) {
        return false;
      }

      var r2 = this.radius * this.radius;
      var dx = this.x - x;
      var dy = this.y - y;
      dx *= dx;
      dy *= dy;
      return dx + dy <= r2;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }
  }]);

  return Circle;
}();

var Ellipse =
/*#__PURE__*/
function () {
  function Ellipse() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    classCallCheck(this, Ellipse);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = SHAPES.ELIP;
    this.closed = true;
  }

  createClass(Ellipse, [{
    key: "clone",
    value: function clone() {
      return new Ellipse(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }

      var normx = (x - this.x) / this.width;
      var normy = (y - this.y) / this.height;
      normx *= normx;
      normy *= normy;
      return normx + normy <= 1;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
    }
  }]);

  return Ellipse;
}();

var Polygon =
/*#__PURE__*/
function () {
  function Polygon() {
    for (var _len = arguments.length, points = new Array(_len), _key = 0; _key < _len; _key++) {
      points[_key] = arguments[_key];
    }

    classCallCheck(this, Polygon);

    var point_0 = points[0];

    if (Array.isArray(point_0)) {
      points = point_0;
    }

    if (point_0 && "x" in point_0 && "y" in point_0) {
      var p = [];

      for (var i = 0, il = points.length; i < il; i++) {
        p.push(points[i].x, points[i].y);
      }

      points = p;
    }

    this.closed = true;
    this.points = points;
    this.type = SHAPES.POLY;
  }

  createClass(Polygon, [{
    key: "clone",
    value: function clone() {
      return new Polygon(this.points.slice());
    }
  }, {
    key: "close",
    value: function close() {
      var points = this.points;

      if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
        points.push(points[0], points[1]);
      }

      this.closed = true;
    }
  }, {
    key: "contains",
    value: function contains(x, y) {
      return this._isInsidePolygon_WindingNumber(x, y);
    }
    /**
     * ????????????????????? Nonzero Winding Number Rule
     */

  }, {
    key: "_isInsidePolygon_WindingNumber",
    value: function _isInsidePolygon_WindingNumber(x, y) {
      var points = this.points;
      var wn = 0;

      for (var shiftP, shift = points[1] > y, i = 3; i < points.length; i += 2) {
        shiftP = shift;
        shift = points[i] > y;

        if (shiftP != shift) {
          var n = (shiftP ? 1 : 0) - (shift ? 1 : 0);

          if (n * ((points[i - 3] - x) * (points[i - 0] - y) - (points[i - 2] - y) * (points[i - 1] - x)) > 0) {
            wn += n;
          }
        }
      }
      return wn;
    }
  }]);

  return Polygon;
}();

function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
  var path = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];
  var n = 20;
  var dt = 0;
  var dt2 = 0;
  var dt3 = 0;
  var t2 = 0;
  var t3 = 0;
  path.push(fromX, fromY);

  for (var i = 1, j = 0; i <= n; ++i) {
    j = i / n;
    dt = 1 - j;
    dt2 = dt * dt;
    dt3 = dt2 * dt;
    t2 = j * j;
    t3 = t2 * j;
    path.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
  }

  return path;
}

var Graphics =
/*#__PURE__*/
function () {
  function Graphics(shape) {
    classCallCheck(this, Graphics);

    this.lineWidth = 1;
    this.strokeStyle = null;
    this.strokeAlpha = 1;
    this.fillStyle = null;
    this.fillAlpha = 1;
    this.shadowOffsetX = 0; //?????????????????????

    this.shadowOffsetY = 0; //?????????????????????

    this.shadowBlur = 0; //??????????????????

    this.shadowColor = 'black'; //????????????
    //??????path m 0 0 l 0 0 m 1 1 l 1 1
    //???????????????graphicsData????????????

    this.graphicsData = [];
    this.currentPath = null;
    this.dirty = 0; //?????????????????????????????????????????? ?????????????????????true??????????????????????????????????????????

    this.clearDirty = 0; //???????????????????????????????????????webGL??????

    this._webGL = {};
    this.worldAlpha = 1;
    this.tint = 0xFFFFFF; //????????????????????????

    this.Bound = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }

  createClass(Graphics, [{
    key: "setStyle",
    value: function setStyle(context) {
      //??? shape ?????????????????????style??????????????????
      var model = context.$model;
      this.lineWidth = model.lineWidth;
      this.strokeStyle = model.strokeStyle;
      this.strokeAlpha = model.strokeAlpha * model.globalAlpha;
      this.fillStyle = model.fillStyle;
      this.fillAlpha = model.fillAlpha * model.globalAlpha;
      this.shadowOffsetX = model.shadowOffsetX; //?????????????????????

      this.shadowOffsetY = model.shadowOffsetY; //?????????????????????

      this.shadowBlur = model.shadowBlur; //??????????????????

      this.shadowColor = model.shadowColor; //????????????

      var g = this; //????????????????????????style???????????? ??? ???????????????????????????style?????????
      //???????????????data?????????
      //TODO: ??????????????????, ??????????????????????????? graphicsData ????????????data

      if (this.graphicsData.length) {
        _.each(this.graphicsData, function (gd, i) {
          gd.synsStyle(g);
        });
      }
    }
  }, {
    key: "clone",
    value: function clone() {
      var clone = new Graphics();
      clone.dirty = 0; // copy graphics data

      for (var i = 0; i < this.graphicsData.length; ++i) {
        clone.graphicsData.push(this.graphicsData[i].clone());
      }

      clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];
      return clone;
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      var shape = new Polygon([x, y]);
      shape.closed = false;
      this.drawShape(shape);
      return this;
    }
  }, {
    key: "lineTo",
    value: function lineTo(x, y) {
      if (this.currentPath) {
        this.currentPath.shape.points.push(x, y);
        this.dirty++;
      } else {
        this.moveTo(0, 0);
      }

      return this;
    }
  }, {
    key: "quadraticCurveTo",
    value: function quadraticCurveTo(cpX, cpY, toX, toY) {
      if (this.currentPath) {
        if (this.currentPath.shape.points.length === 0) {
          this.currentPath.shape.points = [0, 0];
        }
      } else {
        this.moveTo(0, 0);
      }

      var n = 20;
      var points = this.currentPath.shape.points;
      var xa = 0;
      var ya = 0;

      if (points.length === 0) {
        this.moveTo(0, 0);
      }

      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];

      for (var i = 1; i <= n; ++i) {
        var j = i / n;
        xa = fromX + (cpX - fromX) * j;
        ya = fromY + (cpY - fromY) * j;
        points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
      }

      this.dirty++;
      return this;
    }
  }, {
    key: "bezierCurveTo",
    value: function bezierCurveTo$1(cpX, cpY, cpX2, cpY2, toX, toY) {
      if (this.currentPath) {
        if (this.currentPath.shape.points.length === 0) {
          this.currentPath.shape.points = [0, 0];
        }
      } else {
        this.moveTo(0, 0);
      }

      var points = this.currentPath.shape.points;
      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];
      points.length -= 2;

      bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, points);

      this.dirty++;
      return this;
    }
  }, {
    key: "arcTo",
    value: function arcTo(x1, y1, x2, y2, radius) {
      if (this.currentPath) {
        if (this.currentPath.shape.points.length === 0) {
          this.currentPath.shape.points.push(x1, y1);
        }
      } else {
        this.moveTo(x1, y1);
      }

      var points = this.currentPath.shape.points;
      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];
      var a1 = fromY - y1;
      var b1 = fromX - x1;
      var a2 = y2 - y1;
      var b2 = x2 - x1;
      var mm = Math.abs(a1 * b2 - b1 * a2);

      if (mm < 1.0e-8 || radius === 0) {
        if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
          points.push(x1, y1);
        }
      } else {
        var dd = a1 * a1 + b1 * b1;
        var cc = a2 * a2 + b2 * b2;
        var tt = a1 * a2 + b1 * b2;
        var k1 = radius * Math.sqrt(dd) / mm;
        var k2 = radius * Math.sqrt(cc) / mm;
        var j1 = k1 * tt / dd;
        var j2 = k2 * tt / cc;
        var cx = k1 * b2 + k2 * b1;
        var cy = k1 * a2 + k2 * a1;
        var px = b1 * (k2 + j1);
        var py = a1 * (k2 + j1);
        var qx = b2 * (k1 + j2);
        var qy = a2 * (k1 + j2);
        var startAngle = Math.atan2(py - cy, px - cx);
        var endAngle = Math.atan2(qy - cy, qx - cx);
        this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
      }

      this.dirty++;
      return this;
    }
  }, {
    key: "arc",
    value: function arc(cx, cy, radius, startAngle, endAngle) {
      var anticlockwise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (startAngle === endAngle) {
        return this;
      }

      if (!anticlockwise && endAngle <= startAngle) {
        endAngle += Math.PI * 2;
      } else if (anticlockwise && startAngle <= endAngle) {
        startAngle += Math.PI * 2;
      }

      var sweep = endAngle - startAngle;
      var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 48;

      if (sweep === 0) {
        return this;
      }

      var startX = cx + Math.cos(startAngle) * radius;
      var startY = cy + Math.sin(startAngle) * radius; // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.

      var points = this.currentPath ? this.currentPath.shape.points : null;

      if (points) {
        if (points[points.length - 2] !== startX || points[points.length - 1] !== startY) {
          points.push(startX, startY);
        }
      } else {
        this.moveTo(startX, startY);
        points = this.currentPath.shape.points;
      }

      var theta = sweep / (segs * 2);
      var theta2 = theta * 2;
      var cTheta = Math.cos(theta);
      var sTheta = Math.sin(theta);
      var segMinus = segs - 1;
      var remainder = segMinus % 1 / segMinus;

      for (var i = 0; i <= segMinus; ++i) {
        var real = i + remainder * i;
        var angle = theta + startAngle + theta2 * real;
        var c = Math.cos(angle);
        var s = -Math.sin(angle);
        points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
      }

      this.dirty++;
      return this;
    }
  }, {
    key: "drawRect",
    value: function drawRect(x, y, width, height) {
      this.drawShape(new Rectangle(x, y, width, height));
      return this;
    }
  }, {
    key: "drawCircle",
    value: function drawCircle(x, y, radius) {
      this.drawShape(new Circle(x, y, radius));
      return this;
    }
  }, {
    key: "drawEllipse",
    value: function drawEllipse(x, y, width, height) {
      this.drawShape(new Ellipse(x, y, width, height));
      return this;
    }
  }, {
    key: "drawPolygon",
    value: function drawPolygon(path) {
      // prevents an argument assignment deopt
      // see section 3.1: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
      var points = path;
      var closed = true;

      if (points instanceof Polygon) {
        closed = points.closed;
        points = points.points;
      }

      if (!Array.isArray(points)) {
        // prevents an argument leak deopt
        // see section 3.2: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
        points = new Array(arguments.length);

        for (var i = 0; i < points.length; ++i) {
          points[i] = arguments[i]; // eslint-disable-line prefer-rest-params
        }
      }

      var shape = new Polygon(points);
      shape.closed = closed;
      this.drawShape(shape);
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.graphicsData.length > 0) {
        this.dirty++;
        this.clearDirty++;
        this.graphicsData.length = 0;
      }

      this.currentPath = null;
      return this;
    }
  }, {
    key: "drawShape",
    value: function drawShape(shape) {
      if (this.currentPath) {
        if (this.currentPath.shape.points.length <= 2) {
          this.graphicsData.pop();
        }
      } //this.currentPath = null;


      this.beginPath();
      var data = new GraphicsData(this.lineWidth, this.strokeStyle, this.strokeAlpha, this.fillStyle, this.fillAlpha, this.shadowOffsetX, //?????????????????????
      this.shadowOffsetY, //?????????????????????
      this.shadowBlur, //??????????????????
      this.shadowColor, //????????????
      shape);
      this.graphicsData.push(data);

      if (data.type === SHAPES.POLY) {
        data.shape.closed = data.shape.closed;
        this.currentPath = data;
      }

      this.dirty++;
      return data;
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      this.currentPath = null;
    }
  }, {
    key: "closePath",
    value: function closePath() {
      var currentPath = this.currentPath;

      if (currentPath && currentPath.shape) {
        currentPath.shape.close();
      }

      return this;
    }
    /**
    * Update the bounds of the object
    *
    */

  }, {
    key: "updateLocalBounds",
    value: function updateLocalBounds() {
      var minX = Infinity;
      var maxX = -Infinity;
      var minY = Infinity;
      var maxY = -Infinity;

      if (this.graphicsData.length) {
        var shape = 0;
        var x = 0;
        var y = 0;
        var w = 0;
        var h = 0;

        for (var i = 0; i < this.graphicsData.length; i++) {
          var data = this.graphicsData[i];
          var type = data.type;
          var lineWidth = data.lineWidth;
          shape = data.shape;

          if (type === SHAPES.RECT || type === SHAPES.RREC) {
            x = shape.x - lineWidth / 2;
            y = shape.y - lineWidth / 2;
            w = shape.width + lineWidth;
            h = shape.height + lineWidth;
            minX = x < minX ? x : minX;
            maxX = x + w > maxX ? x + w : maxX;
            minY = y < minY ? y : minY;
            maxY = y + h > maxY ? y + h : maxY;
          } else if (type === SHAPES.CIRC) {
            x = shape.x;
            y = shape.y;
            w = shape.radius + lineWidth / 2;
            h = shape.radius + lineWidth / 2;
            minX = x - w < minX ? x - w : minX;
            maxX = x + w > maxX ? x + w : maxX;
            minY = y - h < minY ? y - h : minY;
            maxY = y + h > maxY ? y + h : maxY;
          } else if (type === SHAPES.ELIP) {
            x = shape.x;
            y = shape.y;
            w = shape.width + lineWidth / 2;
            h = shape.height + lineWidth / 2;
            minX = x - w < minX ? x - w : minX;
            maxX = x + w > maxX ? x + w : maxX;
            minY = y - h < minY ? y - h : minY;
            maxY = y + h > maxY ? y + h : maxY;
          } else {
            // POLY
            var points = shape.points;
            var x2 = 0;
            var y2 = 0;
            var dx = 0;
            var dy = 0;
            var rw = 0;
            var rh = 0;
            var cx = 0;
            var cy = 0;

            for (var j = 0; j + 2 < points.length; j += 2) {
              x = points[j];
              y = points[j + 1];
              x2 = points[j + 2];
              y2 = points[j + 3];
              dx = Math.abs(x2 - x);
              dy = Math.abs(y2 - y);
              h = lineWidth;
              w = Math.sqrt(dx * dx + dy * dy);

              if (w < 1e-9) {
                continue;
              }

              rw = (h / w * dy + dx) / 2;
              rh = (h / w * dx + dy) / 2;
              cx = (x2 + x) / 2;
              cy = (y2 + y) / 2;
              minX = cx - rw < minX ? cx - rw : minX;
              maxX = cx + rw > maxX ? cx + rw : maxX;
              minY = cy - rh < minY ? cy - rh : minY;
              maxY = cy + rh > maxY ? cy + rh : maxY;
            }
          }
        }
      } else {
        minX = 0;
        maxX = 0;
        minY = 0;
        maxY = 0;
      }

      this.Bound = {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
      return this;
    }
  }, {
    key: "getBound",
    value: function getBound() {
      return this.updateLocalBounds().Bound;
    }
  }, {
    key: "destroy",
    value: function destroy(options) {
      for (var i = 0; i < this.graphicsData.length; ++i) {
        this.graphicsData[i].destroy();
      }

      for (var id in this._webGL) {
        for (var j = 0; j < this._webGL[id].data.length; ++j) {
          this._webGL[id].data[j].destroy();
        }
      }

      this.graphicsData = null;
      this.currentPath = null;
      this._webGL = null;
    }
  }]);

  return Graphics;
}();

var Shape =
/*#__PURE__*/
function (_DisplayObject) {
  inherits(Shape, _DisplayObject);

  function Shape(opt) {
    var _this;

    classCallCheck(this, Shape);

    opt = Utils.checkOpt(opt);
    var styleContext = {
      cursor: opt.context.cursor || "default",
      fillAlpha: opt.context.fillAlpha || 1,
      //context2d?????????????????????
      fillStyle: opt.context.fillStyle || null,
      //"#000000",
      lineCap: opt.context.lineCap || "round",
      //??????????????????
      lineJoin: opt.context.lineJoin || "round",
      //???????????????webgl???????????????
      miterLimit: opt.context.miterLimit || null,
      //miterLimit ???????????????????????????????????????,????????? lineJoin ????????? "miter" ??????miterLimit ????????????
      strokeAlpha: opt.context.strokeAlpha || 1,
      //context2d?????????????????????
      strokeStyle: opt.context.strokeStyle || null,
      lineType: opt.context.lineType || "solid",
      //context2d??????????????????????????????type??????????????????
      lineDash: opt.context.lineDash || [6, 3],
      lineWidth: opt.context.lineWidth || null,
      shadowOffsetX: opt.context.shadowOffsetX || 0,
      //?????????????????????
      shadowOffsetY: opt.context.shadowOffsetY || 0,
      //?????????????????????
      shadowBlur: opt.context.shadowBlur || 0,
      //??????????????????
      shadowColor: opt.context.shadowColor || "#000000" //????????????

    };

    var _context = _.extend(true, styleContext, opt.context);

    opt.context = _context;

    if (opt.id === undefined && opt.type !== undefined) {
      opt.id = Utils.createId(opt.type);
    }
    _this = possibleConstructorReturn(this, getPrototypeOf(Shape).call(this, opt)); //over???????????????????????????????????????true

    _this._hoverClass = false;
    _this.hoverClone = true; //???????????????hover?????????clone?????????active stage ??? 

    _this.pointChkPriority = true; //?????????mouseover?????????????????????mousemove???????????????????????????????????????

    _this._eventEnabled = false; //????????????????????????,?????????????????????????????????????????????true

    _this.dragEnabled = opt.dragEnabled || false; //"dragEnabled" in opt ? opt.dragEnabled : false;   //???????????????????????????
    //??????drag??????????????????activShape?????????

    _this._dragDuplicate = null;
    _this.type = _this.type || "shape"; //????????????????????????????????????????????????,?????????id,context???????????????????????????????????????this??????

    _this.initCompProperty(opt); //??????????????????clone???????????????????????????


    if (!_this.isClone) {
      //?????????clone?????????????????????
      _this.graphics = new Graphics();

      _this._draw(_this.graphics);
    } else {
      _this.graphics = null;
    }

    return _this;
  }

  createClass(Shape, [{
    key: "_draw",
    value: function _draw(graphics) {
      if (graphics.graphicsData.length == 0) {
        //??????????????????graphics???style
        graphics.setStyle(this.context);
        this.draw(graphics);
      }
    }
  }, {
    key: "draw",
    value: function draw() {}
  }, {
    key: "clearGraphicsData",
    value: function clearGraphicsData() {
      this.graphics.clear();
    }
  }, {
    key: "$watch",
    value: function $watch(name, value, preValue) {
      if (_.indexOf(STYLE_PROPS, name) > -1) {
        this.graphics.setStyle(this.context);
      }
      this.watch(name, value, preValue);
    }
  }, {
    key: "initCompProperty",
    value: function initCompProperty(opt) {
      for (var i in opt) {
        if (i != "id" && i != "context") {
          this[i] = opt[i];
        }
      }
    }
  }, {
    key: "getBound",
    value: function getBound() {
      return this.graphics.updateLocalBounds().Bound;
    }
  }]);

  return Shape;
}(DisplayObject);

var Text =
/*#__PURE__*/
function (_DisplayObject) {
  inherits(Text, _DisplayObject);

  function Text(text, opt) {
    var _this;

    classCallCheck(this, Text);

    opt.type = "text";

    if (text === null || text === undefined) {
      text = "";
    }
    opt.context = _.extend({
      font: "",
      fontSize: 13,
      //??????????????????13
      fontWeight: "normal",
      fontFamily: "????????????,sans-serif",
      textBaseline: "top",
      textAlign: "left",
      textDecoration: null,
      fillStyle: 'blank',
      strokeStyle: null,
      lineWidth: 0,
      lineHeight: 1.2,
      backgroundColor: null,
      textBackgroundColor: null
    }, opt.context);
    _this = possibleConstructorReturn(this, getPrototypeOf(Text).call(this, opt));
    _this._reNewline = /\r?\n/;
    _this.fontProperts = ["fontStyle", "fontVariant", "fontWeight", "fontSize", "fontFamily"];
    _this.context.font = _this._getFontDeclaration();
    _this.text = text.toString();
    _this.context.width = _this.getTextWidth();
    _this.context.height = _this.getTextHeight();
    return _this;
  }

  createClass(Text, [{
    key: "$watch",
    value: function $watch(name, value, preValue) {
      //context??????????????????????????????
      if (_.indexOf(this.fontProperts, name) >= 0) {
        this.context[name] = value; //??????????????????font???????????????????????????????????????font?????????
        //???????????????????????????context?????????????????????

        this.context.font = this._getFontDeclaration();
        this.context.width = this.getTextWidth();
        this.context.height = this.getTextHeight();
      }
    }
  }, {
    key: "_setContextStyle",
    value: function _setContextStyle(ctx, style, globalAlpha) {
      // ????????????????????????????????????
      for (var p in style) {
        if (p != "textBaseline" && p in ctx) {
          if (style[p] || _.isNumber(style[p])) {
            if (p == "globalAlpha") {
              //??????????????????????????????
              //ctx[p] = style[p] * globalAlpha; //render?????????????????????????????????????????????*
              ctx.globalAlpha = globalAlpha;
            } else {
              ctx[p] = style[p];
            }
          }
        }
      }
      return;
    }
  }, {
    key: "render",
    value: function render(ctx, globalAlpha) {
      this._renderText(ctx, this._getTextLines(), globalAlpha);
    }
  }, {
    key: "resetText",
    value: function resetText(text) {
      this.text = text.toString();
      this.heartBeat();
    }
  }, {
    key: "getTextWidth",
    value: function getTextWidth() {
      var width = 0;

      if (Utils._pixelCtx) {
        Utils._pixelCtx.save();

        Utils._pixelCtx.font = this.context.$model.font;
        width = this._getTextWidth(Utils._pixelCtx, this._getTextLines());

        Utils._pixelCtx.restore();
      }
      return width;
    }
  }, {
    key: "getTextHeight",
    value: function getTextHeight() {
      return this._getTextHeight(Utils._pixelCtx, this._getTextLines());
    }
  }, {
    key: "_getTextLines",
    value: function _getTextLines() {
      return this.text.split(this._reNewline);
    }
  }, {
    key: "_renderText",
    value: function _renderText(ctx, textLines, globalAlpha) {
      if (!ctx) return;
      ctx.save();

      this._setContextStyle(ctx, this.context.$model, globalAlpha);

      this._renderTextStroke(ctx, textLines);

      this._renderTextFill(ctx, textLines);

      ctx.restore();
    }
  }, {
    key: "_getFontDeclaration",
    value: function _getFontDeclaration() {
      var self = this;
      var fontArr = [];

      _.each(this.fontProperts, function (p) {
        var fontP = self.context[p];

        if (p == "fontSize") {
          fontP = parseFloat(fontP) + "px";
        }

        fontP && fontArr.push(fontP);
      });

      return fontArr.join(' ');
    }
  }, {
    key: "_renderTextFill",
    value: function _renderTextFill(ctx, textLines) {
      if (!this.context.$model.fillStyle) return;
      this._boundaries = [];
      var lineHeights = 0;

      for (var i = 0, len = textLines.length; i < len; i++) {
        var heightOfLine = this._getHeightOfLine(ctx, i, textLines);

        lineHeights += heightOfLine;

        this._renderTextLine('fillText', ctx, textLines[i], 0, //this._getLeftOffset(),
        this._getTopOffset() + lineHeights, i);
      }
    }
  }, {
    key: "_renderTextStroke",
    value: function _renderTextStroke(ctx, textLines) {
      if (!ctx) return;
      if (!this.context.$model.strokeStyle || !this.context.$model.lineWidth) return;
      var lineHeights = 0;
      ctx.save();

      if (this.strokeDashArray) {
        if (1 & this.strokeDashArray.length) {
          this.strokeDashArray.push.apply(this.strokeDashArray, this.strokeDashArray);
        }

        supportsLineDash && ctx.setLineDash(this.strokeDashArray);
      }

      ctx.beginPath();

      for (var i = 0, len = textLines.length; i < len; i++) {
        var heightOfLine = this._getHeightOfLine(ctx, i, textLines);

        lineHeights += heightOfLine;

        this._renderTextLine('strokeText', ctx, textLines[i], 0, //this._getLeftOffset(),
        this._getTopOffset() + lineHeights, i);
      }

      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: "_renderTextLine",
    value: function _renderTextLine(method, ctx, line, left, top, lineIndex) {
      top -= this._getHeightOfLine() / 4;

      if (this.context.$model.textAlign !== 'justify') {
        this._renderChars(method, ctx, line, left, top, lineIndex);

        return;
      }
      var lineWidth = ctx.measureText(line).width;
      var totalWidth = this.context.$model.width;

      if (totalWidth > lineWidth) {
        var words = line.split(/\s+/);
        var wordsWidth = ctx.measureText(line.replace(/\s+/g, '')).width;
        var widthDiff = totalWidth - wordsWidth;
        var numSpaces = words.length - 1;
        var spaceWidth = widthDiff / numSpaces;
        var leftOffset = 0;

        for (var i = 0, len = words.length; i < len; i++) {
          this._renderChars(method, ctx, words[i], left + leftOffset, top, lineIndex);

          leftOffset += ctx.measureText(words[i]).width + spaceWidth;
        }
      } else {
        this._renderChars(method, ctx, line, left, top, lineIndex);
      }
    }
  }, {
    key: "_renderChars",
    value: function _renderChars(method, ctx, chars, left, top) {
      ctx[method](chars, 0, top);
    }
  }, {
    key: "_getHeightOfLine",
    value: function _getHeightOfLine() {
      return this.context.$model.fontSize * this.context.$model.lineHeight;
    }
  }, {
    key: "_getTextWidth",
    value: function _getTextWidth(ctx, textLines) {
      var maxWidth = ctx.measureText(textLines[0] || '|').width;

      for (var i = 1, len = textLines.length; i < len; i++) {
        var currentLineWidth = ctx.measureText(textLines[i]).width;

        if (currentLineWidth > maxWidth) {
          maxWidth = currentLineWidth;
        }
      }

      return maxWidth;
    }
  }, {
    key: "_getTextHeight",
    value: function _getTextHeight(ctx, textLines) {
      return this.context.$model.fontSize * textLines.length * this.context.$model.lineHeight;
    }
    /**
     * @private
     * @return {Number} Top offset
     */

  }, {
    key: "_getTopOffset",
    value: function _getTopOffset() {
      var t = 0;

      switch (this.context.$model.textBaseline) {
        case "top":
          t = 0;
          break;

        case "middle":
          t = -this.context.$model.height / 2;
          break;

        case "bottom":
          t = -this.context.$model.height;
          break;
      }

      return t;
    }
  }, {
    key: "getRect",
    value: function getRect() {
      var c = this.context;
      var x = 0;
      var y = 0; //??????textAlign ??? textBaseline ???????????? xy

      if (c.textAlign == "center") {
        x = -c.width / 2;
      }

      if (c.textAlign == "right") {
        x = -c.width;
      }

      if (c.textBaseline == "middle") {
        y = -c.height / 2;
      }

      if (c.textBaseline == "bottom") {
        y = -c.height;
      }
      return {
        x: x,
        y: y,
        width: c.width,
        height: c.height
      };
    }
  }]);

  return Text;
}(DisplayObject);

/**
 * Canvax
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com)
 *
 * ???????????????
 * */

function Vector(x, y) {
  var vx = 0,
      vy = 0;

  if (arguments.length == 1 && _.isObject(x)) {
    var arg = arguments[0];

    if (_.isArray(arg)) {
      vx = arg[0];
      vy = arg[1];
    } else if (arg.hasOwnProperty("x") && arg.hasOwnProperty("y")) {
      vx = arg.x;
      vy = arg.y;
    }
  }

  this._axes = [vx, vy];
}
Vector.prototype = {
  distance: function distance(v) {
    var x = this._axes[0] - v._axes[0];
    var y = this._axes[1] - v._axes[1];
    return Math.sqrt(x * x + y * y);
  }
};

/**
 * Canvax
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com)
 *
 * ?????????????????????
 */
/**
 * @inner
 */

function interpolate(p0, p1, p2, p3, t, t2, t3) {
  var v0 = (p2 - p0) * 0.25;
  var v1 = (p3 - p1) * 0.25;
  return (2 * (p1 - p2) + v0 + v1) * t3 + (-3 * (p1 - p2) - 2 * v0 - v1) * t2 + v0 * t + p1;
}
/**
 * ????????????????????? 
 * opt ==> points , isLoop
 */


function SmoothSpline (opt) {
  var points = opt.points;
  var isLoop = opt.isLoop;
  var smoothFilter = opt.smoothFilter;
  var len = points.length;

  if (len == 1) {
    return points;
  }

  var ret = [];
  var distance = 0;
  var preVertor = new Vector(points[0]);
  var iVtor = null;

  for (var i = 1; i < len; i++) {
    iVtor = new Vector(points[i]);
    distance += preVertor.distance(iVtor);
    preVertor = iVtor;
  }

  preVertor = null;
  iVtor = null; //?????????????????????

  var segs = distance / 6;
  segs = segs < len ? len : segs;

  for (var i = 0; i < segs; i++) {
    var pos = i / (segs - 1) * (isLoop ? len : len - 1);
    var idx = Math.floor(pos);
    var w = pos - idx;
    var p0;
    var p1 = points[idx % len];
    var p2;
    var p3;

    if (!isLoop) {
      p0 = points[idx === 0 ? idx : idx - 1];
      p2 = points[idx > len - 2 ? len - 1 : idx + 1];
      p3 = points[idx > len - 3 ? len - 1 : idx + 2];
    } else {
      p0 = points[(idx - 1 + len) % len];
      p2 = points[(idx + 1) % len];
      p3 = points[(idx + 2) % len];
    }

    var w2 = w * w;
    var w3 = w * w2;
    var rp = [interpolate(p0[0], p1[0], p2[0], p3[0], w, w2, w3), interpolate(p0[1], p1[1], p2[1], p3[1], w, w2, w3)];
    _.isFunction(smoothFilter) && smoothFilter(rp);
    ret.push(rp);
  }

  return ret;
}

/**
 * Canvax
 *
 * @author ?????? (??????, litao.lt@alibaba-inc.com)
 *
 * ?????? ???
 *
 **/
var _cache = {
  sin: {},
  //sin??????
  cos: {} //cos??????

};

var _radians = Math.PI / 180;
/**
 * @param angle ????????????????????????
 * @param isDegrees angle???????????????????????????????????????false???angle???????????????????????????
 */


function sin(angle, isDegrees) {
  angle = (isDegrees ? angle * _radians : angle).toFixed(4);

  if (typeof _cache.sin[angle] == 'undefined') {
    _cache.sin[angle] = Math.sin(angle);
  }

  return _cache.sin[angle];
}
/**
 * @param radians ????????????
 */


function cos(angle, isDegrees) {
  angle = (isDegrees ? angle * _radians : angle).toFixed(4);

  if (typeof _cache.cos[angle] == 'undefined') {
    _cache.cos[angle] = Math.cos(angle);
  }

  return _cache.cos[angle];
}
/**
 * ???????????????
 * @param {Object} angle
 */


function degreeToRadian(angle) {
  return angle * _radians;
}
/**
 * ???????????????
 * @param {Object} angle
 */


function radianToDegree(angle) {
  return angle / _radians;
}
/*
 * ???????????????360??????
 * @param {angle} number
 */


function degreeTo360(angle) {
  var reAng = (360 + angle % 360) % 360; //Math.abs(360 + Math.ceil( angle ) % 360) % 360;

  if (reAng == 0 && angle !== 0) {
    reAng = 360;
  }

  return reAng;
}

function getIsgonPointList(n, r) {
  var pointList = [];
  var dStep = 2 * Math.PI / n;
  var beginDeg = -Math.PI / 2;
  var deg = beginDeg;

  for (var i = 0, end = n; i < end; i++) {
    pointList.push([r * Math.cos(deg), r * Math.sin(deg)]);
    deg += dStep;
  }
  return pointList;
}

function getSmoothPointList(pList, smoothFilter) {
  //smoothFilter -- ????????????????????????????????????smoothFilter?????????point????????????
  //???y???????????????????????????
  var List = [];
  var Len = pList.length;
  var _currList = [];

  _.each(pList, function (point, i) {
    if (isNotValibPoint(point)) {
      //undefined , [ number, null] ?????????
      if (_currList.length) {
        List = List.concat(_getSmoothGroupPointList(_currList, smoothFilter));
        _currList = [];
      }

      List.push(point);
    } else {
      //?????????point ???push ???_currList ?????????????????????
      _currList.push(point);
    }

    if (i == Len - 1) {
      if (_currList.length) {
        List = List.concat(_getSmoothGroupPointList(_currList, smoothFilter));
        _currList = [];
      }
    }
  });

  return List;
}

function _getSmoothGroupPointList(pList, smoothFilter) {
  var obj = {
    points: pList
  };

  if (_.isFunction(smoothFilter)) {
    obj.smoothFilter = smoothFilter;
  }

  var currL = SmoothSpline(obj);

  if (pList && pList.length > 0) {
    currL.push(pList[pList.length - 1]);
  }
  return currL;
}

function isNotValibPoint(point) {
  var res = !point || _.isArray(point) && point.length >= 2 && (!_.isNumber(point[0]) || !_.isNumber(point[1])) || "x" in point && !_.isNumber(point.x) || "y" in point && !_.isNumber(point.y);
  return res;
}

function isValibPoint(point) {
  return !isNotValibPoint(point);
}

var myMath = {
  PI: Math.PI,
  sin: sin,
  cos: cos,
  degreeToRadian: degreeToRadian,
  radianToDegree: radianToDegree,
  degreeTo360: degreeTo360,
  getIsgonPointList: getIsgonPointList,
  getSmoothPointList: getSmoothPointList,
  isNotValibPoint: isNotValibPoint,
  isValibPoint: isValibPoint
};

var BrokenLine =
/*#__PURE__*/
function (_Shape) {
  inherits(BrokenLine, _Shape);

  function BrokenLine(opt) {
    var _this;

    classCallCheck(this, BrokenLine);

    opt = Utils.checkOpt(opt);

    var _context = _.extend(true, {
      lineType: null,
      smooth: false,
      pointList: [],
      //{Array}  // ???????????????????????????
      smoothFilter: Utils.__emptyFunc
    }, opt.context);

    if (!opt.isClone && _context.smooth) {
      _context.pointList = myMath.getSmoothPointList(_context.pointList, _context.smoothFilter);
    }
    opt.context = _context;
    opt.type = "brokenline";
    _this = possibleConstructorReturn(this, getPrototypeOf(BrokenLine).call(this, opt)); //??????????????????

    _this._pointList = _context.pointList;
    return _this;
  }

  createClass(BrokenLine, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      if (name == "pointList" || name == "smooth" || name == "lineType") {
        if (name == "pointList" && this.context.smooth) {
          this.context.pointList = myMath.getSmoothPointList(value, this.context.smoothFilter);
          this._pointList = value;
        }

        if (name == "smooth") {
          //?????????smooth?????????
          if (value) {
            //?????????????????????????????????
            this.context.pointList = myMath.getSmoothPointList(this._pointList, this.context.smoothFilter);
          } else {
            this.context.pointList = this._pointList;
          }
        }
        this.graphics.clear();
      }
    }
  }, {
    key: "draw",
    value: function draw(graphics) {
      var context = this.context;
      var pointList = context.pointList;
      var beginPath = false;

      for (var i = 0, l = pointList.length; i < l; i++) {
        var point = pointList[i];

        if (myMath.isValibPoint(point)) {
          if (!beginPath) {
            graphics.moveTo(point[0], point[1]);
          } else {
            graphics.lineTo(point[0], point[1]);
          }
          beginPath = true;
        } else {
          beginPath = false;
        }
      }

      return this;
    }
  }]);

  return BrokenLine;
}(Shape);

var Circle$1 =
/*#__PURE__*/
function (_Shape) {
  inherits(Circle, _Shape);

  function Circle(opt) {
    classCallCheck(this, Circle);

    opt = _.extend(true, {
      type: "circle",
      xyToInt: false,
      context: {
        r: 0
      }
    }, Utils.checkOpt(opt));
    return possibleConstructorReturn(this, getPrototypeOf(Circle).call(this, opt));
  }

  createClass(Circle, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      if (name == "r") {
        this.graphics.clear();
      }
    }
  }, {
    key: "draw",
    value: function draw(graphics) {
      var r = this.context.$model.r;

      if (r < 0) {
        r = 0;
      }
      graphics.drawCircle(0, 0, r);
    }
  }]);

  return Circle;
}(Shape);

var Path =
/*#__PURE__*/
function (_Shape) {
  inherits(Path, _Shape);

  function Path(opt) {
    classCallCheck(this, Path);

    var _context = _.extend(true, {
      pointList: [],
      //????????????path????????????????????????????????????
      path: "" //????????? ????????????????????????:M 0 0 L 0 10 L 10 10 Z (???????????????)
      //M = moveto
      //L = lineto
      //H = horizontal lineto
      //V = vertical lineto
      //C = curveto
      //S = smooth curveto
      //Q = quadratic Belzier curve
      //T = smooth quadratic Belzier curveto
      //Z = closepath

    }, opt.context);

    opt.context = _context;
    opt.__parsePathData = null;
    opt.type = "path";
    return possibleConstructorReturn(this, getPrototypeOf(Path).call(this, opt));
  }

  createClass(Path, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      if (name == "path") {
        //??????path????????????????????????????????????pointList
        this.graphics.clear();
      }
    }
  }, {
    key: "_parsePathData",
    value: function _parsePathData(data) {
      if (this.__parsePathData) {
        return this.__parsePathData;
      }

      if (!data) {
        return [];
      }

      this.__parsePathData = [];

      var paths = _.compact(data.replace(/[Mm]/g, "\\r$&").split('\\r'));

      var me = this;

      _.each(paths, function (pathStr) {
        me.__parsePathData.push(me._parseChildPathData(pathStr));
      });

      return this.__parsePathData;
    }
  }, {
    key: "_parseChildPathData",
    value: function _parseChildPathData(data) {
      // command string
      var cs = data; // command chars

      var cc = ['m', 'M', 'l', 'L', 'v', 'V', 'h', 'H', 'z', 'Z', 'c', 'C', 'q', 'Q', 't', 'T', 's', 'S', 'a', 'A'];
      cs = cs.replace(/  /g, ' ');
      cs = cs.replace(/ /g, ','); //cs = cs.replace(/(.)-/g, "$1,-");

      cs = cs.replace(/(\d)-/g, '$1,-');
      cs = cs.replace(/,,/g, ',');
      var n; // create pipes so that we can split the data

      for (n = 0; n < cc.length; n++) {
        cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
      } // create array


      var arr = cs.split('|');
      var ca = []; // init context point

      var cpx = 0;
      var cpy = 0;

      for (n = 1; n < arr.length; n++) {
        var str = arr[n];
        var c = str.charAt(0);
        str = str.slice(1);
        str = str.replace(new RegExp('e,-', 'g'), 'e-'); //????????????????????????22???-22??? ?????????????????????????????????22-22???????????????????????????
        //str = str.replace(new RegExp('-', 'g'), ',-');
        //str = str.replace(/(.)-/g, "$1,-")

        var p = str.split(',');

        if (p.length > 0 && p[0] === '') {
          p.shift();
        }

        for (var i = 0; i < p.length; i++) {
          p[i] = parseFloat(p[i]);
        }

        while (p.length > 0) {
          if (isNaN(p[0])) {
            break;
          }

          var cmd = null;
          var points = [];
          var ctlPtx;
          var ctlPty;
          var prevCmd;
          var rx;
          var ry;
          var psi;
          var fa;
          var fs;
          var x1 = cpx;
          var y1 = cpy; // convert l, H, h, V, and v to L

          switch (c) {
            case 'l':
              cpx += p.shift();
              cpy += p.shift();
              cmd = 'L';
              points.push(cpx, cpy);
              break;

            case 'L':
              cpx = p.shift();
              cpy = p.shift();
              points.push(cpx, cpy);
              break;

            case 'm':
              cpx += p.shift();
              cpy += p.shift();
              cmd = 'M';
              points.push(cpx, cpy);
              c = 'l';
              break;

            case 'M':
              cpx = p.shift();
              cpy = p.shift();
              cmd = 'M';
              points.push(cpx, cpy);
              c = 'L';
              break;

            case 'h':
              cpx += p.shift();
              cmd = 'L';
              points.push(cpx, cpy);
              break;

            case 'H':
              cpx = p.shift();
              cmd = 'L';
              points.push(cpx, cpy);
              break;

            case 'v':
              cpy += p.shift();
              cmd = 'L';
              points.push(cpx, cpy);
              break;

            case 'V':
              cpy = p.shift();
              cmd = 'L';
              points.push(cpx, cpy);
              break;

            case 'C':
              points.push(p.shift(), p.shift(), p.shift(), p.shift());
              cpx = p.shift();
              cpy = p.shift();
              points.push(cpx, cpy);
              break;

            case 'c':
              points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
              cpx += p.shift();
              cpy += p.shift();
              cmd = 'C';
              points.push(cpx, cpy);
              break;

            case 'S':
              ctlPtx = cpx;
              ctlPty = cpy;
              prevCmd = ca[ca.length - 1];

              if (prevCmd.command === 'C') {
                ctlPtx = cpx + (cpx - prevCmd.points[2]);
                ctlPty = cpy + (cpy - prevCmd.points[3]);
              }

              points.push(ctlPtx, ctlPty, p.shift(), p.shift());
              cpx = p.shift();
              cpy = p.shift();
              cmd = 'C';
              points.push(cpx, cpy);
              break;

            case 's':
              ctlPtx = cpx, ctlPty = cpy;
              prevCmd = ca[ca.length - 1];

              if (prevCmd.command === 'C') {
                ctlPtx = cpx + (cpx - prevCmd.points[2]);
                ctlPty = cpy + (cpy - prevCmd.points[3]);
              }

              points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
              cpx += p.shift();
              cpy += p.shift();
              cmd = 'C';
              points.push(cpx, cpy);
              break;

            case 'Q':
              points.push(p.shift(), p.shift());
              cpx = p.shift();
              cpy = p.shift();
              points.push(cpx, cpy);
              break;

            case 'q':
              points.push(cpx + p.shift(), cpy + p.shift());
              cpx += p.shift();
              cpy += p.shift();
              cmd = 'Q';
              points.push(cpx, cpy);
              break;

            case 'T':
              ctlPtx = cpx, ctlPty = cpy;
              prevCmd = ca[ca.length - 1];

              if (prevCmd.command === 'Q') {
                ctlPtx = cpx + (cpx - prevCmd.points[0]);
                ctlPty = cpy + (cpy - prevCmd.points[1]);
              }

              cpx = p.shift();
              cpy = p.shift();
              cmd = 'Q';
              points.push(ctlPtx, ctlPty, cpx, cpy);
              break;

            case 't':
              ctlPtx = cpx, ctlPty = cpy;
              prevCmd = ca[ca.length - 1];

              if (prevCmd.command === 'Q') {
                ctlPtx = cpx + (cpx - prevCmd.points[0]);
                ctlPty = cpy + (cpy - prevCmd.points[1]);
              }

              cpx += p.shift();
              cpy += p.shift();
              cmd = 'Q';
              points.push(ctlPtx, ctlPty, cpx, cpy);
              break;

            case 'A':
              rx = p.shift(); //x??????

              ry = p.shift(); //y??????

              psi = p.shift(); //????????????

              fa = p.shift(); //???????????? 

              fs = p.shift(); //????????????

              x1 = cpx, y1 = cpy;
              cpx = p.shift(), cpy = p.shift();
              cmd = 'A';
              points = [rx, ry, psi, fa, fs, cpx, cpy, x1, y1];
              break;

            case 'a':
              rx = p.shift();
              ry = p.shift();
              psi = p.shift();
              fa = p.shift();
              fs = p.shift();
              x1 = cpx, y1 = cpy;
              cpx += p.shift();
              cpy += p.shift();
              cmd = 'A';
              points = [rx, ry, psi, fa, fs, cpx, cpy, x1, y1];
              break;
          }

          ca.push({
            command: cmd || c,
            points: points
          });
        }

        if (c === 'z' || c === 'Z') {
          ca.push({
            command: 'z',
            points: []
          });
        }
      }
      return ca;
    } //????????????path?????? graphics

  }, {
    key: "draw",
    value: function draw(graphics) {
      //graphics.beginPath();
      this.__parsePathData = null;
      this.context.$model.pointList = [];

      var pathArray = this._parsePathData(this.context.$model.path);

      for (var g = 0, gl = pathArray.length; g < gl; g++) {
        for (var i = 0, l = pathArray[g].length; i < l; i++) {
          var c = pathArray[g][i].command,
              p = pathArray[g][i].points;

          switch (c) {
            case 'L':
              graphics.lineTo(p[0], p[1]);
              break;

            case 'M':
              graphics.moveTo(p[0], p[1]);
              break;

            case 'C':
              graphics.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
              break;

            case 'Q':
              graphics.quadraticCurveTo(p[0], p[1], p[2], p[3]);
              break;

            case 'A':
              //??????6??????????????????path???A 6????????????path A????????????
              Arc.drawArc(graphics, p[7], p[8], p);
              break;

            case 'z':
              graphics.closePath();
              break;
          }
        }
      }
      return this;
    }
  }]);

  return Path;
}(Shape);

var Droplet =
/*#__PURE__*/
function (_Path) {
  inherits(Droplet, _Path);

  function Droplet(opt) {
    var _this;

    classCallCheck(this, Droplet);

    opt = _.extend(true, {
      type: "droplet",
      context: {
        hr: 0,
        //{number},  // ???????????????????????????????????????????????????????????????
        vr: 0 //{number},  // ????????????????????????????????????????????????

      }
    }, Utils.checkOpt(opt));

    var my = _this = possibleConstructorReturn(this, getPrototypeOf(Droplet).call(this, opt));

    _this.context.$model.path = _this.createPath();
    return _this;
  }

  createClass(Droplet, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      if (name == "hr" || name == "vr") {
        this.context.$model.path = this.createPath();
      }
    }
  }, {
    key: "createPath",
    value: function createPath() {
      var model = this.context.$model;
      var ps = "M 0 " + model.hr + " C " + model.hr + " " + model.hr + " " + model.hr * 3 / 2 + " " + -model.hr / 3 + " 0 " + -model.vr;
      ps += " C " + -model.hr * 3 / 2 + " " + -model.hr / 3 + " " + -model.hr + " " + model.hr + " 0 " + model.hr + "z";
      return ps;
    }
  }]);

  return Droplet;
}(Path);

var Ellipse$1 =
/*#__PURE__*/
function (_Shape) {
  inherits(Ellipse, _Shape);

  function Ellipse(opt) {
    classCallCheck(this, Ellipse);

    opt = _.extend(true, {
      type: "ellipse",
      context: {
        hr: 0,
        //{number},  // ???????????????????????????????????????????????????????????????
        vr: 0 //{number},  // ????????????????????????????????????????????????

      }
    }, Utils.checkOpt(opt));
    return possibleConstructorReturn(this, getPrototypeOf(Ellipse).call(this, opt));
  }

  createClass(Ellipse, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      if (name == "hr" || name == "vr") {
        this.graphics.clear();
      }
    }
  }, {
    key: "draw",
    value: function draw(graphics) {
      graphics.drawEllipse(0, 0, this.context.$model.hr * 2, this.context.$model.vr * 2);
    }
  }]);

  return Ellipse;
}(Shape);

var Polygon$1 =
/*#__PURE__*/
function (_Shape) {
  inherits(Polygon, _Shape);

  function Polygon(opt) {
    classCallCheck(this, Polygon);

    var _context = _.extend(true, {
      lineType: null,
      smooth: false,
      pointList: [],
      //{Array}  // ???????????????????????????
      smoothFilter: Utils.__emptyFunc
    }, opt.context);

    if (!opt.isClone) {
      var start = _context.pointList[0];

      var end = _context.pointList.slice(-1)[0];

      if (_context.smooth) {
        _context.pointList.unshift(end);

        _context.pointList = myMath.getSmoothPointList(_context.pointList);
      }
    }
    opt.context = _context;
    opt.type = "polygon";
    return possibleConstructorReturn(this, getPrototypeOf(Polygon).call(this, opt));
  }

  createClass(Polygon, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      //??????parent???setGraphics
      if (name == "pointList" || name == "smooth" || name == "lineType") {
        this.graphics.clear();
      }
    }
  }, {
    key: "draw",
    value: function draw(graphics) {
      //graphics.beginPath();
      var context = this.context;
      var pointList = context.pointList;

      if (pointList.length < 2) {
        //??????2??????????????????~
        return;
      }
      graphics.moveTo(pointList[0][0], pointList[0][1]);

      for (var i = 1, l = pointList.length; i < l; i++) {
        graphics.lineTo(pointList[i][0], pointList[i][1]);
      }
      graphics.closePath();
      return;
    }
  }]);

  return Polygon;
}(Shape);

var Isogon =
/*#__PURE__*/
function (_Polygon) {
  inherits(Isogon, _Polygon);

  function Isogon(opt) {
    classCallCheck(this, Isogon);

    var _context = _.extend(true, {
      pointList: [],
      //????????????r???n?????????????????????????????????
      r: 0,
      //{number},  // ????????????n?????????????????????
      n: 0 //{number},  // ???????????????????????????

    }, opt.context);

    _context.pointList = myMath.getIsgonPointList(_context.n, _context.r);
    opt.context = _context;
    opt.type = "isogon";
    return possibleConstructorReturn(this, getPrototypeOf(Isogon).call(this, opt));
  }

  createClass(Isogon, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      if (name == "r" || name == "n") {
        //??????path????????????????????????????????????pointList
        this.context.$model.pointList = myMath.getIsgonPointList(this.context.$model.n, this.context.$model.r);
      }

      if (name == "pointList" || name == "smooth" || name == "lineType") {
        this.graphics.clear();
      }
    }
  }]);

  return Isogon;
}(Polygon$1);

var Line =
/*#__PURE__*/
function (_Shape) {
  inherits(Line, _Shape);

  function Line(opt) {
    classCallCheck(this, Line);

    var _context = _.extend(true, {
      start: {
        x: 0,
        // ????????????????????????
        y: 0 // ????????????????????????

      },
      end: {
        x: 0,
        // ????????????????????????
        y: 0 // ????????????????????????

      }
    }, opt.context);

    opt.context = _context;
    opt.type = "line";
    return possibleConstructorReturn(this, getPrototypeOf(Line).call(this, opt));
  }

  createClass(Line, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      //???????????????start.x ??????end.x??? ????????????????????????
      if (name == "x" || name == "y") {
        this.graphics.clear();
      }
    }
  }, {
    key: "draw",
    value: function draw(graphics) {
      var model = this.context.$model;
      graphics.moveTo(model.start.x, model.start.y);
      graphics.lineTo(model.end.x, model.end.y);
      return this;
    }
  }]);

  return Line;
}(Shape);

var Rect =
/*#__PURE__*/
function (_Shape) {
  inherits(Rect, _Shape);

  function Rect(opt) {
    classCallCheck(this, Rect);

    var _context = _.extend(true, {
      width: 0,
      height: 0,
      radius: []
    }, opt.context);

    opt.context = _context;
    opt.type = "rect";
    return possibleConstructorReturn(this, getPrototypeOf(Rect).call(this, opt));
  }

  createClass(Rect, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      if (name == "width" || name == "height" || name == "radius") {
        this.graphics.clear();
      }
    }
    /**
     * ??????????????????
     */

  }, {
    key: "_buildRadiusPath",
    value: function _buildRadiusPath(graphics) {
      var model = this.context.$model; //??????????????????????????????????????????????????????r1???r2???r3???r4
      //r?????????1         ????????? [1, 1, 1, 1]
      //r?????????[1]       ????????? [1, 1, 1, 1]
      //r?????????[1, 2]    ????????? [1, 2, 1, 2]
      //r?????????[1, 2, 3] ????????? [1, 2, 3, 2]

      var x = 0;
      var y = 0;
      var width = model.width;
      var height = model.height;
      var r = Utils.getCssOrderArr(model.radius);
      var G = graphics;
      var sy = 1;

      if (height >= 0) {
        sy = -1;
      }

      G.moveTo(parseInt(x + r[0]), parseInt(height));
      G.lineTo(parseInt(x + width - r[1]), parseInt(height));
      r[1] !== 0 && G.quadraticCurveTo(x + width, height, parseInt(x + width), parseInt(height + r[1] * sy));
      G.lineTo(parseInt(x + width), parseInt(y - r[2] * sy));
      r[2] !== 0 && G.quadraticCurveTo(x + width, y, parseInt(x + width - r[2]), parseInt(y));
      G.lineTo(parseInt(x + r[3]), parseInt(y));
      r[3] !== 0 && G.quadraticCurveTo(x, y, parseInt(x), parseInt(y - r[3] * sy));
      G.lineTo(parseInt(x), parseInt(y + height + r[0] * sy));
      r[0] !== 0 && G.quadraticCurveTo(x, y + height, parseInt(x + r[0]), parseInt(y + height));
    }
  }, {
    key: "draw",
    value: function draw(graphics) {
      var model = this.context.$model;

      if (!model.radius.length) {
        graphics.drawRect(0, 0, model.width, model.height);
      } else {
        this._buildRadiusPath(graphics);
      }

      graphics.closePath();
      return;
    }
  }]);

  return Rect;
}(Shape);

var Sector =
/*#__PURE__*/
function (_Shape) {
  inherits(Sector, _Shape);

  function Sector(opt) {
    classCallCheck(this, Sector);

    var _context = _.extend(true, {
      pointList: [],
      //??????????????????,???????????????????????????????????????
      r0: 0,
      // ?????????0???????????????????????????????????????????????????????????? = r - r0
      r: 0,
      //{number},  // ?????????????????????
      startAngle: 0,
      //{number},  // ?????????????????????[0, 360)
      endAngle: 0,
      //{number},  // ?????????????????????(0, 360]
      clockwise: false //???????????????????????????false(?????????)

    }, opt.context);

    opt.context = _context;
    opt.regAngle = [];
    opt.isRing = false; //?????????????????????

    opt.type = "sector";
    return possibleConstructorReturn(this, getPrototypeOf(Sector).call(this, opt));
  }

  createClass(Sector, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      if (name == "r0" || name == "r" || name == "startAngle" || name == "endAngle" || name == "clockwise") {
        //???????????????graphs????????????
        this.isRing = false; //?????????????????????????????????????????????????????????

        this.graphics.clear();
      }
    }
  }, {
    key: "draw",
    value: function draw(graphics) {
      var model = this.context.$model; // ????????????[0,r)

      var r0 = typeof model.r0 == 'undefined' ? 0 : model.r0;
      var r = model.r; // ???????????????(0,r]

      var startAngle = myMath.degreeTo360(model.startAngle); // ????????????[0,360)

      var endAngle = myMath.degreeTo360(model.endAngle); // ????????????(0,360]

      if (model.startAngle != model.endAngle && Math.abs(model.startAngle - model.endAngle) % 360 == 0) {
        //if( startAngle == endAngle && model.startAngle != model.endAngle ) {
        //?????????????????????????????????????????????????????????
        this.isRing = true;
        startAngle = 0;
        endAngle = 360;
      }

      startAngle = myMath.degreeToRadian(startAngle);
      endAngle = myMath.degreeToRadian(endAngle); //??????????????????????????????
      //if( endAngle - startAngle < 0.025 ){
      //    startAngle -= 0.003
      //}

      var G = graphics; //G.beginPath();

      if (this.isRing) {
        if (model.r0 == 0) {
          //???
          G.drawCircle(0, 0, model.r);
        } else {
          //??????
          if (model.fillStyle && model.fillAlpha) {
            G.beginPath();
            G.arc(0, 0, r, startAngle, endAngle, model.clockwise);

            if (model.r0 == 0) {
              G.lineTo(0, 0);
            } else {
              G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
            }

            G.closePath();
            G.currentPath.lineWidth = 0;
            G.currentPath.strokeStyle = null;
            G.currentPath.strokeAlpha = 0;
            G.currentPath.line = false;
          }

          if (model.lineWidth && model.strokeStyle && model.strokeAlpha) {
            G.beginPath();
            G.arc(0, 0, r, startAngle, endAngle, model.clockwise);
            G.closePath();
            G.currentPath.fillStyle = null;
            G.currentPath.fill = false;
            G.beginPath();
            G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
            G.closePath();
            G.currentPath.fillStyle = null;
            G.currentPath.fill = false;
          }
        }
      } else {
        //??????????????????
        G.beginPath();
        G.arc(0, 0, r, startAngle, endAngle, model.clockwise);

        if (model.r0 == 0) {
          G.lineTo(0, 0);
        } else {
          G.arc(0, 0, r0, endAngle, startAngle, !model.clockwise);
        }

        G.closePath();
      } //G.closePath();

    }
  }]);

  return Sector;
}(Shape);

var Arrow =
/*#__PURE__*/
function (_Shape) {
  inherits(Arrow, _Shape);

  function Arrow(opt) {
    classCallCheck(this, Arrow);

    var _context = _.extend(true, {
      control: {
        x: 0,
        // ????????????????????????
        y: 0 // ????????????????????????

      },
      point: {
        x: 0,
        // ????????????????????????
        y: 0 // ????????????????????????

      },
      angle: null,
      // control?????????????????????????????????????????????angle
      theta: 30,
      // ????????????
      headlen: 6,
      // ????????????
      lineWidth: 1,
      strokeStyle: '#666',
      fillStyle: null
    }, opt.context);

    opt.context = _context;
    opt.type = "arrow";
    return possibleConstructorReturn(this, getPrototypeOf(Arrow).call(this, opt));
  }

  createClass(Arrow, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      //???????????????start.x ??????end.x??? ????????????????????????
      if (name == "x" || name == "y" || name == "theta" || name == "headlen" || name == "angle") {
        this.graphics.clear();
      }
    }
  }, {
    key: "draw",
    value: function draw(graphics) {
      var model = this.context.$model;
      var fromX = model.control.x;
      var fromY = model.control.y;
      var toX = model.point.x;
      var toY = model.point.y; // ???????????????????????????P2,P3?????? 

      var angle = model.angle != null ? model.angle - 180 : Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
          angle1 = (angle + model.theta) * Math.PI / 180,
          angle2 = (angle - model.theta) * Math.PI / 180,
          topX = model.headlen * Math.cos(angle1),
          topY = model.headlen * Math.sin(angle1),
          botX = model.headlen * Math.cos(angle2),
          botY = model.headlen * Math.sin(angle2);
      var arrowX = toX + topX;
      var arrowY = toY + topY;
      graphics.moveTo(arrowX, arrowY);
      graphics.lineTo(toX, toY);
      graphics.lineTo(toX + botX, toY + botY);

      if (model.fillStyle) {
        graphics.lineTo(arrowX, arrowY);
        graphics.closePath();
      }
      return this;
    }
  }]);

  return Arrow;
}(Shape);

var Diamond =
/*#__PURE__*/
function (_Shape) {
  inherits(Diamond, _Shape);

  function Diamond(opt) {
    classCallCheck(this, Diamond);

    var _context = _.extend(true, {
      innerRect: {
        //?????????????????????
        width: 0,
        height: 0
      },
      includedAngle: 60 //??????x???????????????

    }, opt.context);

    opt.context = _context;
    opt.type = "diamond";
    return possibleConstructorReturn(this, getPrototypeOf(Diamond).call(this, opt));
  }

  createClass(Diamond, [{
    key: "watch",
    value: function watch(name, value, preValue) {
      //???????????????start.x ??????end.x??? ????????????????????????
      if (['includedAngle'].indexOf(name) > -1) {
        this.graphics.clear();
      }
    }
  }, {
    key: "draw",
    value: function draw(graphics) {
      var model = this.context.$model;
      var innerRect = model.innerRect;
      var includedAngle = model.includedAngle / 2;
      var includeRad = includedAngle * Math.PI / 180;
      var newWidthDiff = innerRect.height / Math.tan(includeRad);
      var newHeightDiff = innerRect.width * Math.tan(includeRad); //???????????????????????????????????????????????????

      var newWidth = innerRect.width + newWidthDiff;
      var newHeight = innerRect.height + newHeightDiff;
      graphics.moveTo(0, newHeight / 2);
      graphics.lineTo(newWidth / 2, 0);
      graphics.lineTo(0, -newHeight / 2);
      graphics.lineTo(-newWidth / 2, 0);
      graphics.lineTo(0, newHeight / 2);
      graphics.closePath();
      return this;
    }
  }]);

  return Diamond;
}(Shape);

var Canvax = {
  version: "2.0.70",
  _: _,
  $: $,
  event: event,
  //?????????????????? chartx???
  App: Application
};
Canvax.Display = {
  DisplayObject: DisplayObject,
  DisplayObjectContainer: DisplayObjectContainer,
  Stage: Stage,
  Sprite: Sprite,
  Shape: Shape,
  Point: Point,
  Text: Text
};
Canvax.Shapes = {
  BrokenLine: BrokenLine,
  Circle: Circle$1,
  Droplet: Droplet,
  Ellipse: Ellipse$1,
  Isogon: Isogon,
  Line: Line,
  Path: Path,
  Polygon: Polygon$1,
  Rect: Rect,
  Sector: Sector,
  Arrow: Arrow,
  Diamond: Diamond
};
Canvax.AnimationFrame = AnimationFrame;
Canvax.utils = Utils;

var index_es = /*#__PURE__*/Object.freeze({
	default: Canvax
});

var _canvax = getCjsExportFromNamespace(index_es);

var parse = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



var _default = {
  _eval: function _eval(code, target, paramName, paramValue) {
    return paramName ? new Function(paramName, code + "; return ".concat(target, ";"))(paramValue) : new Function(code + "; return ".concat(target, ";"))();
  },
  parse: function parse(code, range, data, variablesFromComponent) {
    try {
      var isVariablesDefined = range && range.length && range.length === 2 && range[1] > range[0]; // ????????????

      if (!isVariablesDefined) {
        return this._eval(code, 'options');
      }

      var variablesInCode = this._eval(code, 'variables');

      if (typeof variablesInCode === 'function') {
        variablesInCode = variablesInCode(data) || {};
      }

      var variables = {};

      if (variablesFromComponent !== undefined) {
        variables = typeof variablesFromComponent === 'function' ? variablesFromComponent(data) : variablesFromComponent;
      }

      variables = _canvax._.extend(true, {}, variablesInCode, variables);
      var codeWithoutVariables = code.slice(0, range[0]) + code.slice(range[1]);
      return this._eval(codeWithoutVariables, 'options', 'variables', variables);
    } catch (e) {
      console.log('parse error');
      return {};
    }
  }
};
exports["default"] = _default;
});

unwrapExports(parse);

var global$1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _canvax$$1 = interopRequireDefault(_canvax);

var _parse = interopRequireDefault(parse);

//????????????
var _ = _canvax$$1["default"]._,
    $ = _canvax$$1["default"].$,
    AnimationFrame = _canvax$$1["default"].AnimationFrame;
var globalTheme = ["#ff8533", "#73ace6", "#82d982", "#e673ac", "#cd6bed", "#8282d9", "#c0e650", "#e6ac73", "#6bcded", "#73e6ac", "#ed6bcd", "#9966cc"];
var components = {
  /*
  modules:{
      coord : {
          empty : ..,
          rect  : ..,
          ...
      },
      graphs : {
          //empty : .., //????????????coord?????????empty
          bar   : ..,
          ...
      }
  },
  get: function( name, type ){}
  */
};
var _default = {
  create: function create(el, _data, _opt) {
    var chart = null;
    var me = this;
    var data = JSON.parse(JSON.stringify(_data, function (k, v) {
      if (v === undefined) {
        return null;
      }

      return v;
    })); //data = JSON.parse( JSON.stringify(_data) );

    var opt = _.clone(_opt);

    var _destroy = function _destroy() {
      me.instances[chart.id] = null;
      delete me.instances[chart.id];
    }; //??????el????????????????????????????????????????????????instances????????????????????????????????????


    var chart_id = $.query(el).getAttribute("chart_id");

    if (chart_id != undefined) {
      var _chart = me.instances[chart_id];

      if (_chart) {
        _chart.destroy();

        _chart.off && _chart.off("destroy", _destroy);
      }
      delete me.instances[chart_id];
    }

    var componentModules = me._getComponentModules(); //????????????????????????coord????????????????????????????????????????????????????????????????????????


    var Chart = me._getComponentModule('chart'); //try {


    chart = new Chart(el, data, opt, componentModules);

    if (chart) {
      chart.draw();
      me.instances[chart.id] = chart;
      chart.on("destroy", _destroy);
    }
    //    throw "Chatx Error???" + err
    //};

    return chart;
  },
  setGlobalTheme: function setGlobalTheme(colors) {
    globalTheme = colors;
  },
  getGlobalTheme: function getGlobalTheme() {
    return globalTheme;
  },
  parse: _parse["default"],
  instances: {},
  getChart: function getChart(chartId) {
    return this.instances[chartId];
  },
  resize: function resize() {
    //?????????????????????resize?????????????????????????????? chart instances ???????????????resize
    for (var c in this.instances) {
      this.instances[c].resize();
    }
  },
  //???????????????????????????????????????chartpark???????????????options
  getOptionsOld: function getOptionsOld(chartPark_cid) {
    var JsonSerialize = {
      prefix: '[[JSON_FUN_PREFIX_',
      suffix: '_JSON_FUN_SUFFIX]]'
    };

    var parse$$1 = function parse$$1(string) {
      return JSON.parse(string, function (key, value) {
        if (typeof value === 'string' && value.indexOf(JsonSerialize.suffix) > 0 && value.indexOf(JsonSerialize.prefix) == 0) {
          return new Function('return ' + value.replace(JsonSerialize.prefix, '').replace(JsonSerialize.suffix, ''))();
        }
        return value;
      }) || {};
    };

    return parse$$1(decodeURIComponent(this.options[chartPark_cid] || '%7B%7D'));
  },
  getOptionsNew: function getOptionsNew(chartPark_cid, data, variables) {
    var chartConfig = this.options[chartPark_cid];
    var code = decodeURIComponent(chartConfig.code);
    var range = chartConfig.range;
    return _parse["default"].parse(code, range, data, variables);
  },

  /** 
   * ???????????????????????????
   * 
   * @param {int} chartPark_cid  chartpark??????id
   * @param {Object} userOptions ?????????????????????options?????????chartPark_cid?????????????????????????????????????????????????????????chartpark??????????????????
   * @param {Array} data ???????????????????????????
   * @param {Object | Function} variables ????????????chartpark???????????????????????????Function???????????????????????????Object
   * @returns {Object} ?????????????????????????????????????????????{}
  */
  getOptions: function getOptions(chartPark_cid, userOptions, data, variables) {
    if (!this.options[chartPark_cid]) {
      return userOptions || {};
    }
    var chartConfig = this.options[chartPark_cid];
    var optionsFromChartPark = typeof chartConfig === 'string' ? this.getOptionsOld(chartPark_cid) : this.getOptionsNew(chartPark_cid, data || [], variables || {});

    if (userOptions) {
      optionsFromChartPark = _.extend(true, optionsFromChartPark, userOptions);
    }
    return optionsFromChartPark;
  },
  calculateOptions: function calculateOptions(chartPark_cid, data, variables) {
    return this.getOptions(chartPark_cid, undefined, data, variables);
  },
  _getComponentModules: function _getComponentModules() {
    var comps = components;

    if (!comps.modules) {
      comps.modules = {};
    }

    if (!comps.get) {
      comps.get = function (name, type) {
        if (!type) {
          type = "empty";
        }
        name = name.toLowerCase();
        type = type.toLowerCase();
        var _module = comps.modules[name];

        if (_module && _module[type]) {
          return _module[type];
        }
      };
    }
    return comps;
  },

  /**
   * @param {compModule} ??????????????????????????????
   * @param {name} ????????????comp??????
   * @param {type} ??????????????? graphs.bar
   */
  registerComponent: function registerComponent(compModule, name) {
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "empty";

    var comps = this._getComponentModules().modules;

    name = name.toLowerCase();
    type = type.toLowerCase();
    var _comp = comps[name];

    if (!_comp) {
      _comp = comps[name] = {};
    }

    if (!_comp[type]) {
      _comp[type] = compModule;
    }
    return comps;
  },

  /**
   * 
   * @param {name} ????????????comp??????
   * @param { type } ?????????????????????????????? 
   */
  _getComponentModule: function _getComponentModule(name) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'empty';
    name = name.toLowerCase();
    type = type.toLowerCase();

    var _comp = this._getComponentModules().modules[name];

    return _comp ? _comp[type] : undefined;
  },
  setAnimationEnabled: function setAnimationEnabled(bool) {
    return AnimationFrame.setAnimationEnabled(bool);
  },
  getAnimationEnabled: function getAnimationEnabled(bool) {
    return AnimationFrame.getAnimationEnabled();
  },
  //??????????????????
  layout: {},
  registerLayout: function registerLayout(name, algorithm) {
    this.layout[name] = algorithm;
  },
  props: {},
  getProps: function getProps() {
    //??????????????? props ?????????????????????????????? begin
    //????????????????????????????????? ?????????????????? ??????chartpark?????????????????????????????? ???????????????
    var allProps = {};

    var allModules = this._getComponentModules().modules;

    var _loop = function _loop(n) {
      if (n == 'chart') return "continue";
      allProps[n] = {
        detail: n,
        propertys: {} //typeMap: {}

      };

      var _graphNames = void 0;

      if (n == 'graphs') {
        _graphNames = _.map(allModules.graphs, function (val, key) {
          return key;
        });
        allProps.graphs.documentation = "?????????graphs????????????\n" + _graphNames.join('\n');
      }
      var allConstructorProps = {}; //??????????????????????????? defaultProps

      var protoModule = null;

      for (var mn in allModules[n]) {
        if (protoModule) break;
        protoModule = allModules[n][mn].prototype;
      }

      function _setProps(m) {
        var constructorModule = m.constructor.__proto__; //m.constructor;

        if (!constructorModule._isComponentRoot) {
          _setProps(constructorModule.prototype);
        }

        if (constructorModule.defaultProps && _.isFunction(constructorModule.defaultProps)) {
          var _dprops = constructorModule.defaultProps();

          _.extend(allConstructorProps, _dprops);
        }
      }

      _setProps(protoModule);

      allProps[n].propertys = _.extend(allConstructorProps, allProps[n].propertys);

      var _loop2 = function _loop2(_mn) {
        var module = allModules[n][_mn];
        var moduleProps = module.defaultProps ? module.defaultProps() : {}; //??????props??????????????? _props ?????? begin

        function setChildProps(p) {
          if (p._props) {
            var _propsIsArray = _.isArray(p._props);

            for (var k in p._props) {
              if (!_propsIsArray) {
                p[k] = {
                  detail: k,
                  propertys: {}
                };
              }
              var _module = p._props[k];

              if (_module.defaultProps) {
                (function () {
                  var _setProps = function _setProps(m) {
                    if (m.__proto__.__proto__) {
                      _setProps(m.__proto__);
                    }

                    if (m.defaultProps && _.isFunction(m.defaultProps)) {
                      var _dprops = m.defaultProps();

                      if (_dprops._props) {
                        //????????????????????? _props ????????? ?????????????????????
                        setChildProps(_dprops);
                      }
                      _dprops && _.extend(allConstructorProps, _dprops);
                    }
                  };

                  var _moduleProps = _module.defaultProps(); //??????ta??????????????????????????????????????? _moduleProps 


                  var allConstructorProps = {};

                  _setProps(_module.__proto__);

                  _moduleProps = _.extend(allConstructorProps, _moduleProps);

                  if (_propsIsArray) {
                    _.extend(p, _moduleProps);
                  } else {
                    p[k].propertys = _moduleProps;
                    setChildProps(p[k].propertys);
                  }
                })();
              }
            }
          }
        }
        setChildProps(moduleProps); //??????props??????????????? _props ?????? end
        //???????????????????????? extend ?????????

        moduleProps = _.extend({}, allConstructorProps, moduleProps); //????????????????????????type ????????????????????????????????????type????????????????????????????????????typeMap??????

        if (allConstructorProps.type) {
          if (!allProps[n].typeMap) allProps[n].typeMap = {};

          if (n == 'graphs') {
            moduleProps.type.values = _graphNames;
            moduleProps.type.documentation = "?????????graphs????????????\n" + _graphNames.join('\n');
          }
          allProps[n].typeMap[_mn] = moduleProps;
        } else {
          _.extend(allProps[n].propertys, moduleProps);
        }
      };

      for (var _mn in allModules[n]) {
        _loop2(_mn);
      }
    };

    for (var n in allModules) {
      var _ret = _loop(n);

      if (_ret === "continue") continue;
    }
    this.props = allProps; //??????????????? props ?????????????????????????????? begin

    return this.props;
  },
  //??????????????????????????????Chartx.Canvax
  canvax: _canvax$$1["default"]
};
exports["default"] = _default;
});

var global$2 = unwrapExports(global$1);

var classCallCheck$1 = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(classCallCheck$1);

var createClass$1 = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(createClass$1);

var setPrototypeOf$1 = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(setPrototypeOf$1);

var inherits$1 = createCommonjsModule(function (module) {
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf$1(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(inherits$1);

var _typeof_1$1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(_typeof_1$1);

var assertThisInitialized$1 = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(assertThisInitialized$1);

var possibleConstructorReturn$1 = createCommonjsModule(function (module) {
var _typeof = _typeof_1$1["default"];



function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized$1(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(possibleConstructorReturn$1);

var getPrototypeOf$1 = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(getPrototypeOf$1);

var dataFrame = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;



/**
* ??????????????????
* field1 field2 field3
*   1      2      3
*   2      3      4
* ???????????????????????????????????????
* [{field:'field1',index:0,data:[1,2]} ......]
* ?????????????????????????????????
*/
//??????????????????????????????[{name:name, sex:sex ...} , ...] ????????????????????????????????????chartx???????????????????????????
function parse2MatrixData(list) {
  if (list === undefined || list === null) {
    list = [];
  }

  if (list.length > 0 && !_canvax._.isArray(list[0])) {
    var newArr = [];
    var fields = [];
    var fieldNum = 0;

    for (var i = 0, l = list.length; i < l; i++) {
      var row = list[i];

      if (i == 0) {
        for (var f in row) {
          fields.push(f);
        }
        newArr.push(fields);
        fieldNum = fields.length;
      }
      var _rowData = [];

      for (var ii = 0; ii < fieldNum; ii++) {
        _rowData.push(row[fields[ii]]);
      }
      newArr.push(_rowData);
    }
    return newArr;
  } else {
    return list;
  }
}

function parse2JsonData(list) {
  var newArr = list; //????????????????????????????????????array, ????????????????????????json???????????????

  if (list.length > 0 && _canvax._.isArray(list[0])) {
    newArr = [];
    var fields = list[0];
    var fl = fields.length;

    for (var i = 1, l = list.length; i < l; i++) {
      var obj = {};

      for (var fi = 0; fi < fl; fi++) {
        obj[fields[fi]] = list[i][fi];
      }
      newArr.push(obj);
    }
    return newArr;
  }
}

function _default(dataOrg, opt) {
  var dataFrame = {
    //??????????????????
    length: 0,
    org: [],
    //??????????????????????????????????????????????????????????????????json??????????????????????????????????????????
    jsonOrg: [],
    //???????????????json??????
    data: [],
    //??????????????????????????????????????????(range?????????????????????)???[o,o,o] o={field:'val1',index:0,data:[1,2,3]}
    getRowDataAt: _getRowDataAt,
    getRowDataOf: _getRowDataOf,
    getFieldData: _getFieldData,
    getDataOrg: getDataOrg,
    resetData: _resetData,
    fields: [],
    range: {
      start: 0,
      end: 0
    },
    filters: {} //?????????????????????range????????????

  };

  function _initHandle(dataOrg) {
    //?????????????????????????????????????????????
    dataOrg = JSON.parse(JSON.stringify(dataOrg, function (k, v) {
      if (v === undefined) {
        return null;
      }
      return v;
    }));

    if (!dataOrg || dataOrg.length == 0) {
      return dataFrame;
    }

    if (dataOrg.length > 0 && !_canvax._.isArray(dataOrg[0])) {
      dataFrame.jsonOrg = dataOrg;
      dataOrg = parse2MatrixData(dataOrg);
      dataFrame.org = dataOrg;
    } else {
      dataFrame.org = dataOrg;
      dataFrame.jsonOrg = parse2JsonData(dataOrg);
    }

    dataFrame.range.end = dataOrg.length - 1 - 1; //????????????opts????????????dataZoom.range

    if (opt) {
      //?????????dataZoom ??? datazoom ??????????????????
      var _datazoom = opt.dataZoom || opt.datazoom;

      _datazoom && _datazoom.range && _canvax._.extend(dataFrame.range, _datazoom.range);
    }

    if (dataOrg.length && dataOrg[0].length && !~dataOrg[0].indexOf("__index__")) {
      //??????????????????????????????????????????__index__??????????????????????????????__index__???????????????????????????index
      for (var i = 0, l = dataOrg.length; i < l; i++) {
        if (!i) {
          dataOrg[0].push("__index__");
        } else {
          dataOrg[i].push(i - 1);
          dataFrame.jsonOrg[i - 1]["__index__"] = i - 1;
        }
      }
    }
    dataFrame.fields = dataOrg[0] ? dataOrg[0] : []; //?????????????????????;

    return dataFrame;
  }

  function _resetData(dataOrg) {
    if (dataOrg) {
      //??????????????????
      dataFrame.org = [];
      dataFrame.jsonOrg = [];
      dataFrame.fields = [];
      dataFrame.data = [];

      var preRange = _canvax._.extend(true, {}, dataFrame.range);

      var preLen = dataFrame.length; //?????????????????????????????????

      _initHandle(dataOrg);

      dataFrame.data = _getDataAndSetDataLen(); //???????????????????????????????????????????????????????????????dataFrame?????? begin

      if (preLen !== 0) {
        if (opt && opt.dataZoom && opt.dataZoom.range) {
          //??????????????????dataZoom.range??? ?????????????????????????????????range
          _canvax._.extend(true, dataFrame.range, preRange);

          if (dataFrame.range.end > dataFrame.length - 1) {
            dataFrame.range.end = dataFrame.length - 1;
          }

          if (dataFrame.range.start > dataFrame.length - 1 || dataFrame.range.start > dataFrame.range.end) {
            dataFrame.range.start = 0;
          }
        } //???????????????????????????dataFrame?????? end  

      }
    } else {
      //????????????dataOrg?????????data?????????????????????????????????????????????dataFrame???????????????????????????????????????
      //??????datazoom?????????dataFrame.range
      dataFrame.data = _getDataAndSetDataLen();
    }
  }

  function _getDataAndSetDataLen() {
    var total = []; //???????????????[o,o,o]   o={field:'val1',index:0,data:[1,2,3]}

    for (var a = 0, al = dataFrame.fields.length; a < al; a++) {
      var o = {};
      o.field = dataFrame.fields[a];
      o.index = a;
      o.data = [];
      total.push(o);
    }

    var rows = _getValidRows(function (rowData) {
      _canvax._.each(dataFrame.fields, function (_field) {
        var _val = rowData[_field]; //????????????????????????number???????????????????????????number

        if (!isNaN(_val) && _val !== "" && _val !== null) {
          _val = Number(_val);
        }

        var gData = _canvax._.find(total, function (g) {
          return g.field == _field;
        });

        gData && gData.data.push(_val);
      });
    }); //??????????????????data??????????????????


    dataFrame.length = rows.length;
    return total;
  }

  function _getValidRows(callback) {
    var validRowDatas = [];

    _canvax._.each(dataFrame.jsonOrg.slice(dataFrame.range.start, dataFrame.range.end + 1), function (rowData) {
      var validRowData = true;

      if (_canvax._.keys(dataFrame.filters).length) {
        _canvax._.each(dataFrame.filters, function (filter) {
          if (_canvax._.isFunction(filter) && !filter(rowData)) {
            validRowData = false;
            return false;
          }
        });
      }

      if (validRowData) {
        callback && callback(rowData);
        validRowDatas.push(rowData);
      }
    });

    return validRowDatas;
  }

  function getDataOrg($field, format, totalList, lev) {
    if (!lev) lev = 0;

    var arr = totalList || _getDataAndSetDataLen();

    if (!arr) {
      return;
    }

    if (!format) {
      format = function format(e) {
        return e;
      };
    }

    function _format(d) {
      for (var i = 0, l = d.length; i < l; i++) {
        d[i] = format(d[i]);
      }
      return d;
    }

    if (!_canvax._.isArray($field)) {
      $field = [$field];
    }

    var newData = [];

    for (var i = 0, l = $field.length; i < l; i++) {

      if (_canvax._.isArray($field[i])) {
        newData.push(getDataOrg($field[i], format, totalList, lev + 1));
      } else {
        var _fieldData = newData;

        if (!lev) {
          _fieldData = [];
        }

        for (var ii = 0, iil = arr.length; ii < iil; ii++) {
          if ($field[i] == arr[ii].field) {

            _fieldData.push(_format(arr[ii].data));

            break;
          }
        }

        if (!lev) {
          newData.push(_fieldData);
        }
      }
    }

    return newData;
  }
  /*
   * ?????????????????????,??????dataFrame.data???
  */

  function _getRowDataAt(index) {
    var o = {};
    var data = dataFrame.data;

    for (var a = 0; a < data.length; a++) {
      o[data[a].field] = data[a].data[index];
    }
    return o;
  }
  /**
   * obj => {uv: 100, pv: 10 ...}
   */


  function _getRowDataOf(obj) {
    !obj && (obj = {});
    var arr = [];
    var expCount = 0;

    for (var p in obj) {
      expCount++;
    }

    if (expCount) {
      var _loop = function _loop(i) {
        var matchNum = 0;

        _canvax._.each(dataFrame.data, function (fd) {
          if (fd.field in obj && fd.data[i] == obj[fd.field]) {
            matchNum++;
          }
        });

        if (matchNum == expCount) {
          //????????????????????????????????????
          arr.push(_getRowDataAt(i));
        }
      };

      for (var i = dataFrame.range.start; i <= dataFrame.range.end; i++) {
        _loop(i);
      }
    }
    return arr;
  }

  function _getFieldData(field) {
    var list = [];

    var _f = _canvax._.find(dataFrame.data, function (obj) {
      return obj.field == field;
    });

    _f && (list = _f.data);
    return list;
  }

  _initHandle(dataOrg);

  dataFrame.data = _getDataAndSetDataLen();
  return dataFrame;
}
});

unwrapExports(dataFrame);

var chart = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _global = interopRequireDefault(global$1);

var _canvax$$1 = interopRequireDefault(_canvax);

var _dataFrame = interopRequireDefault(dataFrame);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    $ = _canvax$$1["default"].$,
    event = _canvax$$1["default"].event;
var _padding = 20;

var Chart = /*#__PURE__*/function (_event$Dispatcher) {
  (0, _inherits2["default"])(Chart, _event$Dispatcher);

  var _super = _createSuper(Chart);

  function Chart(node, data, opt, componentModules) {
    var _this;

    (0, _classCallCheck2["default"])(this, Chart);
    _this = _super.call(this);
    _this.componentModules = componentModules;
    _this._node = node;
    _this._data = data;
    _this._opt = opt;
    _this.dataFrame = _this.initData(data, opt);
    _this.el = $.query(node); //chart ??????????????????????????????????????????????????????chart?????????????????????

    _this.width = parseInt(_this.el.offsetWidth); //???????????????

    _this.height = parseInt(_this.el.offsetHeight); //???????????????
    //legend?????????top?????????????????????padding.top???????????????legend???height

    _this.padding = null; //Canvax??????

    _this.canvax = new _canvax$$1["default"].App({
      el: _this.el,
      webGL: false
    });

    _this.canvax.registEvent();

    _this.id = "chartx_" + _this.canvax.id;

    _this.el.setAttribute("chart_id", _this.id);

    _this.el.setAttribute("chartx_version", "2.0"); //??????stage ---------------------------------------------------------begin


    _this.stage = new _canvax$$1["default"].Display.Stage({
      id: "main-chart-stage"
    });

    _this.canvax.addChild(_this.stage); //??????stage ---------------------------------------------------------end
    //?????????coord ??? graphs ????????????


    _this.setCoord_Graphs_Sp(); //???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


    _this.__highModules = ["theme", "coord", "graphs"]; //??????????????????,???????????????????????????????????????

    _this.components = [];
    _this.inited = false;

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(Chart, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var me = this; //init????????? this._opt

      var opt = this._opt; //padding??????????????????????????????

      this.padding = this._getPadding(); //?????????init ?????? "theme", "coord", "graphs" ??????????????????????????????

      _.each(this.__highModules, function (compName) {
        if (!opt[compName]) return;

        var comps = _.flatten([opt[compName]]); //them???????????????????????????so????????????


        if (compName == "theme") {
          comps = [comps];
        }

        _.each(comps, function (comp) {
          if ( //??????type???coord?????????field(or keyField)???graphs????????????????????????????????????
          //???????????????keyField
          compName == "coord" && !comp.type || compName == "graphs" && !comp.field && !comp.keyField && !comp.adcode && !comp.geoJson && !comp.geoJsonUrl //????????????????????????adcode????????????
          ) return;
          var compModule = me.componentModules.get(compName, comp.type);

          if (compModule) {
            var _comp = new compModule(comp, me);

            me.components.push(_comp);
          }
        });
      }); //PS: theme ???????????????????????????registerComponents?????????????????????


      var _loop = function _loop(_p) {
        //???coord graphs theme?????????????????????????????????
        if (_.indexOf(_this2.__highModules, _p) == -1) {
          var comps = _this2._opt[_p]; //????????????????????????????????????????????????????????????????????????????????????????????????

          if (!_.isArray(comps)) {
            comps = [comps];
          }

          _.each(comps, function (comp) {
            var compModule = me.componentModules.get(_p, comp.type);

            if (compModule) {
              var _comp = new compModule(comp, me);

              me.components.push(_comp);
            }
          });
        }
      };

      for (var _p in this._opt) {
        _loop(_p);
      }
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      var me = this;
      !opt && (opt = {});

      var _coord = this.getComponent({
        name: 'coord'
      });

      if (_coord && _coord.horizontal) {
        this._drawBeginHorizontal();
      }
      var width = this.width - this.padding.left - this.padding.right;
      var height = this.height - this.padding.top - this.padding.bottom;
      var origin = {
        x: this.padding.left,
        y: this.padding.top
      };

      if (_coord) {
        //????????????????????????
        _coord.draw(opt);

        width = _coord.width;
        height = _coord.height;
        origin = _coord.origin;
      }

      if (this.dataFrame.length == 0) {
        //????????????????????????????????????graphs
        me.fire("complete");
        return;
      }

      var _graphs = this.getComponents({
        name: 'graphs'
      });

      var graphsCount = _graphs.length;
      var completeNum = 0;
      opt = _.extend(opt, {
        width: width,
        height: height,
        origin: origin
      });

      _.each(_graphs, function (_g) {
        _g.on("complete", function (g) {
          completeNum++;

          if (completeNum == graphsCount) {
            me.fire("complete");
          }
          _g.inited = true;
        });

        _g.draw(opt);
      }); //????????????coord graphs ?????????????????????


      for (var i = 0, l = this.components.length; i < l; i++) {
        var p = this.components[i];

        if (_.indexOf(this.__highModules, p.name) == -1) {
          p.draw(opt);
        }
      }

      this._bindEvent();

      if (_coord && _coord.horizontal) {
        this._drawEndHorizontal();
      }
    }
  }, {
    key: "_drawBeginHorizontal",
    value: function _drawBeginHorizontal() {
      //?????????????????? ??????4???padding???????????????
      //top,right ?????? ??? bottom,left ??????
      var padding = this.padding;
      var num = padding.top;
      padding.top = padding.right;
      padding.right = padding.bottom;
      padding.bottom = padding.left;
      padding.left = num;
    } //??????????????????????????????

  }, {
    key: "_drawEndHorizontal",
    value: function _drawEndHorizontal() {
      var ctx = this.graphsSprite.context;
      ctx.x += (this.width - this.height) / 2;
      ctx.y += (this.height - this.width) / 2;
      ctx.rotation = 90;
      ctx.rotateOrigin = {
        x: this.height / 2,
        y: this.width / 2
      };

      this._horizontalGraphsText();
    }
  }, {
    key: "_horizontalGraphsText",
    value: function _horizontalGraphsText() {
      var me = this;

      function _horizontalText(el) {
        if (el.children) {
          _.each(el.children, function (_el) {
            _horizontalText(_el);
          });
        }

        if (el.type == "text" && !el.__horizontal) {
          var ctx = el.context;
          var w = ctx.width;
          var h = ctx.height;
          ctx.rotation = ctx.rotation - 90;
          el.__horizontal = true;
        }
      }

      _.each(me.getComponents({
        name: 'graphs'
      }), function (_graphs) {
        _horizontalText(_graphs.sprite);
      });
    }
  }, {
    key: "_getPadding",
    value: function _getPadding() {
      var paddingVal = _padding;

      if (this._opt.coord && "padding" in this._opt.coord) {
        if (!_.isObject(this._opt.coord.padding)) {
          paddingVal = this._opt.coord.padding;
        }
      }
      var paddingObj = {
        top: paddingVal,
        right: paddingVal,
        bottom: paddingVal,
        left: paddingVal
      };

      if (this._opt.coord && "padding" in this._opt.coord) {
        if (_.isObject(this._opt.coord.padding)) {
          paddingObj = _.extend(paddingObj, this._opt.coord.padding);
        }
      }
      return paddingObj;
    } //ind ????????????????????????????????????????????????

  }, {
    key: "getTheme",
    value: function getTheme(ind) {
      var colors = _global["default"].getGlobalTheme();

      var _theme = this.getComponent({
        name: 'theme'
      });

      if (_theme) {
        colors = _theme.get();
      }

      if (ind != undefined) {
        return colors[ind % colors.length] || "#ccc";
      }
      return colors;
    }
  }, {
    key: "setCoord_Graphs_Sp",
    value: function setCoord_Graphs_Sp() {
      //????????????????????????
      this.coordSprite = new _canvax$$1["default"].Display.Sprite({
        id: 'coordSprite'
      });
      this.stage.addChild(this.coordSprite); //graphs??????

      this.graphsSprite = new _canvax$$1["default"].Display.Sprite({
        id: 'graphsSprite'
      });
      this.stage.addChild(this.graphsSprite);
    }
    /*
     * chart?????????
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.clean();

      if (this.el) {
        this.el.removeAttribute("chart_id");
        this.el.removeAttribute("chartx_version");
        this.canvax.destroy();
        this.el = null;
      }
      this._destroy && this._destroy();
      this.fire("destroy");
    }
    /*
     * ??????????????????
     **/

  }, {
    key: "clean",
    value: function clean() {
      //???????????????stage???stage????????????????????? destroy ???
      for (var i = 0, l = this.canvax.children.length; i < l; i++) {
        var stage = this.canvax.getChildAt(i);

        for (var s = 0, sl = stage.children.length; s < sl; s++) {
          stage.getChildAt(s).destroy();
          s--;
          sl--;
        }
      }
      //???????????????????????????????????????

      this.setCoord_Graphs_Sp();
      this.components = []; //????????????

      this.canvax.domView && (this.canvax.domView.innerHTML = ""); //???????????????????????????

      if (this.canvax.event) {
        this.canvax.event.curPointsTarget = [];
      }
    }
    /**
     * ?????????????????????????????????
     */

  }, {
    key: "resize",
    value: function resize() {
      var _w = parseInt(this.el.offsetWidth);

      var _h = parseInt(this.el.offsetHeight);

      if (_w == this.width && _h == this.height) return;
      this.width = _w;
      this.height = _h;
      this.canvax.resize();
      this.inited = false;
      this.clean();
      this.init();
      this.draw({
        resize: true
      });
      this.inited = true;
    }
    /**
     * reset ???????????????????????????????????????????????????????????????opts???????????????????????????????????????????????????????????????????????????????????????
     * opt ????????????options?????????????????????opt??????????????????opt?????????????????????extend
     */

  }, {
    key: "reset",
    value: function reset(opt, data) {
      opt && (this._opt = opt);
      /* ?????? extend opt 
      !opt && (opt={});
      _.extend(this._opt, opt);
      */

      data && (this._data = data);
      this.dataFrame = this.initData(this._data, opt);
      this.clean();
      this.init();
      this.draw();
    }
    /*
     * ????????????????????????????????????????????????
     * 
     * @trigger ?????????????????????data reset????????????????????????
     * ??????????????? datazoom ???????????? ????????? trigger??????{ name:'datazoom', left:1,right:1 }
     */

  }, {
    key: "resetData",
    value: function resetData(data, trigger) {
      var me = this;
      this._data = data; //?????????resetData?????????null???????????? ????????????

      var preDataLenth = this.dataFrame.org.length;
      this.dataFrame.resetData(data); //console.log( this.dataFrame )

      var graphsList = this.getComponents({
        name: 'graphs'
      });
      var allGraphsHasResetData = true;

      _.each(graphsList, function (_g) {
        if (!_g.resetData && allGraphsHasResetData) {
          allGraphsHasResetData = false;
          return false;
        }
      });

      if (!preDataLenth || !allGraphsHasResetData) {
        //?????????????????????????????? ??????????????????????????????????????????
        //?????????????????????graphs?????????resetData ??? ??????
        this.clean();
        this.init();
        this.draw(this._opt);
        return;
      }

      var _coord = this.getComponent({
        name: 'coord'
      });

      if (_coord) {
        _coord.resetData(this.dataFrame, trigger);
      }

      _.each(graphsList, function (_g) {
        _g.resetData(me.dataFrame, trigger);
      });

      this.componentsReset(trigger);

      if (_coord && _coord.horizontal) {
        this._horizontalGraphsText();
      }
      this.fire("resetData");
    }
  }, {
    key: "initData",
    value: function initData() {
      return _dataFrame["default"].apply(this, arguments);
    }
  }, {
    key: "componentsReset",
    value: function componentsReset(trigger) {
      var me = this;

      _.each(this.components, function (p, i) {
        //theme coord graphs????????????
        if (_.indexOf(me.__highModules, p.name) != -1) {
          return;
        }

        if (trigger && trigger.comp && trigger.comp.__cid == p.__cid) {
          //????????????reset?????????????????????????????????????????????components?????????reset?????????????????????
          return;
        }
        p.reset && p.reset(me[p.type] || {}, me.dataFrame);
      });
    }
  }, {
    key: "getComponentById",
    value: function getComponentById(id) {
      var comp;

      _.each(this.components, function (c) {
        if (c.id && c.id == id) {
          comp = c;
          return false;
        }
      });

      return comp;
    }
  }, {
    key: "getComponent",
    value: function getComponent(opt) {
      return this.getComponents(opt)[0];
    }
  }, {
    key: "getComponents",
    value: function getComponents(opt, components) {
      var arr = [];
      var expCount = 0;

      if (!components) {
        components = this.components;
      }

      for (var p in opt) {
        expCount++;
      }

      if (!expCount) {
        return components;
      }

      _.each(components, function (comp) {
        var i = 0;

        for (var _p2 in opt) {
          if (JSON.stringify(comp[_p2]) == JSON.stringify(opt[_p2])) {
            i++;
          }
        }

        if (expCount == i) {
          arr.push(comp);
        }
      });

      return arr;
    } //???graphs???????????????opt?????????????????????????????????true
    //count???????????????????????? ?????????1??????

  }, {
    key: "getGraph",
    value: function getGraph(opt) {
      var graphs = this.getGraphs(opt);
      return graphs[0];
    }
  }, {
    key: "getGraphs",
    value: function getGraphs(opt) {
      return this.getComponents(opt, this.getComponents({
        name: 'graphs'
      }));
    } //??????graphs??????id

  }, {
    key: "getGraphById",
    value: function getGraphById(id) {
      var _g;

      _.each(this.getComponents({
        name: 'graphs'
      }), function (g) {
        if (g.id == id) {
          _g = g;
          return false;
        }
      });

      return _g;
    } //???coord???????????????opt?????????????????????????????????true
    //?????????????????????????????????????????????????????? getCoords 

  }, {
    key: "getCoord",
    value: function getCoord(opt) {
      return this.getComponent(_.extend(true, {
        name: 'coord'
      }, opt));
    } //??????field?????????????????????????????????legend?????????legend???????????????

  }, {
    key: "getLegendData",
    value: function getLegendData() {
      var me = this;
      var data = []; //??????????????????pie??????????????????????????????????????????????????????graphs???????????????getLegendData?????????
      //??????????????????????????????????????? ?????????????????????????????????

      _.each(this.getComponents({
        name: 'graphs'
      }), function (_g) {
        _.each(_g.getLegendData(), function (item) {
          if (_.find(data, function (d) {
            return d.name == item.name;
          })) return;

          var legendItem = _.extend(true, {
            enabled: true
          }, item);

          legendItem.color = item.fillStyle || item.color || item.style;
          data.push(legendItem);
        });
      });

      if (data.length) {
        return data;
      }

      var _coord = me.getComponent({
        name: 'coord'
      });

      _.each(_.flatten(_coord.fieldsMap), function (map, i) {
        //??????yAxis?????????????????????????????????field???????????????????????????????????? legend data
        var isGraphsField = false;

        _.each(me._opt.graphs, function (gopt) {
          if (_.indexOf(_.flatten([gopt.field]), map.field) > -1) {
            isGraphsField = true;
            return false;
          }
        });

        if (isGraphsField) {
          data.push({
            enabled: map.enabled,
            name: map.field,
            field: map.field,
            ind: map.ind,
            color: map.color,
            yAxis: map.yAxis
          });
        }
      });

      return data;
    }
  }, {
    key: "show",
    value: function show(field, trigger) {

      var _coord = this.getComponent({
        name: 'coord'
      });

      _coord && _coord.show(field, trigger);

      _.each(this.getComponents({
        name: 'graphs'
      }), function (_g) {
        _g.show(field, trigger);
      });

      this.componentsReset(trigger);
    }
  }, {
    key: "hide",
    value: function hide(field, trigger) {
      var me = this;

      var _coord = me.getComponent({
        name: 'coord'
      });

      _coord && _coord.hide(field, trigger);

      _.each(this.getComponents({
        name: 'graphs'
      }), function (_g) {
        _g.hide(field, trigger);
      });

      this.componentsReset(trigger);
    }
  }, {
    key: "_bindEvent",
    value: function _bindEvent() {
      var me = this;
      if (this.__bindEvented) return;
      this.on(event.types.get(), function (e) {
        //????????????graphs??????????????????
        //?????????????????????????????????????????????e???????????????tips??????
        if (e.eventInfo) {
          _.each(this.getGraphs(), function (graph) {
            graph.triggerEvent(e);
          });
        }

        var _tips = me.getComponent({
          name: 'tips'
        });

        var _coord = me.getComponent({
          name: 'coord'
        });

        if (_tips) {
          me._setGraphsTipsInfo.apply(me, [e]);

          if (e.type == "mouseover" || e.type == "mousedown") {
            _tips.show(e);

            me._tipsPointerAtAllGraphs(e);
          }

          if (e.type == "mousemove") {
            _tips.move(e);

            me._tipsPointerAtAllGraphs(e);
          }

          if (e.type == "mouseout" && !(e.toTarget && _coord && _coord.induce && _coord.induce.containsPoint(_coord.induce.globalToLocal(e.target.localToGlobal(e.point))))) {
            _tips.hide(e);

            me._tipsPointerHideAtAllGraphs(e);
          }
        }
      }); //?????????????????????bind??????

      this.__bindEvented = true;
    } //???????????????tipsinfo???????????????????????????????????????????????????

  }, {
    key: "_setGraphsTipsInfo",
    value: function _setGraphsTipsInfo(e) {
      if (!e.eventInfo) {
        e.eventInfo = {};
      }

      var _coord = this.getComponent({
        name: 'coord'
      });

      if (_coord) {
        e.eventInfo = _coord.getTipsInfoHandler(e);
      }

      if (!("tipsEnabled" in e.eventInfo)) {
        e.eventInfo.tipsEnabled = true; //???????????????tips
      }
      //???????????????????????????????????????????????????bar?????????e.eventInfo.nodes = [ {bardata} ] ???????????????bar?????????
      //??????tips??????????????????bardata?????????

      if (!e.eventInfo.nodes || !e.eventInfo.nodes.length) {
        var nodes = [];
        var iNode = e.eventInfo.iNode;

        _.each(this.getComponents({
          name: 'graphs'
        }), function (_g) {
          if (_g.getNodesAt && iNode !== undefined) {
            nodes = nodes.concat(_g.getNodesAt(iNode, e));
          }
        });

        e.eventInfo.nodes = nodes;
      }
    } //?????????point??????????????????graphs????????????????????????graphs?????????shape??????????????????

  }, {
    key: "_tipsPointerAtAllGraphs",
    value: function _tipsPointerAtAllGraphs(e) {
      _.each(this.getComponents({
        name: 'graphs'
      }), function (_g) {
        _g.tipsPointerOf(e);
      });
    }
  }, {
    key: "_tipsPointerHideAtAllGraphs",
    value: function _tipsPointerHideAtAllGraphs(e) {
      _.each(this.getComponents({
        name: 'graphs'
      }), function (_g) {
        _g.tipsPointerHideOf(e);
      });
    }
  }]);
  return Chart;
}(event.Dispatcher);

_global["default"].registerComponent(Chart, 'chart');

var _default = Chart;
exports["default"] = _default;
});

unwrapExports(chart);

var tools = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numAddSymbol = numAddSymbol;
exports.getDisMinATArr = getDisMinATArr;
exports.getPath = getPath;
exports.getDefaultProps = getDefaultProps;



/**
 * ??????????????????','???
 * @param  {[Number]} $n [??????]
 * @param  {[type]} $s [?????????????????????]
 * @return {[String]}    [??????$s???????????? ???????????????????????? ??????????????????????????????'.'???  ??????????????????]
 */
function numAddSymbol($n, $s) {
  var s = Number($n);
  var symbol = $s ? $s : ',';

  if (!s) {
    return String($n);
  }

  if (s >= 1000) {
    var num = parseInt(s / 1000);
    return String($n.toString().replace(num, num + symbol));
  } else {
    return String($n);
  }
} //?????????????????? ????????????$arr????????????$n?????????????????????


function getDisMinATArr($n, $arr) {
  var index = 0;
  var n = Math.abs($n - $arr[0]);

  for (var a = 1, al = $arr.length; a < al; a++) {
    if (n > Math.abs($n - $arr[a])) {
      n = Math.abs($n - $arr[a]);
      index = a;
    }
  }

  return index;
}
/**
* ????????????path??????
* @param  {[Array]} $arr    [??????]
* @return {[String]}        [path?????????]
*/


function getPath($arr) {
  var M = 'M',
      L = 'L',
      Z = 'z';
  var s = '';
  var start = {
    x: 0,
    y: 0
  };

  if (_canvax._.isArray($arr[0])) {
    start.x = $arr[0][0];
    start.y = $arr[0][1];
    s = M + $arr[0][0] + ' ' + $arr[0][1];
  } else {
    start = $arr[0];
    s = M + $arr[0].x + ' ' + $arr[0].y;
  }

  for (var a = 1, al = $arr.length; a < al; a++) {
    var x = 0,
        y = 0,
        item = $arr[a];

    if (_canvax._.isArray(item)) {
      x = item[0];
      y = item[1];
    } else {
      x = item.x;
      y = item.y;
    } //s += ' ' + L + x + ' ' + y


    if (x == start.x && y == start.y) {
      s += ' ' + Z;
    } else {
      s += ' ' + L + x + ' ' + y;
    }
  } // s += ' ' + Z


  return s;
}

function getDefaultProps(dProps) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  for (var p in dProps) {
    if (!!p.indexOf("_")) {
      if (!dProps[p] || !dProps[p].propertys) {
        //????????????????????????????????????????????????????????????????????????????????????
        if (_canvax._.isObject(dProps[p]) && !_canvax._.isFunction(dProps[p]) && !_canvax._.isArray(dProps[p])) {
          target[p] = dProps[p]["default"];
        } else {
          target[p] = dProps[p];
        }
      } else {
        target[p] = {};
        getDefaultProps(dProps[p].propertys, target[p]);
      }
    }
  }

  return target;
}
});

unwrapExports(tools);
var tools_1 = tools.numAddSymbol;
var tools_2 = tools.getDisMinATArr;
var tools_3 = tools.getPath;
var tools_4 = tools.getDefaultProps;

var component = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _global = interopRequireDefault(global$1);

var _canvax$$1 = interopRequireDefault(_canvax);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var event = _canvax$$1["default"].event,
    _ = _canvax$$1["default"]._;

var Component = /*#__PURE__*/function (_event$Dispatcher) {
  (0, _inherits2["default"])(Component, _event$Dispatcher);

  var _super = _createSuper(Component);

  function Component(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, Component);
    _this = _super.call(this, opt, app);

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Component.defaultProps()), opt);

    _this.name = "component"; //????????????

    _this.type = null; //???????????????????????? Graphs???????????????bar,line,scat???
    //this.enabled = false; //?????????????????????

    _this._opt = opt;
    _this.app = app; //????????????????????????app??????????????????

    _this.width = 0;
    _this.height = 0; //height ?????????margin

    _this.pos = {
      x: 0,
      y: 0
    };
    _this.margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    _this.__cid = _canvax$$1["default"].utils.createId("comp_");
    _this.ctx = app.stage.ctx || app.stage.canvas.getContext("2d");
    return _this;
  }

  (0, _createClass2["default"])(Component, [{
    key: "init",
    value: function init(opt, data) {}
  }, {
    key: "draw",
    value: function draw() {} //???????????????

  }, {
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "reset",
    value: function reset() {} // resetData(){
    //     console.log( ( this.type || '' ) + '??????resetData?????????' );
    // }

  }, {
    key: "setPosition",
    value: function setPosition(pos) {
      !pos && (pos = this.pos);
      pos.x && (this.sprite.context.x = pos.x);
      pos.y && (this.sprite.context.y = pos.y);
    }
  }, {
    key: "layout",
    value: function layout() {}
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        enabled: {
          detail: '?????????????????????',
          "default": false
        }
      };
    }
  }, {
    key: "registerComponent",
    value: function registerComponent(compModule, name, type) {
      return _global["default"].registerComponent(compModule, name, type);
    } //global.getProps ????????????

  }, {
    key: "_isComponentRoot",
    value: function _isComponentRoot() {
      return true;
    }
  }]);
  return Component;
}(event.Dispatcher);

exports["default"] = Component;
});

unwrapExports(component);

var coord = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _component = interopRequireDefault(component);

var _canvax$$1 = interopRequireDefault(_canvax);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._;

var coordBase = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(coordBase, _Component);

  var _super = _createSuper(coordBase);

  function coordBase(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, coordBase);
    _this = _super.call(this, opt, app);

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(coordBase.defaultProps()));

    _this.name = "coord";
    _this._opt = opt;
    _this.app = app;
    _this.dataFrame = _this.app.dataFrame;
    _this.sprite = new _canvax$$1["default"].Display.Sprite({
      name: "coord_" + opt.type
    });

    _this.app.coordSprite.addChild(_this.sprite);
    /*
    ????????????field?????????????????????????????????
    ["uv"] --> [
        {field:'uv',enabled:true ,yAxis: yAxisleft }
        ...
    ]
    */


    _this.fieldsMap = null;
    _this.induce = null;
    _this._axiss = []; //??????????????????

    return _this;
  } //?????????field????????????????????????????????????field?????? {field: , enabled:...}??????


  (0, _createClass2["default"])(coordBase, [{
    key: "setFieldsMap",
    value: function setFieldsMap(axisExp) {
      var me = this;
      var fieldInd = 0;
      var axisType = axisExp.type || "yAxis";
      var fieldsArr = [];

      _.each(this.getAxiss(axisExp), function (_axis) {
        if (_axis.field) {
          fieldsArr = fieldsArr.concat(_axis.field);
        }
      });

      function _set(fields) {
        if (_.isString(fields)) {
          fields = [fields];
        }

        var clone_fields = _.clone(fields);

        for (var i = 0, l = fields.length; i < l; i++) {
          if (_.isString(fields[i])) {
            clone_fields[i] = {
              field: fields[i],
              enabled: true,
              //yAxis : me.getAxis({type:'yAxis', field:fields[i] }),
              color: me.app.getTheme(fieldInd),
              ind: fieldInd++
            };
            clone_fields[i][axisType] = me.getAxis({
              type: axisType,
              field: fields[i]
            });
          }

          if (_.isArray(fields[i])) {
            clone_fields[i] = _set(fields[i], fieldInd);
          }
        }
        return clone_fields;
      }
      return _set(fieldsArr);
    } //?????? fieldsMap ?????????field ??? enabled??????

  }, {
    key: "setFieldEnabled",
    value: function setFieldEnabled(field) {
      var me = this;

      function set(maps) {
        _.each(maps, function (map) {
          if (_.isArray(map)) {
            set(map);
          } else if (map.field && map.field == field) {
            map.enabled = !map.enabled;
          }
        });
      }

      set(me.fieldsMap);
    }
  }, {
    key: "getFieldMapOf",
    value: function getFieldMapOf(field) {
      var me = this;
      var fieldMap = null;

      function get(maps) {
        _.each(maps, function (map) {
          if (_.isArray(map)) {
            get(map);
          } else if (map.field && map.field == field) {
            fieldMap = map;
            return false;
          }
        });
      }

      get(me.fieldsMap);
      return fieldMap;
    } //??? fieldsMap ?????????????????????????????????????????? enabled???true???????????????
    //?????????????????????????????????????????????????????????y????????????????????????????????????????????????????????????????????????????????????

  }, {
    key: "getEnabledFieldsOf",
    value: function getEnabledFieldsOf(axis) {
      var enabledFields = [];
      var axisType = axis ? axis.type : "yAxis";

      _.each(this.fieldsMap, function (bamboo) {
        if (_.isArray(bamboo)) {
          //?????????????????????
          var fields = []; //?????????fields??????????????????group??????left??????right???axis

          _.each(bamboo, function (obj) {
            if (obj[axisType] === axis && obj.field && obj.enabled) {
              fields.push(obj.field);
            }
          });

          fields.length && enabledFields.push(fields);
        } else {
          //?????????
          if (bamboo[axisType] === axis && bamboo.field && bamboo.enabled) {
            enabledFields.push(bamboo.field);
          }
        }
      });

      return enabledFields;
    } //?????????????????? fields ???????????????????????????????????? fields ????????? enabled==false???field
    //?????????enabled???field ??????

  }, {
    key: "filterEnabledFields",
    value: function filterEnabledFields(fields) {
      var me = this;
      var arr = [];
      if (!_.isArray(fields)) fields = [fields];

      _.each(fields, function (f) {
        if (!_.isArray(f)) {
          if (me.getFieldMapOf(f).enabled) {
            arr.push(f);
          }
        } else {
          //?????????????????????????????????????????????????????????
          var varr = [];

          _.each(f, function (v_f) {
            if (me.getFieldMapOf(v_f).enabled) {
              varr.push(v_f);
            }
          });

          if (varr.length) {
            arr.push(varr);
          }
        }
      });

      return arr;
    }
  }, {
    key: "getAxisDataFrame",
    value: function getAxisDataFrame(fields) {
      return {
        field: fields,
        org: this.dataFrame.getDataOrg(fields, function (val) {
          if (val === undefined || val === null || val == "") {
            return val;
          }

          return isNaN(Number(val)) ? val : Number(val);
        })
      };
    }
  }, {
    key: "hide",
    value: function hide(field) {
      this.changeFieldEnabled(field);
    }
  }, {
    key: "show",
    value: function show(field) {
      this.changeFieldEnabled(field);
    }
  }, {
    key: "getSizeAndOrigin",
    value: function getSizeAndOrigin() {
      return {
        width: this.width,
        height: this.height,
        origin: this.origin
      };
    }
    /**
     * @param { opt.field  } field ?????????????????????yAxis
     * @param { opt.iNode  } iNode ?????????????????????xaxis???value
     * @param { opt.value {xval: yval:} }
     */

  }, {
    key: "getPoint",
    value: function getPoint() {}
  }, {
    key: "getAxisOriginPoint",
    value: function getAxisOriginPoint() {}
  }, {
    key: "getOriginPos",
    value: function getOriginPos() {} //????????????????????????

  }, {
    key: "getAxis",
    value: function getAxis(opt) {
      var axiss = this.getAxiss(opt);
      return axiss[0];
    }
  }, {
    key: "getAxiss",
    value: function getAxiss(opt) {
      var arr = [];
      var expCount = Object.keys(opt).length;

      _.each(this._axiss, function (item) {
        var i = 0;

        for (var p in opt) {
          if (p == 'field') {
            (function () {
              //???????????????????????????
              var fs = _.flatten([item[p]]);

              var expFs = _.flatten([opt[p]]);

              var inFs = true;

              _.each(expFs, function (exp) {
                if (_.indexOf(fs, exp) == -1) {
                  //????????????field??????fs?????? ?????????????????????
                  inFs = false;
                }
              });

              if (inFs) {
                i++;
              }
            })();
          } else {
            if (JSON.stringify(item[p]) == JSON.stringify(opt[p])) {
              i++;
            }
          }
        }

        if (expCount == i) {
          arr.push(item);
        }
      });

      return arr;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        type: {
          detail: '???????????????',
          documentation: "??????????????????????????????'rect'???????????????????????????,'polar'????????????????????????,'box'??????????????????????????? ",
          insertText: "type: ",
          "default": "",
          values: ["rect", "polar", "box", "polar3d"]
        },
        width: {
          detail: '?????????width',
          "default": 0
        },
        height: {
          detail: '?????????height',
          "default": 0
        },
        origin: {
          detail: '???????????????',
          propertys: {
            x: {
              detail: '??????x??????',
              "default": 0
            },
            y: {
              detail: '??????x??????',
              "default": 0
            }
          }
        }
      };
    }
  }]);
  return coordBase;
}(_component["default"]);

exports["default"] = coordBase;
});

unwrapExports(coord);

var grid = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Line = _canvax$$1["default"].Shapes.Line;
var Circle = _canvax$$1["default"].Shapes.Circle;
var Polygon = _canvax$$1["default"].Shapes.Polygon;

var polarGrid = /*#__PURE__*/function (_event$Dispatcher) {
  (0, _inherits2["default"])(polarGrid, _event$Dispatcher);

  var _super = _createSuper(polarGrid);

  function polarGrid(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, polarGrid);
    _this = _super.call(this, opt, app);
    _this.width = 0;
    _this.height = 0;
    _this.app = app; //?????????????????????????????????????????????

    _this.pos = {
      x: 0,
      y: 0
    };
    _this.dataSection = [];
    _this.sprite = null; //??????sprite

    _this.induce = null; //??????????????????????????????????????????

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(polarGrid.defaultProps()), opt);

    _this.init(opt);

    return _this;
  }

  (0, _createClass2["default"])(polarGrid, [{
    key: "init",
    value: function init() {
      this.sprite = new _canvax$$1["default"].Display.Sprite();
    }
  }, {
    key: "setX",
    value: function setX($n) {
      this.sprite.context.x = $n;
    }
  }, {
    key: "setY",
    value: function setY($n) {
      this.sprite.context.y = $n;
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      _.extend(true, this, opt);

      this._widget();

      this.setX(this.pos.x);
      this.setY(this.pos.y);
    }
  }, {
    key: "clean",
    value: function clean() {
      this.sprite.removeAllChildren();
    }
  }, {
    key: "reset",
    value: function reset(opt) {
      /*
      this.sprite.removeAllChildren();
      this.draw( opt );
      */
    }
  }, {
    key: "_widget",
    value: function _widget() {
      var me = this;

      _.each(this.dataSection, function (num, i) {
        if (num) {
          var r = me.app.getROfNum(num);
          var points = me.app.getPointsOfR(r);
          var ctx = {
            //lineType : me.ring.lineType,
            lineWidth: me.ring.lineWidth,
            strokeStyle: me._getStyle(me.ring.strokeStyle, i - 1),
            //me.ring.strokeStyle,
            fillStyle: me._getStyle(me.ring.fillStyle, i - 1),
            fillAlpha: me.ring.fillAlpha
          };

          var _ring;

          var ringType = Circle;

          if (me.ring.shapeType == "circle") {
            ctx.r = r;
            _ring = new ringType({
              context: ctx
            });
          } else {
            ctx.pointList = [];

            _.each(points, function (point, i) {
              if (i < points.length) {
                ctx.pointList.push([point.x, point.y]);
              }
            });

            ringType = Polygon;
            _ring = new ringType({
              context: ctx
            });
          }
          me.sprite.addChildAt(_ring, 0);

          if (i == me.dataSection.length - 1) {
            ctx.fillAlpha = 0;
            ctx.fillStyle = "#ffffff";
            me.induce = new ringType({
              context: ctx
            });
            me.sprite.addChild(me.induce);
          }

          _.each(points, function (point) {
            var _line = new Line({
              context: {
                end: point,
                lineWidth: me.ring.lineWidth,
                strokeStyle: me.ring.strokeStyle
              }
            });

            me.sprite.addChild(_line);
          });
        }
      });
    }
  }, {
    key: "_getStyle",
    value: function _getStyle(color, i) {
      if (_.isArray(color)) {
        return color[i % color.length];
      }

      return color;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        enabled: {
          detail: '????????????grid',
          "default": false
        },
        ring: {
          detail: '????????????',
          propertys: {
            shapeType: {
              detail: '???????????????????????????poly?????????circle',
              "default": 'poly'
            },
            lineType: {
              detail: '???????????????sold?????????dashed??????',
              "default": 'sold'
            },
            lineWidth: {
              detail: '??????',
              "default": 1
            },
            strokeStyle: {
              detail: '?????????',
              "default": '#e5e5e5'
            },
            fillStyle: {
              detail: '????????????,??????????????????',
              "default": null
            },
            fillAlpha: {
              detail: '?????????????????????',
              "default": 0.5
            }
          }
        },
        ray: {
          detail: '??????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            lineWidth: {
              detail: '??????',
              "default": 1
            },
            strokeStyle: {
              detail: '?????????',
              "default": '#e5e5e5'
            }
          }
        }
      };
    }
  }]);
  return polarGrid;
}(event.Dispatcher);

exports["default"] = polarGrid;
});

unwrapExports(grid);

var dataSection_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;



function normalizeTickInterval(interval, magnitude) {
  var normalized; // let multiples = [1, 2, 2.5, 5, 10];

  var multiples = [1, 2, 5, 10]; // round to a tenfold of 1, 2, 2.5 or 5

  normalized = interval / magnitude; // normalize the interval to the nearest multiple

  for (var _i = 0; _i < multiples.length; _i++) {
    interval = multiples[_i];

    if (normalized <= (multiples[_i] + (multiples[_i + 1] || multiples[_i])) / 2) {
      break;
    }
  } // multiply back to the correct magnitude


  interval *= magnitude;
  return interval;
}

function correctFloat(num) {
  return parseFloat(num.toPrecision(14));
}

function getLinearTickPositions(arr, $maxPart, $cfg) {
  arr = _canvax._.without(arr, undefined, null, "");
  var scale = $cfg && $cfg.scale ? parseFloat($cfg.scale) : 1; //???????????????????????? ??????????????????(??????)  ????????????[8, 8.2, 8.4, 8.6, 8.8, 9]   ????????????[8, 9]

  var isInt = $cfg && $cfg.isInt ? 1 : 0;

  if (isNaN(scale)) {
    scale = 1;
  }

  var max = _canvax._.max(arr);

  var initMax = max;
  max *= scale;

  var min = _canvax._.min(arr);

  if (min == max) {
    if (max > 0) {
      min = 0;
      return [min, max]; // min= Math.round(max/2);
    } else if (max < 0) {
      return [max, 0]; //min = max*2;
    } else {
      max = 1;
      return [0, max];
    }
  }

  var length = max - min;

  if (length) {
    var tempmin = min; //??????min>0???????????????????????????

    min -= length * 0.05; // S.log(min +":"+ tempmin)

    if (min < 0 && tempmin >= 0) {
      min = 0;
    }

    max += length * 0.05;
  }

  var tickInterval = (max - min) * 0.3; //72 / 365;

  var magnitude = Math.pow(10, Math.floor(Math.log(tickInterval) / Math.LN10));
  tickInterval = normalizeTickInterval(tickInterval, magnitude);

  if (isInt) {
    tickInterval = Math.ceil(tickInterval);
  }

  var pos,
      lastPos,
      roundedMin = correctFloat(Math.floor(min / tickInterval) * tickInterval),
      roundedMax = correctFloat(Math.ceil(max / tickInterval) * tickInterval),
      tickPositions = []; // Populate the intermediate values

  pos = roundedMin;

  while (pos <= roundedMax) {
    // Place the tick on the rounded value
    tickPositions.push(pos); // Always add the raw tickInterval, not the corrected one.

    pos = correctFloat(pos + tickInterval); // If the interval is not big enough in the current min - max range to actually increase
    // the loop variable, we need to break out to prevent endless loop. Issue #619

    if (pos === lastPos) {
      break;
    } // Record the last value


    lastPos = pos;
  }

  if (tickPositions.length >= 3) {
    if (tickPositions[tickPositions.length - 2] >= initMax) {
      tickPositions.pop();
    }
  }

  return tickPositions;
}

var dataSection = {
  section: function section($arr, $maxPart, $cfg) {
    return _canvax._.uniq(getLinearTickPositions($arr, $maxPart, $cfg));
  }
};
var _default = dataSection;
exports["default"] = _default;
});

unwrapExports(dataSection_1);

var polar = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _index = interopRequireDefault(coord);

var _canvax$$1 = interopRequireDefault(_canvax);

var _grid = interopRequireDefault(grid);

var _dataSection = interopRequireDefault(dataSection_1);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;

var Polar = /*#__PURE__*/function (_coordBase) {
  (0, _inherits2["default"])(Polar, _coordBase);

  var _super = _createSuper(Polar);

  function Polar(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, Polar);
    _this = _super.call(this, opt, app);
    _this.type = "polar";

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Polar.defaultProps()), _this.setDefaultOpt(opt, app));

    _this.init(opt);

    return _this;
  }

  (0, _createClass2["default"])(Polar, [{
    key: "setDefaultOpt",
    value: function setDefaultOpt(coordOpt, app) {
      var coord$$1 = {
        rAxis: {
          field: []
        },
        aAxis: {},
        grid: {}
      };

      _.extend(true, coord$$1, coordOpt); //??????graphs.field ??? ?????? coord.rAxis.field -------------------


      if (!_.isArray(coord$$1.rAxis.field)) {
        coord$$1.rAxis.field = [coord$$1.rAxis.field];
      }

      var graphsArr = _.flatten([app._opt.graphs]); //???graphs????????????????????????graphs.field?????????coord.rAxis


      var arrs = [];

      _.each(graphsArr, function (graphs) {
        if (graphs.field) {
          //????????????field???????????????????????? graphs???
          var _fs = graphs.field;

          if (!_.isArray(_fs)) {
            _fs = [_fs];
          }
          arrs = arrs.concat(_fs);
        }
      });

      coord$$1.rAxis.field = coord$$1.rAxis.field.concat(arrs);

      if (coordOpt.aAxis && coordOpt.aAxis.field) {
        coord$$1.aAxis.enabled = true;
      } else {
        //??????aAxis.field?????????????????????????????????grid????????????grid???enabled??????false
        coord$$1.grid.enabled = false;
      }
      return coord$$1;
    }
  }, {
    key: "init",
    value: function init() {
      this._initModules(); //???????????????????????????????????? _fieldsDisplayMap ?????????
      // _fieldsDisplayMap ??????????????????????????????????????????????????????enabled ??? ????????????????????????yAxis


      this.fieldsMap = this.setFieldsMap({
        type: "rAxis"
      });
    }
  }, {
    key: "_initModules",
    value: function _initModules() {
      if (this.grid.enabled) {
        this._grid = new _grid["default"](this.grid, this);
        this.sprite.addChild(this._grid.sprite);
      }

      if (this.aAxis.enabled && this.grid.enabled) {
        this._aAxisScaleSp = new _canvax$$1["default"].Display.Sprite({
          id: "aAxisScaleSp"
        });
        this.sprite.addChild(this._aAxisScaleSp);
      }

      this._axiss.push({
        type: "rAxis",
        field: this.rAxis.field
      });
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {}); //????????????????????????width,height, origin

      this._computeAttr();

      this.rAxis.dataSection = this._getRDataSection();
      this.aAxis.data = this.app.dataFrame.getFieldData(this.aAxis.field);

      this._setAAxisAngleList();

      if (this.grid.enabled) {
        this._grid.draw({
          pos: this.origin,
          width: this.width,
          height: this.height,
          dataSection: this.rAxis.dataSection
        }, this);

        if (this.aAxis.enabled) {
          this._drawAAxis();
        }

        this._initInduce();
      }
    }
  }, {
    key: "resetData",
    value: function resetData() {}
  }, {
    key: "changeFieldEnabled",
    value: function changeFieldEnabled(field) {
      this.setFieldEnabled(field);
      this.rAxis.dataSection = this._getRDataSection();
      this.aAxis.data = this.app.dataFrame.getFieldData(this.aAxis.field);

      if (this.grid.enabled) {
        this._grid.reset({
          dataSection: this.rAxis.dataSection
        }, this);
      }
    }
  }, {
    key: "_getRDataSection",
    value: function _getRDataSection() {
      var me = this; //??????????????????????????????dataSection,??????????????????dataSection???
      //????????????????????????dataSection???????????????????????????yAxis???????????????

      if (this._opt.rAxis && this._opt.rAxis.dataSection) {
        return this._opt.rAxis.dataSection;
      }
      var arr = [];

      _.each(_.flatten([me.rAxis.field]), function (field) {
        arr = arr.concat(me.app.dataFrame.getFieldData(field));
      });

      arr.push(0);
      return _dataSection["default"].section(arr, 3);
    }
  }, {
    key: "_computeAttr",
    value: function _computeAttr() {
      var _r;

      var scaleXY = 1; //width/height ?????????

      var _padding = this.app.padding;
      var rootWidth = this.app.width;
      var rootHeight = this.app.height;

      if (!("width" in this._opt)) {
        this.width = rootWidth - _padding.left - _padding.right;
      }

      if (!("height" in this._opt)) {
        this.height = rootHeight - _padding.top - _padding.bottom;
      }
      var vw = this.width;
      var vh = this.height; //????????????allAngle startAngle????????????????????????polar???????????? ????????????
      //if( this.allAngle % 360 != 0 ){
      //360???polar?????????????????????1???1???

      var sinTop = 0,
          sinBottom = 0,
          cosLeft = 0,
          cosRight = 0; //????????????????????????????????????,?????????????????? ????????????????????????????????????????????????

      var angles = [this.startAngle];

      for (var i = 0, l = parseInt((this.startAngle + this.allAngle) / 90) - parseInt(this.startAngle / 90); i <= l; i++) {
        var angle = parseInt(this.startAngle / 90) * 90 + i * 90;

        if (_.indexOf(angles, angle) == -1 && angle > angles.slice(-1)[0]) {
          angles.push(angle);
        }
      }
      var lastAngle = this.startAngle + this.allAngle;

      if (_.indexOf(angles, lastAngle) == -1) {
        angles.push(lastAngle);
      }

      _.each(angles, function (angle) {
        angle = angle % 360;

        var _sin = Math.sin(angle * Math.PI / 180);

        if (angle == 180) {
          _sin = 0;
        }

        var _cos = Math.cos(angle * Math.PI / 180);

        if (angle == 270 || angle == 90) {
          _cos = 0;
        }
        sinTop = Math.min(sinTop, _sin);
        sinBottom = Math.max(sinBottom, _sin);
        cosLeft = Math.min(cosLeft, _cos);
        cosRight = Math.max(cosRight, _cos);
      });

      scaleXY = (Math.abs(cosLeft) + Math.abs(cosRight)) / (Math.abs(sinTop) + Math.abs(sinBottom));

      var _num = Math.min(vw, vh);

      if (scaleXY == 1) {
        vw = vh = _num;
      } else {
        var _w = vh * scaleXY;

        var _h = vw / scaleXY;

        if (_w > vw) {
          //?????????????????? ????????????height
          vh = _h;
        } else {
          vw = _w;
        }
      }
      var x = _padding.left + (this.width - vw) / 2;
      var y = _padding.top + (this.height - vh) / 2;
      this.origin = {
        x: x + vw * (cosLeft / (cosLeft - cosRight)),
        y: y + vh * (sinTop / (sinTop - sinBottom))
      };
      var distanceToLine = {
        top: this.origin.y - y,
        right: x + vw - this.origin.x,
        bottom: y + vh - this.origin.y,
        left: this.origin.x - x
      };
      var anglesRadius = []; //??????????????????????????????????????????origin??????????????????????????????

      var quadrantLines = [["right", "bottom"], ["bottom", "left"], ["left", "top"], ["top", "right"]];

      _.each(angles, function (angle) {
        //????????????angle???????????????????????????
        angle = angle % 360;
        var quadrant = parseInt(angle / 90); //??????angle?????????????????????????????????????????????????????????

        var lines = quadrantLines[quadrant];

        if (angle % 90 == 0) {
          //?????????4??????????????????????????????????????????????????????????????????
          lines = [["right", "bottom", "left", "top"][quadrant]];
        }

        var _sin = Math.sin(angle * Math.PI / 180);

        if (angle == 180) {
          _sin = 0;
        }

        var _cos = Math.cos(angle * Math.PI / 180);

        if (angle == 270 || angle == 90) {
          _cos = 0;
        }

        _.each(lines, function (line) {
          var _r;

          if (line == "top" || line == "bottom") {
            //????????????????????????
            if (_sin) {
              // !_sin???????????????????????????????????????????????????
              _r = Math.abs(distanceToLine[line] / _sin);
            }
          }

          if (line == "right" || line == "left") {
            //?????????????????????
            if (_cos) {
              // !_sin???????????????????????????????????????????????????
              _r = Math.abs(distanceToLine[line] / _cos);
            }
          }
          anglesRadius.push(_r);
        });
      });

      _r = _.min(anglesRadius); //};
      //?????????label?????????????????????label??????????????????20?????????20????????????????????????

      if (this.aAxis.label.enabled) {
        _r -= 20;
      }
      this.radius = _r;
    }
  }, {
    key: "getMaxDisToViewOfOrigin",
    value: function getMaxDisToViewOfOrigin() {
      var origin = this.origin;
      var _r = 0;
      var _padding = this.app.padding;
      var rootWidth = this.app.width;
      var rootHeight = this.app.height;
      var vw = rootWidth - _padding.left - _padding.right;
      var vh = rootHeight - _padding.top - _padding.bottom;
      var _distances = [origin.x - _padding.left, //?????????left?????????
      vw + _padding.left - origin.x, //????????????????????????
      origin.y - _padding.top, vh + _padding.top - origin.y];
      _r = _.max(_distances);
      return _r;
    } //???????????????????????????????????????????????????
    //[ [{point , radian} , {point , radian}] ... ]

  }, {
    key: "getRadiansAtR",
    value: function getRadiansAtR(r, width, height) {
      var me = this;

      if (width == undefined) {
        width = this.width;
      }

      if (height == undefined) {
        height = this.height;
      }
      var _rs = []; //if( r > maxRadius ){
      //    return [];
      //} else {
      //??????????????????????????????origin???????????????????????????
      //?????????4????????????

      var _padding = this.app.padding; //??????origin ????????????width???height???????????????????????????
      //???this.origin ???????????????????????????

      var origin = {
        x: this.origin.x - _padding.left - (this.width - width) / 2,
        y: this.origin.y - _padding.top - (this.height - height) / 2
      };
      var x, y; //????????????????????????
      //?????????????????????

      var distanceT = origin.y;

      if (distanceT < r) {
        x = Math.sqrt(Math.pow(r, 2) - Math.pow(distanceT, 2));
        _rs = _rs.concat(this._filterPointsInRect([{
          x: -x,
          y: -distanceT
        }, {
          x: x,
          y: -distanceT
        }], origin, width, height));
      }
      //?????????????????????

      var distanceR = width - origin.x;

      if (distanceR < r) {
        y = Math.sqrt(Math.pow(r, 2) - Math.pow(distanceR, 2));
        _rs = _rs.concat(this._filterPointsInRect([{
          x: distanceR,
          y: -y
        }, {
          x: distanceR,
          y: y
        }], origin, width, height));
      }
      //?????????????????????

      var distanceB = height - origin.y;

      if (distanceB < r) {
        x = Math.sqrt(Math.pow(r, 2) - Math.pow(distanceB, 2));
        _rs = _rs.concat(this._filterPointsInRect([{
          x: x,
          y: distanceB
        }, {
          x: -x,
          y: distanceB
        }], origin, width, height));
      }
      //?????????????????????

      var distanceL = origin.x;

      if (distanceL < r) {
        y = Math.sqrt(Math.pow(r, 2) - Math.pow(distanceL, 2));
        _rs = _rs.concat(this._filterPointsInRect([{
          x: -distanceL,
          y: y
        }, {
          x: -distanceL,
          y: -y
        }], origin, width, height));
      }
      var arcs = []; //[ [{point , radian} , {point , radian}] ... ]
      //???????????????????????????????????????

      if (_rs.length == 0) {
        //???????????????????????????
        //[ [0 , 2*Math.PI] ];
        arcs.push([{
          point: {
            x: r,
            y: 0
          },
          radian: 0
        }, {
          point: {
            x: r,
            y: 0
          },
          radian: Math.PI * 2
        }]);
      } else {
        //????????????
        _.each(_rs, function (point, i) {
          var nextInd = i == _rs.length - 1 ? 0 : i + 1;

          var nextPoint = _rs.slice(nextInd, nextInd + 1)[0];

          arcs.push([{
            point: point,
            radian: me.getRadianInPoint(point)
          }, {
            point: nextPoint,
            radian: me.getRadianInPoint(nextPoint)
          }]);
        });
      }

      for (var i = 0, l = arcs.length; i < l; i++) {
        if (!this._checkArcInRect(arcs[i], r, origin, width, height)) {
          arcs.splice(i, 1);
          i--, l--;
        }
      }
      return arcs; //}
    }
  }, {
    key: "_filterPointsInRect",
    value: function _filterPointsInRect(points, origin, width, height) {
      for (var i = 0, l = points.length; i < l; i++) {
        if (!this._checkPointInRect(points[i], origin, width, height)) {
          //????????????root rect??????????????????
          points.splice(i, 1);
          i--, l--;
        }
      }
      return points;
    }
  }, {
    key: "_checkPointInRect",
    value: function _checkPointInRect(p, origin, width, height) {
      var _tansRoot = {
        x: p.x + origin.x,
        y: p.y + origin.y
      };
      return !(_tansRoot.x < 0 || _tansRoot.x > width || _tansRoot.y < 0 || _tansRoot.y > height);
    } //?????????n??????????????????????????????????????????rect???

  }, {
    key: "_checkArcInRect",
    value: function _checkArcInRect(arc, r, origin, width, height) {
      var start = arc[0];
      var to = arc[1];
      var differenceR = to.radian - start.radian;

      if (to.radian < start.radian) {
        differenceR = Math.PI * 2 + to.radian - start.radian;
      }
      var middleR = (start.radian + differenceR / 2) % (Math.PI * 2);
      return this._checkPointInRect(this.getPointInRadianOfR(middleR, r), origin, width, height);
    } //???????????????????????????????????????

  }, {
    key: "getRadianInPoint",
    value: function getRadianInPoint(point) {
      var pi2 = Math.PI * 2;
      return (Math.atan2(point.y, point.x) + pi2) % pi2;
    } //????????????????????????????????????r????????????point???????????????

  }, {
    key: "getPointInRadianOfR",
    value: function getPointInRadianOfR(radian, r) {
      var pi = Math.PI;
      var x = Math.cos(radian) * r;

      if (radian == pi / 2 || radian == pi * 3 / 2) {
        //90?????????270????????????
        x = 0;
      }
      var y = Math.sin(radian) * r;

      if (radian % pi == 0) {
        y = 0;
      }
      return {
        x: x,
        y: y
      };
    } //????????????num???dataSectio??????????????????

  }, {
    key: "getROfNum",
    value: function getROfNum(num) {
      var r = 0;

      var maxNum = _.max(this.rAxis.dataSection);

      var minNum = 0; //let _r = parseInt( Math.min( this.width, this.height ) / 2 );

      var _r = this.radius;
      r = _r * ((num - minNum) / (maxNum - minNum));
      return r;
    } //?????????r?????????????????????aAxis???points

  }, {
    key: "getPointsOfR",
    value: function getPointsOfR(r) {
      var me = this;
      var points = [];

      _.each(me.aAxis.angleList, function (_a) {
        //??????
        var _r = Math.PI * _a / 180;

        var point = me.getPointInRadianOfR(_r, r);
        points.push(point);
      });

      return points;
    }
  }, {
    key: "_setAAxisAngleList",
    value: function _setAAxisAngleList() {
      var me = this;
      me.aAxis.angleList = [];
      var aAxisArr = this.aAxis.data;

      if (this.aAxis.layoutType == "proportion") {
        aAxisArr = [];

        for (var i = 0, l = this.aAxis.data.length; i < l; i++) {
          aAxisArr.push(i);
        }
      }
      var allAngle = this.allAngle;
      var min = 0;

      var max = _.max(aAxisArr);

      if (this.aAxis.layoutType == "proportion") {
        max++;
      }

      _.each(aAxisArr, function (p) {
        //??????
        var _a = (allAngle * ((p - min) / (max - min)) + me.aAxis.beginAngle + allAngle) % allAngle;

        me.aAxis.angleList.push(_a);
      });
    }
  }, {
    key: "_drawAAxis",
    value: function _drawAAxis() {
      //??????aAxis?????????
      var me = this;
      var r = me.getROfNum(_.max(this.rAxis.dataSection));
      var points = me.getPointsOfR(r + 3);
      me._aAxisScaleSp.context.x = this.origin.x;
      me._aAxisScaleSp.context.y = this.origin.y;

      _.each(this.aAxis.data, function (value, i) {
        var point = points[i];
        var text = _.isFunction(me.aAxis.label.format) ? me.aAxis.label.format(value) : value;
        var nodeData = {
          value: value,
          text: text,
          iNode: i,
          field: me.aAxis.field
        };

        var _enabled = me._getProp(me.aAxis.label.enabled, nodeData);

        if (!_enabled) return;
        var c = {
          x: point.x,
          y: point.y,
          fillStyle: me._getProp(me.aAxis.label.fontColor, nodeData)
        };

        _.extend(c, me._getTextAlignForPoint(Math.atan2(point.y, point.x)));

        me._aAxisScaleSp.addChild(new _canvax$$1["default"].Display.Text(text, {
          context: c
        }));

        me.aAxis.layoutData.push(text);
      });
    }
    /**
     *???????????????4????????????-90 --> 0 , 0-->90 , 90-->180, -180-->-90
     **/

  }, {
    key: "_getTextAlignForPoint",
    value: function _getTextAlignForPoint(r) {
      var textAlign = "center";
      var textBaseline = "bottom";
      /* ???????????????????????????
      if(r==-Math.PI/2){
          return {
              textAlign    : "center",
              textBaseline : "bottom"
          }
      }
      */

      if (r > -Math.PI / 2 && r < 0) {
        textAlign = "left";
        textBaseline = "bottom";
      }

      if (r == 0) {
        textAlign = "left";
        textBaseline = "middle";
      }

      if (r > 0 && r < Math.PI / 2) {
        textAlign = "left";
        textBaseline = "top";
      }

      if (r == Math.PI / 2) {
        textAlign = "center";
        textBaseline = "top";
      }

      if (r > Math.PI / 2 && r < Math.PI) {
        textAlign = "right";
        textBaseline = "top";
      }

      if (r == Math.PI || r == -Math.PI) {
        textAlign = "right";
        textBaseline = "middle";
      }

      if (r > -Math.PI && r < -Math.PI / 2) {
        textAlign = "right";
        textBaseline = "bottom";
      }

      return {
        textAlign: textAlign,
        textBaseline: textBaseline
      };
    }
  }, {
    key: "getAxisNodeOf",
    value: function getAxisNodeOf(e) {
      var me = this;
      var aAxisInd = me.getAAxisIndOf(e);

      if (aAxisInd === undefined) {
        return;
      }

      var node = {
        ind: aAxisInd,
        value: me.aAxis.data[aAxisInd],
        text: me.aAxis.layoutData[aAxisInd],
        angle: me.aAxis.angleList[aAxisInd]
      };
      return node;
    } //???event?????????????????????e.point??????origin???index???????????????

  }, {
    key: "getAAxisIndOf",
    value: function getAAxisIndOf(e) {
      var me = this;

      if (e.aAxisInd !== undefined) {
        return e.aAxisInd;
      }

      if (!me.aAxis.angleList.length) {
        return;
      }
      var point = e.point; //angle??????????????????0-360?????????

      var angle = (me.getRadianInPoint(point) * 180 / Math.PI - me.aAxis.beginAngle) % me.allAngle; //let r = Math.sqrt( Math.pow( point.x, 2 ) + Math.pow( point.y, 2 ) );

      var aAxisInd = 0;
      var aLen = me.aAxis.angleList.length;

      _.each(me.aAxis.angleList, function (_a, i) {
        _a = (_a - me.aAxis.beginAngle) % me.allAngle;
        var nextInd = i + 1;
        var nextAngle = (me.aAxis.angleList[nextInd] - me.aAxis.beginAngle) % me.allAngle;

        if (i == aLen - 1) {
          nextInd = 0;
          nextAngle = me.allAngle;
        }

        if (angle >= _a && angle <= nextAngle) {
          //??????????????????angle??????
          if (angle - _a < nextAngle - angle) {
            aAxisInd = i;
          } else {
            aAxisInd = nextInd;
          }

          return false;
        }
      });

      return aAxisInd;
    }
  }, {
    key: "_initInduce",
    value: function _initInduce() {
      var me = this;
      me.induce = this._grid.induce;
      me.induce && me.induce.on(event.types.get(), function (e) {
        me.fire(e.type, e); //???????????????????????????Tips

        me.app.fire(e.type, e);
      });
    }
  }, {
    key: "getTipsInfoHandler",
    value: function getTipsInfoHandler(e) {
      //???????????????xAxis???????????????;
      var me = this;
      var aNode = me.getAxisNodeOf(e);
      var obj = {
        //aAxis : aNode,
        //title : aNode.label,
        //iNode : aNode.ind,
        nodes: [//??????_graphs ????????????
        ]
      };

      if (aNode) {
        obj.aAxis = aNode;
        obj.title = aNode.text;
        obj.iNode = aNode.ind;
      }

      if (e.eventInfo) {
        obj = _.extend(obj, e.eventInfo);
      }
      return obj;
    } //TODO?????????

  }, {
    key: "getPoint",
    value: function getPoint() {}
  }, {
    key: "getSizeAndOrigin",
    value: function getSizeAndOrigin() {}
  }, {
    key: "_getProp",
    value: function _getProp(p, nodeData, def) {
      var res = p;

      if (_.isFunction(p)) {
        res = p.apply(this, [nodeData]);
      }

      if (!res && def) {
        res = def;
      }

      return res;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        allAngle: {
          detail: '??????????????????',
          documentation: "",
          "default": 360,
          values: [0, 360]
        },
        startAngle: {
          detail: '?????????????????????',
          documentation: "",
          "default": 0,
          values: [0, 360]
        },
        radius: {
          detail: '????????????????????????',
          documentation: "??????????????????view??????????????????squareRange==true????????????Math.min(width,height)",
          "default": 'auto',
          values: null
        },
        aAxis: {
          detail: '?????????',
          documentation: "???????????????????????????x???",
          propertys: {
            data: [],
            angleList: [],
            //??????layoutType????????????list
            layoutData: [],
            //aAxis.data??? label.format?????????
            field: {
              detail: '????????????',
              documentation: "",
              "default": ''
            },
            layoutType: {
              detail: '????????????',
              documentation: "",
              "default": 'proportion'
            },
            beginAngle: {
              detail: '????????????',
              documentation: "",
              "default": -90
            },
            enabled: {
              detail: '????????????',
              documentation: "",
              "default": false
            },
            label: {
              detail: '????????????',
              documentation: '',
              propertys: {
                enabled: {
                  detail: '????????????',
                  documentation: "",
                  "default": true
                },
                format: {
                  detail: 'label????????????????????????',
                  documentation: "",
                  "default": null
                },
                fontColor: {
                  detail: 'label??????',
                  documentation: '',
                  "default": "#666"
                }
              }
            }
          }
        },
        rAxis: {
          detail: '???????????????',
          documentation: '???????????????????????????y?????????',
          propertys: {
            field: {
              detail: '????????????',
              documentation: "",
              "default": ''
            },
            dataSection: {
              detail: '??????????????????',
              documentation: "??????????????????????????????????????????????????????????????????",
              "default": false
            },
            enabled: {
              detail: '????????????',
              documentation: "",
              "default": false
            }
          }
        }
      };
    }
  }]);
  return Polar;
}(_index["default"]);

_index["default"].registerComponent(Polar, 'coord', 'polar');

var _default = Polar;
exports["default"] = _default;
});

unwrapExports(polar);

var axis_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);



var _dataSection2 = interopRequireDefault(dataSection_1);



//TODO ?????????get xxx OfVal ??????proportion??????????????????????????????????????????????????????
var axis = /*#__PURE__*/function () {
  function axis(opt, dataOrg) {
    (0, _classCallCheck2["default"])(this, axis);
    //?????????
    //???????????????????????????????????????????????????????????????????????????dataFrame??????
    // [ 
    //    [   
    //        [1,2,3],  
    //        [1,2,3]    //???????????????????????????????????????proportion???axis???????????????????????????
    //    ] 
    //   ,[    
    //        [1,2,3] 
    //    ]   
    // ]
    this._opt = _canvax._.clone(opt);
    this.dataOrg = dataOrg || [];
    this._dataSectionLayout = []; //???dataSection??????????????????????????????pos???//get xxx OfPos??????????????????????????????????????????

    this._cellCount = null;
    this._cellLength = null; //??????????????????????????????
    //????????? _dataSectionGroup = [ dataSection ], dataSection ???????????? _dataSectionGroup ????????????????????????

    this._dataSectionGroup = [];
    this.originPos = 0; //value??? origin ?????????pos??????

    this._originTrans = 0; //???????????? origin ???datasection???min??????????????????
    //min,max?????????????????????????????????

    this._min = null;
    this._max = null;

    _canvax._.extend(true, this, (0, tools.getDefaultProps)(axis.defaultProps()), opt);
  }

  (0, _createClass2["default"])(axis, [{
    key: "resetDataOrg",
    value: function resetDataOrg(dataOrg) {
      //?????????????????????
      this.dataSection = [];
      this._dataSectionGroup = [];
      this.dataOrg = dataOrg;
      this._cellCount = null;
      this._cellLength = null;
    }
  }, {
    key: "setAxisLength",
    value: function setAxisLength(length) {
      this.axisLength = length;
      this.calculateProps();
    }
  }, {
    key: "calculateProps",
    value: function calculateProps() {
      var me = this;

      if (this.layoutType == "proportion") {
        if (this._min == null) {
          this._min = _canvax._.min(this.dataSection);
        }

        if (this._max == null) {
          this._max = _canvax._.max(this.dataSection);
        }
        //?????????????????????origin????????????????????????????????????

        if (!("origin" in this._opt)) {
          this.origin = 0; //this.dataSection[0];//_.min( this.dataSection );

          if (_canvax._.max(this.dataSection) < 0) {
            this.origin = _canvax._.max(this.dataSection);
          }

          if (_canvax._.min(this.dataSection) > 0) {
            this.origin = _canvax._.min(this.dataSection);
          }
        }
        this._originTrans = this._getOriginTrans(this.origin);
        this.originPos = this.getPosOfVal(this.origin);
      }

      this._dataSectionLayout = [];

      _canvax._.each(this.dataSection, function (val, i) {
        var ind = i;

        if (me.layoutType == "proportion") {
          ind = me.getIndexOfVal(val);
        }
        var pos = parseInt(me.getPosOf({
          ind: i,
          val: val
        }), 10);

        me._dataSectionLayout.push({
          val: val,
          ind: ind,
          pos: pos
        });
      });
    }
  }, {
    key: "getDataSection",
    value: function getDataSection() {
      //???????????????dataSection
      return this.dataSection;
    }
  }, {
    key: "setDataSection",
    value: function setDataSection(_dataSection) {
      var me = this; //????????????????????????dataSection??????????????????????????????????????????????????????????????????dataSection

      if (_canvax._.isEmpty(_dataSection) && _canvax._.isEmpty(this._opt.dataSection)) {
        if (this.layoutType == "proportion") {
          var arr = this._getDataSection();

          if ("origin" in me._opt) {
            arr.push(me._opt.origin);
          }

          if (arr.length == 1) {
            arr.push(arr[0] * .5);
          }

          if (this.waterLine) {
            arr.push(this.waterLine);
          }

          if (this.symmetric) {
            //?????????????????????????????????
            var _min = _canvax._.min(arr);

            var _max = _canvax._.max(arr);

            if (Math.abs(_min) > Math.abs(_max)) {
              arr.push(Math.abs(_min));
            } else {
              arr.push(-Math.abs(_max));
            }
          }

          for (var ai = 0, al = arr.length; ai < al; ai++) {
            arr[ai] = Number(arr[ai]);

            if (isNaN(arr[ai])) {
              arr.splice(ai, 1);
              ai--;
              al--;
            }
          }

          if (_canvax._.isFunction(this.sectionHandler)) {
            this.dataSection = this.sectionHandler(arr);
          }

          if (!this.dataSection || !this.dataSection.length) {
            this.dataSection = _dataSection2["default"].section(arr, 3);
          }

          if (this.symmetric) {
            //????????????????????????????????? ????????????????????????
            var _min2 = _canvax._.min(this.dataSection);

            var _max2 = _canvax._.max(this.dataSection);

            if (Math.abs(_min2) > Math.abs(_max2)) {
              this.dataSection.push(Math.abs(_min2));
            } else {
              this.dataSection.unshift(-Math.abs(_max2));
            }
          }

          if (this.dataSection.length == 0) {
            this.dataSection = [0];
          }

          this._dataSectionGroup = [_canvax._.clone(this.dataSection)];

          this._middleweight(); //?????????middleweight?????????????????????????????????????????????datasection


          this._sort();
        } else {
          //???proportion ????????? rule peak ????????????
          this.dataSection = _canvax._.flatten(this.dataOrg); //this._getDataSection();

          this._dataSectionGroup = [this.dataSection];
        }
      } else {
        this.dataSection = _dataSection || this._opt.dataSection;
        this._dataSectionGroup = [this.dataSection];
      }

      this._middleWeightPos();
    }
  }, {
    key: "_getDataSection",
    value: function _getDataSection() {
      //????????????????????????[ ["uv","pv"], "ppc" ]
      //???????????? this.dataOrg??? ????????????????????????
      //vLen????????????2
      var vLen = 1;

      _canvax._.each(this.dataOrg, function (arr) {
        vLen = Math.max(arr.length, vLen);
      });

      if (vLen == 1) {
        return this._oneDimensional();
      }

      if (vLen > 1) {
        return this._twoDimensional();
      }
    }
  }, {
    key: "_oneDimensional",
    value: function _oneDimensional() {
      var arr = _canvax._.flatten(this.dataOrg); //_.flatten( data.org );


      for (var i = 0, il = arr.length; i < il; i++) {
        arr[i] = arr[i] || 0;
      }
      return arr;
    } //?????????yAxis????????????????????????????????????????????????????????????????????????????????? ???????????????

  }, {
    key: "_twoDimensional",
    value: function _twoDimensional() {
      var d = this.dataOrg;
      var arr = [];
      var min;

      _canvax._.each(d, function (d) {
        if (!d.length) {
          return;
        }

        if (!_canvax._.isArray(d[0])) {
          arr.push(d);
          return;
        }
        var varr = [];
        var len = d[0].length;
        var vLen = d.length;

        for (var i = 0; i < len; i++) {
          var up_count = 0;
          var up_i = 0;
          var down_count = 0;
          var down_i = 0;

          for (var ii = 0; ii < vLen; ii++) {
            var _val = d[ii][i];

            if (!_val && _val !== 0) {
              continue;
            }
            min == undefined && (min = _val);
            min = Math.min(min, _val);

            if (_val >= 0) {
              up_count += _val;
              up_i++;
            } else {
              down_count += _val;
              down_i++;
            }
          }

          up_i && varr.push(up_count);
          down_i && varr.push(down_count);
        }
        arr.push(varr);
      });

      arr.push(min);
      return _canvax._.flatten(arr);
    } //val ??????push???datasection ????????? ???
    //???????????????markline???????????????????????????y????????????yaxis?????????

  }, {
    key: "setWaterLine",
    value: function setWaterLine(val) {
      if (val <= this.waterLine) return;
      this.waterLine = val;

      if (val < _canvax._.min(this.dataSection) || val > _canvax._.max(this.dataSection)) {
        //waterLine????????????section???????????????????????????????????????datasection    
        this.setDataSection();
        this.calculateProps();
      }
    }
  }, {
    key: "_sort",
    value: function _sort() {
      if (this.sort) {
        var sort = this._getSortType();

        if (sort == "desc") {
          this.dataSection.reverse(); //_dataSectionGroup ????????????????????????????????? reverse??? ???????????????????????? dataSection.reverse()

          _canvax._.each(this._dataSectionGroup, function (dsg) {
            dsg.reverse();
          });

          this._dataSectionGroup.reverse(); //_dataSectionGroup reverse end

        }
      }
    }
  }, {
    key: "_getSortType",
    value: function _getSortType() {
      var _sort;

      if (_canvax._.isString(this.sort)) {
        _sort = this.sort;
      }

      if (!_sort) {
        _sort = "asc";
      }

      return _sort;
    }
  }, {
    key: "_middleweight",
    value: function _middleweight() {
      if (this.middleWeight) {
        //???????????????????????????
        if (!_canvax._.isArray(this.middleWeight)) {
          this.middleWeight = [this.middleWeight];
        }

        var dMin = _canvax._.min(this.dataSection);

        var dMax = _canvax._.max(this.dataSection);

        var newDS = [dMin];
        var newDSG = [];

        for (var i = 0, l = this.middleWeight.length; i < l; i++) {
          var preMiddleweight = dMin;

          if (i > 0) {
            preMiddleweight = this.middleWeight[i - 1];
          }
          var middleVal = preMiddleweight + parseInt((this.middleWeight[i] - preMiddleweight) / 2);
          newDS.push(middleVal);
          newDS.push(this.middleWeight[i]);
          newDSG.push([preMiddleweight, middleVal, this.middleWeight[i]]);
        }
        var lastMW = this.middleWeight.slice(-1)[0];

        if (dMax > lastMW) {
          newDS.push(lastMW + (dMax - lastMW) / 2);
          newDS.push(dMax);
          newDSG.push([lastMW, lastMW + (dMax - lastMW) / 2, dMax]);
        } //????????? ??????????????????????????????????????????????????? dataSection


        this.dataSection = newDS;
        this._dataSectionGroup = newDSG;
      }
    }
  }, {
    key: "_middleWeightPos",
    value: function _middleWeightPos() {
      var me = this;

      if (this.middleWeightPos) {
        if (!_canvax._.isArray(this.middleWeightPos)) {
          this.middleWeightPos = [this.middleWeightPos];
        }
        //????????????1??????????????????????????????

        var _count = 0;

        _canvax._.each(this.middleWeightPos, function (pos) {
          _count += pos;
        });

        if (_count < 1) {
          this.middleWeightPos.push(1 - _count);
        }

        if (_count > 1) {
          this.middleWeightPos = null;
        }
      }

      if (this.middleWeight) {
        if (!this.middleWeightPos) {
          this.middleWeightPos = [];
          var _prePos = 0;

          _canvax._.each(this.middleWeight, function () {
            var _pos = 1 / (me.middleWeight.length + 1);

            _prePos += _pos;
            me.middleWeightPos.push(_pos);
          });

          this.middleWeightPos.push(1 - _prePos);
        }
      } else {
        this.middleWeightPos = [1];
      }
    } //origin ?????? this.origin ??????

  }, {
    key: "_getOriginTrans",
    value: function _getOriginTrans(origin) {
      var _this = this;

      var pos = 0;
      var me = this;
      var dsgLen = this._dataSectionGroup.length;
      var groupLength = this.axisLength / dsgLen;

      var _loop = function _loop(i, l) {
        var ds = _this._dataSectionGroup[i];
        groupLength = _this.axisLength * _this.middleWeightPos[i];
        var preGroupLenth = 0;

        _canvax._.each(_this.middleWeightPos, function (mp, mi) {
          if (mi < i) {
            preGroupLenth += me.axisLength * mp;
          }
        });

        if (_this.layoutType == "proportion") {
          var min = _canvax._.min(ds);

          var max = _canvax._.max(ds);

          var amountABS = Math.abs(max - min);

          if (origin >= min && origin <= max) {
            pos = (origin - min) / amountABS * groupLength + preGroupLenth;
            return "break";
          }
        }
      };

      for (var i = 0, l = dsgLen; i < l; i++) {
        var _ret = _loop(i, l);

        if (_ret === "break") break;
      }

      if (this.sort == "desc") {
        //??????????????????
        pos = -(groupLength - pos);
      }
      return parseInt(pos);
    } //opt { val ind pos } ?????????????????????

  }, {
    key: "_getLayoutDataOf",
    value: function _getLayoutDataOf(opt) {
      var props = ["val", "ind", "pos"];
      var prop;

      _canvax._.each(props, function (_p) {
        if (_p in opt) {
          prop = _p;
        }
      });

      var layoutData;

      _canvax._.each(this._dataSectionLayout, function (item) {
        if (item[prop] === opt[prop]) {
          layoutData = item;
        }
      });

      return layoutData || {};
    }
  }, {
    key: "getPosOfVal",
    value: function getPosOfVal(val) {
      /* val??????????????????so ???????????????????????????????????????
      //???????????? _dataSectionLayout ???????????????????????????
      let _pos = this._getLayoutDataOf({ val : val }).pos;
      if( _pos != undefined ){
          return _pos;
      };
      */
      return this.getPosOf({
        val: val
      });
    }
  }, {
    key: "getPosOfInd",
    value: function getPosOfInd(ind) {
      //???????????? _dataSectionLayout ???????????????????????????
      var _pos = this._getLayoutDataOf({
        ind: ind
      }).pos;

      if (_pos != undefined) {
        return _pos;
      }
      return this.getPosOf({
        ind: ind
      });
    } //opt {val, ind} val ??????ind ???????????????

  }, {
    key: "getPosOf",
    value: function getPosOf(opt) {
      var _this2 = this;

      var me = this;
      var pos;

      var cellCount = this._getCellCount(); //dataOrg???????????????????????????????????????????????????????????????


      if (this.layoutType == "proportion") {
        var dsgLen = this._dataSectionGroup.length;

        var _loop2 = function _loop2(i, l) {
          var ds = _this2._dataSectionGroup[i];
          var groupLength = _this2.axisLength * _this2.middleWeightPos[i];
          var preGroupLenth = 0;

          _canvax._.each(_this2.middleWeightPos, function (mp, mi) {
            if (mi < i) {
              preGroupLenth += me.axisLength * mp;
            }
          });

          var min = _canvax._.min(ds);

          var max = _canvax._.max(ds);

          var val = "val" in opt ? opt.val : _this2.getValOfInd(opt.ind);

          if (val >= min && val <= max) {
            var _origin = _this2.origin;
            var origiInRange = !(_origin < min || _origin > max); //?????? origin ?????????????????????

            if (!origiInRange) {
              _origin = min;
            }

            var maxGroupDisABS = Math.max(Math.abs(max - _origin), Math.abs(_origin - min));
            var amountABS = Math.abs(max - min);
            var originPos = maxGroupDisABS / amountABS * groupLength;
            pos = (val - _origin) / maxGroupDisABS * originPos + preGroupLenth;

            if (isNaN(pos)) {
              pos = parseInt(preGroupLenth);
            }

            if (origiInRange) {
              //origin???????????????????????????????????????_originTrans
              pos += _this2._originTrans;
            }
            return "break";
          }
        };

        for (var i = 0, l = dsgLen; i < l; i++) {
          var _ret2 = _loop2(i, l);

          if (_ret2 === "break") break;
        }
      } else {
        if (cellCount == 1) {
          //?????????????????????????????????????????????????????????
          pos = this.axisLength / 2;
        } else {
          //TODO ????????????proportion????????????????????????opt.ind ??????getIndexOfVal ????????????????????????
          //??????????????????????????????val??????
          var valInd = "ind" in opt ? opt.ind : this.getIndexOfVal(opt.val);

          if (valInd != -1) {
            if (this.layoutType == "rule") {
              //line ???xaxis?????? rule
              pos = valInd / (cellCount - 1) * this.axisLength;
            }

            if (this.layoutType == "peak") {
              //bar???xaxis?????? peak

              /*
              pos = (this.axisLength/cellCount) 
                    * (valInd+1) 
                    - (this.axisLength/cellCount)/2;
              */
              var _cellLength = this.getCellLength();

              pos = _cellLength * (valInd + 1) - _cellLength / 2;
            }
          }
        }
      }
      !pos && (pos = 0);
      pos = Number(pos.toFixed(1));
      return Math.abs(pos);
    }
  }, {
    key: "getValOfPos",
    value: function getValOfPos(pos) {
      //???????????? _dataSectionLayout ???????????????????????????
      var _val = this._getLayoutDataOf({
        pos: pos
      }).val;

      if (_val != undefined) {
        return _val;
      }
      return this._getValOfInd(this.getIndexOfPos(pos));
    } //ds??????

  }, {
    key: "getValOfInd",
    value: function getValOfInd(ind) {
      //???????????? _dataSectionLayout ???????????????????????????
      var _val = this._getLayoutDataOf({
        ind: ind
      }).val;

      if (_val != undefined) {
        return _val;
      }
      return this._getValOfInd(ind);
      /*
      if (this.layoutType == "proportion") {
      
      } else {
          //?????????index??????????????????dataOrg?????????
          let org = ds ? ds : _.flatten(this.dataOrg);
          return org[ind];
      };
      */
    } //?????????ind

  }, {
    key: "_getValOfInd",
    value: function _getValOfInd(ind) {
      var me = this;

      var org = _canvax._.flatten(this.dataOrg);

      var val;

      if (this.layoutType == "proportion") {
        //let dsgLen = this._dataSectionGroup.length;
        //let groupLength = this.axisLength / dsgLen;
        _canvax._.each(this._dataSectionGroup, function (ds, i) {
          var groupLength = me.axisLength * me.middleWeightPos[i];
          var preGroupLenth = 0;

          _canvax._.each(me.middleWeightPos, function (mp, mi) {
            if (mi < i) {
              preGroupLenth += me.axisLength * mp;
            }
          });

          if (parseInt(ind / groupLength) == i || i == me._dataSectionGroup.length - 1) {
            var min = _canvax._.min(ds);

            var max = _canvax._.max(ds);

            val = min + (max - min) / groupLength * (ind - preGroupLenth);
            return false;
          }
        });
      } else {
        val = org[ind];
      }
      return val;
    }
  }, {
    key: "getIndexOfPos",
    value: function getIndexOfPos(pos) {
      //???????????? _dataSectionLayout ???????????????????????????
      var _ind = this._getLayoutDataOf({
        pos: pos
      }).ind;

      if (_ind != undefined) {
        return _ind;
      }
      var ind = 0;
      var cellLength = this.getCellLengthOfPos(pos);

      var cellCount = this._getCellCount();

      if (this.layoutType == "proportion") {
        //proportion??????index?????????????????? ?????????????????????????????????index
        return pos;
      } else {
        if (this.layoutType == "peak") {
          ind = parseInt(pos / cellLength);

          if (ind == cellCount) {
            ind = cellCount - 1;
          }
        }

        if (this.layoutType == "rule") {
          ind = parseInt((pos + cellLength / 2) / cellLength);

          if (cellCount == 1) {
            //????????????????????????
            ind = 0;
          }
        }
      }
      return ind;
    }
  }, {
    key: "getIndexOfVal",
    value: function getIndexOfVal(val) {
      var valInd = -1;

      if (this.layoutType == "proportion") {
        //???????????? _dataSectionLayout ???????????????????????????
        var _ind = this._getLayoutDataOf({
          val: val
        }).ind;

        if (_ind != undefined) {
          return _ind;
        }
        //?????????????????????pos

        valInd = this.getPosOfVal(val);
      } else {
        _canvax._.each(this.dataOrg, function (arr) {
          _canvax._.each(arr, function (list) {
            var _ind = _canvax._.indexOf(list, val);

            if (_ind != -1) {
              valInd = _ind;
            }
          });
        });
      }

      return valInd;
    }
  }, {
    key: "getCellLength",
    value: function getCellLength() {
      if (this._cellLength !== null) {
        return this._cellLength;
      }

      var axisLength = this.axisLength;
      var cellLength = axisLength;

      var cellCount = this._getCellCount();

      if (cellCount) {
        if (this.layoutType == "proportion") {
          cellLength = 1;
        } else {
          //???????????? peak ??????????????????????????????????????????
          cellLength = axisLength / cellCount;

          if (this.layoutType == "rule") {
            if (cellCount == 1) {
              cellLength = axisLength / 2;
            } else {
              cellLength = axisLength / (cellCount - 1);
            }
          }

          if (this.posParseToInt) {
            cellLength = parseInt(cellLength);
          }
        }
      }
      this._cellLength = cellLength;
      return cellLength;
    } //??????getCellLengthOfPos??????????????????tips????????????tips?????????x??????

  }, {
    key: "getCellLengthOfPos",
    value: function getCellLengthOfPos() {
      return this.getCellLength();
    } //pos??????????????????????????????????????????????????????

  }, {
    key: "getCellLengthOfInd",
    value: function getCellLengthOfInd() {
      return this.getCellLength();
    }
  }, {
    key: "_getCellCount",
    value: function _getCellCount() {
      if (this._cellCount !== null) {
        return this._cellCount;
      }

      var cellCount = 0;

      if (this.layoutType == "proportion") {
        cellCount = this.axisLength;
      } else {
        if (this.dataOrg.length && this.dataOrg[0].length && this.dataOrg[0][0].length) {
          cellCount = this.dataOrg[0][0].length;
        }
      }
      this._cellCount = cellCount;
      return cellCount;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        layoutType: {
          detail: '????????????',
          "default": 'proportion'
        },
        axisLength: {
          detail: '?????????',
          "default": 1
        },
        dataSection: {
          detail: '????????????',
          "default": []
        },
        sectionHandler: {
          detail: '?????????dataSection???????????????',
          "default": null
        },
        waterLine: {
          detail: '?????????',
          "default": null,
          documentation: '??????data??????????????? ?????? dataSection??? ???????????????waterLine??? dataSection????????????????????????????????????'
        },
        middleWeight: {
          detail: '???????????????',
          "default": null,
          documentation: '??????middleweight??????????????? _dataSectionGroup ??????middleweight???????????????n?????????>..[ [0,50 , 100],[100,500,1000] ]'
        },
        middleWeightPos: {
          detail: '??????????????????????????????????????????,?????? 0.5 ',
          "default": null
        },
        symmetric: {
          detail: '??????????????????',
          "default": false,
          documentation: 'proportion??????????????????????????????????????????????????????????????? [ 0,5,10 ] = > [ -10, 0 10 ]?????????????????????????????????'
        },
        origin: {
          detail: '???????????????',
          "default": null,
          documentation: '\
                    1???????????????????????????????????????????????????0 <br />\
                    2?????????dataSection???????????????0??????baseNumber????????????<br />\
                    3?????????dataSection???????????????0??????baseNumber????????????<br />\
                    4???????????????????????????2???3???????????????????????????0??????section???????????????0??????????????????\
                '
        },
        sort: {
          detail: '??????',
          "default": null
        },
        posParseToInt: {
          detail: '????????????????????????',
          "default": false,
          documentation: '???????????????????????????????????????????????????????????????1px??????????????????x???????????????????????????????????????'
        }
      };
    }
  }]);
  return axis;
}();

var _default = axis;
exports["default"] = _default;
});

unwrapExports(axis_1);

var axis$1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _axis = interopRequireDefault(axis_1);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Axis = /*#__PURE__*/function (_baseAxis) {
  (0, _inherits2["default"])(Axis, _baseAxis);

  var _super = _createSuper(Axis);

  function Axis(opt, dataOrg) {
    var _this;

    (0, _classCallCheck2["default"])(this, Axis);
    _this = _super.call(this, opt, dataOrg);

    _canvax._.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Axis.defaultProps()));

    return _this;
  }

  (0, _createClass2["default"])(Axis, [{
    key: "drawWaterLine",
    value: function drawWaterLine(y) {
      //??????y????????????????????????????????? ????????????????????????????????????
      if (this.layoutType == "proportion") {
        if (y >= this._min && y <= this._max) {
          return;
        }
      }
      this.dataSection = [];
      this.setWaterLine(y);

      this._initHandle();

      this.draw();
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        field: {
          detail: '???????????????',
          documentation: '??????x??????field??????????????????????????????????????????????????????x???',
          "default": []
        },
        layoutType: {
          detail: '????????????',
          "default": 'rule'
        },
        width: {
          detail: '??????',
          "default": 0
        },
        height: {
          detail: '??????',
          "default": 0
        },
        enabled: {
          detail: '???????????????',
          "default": true
        },
        animation: {
          detail: '??????????????????',
          "default": true
        },
        title: {
          detail: '?????????',
          propertys: {
            shapeType: "text",
            textAlign: {
              detail: '??????????????????',
              "default": 'center'
            },
            textBaseline: {
              detail: '??????????????????',
              "default": 'middle'
            },
            strokeStyle: {
              detail: '??????????????????',
              "default": null
            },
            lineHeight: {
              detail: '??????',
              "default": 0
            },
            text: {
              detail: '??????????????????',
              "default": ''
            },
            fontColor: {
              detail: '??????',
              "default": '#999'
            },
            fontSize: {
              detail: '????????????',
              "default": 12
            }
          }
        },
        tickLine: {
          detail: '?????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            lineWidth: {
              detail: '????????????',
              "default": 1
            },
            lineLength: {
              detail: '???????????????',
              "default": 4
            },
            distance: {
              detail: '??????????????????????????????',
              "default": 2
            },
            strokeStyle: {
              detail: '????????????',
              "default": '#cccccc'
            }
          }
        },
        axisLine: {
          detail: '????????????',
          propertys: {
            enabled: {
              detail: '???????????????',
              "default": true
            },
            position: {
              detail: '???????????????',
              documentation: 'default???align????????????left???right???????????? "center" ??? ????????????',
              "default": 'default'
            },
            lineWidth: {
              detail: '????????????',
              "default": 1
            },
            strokeStyle: {
              detail: '???????????????',
              "default": '#cccccc'
            }
          }
        },
        label: {
          detail: '????????????',
          propertys: {
            enabled: {
              detail: '????????????????????????',
              "default": true
            },
            fontColor: {
              detail: '????????????',
              "default": '#999'
            },
            fontSize: {
              detail: '????????????',
              "default": 12
            },
            rotation: {
              detail: '????????????',
              "default": 0
            },
            format: {
              detail: 'label??????????????????????????????',
              "default": null
            },
            distance: {
              detail: '????????????????????????',
              "default": 2
            },
            textAlign: {
              detail: '????????????????????????',
              "default": 'center'
            },
            lineHeight: {
              detail: '???????????????',
              "default": 1
            },
            evade: {
              detail: '????????????????????????,???????????????????????????',
              "default": true
            }
          }
        },
        filter: {
          detail: '????????????',
          documentation: '????????????????????????yaxis ??? ???????????????????????????????????????',
          "default": null
        },
        trimLayout: {
          detail: '??????????????????????????????',
          documentation: '???????????????????????? trimLayout ??????????????????visible???true??????????????????????????????????????????',
          "default": null
        }
      };
    }
  }]);
  return Axis;
}(_axis["default"]);

exports["default"] = Axis;
});

unwrapExports(axis$1);

var xaxis = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);



var _axis = interopRequireDefault(axis$1);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._;
var Line = _canvax$$1["default"].Shapes.Line;

var xAxis = /*#__PURE__*/function (_Axis) {
  (0, _inherits2["default"])(xAxis, _Axis);

  var _super = _createSuper(xAxis);

  function xAxis(opt, data, _coord) {
    var _this;

    (0, _classCallCheck2["default"])(this, xAxis);
    _this = _super.call(this, opt, data.org);
    _this.type = "xAxis";
    _this._coord = _coord || {};
    _this._title = null; //this.title?????????????????????

    _this._axisLine = null;
    _this._formatTextSection = []; //dataSection??????format?????????????????????

    _this._textElements = []; //_formatTextSection????????????????????????canvax.shape.Text??????

    _this.pos = {
      x: 0,
      y: 0
    };
    _this.layoutData = []; //{x:100, value:'1000',visible:true}

    _this.sprite = null;
    _this.isH = false; //????????????????????????x???

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(xAxis.defaultProps()), opt);

    _this.init(opt);

    return _this;
  }

  (0, _createClass2["default"])(xAxis, [{
    key: "init",
    value: function init(opt) {
      this._setField();

      this._initHandle(opt);

      this.sprite = new _canvax$$1["default"].Display.Sprite({
        id: "xAxisSprite_" + new Date().getTime()
      });
      this.rulesSprite = new _canvax$$1["default"].Display.Sprite({
        id: "xRulesSprite_" + new Date().getTime()
      });
      this.sprite.addChild(this.rulesSprite);
    }
  }, {
    key: "_initHandle",
    value: function _initHandle(opt) {
      var me = this;

      if (opt) {
        if (opt.isH && (!opt.label || opt.label.rotaion === undefined)) {
          //?????????????????????????????????
          this.label.rotation = 90;
        }
      }
      this.setDataSection();
      me._formatTextSection = [];
      me._textElements = [];

      _.each(me.dataSection, function (val, i) {
        me._formatTextSection[i] = me._getFormatText(val, i); //???_formatTextSection???????????????????????????????????????

        var txt = new _canvax$$1["default"].Display.Text(me._formatTextSection[i], {
          context: {
            fontSize: me.label.fontSize
          }
        });
        me._textElements[i] = txt;
      });

      if (this.label.rotation != 0) {
        //????????????????????????????????????????????????????????????
        this.label.textAlign = "right";
      }

      this._getTitle();

      this._setXAxisHeight();
    }
  }, {
    key: "_setField",
    value: function _setField(field) {
      if (field) {
        this.field = field;
      }

      this.field = _.flatten([this.field])[0];
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      //??????????????? ????????????????????????????????? opt,?????????width???origin?????? ??????????????????????????????layoutData
      opt && _.extend(true, this, opt);
      this.setAxisLength(this.width);

      this._trimXAxis();

      this._widget(opt);

      this.setX(this.pos.x);
      this.setY(this.pos.y);
    } //?????????????????????

  }, {
    key: "resetData",
    value: function resetData(dataFrame) {
      this._setField(dataFrame.field);

      this.resetDataOrg(dataFrame.org);

      this._initHandle();

      this.draw();
    }
  }, {
    key: "setX",
    value: function setX($n) {
      this.sprite.context.x = $n;
      this.pos.x = $n;
    }
  }, {
    key: "setY",
    value: function setY($n) {
      this.sprite.context.y = $n;
      this.pos.y = $n;
    }
  }, {
    key: "_getTitle",
    value: function _getTitle() {
      if (this.title.text) {
        if (!this._title) {
          this._title = new _canvax$$1["default"].Display.Text(this.title.text, {
            context: {
              fontSize: this.title.fontSize,
              textAlign: this.title.textAlign,
              //"center",//this.isH ? "center" : "left",
              textBaseline: this.title.textBaseline,
              //"middle", //this.isH ? "top" : "middle",
              fillStyle: this.title.fontColor,
              strokeStyle: this.title.strokeStyle,
              lineWidth: this.title.lineWidth,
              rotation: this.isH ? -180 : 0
            }
          });
        } else {
          this._title.resetText(this.title.text || '');
        }
      }
    }
  }, {
    key: "_setXAxisHeight",
    value: function _setXAxisHeight() {
      //????????????????????????
      var me = this;

      if (!me.enabled) {
        me.height = 0;
      } else {
        var _maxTextHeight = 0;

        if (this.label.enabled) {
          _.each(me.dataSection, function (val, i) {
            //???_formatTextSection???????????????????????????????????????
            var txt = me._textElements[i];
            var textWidth = txt.getTextWidth();
            var textHeight = txt.getTextHeight(); //let width = textWidth; //?????????????????????width

            var height = textHeight; //?????????????????????height

            if (!!me.label.rotation) {
              //???????????????
              if (me.label.rotation == 90) {
                //width  = textHeight;
                height = textWidth;
              } else {
                var sinR = Math.sin(Math.abs(me.label.rotation) * Math.PI / 180); //let cosR = Math.cos(Math.abs(me.label.rotation) * Math.PI / 180);

                height = parseInt(sinR * textWidth); //width = parseInt( cosR * textWidth );
              }
            }
            _maxTextHeight = Math.max(_maxTextHeight, height);
          });
        }
        this.height = _maxTextHeight + this.tickLine.lineLength + this.tickLine.distance + this.label.distance;

        if (this._title) {
          this.height += this._title.getTextHeight();
        }
      }
    }
  }, {
    key: "getNodeInfoOfX",
    value: function getNodeInfoOfX(x) {
      var ind = this.getIndexOfPos(x);
      var val = this.getValOfInd(ind); //this.getValOfPos(x);//

      var pos = this.getPosOf({
        ind: ind,
        val: val
      });
      return this._getNodeInfo(ind, val, pos);
    }
  }, {
    key: "getNodeInfoOfVal",
    value: function getNodeInfoOfVal(val) {
      var ind = this.getIndexOfVal(val);
      var pos = this.getPosOf({
        ind: ind,
        val: val
      });
      return this._getNodeInfo(ind, val, pos);
    }
  }, {
    key: "_getNodeInfo",
    value: function _getNodeInfo(ind, val, pos) {
      var o = {
        ind: ind,
        value: val,
        text: this._getFormatText(val, ind),
        //text??? format ????????????
        x: pos,
        //??????????????????????????????x
        field: this.field,
        layoutType: this.layoutType
      };
      return o;
    }
  }, {
    key: "_trimXAxis",
    value: function _trimXAxis() {
      var tmpData = [];
      var data = this.dataSection;

      for (var a = 0, al = data.length; a < al; a++) {
        var text = this._formatTextSection[a];
        var txt = this._textElements[a];
        var o = {
          ind: a,
          value: data[a],
          text: text,
          x: this.getPosOf({
            val: data[a],
            ind: a
          }),
          textWidth: txt.getTextWidth(),
          field: this.field,
          visible: null //trimgrapsh??????????????????

        };
        tmpData.push(o);
      }
      this.layoutData = tmpData;

      this._trimLayoutData();

      return tmpData;
    }
  }, {
    key: "_getFormatText",
    value: function _getFormatText(val) {
      var res = val;

      if (_.isFunction(this.label.format)) {
        res = this.label.format.apply(this, arguments);
      }

      if (_.isNumber(res) && this.layoutType == "proportion") {
        res = (0, tools.numAddSymbol)(res);
      }
      return res;
    }
  }, {
    key: "_widget",
    value: function _widget(opt) {
      var me = this;
      !opt && (opt = {});

      if (!me.enabled) {
        me.height = 0; //width?????????0

        return;
      }
      var arr = me.layoutData;
      var visibleInd = 0;

      for (var a = 0, al = arr.length; a < al; a++) {
        _.isFunction(me.filter) && me.filter({
          layoutData: arr,
          index: a
        });
        var o = arr[a];

        if (!o.visible) {
          continue;
        }
        var x = o.x,
            y = me.tickLine.lineLength + me.tickLine.distance + me.label.distance;

        var _node = me.rulesSprite.getChildAt(visibleInd); //?????? 


        var textContext = {
          x: o._text_x || o.x,
          y: y,
          fillStyle: this.label.fontColor,
          fontSize: this.label.fontSize,
          rotation: -Math.abs(this.label.rotation),
          textAlign: this.label.textAlign,
          lineHeight: this.label.lineHeight,
          textBaseline: !!this.label.rotation ? "middle" : "top",
          globalAlpha: 1
        };

        if (!!this.label.rotation && this.label.rotation != 90) {
          textContext.x += 5;
          textContext.y += 3;
        }

        var tickLineContext = {
          x: x,
          y: this.tickLine.distance,
          end: {
            x: 0,
            y: this.tickLine.lineLength
          },
          lineWidth: this.tickLine.lineWidth,
          strokeStyle: this.tickLine.strokeStyle
        };
        var duration = 300;
        var delay = visibleInd * Math.min(1000 / arr.length, 25);

        if (!me.animation || opt.resize) {
          duration = 0;
          delay = 0;
        }

        if (_node) {
          if (_node._tickLine && me.tickLine.enabled) {
            _node._tickLine.animate(tickLineContext, {
              duration: duration,
              id: _node._tickLine.id
            });
          }

          if (_node._txt && me.label.enabled) {
            _node._txt.animate(textContext, {
              duration: duration,
              id: _node._txt.id
            });

            _node._txt.resetText(o.text || '');
          }
        } else {
          _node = new _canvax$$1["default"].Display.Sprite({
            id: "xNode" + visibleInd
          }); //??????line

          if (me.tickLine.enabled) {
            _node._tickLine = new Line({
              id: "xAxis_tickline_" + visibleInd,
              context: tickLineContext
            });

            _node.addChild(_node._tickLine);
          }

          if (me.label.enabled) {
            _node._txt = new _canvax$$1["default"].Display.Text(o.text, {
              id: "xAxis_txt_" + visibleInd,
              context: textContext
            });

            _node.addChild(_node._txt); // TODO ??????x?????????????????????????????????????????????????????????????????????
            // if (me.animation && !opt.resize) {
            //     _node._txt.context.y += 20;
            //     _node._txt.context.globalAlpha = 0;
            //     _node._txt.animate( {
            //         y: textContext.y,
            //         globalAlpha: 1
            //     }, {
            //         duration: 500,
            //         delay: delay,
            //         id: _node._txt.id
            //     });
            // };

          }

          me.rulesSprite.addChild(_node);
        }
        visibleInd++;
      }

      if (this.rulesSprite.children.length >= visibleInd) {
        for (var _al = visibleInd, pl = this.rulesSprite.children.length; _al < pl; _al++) {
          this.rulesSprite.getChildAt(_al).remove();
          _al--, pl--;
        }
      }

      if (this.axisLine.enabled) {
        var _axisLineCtx = {
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: this.width,
            y: 0
          },
          lineWidth: this.axisLine.lineWidth,
          strokeStyle: this.axisLine.strokeStyle
        };

        if (!this._axisLine) {
          var _axisLine = new Line({
            context: _axisLineCtx
          });

          this.sprite.addChild(_axisLine);
          this._axisLine = _axisLine;
        } else {
          this._axisLine.animate(_axisLineCtx);
        }
      }

      if (this._title) {
        this._title.context.y = this.height - this._title.getTextHeight() / 2;
        this._title.context.x = this.width / 2;
        this.sprite.addChild(this._title);
      }
    }
  }, {
    key: "_trimLayoutData",
    value: function _trimLayoutData() {
      var me = this;
      var arr = this.layoutData;
      var l = arr.length;
      if (!this.enabled || !l) return; // rule , peak, proportion

      if (me.layoutType == "proportion") {
        this._checkOver();
      }

      if (me.layoutType == "peak") {
        //TODO: peak???????????? _checkOver ????????????????????????????????????
        this._checkOver();
      }

      if (me.layoutType == "rule") {
        this._checkOver();
      }
    }
  }, {
    key: "_getRootPR",
    value: function _getRootPR() {
      //??????paddingRight,????????????????????????????????????????????????
      var rootPaddingRight = 0;

      if (this._coord.app) {
        rootPaddingRight = this._coord.app.padding.right;
      }
      return rootPaddingRight;
    }
  }, {
    key: "_checkOver",
    value: function _checkOver() {
      var me = this;
      var arr = me.layoutData;
      var l = arr.length;
      var textAlign = me.label.textAlign; //??????????????????????????????????????????

      if (!this.label.evade || me.trimLayout) {
        _.each(arr, function (layoutItem) {
          layoutItem.visible = true;
        });

        if (me.trimLayout) {
          //???????????????????????? trimLayout ??????????????????visible???true??????????????????????????????????????????
          //trimLayout?????????arr?????????????????????visible?????????true???false?????????
          me.trimLayout(arr);
        }
        //????????????????????????visible???label

        var lastNode;

        for (var i = l - 1; i >= 0; i--) {
          if (lastNode) break;
          if (arr[i].visible) lastNode = arr[i];
        }

        if (lastNode) {
          if (textAlign == "center" && lastNode.x + lastNode.textWidth / 2 > me.width) {
            lastNode._text_x = me.width - lastNode.textWidth / 2 + me._getRootPR();
          }

          if (textAlign == "left" && lastNode.x + lastNode.textWidth > me.width) {
            lastNode._text_x = me.width - lastNode.textWidth;
          }
        }
        return;
      }

      function checkOver(i) {
        var curr = arr[i];

        if (curr === undefined) {
          return;
        }
        curr.visible = true;

        for (var ii = i; ii < l - 1; ii++) {
          var next = arr[ii + 1];
          var nextWidth = next.textWidth;
          var currWidth = curr.textWidth; //???????????????rotation??????????????????????????????????????????width???35  ??????

          if (!!me.label.rotation) {
            nextWidth = Math.min(nextWidth, 22);
            currWidth = Math.min(currWidth, 22);
          }

          var next_left_x = next.x; //?????????????????????

          var curr_right_x = curr.x + currWidth; //?????????????????????

          if (textAlign == "center") {
            next_left_x = next.x - nextWidth / 2;
            curr_right_x = curr.x + currWidth / 2;
          }

          if (textAlign == "right") {
            next_left_x = next.x - nextWidth;
            curr_right_x = curr.x;
          }

          if (ii == l - 2) {
            if (next_left_x + nextWidth > me.width + me._getRootPR()) {
              //?????????????????????????????????????????????
              //next???????????????
              if (textAlign == "center" && next.x + nextWidth / 2 > me.width) {
                next_left_x = me.width - nextWidth;
                next._text_x = me.width - nextWidth / 2 + me._getRootPR();
              }

              if (textAlign == "left" && next.x + nextWidth > me.width) {
                next_left_x = me.width - nextWidth;
                next._text_x = me.width - nextWidth;
              }
            }
          }

          if (next_left_x - curr_right_x < 1) {
            if (ii == l - 2) {
              //???????????????????????????????????????hide
              next.visible = true;
              curr.visible = false;
              return;
            } else {
              next.visible = false;
            }
          } else {
            checkOver(ii + 1);
            break;
          }
        }
      }
      checkOver(0);
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {};
    }
  }]);
  return xAxis;
}(_axis["default"]);

exports["default"] = xAxis;
});

unwrapExports(xaxis);

var yaxis = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);



var _axis = interopRequireDefault(axis$1);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._;
var Line = _canvax$$1["default"].Shapes.Line;

var yAxis = /*#__PURE__*/function (_Axis) {
  (0, _inherits2["default"])(yAxis, _Axis);

  var _super = _createSuper(yAxis);

  function yAxis(opt, data, _coord) {
    var _this;

    (0, _classCallCheck2["default"])(this, yAxis);
    _this = _super.call(this, opt, data.org);
    _this.type = "yAxis";
    _this._coord = _coord || {};
    _this._title = null; //this.label?????????????????????

    _this._axisLine = null;
    _this.maxW = 0; //??????????????? width

    _this.pos = {
      x: 0,
      y: 0
    };
    _this.yMaxHeight = 0; //y????????????

    _this.layoutData = []; //dataSection ?????????layout??????{y:-100, value:'1000'}

    _this.sprite = null;
    _this.isH = false; //????????????

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(yAxis.defaultProps()), opt);

    _this.init(opt);

    return _this;
  }

  (0, _createClass2["default"])(yAxis, [{
    key: "init",
    value: function init(opt) {
      this._setField();

      this._initHandle(opt);

      this.sprite = new _canvax$$1["default"].Display.Sprite({
        id: "yAxisSprite_" + new Date().getTime()
      });
      this.rulesSprite = new _canvax$$1["default"].Display.Sprite({
        id: "yRulesSprite_" + new Date().getTime()
      });
      this.sprite.addChild(this.rulesSprite);
    }
  }, {
    key: "_initHandle",
    value: function _initHandle(opt) {
      if (opt) {
        if (opt.isH && (!opt.label || opt.label.rotaion === undefined)) {
          //?????????????????????????????????
          this.label.rotation = 90;
        }
        //????????????????????????textAlign?????????????????????this.align?????????????????????

        if (!opt.label || !opt.label.textAlign) {
          this.label.textAlign = this.align == "left" ? "right" : "left";
        }
      }
      this.setDataSection();

      this._getTitle();

      this._setYaxisWidth();
    }
  }, {
    key: "_setField",
    value: function _setField(field) {
      if (field) {
        this.field = field;
      }
      //??????????????????field??????????????????array

      if (!_.isArray(this.field)) {
        this.field = [this.field];
      }
    }
    /**
     * 
     * opt  pos,yMaxHeight,resize
     */

  }, {
    key: "draw",
    value: function draw(opt) {
      _.extend(true, this, opt || {});

      this.height = parseInt(this.yMaxHeight - this._getYAxisDisLine());
      this.setAxisLength(this.height);
      this.sprite.cleanAnimates();

      this._trimYAxis();

      this._widget(opt);

      this.setX(this.pos.x);
      this.setY(this.pos.y);
    } //?????????????????????

  }, {
    key: "resetData",
    value: function resetData(dataFrame) {
      this._setField(dataFrame.field);

      this.resetDataOrg(dataFrame.org);

      this._initHandle();

      this.draw();
    }
  }, {
    key: "setX",
    value: function setX($n) {
      this.sprite.context.x = $n;
      this.pos.x = $n;
    }
  }, {
    key: "setY",
    value: function setY($n) {
      this.sprite.context.y = $n;
      this.pos.y = $n;
    } //?????????xAxis??????

  }, {
    key: "_getTitle",
    value: function _getTitle() {
      if (this.title.text) {
        if (!this._title) {
          var rotation = 0;

          if (this.align == "left") {
            rotation = -90;
          } else {
            rotation = 90;

            if (this.isH) {
              rotation = 270;
            }
          }
          this._title = new _canvax$$1["default"].Display.Text(this.title.text, {
            context: {
              fontSize: this.title.fontSize,
              textAlign: this.title.textAlign,
              //"center",//this.isH ? "center" : "left",
              textBaseline: this.title.textBaseline,
              //"middle", //this.isH ? "top" : "middle",
              fillStyle: this.title.fontColor,
              strokeStyle: this.title.strokeStyle,
              lineWidth: this.title.lineWidth,
              rotation: rotation
            }
          });
        } else {
          this._title.resetText(this.title.text);
        }
      }
    }
  }, {
    key: "_setYaxisWidth",
    value: function _setYaxisWidth() {//?????????
    }
  }, {
    key: "_trimYAxis",
    value: function _trimYAxis() {
      var me = this;
      var tmpData = [];

      for (var i = 0, l = this.dataSection.length; i < l; i++) {
        var layoutData = {
          value: this.dataSection[i],
          y: -Math.abs(this.getPosOf({
            val: this.dataSection[i],
            ind: i
          })),
          visible: true,
          text: ""
        }; //???format??????

        var text = layoutData.value;

        if (_.isFunction(me.label.format)) {
          text = me.label.format.apply(this, [text, i]);
        }

        if ((text === undefined || text === null) && me.layoutType == "proportion") {
          text = (0, tools.numAddSymbol)(layoutData.value);
        }
        layoutData.text = text;
        tmpData.push(layoutData);
      }

      var _preShowInd = 0;

      for (var a = 0, al = tmpData.length; a < al; a++) {
        if (a == 0) continue;

        if (_preShowInd == 0) {
          if (tmpData[a].text == tmpData[_preShowInd].text) {
            //???????????????format?????????????????????????????????format???????????????
            tmpData[a].visible = false;
          } else {
            _preShowInd = a;
          }
        } else {
          if (tmpData[a].text == tmpData[_preShowInd].text) {
            tmpData[_preShowInd].visible = false;
          }

          _preShowInd = a;
        }
      }

      this.layoutData = tmpData;

      if (this.trimLayout) {
        //???????????????????????? trimLayout ??????????????????visible???true??????????????????????????????????????????
        //trimLayout?????????arr?????????????????????visible?????????true???false?????????
        this.trimLayout(tmpData);
      }
    }
  }, {
    key: "_getYAxisDisLine",
    value: function _getYAxisDisLine() {
      //??????y???????????????????????????????????????         
      var disMin = 0;
      var disMax = 2 * disMin;
      var dis = disMin;
      dis = disMin + this.yMaxHeight % this.dataSection.length;
      dis = dis > disMax ? disMax : dis;
      return dis;
    }
  }, {
    key: "resetWidth",
    value: function resetWidth(width) {
      var me = this;
      me.width = width;

      if (me.align == "left") {
        me.rulesSprite.context.x = me.width;
      }
    }
  }, {
    key: "_widget",
    value: function _widget(opt) {
      var me = this;
      !opt && (opt = {});

      if (!me.enabled) {
        me.width = 0;
        return;
      }
      var arr = this.layoutData;
      var visibleInd = 0;
      me.maxW = 0;

      for (var a = 0, al = arr.length; a < al; a++) {
        _.isFunction(me.filter) && me.filter({
          layoutData: arr,
          index: a
        });
        var o = arr[a];

        if (!o.visible) {
          continue;
        }
        var y = o.y;
        var textAlign = me.label.textAlign;
        var posy = y + (a == 0 ? -3 : 0) + (a == arr.length - 1 ? 3 : 0); //??????????????????y??????????????? ??????

        if (me.label.rotation == 90 || me.label.rotation == -90) {
          textAlign = "center";

          if (a == arr.length - 1) {
            posy = y - 2;
            textAlign = "right";
          }

          if (a == 0) {
            posy = y;
          }
        }
        var aniFrom = 16;

        if (o.value == me.origin) {
          aniFrom = 0;
        }

        if (o.value < me.origin) {
          aniFrom = -16;
        }
        var lineX = 0;
        var tickLineContext = void 0;

        if (me.tickLine.enabled) {
          //??????
          lineX = me.align == "left" ? -me.tickLine.lineLength - me.tickLine.distance : me.tickLine.distance;
          tickLineContext = {
            x: lineX,
            y: y,
            end: {
              x: me.tickLine.lineLength,
              y: 0
            },
            lineWidth: me.tickLine.lineWidth,
            strokeStyle: me._getStyle(me.tickLine.strokeStyle)
          };
        }

        var textContext = void 0;

        if (me.label.enabled) {
          var txtX = me.align == "left" ? lineX - me.label.distance : lineX + me.tickLine.lineLength + me.label.distance;

          if (this.isH) {
            txtX = txtX + (me.align == "left" ? -1 : 1) * 4;
          }
          textContext = {
            x: txtX,
            y: posy,
            fillStyle: me._getStyle(me.label.fontColor),
            fontSize: me.label.fontSize,
            rotation: -Math.abs(me.label.rotation),
            textAlign: textAlign,
            textBaseline: "middle",
            lineHeight: me.label.lineHeight,
            globalAlpha: 1
          };
        }
        var duration = 300;

        if (!me.animation || opt.resize) {
          duration = 0;
        }

        var _node = this.rulesSprite.getChildAt(visibleInd);

        if (_node) {
          if (_node._tickLine && me.tickLine.enabled) {
            _node._tickLine.animate(tickLineContext, {
              duration: duration,
              id: _node._tickLine.id
            });
          }

          if (_node._txt && me.label.enabled) {
            _node._txt.animate(textContext, {
              duration: duration,
              id: _node._txt.id
            });

            _node._txt.resetText(o.text);
          }
        } else {
          _node = new _canvax$$1["default"].Display.Sprite({
            id: "_node" + visibleInd
          }); //??????line

          if (me.tickLine.enabled) {
            _node._tickLine = new Line({
              id: "yAxis_tickline_" + visibleInd,
              context: tickLineContext
            });

            _node.addChild(_node._tickLine);
          }

          if (me.label.enabled) {
            _node._txt = new _canvax$$1["default"].Display.Text(o.text, {
              id: "yAxis_txt_" + visibleInd,
              context: textContext
            });

            _node.addChild(_node._txt);

            if (me.label.rotation == 90 || me.label.rotation == -90) {
              me.maxW = Math.max(me.maxW, _node._txt.getTextHeight());
            } else {
              me.maxW = Math.max(me.maxW, _node._txt.getTextWidth());
            }

            if (me.animation && !opt.resize) {
              _node._txt.context.y = y + aniFrom;
              _node._txt.context.globalAlpha = 0;

              _node._txt.animate({
                y: textContext.y,
                globalAlpha: 1
              }, {
                duration: 300,
                id: _node._txt.id
              });
            }
          }
          me.rulesSprite.addChild(_node);
        }
        visibleInd++;
      }

      if (me.rulesSprite.children.length >= visibleInd) {
        for (var _al = visibleInd, pl = me.rulesSprite.children.length; _al < pl; _al++) {
          me.rulesSprite.getChildAt(_al).remove();
          _al--, pl--;
        }
      }

      if (!me.width && !('width' in me._opt)) {
        me.width = parseInt(me.maxW + me.label.distance);

        if (me.tickLine.enabled) {
          me.width += parseInt(me.tickLine.lineLength + me.tickLine.distance);
        }

        if (me._title) {
          me.width += me._title.getTextHeight();
        }
      }
      var _originX = 0;

      if (me.align == "left") {
        me.rulesSprite.context.x = me.width;
        _originX = me.width;
      }

      if (me.axisLine.enabled) {
        var _axisLineCtx = {
          start: {
            x: _originX,
            y: 0
          },
          end: {
            x: _originX,
            y: -me.height
          },
          lineWidth: me.axisLine.lineWidth,
          strokeStyle: me._getStyle(me.axisLine.strokeStyle)
        };

        if (!this._axisLine) {
          var _axisLine = new Line({
            context: _axisLineCtx
          });

          this.sprite.addChild(_axisLine);
          this._axisLine = _axisLine;
        } else {
          this._axisLine.animate(_axisLineCtx);
        }
      }

      if (this._title) {
        this._title.context.y = -this.height / 2;
        this._title.context.x = this._title.getTextHeight() / 2;

        if (this.align == "right") {
          this._title.context.x = this.width - this._title.getTextHeight() / 2;
        }
        this.sprite.addChild(this._title);
      }
    }
  }, {
    key: "_getStyle",
    value: function _getStyle(s) {
      var res = s;

      if (_.isFunction(s)) {
        res = s.call(this, this);
      }

      if (!s) {
        res = "#999";
      }
      return res;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        align: {
          detail: '???????????????',
          "default": 'left'
        },
        layoutType: {
          detail: '????????????',
          "default": 'proportion'
        }
      };
    }
  }]);
  return yAxis;
}(_axis["default"]);

exports["default"] = yAxis;
});

unwrapExports(yaxis);

var grid$2 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Line = _canvax$$1["default"].Shapes.Line;
var Rect = _canvax$$1["default"].Shapes.Rect;

var rectGrid = /*#__PURE__*/function (_event$Dispatcher) {
  (0, _inherits2["default"])(rectGrid, _event$Dispatcher);

  var _super = _createSuper(rectGrid);

  function rectGrid(opt, _coord) {
    var _this;

    (0, _classCallCheck2["default"])(this, rectGrid);
    _this = _super.call(this, opt, _coord);

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(rectGrid.defaultProps()));

    _this.width = 0;
    _this.height = 0;
    _this._coord = _coord; //?????????????????????????????????????????????

    _this.pos = {
      x: 0,
      y: 0
    };
    _this.sprite = null; //??????sprite

    _this.xAxisSp = null; //x??????????????????

    _this.yAxisSp = null; //y??????????????????

    _this.init(opt);

    return _this;
  }

  (0, _createClass2["default"])(rectGrid, [{
    key: "init",
    value: function init(opt) {
      _.extend(true, this, opt);

      this.sprite = new _canvax$$1["default"].Display.Sprite();
    }
  }, {
    key: "setX",
    value: function setX($n) {
      this.sprite.context.x = $n;
    }
  }, {
    key: "setY",
    value: function setY($n) {
      this.sprite.context.y = $n;
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      _.extend(true, this, opt); //this._configData(opt);


      this._widget();

      this.setX(this.pos.x);
      this.setY(this.pos.y);
    }
  }, {
    key: "clean",
    value: function clean() {
      this.sprite.removeAllChildren();
    }
  }, {
    key: "reset",
    value: function reset(opt) {
      this.sprite.removeAllChildren();
      this.draw(opt);
    }
  }, {
    key: "_widget",
    value: function _widget() {
      var self = this;

      if (!this.enabled) {
        return;
      }
      var _yAxis = self._coord._yAxis[0];
      var _xAxis = self._coord._xAxis;
      this.fillSp = new _canvax$$1["default"].Display.Sprite();
      this.sprite.addChild(this.fillSp);

      _.each([self.fill.xDimension, self.fill.yDimension], function (fill, ind) {
        var _axis = ind ? _yAxis : _xAxis;

        var splitVals = [];

        if (fill.enabled) {
          if (!fill.splitVals) {
            splitVals = _axis.dataSection;
          } else {
            splitVals = [_axis.dataSection[0]].concat(_.flatten([fill.splitVals]));
            splitVals.push(_axis.dataSection.slice(-1)[0]);
          }

          var fillRanges = [];

          if (splitVals.length >= 2) {
            var range = [];

            for (var i = 0, l = splitVals.length; i < l; i++) {
              var pos = _axis.getPosOf({
                val: splitVals[i]
              });

              if (!range.length) {
                range.push(pos);
                continue;
              }

              if (range.length == 1) {
                if (pos - range[0] < 1) {
                  continue;
                } else {
                  range.push(pos);
                  fillRanges.push(range);
                  var nextBegin = range[1];
                  range = [nextBegin];
                }
              }
            }

            _.each(fillRanges, function (range, rInd) {
              var rectCtx = {
                fillStyle: self.getProp(fill.fillStyle, rInd, "#000"),
                fillAlpha: self.getProp(fill.alpha, rInd, 0.02 * (rInd % 2))
              };

              if (!ind) {
                //x??????????????????fill
                rectCtx.x = range[0];
                rectCtx.y = 0;
                rectCtx.width = range[1] - range[0];
                rectCtx.height = -self.height;
              } else {
                //y??????????????????fill
                rectCtx.x = 0;
                rectCtx.y = -range[0];
                rectCtx.width = self.width;
                rectCtx.height = -(range[1] - range[0]);
              }

              var fillRect = new Rect({
                context: rectCtx
              });
              self.fillSp.addChild(fillRect);
            });
          }
        }
      });

      self.xAxisSp = new _canvax$$1["default"].Display.Sprite(), self.sprite.addChild(self.xAxisSp);
      self.yAxisSp = new _canvax$$1["default"].Display.Sprite(), self.sprite.addChild(self.yAxisSp);
      var arr = _yAxis.layoutData;

      for (var a = 0, al = arr.length; a < al; a++) {
        var o = arr[a];
        if (!o.visible) continue;
        var line = new Line({
          id: "back_line_" + a,
          context: {
            y: o.y,
            lineType: self.getProp(self.line.xDimension.lineType, a, 'solid'),
            lineWidth: self.getProp(self.line.xDimension.lineWidth, a, 1),
            strokeStyle: self.getProp(self.line.xDimension.strokeStyle, a, '#f0f0f0'),
            visible: true
          }
        });

        if (self.line.xDimension.enabled) {
          self.xAxisSp.addChild(line);
          line.context.start.x = 0;
          line.context.end.x = self.width;
        }
      }

      arr = _xAxis.layoutData;

      for (var _a = 0, _al = arr.length; _a < _al; _a++) {
        var _o = arr[_a];

        var _line = new Line({
          context: {
            x: _o.x,
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 0,
              y: -self.height
            },
            lineType: self.getProp(self.line.yDimension.lineType, _a, 'solid'),
            lineWidth: self.getProp(self.line.yDimension.lineWidth, _a, 1),
            strokeStyle: self.getProp(self.line.yDimension.strokeStyle, _a, '#f0f0f0'),
            visible: true
          }
        });

        if (self.line.yDimension.enabled) {
          self.yAxisSp.addChild(_line);
        }
      }
    }
  }, {
    key: "getProp",
    value: function getProp(prop, i, def) {
      var res = def;

      if (prop != null && prop != undefined) {
        if (_.isString(prop) || _.isNumber(prop)) {
          res = prop;
        }

        if (_.isFunction(prop)) {
          res = prop.apply(this, [i, def]);
        }

        if (_.isArray(prop)) {
          res = prop[i];
        }
      }
      return res;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        enabled: {
          detail: '????????????grid??????',
          "default": true
        },
        line: {
          detail: '??????????????????',
          propertys: {
            xDimension: {
              detail: '????????????????????????',
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": true
                },
                data: [],
                lineType: {
                  detail: '?????????????????????????????????',
                  "default": 'solid'
                },
                lineWidth: {
                  detail: '??????',
                  "default": 1
                },
                strokeStyle: {
                  detail: '?????????',
                  "default": '#f0f0f0'
                }
              }
            },
            yDimension: {
              detail: '????????????????????????',
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": false
                },
                data: [],
                lineType: {
                  detail: '?????????????????????????????????',
                  "default": 'solid'
                },
                lineWidth: {
                  detail: '??????',
                  "default": 1
                },
                strokeStyle: {
                  detail: '?????????',
                  "default": '#f0f0f0'
                }
              }
            }
          }
        },
        fill: {
          detail: '???????????????',
          propertys: {
            xDimension: {
              detail: '??????????????????????????????x??????',
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": false
                },
                splitVals: {
                  detail: "???x??????????????????????????????vals",
                  "default": null //????????????xaxis???dataSection

                },
                fillStyle: {
                  detail: '????????????',
                  "default": null
                },
                alpha: {
                  detail: '???????????????',
                  "default": null
                }
              }
            },
            yDimension: {
              detail: '??????????????????????????????y??????',
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": false
                },
                splitVals: {
                  detail: "???x??????????????????????????????vals",
                  "default": null
                },
                fillStyle: {
                  detail: '????????????',
                  "default": null
                },
                alpha: {
                  detail: '???????????????',
                  "default": null
                }
              }
            }
          }
        }
      };
    }
  }]);
  return rectGrid;
}(event.Dispatcher);

exports["default"] = rectGrid;
});

unwrapExports(grid$2);

var rect = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _index = interopRequireDefault(coord);

var _canvax$$1 = interopRequireDefault(_canvax);

var _xaxis = interopRequireDefault(xaxis);

var _yaxis = interopRequireDefault(yaxis);

var _grid = interopRequireDefault(grid$2);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;

var Rect = /*#__PURE__*/function (_coordBase) {
  (0, _inherits2["default"])(Rect, _coordBase);

  var _super = _createSuper(Rect);

  function Rect(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, Rect);
    _this = _super.call(this, opt, app);

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Rect.defaultProps()), _this.setDefaultOpt(opt, app));

    _this.type = "rect";
    _this._xAxis = null;
    _this._yAxis = [];
    _this._yAxisLeft = null;
    _this._yAxisRight = null;
    _this._grid = null;

    _this.init(opt);

    return _this;
  }

  (0, _createClass2["default"])(Rect, [{
    key: "setDefaultOpt",
    value: function setDefaultOpt(coordOpt, app) {
      var coord$$1 = {
        field: this.dataFrame.fields[0],
        xAxis: {
          //??????????????????????????????????????????????????????????????????????????????
          layoutType: "rule",
          //"peak",  
          //?????????false???x????????????????????????????????? ?????? ????????????????????????????????????????????????????????????
          //?????????????????????????????????????????????????????????????????????????????????????????????1px??? ??????????????????????????????true
          posParseToInt: false
        },
        grid: {}
      };

      _.extend(true, coord$$1, coordOpt);

      if (coord$$1.yAxis) {
        var _nyarr = []; //TODO: ???????????????deep extend ???????????????????????????????????????????????????????????????
        //????????????????????????clone????????????????????? ???canvax?????????extend??????array?????????

        _.each(_.flatten([coord$$1.yAxis]), function (yopt) {
          _nyarr.push(_.clone(yopt));
        });

        coord$$1.yAxis = _nyarr;
      } else {
        coord$$1.yAxis = [];
      }

      var graphsArr = _.flatten([app._opt.graphs]); //???graphs????????????????????????graphs.field?????????coord.yAxis


      for (var i = 0; i < graphsArr.length; i++) {
        var graphs = graphsArr[i];

        if (graphs.type == "bar") {
          //??????graphs????????????????????????????????????xAxis??????????????? peak ???layoutType
          coord$$1.xAxis.layoutType = "peak";
        }

        if (graphs.field) {
          (function () {
            //????????????field???????????????????????? graphs???
            var align = "left"; //??????left

            if (graphs.yAxisAlign == "right") {
              align = "right";
            }
            var optsYaxisObj = null;
            optsYaxisObj = _.find(coord$$1.yAxis, function (obj, i) {
              return obj.align == align || !obj.align && i == (align == "left" ? 0 : 1);
            });

            if (!optsYaxisObj) {
              optsYaxisObj = {
                align: align,
                field: []
              };
              coord$$1.yAxis.push(optsYaxisObj);
            } else {
              if (!optsYaxisObj.align) {
                optsYaxisObj.align = align;
              }
            }

            if (!optsYaxisObj.field) {
              optsYaxisObj.field = [];
            } else {
              if (!_.isArray(optsYaxisObj.field)) {
                optsYaxisObj.field = [optsYaxisObj.field];
              }
            }

            if (_.isArray(graphs.field)) {
              optsYaxisObj.field = optsYaxisObj.field.concat(graphs.field);
            } else {
              optsYaxisObj.field.push(graphs.field);
            }
          })();
        }
      }
      //????????????yAxis ?????? left , right?????????????????????

      var _lys = [],
          _rys = [];

      _.each(coord$$1.yAxis, function (yAxis, i) {
        if (!yAxis.align) {
          yAxis.align = i ? "right" : "left";
        }

        if (yAxis.align == "left") {
          _lys.push(yAxis);
        } else {
          _rys.push(yAxis);
        }
      });

      coord$$1.yAxis = _lys.concat(_rys);

      if (coord$$1.horizontal) {
        coord$$1.xAxis.isH = true;

        _.each(coord$$1.yAxis, function (yAxis) {
          yAxis.isH = true;
        });
      }

      if ("enabled" in coord$$1) {
        //????????????????????????????????????display?????????????????????xAxis???yAxis???grid???????????????
        _.extend(true, coord$$1.xAxis, {
          enabled: coord$$1.enabled
        });

        _.each(coord$$1.yAxis, function (yAxis) {
          _.extend(true, yAxis, {
            enabled: coord$$1.enabled
          });
        });

        coord$$1.grid.enabled = coord$$1.enabled;
      }

      if ("animation" in coord$$1) {
        //????????????????????????????????????animation?????????????????????xAxis???yAxis???grid???????????????
        _.extend(true, coord$$1.xAxis, {
          animation: coord$$1.animation
        });

        _.each(coord$$1.yAxis, function (yAxis) {
          _.extend(true, yAxis, {
            animation: coord$$1.animation
          });
        });

        coord$$1.grid.animation = coord$$1.animation;
      }
      return coord$$1;
    }
  }, {
    key: "init",
    value: function init() {
      this._initModules(); //???????????????????????????????????? _fieldsDisplayMap ?????????
      // _fieldsDisplayMap ??????????????????????????????????????????????????????enabled ??? ????????????????????????yAxis


      this.fieldsMap = this.setFieldsMap({
        type: "yAxis"
      });
    }
  }, {
    key: "resetData",
    value: function resetData(dataFrame) {
      var me = this;
      this.dataFrame = dataFrame;

      var _xAxisDataFrame = this.getAxisDataFrame(this.xAxis.field);

      this._xAxis.resetData(_xAxisDataFrame);

      _.each(this._yAxis, function (_yAxis) {
        //??????_yAxis????????????y?????????
        var yAxisDataFrame = me.getAxisDataFrame(_yAxis.field);

        _yAxis.resetData(yAxisDataFrame);
      });

      this._resetXY_axisLine_pos(); //let _yAxis = this._yAxisLeft || this._yAxisRight;


      this._grid.reset({
        animation: false
      });
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      //?????????????????????????????????xAxis??????
      !opt && (opt = {});
      var _padding = this.app.padding;
      var h = opt.height || this.app.height;
      var w = opt.width || this.app.width;

      if (this.horizontal) {
        //??????????????????????????????????????????xy?????????????????????????????????
        var _num = w;
        w = h;
        h = _num;
      }
      var y = h - this._xAxis.height - _padding.bottom;
      var _yAxisW = 0;
      var _yAxisRW = 0; //??????yAxis

      if (this._yAxisLeft) {
        this._yAxisLeft.draw({
          pos: {
            x: _padding.left,
            y: y
          },
          yMaxHeight: y - _padding.top,
          resize: opt.resize
        });

        _yAxisW = this._yAxisLeft.width;
      } //???????????????


      if (this._yAxisRight) {
        this._yAxisRight.draw({
          pos: {
            x: 0,
            y: y
          },
          yMaxHeight: y - _padding.top,
          resize: opt.resize
        });

        _yAxisRW = this._yAxisRight.width;
      }

      this._xAxis.draw({
        pos: {
          x: _padding.left + _yAxisW,
          y: y
        },
        width: w - _yAxisW - _padding.left - _yAxisRW - _padding.right,
        resize: opt.resize
      });

      this._yAxisRight && this._yAxisRight.setX(_yAxisW + _padding.left + this._xAxis.width); //??????????????????

      this._grid.draw({
        width: this._xAxis.width,
        height: this._yAxis[0].height,
        pos: {
          x: _yAxisW + _padding.left,
          y: y
        },
        resize: opt.resize
      });

      this.width = this._xAxis.width;
      this.height = this._yAxis[0].height;
      this.origin.x = _yAxisW + _padding.left;
      this.origin.y = y;

      this._initInduce();

      this._resetXY_axisLine_pos();

      if (this.horizontal) {
        this._horizontal({
          w: w,
          h: h
        });
        /*
        let _padding = this.app.padding;
        this.width = this._yAxis[0].height;
        this.height = this._xAxis.width;
        this.origin.x = this._xAxis.height + _padding.left;
        this.origin.y = this._yAxis[0].height + _padding.top;
        */

      }
    }
  }, {
    key: "_resetXY_axisLine_pos",
    value: function _resetXY_axisLine_pos() {
      var me = this; //?????????x y ?????? _axisLine???????????????????????? axisLine.position==default

      var xAxisPosY;

      if (this._xAxis.enabled) {
        if (this._xAxis.axisLine.position == 'center') {
          xAxisPosY = -this._yAxis[0].height / 2;
        }

        if (this._xAxis.axisLine.position == 'center') {
          xAxisPosY = -this._yAxis[0].height / 2;
        }

        if (_.isNumber(this._xAxis.axisLine.position)) {
          xAxisPosY = -this._yAxis[0].getPosOfVal(this._xAxis.axisLine.position);
        }

        if (xAxisPosY !== undefined) {
          this._xAxis._axisLine.context.y = xAxisPosY;
        }
      }

      _.each(this._yAxis, function (_yAxis) {
        //??????_yAxis????????????y?????????
        var yAxisPosX;

        if (_yAxis.enabled) {
          if (_yAxis.axisLine.position == 'center') {
            yAxisPosX = me._xAxis.width / 2;
          }

          if (_.isNumber(_yAxis.axisLine.position)) {
            yAxisPosX = me._xAxis.getPosOfVal(_yAxis.axisLine.position);
          }

          if (yAxisPosX !== undefined) {
            _yAxis._axisLine.context.x = yAxisPosX;
          }
        }
      });
    }
  }, {
    key: "getSizeAndOrigin",
    value: function getSizeAndOrigin() {
      var obj = {
        width: this.width,
        height: this.height,
        origin: this.origin
      };

      if (this.horizontal) {
        var _padding = this.app.padding; //?????????drawBeginHorizontal???
        //?????????????????? ??????4???padding??????????????????
        //top,right ?????? ??? bottom,left ??????
        //???????????????????????????????????????origin

        var left = _padding.bottom;
        var top = _padding.right;
        obj = {
          width: this._yAxis[0].height,
          height: this._xAxis.width,
          origin: {
            x: this._xAxis.height + left,
            y: this._yAxis[0].height + top
          }
        };
      }
      return obj;
    }
  }, {
    key: "_initModules",
    value: function _initModules() {
      this._grid = new _grid["default"](this.grid, this);
      this.sprite.addChild(this._grid.sprite);

      var _xAxisDataFrame = this.getAxisDataFrame(this.xAxis.field);

      this._xAxis = new _xaxis["default"](this.xAxis, _xAxisDataFrame, this);

      this._axiss.push(this._xAxis);

      this.sprite.addChild(this._xAxis.sprite); //????????????????????????

      var yAxis = this.yAxis;
      var yAxisLeft, yAxisRight;
      var yAxisLeftDataFrame, yAxisRightDataFrame; // yAxis ??????????????????

      if (!_.isArray(yAxis)) {
        yAxis = [yAxis];
      }

      yAxisLeft = _.find(yAxis, function (ya) {
        return ya.align == "left";
      });

      if (yAxisLeft) {
        yAxisLeftDataFrame = this.getAxisDataFrame(yAxisLeft.field);
        this._yAxisLeft = new _yaxis["default"](yAxisLeft, yAxisLeftDataFrame, this);
        this._yAxisLeft.axis = yAxisLeft;
        this.sprite.addChild(this._yAxisLeft.sprite);

        this._yAxis.push(this._yAxisLeft);

        this._axiss.push(this._yAxisLeft);
      }

      yAxisRight = _.find(yAxis, function (ya) {
        return ya.align == "right";
      });

      if (yAxisRight) {
        yAxisRightDataFrame = this.getAxisDataFrame(yAxisRight.field);
        this._yAxisRight = new _yaxis["default"](yAxisRight, yAxisRightDataFrame, this);
        this._yAxisRight.axis = yAxisRight;
        this.sprite.addChild(this._yAxisRight.sprite);

        this._yAxis.push(this._yAxisRight);

        this._axiss.push(this._yAxisRight);
      }
    }
    /**
     * 
     * @param {x,y} size 
     */

  }, {
    key: "_horizontal",
    value: function _horizontal(opt) {
      var me = this;
      var w = opt.h;
      var h = opt.w;

      _.each([me.sprite.context], function (ctx) {
        ctx.x += (w - h) / 2;
        ctx.y += (h - w) / 2;
        var origin = {
          x: h / 2,
          y: w / 2
        };
        ctx.rotation = 90;
        ctx.rotateOrigin = origin;
      });
    } //???coor_base??????addField removeField?????????

  }, {
    key: "changeFieldEnabled",
    value: function changeFieldEnabled(field) {
      this.setFieldEnabled(field);
      var fieldMap = this.getFieldMapOf(field);

      var _axis = fieldMap.yAxis || fieldMap.rAxis;

      var enabledFields = this.getEnabledFieldsOf(_axis); //[ fieldMap.yAxis.align ];

      _axis.resetData(this.getAxisDataFrame(enabledFields));

      this._resetXY_axisLine_pos(); //??????yAxis???????????????????????????????????????


      this._grid.reset({
        animation: false
      });
    }
  }, {
    key: "_initInduce",
    value: function _initInduce() {
      var me = this;
      me.induce = new _canvax$$1["default"].Shapes.Rect({
        id: "induce",
        context: {
          x: me.origin.x,
          y: me.origin.y - me.height,
          width: me.width,
          height: me.height,
          fillStyle: '#000000',
          globalAlpha: 0,
          cursor: 'pointer'
        }
      });

      if (!me.sprite.getChildById("induce")) {
        me.sprite.addChild(me.induce);
      }
      me.induce.on(event.types.get(), function (e) {
        //e.eventInfo = me._getInfoHandler(e);
        me.fire(e.type, e); //???????????????????????????Tips

        me.app.fire(e.type, e);
      });
    }
  }, {
    key: "getTipsInfoHandler",
    value: function getTipsInfoHandler(e) {
      //???????????????xAxis???????????????;
      var induceX = e.point.x;

      if (e.target !== this.induce) {
        induceX = this.induce.globalToLocal(e.target.localToGlobal(e.point)).x;
      }

      var xNode = this._xAxis.getNodeInfoOfX(induceX);

      var obj = {
        xAxis: xNode,
        dimension_1: xNode,
        //???xAxis???????????? ??????????????????dimension_1
        title: xNode.text,
        //?????????????????????????????????????????????
        iNode: xNode.ind,
        nodes: [//??????_graphs ????????????
        ]
      };

      if (e.eventInfo) {
        _.extend(true, obj, e.eventInfo); //???xNode????????????eventInfo??????


        if (obj.xAxis) {
          e.eventInfo.xAxis = xNode;
        }
      }
      return obj;
    } //????????????????????????????????????????????????????????????????????????????????? graphs???????????????
    //return {pos {x,y}, value :{x,y}}

  }, {
    key: "getPoint",
    value: function getPoint(opt) {
      var point = {
        x: 0,
        y: undefined
      };
      var xaxisExp = {
        type: "xAxis"
      };
      var yaxisExp = {
        type: "yAxis",
        field: opt.field
      };

      var _xAxis = this.getAxis(xaxisExp);

      var _yAxis = this.getAxis(yaxisExp);

      var _iNode = opt.iNode || 0;

      var _value = opt.value; //x y ?????????????????? yval??????

      if (!("x" in _value)) {
        //???????????????xval???????????????iNode???xAxis???org??????
        _value.x = _.flatten(_xAxis.dataOrg)[_iNode];
      }
      point.x = _xAxis.getPosOf({
        ind: _iNode,
        val: _value.x
      });
      var y = _value.y;

      if (!isNaN(y) && y !== null && y !== undefined && y !== "") {
        point.y = -_yAxis.getPosOfVal(y);
      } else {
        point.y = undefined;
      }
      return {
        pos: point,
        value: _value
      };
    }
  }, {
    key: "getAxisOriginPoint",
    value: function getAxisOriginPoint(exp) {
      var _yAxis = this.getAxis(exp);

      return {
        pos: -_yAxis.originPos,
        value: _yAxis.origin
      };
    }
  }, {
    key: "getOriginPos",
    value: function getOriginPos(exp) {
      var xaxisExp = {
        type: "xAxis"
      };
      var yaxisExp = {
        type: "yAxis",
        field: exp.field
      };

      var _xAxis = this.getAxis(xaxisExp);

      var _yAxis = this.getAxis(yaxisExp);

      return {
        x: _xAxis.originPos,
        y: -_yAxis.originPos
      };
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        horizontal: {
          detail: '?????????????????????',
          documentation: "?????????????????????",
          insertText: "horizontal: ",
          "default": false,
          values: [true, false]
        },
        _props: {
          xAxis: _xaxis["default"],
          yAxis: _yaxis["default"],
          grid: _grid["default"]
        }
      };
    }
  }]);
  return Rect;
}(_index["default"]);

_index["default"].registerComponent(Rect, 'coord', 'rect');

var _default = Rect;
exports["default"] = _default;
});

unwrapExports(rect);

var pie = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Sector = _canvax$$1["default"].Shapes.Sector;
var Path = _canvax$$1["default"].Shapes.Path;
var Text = _canvax$$1["default"].Display.Text;
var AnimationFrame = _canvax$$1["default"].AnimationFrame;

var Pie = /*#__PURE__*/function (_event$Dispatcher) {
  (0, _inherits2["default"])(Pie, _event$Dispatcher);

  var _super = _createSuper(Pie);

  function Pie(_graphs, data) {
    var _this;

    (0, _classCallCheck2["default"])(this, Pie);
    _this = _super.call(this);
    _this.width = 0;
    _this.height = 0;
    _this.origin = {
      x: 0,
      y: 0
    }; //??????pie?????????graphs??????

    _this._graphs = _graphs;
    _this.domContainer = _graphs.app.canvax.domView;
    _this.data = data;
    _this.sprite = null;
    _this.textSp = null;
    _this.sectorsSp = null;
    _this.selectedSp = null;

    _this.init();

    _this.sectors = [];
    _this.textMaxCount = 15;
    _this.textList = [];
    _this.completed = false; //??????????????????????????????

    return _this;
  }

  (0, _createClass2["default"])(Pie, [{
    key: "init",
    value: function init() {
      this.sprite = new _canvax$$1["default"].Display.Sprite();
      this.sectorsSp = new _canvax$$1["default"].Display.Sprite();
      this.sprite.addChild(this.sectorsSp);
      this.selectedSp = new _canvax$$1["default"].Display.Sprite();
      this.sprite.addChild(this.selectedSp);

      if (this._graphs.label.enabled) {
        this.textSp = new _canvax$$1["default"].Display.Sprite();
      }
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      var me = this;

      _.extend(true, this, opt);

      this.sprite.context.x = me.origin.x;
      this.sprite.context.y = me.origin.y;

      me._widget();
    }
  }, {
    key: "resetData",
    value: function resetData(data) {
      var me = this;
      this.data = data;
      me.destroyLabel();
      var completedNum = 0;

      for (var i = 0; i < me.sectors.length; i++) {
        var sec = me.sectors[i];
        var secData = this.data.list[i];
        sec.animate({
          r: secData.outRadius,
          startAngle: secData.startAngle,
          endAngle: secData.endAngle
        }, {
          duration: 280,
          onComplete: function onComplete() {
            completedNum++;

            if (completedNum == me.sectors.length) {
              if (me._graphs.label.enabled) {
                me._startWidgetLabel();
              }
            }
          }
        });
      }
    }
  }, {
    key: "_widget",
    value: function _widget() {
      var me = this;
      var list = me.data.list;
      var total = me.data.total; //let moreSecData;

      if (list.length > 0 && total > 0) {
        me.textSp && me.sprite.addChild(me.textSp);

        for (var i = 0; i < list.length; i++) {
          var item = list[i]; //????????????          

          var sector = new Sector({
            hoverClone: false,
            xyToInt: false,
            //???????????????????????????
            context: {
              x: item.focused ? item.outOffsetx : 0,
              y: item.focused ? item.outOffsety : 0,
              r0: item.innerRadius,
              r: item.outRadius,
              startAngle: item.startAngle,
              endAngle: item.endAngle,
              fillStyle: item.fillStyle,
              //iNode: item.iNode,
              cursor: "pointer"
            },
            id: 'sector' + i
          });
          sector.nodeData = item;
          item.focusEnabled && sector.hover(function () {
            me.focusOf(this.nodeData);
          }, function () {
            !this.nodeData.selected && me.unfocusOf(this.nodeData);
          }); //?????????????????????

          sector.on(event.types.get(), function (e) {
            //me.fire( e.type, e );
            e.eventInfo = {
              trigger: me._graphs.node,
              nodes: [this.nodeData]
            }; //???????????????????????????Tips

            me._graphs.app.fire(e.type, e);
          });
          me.sectorsSp.addChildAt(sector, 0);
          me.sectors.push(sector);
        }

        if (me._graphs.label.enabled) {
          me._startWidgetLabel();
        }
      }
    }
  }, {
    key: "focusOf",
    value: function focusOf(node, callback) {
      if (node.focused) return;
      var me = this;
      var sec = me.sectors[node.iNode];
      sec.animate({
        x: node.outOffsetx,
        y: node.outOffsety
      }, {
        duration: 100,
        onComplete: function onComplete() {
          callback && callback();
        }
      });
      node.focused = true;
    }
  }, {
    key: "unfocusOf",
    value: function unfocusOf(node, callback) {
      if (!node.focused) return;
      var me = this;
      var sec = me.sectors[node.iNode];
      sec.animate({
        x: 0,
        y: 0
      }, {
        duration: 100,
        onComplete: function onComplete() {
          callback && callback();
        }
      });
      node.focused = false;
    }
  }, {
    key: "selectOf",
    value: function selectOf(node) {
      var me = this;

      if (!this.sectors.length || !node.selectEnabled) {
        return;
      }
      var sec = this.sectors[node.iNode];

      if (node.selected) {
        return;
      }

      if (!node.focused) {
        node._focusTigger = "select";
        this.focusOf(node, function () {
          me.addCheckedSec(sec);
        });
      } else {
        this.addCheckedSec(sec);
      }
      node.selected = true;
    }
  }, {
    key: "unselectOf",
    value: function unselectOf(node) {
      var sec = this.sectors[node.iNode];

      if (!node.selected || !node.selectEnabled) {
        return;
      }
      var me = this;
      me.cancelCheckedSec(sec, function () {
        if (node._focusTigger == "select") {
          me.unfocusOf(node);
        }
      });
      node.selected = false;
    }
  }, {
    key: "addCheckedSec",
    value: function addCheckedSec(sec, callback) {
      var secc = sec.context;
      var nodeData = sec.nodeData;
      if (!secc) return;
      var sector = new Sector({
        xyToInt: false,
        context: {
          x: secc.x,
          y: secc.y,
          r0: secc.r - 1,
          r: secc.r + nodeData.selectedR,
          startAngle: secc.startAngle,
          endAngle: secc.startAngle,
          //secc.endAngle,
          fillStyle: secc.fillStyle,
          globalAlpha: nodeData.selectedAlpha
        },
        id: 'selected_' + sec.id
      });
      sec._selectedSec = sector;
      this.selectedSp.addChild(sector);

      if (this.completed) {
        sector.animate({
          endAngle: secc.endAngle
        }, {
          duration: this._getAngleTime(secc),
          onComplete: function onComplete() {
            callback && callback();
          }
        });
      } else {
        sector.context.endAngle = secc.endAngle;
      }
    }
  }, {
    key: "cancelCheckedSec",
    value: function cancelCheckedSec(sec, callback) {
      var selectedSec = sec._selectedSec;
      selectedSec.animate({
        startAngle: selectedSec.context.endAngle - 0.5
      }, {
        duration: this._getAngleTime(sec.context),
        onComplete: function onComplete() {
          delete sec._selectedSec;
          selectedSec.destroy();
          callback && callback();
        }
      });
    }
  }, {
    key: "_getAngleTime",
    value: function _getAngleTime(secc) {
      return Math.abs(secc.startAngle - secc.endAngle) / 360 * 500;
    }
  }, {
    key: "grow",
    value: function grow(callback) {
      var me = this;

      _.each(me.sectors, function (sec) {
        if (sec.context) {
          sec.context.r0 = 0;
          sec.context.r = 0;
          sec.context.startAngle = me._graphs.startAngle;
          sec.context.endAngle = me._graphs.startAngle;
        }
      });

      me._hideGrowLabel();

      var _tween = AnimationFrame.registTween({
        from: {
          process: 0
        },
        to: {
          process: 1
        },
        duration: 500,
        onUpdate: function onUpdate(status) {
          for (var i = 0; i < me.sectors.length; i++) {
            var sec = me.sectors[i];
            var nodeData = sec.nodeData;
            var secc = sec.context;
            var _startAngle = nodeData.startAngle;
            var _endAngle = nodeData.endAngle;
            var _r = nodeData.outRadius;
            var _r0 = nodeData.innerRadius;

            if (secc) {
              secc.r = _r * status.process;
              secc.r0 = _r0 * status.process;

              if (i == 0) {
                secc.startAngle = _startAngle;
                secc.endAngle = _startAngle + (_endAngle - _startAngle) * status.process;
              } else {
                var lastEndAngle = function (iNode) {
                  var lastIndex = iNode - 1;
                  var lastSecc = me.sectors[lastIndex].context;

                  if (lastIndex == 0) {
                    return lastSecc ? lastSecc.endAngle : 0;
                  }

                  if (lastSecc) {
                    return lastSecc.endAngle;
                  } else {
                    return arguments.callee(lastIndex);
                  }
                }(i);

                secc.startAngle = lastEndAngle;
                secc.endAngle = secc.startAngle + (_endAngle - _startAngle) * status.process;
              } //??????????????????????????????????????????


              if (sec._selectedSec) {
                sec._selectedSec.context.r0 = secc.r - 1;
                sec._selectedSec.context.r = secc.r + nodeData.selectedR;
                sec._selectedSec.context.startAngle = secc.startAngle;
                sec._selectedSec.context.endAngle = secc.endAngle;
              }
            }
          }
        },
        onComplete: function onComplete() {
          //?????????me.sprite._tweens.push( _tween );??? ??????????????????
          me.sprite._removeTween(_tween);

          me._showGrowLabel();

          me.completed = true;
          callback && callback();
        }
      });

      me.sprite._tweens.push(_tween);
    }
  }, {
    key: "_widgetLabel",
    value: function _widgetLabel(quadrant, indexs, lmin, rmin, isEnd, ySpaceInfo) {
      var me = this;
      var count = 0;
      var data = me.data.list;
      var minTxtDis = 15;
      var textOffsetX = 5;
      var currentIndex;
      var preY, currentY, adjustX, txtDis, bwidth, bheight, bx, by;
      var yBound, remainingNum, remainingY;
      var isleft = quadrant == 2 || quadrant == 3;
      var isup = quadrant == 3 || quadrant == 4;
      var minY = isleft ? lmin : rmin; //text???????????????????????????text???Y???????????????????????????isup?????????Y???????????????????????????Y???????????????????????????Y??????????????????.

      if (indexs.length > 0) {
        indexs.sort(function (a, b) {
          return isup ? data[a].edgey - data[b].edgey : data[b].edgey - data[a].edgey;
        });
      }

      for (var i = 0; i < indexs.length; i++) {
        currentIndex = indexs[i];
        var itemData = data[currentIndex];
        var outCircleRadius = itemData.outRadius + itemData.moveDis; //???Y???????????????????????????text    

        if (!itemData.enabled || itemData.y < minY || count >= me.textMaxCount) continue;
        count++;
        currentY = itemData.edgey;
        adjustX = Math.abs(itemData.edgex);
        txtDis = currentY - preY;

        if (i != 0 && (Math.abs(txtDis) < minTxtDis || isup && txtDis < 0 || !isup && txtDis > 0)) {
          currentY = isup ? preY + minTxtDis : preY - minTxtDis;

          if (outCircleRadius - Math.abs(currentY) > 0) {
            adjustX = Math.sqrt(Math.pow(outCircleRadius, 2) - Math.pow(currentY, 2));
          }

          if (isleft && -adjustX > itemData.edgex || !isleft && adjustX < itemData.edgex) {
            adjustX = Math.abs(itemData.edgex);
          }
        }

        if (isEnd) {
          yBound = isleft ? ySpaceInfo.left : ySpaceInfo.right;
          remainingNum = indexs.length - i;
          remainingY = isup ? yBound - remainingNum * minTxtDis : yBound + remainingNum * minTxtDis;

          if (isup && currentY > remainingY || !isup && currentY < remainingY) {
            currentY = remainingY;
          }
        }

        preY = currentY;

        if (!isEnd) {
          if (isleft) {
            ySpaceInfo.left = preY;
          } else {
            ySpaceInfo.right = preY;
          }
        }
        var currentX = isleft ? -adjustX - textOffsetX : adjustX + textOffsetX;
        var globalX = currentX + me.origin.x;
        var globalY = currentY + me.origin.y;

        if (globalX > me._graphs.app.width || globalY < 0 || globalY > me._graphs.app.height) {
          return;
        }
        var pathStr = "M" + itemData.centerx + "," + itemData.centery;
        pathStr += "Q" + itemData.outx + "," + itemData.outy + "," + currentX + "," + currentY;
        var path = new Path({
          context: {
            lineType: 'solid',
            path: pathStr,
            lineWidth: 1,
            strokeStyle: itemData.fillStyle
          }
        });
        var textTxt = itemData.labelText;
        var textEle = void 0;

        if (me.domContainer) {
          textEle = document.createElement("div");
          textEle.style.cssText = " ;position:absolute;left:-1000px;top:-1000px;color:" + itemData.fillStyle + "";
          textEle.innerHTML = textTxt;
          me.domContainer.appendChild(textEle);
          bwidth = textEle.offsetWidth;
          bheight = textEle.offsetHeight;
        } else {
          //??????????????????????????????domContainer??? ???????????????cavnas??????
          textEle = new Text(textTxt, {
            context: {
              fillStyle: itemData.fillStyle
            }
          });
          me.textSp.addChild(textEle);
          bwidth = Math.ceil(textEle.getTextWidth());
          bheight = Math.ceil(textEle.getTextHeight());
        }

        bx = isleft ? -adjustX : adjustX;
        by = currentY;

        switch (quadrant) {
          case 1:
            bx += textOffsetX;
            by -= bheight / 2;
            break;

          case 2:
            bx -= bwidth + textOffsetX;
            by -= bheight / 2;
            break;

          case 3:
            bx -= bwidth + textOffsetX;
            by -= bheight / 2;
            break;

          case 4:
            bx += textOffsetX;
            by -= bheight / 2;
            break;
        }

        if (textEle.style) {
          textEle.style.left = bx + me.origin.x + "px";
          textEle.style.top = by + me.origin.y + "px";
        } else if (textEle.context) {
          textEle.context.x = bx;
          textEle.context.y = by;
        }
        me.textSp.addChild(path);
        me.textList.push({
          width: bwidth,
          height: bheight,
          x: bx + me.origin.x,
          y: by + me.origin.y,
          data: itemData,
          textTxt: textTxt,
          textEle: textEle
        });
      }
    }
  }, {
    key: "_startWidgetLabel",
    value: function _startWidgetLabel() {
      var me = this;
      var data = me.data.list;
      var rMinPercentage = 0,
          lMinPercentage = 0,
          rMinY = 0,
          lMinY = 0;
      var quadrantsOrder = [];
      var quadrantInfo = [{
        indexs: [],
        count: 0
      }, {
        indexs: [],
        count: 0
      }, {
        indexs: [],
        count: 0
      }, {
        indexs: [],
        count: 0
      }]; //?????????top?????????

      var widgetInfo = {
        right: {
          startQuadrant: 4,
          endQuadrant: 1,
          clockwise: true,
          indexs: []
        },
        left: {
          startQuadrant: 3,
          endQuadrant: 2,
          clockwise: false,
          indexs: []
        }
      };

      for (var i = 0; i < data.length; i++) {
        var cur = data[i].quadrant;
        quadrantInfo[cur - 1].indexs.push(i);
        quadrantInfo[cur - 1].count++;
      } //1,3?????????????????????????????????


      if (quadrantInfo[0].count > 1) quadrantInfo[0].indexs.reverse();
      if (quadrantInfo[2].count > 1) quadrantInfo[2].indexs.reverse();

      if (quadrantInfo[0].count > quadrantInfo[3].count) {
        widgetInfo.right.startQuadrant = 1;
        widgetInfo.right.endQuadrant = 4;
        widgetInfo.right.clockwise = false;
      }

      if (quadrantInfo[1].count > quadrantInfo[2].count) {
        widgetInfo.left.startQuadrant = 2;
        widgetInfo.left.endQuadrant = 3;
        widgetInfo.left.clockwise = true;
      }

      widgetInfo.right.indexs = quadrantInfo[widgetInfo.right.startQuadrant - 1].indexs.concat(quadrantInfo[widgetInfo.right.endQuadrant - 1].indexs);
      widgetInfo.left.indexs = quadrantInfo[widgetInfo.left.startQuadrant - 1].indexs.concat(quadrantInfo[widgetInfo.left.endQuadrant - 1].indexs);
      var overflowIndexs, sortedIndexs;

      if (widgetInfo.right.indexs.length > me.textMaxCount) {
        sortedIndexs = widgetInfo.right.indexs.slice(0);
        sortedIndexs.sort(function (a, b) {
          return data[b].y - data[a].y;
        });
        overflowIndexs = sortedIndexs.slice(me.textMaxCount);
        rMinPercentage = data[overflowIndexs[0]].percentage;
        rMinY = data[overflowIndexs[0]].y;
      }

      if (widgetInfo.left.indexs.length > me.textMaxCount) {
        sortedIndexs = widgetInfo.left.indexs.slice(0);
        sortedIndexs.sort(function (a, b) {
          return data[b].y - data[a].y;
        });
        overflowIndexs = sortedIndexs.slice(me.textMaxCount);
        lMinPercentage = data[overflowIndexs[0]].percentage;
        lMinY = data[overflowIndexs[0]].y;
      }

      quadrantsOrder.push(widgetInfo.right.startQuadrant);
      quadrantsOrder.push(widgetInfo.right.endQuadrant);
      quadrantsOrder.push(widgetInfo.left.startQuadrant);
      quadrantsOrder.push(widgetInfo.left.endQuadrant);
      var ySpaceInfo = {};

      for (var _i = 0; _i < quadrantsOrder.length; _i++) {
        var isEnd = _i == 1 || _i == 3;

        me._widgetLabel(quadrantsOrder[_i], quadrantInfo[quadrantsOrder[_i] - 1].indexs, lMinY, rMinY, isEnd, ySpaceInfo);
      }
    }
  }, {
    key: "destroyLabel",
    value: function destroyLabel() {
      var me = this;

      if (this.textSp) {
        this.textSp.removeAllChildren();
      }

      _.each(this.textList, function (lab) {
        if (me.domContainer) {
          me.domContainer.removeChild(lab.textEle);
        }
      });

      this.textList = [];
    }
  }, {
    key: "_showGrowLabel",
    value: function _showGrowLabel() {
      if (this.textSp && this.textSp.context) {
        this.textSp.context.globalAlpha = 1;

        _.each(this.textList, function (lab) {
          if (lab.textEle.style) {
            lab.textEle.style.visibility = "visible";
          }
        });
      }
    }
  }, {
    key: "_hideGrowLabel",
    value: function _hideGrowLabel() {
      if (this.textSp && this.textSp.context) {
        this.textSp.context.globalAlpha = 0;

        _.each(this.textList, function (lab) {
          if (lab.textEle.style) {
            lab.textEle.style.visibility = "hidden";
          }
        });
      }
    }
  }]);
  return Pie;
}(event.Dispatcher);

exports["default"] = Pie;
});

unwrapExports(pie);

var graphs = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _component = interopRequireDefault(component);

var _canvax$$1 = interopRequireDefault(_canvax);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AnimationFrame = _canvax$$1["default"].AnimationFrame;
var _ = _canvax$$1["default"]._;

var GraphsBase = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GraphsBase, _Component);

  var _super = _createSuper(GraphsBase);

  function GraphsBase(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, GraphsBase);
    _this = _super.call(this, opt, app); //???????????????opt???extend???this

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(GraphsBase.defaultProps()));

    _this.name = "graphs"; //???????????????opts??????????????? group

    _this._opt = opt || {};
    _this.app = app;
    _this.ctx = app.stage.canvas.getContext("2d");
    _this.dataFrame = app.dataFrame; //app.dataFrame?????????

    _this.data = null; //??????graphs?????????_trimGraphs?????????

    _this.width = 0;
    _this.height = 0;
    _this.origin = {
      x: 0,
      y: 0
    };
    _this.inited = false;
    _this.sprite = new _canvax$$1["default"].Display.Sprite({
      name: "graphs_" + opt.type
    });

    _this.app.graphsSprite.addChild(_this.sprite);

    _this._growTween = null;
    var me = (0, _assertThisInitialized2["default"])(_this);

    _this.sprite.on("destroy", function () {
      if (me._growTween) {
        AnimationFrame.destroyTween(me._growTween);
        me._growTween = null;
      }
    });

    return _this;
  }

  (0, _createClass2["default"])(GraphsBase, [{
    key: "tipsPointerOf",
    value: function tipsPointerOf(e) {}
  }, {
    key: "tipsPointerHideOf",
    value: function tipsPointerHideOf(e) {}
  }, {
    key: "focusAt",
    value: function focusAt(ind, field) {}
  }, {
    key: "unfocusAt",
    value: function unfocusAt(ind, field) {}
  }, {
    key: "selectAt",
    value: function selectAt(ind, field) {}
  }, {
    key: "unselectAt",
    value: function unselectAt(ind, field) {} //??????????????? ?????????

  }, {
    key: "getSelectedList",
    value: function getSelectedList() {
      return [];
    } //??????????????? ?????????, ?????????????????????????????????????????????????????????????????????????????????????????????

  }, {
    key: "getSelectedRowList",
    value: function getSelectedRowList() {
      return [];
    }
  }, {
    key: "hide",
    value: function hide(field) {}
  }, {
    key: "show",
    value: function show(field) {}
  }, {
    key: "getLegendData",
    value: function getLegendData() {} //????????????, ????????????????????????this??????????????????graphs?????????

  }, {
    key: "triggerEvent",
    value: function triggerEvent(e) {
      var trigger = e.eventInfo.trigger || this;
      var fn = trigger["on" + e.type];

      if (fn && _.isFunction(fn)) {
        //????????????pie????????????????????????????????????????????????
        if (e.eventInfo && e.eventInfo.nodes && e.eventInfo.nodes.length) {
          //?????????nodes?????????e.eventInfo?????????????????????????????????????????????nodes???????????????????????????????????????????????????
          if (e.eventInfo.nodes.length == 1) {
            fn.apply(this, [e, e.eventInfo.nodes[0]]);
          } else {
            fn.apply(this, [e, e.eventInfo.nodes]);
          }
        } else {
          /*
          let _arr = [];
          _.each( arguments, function(item, i){
              if( !!i ){
                  _arr.push( item );
              }
          } );
          */
          fn.apply(this, arguments);
        }
      }
    } //??????graphs?????????grow

  }, {
    key: "grow",
    value: function grow(callback, opt) {
      !opt && (opt = {});
      var me = this;
      var duration = this.aniDuration;

      if (!this.animation) {
        duration = 0;
      }
      var from = 0;
      var to = 1;
      if ("from" in opt) from = opt.from;
      if ("to" in opt) to = opt.to;
      this._growTween = AnimationFrame.registTween({
        from: {
          process: from
        },
        to: {
          process: to
        },
        duration: duration,
        onUpdate: function onUpdate(status) {
          _.isFunction(callback) && callback(status.process);
        },
        onComplete: function onComplete() {
          this._growTween = null;
          me.fire("complete");
        }
      });
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        type: {
          detail: '????????????',
          "default": "",
          insertText: "type: ",
          values: ["bar", "line", "pie", "scat"] //????????????index??????????????????

        },
        animation: {
          detail: '????????????????????????',
          "default": true
        },
        aniDuration: {
          detail: '????????????',
          "default": 500
        }
      };
    }
  }]);
  return GraphsBase;
}(_component["default"]);

exports["default"] = GraphsBase;
});

unwrapExports(graphs);

var pie$2 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _pie = interopRequireDefault(pie);

var _index = interopRequireDefault(graphs);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PieGraphs = /*#__PURE__*/function (_GraphsBase) {
  (0, _inherits2["default"])(PieGraphs, _GraphsBase);

  var _super = _createSuper(PieGraphs);

  function PieGraphs(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, PieGraphs);
    _this = _super.call(this, opt, app);
    _this.type = "pie";

    _canvax._.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(PieGraphs.defaultProps()), opt);

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(PieGraphs, [{
    key: "init",
    value: function init() {
      //???????????????data?????????legend???????????????
      this.data = this._dataHandle();
    }
  }, {
    key: "_computerProps",
    value: function _computerProps() {
      var w = this.width;
      var h = this.height; //?????????????????????????????? outRadius ???innerRadius ------------

      if (!this.node.outRadius) {
        var outRadius = Math.min(w, h) / 2;

        if (this.label.enabled) {
          //?????????moveDis?????????hover sector ???????????????
          outRadius -= this.node.moveDis;
        }
        this.node.outRadius = parseInt(outRadius);
      }

      if (this.node.radius !== null && _canvax._.isNumber(this.node.radius)) {
        //??????????????????????????? radius?????????radius?????????????????????
        this.node.radius = Math.max(this.node.radius, this.node.minRadius); //this.node.outRadius = this.node.innerRadius + this.node.radius;

        this.node.innerRadius = this.node.outRadius - this.node.radius;
      }

      if (this.node.outRadius - this.node.innerRadius < this.node.minRadius) {
        this.node.innerRadius = this.node.outRadius - this.node.minRadius;
      }

      if (this.node.innerRadius < 0) {
        this.node.innerRadius = 0;
      }
    }
    /**
     * opt ==> {width,height,origin}
     */

  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {});

      _canvax._.extend(true, this, opt);

      this._computerProps(); //?????????????????????????????????????????????layoutdata???


      this._pie = new _pie["default"](this, this._trimGraphs(this.data));

      this._pie.draw(opt);

      var me = this;

      if (this.animation && !opt.resize) {
        this._pie.grow(function () {
          me.fire("complete");
        });
      } else {
        this.fire("complete");
      }

      this.sprite.addChild(this._pie.sprite);
    }
  }, {
    key: "show",
    value: function show(label) {
      this._setEnabled(label, true);
    }
  }, {
    key: "hide",
    value: function hide(label) {
      this._setEnabled(label, false);
    }
  }, {
    key: "_setEnabled",
    value: function _setEnabled(label, status) {
      var me = this;

      _canvax._.each(this.data, function (item) {
        if (item.label === label) {
          item.enabled = status;
          return false;
        }
      });

      me._pie.resetData(me._trimGraphs(me.data));
    }
  }, {
    key: "_dataHandle",
    value: function _dataHandle() {
      var me = this; //let _coord = me.app.getComponent({name:'coord'});

      var data = [];
      var dataFrame = me.dataFrame;

      for (var i = 0, l = dataFrame.length; i < l; i++) {
        var rowData = dataFrame.getRowDataAt(i);
        var layoutData = {
          type: "pie",
          rowData: rowData,
          //????????????????????????layoutData????????????
          focused: false,
          //???????????????????????????
          focusEnabled: me.node.focus.enabled,
          selected: false,
          //????????????
          selectEnabled: me.node.select.enabled,
          selectedR: me.node.select.radius,
          selectedAlpha: me.node.select.alpha,
          enabled: true,
          //?????????????????????????????????
          fillStyle: null,
          color: null,
          //??????color??????????????????tips???
          value: rowData[me.field],
          label: rowData[me.groupField || me.label.field || me.field],
          labelText: null,
          //????????????????????????,label format????????????
          iNode: i
        }; //????????????

        var color = me._getColor(me.node.fillStyle, layoutData);

        layoutData.fillStyle = layoutData.color = color;
        data.push(layoutData);
      }

      if (data.length && me.sort) {
        data.sort(function (a, b) {
          if (me.sort == 'asc') {
            return a.value - b.value;
          } else {
            return b.value - a.value;
          }
        }); //???????????????ind

        _canvax._.each(data, function (d, i) {
          d.iNode = i;
        });
      }
      return data;
    }
  }, {
    key: "_trimGraphs",
    value: function _trimGraphs(data) {
      var me = this;
      var total = 0;
      me.currentAngle = 0 + me.startAngle % 360; //me.allAngle;

      var limitAngle = me.allAngle + me.startAngle % me.allAngle;
      var percentFixedNum = 2; //?????????????????????node.r?????????????????????????????????

      var maxRval = 0;
      var minRval = 0;

      if (data.length) {
        //???????????????value?????????
        for (var i = 0; i < data.length; i++) {
          //enabled???false???secData???????????????
          if (!data[i].enabled) continue;
          total += data[i].value;

          if (me.node.radius && _canvax._.isString(me.node.radius) && me.node.radius in data[i].rowData) {
            var _r = Number(data[i].rowData[me.node.radius]);

            maxRval = Math.max(maxRval, _r);
            minRval = Math.min(minRval, _r);
          }
        }

        if (total > 0) {
          for (var j = 0; j < data.length; j++) {
            var percentage = data[j].value / total; //enabled???false???sec?????????????????????0

            if (!data[j].enabled) {
              percentage = 0;
            }
            var fixedPercentage = +(percentage * 100).toFixed(percentFixedNum);
            var angle = me.allAngle * percentage;
            var endAngle = me.currentAngle + angle > limitAngle ? limitAngle : me.currentAngle + angle;
            var cosV = Math.cos((me.currentAngle + angle / 2) / 180 * Math.PI);
            var sinV = Math.sin((me.currentAngle + angle / 2) / 180 * Math.PI);
            var midAngle = me.currentAngle + angle / 2; //cosV = cosV.toFixed(5);
            //sinV = sinV.toFixed(5);

            var quadrant = function (ang) {
              if (ang >= limitAngle) {
                ang = limitAngle;
              }

              ang = ang % me.allAngle;
              var angleRatio = parseInt(ang / 90);

              if (ang >= 0) {
                switch (angleRatio) {
                  case 0:
                    return 1;

                  case 1:
                    return 2;

                  case 2:
                    return 3;

                  case 3:
                  case 4:
                    return 4;
                }
              } else if (ang < 0) {
                switch (angleRatio) {
                  case 0:
                    return 4;

                  case -1:
                    return 3;

                  case -2:
                    return 2;

                  case -3:
                  case -4:
                    return 1;
                }
              }
            }(midAngle);

            var outRadius = me.node.outRadius;

            if (me.node.radius && _canvax._.isString(me.node.radius) && me.node.radius in data[j].rowData) {
              var _rr = Number(data[j].rowData[me.node.radius]);

              outRadius = parseInt((me.node.outRadius - me.node.innerRadius) * ((_rr - minRval) / (maxRval - minRval)) + me.node.innerRadius);
            }
            var moveDis = me.node.moveDis;

            _canvax._.extend(data[j], {
              outRadius: outRadius,
              innerRadius: me.node.innerRadius,
              startAngle: me.currentAngle,
              //????????????
              endAngle: endAngle,
              //????????????
              midAngle: midAngle,
              //????????????
              moveDis: moveDis,
              outOffsetx: moveDis * 0.7 * cosV,
              //focus?????????????????????????????????x
              outOffsety: moveDis * 0.7 * sinV,
              //focus?????????????????????????????????y
              centerx: outRadius * cosV,
              centery: outRadius * sinV,
              outx: (outRadius + moveDis) * cosV,
              outy: (outRadius + moveDis) * sinV,
              edgex: (outRadius + moveDis) * cosV,
              edgey: (outRadius + moveDis) * sinV,
              orginPercentage: percentage,
              percentage: fixedPercentage,
              quadrant: quadrant,
              //??????
              labelDirection: quadrant == 1 || quadrant == 4 ? 1 : 0,
              iNode: j
            }); //???????????????????????????label???????????????????????????label??????????????????


            data[j].labelText = me._getLabelText(data[j]);
            me.currentAngle += angle;

            if (me.currentAngle > limitAngle) {
              me.currentAngle = limitAngle;
            }
          }
        }
      }

      return {
        list: data,
        total: total
      };
    }
  }, {
    key: "_getColor",
    value: function _getColor(prop, layoutData) {
      var me = this;
      var iNode = layoutData.iNode;
      var color = prop;

      if (_canvax._.isArray(prop)) {
        color = prop[iNode];
      }

      if (_canvax._.isFunction(prop)) {
        color = prop.apply(this, [layoutData]);
      }

      if (!color) {
        color = me.app.getTheme(iNode);
      }
      return color;
    }
  }, {
    key: "_getLabelText",
    value: function _getLabelText(itemData) {
      var str;

      if (this.label.enabled) {
        if (this.label.format) {
          if (_canvax._.isFunction(this.label.format)) {
            str = this.label.format(itemData.label, itemData);
          }
        } else {
          var _field = this.label.field || this.groupField;

          if (_field) {
            str = itemData.rowData[_field] + "???" + itemData.percentage + "%";
          } else {
            str = itemData.percentage + "%";
          }
        }
      }

      return str;
    }
  }, {
    key: "getList",
    value: function getList() {
      return this.data;
    }
  }, {
    key: "getLegendData",
    value: function getLegendData() {
      //return this.data;
      var legendData = [];

      _canvax._.each(this.data, function (item) {
        legendData.push({
          name: item.label,
          color: item.fillStyle,
          enabled: item.enabled
        });
      });

      return legendData;
    }
  }, {
    key: "tipsPointerOf",
    value: function tipsPointerOf() {}
  }, {
    key: "tipsPointerHideOf",
    value: function tipsPointerHideOf() {}
  }, {
    key: "focusAt",
    value: function focusAt(ind) {
      var nodeData = this._pie.data.list[ind];
      if (!this.node.focus.enabled) return;

      this._pie.focusOf(nodeData);
    }
  }, {
    key: "unfocusAt",
    value: function unfocusAt(ind) {
      var nodeData = this._pie.data.list[ind];
      if (!nodeData.node.focus.enabled) return;

      this._pie.unfocusOf(nodeData);
    }
  }, {
    key: "selectAt",
    value: function selectAt(ind) {
      var nodeData = this._pie.data.list[ind];
      if (!this.node.select.enabled) return;

      this._pie.selectOf(nodeData);
    }
  }, {
    key: "unselectAt",
    value: function unselectAt(ind) {
      var nodeData = this._pie.data.list[ind];
      if (!this.node.select.enabled) return;

      this._pie.unselectOf(nodeData);
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        field: {
          detail: '????????????',
          "default": null
        },
        groupField: {
          detail: '????????????',
          "default": null,
          documentation: 'groupField????????????legend????????? ?????????legend???????????????????????????????????????groupField'
        },
        sort: {
          detail: '??????????????????????????????????????????asc,desc',
          "default": null
        },
        startAngle: {
          detail: '????????????',
          "default": -90
        },
        allAngle: {
          detail: '????????????',
          "default": 360
        },
        node: {
          detail: '??????????????????????????????',
          propertys: {
            radius: {
              detail: '??????',
              "default": null,
              documentation: '???????????????????????????????????????????????????????????????????????????????????????'
            },
            innerRadius: {
              detail: '??????',
              "default": 0
            },
            outRadius: {
              detail: '??????',
              "default": null
            },
            minRadius: {
              detail: '?????????????????????',
              "default": 10,
              documentation: 'outRadius - innerRadius ??? ?????????radius????????????'
            },
            moveDis: {
              detail: 'hover?????????',
              "default": 15,
              documentation: '?????????moveDis?????????hover sector ???????????????'
            },
            fillStyle: {
              detail: '?????????????????????',
              "default": null
            },
            focus: {
              detail: '?????????hover??????',
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": true
                }
              }
            },
            select: {
              detail: '?????????????????????',
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": true
                },
                radius: {
                  detail: '?????????????????????????????????',
                  "default": 5
                },
                alpha: {
                  detail: '??????????????????????????????',
                  "default": 0.7
                }
              }
            }
          }
        },
        label: {
          detail: 'label',
          propertys: {
            field: {
              detail: '??????label?????????',
              "default": null
            },
            enabled: {
              detail: '????????????',
              "default": false
            },
            format: {
              detail: 'label???????????????????????????html',
              "default": null
            }
          }
        }
      };
    }
  }]);
  return PieGraphs;
}(_index["default"]);

_index["default"].registerComponent(PieGraphs, 'graphs', 'pie');

var _default = PieGraphs;
exports["default"] = _default;
});

unwrapExports(pie$2);

var group = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _canvax$$1 = interopRequireDefault(_canvax);



var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Circle = _canvax$$1["default"].Shapes.Circle;

var PlanetGroup = /*#__PURE__*/function () {
  function PlanetGroup(opt, dataFrame, _graphs) {
    (0, _classCallCheck2["default"])(this, PlanetGroup);
    this._opt = opt;
    this.dataFrame = dataFrame;
    this._graphs = _graphs;
    this.app = _graphs.app;
    this.field = null;
    this.iGroup = 0;
    this.groupLen = 1; //?????????????????????????????????

    this.rRange = {
      start: 0,
      to: 0
    };
    this.width = 0;
    this.height = 0;
    this.selectInds = []; //???????????????index????????????????????????selectInds ??????

    this.layoutType = "radian"; //????????????????????????

    this.pit = {
      radius: 30
    };
    this.planets = [];
    this.maxRingNum = 0;
    this.ringNum = 0;

    _.extend(true, this, (0, tools.getDefaultProps)(PlanetGroup.defaultProps()), opt); //circle.maxRadius ???????????????????????? ?????? pit.radius


    if (this.node.maxRadius > this.pit.radius) {
      this.pit.radius = this.node.maxRadius;
    }
    this.init();
  }

  (0, _createClass2["default"])(PlanetGroup, [{
    key: "init",
    value: function init() {
      //let me = this;
      var _coord = this.app.getComponent({
        name: 'coord'
      });

      this.sprite = new _canvax$$1["default"].Display.Sprite({
        id: "group_" + this.iGroup,
        context: {
          x: _coord.origin.x,
          y: _coord.origin.y
        }
      });

      this._trimGraphs();

      this.draw();
    }
  }, {
    key: "_trimGraphs",
    value: function _trimGraphs() {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      var _coordMaxDis = _coord.getMaxDisToViewOfOrigin();

      if ((_coordMaxDis - this.rRange.to) / (this.pit.radius * 2) < this.groupLen - 1 - this.iGroup) {
        //??????????????????group??????????????????ringNum
        this.rRange.to = _coordMaxDis - (this.groupLen - 1 - this.iGroup) * this.pit.radius * 2;
      }

      if (this.rRange.to - this.rRange.start < this.pit.radius * 2) {
        this.rRange.to = this.rRange.start + this.pit.radius * 2;
      }

      if (!this.maxRingNum) {
        this.maxRingNum = parseInt((this.rRange.to - this.rRange.start) / (this.pit.radius * 2), 10);
        /* TODO: ?????????????????????
        //???????????????10?????????????????????????????????8?????? ????????? ????????????????????????8ring
        //this.ringNum = Math.min( this.maxRingNum , this.dataFrame.length );
        */

        this.ringNum = this.maxRingNum;
      }

      this.rRange.to = this.rRange.start + this.ringNum * this.pit.radius * 2; //??????????????????n?????????

      var planets = [];
      var dataLen = this.dataFrame.length;

      for (var i = 0; i < dataLen; i++) {
        var rowData = this.dataFrame.getRowDataAt(i);
        var planetLayoutData = {
          type: "planet",
          groupLen: this.groupLen,
          iGroup: me.iGroup,
          iNode: i,
          nodeElement: null,
          //canvax??????
          labelElement: null,
          //label???canvax??????
          rowData: rowData,
          //?????????????????????????????????????????????????????????
          iRing: null,
          iPlanet: null,
          fillStyle: null,
          color: null,
          //???tips???
          strokeStyle: null,
          pit: null,
          //????????????planet????????????????????? pit ????????????????????????
          ringInd: -1,
          field: me.field,
          label: rowData[me.field],
          focused: false,
          selected: !!~_.indexOf(this.selectInds, rowData.__index__)
        };
        planets.push(planetLayoutData);
      }

      if (me.sortField) {
        planets = planets.sort(function (a, b) {
          var field = me.sortField;

          if (me.sort == "desc") {
            return b.rowData[field] - a.rowData[field];
          } else {
            return a.rowData[field] - b.rowData[field];
          }
        }); //????????? ??????????????? iNode

        _.each(planets, function (planet, i) {
          planet.iNode = i;
        });
      }
      this._rings = this["_setRings_" + this.layoutType + "Range"](planets);
      this.planets = planets;
    } //???????????????????????????????????????????????????????????????

  }, {
    key: "_setRings_radianRange",
    value: function _setRings_radianRange(planets) {
      var me = this;
      var _rings = [];

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      for (var i = 0, l = this.ringNum; i < l; i++) {
        var _r = i * this.pit.radius * 2 + this.pit.radius + this.rRange.start;

        if (!me._graphs.center.enabled) {
          _r = i * this.pit.radius * 2 + this.rRange.start;
        }

        var arcs = _coord.getRadiansAtR(_r, me.width, me.height); //????????????begin---------------------------------------------------
        //??????????????????????????????

        /*
        _.each( arcs, function( arc ){
            let sector = new Canvax.Shapes.Sector({
                context: {
                    r: _r,
                    startAngle: arc[0].radian*180/Math.PI,
                    endAngle: arc[1].radian*180/Math.PI, //secc.endAngle,
                    strokeStyle: "#ccc",
                    lineWidth:1
                },
            });
            me.sprite.addChild( sector );
        } );
        */
        //????????????end------------------------------------------------------
        //???????????????????????????????????????????????????????????????
        //let minRadianItem = Math.atan( this.pit.radius / _r );


        _rings.push({
          arcs: arcs,
          pits: [],
          //?????????
          planets: [],
          //?????????????????????
          radius: _r,
          //??????ring?????????????????????
          max: 0 //???????????????????????????????????? planet ??????

        });
      }
      var allplanetsMax = 0; //??????ring??????
      //????????????????????????????????????????????????,??????????????????????????????????????????
      //?????????????????????????????? planets ??????????????????????????????

      _.each(_rings, function (ring) {
        //????????????????????????????????????????????????????????????????????????
        //??????????????????????????????
        var minRadian = Math.asin(me.pit.radius / ring.radius) * 2;

        if (ring.radius == 0) {
          //??????????????????
          minRadian = Math.PI * 2;
        }
        var _count = 0;

        _.each(ring.arcs, function (arc) {
          var _adiff = me._getDiffRadian(arc[0].radian, arc[1].radian);

          if (_adiff >= minRadian) {
            var _arc_count = parseInt(_adiff / minRadian, 10);

            _count += _arc_count; //????????????????????????_count?????????

            for (var p = 0; p < _arc_count; p++) {
              var pit = {
                hasRadish: false,
                //?????????????????????(?????????????????????)
                start: (arc[0].radian + minRadian * p + Math.PI * 2) % (Math.PI * 2)
              };
              pit.middle = (pit.start + minRadian / 2 + Math.PI * 2) % (Math.PI * 2);
              pit.to = (pit.start + minRadian + Math.PI * 2) % (Math.PI * 2);
              ring.pits.push(pit); //????????????????????????begin---------------------------------------------

              /*
              let point = me.app.getComponent({name:'coord'}).getPointInRadianOfR( pit.middle , ring.radius )
              me.sprite.addChild(new Circle({
                  context:{
                      x : point.x,
                      y : point.y,
                      r : me.pit.radius,
                      fillStyle: "#ccc",
                      strokeStyle: "red",
                      lineWidth: 1,
                      globalAlpha:0.3
                  }
              }));
              */
              //????????????????????????end-----------------------------------------------     
            }
          }
        });

        ring.max = _count;
        allplanetsMax += _count; //????????????????????????

        ring.pits = _.shuffle(ring.pits);
      }); //allplanetsMax???????????????????????? ???????????????ring????????? planet ???


      var preAllCount = 0;

      _.each(_rings, function (ring, i) {
        if (preAllCount >= planets.length) {
          return false;
        }
        var num = Math.ceil(ring.max / allplanetsMax * planets.length);
        num = Math.min(ring.max, num);
        ring.planets = planets.slice(preAllCount, preAllCount + num);

        if (i == _rings.length - 1) {
          ring.planets = planets.slice(preAllCount);
        }
        preAllCount += num; //?????????????????????????????????

        _.each(ring.planets, function (planet, ii) {
          if (ii >= ring.pits.length) {
            //???????????????????????????ring???????????????????????????????????? ????????????
            return;
          }

          var pits = _.filter(ring.pits, function (pit) {
            return !pit.hasRadish;
          });

          var targetPit = pits[parseInt(Math.random() * pits.length)];
          targetPit.hasRadish = true;
          planet.pit = targetPit;
        });
      });

      return _rings;
    }
  }, {
    key: "_getDiffRadian",
    value: function _getDiffRadian(_start, _to) {
      var _adiff = _to - _start;

      if (_to < _start) {
        _adiff = (_to + Math.PI * 2 - _start) % (Math.PI * 2);
      }

      return _adiff;
    } //????????????????????? ?????????

  }, {
    key: "_setRings_indexRange",
    value: function _setRings_indexRange() {} //??????????????????
    //todo:????????????????????????????????????????????????????????? ?????????

  }, {
    key: "_setRings_valRange",
    value: function _setRings_valRange() {}
  }, {
    key: "draw",
    value: function draw() {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      _.each(this._rings, function (ring, i) {
        var _ringCtx = {
          rotation: 0
        };

        if (ring.arcs.length == 1 && ring.arcs[0][0].radian == 0 && ring.arcs[0][1].radian == Math.PI * 2) {
          //?????????????????????????????????????????????????????????????????????
          _ringCtx.rotation = parseInt(Math.random() * 360);
        }

        var _ringSp = new _canvax$$1["default"].Display.Sprite({
          context: _ringCtx
        });

        _.each(ring.planets, function (p, ii) {
          if (!p.pit) {
            //??????????????????????????????????????????????????????????????????????????????
            return;
          }

          var point = _coord.getPointInRadianOfR(p.pit.middle, ring.radius);

          var r = me._getRProp(me.node.radius, i, ii, p); //???????????????????????????pit????????????pit???????????????????????????????????????r???


          var _transR = me.node.maxRadius - r; //????????????pit?????????????????????????????????????????????Point


          var _randomTransR = parseInt(Math.random() * _transR);

          var _randomAngle = parseInt(Math.random() * 360);

          var _randomRadian = _randomAngle * Math.PI / 180;

          if (_randomTransR != 0) {
            //???????????????????????? ????????????????????????point
            point.x += Math.sin(_randomRadian) * _randomTransR;
            point.y += Math.cos(_randomRadian) * _randomTransR;
          }
          var node = me.node;

          if (p.selected) {
            node = me.node.select;
          }

          var _fillStyle = me._getProp(me.node.fillStyle, p);

          var _strokeStyle = me._getProp(node.strokeStyle, p);

          var _lineAlpha = me._getProp(node.strokeAlpha, p);

          var _lineWidth = me._getProp(node.lineWidth, p);

          var circleCtx = {
            x: point.x,
            y: point.y,
            r: r,
            fillStyle: _fillStyle,
            lineWidth: _lineWidth,
            strokeStyle: _strokeStyle,
            strokeAlpha: _lineAlpha,
            cursor: "pointer"
          }; //?????????p?????????fillStyle ??? strokeStyle

          p.color = p.fillStyle = _fillStyle;
          p.strokeStyle = _strokeStyle;
          p.iRing = i;
          p.iPlanet = ii;

          var _circle = new Circle({
            hoverClone: false,
            context: circleCtx
          });

          _circle.on(event.types.get(), function (e) {
            e.eventInfo = {
              title: null,
              trigger: me.node,
              nodes: [this.nodeData]
            };

            if (this.nodeData.label) {
              e.eventInfo.title = this.nodeData.label;
            }

            if (me.node.focus.enabled) {
              if (e.type == "mouseover") {
                me.focusAt(this.nodeData);
              }

              if (e.type == "mouseout") {
                me.unfocusAt(this.nodeData);
              }
            }

            if (me.node.select.enabled && e.type == me.node.select.triggerEventType) {
              //????????????????????????????????????
              //TODO:????????????
              var onbefore = me.node.select.onbefore;
              var onend = me.node.select.onend;

              if (!onbefore || typeof onbefore == 'function' && onbefore.apply(me, [this.nodeData]) !== false) {
                if (this.nodeData.selected) {
                  //?????????????????????
                  me.unselectAt(this.nodeData);
                } else {
                  me.selectAt(this.nodeData);
                }

                onend && typeof onend == 'function' && onend.apply(me, [this.nodeData]);
              }
            }

            me.app.fire(e.type, e);
          }); //???????????????????????????


          _circle.nodeData = p;
          p.nodeElement = _circle;
          _circle.ringInd = i;
          _circle.planetIndInRing = ii;

          _ringSp.addChild(_circle); //???????????????????????????


          if (me._graphs.animation) {
            var _r = _circle.context.r;
            var _globalAlpha = _circle.context.globalAlpha;
            _circle.context.r = 1;
            _circle.context.globalAlpha = 0.1;

            _circle.animate({
              r: _r,
              globalAlpha: _globalAlpha
            }, {
              delay: Math.round(Math.random() * 1500),
              onComplete: function onComplete() {
                //??????????????????label????????????
                _circle.labelElement && (_circle.labelElement.context.visible = true);

                var _cloneNode = _circle.clone();

                _ringSp.addChildAt(_cloneNode, 0);

                _cloneNode.animate({
                  r: _r + 10,
                  globalAlpha: 0
                }, {
                  onComplete: function onComplete() {
                    _cloneNode.destroy();
                  }
                });
              }
            });
          }
          //??????????????????????????????
          //x,y ????????????????????????????????????position == 'center'

          var _labelCtx = {
            x: point.x,
            y: point.y,
            //point.y + r +3
            fontSize: me.label.fontSize,
            textAlign: me.label.textAlign,
            textBaseline: me.label.verticalAlign,
            fillStyle: me.label.fontColor,
            rotation: -_ringCtx.rotation,
            rotateOrigin: {
              x: 0,
              y: 0 //-(r + 3)

            }
          };

          var _label = new _canvax$$1["default"].Display.Text(p.label, {
            context: _labelCtx
          });

          var _labelWidth = _label.getTextWidth();

          var _labelHeight = _label.getTextHeight();

          if (_labelWidth > r * 2) {
            _labelCtx.fontSize = me.label.fontSize - 3;
          }
          //?????????function??????????????????????????????
          //?????????????????????center,bottom,auto?????????????????????????????????????????????

          if (_.isFunction(me.label.position)) {
            var _pos = me.label.position({
              node: _circle,
              circleR: r,
              circleCenter: {
                x: point.x,
                y: point.y
              },
              textWidth: _labelWidth,
              textHeight: _labelHeight
            });

            _labelCtx.rotation = -_ringCtx.rotation;
            _labelCtx.rotateOrigin = {
              x: -(_pos.x - _labelCtx.x),
              y: -(_pos.y - _labelCtx.y)
            };
            _labelCtx.x = _pos.x;
            _labelCtx.y = _pos.y;
          }

          if (me.label.position == 'auto') {
            if (_labelWidth > r * 2) {
              setPositionToBottom();
            }
          }

          if (me.label.position == 'bottom') {
            setPositionToBottom();
          }

          function setPositionToBottom() {
            _labelCtx.y = point.y + r + 3; //_labelCtx.textBaseline = "top";

            _labelCtx.rotation = -_ringCtx.rotation;
            _labelCtx.rotateOrigin = {
              x: 0,
              y: -(r + _labelHeight * 0.7)
            };
          }
          _labelCtx.x += me.label.offsetX;
          _labelCtx.y += me.label.offsetY; //TODO:??????????????????????????????????????? _label.context. ?????????
          //?????????????????????canvax??????????????????????????????????????????

          _label = new _canvax$$1["default"].Display.Text(p.label, {
            context: _labelCtx
          }); //???????????????????????????

          _circle.labelElement = _label;
          _label.nodeData = p;
          p.labelElement = _label;

          if (me._graphs.animation) {
            _label.context.visible = false;
          }

          _ringSp.addChild(_label);
        });

        me.sprite.addChild(_ringSp);
      });
    }
  }, {
    key: "_getRProp",
    value: function _getRProp(r, ringInd, iNode, nodeData) {
      var me = this;

      if (_.isString(r) && _.indexOf(me.dataFrame.fields, r) > -1) {
        if (this.__rValMax == undefined && this.__rValMax == undefined) {
          this.__rValMax = 0;
          this.__rValMin = 0;

          _.each(me.planets, function (planet) {
            me.__rValMax = Math.max(me.__rValMax, planet.rowData[r]);
            me.__rValMin = Math.min(me.__rValMin, planet.rowData[r]);
          });
        }
        var rVal = nodeData.rowData[r];
        return me.node.minRadius + (rVal - this.__rValMin) / (this.__rValMax - this.__rValMin) * (me.node.maxRadius - me.node.minRadius);
      }
      return me._getProp(r, nodeData);
    }
  }, {
    key: "_getProp",
    value: function _getProp(p, nodeData) {
      var iGroup = this.iGroup;

      if (_.isFunction(p)) {
        return p.apply(this, [nodeData, iGroup]); //return p( nodeData );
      }
      return p;
    }
  }, {
    key: "getPlanetAt",
    value: function getPlanetAt(target) {
      var planet = target;

      if (_.isNumber(target)) {
        _.each(this.planets, function (_planet) {
          if (_planet.rowData.__index__ == target) {
            planet = _planet;
            return false;
          }
        });
      }
      return planet;
    } //?????????ind????????????__index__

  }, {
    key: "selectAt",
    value: function selectAt(ind) {
      if (!this.node.select.enabled) return;
      var planet = this.getPlanetAt(ind);
      planet.selected = true; //?????????????????????????????????????????????nodeElement

      if (planet.nodeElement) {
        planet.nodeElement.context.lineWidth = this._getProp(this.node.select.lineWidth, planet);
        planet.nodeElement.context.strokeStyle = this._getProp(this.node.select.strokeStyle, planet);
        planet.nodeElement.context.strokeAlpha = this._getProp(this.node.select.strokeAlpha, planet);
      }

      for (var i = 0; i < this.selectInds.length; i++) {
        if (ind === this.selectInds[i]) {
          this.selectInds.splice(i--, 1);
          break;
        }
      }
    } //?????????ind????????????__index__

  }, {
    key: "unselectAt",
    value: function unselectAt(ind) {
      if (!this.node.select.enabled) return;
      var planet = this.getPlanetAt(ind);
      planet.selected = false;

      if (planet.nodeElement) {
        planet.nodeElement.context.lineWidth = this._getProp(this.node.lineWidth, planet);
        planet.nodeElement.context.strokeAlpha = this._getProp(this.node.strokeAlpha, planet);
      }
      this.selectInds.push(ind);
    }
  }, {
    key: "getSelectedNodes",
    value: function getSelectedNodes() {
      return _.filter(this.planets, function (planet) {
        return planet.selected;
      });
    }
  }, {
    key: "focusAt",
    value: function focusAt(ind) {
      if (!this.node.focus.enabled) return;
      var planet = this.getPlanetAt(ind);
      if (planet.selected) return;
      planet.focused = true;

      if (planet.nodeElement) {
        planet.nodeElement.context.lineWidth = this._getProp(this.node.focus.lineWidth, planet);
        planet.nodeElement.context.strokeStyle = this._getProp(this.node.focus.strokeStyle, planet);
        planet.nodeElement.context.strokeAlpha = this._getProp(this.node.focus.strokeAlpha, planet);
      }
    }
  }, {
    key: "unfocusAt",
    value: function unfocusAt(ind) {
      if (!this.node.focus.enabled) return;
      var planet = this.getPlanetAt(ind);
      if (planet.selected) return;
      planet.focused = false;

      if (planet.nodeElement) {
        planet.nodeElement.context.lineWidth = this._getProp(this.node.lineWidth, planet);
        planet.nodeElement.context.strokeAlpha = this._getProp(this.node.strokeAlpha, planet);
      }
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        sort: {
          detail: '??????',
          "default": 'desc'
        },
        sortField: {
          detail: '?????????????????????',
          "default": 'null'
        },
        node: {
          detail: '??????????????????????????????',
          propertys: {
            maxRadius: {
              detail: '????????????',
              "default": 30
            },
            minRadius: {
              detail: '????????????',
              "default": 5
            },
            radius: {
              detail: '??????',
              "default": 15,
              documentation: '???????????????function,???????????????{field:"pv"}?????????????????? ????????????r'
            },
            lineWidth: {
              detail: '????????????',
              "default": 1
            },
            strokeStyle: {
              detail: '????????????',
              "default": '#ffffff'
            },
            fillStyle: {
              detail: '???????????????',
              "default": '#f2fbfb'
            },
            strokeAlpha: {
              detail: '???????????????',
              "default": 0.6
            },
            focus: {
              detail: 'hover?????????',
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": true
                },
                strokeAlpha: {
                  detail: 'hover?????????????????????',
                  "default": 0.7
                },
                lineWidth: {
                  detail: 'hover??????????????????',
                  "default": 2
                },
                strokeStyle: {
                  detail: 'hover??????????????????',
                  "default": '#fff'
                }
              }
            },
            select: {
              detail: '???????????????',
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": false
                },
                strokeAlpha: {
                  detail: '???????????????????????????',
                  "default": 1
                },
                lineWidth: {
                  detail: '????????????????????????',
                  "default": 2
                },
                strokeStyle: {
                  detail: '????????????????????????',
                  "default": '#fff'
                },
                triggerEventType: {
                  detail: '????????????',
                  "default": 'click'
                },
                onbefore: {
                  detail: '??????select???????????????????????????????????????false???????????????select',
                  "default": null
                },
                onend: {
                  detail: '??????select??????????????????????????????',
                  "default": null
                }
              }
            }
          }
        },
        label: {
          detail: '????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            fontColor: {
              detail: '????????????',
              "default": '#666666'
            },
            fontSize: {
              detail: '??????????????????',
              "default": 13
            },
            textAlign: {
              detail: '??????????????????',
              "default": 'center'
            },
            verticalAlign: {
              detail: '??????????????????',
              "default": 'middle'
            },
            position: {
              detail: '??????????????????',
              "default": 'center'
            },
            offsetX: {
              detail: 'x???????????????',
              "default": 0
            },
            offsetY: {
              detail: 'y???????????????',
              "default": 0
            }
          }
        }
      };
    }
  }]);
  return PlanetGroup;
}();

exports["default"] = PlanetGroup;
});

unwrapExports(group);

var planet = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);

var _index = interopRequireDefault(graphs);

var _group = interopRequireDefault(group);

var _dataSection = interopRequireDefault(dataSection_1);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Text = _canvax$$1["default"].Display.Text;
var Circle = _canvax$$1["default"].Shapes.Circle;
var Line = _canvax$$1["default"].Shapes.Line;
var Rect = _canvax$$1["default"].Shapes.Rect;
var Sector = _canvax$$1["default"].Shapes.Sector;

var PlanetGraphs = /*#__PURE__*/function (_GraphsBase) {
  (0, _inherits2["default"])(PlanetGraphs, _GraphsBase);

  var _super = _createSuper(PlanetGraphs);

  function PlanetGraphs(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, PlanetGraphs);
    _this = _super.call(this, opt, app);
    _this.type = "planet";
    _this.groupDataFrames = [];
    _this.groupField = null;
    _this._ringGroups = []; //groupField????????? group ??????
    //planet?????????grid?????????polar???grid

    _this.grid = {
      rings: {
        _section: []
      }
    };

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(PlanetGraphs.defaultProps()), opt);

    if (_this.center.radius == 0 || !_this.center.enabled) {
      _this.center.radius = 0;
      _this.center.margin = 0;
      _this.center.enabled = false;
    }
    _this.__scanIngCurOration = 0;

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(PlanetGraphs, [{
    key: "init",
    value: function init() {
      this.gridSp = new _canvax$$1["default"].Display.Sprite({
        id: "gridSp"
      });
      this.groupSp = new _canvax$$1["default"].Display.Sprite({
        id: "groupSp"
      });
      this.scanSp = new _canvax$$1["default"].Display.Sprite({
        id: "scanSp"
      });
      this.centerSp = new _canvax$$1["default"].Display.Sprite({
        id: "centerSp"
      });
      this.sprite.addChild(this.gridSp);
      this.sprite.addChild(this.groupSp);
      this.sprite.addChild(this.scanSp);
      this.sprite.addChild(this.centerSp);
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {});

      _.extend(true, this, opt);

      this._dataGroupHandle();

      this._drawGroups();

      this._drawBack();

      this._drawBewrite();

      this._drawCenter();

      this._drawScan();

      this.fire("complete");
    }
  }, {
    key: "_getMaxR",
    value: function _getMaxR() {
      var _circleMaxR;

      if (this.graphs && this.graphs.group && this.graphs.group.circle) {
        _circleMaxR = this.graphs.group.circle.maxRadius;
      }

      if (_circleMaxR == undefined) {
        _circleMaxR = 30;
      }
      return _circleMaxR;
    }
  }, {
    key: "_drawGroups",
    value: function _drawGroups() {
      var me = this;
      var groupRStart = this.center.radius + this.center.margin;
      var maxRadius = me.app.getComponent({
        name: 'coord'
      }).getMaxDisToViewOfOrigin() - me.center.radius - me.center.margin;

      var _circleMaxR = this._getMaxR();

      _.each(this.groupDataFrames, function (df, i) {
        var toR = groupRStart + maxRadius * (df.length / me.dataFrame.length);

        var _g = new _group["default"](_.extend(true, {
          iGroup: i,
          groupLen: me.groupDataFrames.length,
          rRange: {
            start: groupRStart,
            to: toR
          },
          width: me.width - _circleMaxR * 2,
          height: me.height - _circleMaxR * 2,
          selectInds: me.selectInds
        }, me._opt), df, me);

        groupRStart = _g.rRange.to;

        me._ringGroups.push(_g);

        me.grid.rings._section.push({
          radius: _g.rRange.to
        });
      });

      _.each(me._ringGroups, function (_g) {
        me.sprite.addChild(_g.sprite);
      });
    }
  }, {
    key: "_drawCenter",
    value: function _drawCenter() {
      var me = this;

      if (this.center.enabled) {
        //?????????????????????
        this._center = new Circle({
          hoverClone: false,
          context: {
            x: this.origin.x,
            y: this.origin.y,
            fillStyle: this.center.fillStyle,
            r: this.center.radius,
            cursor: this.center.cursor
          }
        }); //??????????????????????????????

        this._centerTxt = new Text(this.center.text, {
          context: {
            x: this.origin.x,
            y: this.origin.y,
            fontSize: this.center.fontSize,
            textAlign: "center",
            textBaseline: "middle",
            fillStyle: this.center.fontColor
          }
        }); //?????????????????????

        this._center.on(event.types.get(), function (e) {
          e.eventInfo = {
            title: me.center.text,
            trigger: me.center,
            nodes: [me.center]
          };

          if (me.center['onclick']) {
            if (e.type == 'mousedown') {
              me._center.context.r += 2;
            }

            if (e.type == 'mouseup') {
              me._center.context.r -= 2;
            }
          }
          me.app.fire(e.type, e);
        });

        this.centerSp.addChild(this._center);
        this.centerSp.addChild(this._centerTxt);
      }
    }
  }, {
    key: "_drawBack",
    value: function _drawBack() {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      if (me.grid.rings._section.length == 1) {
        //?????????????????????????????????????????????3???
        var _diffR = (me.grid.rings._section[0].radius - me.center.radius) / me.grid.rings.count;

        me.grid.rings._section = [];

        for (var i = 0; i < me.grid.rings.count; i++) {
          me.grid.rings._section.push({
            radius: me.center.radius + _diffR * (i + 1)
          });
        }
      } else {
        me.grid.rings.count = me.grid.rings._section.length;
      }

      for (var _i = me.grid.rings._section.length - 1; _i >= 0; _i--) {
        var _scale = me.grid.rings._section[_i];
        me.gridSp.addChild(new Circle({
          context: {
            x: _coord.origin.x,
            y: _coord.origin.y,
            r: _scale.radius,
            lineWidth: me._getBackProp(me.grid.rings.lineWidth, _i),
            strokeStyle: me._getBackProp(me.grid.rings.strokeStyle, _i),
            fillStyle: me._getBackProp(me.grid.rings.fillStyle, _i)
          }
        }));
      }

      if (me.grid.rays.count > 1) {
        var cx = _coord.origin.x;
        var cy = _coord.origin.y;
        var itemAng = 360 / me.grid.rays.count;

        var _r = _coord.getMaxDisToViewOfOrigin(); //Math.max( me.w, me.h );


        if (me.grid.rings._section.length) {
          _r = me.grid.rings._section.slice(-1)[0].radius;
        }

        for (var _i2 = 0, l = me.grid.rays.count; _i2 < l; _i2++) {
          var radian = itemAng * _i2 / 180 * Math.PI;

          var tx = cx + _r * Math.cos(radian);

          var ty = cy + _r * Math.sin(radian);

          me.gridSp.addChild(new Line({
            context: {
              start: {
                x: cx,
                y: cy
              },
              end: {
                x: tx,
                y: ty
              },
              lineWidth: me._getBackProp(me.grid.rays.lineWidth, _i2),
              strokeStyle: me._getBackProp(me.grid.rays.strokeStyle, _i2),
              globalAlpha: me.grid.rays.globalAlpha
            }
          }));
        }
      }

      var _clipRect = new Rect({
        name: "clipRect",
        context: {
          x: _coord.origin.x - me.app.width / 2,
          y: _coord.origin.y - me.height / 2,
          width: me.app.width,
          height: me.height
        }
      });

      me.gridSp.clipTo(_clipRect); //TODO???????????????????????????????????????????????????

      me.sprite.addChild(_clipRect);
    }
  }, {
    key: "_getBackProp",
    value: function _getBackProp(p, i) {
      //let iGroup = i;
      var res = null;

      if (_.isFunction(p)) {
        res = p.apply(this, [{
          //iGroup : iGroup,
          scaleInd: i,
          count: this.grid.rings._section.length,
          groups: this._ringGroups,
          graphs: this
        }]);
      }

      if (_.isString(p) || _.isNumber(p)) {
        res = p;
      }

      if (_.isArray(p)) {
        res = p[i];
      }
      return res;
    }
  }, {
    key: "_drawBewrite",
    value: function _drawBewrite() {
      var me = this; //???????????????????????????

      if (me.bewrite.enabled) {
        var _draw = function _draw(direction, _txt, _powerTxt, _weakTxt) {
          //??????????????????
          _powerTxt.context.x = direction * me.center.radius + direction * 20;

          _bewriteSp.addChild(_powerTxt);

          _bewriteSp.addChild(new Line({
            context: {
              lineType: 'dashed',
              start: {
                x: _powerTxt.context.x,
                y: 0
              },
              end: {
                x: direction * (_txt ? _graphR / 2 - _txtWidth / 2 : _graphR),
                y: 0
              },
              lineWidth: 1,
              strokeStyle: "#ccc"
            }
          }));

          if (_txt) {
            _txt.context.x = direction * (_graphR / 2);

            _bewriteSp.addChild(_txt);

            _bewriteSp.addChild(new Line({
              context: {
                lineType: 'dashed',
                start: {
                  x: direction * (_graphR / 2 + _txtWidth / 2),
                  y: 0
                },
                end: {
                  x: direction * _graphR,
                  y: 0
                },
                lineWidth: 1,
                strokeStyle: "#ccc"
              }
            }));
          }
          _weakTxt.context.x = direction * _graphR;

          _bewriteSp.addChild(_weakTxt);
        };

        var _txt, _txtWidth, _powerTxt, _weakTxt;

        if (me.bewrite.text) {
          _txt = new _canvax$$1["default"].Display.Text(me.bewrite.text, {
            context: {
              fillStyle: me.bewrite.fontColor,
              fontSize: me.bewrite.fontSize,
              textBaseline: "middle",
              textAlign: "center"
            }
          });
          _txtWidth = _txt.getTextWidth();
        }
        _powerTxt = new _canvax$$1["default"].Display.Text("???", {
          context: {
            fillStyle: me.bewrite.fontColor,
            fontSize: me.bewrite.fontSize,
            textBaseline: "middle",
            textAlign: "center"
          }
        });
        _weakTxt = new _canvax$$1["default"].Display.Text("???", {
          context: {
            fillStyle: me.bewrite.fontColor,
            fontSize: me.bewrite.fontSize,
            textBaseline: "middle",
            textAlign: "center"
          }
        });

        var _bewriteSp = new _canvax$$1["default"].Display.Sprite({
          context: {
            x: this.origin.x,
            y: this.origin.y
          }
        });

        me.sprite.addChild(_bewriteSp);

        var _graphR = me.width / 2;

        _draw(1, _txt.clone(), _powerTxt.clone(), _weakTxt.clone());

        _draw(-1, _txt.clone(), _powerTxt.clone(), _weakTxt.clone());
      }
    }
  }, {
    key: "scan",
    value: function scan() {
      var me = this;
      this._scanAnim && this._scanAnim.stop();

      var _scanSp = me._getScanSp(); //????????????


      if (me.__scanIngCurOration == 360) {
        _scanSp.context.rotation = 0;
      }
      me._scanAnim = _scanSp.animate({
        rotation: 360,
        globalAlpha: 1
      }, {
        duration: 1000 * ((360 - me.__scanIngCurOration) / 360),
        onUpdate: function onUpdate(e) {
          me.__scanIngCurOration = e.rotation;
        },
        onComplete: function onComplete() {
          _scanSp.context.rotation = 0;
          me._scanAnim = _scanSp.animate({
            rotation: 360
          }, {
            duration: 1000,
            repeat: 1000,
            //??????repeat??????1000
            onUpdate: function onUpdate(e) {
              me.__scanIngCurOration = e.rotation;
            }
          });
        }
      });
    }
  }, {
    key: "_drawScan",
    value: function _drawScan(callback) {
      var me = this;

      if (me.scan.enabled) {
        var _scanSp = me._getScanSp(); //????????????


        if (me.__scanIngCurOration == 360) {
          _scanSp.context.rotation = 0;
        }
        me._scanAnim && me._scanAnim.stop();
        me._scanAnim = _scanSp.animate({
          rotation: 360,
          globalAlpha: 1
        }, {
          duration: 1000 * ((360 - me.__scanIngCurOration) / 360),
          onUpdate: function onUpdate(e) {
            me.__scanIngCurOration = e.rotation;
          },
          onComplete: function onComplete() {
            _scanSp.context.rotation = 0;
            me._scanAnim = _scanSp.animate({
              rotation: 360
            }, {
              duration: 1000,
              repeat: me.scan.repeat - 2,
              onUpdate: function onUpdate(e) {
                me.__scanIngCurOration = e.rotation;
              },
              onComplete: function onComplete() {
                _scanSp.context.rotation = 0;
                me._scanAnim = _scanSp.animate({
                  rotation: 360,
                  globalAlpha: 0
                }, {
                  duration: 1000,
                  onUpdate: function onUpdate(e) {
                    me.__scanIngCurOration = e.rotation;
                  },
                  onComplete: function onComplete() {
                    _scanSp.destroy();

                    me.__scanSp = null;
                    delete me.__scanSp;
                    me.__scanIngCurOration = 0;
                    callback && callback();
                  }
                });
              }
            });
          }
        });
      }
    }
  }, {
    key: "_getScanSp",
    value: function _getScanSp() {
      var me = this; //?????????scan??????

      var _scanSp = me.__scanSp;

      if (!_scanSp) {
        _scanSp = new _canvax$$1["default"].Display.Sprite({
          context: {
            x: this.origin.x,
            y: this.origin.y,
            globalAlpha: 0,
            rotation: me.__scanIngCurOration
          }
        });
        me.scanSp.addChild(_scanSp);
        me.__scanSp = _scanSp;
        var r = me.scan.r || me.height / 2 - 10;
        var fillStyle = me.scan.fillStyle || me.center.fillStyle; //???????????????????????????

        var count = me.scan.angle;

        for (var i = 0, l = count; i < l; i++) {
          var node = new Sector({
            context: {
              r: r,
              fillStyle: fillStyle,
              clockwise: true,
              startAngle: 360 - i,
              endAngle: 359 - i,
              globalAlpha: me.scan.alpha - me.scan.alpha / count * i
            }
          });

          _scanSp.addChild(node);
        }

        var _line = new Line({
          context: {
            end: {
              x: r,
              y: 0
            },
            lineWidth: 1,
            strokeStyle: fillStyle
          }
        });

        _scanSp.addChild(_line);
      }

      return _scanSp;
    }
  }, {
    key: "_dataGroupHandle",
    value: function _dataGroupHandle() {
      var groupFieldInd = _.indexOf(this.dataFrame.fields, this.groupField);

      if (groupFieldInd >= 0) {
        //??????????????????????????????dataFrame???????????????????????????????????? groupDataFrames
        var titles = this.dataFrame.org[0];
        var _dmap = {}; //???????????????????????????key

        _.each(this.dataFrame.org, function (row, i) {
          if (i) {
            //???i==1 ??????????????????????????????titles
            if (!_dmap[row[groupFieldInd]]) {
              //??????????????????????????????
              _dmap[row[groupFieldInd]] = [_.clone(titles)];
            }

            _dmap[row[groupFieldInd]].push(row);
          }
        });

        for (var r in _dmap) {
          this.groupDataFrames.push((0, _dataSection["default"])(_dmap[r]));
        }
      } else {
        //????????????????????????????????????????????????????????????????????????????????? group ??????????????????
        this.groupDataFrames.push(this.dataFrame);
      }
    } //graphs??????

  }, {
    key: "show",
    value: function show(field, trigger) {
      this.getAgreeNodeData(trigger, function (data) {
        data.nodeElement && (data.nodeElement.context.visible = true);
        data.labelElement && (data.labelElement.context.visible = true);
      });
    }
  }, {
    key: "hide",
    value: function hide(field, trigger) {
      this.getAgreeNodeData(trigger, function (data) {
        data.nodeElement && (data.nodeElement.context.visible = false);
        data.labelElement && (data.labelElement.context.visible = false);
      });
    }
  }, {
    key: "getAgreeNodeData",
    value: function getAgreeNodeData(trigger, callback) {
      _.each(this._ringGroups, function (_g) {
        _.each(_g._rings, function (ring) {
          _.each(ring.planets, function (data) {
            var rowData = data.rowData;

            if (trigger.params.name == rowData[trigger.params.field]) {
              //??????????????????
              //data.nodeElement.context.visible = false;
              //data.labelElement.context.visible = false;
              callback && callback(data);
            }
          });
        });
      });
    } //????????????????????????????????????nodeData

  }, {
    key: "getLayoutNodes",
    value: function getLayoutNodes() {
      var nodes = [];

      _.each(this._ringGroups, function (rg) {
        _.each(rg.planets, function (node) {
          if (node.pit) {
            nodes.push(node);
          }
        });
      });

      return nodes;
    } //???????????????????????????????????????nodeData

  }, {
    key: "getInvalidNodes",
    value: function getInvalidNodes() {
      var nodes = [];

      _.each(this._ringGroups, function (rg) {
        _.each(rg.planets, function (node) {
          if (!node.pit) {
            nodes.push(node);
          }
        });
      });

      return nodes;
    } //ind ?????????????????????index

  }, {
    key: "selectAt",
    value: function selectAt(ind) {
      var me = this;

      _.each(me._ringGroups, function (_g) {
        _g.selectAt(ind);
      });
    } //selectAll

  }, {
    key: "selectAll",
    value: function selectAll() {
      var me = this;

      _.each(me.dataFrame.getFieldData("__index__"), function (_ind) {
        me.selectAt(_ind);
      });
    } //ind ?????????????????????index

  }, {
    key: "unselectAt",
    value: function unselectAt(ind) {
      var me = this;

      _.each(me._ringGroups, function (_g) {
        _g.unselectAt(ind);
      });
    } //unselectAll

  }, {
    key: "unselectAll",
    value: function unselectAll() {
      var me = this;

      _.each(me.dataFrame.getFieldData("__index__"), function (_ind) {
        me.unselectAt(_ind);
      });
    } //???????????????????????????

  }, {
    key: "getSelectedNodes",
    value: function getSelectedNodes() {
      var arr = [];

      _.each(this._ringGroups, function (_g) {
        arr = arr.concat(_g.getSelectedNodes());
      });

      return arr;
    } //???????????????????????????????????????????????????

  }, {
    key: "getSelectedRowList",
    value: function getSelectedRowList() {
      var arr = [];

      _.each(this._ringGroups, function (_g) {
        var rows = [];

        _.each(_g.getSelectedNodes(), function (nodeData) {
          rows.push(nodeData.rowData);
        });

        arr = arr.concat(rows);
      });

      return arr;
    }
  }, {
    key: "getNodesAt",
    value: function getNodesAt() {}
  }, {
    key: "resetData",
    value: function resetData(dataFrame) {
      this.clean();
      this.dataFrame = dataFrame;

      this._dataGroupHandle();

      this._drawGroups();

      this._drawScan();
    }
  }, {
    key: "clean",
    value: function clean() {
      var me = this;
      me.groupDataFrames = [];

      _.each(me._ringGroups, function (_g) {
        _g.sprite.destroy();
      });

      me._ringGroups = [];
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        field: {
          detail: '????????????',
          "default": null
        },
        center: {
          detail: '???????????????',
          propertys: {
            enabled: {
              detail: '??????????????????',
              "default": true
            },
            text: {
              detail: '??????????????????',
              "default": 'center'
            },
            radius: {
              detail: '???????????????',
              "default": 30
            },
            fillStyle: {
              detail: '???????????????',
              "default": '#70629e'
            },
            fontSize: {
              detail: '??????????????????',
              "default": 15
            },
            fontColor: {
              detail: '??????????????????',
              "default": '#ffffff'
            },
            margin: {
              detail: '??????????????????????????????????????????',
              "default": 20
            },
            cursor: {
              detail: '???????????????????????????',
              "default": 'default'
            }
          }
        },
        selectInds: {
          detail: '?????????????????????',
          "default": []
        },
        grid: {
          detail: '??????????????????grid',
          propertys: {
            rings: {
              detail: '?????????',
              propertys: {
                fillStyle: {
                  detail: '?????????',
                  "default": null
                },
                strokeStyle: {
                  detail: '?????????',
                  "default": null
                },
                lineWidth: {
                  detail: '?????????',
                  "default": 1
                },
                count: {
                  detail: '?????????',
                  "default": 3
                }
              }
            },
            rays: {
              detail: '????????????',
              propertys: {
                count: {
                  detail: '????????????',
                  "default": 0
                },
                globalAlpha: {
                  detail: '????????????',
                  "default": 0.4
                },
                strokeStyle: {
                  detail: '??????',
                  "default": '#10519D'
                },
                lineWidth: {
                  detail: '??????',
                  "default": 1
                }
              }
            }
          }
        },
        bewrite: {
          detail: 'planet???????????????',
          propertys: {
            enabled: {
              detail: '????????????????????????',
              "default": false
            },
            text: {
              detail: '????????????',
              "default": null
            },
            fontColor: {
              detail: 'fontColor',
              "default": '#999'
            },
            fontSize: {
              detail: 'fontSize',
              "default": 12
            }
          }
        },
        scan: {
          detail: '????????????',
          propertys: {
            enabled: {
              detail: '????????????????????????',
              "default": false
            },
            fillStyle: {
              detail: '??????????????????',
              "default": null //????????? me._graphs.center.fillStyle

            },
            alpha: {
              detail: '???????????????',
              "default": 0.6
            },
            angle: {
              detail: '???????????????????????????',
              "default": 90
            },
            r: {
              detail: '???????????????????????????',
              "default": null
            },
            repeat: {
              detail: '????????????',
              "default": 3
            }
          }
        },
        _props: [_group["default"]]
      };
    }
  }]);
  return PlanetGraphs;
}(_index["default"]);

_index["default"].registerComponent(PlanetGraphs, 'graphs', 'planet');

var _default = PlanetGraphs;
exports["default"] = _default;
});

unwrapExports(planet);

var bar = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);



var _index2 = interopRequireDefault(graphs);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var AnimationFrame = _canvax$$1["default"].AnimationFrame;
var Rect = _canvax$$1["default"].Shapes.Rect;

var BarGraphs = /*#__PURE__*/function (_GraphsBase) {
  (0, _inherits2["default"])(BarGraphs, _GraphsBase);

  var _super = _createSuper(BarGraphs);

  function BarGraphs(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, BarGraphs);
    _this = _super.call(this, opt, app);
    _this.type = "bar";
    _this.enabledField = null;
    _this.node = {
      _width: 0,
      _count: 0 //??????????????????bar

    }; //?????????????????????????????????????????????node?????????????????????groupRegion???????????????
    //??????????????????graphs bar ???????????????

    _this.select = {
      _fillStyle: "#092848" //???bar.fillStyle??????????????????array function

    };
    _this._barsLen = 0;
    _this.txtsSp = null;

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(BarGraphs.defaultProps()), opt);

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(BarGraphs, [{
    key: "init",
    value: function init() {
      this.barsSp = new _canvax$$1["default"].Display.Sprite({
        id: "barsSp"
      });
      this.txtsSp = new _canvax$$1["default"].Display.Sprite({
        id: "txtsSp",
        context: {//visible: false
        }
      });
    }
  }, {
    key: "getNodesAt",
    value: function getNodesAt(index) {
      //???index?????????
      var data = this.data;
      var _nodesInfoList = []; //??????????????????

      _.each(this.enabledField, function (fs) {
        if (_.isArray(fs)) {
          _.each(fs, function (_fs) {
            //fs????????????????????????
            var nodeData = data[_fs] ? data[_fs][index] : null;
            nodeData && _nodesInfoList.push(nodeData);
          });
        } else {
          var nodeData = data[fs] ? data[fs][index] : null;
          nodeData && _nodesInfoList.push(nodeData);
        }
      });

      return _nodesInfoList;
    }
  }, {
    key: "_getTargetField",
    value: function _getTargetField(b, v, i, field) {
      if (_.isString(field)) {
        return field;
      } else if (_.isArray(field)) {
        var res = field[b];

        if (_.isString(res)) {
          return res;
        } else if (_.isArray(res)) {
          return res[v];
        }
      }
    }
  }, {
    key: "_getColor",
    value: function _getColor(color, nodeData) {
      var me = this;
      var field = nodeData.field;

      var _flattenField = _.flatten([this.field]);

      var fieldMap = this.app.getComponent({
        name: 'coord'
      }).getFieldMapOf(field);

      if (_.isFunction(color)) {
        color = color.apply(this, [nodeData]);
      }

      if (_.isString(color)) ;

      if (_.isArray(color)) {
        color = _.flatten(color)[_.indexOf(_flattenField, field)];
      }

      if (color && color.lineargradient && color.lineargradient.length) {
        if (nodeData.rectHeight != 0) {
          var _style = me.ctx.createLinearGradient(nodeData.x, nodeData.fromY + nodeData.rectHeight, nodeData.x, nodeData.fromY);

          _.each(color.lineargradient, function (item) {
            _style.addColorStop(item.position, item.color);
          });

          color = _style;
        } else {
          color = color.lineargradient[parseInt(color.lineargradient.length / 2)].color;
        }
      }

      if (color === undefined || color === null) {
        //??????undefined(???????????????function),null?????????????????????????????????
        //?????????????????????????????????????????????????????????????????????????????????
        color = fieldMap.color;
      }
      return color;
    }
  }, {
    key: "_getBarWidth",
    value: function _getBarWidth(cellWidth, ceilWidth2) {
      if (this.node.width) {
        if (_.isFunction(this.node.width)) {
          this.node._width = this.node.width(cellWidth);
        } else {
          this.node._width = this.node.width;
        }
      } else {
        this.node._width = ceilWidth2 - Math.max(1, ceilWidth2 * 0.2); //????????????????????????????????????????????????????????? ???????????????

        if (this.node._width == 1 && cellWidth > 3) {
          this.node._width = cellWidth - 2;
        }
      }
      this.node._width < 1 && (this.node._width = 1);
      this.node._width = parseInt(this.node._width);

      if (this.node._width > this.node.maxWidth) {
        this.node._width = this.node.maxWidth;
      }
      return this.node._width;
    }
  }, {
    key: "show",
    value: function show() {
      this.draw();
    }
  }, {
    key: "hide",
    value: function hide(field) {
      _.each(this.barsSp.children, function (h_groupSp, h) {
        var _bar = h_groupSp.getChildById("bar_" + h + "_" + field);

        _bar && _bar.destroy();
      });

      _.each(this.txtsSp.children, function (sp, h) {
        var _label = sp.getChildById("text_" + h + "_" + field);

        _label && _label.destroy();
      });

      this.draw();
    }
  }, {
    key: "resetData",
    value: function resetData(dataFrame) {
      this.dataFrame = dataFrame;
      this.draw();
    }
  }, {
    key: "clean",
    value: function clean() {
      this.data = {};
      this.barsSp.removeAllChildren();

      if (this.label.enabled) {
        this.txtsSp.removeAllChildren();
      }
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {}); //?????????data?????????????????????trimgraphs???????????????data

      _.extend(true, this, opt);

      var me = this;
      var animate = me.animation && !opt.resize;
      this.data = this._trimGraphs();

      if (this.enabledField.length == 0 || this._dataLen == 0) {
        me._preDataLen = 0;
        this.clean();
        return;
      }
      var preDataLen = me._preDataLen; //?????????????????????????????? resetData ????????????????????????data?????????

      var groupsLen = this.enabledField.length;
      var itemW = 0;
      me.node._count = 0;
      var preGraphs = 0;
      var barGraphs = me.app.getComponents({
        name: 'graphs',
        type: 'bar'
      });

      _.each(barGraphs, function (graph, i) {
        if (graph == me) {
          preGraphs = i;
        }
      });

      _.each(this.enabledField, function (h_group, i) {
        h_group = _.flatten([h_group]);
        /*
        //h_group???????????????????????????yAxis.field = ["uv","pv"]?????????
        //h_group??????????????????????????????uv ????????????pv???
        let spg = new Canvax.Display.Sprite({ id : "barGroup"+i });
        */
        //vLen ????????????bar????????????????????? length
        //??????yAxis.field = [?
        //    ["uv","pv"],  vLen == 2
        //    "ppc"       vLen == 1
        //]
        //if (h <= preDataLen - 1)??????????????????????????????sprite???????????????bar?????????????????????????????????????????????

        var vLen = h_group.length;
        if (vLen == 0) return; //itemW ???????????????xAxis???xDis????????????

        itemW = me.width / me._dataLen;
        me._barsLen = me._dataLen * groupsLen; // this bind?????? ?????????????????????

        function barGroupSectedHandle(e) {
          if (me.select.enabled && e.type == me.select.triggerEventType) {
            //????????????????????????????????????
            var ind = me.dataFrame.range.start + this.iNode; //region?????????selected?????????????????????graphs???????????????

            if (_.indexOf(me.select.inds, ind) > -1) {
              //?????????????????????
              _.each(barGraphs, function (barGraph) {
                barGraph.unselectAt(ind);
              });
            } else {
              _.each(barGraphs, function (barGraph) {
                barGraph.selectAt(ind);
              });
            }
          }
        }

        for (var h = 0; h < me._dataLen; h++) {
          //bar???group
          var groupH = null;

          if (i == 0) {
            //???????????????
            if (h <= preDataLen - 1) {
              groupH = me.barsSp.getChildById("barGroup_" + h);
            } else {
              groupH = new _canvax$$1["default"].Display.Sprite({
                id: "barGroup_" + h
              });
              me.barsSp.addChild(groupH);
              groupH.iNode = h;
            }

            if (!preGraphs) {
              //??????preGraphs == 0????????????graphs??????????????????????????????region
              //??????x????????? nodes???????????????????????????rect??????????????????????????????
              //????????????selected??????
              var groupRegion = void 0;
              var groupRegionWidth = itemW * me.select.width;

              if (me.select.width > 1) {
                //??????????????????
                groupRegionWidth = me.select.width;
              }

              if (h <= preDataLen - 1) {
                groupRegion = groupH.getChildById("group_region_" + h);
                groupRegion.context.width = groupRegionWidth;
                groupRegion.context.x = itemW * h + (itemW - groupRegionWidth) / 2;
                groupRegion.context.globalAlpha = _.indexOf(me.select.inds, me.dataFrame.range.start + h) > -1 ? me.select.alpha : 0;
              } else {
                groupRegion = new Rect({
                  id: "group_region_" + h,
                  pointChkPriority: false,
                  hoverClone: false,
                  xyToInt: false,
                  context: {
                    x: itemW * h + (itemW - groupRegionWidth) / 2,
                    y: -me.height,
                    width: groupRegionWidth,
                    height: me.height,
                    fillStyle: me._getGroupRegionStyle(h),
                    globalAlpha: _.indexOf(me.select.inds, me.dataFrame.range.start + h) > -1 ? me.select.alpha : 0
                  }
                });
                groupH.addChild(groupRegion);
                groupRegion.iNode = h; //?????????????????????

                groupRegion.on(event.types.get(), function (e) {
                  e.eventInfo = {
                    iNode: this.iNode //TODO:????????????????????????????????????graphs?????????????????????graphs???nodes?????????
                    //nodes : me.getNodesAt( this.iNode ) 

                  };
                  barGroupSectedHandle.bind(this)(e); //??????root????????????e.eventInfo.nodes,???????????????????????????

                  me.app.fire(e.type, e);
                });
              }
            }
          } else {
            groupH = me.barsSp.getChildById("barGroup_" + h);
          }

          var txtGroupH = null;

          if (i == 0) {
            if (h <= preDataLen - 1) {
              txtGroupH = me.txtsSp.getChildById("txtGroup_" + h);
            } else {
              txtGroupH = new _canvax$$1["default"].Display.Sprite({
                id: "txtGroup_" + h
              });
              me.txtsSp.addChild(txtGroupH);
              txtGroupH.iGroup = i;
            }
          } else {
            txtGroupH = me.txtsSp.getChildById("txtGroup_" + h);
          }

          for (var v = 0; v < vLen; v++) {
            me.node._count++; //?????????bar???????????????????????????????????????

            var nodeData = me.data[h_group[v]][h];
            nodeData.iGroup = i, nodeData.iNode = h, nodeData.iLay = v;
            var rectHeight = nodeData.y - nodeData.fromY;

            if (isNaN(nodeData.value)) {
              rectHeight = 0;
            } else {
              if (Math.abs(rectHeight) < me.node.minHeight) {
                rectHeight = me.node.minHeight;
              }
            }
            nodeData.rectHeight = rectHeight;

            var fillStyle = me._getColor(me.node.fillStyle, nodeData);

            nodeData.color = fillStyle; //?????????????????????????????? ??????tips??????????????????????????????????????????

            if (fillStyle instanceof CanvasGradient) {
              if (me.node.fillStyle.lineargradient) {
                var _middleStyle = me.node.fillStyle.lineargradient[parseInt(me.node.fillStyle.lineargradient.length / 2)];

                if (_middleStyle) {
                  nodeData.color = _middleStyle.color;
                }
              }
            }
            var finalPos = {
              x: Math.round(nodeData.x),
              y: nodeData.fromY,
              width: me.node._width,
              height: rectHeight,
              fillStyle: fillStyle,
              fillAlpha: me.node.fillAlpha,
              scaleY: -1
            };
            nodeData.width = finalPos.width;
            var rectCtx = {
              x: finalPos.x,
              y: nodeData.yOriginPoint.pos,
              //0,
              width: finalPos.width,
              height: finalPos.height,
              fillStyle: finalPos.fillStyle,
              fillAlpha: me.node.fillAlpha,
              scaleY: 0,
              cursor: 'pointer'
            };

            if (!!me.node.radius && nodeData.isLeaf && !me.proportion) {
              var radiusR = Math.min(me.node._width / 2, Math.abs(rectHeight));
              radiusR = Math.min(radiusR, me.node.radius);
              rectCtx.radius = [radiusR, radiusR, 0, 0];
            }

            if (!animate) {
              delete rectCtx.scaleY;
              rectCtx.y = finalPos.y;
            }
            var rectEl = null;
            var barId = "bar_" + h + "_" + nodeData.field;

            if (h <= preDataLen - 1) {
              rectEl = groupH.getChildById(barId);
            }

            if (rectEl) {
              rectEl.context.fillStyle = fillStyle;
            } else {
              rectEl = new Rect({
                id: barId,
                context: rectCtx
              });
              rectEl.field = nodeData.field;
              groupH.addChild(rectEl);
              rectEl.on(event.types.get(), function (e) {
                e.eventInfo = {
                  trigger: me.node,
                  nodes: [this.nodeData]
                };
                barGroupSectedHandle.bind(this)(e); //????????????????????????????????????????????????????????????bar???????????????????????????????????????????????????????????????????????????
                // if( me.select.enabled && e.type == me.select.triggerEventType ){
                //     //????????????????????????????????????
                //     let ind = me.dataFrame.range.start + this.iNode;
                //     //region?????????selected?????????????????????graphs???????????????
                //     if( _.indexOf( me.select.inds, ind ) > -1 ){
                //         //?????????????????????
                //         _.each( barGraphs, function( barGraph ){
                //             barGraph.unselectAt( ind );
                //         })
                //     } else {
                //         _.each( barGraphs, function( barGraph ){
                //             barGraph.selectAt( ind );
                //         })
                //     };
                // };

                me.app.fire(e.type, e);
              });
            }
            rectEl.finalPos = finalPos;
            rectEl.iGroup = i, rectEl.iNode = h, rectEl.iLay = v; //nodeData, nodeElement ??? data??????????????????????????????????????????

            rectEl.nodeData = nodeData;
            nodeData.nodeElement = rectEl;
            me.node.filter && me.node.filter.apply(rectEl, [nodeData, me]); //label begin ------------------------------

            if (me.label.enabled) {
              var value = nodeData.value;

              if (_.isFunction(me.label.format)) {
                var _formatc = me.label.format(value, nodeData);

                if (_formatc !== undefined || _formatc !== null) {
                  value = _formatc;
                }
              }

              if (value === undefined || value === null || value === "") {
                continue;
              }

              if (_.isNumber(value)) {
                value = (0, tools.numAddSymbol)(value);
              }
              var textCtx = {
                fillStyle: me.label.fontColor || finalPos.fillStyle,
                fontSize: me.label.fontSize,
                lineWidth: me.label.lineWidth,
                strokeStyle: me.label.strokeStyle || finalPos.fillStyle,
                //textAlign     : me.label.textAlign, ????????????_getTextAlign?????????
                textBaseline: me.label.verticalAlign,
                rotation: me.label.rotation
              }; //????????????position, offset??????x,y

              var _textPos = me._getTextPos(finalPos, nodeData);

              textCtx.x = _textPos.x;
              textCtx.y = _textPos.y;
              textCtx.textAlign = me._getTextAlign(finalPos, nodeData); //??????

              var textEl = null;
              var textId = "text_" + h + "_" + nodeData.field;

              if (h <= preDataLen - 1) {
                textEl = txtGroupH.getChildById(textId);
              }

              if (textEl) {
                //do something
                textEl.resetText(value);
                textEl.context.x = textCtx.x;
                textEl.context.y = textCtx.y;
              } else {
                textEl = new _canvax$$1["default"].Display.Text(value, {
                  id: textId,
                  context: textCtx
                });
                textEl.field = nodeData.field;
                txtGroupH.addChild(textEl);
              }
            } //label end ------------------------------

          }
        }
      });

      this.sprite.addChild(this.barsSp); //?????????text????????? ?????????text???txtsSp????????????sprite

      if (this.label.enabled) {
        this.sprite.addChild(this.txtsSp);
      }
      this.sprite.context.x = this.origin.x;
      this.sprite.context.y = this.origin.y;
      this.grow(function () {
        me.fire("complete");
      }, {
        delay: 0,
        duration: 300,
        animate: animate
      });
      me._preDataLen = me._dataLen;
    }
  }, {
    key: "setEnabledField",
    value: function setEnabledField() {
      //?????????????????? field??????enabledFields?????????enabled????????????????????? enabled?????????field??????
      this.enabledField = this.app.getComponent({
        name: 'coord'
      }).filterEnabledFields(this.field);
    }
  }, {
    key: "_getGroupRegionStyle",
    value: function _getGroupRegionStyle(iNode) {
      var me = this;
      var _groupRegionStyle = me.select.fillStyle;

      if (_.isArray(me.select.fillStyle)) {
        _groupRegionStyle = me.select.fillStyle[iNode];
      }

      if (_.isFunction(me.select.fillStyle)) {
        _groupRegionStyle = me.select.fillStyle.apply(this, [{
          iNode: iNode,
          rowData: me.dataFrame.getRowDataAt(iNode)
        }]);
      }

      if (_groupRegionStyle === undefined || _groupRegionStyle === null) {
        return me.select._fillStyle;
      }
      return _groupRegionStyle;
    }
  }, {
    key: "_trimGraphs",
    value: function _trimGraphs() {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      }); //?????????????????????hLen


      this.setEnabledField();
      this.data = {};
      var layoutGraphs = [];
      var hLen = 0; //????????????????????? ??????xAxis??????????????? ???

      var preHLen = 0; //?????????????????????????????? ??????xAxis??????????????? ???

      var _preHLenOver = false;

      if (!this.absolute) {
        _.each(me.app.getComponents({
          name: 'graphs',
          type: 'bar'
        }), function (_g) {
          if (!_g.absolute) {
            if (_g === me) {
              _preHLenOver = true;
            }

            if (_preHLenOver) {
              //??????me????????? graphs???????????????setEnabledField????????????????????? ?????????hLen
              _g.setEnabledField();
            } else {
              preHLen += _g.enabledField.length;
            }

            hLen += _g.enabledField.length;
            layoutGraphs.push(_g);
          }
        });
      } else {
        layoutGraphs = [this];
        hLen = this.enabledField.length;
      }

      var cellWidth = _coord.getAxis({
        type: 'xAxis'
      }).getCellLength(); //x????????????????????????????????????bar?????????????????????n??????bar??????????????????????????????


      var ceilWidth2 = cellWidth / (hLen + 1); //?????????ceilWidth2 ??? ????????? barW??????????????????

      var barW = this._getBarWidth(cellWidth, ceilWidth2);

      var barDis = ceilWidth2 - barW;

      if (this.node.xDis != null) {
        barDis = this.node.xDis;
      }
      var disLeft = (cellWidth - barW * hLen - barDis * (hLen - 1)) / 2;

      if (preHLen) {
        disLeft += (barDis + barW) * preHLen;
      }
      //??????????????????????????????dataOrg

      var dataOrg = this.dataFrame.getDataOrg(this.enabledField);
      var selectOpt = me.getGraphSelectOpt(); //?????????select.inds???????????????????????????????????????????????????graphs?????????inds

      if (!me.select.inds.length && selectOpt && selectOpt.inds && selectOpt.inds.length) {
        me.select.inds = _.clone(selectOpt.inds);
      }

      _.each(dataOrg, function (hData, b) {
        //hData?????????????????????????????? ??????????????????????????????hData?????????????????????????????????
        //tempBarData ???????????????????????? ??????????????????????????????????????????n???????????????????????????
        var tempBarData = [];

        _.each(hData, function (vSectionData, v) {
          tempBarData[v] = []; //vSectionData ????????????????????????????????????????????? uv

          me._dataLen = vSectionData.length; //vSectionData??????????????????field?????????????????????

          _.each(vSectionData, function (val, i) {
            var vCount = val;

            if (me.proportion) {
              //???????????????
              vCount = 0;

              _.each(hData, function (team) {
                vCount += team[i];
              });
            }

            var field = me._getTargetField(b, v, i, me.enabledField); //???????????????value??????????????????point??????{x:  y: }


            var point = _coord.getPoint({
              iNode: i,
              field: field,
              value: {
                //x:
                y: val
              }
            });

            var _x = point.pos.x;
            var x = _x - cellWidth / 2 + disLeft + (barW + barDis) * b;
            var y = 0;

            if (me.proportion) {
              y = -val / vCount * _coord.height;
            } else {
              y = point.pos.y;
            }

            if (isNaN(y)) {
              y = 0;
            }

            var yOriginPoint = _coord.getAxisOriginPoint({
              field: field
            });

            function _getFromY(tempBarData, v, i, val, y) {
              var preData = tempBarData[v - 1];

              if (!preData) {
                return yOriginPoint.pos;
              }
              var preY = preData[i].y;
              var preVal = preData[i].value;
              var yBaseNumber = yOriginPoint.value;

              if (val >= yBaseNumber) {
                //??????????????????????????????????????????????????????????????????
                if (preVal >= yBaseNumber) {
                  //??????????????????pre???isLeaf?????????false
                  preData[i].isLeaf = false;
                  return preY;
                } else {
                  return _getFromY(tempBarData, v - 1, i, val, y);
                }
              } else {
                if (preVal < yBaseNumber) {
                  //??????????????????pre???isLeaf?????????false
                  preData[i].isLeaf = false;
                  return preY;
                } else {
                  return _getFromY(tempBarData, v - 1, i, val, y);
                }
              }
            } //??????????????????,???????????? yOriginPoint.pos


            var fromY = _getFromY(tempBarData, v, i, val, y);

            y += fromY - yOriginPoint.pos;
            var nodeData = {
              type: "bar",
              value: val,
              vInd: v,
              //?????????????????????????????????node?????????????????????
              vCount: vCount,
              //?????????????????????,???????????????uv(100),pv(100),????????????vCount??????200?????????????????????????????????tips??????content?????????????????????
              field: field,
              fromX: x,
              fromY: fromY,
              x: x,
              y: y,
              width: barW,
              yOriginPoint: yOriginPoint,
              isLeaf: true,
              xAxis: _coord.getAxis({
                type: 'xAxis'
              }).getNodeInfoOfX(_x),
              iNode: i,
              rowData: me.dataFrame.getRowDataAt(i),
              color: null,
              //focused       : false,  //???????????????????????????
              selected: false //????????????

            };

            if (!me.data[nodeData.field]) {
              me.data[nodeData.field] = tempBarData[v];
            }

            if (_.indexOf(me.select.inds, i) > -1) {
              nodeData.selected = true;
            }
            tempBarData[v].push(nodeData);
          });
        }); //tempBarData.length && tmpData.push( tempBarData );

      });

      return me.data; //return tmpData;
    }
  }, {
    key: "_getTextAlign",
    value: function _getTextAlign(bar, nodeData) {
      var textAlign = this.label.textAlign;

      if (nodeData.value < nodeData.yOriginPoint.value) {
        if (textAlign == "left") {
          textAlign = "right";
        } else if (textAlign == "right") {
          textAlign = "left";
        }
      }
      return textAlign;
    }
  }, {
    key: "_getTextPos",
    value: function _getTextPos(bar, nodeData) {
      var me = this;
      var point = {
        x: 0,
        y: 0
      };
      var x = bar.x,
          y = bar.y;
      var isNegative = true; //?????????

      if (bar.y >= nodeData.y) {
        isNegative = false;
      }

      switch (me.label.position) {
        case "top":
          x = bar.x + bar.width / 2;
          y = bar.y + bar.height;

          if (isNegative) {
            y += 16;
          }
          break;

        case "topRight":
          x = bar.x + bar.width;
          y = bar.y + bar.height;

          if (isNegative) {
            y += 16;
          }
          break;

        case "right":
          x = bar.x + bar.width;
          y = bar.y + bar.height / 2;
          break;

        case "rightBottom":
          x = bar.x + bar.width;
          y = bar.y;
          break;

        case "bottom":
          x = bar.x + bar.width / 2;
          y = bar.y;
          break;

        case "bottomLeft":
          x = bar.x;
          y = bar.y;
          break;

        case "left":
          x = bar.x;
          y = bar.y + bar.height / 2;
          break;

        case "leftTop":
          x = bar.x;
          y = bar.y + bar.height;

          if (isNegative) {
            y += 16;
          }
          break;

        case "center":
          x = bar.x + bar.width / 2;
          y = bar.y + bar.height / 2;
          break;
      }
      x -= me.label.offsetX;
      var i = 1;

      if (nodeData.value < nodeData.yOriginPoint.value) {
        i = -1;
      }
      y -= i * me.label.offsetY;
      point.x = x;
      point.y = y;
      return point;
    }
    /**
     * ????????????
     */

  }, {
    key: "grow",
    value: function grow(callback, opt) {
      var me = this; //console.log( me._preDataLen+"|"+ me._dataLen)
      //????????????????????????range??????????????????destroy???

      if (me._preDataLen > me._dataLen) {
        for (var i = me._dataLen, l = me._preDataLen; i < l; i++) {
          me.barsSp.getChildAt(i).destroy();
          me.label.enabled && me.txtsSp.getChildAt(i).destroy();
          i--;
          l--;
        }
      }

      if (!opt.animate) {
        callback && callback(me);
        return;
      }
      var sy = 1;

      var optsions = _.extend({
        delay: Math.min(1000 / this._barsLen, 80),
        easing: "Linear.None",
        //"Back.Out",
        duration: 500
      }, opt);

      var barCount = 0;

      _.each(me.enabledField, function (h_group) {
        h_group = _.flatten([h_group]);
        var vLen = h_group.length;
        if (vLen == 0) return;

        for (var h = 0; h < me._dataLen; h++) {
          for (var v = 0; v < vLen; v++) {
            var nodeData = me.data[h_group[v]][h];
            var group = me.barsSp.getChildById("barGroup_" + h);
            var bar = group.getChildById("bar_" + h + "_" + nodeData.field);

            if (optsions.duration == 0) {
              bar.context.scaleY = sy;
              bar.context.y = sy * sy * bar.finalPos.y;
              bar.context.x = bar.finalPos.x;
              bar.context.width = bar.finalPos.width;
              bar.context.height = bar.finalPos.height;
            } else {
              if (bar._tweenObj) {
                AnimationFrame.destroyTween(bar._tweenObj);
              }
              bar._tweenObj = bar.animate({
                scaleY: sy,
                y: sy * bar.finalPos.y,
                x: bar.finalPos.x,
                width: bar.finalPos.width,
                height: bar.finalPos.height
              }, {
                duration: optsions.duration,
                easing: optsions.easing,
                delay: h * optsions.delay,
                onUpdate: function onUpdate() {},
                onComplete: function onComplete(arg) {
                  if (arg.width < 3 && this.context) {
                    this.context.radius = 0;
                  }

                  barCount++;

                  if (barCount === me.node._count) {
                    callback && callback(me);
                  }
                },
                id: bar.id
              });
            }
          }
        }
      });
    } //?????????ind????????????start?????????index
    //???????????????????????????index?????? ???????????????????????????????????????????????????????????????????????????dataFrame.range.start

  }, {
    key: "selectAt",
    value: function selectAt(ind) {
      var me = this;
      if (_.indexOf(this.select.inds, ind) > -1) return;
      this.select.inds.push(ind); //????????????????????????start????????????index???

      var index = ind - this.dataFrame.range.start;

      _.each(this.data, function (list) {
        var nodeData = list[index];
        nodeData.selected = true;
        me.setNodeElementStyle(nodeData);
      });

      var group = this.barsSp.getChildById("barGroup_" + index);

      if (group) {
        var groupRegion = group.getChildById("group_region_" + index);

        if (groupRegion) {
          groupRegion.context.globalAlpha = this.select.alpha;
        }
      }
    } //?????????ind????????????start?????????index

  }, {
    key: "unselectAt",
    value: function unselectAt(ind) {
      var me = this;
      if (_.indexOf(this.select.inds, ind) == -1) return;

      var _index = _.indexOf(this.select.inds, ind);

      this.select.inds.splice(_index, 1);
      var index = ind - this.dataFrame.range.start;

      _.each(this.data, function (list) {
        var nodeData = list[index];
        nodeData.selected = false;
        me.setNodeElementStyle(nodeData);
      });

      var group = this.barsSp.getChildById("barGroup_" + index);

      if (group) {
        var groupRegion = group.getChildById("group_region_" + index);

        if (groupRegion) {
          groupRegion.context.globalAlpha = 0;
        }
      }
    }
  }, {
    key: "getSelectedRowList",
    value: function getSelectedRowList() {
      var rowDatas = [];
      var me = this;

      _.each(me.select.inds, function (ind) {
        //TODO: ?????????inds ??????????????????getRowDataAt???????????????????????????????????????
        //?????????????????????????????????
        //let index = ind - me.dataFrame.range.start;
        //rowDatas.push( me.dataFrame.getRowDataAt( index ) )
        rowDatas.push(me.dataFrame.jsonOrg[ind]);
      });

      return rowDatas;
    }
  }, {
    key: "setNodeElementStyle",
    value: function setNodeElementStyle(nodeData) {
      var me = this;

      var fillStyle = me._getColor(me.node.fillStyle, nodeData);

      nodeData.nodeElement.context.fillStyle = fillStyle;
    }
  }, {
    key: "getGraphSelectOpt",
    value: function getGraphSelectOpt() {
      var me = this; //????????????graph ?????????select ----start

      var selectOpt = me._opt.select;

      if (!selectOpt) {
        var barGraphs = me.app.getComponents({
          name: 'graphs',
          type: 'bar'
        });

        _.each(barGraphs, function (barGraph) {
          if (selectOpt) return false;

          if (!selectOpt && barGraph._opt.select) {
            selectOpt = barGraph.select;
          }
        });
      }
      return selectOpt;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        field: {
          detail: '????????????',
          documentation: '??????????????????????????????????????????????????????????????????????????????????????????????????????',
          "default": null
        },
        yAxisAlign: {
          detail: '???????????????y?????????',
          "default": 'left'
        },
        absolute: {
          detail: '????????????graphs???????????????',
          documentation: '\
                    trimGraphs????????????????????????????????? bar graphs?????????????????????\
                    true?????????????????????????????????,\
                    ???css??????absolute?????????????????????????????????????????????',
          "default": false
        },
        proportion: {
          detail: '???????????????',
          "default": false
        },
        node: {
          detail: '?????????????????????????????????',
          propertys: {
            width: {
              detail: 'bar?????????',
              "default": 0
            },
            maxWidth: {
              detail: '??????width',
              "default": 50
            },
            minWidth: {
              detail: '??????width',
              "default": 1
            },
            minHeight: {
              detail: '??????height',
              "default": 0
            },
            radius: {
              detail: '???????????????????????????',
              "default": 3
            },
            fillStyle: {
              detail: 'bar?????????',
              "default": null
            },
            fillAlpha: {
              detail: 'bar?????????',
              "default": 0.95
            },
            xDis: {
              detail: '????????????bar???????????????',
              "default": null
            },
            filter: {
              detail: 'bar???????????????',
              "default": null
            }
          }
        },
        label: {
          detail: '????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": false
            },
            fontColor: {
              detail: '????????????',
              "default": null,
              documentation: '???????????????text.fontColor??????????????????fontColor'
            },
            fontSize: {
              detail: '??????????????????',
              "default": 12
            },
            format: {
              detail: '???????????????????????????',
              "default": null
            },
            lineWidth: {
              detail: '??????????????????',
              "default": 0
            },
            strokeStyle: {
              detail: '??????????????????',
              "default": null
            },
            rotation: {
              detail: '????????????',
              "default": 0
            },
            textAlign: {
              detail: '??????????????????',
              documentation: 'left center right',
              "default": 'center'
            },
            verticalAlign: {
              detail: '????????????????????????',
              documentation: 'top middle bottom',
              "default": 'bottom'
            },
            position: {
              detail: '??????????????????',
              documentation: 'top,topRight,right,rightBottom,bottom,bottomLeft,left,leftTop,center',
              "default": 'top'
            },
            offsetX: {
              detail: 'x?????????',
              "default": 0
            },
            offsetY: {
              detail: 'y?????????',
              "default": 0
            }
          }
        },
        select: {
          detail: '????????????',
          documentation: '\
                    ?????????????????????????????????????????????node?????????????????????groupRegion???????????????,\
                    ????????????????????????graphs bar ???????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": false
            },
            inds: {
              detail: '???????????????????????????',
              documentation: '???????????????????????????,??????????????????ind?????????????????????ind??????????????????dataFrame.range.start?????????ind',
              "default": []
            },
            width: {
              detail: '?????????????????????',
              "default": 1
            },
            alpha: {
              detail: '????????????????????????',
              "default": 0.2
            },
            fillStyle: {
              detail: '????????????????????????',
              "default": null
            },
            triggerEventType: {
              detail: '???????????????????????????',
              "default": 'click'
            }
          }
        }
      };
    }
  }]);
  return BarGraphs;
}(_index2["default"]);

_index2["default"].registerComponent(BarGraphs, 'graphs', 'bar');

var _default = BarGraphs;
exports["default"] = _default;
});

unwrapExports(bar);

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArrayLimit);

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayLikeToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(unsupportedIterableToArray);

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(slicedToArray);

var color = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorRgb = colorRgb;
exports.colorRgba = colorRgba;
exports.hex2rgb = hex2rgb;
exports.rgb2hex = rgb2hex;
exports.rgba2rgb = rgba2rgb;
exports.gradient = gradient;

var _slicedToArray2 = interopRequireDefault(slicedToArray);

//??????????????????????????????????????? 
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
/*16??????????????????RGB??????*/

function colorRgb(hex) {
  var sColor = hex.toLowerCase();

  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";

      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }

      sColor = sColorNew;
    } //????????????????????????  


    var sColorChange = [];

    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }

    return "RGB(" + sColorChange.join(",") + ")";
  } else {
    return sColor;
  }
}

function colorRgba(hex, a) {
  return colorRgb(hex).replace(')', ',' + a + ')').replace('RGB', 'RGBA');
}

function hex2rgb(hex, out) {
  var rgb = [];

  for (var i = 1; i < 7; i += 2) {
    rgb.push(parseInt("0x" + hex.slice(i, i + 2)));
  }

  return rgb;
}

function rgb2hex(rgb) {
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  var hex = (r << 16 | g << 8 | b).toString(16);
  return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
}

function rgba2rgb(RGBA_color) {
  var background_color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#ffffff";

  var _RGBA_color$match = RGBA_color.match(/[\d\.]+/g),
      _RGBA_color$match2 = (0, _slicedToArray2["default"])(_RGBA_color$match, 4),
      r = _RGBA_color$match2[0],
      g = _RGBA_color$match2[1],
      b = _RGBA_color$match2[2],
      a = _RGBA_color$match2[3];

  var _colorRgb$match = colorRgb(background_color).match(/[\d\.]+/g),
      _colorRgb$match2 = (0, _slicedToArray2["default"])(_colorRgb$match, 3),
      br = _colorRgb$match2[0],
      bg = _colorRgb$match2[1],
      bb = _colorRgb$match2[2];

  return "RGB(" + [(1 - a) * br + a * r, (1 - a) * bg + a * g, (1 - a) * bb + a * b].join(',') + ")";
} // ?????????????????????


function gradient(startColor, endColor) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  // ??? hex ?????????rgb
  var sColor = hex2rgb(startColor);
  var eColor = hex2rgb(endColor); // ??????R\G\B??????????????????

  var rStep = (eColor[0] - sColor[0]) / step;
  var gStep = (eColor[1] - sColor[1]) / step;
  var bStep = (eColor[2] - sColor[2]) / step;
  var gradientColorArr = [];

  for (var i = 0; i < step; i++) {
    // ??????????????????hex???
    gradientColorArr.push(rgb2hex([parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])]));
  }

  return gradientColorArr;
}
});

unwrapExports(color);
var color_1 = color.colorRgb;
var color_2 = color.colorRgba;
var color_3 = color.hex2rgb;
var color_4 = color.rgb2hex;
var color_5 = color.rgba2rgb;
var color_6 = color.gradient;

var group$2 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var AnimationFrame = _canvax$$1["default"].AnimationFrame;
var BrokenLine = _canvax$$1["default"].Shapes.BrokenLine;
var Circle = _canvax$$1["default"].Shapes.Circle;
var Isogon = _canvax$$1["default"].Shapes.Isogon;
var Path = _canvax$$1["default"].Shapes.Path;

var LineGraphsGroup = /*#__PURE__*/function (_event$Dispatcher) {
  (0, _inherits2["default"])(LineGraphsGroup, _event$Dispatcher);

  var _super = _createSuper(LineGraphsGroup);

  function LineGraphsGroup(fieldMap, iGroup, opt, ctx, h, w, _graphs) {
    var _this;

    (0, _classCallCheck2["default"])(this, LineGraphsGroup);
    _this = _super.call(this);
    _this._graphs = _graphs;
    _this._opt = opt;
    _this.fieldMap = fieldMap;
    _this.field = null; //???extend?????????????????????

    _this.iGroup = iGroup;
    _this._yAxis = fieldMap.yAxis;
    _this.ctx = ctx;
    _this.w = w;
    _this.h = h;
    _this.y = 0;
    _this.line = {
      //???
      strokeStyle: fieldMap.color
    };
    _this.data = [];
    _this.sprite = null;
    _this._pointList = []; //brokenline???????????????

    _this._currPointList = []; //brokenline ????????????????????????

    _this._bline = null;

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(LineGraphsGroup.defaultProps()), opt); //TODO group??????field???????????????opt??????field??? ????????????????????? 
    //group??????field????????????????????????????????????, ???????????????extend?????????????????????????????????key?????????extend


    _this.field = fieldMap.field; //iGroup ???yAxis.field???????????????

    _this.init(opt);

    return _this;
  }

  (0, _createClass2["default"])(LineGraphsGroup, [{
    key: "init",
    value: function init() {
      this.sprite = new _canvax$$1["default"].Display.Sprite();
    }
  }, {
    key: "draw",
    value: function draw(opt, data) {
      _.extend(true, this, opt);

      this.data = data;

      this._widget(opt);
    } //????????????

  }, {
    key: "destroy",
    value: function destroy() {
      var me = this;
      me.sprite.animate({
        globalAlpha: 0
      }, {
        duration: 300,
        onComplete: function onComplete() {
          me.sprite.remove();
        }
      });
    } //styleType , normals , iGroup

  }, {
    key: "_getColor",
    value: function _getColor(s, iNode) {
      var color$$1 = this._getProp(s, iNode);

      if (color$$1 === undefined || color$$1 === null) {
        //??????????????????????????????style?????????????????????
        color$$1 = this._getLineStrokeStyle();

        if (s && s.lineargradient) {
          color$$1 = s.lineargradient[parseInt(s.lineargradient.length / 2)].color;
        }

        if (!color$$1 || !_.isString(color$$1)) {
          //??????????????????this.fieldMap.color
          color$$1 = this.fieldMap.color;
        }
      }
      return color$$1;
    }
  }, {
    key: "_getProp",
    value: function _getProp(s, iNode) {
      if (_.isArray(s)) {
        return s[this.iGroup];
      }

      if (_.isFunction(s)) {
        var _nodesInfo = [];

        if (iNode != undefined) {
          _nodesInfo.push(this.data[iNode]);
        }
        return s.apply(this, _nodesInfo);
      }
      return s;
    } //?????????tips??????????????? 

  }, {
    key: "getNodeInfoAt",
    value: function getNodeInfoAt($index, e) {
      var o = this.data[$index];

      if (e && e.eventInfo && e.eventInfo.dimension_1) {
        var lt = e.eventInfo.dimension_1.layoutType;

        if (lt == 'proportion') {
          //$index????????????xpos?????????????????????data??????$index?????????????????? node
          var xDis;

          for (var i = 0, l = this.data.length; i < l; i++) {
            var _node = this.data[i];

            var _xDis = Math.abs(_node.x - $index);

            if (xDis == undefined || _xDis < xDis) {
              xDis = _xDis;
              o = _node;
              continue;
            }
          }
        }
      }
      return o;
    }
    /**
     * 
     * @param {object} opt 
     * @param {data} data 
     * 
     * ????????????reset?????????????????????{name : 'datazoom', left:-1,right:1},  
     * dataTrigger ???????????????????????????????????????????????????????????????????????? left?????????????????????right??????????????????
     * @param {object} dataTrigger 
     */

  }, {
    key: "resetData",
    value: function resetData(data, dataTrigger) {
      var me = this;

      if (data) {
        this.data = data;
      }
      me._pointList = this._getPointList(this.data);
      var plen = me._pointList.length;
      var cplen = me._currPointList.length;
      var params = {
        left: 0,
        //????????????????????????
        right: plen - cplen
      };

      if (dataTrigger) {
        _.extend(params, dataTrigger.params);
      }

      if (params.left) {
        if (params.left > 0) {
          this._currPointList = this._pointList.slice(0, params.left).concat(this._currPointList);
        }

        if (params.left < 0) {
          this._currPointList.splice(0, Math.abs(params.left));
        }
      }

      if (params.right) {
        if (params.right > 0) {
          this._currPointList = this._currPointList.concat(this._pointList.slice(-params.right));
        }

        if (params.right < 0) {
          this._currPointList.splice(this._currPointList.length - Math.abs(params.right));
        }
      }

      me._createNodes();

      me._createTexts();

      me._grow();
    }
  }, {
    key: "_grow",
    value: function _grow(callback) {
      var me = this;

      if (!me.data.length) {
        //?????????index????????????
        callback && callback(me);
        return;
      }

      function _update(list) {
        if (me._bline.context) {
          me._bline.context.pointList = _.clone(list);
          me._bline.context.strokeStyle = me._getLineStrokeStyle(list);
        }

        if (me._area.context) {
          me._area.context.path = me._fillLine(me._bline);
          me._area.context.fillStyle = me._getFillStyle();
        }

        var iNode = 0;

        _.each(list, function (point, i) {
          if (_.isNumber(point[1])) {
            if (me._nodes) {
              var _node = me._nodes.getChildAt(iNode);

              if (_node) {
                _node.context.x = point[0];
                _node.context.y = point[1];
              }
            }

            if (me._labels) {
              var _text = me._labels.getChildAt(iNode);

              if (_text) {
                _text.context.x = point[0];
                _text.context.y = point[1] - 3;

                me._checkTextPos(_text, i);
              }
            }

            iNode++;
          }
        });
      }
      this._growTween = AnimationFrame.registTween({
        from: me._getPointPosStr(me._currPointList),
        to: me._getPointPosStr(me._pointList),
        desc: me.field,
        onUpdate: function onUpdate(arg) {
          for (var p in arg) {
            var ind = parseInt(p.split("_")[2]);
            var xory = parseInt(p.split("_")[1]);
            me._currPointList[ind] && (me._currPointList[ind][xory] = arg[p]); //p_1_n?????????1??????x or y
          }

          _update(me._currPointList);
        },
        onComplete: function onComplete() {
          me.sprite._removeTween(me._growTween);

          me._growTween = null; //??????????????????????????????????????????????????????
          //?????????onUpdate???????????????????????????????????????????????????
          //???????????????????????????????????????????????????

          _update(me._pointList);

          callback && callback(me);
        }
      });

      this.sprite._tweens.push(this._growTween);
    }
  }, {
    key: "_getPointPosStr",
    value: function _getPointPosStr(list) {
      var obj = {};

      _.each(list, function (p, i) {
        if (!p) {
          //????????????????????????????????????
          return;
        }
        obj["p_1_" + i] = p[1]; //p_y==p_1

        obj["p_0_" + i] = p[0]; //p_x==p_0
      });

      return obj;
    }
  }, {
    key: "_getPointList",
    value: function _getPointList(data) {
      var list = [];

      for (var a = 0, al = data.length; a < al; a++) {
        var o = data[a];
        list.push([o.x, o.y]);
      }
      return list;
    }
  }, {
    key: "_widget",
    value: function _widget(opt) {
      var me = this;
      !opt && (opt = {});
      me._pointList = this._getPointList(me.data);

      if (me._pointList.length == 0) {
        //filter??????data??????length==0
        return;
      }
      var list = [];

      if (opt.animation) {
        var firstNode = this._getFirstNode();

        var firstY = firstNode ? firstNode.y : undefined;

        for (var a = 0, al = me.data.length; a < al; a++) {
          var o = me.data[a];
          list.push([o.x, _.isNumber(o.y) ? firstY : o.y]);
        }
      } else {
        list = me._pointList;
      }
      me._currPointList = list;
      var blineCtx = {
        pointList: list,
        lineWidth: me.line.lineWidth,
        y: me.y,
        strokeStyle: me._getLineStrokeStyle(list),
        //_getLineStrokeStyle ??????????????????????????????????????????
        smooth: me.line.smooth,
        lineType: me._getProp(me.line.lineType),
        smoothFilter: function smoothFilter(rp) {
          //smooth???true?????????????????????????????????????????????????????????????????????
          if (rp[1] > 0) {
            rp[1] = 0;
          } else if (Math.abs(rp[1]) > me.h) {
            rp[1] = -me.h;
          }
        },
        lineCap: "round"
      };
      var bline = new BrokenLine({
        //??????
        context: blineCtx
      });
      bline.on(event.types.get(), function (e) {
        e.eventInfo = {
          trigger: me.line,
          nodes: []
        };

        me._graphs.app.fire(e.type, e);
      });

      if (!this.line.enabled) {
        bline.context.visible = false;
      }
      me.sprite.addChild(bline);
      me._bline = bline;
      var area = new Path({
        //??????
        context: {
          path: me._fillLine(bline),
          fillStyle: me._getFillStyle(),
          globalAlpha: _.isArray(me.area.alpha) ? 1 : me.area.alpha
        }
      });
      area.on(event.types.get(), function (e) {
        e.eventInfo = {
          trigger: me.area,
          nodes: []
        };

        me._graphs.app.fire(e.type, e);
      });

      if (!this.area.enabled) {
        area.context.visible = false;
      }
      me.sprite.addChild(area);
      me._area = area;

      me._createNodes();

      me._createTexts();
    }
  }, {
    key: "_getFirstNode",
    value: function _getFirstNode() {
      var _firstNode = null;

      for (var i = 0, l = this.data.length; i < l; i++) {
        var nodeData = this.data[i];

        if (_.isNumber(nodeData.y)) {
          if (_firstNode === null || this._yAxis.align == "right") {
            //_yAxis??????????????????
            _firstNode = nodeData;
          }

          if (this._yAxis.align !== "right" && _firstNode !== null) {
            break;
          }
        }
      }

      return _firstNode;
    }
  }, {
    key: "_getFillStyle",
    value: function _getFillStyle() {
      var me = this;
      var fill_gradient = null; // _fillStyle ?????? ??????????????????????????????_getColor??? _getColor?????????????????????

      var _fillStyle = me._getProp(me.area.fillStyle) || me._getLineStrokeStyle(null, "fillStyle");

      if (_.isArray(me.area.alpha) && !(_fillStyle instanceof CanvasGradient)) {
        //alpha???????????????????????????????????????????????????????????????????????????
        //??????????????????style????????????gradient????????????????????????
        me.area.alpha.length = 2;

        if (me.area.alpha[0] == undefined) {
          me.area.alpha[0] = 0;
        }

        if (me.area.alpha[1] == undefined) {
          me.area.alpha[1] = 0;
        }

        var topP = _.min(me._bline.context.pointList, function (p) {
          return p[1];
        });

        if (topP[0] === undefined || topP[1] === undefined) {
          return null;
        }

        fill_gradient = me.ctx.createLinearGradient(topP[0], topP[1], topP[0], 0);
        var rgb = (0, color.colorRgb)(_fillStyle);
        var rgba0 = rgb.replace(')', ', ' + me._getProp(me.area.alpha[0]) + ')').replace('RGB', 'RGBA');
        fill_gradient.addColorStop(0, rgba0);
        var rgba1 = rgb.replace(')', ', ' + me.area.alpha[1] + ')').replace('RGB', 'RGBA');
        fill_gradient.addColorStop(1, rgba1);
        _fillStyle = fill_gradient;
      }
      return _fillStyle;
    }
  }, {
    key: "_getLineStrokeStyle",
    value: function _getLineStrokeStyle(pointList, from) {
      var me = this;

      var _style;

      if (!this._opt.line || !this._opt.line.strokeStyle) {
        //????????????????????????line.strokeStyle????????????????????????
        return this.line.strokeStyle;
      }

      if (this._opt.line.strokeStyle.lineargradient) {
        //?????????????????? ???????????????????????????
        //???bline?????????????????????
        !pointList && (pointList = this._bline.context.pointList);

        var topP = _.min(pointList, function (p) {
          return p[1];
        });

        var bottomP = _.max(pointList, function (p) {
          return p[1];
        });

        if (from == "fillStyle") {
          bottomP = [0, 0];
        }

        if (topP[0] === undefined || topP[1] === undefined || bottomP[1] === undefined) {
          return null;
        }
        //????????????????????????
        //console.log( topP[0] + "|"+ topP[1]+ "|"+  topP[0]+ "|"+ bottomP[1] )

        _style = me.ctx.createLinearGradient(topP[0], topP[1], topP[0], bottomP[1]);

        _.each(this._opt.line.strokeStyle.lineargradient, function (item) {
          _style.addColorStop(item.position, item.color);
        });

        return _style;
      } else {
        //????????????????????????????????????????????????line??????
        //if( this.line && this.line.strokeStyle ){
        //    _style = this.line.strokeStyle
        //} else {
        _style = this._getColor(this._opt.line.strokeStyle); //}

        return _style;
      }
    }
  }, {
    key: "_createNodes",
    value: function _createNodes() {
      var me = this;
      var list = me._currPointList; //if ((me.node.enabled || list.length == 1) && !!me.line.lineWidth) { //???????????????

      if (!this._nodes) {
        this._nodes = new _canvax$$1["default"].Display.Sprite({});
        this.sprite.addChild(this._nodes);
      }
      var iNode = 0; //????????????????????????a???????????????list???????????????????????????

      for (var a = 0, al = list.length; a < al; a++) {
        var _nodeColor = me._getColor(me.node.strokeStyle || me.line.strokeStyle, a);

        me.data[a].color = _nodeColor; //?????????data??????tips???????????????

        if (!me.node.enabled) {
          //?????????return??? ???????????????data???color????????????????????????
          continue;
        }
        var _point = me._currPointList[a];

        if (!_point || !_.isNumber(_point[1])) {
          //???????????????????????????point???undefined
          continue;
        }
        var context = {
          x: _point[0],
          y: _point[1],
          r: me._getProp(me.node.radius, a),
          lineWidth: me._getProp(me.node.lineWidth, a) || 2,
          strokeStyle: _nodeColor,
          fillStyle: me._getProp(me.node.fillStyle, a),
          visible: !!me._getProp(me.node.visible, a)
        };
        var nodeConstructor = Circle;

        var _shapeType = me._getProp(me.node.shapeType, a);

        if (_shapeType == "isogon") {
          nodeConstructor = Isogon;
          context.n = me._getProp(me.node.isogonPointNum, a);
        }

        if (_shapeType == "path") {
          nodeConstructor = Path;
          context.path = me._getProp(me.node.path, a);
        }
        var nodeEl = me._nodes.children[iNode]; //??????????????????????????????extend context

        if (nodeEl) {
          if (nodeEl.type == _shapeType) {
            _.extend(nodeEl.context, context);
          } else {
            nodeEl.destroy(); //????????????????????????????????????????????????

            nodeEl = new nodeConstructor({
              context: context
            });

            me._nodes.addChildAt(nodeEl, iNode);
          }
        } else {
          nodeEl = new nodeConstructor({
            context: context
          });

          me._nodes.addChild(nodeEl);
        }

        if (me.node.corner) {
          //??????????????????
          var y = me._pointList[a][1];
          var pre = me._pointList[a - 1];
          var next = me._pointList[a + 1];

          if (pre && next) {
            if (y == pre[1] && y == next[1]) {
              nodeEl.context.visible = false;
            }
          }
        }
        iNode++;
      }

      if (me._nodes.children.length > iNode) {
        for (var i = iNode, l = me._nodes.children.length; i < l; i++) {
          me._nodes.children[i].destroy();

          i--;
          l--;
        }
      }
    }
  }, {
    key: "_createTexts",
    value: function _createTexts() {
      var me = this;
      var list = me._currPointList;

      if (me.label.enabled) {
        //?????????????????????info
        if (!this._labels) {
          this._labels = new _canvax$$1["default"].Display.Sprite({});
          this.sprite.addChild(this._labels);
        }

        var iNode = 0; //????????????????????????a???????????????list???????????????????????????

        for (var a = 0, al = list.length; a < al; a++) {
          var _point = list[a];

          if (!_point || !_.isNumber(_point[1])) {
            //???????????????????????????point???undefined
            continue;
          }
          var context = {
            x: _point[0],
            y: _point[1] - 3,
            fontSize: this.label.fontSize,
            textAlign: "center",
            textBaseline: "bottom",
            fillStyle: me._getColor(me.label.fontColor, a),
            lineWidth: 1,
            strokeStyle: "#ffffff"
          };
          var value = me.data[a].value;

          if (_.isFunction(me.label.format)) {
            value = me.label.format(value, me.data[a]) || value;
          }

          if (value == undefined || value == null) {
            continue;
          }
          var _label = this._labels.children[iNode];

          if (_label) {
            _label.resetText(value);

            _.extend(_label.context, context);
          } else {
            _label = new _canvax$$1["default"].Display.Text(value, {
              context: context
            });

            me._labels.addChild(_label);

            me._checkTextPos(_label, a);
          }

          iNode++;
        }

        if (me._labels.children.length > iNode) {
          for (var i = iNode, l = me._labels.children.length; i < l; i++) {
            me._labels.children[i].destroy();

            i--;
            l--;
          }
        }
      }
    }
  }, {
    key: "_checkTextPos",
    value: function _checkTextPos(_label, ind) {
      var me = this;
      var list = me._currPointList;
      var pre = list[ind - 1];
      var next = list[ind + 1];

      if (pre && next && pre[1] < _label.context.y && next[1] < _label.context.y) {
        _label.context.y += 7;
        _label.context.textBaseline = "top";
      }
    }
  }, {
    key: "_fillLine",
    value: function _fillLine(bline) {
      //????????????
      var fillPath = _.clone(bline.context.pointList);

      var path = "";
      var originPos = -this._yAxis.originPos;
      var _currPath = null;

      _.each(fillPath, function (point, i) {
        if (_.isNumber(point[1])) {
          if (_currPath === null) {
            _currPath = [];
          }

          _currPath.push(point);
        } else {
          // not a number
          if (_currPath && _currPath.length) {
            getOnePath();
          }
        }

        if (i == fillPath.length - 1 && _.isNumber(point[1])) {
          getOnePath();
        }
      });

      function getOnePath() {
        _currPath.push([_currPath[_currPath.length - 1][0], originPos], [_currPath[0][0], originPos], [_currPath[0][0], _currPath[0][1]]);

        path += (0, tools.getPath)(_currPath);
        _currPath = null;
      }

      return path;
    } //??????x????????? val??? ???????????????node??? ??????node?????????????????????node??? ???????????????node?????????????????????

  }, {
    key: "getNodeInfoOfX",
    value: function getNodeInfoOfX(x) {
      var me = this;
      var nodeInfo;

      for (var i = 0, l = this.data.length; i < l; i++) {
        if (this.data[i].value !== null && Math.abs(this.data[i].x - x) <= 1) {
          //??????????????????1px????????????
          nodeInfo = this.data[i];
          return nodeInfo;
        }
      }

      var getPointFromXInLine = function getPointFromXInLine(x, line) {
        var p = {
          x: x,
          y: 0
        };
        p.y = line[0][1] + (line[1][1] - line[0][1]) / (line[1][0] - line[0][0]) * (x - line[0][0]);
        return p;
      };

      var point;

      var search = function search(points) {
        if (x < points[0][0] || x > points.slice(-1)[0][0]) {
          return;
        }
        var midInd = parseInt(points.length / 2);

        if (Math.abs(points[midInd][0] - x) <= 1) {
          point = {
            x: points[midInd][0],
            y: points[midInd][1]
          };
          return;
        }
        var _pl = [];

        if (x > points[midInd][0]) {
          if (x < points[midInd + 1][0]) {
            point = getPointFromXInLine(x, [points[midInd], points[midInd + 1]]);
            return;
          } else {
            _pl = points.slice(midInd + 1);
          }
        } else {
          if (x > points[midInd - 1][0]) {
            point = getPointFromXInLine(x, [points[midInd - 1], points[midInd]]);
            return;
          } else {
            _pl = points.slice(0, midInd);
          }
        }
        search(_pl);
      };

      this._bline && search(this._bline.context.pointList);

      if (!point || point.y == undefined) {
        return null;
      }

      var node = {
        type: "line",
        iGroup: me.iGroup,
        iNode: -1,
        //??????data??????????????????????????????????????????
        field: me.field,
        value: this._yAxis.getValOfPos(-point.y),
        x: point.x,
        y: point.y,
        rowData: null,
        //???data?????????????????????rowData
        color: me._getProp(me.node.strokeStyle) || me._getLineStrokeStyle()
      };
      return node;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        line: {
          detail: '?????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            strokeStyle: {
              detail: '????????????',
              "default": undefined //???????????????constructor????????????

            },
            lineWidth: {
              detail: '????????????',
              "default": 2
            },
            lineType: {
              detail: '????????????',
              "default": 'solid'
            },
            smooth: {
              detail: '??????????????????',
              "default": true
            }
          }
        },
        node: {
          detail: '?????????????????????????????????????????????icon??????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            shapeType: {
              detail: '??????icon????????????????????????circle',
              documentation: '?????????"isogon"(????????????)???"path"????????????path?????????????????????',
              "default": 'circle'
            },
            isogonPointNum: {
              detail: 'shapeType???"isogon"???????????????????????????????????????',
              "default": 3
            },
            path: {
              detail: 'shapeType???path???????????????????????????path??????',
              "default": null
            },
            corner: {
              detail: '??????????????????',
              "default": false
            },
            radius: {
              detail: '????????????',
              "default": 3
            },
            fillStyle: {
              detail: '????????????????????????',
              "default": '#ffffff'
            },
            strokeStyle: {
              detail: '????????????????????????????????????line.strokeStyle????????????',
              "default": null
            },
            lineWidth: {
              detail: '????????????????????????',
              "default": 2
            },
            visible: {
              detail: '??????????????????,????????????',
              "default": true
            }
          }
        },
        label: {
          detail: '????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": false
            },
            fontColor: {
              detail: '????????????',
              "default": null
            },
            strokeStyle: {
              detail: '???????????????',
              "default": null
            },
            fontSize: {
              detail: '??????????????????',
              "default": 12
            },
            format: {
              detail: '???????????????????????????',
              "default": null
            }
          }
        },
        area: {
          detail: '??????????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            fillStyle: {
              detail: '???????????????',
              "default": null
            },
            alpha: {
              detail: '???????????????',
              "default": 0.2
            }
          }
        }
      };
    }
  }]);
  return LineGraphsGroup;
}(event.Dispatcher);

exports["default"] = LineGraphsGroup;
});

unwrapExports(group$2);

var line = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _group = interopRequireDefault(group$2);

var _index = interopRequireDefault(graphs);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LineGraphs = /*#__PURE__*/function (_GraphsBase) {
  (0, _inherits2["default"])(LineGraphs, _GraphsBase);

  var _super = _createSuper(LineGraphs);

  function LineGraphs(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, LineGraphs);
    _this = _super.call(this, opt, app);
    _this.type = "line";
    _this.enabledField = null;
    _this.groups = []; //????????????

    _canvax._.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(LineGraphs.defaultProps()), opt);

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(LineGraphs, [{
    key: "init",
    value: function init() {}
  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {});
      this.width = opt.width;
      this.height = opt.height;

      _canvax._.extend(true, this.origin, opt.origin);

      this.sprite.context.x = this.origin.x;
      this.sprite.context.y = this.origin.y;
      this.data = this._trimGraphs();

      this._setGroupsForYfield(this.data, null, opt); //this.grow();


      if (this.animation && !opt.resize) {
        this.grow();
      } else {
        this.fire("complete");
      }

      return this;
    }
  }, {
    key: "resetData",
    value: function resetData(dataFrame, dataTrigger) {
      var me = this;

      if (dataFrame) {
        me.dataFrame = dataFrame;
        me.data = me._trimGraphs();
      }

      _canvax._.each(me.groups, function (g) {
        g.resetData(me.data[g.field].data, dataTrigger);
      });
    }
  }, {
    key: "setEnabledField",
    value: function setEnabledField() {
      //?????????????????? field??????enabledFields?????????enabled????????????????????? enabled?????????field??????
      this.enabledField = this.app.getComponent({
        name: 'coord'
      }).filterEnabledFields(this.field);
    } //dataFrame

  }, {
    key: "_trimGraphs",
    value: function _trimGraphs() {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      }); //{"uv":{}.. ,"ppc": "pv":]}
      //???????????????????????????????????????


      var tmpData = {};
      me.setEnabledField();

      _canvax._.each(_canvax._.flatten(me.enabledField), function (field, i) {
        //let maxValue = 0;
        var fieldMap = me.app.getComponent({
          name: 'coord'
        }).getFieldMapOf(field); //??????line?????????data??????

        var _lineData = me.dataFrame.getFieldData(field);

        if (!_lineData) return; //console.log( JSON.stringify( _lineData ) )

        var _data = [];

        for (var b = 0, bl = _lineData.length; b < bl; b++) {
          //???????????????value??????????????????point??????{x:  y: }
          var point = _coord.getPoint({
            iNode: b,
            field: field,
            value: {
              //x:
              y: _lineData[b]
            }
          });

          var node = {
            type: "line",
            iGroup: i,
            iNode: b,
            field: field,
            value: _lineData[b],
            x: point.pos.x,
            y: point.pos.y,
            rowData: me.dataFrame.getRowDataAt(b),
            color: fieldMap.color //???????????????????????????????????????group??????????????????

          };

          _data.push(node);
        }
        tmpData[field] = {
          yAxis: fieldMap.yAxis,
          field: field,
          data: _data
        };
      });

      return tmpData;
    }
    /**
     * ????????????
     */

  }, {
    key: "grow",
    value: function grow(callback) {
      var gi = 0;
      var gl = this.groups.length;
      var me = this;

      _canvax._.each(this.groups, function (g) {
        g._grow(function () {
          gi++;
          callback && callback(g);

          if (gi == gl) {
            me.fire("complete");
          }
        });
      });

      return this;
    }
  }, {
    key: "show",
    value: function show(field) {
      var me = this; //??????????????????field???????????????????????????y????????????????????????????????????????????????????????????bug????????????field?????????????????????
      //??????field????????????graphs?????????????????????
      // if( _.indexOf( _.flatten( [me.field] ), field ) == -1 ){
      //     return;
      // };

      this.data = this._trimGraphs();

      this._setGroupsForYfield(this.data, field);

      _canvax._.each(this.groups, function (g) {
        g.resetData(me.data[g.field].data);
      });
    }
  }, {
    key: "hide",
    value: function hide(field) {
      var me = this;
      var i = me.getGroupIndex(field);

      if (i > -1) {
        this.groups.splice(i, 1)[0].destroy(); //return; //??????????????????return???????????????show?????????????????????????????????????????????????????????y??????????????????????????? ?????????graphs??????????????????
      }
      this.data = this._trimGraphs();

      _canvax._.each(this.groups, function (g) {
        g.resetData(me.data[g.field].data);
      });
    }
  }, {
    key: "getGroupIndex",
    value: function getGroupIndex(field) {
      var ind = -1;

      for (var i = 0, l = this.groups.length; i < l; i++) {
        if (this.groups[i].field === field) {
          ind = i;
          break;
        }
      }

      return ind;
    }
  }, {
    key: "getGroup",
    value: function getGroup(field) {
      return this.groups[this.getGroupIndex(field)];
    }
  }, {
    key: "_setGroupsForYfield",
    value: function _setGroupsForYfield(data, fields, opt) {
      var me = this;
      !opt && (opt = {});

      if (fields) {
        //???????????????field????????????????????????????????????data?????????????????????field?????????
        //????????????add()???????????????
        fields = _canvax._.flatten([fields]);
      }

      var _flattenField = _canvax._.flatten([this.field]);

      _canvax._.each(data, function (g, field) {
        if (fields && _canvax._.indexOf(fields, field) == -1) {
          //???????????????fields???????????????field??????fields??????????????????????????????
          //?????????group?????????graphs?????????
          return;
        }
        var fieldMap = me.app.getComponent({
          name: 'coord'
        }).getFieldMapOf(field); //iGroup ?????????group??????graphs??????ind?????????????????????????????????index??? ??????fieldMap.ind

        var iGroup = _canvax._.indexOf(_flattenField, field);

        var group = new _group["default"](fieldMap, iGroup, //?????????fieldMap.ind
        me._opt, me.ctx, me.height, me.width, me);
        group.draw({
          animation: me.animation && !opt.resize
        }, g.data);
        var insert = false; //???groups???????????????????????????_groupInd?????????????????????

        for (var gi = 0, gl = me.groups.length; gi < gl; gi++) {
          if (iGroup < me.groups[gi].iGroup) {
            me.groups.splice(gi, 0, group);
            insert = true;
            me.sprite.addChildAt(group.sprite, gi);
            break;
          }
        }

        if (!insert) {
          me.groups.push(group);
          me.sprite.addChild(group.sprite);
        }
      });
    }
  }, {
    key: "getNodesAt",
    value: function getNodesAt(ind, e) {
      var _nodesInfoList = []; //??????????????????

      _canvax._.each(this.groups, function (group) {
        var node = group.getNodeInfoAt(ind, e);
        node && _nodesInfoList.push(node);
      });

      return _nodesInfoList;
    }
  }, {
    key: "getNodesOfPos",
    value: function getNodesOfPos(x) {
      var _nodesInfoList = []; //??????????????????

      _canvax._.each(this.groups, function (group) {
        var node = group.getNodeInfoOfX(x);
        node && _nodesInfoList.push(node);
      });

      return _nodesInfoList;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        field: {
          detail: '???????????????????????????????????????',
          "default": null
        },
        yAxisAlign: {
          detail: '???????????????y?????????',
          "default": 'left'
        },
        _props: [_group["default"]]
      };
    }
  }]);
  return LineGraphs;
}(_index["default"]);

_index["default"].registerComponent(LineGraphs, 'graphs', 'line');

var _default = LineGraphs;
exports["default"] = _default;
});

unwrapExports(line);

var sankey = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;



function _default() {
  var sankey = {},
      nodeWidth = 24,
      nodePadding = 8,
      size = [1, 1],
      nodes = [],
      sort = function sort(a, b) {
    return a.y - b.y;
  },
      // sort = function(a, b) {
  //     return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  // },
  links = [];

  sankey.nodeWidth = function (_) {
    if (!arguments.length) return nodeWidth;
    nodeWidth = +_;
    return sankey;
  };

  sankey.nodeSort = function (_) {
    if (!arguments.length) return sort;
    sort = _;
    return sankey;
  };

  sankey.nodePadding = function (_) {
    if (!arguments.length) return nodePadding;
    nodePadding = +_;
    return sankey;
  };

  sankey.nodes = function (_) {
    if (!arguments.length) return nodes;
    nodes = _;
    return sankey;
  };

  sankey.links = function (_) {
    if (!arguments.length) return links;
    links = _;
    return sankey;
  };

  sankey.size = function (_) {
    if (!arguments.length) return size;
    size = _;
    return sankey;
  };

  sankey.layout = function (iterations) {
    computeNodeLinks();
    computeNodeValues();
    computeNodeBreadths();
    computeNodeDepths(iterations);
    computeLinkDepths();
    return sankey;
  };

  sankey.relayout = function () {
    computeLinkDepths();
    return sankey;
  }; //d3


  function d3_interpolateNumber(a, b) {
    a = +a, b = +b;
    return function (t) {
      return a * (1 - t) + b * t;
    };
  }

  sankey.link = function () {
    var curvature = .5;

    function link(d) {
      var x0 = d.source.x + d.source.dx,
          x1 = d.target.x,
          xi = d3_interpolateNumber(x0, x1),
          x2 = xi(curvature),
          x3 = xi(1 - curvature),
          //y0 = d.source.y + d.sy + d.dy / 2,
      //y1 = d.target.y + d.ty + d.dy / 2;
      y0 = d.source.y + d.sy,
          y1 = d.target.y + d.ty;
      var dy = d.dy;

      if (dy < 1) {
        dy = 1;
      }
      var path = "M" + x0 + "," + y0 + "C" + x2 + "," + y0 + " " + x3 + "," + y1 + " " + x1 + "," + y1;
      path += "v" + dy;
      path += "C" + x3 + "," + (y1 + dy) + " " + x2 + "," + (y0 + dy) + " " + x0 + "," + (y0 + dy);
      path += "v" + -dy + "z";
      return path;
    }

    link.curvature = function (_) {
      if (!arguments.length) return curvature;
      curvature = +_;
      return link;
    };

    return link;
  }; // Populate the sourceLinks and targetLinks for each node.
  // Also, if the source and target are not objects, assume they are indices.


  function computeNodeLinks() {
    nodes.forEach(function (node) {
      node.sourceLinks = [];
      node.targetLinks = [];
    });
    links.forEach(function (link) {
      var source = link.source,
          target = link.target;
      if (typeof source === "number") source = link.source = nodes[link.source];
      if (typeof target === "number") target = link.target = nodes[link.target];
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
    });
  }

  function d3_sum(e, t) {
    var n = 0,
        r = e.length,
        i,
        s = -1;
    if (arguments.length === 1) while (++s < r) {
      isNaN(i = +e[s]) || (n += i);
    } else while (++s < r) {
      isNaN(i = +t.call(e, e[s], s)) || (n += i);
    }
    return n;
  }

  function d3_min(e, t) {
    var n = -1,
        r = e.length,
        i,
        s;

    if (arguments.length === 1) {
      while (++n < r && ((i = e[n]) == null || i != i)) {
        i = undefined;
      }

      while (++n < r) {
        (s = e[n]) != null && i > s && (i = s);
      }
    } else {
      while (++n < r && ((i = t.call(e, e[n], n)) == null || i != i)) {
        i = undefined;
      }

      while (++n < r) {
        (s = t.call(e, e[n], n)) != null && i > s && (i = s);
      }
    }

    return i;
  }


  function computeNodeValues() {
    nodes.forEach(function (node) {
      node.value = Math.max(d3_sum(node.sourceLinks, value), d3_sum(node.targetLinks, value));
    });
  } // Iteratively assign the breadth (x-position) for each node.
  // Nodes are assigned the maximum breadth of incoming neighbors plus one;
  // nodes with no incoming links are assigned breadth zero, while
  // nodes with no outgoing links are assigned the maximum breadth.


  function computeNodeBreadths() {
    var remainingNodes = nodes,
        nextNodes,
        x = 0;

    while (remainingNodes.length) {
      nextNodes = [];
      remainingNodes.forEach(function (node) {
        node.x = x;
        node.dx = nodeWidth;
        node.sourceLinks.forEach(function (link) {
          if (nextNodes.indexOf(link.target) < 0) {
            nextNodes.push(link.target);
          }
        });
      });
      remainingNodes = nextNodes;
      ++x;
    } //


    moveSinksRight(x);
    scaleNodeBreadths((size[0] - nodeWidth) / (x - 1));
  }

  function moveSinksRight(x) {
    nodes.forEach(function (node) {
      if (!node.sourceLinks.length) {
        node.x = x - 1;
      }
    });
  }

  function scaleNodeBreadths(kx) {
    nodes.forEach(function (node) {
      node.x *= kx;
    });
  } //d3 core


  function d3_class(ctor, properties) {
    if (Object.defineProperty) {
      for (var key in properties) {
        //TODO:d3???????????????ie?????????????????????
        Object.defineProperty(ctor.prototype, key, {
          value: properties[key],
          enumerable: false
        });
      }
    } else {
      //ie????????????
      _canvax._.extend(ctor.prototype, properties);
    }
  }

  var d3_nest = function d3_nest() {
    var nest = {},
        keys = [],
        sortKeys = [],
        sortValues,
        rollup;

    function map(mapType, array, depth) {
      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
      var i = -1,
          n = array.length,
          key = keys[depth++],
          keyValue,
          object,
          setter,
          valuesByKey = new d3_Map(),
          values;

      while (++i < n) {
        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
          values.push(object);
        } else {
          valuesByKey.set(keyValue, [object]);
        }
      }

      if (mapType) {
        object = mapType();

        setter = function setter(keyValue, values) {
          object.set(keyValue, map(mapType, values, depth));
        };
      } else {
        object = {};

        setter = function setter(keyValue, values) {
          object[keyValue] = map(mapType, values, depth);
        };
      }

      valuesByKey.forEach(setter);
      return object;
    }

    function entries(map, depth) {
      if (depth >= keys.length) return map;
      var array = [],
          sortKey = sortKeys[depth++];
      map.forEach(function (key, keyMap) {
        array.push({
          key: key,
          values: entries(keyMap, depth)
        });
      });
      return sortKey ? array.sort(function (a, b) {
        return sortKey(a.key, b.key);
      }) : array;
    }

    nest.map = function (array, mapType) {
      return map(mapType, array, 0);
    };

    nest.entries = function (array) {
      return entries(map(d3_map, array, 0), 0);
    };

    nest.key = function (d) {
      keys.push(d);
      return nest;
    }; // Specifies the order for the most-recently specified key.
    // Note: only applies to entries. Map keys are unordered!


    nest.sortKeys = function (order) {
      sortKeys[keys.length - 1] = order;
      return nest;
    }; // Specifies the order for leaf values.
    // Applies to both maps and entries array.


    nest.sortValues = function (order) {
      sortValues = order;
      return nest;
    };

    nest.rollup = function (f) {
      rollup = f;
      return nest;
    };

    return nest;
  };

  var d3_map = function d3_map(object, f) {
    var map = new d3_Map();

    if (object instanceof d3_Map) {
      object.forEach(function (key, value) {
        map.set(key, value);
      });
    } else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;
      if (arguments.length === 1) while (++i < n) {
        map.set(i, object[i]);
      } else while (++i < n) {
        map.set(f.call(object, o = object[i], i), o);
      }
    } else {
      for (var key in object) {
        map.set(key, object[key]);
      }
    }

    return map;
  };

  function d3_Map() {
    this._ = Object.create(null);
  }

  var d3_map_proto = "__proto__",
      d3_map_zero = "\0";
  d3_class(d3_Map, {
    has: d3_map_has,
    get: function get(key) {
      return this._[d3_map_escape(key)];
    },
    set: function set(key, value) {
      return this._[d3_map_escape(key)] = value;
    },
    remove: d3_map_remove,
    keys: d3_map_keys,
    values: function values() {
      var values = [];

      for (var key in this._) {
        values.push(this._[key]);
      }

      return values;
    },
    entries: function entries() {
      var entries = [];

      for (var key in this._) {
        entries.push({
          key: d3_map_unescape(key),
          value: this._[key]
        });
      }

      return entries;
    },
    size: d3_map_size,
    empty: d3_map_empty,
    forEach: function forEach(f) {
      for (var key in this._) {
        f.call(this, d3_map_unescape(key), this._[key]);
      }
    }
  });

  function d3_map_escape(key) {
    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
  }

  function d3_map_unescape(key) {
    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
  }

  function d3_map_has(key) {
    return d3_map_escape(key) in this._;
  }

  function d3_map_remove(key) {
    return (key = d3_map_escape(key)) in this._ && delete this._[key];
  }

  function d3_map_keys() {
    var keys = [];

    for (var key in this._) {
      keys.push(d3_map_unescape(key));
    }

    return keys;
  }

  function d3_map_size() {
    var size = 0;

    for (var key in this._) {
      ++size;
    }

    return size;
  }

  function d3_map_empty() {
    for (var key in this._) {
      return false;
    }

    return true;
  }

  function d3_sortKey(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function computeNodeDepths(iterations) {
    var nodesByBreadth = d3_nest().key(function (d) {
      return d.x;
    }).sortKeys(d3_sortKey).entries(nodes).map(function (d) {
      return d.values;
    }); //

    initializeNodeDepth();
    resolveCollisions();

    for (var alpha = 1; iterations > 0; --iterations) {
      relaxRightToLeft(alpha *= .99);
      resolveCollisions();
      relaxLeftToRight(alpha);
      resolveCollisions();
    }

    function initializeNodeDepth() {
      var ky = d3_min(nodesByBreadth, function (nodes) {
        return (size[1] - (nodes.length - 1) * nodePadding) / d3_sum(nodes, value);
      });
      nodesByBreadth.forEach(function (nodes) {
        nodes.forEach(function (node, i) {
          node.y = i;
          node.dy = node.value * ky;
        });
      });
      links.forEach(function (link) {
        link.dy = link.value * ky;
      });
    }

    function relaxLeftToRight(alpha) {
      nodesByBreadth.forEach(function (nodes, breadth) {
        nodes.forEach(function (node) {
          if (node.targetLinks.length) {
            var y = d3_sum(node.targetLinks, weightedSource) / d3_sum(node.targetLinks, value);
            node.y += (y - center(node)) * alpha;
          }
        });
      });

      function weightedSource(link) {
        return center(link.source) * link.value;
      }
    }

    function relaxRightToLeft(alpha) {
      nodesByBreadth.slice().reverse().forEach(function (nodes) {
        nodes.forEach(function (node) {
          if (node.sourceLinks.length) {
            var y = d3_sum(node.sourceLinks, weightedTarget) / d3_sum(node.sourceLinks, value);
            node.y += (y - center(node)) * alpha;
          }
        });
      });

      function weightedTarget(link) {
        return center(link.target) * link.value;
      }
    }

    function resolveCollisions() {
      nodesByBreadth.forEach(function (nodes) {
        var node,
            dy,
            y0 = 0,
            n = nodes.length,
            i; // Push any overlapping nodes down.

        sort && nodes.sort(sort);

        for (i = 0; i < n; ++i) {
          node = nodes[i];
          dy = y0 - node.y;
          if (dy > 0) node.y += dy;
          y0 = node.y + node.dy + nodePadding;
        } // If the bottommost node goes outside the bounds, push it back up.


        dy = y0 - nodePadding - size[1];

        if (dy > 0) {
          y0 = node.y -= dy; // Push any overlapping nodes back up.

          for (i = n - 2; i >= 0; --i) {
            node = nodes[i];
            dy = node.y + node.dy + nodePadding - y0;
            if (dy > 0) node.y -= dy;
            y0 = node.y;
          }
        }
      });
    }
  }

  function computeLinkDepths() {
    nodes.forEach(function (node) {
      node.sourceLinks.sort(ascendingTargetDepth);
      node.targetLinks.sort(ascendingSourceDepth);
    });
    nodes.forEach(function (node) {
      var sy = 0,
          ty = 0;
      node.sourceLinks.forEach(function (link) {
        link.sy = sy;
        sy += link.dy;
      });
      node.targetLinks.forEach(function (link) {
        link.ty = ty;
        ty += link.dy;
      });
    });

    function ascendingSourceDepth(a, b) {
      return a.source.y - b.source.y;
    }

    function ascendingTargetDepth(a, b) {
      return a.target.y - b.target.y;
    }
  }

  function center(node) {
    return node.y + node.dy / 2;
  }

  function value(link) {
    return link.value;
  }

  return sankey;
}
});

unwrapExports(sankey);

var sankey$1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);

var _index = interopRequireDefault(graphs);

var _index2 = interopRequireDefault(sankey);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Path = _canvax$$1["default"].Shapes.Path;
var Rect = _canvax$$1["default"].Shapes.Rect;

var sankeyGraphs = /*#__PURE__*/function (_GraphsBase) {
  (0, _inherits2["default"])(sankeyGraphs, _GraphsBase);

  var _super = _createSuper(sankeyGraphs);

  function sankeyGraphs(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, sankeyGraphs);
    _this = _super.call(this, opt, app);
    _this.type = "sankey";

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(sankeyGraphs.defaultProps()), opt);

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(sankeyGraphs, [{
    key: "init",
    value: function init() {
      this._links = new _canvax$$1["default"].Display.Sprite();
      this._nodes = new _canvax$$1["default"].Display.Sprite();
      this._labels = new _canvax$$1["default"].Display.Sprite();
      this.sprite.addChild(this._links);
      this.sprite.addChild(this._nodes);
      this.sprite.addChild(this._labels);
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {});

      _.extend(true, this, opt);

      this.data = this._trimGraphs();

      this._widget();

      this.sprite.context.x = this.origin.x;
      this.sprite.context.y = this.origin.y;
      this.fire("complete");
    }
  }, {
    key: "_trimGraphs",
    value: function _trimGraphs() {
      var me = this;
      var nodes = [];
      var links = [];
      var keyDatas = me.dataFrame.getFieldData(me.keyField);
      var valueDatas = me.dataFrame.getFieldData(me.valueField);
      var parentFields = me.dataFrame.getFieldData(me.parentField);
      var nodeMap = {}; //name:ind

      _.each(keyDatas, function (key, i) {
        var nodeNames = [];

        if (me.parentField) {
          nodeNames.push(parentFields[i]);
        }
        nodeNames = nodeNames.concat(key.split(/[|]/));

        _.each(nodeNames, function (name) {
          if (nodeMap[name] === undefined) {
            nodeMap[name] = nodes.length;
            nodes.push({
              name: name
            });
          }
        });
      });

      _.each(keyDatas, function (key, i) {
        //let nodeNames = key.split(/[,|]/);
        var nodeNames = [];

        if (me.parentField) {
          nodeNames.push(parentFields[i]);
        }
        nodeNames = nodeNames.concat(key.split(/[|]/));

        if (nodeNames.length == 2) {
          links.push({
            source: nodeMap[nodeNames[0]],
            target: nodeMap[nodeNames[1]],
            value: valueDatas[i]
          });
        }
      });

      return (0, _index2["default"])().nodeWidth(this.node.width).nodePadding(this.node.padding).nodeSort(this.node.sort).size([this.width, this.height]).nodes(nodes).links(links).layout(16);
    }
  }, {
    key: "_widget",
    value: function _widget() {
      this._drawNodes();

      this._drawLinks();

      this._drawLabels();
    }
  }, {
    key: "_getColor",
    value: function _getColor(style, node, ind) {
      var me = this;
      var color = style;

      if (_.isArray(color)) {
        color = color[ind];
      }

      if (_.isFunction(color)) {
        color = color(node);
      }

      if (!color) {
        color = me.app.getTheme(ind);
      }

      return color;
    }
  }, {
    key: "_drawNodes",
    value: function _drawNodes() {
      var nodes = this.data.nodes();
      var me = this;

      _.each(nodes, function (node, i) {
        var nodeColor = me._getColor(me.node.fillStyle, node, i);

        var nodeEl = new Rect({
          xyToInt: false,
          context: {
            x: node.x,
            y: node.y,
            width: me.data.nodeWidth(),
            height: Math.max(node.dy, 1),
            fillStyle: nodeColor
          }
        });
        nodeEl.data = node;

        me._nodes.addChild(nodeEl);
      });
    }
  }, {
    key: "_drawLinks",
    value: function _drawLinks() {
      var links = this.data.links();
      var me = this;

      _.each(links, function (link, i) {
        var linkColor = me._getColor(me.line.strokeStyle, link, i);

        var d = me.data.link()(link);

        var _path = new Path({
          xyToInt: false,
          context: {
            path: d,
            fillStyle: linkColor,
            //lineWidth: Math.max(1, link.dy),
            globalAlpha: me.line.alpha,
            cursor: "pointer"
          }
        });

        _path.__glpha = me.line.alpha;
        _path.link = link;

        _path.on(event.types.get(), function (e) {
          if (me.line.focus.enabled) {
            if (e.type == 'mouseover') {
              this.__glpha += 0.1;
            }

            if (e.type == 'mouseout') {
              this.__glpha -= 0.1;
            }
          }
          var linkData = this.link; //type???tips???

          linkData.type = "sankey";
          e.eventInfo = {
            trigger: me.node,
            title: linkData.source.name + " --<span style='position:relative;top:-0.5px;font-size:16px;left:-3px;'>></span> " + linkData.target.name,
            nodes: [linkData]
          }; //fire???root????????????????????????root?????????tips

          me.app.fire(e.type, e);
        });

        me._links.addChild(_path);
      });
    }
  }, {
    key: "_drawLabels",
    value: function _drawLabels() {
      var nodes = this.data.nodes();
      var me = this;

      _.each(nodes, function (node) {
        var textAlign = me.label.textAlign;
        var x = node.x + me.data.nodeWidth() + 4;
        /*
        if( x > me.width/2 ){
            x  = node.x - 4;
            textAlign = 'right';
        } else {
            x += 4;
        };
        */

        var y = node.y + Math.max(node.dy / 2, 1);
        var txt = me.label.format ? me.label.format(node.name, node) : node.name;
        var label = new _canvax$$1["default"].Display.Text(txt, {
          context: {
            x: x,
            y: y,
            fillStyle: me.label.fontColor,
            fontSize: me.label.fontSize,
            textAlign: textAlign,
            textBaseline: me.label.verticalAlign
          }
        });

        me._labels.addChild(label);

        if (label.getTextWidth() + x > me.width) {
          label.context.x = node.x - 4;
          label.context.textAlign = 'right';
        }
      });
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        keyField: {
          detail: 'key??????',
          "default": null
        },
        valueField: {
          detail: 'value??????',
          "default": 'value'
        },
        parentField: {
          detail: 'parent??????',
          "default": null
        },
        node: {
          detail: 'node',
          propertys: {
            width: {
              detail: '?????????',
              "default": 18
            },
            padding: {
              detail: '????????????',
              "default": 10
            },
            sort: {
              detail: '??????????????????',
              "default": function _default(a, b) {
                return a.y - b.y;
              }
            },
            fillStyle: {
              detail: '???????????????',
              "default": null
            }
          }
        },
        line: {
          detail: '?????????',
          propertys: {
            strokeStyle: {
              detail: '?????????',
              "default": 'blue'
            },
            alpha: {
              detail: '????????????',
              "default": 0.3
            },
            focus: {
              detail: '?????????hover??????',
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": true
                }
              }
            }
          }
        },
        label: {
          detail: '????????????',
          propertys: {
            fontColor: {
              detail: '????????????',
              "default": '#666666'
            },
            fontSize: {
              detail: '??????????????????',
              "default": 12
            },
            textAlign: {
              detail: '??????????????????',
              "default": 'left'
            },
            verticalAlign: {
              detail: '??????????????????',
              "default": 'middle'
            },
            format: {
              detail: '??????????????????',
              "default": null
            }
          }
        }
      };
    }
  }]);
  return sankeyGraphs;
}(_index["default"]);

_index["default"].registerComponent(sankeyGraphs, 'graphs', 'sankey');

var _default2 = sankeyGraphs;
exports["default"] = _default2;
});

unwrapExports(sankey$1);

var intersect_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ccw(x1, y1, x2, y2, x3, y3) {
  var cw = (y3 - y1) * (x2 - x1) - (y2 - y1) * (x3 - x1);
  return cw > 0 ? true : cw < 0 ? false : true; // colinear
}

function intersect(seg1, seg2) {
  var x1 = seg1[0][0],
      y1 = seg1[0][1],
      x2 = seg1[1][0],
      y2 = seg1[1][1],
      x3 = seg2[0][0],
      y3 = seg2[0][1],
      x4 = seg2[1][0],
      y4 = seg2[1][1];
  return ccw(x1, y1, x3, y3, x4, y4) !== ccw(x2, y2, x3, y3, x4, y4) && ccw(x1, y1, x2, y2, x3, y3) !== ccw(x1, y1, x2, y2, x4, y4);
}

var _default = intersect;
exports["default"] = _default;
});

unwrapExports(intersect_1);

var grid_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function Grid(points, cellSize) {
  this._cells = [];
  this._cellSize = cellSize;
  this._reverseCellSize = 1 / cellSize;

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var x = this.coordToCellNum(point[0]);
    var y = this.coordToCellNum(point[1]);

    if (!this._cells[x]) {
      var array = [];
      array[y] = [point];
      this._cells[x] = array;
    } else if (!this._cells[x][y]) {
      this._cells[x][y] = [point];
    } else {
      this._cells[x][y].push(point);
    }
  }
}

Grid.prototype = {
  cellPoints: function cellPoints(x, y) {
    // (Number, Number) -> Array
    return this._cells[x] !== undefined && this._cells[x][y] !== undefined ? this._cells[x][y] : [];
  },
  rangePoints: function rangePoints(bbox) {
    // (Array) -> Array
    var tlCellX = this.coordToCellNum(bbox[0]);
    var tlCellY = this.coordToCellNum(bbox[1]);
    var brCellX = this.coordToCellNum(bbox[2]);
    var brCellY = this.coordToCellNum(bbox[3]);
    var points = [];

    for (var x = tlCellX; x <= brCellX; x++) {
      for (var y = tlCellY; y <= brCellY; y++) {
        Array.prototype.push.apply(points, this.cellPoints(x, y));
      }
    }

    return points;
  },
  removePoint: function removePoint(point) {
    // (Array) -> Array
    var cellX = this.coordToCellNum(point[0]);
    var cellY = this.coordToCellNum(point[1]);
    var cell = this._cells[cellX][cellY];
    var pointIdxInCell;

    for (var i = 0; i < cell.length; i++) {
      if (cell[i][0] === point[0] && cell[i][1] === point[1]) {
        pointIdxInCell = i;
        break;
      }
    }

    cell.splice(pointIdxInCell, 1);
    return cell;
  },
  trunc: Math.trunc || function (val) {
    // (number) -> number
    return val - val % 1;
  },
  coordToCellNum: function coordToCellNum(x) {
    // (number) -> number
    return this.trunc(x * this._reverseCellSize);
  },
  extendBbox: function extendBbox(bbox, scaleFactor) {
    // (Array, Number) -> Array
    return [bbox[0] - scaleFactor * this._cellSize, bbox[1] - scaleFactor * this._cellSize, bbox[2] + scaleFactor * this._cellSize, bbox[3] + scaleFactor * this._cellSize];
  }
};

function grid(points, cellSize) {
  return new Grid(points, cellSize);
}

var _default = grid;
exports["default"] = _default;
});

unwrapExports(grid_1);

var format = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  toXy: function toXy(pointset, format) {
    if (format === undefined) {
      return pointset.slice();
    }

    return pointset.map(function (pt) {
      /*jslint evil: true */
      var _getXY = new Function('pt', 'return [pt' + format[0] + ',' + 'pt' + format[1] + '];');

      return _getXY(pt);
    });
  },
  fromXy: function fromXy(pointset, format) {
    if (format === undefined) {
      return pointset.slice();
    }

    return pointset.map(function (pt) {
      /*jslint evil: true */
      var _getObj = new Function('pt', 'const o = {}; o' + format[0] + '= pt[0]; o' + format[1] + '= pt[1]; return o;');

      return _getObj(pt);
    });
  }
};
exports["default"] = _default;
});

unwrapExports(format);

var convex_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _cross(o, a, b) {
  return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}

function _upperTangent(pointset) {
  var lower = [];

  for (var l = 0; l < pointset.length; l++) {
    while (lower.length >= 2 && _cross(lower[lower.length - 2], lower[lower.length - 1], pointset[l]) <= 0) {
      lower.pop();
    }

    lower.push(pointset[l]);
  }

  lower.pop();
  return lower;
}

function _lowerTangent(pointset) {
  var reversed = pointset.reverse(),
      upper = [];

  for (var u = 0; u < reversed.length; u++) {
    while (upper.length >= 2 && _cross(upper[upper.length - 2], upper[upper.length - 1], reversed[u]) <= 0) {
      upper.pop();
    }

    upper.push(reversed[u]);
  }

  upper.pop();
  return upper;
} // pointset has to be sorted by X


function convex(pointset) {
  var upper = _upperTangent(pointset),
      lower = _lowerTangent(pointset);

  var convex = lower.concat(upper);
  convex.push(pointset[0]);
  return convex;
}

var _default = convex;
exports["default"] = _default;
});

unwrapExports(convex_1);

var hull_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _intersect2 = interopRequireDefault(intersect_1);

var _grid = interopRequireDefault(grid_1);

var _format = interopRequireDefault(format);

var _convex = interopRequireDefault(convex_1);

/*
 (c) 2014-2019, Andrii Heonia
 Hull.js, a JavaScript library for concave hull generation by set of points.
 https://github.com/AndriiHeonia/hull
*/
function _filterDuplicates(pointset) {
  var unique = [pointset[0]];
  var lastPoint = pointset[0];

  for (var i = 1; i < pointset.length; i++) {
    var currentPoint = pointset[i];

    if (lastPoint[0] !== currentPoint[0] || lastPoint[1] !== currentPoint[1]) {
      unique.push(currentPoint);
    }

    lastPoint = currentPoint;
  }

  return unique;
}

function _sortByX(pointset) {
  return pointset.sort(function (a, b) {
    return a[0] - b[0] || a[1] - b[1];
  });
}

function _sqLength(a, b) {
  return Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2);
}

function _cos(o, a, b) {
  var aShifted = [a[0] - o[0], a[1] - o[1]],
      bShifted = [b[0] - o[0], b[1] - o[1]],
      sqALen = _sqLength(o, a),
      sqBLen = _sqLength(o, b),
      dot = aShifted[0] * bShifted[0] + aShifted[1] * bShifted[1];

  return dot / Math.sqrt(sqALen * sqBLen);
}

function _intersect(segment, pointset) {
  for (var i = 0; i < pointset.length - 1; i++) {
    var seg = [pointset[i], pointset[i + 1]];

    if (segment[0][0] === seg[0][0] && segment[0][1] === seg[0][1] || segment[0][0] === seg[1][0] && segment[0][1] === seg[1][1]) {
      continue;
    }

    if ((0, _intersect2["default"])(segment, seg)) {
      return true;
    }
  }

  return false;
}

function _occupiedArea(pointset) {
  var minX = Infinity;
  var minY = Infinity;
  var maxX = -Infinity;
  var maxY = -Infinity;

  for (var i = pointset.length - 1; i >= 0; i--) {
    if (pointset[i][0] < minX) {
      minX = pointset[i][0];
    }

    if (pointset[i][1] < minY) {
      minY = pointset[i][1];
    }

    if (pointset[i][0] > maxX) {
      maxX = pointset[i][0];
    }

    if (pointset[i][1] > maxY) {
      maxY = pointset[i][1];
    }
  }

  return [maxX - minX, // width
  maxY - minY // height
  ];
}

function _bBoxAround(edge) {
  return [Math.min(edge[0][0], edge[1][0]), // left
  Math.min(edge[0][1], edge[1][1]), // top
  Math.max(edge[0][0], edge[1][0]), // right
  Math.max(edge[0][1], edge[1][1]) // bottom
  ];
}

function _midPoint(edge, innerPoints, convex) {
  var point = null,
      angle1Cos = MAX_CONCAVE_ANGLE_COS,
      angle2Cos = MAX_CONCAVE_ANGLE_COS,
      a1Cos,
      a2Cos;

  for (var i = 0; i < innerPoints.length; i++) {
    a1Cos = _cos(edge[0], edge[1], innerPoints[i]);
    a2Cos = _cos(edge[1], edge[0], innerPoints[i]);

    if (a1Cos > angle1Cos && a2Cos > angle2Cos && !_intersect([edge[0], innerPoints[i]], convex) && !_intersect([edge[1], innerPoints[i]], convex)) {
      angle1Cos = a1Cos;
      angle2Cos = a2Cos;
      point = innerPoints[i];
    }
  }

  return point;
}

function _concave(convex, maxSqEdgeLen, maxSearchArea, grid, edgeSkipList) {
  var midPointInserted = false;

  for (var i = 0; i < convex.length - 1; i++) {
    var edge = [convex[i], convex[i + 1]]; // generate a key in the format X0,Y0,X1,Y1

    var keyInSkipList = edge[0][0] + ',' + edge[0][1] + ',' + edge[1][0] + ',' + edge[1][1];

    if (_sqLength(edge[0], edge[1]) < maxSqEdgeLen || edgeSkipList.has(keyInSkipList)) {
      continue;
    }

    var scaleFactor = 0;

    var bBoxAround = _bBoxAround(edge);

    var bBoxWidth = void 0;
    var bBoxHeight = void 0;
    var midPoint = void 0;

    do {
      bBoxAround = grid.extendBbox(bBoxAround, scaleFactor);
      bBoxWidth = bBoxAround[2] - bBoxAround[0];
      bBoxHeight = bBoxAround[3] - bBoxAround[1];
      midPoint = _midPoint(edge, grid.rangePoints(bBoxAround), convex);
      scaleFactor++;
    } while (midPoint === null && (maxSearchArea[0] > bBoxWidth || maxSearchArea[1] > bBoxHeight));

    if (bBoxWidth >= maxSearchArea[0] && bBoxHeight >= maxSearchArea[1]) {
      edgeSkipList.add(keyInSkipList);
    }

    if (midPoint !== null) {
      convex.splice(i + 1, 0, midPoint);
      grid.removePoint(midPoint);
      midPointInserted = true;
    }
  }

  if (midPointInserted) {
    return _concave(convex, maxSqEdgeLen, maxSearchArea, grid, edgeSkipList);
  }

  return convex;
}

function hull(pointset, concavity, format$$1) {
  var maxEdgeLen = concavity || 20;

  var points = _filterDuplicates(_sortByX(_format["default"].toXy(pointset, format$$1)));

  if (points.length < 4) {
    return points.concat([points[0]]);
  }

  var occupiedArea = _occupiedArea(points);

  var maxSearchArea = [occupiedArea[0] * MAX_SEARCH_BBOX_SIZE_PERCENT, occupiedArea[1] * MAX_SEARCH_BBOX_SIZE_PERCENT];
  var convex = (0, _convex["default"])(points);
  var innerPoints = points.filter(function (pt) {
    return convex.indexOf(pt) < 0;
  });
  var cellSize = Math.ceil(1 / (points.length / (occupiedArea[0] * occupiedArea[1])));

  var concave = _concave(convex, Math.pow(maxEdgeLen, 2), maxSearchArea, (0, _grid["default"])(innerPoints, cellSize), new Set());

  if (format$$1) {
    return _format["default"].fromXy(concave, format$$1);
  } else {
    return concave;
  }
}

var MAX_CONCAVE_ANGLE_COS = Math.cos(90 / (180 / Math.PI)); // angle = 90 deg

var MAX_SEARCH_BBOX_SIZE_PERCENT = 0.6;
var _default = hull;
exports["default"] = _default;
});

unwrapExports(hull_1);

var scat = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);

var _index = interopRequireDefault(graphs);



var _index2 = interopRequireDefault(hull_1);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Circle = _canvax$$1["default"].Shapes.Circle;
var Rect = _canvax$$1["default"].Shapes.Rect;
var Line = _canvax$$1["default"].Shapes.Line;
var Polygon = _canvax$$1["default"].Shapes.Polygon; //TODO iGroup ??????????????????

var ScatGraphs = /*#__PURE__*/function (_GraphsBase) {
  (0, _inherits2["default"])(ScatGraphs, _GraphsBase);

  var _super = _createSuper(ScatGraphs);

  function ScatGraphs(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, ScatGraphs);
    _this = _super.call(this, opt, app);
    _this.type = "scat"; //???????????????????????????????????? ????????????_trimGraphs???????????????????????????

    _this._rData = null;
    _this._rMaxValue = null;
    _this._rMinValue = null;
    _this._groupData = {}; //groupField???????????????????????????????????????_trimGraphs??????????????????????????????

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(ScatGraphs.defaultProps()), opt);

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(ScatGraphs, [{
    key: "init",
    value: function init() {
      this._shapesp = new _canvax$$1["default"].Display.Sprite({
        id: "scat_shapesp"
      });
      this._textsp = new _canvax$$1["default"].Display.Sprite({
        id: "textsp"
      });
      this._linesp = new _canvax$$1["default"].Display.Sprite({
        id: "textsp"
      });
      this._areasp = new _canvax$$1["default"].Display.Sprite({
        id: "areasp"
      });
      this.sprite.addChild(this._areasp);
      this.sprite.addChild(this._linesp);
      this.sprite.addChild(this._shapesp);
      this.sprite.addChild(this._textsp);
    }
  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {});

      _.extend(true, this, opt);

      this.data = this._trimGraphs();

      this._widget();

      this.sprite.context.x = this.origin.x;
      this.sprite.context.y = this.origin.y;
      var me = this;

      if (this.animation && !opt.resize && !me.inited) {
        this.grow(function () {
          me.fire("complete");
        });
      } else {
        this.fire("complete");
      }

      this.inited = true;
      return this;
    }
  }, {
    key: "resetData",
    value: function resetData(dataFrame) {
      this.dataFrame = dataFrame;
      this.data = this._trimGraphs();

      this._widget();

      this.grow();
    }
  }, {
    key: "getNodesAt",
    value: function getNodesAt() {
      return [];
    }
  }, {
    key: "_trimGraphs",
    value: function _trimGraphs() {
      var tmplData = [];
      this._groupData = {};

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      var dataLen = this.dataFrame.length; ////???????????????????????????????????? ????????????_trimGraphs???????????????????????????

      this._rData = null;
      this._rMaxValue = null;
      this._rMinValue = null;

      for (var i = 0; i < dataLen; i++) {
        var rowData = this.dataFrame.getRowDataAt(i);

        var fieldMap = _coord.getFieldMapOf(this.field);

        var point = _coord.getPoint({
          iNode: i,
          field: this.field,
          value: {
            //x:
            y: rowData[this.field]
          }
        });

        if (point.pos.x == undefined || point.pos.y == undefined) {
          continue;
        }
        var nodeLayoutData = {
          type: "scat",
          rowData: rowData,
          x: point.pos.x,
          y: point.pos.y,
          value: point.value,
          field: this.field,
          fieldColor: fieldMap.color,
          iNode: i,
          focused: false,
          selected: false,
          //??????????????????????????????
          radius: null,
          //?????????????????????????????????_setR???????????????
          fillStyle: null,
          color: null,
          strokeStyle: null,
          strokeAlpha: 1,
          lineWidth: 0,
          shapeType: null,
          label: null,
          fillAlpha: 1,
          nodeElement: null //?????????canvax ????????? ???widget????????????

        };

        this._setR(nodeLayoutData);

        this._setFillStyle(nodeLayoutData);

        this._setFillAlpha(nodeLayoutData);

        this._setStrokeStyle(nodeLayoutData);

        this._setLineWidth(nodeLayoutData);

        this._setStrokeAlpha(nodeLayoutData);

        this._setNodeType(nodeLayoutData);

        this._setText(nodeLayoutData);

        if (this.dataFilter) {
          if (_.isFunction(this.dataFilter)) {
            if (!this.dataFilter.apply(this, [nodeLayoutData])) {
              continue;
            }
          }
        } //????????????????????????????????????_groupData?????????????????????????????????????????????area


        if (this.groupField) {
          var groupVal = rowData[this.groupField];

          if (groupVal) {
            if (!this._groupData[groupVal]) {
              this._groupData[groupVal] = [];
            }
            !this._groupData[groupVal].push(nodeLayoutData);
          }
        } else {
          if (!this._groupData.all) {
            this._groupData.all = [];
          }

          this._groupData.all.push(nodeLayoutData);
        }

        tmplData.push(nodeLayoutData);
      }
      return tmplData;
    }
  }, {
    key: "_setR",
    value: function _setR(nodeLayoutData) {
      var r = this.node.normalRadius;
      var rowData = nodeLayoutData.rowData;

      if (this.node.radius != null) {
        if (_.isString(this.node.radius) && rowData[this.node.radius]) {
          //?????????????????????????????????r?????????????????????????????????
          if (!this._rData && !this._rMaxValue && !this._rMinValue) {
            this._rData = this.dataFrame.getFieldData(this.node.radius);
            this._rMaxValue = _.max(this._rData);
            this._rMinValue = _.min(this._rData);
          }
          var rVal = rowData[this.node.radius];

          if (this._rMaxValue == this._rMinValue) {
            r = this.node.minRadius + (this.node.maxRadius - this.node.minRadius) / 2;
          } else {
            r = this.node.minRadius + (rVal - this._rMinValue) / (this._rMaxValue - this._rMinValue) * (this.node.maxRadius - this.node.minRadius);
          }
        }

        if (_.isFunction(this.node.radius)) {
          r = this.node.radius(rowData);
        }

        if (!isNaN(parseInt(this.node.radius))) {
          r = parseInt(this.node.radius);
        }
      }
      r = Math.max(r * this.node.radiusScale, 2);
      nodeLayoutData.radius = r;
      return this;
    }
  }, {
    key: "_setText",
    value: function _setText(nodeLayoutData) {
      if (this.label.field != null) {
        if (_.isString(this.label.field) && nodeLayoutData.rowData[this.label.field]) {
          nodeLayoutData.label = this.label.format(nodeLayoutData.rowData[this.label.field], nodeLayoutData);
        }
      }
    }
  }, {
    key: "_setFillStyle",
    value: function _setFillStyle(nodeLayoutData) {
      nodeLayoutData.color = nodeLayoutData.fillStyle = this._getStyle(this.node.fillStyle, nodeLayoutData);
      return this;
    }
  }, {
    key: "_setFillAlpha",
    value: function _setFillAlpha(nodeLayoutData) {
      nodeLayoutData.fillAlpha = this._getProp(this.node.fillAlpha, nodeLayoutData);
      return this;
    }
  }, {
    key: "_setStrokeAlpha",
    value: function _setStrokeAlpha(nodeLayoutData) {
      nodeLayoutData.strokeAlpha = this._getProp(this.node.strokeAlpha, nodeLayoutData);
      return this;
    }
  }, {
    key: "_setStrokeStyle",
    value: function _setStrokeStyle(nodeLayoutData) {
      nodeLayoutData.strokeStyle = this._getStyle(this.node.strokeStyle || this.node.fillStyle, nodeLayoutData);
      return this;
    }
  }, {
    key: "_getProp",
    value: function _getProp(prop, nodeLayoutData) {
      var _prop = prop;

      if (_.isArray(prop)) {
        _prop = prop[nodeLayoutData.iGroup];
      }

      if (_.isFunction(prop)) {
        _prop = prop.apply(this, [nodeLayoutData]);
      }
      return _prop;
    }
  }, {
    key: "_getStyle",
    value: function _getStyle(style, nodeLayoutData) {
      var _style = style;

      if (_.isArray(style)) {
        _style = style[nodeLayoutData.iGroup];
      }

      if (_.isFunction(style)) {
        _style = style.apply(this, [nodeLayoutData]);
      }

      if (!_style) {
        _style = nodeLayoutData.fieldColor;
      }
      return _style;
    }
  }, {
    key: "_setLineWidth",
    value: function _setLineWidth(nodeLayoutData) {
      nodeLayoutData.lineWidth = this._getProp(this.node.lineWidth, nodeLayoutData);
      return this;
    }
  }, {
    key: "_setNodeType",
    value: function _setNodeType(nodeLayoutData) {
      var shapeType = this.node.shapeType;

      if (_.isArray(shapeType)) {
        shapeType = shapeType[nodeLayoutData.iGroup];
      }

      if (_.isFunction(shapeType)) {
        shapeType = shapeType(nodeLayoutData);
      }

      if (!shapeType) {
        shapeType = "circle";
      }
      nodeLayoutData.shapeType = shapeType;
      return this;
    } //??????layoutdata????????????

  }, {
    key: "_widget",
    value: function _widget() {
      var _this2 = this;

      var me = this;

      _.each(_.flatten([me._shapesp.children, me._textsp.children, me._linesp.children]), function (el) {
        el.__used = false;
      });

      _.each(me.data, function (nodeData, iNode) {
        var _nodeElement = me._getNodeElement(nodeData, iNode);

        if (!_nodeElement) {
          nodeData.__isNew = true;
        }

        var _context = me._getNodeContext(nodeData);

        var Shape = nodeData.shapeType == "circle" ? Circle : Rect; //let _nodeElement = me._shapesp.getChildAt( iNode );

        if (!_nodeElement) {
          _nodeElement = new Shape({
            id: "shape_" + iNode,
            hoverClone: false,
            context: _context
          });

          me._shapesp.addChild(_nodeElement);

          _nodeElement.on(event.types.get(), function (e) {
            e.eventInfo = {
              title: null,
              trigger: me.node,
              nodes: [this.nodeData]
            };

            if (this.nodeData.label) {
              e.eventInfo.title = this.nodeData.label;
            }

            if (e.type == 'mouseover') {
              me.focusAt(this.nodeData.iNode);
            }

            if (e.type == 'mouseout') {
              !this.nodeData.selected && me.unfocusAt(this.nodeData.iNode);
            }
            //??????????????????????????????????????????????????????

            me.app.fire(e.type, e);
          });
        } else {
          //_nodeElement.context = _context;
          //_.extend( _nodeElement.context, _context );
          _nodeElement.animate(_context);
        }
        _nodeElement.__used = true; //?????????canvax??????????????????

        _nodeElement.nodeData = nodeData;
        _nodeElement.iNode = iNode;
        nodeData.nodeElement = _nodeElement;

        if (me.line.enabled) {
          var _line = _nodeElement.lineElement; //me._linesp.getChildAt( iNode );

          var _lineContext = {
            start: {
              x: _context.x,
              y: _context.y + _context.r
            },
            end: {
              x: _context.x,
              y: 0
            },
            lineWidth: me.line.lineWidth,
            strokeStyle: me.line.strokeStyle,
            lineType: me.line.lineType
          };

          if (!_line) {
            _line = new Line({
              context: _lineContext
            });

            me._linesp.addChild(_line);
          } else {
            _line.animate(_lineContext);
          }
          _line.__used = true;
          _nodeElement.lineElement = _line;
        }

        if (nodeData.label && me.label.enabled) {
          var _label = _nodeElement.labelElement; //me._textsp.getChildAt( iNode );

          var _labelContext = {};

          if (!_label) {
            _label = new _canvax$$1["default"].Display.Text(nodeData.label, {
              id: "scat_text_" + iNode,
              context: {}
            });
            _labelContext = me._getTextContext(_label, _context); //_label.animate( _labelContext );

            _.extend(_label.context, _labelContext);

            me._textsp.addChild(_label);
          } else {
            _label.resetText(nodeData.label);

            _labelContext = me._getTextContext(_label, _context);

            _label.animate(_labelContext);
          }
          _label.__used = true; //???????????????text??????????????????

          _nodeElement.labelElement = _label;
          _label.nodeElement = _nodeElement;
        }
      });

      if (me.area.enabled) {
        me._areasp.removeAllChildren();

        var gi = 0;

        var _loop = function _loop(_groupKey) {
          var _group = _this2._groupData[_groupKey];
          var _groupData = {
            name: _groupKey,
            iGroup: gi,
            data: _group
          };
          var _groupPoints = [];

          function getCirclePoints(nodeData, n) {
            if (!n || n == 1) {
              return [[nodeData.x, nodeData.y]];
            }
            var _points = [];

            for (var i = 0; i < n; i++) {
              var degree = 360 / (n - 1) * i;
              var r = nodeData.radius + 3;
              var x = nodeData.x + Math.cos(Math.PI * 2 / 360 * degree) * r;
              var y = nodeData.y + Math.sin(Math.PI * 2 / 360 * degree) * r;

              _points.push([x, y]);
            }
            return _points;
          }

          _.each(_group, function (nodeData) {
            _groupPoints = _groupPoints.concat(getCirclePoints(nodeData, me.area.quantile));
          });

          var areaPoints = (0, _index2["default"])(_groupPoints, me.area.concavity);
          var defStyle = me.app.getTheme(gi);
          var areaFillStyle = me._getStyle(me.area.fillStyle, _groupData) || defStyle;

          var areaFillAlpha = me._getProp(me.area.fillAlpha, _groupData);

          var areaStrokeStyle = me._getStyle(me.area.strokeStyle, _groupData) || defStyle;

          var areaLineWidth = me._getProp(me.area.lineWidth, _groupData);

          var areaStrokeAlpha = me._getProp(me.area.strokeAlpha, _groupData);

          var _areaElement = new Polygon({
            context: {
              pointList: areaPoints,
              fillStyle: areaFillStyle,
              fillAlpha: areaFillAlpha,
              strokeStyle: areaStrokeStyle,
              lineWidth: areaLineWidth,
              strokeAlpha: areaStrokeAlpha,
              smooth: false
            }
          });

          me._areasp.addChild(_areaElement);

          gi++;
        };

        for (var _groupKey in this._groupData) {
          _loop(_groupKey);
        }
      }

      _.each(_.flatten([me._shapesp.children, me._textsp.children, me._linesp.children]), function (el) {
        if (!el.__used) {
          el.animate({
            globalAlpha: 0,
            r: 0
          }, {
            onComplete: function onComplete() {
              el.destroy();
            }
          });
        }
      });
    }
  }, {
    key: "_getNodeElement",
    value: function _getNodeElement(nodeData, iNode) {
      var me = this;
      var nodeEle;
      var dataKey = me.node.dataKey;

      if (!dataKey) {
        nodeEle = me._shapesp.getChildAt(iNode);
      } else {
        if (_.isString(dataKey)) {
          dataKey = dataKey.split(",");
        }

        for (var i = 0, l = this._shapesp.children.length; i < l; i++) {
          var _nodeEle = this._shapesp.children[i];
          var isThisNodeEle = true;

          for (var ii = 0, ll = dataKey.length; ii < ll; ii++) {
            var key = dataKey[ii];

            if (_nodeEle.nodeData.rowData[key] != nodeData.rowData[key]) {
              isThisNodeEle = false;
              break;
            }
          }

          if (isThisNodeEle && dataKey.length) {
            nodeEle = _nodeEle;
            break;
          }
        }
      }
      return nodeEle;
    }
  }, {
    key: "_getTextPosition",
    value: function _getTextPosition(_label, opt) {
      var x = 0,
          y = 0;

      switch (this.label.position) {
        case "center":
          x = opt.x;
          y = opt.y;
          break;

        case "top":
          x = opt.x;
          y = opt.y - opt.r;
          break;

        case "right":
          x = opt.x + opt.r;
          y = opt.y;
          break;

        case "bottom":
          x = opt.x;
          y = opt.y + opt.r;
          break;

        case "left":
          x = opt.x - opt.r;
          y = opt.y;
          break;

        case "auto":
          x = opt.x;
          y = opt.y;

          if (_label.getTextWidth() > opt.r * 2) {
            y = opt.y + opt.r + _label.getTextHeight() * 0.5;
          }
          break;
      }
      var point = {
        x: x + this.label.offsetX,
        y: y + this.label.offsetY
      };
      return point;
    }
  }, {
    key: "_getTextContext",
    value: function _getTextContext(_label, _context) {
      var textPoint = this._getTextPosition(_label, _context);

      var fontSize = this.label.fontSize;

      if (_label.getTextWidth() > _context.r * 2) {
        fontSize -= 2;
      }
      var ctx = {
        x: textPoint.x,
        y: textPoint.y,
        fillStyle: this.label.fontColor || _context.fillStyle,
        fontSize: fontSize,
        strokeStyle: this.label.strokeStyle || _context.fillStyle,
        lineWidth: this.label.lineWidth,
        textAlign: this.label.textAlign,
        textBaseline: this.label.verticalAlign
      };

      if (this.animation && !this.inited) {
        this._setCtxAniOrigin(ctx);
      }
      return ctx;
    }
  }, {
    key: "_setCtxAniOrigin",
    value: function _setCtxAniOrigin(ctx) {
      if (this.aniOrigin == "default") {
        ctx.y = 0;
      }

      if (this.aniOrigin == "origin") {
        var _coord = this.app.getComponent({
          name: 'coord'
        });

        var originPoint = _coord.getOriginPos({
          field: this.field
        });

        ctx.x = originPoint.x;
        ctx.y = originPoint.y;
      }

      if (this.aniOrigin == "center") {
        ctx.x = this.width / 2;
        ctx.y = -(this.height / 2);
      }
    }
  }, {
    key: "_getNodeContext",
    value: function _getNodeContext(nodeData) {
      if (nodeData.shapeType == "circle") {
        return this._getCircleContext(nodeData);
      }
    }
  }, {
    key: "_getCircleContext",
    value: function _getCircleContext(nodeData) {
      var ctx = {
        x: nodeData.x,
        y: nodeData.y,
        r: nodeData.radius,
        fillStyle: nodeData.fillStyle,
        strokeStyle: nodeData.strokeStyle,
        strokeAlpha: nodeData.strokeAlpha,
        lineWidth: nodeData.lineWidth,
        fillAlpha: nodeData.fillAlpha,
        cursor: "pointer"
      };

      if (this.animation && (!this.inited || nodeData.__isNew)) {
        this._setCtxAniOrigin(ctx);

        ctx.r = 1;
      }
      return ctx;
    }
    /**
     * ????????????
     */

  }, {
    key: "grow",
    value: function grow(callback) {
      var i = 0;
      var l = this.data.length - 1;
      var me = this;

      _.each(this.data, function (nodeData) {
        if (nodeData.__isNew) {
          me._growNode(nodeData, function () {
            i = i + 1;
            delete nodeData.__isNew;

            if (i == l) {
              callback && callback();
            }
          });
        }
      });
    }
  }, {
    key: "_growNode",
    value: function _growNode(nodeData, callback) {
      var me = this;
      nodeData.nodeElement.animate({
        x: nodeData.x,
        y: nodeData.y,
        r: nodeData.radius
      }, {
        onUpdate: function onUpdate(opt) {
          if (this.labelElement && this.labelElement.context) {
            var _textPoint = me._getTextPosition(this.labelElement, opt);

            this.labelElement.context.x = _textPoint.x;
            this.labelElement.context.y = _textPoint.y;
          }

          if (this.lineElement && this.lineElement.context) {
            this.lineElement.context.start.y = opt.y + opt.r;
          }
        },
        delay: Math.round(Math.random() * 300),
        onComplete: function onComplete() {
          callback && callback();
        }
      });
    }
  }, {
    key: "focusAt",
    value: function focusAt(ind) {
      var nodeData = this.data[ind];
      if (!this.node.focus.enabled || nodeData.focused) return;
      var nctx = nodeData.nodeElement.context;
      nctx.lineWidth = this.node.focus.lineWidth;
      nctx.strokeAlpha = this.node.focus.strokeAlpha;
      nctx.fillAlpha = this.node.focus.fillAlpha;
      nodeData.focused = true;
    }
  }, {
    key: "unfocusAt",
    value: function unfocusAt(ind) {
      var nodeData = this.data[ind];
      if (!this.node.focus.enabled || !nodeData.focused) return;
      var nctx = nodeData.nodeElement.context;
      nctx.lineWidth = nodeData.lineWidth;
      nctx.strokeAlpha = nodeData.strokeAlpha;
      nctx.fillAlpha = nodeData.fillAlpha;
      nctx.strokeStyle = nodeData.strokeStyle;
      nodeData.focused = false;
    }
  }, {
    key: "selectAt",
    value: function selectAt(ind) {
      var nodeData = this.data[ind];
      if (!this.node.select.enabled || nodeData.selected) return;
      var nctx = nodeData.nodeElement.context;
      nctx.lineWidth = this.node.select.lineWidth;
      nctx.strokeAlpha = this.node.select.strokeAlpha;
      nctx.fillAlpha = this.node.select.fillAlpha;
      nodeData.selected = true;
    }
  }, {
    key: "unselectAt",
    value: function unselectAt(ind) {
      var nodeData = this.data[ind];
      if (!this.node.select.enabled || !nodeData.selected) return;
      var nctx = nodeData.nodeElement.context;

      if (nodeData.focused) {
        //???e ?????????????????????????????????????????????????????????node??????
        nctx.lineWidth = this.node.focus.lineWidth;
        nctx.strokeAlpha = this.node.focus.strokeAlpha;
        nctx.fillAlpha = this.node.focus.fillAlpha;
      } else {
        nctx.lineWidth = nodeData.lineWidth;
        nctx.strokeAlpha = nodeData.strokeAlpha;
        nctx.fillAlpha = nodeData.fillAlpha;
      }
      nodeData.selected = false;
    }
  }, {
    key: "getNodesOfPos",
    value: function getNodesOfPos() {
      //sat??? getNodesOfPos ?????????????????????
      var _nodesInfoList = []; //??????????????????

      return _nodesInfoList;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        field: {
          detail: '????????????',
          "default": null
        },
        groupField: {
          detail: '????????????',
          "default": null,
          documentation: '?????????????????????area??????enabled???true???????????????groupField???????????????area'
        },
        dataFilter: {
          detail: '??????????????????',
          "default": null,
          documentation: "???????????????????????????groupField??????????????????"
        },
        aniOrigin: {
          detail: '?????????????????????',
          "default": 'default',
          documentation: '???????????????center?????????????????????origin??????????????????'
        },
        node: {
          detail: '???????????????????????????',
          propertys: {
            dataKey: {
              detail: '???????????????id?????????????????????',
              "default": '__index__'
            },
            shapeType: {
              detail: '????????????',
              "default": 'circle',
              documentation: '??????????????????????????? ???????????????rect???????????????????????????????????????????????????'
            },
            maxRadius: {
              detail: '??????????????????',
              "default": 25
            },
            minRadius: {
              detail: '??????????????????',
              "default": 5
            },
            radius: {
              detail: '??????',
              "default": null
            },
            radiusScale: {
              detail: '??????????????????',
              documentation: '????????????????????????????????????????????????,?????????????????????datazoom????????????',
              "default": 1
            },
            normalRadius: {
              detail: '????????????',
              "default": 15
            },
            fillStyle: {
              detail: '????????????',
              "default": null
            },
            fillAlpha: {
              detail: '???????????????',
              "default": 0.8
            },
            strokeStyle: {
              detail: '??????????????????',
              "default": null
            },
            lineWidth: {
              detail: '??????????????????',
              "default": 0
            },
            strokeAlpha: {
              detail: '?????????????????????',
              "default": 1
            },
            focus: {
              detail: "??????hover?????????",
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": true
                },
                lineWidth: {
                  detail: 'hover??????????????????',
                  "default": 6
                },
                strokeAlpha: {
                  detail: 'hover?????????????????????',
                  "default": 0.2
                },
                fillAlpha: {
                  detail: 'hover?????????????????????',
                  "default": 0.8
                }
              }
            },
            select: {
              detail: "?????????????????????",
              propertys: {
                enabled: {
                  detail: '????????????',
                  "default": false
                },
                lineWidth: {
                  detail: '????????????????????????',
                  "default": 8
                },
                strokeAlpha: {
                  detail: '???????????????????????????',
                  "default": 0.4
                },
                fillAlpha: {
                  detail: '???????????????????????????',
                  "default": 1
                }
              }
            }
          }
        },
        line: {
          detail: '????????????????????????????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": false
            },
            lineWidth: {
              detail: '?????????',
              "default": 1
            },
            strokeStyle: {
              detail: '????????????',
              "default": '#ccc'
            },
            lineType: {
              detail: '????????????',
              "default": 'dashed'
            }
          }
        },
        area: {
          detail: '????????????????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": false
            },
            concavity: {
              detail: '?????????????????????80???????????????',
              "default": 88
            },
            quantile: {
              detail: '????????????????????????????????????',
              "default": 8
            },
            fillStyle: {
              detail: '???????????????????????????',
              "default": null
            },
            fillAlpha: {
              detail: '???????????????????????????',
              "default": 0.15
            },
            strokeStyle: {
              detail: '??????????????????????????????',
              "default": null
            },
            lineWidth: {
              detail: '??????????????????????????????',
              "default": 0
            },
            strokeAlpha: {
              detail: '?????????????????????????????????',
              "default": 0.5
            }
          }
        },
        label: {
          detail: '????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            field: {
              detail: '??????label?????????',
              "default": null
            },
            format: {
              detail: 'label?????????????????????',
              "default": function _default(txt) {
                return txt;
              }
            },
            fontSize: {
              detail: 'label????????????',
              "default": 13
            },
            fontColor: {
              detail: '????????????',
              "default": '#888'
            },
            strokeStyle: {
              detail: '??????????????????',
              "default": '#ffffff'
            },
            lineWidth: {
              detail: '????????????',
              "default": 0
            },
            textAlign: {
              detail: '??????????????????',
              "default": 'center'
            },
            verticalAlign: {
              detail: '????????????????????????',
              "default": 'middle'
            },
            position: {
              detail: '??????????????????',
              documentation: 'auto(????????????center???????????????),center,top,right,bottom,left',
              "default": 'center'
            },
            offsetX: {
              detail: 'x???????????????',
              "default": 0
            },
            offsetY: {
              detail: 'y???????????????',
              "default": 0
            }
          }
        }
      };
    }
  }]);
  return ScatGraphs;
}(_index["default"]);

_index["default"].registerComponent(ScatGraphs, 'graphs', 'scat');

var _default2 = ScatGraphs;
exports["default"] = _default2;
});

unwrapExports(scat);

var progress = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);

var _index = interopRequireDefault(graphs);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._;

var Progress = /*#__PURE__*/function (_GraphsBase) {
  (0, _inherits2["default"])(Progress, _GraphsBase);

  var _super = _createSuper(Progress);

  function Progress(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, Progress);
    _this = _super.call(this, opt, app);
    _this.type = "progress";

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Progress.defaultProps()), opt);

    _this.bgNodeData = null; //?????????nodeData????????????data???????????????????????????

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(Progress, [{
    key: "init",
    value: function init() {}
  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {});
      var me = this;

      _.extend(true, this, opt);

      me.grow(function (process) {
        me.data = me._trimGraphs(process);

        me._widget();
      });
      this.sprite.context.x = this.origin.x;
      this.sprite.context.y = this.origin.y;
    }
  }, {
    key: "_trimGraphs",
    value: function _trimGraphs(scale) {
      var me = this;

      if (scale == undefined) {
        scale = 1;
      }

      var _coord = this.app.getComponent({
        name: 'coord'
      }); //?????????????????????hLen


      this.enabledField = _coord.filterEnabledFields(this.field); //?????????

      var _startAngle = me.startAngle || _coord.startAngle;

      var _allAngle = me.allAngle || _coord.allAngle; //let _endAngle = startAngle + allAngle;


      this.bgNodeData = this._getNodeData(_startAngle, _allAngle);
      this.bgNodeData.fillStyle = this._getStyle(this.bgNodeData, this.bgColor);
      var data = {};

      _.each(this.enabledField, function (field) {
        var dataOrg = me.dataFrame.getFieldData(field);
        var nodeDatas = [];

        _.each(dataOrg, function (val, i) {
          val *= scale;
          var preNodeData = nodeDatas.slice(-1)[0];
          var startAngle = preNodeData ? preNodeData.endAngle : _startAngle;
          var allAngle = _allAngle * (val / 100);

          var nodeData = me._getNodeData(startAngle, allAngle, field, val, i);

          nodeData.fillStyle = me._getStyle(nodeData, me.node.fillStyle);
          nodeDatas.push(nodeData);
        });

        data[field] = nodeDatas;
      });

      return data;
    }
  }, {
    key: "_getNodeData",
    value: function _getNodeData(startAngle, allAngle, field, val, i) {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      var middleAngle = startAngle + allAngle / 2;
      var endAngle = startAngle + allAngle;
      var startRadian = Math.PI * startAngle / 180; //????????????

      var middleRadian = Math.PI * middleAngle / 180;
      var endRadian = Math.PI * endAngle / 180; //????????????

      var outRadius = me.radius || _coord.radius;
      var innerRadius = outRadius - me.node.width;

      var startOutPoint = _coord.getPointInRadianOfR(startRadian, outRadius);

      var middleOutPoint = _coord.getPointInRadianOfR(middleRadian, outRadius);

      var endOutPoint = _coord.getPointInRadianOfR(endRadian, outRadius);

      var startInnerPoint = _coord.getPointInRadianOfR(startRadian, innerRadius);

      var middleInnerPoint = _coord.getPointInRadianOfR(middleRadian, innerRadius);

      var endInnerPoint = _coord.getPointInRadianOfR(endRadian, innerRadius);

      var nodeData = {
        field: field,
        value: val,
        text: val,
        //value format????????????
        iNode: i,
        allAngle: allAngle,
        startAngle: startAngle,
        middleAngle: middleAngle,
        endAngle: endAngle,
        startRadian: startRadian,
        middleRadian: middleRadian,
        endRadian: endRadian,
        outRadius: outRadius,
        innerRadius: innerRadius,
        startOutPoint: startOutPoint,
        middleOutPoint: middleOutPoint,
        endOutPoint: endOutPoint,
        startInnerPoint: startInnerPoint,
        middleInnerPoint: middleInnerPoint,
        endInnerPoint: endInnerPoint,
        rowData: me.dataFrame.getRowDataAt(i),
        fillStyle: null
      };

      if (field) {
        if (me.label.format && _.isFunction(me.label.format)) {
          nodeData.text = me.label.format.apply(this, [val, nodeData]);
        }
      }
      /*  ????????????????????????????????????
      if( field ){
          //??????field????????????bgNodeData?????????,
          nodeData.fillStyle = me._getStyle( nodeData, me.node.fillStyle );
      };
      */

      /*
      if( allAngle%360 > 180 ){
          nodeData.large_arc_flag = 1;
      };
      */

      return nodeData;
    }
  }, {
    key: "_widget",
    value: function _widget() {
      var me = this;

      if (me.bgEnabled) {
        var bgPathStr = me._getPathStr(this.bgNodeData);

        if (me._bgPathElement) {
          me._bgPathElement.context.path = bgPathStr;
        } else {
          me._bgPathElement = new _canvax$$1["default"].Shapes.Path({
            context: {
              path: bgPathStr
            }
          });
          me.sprite.addChild(me._bgPathElement);
        }
        me._bgPathElement.context.fillStyle = this.bgNodeData.fillStyle;
      }

      _.each(this.data, function (nodeDatas) {
        _.each(nodeDatas, function (nodeData, i) {
          var pathStr = me._getPathStr(nodeData);

          var elId = "progress_bar_" + nodeData.field + "_" + i;
          var pathElement = me.sprite.getChildById(elId);

          if (pathElement) {
            pathElement.context.path = pathStr;
          } else {
            pathElement = new _canvax$$1["default"].Shapes.Path({
              id: elId,
              context: {
                path: pathStr
              }
            });
            me.sprite.addChild(pathElement);
          }
          pathElement.context.fillStyle = nodeData.fillStyle;

          if (me.label.enabled) {
            var labelSpId = "progress_label_" + nodeData.field + "_sprite_" + i;
            var labelSpElement = me.sprite.getChildById(labelSpId);

            if (labelSpElement) ; else {
              labelSpElement = new _canvax$$1["default"].Display.Sprite({
                id: labelSpId
              });
              me.sprite.addChild(labelSpElement);
            }
            labelSpElement.context.x = me.label.offsetX - 6; //%???????????????????????? ?????????????????????6

            labelSpElement.context.y = me.label.offsetY;
            var labelCtx = {
              fillStyle: me.label.fontColor || nodeData.fillStyle,
              fontSize: me.label.fontSize,
              lineWidth: me.label.lineWidth,
              strokeStyle: me.label.strokeStyle,
              textAlign: me.label.textAlign,
              textBaseline: me.label.verticalAlign,
              rotation: me.label.rotation
            };
            var labelId = "progress_label_" + nodeData.field + "_" + i;
            var labelElement = labelSpElement.getChildById(labelId);

            if (labelElement) {
              labelElement.resetText(nodeData.text);

              _.extend(labelElement.context, labelCtx);
            } else {
              labelElement = new _canvax$$1["default"].Display.Text(nodeData.text, {
                id: labelId,
                context: labelCtx
              });
              labelSpElement.addChild(labelElement);
            }
            var labelSymbolId = "progress_label_" + nodeData.field + "_symbol_" + i;
            var labelSymbolElement = labelSpElement.getChildById(labelSymbolId);
            var lebelSymbolCxt = {
              x: labelElement.getTextWidth() / 2 + 2,
              y: 3,
              fillStyle: me.label.unitColor || me.label.fontColor || nodeData.fillStyle,
              fontSize: me.label.unitFontSize,
              textAlign: "left",
              textBaseline: me.label.verticalAlign
            };

            if (labelSymbolElement) {
              _.extend(labelSymbolElement.context, lebelSymbolCxt);
            } else {
              var unitText = me.label.unit;
              labelSymbolElement = new _canvax$$1["default"].Display.Text(unitText, {
                id: labelSymbolId,
                context: lebelSymbolCxt
              });
              labelSpElement.addChild(labelSymbolElement);
            }
          }
        });
      });
    }
  }, {
    key: "_getPathStr",
    value: function _getPathStr(nodeData) {
      var pathStr = "M" + nodeData.startOutPoint.x + " " + nodeData.startOutPoint.y;
      pathStr += "A" + nodeData.outRadius + " " + nodeData.outRadius + " 0 0 1 " + nodeData.middleOutPoint.x + " " + nodeData.middleOutPoint.y;
      pathStr += "A" + nodeData.outRadius + " " + nodeData.outRadius + " 0 0 1 " + nodeData.endOutPoint.x + " " + nodeData.endOutPoint.y;
      var actionType = "L";

      if (nodeData.allAngle % 360 == 0) ;
      pathStr += actionType + nodeData.endInnerPoint.x + " " + nodeData.endInnerPoint.y;
      pathStr += "A" + nodeData.innerRadius + " " + nodeData.innerRadius + " 0 0 0 " + nodeData.middleInnerPoint.x + " " + nodeData.middleInnerPoint.y;
      pathStr += "A" + nodeData.innerRadius + " " + nodeData.innerRadius + " 0 0 0 " + nodeData.startInnerPoint.x + " " + nodeData.startInnerPoint.y;
      pathStr += "Z";
      return pathStr;
    }
  }, {
    key: "_getStyle",
    value: function _getStyle(nodeData, prop, def) {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      var fieldMap = _coord.getFieldMapOf(nodeData.field);

      def = def || (fieldMap ? fieldMap.color : "#171717");
      var style;

      if (prop) {
        if (_.isString(prop)) {
          style = prop;
        }

        if (_.isArray(prop)) {
          style = prop[nodeData.iNode];
        }

        if (_.isFunction(prop)) {
          style = prop.apply(this, arguments);
        }

        if (prop && prop.lineargradient) {
          style = me.ctx.createLinearGradient(nodeData.startOutPoint.x, nodeData.startOutPoint.y, nodeData.endOutPoint.x, nodeData.endOutPoint.y);

          _.each(prop.lineargradient, function (item) {
            style.addColorStop(item.position, item.color);
          });
        }
      }

      if (!style) {
        style = def;
      }

      return style;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        node: {
          detail: '???????????????',
          propertys: {
            width: {
              detail: '??????????????????',
              "default": 20
            },
            radius: {
              detail: '??????????????????????????????',
              "default": 10 //?????????width?????????

            },
            fillStyle: {
              detail: '?????????????????????',
              documentation: '?????????????????????????????????????????????????????????????????????,???????????????lineargradient',
              "default": null
            }
          }
        },
        label: {
          detail: '???????????????',
          propertys: {
            enabled: {
              detail: '????????????label',
              "default": 'true'
            },
            unit: {
              detail: '??????????????????%',
              "default": '%'
            },
            unitColor: {
              detail: '??????????????????',
              "default": null
            },
            unitFontSize: {
              detail: '??????????????????',
              "default": 14
            },
            fontColor: {
              detail: 'label??????',
              "default": null //?????????node.fillStyle

            },
            fontSize: {
              detail: 'label????????????',
              "default": 26
            },
            fixNum: {
              detail: 'toFixed?????????',
              "default": 2
            },
            format: {
              detail: 'label?????????????????????',
              "default": function _default(val) {
                return val.toFixed(this.label.fixNum);
              }
            },
            lineWidth: {
              detail: 'label??????????????????',
              "default": null
            },
            strokeStyle: {
              detail: 'label????????????',
              "default": null
            },
            rotation: {
              detail: 'label????????????',
              "default": 0
            },
            textAlign: {
              detail: 'label textAlign',
              "default": 'center',
              values: ['left', 'center', 'right']
            },
            //left center right
            verticalAlign: {
              detail: 'label verticalAlign',
              "default": 'middle',
              values: ['top', 'middle', 'bottom']
            },
            //top middle bottom
            position: {
              detail: 'label??????',
              "default": 'origin'
            },
            offsetX: {
              detail: 'label???x??????????????????',
              "default": 0
            },
            offsetY: {
              detail: 'label???y??????????????????',
              "default": 0
            }
          }
        },
        bgEnabled: {
          detail: '??????????????????',
          "default": true
        },
        bgColor: {
          detail: '?????????????????????',
          "default": '#f7f7f7'
        },
        radius: {
          detail: '??????',
          "default": null
        },
        allAngle: {
          detail: '?????????',
          documentation: '?????????null????????????????????????',
          "default": null
        },
        startAngle: {
          detail: '????????????',
          documentation: '?????????null????????????????????????',
          "default": null
        }
      };
    }
  }]);
  return Progress;
}(_index["default"]);

_index["default"].registerComponent(Progress, 'graphs', 'progress');

var _default2 = Progress;
exports["default"] = _default2;
});

unwrapExports(progress);

var radar = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _canvax$$1 = interopRequireDefault(_canvax);

var _index = interopRequireDefault(graphs);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Polygon = _canvax$$1["default"].Shapes.Polygon;
var Circle = _canvax$$1["default"].Shapes.Circle;

var RadarGraphs = /*#__PURE__*/function (_GraphsBase) {
  (0, _inherits2["default"])(RadarGraphs, _GraphsBase);

  var _super = _createSuper(RadarGraphs);

  function RadarGraphs(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadarGraphs);
    _this = _super.call(this, opt, app);
    _this.type = "radar";
    _this.enabledField = null;
    _this.groups = {//uv : {
      //   area : ,
      //   nodes: 
      //}
    };

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(RadarGraphs.defaultProps()), opt);

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(RadarGraphs, [{
    key: "init",
    value: function init() {}
  }, {
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {}); //let me = this;

      _.extend(true, this, opt);

      this.data = this._trimGraphs();

      this._widget();

      this.sprite.context.x = this.origin.x;
      this.sprite.context.y = this.origin.y;
      this.fire("complete");
    }
  }, {
    key: "_widget",
    value: function _widget() {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      var iGroup = 0;

      _.each(this.data, function (list, field) {
        var group = {};
        var pointList = [];

        _.each(list, function (node) {
          pointList.push([node.point.x, node.point.y]);
        });

        var fieldMap = _coord.getFieldMapOf(field);

        var _strokeStyle = me._getStyle(me.line.strokeStyle, fieldMap, iGroup, fieldMap.color);

        var _lineType = me._getStyle(me.line.lineType, fieldMap, iGroup, fieldMap.color);

        var polyCtx = {
          pointList: pointList,
          cursor: "pointer"
        };

        if (me.line.enabled) {
          polyCtx.lineWidth = me.line.lineWidth;
          polyCtx.strokeStyle = _strokeStyle;
          polyCtx.lineType = _lineType;
        }

        if (me.area.enabled) {
          polyCtx.fillStyle = me._getStyle(me.area.fillStyle, fieldMap, iGroup, fieldMap.color);
          polyCtx.fillAlpha = me._getStyle(me.area.fillAlpha, fieldMap, iGroup, 1);
        }

        var _poly = new Polygon({
          hoverClone: false,
          context: polyCtx
        });

        group.area = _poly;
        me.sprite.addChild(_poly);
        _poly.__hoverFillAlpha = _poly.context.fillAlpha + 0.2;
        _poly.__fillAlpha = _poly.context.fillAlpha;

        _poly.on(event.types.get(), function (e) {
          if (e.type == "mouseover") {
            this.context.fillAlpha = this.__hoverFillAlpha;
          }

          if (e.type == "mouseout") {
            this.context.fillAlpha = this.__fillAlpha;
          }
          me.app.fire(e.type, e);
        });

        if (me.node.enabled) {
          //????????????
          var _nodes = [];

          _.each(list, function (node, i) {
            pointList.push([node.point.x, node.point.y]);

            var _node = new Circle({
              context: {
                cursor: "pointer",
                x: node.point.x,
                y: node.point.y,
                r: me.node.radius,
                lineWidth: me.node.lineWidth,
                strokeStyle: me.node.strokeStyle,
                fillStyle: _strokeStyle
              }
            });

            me.sprite.addChild(_node);
            _node.iNode = i;
            _node.nodeData = node;
            _node._strokeStyle = _strokeStyle;

            _node.on(event.types.get(), function (e) {
              //???????????????????????????aAxisInd???????????????e.point????????????
              e.aAxisInd = this.iNode;
              e.eventInfo = {
                trigger: me.node,
                nodes: [this.nodeData]
              };
              me.app.fire(e.type, e);
            });

            _nodes.push(_node);
          });

          group.nodes = _nodes;
        }
        me.groups[field] = group;
        iGroup++;
      });
    }
  }, {
    key: "tipsPointerOf",
    value: function tipsPointerOf(e) {
      var me = this;
      me.tipsPointerHideOf(e);

      if (e.eventInfo && e.eventInfo.nodes) {
        _.each(e.eventInfo.nodes, function (eventNode) {
          if (me.data[eventNode.field]) {
            _.each(me.data[eventNode.field], function (n, i) {
              if (eventNode.iNode == i) {
                me.focusOf(n);
              } //else {
              //    me.unfocusOf(n);
              //}

            });
          }
        });
      }
    }
  }, {
    key: "tipsPointerHideOf",
    value: function tipsPointerHideOf() {
      var me = this;

      _.each(me.data, function (g) {
        _.each(g, function (node) {
          me.unfocusOf(node);
        });
      });
    }
  }, {
    key: "focusOf",
    value: function focusOf(node) {
      if (node.focused) return;
      var me = this;
      var _node = me.groups[node.field].nodes[node.iNode];
      _node.context.r += 1;
      _node.context.fillStyle = me.node.strokeStyle;
      _node.context.strokeStyle = _node._strokeStyle;
      node.focused = true;
    }
  }, {
    key: "unfocusOf",
    value: function unfocusOf(node) {
      if (!node.focused) return;
      var me = this;
      var _node = me.groups[node.field].nodes[node.iNode];
      _node.context.r -= 1;
      _node.context.fillStyle = _node._strokeStyle;
      _node.context.strokeStyle = me.node.strokeStyle;
      node.focused = false;
    }
  }, {
    key: "hide",
    value: function hide(field) {
      //?????????????????????hLen
      var _coord = this.app.getComponent({
        name: 'coord'
      });

      this.enabledField = _coord.filterEnabledFields(this.field);
      var group = this.groups[field];

      if (group) {
        group.area.context.visible = false;

        _.each(group.nodes, function (element) {
          element.context.visible = false;
        });
      }
    }
  }, {
    key: "show",
    value: function show(field) {
      var _coord = this.app.getComponent({
        name: 'coord'
      });

      this.enabledField = _coord.filterEnabledFields(this.field);
      var group = this.groups[field];

      if (group) {
        group.area.context.visible = true;

        _.each(group.nodes, function (element) {
          element.context.visible = true;
        });
      }
    }
  }, {
    key: "_trimGraphs",
    value: function _trimGraphs() {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      }); //?????????????????????hLen


      this.enabledField = _coord.filterEnabledFields(this.field);
      var data = {};

      _.each(this.enabledField, function (field) {
        var dataOrg = me.dataFrame.getFieldData(field);

        var fieldMap = _coord.getFieldMapOf(field);

        var arr = [];

        _.each(_coord.aAxis.angleList, function (_a, i) {
          //??????
          var _r = Math.PI * _a / 180;

          var point = _coord.getPointInRadianOfR(_r, _coord.getROfNum(dataOrg[i]));

          arr.push({
            type: "radar",
            field: field,
            iNode: i,
            rowData: me.dataFrame.getRowDataAt(i),
            focused: false,
            value: dataOrg[i],
            point: point,
            color: fieldMap.color
          });
        });

        data[field] = arr;
      });

      return data;
    }
  }, {
    key: "_getStyle",
    value: function _getStyle(style, fieldMap, iGroup, def) {
      var _s = def;

      if (_.isString(style) || _.isNumber(style)) {
        _s = style;
      }

      if (_.isArray(style)) {
        _s = style[iGroup];
      }

      if (_.isFunction(style)) {
        _s = style(iGroup, fieldMap);
      }

      if (_s === undefined || _s === null) {
        //??????undefined(???????????????function),null?????????????????????????????????
        //?????????????????????????????????????????????????????????????????????????????????
        _s = def;
      }
      return _s;
    }
  }, {
    key: "getNodesAt",
    value: function getNodesAt(index) {
      //???index?????????
      var data = this.data;
      var _nodesInfoList = []; //??????????????????

      _.each(this.enabledField, function (fs) {
        if (_.isArray(fs)) {
          _.each(fs, function (_fs) {
            //fs????????????????????????
            var node = data[_fs][index];
            node && _nodesInfoList.push(node);
          });
        } else {
          var node = data[fs][index];
          node && _nodesInfoList.push(node);
        }
      });

      return _nodesInfoList;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        field: {
          detail: '????????????',
          "default": null
        },
        line: {
          detail: '?????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            lineWidth: {
              detail: '??????',
              "default": 2
            },
            strokeStyle: {
              detail: '?????????',
              "default": null
            },
            lineType: {
              detail: '????????????,??????solid?????????dashed',
              "default": 'solid'
            }
          }
        },
        area: {
          detail: '??????????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            fillStyle: {
              detail: '???????????????',
              "default": null
            },
            fillAlpha: {
              detail: '???????????????',
              "default": 0.1
            }
          }
        },
        node: {
          detail: '???????????????????????????????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            strokeStyle: {
              detail: '?????????',
              "default": '#ffffff'
            },
            radius: {
              detail: '??????',
              "default": 4
            },
            lineWidth: {
              detail: '????????????',
              "default": 1
            }
          }
        }
      };
    }
  }]);
  return RadarGraphs;
}(_index["default"]);

_index["default"].registerComponent(RadarGraphs, 'graphs', 'radar');

var _default = RadarGraphs;
exports["default"] = _default;
});

unwrapExports(radar);

var tips = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = interopRequireDefault(_typeof_1$1);

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _component = interopRequireDefault(component);

var _canvax$$1 = interopRequireDefault(_canvax);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._;
var Rect = _canvax$$1["default"].Shapes.Rect;
var Line = _canvax$$1["default"].Shapes.Line;

var Tips = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Tips, _Component);

  var _super = _createSuper(Tips);

  function Tips(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, Tips);
    _this = _super.call(this, opt, app);
    _this.name = "tips";
    _this.tipDomContainer = _this.app.canvax.domView;
    _this.cW = 0; //?????????width

    _this.cH = 0; //?????????height

    _this.dW = 0; //html???tips??????width

    _this.dH = 0; //html???tips??????Height

    _this._tipDom = null;
    _this._tipsPointer = null; //????????????tip??? event ?????? ?????????????????????????????????eventInfo??????
    //???deepExtend???this.indo?????????

    _this.eventInfo = null;
    _this.sprite = null;
    _this.sprite = new _canvax$$1["default"].Display.Sprite({
      id: "TipSprite"
    });

    _this.app.stage.addChild(_this.sprite);

    var me = (0, _assertThisInitialized2["default"])(_this);

    _this.sprite.on("destroy", function () {
      me._tipDom = null;
    });

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Tips.defaultProps()), opt);

    return _this;
  }

  (0, _createClass2["default"])(Tips, [{
    key: "show",
    value: function show(e) {
      if (!this.enabled) return;

      if (e.eventInfo) {
        this.eventInfo = e.eventInfo; //TODO:??????????????????canvax???????????????????????????canvax???????????????

        var stage = e.target.getStage();

        if (stage) {
          this.cW = stage.context.width;
          this.cH = stage.context.height;
        } else {
          if (e.target.type == 'canvax') {
            this.cW = e.target.width;
            this.cH = e.target.height;
          }
        }

        var content = this._setContent(e);

        if (content) {
          this._setPosition(e);

          this.sprite.toFront(); //????????????????????????hover??????????????????????????????????????????????????????
          //?????????????????????hover????????????????????????point?????????????????????
          //this._tipsPointerShow(e);
        } else {
          this._hide(e);
        }
      }

      this._tipsPointerShow(e);

      this.onshow.apply(this, [e]);
    }
  }, {
    key: "move",
    value: function move(e) {
      if (!this.enabled) return;

      if (e.eventInfo) {
        this.eventInfo = e.eventInfo;

        var content = this._setContent(e);

        if (content) {
          this._setPosition(e); //????????????????????????hover??????????????????????????????????????????????????????
          //?????????????????????hover????????????????????????point?????????????????????
          //this._tipsPointerMove(e)

        } else {
          //move?????????hide?????????dialogTips, pointer???????????????
          this._hideDialogTips();
        }
      }

      this._tipsPointerMove(e);

      this.onmove.apply(this, [e]);
    }
  }, {
    key: "hide",
    value: function hide(e) {
      this._hide(e);

      this.onhide.apply(this, [e]);
    }
  }, {
    key: "_hide",
    value: function _hide(e) {
      if (!this.enabled) return;

      this._hideDialogTips(e);

      this._tipsPointerHide(e);
    }
  }, {
    key: "_hideDialogTips",
    value: function _hideDialogTips() {
      if (this.eventInfo) {
        this.eventInfo = null;
        this.sprite.removeAllChildren();

        this._removeContent();
      }
    }
    /**
     *@pos {x:0,y:0}
     */

  }, {
    key: "_setPosition",
    value: function _setPosition(e) {
      //tips???????????????fixed????????????????????????e.x e.y 2020-02-27
      if (!this.enabled) return;
      if (!this._tipDom) return;

      var x = this._checkX(e.clientX + this.offsetX);

      var y = this._checkY(e.clientY + this.offsetY);

      this._tipDom.style.cssText += ";visibility:visible;left:" + x + "px;top:" + y + "px;";

      if (this.positionOfPoint == "left") {
        this._tipDom.style.left = this._checkX(e.x - this.offsetX - this._tipDom.offsetWidth) + "px";
      }
    }
    /**
     *content??????-------------------------
     */

  }, {
    key: "_creatTipDom",
    value: function _creatTipDom(e) {
      this._tipDom = document.createElement("div");
      this._tipDom.className = "chart-tips";
      this._tipDom.style.cssText += "; border-radius:" + this.borderRadius + "px;background:" + this.fillStyle + ";border:1px solid " + this.strokeStyle + ";visibility:hidden;position:fixed;enabled:inline-block;*enabled:inline;*zoom:1;padding:6px;color:" + this.fontColor + ";line-height:1.5";
      this._tipDom.style.cssText += "; box-shadow:1px 1px 3px " + this.strokeStyle + ";";
      this._tipDom.style.cssText += "; border:none;white-space:nowrap;word-wrap:normal;";
      this._tipDom.style.cssText += "; text-align:left;pointer-events:none;";
      this._tipDom.style.cssText += "; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;";
      this.tipDomContainer && this.tipDomContainer.appendChild(this._tipDom);
    }
  }, {
    key: "_removeContent",
    value: function _removeContent() {
      if (!this._tipDom) return;
      this.tipDomContainer && this.tipDomContainer.removeChild(this._tipDom);
      this._tipDom = null;
    }
  }, {
    key: "_setContent",
    value: function _setContent(e) {
      var tipxContent = this._getContent(e);

      if (!tipxContent && tipxContent !== 0) {
        return;
      }

      if (!this._tipDom) {
        this._creatTipDom(e);
      }
      this._tipDom.innerHTML = tipxContent;
      this.dW = this._tipDom.offsetWidth;
      this.dH = this._tipDom.offsetHeight;
      return tipxContent;
    }
  }, {
    key: "_getContent",
    value: function _getContent(e) {
      var tipsContent;

      if (this.content) {
        tipsContent = _.isFunction(this.content) ? this.content(e.eventInfo, e) : this.content;
      } else {
        tipsContent = this._getDefaultContent(e.eventInfo);
      }
      return tipsContent;
    }
  }, {
    key: "_getDefaultContent",
    value: function _getDefaultContent(info) {
      var str = "";

      if (!info.nodes.length && !info.tipsContent) {
        return str;
      }

      if (info.nodes.length) {
        if (info.title !== undefined && info.title !== null && info.title !== "") {
          str += "<div style='font-size:14px;border-bottom:1px solid #f0f0f0;padding:4px;margin-bottom:6px;'>" + info.title + "</div>";
        }

        _.each(info.nodes, function (node, i) {
          /*
          if (!node.value && node.value !== 0) {
              return;
          };
          */
          var style = node.color || node.fillStyle || node.strokeStyle;
          var name = node.name || node.field || node.content || node.label;
          var value = (0, _typeof2["default"])(node.value) == "object" ? JSON.stringify(node.value) : (0, tools.numAddSymbol)(node.value);
          var hasVal = node.value || node.value == 0;
          str += "<div style='line-height:1.5;font-size:12px;padding:0 4px;'>";

          if (style) {
            str += "<span style='background:" + style + ";margin-right:8px;margin-top:7px;float:left;width:8px;height:8px;border-radius:4px;overflow:hidden;font-size:0;'></span>";
          }

          if (name) {
            str += "<span style='margin-right:5px;'>" + name;
            hasVal && (str += "???");
            str += "</span>";
          }
          hasVal && (str += value);
          str += "</div>";
        });
      }

      if (info.tipsContent) {
        str += info.tipsContent;
      }

      return str;
    }
    /**
     *?????????x?????????????????????
     */

  }, {
    key: "_checkX",
    value: function _checkX(x) {
      var w = this.dW + 2; //?????????2 ??? ????????? linewidth

      var scrollLeft = document.body.scrollLeft;
      var clientWidth = document.body.clientWidth;

      if (x < scrollLeft) {
        x = scrollLeft;
      } else if (x + w > clientWidth) {
        x = scrollLeft + (clientWidth - w);
      }

      return x;
    }
    /**
     *?????????y?????????????????????
     */

  }, {
    key: "_checkY",
    value: function _checkY(y) {
      var h = this.dH + 2; //?????????2 ??? ????????? linewidth

      var scrollTop = document.body.scrollTop;
      var clientHeight = document.body.clientHeight;

      if (y < scrollTop) {
        y = scrollTop;
      } else if (y + h > clientHeight) {
        y = scrollTop + (clientHeight - h);
      }

      return y;
    }
  }, {
    key: "_tipsPointerShow",
    value: function _tipsPointerShow(e) {
      //legend??????????????????tips?????????xAxis???????????????
      if (!e.eventInfo || !e.eventInfo.xAxis) {
        return;
      }

      var _coord = this.app.getComponent({
        name: 'coord'
      }); //????????????????????????????????????tipsPointer


      if (!_coord || _coord.type != 'rect') return;
      if (!this.pointer) return;
      var el = this._tipsPointer;
      var y = _coord.origin.y - _coord.height;
      var x = 0;

      if (this.pointer == "line") {
        x = _coord.origin.x + e.eventInfo.xAxis.x;
      }

      if (this.pointer == "region") {
        var regionWidth = _coord._xAxis.getCellLengthOfPos(e.eventInfo.xAxis.x);

        x = _coord.origin.x + e.eventInfo.xAxis.x - regionWidth / 2;

        if (e.eventInfo.xAxis.ind < 0) {
          //????????????????????????????????? e.eventInfo.xAxis.ind==-1
          x = _coord.origin.x;
        }
      }

      if (!el) {
        if (this.pointer == "line") {
          el = new Line({
            //xyToInt : false,
            context: {
              x: x,
              y: y,
              start: {
                x: 0,
                y: 0
              },
              end: {
                x: 0,
                y: _coord.height
              },
              lineWidth: 1,
              strokeStyle: "#cccccc"
            }
          });
        }

        if (this.pointer == "region") {
          var _regionWidth = _coord._xAxis.getCellLengthOfPos(x);

          el = new Rect({
            //xyToInt : false,
            context: {
              width: _regionWidth,
              height: _coord.height,
              x: x,
              y: y,
              fillStyle: "#cccccc",
              globalAlpha: 0.3
            }
          });
        }
        this.app.graphsSprite.addChild(el, 0);
        this._tipsPointer = el;
      } else {
        if (this.pointerAnim && _coord._xAxis.layoutType != "proportion") {
          if (el.__animation) {
            el.__animation.stop();
          }
          el.__animation = el.animate({
            x: x,
            y: y
          }, {
            duration: 200
          });
        } else {
          el.context.x = x;
          el.context.y = y;
        }
      }
    }
  }, {
    key: "_tipsPointerHide",
    value: function _tipsPointerHide(e) {
      //legend??????????????????tips?????????xAxis???????????????
      if (!e.eventInfo || !e.eventInfo.xAxis) {
        return;
      }

      var _coord = this.app.getComponent({
        name: 'coord'
      }); //????????????????????????????????????tipsPointer


      if (!_coord || _coord.type != 'rect') return;
      if (!this.pointer || !this._tipsPointer) return;

      this._tipsPointer.destroy();

      this._tipsPointer = null;
    }
  }, {
    key: "_tipsPointerMove",
    value: function _tipsPointerMove(e) {
      //legend??????????????????tips?????????xAxis???????????????
      if (!e.eventInfo || !e.eventInfo.xAxis) {
        return;
      }

      var _coord = this.app.getComponent({
        name: 'coord'
      }); //????????????????????????????????????tipsPointer


      if (!_coord || _coord.type != 'rect') return;
      if (!this.pointer || !this._tipsPointer) return; //console.log("move");

      var el = this._tipsPointer;
      var x = _coord.origin.x + e.eventInfo.xAxis.x;

      if (this.pointer == "region") {
        var regionWidth = _coord._xAxis.getCellLengthOfPos(e.eventInfo.xAxis.x);

        x = _coord.origin.x + e.eventInfo.xAxis.x - regionWidth / 2;

        if (e.eventInfo.xAxis.ind < 0) {
          //????????????????????????????????? e.eventInfo.xAxis.ind==-1
          x = _coord.origin.x;
        }
      }
      var y = _coord.origin.y - _coord.height;

      if (x == el.__targetX) {
        return;
      }

      if (this.pointerAnim && _coord._xAxis.layoutType != "proportion") {
        if (el.__animation) {
          el.__animation.stop();
        }
        el.__targetX = x;
        el.__animation = el.animate({
          x: x,
          y: y
        }, {
          duration: 200,
          onComplete: function onComplete() {
            delete el.__targetX;
            delete el.__animation;
          }
        });
      } else {
        el.context.x = x;
        el.context.y = y;
      }
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        enabled: {
          detail: '????????????Tips',
          "default": true
        },
        content: {
          detail: '?????????tips????????????html???',
          "default": null
        },
        borderRadius: {
          detail: 'tips?????????????????????',
          "default": 5
        },
        strokeStyle: {
          detail: 'tips????????????',
          "default": '#ccc'
        },
        fillStyle: {
          detail: 'tips?????????',
          "default": 'rgba(255,255,255,0.95)'
        },
        fontColor: {
          detail: 'tips????????????',
          "default": '#999999'
        },
        positionOfPoint: {
          detail: 'tips???????????????????????????????????????',
          "default": 'right'
        },
        offsetX: {
          detail: 'tips?????????????????????????????????x',
          "default": 10
        },
        offsetY: {
          detail: 'tips?????????????????????????????????y',
          "default": 10
        },
        positionInRange: {
          detail: 'tip????????????????????????????????????(??????)',
          "default": false
        },
        pointer: {
          detail: '??????tips????????????????????????',
          "default": 'line',
          documentation: 'tips?????????,??????????????????????????????"line" | "region"(?????????????????????region)'
        },
        pointerAnim: {
          detail: 'tips??????????????????????????????????????????',
          "default": true
        },
        onshow: {
          detail: 'show??????????????????',
          "default": function _default() {}
        },
        onmove: {
          detail: 'move??????????????????',
          "default": function _default() {}
        },
        onhide: {
          detail: 'hide??????????????????',
          "default": function _default() {}
        }
      };
    }
  }]);
  return Tips;
}(_component["default"]);

_component["default"].registerComponent(Tips, 'tips');

var _default2 = Tips;
exports["default"] = _default2;
});

unwrapExports(tips);

var trigger = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

/**
 * ??????????????????????????????????????????????????????trigger??????
 * ?????????comp????????????????????????trigger???????????????
 * params??????????????????trigger?????????????????????
 * ??????legend???datazoom??????????????????
 */
var Trigger = function Trigger(comp) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _classCallCheck2["default"])(this, Trigger);
  this.comp = comp;
  this.params = params;
};

exports["default"] = Trigger;
});

unwrapExports(trigger);

var legend = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _component = interopRequireDefault(component);

var _canvax$$1 = interopRequireDefault(_canvax);

var _trigger = interopRequireDefault(trigger);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Circle = _canvax$$1["default"].Shapes.Circle;

var Legend = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Legend, _Component);

  var _super = _createSuper(Legend);

  function Legend(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, Legend);
    _this = _super.call(this, opt, app);
    _this.name = "legend";

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(Legend.defaultProps()), opt);
    /* data??????????????????
    [
        //descartes??????????????????????????????yAxis
        {name: "uv", color: "#ff8533", field: '' ...???????????????????????????????????????????????? enabled: true, ind: 0, } //??????????????????field???fillStyle????????? activate???????????????
    ]
    */


    _this.data = _this._getLegendData(opt); //this.position = "top" ; //?????????????????????top,right,bottom,left
    //this.direction = "h"; //?????? top,bottom --> h left,right -- >v

    if (!opt.direction && opt.position) {
      if (_this.position == "left" || _this.position == "right") {
        _this.direction = 'v';
      } else {
        _this.direction = 'h';
      }
    }
    _this.sprite = new _canvax$$1["default"].Display.Sprite({
      id: "LegendSprite",
      context: {
        x: _this.pos.x,
        y: _this.pos.y
      }
    });

    _this.app.stage.addChild(_this.sprite);

    _this.widget(); //?????????????????????????????????????????????????????????????????????????????????


    _this.layout();

    return _this;
  }

  (0, _createClass2["default"])(Legend, [{
    key: "_getLegendData",
    value: function _getLegendData(opt) {
      var legendData = opt.data;

      if (legendData) {
        _.each(legendData, function (item, i) {
          item.enabled = true;
          item.ind = i;
        }); //delete opt.data;

      } else {
        legendData = this.app.getLegendData();
      }
      return legendData || [];
    }
  }, {
    key: "layout",
    value: function layout() {
      var app = this.app;
      var width = this.width + this.margin.left + this.margin.right;
      var height = this.height + this.margin.top + this.margin.bottom;
      var x = app.padding.left;
      var y = app.padding.top;

      if (this.position == "right") {
        x = app.width - app.padding.right - width;
      }

      if (this.position == "bottom") {
        y = app.height - app.padding.bottom - height + this.icon.height / 2; //TODO:??????????????????????????????
      }
      var layoutWidth, layoutHeight; //?????????app???padding????????????

      if (this.position == "left" || this.position == "right") {
        // v
        app.padding[this.position] += width;
        layoutWidth = width;
        layoutHeight = app.height - app.padding.top - app.padding.bottom;
      } else if (this.position == "top" || this.position == "bottom") {
        // h
        app.padding[this.position] += height;
        layoutWidth = app.width - app.padding.right - app.padding.left;
        layoutHeight = height;
      }

      if (this.textAlign == 'center') {
        x += layoutWidth / 2 - this.width / 2;
      }

      if (this.textAlign == 'right') {
        x += layoutWidth - this.width;
      }
      this.pos = {
        x: x,
        y: y
      };
      return this.pos;
    }
  }, {
    key: "draw",
    value: function draw() {
      //????????????????????????????????? textAlign left????????????????????????????????????????????? ?????????, ???????????????
      var _coord = this.app.getComponent({
        name: 'coord'
      });

      if (_coord && _coord.type == 'rect') {
        if (this.textAlign == "left" && (this.position == "top" || this.position == "bottom")) {
          this.pos.x = _coord.getSizeAndOrigin().origin.x + this.icon.radius;
        }
      }
      this.setPosition();
    }
  }, {
    key: "widget",
    value: function widget() {
      var me = this;
      var viewWidth = this.app.width - this.app.padding.left - this.app.padding.right;
      var viewHeight = this.app.height - this.app.padding.top - this.app.padding.bottom;
      var maxItemWidth = 0;
      var width = 0,
          height = 0;
      var x = 0,
          y = 0;
      var rows = 1;
      var isOver = false; //??????legend??????

      _.each(this.data, function (obj, i) {
        if (isOver) return;
        var fillStyle = !obj.enabled ? "#ccc" : obj.color || "#999";

        if (me.icon.fillStyle) {
          var _fillStyle = me._getProp(me.icon.fillStyle, obj);

          if (_fillStyle) {
            fillStyle = _fillStyle;
          }
        }

        var _icon = new Circle({
          id: "legend_field_icon_" + i,
          context: {
            x: 0,
            y: me.icon.height / 3,
            fillStyle: fillStyle,
            r: me.icon.radius,
            cursor: "pointer"
          }
        });

        _icon.on(event.types.get(), function (e) {//... ?????????sprit????????????
        });

        var _text = obj.name;

        if (me.label.format) {
          _text = me.label.format(obj.name, obj);
        }
        var txt = new _canvax$$1["default"].Display.Text(_text, {
          id: "legend_field_txt_" + i,
          context: {
            x: me.icon.radius + 3,
            y: me.icon.height / 3,
            textAlign: me.label.textAlign,
            //"left",
            textBaseline: me.label.textBaseline,
            //"middle",
            fillStyle: me.label.fontColor,
            //"#333", //obj.color
            cursor: me.label.cursor //"pointer"

          }
        });
        txt.on(event.types.get(), function (e) {//... ?????????sprit????????????
        });
        var txtW = txt.getTextWidth();
        var itemW = txtW + me.icon.radius * 2 + 20;
        maxItemWidth = Math.max(maxItemWidth, itemW);
        var spItemC = {
          height: me.icon.height
        };

        if (me.direction == "v") {
          if (y + me.icon.height > viewHeight) {
            if (x > viewWidth * 0.3) {
              isOver = true;
              return;
            }
            x += maxItemWidth;
            y = 0;
          }
          spItemC.x = x;
          spItemC.y = y;
          y += me.icon.height;
          height = Math.max(height, y);
        } else {
          //????????????
          if (x + itemW > viewWidth) {
            if (me.icon.height * (rows + 1) > viewHeight * 0.3) {
              isOver = true;
              return;
            }
            x = 0;
            rows++;
          }
          spItemC.x = x;
          spItemC.y = me.icon.height * (rows - 1);
          x += itemW;
          width = Math.max(width, x);
        }
        var sprite = new _canvax$$1["default"].Display.Sprite({
          id: "legend_field_" + i,
          context: spItemC
        });
        sprite.addChild(_icon);
        sprite.addChild(txt);
        sprite.context.width = itemW;
        me.sprite.addChild(sprite);
        sprite.on(event.types.get(), function (e) {
          if (e.type == "click" && me.activeEnabled) {
            //????????????field???????????????????????????
            if (_.filter(me.data, function (obj) {
              return obj.enabled;
            }).length == 1) {
              if (obj.enabled) {
                return;
              }
            }
            obj.enabled = !obj.enabled;
            _icon.context.fillStyle = !obj.enabled ? "#ccc" : obj.color || "#999";

            if (obj.enabled) {
              me.app.show(obj.name, new _trigger["default"](this, obj));
            } else {
              me.app.hide(obj.name, new _trigger["default"](this, obj));
            }
          }

          if (me.tipsEnabled) {
            if (e.type == 'mouseover' || e.type == 'mousemove') {
              e.eventInfo = me._getInfoHandler(e, obj);
            }

            if (e.type == 'mouseout') {
              delete e.eventInfo;
            }
            me.app.fire(e.type, e);
          }
        });
      });

      if (this.direction == "h") {
        me.width = me.sprite.context.width = width;
        me.height = me.sprite.context.height = me.icon.height * rows;
      } else {
        me.width = me.sprite.context.width = x + maxItemWidth;
        me.height = me.sprite.context.height = height;
      } //me.width = me.sprite.context.width  = width;
      //me.height = me.sprite.context.height = height;

    }
  }, {
    key: "_getInfoHandler",
    value: function _getInfoHandler(e, data) {
      return {
        type: "legend",
        triggerType: 'legend',
        trigger: this,
        tipsEnabled: this.tipsEnabled,
        //title : data.name,
        nodes: [{
          name: data.name,
          fillStyle: data.color
        }]
      };
    }
  }, {
    key: "_getProp",
    value: function _getProp(prop, nodeData) {
      var _prop = prop;

      if (_.isArray(prop)) {
        _prop = prop[nodeData.ind];
      }

      if (_.isFunction(prop)) {
        _prop = prop.apply(this, [nodeData]);
      }
      return _prop;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        data: {
          detail: '????????????',
          "default": [],
          documentation: '\
                    ??????????????????{name: "uv", color: "#ff8533", field: "" ...}\
                    ???????????????????????????????????????????????? enabled: true, ind: 0\
                    ??????????????????field???fillStyle?????????\
                    '
        },
        position: {
          detail: '????????????',
          documentation: '?????????????????????top,right,bottom,left',
          "default": 'top'
        },
        direction: {
          detail: '??????????????????',
          "default": 'h',
          documentation: '?????? top,bottom --> h left,right -- >v'
        },
        textAlign: {
          detail: '??????????????????????????????????????????',
          "default": 'left',
          documentation: '??????left???center???right'
        },
        verticalAlign: {
          detail: '?????????????????????????????????????????????????????????',
          "default": 'middle',
          documentation: '??????top???middle???bottom'
        },
        icon: {
          detail: '????????????',
          propertys: {
            height: {
              detail: '???',
              "default": 26
            },
            width: {
              detail: '?????????',
              "default": 'auto'
            },
            shapeType: {
              detail: '????????????????????????????????????????????????',
              "default": 'circle'
            },
            radius: {
              detail: '?????????circle?????????',
              "default": 5
            },
            lineWidth: {
              detail: '??????????????????',
              "default": 1
            },
            fillStyle: {
              detail: '???????????????????????????data??????????????????????????????',
              "default": null
            }
          }
        },
        label: {
          detail: '????????????',
          propertys: {
            textAlign: {
              detail: '??????????????????',
              "default": 'left'
            },
            textBaseline: {
              detail: '????????????????????????',
              "default": 'middle'
            },
            fontColor: {
              detail: '????????????',
              "default": '#333333'
            },
            cursor: {
              detail: '????????????',
              "default": 'pointer'
            },
            format: {
              detail: '???????????????????????????',
              "default": null
            }
          }
        },
        activeEnabled: {
          detail: '?????????????????????',
          "default": true
        },
        tipsEnabled: {
          detail: '?????????????????????tips',
          "default": false
        }
      };
    }
  }]);
  return Legend;
}(_component["default"]);

_component["default"].registerComponent(Legend, 'legend');

var _default = Legend;
exports["default"] = _default;
});

unwrapExports(legend);

var theme = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _component = interopRequireDefault(component);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Theme = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Theme, _Component);

  var _super = _createSuper(Theme);

  function Theme(theme, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, Theme);
    _this = _super.call(this, theme, app);
    _this.name = "theme";
    _this.colors = theme || [];
    return _this;
  }

  (0, _createClass2["default"])(Theme, [{
    key: "set",
    value: function set(colors) {
      this.colors = colors;
      return this.colors;
    }
  }, {
    key: "get",
    value: function get(ind) {
      var colors = this.colors;

      if (!_canvax._.isArray(colors)) {
        colors = [colors];
      }
      return colors;
    }
  }, {
    key: "mergeTo",
    value: function mergeTo(colors) {
      if (!colors) {
        colors = [];
      }

      for (var i = 0, l = this.colors.length; i < l; i++) {
        if (colors[i]) {
          colors[i] = this.colors[i];
        } else {
          colors.push(this.colors[i]);
        }
      }
      return colors;
    }
  }]);
  return Theme;
}(_component["default"]);

_component["default"].registerComponent(Theme, 'theme');

var _default = Theme;
exports["default"] = _default;
});

unwrapExports(theme);

var markline = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _component = interopRequireDefault(component);

var _canvax$$1 = interopRequireDefault(_canvax);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._;
var BrokenLine = _canvax$$1["default"].Shapes.BrokenLine;
var Sprite = _canvax$$1["default"].Display.Sprite;
var Text = _canvax$$1["default"].Display.Text;

var MarkLine = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MarkLine, _Component);

  var _super = _createSuper(MarkLine);

  function MarkLine(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, MarkLine);
    _this = _super.call(this, opt, app);
    _this.name = "markLine";
    _this._yAxis = null;
    _this.line = {
      y: 0,
      list: []
    };
    _this._txt = null;
    _this._line = null;
    _this.sprite = new Sprite();

    _this.app.graphsSprite.addChild(_this.sprite);

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(MarkLine.defaultProps()), opt);

    return _this;
  }

  (0, _createClass2["default"])(MarkLine, [{
    key: "draw",
    value: function draw() {
      this._calculateProps();

      this.setPosition();
      this.widget();
    }
  }, {
    key: "_calculateProps",
    value: function _calculateProps() {
      var opt = this._opt; //??????markline???target????????????????????????target????????????????????? markline, ??????

      var field = opt.markTo;

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      if (field && _.indexOf(this.app.dataFrame.fields, field) == -1) {
        //?????????????????????????????????????????????
        return;
      }
      var _yAxis = _coord._yAxis[0]; //??????????????????y???

      if (field) {
        //???????????????markTo?????? _coord._yAxis???????????????markTo?????????yAxis??????
        _.each(_coord._yAxis, function ($yAxis, yi) {
          var fs = _.flatten([$yAxis.field]);

          if (_.indexOf(fs, field) >= 0) {
            _yAxis = $yAxis;
          }
        });
      }

      if (opt.yAxisAlign) {
        //???????????????yAxisAlign??????????????????yAxisAlign???????????????
        _yAxis = _coord._yAxis[opt.yAxisAlign == "left" ? 0 : 1];
      }
      var y;

      if (opt.y !== undefined && opt.y !== null) {
        //????????????????????????????????????????????????y?????????????????????yVal
        y = Number(opt.y);
      } else if (opt.yVal !== undefined && opt.yVal !== null) {
        y = Number(opt.yVal);
      } else {
        //????????????????????????y??????????????? ????????????????????????
        //???????????????????????????????????????datazoom???draging?????????
        y = function y() {
          var _fdata = this.app.dataFrame.getFieldData(field);

          var _count = 0;

          _.each(_fdata, function (val) {
            if (Number(val)) {
              _count += val;
            }
          });

          return _count / _fdata.length;
        };
      }

      if (!isNaN(y)) {
        //??????y??????function????????????????????????????????????????????????????????????ydatasection?????????
        //_yAxis.setWaterLine( y );
        //_yAxis.draw();
        _yAxis.drawWaterLine(y);
      }
      var _fstyle = "#777";

      var fieldMap = _coord.getFieldMapOf(field);

      if (fieldMap) {
        _fstyle = fieldMap.color;
      }
      var lineStrokeStyle = opt.line && opt.line.strokeStyle || _fstyle;
      var textFillStyle = opt.label && opt.label.fontColor || _fstyle; //?????????????????????????????????

      this._yAxis = _yAxis;
      this.width = _coord.width;
      this.height = _coord.height;
      this.yVal = y;
      this.pos = {
        x: _coord.origin.x,
        y: _coord.origin.y
      };
      this.line.list = [[0, 0], [this.width, 0]];
      this.label.fontColor = textFillStyle;

      if (lineStrokeStyle) {
        this.line.strokeStyle = lineStrokeStyle;
      }
    }
  }, {
    key: "widget",
    value: function widget() {
      var me = this;

      var y = this._getYPos();

      var line = new BrokenLine({
        //??????
        id: "line",
        context: {
          y: y,
          pointList: me.line.list,
          strokeStyle: me.line.strokeStyle,
          lineWidth: me.line.lineWidth,
          lineType: me.line.lineType
        }
      });
      me.sprite.addChild(line);
      me._line = line;

      if (me.label.enabled) {
        var txtCtx = {
          fillStyle: me.label.fontColor,
          fontSize: me.label.fontSize
        };
        var txt = new Text(me._getLabel(), {
          //??????
          context: txtCtx
        });
        this._txt = txt;
        me.sprite.addChild(txt);

        me._setTxtPos(y);
      }

      this.line.y = y;
    }
  }, {
    key: "reset",
    value: function reset(opt) {
      opt && _.extend(true, this, opt);
      var me = this;

      var y = this._getYPos();

      if (y != this.line.y) {
        this._line.animate({
          y: y
        }, {
          duration: 300,
          onUpdate: function onUpdate(obj) {
            if (me.label.enabled) {
              me._txt.resetText(me._getLabel());

              me._setTxtPos(obj.y); //me._txt.context.y = obj.y - me._txt.getTextHeight();

            }
          } //easing: 'Back.Out' //Tween.Easing.Elastic.InOut

        });
      }
      this._line.context.strokeStyle = this.line.strokeStyle;
      this.line.y = y;
    }
  }, {
    key: "_setTxtPos",
    value: function _setTxtPos(y) {
      var me = this;
      var txt = me._txt;

      if (this._yAxis.align == "left") {
        txt.context.x = 5;
      } else {
        txt.context.x = this.width - txt.getTextWidth() - 5;
      }

      if (_.isNumber(me.label.y)) {
        txt.context.y = me.label.y;
      } else {
        txt.context.y = y - txt.getTextHeight();
      }
    }
  }, {
    key: "_getYVal",
    value: function _getYVal(yVal) {
      yVal = yVal || this.yVal;
      var y = yVal;

      if (_.isFunction(yVal)) {
        y = yVal.apply(this);
      }
      return y;
    }
  }, {
    key: "_getYPos",
    value: function _getYPos() {
      if (this._opt.yPixel) {
        //??????????????????????????????????????????????????????????????????
        return -this._opt.yPixel;
      }

      return -this._yAxis.getPosOfVal(this._getYVal());
    }
  }, {
    key: "_getLabel",
    value: function _getLabel() {
      var str;

      var yVal = this._getYVal();

      if (_.isFunction(this.label.format)) {
        str = this.label.format(yVal, this);
      } else {
        if (_.isString(this.label.text)) {
          str = this.label.text;
        } else {
          str = yVal;
        }
      }
      return str;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        markTo: {
          detail: '????????????????????????',
          "default": null
        },
        yVal: {
          detail: '????????????',
          "default": 0,
          documentation: '????????????function????????????????????????function'
        },
        yPixel: {
          detail: '?????????????????????y?????????',
          "default": 0
        },
        line: {
          detail: '????????????',
          propertys: {
            strokeStyle: {
              detail: '????????????',
              "default": '#999999'
            },
            lineWidth: {
              detail: '??????',
              "default": 1
            },
            lineType: {
              detail: '?????????',
              "default": 'dashed'
            }
          }
        },
        label: {
          detail: '??????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": false
            },
            fontColor: {
              detail: '??????????????????',
              "default": '#666'
            },
            fontSize: {
              detail: '??????????????????',
              "default": 12
            },
            text: {
              detail: '????????????',
              "default": null
            },
            format: {
              detail: '?????????????????????',
              "default": null
            }
          }
        }
      };
    }
  }]);
  return MarkLine;
}(_component["default"]);

_component["default"].registerComponent(MarkLine, 'markLine');

var _default = MarkLine;
exports["default"] = _default;
});

unwrapExports(markline);

var markcloumn = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _component = interopRequireDefault(component);

var _canvax$$1 = interopRequireDefault(_canvax);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._,
    event = _canvax$$1["default"].event;
var Line = _canvax$$1["default"].Shapes.Line;
var Circle = _canvax$$1["default"].Shapes.Circle;
var Text = _canvax$$1["default"].Display.Text;

var markCloumn = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(markCloumn, _Component);

  var _super = _createSuper(markCloumn);

  function markCloumn(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, markCloumn);
    _this = _super.call(this, opt, app);
    _this.name = "markcloumn";

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(markCloumn.defaultProps()), opt);

    _this.sprite = new _canvax$$1["default"].Display.Sprite();

    _this.app.graphsSprite.addChild(_this.sprite);

    _this._line = null;
    _this._lineSp = new _canvax$$1["default"].Display.Sprite();

    _this.sprite.addChild(_this._lineSp);

    _this.nodes = [];
    _this._nodes = new _canvax$$1["default"].Display.Sprite();

    _this.sprite.addChild(_this._nodes);

    _this._labels = new _canvax$$1["default"].Display.Sprite();

    _this.sprite.addChild(_this._labels);

    return _this;
  }

  (0, _createClass2["default"])(markCloumn, [{
    key: "draw",
    value: function draw(opt) {
      !opt && (opt = {});
      this.width = opt.width;
      this.height = opt.height;
      this.origin = opt.origin;
      this.sprite.context.x = this.origin.x;
      this.sprite.context.y = this.origin.y;

      this._widget();
    }
  }, {
    key: "reset",
    value: function reset(opt) {
      opt && _.extend(true, this, opt);

      this._widget();
    }
  }, {
    key: "_widget",
    value: function _widget() {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      var _xAxis = _coord._xAxis;
      var xNode;

      if (this.xVal != null) {
        xNode = _xAxis.getNodeInfoOfVal(this.xVal);
      }

      if (this.xPixel != null) {
        xNode = _xAxis.getNodeInfoOfX(this.xPixel);
      }

      if (!xNode) {
        return;
      }
      me.nodes = [];
      me.on("complete", function () {
        me._drawLine(xNode);

        me._drawNodes(xNode);

        me._drawLabels(xNode);
      });
      var i = 0;

      var _graphs = this.app.getGraphs();

      _.each(_graphs, function (_g) {
        function _f() {
          i++;

          if (me.markTo && _.flatten([_g.field]).indexOf(me.markTo) == -1) ; else {
            var nodes = _g.getNodesOfPos(xNode.x);

            if (me.markTo) {
              var _node = _.find(nodes, function (node) {
                return node.field == me.markTo;
              });

              _node && (me.nodes = [_node]);
            } else {
              me.nodes = me.nodes.concat(nodes);
            }
          }

          if (i == _graphs.length) {
            me.fire("complete");
          }
        }

        if (_g.inited) {
          _f();
        } else {
          _g.on('complete', function () {
            _f();
          });
        }
      });
    }
  }, {
    key: "_drawLine",
    value: function _drawLine(xNode) {
      var me = this;
      if (!me.line.enabled) return;

      var lineOpt = _.extend(true, {
        x: parseInt(xNode.x),
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: -me.height
        },
        //????????????????????????
        lineWidth: 1,
        strokeStyle: "#cccccc"
      }, this.line);

      if (me.line.endY != null) {
        var y = 0;

        if (_.isNumber(me.line.endY)) {
          y = me.line.endY;
        }

        if (me.line.endY == 'auto') {
          _.each(me.nodes, function (node) {
            y = Math.min(node.y);
          });
        }
        lineOpt.end.y = y;
      }

      if (this._line) {
        _.extend(this._line.context, lineOpt);
      } else {
        this._line = new Line({
          context: lineOpt
        });

        this._lineSp.addChild(this._line);

        this._line.on(event.types.get(), function (e) {
          e.eventInfo = {
            //iNode : this.iNode,
            xAxis: {},
            nodes: me.nodes
          };

          if (me.xVal != null) {
            e.eventInfo.xAxis.value = me.xVal;
            e.eventInfo.xAxis.text = me.xVal + '';
            e.eventInfo.title = me.xVal + '';
          }
          me.app.fire(e.type, e);
        });
      }
    }
  }, {
    key: "_drawNodes",
    value: function _drawNodes() {
      var me = this;
      if (!me.node.enabled) return;

      me._nodes.removeAllChildren();

      _.each(me.nodes, function (nodeData) {
        var nodeCtx = _.extend({
          x: nodeData.x,
          y: nodeData.y,
          cursor: "pointer",
          r: me.node.radius,
          lineWidth: me.node.lineWidth || nodeData.lineWidth,
          strokeStyle: me.node.strokeStyle || nodeData.color,
          fillStyle: me.node.fillStyle || nodeData.fillStyle
        });

        var _node = new Circle({
          context: nodeCtx
        });

        _node.nodeData = nodeData;

        _node.on(event.types.get(), function (e) {
          e.eventInfo = {
            //iNode : this.iNode,
            xAxis: {},
            nodes: [nodeData]
          };

          if (me.xVal != null) {
            e.eventInfo.xAxis.value = me.xVal;
            e.eventInfo.xAxis.text = me.xVal + '';
            e.eventInfo.title = me.xVal + '';
          }
          me.app.fire(e.type, e);
        });

        me._nodes.addChild(_node);
      });
    }
  }, {
    key: "_drawLabels",
    value: function _drawLabels() {
      var me = this;
      if (!me.node.enabled) return;

      me._labels.removeAllChildren();

      _.each(me.nodes, function (nodeData) {
        var labelCtx = {
          x: nodeData.x,
          y: nodeData.y - me.node.radius - 2,
          fillStyle: me.label.fontColor || nodeData.color,
          fontSize: me.label.fontSize,
          textAlign: "center",
          textBaseline: "bottom"
        };
        var text = me.label.text;

        if (_.isFunction(text)) {
          text = text.apply(me, [nodeData]);
        }
        if (!text) return;

        var _label = new Text(text, {
          context: labelCtx
        });

        me._labels.addChild(_label); //??????label????????????????????????,?????????????????????????????????


        if (_label.localToGlobal().x + _label.getTextWidth() / 2 > me.app.width) {
          _label.context.x = me.app.width - _label.getTextWidth() / 2 - _label.parent.localToGlobal().x;
        }
      });
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        xVal: {
          detail: 'x???value???',
          "default": null
        },
        xPixel: {
          detail: 'x????????????????????????',
          "default": null
        },
        markTo: {
          detail: '????????????????????????????????????????????????',
          documentation: '????????????????????????????????????line?????????????????????graphs??????node??????',
          "default": null
        },
        line: {
          detail: '????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            lineWidth: {
              detail: '??????',
              "default": 2
            },
            strokeStyle: {
              detail: '????????????',
              "default": '#d5d5d5'
            },
            lineType: {
              detail: '?????????????????????(dashed)??????(solid)',
              "default": 'solid'
            },
            startY: {
              detail: 'startY',
              "default": 0
            },
            endY: {
              detail: 'startY',
              "default": null //'node'

            }
          }
        },
        node: {
          detail: '??????????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            radius: {
              detail: '????????????',
              "default": 5
            },
            fillStyle: {
              detail: '????????????????????????',
              "default": '#ffffff'
            },
            strokeStyle: {
              detail: '????????????????????????????????????line.strokeStyle????????????',
              "default": null
            },
            lineWidth: {
              detail: '????????????????????????',
              "default": 2
            }
          }
        },
        label: {
          detail: '??????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": false
            },
            fontColor: {
              detail: '??????????????????',
              "default": null
            },
            fontSize: {
              detail: '??????????????????',
              "default": 12
            },
            text: {
              detail: '????????????',
              documentation: "???????????????",
              "default": null
            },
            format: {
              detail: '?????????????????????',
              "default": null
            }
          }
        }
      };
    }
  }]);
  return markCloumn;
}(_component["default"]);

_component["default"].registerComponent(markCloumn, 'markcloumn');

var _default = markCloumn;
exports["default"] = _default;
});

unwrapExports(markcloumn);

var bartgi = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _component = interopRequireDefault(component);

var _canvax$$1 = interopRequireDefault(_canvax);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Line = _canvax$$1["default"].Shapes.Line;
var _ = _canvax$$1["default"]._;

var barTgi = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(barTgi, _Component);

  var _super = _createSuper(barTgi);

  function barTgi(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, barTgi);
    _this = _super.call(this, opt, app);
    _this.name = "barTgi"; //this.field = null;
    //this.barField = null;

    _this.data = null;
    _this.barDatas = null;
    _this._yAxis = null; //this.yAxisAlign = "left";

    _this.sprite = null; //this.standardVal = 100;

    _this.pos = {
      x: 0,
      y: 0
    };
    /*
    this.line = {
        lineWidth : 3,
        strokeStyle : function( val, i ){
            if( val >= this.standardVal ){
                return "#43cbb5"
            } else {
                return "#ff6060"
            }
        }
    };
    */

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(barTgi.defaultProps()), opt);

    _this._yAxis = _this.app.getComponent({
      name: 'coord'
    })._yAxis[_this.yAxisAlign == "left" ? 0 : 1];
    _this.sprite = new _canvax$$1["default"].Display.Sprite();

    _this.app.graphsSprite.addChild(_this.sprite);

    return _this;
  }

  (0, _createClass2["default"])(barTgi, [{
    key: "reset",
    value: function reset(opt) {
      _.extend(true, this, opt);

      this.barDatas = null;
      this.data = null;
      this.sprite.removeAllChildren();
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      var me = this;

      var _coord = this.app.getComponent({
        name: 'coord'
      });

      this.pos = {
        x: _coord.origin.x,
        y: _coord.origin.y
      };
      this.setPosition();

      _.each(me.app.getComponents({
        name: 'graphs'
      }), function (_g) {
        if (_g.type == "bar" && _g.data[me.barField]) {
          me.barDatas = _g.data[me.barField];
          return false;
        }
      });

      this.data = _.flatten(me.app.dataFrame.getDataOrg(me.field));

      if (!this.barDatas) {
        return;
      }

      _.each(this.data, function (tgi, i) {
        var y = -me._yAxis.getPosOfVal(tgi);
        var barData = me.barDatas[i];

        var _tgiLine = new Line({
          context: {
            start: {
              x: barData.x,
              y: y
            },
            end: {
              x: barData.x + barData.width,
              y: y
            },
            lineWidth: 2,
            strokeStyle: me._getProp(me.line.strokeStyle, tgi, i)
          }
        });

        me.sprite.addChild(_tgiLine);
      });
    }
  }, {
    key: "_getProp",
    value: function _getProp(val, tgi, i) {
      var res = val;

      if (_.isFunction(val)) {
        res = val.apply(this, [tgi, i]);
      }
      return res;
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        field: {
          detail: '????????????',
          "default": null
        },
        barField: {
          detail: '??????bartgi???????????????bar Graph ???field',
          "default": null
        },
        yAxisAlign: {
          detail: '??????bartgi?????????????????????y???',
          "default": 'left'
        },
        standardVal: {
          detail: 'tgi?????????',
          "default": 100
        },
        line: {
          detail: 'bar?????????tgi?????????',
          propertys: {
            lineWidth: {
              detail: '??????',
              "default": 3
            },
            strokeStyle: {
              detail: '?????????',
              "default": function _default(val) {
                if (val >= this.standardVal) {
                  return "#43cbb5";
                } else {
                  return "#ff6060";
                }
              }
            }
          }
        }
      };
    }
  }]);
  return barTgi;
}(_component["default"]);

_component["default"].registerComponent(barTgi, 'barTgi');

var _default2 = barTgi;
exports["default"] = _default2;
});

unwrapExports(bartgi);

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(toConsumableArray);

var datazoom = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

var _createClass2 = interopRequireDefault(createClass$1);

var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized$1);

var _inherits2 = interopRequireDefault(inherits$1);

var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn$1);

var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf$1);

var _component = interopRequireDefault(component);

var _canvax$$1 = interopRequireDefault(_canvax);

var _trigger = interopRequireDefault(trigger);



function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _ = _canvax$$1["default"]._;
var Line = _canvax$$1["default"].Shapes.Line;
var Rect = _canvax$$1["default"].Shapes.Rect;
var Polygon = _canvax$$1["default"].Shapes.Polygon;

var dataZoom = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(dataZoom, _Component);

  var _super = _createSuper(dataZoom);

  function dataZoom(opt, app) {
    var _this;

    (0, _classCallCheck2["default"])(this, dataZoom);
    _this = _super.call(this, opt, app);
    _this.name = "dataZoom";
    _this._cloneChart = null;
    _this.count = 1; //???w ??????????????????????????? ??????????????????line ???  bar??? ??????count?????????

    _this.dataLen = 1; //???????????????????????? 

    _this.axisLayoutType = null;

    _this.dragIng = function () {};

    _this.dragEnd = function () {};

    _this.disPart = {};
    _this._preRange = null;
    _this._btnLeft = null;
    _this._btnRight = null;
    _this._underline = null;
    _this.sprite = new _canvax$$1["default"].Display.Sprite({
      id: "dataZoom",
      context: {
        x: _this.pos.x,
        y: _this.pos.y
      }
    });
    _this.sprite.noSkip = true;
    _this.dataZoomBg = new _canvax$$1["default"].Display.Sprite({
      id: "dataZoomBg"
    });
    _this.dataZoomBtns = new _canvax$$1["default"].Display.Sprite({
      id: "dataZoomBtns"
    });

    _this.sprite.addChild(_this.dataZoomBg);

    _this.sprite.addChild(_this.dataZoomBtns);

    app.stage.addChild(_this.sprite); //?????????????????????????????????????????????????????????????????????????????????????????????????????????width???height??????

    if (opt.position == 'left' || opt.position == 'right') {
      var _width = opt.width;
      var _height = opt.height;
      opt.height = _width;
      opt.width = _height;
      if (opt.width === undefined) delete opt.width;
      if (opt.height === undefined) delete opt.height;
    }

    _.extend(true, (0, _assertThisInitialized2["default"])(_this), (0, tools.getDefaultProps)(dataZoom.defaultProps()), opt);

    if (!("margin" in opt)) {
      if (_this.position == 'bottom') {
        _this.margin.top = 10;
      }

      if (_this.position == 'top') {
        _this.margin.bottom = 10;
      }
    }

    _this.axis = null; //???????????????

    _this.layout();

    return _this;
  } //datazoom begin


  (0, _createClass2["default"])(dataZoom, [{
    key: "layout",
    value: function layout() {
      var app = this.app;

      if (this.position == "bottom") {
        //??????dataZoom????????????bottom?????????
        //_getDataZoomOpt????????????x
        this.pos.y = app.height - (this.height + app.padding.bottom + this.margin.bottom);
        app.padding.bottom += this.height + this.margin.top + this.margin.bottom;
      }

      if (this.position == "top") {
        this.pos.y = app.padding.top + this.margin.top;
        app.padding.top += this.height + this.margin.top + this.margin.bottom;
      }

      if (this.position == "left") {
        this.pos.x = -((this.width - this.height) / 2) + app.padding.left + this.margin.left;
        this.pos.y = app.height - app.padding.bottom - this.margin.bottom - this.width / 2 - this.height / 2; //?????????????????? ????????? 90du??????????????????width ??????height

        app.padding.left += this.height + this.margin.left + this.margin.right;
      }

      if (this.position == "right") {
        this.pos.x = -((this.width - this.height) / 2) + app.padding.left + this.margin.left;
        this.pos.y = app.height - app.padding.bottom - this.margin.bottom - this.width / 2 - this.height / 2; //?????????????????? ????????? 90du??????????????????width ??????height

        app.padding.right += this.height + this.margin.left + this.margin.right;
      }
    }
  }, {
    key: "_getCloneChart",
    value: function _getCloneChart() {
      var me = this;
      var app = this.app;

      var _coord = app.getCoord();

      var chartConstructor = app.constructor; //(barConstructor || Bar);

      var cloneEl = app.el.cloneNode();
      cloneEl.innerHTML = "";
      cloneEl.id = app.el.id + "_currclone";
      cloneEl.style.position = "absolute";
      cloneEl.style.width = this.width + "px";
      cloneEl.style.height = this.btnHeight + "px"; //app.el.offsetHeight + "px";

      cloneEl.style.top = "10000px";
      document.body.appendChild(cloneEl); //let opt = _.extend(true, {}, me._opt);
      //_.extend(true, opt, me.getCloneChart() );
      //clone???chart?????????coord ??? graphs ??????????????????
      //?????????????????????????????????graphs???sprite?????????

      var graphsOpt = [];

      _.each(app.getComponents({
        name: 'graphs'
      }), function (_g) {
        var _field = _g.enabledField || _g.field;

        if (_.flatten([_field]).length) {
          var _opt = _.extend(true, {}, _g._opt);

          _opt.field = _field;
          var miniOpt = {};

          if (_g.type == "bar") {
            miniOpt = {
              node: {//fillStyle: "#ececec"
              }
            };

            if (me.graphStyle) {
              miniOpt.node.fillStyle = me.graphStyle;
            }
          }

          if (_g.type == "line") {
            miniOpt = {
              line: {
                lineWidth: 1 //strokeStyle: "#ececec"

              },
              node: {
                enabled: false
              },
              area: {//fillStyle: "#ececec"
              }
            };

            if (me.graphStyle) {
              miniOpt.line.strokeStyle = me.graphStyle;
              miniOpt.area.fillStyle = me.graphStyle;
            }
          }

          var _h = _coord.height || app.el.offsetHeight;

          var radiusScale = me.btnHeight / _h || 1;

          if (_g.type == "scat") {
            miniOpt = {
              node: {
                //fillStyle : "#ececec",
                radiusScale: radiusScale
              }
            };

            if (me.graphStyle) ;
          }
          graphsOpt.push(_.extend(true, _opt, miniOpt, {
            label: {
              enabled: false
            },
            animation: false
          }));
        }
      });

      var opt = {
        coord: app._opt.coord,
        graphs: graphsOpt
      };

      if (opt.coord.horizontal) {
        delete opt.coord.horizontal;
      }
      opt.coord.enabled = false;
      opt.coord.padding = 0;
      var thumbChart = new chartConstructor(cloneEl, app._data, opt, app.componentModules);
      thumbChart.draw();
      return {
        thumbChart: thumbChart,
        cloneEl: cloneEl
      };
    }
  }, {
    key: "_setDataZoomOpt",
    value: function _setDataZoomOpt() {
      var app = this.app;
      var coordSize = app.getComponent({
        name: 'coord'
      }).getSizeAndOrigin();
      var me = this;
      var defaultWidth = coordSize.width;

      if (this.position == 'left' || this.position == 'right') {
        defaultWidth = coordSize.height || 150;
      }

      _.extend(true, this, {
        width: this.width || parseInt(defaultWidth),
        pos: {
          x: this.pos.x || coordSize.origin.x
        },
        dragIng: function dragIng(range) {
          var trigger$$1;

          if (me.axisLayoutType == 'proportion') {
            trigger$$1 = new _trigger["default"](me, {
              min: range.start,
              max: range.end
            });

            app.dataFrame.filters['datazoom' + me.__cid] = function (rowData) {
              //???????????????????????????
              if (me.dragIngDataFilter) {
                return me.dragIngDataFilter.apply(me, [rowData, range]);
              }

              var field = Array.isArray(me.axis.field) ? me.axis.field[0] : me.axis.field;
              var val = rowData[field];
              var min = Math.min.apply(Math, (0, _toConsumableArray2["default"])(me.axis.dataSection));
              var max = Math.max.apply(Math, (0, _toConsumableArray2["default"])(me.axis.dataSection));
              var width = me.width;
              var startVal = min + (max - min) * (range.start / width);
              var endVal = min + (max - min) * (range.end / width);
              return val >= startVal && val <= endVal;
            };
          } else {
            trigger$$1 = new _trigger["default"](me, {
              left: app.dataFrame.range.start - range.start,
              right: range.end - app.dataFrame.range.end
            });

            _.extend(app.dataFrame.range, range);
          }
          console.log(range); //?????????????????????dataFrame???????????????????????????null

          app.resetData(null, trigger$$1);
          app.fire("dataZoomDragIng");
        },
        dragEnd: function dragEnd() {
          app.updateChecked && app.updateChecked();
          app.fire("dataZoomDragEnd");
        }
      });
    } //datazoom end

  }, {
    key: "draw",
    value: function draw() {
      //????????????opt??????????????? coord ??????????????????size???????????????draw???????????????
      this._setDataZoomOpt();

      this._cloneChart = this._getCloneChart();

      var _coord = this._cloneChart.thumbChart.getComponent({
        name: 'coord'
      });

      var _xAxis = _coord._xAxis;
      this.axis = _xAxis;

      if (this.position == 'left') {
        this.axis = _coord._yAxisLeft;
      }

      if (this.position == 'right') {
        this.axis = _coord._yAxisRight;
      }
      this.axisLayoutType = this.axis.layoutType; //???line bar??????xAxis.layoutType ????????????

      this._computeAttrs(); //?????????????????????init?????????????????????


      this.widget();

      this._setLines(); //??????????????????rect?????????????????? ????????????????????????????????????datazoom???minimap


      this.setMiniGroupsMap();
      this.setPosition(); //?????????left right ??????????????? ??????????????????

      if (this.position == 'left' || this.position == 'right') {
        var xAxisHeight = this.app.getComponent({
          name: 'coord'
        })._xAxis.height;

        this.sprite.context.rotation = -90;
        this.sprite.context.rotateOrigin = {
          x: this.width / 2,
          y: this.height / 2
        };
        this.sprite.context.y -= xAxisHeight;

        if (!this._opt.width) {
          this.sprite.context.y -= this.width / 2;
          this.sprite.context.x -= this.width / 2;
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.sprite.destroy();
    }
  }, {
    key: "reset",
    value: function reset(opt) {
      !opt && (opt = {});
      var _preCount = this.count;
      var _preStart = this.range.start;
      var _preEnd = this.range.end;
      opt && _.extend(true, this, opt);
      this._cloneChart = this._getCloneChart(); //cloneChart;

      this._computeAttrs(opt);

      if (_preCount != this.count || opt.range && (opt.range.start != _preStart || opt.range.end != _preEnd)) {
        this.widget();

        this._setLines();
      }
      this.setMiniGroupsMap();
    } //????????????

  }, {
    key: "_computeAttrs",
    value: function _computeAttrs() {
      var _cloneChart = this._cloneChart.thumbChart;
      this.dataLen = _cloneChart.dataFrame.length;

      switch (this.axisLayoutType) {
        case "rule":
          this.count = this.dataLen - 1;
          break;

        case "peak":
          this.count = this.dataLen;
          break;

        case "proportion":
          this.count = this.width;
          break;
      }

      if (!this._opt.range || this._opt.range && !this._opt.range.max || this.range.max > this.count) {
        this.range.max = this.count - 1;
      }

      if (!this._opt.range || this._opt.range && !this._opt.range.end || this.range.end > this.dataLen - 1) {
        this.range.end = this.dataLen - 1;

        if (this.axisLayoutType == "proportion") {
          this.range.end = this.count - 1;
        }
      }

      this.disPart = this._getDisPart();
      this.btnHeight = this.height - this.btnOut;
    }
  }, {
    key: "_getDisPart",
    value: function _getDisPart() {
      var me = this;
      var min = Math.max(parseInt(me.range.min / 2 / me.count * me.width), 23);
      var max = parseInt((me.range.max + 1) / me.count * me.width); //?????????????????????x????????????????????? /2

      if (this.axisLayoutType == "peak") {
        min = Math.max(parseInt(me.range.min / me.count * me.width), 23);
      }

      if (this.axisLayoutType == "proportion") {
        //min = min;
        max = me.width;
      }
      return {
        min: min,
        max: max
      };
    }
  }, {
    key: "_getRangeEnd",
    value: function _getRangeEnd(end) {
      if (end === undefined) {
        end = this.range.end;
      }

      if (this.axisLayoutType == "peak") {
        end += 1;
      }

      if (this.axisLayoutType == "proportion") {
        end += 1;
      }

      return end;
    }
  }, {
    key: "widget",
    value: function widget() {
      var me = this;

      var setLines = function setLines() {
        me._setLines.apply(me, arguments);
      };

      if (me.bg.enabled) {
        var bgFillStyle = me.bg.fillStyle;

        if (bgFillStyle && bgFillStyle.lineargradient && bgFillStyle.lineargradient.length) {
          var _style = me.ctx.createLinearGradient(0, me.btnHeight, me.width, me.btnHeight);

          _.each(bgFillStyle.lineargradient, function (item) {
            _style.addColorStop(item.position, item.color);
          });

          bgFillStyle = _style;
        }

        if (!bgFillStyle && me.shapeType == 'triangle') {
          bgFillStyle = '#e6e6e6';
        }
        var bgRectCtx = {
          x: 0,
          y: 0,
          width: me.width,
          height: me.btnHeight,
          lineWidth: me.bg.lineWidth,
          strokeStyle: me.bg.strokeStyle,
          fillStyle: bgFillStyle,
          fillAlpha: me.bg.glpha
        };
        var _bgTriangleCtx = {
          x: 0,
          y: 0,
          pointList: [[0, me.btnHeight], [me.width, me.btnHeight], [me.width, 0]],
          lineWidth: me.bg.lineWidth,
          strokeStyle: me.bg.strokeStyle,
          fillStyle: bgFillStyle,
          globalAlpha: me.bg.glpha
        };

        if (me._bgElement) {
          me._bgElement.animate(bgRectCtx, {
            onUpdate: setLines
          });
        } else {
          if (me.shapeType == 'rect') {
            me._bgElement = new Rect({
              context: bgRectCtx
            });
          } else {
            me._bgElement = new Polygon({
              context: _bgTriangleCtx
            });
          }
          me.dataZoomBg.addChild(me._bgElement);
        }
      }

      if (me.underline.enabled) {
        var underlineCtx = {
          start: {
            x: me.range.start / me.count * me.width + me.btnWidth / 2,
            y: me.btnHeight
          },
          end: {
            x: me._getRangeEnd() / me.count * me.width - me.btnWidth / 2,
            y: me.btnHeight
          },
          lineWidth: me.underline.lineWidth,
          strokeStyle: me.underline.strokeStyle || me.color
        };

        if (me._underline) {
          me._underline.animate(underlineCtx, {
            onUpdate: setLines
          });
        } else {
          me._underline = me._addLine(underlineCtx);
          me.dataZoomBg.addChild(me._underline);
        }
      }

      var btnLeftCtx = {
        x: me.range.start / me.count * me.width,
        y: -me.btnOut / 2 + 1,
        width: me.btnWidth,
        height: me.btnHeight + me.btnOut,
        fillStyle: me.left.fillStyle || me.color,
        cursor: me.left.eventEnabled && "move"
      };

      if (me._btnLeft) {
        me._btnLeft.animate(btnLeftCtx, {
          onUpdate: setLines
        });
      } else {
        me._btnLeft = new Rect({
          id: 'btnLeft',
          dragEnabled: me.left.eventEnabled,
          hoverClone: false,
          context: btnLeftCtx
        });

        me._btnLeft.on("draging", function () {
          this.context.y = -me.btnOut / 2 + 1;

          if (this.context.x < 0) {
            this.context.x = 0;
          }

          if (this.context.x > me._btnRight.context.x - me.btnWidth) {
            this.context.x = me._btnRight.context.x - me.btnWidth;
          }

          if (me._btnRight.context.x + me.btnWidth - this.context.x > me.disPart.max) {
            this.context.x = me._btnRight.context.x + me.btnWidth - me.disPart.max - 1;
          }

          if (me._btnRight.context.x + me.btnWidth - this.context.x < me.disPart.min) {
            this.context.x = me._btnRight.context.x + me.btnWidth - me.disPart.min;
          }

          if (me.shapeType == 'rect') {
            me._rangeElement.context.width = me._btnRight.context.x - this.context.x - me.btnWidth;
            me._rangeElement.context.x = this.context.x + me.btnWidth;
          }

          if (me.shapeType == 'triangle') {
            me._rangeElement.context.pointList = me._getRangeTrianglePoints();
          }

          me._setRange();
        });

        me._btnLeft.on("dragend", function () {
          me.dragEnd(me.range);
        });

        this.dataZoomBtns.addChild(this._btnLeft);
      }
      var btnRightCtx = {
        x: me._getRangeEnd() / me.count * me.width - me.btnWidth + 1,
        y: -me.btnOut / 2 + 1,
        width: me.btnWidth,
        height: me.btnHeight + me.btnOut,
        fillStyle: me.right.fillStyle || me.color,
        cursor: me.right.eventEnabled && "move"
      };

      if (me._btnRight) {
        me._btnRight.animate(btnRightCtx, {
          onUpdate: setLines
        });
      } else {
        me._btnRight = new Rect({
          id: 'btnRight',
          dragEnabled: me.right.eventEnabled,
          hoverClone: false,
          context: btnRightCtx
        });

        me._btnRight.on("draging", function () {
          this.context.y = -me.btnOut / 2 + 1;

          if (this.context.x > me.width - me.btnWidth) {
            this.context.x = me.width - me.btnWidth + 1;
          }

          if (this.context.x + me.btnWidth - me._btnLeft.context.x > me.disPart.max) {
            this.context.x = me.disPart.max - (me.btnWidth - me._btnLeft.context.x) + 1;
          }

          if (this.context.x + me.btnWidth - me._btnLeft.context.x < me.disPart.min) {
            this.context.x = me.disPart.min - me.btnWidth + me._btnLeft.context.x;
          }

          if (me.shapeType == 'rect') {
            me._rangeElement.context.width = this.context.x - me._btnLeft.context.x - me.btnWidth;
            me._rangeElement.context.x = me._btnLeft.context.x + me.btnWidth;
          }

          if (me.shapeType == 'triangle') {
            me._rangeElement.context.pointList = me._getRangeTrianglePoints();
          }

          me._setRange();
        });

        me._btnRight.on("dragend", function () {
          me.dragEnd(me.range);
        });

        this.dataZoomBtns.addChild(this._btnRight);
      }
      var rangeWidth = btnRightCtx.x - btnLeftCtx.x + me.btnWidth;
      var rangeHeight = this.btnHeight - 1;
      var rangeX = btnLeftCtx.x;
      var rangeY = 1;
      var rangeFillStyle = me.range.fillStyle;

      if (rangeFillStyle && rangeFillStyle.lineargradient && rangeFillStyle.lineargradient.length) {
        var _style2 = me.ctx.createLinearGradient(0, me.btnHeight, me.width, me.btnHeight);

        _.each(rangeFillStyle.lineargradient, function (item) {
          _style2.addColorStop(item.position, item.color);
        });

        rangeFillStyle = _style2;
      }
      var rangeRectCtx = {
        x: rangeX,
        y: rangeY,
        width: rangeWidth,
        height: rangeHeight,
        fillStyle: rangeFillStyle,
        fillAlpha: me.range.alpha,
        cursor: "move"
      };
      var bgTriangleCtx = {
        x: rangeX,
        y: rangeY,
        pointList: me._getRangeTrianglePoints(),
        fillStyle: rangeFillStyle,
        fillAlpha: me.range.alpha,
        cursor: "move"
      };

      if (this._rangeElement) {
        this._rangeElement.animate(rangeRectCtx, {
          onUpdate: setLines
        });
      } else {
        //????????????????????????
        if (this.shapeType == 'rect') {
          this._rangeElement = new Rect({
            id: 'btnRange',
            dragEnabled: true,
            hoverClone: false,
            context: rangeRectCtx
          });

          this._rangeElement.on("draging", function () {
            this.context.y = 1;

            if (this.context.x < 0) {
              this.context.x = 0;
            }

            if (this.context.x > me.width - this.context.width) {
              this.context.x = me.width - this.context.width;
            }
            me._btnLeft.context.x = this.context.x;
            me._btnRight.context.x = this.context.x + this.context.width - me.btnWidth;

            me._setRange("btnRange");
          });

          this._rangeElement.on("dragend", function () {
            me.dragEnd(me.range);
          });
        } else {
          this._rangeElement = new Polygon({
            id: 'btnRange',
            //dragEnabled : true,
            //hoverClone  : false,
            context: bgTriangleCtx
          }); //???????????? zoom ???????????????????????????
        }

        this.dataZoomBtns.addChild(this._rangeElement, 0);
      }

      if (!this.linesLeft) {
        this.linesLeft = new _canvax$$1["default"].Display.Sprite({
          id: "linesLeft"
        });

        if (this.left.eventEnabled) {
          this._addLines({
            sprite: this.linesLeft
          });
        }
        this.dataZoomBtns.addChild(this.linesLeft);
      }

      if (!this.linesRight) {
        this.linesRight = new _canvax$$1["default"].Display.Sprite({
          id: "linesRight"
        });

        if (this.right.eventEnabled) {
          this._addLines({
            sprite: this.linesRight
          });
        }
        this.dataZoomBtns.addChild(this.linesRight);
      }

      if (!this.linesCenter && this.shapeType == 'rect') {
        this.linesCenter = new _canvax$$1["default"].Display.Sprite({
          id: "linesCenter"
        });

        this._addLines({
          count: 3,
          //dis    : 1,
          sprite: this.linesCenter,
          strokeStyle: this.color
        });

        this.dataZoomBtns.addChild(this.linesCenter);
      }
    }
  }, {
    key: "_getRangeTrianglePoints",
    value: function _getRangeTrianglePoints() {
      var btnLeftCtx = this._btnLeft.context;
      var btnRightCtx = this._btnRight.context;
      var rangeX = btnLeftCtx.x;
      var rangeWidth = btnRightCtx.x - btnLeftCtx.x + this.btnWidth;
      var rangeHeight = this.btnHeight - 1;
      var bgWidth = this.width;
      return [[rangeX, rangeHeight], [rangeX + rangeWidth, rangeHeight], [rangeX + rangeWidth, rangeHeight * (1 - (rangeX + rangeWidth) / bgWidth)], [rangeX, rangeHeight * (1 - rangeX / bgWidth)]];
    }
  }, {
    key: "_setRange",
    value: function _setRange(trigger$$1) {
      var me = this;

      var _end = me._getRangeEnd();

      var _preDis = _end - me.range.start;

      var start = me._btnLeft.context.x / me.width * me.count;
      var end = (me._btnRight.context.x + me.btnWidth) / me.width * me.count; //console.log( (me._btnRight.context.x + me.btnWidth)+"|"+ me.width + "|" + me.count )

      if (this.axisLayoutType == "peak") {
        start = Math.round(start);
        end = Math.round(end);
      } else if (this.axisLayoutType == "rule") {
        start = parseInt(start);
        end = parseInt(end);
      } else {
        start = parseInt(start);
        end = parseInt(end);
      }

      if (trigger$$1 == "btnRange") {
        //????????????????????????????????????????????? end-start???????????????
        if (end - start != _preDis) {
          end = start + _preDis;
        }
      }

      if (start != me.range.start || end != _end) {
        me.range.start = start;

        if (me.axisLayoutType == "peak") {
          end -= 1;
        }
        me.range.end = end;
        me.dragIng(me.range);
      }

      me._setLines();
    }
  }, {
    key: "_setRange_bak",
    value: function _setRange_bak(trigger$$1) {
      var me = this;

      var _start = me._preRange ? me._preRange.start : 0;

      var _end = me._preRange ? me._preRange.end : 0;

      var _preDis = me._preRange ? _end - me._preRange.start : 0;

      var start = me._btnLeft.context.x / me.width * me.count;
      var end = (me._btnRight.context.x + me.btnWidth) / me.width * me.count; //console.log( (me._btnRight.context.x + me.btnWidth)+"|"+ me.width + "|" + me.count )

      if (this.axisLayoutType == "peak") {
        start = Math.round(start);
        end = Math.round(end);
      } else if (this.axisLayoutType == "rule") {
        start = parseInt(start);
        end = parseInt(end);
      } else {
        start = parseInt(start);
        end = parseInt(end);
      }

      if (trigger$$1 == "btnRange") {
        //????????????????????????????????????????????? end-start???????????????
        if (me._preRange && end - start != _preDis) {
          end = start + _preDis;
        }
      }

      if (!me._preRange || start != _start || end != _end) {
        me.range.start = start;

        if (me.axisLayoutType == "peak") {
          end -= 1;
        }
        me.range.end = end;
        me.dragIng(me.range);
        me._preRange = Object.assign({}, me.range);
      }

      me._setLines();
    }
  }, {
    key: "_setLines",
    value: function _setLines() {
      var me = this;
      var linesLeft = this.linesLeft;
      var linesRight = this.linesRight;
      var btnLeft = this._btnLeft;
      var btnRight = this._btnRight;
      linesLeft.context.x = btnLeft.context.x + (btnLeft.context.width - linesLeft.context.width) / 2;
      linesLeft.context.y = btnLeft.context.y + (btnLeft.context.height - linesLeft.context.height) / 2;
      linesRight.context.x = btnRight.context.x + (btnRight.context.width - linesRight.context.width) / 2;
      linesRight.context.y = btnRight.context.y + (btnRight.context.height - linesRight.context.height) / 2; //???????????????????????????????????????????????????

      if (me.shapeType == 'rect') {
        var linesCenter = this.linesCenter;
        var btnRange = this._rangeElement;
        linesCenter.context.x = btnRange.context.x + (btnRange.context.width - linesCenter.context.width) / 2;
        linesCenter.context.y = btnRange.context.y + (btnRange.context.height - linesCenter.context.height) / 2;
      }

      if (me.underline.enabled) {
        me._underline.context.start.x = linesLeft.context.x + me.btnWidth / 2;
        me._underline.context.end.x = linesRight.context.x + me.btnWidth / 2;
      }
    }
  }, {
    key: "_addLines",
    value: function _addLines($o) {
      var me = this;
      var count = $o.count || 2;
      var sprite = $o.sprite;
      var dis = $o.dis || 2;
      var a;

      for (a = 0; a < count; a++) {
        sprite.addChild(me._addLine({
          x: a * dis,
          strokeStyle: $o.strokeStyle || ''
        }));
      }

      sprite.context.width = a * dis - 1;
      sprite.context.height = 6;
    }
  }, {
    key: "_addLine",
    value: function _addLine($o) {
      var o = $o || {};
      var line = new Line({
        id: o.id || '',
        context: {
          x: o.x || 0,
          y: o.y || 0,
          start: {
            x: o.start ? o.start.x : 0,
            y: o.start ? o.start.y : 0
          },
          end: {
            x: o.end ? o.end.x : 0,
            y: o.end ? o.end.y : 6
          },
          lineWidth: o.lineWidth || 1,
          strokeStyle: o.strokeStyle || '#ffffff'
        }
      });
      return line;
    }
  }, {
    key: "setMiniGroupsMap",
    value: function setMiniGroupsMap() {
      if (this.shapeType == 'triangle') {
        return;
      }

      if (this.__graphssp) {
        this.__graphssp.destroy();
      }
      var graphssp = this._cloneChart.thumbChart.graphsSprite;
      graphssp.setEventEnable(false);

      var _coor = this._cloneChart.thumbChart.getComponent({
        name: 'coord'
      });

      graphssp.id = graphssp.id + "_datazoomthumbChartbg";
      graphssp.context.x = -_coor.origin.x; //0;
      //????????????????????????

      graphssp.context.scaleY = this.btnHeight / _coor.height;
      graphssp.context.scaleX = this.width / _coor.width;
      graphssp.context.globalAlpha = this.graphAlpha;
      this.dataZoomBg.addChild(graphssp, 0);
      this.__graphssp = graphssp;

      this._cloneChart.thumbChart.destroy();

      this._cloneChart.cloneEl.parentNode.removeChild(this._cloneChart.cloneEl);
    }
  }], [{
    key: "defaultProps",
    value: function defaultProps() {
      return {
        position: {
          detail: '???????????????bottom,????????????left,right,top',
          "default": 'bottom'
        },
        height: {
          detail: '???',
          "default": 24
        },
        width: {
          detail: '???',
          "default": 0 //??????0???????????????width

        },
        color: {
          detail: '?????????????????????????????????????????????????????????????????????????????????????????????',
          "default": '#809fff'
        },
        shapeType: {
          detail: '?????????????????????,??????rect???triangle',
          "default": 'rect' // rect,triangle

        },
        range: {
          //propotion??????start ??? end???????????????????????????
          detail: '????????????',
          propertys: {
            start: {
              detail: '????????????',
              "default": 0
            },
            end: {
              detail: '????????????????????????null??????????????????',
              "default": null
            },
            max: {
              detail: '???????????????????????????????????????',
              "default": null
            },
            min: {
              detail: '???????????????????????????????????????',
              "default": 1
            },
            eventEnabled: {
              detail: '??????????????????',
              "default": true
            },
            fillStyle: {
              detail: '?????????',
              "default": '#000000'
            },
            alpha: {
              detail: '?????????',
              "default": 0.015
            }
          }
        },
        left: {
          detail: '????????????',
          propertys: {
            eventEnabled: {
              detail: '??????????????????',
              "default": true
            },
            fillStyle: {
              detail: '????????????????????????.color',
              "default": ''
            }
          }
        },
        right: {
          detail: '????????????',
          propertys: {
            eventEnabled: {
              detail: '??????????????????',
              "default": true
            },
            fillStyle: {
              detail: '????????????????????????.color',
              "default": ''
            }
          }
        },
        bg: {
          detail: '????????????',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            fillStyle: {
              detail: '?????????',
              "default": ''
            },
            alpha: {
              detail: '?????????',
              "default": 0.5
            },
            strokeStyle: {
              detail: '?????????',
              "default": '#e6e6e6'
            },
            lineWidth: {
              detail: '??????',
              "default": 1
            }
          }
        },
        graphAlpha: {
          detail: '??????????????????',
          "default": 0.6
        },
        graphStyle: {
          detail: '???????????????',
          "default": '#dddddd'
        },
        underline: {
          detail: 'underline',
          propertys: {
            enabled: {
              detail: '????????????',
              "default": true
            },
            strokeStyle: {
              detail: '?????????',
              "default": null
            },
            lineWidth: {
              detail: '??????',
              "default": 2
            }
          }
        },
        btnOut: {
          detail: 'left,right?????????????????????',
          "default": 4
        },
        btnHeight: {
          detail: 'left,right?????????',
          "default": 20,
          documentation: 'left,right?????????????????????left???right???????????????????????????????????? ???????????????????????????'
        },
        btnWidth: {
          detail: 'left,right????????????',
          "default": 9,
          documentation: 'left,right?????????????????????left???right???????????????????????????????????? ???????????????????????????'
        }
      };
    }
  }]);
  return dataZoom;
}(_component["default"]);

_component["default"].registerComponent(dataZoom, 'dataZoom');

var _default = dataZoom;
exports["default"] = _default;
});

unwrapExports(datazoom);

var projectTheme = ["#6b2bd1","#4d7fff","#d5bbfa","#bfd1ff"];     if( projectTheme && projectTheme.length ){        global$2.setGlobalTheme( projectTheme );    }    var chartx = {        options: {"1":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22bizDate%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20align%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20align%3A%20%22right%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22userTotal%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22catPotentialUv%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22right%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%7D%0A%7D%3B","range":[]},"2":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20%2F%2F%20legend%3A%7B%0A%20%20%20%20%2F%2F%20%20%20%20%20label%3A%7B%0A%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20format%3A(e)%3D%3E%7B%0A%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%0A%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%2F%2F%20%20%20%20%20%7D%0A%20%20%20%20%2F%2F%20%7D%2C%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22optionName%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%20%2B%20'%25'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'%E5%8D%A0%E6%AF%94'%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20align%3A%20'left'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20field%3A%22tgi%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'TGI'%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20align%3A%20%22right%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rate%22%2C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rateCompare%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20select%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%200.8%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alpha%3A%200.3%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20line%3A%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20smooth%3A%20false%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20area%3A%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20enabled%3Afalse%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20yAxisAlign%3A%20%22right%22%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20id%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20%22ppcIndexAvg%22%2C%20%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20%22ppcIndexAvgCompare%22%0A%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%2F%2F%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%20pointer%3A%20%22region%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20markLine%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22right%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20markTo%3A'tgi'%2C%20%0A%20%20%20%20%20%20%20%20%20%20%20%20y%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20line%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strokeStyle%3A%20%22%235d95d0%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20barTgi%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22tgi%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20barField%3A%20'rate'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22right%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20dataZoom%3A%20%7B%0A%20%20%20%20%20%20%20%20range%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20start%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20end%3A%209%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%3B","range":[]},"3":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22polar%22%2C%0A%20%20%20%20%20%20%20%20squareRange%3A%20false%2C%0A%20%20%20%20%20%20%20%20aAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20ruler%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20grid%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22planet%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22name%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20center%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20%22%236382FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strokeStyle%3A%20%22%236069FF%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A%20function%20()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20rs%20%3D%20%5B12%20%2C%2017%20%2C%2020%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20rs%5B%20parseInt(%20Math.random()*rs.length%20%2C%2010%20)%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20function%20()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20fs%20%3D%20%5B%22%23ffca4a%22%20%2C%20%22%2358c0ff%22%20%2C%20%22%23fb9c37%22%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20fs%5B%20parseInt(%20Math.random()*fs.length%20%2C%2010%20)%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20grid%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rings%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20count%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23A1C7FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23B6D8FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23C1DFFF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23CBE4FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23D5E9FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23DDEDFF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23E4F1FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23EBF5FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23F3F9FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%23F8FCFF%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strokeStyle%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20strokeStyles%20%3D%20%5B%22%2385AAFF%22%2C%20%22%23607AFF%22%2C%20%22%239AC9FF%22%2C%20%22%23A1CCFF%22%2C%20%22%238FB8FF%22%2C%20%22%23BBDAFF%22%2C%20%22%23C2DEFF%22%2C%20%22%238FB8FF%22%2C%20%22%23DBECFF%22%2C%20%22%23E8F3FF%22%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20strokeStyles%5Be.scaleInd%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rays%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20count%3A%2012%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strokeStyle%3A%20%22%239a9acc%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%7D%0A%7D%3B","range":[]},"4":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22optionName%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%20%2B%20'%25'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22rate%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%20pointer%3A%20%22region%22%2C%0A%20%20%20%20%20%20%20%20content%3A%20function%20(e)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20node%20%3D%20e.nodes%5B0%5D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%60%24%7Be.title%7D%20%3Cbr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstrong%20style%3D%22color%3A%24%7Bnode.color%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24%7Bnode.rowData%5Bnode.field%5D%7D%25%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fstrong%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%60%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%3B","range":[]},"5":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22polar%22%2C%0A%20%20%20%20%20%20%20%20squareRange%3A%20false%2C%0A%20%20%20%20%20%20%20%20aAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20ruler%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20grid%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20%22g1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22planet%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22name%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20center%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A%20function%20()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20rs%20%3D%20%5B12%20%2C%2017%20%2C%2020%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20rs%5B%20parseInt(%20Math.random()*rs.length%20%2C%2010%20)%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20function%20()%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20fs%20%3D%20%5B%22%23ffca4a%22%20%2C%20%22%2358c0ff%22%20%2C%20%22%23fb9c37%22%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20fs%5B%20parseInt(%20Math.random()*fs.length%20%2C%2010%20)%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%7D%0A%7D%3B","range":[]},"6":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22polar%22%2C%0A%20%20%20%20%20%20%20%20aAxis%3A%20%7B%7D%2C%0A%20%20%20%20%20%20%20%20grid%3A%20%7B%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22pie%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20startAngle%3A%20-90%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sort%3A%20%22desc%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20animation%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22optionNum%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(val%2C%20data)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20rowData%20%3D%20data.rowData%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%22%3Cdiv%3E%3Cspan%3E%22%20%2B%20rowData.optionName%20%2B%20%22%3C%2Fspan%3E%EF%BC%9A%3Cspan%3E%22%20%2B%20data.percentage%20%2B%20%22%25%3C%2Fspan%3E%3C%2Fdiv%3E%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20innerRadius%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20select%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onclick%3A%20function%20(e%2C%20nodeData)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!nodeData.selected)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.selectAt(nodeData.iNode)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.unselectAt(nodeData.iNode)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D%3B","range":[]},"7":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22month%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%20%2B%20'%E6%9C%88'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20return%20e%20%2B%20'%25'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%20%2B%20'%E5%85%83'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22predictTarget%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20select%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alpha%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inds%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20onclick%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20allAraphs%20%3D%20this.app.getComponents(%7Bname%3A'graphs'%2Ctype%3A'bar'%7D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for(%20var%20a%20%3D%200%3Ba%20%3C%20allAraphs.length%3B%20a%2B%2B%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for(var%20i%20%3D%200%3B%20i%20%3C%20allAraphs%5Ba%5D.dataFrame.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20allAraphs%5Ba%5D.unselectAt(i)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20allAraphs%5Ba%5D.selectAt(e.eventInfo.iNode)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20function%20(%20nodeData%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(%20nodeData.selected%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineargradient%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23bacaff%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23bacaff%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineargradient%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23f3f3f3%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23f3f3f3%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onclick%3A%20function%20(e)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20allAraphs%20%3D%20this.app.getComponents(%7Bname%3A'graphs'%2Ctype%3A'bar'%7D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for(%20var%20a%20%3D%200%3Ba%20%3C%20allAraphs.length%3B%20a%2B%2B%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for(var%20i%20%3D%200%3B%20i%20%3C%20allAraphs%5Ba%5D.dataFrame.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20allAraphs%5Ba%5D.unselectAt(i)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20allAraphs%5Ba%5D.selectAt(e.eventInfo.iNode)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20function%20(%20nodeData%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(%20nodeData.selected%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineargradient%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23385acc%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23738ce2%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineargradient%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23ddd%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23eee%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onclick%3A%20function%20(e)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20allAraphs%20%3D%20this.app.getComponents(%7Bname%3A'graphs'%2Ctype%3A'bar'%7D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for(%20var%20a%20%3D%200%3Ba%20%3C%20allAraphs.length%3B%20a%2B%2B%20)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for(var%20i%20%3D%200%3B%20i%20%3C%20allAraphs%5Ba%5D.dataFrame.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20allAraphs%5Ba%5D.unselectAt(i)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20allAraphs%5Ba%5D.selectAt(e.eventInfo.iNode)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alipayAmt%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20absolute%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontColor%3A%20%22%23333%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(val%2C%20nodeData)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(!nodeData.rowData.predictTarget)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20'0%25'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20(nodeData.rowData.alipayAmt%2FnodeData.rowData.predictTarget*100).toFixed(0)%20%2B%20'%25'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%20pointer%3A%20%22region%22%0A%20%20%20%20%7D%0A%7D%3B","range":[]},"8":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20graphs%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22sankey%22%2C%0A%20%20%20%20%20%20%20%20keyField%3A%20%22node%22%2C%0A%20%20%20%20%20%20%20%20valueField%3A%20%22value%22%2C%0A%20%20%20%20%20%20%20%20parentField%3A%20%22parent%22%2C%0A%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A50%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A30%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20tips%3A%20%7B%7D%0A%7D%3B","range":[]},"9":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20legend%3A%20%7B%7D%2C%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22date%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineHeight%3A%201.5%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%0A%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20positionInRange%3A%20false%20%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%E9%9D%9E%E5%BA%97%E9%93%BA%E6%B6%88%E8%B4%B9%E8%80%85%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%E6%96%B0%E5%AE%A2%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%E6%BD%9C%E5%AE%A2%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%E8%80%81%E5%AE%A2%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onclick%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for(var%20key%20in%20this.data)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for(var%20item%20of%20this.data%5Bkey%5D)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20item.nodeElement.context.lineWidth%20%3D%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.target.context.strokeStyle%20%3D%20'%23a77bf5'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.target.context.lineWidth%20%3D%202%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20filter%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(e.iNode%20%3D%3D%3D%200%20%26%26%20e.iLay%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.nodeElement.context.strokeStyle%20%3D%20'%23a77bf5'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.nodeElement.context.lineWidth%20%3D%202%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20e.nodeElement.context.cursor%20%3D%20'pointer'%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20theme%3A%20%5B%0A%20%20%20%20%20%20%20%20%22%237052CC%22%2C%0A%20%20%20%20%20%20%20%20%22%2366BFFF%22%2C%0A%20%20%20%20%20%20%20%20%22%2334D493%22%2C%0A%20%20%20%20%20%20%20%20%22%23FFBD00%22%0A%20%20%20%20%5D%0A%7D%3B","range":[]},"10":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20graphs%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22sankey%22%2C%0A%20%20%20%20%20%20%20%20keyField%3A%20%22node%22%2C%0A%20%20%20%20%20%20%20%20valueField%3A%20%22value%22%2C%0A%20%20%20%20%20%20%20%20parentField%3A%20%22parent%22%2C%0A%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A40%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20width%3A30%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20function(e)%20%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sort%3A%20null%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20%0A%7D%3B","range":[]},"11":{"code":"var%20options%20%3D%20%7B%0A%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20grid%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22ctrIndex%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20layoutType%3A%20%22proportion%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%60%24%7Be%7D%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%60%24%7Be%7D%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20markline%3A%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20yVal%3A%2055%2C%0A%20%20%20%20%20%20%20%20markTo%3A'ppcIndexAvg'%2C%0A%20%20%20%20%20%20%20%20line%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20lineType%3A%20'dashed'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20strokeStyle%3A%20%22%23ff9090%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20lineWidth%3A%201%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20'PPC%E5%9D%87%E5%80%BC'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontColor%3A%20'%23c30000'%0A%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20markcloumn%3A%20%7B%0A%20%20%20%20%20%20%20%20xVal%3A%2040%2C%0A%20%20%20%20%20%20%20%20markTo%3A'ctrIndex'%2C%0A%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%22CTR%E5%9D%87%E5%80%BC%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20line%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20lineType%3A%20'dashed'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20strokeStyle%3A%20%22%23ff9090%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20lineWidth%3A%201%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22scat%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22ppcIndexAvg%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20aniOrigin%3A%20%22origin%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22name%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontColor%3A%20'%23333'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20minRadius%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20maxRadius%3A%2035%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A%20%22rate%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20function%20(node)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%22%23ffbe50%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strokeStyle%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e.rowData.tgi%20%3E%20100%20%3F%20'%236507e8'%20%3A%20'%236507e8'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20select%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineWidth%3A%203%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strokeAlpha%3A%201%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20focus%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20strokeAlpha%3A%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onclick%3A%20function%20(e%2C%20nodeData)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20if%20(!nodeData.selected)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20this.selectAt(nodeData.iNode)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20this.unselectAt(nodeData.iNode)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%20pointer%3A%20true%2C%0A%20%20%20%20%20%20%20%20content%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(e.nodes.length)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20rowData%20%3D%20e.nodes%5B0%5D.rowData%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22padding%3A8px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22color%3A%23333%3B%20margin-bottom%3A5px%3B%20font-weight%3Abold%22%3E%24%7BrowData.name%7D%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22margin-bottom%3A5px%3B%22%3ECTR%E6%8C%87%E6%95%B0%20%3Cspan%20class%3D%22color-brand%20ml5%22%20style%3D%22%22%3E%24%7BrowData.ctrIndex%7D%25%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22margin-bottom%3A5px%3B%22%3EPPC%E6%8C%87%E6%95%B0%20%3Cspan%20class%3D%22color-brand%20ml5%22%20style%3D%22%22%3E%24%7BrowData.ppcIndex%7D%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%E8%A6%86%E7%9B%96%E6%95%B0%20%3Cspan%20class%3D%22color-brand%20ml5%22%20style%3D%22%22%3E%24%7BrowData.coverage%7D%3C%2Fspan%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%3B","range":[]},"12":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22polar%22%2C%0A%20%20%20%20%20%20%20%20aAxis%3A%20%7B%7D%2C%0A%20%20%20%20%20%20%20%20grid%3A%20%7B%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22pie%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20startAngle%3A%20-90%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20sort%3A%20%22desc%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20animation%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22value%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(val%2C%20data)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20rowData%20%3D%20data.rowData%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%22%3Cdiv%3E%3Cspan%3E%22%20%2B%20rowData.name%20%2B%20%22%3C%2Fspan%3E%EF%BC%9A%3Cspan%3E%22%20%2B%20rowData.value%20%2B%20%22%EF%BC%88%22%20%2B%20data.percentage%20%2B%20%22%25%EF%BC%89%3C%2Fspan%3E%3C%2Fdiv%3E%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20innerRadius%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20select%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onclick%3A%20function%20(e%2C%20nodeData)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!nodeData.selected)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.selectAt(nodeData.iNode)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.unselectAt(nodeData.iNode)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D%3B","range":[]},"13":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22polar%22%2C%0A%20%20%20%20%20%20%20%20allAngle%3A%20360%2C%0A%20%20%20%20%20%20%20%20startAngle%3A%20270%2C%0A%20%20%20%20%20%20%20%20padding%3A0%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22progress%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22uv%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20radius%3A38%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%206%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A0%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fillStyle%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineargradient%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23FF5000%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22%23FF5000%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%2022%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fontColor%3A%20%20'%23333'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3Afunction(v%2C%20node)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20parseInt(v%2C%2010)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20offsetX%3A%206%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20unit%3A''%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20bgColor%3A%20'%23eee'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20bgEnabled%3A%20true%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D%3B","range":[]},"14":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20legend%3A%7B%7D%2C%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22date%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20origin%3A0%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20align%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A4%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20enabled%3Afalse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20visible%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20line%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineWidth%3A3%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2FstrokeStyle%3A%20'%23702ad1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22value%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A4%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20enabled%3Afalse%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20line%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineWidth%3A3%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2FstrokeStyle%3A%20'%23F7664D'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22benchmark%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%20content%3A(data%2C%20e)%20%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%60%3Cdiv%20style%3D%22color%3A%23333%3B%22%3E%3Cstrong%3E%24%7Bdata.title%7D%3C%2Fstrong%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%24%7Bdata.nodes.map(node%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%60%3Cdiv%3E%24%7Bnode.field%7D%EF%BC%9A%3Cstrong%20style%3D%22color%3A%24%7Bnode.color%7D%3B%20font-weight%3Abold%3B%22%3E%24%7Bnode.value%7D%3C%2Fstrong%3E%3C%2Fdiv%3E%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D).join('')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20theme%3A%5B%20'%23702ad1'%2C'%23F7664D'%20%20%5D%0A%7D%3B","range":[]},"15":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20theme%3A%5B'%237E62CC'%2C%20'%236588FC'%2C%20'%235DB7E8'%2C%20'%2355D4B6'%5D%2C%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22polar%22%2C%0A%20%20%20%20%20%20%20%20aAxis%3A%20%7B%7D%2C%0A%20%20%20%20%20%20%20%20grid%3A%20%7B%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22pie%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20startAngle%3A%20-90%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20sort%3A%20%22desc%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20animation%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22value%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20format%3A%20function%20(val%2C%20data)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20var%20rowData%20%3D%20data.rowData%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20return%20%22%3Cdiv%3E%3Cspan%3E%22%20%2B%20rowData.name%20%2B%20%22%3C%2Fspan%3E%EF%BC%9A%3Cspan%3E%22%20%2B%20rowData.value%20%2B%20%22%EF%BC%88%22%20%2B%20data.percentage%20%2B%20%22%25%EF%BC%89%3C%2Fspan%3E%3C%2Fdiv%3E%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20innerRadius%3A%2070%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20select%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onclick%3A%20function%20(e%2C%20nodeData)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20(!nodeData.selected)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.selectAt(nodeData.iNode)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%20%20%20%20this.unselectAt(nodeData.iNode)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D%3B","range":[]},"16":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20legend%3A%7B%7D%2C%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22date%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20origin%3A0%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20align%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A4%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20enabled%3Afalse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20visible%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20line%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineWidth%3A3%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2FstrokeStyle%3A%20'%23702ad1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22value%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A4%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20enabled%3Afalse%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20line%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineWidth%3A3%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2FstrokeStyle%3A%20'%23F7664D'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22benchmark%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%20content%3A(data%2C%20e)%20%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%60%3Cdiv%20style%3D%22color%3A%23333%3B%22%3E%3Cstrong%3E%24%7Bdata.title%7D%3C%2Fstrong%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%24%7Bdata.nodes.map(node%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20%60%3Cdiv%3E%24%7Bnode.field%7D%EF%BC%9A%3Cstrong%20style%3D%22color%3A%24%7Bnode.color%7D%3B%20font-weight%3Abold%3B%22%3E%24%7Bnode.value%7D%3C%2Fstrong%3E%3C%2Fdiv%3E%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D).join('')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%60%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20theme%3A%5B%20'%23702BD1'%2C'%2355D4B6'%20%20%5D%0A%7D%3B","range":[]},"17":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20%2F%2F%20legend%3A%7B%0A%20%20%20%20%2F%2F%20%20%20%20%20activeEnabled%3Afalse%0A%20%20%20%20%2F%2F%20%7D%2C%0A%20%20%20%20tips%3A%7B%7D%2C%0A%20%20%20%20theme%3A%5B'%237E62CC'%2C%20'%236588FC'%2C%20'%235DB7E8'%2C%20'%2355D4B6'%2C%20'%23F06560'%2C%20'%23F08848'%2C%20'%23F2BD49'%2C%20'%23FFD4B5'%20%5D%2C%20%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22timePoint%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%2018%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22uv%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22click%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22pv%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'ppc'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D%3B","range":[]},"18":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20theme%3A%5B'%237E62CC'%5D%20%2C%0A%20%20%20%20%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22optionName%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format(v%2C%20i)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20v%20%2B%20'%25'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22%E5%8D%A0%E6%AF%94%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%7B%7D%0A%7D%3B","range":[]},"19":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20legend%3A%7B%0A%20%20%20%20%20%20%20%20activeEnabled%3Afalse%0A%20%20%20%20%7D%2C%0A%20%20%20%20tips%3A%7B%0A%0A%20%20%20%20%7D%20%2C%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22date%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22%E5%BA%97%E9%93%BA%E9%A6%96%E8%B4%AD%E4%BA%BA%E6%95%B0%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22%E6%B6%88%E8%80%97(%E5%85%83)%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22right%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D%3B","range":[]},"20":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22polar%22%2C%0A%20%20%20%20%20%20%20%20aAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22name%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20rAxis%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20dataSection%3A%20%5B1%2C2%2C3%2C4%2C5%5D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20grid%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22poly%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22radar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22%E8%AF%84%E7%BA%A7%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%7D%2C%0A%20%20%20%20%2F%2F%20legend%3A%20%7B%7D%0A%7D%3B","range":[]},"21":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22name%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%20%2F%2010000%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22bar%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22value%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%7B%7D%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%20enabled%3A%20false%2C%0A%20%20%20%20%20%20%20%20pointer%3A%20%22region%22%2C%0A%20%20%20%20%20%20%20%20content%3A%20function%20(e)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20node%20%3D%20e.nodes%5B0%5D%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%60%24%7Be.title%7D%20%3Cbr%3E%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstrong%20style%3D%22color%3A%24%7Bnode.color%7D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%24%7Bnode.rowData%5Bnode.field%5D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fstrong%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%60%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D%3B","range":[]},"22":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22xValue%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22yClick%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20visible%3A(e)%20%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%7B%7D%20%0A%7D%3B","range":[]},"23":{"code":"var%20options%20%3D%20%7B%0A%20%20%20%20legend%3A%7B%0A%20%20%20%20%20%20%20%20activeEnabled%3A%20false%0A%20%20%20%20%7D%2C%0A%20%20%20%20coord%3A%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22rect%22%2C%0A%20%20%20%20%20%20%20%20xAxis%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22dateTime%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20yAxis%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20origin%3A0%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20align%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20format%3A%20function%20(e)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20return%20e%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20graphs%3A%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A4%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20enabled%3Afalse%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20visible%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20line%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineWidth%3A3%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2FstrokeStyle%3A%20'%23702ad1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22%E6%9C%AA%E8%BF%AD%E4%BB%A3%E6%95%88%E6%9E%9C%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20node%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20radius%3A4%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20enabled%3Afalse%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20line%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20lineWidth%3A3%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2FstrokeStyle%3A%20'%23F7664D'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20%22line%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20field%3A%20%22%E8%BF%AD%E4%BB%A3%E6%95%88%E6%9E%9C%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20yAxisAlign%3A%20%22left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20enabled%3A%20false%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tips%3A%20%7B%0A%20%20%20%20%20%20%20%0A%20%20%20%20%7D%2C%0A%20%20%20%20theme%3A%5B%20'%23702BD1'%2C'%2355D4B6'%20%20%5D%0A%7D%3B","range":[]}}    };
for( var p in global$2 ){
        chartx[ p ] = global$2[ p ];
    }

export default chartx;
