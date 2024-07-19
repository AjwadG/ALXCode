(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function pf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function bh(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var hf = { exports: {} },
  Io = {},
  mf = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ti = Symbol.for("react.element"),
  Uh = Symbol.for("react.portal"),
  Bh = Symbol.for("react.fragment"),
  Hh = Symbol.for("react.strict_mode"),
  Qh = Symbol.for("react.profiler"),
  Vh = Symbol.for("react.provider"),
  Wh = Symbol.for("react.context"),
  qh = Symbol.for("react.forward_ref"),
  Kh = Symbol.for("react.suspense"),
  Xh = Symbol.for("react.memo"),
  Yh = Symbol.for("react.lazy"),
  wa = Symbol.iterator;
function Gh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wa && e[wa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var vf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yf = Object.assign,
  gf = {};
function tr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gf),
    (this.updater = n || vf);
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wf() {}
wf.prototype = tr.prototype;
function fu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gf),
    (this.updater = n || vf);
}
var du = (fu.prototype = new wf());
du.constructor = fu;
yf(du, tr.prototype);
du.isPureReactComponent = !0;
var Sa = Array.isArray,
  Sf = Object.prototype.hasOwnProperty,
  pu = { current: null },
  Ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function Of(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Sf.call(t, r) && !Ef.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ti,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: pu.current,
  };
}
function Jh(e, t) {
  return {
    $$typeof: ti,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ti;
}
function Zh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ea = /\/+/g;
function ms(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Zh("" + e.key)
    : t.toString(36);
}
function ji(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ti:
          case Uh:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + ms(s, 0) : r),
      Sa(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ea, "$&/") + "/"),
          ji(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (hu(i) &&
            (i = Jh(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ea, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Sa(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = r + ms(o, l);
      s += ji(o, t, n, u, i);
    }
  else if (((u = Gh(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + ms(o, l++)), (s += ji(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function pi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ji(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function em(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  zi = { transition: null },
  tm = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: zi,
    ReactCurrentOwner: pu,
  };
function Cf() {
  throw Error("act(...) is not supported in production builds of React.");
}
Q.Children = {
  map: pi,
  forEach: function (e, t, n) {
    pi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = tr;
Q.Fragment = Bh;
Q.Profiler = Qh;
Q.PureComponent = fu;
Q.StrictMode = Hh;
Q.Suspense = Kh;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm;
Q.act = Cf;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = yf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = pu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Sf.call(t, u) &&
        !Ef.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: ti, type: e.type, key: i, ref: o, props: r, _owner: s };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Vh, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = Of;
Q.createFactory = function (e) {
  var t = Of.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: qh, render: e };
};
Q.isValidElement = hu;
Q.lazy = function (e) {
  return { $$typeof: Yh, _payload: { _status: -1, _result: e }, _init: em };
};
Q.memo = function (e, t) {
  return { $$typeof: Xh, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = zi.transition;
  zi.transition = {};
  try {
    e();
  } finally {
    zi.transition = t;
  }
};
Q.unstable_act = Cf;
Q.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Me.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
Q.useId = function () {
  return Me.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Me.current.useRef(e);
};
Q.useState = function (e) {
  return Me.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Me.current.useTransition();
};
Q.version = "18.3.1";
mf.exports = Q;
var k = mf.exports;
const I = pf(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nm = k,
  rm = Symbol.for("react.element"),
  im = Symbol.for("react.fragment"),
  om = Object.prototype.hasOwnProperty,
  sm = nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lm = { key: !0, ref: !0, __self: !0, __source: !0 };
function xf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) om.call(t, r) && !lm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: rm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: sm.current,
  };
}
Io.Fragment = im;
Io.jsx = xf;
Io.jsxs = xf;
hf.exports = Io;
var D = hf.exports,
  el = {},
  Pf = { exports: {} },
  Xe = {},
  _f = { exports: {} },
  Rf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, F) {
    var A = T.length;
    T.push(F);
    e: for (; 0 < A; ) {
      var L = (A - 1) >>> 1,
        z = T[L];
      if (0 < i(z, F)) (T[L] = F), (T[A] = z), (A = L);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var F = T[0],
      A = T.pop();
    if (A !== F) {
      T[0] = A;
      e: for (var L = 0, z = T.length, q = z >>> 1; L < q; ) {
        var te = 2 * (L + 1) - 1,
          fe = T[te],
          Re = te + 1,
          ht = T[Re];
        if (0 > i(fe, A))
          Re < z && 0 > i(ht, fe)
            ? ((T[L] = ht), (T[Re] = A), (L = Re))
            : ((T[L] = fe), (T[te] = A), (L = te));
        else if (Re < z && 0 > i(ht, A)) (T[L] = ht), (T[Re] = A), (L = Re);
        else break e;
      }
    }
    return F;
  }
  function i(T, F) {
    var A = T.sortIndex - F.sortIndex;
    return A !== 0 ? A : T.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    a = [],
    c = 1,
    p = null,
    h = 3,
    y = !1,
    v = !1,
    w = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(T) {
    for (var F = n(a); F !== null; ) {
      if (F.callback === null) r(a);
      else if (F.startTime <= T)
        r(a), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(a);
    }
  }
  function g(T) {
    if (((w = !1), d(T), !v))
      if (n(u) !== null) (v = !0), $(S);
      else {
        var F = n(a);
        F !== null && W(g, F.startTime - T);
      }
  }
  function S(T, F) {
    (v = !1), w && ((w = !1), m(x), (x = -1)), (y = !0);
    var A = h;
    try {
      for (
        d(F), p = n(u);
        p !== null && (!(p.expirationTime > F) || (T && !H()));

      ) {
        var L = p.callback;
        if (typeof L == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var z = L(p.expirationTime <= F);
          (F = e.unstable_now()),
            typeof z == "function" ? (p.callback = z) : p === n(u) && r(u),
            d(F);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var q = !0;
      else {
        var te = n(a);
        te !== null && W(g, te.startTime - F), (q = !1);
      }
      return q;
    } finally {
      (p = null), (h = A), (y = !1);
    }
  }
  var O = !1,
    E = null,
    x = -1,
    N = 5,
    P = -1;
  function H() {
    return !(e.unstable_now() - P < N);
  }
  function X() {
    if (E !== null) {
      var T = e.unstable_now();
      P = T;
      var F = !0;
      try {
        F = E(!0, T);
      } finally {
        F ? J() : ((O = !1), (E = null));
      }
    } else O = !1;
  }
  var J;
  if (typeof f == "function")
    J = function () {
      f(X);
    };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(),
      j = Y.port2;
    (Y.port1.onmessage = X),
      (J = function () {
        j.postMessage(null);
      });
  } else
    J = function () {
      _(X, 0);
    };
  function $(T) {
    (E = T), O || ((O = !0), J());
  }
  function W(T, F) {
    x = _(function () {
      T(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), $(S));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = h;
      }
      var A = h;
      h = F;
      try {
        return T();
      } finally {
        h = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, F) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var A = h;
      h = T;
      try {
        return F();
      } finally {
        h = A;
      }
    }),
    (e.unstable_scheduleCallback = function (T, F, A) {
      var L = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? L + A : L))
          : (A = L),
        T)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = A + z),
        (T = {
          id: c++,
          callback: F,
          priorityLevel: T,
          startTime: A,
          expirationTime: z,
          sortIndex: -1,
        }),
        A > L
          ? ((T.sortIndex = A),
            t(a, T),
            n(u) === null &&
              T === n(a) &&
              (w ? (m(x), (x = -1)) : (w = !0), W(g, A - L)))
          : ((T.sortIndex = z), t(u, T), v || y || ((v = !0), $(S))),
        T
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (T) {
      var F = h;
      return function () {
        var A = h;
        h = F;
        try {
          return T.apply(this, arguments);
        } finally {
          h = A;
        }
      };
    });
})(Rf);
_f.exports = Rf;
var um = _f.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var am = k,
  Ke = um;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Tf = new Set(),
  Lr = {};
function Cn(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) Tf.add(t[e]);
}
var Rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  tl = Object.prototype.hasOwnProperty,
  cm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Oa = {},
  Ca = {};
function fm(e) {
  return tl.call(Ca, e)
    ? !0
    : tl.call(Oa, e)
    ? !1
    : cm.test(e)
    ? (Ca[e] = !0)
    : ((Oa[e] = !0), !1);
}
function dm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function pm(e, t, n, r) {
  if (t === null || typeof t > "u" || dm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mu = /[\-:]([a-z])/g;
function vu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mu, vu);
    Se[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(mu, vu);
    Se[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(mu, vu);
  Se[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yu(e, t, n, r) {
  var i = Se.hasOwnProperty(t) ? Se[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (pm(t, n, i, r) && (n = null),
    r || i === null
      ? fm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hi = Symbol.for("react.element"),
  Tn = Symbol.for("react.portal"),
  kn = Symbol.for("react.fragment"),
  gu = Symbol.for("react.strict_mode"),
  nl = Symbol.for("react.profiler"),
  kf = Symbol.for("react.provider"),
  Nf = Symbol.for("react.context"),
  wu = Symbol.for("react.forward_ref"),
  rl = Symbol.for("react.suspense"),
  il = Symbol.for("react.suspense_list"),
  Su = Symbol.for("react.memo"),
  It = Symbol.for("react.lazy"),
  Df = Symbol.for("react.offscreen"),
  xa = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xa && e[xa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var le = Object.assign,
  vs;
function yr(e) {
  if (vs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vs = (t && t[1]) || "";
    }
  return (
    `
` +
    vs +
    e
  );
}
var ys = !1;
function gs(e, t) {
  if (!e || ys) return "";
  ys = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var u =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ys = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yr(e) : "";
}
function hm(e) {
  switch (e.tag) {
    case 5:
      return yr(e.type);
    case 16:
      return yr("Lazy");
    case 13:
      return yr("Suspense");
    case 19:
      return yr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = gs(e.type, !1)), e;
    case 11:
      return (e = gs(e.type.render, !1)), e;
    case 1:
      return (e = gs(e.type, !0)), e;
    default:
      return "";
  }
}
function ol(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case Tn:
      return "Portal";
    case nl:
      return "Profiler";
    case gu:
      return "StrictMode";
    case rl:
      return "Suspense";
    case il:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Nf:
        return (e.displayName || "Context") + ".Consumer";
      case kf:
        return (e._context.displayName || "Context") + ".Provider";
      case wu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Su:
        return (
          (t = e.displayName || null), t !== null ? t : ol(e.type) || "Memo"
        );
      case It:
        (t = e._payload), (e = e._init);
        try {
          return ol(e(t));
        } catch {}
    }
  return null;
}
function mm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ol(t);
    case 8:
      return t === gu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function tn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Mf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vm(e) {
  var t = Mf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function mi(e) {
  e._valueTracker || (e._valueTracker = vm(e));
}
function Ff(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Mf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sl(e, t) {
  var n = t.checked;
  return le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Pa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = tn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Lf(e, t) {
  (t = t.checked), t != null && yu(e, "checked", t, !1);
}
function ll(e, t) {
  Lf(e, t);
  var n = tn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ul(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ul(e, t.type, tn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ul(e, t, n) {
  (t !== "number" || Zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + tn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function al(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ra(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: tn(n) };
}
function jf(e, t) {
  var n = tn(t.value),
    r = tn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ta(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? zf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vi,
  If = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vi = vi || document.createElement("div"),
          vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function jr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ym = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function (e) {
  ym.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Or[t] = Or[e]);
  });
});
function Af(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Or.hasOwnProperty(e) && Or[e])
    ? ("" + t).trim()
    : t + "px";
}
function $f(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Af(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var gm = le(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function fl(e, t) {
  if (t) {
    if (gm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function dl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var pl = null;
function Eu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hl = null,
  Hn = null,
  Qn = null;
function ka(e) {
  if ((e = ii(e))) {
    if (typeof hl != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Bo(t)), hl(e.stateNode, e.type, t));
  }
}
function bf(e) {
  Hn ? (Qn ? Qn.push(e) : (Qn = [e])) : (Hn = e);
}
function Uf() {
  if (Hn) {
    var e = Hn,
      t = Qn;
    if (((Qn = Hn = null), ka(e), t)) for (e = 0; e < t.length; e++) ka(t[e]);
  }
}
function Bf(e, t) {
  return e(t);
}
function Hf() {}
var ws = !1;
function Qf(e, t, n) {
  if (ws) return e(t, n);
  ws = !0;
  try {
    return Bf(e, t, n);
  } finally {
    (ws = !1), (Hn !== null || Qn !== null) && (Hf(), Uf());
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var ml = !1;
if (Rt)
  try {
    var lr = {};
    Object.defineProperty(lr, "passive", {
      get: function () {
        ml = !0;
      },
    }),
      window.addEventListener("test", lr, lr),
      window.removeEventListener("test", lr, lr);
  } catch {
    ml = !1;
  }
function wm(e, t, n, r, i, o, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Cr = !1,
  eo = null,
  to = !1,
  vl = null,
  Sm = {
    onError: function (e) {
      (Cr = !0), (eo = e);
    },
  };
function Em(e, t, n, r, i, o, s, l, u) {
  (Cr = !1), (eo = null), wm.apply(Sm, arguments);
}
function Om(e, t, n, r, i, o, s, l, u) {
  if ((Em.apply(this, arguments), Cr)) {
    if (Cr) {
      var a = eo;
      (Cr = !1), (eo = null);
    } else throw Error(R(198));
    to || ((to = !0), (vl = a));
  }
}
function xn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Vf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Na(e) {
  if (xn(e) !== e) throw Error(R(188));
}
function Cm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = xn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Na(i), e;
        if (o === r) return Na(i), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Wf(e) {
  return (e = Cm(e)), e !== null ? qf(e) : null;
}
function qf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kf = Ke.unstable_scheduleCallback,
  Da = Ke.unstable_cancelCallback,
  xm = Ke.unstable_shouldYield,
  Pm = Ke.unstable_requestPaint,
  de = Ke.unstable_now,
  _m = Ke.unstable_getCurrentPriorityLevel,
  Ou = Ke.unstable_ImmediatePriority,
  Xf = Ke.unstable_UserBlockingPriority,
  no = Ke.unstable_NormalPriority,
  Rm = Ke.unstable_LowPriority,
  Yf = Ke.unstable_IdlePriority,
  Ao = null,
  gt = null;
function Tm(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function")
    try {
      gt.onCommitFiberRoot(Ao, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var at = Math.clz32 ? Math.clz32 : Dm,
  km = Math.log,
  Nm = Math.LN2;
function Dm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((km(e) / Nm) | 0)) | 0;
}
var yi = 64,
  gi = 4194304;
function wr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ro(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = wr(l)) : ((o &= s), o !== 0 && (r = wr(o)));
  } else (s = n & ~i), s !== 0 ? (r = wr(s)) : o !== 0 && (r = wr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - at(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Mm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Fm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - at(o),
      l = 1 << s,
      u = i[s];
    u === -1
      ? (!(l & n) || l & r) && (i[s] = Mm(l, t))
      : u <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function yl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Gf() {
  var e = yi;
  return (yi <<= 1), !(yi & 4194240) && (yi = 64), e;
}
function Ss(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ni(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - at(t)),
    (e[t] = n);
}
function Lm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - at(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Cu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var G = 0;
function Jf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zf,
  xu,
  ed,
  td,
  nd,
  gl = !1,
  wi = [],
  Vt = null,
  Wt = null,
  qt = null,
  Ir = new Map(),
  Ar = new Map(),
  bt = [],
  jm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ma(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ir.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ar.delete(t.pointerId);
  }
}
function ur(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ii(t)), t !== null && xu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function zm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Vt = ur(Vt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Wt = ur(Wt, e, t, n, r, i)), !0;
    case "mouseover":
      return (qt = ur(qt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Ir.set(o, ur(Ir.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ar.set(o, ur(Ar.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function rd(e) {
  var t = an(e.target);
  if (t !== null) {
    var n = xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vf(n)), t !== null)) {
          (e.blockedOn = t),
            nd(e.priority, function () {
              ed(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ii(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (pl = r), n.target.dispatchEvent(r), (pl = null);
    } else return (t = ii(n)), t !== null && xu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Fa(e, t, n) {
  Ii(e) && n.delete(t);
}
function Im() {
  (gl = !1),
    Vt !== null && Ii(Vt) && (Vt = null),
    Wt !== null && Ii(Wt) && (Wt = null),
    qt !== null && Ii(qt) && (qt = null),
    Ir.forEach(Fa),
    Ar.forEach(Fa);
}
function ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gl ||
      ((gl = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Im)));
}
function $r(e) {
  function t(i) {
    return ar(i, e);
  }
  if (0 < wi.length) {
    ar(wi[0], e);
    for (var n = 1; n < wi.length; n++) {
      var r = wi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && ar(Vt, e),
      Wt !== null && ar(Wt, e),
      qt !== null && ar(qt, e),
      Ir.forEach(t),
      Ar.forEach(t),
      n = 0;
    n < bt.length;
    n++
  )
    (r = bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bt.length && ((n = bt[0]), n.blockedOn === null); )
    rd(n), n.blockedOn === null && bt.shift();
}
var Vn = Dt.ReactCurrentBatchConfig,
  io = !0;
function Am(e, t, n, r) {
  var i = G,
    o = Vn.transition;
  Vn.transition = null;
  try {
    (G = 1), Pu(e, t, n, r);
  } finally {
    (G = i), (Vn.transition = o);
  }
}
function $m(e, t, n, r) {
  var i = G,
    o = Vn.transition;
  Vn.transition = null;
  try {
    (G = 4), Pu(e, t, n, r);
  } finally {
    (G = i), (Vn.transition = o);
  }
}
function Pu(e, t, n, r) {
  if (io) {
    var i = wl(e, t, n, r);
    if (i === null) Ns(e, t, r, oo, n), Ma(e, r);
    else if (zm(i, e, t, n, r)) r.stopPropagation();
    else if ((Ma(e, r), t & 4 && -1 < jm.indexOf(e))) {
      for (; i !== null; ) {
        var o = ii(i);
        if (
          (o !== null && Zf(o),
          (o = wl(e, t, n, r)),
          o === null && Ns(e, t, r, oo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ns(e, t, r, null, n);
  }
}
var oo = null;
function wl(e, t, n, r) {
  if (((oo = null), (e = Eu(r)), (e = an(e)), e !== null))
    if (((t = xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Vf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (oo = e), null;
}
function id(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (_m()) {
        case Ou:
          return 1;
        case Xf:
          return 4;
        case no:
        case Rm:
          return 16;
        case Yf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null,
  _u = null,
  Ai = null;
function od() {
  if (Ai) return Ai;
  var e,
    t = _u,
    n = t.length,
    r,
    i = "value" in Bt ? Bt.value : Bt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ai = i.slice(e, 1 < r ? 1 - r : void 0));
}
function $i(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Si() {
  return !0;
}
function La() {
  return !1;
}
function Ye(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Si
        : La),
      (this.isPropagationStopped = La),
      this
    );
  }
  return (
    le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Si));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Si));
      },
      persist: function () {},
      isPersistent: Si,
    }),
    t
  );
}
var nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ru = Ye(nr),
  ri = le({}, nr, { view: 0, detail: 0 }),
  bm = Ye(ri),
  Es,
  Os,
  cr,
  $o = le({}, ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== cr &&
            (cr && e.type === "mousemove"
              ? ((Es = e.screenX - cr.screenX), (Os = e.screenY - cr.screenY))
              : (Os = Es = 0),
            (cr = e)),
          Es);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Os;
    },
  }),
  ja = Ye($o),
  Um = le({}, $o, { dataTransfer: 0 }),
  Bm = Ye(Um),
  Hm = le({}, ri, { relatedTarget: 0 }),
  Cs = Ye(Hm),
  Qm = le({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vm = Ye(Qm),
  Wm = le({}, nr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  qm = Ye(Wm),
  Km = le({}, nr, { data: 0 }),
  za = Ye(Km),
  Xm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ym = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Gm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gm[e]) ? !!t[e] : !1;
}
function Tu() {
  return Jm;
}
var Zm = le({}, ri, {
    key: function (e) {
      if (e.key) {
        var t = Xm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = $i(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ym[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tu,
    charCode: function (e) {
      return e.type === "keypress" ? $i(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? $i(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ev = Ye(Zm),
  tv = le({}, $o, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ia = Ye(tv),
  nv = le({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tu,
  }),
  rv = Ye(nv),
  iv = le({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ov = Ye(iv),
  sv = le({}, $o, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  lv = Ye(sv),
  uv = [9, 13, 27, 32],
  ku = Rt && "CompositionEvent" in window,
  xr = null;
Rt && "documentMode" in document && (xr = document.documentMode);
var av = Rt && "TextEvent" in window && !xr,
  sd = Rt && (!ku || (xr && 8 < xr && 11 >= xr)),
  Aa = " ",
  $a = !1;
function ld(e, t) {
  switch (e) {
    case "keyup":
      return uv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ud(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Nn = !1;
function cv(e, t) {
  switch (e) {
    case "compositionend":
      return ud(t);
    case "keypress":
      return t.which !== 32 ? null : (($a = !0), Aa);
    case "textInput":
      return (e = t.data), e === Aa && $a ? null : e;
    default:
      return null;
  }
}
function fv(e, t) {
  if (Nn)
    return e === "compositionend" || (!ku && ld(e, t))
      ? ((e = od()), (Ai = _u = Bt = null), (Nn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return sd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ba(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dv[e.type] : t === "textarea";
}
function ad(e, t, n, r) {
  bf(r),
    (t = so(t, "onChange")),
    0 < t.length &&
      ((n = new Ru("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  br = null;
function pv(e) {
  Sd(e, 0);
}
function bo(e) {
  var t = Fn(e);
  if (Ff(t)) return e;
}
function hv(e, t) {
  if (e === "change") return t;
}
var cd = !1;
if (Rt) {
  var xs;
  if (Rt) {
    var Ps = "oninput" in document;
    if (!Ps) {
      var Ua = document.createElement("div");
      Ua.setAttribute("oninput", "return;"),
        (Ps = typeof Ua.oninput == "function");
    }
    xs = Ps;
  } else xs = !1;
  cd = xs && (!document.documentMode || 9 < document.documentMode);
}
function Ba() {
  Pr && (Pr.detachEvent("onpropertychange", fd), (br = Pr = null));
}
function fd(e) {
  if (e.propertyName === "value" && bo(br)) {
    var t = [];
    ad(t, br, e, Eu(e)), Qf(pv, t);
  }
}
function mv(e, t, n) {
  e === "focusin"
    ? (Ba(), (Pr = t), (br = n), Pr.attachEvent("onpropertychange", fd))
    : e === "focusout" && Ba();
}
function vv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return bo(br);
}
function yv(e, t) {
  if (e === "click") return bo(t);
}
function gv(e, t) {
  if (e === "input" || e === "change") return bo(t);
}
function wv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : wv;
function Ur(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!tl.call(t, i) || !dt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ha(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qa(e, t) {
  var n = Ha(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ha(n);
  }
}
function dd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? dd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pd() {
  for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zi(e.document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Sv(e) {
  var t = pd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    dd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Nu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Qa(n, o));
        var s = Qa(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ev = Rt && "documentMode" in document && 11 >= document.documentMode,
  Dn = null,
  Sl = null,
  _r = null,
  El = !1;
function Va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  El ||
    Dn == null ||
    Dn !== Zi(r) ||
    ((r = Dn),
    "selectionStart" in r && Nu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_r && Ur(_r, r)) ||
      ((_r = r),
      (r = so(Sl, "onSelect")),
      0 < r.length &&
        ((t = new Ru("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Dn))));
}
function Ei(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Mn = {
    animationend: Ei("Animation", "AnimationEnd"),
    animationiteration: Ei("Animation", "AnimationIteration"),
    animationstart: Ei("Animation", "AnimationStart"),
    transitionend: Ei("Transition", "TransitionEnd"),
  },
  _s = {},
  hd = {};
Rt &&
  ((hd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Mn.animationend.animation,
    delete Mn.animationiteration.animation,
    delete Mn.animationstart.animation),
  "TransitionEvent" in window || delete Mn.transitionend.transition);
function Uo(e) {
  if (_s[e]) return _s[e];
  if (!Mn[e]) return e;
  var t = Mn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hd) return (_s[e] = t[n]);
  return e;
}
var md = Uo("animationend"),
  vd = Uo("animationiteration"),
  yd = Uo("animationstart"),
  gd = Uo("transitionend"),
  wd = new Map(),
  Wa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function rn(e, t) {
  wd.set(e, t), Cn(t, [e]);
}
for (var Rs = 0; Rs < Wa.length; Rs++) {
  var Ts = Wa[Rs],
    Ov = Ts.toLowerCase(),
    Cv = Ts[0].toUpperCase() + Ts.slice(1);
  rn(Ov, "on" + Cv);
}
rn(md, "onAnimationEnd");
rn(vd, "onAnimationIteration");
rn(yd, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(gd, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
Cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Sr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  xv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
function qa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Om(r, t, void 0, e), (e.currentTarget = null);
}
function Sd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            a = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          qa(i, l, a), (o = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (a = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          qa(i, l, a), (o = u);
        }
    }
  }
  if (to) throw ((e = vl), (to = !1), (vl = null), e);
}
function ne(e, t) {
  var n = t[_l];
  n === void 0 && (n = t[_l] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ed(t, e, 2, !1), n.add(r));
}
function ks(e, t, n) {
  var r = 0;
  t && (r |= 4), Ed(n, e, r, t);
}
var Oi = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) {
  if (!e[Oi]) {
    (e[Oi] = !0),
      Tf.forEach(function (n) {
        n !== "selectionchange" && (xv.has(n) || ks(n, !1, e), ks(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Oi] || ((t[Oi] = !0), ks("selectionchange", !1, t));
  }
}
function Ed(e, t, n, r) {
  switch (id(t)) {
    case 1:
      var i = Am;
      break;
    case 4:
      i = $m;
      break;
    default:
      i = Pu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ml ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ns(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = an(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Qf(function () {
    var a = o,
      c = Eu(n),
      p = [];
    e: {
      var h = wd.get(e);
      if (h !== void 0) {
        var y = Ru,
          v = e;
        switch (e) {
          case "keypress":
            if ($i(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ev;
            break;
          case "focusin":
            (v = "focus"), (y = Cs);
            break;
          case "focusout":
            (v = "blur"), (y = Cs);
            break;
          case "beforeblur":
          case "afterblur":
            y = Cs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = ja;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Bm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = rv;
            break;
          case md:
          case vd:
          case yd:
            y = Vm;
            break;
          case gd:
            y = ov;
            break;
          case "scroll":
            y = bm;
            break;
          case "wheel":
            y = lv;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = qm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ia;
        }
        var w = (t & 4) !== 0,
          _ = !w && e === "scroll",
          m = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var f = a, d; f !== null; ) {
          d = f;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              m !== null && ((g = zr(f, m)), g != null && w.push(Hr(f, g, d)))),
            _)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((h = new y(h, v, null, n, c)), p.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== pl &&
            (v = n.relatedTarget || n.fromElement) &&
            (an(v) || v[Tt]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = a),
              (v = v ? an(v) : null),
              v !== null &&
                ((_ = xn(v)), v !== _ || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = a)),
          y !== v)
        ) {
          if (
            ((w = ja),
            (g = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Ia),
              (g = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (_ = y == null ? h : Fn(y)),
            (d = v == null ? h : Fn(v)),
            (h = new w(g, f + "leave", y, n, c)),
            (h.target = _),
            (h.relatedTarget = d),
            (g = null),
            an(c) === a &&
              ((w = new w(m, f + "enter", v, n, c)),
              (w.target = d),
              (w.relatedTarget = _),
              (g = w)),
            (_ = g),
            y && v)
          )
            t: {
              for (w = y, m = v, f = 0, d = w; d; d = _n(d)) f++;
              for (d = 0, g = m; g; g = _n(g)) d++;
              for (; 0 < f - d; ) (w = _n(w)), f--;
              for (; 0 < d - f; ) (m = _n(m)), d--;
              for (; f--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = _n(w)), (m = _n(m));
              }
              w = null;
            }
          else w = null;
          y !== null && Ka(p, h, y, w, !1),
            v !== null && _ !== null && Ka(p, _, v, w, !0);
        }
      }
      e: {
        if (
          ((h = a ? Fn(a) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var S = hv;
        else if (ba(h))
          if (cd) S = gv;
          else {
            S = vv;
            var O = mv;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = yv);
        if (S && (S = S(e, a))) {
          ad(p, S, n, c);
          break e;
        }
        O && O(e, h, a),
          e === "focusout" &&
            (O = h._wrapperState) &&
            O.controlled &&
            h.type === "number" &&
            ul(h, "number", h.value);
      }
      switch (((O = a ? Fn(a) : window), e)) {
        case "focusin":
          (ba(O) || O.contentEditable === "true") &&
            ((Dn = O), (Sl = a), (_r = null));
          break;
        case "focusout":
          _r = Sl = Dn = null;
          break;
        case "mousedown":
          El = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (El = !1), Va(p, n, c);
          break;
        case "selectionchange":
          if (Ev) break;
        case "keydown":
        case "keyup":
          Va(p, n, c);
      }
      var E;
      if (ku)
        e: {
          switch (e) {
            case "compositionstart":
              var x = "onCompositionStart";
              break e;
            case "compositionend":
              x = "onCompositionEnd";
              break e;
            case "compositionupdate":
              x = "onCompositionUpdate";
              break e;
          }
          x = void 0;
        }
      else
        Nn
          ? ld(e, n) && (x = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x &&
        (sd &&
          n.locale !== "ko" &&
          (Nn || x !== "onCompositionStart"
            ? x === "onCompositionEnd" && Nn && (E = od())
            : ((Bt = c),
              (_u = "value" in Bt ? Bt.value : Bt.textContent),
              (Nn = !0))),
        (O = so(a, x)),
        0 < O.length &&
          ((x = new za(x, e, null, n, c)),
          p.push({ event: x, listeners: O }),
          E ? (x.data = E) : ((E = ud(n)), E !== null && (x.data = E)))),
        (E = av ? cv(e, n) : fv(e, n)) &&
          ((a = so(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new za("onBeforeInput", "beforeinput", null, n, c)),
            p.push({ event: c, listeners: a }),
            (c.data = E)));
    }
    Sd(p, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function so(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = zr(e, n)),
      o != null && r.unshift(Hr(e, o, i)),
      (o = zr(e, t)),
      o != null && r.push(Hr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ka(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      a = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      i
        ? ((u = zr(n, o)), u != null && s.unshift(Hr(n, u, l)))
        : i || ((u = zr(n, o)), u != null && s.push(Hr(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Pv = /\r\n?/g,
  _v = /\u0000|\uFFFD/g;
function Xa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Pv,
      `
`
    )
    .replace(_v, "");
}
function Ci(e, t, n) {
  if (((t = Xa(t)), Xa(e) !== t && n)) throw Error(R(425));
}
function lo() {}
var Ol = null,
  Cl = null;
function xl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Pl = typeof setTimeout == "function" ? setTimeout : void 0,
  Rv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ya = typeof Promise == "function" ? Promise : void 0,
  Tv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ya < "u"
      ? function (e) {
          return Ya.resolve(null).then(e).catch(kv);
        }
      : Pl;
function kv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ds(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), $r(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  $r(t);
}
function Kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ga(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rr = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + rr,
  Qr = "__reactProps$" + rr,
  Tt = "__reactContainer$" + rr,
  _l = "__reactEvents$" + rr,
  Nv = "__reactListeners$" + rr,
  Dv = "__reactHandles$" + rr;
function an(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ga(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = Ga(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ii(e) {
  return (
    (e = e[yt] || e[Tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Bo(e) {
  return e[Qr] || null;
}
var Rl = [],
  Ln = -1;
function on(e) {
  return { current: e };
}
function re(e) {
  0 > Ln || ((e.current = Rl[Ln]), (Rl[Ln] = null), Ln--);
}
function ee(e, t) {
  Ln++, (Rl[Ln] = e.current), (e.current = t);
}
var nn = {},
  _e = on(nn),
  Ie = on(!1),
  yn = nn;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return nn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function uo() {
  re(Ie), re(_e);
}
function Ja(e, t, n) {
  if (_e.current !== nn) throw Error(R(168));
  ee(_e, t), ee(Ie, n);
}
function Od(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(R(108, mm(e) || "Unknown", i));
  return le({}, n, r);
}
function ao(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || nn),
    (yn = _e.current),
    ee(_e, e),
    ee(Ie, Ie.current),
    !0
  );
}
function Za(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Od(e, t, yn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Ie),
      re(_e),
      ee(_e, e))
    : re(Ie),
    ee(Ie, n);
}
var Ct = null,
  Ho = !1,
  Ms = !1;
function Cd(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Mv(e) {
  (Ho = !0), Cd(e);
}
function sn() {
  if (!Ms && Ct !== null) {
    Ms = !0;
    var e = 0,
      t = G;
    try {
      var n = Ct;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), (Ho = !1);
    } catch (i) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Kf(Ou, sn), i);
    } finally {
      (G = t), (Ms = !1);
    }
  }
  return null;
}
var jn = [],
  zn = 0,
  co = null,
  fo = 0,
  Ge = [],
  Je = 0,
  gn = null,
  xt = 1,
  Pt = "";
function ln(e, t) {
  (jn[zn++] = fo), (jn[zn++] = co), (co = e), (fo = t);
}
function xd(e, t, n) {
  (Ge[Je++] = xt), (Ge[Je++] = Pt), (Ge[Je++] = gn), (gn = e);
  var r = xt;
  e = Pt;
  var i = 32 - at(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - at(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (xt = (1 << (32 - at(t) + i)) | (n << i) | r),
      (Pt = o + e);
  } else (xt = (1 << o) | (n << i) | r), (Pt = e);
}
function Du(e) {
  e.return !== null && (ln(e, 1), xd(e, 1, 0));
}
function Mu(e) {
  for (; e === co; )
    (co = jn[--zn]), (jn[zn] = null), (fo = jn[--zn]), (jn[zn] = null);
  for (; e === gn; )
    (gn = Ge[--Je]),
      (Ge[Je] = null),
      (Pt = Ge[--Je]),
      (Ge[Je] = null),
      (xt = Ge[--Je]),
      (Ge[Je] = null);
}
var We = null,
  Qe = null,
  ie = !1,
  ut = null;
function Pd(e, t) {
  var n = Ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ec(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (Qe = Kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (Qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: xt, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (Qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Tl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function kl(e) {
  if (ie) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!ec(e, t)) {
        if (Tl(e)) throw Error(R(418));
        t = Kt(n.nextSibling);
        var r = We;
        t && ec(e, t)
          ? Pd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ie = !1), (We = e));
      }
    } else {
      if (Tl(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ie = !1), (We = e);
    }
  }
}
function tc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function xi(e) {
  if (e !== We) return !1;
  if (!ie) return tc(e), (ie = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !xl(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (Tl(e)) throw (_d(), Error(R(418)));
    for (; t; ) Pd(e, t), (t = Kt(t.nextSibling));
  }
  if ((tc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = We ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function _d() {
  for (var e = Qe; e; ) e = Kt(e.nextSibling);
}
function Yn() {
  (Qe = We = null), (ie = !1);
}
function Fu(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
var Fv = Dt.ReactCurrentBatchConfig;
function fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function nc(e) {
  var t = e._init;
  return t(e._payload);
}
function Rd(e) {
  function t(m, f) {
    if (e) {
      var d = m.deletions;
      d === null ? ((m.deletions = [f]), (m.flags |= 16)) : d.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), (f = f.sibling);
    return null;
  }
  function r(m, f) {
    for (m = new Map(); f !== null; )
      f.key !== null ? m.set(f.key, f) : m.set(f.index, f), (f = f.sibling);
    return m;
  }
  function i(m, f) {
    return (m = Jt(m, f)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, f, d) {
    return (
      (m.index = d),
      e
        ? ((d = m.alternate),
          d !== null
            ? ((d = d.index), d < f ? ((m.flags |= 2), f) : d)
            : ((m.flags |= 2), f))
        : ((m.flags |= 1048576), f)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, f, d, g) {
    return f === null || f.tag !== 6
      ? ((f = $s(d, m.mode, g)), (f.return = m), f)
      : ((f = i(f, d)), (f.return = m), f);
  }
  function u(m, f, d, g) {
    var S = d.type;
    return S === kn
      ? c(m, f, d.props.children, g, d.key)
      : f !== null &&
        (f.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === It &&
            nc(S) === f.type))
      ? ((g = i(f, d.props)), (g.ref = fr(m, f, d)), (g.return = m), g)
      : ((g = Wi(d.type, d.key, d.props, null, m.mode, g)),
        (g.ref = fr(m, f, d)),
        (g.return = m),
        g);
  }
  function a(m, f, d, g) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== d.containerInfo ||
      f.stateNode.implementation !== d.implementation
      ? ((f = bs(d, m.mode, g)), (f.return = m), f)
      : ((f = i(f, d.children || [])), (f.return = m), f);
  }
  function c(m, f, d, g, S) {
    return f === null || f.tag !== 7
      ? ((f = hn(d, m.mode, g, S)), (f.return = m), f)
      : ((f = i(f, d)), (f.return = m), f);
  }
  function p(m, f, d) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = $s("" + f, m.mode, d)), (f.return = m), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case hi:
          return (
            (d = Wi(f.type, f.key, f.props, null, m.mode, d)),
            (d.ref = fr(m, null, f)),
            (d.return = m),
            d
          );
        case Tn:
          return (f = bs(f, m.mode, d)), (f.return = m), f;
        case It:
          var g = f._init;
          return p(m, g(f._payload), d);
      }
      if (gr(f) || sr(f))
        return (f = hn(f, m.mode, d, null)), (f.return = m), f;
      Pi(m, f);
    }
    return null;
  }
  function h(m, f, d, g) {
    var S = f !== null ? f.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return S !== null ? null : l(m, f, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case hi:
          return d.key === S ? u(m, f, d, g) : null;
        case Tn:
          return d.key === S ? a(m, f, d, g) : null;
        case It:
          return (S = d._init), h(m, f, S(d._payload), g);
      }
      if (gr(d) || sr(d)) return S !== null ? null : c(m, f, d, g, null);
      Pi(m, d);
    }
    return null;
  }
  function y(m, f, d, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (m = m.get(d) || null), l(f, m, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case hi:
          return (m = m.get(g.key === null ? d : g.key) || null), u(f, m, g, S);
        case Tn:
          return (m = m.get(g.key === null ? d : g.key) || null), a(f, m, g, S);
        case It:
          var O = g._init;
          return y(m, f, d, O(g._payload), S);
      }
      if (gr(g) || sr(g)) return (m = m.get(d) || null), c(f, m, g, S, null);
      Pi(f, g);
    }
    return null;
  }
  function v(m, f, d, g) {
    for (
      var S = null, O = null, E = f, x = (f = 0), N = null;
      E !== null && x < d.length;
      x++
    ) {
      E.index > x ? ((N = E), (E = null)) : (N = E.sibling);
      var P = h(m, E, d[x], g);
      if (P === null) {
        E === null && (E = N);
        break;
      }
      e && E && P.alternate === null && t(m, E),
        (f = o(P, f, x)),
        O === null ? (S = P) : (O.sibling = P),
        (O = P),
        (E = N);
    }
    if (x === d.length) return n(m, E), ie && ln(m, x), S;
    if (E === null) {
      for (; x < d.length; x++)
        (E = p(m, d[x], g)),
          E !== null &&
            ((f = o(E, f, x)), O === null ? (S = E) : (O.sibling = E), (O = E));
      return ie && ln(m, x), S;
    }
    for (E = r(m, E); x < d.length; x++)
      (N = y(E, m, x, d[x], g)),
        N !== null &&
          (e && N.alternate !== null && E.delete(N.key === null ? x : N.key),
          (f = o(N, f, x)),
          O === null ? (S = N) : (O.sibling = N),
          (O = N));
    return (
      e &&
        E.forEach(function (H) {
          return t(m, H);
        }),
      ie && ln(m, x),
      S
    );
  }
  function w(m, f, d, g) {
    var S = sr(d);
    if (typeof S != "function") throw Error(R(150));
    if (((d = S.call(d)), d == null)) throw Error(R(151));
    for (
      var O = (S = null), E = f, x = (f = 0), N = null, P = d.next();
      E !== null && !P.done;
      x++, P = d.next()
    ) {
      E.index > x ? ((N = E), (E = null)) : (N = E.sibling);
      var H = h(m, E, P.value, g);
      if (H === null) {
        E === null && (E = N);
        break;
      }
      e && E && H.alternate === null && t(m, E),
        (f = o(H, f, x)),
        O === null ? (S = H) : (O.sibling = H),
        (O = H),
        (E = N);
    }
    if (P.done) return n(m, E), ie && ln(m, x), S;
    if (E === null) {
      for (; !P.done; x++, P = d.next())
        (P = p(m, P.value, g)),
          P !== null &&
            ((f = o(P, f, x)), O === null ? (S = P) : (O.sibling = P), (O = P));
      return ie && ln(m, x), S;
    }
    for (E = r(m, E); !P.done; x++, P = d.next())
      (P = y(E, m, x, P.value, g)),
        P !== null &&
          (e && P.alternate !== null && E.delete(P.key === null ? x : P.key),
          (f = o(P, f, x)),
          O === null ? (S = P) : (O.sibling = P),
          (O = P));
    return (
      e &&
        E.forEach(function (X) {
          return t(m, X);
        }),
      ie && ln(m, x),
      S
    );
  }
  function _(m, f, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === kn &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case hi:
          e: {
            for (var S = d.key, O = f; O !== null; ) {
              if (O.key === S) {
                if (((S = d.type), S === kn)) {
                  if (O.tag === 7) {
                    n(m, O.sibling),
                      (f = i(O, d.props.children)),
                      (f.return = m),
                      (m = f);
                    break e;
                  }
                } else if (
                  O.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === It &&
                    nc(S) === O.type)
                ) {
                  n(m, O.sibling),
                    (f = i(O, d.props)),
                    (f.ref = fr(m, O, d)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, O);
                break;
              } else t(m, O);
              O = O.sibling;
            }
            d.type === kn
              ? ((f = hn(d.props.children, m.mode, g, d.key)),
                (f.return = m),
                (m = f))
              : ((g = Wi(d.type, d.key, d.props, null, m.mode, g)),
                (g.ref = fr(m, f, d)),
                (g.return = m),
                (m = g));
          }
          return s(m);
        case Tn:
          e: {
            for (O = d.key; f !== null; ) {
              if (f.key === O)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === d.containerInfo &&
                  f.stateNode.implementation === d.implementation
                ) {
                  n(m, f.sibling),
                    (f = i(f, d.children || [])),
                    (f.return = m),
                    (m = f);
                  break e;
                } else {
                  n(m, f);
                  break;
                }
              else t(m, f);
              f = f.sibling;
            }
            (f = bs(d, m.mode, g)), (f.return = m), (m = f);
          }
          return s(m);
        case It:
          return (O = d._init), _(m, f, O(d._payload), g);
      }
      if (gr(d)) return v(m, f, d, g);
      if (sr(d)) return w(m, f, d, g);
      Pi(m, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = i(f, d)), (f.return = m), (m = f))
          : (n(m, f), (f = $s(d, m.mode, g)), (f.return = m), (m = f)),
        s(m))
      : n(m, f);
  }
  return _;
}
var Gn = Rd(!0),
  Td = Rd(!1),
  po = on(null),
  ho = null,
  In = null,
  Lu = null;
function ju() {
  Lu = In = ho = null;
}
function zu(e) {
  var t = po.current;
  re(po), (e._currentValue = t);
}
function Nl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Wn(e, t) {
  (ho = e),
    (Lu = In = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (Lu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
      if (ho === null) throw Error(R(308));
      (In = e), (ho.dependencies = { lanes: 0, firstContext: e });
    } else In = In.next = e;
  return t;
}
var cn = null;
function Iu(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function kd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Iu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    kt(e, r)
  );
}
function kt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Nd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function _t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      kt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Iu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    kt(e, n)
  );
}
function bi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cu(e, n);
  }
}
function rc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mo(e, t, n, r) {
  var i = e.updateQueue;
  At = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      a = u.next;
    (u.next = null), s === null ? (o = a) : (s.next = a), (s = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = a) : (l.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var p = i.baseState;
    (s = 0), (c = a = u = null), (l = o);
    do {
      var h = l.lane,
        y = l.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            w = l;
          switch (((h = t), (y = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                p = v.call(y, p, h);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (h = typeof v == "function" ? v.call(y, p, h) : v),
                h == null)
              )
                break e;
              p = le({}, p, h);
              break e;
            case 2:
              At = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [l]) : h.push(l));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((a = c = y), (u = p)) : (c = c.next = y),
          (s |= h);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = p),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Sn |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function ic(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var oi = {},
  wt = on(oi),
  Vr = on(oi),
  Wr = on(oi);
function fn(e) {
  if (e === oi) throw Error(R(174));
  return e;
}
function $u(e, t) {
  switch ((ee(Wr, t), ee(Vr, e), ee(wt, oi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cl(t, e));
  }
  re(wt), ee(wt, t);
}
function Jn() {
  re(wt), re(Vr), re(Wr);
}
function Dd(e) {
  fn(Wr.current);
  var t = fn(wt.current),
    n = cl(t, e.type);
  t !== n && (ee(Vr, e), ee(wt, n));
}
function bu(e) {
  Vr.current === e && (re(wt), re(Vr));
}
var oe = on(0);
function vo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fs = [];
function Uu() {
  for (var e = 0; e < Fs.length; e++)
    Fs[e]._workInProgressVersionPrimary = null;
  Fs.length = 0;
}
var Ui = Dt.ReactCurrentDispatcher,
  Ls = Dt.ReactCurrentBatchConfig,
  wn = 0,
  se = null,
  he = null,
  ve = null,
  yo = !1,
  Rr = !1,
  qr = 0,
  Lv = 0;
function Ee() {
  throw Error(R(321));
}
function Bu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function Hu(e, t, n, r, i, o) {
  if (
    ((wn = o),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ui.current = e === null || e.memoizedState === null ? Av : $v),
    (e = n(r, i)),
    Rr)
  ) {
    o = 0;
    do {
      if (((Rr = !1), (qr = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (ve = he = null),
        (t.updateQueue = null),
        (Ui.current = bv),
        (e = n(r, i));
    } while (Rr);
  }
  if (
    ((Ui.current = go),
    (t = he !== null && he.next !== null),
    (wn = 0),
    (ve = he = se = null),
    (yo = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Qu() {
  var e = qr !== 0;
  return (qr = 0), e;
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ve === null ? (se.memoizedState = ve = e) : (ve = ve.next = e), ve;
}
function rt() {
  if (he === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ve === null ? se.memoizedState : ve.next;
  if (t !== null) (ve = t), (he = e);
  else {
    if (e === null) throw Error(R(310));
    (he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      ve === null ? (se.memoizedState = ve = e) : (ve = ve.next = e);
  }
  return ve;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function js(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = he,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      a = o;
    do {
      var c = a.lane;
      if ((wn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((l = u = p), (s = r)) : (u = u.next = p),
          (se.lanes |= c),
          (Sn |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (s = r) : (u.next = l),
      dt(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (se.lanes |= o), (Sn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function zs(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    dt(o, t.memoizedState) || (ze = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Md() {}
function Fd(e, t) {
  var n = se,
    r = rt(),
    i = t(),
    o = !dt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ze = !0)),
    (r = r.queue),
    Vu(zd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xr(9, jd.bind(null, n, r, i, t), void 0, null),
      ye === null)
    )
      throw Error(R(349));
    wn & 30 || Ld(n, t, i);
  }
  return i;
}
function Ld(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function jd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Id(t) && Ad(e);
}
function zd(e, t, n) {
  return n(function () {
    Id(t) && Ad(e);
  });
}
function Id(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function Ad(e) {
  var t = kt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function oc(e) {
  var t = vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Iv.bind(null, se, e)),
    [t.memoizedState, e]
  );
}
function Xr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $d() {
  return rt().memoizedState;
}
function Bi(e, t, n, r) {
  var i = vt();
  (se.flags |= e),
    (i.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Qo(e, t, n, r) {
  var i = rt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (he !== null) {
    var s = he.memoizedState;
    if (((o = s.destroy), r !== null && Bu(r, s.deps))) {
      i.memoizedState = Xr(t, n, o, r);
      return;
    }
  }
  (se.flags |= e), (i.memoizedState = Xr(1 | t, n, o, r));
}
function sc(e, t) {
  return Bi(8390656, 8, e, t);
}
function Vu(e, t) {
  return Qo(2048, 8, e, t);
}
function bd(e, t) {
  return Qo(4, 2, e, t);
}
function Ud(e, t) {
  return Qo(4, 4, e, t);
}
function Bd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Hd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Qo(4, 4, Bd.bind(null, t, e), n)
  );
}
function Wu() {}
function Qd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Vd(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wd(e, t, n) {
  return wn & 21
    ? (dt(n, t) || ((n = Gf()), (se.lanes |= n), (Sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function jv(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ls.transition;
  Ls.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Ls.transition = r);
  }
}
function qd() {
  return rt().memoizedState;
}
function zv(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Kd(e))
  )
    Xd(t, n);
  else if (((n = kd(e, t, n, r)), n !== null)) {
    var i = De();
    ct(n, e, r, i), Yd(n, t, r);
  }
}
function Iv(e, t, n) {
  var r = Gt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kd(e)) Xd(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), dt(l, s))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Iu(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = kd(e, t, i, r)),
      n !== null && ((i = De()), ct(n, e, r, i), Yd(n, t, r));
  }
}
function Kd(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function Xd(e, t) {
  Rr = yo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cu(e, n);
  }
}
var go = {
    readContext: nt,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  Av = {
    readContext: nt,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: sc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bi(4194308, 4, Bd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = zv.bind(null, se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: oc,
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e);
    },
    useTransition: function () {
      var e = oc(!1),
        t = e[0];
      return (e = jv.bind(null, e[1])), (vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = se,
        i = vt();
      if (ie) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), ye === null)) throw Error(R(349));
        wn & 30 || Ld(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        sc(zd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Xr(9, jd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = vt(),
        t = ye.identifierPrefix;
      if (ie) {
        var n = Pt,
          r = xt;
        (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Lv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  $v = {
    readContext: nt,
    useCallback: Qd,
    useContext: nt,
    useEffect: Vu,
    useImperativeHandle: Hd,
    useInsertionEffect: bd,
    useLayoutEffect: Ud,
    useMemo: Vd,
    useReducer: js,
    useRef: $d,
    useState: function () {
      return js(Kr);
    },
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      var t = rt();
      return Wd(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = js(Kr)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Md,
    useSyncExternalStore: Fd,
    useId: qd,
    unstable_isNewReconciler: !1,
  },
  bv = {
    readContext: nt,
    useCallback: Qd,
    useContext: nt,
    useEffect: Vu,
    useImperativeHandle: Hd,
    useInsertionEffect: bd,
    useLayoutEffect: Ud,
    useMemo: Vd,
    useReducer: zs,
    useRef: $d,
    useState: function () {
      return zs(Kr);
    },
    useDebugValue: Wu,
    useDeferredValue: function (e) {
      var t = rt();
      return he === null ? (t.memoizedState = e) : Wd(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = zs(Kr)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Md,
    useSyncExternalStore: Fd,
    useId: qd,
    unstable_isNewReconciler: !1,
  };
function st(e, t) {
  if (e && e.defaultProps) {
    (t = le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Dl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      i = Gt(e),
      o = _t(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, i)),
      t !== null && (ct(t, e, i, r), bi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      i = Gt(e),
      o = _t(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, i)),
      t !== null && (ct(t, e, i, r), bi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = Gt(e),
      i = _t(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Xt(e, i, r)),
      t !== null && (ct(t, e, r, n), bi(t, e, r));
  },
};
function lc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ur(n, r) || !Ur(i, o)
      : !0
  );
}
function Gd(e, t, n) {
  var r = !1,
    i = nn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = nt(o))
      : ((i = Ae(t) ? yn : _e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Xn(e, i) : nn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function uc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vo.enqueueReplaceState(t, t.state, null);
}
function Ml(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Au(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = nt(o))
    : ((o = Ae(t) ? yn : _e.current), (i.context = Xn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Dl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Vo.enqueueReplaceState(i, i.state, null),
      mo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += hm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Is(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Uv = typeof WeakMap == "function" ? WeakMap : Map;
function Jd(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      So || ((So = !0), (Hl = r)), Fl(e, t);
    }),
    n
  );
}
function Zd(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Fl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Fl(e, t),
          typeof r != "function" &&
            (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Uv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = ty.bind(null, e, t, n)), t.then(e, e));
}
function cc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = _t(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Bv = Dt.ReactCurrentOwner,
  ze = !1;
function ke(e, t, n, r) {
  t.child = e === null ? Td(t, null, n, r) : Gn(t, e.child, n, r);
}
function dc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Wn(t, i),
    (r = Hu(e, t, n, r, o, i)),
    (n = Qu()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (ie && n && Du(t), (t.flags |= 1), ke(e, t, r, i), t.child)
  );
}
function pc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ea(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ep(e, t, o, r, i))
      : ((e = Wi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(s, r) && e.ref === t.ref)
    )
      return Nt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Jt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ep(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ur(o, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), Nt(e, t, i);
  }
  return Ll(e, t, n, r, i);
}
function tp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee($n, Be),
        (Be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee($n, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ee($n, Be),
        (Be |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee($n, Be),
      (Be |= r);
  return ke(e, t, i, n), t.child;
}
function np(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ll(e, t, n, r, i) {
  var o = Ae(n) ? yn : _e.current;
  return (
    (o = Xn(t, o)),
    Wn(t, i),
    (n = Hu(e, t, n, r, o, i)),
    (r = Qu()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (ie && r && Du(t), (t.flags |= 1), ke(e, t, n, i), t.child)
  );
}
function hc(e, t, n, r, i) {
  if (Ae(n)) {
    var o = !0;
    ao(t);
  } else o = !1;
  if ((Wn(t, i), t.stateNode === null))
    Hi(e, t), Gd(t, n, r), Ml(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = nt(a))
      : ((a = Ae(n) ? yn : _e.current), (a = Xn(t, a)));
    var c = n.getDerivedStateFromProps,
      p =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || u !== a) && uc(t, s, r, a)),
      (At = !1);
    var h = t.memoizedState;
    (s.state = h),
      mo(t, r, s, i),
      (u = t.memoizedState),
      l !== r || h !== u || Ie.current || At
        ? (typeof c == "function" && (Dl(t, n, c, r), (u = t.memoizedState)),
          (l = At || lc(t, n, l, r, h, u, a))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = a),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Nd(e, t),
      (l = t.memoizedProps),
      (a = t.type === t.elementType ? l : st(t.type, l)),
      (s.props = a),
      (p = t.pendingProps),
      (h = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = nt(u))
        : ((u = Ae(n) ? yn : _e.current), (u = Xn(t, u)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || h !== u) && uc(t, s, r, u)),
      (At = !1),
      (h = t.memoizedState),
      (s.state = h),
      mo(t, r, s, i);
    var v = t.memoizedState;
    l !== p || h !== v || Ie.current || At
      ? (typeof y == "function" && (Dl(t, n, y, r), (v = t.memoizedState)),
        (a = At || lc(t, n, a, r, h, v, u) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = u),
        (r = a))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return jl(e, t, n, r, o, i);
}
function jl(e, t, n, r, i, o) {
  np(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Za(t, n, !1), Nt(e, t, o);
  (r = t.stateNode), (Bv.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Gn(t, e.child, null, o)), (t.child = Gn(t, null, l, o)))
      : ke(e, t, l, o),
    (t.memoizedState = r.state),
    i && Za(t, n, !0),
    t.child
  );
}
function rp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ja(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ja(e, t.context, !1),
    $u(e, t.containerInfo);
}
function mc(e, t, n, r, i) {
  return Yn(), Fu(i), (t.flags |= 256), ke(e, t, n, r), t.child;
}
var zl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Il(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ip(e, t, n) {
  var r = t.pendingProps,
    i = oe.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ee(oe, i & 1),
    e === null)
  )
    return (
      kl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ko(s, r, 0, null)),
              (e = hn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Il(n)),
              (t.memoizedState = zl),
              e)
            : qu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Hv(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Jt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Jt(l, o)) : ((o = hn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Il(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = zl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Jt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qu(e, t) {
  return (
    (t = Ko({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function _i(e, t, n, r) {
  return (
    r !== null && Fu(r),
    Gn(t, e.child, null, n),
    (e = qu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Hv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Is(Error(R(422)))), _i(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ko({ mode: "visible", children: r.children }, i, 0, null)),
        (o = hn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Gn(t, e.child, null, s),
        (t.child.memoizedState = Il(s)),
        (t.memoizedState = zl),
        o);
  if (!(t.mode & 1)) return _i(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(R(419))), (r = Is(o, r, void 0)), _i(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), ze || l)) {
    if (((r = ye), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), kt(e, i), ct(r, e, i, -1));
    }
    return Zu(), (r = Is(Error(R(421)))), _i(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ny.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Qe = Kt(i.nextSibling)),
      (We = t),
      (ie = !0),
      (ut = null),
      e !== null &&
        ((Ge[Je++] = xt),
        (Ge[Je++] = Pt),
        (Ge[Je++] = gn),
        (xt = e.id),
        (Pt = e.overflow),
        (gn = t)),
      (t = qu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function vc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Nl(e.return, t, n);
}
function As(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function op(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ke(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vc(e, n, t);
        else if (e.tag === 19) vc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && vo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          As(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && vo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        As(t, !0, n, null, o);
        break;
      case "together":
        As(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Qv(e, t, n) {
  switch (t.tag) {
    case 3:
      rp(t), Yn();
      break;
    case 5:
      Dd(t);
      break;
    case 1:
      Ae(t.type) && ao(t);
      break;
    case 4:
      $u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ee(po, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ip(e, t, n)
          : (ee(oe, oe.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      ee(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return op(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ee(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), tp(e, t, n);
  }
  return Nt(e, t, n);
}
var sp, Al, lp, up;
sp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Al = function () {};
lp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), fn(wt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = sl(e, i)), (r = sl(e, r)), (o = []);
        break;
      case "select":
        (i = le({}, i, { value: void 0 })),
          (r = le({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = al(e, i)), (r = al(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = lo);
    }
    fl(n, r);
    var s;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var l = i[a];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Lr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((l = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== l && (u != null || l != null))
      )
        if (a === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Lr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && ne("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
up = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function dr(e, t) {
  if (!ie)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Vv(e, t, n) {
  var r = t.pendingProps;
  switch ((Mu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return Ae(t.type) && uo(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Jn(),
        re(Ie),
        re(_e),
        Uu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ut !== null && (Wl(ut), (ut = null)))),
        Al(e, t),
        Oe(t),
        null
      );
    case 5:
      bu(t);
      var i = fn(Wr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Oe(t), null;
        }
        if (((e = fn(wt.current)), xi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[yt] = t), (r[Qr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Sr.length; i++) ne(Sr[i], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne("error", r), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              Pa(r, o), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ne("invalid", r);
              break;
            case "textarea":
              Ra(r, o), ne("invalid", r);
          }
          fl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ci(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Lr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              mi(r), _a(r, o, !0);
              break;
            case "textarea":
              mi(r), Ta(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = lo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = zf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[yt] = t),
            (e[Qr] = r),
            sp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = dl(n, r)), n)) {
              case "dialog":
                ne("cancel", e), ne("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Sr.length; i++) ne(Sr[i], e);
                i = r;
                break;
              case "source":
                ne("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ne("error", e), ne("load", e), (i = r);
                break;
              case "details":
                ne("toggle", e), (i = r);
                break;
              case "input":
                Pa(e, r), (i = sl(e, r)), ne("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = le({}, r, { value: void 0 })),
                  ne("invalid", e);
                break;
              case "textarea":
                Ra(e, r), (i = al(e, r)), ne("invalid", e);
                break;
              default:
                i = r;
            }
            fl(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? $f(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && If(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && jr(e, u)
                    : typeof u == "number" && jr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Lr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && ne("scroll", e)
                      : u != null && yu(e, o, u, s));
              }
            switch (n) {
              case "input":
                mi(e), _a(e, r, !1);
                break;
              case "textarea":
                mi(e), Ta(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + tn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Bn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = lo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) up(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = fn(Wr.current)), fn(wt.current), xi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (o = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (re(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ie && Qe !== null && t.mode & 1 && !(t.flags & 128))
          _d(), Yn(), (t.flags |= 98560), (o = !1);
        else if (((o = xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[yt] = t;
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (o = !1);
        } else ut !== null && (Wl(ut), (ut = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? me === 0 && (me = 3) : Zu())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        Jn(), Al(e, t), e === null && Br(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return zu(t.type._context), Oe(t), null;
    case 17:
      return Ae(t.type) && uo(), Oe(t), null;
    case 19:
      if ((re(oe), (o = t.memoizedState), o === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) dr(o, !1);
        else {
          if (me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = vo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    dr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            de() > er &&
            ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              dr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ie)
            )
              return Oe(t), null;
          } else
            2 * de() - o.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), dr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = de()),
          (t.sibling = null),
          (n = oe.current),
          ee(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        Ju(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Wv(e, t) {
  switch ((Mu(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && uo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jn(),
        re(Ie),
        re(_e),
        Uu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bu(t), null;
    case 13:
      if (
        (re(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(oe), null;
    case 4:
      return Jn(), null;
    case 10:
      return zu(t.type._context), null;
    case 22:
    case 23:
      return Ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ri = !1,
  Pe = !1,
  qv = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ue(e, t, r);
      }
    else n.current = null;
}
function $l(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var yc = !1;
function Kv(e, t) {
  if (((Ol = io), (e = pd()), Nu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            a = 0,
            c = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = s + i),
                p !== o || (r !== 0 && p.nodeType !== 3) || (u = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (h = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (h === n && ++a === i && (l = s),
                h === o && ++c === r && (u = s),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = h), (h = p.parentNode);
            }
            p = y;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Cl = { focusedElem: e, selectionRange: n }, io = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    _ = v.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : st(t.type, w),
                      _
                    );
                  m.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (g) {
          ue(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (v = yc), (yc = !1), v;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && $l(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Wo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ap(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ap(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[Qr], delete t[_l], delete t[Nv], delete t[Dv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ul(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = lo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ul(e, t, n), e = e.sibling; e !== null; ) Ul(e, t, n), (e = e.sibling);
}
function Bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bl(e, t, n), e = e.sibling; e !== null; ) Bl(e, t, n), (e = e.sibling);
}
var ge = null,
  lt = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; ) fp(e, t, n), (n = n.sibling);
}
function fp(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function")
    try {
      gt.onCommitFiberUnmount(Ao, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || An(n, t);
    case 6:
      var r = ge,
        i = lt;
      (ge = null),
        Ft(e, t, n),
        (ge = r),
        (lt = i),
        ge !== null &&
          (lt
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (lt
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ds(e.parentNode, n)
              : e.nodeType === 1 && Ds(e, n),
            $r(e))
          : Ds(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (i = lt),
        (ge = n.stateNode.containerInfo),
        (lt = !0),
        Ft(e, t, n),
        (ge = r),
        (lt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && $l(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (
        !Pe &&
        (An(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ue(n, t, l);
        }
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (r = Pe) || n.memoizedState !== null), Ft(e, t, n), (Pe = r))
        : Ft(e, t, n);
      break;
    default:
      Ft(e, t, n);
  }
}
function wc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qv()),
      t.forEach(function (r) {
        var i = ry.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ge = l.stateNode), (lt = !1);
              break e;
            case 3:
              (ge = l.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (ge = l.stateNode.containerInfo), (lt = !0);
              break e;
          }
          l = l.return;
        }
        if (ge === null) throw Error(R(160));
        fp(o, s, i), (ge = null), (lt = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        ue(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) dp(t, e), (t = t.sibling);
}
function dp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(t, e), mt(e), r & 4)) {
        try {
          Tr(3, e, e.return), Wo(3, e);
        } catch (w) {
          ue(e, e.return, w);
        }
        try {
          Tr(5, e, e.return);
        } catch (w) {
          ue(e, e.return, w);
        }
      }
      break;
    case 1:
      it(t, e), mt(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (
        (it(t, e),
        mt(e),
        r & 512 && n !== null && An(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          jr(i, "");
        } catch (w) {
          ue(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Lf(i, o),
              dl(l, s);
            var a = dl(l, o);
            for (s = 0; s < u.length; s += 2) {
              var c = u[s],
                p = u[s + 1];
              c === "style"
                ? $f(i, p)
                : c === "dangerouslySetInnerHTML"
                ? If(i, p)
                : c === "children"
                ? jr(i, p)
                : yu(i, c, p, a);
            }
            switch (l) {
              case "input":
                ll(i, o);
                break;
              case "textarea":
                jf(i, o);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Bn(i, !!o.multiple, y, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Bn(i, !!o.multiple, o.defaultValue, !0)
                      : Bn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Qr] = o;
          } catch (w) {
            ue(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((it(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (w) {
          ue(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (it(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $r(t.containerInfo);
        } catch (w) {
          ue(e, e.return, w);
        }
      break;
    case 4:
      it(t, e), mt(e);
      break;
    case 13:
      it(t, e),
        mt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Yu = de())),
        r & 4 && wc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (a = Pe) || c), it(t, e), (Pe = a)) : it(t, e),
        mt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (p = M = c; M !== null; ) {
              switch (((h = M), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, h, h.return);
                  break;
                case 1:
                  An(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      ue(r, n, w);
                    }
                  }
                  break;
                case 5:
                  An(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Ec(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (M = y)) : Ec(p);
            }
            c = c.sibling;
          }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                (i = p.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = p.stateNode),
                      (u = p.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = Af("display", s)));
              } catch (w) {
                ue(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (c === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (w) {
                ue(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), (p = p.return);
          }
          c === p && (c = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      it(t, e), mt(e), r & 4 && wc(e);
      break;
    case 21:
      break;
    default:
      it(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (jr(i, ""), (r.flags &= -33));
          var o = gc(e);
          Bl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = gc(e);
          Ul(e, l, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      ue(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xv(e, t, n) {
  (M = e), pp(e);
}
function pp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ri;
      if (!s) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || Pe;
        l = Ri;
        var a = Pe;
        if (((Ri = s), (Pe = u) && !a))
          for (M = i; M !== null; )
            (s = M),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Oc(i)
                : u !== null
                ? ((u.return = s), (M = u))
                : Oc(i);
        for (; o !== null; ) (M = o), pp(o), (o = o.sibling);
        (M = i), (Ri = l), (Pe = a);
      }
      Sc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (M = o)) : Sc(e);
  }
}
function Sc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pe || Wo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : st(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ic(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ic(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var p = c.dehydrated;
                    p !== null && $r(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Pe || (t.flags & 512 && bl(t));
      } catch (h) {
        ue(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Ec(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Oc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wo(4, t);
          } catch (u) {
            ue(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ue(t, i, u);
            }
          }
          var o = t.return;
          try {
            bl(t);
          } catch (u) {
            ue(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bl(t);
          } catch (u) {
            ue(t, s, u);
          }
      }
    } catch (u) {
      ue(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (M = l);
      break;
    }
    M = t.return;
  }
}
var Yv = Math.ceil,
  wo = Dt.ReactCurrentDispatcher,
  Ku = Dt.ReactCurrentOwner,
  et = Dt.ReactCurrentBatchConfig,
  V = 0,
  ye = null,
  pe = null,
  we = 0,
  Be = 0,
  $n = on(0),
  me = 0,
  Yr = null,
  Sn = 0,
  qo = 0,
  Xu = 0,
  kr = null,
  je = null,
  Yu = 0,
  er = 1 / 0,
  Ot = null,
  So = !1,
  Hl = null,
  Yt = null,
  Ti = !1,
  Ht = null,
  Eo = 0,
  Nr = 0,
  Ql = null,
  Qi = -1,
  Vi = 0;
function De() {
  return V & 6 ? de() : Qi !== -1 ? Qi : (Qi = de());
}
function Gt(e) {
  return e.mode & 1
    ? V & 2 && we !== 0
      ? we & -we
      : Fv.transition !== null
      ? (Vi === 0 && (Vi = Gf()), Vi)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : id(e.type))),
        e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < Nr) throw ((Nr = 0), (Ql = null), Error(R(185)));
  ni(e, n, r),
    (!(V & 2) || e !== ye) &&
      (e === ye && (!(V & 2) && (qo |= n), me === 4 && Ut(e, we)),
      $e(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((er = de() + 500), Ho && sn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  Fm(e, t);
  var r = ro(e, e === ye ? we : 0);
  if (r === 0)
    n !== null && Da(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Da(n), t === 1))
      e.tag === 0 ? Mv(Cc.bind(null, e)) : Cd(Cc.bind(null, e)),
        Tv(function () {
          !(V & 6) && sn();
        }),
        (n = null);
    else {
      switch (Jf(r)) {
        case 1:
          n = Ou;
          break;
        case 4:
          n = Xf;
          break;
        case 16:
          n = no;
          break;
        case 536870912:
          n = Yf;
          break;
        default:
          n = no;
      }
      n = Ep(n, hp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function hp(e, t) {
  if (((Qi = -1), (Vi = 0), V & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = ro(e, e === ye ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oo(e, r);
  else {
    t = r;
    var i = V;
    V |= 2;
    var o = vp();
    (ye !== e || we !== t) && ((Ot = null), (er = de() + 500), pn(e, t));
    do
      try {
        Zv();
        break;
      } catch (l) {
        mp(e, l);
      }
    while (!0);
    ju(),
      (wo.current = o),
      (V = i),
      pe !== null ? (t = 0) : ((ye = null), (we = 0), (t = me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = yl(e)), i !== 0 && ((r = i), (t = Vl(e, i)))), t === 1)
    )
      throw ((n = Yr), pn(e, 0), Ut(e, r), $e(e, de()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Gv(i) &&
          ((t = Oo(e, r)),
          t === 2 && ((o = yl(e)), o !== 0 && ((r = o), (t = Vl(e, o)))),
          t === 1))
      )
        throw ((n = Yr), pn(e, 0), Ut(e, r), $e(e, de()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          un(e, je, Ot);
          break;
        case 3:
          if (
            (Ut(e, r), (r & 130023424) === r && ((t = Yu + 500 - de()), 10 < t))
          ) {
            if (ro(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Pl(un.bind(null, e, je, Ot), t);
            break;
          }
          un(e, je, Ot);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - at(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Yv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pl(un.bind(null, e, je, Ot), r);
            break;
          }
          un(e, je, Ot);
          break;
        case 5:
          un(e, je, Ot);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return $e(e, de()), e.callbackNode === n ? hp.bind(null, e) : null;
}
function Vl(e, t) {
  var n = kr;
  return (
    e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256),
    (e = Oo(e, t)),
    e !== 2 && ((t = je), (je = n), t !== null && Wl(t)),
    e
  );
}
function Wl(e) {
  je === null ? (je = e) : je.push.apply(je, e);
}
function Gv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!dt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ut(e, t) {
  for (
    t &= ~Xu,
      t &= ~qo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - at(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Cc(e) {
  if (V & 6) throw Error(R(327));
  qn();
  var t = ro(e, 0);
  if (!(t & 1)) return $e(e, de()), null;
  var n = Oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yl(e);
    r !== 0 && ((t = r), (n = Vl(e, r)));
  }
  if (n === 1) throw ((n = Yr), pn(e, 0), Ut(e, t), $e(e, de()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, je, Ot),
    $e(e, de()),
    null
  );
}
function Gu(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((er = de() + 500), Ho && sn());
  }
}
function En(e) {
  Ht !== null && Ht.tag === 0 && !(V & 6) && qn();
  var t = V;
  V |= 1;
  var n = et.transition,
    r = G;
  try {
    if (((et.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (et.transition = n), (V = t), !(V & 6) && sn();
  }
}
function Ju() {
  (Be = $n.current), re($n);
}
function pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Rv(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((Mu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && uo();
          break;
        case 3:
          Jn(), re(Ie), re(_e), Uu();
          break;
        case 5:
          bu(r);
          break;
        case 4:
          Jn();
          break;
        case 13:
          re(oe);
          break;
        case 19:
          re(oe);
          break;
        case 10:
          zu(r.type._context);
          break;
        case 22:
        case 23:
          Ju();
      }
      n = n.return;
    }
  if (
    ((ye = e),
    (pe = e = Jt(e.current, null)),
    (we = Be = t),
    (me = 0),
    (Yr = null),
    (Xu = qo = Sn = 0),
    (je = kr = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function mp(e, t) {
  do {
    var n = pe;
    try {
      if ((ju(), (Ui.current = go), yo)) {
        for (var r = se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        yo = !1;
      }
      if (
        ((wn = 0),
        (ve = he = se = null),
        (Rr = !1),
        (qr = 0),
        (Ku.current = null),
        n === null || n.return === null)
      ) {
        (me = 1), (Yr = t), (pe = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = we),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = l,
            p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = cc(s);
          if (y !== null) {
            (y.flags &= -257),
              fc(y, s, l, o, t),
              y.mode & 1 && ac(o, a, t),
              (t = y),
              (u = a);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ac(o, a, t), Zu();
              break e;
            }
            u = Error(R(426));
          }
        } else if (ie && l.mode & 1) {
          var _ = cc(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              fc(_, s, l, o, t),
              Fu(Zn(u, l));
            break e;
          }
        }
        (o = u = Zn(u, l)),
          me !== 4 && (me = 2),
          kr === null ? (kr = [o]) : kr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Jd(o, u, t);
              rc(o, m);
              break e;
            case 1:
              l = u;
              var f = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Yt === null || !Yt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Zd(o, l, t);
                rc(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      gp(n);
    } catch (S) {
      (t = S), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vp() {
  var e = wo.current;
  return (wo.current = go), e === null ? go : e;
}
function Zu() {
  (me === 0 || me === 3 || me === 2) && (me = 4),
    ye === null || (!(Sn & 268435455) && !(qo & 268435455)) || Ut(ye, we);
}
function Oo(e, t) {
  var n = V;
  V |= 2;
  var r = vp();
  (ye !== e || we !== t) && ((Ot = null), pn(e, t));
  do
    try {
      Jv();
      break;
    } catch (i) {
      mp(e, i);
    }
  while (!0);
  if ((ju(), (V = n), (wo.current = r), pe !== null)) throw Error(R(261));
  return (ye = null), (we = 0), me;
}
function Jv() {
  for (; pe !== null; ) yp(pe);
}
function Zv() {
  for (; pe !== null && !xm(); ) yp(pe);
}
function yp(e) {
  var t = Sp(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? gp(e) : (pe = t),
    (Ku.current = null);
}
function gp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Wv(n, t)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (me = 6), (pe = null);
        return;
      }
    } else if (((n = Vv(n, t, Be)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function un(e, t, n) {
  var r = G,
    i = et.transition;
  try {
    (et.transition = null), (G = 1), ey(e, t, n, r);
  } finally {
    (et.transition = i), (G = r);
  }
  return null;
}
function ey(e, t, n, r) {
  do qn();
  while (Ht !== null);
  if (V & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Lm(e, o),
    e === ye && ((pe = ye = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ti ||
      ((Ti = !0),
      Ep(no, function () {
        return qn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = et.transition), (et.transition = null);
    var s = G;
    G = 1;
    var l = V;
    (V |= 4),
      (Ku.current = null),
      Kv(e, n),
      dp(n, e),
      Sv(Cl),
      (io = !!Ol),
      (Cl = Ol = null),
      (e.current = n),
      Xv(n),
      Pm(),
      (V = l),
      (G = s),
      (et.transition = o);
  } else e.current = n;
  if (
    (Ti && ((Ti = !1), (Ht = e), (Eo = i)),
    (o = e.pendingLanes),
    o === 0 && (Yt = null),
    Tm(n.stateNode),
    $e(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (So) throw ((So = !1), (e = Hl), (Hl = null), e);
  return (
    Eo & 1 && e.tag !== 0 && qn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ql ? Nr++ : ((Nr = 0), (Ql = e))) : (Nr = 0),
    sn(),
    null
  );
}
function qn() {
  if (Ht !== null) {
    var e = Jf(Eo),
      t = et.transition,
      n = G;
    try {
      if (((et.transition = null), (G = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (Eo = 0), V & 6)) throw Error(R(331));
        var i = V;
        for (V |= 4, M = e.current; M !== null; ) {
          var o = M,
            s = o.child;
          if (M.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var a = l[u];
                for (M = a; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, c, o);
                  }
                  var p = c.child;
                  if (p !== null) (p.return = c), (M = p);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var h = c.sibling,
                        y = c.return;
                      if ((ap(c), c === a)) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (M = h);
                        break;
                      }
                      M = y;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var _ = w.sibling;
                    (w.sibling = null), (w = _);
                  } while (w !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (M = s);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (M = m);
                break e;
              }
              M = o.return;
            }
        }
        var f = e.current;
        for (M = f; M !== null; ) {
          s = M;
          var d = s.child;
          if (s.subtreeFlags & 2064 && d !== null) (d.return = s), (M = d);
          else
            e: for (s = f; M !== null; ) {
              if (((l = M), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wo(9, l);
                  }
                } catch (S) {
                  ue(l, l.return, S);
                }
              if (l === s) {
                M = null;
                break e;
              }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (M = g);
                break e;
              }
              M = l.return;
            }
        }
        if (
          ((V = i), sn(), gt && typeof gt.onPostCommitFiberRoot == "function")
        )
          try {
            gt.onPostCommitFiberRoot(Ao, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (et.transition = t);
    }
  }
  return !1;
}
function xc(e, t, n) {
  (t = Zn(n, t)),
    (t = Jd(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = De()),
    e !== null && (ni(e, 1, t), $e(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) xc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yt === null || !Yt.has(r)))
        ) {
          (e = Zn(n, e)),
            (e = Zd(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = De()),
            t !== null && (ni(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ty(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ye === e &&
      (we & n) === n &&
      (me === 4 || (me === 3 && (we & 130023424) === we && 500 > de() - Yu)
        ? pn(e, 0)
        : (Xu |= n)),
    $e(e, t);
}
function wp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gi), (gi <<= 1), !(gi & 130023424) && (gi = 4194304))
      : (t = 1));
  var n = De();
  (e = kt(e, t)), e !== null && (ni(e, t, n), $e(e, n));
}
function ny(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), wp(e, n);
}
function ry(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), wp(e, n);
}
var Sp;
Sp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), Qv(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), ie && t.flags & 1048576 && xd(t, fo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Hi(e, t), (e = t.pendingProps);
      var i = Xn(t, _e.current);
      Wn(t, n), (i = Hu(null, t, r, e, i, n));
      var o = Qu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((o = !0), ao(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Au(t),
            (i.updater = Vo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ml(t, r, e, n),
            (t = jl(null, t, r, !0, o, n)))
          : ((t.tag = 0), ie && o && Du(t), ke(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = oy(r)),
          (e = st(r, e)),
          i)
        ) {
          case 0:
            t = Ll(null, t, r, e, n);
            break e;
          case 1:
            t = hc(null, t, r, e, n);
            break e;
          case 11:
            t = dc(null, t, r, e, n);
            break e;
          case 14:
            t = pc(null, t, r, st(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        Ll(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        hc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((rp(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Nd(e, t),
          mo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Zn(Error(R(423)), t)), (t = mc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Zn(Error(R(424)), t)), (t = mc(e, t, r, n, i));
            break e;
          } else
            for (
              Qe = Kt(t.stateNode.containerInfo.firstChild),
                We = t,
                ie = !0,
                ut = null,
                n = Td(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === i)) {
            t = Nt(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dd(t),
        e === null && kl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        xl(r, i) ? (s = null) : o !== null && xl(r, o) && (t.flags |= 32),
        np(e, t),
        ke(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && kl(t), null;
    case 13:
      return ip(e, t, n);
    case 4:
      return (
        $u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Gn(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        dc(e, t, r, i, n)
      );
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ee(po, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (dt(o.value, s)) {
            if (o.children === i.children && !Ie.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = _t(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Nl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Nl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ke(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (i = nt(i)),
        (r = r(i)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = st(r, t.pendingProps)),
        (i = st(r.type, i)),
        pc(e, t, r, i, n)
      );
    case 15:
      return ep(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : st(r, i)),
        Hi(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), ao(t)) : (e = !1),
        Wn(t, n),
        Gd(t, r, i),
        Ml(t, r, i, n),
        jl(null, t, r, !0, e, n)
      );
    case 19:
      return op(e, t, n);
    case 22:
      return tp(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Ep(e, t) {
  return Kf(e, t);
}
function iy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ze(e, t, n, r) {
  return new iy(e, t, n, r);
}
function ea(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function oy(e) {
  if (typeof e == "function") return ea(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wu)) return 11;
    if (e === Su) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) ea(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case kn:
        return hn(n.children, i, o, t);
      case gu:
        (s = 8), (i |= 8);
        break;
      case nl:
        return (
          (e = Ze(12, n, t, i | 2)), (e.elementType = nl), (e.lanes = o), e
        );
      case rl:
        return (e = Ze(13, n, t, i)), (e.elementType = rl), (e.lanes = o), e;
      case il:
        return (e = Ze(19, n, t, i)), (e.elementType = il), (e.lanes = o), e;
      case Df:
        return Ko(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case kf:
              s = 10;
              break e;
            case Nf:
              s = 9;
              break e;
            case wu:
              s = 11;
              break e;
            case Su:
              s = 14;
              break e;
            case It:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ze(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function hn(e, t, n, r) {
  return (e = Ze(7, e, r, t)), (e.lanes = n), e;
}
function Ko(e, t, n, r) {
  return (
    (e = Ze(22, e, r, t)),
    (e.elementType = Df),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $s(e, t, n) {
  return (e = Ze(6, e, null, t)), (e.lanes = n), e;
}
function bs(e, t, n) {
  return (
    (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function sy(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ss(0)),
    (this.expirationTimes = Ss(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ss(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ta(e, t, n, r, i, o, s, l, u) {
  return (
    (e = new sy(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ze(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Au(o),
    e
  );
}
function ly(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Op(e) {
  if (!e) return nn;
  e = e._reactInternals;
  e: {
    if (xn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return Od(e, n, t);
  }
  return t;
}
function Cp(e, t, n, r, i, o, s, l, u) {
  return (
    (e = ta(n, r, !0, e, i, o, s, l, u)),
    (e.context = Op(null)),
    (n = e.current),
    (r = De()),
    (i = Gt(n)),
    (o = _t(r, i)),
    (o.callback = t ?? null),
    Xt(n, o, i),
    (e.current.lanes = i),
    ni(e, i, r),
    $e(e, r),
    e
  );
}
function Xo(e, t, n, r) {
  var i = t.current,
    o = De(),
    s = Gt(i);
  return (
    (n = Op(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _t(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(i, t, s)),
    e !== null && (ct(e, i, s, o), bi(e, i, s)),
    s
  );
}
function Co(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function na(e, t) {
  Pc(e, t), (e = e.alternate) && Pc(e, t);
}
function uy() {
  return null;
}
var xp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ra(e) {
  this._internalRoot = e;
}
Yo.prototype.render = ra.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Xo(e, t, null, null);
};
Yo.prototype.unmount = ra.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function () {
      Xo(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function Yo(e) {
  this._internalRoot = e;
}
Yo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = td();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++);
    bt.splice(n, 0, e), n === 0 && rd(e);
  }
};
function ia(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Go(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _c() {}
function ay(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Co(s);
        o.call(a);
      };
    }
    var s = Cp(t, r, e, 0, null, !1, !1, "", _c);
    return (
      (e._reactRootContainer = s),
      (e[Tt] = s.current),
      Br(e.nodeType === 8 ? e.parentNode : e),
      En(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var a = Co(u);
      l.call(a);
    };
  }
  var u = ta(e, 0, !1, null, null, !1, !1, "", _c);
  return (
    (e._reactRootContainer = u),
    (e[Tt] = u.current),
    Br(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      Xo(t, u, n, r);
    }),
    u
  );
}
function Jo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = Co(s);
        l.call(u);
      };
    }
    Xo(t, s, e, i);
  } else s = ay(n, t, e, i, r);
  return Co(s);
}
Zf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wr(t.pendingLanes);
        n !== 0 &&
          (Cu(t, n | 1), $e(t, de()), !(V & 6) && ((er = de() + 500), sn()));
      }
      break;
    case 13:
      En(function () {
        var r = kt(e, 1);
        if (r !== null) {
          var i = De();
          ct(r, e, 1, i);
        }
      }),
        na(e, 1);
  }
};
xu = function (e) {
  if (e.tag === 13) {
    var t = kt(e, 134217728);
    if (t !== null) {
      var n = De();
      ct(t, e, 134217728, n);
    }
    na(e, 134217728);
  }
};
ed = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = kt(e, t);
    if (n !== null) {
      var r = De();
      ct(n, e, t, r);
    }
    na(e, t);
  }
};
td = function () {
  return G;
};
nd = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
hl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ll(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Bo(r);
            if (!i) throw Error(R(90));
            Ff(r), ll(r, i);
          }
        }
      }
      break;
    case "textarea":
      jf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
Bf = Gu;
Hf = En;
var cy = { usingClientEntryPoint: !1, Events: [ii, Fn, Bo, bf, Uf, Gu] },
  pr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  fy = {
    bundleType: pr.bundleType,
    version: pr.version,
    rendererPackageName: pr.rendererPackageName,
    rendererConfig: pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: pr.findFiberByHostInstance || uy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ki.isDisabled && ki.supportsFiber)
    try {
      (Ao = ki.inject(fy)), (gt = ki);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cy;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ia(t)) throw Error(R(200));
  return ly(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!ia(e)) throw Error(R(299));
  var n = !1,
    r = "",
    i = xp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ta(e, 1, !1, null, null, n, !1, r, i)),
    (e[Tt] = t.current),
    Br(e.nodeType === 8 ? e.parentNode : e),
    new ra(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = Wf(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return En(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Go(t)) throw Error(R(200));
  return Jo(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!ia(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = xp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Cp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Tt] = t.current),
    Br(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Yo(t);
};
Xe.render = function (e, t, n) {
  if (!Go(t)) throw Error(R(200));
  return Jo(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Go(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (En(function () {
        Jo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = Gu;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Go(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Jo(e, t, n, !1, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Pp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp);
    } catch (e) {
      console.error(e);
    }
}
Pp(), (Pf.exports = Xe);
var Zo = Pf.exports;
const dy = pf(Zo);
var Rc = Zo;
(el.createRoot = Rc.createRoot), (el.hydrateRoot = Rc.hydrateRoot);
var _p = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Tc = I.createContext && I.createContext(_p),
  py = ["attr", "size", "title"];
function hy(e, t) {
  if (e == null) return {};
  var n = my(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function my(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function xo() {
  return (
    (xo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xo.apply(this, arguments)
  );
}
function kc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kc(Object(n), !0).forEach(function (r) {
          vy(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : kc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function vy(e, t, n) {
  return (
    (t = yy(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function yy(e) {
  var t = gy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rp(e) {
  return (
    e &&
    e.map((t, n) => I.createElement(t.tag, Po({ key: n }, t.attr), Rp(t.child)))
  );
}
function Mt(e) {
  return (t) =>
    I.createElement(wy, xo({ attr: Po({}, e.attr) }, t), Rp(e.child));
}
function wy(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      s = hy(e, py),
      l = i || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      I.createElement(
        "svg",
        xo(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: u,
            style: Po(Po({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && I.createElement("title", null, o),
        e.children
      )
    );
  };
  return Tc !== void 0
    ? I.createElement(Tc.Consumer, null, (n) => t(n))
    : t(_p);
}
function Sy(e) {
  return Mt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M209.094 19.53L150.53 35.22l234.19 234.186 11.436 11.47-15.625 4.187-182.25 48.78L184 387.032l307.78-82.467.408-1.5L209.094 19.53zm-77.75 22.94L25.78 436.31l45.376 45.375 87.375-326.062 4.19-15.656 11.436 11.468 133.688 133.718 52.22-13.97L131.343 42.47zm41.062 133.655L87.53 492.845l381.126-102.126 17.53-65.314L173.22 409.28l-15.657 4.19 4.218-15.658 49.126-183.156-38.5-38.53z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ey(e) {
  return Mt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "32",
          d: "M380.93 57.37A32 32 0 0 0 358.3 48H94.22A46.21 46.21 0 0 0 48 94.22v323.56A46.21 46.21 0 0 0 94.22 464h323.56A46.36 46.36 0 0 0 464 417.78V153.7a32 32 0 0 0-9.37-22.63zM256 416a64 64 0 1 1 64-64 63.92 63.92 0 0 1-64 64zm48-224H112a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16z",
        },
        child: [],
      },
    ],
  })(e);
}
const Oy = "/images/alx-logo-white.png",
  Cy = { width: "55px" },
  xy = {
    width: "500px",
    backgroundColor: "transparent",
    border: "1px solid #4f5966",
    outline: "none",
    color: "white",
    padding: "6px",
    fontSize: "12px",
    borderRadius: "5px",
  };
function Py({ onSaveButtonClick: e, onRunButtonClick: t, onTopBarSearch: n }) {
  function r(i) {
    i.key === "Enter" &&
      i.target.value !== "" &&
      (n(i.target.value), (i.target.value = ""));
  }
  return D.jsxs("div", {
    className:
      "w-full h-12 flex-container items-center justify-between bg-main  py-5 px-1",
    children: [
      D.jsx("img", { src: Oy, style: Cy, className: "" }),
      D.jsx("input", {
        type: "text",
        className: "",
        style: xy,
        onKeyDown: r,
        placeholder: "Find File",
      }),
      D.jsxs("div", {
        className: "cursor-pointer flex justify-center items-center",
        children: [
          D.jsx(Sy, {
            title: "run",
            className:
              "text-2xl mr-4 text-green-500 cursor-pointer opacity-25 hover:opacity-100",
            onClick: t,
          }),
          D.jsx(Ey, {
            title: "Save File",
            className:
              "text-2xl mr-4 text-blue-500 cursor-pointer opacity-25 hover:opacity-100",
            onClick: e,
          }),
        ],
      }),
    ],
  });
}
function Tp(e) {
  return Mt({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z",
        },
        child: [],
      },
    ],
  })(e);
}
function _y(e) {
  return Mt({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ry(e) {
  return Mt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ty(e) {
  return Mt({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257.981 272.971L63.638 467.314c-9.373 9.373-24.569 9.373-33.941 0L7.029 444.647c-9.357-9.357-9.375-24.522-.04-33.901L161.011 256 6.99 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L257.981 239.03c9.373 9.372 9.373 24.568 0 33.941zM640 456v-32c0-13.255-10.745-24-24-24H312c-13.255 0-24 10.745-24 24v32c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z",
        },
        child: [],
      },
    ],
  })(e);
}
function kp(e) {
  return Mt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
        },
        child: [],
      },
    ],
  })(e);
}
function ky(e) {
  return Mt({
    tag: "svg",
    attr: { viewBox: "0 0 16 16", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.5 1.1l3.4 3.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9 2v3h2.9L9 2zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3v3z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ny(e) {
  return Mt({
    tag: "svg",
    attr: { viewBox: "0 0 16 16", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.5 2H7.71l-.85-.85L6.51 1h-5l-.5.5v11l.5.5H7v-1H1.99V6h4.49l.35-.15.86-.86H14v1.5l-.001.51h1.011V2.5L14.5 2zm-.51 2h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14l-.01.99zM13 16h-1v-3H9v-1h3V9h1v3h3v1h-3v3z",
        },
        child: [],
      },
    ],
  })(e);
}
const Dy = { fontSize: "12px" };
function My({ file: e, setNavFiles: t, onDelete: n, DND: r }) {
  const i = (o) => {
    o.stopPropagation(), n(e);
  };
  return D.jsxs("div", {
    className:
      "file p-1 text-slate-500 cursor-pointer flex items-center bg-transform pl-5",
    style: Dy,
    draggable: !0,
    onDoubleClick: () => r.handleDoubleClick(e),
    onDragStart: () => r.handleDragStart(e),
    onDrop: () => r.handleDrop(e),
    onDragOver: r.handleDragOver,
    onClick: () => {
      t(e, !0);
    },
    children: [
      D.jsx(Tp, { className: "text-sky-500 mr-1 my-1" }),
      r.getFileInEdit() === e &&
        D.jsx("input", {
          className:
            "border-none outline-none bg-main-transparent text-slate-500",
          type: "text",
          defaultValue: e.name,
          autoFocus: !0,
          onBlur: (o) => r.handleFileEdit(o.target.value),
          onKeyDown: (o) => {
            o.key === "Enter" && r.handleFileEdit(o.target.value);
          },
        }),
      r.getFileInEdit() !== e && e.name,
      D.jsx("span", {
        className: "ml-auto",
        children: D.jsx(kp, {
          className:
            "text-red-500 cursor-pointer text-xs opacity-10 hover:opacity-100",
          onClick: i,
        }),
      }),
    ],
  });
}
function Np({ folder: e, setNavFiles: t, onDelete: n, DND: r }) {
  const [i, o] = k.useState(!1),
    s = () => {
      o(!i);
    },
    l = (h) => {
      h.stopPropagation(), n(e);
    },
    u = (h) => {
      h.stopPropagation(), r.newFileCreation(e, !1);
    },
    a = (h) => {
      h.stopPropagation(), r.newFileCreation(e, !0);
    },
    c = e.parent
      ? { draggable: !0, onDragStart: () => r.handleDragStart(e) }
      : { draggable: !1 };
  function p() {
    if (r.getFileInEdit() === e) return "";
    const h = r.getFileCreation();
    return h.file === e ? (h.isDir, "") : e.name;
  }
  return D.jsxs("div", {
    children: [
      D.jsxs("div", {
        className:
          "pl-5 p-1 flex items-center gap-2 cursor-pointer text-slate-500 text-sm bg-transform w-full",
        onClick: () => r.getFileInEdit() !== e && s(),
        ...c,
        onDoubleClick: () => r.handleDoubleClick(e),
        onDrop: () => r.handleDrop(e),
        onDragOver: r.handleDragOver,
        children: [
          i
            ? D.jsx(_y, { className: "text-sm mr-1 text-amber-300" })
            : D.jsx(Ry, { className: "mr-1 text-amber-300" }),
          " ",
          r.getFileInEdit() === e &&
            !r.getFileCreation().file &&
            D.jsx("input", {
              className:
                "border-none outline-none bg-main-transparent text-slate-500",
              type: "text",
              defaultValue: e.name,
              autoFocus: !0,
              onBlur: (h) => r.handleFileEdit(h.target.value),
              onKeyDown: (h) => {
                h.key === "Enter" && r.handleFileEdit(h.target.value);
              },
            }),
          r.getFileInEdit() !== e && p(),
          r.getFileCreation().file === e &&
            D.jsx("input", {
              className:
                "border-none outline-none bg-main-transparent text-slate-500",
              type: "text",
              autoFocus: !0,
              onBlur: (h) => r.handleFileCreation(h.target.value),
              onKeyDown: (h) => {
                h.key === "Enter" && r.handleFileCreation(h.target.value);
              },
            }),
          D.jsxs("span", {
            className: "ml-auto flex flex-row-reverse items-center gap-2",
            children: [
              D.jsx(kp, {
                className:
                  "text-red-500 cursor-pointer text-xs opacity-10 hover:opacity-100",
                onClick: l,
              }),
              D.jsx(ky, {
                className:
                  "text-green-500 cursor-pointer text-xs opacity-25 hover:opacity-100",
                onClick: u,
              }),
              D.jsx(Ny, {
                className:
                  "text-blue-500 cursor-pointer text-xs opacity-25 hover:opacity-100",
                onClick: a,
              }),
            ],
          }),
        ],
      }),
      i &&
        D.jsx("div", {
          className: "folder-contents pl-5",
          children: e.childs.map((h) =>
            h.dir && h.match
              ? D.jsx(
                  Np,
                  { folder: h, setNavFiles: t, onDelete: n, DND: r },
                  h.id
                )
              : h.match &&
                D.jsx(
                  My,
                  { file: h, setNavFiles: t, onDelete: n, DND: r },
                  h.id
                )
          ),
        }),
    ],
  });
}
function Dp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Fy } = Object.prototype,
  { getPrototypeOf: oa } = Object,
  es = ((e) => (t) => {
    const n = Fy.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  pt = (e) => ((e = e.toLowerCase()), (t) => es(t) === e),
  ts = (e) => (t) => typeof t === e,
  { isArray: ir } = Array,
  Gr = ts("undefined");
function Ly(e) {
  return (
    e !== null &&
    !Gr(e) &&
    e.constructor !== null &&
    !Gr(e.constructor) &&
    tt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Mp = pt("ArrayBuffer");
function jy(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Mp(e.buffer)),
    t
  );
}
const zy = ts("string"),
  tt = ts("function"),
  Fp = ts("number"),
  ns = (e) => e !== null && typeof e == "object",
  Iy = (e) => e === !0 || e === !1,
  qi = (e) => {
    if (es(e) !== "object") return !1;
    const t = oa(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Ay = pt("Date"),
  $y = pt("File"),
  by = pt("Blob"),
  Uy = pt("FileList"),
  By = (e) => ns(e) && tt(e.pipe),
  Hy = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (tt(e.append) &&
          ((t = es(e)) === "formdata" ||
            (t === "object" &&
              tt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Qy = pt("URLSearchParams"),
  [Vy, Wy, qy, Ky] = ["ReadableStream", "Request", "Response", "Headers"].map(
    pt
  ),
  Xy = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function si(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), ir(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let l;
    for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function Lp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const jp =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  zp = (e) => !Gr(e) && e !== jp;
function ql() {
  const { caseless: e } = (zp(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && Lp(t, i)) || i;
      qi(t[o]) && qi(r)
        ? (t[o] = ql(t[o], r))
        : qi(r)
        ? (t[o] = ql({}, r))
        : ir(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && si(arguments[r], n);
  return t;
}
const Yy = (e, t, n, { allOwnKeys: r } = {}) => (
    si(
      t,
      (i, o) => {
        n && tt(i) ? (e[o] = Dp(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Gy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Jy = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Zy = (e, t, n, r) => {
    let i, o, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && oa(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  eg = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  tg = (e) => {
    if (!e) return null;
    if (ir(e)) return e;
    let t = e.length;
    if (!Fp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  ng = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && oa(Uint8Array)),
  rg = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  ig = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  og = pt("HTMLFormElement"),
  sg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Nc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  lg = pt("RegExp"),
  Ip = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    si(n, (i, o) => {
      let s;
      (s = t(i, o, e)) !== !1 && (r[o] = s || i);
    }),
      Object.defineProperties(e, r);
  },
  ug = (e) => {
    Ip(e, (t, n) => {
      if (tt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (tt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  ag = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return ir(e) ? r(e) : r(String(e).split(t)), n;
  },
  cg = () => {},
  fg = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Us = "abcdefghijklmnopqrstuvwxyz",
  Dc = "0123456789",
  Ap = { DIGIT: Dc, ALPHA: Us, ALPHA_DIGIT: Us + Us.toUpperCase() + Dc },
  dg = (e = 16, t = Ap.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function pg(e) {
  return !!(
    e &&
    tt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const hg = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (ns(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = ir(r) ? [] : {};
            return (
              si(r, (s, l) => {
                const u = n(s, i + 1);
                !Gr(u) && (o[l] = u);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  mg = pt("AsyncFunction"),
  vg = (e) => e && (ns(e) || tt(e)) && tt(e.then) && tt(e.catch),
  C = {
    isArray: ir,
    isArrayBuffer: Mp,
    isBuffer: Ly,
    isFormData: Hy,
    isArrayBufferView: jy,
    isString: zy,
    isNumber: Fp,
    isBoolean: Iy,
    isObject: ns,
    isPlainObject: qi,
    isReadableStream: Vy,
    isRequest: Wy,
    isResponse: qy,
    isHeaders: Ky,
    isUndefined: Gr,
    isDate: Ay,
    isFile: $y,
    isBlob: by,
    isRegExp: lg,
    isFunction: tt,
    isStream: By,
    isURLSearchParams: Qy,
    isTypedArray: ng,
    isFileList: Uy,
    forEach: si,
    merge: ql,
    extend: Yy,
    trim: Xy,
    stripBOM: Gy,
    inherits: Jy,
    toFlatObject: Zy,
    kindOf: es,
    kindOfTest: pt,
    endsWith: eg,
    toArray: tg,
    forEachEntry: rg,
    matchAll: ig,
    isHTMLForm: og,
    hasOwnProperty: Nc,
    hasOwnProp: Nc,
    reduceDescriptors: Ip,
    freezeMethods: ug,
    toObjectSet: ag,
    toCamelCase: sg,
    noop: cg,
    toFiniteNumber: fg,
    findKey: Lp,
    global: jp,
    isContextDefined: zp,
    ALPHABET: Ap,
    generateString: dg,
    isSpecCompliantForm: pg,
    toJSONObject: hg,
    isAsyncFn: mg,
    isThenable: vg,
  };
function U(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
C.inherits(U, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: C.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const $p = U.prototype,
  bp = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  bp[e] = { value: e };
});
Object.defineProperties(U, bp);
Object.defineProperty($p, "isAxiosError", { value: !0 });
U.from = (e, t, n, r, i, o) => {
  const s = Object.create($p);
  return (
    C.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    U.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const yg = null;
function Kl(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Up(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Mc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Up(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function gg(e) {
  return C.isArray(e) && !e.some(Kl);
}
const wg = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function rs(e, t, n) {
  if (!C.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = C.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, _) {
        return !C.isUndefined(_[w]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    s = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
  if (!C.isFunction(i)) throw new TypeError("visitor must be a function");
  function a(v) {
    if (v === null) return "";
    if (C.isDate(v)) return v.toISOString();
    if (!u && C.isBlob(v))
      throw new U("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(v) || C.isTypedArray(v)
      ? u && typeof Blob == "function"
        ? new Blob([v])
        : Buffer.from(v)
      : v;
  }
  function c(v, w, _) {
    let m = v;
    if (v && !_ && typeof v == "object") {
      if (C.endsWith(w, "{}"))
        (w = r ? w : w.slice(0, -2)), (v = JSON.stringify(v));
      else if (
        (C.isArray(v) && gg(v)) ||
        ((C.isFileList(v) || C.endsWith(w, "[]")) && (m = C.toArray(v)))
      )
        return (
          (w = Up(w)),
          m.forEach(function (d, g) {
            !(C.isUndefined(d) || d === null) &&
              t.append(
                s === !0 ? Mc([w], g, o) : s === null ? w : w + "[]",
                a(d)
              );
          }),
          !1
        );
    }
    return Kl(v) ? !0 : (t.append(Mc(_, w, o), a(v)), !1);
  }
  const p = [],
    h = Object.assign(wg, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: Kl,
    });
  function y(v, w) {
    if (!C.isUndefined(v)) {
      if (p.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      p.push(v),
        C.forEach(v, function (m, f) {
          (!(C.isUndefined(m) || m === null) &&
            i.call(t, m, C.isString(f) ? f.trim() : f, w, h)) === !0 &&
            y(m, w ? w.concat(f) : [f]);
        }),
        p.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function Fc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function sa(e, t) {
  (this._pairs = []), e && rs(e, this, t);
}
const Bp = sa.prototype;
Bp.append = function (t, n) {
  this._pairs.push([t, n]);
};
Bp.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Fc);
      }
    : Fc;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function Sg(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Hp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Sg,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = C.isURLSearchParams(t) ? t.toString() : new sa(t, n).toString(r)),
    o)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Lc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    C.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Qp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Eg = typeof URLSearchParams < "u" ? URLSearchParams : sa,
  Og = typeof FormData < "u" ? FormData : null,
  Cg = typeof Blob < "u" ? Blob : null,
  xg = {
    isBrowser: !0,
    classes: { URLSearchParams: Eg, FormData: Og, Blob: Cg },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  la = typeof window < "u" && typeof document < "u",
  Pg = ((e) => la && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  _g =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Rg = (la && window.location.href) || "http://localhost",
  Tg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: la,
        hasStandardBrowserEnv: Pg,
        hasStandardBrowserWebWorkerEnv: _g,
        origin: Rg,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ft = { ...Tg, ...xg };
function kg(e, t) {
  return rs(
    e,
    new ft.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return ft.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Ng(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function Dg(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Vp(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s),
      u = o >= n.length;
    return (
      (s = !s && C.isArray(i) ? i.length : s),
      u
        ? (C.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
        : ((!i[s] || !C.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && C.isArray(i[s]) && (i[s] = Dg(i[s])),
          !l)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, i) => {
        t(Ng(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function Mg(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const li = {
  transitional: Qp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = C.isObject(t);
      if ((o && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return i ? JSON.stringify(Vp(t)) : t;
      if (
        C.isArrayBuffer(t) ||
        C.isBuffer(t) ||
        C.isStream(t) ||
        C.isFile(t) ||
        C.isBlob(t) ||
        C.isReadableStream(t)
      )
        return t;
      if (C.isArrayBufferView(t)) return t.buffer;
      if (C.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return kg(t, this.formSerializer).toString();
        if ((l = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return rs(
            l ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), Mg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || li.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (C.isResponse(t) || C.isReadableStream(t)) return t;
      if (t && C.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? U.from(l, U.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ft.classes.FormData, Blob: ft.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  li.headers[e] = {};
});
const Fg = C.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Lg = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && Fg[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  jc = Symbol("internals");
function hr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ki(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(Ki) : String(e);
}
function jg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const zg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Bs(e, t, n, r, i) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!C.isString(t))) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function Ig(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ag(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
class be {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, u, a) {
      const c = hr(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const p = C.findKey(i, c);
      (!p || i[p] === void 0 || a === !0 || (a === void 0 && i[p] !== !1)) &&
        (i[p || u] = Ki(l));
    }
    const s = (l, u) => C.forEach(l, (a, c) => o(a, c, u));
    if (C.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (C.isString(t) && (t = t.trim()) && !zg(t)) s(Lg(t), n);
    else if (C.isHeaders(t)) for (const [l, u] of t.entries()) o(u, l, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = hr(t)), t)) {
      const r = C.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return jg(i);
        if (C.isFunction(n)) return n.call(this, i, r);
        if (C.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = hr(t)), t)) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Bs(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (((s = hr(s)), s)) {
        const l = C.findKey(r, s);
        l && (!n || Bs(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return C.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Bs(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      C.forEach(this, (i, o) => {
        const s = C.findKey(r, o);
        if (s) {
          (n[s] = Ki(i)), delete n[o];
          return;
        }
        const l = t ? Ig(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = Ki(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      C.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && C.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[jc] = this[jc] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const l = hr(s);
      r[l] || (Ag(i, s), (r[l] = !0));
    }
    return C.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
be.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.reduceDescriptors(be.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
C.freezeMethods(be);
function Hs(e, t) {
  const n = this || li,
    r = t || n,
    i = be.from(r.headers);
  let o = r.data;
  return (
    C.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function Wp(e) {
  return !!(e && e.__CANCEL__);
}
function or(e, t, n) {
  U.call(this, e ?? "canceled", U.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
C.inherits(or, U, { __CANCEL__: !0 });
function qp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new U(
          "Request failed with status code " + n.status,
          [U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function $g(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function bg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[o];
      s || (s = a), (n[i] = u), (r[i] = a);
      let p = o,
        h = 0;
      for (; p !== i; ) (h += n[p++]), (p = p % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), a - s < t)) return;
      const y = c && a - c;
      return y ? Math.round((h * 1e3) / y) : void 0;
    }
  );
}
function Ug(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function () {
    const s = this === !0,
      l = Date.now();
    if (s || l - n > r)
      return (
        i && (clearTimeout(i), (i = null)), (n = l), e.apply(null, arguments)
      );
    i ||
      (i = setTimeout(
        () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
        r - (l - n)
      ));
  };
}
const _o = (e, t, n = 3) => {
    let r = 0;
    const i = bg(50, 250);
    return Ug((o) => {
      const s = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        u = s - r,
        a = i(u),
        c = s <= l;
      r = s;
      const p = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && l && c ? (l - s) / a : void 0,
        event: o,
        lengthComputable: l != null,
      };
      (p[t ? "download" : "upload"] = !0), e(p);
    }, n);
  },
  Bg = ft.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(o) {
          let s = o;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (s) {
            const l = C.isString(s) ? i(s) : s;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  Hg = ft.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, o) {
          const s = [e + "=" + encodeURIComponent(t)];
          C.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            C.isString(r) && s.push("path=" + r),
            C.isString(i) && s.push("domain=" + i),
            o === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function Qg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Kp(e, t) {
  return e && !Qg(t) ? Vg(e, t) : t;
}
const zc = (e) => (e instanceof be ? { ...e } : e);
function On(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, p) {
    return C.isPlainObject(a) && C.isPlainObject(c)
      ? C.merge.call({ caseless: p }, a, c)
      : C.isPlainObject(c)
      ? C.merge({}, c)
      : C.isArray(c)
      ? c.slice()
      : c;
  }
  function i(a, c, p) {
    if (C.isUndefined(c)) {
      if (!C.isUndefined(a)) return r(void 0, a, p);
    } else return r(a, c, p);
  }
  function o(a, c) {
    if (!C.isUndefined(c)) return r(void 0, c);
  }
  function s(a, c) {
    if (C.isUndefined(c)) {
      if (!C.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function l(a, c, p) {
    if (p in t) return r(a, c);
    if (p in e) return r(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (a, c) => i(zc(a), zc(c), !0),
  };
  return (
    C.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const p = u[c] || i,
        h = p(e[c], t[c], c);
      (C.isUndefined(h) && p !== l) || (n[c] = h);
    }),
    n
  );
}
const Xp = (e) => {
    const t = On({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: s,
      auth: l,
    } = t;
    (t.headers = s = be.from(s)),
      (t.url = Hp(Kp(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let u;
    if (C.isFormData(n)) {
      if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((u = s.getContentType()) !== !1) {
        const [a, ...c] = u
          ? u
              .split(";")
              .map((p) => p.trim())
              .filter(Boolean)
          : [];
        s.setContentType([a || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      ft.hasStandardBrowserEnv &&
      (r && C.isFunction(r) && (r = r(t)), r || (r !== !1 && Bg(t.url)))
    ) {
      const a = i && o && Hg.read(o);
      a && s.set(i, a);
    }
    return t;
  },
  Wg = typeof XMLHttpRequest < "u",
  qg =
    Wg &&
    function (e) {
      return new Promise(function (n, r) {
        const i = Xp(e);
        let o = i.data;
        const s = be.from(i.headers).normalize();
        let { responseType: l } = i,
          u;
        function a() {
          i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener("abort", u);
        }
        let c = new XMLHttpRequest();
        c.open(i.method.toUpperCase(), i.url, !0), (c.timeout = i.timeout);
        function p() {
          if (!c) return;
          const y = be.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            w = {
              data:
                !l || l === "text" || l === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          qp(
            function (m) {
              n(m), a();
            },
            function (m) {
              r(m), a();
            },
            w
          ),
            (c = null);
        }
        "onloadend" in c
          ? (c.onloadend = p)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(p);
            }),
          (c.onabort = function () {
            c &&
              (r(new U("Request aborted", U.ECONNABORTED, i, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new U("Network Error", U.ERR_NETWORK, i, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let v = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = i.transitional || Qp;
            i.timeoutErrorMessage && (v = i.timeoutErrorMessage),
              r(
                new U(
                  v,
                  w.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
                  i,
                  c
                )
              ),
              (c = null);
          }),
          o === void 0 && s.setContentType(null),
          "setRequestHeader" in c &&
            C.forEach(s.toJSON(), function (v, w) {
              c.setRequestHeader(w, v);
            }),
          C.isUndefined(i.withCredentials) ||
            (c.withCredentials = !!i.withCredentials),
          l && l !== "json" && (c.responseType = i.responseType),
          typeof i.onDownloadProgress == "function" &&
            c.addEventListener("progress", _o(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", _o(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((u = (y) => {
              c &&
                (r(!y || y.type ? new or(null, e, c) : y),
                c.abort(),
                (c = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
        const h = $g(i.url);
        if (h && ft.protocols.indexOf(h) === -1) {
          r(new U("Unsupported protocol " + h + ":", U.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  Kg = (e, t) => {
    let n = new AbortController(),
      r;
    const i = function (u) {
      if (!r) {
        (r = !0), s();
        const a = u instanceof Error ? u : this.reason;
        n.abort(
          a instanceof U ? a : new or(a instanceof Error ? a.message : a)
        );
      }
    };
    let o =
      t &&
      setTimeout(() => {
        i(new U(`timeout ${t} of ms exceeded`, U.ETIMEDOUT));
      }, t);
    const s = () => {
      e &&
        (o && clearTimeout(o),
        (o = null),
        e.forEach((u) => {
          u &&
            (u.removeEventListener
              ? u.removeEventListener("abort", i)
              : u.unsubscribe(i));
        }),
        (e = null));
    };
    e.forEach((u) => u && u.addEventListener && u.addEventListener("abort", i));
    const { signal: l } = n;
    return (
      (l.unsubscribe = s),
      [
        l,
        () => {
          o && clearTimeout(o), (o = null);
        },
      ]
    );
  },
  Xg = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  Yg = async function* (e, t, n) {
    for await (const r of e)
      yield* Xg(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Ic = (e, t, n, r, i) => {
    const o = Yg(e, t, i);
    let s = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(l) {
          const { done: u, value: a } = await o.next();
          if (u) {
            l.close(), r();
            return;
          }
          let c = a.byteLength;
          n && n((s += c)), l.enqueue(new Uint8Array(a));
        },
        cancel(l) {
          return r(l), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ac = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  is =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Yp = is && typeof ReadableStream == "function",
  Xl =
    is &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Gg =
    Yp &&
    (() => {
      let e = !1;
      const t = new Request(ft.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  $c = 64 * 1024,
  Yl =
    Yp &&
    !!(() => {
      try {
        return C.isReadableStream(new Response("").body);
      } catch {}
    })(),
  Ro = { stream: Yl && ((e) => e.body) };
is &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ro[t] &&
        (Ro[t] = C.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new U(
                `Response type '${t}' is not supported`,
                U.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Jg = async (e) => {
    if (e == null) return 0;
    if (C.isBlob(e)) return e.size;
    if (C.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (C.isArrayBufferView(e)) return e.byteLength;
    if ((C.isURLSearchParams(e) && (e = e + ""), C.isString(e)))
      return (await Xl(e)).byteLength;
  },
  Zg = async (e, t) => {
    const n = C.toFiniteNumber(e.getContentLength());
    return n ?? Jg(t);
  },
  e0 =
    is &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: o,
        timeout: s,
        onDownloadProgress: l,
        onUploadProgress: u,
        responseType: a,
        headers: c,
        withCredentials: p = "same-origin",
        fetchOptions: h,
      } = Xp(e);
      a = a ? (a + "").toLowerCase() : "text";
      let [y, v] = i || o || s ? Kg([i, o], s) : [],
        w,
        _;
      const m = () => {
        !w &&
          setTimeout(() => {
            y && y.unsubscribe();
          }),
          (w = !0);
      };
      let f;
      try {
        if (
          u &&
          Gg &&
          n !== "get" &&
          n !== "head" &&
          (f = await Zg(c, r)) !== 0
        ) {
          let O = new Request(t, { method: "POST", body: r, duplex: "half" }),
            E;
          C.isFormData(r) &&
            (E = O.headers.get("content-type")) &&
            c.setContentType(E),
            O.body && (r = Ic(O.body, $c, Ac(f, _o(u)), null, Xl));
        }
        C.isString(p) || (p = p ? "cors" : "omit"),
          (_ = new Request(t, {
            ...h,
            signal: y,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: p,
          }));
        let d = await fetch(_);
        const g = Yl && (a === "stream" || a === "response");
        if (Yl && (l || g)) {
          const O = {};
          ["status", "statusText", "headers"].forEach((x) => {
            O[x] = d[x];
          });
          const E = C.toFiniteNumber(d.headers.get("content-length"));
          d = new Response(
            Ic(d.body, $c, l && Ac(E, _o(l, !0)), g && m, Xl),
            O
          );
        }
        a = a || "text";
        let S = await Ro[C.findKey(Ro, a) || "text"](d, e);
        return (
          !g && m(),
          v && v(),
          await new Promise((O, E) => {
            qp(O, E, {
              data: S,
              headers: be.from(d.headers),
              status: d.status,
              statusText: d.statusText,
              config: e,
              request: _,
            });
          })
        );
      } catch (d) {
        throw (
          (m(),
          d && d.name === "TypeError" && /fetch/i.test(d.message)
            ? Object.assign(new U("Network Error", U.ERR_NETWORK, e, _), {
                cause: d.cause || d,
              })
            : U.from(d, d && d.code, e, _))
        );
      }
    }),
  Gl = { http: yg, xhr: qg, fetch: e0 };
C.forEach(Gl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const bc = (e) => `- ${e}`,
  t0 = (e) => C.isFunction(e) || e === null || e === !1,
  Gp = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let s;
        if (
          ((r = n),
          !t0(n) && ((r = Gl[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new U(`Unknown adapter '${s}'`);
        if (r) break;
        i[s || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([l, u]) =>
            `adapter ${l} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(bc).join(`
`)
            : " " + bc(o[0])
          : "as no adapter specified";
        throw new U(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Gl,
  };
function Qs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new or(null, e);
}
function Uc(e) {
  return (
    Qs(e),
    (e.headers = be.from(e.headers)),
    (e.data = Hs.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Gp.getAdapter(e.adapter || li.adapter)(e).then(
      function (r) {
        return (
          Qs(e),
          (r.data = Hs.call(e, e.transformResponse, r)),
          (r.headers = be.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Wp(r) ||
            (Qs(e),
            r &&
              r.response &&
              ((r.response.data = Hs.call(e, e.transformResponse, r.response)),
              (r.response.headers = be.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Jp = "1.7.2",
  ua = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ua[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Bc = {};
ua.transitional = function (t, n, r) {
  function i(o, s) {
    return (
      "[Axios v" +
      Jp +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (o, s, l) => {
    if (t === !1)
      throw new U(
        i(s, " has been removed" + (n ? " in " + n : "")),
        U.ERR_DEPRECATED
      );
    return (
      n &&
        !Bc[s] &&
        ((Bc[s] = !0),
        console.warn(
          i(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, s, l) : !0
    );
  };
};
function n0(e, t, n) {
  if (typeof e != "object")
    throw new U("options must be an object", U.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o];
    if (s) {
      const l = e[o],
        u = l === void 0 || s(l, o, e);
      if (u !== !0)
        throw new U("option " + o + " must be " + u, U.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new U("Unknown option " + o, U.ERR_BAD_OPTION);
  }
}
const Jl = { assertOptions: n0, validators: ua },
  Lt = Jl.validators;
class mn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Lc(), response: new Lc() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = On(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      Jl.assertOptions(
        r,
        {
          silentJSONParsing: Lt.transitional(Lt.boolean),
          forcedJSONParsing: Lt.transitional(Lt.boolean),
          clarifyTimeoutError: Lt.transitional(Lt.boolean),
        },
        !1
      ),
      i != null &&
        (C.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Jl.assertOptions(
              i,
              { encode: Lt.function, serialize: Lt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = o && C.merge(o.common, o[n.method]);
    o &&
      C.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (v) => {
          delete o[v];
        }
      ),
      (n.headers = be.concat(s, o));
    const l = [];
    let u = !0;
    this.interceptors.request.forEach(function (w) {
      (typeof w.runWhen == "function" && w.runWhen(n) === !1) ||
        ((u = u && w.synchronous), l.unshift(w.fulfilled, w.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (w) {
      a.push(w.fulfilled, w.rejected);
    });
    let c,
      p = 0,
      h;
    if (!u) {
      const v = [Uc.bind(this), void 0];
      for (
        v.unshift.apply(v, l),
          v.push.apply(v, a),
          h = v.length,
          c = Promise.resolve(n);
        p < h;

      )
        c = c.then(v[p++], v[p++]);
      return c;
    }
    h = l.length;
    let y = n;
    for (p = 0; p < h; ) {
      const v = l[p++],
        w = l[p++];
      try {
        y = v(y);
      } catch (_) {
        w.call(this, _);
        break;
      }
    }
    try {
      c = Uc.call(this, y);
    } catch (v) {
      return Promise.reject(v);
    }
    for (p = 0, h = a.length; p < h; ) c = c.then(a[p++], a[p++]);
    return c;
  }
  getUri(t) {
    t = On(this.defaults, t);
    const n = Kp(t.baseURL, t.url);
    return Hp(n, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (t) {
  mn.prototype[t] = function (n, r) {
    return this.request(
      On(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
C.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, s, l) {
      return this.request(
        On(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: s,
        })
      );
    };
  }
  (mn.prototype[t] = n()), (mn.prototype[t + "Form"] = n(!0));
});
class aa {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, l) {
        r.reason || ((r.reason = new or(o, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new aa(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function r0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function i0(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const Zl = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Zl).forEach(([e, t]) => {
  Zl[t] = e;
});
function Zp(e) {
  const t = new mn(e),
    n = Dp(mn.prototype.request, t);
  return (
    C.extend(n, mn.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Zp(On(e, i));
    }),
    n
  );
}
const Z = Zp(li);
Z.Axios = mn;
Z.CanceledError = or;
Z.CancelToken = aa;
Z.isCancel = Wp;
Z.VERSION = Jp;
Z.toFormData = rs;
Z.AxiosError = U;
Z.Cancel = Z.CanceledError;
Z.all = function (t) {
  return Promise.all(t);
};
Z.spread = r0;
Z.isAxiosError = i0;
Z.mergeConfig = On;
Z.AxiosHeaders = be;
Z.formToJSON = (e) => Vp(C.isHTMLForm(e) ? new FormData(e) : e);
Z.getAdapter = Gp.getAdapter;
Z.HttpStatusCode = Zl;
Z.default = Z;
function eh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = eh(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Qt() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = eh(e)) && (r && (r += " "), (r += t));
  return r;
}
const Jr = (e) => typeof e == "number" && !isNaN(e),
  vn = (e) => typeof e == "string",
  Ve = (e) => typeof e == "function",
  Xi = (e) => (vn(e) || Ve(e) ? e : null),
  eu = (e) => k.isValidElement(e) || vn(e) || Ve(e) || Jr(e);
function o0(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function os(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: o = 300,
  } = e;
  return function (s) {
    let {
      children: l,
      position: u,
      preventExitTransition: a,
      done: c,
      nodeRef: p,
      isIn: h,
      playToast: y,
    } = s;
    const v = r ? `${t}--${u}` : t,
      w = r ? `${n}--${u}` : n,
      _ = k.useRef(0);
    return (
      k.useLayoutEffect(() => {
        const m = p.current,
          f = v.split(" "),
          d = (g) => {
            g.target === p.current &&
              (y(),
              m.removeEventListener("animationend", d),
              m.removeEventListener("animationcancel", d),
              _.current === 0 &&
                g.type !== "animationcancel" &&
                m.classList.remove(...f));
          };
        m.classList.add(...f),
          m.addEventListener("animationend", d),
          m.addEventListener("animationcancel", d);
      }, []),
      k.useEffect(() => {
        const m = p.current,
          f = () => {
            m.removeEventListener("animationend", f), i ? o0(m, c, o) : c();
          };
        h ||
          (a
            ? f()
            : ((_.current = 1),
              (m.className += ` ${w}`),
              m.addEventListener("animationend", f)));
      }, [h]),
      I.createElement(I.Fragment, null, l)
    );
  };
}
function Hc(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const Ne = new Map();
let Zr = [];
const tu = new Set(),
  s0 = (e) => tu.forEach((t) => t(e)),
  th = () => Ne.size > 0;
function nh(e, t) {
  var n;
  if (t) return !((n = Ne.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    Ne.forEach((i) => {
      i.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function rh(e, t) {
  eu(e) &&
    (th() || Zr.push({ content: e, options: t }),
    Ne.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function Qc(e, t) {
  Ne.forEach((n) => {
    t != null && t != null && t.containerId
      ? (t == null ? void 0 : t.containerId) === n.id &&
        n.toggle(e, t == null ? void 0 : t.id)
      : n.toggle(e, t == null ? void 0 : t.id);
  });
}
function l0(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = k.useRef(
    (function (o) {
      const s = o.containerId || 1;
      return {
        subscribe(l) {
          const u = (function (c, p, h) {
            let y = 1,
              v = 0,
              w = [],
              _ = [],
              m = [],
              f = p;
            const d = new Map(),
              g = new Set(),
              S = () => {
                (m = Array.from(d.values())), g.forEach((x) => x());
              },
              O = (x) => {
                (_ = x == null ? [] : _.filter((N) => N !== x)), S();
              },
              E = (x) => {
                const {
                    toastId: N,
                    onOpen: P,
                    updateId: H,
                    children: X,
                  } = x.props,
                  J = H == null;
                x.staleId && d.delete(x.staleId),
                  d.set(N, x),
                  (_ = [..._, x.props.toastId].filter((Y) => Y !== x.staleId)),
                  S(),
                  h(Hc(x, J ? "added" : "updated")),
                  J && Ve(P) && P(k.isValidElement(X) && X.props);
              };
            return {
              id: c,
              props: f,
              observe: (x) => (g.add(x), () => g.delete(x)),
              toggle: (x, N) => {
                d.forEach((P) => {
                  (N != null && N !== P.props.toastId) ||
                    (Ve(P.toggle) && P.toggle(x));
                });
              },
              removeToast: O,
              toasts: d,
              clearQueue: () => {
                (v -= w.length), (w = []);
              },
              buildToast: (x, N) => {
                if (
                  ((z) => {
                    let { containerId: q, toastId: te, updateId: fe } = z;
                    const Re = q ? q !== c : c !== 1,
                      ht = d.has(te) && fe == null;
                    return Re || ht;
                  })(N)
                )
                  return;
                const {
                    toastId: P,
                    updateId: H,
                    data: X,
                    staleId: J,
                    delay: Y,
                  } = N,
                  j = () => {
                    O(P);
                  },
                  $ = H == null;
                $ && v++;
                const W = {
                  ...f,
                  style: f.toastStyle,
                  key: y++,
                  ...Object.fromEntries(
                    Object.entries(N).filter((z) => {
                      let [q, te] = z;
                      return te != null;
                    })
                  ),
                  toastId: P,
                  updateId: H,
                  data: X,
                  closeToast: j,
                  isIn: !1,
                  className: Xi(N.className || f.toastClassName),
                  bodyClassName: Xi(N.bodyClassName || f.bodyClassName),
                  progressClassName: Xi(
                    N.progressClassName || f.progressClassName
                  ),
                  autoClose:
                    !N.isLoading &&
                    ((T = N.autoClose),
                    (F = f.autoClose),
                    T === !1 || (Jr(T) && T > 0) ? T : F),
                  deleteToast() {
                    const z = d.get(P),
                      { onClose: q, children: te } = z.props;
                    Ve(q) && q(k.isValidElement(te) && te.props),
                      h(Hc(z, "removed")),
                      d.delete(P),
                      v--,
                      v < 0 && (v = 0),
                      w.length > 0 ? E(w.shift()) : S();
                  },
                };
                var T, F;
                (W.closeButton = f.closeButton),
                  N.closeButton === !1 || eu(N.closeButton)
                    ? (W.closeButton = N.closeButton)
                    : N.closeButton === !0 &&
                      (W.closeButton = !eu(f.closeButton) || f.closeButton);
                let A = x;
                k.isValidElement(x) && !vn(x.type)
                  ? (A = k.cloneElement(x, {
                      closeToast: j,
                      toastProps: W,
                      data: X,
                    }))
                  : Ve(x) && (A = x({ closeToast: j, toastProps: W, data: X }));
                const L = { content: A, props: W, staleId: J };
                f.limit && f.limit > 0 && v > f.limit && $
                  ? w.push(L)
                  : Jr(Y)
                  ? setTimeout(() => {
                      E(L);
                    }, Y)
                  : E(L);
              },
              setProps(x) {
                f = x;
              },
              setToggle: (x, N) => {
                d.get(x).toggle = N;
              },
              isToastActive: (x) => _.some((N) => N === x),
              getSnapshot: () => (f.newestOnTop ? m.reverse() : m),
            };
          })(s, o, s0);
          Ne.set(s, u);
          const a = u.observe(l);
          return (
            Zr.forEach((c) => rh(c.content, c.options)),
            (Zr = []),
            () => {
              a(), Ne.delete(s);
            }
          );
        },
        setProps(l) {
          var u;
          (u = Ne.get(s)) == null || u.setProps(l);
        },
        getSnapshot() {
          var l;
          return (l = Ne.get(s)) == null ? void 0 : l.getSnapshot();
        },
      };
    })(e)
  ).current;
  r(e);
  const i = k.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (o) {
      if (!i) return [];
      const s = new Map();
      return (
        i.forEach((l) => {
          const { position: u } = l.props;
          s.has(u) || s.set(u, []), s.get(u).push(l);
        }),
        Array.from(s, (l) => o(l[0], l[1]))
      );
    },
    isToastActive: nh,
    count: i == null ? void 0 : i.length,
  };
}
function u0(e) {
  const [t, n] = k.useState(!1),
    [r, i] = k.useState(!1),
    o = k.useRef(null),
    s = k.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: l,
      pauseOnHover: u,
      closeToast: a,
      onClick: c,
      closeOnClick: p,
    } = e;
  var h, y;
  function v() {
    n(!0);
  }
  function w() {
    n(!1);
  }
  function _(d) {
    const g = o.current;
    s.canDrag &&
      g &&
      ((s.didMove = !0),
      t && w(),
      (s.delta =
        e.draggableDirection === "x"
          ? d.clientX - s.start
          : d.clientY - s.start),
      s.start !== d.clientX && (s.canCloseOnClick = !1),
      (g.style.transform = `translate3d(${
        e.draggableDirection === "x"
          ? `${s.delta}px, var(--y)`
          : `0, calc(${s.delta}px + var(--y))`
      },0)`),
      (g.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance))));
  }
  function m() {
    document.removeEventListener("pointermove", _),
      document.removeEventListener("pointerup", m);
    const d = o.current;
    if (s.canDrag && s.didMove && d) {
      if (((s.canDrag = !1), Math.abs(s.delta) > s.removalDistance))
        return i(!0), e.closeToast(), void e.collapseAll();
      (d.style.transition = "transform 0.2s, opacity 0.2s"),
        d.style.removeProperty("transform"),
        d.style.removeProperty("opacity");
    }
  }
  (y = Ne.get(
    (h = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1
  )) == null || y.setToggle(h.id, h.fn),
    k.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || w(),
          window.addEventListener("focus", v),
          window.addEventListener("blur", w),
          () => {
            window.removeEventListener("focus", v),
              window.removeEventListener("blur", w);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const f = {
    onPointerDown: function (d) {
      if (e.draggable === !0 || e.draggable === d.pointerType) {
        (s.didMove = !1),
          document.addEventListener("pointermove", _),
          document.addEventListener("pointerup", m);
        const g = o.current;
        (s.canCloseOnClick = !0),
          (s.canDrag = !0),
          (g.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((s.start = d.clientX),
              (s.removalDistance = g.offsetWidth * (e.draggablePercent / 100)))
            : ((s.start = d.clientY),
              (s.removalDistance =
                (g.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (d) {
      const {
        top: g,
        bottom: S,
        left: O,
        right: E,
      } = o.current.getBoundingClientRect();
      d.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      d.clientX >= O &&
      d.clientX <= E &&
      d.clientY >= g &&
      d.clientY <= S
        ? w()
        : v();
    },
  };
  return (
    l && u && ((f.onMouseEnter = w), e.stacked || (f.onMouseLeave = v)),
    p &&
      (f.onClick = (d) => {
        c && c(d), s.canCloseOnClick && a();
      }),
    {
      playToast: v,
      pauseToast: w,
      isRunning: t,
      preventExitTransition: r,
      toastRef: o,
      eventHandlers: f,
    }
  );
}
function a0(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = "default",
    hide: o,
    className: s,
    style: l,
    controlledProgress: u,
    progress: a,
    rtl: c,
    isIn: p,
    theme: h,
  } = e;
  const y = o || (u && a === 0),
    v = {
      ...l,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
    };
  u && (v.transform = `scaleX(${a})`);
  const w = Qt(
      "Toastify__progress-bar",
      u
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${h}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": c }
    ),
    _ = Ve(s) ? s({ rtl: c, type: i, defaultClassName: w }) : Qt(w, s),
    m = {
      [u && a >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        u && a < 1
          ? null
          : () => {
              p && r();
            },
    };
  return I.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": y },
    I.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${h} Toastify__progress-bar--${i}`,
    }),
    I.createElement("div", {
      role: "progressbar",
      "aria-hidden": y ? "true" : "false",
      "aria-label": "notification timer",
      className: _,
      style: v,
      ...m,
    })
  );
}
let c0 = 1;
const ih = () => "" + c0++;
function f0(e) {
  return e && (vn(e.toastId) || Jr(e.toastId)) ? e.toastId : ih();
}
function Dr(e, t) {
  return rh(e, t), t.toastId;
}
function To(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: f0(t) };
}
function Ni(e) {
  return (t, n) => Dr(t, To(e, n));
}
function b(e, t) {
  return Dr(e, To("default", t));
}
(b.loading = (e, t) =>
  Dr(
    e,
    To("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (b.promise = function (e, t, n) {
    let r,
      { pending: i, error: o, success: s } = t;
    i && (r = vn(i) ? b.loading(i, n) : b.loading(i.render, { ...n, ...i }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      u = (c, p, h) => {
        if (p == null) return void b.dismiss(r);
        const y = { type: c, ...l, ...n, data: h },
          v = vn(p) ? { render: p } : p;
        return r ? b.update(r, { ...y, ...v }) : b(v.render, { ...y, ...v }), h;
      },
      a = Ve(e) ? e() : e;
    return a.then((c) => u("success", s, c)).catch((c) => u("error", o, c)), a;
  }),
  (b.success = Ni("success")),
  (b.info = Ni("info")),
  (b.error = Ni("error")),
  (b.warning = Ni("warning")),
  (b.warn = b.warning),
  (b.dark = (e, t) => Dr(e, To("default", { theme: "dark", ...t }))),
  (b.dismiss = function (e) {
    (function (t) {
      var n;
      if (th()) {
        if (t == null || vn((n = t)) || Jr(n))
          Ne.forEach((r) => {
            r.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          const r = Ne.get(t.containerId);
          r
            ? r.removeToast(t.id)
            : Ne.forEach((i) => {
                i.removeToast(t.id);
              });
        }
      } else Zr = Zr.filter((r) => t != null && r.options.toastId !== t);
    })(e);
  }),
  (b.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      Ne.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (b.isActive = nh),
  (b.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, i) => {
      var o;
      let { containerId: s } = i;
      return (o = Ne.get(s || 1)) == null ? void 0 : o.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: i } = n,
        o = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: ih() };
      o.toastId !== e && (o.staleId = e);
      const s = o.render || i;
      delete o.render, Dr(s, o);
    }
  }),
  (b.done = (e) => {
    b.update(e, { progress: 1 });
  }),
  (b.onChange = function (e) {
    return (
      tu.add(e),
      () => {
        tu.delete(e);
      }
    );
  }),
  (b.play = (e) => Qc(!0, e)),
  (b.pause = (e) => Qc(!1, e));
const d0 = typeof window < "u" ? k.useLayoutEffect : k.useEffect,
  Di = (e) => {
    let { theme: t, type: n, isLoading: r, ...i } = e;
    return I.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i,
    });
  },
  Vs = {
    info: function (e) {
      return I.createElement(
        Di,
        { ...e },
        I.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return I.createElement(
        Di,
        { ...e },
        I.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return I.createElement(
        Di,
        { ...e },
        I.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return I.createElement(
        Di,
        { ...e },
        I.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return I.createElement("div", { className: "Toastify__spinner" });
    },
  },
  p0 = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
        playToast: o,
      } = u0(e),
      {
        closeButton: s,
        children: l,
        autoClose: u,
        onClick: a,
        type: c,
        hideProgressBar: p,
        closeToast: h,
        transition: y,
        position: v,
        className: w,
        style: _,
        bodyClassName: m,
        bodyStyle: f,
        progressClassName: d,
        progressStyle: g,
        updateId: S,
        role: O,
        progress: E,
        rtl: x,
        toastId: N,
        deleteToast: P,
        isIn: H,
        isLoading: X,
        closeOnClick: J,
        theme: Y,
      } = e,
      j = Qt(
        "Toastify__toast",
        `Toastify__toast-theme--${Y}`,
        `Toastify__toast--${c}`,
        { "Toastify__toast--rtl": x },
        { "Toastify__toast--close-on-click": J }
      ),
      $ = Ve(w)
        ? w({ rtl: x, position: v, type: c, defaultClassName: j })
        : Qt(j, w),
      W = (function (L) {
        let { theme: z, type: q, isLoading: te, icon: fe } = L,
          Re = null;
        const ht = { theme: z, type: q };
        return (
          fe === !1 ||
            (Ve(fe)
              ? (Re = fe({ ...ht, isLoading: te }))
              : k.isValidElement(fe)
              ? (Re = k.cloneElement(fe, ht))
              : te
              ? (Re = Vs.spinner())
              : (($h) => $h in Vs)(q) && (Re = Vs[q](ht))),
          Re
        );
      })(e),
      T = !!E || !u,
      F = { closeToast: h, type: c, theme: Y };
    let A = null;
    return (
      s === !1 ||
        (A = Ve(s)
          ? s(F)
          : k.isValidElement(s)
          ? k.cloneElement(s, F)
          : (function (L) {
              let { closeToast: z, theme: q, ariaLabel: te = "close" } = L;
              return I.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${q}`,
                  type: "button",
                  onClick: (fe) => {
                    fe.stopPropagation(), z(fe);
                  },
                  "aria-label": te,
                },
                I.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  I.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  })
                )
              );
            })(F)),
      I.createElement(
        y,
        {
          isIn: H,
          done: P,
          position: v,
          preventExitTransition: n,
          nodeRef: r,
          playToast: o,
        },
        I.createElement(
          "div",
          {
            id: N,
            onClick: a,
            "data-in": H,
            className: $,
            ...i,
            style: _,
            ref: r,
          },
          I.createElement(
            "div",
            {
              ...(H && { role: O }),
              className: Ve(m) ? m({ type: c }) : Qt("Toastify__toast-body", m),
              style: f,
            },
            W != null &&
              I.createElement(
                "div",
                {
                  className: Qt("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !X,
                  }),
                },
                W
              ),
            I.createElement("div", null, l)
          ),
          A,
          I.createElement(a0, {
            ...(S && !T ? { key: `pb-${S}` } : {}),
            rtl: x,
            theme: Y,
            delay: u,
            isRunning: t,
            isIn: H,
            closeToast: h,
            hide: p,
            type: c,
            style: g,
            className: d,
            controlledProgress: T,
            progress: E || 0,
          })
        )
      )
    );
  },
  ss = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  h0 = os(ss("bounce", !0));
os(ss("slide", !0));
os(ss("zoom"));
os(ss("flip"));
const m0 = {
  position: "top-right",
  transition: h0,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
};
function v0(e) {
  let t = { ...m0, ...e };
  const n = e.stacked,
    [r, i] = k.useState(!0),
    o = k.useRef(null),
    { getToastToRender: s, isToastActive: l, count: u } = l0(t),
    { className: a, style: c, rtl: p, containerId: h } = t;
  function y(w) {
    const _ = Qt(
      "Toastify__toast-container",
      `Toastify__toast-container--${w}`,
      { "Toastify__toast-container--rtl": p }
    );
    return Ve(a)
      ? a({ position: w, rtl: p, defaultClassName: _ })
      : Qt(_, Xi(a));
  }
  function v() {
    n && (i(!0), b.play());
  }
  return (
    d0(() => {
      if (n) {
        var w;
        const _ = o.current.querySelectorAll('[data-in="true"]'),
          m = 12,
          f = (w = t.position) == null ? void 0 : w.includes("top");
        let d = 0,
          g = 0;
        Array.from(_)
          .reverse()
          .forEach((S, O) => {
            const E = S;
            E.classList.add("Toastify__toast--stacked"),
              O > 0 && (E.dataset.collapsed = `${r}`),
              E.dataset.pos || (E.dataset.pos = f ? "top" : "bot");
            const x = d * (r ? 0.2 : 1) + (r ? 0 : m * O);
            E.style.setProperty("--y", `${f ? x : -1 * x}px`),
              E.style.setProperty("--g", `${m}`),
              E.style.setProperty("--s", "" + (1 - (r ? g : 0))),
              (d += E.offsetHeight),
              (g += 0.025);
          });
      }
    }, [r, u, n]),
    I.createElement(
      "div",
      {
        ref: o,
        className: "Toastify",
        id: h,
        onMouseEnter: () => {
          n && (i(!1), b.pause());
        },
        onMouseLeave: v,
      },
      s((w, _) => {
        const m = _.length ? { ...c } : { ...c, pointerEvents: "none" };
        return I.createElement(
          "div",
          { className: y(w), style: m, key: `container-${w}` },
          _.map((f) => {
            let { content: d, props: g } = f;
            return I.createElement(
              p0,
              {
                ...g,
                stacked: n,
                collapseAll: v,
                isIn: l(g.toastId, g.containerId),
                style: g.style,
                key: `toast-${g.key}`,
              },
              d
            );
          })
        );
      })
    )
  );
}
const Zt = document.location.origin.includes("localhost")
    ? "http://localhost:3000"
    : document.location.origin,
  y0 = { name: "NOT FOUND", childs: [], dir: !0, parent: null, path: "" },
  g0 = (e, t, n, r, i, o, s, l, u) => {
    function a(c, p) {
      if (!p.dir) return !0;
      let h = c.parent;
      for (; h; ) {
        if (h.id === p.id) return !1;
        h = h.parent;
      }
      return !0;
    }
    return {
      getFileCreation() {
        return n || {};
      },
      newFileCreation(c, p) {
        r({ file: c, isDir: p });
      },
      async handleFileCreation(c) {
        const { file: p, isDir: h } = n;
        if (p && c !== "" && p.childs.filter((y) => y.name === c).length === 0)
          try {
            const y = await Z.post(`${Zt}/api/create`, {
              path: p.path,
              fileName: c,
              isDir: h,
              match: !0,
            });
            y.data.succeed
              ? p.childs.push({
                  id: Date.now(),
                  name: c,
                  path: p.path + "/" + c,
                  dir: h,
                  parent: p,
                  childs: [],
                  match: !0,
                })
              : b.error(y.data.output);
          } catch {
            b.error(err.response.data.error);
          }
        s(l), r(null);
      },
      getFileInEdit() {
        return e;
      },
      async handleFileEdit(c) {
        if (
          e &&
          c !== "" &&
          e.name !== c &&
          e.parent &&
          e.parent.childs.filter((p) => p.name === c && p.id !== e.id)
            .length === 0
        ) {
          try {
            const p = await Z.put(`${Zt}/api/rename`, {
              oldPath: e.path,
              newName: c,
            });
            p.data.succeed
              ? ((e.name = c),
                (e.path = e.parent.path + "/" + c),
                this.fixChilds(e))
              : b.error(p.data.output);
          } catch {
            b.error(err.response.data.error);
          }
          u(null, null, !0);
        }
        t(null);
      },
      handleDoubleClick(c) {
        t(c);
      },
      handleDragStart(c) {
        o(c);
      },
      fixChilds(c) {
        const p = c.path;
        c.childs = c.childs.map(
          (h) => ((h.path = p + "/" + h.name), h.dir && this.fixChilds(h), h)
        );
      },
      async handleDrop(c) {
        if (i && c !== i.parent && c.dir && a(c, i)) {
          try {
            const p = await Z.put(`${Zt}/api/move`, {
              oldPath: i.path,
              newPath: c.path,
            });
            p.data.succeed
              ? ((i.parent.childs = i.parent.childs.filter(
                  (h) => h.id !== i.id
                )),
                (i.parent = c),
                (i.path = c.path + "/" + i.name),
                this.fixChilds(i),
                c.childs.push(i),
                (l.childs = l.childs.filter((h) => h.parent.id === l.id)),
                s(l))
              : b.error(p.data.output);
          } catch {
            b.error(err.response.data.error);
          }
          o(null);
        }
      },
      handleDragOver(c) {
        c.preventDefault();
      },
    };
  };
function w0(e) {
  function t(n) {
    return (
      (n.childs = n.childs.map(
        (r) => ((r.match = !0), (r.parent = n), r.dir && (r.childs = t(r)), r)
      )),
      n.childs
    );
  }
  return (
    (e.childs = e.childs.map(
      (n) => ((n.parent = e), (n.match = !0), n.dir && (n.childs = t(n)), n)
    )),
    (e.match = !0),
    e
  );
}
const S0 = async (e, t, n, r) => {
    const i = (o) => {
      o.dir &&
        ((o.childs = o.childs.filter((s) => s.id !== e.id)),
        o.childs.forEach(i));
    };
    if (e.id === t.id) {
      b.error("Cannot delete root folder");
      return;
    }
    try {
      const o = await Z.delete(`${Zt}/api/delete`, {
        data: { path: e.path },
        headers: { "Content-Type": "application/json" },
      });
      if (o.data.succeed) {
        const s = { ...t };
        i(s), n(s), r(e);
      } else b.error(o.data.output);
    } catch {
      b.error(err.response.data.error);
    }
  },
  E0 = async (e, t, n, r, i, o) => {
    if (n) {
      i([...r]);
      return;
    }
    if (t) {
      try {
        const s = await Z.get(`${Zt}/api/readFile?path=${e.path}`);
        s.data.succeed ? (e.content = s.data.output) : b.error(s.data.output);
      } catch (s) {
        b.error(s);
      }
      r.includes(e) || i([...r, e]), o(e);
    } else {
      const s = r.filter((l) => l.id !== e.id);
      s.length !== 0 ? o(s[s.length - 1]) : o(null), i(s);
    }
  },
  Vc = async (e) => {
    try {
      const t = await Z.post(`${Zt}/api/save`, {
        filePath: e.path,
        content: e.content,
      });
      t.data.succeed || b.error(t.data.output);
    } catch (t) {
      b.error(t.response.data.error);
    }
  },
  O0 = async (e, t, n) => {
    if (e)
      try {
        const r = await Z.put(`${Zt}/api/run`, { Path: e.path });
        r.data.output
          ? t(n + r.data.output)
          : t(
              n +
                r.data.error +
                `
`
            );
      } catch (r) {
        b.error(r.response.data.error);
      }
  },
  C0 = async (e, t, n, r, i, o) => {
    b.success(`Searching for ${e}`);
    try {
      const s = await Z.get(`${Zt}/api/getTree?path=${e}`),
        l = w0(s.data);
      o(e), t([]), n(null), r(""), i(l), b.dismiss();
    } catch (s) {
      b.dismiss(), b.error(s.response.data.error);
    }
  };
function x0({ setNavFiles: e, structure: t, setStructure: n }) {
  const [r, i] = k.useState(null),
    [o, s] = k.useState(null),
    [l, u] = k.useState(null);
  return D.jsx("div", {
    className: "pt-4",
    children: D.jsx(Np, {
      folder: t,
      setNavFiles: e,
      onDelete: (a) => S0(a, t, n, e),
      DND: g0(r, i, o, s, l, u, n, t, e),
    }),
  });
}
var ca = { exports: {} },
  ui = {},
  ls = { exports: {} },
  oh = {},
  sh = { exports: {} },
  P0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  _0 = P0,
  R0 = _0;
function lh() {}
function uh() {}
uh.resetWarningCache = lh;
var T0 = function () {
  function e(r, i, o, s, l, u) {
    if (u !== R0) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((a.name = "Invariant Violation"), a);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: uh,
    resetWarningCache: lh,
  };
  return (n.PropTypes = n), n;
};
sh.exports = T0();
var us = sh.exports;
function ah(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ah(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Wc() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ah(e)) && (r && (r += " "), (r += t));
  return r;
}
const k0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, clsx: Wc, default: Wc },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  N0 = bh(k0);
var ce = {},
  St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
St.dontSetMe = j0;
St.findInArray = D0;
St.int = L0;
St.isFunction = M0;
St.isNum = F0;
function D0(e, t) {
  for (let n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e])) return e[n];
}
function M0(e) {
  return (
    typeof e == "function" ||
    Object.prototype.toString.call(e) === "[object Function]"
  );
}
function F0(e) {
  return typeof e == "number" && !isNaN(e);
}
function L0(e) {
  return parseInt(e, 10);
}
function j0(e, t, n) {
  if (e[t])
    return new Error(
      "Invalid prop "
        .concat(t, " passed to ")
        .concat(n, " - do not set this, set it on the child.")
    );
}
var Pn = {};
Object.defineProperty(Pn, "__esModule", { value: !0 });
Pn.browserPrefixToKey = fh;
Pn.browserPrefixToStyle = z0;
Pn.default = void 0;
Pn.getPrefix = ch;
const Ws = ["Moz", "Webkit", "O", "ms"];
function ch() {
  var e;
  let t =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : "transform";
  if (typeof window > "u") return "";
  const n =
    (e = window.document) === null ||
    e === void 0 ||
    (e = e.documentElement) === null ||
    e === void 0
      ? void 0
      : e.style;
  if (!n || t in n) return "";
  for (let r = 0; r < Ws.length; r++) if (fh(t, Ws[r]) in n) return Ws[r];
  return "";
}
function fh(e, t) {
  return t ? "".concat(t).concat(I0(e)) : e;
}
function z0(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function I0(e) {
  let t = "",
    n = !0;
  for (let r = 0; r < e.length; r++)
    n
      ? ((t += e[r].toUpperCase()), (n = !1))
      : e[r] === "-"
      ? (n = !0)
      : (t += e[r]);
  return t;
}
Pn.default = ch();
Object.defineProperty(ce, "__esModule", { value: !0 });
ce.addClassName = hh;
ce.addEvent = b0;
ce.addUserSelectStyles = G0;
ce.createCSSTransform = q0;
ce.createSVGTransform = K0;
ce.getTouch = X0;
ce.getTouchIdentifier = Y0;
ce.getTranslation = fa;
ce.innerHeight = Q0;
ce.innerWidth = V0;
ce.matchesSelector = ph;
ce.matchesSelectorAndParentsTo = $0;
ce.offsetXYFromParent = W0;
ce.outerHeight = B0;
ce.outerWidth = H0;
ce.removeClassName = mh;
ce.removeEvent = U0;
ce.removeUserSelectStyles = J0;
var qe = St,
  qc = A0(Pn);
function dh(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (dh = function (r) {
    return r ? n : t;
  })(e);
}
function A0(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = dh(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
let Mi = "";
function ph(e, t) {
  return (
    Mi ||
      (Mi = (0, qe.findInArray)(
        [
          "matches",
          "webkitMatchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
        ],
        function (n) {
          return (0, qe.isFunction)(e[n]);
        }
      )),
    (0, qe.isFunction)(e[Mi]) ? e[Mi](t) : !1
  );
}
function $0(e, t, n) {
  let r = e;
  do {
    if (ph(r, t)) return !0;
    if (r === n) return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function b0(e, t, n, r) {
  if (!e) return;
  const i = { capture: !0, ...r };
  e.addEventListener
    ? e.addEventListener(t, n, i)
    : e.attachEvent
    ? e.attachEvent("on" + t, n)
    : (e["on" + t] = n);
}
function U0(e, t, n, r) {
  if (!e) return;
  const i = { capture: !0, ...r };
  e.removeEventListener
    ? e.removeEventListener(t, n, i)
    : e.detachEvent
    ? e.detachEvent("on" + t, n)
    : (e["on" + t] = null);
}
function B0(e) {
  let t = e.clientHeight;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t += (0, qe.int)(n.borderTopWidth)),
    (t += (0, qe.int)(n.borderBottomWidth)),
    t
  );
}
function H0(e) {
  let t = e.clientWidth;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t += (0, qe.int)(n.borderLeftWidth)),
    (t += (0, qe.int)(n.borderRightWidth)),
    t
  );
}
function Q0(e) {
  let t = e.clientHeight;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t -= (0, qe.int)(n.paddingTop)), (t -= (0, qe.int)(n.paddingBottom)), t
  );
}
function V0(e) {
  let t = e.clientWidth;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t -= (0, qe.int)(n.paddingLeft)), (t -= (0, qe.int)(n.paddingRight)), t
  );
}
function W0(e, t, n) {
  const i =
      t === t.ownerDocument.body
        ? { left: 0, top: 0 }
        : t.getBoundingClientRect(),
    o = (e.clientX + t.scrollLeft - i.left) / n,
    s = (e.clientY + t.scrollTop - i.top) / n;
  return { x: o, y: s };
}
function q0(e, t) {
  const n = fa(e, t, "px");
  return { [(0, qc.browserPrefixToKey)("transform", qc.default)]: n };
}
function K0(e, t) {
  return fa(e, t, "");
}
function fa(e, t, n) {
  let { x: r, y: i } = e,
    o = "translate(".concat(r).concat(n, ",").concat(i).concat(n, ")");
  if (t) {
    const s = "".concat(typeof t.x == "string" ? t.x : t.x + n),
      l = "".concat(typeof t.y == "string" ? t.y : t.y + n);
    o = "translate(".concat(s, ", ").concat(l, ")") + o;
  }
  return o;
}
function X0(e, t) {
  return (
    (e.targetTouches &&
      (0, qe.findInArray)(e.targetTouches, (n) => t === n.identifier)) ||
    (e.changedTouches &&
      (0, qe.findInArray)(e.changedTouches, (n) => t === n.identifier))
  );
}
function Y0(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function G0(e) {
  if (!e) return;
  let t = e.getElementById("react-draggable-style-el");
  t ||
    ((t = e.createElement("style")),
    (t.type = "text/css"),
    (t.id = "react-draggable-style-el"),
    (t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`),
    (t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`),
    e.getElementsByTagName("head")[0].appendChild(t)),
    e.body && hh(e.body, "react-draggable-transparent-selection");
}
function J0(e) {
  if (e)
    try {
      if (
        (e.body && mh(e.body, "react-draggable-transparent-selection"),
        e.selection)
      )
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {}
}
function hh(e, t) {
  e.classList
    ? e.classList.add(t)
    : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) ||
      (e.className += " ".concat(t));
}
function mh(e, t) {
  e.classList
    ? e.classList.remove(t)
    : (e.className = e.className.replace(
        new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"),
        ""
      ));
}
var Et = {};
Object.defineProperty(Et, "__esModule", { value: !0 });
Et.canDragX = t1;
Et.canDragY = n1;
Et.createCoreData = i1;
Et.createDraggableData = o1;
Et.getBoundPosition = Z0;
Et.getControlPosition = r1;
Et.snapToGrid = e1;
var Ue = St,
  bn = ce;
function Z0(e, t, n) {
  if (!e.props.bounds) return [t, n];
  let { bounds: r } = e.props;
  r = typeof r == "string" ? r : s1(r);
  const i = da(e);
  if (typeof r == "string") {
    const { ownerDocument: o } = i,
      s = o.defaultView;
    let l;
    if (
      (r === "parent" ? (l = i.parentNode) : (l = o.querySelector(r)),
      !(l instanceof s.HTMLElement))
    )
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    const u = l,
      a = s.getComputedStyle(i),
      c = s.getComputedStyle(u);
    r = {
      left:
        -i.offsetLeft + (0, Ue.int)(c.paddingLeft) + (0, Ue.int)(a.marginLeft),
      top: -i.offsetTop + (0, Ue.int)(c.paddingTop) + (0, Ue.int)(a.marginTop),
      right:
        (0, bn.innerWidth)(u) -
        (0, bn.outerWidth)(i) -
        i.offsetLeft +
        (0, Ue.int)(c.paddingRight) -
        (0, Ue.int)(a.marginRight),
      bottom:
        (0, bn.innerHeight)(u) -
        (0, bn.outerHeight)(i) -
        i.offsetTop +
        (0, Ue.int)(c.paddingBottom) -
        (0, Ue.int)(a.marginBottom),
    };
  }
  return (
    (0, Ue.isNum)(r.right) && (t = Math.min(t, r.right)),
    (0, Ue.isNum)(r.bottom) && (n = Math.min(n, r.bottom)),
    (0, Ue.isNum)(r.left) && (t = Math.max(t, r.left)),
    (0, Ue.isNum)(r.top) && (n = Math.max(n, r.top)),
    [t, n]
  );
}
function e1(e, t, n) {
  const r = Math.round(t / e[0]) * e[0],
    i = Math.round(n / e[1]) * e[1];
  return [r, i];
}
function t1(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function n1(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function r1(e, t, n) {
  const r = typeof t == "number" ? (0, bn.getTouch)(e, t) : null;
  if (typeof t == "number" && !r) return null;
  const i = da(n),
    o = n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
  return (0, bn.offsetXYFromParent)(r || e, o, n.props.scale);
}
function i1(e, t, n) {
  const r = !(0, Ue.isNum)(e.lastX),
    i = da(e);
  return r
    ? { node: i, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n }
    : {
        node: i,
        deltaX: t - e.lastX,
        deltaY: n - e.lastY,
        lastX: e.lastX,
        lastY: e.lastY,
        x: t,
        y: n,
      };
}
function o1(e, t) {
  const n = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / n,
    y: e.state.y + t.deltaY / n,
    deltaX: t.deltaX / n,
    deltaY: t.deltaY / n,
    lastX: e.state.x,
    lastY: e.state.y,
  };
}
function s1(e) {
  return { left: e.left, top: e.top, right: e.right, bottom: e.bottom };
}
function da(e) {
  const t = e.findDOMNode();
  if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var as = {},
  cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.default = l1;
function l1() {}
Object.defineProperty(as, "__esModule", { value: !0 });
as.default = void 0;
var qs = a1(k),
  Le = pa(us),
  u1 = pa(Zo),
  Ce = ce,
  jt = Et,
  Ks = St,
  mr = pa(cs);
function pa(e) {
  return e && e.__esModule ? e : { default: e };
}
function vh(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (vh = function (r) {
    return r ? n : t;
  })(e);
}
function a1(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = vh(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Te(e, t, n) {
  return (
    (t = c1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function c1(e) {
  var t = f1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function f1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
const ot = {
  touch: { start: "touchstart", move: "touchmove", stop: "touchend" },
  mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" },
};
let zt = ot.mouse,
  fs = class extends qs.Component {
    constructor() {
      super(...arguments),
        Te(this, "dragging", !1),
        Te(this, "lastX", NaN),
        Te(this, "lastY", NaN),
        Te(this, "touchIdentifier", null),
        Te(this, "mounted", !1),
        Te(this, "handleDragStart", (t) => {
          if (
            (this.props.onMouseDown(t),
            !this.props.allowAnyClick &&
              typeof t.button == "number" &&
              t.button !== 0)
          )
            return !1;
          const n = this.findDOMNode();
          if (!n || !n.ownerDocument || !n.ownerDocument.body)
            throw new Error("<DraggableCore> not mounted on DragStart!");
          const { ownerDocument: r } = n;
          if (
            this.props.disabled ||
            !(t.target instanceof r.defaultView.Node) ||
            (this.props.handle &&
              !(0, Ce.matchesSelectorAndParentsTo)(
                t.target,
                this.props.handle,
                n
              )) ||
            (this.props.cancel &&
              (0, Ce.matchesSelectorAndParentsTo)(
                t.target,
                this.props.cancel,
                n
              ))
          )
            return;
          t.type === "touchstart" && t.preventDefault();
          const i = (0, Ce.getTouchIdentifier)(t);
          this.touchIdentifier = i;
          const o = (0, jt.getControlPosition)(t, i, this);
          if (o == null) return;
          const { x: s, y: l } = o,
            u = (0, jt.createCoreData)(this, s, l);
          (0, mr.default)("DraggableCore: handleDragStart: %j", u),
            (0, mr.default)("calling", this.props.onStart),
            !(this.props.onStart(t, u) === !1 || this.mounted === !1) &&
              (this.props.enableUserSelectHack &&
                (0, Ce.addUserSelectStyles)(r),
              (this.dragging = !0),
              (this.lastX = s),
              (this.lastY = l),
              (0, Ce.addEvent)(r, zt.move, this.handleDrag),
              (0, Ce.addEvent)(r, zt.stop, this.handleDragStop));
        }),
        Te(this, "handleDrag", (t) => {
          const n = (0, jt.getControlPosition)(t, this.touchIdentifier, this);
          if (n == null) return;
          let { x: r, y: i } = n;
          if (Array.isArray(this.props.grid)) {
            let l = r - this.lastX,
              u = i - this.lastY;
            if (
              (([l, u] = (0, jt.snapToGrid)(this.props.grid, l, u)), !l && !u)
            )
              return;
            (r = this.lastX + l), (i = this.lastY + u);
          }
          const o = (0, jt.createCoreData)(this, r, i);
          if (
            ((0, mr.default)("DraggableCore: handleDrag: %j", o),
            this.props.onDrag(t, o) === !1 || this.mounted === !1)
          ) {
            try {
              this.handleDragStop(new MouseEvent("mouseup"));
            } catch {
              const u = document.createEvent("MouseEvents");
              u.initMouseEvent(
                "mouseup",
                !0,
                !0,
                window,
                0,
                0,
                0,
                0,
                0,
                !1,
                !1,
                !1,
                !1,
                0,
                null
              ),
                this.handleDragStop(u);
            }
            return;
          }
          (this.lastX = r), (this.lastY = i);
        }),
        Te(this, "handleDragStop", (t) => {
          if (!this.dragging) return;
          const n = (0, jt.getControlPosition)(t, this.touchIdentifier, this);
          if (n == null) return;
          let { x: r, y: i } = n;
          if (Array.isArray(this.props.grid)) {
            let u = r - this.lastX || 0,
              a = i - this.lastY || 0;
            ([u, a] = (0, jt.snapToGrid)(this.props.grid, u, a)),
              (r = this.lastX + u),
              (i = this.lastY + a);
          }
          const o = (0, jt.createCoreData)(this, r, i);
          if (this.props.onStop(t, o) === !1 || this.mounted === !1) return !1;
          const l = this.findDOMNode();
          l &&
            this.props.enableUserSelectHack &&
            (0, Ce.removeUserSelectStyles)(l.ownerDocument),
            (0, mr.default)("DraggableCore: handleDragStop: %j", o),
            (this.dragging = !1),
            (this.lastX = NaN),
            (this.lastY = NaN),
            l &&
              ((0, mr.default)("DraggableCore: Removing handlers"),
              (0, Ce.removeEvent)(l.ownerDocument, zt.move, this.handleDrag),
              (0, Ce.removeEvent)(
                l.ownerDocument,
                zt.stop,
                this.handleDragStop
              ));
        }),
        Te(
          this,
          "onMouseDown",
          (t) => ((zt = ot.mouse), this.handleDragStart(t))
        ),
        Te(this, "onMouseUp", (t) => ((zt = ot.mouse), this.handleDragStop(t))),
        Te(
          this,
          "onTouchStart",
          (t) => ((zt = ot.touch), this.handleDragStart(t))
        ),
        Te(
          this,
          "onTouchEnd",
          (t) => ((zt = ot.touch), this.handleDragStop(t))
        );
    }
    componentDidMount() {
      this.mounted = !0;
      const t = this.findDOMNode();
      t &&
        (0, Ce.addEvent)(t, ot.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const t = this.findDOMNode();
      if (t) {
        const { ownerDocument: n } = t;
        (0, Ce.removeEvent)(n, ot.mouse.move, this.handleDrag),
          (0, Ce.removeEvent)(n, ot.touch.move, this.handleDrag),
          (0, Ce.removeEvent)(n, ot.mouse.stop, this.handleDragStop),
          (0, Ce.removeEvent)(n, ot.touch.stop, this.handleDragStop),
          (0, Ce.removeEvent)(t, ot.touch.start, this.onTouchStart, {
            passive: !1,
          }),
          this.props.enableUserSelectHack && (0, Ce.removeUserSelectStyles)(n);
      }
    }
    findDOMNode() {
      var t, n;
      return (t = this.props) !== null && t !== void 0 && t.nodeRef
        ? (n = this.props) === null ||
          n === void 0 ||
          (n = n.nodeRef) === null ||
          n === void 0
          ? void 0
          : n.current
        : u1.default.findDOMNode(this);
    }
    render() {
      return qs.cloneElement(qs.Children.only(this.props.children), {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd,
      });
    }
  };
as.default = fs;
Te(fs, "displayName", "DraggableCore");
Te(fs, "propTypes", {
  allowAnyClick: Le.default.bool,
  children: Le.default.node.isRequired,
  disabled: Le.default.bool,
  enableUserSelectHack: Le.default.bool,
  offsetParent: function (e, t) {
    if (e[t] && e[t].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  grid: Le.default.arrayOf(Le.default.number),
  handle: Le.default.string,
  cancel: Le.default.string,
  nodeRef: Le.default.object,
  onStart: Le.default.func,
  onDrag: Le.default.func,
  onStop: Le.default.func,
  onMouseDown: Le.default.func,
  scale: Le.default.number,
  className: Ks.dontSetMe,
  style: Ks.dontSetMe,
  transform: Ks.dontSetMe,
});
Te(fs, "defaultProps", {
  allowAnyClick: !1,
  disabled: !1,
  enableUserSelectHack: !0,
  onStart: function () {},
  onDrag: function () {},
  onStop: function () {},
  onMouseDown: function () {},
  scale: 1,
});
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    Object.defineProperty(e, "DraggableCore", {
      enumerable: !0,
      get: function () {
        return u.default;
      },
    }),
    (e.default = void 0);
  var t = h(k),
    n = c(us),
    r = c(Zo),
    i = c(N0),
    o = ce,
    s = Et,
    l = St,
    u = c(as),
    a = c(cs);
  function c(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function p(f) {
    if (typeof WeakMap != "function") return null;
    var d = new WeakMap(),
      g = new WeakMap();
    return (p = function (S) {
      return S ? g : d;
    })(f);
  }
  function h(f, d) {
    if (f && f.__esModule) return f;
    if (f === null || (typeof f != "object" && typeof f != "function"))
      return { default: f };
    var g = p(d);
    if (g && g.has(f)) return g.get(f);
    var S = {},
      O = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in f)
      if (E !== "default" && Object.prototype.hasOwnProperty.call(f, E)) {
        var x = O ? Object.getOwnPropertyDescriptor(f, E) : null;
        x && (x.get || x.set) ? Object.defineProperty(S, E, x) : (S[E] = f[E]);
      }
    return (S.default = f), g && g.set(f, S), S;
  }
  function y() {
    return (
      (y = Object.assign
        ? Object.assign.bind()
        : function (f) {
            for (var d = 1; d < arguments.length; d++) {
              var g = arguments[d];
              for (var S in g)
                Object.prototype.hasOwnProperty.call(g, S) && (f[S] = g[S]);
            }
            return f;
          }),
      y.apply(this, arguments)
    );
  }
  function v(f, d, g) {
    return (
      (d = w(d)),
      d in f
        ? Object.defineProperty(f, d, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (f[d] = g),
      f
    );
  }
  function w(f) {
    var d = _(f, "string");
    return typeof d == "symbol" ? d : String(d);
  }
  function _(f, d) {
    if (typeof f != "object" || f === null) return f;
    var g = f[Symbol.toPrimitive];
    if (g !== void 0) {
      var S = g.call(f, d || "default");
      if (typeof S != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(f);
  }
  class m extends t.Component {
    static getDerivedStateFromProps(d, g) {
      let { position: S } = d,
        { prevPropsPosition: O } = g;
      return S && (!O || S.x !== O.x || S.y !== O.y)
        ? ((0, a.default)("Draggable: getDerivedStateFromProps %j", {
            position: S,
            prevPropsPosition: O,
          }),
          { x: S.x, y: S.y, prevPropsPosition: { ...S } })
        : null;
    }
    constructor(d) {
      super(d),
        v(this, "onDragStart", (g, S) => {
          if (
            ((0, a.default)("Draggable: onDragStart: %j", S),
            this.props.onStart(g, (0, s.createDraggableData)(this, S)) === !1)
          )
            return !1;
          this.setState({ dragging: !0, dragged: !0 });
        }),
        v(this, "onDrag", (g, S) => {
          if (!this.state.dragging) return !1;
          (0, a.default)("Draggable: onDrag: %j", S);
          const O = (0, s.createDraggableData)(this, S),
            E = { x: O.x, y: O.y, slackX: 0, slackY: 0 };
          if (this.props.bounds) {
            const { x: N, y: P } = E;
            (E.x += this.state.slackX), (E.y += this.state.slackY);
            const [H, X] = (0, s.getBoundPosition)(this, E.x, E.y);
            (E.x = H),
              (E.y = X),
              (E.slackX = this.state.slackX + (N - E.x)),
              (E.slackY = this.state.slackY + (P - E.y)),
              (O.x = E.x),
              (O.y = E.y),
              (O.deltaX = E.x - this.state.x),
              (O.deltaY = E.y - this.state.y);
          }
          if (this.props.onDrag(g, O) === !1) return !1;
          this.setState(E);
        }),
        v(this, "onDragStop", (g, S) => {
          if (
            !this.state.dragging ||
            this.props.onStop(g, (0, s.createDraggableData)(this, S)) === !1
          )
            return !1;
          (0, a.default)("Draggable: onDragStop: %j", S);
          const E = { dragging: !1, slackX: 0, slackY: 0 };
          if (!!this.props.position) {
            const { x: N, y: P } = this.props.position;
            (E.x = N), (E.y = P);
          }
          this.setState(E);
        }),
        (this.state = {
          dragging: !1,
          dragged: !1,
          x: d.position ? d.position.x : d.defaultPosition.x,
          y: d.position ? d.position.y : d.defaultPosition.y,
          prevPropsPosition: { ...d.position },
          slackX: 0,
          slackY: 0,
          isElementSVG: !1,
        }),
        d.position &&
          !(d.onDrag || d.onStop) &&
          console.warn(
            "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."
          );
    }
    componentDidMount() {
      typeof window.SVGElement < "u" &&
        this.findDOMNode() instanceof window.SVGElement &&
        this.setState({ isElementSVG: !0 });
    }
    componentWillUnmount() {
      this.setState({ dragging: !1 });
    }
    findDOMNode() {
      var d, g;
      return (d =
        (g = this.props) === null ||
        g === void 0 ||
        (g = g.nodeRef) === null ||
        g === void 0
          ? void 0
          : g.current) !== null && d !== void 0
        ? d
        : r.default.findDOMNode(this);
    }
    render() {
      const {
        axis: d,
        bounds: g,
        children: S,
        defaultPosition: O,
        defaultClassName: E,
        defaultClassNameDragging: x,
        defaultClassNameDragged: N,
        position: P,
        positionOffset: H,
        scale: X,
        ...J
      } = this.props;
      let Y = {},
        j = null;
      const W = !!!P || this.state.dragging,
        T = P || O,
        F = {
          x: (0, s.canDragX)(this) && W ? this.state.x : T.x,
          y: (0, s.canDragY)(this) && W ? this.state.y : T.y,
        };
      this.state.isElementSVG
        ? (j = (0, o.createSVGTransform)(F, H))
        : (Y = (0, o.createCSSTransform)(F, H));
      const A = (0, i.default)(S.props.className || "", E, {
        [x]: this.state.dragging,
        [N]: this.state.dragged,
      });
      return t.createElement(
        u.default,
        y({}, J, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop,
        }),
        t.cloneElement(t.Children.only(S), {
          className: A,
          style: { ...S.props.style, ...Y },
          transform: j,
        })
      );
    }
  }
  (e.default = m),
    v(m, "displayName", "Draggable"),
    v(m, "propTypes", {
      ...u.default.propTypes,
      axis: n.default.oneOf(["both", "x", "y", "none"]),
      bounds: n.default.oneOfType([
        n.default.shape({
          left: n.default.number,
          right: n.default.number,
          top: n.default.number,
          bottom: n.default.number,
        }),
        n.default.string,
        n.default.oneOf([!1]),
      ]),
      defaultClassName: n.default.string,
      defaultClassNameDragging: n.default.string,
      defaultClassNameDragged: n.default.string,
      defaultPosition: n.default.shape({
        x: n.default.number,
        y: n.default.number,
      }),
      positionOffset: n.default.shape({
        x: n.default.oneOfType([n.default.number, n.default.string]),
        y: n.default.oneOfType([n.default.number, n.default.string]),
      }),
      position: n.default.shape({ x: n.default.number, y: n.default.number }),
      className: l.dontSetMe,
      style: l.dontSetMe,
      transform: l.dontSetMe,
    }),
    v(m, "defaultProps", {
      ...u.default.defaultProps,
      axis: "both",
      bounds: !1,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: { x: 0, y: 0 },
      scale: 1,
    });
})(oh);
const { default: yh, DraggableCore: d1 } = oh;
ls.exports = yh;
ls.exports.default = yh;
ls.exports.DraggableCore = d1;
var p1 = ls.exports,
  ha = {};
ha.__esModule = !0;
ha.cloneElement = w1;
var h1 = m1(k);
function m1(e) {
  return e && e.__esModule ? e : { default: e };
}
function Kc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kc(Object(n), !0).forEach(function (r) {
          v1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Kc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function v1(e, t, n) {
  return (
    (t = y1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function y1(e) {
  var t = g1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function g1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w1(e, t) {
  return (
    t.style && e.props.style && (t.style = Xc(Xc({}, e.props.style), t.style)),
    t.className &&
      e.props.className &&
      (t.className = e.props.className + " " + t.className),
    h1.default.cloneElement(e, t)
  );
}
var ai = {};
ai.__esModule = !0;
ai.resizableProps = void 0;
var B = S1(us);
function S1(e) {
  return e && e.__esModule ? e : { default: e };
}
var E1 = {
  axis: B.default.oneOf(["both", "x", "y", "none"]),
  className: B.default.string,
  children: B.default.element.isRequired,
  draggableOpts: B.default.shape({
    allowAnyClick: B.default.bool,
    cancel: B.default.string,
    children: B.default.node,
    disabled: B.default.bool,
    enableUserSelectHack: B.default.bool,
    offsetParent: B.default.node,
    grid: B.default.arrayOf(B.default.number),
    handle: B.default.string,
    nodeRef: B.default.object,
    onStart: B.default.func,
    onDrag: B.default.func,
    onStop: B.default.func,
    onMouseDown: B.default.func,
    scale: B.default.number,
  }),
  height: function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var i = n[0];
    if (i.axis === "both" || i.axis === "y") {
      var o;
      return (o = B.default.number).isRequired.apply(o, n);
    }
    return B.default.number.apply(B.default, n);
  },
  handle: B.default.oneOfType([B.default.node, B.default.func]),
  handleSize: B.default.arrayOf(B.default.number),
  lockAspectRatio: B.default.bool,
  maxConstraints: B.default.arrayOf(B.default.number),
  minConstraints: B.default.arrayOf(B.default.number),
  onResizeStop: B.default.func,
  onResizeStart: B.default.func,
  onResize: B.default.func,
  resizeHandles: B.default.arrayOf(
    B.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])
  ),
  transformScale: B.default.number,
  width: function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var i = n[0];
    if (i.axis === "both" || i.axis === "x") {
      var o;
      return (o = B.default.number).isRequired.apply(o, n);
    }
    return B.default.number.apply(B.default, n);
  },
};
ai.resizableProps = E1;
ui.__esModule = !0;
ui.default = void 0;
var vr = _1(k),
  O1 = p1,
  C1 = ha,
  x1 = ai,
  P1 = [
    "children",
    "className",
    "draggableOpts",
    "width",
    "height",
    "handle",
    "handleSize",
    "lockAspectRatio",
    "axis",
    "minConstraints",
    "maxConstraints",
    "onResize",
    "onResizeStop",
    "onResizeStart",
    "resizeHandles",
    "transformScale",
  ];
function gh(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (gh = function (i) {
    return i ? n : t;
  })(e);
}
function _1(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = gh(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function nu() {
  return (
    (nu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nu.apply(this, arguments)
  );
}
function R1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Yc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Xs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yc(Object(n), !0).forEach(function (r) {
          T1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Yc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function T1(e, t, n) {
  return (
    (t = k1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function k1(e) {
  var t = N1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function N1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ru(e, t);
}
function ru(e, t) {
  return (
    (ru = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    ru(e, t)
  );
}
var ma = (function (e) {
  D1(t, e);
  function t() {
    for (var r, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return (
      (r = e.call.apply(e, [this].concat(o)) || this),
      (r.handleRefs = {}),
      (r.lastHandleRect = null),
      (r.slack = null),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.componentWillUnmount = function () {
      this.resetData();
    }),
    (n.resetData = function () {
      this.lastHandleRect = this.slack = null;
    }),
    (n.runConstraints = function (i, o) {
      var s = this.props,
        l = s.minConstraints,
        u = s.maxConstraints,
        a = s.lockAspectRatio;
      if (!l && !u && !a) return [i, o];
      if (a) {
        var c = this.props.width / this.props.height,
          p = i - this.props.width,
          h = o - this.props.height;
        Math.abs(p) > Math.abs(h * c) ? (o = i / c) : (i = o * c);
      }
      var y = i,
        v = o,
        w = this.slack || [0, 0],
        _ = w[0],
        m = w[1];
      return (
        (i += _),
        (o += m),
        l && ((i = Math.max(l[0], i)), (o = Math.max(l[1], o))),
        u && ((i = Math.min(u[0], i)), (o = Math.min(u[1], o))),
        (this.slack = [_ + (y - i), m + (v - o)]),
        [i, o]
      );
    }),
    (n.resizeHandler = function (i, o) {
      var s = this;
      return function (l, u) {
        var a = u.node,
          c = u.deltaX,
          p = u.deltaY;
        i === "onResizeStart" && s.resetData();
        var h =
            (s.props.axis === "both" || s.props.axis === "x") &&
            o !== "n" &&
            o !== "s",
          y =
            (s.props.axis === "both" || s.props.axis === "y") &&
            o !== "e" &&
            o !== "w";
        if (!(!h && !y)) {
          var v = o[0],
            w = o[o.length - 1],
            _ = a.getBoundingClientRect();
          if (s.lastHandleRect != null) {
            if (w === "w") {
              var m = _.left - s.lastHandleRect.left;
              c += m;
            }
            if (v === "n") {
              var f = _.top - s.lastHandleRect.top;
              p += f;
            }
          }
          (s.lastHandleRect = _), w === "w" && (c = -c), v === "n" && (p = -p);
          var d = s.props.width + (h ? c / s.props.transformScale : 0),
            g = s.props.height + (y ? p / s.props.transformScale : 0),
            S = s.runConstraints(d, g);
          (d = S[0]), (g = S[1]);
          var O = d !== s.props.width || g !== s.props.height,
            E = typeof s.props[i] == "function" ? s.props[i] : null,
            x = i === "onResize" && !O;
          E &&
            !x &&
            (l.persist == null || l.persist(),
            E(l, { node: a, size: { width: d, height: g }, handle: o })),
            i === "onResizeStop" && s.resetData();
        }
      };
    }),
    (n.renderResizeHandle = function (i, o) {
      var s = this.props.handle;
      if (!s)
        return vr.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + i,
          ref: o,
        });
      if (typeof s == "function") return s(i, o);
      var l = typeof s.type == "string",
        u = Xs({ ref: o }, l ? {} : { handleAxis: i });
      return vr.cloneElement(s, u);
    }),
    (n.render = function () {
      var i = this,
        o = this.props,
        s = o.children,
        l = o.className,
        u = o.draggableOpts;
      o.width,
        o.height,
        o.handle,
        o.handleSize,
        o.lockAspectRatio,
        o.axis,
        o.minConstraints,
        o.maxConstraints,
        o.onResize,
        o.onResizeStop,
        o.onResizeStart;
      var a = o.resizeHandles;
      o.transformScale;
      var c = R1(o, P1);
      return (0, C1.cloneElement)(
        s,
        Xs(
          Xs({}, c),
          {},
          {
            className: (l ? l + " " : "") + "react-resizable",
            children: [].concat(
              s.props.children,
              a.map(function (p) {
                var h,
                  y =
                    (h = i.handleRefs[p]) != null
                      ? h
                      : (i.handleRefs[p] = vr.createRef());
                return vr.createElement(
                  O1.DraggableCore,
                  nu({}, u, {
                    nodeRef: y,
                    key: "resizableHandle-" + p,
                    onStop: i.resizeHandler("onResizeStop", p),
                    onStart: i.resizeHandler("onResizeStart", p),
                    onDrag: i.resizeHandler("onResize", p),
                  }),
                  i.renderResizeHandle(p, y)
                );
              })
            ),
          }
        )
      );
    }),
    t
  );
})(vr.Component);
ui.default = ma;
ma.propTypes = x1.resizableProps;
ma.defaultProps = {
  axis: "both",
  handleSize: [20, 20],
  lockAspectRatio: !1,
  minConstraints: [20, 20],
  maxConstraints: [1 / 0, 1 / 0],
  resizeHandles: ["se"],
  transformScale: 1,
};
var ds = {};
ds.__esModule = !0;
ds.default = void 0;
var Ys = z1(k),
  M1 = wh(us),
  F1 = wh(ui),
  L1 = ai,
  j1 = [
    "handle",
    "handleSize",
    "onResize",
    "onResizeStart",
    "onResizeStop",
    "draggableOpts",
    "minConstraints",
    "maxConstraints",
    "lockAspectRatio",
    "axis",
    "width",
    "height",
    "resizeHandles",
    "style",
    "transformScale",
  ];
function wh(e) {
  return e && e.__esModule ? e : { default: e };
}
function Sh(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Sh = function (i) {
    return i ? n : t;
  })(e);
}
function z1(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Sh(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function iu() {
  return (
    (iu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    iu.apply(this, arguments)
  );
}
function Gc(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ko(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gc(Object(n), !0).forEach(function (r) {
          I1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Gc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function I1(e, t, n) {
  return (
    (t = A1(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function A1(e) {
  var t = $1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function $1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function b1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function U1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ou(e, t);
}
function ou(e, t) {
  return (
    (ou = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    ou(e, t)
  );
}
var Eh = (function (e) {
  U1(t, e);
  function t() {
    for (var r, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return (
      (r = e.call.apply(e, [this].concat(o)) || this),
      (r.state = {
        width: r.props.width,
        height: r.props.height,
        propsWidth: r.props.width,
        propsHeight: r.props.height,
      }),
      (r.onResize = function (l, u) {
        var a = u.size;
        r.props.onResize
          ? (l.persist == null || l.persist(),
            r.setState(a, function () {
              return r.props.onResize && r.props.onResize(l, u);
            }))
          : r.setState(a);
      }),
      r
    );
  }
  t.getDerivedStateFromProps = function (i, o) {
    return o.propsWidth !== i.width || o.propsHeight !== i.height
      ? {
          width: i.width,
          height: i.height,
          propsWidth: i.width,
          propsHeight: i.height,
        }
      : null;
  };
  var n = t.prototype;
  return (
    (n.render = function () {
      var i = this.props,
        o = i.handle,
        s = i.handleSize;
      i.onResize;
      var l = i.onResizeStart,
        u = i.onResizeStop,
        a = i.draggableOpts,
        c = i.minConstraints,
        p = i.maxConstraints,
        h = i.lockAspectRatio,
        y = i.axis;
      i.width, i.height;
      var v = i.resizeHandles,
        w = i.style,
        _ = i.transformScale,
        m = b1(i, j1);
      return Ys.createElement(
        F1.default,
        {
          axis: y,
          draggableOpts: a,
          handle: o,
          handleSize: s,
          height: this.state.height,
          lockAspectRatio: h,
          maxConstraints: p,
          minConstraints: c,
          onResizeStart: l,
          onResize: this.onResize,
          onResizeStop: u,
          resizeHandles: v,
          transformScale: _,
          width: this.state.width,
        },
        Ys.createElement(
          "div",
          iu({}, m, {
            style: ko(
              ko({}, w),
              {},
              {
                width: this.state.width + "px",
                height: this.state.height + "px",
              }
            ),
          })
        )
      );
    }),
    t
  );
})(Ys.Component);
ds.default = Eh;
Eh.propTypes = ko(
  ko({}, L1.resizableProps),
  {},
  { children: M1.default.element }
);
ca.exports = function () {
  throw new Error(
    "Don't instantiate Resizable directly! Use require('react-resizable').Resizable"
  );
};
ca.exports.Resizable = ui.default;
var va = (ca.exports.ResizableBox = ds.default);
function su(e, t) {
  return (
    (su = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    su(e, t)
  );
}
function ci(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    su(e, t);
}
var fi = (function () {
  function e() {
    this.listeners = [];
  }
  var t = e.prototype;
  return (
    (t.subscribe = function (r) {
      var i = this,
        o = r || function () {};
      return (
        this.listeners.push(o),
        this.onSubscribe(),
        function () {
          (i.listeners = i.listeners.filter(function (s) {
            return s !== o;
          })),
            i.onUnsubscribe();
        }
      );
    }),
    (t.hasListeners = function () {
      return this.listeners.length > 0;
    }),
    (t.onSubscribe = function () {}),
    (t.onUnsubscribe = function () {}),
    e
  );
})();
function K() {
  return (
    (K = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    K.apply(null, arguments)
  );
}
var No = typeof window > "u";
function xe() {}
function B1(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function lu(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Do(e) {
  return Array.isArray(e) ? e : [e];
}
function Oh(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Yi(e, t, n) {
  return ps(e)
    ? typeof t == "function"
      ? K({}, n, { queryKey: e, queryFn: t })
      : K({}, t, { queryKey: e })
    : e;
}
function $t(e, t, n) {
  return ps(e) ? [K({}, t, { queryKey: e }), n] : [e || {}, t];
}
function H1(e, t) {
  if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
  if (e === !1 && t === !1) return "none";
  var n = e ?? !t;
  return n ? "active" : "inactive";
}
function Jc(e, t) {
  var n = e.active,
    r = e.exact,
    i = e.fetching,
    o = e.inactive,
    s = e.predicate,
    l = e.queryKey,
    u = e.stale;
  if (ps(l)) {
    if (r) {
      if (t.queryHash !== ya(l, t.options)) return !1;
    } else if (!Mo(t.queryKey, l)) return !1;
  }
  var a = H1(n, o);
  if (a === "none") return !1;
  if (a !== "all") {
    var c = t.isActive();
    if ((a === "active" && !c) || (a === "inactive" && c)) return !1;
  }
  return !(
    (typeof u == "boolean" && t.isStale() !== u) ||
    (typeof i == "boolean" && t.isFetching() !== i) ||
    (s && !s(t))
  );
}
function Zc(e, t) {
  var n = e.exact,
    r = e.fetching,
    i = e.predicate,
    o = e.mutationKey;
  if (ps(o)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (dn(t.options.mutationKey) !== dn(o)) return !1;
    } else if (!Mo(t.options.mutationKey, o)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function ya(e, t) {
  var n = (t == null ? void 0 : t.queryKeyHashFn) || dn;
  return n(e);
}
function dn(e) {
  var t = Do(e);
  return Q1(t);
}
function Q1(e) {
  return JSON.stringify(e, function (t, n) {
    return uu(n)
      ? Object.keys(n)
          .sort()
          .reduce(function (r, i) {
            return (r[i] = n[i]), r;
          }, {})
      : n;
  });
}
function Mo(e, t) {
  return Ch(Do(e), Do(t));
}
function Ch(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some(function (n) {
        return !Ch(e[n], t[n]);
      })
    : !1;
}
function Fo(e, t) {
  if (e === t) return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || (uu(e) && uu(t))) {
    for (
      var r = n ? e.length : Object.keys(e).length,
        i = n ? t : Object.keys(t),
        o = i.length,
        s = n ? [] : {},
        l = 0,
        u = 0;
      u < o;
      u++
    ) {
      var a = n ? u : i[u];
      (s[a] = Fo(e[a], t[a])), s[a] === e[a] && l++;
    }
    return r === o && l === r ? e : s;
  }
  return t;
}
function V1(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function uu(e) {
  if (!ef(e)) return !1;
  var t = e.constructor;
  if (typeof t > "u") return !0;
  var n = t.prototype;
  return !(!ef(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function ef(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ps(e) {
  return typeof e == "string" || Array.isArray(e);
}
function W1(e) {
  return new Promise(function (t) {
    setTimeout(t, e);
  });
}
function tf(e) {
  Promise.resolve()
    .then(e)
    .catch(function (t) {
      return setTimeout(function () {
        throw t;
      });
    });
}
function xh() {
  if (typeof AbortController == "function") return new AbortController();
}
var q1 = (function (e) {
    ci(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!No && (o = window) != null && o.addEventListener) {
            var s = function () {
              return i();
            };
            return (
              window.addEventListener("visibilitychange", s, !1),
              window.addEventListener("focus", s, !1),
              function () {
                window.removeEventListener("visibilitychange", s),
                  window.removeEventListener("focus", s);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          s = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (l) {
            typeof l == "boolean" ? s.setFocused(l) : s.onFocus();
          }));
      }),
      (n.setFocused = function (i) {
        (this.focused = i), i && this.onFocus();
      }),
      (n.onFocus = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isFocused = function () {
        return typeof this.focused == "boolean"
          ? this.focused
          : typeof document > "u"
          ? !0
          : [void 0, "visible", "prerender"].includes(document.visibilityState);
      }),
      t
    );
  })(fi),
  Mr = new q1(),
  K1 = (function (e) {
    ci(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!No && (o = window) != null && o.addEventListener) {
            var s = function () {
              return i();
            };
            return (
              window.addEventListener("online", s, !1),
              window.addEventListener("offline", s, !1),
              function () {
                window.removeEventListener("online", s),
                  window.removeEventListener("offline", s);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          s = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (l) {
            typeof l == "boolean" ? s.setOnline(l) : s.onOnline();
          }));
      }),
      (n.setOnline = function (i) {
        (this.online = i), i && this.onOnline();
      }),
      (n.onOnline = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isOnline = function () {
        return typeof this.online == "boolean"
          ? this.online
          : typeof navigator > "u" || typeof navigator.onLine > "u"
          ? !0
          : navigator.onLine;
      }),
      t
    );
  })(fi),
  Gi = new K1();
function X1(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function Lo(e) {
  return typeof (e == null ? void 0 : e.cancel) == "function";
}
var Ph = function (t) {
  (this.revert = t == null ? void 0 : t.revert),
    (this.silent = t == null ? void 0 : t.silent);
};
function Ji(e) {
  return e instanceof Ph;
}
var _h = function (t) {
    var n = this,
      r = !1,
      i,
      o,
      s,
      l;
    (this.abort = t.abort),
      (this.cancel = function (h) {
        return i == null ? void 0 : i(h);
      }),
      (this.cancelRetry = function () {
        r = !0;
      }),
      (this.continueRetry = function () {
        r = !1;
      }),
      (this.continue = function () {
        return o == null ? void 0 : o();
      }),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise(function (h, y) {
        (s = h), (l = y);
      }));
    var u = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onSuccess == null || t.onSuccess(y),
          o == null || o(),
          s(y));
      },
      a = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onError == null || t.onError(y),
          o == null || o(),
          l(y));
      },
      c = function () {
        return new Promise(function (y) {
          (o = y), (n.isPaused = !0), t.onPause == null || t.onPause();
        }).then(function () {
          (o = void 0),
            (n.isPaused = !1),
            t.onContinue == null || t.onContinue();
        });
      },
      p = function h() {
        if (!n.isResolved) {
          var y;
          try {
            y = t.fn();
          } catch (v) {
            y = Promise.reject(v);
          }
          (i = function (w) {
            if (
              !n.isResolved &&
              (a(new Ph(w)), n.abort == null || n.abort(), Lo(y))
            )
              try {
                y.cancel();
              } catch {}
          }),
            (n.isTransportCancelable = Lo(y)),
            Promise.resolve(y)
              .then(u)
              .catch(function (v) {
                var w, _;
                if (!n.isResolved) {
                  var m = (w = t.retry) != null ? w : 3,
                    f = (_ = t.retryDelay) != null ? _ : X1,
                    d = typeof f == "function" ? f(n.failureCount, v) : f,
                    g =
                      m === !0 ||
                      (typeof m == "number" && n.failureCount < m) ||
                      (typeof m == "function" && m(n.failureCount, v));
                  if (r || !g) {
                    a(v);
                    return;
                  }
                  n.failureCount++,
                    t.onFail == null || t.onFail(n.failureCount, v),
                    W1(d)
                      .then(function () {
                        if (!Mr.isFocused() || !Gi.isOnline()) return c();
                      })
                      .then(function () {
                        r ? a(v) : h();
                      });
                }
              });
        }
      };
    p();
  },
  Y1 = (function () {
    function e() {
      (this.queue = []),
        (this.transactions = 0),
        (this.notifyFn = function (n) {
          n();
        }),
        (this.batchNotifyFn = function (n) {
          n();
        });
    }
    var t = e.prototype;
    return (
      (t.batch = function (r) {
        var i;
        this.transactions++;
        try {
          i = r();
        } finally {
          this.transactions--, this.transactions || this.flush();
        }
        return i;
      }),
      (t.schedule = function (r) {
        var i = this;
        this.transactions
          ? this.queue.push(r)
          : tf(function () {
              i.notifyFn(r);
            });
      }),
      (t.batchCalls = function (r) {
        var i = this;
        return function () {
          for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
            s[l] = arguments[l];
          i.schedule(function () {
            r.apply(void 0, s);
          });
        };
      }),
      (t.flush = function () {
        var r = this,
          i = this.queue;
        (this.queue = []),
          i.length &&
            tf(function () {
              r.batchNotifyFn(function () {
                i.forEach(function (o) {
                  r.notifyFn(o);
                });
              });
            });
      }),
      (t.setNotifyFunction = function (r) {
        this.notifyFn = r;
      }),
      (t.setBatchNotifyFunction = function (r) {
        this.batchNotifyFn = r;
      }),
      e
    );
  })(),
  ae = new Y1(),
  Rh = console;
function jo() {
  return Rh;
}
function G1(e) {
  Rh = e;
}
var J1 = (function () {
    function e(n) {
      (this.abortSignalConsumed = !1),
        (this.hadObservers = !1),
        (this.defaultOptions = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.cache = n.cache),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.initialState = n.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = n.meta),
        this.scheduleGc();
    }
    var t = e.prototype;
    return (
      (t.setOptions = function (r) {
        var i;
        (this.options = K({}, this.defaultOptions, r)),
          (this.meta = r == null ? void 0 : r.meta),
          (this.cacheTime = Math.max(
            this.cacheTime || 0,
            (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3
          ));
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.scheduleGc = function () {
        var r = this;
        this.clearGcTimeout(),
          lu(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              r.optionalRemove();
            }, this.cacheTime));
      }),
      (t.clearGcTimeout = function () {
        this.gcTimeout &&
          (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
      }),
      (t.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching
            ? this.hadObservers && this.scheduleGc()
            : this.cache.remove(this));
      }),
      (t.setData = function (r, i) {
        var o,
          s,
          l = this.state.data,
          u = B1(r, l);
        return (
          (o = (s = this.options).isDataEqual) != null && o.call(s, l, u)
            ? (u = l)
            : this.options.structuralSharing !== !1 && (u = Fo(l, u)),
          this.dispatch({
            data: u,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
          }),
          u
        );
      }),
      (t.setState = function (r, i) {
        this.dispatch({ type: "setState", state: r, setStateOptions: i });
      }),
      (t.cancel = function (r) {
        var i,
          o = this.promise;
        return (
          (i = this.retryer) == null || i.cancel(r),
          o ? o.then(xe).catch(xe) : Promise.resolve()
        );
      }),
      (t.destroy = function () {
        this.clearGcTimeout(), this.cancel({ silent: !0 });
      }),
      (t.reset = function () {
        this.destroy(), this.setState(this.initialState);
      }),
      (t.isActive = function () {
        return this.observers.some(function (r) {
          return r.options.enabled !== !1;
        });
      }),
      (t.isFetching = function () {
        return this.state.isFetching;
      }),
      (t.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (r) {
            return r.getCurrentResult().isStale;
          })
        );
      }),
      (t.isStaleByTime = function (r) {
        return (
          r === void 0 && (r = 0),
          this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !Oh(this.state.dataUpdatedAt, r)
        );
      }),
      (t.onFocus = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnWindowFocus();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.onOnline = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnReconnect();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 &&
          (this.observers.push(r),
          (this.hadObservers = !0),
          this.clearGcTimeout(),
          this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: r,
          }));
      }),
      (t.removeObserver = function (r) {
        this.observers.indexOf(r) !== -1 &&
          ((this.observers = this.observers.filter(function (i) {
            return i !== r;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: !0 })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: r,
          }));
      }),
      (t.getObserversCount = function () {
        return this.observers.length;
      }),
      (t.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: "invalidate" });
      }),
      (t.fetch = function (r, i) {
        var o = this,
          s,
          l,
          u;
        if (this.state.isFetching) {
          if (this.state.dataUpdatedAt && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (this.promise) {
            var a;
            return (
              (a = this.retryer) == null || a.continueRetry(), this.promise
            );
          }
        }
        if ((r && this.setOptions(r), !this.options.queryFn)) {
          var c = this.observers.find(function (f) {
            return f.options.queryFn;
          });
          c && this.setOptions(c.options);
        }
        var p = Do(this.queryKey),
          h = xh(),
          y = { queryKey: p, pageParam: void 0, meta: this.meta };
        Object.defineProperty(y, "signal", {
          enumerable: !0,
          get: function () {
            if (h) return (o.abortSignalConsumed = !0), h.signal;
          },
        });
        var v = function () {
            return o.options.queryFn
              ? ((o.abortSignalConsumed = !1), o.options.queryFn(y))
              : Promise.reject("Missing queryFn");
          },
          w = {
            fetchOptions: i,
            options: this.options,
            queryKey: p,
            state: this.state,
            fetchFn: v,
            meta: this.meta,
          };
        if ((s = this.options.behavior) != null && s.onFetch) {
          var _;
          (_ = this.options.behavior) == null || _.onFetch(w);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !==
              ((l = w.fetchOptions) == null ? void 0 : l.meta))
        ) {
          var m;
          this.dispatch({
            type: "fetch",
            meta: (m = w.fetchOptions) == null ? void 0 : m.meta,
          });
        }
        return (
          (this.retryer = new _h({
            fn: w.fetchFn,
            abort: h == null || (u = h.abort) == null ? void 0 : u.bind(h),
            onSuccess: function (d) {
              o.setData(d),
                o.cache.config.onSuccess == null ||
                  o.cache.config.onSuccess(d, o),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onError: function (d) {
              (Ji(d) && d.silent) || o.dispatch({ type: "error", error: d }),
                Ji(d) ||
                  (o.cache.config.onError == null ||
                    o.cache.config.onError(d, o),
                  jo().error(d)),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onFail: function () {
              o.dispatch({ type: "failed" });
            },
            onPause: function () {
              o.dispatch({ type: "pause" });
            },
            onContinue: function () {
              o.dispatch({ type: "continue" });
            },
            retry: w.options.retry,
            retryDelay: w.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = this.reducer(this.state, r)),
          ae.batch(function () {
            i.observers.forEach(function (o) {
              o.onQueryUpdate(r);
            }),
              i.cache.notify({ query: i, type: "queryUpdated", action: r });
          });
      }),
      (t.getDefaultState = function (r) {
        var i =
            typeof r.initialData == "function"
              ? r.initialData()
              : r.initialData,
          o = typeof r.initialData < "u",
          s = o
            ? typeof r.initialDataUpdatedAt == "function"
              ? r.initialDataUpdatedAt()
              : r.initialDataUpdatedAt
            : 0,
          l = typeof i < "u";
        return {
          data: i,
          dataUpdateCount: 0,
          dataUpdatedAt: l ? s ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: l ? "success" : "idle",
        };
      }),
      (t.reducer = function (r, i) {
        var o, s;
        switch (i.type) {
          case "failed":
            return K({}, r, { fetchFailureCount: r.fetchFailureCount + 1 });
          case "pause":
            return K({}, r, { isPaused: !0 });
          case "continue":
            return K({}, r, { isPaused: !1 });
          case "fetch":
            return K(
              {},
              r,
              {
                fetchFailureCount: 0,
                fetchMeta: (o = i.meta) != null ? o : null,
                isFetching: !0,
                isPaused: !1,
              },
              !r.dataUpdatedAt && { error: null, status: "loading" }
            );
          case "success":
            return K({}, r, {
              data: i.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: (s = i.dataUpdatedAt) != null ? s : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: "success",
            });
          case "error":
            var l = i.error;
            return Ji(l) && l.revert && this.revertState
              ? K({}, this.revertState)
              : K({}, r, {
                  error: l,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
          case "invalidate":
            return K({}, r, { isInvalidated: !0 });
          case "setState":
            return K({}, r, i.state);
          default:
            return r;
        }
      }),
      e
    );
  })(),
  Z1 = (function (e) {
    ci(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.config = r || {}),
        (i.queries = []),
        (i.queriesMap = {}),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.build = function (i, o, s) {
        var l,
          u = o.queryKey,
          a = (l = o.queryHash) != null ? l : ya(u, o),
          c = this.get(a);
        return (
          c ||
            ((c = new J1({
              cache: this,
              queryKey: u,
              queryHash: a,
              options: i.defaultQueryOptions(o),
              state: s,
              defaultOptions: i.getQueryDefaults(u),
              meta: o.meta,
            })),
            this.add(c)),
          c
        );
      }),
      (n.add = function (i) {
        this.queriesMap[i.queryHash] ||
          ((this.queriesMap[i.queryHash] = i),
          this.queries.push(i),
          this.notify({ type: "queryAdded", query: i }));
      }),
      (n.remove = function (i) {
        var o = this.queriesMap[i.queryHash];
        o &&
          (i.destroy(),
          (this.queries = this.queries.filter(function (s) {
            return s !== i;
          })),
          o === i && delete this.queriesMap[i.queryHash],
          this.notify({ type: "queryRemoved", query: i }));
      }),
      (n.clear = function () {
        var i = this;
        ae.batch(function () {
          i.queries.forEach(function (o) {
            i.remove(o);
          });
        });
      }),
      (n.get = function (i) {
        return this.queriesMap[i];
      }),
      (n.getAll = function () {
        return this.queries;
      }),
      (n.find = function (i, o) {
        var s = $t(i, o),
          l = s[0];
        return (
          typeof l.exact > "u" && (l.exact = !0),
          this.queries.find(function (u) {
            return Jc(l, u);
          })
        );
      }),
      (n.findAll = function (i, o) {
        var s = $t(i, o),
          l = s[0];
        return Object.keys(l).length > 0
          ? this.queries.filter(function (u) {
              return Jc(l, u);
            })
          : this.queries;
      }),
      (n.notify = function (i) {
        var o = this;
        ae.batch(function () {
          o.listeners.forEach(function (s) {
            s(i);
          });
        });
      }),
      (n.onFocus = function () {
        var i = this;
        ae.batch(function () {
          i.queries.forEach(function (o) {
            o.onFocus();
          });
        });
      }),
      (n.onOnline = function () {
        var i = this;
        ae.batch(function () {
          i.queries.forEach(function (o) {
            o.onOnline();
          });
        });
      }),
      t
    );
  })(fi),
  ew = (function () {
    function e(n) {
      (this.options = K({}, n.defaultOptions, n.options)),
        (this.mutationId = n.mutationId),
        (this.mutationCache = n.mutationCache),
        (this.observers = []),
        (this.state = n.state || tw()),
        (this.meta = n.meta);
    }
    var t = e.prototype;
    return (
      (t.setState = function (r) {
        this.dispatch({ type: "setState", state: r });
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 && this.observers.push(r);
      }),
      (t.removeObserver = function (r) {
        this.observers = this.observers.filter(function (i) {
          return i !== r;
        });
      }),
      (t.cancel = function () {
        return this.retryer
          ? (this.retryer.cancel(), this.retryer.promise.then(xe).catch(xe))
          : Promise.resolve();
      }),
      (t.continue = function () {
        return this.retryer
          ? (this.retryer.continue(), this.retryer.promise)
          : this.execute();
      }),
      (t.execute = function () {
        var r = this,
          i,
          o = this.state.status === "loading",
          s = Promise.resolve();
        return (
          o ||
            (this.dispatch({
              type: "loading",
              variables: this.options.variables,
            }),
            (s = s
              .then(function () {
                r.mutationCache.config.onMutate == null ||
                  r.mutationCache.config.onMutate(r.state.variables, r);
              })
              .then(function () {
                return r.options.onMutate == null
                  ? void 0
                  : r.options.onMutate(r.state.variables);
              })
              .then(function (l) {
                l !== r.state.context &&
                  r.dispatch({
                    type: "loading",
                    context: l,
                    variables: r.state.variables,
                  });
              }))),
          s
            .then(function () {
              return r.executeMutation();
            })
            .then(function (l) {
              (i = l),
                r.mutationCache.config.onSuccess == null ||
                  r.mutationCache.config.onSuccess(
                    i,
                    r.state.variables,
                    r.state.context,
                    r
                  );
            })
            .then(function () {
              return r.options.onSuccess == null
                ? void 0
                : r.options.onSuccess(i, r.state.variables, r.state.context);
            })
            .then(function () {
              return r.options.onSettled == null
                ? void 0
                : r.options.onSettled(
                    i,
                    null,
                    r.state.variables,
                    r.state.context
                  );
            })
            .then(function () {
              return r.dispatch({ type: "success", data: i }), i;
            })
            .catch(function (l) {
              return (
                r.mutationCache.config.onError == null ||
                  r.mutationCache.config.onError(
                    l,
                    r.state.variables,
                    r.state.context,
                    r
                  ),
                jo().error(l),
                Promise.resolve()
                  .then(function () {
                    return r.options.onError == null
                      ? void 0
                      : r.options.onError(
                          l,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    return r.options.onSettled == null
                      ? void 0
                      : r.options.onSettled(
                          void 0,
                          l,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    throw (r.dispatch({ type: "error", error: l }), l);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var r = this,
          i;
        return (
          (this.retryer = new _h({
            fn: function () {
              return r.options.mutationFn
                ? r.options.mutationFn(r.state.variables)
                : Promise.reject("No mutationFn found");
            },
            onFail: function () {
              r.dispatch({ type: "failed" });
            },
            onPause: function () {
              r.dispatch({ type: "pause" });
            },
            onContinue: function () {
              r.dispatch({ type: "continue" });
            },
            retry: (i = this.options.retry) != null ? i : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = nw(this.state, r)),
          ae.batch(function () {
            i.observers.forEach(function (o) {
              o.onMutationUpdate(r);
            }),
              i.mutationCache.notify(i);
          });
      }),
      e
    );
  })();
function tw() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
function nw(e, t) {
  switch (t.type) {
    case "failed":
      return K({}, e, { failureCount: e.failureCount + 1 });
    case "pause":
      return K({}, e, { isPaused: !0 });
    case "continue":
      return K({}, e, { isPaused: !1 });
    case "loading":
      return K({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables,
      });
    case "success":
      return K({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1,
      });
    case "error":
      return K({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error",
      });
    case "setState":
      return K({}, e, t.state);
    default:
      return e;
  }
}
var rw = (function (e) {
  ci(t, e);
  function t(r) {
    var i;
    return (
      (i = e.call(this) || this),
      (i.config = r || {}),
      (i.mutations = []),
      (i.mutationId = 0),
      i
    );
  }
  var n = t.prototype;
  return (
    (n.build = function (i, o, s) {
      var l = new ew({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: i.defaultMutationOptions(o),
        state: s,
        defaultOptions: o.mutationKey
          ? i.getMutationDefaults(o.mutationKey)
          : void 0,
        meta: o.meta,
      });
      return this.add(l), l;
    }),
    (n.add = function (i) {
      this.mutations.push(i), this.notify(i);
    }),
    (n.remove = function (i) {
      (this.mutations = this.mutations.filter(function (o) {
        return o !== i;
      })),
        i.cancel(),
        this.notify(i);
    }),
    (n.clear = function () {
      var i = this;
      ae.batch(function () {
        i.mutations.forEach(function (o) {
          i.remove(o);
        });
      });
    }),
    (n.getAll = function () {
      return this.mutations;
    }),
    (n.find = function (i) {
      return (
        typeof i.exact > "u" && (i.exact = !0),
        this.mutations.find(function (o) {
          return Zc(i, o);
        })
      );
    }),
    (n.findAll = function (i) {
      return this.mutations.filter(function (o) {
        return Zc(i, o);
      });
    }),
    (n.notify = function (i) {
      var o = this;
      ae.batch(function () {
        o.listeners.forEach(function (s) {
          s(i);
        });
      });
    }),
    (n.onFocus = function () {
      this.resumePausedMutations();
    }),
    (n.onOnline = function () {
      this.resumePausedMutations();
    }),
    (n.resumePausedMutations = function () {
      var i = this.mutations.filter(function (o) {
        return o.state.isPaused;
      });
      return ae.batch(function () {
        return i.reduce(function (o, s) {
          return o.then(function () {
            return s.continue().catch(xe);
          });
        }, Promise.resolve());
      });
    }),
    t
  );
})(fi);
function iw() {
  return {
    onFetch: function (t) {
      t.fetchFn = function () {
        var n,
          r,
          i,
          o,
          s,
          l,
          u =
            (n = t.fetchOptions) == null || (r = n.meta) == null
              ? void 0
              : r.refetchPage,
          a =
            (i = t.fetchOptions) == null || (o = i.meta) == null
              ? void 0
              : o.fetchMore,
          c = a == null ? void 0 : a.pageParam,
          p = (a == null ? void 0 : a.direction) === "forward",
          h = (a == null ? void 0 : a.direction) === "backward",
          y = ((s = t.state.data) == null ? void 0 : s.pages) || [],
          v = ((l = t.state.data) == null ? void 0 : l.pageParams) || [],
          w = xh(),
          _ = w == null ? void 0 : w.signal,
          m = v,
          f = !1,
          d =
            t.options.queryFn ||
            function () {
              return Promise.reject("Missing queryFn");
            },
          g = function (Y, j, $, W) {
            return (
              (m = W ? [j].concat(m) : [].concat(m, [j])),
              W ? [$].concat(Y) : [].concat(Y, [$])
            );
          },
          S = function (Y, j, $, W) {
            if (f) return Promise.reject("Cancelled");
            if (typeof $ > "u" && !j && Y.length) return Promise.resolve(Y);
            var T = {
                queryKey: t.queryKey,
                signal: _,
                pageParam: $,
                meta: t.meta,
              },
              F = d(T),
              A = Promise.resolve(F).then(function (z) {
                return g(Y, $, z, W);
              });
            if (Lo(F)) {
              var L = A;
              L.cancel = F.cancel;
            }
            return A;
          },
          O;
        if (!y.length) O = S([]);
        else if (p) {
          var E = typeof c < "u",
            x = E ? c : nf(t.options, y);
          O = S(y, E, x);
        } else if (h) {
          var N = typeof c < "u",
            P = N ? c : ow(t.options, y);
          O = S(y, N, P, !0);
        } else
          (function () {
            m = [];
            var J = typeof t.options.getNextPageParam > "u",
              Y = u && y[0] ? u(y[0], 0, y) : !0;
            O = Y ? S([], J, v[0]) : Promise.resolve(g([], v[0], y[0]));
            for (
              var j = function (T) {
                  O = O.then(function (F) {
                    var A = u && y[T] ? u(y[T], T, y) : !0;
                    if (A) {
                      var L = J ? v[T] : nf(t.options, F);
                      return S(F, J, L);
                    }
                    return Promise.resolve(g(F, v[T], y[T]));
                  });
                },
                $ = 1;
              $ < y.length;
              $++
            )
              j($);
          })();
        var H = O.then(function (J) {
            return { pages: J, pageParams: m };
          }),
          X = H;
        return (
          (X.cancel = function () {
            (f = !0), w == null || w.abort(), Lo(O) && O.cancel();
          }),
          H
        );
      };
    },
  };
}
function nf(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function ow(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
var sw = (function () {
    function e(n) {
      n === void 0 && (n = {}),
        (this.queryCache = n.queryCache || new Z1()),
        (this.mutationCache = n.mutationCache || new rw()),
        (this.defaultOptions = n.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var r = this;
        (this.unsubscribeFocus = Mr.subscribe(function () {
          Mr.isFocused() &&
            Gi.isOnline() &&
            (r.mutationCache.onFocus(), r.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = Gi.subscribe(function () {
            Mr.isFocused() &&
              Gi.isOnline() &&
              (r.mutationCache.onOnline(), r.queryCache.onOnline());
          }));
      }),
      (t.unmount = function () {
        var r, i;
        (r = this.unsubscribeFocus) == null || r.call(this),
          (i = this.unsubscribeOnline) == null || i.call(this);
      }),
      (t.isFetching = function (r, i) {
        var o = $t(r, i),
          s = o[0];
        return (s.fetching = !0), this.queryCache.findAll(s).length;
      }),
      (t.isMutating = function (r) {
        return this.mutationCache.findAll(K({}, r, { fetching: !0 })).length;
      }),
      (t.getQueryData = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state.data;
      }),
      (t.getQueriesData = function (r) {
        return this.getQueryCache()
          .findAll(r)
          .map(function (i) {
            var o = i.queryKey,
              s = i.state,
              l = s.data;
            return [o, l];
          });
      }),
      (t.setQueryData = function (r, i, o) {
        var s = Yi(r),
          l = this.defaultQueryOptions(s);
        return this.queryCache.build(this, l).setData(i, o);
      }),
      (t.setQueriesData = function (r, i, o) {
        var s = this;
        return ae.batch(function () {
          return s
            .getQueryCache()
            .findAll(r)
            .map(function (l) {
              var u = l.queryKey;
              return [u, s.setQueryData(u, i, o)];
            });
        });
      }),
      (t.getQueryState = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state;
      }),
      (t.removeQueries = function (r, i) {
        var o = $t(r, i),
          s = o[0],
          l = this.queryCache;
        ae.batch(function () {
          l.findAll(s).forEach(function (u) {
            l.remove(u);
          });
        });
      }),
      (t.resetQueries = function (r, i, o) {
        var s = this,
          l = $t(r, i, o),
          u = l[0],
          a = l[1],
          c = this.queryCache,
          p = K({}, u, { active: !0 });
        return ae.batch(function () {
          return (
            c.findAll(u).forEach(function (h) {
              h.reset();
            }),
            s.refetchQueries(p, a)
          );
        });
      }),
      (t.cancelQueries = function (r, i, o) {
        var s = this,
          l = $t(r, i, o),
          u = l[0],
          a = l[1],
          c = a === void 0 ? {} : a;
        typeof c.revert > "u" && (c.revert = !0);
        var p = ae.batch(function () {
          return s.queryCache.findAll(u).map(function (h) {
            return h.cancel(c);
          });
        });
        return Promise.all(p).then(xe).catch(xe);
      }),
      (t.invalidateQueries = function (r, i, o) {
        var s,
          l,
          u,
          a = this,
          c = $t(r, i, o),
          p = c[0],
          h = c[1],
          y = K({}, p, {
            active:
              (s = (l = p.refetchActive) != null ? l : p.active) != null
                ? s
                : !0,
            inactive: (u = p.refetchInactive) != null ? u : !1,
          });
        return ae.batch(function () {
          return (
            a.queryCache.findAll(p).forEach(function (v) {
              v.invalidate();
            }),
            a.refetchQueries(y, h)
          );
        });
      }),
      (t.refetchQueries = function (r, i, o) {
        var s = this,
          l = $t(r, i, o),
          u = l[0],
          a = l[1],
          c = ae.batch(function () {
            return s.queryCache.findAll(u).map(function (h) {
              return h.fetch(
                void 0,
                K({}, a, {
                  meta: { refetchPage: u == null ? void 0 : u.refetchPage },
                })
              );
            });
          }),
          p = Promise.all(c).then(xe);
        return (a != null && a.throwOnError) || (p = p.catch(xe)), p;
      }),
      (t.fetchQuery = function (r, i, o) {
        var s = Yi(r, i, o),
          l = this.defaultQueryOptions(s);
        typeof l.retry > "u" && (l.retry = !1);
        var u = this.queryCache.build(this, l);
        return u.isStaleByTime(l.staleTime)
          ? u.fetch(l)
          : Promise.resolve(u.state.data);
      }),
      (t.prefetchQuery = function (r, i, o) {
        return this.fetchQuery(r, i, o).then(xe).catch(xe);
      }),
      (t.fetchInfiniteQuery = function (r, i, o) {
        var s = Yi(r, i, o);
        return (s.behavior = iw()), this.fetchQuery(s);
      }),
      (t.prefetchInfiniteQuery = function (r, i, o) {
        return this.fetchInfiniteQuery(r, i, o).then(xe).catch(xe);
      }),
      (t.cancelMutations = function () {
        var r = this,
          i = ae.batch(function () {
            return r.mutationCache.getAll().map(function (o) {
              return o.cancel();
            });
          });
        return Promise.all(i).then(xe).catch(xe);
      }),
      (t.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (t.executeMutation = function (r) {
        return this.mutationCache.build(this, r).execute();
      }),
      (t.getQueryCache = function () {
        return this.queryCache;
      }),
      (t.getMutationCache = function () {
        return this.mutationCache;
      }),
      (t.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.setQueryDefaults = function (r, i) {
        var o = this.queryDefaults.find(function (s) {
          return dn(r) === dn(s.queryKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.queryDefaults.push({ queryKey: r, defaultOptions: i });
      }),
      (t.getQueryDefaults = function (r) {
        var i;
        return r
          ? (i = this.queryDefaults.find(function (o) {
              return Mo(r, o.queryKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (r, i) {
        var o = this.mutationDefaults.find(function (s) {
          return dn(r) === dn(s.mutationKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.mutationDefaults.push({ mutationKey: r, defaultOptions: i });
      }),
      (t.getMutationDefaults = function (r) {
        var i;
        return r
          ? (i = this.mutationDefaults.find(function (o) {
              return Mo(r, o.mutationKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (r) {
        if (r != null && r._defaulted) return r;
        var i = K(
          {},
          this.defaultOptions.queries,
          this.getQueryDefaults(r == null ? void 0 : r.queryKey),
          r,
          { _defaulted: !0 }
        );
        return (
          !i.queryHash && i.queryKey && (i.queryHash = ya(i.queryKey, i)), i
        );
      }),
      (t.defaultQueryObserverOptions = function (r) {
        return this.defaultQueryOptions(r);
      }),
      (t.defaultMutationOptions = function (r) {
        return r != null && r._defaulted
          ? r
          : K(
              {},
              this.defaultOptions.mutations,
              this.getMutationDefaults(r == null ? void 0 : r.mutationKey),
              r,
              { _defaulted: !0 }
            );
      }),
      (t.clear = function () {
        this.queryCache.clear(), this.mutationCache.clear();
      }),
      e
    );
  })(),
  lw = (function (e) {
    ci(t, e);
    function t(r, i) {
      var o;
      return (
        (o = e.call(this) || this),
        (o.client = r),
        (o.options = i),
        (o.trackedProps = []),
        (o.selectError = null),
        o.bindMethods(),
        o.setOptions(i),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.bindMethods = function () {
        (this.remove = this.remove.bind(this)),
          (this.refetch = this.refetch.bind(this));
      }),
      (n.onSubscribe = function () {
        this.listeners.length === 1 &&
          (this.currentQuery.addObserver(this),
          rf(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (n.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (n.shouldFetchOnReconnect = function () {
        return au(
          this.currentQuery,
          this.options,
          this.options.refetchOnReconnect
        );
      }),
      (n.shouldFetchOnWindowFocus = function () {
        return au(
          this.currentQuery,
          this.options,
          this.options.refetchOnWindowFocus
        );
      }),
      (n.destroy = function () {
        (this.listeners = []),
          this.clearTimers(),
          this.currentQuery.removeObserver(this);
      }),
      (n.setOptions = function (i, o) {
        var s = this.options,
          l = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(i)),
          typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = s.queryKey),
          this.updateQuery();
        var u = this.hasListeners();
        u && of(this.currentQuery, l, this.options, s) && this.executeFetch(),
          this.updateResult(o),
          u &&
            (this.currentQuery !== l ||
              this.options.enabled !== s.enabled ||
              this.options.staleTime !== s.staleTime) &&
            this.updateStaleTimeout();
        var a = this.computeRefetchInterval();
        u &&
          (this.currentQuery !== l ||
            this.options.enabled !== s.enabled ||
            a !== this.currentRefetchInterval) &&
          this.updateRefetchInterval(a);
      }),
      (n.getOptimisticResult = function (i) {
        var o = this.client.defaultQueryObserverOptions(i),
          s = this.client.getQueryCache().build(this.client, o);
        return this.createResult(s, o);
      }),
      (n.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n.trackResult = function (i, o) {
        var s = this,
          l = {},
          u = function (c) {
            s.trackedProps.includes(c) || s.trackedProps.push(c);
          };
        return (
          Object.keys(i).forEach(function (a) {
            Object.defineProperty(l, a, {
              configurable: !1,
              enumerable: !0,
              get: function () {
                return u(a), i[a];
              },
            });
          }),
          (o.useErrorBoundary || o.suspense) && u("error"),
          l
        );
      }),
      (n.getNextResult = function (i) {
        var o = this;
        return new Promise(function (s, l) {
          var u = o.subscribe(function (a) {
            a.isFetching ||
              (u(),
              a.isError && i != null && i.throwOnError ? l(a.error) : s(a));
          });
        });
      }),
      (n.getCurrentQuery = function () {
        return this.currentQuery;
      }),
      (n.remove = function () {
        this.client.getQueryCache().remove(this.currentQuery);
      }),
      (n.refetch = function (i) {
        return this.fetch(
          K({}, i, {
            meta: { refetchPage: i == null ? void 0 : i.refetchPage },
          })
        );
      }),
      (n.fetchOptimistic = function (i) {
        var o = this,
          s = this.client.defaultQueryObserverOptions(i),
          l = this.client.getQueryCache().build(this.client, s);
        return l.fetch().then(function () {
          return o.createResult(l, s);
        });
      }),
      (n.fetch = function (i) {
        var o = this;
        return this.executeFetch(i).then(function () {
          return o.updateResult(), o.currentResult;
        });
      }),
      (n.executeFetch = function (i) {
        this.updateQuery();
        var o = this.currentQuery.fetch(this.options, i);
        return (i != null && i.throwOnError) || (o = o.catch(xe)), o;
      }),
      (n.updateStaleTimeout = function () {
        var i = this;
        if (
          (this.clearStaleTimeout(),
          !(No || this.currentResult.isStale || !lu(this.options.staleTime)))
        ) {
          var o = Oh(this.currentResult.dataUpdatedAt, this.options.staleTime),
            s = o + 1;
          this.staleTimeoutId = setTimeout(function () {
            i.currentResult.isStale || i.updateResult();
          }, s);
        }
      }),
      (n.computeRefetchInterval = function () {
        var i;
        return typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(
              this.currentResult.data,
              this.currentQuery
            )
          : (i = this.options.refetchInterval) != null
          ? i
          : !1;
      }),
      (n.updateRefetchInterval = function (i) {
        var o = this;
        this.clearRefetchInterval(),
          (this.currentRefetchInterval = i),
          !(
            No ||
            this.options.enabled === !1 ||
            !lu(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) &&
            (this.refetchIntervalId = setInterval(function () {
              (o.options.refetchIntervalInBackground || Mr.isFocused()) &&
                o.executeFetch();
            }, this.currentRefetchInterval));
      }),
      (n.updateTimers = function () {
        this.updateStaleTimeout(),
          this.updateRefetchInterval(this.computeRefetchInterval());
      }),
      (n.clearTimers = function () {
        this.clearStaleTimeout(), this.clearRefetchInterval();
      }),
      (n.clearStaleTimeout = function () {
        this.staleTimeoutId &&
          (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
      }),
      (n.clearRefetchInterval = function () {
        this.refetchIntervalId &&
          (clearInterval(this.refetchIntervalId),
          (this.refetchIntervalId = void 0));
      }),
      (n.createResult = function (i, o) {
        var s = this.currentQuery,
          l = this.options,
          u = this.currentResult,
          a = this.currentResultState,
          c = this.currentResultOptions,
          p = i !== s,
          h = p ? i.state : this.currentQueryInitialState,
          y = p ? this.currentResult : this.previousQueryResult,
          v = i.state,
          w = v.dataUpdatedAt,
          _ = v.error,
          m = v.errorUpdatedAt,
          f = v.isFetching,
          d = v.status,
          g = !1,
          S = !1,
          O;
        if (o.optimisticResults) {
          var E = this.hasListeners(),
            x = !E && rf(i, o),
            N = E && of(i, s, o, l);
          (x || N) && ((f = !0), w || (d = "loading"));
        }
        if (
          o.keepPreviousData &&
          !v.dataUpdateCount &&
          y != null &&
          y.isSuccess &&
          d !== "error"
        )
          (O = y.data), (w = y.dataUpdatedAt), (d = y.status), (g = !0);
        else if (o.select && typeof v.data < "u")
          if (
            u &&
            v.data === (a == null ? void 0 : a.data) &&
            o.select === this.selectFn
          )
            O = this.selectResult;
          else
            try {
              (this.selectFn = o.select),
                (O = o.select(v.data)),
                o.structuralSharing !== !1 &&
                  (O = Fo(u == null ? void 0 : u.data, O)),
                (this.selectResult = O),
                (this.selectError = null);
            } catch (X) {
              jo().error(X), (this.selectError = X);
            }
        else O = v.data;
        if (
          typeof o.placeholderData < "u" &&
          typeof O > "u" &&
          (d === "loading" || d === "idle")
        ) {
          var P;
          if (
            u != null &&
            u.isPlaceholderData &&
            o.placeholderData === (c == null ? void 0 : c.placeholderData)
          )
            P = u.data;
          else if (
            ((P =
              typeof o.placeholderData == "function"
                ? o.placeholderData()
                : o.placeholderData),
            o.select && typeof P < "u")
          )
            try {
              (P = o.select(P)),
                o.structuralSharing !== !1 &&
                  (P = Fo(u == null ? void 0 : u.data, P)),
                (this.selectError = null);
            } catch (X) {
              jo().error(X), (this.selectError = X);
            }
          typeof P < "u" && ((d = "success"), (O = P), (S = !0));
        }
        this.selectError &&
          ((_ = this.selectError),
          (O = this.selectResult),
          (m = Date.now()),
          (d = "error"));
        var H = {
          status: d,
          isLoading: d === "loading",
          isSuccess: d === "success",
          isError: d === "error",
          isIdle: d === "idle",
          data: O,
          dataUpdatedAt: w,
          error: _,
          errorUpdatedAt: m,
          failureCount: v.fetchFailureCount,
          errorUpdateCount: v.errorUpdateCount,
          isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
          isFetchedAfterMount:
            v.dataUpdateCount > h.dataUpdateCount ||
            v.errorUpdateCount > h.errorUpdateCount,
          isFetching: f,
          isRefetching: f && d !== "loading",
          isLoadingError: d === "error" && v.dataUpdatedAt === 0,
          isPlaceholderData: S,
          isPreviousData: g,
          isRefetchError: d === "error" && v.dataUpdatedAt !== 0,
          isStale: ga(i, o),
          refetch: this.refetch,
          remove: this.remove,
        };
        return H;
      }),
      (n.shouldNotifyListeners = function (i, o) {
        if (!o) return !0;
        var s = this.options,
          l = s.notifyOnChangeProps,
          u = s.notifyOnChangePropsExclusions;
        if ((!l && !u) || (l === "tracked" && !this.trackedProps.length))
          return !0;
        var a = l === "tracked" ? this.trackedProps : l;
        return Object.keys(i).some(function (c) {
          var p = c,
            h = i[p] !== o[p],
            y =
              a == null
                ? void 0
                : a.some(function (w) {
                    return w === c;
                  }),
            v =
              u == null
                ? void 0
                : u.some(function (w) {
                    return w === c;
                  });
          return h && !v && (!a || y);
        });
      }),
      (n.updateResult = function (i) {
        var o = this.currentResult;
        if (
          ((this.currentResult = this.createResult(
            this.currentQuery,
            this.options
          )),
          (this.currentResultState = this.currentQuery.state),
          (this.currentResultOptions = this.options),
          !V1(this.currentResult, o))
        ) {
          var s = { cache: !0 };
          (i == null ? void 0 : i.listeners) !== !1 &&
            this.shouldNotifyListeners(this.currentResult, o) &&
            (s.listeners = !0),
            this.notify(K({}, s, i));
        }
      }),
      (n.updateQuery = function () {
        var i = this.client.getQueryCache().build(this.client, this.options);
        if (i !== this.currentQuery) {
          var o = this.currentQuery;
          (this.currentQuery = i),
            (this.currentQueryInitialState = i.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (o == null || o.removeObserver(this), i.addObserver(this));
        }
      }),
      (n.onQueryUpdate = function (i) {
        var o = {};
        i.type === "success"
          ? (o.onSuccess = !0)
          : i.type === "error" && !Ji(i.error) && (o.onError = !0),
          this.updateResult(o),
          this.hasListeners() && this.updateTimers();
      }),
      (n.notify = function (i) {
        var o = this;
        ae.batch(function () {
          i.onSuccess
            ? (o.options.onSuccess == null ||
                o.options.onSuccess(o.currentResult.data),
              o.options.onSettled == null ||
                o.options.onSettled(o.currentResult.data, null))
            : i.onError &&
              (o.options.onError == null ||
                o.options.onError(o.currentResult.error),
              o.options.onSettled == null ||
                o.options.onSettled(void 0, o.currentResult.error)),
            i.listeners &&
              o.listeners.forEach(function (s) {
                s(o.currentResult);
              }),
            i.cache &&
              o.client.getQueryCache().notify({
                query: o.currentQuery,
                type: "observerResultsUpdated",
              });
        });
      }),
      t
    );
  })(fi);
function uw(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function rf(e, t) {
  return uw(e, t) || (e.state.dataUpdatedAt > 0 && au(e, t, t.refetchOnMount));
}
function au(e, t, n) {
  if (t.enabled !== !1) {
    var r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && ga(e, t));
  }
  return !1;
}
function of(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    ga(e, n)
  );
}
function ga(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var aw = dy.unstable_batchedUpdates;
ae.setBatchNotifyFunction(aw);
var cw = console;
G1(cw);
var sf = I.createContext(void 0),
  Th = I.createContext(!1);
function kh(e) {
  return e && typeof window < "u"
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = sf),
      window.ReactQueryClientContext)
    : sf;
}
var fw = function () {
    var t = I.useContext(kh(I.useContext(Th)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  dw = function (t) {
    var n = t.client,
      r = t.contextSharing,
      i = r === void 0 ? !1 : r,
      o = t.children;
    I.useEffect(
      function () {
        return (
          n.mount(),
          function () {
            n.unmount();
          }
        );
      },
      [n]
    );
    var s = kh(i);
    return I.createElement(
      Th.Provider,
      { value: i },
      I.createElement(s.Provider, { value: n }, o)
    );
  };
function pw() {
  var e = !1;
  return {
    clearReset: function () {
      e = !1;
    },
    reset: function () {
      e = !0;
    },
    isReset: function () {
      return e;
    },
  };
}
var hw = I.createContext(pw()),
  mw = function () {
    return I.useContext(hw);
  };
function vw(e, t, n) {
  return typeof t == "function"
    ? t.apply(void 0, n)
    : typeof t == "boolean"
    ? t
    : !!e;
}
function yw(e, t) {
  var n = I.useRef(!1),
    r = I.useState(0),
    i = r[1],
    o = fw(),
    s = mw(),
    l = o.defaultQueryObserverOptions(e);
  (l.optimisticResults = !0),
    l.onError && (l.onError = ae.batchCalls(l.onError)),
    l.onSuccess && (l.onSuccess = ae.batchCalls(l.onSuccess)),
    l.onSettled && (l.onSettled = ae.batchCalls(l.onSettled)),
    l.suspense &&
      (typeof l.staleTime != "number" && (l.staleTime = 1e3),
      l.cacheTime === 0 && (l.cacheTime = 1)),
    (l.suspense || l.useErrorBoundary) &&
      (s.isReset() || (l.retryOnMount = !1));
  var u = I.useState(function () {
      return new t(o, l);
    }),
    a = u[0],
    c = a.getOptimisticResult(l);
  if (
    (I.useEffect(
      function () {
        (n.current = !0), s.clearReset();
        var p = a.subscribe(
          ae.batchCalls(function () {
            n.current &&
              i(function (h) {
                return h + 1;
              });
          })
        );
        return (
          a.updateResult(),
          function () {
            (n.current = !1), p();
          }
        );
      },
      [s, a]
    ),
    I.useEffect(
      function () {
        a.setOptions(l, { listeners: !1 });
      },
      [l, a]
    ),
    l.suspense && c.isLoading)
  )
    throw a
      .fetchOptimistic(l)
      .then(function (p) {
        var h = p.data;
        l.onSuccess == null || l.onSuccess(h),
          l.onSettled == null || l.onSettled(h, null);
      })
      .catch(function (p) {
        s.clearReset(),
          l.onError == null || l.onError(p),
          l.onSettled == null || l.onSettled(void 0, p);
      });
  if (
    c.isError &&
    !s.isReset() &&
    !c.isFetching &&
    vw(l.suspense, l.useErrorBoundary, [c.error, a.getCurrentQuery()])
  )
    throw c.error;
  return l.notifyOnChangeProps === "tracked" && (c = a.trackResult(c, l)), c;
}
function gw(e, t, n) {
  var r = Yi(e, t, n);
  return yw(r, lw);
}
const ww = { height: "calc(100% - 24px)" },
  Sw = { width: "22%", height: "100%" },
  Ew = { name: "NOT FOUND", childs: [], dir: !0, parent: null, path: "" },
  Ow = document.location.origin.includes("localhost")
    ? "http://localhost:3000"
    : document.location.origin;
function Cw(e) {
  function t(n) {
    return (
      (n.childs = n.childs.map(
        (r) => ((r.match = !0), (r.parent = n), r.dir && (r.childs = t(r)), r)
      )),
      n.childs
    );
  }
  return (
    (e.childs = e.childs.map(
      (n) => ((n.parent = e), (n.match = !0), n.dir && (n.childs = t(n)), n)
    )),
    (e.match = !0),
    e
  );
}
function xw({ setNavFiles: e, structure: t, setStructure: n }) {
  gw("structure", () => {
    t.name === "NOT FOUND" &&
      fetch(`${Ow}/api/getTree?path=/home`)
        .then((i) => i.json())
        .then((i) => {
          const o = Cw(i);
          n(o);
        })
        .catch(() => {
          n(Ew);
        });
  });
  const r = (i) => {
    const o = i.target.value,
      s = (u) => {
        (u.match = !0), u.dir && u.childs.map((a) => s(a));
      },
      l = (u, a) => {
        if (u.name.toLowerCase().includes(a.toLowerCase()))
          return (u.match = !0), !0;
        if (u.dir) {
          const c = u.childs.filter((p) => l(p, a));
          return (u.match = c.length > 0), u.match;
        }
        return (u.match = !1), !1;
      };
    s(t),
      o.trim() !== "" && t.childs.map((u) => (u.match = l(u, o))),
      n({ ...t });
  };
  return D.jsx("div", {
    style: Sw,
    children: D.jsx(va, {
      className: "resizable-box h-full",
      width: 1 / 0,
      minConstraints: [1 / 0, 1 / 0],
      maxConstraints: [1 / 0, 1 / 0],
      axis: "x",
      handle: D.jsx("span", { className: "custom-handle" }),
      resizeHandles: ["e"],
      children: D.jsxs("div", {
        className:
          "bg-main overflow-y-auto overflow-x-auto border-r-2 p-2 border-t-2 border-slate-700",
        style: ww,
        children: [
          D.jsx("input", {
            type: "search",
            placeholder: "Ex: app.js",
            className:
              "w-full bg-transparent p-1 text-white outline-none text-sm",
            onChange: r,
          }),
          D.jsx(x0, { setNavFiles: e, structure: t, setStructure: n }),
        ],
      }),
    }),
  });
}
function Pw({ file: e, setNavFiles: t, activeFile: n }) {
  const r = `flex items-center justify-between text-gray-400 h-full p-3 w-auto gap-3 ${
    n ? "bg-zinc-800" : "bg-zinc-900"
  }`;
  return D.jsxs("li", {
    className: r,
    children: [
      D.jsxs("p", {
        className: "flex items-center cursor-pointer text-xs",
        onClick: () => t(e, !0),
        children: [
          D.jsx(Tp, { className: "text-yellow-300 mr-1" }),
          " ",
          e.name,
        ],
      }),
      D.jsx("p", {
        onClick: () => t(e),
        className: "cursor-pointer",
        children: "x",
      }),
    ],
  });
}
const _w = { width: "100%" };
function Rw({ navFiles: e, setNavFiles: t, activeFile: n }) {
  return D.jsx("div", {
    className: "w-full flex h-10 bg-second",
    children: D.jsx("ul", {
      className: "flex items-center overflow-x-auto overflow-y-hidden",
      style: _w,
      children: e.map((r) =>
        D.jsx(Pw, { file: r, setNavFiles: t, activeFile: n === r }, r.id)
      ),
    }),
  });
}
function Tw(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function lf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function uf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? lf(Object(n), !0).forEach(function (r) {
          Tw(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : lf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function kw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Nw(e, t) {
  if (e == null) return {};
  var n = kw(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Dw(e, t) {
  return Mw(e) || Fw(e, t) || Lw(e, t) || jw();
}
function Mw(e) {
  if (Array.isArray(e)) return e;
}
function Fw(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [],
      r = !0,
      i = !1,
      o = void 0;
    try {
      for (
        var s = e[Symbol.iterator](), l;
        !(r = (l = s.next()).done) && (n.push(l.value), !(t && n.length === t));
        r = !0
      );
    } catch (u) {
      (i = !0), (o = u);
    } finally {
      try {
        !r && s.return != null && s.return();
      } finally {
        if (i) throw o;
      }
    }
    return n;
  }
}
function Lw(e, t) {
  if (e) {
    if (typeof e == "string") return af(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return af(e, t);
  }
}
function af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function jw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zw(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ff(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cf(Object(n), !0).forEach(function (r) {
          zw(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : cf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Iw() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return t.reduceRight(function (i, o) {
      return o(i);
    }, r);
  };
}
function Er(e) {
  return function t() {
    for (
      var n = this, r = arguments.length, i = new Array(r), o = 0;
      o < r;
      o++
    )
      i[o] = arguments[o];
    return i.length >= e.length
      ? e.apply(this, i)
      : function () {
          for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
            l[u] = arguments[u];
          return t.apply(n, [].concat(i, l));
        };
  };
}
function zo(e) {
  return {}.toString.call(e).includes("Object");
}
function Aw(e) {
  return !Object.keys(e).length;
}
function ei(e) {
  return typeof e == "function";
}
function $w(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function bw(e, t) {
  return (
    zo(t) || en("changeType"),
    Object.keys(t).some(function (n) {
      return !$w(e, n);
    }) && en("changeField"),
    t
  );
}
function Uw(e) {
  ei(e) || en("selectorType");
}
function Bw(e) {
  ei(e) || zo(e) || en("handlerType"),
    zo(e) &&
      Object.values(e).some(function (t) {
        return !ei(t);
      }) &&
      en("handlersType");
}
function Hw(e) {
  e || en("initialIsRequired"),
    zo(e) || en("initialType"),
    Aw(e) && en("initialContent");
}
function Qw(e, t) {
  throw new Error(e[t] || e.default);
}
var Vw = {
    initialIsRequired: "initial state is required",
    initialType: "initial state should be an object",
    initialContent: "initial state shouldn't be an empty object",
    handlerType: "handler should be an object or a function",
    handlersType: "all handlers should be a functions",
    selectorType: "selector should be a function",
    changeType: "provided value of changes should be an object",
    changeField:
      'it seams you want to change a field in the state which is not specified in the "initial" state',
    default: "an unknown error accured in `state-local` package",
  },
  en = Er(Qw)(Vw),
  Fi = { changes: bw, selector: Uw, handler: Bw, initial: Hw };
function Ww(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Fi.initial(e), Fi.handler(t);
  var n = { current: e },
    r = Er(Xw)(n, t),
    i = Er(Kw)(n),
    o = Er(Fi.changes)(e),
    s = Er(qw)(n);
  function l() {
    var a =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (c) {
            return c;
          };
    return Fi.selector(a), a(n.current);
  }
  function u(a) {
    Iw(r, i, o, s)(a);
  }
  return [l, u];
}
function qw(e, t) {
  return ei(t) ? t(e.current) : t;
}
function Kw(e, t) {
  return (e.current = ff(ff({}, e.current), t)), t;
}
function Xw(e, t, n) {
  return (
    ei(t)
      ? t(e.current)
      : Object.keys(n).forEach(function (r) {
          var i;
          return (i = t[r]) === null || i === void 0
            ? void 0
            : i.call(t, e.current[r]);
        }),
    n
  );
}
var Yw = { create: Ww },
  Gw = {
    paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs" },
  };
function Jw(e) {
  return function t() {
    for (
      var n = this, r = arguments.length, i = new Array(r), o = 0;
      o < r;
      o++
    )
      i[o] = arguments[o];
    return i.length >= e.length
      ? e.apply(this, i)
      : function () {
          for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
            l[u] = arguments[u];
          return t.apply(n, [].concat(i, l));
        };
  };
}
function Zw(e) {
  return {}.toString.call(e).includes("Object");
}
function eS(e) {
  return (
    e || df("configIsRequired"),
    Zw(e) || df("configType"),
    e.urls ? (tS(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function tS() {
  console.warn(Nh.deprecation);
}
function nS(e, t) {
  throw new Error(e[t] || e.default);
}
var Nh = {
    configIsRequired: "the configuration object is required",
    configType: "the configuration object should be an object",
    default: "an unknown error accured in `@monaco-editor/loader` package",
    deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
  },
  df = Jw(nS)(Nh),
  rS = { config: eS },
  iS = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduceRight(function (o, s) {
        return s(o);
      }, i);
    };
  };
function Dh(e, t) {
  return (
    Object.keys(t).forEach(function (n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], Dh(e[n], t[n]));
    }),
    uf(uf({}, e), t)
  );
}
var oS = { type: "cancelation", msg: "operation is manually canceled" };
function Gs(e) {
  var t = !1,
    n = new Promise(function (r, i) {
      e.then(function (o) {
        return t ? i(oS) : r(o);
      }),
        e.catch(i);
    });
  return (
    (n.cancel = function () {
      return (t = !0);
    }),
    n
  );
}
var sS = Yw.create({
    config: Gw,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null,
  }),
  Mh = Dw(sS, 2),
  di = Mh[0],
  hs = Mh[1];
function lS(e) {
  var t = rS.config(e),
    n = t.monaco,
    r = Nw(t, ["monaco"]);
  hs(function (i) {
    return { config: Dh(i.config, r), monaco: n };
  });
}
function uS() {
  var e = di(function (t) {
    var n = t.monaco,
      r = t.isInitialized,
      i = t.resolve;
    return { monaco: n, isInitialized: r, resolve: i };
  });
  if (!e.isInitialized) {
    if ((hs({ isInitialized: !0 }), e.monaco))
      return e.resolve(e.monaco), Gs(Js);
    if (window.monaco && window.monaco.editor)
      return Fh(window.monaco), e.resolve(window.monaco), Gs(Js);
    iS(aS, fS)(dS);
  }
  return Gs(Js);
}
function aS(e) {
  return document.body.appendChild(e);
}
function cS(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function fS(e) {
  var t = di(function (r) {
      var i = r.config,
        o = r.reject;
      return { config: i, reject: o };
    }),
    n = cS("".concat(t.config.paths.vs, "/loader.js"));
  return (
    (n.onload = function () {
      return e();
    }),
    (n.onerror = t.reject),
    n
  );
}
function dS() {
  var e = di(function (n) {
      var r = n.config,
        i = n.resolve,
        o = n.reject;
      return { config: r, resolve: i, reject: o };
    }),
    t = window.require;
  t.config(e.config),
    t(
      ["vs/editor/editor.main"],
      function (n) {
        Fh(n), e.resolve(n);
      },
      function (n) {
        e.reject(n);
      }
    );
}
function Fh(e) {
  di().monaco || hs({ monaco: e });
}
function pS() {
  return di(function (e) {
    var t = e.monaco;
    return t;
  });
}
var Js = new Promise(function (e, t) {
    return hs({ resolve: e, reject: t });
  }),
  Lh = { config: lS, init: uS, __getMonacoInstance: pS },
  hS = {
    wrapper: { display: "flex", position: "relative", textAlign: "initial" },
    fullWidth: { width: "100%" },
    hide: { display: "none" },
  },
  Zs = hS,
  mS = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  vS = mS;
function yS({ children: e }) {
  return I.createElement("div", { style: vS.container }, e);
}
var gS = yS,
  wS = gS;
function SS({
  width: e,
  height: t,
  isEditorReady: n,
  loading: r,
  _ref: i,
  className: o,
  wrapperProps: s,
}) {
  return I.createElement(
    "section",
    { style: { ...Zs.wrapper, width: e, height: t }, ...s },
    !n && I.createElement(wS, null, r),
    I.createElement("div", {
      ref: i,
      style: { ...Zs.fullWidth, ...(!n && Zs.hide) },
      className: o,
    })
  );
}
var ES = SS,
  jh = k.memo(ES);
function OS(e) {
  k.useEffect(e, []);
}
var zh = OS;
function CS(e, t, n = !0) {
  let r = k.useRef(!0);
  k.useEffect(
    r.current || !n
      ? () => {
          r.current = !1;
        }
      : e,
    t
  );
}
var He = CS;
function Fr() {}
function Un(e, t, n, r) {
  return xS(e, r) || PS(e, t, n, r);
}
function xS(e, t) {
  return e.editor.getModel(Ih(e, t));
}
function PS(e, t, n, r) {
  return e.editor.createModel(t, n, r ? Ih(e, r) : void 0);
}
function Ih(e, t) {
  return e.Uri.parse(t);
}
function _S({
  original: e,
  modified: t,
  language: n,
  originalLanguage: r,
  modifiedLanguage: i,
  originalModelPath: o,
  modifiedModelPath: s,
  keepCurrentOriginalModel: l = !1,
  keepCurrentModifiedModel: u = !1,
  theme: a = "light",
  loading: c = "Loading...",
  options: p = {},
  height: h = "100%",
  width: y = "100%",
  className: v,
  wrapperProps: w = {},
  beforeMount: _ = Fr,
  onMount: m = Fr,
}) {
  let [f, d] = k.useState(!1),
    [g, S] = k.useState(!0),
    O = k.useRef(null),
    E = k.useRef(null),
    x = k.useRef(null),
    N = k.useRef(m),
    P = k.useRef(_),
    H = k.useRef(!1);
  zh(() => {
    let j = Lh.init();
    return (
      j
        .then(($) => (E.current = $) && S(!1))
        .catch(
          ($) =>
            ($ == null ? void 0 : $.type) !== "cancelation" &&
            console.error("Monaco initialization: error:", $)
        ),
      () => (O.current ? Y() : j.cancel())
    );
  }),
    He(
      () => {
        if (O.current && E.current) {
          let j = O.current.getOriginalEditor(),
            $ = Un(E.current, e || "", r || n || "text", o || "");
          $ !== j.getModel() && j.setModel($);
        }
      },
      [o],
      f
    ),
    He(
      () => {
        if (O.current && E.current) {
          let j = O.current.getModifiedEditor(),
            $ = Un(E.current, t || "", i || n || "text", s || "");
          $ !== j.getModel() && j.setModel($);
        }
      },
      [s],
      f
    ),
    He(
      () => {
        let j = O.current.getModifiedEditor();
        j.getOption(E.current.editor.EditorOption.readOnly)
          ? j.setValue(t || "")
          : t !== j.getValue() &&
            (j.executeEdits("", [
              {
                range: j.getModel().getFullModelRange(),
                text: t || "",
                forceMoveMarkers: !0,
              },
            ]),
            j.pushUndoStop());
      },
      [t],
      f
    ),
    He(
      () => {
        var j, $;
        ($ = (j = O.current) == null ? void 0 : j.getModel()) == null ||
          $.original.setValue(e || "");
      },
      [e],
      f
    ),
    He(
      () => {
        let { original: j, modified: $ } = O.current.getModel();
        E.current.editor.setModelLanguage(j, r || n || "text"),
          E.current.editor.setModelLanguage($, i || n || "text");
      },
      [n, r, i],
      f
    ),
    He(
      () => {
        var j;
        (j = E.current) == null || j.editor.setTheme(a);
      },
      [a],
      f
    ),
    He(
      () => {
        var j;
        (j = O.current) == null || j.updateOptions(p);
      },
      [p],
      f
    );
  let X = k.useCallback(() => {
      var W;
      if (!E.current) return;
      P.current(E.current);
      let j = Un(E.current, e || "", r || n || "text", o || ""),
        $ = Un(E.current, t || "", i || n || "text", s || "");
      (W = O.current) == null || W.setModel({ original: j, modified: $ });
    }, [n, t, i, e, r, o, s]),
    J = k.useCallback(() => {
      var j;
      !H.current &&
        x.current &&
        ((O.current = E.current.editor.createDiffEditor(x.current, {
          automaticLayout: !0,
          ...p,
        })),
        X(),
        (j = E.current) == null || j.editor.setTheme(a),
        d(!0),
        (H.current = !0));
    }, [p, a, X]);
  k.useEffect(() => {
    f && N.current(O.current, E.current);
  }, [f]),
    k.useEffect(() => {
      !g && !f && J();
    }, [g, f, J]);
  function Y() {
    var $, W, T, F;
    let j = ($ = O.current) == null ? void 0 : $.getModel();
    l || (W = j == null ? void 0 : j.original) == null || W.dispose(),
      u || (T = j == null ? void 0 : j.modified) == null || T.dispose(),
      (F = O.current) == null || F.dispose();
  }
  return I.createElement(jh, {
    width: y,
    height: h,
    isEditorReady: f,
    loading: c,
    _ref: x,
    className: v,
    wrapperProps: w,
  });
}
var RS = _S;
k.memo(RS);
function TS(e) {
  let t = k.useRef();
  return (
    k.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var kS = TS,
  Li = new Map();
function NS({
  defaultValue: e,
  defaultLanguage: t,
  defaultPath: n,
  value: r,
  language: i,
  path: o,
  theme: s = "light",
  line: l,
  loading: u = "Loading...",
  options: a = {},
  overrideServices: c = {},
  saveViewState: p = !0,
  keepCurrentModel: h = !1,
  width: y = "100%",
  height: v = "100%",
  className: w,
  wrapperProps: _ = {},
  beforeMount: m = Fr,
  onMount: f = Fr,
  onChange: d,
  onValidate: g = Fr,
}) {
  let [S, O] = k.useState(!1),
    [E, x] = k.useState(!0),
    N = k.useRef(null),
    P = k.useRef(null),
    H = k.useRef(null),
    X = k.useRef(f),
    J = k.useRef(m),
    Y = k.useRef(),
    j = k.useRef(r),
    $ = kS(o),
    W = k.useRef(!1),
    T = k.useRef(!1);
  zh(() => {
    let L = Lh.init();
    return (
      L.then((z) => (N.current = z) && x(!1)).catch(
        (z) =>
          (z == null ? void 0 : z.type) !== "cancelation" &&
          console.error("Monaco initialization: error:", z)
      ),
      () => (P.current ? A() : L.cancel())
    );
  }),
    He(
      () => {
        var z, q, te, fe;
        let L = Un(N.current, e || r || "", t || i || "", o || n || "");
        L !== ((z = P.current) == null ? void 0 : z.getModel()) &&
          (p && Li.set($, (q = P.current) == null ? void 0 : q.saveViewState()),
          (te = P.current) == null || te.setModel(L),
          p && ((fe = P.current) == null || fe.restoreViewState(Li.get(o))));
      },
      [o],
      S
    ),
    He(
      () => {
        var L;
        (L = P.current) == null || L.updateOptions(a);
      },
      [a],
      S
    ),
    He(
      () => {
        !P.current ||
          r === void 0 ||
          (P.current.getOption(N.current.editor.EditorOption.readOnly)
            ? P.current.setValue(r)
            : r !== P.current.getValue() &&
              ((T.current = !0),
              P.current.executeEdits("", [
                {
                  range: P.current.getModel().getFullModelRange(),
                  text: r,
                  forceMoveMarkers: !0,
                },
              ]),
              P.current.pushUndoStop(),
              (T.current = !1)));
      },
      [r],
      S
    ),
    He(
      () => {
        var z, q;
        let L = (z = P.current) == null ? void 0 : z.getModel();
        L && i && ((q = N.current) == null || q.editor.setModelLanguage(L, i));
      },
      [i],
      S
    ),
    He(
      () => {
        var L;
        l !== void 0 && ((L = P.current) == null || L.revealLine(l));
      },
      [l],
      S
    ),
    He(
      () => {
        var L;
        (L = N.current) == null || L.editor.setTheme(s);
      },
      [s],
      S
    );
  let F = k.useCallback(() => {
    var L;
    if (!(!H.current || !N.current) && !W.current) {
      J.current(N.current);
      let z = o || n,
        q = Un(N.current, r || e || "", t || i || "", z || "");
      (P.current =
        (L = N.current) == null
          ? void 0
          : L.editor.create(
              H.current,
              { model: q, automaticLayout: !0, ...a },
              c
            )),
        p && P.current.restoreViewState(Li.get(z)),
        N.current.editor.setTheme(s),
        l !== void 0 && P.current.revealLine(l),
        O(!0),
        (W.current = !0);
    }
  }, [e, t, n, r, i, o, a, c, p, s, l]);
  k.useEffect(() => {
    S && X.current(P.current, N.current);
  }, [S]),
    k.useEffect(() => {
      !E && !S && F();
    }, [E, S, F]),
    (j.current = r),
    k.useEffect(() => {
      var L, z;
      S &&
        d &&
        ((L = Y.current) == null || L.dispose(),
        (Y.current =
          (z = P.current) == null
            ? void 0
            : z.onDidChangeModelContent((q) => {
                T.current || d(P.current.getValue(), q);
              })));
    }, [S, d]),
    k.useEffect(() => {
      if (S) {
        let L = N.current.editor.onDidChangeMarkers((z) => {
          var te;
          let q = (te = P.current.getModel()) == null ? void 0 : te.uri;
          if (q && z.find((fe) => fe.path === q.path)) {
            let fe = N.current.editor.getModelMarkers({ resource: q });
            g == null || g(fe);
          }
        });
        return () => {
          L == null || L.dispose();
        };
      }
      return () => {};
    }, [S, g]);
  function A() {
    var L, z;
    (L = Y.current) == null || L.dispose(),
      h
        ? p && Li.set(o, P.current.saveViewState())
        : (z = P.current.getModel()) == null || z.dispose(),
      P.current.dispose();
  }
  return I.createElement(jh, {
    width: y,
    height: v,
    isEditorReady: S,
    loading: u,
    _ref: H,
    className: w,
    wrapperProps: _,
  });
}
var DS = NS,
  MS = k.memo(DS),
  FS = MS;
const Ah = document.location.origin.includes("localhost")
    ? "http://localhost:3000"
    : document.location.origin,
  cu = Ah.split(":")[1],
  LS = Ah.split(":")[2],
  jS = cu.includes("localhost") || cu.includes("127.0.0.1") ? LS : 9999,
  Rn = new WebSocket(`ws://${cu}:${jS}/ws`);
function zS({ setNewDirectory: e, newDirectory: t }) {
  const [n, r] = k.useState(""),
    [i, o] = k.useState("");
  (Rn.onopen = function () {
    l(`Connected to the server.
`);
  }),
    (Rn.onmessage = function (a) {
      l(a.data);
    }),
    (Rn.onclose = function () {
      l(`Connection closed.
`);
    }),
    (Rn.onerror = function (a) {
      l(
        "Error: " +
          a.message +
          `
`
      );
    });
  function s() {
    const a = n.trim();
    a !== "" &&
      (a === "clear"
        ? o("")
        : (Rn.send(a),
          l(`$ ${a}
`)),
      r(""));
  }
  function l(a) {
    o((c) => c + a);
  }
  const u = k.useRef(null);
  return (
    k.useEffect(() => {
      u.current && (u.current.scrollTop = u.current.scrollHeight);
    }, [i]),
    k.useEffect(() => {
      if (t) {
        const a = `cd ${t}`;
        Rn.send(a), e(null);
      }
    }, [t]),
    D.jsxs(va, {
      className:
        "resizable-box overflow-auto absolute bottom-2 w-full bg-second  text-white",
      width: 1 / 0,
      height: 300,
      minConstraints: [1 / 0, 50],
      maxConstraints: [1 / 0, 500],
      axis: "y",
      handle: D.jsx("span", { className: "custom-vertical-handle" }),
      resizeHandles: ["n"],
      children: [
        D.jsx("div", {
          className: "bg-sky-400 p-2 text-xs uppercase",
          children: "Terminal",
        }),
        D.jsxs("div", {
          ref: u,
          className: "terminal-content overflow-auto max-h-full p-2",
          children: [
            D.jsx("pre", { className: "output", children: i }),
            D.jsxs("div", {
              className: "flex justify-center items-center mt-2",
              children: [
                D.jsx("span", {
                  className: "prompt mr-2",
                  children: D.jsx(Ty, {}),
                }),
                D.jsx("input", {
                  className:
                    "w-full bg-transparent p-1 text-white outline-none text-sm",
                  type: "text",
                  value: n,
                  onChange: (a) => r(a.target.value),
                  onKeyDown: (a) => {
                    a.key === "Enter" && s();
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function IS({ outPut: e }) {
  return D.jsxs(va, {
    className:
      "resizable-box overflow-auto absolute bottom-2 w-full bg-second  text-white",
    width: 1 / 0,
    height: 200,
    minConstraints: [1 / 0, 50],
    maxConstraints: [1 / 0, 500],
    axis: "y",
    handle: D.jsx("span", { className: "custom-vertical-handle" }),
    resizeHandles: ["n"],
    children: [
      D.jsx("div", {
        className: "bg-green-500 p-2 text-xs uppercase",
        children: "Output",
      }),
      D.jsx("pre", { className: "output p-2", children: e }),
    ],
  });
}
function AS(e) {
  const t = e.lastIndexOf(".");
  return t === -1 || t === 0 ? "" : e.substring(t + 1);
}
const $S = { height: "calc(100% - (48px))" };
function bS({
  isTerminalVisible: e,
  isOutputVisible: t,
  activeFile: n,
  fileContent: r,
  onSaveFileContent: i,
  outPut: o,
  newDirectory: s,
  setNewDirectory: l,
}) {
  const [u, a] = k.useState("plaintext"),
    [c, p] = k.useState(r);
  k.useEffect(() => {
    if (n) {
      const v = AS(n.name),
        _ =
          {
            js: "javascript",
            jsx: "javascript",
            html: "html",
            css: "css",
            py: "python",
            go: "go",
          }[v] || "plaintext";
      a(_);
    } else a("plaintext");
  }, [n]);
  const h = (v) => {
      (n.content = v), (r = v), p(v);
    },
    y = k.useCallback(
      (v) => {
        (v.ctrlKey || v.metaKey) &&
          v.key === "s" &&
          (v.preventDefault(), n && i(n, c));
      },
      [n, c, i]
    );
  return (
    k.useEffect(
      () => (
        document.addEventListener("keydown", y),
        () => {
          document.removeEventListener("keydown", y);
        }
      ),
      [y]
    ),
    D.jsxs("div", {
      className: "w-full bg-second relative",
      style: $S,
      children: [
        n &&
          D.jsx(
            FS,
            {
              height: "100%",
              width: "100%",
              defaultLanguage: u,
              theme: "vs-dark",
              value: r,
              onChange: h,
            },
            u
          ),
        e && D.jsx(zS, { newDirectory: s, setNewDirectory: l }),
        t && D.jsx(IS, { outPut: o }),
      ],
    })
  );
}
function US({
  handleToggleTerminal: e,
  isTerminalVisible: t,
  handleToggleOutput: n,
  isOutputVisible: r,
}) {
  return D.jsx("div", {
    className: "h-6 absolute bottom-0 left-0 w-full bg-sky-500 text-white",
    children: D.jsxs("ul", {
      className: "flex items-center h-full gap-6 text-xs px-2 text-black",
      children: [
        D.jsx("li", {
          className: "cursor-pointer",
          onClick: e,
          children: t ? "Hide Terminal" : "Show Terminal",
        }),
        D.jsx("li", {
          className: "cursor-pointer",
          onClick: n,
          children: r ? "Hide Output" : "Show Output",
        }),
      ],
    }),
  });
}
const BS = new sw(),
  HS = { height: "calc(100% - 48px)" };
function QS() {
  const [e, t] = k.useState(!1),
    [n, r] = k.useState(!1),
    [i, o] = k.useState([]),
    [s, l] = k.useState(null),
    [u, a] = k.useState(""),
    [c, p] = k.useState(""),
    [h, y] = k.useState(y0),
    [v, w] = k.useState();
  k.useEffect(() => {
    s && a(s.content);
  }, [s]);
  const _ = () => {
      t(!e);
    },
    m = () => {
      r(!n);
    },
    f = { width: "calc(100% - 22%)" },
    d = () => {
      s && Vc(s);
    },
    g = async (E, x, N) => {
      await E0(E, x, N, i, o, l);
    },
    S = async () => {
      await O0(s, p, c);
    },
    O = async (E) => {
      await C0(E, o, l, a, y, w);
    };
  return D.jsx(dw, {
    client: BS,
    children: D.jsxs("div", {
      className: "w-full h-screen bg-blue-950 overflow-hidden",
      children: [
        D.jsx(Py, {
          onSaveButtonClick: d,
          onRunButtonClick: S,
          onTopBarSearch: O,
        }),
        D.jsxs("div", {
          className: "flex w-full",
          style: HS,
          children: [
            D.jsx(xw, { setNavFiles: g, structure: h, setStructure: y }),
            D.jsxs("div", {
              style: f,
              children: [
                D.jsx(Rw, { navFiles: i, activeFile: s, setNavFiles: g }),
                D.jsx(bS, {
                  isTerminalVisible: e,
                  isOutputVisible: n,
                  activeFile: s,
                  outPut: c,
                  fileContent: u,
                  onSaveFileContent: Vc,
                  newDirectory: v,
                  setNewDirectory: w,
                }),
              ],
            }),
          ],
        }),
        D.jsx(US, {
          handleToggleTerminal: _,
          isTerminalVisible: e,
          isOutputVisible: n,
          handleToggleOutput: m,
        }),
        D.jsx(v0, {}),
      ],
    }),
  });
}
el.createRoot(document.getElementById("root")).render(
  D.jsx(I.StrictMode, { children: D.jsx(QS, {}) })
);
