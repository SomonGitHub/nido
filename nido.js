var xe, C, In, q, Xe, Sn, An, Ie, ue, Q, Cn, De, Ce, ze, be = {}, ge = [], st = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ke = Array.isArray;
function W(n, t) {
  for (var r in t) n[r] = t[r];
  return n;
}
function Le(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function zn(n, t, r) {
  var i, o, a, s = {};
  for (a in t) a == "key" ? i = t[a] : a == "ref" ? o = t[a] : s[a] = t[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? xe.call(arguments, 2) : r), typeof n == "function" && n.defaultProps != null) for (a in n.defaultProps) s[a] === void 0 && (s[a] = n.defaultProps[a]);
  return _e(n, s, i, o, null);
}
function _e(n, t, r, i, o) {
  var a = { type: n, props: t, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++In, __i: -1, __u: 0 };
  return o == null && C.vnode != null && C.vnode(a), a;
}
function H(n) {
  return n.children;
}
function he(n, t) {
  this.props = n, this.context = t;
}
function X(n, t) {
  if (t == null) return n.__ ? X(n.__, n.__i + 1) : null;
  for (var r; t < n.__k.length; t++) if ((r = n.__k[t]) != null && r.__e != null) return r.__e;
  return typeof n.type == "function" ? X(n) : null;
}
function ct(n) {
  if (n.__P && n.__d) {
    var t = n.__v, r = t.__e, i = [], o = [], a = W({}, t);
    a.__v = t.__v + 1, C.vnode && C.vnode(a), Oe(n.__P, a, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [r] : null, i, r ?? X(t), !!(32 & t.__u), o), a.__v = t.__v, a.__.__k[a.__i] = a, $n(i, a, o), t.__e = t.__ = null, a.__e != r && En(a);
  }
}
function En(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), En(n);
}
function Ke(n) {
  (!n.__d && (n.__d = !0) && q.push(n) && !ve.__r++ || Xe != C.debounceRendering) && ((Xe = C.debounceRendering) || Sn)(ve);
}
function ve() {
  try {
    for (var n, t = 1; q.length; ) q.length > t && q.sort(An), n = q.shift(), t = q.length, ct(n);
  } finally {
    q.length = ve.__r = 0;
  }
}
function Tn(n, t, r, i, o, a, s, c, p, l, h) {
  var d, _, u, b, g, f, m, v = i && i.__k || ge, I = t.length;
  for (p = lt(r, t, v, p, I), d = 0; d < I; d++) (u = r.__k[d]) != null && (_ = u.__i != -1 && v[u.__i] || be, u.__i = d, f = Oe(n, u, _, o, a, s, c, p, l, h), b = u.__e, u.ref && _.ref != u.ref && (_.ref && Ve(_.ref, null, u), h.push(u.ref, u.__c || b, u)), g == null && b != null && (g = b), (m = !!(4 & u.__u)) || _.__k === u.__k ? (p = Pn(u, p, n, m), m && _.__e && (_.__e = null)) : typeof u.type == "function" && f !== void 0 ? p = f : b && (p = b.nextSibling), u.__u &= -7);
  return r.__e = g, p;
}
function lt(n, t, r, i, o) {
  var a, s, c, p, l, h = r.length, d = h, _ = 0;
  for (n.__k = new Array(o), a = 0; a < o; a++) (s = t[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = n.__k[a] = _e(null, s, null, null, null) : ke(s) ? s = n.__k[a] = _e(H, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = n.__k[a] = _e(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : n.__k[a] = s, p = a + _, s.__ = n, s.__b = n.__b + 1, c = null, (l = s.__i = dt(s, r, p, d)) != -1 && (d--, (c = r[l]) && (c.__u |= 2)), c == null || c.__v == null ? (l == -1 && (o > h ? _-- : o < h && _++), typeof s.type != "function" && (s.__u |= 4)) : l != p && (l == p - 1 ? _-- : l == p + 1 ? _++ : (l > p ? _-- : _++, s.__u |= 4))) : n.__k[a] = null;
  if (d) for (a = 0; a < h; a++) (c = r[a]) != null && (2 & c.__u) == 0 && (c.__e == i && (i = X(c)), Dn(c, c));
  return i;
}
function Pn(n, t, r, i) {
  var o, a;
  if (typeof n.type == "function") {
    for (o = n.__k, a = 0; o && a < o.length; a++) o[a] && (o[a].__ = n, t = Pn(o[a], t, r, i));
    return t;
  }
  n.__e != t && (i && (t && n.type && !t.parentNode && (t = X(n)), r.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function dt(n, t, r, i) {
  var o, a, s, c = n.key, p = n.type, l = t[r], h = l != null && (2 & l.__u) == 0;
  if (l === null && c == null || h && c == l.key && p == l.type) return r;
  if (i > (h ? 1 : 0)) {
    for (o = r - 1, a = r + 1; o >= 0 || a < t.length; ) if ((l = t[s = o >= 0 ? o-- : a++]) != null && (2 & l.__u) == 0 && c == l.key && p == l.type) return s;
  }
  return -1;
}
function Qe(n, t, r) {
  t[0] == "-" ? n.setProperty(t, r ?? "") : n[t] = r == null ? "" : typeof r != "number" || st.test(t) ? r : r + "px";
}
function se(n, t, r, i, o) {
  var a, s;
  e: if (t == "style") if (typeof r == "string") n.style.cssText = r;
  else {
    if (typeof i == "string" && (n.style.cssText = i = ""), i) for (t in i) r && t in r || Qe(n.style, t, "");
    if (r) for (t in r) i && r[t] == i[t] || Qe(n.style, t, r[t]);
  }
  else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(Cn, "$1")), s = t.toLowerCase(), t = s in n || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + a] = r, r ? i ? r[Q] = i[Q] : (r[Q] = De, n.addEventListener(t, a ? ze : Ce, a)) : n.removeEventListener(t, a ? ze : Ce, a);
  else {
    if (o == "http://www.w3.org/2000/svg") t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in n) try {
      n[t] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && t[4] != "-" ? n.removeAttribute(t) : n.setAttribute(t, t == "popover" && r == 1 ? "" : r));
  }
}
function en(n) {
  return function(t) {
    if (this.l) {
      var r = this.l[t.type + n];
      if (t[ue] == null) t[ue] = De++;
      else if (t[ue] < r[Q]) return;
      return r(C.event ? C.event(t) : t);
    }
  };
}
function Oe(n, t, r, i, o, a, s, c, p, l) {
  var h, d, _, u, b, g, f, m, v, I, z, N, L, E, R, D = t.type;
  if (t.constructor !== void 0) return null;
  128 & r.__u && (p = !!(32 & r.__u), a = [c = t.__e = r.__e]), (h = C.__b) && h(t);
  e: if (typeof D == "function") try {
    if (m = t.props, v = D.prototype && D.prototype.render, I = (h = D.contextType) && i[h.__c], z = h ? I ? I.props.value : h.__ : i, r.__c ? f = (d = t.__c = r.__c).__ = d.__E : (v ? t.__c = d = new D(m, z) : (t.__c = d = new he(m, z), d.constructor = D, d.render = ut), I && I.sub(d), d.state || (d.state = {}), d.__n = i, _ = d.__d = !0, d.__h = [], d._sb = []), v && d.__s == null && (d.__s = d.state), v && D.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = W({}, d.__s)), W(d.__s, D.getDerivedStateFromProps(m, d.__s))), u = d.props, b = d.state, d.__v = t, _) v && D.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), v && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (v && D.getDerivedStateFromProps == null && m !== u && d.componentWillReceiveProps != null && d.componentWillReceiveProps(m, z), t.__v == r.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(m, d.__s, z) === !1) {
        t.__v != r.__v && (d.props = m, d.state = d.__s, d.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(j) {
          j && (j.__ = t);
        }), ge.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && s.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(m, d.__s, z), v && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(u, b, g);
      });
    }
    if (d.context = z, d.props = m, d.__P = n, d.__e = !1, N = C.__r, L = 0, v) d.state = d.__s, d.__d = !1, N && N(t), h = d.render(d.props, d.state, d.context), ge.push.apply(d.__h, d._sb), d._sb = [];
    else do
      d.__d = !1, N && N(t), h = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++L < 25);
    d.state = d.__s, d.getChildContext != null && (i = W(W({}, i), d.getChildContext())), v && !_ && d.getSnapshotBeforeUpdate != null && (g = d.getSnapshotBeforeUpdate(u, b)), E = h != null && h.type === H && h.key == null ? Nn(h.props.children) : h, c = Tn(n, ke(E) ? E : [E], t, r, i, o, a, s, c, p, l), d.base = t.__e, t.__u &= -161, d.__h.length && s.push(d), f && (d.__E = d.__ = null);
  } catch (j) {
    if (t.__v = null, p || a != null) if (j.then) {
      for (t.__u |= p ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
      a[a.indexOf(c)] = null, t.__e = c;
    } else {
      for (R = a.length; R--; ) Le(a[R]);
      Ee(t);
    }
    else t.__e = r.__e, t.__k = r.__k, j.then || Ee(t);
    C.__e(j, t, r);
  }
  else a == null && t.__v == r.__v ? (t.__k = r.__k, t.__e = r.__e) : c = t.__e = pt(r.__e, t, r, i, o, a, s, p, l);
  return (h = C.diffed) && h(t), 128 & t.__u ? void 0 : c;
}
function Ee(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(Ee));
}
function $n(n, t, r) {
  for (var i = 0; i < r.length; i++) Ve(r[i], r[++i], r[++i]);
  C.__c && C.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(a) {
        a.call(o);
      });
    } catch (a) {
      C.__e(a, o.__v);
    }
  });
}
function Nn(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : ke(n) ? n.map(Nn) : W({}, n);
}
function pt(n, t, r, i, o, a, s, c, p) {
  var l, h, d, _, u, b, g, f = r.props || be, m = t.props, v = t.type;
  if (v == "svg" ? o = "http://www.w3.org/2000/svg" : v == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), a != null) {
    for (l = 0; l < a.length; l++) if ((u = a[l]) && "setAttribute" in u == !!v && (v ? u.localName == v : u.nodeType == 3)) {
      n = u, a[l] = null;
      break;
    }
  }
  if (n == null) {
    if (v == null) return document.createTextNode(m);
    n = document.createElementNS(o, v, m.is && m), c && (C.__m && C.__m(t, a), c = !1), a = null;
  }
  if (v == null) f === m || c && n.data == m || (n.data = m);
  else {
    if (a = a && xe.call(n.childNodes), !c && a != null) for (f = {}, l = 0; l < n.attributes.length; l++) f[(u = n.attributes[l]).name] = u.value;
    for (l in f) u = f[l], l == "dangerouslySetInnerHTML" ? d = u : l == "children" || l in m || l == "value" && "defaultValue" in m || l == "checked" && "defaultChecked" in m || se(n, l, null, u, o);
    for (l in m) u = m[l], l == "children" ? _ = u : l == "dangerouslySetInnerHTML" ? h = u : l == "value" ? b = u : l == "checked" ? g = u : c && typeof u != "function" || f[l] === u || se(n, l, u, f[l], o);
    if (h) c || d && (h.__html == d.__html || h.__html == n.innerHTML) || (n.innerHTML = h.__html), t.__k = [];
    else if (d && (n.innerHTML = ""), Tn(t.type == "template" ? n.content : n, ke(_) ? _ : [_], t, r, i, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, a, s, a ? a[0] : r.__k && X(r, 0), c, p), a != null) for (l = a.length; l--; ) Le(a[l]);
    c || (l = "value", v == "progress" && b == null ? n.removeAttribute("value") : b != null && (b !== n[l] || v == "progress" && !b || v == "option" && b != f[l]) && se(n, l, b, f[l], o), l = "checked", g != null && g != n[l] && se(n, l, g, f[l], o));
  }
  return n;
}
function Ve(n, t, r) {
  try {
    if (typeof n == "function") {
      var i = typeof n.__u == "function";
      i && n.__u(), i && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    C.__e(o, r);
  }
}
function Dn(n, t, r) {
  var i, o;
  if (C.unmount && C.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || Ve(i, null, t)), (i = n.__c) != null) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (a) {
      C.__e(a, t);
    }
    i.base = i.__P = null;
  }
  if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && Dn(i[o], t, r || typeof n.type != "function");
  r || Le(n.__e), n.__c = n.__ = n.__e = void 0;
}
function ut(n, t, r) {
  return this.constructor(n, r);
}
function nn(n, t, r) {
  var i, o, a, s;
  t == document && (t = document.documentElement), C.__ && C.__(n, t), o = (i = !1) ? null : t.__k, a = [], s = [], Oe(t, n = t.__k = zn(H, null, [n]), o || be, be, t.namespaceURI, o ? null : t.firstChild ? xe.call(t.childNodes) : null, a, o ? o.__e : t.firstChild, i, s), $n(a, n, s);
}
xe = ge.slice, C = { __e: function(n, t, r, i) {
  for (var o, a, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((a = o.constructor) && a.getDerivedStateFromError != null && (o.setState(a.getDerivedStateFromError(n)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, i || {}), s = o.__d), s) return o.__E = o;
  } catch (c) {
    n = c;
  }
  throw n;
} }, In = 0, he.prototype.setState = function(n, t) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = W({}, this.state), typeof n == "function" && (n = n(W({}, r), this.props)), n && W(r, n), n != null && this.__v && (t && this._sb.push(t), Ke(this));
}, he.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Ke(this));
}, he.prototype.render = H, q = [], Sn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, An = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, ve.__r = 0, Ie = Math.random().toString(8), ue = "__d" + Ie, Q = "__a" + Ie, Cn = /(PointerCapture)$|Capture$/i, De = 0, Ce = en(!1), ze = en(!0);
var _t = 0;
function e(n, t, r, i, o, a) {
  t || (t = {});
  var s, c, p = t;
  if ("ref" in p) for (c in p = {}, t) c == "ref" ? s = t[c] : p[c] = t[c];
  var l = { type: n, props: p, key: r, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --_t, __i: -1, __u: 0, __source: o, __self: a };
  if (typeof n == "function" && (s = n.defaultProps)) for (c in s) p[c] === void 0 && (p[c] = s[c]);
  return C.vnode && C.vnode(l), l;
}
var ne, P, Se, tn, te = 0, Ln = [], $ = C, rn = $.__b, an = $.__r, on = $.diffed, sn = $.__c, cn = $.unmount, ln = $.__;
function Re(n, t) {
  $.__h && $.__h(P, n, te || t), te = 0;
  var r = P.__H || (P.__H = { __: [], __h: [] });
  return n >= r.__.length && r.__.push({}), r.__[n];
}
function k(n) {
  return te = 1, ht(Vn, n);
}
function ht(n, t, r) {
  var i = Re(ne++, 2);
  if (i.t = n, !i.__c && (i.__ = [Vn(void 0, t), function(c) {
    var p = i.__N ? i.__N[0] : i.__[0], l = i.t(p, c);
    p !== l && (i.__N = [l, i.__[1]], i.__c.setState({}));
  }], i.__c = P, !P.__f)) {
    var o = function(c, p, l) {
      if (!i.__c.__H) return !0;
      var h = i.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (h.every(function(_) {
        return !_.__N;
      })) return !a || a.call(this, c, p, l);
      var d = i.__c.props !== c;
      return h.some(function(_) {
        if (_.__N) {
          var u = _.__[0];
          _.__ = _.__N, _.__N = void 0, u !== _.__[0] && (d = !0);
        }
      }), a && a.call(this, c, p, l) || d;
    };
    P.__f = !0;
    var a = P.shouldComponentUpdate, s = P.componentWillUpdate;
    P.componentWillUpdate = function(c, p, l) {
      if (this.__e) {
        var h = a;
        a = void 0, o(c, p, l), a = h;
      }
      s && s.call(this, c, p, l);
    }, P.shouldComponentUpdate = o;
  }
  return i.__N || i.__;
}
function ae(n, t) {
  var r = Re(ne++, 3);
  !$.__s && On(r.__H, t) && (r.__ = n, r.u = t, P.__H.__h.push(r));
}
function G(n) {
  return te = 5, V(function() {
    return { current: n };
  }, []);
}
function V(n, t) {
  var r = Re(ne++, 7);
  return On(r.__H, t) && (r.__ = n(), r.__H = t, r.__h = n), r.__;
}
function dn(n, t) {
  return te = 8, V(function() {
    return n;
  }, t);
}
function ft() {
  for (var n; n = Ln.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(fe), t.__h.some(Te), t.__h = [];
    } catch (r) {
      t.__h = [], $.__e(r, n.__v);
    }
  }
}
$.__b = function(n) {
  P = null, rn && rn(n);
}, $.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), ln && ln(n, t);
}, $.__r = function(n) {
  an && an(n), ne = 0;
  var t = (P = n.__c).__H;
  t && (Se === P ? (t.__h = [], P.__h = [], t.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (t.__h.some(fe), t.__h.some(Te), t.__h = [], ne = 0)), Se = P;
}, $.diffed = function(n) {
  on && on(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (Ln.push(t) !== 1 && tn === $.requestAnimationFrame || ((tn = $.requestAnimationFrame) || mt)(ft)), t.__H.__.some(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), Se = P = null;
}, $.__c = function(n, t) {
  t.some(function(r) {
    try {
      r.__h.some(fe), r.__h = r.__h.filter(function(i) {
        return !i.__ || Te(i);
      });
    } catch (i) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], $.__e(i, r.__v);
    }
  }), sn && sn(n, t);
}, $.unmount = function(n) {
  cn && cn(n);
  var t, r = n.__c;
  r && r.__H && (r.__H.__.some(function(i) {
    try {
      fe(i);
    } catch (o) {
      t = o;
    }
  }), r.__H = void 0, t && $.__e(t, r.__v));
};
var pn = typeof requestAnimationFrame == "function";
function mt(n) {
  var t, r = function() {
    clearTimeout(i), pn && cancelAnimationFrame(t), setTimeout(n);
  }, i = setTimeout(r, 35);
  pn && (t = requestAnimationFrame(r));
}
function fe(n) {
  var t = P, r = n.__c;
  typeof r == "function" && (n.__c = void 0, r()), P = t;
}
function Te(n) {
  var t = P;
  n.__c = n.__(), P = t;
}
function On(n, t) {
  return !n || n.length !== t.length || t.some(function(r, i) {
    return r !== n[i];
  });
}
function Vn(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function bt(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((r, i) => r.name.localeCompare(i.name, "fr"));
}
async function gt(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function vt(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function yt(n) {
  return n.split(".")[0] ?? "";
}
function xt(n, t, r) {
  const i = new Map(r.map((s) => [s.id, s.area_id])), o = new Map(t.map((s) => [s.entity_id, s])), a = [];
  for (const [s, c] of Object.entries(n.states)) {
    const p = o.get(s);
    if (p?.disabled_by || p?.hidden_by) continue;
    const l = p?.area_id ?? (p?.device_id ? i.get(p.device_id) ?? null : null), h = p?.name ?? c.attributes.friendly_name ?? p?.original_name ?? s;
    a.push({
      entity_id: s,
      domain: yt(s),
      area_id: l,
      friendly_name: h,
      state: c
    });
  }
  return a;
}
function kt(n) {
  const t = /* @__PURE__ */ new Map();
  for (const r of n) {
    const i = t.get(r.area_id) ?? [];
    i.push(r), t.set(r.area_id, i);
  }
  return t;
}
function Rn(n) {
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
      const r = n.state.attributes.current_position;
      return typeof r == "number" ? r > 0 : t === "open" || t === "opening" || t === "closing";
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
function jn(n) {
  const t = {};
  for (const r of n) {
    if (r.domain !== "sensor") continue;
    const i = r.state.attributes.device_class, o = r.state.attributes.unit_of_measurement ?? "", a = r.state.state;
    a === "unavailable" || a === "unknown" || (i === "temperature" && !t.temperature ? t.temperature = { value: a, unit: o } : i === "humidity" && !t.humidity ? t.humidity = { value: a, unit: o } : i === "illuminance" && !t.illuminance && (t.illuminance = { value: a, unit: o }));
  }
  return t;
}
const O = {
  favorites: "nido.favorites",
  exposed: "nido.exposed",
  excludedUsers: "nido.excludedUsers",
  roomsOrder: "nido.roomsOrder",
  roomEntitiesOrder: "nido.roomEntitiesOrder",
  onboarded: "nido.onboarded",
  theme: "nido.theme",
  mode: "nido.mode"
}, Fn = ["terracotta", "miel", "sauge", "cosy"], wt = ["light", "dark"];
function U() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function Mt() {
  const n = U();
  if (!n) return [];
  const t = n.getItem(O.favorites);
  if (!t) return [];
  try {
    const r = JSON.parse(t);
    return Array.isArray(r) ? r.filter((i) => typeof i == "string") : [];
  } catch {
    return [];
  }
}
function Pe(n) {
  const t = U();
  t && t.setItem(O.favorites, JSON.stringify(n));
}
function je(n) {
  const t = U();
  if (!t) return [];
  const r = t.getItem(n);
  if (!r) return [];
  try {
    const i = JSON.parse(r);
    return Array.isArray(i) ? i.filter((o) => typeof o == "string") : [];
  } catch {
    return [];
  }
}
function Fe(n, t) {
  const r = U();
  r && r.setItem(n, JSON.stringify(t));
}
const It = () => je(O.exposed), un = (n) => Fe(O.exposed, n), St = () => je(O.excludedUsers), _n = (n) => Fe(O.excludedUsers, n), At = () => je(O.roomsOrder), Ct = (n) => Fe(O.roomsOrder, n);
function zt() {
  const n = U();
  if (!n) return {};
  const t = n.getItem(O.roomEntitiesOrder);
  if (!t) return {};
  try {
    const r = JSON.parse(t);
    if (typeof r != "object" || r === null) return {};
    const i = {};
    for (const [o, a] of Object.entries(r))
      Array.isArray(a) && (i[o] = a.filter((s) => typeof s == "string"));
    return i;
  } catch {
    return {};
  }
}
function Et(n) {
  const t = U();
  t && t.setItem(O.roomEntitiesOrder, JSON.stringify(n));
}
function hn() {
  return U()?.getItem(O.onboarded) === "1";
}
function fn(n) {
  const t = U();
  t && t.setItem(O.onboarded, "1");
}
function Hn() {
  const n = U(), t = n?.getItem(O.theme), r = n?.getItem(O.mode);
  return {
    theme: Fn.includes(t) ? t : "terracotta",
    mode: wt.includes(r) ? r : "light"
  };
}
function mn(n, t) {
  const r = U();
  r && (r.setItem(O.theme, n), r.setItem(O.mode, t));
}
const Tt = 6;
function Pt(n, t) {
  if (!(n instanceof Element)) return !1;
  let r = n;
  for (; r && r !== t; ) {
    const i = r.tagName;
    if (i === "INPUT" || i === "BUTTON" || i === "SELECT" || i === "TEXTAREA" || i === "A")
      return !0;
    const o = r.getAttribute("role");
    if (o === "switch" || o === "button" || o === "slider" || r.hasAttribute("data-no-drag")) return !0;
    r = r.parentElement;
  }
  return !1;
}
function Un(n, t, r) {
  if (t.length === 0) return n;
  const i = new Map(n.map((s) => [r(s), s])), o = /* @__PURE__ */ new Set(), a = [];
  for (const s of t) {
    const c = i.get(s);
    c && !o.has(s) && (a.push(c), o.add(s));
  }
  for (const s of n) {
    const c = r(s);
    o.has(c) || (a.push(s), o.add(c));
  }
  return a;
}
function $e(n, t, r) {
  const [i, o] = k({ draggingId: null, overId: null }), a = G(null), s = G(null), c = G(n);
  c.current = n;
  const p = G(r);
  p.current = r;
  const l = G(t);
  l.current = t;
  const h = dn((_, u) => {
    const b = s.current;
    if (!b) return null;
    const g = b.querySelectorAll("[data-drag-id]");
    for (const f of Array.from(g)) {
      const m = f.getBoundingClientRect();
      if (_ >= m.left && _ <= m.right && u >= m.top && u <= m.bottom)
        return f.getAttribute("data-drag-id");
    }
    return null;
  }, []);
  ae(() => {
    const _ = (b) => {
      const g = a.current;
      if (!g) return;
      if (!g.entered) {
        const m = b.clientX - g.x, v = b.clientY - g.y;
        if (Math.hypot(m, v) < Tt) return;
        g.entered = !0, o({ draggingId: g.id, overId: null });
      }
      const f = h(b.clientX, b.clientY);
      o((m) => m.overId === f ? m : { ...m, overId: f });
    }, u = () => {
      const b = a.current;
      if (a.current = null, !b || !b.entered) return;
      const g = (f) => {
        f.preventDefault(), f.stopPropagation();
      };
      window.addEventListener("click", g, { capture: !0, once: !0 }), o((f) => {
        const { draggingId: m, overId: v } = f;
        if (m && v && m !== v) {
          const I = c.current, z = l.current, N = I.findIndex((E) => z(E) === m), L = I.findIndex((E) => z(E) === v);
          if (N >= 0 && L >= 0) {
            const E = [...I], [R] = E.splice(N, 1);
            E.splice(L, 0, R), p.current(E);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", _), document.addEventListener("pointerup", u), document.addEventListener("pointercancel", u), () => {
      document.removeEventListener("pointermove", _), document.removeEventListener("pointerup", u), document.removeEventListener("pointercancel", u);
    };
  }, [h]);
  const d = dn(
    (_) => {
      const u = i.draggingId === _, b = i.draggingId !== null && i.draggingId !== _ && i.overId === _;
      return {
        "data-drag-id": _,
        "data-dragging": u ? "true" : void 0,
        "data-drag-over": b ? "true" : void 0,
        onPointerDown: (g) => {
          if (g.button !== void 0 && g.button !== 0) return;
          const f = g.currentTarget;
          Pt(g.target, f) || (a.current = { id: _, x: g.clientX, y: g.clientY, entered: !1 });
        }
      };
    },
    [i.draggingId, i.overId]
  );
  return {
    containerRef: s,
    itemPropsFor: d,
    isDragging: i.draggingId !== null
  };
}
const y = ({ children: n, size: t = 24, stroke: r = 1.5, fill: i = "none", style: o }) => /* @__PURE__ */ e(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: i,
    stroke: "currentColor",
    "stroke-width": r,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    style: o,
    children: n
  }
), He = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), $t = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), Nt = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), Ue = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), Be = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 8V4M15 8V4" }),
  /* @__PURE__ */ e("path", { d: "M6 8h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }),
  /* @__PURE__ */ e("path", { d: "M12 16v5" })
] }), bn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), gn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4", "stroke-dasharray": "1 2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "0.8", fill: "currentColor" })
] }), Dt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), ee = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), J = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), Lt = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), Ot = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), re = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), We = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), Vt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), Ze = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), Rt = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), jt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), Ft = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), Ht = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), K = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), Bn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), Wn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), ce = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), Zn = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), Ut = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), Bt = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), Ye = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), Wt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), Zt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), Yt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), qt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), Jt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), Gt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), Xt = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), ye = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), qe = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), Je = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), vn = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), Kt = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), Qt = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), er = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), nr = (n) => /* @__PURE__ */ e(y, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), tr = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), rr = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), ar = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), ir = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), or = (n) => /* @__PURE__ */ e(y, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), sr = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), cr = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), lr = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), dr = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), pr = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), ur = (n) => /* @__PURE__ */ e(y, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] });
function _r(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function Yn({
  hass: n,
  entity: t,
  hero: r = !1,
  breatheVariant: i = 1,
  roomLabel: o
}) {
  const a = t.state.state === "on", s = t.state.state === "unavailable", [c, p] = k(!1), [l, h] = k(null), d = l ?? _r(t.state), _ = async () => {
    if (!s) {
      p(!0);
      try {
        await n.callService("light", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, u = async (g) => {
    h(g);
    try {
      await n.callService("light", "turn_on", {
        entity_id: t.entity_id,
        brightness_pct: g
      });
    } finally {
      setTimeout(() => h(null), 50);
    }
  }, b = [
    "n-card",
    r && a ? "n-card--accent" : "n-card--default",
    a ? `breathe-${i}` : "",
    c ? "is-pending" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: b, "data-hero": r ? "true" : "false", "data-on": a ? "true" : "false", children: [
    a && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(He, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": a,
          disabled: s || c,
          onClick: _,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: o }),
    /* @__PURE__ */ e("div", { class: `n-title ${r ? "n-title--xl" : ""}`, children: t.friendly_name }),
    a && !s && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Intensité" }),
        /* @__PURE__ */ e("span", { class: `n-value ${r ? "n-value--xl" : ""}`, children: [
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
          onInput: (g) => u(Number(g.target.value))
        }
      )
    ] }),
    !a && !s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Éteinte" }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function hr(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function qn({ hass: n, entity: t, roomLabel: r }) {
  const i = t.state.state === "unavailable", [o, a] = k(null), s = o ?? hr(t.state), c = s > 0, p = async (l) => {
    a(l);
    try {
      await n.callService("cover", "set_cover_position", {
        entity_id: t.entity_id,
        position: l
      });
    } finally {
      setTimeout(() => a(null), 50);
    }
  };
  return /* @__PURE__ */ e("div", { class: "n-card", "data-on": c ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ue, { size: 20 }) }),
      /* @__PURE__ */ e("div", { class: "n-blinds", children: [0, 1, 2, 3, 4, 5].map((l) => /* @__PURE__ */ e(
        "span",
        {
          class: "n-blinds__bar",
          "data-active": l / 6 * 100 < s ? "true" : "false"
        },
        l
      )) })
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !i && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Ouverture" }),
        /* @__PURE__ */ e("span", { class: "n-value", children: [
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
          onInput: (l) => p(Number(l.target.value))
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Jn({
  hass: n,
  entity: t,
  roomLabel: r,
  breatheVariant: i = 2
}) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", [s, c] = k(!1), p = t.state.attributes.current_power_w, l = async () => {
    if (!a) {
      c(!0);
      try {
        await n.callService("switch", "toggle", { entity_id: t.entity_id });
      } finally {
        c(!1);
      }
    }
  }, h = ["n-card", o ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Be, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: a || s,
          onClick: l,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    typeof p == "number" && /* @__PURE__ */ e("div", { class: "n-power", children: [
      /* @__PURE__ */ e("span", { class: o ? "n-power__value" : "n-power__value n-power__value--muted", children: Math.round(o ? p : 0) }),
      /* @__PURE__ */ e("span", { class: "n-power__unit", children: "W" })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const fr = {
  door: bn,
  garage_door: bn,
  window: Ot,
  smoke: gn,
  gas: gn,
  moisture: Dt,
  motion: ee,
  occupancy: ee,
  presence: ee
}, mr = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, br = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]);
function Gn({ entity: n, roomLabel: t }) {
  const r = n.state.attributes.device_class ?? "", i = n.state.state === "on", o = n.state.state === "unavailable", a = fr[r] ?? re, s = mr[r] ?? { on: "Actif", off: "Inactif" }, c = br.has(r);
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": o ? "indisponible" : i ? "on" : "off", "data-alert": c ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-dot", "aria-hidden": "true" })
    ] }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: o ? "Indisponible" : i ? s.on : s.off })
  ] });
}
const gr = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, vr = {
  heat: Rt,
  cool: jt,
  heat_cool: J,
  auto: J,
  dry: J,
  fan_only: J
};
function Xn({
  hass: n,
  entity: t,
  roomLabel: r,
  breatheVariant: i = 2
}) {
  const o = t.state.state === "unavailable", a = t.state.state, s = a !== "off" && !o, c = t.state.attributes.current_temperature, p = t.state.attributes.temperature, l = t.state.attributes.min_temp ?? 7, h = t.state.attributes.max_temp ?? 35, d = t.state.attributes.target_temp_step ?? 0.5, [_, u] = k(null), b = _ ?? p ?? c ?? 20, g = async (v) => {
    const I = Math.min(h, Math.max(l, v));
    u(I);
    try {
      await n.callService("climate", "set_temperature", {
        entity_id: t.entity_id,
        temperature: I
      });
    } finally {
      setTimeout(() => u(null), 50);
    }
  }, f = vr[a] ?? J, m = ["n-card", s ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: m, "data-on": s ? "true" : "false", children: [
    s && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(f, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: gr[a] ?? a })
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !o && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-climate__temp", children: [
        /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: [
          Math.round(b * 10) / 10,
          /* @__PURE__ */ e("span", { class: "n-value__unit", children: "°C" })
        ] }),
        typeof c == "number" && /* @__PURE__ */ e("span", { class: "n-muted", children: [
          "Actuelle ",
          Math.round(c * 10) / 10,
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
            onClick: () => g(b - d),
            disabled: b - d < l,
            children: /* @__PURE__ */ e(Ft, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-stepper",
            "aria-label": "Augmenter",
            onClick: () => g(b + d),
            disabled: b + d > h,
            children: /* @__PURE__ */ e(Ht, { size: 16 })
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Kn({ hass: n, entity: t, roomLabel: r }) {
  const i = t.state.state, o = i === "unavailable", a = i === "locked", s = i === "jammed", c = i === "locking" || i === "unlocking", [p, l] = k(!1), h = async () => {
    if (!(o || c || p)) {
      l(!0);
      try {
        await n.callService("lock", a ? "unlock" : "lock", {
          entity_id: t.entity_id
        });
      } finally {
        l(!1);
      }
    }
  }, d = o ? "Indisponible" : s ? "Bloquée" : c ? i === "locking" ? "Verrouillage…" : "Déverrouillage…" : a ? "Verrouillée" : "Déverrouillée";
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": a ? "true" : "false",
      "data-alert": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(a ? We : Vt, { size: 20 }) }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-toggle",
              role: "switch",
              "aria-checked": a,
              disabled: o || c || p,
              onClick: h,
              children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
            }
          )
        ] }),
        r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: d })
      ]
    }
  );
}
const yr = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function Qn({
  hass: n,
  entity: t,
  roomLabel: r,
  breatheVariant: i = 3
}) {
  const o = t.state.state, a = o === "unavailable", s = o === "cleaning" || o === "returning", c = o === "error", p = t.state.attributes.battery_level, [l, h] = k(!1), d = async (u) => {
    if (!(a || l)) {
      h(!0);
      try {
        await n.callService("vacuum", u, { entity_id: t.entity_id });
      } finally {
        h(!1);
      }
    }
  }, _ = ["n-card", s ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      class: _,
      "data-on": s ? "true" : "false",
      "data-alert": c ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ze, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(Wn, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: yr[o] ?? o }),
        !a && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: l || s,
              onClick: () => d("start"),
              children: [
                /* @__PURE__ */ e(K, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Lancer" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: l || o === "docked",
              onClick: () => d("return_to_base"),
              children: [
                /* @__PURE__ */ e(Bn, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const xr = {
  temperature: J,
  humidity: Lt,
  power: ce,
  energy: ce,
  current: ce,
  voltage: ce,
  illuminance: Zn,
  pressure: Ut,
  battery: Wn
};
function kr(n, t) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  const r = Number(n);
  return Number.isFinite(r) ? { value: Math.abs(r) >= 100 ? Math.round(r).toString() : (Math.round(r * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function et({ entity: n, roomLabel: t }) {
  const r = n.state.attributes.device_class ?? "", i = n.state.attributes.unit_of_measurement, o = xr[r] ?? Bt, a = n.state.state === "unavailable", { value: s, unit: c } = kr(n.state.state, i);
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": a ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(o, { size: 18 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-sensor__readout", children: [
      /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }),
      c && /* @__PURE__ */ e("span", { class: "n-value__unit", children: c })
    ] })
  ] });
}
const wr = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire"
};
function nt({
  hass: n,
  entity: t,
  roomLabel: r,
  breatheVariant: i = 4
}) {
  const o = t.state.state, a = o === "unavailable", s = o === "playing", c = o === "off" || o === "standby", p = t.state.attributes.media_title, l = t.state.attributes.media_artist, h = t.state.attributes.volume_level, [d, _] = k(null), u = d ?? h ?? 0, b = async (m, v = {}) => {
    a || await n.callService("media_player", m, {
      entity_id: t.entity_id,
      ...v
    });
  }, g = async (m) => {
    _(m);
    try {
      await b("volume_set", { volume_level: m });
    } finally {
      setTimeout(() => _(null), 50);
    }
  }, f = ["n-card", s ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: f, "data-on": s ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ye, { size: 20 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: wr[o] ?? o })
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !c && !a && (p || l) && /* @__PURE__ */ e("div", { class: "n-media__track", children: [
      p && /* @__PURE__ */ e("div", { class: "n-media__title", children: p }),
      l && /* @__PURE__ */ e("div", { class: "n-muted", children: l })
    ] }),
    !a && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-media__controls", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Précédent",
            onClick: () => b("media_previous_track"),
            children: /* @__PURE__ */ e(Zt, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": s ? "Pause" : "Lecture",
            onClick: () => b("media_play_pause"),
            children: s ? /* @__PURE__ */ e(Wt, { size: 18 }) : /* @__PURE__ */ e(K, { size: 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => b("media_next_track"),
            children: /* @__PURE__ */ e(Yt, { size: 16 })
          }
        )
      ] }),
      typeof h == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(qt, { size: 14 }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            class: "n-slider",
            min: 0,
            max: 1,
            step: 0.05,
            value: u,
            onInput: (m) => g(Number(m.target.value))
          }
        )
      ] })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const Mr = {
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
}, Ir = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: Jt },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: Gt },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: Xt }
];
function tt({ hass: n, entity: t, roomLabel: r }) {
  const i = t.state.state, o = i === "unavailable", a = i === "triggered", s = i.startsWith("armed_"), c = i === "pending" || i === "arming" || i === "disarming", [p, l] = k(!1), h = async (d) => {
    if (!(o || p)) {
      l(!0);
      try {
        await n.callService("alarm_control_panel", d, { entity_id: t.entity_id });
      } finally {
        l(!1);
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(re, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Mr[i] ?? i })
        ] }),
        r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          Ir.map(({ id: d, service: _, label: u, Icon: b }) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn",
              "data-active": i === d ? "true" : "false",
              disabled: p || c,
              onClick: () => h(_),
              children: [
                /* @__PURE__ */ e(b, { size: 14 }),
                /* @__PURE__ */ e("span", { children: u })
              ]
            },
            d
          )),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn n-mode-btn--disarm",
              disabled: p || c || i === "disarmed",
              onClick: () => h("alarm_disarm"),
              children: /* @__PURE__ */ e("span", { children: "Désarmer" })
            }
          )
        ] })
      ]
    }
  );
}
const Sr = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function Ar(n, t) {
  const r = n.state.attributes.entity_picture;
  if (!r) return null;
  if (r.startsWith("http")) return r;
  const i = t.hassUrl?.("");
  return i ? i.replace(/\/$/, "") + r : r;
}
function rt({ hass: n, entity: t, roomLabel: r }) {
  const i = t.state.state, o = i === "unavailable", a = i === "recording" || i === "streaming", [s, c] = k(0), p = Ar(t, n), l = p ? `${p}${p.includes("?") ? "&" : "?"}t=${s}` : null;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--camera", "data-on": a ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-camera__frame", children: [
      l ? /* @__PURE__ */ e("img", { class: "n-camera__img", src: l, alt: t.friendly_name, loading: "lazy" }) : /* @__PURE__ */ e("div", { class: "n-camera__placeholder", "aria-hidden": "true", children: /* @__PURE__ */ e(ye, { size: 28 }) }),
      a && /* @__PURE__ */ e("span", { class: "n-camera__live", children: "● LIVE" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-card__head n-card__head--inline", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(ye, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          disabled: o || !l,
          onClick: () => c(Date.now()),
          children: "Rafraîchir"
        }
      )
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: Sr[i] ?? i })
  ] });
}
function at({ hass: n, entity: t, roomLabel: r, breatheVariant: i = 2 }) {
  const o = t.state.state === "on", a = t.state.state === "unavailable", s = t.state.attributes.percentage, c = typeof s == "number", [p, l] = k(!1), [h, d] = k(null), _ = h ?? (c ? s : o ? 100 : 0), u = async () => {
    if (!a) {
      l(!0);
      try {
        await n.callService("fan", "toggle", { entity_id: t.entity_id });
      } finally {
        l(!1);
      }
    }
  }, b = async (f) => {
    d(f);
    try {
      await n.callService("fan", "set_percentage", {
        entity_id: t.entity_id,
        percentage: f
      });
    } finally {
      setTimeout(() => d(null), 50);
    }
  }, g = ["n-card", o ? `breathe-${i}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: g, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(qe, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: a || p,
          onClick: u,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    o && c && !a && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
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
          onInput: (f) => b(Number(f.target.value))
        }
      )
    ] }),
    !o && !a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Arrêté" }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function it({ hass: n, entity: t, roomLabel: r }) {
  const i = t.domain === "scene", o = t.state.state === "unavailable", [a, s] = k(!1), [c, p] = k(!1), l = async () => {
    if (!(o || a)) {
      s(!0);
      try {
        await n.callService(i ? "scene" : "script", "turn_on", {
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
      class: `n-card n-card--compact${c ? " is-flashing" : ""}`,
      "data-on": c ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: i ? /* @__PURE__ */ e(Je, { size: 18 }) : /* @__PURE__ */ e(K, { size: 16 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: i ? "Scène" : "Script" })
        ] }),
        r && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: r }),
        /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-pill-btn n-scene__activate",
            disabled: o || a,
            onClick: l,
            children: [
              /* @__PURE__ */ e(K, { size: 14 }),
              /* @__PURE__ */ e("span", { children: i ? "Activer" : "Lancer" })
            ]
          }
        )
      ]
    }
  );
}
function ot(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? cr : /(chambre|bedroom)/.test(t) ? lr : /(cuisine|kitchen)/.test(t) ? dr : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? pr : /(entrée|entree|hall|couloir)/.test(t) ? ur : Bn;
}
const Cr = {
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
  script: "Scripts"
}, zr = /* @__PURE__ */ new Set([
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
  "script"
]);
function Er(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function Tr(n, t) {
  const r = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(Yn, { ...r, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(qn, { ...r }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(Jn, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(Gn, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(Xn, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(Kn, { ...r }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(Qn, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(et, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(nt, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(tt, { ...r }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(rt, { ...r }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(at, { ...r, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(it, { ...r }, n.entity_id);
    default:
      return null;
  }
}
function Pr({ area: n, entities: t, accent: r = !1, onOpen: i, dragProps: o }) {
  const a = ot(n.name), s = t.filter(
    (l) => l.domain !== "sensor" && l.domain !== "binary_sensor"
  ).length, c = t.filter(Rn).length, p = jn(t);
  return /* @__PURE__ */ e(
    "div",
    {
      role: "button",
      tabIndex: 0,
      class: `nido-room-card ${r ? "nido-room-card--accent" : ""}`,
      onClick: i,
      onKeyDown: (l) => {
        (l.key === "Enter" || l.key === " ") && (l.preventDefault(), i());
      },
      ...o,
      children: [
        r && /* @__PURE__ */ e("svg", { class: "nido-room-card__deco", viewBox: "0 0 120 120", "aria-hidden": "true", children: [
          /* @__PURE__ */ e("circle", { cx: "60", cy: "60", r: "48", fill: "none", stroke: "rgba(244,237,226,0.08)" }),
          /* @__PURE__ */ e("circle", { cx: "60", cy: "60", r: "32", fill: "none", stroke: "rgba(244,237,226,0.08)" })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-room-card__body", children: [
          /* @__PURE__ */ e("div", { class: "nido-room-card__head", children: [
            /* @__PURE__ */ e("span", { class: "nido-room-card__icon", children: /* @__PURE__ */ e(a, { size: 20 }) }),
            /* @__PURE__ */ e(Nt, { size: 16 })
          ] }),
          /* @__PURE__ */ e("div", { class: "nido-room-card__foot", children: [
            /* @__PURE__ */ e("div", { class: "nido-room-card__name", children: n.name }),
            /* @__PURE__ */ e("div", { class: "nido-room-card__meta", children: [
              /* @__PURE__ */ e("span", { children: [
                s,
                " appareil",
                s > 1 ? "s" : ""
              ] }),
              c > 0 && /* @__PURE__ */ e(H, { children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
                /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                  /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                  c,
                  " actif",
                  c > 1 ? "s" : ""
                ] })
              ] })
            ] }),
            (p.temperature || p.humidity) && /* @__PURE__ */ e("div", { class: "nido-room-card__stats", children: [
              p.temperature && /* @__PURE__ */ e("span", { class: "nido-room-card__stat", children: [
                Math.round(parseFloat(p.temperature.value)),
                p.temperature.unit || "°"
              ] }),
              p.humidity && /* @__PURE__ */ e("span", { class: "nido-room-card__stat", children: [
                Math.round(parseFloat(p.humidity.value)),
                p.humidity.unit || "%"
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function $r({
  hass: n,
  areas: t,
  entities: r,
  favorites: i,
  exposed: o,
  roomsOrder: a,
  onConfigure: s,
  onOpenRoom: c,
  onReorderFavorites: p,
  onReorderRooms: l
}) {
  const h = n.user?.name ?? "vous", d = /* @__PURE__ */ new Date(), _ = d.getHours(), { greeting: u, sub: b } = Er(_), g = `${String(_).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`, f = d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (M) => M.toUpperCase()), m = V(() => new Set(o), [o]), v = V(
    () => r.filter((M) => m.has(M.entity_id) && zr.has(M.domain)),
    [r, m]
  ), I = V(() => kt(v), [v]), z = V(() => {
    const M = new Map(v.map((T) => [T.entity_id, T]));
    return i.map((T) => M.get(T)).filter((T) => !!T);
  }, [v, i]), N = V(() => {
    const M = t.filter((T) => (I.get(T.area_id) ?? []).length > 0);
    return Un(M, a, (T) => T.area_id);
  }, [t, I, a]), L = $e(
    z,
    (M) => M.entity_id,
    (M) => p(M.map((T) => T.entity_id))
  ), E = $e(
    N,
    (M) => M.area_id,
    (M) => l(M.map((T) => T.area_id))
  );
  let R = 0;
  const D = z.length > 0 ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${L.isDragging ? "is-dragging" : ""}`,
        ref: (M) => {
          L.containerRef.current = M;
        },
        children: z.map((M) => {
          R += 1;
          const T = (R - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ...L.itemPropsFor(M.entity_id),
              children: Tr(M, {
                hass: n,
                areaName: t.find((Z) => Z.area_id === M.area_id)?.name ?? "",
                hero: R === 1 && M.domain === "light",
                variant: T
              })
            },
            M.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, j = v.length > 0;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard", children: [
    /* @__PURE__ */ e("header", { class: "nido-topbar", children: [
      /* @__PURE__ */ e("div", { class: "nido-topbar__brand", children: "Nido" }),
      /* @__PURE__ */ e("div", { class: "nido-topbar__actions", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-pill-btn n-pill-btn--ghost",
            onClick: s,
            children: [
              /* @__PURE__ */ e($t, { size: 14 }),
              /* @__PURE__ */ e("span", { children: "Personnaliser" })
            ]
          }
        ),
        /* @__PURE__ */ e("div", { class: "nido-topbar__time", children: g })
      ] })
    ] }),
    /* @__PURE__ */ e("section", { class: "nido-hero", children: [
      /* @__PURE__ */ e("div", { class: "nido-hero__date", children: f }),
      /* @__PURE__ */ e("h1", { children: [
        u,
        ", ",
        /* @__PURE__ */ e("em", { children: h })
      ] }),
      /* @__PURE__ */ e("p", { class: "nido-hero__sub", children: b })
    ] }),
    j ? /* @__PURE__ */ e(H, { children: [
      D,
      N.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
        /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
        /* @__PURE__ */ e(
          "div",
          {
            class: `nido-rooms-grid ${E.isDragging ? "is-dragging" : ""}`,
            ref: (M) => {
              E.containerRef.current = M;
            },
            children: N.map((M, T) => /* @__PURE__ */ e(
              Pr,
              {
                area: M,
                entities: I.get(M.area_id) ?? [],
                accent: T === 0,
                onOpen: () => c(M.area_id),
                dragProps: E.itemPropsFor(M.area_id)
              },
              M.area_id
            ))
          }
        )
      ] })
    ] }) : /* @__PURE__ */ e("div", { class: "nido-empty", children: [
      /* @__PURE__ */ e("p", { class: "n-muted", children: "Aucun appareil exposé pour l'instant. Ouvrez « Personnaliser » pour choisir vos entités." }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: s, children: "Personnaliser Nido" })
    ] })
  ] }) });
}
function Nr(n, t, r, i, o = !1) {
  const a = { hass: t, entity: n, roomLabel: r };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(Yn, { ...a, hero: o, breatheVariant: i }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(qn, { ...a }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(Jn, { ...a, breatheVariant: i }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(Gn, { entity: n, roomLabel: r }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(Xn, { ...a, breatheVariant: i }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(Kn, { ...a }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(Qn, { ...a, breatheVariant: i }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(et, { entity: n, roomLabel: r }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(nt, { ...a, breatheVariant: i }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(tt, { ...a }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(rt, { ...a }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(at, { ...a, breatheVariant: i }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(it, { ...a }, n.entity_id);
    default:
      return null;
  }
}
function Dr({
  hass: n,
  area: t,
  entities: r,
  entitiesOrder: i,
  onBack: o,
  onReorderEntities: a
}) {
  const s = ot(t.name), c = jn(r), p = V(
    () => Un(r, i, (f) => f.entity_id),
    [r, i]
  ), l = V(() => {
    const f = /* @__PURE__ */ new Map();
    for (const m of p)
      f.set(m.domain, (f.get(m.domain) ?? 0) + 1);
    return Array.from(f.entries()).sort((m, v) => v[1] - m[1]);
  }, [p]), [h, d] = k("all"), _ = V(
    () => h === "all" ? p : p.filter((f) => f.domain === h),
    [p, h]
  ), u = $e(
    _,
    (f) => f.entity_id,
    (f) => {
      const m = new Set(_.map((z) => z.entity_id)), v = [...f], I = p.map(
        (z) => m.has(z.entity_id) ? v.shift() : z
      );
      a(I.map((z) => z.entity_id));
    }
  ), b = p.filter(
    (f) => f.domain !== "sensor" && f.domain !== "binary_sensor"
  ).length, g = p.filter(Rn).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(or, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e(sr, { size: 18 }) }) })
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
              b,
              " appareil",
              b > 1 ? "s" : ""
            ] }),
            g > 0 && /* @__PURE__ */ e(H, { children: [
              /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
              /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                g,
                " actif",
                g > 1 ? "s" : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("h1", { class: "nido-room-detail__title", children: t.name })
        ] })
      ] }),
      (c.temperature || c.humidity || c.illuminance) && /* @__PURE__ */ e("div", { class: "nido-room-detail__stats", children: [
        c.temperature && /* @__PURE__ */ e(
          Ae,
          {
            label: "Température",
            value: Math.round(parseFloat(c.temperature.value)).toString(),
            unit: c.temperature.unit || "°"
          }
        ),
        c.humidity && /* @__PURE__ */ e(yn, {}),
        c.humidity && /* @__PURE__ */ e(
          Ae,
          {
            label: "Humidité",
            value: Math.round(parseFloat(c.humidity.value)).toString(),
            unit: c.humidity.unit || "%"
          }
        ),
        c.illuminance && /* @__PURE__ */ e(yn, {}),
        c.illuminance && /* @__PURE__ */ e(
          Ae,
          {
            label: "Luminosité",
            value: Math.round(parseFloat(c.illuminance.value)).toString(),
            unit: c.illuminance.unit || "lx"
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
          onClick: () => d("all"),
          children: [
            "Tout · ",
            r.length
          ]
        }
      ),
      l.map(([f, m]) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${h === f ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => d(f),
          children: [
            Cr[f] ?? f,
            " · ",
            m
          ]
        }
      ))
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room-detail__grid ${u.isDragging ? "is-dragging" : ""}`,
        ref: (f) => {
          u.containerRef.current = f;
        },
        children: _.map((f, m) => {
          const v = m % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ...u.itemPropsFor(f.entity_id),
              children: Nr(f, n, t.name, v, m === 0 && f.domain === "light")
            },
            f.entity_id
          );
        })
      }
    )
  ] }) });
}
function Ae({ label: n, value: t, unit: r }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: r })
    ] })
  ] });
}
function yn() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const le = 5, me = {
  light: { label: "Lumières", Icon: He },
  switch: { label: "Prises & switches", Icon: Be },
  cover: { label: "Volets & stores", Icon: Ue },
  climate: { label: "Thermostats", Icon: J },
  lock: { label: "Serrures", Icon: We },
  vacuum: { label: "Aspirateurs", Icon: Ze },
  binary_sensor: { label: "Détecteurs", Icon: re },
  sensor: { label: "Capteurs", Icon: ee },
  media_player: { label: "Lecteurs média", Icon: Ye },
  alarm_control_panel: { label: "Alarmes", Icon: re },
  camera: { label: "Caméras", Icon: ye },
  fan: { label: "Ventilateurs", Icon: qe },
  scene: { label: "Scènes", Icon: Je },
  script: { label: "Scripts", Icon: K }
}, xn = Object.keys(me), Ne = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] }
};
function Lr(n) {
  const {
    hass: t,
    entities: r,
    areas: i,
    initialTheme: o,
    initialMode: a,
    initialExposed: s,
    initialFavorites: c,
    initialExcludedUsers: p,
    isReturning: l,
    onApplyTheme: h,
    onClose: d,
    onDone: _
  } = n, [u, b] = k(0), [g, f] = k(o), [m, v] = k(a), [I, z] = k(new Set(s)), [N, L] = k(new Set(c)), [E, R] = k(
    new Set(p)
  ), [D, j] = k(null), [M, T] = k(null);
  ae(() => {
    let x = !1;
    return t.callWS({ type: "config/auth/list" }).then((w) => {
      x || j(
        (w ?? []).filter((A) => !A.system_generated).sort((A, F) => A.name.localeCompare(F.name))
      );
    }).catch((w) => {
      x || (T(w instanceof Error ? w.message : String(w)), t.user && j([t.user]));
    }), () => {
      x = !0;
    };
  }, [t]);
  const Z = () => b((x) => Math.min(le - 1, x + 1)), we = () => b((x) => Math.max(0, x - 1)), Ge = (x, w) => {
    f(x), v(w), h(x, w);
  }, ie = (x) => {
    z((w) => {
      const A = new Set(w);
      return A.has(x) ? (A.delete(x), L((F) => {
        if (!F.has(x)) return F;
        const oe = new Set(F);
        return oe.delete(x), oe;
      })) : A.add(x), A;
    });
  }, B = (x) => {
    L((w) => {
      const A = new Set(w);
      return A.has(x) ? A.delete(x) : (A.add(x), z((F) => F.has(x) ? F : new Set(F).add(x))), A;
    });
  }, Me = (x) => {
    R((w) => {
      const A = new Set(w);
      return A.has(x) ? A.delete(x) : A.add(x), A;
    });
  }, S = () => {
    const x = Array.from(I), w = Array.from(N).filter((F) => I.has(F)), A = Array.from(E);
    mn(g, m), un(x), Pe(w), _n(A), fn(), _({
      exposed: x,
      favorites: w,
      theme: g,
      mode: m,
      excludedUsers: A
    });
  }, Y = () => {
    mn(g, m), un(Array.from(I)), Pe(Array.from(N).filter((x) => I.has(x))), _n(Array.from(E)), fn(), d();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(ir, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: le }, (x, w) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${w === u ? "is-active" : ""} ${w < u ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          u + 1,
          " / ",
          le
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: Y, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      u === 0 && /* @__PURE__ */ e(
        Or,
        {
          isReturning: l,
          exposedCount: I.size,
          favCount: N.size,
          themeLabel: Ne[g].name,
          modeLabel: m === "light" ? "Clair" : "Sombre",
          allowedUsersCount: D ? D.filter((x) => !E.has(x.id)).length : null
        }
      ),
      u === 1 && /* @__PURE__ */ e(Vr, { entitiesCount: r.length, areasCount: i.length }),
      u === 2 && /* @__PURE__ */ e(
        Rr,
        {
          entities: r,
          exposed: I,
          favs: N,
          onToggleExpose: ie,
          onToggleFav: B
        }
      ),
      u === 3 && /* @__PURE__ */ e(
        jr,
        {
          theme: g,
          mode: m,
          onPick: Ge,
          userName: t.user?.name ?? "vous"
        }
      ),
      u === 4 && /* @__PURE__ */ e(
        Fr,
        {
          hass: t,
          users: D,
          error: M,
          excluded: E,
          onToggleUser: Me
        }
      )
    ] }, u),
    /* @__PURE__ */ e("footer", { class: "n-ob__footer", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-ob__back",
          disabled: u === 0,
          onClick: we,
          children: [
            /* @__PURE__ */ e(Kt, { size: 14 }),
            " Retour"
          ]
        }
      ),
      u < le - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: Z, children: [
        "Continuer ",
        /* @__PURE__ */ e(vn, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: S, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(vn, { size: 16 })
      ] })
    ] })
  ] }) });
}
const kn = [
  He,
  Ue,
  Be,
  J,
  We,
  Ze,
  ee,
  Ye,
  re,
  ye,
  qe,
  Je,
  K
];
function de({ offset: n, intervalMs: t }) {
  const [r, i] = k(n);
  ae(() => {
    const a = setInterval(() => i((s) => s + 1), t);
    return () => clearInterval(a);
  }, [t]);
  const o = kn[r % kn.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, r);
}
function Or(n) {
  const { isReturning: t, exposedCount: r, favCount: i, themeLabel: o, modeLabel: a, allowedUsersCount: s } = n;
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
          /* @__PURE__ */ e(pe, { label: "Exposées", value: r }),
          /* @__PURE__ */ e(pe, { label: "Favoris", value: i, accent: !0 }),
          /* @__PURE__ */ e(pe, { label: "Ambiance", value: o, hint: a }),
          /* @__PURE__ */ e(
            pe,
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
      ].map(([c, p]) => /* @__PURE__ */ e("div", { class: "n-ob-steps-overview__item", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__eyebrow", children: c }),
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
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tl", children: /* @__PURE__ */ e(de, { offset: 0, intervalMs: 2200 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tr", children: /* @__PURE__ */ e(de, { offset: 3, intervalMs: 2600 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--bl", children: /* @__PURE__ */ e(de, { offset: 7, intervalMs: 2400 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--br", children: /* @__PURE__ */ e(de, { offset: 10, intervalMs: 2800 }) })
    ] })
  ] });
}
function pe(n) {
  return /* @__PURE__ */ e("div", { class: `n-ob-recap__card ${n.accent ? "is-accent" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: n.label }),
    /* @__PURE__ */ e("div", { class: "n-ob-recap__value", children: n.value }),
    n.hint && /* @__PURE__ */ e("div", { class: "n-ob-recap__hint", children: n.hint })
  ] });
}
function Vr({ entitiesCount: n, areasCount: t }) {
  const [r, i] = k("scanning");
  return ae(() => {
    const o = setTimeout(() => i("found"), 1100), a = setTimeout(() => i("connected"), 2200);
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
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(rr, { size: 18 }) }),
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
            fill: r === "connected" ? "var(--positive)" : "var(--accent)",
            class: "breathe-2"
          }
        ),
        r === "connected" && /* @__PURE__ */ e(
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
        /* @__PURE__ */ e("span", { class: `n-ob-status-pill__dot is-${r}` }),
        /* @__PURE__ */ e("span", { class: "n-ob-status-pill__label", children: [
          r === "scanning" && "Recherche en cours…",
          r === "found" && "Home Assistant trouvé",
          r === "connected" && `Connecté · ${t} pièce${t > 1 ? "s" : ""} · ${n} entité${n > 1 ? "s" : ""}`
        ] })
      ] })
    ] })
  ] });
}
function Rr(n) {
  const { entities: t, exposed: r, favs: i, onToggleExpose: o, onToggleFav: a } = n, s = V(() => {
    const _ = /* @__PURE__ */ new Map();
    for (const u of t)
      xn.includes(u.domain) && (_.has(u.domain) || _.set(u.domain, []), _.get(u.domain).push(u));
    return Array.from(_.entries()).sort((u, b) => b[1].length - u[1].length);
  }, [t]), [c, p] = k(s[0]?.[0] ?? "light"), l = s.find(([_]) => _ === c) ?? s[0], h = r.size, d = t.filter((_) => xn.includes(_.domain)).length;
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--entities", children: [
    /* @__PURE__ */ e("aside", { class: "n-ob-ent__rail", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 2 · Vos appareils" }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__count", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-num", children: h }),
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-sep", children: [
          " / ",
          d
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { marginBottom: 16 }, children: h === 0 ? "Aucun appareil exposé pour l'instant" : `appareil${h > 1 ? "s" : ""} exposé${h > 1 ? "s" : ""}` }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__list", children: s.map(([_, u]) => {
        const b = me[_], g = b.Icon, f = u.filter((v) => r.has(v.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${_ === c ? "is-active" : ""}`,
            onClick: () => p(_),
            children: [
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-icon", children: /* @__PURE__ */ e(g, { size: 15 }) }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-label", children: b.label }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-count", children: [
                f,
                "/",
                u.length
              ] })
            ]
          }
        );
      }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "n-ob-ent__main", children: l && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-ob-ent__head", children: [
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: [
            l[1].length,
            " disponibles"
          ] }),
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: me[l[0]].label })
        ] }),
        /* @__PURE__ */ e("div", { class: "n-ob-ent__head-actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => l[1].forEach((_) => !r.has(_.entity_id) && o(_.entity_id)),
              children: "Tout exposer"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => l[1].forEach((_) => r.has(_.entity_id) && o(_.entity_id)),
              children: "Tout retirer"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__grid", children: l[1].map((_) => {
        const u = r.has(_.entity_id), b = i.has(_.entity_id), g = me[_.domain].Icon;
        return /* @__PURE__ */ e(
          "div",
          {
            class: `n-ob-ent-card ${u ? "is-exposed" : ""}`,
            onClick: () => o(_.entity_id),
            children: [
              /* @__PURE__ */ e("span", { class: `n-ob-ent-card__icon ${u ? "is-on" : ""}`, children: /* @__PURE__ */ e(g, { size: 16 }) }),
              /* @__PURE__ */ e("div", { class: "n-ob-ent-card__body", children: [
                /* @__PURE__ */ e("div", { class: "n-ob-ent-card__name", children: _.friendly_name }),
                /* @__PURE__ */ e("div", { class: "n-ob-ent-card__id", children: _.entity_id })
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  class: `n-ob-ent-card__star ${b ? "is-fav" : ""}`,
                  "aria-label": b ? "Retirer des favoris" : "Ajouter aux favoris",
                  onClick: (f) => {
                    f.stopPropagation(), a(_.entity_id);
                  },
                  children: b ? /* @__PURE__ */ e(nr, { size: 14 }) : /* @__PURE__ */ e(er, { size: 14 })
                }
              ),
              /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${u ? "is-on" : ""}`, children: u && /* @__PURE__ */ e(Qt, { size: 12, stroke: 2.4 }) })
            ]
          }
        );
      }) })
    ] }) })
  ] });
}
function jr(n) {
  const { theme: t, mode: r, userName: i, onPick: o } = n, a = Ne[t];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--theme", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 3 · Ambiance" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Quelle ambiance",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "vous va ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre." }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__grid", children: Fn.map((s) => {
        const c = Ne[s];
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__tile ${t === s ? "is-active" : ""}`,
            onClick: () => o(s, r),
            children: [
              /* @__PURE__ */ e("div", { class: "n-ob-theme__swatches", children: c.swatches.map((p, l) => /* @__PURE__ */ e(
                "span",
                {
                  class: "n-ob-theme__swatch",
                  style: {
                    background: p,
                    borderRadius: l === 0 ? "8px 0 0 8px" : l === 2 ? "0 8px 8px 0" : "0"
                  }
                }
              )) }),
              /* @__PURE__ */ e("div", { class: "n-ob-theme__name", children: c.name }),
              /* @__PURE__ */ e("div", { class: "n-ob-theme__desc", children: c.desc })
            ]
          }
        );
      }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__modes", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__mode ${r === "light" ? "is-active" : ""}`,
            onClick: () => o(t, "light"),
            children: [
              /* @__PURE__ */ e(Zn, { size: 14 }),
              " Clair"
            ]
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__mode ${r === "dark" ? "is-active" : ""}`,
            onClick: () => o(t, "dark"),
            children: [
              /* @__PURE__ */ e(tr, { size: 14 }),
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
        style: { background: r === "dark" ? "#1f1812" : a.swatches[0] },
        children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", style: { opacity: 0.6 }, children: "Aperçu" }),
          /* @__PURE__ */ e(
            "div",
            {
              class: "n-ob-preview__greet",
              style: { color: r === "dark" ? "#f4ede2" : "#1a1410" },
              children: [
                "Bonsoir, ",
                /* @__PURE__ */ e("em", { children: i })
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
                    background: r === "dark" ? "#2a2018" : "#fbf6ec",
                    color: r === "dark" ? "#f4ede2" : "#1a1410"
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
function Fr(n) {
  const { hass: t, users: r, error: i, excluded: o, onToggleUser: a } = n;
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--family", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 4 · Famille" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Qui peut",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "entrer ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Décochez les utilisateurs Home Assistant qui ne doivent pas voir Nido. Ils continueront d'utiliser Home Assistant normalement." }),
      i && /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { color: "var(--warning)" }, children: "Liste complète indisponible (besoin d'un compte admin) — votre compte est affiché." })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob-step__illus n-ob-family", children: r === null ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Chargement des utilisateurs…" }) : r.length === 0 ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Aucun utilisateur trouvé." }) : /* @__PURE__ */ e("div", { class: "n-ob-family__list", children: r.map((s) => {
      const c = !o.has(s.id), p = s.id === t.user?.id;
      return /* @__PURE__ */ e(
        "label",
        {
          class: `n-ob-family__row ${c ? "is-allowed" : "is-excluded"}`,
          children: [
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: s.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e(ar, { size: 18 }) }),
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
                checked: c,
                disabled: p,
                onChange: () => !p && a(s.id),
                "aria-label": c ? "Autoriser" : "Exclure"
              }
            )
          ]
        }
      );
    }) }) })
  ] });
}
const Hr = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function Ur({ hass: n, host: t }) {
  const [r, i] = k(null), [o, a] = k(null), [s, c] = k(null), [p, l] = k(null), h = V(() => Hn(), []), [d, _] = k(() => Mt()), [u, b] = k(() => It()), [g, f] = k(() => St()), [m, v] = k(() => At()), [I, z] = k(
    () => zt()
  ), [N, L] = k(() => !hn()), [E, R] = k(
    { kind: "dashboard" }
  ), D = (S) => {
    _(S), Pe(S);
  }, j = (S) => {
    v(S), Ct(S);
  }, M = (S, Y) => {
    z((x) => {
      const w = { ...x, [S]: Y };
      return Et(w), w;
    });
  }, T = G(n);
  T.current = n, ae(() => {
    if (!n) return;
    let S = !1;
    const Y = [], x = async () => {
      const w = T.current;
      if (w)
        try {
          const [A, F, oe] = await Promise.all([
            bt(w),
            gt(w),
            vt(w)
          ]);
          if (S) return;
          i(A), a(F), c(oe);
        } catch (A) {
          if (S) return;
          l(A instanceof Error ? A.message : String(A));
        }
    };
    return x(), Promise.all(
      Hr.map(
        (w) => n.connection.subscribeEvents(() => {
          S || x();
        }, w)
      )
    ).then((w) => {
      if (S) {
        w.forEach((A) => A());
        return;
      }
      Y.push(...w);
    }).catch((w) => console.warn("Nido: subscribeEvents failed", w)), () => {
      S = !0, Y.forEach((w) => w());
    };
  }, [n != null]);
  const Z = V(() => !n || !o || !s ? [] : xt(n, o, s), [n?.states, o, s]), we = (S, Y) => {
    t?.applyTheme?.(S, Y);
  };
  if (!n)
    return /* @__PURE__ */ e("div", { class: "nido-loading", children: "Connexion à Home Assistant…" });
  if (p)
    return /* @__PURE__ */ e("div", { class: "nido-loading nido-loading--error", children: [
      "Erreur : ",
      p
    ] });
  if (!r || !o || !s)
    return /* @__PURE__ */ e("div", { class: "nido-loading", children: "Chargement des pièces et entités…" });
  if (!!n.user && g.includes(n.user.id))
    return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-denied", children: [
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Nido n'est pas pour ",
        /* @__PURE__ */ e("em", { children: "vous" }),
        "."
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Votre compte n'a pas accès à ce tableau de bord. Vous pouvez continuer à utiliser Home Assistant normalement." })
    ] }) });
  const ie = V(() => new Set(u), [u]), B = E.kind === "room" ? r.find((S) => S.area_id === E.areaId) ?? null : null, Me = V(
    () => B ? Z.filter(
      (S) => S.area_id === B.area_id && ie.has(S.entity_id)
    ) : [],
    [Z, B, ie]
  );
  return /* @__PURE__ */ e(H, { children: [
    E.kind === "dashboard" || !B ? /* @__PURE__ */ e(
      $r,
      {
        hass: n,
        areas: r,
        entities: Z,
        favorites: d,
        exposed: u,
        roomsOrder: m,
        onConfigure: () => L(!0),
        onOpenRoom: (S) => R({ kind: "room", areaId: S }),
        onReorderFavorites: D,
        onReorderRooms: j
      }
    ) : /* @__PURE__ */ e(
      Dr,
      {
        hass: n,
        area: B,
        entities: Me,
        entitiesOrder: I[B.area_id] ?? [],
        onBack: () => R({ kind: "dashboard" }),
        onReorderEntities: (S) => M(B.area_id, S)
      }
    ),
    N && /* @__PURE__ */ e(
      Lr,
      {
        hass: n,
        entities: Z,
        areas: r,
        initialTheme: h.theme,
        initialMode: h.mode,
        initialExposed: u,
        initialFavorites: d,
        initialExcludedUsers: g,
        isReturning: hn(),
        onApplyTheme: we,
        onClose: () => L(!1),
        onDone: (S) => {
          b(S.exposed), _(S.favorites), f(S.excludedUsers), L(!1);
        }
      }
    )
  ] });
}
const Br = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', Wr = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-shell{width:100%;height:100%;overflow:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px)}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__time{font-family:var(--font-mono);font-size:12px;letter-spacing:.08em;color:var(--ink-3)}.nido-topbar__brand{font-family:var(--font-display);font-weight:600;font-size:18px;letter-spacing:-.02em}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card[data-hero=true]{min-height:200px;padding:24px}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:var(--bg-inset);outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:#fff3}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3)}.n-media__volume .n-slider{flex:1}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:auto;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:calc(100vh - 32px);overflow:hidden}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__grid{flex:1;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:60vh;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}', wn = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let Mn = !1;
function Zr() {
  if (Mn || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${wn}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = wn, document.head.appendChild(t);
  }
  Mn = !0;
}
class Yr extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, Zr();
    const t = this.attachShadow({ mode: "open" }), r = document.createElement("style");
    r.textContent = `${Br}
${Wr}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(r, this._mountPoint);
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
    const { theme: t, mode: r } = Hn();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", r), this._render();
  }
  disconnectedCallback() {
    nn(null, this._mountPoint);
  }
  applyTheme(t, r) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", r);
  }
  _render() {
    nn(zn(Ur, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", Yr);
console.info(
  "%c NIDO %c v0.1.0 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
