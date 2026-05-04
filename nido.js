var Pe, O, Bn, ie, hn, Zn, qn, Ne, we, de, Yn, Je, Ve, We, Ie = {}, Se = [], Ht = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Te = Array.isArray;
function ee(n, t) {
  for (var i in t) n[i] = t[i];
  return n;
}
function Xe(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function Jn(n, t, i) {
  var r, o, a, s = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? o = t[a] : s[a] = t[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Pe.call(arguments, 2) : i), typeof n == "function" && n.defaultProps != null) for (a in n.defaultProps) s[a] === void 0 && (s[a] = n.defaultProps[a]);
  return ke(n, s, r, o, null);
}
function ke(n, t, i, r, o) {
  var a = { type: n, props: t, key: i, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Bn, __i: -1, __u: 0 };
  return o == null && O.vnode != null && O.vnode(a), a;
}
function X(n) {
  return n.children;
}
function ze(n, t) {
  this.props = n, this.context = t;
}
function se(n, t) {
  if (t == null) return n.__ ? se(n.__, n.__i + 1) : null;
  for (var i; t < n.__k.length; t++) if ((i = n.__k[t]) != null && i.__e != null) return i.__e;
  return typeof n.type == "function" ? se(n) : null;
}
function Vt(n) {
  if (n.__P && n.__d) {
    var t = n.__v, i = t.__e, r = [], o = [], a = ee({}, t);
    a.__v = t.__v + 1, O.vnode && O.vnode(a), Ke(n.__P, a, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [i] : null, r, i ?? se(t), !!(32 & t.__u), o), a.__v = t.__v, a.__.__k[a.__i] = a, Qn(r, a, o), t.__e = t.__ = null, a.__e != i && Xn(a);
  }
}
function Xn(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), Xn(n);
}
function _n(n) {
  (!n.__d && (n.__d = !0) && ie.push(n) && !Ce.__r++ || hn != O.debounceRendering) && ((hn = O.debounceRendering) || Zn)(Ce);
}
function Ce() {
  try {
    for (var n, t = 1; ie.length; ) ie.length > t && ie.sort(qn), n = ie.shift(), t = ie.length, Vt(n);
  } finally {
    ie.length = Ce.__r = 0;
  }
}
function Kn(n, t, i, r, o, a, s, l, p, d, u) {
  var c, _, m, v, b, g, f, h = r && r.__k || Se, y = t.length;
  for (p = Wt(i, t, h, p, y), c = 0; c < y; c++) (m = i.__k[c]) != null && (_ = m.__i != -1 && h[m.__i] || Ie, m.__i = c, g = Ke(n, m, _, o, a, s, l, p, d, u), v = m.__e, m.ref && _.ref != m.ref && (_.ref && Ge(_.ref, null, m), u.push(m.ref, m.__c || v, m)), b == null && v != null && (b = v), (f = !!(4 & m.__u)) || _.__k === m.__k ? (p = Gn(m, p, n, f), f && _.__e && (_.__e = null)) : typeof m.type == "function" && g !== void 0 ? p = g : v && (p = v.nextSibling), m.__u &= -7);
  return i.__e = b, p;
}
function Wt(n, t, i, r, o) {
  var a, s, l, p, d, u = i.length, c = u, _ = 0;
  for (n.__k = new Array(o), a = 0; a < o; a++) (s = t[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = n.__k[a] = ke(null, s, null, null, null) : Te(s) ? s = n.__k[a] = ke(X, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = n.__k[a] = ke(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : n.__k[a] = s, p = a + _, s.__ = n, s.__b = n.__b + 1, l = null, (d = s.__i = Ut(s, i, p, c)) != -1 && (c--, (l = i[d]) && (l.__u |= 2)), l == null || l.__v == null ? (d == -1 && (o > u ? _-- : o < u && _++), typeof s.type != "function" && (s.__u |= 4)) : d != p && (d == p - 1 ? _-- : d == p + 1 ? _++ : (d > p ? _-- : _++, s.__u |= 4))) : n.__k[a] = null;
  if (c) for (a = 0; a < u; a++) (l = i[a]) != null && (2 & l.__u) == 0 && (l.__e == r && (r = se(l)), nt(l, l));
  return r;
}
function Gn(n, t, i, r) {
  var o, a;
  if (typeof n.type == "function") {
    for (o = n.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = n, t = Gn(o[a], t, i, r));
    return t;
  }
  n.__e != t && (r && (t && n.type && !t.parentNode && (t = se(n)), i.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Ut(n, t, i, r) {
  var o, a, s, l = n.key, p = n.type, d = t[i], u = d != null && (2 & d.__u) == 0;
  if (d === null && l == null || u && l == d.key && p == d.type) return i;
  if (r > (u ? 1 : 0)) {
    for (o = i - 1, a = i + 1; o >= 0 || a < t.length; ) if ((d = t[s = o >= 0 ? o-- : a++]) != null && (2 & d.__u) == 0 && l == d.key && p == d.type) return s;
  }
  return -1;
}
function fn(n, t, i) {
  t[0] == "-" ? n.setProperty(t, i ?? "") : n[t] = i == null ? "" : typeof i != "number" || Ht.test(t) ? i : i + "px";
}
function me(n, t, i, r, o) {
  var a, s;
  e: if (t == "style") if (typeof i == "string") n.style.cssText = i;
  else {
    if (typeof r == "string" && (n.style.cssText = r = ""), r) for (t in r) i && t in i || fn(n.style, t, "");
    if (i) for (t in i) r && i[t] == r[t] || fn(n.style, t, i[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Yn, "$1")), s = t.toLowerCase(), t = s in n || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + a] = i, i ? r ? i[de] = r[de] : (i[de] = Je, n.addEventListener(t, a ? We : Ve, a)) : n.removeEventListener(t, a ? We : Ve, a);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in n) try {
      n[t] = i ?? "";
      break e;
    } catch {
    }
    typeof i == "function" || (i == null || i === !1 && t[4] != "-" ? n.removeAttribute(t) : n.setAttribute(t, t == "popover" && i == 1 ? "" : i));
  }
}
function gn(n) {
  return function(t) {
    if (this.l) {
      var i = this.l[t.type + n];
      if (t[we] == null) t[we] = Je++;
      else if (t[we] < i[de]) return;
      return i(O.event ? O.event(t) : t);
    }
  };
}
function Ke(n, t, i, r, o, a, s, l, p, d) {
  var u, c, _, m, v, b, g, f, h, y, S, M, T, N, H, L = t.type;
  if (t.constructor !== void 0) return null;
  128 & i.__u && (p = !!(32 & i.__u), a = [l = t.__e = i.__e]), (u = O.__b) && u(t);
  e: if (typeof L == "function") try {
    if (f = t.props, h = L.prototype && L.prototype.render, y = (u = L.contextType) && r[u.__c], S = u ? y ? y.props.value : u.__ : r, i.__c ? g = (c = t.__c = i.__c).__ = c.__E : (h ? t.__c = c = new L(f, S) : (t.__c = c = new ze(f, S), c.constructor = L, c.render = Zt), y && y.sub(c), c.state || (c.state = {}), c.__n = r, _ = c.__d = !0, c.__h = [], c._sb = []), h && c.__s == null && (c.__s = c.state), h && L.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ee({}, c.__s)), ee(c.__s, L.getDerivedStateFromProps(f, c.__s))), m = c.props, v = c.state, c.__v = t, _) h && L.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), h && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (h && L.getDerivedStateFromProps == null && f !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(f, S), t.__v == i.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(f, c.__s, S) === !1) {
        t.__v != i.__v && (c.props = f, c.state = c.__s, c.__d = !1), t.__e = i.__e, t.__k = i.__k, t.__k.some(function(Z) {
          Z && (Z.__ = t);
        }), Se.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && s.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(f, c.__s, S), h && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(m, v, b);
      });
    }
    if (c.context = S, c.props = f, c.__P = n, c.__e = !1, M = O.__r, T = 0, h) c.state = c.__s, c.__d = !1, M && M(t), u = c.render(c.props, c.state, c.context), Se.push.apply(c.__h, c._sb), c._sb = [];
    else do
      c.__d = !1, M && M(t), u = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++T < 25);
    c.state = c.__s, c.getChildContext != null && (r = ee(ee({}, r), c.getChildContext())), h && !_ && c.getSnapshotBeforeUpdate != null && (b = c.getSnapshotBeforeUpdate(m, v)), N = u != null && u.type === X && u.key == null ? et(u.props.children) : u, l = Kn(n, Te(N) ? N : [N], t, i, r, o, a, s, l, p, d), c.base = t.__e, t.__u &= -161, c.__h.length && s.push(c), g && (c.__E = c.__ = null);
  } catch (Z) {
    if (t.__v = null, p || a != null) if (Z.then) {
      for (t.__u |= p ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      a[a.indexOf(l)] = null, t.__e = l;
    } else {
      for (H = a.length; H--; ) Xe(a[H]);
      Ue(t);
    }
    else t.__e = i.__e, t.__k = i.__k, Z.then || Ue(t);
    O.__e(Z, t, i);
  }
  else a == null && t.__v == i.__v ? (t.__k = i.__k, t.__e = i.__e) : l = t.__e = Bt(i.__e, t, i, r, o, a, s, p, d);
  return (u = O.diffed) && u(t), 128 & t.__u ? void 0 : l;
}
function Ue(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(Ue));
}
function Qn(n, t, i) {
  for (var r = 0; r < i.length; r++) Ge(i[r], i[++r], i[++r]);
  O.__c && O.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(a) {
        a.call(o);
      });
    } catch (a) {
      O.__e(a, o.__v);
    }
  });
}
function et(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : Te(n) ? n.map(et) : ee({}, n);
}
function Bt(n, t, i, r, o, a, s, l, p) {
  var d, u, c, _, m, v, b, g = i.props || Ie, f = t.props, h = t.type;
  if (h == "svg" ? o = "http://www.w3.org/2000/svg" : h == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((m = a[d]) && "setAttribute" in m == !!h && (h ? m.localName == h : m.nodeType == 3)) {
      n = m, a[d] = null;
      break;
    }
  }
  if (n == null) {
    if (h == null) return document.createTextNode(f);
    n = document.createElementNS(o, h, f.is && f), l && (O.__m && O.__m(t, a), l = !1), a = null;
  }
  if (h == null) g === f || l && n.data == f || (n.data = f);
  else {
    if (a = a && Pe.call(n.childNodes), !l && a != null) for (g = {}, d = 0; d < n.attributes.length; d++) g[(m = n.attributes[d]).name] = m.value;
    for (d in g) m = g[d], d == "dangerouslySetInnerHTML" ? c = m : d == "children" || d in f || d == "value" && "defaultValue" in f || d == "checked" && "defaultChecked" in f || me(n, d, null, m, o);
    for (d in f) m = f[d], d == "children" ? _ = m : d == "dangerouslySetInnerHTML" ? u = m : d == "value" ? v = m : d == "checked" ? b = m : l && typeof m != "function" || g[d] === m || me(n, d, m, g[d], o);
    if (u) l || c && (u.__html == c.__html || u.__html == n.innerHTML) || (n.innerHTML = u.__html), t.__k = [];
    else if (c && (n.innerHTML = ""), Kn(t.type == "template" ? n.content : n, Te(_) ? _ : [_], t, i, r, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, a, s, a ? a[0] : i.__k && se(i, 0), l, p), a != null) for (d = a.length; d--; ) Xe(a[d]);
    l || (d = "value", h == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[d] || h == "progress" && !v || h == "option" && v != g[d]) && me(n, d, v, g[d], o), d = "checked", b != null && b != n[d] && me(n, d, b, g[d], o));
  }
  return n;
}
function Ge(n, t, i) {
  try {
    if (typeof n == "function") {
      var r = typeof n.__u == "function";
      r && n.__u(), r && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    O.__e(o, i);
  }
}
function nt(n, t, i) {
  var r, o;
  if (O.unmount && O.unmount(n), (r = n.ref) && (r.current && r.current != n.__e || Ge(r, null, t)), (r = n.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      O.__e(a, t);
    }
    r.base = r.__P = null;
  }
  if (r = n.__k) for (o = 0; o < r.length; o++) r[o] && nt(r[o], t, i || typeof n.type != "function");
  i || Xe(n.__e), n.__c = n.__ = n.__e = void 0;
}
function Zt(n, t, i) {
  return this.constructor(n, i);
}
function mn(n, t, i) {
  var r, o, a, s;
  t == document && (t = document.documentElement), O.__ && O.__(n, t), o = (r = !1) ? null : t.__k, a = [], s = [], Ke(t, n = t.__k = Jn(X, null, [n]), o || Ie, Ie, t.namespaceURI, o ? null : t.firstChild ? Pe.call(t.childNodes) : null, a, o ? o.__e : t.firstChild, r, s), Qn(a, n, s);
}
Pe = Se.slice, O = { __e: function(n, t, i, r) {
  for (var o, a, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(n)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, r || {}), s = o.__d), s) return o.__E = o;
  } catch (l) {
    n = l;
  }
  throw n;
} }, Bn = 0, ze.prototype.setState = function(n, t) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = ee({}, this.state), typeof n == "function" && (n = n(ee({}, i), this.props)), n && ee(i, n), n != null && this.__v && (t && this._sb.push(t), _n(this));
}, ze.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), _n(this));
}, ze.prototype.render = X, ie = [], Zn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, qn = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Ce.__r = 0, Ne = Math.random().toString(8), we = "__d" + Ne, de = "__a" + Ne, Yn = /(PointerCapture)$|Capture$/i, Je = 0, Ve = gn(!1), We = gn(!0);
var qt = 0;
function e(n, t, i, r, o, a) {
  t || (t = {});
  var s, l, p = t;
  if ("ref" in p) for (l in p = {}, t) l == "ref" ? s = t[l] : p[l] = t[l];
  var d = { type: n, props: p, key: i, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --qt, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof n == "function" && (s = n.defaultProps)) for (l in s) p[l] === void 0 && (p[l] = s[l]);
  return O.vnode && O.vnode(d), d;
}
var he, V, Le, bn, _e = 0, tt = [], W = O, vn = W.__b, xn = W.__r, yn = W.diffed, wn = W.__c, kn = W.unmount, zn = W.__;
function Qe(n, t) {
  W.__h && W.__h(V, n, _e || t), _e = 0;
  var i = V.__H || (V.__H = { __: [], __h: [] });
  return n >= i.__.length && i.__.push({}), i.__[n];
}
function z(n) {
  return _e = 1, Yt(at, n);
}
function Yt(n, t, i) {
  var r = Qe(he++, 2);
  if (r.t = n, !r.__c && (r.__ = [at(void 0, t), function(l) {
    var p = r.__N ? r.__N[0] : r.__[0], d = r.t(p, l);
    p !== d && (r.__N = [d, r.__[1]], r.__c.setState({}));
  }], r.__c = V, !V.__f)) {
    var o = function(l, p, d) {
      if (!r.__c.__H) return !0;
      var u = r.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (u.every(function(_) {
        return !_.__N;
      })) return !a || a.call(this, l, p, d);
      var c = r.__c.props !== l;
      return u.some(function(_) {
        if (_.__N) {
          var m = _.__[0];
          _.__ = _.__N, _.__N = void 0, m !== _.__[0] && (c = !0);
        }
      }), a && a.call(this, l, p, d) || c;
    };
    V.__f = !0;
    var a = V.shouldComponentUpdate, s = V.componentWillUpdate;
    V.componentWillUpdate = function(l, p, d) {
      if (this.__e) {
        var u = a;
        a = void 0, o(l, p, d), a = u;
      }
      s && s.call(this, l, p, d);
    }, V.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function J(n, t) {
  var i = Qe(he++, 3);
  !W.__s && it(i.__H, t) && (i.__ = n, i.u = t, V.__H.__h.push(i));
}
function Y(n) {
  return _e = 5, j(function() {
    return { current: n };
  }, []);
}
function j(n, t) {
  var i = Qe(he++, 7);
  return it(i.__H, t) && (i.__ = n(), i.__H = t, i.__h = n), i.__;
}
function q(n, t) {
  return _e = 8, j(function() {
    return n;
  }, t);
}
function Jt() {
  for (var n; n = tt.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(Me), t.__h.some(Be), t.__h = [];
    } catch (i) {
      t.__h = [], W.__e(i, n.__v);
    }
  }
}
W.__b = function(n) {
  V = null, vn && vn(n);
}, W.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), zn && zn(n, t);
}, W.__r = function(n) {
  xn && xn(n), he = 0;
  var t = (V = n.__c).__H;
  t && (Le === V ? (t.__h = [], V.__h = [], t.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (t.__h.some(Me), t.__h.some(Be), t.__h = [], he = 0)), Le = V;
}, W.diffed = function(n) {
  yn && yn(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (tt.push(t) !== 1 && bn === W.requestAnimationFrame || ((bn = W.requestAnimationFrame) || Xt)(Jt)), t.__H.__.some(function(i) {
    i.u && (i.__H = i.u), i.u = void 0;
  })), Le = V = null;
}, W.__c = function(n, t) {
  t.some(function(i) {
    try {
      i.__h.some(Me), i.__h = i.__h.filter(function(r) {
        return !r.__ || Be(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], W.__e(r, i.__v);
    }
  }), wn && wn(n, t);
}, W.unmount = function(n) {
  kn && kn(n);
  var t, i = n.__c;
  i && i.__H && (i.__H.__.some(function(r) {
    try {
      Me(r);
    } catch (o) {
      t = o;
    }
  }), i.__H = void 0, t && W.__e(t, i.__v));
};
var Mn = typeof requestAnimationFrame == "function";
function Xt(n) {
  var t, i = function() {
    clearTimeout(r), Mn && cancelAnimationFrame(t), setTimeout(n);
  }, r = setTimeout(i, 35);
  Mn && (t = requestAnimationFrame(i));
}
function Me(n) {
  var t = V, i = n.__c;
  typeof i == "function" && (n.__c = void 0, i()), V = t;
}
function Be(n) {
  var t = V;
  n.__c = n.__(), V = t;
}
function it(n, t) {
  return !n || n.length !== t.length || t.some(function(i, r) {
    return i !== n[r];
  });
}
function at(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function Kt(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((i, r) => i.name.localeCompare(r.name, "fr"));
}
async function Gt(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function Qt(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function ei(n) {
  return n.split(".")[0] ?? "";
}
function ni(n, t, i) {
  const r = new Map(i.map((s) => [s.id, s.area_id])), o = new Map(t.map((s) => [s.entity_id, s])), a = [];
  for (const [s, l] of Object.entries(n.states)) {
    const p = o.get(s);
    if (p?.disabled_by || p?.hidden_by) continue;
    const d = p?.area_id ?? (p?.device_id ? r.get(p.device_id) ?? null : null), u = p?.name ?? l.attributes.friendly_name ?? p?.original_name ?? s;
    a.push({
      entity_id: s,
      domain: ei(s),
      area_id: d,
      friendly_name: u,
      state: l
    });
  }
  return a;
}
function ti(n) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const r = t.get(i.area_id) ?? [];
    r.push(i), t.set(i.area_id, r);
  }
  return t;
}
function en(n) {
  const t = n.state.state;
  if (t === "unavailable" || t === "unknown") return !1;
  switch (n.domain) {
    case "light":
    case "switch":
    case "fan":
    case "binary_sensor":
      return t === "on";
    case "media_player":
      return t === "playing";
    case "climate":
      return t !== "off";
    case "cover": {
      const i = n.state.attributes.current_position;
      return typeof i == "number" ? i > 0 : t === "open" || t === "opening" || t === "closing";
    }
    case "lock":
      return t === "unlocked";
    case "vacuum":
      return t === "cleaning" || t === "returning";
    case "alarm_control_panel":
      return t.startsWith("armed") || t === "triggered";
    case "camera":
      return t === "recording" || t === "streaming";
    default:
      return !1;
  }
}
function rt(n) {
  const t = {};
  for (const i of n) {
    if (i.domain !== "sensor") continue;
    const r = i.state.attributes.device_class, o = i.state.attributes.unit_of_measurement ?? "", a = i.state.state;
    a === "unavailable" || a === "unknown" || (r === "temperature" && !t.temperature ? t.temperature = { value: a, unit: o } : r === "humidity" && !t.humidity ? t.humidity = { value: a, unit: o } : r === "illuminance" && !t.illuminance && (t.illuminance = { value: a, unit: o }));
  }
  return t;
}
const U = {
  favorites: "nido.favorites",
  exposed: "nido.exposed",
  excludedUsers: "nido.excludedUsers",
  roomsOrder: "nido.roomsOrder",
  roomEntitiesOrder: "nido.roomEntitiesOrder",
  onboarded: "nido.onboarded",
  theme: "nido.theme",
  mode: "nido.mode",
  lastNotificationRead: "nido.lastNotificationRead"
}, ot = ["terracotta", "miel", "sauge", "cosy"], ii = ["light", "dark"];
function K() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function ai() {
  const n = K();
  if (!n) return [];
  const t = n.getItem(U.favorites);
  if (!t) return [];
  try {
    const i = JSON.parse(t);
    return Array.isArray(i) ? i.filter((r) => typeof r == "string") : [];
  } catch {
    return [];
  }
}
function Ze(n) {
  const t = K();
  t && t.setItem(U.favorites, JSON.stringify(n));
}
function nn(n) {
  const t = K();
  if (!t) return [];
  const i = t.getItem(n);
  if (!i) return [];
  try {
    const r = JSON.parse(i);
    return Array.isArray(r) ? r.filter((o) => typeof o == "string") : [];
  } catch {
    return [];
  }
}
function tn(n, t) {
  const i = K();
  i && i.setItem(n, JSON.stringify(t));
}
const ri = () => nn(U.exposed), In = (n) => tn(U.exposed, n), oi = () => nn(U.excludedUsers), Sn = (n) => tn(U.excludedUsers, n), si = () => nn(U.roomsOrder), li = (n) => tn(U.roomsOrder, n);
function ci() {
  const n = K();
  if (!n) return {};
  const t = n.getItem(U.roomEntitiesOrder);
  if (!t) return {};
  try {
    const i = JSON.parse(t);
    if (typeof i != "object" || i === null) return {};
    const r = {};
    for (const [o, a] of Object.entries(i))
      Array.isArray(a) && (r[o] = a.filter((s) => typeof s == "string"));
    return r;
  } catch {
    return {};
  }
}
function di(n) {
  const t = K();
  t && t.setItem(U.roomEntitiesOrder, JSON.stringify(n));
}
function Cn() {
  return K()?.getItem(U.onboarded) === "1";
}
function An(n) {
  const t = K();
  t && t.setItem(U.onboarded, "1");
}
function st() {
  const n = K(), t = n?.getItem(U.theme), i = n?.getItem(U.mode);
  return {
    theme: ot.includes(t) ? t : "terracotta",
    mode: ii.includes(i) ? i : "light"
  };
}
function En(n, t) {
  const i = K();
  i && (i.setItem(U.theme, n), i.setItem(U.mode, t));
}
function pi() {
  return K()?.getItem(U.lastNotificationRead) ?? null;
}
function ui(n) {
  K()?.setItem(U.lastNotificationRead, n);
}
const hi = 6, _i = 20;
function fi(n, t) {
  if (!(n instanceof Element)) return !1;
  let i = n;
  for (; i && i !== t; ) {
    const r = i.tagName;
    if (r === "INPUT" || r === "BUTTON" || r === "SELECT" || r === "TEXTAREA" || r === "A")
      return !0;
    const o = i.getAttribute("role");
    if (o === "switch" || o === "button" || o === "slider" || i.hasAttribute("data-no-drag")) return !0;
    i = i.parentElement;
  }
  return !1;
}
function lt(n, t, i) {
  if (t.length === 0) return n;
  const r = new Map(n.map((s) => [i(s), s])), o = /* @__PURE__ */ new Set(), a = [];
  for (const s of t) {
    const l = r.get(s);
    l && !o.has(s) && (a.push(l), o.add(s));
  }
  for (const s of n) {
    const l = i(s);
    o.has(l) || (a.push(s), o.add(l));
  }
  return a;
}
function qe(n, t, i) {
  const [r, o] = z({ draggingId: null, overId: null }), a = Y(null), s = Y(null), l = Y(n);
  l.current = n;
  const p = Y(i);
  p.current = i;
  const d = Y(t);
  d.current = t;
  const u = q((_, m) => {
    const v = s.current;
    if (!v) return null;
    const b = v.querySelectorAll("[data-drag-id]");
    for (const g of Array.from(b)) {
      const f = g.getBoundingClientRect();
      if (_ >= f.left && _ <= f.right && m >= f.top && m <= f.bottom)
        return g.getAttribute("data-drag-id");
    }
    return null;
  }, []);
  J(() => {
    const _ = (b) => {
      const g = a.current;
      if (!g || g.pointerType !== "touch") return;
      if (g.entered) {
        b.preventDefault();
        return;
      }
      const f = b.touches[0];
      if (!f) return;
      const h = f.clientX - g.x, y = f.clientY - g.y;
      Math.hypot(h, y) <= _i ? b.preventDefault() : (g.timerId && clearTimeout(g.timerId), a.current = null);
    }, m = (b) => {
      const g = a.current;
      if (!g) return;
      if (g.pointerType === "touch") {
        if (!g.entered)
          return;
      } else if (!g.entered) {
        const h = b.clientX - g.x, y = b.clientY - g.y;
        if (Math.hypot(h, y) < hi) return;
        g.entered = !0, o({ draggingId: g.id, overId: null });
      }
      const f = u(b.clientX, b.clientY);
      o((h) => h.overId === f ? h : { ...h, overId: f });
    }, v = () => {
      const b = a.current;
      if (b?.timerId && clearTimeout(b.timerId), a.current = null, !b || !b.entered) return;
      const g = (f) => {
        f.preventDefault(), f.stopPropagation();
      };
      window.addEventListener("click", g, { capture: !0, once: !0 }), o((f) => {
        const { draggingId: h, overId: y } = f;
        if (h && y && h !== y) {
          const S = l.current, M = d.current, T = S.findIndex((H) => M(H) === h), N = S.findIndex((H) => M(H) === y);
          if (T >= 0 && N >= 0) {
            const H = [...S], [L] = H.splice(T, 1);
            H.splice(N, 0, L), p.current(H);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", m), document.addEventListener("pointerup", v), document.addEventListener("pointercancel", v), document.addEventListener("touchmove", _, { passive: !1 }), () => {
      document.removeEventListener("pointermove", m), document.removeEventListener("pointerup", v), document.removeEventListener("pointercancel", v), document.removeEventListener("touchmove", _);
    };
  }, [u]);
  const c = q(
    (_) => {
      const m = r.draggingId === _, v = r.draggingId !== null && r.draggingId !== _ && r.overId === _;
      return {
        "data-drag-id": _,
        "data-dragging": m ? "true" : void 0,
        "data-drag-over": v ? "true" : void 0,
        onPointerDown: (b) => {
          if (b.button !== void 0 && b.button !== 0) return;
          const g = b.currentTarget;
          if (!fi(b.target, g))
            if (b.pointerType === "touch") {
              const f = window.setTimeout(() => {
                const h = a.current;
                h && h.id === _ && !h.entered && (h.entered = !0, o({ draggingId: _, overId: null }), "vibrate" in navigator && navigator.vibrate(50));
              }, 1500);
              a.current = { id: _, x: b.clientX, y: b.clientY, entered: !1, pointerType: "touch", timerId: f };
            } else
              a.current = { id: _, x: b.clientX, y: b.clientY, entered: !1, pointerType: b.pointerType };
        }
      };
    },
    [r.draggingId, r.overId]
  );
  return {
    containerRef: s,
    itemPropsFor: c,
    isDragging: r.draggingId !== null
  };
}
const x = ({ children: n, size: t = 24, stroke: i = 1.5, fill: r = "none", style: o }) => /* @__PURE__ */ e(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: r,
    stroke: "currentColor",
    "stroke-width": i,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    style: o,
    children: n
  }
), ge = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), ct = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" }),
  /* @__PURE__ */ e("path", { d: "M10 19a2 2 0 0 0 4 0" })
] }), gi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), mi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), an = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), rn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 8V4M15 8V4" }),
  /* @__PURE__ */ e("path", { d: "M6 8h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }),
  /* @__PURE__ */ e("path", { d: "M12 16v5" })
] }), Pn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), Tn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4", "stroke-dasharray": "1 2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "0.8", fill: "currentColor" })
] }), bi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), pe = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), ae = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), vi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), xi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), fe = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), on = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), yi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), sn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), wi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), ki = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), zi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), Mi = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), le = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), dt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), pt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), be = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), ln = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), ut = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" }) }), ht = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" }),
  /* @__PURE__ */ e("path", { d: "M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" })
] }), Dn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M9 18v2M13 18v3M17 18v2" })
] }), je = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" })
] }), Re = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "m12 17-2 4h3l-1 3" })
] }), Ii = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" }),
  /* @__PURE__ */ e("path", { d: "M5 17h14M3 21h18" })
] }), $n = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 8h12a3 3 0 1 0-3-3" }),
  /* @__PURE__ */ e("path", { d: "M3 13h17a3 3 0 1 1-3 3" }),
  /* @__PURE__ */ e("path", { d: "M3 18h9" })
] }), Si = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), Ci = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), cn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), Ai = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), Ei = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), Pi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), Ti = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), Di = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), $i = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), Oi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), Ae = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), dn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), pn = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), On = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), Ni = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), Li = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), ji = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), Ri = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ e("path", { d: "m20 20-3.5-3.5" })
] }), oe = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M6 6l12 12M18 6 6 18" }) }), Fi = (n) => /* @__PURE__ */ e(x, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), _t = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), Hi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), Vi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), Wi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), Ui = (n) => /* @__PURE__ */ e(x, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), Bi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), Zi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), qi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), Yi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), Ji = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), Xi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), ft = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 9v4" }),
  /* @__PURE__ */ e("path", { d: "M12 17h.01" })
] }), Ki = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 12v8a2 2 0 0 0 4 0" }),
  /* @__PURE__ */ e("path", { d: "M12 2v1" })
] }), Gi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
] }), Qi = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "M12 16v-4" }),
  /* @__PURE__ */ e("path", { d: "M12 8h.01" })
] }), ea = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), gt = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
] }), na = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
  /* @__PURE__ */ e("line", { x1: "12", y1: "2", x2: "12", y2: "12" })
] }), ta = (n) => /* @__PURE__ */ e(x, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 4h2l2.4 11a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6" }),
  /* @__PURE__ */ e("circle", { cx: "9", cy: "20", r: "1.4" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "20", r: "1.4" })
] });
function ia(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function mt({
  hass: n,
  entity: t,
  hero: i = !1,
  breatheVariant: r = 1,
  roomLabel: o
}) {
  const a = t.state.state === "on", s = t.state.state === "unavailable", [l, p] = z(!1), [d, u] = z(null), c = d ?? ia(t.state), _ = async () => {
    if (!s) {
      p(!0);
      try {
        await n.callService("light", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, m = async (g) => {
    u(g);
    try {
      await n.callService("light", "turn_on", {
        entity_id: t.entity_id,
        brightness_pct: g
      });
    } finally {
      setTimeout(() => u(null), 50);
    }
  }, b = [
    "n-card",
    i ? a ? "n-card--accent" : "n-card--accent-muted" : "n-card--default",
    a ? `breathe-${r}` : "",
    l ? "is-pending" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: b, "data-hero": i ? "true" : "false", "data-on": a ? "true" : "false", children: [
    a && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(ge, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": a,
          disabled: s || l,
          onClick: _,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: o }),
    /* @__PURE__ */ e("div", { class: `n-title ${i ? "n-title--xl" : ""}`, children: t.friendly_name }),
    a && !s && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Intensité" }),
        /* @__PURE__ */ e("span", { class: `n-value ${i ? "n-value--xl" : ""}`, children: [
          c,
          /* @__PURE__ */ e("span", { class: "n-value__unit", children: "%" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          class: "n-slider",
          min: 1,
          max: 100,
          step: 1,
          value: c,
          style: { "--val": `${(c - 1) / 99 * 100}%` },
          onInput: (g) => m(Number(g.target.value))
        }
      )
    ] }),
    !a && !s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Éteinte" }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function aa(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function bt({ hass: n, entity: t, roomLabel: i, hero: r = !1 }) {
  const o = t.state.state === "unavailable", [a, s] = z(null), l = a ?? aa(t.state), p = l > 0, d = async (_) => {
    s(_);
    try {
      await n.callService("cover", "set_cover_position", {
        entity_id: t.entity_id,
        position: _
      });
    } finally {
      setTimeout(() => s(null), 50);
    }
  }, c = ["n-card", r ? p ? "n-card--accent" : "n-card--accent-muted" : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": p ? "true" : "false", children: /* @__PURE__ */ e("div", { class: c, "data-hero": r ? "true" : "false", "data-on": p ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(an, { size: 20 }) }),
      /* @__PURE__ */ e("div", { class: "n-blinds", children: [0, 1, 2, 3, 4, 5].map((_) => /* @__PURE__ */ e(
        "span",
        {
          class: "n-blinds__bar",
          "data-active": _ / 6 * 100 < l ? "true" : "false"
        },
        _
      )) })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: `n-title ${r ? "n-title--xl" : ""}`, children: t.friendly_name }),
    !o && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Ouverture" }),
        /* @__PURE__ */ e("span", { class: `n-value ${r ? "n-value--xl" : ""}`, children: [
          l,
          /* @__PURE__ */ e("span", { class: "n-value__unit", children: "%" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          class: "n-slider",
          min: 0,
          max: 100,
          step: 1,
          value: l,
          style: { "--val": `${l}%` },
          onInput: (_) => d(Number(_.target.value))
        }
      ),
      /* @__PURE__ */ e("div", { style: { marginTop: "12px", display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          style: { fontSize: "12px", padding: "6px 12px" },
          onClick: () => d(l !== 0 ? 0 : 100),
          children: l !== 0 ? "Fermer" : "Ouvrir"
        }
      ) })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] }) });
}
function vt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2,
  hero: o = !1
}) {
  const a = t.state.state === "on", s = t.state.state === "unavailable", [l, p] = z(!1), d = t.state.attributes.current_power_w, u = async () => {
    if (!s) {
      p(!0);
      try {
        await n.callService("switch", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, _ = ["n-card", o ? a ? "n-card--accent" : "n-card--accent-muted" : "", a ? `breathe-${r}` : "", l ? "is-pending" : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: _, "data-hero": o ? "true" : "false", "data-on": a ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(rn, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": a,
          disabled: s || l,
          onClick: u,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: `n-title ${o ? "n-title--xl" : ""}`, children: t.friendly_name }),
    typeof d == "number" && /* @__PURE__ */ e("div", { class: "n-power", children: [
      /* @__PURE__ */ e("span", { class: `${a ? "n-power__value" : "n-power__value n-power__value--muted"} ${o ? "n-value--xl" : ""}`, children: Math.round(a ? d : 0) }),
      /* @__PURE__ */ e("span", { class: "n-power__unit", children: "W" })
    ] }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const ra = {
  door: Pn,
  garage_door: Pn,
  window: xi,
  smoke: Tn,
  gas: Tn,
  moisture: bi,
  motion: pe,
  occupancy: pe,
  presence: pe
}, oa = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, sa = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]), la = /* @__PURE__ */ new Set(["door", "garage_door", "window"]);
function xt({ entity: n, roomLabel: t, hero: i = !1 }) {
  const r = n.state.attributes.device_class ?? "", o = n.state.state === "on", a = n.state.state === "unavailable", s = ra[r] ?? fe, l = oa[r] ?? { on: "Actif", off: "Inactif" }, p = sa.has(r), d = la.has(r), u = a ? "indisponible" : o ? "on" : "off", _ = ["n-card", i ? o ? "n-card--accent" : "n-card--accent-muted" : "n-card--compact"].filter(Boolean).join(" "), m = /* @__PURE__ */ e("div", { class: _, "data-hero": i ? "true" : "false", "data-status": u, "data-alert": p ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(s, { size: i ? 22 : 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-dot", "aria-hidden": "true" })
    ] }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: `n-title ${i ? "n-title--xl" : "n-title--sm"}`, children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: a ? "Indisponible" : o ? l.on : l.off })
  ] });
  return d ? /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": o ? "true" : "false", children: m }) : m;
}
const ca = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, da = {
  heat: wi,
  cool: ki,
  heat_cool: ae,
  auto: ae,
  dry: ae,
  fan_only: ae
};
function yt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2,
  hero: o = !1
}) {
  const a = t.state.state === "unavailable", s = t.state.state, l = s !== "off" && !a, p = t.state.attributes.current_temperature, d = t.state.attributes.temperature, u = t.state.attributes.min_temp ?? 7, c = t.state.attributes.max_temp ?? 35, _ = t.state.attributes.target_temp_step ?? 0.5, [m, v] = z(null), b = m ?? d ?? p ?? 20, g = async (S) => {
    const M = Math.min(c, Math.max(u, S));
    v(M);
    try {
      await n.callService("climate", "set_temperature", {
        entity_id: t.entity_id,
        temperature: M
      });
    } finally {
      setTimeout(() => v(null), 50);
    }
  }, f = da[s] ?? ae, y = ["n-card", o ? l ? "n-card--accent" : "n-card--accent-muted" : "", l ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: y, "data-hero": o ? "true" : "false", "data-on": l ? "true" : "false", children: [
    l && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(f, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: ca[s] ?? s })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: `n-title ${o ? "n-title--xl" : ""}`, children: t.friendly_name }),
    !a && /* @__PURE__ */ e(X, { children: [
      /* @__PURE__ */ e("div", { class: "n-climate__temp", children: [
        /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: [
          Math.round(b * 10) / 10,
          /* @__PURE__ */ e("span", { class: "n-value__unit", children: "°C" })
        ] }),
        typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-muted", children: [
          "Actuelle ",
          Math.round(p * 10) / 10,
          "°C"
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-climate__steppers", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-stepper",
            "aria-label": "Diminuer",
            onClick: () => g(b - _),
            disabled: b - _ < u,
            children: /* @__PURE__ */ e(zi, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-stepper",
            "aria-label": "Augmenter",
            onClick: () => g(b + _),
            disabled: b + _ > c,
            children: /* @__PURE__ */ e(Mi, { size: 16 })
          }
        )
      ] })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function wt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "locked", s = r === "jammed", l = r === "locking" || r === "unlocking", [p, d] = z(!1), u = async () => {
    if (!(o || l || p)) {
      d(!0);
      try {
        await n.callService("lock", a ? "unlock" : "lock", {
          entity_id: t.entity_id
        });
      } finally {
        d(!1);
      }
    }
  }, c = o ? "Indisponible" : s ? "Bloquée" : l ? r === "locking" ? "Verrouillage…" : "Déverrouillage…" : a ? "Verrouillée" : "Déverrouillée";
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": a ? "true" : "false",
      "data-alert": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a ? on : yi, { size: 20 }) }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-toggle",
              role: "switch",
              "aria-checked": a,
              disabled: o || l || p,
              onClick: u,
              children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
            }
          )
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: c })
      ]
    }
  );
}
const pa = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function kt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 3
}) {
  const o = t.state.state, a = o === "unavailable", s = o === "cleaning" || o === "returning", l = o === "error", p = t.state.attributes.battery_level, [d, u] = z(!1), c = async (m) => {
    if (!(a || d)) {
      u(!0);
      try {
        await n.callService("vacuum", m, { entity_id: t.entity_id });
      } finally {
        u(!1);
      }
    }
  }, _ = ["n-card", s ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      class: _,
      "data-on": s ? "true" : "false",
      "data-alert": l ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(sn, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(pt, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: pa[o] ?? o }),
        !a && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: d || s,
              onClick: () => c("start"),
              children: [
                /* @__PURE__ */ e(le, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Lancer" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: d || o === "docked",
              onClick: () => c("return_to_base"),
              children: [
                /* @__PURE__ */ e(dt, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const ua = {
  temperature: ae,
  humidity: vi,
  power: be,
  energy: be,
  current: be,
  voltage: be,
  illuminance: ln,
  pressure: Si,
  battery: pt
};
function ha(n, t, i) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  if (i === "temperature") return { value: n, unit: t ?? "" };
  const r = Number(n);
  return Number.isFinite(r) ? { value: Math.abs(r) >= 100 ? Math.round(r).toString() : (Math.round(r * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function zt({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", r = n.state.attributes.unit_of_measurement, o = ua[i] ?? Ci, a = n.state.state === "unavailable", { value: s, unit: l } = ha(n.state.state, r, i);
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": a ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(o, { size: 18 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-sensor__readout", children: [
      /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }),
      l && /* @__PURE__ */ e("span", { class: "n-value__unit", children: l })
    ] })
  ] });
}
const _a = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire"
};
function Mt({
  hass: n,
  entity: t,
  roomLabel: i,
  hero: r = !1,
  breatheVariant: o = 4
}) {
  const a = t.state.state, s = a === "unavailable", l = a === "playing", p = a === "off" || a === "standby", d = t.state.attributes.media_title, u = t.state.attributes.media_artist, c = t.state.attributes.app_name, _ = t.state.attributes.volume_level, m = t.state.attributes.entity_picture, [v, b] = z(null), g = v ?? _ ?? 0, f = async (M, T = {}) => {
    s || await n.callService("media_player", M, {
      entity_id: t.entity_id,
      ...T
    });
  }, h = async (M) => {
    b(M);
    try {
      await f("volume_set", { volume_level: M });
    } finally {
      setTimeout(() => b(null), 50);
    }
  }, S = ["n-card", r ? l ? "n-card--accent" : "n-card--accent-muted" : "", l ? `breathe-${o}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: S, "data-hero": r ? "true" : "false", "data-on": l ? "true" : "false", children: [
    m && /* @__PURE__ */ e("div", { class: "n-media__bg", "aria-hidden": "true", children: [
      /* @__PURE__ */ e("img", { src: m, alt: "" }),
      /* @__PURE__ */ e("div", { class: "n-media__bg-overlay" })
    ] }),
    l && r && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", style: { alignItems: "center" }, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(cn, { size: 20 }) }),
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: _a[a] ?? a })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-icon-btn",
          style: { width: "36px", height: "36px", background: "transparent" },
          "aria-label": "Allumer / Éteindre",
          onClick: (M) => {
            M.stopPropagation(), f("toggle");
          },
          children: /* @__PURE__ */ e(na, { size: 18 })
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: r ? "n-title n-title--xl" : "n-title", children: t.friendly_name }),
    !p && !s && (d || u || c) && /* @__PURE__ */ e("div", { class: "n-media__track", children: [
      d && /* @__PURE__ */ e("div", { class: "n-media__title", children: d }),
      u && /* @__PURE__ */ e("div", { class: "n-muted", style: r ? { fontSize: "1rem" } : {}, children: u }),
      c && /* @__PURE__ */ e("div", { class: "n-muted", style: { fontSize: "0.75rem", marginTop: d || u ? "4px" : "0" }, children: c })
    ] }),
    !s && /* @__PURE__ */ e(X, { children: [
      /* @__PURE__ */ e("div", { class: "n-media__controls", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Précédent",
            onClick: () => f("media_previous_track"),
            children: /* @__PURE__ */ e(Ei, { size: r ? 20 : 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": l ? "Pause" : "Lecture",
            onClick: () => f("media_play_pause"),
            children: l ? /* @__PURE__ */ e(Ai, { size: r ? 24 : 18 }) : /* @__PURE__ */ e(le, { size: r ? 24 : 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => f("media_next_track"),
            children: /* @__PURE__ */ e(Pi, { size: r ? 20 : 16 })
          }
        )
      ] }),
      typeof _ == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(Ti, { size: 14 }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            class: "n-slider",
            min: 0,
            max: 1,
            step: 0.05,
            value: g,
            style: { "--val": `${g * 100}%` },
            onInput: (M) => h(Number(M.target.value))
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const fa = {
  disarmed: "Désarmée",
  armed_home: "Présence",
  armed_away: "Absence",
  armed_night: "Nuit",
  armed_vacation: "Vacances",
  armed_custom_bypass: "Personnalisé",
  pending: "En attente…",
  arming: "Armement…",
  disarming: "Désarmement…",
  triggered: "Déclenchée"
}, ga = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: Di },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: $i },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: Oi }
];
function It({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "triggered", s = r.startsWith("armed_"), l = r === "pending" || r === "arming" || r === "disarming", [p, d] = z(!1), u = async (c) => {
    if (!(o || p)) {
      d(!0);
      try {
        await n.callService("alarm_control_panel", c, { entity_id: t.entity_id });
      } finally {
        d(!1);
      }
    }
  };
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": s ? "true" : "false",
      "data-alert": a ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(fe, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: fa[r] ?? r })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          ga.map(({ id: c, service: _, label: m, Icon: v }) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn",
              "data-active": r === c ? "true" : "false",
              disabled: p || l,
              onClick: () => u(_),
              children: [
                /* @__PURE__ */ e(v, { size: 14 }),
                /* @__PURE__ */ e("span", { children: m })
              ]
            },
            c
          )),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn n-mode-btn--disarm",
              disabled: p || l || r === "disarmed",
              onClick: () => u("alarm_disarm"),
              children: /* @__PURE__ */ e("span", { children: "Désarmer" })
            }
          )
        ] })
      ]
    }
  );
}
const ma = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function ba(n, t) {
  const i = n.state.attributes.entity_picture;
  if (!i) return null;
  if (i.startsWith("http")) return i;
  const r = t.hassUrl?.("");
  return r ? r.replace(/\/$/, "") + i : i;
}
function St({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "recording" || r === "streaming", [s, l] = z(0), [p, d] = z(!1), u = ba(t, n), c = u ? `${u}${u.includes("?") ? "&" : "?"}t=${s}` : null;
  return J(() => {
    d(!1);
  }, [u]), /* @__PURE__ */ e("div", { class: "n-card n-card--camera", "data-on": a ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-camera__frame", children: [
      c && !p ? /* @__PURE__ */ e(
        "img",
        {
          class: "n-camera__img",
          src: c,
          alt: t.friendly_name,
          loading: "lazy",
          onError: () => d(!0)
        }
      ) : /* @__PURE__ */ e("div", { class: "n-camera__placeholder", "aria-hidden": "true", style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ e(Ae, { size: 28 }),
        p && /* @__PURE__ */ e("span", { style: { fontSize: "10px", marginTop: "4px", opacity: 0.7 }, children: "Erreur de flux" })
      ] }),
      a && /* @__PURE__ */ e("span", { class: "n-camera__live", children: "● LIVE" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-card__head n-card__head--inline", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ae, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          disabled: o || !c,
          onClick: () => {
            l(Date.now()), d(!1);
          },
          children: "Rafraîchir"
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: ma[r] ?? r })
  ] });
}
function Ct({ hass: n, entity: t, roomLabel: i, breatheVariant: r = 2 }) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", s = t.state.attributes.percentage, l = typeof s == "number", [p, d] = z(!1), [u, c] = z(null), _ = u ?? (l ? s : o ? 100 : 0), m = async () => {
    if (!a) {
      d(!0);
      try {
        await n.callService("fan", "toggle", { entity_id: t.entity_id });
      } finally {
        d(!1);
      }
    }
  }, v = async (g) => {
    c(g);
    try {
      await n.callService("fan", "set_percentage", {
        entity_id: t.entity_id,
        percentage: g
      });
    } finally {
      setTimeout(() => c(null), 50);
    }
  }, b = ["n-card", o ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: b, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(dn, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: a || p,
          onClick: m,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    o && l && !a && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Vitesse" }),
        /* @__PURE__ */ e("span", { class: "n-value", children: [
          _,
          /* @__PURE__ */ e("span", { class: "n-value__unit", children: "%" })
        ] })
      ] }),
      /* @__PURE__ */ e(
        "input",
        {
          type: "range",
          class: "n-slider",
          min: 0,
          max: 100,
          step: 1,
          value: _,
          style: { "--val": `${_}%` },
          onInput: (g) => v(Number(g.target.value))
        }
      )
    ] }),
    !o && !a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Arrêté" }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function At({ hass: n, entity: t, roomLabel: i }) {
  const r = t.domain === "scene", o = t.state.state === "unavailable", [a, s] = z(!1), [l, p] = z(!1), d = async () => {
    if (!(o || a)) {
      s(!0);
      try {
        await n.callService(r ? "scene" : "script", "turn_on", {
          entity_id: t.entity_id
        }), p(!0), setTimeout(() => p(!1), 600);
      } finally {
        s(!1);
      }
    }
  };
  return /* @__PURE__ */ e(
    "div",
    {
      class: `n-card n-card--compact${l ? " is-flashing" : ""}`,
      "data-on": l ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: r ? /* @__PURE__ */ e(pn, { size: 18 }) : /* @__PURE__ */ e(le, { size: 16 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: r ? "Scène" : "Script" })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-pill-btn n-scene__activate",
            disabled: o || a,
            onClick: d,
            children: [
              /* @__PURE__ */ e(le, { size: 14 }),
              /* @__PURE__ */ e("span", { children: r ? "Activer" : "Lancer" })
            ]
          }
        )
      ]
    }
  );
}
const va = {
  "clear-night": { label: "Nuit claire", Icon: _t },
  cloudy: { label: "Nuageux", Icon: ut },
  exceptional: { label: "Conditions extrêmes", Icon: Re },
  fog: { label: "Brouillard", Icon: Ii },
  hail: { label: "Grêle", Icon: je },
  lightning: { label: "Orage", Icon: Re },
  "lightning-rainy": { label: "Orage pluvieux", Icon: Re },
  partlycloudy: { label: "Éclaircies", Icon: ht },
  pouring: { label: "Pluie battante", Icon: Dn },
  rainy: { label: "Pluvieux", Icon: Dn },
  snowy: { label: "Neigeux", Icon: je },
  "snowy-rainy": { label: "Neige et pluie", Icon: je },
  sunny: { label: "Ensoleillé", Icon: ln },
  windy: { label: "Venteux", Icon: $n },
  "windy-variant": { label: "Venteux", Icon: $n }
};
function ue(n) {
  return va[n] ?? { label: n || "—", Icon: ut };
}
function Et(n, t) {
  if (n == null || n === "") return "—";
  const i = Number(n);
  return Number.isFinite(i) ? `${n}${t}` : "—";
}
function Pt({ entity: n, roomLabel: t }) {
  const i = n.state.state === "unavailable" || n.state.state === "unknown", { label: r, Icon: o } = ue(n.state.state), a = n.state.attributes.temperature_unit ?? "°", s = Et(n.state.attributes.temperature, a), l = n.state.attributes.humidity;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact n-weather", "data-status": i ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble n-weather__icon", children: /* @__PURE__ */ e(o, { size: 20 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-weather__readout", children: /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }) }),
    /* @__PURE__ */ e("div", { class: "n-weather__meta", children: [
      /* @__PURE__ */ e("span", { children: r }),
      typeof l == "number" && Number.isFinite(l) && /* @__PURE__ */ e(X, { children: [
        /* @__PURE__ */ e("span", { class: "n-weather__sep", children: "•" }),
        /* @__PURE__ */ e("span", { children: [
          Math.round(l),
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Nn({ entity: n }) {
  if (n.state.state === "unavailable" || n.state.state === "unknown") return null;
  const { label: t, Icon: i } = ue(n.state.state), r = n.state.attributes.temperature_unit ?? "°", o = Et(n.state.attributes.temperature, r);
  return /* @__PURE__ */ e("div", { class: "nido-weather-pill", title: n.friendly_name, children: [
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__icon", children: /* @__PURE__ */ e(i, { size: 18 }) }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__temp", children: o }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__sep" }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__label", children: t })
  ] });
}
function xa(n, t) {
  const i = t.split(".")[1] || "", r = Object.values(n.states).filter((l) => l.entity_id.startsWith("sensor."));
  let o, a, s;
  for (const l of r)
    l.entity_id.endsWith("_next_rain") && (l.entity_id.includes(i) || !o) && (o = l), l.entity_id.endsWith("_weather_alert") && (l.entity_id.includes(i) || !a) && (a = l), l.entity_id.endsWith("_uv") && (l.entity_id.includes(i) || !s) && (s = l);
  return { nextRain: o, weatherAlert: a, uvIndex: s };
}
function ya({ hass: n, weatherEntityId: t, onClose: i }) {
  const [r, o] = z([]), [a, s] = z([]), l = n.states[t], { nextRain: p, weatherAlert: d, uvIndex: u } = xa(n, t);
  if (J(() => {
    let f = !1;
    async function h() {
      try {
        const y = async (T) => {
          try {
            const N = await n.callWS({
              type: "call_service",
              domain: "weather",
              service: "get_forecasts",
              service_data: { type: T },
              target: { entity_id: t },
              return_response: !0
            });
            return N?.response?.[t]?.forecast || N?.[t]?.forecast || [];
          } catch (N) {
            return console.warn(`Failed to fetch ${T} forecast:`, N), [];
          }
        }, [S, M] = await Promise.all([
          y("daily"),
          y("hourly")
        ]);
        if (f) return;
        o(S), s(M);
      } catch (y) {
        console.error("Failed to fetch weather forecasts", y);
      }
    }
    return l?.attributes.forecast ? o(l.attributes.forecast) : h(), () => {
      f = !0;
    };
  }, [n, t]), !l) return null;
  const c = ue(l.state), _ = l.attributes.temperature_unit || "°C", m = d?.state, v = m === "Rouge" ? "#ff4d4f" : m === "Orange" ? "#faad14" : m === "Jaune" ? "#fadb14" : null, b = d?.attributes ? Object.entries(d.attributes).filter(([f, h]) => h === m && f !== "friendly_name" && f !== "icon").map(([f]) => f).join(", ") : "", g = b ? `Vigilance ${m} : ${b}` : `Vigilance ${m}`;
  return /* @__PURE__ */ e("div", { class: "nido-weather-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__backdrop", onClick: i }),
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-weather-panel__header", children: [
        /* @__PURE__ */ e("h2", { children: "Météo Détaillée" }),
        /* @__PURE__ */ e("button", { type: "button", class: "nido-weather-panel__close", onClick: i, "aria-label": "Fermer", children: /* @__PURE__ */ e(oe, { size: 20 }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-weather-panel__scroll", children: [
        /* @__PURE__ */ e("div", { class: "nido-wp-current", children: [
          /* @__PURE__ */ e(c.Icon, { size: 48 }),
          /* @__PURE__ */ e("div", { class: "nido-wp-current-info", children: [
            /* @__PURE__ */ e("span", { class: "nido-wp-temp", children: [
              l.attributes.temperature,
              _
            ] }),
            /* @__PURE__ */ e("span", { class: "nido-wp-desc", children: c.label })
          ] })
        ] }),
        v && /* @__PURE__ */ e("div", { class: "nido-wp-alert", style: { backgroundColor: `${v}22`, color: v, border: `1px solid ${v}55` }, children: [
          /* @__PURE__ */ e(ft, { size: 20 }),
          /* @__PURE__ */ e("span", { children: g })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-wp-grid", children: [
          p && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Ki, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Pluie dans l'heure" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: p.state === "unknown" ? "Pas de pluie prévue" : new Date(p.state).getTime() > Date.now() ? `Prévue à ${new Date(p.state).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Pas de pluie prévue" })
          ] }),
          u && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Gi, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Index UV" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: u.state })
          ] })
        ] }),
        a.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prochaines heures" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-hourly", children: a.slice(0, 24).map((f, h) => {
            const y = ue(f.condition), S = new Date(f.datetime);
            return /* @__PURE__ */ e("div", { class: "nido-wp-hour", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-time", children: [
                S.getHours(),
                "h"
              ] }),
              /* @__PURE__ */ e(y.Icon, { size: 24 }),
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-temp", children: [
                f.temperature,
                "°"
              ] }),
              (f.precipitation ?? 0) > 0 && /* @__PURE__ */ e("span", { class: "nido-wp-hour-precip", children: [
                f.precipitation,
                "mm"
              ] })
            ] }, h);
          }) })
        ] }),
        r.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prévisions (5 jours)" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-daily", children: r.slice(0, 5).map((f, h) => {
            const y = ue(f.condition), S = new Date(f.datetime), M = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(S);
            return /* @__PURE__ */ e("div", { class: "nido-wp-day", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-day-name", children: h === 0 ? "Aujourd'hui" : M }),
              /* @__PURE__ */ e(y.Icon, { size: 24 }),
              /* @__PURE__ */ e("div", { class: "nido-wp-day-temps", children: [
                /* @__PURE__ */ e("span", { class: "nido-wp-day-min", children: [
                  f.templow,
                  "°"
                ] }),
                /* @__PURE__ */ e("div", { class: "nido-wp-day-bar" }),
                /* @__PURE__ */ e("span", { class: "nido-wp-day-max", children: [
                  f.temperature,
                  "°"
                ] })
              ] })
            ] }, h);
          }) })
        ] })
      ] })
    ] })
  ] });
}
function Tt(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? Zi : /(chambre|bedroom)/.test(t) ? qi : /(cuisine|kitchen)/.test(t) ? Yi : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? Ji : /(entrée|entree|hall|couloir)/.test(t) ? Xi : dt;
}
const wa = {
  light: "Lumières",
  switch: "Prises",
  cover: "Volets",
  binary_sensor: "Détecteurs",
  climate: "Climat",
  lock: "Serrures",
  vacuum: "Aspirateurs",
  sensor: "Capteurs",
  media_player: "Média",
  alarm_control_panel: "Alarmes",
  camera: "Caméras",
  fan: "Ventilateurs",
  scene: "Scènes",
  script: "Scripts",
  weather: "Météo",
  calendar: "Calendriers"
};
function ka({ hass: n, notifications: t, onClose: i }) {
  const r = async (a) => {
    if (n)
      try {
        await n.connection.sendMessagePromise({
          type: "fire_event",
          event_type: "nido_notification_event",
          event_data: { action: "dismiss", id: a }
        });
      } catch (s) {
        console.warn("Échec de la suppression via WebSocket, tentative via service...", s);
        try {
          await n.callService("script", "nido_dismiss_notification", { id: a });
        } catch (l) {
          console.error("Toutes les méthodes de suppression ont échoué", l);
        }
      }
  }, o = async () => {
    if (!(!n || t.length === 0))
      try {
        await Promise.all(t.map((a) => r(a.id)));
      } catch (a) {
        console.error("Erreur lors de la suppression de toutes les notifications", a);
      }
  };
  return /* @__PURE__ */ e("div", { class: "nido-notification-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__backdrop", onClick: i }),
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-notification-panel__header", children: [
        /* @__PURE__ */ e("div", { class: "nido-notification-panel__title-group", children: [
          /* @__PURE__ */ e("h2", { children: "Notifications" }),
          t.length > 0 && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-notification-panel__clear-all",
              onClick: o,
              children: "Tout supprimer"
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "nido-notification-panel__close",
            onClick: i,
            "aria-label": "Fermer",
            children: /* @__PURE__ */ e(oe, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: t.length === 0 ? /* @__PURE__ */ e("div", { class: "nido-notification-empty", children: [
        /* @__PURE__ */ e("div", { class: "nido-notification-empty__icon", children: /* @__PURE__ */ e(ct, { size: 48 }) }),
        /* @__PURE__ */ e("p", { children: "Aucune notification pour le moment." })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-notification-list", children: [...t].reverse().map((a) => {
        const s = a.type === "warning" ? ft : a.type === "success" ? ea : Qi, l = `nido-notification-item--${a.type}`, d = new Date(a.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return /* @__PURE__ */ e("div", { class: `nido-notification-item ${l}`, children: [
          /* @__PURE__ */ e("div", { class: "nido-notification-item__icon", children: /* @__PURE__ */ e(s, { size: 20 }) }),
          /* @__PURE__ */ e("div", { class: "nido-notification-item__body", children: [
            /* @__PURE__ */ e("div", { class: "nido-notification-item__head", children: [
              /* @__PURE__ */ e("span", { class: "nido-notification-item__title", children: a.title }),
              /* @__PURE__ */ e("span", { class: "nido-notification-item__time", children: d })
            ] }),
            /* @__PURE__ */ e("p", { class: "nido-notification-item__message", children: a.message })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-notification-item__dismiss",
              onClick: () => r(a.id),
              "aria-label": "Supprimer",
              children: /* @__PURE__ */ e(oe, { size: 14 })
            }
          )
        ] }, a.id);
      }) }) })
    ] })
  ] });
}
function za(n) {
  const t = n.state.attributes.brightness;
  return typeof t != "number" ? 100 : Math.round(t / 255 * 100);
}
function Ma({ hass: n, entity: t, roomName: i }) {
  const [r, o] = z(!1), a = za(t), s = async () => {
    o(!0);
    try {
      await n.callService("light", "turn_off", { entity_id: t.entity_id });
    } finally {
      o(!1);
    }
  };
  return /* @__PURE__ */ e("div", { class: `nido-lights-row ${r ? "is-pending" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "nido-lights-row__icon", children: /* @__PURE__ */ e(ge, { size: 18 }) }),
    /* @__PURE__ */ e("div", { class: "nido-lights-row__body", children: [
      /* @__PURE__ */ e("div", { class: "nido-lights-row__name", children: t.friendly_name }),
      i && /* @__PURE__ */ e("div", { class: "nido-lights-row__room", children: i })
    ] }),
    /* @__PURE__ */ e("div", { class: "nido-lights-row__pct", children: [
      a,
      "%"
    ] }),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        class: "n-toggle",
        role: "switch",
        "aria-checked": !0,
        disabled: r,
        onClick: s,
        children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
      }
    )
  ] });
}
function Ia({ hass: n, lights: t, areas: i, onClose: r }) {
  const [o, a] = z(!1), s = new Map(i.map((p) => [p.area_id, p.name])), l = async () => {
    a(!0);
    try {
      await Promise.all(
        t.map(
          (p) => n.callService("light", "turn_off", { entity_id: p.entity_id })
        )
      );
    } finally {
      a(!1);
    }
  };
  return /* @__PURE__ */ e("div", { class: "nido-lights-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__backdrop", onClick: r }),
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-notification-panel__header", children: [
        /* @__PURE__ */ e("div", { class: "nido-lights-panel__title", children: [
          /* @__PURE__ */ e("span", { children: "Lumières allumées" }),
          /* @__PURE__ */ e("span", { class: "nido-lights-panel__count", children: t.length })
        ] }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "nido-notification-panel__close",
            onClick: r,
            "aria-label": "Fermer",
            children: /* @__PURE__ */ e(oe, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: /* @__PURE__ */ e("div", { class: "nido-lights-list", children: t.map((p) => /* @__PURE__ */ e(
        Ma,
        {
          hass: n,
          entity: p,
          roomName: p.area_id ? s.get(p.area_id) ?? "" : ""
        },
        p.entity_id
      )) }) }),
      t.length > 1 && /* @__PURE__ */ e("div", { class: "nido-lights-panel__footer", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "nido-lights-panel__all-off",
          disabled: o,
          onClick: l,
          children: "Tout éteindre"
        }
      ) })
    ] })
  ] });
}
const Fe = "nido.shoppingColor", Ln = "nido.shoppingSize";
function jn(n, t, i) {
  if (t.length < 2) return;
  n.lineWidth = i, n.lineCap = "round", n.lineJoin = "round", n.beginPath(), n.moveTo(t[0][0], t[0][1]);
  for (let o = 1; o < t.length - 1; o++) {
    const a = (t[o][0] + t[o + 1][0]) / 2, s = (t[o][1] + t[o + 1][1]) / 2;
    n.quadraticCurveTo(t[o][0], t[o][1], a, s);
  }
  const r = t[t.length - 1];
  n.lineTo(r[0], r[1]), n.stroke();
}
function Sa({ hass: n, onClose: t, topicBase: i = "shopping" }) {
  const r = Y(null), o = Y(null), a = Y([]), s = Y(null), l = Y(null), p = Y({ w: 0, h: 0 }), d = Y(null), u = Y("nido-" + Math.random().toString(36).slice(2, 8)), [c, _] = z(() => localStorage.getItem(Fe) || "#1a1410"), [m, v] = z(() => parseInt(localStorage.getItem(Ln) || "4", 10));
  J(() => {
    if (localStorage.getItem(Fe)) return;
    const k = o.current;
    if (!k) return;
    const C = getComputedStyle(k).getPropertyValue("--ink-1").trim();
    if (!C) return;
    const P = document.createElement("div");
    P.style.color = C, document.body.appendChild(P);
    const F = getComputedStyle(P).color;
    document.body.removeChild(P);
    const I = F.match(/\d+/g);
    if (I && I.length >= 3) {
      const R = "#" + [+I[0], +I[1], +I[2]].map((A) => A.toString(16).padStart(2, "0")).join("");
      _(R);
    }
  }, []);
  const b = Y(c), g = Y(m);
  J(() => {
    b.current = c, localStorage.setItem(Fe, c);
  }, [c]), J(() => {
    g.current = m, localStorage.setItem(Ln, String(m));
  }, [m]);
  const f = q((k) => [k[0] * p.current.w, k[1] * p.current.h], []), h = q(() => {
    const k = r.current;
    if (!k) return;
    const C = k.getContext("2d");
    if (C) {
      C.clearRect(0, 0, p.current.w, p.current.h);
      for (const P of a.current)
        C.strokeStyle = P.color, jn(C, P.points.map(f), P.size);
      s.current && (C.strokeStyle = s.current.color, jn(C, s.current.points.map(f), s.current.size));
    }
  }, [f]), y = q(() => {
    const k = r.current, C = o.current;
    if (!k || !C) return;
    const P = C.getBoundingClientRect();
    if (P.width === 0 || P.height === 0) return;
    const F = window.devicePixelRatio || 1;
    k.width = Math.round(P.width * F), k.height = Math.round(P.height * F);
    const I = k.getContext("2d");
    I && I.setTransform(F, 0, 0, F, 0, 0), p.current = { w: P.width, h: P.height }, h();
  }, [h]);
  J(() => {
    y();
    const k = new ResizeObserver(y);
    return o.current && k.observe(o.current), () => k.disconnect();
  }, [y]), J(() => {
    let k = !1;
    return (async () => {
      if ("wakeLock" in navigator)
        try {
          const C = await navigator.wakeLock.request("screen");
          k ? C.release() : d.current = C;
        } catch {
        }
    })(), () => {
      if (k = !0, d.current) {
        try {
          d.current.release();
        } catch {
        }
        d.current = null;
      }
    };
  }, []);
  const S = q((k) => `${i}/${k}`, [i]), M = q(async () => {
    const k = JSON.stringify({
      strokes: a.current,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedBy: u.current
    });
    if (!(k.length > 2e5))
      try {
        await n.callService("mqtt", "publish", {
          topic: S("state"),
          payload: k,
          qos: 0,
          retain: !0
        });
      } catch (C) {
        console.warn("[shopping] state publish failed", C);
      }
  }, [n, S]), T = q(async (k) => {
    try {
      await n.callService("mqtt", "publish", {
        topic: S("strokes/add"),
        payload: JSON.stringify(k),
        qos: 0,
        retain: !1
      });
    } catch (C) {
      console.warn("[shopping] add publish failed", C);
    }
    M();
  }, [n, S, M]), N = q(async (k) => {
    try {
      await n.callService("mqtt", "publish", {
        topic: S("strokes/undo"),
        payload: JSON.stringify({ id: k, by: u.current }),
        qos: 0,
        retain: !1
      });
    } catch (C) {
      console.warn("[shopping] undo publish failed", C);
    }
    M();
  }, [n, S, M]), H = q(async () => {
    try {
      await n.callService("mqtt", "publish", {
        topic: S("clear"),
        payload: JSON.stringify({ by: u.current, ts: Date.now() }),
        qos: 0,
        retain: !1
      });
    } catch (k) {
      console.warn("[shopping] clear publish failed", k);
    }
    M();
  }, [n, S, M]);
  J(() => {
    let k = null, C = !1;
    const P = (F) => {
      try {
        const I = F.topic, R = F.payload ? JSON.parse(F.payload) : null;
        if (!R) return;
        if (I.endsWith("/state"))
          Array.isArray(R.strokes) && R.updatedBy !== u.current && (a.current = R.strokes, h());
        else if (I.endsWith("/strokes/add")) {
          if (R.by === u.current) return;
          R.points && R.points.length >= 2 && (a.current.push(R), h());
        } else if (I.endsWith("/strokes/undo")) {
          if (R.by === u.current) return;
          const A = a.current.findIndex((E) => E.id === R.id);
          A >= 0 && (a.current.splice(A, 1), h());
        } else if (I.endsWith("/clear")) {
          if (R.by === u.current) return;
          a.current = [], h();
        }
      } catch (I) {
        console.warn("[shopping] parse error", I);
      }
    };
    return (async () => {
      try {
        const F = await n.connection.subscribeMessage(P, {
          type: "mqtt/subscribe",
          topic: `${i}/#`
        });
        if (C)
          try {
            F();
          } catch {
          }
        else
          k = F;
      } catch (F) {
        console.error("[shopping] mqtt subscribe failed", F);
      }
    })(), () => {
      if (C = !0, k)
        try {
          k();
        } catch {
        }
    };
  }, [n, i, h]);
  const L = q((k) => {
    const P = r.current.getBoundingClientRect();
    return [(k.clientX - P.left) / P.width, (k.clientY - P.top) / P.height];
  }, []), Z = q((k) => {
    k.pointerType === "touch" && (k.width > 40 || k.height > 40) || l.current === null && (l.current = k.pointerId, r.current?.setPointerCapture(k.pointerId), s.current = {
      id: u.current + "-" + Date.now(),
      by: u.current,
      color: b.current,
      size: g.current,
      points: [L(k)],
      t: Date.now()
    }, h(), k.preventDefault());
  }, [L, h]), ne = q((k) => {
    if (k.pointerId !== l.current) return;
    const C = s.current;
    C && (C.points.push(L(k)), h());
  }, [L, h]), Q = q((k) => {
    if (k.pointerId !== l.current) return;
    l.current = null;
    const C = s.current;
    if (s.current = null, !C || C.points.length < 2) {
      h();
      return;
    }
    a.current.push(C), T(C), h();
  }, [h, T]), G = q(() => {
    for (let k = a.current.length - 1; k >= 0; k--)
      if (a.current[k].by === u.current) {
        const C = a.current.splice(k, 1)[0];
        N(C.id), h();
        return;
      }
  }, [N, h]), re = q(() => {
    confirm("Effacer toute la liste ?") && (a.current = [], h(), H());
  }, [h, H]);
  return /* @__PURE__ */ e("div", { class: "nido-shopping-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-shopping-panel__backdrop", onClick: t }),
    /* @__PURE__ */ e("div", { class: "nido-shopping-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-shopping-panel__header", children: [
        /* @__PURE__ */ e("h2", { children: "Liste de courses" }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "nido-shopping-panel__close",
            onClick: t,
            "aria-label": "Fermer",
            children: /* @__PURE__ */ e(oe, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-shopping-panel__board", ref: o, children: [
        /* @__PURE__ */ e(
          "canvas",
          {
            ref: r,
            class: "nido-shopping-panel__canvas",
            onPointerDown: Z,
            onPointerMove: ne,
            onPointerUp: Q,
            onPointerCancel: Q,
            onPointerLeave: Q
          }
        ),
        /* @__PURE__ */ e("div", { class: "nido-shopping-panel__toolbar", "data-no-drag": "true", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-shopping-panel__tool",
              onClick: G,
              "aria-label": "Annuler mon dernier trait",
              title: "Annuler",
              children: "↶"
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              type: "color",
              class: "nido-shopping-panel__color",
              value: c,
              onInput: (k) => _(k.target.value),
              "aria-label": "Couleur"
            }
          ),
          /* @__PURE__ */ e(
            "input",
            {
              type: "range",
              class: "nido-shopping-panel__size",
              min: 2,
              max: 12,
              step: 1,
              value: m,
              onInput: (k) => v(parseInt(k.target.value, 10)),
              "aria-label": "Épaisseur"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-shopping-panel__tool nido-shopping-panel__tool--danger",
              onClick: re,
              "aria-label": "Tout effacer",
              title: "Tout effacer",
              children: "🗑"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Rn = [
  "var(--accent)",
  "var(--positive)",
  "#4A8FE0",
  "#E06B4A",
  "#8F4AE0",
  "#4AE0B5"
];
function Dt(n) {
  return Rn[n % Rn.length];
}
function Ee(n) {
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}
function $t(n) {
  if (n.includes("T") || n.includes(" ") && n.includes(":"))
    return { date: new Date(n.replace(" ", "T")), allDay: !1 };
  const [t, i, r] = n.split("-").map(Number);
  return { date: new Date(t, i - 1, r), allDay: !0 };
}
function Ca(n, t) {
  const i = Ee(t), r = [], o = Array.isArray(n) ? { unknown: n } : n;
  for (const [a, s] of Object.entries(o)) {
    if (!Array.isArray(s)) {
      console.warn(`[parseHassEvents] Expected array for ${a}, got:`, typeof s);
      continue;
    }
    for (const l of s) {
      let p = "";
      if (typeof l.start == "string" ? p = l.start : l.start && (p = l.start.dateTime ?? l.start.date ?? ""), !p) continue;
      const { date: d, allDay: u } = $t(p), c = Math.round(
        (Ee(d).getTime() - i.getTime()) / 864e5
      );
      r.push({
        id: `${a}-${l.uid ?? l.summary}-${p}`,
        calendarId: a === "unknown" ? "calendar" : a,
        title: l.summary,
        dayOffset: c,
        time: u ? void 0 : `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`,
        allDay: u
      });
    }
  }
  return r.sort((a, s) => a.dayOffset !== s.dayOffset ? a.dayOffset - s.dayOffset : a.allDay && !s.allDay ? -1 : !a.allDay && s.allDay ? 1 : (a.time ?? "").localeCompare(s.time ?? ""));
}
function Aa(n, t) {
  const i = n.message, r = n.start_time;
  if (!i || !r) return null;
  const { date: o, allDay: a } = $t(r), s = Math.round(
    (Ee(o).getTime() - Ee(t).getTime()) / 864e5
  );
  return {
    title: i,
    allDay: a,
    dayOffset: s,
    time: a ? void 0 : `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`
  };
}
const Ea = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function Pa({ hass: n, calendarEntities: t, onClose: i }) {
  const [r, o] = z(null), a = /* @__PURE__ */ new Date(), s = new Map(
    [...t].sort((d, u) => d.entity_id.localeCompare(u.entity_id)).map((d, u) => [d.entity_id, Dt(u)])
  );
  J(() => {
    if (t.length === 0) {
      o([]);
      return;
    }
    const d = /* @__PURE__ */ new Date();
    d.setHours(0, 0, 0, 0);
    const u = new Date(d);
    u.setDate(u.getDate() + 7);
    const c = d.toISOString(), _ = u.toISOString();
    console.log(`[CalendarPanel] Fetching events from ${c} to ${_}`);
    const m = async (v) => {
      try {
        const b = await n.callWS({
          type: "calendar/events",
          entity_id: v,
          start_date_time: c,
          end_date_time: _
        });
        return { entity_id: v, events: b };
      } catch (b) {
        if (b?.code === "unknown_command") {
          console.warn(`[CalendarPanel] WS command unknown, trying service call for ${v}`);
          try {
            const g = await n.callWS({
              type: "call_service",
              domain: "calendar",
              service: "get_events",
              service_data: {
                start_date_time: c,
                end_date_time: _
              },
              target: { entity_id: v },
              return_response: !0
            }), f = g?.response?.[v]?.events || g?.[v]?.events || [];
            return { entity_id: v, events: f };
          } catch (g) {
            return console.error(`[CalendarPanel] Service call failed for ${v}:`, g), { entity_id: v, events: [] };
          }
        }
        return console.error(`[CalendarPanel] Error for ${v}:`, b), { entity_id: v, events: [] };
      }
    };
    Promise.all(t.map((v) => m(v.entity_id))).then((v) => {
      const b = {};
      for (const f of v)
        b[f.entity_id] = f.events;
      console.log("[CalendarPanel] Combined response:", b);
      const g = Ca(b, a);
      console.log("[CalendarPanel] Parsed events:", g), o(g);
    });
  }, []);
  const l = Array.from({ length: 7 }, (d, u) => {
    const c = new Date(a);
    c.setDate(a.getDate() + u);
    const _ = (r ?? []).filter((m) => m.dayOffset === u);
    return { date: c, offset: u, events: _ };
  }), p = r ? [...new Set(r.filter((d) => d.dayOffset >= 0 && d.dayOffset < 7).map((d) => d.calendarId))] : [];
  return /* @__PURE__ */ e("div", { class: "nido-notification-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__backdrop", onClick: i }),
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-notification-panel__header", children: [
        /* @__PURE__ */ e("div", { class: "nido-lights-panel__title", children: /* @__PURE__ */ e("span", { children: "Agenda" }) }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "nido-notification-panel__close",
            onClick: i,
            "aria-label": "Fermer",
            children: /* @__PURE__ */ e(oe, { size: 20 })
          }
        )
      ] }),
      p.length > 0 && /* @__PURE__ */ e("div", { class: "nido-cal-panel__legend", children: p.map((d) => /* @__PURE__ */ e("div", { class: "nido-cal-panel__legend-item", children: [
        /* @__PURE__ */ e(
          "span",
          {
            class: "nido-cal-panel__legend-dot",
            style: { background: s.get(d) ?? "var(--ink-3)" }
          }
        ),
        /* @__PURE__ */ e("span", { children: t.find((u) => u.entity_id === d)?.friendly_name ?? d })
      ] }, d)) }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: r === null ? /* @__PURE__ */ e("div", { class: "nido-cal-panel__loading", children: "Chargement…" }) : /* @__PURE__ */ e("div", { class: "nido-cal-panel__days", children: l.map(({ date: d, offset: u, events: c }) => /* @__PURE__ */ e(
        "div",
        {
          class: `nido-cal-panel__day ${u === 0 ? "is-today" : ""}`,
          children: [
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__badge", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-day", children: Ea[d.getDay()] }),
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-num", children: d.getDate() })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__events", children: c.length === 0 ? /* @__PURE__ */ e("span", { class: "nido-cal-panel__empty", children: "—" }) : c.map((_) => /* @__PURE__ */ e("div", { class: "nido-cal-panel__event", children: [
              /* @__PURE__ */ e(
                "span",
                {
                  class: "nido-cal-panel__event-dot",
                  style: { background: s.get(_.calendarId) ?? "var(--ink-3)" }
                }
              ),
              /* @__PURE__ */ e("div", { class: "nido-cal-panel__event-body", children: /* @__PURE__ */ e("span", { class: "nido-cal-panel__event-title", children: _.title }) }),
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__event-time", children: _.allDay ? "Journée" : _.time })
            ] }, _.id)) })
          ]
        },
        u
      )) }) })
    ] })
  ] });
}
const Ta = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function Da(n, t) {
  return n === 0 ? "Aujourd'hui" : n === 1 ? "Demain" : `${Ta[t.getDay()]} ${t.getDate()}`;
}
function Ot({ hass: n, entity: t, roomLabel: i, hero: r = !1, calendarEntities: o }) {
  const [a, s] = z(!1), p = [...o].sort((v, b) => v.entity_id.localeCompare(b.entity_id)).map((v) => v.entity_id).indexOf(t.entity_id), d = Dt(p >= 0 ? p : 0), u = /* @__PURE__ */ new Date(), c = Aa(t.state.attributes, u), _ = c ? (() => {
    const v = new Date(u);
    return v.setDate(u.getDate() + c.dayOffset), v;
  })() : null, m = ["n-card", r ? "n-card--accent-muted" : "n-card--default", "nido-cal-widget"].join(" ");
  return /* @__PURE__ */ e(X, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        class: m,
        "data-hero": r ? "true" : "false",
        "data-on": "false",
        onClick: () => s(!0),
        children: [
          /* @__PURE__ */ e("div", { class: "n-card__head", children: [
            /* @__PURE__ */ e("div", { class: "n-icon-bubble nido-cal-widget__bubble", style: { "--cal-color": d }, children: /* @__PURE__ */ e(gt, { size: r ? 22 : 18 }) }),
            /* @__PURE__ */ e("span", { class: "n-eyebrow", children: i || t.friendly_name })
          ] }),
          c && _ ? /* @__PURE__ */ e(X, { children: [
            /* @__PURE__ */ e("div", { class: r ? "nido-cal-widget__title n-title--xl" : "nido-cal-widget__title", children: c.title }),
            /* @__PURE__ */ e("div", { class: "nido-cal-widget__when", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__day", children: Da(c.dayOffset, _) }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__sep", children: "·" }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__time", children: c.allDay ? "Journée" : c.time })
            ] })
          ] }) : /* @__PURE__ */ e("div", { class: "n-muted", children: "Rien à venir" })
        ]
      }
    ),
    a && /* @__PURE__ */ e(
      Pa,
      {
        hass: n,
        calendarEntities: o,
        onClose: () => s(!1)
      }
    )
  ] });
}
const $a = /* @__PURE__ */ new Set([
  "light",
  "cover",
  "switch",
  "binary_sensor",
  "climate",
  "lock",
  "vacuum",
  "sensor",
  "media_player",
  "alarm_control_panel",
  "camera",
  "fan",
  "scene",
  "script",
  "weather",
  "calendar"
]);
function Oa(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function Na(n, t) {
  const i = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(mt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(bt, { ...i, hero: t.hero }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(vt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(xt, { entity: n, roomLabel: t.areaName, hero: t.hero }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(yt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(wt, { ...i }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(kt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(zt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(Mt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(It, { ...i }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(St, { ...i }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(Ct, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(At, { ...i }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(Pt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(Ot, { hass: t.hass, entity: n, roomLabel: t.areaName, hero: t.hero, calendarEntities: t.calendarEntities }, n.entity_id);
    default:
      return null;
  }
}
function La(n) {
  return n.replace(/[^\x00-\x7F]/g, "_").toLowerCase();
}
function ja(n, t) {
  const i = new Map(t.map((o) => [La(o.name), o.area_id])), r = /* @__PURE__ */ new Map();
  for (const o of Object.values(n.states)) {
    if (!o.entity_id.startsWith("sensor.")) continue;
    const a = o.state.toLowerCase(), s = i.get(a);
    if (!s) continue;
    const l = o.entity_id.slice(7), p = l.slice(l.lastIndexOf("_") + 1);
    if (!p) continue;
    const u = n.states[`person.${p}`]?.attributes.entity_picture, c = r.get(s) ?? /* @__PURE__ */ new Map();
    c.has(p) || c.set(p, { name: p, picture: u }), r.set(s, c);
  }
  return new Map(
    Array.from(r.entries()).map(([o, a]) => [o, Array.from(a.values())])
  );
}
function Ra({ area: n, entities: t, accent: i = !1, onOpen: r, dragProps: o, presence: a }) {
  const s = Tt(n.name), l = t.filter(
    (u) => u.domain !== "sensor" && u.domain !== "binary_sensor"
  ).length, p = t.filter(en).length, d = rt(t);
  return /* @__PURE__ */ e(
    "div",
    {
      role: "button",
      tabIndex: 0,
      class: `nido-room-card ${i ? "nido-room-card--accent" : ""}`,
      onClick: r,
      onKeyDown: (u) => {
        (u.key === "Enter" || u.key === " ") && (u.preventDefault(), r());
      },
      ...o,
      children: [
        i && /* @__PURE__ */ e("svg", { class: "nido-room-card__deco", viewBox: "0 0 120 120", "aria-hidden": "true", children: [
          /* @__PURE__ */ e("circle", { cx: "60", cy: "60", r: "48", fill: "none", stroke: "rgba(244,237,226,0.08)" }),
          /* @__PURE__ */ e("circle", { cx: "60", cy: "60", r: "32", fill: "none", stroke: "rgba(244,237,226,0.08)" })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-room-card__body", children: [
          /* @__PURE__ */ e("div", { class: "nido-room-card__head", children: [
            /* @__PURE__ */ e("span", { class: "nido-room-card__icon", children: /* @__PURE__ */ e(s, { size: 20 }) }),
            /* @__PURE__ */ e("div", { class: "nido-room-card__head-right", children: [
              a && a.length > 0 && /* @__PURE__ */ e("div", { class: "nido-room-card__presence", children: a.map(
                (u) => u.picture ? /* @__PURE__ */ e(
                  "img",
                  {
                    class: "nido-room-card__avatar",
                    src: u.picture,
                    alt: u.name
                  },
                  u.name
                ) : /* @__PURE__ */ e("span", { class: "nido-room-card__avatar nido-room-card__avatar--initial", children: u.name[0].toUpperCase() }, u.name)
              ) }),
              /* @__PURE__ */ e(mi, { size: 16 })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { class: "nido-room-card__foot", children: [
            /* @__PURE__ */ e("div", { class: "nido-room-card__name", children: n.name }),
            /* @__PURE__ */ e("div", { class: "nido-room-card__meta", children: [
              /* @__PURE__ */ e("span", { children: [
                l,
                " appareil",
                l > 1 ? "s" : ""
              ] }),
              p > 0 && /* @__PURE__ */ e(X, { children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
                /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                  /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                  p,
                  " actif",
                  p > 1 ? "s" : ""
                ] })
              ] })
            ] }),
            (d.temperature || d.humidity) && /* @__PURE__ */ e("div", { class: "nido-room-card__stats", children: [
              d.temperature && /* @__PURE__ */ e("span", { class: "nido-room-card__stat", children: [
                d.temperature.value,
                d.temperature.unit || "°"
              ] }),
              d.humidity && /* @__PURE__ */ e("span", { class: "nido-room-card__stat", children: [
                Math.round(parseFloat(d.humidity.value)),
                d.humidity.unit || "%"
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Fa({
  hass: n,
  areas: t,
  entities: i,
  favorites: r,
  exposed: o,
  roomsOrder: a,
  onConfigure: s,
  onOpenRoom: l,
  onReorderFavorites: p,
  onReorderRooms: d
}) {
  const u = n.user?.name ?? "vous", c = /* @__PURE__ */ new Date(), _ = c.getHours(), { greeting: m, sub: v } = Oa(_), b = `${String(_).padStart(2, "0")}:${String(c.getMinutes()).padStart(2, "0")}`, g = c.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (w) => w.toUpperCase()), f = j(() => new Set(o), [o]), h = j(
    () => i.filter((w) => f.has(w.entity_id) && $a.has(w.domain)),
    [i, f]
  ), y = j(
    () => h.find((w) => w.domain === "weather"),
    [h]
  ), S = j(
    () => h.filter((w) => w.domain === "light" && en(w)),
    [h]
  ), M = S.length, T = j(
    () => h.filter((w) => w.domain === "calendar"),
    [h]
  ), N = j(() => y ? Object.keys(n.states).some(
    ($) => $.startsWith("sensor.") && ($.endsWith("_next_rain") || $.endsWith("_weather_alert") || $.endsWith("_uv"))
  ) : !1, [n.states, y]), [H, L] = z(!1), [Z, ne] = z(!1), [Q, G] = z(!1), [re, k] = z(!1), C = j(() => {
    const w = n.states["sensor.nido_notifications"];
    return !w || !w.attributes.notifications ? [] : w.attributes.notifications;
  }, [n.states["sensor.nido_notifications"]]), P = j(() => pi(), [Z]), F = j(() => {
    if (C.length === 0) return !1;
    if (!P) return !0;
    const w = C[C.length - 1];
    return new Date(w.timestamp) > new Date(P);
  }, [C, P]), I = () => {
    ne(!0), ui((/* @__PURE__ */ new Date()).toISOString());
  }, R = j(() => Object.values(n.states).filter(
    (w) => w.entity_id.startsWith("person.") && w.state === "home" && w.attributes.entity_picture
  ), [n.states]), A = (w) => {
    if (!w) return null;
    if (w.startsWith("http")) return w;
    const $ = n.hassUrl?.("");
    return $ ? $.replace(/\/$/, "") + w : w;
  }, E = j(() => ti(h), [h]), D = j(() => ja(n, t), [n.states, t]), B = j(() => {
    const w = new Map(h.map(($) => [$.entity_id, $]));
    return r.map(($) => w.get($)).filter(($) => !!$);
  }, [h, r]), te = j(() => {
    const w = t.filter(($) => (E.get($.area_id) ?? []).length > 0);
    return lt(w, a, ($) => $.area_id);
  }, [t, E, a]), De = qe(
    B,
    (w) => w.entity_id,
    (w) => p(w.map(($) => $.entity_id))
  ), $e = qe(
    te,
    (w) => w.area_id,
    (w) => d(w.map(($) => $.area_id))
  ), Nt = B.some(
    (w) => !(w.domain === "binary_sensor" && w.state.state === "off")
  );
  let Oe = 0;
  const Lt = Nt ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${De.isDragging ? "is-dragging" : ""}`,
        ref: (w) => {
          De.containerRef.current = w;
        },
        children: B.map((w) => {
          if (w.domain === "binary_sensor" && w.state.state === "off") return null;
          Oe += 1;
          const un = Oe === 1, Rt = (Oe - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": un ? "true" : "false",
              ...De.itemPropsFor(w.entity_id),
              children: Na(w, {
                hass: n,
                areaName: t.find((Ft) => Ft.area_id === w.area_id)?.name ?? "",
                hero: un,
                variant: Rt,
                calendarEntities: T
              })
            },
            w.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, jt = h.length > 0;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: [
    /* @__PURE__ */ e("div", { class: "nido-dashboard", children: [
      /* @__PURE__ */ e("header", { class: "nido-topbar", children: [
        /* @__PURE__ */ e("div", { class: "nido-topbar__brand", children: [
          /* @__PURE__ */ e("div", { class: "nido-topbar__clock", children: b }),
          /* @__PURE__ */ e("span", { children: "nido" })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-topbar__actions", children: [
          y && (N ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-weather-pill-btn",
              onClick: () => L(!0),
              "aria-label": "Voir la météo détaillée",
              children: /* @__PURE__ */ e(Nn, { entity: y })
            }
          ) : /* @__PURE__ */ e(Nn, { entity: y })),
          M > 0 && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-lights-pill-btn",
              onClick: () => G(!0),
              "aria-label": `${M} lumière${M > 1 ? "s" : ""} allumée${M > 1 ? "s" : ""}`,
              children: /* @__PURE__ */ e("div", { class: "nido-lights-pill", children: [
                /* @__PURE__ */ e(ge, { size: 16 }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__count", children: M }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__label", children: M === 1 ? "lumière" : "lumières" })
              ] })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: () => k(!0),
              "aria-label": "Liste de courses",
              title: "Liste de courses",
              children: /* @__PURE__ */ e(ta, { size: 20 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: I,
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ e(ct, { size: 20 }),
                F && /* @__PURE__ */ e("span", { class: "nido-bell-btn__badge" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: s,
              children: /* @__PURE__ */ e(gi, { size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { class: "nido-hero", children: [
        /* @__PURE__ */ e("div", { class: "nido-hero__date", children: g }),
        /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }, children: [
          /* @__PURE__ */ e("h1", { style: { margin: 0 }, children: [
            m,
            ", ",
            /* @__PURE__ */ e("em", { children: u })
          ] }),
          R.length > 0 && /* @__PURE__ */ e("div", { class: "nido-home-pill", children: [
            /* @__PURE__ */ e("div", { class: "nido-home-pill__avatars", children: R.map((w) => {
              const $ = A(w.attributes.entity_picture);
              return $ ? /* @__PURE__ */ e(
                "img",
                {
                  src: $,
                  alt: w.attributes.friendly_name,
                  title: w.attributes.friendly_name,
                  class: "nido-home-pill__avatar"
                },
                w.entity_id
              ) : null;
            }) }),
            /* @__PURE__ */ e("span", { class: "nido-home-pill__text", children: "À la maison" })
          ] })
        ] }),
        /* @__PURE__ */ e("p", { class: "nido-hero__sub", style: { marginTop: "24px" }, children: v })
      ] }),
      jt ? /* @__PURE__ */ e(X, { children: [
        Lt,
        te.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
          /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
          /* @__PURE__ */ e(
            "div",
            {
              class: `nido-rooms-grid ${$e.isDragging ? "is-dragging" : ""}`,
              ref: (w) => {
                $e.containerRef.current = w;
              },
              children: te.map((w, $) => /* @__PURE__ */ e(
                Ra,
                {
                  area: w,
                  entities: E.get(w.area_id) ?? [],
                  accent: $ === 0,
                  onOpen: () => l(w.area_id),
                  dragProps: $e.itemPropsFor(w.area_id),
                  presence: D.get(w.area_id)
                },
                w.area_id
              ))
            }
          )
        ] })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-empty", children: [
        /* @__PURE__ */ e("p", { class: "n-muted", children: "Aucun appareil exposé pour l'instant. Ouvrez « Personnaliser » pour choisir vos entités." }),
        /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: s, children: "Personnaliser Nido" })
      ] })
    ] }),
    H && y && /* @__PURE__ */ e(
      ya,
      {
        hass: n,
        weatherEntityId: y.entity_id,
        onClose: () => L(!1)
      }
    ),
    Z && /* @__PURE__ */ e(
      ka,
      {
        hass: n,
        notifications: C,
        onClose: () => ne(!1)
      }
    ),
    Q && /* @__PURE__ */ e(
      Ia,
      {
        hass: n,
        lights: S,
        areas: t,
        onClose: () => G(!1)
      }
    ),
    re && /* @__PURE__ */ e(
      Sa,
      {
        hass: n,
        onClose: () => k(!1)
      }
    )
  ] });
}
function Ha(n, t, i, r, o, a = !1) {
  const s = { hass: t, entity: n, roomLabel: i };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(mt, { ...s, hero: a, breatheVariant: r }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(bt, { ...s, hero: a }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(vt, { ...s, hero: a, breatheVariant: r }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(xt, { entity: n, roomLabel: i, hero: a }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(yt, { ...s, hero: a, breatheVariant: r }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(wt, { ...s }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(kt, { ...s, breatheVariant: r }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(zt, { entity: n, roomLabel: i }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(Mt, { ...s, breatheVariant: r }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(It, { ...s }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(St, { ...s }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(Ct, { ...s, breatheVariant: r }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(At, { ...s }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(Pt, { entity: n, roomLabel: i }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(Ot, { hass: t, entity: n, roomLabel: i, calendarEntities: o }, n.entity_id);
    default:
      return null;
  }
}
function Va({
  hass: n,
  area: t,
  entities: i,
  entitiesOrder: r,
  onBack: o,
  onReorderEntities: a
}) {
  const s = Tt(t.name), l = rt(i), p = j(
    () => lt(i, r, (h) => h.entity_id),
    [i, r]
  ), d = j(
    () => p.filter((h) => {
      if (h.domain !== "sensor") return !0;
      const y = h.state.attributes.device_class;
      return y !== "temperature" && y !== "humidity";
    }),
    [p]
  ), u = j(
    () => d.filter((h) => h.domain === "calendar"),
    [d]
  ), c = j(() => {
    const h = /* @__PURE__ */ new Map();
    for (const y of d)
      h.set(y.domain, (h.get(y.domain) ?? 0) + 1);
    return Array.from(h.entries()).sort((y, S) => S[1] - y[1]);
  }, [d]), [_, m] = z("all"), v = j(
    () => _ === "all" ? d : d.filter((h) => h.domain === _),
    [d, _]
  ), b = qe(
    v,
    (h) => h.entity_id,
    (h) => {
      const y = new Set(v.map((T) => T.entity_id)), S = [...h], M = p.map(
        (T) => y.has(T.entity_id) ? S.shift() : T
      );
      a(M.map((T) => T.entity_id));
    }
  ), g = d.filter(
    (h) => h.domain !== "sensor" && h.domain !== "binary_sensor"
  ).length, f = d.filter(en).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(Ui, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e(Bi, { size: 18 }) }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "nido-room-detail__hero", children: [
      /* @__PURE__ */ e("div", { class: "nido-room-detail__hero-left", children: [
        /* @__PURE__ */ e("div", { class: "nido-room-detail__icon", children: [
          /* @__PURE__ */ e("div", { class: "pattern-dots nido-room-detail__icon-bg", "aria-hidden": "true" }),
          /* @__PURE__ */ e(s, { size: 32 })
        ] }),
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "nido-room-detail__hero-meta", children: [
            /* @__PURE__ */ e("span", { children: [
              g,
              " appareil",
              g > 1 ? "s" : ""
            ] }),
            f > 0 && /* @__PURE__ */ e(X, { children: [
              /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
              /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                f,
                " actif",
                f > 1 ? "s" : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("h1", { class: "nido-room-detail__title", children: t.name })
        ] })
      ] }),
      (l.temperature || l.humidity || l.illuminance) && /* @__PURE__ */ e("div", { class: "nido-room-detail__stats", children: [
        l.temperature && /* @__PURE__ */ e(
          He,
          {
            label: "Température",
            value: l.temperature.value,
            unit: l.temperature.unit || "°"
          }
        ),
        l.humidity && /* @__PURE__ */ e(Fn, {}),
        l.humidity && /* @__PURE__ */ e(
          He,
          {
            label: "Humidité",
            value: Math.round(parseFloat(l.humidity.value)).toString(),
            unit: l.humidity.unit || "%"
          }
        ),
        l.illuminance && /* @__PURE__ */ e(Fn, {}),
        l.illuminance && /* @__PURE__ */ e(
          He,
          {
            label: "Luminosité",
            value: Math.round(parseFloat(l.illuminance.value)).toString(),
            unit: l.illuminance.unit || "lx"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__filters", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${_ === "all" ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => m("all"),
          children: [
            "Tout · ",
            i.length
          ]
        }
      ),
      c.map(([h, y]) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${_ === h ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => m(h),
          children: [
            wa[h] ?? h,
            " · ",
            y
          ]
        }
      ))
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room-detail__grid ${b.isDragging ? "is-dragging" : ""}`,
        ref: (h) => {
          b.containerRef.current = h;
        },
        children: v.map((h, y) => {
          const S = y % 4 + 1, M = y === 0;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": M ? "true" : "false",
              ...b.itemPropsFor(h.entity_id),
              children: Ha(h, n, t.name, S, u, M)
            },
            h.entity_id
          );
        })
      }
    )
  ] }) });
}
function He({ label: n, value: t, unit: i }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: i })
    ] })
  ] });
}
function Fn() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const ve = 5, ce = {
  light: { label: "Lumières", Icon: ge },
  switch: { label: "Prises & switches", Icon: rn },
  cover: { label: "Volets & stores", Icon: an },
  climate: { label: "Thermostats", Icon: ae },
  lock: { label: "Serrures", Icon: on },
  vacuum: { label: "Aspirateurs", Icon: sn },
  binary_sensor: { label: "Détecteurs", Icon: fe },
  sensor: { label: "Capteurs", Icon: pe },
  media_player: { label: "Lecteurs média", Icon: cn },
  alarm_control_panel: { label: "Alarmes", Icon: fe },
  camera: { label: "Caméras", Icon: Ae },
  fan: { label: "Ventilateurs", Icon: dn },
  scene: { label: "Scènes", Icon: pn },
  script: { label: "Scripts", Icon: le },
  weather: { label: "Météo", Icon: ht },
  calendar: { label: "Calendriers", Icon: gt }
}, Hn = Object.keys(ce), Ye = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] }
};
function Wa(n) {
  const {
    hass: t,
    entities: i,
    areas: r,
    initialTheme: o,
    initialMode: a,
    initialExposed: s,
    initialFavorites: l,
    initialExcludedUsers: p,
    isReturning: d,
    onApplyTheme: u,
    onClose: c,
    onDone: _
  } = n, [m, v] = z(0), [b, g] = z(o), [f, h] = z(a), [y, S] = z(new Set(s)), [M, T] = z(new Set(l)), [N, H] = z(
    new Set(p)
  ), [L, Z] = z(null), [ne, Q] = z(null);
  J(() => {
    let A = !1;
    return t.callWS({ type: "config/auth/list" }).then((E) => {
      A || Z(
        (E ?? []).filter((D) => !D.system_generated).sort((D, B) => D.name.localeCompare(B.name))
      );
    }).catch((E) => {
      A || (Q(E instanceof Error ? E.message : String(E)), t.user && Z([t.user]));
    }), () => {
      A = !0;
    };
  }, [t]);
  const G = () => v((A) => Math.min(ve - 1, A + 1)), re = () => v((A) => Math.max(0, A - 1)), k = (A, E) => {
    g(A), h(E), u(A, E);
  }, C = (A) => {
    S((E) => {
      const D = new Set(E);
      return D.has(A) ? (D.delete(A), T((B) => {
        if (!B.has(A)) return B;
        const te = new Set(B);
        return te.delete(A), te;
      })) : D.add(A), D;
    });
  }, P = (A) => {
    T((E) => {
      const D = new Set(E);
      return D.has(A) ? D.delete(A) : (D.add(A), S((B) => B.has(A) ? B : new Set(B).add(A))), D;
    });
  }, F = (A) => {
    H((E) => {
      const D = new Set(E);
      return D.has(A) ? D.delete(A) : D.add(A), D;
    });
  }, I = () => {
    const A = Array.from(y), E = Array.from(M).filter((B) => y.has(B)), D = Array.from(N);
    En(b, f), In(A), Ze(E), Sn(D), An(), _({
      exposed: A,
      favorites: E,
      theme: b,
      mode: f,
      excludedUsers: D
    });
  }, R = () => {
    En(b, f), In(Array.from(y)), Ze(Array.from(M).filter((A) => y.has(A))), Sn(Array.from(N)), An(), c();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(Wi, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: ve }, (A, E) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${E === m ? "is-active" : ""} ${E < m ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          m + 1,
          " / ",
          ve
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: R, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      m === 0 && /* @__PURE__ */ e(
        Ua,
        {
          isReturning: d,
          exposedCount: y.size,
          favCount: M.size,
          themeLabel: Ye[b].name,
          modeLabel: f === "light" ? "Clair" : "Sombre",
          allowedUsersCount: L ? L.filter((A) => !N.has(A.id)).length : null
        }
      ),
      m === 1 && /* @__PURE__ */ e(Ba, { entitiesCount: i.length, areasCount: r.length }),
      m === 2 && /* @__PURE__ */ e(
        Za,
        {
          entities: i,
          exposed: y,
          favs: M,
          onToggleExpose: C,
          onToggleFav: P
        }
      ),
      m === 3 && /* @__PURE__ */ e(
        qa,
        {
          theme: b,
          mode: f,
          onPick: k,
          userName: t.user?.name ?? "vous"
        }
      ),
      m === 4 && /* @__PURE__ */ e(
        Ya,
        {
          hass: t,
          users: L,
          error: ne,
          excluded: N,
          onToggleUser: F
        }
      )
    ] }, m),
    /* @__PURE__ */ e("footer", { class: "n-ob__footer", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-ob__back",
          disabled: m === 0,
          onClick: re,
          children: [
            /* @__PURE__ */ e(Ni, { size: 14 }),
            " Retour"
          ]
        }
      ),
      m < ve - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: G, children: [
        "Continuer ",
        /* @__PURE__ */ e(On, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: I, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(On, { size: 16 })
      ] })
    ] })
  ] }) });
}
const Vn = [
  ge,
  an,
  rn,
  ae,
  on,
  sn,
  pe,
  cn,
  fe,
  Ae,
  dn,
  pn,
  le
];
function xe({ offset: n, intervalMs: t }) {
  const [i, r] = z(n);
  J(() => {
    const a = setInterval(() => r((s) => s + 1), t);
    return () => clearInterval(a);
  }, [t]);
  const o = Vn[i % Vn.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, i);
}
function Ua(n) {
  const { isReturning: t, exposedCount: i, favCount: r, themeLabel: o, modeLabel: a, allowedUsersCount: s } = n;
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--welcome", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Bienvenue chez Nido" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Une maison",
        /* @__PURE__ */ e("br", {}),
        "qui ",
        /* @__PURE__ */ e("em", { children: "vous ressemble" }),
        "."
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Nido transforme votre Home Assistant en un compagnon doux et familier. Pas de jargon, pas de YAML — juste votre maison, posée joliment sur l'écran." }),
      t ? /* @__PURE__ */ e("div", { class: "n-ob-recap", children: [
        /* @__PURE__ */ e("div", { class: "n-ob__eyebrow n-ob__eyebrow--accent", children: "Configuration actuelle" }),
        /* @__PURE__ */ e("div", { class: "n-ob-recap__grid", children: [
          /* @__PURE__ */ e(ye, { label: "Exposées", value: i }),
          /* @__PURE__ */ e(ye, { label: "Favoris", value: r, accent: !0 }),
          /* @__PURE__ */ e(ye, { label: "Ambiance", value: o, hint: a }),
          /* @__PURE__ */ e(
            ye,
            {
              label: "Utilisateurs",
              value: s === null ? "—" : s,
              hint: "autorisés"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ e("div", { class: "n-ob-steps-overview", children: [
        ["01", "Connexion"],
        ["02", "Vos appareils"],
        ["03", "Ambiance"],
        ["04", "Famille"]
      ].map(([l, p]) => /* @__PURE__ */ e("div", { class: "n-ob-steps-overview__item", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__eyebrow", children: l }),
        /* @__PURE__ */ e("span", { class: "n-ob-steps-overview__label", children: p })
      ] })) })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus", "aria-hidden": "true", children: [
      /* @__PURE__ */ e("svg", { class: "n-ob-welcome-illus__bg", viewBox: "0 0 420 420", children: [
        /* @__PURE__ */ e("circle", { cx: "210", cy: "210", r: "200", fill: "none", stroke: "var(--ink-4)", "stroke-width": "1", "stroke-dasharray": "2 6" }),
        /* @__PURE__ */ e("circle", { cx: "210", cy: "210", r: "160", fill: "none", stroke: "var(--ink-4)", "stroke-width": "1" }),
        /* @__PURE__ */ e("circle", { cx: "210", cy: "210", r: "120", fill: "var(--bg-card)", stroke: "var(--ink-4)", "stroke-width": "1" }),
        /* @__PURE__ */ e("g", { class: "breathe-1", children: [
          /* @__PURE__ */ e("rect", { x: "150", y: "150", width: "120", height: "120", rx: "24", fill: "var(--accent)" }),
          /* @__PURE__ */ e("circle", { cx: "210", cy: "210", r: "14", fill: "var(--bg-shell)" })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tl", children: /* @__PURE__ */ e(xe, { offset: 0, intervalMs: 2200 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tr", children: /* @__PURE__ */ e(xe, { offset: 3, intervalMs: 2600 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--bl", children: /* @__PURE__ */ e(xe, { offset: 7, intervalMs: 2400 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--br", children: /* @__PURE__ */ e(xe, { offset: 10, intervalMs: 2800 }) })
    ] })
  ] });
}
function ye(n) {
  return /* @__PURE__ */ e("div", { class: `n-ob-recap__card ${n.accent ? "is-accent" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: n.label }),
    /* @__PURE__ */ e("div", { class: "n-ob-recap__value", children: n.value }),
    n.hint && /* @__PURE__ */ e("div", { class: "n-ob-recap__hint", children: n.hint })
  ] });
}
function Ba({ entitiesCount: n, areasCount: t }) {
  const [i, r] = z("scanning");
  return J(() => {
    const o = setTimeout(() => r("found"), 1100), a = setTimeout(() => r("connected"), 2200);
    return () => {
      clearTimeout(o), clearTimeout(a);
    };
  }, []), /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--connect", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 1 · Connexion" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "On cherche votre",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "Home Assistant" }),
        "."
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Nido lit ce que Home Assistant expose déjà. Aucune donnée ne sort de chez vous." }),
      /* @__PURE__ */ e("div", { class: "n-ob-pill-card", children: [
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(Hi, { size: 18 }) }),
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob-pill-card__title", children: "Local-first" }),
          /* @__PURE__ */ e("div", { class: "n-ob-pill-card__hint", children: "Connexion directe · Pas de cloud" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob-step__illus n-ob-connect", children: [
      /* @__PURE__ */ e("svg", { viewBox: "0 0 380 380", width: "320", height: "320", children: [
        [1, 2, 3].map((o) => /* @__PURE__ */ e(
          "circle",
          {
            cx: "190",
            cy: "190",
            r: "60",
            fill: "none",
            stroke: "var(--accent)",
            "stroke-width": "1.5",
            class: "n-ob-scan-ring",
            style: { animationDelay: `${o * 0.6}s` }
          }
        )),
        /* @__PURE__ */ e("circle", { cx: "190", cy: "190", r: "68", fill: "var(--bg-card)", stroke: "var(--ink-4)", "stroke-width": "1.5" }),
        /* @__PURE__ */ e(
          "circle",
          {
            cx: "190",
            cy: "190",
            r: "48",
            fill: i === "connected" ? "var(--positive)" : "var(--accent)",
            class: "breathe-2"
          }
        ),
        i === "connected" && /* @__PURE__ */ e(
          "path",
          {
            d: "M178 188l8 8 16-16",
            fill: "none",
            stroke: "var(--bg-shell)",
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-status-pill", children: [
        /* @__PURE__ */ e("span", { class: `n-ob-status-pill__dot is-${i}` }),
        /* @__PURE__ */ e("span", { class: "n-ob-status-pill__label", children: [
          i === "scanning" && "Recherche en cours…",
          i === "found" && "Home Assistant trouvé",
          i === "connected" && `Connecté · ${t} pièce${t > 1 ? "s" : ""} · ${n} entité${n > 1 ? "s" : ""}`
        ] })
      ] })
    ] })
  ] });
}
function Za(n) {
  const { entities: t, exposed: i, favs: r, onToggleExpose: o, onToggleFav: a } = n, s = j(() => {
    const g = /* @__PURE__ */ new Map();
    for (const f of t)
      Hn.includes(f.domain) && (g.has(f.domain) || g.set(f.domain, []), g.get(f.domain).push(f));
    return Array.from(g.entries()).sort((f, h) => h[1].length - f[1].length);
  }, [t]), [l, p] = z(s[0]?.[0] ?? "light"), [d, u] = z(""), c = s.find(([g]) => g === l) ?? s[0], _ = i.size, m = t.filter((g) => Hn.includes(g.domain)).length, v = d.trim().toLowerCase(), b = c ? v ? c[1].filter(
    (g) => (g.friendly_name ?? "").toLowerCase().includes(v) || g.entity_id.toLowerCase().includes(v)
  ) : c[1] : [];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--entities", children: [
    /* @__PURE__ */ e("aside", { class: "n-ob-ent__rail", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 2 · Vos appareils" }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__count", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-num", children: _ }),
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-sep", children: [
          " / ",
          m
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { marginBottom: 16 }, children: _ === 0 ? "Aucun appareil exposé pour l'instant" : `appareil${_ > 1 ? "s" : ""} exposé${_ > 1 ? "s" : ""}` }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__list", children: s.map(([g, f]) => {
        const h = ce[g], y = h.Icon, S = f.filter((T) => i.has(T.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${g === l ? "is-active" : ""}`,
            onClick: () => p(g),
            children: [
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-icon", children: /* @__PURE__ */ e(y, { size: 15 }) }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-label", children: h.label }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-count", children: [
                S,
                "/",
                f.length
              ] })
            ]
          }
        );
      }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "n-ob-ent__main", children: c && /* @__PURE__ */ e(X, { children: [
      /* @__PURE__ */ e("div", { class: "n-ob-ent__head", children: [
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: [
            c[1].length,
            " disponibles"
          ] }),
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: ce[c[0]].label })
        ] }),
        /* @__PURE__ */ e("div", { class: "n-ob-ent__head-actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => b.forEach((g) => !i.has(g.entity_id) && o(g.entity_id)),
              children: "Tout exposer"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => b.forEach((g) => i.has(g.entity_id) && o(g.entity_id)),
              children: "Tout retirer"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__search", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(Ri, { size: 14 }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            class: "n-ob-ent__search-input",
            value: d,
            onInput: (g) => u(g.target.value),
            placeholder: `Rechercher dans ${ce[c[0]].label.toLowerCase()}…`,
            "aria-label": "Rechercher une entité"
          }
        ),
        d && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-ob-ent__search-clear",
            onClick: () => u(""),
            "aria-label": "Effacer la recherche",
            children: /* @__PURE__ */ e(oe, { size: 12 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__grid", children: [
        b.length === 0 && /* @__PURE__ */ e("div", { class: "n-ob-ent__empty", children: [
          "Aucune entité ne correspond à « ",
          d,
          " »"
        ] }),
        b.map((g) => {
          const f = i.has(g.entity_id), h = r.has(g.entity_id), y = ce[g.domain].Icon;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `n-ob-ent-card ${f ? "is-exposed" : ""}`,
              onClick: () => o(g.entity_id),
              children: [
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__icon ${f ? "is-on" : ""}`, children: /* @__PURE__ */ e(y, { size: 16 }) }),
                /* @__PURE__ */ e("div", { class: "n-ob-ent-card__body", children: [
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__name", children: g.friendly_name }),
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__id", children: g.entity_id })
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    class: `n-ob-ent-card__star ${h ? "is-fav" : ""}`,
                    "aria-label": h ? "Retirer des favoris" : "Ajouter aux favoris",
                    onClick: (S) => {
                      S.stopPropagation(), a(g.entity_id);
                    },
                    children: h ? /* @__PURE__ */ e(Fi, { size: 14 }) : /* @__PURE__ */ e(ji, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${f ? "is-on" : ""}`, children: f && /* @__PURE__ */ e(Li, { size: 12, stroke: 2.4 }) })
              ]
            }
          );
        })
      ] })
    ] }) })
  ] });
}
function qa(n) {
  const { theme: t, mode: i, userName: r, onPick: o } = n, a = Ye[t];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--theme", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 3 · Ambiance" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Quelle ambiance",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "vous va ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre." }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__grid", children: ot.map((s) => {
        const l = Ye[s];
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__tile ${t === s ? "is-active" : ""}`,
            onClick: () => o(s, i),
            children: [
              /* @__PURE__ */ e("div", { class: "n-ob-theme__swatches", children: l.swatches.map((p, d) => /* @__PURE__ */ e(
                "span",
                {
                  class: "n-ob-theme__swatch",
                  style: {
                    background: p,
                    borderRadius: d === 0 ? "8px 0 0 8px" : d === 2 ? "0 8px 8px 0" : "0"
                  }
                }
              )) }),
              /* @__PURE__ */ e("div", { class: "n-ob-theme__name", children: l.name }),
              /* @__PURE__ */ e("div", { class: "n-ob-theme__desc", children: l.desc })
            ]
          }
        );
      }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__modes", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__mode ${i === "light" ? "is-active" : ""}`,
            onClick: () => o(t, "light"),
            children: [
              /* @__PURE__ */ e(ln, { size: 14 }),
              " Clair"
            ]
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__mode ${i === "dark" ? "is-active" : ""}`,
            onClick: () => o(t, "dark"),
            children: [
              /* @__PURE__ */ e(_t, { size: 14 }),
              " Sombre"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        class: "n-ob-step__illus n-ob-preview",
        style: { background: i === "dark" ? "#1f1812" : a.swatches[0] },
        children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", style: { opacity: 0.6 }, children: "Aperçu" }),
          /* @__PURE__ */ e(
            "div",
            {
              class: "n-ob-preview__greet",
              style: { color: i === "dark" ? "#f4ede2" : "#1a1410" },
              children: [
                "Bonsoir, ",
                /* @__PURE__ */ e("em", { children: r })
              ]
            }
          ),
          /* @__PURE__ */ e("div", { class: "n-ob-preview__cards", children: [
            /* @__PURE__ */ e(
              "div",
              {
                class: "n-ob-preview__hero pattern-dots",
                style: { background: a.swatches[1] },
                children: [
                  /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", style: { color: "rgba(255,255,255,0.7)" }, children: "Salon" }),
                  /* @__PURE__ */ e("div", { class: "n-ob-preview__hero-title", children: "Plafonnier" }),
                  /* @__PURE__ */ e("div", { class: "n-ob-preview__hero-pct", children: "70%" })
                ]
              }
            ),
            /* @__PURE__ */ e("div", { class: "n-ob-preview__col", children: [
              /* @__PURE__ */ e(
                "div",
                {
                  class: "n-ob-preview__small",
                  style: {
                    background: i === "dark" ? "#2a2018" : "#fbf6ec",
                    color: i === "dark" ? "#f4ede2" : "#1a1410"
                  },
                  children: [
                    /* @__PURE__ */ e("div", { class: "n-ob-preview__small-val", children: "21°" }),
                    /* @__PURE__ */ e("div", { class: "n-ob-preview__small-lbl", children: "Salon" })
                  ]
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  class: "n-ob-preview__small",
                  style: { background: a.swatches[2], color: a.swatches[0] },
                  children: [
                    /* @__PURE__ */ e("div", { class: "n-ob-preview__small-val", children: "♫ Bloom" }),
                    /* @__PURE__ */ e("div", { class: "n-ob-preview__small-lbl", children: "En cours" })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Ya(n) {
  const { hass: t, users: i, error: r, excluded: o, onToggleUser: a } = n;
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--family", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 4 · Famille" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Qui peut",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "entrer ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Décochez les utilisateurs Home Assistant qui ne doivent pas voir Nido. Ils continueront d'utiliser Home Assistant normalement." }),
      r && /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { color: "var(--warning)" }, children: "Liste complète indisponible (besoin d'un compte admin) — votre compte est affiché." })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob-step__illus n-ob-family", children: i === null ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Chargement des utilisateurs…" }) : i.length === 0 ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Aucun utilisateur trouvé." }) : /* @__PURE__ */ e("div", { class: "n-ob-family__list", children: i.map((s) => {
      const l = !o.has(s.id), p = s.id === t.user?.id;
      return /* @__PURE__ */ e(
        "label",
        {
          class: `n-ob-family__row ${l ? "is-allowed" : "is-excluded"}`,
          children: [
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: s.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e(Vi, { size: 18 }) }),
            /* @__PURE__ */ e("div", { class: "n-ob-family__info", children: [
              /* @__PURE__ */ e("div", { class: "n-ob-family__name", children: [
                s.name,
                p && /* @__PURE__ */ e("span", { class: "n-ob-family__self", children: " · vous" })
              ] }),
              /* @__PURE__ */ e("div", { class: "n-ob-family__role", children: s.is_owner ? "Propriétaire" : s.is_admin ? "Administrateur" : "Utilisateur" })
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "checkbox",
                class: "n-ob-family__toggle",
                checked: l,
                disabled: p,
                onChange: () => !p && a(s.id),
                "aria-label": l ? "Autoriser" : "Exclure"
              }
            )
          ]
        }
      );
    }) }) })
  ] });
}
const Ja = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function Xa({ hass: n, host: t }) {
  const [i, r] = z(null), [o, a] = z(null), [s, l] = z(null), [p, d] = z(null), u = j(() => st(), []), [c, _] = z(() => ai()), [m, v] = z(() => ri()), [b, g] = z(() => oi()), [f, h] = z(() => si()), [y, S] = z(
    () => ci()
  ), [M, T] = z(() => !Cn()), [N, H] = z(
    { kind: "dashboard" }
  ), L = (I) => {
    _(I), Ze(I);
  }, Z = (I) => {
    h(I), li(I);
  }, ne = (I, R) => {
    S((A) => {
      const E = { ...A, [I]: R };
      return di(E), E;
    });
  }, Q = Y(n);
  Q.current = n, J(() => {
    if (!n) return;
    let I = !1;
    const R = [], A = async () => {
      const E = Q.current;
      if (E)
        try {
          const [D, B, te] = await Promise.all([
            Kt(E),
            Gt(E),
            Qt(E)
          ]);
          if (I) return;
          r(D), a(B), l(te);
        } catch (D) {
          if (I) return;
          d(D instanceof Error ? D.message : String(D));
        }
    };
    return A(), Promise.all(
      Ja.map(
        (E) => n.connection.subscribeEvents(() => {
          I || A();
        }, E)
      )
    ).then((E) => {
      if (I) {
        E.forEach((D) => D());
        return;
      }
      R.push(...E);
    }).catch((E) => console.warn("Nido: subscribeEvents failed", E)), () => {
      I = !0, R.forEach((E) => E());
    };
  }, [n != null]);
  const G = j(() => !n || !o || !s ? [] : ni(n, o, s), [n?.states, o, s]), re = (I, R) => {
    t?.applyTheme?.(I, R);
  };
  if (!n)
    return /* @__PURE__ */ e("div", { class: "nido-loading", children: "Connexion à Home Assistant…" });
  if (p)
    return /* @__PURE__ */ e("div", { class: "nido-loading nido-loading--error", children: [
      "Erreur : ",
      p
    ] });
  if (!i || !o || !s)
    return /* @__PURE__ */ e("div", { class: "nido-loading", children: "Chargement des pièces et entités…" });
  if (!!n.user && b.includes(n.user.id))
    return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-denied", children: [
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Nido n'est pas pour ",
        /* @__PURE__ */ e("em", { children: "vous" }),
        "."
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Votre compte n'a pas accès à ce tableau de bord. Vous pouvez continuer à utiliser Home Assistant normalement." })
    ] }) });
  const C = j(() => new Set(m), [m]), P = N.kind === "room" ? i.find((I) => I.area_id === N.areaId) ?? null : null, F = j(
    () => P ? G.filter(
      (I) => I.area_id === P.area_id && C.has(I.entity_id)
    ) : [],
    [G, P, C]
  );
  return /* @__PURE__ */ e(X, { children: [
    N.kind === "dashboard" || !P ? /* @__PURE__ */ e(
      Fa,
      {
        hass: n,
        areas: i,
        entities: G,
        favorites: c,
        exposed: m,
        roomsOrder: f,
        onConfigure: () => T(!0),
        onOpenRoom: (I) => H({ kind: "room", areaId: I }),
        onReorderFavorites: L,
        onReorderRooms: Z
      }
    ) : /* @__PURE__ */ e(
      Va,
      {
        hass: n,
        area: P,
        entities: F,
        entitiesOrder: y[P.area_id] ?? [],
        onBack: () => H({ kind: "dashboard" }),
        onReorderEntities: (I) => ne(P.area_id, I)
      }
    ),
    M && /* @__PURE__ */ e(
      Wa,
      {
        hass: n,
        entities: G,
        areas: i,
        initialTheme: u.theme,
        initialMode: u.mode,
        initialExposed: m,
        initialFavorites: c,
        initialExcludedUsers: b,
        isReturning: Cn(),
        onApplyTheme: re,
        onClose: () => T(!1),
        onDone: (I) => {
          v(I.exposed), _(I.favorites), g(I.excludedUsers), T(!1);
        }
      }
    )
  ] });
}
const Ka = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', Ga = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-root-mount{width:100%;height:100%}.nido-shell{width:100%;height:100%;overflow-x:hidden;overflow-y:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px);box-sizing:border-box}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__brand{display:flex;flex-direction:column;align-items:flex-start;gap:4px}.nido-topbar__clock{font-family:var(--font-mono);font-size:14px;font-weight:600;color:var(--ink-3);line-height:1}.nido-topbar__brand span{font-family:"Comfortaa",var(--font-sans);font-weight:700;font-size:24px;letter-spacing:.04em;color:var(--accent);line-height:1}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card--accent-muted{background:var(--accent-soft);color:var(--ink-1);box-shadow:var(--shadow-md)}.n-card--accent-muted .n-icon-bubble{background:color-mix(in srgb,var(--accent) 22%,var(--accent-soft));color:var(--accent-deep)}.n-card--accent-muted .n-toggle{background:color-mix(in srgb,var(--accent) 18%,var(--bg-inset))}.n-card--accent-muted .n-toggle__thumb{background:var(--accent)}.n-card--accent-muted .n-eyebrow{color:var(--accent-deep);opacity:.7}.n-card--accent-muted .n-muted{color:var(--accent-deep);opacity:.65}.n-card--accent-muted .n-title{color:var(--accent-deep)}.n-card[data-hero=true],.nido-drag-item[data-hero=true] .n-card{min-height:200px;padding:24px}.n-cover-glow-wrap{position:relative;border-radius:calc(var(--r-lg) + 2px);padding:2px;overflow:hidden;isolation:isolate;background:transparent;transition:box-shadow .5s var(--ease-out)}.n-cover-glow-wrap[data-active=true]{box-shadow:0 0 18px 2px color-mix(in srgb,var(--accent) 35%,transparent)}.n-cover-glow-wrap .n-card{position:relative;z-index:1}.n-cover-glow-wrap:before{content:"";position:absolute;width:200%;height:200%;top:-50%;left:-50%;background:conic-gradient(from 0deg,transparent 0%,transparent 35%,color-mix(in srgb,var(--accent) 60%,transparent) 45%,var(--accent) 50%,color-mix(in srgb,var(--accent) 60%,transparent) 55%,transparent 65%,transparent 100%);animation:cover-glow-spin 3.5s linear infinite;opacity:0;transition:opacity .5s var(--ease-out);pointer-events:none;z-index:0;will-change:transform}.n-cover-glow-wrap[data-active=true]:before{opacity:1}@keyframes cover-glow-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.n-cover-glow-wrap:before{animation:none}.n-cover-glow-wrap[data-active=true]:before{background:var(--accent);opacity:.6}}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;position:relative;z-index:1}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle,.n-toggle[aria-checked=true]{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb,.n-toggle[aria-checked=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{position:relative;z-index:1}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor;position:relative;z-index:1}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:linear-gradient(to right,var(--accent) var(--val, 0%),var(--bg-inset) var(--val, 0%));outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-runnable-track{height:10px;border-radius:var(--r-pill);background:transparent}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer;margin-top:-3px}.n-slider::-moz-range-track{height:10px;border-radius:var(--r-pill);background:var(--bg-inset)}.n-slider::-moz-range-progress{height:10px;border-radius:var(--r-pill);background:var(--accent)}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:linear-gradient(to right,rgba(255,255,255,.5) var(--val, 0%),rgba(255,255,255,.2) var(--val, 0%))}.n-card--accent .n-slider::-moz-range-track{background:#fff3}.n-card--accent .n-slider::-moz-range-progress{background:#ffffff80}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px;position:relative;z-index:1}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto;position:relative;z-index:1}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3);position:relative;z-index:1}.n-media__volume .n-slider{flex:1}.n-media__bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}.n-media__bg img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1);opacity:.25;transition:opacity .5s var(--ease-out)}.n-media__bg-overlay{position:absolute;inset:0;background:var(--accent);opacity:.15;mix-blend-mode:overlay}.n-card[data-on=true] .n-media__bg img{opacity:.35}.n-card[data-hero=true] .n-media__track{margin-top:8px}.n-card[data-hero=true] .n-media__title{font-size:18px}.n-card[data-hero=true] .n-media__controls{gap:20px;margin-top:12px}.n-card[data-hero=true] .n-media__controls .n-icon-btn--primary{width:52px;height:52px}.n-card[data-hero=true] .nido-cal-widget__title{font-size:24px;margin-top:8px}.n-card[data-hero=true] .nido-cal-widget__when{margin-top:6px;font-size:14px}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-weather-pill{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 10px;background:var(--bg-card);border:1px solid var(--ink-4);border-radius:999px;font-family:var(--font-sans);color:var(--ink-1)}.nido-weather-pill__icon{display:inline-flex;align-items:center;color:var(--accent)}.nido-weather-pill__temp{font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:-.01em}.nido-weather-pill__sep{width:1px;height:12px;background:var(--ink-4)}.nido-weather-pill__label{font-size:12px;color:var(--ink-3)}.nido-lights-pill-btn{background:none;border:none;padding:0;cursor:pointer;display:inline-flex;transition:transform .2s}.nido-lights-pill-btn:hover{transform:scale(1.04)}.nido-lights-pill-btn:active{transform:scale(.96)}.nido-lights-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 10px;background:var(--accent-soft);border-radius:var(--r-pill);font-family:var(--font-sans);color:var(--accent-deep)}.nido-lights-pill__count{font-family:var(--font-display);font-size:13px;font-weight:600;letter-spacing:-.01em}.nido-lights-pill__label{font-size:12px;opacity:.8}.nido-lights-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-lights-panel__title{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-lights-panel__count{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:28px;padding:0 8px;background:var(--accent-soft);color:var(--accent-deep);border-radius:var(--r-pill);font-family:var(--font-display);font-size:14px;font-weight:600}.nido-lights-list{display:flex;flex-direction:column;gap:10px}.nido-lights-row{display:flex;align-items:center;gap:14px;background:var(--bg-card);border-radius:var(--r-lg);padding:14px 16px;transition:opacity .2s}.nido-lights-row.is-pending{opacity:.6;pointer-events:none}.nido-lights-row__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-lights-row__body{flex:1;min-width:0}.nido-lights-row__name{font-family:var(--font-display);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-lights-row__room{font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:2px;text-transform:uppercase;letter-spacing:.06em}.nido-lights-row__pct{font-family:var(--font-mono);font-size:13px;color:var(--ink-3);flex-shrink:0}.nido-lights-panel__footer{padding:16px 32px 24px;border-top:1px solid var(--ink-4)}.nido-lights-panel__all-off{width:100%;padding:12px;border-radius:var(--r-pill);border:1px solid var(--ink-4);background:var(--bg-card);color:var(--ink-1);font-family:var(--font-display);font-size:15px;font-weight:600;cursor:pointer;transition:background .18s,color .18s}.nido-lights-panel__all-off:hover{background:var(--ink-1);color:var(--bg-shell);border-color:var(--ink-1)}.nido-lights-panel__all-off:disabled{opacity:.5;cursor:not-allowed}.nido-cal-widget{cursor:pointer;transition:transform .2s var(--ease-spring),background .2s}.nido-cal-widget:hover{transform:translateY(-2px)}.nido-cal-widget:active{transform:scale(.98)}.nido-cal-widget__bubble{background:color-mix(in srgb,var(--cal-color, var(--ink-3)) 14%,var(--bg-inset))!important;color:var(--cal-color, var(--ink-3))!important}.nido-cal-widget__title{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.01em;line-height:1.2;color:var(--ink-1)}.nido-cal-widget__when{display:flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:auto}.nido-cal-widget__sep{opacity:.5}.nido-cal-widget__time{font-family:var(--font-mono);font-size:11px;letter-spacing:.04em}.nido-cal-panel__legend{display:flex;align-items:center;gap:16px;padding:10px 32px 12px;border-bottom:1px solid var(--ink-4)}.nido-cal-panel__legend-item{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}.nido-cal-panel__legend-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}.nido-cal-panel__days{display:flex;flex-direction:column;gap:0}.nido-cal-panel__day{display:flex;align-items:flex-start;gap:16px;padding:14px 0;border-bottom:1px dashed var(--ink-4)}.nido-cal-panel__day:last-child{border-bottom:none}.nido-cal-panel__badge{width:44px;height:44px;border-radius:var(--r-md);background:var(--bg-shell);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s}.nido-cal-panel__day.is-today .nido-cal-panel__badge{background:var(--accent-soft)}.nido-cal-panel__badge-day{font-family:var(--font-mono);font-size:9px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.1em}.nido-cal-panel__day.is-today .nido-cal-panel__badge-day{color:var(--accent-deep)}.nido-cal-panel__badge-num{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-cal-panel__day.is-today .nido-cal-panel__badge-num{color:var(--accent-deep)}.nido-cal-panel__events{flex:1;display:flex;flex-direction:column;gap:8px;padding-top:4px}.nido-cal-panel__empty{font-family:var(--font-sans);font-size:13px;color:var(--ink-4);line-height:44px}.nido-cal-panel__event{display:flex;align-items:flex-start;gap:10px}.nido-cal-panel__event-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px}.nido-cal-panel__event-body{flex:1;min-width:0}.nido-cal-panel__event-title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-cal-panel__event-who{font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-3);display:block;margin-top:2px}.nido-cal-panel__event-time{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.04em;flex-shrink:0;padding-top:2px}.n-weather__icon{color:var(--accent)}.n-weather__readout{display:flex;align-items:baseline;gap:4px;margin-top:6px}.n-weather__meta{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;color:var(--ink-3)}.n-weather__sep{width:3px;height:3px;border-radius:50%;background:var(--ink-4)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__head-right{display:flex;align-items:center;gap:6px}.nido-room-card__presence{display:flex}.nido-room-card__avatar{width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);object-fit:cover;margin-left:-6px;background:var(--accent)}.nido-room-card__avatar:first-child{margin-left:0}.nido-room-card__avatar--initial{display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:var(--bg);background:var(--accent);letter-spacing:0}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:hidden;max-height:100vh;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1 1 0;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:0;overflow:hidden;box-sizing:border-box}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__search{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);margin-bottom:12px}.n-ob-ent__search-icon{display:flex;color:var(--ink-3);flex-shrink:0}.n-ob-ent__search-input{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--ink-1);font-family:var(--font-sans);font-size:13px}.n-ob-ent__search-input::placeholder{color:var(--ink-3)}.n-ob-ent__search-clear{border:none;background:transparent;cursor:pointer;color:var(--ink-3);padding:4px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center}.n-ob-ent__search-clear:hover{background:var(--bg-shell);color:var(--ink-1)}.n-ob-ent__empty{grid-column:1 / -1;padding:24px;border-radius:var(--r-md);background:var(--bg-card);font-family:var(--font-sans);font-size:13px;color:var(--ink-3);text-align:center}.n-ob-ent__grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:56vh;padding-right:4px;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;word-break:break-word}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step{gap:20px}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}@media(max-width:600px){.n-ob{padding:8px;overflow:hidden}.n-ob__shell{padding:16px;border-radius:var(--r-xl);min-height:0;height:100%}.n-ob__header{margin-bottom:16px;gap:8px;flex-wrap:nowrap;flex:0 0 auto}.n-ob__brand-mark{width:30px;height:30px}.n-ob__brand-name{font-size:14px}.n-ob__step-count{display:none}.n-ob__skip{font-size:12px;padding:4px}.n-ob__body{display:block;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.n-ob-step{gap:16px}.n-ob__h1{font-size:clamp(28px,8vw,40px);margin-bottom:16px}.n-ob__lead{font-size:14px;margin-bottom:16px}.n-ob__eyebrow{margin-bottom:12px;font-size:10px}.n-ob__footer{margin-top:16px;gap:8px;flex:0 0 auto}.n-ob__back{padding:10px 14px;font-size:13px}.n-ob__primary{padding:12px 18px;font-size:13px}.n-ob-welcome-illus{max-width:260px}.n-ob-steps-overview{gap:16px;margin-top:20px}.n-ob-recap__grid{grid-template-columns:1fr 1fr;gap:8px}.n-ob-recap__value{font-size:22px}.n-ob-step__illus{min-height:180px}.n-ob-step__illus svg{width:220px;height:220px}.n-ob-pill-card{margin-top:16px;padding:12px}.n-ob-ent__count{font-size:22px}.n-ob-ent__rail{margin-bottom:4px}.n-ob-ent__list{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;max-height:none;gap:6px;padding-bottom:6px;-webkit-overflow-scrolling:touch}.n-ob-ent__rail-row{flex-shrink:0;padding:6px 10px 6px 6px;gap:8px;border-radius:var(--r-pill);border:1px solid var(--ink-4)}.n-ob-ent__rail-row.is-active{border-color:var(--ink-1)}.n-ob-ent__rail-icon{width:22px;height:22px}.n-ob-ent__rail-label{font-size:12px;flex:0 0 auto}.n-ob-ent__rail-count{font-size:10px}.n-ob-ent__head{flex-wrap:wrap;margin-bottom:10px;gap:8px}.n-ob-ent__title{font-size:18px}.n-ob-ent__head-actions{width:100%}.n-ob-ent__head-actions .n-pill-btn{flex:1;padding:6px 10px;font-size:12px}.n-ob-ent__search{padding:8px 12px;margin-bottom:8px}.n-ob-ent__search-input{font-size:14px}.n-ob-ent__grid{max-height:none;padding-right:0}.n-ob-ent-card{padding:10px;gap:10px}.n-ob-ent-card__icon{width:32px;height:32px}.n-ob-theme__grid{gap:8px}.n-ob-theme__tile{padding:10px}.n-ob-theme__name{font-size:14px}.n-ob-preview{padding:16px}.n-ob-preview__greet{font-size:22px}.n-ob-family{padding:12px;min-height:0}.n-ob-family__list{max-height:none}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}.nido-weather-panel{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end}.nido-weather-panel__backdrop{position:absolute;inset:0;background:#0006;backdrop-filter:blur(1px);animation:fade-in .3s ease-out}.nido-weather-panel__content{position:relative;width:100%;max-width:480px;background:var(--bg-shell);box-shadow:-4px 0 32px color-mix(in srgb,var(--accent) 15%,transparent);display:flex;flex-direction:column;animation:slide-in-right .3s cubic-bezier(.16,1,.3,1);overflow:hidden}.nido-weather-panel__header{padding:24px 32px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--fg-rgb),.05)}.nido-weather-panel__header h2{font-family:Comfortaa,sans-serif;font-size:1.5rem;font-weight:600;margin:0;color:var(--fg)}.nido-weather-panel__close{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;background:none;border-radius:50%;color:var(--ink-2);cursor:pointer;transition:background .15s,color .15s;flex-shrink:0}.nido-weather-panel__close:hover{background:rgba(var(--fg-rgb),.07);color:var(--fg)}.nido-weather-panel__scroll{flex:1;overflow-y:auto;padding:24px 32px;display:flex;flex-direction:column;gap:24px}.nido-wp-current{display:flex;align-items:center;gap:24px;padding:16px 0}.nido-wp-current svg{color:var(--accent)}.nido-wp-current-info{display:flex;flex-direction:column;gap:4px}.nido-wp-temp{font-size:3rem;font-weight:300;line-height:1;color:var(--fg);font-variant-numeric:tabular-nums}.nido-wp-desc{font-size:1.125rem;color:var(--fg-muted);text-transform:capitalize}.nido-wp-alert{display:flex;align-items:center;gap:12px;padding:16px;border-radius:12px;font-weight:500}.nido-wp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.nido-wp-card{background:var(--bg-card);padding:16px;border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;gap:8px}.nido-wp-card-head{display:flex;align-items:center;gap:8px;color:var(--fg-muted);font-size:.875rem}.nido-wp-card-val{font-size:1.125rem;font-weight:500;color:var(--fg)}.nido-wp-section h3{font-size:1rem;font-weight:600;color:var(--fg);margin:0 0 16px;font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:.05em;opacity:.8}.nido-wp-hourly{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;scrollbar-width:none}.nido-wp-hourly::-webkit-scrollbar{display:none}.nido-wp-hour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:60px;background:var(--bg-card);padding:16px 8px;border-radius:100px;border:1px solid var(--border)}.nido-wp-hour-time{font-size:.875rem;color:var(--fg-muted)}.nido-wp-hour svg{color:var(--accent)}.nido-wp-hour-temp{font-weight:600;font-size:1rem}.nido-wp-hour-precip{font-size:.75rem;color:#0ea5e9;font-weight:500}.nido-wp-daily{display:flex;flex-direction:column;gap:12px}.nido-wp-day{display:flex;align-items:center;gap:16px;padding:12px 16px;background:var(--bg-card);border-radius:12px;border:1px solid var(--border)}.nido-wp-day-name{width:100px;font-weight:500;color:var(--fg);text-transform:capitalize}.nido-wp-day svg{color:var(--accent)}.nido-wp-day-temps{flex:1;display:flex;align-items:center;gap:12px;justify-content:flex-end}.nido-wp-day-min{color:var(--fg-muted);width:32px;text-align:right}.nido-wp-day-max{font-weight:600;width:32px}.nido-wp-day-bar{flex:1;height:4px;background:var(--border);border-radius:2px;position:relative}.nido-weather-pill-btn{background:none;border:none;padding:0;margin:0;cursor:pointer;transition:transform .2s;border-radius:100px;display:inline-flex}.nido-weather-pill-btn:hover{transform:scale(1.05)}.nido-weather-pill-btn:active{transform:scale(.95)}.nido-home-pill{display:flex;align-items:center;gap:12px;background:transparent;border:1px solid var(--b-1);padding:6px 16px 6px 6px;border-radius:99px}.nido-home-pill__avatars{display:flex;align-items:center}.nido-home-pill__avatar{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--bg-shell);margin-left:-12px;position:relative;transition:transform .2s,z-index .2s}.nido-home-pill__avatar:first-child{margin-left:0}.nido-home-pill__avatar:hover{z-index:10;transform:translateY(-2px)}.nido-home-pill__text{font-size:15px;color:var(--ink-2);font-weight:500;white-space:nowrap}.nido-notification-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-notification-panel__backdrop{position:absolute;inset:0;background:#0003;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.nido-notification-panel__content{position:relative;width:100%;max-width:400px;height:100%;background:var(--bg-shell);box-shadow:-8px 0 32px #0000001a;display:flex;flex-direction:column;animation:nido-slide-in-right .4s var(--ease-out)}@keyframes nido-slide-in-right{0%{transform:translate(100%)}to{transform:translate(0)}}.nido-notification-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4)}.nido-notification-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-notification-panel__title-group{display:flex;align-items:baseline;gap:16px}.nido-notification-panel__clear-all{font-family:var(--font-mono);font-size:12px;color:var(--ink-3);background:none;border:none;padding:0;cursor:pointer;text-decoration:underline;transition:color .2s}.nido-notification-panel__clear-all:hover{color:var(--danger)}.nido-notification-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-notification-panel__close:hover{background:var(--ink-4)}.nido-notification-panel__scroll{flex:1;overflow-y:auto;padding:16px 32px 32px}.nido-notification-empty{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--ink-3);text-align:center}.nido-notification-empty__icon{margin-bottom:16px;opacity:.2}.nido-notification-list{display:flex;flex-direction:column;gap:12px}.nido-notification-item{position:relative;background:var(--bg-card);border-radius:var(--r-lg);padding:16px;display:flex;gap:14px;transition:transform .2s;border:1px solid transparent}.nido-notification-item:hover{transform:translateY(-2px)}.nido-notification-item__icon{width:40px;height:40px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-notification-item--info .nido-notification-item__icon{background:color-mix(in srgb,var(--accent) 15%,var(--bg-card));color:var(--accent)}.nido-notification-item--warning .nido-notification-item__icon{background:color-mix(in srgb,var(--danger) 15%,var(--bg-card));color:var(--danger)}.nido-notification-item--success .nido-notification-item__icon{background:color-mix(in srgb,var(--positive) 15%,var(--bg-card));color:var(--positive)}.nido-notification-item__body{flex:1;min-width:0}.nido-notification-item__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px}.nido-notification-item__title{font-family:var(--font-display);font-weight:600;font-size:15px;color:var(--ink-1)}.nido-notification-item__time{font-family:var(--font-mono);font-size:10px;color:var(--ink-3)}.nido-notification-item__message{margin:0;font-size:13px;color:var(--ink-2);line-height:1.4}.nido-notification-item__dismiss{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;border:none;background:transparent;color:var(--ink-3);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s,background .2s}.nido-notification-item:hover .nido-notification-item__dismiss{opacity:1}.nido-notification-item__dismiss:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-bell-btn{position:relative;background:transparent;color:var(--ink-2);padding:6px 12px;border:1px solid var(--ink-4);border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s;height:32px;min-width:44px}.nido-bell-btn:hover{background:var(--bg-inset);border-color:var(--ink-3)}.nido-bell-btn__badge{position:absolute;top:4px;right:8px;width:8px;height:8px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-shell)}@media(max-width:768px){.nido-topbar__actions{flex-direction:column;align-items:flex-end;gap:8px}.nido-bell-btn{order:2}.n-pill-btn--ghost{order:1}}.nido-shopping-panel{position:fixed;inset:0;z-index:2000;display:flex;align-items:stretch;justify-content:center}.nido-shopping-panel__backdrop{position:absolute;inset:0;background:#00000059;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.nido-shopping-panel__content{position:relative;width:100%;height:100%;background:var(--bg-shell);display:flex;flex-direction:column;animation:nido-shopping-fade .25s var(--ease-out)}@keyframes nido-shopping-fade{0%{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}}.nido-shopping-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4);flex:0 0 auto}.nido-shopping-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-shopping-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-shopping-panel__close:hover{background:var(--ink-4)}.nido-shopping-panel__board{position:relative;flex:1 1 auto;min-height:0;background:var(--bg-card-elev);background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:24px 24px;overflow:hidden}.nido-shopping-panel__canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;cursor:crosshair;display:block}.nido-shopping-panel__toolbar{position:absolute;bottom:20px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:var(--s-3);background:var(--bg-card-elev);border:1px solid var(--ink-4);border-radius:var(--r-pill);padding:8px 12px;box-shadow:var(--shadow-lg);z-index:2}.nido-shopping-panel__tool{border:none;background:transparent;font-size:20px;line-height:1;width:44px;height:44px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--ink-2);transition:background .2s,color .2s}.nido-shopping-panel__tool:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-shopping-panel__tool--danger:hover{background:color-mix(in srgb,var(--danger) 12%,transparent);color:var(--danger)}.nido-shopping-panel__color{width:36px;height:36px;border:1px solid var(--ink-4);border-radius:50%;background:transparent;padding:0;cursor:pointer;overflow:hidden}.nido-shopping-panel__color::-webkit-color-swatch-wrapper{padding:0}.nido-shopping-panel__color::-webkit-color-swatch{border:none;border-radius:50%}.nido-shopping-panel__color::-moz-color-swatch{border:none;border-radius:50%}.nido-shopping-panel__size{width:100px;cursor:pointer;accent-color:var(--accent)}@media(max-width:768px){.nido-shopping-panel__header{padding:16px 20px}.nido-shopping-panel__toolbar{bottom:12px;gap:6px;padding:6px 8px}.nido-shopping-panel__size{width:70px}}@media(prefers-reduced-motion:reduce){.nido-shopping-panel__content{animation:none}}', Wn = "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let Un = !1;
function Qa() {
  if (Un || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${Wn}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = Wn, document.head.appendChild(t);
  }
  Un = !0;
}
class er extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, Qa();
    const t = this.attachShadow({ mode: "open" }), i = document.createElement("style");
    i.textContent = `${Ka}
${Ga}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(i, this._mountPoint);
  }
  set hass(t) {
    this._hass = t, this._render();
  }
  get hass() {
    return this._hass;
  }
  set narrow(t) {
    this._narrow = t;
  }
  get narrow() {
    return this._narrow;
  }
  set route(t) {
    this._route = t;
  }
  get route() {
    return this._route;
  }
  set panel(t) {
    this._panel = t;
  }
  get panel() {
    return this._panel;
  }
  connectedCallback() {
    const { theme: t, mode: i } = st();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", i), this._render();
  }
  disconnectedCallback() {
    mn(null, this._mountPoint);
  }
  applyTheme(t, i) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", i);
  }
  _render() {
    mn(Jn(Xa, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", er);
console.info(
  "%c NIDO %c v0.3.1 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
