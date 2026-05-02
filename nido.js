var Ae, D, jn, J, sn, Rn, Fn, De, ye, se, Vn, We, $e, Le, Ie = {}, ze = [], Et = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ee = Array.isArray;
function q(n, t) {
  for (var i in t) n[i] = t[i];
  return n;
}
function Be(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function Hn(n, t, i) {
  var a, o, r, l = {};
  for (r in t) r == "key" ? a = t[r] : r == "ref" ? o = t[r] : l[r] = t[r];
  if (arguments.length > 2 && (l.children = arguments.length > 3 ? Ae.call(arguments, 2) : i), typeof n == "function" && n.defaultProps != null) for (r in n.defaultProps) l[r] === void 0 && (l[r] = n.defaultProps[r]);
  return we(n, l, a, o, null);
}
function we(n, t, i, a, o) {
  var r = { type: n, props: t, key: i, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++jn, __i: -1, __u: 0 };
  return o == null && D.vnode != null && D.vnode(r), r;
}
function H(n) {
  return n.children;
}
function ke(n, t) {
  this.props = n, this.context = t;
}
function te(n, t) {
  if (t == null) return n.__ ? te(n.__, n.__i + 1) : null;
  for (var i; t < n.__k.length; t++) if ((i = n.__k[t]) != null && i.__e != null) return i.__e;
  return typeof n.type == "function" ? te(n) : null;
}
function Dt(n) {
  if (n.__P && n.__d) {
    var t = n.__v, i = t.__e, a = [], o = [], r = q({}, t);
    r.__v = t.__v + 1, D.vnode && D.vnode(r), Ze(n.__P, r, t, n.__n, n.__P.namespaceURI, 32 & t.__u ? [i] : null, a, i ?? te(t), !!(32 & t.__u), o), r.__v = t.__v, r.__.__k[r.__i] = r, Zn(a, r, o), t.__e = t.__ = null, r.__e != i && Un(r);
  }
}
function Un(n) {
  if ((n = n.__) != null && n.__c != null) return n.__e = n.__c.base = null, n.__k.some(function(t) {
    if (t != null && t.__e != null) return n.__e = n.__c.base = t.__e;
  }), Un(n);
}
function cn(n) {
  (!n.__d && (n.__d = !0) && J.push(n) && !Se.__r++ || sn != D.debounceRendering) && ((sn = D.debounceRendering) || Rn)(Se);
}
function Se() {
  try {
    for (var n, t = 1; J.length; ) J.length > t && J.sort(Fn), n = J.shift(), t = J.length, Dt(n);
  } finally {
    J.length = Se.__r = 0;
  }
}
function Wn(n, t, i, a, o, r, l, s, p, d, h) {
  var c, g, f, x, b, u, _, m = a && a.__k || ze, w = t.length;
  for (p = Tt(i, t, m, p, w), c = 0; c < w; c++) (f = i.__k[c]) != null && (g = f.__i != -1 && m[f.__i] || Ie, f.__i = c, u = Ze(n, f, g, o, r, l, s, p, d, h), x = f.__e, f.ref && g.ref != f.ref && (g.ref && Ye(g.ref, null, f), h.push(f.ref, f.__c || x, f)), b == null && x != null && (b = x), (_ = !!(4 & f.__u)) || g.__k === f.__k ? (p = Bn(f, p, n, _), _ && g.__e && (g.__e = null)) : typeof f.type == "function" && u !== void 0 ? p = u : x && (p = x.nextSibling), f.__u &= -7);
  return i.__e = b, p;
}
function Tt(n, t, i, a, o) {
  var r, l, s, p, d, h = i.length, c = h, g = 0;
  for (n.__k = new Array(o), r = 0; r < o; r++) (l = t[r]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = n.__k[r] = we(null, l, null, null, null) : Ee(l) ? l = n.__k[r] = we(H, { children: l }, null, null, null) : l.constructor === void 0 && l.__b > 0 ? l = n.__k[r] = we(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : n.__k[r] = l, p = r + g, l.__ = n, l.__b = n.__b + 1, s = null, (d = l.__i = Pt(l, i, p, c)) != -1 && (c--, (s = i[d]) && (s.__u |= 2)), s == null || s.__v == null ? (d == -1 && (o > h ? g-- : o < h && g++), typeof l.type != "function" && (l.__u |= 4)) : d != p && (d == p - 1 ? g-- : d == p + 1 ? g++ : (d > p ? g-- : g++, l.__u |= 4))) : n.__k[r] = null;
  if (c) for (r = 0; r < h; r++) (s = i[r]) != null && (2 & s.__u) == 0 && (s.__e == a && (a = te(s)), qn(s, s));
  return a;
}
function Bn(n, t, i, a) {
  var o, r;
  if (typeof n.type == "function") {
    for (o = n.__k, r = 0; o && r < o.length; r++) o[r] && (o[r].__ = n, t = Bn(o[r], t, i, a));
    return t;
  }
  n.__e != t && (a && (t && n.type && !t.parentNode && (t = te(n)), i.insertBefore(n.__e, t || null)), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType == 8);
  return t;
}
function Pt(n, t, i, a) {
  var o, r, l, s = n.key, p = n.type, d = t[i], h = d != null && (2 & d.__u) == 0;
  if (d === null && s == null || h && s == d.key && p == d.type) return i;
  if (a > (h ? 1 : 0)) {
    for (o = i - 1, r = i + 1; o >= 0 || r < t.length; ) if ((d = t[l = o >= 0 ? o-- : r++]) != null && (2 & d.__u) == 0 && s == d.key && p == d.type) return l;
  }
  return -1;
}
function dn(n, t, i) {
  t[0] == "-" ? n.setProperty(t, i ?? "") : n[t] = i == null ? "" : typeof i != "number" || Et.test(t) ? i : i + "px";
}
function me(n, t, i, a, o) {
  var r, l;
  e: if (t == "style") if (typeof i == "string") n.style.cssText = i;
  else {
    if (typeof a == "string" && (n.style.cssText = a = ""), a) for (t in a) i && t in i || dn(n.style, t, "");
    if (i) for (t in i) a && i[t] == a[t] || dn(n.style, t, i[t]);
  }
  else if (t[0] == "o" && t[1] == "n") r = t != (t = t.replace(Vn, "$1")), l = t.toLowerCase(), t = l in n || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = i, i ? a ? i[se] = a[se] : (i[se] = We, n.addEventListener(t, r ? Le : $e, r)) : n.removeEventListener(t, r ? Le : $e, r);
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
      if (t[ye] == null) t[ye] = We++;
      else if (t[ye] < i[se]) return;
      return i(D.event ? D.event(t) : t);
    }
  };
}
function Ze(n, t, i, a, o, r, l, s, p, d) {
  var h, c, g, f, x, b, u, _, m, w, z, E, L, T, j, N = t.type;
  if (t.constructor !== void 0) return null;
  128 & i.__u && (p = !!(32 & i.__u), r = [s = t.__e = i.__e]), (h = D.__b) && h(t);
  e: if (typeof N == "function") try {
    if (_ = t.props, m = N.prototype && N.prototype.render, w = (h = N.contextType) && a[h.__c], z = h ? w ? w.props.value : h.__ : a, i.__c ? u = (c = t.__c = i.__c).__ = c.__E : (m ? t.__c = c = new N(_, z) : (t.__c = c = new ke(_, z), c.constructor = N, c.render = Ot), w && w.sub(c), c.state || (c.state = {}), c.__n = a, g = c.__d = !0, c.__h = [], c._sb = []), m && c.__s == null && (c.__s = c.state), m && N.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = q({}, c.__s)), q(c.__s, N.getDerivedStateFromProps(_, c.__s))), f = c.props, x = c.state, c.__v = t, g) m && N.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), m && c.componentDidMount != null && c.__h.push(c.componentDidMount);
    else {
      if (m && N.getDerivedStateFromProps == null && _ !== f && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, z), t.__v == i.__v || !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, z) === !1) {
        t.__v != i.__v && (c.props = _, c.state = c.__s, c.__d = !1), t.__e = i.__e, t.__k = i.__k, t.__k.some(function(V) {
          V && (V.__ = t);
        }), ze.push.apply(c.__h, c._sb), c._sb = [], c.__h.length && l.push(c);
        break e;
      }
      c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, z), m && c.componentDidUpdate != null && c.__h.push(function() {
        c.componentDidUpdate(f, x, b);
      });
    }
    if (c.context = z, c.props = _, c.__P = n, c.__e = !1, E = D.__r, L = 0, m) c.state = c.__s, c.__d = !1, E && E(t), h = c.render(c.props, c.state, c.context), ze.push.apply(c.__h, c._sb), c._sb = [];
    else do
      c.__d = !1, E && E(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
    while (c.__d && ++L < 25);
    c.state = c.__s, c.getChildContext != null && (a = q(q({}, a), c.getChildContext())), m && !g && c.getSnapshotBeforeUpdate != null && (b = c.getSnapshotBeforeUpdate(f, x)), T = h != null && h.type === H && h.key == null ? Yn(h.props.children) : h, s = Wn(n, Ee(T) ? T : [T], t, i, a, o, r, l, s, p, d), c.base = t.__e, t.__u &= -161, c.__h.length && l.push(c), u && (c.__E = c.__ = null);
  } catch (V) {
    if (t.__v = null, p || r != null) if (V.then) {
      for (t.__u |= p ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; ) s = s.nextSibling;
      r[r.indexOf(s)] = null, t.__e = s;
    } else {
      for (j = r.length; j--; ) Be(r[j]);
      je(t);
    }
    else t.__e = i.__e, t.__k = i.__k, V.then || je(t);
    D.__e(V, t, i);
  }
  else r == null && t.__v == i.__v ? (t.__k = i.__k, t.__e = i.__e) : s = t.__e = Nt(i.__e, t, i, a, o, r, l, p, d);
  return (h = D.diffed) && h(t), 128 & t.__u ? void 0 : s;
}
function je(n) {
  n && (n.__c && (n.__c.__e = !0), n.__k && n.__k.some(je));
}
function Zn(n, t, i) {
  for (var a = 0; a < i.length; a++) Ye(i[a], i[++a], i[++a]);
  D.__c && D.__c(t, n), n.some(function(o) {
    try {
      n = o.__h, o.__h = [], n.some(function(r) {
        r.call(o);
      });
    } catch (r) {
      D.__e(r, o.__v);
    }
  });
}
function Yn(n) {
  return typeof n != "object" || n == null || n.__b > 0 ? n : Ee(n) ? n.map(Yn) : q({}, n);
}
function Nt(n, t, i, a, o, r, l, s, p) {
  var d, h, c, g, f, x, b, u = i.props || Ie, _ = t.props, m = t.type;
  if (m == "svg" ? o = "http://www.w3.org/2000/svg" : m == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
    for (d = 0; d < r.length; d++) if ((f = r[d]) && "setAttribute" in f == !!m && (m ? f.localName == m : f.nodeType == 3)) {
      n = f, r[d] = null;
      break;
    }
  }
  if (n == null) {
    if (m == null) return document.createTextNode(_);
    n = document.createElementNS(o, m, _.is && _), s && (D.__m && D.__m(t, r), s = !1), r = null;
  }
  if (m == null) u === _ || s && n.data == _ || (n.data = _);
  else {
    if (r = r && Ae.call(n.childNodes), !s && r != null) for (u = {}, d = 0; d < n.attributes.length; d++) u[(f = n.attributes[d]).name] = f.value;
    for (d in u) f = u[d], d == "dangerouslySetInnerHTML" ? c = f : d == "children" || d in _ || d == "value" && "defaultValue" in _ || d == "checked" && "defaultChecked" in _ || me(n, d, null, f, o);
    for (d in _) f = _[d], d == "children" ? g = f : d == "dangerouslySetInnerHTML" ? h = f : d == "value" ? x = f : d == "checked" ? b = f : s && typeof f != "function" || u[d] === f || me(n, d, f, u[d], o);
    if (h) s || c && (h.__html == c.__html || h.__html == n.innerHTML) || (n.innerHTML = h.__html), t.__k = [];
    else if (c && (n.innerHTML = ""), Wn(t.type == "template" ? n.content : n, Ee(g) ? g : [g], t, i, a, m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, l, r ? r[0] : i.__k && te(i, 0), s, p), r != null) for (d = r.length; d--; ) Be(r[d]);
    s || (d = "value", m == "progress" && x == null ? n.removeAttribute("value") : x != null && (x !== n[d] || m == "progress" && !x || m == "option" && x != u[d]) && me(n, d, x, u[d], o), d = "checked", b != null && b != n[d] && me(n, d, b, u[d], o));
  }
  return n;
}
function Ye(n, t, i) {
  try {
    if (typeof n == "function") {
      var a = typeof n.__u == "function";
      a && n.__u(), a && t == null || (n.__u = n(t));
    } else n.current = t;
  } catch (o) {
    D.__e(o, i);
  }
}
function qn(n, t, i) {
  var a, o;
  if (D.unmount && D.unmount(n), (a = n.ref) && (a.current && a.current != n.__e || Ye(a, null, t)), (a = n.__c) != null) {
    if (a.componentWillUnmount) try {
      a.componentWillUnmount();
    } catch (r) {
      D.__e(r, t);
    }
    a.base = a.__P = null;
  }
  if (a = n.__k) for (o = 0; o < a.length; o++) a[o] && qn(a[o], t, i || typeof n.type != "function");
  i || Be(n.__e), n.__c = n.__ = n.__e = void 0;
}
function Ot(n, t, i) {
  return this.constructor(n, i);
}
function un(n, t, i) {
  var a, o, r, l;
  t == document && (t = document.documentElement), D.__ && D.__(n, t), o = (a = !1) ? null : t.__k, r = [], l = [], Ze(t, n = t.__k = Hn(H, null, [n]), o || Ie, Ie, t.namespaceURI, o ? null : t.firstChild ? Ae.call(t.childNodes) : null, r, o ? o.__e : t.firstChild, a, l), Zn(r, n, l);
}
Ae = ze.slice, D = { __e: function(n, t, i, a) {
  for (var o, r, l; t = t.__; ) if ((o = t.__c) && !o.__) try {
    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(n)), l = o.__d), o.componentDidCatch != null && (o.componentDidCatch(n, a || {}), l = o.__d), l) return o.__E = o;
  } catch (s) {
    n = s;
  }
  throw n;
} }, jn = 0, ke.prototype.setState = function(n, t) {
  var i;
  i = this.__s != null && this.__s != this.state ? this.__s : this.__s = q({}, this.state), typeof n == "function" && (n = n(q({}, i), this.props)), n && q(i, n), n != null && this.__v && (t && this._sb.push(t), cn(this));
}, ke.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), cn(this));
}, ke.prototype.render = H, J = [], Rn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Fn = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Se.__r = 0, De = Math.random().toString(8), ye = "__d" + De, se = "__a" + De, Vn = /(PointerCapture)$|Capture$/i, We = 0, $e = pn(!1), Le = pn(!0);
var $t = 0;
function e(n, t, i, a, o, r) {
  t || (t = {});
  var l, s, p = t;
  if ("ref" in p) for (s in p = {}, t) s == "ref" ? l = t[s] : p[s] = t[s];
  var d = { type: n, props: p, key: i, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --$t, __i: -1, __u: 0, __source: o, __self: r };
  if (typeof n == "function" && (l = n.defaultProps)) for (s in l) p[s] === void 0 && (p[s] = l[s]);
  return D.vnode && D.vnode(d), d;
}
var pe, O, Te, hn, ue = 0, Jn = [], $ = D, _n = $.__b, fn = $.__r, mn = $.diffed, gn = $.__c, bn = $.unmount, vn = $.__;
function qe(n, t) {
  $.__h && $.__h(O, n, ue || t), ue = 0;
  var i = O.__H || (O.__H = { __: [], __h: [] });
  return n >= i.__.length && i.__.push({}), i.__[n];
}
function k(n) {
  return ue = 1, Lt(Xn, n);
}
function Lt(n, t, i) {
  var a = qe(pe++, 2);
  if (a.t = n, !a.__c && (a.__ = [Xn(void 0, t), function(s) {
    var p = a.__N ? a.__N[0] : a.__[0], d = a.t(p, s);
    p !== d && (a.__N = [d, a.__[1]], a.__c.setState({}));
  }], a.__c = O, !O.__f)) {
    var o = function(s, p, d) {
      if (!a.__c.__H) return !0;
      var h = a.__c.__H.__.filter(function(g) {
        return g.__c;
      });
      if (h.every(function(g) {
        return !g.__N;
      })) return !r || r.call(this, s, p, d);
      var c = a.__c.props !== s;
      return h.some(function(g) {
        if (g.__N) {
          var f = g.__[0];
          g.__ = g.__N, g.__N = void 0, f !== g.__[0] && (c = !0);
        }
      }), r && r.call(this, s, p, d) || c;
    };
    O.__f = !0;
    var r = O.shouldComponentUpdate, l = O.componentWillUpdate;
    O.componentWillUpdate = function(s, p, d) {
      if (this.__e) {
        var h = r;
        r = void 0, o(s, p, d), r = h;
      }
      l && l.call(this, s, p, d);
    }, O.shouldComponentUpdate = o;
  }
  return a.__N || a.__;
}
function Q(n, t) {
  var i = qe(pe++, 3);
  !$.__s && Gn(i.__H, t) && (i.__ = n, i.u = t, O.__H.__h.push(i));
}
function ne(n) {
  return ue = 5, P(function() {
    return { current: n };
  }, []);
}
function P(n, t) {
  var i = qe(pe++, 7);
  return Gn(i.__H, t) && (i.__ = n(), i.__H = t, i.__h = n), i.__;
}
function xn(n, t) {
  return ue = 8, P(function() {
    return n;
  }, t);
}
function jt() {
  for (var n; n = Jn.shift(); ) {
    var t = n.__H;
    if (n.__P && t) try {
      t.__h.some(Me), t.__h.some(Re), t.__h = [];
    } catch (i) {
      t.__h = [], $.__e(i, n.__v);
    }
  }
}
$.__b = function(n) {
  O = null, _n && _n(n);
}, $.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), vn && vn(n, t);
}, $.__r = function(n) {
  fn && fn(n), pe = 0;
  var t = (O = n.__c).__H;
  t && (Te === O ? (t.__h = [], O.__h = [], t.__.some(function(i) {
    i.__N && (i.__ = i.__N), i.u = i.__N = void 0;
  })) : (t.__h.some(Me), t.__h.some(Re), t.__h = [], pe = 0)), Te = O;
}, $.diffed = function(n) {
  mn && mn(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (Jn.push(t) !== 1 && hn === $.requestAnimationFrame || ((hn = $.requestAnimationFrame) || Rt)(jt)), t.__H.__.some(function(i) {
    i.u && (i.__H = i.u), i.u = void 0;
  })), Te = O = null;
}, $.__c = function(n, t) {
  t.some(function(i) {
    try {
      i.__h.some(Me), i.__h = i.__h.filter(function(a) {
        return !a.__ || Re(a);
      });
    } catch (a) {
      t.some(function(o) {
        o.__h && (o.__h = []);
      }), t = [], $.__e(a, i.__v);
    }
  }), gn && gn(n, t);
}, $.unmount = function(n) {
  bn && bn(n);
  var t, i = n.__c;
  i && i.__H && (i.__H.__.some(function(a) {
    try {
      Me(a);
    } catch (o) {
      t = o;
    }
  }), i.__H = void 0, t && $.__e(t, i.__v));
};
var yn = typeof requestAnimationFrame == "function";
function Rt(n) {
  var t, i = function() {
    clearTimeout(a), yn && cancelAnimationFrame(t), setTimeout(n);
  }, a = setTimeout(i, 35);
  yn && (t = requestAnimationFrame(i));
}
function Me(n) {
  var t = O, i = n.__c;
  typeof i == "function" && (n.__c = void 0, i()), O = t;
}
function Re(n) {
  var t = O;
  n.__c = n.__(), O = t;
}
function Gn(n, t) {
  return !n || n.length !== t.length || t.some(function(i, a) {
    return i !== n[a];
  });
}
function Xn(n, t) {
  return typeof t == "function" ? t(n) : t;
}
async function Ft(n) {
  return [...await n.callWS({ type: "config/area_registry/list" })].sort((i, a) => i.name.localeCompare(a.name, "fr"));
}
async function Vt(n) {
  return n.callWS({
    type: "config/entity_registry/list"
  });
}
async function Ht(n) {
  return n.callWS({
    type: "config/device_registry/list"
  });
}
function Ut(n) {
  return n.split(".")[0] ?? "";
}
function Wt(n, t, i) {
  const a = new Map(i.map((l) => [l.id, l.area_id])), o = new Map(t.map((l) => [l.entity_id, l])), r = [];
  for (const [l, s] of Object.entries(n.states)) {
    const p = o.get(l);
    if (p?.disabled_by || p?.hidden_by) continue;
    const d = p?.area_id ?? (p?.device_id ? a.get(p.device_id) ?? null : null), h = p?.name ?? s.attributes.friendly_name ?? p?.original_name ?? l;
    r.push({
      entity_id: l,
      domain: Ut(l),
      area_id: d,
      friendly_name: h,
      state: s
    });
  }
  return r;
}
function Bt(n) {
  const t = /* @__PURE__ */ new Map();
  for (const i of n) {
    const a = t.get(i.area_id) ?? [];
    a.push(i), t.set(i.area_id, a);
  }
  return t;
}
function Je(n) {
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
function Kn(n) {
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
}, Qn = ["terracotta", "miel", "sauge", "cosy"], Zt = ["light", "dark"];
function B() {
  try {
    return typeof localStorage < "u" ? localStorage : null;
  } catch {
    return null;
  }
}
function Yt() {
  const n = B();
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
function Fe(n) {
  const t = B();
  t && t.setItem(R.favorites, JSON.stringify(n));
}
function Ge(n) {
  const t = B();
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
function Xe(n, t) {
  const i = B();
  i && i.setItem(n, JSON.stringify(t));
}
const qt = () => Ge(R.exposed), wn = (n) => Xe(R.exposed, n), Jt = () => Ge(R.excludedUsers), kn = (n) => Xe(R.excludedUsers, n), Gt = () => Ge(R.roomsOrder), Xt = (n) => Xe(R.roomsOrder, n);
function Kt() {
  const n = B();
  if (!n) return {};
  const t = n.getItem(R.roomEntitiesOrder);
  if (!t) return {};
  try {
    const i = JSON.parse(t);
    if (typeof i != "object" || i === null) return {};
    const a = {};
    for (const [o, r] of Object.entries(i))
      Array.isArray(r) && (a[o] = r.filter((l) => typeof l == "string"));
    return a;
  } catch {
    return {};
  }
}
function Qt(n) {
  const t = B();
  t && t.setItem(R.roomEntitiesOrder, JSON.stringify(n));
}
function Mn() {
  return B()?.getItem(R.onboarded) === "1";
}
function In(n) {
  const t = B();
  t && t.setItem(R.onboarded, "1");
}
function et() {
  const n = B(), t = n?.getItem(R.theme), i = n?.getItem(R.mode);
  return {
    theme: Qn.includes(t) ? t : "terracotta",
    mode: Zt.includes(i) ? i : "light"
  };
}
function zn(n, t) {
  const i = B();
  i && (i.setItem(R.theme, n), i.setItem(R.mode, t));
}
function ei() {
  return B()?.getItem(R.lastNotificationRead) ?? null;
}
function ni(n) {
  B()?.setItem(R.lastNotificationRead, n);
}
const ti = 6, ii = 20;
function ai(n, t) {
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
function nt(n, t, i) {
  if (t.length === 0) return n;
  const a = new Map(n.map((l) => [i(l), l])), o = /* @__PURE__ */ new Set(), r = [];
  for (const l of t) {
    const s = a.get(l);
    s && !o.has(l) && (r.push(s), o.add(l));
  }
  for (const l of n) {
    const s = i(l);
    o.has(s) || (r.push(l), o.add(s));
  }
  return r;
}
function Ve(n, t, i) {
  const [a, o] = k({ draggingId: null, overId: null }), r = ne(null), l = ne(null), s = ne(n);
  s.current = n;
  const p = ne(i);
  p.current = i;
  const d = ne(t);
  d.current = t;
  const h = xn((g, f) => {
    const x = l.current;
    if (!x) return null;
    const b = x.querySelectorAll("[data-drag-id]");
    for (const u of Array.from(b)) {
      const _ = u.getBoundingClientRect();
      if (g >= _.left && g <= _.right && f >= _.top && f <= _.bottom)
        return u.getAttribute("data-drag-id");
    }
    return null;
  }, []);
  Q(() => {
    const g = (b) => {
      const u = r.current;
      if (!u || u.pointerType !== "touch") return;
      if (u.entered) {
        b.preventDefault();
        return;
      }
      const _ = b.touches[0];
      if (!_) return;
      const m = _.clientX - u.x, w = _.clientY - u.y;
      Math.hypot(m, w) <= ii ? b.preventDefault() : (u.timerId && clearTimeout(u.timerId), r.current = null);
    }, f = (b) => {
      const u = r.current;
      if (!u) return;
      if (u.pointerType === "touch") {
        if (!u.entered)
          return;
      } else if (!u.entered) {
        const m = b.clientX - u.x, w = b.clientY - u.y;
        if (Math.hypot(m, w) < ti) return;
        u.entered = !0, o({ draggingId: u.id, overId: null });
      }
      const _ = h(b.clientX, b.clientY);
      o((m) => m.overId === _ ? m : { ...m, overId: _ });
    }, x = () => {
      const b = r.current;
      if (b?.timerId && clearTimeout(b.timerId), r.current = null, !b || !b.entered) return;
      const u = (_) => {
        _.preventDefault(), _.stopPropagation();
      };
      window.addEventListener("click", u, { capture: !0, once: !0 }), o((_) => {
        const { draggingId: m, overId: w } = _;
        if (m && w && m !== w) {
          const z = s.current, E = d.current, L = z.findIndex((j) => E(j) === m), T = z.findIndex((j) => E(j) === w);
          if (L >= 0 && T >= 0) {
            const j = [...z], [N] = j.splice(L, 1);
            j.splice(T, 0, N), p.current(j);
          }
        }
        return { draggingId: null, overId: null };
      });
    };
    return document.addEventListener("pointermove", f), document.addEventListener("pointerup", x), document.addEventListener("pointercancel", x), document.addEventListener("touchmove", g, { passive: !1 }), () => {
      document.removeEventListener("pointermove", f), document.removeEventListener("pointerup", x), document.removeEventListener("pointercancel", x), document.removeEventListener("touchmove", g);
    };
  }, [h]);
  const c = xn(
    (g) => {
      const f = a.draggingId === g, x = a.draggingId !== null && a.draggingId !== g && a.overId === g;
      return {
        "data-drag-id": g,
        "data-dragging": f ? "true" : void 0,
        "data-drag-over": x ? "true" : void 0,
        onPointerDown: (b) => {
          if (b.button !== void 0 && b.button !== 0) return;
          const u = b.currentTarget;
          if (!ai(b.target, u))
            if (b.pointerType === "touch") {
              const _ = window.setTimeout(() => {
                const m = r.current;
                m && m.id === g && !m.entered && (m.entered = !0, o({ draggingId: g, overId: null }), "vibrate" in navigator && navigator.vibrate(50));
              }, 1500);
              r.current = { id: g, x: b.clientX, y: b.clientY, entered: !1, pointerType: "touch", timerId: _ };
            } else
              r.current = { id: g, x: b.clientX, y: b.clientY, entered: !1, pointerType: b.pointerType };
        }
      };
    },
    [a.draggingId, a.overId]
  );
  return {
    containerRef: l,
    itemPropsFor: c,
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
), _e = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18h6" }),
  /* @__PURE__ */ e("path", { d: "M10 21h4" }),
  /* @__PURE__ */ e("path", { d: "M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 1v1M3 5l.5.5M21 5l-.5.5M19 11h1M4 11h1", "stroke-width": "1.2" })
] }), tt = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M6 9a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z" }),
  /* @__PURE__ */ e("path", { d: "M10 19a2 2 0 0 0 4 0" })
] }), ri = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" })
] }), oi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m9 6 6 6-6 6" }) }), Ke = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "3", width: "16", height: "2", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M5 7h14M5 11h14M5 15h14" }),
  /* @__PURE__ */ e("path", { d: "M12 19v2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "22", r: "1" })
] }), Qe = (n) => /* @__PURE__ */ e(v, { ...n, children: [
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
] }), li = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }),
  /* @__PURE__ */ e("path", { d: "M9 14a3 3 0 0 0 3 3", "stroke-width": "1.2" })
] }), ce = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "7", "stroke-dasharray": "2 3" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2" })
] }), G = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 18a1 1 0 1 0-1-1" })
] }), si = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" }) }), ci = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "4", y: "4", width: "16", height: "16", rx: "1" }),
  /* @__PURE__ */ e("path", { d: "M12 4v16M4 12h16" })
] }), he = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }) }), en = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" })
] }), di = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "5", y: "11", width: "14", height: "10", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 11V7a4 4 0 0 1 7.5-2" })
] }), nn = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "8" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M12 5v3" })
] }), pi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 3c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 0 2-1 3-2 3 1-3-1-5-3-7Z" }) }), ui = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 2v20M4 6l16 12M4 18 20 6" }),
  /* @__PURE__ */ e("path", { d: "M9 4l3 2 3-2M9 20l3-2 3 2", "stroke-width": "1.2" })
] }), hi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14" }) }), _i = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }) }), ie = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 5v14l12-7Z" }) }), it = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m3 12 9-8 9 8" }),
  /* @__PURE__ */ e("path", { d: "M5 10v10h14V10" })
] }), at = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "8", width: "16", height: "8", rx: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M21 11v2" })
] }), ge = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m13 2-9 12h7l-2 8 9-12h-7l2-8Z" }) }), tn = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" })
] }), rt = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M7 18a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 9.5 4.5 4.5 0 0 1 17 18H7Z" }) }), ot = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "3" }),
  /* @__PURE__ */ e("path", { d: "M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 3.5l-1 1" }),
  /* @__PURE__ */ e("path", { d: "M11 18a3.5 3.5 0 0 1-.7-6.93A5 5 0 0 1 19.6 11.5 3.8 3.8 0 0 1 19 18H11Z" })
] }), An = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M9 18v2M13 18v3M17 18v2" })
] }), Pe = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "M8 19h.01M12 19h.01M16 19h.01M10 22h.01M14 22h.01" })
] }), Ne = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 15a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 6.5 4.5 4.5 0 0 1 17 15H7Z" }),
  /* @__PURE__ */ e("path", { d: "m12 17-2 4h3l-1 3" })
] }), fi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 13a4 4 0 0 1-.8-7.92A6 6 0 0 1 17.6 4.5 4.5 4.5 0 0 1 17 13H7Z" }),
  /* @__PURE__ */ e("path", { d: "M5 17h14M3 21h18" })
] }), En = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 8h12a3 3 0 1 0-3-3" }),
  /* @__PURE__ */ e("path", { d: "M3 13h17a3 3 0 1 1-3 3" }),
  /* @__PURE__ */ e("path", { d: "M3 18h9" })
] }), mi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 16a8 8 0 1 1 16 0" }),
  /* @__PURE__ */ e("path", { d: "m12 16 4-5" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "16", r: "0.8", fill: "currentColor" })
] }), gi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M3 12h4l3-8 4 16 3-8h4" }) }), an = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M9 18V5l11-2v13" }),
  /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
  /* @__PURE__ */ e("circle", { cx: "17", cy: "16", r: "3" })
] }), bi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "6", y: "5", width: "4", height: "14", rx: "1" }),
  /* @__PURE__ */ e("rect", { x: "14", y: "5", width: "4", height: "14", rx: "1" })
] }), vi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M19 5 9 12l10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M5 5v14" })
] }), xi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 5l10 7-10 7V5Z" }),
  /* @__PURE__ */ e("path", { d: "M19 5v14" })
] }), yi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 9v6h4l5 4V5L8 9H4Z" }),
  /* @__PURE__ */ e("path", { d: "M16 8a5 5 0 0 1 0 8" })
] }), wi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), ki = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "11", r: "2" }),
  /* @__PURE__ */ e("path", { d: "M8 17a4 4 0 0 1 8 0" })
] }), Mi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "M14 9a3 3 0 1 0 0 6 3 3 0 0 1-3-3 3 3 0 0 1 3-3Z" })
] }), Ce = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "3.5" })
] }), rn = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.5" }),
  /* @__PURE__ */ e("path", { d: "M12 10.5c0-3 1-6 4-6 2 0 3 1.5 3 3 0 2-1.5 3-3 3" }),
  /* @__PURE__ */ e("path", { d: "M13.5 12c3 0 6 1 6 4 0 2-1.5 3-3 3-2 0-3-1.5-3-3" }),
  /* @__PURE__ */ e("path", { d: "M12 13.5c0 3-1 6-4 6-2 0-3-1.5-3-3 0-2 1.5-3 3-3" }),
  /* @__PURE__ */ e("path", { d: "M10.5 12c-3 0-6-1-6-4 0-2 1.5-3 3-3 2 0 3 1.5 3 3" })
] }), on = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3v4M12 17v4M3 12h4M17 12h4" }),
  /* @__PURE__ */ e("path", { d: "m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "2" })
] }), Dn = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M5 12h14M13 6l6 6-6 6" }) }), Ii = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M19 12H5M11 6l-6 6 6 6" }) }), zi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m5 12 5 5 9-11" }) }), Si = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), Ci = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
  /* @__PURE__ */ e("path", { d: "m20 20-3.5-3.5" })
] }), ae = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M6 6l12 12M18 6 6 18" }) }), Ai = (n) => /* @__PURE__ */ e(v, { ...n, fill: "currentColor", children: /* @__PURE__ */ e("path", { d: "m12 3 2.7 5.7 6.3.9-4.5 4.4 1 6.3-5.5-2.9-5.5 2.9 1-6.3L3 9.6l6.3-.9L12 3Z" }) }), lt = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "M20 14a8 8 0 1 1-9.5-9.5A6 6 0 0 0 20 14Z" }) }), Ei = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), Di = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M4 21a8 8 0 0 1 16 0" })
] }), Ti = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 16c2-3 6-5 9-5s7 2 9 5" }),
  /* @__PURE__ */ e("path", { d: "M5 16c1.5-2.5 4-4 7-4s5.5 1.5 7 4" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "13", r: "1.5", fill: "currentColor" })
] }), Pi = (n) => /* @__PURE__ */ e(v, { ...n, children: /* @__PURE__ */ e("path", { d: "m15 6-6 6 6 6" }) }), Ni = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "6", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1.2", fill: "currentColor" }),
  /* @__PURE__ */ e("circle", { cx: "18", cy: "12", r: "1.2", fill: "currentColor" })
] }), Oi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M4 14a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4v-4Z" }),
  /* @__PURE__ */ e("path", { d: "M6 12V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" }),
  /* @__PURE__ */ e("path", { d: "M5 18v2M19 18v2" })
] }), $i = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 17v-5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v5" }),
  /* @__PURE__ */ e("path", { d: "M3 14h18" }),
  /* @__PURE__ */ e("path", { d: "M3 17v3M21 17v3" }),
  /* @__PURE__ */ e("circle", { cx: "8", cy: "11", r: "1.5" })
] }), Li = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M7 3v6a2 2 0 0 0 2 2h0v10" }),
  /* @__PURE__ */ e("path", { d: "M11 3v6" }),
  /* @__PURE__ */ e("path", { d: "M16 3c-1 2-1 4 0 6 1 1 1 3 0 4v8" })
] }), ji = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" }),
  /* @__PURE__ */ e("path", { d: "M7 12V6a2 2 0 0 1 4 0" }),
  /* @__PURE__ */ e("path", { d: "M3 19v2M21 19v2" })
] }), Ri = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" }),
  /* @__PURE__ */ e("path", { d: "M3 21h18" }),
  /* @__PURE__ */ e("circle", { cx: "15", cy: "13", r: "0.6", fill: "currentColor" })
] }), st = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
  /* @__PURE__ */ e("path", { d: "M12 9v4" }),
  /* @__PURE__ */ e("path", { d: "M12 17h.01" })
] }), Fi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }),
  /* @__PURE__ */ e("path", { d: "M12 12v8a2 2 0 0 0 4 0" }),
  /* @__PURE__ */ e("path", { d: "M12 2v1" })
] }), Vi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "4" }),
  /* @__PURE__ */ e("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
] }), Hi = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "M12 16v-4" }),
  /* @__PURE__ */ e("path", { d: "M12 8h.01" })
] }), Ui = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
  /* @__PURE__ */ e("path", { d: "m9 12 2 2 4-4" })
] }), ct = (n) => /* @__PURE__ */ e(v, { ...n, children: [
  /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
] });
function Wi(n) {
  const t = n.attributes.brightness;
  return typeof t != "number" ? n.state === "on" ? 100 : 0 : Math.round(t / 255 * 100);
}
function dt({
  hass: n,
  entity: t,
  hero: i = !1,
  breatheVariant: a = 1,
  roomLabel: o
}) {
  const r = t.state.state === "on", l = t.state.state === "unavailable", [s, p] = k(!1), [d, h] = k(null), c = d ?? Wi(t.state), g = async () => {
    if (!l) {
      p(!0);
      try {
        await n.callService("light", "toggle", { entity_id: t.entity_id });
      } finally {
        p(!1);
      }
    }
  }, f = async (u) => {
    h(u);
    try {
      await n.callService("light", "turn_on", {
        entity_id: t.entity_id,
        brightness_pct: u
      });
    } finally {
      setTimeout(() => h(null), 50);
    }
  }, b = [
    "n-card",
    i ? r ? "n-card--accent" : "n-card--accent-muted" : "n-card--default",
    r ? `breathe-${a}` : "",
    s ? "is-pending" : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: b, "data-hero": i ? "true" : "false", "data-on": r ? "true" : "false", children: [
    r && /* @__PURE__ */ e("div", { class: "n-light__glow glow-pulse-1", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(_e, { size: 20 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": r,
          disabled: l || s,
          onClick: g,
          children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
        }
      )
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: o }),
    /* @__PURE__ */ e("div", { class: `n-title ${i ? "n-title--xl" : ""}`, children: t.friendly_name }),
    r && !l && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
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
          onInput: (u) => f(Number(u.target.value))
        }
      )
    ] }),
    !r && !l && /* @__PURE__ */ e("div", { class: "n-muted", children: "Éteinte" }),
    l && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function Bi(n) {
  const t = n.attributes.current_position;
  return typeof t == "number" ? t : n.state === "open" ? 100 : n.state === "closed" ? 0 : 50;
}
function pt({ hass: n, entity: t, roomLabel: i }) {
  const a = t.state.state === "unavailable", [o, r] = k(null), l = o ?? Bi(t.state), s = l > 0, p = async (d) => {
    r(d);
    try {
      await n.callService("cover", "set_cover_position", {
        entity_id: t.entity_id,
        position: d
      });
    } finally {
      setTimeout(() => r(null), 50);
    }
  };
  return /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": s ? "true" : "false", children: /* @__PURE__ */ e("div", { class: "n-card", "data-on": s ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ke, { size: 20 }) }),
      /* @__PURE__ */ e("div", { class: "n-blinds", children: [0, 1, 2, 3, 4, 5].map((d) => /* @__PURE__ */ e(
        "span",
        {
          class: "n-blinds__bar",
          "data-active": d / 6 * 100 < l ? "true" : "false"
        },
        d
      )) })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !a && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Ouverture" }),
        /* @__PURE__ */ e("span", { class: "n-value", children: [
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
          onInput: (d) => p(Number(d.target.value))
        }
      ),
      /* @__PURE__ */ e("div", { style: { marginTop: "12px", display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          style: { fontSize: "12px", padding: "6px 12px" },
          onClick: () => p(l !== 0 ? 0 : 100),
          children: l !== 0 ? "Fermer" : "Ouvrir"
        }
      ) })
    ] }),
    a && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] }) });
}
function ut({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: a = 2
}) {
  const o = t.state.state === "on", r = t.state.state === "unavailable", [l, s] = k(!1), p = t.state.attributes.current_power_w, d = async () => {
    if (!r) {
      s(!0);
      try {
        await n.callService("switch", "toggle", { entity_id: t.entity_id });
      } finally {
        s(!1);
      }
    }
  }, h = ["n-card", o ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: h, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Qe, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-toggle",
          role: "switch",
          "aria-checked": o,
          disabled: r || l,
          onClick: d,
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
const Zi = {
  door: Sn,
  garage_door: Sn,
  window: ci,
  smoke: Cn,
  gas: Cn,
  moisture: li,
  motion: ce,
  occupancy: ce,
  presence: ce
}, Yi = {
  door: { on: "Ouverte", off: "Fermée" },
  garage_door: { on: "Ouverte", off: "Fermée" },
  window: { on: "Ouverte", off: "Fermée" },
  smoke: { on: "Fumée détectée", off: "RAS" },
  gas: { on: "Gaz détecté", off: "RAS" },
  moisture: { on: "Eau détectée", off: "Sec" },
  motion: { on: "Mouvement", off: "Calme" },
  occupancy: { on: "Présence", off: "Vide" },
  presence: { on: "Présence", off: "Vide" }
}, qi = /* @__PURE__ */ new Set(["smoke", "gas", "moisture"]), Ji = /* @__PURE__ */ new Set(["door", "garage_door", "window"]);
function ht({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", a = n.state.state === "on", o = n.state.state === "unavailable", r = Zi[i] ?? he, l = Yi[i] ?? { on: "Actif", off: "Inactif" }, s = qi.has(i), p = Ji.has(i), h = /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": o ? "indisponible" : a ? "on" : "off", "data-alert": s ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(r, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-dot", "aria-hidden": "true" })
    ] }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: o ? "Indisponible" : a ? l.on : l.off })
  ] });
  return p ? /* @__PURE__ */ e("div", { class: "n-cover-glow-wrap", "data-active": a ? "true" : "false", children: h }) : h;
}
const Gi = {
  off: "Éteint",
  heat: "Chauffage",
  cool: "Climatisation",
  heat_cool: "Auto",
  auto: "Auto",
  dry: "Déshu.",
  fan_only: "Ventilation"
}, Xi = {
  heat: pi,
  cool: ui,
  heat_cool: G,
  auto: G,
  dry: G,
  fan_only: G
};
function _t({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: a = 2
}) {
  const o = t.state.state === "unavailable", r = t.state.state, l = r !== "off" && !o, s = t.state.attributes.current_temperature, p = t.state.attributes.temperature, d = t.state.attributes.min_temp ?? 7, h = t.state.attributes.max_temp ?? 35, c = t.state.attributes.target_temp_step ?? 0.5, [g, f] = k(null), x = g ?? p ?? s ?? 20, b = async (m) => {
    const w = Math.min(h, Math.max(d, m));
    f(w);
    try {
      await n.callService("climate", "set_temperature", {
        entity_id: t.entity_id,
        temperature: w
      });
    } finally {
      setTimeout(() => f(null), 50);
    }
  }, u = Xi[r] ?? G, _ = ["n-card", l ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: _, "data-on": l ? "true" : "false", children: [
    l && /* @__PURE__ */ e("div", { class: "n-light__glow", "aria-hidden": "true" }),
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(u, { size: 18 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: Gi[r] ?? r })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !o && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-climate__temp", children: [
        /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: [
          Math.round(x * 10) / 10,
          /* @__PURE__ */ e("span", { class: "n-value__unit", children: "°C" })
        ] }),
        typeof s == "number" && /* @__PURE__ */ e("span", { class: "n-muted", children: [
          "Actuelle ",
          Math.round(s * 10) / 10,
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
            onClick: () => b(x - c),
            disabled: x - c < d,
            children: /* @__PURE__ */ e(hi, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-stepper",
            "aria-label": "Augmenter",
            onClick: () => b(x + c),
            disabled: x + c > h,
            children: /* @__PURE__ */ e(_i, { size: 16 })
          }
        )
      ] })
    ] }),
    o && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function ft({ hass: n, entity: t, roomLabel: i }) {
  const a = t.state.state, o = a === "unavailable", r = a === "locked", l = a === "jammed", s = a === "locking" || a === "unlocking", [p, d] = k(!1), h = async () => {
    if (!(o || s || p)) {
      d(!0);
      try {
        await n.callService("lock", r ? "unlock" : "lock", {
          entity_id: t.entity_id
        });
      } finally {
        d(!1);
      }
    }
  }, c = o ? "Indisponible" : l ? "Bloquée" : s ? a === "locking" ? "Verrouillage…" : "Déverrouillage…" : r ? "Verrouillée" : "Déverrouillée";
  return /* @__PURE__ */ e(
    "div",
    {
      class: "n-card",
      "data-on": r ? "true" : "false",
      "data-alert": l ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(r ? en : di, { size: 20 }) }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-toggle",
              role: "switch",
              "aria-checked": r,
              disabled: o || s || p,
              onClick: h,
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
const Ki = {
  cleaning: "Nettoyage",
  docked: "À la base",
  returning: "Retour base",
  idle: "Au repos",
  paused: "En pause",
  error: "Erreur"
};
function mt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: a = 3
}) {
  const o = t.state.state, r = o === "unavailable", l = o === "cleaning" || o === "returning", s = o === "error", p = t.state.attributes.battery_level, [d, h] = k(!1), c = async (f) => {
    if (!(r || d)) {
      h(!0);
      try {
        await n.callService("vacuum", f, { entity_id: t.entity_id });
      } finally {
        h(!1);
      }
    }
  }, g = ["n-card", l ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      class: g,
      "data-on": l ? "true" : "false",
      "data-alert": s ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(nn, { size: 20 }) }),
          typeof p == "number" && /* @__PURE__ */ e("span", { class: "n-battery", children: [
            /* @__PURE__ */ e(at, { size: 14 }),
            /* @__PURE__ */ e("span", { children: [
              Math.round(p),
              "%"
            ] })
          ] })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        /* @__PURE__ */ e("div", { class: "n-binary-state", children: Ki[o] ?? o }),
        !r && /* @__PURE__ */ e("div", { class: "n-vacuum__actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn",
              disabled: d || l,
              onClick: () => c("start"),
              children: [
                /* @__PURE__ */ e(ie, { size: 14 }),
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
                /* @__PURE__ */ e(it, { size: 14 }),
                /* @__PURE__ */ e("span", { children: "Base" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const Qi = {
  temperature: G,
  humidity: si,
  power: ge,
  energy: ge,
  current: ge,
  voltage: ge,
  illuminance: tn,
  pressure: mi,
  battery: at
};
function ea(n, t, i) {
  if (n === "unavailable" || n === "unknown") return { value: "—", unit: "" };
  if (i === "temperature") return { value: n, unit: t ?? "" };
  const a = Number(n);
  return Number.isFinite(a) ? { value: Math.abs(a) >= 100 ? Math.round(a).toString() : (Math.round(a * 10) / 10).toString(), unit: t ?? "" } : { value: n, unit: t ?? "" };
}
function gt({ entity: n, roomLabel: t }) {
  const i = n.state.attributes.device_class ?? "", a = n.state.attributes.unit_of_measurement, o = Qi[i] ?? gi, r = n.state.state === "unavailable", { value: l, unit: s } = ea(n.state.state, a, i);
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact", "data-status": r ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(o, { size: 18 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-sensor__readout", children: [
      /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: l }),
      s && /* @__PURE__ */ e("span", { class: "n-value__unit", children: s })
    ] })
  ] });
}
const na = {
  playing: "En lecture",
  paused: "En pause",
  idle: "Au repos",
  off: "Éteint",
  on: "Allumé",
  standby: "Veille",
  buffering: "Mise en mémoire"
};
function bt({
  hass: n,
  entity: t,
  roomLabel: i,
  breatheVariant: a = 4
}) {
  const o = t.state.state, r = o === "unavailable", l = o === "playing", s = o === "off" || o === "standby", p = t.state.attributes.media_title, d = t.state.attributes.media_artist, h = t.state.attributes.app_name, c = t.state.attributes.volume_level, [g, f] = k(null), x = g ?? c ?? 0, b = async (m, w = {}) => {
    r || await n.callService("media_player", m, {
      entity_id: t.entity_id,
      ...w
    });
  }, u = async (m) => {
    f(m);
    try {
      await b("volume_set", { volume_level: m });
    } finally {
      setTimeout(() => f(null), 50);
    }
  }, _ = ["n-card", l ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: _, "data-on": l ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(an, { size: 20 }) }),
      /* @__PURE__ */ e("span", { class: "n-eyebrow", children: na[o] ?? o })
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
    !s && !r && (p || d || h) && /* @__PURE__ */ e("div", { class: "n-media__track", children: [
      p && /* @__PURE__ */ e("div", { class: "n-media__title", children: p }),
      d && /* @__PURE__ */ e("div", { class: "n-muted", children: d }),
      h && /* @__PURE__ */ e("div", { class: "n-muted", style: { fontSize: "0.75rem", marginTop: p || d ? "4px" : "0" }, children: h })
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
            children: /* @__PURE__ */ e(vi, { size: 16 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn n-icon-btn--primary",
            "aria-label": l ? "Pause" : "Lecture",
            onClick: () => b("media_play_pause"),
            children: l ? /* @__PURE__ */ e(bi, { size: 18 }) : /* @__PURE__ */ e(ie, { size: 18 })
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-icon-btn",
            "aria-label": "Suivant",
            onClick: () => b("media_next_track"),
            children: /* @__PURE__ */ e(xi, { size: 16 })
          }
        )
      ] }),
      typeof c == "number" && /* @__PURE__ */ e("div", { class: "n-media__volume", children: [
        /* @__PURE__ */ e(yi, { size: 14 }),
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
            onInput: (m) => u(Number(m.target.value))
          }
        )
      ] })
    ] }),
    r && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
const ta = {
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
}, ia = [
  { id: "armed_home", service: "alarm_arm_home", label: "Présence", Icon: wi },
  { id: "armed_away", service: "alarm_arm_away", label: "Absence", Icon: ki },
  { id: "armed_night", service: "alarm_arm_night", label: "Nuit", Icon: Mi }
];
function vt({ hass: n, entity: t, roomLabel: i }) {
  const a = t.state.state, o = a === "unavailable", r = a === "triggered", l = a.startsWith("armed_"), s = a === "pending" || a === "arming" || a === "disarming", [p, d] = k(!1), h = async (c) => {
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
      "data-on": l ? "true" : "false",
      "data-alert": r ? "true" : "false",
      children: [
        /* @__PURE__ */ e("div", { class: "n-card__head", children: [
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(he, { size: 20 }) }),
          /* @__PURE__ */ e("span", { class: "n-eyebrow", children: ta[a] ?? a })
        ] }),
        i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
        /* @__PURE__ */ e("div", { class: "n-title", children: t.friendly_name }),
        !o && /* @__PURE__ */ e("div", { class: "n-alarm__modes", children: [
          ia.map(({ id: c, service: g, label: f, Icon: x }) => /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn",
              "data-active": a === c ? "true" : "false",
              disabled: p || s,
              onClick: () => h(g),
              children: [
                /* @__PURE__ */ e(x, { size: 14 }),
                /* @__PURE__ */ e("span", { children: f })
              ]
            },
            c
          )),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-mode-btn n-mode-btn--disarm",
              disabled: p || s || a === "disarmed",
              onClick: () => h("alarm_disarm"),
              children: /* @__PURE__ */ e("span", { children: "Désarmer" })
            }
          )
        ] })
      ]
    }
  );
}
const aa = {
  recording: "Enregistre",
  streaming: "En direct",
  idle: "En veille",
  unavailable: "Indisponible"
};
function ra(n, t) {
  const i = n.state.attributes.entity_picture;
  if (!i) return null;
  if (i.startsWith("http")) return i;
  const a = t.hassUrl?.("");
  return a ? a.replace(/\/$/, "") + i : i;
}
function xt({ hass: n, entity: t, roomLabel: i }) {
  const a = t.state.state, o = a === "unavailable", r = a === "recording" || a === "streaming", [l, s] = k(0), [p, d] = k(!1), h = ra(t, n), c = h ? `${h}${h.includes("?") ? "&" : "?"}t=${l}` : null;
  return Q(() => {
    d(!1);
  }, [h]), /* @__PURE__ */ e("div", { class: "n-card n-card--camera", "data-on": r ? "true" : "false", children: [
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
        /* @__PURE__ */ e(Ce, { size: 28 }),
        p && /* @__PURE__ */ e("span", { style: { fontSize: "10px", marginTop: "4px", opacity: 0.7 }, children: "Erreur de flux" })
      ] }),
      r && /* @__PURE__ */ e("span", { class: "n-camera__live", children: "● LIVE" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-card__head n-card__head--inline", children: [
      /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: /* @__PURE__ */ e(Ce, { size: 18 }) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: "n-pill-btn",
          disabled: o || !c,
          onClick: () => {
            s(Date.now()), d(!1);
          },
          children: "Rafraîchir"
        }
      )
    ] }),
    i && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: i }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: t.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-binary-state", children: aa[a] ?? a })
  ] });
}
function yt({ hass: n, entity: t, roomLabel: i, breatheVariant: a = 2 }) {
  const o = t.state.state === "on", r = t.state.state === "unavailable", l = t.state.attributes.percentage, s = typeof l == "number", [p, d] = k(!1), [h, c] = k(null), g = h ?? (s ? l : o ? 100 : 0), f = async () => {
    if (!r) {
      d(!0);
      try {
        await n.callService("fan", "toggle", { entity_id: t.entity_id });
      } finally {
        d(!1);
      }
    }
  }, x = async (u) => {
    c(u);
    try {
      await n.callService("fan", "set_percentage", {
        entity_id: t.entity_id,
        percentage: u
      });
    } finally {
      setTimeout(() => c(null), 50);
    }
  }, b = ["n-card", o ? `breathe-${a}` : ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { class: b, "data-on": o ? "true" : "false", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: [
      /* @__PURE__ */ e("div", { class: `n-icon-bubble ${o ? "n-fan-spin" : ""}`, children: /* @__PURE__ */ e(rn, { size: 20 }) }),
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
    o && s && !r && /* @__PURE__ */ e("div", { class: "n-light__intensity", children: [
      /* @__PURE__ */ e("div", { class: "n-row-between", children: [
        /* @__PURE__ */ e("span", { class: "n-eyebrow", children: "Vitesse" }),
        /* @__PURE__ */ e("span", { class: "n-value", children: [
          g,
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
          value: g,
          style: { "--val": `${g}%` },
          onInput: (u) => x(Number(u.target.value))
        }
      )
    ] }),
    !o && !r && /* @__PURE__ */ e("div", { class: "n-muted", children: "Arrêté" }),
    r && /* @__PURE__ */ e("div", { class: "n-muted", children: "Indisponible" })
  ] });
}
function wt({ hass: n, entity: t, roomLabel: i }) {
  const a = t.domain === "scene", o = t.state.state === "unavailable", [r, l] = k(!1), [s, p] = k(!1), d = async () => {
    if (!(o || r)) {
      l(!0);
      try {
        await n.callService(a ? "scene" : "script", "turn_on", {
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
          /* @__PURE__ */ e("div", { class: "n-icon-bubble", children: a ? /* @__PURE__ */ e(on, { size: 18 }) : /* @__PURE__ */ e(ie, { size: 16 }) }),
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
            onClick: d,
            children: [
              /* @__PURE__ */ e(ie, { size: 14 }),
              /* @__PURE__ */ e("span", { children: a ? "Activer" : "Lancer" })
            ]
          }
        )
      ]
    }
  );
}
const oa = {
  "clear-night": { label: "Nuit claire", Icon: lt },
  cloudy: { label: "Nuageux", Icon: rt },
  exceptional: { label: "Conditions extrêmes", Icon: Ne },
  fog: { label: "Brouillard", Icon: fi },
  hail: { label: "Grêle", Icon: Pe },
  lightning: { label: "Orage", Icon: Ne },
  "lightning-rainy": { label: "Orage pluvieux", Icon: Ne },
  partlycloudy: { label: "Éclaircies", Icon: ot },
  pouring: { label: "Pluie battante", Icon: An },
  rainy: { label: "Pluvieux", Icon: An },
  snowy: { label: "Neigeux", Icon: Pe },
  "snowy-rainy": { label: "Neige et pluie", Icon: Pe },
  sunny: { label: "Ensoleillé", Icon: tn },
  windy: { label: "Venteux", Icon: En },
  "windy-variant": { label: "Venteux", Icon: En }
};
function de(n) {
  return oa[n] ?? { label: n || "—", Icon: rt };
}
function kt(n, t) {
  if (n == null || n === "") return "—";
  const i = Number(n);
  return Number.isFinite(i) ? `${n}${t}` : "—";
}
function Mt({ entity: n, roomLabel: t }) {
  const i = n.state.state === "unavailable" || n.state.state === "unknown", { label: a, Icon: o } = de(n.state.state), r = n.state.attributes.temperature_unit ?? "°", l = kt(n.state.attributes.temperature, r), s = n.state.attributes.humidity;
  return /* @__PURE__ */ e("div", { class: "n-card n-card--compact n-weather", "data-status": i ? "indisponible" : "off", children: [
    /* @__PURE__ */ e("div", { class: "n-card__head", children: /* @__PURE__ */ e("div", { class: "n-icon-bubble n-weather__icon", children: /* @__PURE__ */ e(o, { size: 20 }) }) }),
    t && /* @__PURE__ */ e("div", { class: "n-eyebrow", children: t }),
    /* @__PURE__ */ e("div", { class: "n-title n-title--sm", children: n.friendly_name }),
    /* @__PURE__ */ e("div", { class: "n-weather__readout", children: /* @__PURE__ */ e("span", { class: "n-value n-value--xl", children: l }) }),
    /* @__PURE__ */ e("div", { class: "n-weather__meta", children: [
      /* @__PURE__ */ e("span", { children: a }),
      typeof s == "number" && Number.isFinite(s) && /* @__PURE__ */ e(H, { children: [
        /* @__PURE__ */ e("span", { class: "n-weather__sep", children: "•" }),
        /* @__PURE__ */ e("span", { children: [
          Math.round(s),
          "%"
        ] })
      ] })
    ] })
  ] });
}
function Tn({ entity: n }) {
  if (n.state.state === "unavailable" || n.state.state === "unknown") return null;
  const { label: t, Icon: i } = de(n.state.state), a = n.state.attributes.temperature_unit ?? "°", o = kt(n.state.attributes.temperature, a);
  return /* @__PURE__ */ e("div", { class: "nido-weather-pill", title: n.friendly_name, children: [
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__icon", children: /* @__PURE__ */ e(i, { size: 18 }) }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__temp", children: o }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__sep" }),
    /* @__PURE__ */ e("span", { class: "nido-weather-pill__label", children: t })
  ] });
}
function la(n, t) {
  const i = t.split(".")[1] || "", a = Object.values(n.states).filter((s) => s.entity_id.startsWith("sensor."));
  let o, r, l;
  for (const s of a)
    s.entity_id.endsWith("_next_rain") && (s.entity_id.includes(i) || !o) && (o = s), s.entity_id.endsWith("_weather_alert") && (s.entity_id.includes(i) || !r) && (r = s), s.entity_id.endsWith("_uv") && (s.entity_id.includes(i) || !l) && (l = s);
  return { nextRain: o, weatherAlert: r, uvIndex: l };
}
function sa({ hass: n, weatherEntityId: t, onClose: i }) {
  const [a, o] = k([]), [r, l] = k([]), s = n.states[t], { nextRain: p, weatherAlert: d, uvIndex: h } = la(n, t);
  if (Q(() => {
    let _ = !1;
    async function m() {
      try {
        const w = async (L) => {
          try {
            const T = await n.callWS({
              type: "call_service",
              domain: "weather",
              service: "get_forecasts",
              service_data: { type: L },
              target: { entity_id: t },
              return_response: !0
            });
            return T?.response?.[t]?.forecast || T?.[t]?.forecast || [];
          } catch (T) {
            return console.warn(`Failed to fetch ${L} forecast:`, T), [];
          }
        }, [z, E] = await Promise.all([
          w("daily"),
          w("hourly")
        ]);
        if (_) return;
        o(z), l(E);
      } catch (w) {
        console.error("Failed to fetch weather forecasts", w);
      }
    }
    return s?.attributes.forecast ? o(s.attributes.forecast) : m(), () => {
      _ = !0;
    };
  }, [n, t]), !s) return null;
  const c = de(s.state), g = s.attributes.temperature_unit || "°C", f = d?.state, x = f === "Rouge" ? "#ff4d4f" : f === "Orange" ? "#faad14" : f === "Jaune" ? "#fadb14" : null, b = d?.attributes ? Object.entries(d.attributes).filter(([_, m]) => m === f && _ !== "friendly_name" && _ !== "icon").map(([_]) => _).join(", ") : "", u = b ? `Vigilance ${f} : ${b}` : `Vigilance ${f}`;
  return /* @__PURE__ */ e("div", { class: "nido-weather-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__backdrop", onClick: i }),
    /* @__PURE__ */ e("div", { class: "nido-weather-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-weather-panel__header", children: [
        /* @__PURE__ */ e("h2", { children: "Météo Détaillée" }),
        /* @__PURE__ */ e("button", { type: "button", class: "nido-weather-panel__close", onClick: i, "aria-label": "Fermer", children: /* @__PURE__ */ e(ae, { size: 20 }) })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-weather-panel__scroll", children: [
        /* @__PURE__ */ e("div", { class: "nido-wp-current", children: [
          /* @__PURE__ */ e(c.Icon, { size: 48 }),
          /* @__PURE__ */ e("div", { class: "nido-wp-current-info", children: [
            /* @__PURE__ */ e("span", { class: "nido-wp-temp", children: [
              s.attributes.temperature,
              g
            ] }),
            /* @__PURE__ */ e("span", { class: "nido-wp-desc", children: c.label })
          ] })
        ] }),
        x && /* @__PURE__ */ e("div", { class: "nido-wp-alert", style: { backgroundColor: `${x}22`, color: x, border: `1px solid ${x}55` }, children: [
          /* @__PURE__ */ e(st, { size: 20 }),
          /* @__PURE__ */ e("span", { children: u })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-wp-grid", children: [
          p && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Fi, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Pluie dans l'heure" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: p.state === "unknown" ? "Pas de pluie prévue" : new Date(p.state).getTime() > Date.now() ? `Prévue à ${new Date(p.state).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : "Pas de pluie prévue" })
          ] }),
          h && /* @__PURE__ */ e("div", { class: "nido-wp-card", children: [
            /* @__PURE__ */ e("div", { class: "nido-wp-card-head", children: [
              /* @__PURE__ */ e(Vi, { size: 18 }),
              /* @__PURE__ */ e("span", { children: "Index UV" })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-wp-card-val", children: h.state })
          ] })
        ] }),
        r.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prochaines heures" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-hourly", children: r.slice(0, 24).map((_, m) => {
            const w = de(_.condition), z = new Date(_.datetime);
            return /* @__PURE__ */ e("div", { class: "nido-wp-hour", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-time", children: [
                z.getHours(),
                "h"
              ] }),
              /* @__PURE__ */ e(w.Icon, { size: 24 }),
              /* @__PURE__ */ e("span", { class: "nido-wp-hour-temp", children: [
                _.temperature,
                "°"
              ] }),
              (_.precipitation ?? 0) > 0 && /* @__PURE__ */ e("span", { class: "nido-wp-hour-precip", children: [
                _.precipitation,
                "mm"
              ] })
            ] }, m);
          }) })
        ] }),
        a.length > 0 && /* @__PURE__ */ e("div", { class: "nido-wp-section", children: [
          /* @__PURE__ */ e("h3", { children: "Prévisions (5 jours)" }),
          /* @__PURE__ */ e("div", { class: "nido-wp-daily", children: a.slice(0, 5).map((_, m) => {
            const w = de(_.condition), z = new Date(_.datetime), E = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(z);
            return /* @__PURE__ */ e("div", { class: "nido-wp-day", children: [
              /* @__PURE__ */ e("span", { class: "nido-wp-day-name", children: m === 0 ? "Aujourd'hui" : E }),
              /* @__PURE__ */ e(w.Icon, { size: 24 }),
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
            ] }, m);
          }) })
        ] })
      ] })
    ] })
  ] });
}
function It(n) {
  const t = n.toLowerCase();
  return /(salon|séjour|sejour|living)/.test(t) ? Oi : /(chambre|bedroom)/.test(t) ? $i : /(cuisine|kitchen)/.test(t) ? Li : /(salle ?de ?bain|sdb|bath|douche|toilette)/.test(t) ? ji : /(entrée|entree|hall|couloir)/.test(t) ? Ri : it;
}
const ca = {
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
function da({ hass: n, notifications: t, onClose: i }) {
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
        } catch (l) {
          console.error("Toutes les méthodes de suppression ont échoué", l);
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
            children: /* @__PURE__ */ e(ae, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: t.length === 0 ? /* @__PURE__ */ e("div", { class: "nido-notification-empty", children: [
        /* @__PURE__ */ e("div", { class: "nido-notification-empty__icon", children: /* @__PURE__ */ e(tt, { size: 48 }) }),
        /* @__PURE__ */ e("p", { children: "Aucune notification pour le moment." })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-notification-list", children: [...t].reverse().map((o) => {
        const r = o.type === "warning" ? st : o.type === "success" ? Ui : Hi, l = `nido-notification-item--${o.type}`, p = new Date(o.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return /* @__PURE__ */ e("div", { class: `nido-notification-item ${l}`, children: [
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
              children: /* @__PURE__ */ e(ae, { size: 14 })
            }
          )
        ] }, o.id);
      }) }) })
    ] })
  ] });
}
function pa(n) {
  const t = n.state.attributes.brightness;
  return typeof t != "number" ? 100 : Math.round(t / 255 * 100);
}
function ua({ hass: n, entity: t, roomName: i }) {
  const [a, o] = k(!1), r = pa(t), l = async () => {
    o(!0);
    try {
      await n.callService("light", "turn_off", { entity_id: t.entity_id });
    } finally {
      o(!1);
    }
  };
  return /* @__PURE__ */ e("div", { class: `nido-lights-row ${a ? "is-pending" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "nido-lights-row__icon", children: /* @__PURE__ */ e(_e, { size: 18 }) }),
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
        onClick: l,
        children: /* @__PURE__ */ e("span", { class: "n-toggle__thumb" })
      }
    )
  ] });
}
function ha({ hass: n, lights: t, areas: i, onClose: a }) {
  const [o, r] = k(!1), l = new Map(i.map((p) => [p.area_id, p.name])), s = async () => {
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
            children: /* @__PURE__ */ e(ae, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: /* @__PURE__ */ e("div", { class: "nido-lights-list", children: t.map((p) => /* @__PURE__ */ e(
        ua,
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
const He = {
  "calendar.famille": "var(--accent)",
  "calendar.simon": "var(--positive)",
  "calendar.travail": "#4A8FE0"
}, _a = {
  "calendar.famille": "Famille",
  "calendar.simon": "Simon",
  "calendar.travail": "Travail"
}, ln = [
  // Famille
  { id: "f1", calendarId: "calendar.famille", title: "Conservatoire — Adèle", who: "Adèle", dayOffset: 1, time: "17:30", allDay: !1 },
  { id: "f2", calendarId: "calendar.famille", title: "Garde Achille — Mamie", who: "Achille", dayOffset: 2, time: void 0, allDay: !0 },
  { id: "f3", calendarId: "calendar.famille", title: "Réunion parent / prof", who: "Simon & Charlotte", dayOffset: 3, time: "18:00", allDay: !1 },
  { id: "f4", calendarId: "calendar.famille", title: "Déjeuner en famille", who: "Famille", dayOffset: 5, time: "12:30", allDay: !1 },
  // Simon
  { id: "s1", calendarId: "calendar.simon", title: "Sport — Salle de sport", who: "Simon", dayOffset: 1, time: "19:00", allDay: !1 },
  { id: "s2", calendarId: "calendar.simon", title: "Rendez-vous médecin", who: "Simon", dayOffset: 4, time: "10:00", allDay: !1 },
  // Travail
  { id: "t1", calendarId: "calendar.travail", title: "Stand-up équipe", who: "Simon", dayOffset: 1, time: "09:00", allDay: !1 },
  { id: "t2", calendarId: "calendar.travail", title: "Revue de sprint", who: "Simon", dayOffset: 3, time: "14:00", allDay: !1 },
  { id: "t3", calendarId: "calendar.travail", title: "Call client Nexus", who: "Simon", dayOffset: 5, time: "15:30", allDay: !1 }
];
function fa(n) {
  return ln.filter((t) => t.dayOffset === n).sort((t, i) => t.allDay && !i.allDay ? -1 : !t.allDay && i.allDay ? 1 : (t.time ?? "00:00").localeCompare(i.time ?? "00:00"));
}
function ma(n) {
  return ln.filter((t) => t.calendarId === n && t.dayOffset >= 0).sort((t, i) => t.dayOffset !== i.dayOffset ? t.dayOffset - i.dayOffset : (t.time ?? "00:00").localeCompare(i.time ?? "00:00"))[0];
}
const ga = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], ba = [
  ...new Set(
    ln.filter((n) => n.dayOffset >= 0 && n.dayOffset < 7).map((n) => n.calendarId)
  )
];
function va({ onClose: n }) {
  const t = /* @__PURE__ */ new Date(), i = Array.from({ length: 7 }, (a, o) => {
    const r = new Date(t);
    return r.setDate(t.getDate() + o), { date: r, offset: o, events: fa(o) };
  });
  return /* @__PURE__ */ e("div", { class: "nido-notification-panel", children: [
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__backdrop", onClick: n }),
    /* @__PURE__ */ e("div", { class: "nido-notification-panel__content", children: [
      /* @__PURE__ */ e("header", { class: "nido-notification-panel__header", children: [
        /* @__PURE__ */ e("div", { class: "nido-lights-panel__title", children: /* @__PURE__ */ e("span", { children: "Agenda" }) }),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "nido-notification-panel__close",
            onClick: n,
            "aria-label": "Fermer",
            children: /* @__PURE__ */ e(ae, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-cal-panel__legend", children: ba.map((a) => /* @__PURE__ */ e("div", { class: "nido-cal-panel__legend-item", children: [
        /* @__PURE__ */ e(
          "span",
          {
            class: "nido-cal-panel__legend-dot",
            style: { background: He[a] ?? "var(--ink-3)" }
          }
        ),
        /* @__PURE__ */ e("span", { children: _a[a] ?? a })
      ] }, a)) }),
      /* @__PURE__ */ e("div", { class: "nido-notification-panel__scroll", children: /* @__PURE__ */ e("div", { class: "nido-cal-panel__days", children: i.map(({ date: a, offset: o, events: r }) => /* @__PURE__ */ e(
        "div",
        {
          class: `nido-cal-panel__day ${o === 0 ? "is-today" : ""}`,
          children: [
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__badge", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-day", children: ga[a.getDay()] }),
              /* @__PURE__ */ e("span", { class: "nido-cal-panel__badge-num", children: a.getDate() })
            ] }),
            /* @__PURE__ */ e("div", { class: "nido-cal-panel__events", children: r.length === 0 ? /* @__PURE__ */ e("span", { class: "nido-cal-panel__empty", children: "—" }) : r.map((l) => {
              const s = He[l.calendarId] ?? "var(--ink-3)";
              return /* @__PURE__ */ e("div", { class: "nido-cal-panel__event", children: [
                /* @__PURE__ */ e(
                  "span",
                  {
                    class: "nido-cal-panel__event-dot",
                    style: { background: s }
                  }
                ),
                /* @__PURE__ */ e("div", { class: "nido-cal-panel__event-body", children: [
                  /* @__PURE__ */ e("span", { class: "nido-cal-panel__event-title", children: l.title }),
                  l.who && /* @__PURE__ */ e("span", { class: "nido-cal-panel__event-who", children: l.who })
                ] }),
                /* @__PURE__ */ e("span", { class: "nido-cal-panel__event-time", children: l.allDay ? "Journée" : l.time })
              ] }, l.id);
            }) })
          ]
        },
        o
      )) }) })
    ] })
  ] });
}
const xa = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
function ya(n) {
  if (n === 0) return "Aujourd'hui";
  if (n === 1) return "Demain";
  const t = /* @__PURE__ */ new Date();
  return t.setDate(t.getDate() + n), `${xa[t.getDay()]} ${t.getDate()}`;
}
function zt({ entity: n }) {
  const [t, i] = k(!1), a = ma(n.entity_id), o = He[n.entity_id] ?? "var(--ink-3)";
  return /* @__PURE__ */ e(H, { children: [
    /* @__PURE__ */ e(
      "div",
      {
        class: "n-card n-card--default nido-cal-widget",
        "data-on": "false",
        onClick: () => i(!0),
        children: [
          /* @__PURE__ */ e("div", { class: "n-card__head", children: [
            /* @__PURE__ */ e("div", { class: "n-icon-bubble nido-cal-widget__bubble", style: { "--cal-color": o }, children: /* @__PURE__ */ e(ct, { size: 18 }) }),
            /* @__PURE__ */ e("span", { class: "n-eyebrow", children: n.friendly_name })
          ] }),
          a ? /* @__PURE__ */ e(H, { children: [
            /* @__PURE__ */ e("div", { class: "nido-cal-widget__title", children: a.title }),
            /* @__PURE__ */ e("div", { class: "nido-cal-widget__when", children: [
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__day", children: ya(a.dayOffset) }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__sep", children: "·" }),
              /* @__PURE__ */ e("span", { class: "nido-cal-widget__time", children: a.allDay ? "Journée" : a.time })
            ] })
          ] }) : /* @__PURE__ */ e("div", { class: "n-muted", children: "Rien à venir" })
        ]
      }
    ),
    t && /* @__PURE__ */ e(va, { onClose: () => i(!1) })
  ] });
}
const wa = /* @__PURE__ */ new Set([
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
function ka(n) {
  return n >= 5 && n < 12 ? { greeting: "Bonjour", sub: "La maison se réveille doucement" } : n >= 12 && n < 18 ? { greeting: "Bel après-midi", sub: "Tout va bien à la maison" } : n >= 18 && n < 22 ? { greeting: "Bonsoir", sub: "Tout le monde est rentré" } : { greeting: "Bonne nuit", sub: "La maison veille sur vous" };
}
function Ma(n, t) {
  const i = { hass: t.hass, entity: n, roomLabel: t.areaName };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(dt, { ...i, hero: t.hero, breatheVariant: t.variant }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(pt, { ...i }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(ut, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(ht, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(_t, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(ft, { ...i }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(mt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(gt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(bt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(vt, { ...i }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(xt, { ...i }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(yt, { ...i, breatheVariant: t.variant }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(wt, { ...i }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(Mt, { entity: n, roomLabel: t.areaName }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(zt, { hass: t.hass, entity: n, roomLabel: t.areaName }, n.entity_id);
    default:
      return null;
  }
}
function Ia(n) {
  return n.replace(/[^\x00-\x7F]/g, "_").toLowerCase();
}
function za(n, t) {
  const i = new Map(t.map((o) => [Ia(o.name), o.area_id])), a = /* @__PURE__ */ new Map();
  for (const o of Object.values(n.states)) {
    if (!o.entity_id.startsWith("sensor.")) continue;
    const r = o.state.toLowerCase(), l = i.get(r);
    if (!l) continue;
    const s = o.entity_id.slice(7), p = s.slice(s.lastIndexOf("_") + 1);
    if (!p) continue;
    const h = n.states[`person.${p}`]?.attributes.entity_picture, c = a.get(l) ?? /* @__PURE__ */ new Map();
    c.has(p) || c.set(p, { name: p, picture: h }), a.set(l, c);
  }
  return new Map(
    Array.from(a.entries()).map(([o, r]) => [o, Array.from(r.values())])
  );
}
function Sa({ area: n, entities: t, accent: i = !1, onOpen: a, dragProps: o, presence: r }) {
  const l = It(n.name), s = t.filter(
    (h) => h.domain !== "sensor" && h.domain !== "binary_sensor"
  ).length, p = t.filter(Je).length, d = Kn(t);
  return /* @__PURE__ */ e(
    "div",
    {
      role: "button",
      tabIndex: 0,
      class: `nido-room-card ${i ? "nido-room-card--accent" : ""}`,
      onClick: a,
      onKeyDown: (h) => {
        (h.key === "Enter" || h.key === " ") && (h.preventDefault(), a());
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
              r && r.length > 0 && /* @__PURE__ */ e("div", { class: "nido-room-card__presence", children: r.map(
                (h) => h.picture ? /* @__PURE__ */ e(
                  "img",
                  {
                    class: "nido-room-card__avatar",
                    src: h.picture,
                    alt: h.name
                  },
                  h.name
                ) : /* @__PURE__ */ e("span", { class: "nido-room-card__avatar nido-room-card__avatar--initial", children: h.name[0].toUpperCase() }, h.name)
              ) }),
              /* @__PURE__ */ e(oi, { size: 16 })
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
function Ca({
  hass: n,
  areas: t,
  entities: i,
  favorites: a,
  exposed: o,
  roomsOrder: r,
  onConfigure: l,
  onOpenRoom: s,
  onReorderFavorites: p,
  onReorderRooms: d
}) {
  const h = n.user?.name ?? "vous", c = /* @__PURE__ */ new Date(), g = c.getHours(), { greeting: f, sub: x } = ka(g), b = `${String(g).padStart(2, "0")}:${String(c.getMinutes()).padStart(2, "0")}`, u = c.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" }).replace(/^\w/, (y) => y.toUpperCase()), _ = P(() => new Set(o), [o]), m = P(
    () => i.filter((y) => _.has(y.entity_id) && wa.has(y.domain)),
    [i, _]
  ), w = P(
    () => m.find((y) => y.domain === "weather"),
    [m]
  ), z = P(
    () => m.filter((y) => y.domain === "light" && Je(y)),
    [m]
  ), E = z.length, L = P(() => w ? Object.keys(n.states).some(
    (A) => A.startsWith("sensor.") && (A.endsWith("_next_rain") || A.endsWith("_weather_alert") || A.endsWith("_uv"))
  ) : !1, [n.states, w]), [T, j] = k(!1), [N, V] = k(!1), [re, X] = k(!1), U = P(() => {
    const y = n.states["sensor.nido_notifications"];
    return !y || !y.attributes.notifications ? [] : y.attributes.notifications;
  }, [n.states["sensor.nido_notifications"]]), K = P(() => ei(), [N]), fe = P(() => {
    if (U.length === 0) return !1;
    if (!K) return !0;
    const y = U[U.length - 1];
    return new Date(y.timestamp) > new Date(K);
  }, [U, K]), ee = () => {
    V(!0), ni((/* @__PURE__ */ new Date()).toISOString());
  }, W = P(() => Object.values(n.states).filter(
    (y) => y.entity_id.startsWith("person.") && y.state === "home" && y.attributes.entity_picture
  ), [n.states]), oe = (y) => {
    if (!y) return null;
    if (y.startsWith("http")) return y;
    const A = n.hassUrl?.("");
    return A ? A.replace(/\/$/, "") + y : y;
  }, S = P(() => Bt(m), [m]), Z = P(() => za(n, t), [n.states, t]), M = P(() => {
    const y = new Map(m.map((A) => [A.entity_id, A]));
    return a.map((A) => y.get(A)).filter((A) => !!A);
  }, [m, a]), I = P(() => {
    const y = t.filter((A) => (S.get(A.area_id) ?? []).length > 0);
    return nt(y, r, (A) => A.area_id);
  }, [t, S, r]), C = Ve(
    M,
    (y) => y.entity_id,
    (y) => p(y.map((A) => A.entity_id))
  ), F = Ve(
    I,
    (y) => y.area_id,
    (y) => d(y.map((A) => A.area_id))
  );
  let Y = 0;
  const St = M.length > 0 ? /* @__PURE__ */ e("section", { class: "nido-room nido-room--favorites", children: [
    /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { class: "is-accent", children: "Favoris" }) }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room__grid ${C.isDragging ? "is-dragging" : ""}`,
        ref: (y) => {
          C.containerRef.current = y;
        },
        children: M.map((y) => {
          Y += 1;
          const A = (Y - 1) % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              "data-hero": Y === 1 ? "true" : "false",
              ...C.itemPropsFor(y.entity_id),
              children: Ma(y, {
                hass: n,
                areaName: t.find((At) => At.area_id === y.area_id)?.name ?? "",
                hero: Y === 1,
                variant: A
              })
            },
            y.entity_id
          );
        })
      }
    )
  ] }, "__favorites") : null, Ct = m.length > 0;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: [
    /* @__PURE__ */ e("div", { class: "nido-dashboard", children: [
      /* @__PURE__ */ e("header", { class: "nido-topbar", children: [
        /* @__PURE__ */ e("div", { class: "nido-topbar__brand", children: [
          /* @__PURE__ */ e("div", { class: "nido-topbar__clock", children: b }),
          /* @__PURE__ */ e("span", { children: "nido" })
        ] }),
        /* @__PURE__ */ e("div", { class: "nido-topbar__actions", children: [
          w && (L ? /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-weather-pill-btn",
              onClick: () => j(!0),
              "aria-label": "Voir la météo détaillée",
              children: /* @__PURE__ */ e(Tn, { entity: w })
            }
          ) : /* @__PURE__ */ e(Tn, { entity: w })),
          E > 0 && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-lights-pill-btn",
              onClick: () => X(!0),
              "aria-label": `${E} lumière${E > 1 ? "s" : ""} allumée${E > 1 ? "s" : ""}`,
              children: /* @__PURE__ */ e("div", { class: "nido-lights-pill", children: [
                /* @__PURE__ */ e(_e, { size: 16 }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__count", children: E }),
                /* @__PURE__ */ e("span", { class: "nido-lights-pill__label", children: E === 1 ? "lumière" : "lumières" })
              ] })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "nido-bell-btn",
              onClick: ee,
              "aria-label": "Notifications",
              children: [
                /* @__PURE__ */ e(tt, { size: 20 }),
                fe && /* @__PURE__ */ e("span", { class: "nido-bell-btn__badge" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: l,
              children: /* @__PURE__ */ e(ri, { size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("section", { class: "nido-hero", children: [
        /* @__PURE__ */ e("div", { class: "nido-hero__date", children: u }),
        /* @__PURE__ */ e("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }, children: [
          /* @__PURE__ */ e("h1", { style: { margin: 0 }, children: [
            f,
            ", ",
            /* @__PURE__ */ e("em", { children: h })
          ] }),
          W.length > 0 && /* @__PURE__ */ e("div", { class: "nido-home-pill", children: [
            /* @__PURE__ */ e("div", { class: "nido-home-pill__avatars", children: W.map((y) => {
              const A = oe(y.attributes.entity_picture);
              return A ? /* @__PURE__ */ e(
                "img",
                {
                  src: A,
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
      Ct ? /* @__PURE__ */ e(H, { children: [
        St,
        I.length > 0 && /* @__PURE__ */ e("section", { class: "nido-rooms-section", children: [
          /* @__PURE__ */ e("div", { class: "nido-section-title", children: /* @__PURE__ */ e("h2", { children: "Pièces" }) }),
          /* @__PURE__ */ e(
            "div",
            {
              class: `nido-rooms-grid ${F.isDragging ? "is-dragging" : ""}`,
              ref: (y) => {
                F.containerRef.current = y;
              },
              children: I.map((y, A) => /* @__PURE__ */ e(
                Sa,
                {
                  area: y,
                  entities: S.get(y.area_id) ?? [],
                  accent: A === 0,
                  onOpen: () => s(y.area_id),
                  dragProps: F.itemPropsFor(y.area_id),
                  presence: Z.get(y.area_id)
                },
                y.area_id
              ))
            }
          )
        ] })
      ] }) : /* @__PURE__ */ e("div", { class: "nido-empty", children: [
        /* @__PURE__ */ e("p", { class: "n-muted", children: "Aucun appareil exposé pour l'instant. Ouvrez « Personnaliser » pour choisir vos entités." }),
        /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: l, children: "Personnaliser Nido" })
      ] })
    ] }),
    T && w && /* @__PURE__ */ e(
      sa,
      {
        hass: n,
        weatherEntityId: w.entity_id,
        onClose: () => j(!1)
      }
    ),
    N && /* @__PURE__ */ e(
      da,
      {
        hass: n,
        notifications: U,
        onClose: () => V(!1)
      }
    ),
    re && /* @__PURE__ */ e(
      ha,
      {
        hass: n,
        lights: z,
        areas: t,
        onClose: () => X(!1)
      }
    )
  ] });
}
function Aa(n, t, i, a, o = !1) {
  const r = { hass: t, entity: n, roomLabel: i };
  switch (n.domain) {
    case "light":
      return /* @__PURE__ */ e(dt, { ...r, hero: o, breatheVariant: a }, n.entity_id);
    case "cover":
      return /* @__PURE__ */ e(pt, { ...r }, n.entity_id);
    case "switch":
      return /* @__PURE__ */ e(ut, { ...r, breatheVariant: a }, n.entity_id);
    case "binary_sensor":
      return /* @__PURE__ */ e(ht, { entity: n, roomLabel: i }, n.entity_id);
    case "climate":
      return /* @__PURE__ */ e(_t, { ...r, breatheVariant: a }, n.entity_id);
    case "lock":
      return /* @__PURE__ */ e(ft, { ...r }, n.entity_id);
    case "vacuum":
      return /* @__PURE__ */ e(mt, { ...r, breatheVariant: a }, n.entity_id);
    case "sensor":
      return /* @__PURE__ */ e(gt, { entity: n, roomLabel: i }, n.entity_id);
    case "media_player":
      return /* @__PURE__ */ e(bt, { ...r, breatheVariant: a }, n.entity_id);
    case "alarm_control_panel":
      return /* @__PURE__ */ e(vt, { ...r }, n.entity_id);
    case "camera":
      return /* @__PURE__ */ e(xt, { ...r }, n.entity_id);
    case "fan":
      return /* @__PURE__ */ e(yt, { ...r, breatheVariant: a }, n.entity_id);
    case "scene":
    case "script":
      return /* @__PURE__ */ e(wt, { ...r }, n.entity_id);
    case "weather":
      return /* @__PURE__ */ e(Mt, { entity: n, roomLabel: i }, n.entity_id);
    case "calendar":
      return /* @__PURE__ */ e(zt, { hass: t, entity: n, roomLabel: i }, n.entity_id);
    default:
      return null;
  }
}
function Ea({
  hass: n,
  area: t,
  entities: i,
  entitiesOrder: a,
  onBack: o,
  onReorderEntities: r
}) {
  const l = It(t.name), s = Kn(i), p = P(
    () => nt(i, a, (u) => u.entity_id),
    [i, a]
  ), d = P(() => {
    const u = /* @__PURE__ */ new Map();
    for (const _ of p)
      u.set(_.domain, (u.get(_.domain) ?? 0) + 1);
    return Array.from(u.entries()).sort((_, m) => m[1] - _[1]);
  }, [p]), [h, c] = k("all"), g = P(
    () => h === "all" ? p : p.filter((u) => u.domain === h),
    [p, h]
  ), f = Ve(
    g,
    (u) => u.entity_id,
    (u) => {
      const _ = new Set(g.map((z) => z.entity_id)), m = [...u], w = p.map(
        (z) => _.has(z.entity_id) ? m.shift() : z
      );
      r(w.map((z) => z.entity_id));
    }
  ), x = p.filter(
    (u) => u.domain !== "sensor" && u.domain !== "binary_sensor"
  ).length, b = p.filter(Je).length;
  return /* @__PURE__ */ e("div", { class: "nido-shell", children: /* @__PURE__ */ e("div", { class: "nido-dashboard nido-room-detail", children: [
    /* @__PURE__ */ e("header", { class: "nido-room-detail__header", children: [
      /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn nido-room-detail__back", onClick: o, children: /* @__PURE__ */ e(Pi, { size: 18 }) }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__crumb", children: [
        /* @__PURE__ */ e("div", { class: "n-eyebrow", children: "Maison · Pièce" }),
        /* @__PURE__ */ e("div", { class: "nido-room-detail__brand", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "nido-room-detail__head-actions", children: /* @__PURE__ */ e("button", { type: "button", class: "n-icon-btn", children: /* @__PURE__ */ e(Ni, { size: 18 }) }) })
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
              x,
              " appareil",
              x > 1 ? "s" : ""
            ] }),
            b > 0 && /* @__PURE__ */ e(H, { children: [
              /* @__PURE__ */ e("span", { class: "nido-room-card__sep", children: "•" }),
              /* @__PURE__ */ e("span", { class: "nido-room-card__active", children: [
                /* @__PURE__ */ e("span", { class: "nido-room-card__dot" }),
                b,
                " actif",
                b > 1 ? "s" : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ e("h1", { class: "nido-room-detail__title", children: t.name })
        ] })
      ] }),
      (s.temperature || s.humidity || s.illuminance) && /* @__PURE__ */ e("div", { class: "nido-room-detail__stats", children: [
        s.temperature && /* @__PURE__ */ e(
          Oe,
          {
            label: "Température",
            value: s.temperature.value,
            unit: s.temperature.unit || "°"
          }
        ),
        s.humidity && /* @__PURE__ */ e(Pn, {}),
        s.humidity && /* @__PURE__ */ e(
          Oe,
          {
            label: "Humidité",
            value: Math.round(parseFloat(s.humidity.value)).toString(),
            unit: s.humidity.unit || "%"
          }
        ),
        s.illuminance && /* @__PURE__ */ e(Pn, {}),
        s.illuminance && /* @__PURE__ */ e(
          Oe,
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
          onClick: () => c("all"),
          children: [
            "Tout · ",
            i.length
          ]
        }
      ),
      d.map(([u, _]) => /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          class: `n-pill-btn ${h === u ? "n-pill-btn--dark" : "n-pill-btn--ghost"}`,
          onClick: () => c(u),
          children: [
            ca[u] ?? u,
            " · ",
            _
          ]
        }
      ))
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        class: `nido-room-detail__grid ${f.isDragging ? "is-dragging" : ""}`,
        ref: (u) => {
          f.containerRef.current = u;
        },
        children: g.map((u, _) => {
          const m = _ % 4 + 1;
          return /* @__PURE__ */ e(
            "div",
            {
              class: "nido-drag-item",
              ...f.itemPropsFor(u.entity_id),
              children: Aa(u, n, t.name, m, _ === 0 && u.domain === "light")
            },
            u.entity_id
          );
        })
      }
    )
  ] }) });
}
function Oe({ label: n, value: t, unit: i }) {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat", children: [
    /* @__PURE__ */ e("div", { class: "n-eyebrow", children: n }),
    /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-value", children: [
      t,
      /* @__PURE__ */ e("span", { class: "nido-room-detail__stat-unit", children: i })
    ] })
  ] });
}
function Pn() {
  return /* @__PURE__ */ e("div", { class: "nido-room-detail__stat-sep", "aria-hidden": "true" });
}
const be = 5, le = {
  light: { label: "Lumières", Icon: _e },
  switch: { label: "Prises & switches", Icon: Qe },
  cover: { label: "Volets & stores", Icon: Ke },
  climate: { label: "Thermostats", Icon: G },
  lock: { label: "Serrures", Icon: en },
  vacuum: { label: "Aspirateurs", Icon: nn },
  binary_sensor: { label: "Détecteurs", Icon: he },
  sensor: { label: "Capteurs", Icon: ce },
  media_player: { label: "Lecteurs média", Icon: an },
  alarm_control_panel: { label: "Alarmes", Icon: he },
  camera: { label: "Caméras", Icon: Ce },
  fan: { label: "Ventilateurs", Icon: rn },
  scene: { label: "Scènes", Icon: on },
  script: { label: "Scripts", Icon: ie },
  weather: { label: "Météo", Icon: ot },
  calendar: { label: "Calendriers", Icon: ct }
}, Nn = Object.keys(le), Ue = {
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
    initialExposed: l,
    initialFavorites: s,
    initialExcludedUsers: p,
    isReturning: d,
    onApplyTheme: h,
    onClose: c,
    onDone: g
  } = n, [f, x] = k(0), [b, u] = k(o), [_, m] = k(r), [w, z] = k(new Set(l)), [E, L] = k(new Set(s)), [T, j] = k(
    new Set(p)
  ), [N, V] = k(null), [re, X] = k(null);
  Q(() => {
    let M = !1;
    return t.callWS({ type: "config/auth/list" }).then((I) => {
      M || V(
        (I ?? []).filter((C) => !C.system_generated).sort((C, F) => C.name.localeCompare(F.name))
      );
    }).catch((I) => {
      M || (X(I instanceof Error ? I.message : String(I)), t.user && V([t.user]));
    }), () => {
      M = !0;
    };
  }, [t]);
  const U = () => x((M) => Math.min(be - 1, M + 1)), K = () => x((M) => Math.max(0, M - 1)), fe = (M, I) => {
    u(M), m(I), h(M, I);
  }, ee = (M) => {
    z((I) => {
      const C = new Set(I);
      return C.has(M) ? (C.delete(M), L((F) => {
        if (!F.has(M)) return F;
        const Y = new Set(F);
        return Y.delete(M), Y;
      })) : C.add(M), C;
    });
  }, W = (M) => {
    L((I) => {
      const C = new Set(I);
      return C.has(M) ? C.delete(M) : (C.add(M), z((F) => F.has(M) ? F : new Set(F).add(M))), C;
    });
  }, oe = (M) => {
    j((I) => {
      const C = new Set(I);
      return C.has(M) ? C.delete(M) : C.add(M), C;
    });
  }, S = () => {
    const M = Array.from(w), I = Array.from(E).filter((F) => w.has(F)), C = Array.from(T);
    zn(b, _), wn(M), Fe(I), kn(C), In(), g({
      exposed: M,
      favorites: I,
      theme: b,
      mode: _,
      excludedUsers: C
    });
  }, Z = () => {
    zn(b, _), wn(Array.from(w)), Fe(Array.from(E).filter((M) => w.has(M))), kn(Array.from(T)), In(), c();
  };
  return /* @__PURE__ */ e("div", { class: "n-ob", role: "dialog", "aria-modal": "true", "aria-label": "Configuration de Nido", children: /* @__PURE__ */ e("div", { class: "n-ob__shell", children: [
    /* @__PURE__ */ e("header", { class: "n-ob__header", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__brand", children: [
        /* @__PURE__ */ e("span", { class: "n-ob__brand-mark", children: /* @__PURE__ */ e(Ti, { size: 18 }) }),
        /* @__PURE__ */ e("span", { class: "n-ob__brand-name", children: "nido" })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__stepper", children: [
        Array.from({ length: be }, (M, I) => /* @__PURE__ */ e(
          "span",
          {
            class: `n-ob__step-dot ${I === f ? "is-active" : ""} ${I < f ? "is-done" : ""}`
          }
        )),
        /* @__PURE__ */ e("span", { class: "n-ob__step-count", children: [
          f + 1,
          " / ",
          be
        ] })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", class: "n-ob__skip", onClick: Z, children: "Passer →" })
    ] }),
    /* @__PURE__ */ e("div", { class: "n-ob__body", children: [
      f === 0 && /* @__PURE__ */ e(
        Ta,
        {
          isReturning: d,
          exposedCount: w.size,
          favCount: E.size,
          themeLabel: Ue[b].name,
          modeLabel: _ === "light" ? "Clair" : "Sombre",
          allowedUsersCount: N ? N.filter((M) => !T.has(M.id)).length : null
        }
      ),
      f === 1 && /* @__PURE__ */ e(Pa, { entitiesCount: i.length, areasCount: a.length }),
      f === 2 && /* @__PURE__ */ e(
        Na,
        {
          entities: i,
          exposed: w,
          favs: E,
          onToggleExpose: ee,
          onToggleFav: W
        }
      ),
      f === 3 && /* @__PURE__ */ e(
        Oa,
        {
          theme: b,
          mode: _,
          onPick: fe,
          userName: t.user?.name ?? "vous"
        }
      ),
      f === 4 && /* @__PURE__ */ e(
        $a,
        {
          hass: t,
          users: N,
          error: re,
          excluded: T,
          onToggleUser: oe
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
          onClick: K,
          children: [
            /* @__PURE__ */ e(Ii, { size: 14 }),
            " Retour"
          ]
        }
      ),
      f < be - 1 ? /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: U, children: [
        "Continuer ",
        /* @__PURE__ */ e(Dn, { size: 16 })
      ] }) : /* @__PURE__ */ e("button", { type: "button", class: "n-ob__primary", onClick: S, children: [
        "Entrer chez moi ",
        /* @__PURE__ */ e(Dn, { size: 16 })
      ] })
    ] })
  ] }) });
}
const On = [
  _e,
  Ke,
  Qe,
  G,
  en,
  nn,
  ce,
  an,
  he,
  Ce,
  rn,
  on,
  ie
];
function ve({ offset: n, intervalMs: t }) {
  const [i, a] = k(n);
  Q(() => {
    const r = setInterval(() => a((l) => l + 1), t);
    return () => clearInterval(r);
  }, [t]);
  const o = On[i % On.length];
  return /* @__PURE__ */ e("div", { class: "n-ob-cycle", children: /* @__PURE__ */ e(o, { size: 28 }) }, i);
}
function Ta(n) {
  const { isReturning: t, exposedCount: i, favCount: a, themeLabel: o, modeLabel: r, allowedUsersCount: l } = n;
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
          /* @__PURE__ */ e(xe, { label: "Exposées", value: i }),
          /* @__PURE__ */ e(xe, { label: "Favoris", value: a, accent: !0 }),
          /* @__PURE__ */ e(xe, { label: "Ambiance", value: o, hint: r }),
          /* @__PURE__ */ e(
            xe,
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
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tl", children: /* @__PURE__ */ e(ve, { offset: 0, intervalMs: 2200 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--tr", children: /* @__PURE__ */ e(ve, { offset: 3, intervalMs: 2600 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--bl", children: /* @__PURE__ */ e(ve, { offset: 7, intervalMs: 2400 }) }),
      /* @__PURE__ */ e("div", { class: "n-ob-welcome-illus__corner n-ob-welcome-illus__corner--br", children: /* @__PURE__ */ e(ve, { offset: 10, intervalMs: 2800 }) })
    ] })
  ] });
}
function xe(n) {
  return /* @__PURE__ */ e("div", { class: `n-ob-recap__card ${n.accent ? "is-accent" : ""}`, children: [
    /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: n.label }),
    /* @__PURE__ */ e("div", { class: "n-ob-recap__value", children: n.value }),
    n.hint && /* @__PURE__ */ e("div", { class: "n-ob-recap__hint", children: n.hint })
  ] });
}
function Pa({ entitiesCount: n, areasCount: t }) {
  const [i, a] = k("scanning");
  return Q(() => {
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
        /* @__PURE__ */ e("span", { class: "n-icon-bubble", style: { color: "var(--accent-deep)", background: "var(--accent-soft)" }, children: /* @__PURE__ */ e(Ei, { size: 18 }) }),
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
function Na(n) {
  const { entities: t, exposed: i, favs: a, onToggleExpose: o, onToggleFav: r } = n, l = P(() => {
    const u = /* @__PURE__ */ new Map();
    for (const _ of t)
      Nn.includes(_.domain) && (u.has(_.domain) || u.set(_.domain, []), u.get(_.domain).push(_));
    return Array.from(u.entries()).sort((_, m) => m[1].length - _[1].length);
  }, [t]), [s, p] = k(l[0]?.[0] ?? "light"), [d, h] = k(""), c = l.find(([u]) => u === s) ?? l[0], g = i.size, f = t.filter((u) => Nn.includes(u.domain)).length, x = d.trim().toLowerCase(), b = c ? x ? c[1].filter(
    (u) => (u.friendly_name ?? "").toLowerCase().includes(x) || u.entity_id.toLowerCase().includes(x)
  ) : c[1] : [];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--entities", children: [
    /* @__PURE__ */ e("aside", { class: "n-ob-ent__rail", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 2 · Vos appareils" }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__count", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-num", children: g }),
        /* @__PURE__ */ e("span", { class: "n-ob-ent__count-sep", children: [
          " / ",
          f
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob__hint", style: { marginBottom: 16 }, children: g === 0 ? "Aucun appareil exposé pour l'instant" : `appareil${g > 1 ? "s" : ""} exposé${g > 1 ? "s" : ""}` }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__list", children: l.map(([u, _]) => {
        const m = le[u], w = m.Icon, z = _.filter((L) => i.has(L.entity_id)).length;
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-ent__rail-row ${u === s ? "is-active" : ""}`,
            onClick: () => p(u),
            children: [
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-icon", children: /* @__PURE__ */ e(w, { size: 15 }) }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-label", children: m.label }),
              /* @__PURE__ */ e("span", { class: "n-ob-ent__rail-count", children: [
                z,
                "/",
                _.length
              ] })
            ]
          }
        );
      }) })
    ] }),
    /* @__PURE__ */ e("section", { class: "n-ob-ent__main", children: c && /* @__PURE__ */ e(H, { children: [
      /* @__PURE__ */ e("div", { class: "n-ob-ent__head", children: [
        /* @__PURE__ */ e("div", { children: [
          /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: [
            c[1].length,
            " disponibles"
          ] }),
          /* @__PURE__ */ e("h3", { class: "n-ob-ent__title", children: le[c[0]].label })
        ] }),
        /* @__PURE__ */ e("div", { class: "n-ob-ent__head-actions", children: [
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => b.forEach((u) => !i.has(u.entity_id) && o(u.entity_id)),
              children: "Tout exposer"
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              class: "n-pill-btn n-pill-btn--ghost",
              onClick: () => b.forEach((u) => i.has(u.entity_id) && o(u.entity_id)),
              children: "Tout retirer"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__search", children: [
        /* @__PURE__ */ e("span", { class: "n-ob-ent__search-icon", "aria-hidden": "true", children: /* @__PURE__ */ e(Ci, { size: 14 }) }),
        /* @__PURE__ */ e(
          "input",
          {
            type: "text",
            class: "n-ob-ent__search-input",
            value: d,
            onInput: (u) => h(u.target.value),
            placeholder: `Rechercher dans ${le[c[0]].label.toLowerCase()}…`,
            "aria-label": "Rechercher une entité"
          }
        ),
        d && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: "n-ob-ent__search-clear",
            onClick: () => h(""),
            "aria-label": "Effacer la recherche",
            children: /* @__PURE__ */ e(ae, { size: 12 })
          }
        )
      ] }),
      /* @__PURE__ */ e("div", { class: "n-ob-ent__grid", children: [
        b.length === 0 && /* @__PURE__ */ e("div", { class: "n-ob-ent__empty", children: [
          "Aucune entité ne correspond à « ",
          d,
          " »"
        ] }),
        b.map((u) => {
          const _ = i.has(u.entity_id), m = a.has(u.entity_id), w = le[u.domain].Icon;
          return /* @__PURE__ */ e(
            "div",
            {
              class: `n-ob-ent-card ${_ ? "is-exposed" : ""}`,
              onClick: () => o(u.entity_id),
              children: [
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__icon ${_ ? "is-on" : ""}`, children: /* @__PURE__ */ e(w, { size: 16 }) }),
                /* @__PURE__ */ e("div", { class: "n-ob-ent-card__body", children: [
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__name", children: u.friendly_name }),
                  /* @__PURE__ */ e("div", { class: "n-ob-ent-card__id", children: u.entity_id })
                ] }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    type: "button",
                    class: `n-ob-ent-card__star ${m ? "is-fav" : ""}`,
                    "aria-label": m ? "Retirer des favoris" : "Ajouter aux favoris",
                    onClick: (z) => {
                      z.stopPropagation(), r(u.entity_id);
                    },
                    children: m ? /* @__PURE__ */ e(Ai, { size: 14 }) : /* @__PURE__ */ e(Si, { size: 14 })
                  }
                ),
                /* @__PURE__ */ e("span", { class: `n-ob-ent-card__check ${_ ? "is-on" : ""}`, children: _ && /* @__PURE__ */ e(zi, { size: 12, stroke: 2.4 }) })
              ]
            }
          );
        })
      ] })
    ] }) })
  ] });
}
function Oa(n) {
  const { theme: t, mode: i, userName: a, onPick: o } = n, r = Ue[t];
  return /* @__PURE__ */ e("div", { class: "n-ob-step n-ob-step--theme", children: [
    /* @__PURE__ */ e("div", { class: "n-ob-step__col", children: [
      /* @__PURE__ */ e("div", { class: "n-ob__eyebrow", children: "Étape 3 · Ambiance" }),
      /* @__PURE__ */ e("h1", { class: "n-ob__h1", children: [
        "Quelle ambiance",
        /* @__PURE__ */ e("br", {}),
        /* @__PURE__ */ e("em", { children: "vous va ?" })
      ] }),
      /* @__PURE__ */ e("p", { class: "n-ob__lead", children: "Vous pourrez en changer à tout moment. Chaque thème existe en clair et en sombre." }),
      /* @__PURE__ */ e("div", { class: "n-ob-theme__grid", children: Qn.map((l) => {
        const s = Ue[l];
        return /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            class: `n-ob-theme__tile ${t === l ? "is-active" : ""}`,
            onClick: () => o(l, i),
            children: [
              /* @__PURE__ */ e("div", { class: "n-ob-theme__swatches", children: s.swatches.map((p, d) => /* @__PURE__ */ e(
                "span",
                {
                  class: "n-ob-theme__swatch",
                  style: {
                    background: p,
                    borderRadius: d === 0 ? "8px 0 0 8px" : d === 2 ? "0 8px 8px 0" : "0"
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
              /* @__PURE__ */ e(tn, { size: 14 }),
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
function $a(n) {
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
    /* @__PURE__ */ e("div", { class: "n-ob-step__illus n-ob-family", children: i === null ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Chargement des utilisateurs…" }) : i.length === 0 ? /* @__PURE__ */ e("div", { class: "n-muted", children: "Aucun utilisateur trouvé." }) : /* @__PURE__ */ e("div", { class: "n-ob-family__list", children: i.map((l) => {
      const s = !o.has(l.id), p = l.id === t.user?.id;
      return /* @__PURE__ */ e(
        "label",
        {
          class: `n-ob-family__row ${s ? "is-allowed" : "is-excluded"}`,
          children: [
            /* @__PURE__ */ e("span", { class: "n-ob-family__avatar", "aria-hidden": "true", children: l.name?.[0]?.toUpperCase() ?? /* @__PURE__ */ e(Di, { size: 18 }) }),
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
                onChange: () => !p && r(l.id),
                "aria-label": s ? "Autoriser" : "Exclure"
              }
            )
          ]
        }
      );
    }) }) })
  ] });
}
const La = [
  "area_registry_updated",
  "entity_registry_updated",
  "device_registry_updated"
];
function ja({ hass: n, host: t }) {
  const [i, a] = k(null), [o, r] = k(null), [l, s] = k(null), [p, d] = k(null), h = P(() => et(), []), [c, g] = k(() => Yt()), [f, x] = k(() => qt()), [b, u] = k(() => Jt()), [_, m] = k(() => Gt()), [w, z] = k(
    () => Kt()
  ), [E, L] = k(() => !Mn()), [T, j] = k(
    { kind: "dashboard" }
  ), N = (S) => {
    g(S), Fe(S);
  }, V = (S) => {
    m(S), Xt(S);
  }, re = (S, Z) => {
    z((M) => {
      const I = { ...M, [S]: Z };
      return Qt(I), I;
    });
  }, X = ne(n);
  X.current = n, Q(() => {
    if (!n) return;
    let S = !1;
    const Z = [], M = async () => {
      const I = X.current;
      if (I)
        try {
          const [C, F, Y] = await Promise.all([
            Ft(I),
            Vt(I),
            Ht(I)
          ]);
          if (S) return;
          a(C), r(F), s(Y);
        } catch (C) {
          if (S) return;
          d(C instanceof Error ? C.message : String(C));
        }
    };
    return M(), Promise.all(
      La.map(
        (I) => n.connection.subscribeEvents(() => {
          S || M();
        }, I)
      )
    ).then((I) => {
      if (S) {
        I.forEach((C) => C());
        return;
      }
      Z.push(...I);
    }).catch((I) => console.warn("Nido: subscribeEvents failed", I)), () => {
      S = !0, Z.forEach((I) => I());
    };
  }, [n != null]);
  const U = P(() => !n || !o || !l ? [] : Wt(n, o, l), [n?.states, o, l]), K = (S, Z) => {
    t?.applyTheme?.(S, Z);
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
  const ee = P(() => new Set(f), [f]), W = T.kind === "room" ? i.find((S) => S.area_id === T.areaId) ?? null : null, oe = P(
    () => W ? U.filter(
      (S) => S.area_id === W.area_id && ee.has(S.entity_id)
    ) : [],
    [U, W, ee]
  );
  return /* @__PURE__ */ e(H, { children: [
    T.kind === "dashboard" || !W ? /* @__PURE__ */ e(
      Ca,
      {
        hass: n,
        areas: i,
        entities: U,
        favorites: c,
        exposed: f,
        roomsOrder: _,
        onConfigure: () => L(!0),
        onOpenRoom: (S) => j({ kind: "room", areaId: S }),
        onReorderFavorites: N,
        onReorderRooms: V
      }
    ) : /* @__PURE__ */ e(
      Ea,
      {
        hass: n,
        area: W,
        entities: oe,
        entitiesOrder: w[W.area_id] ?? [],
        onBack: () => j({ kind: "dashboard" }),
        onReorderEntities: (S) => re(W.area_id, S)
      }
    ),
    E && /* @__PURE__ */ e(
      Da,
      {
        hass: n,
        entities: U,
        areas: i,
        initialTheme: h.theme,
        initialMode: h.mode,
        initialExposed: f,
        initialFavorites: c,
        initialExcludedUsers: b,
        isReturning: Mn(),
        onApplyTheme: K,
        onClose: () => L(!1),
        onDone: (S) => {
          x(S.exposed), g(S.favorites), u(S.excludedUsers), L(!1);
        }
      }
    )
  ] });
}
const Ra = ':host{--font-sans: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-display: "DM Sans", "Helvetica Neue", system-ui, sans-serif;--font-serif: "Instrument Serif", "Times New Roman", serif;--font-mono: "JetBrains Mono", "SF Mono", monospace;--r-xs: 8px;--r-sm: 14px;--r-md: 20px;--r-lg: 28px;--r-xl: 36px;--r-2xl: 44px;--r-pill: 999px;--s-1: 4px;--s-2: 8px;--s-3: 12px;--s-4: 16px;--s-5: 20px;--s-6: 24px;--s-7: 32px;--s-8: 40px;--s-9: 56px;--shadow-sm: 0 1px 2px rgba(40, 25, 15, .04);--shadow-md: 0 4px 16px rgba(40, 25, 15, .06);--shadow-lg: 0 12px 40px rgba(40, 25, 15, .08);--shadow-hero: 0 20px 60px rgba(180, 80, 30, .18);--ease-out: cubic-bezier(.22, 1, .36, 1);--ease-in-out: cubic-bezier(.65, 0, .35, 1);--ease-spring: cubic-bezier(.34, 1.56, .64, 1)}:host,:host([data-theme="terracotta"][data-mode="light"]){--bg-canvas: #e8e2d8;--bg-shell: #f4ede2;--bg-card: #fbf6ec;--bg-card-elev: #ffffff;--bg-inset: #ede4d3;--ink-1: #1a1410;--ink-2: #5a4a3c;--ink-3: #9c8a76;--ink-4: #c4b39d;--accent: #c75a2a;--accent-deep: #8a3a18;--accent-soft: #f0d5c0;--accent-ink: #ffffff;--hero-dark: #1a1410;--hero-dark-ink: #f4ede2;--positive: #6b8a3a;--warning: #d4a050;--danger: #b8423a;--grid-dot: rgba(60, 40, 25, .18);--hatch: rgba(60, 40, 25, .1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(199,90,42,.04) 100%)}:host([data-theme="terracotta"][data-mode="dark"]){--bg-canvas: #14100c;--bg-shell: #1f1812;--bg-card: #2a2018;--bg-card-elev: #322620;--bg-inset: #1a130e;--ink-1: #f4ede2;--ink-2: #c4ad95;--ink-3: #8a7560;--ink-4: #4a3a2c;--accent: #e07a4a;--accent-deep: #c75a2a;--accent-soft: #4a2a18;--accent-ink: #1a1410;--hero-dark: #0a0604;--hero-dark-ink: #f4ede2;--positive: #9ab864;--warning: #e0b870;--danger: #d46258;--grid-dot: rgba(244,237,226,.1);--hatch: rgba(244,237,226,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(224,122,74,.06) 100%)}:host([data-theme="miel"][data-mode="light"]){--bg-canvas: #ebe2d0;--bg-shell: #f6ecd6;--bg-card: #fcf4e0;--bg-card-elev: #ffffff;--bg-inset: #efe2c4;--ink-1: #1f1608;--ink-2: #5c4628;--ink-3: #9e8458;--ink-4: #c8b487;--accent: #d4a020;--accent-deep: #8a6418;--accent-soft: #f4e0a0;--accent-ink: #1f1608;--hero-dark: #2a1f10;--hero-dark-ink: #f6ecd6;--positive: #7a8a3a;--warning: #c8843a;--danger: #b8523a;--grid-dot: rgba(60,45,20,.18);--hatch: rgba(60,45,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,160,32,.06) 100%)}:host([data-theme="miel"][data-mode="dark"]){--bg-canvas: #15110a;--bg-shell: #1f1810;--bg-card: #2a2114;--bg-card-elev: #33291a;--bg-inset: #1a1208;--ink-1: #f6ecd6;--ink-2: #c8b487;--ink-3: #8a7048;--ink-4: #4a3820;--accent: #e8b840;--accent-deep: #c8941c;--accent-soft: #4a3010;--accent-ink: #1f1608;--hero-dark: #0a0604;--hero-dark-ink: #f6ecd6;--positive: #a8b860;--warning: #e8b860;--danger: #d46850;--grid-dot: rgba(246,236,214,.1);--hatch: rgba(246,236,214,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(232,184,64,.08) 100%)}:host([data-theme="sauge"][data-mode="light"]){--bg-canvas: #dbd9cf;--bg-shell: #ebe7d8;--bg-card: #f4f0de;--bg-card-elev: #ffffff;--bg-inset: #dfdac3;--ink-1: #181a12;--ink-2: #4a4e38;--ink-3: #888a6c;--ink-4: #b8b89c;--accent: #6a7a3a;--accent-deep: #424a20;--accent-soft: #d4d8a8;--accent-ink: #f4f0de;--hero-dark: #1a1d10;--hero-dark-ink: #ebe7d8;--positive: #6a7a3a;--warning: #c8943a;--danger: #a85040;--grid-dot: rgba(40,50,20,.18);--hatch: rgba(40,50,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(106,122,58,.05) 100%)}:host([data-theme="sauge"][data-mode="dark"]){--bg-canvas: #11130c;--bg-shell: #191b13;--bg-card: #232518;--bg-card-elev: #2c2e1e;--bg-inset: #14160e;--ink-1: #ebe7d8;--ink-2: #b8b89c;--ink-3: #7a7c60;--ink-4: #3a3c28;--accent: #9aa84e;--accent-deep: #6a7a3a;--accent-soft: #2a3014;--accent-ink: #181a12;--hero-dark: #08090a;--hero-dark-ink: #ebe7d8;--positive: #9aa84e;--warning: #d4a060;--danger: #c46050;--grid-dot: rgba(235,231,216,.1);--hatch: rgba(235,231,216,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(154,168,78,.06) 100%)}:host([data-theme="cosy"][data-mode="light"]){--bg-canvas: #e2dccf;--bg-shell: #f0eadd;--bg-card: #f8f3e6;--bg-card-elev: #ffffff;--bg-inset: #e6dfca;--ink-1: #201410;--ink-2: #5a3e2c;--ink-3: #998068;--ink-4: #c4b09a;--accent: #b06030;--accent-deep: #783818;--accent-soft: #ecd0b8;--accent-ink: #f8f3e6;--hero-dark: #1c1208;--hero-dark-ink: #f0eadd;--positive: #6a8048;--warning: #c89240;--danger: #b04438;--grid-dot: rgba(60,35,20,.18);--hatch: rgba(60,35,20,.1);--time-tint: linear-gradient(180deg, transparent 0%, rgba(176,96,48,.05) 100%)}:host([data-theme="cosy"][data-mode="dark"]){--bg-canvas: #14100a;--bg-shell: #1d1610;--bg-card: #271e16;--bg-card-elev: #30261c;--bg-inset: #18120c;--ink-1: #f0eadd;--ink-2: #c4b09a;--ink-3: #8a7058;--ink-4: #483624;--accent: #d48450;--accent-deep: #b06030;--accent-soft: #3a2418;--accent-ink: #1c1208;--hero-dark: #0a0604;--hero-dark-ink: #f0eadd;--positive: #98a868;--warning: #e0a868;--danger: #c8584c;--grid-dot: rgba(240,234,221,.1);--hatch: rgba(240,234,221,.06);--time-tint: linear-gradient(180deg, transparent 0%, rgba(212,132,80,.06) 100%)}.pattern-dots{background-image:radial-gradient(var(--grid-dot) 1px,transparent 1px);background-size:14px 14px}.pattern-hatch{background-image:repeating-linear-gradient(-45deg,var(--hatch) 0 1px,transparent 1px 7px)}@keyframes nido-breathe{0%,to{transform:scale(1);filter:brightness(1)}50%{transform:scale(1.006);filter:brightness(1.015)}}@keyframes nido-glow{0%,to{opacity:var(--glow-base, .85);transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}@keyframes nido-stagger-in{0%{opacity:0;transform:translateY(16px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}.breathe-1{animation:nido-breathe 5.5s var(--ease-in-out) infinite}.breathe-2{animation:nido-breathe 6.2s var(--ease-in-out) infinite;animation-delay:-1.4s}.breathe-3{animation:nido-breathe 4.8s var(--ease-in-out) infinite;animation-delay:-2.7s}.breathe-4{animation:nido-breathe 7s var(--ease-in-out) infinite;animation-delay:-3.1s}.glow-pulse-1{animation:nido-glow 4.2s var(--ease-in-out) infinite}.glow-pulse-2{animation:nido-glow 5.8s var(--ease-in-out) infinite;animation-delay:-2s}@media(prefers-reduced-motion:reduce){.breathe-1,.breathe-2,.breathe-3,.breathe-4,.glow-pulse-1,.glow-pulse-2{animation:none!important}}', Fa = ':host{display:block;width:100%;height:100%;font-family:var(--font-sans);color:var(--ink-1);background:var(--bg-canvas);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.nido-root-mount{width:100%;height:100%}.nido-shell{width:100%;height:100%;overflow-x:hidden;overflow-y:auto;padding:16px;box-sizing:border-box}.nido-loading,.nido-stub,.n-muted{color:var(--ink-3)}.nido-loading{padding:32px;text-align:center;font-size:14px}.nido-loading--error{color:var(--danger)}.nido-dashboard{background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;position:relative;overflow:hidden;min-height:calc(100vh - 32px);box-sizing:border-box}.nido-dashboard:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.nido-dashboard>*{position:relative}.nido-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.nido-topbar__brand{display:flex;flex-direction:column;align-items:flex-start;gap:4px}.nido-topbar__clock{font-family:var(--font-mono);font-size:14px;font-weight:600;color:var(--ink-3);line-height:1}.nido-topbar__brand span{font-family:"Comfortaa",var(--font-sans);font-weight:700;font-size:24px;letter-spacing:.04em;color:var(--accent);line-height:1}.nido-hero{margin-bottom:32px}.nido-hero h1{margin:0;font-family:var(--font-display);font-size:56px;font-weight:600;letter-spacing:-.03em;line-height:1.02;color:var(--ink-1)}.nido-hero h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400;color:var(--accent)}.nido-hero__sub{margin:12px 0 0;font-size:15px;color:var(--ink-2)}.nido-section-title{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}.nido-section-title h2{margin:0;font-family:var(--font-mono);font-size:11px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-3)}.nido-section-title h2.is-accent{color:var(--accent-deep)}.nido-rooms{display:flex;flex-direction:column;gap:28px}.nido-room__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}.n-card{position:relative;overflow:hidden;background:var(--bg-card);border-radius:var(--r-lg);padding:20px;display:flex;flex-direction:column;gap:12px;min-height:160px;transition:background .24s var(--ease-out),color .24s var(--ease-out);color:var(--ink-1)}.n-card--accent{background:var(--accent);color:var(--accent-ink);box-shadow:var(--shadow-hero)}.n-card--accent-muted{background:var(--accent-soft);color:var(--ink-1);box-shadow:var(--shadow-md)}.n-card--accent-muted .n-icon-bubble{background:color-mix(in srgb,var(--accent) 22%,var(--accent-soft));color:var(--accent-deep)}.n-card--accent-muted .n-toggle{background:color-mix(in srgb,var(--accent) 18%,var(--bg-inset))}.n-card--accent-muted .n-toggle__thumb{background:var(--accent)}.n-card--accent-muted .n-eyebrow{color:var(--accent-deep);opacity:.7}.n-card--accent-muted .n-muted{color:var(--accent-deep);opacity:.65}.n-card--accent-muted .n-title{color:var(--accent-deep)}.n-card[data-hero=true],.nido-drag-item[data-hero=true] .n-card{min-height:200px;padding:24px}.n-cover-glow-wrap{position:relative;border-radius:calc(var(--r-lg) + 2px);padding:2px;overflow:hidden;isolation:isolate;background:transparent;transition:box-shadow .5s var(--ease-out)}.n-cover-glow-wrap[data-active=true]{box-shadow:0 0 18px 2px color-mix(in srgb,var(--accent) 35%,transparent)}.n-cover-glow-wrap .n-card{position:relative;z-index:1}.n-cover-glow-wrap:before{content:"";position:absolute;width:200%;height:200%;top:-50%;left:-50%;background:conic-gradient(from 0deg,transparent 0%,transparent 35%,color-mix(in srgb,var(--accent) 60%,transparent) 45%,var(--accent) 50%,color-mix(in srgb,var(--accent) 60%,transparent) 55%,transparent 65%,transparent 100%);animation:cover-glow-spin 3.5s linear infinite;opacity:0;transition:opacity .5s var(--ease-out);pointer-events:none;z-index:0;will-change:transform}.n-cover-glow-wrap[data-active=true]:before{opacity:1}@keyframes cover-glow-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.n-cover-glow-wrap:before{animation:none}.n-cover-glow-wrap[data-active=true]:before{background:var(--accent);opacity:.6}}.n-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px}.n-icon-bubble{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .24s,color .24s}.n-card[data-on=true] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card--accent .n-icon-bubble{background:#fff3;color:var(--accent-ink)}.n-toggle{width:48px;height:28px;border-radius:var(--r-pill);background:var(--bg-inset);border:none;cursor:pointer;position:relative;padding:0;transition:background .24s;flex-shrink:0}.n-toggle:disabled{cursor:not-allowed;opacity:.6}.n-toggle__thumb{position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--ink-3);transition:left .24s var(--ease-spring),background .24s}.n-card[data-on=true] .n-toggle{background:var(--ink-1)}.n-card[data-on=true] .n-toggle__thumb{left:23px;background:var(--bg-card)}.n-card--accent .n-toggle{background:#ffffff4d}.n-card--accent .n-toggle__thumb{background:var(--accent-ink)}.n-eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:currentColor;opacity:.6}.n-title{font-family:var(--font-display);font-size:20px;font-weight:600;letter-spacing:-.02em;line-height:1.05;margin-top:4px;color:currentColor}.n-title--xl{font-size:28px}.n-light__intensity{margin-top:4px;display:flex;flex-direction:column;gap:8px}.n-row-between{display:flex;justify-content:space-between;align-items:baseline}.n-value{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-value--xl{font-size:24px}.n-value__unit{font-size:.6em;opacity:.6;margin-left:2px}.n-light__glow{position:absolute;top:-40px;right:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,var(--accent-soft) 0%,transparent 70%);pointer-events:none;opacity:.85}.n-card--accent .n-light__glow{background:radial-gradient(circle,rgba(255,255,255,.25) 0%,transparent 70%)}.n-slider{-webkit-appearance:none;appearance:none;width:100%;height:10px;border-radius:var(--r-pill);background:linear-gradient(to right,var(--accent) var(--val, 0%),var(--bg-inset) var(--val, 0%));outline:none;margin:0;padding:0;cursor:pointer}.n-slider::-webkit-slider-runnable-track{height:10px;border-radius:var(--r-pill);background:transparent}.n-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);box-shadow:0 1px 3px #00000026;cursor:pointer;margin-top:-3px}.n-slider::-moz-range-track{height:10px;border-radius:var(--r-pill);background:var(--bg-inset)}.n-slider::-moz-range-progress{height:10px;border-radius:var(--r-pill);background:var(--accent)}.n-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-card);cursor:pointer}.n-card--accent .n-slider{background:linear-gradient(to right,rgba(255,255,255,.5) var(--val, 0%),rgba(255,255,255,.2) var(--val, 0%))}.n-card--accent .n-slider::-moz-range-track{background:#fff3}.n-card--accent .n-slider::-moz-range-progress{background:#ffffff80}.n-card--accent .n-slider::-webkit-slider-thumb{background:var(--accent-ink);border-color:var(--accent)}.n-muted{font-size:13px;color:var(--ink-3)}.n-card--accent .n-muted{color:#ffffffd9}.n-blinds{display:flex;flex-direction:column;gap:2px;width:36px;height:44px}.n-blinds__bar{flex:1;background:var(--ink-4);border-radius:1px;opacity:.25;transition:opacity .24s}.n-blinds__bar[data-active=true]{opacity:1}.n-power{display:flex;align-items:baseline;gap:4px;margin-top:4px;font-family:var(--font-display);font-weight:600;letter-spacing:-.02em}.n-power__value{font-size:24px;color:var(--ink-1)}.n-power__value--muted{color:var(--ink-3)}.n-power__unit{font-size:12px;color:var(--ink-3)}.n-card--compact{min-height:130px;padding:18px}.n-title--sm{font-size:16px}.n-dot{width:8px;height:8px;border-radius:50%;background:var(--positive);margin-left:auto}.n-card[data-status=on] .n-dot{background:var(--accent)}.n-card[data-status=on][data-alert=true] .n-dot{background:var(--danger);box-shadow:0 0 0 4px color-mix(in srgb,var(--danger) 25%,transparent)}.n-card[data-status=indisponible] .n-dot{background:var(--ink-4)}.n-binary-state{font-family:var(--font-sans);font-size:13px;color:var(--ink-3);margin-top:4px}.n-card[data-status=on][data-alert=true] .n-binary-state{color:var(--danger);font-weight:500}.n-card[data-status=on]:not([data-alert=true]) .n-binary-state{color:var(--ink-1)}.n-card[data-status=on] .n-icon-bubble{background:var(--accent-soft);color:var(--accent-deep)}.n-card[data-status=on][data-alert=true] .n-icon-bubble{background:color-mix(in srgb,var(--danger) 18%,var(--bg-card));color:var(--danger)}.n-climate__temp{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-top:4px}.n-climate__steppers{display:flex;gap:8px;margin-top:auto}.n-stepper{flex:1;height:36px;border-radius:var(--r-pill);background:var(--bg-inset);color:var(--ink-1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .18s}.n-stepper:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-stepper:disabled{opacity:.4;cursor:not-allowed}.n-card--accent .n-stepper{background:#ffffff2e;color:var(--accent-ink)}.n-battery{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;color:var(--ink-3)}.n-vacuum__actions{display:flex;gap:8px;margin-top:auto}.n-pill-btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 10px;border-radius:var(--r-pill);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:12px;font-weight:500;cursor:pointer;transition:background .18s}.n-pill-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-pill-btn:disabled{opacity:.45;cursor:not-allowed}.n-card--accent .n-pill-btn{background:#ffffff2e;color:var(--accent-ink)}.n-sensor__readout{display:flex;align-items:baseline;gap:4px;margin-top:auto}.n-media__track{margin-top:2px}.n-media__title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:currentColor;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-media__controls{display:flex;align-items:center;justify-content:center;gap:8px;margin-top:auto}.n-icon-btn{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-1);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .18s}.n-icon-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 22%,var(--bg-inset))}.n-icon-btn:disabled{opacity:.4;cursor:not-allowed}.n-icon-btn--primary{width:44px;height:44px;background:var(--accent);color:var(--accent-ink)}.n-icon-btn--primary:hover:not(:disabled){background:var(--accent-deep)}.n-card--accent .n-icon-btn{background:#fff3;color:var(--accent-ink)}.n-card--accent .n-icon-btn--primary{background:var(--accent-ink);color:var(--accent)}.n-media__volume{display:flex;align-items:center;gap:8px;margin-top:8px;color:var(--ink-3)}.n-media__volume .n-slider{flex:1}.n-alarm__modes{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:auto}.n-mode-btn{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:8px 4px;border-radius:var(--r-md, 12px);border:none;background:var(--bg-inset);color:var(--ink-1);font-family:var(--font-sans);font-size:11px;font-weight:500;cursor:pointer;transition:background .18s,color .18s}.n-mode-btn:hover:not(:disabled){background:color-mix(in srgb,var(--accent) 20%,var(--bg-inset))}.n-mode-btn[data-active=true]{background:var(--accent);color:var(--accent-ink)}.n-mode-btn:disabled{opacity:.45;cursor:not-allowed}.n-mode-btn--disarm{grid-column:span 3;flex-direction:row;padding:8px 12px;font-size:12px}.n-card--camera{padding:0;overflow:hidden}.n-card--camera .n-card__head,.n-card--camera .n-eyebrow,.n-card--camera .n-title,.n-card--camera .n-binary-state{padding-left:18px;padding-right:18px}.n-card--camera .n-card__head{padding-top:14px}.n-card--camera .n-binary-state{padding-bottom:16px}.n-card__head--inline{margin-bottom:0}.n-camera__frame{position:relative;width:100%;aspect-ratio:16 / 9;background:var(--bg-inset);display:flex;align-items:center;justify-content:center;overflow:hidden}.n-camera__img{width:100%;height:100%;object-fit:cover;display:block}.n-camera__placeholder{color:var(--ink-3);display:flex;align-items:center;justify-content:center}.n-camera__live{position:absolute;top:8px;left:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;padding:3px 8px;border-radius:var(--r-pill);background:var(--danger);color:#fff}@keyframes n-fan-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.n-fan-spin svg{animation:n-fan-spin 2.4s linear infinite;transform-origin:50% 50%}@media(prefers-reduced-motion:reduce){.n-fan-spin svg{animation:none}}.nido-topbar__actions{display:flex;align-items:center;gap:12px}.n-pill-btn--ghost{background:transparent;color:var(--ink-2);font-size:11px;letter-spacing:.06em;padding:6px 12px;border:1px solid var(--ink-4)}.n-pill-btn--ghost:hover:not(:disabled){background:var(--bg-inset);color:var(--ink-1)}.nido-weather-pill{display:inline-flex;align-items:center;gap:10px;padding:6px 14px 6px 10px;background:var(--bg-card);border:1px solid var(--ink-4);border-radius:999px;font-family:var(--font-sans);color:var(--ink-1)}.nido-weather-pill__icon{display:inline-flex;align-items:center;color:var(--accent)}.nido-weather-pill__temp{font-family:var(--font-display);font-size:13px;font-weight:500;letter-spacing:-.01em}.nido-weather-pill__sep{width:1px;height:12px;background:var(--ink-4)}.nido-weather-pill__label{font-size:12px;color:var(--ink-3)}.nido-lights-pill-btn{background:none;border:none;padding:0;cursor:pointer;display:inline-flex;transition:transform .2s}.nido-lights-pill-btn:hover{transform:scale(1.04)}.nido-lights-pill-btn:active{transform:scale(.96)}.nido-lights-pill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px 8px 10px;background:var(--accent-soft);border-radius:var(--r-pill);font-family:var(--font-sans);color:var(--accent-deep)}.nido-lights-pill__count{font-family:var(--font-display);font-size:13px;font-weight:600;letter-spacing:-.01em}.nido-lights-pill__label{font-size:12px;opacity:.8}.nido-lights-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-lights-panel__title{display:flex;align-items:center;gap:10px;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-lights-panel__count{display:inline-flex;align-items:center;justify-content:center;min-width:28px;height:28px;padding:0 8px;background:var(--accent-soft);color:var(--accent-deep);border-radius:var(--r-pill);font-family:var(--font-display);font-size:14px;font-weight:600}.nido-lights-list{display:flex;flex-direction:column;gap:10px}.nido-lights-row{display:flex;align-items:center;gap:14px;background:var(--bg-card);border-radius:var(--r-lg);padding:14px 16px;transition:opacity .2s}.nido-lights-row.is-pending{opacity:.6;pointer-events:none}.nido-lights-row__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-lights-row__body{flex:1;min-width:0}.nido-lights-row__name{font-family:var(--font-display);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-lights-row__room{font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:2px;text-transform:uppercase;letter-spacing:.06em}.nido-lights-row__pct{font-family:var(--font-mono);font-size:13px;color:var(--ink-3);flex-shrink:0}.nido-lights-panel__footer{padding:16px 32px 24px;border-top:1px solid var(--ink-4)}.nido-lights-panel__all-off{width:100%;padding:12px;border-radius:var(--r-pill);border:1px solid var(--ink-4);background:var(--bg-card);color:var(--ink-1);font-family:var(--font-display);font-size:15px;font-weight:600;cursor:pointer;transition:background .18s,color .18s}.nido-lights-panel__all-off:hover{background:var(--ink-1);color:var(--bg-shell);border-color:var(--ink-1)}.nido-lights-panel__all-off:disabled{opacity:.5;cursor:not-allowed}.nido-cal-widget{cursor:pointer;transition:transform .2s var(--ease-spring),background .2s}.nido-cal-widget:hover{transform:translateY(-2px)}.nido-cal-widget:active{transform:scale(.98)}.nido-cal-widget__bubble{background:color-mix(in srgb,var(--cal-color, var(--ink-3)) 14%,var(--bg-inset))!important;color:var(--cal-color, var(--ink-3))!important}.nido-cal-widget__title{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.01em;line-height:1.2;color:var(--ink-1)}.nido-cal-widget__when{display:flex;align-items:center;gap:6px;font-family:var(--font-sans);font-size:12px;color:var(--ink-3);margin-top:auto}.nido-cal-widget__sep{opacity:.5}.nido-cal-widget__time{font-family:var(--font-mono);font-size:11px;letter-spacing:.04em}.nido-cal-panel__legend{display:flex;align-items:center;gap:16px;padding:10px 32px 12px;border-bottom:1px solid var(--ink-4)}.nido-cal-panel__legend-item{display:flex;align-items:center;gap:7px;font-family:var(--font-mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-2)}.nido-cal-panel__legend-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}.nido-cal-panel__days{display:flex;flex-direction:column;gap:0}.nido-cal-panel__day{display:flex;align-items:flex-start;gap:16px;padding:14px 0;border-bottom:1px dashed var(--ink-4)}.nido-cal-panel__day:last-child{border-bottom:none}.nido-cal-panel__badge{width:44px;height:44px;border-radius:var(--r-md);background:var(--bg-shell);display:flex;flex-direction:column;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s}.nido-cal-panel__day.is-today .nido-cal-panel__badge{background:var(--accent-soft)}.nido-cal-panel__badge-day{font-family:var(--font-mono);font-size:9px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.1em}.nido-cal-panel__day.is-today .nido-cal-panel__badge-day{color:var(--accent-deep)}.nido-cal-panel__badge-num{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-cal-panel__day.is-today .nido-cal-panel__badge-num{color:var(--accent-deep)}.nido-cal-panel__events{flex:1;display:flex;flex-direction:column;gap:8px;padding-top:4px}.nido-cal-panel__empty{font-family:var(--font-sans);font-size:13px;color:var(--ink-4);line-height:44px}.nido-cal-panel__event{display:flex;align-items:flex-start;gap:10px}.nido-cal-panel__event-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;margin-top:5px}.nido-cal-panel__event-body{flex:1;min-width:0}.nido-cal-panel__event-title{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.01em;color:var(--ink-1);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.nido-cal-panel__event-who{font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:var(--ink-3);display:block;margin-top:2px}.nido-cal-panel__event-time{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.04em;flex-shrink:0;padding-top:2px}.n-weather__icon{color:var(--accent)}.n-weather__readout{display:flex;align-items:baseline;gap:4px;margin-top:6px}.n-weather__meta{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;color:var(--ink-3)}.n-weather__sep{width:3px;height:3px;border-radius:50%;background:var(--ink-4)}.nido-room--favorites .nido-section-title h2{color:var(--accent-deep)}.nido-drag-item{display:flex;flex-direction:column;position:relative;min-width:0;touch-action:pan-y;transition:transform .22s var(--ease-out),opacity .22s}.nido-drag-item>*{flex:1 1 auto;min-width:0}.nido-room__grid.is-dragging,.nido-rooms-grid.is-dragging,.nido-room-detail__grid.is-dragging{cursor:grabbing}.nido-room__grid.is-dragging .nido-drag-item,.nido-rooms-grid.is-dragging .nido-room-card,.nido-room-detail__grid.is-dragging .nido-drag-item{cursor:grabbing;user-select:none}[data-dragging=true]{opacity:.45;transform:scale(.97);z-index:2}[data-drag-over=true]{outline:2px dashed var(--accent);outline-offset:4px;transform:translateY(-2px)}.nido-rooms-grid .nido-room-card{touch-action:pan-y}.nido-hero__date{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}.nido-rooms-section{margin-top:28px}.nido-rooms-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}.nido-room-card{position:relative;display:block;width:100%;box-sizing:border-box;text-align:left;background:var(--bg-card);color:var(--ink-1);border:none;border-radius:var(--r-lg);padding:20px;min-height:140px;cursor:pointer;overflow:hidden;font-family:var(--font-sans);transition:transform .2s var(--ease-out),background .2s}.nido-room-card:hover{transform:translateY(-2px)}.nido-room-card--accent{background:var(--ink-1);color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__deco{position:absolute;top:-20px;right:-20px;width:120px;height:120px;pointer-events:none}.nido-room-card__body{position:relative;display:flex;flex-direction:column;height:100%;min-height:100px}.nido-room-card__head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;color:inherit}.nido-room-card__head-right{display:flex;align-items:center;gap:6px}.nido-room-card__presence{display:flex}.nido-room-card__avatar{width:22px;height:22px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);object-fit:cover;margin-left:-6px;background:var(--accent)}.nido-room-card__avatar:first-child{margin-left:0}.nido-room-card__avatar--initial{display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:var(--bg);background:var(--accent);letter-spacing:0}.nido-room-card__icon{width:40px;height:40px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-1);display:flex;align-items:center;justify-content:center}.nido-room-card--accent .nido-room-card__icon{background:#f4ede21f;color:var(--hero-dark-ink, var(--bg-shell))}.nido-room-card__head svg{opacity:.5}.nido-room-card__foot{margin-top:auto}.nido-room-card__name{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px}.nido-room-card__meta{display:flex;gap:10px;font-family:var(--font-sans);font-size:12px;opacity:.65;align-items:center}.nido-room-card__sep{opacity:.4}.nido-room-card__active{display:inline-flex;align-items:center;gap:5px}.nido-room-card__dot{width:6px;height:6px;border-radius:50%;background:var(--accent)}.nido-room-card__stats{margin-top:10px;display:flex;gap:12px}.nido-room-card__stat{font-family:var(--font-display);font-size:14px;font-weight:600;letter-spacing:-.02em;color:inherit;opacity:.85}.nido-room-detail__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px;gap:14px}.nido-room-detail__back{width:44px;height:44px;background:var(--bg-card);color:var(--ink-1)}.nido-room-detail__crumb{flex:1;margin-left:14px;display:flex;flex-direction:column;gap:2px}.nido-room-detail__brand{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.nido-room-detail__head-actions{display:flex;gap:10px}.nido-room-detail__hero{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin:32px 0 0;flex-wrap:wrap}.nido-room-detail__hero-left{display:flex;align-items:center;gap:20px;min-width:0}.nido-room-detail__icon{position:relative;width:72px;height:72px;border-radius:var(--r-xl);background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.nido-room-detail__icon-bg{position:absolute;inset:0;opacity:.2}.nido-room-detail__icon svg{position:relative}.nido-room-detail__hero-meta{display:flex;align-items:center;gap:8px;font-family:var(--font-mono);font-size:10px;color:var(--ink-3);text-transform:uppercase;letter-spacing:.12em;margin-bottom:8px}.nido-room-detail__title{font-family:var(--font-display);font-size:clamp(40px,5vw,56px);font-weight:600;letter-spacing:-.04em;line-height:1;margin:0}.nido-room-detail__stats{display:flex;align-items:center;gap:24px;padding:16px 24px;background:var(--bg-card);border-radius:var(--r-lg);flex-shrink:0}.nido-room-detail__stat-sep{width:1px;height:32px;background:var(--ink-4)}.nido-room-detail__stat .n-eyebrow{margin-bottom:4px;display:block;opacity:.6}.nido-room-detail__stat-value{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.03em;color:var(--ink-1);line-height:1}.nido-room-detail__stat-unit{font-size:13px;color:var(--ink-3);margin-left:2px}.nido-room-detail__filters{margin-top:32px;display:flex;gap:8px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;scrollbar-width:thin;-webkit-overflow-scrolling:touch;width:fit-content;max-width:100%}.nido-room-detail__filters>*{flex:0 0 auto;white-space:nowrap}.nido-room-detail__filters::-webkit-scrollbar{height:4px}.nido-room-detail__filters::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:var(--r-pill)}.n-pill-btn--dark{background:var(--ink-1);color:var(--bg-shell);border:1px solid var(--ink-1);font-size:12px;letter-spacing:.02em;padding:8px 14px}.n-pill-btn--dark:hover:not(:disabled){background:var(--ink-1);opacity:.88}.nido-room-detail__grid{margin-top:24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;align-items:center}@media(max-width:720px){.nido-room-detail__hero{flex-direction:column;align-items:flex-start}.nido-room-detail__stats{width:100%;box-sizing:border-box}}.nido-empty{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding:32px 0}.nido-denied{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:80px 32px}.n-ob{position:fixed;inset:0;z-index:1000;background:var(--bg-canvas);color:var(--ink-1);font-family:var(--font-sans);display:flex;flex-direction:column;padding:16px;box-sizing:border-box;overflow:hidden;max-height:100vh;animation:nido-stagger-in .32s var(--ease-out)}.n-ob__shell{position:relative;flex:1 1 0;background:var(--bg-shell);border-radius:var(--r-2xl);padding:32px;display:flex;flex-direction:column;min-height:0;overflow:hidden;box-sizing:border-box}.n-ob__shell:before{content:"";position:absolute;inset:0;background:var(--time-tint);pointer-events:none}.n-ob__shell>*{position:relative}.n-ob__header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}.n-ob__brand{display:flex;align-items:center;gap:12px}.n-ob__brand-mark{width:36px;height:36px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);display:flex;align-items:center;justify-content:center}.n-ob__brand-name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.03em}.n-ob__stepper{display:flex;align-items:center;gap:6px}.n-ob__step-dot{width:6px;height:6px;border-radius:var(--r-pill);background:var(--ink-4);transition:width .32s var(--ease-spring),background .32s}.n-ob__step-dot.is-done{background:var(--ink-1)}.n-ob__step-dot.is-active{width:24px;background:var(--ink-1)}.n-ob__step-count{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.08em;margin-left:10px}.n-ob__skip{background:none;border:none;color:var(--ink-3);font-family:var(--font-sans);font-size:13px;cursor:pointer;padding:4px 8px}.n-ob__skip:hover{color:var(--ink-1)}.n-ob__body{flex:1;display:flex;min-height:0;animation:nido-stagger-in .48s var(--ease-out) both}.n-ob-step{flex:1;display:grid;gap:32px;align-items:center;min-height:0}.n-ob-step--welcome{grid-template-columns:1.1fr .9fr}.n-ob-step--connect{grid-template-columns:1fr 1fr}.n-ob-step--entities{grid-template-columns:260px 1fr;align-items:stretch}.n-ob-step--theme{grid-template-columns:1fr 1fr}.n-ob-step--family{grid-template-columns:1.1fr .9fr;align-items:start}.n-ob-step__col{display:flex;flex-direction:column;min-width:0}.n-ob-step__illus{position:relative;display:flex;align-items:center;justify-content:center;min-height:320px}.n-ob__eyebrow{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:16px}.n-ob__eyebrow--accent{color:var(--accent-deep)}.n-ob__h1{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);font-weight:600;letter-spacing:-.04em;line-height:.95;margin:0 0 24px}.n-ob__h1 em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob__lead{font-family:var(--font-sans);font-size:16px;line-height:1.5;color:var(--ink-2);max-width:480px;margin:0 0 24px}.n-ob__hint{font-family:var(--font-sans);font-size:12px;color:var(--ink-3)}.n-ob__footer{display:flex;justify-content:space-between;align-items:center;margin-top:20px}.n-ob__back{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--r-pill);background:transparent;border:1px solid var(--ink-4);color:var(--ink-1);font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer}.n-ob__back:disabled{opacity:.4;cursor:not-allowed;color:var(--ink-4)}.n-ob__primary{display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:var(--r-pill);background:var(--ink-1);color:var(--bg-shell);border:none;font-family:var(--font-sans);font-size:14px;font-weight:500;cursor:pointer;letter-spacing:-.01em;transition:opacity .18s}.n-ob__primary:hover{opacity:.88}.n-ob-recap{margin-top:24px;display:flex;flex-direction:column;gap:10px}.n-ob-recap__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:480px}.n-ob-recap__card{background:var(--bg-card);border-radius:var(--r-md);padding:12px 14px}.n-ob-recap__card .n-ob__eyebrow{font-size:10px;letter-spacing:.12em;margin-bottom:6px}.n-ob-recap__card.is-accent{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-recap__value{font-family:var(--font-display);font-size:24px;font-weight:600;letter-spacing:-.025em;line-height:1}.n-ob-recap__hint{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:4px;letter-spacing:.04em}.n-ob-recap__card.is-accent .n-ob-recap__hint{color:var(--accent-deep);opacity:.7}@media(max-width:720px){.n-ob-recap__grid{grid-template-columns:repeat(2,1fr)}}.n-ob-steps-overview{margin-top:32px;display:flex;gap:24px;flex-wrap:wrap}.n-ob-steps-overview__item{display:flex;flex-direction:column;gap:4px}.n-ob-steps-overview__label{font-family:var(--font-display);font-size:14px;font-weight:500;color:var(--ink-1);letter-spacing:-.01em}.n-ob-welcome-illus{position:relative;width:100%;max-width:400px;aspect-ratio:1 / 1;margin:0 auto;align-self:center;justify-self:center}.n-ob-welcome-illus__bg{position:absolute;inset:0;width:100%;height:100%}.n-ob-welcome-illus__corner{position:absolute;width:19%;aspect-ratio:1 / 1;border-radius:16%;display:flex;align-items:center;justify-content:center}.n-ob-welcome-illus__corner--tl{top:14.3%;left:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--positive)}.n-ob-welcome-illus__corner--tr{top:14.3%;right:9.5%;background:var(--bg-card);border:1px solid var(--ink-4);color:var(--ink-3)}.n-ob-welcome-illus__corner--bl{bottom:14.3%;left:9.5%;background:var(--accent-soft);color:var(--accent-deep)}.n-ob-welcome-illus__corner--br{bottom:14.3%;right:9.5%;background:var(--ink-1);color:var(--accent)}.n-ob-cycle{display:flex;align-items:center;justify-content:center;animation:n-ob-cycle-in .48s var(--ease-out)}@keyframes n-ob-cycle-in{0%{opacity:0;transform:translateY(8px) scale(.9)}60%{opacity:1;transform:translateY(0) scale(1.02)}to{opacity:1;transform:translateY(0) scale(1)}}@media(prefers-reduced-motion:reduce){.n-ob-cycle{animation:none}}.n-ob-pill-card{margin-top:24px;padding:16px;border-radius:var(--r-md);background:var(--bg-card);display:flex;align-items:center;gap:14px;max-width:360px}.n-ob-pill-card__title{font-family:var(--font-display);font-size:14px;font-weight:600;color:var(--ink-1)}.n-ob-pill-card__hint{font-size:12px;color:var(--ink-3);margin-top:2px}@keyframes n-ob-scan{0%{opacity:0;r:60}50%{opacity:.6}to{opacity:0;r:180}}.n-ob-scan-ring{animation:n-ob-scan 2.4s var(--ease-out) infinite;transform-origin:190px 190px}@media(prefers-reduced-motion:reduce){.n-ob-scan-ring{animation:none}}.n-ob-connect{flex-direction:column;gap:16px}.n-ob-status-pill{padding:10px 20px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);display:inline-flex;align-items:center;gap:10px}.n-ob-status-pill__dot{width:8px;height:8px;border-radius:50%}.n-ob-status-pill__dot.is-scanning{background:var(--warning)}.n-ob-status-pill__dot.is-found{background:var(--accent)}.n-ob-status-pill__dot.is-connected{background:var(--positive)}.n-ob-status-pill__label{font-family:var(--font-mono);font-size:12px;color:var(--ink-1)}.n-ob-ent__rail{display:flex;flex-direction:column;min-width:0}.n-ob-ent__count{font-family:var(--font-display);font-size:30px;font-weight:600;letter-spacing:-.03em;line-height:1}.n-ob-ent__count-num{color:var(--ink-1)}.n-ob-ent__count-sep{color:var(--ink-3);font-weight:400}.n-ob-ent__list{display:flex;flex-direction:column;gap:4px;max-height:60vh;overflow:auto;padding-right:4px}.n-ob-ent__rail-row{display:flex;align-items:center;gap:12px;padding:10px 12px;border-radius:var(--r-md);background:transparent;color:var(--ink-1);border:none;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:background .2s}.n-ob-ent__rail-row:hover{background:var(--bg-card)}.n-ob-ent__rail-row.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-ent__rail-icon{width:28px;height:28px;border-radius:var(--r-pill);background:var(--bg-card);color:inherit;display:flex;align-items:center;justify-content:center}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-icon{background:#f4ede21f}.n-ob-ent__rail-label{flex:1;font-size:13px;font-weight:500}.n-ob-ent__rail-count{font-family:var(--font-mono);font-size:11px;opacity:.6}.n-ob-ent__rail-row.is-active .n-ob-ent__rail-count{opacity:.8}.n-ob-ent__main{display:flex;flex-direction:column;min-width:0}.n-ob-ent__head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px}.n-ob-ent__title{font-family:var(--font-display);font-size:22px;font-weight:600;letter-spacing:-.02em;margin:0}.n-ob-ent__head-actions{display:flex;gap:8px}.n-ob-ent__search{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:var(--r-pill);background:var(--bg-card);border:1px solid var(--ink-4);margin-bottom:12px}.n-ob-ent__search-icon{display:flex;color:var(--ink-3);flex-shrink:0}.n-ob-ent__search-input{flex:1;min-width:0;border:none;outline:none;background:transparent;color:var(--ink-1);font-family:var(--font-sans);font-size:13px}.n-ob-ent__search-input::placeholder{color:var(--ink-3)}.n-ob-ent__search-clear{border:none;background:transparent;cursor:pointer;color:var(--ink-3);padding:4px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center}.n-ob-ent__search-clear:hover{background:var(--bg-shell);color:var(--ink-1)}.n-ob-ent__empty{grid-column:1 / -1;padding:24px;border-radius:var(--r-md);background:var(--bg-card);font-family:var(--font-sans);font-size:13px;color:var(--ink-3);text-align:center}.n-ob-ent__grid{flex:1;min-height:0;overflow:auto;display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;max-height:56vh;padding-right:4px;animation:nido-stagger-in .36s var(--ease-out) both}.n-ob-ent-card{position:relative;display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-md);background:var(--bg-card);border:1.5px solid transparent;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s}.n-ob-ent-card:hover{border-color:var(--ink-4)}.n-ob-ent-card.is-exposed{border-color:var(--ink-1)}.n-ob-ent-card__icon{width:36px;height:36px;border-radius:var(--r-pill);background:var(--bg-shell);color:var(--ink-3);display:flex;align-items:center;justify-content:center;flex-shrink:0}.n-ob-ent-card__icon.is-on{background:var(--accent-soft);color:var(--accent-deep)}.n-ob-ent-card__body{flex:1;min-width:0}.n-ob-ent-card__name{font-family:var(--font-display);font-size:13px;font-weight:600;color:var(--ink-1);letter-spacing:-.01em;line-height:1.25;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere;word-break:break-word}.n-ob-ent-card__id{font-family:var(--font-mono);font-size:10px;color:var(--ink-3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n-ob-ent-card__star{background:transparent;border:none;color:var(--ink-4);cursor:pointer;padding:4px;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;transition:color .18s,background .18s}.n-ob-ent-card__star:hover{background:var(--bg-shell);color:var(--ink-2)}.n-ob-ent-card__star.is-fav{color:var(--accent)}.n-ob-ent-card__check{width:22px;height:22px;border-radius:50%;background:transparent;border:1.5px solid var(--ink-4);color:var(--bg-shell);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .2s var(--ease-spring)}.n-ob-ent-card__check.is-on{background:var(--ink-1);border-color:var(--ink-1)}.n-ob-theme__grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}.n-ob-theme__tile{background:var(--bg-card);border-radius:var(--r-lg);border:1.5px solid transparent;padding:14px;cursor:pointer;text-align:left;font-family:var(--font-sans);transition:border-color .2s,transform .18s}.n-ob-theme__tile:hover{transform:translateY(-1px)}.n-ob-theme__tile.is-active{border-color:var(--ink-1)}.n-ob-theme__swatches{display:flex;gap:4px;margin-bottom:12px}.n-ob-theme__swatch{flex:1;height:32px;display:block}.n-ob-theme__name{font-family:var(--font-display);font-size:16px;font-weight:600;letter-spacing:-.02em}.n-ob-theme__desc{font-size:12px;color:var(--ink-3);margin-top:2px}.n-ob-theme__modes{display:flex;gap:8px;margin-top:16px}.n-ob-theme__mode{flex:1;padding:12px;border-radius:var(--r-pill);background:var(--bg-card);color:var(--ink-1);border:none;cursor:pointer;font-family:var(--font-sans);font-size:13px;font-weight:500;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .18s,color .18s}.n-ob-theme__mode.is-active{background:var(--ink-1);color:var(--bg-shell)}.n-ob-preview{border-radius:var(--r-xl);padding:24px;align-self:stretch;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;transition:background .32s;min-height:380px}.n-ob-preview__greet{font-family:var(--font-display);font-size:32px;font-weight:600;letter-spacing:-.04em;line-height:1;margin:8px 0 20px}.n-ob-preview__greet em{font-family:var(--font-serif);font-style:italic;font-weight:400}.n-ob-preview__cards{display:grid;grid-template-columns:1.5fr 1fr;gap:10px}.n-ob-preview__hero{border-radius:18px;padding:16px;color:#fff;min-height:100px;position:relative;overflow:hidden}.n-ob-preview__hero-title{font-family:var(--font-display);font-size:18px;font-weight:600;letter-spacing:-.02em}.n-ob-preview__hero-pct{font-family:var(--font-display);font-size:22px;font-weight:600;margin-top:16px}.n-ob-preview__col{display:flex;flex-direction:column;gap:10px}.n-ob-preview__small{border-radius:14px;padding:12px;min-height:50px}.n-ob-preview__small-val{font-family:var(--font-display);font-size:14px;font-weight:600}.n-ob-preview__small-lbl{font-size:10px;opacity:.6}.n-ob-family{align-self:stretch;align-items:stretch;background:var(--bg-card);border-radius:var(--r-xl);padding:20px;flex-direction:column;gap:12px;justify-content:flex-start;min-height:320px}.n-ob-family__list{display:flex;flex-direction:column;gap:8px;max-height:60vh;overflow:auto}.n-ob-family__row{display:flex;align-items:center;gap:14px;padding:12px 14px;border-radius:var(--r-lg);background:var(--bg-shell);cursor:pointer;transition:background .18s,opacity .18s}.n-ob-family__row.is-excluded{opacity:.5;background:var(--bg-inset)}.n-ob-family__avatar{width:40px;height:40px;border-radius:50%;background:var(--accent);color:var(--accent-ink);display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;flex-shrink:0}.n-ob-family__info{flex:1;min-width:0}.n-ob-family__name{font-family:var(--font-display);font-size:15px;font-weight:600;color:var(--ink-1);letter-spacing:-.02em}.n-ob-family__self{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);font-weight:400}.n-ob-family__role{font-family:var(--font-mono);font-size:11px;color:var(--ink-3);letter-spacing:.06em;margin-top:2px}.n-ob-family__toggle{width:20px;height:20px;accent-color:var(--accent);cursor:pointer}.n-ob-family__toggle:disabled{cursor:not-allowed;opacity:.6}@media(max-width:760px){.n-ob-step--welcome,.n-ob-step--connect,.n-ob-step--theme,.n-ob-step--family,.n-ob-step--entities{grid-template-columns:1fr}.n-ob-step{gap:20px}.n-ob-step__illus{min-height:220px}.n-ob-ent__grid{grid-template-columns:1fr}}@media(max-width:600px){.n-ob{padding:8px;overflow:hidden}.n-ob__shell{padding:16px;border-radius:var(--r-xl);min-height:0;height:100%}.n-ob__header{margin-bottom:16px;gap:8px;flex-wrap:nowrap;flex:0 0 auto}.n-ob__brand-mark{width:30px;height:30px}.n-ob__brand-name{font-size:14px}.n-ob__step-count{display:none}.n-ob__skip{font-size:12px;padding:4px}.n-ob__body{display:block;flex:1 1 auto;min-height:0;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}.n-ob-step{gap:16px}.n-ob__h1{font-size:clamp(28px,8vw,40px);margin-bottom:16px}.n-ob__lead{font-size:14px;margin-bottom:16px}.n-ob__eyebrow{margin-bottom:12px;font-size:10px}.n-ob__footer{margin-top:16px;gap:8px;flex:0 0 auto}.n-ob__back{padding:10px 14px;font-size:13px}.n-ob__primary{padding:12px 18px;font-size:13px}.n-ob-welcome-illus{max-width:260px}.n-ob-steps-overview{gap:16px;margin-top:20px}.n-ob-recap__grid{grid-template-columns:1fr 1fr;gap:8px}.n-ob-recap__value{font-size:22px}.n-ob-step__illus{min-height:180px}.n-ob-step__illus svg{width:220px;height:220px}.n-ob-pill-card{margin-top:16px;padding:12px}.n-ob-ent__count{font-size:22px}.n-ob-ent__rail{margin-bottom:4px}.n-ob-ent__list{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;max-height:none;gap:6px;padding-bottom:6px;-webkit-overflow-scrolling:touch}.n-ob-ent__rail-row{flex-shrink:0;padding:6px 10px 6px 6px;gap:8px;border-radius:var(--r-pill);border:1px solid var(--ink-4)}.n-ob-ent__rail-row.is-active{border-color:var(--ink-1)}.n-ob-ent__rail-icon{width:22px;height:22px}.n-ob-ent__rail-label{font-size:12px;flex:0 0 auto}.n-ob-ent__rail-count{font-size:10px}.n-ob-ent__head{flex-wrap:wrap;margin-bottom:10px;gap:8px}.n-ob-ent__title{font-size:18px}.n-ob-ent__head-actions{width:100%}.n-ob-ent__head-actions .n-pill-btn{flex:1;padding:6px 10px;font-size:12px}.n-ob-ent__search{padding:8px 12px;margin-bottom:8px}.n-ob-ent__search-input{font-size:14px}.n-ob-ent__grid{max-height:none;padding-right:0}.n-ob-ent-card{padding:10px;gap:10px}.n-ob-ent-card__icon{width:32px;height:32px}.n-ob-theme__grid{gap:8px}.n-ob-theme__tile{padding:10px}.n-ob-theme__name{font-size:14px}.n-ob-preview{padding:16px}.n-ob-preview__greet{font-size:22px}.n-ob-family{padding:12px;min-height:0}.n-ob-family__list{max-height:none}}.n-scene__activate{margin-top:auto;align-self:stretch}.n-card.is-flashing{animation:n-scene-flash .6s var(--ease-out)}@keyframes n-scene-flash{0%{background:var(--bg-card)}30%{background:var(--accent-soft)}to{background:var(--bg-card)}}.nido-weather-panel{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end}.nido-weather-panel__backdrop{position:absolute;inset:0;background:#0006;backdrop-filter:blur(1px);animation:fade-in .3s ease-out}.nido-weather-panel__content{position:relative;width:100%;max-width:480px;background:var(--bg-shell);box-shadow:-4px 0 32px color-mix(in srgb,var(--accent) 15%,transparent);display:flex;flex-direction:column;animation:slide-in-right .3s cubic-bezier(.16,1,.3,1);overflow:hidden}.nido-weather-panel__header{padding:24px 32px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--fg-rgb),.05)}.nido-weather-panel__header h2{font-family:Comfortaa,sans-serif;font-size:1.5rem;font-weight:600;margin:0;color:var(--fg)}.nido-weather-panel__close{display:flex;align-items:center;justify-content:center;width:36px;height:36px;border:none;background:none;border-radius:50%;color:var(--ink-2);cursor:pointer;transition:background .15s,color .15s;flex-shrink:0}.nido-weather-panel__close:hover{background:rgba(var(--fg-rgb),.07);color:var(--fg)}.nido-weather-panel__scroll{flex:1;overflow-y:auto;padding:24px 32px;display:flex;flex-direction:column;gap:24px}.nido-wp-current{display:flex;align-items:center;gap:24px;padding:16px 0}.nido-wp-current svg{color:var(--accent)}.nido-wp-current-info{display:flex;flex-direction:column;gap:4px}.nido-wp-temp{font-size:3rem;font-weight:300;line-height:1;color:var(--fg);font-variant-numeric:tabular-nums}.nido-wp-desc{font-size:1.125rem;color:var(--fg-muted);text-transform:capitalize}.nido-wp-alert{display:flex;align-items:center;gap:12px;padding:16px;border-radius:12px;font-weight:500}.nido-wp-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.nido-wp-card{background:var(--bg-card);padding:16px;border-radius:16px;border:1px solid var(--border);display:flex;flex-direction:column;gap:8px}.nido-wp-card-head{display:flex;align-items:center;gap:8px;color:var(--fg-muted);font-size:.875rem}.nido-wp-card-val{font-size:1.125rem;font-weight:500;color:var(--fg)}.nido-wp-section h3{font-size:1rem;font-weight:600;color:var(--fg);margin:0 0 16px;font-family:Inter,sans-serif;text-transform:uppercase;letter-spacing:.05em;opacity:.8}.nido-wp-hourly{display:flex;gap:16px;overflow-x:auto;padding-bottom:12px;scrollbar-width:none}.nido-wp-hourly::-webkit-scrollbar{display:none}.nido-wp-hour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:60px;background:var(--bg-card);padding:16px 8px;border-radius:100px;border:1px solid var(--border)}.nido-wp-hour-time{font-size:.875rem;color:var(--fg-muted)}.nido-wp-hour svg{color:var(--accent)}.nido-wp-hour-temp{font-weight:600;font-size:1rem}.nido-wp-hour-precip{font-size:.75rem;color:#0ea5e9;font-weight:500}.nido-wp-daily{display:flex;flex-direction:column;gap:12px}.nido-wp-day{display:flex;align-items:center;gap:16px;padding:12px 16px;background:var(--bg-card);border-radius:12px;border:1px solid var(--border)}.nido-wp-day-name{width:100px;font-weight:500;color:var(--fg);text-transform:capitalize}.nido-wp-day svg{color:var(--accent)}.nido-wp-day-temps{flex:1;display:flex;align-items:center;gap:12px;justify-content:flex-end}.nido-wp-day-min{color:var(--fg-muted);width:32px;text-align:right}.nido-wp-day-max{font-weight:600;width:32px}.nido-wp-day-bar{flex:1;height:4px;background:var(--border);border-radius:2px;position:relative}.nido-weather-pill-btn{background:none;border:none;padding:0;margin:0;cursor:pointer;transition:transform .2s;border-radius:100px;display:inline-flex}.nido-weather-pill-btn:hover{transform:scale(1.05)}.nido-weather-pill-btn:active{transform:scale(.95)}.nido-home-pill{display:flex;align-items:center;gap:12px;background:transparent;border:1px solid var(--b-1);padding:6px 16px 6px 6px;border-radius:99px}.nido-home-pill__avatars{display:flex;align-items:center}.nido-home-pill__avatar{width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--bg-shell);margin-left:-12px;position:relative;transition:transform .2s,z-index .2s}.nido-home-pill__avatar:first-child{margin-left:0}.nido-home-pill__avatar:hover{z-index:10;transform:translateY(-2px)}.nido-home-pill__text{font-size:15px;color:var(--ink-2);font-weight:500;white-space:nowrap}.nido-notification-panel{position:fixed;inset:0;z-index:2000;display:flex;justify-content:flex-end}.nido-notification-panel__backdrop{position:absolute;inset:0;background:#0003;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.nido-notification-panel__content{position:relative;width:100%;max-width:400px;height:100%;background:var(--bg-shell);box-shadow:-8px 0 32px #0000001a;display:flex;flex-direction:column;animation:nido-slide-in-right .4s var(--ease-out)}@keyframes nido-slide-in-right{0%{transform:translate(100%)}to{transform:translate(0)}}.nido-notification-panel__header{padding:24px 32px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ink-4)}.nido-notification-panel__header h2{margin:0;font-family:var(--font-display);font-size:24px;font-weight:600;color:var(--ink-1)}.nido-notification-panel__close{width:36px;height:36px;border-radius:50%;border:none;background:var(--bg-inset);color:var(--ink-2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s}.nido-notification-panel__close:hover{background:var(--ink-4)}.nido-notification-panel__scroll{flex:1;overflow-y:auto;padding:16px 32px 32px}.nido-notification-empty{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--ink-3);text-align:center}.nido-notification-empty__icon{margin-bottom:16px;opacity:.2}.nido-notification-list{display:flex;flex-direction:column;gap:12px}.nido-notification-item{position:relative;background:var(--bg-card);border-radius:var(--r-lg);padding:16px;display:flex;gap:14px;transition:transform .2s;border:1px solid transparent}.nido-notification-item:hover{transform:translateY(-2px)}.nido-notification-item__icon{width:40px;height:40px;border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;flex-shrink:0}.nido-notification-item--info .nido-notification-item__icon{background:color-mix(in srgb,var(--accent) 15%,var(--bg-card));color:var(--accent)}.nido-notification-item--warning .nido-notification-item__icon{background:color-mix(in srgb,var(--danger) 15%,var(--bg-card));color:var(--danger)}.nido-notification-item--success .nido-notification-item__icon{background:color-mix(in srgb,var(--positive) 15%,var(--bg-card));color:var(--positive)}.nido-notification-item__body{flex:1;min-width:0}.nido-notification-item__head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px}.nido-notification-item__title{font-family:var(--font-display);font-weight:600;font-size:15px;color:var(--ink-1)}.nido-notification-item__time{font-family:var(--font-mono);font-size:10px;color:var(--ink-3)}.nido-notification-item__message{margin:0;font-size:13px;color:var(--ink-2);line-height:1.4}.nido-notification-item__dismiss{position:absolute;top:8px;right:8px;width:24px;height:24px;border-radius:50%;border:none;background:transparent;color:var(--ink-3);display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s,background .2s}.nido-notification-item:hover .nido-notification-item__dismiss{opacity:1}.nido-notification-item__dismiss:hover{background:var(--bg-inset);color:var(--ink-1)}.nido-bell-btn{position:relative;background:transparent;color:var(--ink-2);padding:6px 12px;border:1px solid var(--ink-4);border-radius:var(--r-pill);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s;height:32px;min-width:44px}.nido-bell-btn:hover{background:var(--bg-inset);border-color:var(--ink-3)}.nido-bell-btn__badge{position:absolute;top:4px;right:8px;width:8px;height:8px;border-radius:50%;background:var(--accent);border:2px solid var(--bg-shell)}@media(max-width:768px){.nido-topbar__actions{flex-direction:column;align-items:flex-end;gap:8px}.nido-bell-btn{order:2}.n-pill-btn--ghost{order:1}}', $n = "https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Instrument+Serif:ital@0;1&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap";
let Ln = !1;
function Va() {
  if (Ln || typeof document > "u") return;
  if (!document.head.querySelector(`link[href="${$n}"]`)) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = $n, document.head.appendChild(t);
  }
  Ln = !0;
}
class Ha extends HTMLElement {
  constructor() {
    super(), this._hass = null, this._narrow = !1, this._route = { prefix: "", path: "" }, this._panel = {}, Va();
    const t = this.attachShadow({ mode: "open" }), i = document.createElement("style");
    i.textContent = `${Ra}
${Fa}`, this._mountPoint = document.createElement("div"), this._mountPoint.className = "nido-root-mount", t.append(i, this._mountPoint);
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
    const { theme: t, mode: i } = et();
    this.hasAttribute("data-theme") || this.setAttribute("data-theme", t), this.hasAttribute("data-mode") || this.setAttribute("data-mode", i), this._render();
  }
  disconnectedCallback() {
    un(null, this._mountPoint);
  }
  applyTheme(t, i) {
    this.setAttribute("data-theme", t), this.setAttribute("data-mode", i);
  }
  _render() {
    un(Hn(ja, { hass: this._hass, host: this }), this._mountPoint);
  }
}
customElements.get("nido-panel") || customElements.define("nido-panel", Ha);
console.info(
  "%c NIDO %c v0.1.5 ",
  "background:#c75a2a;color:#fff;padding:2px 6px;border-radius:3px 0 0 3px;",
  "background:#1a1410;color:#fff;padding:2px 6px;border-radius:0 3px 3px 0;"
);
//# sourceMappingURL=nido.js.map
