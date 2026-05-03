var Te, T, Rn, X, ln, Fn, Vn, Pe, we, ce, Hn, Be, je, Re, ze = {}, Se = [], Pt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, De = Array.isArray;
function q(n, t) {
  for (var i in t) n[i] = t[i];
  return n;
}
function Ze(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function Un(n, t, i) {
  var a, o, r, s = {};
  for (r in t) r == "key" ? a = t[r] : r == "ref" ? o = t[r] : s[r] = t[r];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Te.call(arguments, 2) : i), typeof n == "function" && n.defaultProps != null) for (r in n.defaultProps) s[r] === void 0 && (s[r] = n.defaultProps[r]);
  return ke(n, s, a, o, null);
}
function ke(n, t, i, a, o) {
  var r = { type: n, props: t, key: i, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++Rn, __i: -1, __u: 0 };
  return o == null && T.vnode != null && T.vnode(r), r;
}
function H(n) {
  return n.children;
}
function Me(n, t) {
  this.props = n, this.context = t;
}
function re(n, t) {
  if (t == null) return n.__ ? re(n.__, n.__i + 1) : null;
  for (var i; t < n.__k.length; t++) if ((i = n.__k[t]) != null && i.__e != null) return i.__e;
  return typeof n.type == "function" ? re(n) : null;
}
function $t(n) {
  if (n.__P && n.__d) {
    var t = n.__v, i = t.__e, a = [], o = [], r = q({}, t);
    r.__v = t.__v + 1, T.vnode && T.vnode(r), Ye(n.__P, r, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [i] : null, a, i ?? re(t), !!(32 & t.__u), o), r.__v = t.__v, r.__.__k[r.__i] = r, Yn(a, r, o), t.__e = t.__ = null, r.__e != i && Wn(r);
  }
}
function Wn(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), Wn(n);
}
function cn(n) {
  (!n.__d && (n.__d = !0) && X.push(n) && !Ce.__r++ || ln != T.debounceRendering) && ((ln = T.debounceRendering) || Fn)(Ce);
}
function Ce() {
  try {
    for (var n, t = 1; X.length; ) X.length > t && X.sort(Vn), n = X.shift(), t = X.length, $t(n);
  } finally {
    X.length = Ce.__r = 0;
  }
}
function Bn(n, t, i, a, o, r, s, l, p, c, u) {
  var d, _, f, x, b, m, h, g = a && a.__k || Se, w = t.length;
  for (p = Ot(i, t, g, p, w), d = 0; d < w; d++) (f = i.__k[d]) != null && (_ = f.__i != -1 && g[f.__i] || ze, f.__i = d, m = Ye(n, f, _, o, r, s, l, p, c, u), x = f.__e, f.ref && _.ref != f.ref && (_.ref && qe(_.ref, null, f), u.push(f.ref, f.__c || x, f)), b == null && x != null && (b = x), (h = !!(4 & f.__u)) || _.__k === f.__k ? (p = Zn(f, p, n, h), h && _.__e && (_.__e = null)) : typeof f.type == "function" && m !== void 0 ? p = m : x && (p = x.nextSibling), f.__u &= -7);
  return i.__e = b, p;
}
function Ot(n, t, i, a, o) {
  var r, s, l, p, c, u = i.length, d = u, _ = 0;
  for (n.__k = new Array(o), r = 0; r < o; r++) (s = t[r]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = n.__k[r] = ke(null, s, null, null, null) : De(s) ? s = n.__k[r] = ke(H, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = n.__k[r] = ke(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : n.__k[r] = s, p = r + _, s.__ = n, s.__b = n.__b + 1, l = null, (c = s.__i = Nt(s, i, p, d)) != -1 && (d--, (l = i[c]) && (l.__u |= 2)), l == null || l.__v == null ? (c == -1 && (o > u ? _-- : o < u && _++), typeof s.type != "function" && (s.__u |= 4)) : c != p && (c == p - 1 ? _-- : c == p + 1 ? _++ : (c > p ? _-- : _++, s.__u |= 4))) : n.__k[r] = null;
  if (d) for (r = 0; r < u; r++) (l = i[r]) != null && (2 & l.__u) == 0 && (l.__e == a && (a = re(l)), Jn(l, l));
  return a;
}
function Zn(n, t, i, a) {
  var o, r;
  if (typeof n.type == "function") {
    for (o = n.__k, r = 0; o && r < o.length; r++) o[r] && (o[r].__ = n, t = Zn(o[r], t, i, a));
    return t;
  }
  n.__e != t && (a && (t && n.type && !t.parentNode && (t = re(n)), i.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Nt(n, t, i, a) {
  var o, r, s, l = n.key, p = n.type, c = t[i], u = c != null && (2 & c.__u) == 0;
  if (c === null && l == null || u && l == c.key && p == c.type) return i;
  if (a > (u ? 1 : 0)) {
    for (o = i - 1, r = i + 1; o >= 0 || r < t.length; ) if ((c = t[s = o >= 0 ? o-- : r++]) != null && (2 & c.__u) == 0 && l == c.key && p == c.type) return s;
  }
  return -1;
}
function dn(n, t, i) {
  t[0] == "-" ? n.setProperty(t, i ?? "") : n[t] = i == null ? "" : typeof i != "number" || Pt.test(t) ? i : i + "px";
}
function ge(n, t, i, a, o) {
  var r, s;
  e: if (t == "style") if (typeof i == "string") n.style.cssText = i;
  else {
    if (typeof a == "string" && (n.style.cssText = a = ""), a) for (t in a) i && t in i || dn(n.style, t, "");
    if (i) for (t in i) a && i[t] == a[t] || dn(n.style, t, i[t]);
  }
  else if (t[0] == "o" && t[1] == "n") r = t != (t = t.replace(Hn, "$1")), s = t.toLowerCase(), t = s in n || t == "onFocusOut" || t == "onFocusIn" ? s.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = i, i ? a ? i[ce] = a[ce] : (i[ce] = Be, n.addEventListener(t, r ? Re : je, r)) : n.removeEventListener(t, r ? Re : je, r);
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
function pn(n) {
  return function(t) {
    if (this.l) {
      var i = this.l[t.type + n];
      if (t[we] == null) t[we] = Be++;
      else if (t[we] < i[ce]) return;
      return i(T.event ? T.event(t) : t);
    }
  };
}
function Ye(n, t, i, a, o, r, s, l, p, c) {
  var u, d, _, f, x, b, m, h, g, w, A, z, L, P, j, $ = t.type;
  if (t.constructor !== void 0) return null;
  128 & i.__u && (p = !!(32 & i.__u), r = [l = t.__e = i.__e]), (u = T.__b) && u(t);
  e: if (typeof $ == "function") try {
    if (h = t.props, g = $.prototype && $.prototype.render, w = (u = $.contextType) && a[u.__c], A = u ? w ? w.props.value : u.__ : a, i.__c ? m = (d = t.__c = i.__c).__ = d.__E : (g ? t.__c = d = new $(h, A) : (t.__c = d = new Me(h, A), d.constructor = $, d.render = jt), w && w.sub(d), d.state || (d.state = {}), d.__n = a, _ = d.__d = !0, d.__h = [], d._sb = []), g && d.__s == null && (d.__s = d.state), g && $.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = q({}, d.__s)), q(d.__s, $.getDerivedStateFromProps(h, d.__s))), f = d.props, x = d.state, d.__v = t, _) g && $.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), g && d.componentDidMount != null && d.__h.push(d.componentDidMount);
    else {
      if (g && $.getDerivedStateFromProps == null && h !== f && d.componentWillReceiveProps != null && d.componentWillReceiveProps(h, A), t.__v == i.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(h, d.__s, A) === !1) {
        t.__v != i.__v && (d.props = h, d.state = d.__s, d.__d = !1), t.__e = i.__e, t.__k = i.__k, t.__k.some(function(V) {
          V && (V.__ = t);
        }), Se.push.apply(d.__h, d._sb), d._sb = [], d.__h.length && s.push(d);
        break e;
      }
      d.componentWillUpdate != null && d.componentWillUpdate(h, d.__s, A), g && d.componentDidUpdate != null && d.__h.push(function() {
        d.componentDidUpdate(f, x, b);
      });
    }
    if (d.context = A, d.props = h, d.__P = n, d.__e = !1, z = T.__r, L = 0, g) d.state = d.__s, d.__d = !1, z && z(t), u = d.render(d.props, d.state, d.context), Se.push.apply(d.__h, d._sb), d._sb = [];
    else do
      d.__d = !1, z && z(t), u = d.render(d.props, d.state, d.context), d.state = d.__s;
    while (d.__d && ++L < 25);
    d.state = d.__s, d.getChildContext != null && (a = q(q({}, a), d.getChildContext())), g && !_ && d.getSnapshotBeforeUpdate != null && (b = d.getSnapshotBeforeUpdate(f, x)), P = u != null && u.type === H && u.key == null ? qn(u.props.children) : u, l = Bn(n, De(P) ? P : [P], t, i, a, o, r, s, l, p, c), d.base = t.__e, t.__u &= -161, d.__h.length && s.push(d), m && (d.__E = d.__ = null);
  } catch (V) {
    if (t.__v = null, p || r != null) if (V.then) {
      for (t.__u |= p ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; ) l = l.nextSibling;
      r[r.indexOf(l)] = null, t.__e = l;
    } else {
      for (j = r.length; j--; ) Ze(r[j]);
      Fe(t);
    }
    else t.__e = i.__e, t.__k = i.__k, V.then || Fe(t);
    T.__e(V, t, i);
  }
  else r == null && t.__v == i.__v ? (t.__k = i.__k, t.__e = i.__e) : l = t.__e = Lt(i.__e, t, i, a, o, r, s, p, c);
  return (u = T.diffed) && u(t), 128 & t.__u ? void 0 : l;
}
function Fe(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(Fe));
}
function Yn(n, t, i) {
  for (var a = 0; a < i.length; a++) qe(i[a], i[++a], i[++a]);
  T.__c && T.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      T.__e(r, o.__v);
    }
  });
}
function qn(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : De(n) ? n.map(qn) : q({}, n);
}
function Lt(n, t, i, a, o, r, s, l, p) {
  var c, u, d, _, f, x, b, m = i.props || ze, h = t.props, g = t.type;
  if (g == "svg" ? o = "http://www.w3.org/2000/svg" : g == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 0; c < r.length; c++) if ((f = r[c]) && "setAttribute" in f == !!g && (g ? f.localName == g : f.nodeType == 3)) {
      n = f, r[c] = null;
      break;
    }
  }
  if (n == null) {
    if (g == null) return document.createTextNode(h);
    n = document.createElementNS(o, g, h.is && h), l && (T.__m && T.__m(t, r), l = !1), r = null;
  }
  if (g == null) m === h || l && n.data == h || (n.data = h);
  else {
    if (r = r && Te.call(n.childNodes), !l && r != null) for (m = {}, c = 0; c < n.attributes.length; c++) m[(f = n.attributes[c]).name] = f.value;
    for (c in m) f = m[c], c == "dangerouslySetInnerHTML" ? d = f : c == "children" || c in h || c == "value" && "defaultValue" in h || c == "checked" && "defaultChecked" in h || ge(n, c, null, f, o);
    for (c in h) f = h[c], c == "children" ? _ = f : c == "dangerouslySetInnerHTML" ? u = f : c == "value" ? x = f : c == "checked" ? b = f : l && typeof f != "function" || m[c] === f || ge(n, c, f, m[c], o);
    if (u) l || d && (u.__html == d.__html || u.__html == n.innerHTML) || (n.innerHTML = u.__html), t.__k = [];
    else if (d && (n.innerHTML = ""), Bn(t.type == "template" ? n.content : n, De(_) ? _ : [_], t, i, a, g == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, s, r ? r[0] : i.__k && re(i, 0), l, p), r != null) for (c = r.length; c--; ) Ze(r[c]);
    l || (c = "value", g == "progress" && x == null ? n.removeAttribute("value") : x != null && (x !== n[c] || g == "progress" && !x || g == "option" && x != m[c]) && ge(n, c, x, m[c], o), c = "checked", b != null && b != n[c] && ge(n, c, b, m[c], o));
  }
  return n;
}
function qe(n, t, i) {
  try {
    if (typeof n == "function") {
      var a = typeof n.__u == "function";
      a && n.__u(), a && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    T.__e(o, i);
  }
}
function Jn(n, t, i) {
  var a, o;
  if (T.unmount && T.unmount(n), (a = n.ref) && (a.current && a.current != n.__e || qe(a, null, t)), (a = n.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (r) {
      T.__e(r, t);
    }
    a.base = a.__P = null;
  }
  if (a = n.__k) for (o = 0; o < a.length; o++) a[o] && Jn(a[o], t, i || typeof n.type != "function");
  i || Ze(n.__e), n.__c = n.__ = n.__e = void 0;
}
function jt(n, t, i) {
  return this.constructor(n, i);
}
function un(n, t, i) {
  var a, o, r, s;
  t == document && (t = document.documentElement), T.__ && T.__(n, t), o = (a = !1) ? null : t.__k, r = [], s = [], Ye(t, n = t.__k = Un(H, null, [n]), o || ze, ze, t.namespaceURI, o ? null : t.firstChild ? Te.call(t.childNodes) : null, r, o ? o.__e : t.firstChild, a, s), Yn(r, n, s);
}
Te = Se.slice, T = { __e: function(n, t, i, a) {
  for (var o, r, s; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(n)), s = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, a || {}), s = o.__d), s) return o.__E = o;
  } catch (l) {
    n = l;
  }
  throw n;
} }, Rn = 0, Me.prototype.setState = function(n, t) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = q({}, this.state), typeof n == "function" && (n = n(q({}, i), this.props)), n && q(i, n), n != null && this.__v && (t && this._sb.push(t), cn(this));
}, Me.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), cn(this));
}, Me.prototype.render = H, X = [], Fn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Vn = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Ce.__r = 0, Pe = Math.random().toString(8), we = "__d" + Pe, ce = "__a" + Pe, Hn = /(PointerCapture)$|Capture$/i, Be = 0, je = pn(!1), Re = pn(!0);
var Rt = 0;
function e(n, t, i, a, o, r) {
  t || (t = {});
  var s, l, p = t;
  if ("ref" in p) for (l in p = {}, t) l == "ref" ? s = t[l] : p[l] = t[l];
  var c = { type: n, props: p, key: i, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Rt, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof n == "function" && (s = n.defaultProps)) for (l in s) p[l] === void 0 && (p[l] = s[l]);
  return T.vnode && T.vnode(c), c;
}
var ue, O, $e, hn, he = 0, Xn = [], N = T, _n = N.__b, fn = N.__r, mn = N.diffed, gn = N.__c, bn = N.unmount, vn = N.__;
function Je(n, t) {
  N.__h && N.__h(O, n, he || t), he = 0;
  var i = O.__H || (O.__H = { __: [], __h: [] });
  return n >= i.__.length && i.__.push({}), i.__[n];
}
function k(n) {
  return he = 1, Ft(Kn, n);
}
function Ft(n, t, i) {
  var a = Je(ue++, 2);
  if (a.t = n, !a.__c && (a.__ = [Kn(void 0, t), function(l) {
    var p = a.__N ? a.__N[0] : a.__[0], c = a.t(p, l);
    p !== c && (a.__N = [c, a.__[1]], a.__c.setState({}));
  }], a.__c = O, !O.__f)) {
    var o = function(l, p, c) {
      if (!a.__c.__H) return !0;
      var u = a.__c.__H.__.filter(function(_) {
        return _.__c;
      });
      if (u.every(function(_) {
        return !_.__N;
      })) return !r || r.call(this, l, p, c);
      var d = a.__c.props !== l;
      return u.some(function(_) {
        if (_.__N) {
          var f = _.__[0];
          _.__ = _.__N, _.__N = void 0, f !== _.__[0] && (d = !0);
        }
      }), r && r.call(this, l, p, c) || d;
    };
    O.__f = !0;
    var r = O.shouldComponentUpdate, s = O.componentWillUpdate;
    O.componentWillUpdate = function(l, p, c) {
      if (this.__e) {
        var u = r;
        r = void 0, o(l, p, c), r = u;
      }
      s && s.call(this, l, p, c);
    }, O.shouldComponentUpdate = o;
  }
  return a.__N || a.__;
}
function K(n, t) {
  var i = Je(ue++, 3);
  !N.__s && Gn(i.__H, t) && (i.__ = n, i.u = t, O.__H.__h.push(i));
}
function ae(n) {
  return he = 5, D(function() {
    return { current: n };
  }, []);
}
function D(n, t) {
  var i = Je(ue++, 7);
  return Gn(i.__H, t) && (i.__ = n(), i.__H = t, i.__h = n), i.__;
}
function xn(n, t) {
  return he = 8, D(function() {
    return n;
  }, t);
}
function Vt() {
  for (var n; n = Xn.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(Ie), t.__h.some(Ve), t.__h = [];
    } catch (i) {
      t.__h = [], N.__e(i, n.__v);
    }
  }
}
N.__b = function(n) {
  O = null, _n && _n(n);
}, N.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), vn && vn(n, t);
}, N.__r = function(n) {
  fn && fn(n), ue = 0;
  var t = (O = n.__c).__H;
  t && ($e === O ? (t.__h = [], O.__h = [], t.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (t.__h.some(Ie), t.__h.some(Ve), t.__h = [], ue = 0)), $e = O;
}, N.diffed = function(n) {
  mn && mn(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (Xn.push(t) !== 1 && hn === N.requestAnimationFrame || ((hn = N.requestAnimationFrame) || Ht)(Vt)), t.__H.__.some(function(i) {
    i.u && (i.__H = i.u), i.u = void 0;
  })), $e = O = null;
}, N.__c = function(n, t) {
  t.some(function(i) {
    try {
      i.__h.some(Ie), i.__h = i.__h.filter(function(a) {
        return !a.__ || Ve(a);
      });
    } catch (a) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], N.__e(a, i.__v);
    }
  }), gn && gn(n, t);
}, N.unmount = function(n) {
  bn && bn(n);
  var t, i = n.__c;
  i && i.__H && (i.__H.__.some(function(a) {
    try {
      Ie(a);
    } catch (o) {
      t = o;
    }
  }), i.__H = void 0, t && N.__e(t, i.__v));
};
var yn = typeof requestAnimationFrame == "function";
function Ht(n) {
  var t, i = function() {
    clearTimeout(a), yn && cancelAnimationFrame(t), setTimeout(n);
  }, a = setTimeout(i, 35);
  yn && (t = requestAnimationFrame(i));
}
function Ie(n) {
  var t = O, i = n.__c;
  typeof i == "function" && (n.__c = void 0, i()), O = t;
}
function Ve(n) {
  var t = O;
  n.__c = n.__(), O = t;
}
function Gn(n, t) {
  return !n || n.length !== t.length || t.some(function(i, a) {
    return i !== n[a];
  });
}
function Kn(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function Ut(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((i, a) => i.name.localeCompare(a.name, "fr"));
}
async function Wt(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function Bt(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function Zt(n) {
  return n.split(".")[0] ?? "";
}
function Yt(n, t, i) {
  const a = new Map(i.map((s) => [s.id, s.area_id])), o = new Map(t.map((s) => [s.entity_id, s])), r = [];
  for (const [s, l] of Object.entries(n.states)) {
    const p = o.get(s);
    if (p?.disabled_by || p?.hidden_by) continue;
    const c = p?.area_id ?? (p?.device_id ? a.get(p.device_id) ?? null : null), u = p?.name ?? l.attributes.friendly_name ?? p?.original_name ?? s;
    r.push({
      entity_id: s,
      domain: Zt(s),
      area_id: c,
      friendly_name: u,
      state: l
    });
  }
  return r;
}
function qt(n) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const a = t.get(i.area_id) ?? [];
    a.push(i), t.set(i.area_id, a);
  }
  return t;
}
function Xe(n) {
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
function Qn(n) {
  const t = {};
  for (const i of n) {
    if (i.domain !== "sensor") continue;
    const a = i.state.attributes.device_class, o = i.state.attributes.unit_of_measurement ?? "", r = i.state.state;
    r === "unavailable" || r === "unknown" || (a === "temperature" && !t.temperature ? t.temperature = { value: r, unit: o } : a === "humidity" && !t.humidity ? t.humidity = { value: r, unit: o } : a === "illuminance" && !t.illuminance && (t.illuminance = { value: r, unit: o }));
  }
  return t;
}
const R = {
  favorites: "nido.favorites",
  exposed: "nido.exposed",
  excludedUsers: "nido.excludedUsers",
  roomsOrder: "nido.roomsOrder",
  roomEntitiesOrder: "nido.roomEntitiesOrder",
  onboarded: "nido.onboarded",
  theme: "nido.theme",
  mode: "nido.mode",
  lastNotificationRead: "nido.lastNotificationRead"
}, et = ["terracotta", "miel", "sauge", "cosy"], Jt = ["light", "dark"];
function W() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function Xt() {
  const n = W();
  if (!n) return [];
  const t = n.getItem(R.favorites);
  if (!t) return [];
  try {
    const i = JSON.parse(t);
    return Array.isArray(i) ? i.filter((a) => typeof a == "string") : [];
  } catch {
    return [];
  }
}
function He(n) {
  const t = W();
  t && t.setItem(R.favorites, JSON.stringify(n));
}
function Ge(n) {
  const t = W();
  if (!t) return [];
  const i = t.getItem(n);
  if (!i) return [];
  try {
    const a = JSON.parse(i);
    return Array.isArray(a) ? a.filter((o) => typeof o == "string") : [];
  } catch {
    return [];
  }
}
function Ke(n, t) {
  const i = W();
  i && i.setItem(n, JSON.stringify(t));
}
const Gt = () => Ge(R.exposed), wn = (n) => Ke(R.exposed, n), Kt = () => Ge(R.excludedUsers), kn = (n) => Ke(R.excludedUsers, n), Qt = () => Ge(R.roomsOrder), ei = (n) => Ke(R.roomsOrder, n);
function ni() {
  const n = W();
  if (!n) return {};
  const t = n.getItem(R.roomEntitiesOrder);
  if (!t) return {};
  try {
    const i = JSON.parse(t);
    if (typeof i != "object" || i === null) return {};
    const a = {};
    for (const [o, r] of Object.entries(i))
      Array.isArray(r) && (a[o] = r.filter((s) => typeof s == "string"));
    return a;
  } catch {
    return {};
  }
}
function ti(n) {
  const t = W();
  t && t.setItem(R.roomEntitiesOrder, JSON.stringify(n));
}
function Mn() {
  return W()?.getItem(R.onboarded) === "1";
}
function In(n) {
  const t = W();
  t && t.setItem(R.onboarded, "1");
}
function nt() {
  const n = W(), t = n?.getItem(R.theme), i = n?.getItem(R.mode);
  return {
    theme: et.includes(t) ? t : "terracotta",
    mode: Jt.includes(i) ? i : "light"
  };
}
function zn(n, t) {
  const i = W();
  i && (i.setItem(R.theme, n), i.setItem(R.mode, t));
}
function ii() {
  return W()?.getItem(R.lastNotificationRead) ?? null;
}
function ai(n) {
  W()?.setItem(R.lastNotificationRead, n);
}
const ri = 6, oi = 20;
function si(n, t) {
  if (!(n instanceof Element)) return !1;
  let i = n;
  for (; i && i !== t; ) {
    const a = i.tagName;
    if (a === "INPUT" || a === "BUTTON" || a === "SELECT" || a === "TEXTAREA" || a === "A")
      return !0;
    const o = i.getAttribute("role");
    if (o === "switch" || o === "button" || o === "slider" || i.hasAttribute("data-no-drag")) return !0;
    i = i.parentElement;
  }
  return !1;
}
function tt(n, t, i) {
  if (t.length === 0) return n;
  const a = new Map(n.map((s) => [i(s), s])), o = /* @__PURE__ */ new Set(), r = [];
  for (const s of t) {
    const l = a.get(s);
    l && !o.has(s) && (r.push(l), o.add(s));
  }
  for (const s of n) {
    const l = i(s);
    o.has(l) || (r.push(s), o.add(l));
  }
  return r;
}
function Ue(n, t, i) {
  const [a, o] = k({ draggingId: null, overId: null }), r = ae(null), s = ae(null), l = ae(n);
  l.current = n;
  const p = ae(i);
  p.current = i;
  const c = ae(t);
  c.current = t;
  const u = xn((_, f) => {
    const x = s.current;
    if (!x) return null;
    const b = x.querySelectorAll("[data-drag-id]");
    for (const m of Array.from(b)) {
      const h = m.getBoundingClientRect();
      if (_ >= h.left && _ <= h.right && f >= h.top && f <= h.bottom)
        return m.getAttribute("data-drag-id");
    }
    return null;
  }, []);
  K(() => {
    const _ = (b) => {
      const m = r.current;
      if (!m || m.pointerType !== "touch") return;
      if (m.entered) {
        b.preventDefault();
        return;
      }
      const h = b.touches[0];
      if (!h) return;
      const g = h.clientX - m.x, w = h.clientY - m.y;
      Math.hypot(g, w) <= oi ? b.preventDefault() : (m.timerId && clearTimeout(m.timerId), r.current = null);
    }, f = (b) => {
      const m = r.current;
      if (!m) return;
      if (m.pointerType === "touch") {
        if (!m.entered)
          return;
      } else if (!m.entered) {
        const g = b.clientX - m.x, w = b.clientY - m.y;
        if (Math.hypot(g, w) < ri) return;
        m.entered = !0, o({ draggingId: m.id, overId: null });
      }
      const h = u(b.clientX, b.clientY);
      o((g) => g.overId === h ? g : { ...g, overId: h });
    }, x = () => {
      const b = r.current;
      if (b?.timerId && clearTimeout(b.timerId), r.current = null, !b || !b.entered) return;
      const m = (h) => {
        h.preventDefault(), h.stopPropagation();
      };
      window.addEventListener("click", m, { capture: !0, once: !0 }), o((h) => {
        const { draggingId: g, overId: w } = h;
        if (g && w && g !== w) {
          const A = l.current, z = c.current, L = A.findIndex((j) => z(j) === g), P = A.findIndex((j) => z(j) === w);
          if (L >= 0 && P >= 0) {
            const j = [...A], [$] = j.splice(L, 1);
            j.splice(P, 0, $), p.current(j);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", f), document.addEventListener("pointerup", x), document.addEventListener("pointercancel", x), document.addEventListener("touchmove", _, { passive: !1 }), () => {
      document.removeEventListener("pointermove", f), document.removeEventListener("pointerup", x), document.removeEventListener("pointercancel", x), document.removeEventListener("touchmove", _);
    };
  }, [u]);
  const d = xn(
    (_) => {
      const f = a.draggingId === _, x = a.draggingId !== null && a.draggingId !== _ && a.overId === _;
      return {
        "data-drag-id": _,
        "data-dragging": f ? "true" : void 0,
        "data-drag-over": x ? "true" : void 0,
        onPointerDown: (b) => {
          if (b.button !== void 0 && b.button !== 0) return;
          const m = b.currentTarget;
          if (!si(b.target, m))
            if (b.pointerType === "touch") {
              const h = window.setTimeout(() => {
                const g = r.current;
                g && g.id === _ && !g.entered && (g.entered = !0, o({ draggingId: _, overId: null }), "vibrate" in navigator && navigator.vibrate(50));
              }, 1500);
              r.current = { id: _, x: b.clientX, y: b.clientY, entered: !1, pointerType: "touch", timerId: h };
            } else
              r.current = { id: _, x: b.clientX, y: b.clientY, entered: !1, pointerType: b.pointerType };
        }
      };
    },
    [a.draggingId, a.overId]
  );
  return {
    containerRef: s,
    itemPropsFor: d,
    isDragging: a.draggingId !== null
  };
}
const v = ({ children: n, size: t = 24, stroke: i = 1.5, fill: a = "none", style: o }) => /* @__PURE__ */ e(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 24 24",
    fill: a,
    stroke: "currentColor",
    "stroke-width": i,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    style: o,
    children: n
  }
), fe = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), it = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" }),
  /* @__PURE__ */ e("path", { d: "M10 19a2 2 0 0 0 4 0" })
] }), li = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), ci = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), Qe = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), en = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 8V4M15 8V4" }),
  /* @__PURE__ */ e("path", { d: "M6 8h12v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }),
  /* @__PURE__ */ e("path", { d: "M12 16v5" })
] }), Sn = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), Cn = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "9" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4", "stroke-dasharray": "1 2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "0.8", fill: "currentColor" })
] }), di = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), de = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), G = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), pi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), ui = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), _e = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), nn = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), hi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), tn = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), _i = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), fi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), mi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), gi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), oe = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), at = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), rt = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), be = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), an = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), ot = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" }) }), st = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" }),
  /* @__PURE__ */ e("path", { d: "M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" })
] }), An = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M9 18v2M13 18v3M17 18v2" })
] }), Oe = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" })
] }), Ne = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "m12 17-2 4h3l-1 3" })
] }), bi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" }),
  /* @__PURE__ */ e("path", { d: "M5 17h14M3 21h18" })
] }), En = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 8h12a3 3 0 1 0-3-3" }),
  /* @__PURE__ */ e("path", { d: "M3 13h17a3 3 0 1 1-3 3" }),
  /* @__PURE__ */ e("path", { d: "M3 18h9" })
] }), vi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), xi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), rn = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), yi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), wi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), ki = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), Mi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), Ii = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), zi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), Si = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), Ae = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), on = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), sn = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), Tn = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), Ci = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), Ai = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), Ei = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), Ti = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ e("path", { d: "m20 20-3.5-3.5" })
] }), se = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M6 6l12 12M18 6 6 18" }) }), Di = (n) => /* @__PURE__ */ e(v, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), lt = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), Pi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), $i = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), Oi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), Ni = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), Li = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), ji = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), Ri = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), Fi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), Vi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), Hi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), ct = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 9v4" }),
  /* @__PURE__ */ e("path", { d: "M12 17h.01" })
] }), Ui = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 12v8a2 2 0 0 0 4 0" }),
  /* @__PURE__ */ e("path", { d: "M12 2v1" })
] }), Wi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
] }), Bi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "M12 16v-4" }),
  /* @__PURE__ */ e("path", { d: "M12 8h.01" })
] }), Zi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), dt = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
] });
function Yi(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function pt({
  hass: n,
  entity: t,
  hero: i = !1,
  breatheVariant: a = 1,
  roomLabel: o
}) {
  const r = t.state.state === "on", s = t.state.state === "unavailable", [l, p] = k(!1), [c, u] = k(null), d = c ?? Yi(t.state), _ = async () => {
    if (!s) {
      p(!0);
      try {
        await n.callService("light", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, f = async (m) => {
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
    i ? r ? "n-card--accent" : "n-card--accent-muted" : "n-card--default",
    r ? `breathe-${a}` : "",
    l ? "is-pending" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: b, "data-hero": i ? "true" : "false", "data-on": r ? "true" : "false", children: [
    r && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(fe, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": r,
          disabled: s || l,
          onClick: _,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: o }),
    /* @__PURE__ */ e("div", { class: `n-title ${i ? "n-title--xl" : ""}`, children: t.friendly_name }),
    r && !s && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
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
          onInput: (m) => f(Number(m.target.value))
        }
      )
    ] }),
    !r && !s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Éteinte" }),
    s && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function qi(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function ut({ hass: n, entity: t, roomLabel: i }) {
  const a = t.state.state === "unavailable", [o, r] = k(null), s = o ?? qi(t.state), l = s > 0, p = async (c) => {
    r(c);
    try {
      await n.callService("cover", "set_cover_position", {
        entity_id: t.entity_id,
        position: c
      });
    } finally {
      setTimeout(() => r(null), 50);
    }
  };
  return /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": l ? "true" : "false", children: /* @__PURE__ */ e("div", { class: "n-card", "data-on": l ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Qe, { size: 20 }) }),
      /* @__PURE__ */ e("div", { class: "n-blinds", children: [0, 1, 2, 3, 4, 5].map((c) => /* @__PURE__ */ e(
        "span",
        {
          class: "n-blinds__bar",
          "data-active": c / 6 * 100 < s ? "true" : "false"
        },
        c
      )) })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !a && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
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
          style: { "--val": `${s}%` },
          onInput: (c) => p(Number(c.target.value))
        }
      ),
      /* @__PURE__ */ e("div", { style: { marginTop: "12px", display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          style: { fontSize: "12px", padding: "6px 12px" },
          onClick: () => p(s !== 0 ? 0 : 100),
          children: s !== 0 ? "Fermer" : "Ouvrir"
        }
      ) })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] }) });
}
function ht({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: a = 2
}) {
  const o = t.state.state === "on", r = t.state.state === "unavailable", [s, l] = k(!1), p = t.state.attributes.current_power_w, c = async () => {
    if (!r) {
      l(!0);
      try {
        await n.callService("switch", "toggle", { entity_id: t.entity_id });
      } finally {
        l(!1);
      }
    }
  }, u = ["n-card", o ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: u, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(en, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: r || s,
          onClick: c,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    typeof p == "number" && /* @__PURE__ */ e("div", { class: "n-power", children: [
      /* @__PURE__ */ e("span", { class: o ? "n-power__value" : "n-power__value n-power__value--muted", children: Math.round(o ? p : 0) }),
      /* @__PURE__ */ e("span", { class: "n-power__unit", children: "W" })
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const Ji = {
  door: Sn,
  garage_door: Sn,
  window: ui,
  smoke: Cn,
  gas: Cn,
  moisture: di,
  motion: de,
  occupancy: de,
  presence: de
}, Xi = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, Gi = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]), Ki = /* @__PURE__ */ new Set(["door", "garage_door", "window"]);
function _t({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", a = n.state.state === "on", o = n.state.state === "unavailable", r = Ji[i] ?? _e, s = Xi[i] ?? { on: "Actif", off: "Inactif" }, l = Gi.has(i), p = Ki.has(i), u = /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": o ? "indisponible" : a ? "on" : "off", "data-alert": l ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(r, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-dot", "aria-hidden": "true" })
    ] }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: o ? "Indisponible" : a ? s.on : s.off })
  ] });
  return p ? /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": a ? "true" : "false", children: u }) : u;
}
const Qi = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, ea = {
  heat: _i,
  cool: fi,
  heat_cool: G,
  auto: G,
  dry: G,
  fan_only: G
};
function ft({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: a = 2
}) {
  const o = t.state.state === "unavailable", r = t.state.state, s = r !== "off" && !o, l = t.state.attributes.current_temperature, p = t.state.attributes.temperature, c = t.state.attributes.min_temp ?? 7, u = t.state.attributes.max_temp ?? 35, d = t.state.attributes.target_temp_step ?? 0.5, [_, f] = k(null), x = _ ?? p ?? l ?? 20, b = async (g) => {
    const w = Math.min(u, Math.max(c, g));
    f(w);
    try {
      await n.callService("climate", "set_temperature", {
        entity_id: t.entity_id,
        temperature: w
      });
    } finally {
      setTimeout(() => f(null), 50);
    }
  }, m = ea[r] ?? G, h = ["n-card", s ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-on": s ? "true" : "false", children: [
    s && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(m, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Qi[r] ?? r })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !o && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-climate__temp", children: [
        /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: [
          Math.round(x * 10) / 10,
          /* @__PURE__ */ e("span", { class: "n-value__unit", children: "°C" })
        ] }),
        typeof l == "number" && /* @__PURE__ */ e("span", { class: "n-muted", children: [
          "Actuelle ",
          Math.round(l * 10) / 10,
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
            onClick: () => b(x - d),
            disabled: x - d < c,
            children: /* @__PURE__ */ e(mi, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-stepper",
            "aria-label": "Augmenter",
            onClick: () => b(x + d),
            disabled: x + d > u,
            children: /* @__PURE__ */ e(gi, { size: 16 })
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function mt({ hass: n, entity: t, roomLabel: i }) {
  const a = t.state.state, o = a === "unavailable", r = a === "locked", s = a === "jammed", l = a === "locking" || a === "unlocking", [p, c] = k(!1), u = async () => {
    if (!(o || l || p)) {
      c(!0);
      try {
        await n.callService("lock", r ? "unlock" : "lock", {
          entity_id: t.entity_id
        });
      } finally {
        c(!1);
      }
    }
  }, d = o ? "Indisponible" : s ? "Bloquée" : l ? a === "locking" ? "Verrouillage…" : "Déverrouillage…" : r ? "Verrouillée" : "Déverrouillée";
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": r ? "true" : "false",
      "data-alert": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(r ? nn : hi, { size: 20 }) }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-toggle",
              role: "switch",
              "aria-checked": r,
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
const na = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function gt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: a = 3
}) {
  const o = t.state.state, r = o === "unavailable", s = o === "cleaning" || o === "returning", l = o === "error", p = t.state.attributes.battery_level, [c, u] = k(!1), d = async (f) => {
    if (!(r || c)) {
      u(!0);
      try {
        await n.callService("vacuum", f, { entity_id: t.entity_id });
      } finally {
        u(!1);
      }
    }
  }, _ = ["n-card", s ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      class: _,
      "data-on": s ? "true" : "false",
      "data-alert": l ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(tn, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(rt, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: na[o] ?? o }),
        !r && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: c || s,
              onClick: () => d("start"),
              children: [
                /* @__PURE__ */ e(oe, { size: 14 }),
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
                /* @__PURE__ */ e(at, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const ta = {
  temperature: G,
  humidity: pi,
  power: be,
  energy: be,
  current: be,
  voltage: be,
  illuminance: an,
  pressure: vi,
  battery: rt
};
function ia(n, t, i) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  if (i === "temperature") return { value: n, unit: t ?? "" };
  const a = Number(n);
  return Number.isFinite(a) ? { value: Math.abs(a) >= 100 ? Math.round(a).toString() : (Math.round(a * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function bt({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", a = n.state.attributes.unit_of_measurement, o = ta[i] ?? xi, r = n.state.state === "unavailable", { value: s, unit: l } = ia(n.state.state, a, i);
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": r ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(o, { size: 18 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-sensor__readout", children: [
      /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }),
      l && /* @__PURE__ */ e("span", { class: "n-value__unit", children: l })
    ] })
  ] });
}
const aa = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire"
};
function vt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: a = 4
}) {
  const o = t.state.state, r = o === "unavailable", s = o === "playing", l = o === "off" || o === "standby", p = t.state.attributes.media_title, c = t.state.attributes.media_artist, u = t.state.attributes.app_name, d = t.state.attributes.volume_level, [_, f] = k(null), x = _ ?? d ?? 0, b = async (g, w = {}) => {
    r || await n.callService("media_player", g, {
      entity_id: t.entity_id,
      ...w
    });
  }, m = async (g) => {
    f(g);
    try {
      await b("volume_set", { volume_level: g });
    } finally {
      setTimeout(() => f(null), 50);
    }
  }, h = ["n-card", s ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-on": s ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(rn, { size: 20 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: aa[o] ?? o })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !l && !r && (p || c || u) && /* @__PURE__ */ e("div", { class: "n-media__track", children: [
      p && /* @__PURE__ */ e("div", { class: "n-media__title", children: p }),
      c && /* @__PURE__ */ e("div", { class: "n-muted", children: c }),
      u && /* @__PURE__ */ e("div", { class: "n-muted", style: { fontSize: "0.75rem", marginTop: p || c ? "4px" : "0" }, children: u })
    ] }),
    !r && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-media__controls", children: [
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Précédent",
            onClick: () => b("media_previous_track"),
            children: /* @__PURE__ */ e(wi, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": s ? "Pause" : "Lecture",
            onClick: () => b("media_play_pause"),
            children: s ? /* @__PURE__ */ e(yi, { size: 18 }) : /* @__PURE__ */ e(oe, { size: 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => b("media_next_track"),
            children: /* @__PURE__ */ e(ki, { size: 16 })
          }
        )
      ] }),
      typeof d == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(Mi, { size: 14 }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "range",
            class: "n-slider",
            min: 0,
            max: 1,
            step: 0.05,
            value: x,
            style: { "--val": `${x * 100}%` },
            onInput: (g) => m(Number(g.target.value))
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const ra = {
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
}, oa = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: Ii },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: zi },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: Si }
];
function xt({ hass: n, entity: t, roomLabel: i }) {
  const a = t.state.state, o = a === "unavailable", r = a === "triggered", s = a.startsWith("armed_"), l = a === "pending" || a === "arming" || a === "disarming", [p, c] = k(!1), u = async (d) => {
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
      "data-alert": r ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(_e, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: ra[a] ?? a })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          oa.map(({ id: d, service: _, label: f, Icon: x }) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn",
              "data-active": a === d ? "true" : "false",
              disabled: p || l,
              onClick: () => u(_),
              children: [
                /* @__PURE__ */ e(x, { size: 14 }),
                /* @__PURE__ */ e("span", { children: f })
              ]
            },
            d
          )),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn n-mode-btn--disarm",
              disabled: p || l || a === "disarmed",
              onClick: () => u("alarm_disarm"),
              children: /* @__PURE__ */ e("span", { children: "Désarmer" })
            }
          )
        ] })
      ]
    }
  );
}
const sa = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function la(n, t) {
  const i = n.state.attributes.entity_picture;
  if (!i) return null;
  if (i.startsWith("http")) return i;
  const a = t.hassUrl?.("");
  return a ? a.replace(/\/$/, "") + i : i;
}
function yt({ hass: n, entity: t, roomLabel: i }) {
  const a = t.state.state, o = a === "unavailable", r = a === "recording" || a === "streaming", [s, l] = k(0), [p, c] = k(!1), u = la(t, n), d = u ? `${u}${u.includes("?") ? "&" : "?"}t=${s}` : null;
  return K(() => {
    c(!1);
  }, [u]), /* @__PURE__ */ e("div", { class: "n-card n-card--camera", "data-on": r ? "true" : "false", children: [
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
        /* @__PURE__ */ e(Ae, { size: 28 }),
        p && /* @__PURE__ */ e("span", { style: { fontSize: "10px", marginTop: "4px", opacity: 0.7 }, children: "Erreur de flux" })
      ] }),
      r && /* @__PURE__ */ e("span", { class: "n-camera__live", children: "● LIVE" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-card__head n-card__head--inline", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ae, { size: 18 }) }),
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
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: sa[a] ?? a })
  ] });
}
function wt({ hass: n, entity: t, roomLabel: i, breatheVariant: a = 2 }) {
  const o = t.state.state === "on", r = t.state.state === "unavailable", s = t.state.attributes.percentage, l = typeof s == "number", [p, c] = k(!1), [u, d] = k(null), _ = u ?? (l ? s : o ? 100 : 0), f = async () => {
    if (!r) {
      c(!0);
      try {
        await n.callService("fan", "toggle", { entity_id: t.entity_id });
      } finally {
        c(!1);
      }
    }
  }, x = async (m) => {
    d(m);
    try {
      await n.callService("fan", "set_percentage", {
        entity_id: t.entity_id,
        percentage: m
      });
    } finally {
      setTimeout(() => d(null), 50);
    }
  }, b = ["n-card", o ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: b, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(on, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: r || p,
          onClick: f,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    o && l && !r && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
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
          onInput: (m) => x(Number(m.target.value))
        }
      )
    ] }),
    !o && !r && /* @__PURE__ */ e("div", { class: "n-muted", children: "Arrêté" }),
    r && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function kt({ hass: n, entity: t, roomLabel: i }) {
  const a = t.domain === "scene", o = t.state.state === "unavailable", [r, s] = k(!1), [l, p] = k(!1), c = async () => {
    if (!(o || r)) {
      s(!0);
      try {
        await n.callService(a ? "scene" : "script", "turn_on", {
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: a ? /* @__PURE__ */ e(sn, { size: 18 }) : /* @__PURE__ */ e(oe, { size: 16 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: a ? "Scène" : "Script" })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-pill-btn n-scene__activate",
            disabled: o || r,
            onClick: c,
            children: [
              /* @__PURE__ */ e(oe, { size: 14 }),
              /* @__PURE__ */ e("span", { children: a ? "Activer" : "Lancer" })
            ]
          }
        )
      ]
    }
  );
}
const ca = {
  "clear-night": { label: "Nuit claire", Icon: lt },
  cloudy: { label: "Nuageux", Icon: ot },
  exceptional: { label: "Conditions extrêmes", Icon: Ne },
  fog: { label: "Brouillard", Icon: bi },
  hail: { label: "Grêle", Icon: Oe },
  lightning: { label: "Orage", Icon: Ne },
  "lightning-rainy": { label: "Orage pluvieux", Icon: Ne },
  partlycloudy: { label: "Éclaircies", Icon: st },
  pouring: { label: "Pluie battante", Icon: An },
  rainy: { label: "Pluvieux", Icon: An },
  snowy: { label: "Neigeux", Icon: Oe },
  "snowy-rainy": { label: "Neige et pluie", Icon: Oe },
  sunny: { label: "Ensoleillé", Icon: an },
  windy: { label: "Venteux", Icon: En },
  "windy-variant": { label: "Venteux", Icon: En }
};
function pe(n) {
  return ca[n] ?? { label: n || "—", Icon: ot };
}
function Mt(n, t) {
  if (n == null || n === "") return "—";
  const i = Number(n);
  return Number.isFinite(i) ? `${n}${t}` : "—";
}
function It({ entity: n, roomLabel: t }) {
  const i = n.state.state === "unavailable" || n.state.state === "unknown", { label: a, Icon: o } = pe(n.state.state), r = n.state.attributes.temperature_unit ?? "°", s = Mt(n.state.attributes.temperature, r), l = n.state.attributes.humidity;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact n-weather", "data-status": i ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble n-weather__icon", children: /* @__PURE__ */ e(o, { size: 20 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-weather__readout", children: /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: s }) }),
    /* @__PURE__ */ e("div", { class: "n-weather__meta", children: [
      /* @__PURE__ */ e("span", { children: a }),
      typeof l == "number" && Number.isFinite(l) && /* @__PURE__ */ e(H, { children: [
        /* @__PURE__ */ e("span", { class: "n-weather__sep", children: "•" }),
        /* @__PURE__ */ e("span", { children: [
          Math.round(l),
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Dn({ entity: n }) {
  if (n.state.state === "unavailable" || n.state.state === "unknown") return null;
  const { label: t, Icon: i } = pe(n.state.state), a = n.state.attributes.temperature_unit ?? "°", o = Mt(n.state.attributes.temperature, a);
  return /* @__PURE__ */ e("div", { class: "nido-weather-pill", title: n.friendly_name, children: [
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__icon", children: /* @__PURE__ */ e(i, { size: 18 }) }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__temp", children: o }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__sep" }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__label", children: t })
  ] });
}
function da(n, t) {
  const i = t.split(".")[1] || "", a = Object.values(n.states).filter((l) => l.entity_id.startsWith("sensor."));
  let o, r, s;
  for (const l of a)
    l.entity_id.endsWith("_next_rain") && (l.entity_id.includes(i) || !o) && (o = l), l.entity_id.endsWith("_weather_alert") && (l.entity_id.includes(i) || !r) && (r = l), l.entity_id.endsWith("_uv") && (l.entity_id.includes(i) || !s) && (s = l);
  return { nextRain: o, weatherAlert: r, uvIndex: s };
}
function pa({ hass: n, weatherEntityId: t, onClose: i }) {
  const [a, o] = k([]), [r, s] = k([]), l = n.states[t], { nextRain: p, weatherAlert: c, uvIndex: u } = da(n, t);
  if (K(() => {
    let h = !1;
    async function g() {
      try {
        const w = async (L) => {
          try {
            const P = await n.callWS({
              type: "call_service",
              domain: "weather",
              service: "get_forecasts",
              service_data: { type: L },
              target: { entity_id: t },
              return_response: !0
            });
            return P?.response?.[t]?.forecast || P?.[t]?.forecast || [];
          } catch (P) {
            return console.warn(`Failed to fetch ${L} forecast:`, P), [];
          }
        }, [A, z] = await Promise.all([
          w("daily"),
          w("hourly")
        ]);
        if (h) return;
        o(A), s(z);
      } catch (w) {
        console.error("Failed to fetch weather forecasts", w);
      }
    }
    return l?.attributes.forecast ? o(l.attributes.forecast) : g(), () => {
      h = !0;
    };
  }, [n, t]), !l) return null;
  const d = pe(l.state), _ = l.attributes.temperature_unit || "°C", f = c?.state, x = f === "Rouge" ? "#ff4d4f" : f === "Orange" ? "#faad14" : f === "Jaune" ? "#fadb14" : null, b = c?.attributes ? Object.entries(c.attributes).filter(([h, g]) => g === f && h !== "friendly_name" && h !== "icon").map(([h]) => h).join(", ") : "", m = b ? `Vigilance ${f} : ${b}` : `Vigilance ${f}`;
  return /* @__PURE__ */ e("div", { class: "nido-weather-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__backdrop", onClick: i }),
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-weather-panel__header", children: [
        /* @__PURE__ */ e("h2", { children: "Météo Détaillée" }),
        /* @__PURE__ */ e("button", { type: "button", class: "nido-weather-panel__close", onClick: i, "aria-label": "Fermer", children: /* @__PURE__ */ e(se, { size: 20 }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-weather-panel__scroll", children: [
        /* @__PURE__ */ e("div", { class: "nido-wp-current", children: [
          /* @__PURE__ */ e(d.Icon, { size: 48 }),
          /* @__PURE__ */ e("div", { class: "nido-wp-current-info", children: [
            /* @__PURE__ */ e("span", { class: "nido-wp-temp", children: [
              l.attributes.temperature,
              _
            ] }),
            /* @__PURE__ */ e("span", { class: "nido-wp-desc", children: d.label })
          ] })
        ] }),
        x && /* @__PURE__ */ e("div", { class: "nido-wp-alert", style: { backgroundColor: `${x}22`, color: x, border: `1px solid ${x}55` }, children: [
          /* @__PURE__ */ e(ct, { size: 20 }),
          /* @__PURE__ */ e("span", { children: m })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-wp-grid", children: [
          p && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Ui, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Pluie dans l'heure" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: p.state === "unknown" ? "Pas de pluie prévue" : new Date(p.state).getTime() > Date.now() ? `Prévue à ${new Date(p.state).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Pas de pluie prévue" })
          ] }),
          u && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Wi, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Index UV" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: u.state })
          ] })
        ] }),
        r.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prochaines heures" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-hourly", children: r.slice(0, 24).map((h, g) => {
            const w = pe(h.condition), A = new Date(h.datetime);
            return /* @__PURE__ */ e("div", { class: "nido-wp-hour", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-time", children: [
                A.getHours(),
                "h"
              ] }),
              /* @__PURE__ */ e(w.Icon, { size: 24 }),
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-temp", children: [
                h.temperature,
                "°"
              ] }),
              (h.precipitation ?? 0) > 0 && /* @__PURE__ */ e("span", { class: "nido-wp-hour-precip", children: [
                h.precipitation,
                "mm"
              ] })
            ] }, g);
          }) })
        ] }),
        a.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prévisions (5 jours)" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-daily", children: a.slice(0, 5).map((h, g) => {
            const w = pe(h.condition), A = new Date(h.datetime), z = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(A);
            return /* @__PURE__ */ e("div", { class: "nido-wp-day", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-day-name", children: g === 0 ? "Aujourd'hui" : z }),
              /* @__PURE__ */ e(w.Icon, { size: 24 }),
              /* @__PURE__ */ e("div", { class: "nido-wp-day-temps", children: [
                /* @__PURE__ */ e("span", { class: "nido-wp-day-min", children: [
                  h.templow,
                  "°"
                ] }),
                /* @__PURE__ */ e("div", { class: "nido-wp-day-bar" }),
                /* @__PURE__ */ e("span", { class: "nido-wp-day-max", children: [
                  h.temperature,
                  "°"
                ] })
              ] })
            ] }, g);
          }) })
        ] })
      ] })
    ] })
  ] });
}
function zt(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? ji : /(chambre|bedroom)/.test(t) ? Ri : /(cuisine|kitchen)/.test(t) ? Fi : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? Vi : /(entrée|entree|hall|couloir)/.test(t) ? Hi : at;
}
const ua = {
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
function ha({ hass: n, notifications: t, onClose: i }) {
  const a = async (o) => {
    if (n)
      try {
        await n.connection.sendMessagePromise({
          type: "fire_event",
          event_type: "nido_notification_event",
          event_data: { action: "dismiss", id: o }
        });
      } catch (r) {
        console.warn("Échec de la suppression via WebSocket, tentative via service...", r);
        try {
          await n.callService("script", "nido_dismiss_notification", { id: o });
        } catch (s) {
          console.error("Toutes les méthodes de suppression ont échoué", s);
        }
      }
  };
  return /* @__PURE__ */ e("div", { class: "nido-notification-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__backdrop", onClick: i }),
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-notification-panel__header", children: [
        /* @__PURE__ */ e("h2", { children: "Notifications" }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "nido-notification-panel__close",
            onClick: i,
            "aria-label": "Fermer",
            children: /* @__PURE__ */ e(se, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: t.length === 0 ? /* @__PURE__ */ e("div", { class: "nido-notification-empty", children: [
        /* @__PURE__ */ e("div", { class: "nido-notification-empty__icon", children: /* @__PURE__ */ e(it, { size: 48 }) }),
        /* @__PURE__ */ e("p", { children: "Aucune notification pour le moment." })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-notification-list", children: [...t].reverse().map((o) => {
        const r = o.type === "warning" ? ct : o.type === "success" ? Zi : Bi, s = `nido-notification-item--${o.type}`, p = new Date(o.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return /* @__PURE__ */ e("div", { class: `nido-notification-item ${s}`, children: [
          /* @__PURE__ */ e("div", { class: "nido-notification-item__icon", children: /* @__PURE__ */ e(r, { size: 20 }) }),
          /* @__PURE__ */ e("div", { class: "nido-notification-item__body", children: [
            /* @__PURE__ */ e("div", { class: "nido-notification-item__head", children: [
              /* @__PURE__ */ e("span", { class: "nido-notification-item__title", children: o.title }),
              /* @__PURE__ */ e("span", { class: "nido-notification-item__time", children: p })
            ] }),
            /* @__PURE__ */ e("p", { class: "nido-notification-item__message", children: o.message })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-notification-item__dismiss",
              onClick: () => a(o.id),
              "aria-label": "Supprimer",
              children: /* @__PURE__ */ e(se, { size: 14 })
            }
          )
        ] }, o.id);
      }) }) })
    ] })
  ] });
}
function _a(n) {
  const t = n.state.attributes.brightness;
  return typeof t != "number" ? 100 : Math.round(t / 255 * 100);
}
function fa({ hass: n, entity: t, roomName: i }) {
  const [a, o] = k(!1), r = _a(t), s = async () => {
    o(!0);
    try {
      await n.callService("light", "turn_off", { entity_id: t.entity_id });
    } finally {
      o(!1);
    }
  };
  return /* @__PURE__ */ e("div", { class: `nido-lights-row ${a ? "is-pending" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "nido-lights-row__icon", children: /* @__PURE__ */ e(fe, { size: 18 }) }),
    /* @__PURE__ */ e("div", { class: "nido-lights-row__body", children: [
      /* @__PURE__ */ e("div", { class: "nido-lights-row__name", children: t.friendly_name }),
      i && /* @__PURE__ */ e("div", { class: "nido-lights-row__room", children: i })
    ] }),
    /* @__PURE__ */ e("div", { class: "nido-lights-row__pct", children: [
      r,
      "%"
    ] }),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        class: "n-toggle",
        role: "switch",
        "aria-checked": !0,
        disabled: a,
        onClick: s,
        children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
      }
    )
  ] });
}
function ma({ hass: n, lights: t, areas: i, onClose: a }) {
  const [o, r] = k(!1), s = new Map(i.map((p) => [p.area_id, p.name])), l = async () => {
    r(!0);
    try {
      await Promise.all(
        t.map(
          (p) => n.callService("light", "turn_off", { entity_id: p.entity_id })
        )
      );
    } finally {
      r(!1);
    }
  };
  return /* @__PURE__ */ e("div", { class: "nido-lights-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__backdrop", onClick: a }),
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
            onClick: a,
            "aria-label": "Fermer",
            children: /* @__PURE__ */ e(se, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: /* @__PURE__ */ e("div", { class: "nido-lights-list", children: t.map((p) => /* @__PURE__ */ e(
        fa,
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
const Pn = [
  "var(--accent)",
  "var(--positive)",
  "#4A8FE0",
  "#E06B4A",
  "#8F4AE0",
  "#4AE0B5"
];
function St(n) {
  return Pn[n % Pn.length];
}
function Ee(n) {
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}
function Ct(n) {
  if (n.includes("T") || n.includes(" ") && n.includes(":"))
    return { date: new Date(n.replace(" ", "T")), allDay: !1 };
  const [t, i, a] = n.split("-").map(Number);
  return { date: new Date(t, i - 1, a), allDay: !0 };
}
function ga(n, t) {
  const i = Ee(t), a = [];
  for (const [o, r] of Object.entries(n))
    for (const s of r.events) {
      const l = s.start.dateTime ?? s.start.date ?? "";
      if (!l) continue;
      const { date: p, allDay: c } = Ct(l), u = Math.round(
        (Ee(p).getTime() - i.getTime()) / 864e5
      );
      a.push({
        id: `${o}-${s.uid ?? s.summary}-${l}`,
        calendarId: o,
        title: s.summary,
        dayOffset: u,
        time: c ? void 0 : `${String(p.getHours()).padStart(2, "0")}:${String(p.getMinutes()).padStart(2, "0")}`,
        allDay: c
      });
    }
  return a.sort((o, r) => o.dayOffset !== r.dayOffset ? o.dayOffset - r.dayOffset : o.allDay && !r.allDay ? -1 : !o.allDay && r.allDay ? 1 : (o.time ?? "").localeCompare(r.time ?? ""));
}
function ba(n, t) {
  const i = n.message, a = n.start_time;
  if (!i || !a) return null;
  const { date: o, allDay: r } = Ct(a), s = Math.round(
    (Ee(o).getTime() - Ee(t).getTime()) / 864e5
  );
  return {
    title: i,
    allDay: r,
    dayOffset: s,
    time: r ? void 0 : `${String(o.getHours()).padStart(2, "0")}:${String(o.getMinutes()).padStart(2, "0")}`
  };
}
const va = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function xa({ hass: n, calendarEntities: t, onClose: i }) {
  const [a, o] = k(null), r = /* @__PURE__ */ new Date(), s = new Map(
    [...t].sort((c, u) => c.entity_id.localeCompare(u.entity_id)).map((c, u) => [c.entity_id, St(u)])
  );
  K(() => {
    if (t.length === 0) {
      o([]);
      return;
    }
    const c = new Date(r.getFullYear(), r.getMonth(), r.getDate()), u = new Date(c);
    u.setDate(u.getDate() + 7);
    const d = (_) => `${_.getFullYear()}-${String(_.getMonth() + 1).padStart(2, "0")}-${String(_.getDate()).padStart(2, "0")}T00:00:00`;
    n.callWS({
      type: "calendar/get_events",
      entity_ids: t.map((_) => _.entity_id),
      start_date_time: d(c),
      end_date_time: d(u)
    }).then((_) => o(ga(_, r))).catch(() => o([]));
  }, []);
  const l = Array.from({ length: 7 }, (c, u) => {
    const d = new Date(r);
    d.setDate(r.getDate() + u);
    const _ = (a ?? []).filter((f) => f.dayOffset === u);
    return { date: d, offset: u, events: _ };
  }), p = a ? [...new Set(a.filter((c) => c.dayOffset >= 0 && c.dayOffset < 7).map((c) => c.calendarId))] : [];
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
            children: /* @__PURE__ */ e(se, { size: 20 })
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
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: a === null ? /* @__PURE__ */ e("div", { class: "nido-cal-panel__loading", children: "Chargement…" }) : /* @__PURE__ */ e("div", { class: "nido-cal-panel__days", children: l.map(({ date: c, offset: u, events: d }) => /* @__PURE__ */ e(
        "div",
        {
          class: `nido-cal-panel__day ${u === 0 ? "is-today" : ""}`,
          children: [
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__badge", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-day", children: va[c.getDay()] }),
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-num", children: c.getDate() })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__events", children: d.length === 0 ? /* @__PURE__ */ e("span", { class: "nido-cal-panel__empty", children: "—" }) : d.map((_) => /* @__PURE__ */ e("div", { class: "nido-cal-panel__event", children: [
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
const ya = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function wa(n, t) {
  return n === 0 ? "Aujourd'hui" : n === 1 ? "Demain" : `${ya[t.getDay()]} ${t.getDate()}`;
}
function At({ hass: n, entity: t, calendarEntities: i }) {
  const [a, o] = k(!1), s = [...i].sort((d, _) => d.entity_id.localeCompare(_.entity_id)).map((d) => d.entity_id).indexOf(t.entity_id), l = St(s >= 0 ? s : 0), p = /* @__PURE__ */ new Date(), c = ba(t.state.attributes, p), u = c ? (() => {
    const d = new Date(p);
    return d.setDate(p.getDate() + c.dayOffset), d;
  })() : null;
  return /* @__PURE__ */ e(H, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        class: "n-card n-card--default nido-cal-widget",
        "data-on": "false",
        onClick: () => o(!0),
        children: [
          /* @__PURE__ */ e("div", { class: "n-card__head", children: [
            /* @__PURE__ */ e("div", { class: "n-icon-bubble nido-cal-widget__bubble", style: { "--cal-color": l }, children: /* @__PURE__ */ e(dt, { size: 18 }) }),
            /* @__PURE__ */ e("span", { class: "n-eyebrow", children: t.friendly_name })
          ] }),
          c && u ? /* @__PURE__ */ e(H, { children: [
            /* @__PURE__ */ e("div", { class: "nido-cal-widget__title", children: c.title }),
            /* @__PURE__ */ e("div", { class: "nido-cal-widget__when", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__day", children: wa(c.dayOffset, u) }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__sep", children: "·" }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__time", children: c.allDay ? "Journée" : c.time })
            ] })
          ] }) : /* @__PURE__ */ e("div", { class: "n-muted", children: "Rien à venir" })
        ]
      }
    ),
    a && /* @__PURE__ */ e(
      xa,
      {
        hass: n,
        calendarEntities: i,
        onClose: () => o(!1)
      }
    )
  ] });
}
const ka = /* @__PURE__ */ new Set([
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
function Ma(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function Ia(n, t) {
  const i = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(pt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(ut, { ...i }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(ht, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(_t, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(ft, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(mt, { ...i }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(gt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(bt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(vt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(xt, { ...i }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(yt, { ...i }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(wt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(kt, { ...i }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(It, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(At, { hass: t.hass, entity: n, roomLabel: t.areaName, calendarEntities: t.calendarEntities }, n.entity_id);
    default:
      return null;
  }
}
function za(n) {
  return n.replace(/[^\x00-\x7F]/g, "_").toLowerCase();
}
function Sa(n, t) {
  const i = new Map(t.map((o) => [za(o.name), o.area_id])), a = /* @__PURE__ */ new Map();
  for (const o of Object.values(n.states)) {
    if (!o.entity_id.startsWith("sensor.")) continue;
    const r = o.state.toLowerCase(), s = i.get(r);
    if (!s) continue;
    const l = o.entity_id.slice(7), p = l.slice(l.lastIndexOf("_") + 1);
    if (!p) continue;
    const u = n.states[`person.${p}`]?.attributes.entity_picture, d = a.get(s) ?? /* @__PURE__ */ new Map();
    d.has(p) || d.set(p, { name: p, picture: u }), a.set(s, d);
  }
  return new Map(
    Array.from(a.entries()).map(([o, r]) => [o, Array.from(r.values())])
  );
}
function Ca({ area: n, entities: t, accent: i = !1, onOpen: a, dragProps: o, presence: r }) {
  const s = zt(n.name), l = t.filter(
    (u) => u.domain !== "sensor" && u.domain !== "binary_sensor"
  ).length, p = t.filter(Xe).length, c = Qn(t);
  return /* @__PURE__ */ e(
    "div",
    {
      role: "button",
      tabIndex: 0,
      class: `nido-room-card ${i ? "nido-room-card--accent" : ""}`,
      onClick: a,
      onKeyDown: (u) => {
        (u.key === "Enter" || u.key === " ") && (u.preventDefault(), a());
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
              r && r.length > 0 && /* @__PURE__ */ e("div", { class: "nido-room-card__presence", children: r.map(
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
              /* @__PURE__ */ e(ci, { size: 16 })
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
              p > 0 && /* @__PURE__ */ e(H, { children: [
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
function Aa({
  hass: n,
  areas: t,
  entities: i,
  favorites: a,
  exposed: o,
  roomsOrder: r,
  onConfigure: s,
  onOpenRoom: l,
  onReorderFavorites: p,
  onReorderRooms: c
}) {
  const u = n.user?.name ?? "vous", d = /* @__PURE__ */ new Date(), _ = d.getHours(), { greeting: f, sub: x } = Ma(_), b = `${String(_).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`, m = d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (y) => y.toUpperCase()), h = D(() => new Set(o), [o]), g = D(
    () => i.filter((y) => h.has(y.entity_id) && ka.has(y.domain)),
    [i, h]
  ), w = D(
    () => g.find((y) => y.domain === "weather"),
    [g]
  ), A = D(
    () => g.filter((y) => y.domain === "light" && Xe(y)),
    [g]
  ), z = A.length, L = D(
    () => g.filter((y) => y.domain === "calendar"),
    [g]
  ), P = D(() => w ? Object.keys(n.states).some(
    (E) => E.startsWith("sensor.") && (E.endsWith("_next_rain") || E.endsWith("_weather_alert") || E.endsWith("_uv"))
  ) : !1, [n.states, w]), [j, $] = k(!1), [V, Q] = k(!1), [ee, Z] = k(!1), Y = D(() => {
    const y = n.states["sensor.nido_notifications"];
    return !y || !y.attributes.notifications ? [] : y.attributes.notifications;
  }, [n.states["sensor.nido_notifications"]]), ne = D(() => ii(), [V]), te = D(() => {
    if (Y.length === 0) return !1;
    if (!ne) return !0;
    const y = Y[Y.length - 1];
    return new Date(y.timestamp) > new Date(ne);
  }, [Y, ne]), B = () => {
    Q(!0), ai((/* @__PURE__ */ new Date()).toISOString());
  }, ie = D(() => Object.values(n.states).filter(
    (y) => y.entity_id.startsWith("person.") && y.state === "home" && y.attributes.entity_picture
  ), [n.states]), C = (y) => {
    if (!y) return null;
    if (y.startsWith("http")) return y;
    const E = n.hassUrl?.("");
    return E ? E.replace(/\/$/, "") + y : y;
  }, U = D(() => qt(g), [g]), M = D(() => Sa(n, t), [n.states, t]), I = D(() => {
    const y = new Map(g.map((E) => [E.entity_id, E]));
    return a.map((E) => y.get(E)).filter((E) => !!E);
  }, [g, a]), S = D(() => {
    const y = t.filter((E) => (U.get(E.area_id) ?? []).length > 0);
    return tt(y, r, (E) => E.area_id);
  }, [t, U, r]), F = Ue(
    I,
    (y) => y.entity_id,
    (y) => p(y.map((E) => E.entity_id))
  ), J = Ue(
    S,
    (y) => y.area_id,
    (y) => c(y.map((E) => E.area_id))
  );
  let me = 0;
  const Et = I.length > 0 ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${F.isDragging ? "is-dragging" : ""}`,
        ref: (y) => {
          F.containerRef.current = y;
        },
        children: I.map((y) => {
          me += 1;
          const E = (me - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": me === 1 ? "true" : "false",
              ...F.itemPropsFor(y.entity_id),
              children: Ia(y, {
                hass: n,
                areaName: t.find((Dt) => Dt.area_id === y.area_id)?.name ?? "",
                hero: me === 1,
                variant: E,
                calendarEntities: L
              })
            },
            y.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, Tt = g.length > 0;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: [
    /* @__PURE__ */ e("div", { class: "nido-dashboard", children: [
      /* @__PURE__ */ e("header", { class: "nido-topbar", children: [
        /* @__PURE__ */ e("div", { class: "nido-topbar__brand", children: [
          /* @__PURE__ */ e("div", { class: "nido-topbar__clock", children: b }),
          /* @__PURE__ */ e("span", { children: "nido" })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-topbar__actions", children: [
          w && (P ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-weather-pill-btn",
              onClick: () => $(!0),
              "aria-label": "Voir la météo détaillée",
              children: /* @__PURE__ */ e(Dn, { entity: w })
            }
          ) : /* @__PURE__ */ e(Dn, { entity: w })),
          z > 0 && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-lights-pill-btn",
              onClick: () => Z(!0),
              "aria-label": `${z} lumière${z > 1 ? "s" : ""} allumée${z > 1 ? "s" : ""}`,
              children: /* @__PURE__ */ e("div", { class: "nido-lights-pill", children: [
                /* @__PURE__ */ e(fe, { size: 16 }),
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
              onClick: B,
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ e(it, { size: 20 }),
                te && /* @__PURE__ */ e("span", { class: "nido-bell-btn__badge" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: s,
              children: /* @__PURE__ */ e(li, { size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { class: "nido-hero", children: [
        /* @__PURE__ */ e("div", { class: "nido-hero__date", children: m }),
        /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }, children: [
          /* @__PURE__ */ e("h1", { style: { margin: 0 }, children: [
            f,
            ", ",
            /* @__PURE__ */ e("em", { children: u })
          ] }),
          ie.length > 0 && /* @__PURE__ */ e("div", { class: "nido-home-pill", children: [
            /* @__PURE__ */ e("div", { class: "nido-home-pill__avatars", children: ie.map((y) => {
              const E = C(y.attributes.entity_picture);
              return E ? /* @__PURE__ */ e(
                "img",
                {
                  src: E,
                  alt: y.attributes.friendly_name,
                  title: y.attributes.friendly_name,
                  class: "nido-home-pill__avatar"
                },
                y.entity_id
              ) : null;
            }) }),
            /* @__PURE__ */ e("span", { class: "nido-home-pill__text", children: "À la maison" })
          ] })
        ] }),
        /* @__PURE__ */ e("p", { class: "nido-hero__sub", style: { marginTop: "24px" }, children: x })
      ] }),
      Tt ? /* @__PURE__ */ e(H, { children: [
        Et,
        S.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
          /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
          /* @__PURE__ */ e(
            "div",
            {
              class: `nido-rooms-grid ${J.isDragging ? "is-dragging" : ""}`,
              ref: (y) => {
                J.containerRef.current = y;
              },
              children: S.map((y, E) => /* @__PURE__ */ e(
                Ca,
                {
                  area: y,
                  entities: U.get(y.area_id) ?? [],
                  accent: E === 0,
                  onOpen: () => l(y.area_id),
                  dragProps: J.itemPropsFor(y.area_id),
                  presence: M.get(y.area_id)
                },
                y.area_id
              ))
            }
          )
        ] })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-empty", children: [
        /* @__PURE__ */ e("p", { class: "n-muted", children: "Aucun appareil exposé pour l'instant. Ouvrez « Personnaliser » pour choisir vos entités." }),
        /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: s, children: "Personnaliser Nido" })
      ] })
    ] }),
    j && w && /* @__PURE__ */ e(
      pa,
      {
        hass: n,
        weatherEntityId: w.entity_id,
        onClose: () => $(!1)
      }
    ),
    V && /* @__PURE__ */ e(
      ha,
      {
        hass: n,
        notifications: Y,
        onClose: () => Q(!1)
      }
    ),
    ee && /* @__PURE__ */ e(
      ma,
      {
        hass: n,
        lights: A,
        areas: t,
        onClose: () => Z(!1)
      }
    )
  ] });
}
function Ea(n, t, i, a, o, r = !1) {
  const s = { hass: t, entity: n, roomLabel: i };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(pt, { ...s, hero: r, breatheVariant: a }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(ut, { ...s }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(ht, { ...s, breatheVariant: a }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(_t, { entity: n, roomLabel: i }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(ft, { ...s, breatheVariant: a }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(mt, { ...s }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(gt, { ...s, breatheVariant: a }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(bt, { entity: n, roomLabel: i }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(vt, { ...s, breatheVariant: a }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(xt, { ...s }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(yt, { ...s }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(wt, { ...s, breatheVariant: a }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(kt, { ...s }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(It, { entity: n, roomLabel: i }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(At, { hass: t, entity: n, roomLabel: i, calendarEntities: o }, n.entity_id);
    default:
      return null;
  }
}
function Ta({
  hass: n,
  area: t,
  entities: i,
  entitiesOrder: a,
  onBack: o,
  onReorderEntities: r
}) {
  const s = zt(t.name), l = Qn(i), p = D(
    () => tt(i, a, (h) => h.entity_id),
    [i, a]
  ), c = D(
    () => p.filter((h) => h.domain === "calendar"),
    [p]
  ), u = D(() => {
    const h = /* @__PURE__ */ new Map();
    for (const g of p)
      h.set(g.domain, (h.get(g.domain) ?? 0) + 1);
    return Array.from(h.entries()).sort((g, w) => w[1] - g[1]);
  }, [p]), [d, _] = k("all"), f = D(
    () => d === "all" ? p : p.filter((h) => h.domain === d),
    [p, d]
  ), x = Ue(
    f,
    (h) => h.entity_id,
    (h) => {
      const g = new Set(f.map((z) => z.entity_id)), w = [...h], A = p.map(
        (z) => g.has(z.entity_id) ? w.shift() : z
      );
      r(A.map((z) => z.entity_id));
    }
  ), b = p.filter(
    (h) => h.domain !== "sensor" && h.domain !== "binary_sensor"
  ).length, m = p.filter(Xe).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(Ni, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e(Li, { size: 18 }) }) })
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
            m > 0 && /* @__PURE__ */ e(H, { children: [
              /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
              /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                m,
                " actif",
                m > 1 ? "s" : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("h1", { class: "nido-room-detail__title", children: t.name })
        ] })
      ] }),
      (l.temperature || l.humidity || l.illuminance) && /* @__PURE__ */ e("div", { class: "nido-room-detail__stats", children: [
        l.temperature && /* @__PURE__ */ e(
          Le,
          {
            label: "Température",
            value: l.temperature.value,
            unit: l.temperature.unit || "°"
          }
        ),
        l.humidity && /* @__PURE__ */ e($n, {}),
        l.humidity && /* @__PURE__ */ e(
          Le,
          {
            label: "Humidité",
            value: Math.round(parseFloat(l.humidity.value)).toString(),
            unit: l.humidity.unit || "%"
          }
        ),
        l.illuminance && /* @__PURE__ */ e($n, {}),
        l.illuminance && /* @__PURE__ */ e(
          Le,
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
          class: `n-pill-btn ${d === "all" ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => _("all"),
          children: [
            "Tout · ",
            i.length
          ]
        }
      ),
      u.map(([h, g]) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${d === h ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => _(h),
          children: [
            ua[h] ?? h,
            " · ",
            g
          ]
        }
      ))
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room-detail__grid ${x.isDragging ? "is-dragging" : ""}`,
        ref: (h) => {
          x.containerRef.current = h;
        },
        children: f.map((h, g) => {
          const w = g % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ...x.itemPropsFor(h.entity_id),
              children: Ea(h, n, t.name, w, c, g === 0 && h.domain === "light")
            },
            h.entity_id
          );
        })
      }
    )
  ] }) });
}
function Le({ label: n, value: t, unit: i }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: i })
    ] })
  ] });
}
function $n() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const ve = 5, le = {
  light: { label: "Lumières", Icon: fe },
  switch: { label: "Prises & switches", Icon: en },
  cover: { label: "Volets & stores", Icon: Qe },
  climate: { label: "Thermostats", Icon: G },
  lock: { label: "Serrures", Icon: nn },
  vacuum: { label: "Aspirateurs", Icon: tn },
  binary_sensor: { label: "Détecteurs", Icon: _e },
  sensor: { label: "Capteurs", Icon: de },
  media_player: { label: "Lecteurs média", Icon: rn },
  alarm_control_panel: { label: "Alarmes", Icon: _e },
  camera: { label: "Caméras", Icon: Ae },
  fan: { label: "Ventilateurs", Icon: on },
  scene: { label: "Scènes", Icon: sn },
  script: { label: "Scripts", Icon: oe },
  weather: { label: "Météo", Icon: st },
  calendar: { label: "Calendriers", Icon: dt }
}, On = Object.keys(le), We = {
  terracotta: { name: "Terracotta", desc: "Toscan chaleureux", swatches: ["#f4ede2", "#c75a2a", "#1a1410"] },
  miel: { name: "Miel", desc: "Solaire et doré", swatches: ["#f6ecd6", "#d4a020", "#2a1f10"] },
  sauge: { name: "Sauge", desc: "Organique scandinave", swatches: ["#ebe7d8", "#6a7a3a", "#1a1d10"] },
  cosy: { name: "Cosy", desc: "Salon feutré", swatches: ["#f0eadd", "#b06030", "#1c1208"] }
};
function Da(n) {
  const {
    hass: t,
    entities: i,
    areas: a,
    initialTheme: o,
    initialMode: r,
    initialExposed: s,
    initialFavorites: l,
    initialExcludedUsers: p,
    isReturning: c,
    onApplyTheme: u,
    onClose: d,
    onDone: _
  } = n, [f, x] = k(0), [b, m] = k(o), [h, g] = k(r), [w, A] = k(new Set(s)), [z, L] = k(new Set(l)), [P, j] = k(
    new Set(p)
  ), [$, V] = k(null), [Q, ee] = k(null);
  K(() => {
    let M = !1;
    return t.callWS({ type: "config/auth/list" }).then((I) => {
      M || V(
        (I ?? []).filter((S) => !S.system_generated).sort((S, F) => S.name.localeCompare(F.name))
      );
    }).catch((I) => {
      M || (ee(I instanceof Error ? I.message : String(I)), t.user && V([t.user]));
    }), () => {
      M = !0;
    };
  }, [t]);
  const Z = () => x((M) => Math.min(ve - 1, M + 1)), Y = () => x((M) => Math.max(0, M - 1)), ne = (M, I) => {
    m(M), g(I), u(M, I);
  }, te = (M) => {
    A((I) => {
      const S = new Set(I);
      return S.has(M) ? (S.delete(M), L((F) => {
        if (!F.has(M)) return F;
        const J = new Set(F);
        return J.delete(M), J;
      })) : S.add(M), S;
    });
  }, B = (M) => {
    L((I) => {
      const S = new Set(I);
      return S.has(M) ? S.delete(M) : (S.add(M), A((F) => F.has(M) ? F : new Set(F).add(M))), S;
    });
  }, ie = (M) => {
    j((I) => {
      const S = new Set(I);
      return S.has(M) ? S.delete(M) : S.add(M), S;
    });
  }, C = () => {
    const M = Array.from(w), I = Array.from(z).filter((F) => w.has(F)), S = Array.from(P);
    zn(b, h), wn(M), He(I), kn(S), In(), _({
      exposed: M,
      favorites: I,
      theme: b,
      mode: h,
      excludedUsers: S
    });
  }, U = () => {
    zn(b, h), wn(Array.from(w)), He(Array.from(z).filter((M) => w.has(M))), kn(Array.from(P)), In(), d();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(Oi, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: ve }, (M, I) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${I === f ? "is-active" : ""} ${I < f ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          f + 1,
          " / ",
          ve
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: U, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      f === 0 && /* @__PURE__ */ e(
        Pa,
        {
          isReturning: c,
          exposedCount: w.size,
          favCount: z.size,
          themeLabel: We[b].name,
          modeLabel: h === "light" ? "Clair" : "Sombre",
          allowedUsersCount: $ ? $.filter((M) => !P.has(M.id)).length : null
        }
      ),
      f === 1 && /* @__PURE__ */ e($a, { entitiesCount: i.length, areasCount: a.length }),
      f === 2 && /* @__PURE__ */ e(
        Oa,
        {
          entities: i,
          exposed: w,
          favs: z,
          onToggleExpose: te,
          onToggleFav: B
        }
      ),
      f === 3 && /* @__PURE__ */ e(
        Na,
        {
          theme: b,
          mode: h,
          onPick: ne,
          userName: t.user?.name ?? "vous"
        }
      ),
      f === 4 && /* @__PURE__ */ e(
        La,
        {
          hass: t,
          users: $,
          error: Q,
          excluded: P,
          onToggleUser: ie
        }
      )
    ] }, f),
    /* @__PURE__ */ e("footer", { class: "n-ob__footer", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-ob__back",
          disabled: f === 0,
          onClick: Y,
          children: [
            /* @__PURE__ */ e(Ci, { size: 14 }),
            " Retour"
          ]
        }
      ),
      f < ve - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: Z, children: [
        "Continuer ",
        /* @__PURE__ */ e(Tn, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: C, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(Tn, { size: 16 })
      ] })
    ] })
  ] }) });
}
const Nn = [
  fe,
  Qe,
  en,
  G,
  nn,
  tn,
  de,
  rn,
  _e,
  Ae,
  on,
  sn,
  oe
];
function xe({ offset: n, intervalMs: t }) {
  const [i, a] = k(n);
  K(() => {
    const r = setInterval(() => a((s) => s + 1), t);
    return () => clearInterval(r);
  }, [t]);
  const o = Nn[i % Nn.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, i);
}
function Pa(n) {
  const { isReturning: t, exposedCount: i, favCount: a, themeLabel: o, modeLabel: r, allowedUsersCount: s } = n;
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
          /* @__PURE__ */ e(ye, { label: "Favoris", value: a, accent: !0 }),
          /* @__PURE__ */ e(ye, { label: "Ambiance", value: o, hint: r }),
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
function $a({ entitiesCount: n, areasCount: t }) {
  const [i, a] = k("scanning");
  return K(() => {
    const o = setTimeout(() => a("found"), 1100), r = setTimeout(() => a("connected"), 2200);
    return () => {
      clearTimeout(o), clearTimeout(r);
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
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(Pi, { size: 18 }) }),
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
function Oa(n) {
  const { entities: t, exposed: i, favs: a, onToggleExpose: o, onToggleFav: r } = n, s = D(() => {
    const m = /* @__PURE__ */ new Map();
    for (const h of t)
      On.includes(h.domain) && (m.has(h.domain) || m.set(h.domain, []), m.get(h.domain).push(h));
    return Array.from(m.entries()).sort((h, g) => g[1].length - h[1].length);
  }, [t]), [l, p] = k(s[0]?.[0] ?? "light"), [c, u] = k(""), d = s.find(([m]) => m === l) ?? s[0], _ = i.size, f = t.filter((m) => On.includes(m.domain)).length, x = c.trim().toLowerCase(), b = d ? x ? d[1].filter(
    (m) => (m.friendly_name ?? "").toLowerCase().includes(x) || m.entity_id.toLowerCase().includes(x)
  ) : d[1] : [];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--entities", children: [
    /* @__PURE__ */ e("aside", { class: "n-ob-ent__rail", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 2 · Vos appareils" }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__count", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-num", children: _ }),
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-sep", children: [
          " / ",
          f
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { marginBottom: 16 }, children: _ === 0 ? "Aucun appareil exposé pour l'instant" : `appareil${_ > 1 ? "s" : ""} exposé${_ > 1 ? "s" : ""}` }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__list", children: s.map(([m, h]) => {
        const g = le[m], w = g.Icon, A = h.filter((L) => i.has(L.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${m === l ? "is-active" : ""}`,
            onClick: () => p(m),
            children: [
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-icon", children: /* @__PURE__ */ e(w, { size: 15 }) }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-label", children: g.label }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-count", children: [
                A,
                "/",
                h.length
              ] })
            ]
          }
        );
      }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "n-ob-ent__main", children: d && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-ob-ent__head", children: [
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: [
            d[1].length,
            " disponibles"
          ] }),
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: le[d[0]].label })
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
        /* @__PURE__ */ e("span", { class: "n-ob-ent__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(Ti, { size: 14 }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            class: "n-ob-ent__search-input",
            value: c,
            onInput: (m) => u(m.target.value),
            placeholder: `Rechercher dans ${le[d[0]].label.toLowerCase()}…`,
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
            children: /* @__PURE__ */ e(se, { size: 12 })
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
          const h = i.has(m.entity_id), g = a.has(m.entity_id), w = le[m.domain].Icon;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `n-ob-ent-card ${h ? "is-exposed" : ""}`,
              onClick: () => o(m.entity_id),
              children: [
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__icon ${h ? "is-on" : ""}`, children: /* @__PURE__ */ e(w, { size: 16 }) }),
                /* @__PURE__ */ e("div", { class: "n-ob-ent-card__body", children: [
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__name", children: m.friendly_name }),
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__id", children: m.entity_id })
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    class: `n-ob-ent-card__star ${g ? "is-fav" : ""}`,
                    "aria-label": g ? "Retirer des favoris" : "Ajouter aux favoris",
                    onClick: (A) => {
                      A.stopPropagation(), r(m.entity_id);
                    },
                    children: g ? /* @__PURE__ */ e(Di, { size: 14 }) : /* @__PURE__ */ e(Ei, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${h ? "is-on" : ""}`, children: h && /* @__PURE__ */ e(Ai, { size: 12, stroke: 2.4 }) })
              ]
            }
          );
        })
      ] })
    ] }) })
  ] });
}
function Na(n) {
  const { theme: t, mode: i, userName: a, onPick: o } = n, r = We[t];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--theme", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 3 · Ambiance" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Quelle ambiance",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "vous va ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre." }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__grid", children: et.map((s) => {
        const l = We[s];
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
              /* @__PURE__ */ e(an, { size: 14 }),
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
              /* @__PURE__ */ e(lt, { size: 14 }),
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
        style: { background: i === "dark" ? "#1f1812" : r.swatches[0] },
        children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", style: { opacity: 0.6 }, children: "Aperçu" }),
          /* @__PURE__ */ e(
            "div",
            {
              class: "n-ob-preview__greet",
              style: { color: i === "dark" ? "#f4ede2" : "#1a1410" },
              children: [
                "Bonsoir, ",
                /* @__PURE__ */ e("em", { children: a })
              ]
            }
          ),
          /* @__PURE__ */ e("div", { class: "n-ob-preview__cards", children: [
            /* @__PURE__ */ e(
              "div",
              {
                class: "n-ob-preview__hero pattern-dots",
                style: { background: r.swatches[1] },
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
                  style: { background: r.swatches[2], color: r.swatches[0] },
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
function La(n) {
  const { hass: t, users: i, error: a, excluded: o, onToggleUser: r } = n;
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--family", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 4 · Famille" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Qui peut",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "entrer ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Décochez les utilisateurs Home Assistant qui ne doivent pas voir Nido. Ils continueront d'utiliser Home Assistant normalement." }),
      a && /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { color: "var(--warning)" }, children: "Liste complète indisponible (besoin d'un compte admin) — votre compte est affiché." })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob-step__illus n-ob-family", children: i === null ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Chargement des utilisateurs…" }) : i.length === 0 ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Aucun utilisateur trouvé." }) : /* @__PURE__ */ e("div", { class: "n-ob-family__list", children: i.map((s) => {
      const l = !o.has(s.id), p = s.id === t.user?.id;
      return /* @__PURE__ */ e(
        "label",
        {
          class: `n-ob-family__row ${l ? "is-allowed" : "is-excluded"}`,
          children: [
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: s.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e($i, { size: 18 }) }),
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
                onChange: () => !p && r(s.id),
                "aria-label": l ? "Autoriser" : "Exclure"
              }
            )
          ]
        }
      );
    }) }) })
  ] });
}
const ja = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function Ra({ hass: n, host: t }) {
  const [i, a] = k(null), [o, r] = k(null), [s, l] = k(null), [p, c] = k(null), u = D(() => nt(), []), [d, _] = k(() => Xt()), [f, x] = k(() => Gt()), [b, m] = k(() => Kt()), [h, g] = k(() => Qt()), [w, A] = k(
    () => ni()
  ), [z, L] = k(() => !Mn()), [P, j] = k(
    { kind: "dashboard" }
  ), $ = (C) => {
    _(C), He(C);
  }, V = (C) => {
    g(C), ei(C);
  }, Q = (C, U) => {
    A((M) => {
      const I = { ...M, [C]: U };
      return ti(I), I;
    });
  }, ee = ae(n);
  ee.current = n, K(() => {
    if (!n) return;
    let C = !1;
    const U = [], M = async () => {
      const I = ee.current;
      if (I)
        try {
          const [S, F, J] = await Promise.all([
            Ut(I),
            Wt(I),
            Bt(I)
          ]);
          if (C) return;
          a(S), r(F), l(J);
        } catch (S) {
          if (C) return;
          c(S instanceof Error ? S.message : String(S));
        }
    };
    return M(), Promise.all(
      ja.map(
        (I) => n.connection.subscribeEvents(() => {
          C || M();
        }, I)
      )
    ).then((I) => {
      if (C) {
        I.forEach((S) => S());
        return;
      }
      U.push(...I);
    }).catch((I) => console.warn("Nido: subscribeEvents failed", I)), () => {
      C = !0, U.forEach((I) => I());
    };
  }, [n != null]);
  const Z = D(() => !n || !o || !s ? [] : Yt(n, o, s), [n?.states, o, s]), Y = (C, U) => {
    t?.applyTheme?.(C, U);
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
  const te = D(() => new Set(f), [f]), B = P.kind === "room" ? i.find((C) => C.area_id === P.areaId) ?? null : null, ie = D(
    () => B ? Z.filter(
      (C) => C.area_id === B.area_id && te.has(C.entity_id)
    ) : [],
    [Z, B, te]
  );
  return /* @__PURE__ */ e(H, { children: [
    P.kind === "dashboard" || !B ? /* @__PURE__ */ e(
      Aa,
      {
        hass: n,
        areas: i,
        entities: Z,
        favorites: d,
        exposed: f,
        roomsOrder: h,
        onConfigure: () => L(!0),
        onOpenRoom: (C) => j({ kind: "room", areaId: C }),
        onReorderFavorites: $,
        onReorderRooms: V
      }
    ) : /* @__PURE__ */ e(
      Ta,
      {
        hass: n,
        area: B,
        entities: ie,
        entitiesOrder: w[B.area_id] ?? [],
        onBack: () => j({ kind: "dashboard" }),
        onReorderEntities: (C) => Q(B.area_id, C)
      }
    ),
    z && /* @__PURE__ */ e(
      Da,
      {
        hass: n,
        entities: Z,
        areas: i,
        initialTheme: u.theme,
        initialMode: u.mode,
        initialExposed: f,
        initialFavorites: d,
        initialExcludedUsers: b,
        isReturning: Mn(),
        onApplyTheme: Y,
        onClose: () => L(!1),
        onDone: (C) => {
          x(C.exposed), _(C.favorites), m(C.excludedUsers), L(!1);
        }
      }
    )
  ] });
}
const Fa = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', Va = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-root-mount{width:100%;height:100%}.nido-shell{width:100%;height:100%;overflow-x:hidden;overflow-y:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px);box-sizing:border-box}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__brand{display:flex;flex-direction:column;align-items:flex-start;gap:4px}.nido-topbar__clock{font-family:var(--font-mono);font-size:14px;font-weight:600;color:var(--ink-3);line-height:1}.nido-topbar__brand span{font-family:"Comfortaa",var(--font-sans);font-weight:700;font-size:24px;letter-spacing:.04em;color:var(--accent);line-height:1}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card--accent-muted{background:var(--accent-soft);color:var(--ink-1);box-shadow:var(--shadow-md)}.n-card--accent-muted .n-icon-bubble{background:color-mix(in srgb,var(--accent) 22%,var(--accent-soft));color:var(--accent-deep)}.n-card--accent-muted .n-toggle{background:color-mix(in srgb,var(--accent) 18%,var(--bg-inset))}.n-card--accent-muted .n-toggle__thumb{background:var(--accent)}.n-card--accent-muted .n-eyebrow{color:var(--accent-deep);opacity:.7}.n-card--accent-muted .n-muted{color:var(--accent-deep);opacity:.65}.n-card--accent-muted .n-title{color:var(--accent-deep)}.n-card[data-hero=true],.nido-drag-item[data-hero=true] .n-card{min-height:200px;padding:24px}.n-cover-glow-wrap{position:relative;border-radius:calc(var(--r-lg) + 2px);padding:2px;overflow:hidden;isolation:isolate;background:transparent;transition:box-shadow .5s var(--ease-out)}.n-cover-glow-wrap[data-active=true]{box-shadow:0 0 18px 2px color-mix(in srgb,var(--accent) 35%,transparent)}.n-cover-glow-wrap .n-card{position:relative;z-index:1}.n-cover-glow-wrap:before{content:"";position:absolute;width:200%;height:200%;top:-50%;left:-50%;background:conic-gradient(from 0deg,transparent 0%,transparent 35%,color-mix(in srgb,var(--accent) 60%,transparent) 45%,var(--accent) 50%,color-mix(in srgb,var(--accent) 60%,transparent) 55%,transparent 65%,transparent 100%);animation:cover-glow-spin 3.5s linear infinite;opacity:0;transition:opacity .5s var(--ease-out);pointer-events:none;z-index:0;will-change:transform}.n-cover-glow-wrap[data-active=true]:before{opacity:1}@keyframes cover-glow-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.n-cover-glow-wrap:before{animation:none}.n-cover-glow-wrap[data-active=true]:before{background:var(--accent);opacity:.6}}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:linear-gradient(to right,var(--accent) var(--val, 0%),var(--bg-inset) var(--val, 0%));outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-runnable-track{height:10px;border-radius:var(--r-pill);background:transparent}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer;margin-top:-3px}.n-slider::-moz-range-track{height:10px;border-radius:var(--r-pill);background:var(--bg-inset)}.n-slider::-moz-range-progress{height:10px;border-radius:var(--r-pill);background:var(--accent)}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:linear-gradient(to right,rgba(255,255,255,.5) var(--val, 0%),rgba(255,255,255,.2) var(--val, 0%))}.n-card--accent .n-slider::-moz-range-track{background:#fff3}.n-card--accent .n-slider::-moz-range-progress{background:#ffffff80}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3)}.n-media__volume .n-slider{flex:1}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-weather-pill{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 10px;background:var(--bg-card);border:1px solid var(--ink-4);border-radius:999px;font-family:var(--font-sans);color:var(--ink-1)}.nido-weather-pill__icon{display:inline-flex;align-items:center;color:var(--accent)}.nido-weather-pill__temp{font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:-.01em}.nido-weather-pill__sep{width:1px;height:12px;background:var(--ink-4)}.nido-weather-pill__label{font-size:12px;color:var(--ink-3)}.nido-lights-pill-btn{background:none;border:none;padding:0;cursor:pointer;display:inline-flex;transition:transform .2s}.nido-lights-pill-btn:hover{transform:scale(1.04)}.nido-lights-pill-btn:active{transform:scale(.96)}.nido-lights-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 10px;background:var(--accent-soft);border-radius:var(--r-pill);font-family:var(--font-sans);color:var(--accent-deep)}.nido-lights-pill__count{font-family:var(--font-display);font-size:13px;font-weight:600;letter-spacing:-.01em}.nido-lights-pill__label{font-size:12px;opacity:.8}.nido-lights-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-lights-panel__title{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-lights-panel__count{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:28px;padding:0 8px;background:var(--accent-soft);color:var(--accent-deep);border-radius:var(--r-pill);font-family:var(--font-display);font-size:14px;font-weight:600}.nido-lights-list{display:flex;flex-direction:column;gap:10px}.nido-lights-row{display:flex;align-items:center;gap:14px;background:var(--bg-card);border-radius:var(--r-lg);padding:14px 16px;transition:opacity .2s}.nido-lights-row.is-pending{opacity:.6;pointer-events:none}.nido-lights-row__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-lights-row__body{flex:1;min-width:0}.nido-lights-row__name{font-family:var(--font-display);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-lights-row__room{font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:2px;text-transform:uppercase;letter-spacing:.06em}.nido-lights-row__pct{font-family:var(--font-mono);font-size:13px;color:var(--ink-3);flex-shrink:0}.nido-lights-panel__footer{padding:16px 32px 24px;border-top:1px solid var(--ink-4)}.nido-lights-panel__all-off{width:100%;padding:12px;border-radius:var(--r-pill);border:1px solid var(--ink-4);background:var(--bg-card);color:var(--ink-1);font-family:var(--font-display);font-size:15px;font-weight:600;cursor:pointer;transition:background .18s,color .18s}.nido-lights-panel__all-off:hover{background:var(--ink-1);color:var(--bg-shell);border-color:var(--ink-1)}.nido-lights-panel__all-off:disabled{opacity:.5;cursor:not-allowed}.nido-cal-widget{cursor:pointer;transition:transform .2s var(--ease-spring),background .2s}.nido-cal-widget:hover{transform:translateY(-2px)}.nido-cal-widget:active{transform:scale(.98)}.nido-cal-widget__bubble{background:color-mix(in srgb,var(--cal-color, var(--ink-3)) 14%,var(--bg-inset))!important;color:var(--cal-color, var(--ink-3))!important}.nido-cal-widget__title{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.01em;line-height:1.2;color:var(--ink-1)}.nido-cal-widget__when{display:flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:auto}.nido-cal-widget__sep{opacity:.5}.nido-cal-widget__time{font-family:var(--font-mono);font-size:11px;letter-spacing:.04em}.nido-cal-panel__legend{display:flex;align-items:center;gap:16px;padding:10px 32px 12px;border-bottom:1px solid var(--ink-4)}.nido-cal-panel__legend-item{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}.nido-cal-panel__legend-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}.nido-cal-panel__days{display:flex;flex-direction:column;gap:0}.nido-cal-panel__day{display:flex;align-items:flex-start;gap:16px;padding:14px 0;border-bottom:1px dashed var(--ink-4)}.nido-cal-panel__day:last-child{border-bottom:none}.nido-cal-panel__badge{width:44px;height:44px;border-radius:var(--r-md);background:var(--bg-shell);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s}.nido-cal-panel__day.is-today .nido-cal-panel__badge{background:var(--accent-soft)}.nido-cal-panel__badge-day{font-family:var(--font-mono);font-size:9px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.1em}.nido-cal-panel__day.is-today .nido-cal-panel__badge-day{color:var(--accent-deep)}.nido-cal-panel__badge-num{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-cal-panel__day.is-today .nido-cal-panel__badge-num{color:var(--accent-deep)}.nido-cal-panel__events{flex:1;display:flex;flex-direction:column;gap:8px;padding-top:4px}.nido-cal-panel__empty{font-family:var(--font-sans);font-size:13px;color:var(--ink-4);line-height:44px}.nido-cal-panel__event{display:flex;align-items:flex-start;gap:10px}.nido-cal-panel__event-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px}.nido-cal-panel__event-body{flex:1;min-width:0}.nido-cal-panel__event-title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-cal-panel__event-who{font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-3);display:block;margin-top:2px}.nido-cal-panel__event-time{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.04em;flex-shrink:0;padding-top:2px}.n-weather__icon{color:var(--accent)}.n-weather__readout{display:flex;align-items:baseline;gap:4px;margin-top:6px}.n-weather__meta{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;color:var(--ink-3)}.n-weather__sep{width:3px;height:3px;border-radius:50%;background:var(--ink-4)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__head-right{display:flex;align-items:center;gap:6px}.nido-room-card__presence{display:flex}.nido-room-card__avatar{width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);object-fit:cover;margin-left:-6px;background:var(--accent)}.nido-room-card__avatar:first-child{margin-left:0}.nido-room-card__avatar--initial{display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:var(--bg);background:var(--accent);letter-spacing:0}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:hidden;max-height:100vh;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1 1 0;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:0;overflow:hidden;box-sizing:border-box}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__search{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);margin-bottom:12px}.n-ob-ent__search-icon{display:flex;color:var(--ink-3);flex-shrink:0}.n-ob-ent__search-input{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--ink-1);font-family:var(--font-sans);font-size:13px}.n-ob-ent__search-input::placeholder{color:var(--ink-3)}.n-ob-ent__search-clear{border:none;background:transparent;cursor:pointer;color:var(--ink-3);padding:4px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center}.n-ob-ent__search-clear:hover{background:var(--bg-shell);color:var(--ink-1)}.n-ob-ent__empty{grid-column:1 / -1;padding:24px;border-radius:var(--r-md);background:var(--bg-card);font-family:var(--font-sans);font-size:13px;color:var(--ink-3);text-align:center}.n-ob-ent__grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:56vh;padding-right:4px;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;word-break:break-word}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step{gap:20px}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}@media(max-width:600px){.n-ob{padding:8px;overflow:hidden}.n-ob__shell{padding:16px;border-radius:var(--r-xl);min-height:0;height:100%}.n-ob__header{margin-bottom:16px;gap:8px;flex-wrap:nowrap;flex:0 0 auto}.n-ob__brand-mark{width:30px;height:30px}.n-ob__brand-name{font-size:14px}.n-ob__step-count{display:none}.n-ob__skip{font-size:12px;padding:4px}.n-ob__body{display:block;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.n-ob-step{gap:16px}.n-ob__h1{font-size:clamp(28px,8vw,40px);margin-bottom:16px}.n-ob__lead{font-size:14px;margin-bottom:16px}.n-ob__eyebrow{margin-bottom:12px;font-size:10px}.n-ob__footer{margin-top:16px;gap:8px;flex:0 0 auto}.n-ob__back{padding:10px 14px;font-size:13px}.n-ob__primary{padding:12px 18px;font-size:13px}.n-ob-welcome-illus{max-width:260px}.n-ob-steps-overview{gap:16px;margin-top:20px}.n-ob-recap__grid{grid-template-columns:1fr 1fr;gap:8px}.n-ob-recap__value{font-size:22px}.n-ob-step__illus{min-height:180px}.n-ob-step__illus svg{width:220px;height:220px}.n-ob-pill-card{margin-top:16px;padding:12px}.n-ob-ent__count{font-size:22px}.n-ob-ent__rail{margin-bottom:4px}.n-ob-ent__list{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;max-height:none;gap:6px;padding-bottom:6px;-webkit-overflow-scrolling:touch}.n-ob-ent__rail-row{flex-shrink:0;padding:6px 10px 6px 6px;gap:8px;border-radius:var(--r-pill);border:1px solid var(--ink-4)}.n-ob-ent__rail-row.is-active{border-color:var(--ink-1)}.n-ob-ent__rail-icon{width:22px;height:22px}.n-ob-ent__rail-label{font-size:12px;flex:0 0 auto}.n-ob-ent__rail-count{font-size:10px}.n-ob-ent__head{flex-wrap:wrap;margin-bottom:10px;gap:8px}.n-ob-ent__title{font-size:18px}.n-ob-ent__head-actions{width:100%}.n-ob-ent__head-actions .n-pill-btn{flex:1;padding:6px 10px;font-size:12px}.n-ob-ent__search{padding:8px 12px;margin-bottom:8px}.n-ob-ent__search-input{font-size:14px}.n-ob-ent__grid{max-height:none;padding-right:0}.n-ob-ent-card{padding:10px;gap:10px}.n-ob-ent-card__icon{width:32px;height:32px}.n-ob-theme__grid{gap:8px}.n-ob-theme__tile{padding:10px}.n-ob-theme__name{font-size:14px}.n-ob-preview{padding:16px}.n-ob-preview__greet{font-size:22px}.n-ob-family{padding:12px;min-height:0}.n-ob-family__list{max-height:none}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}.nido-weather-panel{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end}.nido-weather-panel__backdrop{position:absolute;inset:0;background:#0006;backdrop-filter:blur(1px);animation:fade-in .3s ease-out}.nido-weather-panel__content{position:relative;width:100%;max-width:480px;background:var(--bg-shell);box-shadow:-4px 0 32px color-mix(in srgb,var(--accent) 15%,transparent);display:flex;flex-direction:column;animation:slide-in-right .3s cubic-bezier(.16,1,.3,1);overflow:hidden}.nido-weather-panel__header{padding:24px 32px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--fg-rgb),.05)}.nido-weather-panel__header h2{font-family:Comfortaa,sans-serif;font-size:1.5rem;font-weight:600;margin:0;color:var(--fg)}.nido-weather-panel__close{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;background:none;border-radius:50%;color:var(--ink-2);cursor:pointer;transition:background .15s,color .15s;flex-shrink:0}.nido-weather-panel__close:hover{background:rgba(var(--fg-rgb),.07);color:var(--fg)}.nido-weather-panel__scroll{flex:1;overflow-y:auto;padding:24px 32px;display:flex;flex-direction:column;gap:24px}.nido-wp-current{display:flex;align-items:center;gap:24px;padding:16px 0}.nido-wp-current svg{color:var(--accent)}.nido-wp-current-info{display:flex;flex-direction:column;gap:4px}.nido-wp-temp{font-size:3rem;font-weight:300;line-height:1;color:var(--fg);font-variant-numeric:tabular-nums}.nido-wp-desc{font-size:1.125rem;color:var(--fg-muted);text-transform:capitalize}.nido-wp-alert{display:flex;align-items:center;gap:12px;padding:16px;border-radius:12px;font-weight:500}.nido-wp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.nido-wp-card{background:var(--bg-card);padding:16px;border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;gap:8px}.nido-wp-card-head{display:flex;align-items:center;gap:8px;color:var(--fg-muted);font-size:.875rem}.nido-wp-card-val{font-size:1.125rem;font-weight:500;color:var(--fg)}.nido-wp-section h3{font-size:1rem;font-weight:600;color:var(--fg);margin:0 0 16px;font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:.05em;opacity:.8}.nido-wp-hourly{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;scrollbar-width:none}.nido-wp-hourly::-webkit-scrollbar{display:none}.nido-wp-hour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:60px;background:var(--bg-card);padding:16px 8px;border-radius:100px;border:1px solid var(--border)}.nido-wp-hour-time{font-size:.875rem;color:var(--fg-muted)}.nido-wp-hour svg{color:var(--accent)}.nido-wp-hour-temp{font-weight:600;font-size:1rem}.nido-wp-hour-precip{font-size:.75rem;color:#0ea5e9;font-weight:500}.nido-wp-daily{display:flex;flex-direction:column;gap:12px}.nido-wp-day{display:flex;align-items:center;gap:16px;padding:12px 16px;background:var(--bg-card);border-radius:12px;border:1px solid var(--border)}.nido-wp-day-name{width:100px;font-weight:500;color:var(--fg);text-transform:capitalize}.nido-wp-day svg{color:var(--accent)}.nido-wp-day-temps{flex:1;display:flex;align-items:center;gap:12px;justify-content:flex-end}.nido-wp-day-min{color:var(--fg-muted);width:32px;text-align:right}.nido-wp-day-max{font-weight:600;width:32px}.nido-wp-day-bar{flex:1;height:4px;background:var(--border);border-radius:2px;position:relative}.nido-weather-pill-btn{background:none;border:none;padding:0;margin:0;cursor:pointer;transition:transform .2s;border-radius:100px;display:inline-flex}.nido-weather-pill-btn:hover{transform:scale(1.05)}.nido-weather-pill-btn:active{transform:scale(.95)}.nido-home-pill{display:flex;align-items:center;gap:12px;background:transparent;border:1px solid var(--b-1);padding:6px 16px 6px 6px;border-radius:99px}.nido-home-pill__avatars{display:flex;align-items:center}.nido-home-pill__avatar{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--bg-shell);margin-left:-12px;position:relative;transition:transform .2s,z-index .2s}.nido-home-pill__avatar:first-child{margin-left:0}.nido-home-pill__avatar:hover{z-index:10;transform:translateY(-2px)}.nido-home-pill__text{font-size:15px;color:var(--ink-2);font-weight:500;white-space:nowrap}.nido-notification-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-notification-panel__backdrop{position:absolute;inset:0;background:#0003;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.nido-notification-panel__content{position:relative;width:100%;max-width:400px;height:100%;background:var(--bg-shell);box-shadow:-8px 0 32px #0000001a;display:flex;flex-direction:column;animation:nido-slide-in-right .4s var(--ease-out)}@keyframes nido-slide-in-right{0%{transform:translate(100%)}to{transform:translate(0)}}.nido-notification-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4)}.nido-notification-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-notification-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-notification-panel__close:hover{background:var(--ink-4)}.nido-notification-panel__scroll{flex:1;overflow-y:auto;padding:16px 32px 32px}.nido-notification-empty{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--ink-3);text-align:center}.nido-notification-empty__icon{margin-bottom:16px;opacity:.2}.nido-notification-list{display:flex;flex-direction:column;gap:12px}.nido-notification-item{position:relative;background:var(--bg-card);border-radius:var(--r-lg);padding:16px;display:flex;gap:14px;transition:transform .2s;border:1px solid transparent}.nido-notification-item:hover{transform:translateY(-2px)}.nido-notification-item__icon{width:40px;height:40px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-notification-item--info .nido-notification-item__icon{background:color-mix(in srgb,var(--accent) 15%,var(--bg-card));color:var(--accent)}.nido-notification-item--warning .nido-notification-item__icon{background:color-mix(in srgb,var(--danger) 15%,var(--bg-card));color:var(--danger)}.nido-notification-item--success .nido-notification-item__icon{background:color-mix(in srgb,var(--positive) 15%,var(--bg-card));color:var(--positive)}.nido-notification-item__body{flex:1;min-width:0}.nido-notification-item__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px}.nido-notification-item__title{font-family:var(--font-display);font-weight:600;font-size:15px;color:var(--ink-1)}.nido-notification-item__time{font-family:var(--font-mono);font-size:10px;color:var(--ink-3)}.nido-notification-item__message{margin:0;font-size:13px;color:var(--ink-2);line-height:1.4}.nido-notification-item__dismiss{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;border:none;background:transparent;color:var(--ink-3);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s,background .2s}.nido-notification-item:hover .nido-notification-item__dismiss{opacity:1}.nido-notification-item__dismiss:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-bell-btn{position:relative;background:transparent;color:var(--ink-2);padding:6px 12px;border:1px solid var(--ink-4);border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s;height:32px;min-width:44px}.nido-bell-btn:hover{background:var(--bg-inset);border-color:var(--ink-3)}.nido-bell-btn__badge{position:absolute;top:4px;right:8px;width:8px;height:8px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-shell)}@media(max-width:768px){.nido-topbar__actions{flex-direction:column;align-items:flex-end;gap:8px}.nido-bell-btn{order:2}.n-pill-btn--ghost{order:1}}', Ln = "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let jn = !1;
function Ha() {
  if (jn || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${Ln}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = Ln, document.head.appendChild(t);
  }
  jn = !0;
}
class Ua extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, Ha();
    const t = this.attachShadow({ mode: "open" }), i = document.createElement("style");
    i.textContent = `${Fa}
${Va}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(i, this._mountPoint);
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
    const { theme: t, mode: i } = nt();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", i), this._render();
  }
  disconnectedCallback() {
    un(null, this._mountPoint);
  }
  applyTheme(t, i) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", i);
  }
  _render() {
    un(Un(Ra, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", Ua);
console.info(
  "%c NIDO %c v0.1.5 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
