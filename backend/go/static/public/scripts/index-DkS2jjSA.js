(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
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
function Wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function mh(e) {
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
var qc = { exports: {} },
  Ro = {},
  Kc = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vr = Symbol.for("react.element"),
  vh = Symbol.for("react.portal"),
  yh = Symbol.for("react.fragment"),
  gh = Symbol.for("react.strict_mode"),
  wh = Symbol.for("react.profiler"),
  Sh = Symbol.for("react.provider"),
  Eh = Symbol.for("react.context"),
  Oh = Symbol.for("react.forward_ref"),
  Ch = Symbol.for("react.suspense"),
  xh = Symbol.for("react.memo"),
  Ph = Symbol.for("react.lazy"),
  na = Symbol.iterator;
function Rh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (na && e[na]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yc = Object.assign,
  Gc = {};
function qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gc),
    (this.updater = n || Xc);
}
qn.prototype.isReactComponent = {};
qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jc() {}
Jc.prototype = qn.prototype;
function Ks(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gc),
    (this.updater = n || Xc);
}
var Xs = (Ks.prototype = new Jc());
Xs.constructor = Ks;
Yc(Xs, qn.prototype);
Xs.isPureReactComponent = !0;
var ra = Array.isArray,
  Zc = Object.prototype.hasOwnProperty,
  Ys = { current: null },
  ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function tf(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Zc.call(t, r) && !ef.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Vr,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Ys.current,
  };
}
function _h(e, t) {
  return {
    $$typeof: Vr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function kh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ia = /\/+/g;
function nl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? kh("" + e.key)
    : t.toString(36);
}
function Ri(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vr:
          case vh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + nl(l, 0) : r),
      ra(i)
        ? ((n = ""),
          e != null && (n = e.replace(ia, "$&/") + "/"),
          Ri(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (Gs(i) &&
            (i = _h(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ia, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), ra(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + nl(o, s);
      l += Ri(o, t, n, u, i);
    }
  else if (((u = Rh(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + nl(o, s++)), (l += Ri(o, t, n, u, i));
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
  return l;
}
function ii(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ri(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Th(e) {
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
var _e = { current: null },
  _i = { transition: null },
  Nh = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: _i,
    ReactCurrentOwner: Ys,
  };
function nf() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
  map: ii,
  forEach: function (e, t, n) {
    ii(
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
      ii(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ii(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = qn;
$.Fragment = yh;
$.Profiler = wh;
$.PureComponent = Ks;
$.StrictMode = gh;
$.Suspense = Ch;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nh;
$.act = nf;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Yc({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Ys.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Zc.call(t, u) &&
        !ef.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Vr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: Eh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Sh, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = tf;
$.createFactory = function (e) {
  var t = tf.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: Oh, render: e };
};
$.isValidElement = Gs;
$.lazy = function (e) {
  return { $$typeof: Ph, _payload: { _status: -1, _result: e }, _init: Th };
};
$.memo = function (e, t) {
  return { $$typeof: xh, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = _i.transition;
  _i.transition = {};
  try {
    e();
  } finally {
    _i.transition = t;
  }
};
$.unstable_act = nf;
$.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
$.useContext = function (e) {
  return _e.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
$.useId = function () {
  return _e.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return _e.current.useRef(e);
};
$.useState = function (e) {
  return _e.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return _e.current.useTransition();
};
$.version = "18.3.1";
Kc.exports = $;
var D = Kc.exports;
const W = Wc(D);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dh = D,
  Fh = Symbol.for("react.element"),
  Mh = Symbol.for("react.fragment"),
  jh = Object.prototype.hasOwnProperty,
  Lh = Dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zh = { key: !0, ref: !0, __self: !0, __source: !0 };
function rf(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) jh.call(t, r) && !zh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Fh,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Lh.current,
  };
}
Ro.Fragment = Mh;
Ro.jsx = rf;
Ro.jsxs = rf;
qc.exports = Ro;
var T = qc.exports,
  Ul = {},
  of = { exports: {} },
  Qe = {},
  lf = { exports: {} },
  sf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, M) {
    var z = R.length;
    R.push(M);
    e: for (; 0 < z; ) {
      var j = (z - 1) >>> 1,
        A = R[j];
      if (0 < i(A, M)) (R[j] = M), (R[z] = A), (z = j);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var M = R[0],
      z = R.pop();
    if (z !== M) {
      R[0] = z;
      e: for (var j = 0, A = R.length, de = A >>> 1; j < de; ) {
        var ze = 2 * (j + 1) - 1,
          at = R[ze],
          Zt = ze + 1,
          ri = R[Zt];
        if (0 > i(at, z))
          Zt < A && 0 > i(ri, at)
            ? ((R[j] = ri), (R[Zt] = z), (j = Zt))
            : ((R[j] = at), (R[ze] = z), (j = ze));
        else if (Zt < A && 0 > i(ri, z)) (R[j] = ri), (R[Zt] = z), (j = Zt);
        else break e;
      }
    }
    return M;
  }
  function i(R, M) {
    var z = R.sortIndex - M.sortIndex;
    return z !== 0 ? z : R.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    a = [],
    c = 1,
    h = null,
    p = 3,
    y = !1,
    m = !1,
    g = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(R) {
    for (var M = n(a); M !== null; ) {
      if (M.callback === null) r(a);
      else if (M.startTime <= R)
        r(a), (M.sortIndex = M.expirationTime), t(u, M);
      else break;
      M = n(a);
    }
  }
  function w(R) {
    if (((g = !1), d(R), !m))
      if (n(u) !== null) (m = !0), U(O);
      else {
        var M = n(a);
        M !== null && oe(w, M.startTime - R);
      }
  }
  function O(R, M) {
    (m = !1), g && ((g = !1), v(_), (_ = -1)), (y = !0);
    var z = p;
    try {
      for (
        d(M), h = n(u);
        h !== null && (!(h.expirationTime > M) || (R && !V()));

      ) {
        var j = h.callback;
        if (typeof j == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var A = j(h.expirationTime <= M);
          (M = e.unstable_now()),
            typeof A == "function" ? (h.callback = A) : h === n(u) && r(u),
            d(M);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var de = !0;
      else {
        var ze = n(a);
        ze !== null && oe(w, ze.startTime - M), (de = !1);
      }
      return de;
    } finally {
      (h = null), (p = z), (y = !1);
    }
  }
  var S = !1,
    E = null,
    _ = -1,
    F = 5,
    P = -1;
  function V() {
    return !(e.unstable_now() - P < F);
  }
  function ie() {
    if (E !== null) {
      var R = e.unstable_now();
      P = R;
      var M = !0;
      try {
        M = E(!0, R);
      } finally {
        M ? se() : ((S = !1), (E = null));
      }
    } else S = !1;
  }
  var se;
  if (typeof f == "function")
    se = function () {
      f(ie);
    };
  else if (typeof MessageChannel < "u") {
    var ue = new MessageChannel(),
      L = ue.port2;
    (ue.port1.onmessage = ie),
      (se = function () {
        L.postMessage(null);
      });
  } else
    se = function () {
      k(ie, 0);
    };
  function U(R) {
    (E = R), S || ((S = !0), se());
  }
  function oe(R, M) {
    _ = k(function () {
      R(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || y || ((m = !0), U(O));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (R) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = p;
      }
      var z = p;
      p = M;
      try {
        return R();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, M) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var z = p;
      p = R;
      try {
        return M();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (R, M, z) {
      var j = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? j + z : j))
          : (z = j),
        R)
      ) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return (
        (A = z + A),
        (R = {
          id: c++,
          callback: M,
          priorityLevel: R,
          startTime: z,
          expirationTime: A,
          sortIndex: -1,
        }),
        z > j
          ? ((R.sortIndex = z),
            t(a, R),
            n(u) === null &&
              R === n(a) &&
              (g ? (v(_), (_ = -1)) : (g = !0), oe(w, z - j)))
          : ((R.sortIndex = A), t(u, R), m || y || ((m = !0), U(O))),
        R
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (R) {
      var M = p;
      return function () {
        var z = p;
        p = M;
        try {
          return R.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(sf);
lf.exports = sf;
var Ah = lf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ih = D,
  He = Ah;
function x(e) {
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
var uf = new Set(),
  Rr = {};
function vn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) uf.add(t[e]);
}
var Ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $l = Object.prototype.hasOwnProperty,
  bh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  oa = {},
  la = {};
function Uh(e) {
  return $l.call(la, e)
    ? !0
    : $l.call(oa, e)
    ? !1
    : bh.test(e)
    ? (la[e] = !0)
    : ((oa[e] = !0), !1);
}
function $h(e, t, n, r) {
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
function Bh(e, t, n, r) {
  if (t === null || typeof t > "u" || $h(e, t, n, r)) return !0;
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
function ke(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ye[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ye[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ye[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ye[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ye[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ye[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ye[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Js = /[\-:]([a-z])/g;
function Zs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Js, Zs);
    ye[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Js, Zs);
    ye[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Js, Zs);
  ye[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ye[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ye[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function eu(e, t, n, r) {
  var i = ye.hasOwnProperty(t) ? ye[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bh(t, n, i, r) && (n = null),
    r || i === null
      ? Uh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Rt = Ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  oi = Symbol.for("react.element"),
  Sn = Symbol.for("react.portal"),
  En = Symbol.for("react.fragment"),
  tu = Symbol.for("react.strict_mode"),
  Bl = Symbol.for("react.profiler"),
  af = Symbol.for("react.provider"),
  cf = Symbol.for("react.context"),
  nu = Symbol.for("react.forward_ref"),
  Hl = Symbol.for("react.suspense"),
  Ql = Symbol.for("react.suspense_list"),
  ru = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  ff = Symbol.for("react.offscreen"),
  sa = Symbol.iterator;
function Jn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sa && e[sa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ee = Object.assign,
  rl;
function cr(e) {
  if (rl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      rl = (t && t[1]) || "";
    }
  return (
    `
` +
    rl +
    e
  );
}
var il = !1;
function ol(e, t) {
  if (!e || il) return "";
  il = !0;
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
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var u =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function Hh(e) {
  switch (e.tag) {
    case 5:
      return cr(e.type);
    case 16:
      return cr("Lazy");
    case 13:
      return cr("Suspense");
    case 19:
      return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ol(e.type, !1)), e;
    case 11:
      return (e = ol(e.type.render, !1)), e;
    case 1:
      return (e = ol(e.type, !0)), e;
    default:
      return "";
  }
}
function Vl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case En:
      return "Fragment";
    case Sn:
      return "Portal";
    case Bl:
      return "Profiler";
    case tu:
      return "StrictMode";
    case Hl:
      return "Suspense";
    case Ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cf:
        return (e.displayName || "Context") + ".Consumer";
      case af:
        return (e._context.displayName || "Context") + ".Provider";
      case nu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ru:
        return (
          (t = e.displayName || null), t !== null ? t : Vl(e.type) || "Memo"
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return Vl(e(t));
        } catch {}
    }
  return null;
}
function Qh(e) {
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
      return Vl(t);
    case 8:
      return t === tu ? "StrictMode" : "Mode";
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
function Kt(e) {
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
function df(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Vh(e) {
  var t = df(e) ? "checked" : "value",
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
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function li(e) {
  e._valueTracker || (e._valueTracker = Vh(e));
}
function pf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = df(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wl(e, t) {
  var n = t.checked;
  return ee({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ua(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function hf(e, t) {
  (t = t.checked), t != null && eu(e, "checked", t, !1);
}
function ql(e, t) {
  hf(e, t);
  var n = Kt(t.value),
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
    ? Kl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Kl(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function aa(e, t, n) {
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
function Kl(e, t, n) {
  (t !== "number" || Hi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function jn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return ee({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ca(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function mf(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function fa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var si,
  yf = (function (e) {
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
        si = si || document.createElement("div"),
          si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
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
  Wh = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function (e) {
  Wh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (mr[t] = mr[e]);
  });
});
function gf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (mr.hasOwnProperty(e) && mr[e])
    ? ("" + t).trim()
    : t + "px";
}
function wf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = gf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var qh = ee(
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
function Gl(e, t) {
  if (t) {
    if (qh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function Jl(e, t) {
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
var Zl = null;
function iu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var es = null,
  Ln = null,
  zn = null;
function da(e) {
  if ((e = Kr(e))) {
    if (typeof es != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Do(t)), es(e.stateNode, e.type, t));
  }
}
function Sf(e) {
  Ln ? (zn ? zn.push(e) : (zn = [e])) : (Ln = e);
}
function Ef() {
  if (Ln) {
    var e = Ln,
      t = zn;
    if (((zn = Ln = null), da(e), t)) for (e = 0; e < t.length; e++) da(t[e]);
  }
}
function Of(e, t) {
  return e(t);
}
function Cf() {}
var ll = !1;
function xf(e, t, n) {
  if (ll) return e(t, n);
  ll = !0;
  try {
    return Of(e, t, n);
  } finally {
    (ll = !1), (Ln !== null || zn !== null) && (Cf(), Ef());
  }
}
function kr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Do(n);
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
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var ts = !1;
if (Ot)
  try {
    var Zn = {};
    Object.defineProperty(Zn, "passive", {
      get: function () {
        ts = !0;
      },
    }),
      window.addEventListener("test", Zn, Zn),
      window.removeEventListener("test", Zn, Zn);
  } catch {
    ts = !1;
  }
function Kh(e, t, n, r, i, o, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var vr = !1,
  Qi = null,
  Vi = !1,
  ns = null,
  Xh = {
    onError: function (e) {
      (vr = !0), (Qi = e);
    },
  };
function Yh(e, t, n, r, i, o, l, s, u) {
  (vr = !1), (Qi = null), Kh.apply(Xh, arguments);
}
function Gh(e, t, n, r, i, o, l, s, u) {
  if ((Yh.apply(this, arguments), vr)) {
    if (vr) {
      var a = Qi;
      (vr = !1), (Qi = null);
    } else throw Error(x(198));
    Vi || ((Vi = !0), (ns = a));
  }
}
function yn(e) {
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
function Pf(e) {
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
function pa(e) {
  if (yn(e) !== e) throw Error(x(188));
}
function Jh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(x(188));
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
        if (o === n) return pa(i), e;
        if (o === r) return pa(i), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Rf(e) {
  return (e = Jh(e)), e !== null ? _f(e) : null;
}
function _f(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = _f(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var kf = He.unstable_scheduleCallback,
  ha = He.unstable_cancelCallback,
  Zh = He.unstable_shouldYield,
  em = He.unstable_requestPaint,
  le = He.unstable_now,
  tm = He.unstable_getCurrentPriorityLevel,
  ou = He.unstable_ImmediatePriority,
  Tf = He.unstable_UserBlockingPriority,
  Wi = He.unstable_NormalPriority,
  nm = He.unstable_LowPriority,
  Nf = He.unstable_IdlePriority,
  _o = null,
  pt = null;
function rm(e) {
  if (pt && typeof pt.onCommitFiberRoot == "function")
    try {
      pt.onCommitFiberRoot(_o, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : lm,
  im = Math.log,
  om = Math.LN2;
function lm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((im(e) / om) | 0)) | 0;
}
var ui = 64,
  ai = 4194304;
function dr(e) {
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
function qi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = dr(s)) : ((o &= l), o !== 0 && (r = dr(o)));
  } else (l = n & ~i), l !== 0 ? (r = dr(l)) : o !== 0 && (r = dr(o));
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
      (n = 31 - it(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function sm(e, t) {
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
function um(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - it(o),
      s = 1 << l,
      u = i[l];
    u === -1
      ? (!(s & n) || s & r) && (i[l] = sm(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function rs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Df() {
  var e = ui;
  return (ui <<= 1), !(ui & 4194240) && (ui = 64), e;
}
function sl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function am(e, t) {
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
    var i = 31 - it(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function lu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var Q = 0;
function Ff(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Mf,
  su,
  jf,
  Lf,
  zf,
  is = !1,
  ci = [],
  bt = null,
  Ut = null,
  $t = null,
  Tr = new Map(),
  Nr = new Map(),
  Lt = [],
  cm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ma(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      $t = null;
      break;
    case "pointerover":
    case "pointerout":
      Tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Nr.delete(t.pointerId);
  }
}
function er(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Kr(t)), t !== null && su(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function fm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (bt = er(bt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Ut = er(Ut, e, t, n, r, i)), !0;
    case "mouseover":
      return ($t = er($t, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Tr.set(o, er(Tr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Nr.set(o, er(Nr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Af(e) {
  var t = nn(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pf(n)), t !== null)) {
          (e.blockedOn = t),
            zf(e.priority, function () {
              jf(n);
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
function ki(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = os(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Zl = r), n.target.dispatchEvent(r), (Zl = null);
    } else return (t = Kr(n)), t !== null && su(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function va(e, t, n) {
  ki(e) && n.delete(t);
}
function dm() {
  (is = !1),
    bt !== null && ki(bt) && (bt = null),
    Ut !== null && ki(Ut) && (Ut = null),
    $t !== null && ki($t) && ($t = null),
    Tr.forEach(va),
    Nr.forEach(va);
}
function tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    is ||
      ((is = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, dm)));
}
function Dr(e) {
  function t(i) {
    return tr(i, e);
  }
  if (0 < ci.length) {
    tr(ci[0], e);
    for (var n = 1; n < ci.length; n++) {
      var r = ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    bt !== null && tr(bt, e),
      Ut !== null && tr(Ut, e),
      $t !== null && tr($t, e),
      Tr.forEach(t),
      Nr.forEach(t),
      n = 0;
    n < Lt.length;
    n++
  )
    (r = Lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); )
    Af(n), n.blockedOn === null && Lt.shift();
}
var An = Rt.ReactCurrentBatchConfig,
  Ki = !0;
function pm(e, t, n, r) {
  var i = Q,
    o = An.transition;
  An.transition = null;
  try {
    (Q = 1), uu(e, t, n, r);
  } finally {
    (Q = i), (An.transition = o);
  }
}
function hm(e, t, n, r) {
  var i = Q,
    o = An.transition;
  An.transition = null;
  try {
    (Q = 4), uu(e, t, n, r);
  } finally {
    (Q = i), (An.transition = o);
  }
}
function uu(e, t, n, r) {
  if (Ki) {
    var i = os(e, t, n, r);
    if (i === null) yl(e, t, r, Xi, n), ma(e, r);
    else if (fm(i, e, t, n, r)) r.stopPropagation();
    else if ((ma(e, r), t & 4 && -1 < cm.indexOf(e))) {
      for (; i !== null; ) {
        var o = Kr(i);
        if (
          (o !== null && Mf(o),
          (o = os(e, t, n, r)),
          o === null && yl(e, t, r, Xi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else yl(e, t, r, null, n);
  }
}
var Xi = null;
function os(e, t, n, r) {
  if (((Xi = null), (e = iu(r)), (e = nn(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xi = e), null;
}
function If(e) {
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
      switch (tm()) {
        case ou:
          return 1;
        case Tf:
          return 4;
        case Wi:
        case nm:
          return 16;
        case Nf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null,
  au = null,
  Ti = null;
function bf() {
  if (Ti) return Ti;
  var e,
    t = au,
    n = t.length,
    r,
    i = "value" in At ? At.value : At.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (Ti = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ni(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fi() {
  return !0;
}
function ya() {
  return !1;
}
function Ve(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? fi
        : ya),
      (this.isPropagationStopped = ya),
      this
    );
  }
  return (
    ee(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fi));
      },
      persist: function () {},
      isPersistent: fi,
    }),
    t
  );
}
var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  cu = Ve(Kn),
  qr = ee({}, Kn, { view: 0, detail: 0 }),
  mm = Ve(qr),
  ul,
  al,
  nr,
  ko = ee({}, qr, {
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
    getModifierState: fu,
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
        : (e !== nr &&
            (nr && e.type === "mousemove"
              ? ((ul = e.screenX - nr.screenX), (al = e.screenY - nr.screenY))
              : (al = ul = 0),
            (nr = e)),
          ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : al;
    },
  }),
  ga = Ve(ko),
  vm = ee({}, ko, { dataTransfer: 0 }),
  ym = Ve(vm),
  gm = ee({}, qr, { relatedTarget: 0 }),
  cl = Ve(gm),
  wm = ee({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sm = Ve(wm),
  Em = ee({}, Kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Om = Ve(Em),
  Cm = ee({}, Kn, { data: 0 }),
  wa = Ve(Cm),
  xm = {
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
  Pm = {
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
  Rm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _m(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rm[e]) ? !!t[e] : !1;
}
function fu() {
  return _m;
}
var km = ee({}, qr, {
    key: function (e) {
      if (e.key) {
        var t = xm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Pm[e.keyCode] || "Unidentified"
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
    getModifierState: fu,
    charCode: function (e) {
      return e.type === "keypress" ? Ni(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ni(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Tm = Ve(km),
  Nm = ee({}, ko, {
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
  Sa = Ve(Nm),
  Dm = ee({}, qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu,
  }),
  Fm = Ve(Dm),
  Mm = ee({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jm = Ve(Mm),
  Lm = ee({}, ko, {
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
  zm = Ve(Lm),
  Am = [9, 13, 27, 32],
  du = Ot && "CompositionEvent" in window,
  yr = null;
Ot && "documentMode" in document && (yr = document.documentMode);
var Im = Ot && "TextEvent" in window && !yr,
  Uf = Ot && (!du || (yr && 8 < yr && 11 >= yr)),
  Ea = " ",
  Oa = !1;
function $f(e, t) {
  switch (e) {
    case "keyup":
      return Am.indexOf(t.keyCode) !== -1;
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
function Bf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function bm(e, t) {
  switch (e) {
    case "compositionend":
      return Bf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Oa = !0), Ea);
    case "textInput":
      return (e = t.data), e === Ea && Oa ? null : e;
    default:
      return null;
  }
}
function Um(e, t) {
  if (On)
    return e === "compositionend" || (!du && $f(e, t))
      ? ((e = bf()), (Ti = au = At = null), (On = !1), e)
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
      return Uf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $m = {
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
function Ca(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$m[e.type] : t === "textarea";
}
function Hf(e, t, n, r) {
  Sf(r),
    (t = Yi(t, "onChange")),
    0 < t.length &&
      ((n = new cu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var gr = null,
  Fr = null;
function Bm(e) {
  ed(e, 0);
}
function To(e) {
  var t = Pn(e);
  if (pf(t)) return e;
}
function Hm(e, t) {
  if (e === "change") return t;
}
var Qf = !1;
if (Ot) {
  var fl;
  if (Ot) {
    var dl = "oninput" in document;
    if (!dl) {
      var xa = document.createElement("div");
      xa.setAttribute("oninput", "return;"),
        (dl = typeof xa.oninput == "function");
    }
    fl = dl;
  } else fl = !1;
  Qf = fl && (!document.documentMode || 9 < document.documentMode);
}
function Pa() {
  gr && (gr.detachEvent("onpropertychange", Vf), (Fr = gr = null));
}
function Vf(e) {
  if (e.propertyName === "value" && To(Fr)) {
    var t = [];
    Hf(t, Fr, e, iu(e)), xf(Bm, t);
  }
}
function Qm(e, t, n) {
  e === "focusin"
    ? (Pa(), (gr = t), (Fr = n), gr.attachEvent("onpropertychange", Vf))
    : e === "focusout" && Pa();
}
function Vm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return To(Fr);
}
function Wm(e, t) {
  if (e === "click") return To(t);
}
function qm(e, t) {
  if (e === "input" || e === "change") return To(t);
}
function Km(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var st = typeof Object.is == "function" ? Object.is : Km;
function Mr(e, t) {
  if (st(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!$l.call(t, i) || !st(e[i], t[i])) return !1;
  }
  return !0;
}
function Ra(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _a(e, t) {
  var n = Ra(e);
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
    n = Ra(n);
  }
}
function Wf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Wf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function qf() {
  for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hi(e.document);
  }
  return t;
}
function pu(e) {
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
function Xm(e) {
  var t = qf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && pu(n)) {
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
          (i = _a(n, o));
        var l = _a(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var Ym = Ot && "documentMode" in document && 11 >= document.documentMode,
  Cn = null,
  ls = null,
  wr = null,
  ss = !1;
function ka(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ss ||
    Cn == null ||
    Cn !== Hi(r) ||
    ((r = Cn),
    "selectionStart" in r && pu(r)
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
    (wr && Mr(wr, r)) ||
      ((wr = r),
      (r = Yi(ls, "onSelect")),
      0 < r.length &&
        ((t = new cu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Cn))));
}
function di(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xn = {
    animationend: di("Animation", "AnimationEnd"),
    animationiteration: di("Animation", "AnimationIteration"),
    animationstart: di("Animation", "AnimationStart"),
    transitionend: di("Transition", "TransitionEnd"),
  },
  pl = {},
  Kf = {};
Ot &&
  ((Kf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xn.animationend.animation,
    delete xn.animationiteration.animation,
    delete xn.animationstart.animation),
  "TransitionEvent" in window || delete xn.transitionend.transition);
function No(e) {
  if (pl[e]) return pl[e];
  if (!xn[e]) return e;
  var t = xn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Kf) return (pl[e] = t[n]);
  return e;
}
var Xf = No("animationend"),
  Yf = No("animationiteration"),
  Gf = No("animationstart"),
  Jf = No("transitionend"),
  Zf = new Map(),
  Ta =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Yt(e, t) {
  Zf.set(e, t), vn(t, [e]);
}
for (var hl = 0; hl < Ta.length; hl++) {
  var ml = Ta[hl],
    Gm = ml.toLowerCase(),
    Jm = ml[0].toUpperCase() + ml.slice(1);
  Yt(Gm, "on" + Jm);
}
Yt(Xf, "onAnimationEnd");
Yt(Yf, "onAnimationIteration");
Yt(Gf, "onAnimationStart");
Yt("dblclick", "onDoubleClick");
Yt("focusin", "onFocus");
Yt("focusout", "onBlur");
Yt(Jf, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function Na(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Gh(r, t, void 0, e), (e.currentTarget = null);
}
function ed(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== o && i.isPropagationStopped())) break e;
          Na(i, s, a), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          Na(i, s, a), (o = u);
        }
    }
  }
  if (Vi) throw ((e = ns), (Vi = !1), (ns = null), e);
}
function X(e, t) {
  var n = t[ds];
  n === void 0 && (n = t[ds] = new Set());
  var r = e + "__bubble";
  n.has(r) || (td(t, e, 2, !1), n.add(r));
}
function vl(e, t, n) {
  var r = 0;
  t && (r |= 4), td(n, e, r, t);
}
var pi = "_reactListening" + Math.random().toString(36).slice(2);
function jr(e) {
  if (!e[pi]) {
    (e[pi] = !0),
      uf.forEach(function (n) {
        n !== "selectionchange" && (Zm.has(n) || vl(n, !1, e), vl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[pi] || ((t[pi] = !0), vl("selectionchange", !1, t));
  }
}
function td(e, t, n, r) {
  switch (If(t)) {
    case 1:
      var i = pm;
      break;
    case 4:
      i = hm;
      break;
    default:
      i = uu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ts ||
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
function yl(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = nn(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  xf(function () {
    var a = o,
      c = iu(n),
      h = [];
    e: {
      var p = Zf.get(e);
      if (p !== void 0) {
        var y = cu,
          m = e;
        switch (e) {
          case "keypress":
            if (Ni(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Tm;
            break;
          case "focusin":
            (m = "focus"), (y = cl);
            break;
          case "focusout":
            (m = "blur"), (y = cl);
            break;
          case "beforeblur":
          case "afterblur":
            y = cl;
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
            y = ga;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = ym;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Fm;
            break;
          case Xf:
          case Yf:
          case Gf:
            y = Sm;
            break;
          case Jf:
            y = jm;
            break;
          case "scroll":
            y = mm;
            break;
          case "wheel":
            y = zm;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Sa;
        }
        var g = (t & 4) !== 0,
          k = !g && e === "scroll",
          v = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var f = a, d; f !== null; ) {
          d = f;
          var w = d.stateNode;
          if (
            (d.tag === 5 &&
              w !== null &&
              ((d = w),
              v !== null && ((w = kr(f, v)), w != null && g.push(Lr(f, w, d)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < g.length &&
          ((p = new y(p, m, null, n, c)), h.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Zl &&
            (m = n.relatedTarget || n.fromElement) &&
            (nn(m) || m[Ct]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((m = n.relatedTarget || n.toElement),
              (y = a),
              (m = m ? nn(m) : null),
              m !== null &&
                ((k = yn(m)), m !== k || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((y = null), (m = a)),
          y !== m)
        ) {
          if (
            ((g = ga),
            (w = "onMouseLeave"),
            (v = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Sa),
              (w = "onPointerLeave"),
              (v = "onPointerEnter"),
              (f = "pointer")),
            (k = y == null ? p : Pn(y)),
            (d = m == null ? p : Pn(m)),
            (p = new g(w, f + "leave", y, n, c)),
            (p.target = k),
            (p.relatedTarget = d),
            (w = null),
            nn(c) === a &&
              ((g = new g(v, f + "enter", m, n, c)),
              (g.target = d),
              (g.relatedTarget = k),
              (w = g)),
            (k = w),
            y && m)
          )
            t: {
              for (g = y, v = m, f = 0, d = g; d; d = wn(d)) f++;
              for (d = 0, w = v; w; w = wn(w)) d++;
              for (; 0 < f - d; ) (g = wn(g)), f--;
              for (; 0 < d - f; ) (v = wn(v)), d--;
              for (; f--; ) {
                if (g === v || (v !== null && g === v.alternate)) break t;
                (g = wn(g)), (v = wn(v));
              }
              g = null;
            }
          else g = null;
          y !== null && Da(h, p, y, g, !1),
            m !== null && k !== null && Da(h, k, m, g, !0);
        }
      }
      e: {
        if (
          ((p = a ? Pn(a) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var O = Hm;
        else if (Ca(p))
          if (Qf) O = qm;
          else {
            O = Vm;
            var S = Qm;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (O = Wm);
        if (O && (O = O(e, a))) {
          Hf(h, O, n, c);
          break e;
        }
        S && S(e, p, a),
          e === "focusout" &&
            (S = p._wrapperState) &&
            S.controlled &&
            p.type === "number" &&
            Kl(p, "number", p.value);
      }
      switch (((S = a ? Pn(a) : window), e)) {
        case "focusin":
          (Ca(S) || S.contentEditable === "true") &&
            ((Cn = S), (ls = a), (wr = null));
          break;
        case "focusout":
          wr = ls = Cn = null;
          break;
        case "mousedown":
          ss = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ss = !1), ka(h, n, c);
          break;
        case "selectionchange":
          if (Ym) break;
        case "keydown":
        case "keyup":
          ka(h, n, c);
      }
      var E;
      if (du)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        On
          ? $f(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Uf &&
          n.locale !== "ko" &&
          (On || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && On && (E = bf())
            : ((At = c),
              (au = "value" in At ? At.value : At.textContent),
              (On = !0))),
        (S = Yi(a, _)),
        0 < S.length &&
          ((_ = new wa(_, e, null, n, c)),
          h.push({ event: _, listeners: S }),
          E ? (_.data = E) : ((E = Bf(n)), E !== null && (_.data = E)))),
        (E = Im ? bm(e, n) : Um(e, n)) &&
          ((a = Yi(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new wa("onBeforeInput", "beforeinput", null, n, c)),
            h.push({ event: c, listeners: a }),
            (c.data = E)));
    }
    ed(h, t);
  });
}
function Lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = kr(e, n)),
      o != null && r.unshift(Lr(e, o, i)),
      (o = kr(e, t)),
      o != null && r.push(Lr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Da(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      i
        ? ((u = kr(n, o)), u != null && l.unshift(Lr(n, u, s)))
        : i || ((u = kr(n, o)), u != null && l.push(Lr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var ev = /\r\n?/g,
  tv = /\u0000|\uFFFD/g;
function Fa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ev,
      `
`
    )
    .replace(tv, "");
}
function hi(e, t, n) {
  if (((t = Fa(t)), Fa(e) !== t && n)) throw Error(x(425));
}
function Gi() {}
var us = null,
  as = null;
function cs(e, t) {
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
var fs = typeof setTimeout == "function" ? setTimeout : void 0,
  nv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ma = typeof Promise == "function" ? Promise : void 0,
  rv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ma < "u"
      ? function (e) {
          return Ma.resolve(null).then(e).catch(iv);
        }
      : fs;
function iv(e) {
  setTimeout(function () {
    throw e;
  });
}
function gl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Dr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Dr(t);
}
function Bt(e) {
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
function ja(e) {
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
var Xn = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + Xn,
  zr = "__reactProps$" + Xn,
  Ct = "__reactContainer$" + Xn,
  ds = "__reactEvents$" + Xn,
  ov = "__reactListeners$" + Xn,
  lv = "__reactHandles$" + Xn;
function nn(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ct] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ja(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = ja(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Kr(e) {
  return (
    (e = e[dt] || e[Ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Do(e) {
  return e[zr] || null;
}
var ps = [],
  Rn = -1;
function Gt(e) {
  return { current: e };
}
function Y(e) {
  0 > Rn || ((e.current = ps[Rn]), (ps[Rn] = null), Rn--);
}
function K(e, t) {
  Rn++, (ps[Rn] = e.current), (e.current = t);
}
var Xt = {},
  Ce = Gt(Xt),
  Fe = Gt(!1),
  cn = Xt;
function $n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
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
function Me(e) {
  return (e = e.childContextTypes), e != null;
}
function Ji() {
  Y(Fe), Y(Ce);
}
function La(e, t, n) {
  if (Ce.current !== Xt) throw Error(x(168));
  K(Ce, t), K(Fe, n);
}
function nd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, Qh(e) || "Unknown", i));
  return ee({}, n, r);
}
function Zi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (cn = Ce.current),
    K(Ce, e),
    K(Fe, Fe.current),
    !0
  );
}
function za(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = nd(e, t, cn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Fe),
      Y(Ce),
      K(Ce, e))
    : Y(Fe),
    K(Fe, n);
}
var gt = null,
  Fo = !1,
  wl = !1;
function rd(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function sv(e) {
  (Fo = !0), rd(e);
}
function Jt() {
  if (!wl && gt !== null) {
    wl = !0;
    var e = 0,
      t = Q;
    try {
      var n = gt;
      for (Q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Fo = !1);
    } catch (i) {
      throw (gt !== null && (gt = gt.slice(e + 1)), kf(ou, Jt), i);
    } finally {
      (Q = t), (wl = !1);
    }
  }
  return null;
}
var _n = [],
  kn = 0,
  eo = null,
  to = 0,
  We = [],
  qe = 0,
  fn = null,
  wt = 1,
  St = "";
function en(e, t) {
  (_n[kn++] = to), (_n[kn++] = eo), (eo = e), (to = t);
}
function id(e, t, n) {
  (We[qe++] = wt), (We[qe++] = St), (We[qe++] = fn), (fn = e);
  var r = wt;
  e = St;
  var i = 32 - it(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - it(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (wt = (1 << (32 - it(t) + i)) | (n << i) | r),
      (St = o + e);
  } else (wt = (1 << o) | (n << i) | r), (St = e);
}
function hu(e) {
  e.return !== null && (en(e, 1), id(e, 1, 0));
}
function mu(e) {
  for (; e === eo; )
    (eo = _n[--kn]), (_n[kn] = null), (to = _n[--kn]), (_n[kn] = null);
  for (; e === fn; )
    (fn = We[--qe]),
      (We[qe] = null),
      (St = We[--qe]),
      (We[qe] = null),
      (wt = We[--qe]),
      (We[qe] = null);
}
var $e = null,
  Ue = null,
  G = !1,
  rt = null;
function od(e, t) {
  var n = Ke(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Aa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), ($e = e), (Ue = Bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fn !== null ? { id: wt, overflow: St } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function hs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ms(e) {
  if (G) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Aa(e, t)) {
        if (hs(e)) throw Error(x(418));
        t = Bt(n.nextSibling);
        var r = $e;
        t && Aa(e, t)
          ? od(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), ($e = e));
      }
    } else {
      if (hs(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), ($e = e);
    }
  }
}
function Ia(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function mi(e) {
  if (e !== $e) return !1;
  if (!G) return Ia(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !cs(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (hs(e)) throw (ld(), Error(x(418)));
    for (; t; ) od(e, t), (t = Bt(t.nextSibling));
  }
  if ((Ia(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = $e ? Bt(e.stateNode.nextSibling) : null;
  return !0;
}
function ld() {
  for (var e = Ue; e; ) e = Bt(e.nextSibling);
}
function Bn() {
  (Ue = $e = null), (G = !1);
}
function vu(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var uv = Rt.ReactCurrentBatchConfig;
function rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function vi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ba(e) {
  var t = e._init;
  return t(e._payload);
}
function sd(e) {
  function t(v, f) {
    if (e) {
      var d = v.deletions;
      d === null ? ((v.deletions = [f]), (v.flags |= 16)) : d.push(f);
    }
  }
  function n(v, f) {
    if (!e) return null;
    for (; f !== null; ) t(v, f), (f = f.sibling);
    return null;
  }
  function r(v, f) {
    for (v = new Map(); f !== null; )
      f.key !== null ? v.set(f.key, f) : v.set(f.index, f), (f = f.sibling);
    return v;
  }
  function i(v, f) {
    return (v = Wt(v, f)), (v.index = 0), (v.sibling = null), v;
  }
  function o(v, f, d) {
    return (
      (v.index = d),
      e
        ? ((d = v.alternate),
          d !== null
            ? ((d = d.index), d < f ? ((v.flags |= 2), f) : d)
            : ((v.flags |= 2), f))
        : ((v.flags |= 1048576), f)
    );
  }
  function l(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function s(v, f, d, w) {
    return f === null || f.tag !== 6
      ? ((f = Rl(d, v.mode, w)), (f.return = v), f)
      : ((f = i(f, d)), (f.return = v), f);
  }
  function u(v, f, d, w) {
    var O = d.type;
    return O === En
      ? c(v, f, d.props.children, w, d.key)
      : f !== null &&
        (f.elementType === O ||
          (typeof O == "object" &&
            O !== null &&
            O.$$typeof === Ft &&
            ba(O) === f.type))
      ? ((w = i(f, d.props)), (w.ref = rr(v, f, d)), (w.return = v), w)
      : ((w = Ai(d.type, d.key, d.props, null, v.mode, w)),
        (w.ref = rr(v, f, d)),
        (w.return = v),
        w);
  }
  function a(v, f, d, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== d.containerInfo ||
      f.stateNode.implementation !== d.implementation
      ? ((f = _l(d, v.mode, w)), (f.return = v), f)
      : ((f = i(f, d.children || [])), (f.return = v), f);
  }
  function c(v, f, d, w, O) {
    return f === null || f.tag !== 7
      ? ((f = un(d, v.mode, w, O)), (f.return = v), f)
      : ((f = i(f, d)), (f.return = v), f);
  }
  function h(v, f, d) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Rl("" + f, v.mode, d)), (f.return = v), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case oi:
          return (
            (d = Ai(f.type, f.key, f.props, null, v.mode, d)),
            (d.ref = rr(v, null, f)),
            (d.return = v),
            d
          );
        case Sn:
          return (f = _l(f, v.mode, d)), (f.return = v), f;
        case Ft:
          var w = f._init;
          return h(v, w(f._payload), d);
      }
      if (fr(f) || Jn(f))
        return (f = un(f, v.mode, d, null)), (f.return = v), f;
      vi(v, f);
    }
    return null;
  }
  function p(v, f, d, w) {
    var O = f !== null ? f.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return O !== null ? null : s(v, f, "" + d, w);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case oi:
          return d.key === O ? u(v, f, d, w) : null;
        case Sn:
          return d.key === O ? a(v, f, d, w) : null;
        case Ft:
          return (O = d._init), p(v, f, O(d._payload), w);
      }
      if (fr(d) || Jn(d)) return O !== null ? null : c(v, f, d, w, null);
      vi(v, d);
    }
    return null;
  }
  function y(v, f, d, w, O) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (v = v.get(d) || null), s(f, v, "" + w, O);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case oi:
          return (v = v.get(w.key === null ? d : w.key) || null), u(f, v, w, O);
        case Sn:
          return (v = v.get(w.key === null ? d : w.key) || null), a(f, v, w, O);
        case Ft:
          var S = w._init;
          return y(v, f, d, S(w._payload), O);
      }
      if (fr(w) || Jn(w)) return (v = v.get(d) || null), c(f, v, w, O, null);
      vi(f, w);
    }
    return null;
  }
  function m(v, f, d, w) {
    for (
      var O = null, S = null, E = f, _ = (f = 0), F = null;
      E !== null && _ < d.length;
      _++
    ) {
      E.index > _ ? ((F = E), (E = null)) : (F = E.sibling);
      var P = p(v, E, d[_], w);
      if (P === null) {
        E === null && (E = F);
        break;
      }
      e && E && P.alternate === null && t(v, E),
        (f = o(P, f, _)),
        S === null ? (O = P) : (S.sibling = P),
        (S = P),
        (E = F);
    }
    if (_ === d.length) return n(v, E), G && en(v, _), O;
    if (E === null) {
      for (; _ < d.length; _++)
        (E = h(v, d[_], w)),
          E !== null &&
            ((f = o(E, f, _)), S === null ? (O = E) : (S.sibling = E), (S = E));
      return G && en(v, _), O;
    }
    for (E = r(v, E); _ < d.length; _++)
      (F = y(E, v, _, d[_], w)),
        F !== null &&
          (e && F.alternate !== null && E.delete(F.key === null ? _ : F.key),
          (f = o(F, f, _)),
          S === null ? (O = F) : (S.sibling = F),
          (S = F));
    return (
      e &&
        E.forEach(function (V) {
          return t(v, V);
        }),
      G && en(v, _),
      O
    );
  }
  function g(v, f, d, w) {
    var O = Jn(d);
    if (typeof O != "function") throw Error(x(150));
    if (((d = O.call(d)), d == null)) throw Error(x(151));
    for (
      var S = (O = null), E = f, _ = (f = 0), F = null, P = d.next();
      E !== null && !P.done;
      _++, P = d.next()
    ) {
      E.index > _ ? ((F = E), (E = null)) : (F = E.sibling);
      var V = p(v, E, P.value, w);
      if (V === null) {
        E === null && (E = F);
        break;
      }
      e && E && V.alternate === null && t(v, E),
        (f = o(V, f, _)),
        S === null ? (O = V) : (S.sibling = V),
        (S = V),
        (E = F);
    }
    if (P.done) return n(v, E), G && en(v, _), O;
    if (E === null) {
      for (; !P.done; _++, P = d.next())
        (P = h(v, P.value, w)),
          P !== null &&
            ((f = o(P, f, _)), S === null ? (O = P) : (S.sibling = P), (S = P));
      return G && en(v, _), O;
    }
    for (E = r(v, E); !P.done; _++, P = d.next())
      (P = y(E, v, _, P.value, w)),
        P !== null &&
          (e && P.alternate !== null && E.delete(P.key === null ? _ : P.key),
          (f = o(P, f, _)),
          S === null ? (O = P) : (S.sibling = P),
          (S = P));
    return (
      e &&
        E.forEach(function (ie) {
          return t(v, ie);
        }),
      G && en(v, _),
      O
    );
  }
  function k(v, f, d, w) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === En &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case oi:
          e: {
            for (var O = d.key, S = f; S !== null; ) {
              if (S.key === O) {
                if (((O = d.type), O === En)) {
                  if (S.tag === 7) {
                    n(v, S.sibling),
                      (f = i(S, d.props.children)),
                      (f.return = v),
                      (v = f);
                    break e;
                  }
                } else if (
                  S.elementType === O ||
                  (typeof O == "object" &&
                    O !== null &&
                    O.$$typeof === Ft &&
                    ba(O) === S.type)
                ) {
                  n(v, S.sibling),
                    (f = i(S, d.props)),
                    (f.ref = rr(v, S, d)),
                    (f.return = v),
                    (v = f);
                  break e;
                }
                n(v, S);
                break;
              } else t(v, S);
              S = S.sibling;
            }
            d.type === En
              ? ((f = un(d.props.children, v.mode, w, d.key)),
                (f.return = v),
                (v = f))
              : ((w = Ai(d.type, d.key, d.props, null, v.mode, w)),
                (w.ref = rr(v, f, d)),
                (w.return = v),
                (v = w));
          }
          return l(v);
        case Sn:
          e: {
            for (S = d.key; f !== null; ) {
              if (f.key === S)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === d.containerInfo &&
                  f.stateNode.implementation === d.implementation
                ) {
                  n(v, f.sibling),
                    (f = i(f, d.children || [])),
                    (f.return = v),
                    (v = f);
                  break e;
                } else {
                  n(v, f);
                  break;
                }
              else t(v, f);
              f = f.sibling;
            }
            (f = _l(d, v.mode, w)), (f.return = v), (v = f);
          }
          return l(v);
        case Ft:
          return (S = d._init), k(v, f, S(d._payload), w);
      }
      if (fr(d)) return m(v, f, d, w);
      if (Jn(d)) return g(v, f, d, w);
      vi(v, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        f !== null && f.tag === 6
          ? (n(v, f.sibling), (f = i(f, d)), (f.return = v), (v = f))
          : (n(v, f), (f = Rl(d, v.mode, w)), (f.return = v), (v = f)),
        l(v))
      : n(v, f);
  }
  return k;
}
var Hn = sd(!0),
  ud = sd(!1),
  no = Gt(null),
  ro = null,
  Tn = null,
  yu = null;
function gu() {
  yu = Tn = ro = null;
}
function wu(e) {
  var t = no.current;
  Y(no), (e._currentValue = t);
}
function vs(e, t, n) {
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
function In(e, t) {
  (ro = e),
    (yu = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (yu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (ro === null) throw Error(x(308));
      (Tn = e), (ro.dependencies = { lanes: 0, firstContext: e });
    } else Tn = Tn.next = e;
  return t;
}
var rn = null;
function Su(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function ad(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Su(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    xt(e, r)
  );
}
function xt(e, t) {
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
var Mt = !1;
function Eu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function cd(e, t) {
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
function Et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), B & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Su(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Di(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
function Ua(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
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
function io(e, t, n, r) {
  var i = e.updateQueue;
  Mt = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), l === null ? (o = a) : (l.next = a), (l = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = a) : (s.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var h = i.baseState;
    (l = 0), (c = a = u = null), (s = o);
    do {
      var p = s.lane,
        y = s.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var m = e,
            g = s;
          switch (((p = t), (y = n), g.tag)) {
            case 1:
              if (((m = g.payload), typeof m == "function")) {
                h = m.call(y, h, p);
                break e;
              }
              h = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = g.payload),
                (p = typeof m == "function" ? m.call(y, h, p) : m),
                p == null)
              )
                break e;
              h = ee({}, h, p);
              break e;
            case 2:
              Mt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [s]) : p.push(s));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((a = c = y), (u = h)) : (c = c.next = y),
          (l |= p);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = h),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (pn |= l), (e.lanes = l), (e.memoizedState = h);
  }
}
function $a(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(x(191, i));
        i.call(r);
      }
    }
}
var Xr = {},
  ht = Gt(Xr),
  Ar = Gt(Xr),
  Ir = Gt(Xr);
function on(e) {
  if (e === Xr) throw Error(x(174));
  return e;
}
function Ou(e, t) {
  switch ((K(Ir, t), K(Ar, e), K(ht, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yl(t, e));
  }
  Y(ht), K(ht, t);
}
function Qn() {
  Y(ht), Y(Ar), Y(Ir);
}
function fd(e) {
  on(Ir.current);
  var t = on(ht.current),
    n = Yl(t, e.type);
  t !== n && (K(Ar, e), K(ht, n));
}
function Cu(e) {
  Ar.current === e && (Y(ht), Y(Ar));
}
var J = Gt(0);
function oo(e) {
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
var Sl = [];
function xu() {
  for (var e = 0; e < Sl.length; e++)
    Sl[e]._workInProgressVersionPrimary = null;
  Sl.length = 0;
}
var Fi = Rt.ReactCurrentDispatcher,
  El = Rt.ReactCurrentBatchConfig,
  dn = 0,
  Z = null,
  ce = null,
  pe = null,
  lo = !1,
  Sr = !1,
  br = 0,
  av = 0;
function ge() {
  throw Error(x(321));
}
function Pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!st(e[n], t[n])) return !1;
  return !0;
}
function Ru(e, t, n, r, i, o) {
  if (
    ((dn = o),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fi.current = e === null || e.memoizedState === null ? pv : hv),
    (e = n(r, i)),
    Sr)
  ) {
    o = 0;
    do {
      if (((Sr = !1), (br = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (pe = ce = null),
        (t.updateQueue = null),
        (Fi.current = mv),
        (e = n(r, i));
    } while (Sr);
  }
  if (
    ((Fi.current = so),
    (t = ce !== null && ce.next !== null),
    (dn = 0),
    (pe = ce = Z = null),
    (lo = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function _u() {
  var e = br !== 0;
  return (br = 0), e;
}
function ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (Z.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function Je() {
  if (ce === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ce.next;
  var t = pe === null ? Z.memoizedState : pe.next;
  if (t !== null) (pe = t), (ce = e);
  else {
    if (e === null) throw Error(x(310));
    (ce = e),
      (e = {
        memoizedState: ce.memoizedState,
        baseState: ce.baseState,
        baseQueue: ce.baseQueue,
        queue: ce.queue,
        next: null,
      }),
      pe === null ? (Z.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ol(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = ce,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      a = o;
    do {
      var c = a.lane;
      if ((dn & c) === c)
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
        var h = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = h), (l = r)) : (u = u.next = h),
          (Z.lanes |= c),
          (pn |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (l = r) : (u.next = s),
      st(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Z.lanes |= o), (pn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Cl(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    st(o, t.memoizedState) || (De = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function dd() {}
function pd(e, t) {
  var n = Z,
    r = Je(),
    i = t(),
    o = !st(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (De = !0)),
    (r = r.queue),
    ku(vd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      $r(9, md.bind(null, n, r, i, t), void 0, null),
      he === null)
    )
      throw Error(x(349));
    dn & 30 || hd(n, t, i);
  }
  return i;
}
function hd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function md(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yd(t) && gd(e);
}
function vd(e, t, n) {
  return n(function () {
    yd(t) && gd(e);
  });
}
function yd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !st(e, n);
  } catch {
    return !0;
  }
}
function gd(e) {
  var t = xt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function Ba(e) {
  var t = ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dv.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function $r(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wd() {
  return Je().memoizedState;
}
function Mi(e, t, n, r) {
  var i = ft();
  (Z.flags |= e),
    (i.memoizedState = $r(1 | t, n, void 0, r === void 0 ? null : r));
}
function Mo(e, t, n, r) {
  var i = Je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ce !== null) {
    var l = ce.memoizedState;
    if (((o = l.destroy), r !== null && Pu(r, l.deps))) {
      i.memoizedState = $r(t, n, o, r);
      return;
    }
  }
  (Z.flags |= e), (i.memoizedState = $r(1 | t, n, o, r));
}
function Ha(e, t) {
  return Mi(8390656, 8, e, t);
}
function ku(e, t) {
  return Mo(2048, 8, e, t);
}
function Sd(e, t) {
  return Mo(4, 2, e, t);
}
function Ed(e, t) {
  return Mo(4, 4, e, t);
}
function Od(e, t) {
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
function Cd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Mo(4, 4, Od.bind(null, t, e), n)
  );
}
function Tu() {}
function xd(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pd(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Rd(e, t, n) {
  return dn & 21
    ? (st(n, t) || ((n = Df()), (Z.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function cv(e, t) {
  var n = Q;
  (Q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = El.transition;
  El.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = n), (El.transition = r);
  }
}
function _d() {
  return Je().memoizedState;
}
function fv(e, t, n) {
  var r = Vt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kd(e))
  )
    Td(t, n);
  else if (((n = ad(e, t, n, r)), n !== null)) {
    var i = Re();
    ot(n, e, r, i), Nd(n, t, r);
  }
}
function dv(e, t, n) {
  var r = Vt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kd(e)) Td(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), st(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Su(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ad(e, t, i, r)),
      n !== null && ((i = Re()), ot(n, e, r, i), Nd(n, t, r));
  }
}
function kd(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function Td(e, t) {
  Sr = lo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Nd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
var so = {
    readContext: Ge,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  pv = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: Ha,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mi(4194308, 4, Od.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ft();
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
        (e = e.dispatch = fv.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ba,
    useDebugValue: Tu,
    useDeferredValue: function (e) {
      return (ft().memoizedState = e);
    },
    useTransition: function () {
      var e = Ba(!1),
        t = e[0];
      return (e = cv.bind(null, e[1])), (ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        i = ft();
      if (G) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(x(349));
        dn & 30 || hd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Ha(vd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        $r(9, md.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ft(),
        t = he.identifierPrefix;
      if (G) {
        var n = St,
          r = wt;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = br++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = av++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hv = {
    readContext: Ge,
    useCallback: xd,
    useContext: Ge,
    useEffect: ku,
    useImperativeHandle: Cd,
    useInsertionEffect: Sd,
    useLayoutEffect: Ed,
    useMemo: Pd,
    useReducer: Ol,
    useRef: wd,
    useState: function () {
      return Ol(Ur);
    },
    useDebugValue: Tu,
    useDeferredValue: function (e) {
      var t = Je();
      return Rd(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Ol(Ur)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: dd,
    useSyncExternalStore: pd,
    useId: _d,
    unstable_isNewReconciler: !1,
  },
  mv = {
    readContext: Ge,
    useCallback: xd,
    useContext: Ge,
    useEffect: ku,
    useImperativeHandle: Cd,
    useInsertionEffect: Sd,
    useLayoutEffect: Ed,
    useMemo: Pd,
    useReducer: Cl,
    useRef: wd,
    useState: function () {
      return Cl(Ur);
    },
    useDebugValue: Tu,
    useDeferredValue: function (e) {
      var t = Je();
      return ce === null ? (t.memoizedState = e) : Rd(t, ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Cl(Ur)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: dd,
    useSyncExternalStore: pd,
    useId: _d,
    unstable_isNewReconciler: !1,
  };
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = ee({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ys(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ee({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var jo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      i = Vt(e),
      o = Et(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, i)),
      t !== null && (ot(t, e, i, r), Di(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      i = Vt(e),
      o = Et(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ht(e, o, i)),
      t !== null && (ot(t, e, i, r), Di(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = Vt(e),
      i = Et(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ht(e, i, r)),
      t !== null && (ot(t, e, r, n), Di(t, e, r));
  },
};
function Qa(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Mr(n, r) || !Mr(i, o)
      : !0
  );
}
function Dd(e, t, n) {
  var r = !1,
    i = Xt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ge(o))
      : ((i = Me(t) ? cn : Ce.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? $n(e, i) : Xt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = jo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Va(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && jo.enqueueReplaceState(t, t.state, null);
}
function gs(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Eu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ge(o))
    : ((o = Me(t) ? cn : Ce.current), (i.context = $n(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ys(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && jo.enqueueReplaceState(i, i.state, null),
      io(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hh(r)), (r = r.return);
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
function xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ws(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var vv = typeof WeakMap == "function" ? WeakMap : Map;
function Fd(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ao || ((ao = !0), (Ts = r)), ws(e, t);
    }),
    n
  );
}
function Md(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ws(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ws(e, t),
          typeof r != "function" &&
            (Qt === null ? (Qt = new Set([this])) : Qt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Wa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Nv.bind(null, e, t, n)), t.then(e, e));
}
function qa(e) {
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
function Ka(e, t, n, r, i) {
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
              : ((t = Et(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var yv = Rt.ReactCurrentOwner,
  De = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? ud(t, null, n, r) : Hn(t, e.child, n, r);
}
function Xa(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    In(t, i),
    (r = Ru(e, t, n, r, o, i)),
    (n = _u()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Pt(e, t, i))
      : (G && n && hu(t), (t.flags |= 1), Pe(e, t, r, i), t.child)
  );
}
function Ya(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Au(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), jd(e, t, o, r, i))
      : ((e = Ai(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Mr), n(l, r) && e.ref === t.ref)
    )
      return Pt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Wt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function jd(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Mr(o, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), Pt(e, t, i);
  }
  return Ss(e, t, n, r, i);
}
function Ld(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(Dn, Ie),
        (Ie |= n);
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
          K(Dn, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        K(Dn, Ie),
        (Ie |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(Dn, Ie),
      (Ie |= r);
  return Pe(e, t, i, n), t.child;
}
function zd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ss(e, t, n, r, i) {
  var o = Me(n) ? cn : Ce.current;
  return (
    (o = $n(t, o)),
    In(t, i),
    (n = Ru(e, t, n, r, o, i)),
    (r = _u()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Pt(e, t, i))
      : (G && r && hu(t), (t.flags |= 1), Pe(e, t, n, i), t.child)
  );
}
function Ga(e, t, n, r, i) {
  if (Me(n)) {
    var o = !0;
    Zi(t);
  } else o = !1;
  if ((In(t, i), t.stateNode === null))
    ji(e, t), Dd(t, n, r), gs(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ge(a))
      : ((a = Me(n) ? cn : Ce.current), (a = $n(t, a)));
    var c = n.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Va(t, l, r, a)),
      (Mt = !1);
    var p = t.memoizedState;
    (l.state = p),
      io(t, r, l, i),
      (u = t.memoizedState),
      s !== r || p !== u || Fe.current || Mt
        ? (typeof c == "function" && (ys(t, n, c, r), (u = t.memoizedState)),
          (s = Mt || Qa(t, n, s, r, p, u, a))
            ? (h ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      cd(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : tt(t.type, s)),
      (l.props = a),
      (h = t.pendingProps),
      (p = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ge(u))
        : ((u = Me(n) ? cn : Ce.current), (u = $n(t, u)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== h || p !== u) && Va(t, l, r, u)),
      (Mt = !1),
      (p = t.memoizedState),
      (l.state = p),
      io(t, r, l, i);
    var m = t.memoizedState;
    s !== h || p !== m || Fe.current || Mt
      ? (typeof y == "function" && (ys(t, n, y, r), (m = t.memoizedState)),
        (a = Mt || Qa(t, n, a, r, p, m, u) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, m, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, m, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (l.props = r),
        (l.state = m),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Es(e, t, n, r, o, i);
}
function Es(e, t, n, r, i, o) {
  zd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && za(t, n, !1), Pt(e, t, o);
  (r = t.stateNode), (yv.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Hn(t, e.child, null, o)), (t.child = Hn(t, null, s, o)))
      : Pe(e, t, s, o),
    (t.memoizedState = r.state),
    i && za(t, n, !0),
    t.child
  );
}
function Ad(e) {
  var t = e.stateNode;
  t.pendingContext
    ? La(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && La(e, t.context, !1),
    Ou(e, t.containerInfo);
}
function Ja(e, t, n, r, i) {
  return Bn(), vu(i), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var Os = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Id(e, t, n) {
  var r = t.pendingProps,
    i = J.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    K(J, i & 1),
    e === null)
  )
    return (
      ms(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Ao(l, r, 0, null)),
              (e = un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Cs(n)),
              (t.memoizedState = Os),
              e)
            : Nu(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return gv(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Wt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Wt(s, o)) : ((o = un(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Cs(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Os),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Wt(o, { mode: "visible", children: r.children })),
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
function Nu(e, t) {
  return (
    (t = Ao({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yi(e, t, n, r) {
  return (
    r !== null && vu(r),
    Hn(t, e.child, null, n),
    (e = Nu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gv(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xl(Error(x(422)))), yi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ao({ mode: "visible", children: r.children }, i, 0, null)),
        (o = un(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Hn(t, e.child, null, l),
        (t.child.memoizedState = Cs(l)),
        (t.memoizedState = Os),
        o);
  if (!(t.mode & 1)) return yi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(x(419))), (r = xl(o, r, void 0)), yi(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), De || s)) {
    if (((r = he), r !== null)) {
      switch (l & -l) {
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
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), xt(e, i), ot(r, e, i, -1));
    }
    return zu(), (r = xl(Error(x(421)))), yi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ue = Bt(i.nextSibling)),
      ($e = t),
      (G = !0),
      (rt = null),
      e !== null &&
        ((We[qe++] = wt),
        (We[qe++] = St),
        (We[qe++] = fn),
        (wt = e.id),
        (St = e.overflow),
        (fn = t)),
      (t = Nu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Za(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vs(e.return, t, n);
}
function Pl(e, t, n, r, i) {
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
function bd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Pe(e, t, r.children, n), (r = J.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Za(e, n, t);
        else if (e.tag === 19) Za(e, n, t);
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
  if ((K(J, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && oo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Pl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && oo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Pl(t, !0, n, null, o);
        break;
      case "together":
        Pl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ji(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function wv(e, t, n) {
  switch (t.tag) {
    case 3:
      Ad(t), Bn();
      break;
    case 5:
      fd(t);
      break;
    case 1:
      Me(t.type) && Zi(t);
      break;
    case 4:
      Ou(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      K(no, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Id(e, t, n)
          : (K(J, J.current & 1),
            (e = Pt(e, t, n)),
            e !== null ? e.sibling : null);
      K(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return bd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        K(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ld(e, t, n);
  }
  return Pt(e, t, n);
}
var Ud, xs, $d, Bd;
Ud = function (e, t) {
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
xs = function () {};
$d = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), on(ht.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Wl(e, i)), (r = Wl(e, r)), (o = []);
        break;
      case "select":
        (i = ee({}, i, { value: void 0 })),
          (r = ee({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Xl(e, i)), (r = Xl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gi);
    }
    Gl(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var s = i[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Rr.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Rr.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && X("scroll", e),
                  o || s === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Bd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ir(e, t) {
  if (!G)
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
function we(e) {
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
function Sv(e, t, n) {
  var r = t.pendingProps;
  switch ((mu(t), t.tag)) {
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
      return we(t), null;
    case 1:
      return Me(t.type) && Ji(), we(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qn(),
        Y(Fe),
        Y(Ce),
        xu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (Fs(rt), (rt = null)))),
        xs(e, t),
        we(t),
        null
      );
    case 5:
      Cu(t);
      var i = on(Ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $d(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return we(t), null;
        }
        if (((e = on(ht.current)), mi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[dt] = t), (r[zr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < pr.length; i++) X(pr[i], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              ua(r, o), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              ca(r, o), X("invalid", r);
          }
          Gl(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : Rr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              li(r), aa(r, o, !0);
              break;
            case "textarea":
              li(r), fa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Gi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[dt] = t),
            (e[zr] = r),
            Ud(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Jl(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < pr.length; i++) X(pr[i], e);
                i = r;
                break;
              case "source":
                X("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (i = r);
                break;
              case "details":
                X("toggle", e), (i = r);
                break;
              case "input":
                ua(e, r), (i = Wl(e, r)), X("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ee({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                ca(e, r), (i = Xl(e, r)), X("invalid", e);
                break;
              default:
                i = r;
            }
            Gl(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? wf(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && yf(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && _r(e, u)
                    : typeof u == "number" && _r(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Rr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && X("scroll", e)
                      : u != null && eu(e, o, u, l));
              }
            switch (n) {
              case "input":
                li(e), aa(e, r, !1);
                break;
              case "textarea":
                li(e), fa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? jn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      jn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Gi);
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
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) Bd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = on(Ir.current)), on(ht.current), mi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (o = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r);
      }
      return we(t), null;
    case 13:
      if (
        (Y(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ue !== null && t.mode & 1 && !(t.flags & 128))
          ld(), Bn(), (t.flags |= 98560), (o = !1);
        else if (((o = mi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[dt] = t;
          } else
            Bn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          we(t), (o = !1);
        } else rt !== null && (Fs(rt), (rt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? fe === 0 && (fe = 3) : zu())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null);
    case 4:
      return (
        Qn(), xs(e, t), e === null && jr(t.stateNode.containerInfo), we(t), null
      );
    case 10:
      return wu(t.type._context), we(t), null;
    case 17:
      return Me(t.type) && Ji(), we(t), null;
    case 19:
      if ((Y(J), (o = t.memoizedState), o === null)) return we(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) ir(o, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = oo(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    ir(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            le() > Wn &&
            ((t.flags |= 128), (r = !0), ir(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = oo(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ir(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !G)
            )
              return we(t), null;
          } else
            2 * le() - o.renderingStartTime > Wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ir(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = le()),
          (t.sibling = null),
          (n = J.current),
          K(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null);
    case 22:
    case 23:
      return (
        Lu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ie & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : we(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Ev(e, t) {
  switch ((mu(t), t.tag)) {
    case 1:
      return (
        Me(t.type) && Ji(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qn(),
        Y(Fe),
        Y(Ce),
        xu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Cu(t), null;
    case 13:
      if ((Y(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Bn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(J), null;
    case 4:
      return Qn(), null;
    case 10:
      return wu(t.type._context), null;
    case 22:
    case 23:
      return Lu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gi = !1,
  Oe = !1,
  Ov = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function Ps(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var ec = !1;
function Cv(e, t) {
  if (((us = Ki), (e = qf()), pu(e))) {
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
          var l = 0,
            s = -1,
            u = -1,
            a = 0,
            c = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (i !== 0 && h.nodeType !== 3) || (s = l + i),
                h !== o || (r !== 0 && h.nodeType !== 3) || (u = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (p = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++a === i && (s = l),
                p === o && ++c === r && (u = l),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = y;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (as = { focusedElem: e, selectionRange: n }, Ki = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps,
                    k = m.memoizedState,
                    v = t.stateNode,
                    f = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : tt(t.type, g),
                      k
                    );
                  v.__reactInternalSnapshotBeforeUpdate = f;
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
                throw Error(x(163));
            }
        } catch (w) {
          te(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (m = ec), (ec = !1), m;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ps(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Lo(e, t) {
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
function Rs(e) {
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
function Hd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Hd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[zr], delete t[ds], delete t[ov], delete t[lv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Qd(e.return)) return null;
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
function _s(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Gi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_s(e, t, n), e = e.sibling; e !== null; ) _s(e, t, n), (e = e.sibling);
}
function ks(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ks(e, t, n), e = e.sibling; e !== null; ) ks(e, t, n), (e = e.sibling);
}
var me = null,
  nt = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) Vd(e, t, n), (n = n.sibling);
}
function Vd(e, t, n) {
  if (pt && typeof pt.onCommitFiberUnmount == "function")
    try {
      pt.onCommitFiberUnmount(_o, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || Nn(n, t);
    case 6:
      var r = me,
        i = nt;
      (me = null),
        kt(e, t, n),
        (me = r),
        (nt = i),
        me !== null &&
          (nt
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (nt
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? gl(e.parentNode, n)
              : e.nodeType === 1 && gl(e, n),
            Dr(e))
          : gl(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (i = nt),
        (me = n.stateNode.containerInfo),
        (nt = !0),
        kt(e, t, n),
        (me = r),
        (nt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Ps(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          te(n, t, s);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), kt(e, t, n), (Oe = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function nc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ov()),
      t.forEach(function (r) {
        var i = Fv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (me = s.stateNode), (nt = !1);
              break e;
            case 3:
              (me = s.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (me = s.stateNode.containerInfo), (nt = !0);
              break e;
          }
          s = s.return;
        }
        if (me === null) throw Error(x(160));
        Vd(o, l, i), (me = null), (nt = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        te(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wd(t, e), (t = t.sibling);
}
function Wd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), ct(e), r & 4)) {
        try {
          Er(3, e, e.return), Lo(3, e);
        } catch (g) {
          te(e, e.return, g);
        }
        try {
          Er(5, e, e.return);
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 1:
      Ze(t, e), ct(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (
        (Ze(t, e),
        ct(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          _r(i, "");
        } catch (g) {
          te(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && hf(i, o),
              Jl(s, l);
            var a = Jl(s, o);
            for (l = 0; l < u.length; l += 2) {
              var c = u[l],
                h = u[l + 1];
              c === "style"
                ? wf(i, h)
                : c === "dangerouslySetInnerHTML"
                ? yf(i, h)
                : c === "children"
                ? _r(i, h)
                : eu(i, c, h, a);
            }
            switch (s) {
              case "input":
                ql(i, o);
                break;
              case "textarea":
                mf(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? jn(i, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? jn(i, !!o.multiple, o.defaultValue, !0)
                      : jn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[zr] = o;
          } catch (g) {
            te(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Dr(t.containerInfo);
        } catch (g) {
          te(e, e.return, g);
        }
      break;
    case 4:
      Ze(t, e), ct(e);
      break;
    case 13:
      Ze(t, e),
        ct(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Mu = le())),
        r & 4 && nc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (a = Oe) || c), Ze(t, e), (Oe = a)) : Ze(t, e),
        ct(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (N = e, c = e.child; c !== null; ) {
            for (h = N = c; N !== null; ) {
              switch (((p = N), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, p, p.return);
                  break;
                case 1:
                  Nn(p, p.return);
                  var m = p.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (g) {
                      te(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Nn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ic(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (N = y)) : ic(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = e; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (i = h.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = gf("display", l)));
              } catch (g) {
                te(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (g) {
                te(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ze(t, e), ct(e), r & 4 && nc(e);
      break;
    case 21:
      break;
    default:
      Ze(t, e), ct(e);
  }
}
function ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (_r(i, ""), (r.flags &= -33));
          var o = tc(e);
          ks(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = tc(e);
          _s(e, s, l);
          break;
        default:
          throw Error(x(161));
      }
    } catch (u) {
      te(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xv(e, t, n) {
  (N = e), qd(e);
}
function qd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var i = N,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || gi;
      if (!l) {
        var s = i.alternate,
          u = (s !== null && s.memoizedState !== null) || Oe;
        s = gi;
        var a = Oe;
        if (((gi = l), (Oe = u) && !a))
          for (N = i; N !== null; )
            (l = N),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? oc(i)
                : u !== null
                ? ((u.return = l), (N = u))
                : oc(i);
        for (; o !== null; ) (N = o), qd(o), (o = o.sibling);
        (N = i), (gi = s), (Oe = a);
      }
      rc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (N = o)) : rc(e);
  }
}
function rc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || Lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && $a(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                $a(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                    var h = c.dehydrated;
                    h !== null && Dr(h);
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
              throw Error(x(163));
          }
        Oe || (t.flags & 512 && Rs(t));
      } catch (p) {
        te(t, t.return, p);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ic(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function oc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lo(4, t);
          } catch (u) {
            te(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              te(t, i, u);
            }
          }
          var o = t.return;
          try {
            Rs(t);
          } catch (u) {
            te(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Rs(t);
          } catch (u) {
            te(t, l, u);
          }
      }
    } catch (u) {
      te(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (N = s);
      break;
    }
    N = t.return;
  }
}
var Pv = Math.ceil,
  uo = Rt.ReactCurrentDispatcher,
  Du = Rt.ReactCurrentOwner,
  Xe = Rt.ReactCurrentBatchConfig,
  B = 0,
  he = null,
  ae = null,
  ve = 0,
  Ie = 0,
  Dn = Gt(0),
  fe = 0,
  Br = null,
  pn = 0,
  zo = 0,
  Fu = 0,
  Or = null,
  Ne = null,
  Mu = 0,
  Wn = 1 / 0,
  yt = null,
  ao = !1,
  Ts = null,
  Qt = null,
  wi = !1,
  It = null,
  co = 0,
  Cr = 0,
  Ns = null,
  Li = -1,
  zi = 0;
function Re() {
  return B & 6 ? le() : Li !== -1 ? Li : (Li = le());
}
function Vt(e) {
  return e.mode & 1
    ? B & 2 && ve !== 0
      ? ve & -ve
      : uv.transition !== null
      ? (zi === 0 && (zi = Df()), zi)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : If(e.type))),
        e)
    : 1;
}
function ot(e, t, n, r) {
  if (50 < Cr) throw ((Cr = 0), (Ns = null), Error(x(185)));
  Wr(e, n, r),
    (!(B & 2) || e !== he) &&
      (e === he && (!(B & 2) && (zo |= n), fe === 4 && zt(e, ve)),
      je(e, r),
      n === 1 && B === 0 && !(t.mode & 1) && ((Wn = le() + 500), Fo && Jt()));
}
function je(e, t) {
  var n = e.callbackNode;
  um(e, t);
  var r = qi(e, e === he ? ve : 0);
  if (r === 0)
    n !== null && ha(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ha(n), t === 1))
      e.tag === 0 ? sv(lc.bind(null, e)) : rd(lc.bind(null, e)),
        rv(function () {
          !(B & 6) && Jt();
        }),
        (n = null);
    else {
      switch (Ff(r)) {
        case 1:
          n = ou;
          break;
        case 4:
          n = Tf;
          break;
        case 16:
          n = Wi;
          break;
        case 536870912:
          n = Nf;
          break;
        default:
          n = Wi;
      }
      n = tp(n, Kd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Kd(e, t) {
  if (((Li = -1), (zi = 0), B & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = qi(e, e === he ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fo(e, r);
  else {
    t = r;
    var i = B;
    B |= 2;
    var o = Yd();
    (he !== e || ve !== t) && ((yt = null), (Wn = le() + 500), sn(e, t));
    do
      try {
        kv();
        break;
      } catch (s) {
        Xd(e, s);
      }
    while (!0);
    gu(),
      (uo.current = o),
      (B = i),
      ae !== null ? (t = 0) : ((he = null), (ve = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = rs(e)), i !== 0 && ((r = i), (t = Ds(e, i)))), t === 1)
    )
      throw ((n = Br), sn(e, 0), zt(e, r), je(e, le()), n);
    if (t === 6) zt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Rv(i) &&
          ((t = fo(e, r)),
          t === 2 && ((o = rs(e)), o !== 0 && ((r = o), (t = Ds(e, o)))),
          t === 1))
      )
        throw ((n = Br), sn(e, 0), zt(e, r), je(e, le()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          tn(e, Ne, yt);
          break;
        case 3:
          if (
            (zt(e, r), (r & 130023424) === r && ((t = Mu + 500 - le()), 10 < t))
          ) {
            if (qi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = fs(tn.bind(null, e, Ne, yt), t);
            break;
          }
          tn(e, Ne, yt);
          break;
        case 4:
          if ((zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - it(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = le() - r),
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
                : 1960 * Pv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = fs(tn.bind(null, e, Ne, yt), r);
            break;
          }
          tn(e, Ne, yt);
          break;
        case 5:
          tn(e, Ne, yt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return je(e, le()), e.callbackNode === n ? Kd.bind(null, e) : null;
}
function Ds(e, t) {
  var n = Or;
  return (
    e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256),
    (e = fo(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && Fs(t)),
    e
  );
}
function Fs(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Rv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!st(o(), i)) return !1;
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
function zt(e, t) {
  for (
    t &= ~Fu,
      t &= ~zo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function lc(e) {
  if (B & 6) throw Error(x(327));
  bn();
  var t = qi(e, 0);
  if (!(t & 1)) return je(e, le()), null;
  var n = fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rs(e);
    r !== 0 && ((t = r), (n = Ds(e, r)));
  }
  if (n === 1) throw ((n = Br), sn(e, 0), zt(e, t), je(e, le()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tn(e, Ne, yt),
    je(e, le()),
    null
  );
}
function ju(e, t) {
  var n = B;
  B |= 1;
  try {
    return e(t);
  } finally {
    (B = n), B === 0 && ((Wn = le() + 500), Fo && Jt());
  }
}
function hn(e) {
  It !== null && It.tag === 0 && !(B & 6) && bn();
  var t = B;
  B |= 1;
  var n = Xe.transition,
    r = Q;
  try {
    if (((Xe.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = r), (Xe.transition = n), (B = t), !(B & 6) && Jt();
  }
}
function Lu() {
  (Ie = Dn.current), Y(Dn);
}
function sn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), nv(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((mu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ji();
          break;
        case 3:
          Qn(), Y(Fe), Y(Ce), xu();
          break;
        case 5:
          Cu(r);
          break;
        case 4:
          Qn();
          break;
        case 13:
          Y(J);
          break;
        case 19:
          Y(J);
          break;
        case 10:
          wu(r.type._context);
          break;
        case 22:
        case 23:
          Lu();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ae = e = Wt(e.current, null)),
    (ve = Ie = t),
    (fe = 0),
    (Br = null),
    (Fu = zo = pn = 0),
    (Ne = Or = null),
    rn !== null)
  ) {
    for (t = 0; t < rn.length; t++)
      if (((n = rn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    rn = null;
  }
  return e;
}
function Xd(e, t) {
  do {
    var n = ae;
    try {
      if ((gu(), (Fi.current = so), lo)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        lo = !1;
      }
      if (
        ((dn = 0),
        (pe = ce = Z = null),
        (Sr = !1),
        (br = 0),
        (Du.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (Br = t), (ae = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = ve),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = s,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = qa(l);
          if (y !== null) {
            (y.flags &= -257),
              Ka(y, l, s, o, t),
              y.mode & 1 && Wa(o, a, t),
              (t = y),
              (u = a);
            var m = t.updateQueue;
            if (m === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else m.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Wa(o, a, t), zu();
              break e;
            }
            u = Error(x(426));
          }
        } else if (G && s.mode & 1) {
          var k = qa(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Ka(k, l, s, o, t),
              vu(Vn(u, s));
            break e;
          }
        }
        (o = u = Vn(u, s)),
          fe !== 4 && (fe = 2),
          Or === null ? (Or = [o]) : Or.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var v = Fd(o, u, t);
              Ua(o, v);
              break e;
            case 1:
              s = u;
              var f = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (Qt === null || !Qt.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Md(o, s, t);
                Ua(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Jd(n);
    } catch (O) {
      (t = O), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yd() {
  var e = uo.current;
  return (uo.current = so), e === null ? so : e;
}
function zu() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    he === null || (!(pn & 268435455) && !(zo & 268435455)) || zt(he, ve);
}
function fo(e, t) {
  var n = B;
  B |= 2;
  var r = Yd();
  (he !== e || ve !== t) && ((yt = null), sn(e, t));
  do
    try {
      _v();
      break;
    } catch (i) {
      Xd(e, i);
    }
  while (!0);
  if ((gu(), (B = n), (uo.current = r), ae !== null)) throw Error(x(261));
  return (he = null), (ve = 0), fe;
}
function _v() {
  for (; ae !== null; ) Gd(ae);
}
function kv() {
  for (; ae !== null && !Zh(); ) Gd(ae);
}
function Gd(e) {
  var t = ep(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps),
    t === null ? Jd(e) : (ae = t),
    (Du.current = null);
}
function Jd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ev(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (ae = null);
        return;
      }
    } else if (((n = Sv(n, t, Ie)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function tn(e, t, n) {
  var r = Q,
    i = Xe.transition;
  try {
    (Xe.transition = null), (Q = 1), Tv(e, t, n, r);
  } finally {
    (Xe.transition = i), (Q = r);
  }
  return null;
}
function Tv(e, t, n, r) {
  do bn();
  while (It !== null);
  if (B & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (am(e, o),
    e === he && ((ae = he = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wi ||
      ((wi = !0),
      tp(Wi, function () {
        return bn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Xe.transition), (Xe.transition = null);
    var l = Q;
    Q = 1;
    var s = B;
    (B |= 4),
      (Du.current = null),
      Cv(e, n),
      Wd(n, e),
      Xm(as),
      (Ki = !!us),
      (as = us = null),
      (e.current = n),
      xv(n),
      em(),
      (B = s),
      (Q = l),
      (Xe.transition = o);
  } else e.current = n;
  if (
    (wi && ((wi = !1), (It = e), (co = i)),
    (o = e.pendingLanes),
    o === 0 && (Qt = null),
    rm(n.stateNode),
    je(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ao) throw ((ao = !1), (e = Ts), (Ts = null), e);
  return (
    co & 1 && e.tag !== 0 && bn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ns ? Cr++ : ((Cr = 0), (Ns = e))) : (Cr = 0),
    Jt(),
    null
  );
}
function bn() {
  if (It !== null) {
    var e = Ff(co),
      t = Xe.transition,
      n = Q;
    try {
      if (((Xe.transition = null), (Q = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (co = 0), B & 6)) throw Error(x(331));
        var i = B;
        for (B |= 4, N = e.current; N !== null; ) {
          var o = N,
            l = o.child;
          if (N.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (N = a; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, c, o);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (N = h);
                  else
                    for (; N !== null; ) {
                      c = N;
                      var p = c.sibling,
                        y = c.return;
                      if ((Hd(c), c === a)) {
                        N = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (N = p);
                        break;
                      }
                      N = y;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var k = g.sibling;
                    (g.sibling = null), (g = k);
                  } while (g !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (N = l);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, o, o.return);
                }
              var v = o.sibling;
              if (v !== null) {
                (v.return = o.return), (N = v);
                break e;
              }
              N = o.return;
            }
        }
        var f = e.current;
        for (N = f; N !== null; ) {
          l = N;
          var d = l.child;
          if (l.subtreeFlags & 2064 && d !== null) (d.return = l), (N = d);
          else
            e: for (l = f; N !== null; ) {
              if (((s = N), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(9, s);
                  }
                } catch (O) {
                  te(s, s.return, O);
                }
              if (s === l) {
                N = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (N = w);
                break e;
              }
              N = s.return;
            }
        }
        if (
          ((B = i), Jt(), pt && typeof pt.onPostCommitFiberRoot == "function")
        )
          try {
            pt.onPostCommitFiberRoot(_o, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Q = n), (Xe.transition = t);
    }
  }
  return !1;
}
function sc(e, t, n) {
  (t = Vn(n, t)),
    (t = Fd(e, t, 1)),
    (e = Ht(e, t, 1)),
    (t = Re()),
    e !== null && (Wr(e, 1, t), je(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) sc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Qt === null || !Qt.has(r)))
        ) {
          (e = Vn(n, e)),
            (e = Md(t, e, 1)),
            (t = Ht(t, e, 1)),
            (e = Re()),
            t !== null && (Wr(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Nv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ve & n) === n &&
      (fe === 4 || (fe === 3 && (ve & 130023424) === ve && 500 > le() - Mu)
        ? sn(e, 0)
        : (Fu |= n)),
    je(e, t);
}
function Zd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ai), (ai <<= 1), !(ai & 130023424) && (ai = 4194304))
      : (t = 1));
  var n = Re();
  (e = xt(e, t)), e !== null && (Wr(e, t, n), je(e, n));
}
function Dv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Zd(e, n);
}
function Fv(e, t) {
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
      throw Error(x(314));
  }
  r !== null && r.delete(t), Zd(e, n);
}
var ep;
ep = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), wv(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), G && t.flags & 1048576 && id(t, to, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ji(e, t), (e = t.pendingProps);
      var i = $n(t, Ce.current);
      In(t, n), (i = Ru(null, t, r, e, i, n));
      var o = _u();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Me(r) ? ((o = !0), Zi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Eu(t),
            (i.updater = jo),
            (t.stateNode = i),
            (i._reactInternals = t),
            gs(t, r, e, n),
            (t = Es(null, t, r, !0, o, n)))
          : ((t.tag = 0), G && o && hu(t), Pe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ji(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = jv(r)),
          (e = tt(r, e)),
          i)
        ) {
          case 0:
            t = Ss(null, t, r, e, n);
            break e;
          case 1:
            t = Ga(null, t, r, e, n);
            break e;
          case 11:
            t = Xa(null, t, r, e, n);
            break e;
          case 14:
            t = Ya(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Ss(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Ga(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Ad(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          cd(e, t),
          io(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Vn(Error(x(423)), t)), (t = Ja(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Vn(Error(x(424)), t)), (t = Ja(e, t, r, n, i));
            break e;
          } else
            for (
              Ue = Bt(t.stateNode.containerInfo.firstChild),
                $e = t,
                G = !0,
                rt = null,
                n = ud(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Bn(), r === i)) {
            t = Pt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fd(t),
        e === null && ms(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        cs(r, i) ? (l = null) : o !== null && cs(r, o) && (t.flags |= 32),
        zd(e, t),
        Pe(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ms(t), null;
    case 13:
      return Id(e, t, n);
    case 4:
      return (
        Ou(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Hn(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        Xa(e, t, r, i, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          K(no, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (st(o.value, l)) {
            if (o.children === i.children && !Fe.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Et(-1, n & -n)), (u.tag = 2);
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
                      vs(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(x(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  vs(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Pe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        In(t, n),
        (i = Ge(i)),
        (r = r(i)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = tt(r, t.pendingProps)),
        (i = tt(r.type, i)),
        Ya(e, t, r, i, n)
      );
    case 15:
      return jd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : tt(r, i)),
        ji(e, t),
        (t.tag = 1),
        Me(r) ? ((e = !0), Zi(t)) : (e = !1),
        In(t, n),
        Dd(t, r, i),
        gs(t, r, i, n),
        Es(null, t, r, !0, e, n)
      );
    case 19:
      return bd(e, t, n);
    case 22:
      return Ld(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function tp(e, t) {
  return kf(e, t);
}
function Mv(e, t, n, r) {
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
function Ke(e, t, n, r) {
  return new Mv(e, t, n, r);
}
function Au(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jv(e) {
  if (typeof e == "function") return Au(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === nu)) return 11;
    if (e === ru) return 14;
  }
  return 2;
}
function Wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
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
function Ai(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) Au(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case En:
        return un(n.children, i, o, t);
      case tu:
        (l = 8), (i |= 8);
        break;
      case Bl:
        return (
          (e = Ke(12, n, t, i | 2)), (e.elementType = Bl), (e.lanes = o), e
        );
      case Hl:
        return (e = Ke(13, n, t, i)), (e.elementType = Hl), (e.lanes = o), e;
      case Ql:
        return (e = Ke(19, n, t, i)), (e.elementType = Ql), (e.lanes = o), e;
      case ff:
        return Ao(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case af:
              l = 10;
              break e;
            case cf:
              l = 9;
              break e;
            case nu:
              l = 11;
              break e;
            case ru:
              l = 14;
              break e;
            case Ft:
              (l = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ke(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function un(e, t, n, r) {
  return (e = Ke(7, e, r, t)), (e.lanes = n), e;
}
function Ao(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = ff),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Rl(e, t, n) {
  return (e = Ke(6, e, null, t)), (e.lanes = n), e;
}
function _l(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Lv(e, t, n, r, i) {
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
    (this.eventTimes = sl(0)),
    (this.expirationTimes = sl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = sl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Iu(e, t, n, r, i, o, l, s, u) {
  return (
    (e = new Lv(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ke(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Eu(o),
    e
  );
}
function zv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function np(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Me(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Me(n)) return nd(e, n, t);
  }
  return t;
}
function rp(e, t, n, r, i, o, l, s, u) {
  return (
    (e = Iu(n, r, !0, e, i, o, l, s, u)),
    (e.context = np(null)),
    (n = e.current),
    (r = Re()),
    (i = Vt(n)),
    (o = Et(r, i)),
    (o.callback = t ?? null),
    Ht(n, o, i),
    (e.current.lanes = i),
    Wr(e, i, r),
    je(e, r),
    e
  );
}
function Io(e, t, n, r) {
  var i = t.current,
    o = Re(),
    l = Vt(i);
  return (
    (n = np(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Et(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ht(i, t, l)),
    e !== null && (ot(e, i, l, o), Di(e, i, l)),
    l
  );
}
function po(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function uc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bu(e, t) {
  uc(e, t), (e = e.alternate) && uc(e, t);
}
function Av() {
  return null;
}
var ip =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Uu(e) {
  this._internalRoot = e;
}
bo.prototype.render = Uu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Io(e, t, null, null);
};
bo.prototype.unmount = Uu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function () {
      Io(null, e, null, null);
    }),
      (t[Ct] = null);
  }
};
function bo(e) {
  this._internalRoot = e;
}
bo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
    Lt.splice(n, 0, e), n === 0 && Af(e);
  }
};
function $u(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Uo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ac() {}
function Iv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = po(l);
        o.call(a);
      };
    }
    var l = rp(t, r, e, 0, null, !1, !1, "", ac);
    return (
      (e._reactRootContainer = l),
      (e[Ct] = l.current),
      jr(e.nodeType === 8 ? e.parentNode : e),
      hn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = po(u);
      s.call(a);
    };
  }
  var u = Iu(e, 0, !1, null, null, !1, !1, "", ac);
  return (
    (e._reactRootContainer = u),
    (e[Ct] = u.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    hn(function () {
      Io(t, u, n, r);
    }),
    u
  );
}
function $o(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var u = po(l);
        s.call(u);
      };
    }
    Io(t, l, e, i);
  } else l = Iv(n, t, e, i, r);
  return po(l);
}
Mf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 &&
          (lu(t, n | 1), je(t, le()), !(B & 6) && ((Wn = le() + 500), Jt()));
      }
      break;
    case 13:
      hn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var i = Re();
          ot(r, e, 1, i);
        }
      }),
        bu(e, 1);
  }
};
su = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = Re();
      ot(t, e, 134217728, n);
    }
    bu(e, 134217728);
  }
};
jf = function (e) {
  if (e.tag === 13) {
    var t = Vt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = Re();
      ot(n, e, t, r);
    }
    bu(e, t);
  }
};
Lf = function () {
  return Q;
};
zf = function (e, t) {
  var n = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = n;
  }
};
es = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Do(r);
            if (!i) throw Error(x(90));
            pf(r), ql(r, i);
          }
        }
      }
      break;
    case "textarea":
      mf(e, n);
      break;
    case "select":
      (t = n.value), t != null && jn(e, !!n.multiple, t, !1);
  }
};
Of = ju;
Cf = hn;
var bv = { usingClientEntryPoint: !1, Events: [Kr, Pn, Do, Sf, Ef, ju] },
  or = {
    findFiberByHostInstance: nn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Uv = {
    bundleType: or.bundleType,
    version: or.version,
    rendererPackageName: or.rendererPackageName,
    rendererConfig: or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: or.findFiberByHostInstance || Av,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Si.isDisabled && Si.supportsFiber)
    try {
      (_o = Si.inject(Uv)), (pt = Si);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bv;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$u(t)) throw Error(x(200));
  return zv(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!$u(e)) throw Error(x(299));
  var n = !1,
    r = "",
    i = ip;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Iu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ct] = t.current),
    jr(e.nodeType === 8 ? e.parentNode : e),
    new Uu(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = Rf(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return hn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Uo(t)) throw Error(x(200));
  return $o(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!$u(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = ip;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = rp(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[Ct] = t.current),
    jr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new bo(t);
};
Qe.render = function (e, t, n) {
  if (!Uo(t)) throw Error(x(200));
  return $o(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Uo(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (hn(function () {
        $o(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ct] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = ju;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uo(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return $o(e, t, n, !1, r);
};
Qe.version = "18.3.1-next-f1338f8080-20240426";
function op() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op);
    } catch (e) {
      console.error(e);
    }
}
op(), (of.exports = Qe);
var Bo = of.exports;
const $v = Wc(Bo);
var cc = Bo;
(Ul.createRoot = cc.createRoot), (Ul.hydrateRoot = cc.hydrateRoot);
var lp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  fc = W.createContext && W.createContext(lp),
  Bv = ["attr", "size", "title"];
function Hv(e, t) {
  if (e == null) return {};
  var n = Qv(e, t),
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
function Qv(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ho() {
  return (
    (ho = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ho.apply(this, arguments)
  );
}
function dc(e, t) {
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
function mo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dc(Object(n), !0).forEach(function (r) {
          Vv(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : dc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Vv(e, t, n) {
  return (
    (t = Wv(t)),
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
function Wv(e) {
  var t = qv(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qv(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sp(e) {
  return (
    e &&
    e.map((t, n) => W.createElement(t.tag, mo({ key: n }, t.attr), sp(t.child)))
  );
}
function _t(e) {
  return (t) =>
    W.createElement(Kv, ho({ attr: mo({}, e.attr) }, t), sp(e.child));
}
function Kv(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      l = Hv(e, Bv),
      s = i || n.size || "1em",
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + " " : "") + e.className),
      W.createElement(
        "svg",
        ho(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          l,
          {
            className: u,
            style: mo(mo({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && W.createElement("title", null, o),
        e.children
      )
    );
  };
  return fc !== void 0
    ? W.createElement(fc.Consumer, null, (n) => t(n))
    : t(lp);
}
function Xv(e) {
  return _t({
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
function Yv(e) {
  return _t({
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
const Gv = "/images/alx-logo-white-B2jpy1kh.png",
  Jv = { width: "55px" },
  Zv = {
    width: "500px",
    backgroundColor: "transparent",
    border: "1px solid #4f5966",
    outline: "none",
    color: "white",
    padding: "6px",
    fontSize: "12px",
    borderRadius: "5px",
  };
function ey({ onSaveButtonClick: e, onRunButtonClick: t, onTopBarSearch: n }) {
  function r(i) {
    i.key === "Enter" &&
      i.target.value !== "" &&
      (n(i.target.value), (i.target.value = ""));
  }
  return T.jsxs("div", {
    className:
      "w-full h-12 flex-container items-center justify-between bg-main  py-5 px-1",
    children: [
      T.jsx("img", { src: Gv, style: Jv, className: "" }),
      T.jsx("input", {
        type: "text",
        className: "",
        style: Zv,
        onKeyDown: r,
        placeholder: "Find File",
      }),
      T.jsxs("div", {
        className: "cursor-pointer flex justify-center items-center",
        children: [
          T.jsx(Xv, {
            title: "run",
            className:
              "text-2xl mr-4 text-green-500 cursor-pointer opacity-25 hover:opacity-100",
            onClick: t,
          }),
          T.jsx(Yv, {
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
function up(e) {
  return _t({
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
function ty(e) {
  return _t({
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
function ny(e) {
  return _t({
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
function ry(e) {
  return _t({
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
function ap(e) {
  return _t({
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
function iy(e) {
  return _t({
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
function oy(e) {
  return _t({
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
const ly = { fontSize: "12px" };
function sy({ file: e, setNavFiles: t, onDelete: n, DND: r }) {
  const i = (o) => {
    o.stopPropagation(), n(e);
  };
  return T.jsxs("div", {
    className:
      "file p-1 text-slate-500 cursor-pointer flex items-center bg-transform pl-5",
    style: ly,
    draggable: !0,
    onDoubleClick: () => r.handleDoubleClick(e),
    onDragStart: () => r.handleDragStart(e),
    onDrop: () => r.handleDrop(e),
    onDragOver: r.handleDragOver,
    onClick: () => {
      t(e, !0);
    },
    children: [
      T.jsx(up, { className: "text-sky-500 mr-1 my-1" }),
      r.getFileInEdit() === e &&
        T.jsx("input", {
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
      T.jsx("span", {
        className: "ml-auto",
        children: T.jsx(ap, {
          className:
            "text-red-500 cursor-pointer text-xs opacity-10 hover:opacity-100",
          onClick: i,
        }),
      }),
    ],
  });
}
function cp({ folder: e, setNavFiles: t, onDelete: n, DND: r }) {
  const [i, o] = D.useState(!1),
    l = () => {
      o(!i);
    },
    s = (p) => {
      p.stopPropagation(), n(e);
    },
    u = (p) => {
      p.stopPropagation(), r.newFileCreation(e, !1);
    },
    a = (p) => {
      p.stopPropagation(), r.newFileCreation(e, !0);
    },
    c = e.parent
      ? { draggable: !0, onDragStart: () => r.handleDragStart(e) }
      : { draggable: !1 };
  function h() {
    if (r.getFileInEdit() === e) return "";
    const p = r.getFileCreation();
    return p.file === e ? (p.isDir, "") : e.name;
  }
  return T.jsxs("div", {
    children: [
      T.jsxs("div", {
        className:
          "pl-5 p-1 flex items-center gap-2 cursor-pointer text-slate-500 text-sm bg-transform w-full",
        onClick: () => r.getFileInEdit() !== e && l(),
        ...c,
        onDoubleClick: () => r.handleDoubleClick(e),
        onDrop: () => r.handleDrop(e),
        onDragOver: r.handleDragOver,
        children: [
          i
            ? T.jsx(ty, { className: "text-sm mr-1 text-amber-300" })
            : T.jsx(ny, { className: "mr-1 text-amber-300" }),
          " ",
          r.getFileInEdit() === e &&
            !r.getFileCreation().file &&
            T.jsx("input", {
              className:
                "border-none outline-none bg-main-transparent text-slate-500",
              type: "text",
              defaultValue: e.name,
              autoFocus: !0,
              onBlur: (p) => r.handleFileEdit(p.target.value),
              onKeyDown: (p) => {
                p.key === "Enter" && r.handleFileEdit(p.target.value);
              },
            }),
          r.getFileInEdit() !== e && h(),
          r.getFileCreation().file === e &&
            T.jsx("input", {
              className:
                "border-none outline-none bg-main-transparent text-slate-500",
              type: "text",
              autoFocus: !0,
              onBlur: (p) => r.handleFileCreation(p.target.value),
              onKeyDown: (p) => {
                p.key === "Enter" && r.handleFileCreation(p.target.value);
              },
            }),
          T.jsxs("span", {
            className: "ml-auto flex flex-row-reverse items-center gap-2",
            children: [
              T.jsx(ap, {
                className:
                  "text-red-500 cursor-pointer text-xs opacity-10 hover:opacity-100",
                onClick: s,
              }),
              T.jsx(iy, {
                className:
                  "text-green-500 cursor-pointer text-xs opacity-25 hover:opacity-100",
                onClick: u,
              }),
              T.jsx(oy, {
                className:
                  "text-blue-500 cursor-pointer text-xs opacity-25 hover:opacity-100",
                onClick: a,
              }),
            ],
          }),
        ],
      }),
      i &&
        T.jsx("div", {
          className: "folder-contents pl-5",
          children: e.childs.map((p) =>
            p.dir && p.match
              ? T.jsx(
                  cp,
                  { folder: p, setNavFiles: t, onDelete: n, DND: r },
                  p.id
                )
              : p.match &&
                T.jsx(
                  sy,
                  { file: p, setNavFiles: t, onDelete: n, DND: r },
                  p.id
                )
          ),
        }),
    ],
  });
}
function fp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: uy } = Object.prototype,
  { getPrototypeOf: Bu } = Object,
  Ho = ((e) => (t) => {
    const n = uy.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ut = (e) => ((e = e.toLowerCase()), (t) => Ho(t) === e),
  Qo = (e) => (t) => typeof t === e,
  { isArray: Yn } = Array,
  Hr = Qo("undefined");
function ay(e) {
  return (
    e !== null &&
    !Hr(e) &&
    e.constructor !== null &&
    !Hr(e.constructor) &&
    Ye(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const dp = ut("ArrayBuffer");
function cy(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && dp(e.buffer)),
    t
  );
}
const fy = Qo("string"),
  Ye = Qo("function"),
  pp = Qo("number"),
  Vo = (e) => e !== null && typeof e == "object",
  dy = (e) => e === !0 || e === !1,
  Ii = (e) => {
    if (Ho(e) !== "object") return !1;
    const t = Bu(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  py = ut("Date"),
  hy = ut("File"),
  my = ut("Blob"),
  vy = ut("FileList"),
  yy = (e) => Vo(e) && Ye(e.pipe),
  gy = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ye(e.append) &&
          ((t = Ho(e)) === "formdata" ||
            (t === "object" &&
              Ye(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  wy = ut("URLSearchParams"),
  [Sy, Ey, Oy, Cy] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ut
  ),
  xy = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Yr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Yn(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = o.length;
    let s;
    for (r = 0; r < l; r++) (s = o[r]), t.call(null, e[s], s, e);
  }
}
function hp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const mp =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  vp = (e) => !Hr(e) && e !== mp;
function Ms() {
  const { caseless: e } = (vp(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && hp(t, i)) || i;
      Ii(t[o]) && Ii(r)
        ? (t[o] = Ms(t[o], r))
        : Ii(r)
        ? (t[o] = Ms({}, r))
        : Yn(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Yr(arguments[r], n);
  return t;
}
const Py = (e, t, n, { allOwnKeys: r } = {}) => (
    Yr(
      t,
      (i, o) => {
        n && Ye(i) ? (e[o] = fp(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Ry = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  _y = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  ky = (e, t, n, r) => {
    let i, o, l;
    const s = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (l = i[o]), (!r || r(l, e, t)) && !s[l] && ((t[l] = e[l]), (s[l] = !0));
      e = n !== !1 && Bu(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Ty = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ny = (e) => {
    if (!e) return null;
    if (Yn(e)) return e;
    let t = e.length;
    if (!pp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Dy = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Bu(Uint8Array)),
  Fy = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  My = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  jy = ut("HTMLFormElement"),
  Ly = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  pc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  zy = ut("RegExp"),
  yp = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Yr(n, (i, o) => {
      let l;
      (l = t(i, o, e)) !== !1 && (r[o] = l || i);
    }),
      Object.defineProperties(e, r);
  },
  Ay = (e) => {
    yp(e, (t, n) => {
      if (Ye(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ye(r)) {
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
  Iy = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Yn(e) ? r(e) : r(String(e).split(t)), n;
  },
  by = () => {},
  Uy = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  kl = "abcdefghijklmnopqrstuvwxyz",
  hc = "0123456789",
  gp = { DIGIT: hc, ALPHA: kl, ALPHA_DIGIT: kl + kl.toUpperCase() + hc },
  $y = (e = 16, t = gp.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function By(e) {
  return !!(
    e &&
    Ye(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Hy = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Vo(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Yn(r) ? [] : {};
            return (
              Yr(r, (l, s) => {
                const u = n(l, i + 1);
                !Hr(u) && (o[s] = u);
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
  Qy = ut("AsyncFunction"),
  Vy = (e) => e && (Vo(e) || Ye(e)) && Ye(e.then) && Ye(e.catch),
  C = {
    isArray: Yn,
    isArrayBuffer: dp,
    isBuffer: ay,
    isFormData: gy,
    isArrayBufferView: cy,
    isString: fy,
    isNumber: pp,
    isBoolean: dy,
    isObject: Vo,
    isPlainObject: Ii,
    isReadableStream: Sy,
    isRequest: Ey,
    isResponse: Oy,
    isHeaders: Cy,
    isUndefined: Hr,
    isDate: py,
    isFile: hy,
    isBlob: my,
    isRegExp: zy,
    isFunction: Ye,
    isStream: yy,
    isURLSearchParams: wy,
    isTypedArray: Dy,
    isFileList: vy,
    forEach: Yr,
    merge: Ms,
    extend: Py,
    trim: xy,
    stripBOM: Ry,
    inherits: _y,
    toFlatObject: ky,
    kindOf: Ho,
    kindOfTest: ut,
    endsWith: Ty,
    toArray: Ny,
    forEachEntry: Fy,
    matchAll: My,
    isHTMLForm: jy,
    hasOwnProperty: pc,
    hasOwnProp: pc,
    reduceDescriptors: yp,
    freezeMethods: Ay,
    toObjectSet: Iy,
    toCamelCase: Ly,
    noop: by,
    toFiniteNumber: Uy,
    findKey: hp,
    global: mp,
    isContextDefined: vp,
    ALPHABET: gp,
    generateString: $y,
    isSpecCompliantForm: By,
    toJSONObject: Hy,
    isAsyncFn: Qy,
    isThenable: Vy,
  };
function I(e, t, n, r, i) {
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
C.inherits(I, Error, {
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
const wp = I.prototype,
  Sp = {};
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
  Sp[e] = { value: e };
});
Object.defineProperties(I, Sp);
Object.defineProperty(wp, "isAxiosError", { value: !0 });
I.from = (e, t, n, r, i, o) => {
  const l = Object.create(wp);
  return (
    C.toFlatObject(
      e,
      l,
      function (u) {
        return u !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    I.call(l, e.message, t, n, r, i),
    (l.cause = e),
    (l.name = e.name),
    o && Object.assign(l, o),
    l
  );
};
const Wy = null;
function js(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Ep(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function mc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Ep(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function qy(e) {
  return C.isArray(e) && !e.some(js);
}
const Ky = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Wo(e, t, n) {
  if (!C.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = C.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (g, k) {
        return !C.isUndefined(k[g]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    l = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
  if (!C.isFunction(i)) throw new TypeError("visitor must be a function");
  function a(m) {
    if (m === null) return "";
    if (C.isDate(m)) return m.toISOString();
    if (!u && C.isBlob(m))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(m) || C.isTypedArray(m)
      ? u && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function c(m, g, k) {
    let v = m;
    if (m && !k && typeof m == "object") {
      if (C.endsWith(g, "{}"))
        (g = r ? g : g.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (C.isArray(m) && qy(m)) ||
        ((C.isFileList(m) || C.endsWith(g, "[]")) && (v = C.toArray(m)))
      )
        return (
          (g = Ep(g)),
          v.forEach(function (d, w) {
            !(C.isUndefined(d) || d === null) &&
              t.append(
                l === !0 ? mc([g], w, o) : l === null ? g : g + "[]",
                a(d)
              );
          }),
          !1
        );
    }
    return js(m) ? !0 : (t.append(mc(k, g, o), a(m)), !1);
  }
  const h = [],
    p = Object.assign(Ky, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: js,
    });
  function y(m, g) {
    if (!C.isUndefined(m)) {
      if (h.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      h.push(m),
        C.forEach(m, function (v, f) {
          (!(C.isUndefined(v) || v === null) &&
            i.call(t, v, C.isString(f) ? f.trim() : f, g, p)) === !0 &&
            y(v, g ? g.concat(f) : [f]);
        }),
        h.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function vc(e) {
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
function Hu(e, t) {
  (this._pairs = []), e && Wo(e, this, t);
}
const Op = Hu.prototype;
Op.append = function (t, n) {
  this._pairs.push([t, n]);
};
Op.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, vc);
      }
    : vc;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function Xy(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Cp(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Xy,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = C.isURLSearchParams(t) ? t.toString() : new Hu(t, n).toString(r)),
    o)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class yc {
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
const xp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Yy = typeof URLSearchParams < "u" ? URLSearchParams : Hu,
  Gy = typeof FormData < "u" ? FormData : null,
  Jy = typeof Blob < "u" ? Blob : null,
  Zy = {
    isBrowser: !0,
    classes: { URLSearchParams: Yy, FormData: Gy, Blob: Jy },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Qu = typeof window < "u" && typeof document < "u",
  eg = ((e) => Qu && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  tg =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  ng = (Qu && window.location.href) || "http://localhost",
  rg = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Qu,
        hasStandardBrowserEnv: eg,
        hasStandardBrowserWebWorkerEnv: tg,
        origin: ng,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  lt = { ...rg, ...Zy };
function ig(e, t) {
  return Wo(
    e,
    new lt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return lt.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function og(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function lg(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Pp(e) {
  function t(n, r, i, o) {
    let l = n[o++];
    if (l === "__proto__") return !0;
    const s = Number.isFinite(+l),
      u = o >= n.length;
    return (
      (l = !l && C.isArray(i) ? i.length : l),
      u
        ? (C.hasOwnProp(i, l) ? (i[l] = [i[l], r]) : (i[l] = r), !s)
        : ((!i[l] || !C.isObject(i[l])) && (i[l] = []),
          t(n, r, i[l], o) && C.isArray(i[l]) && (i[l] = lg(i[l])),
          !s)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, i) => {
        t(og(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function sg(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Gr = {
  transitional: xp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = C.isObject(t);
      if ((o && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return i ? JSON.stringify(Pp(t)) : t;
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
      let s;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return ig(t, this.formSerializer).toString();
        if ((s = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return Wo(
            s ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), sg(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Gr.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (C.isResponse(t) || C.isReadableStream(t)) return t;
      if (t && C.isString(t) && ((r && !this.responseType) || i)) {
        const l = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (s) {
          if (l)
            throw s.name === "SyntaxError"
              ? I.from(s, I.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
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
  env: { FormData: lt.classes.FormData, Blob: lt.classes.Blob },
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
  Gr.headers[e] = {};
});
const ug = C.toObjectSet([
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
  ag = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (i = l.indexOf(":")),
              (n = l.substring(0, i).trim().toLowerCase()),
              (r = l.substring(i + 1).trim()),
              !(!n || (t[n] && ug[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  gc = Symbol("internals");
function lr(e) {
  return e && String(e).trim().toLowerCase();
}
function bi(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(bi) : String(e);
}
function cg(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const fg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Tl(e, t, n, r, i) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!C.isString(t))) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function dg(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function pg(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, l) {
        return this[r].call(this, t, i, o, l);
      },
      configurable: !0,
    });
  });
}
class Le {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(s, u, a) {
      const c = lr(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const h = C.findKey(i, c);
      (!h || i[h] === void 0 || a === !0 || (a === void 0 && i[h] !== !1)) &&
        (i[h || u] = bi(s));
    }
    const l = (s, u) => C.forEach(s, (a, c) => o(a, c, u));
    if (C.isPlainObject(t) || t instanceof this.constructor) l(t, n);
    else if (C.isString(t) && (t = t.trim()) && !fg(t)) l(ag(t), n);
    else if (C.isHeaders(t)) for (const [s, u] of t.entries()) o(u, s, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = lr(t)), t)) {
      const r = C.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return cg(i);
        if (C.isFunction(n)) return n.call(this, i, r);
        if (C.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = lr(t)), t)) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Tl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(l) {
      if (((l = lr(l)), l)) {
        const s = C.findKey(r, l);
        s && (!n || Tl(r, r[s], s, n)) && (delete r[s], (i = !0));
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
      (!t || Tl(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      C.forEach(this, (i, o) => {
        const l = C.findKey(r, o);
        if (l) {
          (n[l] = bi(i)), delete n[o];
          return;
        }
        const s = t ? dg(o) : String(o).trim();
        s !== o && delete n[o], (n[s] = bi(i)), (r[s] = !0);
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
    const r = (this[gc] = this[gc] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(l) {
      const s = lr(l);
      r[s] || (pg(i, l), (r[s] = !0));
    }
    return C.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Le.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.reduceDescriptors(Le.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
C.freezeMethods(Le);
function Nl(e, t) {
  const n = this || Gr,
    r = t || n,
    i = Le.from(r.headers);
  let o = r.data;
  return (
    C.forEach(e, function (s) {
      o = s.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function Rp(e) {
  return !!(e && e.__CANCEL__);
}
function Gn(e, t, n) {
  I.call(this, e ?? "canceled", I.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
C.inherits(Gn, I, { __CANCEL__: !0 });
function _p(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new I(
          "Request failed with status code " + n.status,
          [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function hg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function mg(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[o];
      l || (l = a), (n[i] = u), (r[i] = a);
      let h = o,
        p = 0;
      for (; h !== i; ) (p += n[h++]), (h = h % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), a - l < t)) return;
      const y = c && a - c;
      return y ? Math.round((p * 1e3) / y) : void 0;
    }
  );
}
function vg(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function () {
    const l = this === !0,
      s = Date.now();
    if (l || s - n > r)
      return (
        i && (clearTimeout(i), (i = null)), (n = s), e.apply(null, arguments)
      );
    i ||
      (i = setTimeout(
        () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
        r - (s - n)
      ));
  };
}
const vo = (e, t, n = 3) => {
    let r = 0;
    const i = mg(50, 250);
    return vg((o) => {
      const l = o.loaded,
        s = o.lengthComputable ? o.total : void 0,
        u = l - r,
        a = i(u),
        c = l <= s;
      r = l;
      const h = {
        loaded: l,
        total: s,
        progress: s ? l / s : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && s && c ? (s - l) / a : void 0,
        event: o,
        lengthComputable: s != null,
      };
      (h[t ? "download" : "upload"] = !0), e(h);
    }, n);
  },
  yg = lt.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(o) {
          let l = o;
          return (
            t && (n.setAttribute("href", l), (l = n.href)),
            n.setAttribute("href", l),
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
          function (l) {
            const s = C.isString(l) ? i(l) : l;
            return s.protocol === r.protocol && s.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  gg = lt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, o) {
          const l = [e + "=" + encodeURIComponent(t)];
          C.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
            C.isString(r) && l.push("path=" + r),
            C.isString(i) && l.push("domain=" + i),
            o === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
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
function wg(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Sg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kp(e, t) {
  return e && !wg(t) ? Sg(e, t) : t;
}
const wc = (e) => (e instanceof Le ? { ...e } : e);
function mn(e, t) {
  t = t || {};
  const n = {};
  function r(a, c, h) {
    return C.isPlainObject(a) && C.isPlainObject(c)
      ? C.merge.call({ caseless: h }, a, c)
      : C.isPlainObject(c)
      ? C.merge({}, c)
      : C.isArray(c)
      ? c.slice()
      : c;
  }
  function i(a, c, h) {
    if (C.isUndefined(c)) {
      if (!C.isUndefined(a)) return r(void 0, a, h);
    } else return r(a, c, h);
  }
  function o(a, c) {
    if (!C.isUndefined(c)) return r(void 0, c);
  }
  function l(a, c) {
    if (C.isUndefined(c)) {
      if (!C.isUndefined(a)) return r(void 0, a);
    } else return r(void 0, c);
  }
  function s(a, c, h) {
    if (h in t) return r(a, c);
    if (h in e) return r(void 0, a);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: s,
    headers: (a, c) => i(wc(a), wc(c), !0),
  };
  return (
    C.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const h = u[c] || i,
        p = h(e[c], t[c], c);
      (C.isUndefined(p) && h !== s) || (n[c] = p);
    }),
    n
  );
}
const Tp = (e) => {
    const t = mn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: l,
      auth: s,
    } = t;
    (t.headers = l = Le.from(l)),
      (t.url = Cp(kp(t.baseURL, t.url), e.params, e.paramsSerializer)),
      s &&
        l.set(
          "Authorization",
          "Basic " +
            btoa(
              (s.username || "") +
                ":" +
                (s.password ? unescape(encodeURIComponent(s.password)) : "")
            )
        );
    let u;
    if (C.isFormData(n)) {
      if (lt.hasStandardBrowserEnv || lt.hasStandardBrowserWebWorkerEnv)
        l.setContentType(void 0);
      else if ((u = l.getContentType()) !== !1) {
        const [a, ...c] = u
          ? u
              .split(";")
              .map((h) => h.trim())
              .filter(Boolean)
          : [];
        l.setContentType([a || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      lt.hasStandardBrowserEnv &&
      (r && C.isFunction(r) && (r = r(t)), r || (r !== !1 && yg(t.url)))
    ) {
      const a = i && o && gg.read(o);
      a && l.set(i, a);
    }
    return t;
  },
  Eg = typeof XMLHttpRequest < "u",
  Og =
    Eg &&
    function (e) {
      return new Promise(function (n, r) {
        const i = Tp(e);
        let o = i.data;
        const l = Le.from(i.headers).normalize();
        let { responseType: s } = i,
          u;
        function a() {
          i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener("abort", u);
        }
        let c = new XMLHttpRequest();
        c.open(i.method.toUpperCase(), i.url, !0), (c.timeout = i.timeout);
        function h() {
          if (!c) return;
          const y = Le.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            g = {
              data:
                !s || s === "text" || s === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          _p(
            function (v) {
              n(v), a();
            },
            function (v) {
              r(v), a();
            },
            g
          ),
            (c = null);
        }
        "onloadend" in c
          ? (c.onloadend = h)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(h);
            }),
          (c.onabort = function () {
            c &&
              (r(new I("Request aborted", I.ECONNABORTED, i, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new I("Network Error", I.ERR_NETWORK, i, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let m = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const g = i.transitional || xp;
            i.timeoutErrorMessage && (m = i.timeoutErrorMessage),
              r(
                new I(
                  m,
                  g.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
                  i,
                  c
                )
              ),
              (c = null);
          }),
          o === void 0 && l.setContentType(null),
          "setRequestHeader" in c &&
            C.forEach(l.toJSON(), function (m, g) {
              c.setRequestHeader(g, m);
            }),
          C.isUndefined(i.withCredentials) ||
            (c.withCredentials = !!i.withCredentials),
          s && s !== "json" && (c.responseType = i.responseType),
          typeof i.onDownloadProgress == "function" &&
            c.addEventListener("progress", vo(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", vo(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((u = (y) => {
              c &&
                (r(!y || y.type ? new Gn(null, e, c) : y),
                c.abort(),
                (c = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
        const p = hg(i.url);
        if (p && lt.protocols.indexOf(p) === -1) {
          r(new I("Unsupported protocol " + p + ":", I.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  Cg = (e, t) => {
    let n = new AbortController(),
      r;
    const i = function (u) {
      if (!r) {
        (r = !0), l();
        const a = u instanceof Error ? u : this.reason;
        n.abort(
          a instanceof I ? a : new Gn(a instanceof Error ? a.message : a)
        );
      }
    };
    let o =
      t &&
      setTimeout(() => {
        i(new I(`timeout ${t} of ms exceeded`, I.ETIMEDOUT));
      }, t);
    const l = () => {
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
    const { signal: s } = n;
    return (
      (s.unsubscribe = l),
      [
        s,
        () => {
          o && clearTimeout(o), (o = null);
        },
      ]
    );
  },
  xg = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  Pg = async function* (e, t, n) {
    for await (const r of e)
      yield* xg(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Sc = (e, t, n, r, i) => {
    const o = Pg(e, t, i);
    let l = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(s) {
          const { done: u, value: a } = await o.next();
          if (u) {
            s.close(), r();
            return;
          }
          let c = a.byteLength;
          n && n((l += c)), s.enqueue(new Uint8Array(a));
        },
        cancel(s) {
          return r(s), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Ec = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  qo =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Np = qo && typeof ReadableStream == "function",
  Ls =
    qo &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Rg =
    Np &&
    (() => {
      let e = !1;
      const t = new Request(lt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  Oc = 64 * 1024,
  zs =
    Np &&
    !!(() => {
      try {
        return C.isReadableStream(new Response("").body);
      } catch {}
    })(),
  yo = { stream: zs && ((e) => e.body) };
qo &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !yo[t] &&
        (yo[t] = C.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new I(
                `Response type '${t}' is not supported`,
                I.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const _g = async (e) => {
    if (e == null) return 0;
    if (C.isBlob(e)) return e.size;
    if (C.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (C.isArrayBufferView(e)) return e.byteLength;
    if ((C.isURLSearchParams(e) && (e = e + ""), C.isString(e)))
      return (await Ls(e)).byteLength;
  },
  kg = async (e, t) => {
    const n = C.toFiniteNumber(e.getContentLength());
    return n ?? _g(t);
  },
  Tg =
    qo &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: o,
        timeout: l,
        onDownloadProgress: s,
        onUploadProgress: u,
        responseType: a,
        headers: c,
        withCredentials: h = "same-origin",
        fetchOptions: p,
      } = Tp(e);
      a = a ? (a + "").toLowerCase() : "text";
      let [y, m] = i || o || l ? Cg([i, o], l) : [],
        g,
        k;
      const v = () => {
        !g &&
          setTimeout(() => {
            y && y.unsubscribe();
          }),
          (g = !0);
      };
      let f;
      try {
        if (
          u &&
          Rg &&
          n !== "get" &&
          n !== "head" &&
          (f = await kg(c, r)) !== 0
        ) {
          let S = new Request(t, { method: "POST", body: r, duplex: "half" }),
            E;
          C.isFormData(r) &&
            (E = S.headers.get("content-type")) &&
            c.setContentType(E),
            S.body && (r = Sc(S.body, Oc, Ec(f, vo(u)), null, Ls));
        }
        C.isString(h) || (h = h ? "cors" : "omit"),
          (k = new Request(t, {
            ...p,
            signal: y,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: h,
          }));
        let d = await fetch(k);
        const w = zs && (a === "stream" || a === "response");
        if (zs && (s || w)) {
          const S = {};
          ["status", "statusText", "headers"].forEach((_) => {
            S[_] = d[_];
          });
          const E = C.toFiniteNumber(d.headers.get("content-length"));
          d = new Response(
            Sc(d.body, Oc, s && Ec(E, vo(s, !0)), w && v, Ls),
            S
          );
        }
        a = a || "text";
        let O = await yo[C.findKey(yo, a) || "text"](d, e);
        return (
          !w && v(),
          m && m(),
          await new Promise((S, E) => {
            _p(S, E, {
              data: O,
              headers: Le.from(d.headers),
              status: d.status,
              statusText: d.statusText,
              config: e,
              request: k,
            });
          })
        );
      } catch (d) {
        throw (
          (v(),
          d && d.name === "TypeError" && /fetch/i.test(d.message)
            ? Object.assign(new I("Network Error", I.ERR_NETWORK, e, k), {
                cause: d.cause || d,
              })
            : I.from(d, d && d.code, e, k))
        );
      }
    }),
  As = { http: Wy, xhr: Og, fetch: Tg };
C.forEach(As, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Cc = (e) => `- ${e}`,
  Ng = (e) => C.isFunction(e) || e === null || e === !1,
  Dp = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let l;
        if (
          ((r = n),
          !Ng(n) && ((r = As[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new I(`Unknown adapter '${l}'`);
        if (r) break;
        i[l || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([s, u]) =>
            `adapter ${s} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let l = t
          ? o.length > 1
            ? `since :
` +
              o.map(Cc).join(`
`)
            : " " + Cc(o[0])
          : "as no adapter specified";
        throw new I(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: As,
  };
function Dl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Gn(null, e);
}
function xc(e) {
  return (
    Dl(e),
    (e.headers = Le.from(e.headers)),
    (e.data = Nl.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Dp.getAdapter(e.adapter || Gr.adapter)(e).then(
      function (r) {
        return (
          Dl(e),
          (r.data = Nl.call(e, e.transformResponse, r)),
          (r.headers = Le.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Rp(r) ||
            (Dl(e),
            r &&
              r.response &&
              ((r.response.data = Nl.call(e, e.transformResponse, r.response)),
              (r.response.headers = Le.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Fp = "1.7.2",
  Vu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Vu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Pc = {};
Vu.transitional = function (t, n, r) {
  function i(o, l) {
    return (
      "[Axios v" +
      Fp +
      "] Transitional option '" +
      o +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (o, l, s) => {
    if (t === !1)
      throw new I(
        i(l, " has been removed" + (n ? " in " + n : "")),
        I.ERR_DEPRECATED
      );
    return (
      n &&
        !Pc[l] &&
        ((Pc[l] = !0),
        console.warn(
          i(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, l, s) : !0
    );
  };
};
function Dg(e, t, n) {
  if (typeof e != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      l = t[o];
    if (l) {
      const s = e[o],
        u = s === void 0 || l(s, o, e);
      if (u !== !0)
        throw new I("option " + o + " must be " + u, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new I("Unknown option " + o, I.ERR_BAD_OPTION);
  }
}
const Is = { assertOptions: Dg, validators: Vu },
  Tt = Is.validators;
class an {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new yc(), response: new yc() });
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
      (n = mn(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      Is.assertOptions(
        r,
        {
          silentJSONParsing: Tt.transitional(Tt.boolean),
          forcedJSONParsing: Tt.transitional(Tt.boolean),
          clarifyTimeoutError: Tt.transitional(Tt.boolean),
        },
        !1
      ),
      i != null &&
        (C.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Is.assertOptions(
              i,
              { encode: Tt.function, serialize: Tt.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = o && C.merge(o.common, o[n.method]);
    o &&
      C.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete o[m];
        }
      ),
      (n.headers = Le.concat(l, o));
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (g) {
      (typeof g.runWhen == "function" && g.runWhen(n) === !1) ||
        ((u = u && g.synchronous), s.unshift(g.fulfilled, g.rejected));
    });
    const a = [];
    this.interceptors.response.forEach(function (g) {
      a.push(g.fulfilled, g.rejected);
    });
    let c,
      h = 0,
      p;
    if (!u) {
      const m = [xc.bind(this), void 0];
      for (
        m.unshift.apply(m, s),
          m.push.apply(m, a),
          p = m.length,
          c = Promise.resolve(n);
        h < p;

      )
        c = c.then(m[h++], m[h++]);
      return c;
    }
    p = s.length;
    let y = n;
    for (h = 0; h < p; ) {
      const m = s[h++],
        g = s[h++];
      try {
        y = m(y);
      } catch (k) {
        g.call(this, k);
        break;
      }
    }
    try {
      c = xc.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (h = 0, p = a.length; h < p; ) c = c.then(a[h++], a[h++]);
    return c;
  }
  getUri(t) {
    t = mn(this.defaults, t);
    const n = kp(t.baseURL, t.url);
    return Cp(n, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (t) {
  an.prototype[t] = function (n, r) {
    return this.request(
      mn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
C.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, l, s) {
      return this.request(
        mn(s || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: l,
        })
      );
    };
  }
  (an.prototype[t] = n()), (an.prototype[t + "Form"] = n(!0));
});
class Wu {
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
        const l = new Promise((s) => {
          r.subscribe(s), (o = s);
        }).then(i);
        return (
          (l.cancel = function () {
            r.unsubscribe(o);
          }),
          l
        );
      }),
      t(function (o, l, s) {
        r.reason || ((r.reason = new Gn(o, l, s)), n(r.reason));
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
      token: new Wu(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function Fg(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Mg(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const bs = {
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
Object.entries(bs).forEach(([e, t]) => {
  bs[t] = e;
});
function Mp(e) {
  const t = new an(e),
    n = fp(an.prototype.request, t);
  return (
    C.extend(n, an.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Mp(mn(e, i));
    }),
    n
  );
}
const q = Mp(Gr);
q.Axios = an;
q.CanceledError = Gn;
q.CancelToken = Wu;
q.isCancel = Rp;
q.VERSION = Fp;
q.toFormData = Wo;
q.AxiosError = I;
q.Cancel = q.CanceledError;
q.all = function (t) {
  return Promise.all(t);
};
q.spread = Fg;
q.isAxiosError = Mg;
q.mergeConfig = mn;
q.AxiosHeaders = Le;
q.formToJSON = (e) => Pp(C.isHTMLForm(e) ? new FormData(e) : e);
q.getAdapter = Dp.getAdapter;
q.HttpStatusCode = bs;
q.default = q;
function Us(e, t) {
  return (
    (Us = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Us(e, t)
  );
}
function Jr(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Us(e, t);
}
var Zr = (function () {
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
          (i.listeners = i.listeners.filter(function (l) {
            return l !== o;
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
function H() {
  return (
    (H = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    H.apply(null, arguments)
  );
}
var go = typeof window > "u";
function Ee() {}
function jg(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $s(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function wo(e) {
  return Array.isArray(e) ? e : [e];
}
function jp(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ui(e, t, n) {
  return Ko(e)
    ? typeof t == "function"
      ? H({}, n, { queryKey: e, queryFn: t })
      : H({}, t, { queryKey: e })
    : e;
}
function jt(e, t, n) {
  return Ko(e) ? [H({}, t, { queryKey: e }), n] : [e || {}, t];
}
function Lg(e, t) {
  if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
  if (e === !1 && t === !1) return "none";
  var n = e ?? !t;
  return n ? "active" : "inactive";
}
function Rc(e, t) {
  var n = e.active,
    r = e.exact,
    i = e.fetching,
    o = e.inactive,
    l = e.predicate,
    s = e.queryKey,
    u = e.stale;
  if (Ko(s)) {
    if (r) {
      if (t.queryHash !== qu(s, t.options)) return !1;
    } else if (!So(t.queryKey, s)) return !1;
  }
  var a = Lg(n, o);
  if (a === "none") return !1;
  if (a !== "all") {
    var c = t.isActive();
    if ((a === "active" && !c) || (a === "inactive" && c)) return !1;
  }
  return !(
    (typeof u == "boolean" && t.isStale() !== u) ||
    (typeof i == "boolean" && t.isFetching() !== i) ||
    (l && !l(t))
  );
}
function _c(e, t) {
  var n = e.exact,
    r = e.fetching,
    i = e.predicate,
    o = e.mutationKey;
  if (Ko(o)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (ln(t.options.mutationKey) !== ln(o)) return !1;
    } else if (!So(t.options.mutationKey, o)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function qu(e, t) {
  var n = (t == null ? void 0 : t.queryKeyHashFn) || ln;
  return n(e);
}
function ln(e) {
  var t = wo(e);
  return zg(t);
}
function zg(e) {
  return JSON.stringify(e, function (t, n) {
    return Bs(n)
      ? Object.keys(n)
          .sort()
          .reduce(function (r, i) {
            return (r[i] = n[i]), r;
          }, {})
      : n;
  });
}
function So(e, t) {
  return Lp(wo(e), wo(t));
}
function Lp(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some(function (n) {
        return !Lp(e[n], t[n]);
      })
    : !1;
}
function Eo(e, t) {
  if (e === t) return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || (Bs(e) && Bs(t))) {
    for (
      var r = n ? e.length : Object.keys(e).length,
        i = n ? t : Object.keys(t),
        o = i.length,
        l = n ? [] : {},
        s = 0,
        u = 0;
      u < o;
      u++
    ) {
      var a = n ? u : i[u];
      (l[a] = Eo(e[a], t[a])), l[a] === e[a] && s++;
    }
    return r === o && s === r ? e : l;
  }
  return t;
}
function Ag(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Bs(e) {
  if (!kc(e)) return !1;
  var t = e.constructor;
  if (typeof t > "u") return !0;
  var n = t.prototype;
  return !(!kc(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function kc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ko(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ig(e) {
  return new Promise(function (t) {
    setTimeout(t, e);
  });
}
function Tc(e) {
  Promise.resolve()
    .then(e)
    .catch(function (t) {
      return setTimeout(function () {
        throw t;
      });
    });
}
function zp() {
  if (typeof AbortController == "function") return new AbortController();
}
var bg = (function (e) {
    Jr(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!go && (o = window) != null && o.addEventListener) {
            var l = function () {
              return i();
            };
            return (
              window.addEventListener("visibilitychange", l, !1),
              window.addEventListener("focus", l, !1),
              function () {
                window.removeEventListener("visibilitychange", l),
                  window.removeEventListener("focus", l);
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
          l = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (s) {
            typeof s == "boolean" ? l.setFocused(s) : l.onFocus();
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
  })(Zr),
  xr = new bg(),
  Ug = (function (e) {
    Jr(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!go && (o = window) != null && o.addEventListener) {
            var l = function () {
              return i();
            };
            return (
              window.addEventListener("online", l, !1),
              window.addEventListener("offline", l, !1),
              function () {
                window.removeEventListener("online", l),
                  window.removeEventListener("offline", l);
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
          l = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (s) {
            typeof s == "boolean" ? l.setOnline(s) : l.onOnline();
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
  })(Zr),
  $i = new Ug();
function $g(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function Oo(e) {
  return typeof (e == null ? void 0 : e.cancel) == "function";
}
var Ap = function (t) {
  (this.revert = t == null ? void 0 : t.revert),
    (this.silent = t == null ? void 0 : t.silent);
};
function Bi(e) {
  return e instanceof Ap;
}
var Ip = function (t) {
    var n = this,
      r = !1,
      i,
      o,
      l,
      s;
    (this.abort = t.abort),
      (this.cancel = function (p) {
        return i == null ? void 0 : i(p);
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
      (this.promise = new Promise(function (p, y) {
        (l = p), (s = y);
      }));
    var u = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onSuccess == null || t.onSuccess(y),
          o == null || o(),
          l(y));
      },
      a = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onError == null || t.onError(y),
          o == null || o(),
          s(y));
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
      h = function p() {
        if (!n.isResolved) {
          var y;
          try {
            y = t.fn();
          } catch (m) {
            y = Promise.reject(m);
          }
          (i = function (g) {
            if (
              !n.isResolved &&
              (a(new Ap(g)), n.abort == null || n.abort(), Oo(y))
            )
              try {
                y.cancel();
              } catch {}
          }),
            (n.isTransportCancelable = Oo(y)),
            Promise.resolve(y)
              .then(u)
              .catch(function (m) {
                var g, k;
                if (!n.isResolved) {
                  var v = (g = t.retry) != null ? g : 3,
                    f = (k = t.retryDelay) != null ? k : $g,
                    d = typeof f == "function" ? f(n.failureCount, m) : f,
                    w =
                      v === !0 ||
                      (typeof v == "number" && n.failureCount < v) ||
                      (typeof v == "function" && v(n.failureCount, m));
                  if (r || !w) {
                    a(m);
                    return;
                  }
                  n.failureCount++,
                    t.onFail == null || t.onFail(n.failureCount, m),
                    Ig(d)
                      .then(function () {
                        if (!xr.isFocused() || !$i.isOnline()) return c();
                      })
                      .then(function () {
                        r ? a(m) : p();
                      });
                }
              });
        }
      };
    h();
  },
  Bg = (function () {
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
          : Tc(function () {
              i.notifyFn(r);
            });
      }),
      (t.batchCalls = function (r) {
        var i = this;
        return function () {
          for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++)
            l[s] = arguments[s];
          i.schedule(function () {
            r.apply(void 0, l);
          });
        };
      }),
      (t.flush = function () {
        var r = this,
          i = this.queue;
        (this.queue = []),
          i.length &&
            Tc(function () {
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
  ne = new Bg(),
  bp = console;
function Co() {
  return bp;
}
function Hg(e) {
  bp = e;
}
var Qg = (function () {
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
        (this.options = H({}, this.defaultOptions, r)),
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
          $s(this.cacheTime) &&
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
          l,
          s = this.state.data,
          u = jg(r, s);
        return (
          (o = (l = this.options).isDataEqual) != null && o.call(l, s, u)
            ? (u = s)
            : this.options.structuralSharing !== !1 && (u = Eo(s, u)),
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
          o ? o.then(Ee).catch(Ee) : Promise.resolve()
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
            !jp(this.state.dataUpdatedAt, r)
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
          l,
          s,
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
        var h = wo(this.queryKey),
          p = zp(),
          y = { queryKey: h, pageParam: void 0, meta: this.meta };
        Object.defineProperty(y, "signal", {
          enumerable: !0,
          get: function () {
            if (p) return (o.abortSignalConsumed = !0), p.signal;
          },
        });
        var m = function () {
            return o.options.queryFn
              ? ((o.abortSignalConsumed = !1), o.options.queryFn(y))
              : Promise.reject("Missing queryFn");
          },
          g = {
            fetchOptions: i,
            options: this.options,
            queryKey: h,
            state: this.state,
            fetchFn: m,
            meta: this.meta,
          };
        if ((l = this.options.behavior) != null && l.onFetch) {
          var k;
          (k = this.options.behavior) == null || k.onFetch(g);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !==
              ((s = g.fetchOptions) == null ? void 0 : s.meta))
        ) {
          var v;
          this.dispatch({
            type: "fetch",
            meta: (v = g.fetchOptions) == null ? void 0 : v.meta,
          });
        }
        return (
          (this.retryer = new Ip({
            fn: g.fetchFn,
            abort: p == null || (u = p.abort) == null ? void 0 : u.bind(p),
            onSuccess: function (d) {
              o.setData(d),
                o.cache.config.onSuccess == null ||
                  o.cache.config.onSuccess(d, o),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onError: function (d) {
              (Bi(d) && d.silent) || o.dispatch({ type: "error", error: d }),
                Bi(d) ||
                  (o.cache.config.onError == null ||
                    o.cache.config.onError(d, o),
                  Co().error(d)),
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
            retry: g.options.retry,
            retryDelay: g.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = this.reducer(this.state, r)),
          ne.batch(function () {
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
          l = o
            ? typeof r.initialDataUpdatedAt == "function"
              ? r.initialDataUpdatedAt()
              : r.initialDataUpdatedAt
            : 0,
          s = typeof i < "u";
        return {
          data: i,
          dataUpdateCount: 0,
          dataUpdatedAt: s ? l ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: s ? "success" : "idle",
        };
      }),
      (t.reducer = function (r, i) {
        var o, l;
        switch (i.type) {
          case "failed":
            return H({}, r, { fetchFailureCount: r.fetchFailureCount + 1 });
          case "pause":
            return H({}, r, { isPaused: !0 });
          case "continue":
            return H({}, r, { isPaused: !1 });
          case "fetch":
            return H(
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
            return H({}, r, {
              data: i.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: (l = i.dataUpdatedAt) != null ? l : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: "success",
            });
          case "error":
            var s = i.error;
            return Bi(s) && s.revert && this.revertState
              ? H({}, this.revertState)
              : H({}, r, {
                  error: s,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
          case "invalidate":
            return H({}, r, { isInvalidated: !0 });
          case "setState":
            return H({}, r, i.state);
          default:
            return r;
        }
      }),
      e
    );
  })(),
  Vg = (function (e) {
    Jr(t, e);
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
      (n.build = function (i, o, l) {
        var s,
          u = o.queryKey,
          a = (s = o.queryHash) != null ? s : qu(u, o),
          c = this.get(a);
        return (
          c ||
            ((c = new Qg({
              cache: this,
              queryKey: u,
              queryHash: a,
              options: i.defaultQueryOptions(o),
              state: l,
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
          (this.queries = this.queries.filter(function (l) {
            return l !== i;
          })),
          o === i && delete this.queriesMap[i.queryHash],
          this.notify({ type: "queryRemoved", query: i }));
      }),
      (n.clear = function () {
        var i = this;
        ne.batch(function () {
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
        var l = jt(i, o),
          s = l[0];
        return (
          typeof s.exact > "u" && (s.exact = !0),
          this.queries.find(function (u) {
            return Rc(s, u);
          })
        );
      }),
      (n.findAll = function (i, o) {
        var l = jt(i, o),
          s = l[0];
        return Object.keys(s).length > 0
          ? this.queries.filter(function (u) {
              return Rc(s, u);
            })
          : this.queries;
      }),
      (n.notify = function (i) {
        var o = this;
        ne.batch(function () {
          o.listeners.forEach(function (l) {
            l(i);
          });
        });
      }),
      (n.onFocus = function () {
        var i = this;
        ne.batch(function () {
          i.queries.forEach(function (o) {
            o.onFocus();
          });
        });
      }),
      (n.onOnline = function () {
        var i = this;
        ne.batch(function () {
          i.queries.forEach(function (o) {
            o.onOnline();
          });
        });
      }),
      t
    );
  })(Zr),
  Wg = (function () {
    function e(n) {
      (this.options = H({}, n.defaultOptions, n.options)),
        (this.mutationId = n.mutationId),
        (this.mutationCache = n.mutationCache),
        (this.observers = []),
        (this.state = n.state || qg()),
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
          ? (this.retryer.cancel(), this.retryer.promise.then(Ee).catch(Ee))
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
          l = Promise.resolve();
        return (
          o ||
            (this.dispatch({
              type: "loading",
              variables: this.options.variables,
            }),
            (l = l
              .then(function () {
                r.mutationCache.config.onMutate == null ||
                  r.mutationCache.config.onMutate(r.state.variables, r);
              })
              .then(function () {
                return r.options.onMutate == null
                  ? void 0
                  : r.options.onMutate(r.state.variables);
              })
              .then(function (s) {
                s !== r.state.context &&
                  r.dispatch({
                    type: "loading",
                    context: s,
                    variables: r.state.variables,
                  });
              }))),
          l
            .then(function () {
              return r.executeMutation();
            })
            .then(function (s) {
              (i = s),
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
            .catch(function (s) {
              return (
                r.mutationCache.config.onError == null ||
                  r.mutationCache.config.onError(
                    s,
                    r.state.variables,
                    r.state.context,
                    r
                  ),
                Co().error(s),
                Promise.resolve()
                  .then(function () {
                    return r.options.onError == null
                      ? void 0
                      : r.options.onError(
                          s,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    return r.options.onSettled == null
                      ? void 0
                      : r.options.onSettled(
                          void 0,
                          s,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    throw (r.dispatch({ type: "error", error: s }), s);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var r = this,
          i;
        return (
          (this.retryer = new Ip({
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
        (this.state = Kg(this.state, r)),
          ne.batch(function () {
            i.observers.forEach(function (o) {
              o.onMutationUpdate(r);
            }),
              i.mutationCache.notify(i);
          });
      }),
      e
    );
  })();
function qg() {
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
function Kg(e, t) {
  switch (t.type) {
    case "failed":
      return H({}, e, { failureCount: e.failureCount + 1 });
    case "pause":
      return H({}, e, { isPaused: !0 });
    case "continue":
      return H({}, e, { isPaused: !1 });
    case "loading":
      return H({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables,
      });
    case "success":
      return H({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1,
      });
    case "error":
      return H({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error",
      });
    case "setState":
      return H({}, e, t.state);
    default:
      return e;
  }
}
var Xg = (function (e) {
  Jr(t, e);
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
    (n.build = function (i, o, l) {
      var s = new Wg({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: i.defaultMutationOptions(o),
        state: l,
        defaultOptions: o.mutationKey
          ? i.getMutationDefaults(o.mutationKey)
          : void 0,
        meta: o.meta,
      });
      return this.add(s), s;
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
      ne.batch(function () {
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
          return _c(i, o);
        })
      );
    }),
    (n.findAll = function (i) {
      return this.mutations.filter(function (o) {
        return _c(i, o);
      });
    }),
    (n.notify = function (i) {
      var o = this;
      ne.batch(function () {
        o.listeners.forEach(function (l) {
          l(i);
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
      return ne.batch(function () {
        return i.reduce(function (o, l) {
          return o.then(function () {
            return l.continue().catch(Ee);
          });
        }, Promise.resolve());
      });
    }),
    t
  );
})(Zr);
function Yg() {
  return {
    onFetch: function (t) {
      t.fetchFn = function () {
        var n,
          r,
          i,
          o,
          l,
          s,
          u =
            (n = t.fetchOptions) == null || (r = n.meta) == null
              ? void 0
              : r.refetchPage,
          a =
            (i = t.fetchOptions) == null || (o = i.meta) == null
              ? void 0
              : o.fetchMore,
          c = a == null ? void 0 : a.pageParam,
          h = (a == null ? void 0 : a.direction) === "forward",
          p = (a == null ? void 0 : a.direction) === "backward",
          y = ((l = t.state.data) == null ? void 0 : l.pages) || [],
          m = ((s = t.state.data) == null ? void 0 : s.pageParams) || [],
          g = zp(),
          k = g == null ? void 0 : g.signal,
          v = m,
          f = !1,
          d =
            t.options.queryFn ||
            function () {
              return Promise.reject("Missing queryFn");
            },
          w = function (ue, L, U, oe) {
            return (
              (v = oe ? [L].concat(v) : [].concat(v, [L])),
              oe ? [U].concat(ue) : [].concat(ue, [U])
            );
          },
          O = function (ue, L, U, oe) {
            if (f) return Promise.reject("Cancelled");
            if (typeof U > "u" && !L && ue.length) return Promise.resolve(ue);
            var R = {
                queryKey: t.queryKey,
                signal: k,
                pageParam: U,
                meta: t.meta,
              },
              M = d(R),
              z = Promise.resolve(M).then(function (A) {
                return w(ue, U, A, oe);
              });
            if (Oo(M)) {
              var j = z;
              j.cancel = M.cancel;
            }
            return z;
          },
          S;
        if (!y.length) S = O([]);
        else if (h) {
          var E = typeof c < "u",
            _ = E ? c : Nc(t.options, y);
          S = O(y, E, _);
        } else if (p) {
          var F = typeof c < "u",
            P = F ? c : Gg(t.options, y);
          S = O(y, F, P, !0);
        } else
          (function () {
            v = [];
            var se = typeof t.options.getNextPageParam > "u",
              ue = u && y[0] ? u(y[0], 0, y) : !0;
            S = ue ? O([], se, m[0]) : Promise.resolve(w([], m[0], y[0]));
            for (
              var L = function (R) {
                  S = S.then(function (M) {
                    var z = u && y[R] ? u(y[R], R, y) : !0;
                    if (z) {
                      var j = se ? m[R] : Nc(t.options, M);
                      return O(M, se, j);
                    }
                    return Promise.resolve(w(M, m[R], y[R]));
                  });
                },
                U = 1;
              U < y.length;
              U++
            )
              L(U);
          })();
        var V = S.then(function (se) {
            return { pages: se, pageParams: v };
          }),
          ie = V;
        return (
          (ie.cancel = function () {
            (f = !0), g == null || g.abort(), Oo(S) && S.cancel();
          }),
          V
        );
      };
    },
  };
}
function Nc(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function Gg(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
var Jg = (function () {
    function e(n) {
      n === void 0 && (n = {}),
        (this.queryCache = n.queryCache || new Vg()),
        (this.mutationCache = n.mutationCache || new Xg()),
        (this.defaultOptions = n.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var r = this;
        (this.unsubscribeFocus = xr.subscribe(function () {
          xr.isFocused() &&
            $i.isOnline() &&
            (r.mutationCache.onFocus(), r.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = $i.subscribe(function () {
            xr.isFocused() &&
              $i.isOnline() &&
              (r.mutationCache.onOnline(), r.queryCache.onOnline());
          }));
      }),
      (t.unmount = function () {
        var r, i;
        (r = this.unsubscribeFocus) == null || r.call(this),
          (i = this.unsubscribeOnline) == null || i.call(this);
      }),
      (t.isFetching = function (r, i) {
        var o = jt(r, i),
          l = o[0];
        return (l.fetching = !0), this.queryCache.findAll(l).length;
      }),
      (t.isMutating = function (r) {
        return this.mutationCache.findAll(H({}, r, { fetching: !0 })).length;
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
              l = i.state,
              s = l.data;
            return [o, s];
          });
      }),
      (t.setQueryData = function (r, i, o) {
        var l = Ui(r),
          s = this.defaultQueryOptions(l);
        return this.queryCache.build(this, s).setData(i, o);
      }),
      (t.setQueriesData = function (r, i, o) {
        var l = this;
        return ne.batch(function () {
          return l
            .getQueryCache()
            .findAll(r)
            .map(function (s) {
              var u = s.queryKey;
              return [u, l.setQueryData(u, i, o)];
            });
        });
      }),
      (t.getQueryState = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state;
      }),
      (t.removeQueries = function (r, i) {
        var o = jt(r, i),
          l = o[0],
          s = this.queryCache;
        ne.batch(function () {
          s.findAll(l).forEach(function (u) {
            s.remove(u);
          });
        });
      }),
      (t.resetQueries = function (r, i, o) {
        var l = this,
          s = jt(r, i, o),
          u = s[0],
          a = s[1],
          c = this.queryCache,
          h = H({}, u, { active: !0 });
        return ne.batch(function () {
          return (
            c.findAll(u).forEach(function (p) {
              p.reset();
            }),
            l.refetchQueries(h, a)
          );
        });
      }),
      (t.cancelQueries = function (r, i, o) {
        var l = this,
          s = jt(r, i, o),
          u = s[0],
          a = s[1],
          c = a === void 0 ? {} : a;
        typeof c.revert > "u" && (c.revert = !0);
        var h = ne.batch(function () {
          return l.queryCache.findAll(u).map(function (p) {
            return p.cancel(c);
          });
        });
        return Promise.all(h).then(Ee).catch(Ee);
      }),
      (t.invalidateQueries = function (r, i, o) {
        var l,
          s,
          u,
          a = this,
          c = jt(r, i, o),
          h = c[0],
          p = c[1],
          y = H({}, h, {
            active:
              (l = (s = h.refetchActive) != null ? s : h.active) != null
                ? l
                : !0,
            inactive: (u = h.refetchInactive) != null ? u : !1,
          });
        return ne.batch(function () {
          return (
            a.queryCache.findAll(h).forEach(function (m) {
              m.invalidate();
            }),
            a.refetchQueries(y, p)
          );
        });
      }),
      (t.refetchQueries = function (r, i, o) {
        var l = this,
          s = jt(r, i, o),
          u = s[0],
          a = s[1],
          c = ne.batch(function () {
            return l.queryCache.findAll(u).map(function (p) {
              return p.fetch(
                void 0,
                H({}, a, {
                  meta: { refetchPage: u == null ? void 0 : u.refetchPage },
                })
              );
            });
          }),
          h = Promise.all(c).then(Ee);
        return (a != null && a.throwOnError) || (h = h.catch(Ee)), h;
      }),
      (t.fetchQuery = function (r, i, o) {
        var l = Ui(r, i, o),
          s = this.defaultQueryOptions(l);
        typeof s.retry > "u" && (s.retry = !1);
        var u = this.queryCache.build(this, s);
        return u.isStaleByTime(s.staleTime)
          ? u.fetch(s)
          : Promise.resolve(u.state.data);
      }),
      (t.prefetchQuery = function (r, i, o) {
        return this.fetchQuery(r, i, o).then(Ee).catch(Ee);
      }),
      (t.fetchInfiniteQuery = function (r, i, o) {
        var l = Ui(r, i, o);
        return (l.behavior = Yg()), this.fetchQuery(l);
      }),
      (t.prefetchInfiniteQuery = function (r, i, o) {
        return this.fetchInfiniteQuery(r, i, o).then(Ee).catch(Ee);
      }),
      (t.cancelMutations = function () {
        var r = this,
          i = ne.batch(function () {
            return r.mutationCache.getAll().map(function (o) {
              return o.cancel();
            });
          });
        return Promise.all(i).then(Ee).catch(Ee);
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
        var o = this.queryDefaults.find(function (l) {
          return ln(r) === ln(l.queryKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.queryDefaults.push({ queryKey: r, defaultOptions: i });
      }),
      (t.getQueryDefaults = function (r) {
        var i;
        return r
          ? (i = this.queryDefaults.find(function (o) {
              return So(r, o.queryKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (r, i) {
        var o = this.mutationDefaults.find(function (l) {
          return ln(r) === ln(l.mutationKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.mutationDefaults.push({ mutationKey: r, defaultOptions: i });
      }),
      (t.getMutationDefaults = function (r) {
        var i;
        return r
          ? (i = this.mutationDefaults.find(function (o) {
              return So(r, o.mutationKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (r) {
        if (r != null && r._defaulted) return r;
        var i = H(
          {},
          this.defaultOptions.queries,
          this.getQueryDefaults(r == null ? void 0 : r.queryKey),
          r,
          { _defaulted: !0 }
        );
        return (
          !i.queryHash && i.queryKey && (i.queryHash = qu(i.queryKey, i)), i
        );
      }),
      (t.defaultQueryObserverOptions = function (r) {
        return this.defaultQueryOptions(r);
      }),
      (t.defaultMutationOptions = function (r) {
        return r != null && r._defaulted
          ? r
          : H(
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
  Zg = (function (e) {
    Jr(t, e);
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
          Dc(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (n.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (n.shouldFetchOnReconnect = function () {
        return Hs(
          this.currentQuery,
          this.options,
          this.options.refetchOnReconnect
        );
      }),
      (n.shouldFetchOnWindowFocus = function () {
        return Hs(
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
        var l = this.options,
          s = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(i)),
          typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = l.queryKey),
          this.updateQuery();
        var u = this.hasListeners();
        u && Fc(this.currentQuery, s, this.options, l) && this.executeFetch(),
          this.updateResult(o),
          u &&
            (this.currentQuery !== s ||
              this.options.enabled !== l.enabled ||
              this.options.staleTime !== l.staleTime) &&
            this.updateStaleTimeout();
        var a = this.computeRefetchInterval();
        u &&
          (this.currentQuery !== s ||
            this.options.enabled !== l.enabled ||
            a !== this.currentRefetchInterval) &&
          this.updateRefetchInterval(a);
      }),
      (n.getOptimisticResult = function (i) {
        var o = this.client.defaultQueryObserverOptions(i),
          l = this.client.getQueryCache().build(this.client, o);
        return this.createResult(l, o);
      }),
      (n.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n.trackResult = function (i, o) {
        var l = this,
          s = {},
          u = function (c) {
            l.trackedProps.includes(c) || l.trackedProps.push(c);
          };
        return (
          Object.keys(i).forEach(function (a) {
            Object.defineProperty(s, a, {
              configurable: !1,
              enumerable: !0,
              get: function () {
                return u(a), i[a];
              },
            });
          }),
          (o.useErrorBoundary || o.suspense) && u("error"),
          s
        );
      }),
      (n.getNextResult = function (i) {
        var o = this;
        return new Promise(function (l, s) {
          var u = o.subscribe(function (a) {
            a.isFetching ||
              (u(),
              a.isError && i != null && i.throwOnError ? s(a.error) : l(a));
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
          H({}, i, {
            meta: { refetchPage: i == null ? void 0 : i.refetchPage },
          })
        );
      }),
      (n.fetchOptimistic = function (i) {
        var o = this,
          l = this.client.defaultQueryObserverOptions(i),
          s = this.client.getQueryCache().build(this.client, l);
        return s.fetch().then(function () {
          return o.createResult(s, l);
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
        return (i != null && i.throwOnError) || (o = o.catch(Ee)), o;
      }),
      (n.updateStaleTimeout = function () {
        var i = this;
        if (
          (this.clearStaleTimeout(),
          !(go || this.currentResult.isStale || !$s(this.options.staleTime)))
        ) {
          var o = jp(this.currentResult.dataUpdatedAt, this.options.staleTime),
            l = o + 1;
          this.staleTimeoutId = setTimeout(function () {
            i.currentResult.isStale || i.updateResult();
          }, l);
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
            go ||
            this.options.enabled === !1 ||
            !$s(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) &&
            (this.refetchIntervalId = setInterval(function () {
              (o.options.refetchIntervalInBackground || xr.isFocused()) &&
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
        var l = this.currentQuery,
          s = this.options,
          u = this.currentResult,
          a = this.currentResultState,
          c = this.currentResultOptions,
          h = i !== l,
          p = h ? i.state : this.currentQueryInitialState,
          y = h ? this.currentResult : this.previousQueryResult,
          m = i.state,
          g = m.dataUpdatedAt,
          k = m.error,
          v = m.errorUpdatedAt,
          f = m.isFetching,
          d = m.status,
          w = !1,
          O = !1,
          S;
        if (o.optimisticResults) {
          var E = this.hasListeners(),
            _ = !E && Dc(i, o),
            F = E && Fc(i, l, o, s);
          (_ || F) && ((f = !0), g || (d = "loading"));
        }
        if (
          o.keepPreviousData &&
          !m.dataUpdateCount &&
          y != null &&
          y.isSuccess &&
          d !== "error"
        )
          (S = y.data), (g = y.dataUpdatedAt), (d = y.status), (w = !0);
        else if (o.select && typeof m.data < "u")
          if (
            u &&
            m.data === (a == null ? void 0 : a.data) &&
            o.select === this.selectFn
          )
            S = this.selectResult;
          else
            try {
              (this.selectFn = o.select),
                (S = o.select(m.data)),
                o.structuralSharing !== !1 &&
                  (S = Eo(u == null ? void 0 : u.data, S)),
                (this.selectResult = S),
                (this.selectError = null);
            } catch (ie) {
              Co().error(ie), (this.selectError = ie);
            }
        else S = m.data;
        if (
          typeof o.placeholderData < "u" &&
          typeof S > "u" &&
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
                  (P = Eo(u == null ? void 0 : u.data, P)),
                (this.selectError = null);
            } catch (ie) {
              Co().error(ie), (this.selectError = ie);
            }
          typeof P < "u" && ((d = "success"), (S = P), (O = !0));
        }
        this.selectError &&
          ((k = this.selectError),
          (S = this.selectResult),
          (v = Date.now()),
          (d = "error"));
        var V = {
          status: d,
          isLoading: d === "loading",
          isSuccess: d === "success",
          isError: d === "error",
          isIdle: d === "idle",
          data: S,
          dataUpdatedAt: g,
          error: k,
          errorUpdatedAt: v,
          failureCount: m.fetchFailureCount,
          errorUpdateCount: m.errorUpdateCount,
          isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
          isFetchedAfterMount:
            m.dataUpdateCount > p.dataUpdateCount ||
            m.errorUpdateCount > p.errorUpdateCount,
          isFetching: f,
          isRefetching: f && d !== "loading",
          isLoadingError: d === "error" && m.dataUpdatedAt === 0,
          isPlaceholderData: O,
          isPreviousData: w,
          isRefetchError: d === "error" && m.dataUpdatedAt !== 0,
          isStale: Ku(i, o),
          refetch: this.refetch,
          remove: this.remove,
        };
        return V;
      }),
      (n.shouldNotifyListeners = function (i, o) {
        if (!o) return !0;
        var l = this.options,
          s = l.notifyOnChangeProps,
          u = l.notifyOnChangePropsExclusions;
        if ((!s && !u) || (s === "tracked" && !this.trackedProps.length))
          return !0;
        var a = s === "tracked" ? this.trackedProps : s;
        return Object.keys(i).some(function (c) {
          var h = c,
            p = i[h] !== o[h],
            y =
              a == null
                ? void 0
                : a.some(function (g) {
                    return g === c;
                  }),
            m =
              u == null
                ? void 0
                : u.some(function (g) {
                    return g === c;
                  });
          return p && !m && (!a || y);
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
          !Ag(this.currentResult, o))
        ) {
          var l = { cache: !0 };
          (i == null ? void 0 : i.listeners) !== !1 &&
            this.shouldNotifyListeners(this.currentResult, o) &&
            (l.listeners = !0),
            this.notify(H({}, l, i));
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
          : i.type === "error" && !Bi(i.error) && (o.onError = !0),
          this.updateResult(o),
          this.hasListeners() && this.updateTimers();
      }),
      (n.notify = function (i) {
        var o = this;
        ne.batch(function () {
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
              o.listeners.forEach(function (l) {
                l(o.currentResult);
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
  })(Zr);
function e0(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Dc(e, t) {
  return e0(e, t) || (e.state.dataUpdatedAt > 0 && Hs(e, t, t.refetchOnMount));
}
function Hs(e, t, n) {
  if (t.enabled !== !1) {
    var r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && Ku(e, t));
  }
  return !1;
}
function Fc(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    Ku(e, n)
  );
}
function Ku(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var t0 = $v.unstable_batchedUpdates;
ne.setBatchNotifyFunction(t0);
var n0 = console;
Hg(n0);
var Mc = W.createContext(void 0),
  Up = W.createContext(!1);
function $p(e) {
  return e && typeof window < "u"
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Mc),
      window.ReactQueryClientContext)
    : Mc;
}
var r0 = function () {
    var t = W.useContext($p(W.useContext(Up)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  i0 = function (t) {
    var n = t.client,
      r = t.contextSharing,
      i = r === void 0 ? !1 : r,
      o = t.children;
    W.useEffect(
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
    var l = $p(i);
    return W.createElement(
      Up.Provider,
      { value: i },
      W.createElement(l.Provider, { value: n }, o)
    );
  };
function o0() {
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
var l0 = W.createContext(o0()),
  s0 = function () {
    return W.useContext(l0);
  };
function u0(e, t, n) {
  return typeof t == "function"
    ? t.apply(void 0, n)
    : typeof t == "boolean"
    ? t
    : !!e;
}
function a0(e, t) {
  var n = W.useRef(!1),
    r = W.useState(0),
    i = r[1],
    o = r0(),
    l = s0(),
    s = o.defaultQueryObserverOptions(e);
  (s.optimisticResults = !0),
    s.onError && (s.onError = ne.batchCalls(s.onError)),
    s.onSuccess && (s.onSuccess = ne.batchCalls(s.onSuccess)),
    s.onSettled && (s.onSettled = ne.batchCalls(s.onSettled)),
    s.suspense &&
      (typeof s.staleTime != "number" && (s.staleTime = 1e3),
      s.cacheTime === 0 && (s.cacheTime = 1)),
    (s.suspense || s.useErrorBoundary) &&
      (l.isReset() || (s.retryOnMount = !1));
  var u = W.useState(function () {
      return new t(o, s);
    }),
    a = u[0],
    c = a.getOptimisticResult(s);
  if (
    (W.useEffect(
      function () {
        (n.current = !0), l.clearReset();
        var h = a.subscribe(
          ne.batchCalls(function () {
            n.current &&
              i(function (p) {
                return p + 1;
              });
          })
        );
        return (
          a.updateResult(),
          function () {
            (n.current = !1), h();
          }
        );
      },
      [l, a]
    ),
    W.useEffect(
      function () {
        a.setOptions(s, { listeners: !1 });
      },
      [s, a]
    ),
    s.suspense && c.isLoading)
  )
    throw a
      .fetchOptimistic(s)
      .then(function (h) {
        var p = h.data;
        s.onSuccess == null || s.onSuccess(p),
          s.onSettled == null || s.onSettled(p, null);
      })
      .catch(function (h) {
        l.clearReset(),
          s.onError == null || s.onError(h),
          s.onSettled == null || s.onSettled(void 0, h);
      });
  if (
    c.isError &&
    !l.isReset() &&
    !c.isFetching &&
    u0(s.suspense, s.useErrorBoundary, [c.error, a.getCurrentQuery()])
  )
    throw c.error;
  return s.notifyOnChangeProps === "tracked" && (c = a.trackResult(c, s)), c;
}
function c0(e, t, n) {
  var r = Ui(e, t, n);
  return a0(r, Zg);
}
const Ei = document.location.origin.includes("localhost")
  ? "http://localhost:3000"
  : document.location.origin;
function f0({ setNavFiles: e, structure: t, setStructure: n }) {
  const [r, i] = D.useState(null),
    [o, l] = D.useState(null),
    [s, u] = D.useState(null);
  function a(p, y) {
    if (!y.dir) return !0;
    let m = p.parent;
    for (; m; ) {
      if (m.id === y.id) return !1;
      m = m.parent;
    }
    return !0;
  }
  class c {
    static getFileCreation() {
      return o || {};
    }
    static newFileCreation(y, m) {
      l({ file: y, isDir: m });
    }
    static async handleFileCreation(y) {
      const { file: m, isDir: g } = o;
      if (m && y !== "" && m.childs.filter((k) => k.name === y).length === 0)
        try {
          const k = await q.post(`${Ei}/api/create`, {
            path: m.path,
            fileName: y,
            isDir: g,
            match: !0,
          });
          k.data.succeed
            ? m.childs.push({
                id: Date.now(),
                name: y,
                path: m.path + "/" + y,
                dir: g,
                parent: m,
                childs: [],
                match: !0,
              })
            : alert(k.data.output);
        } catch (k) {
          console.error(k);
        }
      n(t), l(null);
    }
    static getFileInEdit() {
      return r;
    }
    static async handleFileEdit(y) {
      if (
        r &&
        y !== "" &&
        r.name !== y &&
        r.parent &&
        r.parent.childs.filter((m) => m.name === y && m.id !== r.id).length ===
          0
      ) {
        try {
          const m = await q.put(`${Ei}/api/rename`, {
            oldPath: r.path,
            newName: y,
          });
          m.data.succeed
            ? ((r.name = y), (r.path = r.parent.path + "/" + y), c.fixChilds(r))
            : alert(m.data.output);
        } catch (m) {
          console.error(m);
        }
        e(null, null, !0);
      }
      i(null);
    }
    static handleDoubleClick(y) {
      i(y);
    }
    static handleDragStart(y) {
      u(y);
    }
    static fixChilds(y) {
      const m = y.path;
      y.childs = y.childs.map(
        (g) => ((g.path = m + "/" + g.name), g.dir && c.fixChilds(g), g)
      );
    }
    static async handleDrop(y) {
      if (s && y !== s.parent && y.dir && a(y, s)) {
        try {
          const m = await q.put(`${Ei}/api/move`, {
            oldPath: s.path,
            newPath: y.path,
          });
          m.data.succeed
            ? ((s.parent.childs = s.parent.childs.filter((g) => g.id !== s.id)),
              (s.parent = y),
              (s.path = y.path + "/" + s.name),
              c.fixChilds(s),
              y.childs.push(s),
              n(t))
            : alert(m.data.output);
        } catch (m) {
          console.error(m);
        }
        u(null);
      }
    }
    static handleDragOver(y) {
      y.preventDefault();
    }
  }
  const h = async (p) => {
    const y = (m) => {
      m.dir &&
        ((m.childs = m.childs.filter((g) => g.id !== p.id)),
        m.childs.forEach(y));
    };
    try {
      const m = await q.delete(`${Ei}/api/delete`, {
        data: { path: p.path },
        headers: { "Content-Type": "application/json" },
      });
      if (m.data.succeed) {
        const g = { ...t };
        y(g), n(g), e(p);
      } else alert(m.data.output);
    } catch (m) {
      console.error(m), console.error(m.response.data);
    }
  };
  return T.jsx("div", {
    className: "pt-4",
    children: T.jsx(cp, { folder: t, setNavFiles: e, onDelete: h, DND: c }),
  });
}
var Xu = { exports: {} },
  ei = {},
  Xo = { exports: {} },
  Bp = {},
  Hp = { exports: {} },
  d0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  p0 = d0,
  h0 = p0;
function Qp() {}
function Vp() {}
Vp.resetWarningCache = Qp;
var m0 = function () {
  function e(r, i, o, l, s, u) {
    if (u !== h0) {
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
    checkPropTypes: Vp,
    resetWarningCache: Qp,
  };
  return (n.PropTypes = n), n;
};
Hp.exports = m0();
var Yo = Hp.exports;
function Wp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Wp(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function jc() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Wp(e)) && (r && (r += " "), (r += t));
  return r;
}
const v0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, clsx: jc, default: jc },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  y0 = mh(v0);
var re = {},
  mt = {};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.dontSetMe = O0;
mt.findInArray = g0;
mt.int = E0;
mt.isFunction = w0;
mt.isNum = S0;
function g0(e, t) {
  for (let n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e])) return e[n];
}
function w0(e) {
  return (
    typeof e == "function" ||
    Object.prototype.toString.call(e) === "[object Function]"
  );
}
function S0(e) {
  return typeof e == "number" && !isNaN(e);
}
function E0(e) {
  return parseInt(e, 10);
}
function O0(e, t, n) {
  if (e[t])
    return new Error(
      "Invalid prop "
        .concat(t, " passed to ")
        .concat(n, " - do not set this, set it on the child.")
    );
}
var gn = {};
Object.defineProperty(gn, "__esModule", { value: !0 });
gn.browserPrefixToKey = Kp;
gn.browserPrefixToStyle = C0;
gn.default = void 0;
gn.getPrefix = qp;
const Fl = ["Moz", "Webkit", "O", "ms"];
function qp() {
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
  for (let r = 0; r < Fl.length; r++) if (Kp(t, Fl[r]) in n) return Fl[r];
  return "";
}
function Kp(e, t) {
  return t ? "".concat(t).concat(x0(e)) : e;
}
function C0(e, t) {
  return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
}
function x0(e) {
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
gn.default = qp();
Object.defineProperty(re, "__esModule", { value: !0 });
re.addClassName = Gp;
re.addEvent = _0;
re.addUserSelectStyles = I0;
re.createCSSTransform = j0;
re.createSVGTransform = L0;
re.getTouch = z0;
re.getTouchIdentifier = A0;
re.getTranslation = Yu;
re.innerHeight = D0;
re.innerWidth = F0;
re.matchesSelector = Yp;
re.matchesSelectorAndParentsTo = R0;
re.offsetXYFromParent = M0;
re.outerHeight = T0;
re.outerWidth = N0;
re.removeClassName = Jp;
re.removeEvent = k0;
re.removeUserSelectStyles = b0;
var Be = mt,
  Lc = P0(gn);
function Xp(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Xp = function (r) {
    return r ? n : t;
  })(e);
}
function P0(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Xp(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, o, l) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
let Oi = "";
function Yp(e, t) {
  return (
    Oi ||
      (Oi = (0, Be.findInArray)(
        [
          "matches",
          "webkitMatchesSelector",
          "mozMatchesSelector",
          "msMatchesSelector",
          "oMatchesSelector",
        ],
        function (n) {
          return (0, Be.isFunction)(e[n]);
        }
      )),
    (0, Be.isFunction)(e[Oi]) ? e[Oi](t) : !1
  );
}
function R0(e, t, n) {
  let r = e;
  do {
    if (Yp(r, t)) return !0;
    if (r === n) return !1;
    r = r.parentNode;
  } while (r);
  return !1;
}
function _0(e, t, n, r) {
  if (!e) return;
  const i = { capture: !0, ...r };
  e.addEventListener
    ? e.addEventListener(t, n, i)
    : e.attachEvent
    ? e.attachEvent("on" + t, n)
    : (e["on" + t] = n);
}
function k0(e, t, n, r) {
  if (!e) return;
  const i = { capture: !0, ...r };
  e.removeEventListener
    ? e.removeEventListener(t, n, i)
    : e.detachEvent
    ? e.detachEvent("on" + t, n)
    : (e["on" + t] = null);
}
function T0(e) {
  let t = e.clientHeight;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t += (0, Be.int)(n.borderTopWidth)),
    (t += (0, Be.int)(n.borderBottomWidth)),
    t
  );
}
function N0(e) {
  let t = e.clientWidth;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t += (0, Be.int)(n.borderLeftWidth)),
    (t += (0, Be.int)(n.borderRightWidth)),
    t
  );
}
function D0(e) {
  let t = e.clientHeight;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t -= (0, Be.int)(n.paddingTop)), (t -= (0, Be.int)(n.paddingBottom)), t
  );
}
function F0(e) {
  let t = e.clientWidth;
  const n = e.ownerDocument.defaultView.getComputedStyle(e);
  return (
    (t -= (0, Be.int)(n.paddingLeft)), (t -= (0, Be.int)(n.paddingRight)), t
  );
}
function M0(e, t, n) {
  const i =
      t === t.ownerDocument.body
        ? { left: 0, top: 0 }
        : t.getBoundingClientRect(),
    o = (e.clientX + t.scrollLeft - i.left) / n,
    l = (e.clientY + t.scrollTop - i.top) / n;
  return { x: o, y: l };
}
function j0(e, t) {
  const n = Yu(e, t, "px");
  return { [(0, Lc.browserPrefixToKey)("transform", Lc.default)]: n };
}
function L0(e, t) {
  return Yu(e, t, "");
}
function Yu(e, t, n) {
  let { x: r, y: i } = e,
    o = "translate(".concat(r).concat(n, ",").concat(i).concat(n, ")");
  if (t) {
    const l = "".concat(typeof t.x == "string" ? t.x : t.x + n),
      s = "".concat(typeof t.y == "string" ? t.y : t.y + n);
    o = "translate(".concat(l, ", ").concat(s, ")") + o;
  }
  return o;
}
function z0(e, t) {
  return (
    (e.targetTouches &&
      (0, Be.findInArray)(e.targetTouches, (n) => t === n.identifier)) ||
    (e.changedTouches &&
      (0, Be.findInArray)(e.changedTouches, (n) => t === n.identifier))
  );
}
function A0(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function I0(e) {
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
    e.body && Gp(e.body, "react-draggable-transparent-selection");
}
function b0(e) {
  if (e)
    try {
      if (
        (e.body && Jp(e.body, "react-draggable-transparent-selection"),
        e.selection)
      )
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {}
}
function Gp(e, t) {
  e.classList
    ? e.classList.add(t)
    : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) ||
      (e.className += " ".concat(t));
}
function Jp(e, t) {
  e.classList
    ? e.classList.remove(t)
    : (e.className = e.className.replace(
        new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"),
        ""
      ));
}
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.canDragX = B0;
vt.canDragY = H0;
vt.createCoreData = V0;
vt.createDraggableData = W0;
vt.getBoundPosition = U0;
vt.getControlPosition = Q0;
vt.snapToGrid = $0;
var Ae = mt,
  Fn = re;
function U0(e, t, n) {
  if (!e.props.bounds) return [t, n];
  let { bounds: r } = e.props;
  r = typeof r == "string" ? r : q0(r);
  const i = Gu(e);
  if (typeof r == "string") {
    const { ownerDocument: o } = i,
      l = o.defaultView;
    let s;
    if (
      (r === "parent" ? (s = i.parentNode) : (s = o.querySelector(r)),
      !(s instanceof l.HTMLElement))
    )
      throw new Error('Bounds selector "' + r + '" could not find an element.');
    const u = s,
      a = l.getComputedStyle(i),
      c = l.getComputedStyle(u);
    r = {
      left:
        -i.offsetLeft + (0, Ae.int)(c.paddingLeft) + (0, Ae.int)(a.marginLeft),
      top: -i.offsetTop + (0, Ae.int)(c.paddingTop) + (0, Ae.int)(a.marginTop),
      right:
        (0, Fn.innerWidth)(u) -
        (0, Fn.outerWidth)(i) -
        i.offsetLeft +
        (0, Ae.int)(c.paddingRight) -
        (0, Ae.int)(a.marginRight),
      bottom:
        (0, Fn.innerHeight)(u) -
        (0, Fn.outerHeight)(i) -
        i.offsetTop +
        (0, Ae.int)(c.paddingBottom) -
        (0, Ae.int)(a.marginBottom),
    };
  }
  return (
    (0, Ae.isNum)(r.right) && (t = Math.min(t, r.right)),
    (0, Ae.isNum)(r.bottom) && (n = Math.min(n, r.bottom)),
    (0, Ae.isNum)(r.left) && (t = Math.max(t, r.left)),
    (0, Ae.isNum)(r.top) && (n = Math.max(n, r.top)),
    [t, n]
  );
}
function $0(e, t, n) {
  const r = Math.round(t / e[0]) * e[0],
    i = Math.round(n / e[1]) * e[1];
  return [r, i];
}
function B0(e) {
  return e.props.axis === "both" || e.props.axis === "x";
}
function H0(e) {
  return e.props.axis === "both" || e.props.axis === "y";
}
function Q0(e, t, n) {
  const r = typeof t == "number" ? (0, Fn.getTouch)(e, t) : null;
  if (typeof t == "number" && !r) return null;
  const i = Gu(n),
    o = n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
  return (0, Fn.offsetXYFromParent)(r || e, o, n.props.scale);
}
function V0(e, t, n) {
  const r = !(0, Ae.isNum)(e.lastX),
    i = Gu(e);
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
function W0(e, t) {
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
function q0(e) {
  return { left: e.left, top: e.top, right: e.right, bottom: e.bottom };
}
function Gu(e) {
  const t = e.findDOMNode();
  if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
  return t;
}
var Go = {},
  Jo = {};
Object.defineProperty(Jo, "__esModule", { value: !0 });
Jo.default = K0;
function K0() {}
Object.defineProperty(Go, "__esModule", { value: !0 });
Go.default = void 0;
var Ml = Y0(D),
  Te = Ju(Yo),
  X0 = Ju(Bo),
  Se = re,
  Nt = vt,
  jl = mt,
  sr = Ju(Jo);
function Ju(e) {
  return e && e.__esModule ? e : { default: e };
}
function Zp(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Zp = function (r) {
    return r ? n : t;
  })(e);
}
function Y0(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = Zp(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, o, l) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function xe(e, t, n) {
  return (
    (t = G0(t)),
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
function G0(e) {
  var t = J0(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function J0(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
const et = {
  touch: { start: "touchstart", move: "touchmove", stop: "touchend" },
  mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" },
};
let Dt = et.mouse,
  Zo = class extends Ml.Component {
    constructor() {
      super(...arguments),
        xe(this, "dragging", !1),
        xe(this, "lastX", NaN),
        xe(this, "lastY", NaN),
        xe(this, "touchIdentifier", null),
        xe(this, "mounted", !1),
        xe(this, "handleDragStart", (t) => {
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
              !(0, Se.matchesSelectorAndParentsTo)(
                t.target,
                this.props.handle,
                n
              )) ||
            (this.props.cancel &&
              (0, Se.matchesSelectorAndParentsTo)(
                t.target,
                this.props.cancel,
                n
              ))
          )
            return;
          t.type === "touchstart" && t.preventDefault();
          const i = (0, Se.getTouchIdentifier)(t);
          this.touchIdentifier = i;
          const o = (0, Nt.getControlPosition)(t, i, this);
          if (o == null) return;
          const { x: l, y: s } = o,
            u = (0, Nt.createCoreData)(this, l, s);
          (0, sr.default)("DraggableCore: handleDragStart: %j", u),
            (0, sr.default)("calling", this.props.onStart),
            !(this.props.onStart(t, u) === !1 || this.mounted === !1) &&
              (this.props.enableUserSelectHack &&
                (0, Se.addUserSelectStyles)(r),
              (this.dragging = !0),
              (this.lastX = l),
              (this.lastY = s),
              (0, Se.addEvent)(r, Dt.move, this.handleDrag),
              (0, Se.addEvent)(r, Dt.stop, this.handleDragStop));
        }),
        xe(this, "handleDrag", (t) => {
          const n = (0, Nt.getControlPosition)(t, this.touchIdentifier, this);
          if (n == null) return;
          let { x: r, y: i } = n;
          if (Array.isArray(this.props.grid)) {
            let s = r - this.lastX,
              u = i - this.lastY;
            if (
              (([s, u] = (0, Nt.snapToGrid)(this.props.grid, s, u)), !s && !u)
            )
              return;
            (r = this.lastX + s), (i = this.lastY + u);
          }
          const o = (0, Nt.createCoreData)(this, r, i);
          if (
            ((0, sr.default)("DraggableCore: handleDrag: %j", o),
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
        xe(this, "handleDragStop", (t) => {
          if (!this.dragging) return;
          const n = (0, Nt.getControlPosition)(t, this.touchIdentifier, this);
          if (n == null) return;
          let { x: r, y: i } = n;
          if (Array.isArray(this.props.grid)) {
            let u = r - this.lastX || 0,
              a = i - this.lastY || 0;
            ([u, a] = (0, Nt.snapToGrid)(this.props.grid, u, a)),
              (r = this.lastX + u),
              (i = this.lastY + a);
          }
          const o = (0, Nt.createCoreData)(this, r, i);
          if (this.props.onStop(t, o) === !1 || this.mounted === !1) return !1;
          const s = this.findDOMNode();
          s &&
            this.props.enableUserSelectHack &&
            (0, Se.removeUserSelectStyles)(s.ownerDocument),
            (0, sr.default)("DraggableCore: handleDragStop: %j", o),
            (this.dragging = !1),
            (this.lastX = NaN),
            (this.lastY = NaN),
            s &&
              ((0, sr.default)("DraggableCore: Removing handlers"),
              (0, Se.removeEvent)(s.ownerDocument, Dt.move, this.handleDrag),
              (0, Se.removeEvent)(
                s.ownerDocument,
                Dt.stop,
                this.handleDragStop
              ));
        }),
        xe(
          this,
          "onMouseDown",
          (t) => ((Dt = et.mouse), this.handleDragStart(t))
        ),
        xe(this, "onMouseUp", (t) => ((Dt = et.mouse), this.handleDragStop(t))),
        xe(
          this,
          "onTouchStart",
          (t) => ((Dt = et.touch), this.handleDragStart(t))
        ),
        xe(
          this,
          "onTouchEnd",
          (t) => ((Dt = et.touch), this.handleDragStop(t))
        );
    }
    componentDidMount() {
      this.mounted = !0;
      const t = this.findDOMNode();
      t &&
        (0, Se.addEvent)(t, et.touch.start, this.onTouchStart, { passive: !1 });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const t = this.findDOMNode();
      if (t) {
        const { ownerDocument: n } = t;
        (0, Se.removeEvent)(n, et.mouse.move, this.handleDrag),
          (0, Se.removeEvent)(n, et.touch.move, this.handleDrag),
          (0, Se.removeEvent)(n, et.mouse.stop, this.handleDragStop),
          (0, Se.removeEvent)(n, et.touch.stop, this.handleDragStop),
          (0, Se.removeEvent)(t, et.touch.start, this.onTouchStart, {
            passive: !1,
          }),
          this.props.enableUserSelectHack && (0, Se.removeUserSelectStyles)(n);
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
        : X0.default.findDOMNode(this);
    }
    render() {
      return Ml.cloneElement(Ml.Children.only(this.props.children), {
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd,
      });
    }
  };
Go.default = Zo;
xe(Zo, "displayName", "DraggableCore");
xe(Zo, "propTypes", {
  allowAnyClick: Te.default.bool,
  children: Te.default.node.isRequired,
  disabled: Te.default.bool,
  enableUserSelectHack: Te.default.bool,
  offsetParent: function (e, t) {
    if (e[t] && e[t].nodeType !== 1)
      throw new Error("Draggable's offsetParent must be a DOM Node.");
  },
  grid: Te.default.arrayOf(Te.default.number),
  handle: Te.default.string,
  cancel: Te.default.string,
  nodeRef: Te.default.object,
  onStart: Te.default.func,
  onDrag: Te.default.func,
  onStop: Te.default.func,
  onMouseDown: Te.default.func,
  scale: Te.default.number,
  className: jl.dontSetMe,
  style: jl.dontSetMe,
  transform: jl.dontSetMe,
});
xe(Zo, "defaultProps", {
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
  var t = p(D),
    n = c(Yo),
    r = c(Bo),
    i = c(y0),
    o = re,
    l = vt,
    s = mt,
    u = c(Go),
    a = c(Jo);
  function c(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function h(f) {
    if (typeof WeakMap != "function") return null;
    var d = new WeakMap(),
      w = new WeakMap();
    return (h = function (O) {
      return O ? w : d;
    })(f);
  }
  function p(f, d) {
    if (f && f.__esModule) return f;
    if (f === null || (typeof f != "object" && typeof f != "function"))
      return { default: f };
    var w = h(d);
    if (w && w.has(f)) return w.get(f);
    var O = {},
      S = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var E in f)
      if (E !== "default" && Object.prototype.hasOwnProperty.call(f, E)) {
        var _ = S ? Object.getOwnPropertyDescriptor(f, E) : null;
        _ && (_.get || _.set) ? Object.defineProperty(O, E, _) : (O[E] = f[E]);
      }
    return (O.default = f), w && w.set(f, O), O;
  }
  function y() {
    return (
      (y = Object.assign
        ? Object.assign.bind()
        : function (f) {
            for (var d = 1; d < arguments.length; d++) {
              var w = arguments[d];
              for (var O in w)
                Object.prototype.hasOwnProperty.call(w, O) && (f[O] = w[O]);
            }
            return f;
          }),
      y.apply(this, arguments)
    );
  }
  function m(f, d, w) {
    return (
      (d = g(d)),
      d in f
        ? Object.defineProperty(f, d, {
            value: w,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (f[d] = w),
      f
    );
  }
  function g(f) {
    var d = k(f, "string");
    return typeof d == "symbol" ? d : String(d);
  }
  function k(f, d) {
    if (typeof f != "object" || f === null) return f;
    var w = f[Symbol.toPrimitive];
    if (w !== void 0) {
      var O = w.call(f, d || "default");
      if (typeof O != "object") return O;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (d === "string" ? String : Number)(f);
  }
  class v extends t.Component {
    static getDerivedStateFromProps(d, w) {
      let { position: O } = d,
        { prevPropsPosition: S } = w;
      return O && (!S || O.x !== S.x || O.y !== S.y)
        ? ((0, a.default)("Draggable: getDerivedStateFromProps %j", {
            position: O,
            prevPropsPosition: S,
          }),
          { x: O.x, y: O.y, prevPropsPosition: { ...O } })
        : null;
    }
    constructor(d) {
      super(d),
        m(this, "onDragStart", (w, O) => {
          if (
            ((0, a.default)("Draggable: onDragStart: %j", O),
            this.props.onStart(w, (0, l.createDraggableData)(this, O)) === !1)
          )
            return !1;
          this.setState({ dragging: !0, dragged: !0 });
        }),
        m(this, "onDrag", (w, O) => {
          if (!this.state.dragging) return !1;
          (0, a.default)("Draggable: onDrag: %j", O);
          const S = (0, l.createDraggableData)(this, O),
            E = { x: S.x, y: S.y, slackX: 0, slackY: 0 };
          if (this.props.bounds) {
            const { x: F, y: P } = E;
            (E.x += this.state.slackX), (E.y += this.state.slackY);
            const [V, ie] = (0, l.getBoundPosition)(this, E.x, E.y);
            (E.x = V),
              (E.y = ie),
              (E.slackX = this.state.slackX + (F - E.x)),
              (E.slackY = this.state.slackY + (P - E.y)),
              (S.x = E.x),
              (S.y = E.y),
              (S.deltaX = E.x - this.state.x),
              (S.deltaY = E.y - this.state.y);
          }
          if (this.props.onDrag(w, S) === !1) return !1;
          this.setState(E);
        }),
        m(this, "onDragStop", (w, O) => {
          if (
            !this.state.dragging ||
            this.props.onStop(w, (0, l.createDraggableData)(this, O)) === !1
          )
            return !1;
          (0, a.default)("Draggable: onDragStop: %j", O);
          const E = { dragging: !1, slackX: 0, slackY: 0 };
          if (!!this.props.position) {
            const { x: F, y: P } = this.props.position;
            (E.x = F), (E.y = P);
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
      var d, w;
      return (d =
        (w = this.props) === null ||
        w === void 0 ||
        (w = w.nodeRef) === null ||
        w === void 0
          ? void 0
          : w.current) !== null && d !== void 0
        ? d
        : r.default.findDOMNode(this);
    }
    render() {
      const {
        axis: d,
        bounds: w,
        children: O,
        defaultPosition: S,
        defaultClassName: E,
        defaultClassNameDragging: _,
        defaultClassNameDragged: F,
        position: P,
        positionOffset: V,
        scale: ie,
        ...se
      } = this.props;
      let ue = {},
        L = null;
      const oe = !!!P || this.state.dragging,
        R = P || S,
        M = {
          x: (0, l.canDragX)(this) && oe ? this.state.x : R.x,
          y: (0, l.canDragY)(this) && oe ? this.state.y : R.y,
        };
      this.state.isElementSVG
        ? (L = (0, o.createSVGTransform)(M, V))
        : (ue = (0, o.createCSSTransform)(M, V));
      const z = (0, i.default)(O.props.className || "", E, {
        [_]: this.state.dragging,
        [F]: this.state.dragged,
      });
      return t.createElement(
        u.default,
        y({}, se, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop,
        }),
        t.cloneElement(t.Children.only(O), {
          className: z,
          style: { ...O.props.style, ...ue },
          transform: L,
        })
      );
    }
  }
  (e.default = v),
    m(v, "displayName", "Draggable"),
    m(v, "propTypes", {
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
      className: s.dontSetMe,
      style: s.dontSetMe,
      transform: s.dontSetMe,
    }),
    m(v, "defaultProps", {
      ...u.default.defaultProps,
      axis: "both",
      bounds: !1,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: { x: 0, y: 0 },
      scale: 1,
    });
})(Bp);
const { default: eh, DraggableCore: Z0 } = Bp;
Xo.exports = eh;
Xo.exports.default = eh;
Xo.exports.DraggableCore = Z0;
var e1 = Xo.exports,
  Zu = {};
Zu.__esModule = !0;
Zu.cloneElement = l1;
var t1 = n1(D);
function n1(e) {
  return e && e.__esModule ? e : { default: e };
}
function zc(e, t) {
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
function Ac(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zc(Object(n), !0).forEach(function (r) {
          r1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : zc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function r1(e, t, n) {
  return (
    (t = i1(t)),
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
function i1(e) {
  var t = o1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function o1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function l1(e, t) {
  return (
    t.style && e.props.style && (t.style = Ac(Ac({}, e.props.style), t.style)),
    t.className &&
      e.props.className &&
      (t.className = e.props.className + " " + t.className),
    t1.default.cloneElement(e, t)
  );
}
var ti = {};
ti.__esModule = !0;
ti.resizableProps = void 0;
var b = s1(Yo);
function s1(e) {
  return e && e.__esModule ? e : { default: e };
}
var u1 = {
  axis: b.default.oneOf(["both", "x", "y", "none"]),
  className: b.default.string,
  children: b.default.element.isRequired,
  draggableOpts: b.default.shape({
    allowAnyClick: b.default.bool,
    cancel: b.default.string,
    children: b.default.node,
    disabled: b.default.bool,
    enableUserSelectHack: b.default.bool,
    offsetParent: b.default.node,
    grid: b.default.arrayOf(b.default.number),
    handle: b.default.string,
    nodeRef: b.default.object,
    onStart: b.default.func,
    onDrag: b.default.func,
    onStop: b.default.func,
    onMouseDown: b.default.func,
    scale: b.default.number,
  }),
  height: function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var i = n[0];
    if (i.axis === "both" || i.axis === "y") {
      var o;
      return (o = b.default.number).isRequired.apply(o, n);
    }
    return b.default.number.apply(b.default, n);
  },
  handle: b.default.oneOfType([b.default.node, b.default.func]),
  handleSize: b.default.arrayOf(b.default.number),
  lockAspectRatio: b.default.bool,
  maxConstraints: b.default.arrayOf(b.default.number),
  minConstraints: b.default.arrayOf(b.default.number),
  onResizeStop: b.default.func,
  onResizeStart: b.default.func,
  onResize: b.default.func,
  resizeHandles: b.default.arrayOf(
    b.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])
  ),
  transformScale: b.default.number,
  width: function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    var i = n[0];
    if (i.axis === "both" || i.axis === "x") {
      var o;
      return (o = b.default.number).isRequired.apply(o, n);
    }
    return b.default.number.apply(b.default, n);
  },
};
ti.resizableProps = u1;
ei.__esModule = !0;
ei.default = void 0;
var ur = p1(D),
  a1 = e1,
  c1 = Zu,
  f1 = ti,
  d1 = [
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
function th(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (th = function (i) {
    return i ? n : t;
  })(e);
}
function p1(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = th(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, o, l) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Qs() {
  return (
    (Qs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qs.apply(this, arguments)
  );
}
function h1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Ic(e, t) {
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
function Ll(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ic(Object(n), !0).forEach(function (r) {
          m1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ic(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function m1(e, t, n) {
  return (
    (t = v1(t)),
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
function v1(e) {
  var t = y1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function y1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function g1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Vs(e, t);
}
function Vs(e, t) {
  return (
    (Vs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Vs(e, t)
  );
}
var ea = (function (e) {
  g1(t, e);
  function t() {
    for (var r, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
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
      var l = this.props,
        s = l.minConstraints,
        u = l.maxConstraints,
        a = l.lockAspectRatio;
      if (!s && !u && !a) return [i, o];
      if (a) {
        var c = this.props.width / this.props.height,
          h = i - this.props.width,
          p = o - this.props.height;
        Math.abs(h) > Math.abs(p * c) ? (o = i / c) : (i = o * c);
      }
      var y = i,
        m = o,
        g = this.slack || [0, 0],
        k = g[0],
        v = g[1];
      return (
        (i += k),
        (o += v),
        s && ((i = Math.max(s[0], i)), (o = Math.max(s[1], o))),
        u && ((i = Math.min(u[0], i)), (o = Math.min(u[1], o))),
        (this.slack = [k + (y - i), v + (m - o)]),
        [i, o]
      );
    }),
    (n.resizeHandler = function (i, o) {
      var l = this;
      return function (s, u) {
        var a = u.node,
          c = u.deltaX,
          h = u.deltaY;
        i === "onResizeStart" && l.resetData();
        var p =
            (l.props.axis === "both" || l.props.axis === "x") &&
            o !== "n" &&
            o !== "s",
          y =
            (l.props.axis === "both" || l.props.axis === "y") &&
            o !== "e" &&
            o !== "w";
        if (!(!p && !y)) {
          var m = o[0],
            g = o[o.length - 1],
            k = a.getBoundingClientRect();
          if (l.lastHandleRect != null) {
            if (g === "w") {
              var v = k.left - l.lastHandleRect.left;
              c += v;
            }
            if (m === "n") {
              var f = k.top - l.lastHandleRect.top;
              h += f;
            }
          }
          (l.lastHandleRect = k), g === "w" && (c = -c), m === "n" && (h = -h);
          var d = l.props.width + (p ? c / l.props.transformScale : 0),
            w = l.props.height + (y ? h / l.props.transformScale : 0),
            O = l.runConstraints(d, w);
          (d = O[0]), (w = O[1]);
          var S = d !== l.props.width || w !== l.props.height,
            E = typeof l.props[i] == "function" ? l.props[i] : null,
            _ = i === "onResize" && !S;
          E &&
            !_ &&
            (s.persist == null || s.persist(),
            E(s, { node: a, size: { width: d, height: w }, handle: o })),
            i === "onResizeStop" && l.resetData();
        }
      };
    }),
    (n.renderResizeHandle = function (i, o) {
      var l = this.props.handle;
      if (!l)
        return ur.createElement("span", {
          className: "react-resizable-handle react-resizable-handle-" + i,
          ref: o,
        });
      if (typeof l == "function") return l(i, o);
      var s = typeof l.type == "string",
        u = Ll({ ref: o }, s ? {} : { handleAxis: i });
      return ur.cloneElement(l, u);
    }),
    (n.render = function () {
      var i = this,
        o = this.props,
        l = o.children,
        s = o.className,
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
      var c = h1(o, d1);
      return (0, c1.cloneElement)(
        l,
        Ll(
          Ll({}, c),
          {},
          {
            className: (s ? s + " " : "") + "react-resizable",
            children: [].concat(
              l.props.children,
              a.map(function (h) {
                var p,
                  y =
                    (p = i.handleRefs[h]) != null
                      ? p
                      : (i.handleRefs[h] = ur.createRef());
                return ur.createElement(
                  a1.DraggableCore,
                  Qs({}, u, {
                    nodeRef: y,
                    key: "resizableHandle-" + h,
                    onStop: i.resizeHandler("onResizeStop", h),
                    onStart: i.resizeHandler("onResizeStart", h),
                    onDrag: i.resizeHandler("onResize", h),
                  }),
                  i.renderResizeHandle(h, y)
                );
              })
            ),
          }
        )
      );
    }),
    t
  );
})(ur.Component);
ei.default = ea;
ea.propTypes = f1.resizableProps;
ea.defaultProps = {
  axis: "both",
  handleSize: [20, 20],
  lockAspectRatio: !1,
  minConstraints: [20, 20],
  maxConstraints: [1 / 0, 1 / 0],
  resizeHandles: ["se"],
  transformScale: 1,
};
var el = {};
el.__esModule = !0;
el.default = void 0;
var zl = C1(D),
  w1 = nh(Yo),
  S1 = nh(ei),
  E1 = ti,
  O1 = [
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
function nh(e) {
  return e && e.__esModule ? e : { default: e };
}
function rh(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (rh = function (i) {
    return i ? n : t;
  })(e);
}
function C1(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function"))
    return { default: e };
  var n = rh(t);
  if (n && n.has(e)) return n.get(e);
  var r = {},
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(r, o, l) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Ws() {
  return (
    (Ws = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ws.apply(this, arguments)
  );
}
function bc(e, t) {
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
function xo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bc(Object(n), !0).forEach(function (r) {
          x1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : bc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function x1(e, t, n) {
  return (
    (t = P1(t)),
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
function P1(e) {
  var t = R1(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function R1(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function k1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    qs(e, t);
}
function qs(e, t) {
  return (
    (qs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    qs(e, t)
  );
}
var ih = (function (e) {
  k1(t, e);
  function t() {
    for (var r, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return (
      (r = e.call.apply(e, [this].concat(o)) || this),
      (r.state = {
        width: r.props.width,
        height: r.props.height,
        propsWidth: r.props.width,
        propsHeight: r.props.height,
      }),
      (r.onResize = function (s, u) {
        var a = u.size;
        r.props.onResize
          ? (s.persist == null || s.persist(),
            r.setState(a, function () {
              return r.props.onResize && r.props.onResize(s, u);
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
        l = i.handleSize;
      i.onResize;
      var s = i.onResizeStart,
        u = i.onResizeStop,
        a = i.draggableOpts,
        c = i.minConstraints,
        h = i.maxConstraints,
        p = i.lockAspectRatio,
        y = i.axis;
      i.width, i.height;
      var m = i.resizeHandles,
        g = i.style,
        k = i.transformScale,
        v = _1(i, O1);
      return zl.createElement(
        S1.default,
        {
          axis: y,
          draggableOpts: a,
          handle: o,
          handleSize: l,
          height: this.state.height,
          lockAspectRatio: p,
          maxConstraints: h,
          minConstraints: c,
          onResizeStart: s,
          onResize: this.onResize,
          onResizeStop: u,
          resizeHandles: m,
          transformScale: k,
          width: this.state.width,
        },
        zl.createElement(
          "div",
          Ws({}, v, {
            style: xo(
              xo({}, g),
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
})(zl.Component);
el.default = ih;
ih.propTypes = xo(
  xo({}, E1.resizableProps),
  {},
  { children: w1.default.element }
);
Xu.exports = function () {
  throw new Error(
    "Don't instantiate Resizable directly! Use require('react-resizable').Resizable"
  );
};
Xu.exports.Resizable = ei.default;
var ta = (Xu.exports.ResizableBox = el.default);
const T1 = { height: "calc(100% - 24px)" },
  N1 = { width: "22%", height: "100%" },
  D1 = { name: "NOT FOUND", childs: [], dir: !0, parent: null, path: "" },
  F1 = document.location.origin.includes("localhost")
    ? "http://localhost:3000"
    : document.location.origin,
  M1 = "/home";
function j1(e) {
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
function L1({ setNavFiles: e, structure: t, setStructure: n }) {
  c0("structure", () => {
    fetch(`${F1}/api/getTree`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: M1 }),
    })
      .then((i) => i.json())
      .then((i) => {
        const o = j1(i);
        n(o);
      })
      .catch((i) => {
        n(D1), console.error(i);
      });
  });
  const r = (i) => {
    const o = i.target.value,
      l = (u) => {
        (u.match = !0), u.dir && u.childs.map((a) => l(a));
      },
      s = (u, a) => {
        if (u.name.toLowerCase().includes(a.toLowerCase()))
          return (u.match = !0), !0;
        if (u.dir) {
          const c = u.childs.filter((h) => s(h, a));
          return (u.match = c.length > 0), u.match;
        }
        return (u.match = !1), !1;
      };
    l(t),
      o.trim() !== "" && t.childs.map((u) => (u.match = s(u, o))),
      n({ ...t });
  };
  return T.jsx("div", {
    style: N1,
    children: T.jsx(ta, {
      className: "resizable-box h-full",
      width: 1 / 0,
      minConstraints: [1 / 0, 1 / 0],
      maxConstraints: [1 / 0, 1 / 0],
      axis: "x",
      handle: T.jsx("span", { className: "custom-handle" }),
      resizeHandles: ["e"],
      children: T.jsxs("div", {
        className:
          "bg-main overflow-y-auto overflow-x-auto border-r-2 p-2 border-t-2 border-slate-700",
        style: T1,
        children: [
          T.jsx("input", {
            type: "search",
            placeholder: "Ex: app.js",
            className:
              "w-full bg-transparent p-1 text-white outline-none text-sm",
            onChange: r,
          }),
          T.jsx(f0, { setNavFiles: e, structure: t, setStructure: n }),
        ],
      }),
    }),
  });
}
function z1({ file: e, setNavFiles: t, activeFile: n }) {
  const r = `flex items-center justify-between text-gray-400 h-full p-3 w-auto gap-3 ${
    n ? "bg-zinc-800" : "bg-zinc-900"
  }`;
  return T.jsxs("li", {
    className: r,
    children: [
      T.jsxs("p", {
        className: "flex items-center cursor-pointer text-xs",
        onClick: () => t(e, !0),
        children: [
          T.jsx(up, { className: "text-yellow-300 mr-1" }),
          " ",
          e.name,
        ],
      }),
      T.jsx("p", {
        onClick: () => t(e),
        className: "cursor-pointer",
        children: "x",
      }),
    ],
  });
}
const A1 = { width: "100%" };
function I1({ navFiles: e, setNavFiles: t, activeFile: n }) {
  return T.jsx("div", {
    className: "w-full flex h-10 bg-second",
    children: T.jsx("ul", {
      className: "flex items-center overflow-x-auto overflow-y-hidden",
      style: A1,
      children: e.map((r) =>
        T.jsx(z1, { file: r, setNavFiles: t, activeFile: n === r }, r.id)
      ),
    }),
  });
}
function b1(e, t, n) {
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
function Uc(e, t) {
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
function $c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Uc(Object(n), !0).forEach(function (r) {
          b1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Uc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function U1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function $1(e, t) {
  if (e == null) return {};
  var n = U1(e, t),
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
function B1(e, t) {
  return H1(e) || Q1(e, t) || V1(e, t) || W1();
}
function H1(e) {
  if (Array.isArray(e)) return e;
}
function Q1(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var n = [],
      r = !0,
      i = !1,
      o = void 0;
    try {
      for (
        var l = e[Symbol.iterator](), s;
        !(r = (s = l.next()).done) && (n.push(s.value), !(t && n.length === t));
        r = !0
      );
    } catch (u) {
      (i = !0), (o = u);
    } finally {
      try {
        !r && l.return != null && l.return();
      } finally {
        if (i) throw o;
      }
    }
    return n;
  }
}
function V1(e, t) {
  if (e) {
    if (typeof e == "string") return Bc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Bc(e, t);
  }
}
function Bc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function W1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q1(e, t, n) {
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
function Hc(e, t) {
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
function Qc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hc(Object(n), !0).forEach(function (r) {
          q1(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Hc(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function K1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return function (r) {
    return t.reduceRight(function (i, o) {
      return o(i);
    }, r);
  };
}
function hr(e) {
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
          for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
            s[u] = arguments[u];
          return t.apply(n, [].concat(i, s));
        };
  };
}
function Po(e) {
  return {}.toString.call(e).includes("Object");
}
function X1(e) {
  return !Object.keys(e).length;
}
function Qr(e) {
  return typeof e == "function";
}
function Y1(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function G1(e, t) {
  return (
    Po(t) || qt("changeType"),
    Object.keys(t).some(function (n) {
      return !Y1(e, n);
    }) && qt("changeField"),
    t
  );
}
function J1(e) {
  Qr(e) || qt("selectorType");
}
function Z1(e) {
  Qr(e) || Po(e) || qt("handlerType"),
    Po(e) &&
      Object.values(e).some(function (t) {
        return !Qr(t);
      }) &&
      qt("handlersType");
}
function ew(e) {
  e || qt("initialIsRequired"),
    Po(e) || qt("initialType"),
    X1(e) && qt("initialContent");
}
function tw(e, t) {
  throw new Error(e[t] || e.default);
}
var nw = {
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
  qt = hr(tw)(nw),
  Ci = { changes: G1, selector: J1, handler: Z1, initial: ew };
function rw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  Ci.initial(e), Ci.handler(t);
  var n = { current: e },
    r = hr(lw)(n, t),
    i = hr(ow)(n),
    o = hr(Ci.changes)(e),
    l = hr(iw)(n);
  function s() {
    var a =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : function (c) {
            return c;
          };
    return Ci.selector(a), a(n.current);
  }
  function u(a) {
    K1(r, i, o, l)(a);
  }
  return [s, u];
}
function iw(e, t) {
  return Qr(t) ? t(e.current) : t;
}
function ow(e, t) {
  return (e.current = Qc(Qc({}, e.current), t)), t;
}
function lw(e, t, n) {
  return (
    Qr(t)
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
var sw = { create: rw },
  uw = {
    paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs" },
  };
function aw(e) {
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
          for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
            s[u] = arguments[u];
          return t.apply(n, [].concat(i, s));
        };
  };
}
function cw(e) {
  return {}.toString.call(e).includes("Object");
}
function fw(e) {
  return (
    e || Vc("configIsRequired"),
    cw(e) || Vc("configType"),
    e.urls ? (dw(), { paths: { vs: e.urls.monacoBase } }) : e
  );
}
function dw() {
  console.warn(oh.deprecation);
}
function pw(e, t) {
  throw new Error(e[t] || e.default);
}
var oh = {
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
  Vc = aw(pw)(oh),
  hw = { config: fw },
  mw = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduceRight(function (o, l) {
        return l(o);
      }, i);
    };
  };
function lh(e, t) {
  return (
    Object.keys(t).forEach(function (n) {
      t[n] instanceof Object && e[n] && Object.assign(t[n], lh(e[n], t[n]));
    }),
    $c($c({}, e), t)
  );
}
var vw = { type: "cancelation", msg: "operation is manually canceled" };
function Al(e) {
  var t = !1,
    n = new Promise(function (r, i) {
      e.then(function (o) {
        return t ? i(vw) : r(o);
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
var yw = sw.create({
    config: uw,
    isInitialized: !1,
    resolve: null,
    reject: null,
    monaco: null,
  }),
  sh = B1(yw, 2),
  ni = sh[0],
  tl = sh[1];
function gw(e) {
  var t = hw.config(e),
    n = t.monaco,
    r = $1(t, ["monaco"]);
  tl(function (i) {
    return { config: lh(i.config, r), monaco: n };
  });
}
function ww() {
  var e = ni(function (t) {
    var n = t.monaco,
      r = t.isInitialized,
      i = t.resolve;
    return { monaco: n, isInitialized: r, resolve: i };
  });
  if (!e.isInitialized) {
    if ((tl({ isInitialized: !0 }), e.monaco))
      return e.resolve(e.monaco), Al(Il);
    if (window.monaco && window.monaco.editor)
      return uh(window.monaco), e.resolve(window.monaco), Al(Il);
    mw(Sw, Ow)(Cw);
  }
  return Al(Il);
}
function Sw(e) {
  return document.body.appendChild(e);
}
function Ew(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function Ow(e) {
  var t = ni(function (r) {
      var i = r.config,
        o = r.reject;
      return { config: i, reject: o };
    }),
    n = Ew("".concat(t.config.paths.vs, "/loader.js"));
  return (
    (n.onload = function () {
      return e();
    }),
    (n.onerror = t.reject),
    n
  );
}
function Cw() {
  var e = ni(function (n) {
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
        uh(n), e.resolve(n);
      },
      function (n) {
        e.reject(n);
      }
    );
}
function uh(e) {
  ni().monaco || tl({ monaco: e });
}
function xw() {
  return ni(function (e) {
    var t = e.monaco;
    return t;
  });
}
var Il = new Promise(function (e, t) {
    return tl({ resolve: e, reject: t });
  }),
  ah = { config: gw, init: ww, __getMonacoInstance: xw },
  Pw = {
    wrapper: { display: "flex", position: "relative", textAlign: "initial" },
    fullWidth: { width: "100%" },
    hide: { display: "none" },
  },
  bl = Pw,
  Rw = {
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  _w = Rw;
function kw({ children: e }) {
  return W.createElement("div", { style: _w.container }, e);
}
var Tw = kw,
  Nw = Tw;
function Dw({
  width: e,
  height: t,
  isEditorReady: n,
  loading: r,
  _ref: i,
  className: o,
  wrapperProps: l,
}) {
  return W.createElement(
    "section",
    { style: { ...bl.wrapper, width: e, height: t }, ...l },
    !n && W.createElement(Nw, null, r),
    W.createElement("div", {
      ref: i,
      style: { ...bl.fullWidth, ...(!n && bl.hide) },
      className: o,
    })
  );
}
var Fw = Dw,
  ch = D.memo(Fw);
function Mw(e) {
  D.useEffect(e, []);
}
var fh = Mw;
function jw(e, t, n = !0) {
  let r = D.useRef(!0);
  D.useEffect(
    r.current || !n
      ? () => {
          r.current = !1;
        }
      : e,
    t
  );
}
var be = jw;
function Pr() {}
function Mn(e, t, n, r) {
  return Lw(e, r) || zw(e, t, n, r);
}
function Lw(e, t) {
  return e.editor.getModel(dh(e, t));
}
function zw(e, t, n, r) {
  return e.editor.createModel(t, n, r ? dh(e, r) : void 0);
}
function dh(e, t) {
  return e.Uri.parse(t);
}
function Aw({
  original: e,
  modified: t,
  language: n,
  originalLanguage: r,
  modifiedLanguage: i,
  originalModelPath: o,
  modifiedModelPath: l,
  keepCurrentOriginalModel: s = !1,
  keepCurrentModifiedModel: u = !1,
  theme: a = "light",
  loading: c = "Loading...",
  options: h = {},
  height: p = "100%",
  width: y = "100%",
  className: m,
  wrapperProps: g = {},
  beforeMount: k = Pr,
  onMount: v = Pr,
}) {
  let [f, d] = D.useState(!1),
    [w, O] = D.useState(!0),
    S = D.useRef(null),
    E = D.useRef(null),
    _ = D.useRef(null),
    F = D.useRef(v),
    P = D.useRef(k),
    V = D.useRef(!1);
  fh(() => {
    let L = ah.init();
    return (
      L.then((U) => (E.current = U) && O(!1)).catch(
        (U) =>
          (U == null ? void 0 : U.type) !== "cancelation" &&
          console.error("Monaco initialization: error:", U)
      ),
      () => (S.current ? ue() : L.cancel())
    );
  }),
    be(
      () => {
        if (S.current && E.current) {
          let L = S.current.getOriginalEditor(),
            U = Mn(E.current, e || "", r || n || "text", o || "");
          U !== L.getModel() && L.setModel(U);
        }
      },
      [o],
      f
    ),
    be(
      () => {
        if (S.current && E.current) {
          let L = S.current.getModifiedEditor(),
            U = Mn(E.current, t || "", i || n || "text", l || "");
          U !== L.getModel() && L.setModel(U);
        }
      },
      [l],
      f
    ),
    be(
      () => {
        let L = S.current.getModifiedEditor();
        L.getOption(E.current.editor.EditorOption.readOnly)
          ? L.setValue(t || "")
          : t !== L.getValue() &&
            (L.executeEdits("", [
              {
                range: L.getModel().getFullModelRange(),
                text: t || "",
                forceMoveMarkers: !0,
              },
            ]),
            L.pushUndoStop());
      },
      [t],
      f
    ),
    be(
      () => {
        var L, U;
        (U = (L = S.current) == null ? void 0 : L.getModel()) == null ||
          U.original.setValue(e || "");
      },
      [e],
      f
    ),
    be(
      () => {
        let { original: L, modified: U } = S.current.getModel();
        E.current.editor.setModelLanguage(L, r || n || "text"),
          E.current.editor.setModelLanguage(U, i || n || "text");
      },
      [n, r, i],
      f
    ),
    be(
      () => {
        var L;
        (L = E.current) == null || L.editor.setTheme(a);
      },
      [a],
      f
    ),
    be(
      () => {
        var L;
        (L = S.current) == null || L.updateOptions(h);
      },
      [h],
      f
    );
  let ie = D.useCallback(() => {
      var oe;
      if (!E.current) return;
      P.current(E.current);
      let L = Mn(E.current, e || "", r || n || "text", o || ""),
        U = Mn(E.current, t || "", i || n || "text", l || "");
      (oe = S.current) == null || oe.setModel({ original: L, modified: U });
    }, [n, t, i, e, r, o, l]),
    se = D.useCallback(() => {
      var L;
      !V.current &&
        _.current &&
        ((S.current = E.current.editor.createDiffEditor(_.current, {
          automaticLayout: !0,
          ...h,
        })),
        ie(),
        (L = E.current) == null || L.editor.setTheme(a),
        d(!0),
        (V.current = !0));
    }, [h, a, ie]);
  D.useEffect(() => {
    f && F.current(S.current, E.current);
  }, [f]),
    D.useEffect(() => {
      !w && !f && se();
    }, [w, f, se]);
  function ue() {
    var U, oe, R, M;
    let L = (U = S.current) == null ? void 0 : U.getModel();
    s || (oe = L == null ? void 0 : L.original) == null || oe.dispose(),
      u || (R = L == null ? void 0 : L.modified) == null || R.dispose(),
      (M = S.current) == null || M.dispose();
  }
  return W.createElement(ch, {
    width: y,
    height: p,
    isEditorReady: f,
    loading: c,
    _ref: _,
    className: m,
    wrapperProps: g,
  });
}
var Iw = Aw;
D.memo(Iw);
function bw(e) {
  let t = D.useRef();
  return (
    D.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var Uw = bw,
  xi = new Map();
function $w({
  defaultValue: e,
  defaultLanguage: t,
  defaultPath: n,
  value: r,
  language: i,
  path: o,
  theme: l = "light",
  line: s,
  loading: u = "Loading...",
  options: a = {},
  overrideServices: c = {},
  saveViewState: h = !0,
  keepCurrentModel: p = !1,
  width: y = "100%",
  height: m = "100%",
  className: g,
  wrapperProps: k = {},
  beforeMount: v = Pr,
  onMount: f = Pr,
  onChange: d,
  onValidate: w = Pr,
}) {
  let [O, S] = D.useState(!1),
    [E, _] = D.useState(!0),
    F = D.useRef(null),
    P = D.useRef(null),
    V = D.useRef(null),
    ie = D.useRef(f),
    se = D.useRef(v),
    ue = D.useRef(),
    L = D.useRef(r),
    U = Uw(o),
    oe = D.useRef(!1),
    R = D.useRef(!1);
  fh(() => {
    let j = ah.init();
    return (
      j
        .then((A) => (F.current = A) && _(!1))
        .catch(
          (A) =>
            (A == null ? void 0 : A.type) !== "cancelation" &&
            console.error("Monaco initialization: error:", A)
        ),
      () => (P.current ? z() : j.cancel())
    );
  }),
    be(
      () => {
        var A, de, ze, at;
        let j = Mn(F.current, e || r || "", t || i || "", o || n || "");
        j !== ((A = P.current) == null ? void 0 : A.getModel()) &&
          (h &&
            xi.set(U, (de = P.current) == null ? void 0 : de.saveViewState()),
          (ze = P.current) == null || ze.setModel(j),
          h && ((at = P.current) == null || at.restoreViewState(xi.get(o))));
      },
      [o],
      O
    ),
    be(
      () => {
        var j;
        (j = P.current) == null || j.updateOptions(a);
      },
      [a],
      O
    ),
    be(
      () => {
        !P.current ||
          r === void 0 ||
          (P.current.getOption(F.current.editor.EditorOption.readOnly)
            ? P.current.setValue(r)
            : r !== P.current.getValue() &&
              ((R.current = !0),
              P.current.executeEdits("", [
                {
                  range: P.current.getModel().getFullModelRange(),
                  text: r,
                  forceMoveMarkers: !0,
                },
              ]),
              P.current.pushUndoStop(),
              (R.current = !1)));
      },
      [r],
      O
    ),
    be(
      () => {
        var A, de;
        let j = (A = P.current) == null ? void 0 : A.getModel();
        j &&
          i &&
          ((de = F.current) == null || de.editor.setModelLanguage(j, i));
      },
      [i],
      O
    ),
    be(
      () => {
        var j;
        s !== void 0 && ((j = P.current) == null || j.revealLine(s));
      },
      [s],
      O
    ),
    be(
      () => {
        var j;
        (j = F.current) == null || j.editor.setTheme(l);
      },
      [l],
      O
    );
  let M = D.useCallback(() => {
    var j;
    if (!(!V.current || !F.current) && !oe.current) {
      se.current(F.current);
      let A = o || n,
        de = Mn(F.current, r || e || "", t || i || "", A || "");
      (P.current =
        (j = F.current) == null
          ? void 0
          : j.editor.create(
              V.current,
              { model: de, automaticLayout: !0, ...a },
              c
            )),
        h && P.current.restoreViewState(xi.get(A)),
        F.current.editor.setTheme(l),
        s !== void 0 && P.current.revealLine(s),
        S(!0),
        (oe.current = !0);
    }
  }, [e, t, n, r, i, o, a, c, h, l, s]);
  D.useEffect(() => {
    O && ie.current(P.current, F.current);
  }, [O]),
    D.useEffect(() => {
      !E && !O && M();
    }, [E, O, M]),
    (L.current = r),
    D.useEffect(() => {
      var j, A;
      O &&
        d &&
        ((j = ue.current) == null || j.dispose(),
        (ue.current =
          (A = P.current) == null
            ? void 0
            : A.onDidChangeModelContent((de) => {
                R.current || d(P.current.getValue(), de);
              })));
    }, [O, d]),
    D.useEffect(() => {
      if (O) {
        let j = F.current.editor.onDidChangeMarkers((A) => {
          var ze;
          let de = (ze = P.current.getModel()) == null ? void 0 : ze.uri;
          if (de && A.find((at) => at.path === de.path)) {
            let at = F.current.editor.getModelMarkers({ resource: de });
            w == null || w(at);
          }
        });
        return () => {
          j == null || j.dispose();
        };
      }
      return () => {};
    }, [O, w]);
  function z() {
    var j, A;
    (j = ue.current) == null || j.dispose(),
      p
        ? h && xi.set(o, P.current.saveViewState())
        : (A = P.current.getModel()) == null || A.dispose(),
      P.current.dispose();
  }
  return W.createElement(ch, {
    width: y,
    height: m,
    isEditorReady: O,
    loading: u,
    _ref: V,
    className: g,
    wrapperProps: k,
  });
}
var Bw = $w,
  Hw = D.memo(Bw),
  Qw = Hw;
const ph = document.location.origin.includes("localhost")
    ? "http://localhost:3000"
    : document.location.origin,
  hh = ph.split(":")[1],
  Vw = ph.split(":")[2],
  Ww = hh.includes("localhost") ? Vw : 9999,
  ar = new WebSocket(`ws://${hh}:${Ww}/ws`);
function qw() {
  const [e, t] = D.useState(""),
    [n, r] = D.useState("");
  (ar.onopen = function () {
    o(`Connected to the server.
`);
  }),
    (ar.onmessage = function (s) {
      o(s.data);
    }),
    (ar.onclose = function () {
      o(`Connection closed.
`);
    }),
    (ar.onerror = function (s) {
      o(
        "Error: " +
          s.message +
          `
`
      );
    });
  function i() {
    const s = e.trim();
    s !== "" &&
      (ar.send(s),
      o(`$ ${s}
`),
      t(""));
  }
  function o(s) {
    r((u) => u + s);
  }
  const l = D.useRef(null);
  return (
    D.useEffect(() => {
      l.current && (l.current.scrollTop = l.current.scrollHeight);
    }, [n]),
    T.jsx(ta, {
      className:
        "resizable-box overflow-auto p-4 absolute bottom-2 w-full bg-second border-t-2 border-slate-600 text-white",
      width: 1 / 0,
      height: 250,
      minConstraints: [1 / 0, 50],
      maxConstraints: [1 / 0, 500],
      axis: "y",
      handle: T.jsx("span", { className: "custom-vertical-handle" }),
      resizeHandles: ["n"],
      children: T.jsxs("div", {
        ref: l,
        className: "terminal-content overflow-auto max-h-full",
        children: [
          T.jsx("pre", { className: "output", children: n }),
          T.jsxs("div", {
            className: "flex justify-center items-center mt-2",
            children: [
              T.jsx("span", {
                className: "prompt mr-2",
                children: T.jsx(ry, {}),
              }),
              T.jsx("input", {
                className:
                  "w-full bg-transparent p-1 text-white outline-none text-sm",
                type: "text",
                value: e,
                onChange: (s) => t(s.target.value),
                onKeyDown: (s) => {
                  s.key === "Enter" && i();
                },
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function Kw({ outPut: e }) {
  return T.jsx(ta, {
    className:
      "resizable-box absolute bottom-2 w-full bg-second border-t-2 border-slate-600 text-white p-2",
    width: 1 / 0,
    height: 250,
    minConstraints: [1 / 0, 50],
    maxConstraints: [1 / 0, 500],
    axis: "y",
    handle: T.jsx("span", { className: "custom-vertical-handle" }),
    resizeHandles: ["n"],
    children: T.jsx("pre", { className: "output", children: e }),
  });
}
function Xw(e) {
  const t = e.lastIndexOf(".");
  return t === -1 || t === 0 ? "" : e.substring(t + 1);
}
const Yw = { height: "calc(100% - (48px))" };
function Gw({
  isTerminalVisible: e,
  isOutputVisible: t,
  activeFile: n,
  fileContent: r,
  onSaveFileContent: i,
  outPut: o,
}) {
  const [l, s] = D.useState("plaintext"),
    [u, a] = D.useState(r);
  D.useEffect(() => {
    if (n) {
      const p = Xw(n.name),
        m =
          {
            js: "javascript",
            jsx: "javascript",
            html: "html",
            css: "css",
            py: "python",
            go: "go",
          }[p] || "plaintext";
      s(m);
    } else s("plaintext");
  }, [n]);
  const c = (p) => {
      (n.content = p), (r = p), a(p);
    },
    h = D.useCallback(
      (p) => {
        (p.ctrlKey || p.metaKey) &&
          p.key === "s" &&
          (p.preventDefault(), n && i(n, u));
      },
      [n, u, i]
    );
  return (
    D.useEffect(
      () => (
        document.addEventListener("keydown", h),
        () => {
          document.removeEventListener("keydown", h);
        }
      ),
      [h]
    ),
    T.jsxs("div", {
      className: "w-full bg-second relative",
      style: Yw,
      children: [
        n &&
          T.jsx(
            Qw,
            {
              height: "100%",
              width: "100%",
              defaultLanguage: l,
              theme: "vs-dark",
              value: r,
              onChange: c,
            },
            l
          ),
        e && T.jsx(qw, {}),
        t && T.jsx(Kw, { outPut: o }),
      ],
    })
  );
}
function Jw({
  handleToggleTerminal: e,
  isTerminalVisible: t,
  handleToggleOutput: n,
  isOutputVisible: r,
}) {
  return T.jsx("div", {
    className: "h-6 absolute bottom-0 left-0 w-full bg-sky-500 text-white",
    children: T.jsxs("ul", {
      className: "flex items-center h-full gap-6 text-xs px-2 text-black",
      children: [
        T.jsx("li", {
          className: "cursor-pointer",
          onClick: e,
          children: t ? "Hide Terminal" : "Show Terminal",
        }),
        T.jsx("li", {
          className: "cursor-pointer",
          onClick: n,
          children: r ? "Hide Output" : "Show Output",
        }),
      ],
    }),
  });
}
const Pi = document.location.origin.includes("localhost")
    ? "http://localhost:3000"
    : document.location.origin,
  Zw = new Jg(),
  eS = { name: "NOT FOUND", childs: [], dir: !0, parent: null, path: "" };
function tS(e) {
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
const nS = { height: "calc(100% - 48px)" };
function rS() {
  const [e, t] = D.useState(!1),
    [n, r] = D.useState(!1),
    [i, o] = D.useState([]),
    [l, s] = D.useState(null),
    [u, a] = D.useState(""),
    [c, h] = D.useState(""),
    [p, y] = D.useState(eS),
    m = async (S, E, _) => {
      if (_) {
        o([...i]);
        return;
      }
      if (E) {
        try {
          const F = await q.put(`${Pi}/api/readFile`, { path: S.path });
          F.data.succeed ? (S.content = F.data.output) : alert(F.data.output);
        } catch (F) {
          console.error(F);
        }
        i.includes(S) || o([...i, S]), s(S);
      } else {
        const F = i.filter((P) => P.id !== S.id);
        F.length !== 0 ? s(F[F.length - 1]) : s(null), o(F);
      }
    };
  D.useEffect(() => {
    l && a(l.content);
  }, [l]);
  const g = () => {
      t(!e);
    },
    k = () => {
      r(!n);
    },
    v = { width: "calc(100% - 22%)" },
    f = async (S) => {
      try {
        const E = await q.post(`${Pi}/api/save`, {
          filePath: S.path,
          content: S.content,
        });
        E.data.succeed || alert(E.data.output);
      } catch (E) {
        console.error(E);
      }
    },
    d = () => {
      l && f(l);
    };
  async function w() {
    if (l)
      try {
        const S = await q.put(`${Pi}/api/run`, { Path: l.path });
        h(c + S.data.output);
      } catch (S) {
        console.error(S);
      }
  }
  async function O(S) {
    try {
      const E = await q.put(`${Pi}/api/getTree`, { path: S }),
        _ = tS(E.data);
      o([]), s(null), a(""), y(_);
    } catch (E) {
      alert(E.response.data), console.error(E.response.data);
    }
  }
  return T.jsx(i0, {
    client: Zw,
    children: T.jsxs("div", {
      className: "w-full h-screen bg-blue-950 overflow-hidden",
      children: [
        T.jsx(ey, {
          onSaveButtonClick: d,
          onRunButtonClick: w,
          onTopBarSearch: O,
        }),
        T.jsxs("div", {
          className: "flex w-full",
          style: nS,
          children: [
            T.jsx(L1, { setNavFiles: m, structure: p, setStructure: y }),
            T.jsxs("div", {
              style: v,
              children: [
                T.jsx(I1, { navFiles: i, activeFile: l, setNavFiles: m }),
                T.jsx(Gw, {
                  isTerminalVisible: e,
                  isOutputVisible: n,
                  activeFile: l,
                  outPut: c,
                  fileContent: u,
                  onSaveFileContent: f,
                }),
              ],
            }),
          ],
        }),
        T.jsx(Jw, {
          handleToggleTerminal: g,
          isTerminalVisible: e,
          isOutputVisible: n,
          handleToggleOutput: k,
        }),
      ],
    }),
  });
}
Ul.createRoot(document.getElementById("root")).render(
  T.jsx(W.StrictMode, { children: T.jsx(rS, {}) })
);
