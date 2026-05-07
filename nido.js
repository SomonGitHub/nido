var Le, V, ot, oe, Mn, st, lt, Ue, Se, _e, ct, sn, Qe, en, Pe = {}, $e = [], si = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Oe = Array.isArray;
function te(n, t) {
  for (var i in t) n[i] = t[i];
  return n;
}
function ln(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function dt(n, t, i) {
  var r, o, a, l = {};
  for (a in t) a == "key" ? r = t[a] : a == "ref" ? o = t[a] : l[a] = t[a];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Le.call(arguments, 2) : i), typeof n == "function" && n.defaultProps != null) for (a in n.defaultProps) l[a] === void 0 && (l[a] = n.defaultProps[a]);
  return Ce(n, l, r, o, null);
}
function Ce(n, t, i, r, o) {
  var a = { type: n, props: t, key: i, ref: r, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++ot, __i: -1, __u: 0 };
  return o == null && V.vnode != null && V.vnode(a), a;
}
function Z(n) {
  return n.children;
}
function Ae(n, t) {
  this.props = n, this.context = t;
}
function de(n, t) {
  if (t == null) return n.__ ? de(n.__, n.__i + 1) : null;
  for (var i; t < n.__k.length; t++) if ((i = n.__k[t]) != null && i.__e != null) return i.__e;
  return typeof n.type == "function" ? de(n) : null;
}
function li(n) {
  if (n.__P && n.__d) {
    var t = n.__v, i = t.__e, r = [], o = [], a = te({}, t);
    a.__v = t.__v + 1, V.vnode && V.vnode(a), cn(n.__P, a, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [i] : null, r, i ?? de(t), !!(32 & t.__u), o), a.__v = t.__v, a.__.__k[a.__i] = a, _t(r, a, o), t.__e = t.__ = null, a.__e != i && pt(a);
  }
}
function pt(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), pt(n);
}
function zn(n) {
  (!n.__d && (n.__d = !0) && oe.push(n) && !Te.__r++ || Mn != V.debounceRendering) && ((Mn = V.debounceRendering) || st)(Te);
}
function Te() {
  try {
    for (var n, t = 1; oe.length; ) oe.length > t && oe.sort(lt), n = oe.shift(), t = oe.length, li(n);
  } finally {
    oe.length = Te.__r = 0;
  }
}
function ut(n, t, i, r, o, a, l, s, p, c, u) {
  var d, h, g, v, b, m, f, _ = r && r.__k || $e, x = t.length;
  for (p = ci(i, t, _, p, x), d = 0; d < x; d++) (g = i.__k[d]) != null && (h = g.__i != -1 && _[g.__i] || Pe, g.__i = d, m = cn(n, g, h, o, a, l, s, p, c, u), v = g.__e, g.ref && h.ref != g.ref && (h.ref && dn(h.ref, null, g), u.push(g.ref, g.__c || v, g)), b == null && v != null && (b = v), (f = !!(4 & g.__u)) || h.__k === g.__k ? (p = ht(g, p, n, f), f && h.__e && (h.__e = null)) : typeof g.type == "function" && m !== void 0 ? p = m : v && (p = v.nextSibling), g.__u &= -7);
  return i.__e = b, p;
}
function ci(n, t, i, r, o) {
  var a, l, s, p, c, u = i.length, d = u, h = 0;
  for (n.__k = new Array(o), a = 0; a < o; a++) (l = t[a]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = n.__k[a] = Ce(null, l, null, null, null) : Oe(l) ? l = n.__k[a] = Ce(Z, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? l = n.__k[a] = Ce(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : n.__k[a] = l, p = a + h, l.__ = n, l.__b = n.__b + 1, s = null, (c = l.__i = di(l, i, p, d)) != -1 && (d--, (s = i[c]) && (s.__u |= 2)), s == null || s.__v == null ? (c == -1 && (o > u ? h-- : o < u && h++), typeof l.type != "function" && (l.__u |= 4)) : c != p && (c == p - 1 ? h-- : c == p + 1 ? h++ : (c > p ? h-- : h++, l.__u |= 4))) : n.__k[a] = null;
  if (d) for (a = 0; a < u; a++) (s = i[a]) != null && (2 & s.__u) == 0 && (s.__e == r && (r = de(s)), gt(s, s));
  return r;
}
function ht(n, t, i, r) {
  var o, a;
  if (typeof n.type == "function") {
    for (o = n.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = n, t = ht(o[a], t, i, r));
    return t;
  }
  n.__e != t && (r && (t && n.type && !t.parentNode && (t = de(n)), i.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function di(n, t, i, r) {
  var o, a, l, s = n.key, p = n.type, c = t[i], u = c != null && (2 & c.__u) == 0;
  if (c === null && s == null || u && s == c.key && p == c.type) return i;
  if (r > (u ? 1 : 0)) {
    for (o = i - 1, a = i + 1; o >= 0 || a < t.length; ) if ((c = t[l = o >= 0 ? o-- : a++]) != null && (2 & c.__u) == 0 && s == c.key && p == c.type) return l;
  }
  return -1;
}
function In(n, t, i) {
  t[0] == "-" ? n.setProperty(t, i ?? "") : n[t] = i == null ? "" : typeof i != "number" || si.test(t) ? i : i + "px";
}
function ye(n, t, i, r, o) {
  var a, l;
  e: if (t == "style") if (typeof i == "string") n.style.cssText = i;
  else {
    if (typeof r == "string" && (n.style.cssText = r = ""), r) for (t in r) i && t in i || In(n.style, t, "");
    if (i) for (t in i) r && i[t] == r[t] || In(n.style, t, i[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(ct, "$1")), l = t.toLowerCase(), t = l in n || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + a] = i, i ? r ? i[_e] = r[_e] : (i[_e] = sn, n.addEventListener(t, a ? en : Qe, a)) : n.removeEventListener(t, a ? en : Qe, a);
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
function Sn(n) {
  return function(t) {
    if (this.l) {
      var i = this.l[t.type + n];
      if (t[Se] == null) t[Se] = sn++;
      else if (t[Se] < i[_e]) return;
      return i(V.event ? V.event(t) : t);
    }
  };
}
function cn(n, t, i, r, o, a, l, s, p, c) {
  var u, d, h, g, v, b, m, f, _, x, M, S, z, N, T, D = t.type;
  if (t.constructor !== void 0) return null;
  128 & i.__u && (p = !!(32 & i.__u), a = [s = t.__e = i.__e]), (u = V.__b) && u(t);
  e: if (typeof D == "function") try {
    if (f = t.props, _ = D.prototype && D.prototype.render, x = (u = D.contextType) && r[u.__c], M = u ? x ? x.props.value : u.__ : r, i.__c ? m = (d = t.__c = i.__c).__ = d.__E : (_ ? t.__c = d = new D(f, M) : (t.__c = d = new Ae(f, M), d.constructor = D, d.render = ui), x && x.sub(d), d.state || (d.state = {}), d.__n = r, h = d.__d = !0, d.__h = [], d._sb = []), _ && d.__s == null && (d.__s = d.state), _ && D.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = te({}, d.__s)), te(d.__s, D.getDerivedStateFromProps(f, d.__s))), g = d.props, v = d.state, d.__v = t, h) _ && D.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), _ && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (_ && D.getDerivedStateFromProps == null && f !== g && d.componentWillReceiveProps != null && d.componentWillReceiveProps(f, M), t.__v == i.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(f, d.__s, M) === !1) {
        t.__v != i.__v && (d.props = f, d.state = d.__s, d.__d = !1), t.__e = i.__e, t.__k = i.__k, t.__k.some(function(B) {
          B && (B.__ = t);
        }), $e.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && l.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(f, d.__s, M), _ && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(g, v, b);
      });
    }
    if (d.context = M, d.props = f, d.__P = n, d.__e = !1, S = V.__r, z = 0, _) d.state = d.__s, d.__d = !1, S && S(t), u = d.render(d.props, d.state, d.context), $e.push.apply(d.__h, d._sb), d._sb = [];
    else do
      d.__d = !1, S && S(t), u = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++z < 25);
    d.state = d.__s, d.getChildContext != null && (r = te(te({}, r), d.getChildContext())), _ && !h && d.getSnapshotBeforeUpdate != null && (b = d.getSnapshotBeforeUpdate(g, v)), N = u != null && u.type === Z && u.key == null ? ft(u.props.children) : u, s = ut(n, Oe(N) ? N : [N], t, i, r, o, a, l, s, p, c), d.base = t.__e, t.__u &= -161, d.__h.length && l.push(d), m && (d.__E = d.__ = null);
  } catch (B) {
    if (t.__v = null, p || a != null) if (B.then) {
      for (t.__u |= p ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      a[a.indexOf(s)] = null, t.__e = s;
    } else {
      for (T = a.length; T--; ) ln(a[T]);
      nn(t);
    }
    else t.__e = i.__e, t.__k = i.__k, B.then || nn(t);
    V.__e(B, t, i);
  }
  else a == null && t.__v == i.__v ? (t.__k = i.__k, t.__e = i.__e) : s = t.__e = pi(i.__e, t, i, r, o, a, l, p, c);
  return (u = V.diffed) && u(t), 128 & t.__u ? void 0 : s;
}
function nn(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(nn));
}
function _t(n, t, i) {
  for (var r = 0; r < i.length; r++) dn(i[r], i[++r], i[++r]);
  V.__c && V.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(a) {
        a.call(o);
      });
    } catch (a) {
      V.__e(a, o.__v);
    }
  });
}
function ft(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : Oe(n) ? n.map(ft) : te({}, n);
}
function pi(n, t, i, r, o, a, l, s, p) {
  var c, u, d, h, g, v, b, m = i.props || Pe, f = t.props, _ = t.type;
  if (_ == "svg" ? o = "http://www.w3.org/2000/svg" : _ == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), a != null) {
    for (c = 0; c < a.length; c++) if ((g = a[c]) && "setAttribute" in g == !!_ && (_ ? g.localName == _ : g.nodeType == 3)) {
      n = g, a[c] = null;
      break;
    }
  }
  if (n == null) {
    if (_ == null) return document.createTextNode(f);
    n = document.createElementNS(o, _, f.is && f), s && (V.__m && V.__m(t, a), s = !1), a = null;
  }
  if (_ == null) m === f || s && n.data == f || (n.data = f);
  else {
    if (a = a && Le.call(n.childNodes), !s && a != null) for (m = {}, c = 0; c < n.attributes.length; c++) m[(g = n.attributes[c]).name] = g.value;
    for (c in m) g = m[c], c == "dangerouslySetInnerHTML" ? d = g : c == "children" || c in f || c == "value" && "defaultValue" in f || c == "checked" && "defaultChecked" in f || ye(n, c, null, g, o);
    for (c in f) g = f[c], c == "children" ? h = g : c == "dangerouslySetInnerHTML" ? u = g : c == "value" ? v = g : c == "checked" ? b = g : s && typeof g != "function" || m[c] === g || ye(n, c, g, m[c], o);
    if (u) s || d && (u.__html == d.__html || u.__html == n.innerHTML) || (n.innerHTML = u.__html), t.__k = [];
    else if (d && (n.innerHTML = ""), ut(t.type == "template" ? n.content : n, Oe(h) ? h : [h], t, i, r, _ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, a, l, a ? a[0] : i.__k && de(i, 0), s, p), a != null) for (c = a.length; c--; ) ln(a[c]);
    s || (c = "value", _ == "progress" && v == null ? n.removeAttribute("value") : v != null && (v !== n[c] || _ == "progress" && !v || _ == "option" && v != m[c]) && ye(n, c, v, m[c], o), c = "checked", b != null && b != n[c] && ye(n, c, b, m[c], o));
  }
  return n;
}
function dn(n, t, i) {
  try {
    if (typeof n == "function") {
      var r = typeof n.__u == "function";
      r && n.__u(), r && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    V.__e(o, i);
  }
}
function gt(n, t, i) {
  var r, o;
  if (V.unmount && V.unmount(n), (r = n.ref) && (r.current && r.current != n.__e || dn(r, null, t)), (r = n.__c) != null) {
    if (r.componentWillUnmount) try {
      r.componentWillUnmount();
    } catch (a) {
      V.__e(a, t);
    }
    r.base = r.__P = null;
  }
  if (r = n.__k) for (o = 0; o < r.length; o++) r[o] && gt(r[o], t, i || typeof n.type != "function");
  i || ln(n.__e), n.__c = n.__ = n.__e = void 0;
}
function ui(n, t, i) {
  return this.constructor(n, i);
}
function Cn(n, t, i) {
  var r, o, a, l;
  t == document && (t = document.documentElement), V.__ && V.__(n, t), o = (r = !1) ? null : t.__k, a = [], l = [], cn(t, n = t.__k = dt(Z, null, [n]), o || Pe, Pe, t.namespaceURI, o ? null : t.firstChild ? Le.call(t.childNodes) : null, a, o ? o.__e : t.firstChild, r, l), _t(a, n, l);
}
Le = $e.slice, V = { __e: function(n, t, i, r) {
  for (var o, a, l; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(n)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, r || {}), l = o.__d), l) return o.__E = o;
  } catch (s) {
    n = s;
  }
  throw n;
} }, ot = 0, Ae.prototype.setState = function(n, t) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = te({}, this.state), typeof n == "function" && (n = n(te({}, i), this.props)), n && te(i, n), n != null && this.__v && (t && this._sb.push(t), zn(this));
}, Ae.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), zn(this));
}, Ae.prototype.render = Z, oe = [], st = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, lt = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Te.__r = 0, Ue = Math.random().toString(8), Se = "__d" + Ue, _e = "__a" + Ue, ct = /(PointerCapture)$|Capture$/i, sn = 0, Qe = Sn(!1), en = Sn(!0);
var hi = 0;
function e(n, t, i, r, o, a) {
  t || (t = {});
  var l, s, p = t;
  if ("ref" in p) for (s in p = {}, t) s == "ref" ? l = t[s] : p[s] = t[s];
  var c = { type: n, props: p, key: i, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --hi, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof n == "function" && (l = n.defaultProps)) for (s in l) p[s] === void 0 && (p[s] = l[s]);
  return V.vnode && V.vnode(c), c;
}
var me, W, qe, An, be = 0, mt = [], U = V, En = U.__b, Pn = U.__r, $n = U.diffed, Tn = U.__c, Dn = U.unmount, Nn = U.__;
function pn(n, t) {
  U.__h && U.__h(W, n, be || t), be = 0;
  var i = W.__H || (W.__H = { __: [], __h: [] });
  return n >= i.__.length && i.__.push({}), i.__[n];
}
function I(n) {
  return be = 1, _i(vt, n);
}
function _i(n, t, i) {
  var r = pn(me++, 2);
  if (r.t = n, !r.__c && (r.__ = [vt(void 0, t), function(s) {
    var p = r.__N ? r.__N[0] : r.__[0], c = r.t(p, s);
    p !== c && (r.__N = [c, r.__[1]], r.__c.setState({}));
  }], r.__c = W, !W.__f)) {
    var o = function(s, p, c) {
      if (!r.__c.__H) return !0;
      var u = r.__c.__H.__.filter(function(h) {
        return h.__c;
      });
      if (u.every(function(h) {
        return !h.__N;
      })) return !a || a.call(this, s, p, c);
      var d = r.__c.props !== s;
      return u.some(function(h) {
        if (h.__N) {
          var g = h.__[0];
          h.__ = h.__N, h.__N = void 0, g !== h.__[0] && (d = !0);
        }
      }), a && a.call(this, s, p, c) || d;
    };
    W.__f = !0;
    var a = W.shouldComponentUpdate, l = W.componentWillUpdate;
    W.componentWillUpdate = function(s, p, c) {
      if (this.__e) {
        var u = a;
        a = void 0, o(s, p, c), a = u;
      }
      l && l.call(this, s, p, c);
    }, W.shouldComponentUpdate = o;
  }
  return r.__N || r.__;
}
function G(n, t) {
  var i = pn(me++, 3);
  !U.__s && bt(i.__H, t) && (i.__ = n, i.u = t, W.__H.__h.push(i));
}
function q(n) {
  return be = 5, j(function() {
    return { current: n };
  }, []);
}
function j(n, t) {
  var i = pn(me++, 7);
  return bt(i.__H, t) && (i.__ = n(), i.__H = t, i.__h = n), i.__;
}
function K(n, t) {
  return be = 8, j(function() {
    return n;
  }, t);
}
function fi() {
  for (var n; n = mt.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(Ee), t.__h.some(tn), t.__h = [];
    } catch (i) {
      t.__h = [], U.__e(i, n.__v);
    }
  }
}
U.__b = function(n) {
  W = null, En && En(n);
}, U.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), Nn && Nn(n, t);
}, U.__r = function(n) {
  Pn && Pn(n), me = 0;
  var t = (W = n.__c).__H;
  t && (qe === W ? (t.__h = [], W.__h = [], t.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (t.__h.some(Ee), t.__h.some(tn), t.__h = [], me = 0)), qe = W;
}, U.diffed = function(n) {
  $n && $n(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (mt.push(t) !== 1 && An === U.requestAnimationFrame || ((An = U.requestAnimationFrame) || gi)(fi)), t.__H.__.some(function(i) {
    i.u && (i.__H = i.u), i.u = void 0;
  })), qe = W = null;
}, U.__c = function(n, t) {
  t.some(function(i) {
    try {
      i.__h.some(Ee), i.__h = i.__h.filter(function(r) {
        return !r.__ || tn(r);
      });
    } catch (r) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], U.__e(r, i.__v);
    }
  }), Tn && Tn(n, t);
}, U.unmount = function(n) {
  Dn && Dn(n);
  var t, i = n.__c;
  i && i.__H && (i.__H.__.some(function(r) {
    try {
      Ee(r);
    } catch (o) {
      t = o;
    }
  }), i.__H = void 0, t && U.__e(t, i.__v));
};
var jn = typeof requestAnimationFrame == "function";
function gi(n) {
  var t, i = function() {
    clearTimeout(r), jn && cancelAnimationFrame(t), setTimeout(n);
  }, r = setTimeout(i, 35);
  jn && (t = requestAnimationFrame(i));
}
function Ee(n) {
  var t = W, i = n.__c;
  typeof i == "function" && (n.__c = void 0, i()), W = t;
}
function tn(n) {
  var t = W;
  n.__c = n.__(), W = t;
}
function bt(n, t) {
  return !n || n.length !== t.length || t.some(function(i, r) {
    return i !== n[r];
  });
}
function vt(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function mi(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((i, r) => i.name.localeCompare(r.name, "fr"));
}
async function bi(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function vi(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function xi(n) {
  return n.split(".")[0] ?? "";
}
function yi(n, t, i) {
  const r = new Map(i.map((l) => [l.id, l.area_id])), o = new Map(t.map((l) => [l.entity_id, l])), a = [];
  for (const [l, s] of Object.entries(n.states)) {
    const p = o.get(l);
    if (p?.disabled_by || p?.hidden_by) continue;
    const c = p?.area_id ?? (p?.device_id ? r.get(p.device_id) ?? null : null), u = p?.name ?? s.attributes.friendly_name ?? p?.original_name ?? l;
    a.push({
      entity_id: l,
      domain: xi(l),
      area_id: c,
      friendly_name: u,
      state: s
    });
  }
  return a;
}
function wi(n) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const r = t.get(i.area_id) ?? [];
    r.push(i), t.set(i.area_id, r);
  }
  return t;
}
function un(n) {
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
function xt(n) {
  const t = {};
  for (const i of n) {
    if (i.domain !== "sensor") continue;
    const r = i.state.attributes.device_class, o = i.state.attributes.unit_of_measurement ?? "", a = i.state.state;
    a === "unavailable" || a === "unknown" || (r === "temperature" && !t.temperature ? t.temperature = { value: a, unit: o } : r === "humidity" && !t.humidity ? t.humidity = { value: a, unit: o } : r === "illuminance" && !t.illuminance && (t.illuminance = { value: a, unit: o }));
  }
  return t;
}
const Y = {
  favorites: "nido.favorites",
  exposed: "nido.exposed",
  excludedUsers: "nido.excludedUsers",
  roomsOrder: "nido.roomsOrder",
  roomEntitiesOrder: "nido.roomEntitiesOrder",
  onboarded: "nido.onboarded",
  theme: "nido.theme",
  mode: "nido.mode",
  lastNotificationRead: "nido.lastNotificationRead"
}, yt = ["terracotta", "miel", "sauge", "cosy"], ki = ["light", "dark"];
function Q() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function Mi() {
  const n = Q();
  if (!n) return [];
  const t = n.getItem(Y.favorites);
  if (!t) return [];
  try {
    const i = JSON.parse(t);
    return Array.isArray(i) ? i.filter((r) => typeof r == "string") : [];
  } catch {
    return [];
  }
}
function an(n) {
  const t = Q();
  t && t.setItem(Y.favorites, JSON.stringify(n));
}
function hn(n) {
  const t = Q();
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
function _n(n, t) {
  const i = Q();
  i && i.setItem(n, JSON.stringify(t));
}
const zi = () => hn(Y.exposed), Ln = (n) => _n(Y.exposed, n), Ii = () => hn(Y.excludedUsers), On = (n) => _n(Y.excludedUsers, n), Si = () => hn(Y.roomsOrder), Ci = (n) => _n(Y.roomsOrder, n);
function Ai() {
  const n = Q();
  if (!n) return {};
  const t = n.getItem(Y.roomEntitiesOrder);
  if (!t) return {};
  try {
    const i = JSON.parse(t);
    if (typeof i != "object" || i === null) return {};
    const r = {};
    for (const [o, a] of Object.entries(i))
      Array.isArray(a) && (r[o] = a.filter((l) => typeof l == "string"));
    return r;
  } catch {
    return {};
  }
}
function Ei(n) {
  const t = Q();
  t && t.setItem(Y.roomEntitiesOrder, JSON.stringify(n));
}
function Rn() {
  return Q()?.getItem(Y.onboarded) === "1";
}
function Fn(n) {
  const t = Q();
  t && t.setItem(Y.onboarded, "1");
}
function wt() {
  const n = Q(), t = n?.getItem(Y.theme), i = n?.getItem(Y.mode);
  return {
    theme: yt.includes(t) ? t : "terracotta",
    mode: ki.includes(i) ? i : "light"
  };
}
function Vn(n, t) {
  const i = Q();
  i && (i.setItem(Y.theme, n), i.setItem(Y.mode, t));
}
function Pi() {
  return Q()?.getItem(Y.lastNotificationRead) ?? null;
}
function $i(n) {
  Q()?.setItem(Y.lastNotificationRead, n);
}
const Ti = 6, Di = 20;
function Ni(n, t) {
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
function kt(n, t, i) {
  if (t.length === 0) return n;
  const r = new Map(n.map((l) => [i(l), l])), o = /* @__PURE__ */ new Set(), a = [];
  for (const l of t) {
    const s = r.get(l);
    s && !o.has(l) && (a.push(s), o.add(l));
  }
  for (const l of n) {
    const s = i(l);
    o.has(s) || (a.push(l), o.add(s));
  }
  return a;
}
function rn(n, t, i) {
  const [r, o] = I({ draggingId: null, overId: null }), a = q(null), l = q(null), s = q(n);
  s.current = n;
  const p = q(i);
  p.current = i;
  const c = q(t);
  c.current = t;
  const u = K((h, g) => {
    const v = l.current;
    if (!v) return null;
    const b = v.querySelectorAll("[data-drag-id]");
    for (const m of Array.from(b)) {
      const f = m.getBoundingClientRect();
      if (h >= f.left && h <= f.right && g >= f.top && g <= f.bottom)
        return m.getAttribute("data-drag-id");
    }
    return null;
  }, []);
  G(() => {
    const h = (b) => {
      const m = a.current;
      if (!m || m.pointerType !== "touch") return;
      if (m.entered) {
        b.preventDefault();
        return;
      }
      const f = b.touches[0];
      if (!f) return;
      const _ = f.clientX - m.x, x = f.clientY - m.y;
      Math.hypot(_, x) <= Di ? b.preventDefault() : (m.timerId && clearTimeout(m.timerId), a.current = null);
    }, g = (b) => {
      const m = a.current;
      if (!m) return;
      if (m.pointerType === "touch") {
        if (!m.entered)
          return;
      } else if (!m.entered) {
        const _ = b.clientX - m.x, x = b.clientY - m.y;
        if (Math.hypot(_, x) < Ti) return;
        m.entered = !0, o({ draggingId: m.id, overId: null });
      }
      const f = u(b.clientX, b.clientY);
      o((_) => _.overId === f ? _ : { ..._, overId: f });
    }, v = () => {
      const b = a.current;
      if (b?.timerId && clearTimeout(b.timerId), a.current = null, !b || !b.entered) return;
      const m = (f) => {
        f.preventDefault(), f.stopPropagation();
      };
      window.addEventListener("click", m, { capture: !0, once: !0 }), o((f) => {
        const { draggingId: _, overId: x } = f;
        if (_ && x && _ !== x) {
          const M = s.current, S = c.current, z = M.findIndex((T) => S(T) === _), N = M.findIndex((T) => S(T) === x);
          if (z >= 0 && N >= 0) {
            const T = [...M], [D] = T.splice(z, 1);
            T.splice(N, 0, D), p.current(T);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", g), document.addEventListener("pointerup", v), document.addEventListener("pointercancel", v), document.addEventListener("touchmove", h, { passive: !1 }), () => {
      document.removeEventListener("pointermove", g), document.removeEventListener("pointerup", v), document.removeEventListener("pointercancel", v), document.removeEventListener("touchmove", h);
    };
  }, [u]);
  const d = K(
    (h) => {
      const g = r.draggingId === h, v = r.draggingId !== null && r.draggingId !== h && r.overId === h;
      return {
        "data-drag-id": h,
        "data-dragging": g ? "true" : void 0,
        "data-drag-over": v ? "true" : void 0,
        onPointerDown: (b) => {
          if (b.button !== void 0 && b.button !== 0) return;
          const m = b.currentTarget;
          if (!Ni(b.target, m))
            if (b.pointerType === "touch") {
              const f = window.setTimeout(() => {
                const _ = a.current;
                _ && _.id === h && !_.entered && (_.entered = !0, o({ draggingId: h, overId: null }), "vibrate" in navigator && navigator.vibrate(50));
              }, 1500);
              a.current = { id: h, x: b.clientX, y: b.clientY, entered: !1, pointerType: "touch", timerId: f };
            } else
              a.current = { id: h, x: b.clientX, y: b.clientY, entered: !1, pointerType: b.pointerType };
        }
      };
    },
    [r.draggingId, r.overId]
  );
  return {
    containerRef: l,
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
), xe = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), Mt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" }),
  /* @__PURE__ */ e("path", { d: "M10 19a2 2 0 0 0 4 0" })
] }), ji = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), fn = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), gn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), mn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 8V4M15 8V4" }),
  /* @__PURE__ */ e("path", { d: "M6 8h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }),
  /* @__PURE__ */ e("path", { d: "M12 16v5" })
] }), Hn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), Wn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4", "stroke-dasharray": "1 2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "0.8", fill: "currentColor" })
] }), Li = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), fe = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), se = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), Oi = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), Ri = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), ve = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), bn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), Fi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), vn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), Vi = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), Hi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), Wi = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), Bi = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), pe = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), zt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), It = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), ce = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), xn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), St = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" }) }), Ct = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" }),
  /* @__PURE__ */ e("path", { d: "M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" })
] }), Bn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M9 18v2M13 18v3M17 18v2" })
] }), Ye = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" })
] }), Ze = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "m12 17-2 4h3l-1 3" })
] }), Ui = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" }),
  /* @__PURE__ */ e("path", { d: "M5 17h14M3 21h18" })
] }), Un = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 8h12a3 3 0 1 0-3-3" }),
  /* @__PURE__ */ e("path", { d: "M3 13h17a3 3 0 1 1-3 3" }),
  /* @__PURE__ */ e("path", { d: "M3 18h9" })
] }), qi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), Yi = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), yn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), Zi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), Ji = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), Ki = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), Gi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), Xi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), Qi = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), ea = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), De = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), wn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), kn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), qn = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), At = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 17 17 7" }),
  /* @__PURE__ */ e("path", { d: "M8 7h9v9" })
] }), na = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), ta = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), ia = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), aa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ e("path", { d: "m20 20-3.5-3.5" })
] }), le = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M6 6l12 12M18 6 6 18" }) }), ra = (n) => /* @__PURE__ */ e(y, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), Et = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), oa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), sa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), la = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), Pt = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), $t = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), ca = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), da = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), pa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), ua = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), ha = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), Tt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 9v4" }),
  /* @__PURE__ */ e("path", { d: "M12 17h.01" })
] }), _a = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 12v8a2 2 0 0 0 4 0" }),
  /* @__PURE__ */ e("path", { d: "M12 2v1" })
] }), fa = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
] }), ga = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "M12 16v-4" }),
  /* @__PURE__ */ e("path", { d: "M12 8h.01" })
] }), ma = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), Dt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
] }), ba = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
  /* @__PURE__ */ e("line", { x1: "12", y1: "2", x2: "12", y2: "12" })
] }), va = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 3h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("path", { d: "M9 7h6M9 11h6M9 15h4" }),
  /* @__PURE__ */ e("path", { d: "M5 7h2M5 11h2M5 15h2" })
] });
function xa(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function Nt({
  hass: n,
  entity: t,
  hero: i = !1,
  breatheVariant: r = 1,
  roomLabel: o
}) {
  const a = t.state.state === "on", l = t.state.state === "unavailable", [s, p] = I(!1), [c, u] = I(null), d = c ?? xa(t.state), h = async () => {
    if (!l) {
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
    s ? "is-pending" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: b, "data-hero": i ? "true" : "false", "data-on": a ? "true" : "false", children: [
    a && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(xe, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": a,
          disabled: l || s,
          onClick: h,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: o }),
    /* @__PURE__ */ e("div", { class: `n-title ${i ? "n-title--xl" : ""}`, children: t.friendly_name }),
    a && !l && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
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
    !a && !l && /* @__PURE__ */ e("div", { class: "n-muted", children: "Éteinte" }),
    l && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function ya(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function jt({ hass: n, entity: t, roomLabel: i, hero: r = !1 }) {
  const o = t.state.state === "unavailable", [a, l] = I(null), s = a ?? ya(t.state), p = s > 0, c = async (h) => {
    l(h);
    try {
      await n.callService("cover", "set_cover_position", {
        entity_id: t.entity_id,
        position: h
      });
    } finally {
      setTimeout(() => l(null), 50);
    }
  }, d = ["n-card", r ? p ? "n-card--accent" : "n-card--accent-muted" : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": p ? "true" : "false", children: /* @__PURE__ */ e("div", { class: d, "data-hero": r ? "true" : "false", "data-on": p ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(gn, { size: 20 }) }),
      /* @__PURE__ */ e("div", { class: "n-blinds", children: [0, 1, 2, 3, 4, 5].map((h) => /* @__PURE__ */ e(
        "span",
        {
          class: "n-blinds__bar",
          "data-active": h / 6 * 100 < s ? "true" : "false"
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
          s,
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
          value: s,
          style: { "--val": `${s}%` },
          onInput: (h) => c(Number(h.target.value))
        }
      ),
      /* @__PURE__ */ e("div", { style: { marginTop: "12px", display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          style: { fontSize: "12px", padding: "6px 12px" },
          onClick: () => c(s !== 0 ? 0 : 100),
          children: s !== 0 ? "Fermer" : "Ouvrir"
        }
      ) })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] }) });
}
function Lt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2,
  hero: o = !1
}) {
  const a = t.state.state === "on", l = t.state.state === "unavailable", [s, p] = I(!1), c = t.state.attributes.current_power_w, u = async () => {
    if (!l) {
      p(!0);
      try {
        await n.callService("switch", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, h = ["n-card", o ? a ? "n-card--accent" : "n-card--accent-muted" : "", a ? `breathe-${r}` : "", s ? "is-pending" : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-hero": o ? "true" : "false", "data-on": a ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(mn, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": a,
          disabled: l || s,
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
    l && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const wa = {
  door: Hn,
  garage_door: Hn,
  window: Ri,
  smoke: Wn,
  gas: Wn,
  moisture: Li,
  motion: fe,
  occupancy: fe,
  presence: fe
}, ka = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, Ma = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]), za = /* @__PURE__ */ new Set(["door", "garage_door", "window"]);
function Ot({ entity: n, roomLabel: t, hero: i = !1 }) {
  const r = n.state.attributes.device_class ?? "", o = n.state.state === "on", a = n.state.state === "unavailable", l = wa[r] ?? ve, s = ka[r] ?? { on: "Actif", off: "Inactif" }, p = Ma.has(r), c = za.has(r), u = a ? "indisponible" : o ? "on" : "off", h = ["n-card", i ? o ? "n-card--accent" : "n-card--accent-muted" : "n-card--compact"].filter(Boolean).join(" "), g = /* @__PURE__ */ e("div", { class: h, "data-hero": i ? "true" : "false", "data-status": u, "data-alert": p ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(l, { size: i ? 22 : 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-dot", "aria-hidden": "true" })
    ] }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: `n-title ${i ? "n-title--xl" : "n-title--sm"}`, children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: a ? "Indisponible" : o ? s.on : s.off })
  ] });
  return c ? /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": o ? "true" : "false", children: g }) : g;
}
const Ia = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, Sa = {
  heat: Vi,
  cool: Hi,
  heat_cool: se,
  auto: se,
  dry: se,
  fan_only: se
};
function Rt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 2,
  hero: o = !1
}) {
  const a = t.state.state === "unavailable", l = t.state.state, s = l !== "off" && !a, p = t.state.attributes.current_temperature, c = t.state.attributes.temperature, u = t.state.attributes.min_temp ?? 7, d = t.state.attributes.max_temp ?? 35, h = t.state.attributes.target_temp_step ?? 0.5, [g, v] = I(null), b = g ?? c ?? p ?? 20, m = async (M) => {
    const S = Math.min(d, Math.max(u, M));
    v(S);
    try {
      await n.callService("climate", "set_temperature", {
        entity_id: t.entity_id,
        temperature: S
      });
    } finally {
      setTimeout(() => v(null), 50);
    }
  }, f = Sa[l] ?? se, x = ["n-card", o ? s ? "n-card--accent" : "n-card--accent-muted" : "", s ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: x, "data-hero": o ? "true" : "false", "data-on": s ? "true" : "false", children: [
    s && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(f, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Ia[l] ?? l })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: `n-title ${o ? "n-title--xl" : ""}`, children: t.friendly_name }),
    !a && /* @__PURE__ */ e(Z, { children: [
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
            children: /* @__PURE__ */ e(Wi, { size: 16 })
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
            children: /* @__PURE__ */ e(Bi, { size: 16 })
          }
        )
      ] })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Ft({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "locked", l = r === "jammed", s = r === "locking" || r === "unlocking", [p, c] = I(!1), u = async () => {
    if (!(o || s || p)) {
      c(!0);
      try {
        await n.callService("lock", a ? "unlock" : "lock", {
          entity_id: t.entity_id
        });
      } finally {
        c(!1);
      }
    }
  }, d = o ? "Indisponible" : l ? "Bloquée" : s ? r === "locking" ? "Verrouillage…" : "Déverrouillage…" : a ? "Verrouillée" : "Déverrouillée";
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": a ? "true" : "false",
      "data-alert": l ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a ? bn : Fi, { size: 20 }) }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-toggle",
              role: "switch",
              "aria-checked": a,
              disabled: o || s || p,
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
const Ca = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function Vt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: r = 3
}) {
  const o = t.state.state, a = o === "unavailable", l = o === "cleaning" || o === "returning", s = o === "error", p = t.state.attributes.battery_level, [c, u] = I(!1), d = async (g) => {
    if (!(a || c)) {
      u(!0);
      try {
        await n.callService("vacuum", g, { entity_id: t.entity_id });
      } finally {
        u(!1);
      }
    }
  }, h = ["n-card", l ? `breathe-${r}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      class: h,
      "data-on": l ? "true" : "false",
      "data-alert": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(vn, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(It, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: Ca[o] ?? o }),
        !a && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: c || l,
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
                /* @__PURE__ */ e(zt, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Aa = {
  temperature: se,
  humidity: Oi,
  power: ce,
  energy: ce,
  current: ce,
  voltage: ce,
  illuminance: xn,
  pressure: qi,
  battery: It
};
function Ea(n, t, i) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  if (i === "temperature") return { value: n, unit: t ?? "" };
  const r = Number(n);
  return Number.isFinite(r) ? { value: Math.abs(r) >= 100 ? Math.round(r).toString() : (Math.round(r * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function Ht({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", r = n.state.attributes.unit_of_measurement, o = Aa[i] ?? Yi, a = n.state.state === "unavailable", { value: l, unit: s } = Ea(n.state.state, r, i);
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": a ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(o, { size: 18 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-sensor__readout", children: [
      /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: l }),
      s && /* @__PURE__ */ e("span", { class: "n-value__unit", children: s })
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
function Wt({
  hass: n,
  entity: t,
  roomLabel: i,
  hero: r = !1,
  breatheVariant: o = 4
}) {
  const a = t.state.state, l = a === "unavailable", s = a === "playing", p = a === "off" || a === "standby", c = t.state.attributes.media_title, u = t.state.attributes.media_artist, d = t.state.attributes.app_name, h = t.state.attributes.volume_level, g = t.state.attributes.entity_picture, [v, b] = I(null), m = v ?? h ?? 0, f = async (S, z = {}) => {
    l || await n.callService("media_player", S, {
      entity_id: t.entity_id,
      ...z
    });
  }, _ = async (S) => {
    b(S);
    try {
      await f("volume_set", { volume_level: S });
    } finally {
      setTimeout(() => b(null), 50);
    }
  }, M = ["n-card", r ? s ? "n-card--accent" : "n-card--accent-muted" : "", s ? `breathe-${o}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: M, "data-hero": r ? "true" : "false", "data-on": s ? "true" : "false", children: [
    g && /* @__PURE__ */ e("div", { class: "n-media__bg", "aria-hidden": "true", children: [
      /* @__PURE__ */ e("img", { src: g, alt: "" }),
      /* @__PURE__ */ e("div", { class: "n-media__bg-overlay" })
    ] }),
    s && r && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", style: { alignItems: "center" }, children: [
      /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
        /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(yn, { size: 20 }) }),
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Pa[a] ?? a })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-icon-btn",
          style: { width: "36px", height: "36px", background: "transparent" },
          "aria-label": "Allumer / Éteindre",
          onClick: (S) => {
            S.stopPropagation(), f("toggle");
          },
          children: /* @__PURE__ */ e(ba, { size: 18 })
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: r ? "n-title n-title--xl" : "n-title", children: t.friendly_name }),
    !p && !l && (c || u || d) && /* @__PURE__ */ e("div", { class: "n-media__track", children: [
      c && /* @__PURE__ */ e("div", { class: "n-media__title", children: c }),
      u && /* @__PURE__ */ e("div", { class: "n-muted", style: r ? { fontSize: "1rem" } : {}, children: u }),
      d && /* @__PURE__ */ e("div", { class: "n-muted", style: { fontSize: "0.75rem", marginTop: c || u ? "4px" : "0" }, children: d })
    ] }),
    !l && /* @__PURE__ */ e(Z, { children: [
      /* @__PURE__ */ e("div", { class: "n-media__controls", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Précédent",
            onClick: () => f("media_previous_track"),
            children: /* @__PURE__ */ e(Ji, { size: r ? 20 : 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": s ? "Pause" : "Lecture",
            onClick: () => f("media_play_pause"),
            children: s ? /* @__PURE__ */ e(Zi, { size: r ? 24 : 18 }) : /* @__PURE__ */ e(pe, { size: r ? 24 : 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => f("media_next_track"),
            children: /* @__PURE__ */ e(Ki, { size: r ? 20 : 16 })
          }
        )
      ] }),
      typeof h == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(Gi, { size: 14 }),
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
            onInput: (S) => _(Number(S.target.value))
          }
        )
      ] })
    ] }),
    l && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const $a = {
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
}, Ta = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: Xi },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: Qi },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: ea }
];
function Bt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "triggered", l = r.startsWith("armed_"), s = r === "pending" || r === "arming" || r === "disarming", [p, c] = I(!1), u = async (d) => {
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
      "data-on": l ? "true" : "false",
      "data-alert": a ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(ve, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: $a[r] ?? r })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          Ta.map(({ id: d, service: h, label: g, Icon: v }) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn",
              "data-active": r === d ? "true" : "false",
              disabled: p || s,
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
              disabled: p || s || r === "disarmed",
              onClick: () => u("alarm_disarm"),
              children: /* @__PURE__ */ e("span", { children: "Désarmer" })
            }
          )
        ] })
      ]
    }
  );
}
const Da = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function Na(n, t) {
  const i = n.state.attributes.entity_picture;
  if (!i) return null;
  if (i.startsWith("http")) return i;
  const r = t.hassUrl?.("");
  return r ? r.replace(/\/$/, "") + i : i;
}
function Ut({ hass: n, entity: t, roomLabel: i }) {
  const r = t.state.state, o = r === "unavailable", a = r === "recording" || r === "streaming", [l, s] = I(0), [p, c] = I(!1), u = Na(t, n), d = u ? `${u}${u.includes("?") ? "&" : "?"}t=${l}` : null;
  return G(() => {
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
        /* @__PURE__ */ e(De, { size: 28 }),
        p && /* @__PURE__ */ e("span", { style: { fontSize: "10px", marginTop: "4px", opacity: 0.7 }, children: "Erreur de flux" })
      ] }),
      a && /* @__PURE__ */ e("span", { class: "n-camera__live", children: "● LIVE" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-card__head n-card__head--inline", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(De, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          disabled: o || !d,
          onClick: () => {
            s(Date.now()), c(!1);
          },
          children: "Rafraîchir"
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: Da[r] ?? r })
  ] });
}
function qt({ hass: n, entity: t, roomLabel: i, breatheVariant: r = 2 }) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", l = t.state.attributes.percentage, s = typeof l == "number", [p, c] = I(!1), [u, d] = I(null), h = u ?? (s ? l : o ? 100 : 0), g = async () => {
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
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(wn, { size: 20 }) }),
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
    o && s && !a && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
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
function Yt({ hass: n, entity: t, roomLabel: i }) {
  const r = t.domain === "scene", o = t.state.state === "unavailable", [a, l] = I(!1), [s, p] = I(!1), c = async () => {
    if (!(o || a)) {
      l(!0);
      try {
        await n.callService(r ? "scene" : "script", "turn_on", {
          entity_id: t.entity_id
        }), p(!0), setTimeout(() => p(!1), 600);
      } finally {
        l(!1);
      }
    }
  };
  return /* @__PURE__ */ e(
    "div",
    {
      class: `n-card n-card--compact${s ? " is-flashing" : ""}`,
      "data-on": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: r ? /* @__PURE__ */ e(kn, { size: 18 }) : /* @__PURE__ */ e(pe, { size: 16 }) }),
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
const ja = {
  "clear-night": { label: "Nuit claire", Icon: Et },
  cloudy: { label: "Nuageux", Icon: St },
  exceptional: { label: "Conditions extrêmes", Icon: Ze },
  fog: { label: "Brouillard", Icon: Ui },
  hail: { label: "Grêle", Icon: Ye },
  lightning: { label: "Orage", Icon: Ze },
  "lightning-rainy": { label: "Orage pluvieux", Icon: Ze },
  partlycloudy: { label: "Éclaircies", Icon: Ct },
  pouring: { label: "Pluie battante", Icon: Bn },
  rainy: { label: "Pluvieux", Icon: Bn },
  snowy: { label: "Neigeux", Icon: Ye },
  "snowy-rainy": { label: "Neige et pluie", Icon: Ye },
  sunny: { label: "Ensoleillé", Icon: xn },
  windy: { label: "Venteux", Icon: Un },
  "windy-variant": { label: "Venteux", Icon: Un }
};
function ge(n) {
  return ja[n] ?? { label: n || "—", Icon: St };
}
function Zt(n, t) {
  if (n == null || n === "") return "—";
  const i = Number(n);
  return Number.isFinite(i) ? `${n}${t}` : "—";
}
function Jt({ entity: n, roomLabel: t }) {
  const i = n.state.state === "unavailable" || n.state.state === "unknown", { label: r, Icon: o } = ge(n.state.state), a = n.state.attributes.temperature_unit ?? "°", l = Zt(n.state.attributes.temperature, a), s = n.state.attributes.humidity;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact n-weather", "data-status": i ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble n-weather__icon", children: /* @__PURE__ */ e(o, { size: 20 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-weather__readout", children: /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: l }) }),
    /* @__PURE__ */ e("div", { class: "n-weather__meta", children: [
      /* @__PURE__ */ e("span", { children: r }),
      typeof s == "number" && Number.isFinite(s) && /* @__PURE__ */ e(Z, { children: [
        /* @__PURE__ */ e("span", { class: "n-weather__sep", children: "•" }),
        /* @__PURE__ */ e("span", { children: [
          Math.round(s),
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Yn({ entity: n }) {
  if (n.state.state === "unavailable" || n.state.state === "unknown") return null;
  const { label: t, Icon: i } = ge(n.state.state), r = n.state.attributes.temperature_unit ?? "°", o = Zt(n.state.attributes.temperature, r);
  return /* @__PURE__ */ e("div", { class: "nido-weather-pill", title: n.friendly_name, children: [
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__icon", children: /* @__PURE__ */ e(i, { size: 18 }) }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__temp", children: o }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__sep" }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__label", children: t })
  ] });
}
function La(n, t) {
  const i = t.split(".")[1] || "", r = Object.values(n.states).filter((s) => s.entity_id.startsWith("sensor."));
  let o, a, l;
  for (const s of r)
    s.entity_id.endsWith("_next_rain") && (s.entity_id.includes(i) || !o) && (o = s), s.entity_id.endsWith("_weather_alert") && (s.entity_id.includes(i) || !a) && (a = s), s.entity_id.endsWith("_uv") && (s.entity_id.includes(i) || !l) && (l = s);
  return { nextRain: o, weatherAlert: a, uvIndex: l };
}
function Oa({ hass: n, weatherEntityId: t, onClose: i }) {
  const [r, o] = I([]), [a, l] = I([]), s = n.states[t], { nextRain: p, weatherAlert: c, uvIndex: u } = La(n, t);
  if (G(() => {
    let f = !1;
    async function _() {
      try {
        const x = async (z) => {
          try {
            const N = await n.callWS({
              type: "call_service",
              domain: "weather",
              service: "get_forecasts",
              service_data: { type: z },
              target: { entity_id: t },
              return_response: !0
            });
            return N?.response?.[t]?.forecast || N?.[t]?.forecast || [];
          } catch (N) {
            return console.warn(`Failed to fetch ${z} forecast:`, N), [];
          }
        }, [M, S] = await Promise.all([
          x("daily"),
          x("hourly")
        ]);
        if (f) return;
        o(M), l(S);
      } catch (x) {
        console.error("Failed to fetch weather forecasts", x);
      }
    }
    return s?.attributes.forecast ? o(s.attributes.forecast) : _(), () => {
      f = !0;
    };
  }, [n, t]), !s) return null;
  const d = ge(s.state), h = s.attributes.temperature_unit || "°C", g = c?.state, v = g === "Rouge" ? "#ff4d4f" : g === "Orange" ? "#faad14" : g === "Jaune" ? "#fadb14" : null, b = c?.attributes ? Object.entries(c.attributes).filter(([f, _]) => _ === g && f !== "friendly_name" && f !== "icon").map(([f]) => f).join(", ") : "", m = b ? `Vigilance ${g} : ${b}` : `Vigilance ${g}`;
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
              s.attributes.temperature,
              h
            ] }),
            /* @__PURE__ */ e("span", { class: "nido-wp-desc", children: d.label })
          ] })
        ] }),
        v && /* @__PURE__ */ e("div", { class: "nido-wp-alert", style: { backgroundColor: `${v}22`, color: v, border: `1px solid ${v}55` }, children: [
          /* @__PURE__ */ e(Tt, { size: 20 }),
          /* @__PURE__ */ e("span", { children: m })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-wp-grid", children: [
          p && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(_a, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Pluie dans l'heure" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: p.state === "unknown" ? "Pas de pluie prévue" : new Date(p.state).getTime() > Date.now() ? `Prévue à ${new Date(p.state).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Pas de pluie prévue" })
          ] }),
          u && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(fa, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Index UV" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: u.state })
          ] })
        ] }),
        a.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prochaines heures" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-hourly", children: a.slice(0, 24).map((f, _) => {
            const x = ge(f.condition), M = new Date(f.datetime);
            return /* @__PURE__ */ e("div", { class: "nido-wp-hour", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-time", children: [
                M.getHours(),
                "h"
              ] }),
              /* @__PURE__ */ e(x.Icon, { size: 24 }),
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-temp", children: [
                f.temperature,
                "°"
              ] }),
              (f.precipitation ?? 0) > 0 && /* @__PURE__ */ e("span", { class: "nido-wp-hour-precip", children: [
                f.precipitation,
                "mm"
              ] })
            ] }, _);
          }) })
        ] }),
        r.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prévisions (5 jours)" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-daily", children: r.slice(0, 5).map((f, _) => {
            const x = ge(f.condition), M = new Date(f.datetime), S = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(M);
            return /* @__PURE__ */ e("div", { class: "nido-wp-day", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-day-name", children: _ === 0 ? "Aujourd'hui" : S }),
              /* @__PURE__ */ e(x.Icon, { size: 24 }),
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
            ] }, _);
          }) })
        ] })
      ] })
    ] })
  ] });
}
function Kt(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? ca : /(chambre|bedroom)/.test(t) ? da : /(cuisine|kitchen)/.test(t) ? pa : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? ua : /(entrée|entree|hall|couloir)/.test(t) ? ha : zt;
}
const Ra = {
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
function Fa() {
  if (typeof window > "u") return null;
  const n = window.AudioContext ?? window.webkitAudioContext;
  return n ? (ue || (ue = new n()), ue.state === "suspended" && ue.resume().catch(() => {
  }), ue) : null;
}
function Va() {
  const n = Fa();
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
    const l = n.createGain();
    l.gain.setValueAtTime(0, t + o.start), l.gain.linearRampToValueAtTime(o.gain, t + o.start + 0.012), l.gain.exponentialRampToValueAtTime(8e-4, t + o.start + o.dur), a.connect(l), l.connect(i), a.start(t + o.start), a.stop(t + o.start + o.dur + 0.05);
  }
}
function Ha({ hass: n, notifications: t, onClose: i }) {
  const r = async (a) => {
    if (n)
      try {
        await n.connection.sendMessagePromise({
          type: "fire_event",
          event_type: "nido_notification_event",
          event_data: { action: "dismiss", id: a }
        });
      } catch (l) {
        console.warn("Échec de la suppression via WebSocket, tentative via service...", l);
        try {
          await n.callService("script", "nido_dismiss_notification", { id: a });
        } catch (s) {
          console.error("Toutes les méthodes de suppression ont échoué", s);
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
        /* @__PURE__ */ e("div", { class: "nido-notification-empty__icon", children: /* @__PURE__ */ e(Mt, { size: 48 }) }),
        /* @__PURE__ */ e("p", { children: "Aucune notification pour le moment." })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-notification-list", children: [...t].reverse().map((a) => {
        const l = a.type === "warning" ? Tt : a.type === "success" ? ma : ga, s = `nido-notification-item--${a.type}`, c = new Date(a.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return /* @__PURE__ */ e("div", { class: `nido-notification-item ${s}`, children: [
          /* @__PURE__ */ e("div", { class: "nido-notification-item__icon", children: /* @__PURE__ */ e(l, { size: 20 }) }),
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
function Wa(n) {
  const t = n.state.attributes.brightness;
  return typeof t != "number" ? 100 : Math.round(t / 255 * 100);
}
function Ba({ hass: n, entity: t, roomName: i }) {
  const [r, o] = I(!1), a = Wa(t), l = async () => {
    o(!0);
    try {
      await n.callService("light", "turn_off", { entity_id: t.entity_id });
    } finally {
      o(!1);
    }
  };
  return /* @__PURE__ */ e("div", { class: `nido-lights-row ${r ? "is-pending" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "nido-lights-row__icon", children: /* @__PURE__ */ e(xe, { size: 18 }) }),
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
        onClick: l,
        children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
      }
    )
  ] });
}
function Ua({ hass: n, lights: t, areas: i, onClose: r }) {
  const [o, a] = I(!1), l = new Map(i.map((p) => [p.area_id, p.name])), s = async () => {
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
        Ba,
        {
          hass: n,
          entity: p,
          roomName: p.area_id ? l.get(p.area_id) ?? "" : ""
        },
        p.entity_id
      )) }) }),
      t.length > 1 && /* @__PURE__ */ e("div", { class: "nido-lights-panel__footer", children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "nido-lights-panel__all-off",
          disabled: o,
          onClick: s,
          children: "Tout éteindre"
        }
      ) })
    ] })
  ] });
}
const Je = "nido.shoppingColor", Zn = "nido.shoppingSize", qa = 600;
function Jn(n, t, i) {
  if (t.length < 2) return;
  n.lineWidth = i, n.lineCap = "round", n.lineJoin = "round", n.beginPath(), n.moveTo(t[0][0], t[0][1]);
  for (let o = 1; o < t.length - 1; o++) {
    const a = (t[o][0] + t[o + 1][0]) / 2, l = (t[o][1] + t[o + 1][1]) / 2;
    n.quadraticCurveTo(t[o][0], t[o][1], a, l);
  }
  const r = t[t.length - 1];
  n.lineTo(r[0], r[1]), n.stroke();
}
function Ya({ hass: n, onClose: t, topicBase: i = "shopping" }) {
  const r = q(null), o = q(null), a = q([]), l = q(null), s = q(null), p = q({ w: 0, h: 0 }), c = q(null), u = q("nido-" + Math.random().toString(36).slice(2, 8)), [d, h] = I(() => localStorage.getItem(Je) || "#1a1410"), [g, v] = I(() => parseInt(localStorage.getItem(Zn) || "4", 10));
  G(() => {
    if (localStorage.getItem(Je)) return;
    const k = o.current;
    if (!k) return;
    const E = getComputedStyle(k).getPropertyValue("--ink-1").trim();
    if (!E) return;
    const P = document.createElement("div");
    P.style.color = E, document.body.appendChild(P);
    const R = getComputedStyle(P).color;
    document.body.removeChild(P);
    const F = R.match(/\d+/g);
    if (F && F.length >= 3) {
      const C = "#" + [+F[0], +F[1], +F[2]].map((A) => A.toString(16).padStart(2, "0")).join("");
      h(C);
    }
  }, []);
  const b = q(d), m = q(g);
  G(() => {
    b.current = d, localStorage.setItem(Je, d);
  }, [d]), G(() => {
    m.current = g, localStorage.setItem(Zn, String(g));
  }, [g]);
  const f = K((k) => [k[0] * p.current.w, k[1] * p.current.h], []), _ = K(() => {
    const k = r.current;
    if (!k) return;
    const E = k.getContext("2d");
    if (!E) return;
    const P = p.current.w / qa;
    E.clearRect(0, 0, p.current.w, p.current.h);
    for (const R of a.current)
      E.strokeStyle = R.color, Jn(E, R.points.map(f), R.size * P);
    l.current && (E.strokeStyle = l.current.color, Jn(E, l.current.points.map(f), l.current.size * P));
  }, [f]), x = K(() => {
    const k = r.current, E = o.current;
    if (!k || !E) return;
    const P = E.getBoundingClientRect();
    if (P.width === 0 || P.height === 0) return;
    const R = window.devicePixelRatio || 1;
    k.width = Math.round(P.width * R), k.height = Math.round(P.height * R);
    const F = k.getContext("2d");
    F && F.setTransform(R, 0, 0, R, 0, 0), p.current = { w: P.width, h: P.height }, _();
  }, [_]);
  G(() => {
    x();
    const k = new ResizeObserver(x);
    return o.current && k.observe(o.current), () => k.disconnect();
  }, [x]), G(() => {
    let k = !1;
    return (async () => {
      if ("wakeLock" in navigator)
        try {
          const E = await navigator.wakeLock.request("screen");
          k ? E.release() : c.current = E;
        } catch {
        }
    })(), () => {
      if (k = !0, c.current) {
        try {
          c.current.release();
        } catch {
        }
        c.current = null;
      }
    };
  }, []);
  const M = K((k) => `${i}/${k}`, [i]), S = K(async () => {
    const k = JSON.stringify({
      strokes: a.current,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedBy: u.current
    });
    if (!(k.length > 2e5))
      try {
        await n.callService("mqtt", "publish", {
          topic: M("state"),
          payload: k,
          qos: 0,
          retain: !0
        });
      } catch (E) {
        console.warn("[shopping] state publish failed", E);
      }
  }, [n, M]), z = K(async (k) => {
    try {
      await n.callService("mqtt", "publish", {
        topic: M("strokes/add"),
        payload: JSON.stringify(k),
        qos: 0,
        retain: !1
      });
    } catch (E) {
      console.warn("[shopping] add publish failed", E);
    }
    S();
  }, [n, M, S]), N = K(async (k) => {
    try {
      await n.callService("mqtt", "publish", {
        topic: M("strokes/undo"),
        payload: JSON.stringify({ id: k, by: u.current }),
        qos: 0,
        retain: !1
      });
    } catch (E) {
      console.warn("[shopping] undo publish failed", E);
    }
    S();
  }, [n, M, S]), T = K(async () => {
    try {
      await n.callService("mqtt", "publish", {
        topic: M("clear"),
        payload: JSON.stringify({ by: u.current, ts: Date.now() }),
        qos: 0,
        retain: !1
      });
    } catch (k) {
      console.warn("[shopping] clear publish failed", k);
    }
    S();
  }, [n, M, S]);
  G(() => {
    let k = null, E = !1;
    const P = (R) => {
      try {
        const F = R.topic, C = R.payload ? JSON.parse(R.payload) : null;
        if (!C) return;
        if (F.endsWith("/state"))
          Array.isArray(C.strokes) && C.updatedBy !== u.current && (a.current = C.strokes, _());
        else if (F.endsWith("/strokes/add")) {
          if (C.by === u.current) return;
          C.points && C.points.length >= 2 && (a.current.push(C), _());
        } else if (F.endsWith("/strokes/undo")) {
          if (C.by === u.current) return;
          const A = a.current.findIndex((L) => L.id === C.id);
          A >= 0 && (a.current.splice(A, 1), _());
        } else if (F.endsWith("/clear")) {
          if (C.by === u.current) return;
          a.current = [], _();
        }
      } catch (F) {
        console.warn("[shopping] parse error", F);
      }
    };
    return (async () => {
      const R = n.connection;
      if (!(!R || typeof R.subscribeMessage != "function"))
        try {
          const F = await R.subscribeMessage(P, {
            type: "mqtt/subscribe",
            topic: `${i}/#`
          });
          if (E)
            try {
              F();
            } catch {
            }
          else
            k = F;
        } catch (F) {
          console.warn("[shopping] mqtt subscribe failed", F);
        }
    })(), () => {
      if (E = !0, k)
        try {
          k();
        } catch {
        }
    };
  }, [n, i, _]);
  const D = K((k) => {
    const P = r.current.getBoundingClientRect();
    return [(k.clientX - P.left) / P.width, (k.clientY - P.top) / P.height];
  }, []), B = K((k) => {
    k.pointerType === "touch" && (k.width > 40 || k.height > 40) || s.current === null && (s.current = k.pointerId, r.current?.setPointerCapture(k.pointerId), l.current = {
      id: u.current + "-" + Date.now(),
      by: u.current,
      color: b.current,
      size: m.current,
      points: [D(k)],
      t: Date.now()
    }, _(), k.preventDefault());
  }, [D, _]), J = K((k) => {
    if (k.pointerId !== s.current) return;
    const E = l.current;
    E && (E.points.push(D(k)), _());
  }, [D, _]), X = K((k) => {
    if (k.pointerId !== s.current) return;
    s.current = null;
    const E = l.current;
    if (l.current = null, !E || E.points.length < 2) {
      _();
      return;
    }
    a.current.push(E), z(E), _();
  }, [_, z]), ee = K(() => {
    for (let k = a.current.length - 1; k >= 0; k--)
      if (a.current[k].by === u.current) {
        const E = a.current.splice(k, 1)[0];
        N(E.id), _();
        return;
      }
  }, [N, _]), ie = K(() => {
    confirm("Effacer le bloc note ?") && (a.current = [], _(), T());
  }, [_, T]);
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
            onPointerDown: B,
            onPointerMove: J,
            onPointerUp: X,
            onPointerCancel: X,
            onPointerLeave: X
          }
        ) }),
        /* @__PURE__ */ e("div", { class: "nido-shopping-panel__toolbar", "data-no-drag": "true", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-shopping-panel__tool",
              onClick: ee,
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
              onInput: (k) => h(k.target.value),
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
              onInput: (k) => v(parseInt(k.target.value, 10)),
              "aria-label": "Épaisseur"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-shopping-panel__tool nido-shopping-panel__tool--danger",
              onClick: ie,
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
const Kn = [
  "var(--accent)",
  "var(--positive)",
  "#4A8FE0",
  "#E06B4A",
  "#8F4AE0",
  "#4AE0B5"
];
function Gt(n) {
  return Kn[n % Kn.length];
}
function Ne(n) {
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}
function Xt(n) {
  if (n.includes("T") || n.includes(" ") && n.includes(":"))
    return { date: new Date(n.replace(" ", "T")), allDay: !1 };
  const [t, i, r] = n.split("-").map(Number);
  return { date: new Date(t, i - 1, r), allDay: !0 };
}
function Za(n, t) {
  const i = Ne(t), r = [], o = Array.isArray(n) ? { unknown: n } : n;
  for (const [a, l] of Object.entries(o)) {
    if (!Array.isArray(l)) {
      console.warn(`[parseHassEvents] Expected array for ${a}, got:`, typeof l);
      continue;
    }
    for (const s of l) {
      let p = "";
      if (typeof s.start == "string" ? p = s.start : s.start && (p = s.start.dateTime ?? s.start.date ?? ""), !p) continue;
      const { date: c, allDay: u } = Xt(p), d = Math.round(
        (Ne(c).getTime() - i.getTime()) / 864e5
      );
      r.push({
        id: `${a}-${s.uid ?? s.summary}-${p}`,
        calendarId: a === "unknown" ? "calendar" : a,
        title: s.summary,
        dayOffset: d,
        time: u ? void 0 : `${String(c.getHours()).padStart(2, "0")}:${String(c.getMinutes()).padStart(2, "0")}`,
        allDay: u
      });
    }
  }
  return r.sort((a, l) => a.dayOffset !== l.dayOffset ? a.dayOffset - l.dayOffset : a.allDay && !l.allDay ? -1 : !a.allDay && l.allDay ? 1 : (a.time ?? "").localeCompare(l.time ?? ""));
}
function Ja(n, t) {
  const i = n.message, r = n.start_time;
  if (!i || !r) return null;
  const { date: o, allDay: a } = Xt(r), l = Math.round(
    (Ne(o).getTime() - Ne(t).getTime()) / 864e5
  );
  return {
    title: i,
    allDay: a,
    dayOffset: l,
    time: a ? void 0 : `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`
  };
}
const Ka = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function Ga({ hass: n, calendarEntities: t, onClose: i }) {
  const [r, o] = I(null), a = /* @__PURE__ */ new Date(), l = new Map(
    [...t].sort((c, u) => c.entity_id.localeCompare(u.entity_id)).map((c, u) => [c.entity_id, Gt(u)])
  );
  G(() => {
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
            }), f = m?.response?.[v]?.events || m?.[v]?.events || [];
            return { entity_id: v, events: f };
          } catch (m) {
            return console.error(`[CalendarPanel] Service call failed for ${v}:`, m), { entity_id: v, events: [] };
          }
        }
        return console.error(`[CalendarPanel] Error for ${v}:`, b), { entity_id: v, events: [] };
      }
    };
    Promise.all(t.map((v) => g(v.entity_id))).then((v) => {
      const b = {};
      for (const f of v)
        b[f.entity_id] = f.events;
      console.log("[CalendarPanel] Combined response:", b);
      const m = Za(b, a);
      console.log("[CalendarPanel] Parsed events:", m), o(m);
    });
  }, []);
  const s = Array.from({ length: 7 }, (c, u) => {
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
            style: { background: l.get(c) ?? "var(--ink-3)" }
          }
        ),
        /* @__PURE__ */ e("span", { children: t.find((u) => u.entity_id === c)?.friendly_name ?? c })
      ] }, c)) }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: r === null ? /* @__PURE__ */ e("div", { class: "nido-cal-panel__loading", children: "Chargement…" }) : /* @__PURE__ */ e("div", { class: "nido-cal-panel__days", children: s.map(({ date: c, offset: u, events: d }) => /* @__PURE__ */ e(
        "div",
        {
          class: `nido-cal-panel__day ${u === 0 ? "is-today" : ""}`,
          children: [
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__badge", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-day", children: Ka[c.getDay()] }),
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-num", children: c.getDate() })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__events", children: d.length === 0 ? /* @__PURE__ */ e("span", { class: "nido-cal-panel__empty", children: "—" }) : d.map((h) => /* @__PURE__ */ e("div", { class: "nido-cal-panel__event", children: [
              /* @__PURE__ */ e(
                "span",
                {
                  class: "nido-cal-panel__event-dot",
                  style: { background: l.get(h.calendarId) ?? "var(--ink-3)" }
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
const Xa = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function Qa(n, t) {
  return n === 0 ? "Aujourd'hui" : n === 1 ? "Demain" : `${Xa[t.getDay()]} ${t.getDate()}`;
}
function Qt({ hass: n, entity: t, roomLabel: i, hero: r = !1, calendarEntities: o }) {
  const [a, l] = I(!1), p = [...o].sort((v, b) => v.entity_id.localeCompare(b.entity_id)).map((v) => v.entity_id).indexOf(t.entity_id), c = Gt(p >= 0 ? p : 0), u = /* @__PURE__ */ new Date(), d = Ja(t.state.attributes, u), h = d ? (() => {
    const v = new Date(u);
    return v.setDate(u.getDate() + d.dayOffset), v;
  })() : null, g = ["n-card", r ? "n-card--accent-muted" : "n-card--default", "nido-cal-widget"].join(" ");
  return /* @__PURE__ */ e(Z, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        class: g,
        "data-hero": r ? "true" : "false",
        "data-on": "false",
        onClick: () => l(!0),
        children: [
          /* @__PURE__ */ e("div", { class: "n-card__head", children: [
            /* @__PURE__ */ e("div", { class: "n-icon-bubble nido-cal-widget__bubble", style: { "--cal-color": c }, children: /* @__PURE__ */ e(Dt, { size: r ? 22 : 18 }) }),
            /* @__PURE__ */ e("span", { class: "n-eyebrow", children: i || t.friendly_name })
          ] }),
          d && h ? /* @__PURE__ */ e(Z, { children: [
            /* @__PURE__ */ e("div", { class: r ? "nido-cal-widget__title n-title--xl" : "nido-cal-widget__title", children: d.title }),
            /* @__PURE__ */ e("div", { class: "nido-cal-widget__when", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__day", children: Qa(d.dayOffset, h) }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__sep", children: "·" }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__time", children: d.allDay ? "Journée" : d.time })
            ] })
          ] }) : /* @__PURE__ */ e("div", { class: "n-muted", children: "Rien à venir" })
        ]
      }
    ),
    a && /* @__PURE__ */ e(
      Ga,
      {
        hass: n,
        calendarEntities: o,
        onClose: () => l(!1)
      }
    )
  ] });
}
function Ke(n, t, i, r) {
  const o = Math.PI * (1 - n);
  return [t + r * Math.cos(o), i - r * Math.sin(o)];
}
function ei({
  hass: n,
  powerEntityId: t,
  max: i = 7e3,
  onOpen: r
}) {
  const o = n.states[t], a = o?.attributes.friendly_name ?? "Compteur Linky", l = o?.state ?? "unavailable", s = l === "unavailable" || l === "unknown" || !o, p = j(() => {
    if (s) return 0;
    const D = Number(l);
    return Number.isFinite(D) ? Math.max(0, Math.round(D)) : 0;
  }, [l, s]), c = Math.max(0, Math.min(1, p / i)), u = 100, d = 100, h = 86, [g, v] = Ke(0, u, d, h), [b, m] = Ke(1, u, d, h), [f, _] = Ke(c, u, d, h), x = `M ${g.toFixed(2)} ${v.toFixed(2)} A ${h} ${h} 0 0 1 ${b.toFixed(2)} ${m.toFixed(2)}`, M = c > 0.5 ? 1 : 0, S = c > 0 ? `M ${g.toFixed(2)} ${v.toFixed(2)} A ${h} ${h} 0 ${M} 1 ${f.toFixed(2)} ${_.toFixed(2)}` : "", z = p >= 5e3 ? "Pic" : p >= 2e3 ? "Soutenu" : "Sobre", N = ["n-card", "n-card--accent", "breathe-1", "n-power-gauge"].join(" "), T = typeof r == "function";
  return /* @__PURE__ */ e(
    "div",
    {
      class: N,
      "data-on": "true",
      role: T ? "button" : void 0,
      tabIndex: T ? 0 : void 0,
      onClick: T ? r : void 0,
      onKeyDown: T ? (D) => {
        (D.key === "Enter" || D.key === " ") && (D.preventDefault(), r?.());
      } : void 0,
      style: { cursor: T ? "pointer" : "default" },
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
            T && /* @__PURE__ */ e("span", { class: "n-power-gauge__open", "aria-hidden": "true", children: /* @__PURE__ */ e(At, { size: 14 }) })
          ] })
        ] }),
        s ? /* @__PURE__ */ e("div", { class: "n-muted n-power-gauge__unavailable", children: "Indisponible" }) : /* @__PURE__ */ e(Z, { children: [
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
                  S && /* @__PURE__ */ e(
                    "path",
                    {
                      d: S,
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
              z,
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
const je = 64, we = 80, ke = 80, Gn = 270 / 360 * 2 * Math.PI * je, Xn = 2 * Math.PI * je;
function er({
  currentPower: n,
  subscribedKva: t = 9
}) {
  const i = Math.max(0, n) / 1e3, r = Math.min(1, i / t), o = r >= 0.85, a = !o && r >= 0.7, l = o ? "var(--warning)" : a ? "var(--accent-deep)" : "var(--accent)", s = `${(Gn * r).toFixed(1)} ${Xn.toFixed(1)}`, p = `${Gn.toFixed(1)} ${Xn.toFixed(1)}`, c = o ? "Risque coupure" : a ? "À surveiller" : "Marge ok", u = o ? "Coupez un gros poste pour éviter la disjonction." : a ? "Évitez de cumuler four + lave-linge maintenant." : "Tout est sous contrôle, rien à signaler.";
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
            cx: we,
            cy: ke,
            r: je,
            fill: "none",
            stroke: "var(--bg-inset)",
            "stroke-width": "12",
            "stroke-linecap": "round",
            "stroke-dasharray": p,
            transform: `rotate(135 ${we} ${ke})`
          }
        ),
        /* @__PURE__ */ e(
          "circle",
          {
            cx: we,
            cy: ke,
            r: je,
            fill: "none",
            stroke: l,
            "stroke-width": "12",
            "stroke-linecap": "round",
            "stroke-dasharray": s,
            transform: `rotate(135 ${we} ${ke})`,
            class: "n-subscription-guard__arc"
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "n-subscription-guard__readout", children: [
        /* @__PURE__ */ e("div", { class: "n-subscription-guard__value", style: { color: l }, children: [
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
function nr(n) {
  const t = new Date(n);
  return t.setMinutes(0, 0, 0), t;
}
function tr(n) {
  if (typeof n.lu == "number") return n.lu * 1e3;
  const t = n.last_updated ?? n.last_changed;
  if (!t) return null;
  const i = Date.parse(t);
  return Number.isFinite(i) ? i : null;
}
function ir(n) {
  const t = n.s ?? n.state;
  if (t == null || t === "unavailable" || t === "unknown") return null;
  const i = Number(t);
  return Number.isFinite(i) ? i : null;
}
function ar(n, t, i) {
  const r = new Array(24).fill(0);
  if (n.length === 0)
    return { buckets: r, total: 0, available: !1 };
  const o = n.map((s) => ({ t: tr(s), v: ir(s) })).filter((s) => s.t !== null && s.v !== null).sort((s, p) => s.t - p.t);
  if (o.length === 0)
    return { buckets: r, total: 0, available: !1 };
  for (let s = 0; s < o.length - 1; s += 1) {
    const p = o[s], c = o[s + 1], u = Math.max(p.t, t), d = Math.min(c.t, i);
    if (d <= u) continue;
    const h = (p.v + c.v) / 2, g = (d - u) / 36e5, v = h * g / 1e3, b = Math.floor((u - t) / 36e5);
    b >= 0 && b < 24 && (r[b] += v);
  }
  const a = o[o.length - 1];
  if (a.t < i) {
    const s = Math.max(a.t, t), p = (i - s) / 36e5;
    if (p > 0) {
      const c = a.v * p / 1e3, u = Math.floor((s - t) / 36e5);
      u >= 0 && u < 24 && (r[u] += c);
    }
  }
  const l = r.reduce((s, p) => s + p, 0);
  return { buckets: r, total: l, available: l > 0 };
}
function rr({
  hass: n,
  powerEntityId: t,
  dailyConsumptionEntityId: i
}) {
  const [r, o] = I(null), [a, l] = I(!0), [s] = I("day");
  G(() => {
    let z = !1;
    return (async () => {
      l(!0);
      try {
        const T = nr(new Date(Date.now() - 828e5)), D = /* @__PURE__ */ new Date(), B = await n.callWS({
          type: "history/history_during_period",
          start_time: T.toISOString(),
          end_time: D.toISOString(),
          entity_ids: [t],
          minimal_response: !0,
          no_attributes: !0
        });
        if (z) return;
        const J = B?.[t] ?? [], X = ar(J, T.getTime(), D.getTime());
        o(X);
      } catch (T) {
        if (z) return;
        console.warn("Nido energy: history fetch failed", T), o({ buckets: new Array(24).fill(0), total: 0, available: !1 });
      } finally {
        z || l(!1);
      }
    })(), () => {
      z = !0;
    };
  }, [n != null, t]);
  const p = i ? n.states[i] : void 0, c = j(() => {
    if (!p) return null;
    const z = Number(p.state);
    return Number.isFinite(z) ? z : null;
  }, [p]), u = p?.attributes.unit_of_measurement ?? "kWh", d = r?.buckets ?? new Array(24).fill(0), h = c ?? r?.total ?? 0, g = r?.available ?? !1, v = d.filter((z) => z > 0), b = v.length > 0 ? v.reduce((z, N) => z + N, 0) / v.length : 0, m = Math.max(...d, b) * 1.1 || 1, f = h > 0 ? h : 0, _ = 0, x = (/* @__PURE__ */ new Date()).getHours(), M = Math.max(...d), S = c !== null ? u : "kWh";
  return /* @__PURE__ */ e("div", { class: "n-card n-hourly", children: [
    /* @__PURE__ */ e("div", { class: "n-hourly__head", children: [
      /* @__PURE__ */ e("div", { children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Consommation · Aujourd'hui" }),
        /* @__PURE__ */ e("div", { class: "n-hourly__total-row", children: [
          /* @__PURE__ */ e("div", { class: "n-hourly__total", children: [
            h.toFixed(1).replace(".", ","),
            /* @__PURE__ */ e("span", { class: "n-hourly__total-unit", children: S })
          ] }),
          f > 0 && /* @__PURE__ */ e("span", { class: "n-pill-btn n-pill-btn--ghost n-hourly__delta", children: [
            "",
            _.toFixed(0),
            " % vs hier"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-hourly__modes", children: [
        /* @__PURE__ */ e("span", { class: `n-pill-btn ${s === "day" ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`, children: "Jour" }),
        /* @__PURE__ */ e("span", { class: "n-pill-btn n-pill-btn--ghost is-disabled", children: "Semaine" }),
        /* @__PURE__ */ e("span", { class: "n-pill-btn n-pill-btn--ghost is-disabled", children: "Mois" })
      ] })
    ] }),
    a ? /* @__PURE__ */ e("div", { class: "n-muted n-hourly__loading", children: "Chargement de l'historique…" }) : g ? /* @__PURE__ */ e(Z, { children: [
      /* @__PURE__ */ e("div", { class: "n-bars", children: [
        b > 0 && /* @__PURE__ */ e(
          "div",
          {
            class: "n-bars__avg",
            style: { bottom: `${b / m * 100}%` },
            children: /* @__PURE__ */ e("span", { class: "n-bars__avg-label", children: [
              "moyenne · ",
              b.toFixed(2),
              " kWh"
            ] })
          }
        ),
        /* @__PURE__ */ e("div", { class: "n-bars__grid", children: d.map((z, N) => {
          const T = N === x, D = N < x, B = z > 0 && z === M;
          let J = "n-bars__bar";
          return T ? J += " is-now" : B ? J += " is-peak" : D ? J += " is-past" : J += " is-future", /* @__PURE__ */ e("div", { class: "n-bars__col", children: [
            /* @__PURE__ */ e(
              "div",
              {
                class: J,
                style: { height: `${Math.max(2, z / m * 100)}%` }
              }
            ),
            T && /* @__PURE__ */ e("div", { class: "n-bars__now-label", children: [
              z.toFixed(2),
              " kWh"
            ] })
          ] }, N);
        }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-bars__axis", children: [
        /* @__PURE__ */ e("span", { children: "00 h" }),
        /* @__PURE__ */ e("span", { children: "06 h" }),
        /* @__PURE__ */ e("span", { children: "12 h" }),
        /* @__PURE__ */ e("span", { children: "18 h" }),
        /* @__PURE__ */ e("span", { children: "24 h" })
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "n-bars n-bars--empty", children: /* @__PURE__ */ e("div", { class: "n-muted", children: "Historique indisponible" }) })
  ] });
}
function or({
  entities: n,
  primaryPowerEntityId: t,
  areas: i,
  onSelect: r
}) {
  const o = j(() => {
    const s = /* @__PURE__ */ new Map();
    for (const p of i) s.set(p.area_id, p.name);
    return s;
  }, [i]), a = j(() => {
    const s = [];
    for (const p of n) {
      if (p.entity_id === t || p.state.attributes.device_class !== "power") continue;
      const c = Number(p.state.state);
      if (!Number.isFinite(c)) continue;
      const u = p.area_id ? o.get(p.area_id) ?? "" : "";
      s.push({ entity: p, watts: Math.max(0, c), roomLabel: u });
    }
    return s.sort((p, c) => c.watts - p.watts), s.slice(0, 5);
  }, [n, t, o]), l = a.length > 0 ? Math.max(...a.map((s) => s.watts), 1) : 1;
  return /* @__PURE__ */ e("div", { class: "n-card n-top-consumers", children: [
    /* @__PURE__ */ e("div", { class: "n-top-consumers__head", children: /* @__PURE__ */ e("div", { children: [
      /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Top consommateurs · maintenant" }),
      /* @__PURE__ */ e("div", { class: "n-title", children: "Où part l'énergie" })
    ] }) }),
    a.length === 0 ? /* @__PURE__ */ e("div", { class: "n-muted n-top-consumers__empty", children: "Aucune mesure de puissance individuelle exposée" }) : /* @__PURE__ */ e("div", { class: "n-top-consumers__list", children: a.map((s, p) => {
      const c = s.watts / l * 100, u = typeof r == "function";
      return /* @__PURE__ */ e(
        "div",
        {
          class: "n-top-consumers__row",
          role: u ? "button" : void 0,
          tabIndex: u ? 0 : void 0,
          onClick: u ? () => r?.(s.entity) : void 0,
          onKeyDown: u ? (d) => {
            (d.key === "Enter" || d.key === " ") && (d.preventDefault(), r?.(s.entity));
          } : void 0,
          children: [
            /* @__PURE__ */ e("div", { class: `n-top-consumers__bubble ${p === 0 ? "is-first" : ""}`, children: /* @__PURE__ */ e(ce, { size: 18 }) }),
            /* @__PURE__ */ e("div", { class: "n-top-consumers__body", children: [
              /* @__PURE__ */ e("div", { class: "n-top-consumers__line", children: [
                /* @__PURE__ */ e("div", { class: "n-top-consumers__name-wrap", children: [
                  /* @__PURE__ */ e("span", { class: "n-top-consumers__name", children: s.entity.friendly_name }),
                  s.roomLabel && /* @__PURE__ */ e("span", { class: "n-top-consumers__room", children: s.roomLabel })
                ] }),
                /* @__PURE__ */ e("span", { class: `n-top-consumers__value ${p === 0 ? "is-first" : ""}`, children: [
                  Math.round(s.watts).toLocaleString("fr-FR"),
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
            u && /* @__PURE__ */ e("span", { class: "n-top-consumers__chevron", "aria-hidden": "true", children: /* @__PURE__ */ e(fn, { size: 14 }) })
          ]
        },
        s.entity.entity_id
      );
    }) })
  ] });
}
const ne = "sensor.consommation_electrique_ccasn", Qn = "sensor.conso", sr = "sensor.conso_daily", lr = 9;
function cr({ hass: n, entities: t, exposed: i, areas: r, onBack: o }) {
  const a = j(() => new Set(i), [i]), l = j(
    () => t.filter((f) => a.has(f.entity_id)),
    [t, a]
  ), s = n.states[ne], p = !!s && s.state !== "unavailable" && s.state !== "unknown", c = j(() => {
    if (!p || !s) return 0;
    const f = Number(s.state);
    return Number.isFinite(f) ? Math.max(0, f) : 0;
  }, [s, p]), u = n.states[Qn], d = j(() => {
    if (!u) return null;
    const f = Number(u.state);
    return Number.isFinite(f) ? f : null;
  }, [u]), h = u?.attributes.unit_of_measurement ?? "kWh", g = n.states[sr], v = j(() => {
    if (!g) return null;
    const f = Number(g.state);
    return Number.isFinite(f) ? f : null;
  }, [g]), b = g?.attributes.unit_of_measurement ?? "€", m = j(() => (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (_) => _.toUpperCase()), []);
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
              /* @__PURE__ */ e(At, { size: 12 }),
              "Ouvrir HA"
            ]
          }
        ),
        /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", "aria-label": "Plus", children: /* @__PURE__ */ e($t, { size: 18 }) })
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
          Ge,
          {
            label: "Auj.",
            value: d !== null ? d.toFixed(1).replace(".", ",") : "—",
            unit: d !== null ? h : ""
          }
        ),
        /* @__PURE__ */ e(et, {}),
        /* @__PURE__ */ e(
          Ge,
          {
            label: "Coût",
            value: v !== null ? v.toFixed(2).replace(".", ",") : "—",
            unit: v !== null ? b : ""
          }
        ),
        /* @__PURE__ */ e(et, {}),
        /* @__PURE__ */ e(
          Ge,
          {
            label: "Puissance",
            value: p ? Math.round(c).toLocaleString("fr-FR") : "—",
            unit: p ? "W" : ""
          }
        )
      ] })
    ] }),
    p ? /* @__PURE__ */ e(Z, { children: [
      /* @__PURE__ */ e("section", { class: "nido-energy__section", children: [
        /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Maintenant" }) }),
        /* @__PURE__ */ e("div", { class: "nido-energy__live-grid", children: [
          /* @__PURE__ */ e(ei, { hass: n, powerEntityId: ne }),
          /* @__PURE__ */ e(
            er,
            {
              currentPower: c,
              subscribedKva: lr
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
          rr,
          {
            hass: n,
            powerEntityId: ne,
            dailyConsumptionEntityId: Qn
          }
        )
      ] }),
      /* @__PURE__ */ e("section", { class: "nido-energy__section", children: [
        /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Top consommateurs" }) }),
        /* @__PURE__ */ e(
          or,
          {
            entities: l,
            primaryPowerEntityId: ne,
            areas: r
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "nido-empty", children: /* @__PURE__ */ e("p", { class: "n-muted", children: [
      "L'entité de puissance ",
      /* @__PURE__ */ e("code", { children: ne }),
      " n'est pas disponible. Vérifiez qu'elle est exposée dans Nido."
    ] }) })
  ] }) });
}
function Ge({ label: n, value: t, unit: i }) {
  return /* @__PURE__ */ e("div", { class: "nido-energy__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-energy__stat-value", children: [
      t,
      i && /* @__PURE__ */ e("span", { class: "nido-energy__stat-unit", children: i })
    ] })
  ] });
}
function et() {
  return /* @__PURE__ */ e("div", { class: "nido-energy__stat-sep", "aria-hidden": "true" });
}
const dr = /* @__PURE__ */ new Set([
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
function pr(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function ur(n, t) {
  const i = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(Nt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(jt, { ...i, hero: t.hero }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(Lt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(Ot, { entity: n, roomLabel: t.areaName, hero: t.hero }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(Rt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(Ft, { ...i }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(Vt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(Ht, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(Wt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(Bt, { ...i }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(Ut, { ...i }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(qt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(Yt, { ...i }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(Jt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(Qt, { hass: t.hass, entity: n, roomLabel: t.areaName, hero: t.hero, calendarEntities: t.calendarEntities }, n.entity_id);
    default:
      return null;
  }
}
function hr(n) {
  return n.replace(/[^\x00-\x7F]/g, "_").toLowerCase();
}
function _r(n, t) {
  const i = new Map(t.map((o) => [hr(o.name), o.area_id])), r = /* @__PURE__ */ new Map();
  for (const o of Object.values(n.states)) {
    if (!o.entity_id.startsWith("sensor.")) continue;
    const a = o.state.toLowerCase(), l = i.get(a);
    if (!l) continue;
    const s = o.entity_id.slice(7), p = s.slice(s.lastIndexOf("_") + 1);
    if (!p) continue;
    const u = n.states[`person.${p}`]?.attributes.entity_picture, d = r.get(l) ?? /* @__PURE__ */ new Map();
    d.has(p) || d.set(p, { name: p, picture: u }), r.set(l, d);
  }
  return new Map(
    Array.from(r.entries()).map(([o, a]) => [o, Array.from(a.values())])
  );
}
function fr({ area: n, entities: t, accent: i = !1, onOpen: r, dragProps: o, presence: a }) {
  const l = Kt(n.name), s = t.filter(
    (u) => u.domain !== "sensor" && u.domain !== "binary_sensor"
  ).length, p = t.filter(un).length, c = xt(t);
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
            /* @__PURE__ */ e("span", { class: "nido-room-card__icon", children: /* @__PURE__ */ e(l, { size: 20 }) }),
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
              /* @__PURE__ */ e(fn, { size: 16 })
            ] })
          ] }),
          /* @__PURE__ */ e("div", { class: "nido-room-card__foot", children: [
            /* @__PURE__ */ e("div", { class: "nido-room-card__name", children: n.name }),
            /* @__PURE__ */ e("div", { class: "nido-room-card__meta", children: [
              /* @__PURE__ */ e("span", { children: [
                s,
                " appareil",
                s > 1 ? "s" : ""
              ] }),
              p > 0 && /* @__PURE__ */ e(Z, { children: [
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
function gr({
  hass: n,
  areas: t,
  entities: i,
  favorites: r,
  exposed: o,
  roomsOrder: a,
  onConfigure: l,
  onOpenRoom: s,
  onOpenEnergy: p,
  onReorderFavorites: c,
  onReorderRooms: u
}) {
  const d = n.user?.name ?? "vous", h = /* @__PURE__ */ new Date(), g = h.getHours(), { greeting: v, sub: b } = pr(g), m = `${String(g).padStart(2, "0")}:${String(h.getMinutes()).padStart(2, "0")}`, f = h.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (w) => w.toUpperCase()), _ = j(() => new Set(o), [o]), x = j(
    () => i.filter((w) => _.has(w.entity_id) && dr.has(w.domain)),
    [i, _]
  ), M = j(
    () => x.find((w) => w.domain === "weather"),
    [x]
  ), S = j(
    () => x.filter((w) => w.domain === "light" && un(w)),
    [x]
  ), z = S.length, N = j(
    () => x.filter((w) => w.domain === "calendar"),
    [x]
  ), T = j(() => M ? Object.keys(n.states).some(
    (O) => O.startsWith("sensor.") && (O.endsWith("_next_rain") || O.endsWith("_weather_alert") || O.endsWith("_uv"))
  ) : !1, [n.states, M]), [D, B] = I(!1), [J, X] = I(!1), [ee, ie] = I(!1), [k, E] = I(!1), P = j(() => {
    const w = n.states["sensor.nido_notifications"];
    return !w || !w.attributes.notifications ? [] : w.attributes.notifications;
  }, [n.states["sensor.nido_notifications"]]), R = q(new Set(P.map((w) => w.id))), F = q(!0);
  G(() => {
    const w = R.current;
    if (F.current) {
      F.current = !1, R.current = new Set(P.map((re) => re.id));
      return;
    }
    P.some((re) => !w.has(re.id)) && Va(), R.current = new Set(P.map((re) => re.id));
  }, [P]);
  const C = j(() => Pi(), [J]), A = j(() => {
    if (P.length === 0) return !1;
    if (!C) return !0;
    const w = P[P.length - 1];
    return new Date(w.timestamp) > new Date(C);
  }, [P, C]), L = () => {
    X(!0), $i((/* @__PURE__ */ new Date()).toISOString());
  }, $ = j(() => Object.values(n.states).filter(
    (w) => w.entity_id.startsWith("person.") && w.state === "home" && w.attributes.entity_picture
  ), [n.states]), H = (w) => {
    if (!w) return null;
    if (w.startsWith("http")) return w;
    const O = n.hassUrl?.("");
    return O ? O.replace(/\/$/, "") + w : w;
  }, ae = j(() => wi(x), [x]), Re = j(() => _r(n, t), [n.states, t]), Fe = j(() => {
    const w = new Map(x.map((O) => [O.entity_id, O]));
    return r.map((O) => w.get(O)).filter((O) => !!O);
  }, [x, r]), Ve = j(() => {
    const w = t.filter((O) => (ae.get(O.area_id) ?? []).length > 0);
    return kt(w, a, (O) => O.area_id);
  }, [t, ae, a]), He = rn(
    Fe,
    (w) => w.entity_id,
    (w) => c(w.map((O) => O.entity_id))
  ), We = rn(
    Ve,
    (w) => w.area_id,
    (w) => u(w.map((O) => O.area_id))
  ), ni = Fe.some(
    (w) => !(w.domain === "binary_sensor" && w.state.state === "off")
  );
  let Be = 0;
  const ti = ni ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${He.isDragging ? "is-dragging" : ""}`,
        ref: (w) => {
          He.containerRef.current = w;
        },
        children: Fe.map((w) => {
          if (w.domain === "binary_sensor" && w.state.state === "off") return null;
          Be += 1;
          const re = Be === 1, ri = (Be - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": re ? "true" : "false",
              ...He.itemPropsFor(w.entity_id),
              children: ur(w, {
                hass: n,
                areaName: t.find((oi) => oi.area_id === w.area_id)?.name ?? "",
                hero: re,
                variant: ri,
                calendarEntities: N
              })
            },
            w.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, ii = !!p && _.has(ne) && !!n.states[ne], ai = x.length > 0;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: [
    /* @__PURE__ */ e("div", { class: "nido-dashboard", children: [
      /* @__PURE__ */ e("header", { class: "nido-topbar", children: [
        /* @__PURE__ */ e("div", { class: "nido-topbar__brand", children: [
          /* @__PURE__ */ e("div", { class: "nido-topbar__clock", children: m }),
          /* @__PURE__ */ e("span", { children: "nido" })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-topbar__actions", children: [
          M && (T ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-weather-pill-btn",
              onClick: () => B(!0),
              "aria-label": "Voir la météo détaillée",
              children: /* @__PURE__ */ e(Yn, { entity: M })
            }
          ) : /* @__PURE__ */ e(Yn, { entity: M })),
          z > 0 && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-lights-pill-btn",
              onClick: () => ie(!0),
              "aria-label": `${z} lumière${z > 1 ? "s" : ""} allumée${z > 1 ? "s" : ""}`,
              children: /* @__PURE__ */ e("div", { class: "nido-lights-pill", children: [
                /* @__PURE__ */ e(xe, { size: 16 }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__count", children: z }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__label", children: z === 1 ? "lumière" : "lumières" })
              ] })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: () => E(!0),
              "aria-label": "Bloc note",
              title: "Bloc note",
              children: /* @__PURE__ */ e(va, { size: 20 })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: L,
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ e(Mt, { size: 20 }),
                A && /* @__PURE__ */ e("span", { class: "nido-bell-btn__badge" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: l,
              children: /* @__PURE__ */ e(ji, { size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { class: "nido-hero", children: [
        /* @__PURE__ */ e("div", { class: "nido-hero__date", children: f }),
        /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }, children: [
          /* @__PURE__ */ e("h1", { style: { margin: 0 }, children: [
            v,
            ", ",
            /* @__PURE__ */ e("em", { children: d })
          ] }),
          $.length > 0 && /* @__PURE__ */ e("div", { class: "nido-home-pill", children: [
            /* @__PURE__ */ e("div", { class: "nido-home-pill__avatars", children: $.map((w) => {
              const O = H(w.attributes.entity_picture);
              return O ? /* @__PURE__ */ e(
                "img",
                {
                  src: O,
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
        /* @__PURE__ */ e("p", { class: "nido-hero__sub", style: { marginTop: "24px" }, children: b })
      ] }),
      ai ? /* @__PURE__ */ e(Z, { children: [
        ti,
        ii && /* @__PURE__ */ e("section", { class: "nido-room nido-room--energy", children: [
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
                  /* @__PURE__ */ e(fn, { size: 12 })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { class: "nido-energy-summary", children: /* @__PURE__ */ e(
            ei,
            {
              hass: n,
              powerEntityId: ne,
              onOpen: p
            }
          ) })
        ] }, "__energy"),
        Ve.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
          /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
          /* @__PURE__ */ e(
            "div",
            {
              class: `nido-rooms-grid ${We.isDragging ? "is-dragging" : ""}`,
              ref: (w) => {
                We.containerRef.current = w;
              },
              children: Ve.map((w, O) => /* @__PURE__ */ e(
                fr,
                {
                  area: w,
                  entities: ae.get(w.area_id) ?? [],
                  accent: O === 0,
                  onOpen: () => s(w.area_id),
                  dragProps: We.itemPropsFor(w.area_id),
                  presence: Re.get(w.area_id)
                },
                w.area_id
              ))
            }
          )
        ] })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-empty", children: [
        /* @__PURE__ */ e("p", { class: "n-muted", children: "Aucun appareil exposé pour l'instant. Ouvrez « Personnaliser » pour choisir vos entités." }),
        /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: l, children: "Personnaliser Nido" })
      ] })
    ] }),
    D && M && /* @__PURE__ */ e(
      Oa,
      {
        hass: n,
        weatherEntityId: M.entity_id,
        onClose: () => B(!1)
      }
    ),
    J && /* @__PURE__ */ e(
      Ha,
      {
        hass: n,
        notifications: P,
        onClose: () => X(!1)
      }
    ),
    ee && /* @__PURE__ */ e(
      Ua,
      {
        hass: n,
        lights: S,
        areas: t,
        onClose: () => ie(!1)
      }
    ),
    k && /* @__PURE__ */ e(
      Ya,
      {
        hass: n,
        onClose: () => E(!1)
      }
    )
  ] });
}
function mr(n, t, i, r, o, a = !1) {
  const l = { hass: t, entity: n, roomLabel: i };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(Nt, { ...l, hero: a, breatheVariant: r }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(jt, { ...l, hero: a }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(Lt, { ...l, hero: a, breatheVariant: r }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(Ot, { entity: n, roomLabel: i, hero: a }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(Rt, { ...l, hero: a, breatheVariant: r }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(Ft, { ...l }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(Vt, { ...l, breatheVariant: r }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(Ht, { entity: n, roomLabel: i }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(Wt, { ...l, breatheVariant: r }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(Bt, { ...l }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(Ut, { ...l }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(qt, { ...l, breatheVariant: r }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(Yt, { ...l }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(Jt, { entity: n, roomLabel: i }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(Qt, { hass: t, entity: n, roomLabel: i, calendarEntities: o }, n.entity_id);
    default:
      return null;
  }
}
function br({
  hass: n,
  area: t,
  entities: i,
  entitiesOrder: r,
  onBack: o,
  onReorderEntities: a
}) {
  const l = Kt(t.name), s = xt(i), p = j(
    () => kt(i, r, (_) => _.entity_id),
    [i, r]
  ), c = j(
    () => p.filter((_) => {
      if (_.domain !== "sensor") return !0;
      const x = _.state.attributes.device_class;
      return x !== "temperature" && x !== "humidity";
    }),
    [p]
  ), u = j(
    () => c.filter((_) => _.domain === "calendar"),
    [c]
  ), d = j(() => {
    const _ = /* @__PURE__ */ new Map();
    for (const x of c)
      _.set(x.domain, (_.get(x.domain) ?? 0) + 1);
    return Array.from(_.entries()).sort((x, M) => M[1] - x[1]);
  }, [c]), [h, g] = I("all"), v = j(
    () => h === "all" ? c : c.filter((_) => _.domain === h),
    [c, h]
  ), b = rn(
    v,
    (_) => _.entity_id,
    (_) => {
      const x = new Set(v.map((z) => z.entity_id)), M = [..._], S = p.map(
        (z) => x.has(z.entity_id) ? M.shift() : z
      );
      a(S.map((z) => z.entity_id));
    }
  ), m = c.filter(
    (_) => _.domain !== "sensor" && _.domain !== "binary_sensor"
  ).length, f = c.filter(un).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(Pt, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e($t, { size: 18 }) }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "nido-room-detail__hero", children: [
      /* @__PURE__ */ e("div", { class: "nido-room-detail__hero-left", children: [
        /* @__PURE__ */ e("div", { class: "nido-room-detail__icon", children: [
          /* @__PURE__ */ e("div", { class: "pattern-dots nido-room-detail__icon-bg", "aria-hidden": "true" }),
          /* @__PURE__ */ e(l, { size: 32 })
        ] }),
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "nido-room-detail__hero-meta", children: [
            /* @__PURE__ */ e("span", { children: [
              m,
              " appareil",
              m > 1 ? "s" : ""
            ] }),
            f > 0 && /* @__PURE__ */ e(Z, { children: [
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
      (s.temperature || s.humidity || s.illuminance) && /* @__PURE__ */ e("div", { class: "nido-room-detail__stats", children: [
        s.temperature && /* @__PURE__ */ e(
          Xe,
          {
            label: "Température",
            value: s.temperature.value,
            unit: s.temperature.unit || "°"
          }
        ),
        s.humidity && /* @__PURE__ */ e(nt, {}),
        s.humidity && /* @__PURE__ */ e(
          Xe,
          {
            label: "Humidité",
            value: Math.round(parseFloat(s.humidity.value)).toString(),
            unit: s.humidity.unit || "%"
          }
        ),
        s.illuminance && /* @__PURE__ */ e(nt, {}),
        s.illuminance && /* @__PURE__ */ e(
          Xe,
          {
            label: "Luminosité",
            value: Math.round(parseFloat(s.illuminance.value)).toString(),
            unit: s.illuminance.unit || "lx"
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
      d.map(([_, x]) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${h === _ ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => g(_),
          children: [
            Ra[_] ?? _,
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
        ref: (_) => {
          b.containerRef.current = _;
        },
        children: v.map((_, x) => {
          const M = x % 4 + 1, S = x === 0;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": S ? "true" : "false",
              ...b.itemPropsFor(_.entity_id),
              children: mr(_, n, t.name, M, u, S)
            },
            _.entity_id
          );
        })
      }
    )
  ] }) });
}
function Xe({ label: n, value: t, unit: i }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: i })
    ] })
  ] });
}
function nt() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const Me = 5, he = {
  light: { label: "Lumières", Icon: xe },
  switch: { label: "Prises & switches", Icon: mn },
  cover: { label: "Volets & stores", Icon: gn },
  climate: { label: "Thermostats", Icon: se },
  lock: { label: "Serrures", Icon: bn },
  vacuum: { label: "Aspirateurs", Icon: vn },
  binary_sensor: { label: "Détecteurs", Icon: ve },
  sensor: { label: "Capteurs", Icon: fe },
  media_player: { label: "Lecteurs média", Icon: yn },
  alarm_control_panel: { label: "Alarmes", Icon: ve },
  camera: { label: "Caméras", Icon: De },
  fan: { label: "Ventilateurs", Icon: wn },
  scene: { label: "Scènes", Icon: kn },
  script: { label: "Scripts", Icon: pe },
  weather: { label: "Météo", Icon: Ct },
  calendar: { label: "Calendriers", Icon: Dt }
}, tt = Object.keys(he), on = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] }
};
function vr(n) {
  const {
    hass: t,
    entities: i,
    areas: r,
    initialTheme: o,
    initialMode: a,
    initialExposed: l,
    initialFavorites: s,
    initialExcludedUsers: p,
    isReturning: c,
    onApplyTheme: u,
    onClose: d,
    onDone: h
  } = n, [g, v] = I(0), [b, m] = I(o), [f, _] = I(a), [x, M] = I(new Set(l)), [S, z] = I(new Set(s)), [N, T] = I(
    new Set(p)
  ), [D, B] = I(null), [J, X] = I(null);
  G(() => {
    let A = !1;
    return t.callWS({ type: "config/auth/list" }).then((L) => {
      A || B(
        (L ?? []).filter(($) => !$.system_generated).sort(($, H) => $.name.localeCompare(H.name))
      );
    }).catch((L) => {
      A || (X(L instanceof Error ? L.message : String(L)), t.user && B([t.user]));
    }), () => {
      A = !0;
    };
  }, [t]);
  const ee = () => v((A) => Math.min(Me - 1, A + 1)), ie = () => v((A) => Math.max(0, A - 1)), k = (A, L) => {
    m(A), _(L), u(A, L);
  }, E = (A) => {
    M((L) => {
      const $ = new Set(L);
      return $.has(A) ? ($.delete(A), z((H) => {
        if (!H.has(A)) return H;
        const ae = new Set(H);
        return ae.delete(A), ae;
      })) : $.add(A), $;
    });
  }, P = (A) => {
    z((L) => {
      const $ = new Set(L);
      return $.has(A) ? $.delete(A) : ($.add(A), M((H) => H.has(A) ? H : new Set(H).add(A))), $;
    });
  }, R = (A) => {
    T((L) => {
      const $ = new Set(L);
      return $.has(A) ? $.delete(A) : $.add(A), $;
    });
  }, F = () => {
    const A = Array.from(x), L = Array.from(S).filter((H) => x.has(H)), $ = Array.from(N);
    Vn(b, f), Ln(A), an(L), On($), Fn(), h({
      exposed: A,
      favorites: L,
      theme: b,
      mode: f,
      excludedUsers: $
    });
  }, C = () => {
    Vn(b, f), Ln(Array.from(x)), an(Array.from(S).filter((A) => x.has(A))), On(Array.from(N)), Fn(), d();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(la, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: Me }, (A, L) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${L === g ? "is-active" : ""} ${L < g ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          g + 1,
          " / ",
          Me
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: C, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      g === 0 && /* @__PURE__ */ e(
        xr,
        {
          isReturning: c,
          exposedCount: x.size,
          favCount: S.size,
          themeLabel: on[b].name,
          modeLabel: f === "light" ? "Clair" : "Sombre",
          allowedUsersCount: D ? D.filter((A) => !N.has(A.id)).length : null
        }
      ),
      g === 1 && /* @__PURE__ */ e(yr, { entitiesCount: i.length, areasCount: r.length }),
      g === 2 && /* @__PURE__ */ e(
        wr,
        {
          entities: i,
          exposed: x,
          favs: S,
          onToggleExpose: E,
          onToggleFav: P
        }
      ),
      g === 3 && /* @__PURE__ */ e(
        kr,
        {
          theme: b,
          mode: f,
          onPick: k,
          userName: t.user?.name ?? "vous"
        }
      ),
      g === 4 && /* @__PURE__ */ e(
        Mr,
        {
          hass: t,
          users: D,
          error: J,
          excluded: N,
          onToggleUser: R
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
          onClick: ie,
          children: [
            /* @__PURE__ */ e(na, { size: 14 }),
            " Retour"
          ]
        }
      ),
      g < Me - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: ee, children: [
        "Continuer ",
        /* @__PURE__ */ e(qn, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: F, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(qn, { size: 16 })
      ] })
    ] })
  ] }) });
}
const it = [
  xe,
  gn,
  mn,
  se,
  bn,
  vn,
  fe,
  yn,
  ve,
  De,
  wn,
  kn,
  pe
];
function ze({ offset: n, intervalMs: t }) {
  const [i, r] = I(n);
  G(() => {
    const a = setInterval(() => r((l) => l + 1), t);
    return () => clearInterval(a);
  }, [t]);
  const o = it[i % it.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, i);
}
function xr(n) {
  const { isReturning: t, exposedCount: i, favCount: r, themeLabel: o, modeLabel: a, allowedUsersCount: l } = n;
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
              value: l === null ? "—" : l,
              hint: "autorisés"
            }
          )
        ] })
      ] }) : /* @__PURE__ */ e("div", { class: "n-ob-steps-overview", children: [
        ["01", "Connexion"],
        ["02", "Vos appareils"],
        ["03", "Ambiance"],
        ["04", "Famille"]
      ].map(([s, p]) => /* @__PURE__ */ e("div", { class: "n-ob-steps-overview__item", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__eyebrow", children: s }),
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
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tl", children: /* @__PURE__ */ e(ze, { offset: 0, intervalMs: 2200 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tr", children: /* @__PURE__ */ e(ze, { offset: 3, intervalMs: 2600 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--bl", children: /* @__PURE__ */ e(ze, { offset: 7, intervalMs: 2400 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--br", children: /* @__PURE__ */ e(ze, { offset: 10, intervalMs: 2800 }) })
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
function yr({ entitiesCount: n, areasCount: t }) {
  const [i, r] = I("scanning");
  return G(() => {
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
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(oa, { size: 18 }) }),
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
function wr(n) {
  const { entities: t, exposed: i, favs: r, onToggleExpose: o, onToggleFav: a } = n, l = j(() => {
    const m = /* @__PURE__ */ new Map();
    for (const f of t)
      tt.includes(f.domain) && (m.has(f.domain) || m.set(f.domain, []), m.get(f.domain).push(f));
    return Array.from(m.entries()).sort((f, _) => _[1].length - f[1].length);
  }, [t]), [s, p] = I(l[0]?.[0] ?? "light"), [c, u] = I(""), d = l.find(([m]) => m === s) ?? l[0], h = i.size, g = t.filter((m) => tt.includes(m.domain)).length, v = c.trim().toLowerCase(), b = d ? v ? d[1].filter(
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
      /* @__PURE__ */ e("div", { class: "n-ob-ent__list", children: l.map(([m, f]) => {
        const _ = he[m], x = _.Icon, M = f.filter((z) => i.has(z.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${m === s ? "is-active" : ""}`,
            onClick: () => p(m),
            children: [
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-icon", children: /* @__PURE__ */ e(x, { size: 15 }) }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-label", children: _.label }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-count", children: [
                M,
                "/",
                f.length
              ] })
            ]
          }
        );
      }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "n-ob-ent__main", children: d && /* @__PURE__ */ e(Z, { children: [
      /* @__PURE__ */ e("div", { class: "n-ob-ent__head", children: [
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: [
            d[1].length,
            " disponibles"
          ] }),
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: he[d[0]].label })
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
        /* @__PURE__ */ e("span", { class: "n-ob-ent__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(aa, { size: 14 }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            class: "n-ob-ent__search-input",
            value: c,
            onInput: (m) => u(m.target.value),
            placeholder: `Rechercher dans ${he[d[0]].label.toLowerCase()}…`,
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
          const f = i.has(m.entity_id), _ = r.has(m.entity_id), x = he[m.domain].Icon;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `n-ob-ent-card ${f ? "is-exposed" : ""}`,
              onClick: () => o(m.entity_id),
              children: [
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__icon ${f ? "is-on" : ""}`, children: /* @__PURE__ */ e(x, { size: 16 }) }),
                /* @__PURE__ */ e("div", { class: "n-ob-ent-card__body", children: [
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__name", children: m.friendly_name }),
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__id", children: m.entity_id })
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    class: `n-ob-ent-card__star ${_ ? "is-fav" : ""}`,
                    "aria-label": _ ? "Retirer des favoris" : "Ajouter aux favoris",
                    onClick: (M) => {
                      M.stopPropagation(), a(m.entity_id);
                    },
                    children: _ ? /* @__PURE__ */ e(ra, { size: 14 }) : /* @__PURE__ */ e(ia, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${f ? "is-on" : ""}`, children: f && /* @__PURE__ */ e(ta, { size: 12, stroke: 2.4 }) })
              ]
            }
          );
        })
      ] })
    ] }) })
  ] });
}
function kr(n) {
  const { theme: t, mode: i, userName: r, onPick: o } = n, a = on[t];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--theme", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 3 · Ambiance" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Quelle ambiance",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "vous va ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre." }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__grid", children: yt.map((l) => {
        const s = on[l];
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__tile ${t === l ? "is-active" : ""}`,
            onClick: () => o(l, i),
            children: [
              /* @__PURE__ */ e("div", { class: "n-ob-theme__swatches", children: s.swatches.map((p, c) => /* @__PURE__ */ e(
                "span",
                {
                  class: "n-ob-theme__swatch",
                  style: {
                    background: p,
                    borderRadius: c === 0 ? "8px 0 0 8px" : c === 2 ? "0 8px 8px 0" : "0"
                  }
                }
              )) }),
              /* @__PURE__ */ e("div", { class: "n-ob-theme__name", children: s.name }),
              /* @__PURE__ */ e("div", { class: "n-ob-theme__desc", children: s.desc })
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
              /* @__PURE__ */ e(xn, { size: 14 }),
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
              /* @__PURE__ */ e(Et, { size: 14 }),
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
function Mr(n) {
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
    /* @__PURE__ */ e("div", { class: "n-ob-step__illus n-ob-family", children: i === null ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Chargement des utilisateurs…" }) : i.length === 0 ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Aucun utilisateur trouvé." }) : /* @__PURE__ */ e("div", { class: "n-ob-family__list", children: i.map((l) => {
      const s = !o.has(l.id), p = l.id === t.user?.id;
      return /* @__PURE__ */ e(
        "label",
        {
          class: `n-ob-family__row ${s ? "is-allowed" : "is-excluded"}`,
          children: [
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: l.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e(sa, { size: 18 }) }),
            /* @__PURE__ */ e("div", { class: "n-ob-family__info", children: [
              /* @__PURE__ */ e("div", { class: "n-ob-family__name", children: [
                l.name,
                p && /* @__PURE__ */ e("span", { class: "n-ob-family__self", children: " · vous" })
              ] }),
              /* @__PURE__ */ e("div", { class: "n-ob-family__role", children: l.is_owner ? "Propriétaire" : l.is_admin ? "Administrateur" : "Utilisateur" })
            ] }),
            /* @__PURE__ */ e(
              "input",
              {
                type: "checkbox",
                class: "n-ob-family__toggle",
                checked: s,
                disabled: p,
                onChange: () => !p && a(l.id),
                "aria-label": s ? "Autoriser" : "Exclure"
              }
            )
          ]
        }
      );
    }) }) })
  ] });
}
const zr = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function Ir({ hass: n, host: t }) {
  const [i, r] = I(null), [o, a] = I(null), [l, s] = I(null), [p, c] = I(null), u = j(() => wt(), []), [d, h] = I(() => Mi()), [g, v] = I(() => zi()), [b, m] = I(() => Ii()), [f, _] = I(() => Si()), [x, M] = I(
    () => Ai()
  ), [S, z] = I(() => !Rn()), [N, T] = I({ kind: "dashboard" }), D = (C) => {
    h(C), an(C);
  }, B = (C) => {
    _(C), Ci(C);
  }, J = (C, A) => {
    M((L) => {
      const $ = { ...L, [C]: A };
      return Ei($), $;
    });
  }, X = q(n);
  X.current = n, G(() => {
    if (!n) return;
    let C = !1;
    const A = [], L = async () => {
      const $ = X.current;
      if ($)
        try {
          const [H, ae, Re] = await Promise.all([
            mi($),
            bi($),
            vi($)
          ]);
          if (C) return;
          r(H), a(ae), s(Re);
        } catch (H) {
          if (C) return;
          c(H instanceof Error ? H.message : String(H));
        }
    };
    return L(), Promise.all(
      zr.map(
        ($) => n.connection.subscribeEvents(() => {
          C || L();
        }, $)
      )
    ).then(($) => {
      if (C) {
        $.forEach((H) => H());
        return;
      }
      A.push(...$);
    }).catch(($) => console.warn("Nido: subscribeEvents failed", $)), () => {
      C = !0, A.forEach(($) => $());
    };
  }, [n != null]);
  const ee = j(() => !n || !o || !l ? [] : yi(n, o, l), [n?.states, o, l]), ie = (C, A) => {
    t?.applyTheme?.(C, A);
  };
  if (!n)
    return /* @__PURE__ */ e("div", { class: "nido-loading", children: "Connexion à Home Assistant…" });
  if (p)
    return /* @__PURE__ */ e("div", { class: "nido-loading nido-loading--error", children: [
      "Erreur : ",
      p
    ] });
  if (!i || !o || !l)
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
  const E = j(() => new Set(g), [g]), P = N.kind === "room" ? i.find((C) => C.area_id === N.areaId) ?? null : null, R = j(
    () => P ? ee.filter(
      (C) => C.area_id === P.area_id && E.has(C.entity_id)
    ) : [],
    [ee, P, E]
  ), F = !!n.states[ne] && E.has(ne);
  return /* @__PURE__ */ e(Z, { children: [
    N.kind === "energy" ? /* @__PURE__ */ e(
      cr,
      {
        hass: n,
        entities: ee,
        exposed: g,
        areas: i,
        onBack: () => T({ kind: "dashboard" })
      }
    ) : N.kind === "dashboard" || !P ? /* @__PURE__ */ e(
      gr,
      {
        hass: n,
        areas: i,
        entities: ee,
        favorites: d,
        exposed: g,
        roomsOrder: f,
        onConfigure: () => z(!0),
        onOpenRoom: (C) => T({ kind: "room", areaId: C }),
        onOpenEnergy: F ? () => T({ kind: "energy" }) : void 0,
        onReorderFavorites: D,
        onReorderRooms: B
      }
    ) : /* @__PURE__ */ e(
      br,
      {
        hass: n,
        area: P,
        entities: R,
        entitiesOrder: x[P.area_id] ?? [],
        onBack: () => T({ kind: "dashboard" }),
        onReorderEntities: (C) => J(P.area_id, C)
      }
    ),
    S && /* @__PURE__ */ e(
      vr,
      {
        hass: n,
        entities: ee,
        areas: i,
        initialTheme: u.theme,
        initialMode: u.mode,
        initialExposed: g,
        initialFavorites: d,
        initialExcludedUsers: b,
        isReturning: Rn(),
        onApplyTheme: ie,
        onClose: () => z(!1),
        onDone: (C) => {
          v(C.exposed), h(C.favorites), m(C.excludedUsers), z(!1);
        }
      }
    )
  ] });
}
const Sr = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', Cr = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-root-mount{width:100%;height:100%}.nido-shell{width:100%;height:100%;overflow-x:hidden;overflow-y:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px);box-sizing:border-box}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__brand{display:flex;flex-direction:column;align-items:flex-start;gap:4px}.nido-topbar__clock{font-family:var(--font-mono);font-size:14px;font-weight:600;color:var(--ink-3);line-height:1}.nido-topbar__brand span{font-family:"Comfortaa",var(--font-sans);font-weight:700;font-size:24px;letter-spacing:.04em;color:var(--accent);line-height:1}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card--accent-muted{background:var(--accent-soft);color:var(--ink-1);box-shadow:var(--shadow-md)}.n-card--accent-muted .n-icon-bubble{background:color-mix(in srgb,var(--accent) 22%,var(--accent-soft));color:var(--accent-deep)}.n-card--accent-muted .n-toggle{background:color-mix(in srgb,var(--accent) 18%,var(--bg-inset))}.n-card--accent-muted .n-toggle__thumb{background:var(--accent)}.n-card--accent-muted .n-eyebrow{color:var(--accent-deep);opacity:.7}.n-card--accent-muted .n-muted{color:var(--accent-deep);opacity:.65}.n-card--accent-muted .n-title{color:var(--accent-deep)}.n-card[data-hero=true],.nido-drag-item[data-hero=true] .n-card{min-height:200px;padding:24px}.n-cover-glow-wrap{position:relative;border-radius:calc(var(--r-lg) + 2px);padding:2px;overflow:hidden;isolation:isolate;background:transparent;transition:box-shadow .5s var(--ease-out)}.n-cover-glow-wrap[data-active=true]{box-shadow:0 0 18px 2px var(--accent);box-shadow:0 0 18px 2px color-mix(in srgb,var(--accent) 35%,transparent)}.n-cover-glow-wrap .n-card{position:relative;z-index:1}.n-cover-glow-wrap:before{content:"";position:absolute;width:200%;height:200%;top:-50%;left:-50%;background:conic-gradient(from 0deg,transparent 0%,transparent 35%,var(--accent) 45%,var(--accent) 55%,transparent 65%,transparent 100%);background:conic-gradient(from 0deg,transparent 0%,transparent 35%,color-mix(in srgb,var(--accent) 60%,transparent) 45%,var(--accent) 50%,color-mix(in srgb,var(--accent) 60%,transparent) 55%,transparent 65%,transparent 100%);animation:cover-glow-spin 3.5s linear infinite;opacity:0;transition:opacity .5s var(--ease-out);pointer-events:none;z-index:0;will-change:transform}.n-cover-glow-wrap[data-active=true]:before{opacity:1}@keyframes cover-glow-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.n-cover-glow-wrap:before{animation:none}.n-cover-glow-wrap[data-active=true]:before{background:var(--accent);opacity:.6}}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;position:relative;z-index:1}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle,.n-toggle[aria-checked=true]{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb,.n-toggle[aria-checked=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{position:relative;z-index:1}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor;position:relative;z-index:1}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:linear-gradient(to right,var(--accent) var(--val, 0%),var(--bg-inset) var(--val, 0%));outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-runnable-track{height:10px;border-radius:var(--r-pill);background:transparent}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer;margin-top:-3px}.n-slider::-moz-range-track{height:10px;border-radius:var(--r-pill);background:var(--bg-inset)}.n-slider::-moz-range-progress{height:10px;border-radius:var(--r-pill);background:var(--accent)}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:linear-gradient(to right,rgba(255,255,255,.5) var(--val, 0%),rgba(255,255,255,.2) var(--val, 0%))}.n-card--accent .n-slider::-moz-range-track{background:#fff3}.n-card--accent .n-slider::-moz-range-progress{background:#ffffff80}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px;position:relative;z-index:1}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto;position:relative;z-index:1}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3);position:relative;z-index:1}.n-media__volume .n-slider{flex:1}.n-media__bg{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}.n-media__bg img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1);opacity:.25;transition:opacity .5s var(--ease-out)}.n-media__bg-overlay{position:absolute;inset:0;background:var(--accent);opacity:.15;mix-blend-mode:overlay}.n-card[data-on=true] .n-media__bg img{opacity:.35}.n-card[data-hero=true] .n-media__track{margin-top:8px}.n-card[data-hero=true] .n-media__title{font-size:18px}.n-card[data-hero=true] .n-media__controls{gap:20px;margin-top:12px}.n-card[data-hero=true] .n-media__controls .n-icon-btn--primary{width:52px;height:52px}.n-card[data-hero=true] .nido-cal-widget__title{font-size:24px;margin-top:8px}.n-card[data-hero=true] .nido-cal-widget__when{margin-top:6px;font-size:14px}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-weather-pill{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 10px;background:var(--bg-card);border:1px solid var(--ink-4);border-radius:999px;font-family:var(--font-sans);color:var(--ink-1)}.nido-weather-pill__icon{display:inline-flex;align-items:center;color:var(--accent)}.nido-weather-pill__temp{font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:-.01em}.nido-weather-pill__sep{width:1px;height:12px;background:var(--ink-4)}.nido-weather-pill__label{font-size:12px;color:var(--ink-3)}.nido-lights-pill-btn{background:none;border:none;padding:0;cursor:pointer;display:inline-flex;transition:transform .2s}.nido-lights-pill-btn:hover{transform:scale(1.04)}.nido-lights-pill-btn:active{transform:scale(.96)}.nido-lights-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 10px;background:var(--accent-soft);border-radius:var(--r-pill);font-family:var(--font-sans);color:var(--accent-deep)}.nido-lights-pill__count{font-family:var(--font-display);font-size:13px;font-weight:600;letter-spacing:-.01em}.nido-lights-pill__label{font-size:12px;opacity:.8}.nido-lights-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-lights-panel__title{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-lights-panel__count{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:28px;padding:0 8px;background:var(--accent-soft);color:var(--accent-deep);border-radius:var(--r-pill);font-family:var(--font-display);font-size:14px;font-weight:600}.nido-lights-list{display:flex;flex-direction:column;gap:10px}.nido-lights-row{display:flex;align-items:center;gap:14px;background:var(--bg-card);border-radius:var(--r-lg);padding:14px 16px;transition:opacity .2s}.nido-lights-row.is-pending{opacity:.6;pointer-events:none}.nido-lights-row__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-lights-row__body{flex:1;min-width:0}.nido-lights-row__name{font-family:var(--font-display);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-lights-row__room{font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:2px;text-transform:uppercase;letter-spacing:.06em}.nido-lights-row__pct{font-family:var(--font-mono);font-size:13px;color:var(--ink-3);flex-shrink:0}.nido-lights-panel__footer{padding:16px 32px 24px;border-top:1px solid var(--ink-4)}.nido-lights-panel__all-off{width:100%;padding:12px;border-radius:var(--r-pill);border:1px solid var(--ink-4);background:var(--bg-card);color:var(--ink-1);font-family:var(--font-display);font-size:15px;font-weight:600;cursor:pointer;transition:background .18s,color .18s}.nido-lights-panel__all-off:hover{background:var(--ink-1);color:var(--bg-shell);border-color:var(--ink-1)}.nido-lights-panel__all-off:disabled{opacity:.5;cursor:not-allowed}.nido-cal-widget{cursor:pointer;transition:transform .2s var(--ease-spring),background .2s}.nido-cal-widget:hover{transform:translateY(-2px)}.nido-cal-widget:active{transform:scale(.98)}.nido-cal-widget__bubble{background:color-mix(in srgb,var(--cal-color, var(--ink-3)) 14%,var(--bg-inset))!important;color:var(--cal-color, var(--ink-3))!important}.nido-cal-widget__title{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.01em;line-height:1.2;color:var(--ink-1)}.nido-cal-widget__when{display:flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:auto}.nido-cal-widget__sep{opacity:.5}.nido-cal-widget__time{font-family:var(--font-mono);font-size:11px;letter-spacing:.04em}.nido-cal-panel__legend{display:flex;align-items:center;gap:16px;padding:10px 32px 12px;border-bottom:1px solid var(--ink-4)}.nido-cal-panel__legend-item{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}.nido-cal-panel__legend-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}.nido-cal-panel__days{display:flex;flex-direction:column;gap:0}.nido-cal-panel__day{display:flex;align-items:flex-start;gap:16px;padding:14px 0;border-bottom:1px dashed var(--ink-4)}.nido-cal-panel__day:last-child{border-bottom:none}.nido-cal-panel__badge{width:44px;height:44px;border-radius:var(--r-md);background:var(--bg-shell);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s}.nido-cal-panel__day.is-today .nido-cal-panel__badge{background:var(--accent-soft)}.nido-cal-panel__badge-day{font-family:var(--font-mono);font-size:9px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.1em}.nido-cal-panel__day.is-today .nido-cal-panel__badge-day{color:var(--accent-deep)}.nido-cal-panel__badge-num{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-cal-panel__day.is-today .nido-cal-panel__badge-num{color:var(--accent-deep)}.nido-cal-panel__events{flex:1;display:flex;flex-direction:column;gap:8px;padding-top:4px}.nido-cal-panel__empty{font-family:var(--font-sans);font-size:13px;color:var(--ink-4);line-height:44px}.nido-cal-panel__event{display:flex;align-items:flex-start;gap:10px}.nido-cal-panel__event-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px}.nido-cal-panel__event-body{flex:1;min-width:0}.nido-cal-panel__event-title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-cal-panel__event-who{font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-3);display:block;margin-top:2px}.nido-cal-panel__event-time{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.04em;flex-shrink:0;padding-top:2px}.n-weather__icon{color:var(--accent)}.n-weather__readout{display:flex;align-items:baseline;gap:4px;margin-top:6px}.n-weather__meta{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;color:var(--ink-3)}.n-weather__sep{width:3px;height:3px;border-radius:50%;background:var(--ink-4)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__head-right{display:flex;align-items:center;gap:6px}.nido-room-card__presence{display:flex}.nido-room-card__avatar{width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);object-fit:cover;margin-left:-6px;background:var(--accent)}.nido-room-card__avatar:first-child{margin-left:0}.nido-room-card__avatar--initial{display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:var(--bg);background:var(--accent);letter-spacing:0}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:hidden;max-height:100vh;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1 1 0;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:0;overflow:hidden;box-sizing:border-box}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__search{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);margin-bottom:12px}.n-ob-ent__search-icon{display:flex;color:var(--ink-3);flex-shrink:0}.n-ob-ent__search-input{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--ink-1);font-family:var(--font-sans);font-size:13px}.n-ob-ent__search-input::placeholder{color:var(--ink-3)}.n-ob-ent__search-clear{border:none;background:transparent;cursor:pointer;color:var(--ink-3);padding:4px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center}.n-ob-ent__search-clear:hover{background:var(--bg-shell);color:var(--ink-1)}.n-ob-ent__empty{grid-column:1 / -1;padding:24px;border-radius:var(--r-md);background:var(--bg-card);font-family:var(--font-sans);font-size:13px;color:var(--ink-3);text-align:center}.n-ob-ent__grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:56vh;padding-right:4px;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;word-break:break-word}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step{gap:20px}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}@media(max-width:600px){.n-ob{padding:8px;overflow:hidden}.n-ob__shell{padding:16px;border-radius:var(--r-xl);min-height:0;height:100%}.n-ob__header{margin-bottom:16px;gap:8px;flex-wrap:nowrap;flex:0 0 auto}.n-ob__brand-mark{width:30px;height:30px}.n-ob__brand-name{font-size:14px}.n-ob__step-count{display:none}.n-ob__skip{font-size:12px;padding:4px}.n-ob__body{display:block;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.n-ob-step{gap:16px}.n-ob__h1{font-size:clamp(28px,8vw,40px);margin-bottom:16px}.n-ob__lead{font-size:14px;margin-bottom:16px}.n-ob__eyebrow{margin-bottom:12px;font-size:10px}.n-ob__footer{margin-top:16px;gap:8px;flex:0 0 auto}.n-ob__back{padding:10px 14px;font-size:13px}.n-ob__primary{padding:12px 18px;font-size:13px}.n-ob-welcome-illus{max-width:260px}.n-ob-steps-overview{gap:16px;margin-top:20px}.n-ob-recap__grid{grid-template-columns:1fr 1fr;gap:8px}.n-ob-recap__value{font-size:22px}.n-ob-step__illus{min-height:180px}.n-ob-step__illus svg{width:220px;height:220px}.n-ob-pill-card{margin-top:16px;padding:12px}.n-ob-ent__count{font-size:22px}.n-ob-ent__rail{margin-bottom:4px}.n-ob-ent__list{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;max-height:none;gap:6px;padding-bottom:6px;-webkit-overflow-scrolling:touch}.n-ob-ent__rail-row{flex-shrink:0;padding:6px 10px 6px 6px;gap:8px;border-radius:var(--r-pill);border:1px solid var(--ink-4)}.n-ob-ent__rail-row.is-active{border-color:var(--ink-1)}.n-ob-ent__rail-icon{width:22px;height:22px}.n-ob-ent__rail-label{font-size:12px;flex:0 0 auto}.n-ob-ent__rail-count{font-size:10px}.n-ob-ent__head{flex-wrap:wrap;margin-bottom:10px;gap:8px}.n-ob-ent__title{font-size:18px}.n-ob-ent__head-actions{width:100%}.n-ob-ent__head-actions .n-pill-btn{flex:1;padding:6px 10px;font-size:12px}.n-ob-ent__search{padding:8px 12px;margin-bottom:8px}.n-ob-ent__search-input{font-size:14px}.n-ob-ent__grid{max-height:none;padding-right:0}.n-ob-ent-card{padding:10px;gap:10px}.n-ob-ent-card__icon{width:32px;height:32px}.n-ob-theme__grid{gap:8px}.n-ob-theme__tile{padding:10px}.n-ob-theme__name{font-size:14px}.n-ob-preview{padding:16px}.n-ob-preview__greet{font-size:22px}.n-ob-family{padding:12px;min-height:0}.n-ob-family__list{max-height:none}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}.nido-weather-panel{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end}.nido-weather-panel__backdrop{position:absolute;inset:0;background:#0006;backdrop-filter:blur(1px);animation:fade-in .3s ease-out}.nido-weather-panel__content{position:relative;width:100%;max-width:480px;background:var(--bg-shell);box-shadow:-4px 0 32px color-mix(in srgb,var(--accent) 15%,transparent);display:flex;flex-direction:column;animation:slide-in-right .3s cubic-bezier(.16,1,.3,1);overflow:hidden}.nido-weather-panel__header{padding:24px 32px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--fg-rgb),.05)}.nido-weather-panel__header h2{font-family:Comfortaa,sans-serif;font-size:1.5rem;font-weight:600;margin:0;color:var(--fg)}.nido-weather-panel__close{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;background:none;border-radius:50%;color:var(--ink-2);cursor:pointer;transition:background .15s,color .15s;flex-shrink:0}.nido-weather-panel__close:hover{background:rgba(var(--fg-rgb),.07);color:var(--fg)}.nido-weather-panel__scroll{flex:1;overflow-y:auto;padding:24px 32px;display:flex;flex-direction:column;gap:24px}.nido-wp-current{display:flex;align-items:center;gap:24px;padding:16px 0}.nido-wp-current svg{color:var(--accent)}.nido-wp-current-info{display:flex;flex-direction:column;gap:4px}.nido-wp-temp{font-size:3rem;font-weight:300;line-height:1;color:var(--fg);font-variant-numeric:tabular-nums}.nido-wp-desc{font-size:1.125rem;color:var(--fg-muted);text-transform:capitalize}.nido-wp-alert{display:flex;align-items:center;gap:12px;padding:16px;border-radius:12px;font-weight:500}.nido-wp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.nido-wp-card{background:var(--bg-card);padding:16px;border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;gap:8px}.nido-wp-card-head{display:flex;align-items:center;gap:8px;color:var(--fg-muted);font-size:.875rem}.nido-wp-card-val{font-size:1.125rem;font-weight:500;color:var(--fg)}.nido-wp-section h3{font-size:1rem;font-weight:600;color:var(--fg);margin:0 0 16px;font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:.05em;opacity:.8}.nido-wp-hourly{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;scrollbar-width:none}.nido-wp-hourly::-webkit-scrollbar{display:none}.nido-wp-hour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:60px;background:var(--bg-card);padding:16px 8px;border-radius:100px;border:1px solid var(--border)}.nido-wp-hour-time{font-size:.875rem;color:var(--fg-muted)}.nido-wp-hour svg{color:var(--accent)}.nido-wp-hour-temp{font-weight:600;font-size:1rem}.nido-wp-hour-precip{font-size:.75rem;color:#0ea5e9;font-weight:500}.nido-wp-daily{display:flex;flex-direction:column;gap:12px}.nido-wp-day{display:flex;align-items:center;gap:16px;padding:12px 16px;background:var(--bg-card);border-radius:12px;border:1px solid var(--border)}.nido-wp-day-name{width:100px;font-weight:500;color:var(--fg);text-transform:capitalize}.nido-wp-day svg{color:var(--accent)}.nido-wp-day-temps{flex:1;display:flex;align-items:center;gap:12px;justify-content:flex-end}.nido-wp-day-min{color:var(--fg-muted);width:32px;text-align:right}.nido-wp-day-max{font-weight:600;width:32px}.nido-wp-day-bar{flex:1;height:4px;background:var(--border);border-radius:2px;position:relative}.nido-weather-pill-btn{background:none;border:none;padding:0;margin:0;cursor:pointer;transition:transform .2s;border-radius:100px;display:inline-flex}.nido-weather-pill-btn:hover{transform:scale(1.05)}.nido-weather-pill-btn:active{transform:scale(.95)}.nido-home-pill{display:flex;align-items:center;gap:12px;background:transparent;border:1px solid var(--b-1);padding:6px 16px 6px 6px;border-radius:99px}.nido-home-pill__avatars{display:flex;align-items:center}.nido-home-pill__avatar{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--bg-shell);margin-left:-12px;position:relative;transition:transform .2s,z-index .2s}.nido-home-pill__avatar:first-child{margin-left:0}.nido-home-pill__avatar:hover{z-index:10;transform:translateY(-2px)}.nido-home-pill__text{font-size:15px;color:var(--ink-2);font-weight:500;white-space:nowrap}.nido-notification-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-notification-panel__backdrop{position:absolute;inset:0;background:#0003;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.nido-notification-panel__content{position:relative;width:100%;max-width:400px;height:100%;background:var(--bg-shell);box-shadow:-8px 0 32px #0000001a;display:flex;flex-direction:column;animation:nido-slide-in-right .4s var(--ease-out)}@keyframes nido-slide-in-right{0%{transform:translate(100%)}to{transform:translate(0)}}.nido-notification-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4)}.nido-notification-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-notification-panel__title-group{display:flex;align-items:baseline;gap:16px}.nido-notification-panel__clear-all{font-family:var(--font-mono);font-size:12px;color:var(--ink-3);background:none;border:none;padding:0;cursor:pointer;text-decoration:underline;transition:color .2s}.nido-notification-panel__clear-all:hover{color:var(--danger)}.nido-notification-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-notification-panel__close:hover{background:var(--ink-4)}.nido-notification-panel__scroll{flex:1;overflow-y:auto;padding:16px 32px 32px}.nido-notification-empty{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--ink-3);text-align:center}.nido-notification-empty__icon{margin-bottom:16px;opacity:.2}.nido-notification-list{display:flex;flex-direction:column;gap:12px}.nido-notification-item{position:relative;background:var(--bg-card);border-radius:var(--r-lg);padding:16px;display:flex;gap:14px;transition:transform .2s;border:1px solid transparent}.nido-notification-item:hover{transform:translateY(-2px)}.nido-notification-item__icon{width:40px;height:40px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-notification-item--info .nido-notification-item__icon{background:color-mix(in srgb,var(--accent) 15%,var(--bg-card));color:var(--accent)}.nido-notification-item--warning .nido-notification-item__icon{background:color-mix(in srgb,var(--danger) 15%,var(--bg-card));color:var(--danger)}.nido-notification-item--success .nido-notification-item__icon{background:color-mix(in srgb,var(--positive) 15%,var(--bg-card));color:var(--positive)}.nido-notification-item__body{flex:1;min-width:0}.nido-notification-item__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px}.nido-notification-item__title{font-family:var(--font-display);font-weight:600;font-size:15px;color:var(--ink-1)}.nido-notification-item__time{font-family:var(--font-mono);font-size:10px;color:var(--ink-3)}.nido-notification-item__message{margin:0;font-size:13px;color:var(--ink-2);line-height:1.4}.nido-notification-item__dismiss{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;border:none;background:transparent;color:var(--ink-3);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s,background .2s}.nido-notification-item:hover .nido-notification-item__dismiss{opacity:1}.nido-notification-item__dismiss:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-bell-btn{position:relative;background:transparent;color:var(--ink-2);padding:6px 12px;border:1px solid var(--ink-4);border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s;height:32px;min-width:44px}.nido-bell-btn:hover{background:var(--bg-inset);border-color:var(--ink-3)}.nido-bell-btn__badge{position:absolute;top:4px;right:8px;width:8px;height:8px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-shell)}.nido-topbar__actions>.nido-bell-btn,.nido-topbar__actions>.n-pill-btn--ghost{flex:0 0 auto;width:44px;height:32px;min-width:44px;padding:0;display:inline-flex;align-items:center;justify-content:center}@media(max-width:768px){.nido-topbar__actions{flex-direction:row;align-items:center;flex-wrap:wrap;justify-content:flex-end;gap:8px}.nido-weather-pill-btn,.nido-topbar__actions>.nido-weather-pill,.nido-lights-pill-btn{flex:0 0 100%;display:flex;justify-content:flex-end}}.nido-shopping-panel{position:fixed;inset:0;z-index:2000;display:flex;align-items:stretch;justify-content:center}.nido-shopping-panel__backdrop{position:absolute;inset:0;background:#00000059;backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}.nido-shopping-panel__content{position:relative;width:100%;height:100%;background:var(--bg-shell);display:flex;flex-direction:column;animation:nido-shopping-fade .25s var(--ease-out)}@keyframes nido-shopping-fade{0%{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}}.nido-shopping-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4);flex:0 0 auto}.nido-shopping-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-shopping-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-shopping-panel__close:hover{background:var(--ink-4)}.nido-shopping-panel__board{position:relative;flex:1 1 auto;min-height:0;background:var(--bg-shell);background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:24px 24px;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:24px}.nido-shopping-panel__sheet{position:relative;aspect-ratio:3 / 4;height:100%;max-height:100%;max-width:100%;background:var(--bg-card-elev);border:1px solid var(--ink-4);border-radius:var(--r-md);box-shadow:var(--shadow-lg);overflow:hidden}.nido-shopping-panel__canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;cursor:crosshair;display:block}.nido-shopping-panel__toolbar{position:absolute;bottom:20px;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:var(--s-3);background:var(--bg-card-elev);border:1px solid var(--ink-4);border-radius:var(--r-pill);padding:8px 12px;box-shadow:var(--shadow-lg);z-index:2}.nido-shopping-panel__tool{border:none;background:transparent;font-size:20px;line-height:1;width:44px;height:44px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--ink-2);transition:background .2s,color .2s}.nido-shopping-panel__tool:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-shopping-panel__tool--danger:hover{background:color-mix(in srgb,var(--danger) 12%,transparent);color:var(--danger)}.nido-shopping-panel__color{width:36px;height:36px;border:1px solid var(--ink-4);border-radius:50%;background:transparent;padding:0;cursor:pointer;overflow:hidden}.nido-shopping-panel__color::-webkit-color-swatch-wrapper{padding:0}.nido-shopping-panel__color::-webkit-color-swatch{border:none;border-radius:50%}.nido-shopping-panel__color::-moz-color-swatch{border:none;border-radius:50%}.nido-shopping-panel__size{width:100px;cursor:pointer;accent-color:var(--accent)}@media(max-width:768px){.nido-shopping-panel__header{padding:16px 20px}.nido-shopping-panel__toolbar{bottom:12px;gap:6px;padding:6px 8px}.nido-shopping-panel__size{width:70px}}@media(prefers-reduced-motion:reduce){.nido-shopping-panel__content{animation:none}}@keyframes nido-pulse{0%,to{opacity:1;transform:scale(1)}50%{opacity:.55;transform:scale(.7)}}@media(prefers-reduced-motion:reduce){.n-power-gauge__live-dot,.nido-energy__live-dot,.n-power-gauge__pill-dot{animation:none!important}}.nido-energy__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-energy__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-energy__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-energy__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-energy__head-actions{display:flex;gap:10px;align-items:center}.nido-energy__ha-link{text-decoration:none;display:inline-flex;align-items:center;gap:6px}.nido-energy__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-energy__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-energy__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-energy__icon-bg{position:absolute;inset:0;opacity:.2}.nido-energy__icon svg{position:relative}.nido-energy__hero-meta{display:flex;align-items:center;gap:10px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-energy__sep{width:4px;height:4px;border-radius:50%;background:var(--ink-4);display:inline-block}.nido-energy__live{display:inline-flex;align-items:center;gap:6px}.nido-energy__live-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:nido-pulse 1.4s ease-in-out infinite}.nido-energy__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-energy__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-energy__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-energy__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-energy__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-energy__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-energy__section{margin-top:28px}.nido-energy__live-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:16px;align-items:stretch}@media(max-width:720px){.nido-energy__hero{flex-direction:column;align-items:flex-start}.nido-energy__stats{width:100%;box-sizing:border-box}.nido-energy__live-grid{grid-template-columns:1fr}}.nido-energy-summary{display:grid;grid-template-columns:1fr;gap:16px}.n-power-gauge{position:relative;overflow:hidden;min-height:280px;box-sizing:border-box;display:flex;flex-direction:column}.n-power-gauge__deco{position:absolute;top:-60px;right:-60px;opacity:.18;color:var(--accent-ink);pointer-events:none}.n-power-gauge__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;gap:12px;position:relative}.n-power-gauge__head-text{min-width:0}.n-power-gauge__head-actions{display:flex;align-items:center;gap:8px}.n-power-gauge__live{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border-radius:var(--r-pill);background:#ffffff2e;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent-ink)}.n-power-gauge__live-dot{width:7px;height:7px;border-radius:50%;background:var(--accent-ink);animation:nido-pulse 1.4s ease-in-out infinite}.n-power-gauge__open{width:32px;height:32px;border-radius:var(--r-pill);background:#ffffff2e;color:var(--accent-ink);display:flex;align-items:center;justify-content:center}.n-power-gauge__chart{display:flex;justify-content:center;position:relative;margin-bottom:8px}.n-power-gauge__svg{display:block}.n-power-gauge__arc{transition:all .6s var(--ease-spring)}.n-power-gauge__readout{position:absolute;left:0;right:0;bottom:6px;display:flex;flex-direction:column;align-items:center;gap:4px;pointer-events:none}.n-power-gauge__value{font-family:var(--font-display);font-size:44px;font-weight:600;letter-spacing:-.04em;line-height:1;color:var(--accent-ink)}.n-power-gauge__unit{font-size:18px;opacity:.7;margin-left:4px}.n-power-gauge__sublabel{color:var(--accent-ink)!important;opacity:.7}.n-power-gauge__foot{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding-top:4px;font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent-ink);opacity:.85}.n-power-gauge__pill{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:var(--r-pill);background:#ffffff29;color:var(--accent-ink);opacity:1}.n-power-gauge__pill-dot{width:5px;height:5px;border-radius:50%;background:var(--accent-ink)}.n-power-gauge__unavailable{text-align:center;padding:32px 0;color:var(--accent-ink);opacity:.85}.n-subscription-guard{min-height:280px;box-sizing:border-box;display:flex;flex-direction:column}.n-subscription-guard__head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:12px}.n-subscription-guard__pill{flex:0 0 auto;white-space:nowrap;font-size:11px}.n-subscription-guard__pill.is-watch{background:var(--accent-soft);color:var(--accent-deep);border-color:transparent}.n-subscription-guard__pill.is-danger{background:var(--warning);color:#fff;border-color:transparent}.n-subscription-guard__chart{position:relative;width:160px;height:160px;margin:8px auto 0}.n-subscription-guard__arc{transition:stroke-dasharray .6s var(--ease-spring),stroke .24s}.n-subscription-guard__readout{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.n-subscription-guard__value{font-family:var(--font-display);font-size:36px;font-weight:600;letter-spacing:-.04em;line-height:1}.n-subscription-guard__unit{font-size:16px;opacity:.7;margin-left:2px}.n-subscription-guard__sub{margin-top:6px;display:block}.n-subscription-guard__msg{margin-top:12px;font-size:12px;color:var(--ink-2);text-align:center}.n-hourly{min-height:320px;box-sizing:border-box;display:flex;flex-direction:column}.n-hourly__head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:18px;flex-wrap:wrap}.n-hourly__total-row{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}.n-hourly__total{font-family:var(--font-display);font-size:44px;font-weight:600;letter-spacing:-.04em;line-height:1;color:var(--ink-1)}.n-hourly__total-unit{font-size:22px;opacity:.6;margin-left:4px}.n-hourly__delta{font-size:11px}.n-hourly__modes{display:flex;gap:6px;flex-wrap:wrap}.n-hourly__modes .n-pill-btn{flex:0 0 auto}.n-hourly__modes .is-disabled{opacity:.5;pointer-events:none}.n-hourly__loading{padding:60px 0;text-align:center}.n-bars{position:relative;height:160px;margin-top:8px}.n-bars--empty{display:flex;align-items:center;justify-content:center}.n-bars__avg{position:absolute;left:0;right:0;height:1px;border-top:1px dashed var(--ink-4);pointer-events:none}.n-bars__avg-label{position:absolute;right:0;top:-16px;font-family:var(--font-mono);font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3)}.n-bars__grid{display:flex;align-items:flex-end;gap:4px;height:100%}.n-bars__col{flex:1;height:100%;display:flex;flex-direction:column;justify-content:flex-end;position:relative}.n-bars__bar{border-radius:4px;min-height:3px;transition:height .6s var(--ease-spring)}.n-bars__bar.is-now{background:var(--accent-deep)}.n-bars__bar.is-peak{background:var(--accent)}.n-bars__bar.is-past{background:var(--accent-soft)}.n-bars__bar.is-future{background:transparent;border:1px dashed var(--ink-4)}.n-bars__now-label{position:absolute;top:-22px;left:50%;transform:translate(-50%);font-family:var(--font-mono);font-size:9px;letter-spacing:.08em;color:var(--accent-deep);white-space:nowrap;font-weight:600}.n-bars__axis{display:flex;justify-content:space-between;margin-top:10px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);letter-spacing:.1em;text-transform:uppercase}.n-top-consumers{min-height:240px;box-sizing:border-box}.n-top-consumers__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px;gap:12px}.n-top-consumers__list{display:flex;flex-direction:column;gap:14px}.n-top-consumers__row{display:grid;grid-template-columns:auto 1fr auto;gap:14px;align-items:center}.n-top-consumers__row[role=button]{cursor:pointer}.n-top-consumers__bubble{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-top-consumers__bubble.is-first{background:var(--accent-soft);color:var(--accent-deep)}.n-top-consumers__body{min-width:0}.n-top-consumers__line{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:6px}.n-top-consumers__name-wrap{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.n-top-consumers__name{font-family:var(--font-display);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1)}.n-top-consumers__room{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin-left:8px}.n-top-consumers__value{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em;color:var(--ink-1)}.n-top-consumers__value.is-first{color:var(--accent-deep)}.n-top-consumers__unit{font-size:11px;opacity:.6;margin-left:2px}.n-top-consumers__meter{display:flex;align-items:center}.n-top-consumers__bar{flex:1;height:6px;background:var(--bg-inset);border-radius:var(--r-pill);overflow:hidden}.n-top-consumers__bar-fill{height:100%;background:var(--ink-4);border-radius:var(--r-pill);transition:width .6s var(--ease-spring)}.n-top-consumers__bar-fill.is-first{background:var(--accent)}.n-top-consumers__chevron{width:32px;height:32px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center}.n-top-consumers__empty{padding:24px 0;text-align:center}', at = "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let rt = !1;
function Ar() {
  if (rt || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${at}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = at, document.head.appendChild(t);
  }
  rt = !0;
}
class Er extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, Ar();
    const t = this.attachShadow({ mode: "open" }), i = document.createElement("style");
    i.textContent = `${Sr}
${Cr}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(i, this._mountPoint);
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
    const { theme: t, mode: i } = wt();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", i), this._render();
  }
  disconnectedCallback() {
    Cn(null, this._mountPoint);
  }
  applyTheme(t, i) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", i);
  }
  _render() {
    Cn(dt(Ir, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", Er);
console.info(
  "%c NIDO %c v0.3.1 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
