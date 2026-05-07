var Oe, H, ct, oe, zn, dt, pt, qe, Ce, fe, ut, ln, en, nn, Te = {}, $e = [], di = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Fe = Array.isArray;
function ie(n, t) {
  for (var i in t) n[i] = t[i];
  return n;
}
function cn(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function ht(n, t, i) {
  var r, o, a, s = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? o = t[a] : s[a] = t[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Oe.call(arguments, 2) : i), typeof n == "function" && n.defaultProps != null) for (a in n.defaultProps) s[a] === void 0 && (s[a] = n.defaultProps[a]);
  return Ae(n, s, r, o, null);
}
function Ae(n, t, i, r, o) {
  var a = { type: n, props: t, key: i, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ct, __i: -1, __u: 0 };
  return o == null && H.vnode != null && H.vnode(a), a;
}
function K(n) {
  return n.children;
}
function Ee(n, t) {
  this.props = n, this.context = t;
}
function de(n, t) {
  if (t == null) return n.__ ? de(n.__, n.__i + 1) : null;
  for (var i; t < n.__k.length; t++) if ((i = n.__k[t]) != null && i.__e != null) return i.__e;
  return typeof n.type == "function" ? de(n) : null;
}
function pi(n) {
  if (n.__P && n.__d) {
    var t = n.__v, i = t.__e, r = [], o = [], a = ie({}, t);
    a.__v = t.__v + 1, H.vnode && H.vnode(a), dn(n.__P, a, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [i] : null, r, i ?? de(t), !!(32 & t.__u), o), a.__v = t.__v, a.__.__k[a.__i] = a, mt(r, a, o), t.__e = t.__ = null, a.__e != i && _t(a);
  }
}
function _t(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), _t(n);
}
function Sn(n) {
  (!n.__d && (n.__d = !0) && oe.push(n) && !Pe.__r++ || zn != H.debounceRendering) && ((zn = H.debounceRendering) || dt)(Pe);
}
function Pe() {
  try {
    for (var n, t = 1; oe.length; ) oe.length > t && oe.sort(pt), n = oe.shift(), t = oe.length, pi(n);
  } finally {
    oe.length = Pe.__r = 0;
  }
}
function ft(n, t, i, r, o, a, s, l, p, c, u) {
  var d, h, g, v, b, m, _, f = r && r.__k || $e, x = t.length;
  for (p = ui(i, t, f, p, x), d = 0; d < x; d++) (g = i.__k[d]) != null && (h = g.__i != -1 && f[g.__i] || Te, g.__i = d, m = dn(n, g, h, o, a, s, l, p, c, u), v = g.__e, g.ref && h.ref != g.ref && (h.ref && pn(h.ref, null, g), u.push(g.ref, g.__c || v, g)), b == null && v != null && (b = v), (_ = !!(4 & g.__u)) || h.__k === g.__k ? (p = gt(g, p, n, _), _ && h.__e && (h.__e = null)) : typeof g.type == "function" && m !== void 0 ? p = m : v && (p = v.nextSibling), g.__u &= -7);
  return i.__e = b, p;
}
function ui(n, t, i, r, o) {
  var a, s, l, p, c, u = i.length, d = u, h = 0;
  for (n.__k = new Array(o), a = 0; a < o; a++) (s = t[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = n.__k[a] = Ae(null, s, null, null, null) : Fe(s) ? s = n.__k[a] = Ae(K, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = n.__k[a] = Ae(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : n.__k[a] = s, p = a + h, s.__ = n, s.__b = n.__b + 1, l = null, (c = s.__i = hi(s, i, p, d)) != -1 && (d--, (l = i[c]) && (l.__u |= 2)), l == null || l.__v == null ? (c == -1 && (o > u ? h-- : o < u && h++), typeof s.type != "function" && (s.__u |= 4)) : c != p && (c == p - 1 ? h-- : c == p + 1 ? h++ : (c > p ? h-- : h++, s.__u |= 4))) : n.__k[a] = null;
  if (d) for (a = 0; a < u; a++) (l = i[a]) != null && (2 & l.__u) == 0 && (l.__e == r && (r = de(l)), vt(l, l));
  return r;
}
function gt(n, t, i, r) {
  var o, a;
  if (typeof n.type == "function") {
    for (o = n.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = n, t = gt(o[a], t, i, r));
    return t;
  }
  n.__e != t && (r && (t && n.type && !t.parentNode && (t = de(n)), i.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function hi(n, t, i, r) {
  var o, a, s, l = n.key, p = n.type, c = t[i], u = c != null && (2 & c.__u) == 0;
  if (c === null && l == null || u && l == c.key && p == c.type) return i;
  if (r > (u ? 1 : 0)) {
    for (o = i - 1, a = i + 1; o >= 0 || a < t.length; ) if ((c = t[s = o >= 0 ? o-- : a++]) != null && (2 & c.__u) == 0 && l == c.key && p == c.type) return s;
  }
  return -1;
}
function In(n, t, i) {
  t[0] == "-" ? n.setProperty(t, i ?? "") : n[t] = i == null ? "" : typeof i != "number" || di.test(t) ? i : i + "px";
}
function we(n, t, i, r, o) {
  var a, s;
  e: if (t == "style") if (typeof i == "string") n.style.cssText = i;
  else {
    if (typeof r == "string" && (n.style.cssText = r = ""), r) for (t in r) i && t in i || In(n.style, t, "");
    if (i) for (t in i) r && i[t] == r[t] || In(n.style, t, i[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(ut, "$1")), s = t.toLowerCase(), t = s in n || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + a] = i, i ? r ? i[fe] = r[fe] : (i[fe] = ln, n.addEventListener(t, a ? nn : en, a)) : n.removeEventListener(t, a ? nn : en, a);
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
function Cn(n) {
  return function(t) {
    if (this.l) {
      var i = this.l[t.type + n];
      if (t[Ce] == null) t[Ce] = ln++;
      else if (t[Ce] < i[fe]) return;
      return i(H.event ? H.event(t) : t);
    }
  };
}
function dn(n, t, i, r, o, a, s, l, p, c) {
  var u, d, h, g, v, b, m, _, f, x, M, I, P, z, L, T = t.type;
  if (t.constructor !== void 0) return null;
  128 & i.__u && (p = !!(32 & i.__u), a = [l = t.__e = i.__e]), (u = H.__b) && u(t);
  e: if (typeof T == "function") try {
    if (_ = t.props, f = T.prototype && T.prototype.render, x = (u = T.contextType) && r[u.__c], M = u ? x ? x.props.value : u.__ : r, i.__c ? m = (d = t.__c = i.__c).__ = d.__E : (f ? t.__c = d = new T(_, M) : (t.__c = d = new Ee(_, M), d.constructor = T, d.render = fi), x && x.sub(d), d.state || (d.state = {}), d.__n = r, h = d.__d = !0, d.__h = [], d._sb = []), f && d.__s == null && (d.__s = d.state), f && T.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = ie({}, d.__s)), ie(d.__s, T.getDerivedStateFromProps(_, d.__s))), g = d.props, v = d.state, d.__v = t, h) f && T.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), f && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (f && T.getDerivedStateFromProps == null && _ !== g && d.componentWillReceiveProps != null && d.componentWillReceiveProps(_, M), t.__v == i.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(_, d.__s, M) === !1) {
        t.__v != i.__v && (d.props = _, d.state = d.__s, d.__d = !1), t.__e = i.__e, t.__k = i.__k, t.__k.some(function(R) {
          R && (R.__ = t);
        }), $e.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && s.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(_, d.__s, M), f && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(g, v, b);
      });
    }
    if (d.context = M, d.props = _, d.__P = n, d.__e = !1, I = H.__r, P = 0, f) d.state = d.__s, d.__d = !1, I && I(t), u = d.render(d.props, d.state, d.context), $e.push.apply(d.__h, d._sb), d._sb = [];
    else do
      d.__d = !1, I && I(t), u = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++P < 25);
    d.state = d.__s, d.getChildContext != null && (r = ie(ie({}, r), d.getChildContext())), f && !h && d.getSnapshotBeforeUpdate != null && (b = d.getSnapshotBeforeUpdate(g, v)), z = u != null && u.type === K && u.key == null ? bt(u.props.children) : u, l = ft(n, Fe(z) ? z : [z], t, i, r, o, a, s, l, p, c), d.base = t.__e, t.__u &= -161, d.__h.length && s.push(d), m && (d.__E = d.__ = null);
  } catch (R) {
    if (t.__v = null, p || a != null) if (R.then) {
      for (t.__u |= p ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      a[a.indexOf(l)] = null, t.__e = l;
    } else {
      for (L = a.length; L--; ) cn(a[L]);
      tn(t);
    }
    else t.__e = i.__e, t.__k = i.__k, R.then || tn(t);
    H.__e(R, t, i);
  }
  else a == null && t.__v == i.__v ? (t.__k = i.__k, t.__e = i.__e) : l = t.__e = _i(i.__e, t, i, r, o, a, s, p, c);
  return (u = H.diffed) && u(t), 128 & t.__u ? void 0 : l;
}
function tn(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(tn));
}
function mt(n, t, i) {
  for (var r = 0; r < i.length; r++) pn(i[r], i[++r], i[++r]);
  H.__c && H.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(a) {
        a.call(o);
      });
    } catch (a) {
      H.__e(a, o.__v);
    }
  });
}
function bt(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : Fe(n) ? n.map(bt) : ie({}, n);
}
function _i(n, t, i, r, o, a, s, l, p) {
  var c, u, d, h, g, v, b, m = i.props || Te, _ = t.props, f = t.type;
  if (f == "svg" ? o = "http://www.w3.org/2000/svg" : f == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), a != null) {
    for (c = 0; c < a.length; c++) if ((g = a[c]) && "setAttribute" in g == !!f && (f ? g.localName == f : g.nodeType == 3)) {
      n = g, a[c] = null;
      break;
    }
  }
  if (n == null) {
    if (f == null) return document.createTextNode(_);
    n = document.createElementNS(o, f, _.is && _), l && (H.__m && H.__m(t, a), l = !1), a = null;
  }
  if (f == null) m === _ || l && n.data == _ || (n.data = _);
  else {
    if (a = a && Oe.call(n.childNodes), !l && a != null) for (m = {}, c = 0; c < n.attributes.length; c++) m[(g = n.attributes[c]).name] = g.value;
    for (c in m) g = m[c], c == "dangerouslySetInnerHTML" ? d = g : c == "children" || c in _ || c == "value" && "defaultValue" in _ || c == "checked" && "defaultChecked" in _ || we(n, c, null, g, o);
    for (c in _) g = _[c], c == "children" ? h = g : c == "dangerouslySetInnerHTML" ? u = g : c == "value" ? v = g : c == "checked" ? b = g : l && typeof g != "function" || m[c] === g || we(n, c, g, m[c], o);
    if (u) l || d && (u.__html == d.__html || u.__html == n.innerHTML) || (n.innerHTML = u.__html), t.__k = [];
    else if (d && (n.innerHTML = ""), ft(t.type == "template" ? n.content : n, Fe(h) ? h : [h], t, i, r, f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, a, s, a ? a[0] : i.__k && de(i, 0), l, p), a != null) for (c = a.length; c--; ) cn(a[c]);
    l || (c = "value", f == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[c] || f == "progress" && !v || f == "option" && v != m[c]) && we(n, c, v, m[c], o), c = "checked", b != null && b != n[c] && we(n, c, b, m[c], o));
  }
  return n;
}
function pn(n, t, i) {
  try {
    if (typeof n == "function") {
      var r = typeof n.__u == "function";
      r && n.__u(), r && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    H.__e(o, i);
  }
}
function vt(n, t, i) {
  var r, o;
  if (H.unmount && H.unmount(n), (r = n.ref) && (r.current && r.current != n.__e || pn(r, null, t)), (r = n.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      H.__e(a, t);
    }
    r.base = r.__P = null;
  }
  if (r = n.__k) for (o = 0; o < r.length; o++) r[o] && vt(r[o], t, i || typeof n.type != "function");
  i || cn(n.__e), n.__c = n.__ = n.__e = void 0;
}
function fi(n, t, i) {
  return this.constructor(n, i);
}
function An(n, t, i) {
  var r, o, a, s;
  t == document && (t = document.documentElement), H.__ && H.__(n, t), o = (r = !1) ? null : t.__k, a = [], s = [], dn(t, n = t.__k = ht(K, null, [n]), o || Te, Te, t.namespaceURI, o ? null : t.firstChild ? Oe.call(t.childNodes) : null, a, o ? o.__e : t.firstChild, r, s), mt(a, n, s);
}
Oe = $e.slice, H = { __e: function(n, t, i, r) {
  for (var o, a, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(n)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, r || {}), s = o.__d), s) return o.__E = o;
  } catch (l) {
    n = l;
  }
  throw n;
} }, ct = 0, Ee.prototype.setState = function(n, t) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = ie({}, this.state), typeof n == "function" && (n = n(ie({}, i), this.props)), n && ie(i, n), n != null && this.__v && (t && this._sb.push(t), Sn(this));
}, Ee.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Sn(this));
}, Ee.prototype.render = K, oe = [], dt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, pt = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Pe.__r = 0, qe = Math.random().toString(8), Ce = "__d" + qe, fe = "__a" + qe, ut = /(PointerCapture)$|Capture$/i, ln = 0, en = Cn(!1), nn = Cn(!0);
var gi = 0;
function e(n, t, i, r, o, a) {
  t || (t = {});
  var s, l, p = t;
  if ("ref" in p) for (l in p = {}, t) l == "ref" ? s = t[l] : p[l] = t[l];
  var c = { type: n, props: p, key: i, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --gi, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof n == "function" && (s = n.defaultProps)) for (l in s) p[l] === void 0 && (p[l] = s[l]);
  return H.vnode && H.vnode(c), c;
}
var be, U, Ye, En, ve = 0, xt = [], q = H, Dn = q.__b, Tn = q.__r, $n = q.diffed, Pn = q.__c, Ln = q.unmount, Nn = q.__;
function un(n, t) {
  q.__h && q.__h(U, n, ve || t), ve = 0;
  var i = U.__H || (U.__H = { __: [], __h: [] });
  return n >= i.__.length && i.__.push({}), i.__[n];
}
function S(n) {
  return ve = 1, mi(wt, n);
}
function mi(n, t, i) {
  var r = un(be++, 2);
  if (r.t = n, !r.__c && (r.__ = [wt(void 0, t), function(l) {
    var p = r.__N ? r.__N[0] : r.__[0], c = r.t(p, l);
    p !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = U, !U.__f)) {
    var o = function(l, p, c) {
      if (!r.__c.__H) return !0;
      var u = r.__c.__H.__.filter(function(h) {
        return h.__c;
      });
      if (u.every(function(h) {
        return !h.__N;
      })) return !a || a.call(this, l, p, c);
      var d = r.__c.props !== l;
      return u.some(function(h) {
        if (h.__N) {
          var g = h.__[0];
          h.__ = h.__N, h.__N = void 0, g !== h.__[0] && (d = !0);
        }
      }), a && a.call(this, l, p, c) || d;
    };
    U.__f = !0;
    var a = U.shouldComponentUpdate, s = U.componentWillUpdate;
    U.componentWillUpdate = function(l, p, c) {
      if (this.__e) {
        var u = a;
        a = void 0, o(l, p, c), a = u;
      }
      s && s.call(this, l, p, c);
    }, U.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function Q(n, t) {
  var i = un(be++, 3);
  !q.__s && yt(i.__H, t) && (i.__ = n, i.u = t, U.__H.__h.push(i));
}
function Z(n) {
  return ve = 5, N(function() {
    return { current: n };
  }, []);
}
function N(n, t) {
  var i = un(be++, 7);
  return yt(i.__H, t) && (i.__ = n(), i.__H = t, i.__h = n), i.__;
}
function X(n, t) {
  return ve = 8, N(function() {
    return n;
  }, t);
}
function bi() {
  for (var n; n = xt.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(De), t.__h.some(an), t.__h = [];
    } catch (i) {
      t.__h = [], q.__e(i, n.__v);
    }
  }
}
q.__b = function(n) {
  U = null, Dn && Dn(n);
}, q.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), Nn && Nn(n, t);
}, q.__r = function(n) {
  Tn && Tn(n), be = 0;
  var t = (U = n.__c).__H;
  t && (Ye === U ? (t.__h = [], U.__h = [], t.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (t.__h.some(De), t.__h.some(an), t.__h = [], be = 0)), Ye = U;
}, q.diffed = function(n) {
  $n && $n(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (xt.push(t) !== 1 && En === q.requestAnimationFrame || ((En = q.requestAnimationFrame) || vi)(bi)), t.__H.__.some(function(i) {
    i.u && (i.__H = i.u), i.u = void 0;
  })), Ye = U = null;
}, q.__c = function(n, t) {
  t.some(function(i) {
    try {
      i.__h.some(De), i.__h = i.__h.filter(function(r) {
        return !r.__ || an(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], q.__e(r, i.__v);
    }
  }), Pn && Pn(n, t);
}, q.unmount = function(n) {
  Ln && Ln(n);
  var t, i = n.__c;
  i && i.__H && (i.__H.__.some(function(r) {
    try {
      De(r);
    } catch (o) {
      t = o;
    }
  }), i.__H = void 0, t && q.__e(t, i.__v));
};
var jn = typeof requestAnimationFrame == "function";
function vi(n) {
  var t, i = function() {
    clearTimeout(r), jn && cancelAnimationFrame(t), setTimeout(n);
  }, r = setTimeout(i, 35);
  jn && (t = requestAnimationFrame(i));
}
function De(n) {
  var t = U, i = n.__c;
  typeof i == "function" && (n.__c = void 0, i()), U = t;
}
function an(n) {
  var t = U;
  n.__c = n.__(), U = t;
}
function yt(n, t) {
  return !n || n.length !== t.length || t.some(function(i, r) {
    return i !== n[r];
  });
}
function wt(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function xi(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((i, r) => i.name.localeCompare(r.name, "fr"));
}
async function yi(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function wi(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function ki(n) {
  return n.split(".")[0] ?? "";
}
function Mi(n, t, i) {
  const r = new Map(i.map((s) => [s.id, s.area_id])), o = new Map(t.map((s) => [s.entity_id, s])), a = [];
  for (const [s, l] of Object.entries(n.states)) {
    const p = o.get(s);
    if (p?.disabled_by || p?.hidden_by) continue;
    const c = p?.area_id ?? (p?.device_id ? r.get(p.device_id) ?? null : null), u = p?.name ?? l.attributes.friendly_name ?? p?.original_name ?? s;
    a.push({
      entity_id: s,
      domain: ki(s),
      area_id: c,
      friendly_name: u,
      state: l
    });
  }
  return a;
}
function zi(n) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const r = t.get(i.area_id) ?? [];
    r.push(i), t.set(i.area_id, r);
  }
  return t;
}
function hn(n) {
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
function kt(n) {
  const t = {};
  for (const i of n) {
    if (i.domain !== "sensor") continue;
    const r = i.state.attributes.device_class, o = i.state.attributes.unit_of_measurement ?? "", a = i.state.state;
    a === "unavailable" || a === "unknown" || (r === "temperature" && !t.temperature ? t.temperature = { value: a, unit: o } : r === "humidity" && !t.humidity ? t.humidity = { value: a, unit: o } : r === "illuminance" && !t.illuminance && (t.illuminance = { value: a, unit: o }));
  }
  return t;
}
const J = {
  favorites: "nido.favorites",
  exposed: "nido.exposed",
  excludedUsers: "nido.excludedUsers",
  roomsOrder: "nido.roomsOrder",
  roomEntitiesOrder: "nido.roomEntitiesOrder",
  onboarded: "nido.onboarded",
  theme: "nido.theme",
  mode: "nido.mode",
  lastNotificationRead: "nido.lastNotificationRead"
}, Mt = ["terracotta", "miel", "sauge", "cosy"], Si = ["light", "dark"];
function ne() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function Ii() {
  const n = ne();
  if (!n) return [];
  const t = n.getItem(J.favorites);
  if (!t) return [];
  try {
    const i = JSON.parse(t);
    return Array.isArray(i) ? i.filter((r) => typeof r == "string") : [];
  } catch {
    return [];
  }
}
function rn(n) {
  const t = ne();
  t && t.setItem(J.favorites, JSON.stringify(n));
}
function _n(n) {
  const t = ne();
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
function fn(n, t) {
  const i = ne();
  i && i.setItem(n, JSON.stringify(t));
}
const Ci = () => _n(J.exposed), On = (n) => fn(J.exposed, n), Ai = () => _n(J.excludedUsers), Fn = (n) => fn(J.excludedUsers, n), Ei = () => _n(J.roomsOrder), Di = (n) => fn(J.roomsOrder, n);
function Ti() {
  const n = ne();
  if (!n) return {};
  const t = n.getItem(J.roomEntitiesOrder);
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
function $i(n) {
  const t = ne();
  t && t.setItem(J.roomEntitiesOrder, JSON.stringify(n));
}
function Rn() {
  return ne()?.getItem(J.onboarded) === "1";
}
function Wn(n) {
  const t = ne();
  t && t.setItem(J.onboarded, "1");
}
function zt() {
  const n = ne(), t = n?.getItem(J.theme), i = n?.getItem(J.mode);
  return {
    theme: Mt.includes(t) ? t : "terracotta",
    mode: Si.includes(i) ? i : "light"
  };
}
function Hn(n, t) {
  const i = ne();
  i && (i.setItem(J.theme, n), i.setItem(J.mode, t));
}
function Pi() {
  return ne()?.getItem(J.lastNotificationRead) ?? null;
}
function Li(n) {
  ne()?.setItem(J.lastNotificationRead, n);
}
const Ni = 6, ji = 20;
function Oi(n, t) {
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
function St(n, t, i) {
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
function on(n, t, i) {
  const [r, o] = S({ draggingId: null, overId: null }), a = Z(null), s = Z(null), l = Z(n);
  l.current = n;
  const p = Z(i);
  p.current = i;
  const c = Z(t);
  c.current = t;
  const u = X((h, g) => {
    const v = s.current;
    if (!v) return null;
    const b = v.querySelectorAll("[data-drag-id]");
    for (const m of Array.from(b)) {
      const _ = m.getBoundingClientRect();
      if (h >= _.left && h <= _.right && g >= _.top && g <= _.bottom)
        return m.getAttribute("data-drag-id");
    }
    return null;
  }, []);
  Q(() => {
    const h = (b) => {
      const m = a.current;
      if (!m || m.pointerType !== "touch") return;
      if (m.entered) {
        b.preventDefault();
        return;
      }
      const _ = b.touches[0];
      if (!_) return;
      const f = _.clientX - m.x, x = _.clientY - m.y;
      Math.hypot(f, x) <= ji ? b.preventDefault() : (m.timerId && clearTimeout(m.timerId), a.current = null);
    }, g = (b) => {
      const m = a.current;
      if (!m) return;
      if (m.pointerType === "touch") {
        if (!m.entered)
          return;
      } else if (!m.entered) {
        const f = b.clientX - m.x, x = b.clientY - m.y;
        if (Math.hypot(f, x) < Ni) return;
        m.entered = !0, o({ draggingId: m.id, overId: null });
      }
      const _ = u(b.clientX, b.clientY);
      o((f) => f.overId === _ ? f : { ...f, overId: _ });
    }, v = () => {
      const b = a.current;
      if (b?.timerId && clearTimeout(b.timerId), a.current = null, !b || !b.entered) return;
      const m = (_) => {
        _.preventDefault(), _.stopPropagation();
      };
      window.addEventListener("click", m, { capture: !0, once: !0 }), o((_) => {
        const { draggingId: f, overId: x } = _;
        if (f && x && f !== x) {
          const M = l.current, I = c.current, P = M.findIndex((L) => I(L) === f), z = M.findIndex((L) => I(L) === x);
          if (P >= 0 && z >= 0) {
            const L = [...M], [T] = L.splice(P, 1);
            L.splice(z, 0, T), p.current(L);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", g), document.addEventListener("pointerup", v), document.addEventListener("pointercancel", v), document.addEventListener("touchmove", h, { passive: !1 }), () => {
      document.removeEventListener("pointermove", g), document.removeEventListener("pointerup", v), document.removeEventListener("pointercancel", v), document.removeEventListener("touchmove", h);
    };
  }, [u]);
  const d = X(
    (h) => {
      const g = r.draggingId === h, v = r.draggingId !== null && r.draggingId !== h && r.overId === h;
      return {
        "data-drag-id": h,
        "data-dragging": g ? "true" : void 0,
        "data-drag-over": v ? "true" : void 0,
        onPointerDown: (b) => {
          if (b.button !== void 0 && b.button !== 0) return;
          const m = b.currentTarget;
          if (!Oi(b.target, m))
            if (b.pointerType === "touch") {
              const _ = window.setTimeout(() => {
                const f = a.current;
                f && f.id === h && !f.entered && (f.entered = !0, o({ draggingId: h, overId: null }), "vibrate" in navigator && navigator.vibrate(50));
              }, 1500);
              a.current = { id: h, x: b.clientX, y: b.clientY, entered: !1, pointerType: "touch", timerId: _ };
            } else
              a.current = { id: h, x: b.clientX, y: b.clientY, entered: !1, pointerType: b.pointerType };
        }
      };
    },
    [r.draggingId, r.overId]
  );
  return {
    containerRef: s,
    itemPropsFor: d,
    isDragging: r.draggingId !== null
  };
}
const y = ({ children: n, size: t = 24, stroke: i = 1.5, fill: r = "none", style: o }) => /* @__PURE__ */ e(
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
), ye = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), It = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" }),
  /* @__PURE__ */ e("path", { d: "M10 19a2 2 0 0 0 4 0" })
] }), Fi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), gn = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), mn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), bn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 8V4M15 8V4" }),
  /* @__PURE__ */ e("path", { d: "M6 8h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }),
  /* @__PURE__ */ e("path", { d: "M12 16v5" })
] }), Vn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), Bn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4", "stroke-dasharray": "1 2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "0.8", fill: "currentColor" })
] }), Ri = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), ge = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), se = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), Wi = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), Hi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), xe = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), vn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), Vi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), xn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), Bi = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), Ui = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), qi = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), Yi = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), pe = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), Ct = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), At = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), ce = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), yn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), Et = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" }) }), Dt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" }),
  /* @__PURE__ */ e("path", { d: "M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" })
] }), Un = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M9 18v2M13 18v3M17 18v2" })
] }), Ze = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" })
] }), Je = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "m12 17-2 4h3l-1 3" })
] }), Zi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" }),
  /* @__PURE__ */ e("path", { d: "M5 17h14M3 21h18" })
] }), qn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 8h12a3 3 0 1 0-3-3" }),
  /* @__PURE__ */ e("path", { d: "M3 13h17a3 3 0 1 1-3 3" }),
  /* @__PURE__ */ e("path", { d: "M3 18h9" })
] }), Ji = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), Ki = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), wn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), Gi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), Xi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), Qi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), ea = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), na = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), ta = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), ia = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), Le = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), kn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), Mn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), Yn = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), Tt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 17 17 7" }),
  /* @__PURE__ */ e("path", { d: "M8 7h9v9" })
] }), aa = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), ra = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), oa = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), sa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ e("path", { d: "m20 20-3.5-3.5" })
] }), le = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M6 6l12 12M18 6 6 18" }) }), la = (n) => /* @__PURE__ */ e(y, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), $t = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), ca = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), da = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), pa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), Pt = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), Lt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), ua = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), ha = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), _a = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), fa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), ga = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), Nt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 9v4" }),
  /* @__PURE__ */ e("path", { d: "M12 17h.01" })
] }), ma = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 12v8a2 2 0 0 0 4 0" }),
  /* @__PURE__ */ e("path", { d: "M12 2v1" })
] }), ba = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
] }), va = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "M12 16v-4" }),
  /* @__PURE__ */ e("path", { d: "M12 8h.01" })
] }), xa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), jt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
] }), ya = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
  /* @__PURE__ */ e("line", { x1: "12", y1: "2", x2: "12", y2: "12" })
] }), wa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("path", { d: "M9 7h6M9 11h6M9 15h4" }),
  /* @__PURE__ */ e("path", { d: "M5 7h2M5 11h2M5 15h2" })
] });
function ka(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function Ot({
  hass: n,
  entity: t,
  hero: i = !1,
  breatheVariant: r = 1,
  roomLabel: o
}) {
  const a = t.state.state === "on", s = t.state.state === "unavailable", [l, p] = S(!1), [c, u] = S(null), d = c ?? ka(t.state), h = async () => {
    if (!s) {
      p(!0);
      try {
        await n.callService("light", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, g = async (m) => {
    u(m);
    try {
      await n.callService("light", "turn_on", {
        entity_id: t.entity_id,
        brightness_pct: m
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
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(ye, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": a,
          disabled: s || l,
          onClick: h,
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
          d,
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
          value: d,
          style: { "--val": `${(d - 1) / 99 * 100}%` },
          onInput: (m) => g(Number(m.target.value))
        }
      )
    ] }),
    !a && !s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Éteinte" }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Ma(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function Ft({ hass: n, entity: t, roomLabel: i, hero: r = !1 }) {
  const o = t.state.state === "unavailable", [a, s] = S(null), l = a ?? Ma(t.state), p = l > 0, c = async (h) => {
    s(h);
    try {
      await n.callService("cover", "set_cover_position", {
        entity_id: t.entity_id,
        position: h
      });
    } finally {
      setTimeout(() => s(null), 50);
    }
  }, d = ["n-card", r ? p ? "n-card--accent" : "n-card--accent-muted" : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": p ? "true" : "false", children: /* @__PURE__ */ e("div", { class: d, "data-hero": r ? "true" : "false", "data-on": p ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(mn, { size: 20 }) }),
      /* @__PURE__ */ e("div", { class: "n-blinds", children: [0, 1, 2, 3, 4, 5].map((h) => /* @__PURE__ */ e(
        "span",
        {
          class: "n-blinds__bar",
          "data-active": h / 6 * 100 < l ? "true" : "false"
        },
        h
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
          onInput: (h) => c(Number(h.target.value))
        }
      ),
      /* @__PURE__ */ e("div", { style: { marginTop: "12px", display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          style: { fontSize: "12px", padding: "6px 12px" },
          onClick: () => c(l !== 0 ? 0 : 100),
          children: l !== 0 ? "Fermer" : "Ouvrir"
        }
      ) })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] }) });
}
function Rt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2,
  hero: o = !1
}) {
  const a = t.state.state === "on", s = t.state.state === "unavailable", [l, p] = S(!1), c = t.state.attributes.current_power_w, u = async () => {
    if (!s) {
      p(!0);
      try {
        await n.callService("switch", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, h = ["n-card", o ? a ? "n-card--accent" : "n-card--accent-muted" : "", a ? `breathe-${r}` : "", l ? "is-pending" : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-hero": o ? "true" : "false", "data-on": a ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(bn, { size: 18 }) }),
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
    typeof c == "number" && /* @__PURE__ */ e("div", { class: "n-power", children: [
      /* @__PURE__ */ e("span", { class: `${a ? "n-power__value" : "n-power__value n-power__value--muted"} ${o ? "n-value--xl" : ""}`, children: Math.round(a ? c : 0) }),
      /* @__PURE__ */ e("span", { class: "n-power__unit", children: "W" })
    ] }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const za = {
  door: Vn,
  garage_door: Vn,
  window: Hi,
  smoke: Bn,
  gas: Bn,
  moisture: Ri,
  motion: ge,
  occupancy: ge,
  presence: ge
}, Sa = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, Ia = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]), Ca = /* @__PURE__ */ new Set(["door", "garage_door", "window"]);
function Wt({ entity: n, roomLabel: t, hero: i = !1 }) {
  const r = n.state.attributes.device_class ?? "", o = n.state.state === "on", a = n.state.state === "unavailable", s = za[r] ?? xe, l = Sa[r] ?? { on: "Actif", off: "Inactif" }, p = Ia.has(r), c = Ca.has(r), u = a ? "indisponible" : o ? "on" : "off", h = ["n-card", i ? o ? "n-card--accent" : "n-card--accent-muted" : "n-card--compact"].filter(Boolean).join(" "), g = /* @__PURE__ */ e("div", { class: h, "data-hero": i ? "true" : "false", "data-status": u, "data-alert": p ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(s, { size: i ? 22 : 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-dot", "aria-hidden": "true" })
    ] }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: `n-title ${i ? "n-title--xl" : "n-title--sm"}`, children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: a ? "Indisponible" : o ? l.on : l.off })
  ] });
  return c ? /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": o ? "true" : "false", children: g }) : g;
}
const Aa = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, Ea = {
  heat: Bi,
  cool: Ui,
  heat_cool: se,
  auto: se,
  dry: se,
  fan_only: se
};
function Ht({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2,
  hero: o = !1
}) {
  const a = t.state.state === "unavailable", s = t.state.state, l = s !== "off" && !a, p = t.state.attributes.current_temperature, c = t.state.attributes.temperature, u = t.state.attributes.min_temp ?? 7, d = t.state.attributes.max_temp ?? 35, h = t.state.attributes.target_temp_step ?? 0.5, [g, v] = S(null), b = g ?? c ?? p ?? 20, m = async (M) => {
    const I = Math.min(d, Math.max(u, M));
    v(I);
    try {
      await n.callService("climate", "set_temperature", {
        entity_id: t.entity_id,
        temperature: I
      });
    } finally {
      setTimeout(() => v(null), 50);
    }
  }, _ = Ea[s] ?? se, x = ["n-card", o ? l ? "n-card--accent" : "n-card--accent-muted" : "", l ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: x, "data-hero": o ? "true" : "false", "data-on": l ? "true" : "false", children: [
    l && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(_, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Aa[s] ?? s })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: `n-title ${o ? "n-title--xl" : ""}`, children: t.friendly_name }),
    !a && /* @__PURE__ */ e(K, { children: [
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
            onClick: () => m(b - h),
            disabled: b - h < u,
            children: /* @__PURE__ */ e(qi, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-stepper",
            "aria-label": "Augmenter",
            onClick: () => m(b + h),
            disabled: b + h > d,
            children: /* @__PURE__ */ e(Yi, { size: 16 })
          }
        )
      ] })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Vt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "locked", s = r === "jammed", l = r === "locking" || r === "unlocking", [p, c] = S(!1), u = async () => {
    if (!(o || l || p)) {
      c(!0);
      try {
        await n.callService("lock", a ? "unlock" : "lock", {
          entity_id: t.entity_id
        });
      } finally {
        c(!1);
      }
    }
  }, d = o ? "Indisponible" : s ? "Bloquée" : l ? r === "locking" ? "Verrouillage…" : "Déverrouillage…" : a ? "Verrouillée" : "Déverrouillée";
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": a ? "true" : "false",
      "data-alert": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a ? vn : Vi, { size: 20 }) }),
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
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: d })
      ]
    }
  );
}
const Da = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function Bt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 3
}) {
  const o = t.state.state, a = o === "unavailable", s = o === "cleaning" || o === "returning", l = o === "error", p = t.state.attributes.battery_level, [c, u] = S(!1), d = async (g) => {
    if (!(a || c)) {
      u(!0);
      try {
        await n.callService("vacuum", g, { entity_id: t.entity_id });
      } finally {
        u(!1);
      }
    }
  }, h = ["n-card", s ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      class: h,
      "data-on": s ? "true" : "false",
      "data-alert": l ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(xn, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(At, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: Da[o] ?? o }),
        !a && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: c || s,
              onClick: () => d("start"),
              children: [
                /* @__PURE__ */ e(pe, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Lancer" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: c || o === "docked",
              onClick: () => d("return_to_base"),
              children: [
                /* @__PURE__ */ e(Ct, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Ta = {
  temperature: se,
  humidity: Wi,
  power: ce,
  energy: ce,
  current: ce,
  voltage: ce,
  illuminance: yn,
  pressure: Ji,
  battery: At
};
function $a(n, t, i) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  if (i === "temperature") return { value: n, unit: t ?? "" };
  const r = Number(n);
  return Number.isFinite(r) ? { value: Math.abs(r) >= 100 ? Math.round(r).toString() : (Math.round(r * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function Ut({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", r = n.state.attributes.unit_of_measurement, o = Ta[i] ?? Ki, a = n.state.state === "unavailable", { value: s, unit: l } = $a(n.state.state, r, i);
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
const Pa = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire"
};
function qt({
  hass: n,
  entity: t,
  roomLabel: i,
  hero: r = !1,
  breatheVariant: o = 4
}) {
  const a = t.state.state, s = a === "unavailable", l = a === "playing", p = a === "off" || a === "standby", c = t.state.attributes.media_title, u = t.state.attributes.media_artist, d = t.state.attributes.app_name, h = t.state.attributes.volume_level, g = t.state.attributes.entity_picture, [v, b] = S(null), m = v ?? h ?? 0, _ = async (I, P = {}) => {
    s || await n.callService("media_player", I, {
      entity_id: t.entity_id,
      ...P
    });
  }, f = async (I) => {
    b(I);
    try {
      await _("volume_set", { volume_level: I });
    } finally {
      setTimeout(() => b(null), 50);
    }
  }, M = ["n-card", r ? l ? "n-card--accent" : "n-card--accent-muted" : "", l ? `breathe-${o}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: M, "data-hero": r ? "true" : "false", "data-on": l ? "true" : "false", children: [
    g && /* @__PURE__ */ e("div", { class: "n-media__bg", "aria-hidden": "true", children: [
      /* @__PURE__ */ e("img", { src: g, alt: "" }),
      /* @__PURE__ */ e("div", { class: "n-media__bg-overlay" })
    ] }),
    l && r && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", style: { alignItems: "center" }, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(wn, { size: 20 }) }),
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Pa[a] ?? a })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-icon-btn",
          style: { width: "36px", height: "36px", background: "transparent" },
          "aria-label": "Allumer / Éteindre",
          onClick: (I) => {
            I.stopPropagation(), _("toggle");
          },
          children: /* @__PURE__ */ e(ya, { size: 18 })
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: r ? "n-title n-title--xl" : "n-title", children: t.friendly_name }),
    !p && !s && (c || u || d) && /* @__PURE__ */ e("div", { class: "n-media__track", children: [
      c && /* @__PURE__ */ e("div", { class: "n-media__title", children: c }),
      u && /* @__PURE__ */ e("div", { class: "n-muted", style: r ? { fontSize: "1rem" } : {}, children: u }),
      d && /* @__PURE__ */ e("div", { class: "n-muted", style: { fontSize: "0.75rem", marginTop: c || u ? "4px" : "0" }, children: d })
    ] }),
    !s && /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("div", { class: "n-media__controls", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Précédent",
            onClick: () => _("media_previous_track"),
            children: /* @__PURE__ */ e(Xi, { size: r ? 20 : 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": l ? "Pause" : "Lecture",
            onClick: () => _("media_play_pause"),
            children: l ? /* @__PURE__ */ e(Gi, { size: r ? 24 : 18 }) : /* @__PURE__ */ e(pe, { size: r ? 24 : 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => _("media_next_track"),
            children: /* @__PURE__ */ e(Qi, { size: r ? 20 : 16 })
          }
        )
      ] }),
      typeof h == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(ea, { size: 14 }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            class: "n-slider",
            min: 0,
            max: 1,
            step: 0.05,
            value: m,
            style: { "--val": `${m * 100}%` },
            onInput: (I) => f(Number(I.target.value))
          }
        )
      ] })
    ] }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const La = {
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
}, Na = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: na },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: ta },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: ia }
];
function Yt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "triggered", s = r.startsWith("armed_"), l = r === "pending" || r === "arming" || r === "disarming", [p, c] = S(!1), u = async (d) => {
    if (!(o || p)) {
      c(!0);
      try {
        await n.callService("alarm_control_panel", d, { entity_id: t.entity_id });
      } finally {
        c(!1);
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(xe, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: La[r] ?? r })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          Na.map(({ id: d, service: h, label: g, Icon: v }) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn",
              "data-active": r === d ? "true" : "false",
              disabled: p || l,
              onClick: () => u(h),
              children: [
                /* @__PURE__ */ e(v, { size: 14 }),
                /* @__PURE__ */ e("span", { children: g })
              ]
            },
            d
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
const ja = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function Oa(n, t) {
  const i = n.state.attributes.entity_picture;
  if (!i) return null;
  if (i.startsWith("http")) return i;
  const r = t.hassUrl?.("");
  return r ? r.replace(/\/$/, "") + i : i;
}
function Zt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "recording" || r === "streaming", [s, l] = S(0), [p, c] = S(!1), u = Oa(t, n), d = u ? `${u}${u.includes("?") ? "&" : "?"}t=${s}` : null;
  return Q(() => {
    c(!1);
  }, [u]), /* @__PURE__ */ e("div", { class: "n-card n-card--camera", "data-on": a ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-camera__frame", children: [
      d && !p ? /* @__PURE__ */ e(
        "img",
        {
          class: "n-camera__img",
          src: d,
          alt: t.friendly_name,
          loading: "lazy",
          onError: () => c(!0)
        }
      ) : /* @__PURE__ */ e("div", { class: "n-camera__placeholder", "aria-hidden": "true", style: { display: "flex", flexDirection: "column", alignItems: "center" }, children: [
        /* @__PURE__ */ e(Le, { size: 28 }),
        p && /* @__PURE__ */ e("span", { style: { fontSize: "10px", marginTop: "4px", opacity: 0.7 }, children: "Erreur de flux" })
      ] }),
      a && /* @__PURE__ */ e("span", { class: "n-camera__live", children: "● LIVE" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-card__head n-card__head--inline", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Le, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          disabled: o || !d,
          onClick: () => {
            l(Date.now()), c(!1);
          },
          children: "Rafraîchir"
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: ja[r] ?? r })
  ] });
}
function Jt({ hass: n, entity: t, roomLabel: i, breatheVariant: r = 2 }) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", s = t.state.attributes.percentage, l = typeof s == "number", [p, c] = S(!1), [u, d] = S(null), h = u ?? (l ? s : o ? 100 : 0), g = async () => {
    if (!a) {
      c(!0);
      try {
        await n.callService("fan", "toggle", { entity_id: t.entity_id });
      } finally {
        c(!1);
      }
    }
  }, v = async (m) => {
    d(m);
    try {
      await n.callService("fan", "set_percentage", {
        entity_id: t.entity_id,
        percentage: m
      });
    } finally {
      setTimeout(() => d(null), 50);
    }
  }, b = ["n-card", o ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: b, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(kn, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: a || p,
          onClick: g,
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
          h,
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
          value: h,
          style: { "--val": `${h}%` },
          onInput: (m) => v(Number(m.target.value))
        }
      )
    ] }),
    !o && !a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Arrêté" }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Kt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.domain === "scene", o = t.state.state === "unavailable", [a, s] = S(!1), [l, p] = S(!1), c = async () => {
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: r ? /* @__PURE__ */ e(Mn, { size: 18 }) : /* @__PURE__ */ e(pe, { size: 16 }) }),
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
            onClick: c,
            children: [
              /* @__PURE__ */ e(pe, { size: 14 }),
              /* @__PURE__ */ e("span", { children: r ? "Activer" : "Lancer" })
            ]
          }
        )
      ]
    }
  );
}
const Fa = {
  "clear-night": { label: "Nuit claire", Icon: $t },
  cloudy: { label: "Nuageux", Icon: Et },
  exceptional: { label: "Conditions extrêmes", Icon: Je },
  fog: { label: "Brouillard", Icon: Zi },
  hail: { label: "Grêle", Icon: Ze },
  lightning: { label: "Orage", Icon: Je },
  "lightning-rainy": { label: "Orage pluvieux", Icon: Je },
  partlycloudy: { label: "Éclaircies", Icon: Dt },
  pouring: { label: "Pluie battante", Icon: Un },
  rainy: { label: "Pluvieux", Icon: Un },
  snowy: { label: "Neigeux", Icon: Ze },
  "snowy-rainy": { label: "Neige et pluie", Icon: Ze },
  sunny: { label: "Ensoleillé", Icon: yn },
  windy: { label: "Venteux", Icon: qn },
  "windy-variant": { label: "Venteux", Icon: qn }
};
function me(n) {
  return Fa[n] ?? { label: n || "—", Icon: Et };
}
function Gt(n, t) {
  if (n == null || n === "") return "—";
  const i = Number(n);
  return Number.isFinite(i) ? `${n}${t}` : "—";
}
function Xt({ entity: n, roomLabel: t }) {
  const i = n.state.state === "unavailable" || n.state.state === "unknown", { label: r, Icon: o } = me(n.state.state), a = n.state.attributes.temperature_unit ?? "°", s = Gt(n.state.attributes.temperature, a), l = n.state.attributes.humidity;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact n-weather", "data-status": i ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble n-weather__icon", children: /* @__PURE__ */ e(o, { size: 20 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-weather__readout", children: /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }) }),
    /* @__PURE__ */ e("div", { class: "n-weather__meta", children: [
      /* @__PURE__ */ e("span", { children: r }),
      typeof l == "number" && Number.isFinite(l) && /* @__PURE__ */ e(K, { children: [
        /* @__PURE__ */ e("span", { class: "n-weather__sep", children: "•" }),
        /* @__PURE__ */ e("span", { children: [
          Math.round(l),
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Zn({ entity: n }) {
  if (n.state.state === "unavailable" || n.state.state === "unknown") return null;
  const { label: t, Icon: i } = me(n.state.state), r = n.state.attributes.temperature_unit ?? "°", o = Gt(n.state.attributes.temperature, r);
  return /* @__PURE__ */ e("div", { class: "nido-weather-pill", title: n.friendly_name, children: [
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__icon", children: /* @__PURE__ */ e(i, { size: 18 }) }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__temp", children: o }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__sep" }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__label", children: t })
  ] });
}
function Ra(n, t) {
  const i = t.split(".")[1] || "", r = Object.values(n.states).filter((l) => l.entity_id.startsWith("sensor."));
  let o, a, s;
  for (const l of r)
    l.entity_id.endsWith("_next_rain") && (l.entity_id.includes(i) || !o) && (o = l), l.entity_id.endsWith("_weather_alert") && (l.entity_id.includes(i) || !a) && (a = l), l.entity_id.endsWith("_uv") && (l.entity_id.includes(i) || !s) && (s = l);
  return { nextRain: o, weatherAlert: a, uvIndex: s };
}
function Wa({ hass: n, weatherEntityId: t, onClose: i }) {
  const [r, o] = S([]), [a, s] = S([]), l = n.states[t], { nextRain: p, weatherAlert: c, uvIndex: u } = Ra(n, t);
  if (Q(() => {
    let _ = !1;
    async function f() {
      try {
        const x = async (P) => {
          try {
            const z = await n.callWS({
              type: "call_service",
              domain: "weather",
              service: "get_forecasts",
              service_data: { type: P },
              target: { entity_id: t },
              return_response: !0
            });
            return z?.response?.[t]?.forecast || z?.[t]?.forecast || [];
          } catch (z) {
            return console.warn(`Failed to fetch ${P} forecast:`, z), [];
          }
        }, [M, I] = await Promise.all([
          x("daily"),
          x("hourly")
        ]);
        if (_) return;
        o(M), s(I);
      } catch (x) {
        console.error("Failed to fetch weather forecasts", x);
      }
    }
    return l?.attributes.forecast ? o(l.attributes.forecast) : f(), () => {
      _ = !0;
    };
  }, [n, t]), !l) return null;
  const d = me(l.state), h = l.attributes.temperature_unit || "°C", g = c?.state, v = g === "Rouge" ? "#ff4d4f" : g === "Orange" ? "#faad14" : g === "Jaune" ? "#fadb14" : null, b = c?.attributes ? Object.entries(c.attributes).filter(([_, f]) => f === g && _ !== "friendly_name" && _ !== "icon").map(([_]) => _).join(", ") : "", m = b ? `Vigilance ${g} : ${b}` : `Vigilance ${g}`;
  return /* @__PURE__ */ e("div", { class: "nido-weather-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__backdrop", onClick: i }),
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-weather-panel__header", children: [
        /* @__PURE__ */ e("h2", { children: "Météo Détaillée" }),
        /* @__PURE__ */ e("button", { type: "button", class: "nido-weather-panel__close", onClick: i, "aria-label": "Fermer", children: /* @__PURE__ */ e(le, { size: 20 }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-weather-panel__scroll", children: [
        /* @__PURE__ */ e("div", { class: "nido-wp-current", children: [
          /* @__PURE__ */ e(d.Icon, { size: 48 }),
          /* @__PURE__ */ e("div", { class: "nido-wp-current-info", children: [
            /* @__PURE__ */ e("span", { class: "nido-wp-temp", children: [
              l.attributes.temperature,
              h
            ] }),
            /* @__PURE__ */ e("span", { class: "nido-wp-desc", children: d.label })
          ] })
        ] }),
        v && /* @__PURE__ */ e("div", { class: "nido-wp-alert", style: { backgroundColor: `${v}22`, color: v, border: `1px solid ${v}55` }, children: [
          /* @__PURE__ */ e(Nt, { size: 20 }),
          /* @__PURE__ */ e("span", { children: m })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-wp-grid", children: [
          p && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(ma, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Pluie dans l'heure" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: p.state === "unknown" ? "Pas de pluie prévue" : new Date(p.state).getTime() > Date.now() ? `Prévue à ${new Date(p.state).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Pas de pluie prévue" })
          ] }),
          u && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(ba, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Index UV" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: u.state })
          ] })
        ] }),
        a.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prochaines heures" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-hourly", children: a.slice(0, 24).map((_, f) => {
            const x = me(_.condition), M = new Date(_.datetime);
            return /* @__PURE__ */ e("div", { class: "nido-wp-hour", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-time", children: [
                M.getHours(),
                "h"
              ] }),
              /* @__PURE__ */ e(x.Icon, { size: 24 }),
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-temp", children: [
                _.temperature,
                "°"
              ] }),
              (_.precipitation ?? 0) > 0 && /* @__PURE__ */ e("span", { class: "nido-wp-hour-precip", children: [
                _.precipitation,
                "mm"
              ] })
            ] }, f);
          }) })
        ] }),
        r.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prévisions (5 jours)" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-daily", children: r.slice(0, 5).map((_, f) => {
            const x = me(_.condition), M = new Date(_.datetime), I = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(M);
            return /* @__PURE__ */ e("div", { class: "nido-wp-day", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-day-name", children: f === 0 ? "Aujourd'hui" : I }),
              /* @__PURE__ */ e(x.Icon, { size: 24 }),
              /* @__PURE__ */ e("div", { class: "nido-wp-day-temps", children: [
                /* @__PURE__ */ e("span", { class: "nido-wp-day-min", children: [
                  _.templow,
                  "°"
                ] }),
                /* @__PURE__ */ e("div", { class: "nido-wp-day-bar" }),
                /* @__PURE__ */ e("span", { class: "nido-wp-day-max", children: [
                  _.temperature,
                  "°"
                ] })
              ] })
            ] }, f);
          }) })
        ] })
      ] })
    ] })
  ] });
}
function Qt(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? ua : /(chambre|bedroom)/.test(t) ? ha : /(cuisine|kitchen)/.test(t) ? _a : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? fa : /(entrée|entree|hall|couloir)/.test(t) ? ga : Ct;
}
const Ha = {
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
let ue = null;
function Va() {
  if (typeof window > "u") return null;
  const n = window.AudioContext ?? window.webkitAudioContext;
  return n ? (ue || (ue = new n()), ue.state === "suspended" && ue.resume().catch(() => {
  }), ue) : null;
}
function Ba() {
  const n = Va();
  if (!n) return;
  const t = n.currentTime, i = n.createGain();
  i.gain.value = 0.07, i.connect(n.destination);
  const r = [
    { freq: 880, start: 0, dur: 0.16, gain: 0.9 },
    { freq: 1318.51, start: 0.07, dur: 0.28, gain: 1 }
  ];
  for (const o of r) {
    const a = n.createOscillator();
    a.type = "sine", a.frequency.value = o.freq;
    const s = n.createGain();
    s.gain.setValueAtTime(0, t + o.start), s.gain.linearRampToValueAtTime(o.gain, t + o.start + 0.012), s.gain.exponentialRampToValueAtTime(8e-4, t + o.start + o.dur), a.connect(s), s.connect(i), a.start(t + o.start), a.stop(t + o.start + o.dur + 0.05);
  }
}
function Ua({ hass: n, notifications: t, onClose: i }) {
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
            children: /* @__PURE__ */ e(le, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: t.length === 0 ? /* @__PURE__ */ e("div", { class: "nido-notification-empty", children: [
        /* @__PURE__ */ e("div", { class: "nido-notification-empty__icon", children: /* @__PURE__ */ e(It, { size: 48 }) }),
        /* @__PURE__ */ e("p", { children: "Aucune notification pour le moment." })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-notification-list", children: [...t].reverse().map((a) => {
        const s = a.type === "warning" ? Nt : a.type === "success" ? xa : va, l = `nido-notification-item--${a.type}`, c = new Date(a.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return /* @__PURE__ */ e("div", { class: `nido-notification-item ${l}`, children: [
          /* @__PURE__ */ e("div", { class: "nido-notification-item__icon", children: /* @__PURE__ */ e(s, { size: 20 }) }),
          /* @__PURE__ */ e("div", { class: "nido-notification-item__body", children: [
            /* @__PURE__ */ e("div", { class: "nido-notification-item__head", children: [
              /* @__PURE__ */ e("span", { class: "nido-notification-item__title", children: a.title }),
              /* @__PURE__ */ e("span", { class: "nido-notification-item__time", children: c })
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
              children: /* @__PURE__ */ e(le, { size: 14 })
            }
          )
        ] }, a.id);
      }) }) })
    ] })
  ] });
}
function qa(n) {
  const t = n.state.attributes.brightness;
  return typeof t != "number" ? 100 : Math.round(t / 255 * 100);
}
function Ya({ hass: n, entity: t, roomName: i }) {
  const [r, o] = S(!1), a = qa(t), s = async () => {
    o(!0);
    try {
      await n.callService("light", "turn_off", { entity_id: t.entity_id });
    } finally {
      o(!1);
    }
  };
  return /* @__PURE__ */ e("div", { class: `nido-lights-row ${r ? "is-pending" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "nido-lights-row__icon", children: /* @__PURE__ */ e(ye, { size: 18 }) }),
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
function Za({ hass: n, lights: t, areas: i, onClose: r }) {
  const [o, a] = S(!1), s = new Map(i.map((p) => [p.area_id, p.name])), l = async () => {
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
            children: /* @__PURE__ */ e(le, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: /* @__PURE__ */ e("div", { class: "nido-lights-list", children: t.map((p) => /* @__PURE__ */ e(
        Ya,
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
const Ke = "nido.shoppingColor", Jn = "nido.shoppingSize", Ja = 600;
function Kn(n, t, i) {
  if (t.length < 2) return;
  n.lineWidth = i, n.lineCap = "round", n.lineJoin = "round", n.beginPath(), n.moveTo(t[0][0], t[0][1]);
  for (let o = 1; o < t.length - 1; o++) {
    const a = (t[o][0] + t[o + 1][0]) / 2, s = (t[o][1] + t[o + 1][1]) / 2;
    n.quadraticCurveTo(t[o][0], t[o][1], a, s);
  }
  const r = t[t.length - 1];
  n.lineTo(r[0], r[1]), n.stroke();
}
function Ka({ hass: n, onClose: t, topicBase: i = "shopping" }) {
  const r = Z(null), o = Z(null), a = Z([]), s = Z(null), l = Z(null), p = Z({ w: 0, h: 0 }), c = Z(null), u = Z("nido-" + Math.random().toString(36).slice(2, 8)), [d, h] = S(() => localStorage.getItem(Ke) || "#1a1410"), [g, v] = S(() => parseInt(localStorage.getItem(Jn) || "4", 10));
  Q(() => {
    if (localStorage.getItem(Ke)) return;
    const w = o.current;
    if (!w) return;
    const C = getComputedStyle(w).getPropertyValue("--ink-1").trim();
    if (!C) return;
    const D = document.createElement("div");
    D.style.color = C, document.body.appendChild(D);
    const j = getComputedStyle(D).color;
    document.body.removeChild(D);
    const W = j.match(/\d+/g);
    if (W && W.length >= 3) {
      const A = "#" + [+W[0], +W[1], +W[2]].map((E) => E.toString(16).padStart(2, "0")).join("");
      h(A);
    }
  }, []);
  const b = Z(d), m = Z(g);
  Q(() => {
    b.current = d, localStorage.setItem(Ke, d);
  }, [d]), Q(() => {
    m.current = g, localStorage.setItem(Jn, String(g));
  }, [g]);
  const _ = X((w) => [w[0] * p.current.w, w[1] * p.current.h], []), f = X(() => {
    const w = r.current;
    if (!w) return;
    const C = w.getContext("2d");
    if (!C) return;
    const D = p.current.w / Ja;
    C.clearRect(0, 0, p.current.w, p.current.h);
    for (const j of a.current)
      C.strokeStyle = j.color, Kn(C, j.points.map(_), j.size * D);
    s.current && (C.strokeStyle = s.current.color, Kn(C, s.current.points.map(_), s.current.size * D));
  }, [_]), x = X(() => {
    const w = r.current, C = o.current;
    if (!w || !C) return;
    const D = C.getBoundingClientRect();
    if (D.width === 0 || D.height === 0) return;
    const j = window.devicePixelRatio || 1;
    w.width = Math.round(D.width * j), w.height = Math.round(D.height * j);
    const W = w.getContext("2d");
    W && W.setTransform(j, 0, 0, j, 0, 0), p.current = { w: D.width, h: D.height }, f();
  }, [f]);
  Q(() => {
    x();
    const w = new ResizeObserver(x);
    return o.current && w.observe(o.current), () => w.disconnect();
  }, [x]), Q(() => {
    let w = !1;
    return (async () => {
      if ("wakeLock" in navigator)
        try {
          const C = await navigator.wakeLock.request("screen");
          w ? C.release() : c.current = C;
        } catch {
        }
    })(), () => {
      if (w = !0, c.current) {
        try {
          c.current.release();
        } catch {
        }
        c.current = null;
      }
    };
  }, []);
  const M = X((w) => `${i}/${w}`, [i]), I = X(async () => {
    const w = JSON.stringify({
      strokes: a.current,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedBy: u.current
    });
    if (!(w.length > 2e5))
      try {
        await n.callService("mqtt", "publish", {
          topic: M("state"),
          payload: w,
          qos: 0,
          retain: !0
        });
      } catch (C) {
        console.warn("[shopping] state publish failed", C);
      }
  }, [n, M]), P = X(async (w) => {
    try {
      await n.callService("mqtt", "publish", {
        topic: M("strokes/add"),
        payload: JSON.stringify(w),
        qos: 0,
        retain: !1
      });
    } catch (C) {
      console.warn("[shopping] add publish failed", C);
    }
    I();
  }, [n, M, I]), z = X(async (w) => {
    try {
      await n.callService("mqtt", "publish", {
        topic: M("strokes/undo"),
        payload: JSON.stringify({ id: w, by: u.current }),
        qos: 0,
        retain: !1
      });
    } catch (C) {
      console.warn("[shopping] undo publish failed", C);
    }
    I();
  }, [n, M, I]), L = X(async () => {
    try {
      await n.callService("mqtt", "publish", {
        topic: M("clear"),
        payload: JSON.stringify({ by: u.current, ts: Date.now() }),
        qos: 0,
        retain: !1
      });
    } catch (w) {
      console.warn("[shopping] clear publish failed", w);
    }
    I();
  }, [n, M, I]);
  Q(() => {
    let w = null, C = !1;
    const D = (j) => {
      try {
        const W = j.topic, A = j.payload ? JSON.parse(j.payload) : null;
        if (!A) return;
        if (W.endsWith("/state"))
          Array.isArray(A.strokes) && A.updatedBy !== u.current && (a.current = A.strokes, f());
        else if (W.endsWith("/strokes/add")) {
          if (A.by === u.current) return;
          A.points && A.points.length >= 2 && (a.current.push(A), f());
        } else if (W.endsWith("/strokes/undo")) {
          if (A.by === u.current) return;
          const E = a.current.findIndex((O) => O.id === A.id);
          E >= 0 && (a.current.splice(E, 1), f());
        } else if (W.endsWith("/clear")) {
          if (A.by === u.current) return;
          a.current = [], f();
        }
      } catch (W) {
        console.warn("[shopping] parse error", W);
      }
    };
    return (async () => {
      const j = n.connection;
      if (!(!j || typeof j.subscribeMessage != "function"))
        try {
          const W = await j.subscribeMessage(D, {
            type: "mqtt/subscribe",
            topic: `${i}/#`
          });
          if (C)
            try {
              W();
            } catch {
            }
          else
            w = W;
        } catch (W) {
          console.warn("[shopping] mqtt subscribe failed", W);
        }
    })(), () => {
      if (C = !0, w)
        try {
          w();
        } catch {
        }
    };
  }, [n, i, f]);
  const T = X((w) => {
    const D = r.current.getBoundingClientRect();
    return [(w.clientX - D.left) / D.width, (w.clientY - D.top) / D.height];
  }, []), R = X((w) => {
    w.pointerType === "touch" && (w.width > 40 || w.height > 40) || l.current === null && (l.current = w.pointerId, r.current?.setPointerCapture(w.pointerId), s.current = {
      id: u.current + "-" + Date.now(),
      by: u.current,
      color: b.current,
      size: m.current,
      points: [T(w)],
      t: Date.now()
    }, f(), w.preventDefault());
  }, [T, f]), G = X((w) => {
    if (w.pointerId !== l.current) return;
    const C = s.current;
    C && (C.points.push(T(w)), f());
  }, [T, f]), V = X((w) => {
    if (w.pointerId !== l.current) return;
    l.current = null;
    const C = s.current;
    if (s.current = null, !C || C.points.length < 2) {
      f();
      return;
    }
    a.current.push(C), P(C), f();
  }, [f, P]), Y = X(() => {
    for (let w = a.current.length - 1; w >= 0; w--)
      if (a.current[w].by === u.current) {
        const C = a.current.splice(w, 1)[0];
        z(C.id), f();
        return;
      }
  }, [z, f]), ee = X(() => {
    confirm("Effacer le bloc note ?") && (a.current = [], f(), L());
  }, [f, L]);
  return /* @__PURE__ */ e("div", { class: "nido-shopping-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-shopping-panel__backdrop", onClick: t }),
    /* @__PURE__ */ e("div", { class: "nido-shopping-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-shopping-panel__header", children: [
        /* @__PURE__ */ e("h2", { children: "Bloc note" }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "nido-shopping-panel__close",
            onClick: t,
            "aria-label": "Fermer",
            children: /* @__PURE__ */ e(le, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-shopping-panel__board", children: [
        /* @__PURE__ */ e("div", { class: "nido-shopping-panel__sheet", ref: o, children: /* @__PURE__ */ e(
          "canvas",
          {
            ref: r,
            class: "nido-shopping-panel__canvas",
            onPointerDown: R,
            onPointerMove: G,
            onPointerUp: V,
            onPointerCancel: V,
            onPointerLeave: V
          }
        ) }),
        /* @__PURE__ */ e("div", { class: "nido-shopping-panel__toolbar", "data-no-drag": "true", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-shopping-panel__tool",
              onClick: Y,
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
              value: d,
              onInput: (w) => h(w.target.value),
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
              value: g,
              onInput: (w) => v(parseInt(w.target.value, 10)),
              "aria-label": "Épaisseur"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-shopping-panel__tool nido-shopping-panel__tool--danger",
              onClick: ee,
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
const Gn = [
  "var(--accent)",
  "var(--positive)",
  "#4A8FE0",
  "#E06B4A",
  "#8F4AE0",
  "#4AE0B5"
];
function ei(n) {
  return Gn[n % Gn.length];
}
function Ne(n) {
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}
function ni(n) {
  if (n.includes("T") || n.includes(" ") && n.includes(":"))
    return { date: new Date(n.replace(" ", "T")), allDay: !1 };
  const [t, i, r] = n.split("-").map(Number);
  return { date: new Date(t, i - 1, r), allDay: !0 };
}
function Ga(n, t) {
  const i = Ne(t), r = [], o = Array.isArray(n) ? { unknown: n } : n;
  for (const [a, s] of Object.entries(o)) {
    if (!Array.isArray(s)) {
      console.warn(`[parseHassEvents] Expected array for ${a}, got:`, typeof s);
      continue;
    }
    for (const l of s) {
      let p = "";
      if (typeof l.start == "string" ? p = l.start : l.start && (p = l.start.dateTime ?? l.start.date ?? ""), !p) continue;
      const { date: c, allDay: u } = ni(p), d = Math.round(
        (Ne(c).getTime() - i.getTime()) / 864e5
      );
      r.push({
        id: `${a}-${l.uid ?? l.summary}-${p}`,
        calendarId: a === "unknown" ? "calendar" : a,
        title: l.summary,
        dayOffset: d,
        time: u ? void 0 : `${String(c.getHours()).padStart(2, "0")}:${String(c.getMinutes()).padStart(2, "0")}`,
        allDay: u
      });
    }
  }
  return r.sort((a, s) => a.dayOffset !== s.dayOffset ? a.dayOffset - s.dayOffset : a.allDay && !s.allDay ? -1 : !a.allDay && s.allDay ? 1 : (a.time ?? "").localeCompare(s.time ?? ""));
}
function Xa(n, t) {
  const i = n.message, r = n.start_time;
  if (!i || !r) return null;
  const { date: o, allDay: a } = ni(r), s = Math.round(
    (Ne(o).getTime() - Ne(t).getTime()) / 864e5
  );
  return {
    title: i,
    allDay: a,
    dayOffset: s,
    time: a ? void 0 : `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`
  };
}
const Qa = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function er({ hass: n, calendarEntities: t, onClose: i }) {
  const [r, o] = S(null), a = /* @__PURE__ */ new Date(), s = new Map(
    [...t].sort((c, u) => c.entity_id.localeCompare(u.entity_id)).map((c, u) => [c.entity_id, ei(u)])
  );
  Q(() => {
    if (t.length === 0) {
      o([]);
      return;
    }
    const c = /* @__PURE__ */ new Date();
    c.setHours(0, 0, 0, 0);
    const u = new Date(c);
    u.setDate(u.getDate() + 7);
    const d = c.toISOString(), h = u.toISOString();
    console.log(`[CalendarPanel] Fetching events from ${d} to ${h}`);
    const g = async (v) => {
      try {
        const b = await n.callWS({
          type: "calendar/events",
          entity_id: v,
          start_date_time: d,
          end_date_time: h
        });
        return { entity_id: v, events: b };
      } catch (b) {
        if (b?.code === "unknown_command") {
          console.warn(`[CalendarPanel] WS command unknown, trying service call for ${v}`);
          try {
            const m = await n.callWS({
              type: "call_service",
              domain: "calendar",
              service: "get_events",
              service_data: {
                start_date_time: d,
                end_date_time: h
              },
              target: { entity_id: v },
              return_response: !0
            }), _ = m?.response?.[v]?.events || m?.[v]?.events || [];
            return { entity_id: v, events: _ };
          } catch (m) {
            return console.error(`[CalendarPanel] Service call failed for ${v}:`, m), { entity_id: v, events: [] };
          }
        }
        return console.error(`[CalendarPanel] Error for ${v}:`, b), { entity_id: v, events: [] };
      }
    };
    Promise.all(t.map((v) => g(v.entity_id))).then((v) => {
      const b = {};
      for (const _ of v)
        b[_.entity_id] = _.events;
      console.log("[CalendarPanel] Combined response:", b);
      const m = Ga(b, a);
      console.log("[CalendarPanel] Parsed events:", m), o(m);
    });
  }, []);
  const l = Array.from({ length: 7 }, (c, u) => {
    const d = new Date(a);
    d.setDate(a.getDate() + u);
    const h = (r ?? []).filter((g) => g.dayOffset === u);
    return { date: d, offset: u, events: h };
  }), p = r ? [...new Set(r.filter((c) => c.dayOffset >= 0 && c.dayOffset < 7).map((c) => c.calendarId))] : [];
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
            children: /* @__PURE__ */ e(le, { size: 20 })
          }
        )
      ] }),
      p.length > 0 && /* @__PURE__ */ e("div", { class: "nido-cal-panel__legend", children: p.map((c) => /* @__PURE__ */ e("div", { class: "nido-cal-panel__legend-item", children: [
        /* @__PURE__ */ e(
          "span",
          {
            class: "nido-cal-panel__legend-dot",
            style: { background: s.get(c) ?? "var(--ink-3)" }
          }
        ),
        /* @__PURE__ */ e("span", { children: t.find((u) => u.entity_id === c)?.friendly_name ?? c })
      ] }, c)) }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: r === null ? /* @__PURE__ */ e("div", { class: "nido-cal-panel__loading", children: "Chargement…" }) : /* @__PURE__ */ e("div", { class: "nido-cal-panel__days", children: l.map(({ date: c, offset: u, events: d }) => /* @__PURE__ */ e(
        "div",
        {
          class: `nido-cal-panel__day ${u === 0 ? "is-today" : ""}`,
          children: [
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__badge", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-day", children: Qa[c.getDay()] }),
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-num", children: c.getDate() })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__events", children: d.length === 0 ? /* @__PURE__ */ e("span", { class: "nido-cal-panel__empty", children: "—" }) : d.map((h) => /* @__PURE__ */ e("div", { class: "nido-cal-panel__event", children: [
              /* @__PURE__ */ e(
                "span",
                {
                  class: "nido-cal-panel__event-dot",
                  style: { background: s.get(h.calendarId) ?? "var(--ink-3)" }
                }
              ),
              /* @__PURE__ */ e("div", { class: "nido-cal-panel__event-body", children: /* @__PURE__ */ e("span", { class: "nido-cal-panel__event-title", children: h.title }) }),
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__event-time", children: h.allDay ? "Journée" : h.time })
            ] }, h.id)) })
          ]
        },
        u
      )) }) })
    ] })
  ] });
}
const nr = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function tr(n, t) {
  return n === 0 ? "Aujourd'hui" : n === 1 ? "Demain" : `${nr[t.getDay()]} ${t.getDate()}`;
}
function ti({ hass: n, entity: t, roomLabel: i, hero: r = !1, calendarEntities: o }) {
  const [a, s] = S(!1), p = [...o].sort((v, b) => v.entity_id.localeCompare(b.entity_id)).map((v) => v.entity_id).indexOf(t.entity_id), c = ei(p >= 0 ? p : 0), u = /* @__PURE__ */ new Date(), d = Xa(t.state.attributes, u), h = d ? (() => {
    const v = new Date(u);
    return v.setDate(u.getDate() + d.dayOffset), v;
  })() : null, g = ["n-card", r ? "n-card--accent-muted" : "n-card--default", "nido-cal-widget"].join(" ");
  return /* @__PURE__ */ e(K, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        class: g,
        "data-hero": r ? "true" : "false",
        "data-on": "false",
        onClick: () => s(!0),
        children: [
          /* @__PURE__ */ e("div", { class: "n-card__head", children: [
            /* @__PURE__ */ e("div", { class: "n-icon-bubble nido-cal-widget__bubble", style: { "--cal-color": c }, children: /* @__PURE__ */ e(jt, { size: r ? 22 : 18 }) }),
            /* @__PURE__ */ e("span", { class: "n-eyebrow", children: i || t.friendly_name })
          ] }),
          d && h ? /* @__PURE__ */ e(K, { children: [
            /* @__PURE__ */ e("div", { class: r ? "nido-cal-widget__title n-title--xl" : "nido-cal-widget__title", children: d.title }),
            /* @__PURE__ */ e("div", { class: "nido-cal-widget__when", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__day", children: tr(d.dayOffset, h) }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__sep", children: "·" }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__time", children: d.allDay ? "Journée" : d.time })
            ] })
          ] }) : /* @__PURE__ */ e("div", { class: "n-muted", children: "Rien à venir" })
        ]
      }
    ),
    a && /* @__PURE__ */ e(
      er,
      {
        hass: n,
        calendarEntities: o,
        onClose: () => s(!1)
      }
    )
  ] });
}
function Ge(n, t, i, r) {
  const o = Math.PI * (1 - n);
  return [t + r * Math.cos(o), i - r * Math.sin(o)];
}
function ii({
  hass: n,
  powerEntityId: t,
  max: i = 7e3,
  onOpen: r
}) {
  const o = n.states[t], a = o?.attributes.friendly_name ?? "Compteur Linky", s = o?.state ?? "unavailable", l = s === "unavailable" || s === "unknown" || !o, p = N(() => {
    if (l) return 0;
    const T = Number(s);
    return Number.isFinite(T) ? Math.max(0, Math.round(T)) : 0;
  }, [s, l]), c = Math.max(0, Math.min(1, p / i)), u = 100, d = 100, h = 86, [g, v] = Ge(0, u, d, h), [b, m] = Ge(1, u, d, h), [_, f] = Ge(c, u, d, h), x = `M ${g.toFixed(2)} ${v.toFixed(2)} A ${h} ${h} 0 0 1 ${b.toFixed(2)} ${m.toFixed(2)}`, M = c > 0.5 ? 1 : 0, I = c > 0 ? `M ${g.toFixed(2)} ${v.toFixed(2)} A ${h} ${h} 0 ${M} 1 ${_.toFixed(2)} ${f.toFixed(2)}` : "", P = p >= 5e3 ? "Pic" : p >= 2e3 ? "Soutenu" : "Sobre", z = ["n-card", "n-card--accent", "breathe-1", "n-power-gauge"].join(" "), L = typeof r == "function";
  return /* @__PURE__ */ e(
    "div",
    {
      class: z,
      "data-on": "true",
      role: L ? "button" : void 0,
      tabIndex: L ? 0 : void 0,
      onClick: L ? r : void 0,
      onKeyDown: L ? (T) => {
        (T.key === "Enter" || T.key === " ") && (T.preventDefault(), r?.());
      } : void 0,
      style: { cursor: L ? "pointer" : "default" },
      children: [
        /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
        /* @__PURE__ */ e(
          "svg",
          {
            class: "n-power-gauge__deco",
            width: "200",
            height: "200",
            viewBox: "0 0 200 200",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ e("circle", { cx: "100", cy: "100", r: "80", fill: "none", stroke: "currentColor", "stroke-width": "1" }),
              /* @__PURE__ */ e("circle", { cx: "100", cy: "100", r: "60", fill: "none", stroke: "currentColor", "stroke-width": "1" }),
              /* @__PURE__ */ e("circle", { cx: "100", cy: "100", r: "40", fill: "none", stroke: "currentColor", "stroke-width": "1" })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { class: "n-power-gauge__head", children: [
          /* @__PURE__ */ e("div", { class: "n-power-gauge__head-text", children: [
            /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Consommation · En direct" }),
            /* @__PURE__ */ e("div", { class: "n-title", children: a })
          ] }),
          /* @__PURE__ */ e("div", { class: "n-power-gauge__head-actions", children: [
            /* @__PURE__ */ e("span", { class: "n-power-gauge__live", children: [
              /* @__PURE__ */ e("span", { class: "n-power-gauge__live-dot" }),
              "Live"
            ] }),
            L && /* @__PURE__ */ e("span", { class: "n-power-gauge__open", "aria-hidden": "true", children: /* @__PURE__ */ e(Tt, { size: 14 }) })
          ] })
        ] }),
        l ? /* @__PURE__ */ e("div", { class: "n-muted n-power-gauge__unavailable", children: "Indisponible" }) : /* @__PURE__ */ e(K, { children: [
          /* @__PURE__ */ e("div", { class: "n-power-gauge__chart", children: [
            /* @__PURE__ */ e(
              "svg",
              {
                width: "240",
                height: "150",
                viewBox: "0 0 200 120",
                preserveAspectRatio: "xMidYMid meet",
                class: "n-power-gauge__svg",
                children: [
                  /* @__PURE__ */ e(
                    "path",
                    {
                      d: x,
                      fill: "none",
                      stroke: "rgba(255,255,255,0.2)",
                      "stroke-width": "14",
                      "stroke-linecap": "round"
                    }
                  ),
                  I && /* @__PURE__ */ e(
                    "path",
                    {
                      d: I,
                      fill: "none",
                      stroke: "rgba(255,255,255,0.95)",
                      "stroke-width": "14",
                      "stroke-linecap": "round",
                      class: "n-power-gauge__arc"
                    }
                  ),
                  /* @__PURE__ */ e(
                    "line",
                    {
                      x1: g,
                      y1: v + 8,
                      x2: g,
                      y2: v + 14,
                      stroke: "rgba(255,255,255,0.4)",
                      "stroke-width": "1"
                    }
                  ),
                  /* @__PURE__ */ e(
                    "line",
                    {
                      x1: b,
                      y1: m + 8,
                      x2: b,
                      y2: m + 14,
                      stroke: "rgba(255,255,255,0.4)",
                      "stroke-width": "1"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ e("div", { class: "n-power-gauge__readout", children: [
              /* @__PURE__ */ e("div", { class: "n-power-gauge__value", children: [
                p.toLocaleString("fr-FR"),
                /* @__PURE__ */ e("span", { class: "n-power-gauge__unit", children: "W" })
              ] }),
              /* @__PURE__ */ e("div", { class: "n-eyebrow n-power-gauge__sublabel", children: "Puissance instantanée" })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { class: "n-power-gauge__foot", children: [
            /* @__PURE__ */ e("span", { children: "0 W" }),
            /* @__PURE__ */ e("span", { class: "n-power-gauge__pill", children: [
              /* @__PURE__ */ e("span", { class: "n-power-gauge__pill-dot" }),
              P,
              " · ",
              Math.round(c * 100),
              "%"
            ] }),
            /* @__PURE__ */ e("span", { children: [
              i.toLocaleString("fr-FR"),
              " W"
            ] })
          ] })
        ] })
      ]
    }
  );
}
const je = 64, ke = 80, Me = 80, Xn = 270 / 360 * 2 * Math.PI * je, Qn = 2 * Math.PI * je;
function ir({
  currentPower: n,
  subscribedKva: t = 9
}) {
  const i = Math.max(0, n) / 1e3, r = Math.min(1, i / t), o = r >= 0.85, a = !o && r >= 0.7, s = o ? "var(--warning)" : a ? "var(--accent-deep)" : "var(--accent)", l = `${(Xn * r).toFixed(1)} ${Qn.toFixed(1)}`, p = `${Xn.toFixed(1)} ${Qn.toFixed(1)}`, c = o ? "Risque coupure" : a ? "À surveiller" : "Marge ok", u = o ? "Coupez un gros poste pour éviter la disjonction." : a ? "Évitez de cumuler four + lave-linge maintenant." : "Tout est sous contrôle, rien à signaler.";
  return /* @__PURE__ */ e("div", { class: "n-card n-subscription-guard", children: [
    /* @__PURE__ */ e("div", { class: "n-subscription-guard__head", children: [
      /* @__PURE__ */ e("div", { children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Puissance souscrite" }),
        /* @__PURE__ */ e("div", { class: "n-title", children: "Garde compteur" })
      ] }),
      /* @__PURE__ */ e(
        "span",
        {
          class: `n-pill-btn n-pill-btn--ghost n-subscription-guard__pill ${o ? "is-danger" : a ? "is-watch" : ""}`,
          children: c
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { class: "n-subscription-guard__chart", children: [
      /* @__PURE__ */ e("svg", { width: "160", height: "160", viewBox: "0 0 160 160", children: [
        /* @__PURE__ */ e(
          "circle",
          {
            cx: ke,
            cy: Me,
            r: je,
            fill: "none",
            stroke: "var(--bg-inset)",
            "stroke-width": "12",
            "stroke-linecap": "round",
            "stroke-dasharray": p,
            transform: `rotate(135 ${ke} ${Me})`
          }
        ),
        /* @__PURE__ */ e(
          "circle",
          {
            cx: ke,
            cy: Me,
            r: je,
            fill: "none",
            stroke: s,
            "stroke-width": "12",
            "stroke-linecap": "round",
            "stroke-dasharray": l,
            transform: `rotate(135 ${ke} ${Me})`,
            class: "n-subscription-guard__arc"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "n-subscription-guard__readout", children: [
        /* @__PURE__ */ e("div", { class: "n-subscription-guard__value", style: { color: s }, children: [
          i.toFixed(1).replace(".", ","),
          /* @__PURE__ */ e("span", { class: "n-subscription-guard__unit", children: "kVA" })
        ] }),
        /* @__PURE__ */ e("div", { class: "n-eyebrow n-subscription-guard__sub", children: [
          "sur ",
          t,
          " kVA · ",
          Math.round(r * 100),
          "%"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-subscription-guard__msg", children: u })
  ] });
}
const he = {
  day: { label: "Jour", bucketCount: 24, bucketHours: 1 },
  week: { label: "Semaine", bucketCount: 7, bucketHours: 24 },
  month: { label: "Mois", bucketCount: 30, bucketHours: 24 }
};
function ar(n) {
  const t = new Date(n);
  return t.setMinutes(0, 0, 0), t;
}
function rr(n) {
  const t = new Date(n);
  return t.setHours(0, 0, 0, 0), t;
}
function or(n) {
  if (typeof n.lu == "number") return n.lu * 1e3;
  const t = n.last_updated ?? n.last_changed;
  if (!t) return null;
  const i = Date.parse(t);
  return Number.isFinite(i) ? i : null;
}
function sr(n) {
  const t = n.s ?? n.state;
  if (t == null || t === "unavailable" || t === "unknown") return null;
  const i = Number(t);
  return Number.isFinite(i) ? i : null;
}
function lr(n) {
  if (typeof n.start == "number") return n.start;
  const t = Date.parse(String(n.start));
  return Number.isFinite(t) ? t : null;
}
function et(n, t, i, r, o) {
  const a = new Array(r).fill(0);
  if (n.length === 0) return { buckets: a, total: 0 };
  const s = n.map((c) => ({ t: or(c), v: sr(c) })).filter((c) => c.t !== null && c.v !== null).sort((c, u) => c.t - u.t);
  if (s.length === 0) return { buckets: a, total: 0 };
  for (let c = 0; c < s.length - 1; c += 1) {
    const u = s[c], d = s[c + 1], h = Math.max(u.t, t), g = Math.min(d.t, i);
    if (g <= h) continue;
    const v = (u.v + d.v) / 2, b = (g - h) / 36e5, m = v * b / 1e3, _ = Math.floor((h - t) / o);
    _ >= 0 && _ < r && (a[_] += m);
  }
  const l = s[s.length - 1];
  if (l.t < i) {
    const c = Math.max(l.t, t), u = (i - c) / 36e5;
    if (u > 0) {
      const d = l.v * u / 1e3, h = Math.floor((c - t) / o);
      h >= 0 && h < r && (a[h] += d);
    }
  }
  const p = a.reduce((c, u) => c + u, 0);
  return { buckets: a, total: p };
}
function cr(n, t, i, r) {
  const o = new Array(i).fill(0);
  for (const s of n) {
    const l = lr(s);
    if (l === null) continue;
    const p = Math.floor((l - t) / r);
    if (!(p < 0 || p >= i)) {
      if (typeof s.change == "number" && Number.isFinite(s.change))
        o[p] += s.change;
      else if (typeof s.mean == "number" && Number.isFinite(s.mean)) {
        const c = r / 36e5;
        o[p] += s.mean * c / 1e3;
      }
    }
  }
  const a = o.reduce((s, l) => s + l, 0);
  return { buckets: o, total: a };
}
const dr = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
function nt(n, t) {
  if (n === "day")
    return {
      axisLabels: ["00 h", "06 h", "12 h", "18 h", "24 h"],
      bucketLabel: (o) => `${String(o).padStart(2, "0")} h`
    };
  if (n === "week") {
    const o = [], a = new Date(t);
    for (let s = 0; s < 7; s += 1) {
      const l = new Date(a);
      l.setDate(a.getDate() + s);
      const p = l.getDay() === 0 ? 6 : l.getDay() - 1;
      o.push(dr[p]);
    }
    return {
      axisLabels: [o[0], o[3], o[6]],
      bucketLabel: (s) => o[s] ?? ""
    };
  }
  const i = new Date(t), r = [];
  for (let o = 0; o < 30; o += 1) {
    const a = new Date(i);
    a.setDate(i.getDate() + o), r.push(String(a.getDate()));
  }
  return {
    axisLabels: [r[0], r[7], r[14], r[21], r[29]],
    bucketLabel: (o) => r[o] ?? ""
  };
}
function pr(n, t) {
  const i = Date.now(), r = he[n], o = Math.floor((i - t) / (r.bucketHours * 36e5));
  return Math.max(0, Math.min(r.bucketCount - 1, o));
}
function ur({
  hass: n,
  powerEntityId: t,
  dailyConsumptionEntityId: i
}) {
  const [r, o] = S(null), [a, s] = S(!0), [l, p] = S("day");
  Q(() => {
    let z = !1;
    return (async () => {
      s(!0);
      try {
        if (l === "day") {
          const T = ar(new Date(Date.now() - 828e5)), R = /* @__PURE__ */ new Date(), G = await n.callWS({
            type: "history/history_during_period",
            start_time: T.toISOString(),
            end_time: R.toISOString(),
            entity_ids: [t],
            minimal_response: !0,
            no_attributes: !0
          });
          if (z) return;
          const V = G?.[t] ?? [], { buckets: Y, total: ee } = et(
            V,
            T.getTime(),
            R.getTime(),
            24,
            36e5
          ), w = nt("day", T.getTime());
          o({
            buckets: Y,
            total: ee,
            available: ee > 0,
            axisLabels: w.axisLabels,
            bucketLabel: w.bucketLabel,
            unit: "kWh",
            nowIndex: (/* @__PURE__ */ new Date()).getHours()
          });
        } else {
          const T = l === "week" ? 7 : 30, R = rr(new Date(Date.now() - (T - 1) * 864e5)), G = /* @__PURE__ */ new Date();
          let V = [], Y = 0, ee = !1;
          try {
            const C = await n.callWS({
              type: "recorder/statistics_during_period",
              start_time: R.toISOString(),
              end_time: G.toISOString(),
              statistic_ids: [t],
              period: "day"
            });
            if (z) return;
            const D = C?.[t] ?? [];
            if (D.length > 0) {
              const j = cr(D, R.getTime(), T, 864e5);
              V = j.buckets, Y = j.total, ee = !0;
            }
          } catch {
            ee = !1;
          }
          if (!ee) {
            const C = await n.callWS({
              type: "history/history_during_period",
              start_time: R.toISOString(),
              end_time: G.toISOString(),
              entity_ids: [t],
              minimal_response: !0,
              no_attributes: !0
            });
            if (z) return;
            const D = C?.[t] ?? [], j = et(D, R.getTime(), G.getTime(), T, 864e5);
            V = j.buckets, Y = j.total;
          }
          const w = nt(l, R.getTime());
          o({
            buckets: V,
            total: Y,
            available: Y > 0,
            axisLabels: w.axisLabels,
            bucketLabel: w.bucketLabel,
            unit: "kWh",
            nowIndex: pr(l, R.getTime())
          });
        }
      } catch (T) {
        if (z) return;
        console.warn("Nido energy: history fetch failed", T), o({
          buckets: new Array(he[l].bucketCount).fill(0),
          total: 0,
          available: !1,
          axisLabels: [],
          bucketLabel: () => "",
          unit: "kWh",
          nowIndex: 0
        });
      } finally {
        z || s(!1);
      }
    })(), () => {
      z = !0;
    };
  }, [n != null, t, l]);
  const c = i ? n.states[i] : void 0, u = N(() => {
    if (!c) return null;
    const z = Number(c.state);
    return Number.isFinite(z) ? z : null;
  }, [c]), d = c?.attributes.unit_of_measurement ?? "kWh", h = r?.buckets ?? new Array(he[l].bucketCount).fill(0), g = l === "day" && u !== null ? u : r?.total ?? 0, v = l === "day" && u !== null ? d : "kWh", b = r?.available ?? !1, m = r?.nowIndex ?? -1, _ = h.filter((z) => z > 0), f = _.length > 0 ? _.reduce((z, L) => z + L, 0) / _.length : 0, x = Math.max(...h, f) * 1.1 || 1, M = Math.max(...h), I = l === "day" ? "Consommation · Aujourd'hui" : l === "week" ? "Consommation · 7 derniers jours" : "Consommation · 30 derniers jours", P = l === "day" ? `moyenne · ${f.toFixed(2)} kWh` : l === "week" ? `moyenne · ${f.toFixed(1)} kWh / jour` : `moyenne · ${f.toFixed(1)} kWh / jour`;
  return /* @__PURE__ */ e("div", { class: "n-card n-hourly", children: [
    /* @__PURE__ */ e("div", { class: "n-hourly__head", children: [
      /* @__PURE__ */ e("div", { children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: I }),
        /* @__PURE__ */ e("div", { class: "n-hourly__total-row", children: /* @__PURE__ */ e("div", { class: "n-hourly__total", children: [
          g.toFixed(1).replace(".", ","),
          /* @__PURE__ */ e("span", { class: "n-hourly__total-unit", children: v })
        ] }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-hourly__modes", role: "tablist", children: Object.keys(he).map((z) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "tab",
          "aria-selected": l === z,
          class: `n-pill-btn ${l === z ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => p(z),
          children: he[z].label
        },
        z
      )) })
    ] }),
    a ? /* @__PURE__ */ e("div", { class: "n-muted n-hourly__loading", children: "Chargement de l'historique…" }) : b ? /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("div", { class: "n-bars", children: [
        f > 0 && /* @__PURE__ */ e("div", { class: "n-bars__avg", style: { bottom: `${f / x * 100}%` }, children: /* @__PURE__ */ e("span", { class: "n-bars__avg-label", children: P }) }),
        /* @__PURE__ */ e("div", { class: "n-bars__grid", children: h.map((z, L) => {
          const T = L === m, R = L < m, G = z > 0 && z === M;
          let V = "n-bars__bar";
          return T ? V += " is-now" : G ? V += " is-peak" : R ? V += " is-past" : V += " is-future", /* @__PURE__ */ e("div", { class: "n-bars__col", children: [
            /* @__PURE__ */ e("div", { class: V, style: { height: `${Math.max(2, z / x * 100)}%` } }),
            T && /* @__PURE__ */ e("div", { class: "n-bars__now-label", children: [
              z.toFixed(2),
              " kWh"
            ] })
          ] }, L);
        }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-bars__axis", children: r?.axisLabels.map((z, L) => /* @__PURE__ */ e("span", { children: z }, L)) })
    ] }) : /* @__PURE__ */ e("div", { class: "n-bars n-bars--empty", children: /* @__PURE__ */ e("div", { class: "n-muted", children: "Historique indisponible" }) })
  ] });
}
function hr({
  entities: n,
  primaryPowerEntityId: t,
  areas: i,
  onSelect: r
}) {
  const o = N(() => {
    const l = /* @__PURE__ */ new Map();
    for (const p of i) l.set(p.area_id, p.name);
    return l;
  }, [i]), a = N(() => {
    const l = [];
    for (const p of n) {
      if (p.entity_id === t || p.state.attributes.device_class !== "power") continue;
      const c = Number(p.state.state);
      if (!Number.isFinite(c)) continue;
      const u = p.area_id ? o.get(p.area_id) ?? "" : "";
      l.push({ entity: p, watts: Math.max(0, c), roomLabel: u });
    }
    return l.sort((p, c) => c.watts - p.watts), l.slice(0, 5);
  }, [n, t, o]), s = a.length > 0 ? Math.max(...a.map((l) => l.watts), 1) : 1;
  return /* @__PURE__ */ e("div", { class: "n-card n-top-consumers", children: [
    /* @__PURE__ */ e("div", { class: "n-top-consumers__head", children: /* @__PURE__ */ e("div", { children: [
      /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Top consommateurs · maintenant" }),
      /* @__PURE__ */ e("div", { class: "n-title", children: "Où part l'énergie" })
    ] }) }),
    a.length === 0 ? /* @__PURE__ */ e("div", { class: "n-muted n-top-consumers__empty", children: "Aucune mesure de puissance individuelle exposée" }) : /* @__PURE__ */ e("div", { class: "n-top-consumers__list", children: a.map((l, p) => {
      const c = l.watts / s * 100, u = typeof r == "function";
      return /* @__PURE__ */ e(
        "div",
        {
          class: "n-top-consumers__row",
          role: u ? "button" : void 0,
          tabIndex: u ? 0 : void 0,
          onClick: u ? () => r?.(l.entity) : void 0,
          onKeyDown: u ? (d) => {
            (d.key === "Enter" || d.key === " ") && (d.preventDefault(), r?.(l.entity));
          } : void 0,
          children: [
            /* @__PURE__ */ e("div", { class: `n-top-consumers__bubble ${p === 0 ? "is-first" : ""}`, children: /* @__PURE__ */ e(ce, { size: 18 }) }),
            /* @__PURE__ */ e("div", { class: "n-top-consumers__body", children: [
              /* @__PURE__ */ e("div", { class: "n-top-consumers__line", children: [
                /* @__PURE__ */ e("div", { class: "n-top-consumers__name-wrap", children: [
                  /* @__PURE__ */ e("span", { class: "n-top-consumers__name", children: l.entity.friendly_name }),
                  l.roomLabel && /* @__PURE__ */ e("span", { class: "n-top-consumers__room", children: l.roomLabel })
                ] }),
                /* @__PURE__ */ e("span", { class: `n-top-consumers__value ${p === 0 ? "is-first" : ""}`, children: [
                  Math.round(l.watts).toLocaleString("fr-FR"),
                  /* @__PURE__ */ e("span", { class: "n-top-consumers__unit", children: "W" })
                ] })
              ] }),
              /* @__PURE__ */ e("div", { class: "n-top-consumers__meter", children: /* @__PURE__ */ e("div", { class: "n-top-consumers__bar", children: /* @__PURE__ */ e(
                "div",
                {
                  class: `n-top-consumers__bar-fill ${p === 0 ? "is-first" : ""}`,
                  style: { width: `${c}%` }
                }
              ) }) })
            ] }),
            u && /* @__PURE__ */ e("span", { class: "n-top-consumers__chevron", "aria-hidden": "true", children: /* @__PURE__ */ e(gn, { size: 14 }) })
          ]
        },
        l.entity.entity_id
      );
    }) })
  ] });
}
const te = "sensor.consommation_electrique_ccasn", tt = "sensor.conso_daily", _r = "sensor.conso", fr = 9;
function gr({ hass: n, entities: t, exposed: i, areas: r, onBack: o }) {
  const a = N(() => new Set(i), [i]), s = N(
    () => t.filter((_) => a.has(_.entity_id)),
    [t, a]
  ), l = n.states[te], p = !!l && l.state !== "unavailable" && l.state !== "unknown", c = N(() => {
    if (!p || !l) return 0;
    const _ = Number(l.state);
    return Number.isFinite(_) ? Math.max(0, _) : 0;
  }, [l, p]), u = n.states[tt], d = N(() => {
    if (!u) return null;
    const _ = Number(u.state);
    return Number.isFinite(_) ? _ : null;
  }, [u]), h = u?.attributes.unit_of_measurement ?? "kWh", g = n.states[_r], v = N(() => {
    if (!g) return null;
    const _ = Number(g.state);
    return Number.isFinite(_) ? _ : null;
  }, [g]), b = g?.attributes.unit_of_measurement ?? "€", m = N(() => (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (f) => f.toUpperCase()), []);
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-energy", children: [
    /* @__PURE__ */ e("header", { class: "nido-energy__header", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-icon-btn nido-energy__back",
          onClick: o,
          "aria-label": "Retour",
          children: /* @__PURE__ */ e(Pt, { size: 18 })
        }
      ),
      /* @__PURE__ */ e("div", { class: "nido-energy__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Tableau" }),
        /* @__PURE__ */ e("div", { class: "nido-energy__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-energy__head-actions", children: [
        /* @__PURE__ */ e(
          "a",
          {
            class: "n-pill-btn n-pill-btn--ghost nido-energy__ha-link",
            href: "/lovelace/energy",
            target: "_top",
            children: [
              /* @__PURE__ */ e(Tt, { size: 12 }),
              "Ouvrir HA"
            ]
          }
        ),
        /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", "aria-label": "Plus", children: /* @__PURE__ */ e(Lt, { size: 18 }) })
      ] })
    ] }),
    /* @__PURE__ */ e("section", { class: "nido-energy__hero", children: [
      /* @__PURE__ */ e("div", { class: "nido-energy__hero-left", children: [
        /* @__PURE__ */ e("div", { class: "nido-energy__icon", children: [
          /* @__PURE__ */ e("div", { class: "pattern-dots nido-energy__icon-bg", "aria-hidden": "true" }),
          /* @__PURE__ */ e(ce, { size: 32 })
        ] }),
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "nido-energy__hero-meta", children: [
            /* @__PURE__ */ e("span", { children: m }),
            /* @__PURE__ */ e("span", { class: "nido-energy__sep" }),
            /* @__PURE__ */ e("span", { class: "nido-energy__live", children: [
              /* @__PURE__ */ e("span", { class: "nido-energy__live-dot" }),
              "Données live · Linky"
            ] })
          ] }),
          /* @__PURE__ */ e("h1", { class: "nido-energy__title", children: "Énergie" })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-energy__stats", children: [
        /* @__PURE__ */ e(
          Xe,
          {
            label: "Auj.",
            value: d !== null ? d.toFixed(1).replace(".", ",") : "—",
            unit: d !== null ? h : ""
          }
        ),
        /* @__PURE__ */ e(it, {}),
        /* @__PURE__ */ e(
          Xe,
          {
            label: "Coût",
            value: v !== null ? v.toFixed(2).replace(".", ",") : "—",
            unit: v !== null ? b : ""
          }
        ),
        /* @__PURE__ */ e(it, {}),
        /* @__PURE__ */ e(
          Xe,
          {
            label: "Puissance",
            value: p ? Math.round(c).toLocaleString("fr-FR") : "—",
            unit: p ? "W" : ""
          }
        )
      ] })
    ] }),
    p ? /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("section", { class: "nido-energy__section", children: [
        /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Maintenant" }) }),
        /* @__PURE__ */ e("div", { class: "nido-energy__live-grid", children: [
          /* @__PURE__ */ e(ii, { hass: n, powerEntityId: te }),
          /* @__PURE__ */ e(
            ir,
            {
              currentPower: c,
              subscribedKva: fr
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { class: "nido-energy__section", children: [
        /* @__PURE__ */ e("div", { class: "nido-section-title", children: [
          /* @__PURE__ */ e("h2", { children: "Aujourd'hui · 24 heures" }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "kWh par heure" })
        ] }),
        /* @__PURE__ */ e(
          ur,
          {
            hass: n,
            powerEntityId: te,
            dailyConsumptionEntityId: tt
          }
        )
      ] }),
      /* @__PURE__ */ e("section", { class: "nido-energy__section", children: [
        /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Top consommateurs" }) }),
        /* @__PURE__ */ e(
          hr,
          {
            entities: s,
            primaryPowerEntityId: te,
            areas: r
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "nido-empty", children: /* @__PURE__ */ e("p", { class: "n-muted", children: [
      "L'entité de puissance ",
      /* @__PURE__ */ e("code", { children: te }),
      " n'est pas disponible. Vérifiez qu'elle est exposée dans Nido."
    ] }) })
  ] }) });
}
function Xe({ label: n, value: t, unit: i }) {
  return /* @__PURE__ */ e("div", { class: "nido-energy__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-energy__stat-value", children: [
      t,
      i && /* @__PURE__ */ e("span", { class: "nido-energy__stat-unit", children: i })
    ] })
  ] });
}
function it() {
  return /* @__PURE__ */ e("div", { class: "nido-energy__stat-sep", "aria-hidden": "true" });
}
const mr = /* @__PURE__ */ new Set([
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
function br(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function vr(n, t) {
  const i = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(Ot, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(Ft, { ...i, hero: t.hero }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(Rt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(Wt, { entity: n, roomLabel: t.areaName, hero: t.hero }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(Ht, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(Vt, { ...i }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(Bt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(Ut, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(qt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(Yt, { ...i }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(Zt, { ...i }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(Jt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(Kt, { ...i }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(Xt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(ti, { hass: t.hass, entity: n, roomLabel: t.areaName, hero: t.hero, calendarEntities: t.calendarEntities }, n.entity_id);
    default:
      return null;
  }
}
function xr(n) {
  return n.replace(/[^\x00-\x7F]/g, "_").toLowerCase();
}
function yr(n, t) {
  const i = new Map(t.map((o) => [xr(o.name), o.area_id])), r = /* @__PURE__ */ new Map();
  for (const o of Object.values(n.states)) {
    if (!o.entity_id.startsWith("sensor.")) continue;
    const a = o.state.toLowerCase(), s = i.get(a);
    if (!s) continue;
    const l = o.entity_id.slice(7), p = l.slice(l.lastIndexOf("_") + 1);
    if (!p) continue;
    const u = n.states[`person.${p}`]?.attributes.entity_picture, d = r.get(s) ?? /* @__PURE__ */ new Map();
    d.has(p) || d.set(p, { name: p, picture: u }), r.set(s, d);
  }
  return new Map(
    Array.from(r.entries()).map(([o, a]) => [o, Array.from(a.values())])
  );
}
function wr({ area: n, entities: t, accent: i = !1, onOpen: r, dragProps: o, presence: a }) {
  const s = Qt(n.name), l = t.filter(
    (u) => u.domain !== "sensor" && u.domain !== "binary_sensor"
  ).length, p = t.filter(hn).length, c = kt(t);
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
              /* @__PURE__ */ e(gn, { size: 16 })
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
              p > 0 && /* @__PURE__ */ e(K, { children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
                /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                  /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                  p,
                  " actif",
                  p > 1 ? "s" : ""
                ] })
              ] })
            ] }),
            (c.temperature || c.humidity) && /* @__PURE__ */ e("div", { class: "nido-room-card__stats", children: [
              c.temperature && /* @__PURE__ */ e("span", { class: "nido-room-card__stat", children: [
                c.temperature.value,
                c.temperature.unit || "°"
              ] }),
              c.humidity && /* @__PURE__ */ e("span", { class: "nido-room-card__stat", children: [
                Math.round(parseFloat(c.humidity.value)),
                c.humidity.unit || "%"
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function kr({
  hass: n,
  areas: t,
  entities: i,
  favorites: r,
  exposed: o,
  roomsOrder: a,
  onConfigure: s,
  onOpenRoom: l,
  onOpenEnergy: p,
  onReorderFavorites: c,
  onReorderRooms: u
}) {
  const d = n.user?.name ?? "vous", h = /* @__PURE__ */ new Date(), g = h.getHours(), { greeting: v, sub: b } = br(g), m = `${String(g).padStart(2, "0")}:${String(h.getMinutes()).padStart(2, "0")}`, _ = h.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (k) => k.toUpperCase()), f = N(() => new Set(o), [o]), x = N(
    () => i.filter((k) => f.has(k.entity_id) && mr.has(k.domain)),
    [i, f]
  ), M = N(
    () => x.find((k) => k.domain === "weather"),
    [x]
  ), I = N(
    () => x.filter((k) => k.domain === "light" && hn(k)),
    [x]
  ), P = I.length, z = N(
    () => x.filter((k) => k.domain === "calendar"),
    [x]
  ), L = N(() => M ? Object.keys(n.states).some(
    (F) => F.startsWith("sensor.") && (F.endsWith("_next_rain") || F.endsWith("_weather_alert") || F.endsWith("_uv"))
  ) : !1, [n.states, M]), [T, R] = S(!1), [G, V] = S(!1), [Y, ee] = S(!1), [w, C] = S(!1), D = N(() => {
    const k = n.states["sensor.nido_notifications"];
    return !k || !k.attributes.notifications ? [] : k.attributes.notifications;
  }, [n.states["sensor.nido_notifications"]]), j = Z(new Set(D.map((k) => k.id))), W = Z(!0);
  Q(() => {
    const k = j.current;
    if (W.current) {
      W.current = !1, j.current = new Set(D.map((re) => re.id));
      return;
    }
    D.some((re) => !k.has(re.id)) && Ba(), j.current = new Set(D.map((re) => re.id));
  }, [D]);
  const A = N(() => Pi(), [G]), E = N(() => {
    if (D.length === 0) return !1;
    if (!A) return !0;
    const k = D[D.length - 1];
    return new Date(k.timestamp) > new Date(A);
  }, [D, A]), O = () => {
    V(!0), Li((/* @__PURE__ */ new Date()).toISOString());
  }, $ = N(() => Object.values(n.states).filter(
    (k) => k.entity_id.startsWith("person.") && k.state === "home" && k.attributes.entity_picture
  ), [n.states]), B = (k) => {
    if (!k) return null;
    if (k.startsWith("http")) return k;
    const F = n.hassUrl?.("");
    return F ? F.replace(/\/$/, "") + k : k;
  }, ae = N(() => zi(x), [x]), Re = N(() => yr(n, t), [n.states, t]), We = N(() => {
    const k = new Map(x.map((F) => [F.entity_id, F]));
    return r.map((F) => k.get(F)).filter((F) => !!F);
  }, [x, r]), He = N(() => {
    const k = t.filter((F) => (ae.get(F.area_id) ?? []).length > 0);
    return St(k, a, (F) => F.area_id);
  }, [t, ae, a]), Ve = on(
    We,
    (k) => k.entity_id,
    (k) => c(k.map((F) => F.entity_id))
  ), Be = on(
    He,
    (k) => k.area_id,
    (k) => u(k.map((F) => F.area_id))
  ), ai = We.some(
    (k) => !(k.domain === "binary_sensor" && k.state.state === "off")
  );
  let Ue = 0;
  const ri = ai ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${Ve.isDragging ? "is-dragging" : ""}`,
        ref: (k) => {
          Ve.containerRef.current = k;
        },
        children: We.map((k) => {
          if (k.domain === "binary_sensor" && k.state.state === "off") return null;
          Ue += 1;
          const re = Ue === 1, li = (Ue - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": re ? "true" : "false",
              ...Ve.itemPropsFor(k.entity_id),
              children: vr(k, {
                hass: n,
                areaName: t.find((ci) => ci.area_id === k.area_id)?.name ?? "",
                hero: re,
                variant: li,
                calendarEntities: z
              })
            },
            k.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, oi = !!p && f.has(te) && !!n.states[te], si = x.length > 0;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: [
    /* @__PURE__ */ e("div", { class: "nido-dashboard", children: [
      /* @__PURE__ */ e("header", { class: "nido-topbar", children: [
        /* @__PURE__ */ e("div", { class: "nido-topbar__brand", children: [
          /* @__PURE__ */ e("div", { class: "nido-topbar__clock", children: m }),
          /* @__PURE__ */ e("span", { children: "nido" })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-topbar__actions", children: [
          M && (L ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-weather-pill-btn",
              onClick: () => R(!0),
              "aria-label": "Voir la météo détaillée",
              children: /* @__PURE__ */ e(Zn, { entity: M })
            }
          ) : /* @__PURE__ */ e(Zn, { entity: M })),
          P > 0 && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-lights-pill-btn",
              onClick: () => ee(!0),
              "aria-label": `${P} lumière${P > 1 ? "s" : ""} allumée${P > 1 ? "s" : ""}`,
              children: /* @__PURE__ */ e("div", { class: "nido-lights-pill", children: [
                /* @__PURE__ */ e(ye, { size: 16 }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__count", children: P }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__label", children: P === 1 ? "lumière" : "lumières" })
              ] })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: () => C(!0),
              "aria-label": "Bloc note",
              title: "Bloc note",
              children: /* @__PURE__ */ e(wa, { size: 20 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: O,
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ e(It, { size: 20 }),
                E && /* @__PURE__ */ e("span", { class: "nido-bell-btn__badge" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: s,
              children: /* @__PURE__ */ e(Fi, { size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { class: "nido-hero", children: [
        /* @__PURE__ */ e("div", { class: "nido-hero__date", children: _ }),
        /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }, children: [
          /* @__PURE__ */ e("h1", { style: { margin: 0 }, children: [
            v,
            ", ",
            /* @__PURE__ */ e("em", { children: d })
          ] }),
          $.length > 0 && /* @__PURE__ */ e("div", { class: "nido-home-pill", children: [
            /* @__PURE__ */ e("div", { class: "nido-home-pill__avatars", children: $.map((k) => {
              const F = B(k.attributes.entity_picture);
              return F ? /* @__PURE__ */ e(
                "img",
                {
                  src: F,
                  alt: k.attributes.friendly_name,
                  title: k.attributes.friendly_name,
                  class: "nido-home-pill__avatar"
                },
                k.entity_id
              ) : null;
            }) }),
            /* @__PURE__ */ e("span", { class: "nido-home-pill__text", children: "À la maison" })
          ] })
        ] }),
        /* @__PURE__ */ e("p", { class: "nido-hero__sub", style: { marginTop: "24px" }, children: b })
      ] }),
      si ? /* @__PURE__ */ e(K, { children: [
        ri,
        oi && /* @__PURE__ */ e("section", { class: "nido-room nido-room--energy", children: [
          /* @__PURE__ */ e("div", { class: "nido-section-title", children: [
            /* @__PURE__ */ e("h2", { children: "Consommation en direct" }),
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                class: "n-pill-btn n-pill-btn--ghost",
                onClick: p,
                children: [
                  "Voir le détail énergie",
                  /* @__PURE__ */ e(gn, { size: 12 })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { class: "nido-energy-summary", children: /* @__PURE__ */ e(
            ii,
            {
              hass: n,
              powerEntityId: te,
              onOpen: p
            }
          ) })
        ] }, "__energy"),
        He.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
          /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
          /* @__PURE__ */ e(
            "div",
            {
              class: `nido-rooms-grid ${Be.isDragging ? "is-dragging" : ""}`,
              ref: (k) => {
                Be.containerRef.current = k;
              },
              children: He.map((k, F) => /* @__PURE__ */ e(
                wr,
                {
                  area: k,
                  entities: ae.get(k.area_id) ?? [],
                  accent: F === 0,
                  onOpen: () => l(k.area_id),
                  dragProps: Be.itemPropsFor(k.area_id),
                  presence: Re.get(k.area_id)
                },
                k.area_id
              ))
            }
          )
        ] })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-empty", children: [
        /* @__PURE__ */ e("p", { class: "n-muted", children: "Aucun appareil exposé pour l'instant. Ouvrez « Personnaliser » pour choisir vos entités." }),
        /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: s, children: "Personnaliser Nido" })
      ] })
    ] }),
    T && M && /* @__PURE__ */ e(
      Wa,
      {
        hass: n,
        weatherEntityId: M.entity_id,
        onClose: () => R(!1)
      }
    ),
    G && /* @__PURE__ */ e(
      Ua,
      {
        hass: n,
        notifications: D,
        onClose: () => V(!1)
      }
    ),
    Y && /* @__PURE__ */ e(
      Za,
      {
        hass: n,
        lights: I,
        areas: t,
        onClose: () => ee(!1)
      }
    ),
    w && /* @__PURE__ */ e(
      Ka,
      {
        hass: n,
        onClose: () => C(!1)
      }
    )
  ] });
}
function Mr(n, t, i, r, o, a = !1) {
  const s = { hass: t, entity: n, roomLabel: i };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(Ot, { ...s, hero: a, breatheVariant: r }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(Ft, { ...s, hero: a }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(Rt, { ...s, hero: a, breatheVariant: r }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(Wt, { entity: n, roomLabel: i, hero: a }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(Ht, { ...s, hero: a, breatheVariant: r }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(Vt, { ...s }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(Bt, { ...s, breatheVariant: r }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(Ut, { entity: n, roomLabel: i }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(qt, { ...s, breatheVariant: r }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(Yt, { ...s }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(Zt, { ...s }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(Jt, { ...s, breatheVariant: r }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(Kt, { ...s }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(Xt, { entity: n, roomLabel: i }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(ti, { hass: t, entity: n, roomLabel: i, calendarEntities: o }, n.entity_id);
    default:
      return null;
  }
}
function zr({
  hass: n,
  area: t,
  entities: i,
  entitiesOrder: r,
  onBack: o,
  onReorderEntities: a
}) {
  const s = Qt(t.name), l = kt(i), p = N(
    () => St(i, r, (f) => f.entity_id),
    [i, r]
  ), c = N(
    () => p.filter((f) => {
      if (f.domain !== "sensor") return !0;
      const x = f.state.attributes.device_class;
      return x !== "temperature" && x !== "humidity";
    }),
    [p]
  ), u = N(
    () => c.filter((f) => f.domain === "calendar"),
    [c]
  ), d = N(() => {
    const f = /* @__PURE__ */ new Map();
    for (const x of c)
      f.set(x.domain, (f.get(x.domain) ?? 0) + 1);
    return Array.from(f.entries()).sort((x, M) => M[1] - x[1]);
  }, [c]), [h, g] = S("all"), v = N(
    () => h === "all" ? c : c.filter((f) => f.domain === h),
    [c, h]
  ), b = on(
    v,
    (f) => f.entity_id,
    (f) => {
      const x = new Set(v.map((P) => P.entity_id)), M = [...f], I = p.map(
        (P) => x.has(P.entity_id) ? M.shift() : P
      );
      a(I.map((P) => P.entity_id));
    }
  ), m = c.filter(
    (f) => f.domain !== "sensor" && f.domain !== "binary_sensor"
  ).length, _ = c.filter(hn).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(Pt, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e(Lt, { size: 18 }) }) })
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
              m,
              " appareil",
              m > 1 ? "s" : ""
            ] }),
            _ > 0 && /* @__PURE__ */ e(K, { children: [
              /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
              /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                _,
                " actif",
                _ > 1 ? "s" : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("h1", { class: "nido-room-detail__title", children: t.name })
        ] })
      ] }),
      (l.temperature || l.humidity || l.illuminance) && /* @__PURE__ */ e("div", { class: "nido-room-detail__stats", children: [
        l.temperature && /* @__PURE__ */ e(
          Qe,
          {
            label: "Température",
            value: l.temperature.value,
            unit: l.temperature.unit || "°"
          }
        ),
        l.humidity && /* @__PURE__ */ e(at, {}),
        l.humidity && /* @__PURE__ */ e(
          Qe,
          {
            label: "Humidité",
            value: Math.round(parseFloat(l.humidity.value)).toString(),
            unit: l.humidity.unit || "%"
          }
        ),
        l.illuminance && /* @__PURE__ */ e(at, {}),
        l.illuminance && /* @__PURE__ */ e(
          Qe,
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
          class: `n-pill-btn ${h === "all" ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => g("all"),
          children: [
            "Tout · ",
            i.length
          ]
        }
      ),
      d.map(([f, x]) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${h === f ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => g(f),
          children: [
            Ha[f] ?? f,
            " · ",
            x
          ]
        }
      ))
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room-detail__grid ${b.isDragging ? "is-dragging" : ""}`,
        ref: (f) => {
          b.containerRef.current = f;
        },
        children: v.map((f, x) => {
          const M = x % 4 + 1, I = x === 0;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": I ? "true" : "false",
              ...b.itemPropsFor(f.entity_id),
              children: Mr(f, n, t.name, M, u, I)
            },
            f.entity_id
          );
        })
      }
    )
  ] }) });
}
function Qe({ label: n, value: t, unit: i }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: i })
    ] })
  ] });
}
function at() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const ze = 5, _e = {
  light: { label: "Lumières", Icon: ye },
  switch: { label: "Prises & switches", Icon: bn },
  cover: { label: "Volets & stores", Icon: mn },
  climate: { label: "Thermostats", Icon: se },
  lock: { label: "Serrures", Icon: vn },
  vacuum: { label: "Aspirateurs", Icon: xn },
  binary_sensor: { label: "Détecteurs", Icon: xe },
  sensor: { label: "Capteurs", Icon: ge },
  media_player: { label: "Lecteurs média", Icon: wn },
  alarm_control_panel: { label: "Alarmes", Icon: xe },
  camera: { label: "Caméras", Icon: Le },
  fan: { label: "Ventilateurs", Icon: kn },
  scene: { label: "Scènes", Icon: Mn },
  script: { label: "Scripts", Icon: pe },
  weather: { label: "Météo", Icon: Dt },
  calendar: { label: "Calendriers", Icon: jt }
}, rt = Object.keys(_e), sn = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] }
};
function Sr(n) {
  const {
    hass: t,
    entities: i,
    areas: r,
    initialTheme: o,
    initialMode: a,
    initialExposed: s,
    initialFavorites: l,
    initialExcludedUsers: p,
    isReturning: c,
    onApplyTheme: u,
    onClose: d,
    onDone: h
  } = n, [g, v] = S(0), [b, m] = S(o), [_, f] = S(a), [x, M] = S(new Set(s)), [I, P] = S(new Set(l)), [z, L] = S(
    new Set(p)
  ), [T, R] = S(null), [G, V] = S(null);
  Q(() => {
    let E = !1;
    return t.callWS({ type: "config/auth/list" }).then((O) => {
      E || R(
        (O ?? []).filter(($) => !$.system_generated).sort(($, B) => $.name.localeCompare(B.name))
      );
    }).catch((O) => {
      E || (V(O instanceof Error ? O.message : String(O)), t.user && R([t.user]));
    }), () => {
      E = !0;
    };
  }, [t]);
  const Y = () => v((E) => Math.min(ze - 1, E + 1)), ee = () => v((E) => Math.max(0, E - 1)), w = (E, O) => {
    m(E), f(O), u(E, O);
  }, C = (E) => {
    M((O) => {
      const $ = new Set(O);
      return $.has(E) ? ($.delete(E), P((B) => {
        if (!B.has(E)) return B;
        const ae = new Set(B);
        return ae.delete(E), ae;
      })) : $.add(E), $;
    });
  }, D = (E) => {
    P((O) => {
      const $ = new Set(O);
      return $.has(E) ? $.delete(E) : ($.add(E), M((B) => B.has(E) ? B : new Set(B).add(E))), $;
    });
  }, j = (E) => {
    L((O) => {
      const $ = new Set(O);
      return $.has(E) ? $.delete(E) : $.add(E), $;
    });
  }, W = () => {
    const E = Array.from(x), O = Array.from(I).filter((B) => x.has(B)), $ = Array.from(z);
    Hn(b, _), On(E), rn(O), Fn($), Wn(), h({
      exposed: E,
      favorites: O,
      theme: b,
      mode: _,
      excludedUsers: $
    });
  }, A = () => {
    Hn(b, _), On(Array.from(x)), rn(Array.from(I).filter((E) => x.has(E))), Fn(Array.from(z)), Wn(), d();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(pa, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: ze }, (E, O) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${O === g ? "is-active" : ""} ${O < g ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          g + 1,
          " / ",
          ze
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: A, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      g === 0 && /* @__PURE__ */ e(
        Ir,
        {
          isReturning: c,
          exposedCount: x.size,
          favCount: I.size,
          themeLabel: sn[b].name,
          modeLabel: _ === "light" ? "Clair" : "Sombre",
          allowedUsersCount: T ? T.filter((E) => !z.has(E.id)).length : null
        }
      ),
      g === 1 && /* @__PURE__ */ e(Cr, { entitiesCount: i.length, areasCount: r.length }),
      g === 2 && /* @__PURE__ */ e(
        Ar,
        {
          entities: i,
          exposed: x,
          favs: I,
          onToggleExpose: C,
          onToggleFav: D
        }
      ),
      g === 3 && /* @__PURE__ */ e(
        Er,
        {
          theme: b,
          mode: _,
          onPick: w,
          userName: t.user?.name ?? "vous"
        }
      ),
      g === 4 && /* @__PURE__ */ e(
        Dr,
        {
          hass: t,
          users: T,
          error: G,
          excluded: z,
          onToggleUser: j
        }
      )
    ] }, g),
    /* @__PURE__ */ e("footer", { class: "n-ob__footer", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-ob__back",
          disabled: g === 0,
          onClick: ee,
          children: [
            /* @__PURE__ */ e(aa, { size: 14 }),
            " Retour"
          ]
        }
      ),
      g < ze - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: Y, children: [
        "Continuer ",
        /* @__PURE__ */ e(Yn, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: W, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(Yn, { size: 16 })
      ] })
    ] })
  ] }) });
}
const ot = [
  ye,
  mn,
  bn,
  se,
  vn,
  xn,
  ge,
  wn,
  xe,
  Le,
  kn,
  Mn,
  pe
];
function Se({ offset: n, intervalMs: t }) {
  const [i, r] = S(n);
  Q(() => {
    const a = setInterval(() => r((s) => s + 1), t);
    return () => clearInterval(a);
  }, [t]);
  const o = ot[i % ot.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, i);
}
function Ir(n) {
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
          /* @__PURE__ */ e(Ie, { label: "Exposées", value: i }),
          /* @__PURE__ */ e(Ie, { label: "Favoris", value: r, accent: !0 }),
          /* @__PURE__ */ e(Ie, { label: "Ambiance", value: o, hint: a }),
          /* @__PURE__ */ e(
            Ie,
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
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tl", children: /* @__PURE__ */ e(Se, { offset: 0, intervalMs: 2200 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tr", children: /* @__PURE__ */ e(Se, { offset: 3, intervalMs: 2600 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--bl", children: /* @__PURE__ */ e(Se, { offset: 7, intervalMs: 2400 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--br", children: /* @__PURE__ */ e(Se, { offset: 10, intervalMs: 2800 }) })
    ] })
  ] });
}
function Ie(n) {
  return /* @__PURE__ */ e("div", { class: `n-ob-recap__card ${n.accent ? "is-accent" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: n.label }),
    /* @__PURE__ */ e("div", { class: "n-ob-recap__value", children: n.value }),
    n.hint && /* @__PURE__ */ e("div", { class: "n-ob-recap__hint", children: n.hint })
  ] });
}
function Cr({ entitiesCount: n, areasCount: t }) {
  const [i, r] = S("scanning");
  return Q(() => {
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
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(ca, { size: 18 }) }),
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
function Ar(n) {
  const { entities: t, exposed: i, favs: r, onToggleExpose: o, onToggleFav: a } = n, s = N(() => {
    const m = /* @__PURE__ */ new Map();
    for (const _ of t)
      rt.includes(_.domain) && (m.has(_.domain) || m.set(_.domain, []), m.get(_.domain).push(_));
    return Array.from(m.entries()).sort((_, f) => f[1].length - _[1].length);
  }, [t]), [l, p] = S(s[0]?.[0] ?? "light"), [c, u] = S(""), d = s.find(([m]) => m === l) ?? s[0], h = i.size, g = t.filter((m) => rt.includes(m.domain)).length, v = c.trim().toLowerCase(), b = d ? v ? d[1].filter(
    (m) => (m.friendly_name ?? "").toLowerCase().includes(v) || m.entity_id.toLowerCase().includes(v)
  ) : d[1] : [];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--entities", children: [
    /* @__PURE__ */ e("aside", { class: "n-ob-ent__rail", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 2 · Vos appareils" }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__count", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-num", children: h }),
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-sep", children: [
          " / ",
          g
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { marginBottom: 16 }, children: h === 0 ? "Aucun appareil exposé pour l'instant" : `appareil${h > 1 ? "s" : ""} exposé${h > 1 ? "s" : ""}` }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__list", children: s.map(([m, _]) => {
        const f = _e[m], x = f.Icon, M = _.filter((P) => i.has(P.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${m === l ? "is-active" : ""}`,
            onClick: () => p(m),
            children: [
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-icon", children: /* @__PURE__ */ e(x, { size: 15 }) }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-label", children: f.label }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-count", children: [
                M,
                "/",
                _.length
              ] })
            ]
          }
        );
      }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "n-ob-ent__main", children: d && /* @__PURE__ */ e(K, { children: [
      /* @__PURE__ */ e("div", { class: "n-ob-ent__head", children: [
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: [
            d[1].length,
            " disponibles"
          ] }),
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: _e[d[0]].label })
        ] }),
        /* @__PURE__ */ e("div", { class: "n-ob-ent__head-actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => b.forEach((m) => !i.has(m.entity_id) && o(m.entity_id)),
              children: "Tout exposer"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => b.forEach((m) => i.has(m.entity_id) && o(m.entity_id)),
              children: "Tout retirer"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__search", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(sa, { size: 14 }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            class: "n-ob-ent__search-input",
            value: c,
            onInput: (m) => u(m.target.value),
            placeholder: `Rechercher dans ${_e[d[0]].label.toLowerCase()}…`,
            "aria-label": "Rechercher une entité"
          }
        ),
        c && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-ob-ent__search-clear",
            onClick: () => u(""),
            "aria-label": "Effacer la recherche",
            children: /* @__PURE__ */ e(le, { size: 12 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__grid", children: [
        b.length === 0 && /* @__PURE__ */ e("div", { class: "n-ob-ent__empty", children: [
          "Aucune entité ne correspond à « ",
          c,
          " »"
        ] }),
        b.map((m) => {
          const _ = i.has(m.entity_id), f = r.has(m.entity_id), x = _e[m.domain].Icon;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `n-ob-ent-card ${_ ? "is-exposed" : ""}`,
              onClick: () => o(m.entity_id),
              children: [
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__icon ${_ ? "is-on" : ""}`, children: /* @__PURE__ */ e(x, { size: 16 }) }),
                /* @__PURE__ */ e("div", { class: "n-ob-ent-card__body", children: [
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__name", children: m.friendly_name }),
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__id", children: m.entity_id })
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    class: `n-ob-ent-card__star ${f ? "is-fav" : ""}`,
                    "aria-label": f ? "Retirer des favoris" : "Ajouter aux favoris",
                    onClick: (M) => {
                      M.stopPropagation(), a(m.entity_id);
                    },
                    children: f ? /* @__PURE__ */ e(la, { size: 14 }) : /* @__PURE__ */ e(oa, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${_ ? "is-on" : ""}`, children: _ && /* @__PURE__ */ e(ra, { size: 12, stroke: 2.4 }) })
              ]
            }
          );
        })
      ] })
    ] }) })
  ] });
}
function Er(n) {
  const { theme: t, mode: i, userName: r, onPick: o } = n, a = sn[t];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--theme", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 3 · Ambiance" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Quelle ambiance",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "vous va ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre." }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__grid", children: Mt.map((s) => {
        const l = sn[s];
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__tile ${t === s ? "is-active" : ""}`,
            onClick: () => o(s, i),
            children: [
              /* @__PURE__ */ e("div", { class: "n-ob-theme__swatches", children: l.swatches.map((p, c) => /* @__PURE__ */ e(
                "span",
                {
                  class: "n-ob-theme__swatch",
                  style: {
                    background: p,
                    borderRadius: c === 0 ? "8px 0 0 8px" : c === 2 ? "0 8px 8px 0" : "0"
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
              /* @__PURE__ */ e(yn, { size: 14 }),
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
              /* @__PURE__ */ e($t, { size: 14 }),
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
function Dr(n) {
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
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: s.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e(da, { size: 18 }) }),
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
const Tr = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function $r({ hass: n, host: t }) {
  const [i, r] = S(null), [o, a] = S(null), [s, l] = S(null), [p, c] = S(null), u = N(() => zt(), []), [d, h] = S(() => Ii()), [g, v] = S(() => Ci()), [b, m] = S(() => Ai()), [_, f] = S(() => Ei()), [x, M] = S(
    () => Ti()
  ), [I, P] = S(() => !Rn()), [z, L] = S({ kind: "dashboard" }), T = (A) => {
    h(A), rn(A);
  }, R = (A) => {
    f(A), Di(A);
  }, G = (A, E) => {
    M((O) => {
      const $ = { ...O, [A]: E };
      return $i($), $;
    });
  }, V = Z(n);
  V.current = n, Q(() => {
    if (!n) return;
    let A = !1;
    const E = [], O = async () => {
      const $ = V.current;
      if ($)
        try {
          const [B, ae, Re] = await Promise.all([
            xi($),
            yi($),
            wi($)
          ]);
          if (A) return;
          r(B), a(ae), l(Re);
        } catch (B) {
          if (A) return;
          c(B instanceof Error ? B.message : String(B));
        }
    };
    return O(), Promise.all(
      Tr.map(
        ($) => n.connection.subscribeEvents(() => {
          A || O();
        }, $)
      )
    ).then(($) => {
      if (A) {
        $.forEach((B) => B());
        return;
      }
      E.push(...$);
    }).catch(($) => console.warn("Nido: subscribeEvents failed", $)), () => {
      A = !0, E.forEach(($) => $());
    };
  }, [n != null]);
  const Y = N(() => !n || !o || !s ? [] : Mi(n, o, s), [n?.states, o, s]), ee = (A, E) => {
    t?.applyTheme?.(A, E);
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
  const C = N(() => new Set(g), [g]), D = z.kind === "room" ? i.find((A) => A.area_id === z.areaId) ?? null : null, j = N(
    () => D ? Y.filter(
      (A) => A.area_id === D.area_id && C.has(A.entity_id)
    ) : [],
    [Y, D, C]
  ), W = !!n.states[te] && C.has(te);
  return /* @__PURE__ */ e(K, { children: [
    z.kind === "energy" ? /* @__PURE__ */ e(
      gr,
      {
        hass: n,
        entities: Y,
        exposed: g,
        areas: i,
        onBack: () => L({ kind: "dashboard" })
      }
    ) : z.kind === "dashboard" || !D ? /* @__PURE__ */ e(
      kr,
      {
        hass: n,
        areas: i,
        entities: Y,
        favorites: d,
        exposed: g,
        roomsOrder: _,
        onConfigure: () => P(!0),
        onOpenRoom: (A) => L({ kind: "room", areaId: A }),
        onOpenEnergy: W ? () => L({ kind: "energy" }) : void 0,
        onReorderFavorites: T,
        onReorderRooms: R
      }
    ) : /* @__PURE__ */ e(
      zr,
      {
        hass: n,
        area: D,
        entities: j,
        entitiesOrder: x[D.area_id] ?? [],
        onBack: () => L({ kind: "dashboard" }),
        onReorderEntities: (A) => G(D.area_id, A)
      }
    ),
    I && /* @__PURE__ */ e(
      Sr,
      {
        hass: n,
        entities: Y,
        areas: i,
        initialTheme: u.theme,
        initialMode: u.mode,
        initialExposed: g,
        initialFavorites: d,
        initialExcludedUsers: b,
        isReturning: Rn(),
        onApplyTheme: ee,
        onClose: () => P(!1),
        onDone: (A) => {
          v(A.exposed), h(A.favorites), m(A.excludedUsers), P(!1);
        }
      }
    )
  ] });
}
const Pr = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', Lr = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-root-mount{width:100%;height:100%}.nido-shell{width:100%;height:100%;overflow-x:hidden;overflow-y:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px);box-sizing:border-box}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__brand{display:flex;flex-direction:column;align-items:flex-start;gap:4px}.nido-topbar__clock{font-family:var(--font-mono);font-size:14px;font-weight:600;color:var(--ink-3);line-height:1}.nido-topbar__brand span{font-family:"Comfortaa",var(--font-sans);font-weight:700;font-size:24px;letter-spacing:.04em;color:var(--accent);line-height:1}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card--accent-muted{background:var(--accent-soft);color:var(--ink-1);box-shadow:var(--shadow-md)}.n-card--accent-muted .n-icon-bubble{background:color-mix(in srgb,var(--accent) 22%,var(--accent-soft));color:var(--accent-deep)}.n-card--accent-muted .n-toggle{background:color-mix(in srgb,var(--accent) 18%,var(--bg-inset))}.n-card--accent-muted .n-toggle__thumb{background:var(--accent)}.n-card--accent-muted .n-eyebrow{color:var(--accent-deep);opacity:.7}.n-card--accent-muted .n-muted{color:var(--accent-deep);opacity:.65}.n-card--accent-muted .n-title{color:var(--accent-deep)}.n-card[data-hero=true],.nido-drag-item[data-hero=true] .n-card{min-height:200px;padding:24px}.n-cover-glow-wrap{position:relative;border-radius:calc(var(--r-lg) + 2px);padding:2px;overflow:hidden;isolation:isolate;background:transparent;transition:box-shadow .5s var(--ease-out)}.n-cover-glow-wrap[data-active=true]{box-shadow:0 0 18px 2px var(--accent);box-shadow:0 0 18px 2px color-mix(in srgb,var(--accent) 35%,transparent)}.n-cover-glow-wrap .n-card{position:relative;z-index:1}.n-cover-glow-wrap:before{content:"";position:absolute;width:200%;height:200%;top:-50%;left:-50%;background:conic-gradient(from 0deg,transparent 0%,transparent 35%,var(--accent) 45%,var(--accent) 55%,transparent 65%,transparent 100%);background:conic-gradient(from 0deg,transparent 0%,transparent 35%,color-mix(in srgb,var(--accent) 60%,transparent) 45%,var(--accent) 50%,color-mix(in srgb,var(--accent) 60%,transparent) 55%,transparent 65%,transparent 100%);animation:cover-glow-spin 3.5s linear infinite;opacity:0;transition:opacity .5s var(--ease-out);pointer-events:none;z-index:0;will-change:transform}.n-cover-glow-wrap[data-active=true]:before{opacity:1}@keyframes cover-glow-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.n-cover-glow-wrap:before{animation:none}.n-cover-glow-wrap[data-active=true]:before{background:var(--accent);opacity:.6}}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;position:relative;z-index:1}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle,.n-toggle[aria-checked=true]{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb,.n-toggle[aria-checked=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{position:relative;z-index:1}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor;position:relative;z-index:1}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:linear-gradient(to right,var(--accent) var(--val, 0%),var(--bg-inset) var(--val, 0%));outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-runnable-track{height:10px;border-radius:var(--r-pill);background:transparent}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer;margin-top:-3px}.n-slider::-moz-range-track{height:10px;border-radius:var(--r-pill);background:var(--bg-inset)}.n-slider::-moz-range-progress{height:10px;border-radius:var(--r-pill);background:var(--accent)}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:linear-gradient(to right,rgba(255,255,255,.5) var(--val, 0%),rgba(255,255,255,.2) var(--val, 0%))}.n-card--accent .n-slider::-moz-range-track{background:#fff3}.n-card--accent .n-slider::-moz-range-progress{background:#ffffff80}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px;position:relative;z-index:1}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto;position:relative;z-index:1}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3);position:relative;z-index:1}.n-media__volume .n-slider{flex:1}.n-media__bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}.n-media__bg img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1);opacity:.25;transition:opacity .5s var(--ease-out)}.n-media__bg-overlay{position:absolute;inset:0;background:var(--accent);opacity:.15;mix-blend-mode:overlay}.n-card[data-on=true] .n-media__bg img{opacity:.35}.n-card[data-hero=true] .n-media__track{margin-top:8px}.n-card[data-hero=true] .n-media__title{font-size:18px}.n-card[data-hero=true] .n-media__controls{gap:20px;margin-top:12px}.n-card[data-hero=true] .n-media__controls .n-icon-btn--primary{width:52px;height:52px}.n-card[data-hero=true] .nido-cal-widget__title{font-size:24px;margin-top:8px}.n-card[data-hero=true] .nido-cal-widget__when{margin-top:6px;font-size:14px}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-weather-pill{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 10px;background:var(--bg-card);border:1px solid var(--ink-4);border-radius:999px;font-family:var(--font-sans);color:var(--ink-1)}.nido-weather-pill__icon{display:inline-flex;align-items:center;color:var(--accent)}.nido-weather-pill__temp{font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:-.01em}.nido-weather-pill__sep{width:1px;height:12px;background:var(--ink-4)}.nido-weather-pill__label{font-size:12px;color:var(--ink-3)}.nido-lights-pill-btn{background:none;border:none;padding:0;cursor:pointer;display:inline-flex;transition:transform .2s}.nido-lights-pill-btn:hover{transform:scale(1.04)}.nido-lights-pill-btn:active{transform:scale(.96)}.nido-lights-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 10px;background:var(--accent-soft);border-radius:var(--r-pill);font-family:var(--font-sans);color:var(--accent-deep)}.nido-lights-pill__count{font-family:var(--font-display);font-size:13px;font-weight:600;letter-spacing:-.01em}.nido-lights-pill__label{font-size:12px;opacity:.8}.nido-lights-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-lights-panel__title{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-lights-panel__count{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:28px;padding:0 8px;background:var(--accent-soft);color:var(--accent-deep);border-radius:var(--r-pill);font-family:var(--font-display);font-size:14px;font-weight:600}.nido-lights-list{display:flex;flex-direction:column;gap:10px}.nido-lights-row{display:flex;align-items:center;gap:14px;background:var(--bg-card);border-radius:var(--r-lg);padding:14px 16px;transition:opacity .2s}.nido-lights-row.is-pending{opacity:.6;pointer-events:none}.nido-lights-row__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-lights-row__body{flex:1;min-width:0}.nido-lights-row__name{font-family:var(--font-display);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-lights-row__room{font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:2px;text-transform:uppercase;letter-spacing:.06em}.nido-lights-row__pct{font-family:var(--font-mono);font-size:13px;color:var(--ink-3);flex-shrink:0}.nido-lights-panel__footer{padding:16px 32px 24px;border-top:1px solid var(--ink-4)}.nido-lights-panel__all-off{width:100%;padding:12px;border-radius:var(--r-pill);border:1px solid var(--ink-4);background:var(--bg-card);color:var(--ink-1);font-family:var(--font-display);font-size:15px;font-weight:600;cursor:pointer;transition:background .18s,color .18s}.nido-lights-panel__all-off:hover{background:var(--ink-1);color:var(--bg-shell);border-color:var(--ink-1)}.nido-lights-panel__all-off:disabled{opacity:.5;cursor:not-allowed}.nido-cal-widget{cursor:pointer;transition:transform .2s var(--ease-spring),background .2s}.nido-cal-widget:hover{transform:translateY(-2px)}.nido-cal-widget:active{transform:scale(.98)}.nido-cal-widget__bubble{background:color-mix(in srgb,var(--cal-color, var(--ink-3)) 14%,var(--bg-inset))!important;color:var(--cal-color, var(--ink-3))!important}.nido-cal-widget__title{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.01em;line-height:1.2;color:var(--ink-1)}.nido-cal-widget__when{display:flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:auto}.nido-cal-widget__sep{opacity:.5}.nido-cal-widget__time{font-family:var(--font-mono);font-size:11px;letter-spacing:.04em}.nido-cal-panel__legend{display:flex;align-items:center;gap:16px;padding:10px 32px 12px;border-bottom:1px solid var(--ink-4)}.nido-cal-panel__legend-item{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}.nido-cal-panel__legend-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}.nido-cal-panel__days{display:flex;flex-direction:column;gap:0}.nido-cal-panel__day{display:flex;align-items:flex-start;gap:16px;padding:14px 0;border-bottom:1px dashed var(--ink-4)}.nido-cal-panel__day:last-child{border-bottom:none}.nido-cal-panel__badge{width:44px;height:44px;border-radius:var(--r-md);background:var(--bg-shell);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s}.nido-cal-panel__day.is-today .nido-cal-panel__badge{background:var(--accent-soft)}.nido-cal-panel__badge-day{font-family:var(--font-mono);font-size:9px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.1em}.nido-cal-panel__day.is-today .nido-cal-panel__badge-day{color:var(--accent-deep)}.nido-cal-panel__badge-num{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-cal-panel__day.is-today .nido-cal-panel__badge-num{color:var(--accent-deep)}.nido-cal-panel__events{flex:1;display:flex;flex-direction:column;gap:8px;padding-top:4px}.nido-cal-panel__empty{font-family:var(--font-sans);font-size:13px;color:var(--ink-4);line-height:44px}.nido-cal-panel__event{display:flex;align-items:flex-start;gap:10px}.nido-cal-panel__event-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px}.nido-cal-panel__event-body{flex:1;min-width:0}.nido-cal-panel__event-title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-cal-panel__event-who{font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-3);display:block;margin-top:2px}.nido-cal-panel__event-time{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.04em;flex-shrink:0;padding-top:2px}.n-weather__icon{color:var(--accent)}.n-weather__readout{display:flex;align-items:baseline;gap:4px;margin-top:6px}.n-weather__meta{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;color:var(--ink-3)}.n-weather__sep{width:3px;height:3px;border-radius:50%;background:var(--ink-4)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__head-right{display:flex;align-items:center;gap:6px}.nido-room-card__presence{display:flex}.nido-room-card__avatar{width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);object-fit:cover;margin-left:-6px;background:var(--accent)}.nido-room-card__avatar:first-child{margin-left:0}.nido-room-card__avatar--initial{display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:var(--bg);background:var(--accent);letter-spacing:0}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:hidden;max-height:100vh;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1 1 0;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:0;overflow:hidden;box-sizing:border-box}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__search{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);margin-bottom:12px}.n-ob-ent__search-icon{display:flex;color:var(--ink-3);flex-shrink:0}.n-ob-ent__search-input{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--ink-1);font-family:var(--font-sans);font-size:13px}.n-ob-ent__search-input::placeholder{color:var(--ink-3)}.n-ob-ent__search-clear{border:none;background:transparent;cursor:pointer;color:var(--ink-3);padding:4px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center}.n-ob-ent__search-clear:hover{background:var(--bg-shell);color:var(--ink-1)}.n-ob-ent__empty{grid-column:1 / -1;padding:24px;border-radius:var(--r-md);background:var(--bg-card);font-family:var(--font-sans);font-size:13px;color:var(--ink-3);text-align:center}.n-ob-ent__grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:56vh;padding-right:4px;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;word-break:break-word}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step{gap:20px}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}@media(max-width:600px){.n-ob{padding:8px;overflow:hidden}.n-ob__shell{padding:16px;border-radius:var(--r-xl);min-height:0;height:100%}.n-ob__header{margin-bottom:16px;gap:8px;flex-wrap:nowrap;flex:0 0 auto}.n-ob__brand-mark{width:30px;height:30px}.n-ob__brand-name{font-size:14px}.n-ob__step-count{display:none}.n-ob__skip{font-size:12px;padding:4px}.n-ob__body{display:block;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.n-ob-step{gap:16px}.n-ob__h1{font-size:clamp(28px,8vw,40px);margin-bottom:16px}.n-ob__lead{font-size:14px;margin-bottom:16px}.n-ob__eyebrow{margin-bottom:12px;font-size:10px}.n-ob__footer{margin-top:16px;gap:8px;flex:0 0 auto}.n-ob__back{padding:10px 14px;font-size:13px}.n-ob__primary{padding:12px 18px;font-size:13px}.n-ob-welcome-illus{max-width:260px}.n-ob-steps-overview{gap:16px;margin-top:20px}.n-ob-recap__grid{grid-template-columns:1fr 1fr;gap:8px}.n-ob-recap__value{font-size:22px}.n-ob-step__illus{min-height:180px}.n-ob-step__illus svg{width:220px;height:220px}.n-ob-pill-card{margin-top:16px;padding:12px}.n-ob-ent__count{font-size:22px}.n-ob-ent__rail{margin-bottom:4px}.n-ob-ent__list{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;max-height:none;gap:6px;padding-bottom:6px;-webkit-overflow-scrolling:touch}.n-ob-ent__rail-row{flex-shrink:0;padding:6px 10px 6px 6px;gap:8px;border-radius:var(--r-pill);border:1px solid var(--ink-4)}.n-ob-ent__rail-row.is-active{border-color:var(--ink-1)}.n-ob-ent__rail-icon{width:22px;height:22px}.n-ob-ent__rail-label{font-size:12px;flex:0 0 auto}.n-ob-ent__rail-count{font-size:10px}.n-ob-ent__head{flex-wrap:wrap;margin-bottom:10px;gap:8px}.n-ob-ent__title{font-size:18px}.n-ob-ent__head-actions{width:100%}.n-ob-ent__head-actions .n-pill-btn{flex:1;padding:6px 10px;font-size:12px}.n-ob-ent__search{padding:8px 12px;margin-bottom:8px}.n-ob-ent__search-input{font-size:14px}.n-ob-ent__grid{max-height:none;padding-right:0}.n-ob-ent-card{padding:10px;gap:10px}.n-ob-ent-card__icon{width:32px;height:32px}.n-ob-theme__grid{gap:8px}.n-ob-theme__tile{padding:10px}.n-ob-theme__name{font-size:14px}.n-ob-preview{padding:16px}.n-ob-preview__greet{font-size:22px}.n-ob-family{padding:12px;min-height:0}.n-ob-family__list{max-height:none}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}.nido-weather-panel{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end}.nido-weather-panel__backdrop{position:absolute;inset:0;background:#0006;backdrop-filter:blur(1px);animation:fade-in .3s ease-out}.nido-weather-panel__content{position:relative;width:100%;max-width:480px;background:var(--bg-shell);box-shadow:-4px 0 32px color-mix(in srgb,var(--accent) 15%,transparent);display:flex;flex-direction:column;animation:slide-in-right .3s cubic-bezier(.16,1,.3,1);overflow:hidden}.nido-weather-panel__header{padding:24px 32px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--fg-rgb),.05)}.nido-weather-panel__header h2{font-family:Comfortaa,sans-serif;font-size:1.5rem;font-weight:600;margin:0;color:var(--fg)}.nido-weather-panel__close{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;background:none;border-radius:50%;color:var(--ink-2);cursor:pointer;transition:background .15s,color .15s;flex-shrink:0}.nido-weather-panel__close:hover{background:rgba(var(--fg-rgb),.07);color:var(--fg)}.nido-weather-panel__scroll{flex:1;overflow-y:auto;padding:24px 32px;display:flex;flex-direction:column;gap:24px}.nido-wp-current{display:flex;align-items:center;gap:24px;padding:16px 0}.nido-wp-current svg{color:var(--accent)}.nido-wp-current-info{display:flex;flex-direction:column;gap:4px}.nido-wp-temp{font-size:3rem;font-weight:300;line-height:1;color:var(--fg);font-variant-numeric:tabular-nums}.nido-wp-desc{font-size:1.125rem;color:var(--fg-muted);text-transform:capitalize}.nido-wp-alert{display:flex;align-items:center;gap:12px;padding:16px;border-radius:12px;font-weight:500}.nido-wp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.nido-wp-card{background:var(--bg-card);padding:16px;border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;gap:8px}.nido-wp-card-head{display:flex;align-items:center;gap:8px;color:var(--fg-muted);font-size:.875rem}.nido-wp-card-val{font-size:1.125rem;font-weight:500;color:var(--fg)}.nido-wp-section h3{font-size:1rem;font-weight:600;color:var(--fg);margin:0 0 16px;font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:.05em;opacity:.8}.nido-wp-hourly{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;scrollbar-width:none}.nido-wp-hourly::-webkit-scrollbar{display:none}.nido-wp-hour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:60px;background:var(--bg-card);padding:16px 8px;border-radius:100px;border:1px solid var(--border)}.nido-wp-hour-time{font-size:.875rem;color:var(--fg-muted)}.nido-wp-hour svg{color:var(--accent)}.nido-wp-hour-temp{font-weight:600;font-size:1rem}.nido-wp-hour-precip{font-size:.75rem;color:#0ea5e9;font-weight:500}.nido-wp-daily{display:flex;flex-direction:column;gap:12px}.nido-wp-day{display:flex;align-items:center;gap:16px;padding:12px 16px;background:var(--bg-card);border-radius:12px;border:1px solid var(--border)}.nido-wp-day-name{width:100px;font-weight:500;color:var(--fg);text-transform:capitalize}.nido-wp-day svg{color:var(--accent)}.nido-wp-day-temps{flex:1;display:flex;align-items:center;gap:12px;justify-content:flex-end}.nido-wp-day-min{color:var(--fg-muted);width:32px;text-align:right}.nido-wp-day-max{font-weight:600;width:32px}.nido-wp-day-bar{flex:1;height:4px;background:var(--border);border-radius:2px;position:relative}.nido-weather-pill-btn{background:none;border:none;padding:0;margin:0;cursor:pointer;transition:transform .2s;border-radius:100px;display:inline-flex}.nido-weather-pill-btn:hover{transform:scale(1.05)}.nido-weather-pill-btn:active{transform:scale(.95)}.nido-home-pill{display:flex;align-items:center;gap:12px;background:transparent;border:1px solid var(--b-1);padding:6px 16px 6px 6px;border-radius:99px}.nido-home-pill__avatars{display:flex;align-items:center}.nido-home-pill__avatar{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--bg-shell);margin-left:-12px;position:relative;transition:transform .2s,z-index .2s}.nido-home-pill__avatar:first-child{margin-left:0}.nido-home-pill__avatar:hover{z-index:10;transform:translateY(-2px)}.nido-home-pill__text{font-size:15px;color:var(--ink-2);font-weight:500;white-space:nowrap}.nido-notification-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-notification-panel__backdrop{position:absolute;inset:0;background:#0003;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.nido-notification-panel__content{position:relative;width:100%;max-width:400px;height:100%;background:var(--bg-shell);box-shadow:-8px 0 32px #0000001a;display:flex;flex-direction:column;animation:nido-slide-in-right .4s var(--ease-out)}@keyframes nido-slide-in-right{0%{transform:translate(100%)}to{transform:translate(0)}}.nido-notification-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4)}.nido-notification-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-notification-panel__title-group{display:flex;align-items:baseline;gap:16px}.nido-notification-panel__clear-all{font-family:var(--font-mono);font-size:12px;color:var(--ink-3);background:none;border:none;padding:0;cursor:pointer;text-decoration:underline;transition:color .2s}.nido-notification-panel__clear-all:hover{color:var(--danger)}.nido-notification-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-notification-panel__close:hover{background:var(--ink-4)}.nido-notification-panel__scroll{flex:1;overflow-y:auto;padding:16px 32px 32px}.nido-notification-empty{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--ink-3);text-align:center}.nido-notification-empty__icon{margin-bottom:16px;opacity:.2}.nido-notification-list{display:flex;flex-direction:column;gap:12px}.nido-notification-item{position:relative;background:var(--bg-card);border-radius:var(--r-lg);padding:16px;display:flex;gap:14px;transition:transform .2s;border:1px solid transparent}.nido-notification-item:hover{transform:translateY(-2px)}.nido-notification-item__icon{width:40px;height:40px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-notification-item--info .nido-notification-item__icon{background:color-mix(in srgb,var(--accent) 15%,var(--bg-card));color:var(--accent)}.nido-notification-item--warning .nido-notification-item__icon{background:color-mix(in srgb,var(--danger) 15%,var(--bg-card));color:var(--danger)}.nido-notification-item--success .nido-notification-item__icon{background:color-mix(in srgb,var(--positive) 15%,var(--bg-card));color:var(--positive)}.nido-notification-item__body{flex:1;min-width:0}.nido-notification-item__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px}.nido-notification-item__title{font-family:var(--font-display);font-weight:600;font-size:15px;color:var(--ink-1)}.nido-notification-item__time{font-family:var(--font-mono);font-size:10px;color:var(--ink-3)}.nido-notification-item__message{margin:0;font-size:13px;color:var(--ink-2);line-height:1.4}.nido-notification-item__dismiss{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;border:none;background:transparent;color:var(--ink-3);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s,background .2s}.nido-notification-item:hover .nido-notification-item__dismiss{opacity:1}.nido-notification-item__dismiss:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-bell-btn{position:relative;background:transparent;color:var(--ink-2);padding:6px 12px;border:1px solid var(--ink-4);border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s;height:32px;min-width:44px}.nido-bell-btn:hover{background:var(--bg-inset);border-color:var(--ink-3)}.nido-bell-btn__badge{position:absolute;top:4px;right:8px;width:8px;height:8px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-shell)}.nido-topbar__actions>.nido-bell-btn,.nido-topbar__actions>.n-pill-btn--ghost{flex:0 0 auto;width:44px;height:32px;min-width:44px;padding:0;display:inline-flex;align-items:center;justify-content:center}@media(max-width:768px){.nido-topbar__actions{flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:8px}.nido-weather-pill-btn,.nido-topbar__actions>.nido-weather-pill,.nido-lights-pill-btn{flex:0 0 100%;display:flex;justify-content:flex-end}}.nido-shopping-panel{position:fixed;inset:0;z-index:2000;display:flex;align-items:stretch;justify-content:center}.nido-shopping-panel__backdrop{position:absolute;inset:0;background:#00000059;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.nido-shopping-panel__content{position:relative;width:100%;height:100%;background:var(--bg-shell);display:flex;flex-direction:column;animation:nido-shopping-fade .25s var(--ease-out)}@keyframes nido-shopping-fade{0%{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}}.nido-shopping-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4);flex:0 0 auto}.nido-shopping-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-shopping-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-shopping-panel__close:hover{background:var(--ink-4)}.nido-shopping-panel__board{position:relative;flex:1 1 auto;min-height:0;background:var(--bg-shell);background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:24px 24px;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:24px}.nido-shopping-panel__sheet{position:relative;aspect-ratio:3 / 4;height:100%;max-height:100%;max-width:100%;background:var(--bg-card-elev);border:1px solid var(--ink-4);border-radius:var(--r-md);box-shadow:var(--shadow-lg);overflow:hidden}.nido-shopping-panel__canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;cursor:crosshair;display:block}.nido-shopping-panel__toolbar{position:absolute;bottom:20px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:var(--s-3);background:var(--bg-card-elev);border:1px solid var(--ink-4);border-radius:var(--r-pill);padding:8px 12px;box-shadow:var(--shadow-lg);z-index:2}.nido-shopping-panel__tool{border:none;background:transparent;font-size:20px;line-height:1;width:44px;height:44px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--ink-2);transition:background .2s,color .2s}.nido-shopping-panel__tool:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-shopping-panel__tool--danger:hover{background:color-mix(in srgb,var(--danger) 12%,transparent);color:var(--danger)}.nido-shopping-panel__color{width:36px;height:36px;border:1px solid var(--ink-4);border-radius:50%;background:transparent;padding:0;cursor:pointer;overflow:hidden}.nido-shopping-panel__color::-webkit-color-swatch-wrapper{padding:0}.nido-shopping-panel__color::-webkit-color-swatch{border:none;border-radius:50%}.nido-shopping-panel__color::-moz-color-swatch{border:none;border-radius:50%}.nido-shopping-panel__size{width:100px;cursor:pointer;accent-color:var(--accent)}@media(max-width:768px){.nido-shopping-panel__header{padding:16px 20px}.nido-shopping-panel__toolbar{bottom:12px;gap:6px;padding:6px 8px}.nido-shopping-panel__size{width:70px}}@media(prefers-reduced-motion:reduce){.nido-shopping-panel__content{animation:none}}@keyframes nido-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.55;transform:scale(.7)}}@media(prefers-reduced-motion:reduce){.n-power-gauge__live-dot,.nido-energy__live-dot,.n-power-gauge__pill-dot{animation:none!important}}.nido-energy__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-energy__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-energy__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-energy__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-energy__head-actions{display:flex;gap:10px;align-items:center}.nido-energy__ha-link{text-decoration:none;display:inline-flex;align-items:center;gap:6px}.nido-energy__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-energy__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-energy__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-energy__icon-bg{position:absolute;inset:0;opacity:.2}.nido-energy__icon svg{position:relative}.nido-energy__hero-meta{display:flex;align-items:center;gap:10px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-energy__sep{width:4px;height:4px;border-radius:50%;background:var(--ink-4);display:inline-block}.nido-energy__live{display:inline-flex;align-items:center;gap:6px}.nido-energy__live-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:nido-pulse 1.4s ease-in-out infinite}.nido-energy__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-energy__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-energy__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-energy__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-energy__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-energy__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-energy__section{margin-top:28px}.nido-energy__live-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:16px;align-items:stretch}@media(max-width:720px){.nido-energy__hero{flex-direction:column;align-items:flex-start}.nido-energy__stats{width:100%;box-sizing:border-box}.nido-energy__live-grid{grid-template-columns:1fr}}.nido-energy-summary{display:grid;grid-template-columns:1fr;gap:16px}.n-power-gauge{position:relative;overflow:hidden;min-height:280px;box-sizing:border-box;display:flex;flex-direction:column}.n-power-gauge__deco{position:absolute;top:-60px;right:-60px;opacity:.18;color:var(--accent-ink);pointer-events:none}.n-power-gauge__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;gap:12px;position:relative}.n-power-gauge__head-text{min-width:0}.n-power-gauge__head-actions{display:flex;align-items:center;gap:8px}.n-power-gauge__live{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:var(--r-pill);background:#ffffff2e;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent-ink)}.n-power-gauge__live-dot{width:7px;height:7px;border-radius:50%;background:var(--accent-ink);animation:nido-pulse 1.4s ease-in-out infinite}.n-power-gauge__open{width:32px;height:32px;border-radius:var(--r-pill);background:#ffffff2e;color:var(--accent-ink);display:flex;align-items:center;justify-content:center}.n-power-gauge__chart{display:flex;justify-content:center;position:relative;margin-bottom:8px}.n-power-gauge__svg{display:block}.n-power-gauge__arc{transition:all .6s var(--ease-spring)}.n-power-gauge__readout{position:absolute;left:0;right:0;bottom:6px;display:flex;flex-direction:column;align-items:center;gap:4px;pointer-events:none}.n-power-gauge__value{font-family:var(--font-display);font-size:44px;font-weight:600;letter-spacing:-.04em;line-height:1;color:var(--accent-ink)}.n-power-gauge__unit{font-size:18px;opacity:.7;margin-left:4px}.n-power-gauge__sublabel{color:var(--accent-ink)!important;opacity:.7}.n-power-gauge__foot{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding-top:4px;font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-ink);opacity:.85}.n-power-gauge__pill{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:var(--r-pill);background:#ffffff29;color:var(--accent-ink);opacity:1}.n-power-gauge__pill-dot{width:5px;height:5px;border-radius:50%;background:var(--accent-ink)}.n-power-gauge__unavailable{text-align:center;padding:32px 0;color:var(--accent-ink);opacity:.85}.n-subscription-guard{min-height:280px;box-sizing:border-box;display:flex;flex-direction:column}.n-subscription-guard__head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:12px}.n-subscription-guard__pill{flex:0 0 auto;white-space:nowrap;font-size:11px}.n-subscription-guard__pill.is-watch{background:var(--accent-soft);color:var(--accent-deep);border-color:transparent}.n-subscription-guard__pill.is-danger{background:var(--warning);color:#fff;border-color:transparent}.n-subscription-guard__chart{position:relative;width:160px;height:160px;margin:8px auto 0}.n-subscription-guard__arc{transition:stroke-dasharray .6s var(--ease-spring),stroke .24s}.n-subscription-guard__readout{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.n-subscription-guard__value{font-family:var(--font-display);font-size:36px;font-weight:600;letter-spacing:-.04em;line-height:1}.n-subscription-guard__unit{font-size:16px;opacity:.7;margin-left:2px}.n-subscription-guard__sub{margin-top:6px;display:block}.n-subscription-guard__msg{margin-top:12px;font-size:12px;color:var(--ink-2);text-align:center}.n-hourly{min-height:320px;box-sizing:border-box;display:flex;flex-direction:column}.n-hourly__head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:18px;flex-wrap:wrap}.n-hourly__total-row{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}.n-hourly__total{font-family:var(--font-display);font-size:44px;font-weight:600;letter-spacing:-.04em;line-height:1;color:var(--ink-1)}.n-hourly__total-unit{font-size:22px;opacity:.6;margin-left:4px}.n-hourly__delta{font-size:11px}.n-hourly__modes{display:flex;gap:6px;flex-wrap:wrap}.n-hourly__modes .n-pill-btn{flex:0 0 auto}.n-hourly__modes .is-disabled{opacity:.5;pointer-events:none}.n-hourly__loading{padding:60px 0;text-align:center}.n-bars{position:relative;height:160px;margin-top:8px}.n-bars--empty{display:flex;align-items:center;justify-content:center}.n-bars__avg{position:absolute;left:0;right:0;height:1px;border-top:1px dashed var(--ink-4);pointer-events:none}.n-bars__avg-label{position:absolute;right:0;top:-16px;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3)}.n-bars__grid{display:flex;align-items:flex-end;gap:4px;height:100%}.n-bars__col{flex:1;height:100%;display:flex;flex-direction:column;justify-content:flex-end;position:relative}.n-bars__bar{border-radius:4px;min-height:3px;transition:height .6s var(--ease-spring)}.n-bars__bar.is-now{background:var(--accent-deep)}.n-bars__bar.is-peak{background:var(--accent)}.n-bars__bar.is-past{background:var(--accent-soft)}.n-bars__bar.is-future{background:transparent;border:1px dashed var(--ink-4)}.n-bars__now-label{position:absolute;top:-22px;left:50%;transform:translate(-50%);font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;color:var(--accent-deep);white-space:nowrap;font-weight:600}.n-bars__axis{display:flex;justify-content:space-between;margin-top:10px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);letter-spacing:.1em;text-transform:uppercase}.n-top-consumers{min-height:240px;box-sizing:border-box}.n-top-consumers__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px;gap:12px}.n-top-consumers__list{display:flex;flex-direction:column;gap:14px}.n-top-consumers__row{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center}.n-top-consumers__row[role=button]{cursor:pointer}.n-top-consumers__bubble{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-top-consumers__bubble.is-first{background:var(--accent-soft);color:var(--accent-deep)}.n-top-consumers__body{min-width:0}.n-top-consumers__line{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:6px}.n-top-consumers__name-wrap{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.n-top-consumers__name{font-family:var(--font-display);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1)}.n-top-consumers__room{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin-left:8px}.n-top-consumers__value{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em;color:var(--ink-1)}.n-top-consumers__value.is-first{color:var(--accent-deep)}.n-top-consumers__unit{font-size:11px;opacity:.6;margin-left:2px}.n-top-consumers__meter{display:flex;align-items:center}.n-top-consumers__bar{flex:1;height:6px;background:var(--bg-inset);border-radius:var(--r-pill);overflow:hidden}.n-top-consumers__bar-fill{height:100%;background:var(--ink-4);border-radius:var(--r-pill);transition:width .6s var(--ease-spring)}.n-top-consumers__bar-fill.is-first{background:var(--accent)}.n-top-consumers__chevron{width:32px;height:32px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center}.n-top-consumers__empty{padding:24px 0;text-align:center}', st = "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let lt = !1;
function Nr() {
  if (lt || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${st}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = st, document.head.appendChild(t);
  }
  lt = !0;
}
class jr extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, Nr();
    const t = this.attachShadow({ mode: "open" }), i = document.createElement("style");
    i.textContent = `${Pr}
${Lr}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(i, this._mountPoint);
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
    const { theme: t, mode: i } = zt();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", i), this._render();
  }
  disconnectedCallback() {
    An(null, this._mountPoint);
  }
  applyTheme(t, i) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", i);
  }
  _render() {
    An(ht($r, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", jr);
console.info(
  "%c NIDO %c v0.3.1 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
